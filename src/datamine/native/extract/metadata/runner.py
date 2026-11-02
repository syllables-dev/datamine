import re
import struct

from capstone.arm64 import ARM64_OP_IMM
from unicorn import UC_ARCH_ARM64, UC_HOOK_MEM_FETCH_UNMAPPED, UC_HOOK_MEM_READ_UNMAPPED, UC_HOOK_MEM_WRITE_UNMAPPED, UC_MODE_ARM, UC_PROT_ALL, Uc, UcError
from unicorn.arm64_const import UC_ARM64_REG_LR, UC_ARM64_REG_PC, UC_ARM64_REG_SP, UC_ARM64_REG_X0, UC_ARM64_REG_X29

from extract.binary.arm64 import disassemble_one
from extract.binary.memory import Memory
from extract.binary.swiftstring import decode_string, encode_small_string, long_string_words

page_size = 0x10000
return_marker = 0x7E00_0000_0000
heap_start = 0x6000_0000_0000
stack_top = 0x7F00_0000_0000
placeholder_base = 0x5100_0000_0000
unknown_result_base = 0x5000_0000_0000
mapped_page_limit = 30000
once_done = 0xFFFF_FFFF_FFFF_FFFF
mask64 = 0xFFFF_FFFF_FFFF_FFFF
retain_call = re.compile(r"swift_(retain|bridgeObjectRetain|unknownObjectRetain)")
release_call = re.compile(r"(release|Release)")
returns = ("retab", "retaa", "ret")
indirect_branches = ("braa", "brab", "braaz", "brabz", "br")
calls = ("bl", "blr", "blraa", "blrab", "blraaz", "blrabz")


class EmulatedMemory(Memory):
    def __init__(self, runner):
        self.runner = runner

    def read(self, address, size):
        try:
            self.runner.map(address, size)
            return bytes(self.runner.uc.mem_read(address, size))
        except UcError:
            return None


class FunctionRunner:
    def __init__(self, target):
        self.memory = target.memory
        self.image = target.image
        self.symbols = target.symbols
        self.uc = Uc(UC_ARCH_ARM64, UC_MODE_ARM)
        self.mapped = set()
        self.uc.hook_add(UC_HOOK_MEM_READ_UNMAPPED | UC_HOOK_MEM_WRITE_UNMAPPED | UC_HOOK_MEM_FETCH_UNMAPPED, self.on_unmapped)
        self.map(stack_top - 0x100000, 0x200000)
        self.map(return_marker, page_size)
        self.heap_next = heap_start
        self.decoded = {}
        self.calls = []
        self.call_strings = []
        self.emulated_memory = EmulatedMemory(self)

    def with_placeholder_registers(self):
        for register in range(29):
            self.set_reg(register, placeholder_base + register * 0x1000)
        return self

    def map(self, address, size=page_size):
        start = address & ~(page_size - 1)
        end = (address + size + page_size - 1) & ~(page_size - 1)
        for page in range(start, end, page_size):
            if page in self.mapped:
                continue
            self.uc.mem_map(page, page_size, UC_PROT_ALL)
            self.mapped.add(page)
            data = self.memory.read(page, page_size)
            if data:
                self.uc.mem_write(page, data)

    def on_unmapped(self, uc, access, address, size, value, user):
        if address >= 1 << 48 or len(self.mapped) > mapped_page_limit:
            return False
        self.map(address)
        return True

    def reg(self, index):
        return self.uc.reg_read(UC_ARM64_REG_X0 + index)

    def set_reg(self, index, value):
        self.uc.reg_write(UC_ARM64_REG_X0 + index, value & mask64)

    def u64(self, address):
        try:
            self.map(address, 8)
            return struct.unpack("<Q", self.uc.mem_read(address, 8))[0]
        except UcError:
            return 0

    def write64(self, address, value):
        try:
            self.map(address, 8)
            self.uc.mem_write(address, struct.pack("<Q", value & mask64))
        except UcError:
            pass

    def alloc(self, size):
        address = self.heap_next
        self.heap_next += (max(size, 64) + page_size - 1) & ~(page_size - 1)
        self.map(address, size)
        return address

    def string(self, low, high):
        return decode_string(self.emulated_memory, low, high)

    def string_or_unknown(self, low, high):
        value = self.string(low, high)
        return value if value is not None else "{?}"

    def string_at(self, address):
        return self.string_or_unknown(self.u64(address), self.u64(address + 8))

    def make_string(self, text):
        small = encode_small_string(text)
        if small:
            return small
        data = text.encode("utf-8")
        buffer = self.alloc(len(data) + 0x40)
        self.uc.mem_write(buffer + 0x20, data + b"\0")
        return long_string_words(buffer, len(data))

    def instruction(self, address):
        if address not in self.decoded:
            readable = not heap_start <= address < stack_top
            data = self.memory.read(address, 4) if readable else None
            self.decoded[address] = disassemble_one(data, address)
        return self.decoded[address]

    @staticmethod
    def strip_signature(value):
        if value >> 48 and (value & 0xFFFF_FFFF_FFFF) < (1 << 40):
            return value & 0xFF_FFFF_FFFF
        return value

    def run(self, start, steps=20000):
        self.uc.reg_write(UC_ARM64_REG_LR, return_marker)
        if not self.uc.reg_read(UC_ARM64_REG_SP):
            self.uc.reg_write(UC_ARM64_REG_SP, stack_top)
            self.uc.reg_write(UC_ARM64_REG_X29, stack_top)
        pc = start
        for _ in range(steps):
            if pc == return_marker:
                return True
            instruction = self.instruction(pc)
            if instruction is None:
                return False
            pc = self.execute(instruction, pc)
        return False

    def first_register(self, instruction):
        return self.reg(int(instruction.op_str.split(",")[0].strip()[1:]))

    def execute(self, instruction, pc):
        mnemonic = instruction.mnemonic
        if mnemonic in returns:
            return self.strip_signature(self.uc.reg_read(UC_ARM64_REG_LR))
        if mnemonic in indirect_branches:
            return self.dispatch(self.strip_signature(self.first_register(instruction)), pc + 4, tail=True)
        if mnemonic in calls:
            target = instruction.operands[0].imm if mnemonic == "bl" else self.strip_signature(self.first_register(instruction))
            self.uc.reg_write(UC_ARM64_REG_LR, pc + 4)
            return self.dispatch(target, pc + 4, tail=False)
        if mnemonic == "b" and instruction.operands and instruction.operands[0].type == ARM64_OP_IMM and not self.image.in_text(instruction.operands[0].imm):
            return self.dispatch(instruction.operands[0].imm, self.uc.reg_read(UC_ARM64_REG_LR), tail=True)
        if mnemonic in ("ldraa", "ldrab"):
            self.load_authenticated(instruction)
            return pc + 4
        try:
            self.uc.emu_start(pc, mask64, count=1)
            return self.uc.reg_read(UC_ARM64_REG_PC)
        except UcError:
            return pc + 4

    def load_authenticated(self, instruction):
        parts = re.match(r"x(\d+), \[x(\d+)(?:, #(-?0x[0-9a-f]+|-?\d+))?\]", instruction.op_str)
        if parts:
            base = self.strip_signature(self.reg(int(parts.group(2))))
            self.set_reg(int(parts.group(1)), self.u64(base + int(parts.group(3) or "0", 0)))

    def dispatch(self, target, return_address, tail):
        if target is None:
            return return_address
        if self.image.in_text(target):
            return target
        resolved = self.symbols.target(target)
        name = resolved[1] if isinstance(resolved, tuple) else self.symbols.get(resolved)
        if not name and isinstance(resolved, int) and self.image.in_text(resolved):
            return resolved
        if tail:
            return_address = self.strip_signature(self.uc.reg_read(UC_ARM64_REG_LR))
        return self.call_external(name, return_address)

    def call_external(self, name, return_address):
        if name in ("_swift_once", "_dispatch_once_f"):
            return self.run_once(return_address)
        if name in ("_swift_allocObject", "_swift_slowAlloc", "_malloc"):
            self.allocate(name)
            return return_address
        if "_allocateUninitializedArray" in name:
            self.allocate_array()
            return return_address
        if "_finalizeUninitializedArray" in name or self.string_call(name):
            return return_address
        if retain_call.search(name) or name.startswith("_objc_retain") or release_call.search(name):
            return return_address
        self.calls.append(name)
        self.call_strings.append((name, self.string(self.reg(0), self.reg(1))))
        for register in range(8):
            self.set_reg(register, unknown_result_base + (len(self.calls) << 20) + register * 0x100)
        return return_address

    def run_once(self, return_address):
        token, function, context = self.reg(0), self.reg(1), self.reg(2)
        if self.u64(token) == once_done:
            return return_address
        self.write64(token, once_done)
        self.set_reg(0, context)
        self.uc.reg_write(UC_ARM64_REG_LR, return_address)
        return function

    def allocate(self, name):
        size = self.reg(1) if name == "_swift_allocObject" else self.reg(0)
        address = self.alloc(size if size < 1 << 20 else 64)
        if name == "_swift_allocObject":
            self.write64(address, self.reg(0))
        self.set_reg(0, address)

    def allocate_array(self):
        count = self.reg(0) if self.reg(0) < 4096 else 0
        buffer = self.alloc(32 + count * 64)
        self.write64(buffer + 16, count)
        self.write64(buffer + 24, count * 2)
        self.set_reg(0, buffer)
        self.set_reg(1, buffer + 32)

    def append_to_string_at(self, target, piece):
        low, high = self.make_string(self.string_at(target) + piece)
        self.write64(target, low)
        self.write64(target + 8, high)

    def string_call(self, name):
        if name == "_$sSS6appendyySSF" or "DefaultStringInterpolationV13appendLiteral" in name:
            self.append_to_string_at(self.reg(20), self.string_or_unknown(self.reg(0), self.reg(1)))
            return True
        if "DefaultStringInterpolationV19appendInterpolation" in name:
            self.append_to_string_at(self.reg(20), self.string_at(self.reg(0)))
            return True
        if "SS19stringInterpolation" in name:
            return True
        if name == "_$sSS1poiyS2S_SStFZ":
            result = self.string_or_unknown(self.reg(0), self.reg(1)) + self.string_or_unknown(self.reg(2), self.reg(3))
        elif "DefaultStringInterpolationV15literalCapacity" in name:
            result = ""
        elif "joined9separator" in name and "JoinedSequence" not in name:
            result = self.joined()
        elif name.startswith("_$sSS") and ("lowercased" in name or "uppercased" in name):
            text = self.string_or_unknown(self.reg(0), self.reg(1))
            result = text.lower() if "lowercased" in name else text.upper()
        else:
            return False
        low, high = self.make_string(result)
        self.set_reg(0, low)
        self.set_reg(1, high)
        return True

    def joined(self):
        separator = self.string_or_unknown(self.reg(0), self.reg(1))
        candidates = (self.u64(self.reg(20)), self.reg(20))
        array = next((candidate for candidate in candidates if 0 < self.u64(candidate + 16) < 256), None)
        if not array:
            return separator.join(["{?}"])
        return separator.join(self.string_at(array + 32 + 16 * index) for index in range(self.u64(array + 16)))
