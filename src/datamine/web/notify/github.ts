import {
  bundleSections,
  notableSections,
  shortVersion,
  titles,
} from "@/datamine/web/notify/sections";
import { diffLines } from "@/notify/diff";
import { diffBlock, folded } from "@/notify/github";
import { counts, isEmpty, sectionNames } from "@/report";

import type { Report, SectionName } from "@/types";

const commentLimit = 60_000;

const label = (version: string | undefined, build: string | undefined) =>
  version ? `**${shortVersion(version)}** (\`${build}\`)` : `\`${build}\``;

export const commentBody = (report: Report) => {
  const parts = [
    `## ${report.host}`,
    `${label(report.version.from, report.previousBuild)} → ${label(report.version.to, report.build)}`,
  ];
  let budget = commentLimit - parts.join("\n\n").length;
  const order: SectionName[] = [...notableSections, ...bundleSections];
  for (const name of order.filter((item) => sectionNames.includes(item))) {
    const section = report.sections[name];
    if (isEmpty(section) || budget < 500) {
      continue;
    }
    const heading = `${titles[name]} (${counts(section)})`;
    const body = diffBlock(diffLines(section, 1000), budget - 300);
    const part = notableSections.includes(name)
      ? `### ${heading}\n\n${body}`
      : folded(heading, body);
    parts.push(part);
    budget -= part.length + 2;
  }
  if (report.movedStrings.length > 0 && budget > 500) {
    const lines = report.movedStrings.map(([from, to]) => `${from} -> ${to}`);
    parts.push(
      folded(
        `Moved strings (${report.movedStrings.length})`,
        diffBlock(lines, budget - 300)
      )
    );
  }
  return parts.join("\n\n");
};
