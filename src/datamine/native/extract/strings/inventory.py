from extract.binary.arm64 import is_indirect_branch, is_move_wide, is_return_or_branch, is_store, move_wide_value, words
from extract.binary.swiftstring import small_string

cstring_sections = ("__TEXT.__cstring", "__TEXT.__oslogstring")
const_section_limit = 64 << 20
small_string_tag = 0xE
native_small_string_tags = (small_string_tag,)


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
                hits = [text for text in (small_string(self.registers[register], high, native_small_string_tags) for register in pool) if text]
                if hits:
                    self.found.update(hits if pool is local else hits[:1])
                    break
        for low_register in list(self.fresh):
            for high_register, high in self.registers.items():
                if high_register != low_register and high_register not in self.fresh and high >> 60 == small_string_tag:
                    text = small_string(self.registers[low_register], high, native_small_string_tags)
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
            text = small_string(low, high, native_small_string_tags)
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
