import json
import re
import sys
from collections import defaultdict

from extract.binary.arm64 import base_mnemonic, call_mnemonics, callee_saved_registers, disassemble, disassemble_one, indirect_call_mnemonics, returns
from extract.trace.foundation import objc_call, swift_call
from extract.trace.graph import branch_target, is_unconditional_branch, paths_to
from extract.trace.musickit import ResilientTypes, endpoint_call, endpoint_constructor, resilient_type_metadata
from extract.trace.urlmodel import UrlObjects
from extract.trace.walker import Walker

request_markers = re.compile(r"0A11DataRequestV(8musicAPI6method4body15timeoutInterval|10urlRequest)|0A3APIV8EndpointV(07catalogD0|09editorialD0|04userD0|07libraryD0|012intelligenceD0|24recommendationCandidates|19relativeURLLocation|8applying)|13URLComponentsV|12URLQueryItemV|10Foundation3URLV6string|10Foundation3URLV22appendingPathComponent|10Foundation3URLV9appending|10Foundation10URLRequestV|^objc:(URLWithString:|componentsWithString:|componentsWithURL|queryItemWithName:value:|requestWithURL|setPath:|setQueryItems:|setHTTPMethod:|URLByAppendingPathComponent:)")
request_kinds = ("components", "url", "request")
function_budget = 30000
walk_steps = 6000
cross_depth = 6
follow_depth = 3
async_chain_depth = 6
async_family_limit = 24
lift_depth = 2
lift_sites = 6
lift_outer_sites = 3
lift_chains = 12
frontier_limit = 300
discovery_rounds = 4
argument_registers = list(range(0, 8)) + [20]


def needs_lift(record):
    return "{arg" in json.dumps([record["path"], record["host"], record["query"]])


def copy_variant(variant):
    return {key: (list(value) if isinstance(value, list) else dict(value) if isinstance(value, dict) else value) for key, value in variant.items() if key != "kind"}


def exit_blocks(blocks):
    return [leader for leader, body in blocks.items() if base_mnemonic(body[-1]) in returns or (is_unconditional_branch(body[-1]) and branch_target(body[-1]) not in blocks)]


def handoff_block(blocks, following):
    for leader, body in blocks.items():
        pages = {}
        for instruction in body:
            parts = [part.strip() for part in instruction.op_str.split(",")]
            if instruction.mnemonic == "adrp":
                pages[parts[0]] = int(parts[1][1:], 0)
            elif instruction.mnemonic == "add" and len(parts) == 3 and parts[1] in pages and parts[2].startswith("#"):
                if pages[parts[1]] + int(parts[2][1:], 0) == following:
                    return leader
            elif instruction.mnemonic == "adr" and int(parts[1][1:], 0) == following:
                return leader
    return None


class RequestTracer(Walker):
    def __init__(self, target, cross_regions=(), witness_tables=()):
        super().__init__(target)
        self.cross_regions = list(cross_regions)
        self.witness_tables = list(witness_tables)
        self.objects = UrlObjects()
        self.resilient = ResilientTypes()
        self.summaries = {}
        self.request_functions = set()
        self.decoded = {}
        self.method_events = []
        self.current_site = 0
        self.discriminator = None
        self.variant = 0
        self.address_takers = self.find_address_takers()

    def return_object(self, emulator, handle):
        emulator.set_reg(0, handle)
        self.placeholder_registers(emulator, "request", range(1, 8))
        indirect = emulator.reg(8)
        if 0x10000 <= indirect < (1 << 47) and indirect not in self.objects:
            emulator.write64(indirect, handle)
        return True

    def note_site(self, address):
        if self.graphs.contains(address):
            self.current_site = address

    def in_code(self, address):
        return self.graphs.contains(address) or any(start <= address < end for start, end in self.cross_regions)

    def cross_target(self, address):
        if self.graphs.contains(address):
            return None
        resolved = self.symbols.target(address)
        if isinstance(resolved, int) and any(start <= resolved < end for start, end in self.cross_regions):
            return resolved
        if any(start <= address < end for start, end in self.cross_regions):
            return address
        return None

    def instruction_at(self, address):
        if address not in self.decoded:
            self.decoded[address] = disassemble_one(self.memory.read(address, 4), address)
        return self.decoded[address]

    def step(self, emulator, instruction, function, record_site, depth=0):
        if instruction.mnemonic not in call_mnemonics:
            return self.step_unpreserved(emulator, instruction, function, record_site, depth)
        preserved = [(register, emulator.reg(register)) for register in callee_saved_registers]
        self.step_unpreserved(emulator, instruction, function, record_site, depth)
        for register, value in preserved:
            emulator.set_reg(register, value)

    def step_unpreserved(self, emulator, instruction, function, record_site, depth):
        mnemonic = instruction.mnemonic
        if mnemonic == "bl" and self.cross_regions and depth < cross_depth and self.call_across_images(emulator, instruction, function, depth):
            return
        if mnemonic == "movk" and instruction.op_str.startswith("x17,") and instruction.op_str.endswith("lsl #48"):
            self.discriminator = int(instruction.op_str.split(",")[1].strip()[1:], 0)
        if mnemonic in indirect_call_mnemonics and self.call_indirect(emulator, instruction):
            return
        super().step(emulator, instruction, function, record_site, depth)

    def call_across_images(self, emulator, instruction, function, depth):
        crossed = self.cross_target(instruction.operands[0].imm)
        if crossed is None:
            return False
        self.note_site(instruction.address)
        local_name = self.symbols.get(crossed)
        if local_name and endpoint_call(self, emulator, local_name):
            return True
        return self.walk(emulator, crossed, function, depth + 1)

    def call_indirect(self, emulator, instruction):
        register = instruction.op_str.split(",")[0].strip()
        if not register.startswith("x"):
            return False
        target = emulator.reg(int(register[1:]))
        if self.resilient.is_value_witness(target) and self.resilient.call_value_witness(emulator, target):
            return True
        signed_witness_call = instruction.mnemonic == "blraa" and instruction.op_str.endswith("x17") and self.discriminator is not None
        return signed_witness_call and self.witness_value(emulator, self.discriminator)

    def witness_value(self, emulator, discriminator):
        for table in self.witness_tables:
            strings = table.strings(discriminator)
            if strings:
                low, high = self.values.make_string("{oneOf:" + "|".join(strings) + "}")
                emulator.set_reg(0, low)
                emulator.set_reg(1, high)
                return True
        return False

    def model_call(self, emulator, name, site, function, record=True):
        self.note_site(site)
        if name and endpoint_call(self, emulator, name):
            return False
        if name and resilient_type_metadata.match(name):
            emulator.set_reg(0, self.resilient.metadata_for(emulator, name))
            emulator.set_reg(1, 0)
            return False
        if name.startswith("objc:"):
            handled = objc_call(self, emulator, name)
        else:
            handled = swift_call(self, emulator, name) if name else None
        if handled:
            return False
        return super().model_call(emulator, name, site, function, record=False)

    def follow(self, emulator, target, function, record_site, depth):
        local_name = self.symbols.get(target)
        if local_name and endpoint_call(self, emulator, local_name):
            return True
        summary = self.summaries.get(target)
        if summary:
            self.apply_summary(emulator, summary)
            return True
        if depth <= follow_depth and self.walk(emulator, target, function, depth):
            return True
        return super().follow(emulator, target, function, record_site, depth)

    def apply_summary(self, emulator, summary):
        for register, pairs in summary.get("inout", {}).items():
            pointer = emulator.reg(int(register))
            if pointer and not pointer >> 48:
                self.append_items(emulator, pointer, pairs)
        if summary["kind"] == "inout":
            self.placeholder_registers(emulator, "summary", range(0, 8))
            return
        emulator.set_reg(0, self.materialize(emulator, summary))
        self.placeholder_registers(emulator, "summary", range(1, 8))

    def item_buffer(self, emulator, handles):
        buffer = self.heap.allocate(emulator)
        emulator.write64(buffer + 16, len(handles))
        emulator.write64(buffer + 24, len(handles) * 2)
        for index, handle in enumerate(handles):
            emulator.write64(buffer + 32 + index * 8, handle)
        return buffer

    def materialize(self, emulator, summary):
        if summary["kind"] == "items":
            return self.item_buffer(emulator, self.objects.item_handles(summary["items"], origin="summary-item"))
        variant = summary["variants"][self.variant % len(summary["variants"])]
        return self.objects.create(variant["kind"], **copy_variant(variant))

    def append_items(self, emulator, address, pairs):
        current = self.objects.pairs(self.objects.items_in_array(emulator, emulator.read64(address)))
        combined = current + [pair for pair in pairs if pair not in current]
        emulator.write64(address, self.item_buffer(emulator, self.objects.item_handles(combined)))

    def walk(self, emulator, target, function, depth):
        if not self.in_code(target) or self.budget <= 0:
            return False
        pc = target
        for _ in range(walk_steps):
            self.budget -= 1
            if self.budget <= 0:
                return True
            instruction = self.instruction_at(pc)
            if instruction is None or instruction.mnemonic in ("ret", "retab", "retaa"):
                return True
            base = base_mnemonic(instruction)
            if base in ("b", "cbz", "cbnz", "tbz", "tbnz"):
                destination = instruction.operands[-1].imm if instruction.operands else None
                if instruction.mnemonic == "b" and destination is not None and not self.in_code(destination):
                    crossed = self.cross_target(destination)
                    if crossed is not None and depth < cross_depth:
                        self.walk(emulator, crossed, function, depth + 1)
                    return True
                pc = self.execute_branch(emulator, pc)
                continue
            if base in ("br", "braa", "brab", "braaz", "brabz"):
                register = instruction.op_str.split(",")[0].strip()
                value = emulator.reg(int(register[1:])) if register.startswith("x") and register[1:].isdigit() else 0
                value = value & 0xFF_FFFF_FFFF if value >> 48 else value
                if self.in_code(value):
                    pc = value
                    continue
                return True
            self.step(emulator, instruction, function, -1, depth)
            pc += 4
        return True

    @staticmethod
    def execute_branch(emulator, pc):
        try:
            emulator.uc.emu_start(pc, 0xFFFF_FFFF_FFFF_FFFF, count=1)
            return emulator.pc()
        except Exception:
            return pc + 4

    def find_address_takers(self):
        takers = defaultdict(set)
        starts = set(self.image.functions)
        pending = {}
        for instruction in disassemble(self.graphs.code, self.image.text[0]):
            mnemonic = instruction.mnemonic
            if mnemonic == "adrp":
                pending[instruction.operands[0].reg] = instruction.operands[1].imm
            elif mnemonic == "add" and len(instruction.operands) == 3 and instruction.operands[1].reg in pending and instruction.operands[2].type == 2:
                taken = pending.pop(instruction.operands[1].reg) + instruction.operands[2].imm
                self.note_taker(takers, starts, taken, instruction.address)
            elif mnemonic == "adr" and instruction.operands[1].imm in starts:
                self.note_taker(takers, starts, instruction.operands[1].imm, instruction.address)
        return takers

    def note_taker(self, takers, starts, taken, address):
        if taken not in starts:
            return
        owner = self.image.function_bounds(address)
        if owner and owner[0] != taken:
            takers[taken].add(owner[0])

    def async_chain(self, function):
        chain, current, seen = [], function, {function}
        for _ in range(async_chain_depth):
            takers = sorted(set(self.address_takers.get(current, ())) - seen)
            if not takers:
                break
            current = takers[0]
            seen.add(current)
            chain.append(current)
        return list(reversed(chain))

    def async_family(self, function):
        resumed_by = defaultdict(set)
        for taken, takers in self.address_takers.items():
            for taker in takers:
                resumed_by[taker].add(taken)
        family, frontier = {function}, {function}
        for _ in range(async_chain_depth):
            frontier = {member for current in frontier for member in set(self.address_takers.get(current, ())) | resumed_by.get(current, set())} - family
            if not frontier:
                break
            family |= frontier
            if len(family) > async_family_limit:
                break
        return family

    def run_partial(self, emulator, partial, context_pointer, following):
        _, blocks, successors, _ = self.graphs.graph(partial)
        handoff = handoff_block(blocks, following) if following else None
        goals = ([handoff] if handoff is not None else []) + (exit_blocks(blocks) or [max(blocks)])
        for goal in goals:
            trails = paths_to(blocks, successors, partial, goal, limit=1)
            if trails:
                emulator.set_reg(22, context_pointer)
                self.run_blocks(emulator, blocks, trails[0], partial, -1)
                return

    def is_interesting_call(self, callee):
        if callee in self.summaries or callee in self.request_functions or endpoint_constructor.search(self.symbols.get(callee)):
            return True
        if self.image.in_text(callee):
            return False
        name = self.callee_name(callee)
        return bool(request_markers.search(name)) or "objc:" in name

    def candidate_trails(self, function):
        _, blocks, successors, _ = self.graphs.graph(function)
        targets = exit_blocks(blocks) or [max(blocks)]
        interesting = set()
        for leader, body in blocks.items():
            if any(instruction.mnemonic == "bl" and self.is_interesting_call(instruction.operands[0].imm) for instruction in body):
                interesting.add(leader)
        trails = []
        for block in sorted(interesting):
            heads = paths_to(blocks, successors, function, block, limit=4)
            if not heads:
                continue
            tail = next((found[0][1:] for found in (paths_to(blocks, successors, block, goal, limit=1) for goal in targets) if found), [])
            for head in heads:
                if head + tail not in trails:
                    trails.append(head + tail)
        for goal in targets:
            for trail in paths_to(blocks, successors, function, goal, limit=2):
                if trail not in trails:
                    trails.append(trail)
        return blocks, trails

    def run_caller_prefix(self, emulator, chain_prefix):
        for caller, site in chain_prefix:
            blocks, trails = self.graphs.paths_to_site(caller, site, limit=1)
            if trails:
                self.run_blocks(emulator, blocks, trails[0], caller, -1, stop_at=site)

    def returned_value(self, emulator, indirect):
        for candidate in (emulator.reg(0), emulator.read64(indirect)):
            handle = self.objects.resolve(emulator, candidate)
            if handle is not None and self.objects[handle]["kind"] in request_kinds:
                return ("object", handle)
            items = self.objects.items_in_array(emulator, candidate)
            if items:
                return ("items", items)
        return None

    def run_function(self, function, chain_prefix=()):
        blocks, trails = self.candidate_trails(function)
        found, returned_items, returned_objects, inout = [], [], [], {}
        for index, trail in enumerate(trails):
            self.objects.clear()
            self.resilient.clear()
            self.variant = index
            emulator = self.new_emulator(function_budget)
            indirect = emulator.reg(8)
            arguments = {register: emulator.reg(register) for register in argument_registers}
            context_pointer = emulator.reg(22)
            chain = self.async_chain(function)
            for partial, following in zip(chain, chain[1:] + [function]):
                self.run_partial(emulator, partial, context_pointer, following)
            emulator.set_reg(22, context_pointer)
            self.run_caller_prefix(emulator, chain_prefix)
            self.run_blocks(emulator, blocks, trail, function, -1)
            value = self.returned_value(emulator, indirect)
            escaped = self.collect_escaped(emulator, arguments, inout)
            if value and value[0] == "items":
                returned_items.extend(self.objects.pairs(value[1]))
            elif value:
                returned_objects.append({"kind": self.objects[value[1]]["kind"], **self.objects.snapshot(value[1])})
                escaped.add(value[1])
            produced = self.collect_requests(escaped, found)
            if not produced:
                self.collect_loose_items(returned_items)
        return found, self.summarise(returned_objects, returned_items, inout)

    def collect_escaped(self, emulator, arguments, inout):
        escaped = set()
        for register, pointer in arguments.items():
            items = self.objects.items_in_array(emulator, emulator.read64(pointer))
            if items:
                pairs = inout.setdefault(str(register), [])
                for pair in self.objects.pairs(items):
                    if pair not in pairs:
                        pairs.append(pair)
                escaped.update(items)
        return escaped

    def collect_requests(self, escaped, found):
        produced = False
        for handle in list(self.objects.entries):
            if handle in escaped:
                continue
            record = self.objects.finished(handle)
            if record:
                found.append(record)
                produced = True
        return produced

    def collect_loose_items(self, returned_items):
        for entry in self.objects.entries.values():
            if entry["kind"] == "item" and not entry["consumed"]:
                pair = [entry["name"], entry["value"], entry.get("site")]
                if pair not in returned_items:
                    returned_items.append(pair)

    @staticmethod
    def summarise(returned_objects, returned_items, inout):
        summary = None
        if returned_objects:
            summary = {"kind": "object", "variants": list({json.dumps(value, sort_keys=True): value for value in returned_objects}.values())}
        elif returned_items:
            summary = {"kind": "items", "items": list({json.dumps(value): value for value in returned_items}.values())}
        if inout:
            summary = summary or {"kind": "inout"}
            summary["inout"] = inout
        return summary

    def lift(self, function, found, call_sites):
        pending = [record for record in found if needs_lift(record)]
        if not pending:
            return found
        kept = [record for record in found if not needs_lift(record)]
        chains = [[site] for site in call_sites.get(function, [])[:lift_sites]]
        lifted = []
        for _ in range(lift_depth):
            next_chains = []
            for chain in chains:
                try:
                    results, _ = self.run_function(function, chain_prefix=chain)
                except Exception:
                    continue
                for record in results:
                    if needs_lift(record):
                        next_chains.extend([site] + chain for site in call_sites.get(chain[0][0], [])[:lift_outer_sites])
                    else:
                        record["via"] = [hex(caller) for caller, _ in chain]
                        lifted.append(record)
            chains = next_chains[:lift_chains]
            if not chains:
                break
        return kept + (lifted if lifted else pending)

    def call_graph(self):
        callers, call_sites, roots = defaultdict(set), defaultdict(list), set()
        for instruction in disassemble(self.graphs.code, self.image.text[0]):
            if instruction.mnemonic != "bl":
                continue
            callee = instruction.operands[0].imm
            owner = self.image.function_bounds(instruction.address)
            if owner is None:
                continue
            if self.image.in_text(callee):
                callers[callee].add(owner[0])
                call_sites[callee].append((owner[0], instruction.address))
                if endpoint_constructor.search(self.symbols.get(callee)):
                    roots.add(owner[0])
            elif request_markers.search(self.callee_name(callee)):
                roots.add(owner[0])
        return callers, call_sites, roots

    def trace_function(self, function, call_sites):
        try:
            found, summary = self.run_function(function)
            found = self.lift(function, found, call_sites)
        except Exception as error:
            print(f"  {hex(function)} failed: {error!r}"[:200], file=sys.stderr)
            found, summary = [], None
        for record in found:
            record["function"] = hex(function)
            record["image"] = self.image.name
        return found, summary

    def analyze(self):
        callers, call_sites, roots = self.call_graph()
        order, collected, collected_events = [], [], []
        for first_pass in (True, False):
            requests = []
            self.method_events = []
            seen = set()
            frontier = sorted(roots) if first_pass else list(order)
            for _ in range(discovery_rounds if first_pass else 1):
                builders = set()
                for function in frontier:
                    if function in seen:
                        continue
                    seen.add(function)
                    if first_pass:
                        order.append(function)
                    found, summary = self.trace_function(function, call_sites)
                    requests.extend(found)
                    if summary:
                        self.summaries[function] = summary
                        builders.add(function)
                    if found or summary:
                        self.request_functions.add(function)
                        builders.add(function)
                if first_pass:
                    frontier = sorted({caller for builder in builders for caller in callers.get(builder, ())} - seen)[:frontier_limit]
                    if not frontier:
                        break
            collected.extend(requests)
            collected_events.extend(self.method_events)
        self.method_events = collected_events
        self.assign_methods(collected, callers)
        return collected

    def assign_methods(self, requests, callers):
        by_function = defaultdict(set)
        for site, value in self.method_events:
            owner = self.image.function_bounds(site) if site else None
            if owner and value and "{" not in value:
                by_function[owner[0]].add(value.upper())
        callees = defaultdict(set)
        for callee, sources in callers.items():
            for source in sources:
                callees[source].add(callee)
        for record in requests:
            if record.get("methodFromEnum"):
                record["methodSource"] = "MusicDataRequest.Method"
                continue
            if record["method"] and "{" not in record["method"]:
                record["methodSource"] = "set on request"
                continue
            function = int(record["function"], 16)
            own = set().union(*(by_function.get(member, set()) for member in self.async_family(function)))
            near = set().union(*(by_function.get(neighbour, set()) for neighbour in callers.get(function, set()) | callees.get(function, set())))
            if len(own) == 1:
                record["method"], record["methodSource"] = next(iter(own)), "set in same (async) function"
            elif not own and len(near) == 1:
                record["method"], record["methodSource"] = next(iter(near)), "set in direct caller or callee"
            else:
                record["method"], record["methodSource"] = "GET", "Foundation default"
                possible = sorted((own or near) - {"GET"})
                if possible:
                    record["possibleMethods"] = possible
