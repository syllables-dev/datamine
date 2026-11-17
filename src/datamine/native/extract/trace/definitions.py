import json
from collections import defaultdict

from extract.binary.callsites import call_sites
from extract.binary.swiftstring import decode_string
from extract.trace.walker import Walker

string_argument_registers = (0, 2, 4, 6)
minimum_sites = 3
minimum_known_literals = 2
paths_per_site = 4


def literal_arguments(memory, registers):
    literals = []
    for low_register in string_argument_registers:
        low, high = registers.get(low_register), registers.get(low_register + 1)
        if low is None or high is None:
            continue
        text = decode_string(memory, low, high)
        if text:
            literals.append((low_register, text))
    return literals


def calls_with_literals(memory, image):
    calls = defaultdict(list)
    for site, callee, registers in call_sites(image):
        literals = literal_arguments(memory, registers)
        if literals:
            calls[callee].append((site, literals))
    return calls


def definition_targets(target, vocabulary):
    found = {}
    for callee, sites in calls_with_literals(target.memory, target.image).items():
        if not target.image.in_text(callee) or len(sites) < minimum_sites:
            continue
        literals = {text for _, arguments in sites for _, text in arguments}
        if len(literals & vocabulary) >= minimum_known_literals:
            found[callee] = sites
    return found


def definitions(target, vocabulary):
    walker = Walker(target)
    targets = definition_targets(target, vocabulary)
    walker.record_targets = set(targets)
    summary = []
    for callee, sites in targets.items():
        for site, _ in sites:
            function = walker.graphs.bounds(site)[0]
            blocks, paths = walker.graphs.paths_to_site(function, site, limit=paths_per_site)

            def run():
                for trail in paths:
                    walker.run_blocks(walker.new_emulator(), blocks, trail, function, site)

            merged = {}
            for row in walker.collect(run):
                merged.update(json.loads(row["arg"]))
            summary.append({"image": target.name, "constructor": hex(callee), "site": hex(site), "args": merged})
    return summary
