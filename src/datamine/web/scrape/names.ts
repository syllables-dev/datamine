import { warn } from "@/lib/expect";
import { escapeRegex } from "@/lib/utils";

import { assetHash, baseName, hashOf } from "./assets";

const identifier = /[A-Za-z_$][\w$]{5,}/gu;
const minSimilarity = 0.3;

type ReadPrevious = (name: string) => Promise<string | undefined>;

const words = (text: string) => new Set(text.match(identifier));

const similarity = (a: Set<string>, b: Set<string>) => {
  let shared = 0;
  for (const word of a) {
    if (b.has(word)) {
      shared += 1;
    }
  }
  return shared / (a.size + b.size - shared || 1);
};

const split = (name: string) => {
  const dot = name.lastIndexOf(".");
  return [name.slice(0, dot), name.slice(dot)] as const;
};

const nameGroup = async (
  base: string,
  group: string[],
  files: Map<string, string>,
  previous: Record<string, string>,
  readPrevious: ReadPrevious
): Promise<[string, string][]> => {
  const [stem, ext] = split(base);
  const numbered = new RegExp(
    `^${escapeRegex(stem)}-\\d+${escapeRegex(ext)}$`,
    "u"
  );
  const previousNames = new Map(
    Object.entries(previous).map(([name, file]) => [file, name])
  );
  const assigned = new Map<string, string>();
  const pending = group.filter((file) => {
    const name = previousNames.get(file);
    if (name && numbered.test(name)) {
      assigned.set(name, file);
      return false;
    }
    return true;
  });
  const pairs: [number, string, string][] = [];
  for (const name of Object.keys(previous)) {
    const old =
      numbered.test(name) && !assigned.has(name)
        ? await readPrevious(name)
        : undefined;
    if (old !== undefined) {
      const oldWords = words(old);
      for (const file of pending) {
        pairs.push([
          similarity(words(files.get(file) ?? ""), oldWords),
          file,
          name,
        ]);
      }
    }
  }
  const placed = new Set<string>();
  for (const [score, file, name] of pairs.toSorted((a, b) => b[0] - a[0])) {
    if (score > minSimilarity && !placed.has(file) && !assigned.has(name)) {
      assigned.set(name, file);
      placed.add(file);
    }
  }
  const rest = pending
    .filter((file) => !placed.has(file))
    .toSorted(
      (a, b) => (files.get(b)?.length ?? 0) - (files.get(a)?.length ?? 0)
    );
  let next = 1;
  for (const file of rest) {
    while (assigned.has(`${stem}-${next}${ext}`)) {
      next += 1;
    }
    assigned.set(`${stem}-${next}${ext}`, file);
  }
  return [...assigned];
};

const groupByBase = (files: Iterable<string>, entry: string) => {
  const groups = new Map<string, string[]>();
  const unhashed: string[] = [];
  for (const file of files) {
    if (file !== entry) {
      if (!hashOf(file)) {
        unhashed.push(file);
      }
      const base = baseName(file);
      groups.set(base, [...(groups.get(base) ?? []), file]);
    }
  }
  if (unhashed.length > 0) {
    warn(
      "asset hash",
      `${unhashed.length} files do not match ${assetHash}, so their names will change every build: ${unhashed.slice(0, 5).join(", ")}`
    );
  }
  return groups;
};

export const assignNames = async (
  files: Map<string, string>,
  entry: string,
  previous: Record<string, string>,
  readPrevious: ReadPrevious
): Promise<Record<string, string>> => {
  const names: [string, string][] = [["main.js", entry]];
  for (const [base, group] of groupByBase(files.keys(), entry)) {
    const [only] = group;
    if (group.length === 1 && only) {
      names.push([base, only]);
    } else {
      names.push(
        ...(await nameGroup(base, group, files, previous, readPrevious))
      );
    }
  }
  return Object.fromEntries(names.toSorted(([a], [b]) => a.localeCompare(b)));
};
