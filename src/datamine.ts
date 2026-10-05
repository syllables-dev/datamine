import { config } from "@/config";
import { extractApi } from "@/extract/api";
import { extractLiterals } from "@/extract/literals";
import { extractStrings } from "@/extract/strings";
import { required } from "@/lib/expect";
import { json } from "@/lib/files";
import { get } from "@/lib/http";
import { commitMessage, compare } from "@/report";
import { crawl } from "@/scrape/crawl";
import { musickitVersion } from "@/scrape/musickit";
import { assignNames } from "@/scrape/names";
import { readPage } from "@/scrape/page";
import { localeKey, translationFiles } from "@/scrape/translations";
import {
  readAsset,
  readSnapshot,
  stableSources,
  writeSnapshot,
} from "@/snapshot";

import type { Report, Snapshot, Target } from "@/types";

const args = Bun.argv.slice(2);
const force = args.includes("--force");
const only = args
  .filter((arg) => arg.startsWith("--target="))
  .map((arg) => arg.slice("--target=".length));

const datamine = async (target: Target): Promise<Report | undefined> => {
  const origin = `https://${target.host}`;
  const dir = `${config.paths.snapshots}/${target.host}`;
  const previous = await readSnapshot(dir);
  const pageUrl = `${origin}${target.page}`;
  const page = readPage(await get(pageUrl), pageUrl);
  const musickit = page.musickit
    ? await get(`${origin}${page.musickit}`)
    : undefined;
  const musickitHash =
    musickit === undefined ? undefined : Bun.hash(musickit).toString(16);
  if (
    !force &&
    previous &&
    previous.manifest.roots.join(",") === page.roots.join(",") &&
    previous.manifest.musickit?.hash === musickitHash
  ) {
    console.log(`${target.host}: no changes (${page.entry})`);
    return;
  }
  const files = await crawl(origin, page.roots);
  const translations = translationFiles(
    page.entry,
    files.get(page.entry) ?? ""
  );
  const stringsFile = required(
    translations.get(config.locale),
    `${config.locale} translations import`,
    page.entry,
    localeKey
  );
  const chunks = await assignNames(
    files,
    page.entry,
    previous?.manifest.chunks ?? {},
    (name) => readAsset(dir, name)
  );
  const sources = stableSources(files, chunks, translations);
  const analyzed = new Map(sources);
  if (musickit !== undefined) {
    analyzed.set("musickit.js", musickit);
  }
  const { literals, tokens, version } = extractLiterals(analyzed, origin);
  const snapshot: Snapshot = {
    api: extractApi(analyzed, origin),
    literals,
    manifest: {
      chunks,
      entry: page.entry,
      fetchedAt: new Date().toISOString(),
      ...(musickit !== undefined &&
        musickitHash && {
          musickit: {
            hash: musickitHash,
            version: musickitVersion(musickit) ?? "unknown",
          },
        }),
      roots: page.roots,
      ...(version && { version }),
    },
    strings: extractStrings(
      await get(`${origin}/assets/${stringsFile}`),
      stringsFile
    ),
    tokens,
  };
  const modified = await writeSnapshot(dir, snapshot, sources, {
    head: page.head,
    musickit,
  });
  return compare(target, previous, snapshot, modified);
};

const targets = config.targets.filter((target) =>
  only.length > 0 ? only.includes(target.id) : target.enabled
);
const reports: Report[] = [];
let failed = 0;
for (const target of targets) {
  try {
    const report = await datamine(target);
    if (report) {
      reports.push(report);
    }
  } catch (error) {
    failed += 1;
    console.log(
      `::error title=${target.host}::${error instanceof Error ? `${error.name}: ${error.message}` : String(error)}`
    );
  }
}
await Bun.write(`${config.paths.reports}/reports.json`, json(reports));
if (reports.length > 0) {
  const message = commitMessage(reports);
  await Bun.write(`${config.paths.reports}/commit.txt`, message);
  console.log(message);
}
if (failed === targets.length) {
  process.exit(1);
}
