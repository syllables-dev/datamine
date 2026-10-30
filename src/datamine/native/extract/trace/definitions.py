import json

from extract.strings.census import calls_with_literals
from extract.trace.walker import Walker

minimum_sites = 3
minimum_known_literals = 2
paths_per_site = 4


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
