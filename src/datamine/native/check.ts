import { appendFile } from "node:fs/promises";

import { config } from "@/config";
import { newestBuild } from "@/datamine/native/appledb";
import { readJson } from "@/lib/files";

import type { Build } from "@/datamine/native/types";

const current = await readJson<Build>(`${config.paths.native}/build.json`);
const newest = await newestBuild(config.native.device, current);
const isNew =
  newest !== undefined &&
  newest.build !== current?.build &&
  newest.released >= (current?.released ?? "");

console.log(
  isNew
    ? `New build ${newest.version} (${newest.build}), last processed ${current?.build ?? "none"}`
    : `No new build, last processed ${current?.build ?? "none"}`
);

const output = Bun.env.GITHUB_OUTPUT;
if (isNew && output) {
  await appendFile(
    output,
    `build=${newest.build}\nversion=${newest.version}\nipsw=${newest.ipsw}\nreleased=${newest.released}\n`
  );
}
