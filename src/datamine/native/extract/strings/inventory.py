from extract.binary.arm64 import words
from extract.binary.swiftstring import is_printable

cstring_sections = ("__TEXT.__cstring", "__TEXT.__oslogstring")
const_section_limit = 64 << 20
small_string_tag = 0xE


def small_string_pair(low, high):
    if high >> 60 != small_string_tag:
        return None
    count = (high >> 56) & 0xF
    raw = low.to_bytes(8, "little") + (high & 0x00FF_FFFF_FFFF_FFFF).to_bytes(8, "little")
    if count and is_printable(raw[:count]) and not any(raw[count:15]):
        return raw[:count].decode("latin1")
    return None


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


def cstrings(memory, image):
    found = set()
    for name in cstring_sections:
        start, size = image.section(name)
        if not size:
            continue
        for chunk in (memory.read(start, size) or b"").split(b"\0"):
            if len(chunk) >= 2:
                try:
                    found.add(chunk.decode("utf-8"))
                except UnicodeDecodeError:
                    pass
    return found


class SmallStringScanner:
    def __init__(self):
        self.found = set()
        self.registers = {}
        self.fresh = set()
        self.saved = None

    def reset(self):
        self.registers, self.fresh, self.saved = {}, set(), None

    def flush(self):
        for high_register in list(self.fresh):
            high = self.registers.get(high_register)
            if high is None or high >> 60 != small_string_tag:
                continue
            local = [register for register in self.fresh if register != high_register]
            inherited = [register for register in self.registers if register not in self.fresh and register != high_register]
            for pool in (local, inherited):
                hits = [text for text in (small_string_pair(self.registers[register], high) for register in pool) if text]
                if hits:
                    self.found.update(hits if pool is local else hits[:1])
                    break
        for low_register in list(self.fresh):
            for high_register, high in self.registers.items():
                if high_register != low_register and high_register not in self.fresh and high >> 60 == small_string_tag:
                    text = small_string_pair(self.registers[low_register], high)
                    if text:
                        self.found.add(text)

    def scan(self, word):
        if is_move_wide(word):
            register = word & 0x1F
            self.registers[register] = move_wide_value(word, self.registers.get(register, 0))
            self.fresh.add(register)
            return
        if is_indirect_branch(word):
            self.flush()
            self.saved = dict(self.registers)
            self.fresh = set()
            return
        if is_return_or_branch(word):
            self.flush()
            if word & 0xFC000000 == 0x94000000:
                for register in range(19):
                    self.registers.pop(register, None)
            else:
                self.registers = dict(self.saved) if self.saved is not None else {}
            self.fresh = set()
            return
        if is_store(word):
            return
        register = word & 0x1F
        self.registers.pop(register, None)
        self.fresh.discard(register)


def small_strings(memory, image):
    start = image.text[0]
    function_starts = set(image.functions)
    scanner = SmallStringScanner()
    for index, word in enumerate(words(image.code())):
        if start + index * 4 in function_starts:
            scanner.flush()
            scanner.reset()
        scanner.scan(word)
    scanner.flush()
    return scanner.found


def const_strings(memory, image):
    found = set()
    for name, (start, size) in image.sections.items():
        if not name.endswith("__const") or size == 0 or size > const_section_limit:
            continue
        blob = memory.read(start, size) or b""
        for offset in range(0, len(blob) - 15, 8):
            low = int.from_bytes(blob[offset:offset + 8], "little")
            high = int.from_bytes(blob[offset + 8:offset + 16], "little")
            text = small_string_pair(low, high)
            if text and len(text) >= 2:
                found.add(text)
    return found


def drop_splices(found, anchors):
    lows, highs = {}, {}
    for text in anchors:
        if 9 <= len(text) <= 15:
            lows.setdefault(text[:8], set()).add(text)
            highs.setdefault((len(text), text[8:]), set()).add(text)
    kept = set()
    for text in found:
        if 9 <= len(text) <= 15 and text not in anchors:
            low_match = lows.get(text[:8], set()) - {text}
            high_match = highs.get((len(text), text[8:]), set()) - {text}
            if low_match and high_match and low_match != high_match:
                continue
        kept.add(text)
    return kept


def inventory(memory, image):
    return cstrings(memory, image) | small_strings(memory, image) | const_strings(memory, image)
