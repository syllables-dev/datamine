import {
  bundleSections,
  notableSections,
  titles,
  versionLine,
} from "@/datamine/web/notify/sections";
import { counts, diffLines, isEmpty } from "@/notify/diff";
import { commentBody } from "@/notify/github";

import type { Report } from "@/datamine/web/types";

export const webComment = (report: Report) =>
  commentBody(
    [`## ${report.host}`, versionLine(report)],
    [
      ...[...notableSections, ...bundleSections]
        .filter((name) => !isEmpty(report.sections[name]))
        .map((name) => ({
          folded: !notableSections.includes(name),
          heading: `${titles[name]} (${counts(report.sections[name])})`,
          lines: diffLines(report.sections[name], 1000),
        })),
      ...(report.movedStrings.length > 0
        ? [
            {
              folded: true,
              heading: `Moved strings (${report.movedStrings.length})`,
              lines: report.movedStrings.map(
                ([from, to]) => `${from} -> ${to}`
              ),
            },
          ]
        : []),
    ]
  );
