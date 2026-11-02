import re

from extract.trace.urlmodel import parse_url

endpoint_constructor = re.compile(r"0A3APIV8EndpointV(07catalogD0|09editorialD0|04userD0|07libraryD0|012intelligenceD0|24recommendationCandidates|19relativeURLLocation|8applying)")
endpoint_prefixes = {
    "07catalogD0": ("/v1/catalog/{storefront}/", True),
    "09editorialD0": ("/v1/editorial/{storefront}/", True),
    "04userD0": ("/v1/me/", False),
    "07libraryD0": ("/v1/me/library/", False),
    "012intelligenceD0": ("/v1/intelligence/", False),
    "24recommendationCandidates": ("/v1/me/recommendation-candidates/", False),
}
data_request_initialiser = re.compile(r"0A11DataRequestV(8musicAPI6method4body15timeoutInterval|10urlRequest)")
music_api_initialiser = re.compile(r"0A11DataRequestV8musicAPI6method4body15timeoutInterval")
data_request_methods = {0: "GET", 1: "POST"}
resilient_type_metadata = re.compile(r"^_\$s(10Foundation(12URLQueryItem|13URLComponents|3URL|10URLRequest)|8MusicKit0A3APIV8Endpoint|8MusicKit0A11DataRequest)VMa$")
copied_endpoint_fields = ("scheme", "host", "path", "method", "headers", "body", "inferred")
default_endpoint = {"path": "{x}", "query": [], "host": "{defaultHost}", "scheme": "https"}

value_witness_base = 0x4300_0000_0000
value_witness_functions = value_witness_base + 0x800
value_witness_operations = {0: "copy", 8: "destroy", 16: "copy", 24: "copy", 32: "copy", 40: "copy", 48: "tag", 56: "storetag"}


def data_request_call(tracer, emulator, name):
    match = data_request_initialiser.search(name)
    if not match:
        return False
    objects = tracer.objects
    source = objects.resolve(emulator, emulator.reg(0))
    method = None if match.group(1).startswith("8musicAPI") else (objects[source]["method"] if source in objects else None)
    if source in objects:
        handle = objects.derive("request", source, method=method or "GET")
    else:
        handle = objects.create("request", method=method or "GET", path="{x}", implicit=True)
    if method:
        tracer.method_events.append((tracer.current_site, method))
        objects[handle]["methodFromEnum"] = True
    tracer.return_object(emulator, handle)
    return True


def applying_call(tracer, emulator, name):
    objects = tracer.objects
    source = objects.receiver(emulator)
    if source is None:
        return False
    single = "URLQueryItemVF" in name
    added_handles = [emulator.reg(0)] if single and emulator.reg(0) in objects else objects.items_in_array(emulator, emulator.reg(0))
    added = objects.pairs(added_handles)
    base = objects.snapshot(source) if source in objects else default_endpoint
    copied = {key: value for key, value in base.items() if key in copied_endpoint_fields}
    handle = objects.create("components", **copied, query=list(base.get("query", [])) + added, endpoint="applying")
    if source in objects:
        objects[source]["consumed"] = True
    tracer.return_object(emulator, handle)
    return True


def relative_location_call(tracer, emulator):
    parsed = parse_url(tracer.values.text(emulator, 0))
    handle = tracer.objects.create("components", scheme="https", host=parsed.get("host") or "{defaultHost}", path=parsed.get("path") or "{x}", query=parsed.get("query") or [], endpoint="relativeURLLocation")
    tracer.return_object(emulator, handle)
    return True


def endpoint_call(tracer, emulator, name):
    if data_request_call(tracer, emulator, name):
        return True
    match = endpoint_constructor.search(name)
    if not match:
        return False
    kind = match.group(1)
    if kind == "8applying":
        return applying_call(tracer, emulator, name)
    if kind == "19relativeURLLocation":
        return relative_location_call(tracer, emulator)
    text = tracer.values.text
    prefix, has_storefront = endpoint_prefixes[kind]
    if has_storefront:
        storefront, suffix, items = text(emulator, 0), text(emulator, 2), emulator.reg(4)
        if storefront and "{" not in storefront:
            prefix = prefix.replace("{storefront}", storefront)
    else:
        suffix, items = text(emulator, 0), emulator.reg(2)
    handle = tracer.objects.create("components", scheme="https", host="{defaultHost}", path=prefix + (suffix if suffix is not None else "{x}"), endpoint=kind)
    tracer.objects.attach_items(emulator, handle, items)
    tracer.return_object(emulator, handle)
    return True


class ResilientTypes:
    def __init__(self):
        self.metadata = {}

    def clear(self):
        self.metadata.clear()

    def write_value_witnesses(self, emulator, table):
        for offset in value_witness_operations:
            emulator.write64(table + offset, value_witness_functions + offset)
        emulator.write64(table + 64, 8)
        emulator.write64(table + 72, 8)
        emulator.write64(table + 80, 7)

    def metadata_for(self, emulator, name):
        if name not in self.metadata:
            base = value_witness_base + len(self.metadata) * 0x1000
            emulator.map(base)
            self.write_value_witnesses(emulator, base + 0x100)
            emulator.write64(base + 0x400 - 8, base + 0x100)
            emulator.write64(base + 0x400, 0x200)
            self.metadata[name] = base + 0x400
        else:
            metadata = self.metadata[name]
            emulator.map(metadata)
            self.write_value_witnesses(emulator, metadata - 0x300)
            emulator.write64(metadata - 8, metadata - 0x300)
        return self.metadata[name]

    @staticmethod
    def is_value_witness(target):
        return value_witness_functions <= target < value_witness_functions + 0x100

    @staticmethod
    def call_value_witness(emulator, target):
        operation = value_witness_operations.get(target - value_witness_functions)
        if operation is None:
            return False
        if operation == "copy":
            emulator.write64(emulator.reg(0), emulator.read64(emulator.reg(1)))
        elif operation == "tag":
            emulator.set_reg(0, 0)
        return True
