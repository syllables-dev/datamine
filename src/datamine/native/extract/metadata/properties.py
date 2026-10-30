import re

from extract.binary.demangle import demangle
from extract.metadata.runner import FunctionRunner

query_kinds = {
    "Relationship": "include",
    "AsyncRelationship": "include",
    "ExtendedAttribute": "extend",
    "Attribute": "attribute",
    "AsyncAttribute": "attribute",
    "Association": "views",
    "Metadata": "meta",
}
property_getter_symbol = re.compile(r"^(0x[0-9a-f]+):\s+\(regular\)\s+_(\$s\S+Property\S*vgZ)$")
declared_property = re.compile(r"PartialMusic(?:Async)?Property<A where A == (?:\(extension in \w+\):)?(?:\w+\.)?([\w.]+)>\.(\w+)\.getter : (?:\w+\.)?Music(\w+?)Property<")
property_factory = re.compile(r"PartialA\d+PropertyC")


def strings_near(runner, pointer, span=0x80):
    found = []
    for offset in range(0, span, 8):
        text = runner.string(runner.u64(pointer + offset), runner.u64(pointer + offset + 8))
        if text and text not in found:
            found.append(text)
    return found


def declared_getters(target, symbols_path):
    candidates = {}
    with open(symbols_path, errors="replace") as handle:
        for line in handle:
            match = property_getter_symbol.match(line.strip())
            if match and target.image.in_text(int(match.group(1), 16)):
                candidates[match.group(2)] = int(match.group(1), 16)
    for symbol, text in demangle(candidates, simplified=False).items():
        match = declared_property.search(text)
        if match:
            root, name, kind = match.groups()
            yield candidates[symbol], root, name, query_kinds.get(kind, kind)


def query_keys(target, getter):
    runner = FunctionRunner(target).with_placeholder_registers()
    keys = []
    if runner.run(getter, 60000):
        keys = strings_near(runner, runner.reg(0)) or strings_near(runner, runner.u64(runner.reg(0)))
    if not keys:
        keys = [text for name, text in runner.call_strings if property_factory.search(name) and text][:1]
    return keys


def properties(target, symbols_path):
    return [
        {"root": root, "property": name, "kind": kind, "keys": query_keys(target, getter), "image": target.name}
        for getter, root, name, kind in declared_getters(target, symbols_path)
    ]
