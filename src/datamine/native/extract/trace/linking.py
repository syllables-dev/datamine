import bisect
import re
from collections import defaultdict

from extract.binary.arm64 import add_immediate, adr_offset, branch_destination, destination_register, is_adr, is_adrp, is_add_immediate, is_b, is_bl, source_register, words

placeholder = re.compile(r"\{[^}]*\}")
query_item_api = "URLQueryItem(name:value:)"
link_depth = 8
hub_fan_in = 6


def reference_graph(image, kinds=("call", "take")):
    start, end = image.text[0], image.text_end
    instructions = words(image.code())
    functions = image.functions

    def owner(address):
        return functions[bisect.bisect_right(functions, address) - 1] if address >= functions[0] else None

    edges, fan_in = defaultdict(set), defaultdict(int)

    def add(source, target):
        if source is not None and start <= target < end and source != target and target not in edges[source]:
            edges[source].add(target)
            fan_in[target] += 1

    for index, word in enumerate(instructions):
        address = start + index * 4
        if (is_b(word) or is_bl(word)) and "call" in kinds:
            add(owner(address), branch_destination(word, address))
        elif "take" not in kinds:
            continue
        elif is_adrp(word) and index + 1 < len(instructions):
            following = instructions[index + 1]
            if is_add_immediate(following) and source_register(following) == destination_register(word):
                add(owner(address), (address & ~0xFFF) + (adr_offset(word) << 12) + add_immediate(following))
        elif is_adr(word):
            add(owner(address), address + adr_offset(word))
    return edges, fan_in


def neighbours(edges):
    both = defaultdict(set)
    for source, targets in edges.items():
        for target in targets:
            both[source].add(target)
            both[target].add(source)
    return both


def reach(start, edges, fan_in, depth, hub):
    seen, frontier = {start: 0}, [start]
    for level in range(1, depth + 1):
        following = []
        for function in frontier:
            for target in edges.get(function, ()):
                if target in seen or fan_in.get(target, 0) > hub:
                    continue
                seen[target] = level
                following.append(target)
        frontier = following
    return seen


def path_families(records):
    shapes = {placeholder.sub("{x}", record["path"]) for record in records}
    return {shape for shape in shapes if not any(other != shape and other.startswith(shape) for other in shapes)}


def query_item_producers(image, site_rows):
    producers = defaultdict(list)
    for row in site_rows:
        if row["api"] != query_item_api or row["image"] != image.name:
            continue
        for observed in row["observed"]:
            if observed.get("name") and not observed["name"].startswith("{"):
                producers[int(row["function"], 16)].append((observed["name"], observed.get("value"), row["site"]))
    return producers


def link_query_items(image, requests, site_rows):
    edges, fan_in = reference_graph(image)
    builders = defaultdict(list)
    for record in requests:
        if record.get("path") and "/v1/" in record["path"]:
            builders[int(record["function"], 16)].append(record)
    links = []
    for producer, items in query_item_producers(image, site_rows).items():
        if producer in builders:
            continue
        seen = reach(producer, edges, fan_in, link_depth, hub_fan_in)
        reached = sorted((distance, function) for function, distance in seen.items() if function in builders)
        if not reached:
            continue
        nearest = [function for distance, function in reached if distance == reached[0][0]]
        if len(nearest) != 1 or len(path_families(builders[nearest[0]])) != 1:
            continue
        for record in builders[nearest[0]]:
            present = {name for name, _, _ in record["query"]}
            for name, value, site in items:
                if name not in present:
                    record["query"].append([name, value, int(site, 16)])
            record.setdefault("linkedFrom", []).append(hex(producer))
        links.append((hex(producer), hex(nearest[0]), reached[0][0]))
    return links
