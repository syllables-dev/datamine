import re
from urllib.parse import parse_qsl

handle_base = 0x4400_0000_0000
handle_stride = 0x1000
array_limit = 128
placeholder = re.compile(r"\{[^{}]*\}")
held_placeholder = re.compile(r"\0(\d+)\0")
embedded_scheme = re.compile(r"[a-z][a-z0-9+.-]*://")
url_parts = re.compile(r"^(?:([a-z][a-z0-9+.-]*):)?//([^/?#]*)(.*)$")
snapshot_fields = ("scheme", "host", "path", "query", "method", "headers", "body", "inferred")


def parse_url(raw):
    if raw is None:
        return {}
    held = []

    def hold(match):
        held.append(match.group(0))
        return f"\0{len(held) - 1}\0"

    def restore(text):
        return held_placeholder.sub(lambda match: held[int(match.group(1))], text) if text else text

    raw = placeholder.sub(hold, raw)
    embedded = embedded_scheme.search(raw)
    if embedded and embedded.start() > 0:
        raw = raw[embedded.start():]
    match = url_parts.match(raw)
    scheme, host, rest = match.groups() if match else (None, None, raw)
    path, _, query = rest.partition("?")
    items = [[restore(name), restore(value), None] for name, value in parse_qsl(query, keep_blank_values=True)] if query else []
    return {"scheme": scheme, "host": restore(host) or None, "path": restore(path), "query": items}


def copy_value(value):
    if isinstance(value, list):
        return list(value)
    if isinstance(value, dict):
        return dict(value)
    return value


def render(entry):
    url = f"{entry['scheme'] or 'https'}://{entry['host']}" if entry["host"] else ""
    url += entry["path"] or ""
    if entry["query"]:
        url += "?" + "&".join(f"{pair[0]}={pair[1]}" for pair in entry["query"])
    return url


def query_string(entry):
    return "&".join(f"{pair[0]}={pair[1]}" for pair in entry["query"])


class UrlObjects:
    def __init__(self):
        self.entries = {}
        self.aliases = {}

    def clear(self):
        self.entries.clear()
        self.aliases.clear()

    def __contains__(self, handle):
        return handle in self.entries

    def __getitem__(self, handle):
        return self.entries[handle]

    def create(self, kind, **fields):
        handle = handle_base + (len(self.entries) + 1) * handle_stride
        self.entries[handle] = {"kind": kind, "scheme": None, "host": None, "path": "", "query": [], "method": None, "headers": {}, "body": False, "parent": None, "consumed": False, **fields}
        return handle

    def is_kind(self, handle, kind):
        return handle in self.entries and self.entries[handle]["kind"] == kind

    def resolve(self, emulator, value):
        if value in self.entries:
            return value
        if value in self.aliases:
            return self.aliases[value]
        if value and not value >> 48:
            inner = emulator.read64(value)
            if inner in self.entries:
                return inner
        return None

    def receiver(self, emulator):
        return self.resolve(emulator, emulator.reg(20)) or self.resolve(emulator, emulator.reg(0))

    def implicit_self(self, emulator, kind):
        found = self.receiver(emulator)
        if found is not None:
            return found
        pointer = emulator.reg(20)
        handle = self.create(kind, implicit=True)
        if 0x10000 <= pointer < (1 << 47):
            emulator.write64(pointer, handle)
        self.aliases[pointer] = handle
        return handle

    def implicit_receiver(self, emulator, kind):
        found = self.resolve(emulator, emulator.reg(0))
        if found is not None:
            return found
        handle = self.create(kind, implicit=True)
        self.aliases[emulator.reg(0)] = handle
        return handle

    def snapshot(self, handle):
        return {key: copy_value(value) for key, value in self.entries[handle].items() if key in snapshot_fields}

    def derive(self, kind, source, **extra):
        base = self.snapshot(source) if source in self.entries else {}
        base.update(extra)
        if source in self.entries:
            self.entries[source]["consumed"] = True
            if self.entries[source].get("inferred"):
                base["inferred"] = True
        return self.create(kind, parent=source, **base)

    def items_in_array(self, emulator, array):
        if self.is_kind(array, "array"):
            return list(self.entries[array]["items"])
        if not array or array >> 48:
            return []
        count = emulator.read64(array + 16)
        if not 0 < count < array_limit:
            return []
        elements = (emulator.read64(array + 32 + index * 8) for index in range(count))
        return [element for element in elements if self.is_kind(element, "item")]

    def pairs(self, handles):
        return [[self.entries[handle]["name"], self.entries[handle]["value"], self.entries[handle].get("site")] for handle in handles if handle in self.entries]

    def attach_items(self, emulator, target, array):
        handles = self.items_in_array(emulator, array)
        inferred = False
        if not handles and array:
            handles = [handle for handle, entry in self.entries.items() if entry["kind"] == "item" and not entry["consumed"]]
            inferred = bool(handles)
        for handle in handles:
            self.entries[handle]["consumed"] = True
        self.entries[target]["query"] = self.pairs(handles)
        self.entries[target]["inferred"] = inferred

    def item_handles(self, pairs, **extra):
        return [self.create("item", name=pair[0], value=pair[1], site=pair[2] if len(pair) > 2 else None, **extra) for pair in pairs]

    def finished(self, handle):
        entry = self.entries[handle]
        if entry.get("implicit") and not (entry["path"] or entry["query"] or entry["method"]):
            return None
        if entry["kind"] in ("item", "array") or entry["consumed"] and entry["kind"] != "request":
            return None
        if not (entry["path"] or entry["host"] or entry["query"]):
            return None

        def known(value):
            return value if value is not None else "{?}"

        return {
            "method": entry["method"] or ("GET" if entry["kind"] == "request" else None),
            "scheme": entry["scheme"],
            "host": entry["host"],
            "path": known(entry["path"]),
            "query": [[known(pair[0]), pair[1], pair[2] if len(pair) > 2 else None] for pair in entry["query"]],
            "headers": {known(name): value for name, value in entry["headers"].items()},
            "body": entry["body"],
            "kind": entry["kind"],
            "inferredParams": entry.get("inferred", False),
            "partial": bool(entry.get("implicit")),
            "methodFromEnum": bool(entry.get("methodFromEnum")),
        }
