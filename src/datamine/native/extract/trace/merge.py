import re
from collections import defaultdict

placeholder = re.compile(r"\{[^{}]*\}")
repeated_placeholder = re.compile(r"(\{x\})+")
choice = re.compile(r"\{oneOf:([^{}]*)\}")
non_route_placeholder = re.compile(r"\{(?!storefront\}|defaultHost\})[^}]*\}")
method_strength = {
    "Foundation default": 0,
    "set in direct caller or callee": 1,
    "set in same (async) function": 2,
    "set in same function": 2,
    "set on request": 3,
    "MusicDataRequest.Method": 4,
}


def readable(value):
    if value is None:
        return None
    return repeated_placeholder.sub("{x}", placeholder.sub("{x}", value))


def is_api_request(record, path, host):
    if "/v1/" in path:
        return True
    if not host and not path.strip("/"):
        return False
    looks_like_api = bool(re.match(r"^/?v1/|^/?api/", path.lstrip("{x}")) or (host and "apple.com" in host) or (record["scheme"] in (None, "https", "http") and record["query"] and not host))
    return looks_like_api and record["scheme"] in (None, "https", "http", "{x}")


def normalize(record):
    path = (record["path"] or "").replace("{storefront}", "\0sf\0")
    path = (readable(path) or "").replace("\0sf\0", "{storefront}")
    path = re.sub(r"^/v1/catalog//", "/v1/catalog/{storefront}/", path)
    path = re.sub(r"^/v1/(catalog|editorial)/\{x\}(?=/|$)", r"/v1/\1/{storefront}", path)
    path = re.sub(r"(?<!:)//+", "/{x}/", path)
    host = readable(record["host"])
    if path.startswith("/v1/") and (not host or "{" in host):
        host = "{defaultHost}"
    record["path"], record["host"] = path, host
    record["query"] = [[readable(name), readable(value), site] for name, value, site in record["query"]]
    record["headers"] = {readable(name): readable(value) for name, value in record["headers"].items()}
    record["category"] = "api" if is_api_request(record, path, host) else "other"
    return record


def expand_choices(record):
    texts = [record.get("path") or ""] + [value or "" for _, value, _ in record["query"]]
    match = next((choice.search(text) for text in texts if choice.search(text)), None)
    if not match:
        return [record]
    expanded = []
    for option in match.group(1).split("|"):
        copy = dict(record)
        copy["path"] = record["path"].replace(match.group(0), option) if record.get("path") else record.get("path")
        copy["query"] = [[name, value.replace(match.group(0), option) if value else value, site] for name, value, site in record["query"]]
        expanded.extend(expand_choices(copy))
    return expanded


def shape(record):
    path = non_route_placeholder.sub("{x}", record["path"] or "")
    return (record["method"] or "", "", record["host"] or "", path, ())


def parameter_names(record):
    return tuple(sorted({pair[0] for pair in record["query"]}))


def new_entry(record, key):
    return {
        "methodSource": record.get("methodSource"),
        "possibleMethods": record.get("possibleMethods", []),
        "category": record["category"],
        "method": key[0] or None,
        "scheme": key[1] or None,
        "host": key[2] or None,
        "path": key[3],
        "params": defaultdict(set),
        "headers": defaultdict(set),
        "body": False,
        "sources": set(),
    }


def merge(requests):
    requests = [normalize(expanded) for record in requests for expanded in expand_choices(record)]
    with_method = {(record["host"], record["path"], parameter_names(record)) for record in requests if record["method"]}
    requests = [record for record in requests if record["method"] or (record["host"], record["path"], parameter_names(record)) not in with_method]
    grouped = {}
    for record in requests:
        key = shape(record)
        entry = grouped.setdefault(key, new_entry(record, key))
        if method_strength.get(record.get("methodSource"), 0) > method_strength.get(entry["methodSource"], 0):
            entry["methodSource"] = record["methodSource"]
            entry["possibleMethods"] = record.get("possibleMethods", [])
        entry["variants"] = entry.get("variants", 0) + 1
        for name, value, _ in record["query"]:
            entry["params"][name].add(value if value is not None else "{none}")
            entry.setdefault("paramCounts", defaultdict(int))[name] += 1
        for name, value in record["headers"].items():
            entry["headers"][name].add(value if value is not None else "{?}")
        entry["body"] = entry["body"] or record["body"]
        entry["inferredParams"] = entry.get("inferredParams", False) or record.get("inferredParams", False)
        entry["sources"].add(f"{record['image']}:{record['function']}")
    merged = []
    for entry in grouped.values():
        entry["params"] = {name: sorted(values) for name, values in sorted(entry["params"].items())}
        counts = entry.pop("paramCounts", {})
        entry["paramSeen"] = {name: f"{counts.get(name, 0)}/{entry['variants']}" for name in entry["params"]}
        entry["headers"] = {name: sorted(values) for name, values in sorted(entry["headers"].items())}
        entry["sources"] = sorted(entry["sources"])
        merged.append(entry)
    return sorted(merged, key=lambda entry: (entry["category"], entry["host"] or "", entry["path"], entry["method"] or ""))
