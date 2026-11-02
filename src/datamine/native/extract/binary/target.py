import os
from dataclasses import dataclass

from extract.binary.image import Image
from extract.binary.memory import MachOFile, SharedCache
from extract.binary.symbols import Symbols


@dataclass
class Target:
    memory: object
    image: Image
    symbols: Symbols

    @property
    def name(self):
        return self.image.name

    @property
    def is_file(self):
        return isinstance(self.memory, MachOFile)


def image_header(cache, name):
    return next(address for path, address in cache.images().items() if os.path.basename(path) == name)


def open_file(path):
    memory = MachOFile(path)
    return Target(memory, Image(memory, memory.base, os.path.basename(path)), Symbols(memory))


def open_cache_image(cache, name, symbol_files=()):
    return Target(cache, Image(cache, image_header(cache, name), name), Symbols(cache, symbol_files))


def open_target(cache_dir, target, symbol_files=(), cache=None):
    if os.path.isfile(target):
        return open_file(target)
    return open_cache_image(cache or SharedCache(cache_dir), target, symbol_files)
