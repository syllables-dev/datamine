import re

from extract.binary.symbols import text_symbols
from extract.metadata.runner import FunctionRunner

catalog_types_getter = re.compile(r"^_\$s8MusicKit((?:\d+[A-Za-z_]+V)+)12catalogTypesSay\S+vgZ$")
length_prefix = re.compile(r"(\d+)")
string_array_strides = (24, 32, 16)


def nested_type_name(mangled):
    parts, rest = [], mangled
    while rest:
        digits = length_prefix.match(rest).group(1)
        length = int(digits)
        parts.append(rest[len(digits):len(digits) + length])
        rest = rest[len(digits) + length + 1:]
    return ".".join(parts)


def string_array(target, getter):
    runner = FunctionRunner(target)
    if not runner.run(getter, 80000):
        return None
    array = runner.reg(0)
    count = runner.u64(array + 16)
    if not 0 < count < 64:
        return []
    values = []
    for stride in string_array_strides:
        values = [runner.string(runner.u64(array + 32 + stride * index), runner.u64(array + 40 + stride * index)) for index in range(count)]
        if all(values):
            return values
    return values


def model_types(target, symbols_path):
    rows = {}
    for address, name in text_symbols(target.image, symbols_path):
        match = catalog_types_getter.match(name)
        if match:
            rows[nested_type_name(match.group(1))] = string_array(target, address)
    return rows
