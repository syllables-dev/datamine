import bisect
import glob
import os
import struct

segment_command = 0x19
chained_fixups_command = 0x80000034
fat_magics = (0xBEBAFECA, 0xCAFEBABE)
cache_pointer_mask = 0x3_FFFF_FFFF
slide_info_version = 5
no_rebase_on_page = 0xFFFF


class Memory:
    def read(self, address, size):
        raise NotImplementedError

    def u32(self, address):
        data = self.read(address, 4)
        return struct.unpack("<I", data)[0] if data and len(data) == 4 else None

    def relative(self, address):
        data = self.read(address, 4)
        return address + struct.unpack("<i", data)[0] if data and len(data) == 4 else None

    def relative_indirect(self, address):
        data = self.read(address, 4)
        if not data or len(data) < 4:
            return None
        offset = struct.unpack("<i", data)[0]
        if offset & 1:
            return ("ptr", address + (offset & ~1))
        return address + offset

    def cstring(self, address, limit=1024):
        data = self.read(address, limit) or b""
        return data.split(b"\0")[0].decode("utf-8", "replace")

    def load_pointer(self, address):
        data = self.read(address, 8)
        return self.pointer(struct.unpack("<Q", data)[0]) if data and len(data) == 8 else None

    def pointer(self, raw):
        raise NotImplementedError

    def read_rebased(self, address, size):
        return self.read(address, size)


class SharedCache(Memory):
    def __init__(self, directory):
        self.mappings = []
        self.slides = []
        self.handles = {}
        for path in sorted(glob.glob(os.path.join(directory, "dyld_shared_cache_arm64e*"))):
            with open(path, "rb") as handle:
                header = handle.read(0x200)
                if not header.startswith(b"dyld_v1"):
                    continue
                self.mappings.extend(self.read_mappings(handle, header, path))
                self.slides.extend(self.read_slides(handle, header))
                if os.path.basename(path) == "dyld_shared_cache_arm64e":
                    self.images_offset, self.images_count = struct.unpack_from("<II", header, 0x1C0)
                    self.main = path
        self.mappings.sort()
        self.mapping_starts = [mapping[0] for mapping in self.mappings]
        self.base = self.mappings[0][0]
        self.slides.sort()
        self.slide_starts = [slide[0] for slide in self.slides]

    @staticmethod
    def read_mappings(handle, header, path):
        offset, count = struct.unpack_from("<II", header, 0x10)
        handle.seek(offset)
        mappings = []
        for _ in range(count):
            address, size, file_offset = struct.unpack("<QQQ", handle.read(24))
            handle.read(8)
            mappings.append((address, size, file_offset, path))
        return mappings

    @staticmethod
    def read_slides(handle, header):
        if len(header) < 0x140:
            return []
        offset, count = struct.unpack_from("<II", header, 0x138)
        if not offset or not count:
            return []
        handle.seek(offset)
        entries = [struct.unpack("<QQQQQQII", handle.read(56)) for _ in range(count)]
        slides = []
        for address, size, _, slide_offset, slide_size, _, _, _ in entries:
            if not slide_size:
                continue
            handle.seek(slide_offset)
            version, page_size, page_count, _, value_add = struct.unpack("<IIIIQ", handle.read(24))
            if version != slide_info_version:
                continue
            page_starts = struct.unpack(f"<{page_count}H", handle.read(page_count * 2))
            slides.append((address, size, page_size, value_add, page_starts))
        return slides

    def read(self, address, size):
        index = bisect.bisect_right(self.mapping_starts, address) - 1
        if index < 0:
            return None
        start, length, file_offset, path = self.mappings[index]
        if not start <= address < start + length:
            return None
        if path not in self.handles:
            self.handles[path] = open(path, "rb")
        handle = self.handles[path]
        handle.seek(file_offset + address - start)
        return handle.read(min(size, start + length - address))

    def read_rebased(self, address, size):
        data = self.read(address, size)
        if not data:
            return data
        index = bisect.bisect_right(self.slide_starts, address) - 1
        if index < 0:
            return data
        mapping, length, page_size, value_add, page_starts = self.slides[index]
        if not mapping <= address < mapping + length:
            return data
        buffer = bytearray(data)
        end = address + len(data)
        first = (address - mapping) // page_size
        last = (end - 1 - mapping) // page_size
        for page in range(first, min(last + 1, len(page_starts))):
            if page_starts[page] == no_rebase_on_page:
                continue
            page_address = mapping + page * page_size
            self.rebase_page(buffer, address, end, page_address, page_size, page_starts[page], value_add)
        return bytes(buffer)

    def rebase_page(self, buffer, address, end, page_address, page_size, offset, value_add):
        page_inside_buffer = address <= page_address and page_address + page_size <= end
        if page_inside_buffer:
            raw_page = bytes(buffer[page_address - address:page_address - address + page_size])
        else:
            raw_page = self.read(page_address, page_size)
        while True:
            location = page_address + offset
            raw = struct.unpack_from("<Q", raw_page, offset)[0] if offset + 8 <= len(raw_page) else 0
            if address <= location and location + 8 <= end:
                struct.pack_into("<Q", buffer, location - address, value_add + (raw & cache_pointer_mask))
            step = (raw >> 52) & 0x7FF
            if step == 0:
                return
            offset += step * 8
            if offset >= page_size:
                return

    def pointer(self, raw):
        if raw is None:
            return None
        return self.base + (raw & cache_pointer_mask)

    def images(self):
        with open(self.main, "rb") as handle:
            handle.seek(self.images_offset)
            entries = [struct.unpack("<QQQII", handle.read(32)) for _ in range(self.images_count)]
            found = {}
            for address, _, _, path_offset, _ in entries:
                handle.seek(path_offset)
                path = handle.read(512).split(b"\0")[0].decode()
                found[path] = address
            return found


class MachOFile(Memory):
    def __init__(self, path):
        with open(path, "rb") as handle:
            self.data = handle.read()
        self.segments = []
        self.imports = []
        self.base = 0
        if struct.unpack_from("<I", self.data, 0)[0] in fat_magics:
            raise ValueError("fat binaries are not supported")
        command_count = struct.unpack_from("<I", self.data, 16)[0]
        cursor = 32
        fixups = None
        for _ in range(command_count):
            command, size = struct.unpack_from("<II", self.data, cursor)
            if command == segment_command:
                name = self.data[cursor + 8:cursor + 24].rstrip(b"\0").decode()
                address, memory_size, file_offset, file_size = struct.unpack_from("<QQQQ", self.data, cursor + 24)
                self.segments.append((address, memory_size, file_offset, file_size, name))
                if name == "__TEXT":
                    self.base = address
            if command == chained_fixups_command:
                fixups = struct.unpack_from("<II", self.data, cursor + 8)
            cursor += size
        if fixups:
            self.read_imports(*fixups)

    def read_imports(self, offset, size):
        header = self.data[offset:offset + size]
        _, _, imports_offset, symbols_offset, imports_count, imports_format, _ = struct.unpack_from("<IIIIIII", header, 0)
        for index in range(imports_count):
            if imports_format == 1:
                name_offset = struct.unpack_from("<I", header, imports_offset + index * 4)[0] >> 9
            elif imports_format == 2:
                name_offset = struct.unpack_from("<II", header, imports_offset + index * 8)[1]
            else:
                name_offset = struct.unpack_from("<Q", header, imports_offset + index * 8)[0] >> 32
            end = header.index(b"\0", symbols_offset + name_offset)
            self.imports.append(header[symbols_offset + name_offset:end].decode())

    def read(self, address, size):
        for start, memory_size, file_offset, file_size, _ in self.segments:
            if start <= address < start + memory_size:
                offset = address - start
                if offset >= file_size:
                    return bytes(min(size, memory_size - offset))
                return self.data[file_offset + offset:file_offset + min(file_size, offset + size)]
        return None

    def pointer(self, raw):
        if raw is None:
            return None
        if raw >> 62 & 1:
            ordinal = raw & 0xFFFFFF
            return ("import", self.imports[ordinal] if ordinal < len(self.imports) else "?")
        if raw >> 63:
            return self.base + (raw & 0xFFFF_FFFF)
        return raw & 0x7FF_FFFF_FFFF
