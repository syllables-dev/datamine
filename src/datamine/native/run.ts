import { mkdir, rm } from "node:fs/promises";
import { parseArgs } from "node:util";

import { reportsDir } from "@/config";
import { device, nativeDir } from "@/datamine/native/config";
import { fetchMusicApp, fetchSharedCache } from "@/datamine/native/fetch";
import { json, readJson } from "@/lib/files";

import type { Build, Regression } from "@/datamine/native/types";

const extractorProject = Bun.fileURLToPath(new URL(".", import.meta.url));

class ExtractError extends Error {
  override readonly name = "ExtractError";
}

const extract = async (args: string[]) => {
  const process = Bun.spawn(
    [
      "uv",
      "run",
      "--project",
      extractorProject,
      "python",
      "-m",
      "extract",
      ...args,
    ],
    {
      cwd: extractorProject,
      stderr: "inherit",
      stdout: "inherit",
    }
  );
  if ((await process.exited) !== 0) {
    throw new ExtractError(
      `extract ${args[0]} exited with ${process.exitCode}`
    );
  }
};

const buildFromArgs = (): Build => {
  const { values } = parseArgs({
    options: {
      build: { type: "string" },
      ipsw: { type: "string" },
      released: { type: "string" },
      version: { type: "string" },
    },
  });
  const { build, ipsw, released, version } = values;
  if (!(build && ipsw && released && version)) {
    throw new ExtractError(
      "--build, --version, --released and --ipsw are required"
    );
  }
  return { build, ipsw, released, version };
};

const build = buildFromArgs();
const work = `${reportsDir}/native/${build.build}`;
const output = `${work}/output`;
const snapshotPath = `${nativeDir}/catalog.json`;
const buildPath = `${nativeDir}/build.json`;
const regressionPath = `${nativeDir}/regression.json`;

await rm(work, { force: true, recursive: true });
await mkdir(output, { recursive: true });
const cache = await fetchSharedCache(build.ipsw, `${work}/cache`);
const apps = await fetchMusicApp(build.ipsw, device, `${work}/apps`);
await extract(["run", cache, output, ...apps]);

const previous = await readJson<Build>(buildPath);
await mkdir(nativeDir, { recursive: true });
if (previous && (await Bun.file(snapshotPath).exists())) {
  await extract(["regress", snapshotPath, output, `${work}/regression.json`]);
  const changes = await readJson<Regression>(`${work}/regression.json`);
  await Bun.write(
    regressionPath,
    json({ from: previous, to: build, ...changes })
  );
} else {
  await rm(regressionPath, { force: true });
}
await Bun.write(snapshotPath, await Bun.file(`${output}/snapshot.json`).text());
await Bun.write(buildPath, json(build));
console.log(
  `Extracted ${build.version} (${build.build})${previous ? ` after ${previous.build}` : ", first snapshot"}`
);
