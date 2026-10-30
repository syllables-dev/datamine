from collections import defaultdict

from extract.binary.arm64 import adrp_page, branch_destination, is_adrp, is_bl, words
from extract.binary.swiftstring import decode_string
from extract.strings.inventory import is_move_wide, is_store, move_wide_value

string_argument_registers = (0, 2, 4, 6)


def is_add_or_sub_immediate(word):
    return word & 0xFF800000 in (0x91000000, 0xD1000000)


def is_orr_top_bit(word):
    return word & 0xFF800000 == 0xB2400000 or word & 0xFFC00000 == 0xB2410000


def literal_arguments(memory, registers):
    literals = []
    for low_register in string_argument_registers:
        low, high = registers.get(low_register), registers.get(low_register + 1)
        if low is None or high is None:
            continue
        text = decode_string(memory, low, high)
        if text:
            literals.append((low_register, text))
    return literals


def calls_with_literals(memory, image):
    start = image.text[0]
    function_starts = set(image.functions)
    registers = {}
    calls = defaultdict(list)
    for index, word in enumerate(words(image.code())):
        address = start + index * 4
        if address in function_starts:
            registers = {}
        register = word & 0x1F
        source = (word >> 5) & 0x1F
        if is_move_wide(word):
            registers[register] = move_wide_value(word, registers.get(register, 0))
        elif is_adrp(word):
            registers[register] = adrp_page(word, address)
        elif is_add_or_sub_immediate(word):
            offset = ((word >> 10) & 0xFFF) << (12 if (word >> 22) & 1 else 0)
            if source in registers and source != 31:
                registers[register] = registers[source] + (offset if word & 0xFF800000 == 0x91000000 else -offset)
            else:
                registers.pop(register, None)
        elif is_orr_top_bit(word):
            if source in registers and word & 0xFFFFFC00 == 0xB2410000:
                registers[register] = registers[source] | 0x8000_0000_0000_0000
            else:
                registers.pop(register, None)
        elif is_bl(word):
            literals = literal_arguments(memory, registers)
            if literals:
                calls[branch_destination(word, address)].append((address, literals))
            for scratch in range(19):
                registers.pop(scratch, None)
        elif word & 0x7C000000 == 0x14000000 or word & 0xFE000000 == 0xD6000000:
            registers = {}
        elif not is_store(word):
            registers.pop(register, None)
    return calls
