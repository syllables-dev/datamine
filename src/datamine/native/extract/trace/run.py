import sys
from collections import defaultdict

from extract.binary.image import Image
from extract.binary.target import image_header, open_target
from extract.trace.linking import link_query_items
from extract.trace.methods import link_methods
from extract.trace.musickit import data_request_methods, music_api_initialiser
from extract.trace.requests import RequestTracer
from extract.trace.walker import Walker
from extract.trace.witnesses import WitnessTable

shared_library = "MusicKit"


def is_resolved(value):
    return value is not None and "{" not in value


def values_by_site(rows):
    mapping = defaultdict(lambda: defaultdict(set))
    for row in rows:
        site = int(row["site"], 16)
        for observed in row["observed"]:
            if observed.get("name") and observed.get("value"):
                mapping[site][observed["name"]].add(observed["value"])
    return mapping


def fill_values(requests, site_values):
    for record in requests:
        filled = []
        for name, value, site in record["query"]:
            if not is_resolved(value) and site in site_values:
                better = sorted(candidate for candidate in site_values[site].get(name, ()) if is_resolved(candidate))
                if better:
                    filled.extend([name, candidate, site] for candidate in better)
                    continue
            filled.append([name, value, site])
        record["query"] = filled


def library_context(target):
    if target.is_file:
        return [], []
    witness_tables = [WitnessTable(target.memory, target.image)]
    cross_regions = []
    if target.name != shared_library:
        library = Image(target.memory, image_header(target.memory, shared_library), shared_library)
        witness_tables.append(WitnessTable(target.memory, library))
        cross_regions.append((library.text[0], library.text_end))
    return cross_regions, witness_tables


def trace_target(cache_dir, name, symbol_files):
    target = open_target(cache_dir, name, symbol_files)
    cross_regions, witness_tables = library_context(target)
    tracer = RequestTracer(target, cross_regions, witness_tables)
    requests = tracer.analyze()
    site_rows = Walker(target, tracer.placeholders, tracer.heap, tracer.values).site_values()
    fill_values(requests, values_by_site(site_rows))
    links = link_query_items(target.image, requests, site_rows)
    methods = link_methods(target, requests, music_api_initialiser, data_request_methods)
    print(f"{target.name}: {len(requests)} raw requests, {len(links)} query producers linked, {methods} methods linked", file=sys.stderr)
    return {"requests": requests, "sites": site_rows}
