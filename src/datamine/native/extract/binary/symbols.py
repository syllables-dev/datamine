import os
import re
import struct
import subprocess

from extract.binary.arm64 import adr_offset, adrp_page

symbol_line = re.compile(r"^(0x[0-9a-f]+):\s+\(regular\)\s+(\S+)")
whole_symbol_line = re.compile(r"^(0x[0-9a-f]+):\s+\(regular\)\s+(\S+)$")


def is_adrp_x1(word):
    return word & 0x9F00001F == 0x90000001


def read_symbol_file(path):
    symbols = {}
    with open(path, errors="replace") as handle:
        for line in handle:
            match = symbol_line.match(line.strip())
            if match:
                symbols.setdefault(int(match.group(1), 16), match.group(2))
    return symbols


def export_symbols(cache_dir, image, path):
    if not os.path.exists(path):
        cache = os.path.join(cache_dir, "dyld_shared_cache_arm64e")
        with open(path, "w") as handle:
            subprocess.run(["ipsw", "dyld", "symaddr", cache, "--image", image], stdout=handle, stderr=subprocess.DEVNULL, check=False)
    return path


class Symbols:
    def __init__(self, memory, symbol_files=()):
        self.memory = memory
        self.names = {}
        for path in symbol_files:
            for address, name in read_symbol_file(path).items():
                self.names.setdefault(address, name)
        self.targets = {}

    def get(self, address, default=""):
        return self.names.get(address, default)

    def target(self, address):
        if address not in self.targets:
            self.targets[address] = self.follow_stub(address)
        return self.targets[address]

    def follow_stub(self, address):
        data = self.memory.read(address, 16)
        if not data or len(data) < 16:
            return address
        first, second, third, _ = struct.unpack("<4I", data)
        if is_adrp_x1(first) and second & 0xFFC003FF == 0x91000021:
            selector = self.memory.cstring(adrp_page(first, address) + ((second >> 10) & 0xFFF), 256)
            return ("import", "objc:" + selector)
        if is_adrp_x1(first) and second & 0xFFC003FF == 0xF9400021:
            reference = self.memory.load_pointer(adrp_page(first, address) + ((second >> 10) & 0xFFF) * 8)
            if isinstance(reference, int):
                return ("import", "objc:" + self.memory.cstring(reference, 256))
        if first & 0x9F000000 == 0x10000000 and second & 0xFF800000 == 0xD2800000 and third & 0xFF200000 == 0xCB000000:
            x16 = address + adr_offset(first)
            return x16 - (((second >> 5) & 0xFFFF) << ((third >> 10) & 0x3F))
        if first & 0x9F000000 == 0x90000000:
            page = adrp_page(first, address)
            if second & 0xFFC00000 == 0xF9400000:
                return self.memory.load_pointer(page + ((second >> 10) & 0xFFF) * 8)
            if second & 0xFF800000 == 0x91000000:
                slot = page + ((second >> 10) & 0xFFF)
                if third & 0xFFC00000 == 0xF9400000:
                    return self.memory.load_pointer(slot + ((third >> 10) & 0xFFF) * 8)
                return slot
        return address

    def name(self, address):
        target = self.target(address)
        if isinstance(target, tuple):
            return target[1]
        return self.names.get(target, "")
