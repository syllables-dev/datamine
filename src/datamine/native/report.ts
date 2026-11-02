import type { NativeReport, RegressionItem } from "@/datamine/native/types";
import type { Section } from "@/types";

export type NativeSectionName =
  | "endpoints"
  | "params"
  | "methods"
  | "lookups"
  | "fields"
  | "resourceTypes"
  | "other";

export const nativeSectionNames: NativeSectionName[] = [
  "endpoints",
  "params",
  "methods",
  "lookups",
  "fields",
  "resourceTypes",
  "other",
];

export const nativeTitles: Record<NativeSectionName, string> = {
  endpoints: "Endpoints",
  fields: "Response fields",
  lookups: "Catalog lookups",
  methods: "Methods",
  other: "Other",
  params: "Params",
  resourceTypes: "Resource types",
};

const sectionOf: Record<string, NativeSectionName> = {
  "caller-param": "lookups",
  "caller-request": "lookups",
  key: "fields",
  method: "methods",
  request: "endpoints",
  "request-param": "params",
  type: "resourceTypes",
};

const typeName = (scope: string) =>
  scope
    .split(":")
    .at(-1)
    ?.replace(/\.CodingKeys$/u, "") ?? scope;

export const describe = ([kind, scope, value]: RegressionItem) => {
  switch (kind) {
    case "request":
    case "caller-request": {
      return scope;
    }
    case "request-param":
    case "caller-param": {
      return `${scope} ${value}`;
    }
    case "method": {
      return `${value} ${scope}`;
    }
    case "key": {
      return `${typeName(scope)}: ${value}`;
    }
    case "type": {
      return `${scope} = ${value}`;
    }
    default: {
      return [kind, scope, value].filter(Boolean).join(" ");
    }
  }
};

const emptySection = (): Section => ({ added: [], removed: [], updated: [] });

const place = (
  sections: Record<NativeSectionName, Section>,
  items: RegressionItem[],
  side: "added" | "removed"
) => {
  for (const item of items) {
    sections[sectionOf[item[0]] ?? "other"][side].push(describe(item));
  }
};

export const nativeSections = (report: NativeReport) => {
  const sections = Object.fromEntries(
    nativeSectionNames.map((name) => [name, emptySection()])
  ) as Record<NativeSectionName, Section>;
  place(sections, report.gained, "added");
  place(sections, report.removed, "removed");
  for (const section of Object.values(sections)) {
    section.added.sort();
    section.removed.sort();
  }
  return sections;
};

export const unexplainedLines = (report: NativeReport) =>
  report.unexplained.map(describe).toSorted();
