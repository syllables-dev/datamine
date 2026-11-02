import os
import re

from extract.binary.image import Image
from extract.binary.memory import SharedCache
from extract.strings.inventory import inventory

api_marker = re.compile(r"amp-api|/v1/(catalog|me|social|editorial|storefronts|recommendations)|^v1/|^(include|extend|fields|ids|limit|omit|relate|views|art|filter|sparseLimit|overrideLimit|associate|displayFilter)\[|^format\[resources\]$")
strong_api_marker = re.compile(r"amp-api|/v1/(catalog|me|editorial|social|storefronts)|^(include|extend|fields|ids|limit|omit|relate|views|art|filter|associate|sparseLimit|overrideLimit|displayFilter)\[[a-z]")


def markers_in(memory, image):
    return sorted(text for text in inventory(memory, image) if api_marker.search(text))


def scan_images(cache_dir, images):
    memory = SharedCache(cache_dir)
    found = []
    for path, header in images:
        try:
            hits = markers_in(memory, Image(memory, header, os.path.basename(path)))
            if hits:
                found.append({"path": path, "markers": hits})
        except Exception as error:
            found.append({"path": path, "error": repr(error)[:120]})
    return found


def has_strong_marker(row):
    return "error" not in row and any(strong_api_marker.search(marker) for marker in row["markers"])
