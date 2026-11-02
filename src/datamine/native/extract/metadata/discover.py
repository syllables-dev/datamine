import os

from extract.binary.image import Image
from extract.binary.memory import SharedCache
from extract.metadata.swiftmeta import SwiftMetadata

resource_keys = {"attributes", "relationships"}


def resource_like_counts(memory, image):
    meta = SwiftMetadata(memory, image)
    resource_like = coding = 0
    for conformance in meta.conformances():
        protocol = str(conformance["protocol_name"])
        if "CodingKey" not in protocol or "Representable" in protocol:
            continue
        coding += 1
        cases = meta.enum_cases(conformance["type"]) if isinstance(conformance["type"], int) else None
        if cases and resource_keys <= set(cases[2]):
            resource_like += 1
    return coding, resource_like


def scan_images(cache_dir, images):
    memory = SharedCache(cache_dir)
    found = []
    for path, header in images:
        try:
            image = Image(memory, header, os.path.basename(path))
            if not image.section("__TEXT.__swift5_proto")[1]:
                continue
            coding, resource_like = resource_like_counts(memory, image)
            if resource_like:
                found.append({"path": path, "codingKeys": coding, "resourceLike": resource_like})
        except Exception as error:
            found.append({"path": path, "error": repr(error)[:120]})
    return found
