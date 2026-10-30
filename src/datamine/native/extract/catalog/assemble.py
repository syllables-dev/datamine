import glob
import json
import os
import re
from collections import defaultdict

from extract.strings.inventory import drop_splices
from extract.trace.merge import merge
from extract.usage.concrete import caller_requests

parameter_shape = re.compile(r"^[a-z][a-zA-Z]*(\[[a-z0-9][a-z0-9:.\-]*\])?$")
bracket_parameter = re.compile(r"^[a-z][a-zA-Z]*\[[a-z0-9][a-z0-9:.\-{}]*\]$")
api_path = re.compile(r"^(https?://[a-z0-9.\-]*amp-api[a-z0-9.\-]*\.apple\.com)?/?v1/[A-Za-z0-9{}%@/._:\-?=&,\[\]]+$|^https?://[a-z0-9.\-]*amp-api[a-z0-9.\-]*\.apple\.com")
api_host = re.compile(r"amp-api[a-z0-9.\-]*\.apple\.com")
kebab_case = re.compile(r"^[a-z]+(-[a-z]+)+$")
traced_placeholder = re.compile(r"\{(?:arg|indirect|\$s|swift_|objc:|\?)[^}]*\}")
any_placeholder = re.compile(r"\{[^}]*\}")
resource_parts = (("Attributes", "attributes"), ("Relationships", "relationships"), ("Associations", "views"), ("Metadata", "meta"))
shared_parameters = ("format[resources]", "omit[resource]", "l")
derived_evidence = "MusicKit path prefix + query templates + executed model keys"


def is_clean(value):
    return isinstance(value, str) and "{" not in value and value.strip() == value and value != ""


def read_json(out_dir, name, default=None):
    path = os.path.join(out_dir, name)
    if not os.path.exists(path):
        return default
    with open(path) as handle:
        return json.load(handle)


def read_traces(out_dir):
    sites, requests = [], []
    for path in glob.glob(os.path.join(out_dir, "requests", "*.json")):
        with open(path) as handle:
            data = json.load(handle)
        sites.extend(data.get("sites", []))
        requests.extend(data.get("requests", []))
    return sites, requests


def coding_keys_by_type(types):
    return {(os.path.basename(image["image"]), row["type"]): [key for key in row["keys"] if key] for image in types for row in image["codingKeys"]}


def resources_from(model_types, coding):
    resources = {}
    for model, catalog in model_types.items():
        if not catalog:
            continue
        base = f"MusicKit.{model}"
        entry = {"model": base, "types": catalog}
        for part, label in resource_parts:
            keys = coding.get(("MusicKit", f"{base}.{part}.CodingKeys"))
            if keys:
                entry[label] = keys
        nested = {name.split(f"{base}.", 1)[1]: keys for (image, name), keys in coding.items() if image == "MusicKit" and name.startswith(f"{base}.") and name.count(".") > base.count(".") + 2}
        if nested:
            entry["nested"] = nested
        for type_name in catalog:
            resources.setdefault(type_name, []).append(entry)
    return resources


def observed_calls(sites):
    params = defaultdict(lambda: {"values": set(), "images": set(), "templates": set()})
    paths, mappings, headers = defaultdict(set), defaultdict(set), defaultdict(set)
    for row in sites:
        api = row["api"]
        for observed in row["observed"]:
            name, value, argument = observed.get("name"), observed.get("value"), observed.get("arg")
            if "mapPropertyKey" in api:
                if is_clean(value):
                    mappings[row["image"]].add(f"{name}={value}")
            elif "HTTPHeaderField" in api:
                if is_clean(value):
                    headers[value].add(row["image"])
            elif "QueryItem" in api or "queryItem" in api or "initWithName" in api:
                if is_clean(name) and parameter_shape.match(name):
                    params[name]["images"].add(row["image"])
                    params[name]["values"].add(value if is_clean(value) else "{dynamic}")
                elif name and "[" in name and "{" in name:
                    params[any_placeholder.sub("{x}", name)]["templates"].add(row["image"])
            elif argument and isinstance(argument, str) and ("/v1/" in argument or "amp-api" in argument or argument.startswith("/")):
                paths[traced_placeholder.sub("{x}", argument)].add(row["image"])
    return params, paths, mappings, headers


def inventory_matches(inventory):
    hosts, paths, params = defaultdict(set), defaultdict(set), defaultdict(set)
    for image, strings in inventory.items():
        for text in strings:
            for host in api_host.findall(text):
                hosts[host].add(image)
            if api_path.match(text) and len(text) < 300:
                paths[text].add(image)
            if bracket_parameter.match(text):
                params[text].add(image)
    return hosts, paths, params


def enums_from(types):
    enums = {}
    for image in types:
        for row in image.get("enums", []):
            values = [value for value in row["values"] if value]
            if values:
                enums[f"{os.path.basename(image['image'])}:{row['type']}"] = values
    return enums


def definitions_from(rows):
    definitions = defaultdict(list)
    for row in rows:
        if row.get("args"):
            definitions[f"{row['image']}:{row['constructor']}"].append(row["args"])
    return definitions


def add_domains(params, enums, definitions):
    for info in params.values():
        samples = {value for value in info["values"] if value != "{dynamic}"}
        for enum_name, values in enums.items():
            if samples and samples <= set(values) and len(values) > len(samples):
                info.setdefault("domains", set()).add(enum_name)
        for constructor, calls in definitions.items():
            names = {call.get("x0") for call in calls if call.get("x0")}
            if samples and any(sample in names or set(sample.split(",")) <= names for sample in samples):
                info.setdefault("domains", set()).add("definition " + constructor)


def extend_vocabulary(properties, params, definitions):
    vocabulary = {row["keys"][0] for row in properties if row["kind"] == "extend" and row["keys"]}
    for name, info in params.items():
        if name == "extend" or name.startswith("extend["):
            for value in info["values"]:
                if value != "{dynamic}":
                    vocabulary.update(value.split(","))
    for calls in definitions.values():
        names = {call.get("x0") for call in calls if call.get("x0")}
        typed = sum(1 for call in calls if call.get("x0") and call.get("x2"))
        if typed and names & vocabulary:
            vocabulary |= names
    return vocabulary


def derived_requests(coding, model_types, definitions, params, properties):
    vocabulary = extend_vocabulary(properties, params, definitions)
    shared = {name: sorted(params[name]["values"]) for name in shared_parameters if name in params}
    has_override = any(name.startswith("overrideLimit[") for name in params) or any("overrideLimit" in template for info in params.values() for template in info["templates"])
    derived = []
    for model, catalog in model_types.items():
        if not catalog or "." in model:
            continue
        base = f"MusicKit.{model}"
        relationships = coding.get(("MusicKit", f"{base}.Relationships.CodingKeys"), [])
        views = coding.get(("MusicKit", f"{base}.Associations.CodingKeys"), [])
        extend = sorted(set(coding.get(("MusicKit", f"{base}.Attributes.CodingKeys"), [])) & vocabulary)
        type_name = catalog[0]
        query = {"ids": ["{ids}"]}
        if relationships:
            query["include"] = relationships
        if extend:
            query["extend"] = extend
        if views:
            query["views"] = views
        for relation in relationships + views:
            query[f"limit[{type_name}:{relation}]"] = ["{n}"]
            if has_override:
                query[f"overrideLimit[{type_name}:{relation}]"] = ["true"]
        query.update(shared)
        for path in (f"/v1/catalog/{{storefront}}/{type_name}", f"/v1/catalog/{{storefront}}/{type_name}/{{id}}"):
            path_query = query if path.endswith(type_name) else {name: values for name, values in query.items() if name != "ids"}
            derived.append({"method": "GET", "host": "amp-api.music.apple.com", "path": path, "params": path_query, "model": base, "evidence": derived_evidence})
    return derived


def known_anchors(types, resource_types, definition_rows):
    anchors = {key for image in types for row in image["codingKeys"] for key in row["keys"] if key}
    anchors |= {value for image in types for row in image.get("enums", []) for value in row["values"] if value}
    anchors |= {row["rawValue"] for row in resource_types if row.get("rawValue")}
    anchors |= {value for row in definition_rows for value in row.get("args", {}).values()}
    return anchors


def assemble(out_dir):
    types = read_json(out_dir, "types.json")
    resource_types = read_json(out_dir, "resourcetypes.json")
    model_types = read_json(out_dir, "modeltypes.json")
    properties = read_json(out_dir, "properties.json", [])
    definition_rows = read_json(out_dir, "definitions.json", [])
    apiuse = read_json(out_dir, "apiuse.json")
    sites, traced = read_traces(out_dir)
    anchors = known_anchors(types, resource_types, definition_rows)
    inventory = {image: sorted(drop_splices(set(strings), anchors)) for image, strings in read_json(out_dir, "inventory.json").items()}
    coding = coding_keys_by_type(types)
    params, paths, mappings, headers = observed_calls(sites)
    hosts, inventory_paths, inventory_params = inventory_matches(inventory)
    known_keys = {key for keys in coding.values() for key in keys}
    known_types = {row["rawValue"] for row in resource_types if row.get("rawValue")}
    explained = set(params) | {name.split("[")[0] for name in params} | known_keys | known_types
    unexplained_params = sorted(name for name in inventory_params if name not in params and not any(name.startswith(template.split("{x}")[0]) and template.endswith("]") for template in params if "{x}" in template))
    unexplained_kebab = sorted({text for strings in inventory.values() for text in strings if kebab_case.match(text) and text not in explained})
    enums = enums_from(types)
    definitions = definitions_from(definition_rows)
    add_domains(params, enums, definitions)
    member_types = {row["member"]: row["rawValue"] for row in resource_types if row.get("member")}
    return {
        "requests": merge([dict(record) for record in traced]),
        "derivedRequests": derived_requests(coding, model_types, definitions, params, properties),
        "callerRequests": caller_requests(apiuse, properties, member_types) if apiuse is not None else {},
        "enums": enums,
        "definitions": dict(sorted(definitions.items())),
        "resourceTypes": member_types,
        "resources": resources_from(model_types, coding),
        "codingKeys": {f"{image}:{name}": keys for (image, name), keys in sorted(coding.items())},
        "params": {name: {"values": sorted(info["values"]), "images": sorted(info["images"]), "templates": sorted(info["templates"]), "domains": sorted(info.get("domains", []))} for name, info in sorted(params.items())},
        "paths": {path: sorted(images) for path, images in sorted(paths.items())},
        "inventoryPaths": {path: sorted(images) for path, images in sorted(inventory_paths.items())},
        "hosts": {host: sorted(images) for host, images in sorted(hosts.items())},
        "headers": {name: sorted(images) for name, images in sorted(headers.items())},
        "fieldMappings": {image: sorted(values) for image, values in sorted(mappings.items())},
        "unexplained": {"params": {name: sorted(inventory_params[name]) for name in unexplained_params}, "kebab": unexplained_kebab},
    }
