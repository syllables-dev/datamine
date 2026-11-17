from extract.binary.arm64 import adrp_page, branch_destination, is_add_or_sub_immediate, is_adrp, is_bl, is_move_wide, is_orr_top_bit, is_store, move_wide_value, words


def call_sites(image):
    start = image.text[0]
    function_starts = set(image.functions)
    registers = {}
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
            yield address, branch_destination(word, address), registers
            for scratch in range(19):
                registers.pop(scratch, None)
        elif word & 0x7C000000 == 0x14000000 or word & 0xFE000000 == 0xD6000000:
            registers = {}
        elif not is_store(word):
            registers.pop(register, None)
