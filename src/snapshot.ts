import { format } from "oxfmt";

import { config } from "@/config";
import { emptyApi } from "@/extract/api";
import {
  json,
  jsonLines,
  readJson,
  readJsonLines,
  readText,
  removeStale,
} from "@/lib/files";
import { anyOf } from "@/lib/utils";

import type { Api, Flags, Manifest, Snapshot, Token } from "@/types";

export const snapshotPaths = (dir: string) => ({
  api: `${dir}/api.json`,
  assets: `${dir}/assets`,
  flags: `${dir}/flags.json`,
  head: `${dir}/index.html`,
  literals: `${dir}/literals.txt`,
  manifest: `${dir}/manifest.json`,
  strings: `${dir}/strings/${config.locale}.json`,
  tokens: `${dir}/tokens.json`,
});

const pretty = async (text: string, file: string) => {
  const result = await format(file, text, { printWidth: 120 });
  return result.errors.length > 0 ? text : result.code;
};

export const readSnapshot = async (
  dir: string
): Promise<Snapshot | undefined> => {
  const paths = snapshotPaths(dir);
  const manifest = await readJson<Manifest>(paths.manifest);
  if (!manifest) {
    return;
  }
  return {
    api: (await readJson<Api>(paths.api)) ?? emptyApi(),
    flags: await readJson<Flags>(paths.flags),
    literals: await readJsonLines<string>(paths.literals),
    manifest,
    strings: (await readJson<Record<string, string>>(paths.strings)) ?? {},
    tokens: (await readJson<Token[]>(paths.tokens)) ?? [],
  };
};

export const readAsset = (dir: string, name: string) =>
  readText(`${snapshotPaths(dir).assets}/${name}`);

export const stableSources = (
  files: Map<string, string>,
  chunks: Record<string, string>,
  translations: Map<string, string>
) => {
  const renames = new Map([
    ...Object.entries(chunks).map(([name, file]): [string, string] => [
      file,
      name,
    ]),
    ...[...translations].map(([locale, file]): [string, string] => [
      file,
      `translations.${locale}.js`,
    ]),
  ]);
  const hashedNames = anyOf(renames.keys());
  return new Map(
    Object.entries(chunks).map(([name, file]) => [
      name,
      (files.get(file) ?? "").replaceAll(
        hashedNames,
        (hashed) => renames.get(hashed) ?? hashed
      ),
    ])
  );
};

const writeAssets = async (dir: string, sources: Map<string, string>) => {
  const modified: string[] = [];
  await Promise.all(
    [...sources].map(async ([name, source]) => {
      const path = `${dir}/${name}`;
      const text = await pretty(source, name);
      const old = await readText(path);
      if (old !== undefined && old !== text) {
        modified.push(name);
      }
      await Bun.write(path, text);
    })
  );
  await removeStale(dir, new Set(sources.keys()));
  return modified.toSorted();
};

export const writeSnapshot = async (
  dir: string,
  snapshot: Snapshot,
  sources: Map<string, string>,
  head: string
) => {
  const paths = snapshotPaths(dir);
  const modified = await writeAssets(paths.assets, sources);
  await Bun.write(paths.head, head);
  await Bun.write(paths.strings, json(snapshot.strings));
  await Bun.write(paths.api, json(snapshot.api));
  if (snapshot.flags) {
    await Bun.write(paths.flags, json(snapshot.flags));
  }
  await Bun.write(paths.literals, jsonLines(snapshot.literals));
  await Bun.write(paths.tokens, json(snapshot.tokens));
  await Bun.write(paths.manifest, json(snapshot.manifest));
  return modified;
};
