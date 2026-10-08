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

const writeText = async (path: string, text: string) => {
  if ((await readText(path)) === text) {
    return false;
  }
  await Bun.write(path, text);
  return true;
};

const writeAssets = async (dir: string, sources: Map<string, string>) => {
  const modified: string[] = [];
  const written = await Promise.all(
    [...sources].map(async ([name, source]) => {
      const path = `${dir}/${name}`;
      const text = await pretty(source, name);
      const old = await readText(path);
      if (old !== undefined && old !== text) {
        modified.push(name);
      }
      return await writeText(path, text);
    })
  );
  const removed = await removeStale(dir, new Set(sources.keys()));
  return {
    changed: written.includes(true) || removed.length > 0,
    modified: modified.toSorted(),
  };
};

const timeless = (manifest: Manifest | undefined) =>
  manifest && json({ ...manifest, fetchedAt: undefined });

export const writeSnapshot = async (
  dir: string,
  snapshot: Snapshot,
  sources: Map<string, string>,
  head: string,
  previous: Manifest | undefined
) => {
  const paths = snapshotPaths(dir);
  const assets = await writeAssets(paths.assets, sources);
  const written = await Promise.all([
    writeText(paths.head, head),
    writeText(paths.strings, json(snapshot.strings)),
    writeText(paths.api, json(snapshot.api)),
    snapshot.flags && writeText(paths.flags, json(snapshot.flags)),
    writeText(paths.literals, jsonLines(snapshot.literals)),
    writeText(paths.tokens, json(snapshot.tokens)),
  ]);
  const changed =
    assets.changed ||
    written.includes(true) ||
    timeless(previous) !== timeless(snapshot.manifest);
  await writeText(
    paths.manifest,
    json(
      changed || !previous
        ? snapshot.manifest
        : { ...snapshot.manifest, fetchedAt: previous.fetchedAt }
    )
  );
  return { changed, modified: assets.modified };
};
