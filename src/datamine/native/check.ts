import { appendFile } from "node:fs/promises";

import { newestBuild } from "@/datamine/native/appledb";
import { device, nativeDir } from "@/datamine/native/config";
import { compareBuilds } from "@/datamine/native/versions";
import { readJson } from "@/lib/files";

import type { Build } from "@/datamine/native/types";

const current = await readJson<Build>(`${nativeDir}/build.json`);
const newest = await newestBuild(device, current);
const isNew =
  newest !== undefined &&
  (current === undefined || compareBuilds(newest, current) > 0);

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
