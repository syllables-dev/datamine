import re
from collections import defaultdict

catalog_api = re.compile(r"^(MusicCatalogResourceRequest\.|MusicItem\.with)")
query_parameters = ("include", "extend", "views", "meta")
find_equivalents = "MusicCatalogResourceRequestOption.findEquivalents"


def lower_camel(name):
    return name[:1].lower() + name[1:]


def property_keys(properties):
    return {(row["root"], row["property"]): (row["kind"], row["keys"][0]) for row in properties if row["keys"]}


def caller_requests(apiuse, properties, resource_types):
    keys = property_keys(properties)
    requests = defaultdict(lambda: {"params": defaultdict(set), "sources": set()})
    for site in apiuse:
        if not any(catalog_api.match(request) for request in site["requests"]):
            continue
        roots = {path.split(".")[0].removesuffix("Filter") for path in site["keyPaths"] if path.endswith("Filter.id") and not path.startswith("Library")}
        by_root = defaultdict(list)
        for requested in site["properties"]:
            root, name = requested.split(".", 1)
            if (root, name) in keys:
                by_root[root].append(keys[(root, name)])
        roots |= set(by_root)
        for root in roots:
            resource_type = resource_types.get(lower_camel(root))
            if not resource_type:
                continue
            record = requests[f"/v1/catalog/{{storefront}}/{resource_type}"]
            record["sources"].add(f"{site['image']}:{site['function']}")
            if f"{root}Filter.id" in site["keyPaths"]:
                record["params"]["ids"].add("{ids}")
            if find_equivalents in site["properties"]:
                record["params"]["filter[equivalents]"].add("{ids}")
            for kind, key in by_root.get(root, ()):
                if kind in query_parameters:
                    record["params"][kind].add(key)
    return {path: {"params": {name: sorted(values) for name, values in sorted(record["params"].items())}, "sources": sorted(record["sources"])} for path, record in sorted(requests.items())}
