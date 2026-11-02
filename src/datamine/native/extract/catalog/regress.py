substring_evidence_length = 6


def catalog_items(catalog):
    found = {}
    for type_name, keys in catalog["codingKeys"].items():
        for key in keys:
            found[("key", type_name, key)] = key
    for name, info in catalog["params"].items():
        found[("param", name, "")] = name
        for value in info["values"]:
            if value != "{dynamic}":
                found[("value", name, value)] = value
    for path in catalog["paths"]:
        found[("path", path, "")] = path.split("{x}")[0].rstrip("/") or path
    for member, raw in catalog["resourceTypes"].items():
        if raw:
            found[("type", member, raw)] = raw
    for host in catalog["hosts"]:
        found[("host", host, "")] = host
    for request in catalog.get("requests", []):
        if request.get("category") != "api":
            continue
        key = f"{request['method'] or '?'} {request['host'] or '{host}'}{request['path']}"
        found[("request", key, "")] = max(request["path"].split("{x}"), key=len).strip("/") or request["path"]
        for name in request["params"]:
            found[("request-param", key, name)] = name.split("[")[0] if "{" in name else name
        if request.get("methodSource") == "MusicDataRequest.Method":
            found[("method", f"{request['host'] or '{host}'}{request['path']}", request["method"])] = found[("request", key, "")]
    for path, record in catalog.get("callerRequests", {}).items():
        found[("caller-request", path, "")] = path.rsplit("/", 1)[-1]
        for name, values in record["params"].items():
            for value in values:
                found[("caller-param", path, f"{name}={value}")] = value
    for name, values in catalog.get("enums", {}).items():
        for value in values:
            found[("enum", name, value)] = value
    for name, calls in catalog.get("definitions", {}).items():
        for arguments in calls:
            if arguments.get("x0"):
                found[("definition", name.split(":")[0], arguments["x0"])] = arguments["x0"]
    return found


def covered_values(catalog):
    values = set()
    for enum_values in catalog.get("enums", {}).values():
        values.update(enum_values)
    for calls in catalog.get("definitions", {}).values():
        values.update(arguments["x0"] for arguments in calls if arguments.get("x0"))
    return values


def unqualified(name):
    return name.split(":", 1)[-1].split(".", 1)[-1]


def moved_types(old_catalog, new_catalog):
    new_keysets = {tuple(sorted(keys)) for keys in new_catalog["codingKeys"].values()}
    moved = {name for name, keys in old_catalog["codingKeys"].items() if name not in new_catalog["codingKeys"] and tuple(sorted(keys)) in new_keysets}
    new_enums = new_catalog.get("enums", {})
    new_enum_shapes = {(unqualified(name), tuple(sorted(values))) for name, values in new_enums.items()}
    moved |= {name for name, values in old_catalog.get("enums", {}).items() if name not in new_enums and (unqualified(name), tuple(sorted(values))) in new_enum_shapes}
    return moved


def outer_type(item):
    if item[0] not in ("key", "enum") or ":" not in item[1]:
        return None, None
    module, name = item[1].split(":", 1)
    if not name.startswith(module + ".") or "." not in name:
        return module, None
    return module, name.split(".")[1]


def type_removed(item, symbol_texts):
    module, outer = outer_type(item)
    return module in symbol_texts and outer is not None and f"{len(outer)}{outer}" not in symbol_texts[module]


def still_present(evidence, strings):
    return evidence in strings or (len(evidence) > substring_evidence_length and any(evidence in text for text in strings))


def compare(old_catalog, new_catalog, new_strings, symbol_texts):
    old, new = catalog_items(old_catalog), catalog_items(new_catalog)
    moved = moved_types(old_catalog, new_catalog)
    lost = [item for item in old if item not in new and not (item[0] in ("key", "enum") and item[1] in moved)]
    gained = [item for item in new if item not in old]
    covered = covered_values(new_catalog)
    changes, rescued, unexplained = [], [], []
    for item in lost:
        if type_removed(item, symbol_texts):
            changes.append(item)
        elif item[0] == "value" and (item[2] in covered or set(item[2].split(",")) <= covered):
            rescued.append(item)
        elif still_present(old[item], new_strings):
            unexplained.append(item)
        else:
            changes.append(item)
    return {
        "gained": [list(item) for item in gained],
        "removed": [list(item) for item in changes],
        "covered": [list(item) for item in rescued],
        "unexplained": [list(item) for item in unexplained],
        "movedTypes": sorted(moved),
    }
