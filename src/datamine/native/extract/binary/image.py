import bisect
import struct

from extract.binary.memory import MachOFile, segment_command

function_starts_command = 0x26


def read_uleb128(blob, index):
    value, shift = 0, 0
    while True:
        byte = blob[index]
        index += 1
        value |= (byte & 0x7F) << shift
        shift += 7
        if byte < 0x80:
            return value, index


class Image:
    def __init__(self, memory, header, name):
        self.memory = memory
        self.header = header
        self.name = name
        self.sections = {}
        self.segments = {}
        function_starts = None
        command_count, commands_size = struct.unpack_from("<II", memory.read(header, 32), 16)
        commands = memory.read(header + 32, commands_size)
        cursor = 0
        for _ in range(command_count):
            command, size = struct.unpack_from("<II", commands, cursor)
            if command == segment_command:
                self.read_segment(commands, cursor)
            if command == function_starts_command:
                function_starts = struct.unpack_from("<II", commands, cursor + 8)
            cursor += size
        self.text = self.sections.get("__TEXT.__text", (0, 0))
        self.functions = self.read_function_starts(function_starts) if function_starts else []

    def read_segment(self, commands, cursor):
        segment = commands[cursor + 8:cursor + 24].rstrip(b"\0").decode()
        address, size, file_offset = struct.unpack_from("<QQQ", commands, cursor + 24)
        self.segments[segment] = (address, size, file_offset)
        for index in range(struct.unpack_from("<I", commands, cursor + 64)[0]):
            base = cursor + 72 + index * 80
            section = commands[base:base + 16].rstrip(b"\0").decode()
            section_address, section_size = struct.unpack_from("<QQ", commands, base + 32)
            self.sections[f"{segment}.{section}"] = (section_address, section_size)

    def read_function_starts(self, function_starts):
        offset, size = function_starts
        if isinstance(self.memory, MachOFile):
            blob = self.memory.data[offset:offset + size]
        else:
            linkedit = self.segments["__LINKEDIT"]
            blob = self.memory.read(linkedit[0] + offset - linkedit[2], size)
        address, index, functions = self.segments["__TEXT"][0], 0, []
        while index < len(blob):
            delta, index = read_uleb128(blob, index)
            if delta == 0:
                break
            address += delta
            functions.append(address)
        return [function for function in functions if self.in_text(function)]

    @property
    def text_end(self):
        return self.text[0] + self.text[1]

    def section(self, name):
        return self.sections.get(name, (0, 0))

    def in_text(self, address):
        return self.text[0] <= address < self.text_end

    def code(self):
        return self.memory.read(self.text[0], self.text[1]) or b""

    def function_bounds(self, address):
        index = bisect.bisect_right(self.functions, address) - 1
        if index < 0:
            return None
        end = self.functions[index + 1] if index + 1 < len(self.functions) else self.text_end
        return self.functions[index], end

    def function_start(self, address):
        bounds = self.function_bounds(address)
        return bounds[0] if bounds else None
