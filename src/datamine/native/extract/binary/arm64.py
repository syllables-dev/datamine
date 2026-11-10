from capstone import CS_ARCH_ARM64, CS_MODE_ARM, Cs

disassembler = Cs(CS_ARCH_ARM64, CS_MODE_ARM)
disassembler.detail = True

call_mnemonics = {"bl", "blr", "blraa", "blrab", "blraaz", "blrabz"}
indirect_call_mnemonics = call_mnemonics - {"bl"}
conditional_branches = {"cbz", "cbnz", "tbz", "tbnz"}
indirect_branches = {"br", "braa", "brab", "braaz", "brabz"}
returns = {"ret", "retaa", "retab", "eret"}
selects = {"csel", "csinc", "csinv", "csneg"}
callee_saved_registers = (19, 20, 22, 23, 24, 25, 26, 27, 28)


def disassemble(code, base):
    offset = 0
    while offset < len(code):
        start = offset
        for instruction in disassembler.disasm(code[offset:], base + offset):
            offset = instruction.address + 4 - base
            yield instruction
        if offset == start:
            offset += 4


def disassemble_one(code, address):
    found = list(disassembler.disasm(code, address, 1)) if code else []
    return found[0] if found else None


def operands(instruction):
    return [operand.strip() for operand in instruction.op_str.split(",")]


def base_mnemonic(instruction):
    return instruction.mnemonic.split(".")[0]


def register_index(text):
    if text in ("xzr", "wzr") or len(text) < 2 or text[0] not in "xw" or not text[1:].isdigit():
        return None
    return int(text[1:])


def sign_extend(value, bits):
    return value - (1 << bits) if value >> (bits - 1) else value


def words(code):
    count = len(code) // 4
    return [int.from_bytes(code[index * 4:index * 4 + 4], "little") for index in range(count)]


def is_bl(word):
    return word & 0xFC000000 == 0x94000000


def is_b(word):
    return word & 0xFC000000 == 0x14000000


def is_adrp(word):
    return word & 0x9F000000 == 0x90000000


def is_adr(word):
    return word & 0x9F000000 == 0x10000000


def is_add_immediate(word):
    return word & 0xFF800000 == 0x91000000


def branch_destination(word, address):
    return address + sign_extend(word & 0x3FFFFFF, 26) * 4


def adr_offset(word):
    return sign_extend(((word >> 5) & 0x7FFFF) << 2 | (word >> 29) & 3, 21)


def adrp_page(word, address):
    return (address & ~0xFFF) + (adr_offset(word) << 12)


def add_immediate(word):
    return (word >> 10) & 0xFFF


def destination_register(word):
    return word & 0x1F


def source_register(word):
    return (word >> 5) & 0x1F


def is_add_or_sub_immediate(word):
    return word & 0xFF800000 in (0x91000000, 0xD1000000)


def is_orr_top_bit(word):
    return word & 0xFF800000 == 0xB2400000 or word & 0xFFC00000 == 0xB2410000


def is_move_wide(word):
    return word & 0x7F800000 in (0x52800000, 0x72800000, 0x12800000)


def move_wide_value(word, current):
    shift = ((word >> 21) & 3) * 16
    value = (word >> 5) & 0xFFFF
    opcode = (word >> 29) & 3
    if opcode == 3:
        result = current & ~(0xFFFF << shift) | (value << shift)
    elif opcode == 2:
        result = value << shift
    else:
        result = ~(value << shift)
    return result & (0xFFFF_FFFF_FFFF_FFFF if word >> 31 else 0xFFFF_FFFF)


def is_indirect_branch(word):
    return word & 0xFFFFFC1F == 0xD61F0000 or word & 0xFFFFF800 == 0xD71F0800


def is_return_or_branch(word):
    return word & 0xFFFFFBFF == 0xD65F0BFF or word & 0xFFFFFC1F == 0xD65F0000 or word & 0xFC000000 in (0x14000000, 0x94000000)


def is_store(word):
    return word & 0x0A000000 == 0x08000000 and not (word >> 22) & 1


def is_adrp_to(word, register):
    return word & 0x9F00001F == 0x90000000 | register


def is_add_x0_x0(word):
    return word & 0xFFC003FF == 0x91000000
