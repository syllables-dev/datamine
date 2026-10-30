import struct
from collections import defaultdict

from extract.binary.arm64 import disassemble, operands
from extract.binary.swiftstring import small_string

literal_function_limit = 48
minimum_implementations = 2
maximum_implementations = 32
direct_calls = ("bl", "blr", "blraa", "blraaz")


def signed_pointers(memory, image):
    found = defaultdict(set)
    for name, (address, size, _) in image.segments.items():
        if name in ("__TEXT", "__LINKEDIT") or not size:
            continue
        data = memory.read(address, size) or b""
        for offset in range(0, len(data) - 7, 8):
            raw = struct.unpack_from("<Q", data, offset)[0]
            is_authenticated = raw >> 63
            uses_address_diversity = (raw >> 50) & 1
            uses_key_b = (raw >> 51) & 1
            if is_authenticated and uses_address_diversity and not uses_key_b:
                target = memory.base + (raw & 0x3_FFFF_FFFF)
                if image.in_text(target):
                    found[(raw >> 34) & 0xFFFF].add(target)
    return found


def returned_literal(memory, image, function):
    bounds = image.function_bounds(function)
    if not bounds or bounds[1] - bounds[0] > literal_function_limit * 4:
        return None
    constants, pages, found = {}, {}, []
    for instruction in disassemble(memory.read(bounds[0], bounds[1] - bounds[0]), bounds[0]):
        parts = operands(instruction)
        mnemonic = instruction.mnemonic
        if mnemonic in direct_calls:
            return None
        register = parts[0].replace("w", "x", 1) if parts and parts[0][:1] in "wx" else None
        if mnemonic in ("mov", "movz") and len(parts) == 2 and parts[1].startswith("#"):
            constants[register] = int(parts[1][1:], 0) & 0xFFFF_FFFF_FFFF_FFFF
        elif mnemonic == "movk" and register in constants:
            shift = int(parts[2].split("#")[1], 0) if len(parts) > 2 else 0
            constants[register] = ((constants[register] & ~(0xFFFF << shift)) | (int(parts[1][1:], 0) << shift)) & 0xFFFF_FFFF_FFFF_FFFF
        elif mnemonic == "adrp":
            pages[register] = int(parts[1][1:], 0)
        elif mnemonic == "add" and len(parts) == 3 and parts[2].startswith("#") and parts[1] in pages:
            text = memory.cstring(pages[parts[1]] + int(parts[2][1:], 0) + 0x20, 512)
            if len(text) > 15 and text.isprintable():
                found.append(text)
            continue
        else:
            continue
        if "x0" in constants and "x1" in constants:
            text = small_string(constants["x0"], constants["x1"])
            if text and text not in found:
                found.append(text)
    return found[0] if len(found) == 1 else None


class WitnessTable:
    def __init__(self, memory, image):
        self.memory = memory
        self.image = image
        self.implementations = signed_pointers(memory, image)
        self.literals = {}

    def strings(self, discriminator):
        if discriminator not in self.literals:
            targets = self.implementations.get(discriminator, ())
            values = [returned_literal(self.memory, self.image, target) for target in sorted(targets)]
            usable = values and minimum_implementations <= len(values) <= maximum_implementations and all(values)
            self.literals[discriminator] = sorted(set(values)) if usable else None
        return self.literals[discriminator]
