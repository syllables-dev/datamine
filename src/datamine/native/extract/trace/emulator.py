import struct

from unicorn import UC_ARCH_ARM64, UC_HOOK_MEM_FETCH_UNMAPPED, UC_HOOK_MEM_READ_UNMAPPED, UC_HOOK_MEM_WRITE_UNMAPPED, UC_MODE_ARM, UC_PROT_ALL, Uc, UcError
from unicorn.arm64_const import UC_ARM64_REG_PC, UC_ARM64_REG_SP, UC_ARM64_REG_X0, UC_ARM64_REG_X29

page_size = 0x10000
stack_top = 0x7F00_0000_0000
heap_base = 0x6000_0000_0000
heap_span = 1 << 44
heap_block = 1 << 20
placeholder_base = 0x5000_0000_0000
placeholder_span = 0x1000_0000_0000
mapped_page_limit = 20000
mask64 = 0xFFFF_FFFF_FFFF_FFFF


class Placeholders:
    def __init__(self):
        self.names = {}

    def fresh(self, name):
        number = len(self.names) + 1
        self.names[number] = name
        return placeholder_base + (number << 20)

    def describe(self, value):
        if placeholder_base <= value < placeholder_base + placeholder_span:
            name = self.names.get((value - placeholder_base) >> 20)
            if name:
                return "{" + name + "}"
        return "{?}"


class Heap:
    def __init__(self):
        self.blocks = 0

    def allocate(self, emulator):
        self.blocks += 1
        address = heap_base + self.blocks * heap_block
        emulator.map(address, 0x20000)
        return address

    @staticmethod
    def contains(value):
        return heap_base <= value < heap_base + heap_span


class Emulator:
    def __init__(self, memory, placeholders):
        self.memory = memory
        self.uc = Uc(UC_ARCH_ARM64, UC_MODE_ARM)
        self.mapped = set()
        self.uc.hook_add(UC_HOOK_MEM_READ_UNMAPPED | UC_HOOK_MEM_WRITE_UNMAPPED | UC_HOOK_MEM_FETCH_UNMAPPED, self.on_unmapped)
        self.stack = stack_top
        self.map(self.stack - 0x100000, 0x200000)
        for register in range(29):
            self.set_reg(register, placeholders.fresh(f"arg{register}"))
        self.uc.reg_write(UC_ARM64_REG_SP, self.stack)
        self.uc.reg_write(UC_ARM64_REG_X29, self.stack)

    def map(self, address, size=page_size):
        start = address & ~(page_size - 1)
        end = (address + size + page_size - 1) & ~(page_size - 1)
        for page in range(start, end, page_size):
            if page in self.mapped:
                continue
            self.uc.mem_map(page, page_size, UC_PROT_ALL)
            self.mapped.add(page)
            data = self.memory.read_rebased(page, page_size)
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

    def pc(self):
        return self.uc.reg_read(UC_ARM64_REG_PC)

    def sp(self):
        return self.uc.reg_read(UC_ARM64_REG_SP)

    def read64(self, address):
        try:
            return struct.unpack("<Q", self.uc.mem_read(address, 8))[0]
        except UcError:
            try:
                self.map(address)
                return struct.unpack("<Q", self.uc.mem_read(address, 8))[0]
            except UcError:
                return 0

    def write64(self, address, value):
        try:
            self.map(address)
            self.uc.mem_write(address, struct.pack("<Q", value & mask64))
        except UcError:
            pass

    def read_bytes(self, address, size):
        try:
            return bytes(self.uc.mem_read(address, size))
        except UcError:
            self.map(address)
            try:
                return bytes(self.uc.mem_read(address, size))
            except UcError:
                return None

    def execute_one(self, address):
        try:
            self.uc.emu_start(address, address + 4, count=1)
            return True
        except UcError:
            return False

    def execute_from(self, address):
        try:
            self.uc.emu_start(address, mask64, count=1)
            return self.pc()
        except UcError:
            return address + 4
