from extract.metadata.runner import FunctionRunner
from extract.metadata.swiftmeta import SwiftMetadata

getter_steps = 5000


def conforms_to(conformance, readable, mangled):
    name = str(conformance["protocol_name"])
    return name.endswith(readable) or name == mangled


def enum_cases_of(meta, conformance):
    return meta.enum_cases(conformance["type"]) if isinstance(conformance["type"], int) else None


def string_value(target, getter, case):
    runner = FunctionRunner(target).with_placeholder_registers()
    slot = runner.alloc(16)
    runner.write64(slot, case)
    runner.set_reg(0, case)
    runner.set_reg(20, slot)
    if not runner.run(getter, getter_steps):
        return None
    return runner.string(runner.reg(0), runner.reg(1))


def raw_value(target, getter, case):
    runner = FunctionRunner(target).with_placeholder_registers()
    slot = runner.alloc(16)
    result = runner.alloc(32)
    runner.write64(slot, case)
    runner.set_reg(0, case)
    runner.set_reg(20, slot)
    runner.set_reg(8, result)
    if not runner.run(getter, getter_steps):
        return None
    value = runner.string(runner.u64(result), runner.u64(result + 8))
    return value if value is not None else runner.string(runner.reg(0), runner.reg(1))


def coding_keys(target):
    meta = SwiftMetadata(target.memory, target.image)
    rows, failures = [], []
    for conformance in meta.conformances():
        if not conforms_to(conformance, "Swift.CodingKey", "_$ss9CodingKeyMp"):
            continue
        getter = meta.getter_witness(conformance, "11stringValue")
        if getter is None and len(conformance["witnesses"]) > 2:
            getter = conformance["witnesses"][2][1]
        cases = enum_cases_of(meta, conformance)
        if not cases or getter is None:
            failures.append({"type": conformance["type_name"], "reason": "no enum cases or getter"})
            continue
        payload_cases, empty_cases, names = cases
        if payload_cases:
            failures.append({"type": conformance["type_name"], "reason": "payload cases"})
            continue
        keys = [string_value(target, getter, case) for case in range(empty_cases)]
        swift_names = names[:empty_cases] if len(names) >= empty_cases else names
        rows.append({
            "type": conformance["type_name"],
            "cases": swift_names,
            "keys": keys,
            "renamed": {name: key for name, key in zip(swift_names, keys) if key and name != key},
            "unresolved": [name for name, key in zip(swift_names, keys) if key is None],
        })
    return rows, failures


def raw_values(target):
    meta = SwiftMetadata(target.memory, target.image)
    rows = []
    for conformance in meta.conformances():
        if not conforms_to(conformance, "RawRepresentable", "_$sSYMp"):
            continue
        getter = meta.getter_witness(conformance, "8rawValue")
        cases = enum_cases_of(meta, conformance)
        if not cases or getter is None:
            continue
        payload_cases, empty_cases, names = cases
        if payload_cases or not empty_cases or empty_cases > 512:
            continue
        values = [raw_value(target, getter, case) for case in range(empty_cases)]
        if any(isinstance(value, str) for value in values):
            rows.append({"type": conformance["type_name"], "cases": names[:empty_cases], "values": values})
    return rows


def types_of(path, target):
    rows, failures = coding_keys(target)
    return {"image": path, "codingKeys": rows, "failures": failures, "enums": raw_values(target)}
