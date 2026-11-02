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

const lineBreak = /[\r\n]/u;

const singleLine = (value: string) => {
  if (lineBreak.test(value)) {
    throw new Error(
      `unexpected line break in AppleDB value ${JSON.stringify(value)}`
    );
  }
  return value;
};

const output = Bun.env.GITHUB_OUTPUT;
if (isNew && output) {
  const lines = Object.entries(newest).map(
    ([name, value]) => `${name}=${singleLine(value)}\n`
  );
  await appendFile(output, lines.join(""));
}
