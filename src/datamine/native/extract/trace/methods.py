import bisect
import re
from collections import defaultdict

from extract.binary.arm64 import branch_destination, disassemble, is_bl, operands, words
from extract.trace.linking import neighbours, reference_graph

method_case = re.compile(r"DataRequestV6MethodO(\d+)([a-z]+)\w*WC$")
outlined_limit = 16
argument_window = 48
chain_depth = 8
leaving_mnemonics = ("b", "bl", "br", "blr", "braa", "blraa", "braaz", "blraaz", "retaa", "retab")


def outlined_end(memory, image, target):
    if not image.in_text(target):
        return None
    for instruction in disassemble(memory.read(target, outlined_limit * 4), target):
        if instruction.mnemonic == "ret":
            return instruction.address + 4
        if instruction.mnemonic in leaving_mnemonics or instruction.mnemonic.startswith("b."):
            return None
    return None


def method_case_loads(target, start, end, follow_outlined=True):
    memory, image, symbols = target.memory, target.image, target.symbols
    pages, found = {}, []
    for instruction in disassemble(memory.read(start, end - start), start):
        parts = operands(instruction)
        if follow_outlined and instruction.mnemonic == "bl" and parts[0].startswith("#"):
            callee = int(parts[0][1:], 0)
            callee_end = outlined_end(memory, image, callee)
            if callee_end:
                found.extend(method_case_loads(target, callee, callee_end, False))
        elif instruction.mnemonic == "adrp":
            pages[parts[0]] = int(parts[1][1:], 0)
        elif instruction.mnemonic == "ldr" and len(parts) == 3 and parts[1].startswith("[") and parts[1][1:] in pages and parts[2].endswith("]"):
            pointer = memory.load_pointer(pages[parts[1][1:]] + int(parts[2].rstrip("]")[1:], 0))
            name = pointer[1] if isinstance(pointer, tuple) else symbols.get(pointer) if isinstance(pointer, int) else ""
            match = method_case.search(name or "")
            if match:
                found.append(match.group(2)[:int(match.group(1))].upper())
    return found


def immediate_method(memory, address, names):
    window = memory.read(address - argument_window, argument_window)
    for instruction in reversed(list(disassemble(window, address - argument_window))):
        parts = operands(instruction)
        if parts and parts[0] in ("w1", "x1"):
            if instruction.mnemonic in ("mov", "movz", "orr") and parts[-1].startswith("#"):
                return names.get(int(parts[-1][1:], 0) & 0xFF)
            if instruction.mnemonic == "mov" and parts[1] in ("wzr", "xzr"):
                return names.get(0)
            return None
    return None


def method_sites(target, initialiser, names):
    image = target.image
    start = image.text[0]
    found, resolved = [], {}
    for index, word in enumerate(words(image.code())):
        if not is_bl(word):
            continue
        address = start + index * 4
        callee = branch_destination(word, address)
        if callee not in resolved:
            resolved[callee] = target.symbols.name(callee) or ""
        if not initialiser.search(resolved[callee]):
            continue
        owner = image.functions[bisect.bisect_right(image.functions, address) - 1]
        value = immediate_method(target.memory, address, names)
        if value is None:
            loads = method_case_loads(target, owner, address)
            value = loads[-1] if loads else None
        found.append((owner, address, value))
    return found


def is_music_api(record):
    return "/v1/" in (record.get("path") or "")


def async_chain_members(function, takes, depth=chain_depth):
    seen, frontier = {function}, {function}
    for _ in range(depth):
        frontier = {neighbour for member in frontier for neighbour in takes.get(member, ())} - seen
        if not frontier:
            break
        seen |= frontier
    return seen


def link_methods(target, requests, initialiser, names):
    sites = method_sites(target, initialiser, names)
    if not sites:
        return 0
    image = target.image
    takes = neighbours(reference_graph(image, ("take",))[0])
    calls = neighbours(reference_graph(image, ("call",))[0])
    by_function = defaultdict(set)
    for function, _, value in sites:
        by_function[function].add(value)
    loads = {}

    def loads_in(function):
        if function not in loads:
            bounds = image.function_bounds(function)
            loads[function] = set(method_case_loads(target, *bounds)) if bounds else set()
        return loads[function]

    linked = 0
    for record in requests:
        if not is_music_api(record):
            continue
        chain = async_chain_members(int(record["function"], 16), takes)
        values = {value for member in chain for value in by_function.get(member, ())}
        if not values:
            values = {value for member in chain for value in loads_in(member)}
        if not values:
            nearby = {neighbour for member in chain for neighbour in calls.get(member, ())}
            values = {value for member in nearby for value in by_function.get(member, ())}
        if len(values) == 1 and None not in values:
            method = next(iter(values))
            if record.get("method") and record["method"] != method:
                record["methodBefore"] = record["method"]
            record["method"] = method
            record["methodFromEnum"] = True
            record["methodSource"] = "MusicDataRequest.Method"
            record.pop("possibleMethods", None)
            linked += 1
        elif values - {None}:
            record["possibleMethodsLinked"] = sorted(values - {None})
    return linked
