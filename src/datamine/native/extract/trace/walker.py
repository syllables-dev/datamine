import itertools
import json
from collections import Counter, defaultdict

from capstone.arm64 import ARM64_OP_IMM

from extract.binary.arm64 import base_mnemonic, call_mnemonics, conditional_branches, disassemble, indirect_branches, operands, register_index, returns, selects
from extract.trace.emulator import Emulator, Heap, Placeholders
from extract.trace.graph import FunctionGraphs
from extract.trace.values import Values

walk_budget = 20000
select_window = 24
caller_chain_depth = 3
callers_per_function = 12
chains_per_level = 24
chain_combinations = 36

swift_url_apis = {
    "10Foundation12URLQueryItemV4name5value": "URLQueryItem(name:value:)",
    "10Foundation13URLComponentsV4pathSSvs": "URLComponents.path=",
    "10Foundation3URLV22appendingPathComponent": "URL.appendingPathComponent",
    "10Foundation3URLV9appending4path": "URL.appending(path:)",
    "10Foundation3URLV6string": "URL(string:)",
    "10Foundation13URLComponentsV6string": "URLComponents(string:)",
}

objc_url_apis = {
    "objc:URLWithString:": ("URLWithString:", [2]),
    "objc:URLWithString:relativeToURL:": ("URLWithString:relativeToURL:", [2]),
    "objc:initWithString:": ("initWithString:", [2]),
    "objc:componentsWithString:": ("componentsWithString:", [2]),
    "objc:queryItemWithName:value:": ("queryItemWithName:value:", [2, 3]),
    "objc:initWithName:value:": ("initWithName:value:", [2, 3]),
    "objc:setPath:": ("setPath:", [2]),
    "objc:URLByAppendingPathComponent:": ("URLByAppendingPathComponent:", [2]),
    "objc:URLByAppendingPathComponent:isDirectory:": ("URLByAppendingPathComponent:", [2]),
    "objc:mapPropertyKey:toPayloadKeyPath:": ("mapPropertyKey:toPayloadKeyPath:", [2, 3]),
    "objc:mapPropertyKey:toPayloadKeyPaths:valueTransformer:": ("mapPropertyKey:toPayloadKeyPaths:", [2, 3]),
    "objc:mapPropertyKey:toPayloadKeyPaths:valueTransformerFunction:": ("mapPropertyKey:toPayloadKeyPaths:", [2, 3]),
    "objc:setValue:forHTTPHeaderField:": ("setValue:forHTTPHeaderField:", [2, 3]),
}


def url_api(name):
    if name.startswith("objc:"):
        entry = objc_url_apis.get(name)
        return entry[0] if entry else None
    return next((label for key, label in swift_url_apis.items() if key in name), None)


def depends_on_arguments(rows):
    return any("{arg" in str(row.get(key)) for row in rows for key in ("name", "value", "arg"))


def select_inputs(emulator, instruction):
    parts = operands(instruction)
    if len(parts) != 4:
        return None

    def value(name):
        if name in ("xzr", "wzr"):
            return 0
        index = register_index(name)
        if index is None:
            return None
        raw = emulator.reg(index)
        return raw & 0xFFFF_FFFF if name.startswith("w") else raw

    first, second = value(parts[1]), value(parts[2])
    if first is None or second is None:
        return None
    return parts[0], first, second


def flip_select(emulator, instruction, inputs):
    destination, first, second = inputs
    mask = 0xFFFF_FFFF if destination.startswith("w") else 0xFFFF_FFFF_FFFF_FFFF
    alternative = {"csel": second, "csinc": second + 1, "csinv": ~second, "csneg": -second}[base_mnemonic(instruction)] & mask
    register = register_index(destination)
    current = emulator.reg(register) & mask
    emulator.set_reg(register, first & mask if current == alternative else alternative)


class Walker:
    def __init__(self, target, placeholders=None, heap=None, values=None):
        self.target = target
        self.memory = target.memory
        self.image = target.image
        self.symbols = target.symbols
        self.placeholders = placeholders or Placeholders()
        self.heap = heap or Heap()
        self.values = values or Values(self.memory, self.placeholders, self.heap)
        self.graphs = FunctionGraphs(self.image, self.memory, self.placeholders)
        self.results = []
        self.budget = 0
        self.flip = set()
        self.record_targets = set()

    def new_emulator(self, budget=walk_budget):
        self.budget = budget
        return Emulator(self.memory, self.placeholders)

    def callee_name(self, address):
        return self.symbols.name(address)

    def placeholder_registers(self, emulator, name, registers=range(8)):
        for register in registers:
            emulator.set_reg(register, self.placeholders.fresh(name))

    def run_blocks(self, emulator, blocks, trail, function, record_site, stop_at=None):
        for leader in trail:
            for instruction in blocks[leader]:
                if stop_at is not None and instruction.address == stop_at:
                    return
                self.step(emulator, instruction, function, record_site)
                if record_site is not None and instruction.address == record_site:
                    return

    def step(self, emulator, instruction, function, record_site, depth=0):
        mnemonic = base_mnemonic(instruction)
        if mnemonic == "b" or mnemonic in conditional_branches or mnemonic in indirect_branches or mnemonic in returns:
            return
        if mnemonic in call_mnemonics:
            self.step_call(emulator, instruction, mnemonic, function, record_site, depth)
            return
        flipped = select_inputs(emulator, instruction) if mnemonic in selects and instruction.address in self.flip else None
        if not emulator.execute_one(instruction.address):
            return
        if flipped:
            flip_select(emulator, instruction, flipped)

    def step_call(self, emulator, instruction, mnemonic, function, record_site, depth):
        direct = mnemonic == "bl" and instruction.operands and instruction.operands[0].type == ARM64_OP_IMM
        name = self.callee_name(instruction.operands[0].imm) if direct else ""
        recording = instruction.address == record_site and depth == 0
        if recording and mnemonic == "bl" and instruction.operands[0].imm in self.record_targets:
            self.record_definition(emulator, instruction, function)
            return
        outcome = self.model_call(emulator, name, instruction.address, function, recording)
        if outcome is False:
            return
        if not name and emulator.reg(0) in (0, 1) and emulator.reg(2) in (0, 1) and 0 < emulator.reg(1) < 4096:
            buffer = emulator.reg(3)
            if not self.heap.contains(buffer):
                buffer = self.heap.allocate(emulator)
            emulator.set_reg(0, buffer)
            self.placeholder_registers(emulator, "array", range(1, 8))
            return
        if not name and outcome is None and mnemonic == "bl" and depth < 3:
            target = instruction.operands[0].imm
            if self.graphs.contains(target) and self.follow(emulator, target, function, record_site, depth + 1):
                return
        if outcome:
            emulator.set_reg(0, outcome[0])
            emulator.set_reg(1, outcome[1])
        else:
            self.placeholder_registers(emulator, name.lstrip("_") or "indirect")

    def record_definition(self, emulator, instruction, function):
        verified, arguments = [], {}
        for low in (0, 2, 4, 6):
            text = self.values.decode(emulator.reg(low), emulator.reg(low + 1), verified)
            if text and "{" not in text:
                arguments[f"x{low}"] = text
        self.results.append({"image": self.image.name, "function": hex(function), "site": hex(instruction.address), "api": f"definition:{hex(instruction.operands[0].imm)}", "arg": json.dumps(arguments, sort_keys=True), "verified": bool(verified)})
        self.placeholder_registers(emulator, "definition")

    def follow(self, emulator, target, function, record_site, depth):
        route = self.graphs.callee_route(target)
        if not route:
            return False
        blocks, leaders = route
        cost = sum(len(blocks[leader]) for leader in leaders)
        if cost > self.budget:
            return False
        self.budget -= cost
        for leader in leaders:
            for instruction in blocks[leader]:
                self.step(emulator, instruction, function, record_site, depth)
        return True

    def model_call(self, emulator, name, site, function, record=True):
        verified = []
        api = url_api(name)
        if api and not record:
            return None
        if api and name.startswith("objc:"):
            self.record_objc_api(emulator, name, api, site, function, verified)
            return None
        if name.startswith("objc:"):
            produced = self.values.model_objc_string(emulator, name)
            if produced is not None:
                emulator.set_reg(0, produced)
                return False
            return None
        if api:
            self.record_swift_api(emulator, api, site, function, verified)
            return None
        return self.model_swift_string(emulator, name, verified)

    def record_objc_api(self, emulator, name, api, site, function, verified):
        values = [self.values.object_string(emulator, emulator.reg(register), verified) for register in objc_url_apis[name][1]]
        row = {"image": self.image.name, "function": hex(function), "site": hex(site), "api": api}
        if len(values) == 2:
            row["name"], row["value"] = values
        else:
            row["arg"] = values[0]
        row["verified"] = bool(verified) and len(verified) == len(values)
        self.results.append(row)

    def record_swift_api(self, emulator, api, site, function, verified):
        row = {"image": self.image.name, "function": hex(function), "site": hex(site), "api": api}
        if api == "URLQueryItem(name:value:)":
            row["name"] = self.values.decode(emulator.reg(0), emulator.reg(1), verified)
            row["value"] = self.values.decode(emulator.reg(2), emulator.reg(3), verified)
        elif api == "URL.appending(path:)":
            row["arg"] = self.values.string_at(emulator, emulator.reg(0), verified)
        else:
            row["arg"] = self.values.decode(emulator.reg(0), emulator.reg(1), verified)
        row["verified"] = bool(verified) and all(verified)
        self.results.append(row)

    def model_swift_string(self, emulator, name, verified):
        values = self.values
        if "joined9separator" in name and "JoinedSequence" not in name:
            return self.joined(emulator, verified)
        if name == "_$sSS1poiyS2S_SStFZ":
            return values.make_string(values.argument(emulator, 0, verified) + values.argument(emulator, 2, verified))
        if "DefaultStringInterpolationV15literalCapacity" in name:
            return values.make_string("")
        if "SS19stringInterpolation" in name:
            return emulator.reg(0), emulator.reg(1)
        if "DefaultStringInterpolationV13appendLiteral" in name or name == "_$sSS6appendyySSF":
            self.append_string(emulator, values.argument(emulator, 0, verified), verified)
            return False
        if "DefaultStringInterpolationV19appendInterpolation" in name:
            self.append_string(emulator, "{?}", verified)
            return False
        return None

    def append_string(self, emulator, piece, verified):
        target = emulator.reg(20)
        current = self.values.string_at(emulator, target, verified) or ""
        low, high = self.values.make_string(current + piece)
        emulator.write64(target, low)
        emulator.write64(target + 8, high)

    def joined(self, emulator, verified):
        separator = self.values.decode(emulator.reg(0), emulator.reg(1), verified) or ""
        candidates = [emulator.read64(emulator.reg(20)), emulator.reg(20)]
        array = next((candidate for candidate in candidates if 0 < emulator.read64(candidate + 16) < 64), candidates[0])
        count = emulator.read64(array + 16)
        if 0 < count < 64:
            parts = [self.values.string_at(emulator, array + 32 + 16 * index, verified) or "{?}" for index in range(count)]
            return self.values.make_string(separator.join(parts))
        return self.values.make_string("{joined:" + separator + "}")

    def select_sites(self, function, site):
        _, blocks, _, _ = self.graphs.graph(function)
        preceding = [instruction for instruction in blocks[self.graphs.block_containing(function, site)] if instruction.address < site][-select_window:]
        return {instruction.address for instruction in preceding if base_mnemonic(instruction) in selects}

    def collect(self, run):
        before = len(self.results)
        run()
        rows = self.results[before:]
        del self.results[before:]
        return rows

    def emulate_chain(self, chain, limit):
        levels = []
        for function, site in chain:
            blocks, found = self.graphs.paths_to_site(function, site, limit=6)
            if not found:
                return []
            levels.append((blocks, found))

        def run_combinations():
            for combination in itertools.islice(itertools.product(*[found for _, found in levels]), limit):
                emulator = self.new_emulator()
                for level, ((function, site), trail) in enumerate(zip(chain, combination)):
                    innermost = level == len(chain) - 1
                    self.run_blocks(emulator, levels[level][0], trail, function, site if innermost else -1, stop_at=None if innermost else site)

        def run_both():
            run_combinations()
            flips = self.select_sites(*chain[-1])
            if flips:
                self.flip = flips
                run_combinations()
                self.flip = set()

        return self.collect(run_both)

    def url_call_sites(self):
        sites, callers = defaultdict(list), defaultdict(list)
        start = self.image.text[0]
        for instruction in disassemble(self.graphs.code, start):
            if instruction.mnemonic != "bl":
                continue
            target = instruction.operands[0].imm
            if self.graphs.contains(target):
                callers[target].append(instruction.address)
            elif url_api(self.callee_name(target)):
                sites[self.graphs.bounds(instruction.address)[0]].append(instruction.address)
        return sites, callers

    def trace_site(self, function, site, paths, blocks):
        def run():
            flips = self.select_sites(function, site)
            for flip in ([set(), flips] if flips else [set()]):
                self.flip = flip
                for trail in paths:
                    self.run_blocks(self.new_emulator(), blocks, trail, function, site)
            self.flip = set()

        return self.collect(run)

    def lift_through_callers(self, function, site, rows, callers):
        frontier = [[(function, site)]] if depends_on_arguments(rows) else []
        for _ in range(caller_chain_depth):
            next_frontier = []
            for chain in frontier:
                for caller_site in callers.get(chain[0][0], [])[:callers_per_function]:
                    longer = [(self.graphs.bounds(caller_site)[0], caller_site)] + chain
                    found = self.emulate_chain(longer, chain_combinations)
                    for row in found:
                        row["via"] = [hex(address) for _, address in longer[:-1]]
                    rows.extend(row for row in found if not depends_on_arguments([row]))
                    if depends_on_arguments(found):
                        next_frontier.append(longer)
            frontier = next_frontier[:chains_per_level]
            if not frontier:
                break
        return rows

    def site_values(self):
        sites, callers = self.url_call_sites()
        summary = []
        for function, addresses in sorted(sites.items()):
            for site in addresses:
                blocks, paths = self.graphs.paths_to_site(function, site)
                rows = self.lift_through_callers(function, site, self.trace_site(function, site, paths, blocks), callers)
                summary.append(self.site_summary(function, site, paths, rows))
        return summary

    def site_summary(self, function, site, paths, rows):
        if rows:
            api = rows[0]["api"]
        else:
            call = next(instruction for instruction in self.graphs.graph(function)[0] if instruction.address == site)
            api = url_api(self.callee_name(call.operands[0].imm))
        observed = Counter((row.get("name"), row.get("value"), row.get("arg"), row["verified"]) for row in rows)
        return {
            "image": self.image.name,
            "function": hex(function),
            "site": hex(site),
            "api": api,
            "paths": len(paths),
            "observed": [{"name": name, "value": value, "arg": arg, "verified": verified, "paths": count} for (name, value, arg, verified), count in observed.most_common()],
        }
