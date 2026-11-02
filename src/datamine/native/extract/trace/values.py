import re
import struct

from extract.binary.swiftstring import long_string_location, read_long_string, small_string_tags

virtual_low_tag = 0x7A7A_0000_0000_0000
virtual_high_tag = 0x7B7B_0000_0000_0000
literal_string_tags = (0xD, 0x1, 0x9, 0x5, 0xF)
constant_string_flags = (0x7C8, 0x7D0, 0x7C0, 0x7E8)
format_specifier = re.compile(r"%(?:\d+\$)?[-+ #0]*\d*(?:\.\d+)?(?:hh|h|ll|l|z|t|q|j)?([@dDiuUxXoOfeEgGcCsSp%])")


class Values:
    def __init__(self, memory, placeholders, heap):
        self.memory = memory
        self.placeholders = placeholders
        self.heap = heap
        self.strings = {}
        self.objects = {}

    def make_string(self, text):
        number = len(self.strings) + 1
        self.strings[number] = text
        return virtual_low_tag | number, virtual_high_tag | number

    def is_virtual(self, low, high):
        return high >> 48 == virtual_high_tag >> 48 and low >> 48 == virtual_low_tag >> 48

    def decode(self, low, high, verified):
        if self.is_virtual(low, high):
            return self.strings.get(low & 0xFFFF_FFFF_FFFF, "{?}")
        if low == 0 and high == 0:
            return None
        if high >> 60 in small_string_tags:
            return self.decode_small(low, high, verified)
        location = long_string_location(low, high, literal_string_tags)
        if location:
            text = read_long_string(self.memory, *location) if location[1] < 4096 else None
            verified.append(text is not None)
            return text if text is not None else "{bad literal}"
        return self.placeholders.describe(low)

    def decode_small(self, low, high, verified):
        count = (high >> 56) & 0xF
        raw = low.to_bytes(8, "little") + (high & 0x00FF_FFFF_FFFF_FFFF).to_bytes(8, "little")
        text = raw[:count].decode("latin1")
        if any(raw[count:15]) or count == 0 or not all(32 <= ord(character) < 127 for character in text):
            return self.placeholders.describe(low)
        verified.append(True)
        return text

    def string_at(self, emulator, address, verified):
        return self.decode(emulator.read64(address), emulator.read64(address + 8), verified)

    def argument(self, emulator, register, verified):
        value = self.decode(emulator.reg(register), emulator.reg(register + 1), verified)
        return "{unknown}" if value is None else value

    def text(self, emulator, register=0):
        return self.decode(emulator.reg(register), emulator.reg(register + 1), [])

    def make_object_string(self, emulator, text):
        pointer = self.heap.allocate(emulator)
        self.objects[pointer] = text
        return pointer

    def object_string(self, emulator, pointer, verified=None):
        if pointer in self.objects:
            return self.objects[pointer]
        if not pointer or pointer >> 48:
            return self.placeholders.describe(pointer)
        data = emulator.read_bytes(pointer, 32)
        if data is None:
            return self.placeholders.describe(pointer)
        _, flags, text_pointer, length = struct.unpack("<QQQQ", data)
        if text_pointer >> 36:
            text_pointer = self.memory.pointer(text_pointer)
        if isinstance(text_pointer, int) and 0 < length < 8192 and flags & 0xFFFF in constant_string_flags:
            raw = self.memory.read(text_pointer, length) or b""
            if len(raw) == length:
                if verified is not None:
                    verified.append(True)
                return raw.decode("utf-8", "replace")
        return self.placeholders.describe(pointer)

    def format(self, emulator, template):
        out, index, slot, stack = [], 0, 0, emulator.sp()
        for match in format_specifier.finditer(template):
            out.append(template[index:match.start()])
            kind = match.group(1)
            if kind == "%":
                out.append("%")
            else:
                value = emulator.read64(stack + slot * 8)
                slot += 1
                out.append(self.object_string(emulator, value) if kind == "@" else "{" + kind + "}")
            index = match.end()
        out.append(template[index:])
        return "".join(out)

    def model_objc_string(self, emulator, selector):
        argument = lambda register: self.object_string(emulator, emulator.reg(register))
        if selector in ("objc:stringWithFormat:", "objc:initWithFormat:", "objc:stringByAppendingFormat:"):
            base = argument(0) if selector == "objc:stringByAppendingFormat:" else ""
            return self.make_object_string(emulator, base + self.format(emulator, argument(2)))
        if selector in ("objc:appendFormat:", "objc:appendString:"):
            piece = self.format(emulator, argument(2)) if selector == "objc:appendFormat:" else argument(2)
            receiver = emulator.reg(0)
            self.objects[receiver] = self.objects.get(receiver, "") + piece
            return receiver
        if selector in ("objc:stringByAppendingString:", "objc:stringByAppendingPathComponent:"):
            joiner = "/" if "Path" in selector else ""
            return self.make_object_string(emulator, argument(0) + joiner + argument(2))
        if selector in ("objc:stringWithString:", "objc:copy", "objc:mutableCopy", "objc:initWithString:"):
            return self.make_object_string(emulator, argument(2) if "String:" in selector else argument(0))
        if selector in ("objc:string", "objc:new", "objc:alloc"):
            return self.make_object_string(emulator, "")
        return None
