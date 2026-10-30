import argparse
import json
import os

from extract.catalog.regress import compare
from extract.pipeline import Pipeline, read_json, symbol_images, write_json


def all_strings(out_dir):
    return {text for strings in read_json(os.path.join(out_dir, "inventory.json")).values() for text in strings}


def symbol_texts(out_dir):
    texts = {}
    for image in symbol_images:
        path = os.path.join(out_dir, f"{image}.syms")
        if os.path.exists(path):
            with open(path, errors="replace") as handle:
                texts[image] = handle.read()
    return texts


def run(arguments):
    Pipeline(arguments.cache, arguments.out, arguments.apps).run()


def regress(arguments):
    report = compare(read_json(arguments.previous), read_json(os.path.join(arguments.out, "catalog.json")), all_strings(arguments.out), symbol_texts(arguments.out))
    write_json(arguments.report, report)
    print(json.dumps({key: len(value) for key, value in report.items()}))


def main():
    parser = argparse.ArgumentParser(prog="extract")
    commands = parser.add_subparsers(required=True)
    run_command = commands.add_parser("run")
    run_command.add_argument("cache")
    run_command.add_argument("out")
    run_command.add_argument("apps", nargs="*")
    run_command.set_defaults(handler=run)
    regress_command = commands.add_parser("regress")
    regress_command.add_argument("previous")
    regress_command.add_argument("out")
    regress_command.add_argument("report")
    regress_command.set_defaults(handler=regress)
    arguments = parser.parse_args()
    arguments.handler(arguments)


if __name__ == "__main__":
    main()
