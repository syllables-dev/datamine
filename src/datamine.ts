import { config } from "@/config";
import { extractApi } from "@/extract/api";
import { extractFlags } from "@/extract/flags";
import { extractLiterals } from "@/extract/literals";
import { extractStrings } from "@/extract/strings";
import { required } from "@/lib/expect";
import { json } from "@/lib/files";
import { get } from "@/lib/http";
import { commitMessage, compare } from "@/report";
import { crawl } from "@/scrape/crawl";
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
const only = args
  .filter((arg) => arg.startsWith("--target="))
  .map((arg) => arg.slice("--target=".length));

const datamine = async (target: Target): Promise<Report | undefined> => {
  const origin = `https://${target.host}`;
  const dir = `${config.paths.snapshots}/${target.host}`;
  const previous = await readSnapshot(dir);
  const pageUrl = `${origin}${target.page}`;
  const page = readPage(await get(pageUrl), pageUrl);
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
  const { literals, tokens, version } = extractLiterals(sources, origin);
  const snapshot: Snapshot = {
    api: extractApi(sources, origin),
    flags: extractFlags(sources),
    literals,
    manifest: {
      chunks,
      entry: page.entry,
      fetchedAt: new Date().toISOString(),
      roots: page.roots,
      ...(version && { version }),
    },
    strings: extractStrings(
      await get(`${origin}/assets/${stringsFile}`),
      stringsFile
    ),
    tokens,
  };
  const { changed, modified } = await writeSnapshot(
    dir,
    snapshot,
    sources,
    page.head,
    previous?.manifest
  );
  if (!changed) {
    console.log(`${target.host}: no changes (${page.entry})`);
    return;
  }
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
