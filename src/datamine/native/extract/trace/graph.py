import bisect
import sys
from collections import deque

from capstone.arm64 import ARM64_OP_IMM

from extract.binary.arm64 import base_mnemonic, call_mnemonics, conditional_branches, disassemble, indirect_branches, register_index, returns
from extract.trace.emulator import Emulator

jump_table_lookback = 14
jump_table_limit = 512
callee_size_limit = 0x4000


def branch_target(instruction):
    operand = instruction.operands[-1] if instruction.operands else None
    return operand.imm if operand is not None and operand.type == ARM64_OP_IMM else None


def is_unconditional_branch(instruction):
    return base_mnemonic(instruction) == "b" and instruction.mnemonic == "b"


def ends_in_return(body):
    return base_mnemonic(body[-1]) in returns


def jump_table(instructions, index, start, end, memory, placeholders):
    for back in range(index - 1, max(-1, index - jump_table_lookback), -1):
        candidate = instructions[back]
        if candidate.mnemonic != "cmp" or "#" not in candidate.op_str:
            continue
        register_text, limit_text = [part.strip() for part in candidate.op_str.split(",")[:2]]
        compared = register_index(register_text)
        if compared is None:
            return []
        limit = int(limit_text.lstrip("#"), 0)
        if limit > jump_table_limit:
            return []
        destination = register_index(instructions[index].op_str.split(",")[0].strip())
        if destination is None:
            return []
        targets = set()
        for value in range(limit + 1):
            emulator = Emulator(memory, placeholders)
            emulator.set_reg(compared, value)
            for instruction in instructions[back:index]:
                if base_mnemonic(instruction) in call_mnemonics:
                    break
                if base_mnemonic(instruction) == "b" or base_mnemonic(instruction) in conditional_branches:
                    continue
                emulator.execute_one(instruction.address)
            target = emulator.reg(destination)
            if start <= target < end:
                targets.add(target)
        return sorted(targets)
    return []


def control_flow(instructions, start, end, memory, placeholders):
    leaders = {start}
    tables = {}
    for index, instruction in enumerate(instructions):
        mnemonic = base_mnemonic(instruction)
        if mnemonic == "b" or mnemonic in conditional_branches:
            target = branch_target(instruction)
            if target is not None and start <= target < end:
                leaders.add(target)
            leaders.add(instruction.address + 4)
        elif mnemonic in indirect_branches:
            tables[instruction.address] = jump_table(instructions, index, start, end, memory, placeholders)
            leaders.update(tables[instruction.address])
            leaders.add(instruction.address + 4)
        elif mnemonic in returns:
            leaders.add(instruction.address + 4)
    blocks, current = {}, None
    for instruction in instructions:
        if instruction.address in leaders:
            current = instruction.address
            blocks[current] = []
        blocks[current].append(instruction)
    successors = {leader: block_successors(body[-1], blocks, tables) for leader, body in blocks.items()}
    return blocks, successors


def block_successors(last, blocks, tables):
    mnemonic = base_mnemonic(last)
    following = last.address + 4
    if is_unconditional_branch(last):
        target = branch_target(last)
        return [target] if target in blocks else []
    if mnemonic == "b" or mnemonic in conditional_branches:
        return [target for target in (branch_target(last), following) if target in blocks]
    if mnemonic in indirect_branches:
        return tables.get(last.address, [])
    if mnemonic in returns:
        return []
    return [following] if following in blocks else []


def distances_to(successors, blocks, goal):
    predecessors = {leader: [] for leader in blocks}
    for leader, following in successors.items():
        for target in following:
            predecessors[target].append(leader)
    distance = {goal: 0}
    queue = deque([goal])
    while queue:
        node = queue.popleft()
        for previous in predecessors[node]:
            if previous not in distance:
                distance[previous] = distance[node] + 1
                queue.append(previous)
    return distance


def paths_to(blocks, successors, entry, goal, limit=24):
    distance = distances_to(successors, blocks, goal)
    if entry not in distance:
        return []
    found, budget = [], [20000]

    def walk(node, trail, seen):
        if len(found) >= limit or budget[0] <= 0:
            return
        budget[0] -= 1
        if node == goal:
            found.append(list(trail))
            return
        for following in sorted((target for target in successors[node] if target in distance and target not in seen), key=lambda target: distance[target]):
            seen.add(following)
            trail.append(following)
            walk(following, trail, seen)
            trail.pop()
            seen.discard(following)

    sys.setrecursionlimit(100000)
    walk(entry, [entry], {entry})
    return found


def shortest_path(successors, start, goals):
    previous = {start: None}
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node in goals:
            route = []
            while node is not None:
                route.append(node)
                node = previous[node]
            return list(reversed(route))
        for following in successors.get(node, []):
            if following not in previous:
                previous[following] = node
                queue.append(following)
    return None


class FunctionGraphs:
    def __init__(self, image, memory, placeholders):
        self.functions = image.functions
        self.start = image.text[0]
        self.end = image.text_end
        self.code = image.code()
        self.memory = memory
        self.placeholders = placeholders
        self.graphs = {}
        self.callee_routes = {}

    def contains(self, address):
        return self.start <= address < self.end

    def bounds(self, address):
        index = bisect.bisect_right(self.functions, address) - 1
        end = self.functions[index + 1] if index + 1 < len(self.functions) else self.end
        return self.functions[index], end

    def instructions(self, start, end):
        return list(disassemble(self.code[start - self.start:end - self.start], start))

    def graph(self, start):
        if start not in self.graphs:
            _, end = self.bounds(start)
            instructions = self.instructions(start, end)
            blocks, successors = control_flow(instructions, start, end, self.memory, self.placeholders)
            self.graphs[start] = (instructions, blocks, successors, sorted(blocks))
        return self.graphs[start]

    def block_containing(self, function, address):
        leaders = self.graph(function)[3]
        return leaders[bisect.bisect_right(leaders, address) - 1]

    def paths_to_site(self, function, site, limit=24):
        _, blocks, successors, _ = self.graph(function)
        return blocks, paths_to(blocks, successors, function, self.block_containing(function, site), limit)

    def callee_route(self, target):
        if target not in self.callee_routes:
            self.callee_routes[target] = self.find_callee_route(target)
        return self.callee_routes[target]

    def find_callee_route(self, target):
        index = bisect.bisect_left(self.functions, target)
        if index >= len(self.functions) or self.functions[index] != target:
            return None
        end = self.functions[index + 1] if index + 1 < len(self.functions) else self.end
        if end - target > callee_size_limit:
            return None
        blocks, successors = control_flow(self.instructions(target, end), target, end, self.memory, self.placeholders)
        exits = {leader for leader, body in blocks.items() if ends_in_return(body)}
        route = shortest_path(successors, target, exits) if exits else None
        return (blocks, route) if route else None
