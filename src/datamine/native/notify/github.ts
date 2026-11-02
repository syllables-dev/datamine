import { possiblyMissed } from "@/datamine/native/notify/discord";
import {
  nativeSectionNames,
  nativeSections,
  nativeTitles,
  unexplainedLines,
} from "@/datamine/native/report";
import { diffLines } from "@/notify/diff";
import { diffBlock } from "@/notify/github";
import { counts, isEmpty } from "@/report";

import type { Build, NativeReport } from "@/datamine/native/types";

const commentLimit = 60_000;

const label = (build: Build) => `**${build.version}** (\`${build.build}\`)`;

export const commentBody = (report: NativeReport) => {
  const parts = [
    `## iOS ${report.to.version}`,
    `${label(report.from)} → ${label(report.to)}`,
  ];
  let budget = commentLimit - parts.join("\n\n").length;
  const sections = nativeSections(report);
  const missed =
    report.unexplained.length > 0
      ? [
          {
            heading: `${possiblyMissed} (${report.unexplained.length})`,
            lines: unexplainedLines(report).map((line) => `! ${line}`),
          },
        ]
      : [];
  const blocks = [
    ...missed,
    ...nativeSectionNames
      .filter((name) => !isEmpty(sections[name]))
      .map((name) => ({
        heading: `${nativeTitles[name]} (${counts(sections[name])})`,
        lines: diffLines(sections[name], 1000),
      })),
  ];
  for (const { heading, lines } of blocks) {
    if (budget < 500) {
      break;
    }
    const part = `### ${heading}\n\n${diffBlock(lines, budget - 300)}`;
    parts.push(part);
    budget -= part.length + 2;
  }
  return parts.join("\n\n");
};
