import { hashOf } from "@/scrape/assets";

import type {
  Api,
  Flags,
  HeaderUsage,
  Report,
  Section,
  SectionName,
  Snapshot,
  Target,
  Token,
} from "@/types";

export const sectionNames: SectionName[] = [
  "sourcemaps",
  "strings",
  "features",
  "overrides",
  "endpoints",
  "params",
  "headers",
  "code",
  "tokens",
  "urls",
  "chunks",
];

const emptyFlags: Flags = { features: {}, overrides: [] };

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

const stringLine = (key: string, value: string) =>
  `${key}: ${JSON.stringify(value)}`;

const linesOf = (keys: Set<string>, record: Record<string, string>) =>
  new Set([...keys].map((key) => stringLine(key, record[key] ?? "")));

const placeholder = /^\*\*.+\*\*$/u;

const segmentsOf = (key: string) => key.split(".");

const sameTail = (a: string, b: string) => {
  const left = segmentsOf(a);
  const right = segmentsOf(b);
  const length = Math.max(1, Math.min(left.length, right.length) - 1);
  return left.slice(-length).join(".") === right.slice(-length).join(".");
};

const indexByLastSegment = (strings: Record<string, string>) => {
  const index = new Map<string, string[]>();
  for (const key of Object.keys(strings)) {
    const last = segmentsOf(key).at(-1) ?? key;
    index.set(last, [...(index.get(last) ?? []), key]);
  }
  return index;
};

const matching = (index: Map<string, string[]>, key: string) =>
  (index.get(segmentsOf(key).at(-1) ?? key) ?? []).filter((other) =>
    sameTail(key, other)
  );

const stringSection = (
  from: Record<string, string>,
  to: Record<string, string>
) => {
  const section = keyed(
    new Map(Object.entries(from).map(([k, v]) => [k, stringLine(k, v)])),
    new Map(Object.entries(to).map(([k, v]) => [k, stringLine(k, v)]))
  );
  const fromIndex = indexByLastSegment(from);
  const toIndex = indexByLastSegment(to);
  const moved: [string, string][] = [];
  const movedFrom = new Set<string>();
  const movedTo = new Set<string>();
  for (const key of Object.keys(from)) {
    if (key in to) {
      continue;
    }
    const value = from[key] ?? "";
    const target = matching(toIndex, key).find(
      (other) => to[other] === value || placeholder.test(value)
    );
    if (target !== undefined) {
      movedFrom.add(key);
      if (to[target] === value) {
        moved.push([key, target]);
        movedTo.add(target);
      }
    }
  }
  for (const key of Object.keys(to)) {
    if (key in from || movedTo.has(key)) {
      continue;
    }
    const source = matching(fromIndex, key).find(
      (other) => from[other] === to[key]
    );
    if (source !== undefined) {
      moved.push([source, key]);
      movedTo.add(key);
    }
  }
  const removedLines = linesOf(movedFrom, from);
  const addedLines = linesOf(movedTo, to);
  return {
    moved: moved.toSorted(([a], [b]) => a.localeCompare(b)),
    section: {
      added: section.added.filter((line) => !addedLines.has(line)),
      removed: section.removed.filter((line) => !removedLines.has(line)),
      updated: section.updated,
    },
  };
};

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
    Object.entries(api?.endpoints ?? {}).flatMap(([path, endpoint]) => [
      ...Object.entries(endpoint.params).map(
        ([name, value]): [string, string] => [
          `${path}?${name}`,
          `${path} ${name}${value === null ? "" : `=${value}`}`,
        ]
      ),
      ...(endpoint.body ?? []).map((field): [string, string] => [
        `${path}#${field}`,
        `${path} body.${field}`,
      ]),
    ])
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

// Keyed by flag name, so turning a flag on or off shows as an update.
const featureLines = (flags: Flags) =>
  new Map(
    Object.entries(flags.features).map(([key, value]) => [
      key,
      `${key}: ${value}`,
    ])
  );

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
  modifiedChunks: string[],
  leakedMaps: string[]
): Report => {
  const oldChunks = previous?.manifest.chunks ?? {};
  const newChunks = next.manifest.chunks;
  const strings = stringSection(previous?.strings ?? {}, next.strings);
  // Older snapshots have no flags; compare against the new build so the first
  // run after upgrading does not report every flag as added.
  const oldFlags = previous?.flags ?? next.flags ?? emptyFlags;
  const newFlags = next.flags ?? emptyFlags;
  return {
    build: buildId(next.manifest.entry),
    host: target.host,
    initial: previous === undefined,
    modifiedChunks,
    movedStrings: strings.moved,
    previousBuild: previous && buildId(previous.manifest.entry),
    sections: {
      chunks: set(Object.keys(oldChunks), Object.keys(newChunks)),
      code: set(previous?.literals ?? [], next.literals),
      endpoints: keyed(endpointLines(previous?.api), endpointLines(next.api)),
      features: keyed(featureLines(oldFlags), featureLines(newFlags)),
      headers: set(headerLines(previous?.api), headerLines(next.api)),
      overrides: set(oldFlags.overrides, newFlags.overrides),
      params: keyed(paramLines(previous?.api), paramLines(next.api)),
      sourcemaps: { added: leakedMaps, removed: [], updated: [] },
      strings: strings.section,
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
  ]);
  return [`Build ${title}`, ...body].join("\n");
};
