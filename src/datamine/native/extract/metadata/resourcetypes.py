import re

from extract.binary.symbols import whole_symbol_line
from extract.metadata.runner import FunctionRunner

static_getter = re.compile(r"8MusicKit12ResourceTypeV[0-9]+[A-Za-z_]+ACvgZ$")
member_name = re.compile(r"V(\d+)([A-Za-z_][A-Za-z0-9_]*)A[CE]vgZ$")


def member_of(symbol):
    match = member_name.search(symbol)
    return match.group(2)[:int(match.group(1))] if match else None


def run_static_getter(target, address):
    runner = FunctionRunner(target).with_placeholder_registers()
    result = runner.alloc(64)
    runner.set_reg(8, result)
    if not runner.run(address, 50000):
        return None
    direct = runner.string(runner.reg(0), runner.reg(1))
    if direct is not None:
        return direct, runner.reg(2) & 1
    return runner.string(runner.u64(result), runner.u64(result + 8)), runner.u64(result + 16) & 1


def resource_types(target, symbols_path):
    rows = []
    with open(symbols_path, errors="replace") as handle:
        for line in handle:
            match = whole_symbol_line.match(line.strip())
            if not match or not static_getter.search(match.group(2)):
                continue
            address = int(match.group(1), 16)
            if not target.image.in_text(address):
                continue
            result = run_static_getter(target, address)
            rows.append({"symbol": match.group(2), "member": member_of(match.group(2)), "rawValue": result[0] if result else None, "flag": result[1] if result else None})
    return rows
