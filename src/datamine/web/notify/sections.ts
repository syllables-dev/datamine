import { isEmpty } from "@/report";

import type { Report, SectionName } from "@/types";

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

const externalSuffix = /-external$/u;

export const shortVersion = (version: string) =>
  version.replace(externalSuffix, "");
