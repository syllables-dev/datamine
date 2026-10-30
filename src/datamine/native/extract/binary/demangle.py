import subprocess


def demangle(names, simplified=True):
    ordered = sorted(names)
    if not ordered:
        return {}
    flags = ["--simplified"] if simplified else []
    output = subprocess.run(["xcrun", "swift-demangle", *flags], input="\n".join(ordered), capture_output=True, text=True, check=False).stdout.split("\n")
    return dict(zip(ordered, output))
