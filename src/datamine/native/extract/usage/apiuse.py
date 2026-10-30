import bisect
import re
import struct
from collections import defaultdict

from extract.binary.arm64 import add_immediate, adr_offset, branch_destination, is_b, is_bl, words
from extract.binary.demangle import demangle
from extract.trace.linking import reference_graph

property_getter = re.compile(r"PartialMusic(?:Async)?Property<A where A (?:==|:) (?:\(extension in \w+\):)?(?:\w+\.)?([\w.]+)>\.(\w+)\.getter")
static_getter = re.compile(r"^static (\w+)\.(\w+)\.getter$")
request_member = re.compile(r"^(?:static )?(Music\w*Request)(?:<[^>]*>)?\.(.+)$")
keypath_lookback = 6
family_depth = 3
family_hub = 4


def keypath_descriptors(memory, pattern):
    found = []
    data = memory.read(pattern, 48) or b""
    for offset in range(0, len(data) - 3, 4):
        relative = struct.unpack_from("<i", data, offset)[0]
        if not relative or abs(relative) > 1 << 30:
            continue
        target = memory.load_pointer(pattern + offset + (relative & ~1))
        name = target[1] if isinstance(target, tuple) else None
        if name and (name.endswith("vpMV") or name.endswith("vgTq")):
            found.append(name.lstrip("_"))
    return found


def is_adrp_x0(word):
    return word & 0x9F00001F == 0x90000000


def is_add_x0(word):
    return word & 0xFFC003FF == 0x91000000


def owner_of(functions, address):
    return functions[bisect.bisect_right(functions, address) - 1]


def calls_by_function(target):
    image, symbols = target.image, target.symbols
    start = image.text[0]
    named, resolved = defaultdict(set), {}
    for index, word in enumerate(words(image.code())):
        if not (is_bl(word) or is_b(word)):
            continue
        address = start + index * 4
        callee = branch_destination(word, address)
        if image.in_text(callee) and callee in symbols.names:
            name = symbols.names[callee]
        else:
            if callee not in resolved:
                resolved[callee] = symbols.name(callee)
            name = resolved[callee]
        if name and "MusicKit" in name:
            named[owner_of(image.functions, address)].add(name.lstrip("_") if name.startswith("_$") else name)
    keypath_getters = {callee for callee, name in resolved.items() if name and name.lstrip("_") == "swift_getKeyPath"}
    return named, keypath_getters


def keypaths_by_function(target, keypath_getters):
    image = target.image
    start = image.text[0]
    instructions = words(image.code())
    found = defaultdict(set)
    for index, word in enumerate(instructions):
        if not is_bl(word) or branch_destination(word, start + index * 4) not in keypath_getters:
            continue
        for back in range(index - 1, max(index - keypath_lookback, 0), -1):
            first, second = instructions[back - 1], instructions[back]
            if is_adrp_x0(first) and is_add_x0(second):
                pattern = ((start + (back - 1) * 4) & ~0xFFF) + (adr_offset(first) << 12) + add_immediate(second)
                found[owner_of(image.functions, start + index * 4)].update(keypath_descriptors(target.memory, pattern))
                break
    return found


def family(function, edges, reverse, fan_in):
    seen, frontier = {function}, {function}
    for _ in range(family_depth):
        following = set()
        for member in frontier:
            for neighbour in edges.get(member, set()) | reverse.get(member, set()):
                if neighbour not in seen and fan_in.get(neighbour, 0) <= family_hub:
                    following.add(neighbour)
        seen |= following
        frontier = following
    return seen


def classify(text, full):
    match = property_getter.search(full)
    if match:
        return "property", f"{match.group(1)}.{match.group(2)}"
    if ".with(" in text and "MusicItem" in full:
        return "request", "MusicItem.with(_:)"
    if text.startswith("type metadata accessor for "):
        return "type", text.removeprefix("type metadata accessor for ")
    match = static_getter.match(text)
    if match:
        return "property", f"{match.group(1)}.{match.group(2)}"
    match = request_member.match(text)
    if match:
        return "request", f"{match.group(1)}.{match.group(2)}"
    return None, None


def keypath_name(plain, name):
    return plain.get(name, name).removeprefix("property descriptor for ").removeprefix("method descriptor for ").removesuffix(".getter")


def request_sites(target):
    named, keypath_getters = calls_by_function(target)
    keypaths = keypaths_by_function(target, keypath_getters)
    edges, fan_in = reference_graph(target.image)
    reverse = defaultdict(set)
    for source, targets in edges.items():
        for callee in targets:
            reverse[callee].add(source)
    mangled = {name for names in list(named.values()) + list(keypaths.values()) for name in names if name.startswith("$s")}
    plain, full = demangle(mangled), demangle(mangled, simplified=False)
    kinds = {}
    for name, text in plain.items():
        kind, value = classify(text, full.get(name, ""))
        if kind:
            kinds[name] = (kind, value)
    sites = []
    for function, names in sorted(named.items()):
        requests = sorted({kinds[name][1] for name in names if name in kinds and kinds[name][0] == "request"})
        if not requests:
            continue
        types, properties, filters = set(), set(), set()
        for member in family(function, edges, reverse, fan_in):
            for name in keypaths.get(member, ()):
                text = keypath_name(plain, name)
                if text.count(".") == 1:
                    filters.add(text)
            for name in named.get(member, ()):
                kind, value = kinds.get(name, (None, None))
                if kind == "type":
                    types.add(value)
                elif kind == "property":
                    properties.add(value)
        sites.append({"image": target.name, "function": hex(function), "requests": requests, "types": sorted(types), "properties": sorted(properties), "keyPaths": sorted(filters)})
    return sites
