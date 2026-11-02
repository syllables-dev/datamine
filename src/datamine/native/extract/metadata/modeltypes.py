import re

from extract.metadata.runner import FunctionRunner

catalog_types_getter = re.compile(r"^(0x[0-9a-f]+):\s+\(regular\)\s+_\$s8MusicKit((?:\d+[A-Za-z_]+V)+)12catalogTypesSay\S+vgZ$")
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
    runner = FunctionRunner(target).with_placeholder_registers()
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
    with open(symbols_path, errors="replace") as handle:
        for line in handle:
            match = catalog_types_getter.match(line.strip())
            if not match:
                continue
            address = int(match.group(1), 16)
            if target.image.in_text(address):
                rows[nested_type_name(match.group(2))] = string_array(target, address)
    return rows
