import json
import os


def write_json(path, data, indent=1):
    with open(path, "w") as handle:
        json.dump(data, handle, indent=indent)


def read_json(path):
    with open(path) as handle:
        return json.load(handle)


def symbols_path(out_dir, image):
    return os.path.join(out_dir, f"{image}.syms")
