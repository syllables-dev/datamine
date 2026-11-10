import {
  missedLines,
  nativeSectionNames,
  nativeSections,
  nativeTitles,
  possiblyMissed,
  versionLine,
} from "@/datamine/native/report";
import { counts, diffLines, isEmpty } from "@/notify/diff";
import { commentBody } from "@/notify/github";

import type { NativeReport } from "@/datamine/native/types";

export const nativeComment = (report: NativeReport) => {
  const sections = nativeSections(report);
  return commentBody(
    [`## iOS ${report.to.version}`, versionLine(report)],
    [
      ...(report.unexplained.length > 0
        ? [
            {
              heading: `${possiblyMissed} (${report.unexplained.length})`,
              lines: missedLines(report),
            },
          ]
        : []),
      ...nativeSectionNames
        .filter((name) => !isEmpty(sections[name]))
        .map((name) => ({
          heading: `${nativeTitles[name]} (${counts(sections[name])})`,
          lines: diffLines(sections[name], 1000),
        })),
    ]
  );
};
