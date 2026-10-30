import json
import os
import time
from concurrent.futures import ProcessPoolExecutor

from extract.binary.memory import SharedCache
from extract.binary.symbols import export_symbols
from extract.binary.target import open_target
from extract.catalog.assemble import assemble
from extract.metadata import discover
from extract.metadata.codingkeys import types_of
from extract.metadata.modeltypes import model_types
from extract.metadata.properties import properties
from extract.metadata.resourcetypes import resource_types
from extract.strings import markers
from extract.strings.inventory import inventory
from extract.trace.definitions import definitions
from extract.trace.run import trace_target
from extract.usage.apiuse import request_sites

symbol_images = ("libswiftCore.dylib", "Foundation", "MusicKit", "MusicKitInternal")
property_images = ("MusicKit", "MusicKitInternal")
discover_chunks = 16
marker_chunks = 32
workers = os.cpu_count() or 4


def write_json(path, data, indent=1):
    with open(path, "w") as handle:
        json.dump(data, handle, indent=indent)


def read_json(path):
    with open(path) as handle:
        return json.load(handle)


def chunks(items, count):
    return [items[index::count] for index in range(count)]


def discover_images(cache_dir):
    images = sorted(SharedCache(cache_dir).images().items())
    with ProcessPoolExecutor(max_workers=workers) as pool:
        found = [row for part in pool.map(discover.scan_images, [cache_dir] * discover_chunks, chunks(images, discover_chunks)) for row in part]
    return sorted(found, key=lambda row: -row.get("resourceLike", 0))


def cache_image_types(cache_dir, path, symbol_files):
    return types_of(path, open_target(cache_dir, os.path.basename(path), symbol_files))


def app_types(path):
    return types_of(path, open_target(None, path))


def scan_markers(cache_dir, apps):
    images = sorted(SharedCache(cache_dir).images().items())
    with ProcessPoolExecutor(max_workers=workers) as pool:
        found = [row for part in pool.map(markers.scan_images, [cache_dir] * marker_chunks, chunks(images, marker_chunks)) for row in part]
    for path in apps:
        target = open_target(None, path)
        found.append({"path": path, "markers": markers.markers_in(target.memory, target.image)})
    return sorted(found, key=lambda row: -len(row.get("markers", [])))


def trace_targets(marker_rows, discovered):
    targets = []
    for row in marker_rows:
        if markers.has_strong_marker(row):
            targets.append(row["path"] if os.path.isfile(row["path"]) else os.path.basename(row["path"]))
    targets.extend(name for name in discovered if name not in targets)
    return targets


def definition_vocabulary(types, resource_rows):
    vocabulary = {key for image in types for row in image["codingKeys"] for key in row["keys"] if key}
    return vocabulary | {row["rawValue"] for row in resource_rows if row.get("rawValue")}


def target_definitions(cache_dir, target, symbol_files, vocabulary):
    opened = open_target(cache_dir, target, symbol_files)
    try:
        return definitions(opened, vocabulary)
    except Exception as error:
        return [{"image": opened.name, "error": repr(error)[:200]}]


def trace_to_file(cache_dir, target, symbol_files, out_dir):
    started = time.time()
    result = trace_target(cache_dir, target, symbol_files)
    write_json(os.path.join(out_dir, "requests", f"{os.path.basename(target)}.json"), result, indent=None)
    return os.path.basename(target), time.time() - started


def target_request_sites(cache_dir, target, symbol_files):
    return request_sites(open_target(cache_dir, target, symbol_files))


def target_inventory(cache_dir, target):
    opened = open_target(cache_dir, target)
    return opened.name, sorted(inventory(opened.memory, opened.image))


class Pipeline:
    def __init__(self, cache_dir, out_dir, apps):
        self.cache_dir = cache_dir
        self.out_dir = out_dir
        self.apps = apps
        self.timings = {}
        os.makedirs(os.path.join(out_dir, "requests"), exist_ok=True)

    def path(self, name):
        return os.path.join(self.out_dir, name)

    def timed(self, name, step):
        started = time.time()
        result = step()
        self.timings[name] = round(time.time() - started, 1)
        print(f"{name}: {self.timings[name]}s", flush=True)
        return result

    def export_symbols(self):
        return {image: export_symbols(self.cache_dir, image, self.path(f"{image}.syms")) for image in symbol_images}

    def map(self, function, *arguments, max_workers=workers):
        with ProcessPoolExecutor(max_workers=max_workers) as pool:
            return list(pool.map(function, *arguments))

    def run(self):
        symbols = self.timed("symbols", self.export_symbols)
        runtime = [symbols["libswiftCore.dylib"], symbols["Foundation"]]
        tracing = runtime + [symbols["MusicKit"]]
        discovered_rows = self.timed("discover", lambda: discover_images(self.cache_dir))
        write_json(self.path("discover.json"), discovered_rows)
        discovered_paths = [row["path"] for row in discovered_rows if "error" not in row]
        discovered = [os.path.basename(path) for path in discovered_paths]
        types = self.timed("types", lambda: self.map(cache_image_types, [self.cache_dir] * len(discovered_paths), discovered_paths, [runtime] * len(discovered_paths)) + [app_types(path) for path in self.apps])
        write_json(self.path("types.json"), types)
        resource_rows = self.timed("resourcetypes", lambda: resource_types(open_target(self.cache_dir, "MusicKit", runtime), symbols["MusicKit"]))
        write_json(self.path("resourcetypes.json"), resource_rows)
        property_rows = self.timed("properties", lambda: [row for image in property_images for row in properties(open_target(self.cache_dir, image, tracing), symbols[image])])
        write_json(self.path("properties.json"), property_rows)
        model_rows = self.timed("modeltypes", lambda: model_types(open_target(self.cache_dir, "MusicKit", runtime), symbols["MusicKit"]))
        write_json(self.path("modeltypes.json"), model_rows)
        marker_rows = self.timed("markers", lambda: scan_markers(self.cache_dir, self.apps))
        write_json(self.path("markers.json"), marker_rows)
        targets = trace_targets(marker_rows, discovered)
        vocabulary = definition_vocabulary(types, resource_rows)
        definition_targets = discovered + list(self.apps)
        definition_rows = self.timed("definitions", lambda: [row for part in self.map(target_definitions, [self.cache_dir] * len(definition_targets), definition_targets, [tracing] * len(definition_targets), [vocabulary] * len(definition_targets)) for row in part])
        write_json(self.path("definitions.json"), definition_rows)
        traced = self.timed("requests", lambda: self.map(trace_to_file, [self.cache_dir] * len(targets), targets, [tracing] * len(targets), [self.out_dir] * len(targets), max_workers=max(2, workers // 2)))
        usage_targets = [target for target in targets if target != "MusicKit"] + [app for app in self.apps if app not in targets]
        usage = self.timed("apiuse", lambda: [site for part in self.map(target_request_sites, [self.cache_dir] * len(usage_targets), usage_targets, [tracing] * len(usage_targets)) for site in part])
        write_json(self.path("apiuse.json"), usage)
        inventories = self.timed("inventory", lambda: dict(self.map(target_inventory, [self.cache_dir] * len(targets), targets)))
        write_json(self.path("inventory.json"), inventories, indent=None)
        catalog = self.timed("assemble", lambda: assemble(self.out_dir))
        write_json(self.path("catalog.json"), catalog)
        write_json(self.path("pipeline.json"), {"targets": targets, "timings": self.timings, "traced": traced})
        return catalog
