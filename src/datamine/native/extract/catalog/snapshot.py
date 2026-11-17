import json
import os

from extract.files import read_json, write_json

dropped_request_fields = ("variants", "paramSeen")


def images_of(sources):
    return sorted({source.split(":", 1)[0] for source in sources})


def request_snapshot(request):
    snapshot = {key: value for key, value in request.items() if key not in dropped_request_fields}
    snapshot["sources"] = images_of(request["sources"])
    return snapshot


def definitions_by_image(definitions):
    grouped = {}
    for constructor, calls in definitions.items():
        image = constructor.split(":", 1)[0]
        grouped.setdefault(image, set()).update(json.dumps(call, sort_keys=True) for call in calls)
    return {image: [json.loads(call) for call in sorted(calls)] for image, calls in sorted(grouped.items())}


def without_address(domain):
    return domain.split(":", 1)[0] if domain.startswith("definition ") else domain


def params_snapshot(params):
    return {name: {**info, "domains": sorted({without_address(domain) for domain in info["domains"]})} for name, info in params.items()}


def snapshot(catalog):
    return {
        **catalog,
        "params": params_snapshot(catalog["params"]),
        "requests": [request_snapshot(request) for request in catalog["requests"]],
        "callerRequests": {path: {**record, "sources": images_of(record["sources"])} for path, record in catalog["callerRequests"].items()},
        "definitions": definitions_by_image(catalog["definitions"]),
    }


snapshot_files = {
    "api": ("requests", "derivedRequests", "callerRequests", "hosts", "paths", "inventoryPaths", "headers", "params"),
    "models": ("codingKeys", "fieldMappings", "resourceTypes", "resources"),
    "enums": ("enums",),
    "definitions": ("definitions",),
    "flags": ("featureFlags",),
    "unexplained": ("unexplained",),
}
snapshot_file_of = {section: name for name, sections in snapshot_files.items() for section in sections}


def write_snapshot(directory, data):
    os.makedirs(directory, exist_ok=True)
    files = {name: {} for name in snapshot_files}
    for section, value in data.items():
        files[snapshot_file_of[section]][section] = value
    for name, sections in files.items():
        write_json(os.path.join(directory, f"{name}.json"), sections)


def read_snapshot(directory):
    data = {}
    for name in snapshot_files:
        path = os.path.join(directory, f"{name}.json")
        if os.path.exists(path):
            data.update(read_json(path))
    return data
