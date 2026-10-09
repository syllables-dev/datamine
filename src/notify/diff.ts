import { isEmpty } from "@/report";

import type { Report, Section, SectionName } from "@/types";

export const titles: Record<SectionName, string> = {
  chunks: "Chunks",
  code: "Code strings",
  endpoints: "Endpoints",
  features: "Feature Flags",
  headers: "Headers",
  overrides: "Override Toggles",
  params: "Params",
  sourcemaps: "Source Maps",
  strings: "Strings",
  tokens: "Tokens",
  urls: "URLs",
};

export const notableSections: SectionName[] = [
  "sourcemaps",
  "strings",
  "features",
  "overrides",
  "endpoints",
  "tokens",
];

export const bundleSections: SectionName[] = [
  "params",
  "headers",
  "urls",
  "chunks",
  "code",
];

export const isNoise = (report: Report) =>
  report.version.from === report.version.to &&
  notableSections.every((name) => isEmpty(report.sections[name]));

const flatten = (line: string, max: number) => {
  const flat = line.replaceAll("\n", "\\n");
  return flat.length > max ? `${flat.slice(0, max)}...` : flat;
};

export const diffLines = (section: Section, max = 300) => {
  const groups: string[][] = [];
  if (section.added.length > 0) {
    groups.push([
      "# Added",
      ...section.added.map((line) => `+ ${flatten(line, max)}`),
    ]);
  }
  if (section.updated.length > 0) {
    groups.push([
      "# Updated",
      ...section.updated.flatMap(([from, to]) => [
        `- ${flatten(from, max)}`,
        `+ ${flatten(to, max)}`,
      ]),
    ]);
  }
  if (section.removed.length > 0) {
    groups.push([
      "# Removed",
      ...section.removed.map((line) => `- ${flatten(line, max)}`),
    ]);
  }
  return groups.flatMap((group, index) =>
    index === 0 ? group : ["", ...group]
  );
};

export const chunkLines = (lines: string[], size: number) => {
  const chunks: string[][] = [];
  let current: string[] = [];
  let length = 0;
  for (const line of lines) {
    if (current.length > 0 && length + line.length + 1 > size) {
      chunks.push(current);
      current = [];
      length = 0;
    }
    if (current.length === 0 && line === "") {
      continue;
    }
    current.push(line);
    length += line.length + 1;
  }
  if (current.length > 0) {
    chunks.push(current);
  }
  return chunks;
};

const externalSuffix = /-external$/u;

export const shortVersion = (version: string) =>
  version.replace(externalSuffix, "");
