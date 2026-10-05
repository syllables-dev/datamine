import { hashOf } from "@/scrape/assets";

import type {
  Api,
  HeaderUsage,
  Report,
  Section,
  SectionName,
  Snapshot,
  Target,
  Token,
} from "@/types";

export const sectionNames: SectionName[] = [
  "strings",
  "endpoints",
  "params",
  "headers",
  "code",
  "tokens",
  "urls",
  "chunks",
];

export const buildId = (entry: string) => hashOf(entry) ?? entry;

const keyed = (from: Map<string, string>, to: Map<string, string>): Section => {
  const section: Section = { added: [], removed: [], updated: [] };
  for (const [key, line] of to) {
    const old = from.get(key);
    if (old === undefined) {
      section.added.push(line);
    } else if (old !== line) {
      section.updated.push([old, line]);
    }
  }
  for (const [key, line] of from) {
    if (!to.has(key)) {
      section.removed.push(line);
    }
  }
  return section;
};

const set = (from: string[], to: string[]) =>
  keyed(
    new Map(from.map((item) => [item, item])),
    new Map(to.map((item) => [item, item]))
  );

const stringLines = (strings: Record<string, string>) =>
  new Map(
    Object.entries(strings).map(([key, value]) => [
      key,
      `${key}: ${JSON.stringify(value)}`,
    ])
  );

const endpointLines = (api: Api | undefined) =>
  new Map(
    Object.entries(api?.endpoints ?? {}).map(([path, endpoint]) => [
      path,
      endpoint.methods.length > 0
        ? `${endpoint.methods.join(" ")} ${path}`
        : path,
    ])
  );

const paramLines = (api: Api | undefined) =>
  new Map(
    Object.entries(api?.endpoints ?? {}).flatMap(([path, endpoint]) =>
      Object.entries(endpoint.params).map(([name, value]): [string, string] => [
        `${path}?${name}`,
        `${path} ${name}${value === null ? "" : `=${value}`}`,
      ])
    )
  );

const usageLine = (header: string, usage: HeaderUsage) =>
  [
    header,
    `in ${usage.in ?? usage.chunk}`,
    usage.methods?.join("/") ?? "",
    usage.targets ? `-> ${usage.targets.join(", ")}` : "",
  ]
    .filter(Boolean)
    .join(" ");

const headerLines = (api: Api | undefined) => [
  ...Object.entries(api?.requestHeaders ?? {}).flatMap(([header, usages]) =>
    usages.map((usage) => usageLine(header, usage))
  ),
  ...Object.keys(api?.responseHeaders ?? {}).map(
    (header) => `${header} (response)`
  ),
];

const day = (iso: string | undefined) => iso?.slice(0, 10) ?? "?";

const tokenLines = (tokens: Token[]) =>
  new Map(
    tokens.map((token): [string, string] => [
      `${token.kid}:${token.iss}`,
      `${token.kid ?? "?"} iss=${token.iss ?? "?"} issued ${day(token.iat)} expires ${day(token.exp)}${
        token.origins ? ` origins=${token.origins.join(",")}` : ""
      }`,
    ])
  );

export const compare = (
  target: Target,
  previous: Snapshot | undefined,
  next: Snapshot,
  modifiedChunks: string[]
): Report => {
  const oldChunks = previous?.manifest.chunks ?? {};
  const newChunks = next.manifest.chunks;
  return {
    build: buildId(next.manifest.entry),
    host: target.host,
    initial: previous === undefined,
    modifiedChunks,
    musickit: {
      from: previous?.manifest.musickit?.version,
      to: next.manifest.musickit?.version,
    },
    previousBuild: previous && buildId(previous.manifest.entry),
    sections: {
      chunks: set(Object.keys(oldChunks), Object.keys(newChunks)),
      code: set(previous?.literals ?? [], next.literals),
      endpoints: keyed(endpointLines(previous?.api), endpointLines(next.api)),
      headers: set(headerLines(previous?.api), headerLines(next.api)),
      params: keyed(paramLines(previous?.api), paramLines(next.api)),
      strings: keyed(
        stringLines(previous?.strings ?? {}),
        stringLines(next.strings)
      ),
      tokens: keyed(
        tokenLines(previous?.tokens ?? []),
        tokenLines(next.tokens)
      ),
      urls: set(previous?.api.urls ?? [], next.api.urls),
    },
    target: target.id,
    totals: {
      chunks: Object.keys(newChunks).length,
      endpoints: Object.keys(next.api.endpoints).length,
      headers: Object.keys(next.api.requestHeaders).length,
      strings: Object.keys(next.strings).length,
    },
    version: { from: previous?.manifest.version, to: next.manifest.version },
  };
};

export const counts = (section: Section) =>
  `+${section.added.length} -${section.removed.length} ~${section.updated.length}`;

export const isEmpty = (section: Section) =>
  section.added.length + section.removed.length + section.updated.length === 0;

export const commitMessage = (reports: Report[]) => {
  const title = reports
    .map(
      (report) =>
        `${report.target} ${report.build}${report.initial ? " (initial)" : ""}`
    )
    .join(", ");
  const body = reports.flatMap((report) => [
    "",
    `${report.host}: ${report.previousBuild ?? "none"} -> ${report.build}`,
    ...(report.version.from === report.version.to
      ? []
      : [
          `  version: ${report.version.from ?? "none"} -> ${report.version.to ?? "none"}`,
        ]),
    ...sectionNames
      .filter((name) => !isEmpty(report.sections[name]))
      .map((name) => `  ${name}: ${counts(report.sections[name])}`),
    ...(report.musickit.from === report.musickit.to
      ? []
      : [
          `  musickit: ${report.musickit.from ?? "none"} -> ${report.musickit.to ?? "none"}`,
        ]),
  ]);
  return [`Build ${title}`, ...body].join("\n");
};
