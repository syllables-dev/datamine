import os
import plistlib

from extract.binary.callsites import call_sites
from extract.binary.image import Image
from extract.binary.memory import SharedCache
from extract.metadata.runner import FunctionRunner
from extract.metadata.swiftmeta import SwiftMetadata

key_protocol = "_$s12FeatureFlags0aB3KeyMp"
key_protocol_name = "FeatureFlags.FeatureFlagsKey"
getter_markers = {"domain": "6domains12StaticString", "feature": "7features12StaticString"}
enabled_calls = ("os_feature_enabled_impl", "os_feature_enabled_simple_impl")
static_string_scalar_flag = 1
getter_steps = 2000
case_limit = 4096
name_limit = 256
domain_folders = ("Domain", os.path.join("Unified", "Domain"))
global_overrides = "Global.plist"


def is_key_conformance(conformance):
    name = str(conformance["protocol_name"])
    return name == key_protocol or name.endswith(key_protocol_name)


def static_string(runner):
    pointer, length, flags = runner.reg(0), runner.reg(1), runner.reg(2)
    if flags & static_string_scalar_flag or not 0 < length < name_limit:
        return None
    data = runner.emulated_memory.read(runner.strip_signature(pointer), length)
    return data.decode("utf-8", "replace") if data and len(data) == length else None


def run_getter(target, getter, case):
    runner = FunctionRunner(target)
    slot = runner.alloc(16)
    runner.write64(slot, case)
    runner.set_reg(0, case)
    runner.set_reg(20, slot)
    return static_string(runner) if runner.run(getter, getter_steps) else None


def getters(meta, conformance):
    found = {}
    ordered = []
    for requirement, implementation in conformance["witnesses"]:
        if isinstance(requirement, tuple):
            for role, marker in getter_markers.items():
                if marker in requirement[1]:
                    found[role] = implementation
            continue
        kind = meta.requirement_kind(conformance["protocol"], requirement)
        if kind:
            ordered.append((kind[0], implementation))
    if not found and len(ordered) >= 2:
        ordered.sort()
        found = {"domain": ordered[0][1], "feature": ordered[1][1]}
    return found if len(found) == 2 else None


def key_cases(meta, conformance):
    cases = meta.conformance_enum_cases(conformance)
    if not cases:
        return [(0, None)]
    payload_cases, empty_cases, names = cases
    if payload_cases:
        return []
    return [(case, names[case] if case < len(names) else None) for case in range(min(empty_cases, case_limit))]


def swift_flags(target):
    meta = SwiftMetadata(target.memory, target.image)
    rows = []
    for conformance in meta.conformances():
        if not is_key_conformance(conformance):
            continue
        witnesses = getters(meta, conformance)
        if not witnesses:
            rows.append({"image": target.name, "type": conformance["type_name"], "error": "no domain and feature getters"})
            continue
        for case, name in key_cases(meta, conformance):
            domain = run_getter(target, witnesses["domain"], case)
            feature = run_getter(target, witnesses["feature"], case)
            rows.append({"image": target.name, "type": conformance["type_name"], "case": name, "domain": domain, "feature": feature})
    return rows


def cstring_argument(memory, registers, register):
    address = registers.get(register)
    if address is None:
        return None
    text = memory.cstring(address, name_limit)
    return text if text and text.isprintable() else None


def call_flags(target):
    rows = []
    for site, callee, registers in call_sites(target.image):
        if target.symbols.name(callee).lstrip("_") not in enabled_calls:
            continue
        domain = cstring_argument(target.memory, registers, 0)
        feature = cstring_argument(target.memory, registers, 1)
        if domain and feature:
            rows.append({"image": target.name, "site": hex(site), "domain": domain, "feature": feature})
    return rows


def has_swift_keys(memory, image):
    if not image.section("__TEXT.__swift5_proto")[1]:
        return False
    return any(is_key_conformance(conformance) for conformance in SwiftMetadata(memory, image).conformances())


def scan_images(cache_dir, images):
    memory = SharedCache(cache_dir)
    found = []
    for path, header in images:
        try:
            if has_swift_keys(memory, Image(memory, header, os.path.basename(path))):
                found.append(path)
        except Exception:
            continue
    return found


def target_flags(target):
    try:
        return swift_flags(target) + call_flags(target)
    except Exception as error:
        return [{"image": target.name, "error": repr(error)[:200]}]


def read_plist(path):
    try:
        with open(path, "rb") as handle:
            loaded = plistlib.load(handle)
    except Exception:
        return {}
    return loaded if isinstance(loaded, dict) else {}


def merge_domain(declared, domain, features):
    for feature, attributes in features.items():
        current = declared.setdefault(domain, {}).setdefault(feature, {})
        if isinstance(attributes, dict):
            current.update(plain(attributes))


def declared_flags(directory):
    declared = {}
    if not directory:
        return declared
    for folder in domain_folders:
        root = os.path.join(directory, folder)
        for name in sorted(os.listdir(root)) if os.path.isdir(root) else []:
            if name.endswith(".plist"):
                merge_domain(declared, os.path.splitext(name)[0], read_plist(os.path.join(root, name)))
    for domain, features in read_plist(os.path.join(directory, global_overrides)).items():
        if isinstance(features, dict):
            merge_domain(declared, domain, features)
    return declared


def plain(value):
    if isinstance(value, dict):
        return {key: plain(item) for key, item in value.items()}
    if isinstance(value, list):
        return [plain(item) for item in value]
    if isinstance(value, (bytes, bytearray)):
        return value.hex()
    if isinstance(value, (str, int, float, bool)) or value is None:
        return value
    return str(value)
