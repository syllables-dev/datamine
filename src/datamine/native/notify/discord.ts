import { discordIdentity } from "@/config";
import { color, device } from "@/datamine/native/config";
import {
  missedLines,
  nativeSectionNames,
  nativeSections,
  nativeTitles,
  possiblyMissed,
  versionLine,
} from "@/datamine/native/report";
import { linkButton } from "@/discord/components";
import { counts, diffLines, isEmpty } from "@/notify/diff";
import { diffEmbeds } from "@/notify/discord";

import type { NativeReport } from "@/datamine/native/types";
import type { Embed, MessagePayload } from "@/discord/types";

const { icon, username } = discordIdentity;

export const isQuiet = (report: NativeReport) =>
  report.unexplained.length === 0 &&
  Object.values(nativeSections(report)).every(isEmpty);

export const threadName = (report: NativeReport) =>
  `iOS ${report.to.version} (${report.to.build})`;

export const summaryMessage = (
  report: NativeReport,
  link: string
): MessagePayload => {
  const sections = nativeSections(report);
  const missed = report.unexplained.length;
  const versions = versionLine(report);
  const embed: Embed = {
    author: { icon_url: icon, name: `iOS · ${device}` },
    color,
    description:
      missed > 0
        ? `${versions}\n${missed} items are still in the build but were not found. The extractor may need a fix.`
        : versions,
    fields: [
      ...nativeSectionNames
        .filter((name) => !isEmpty(sections[name]))
        .map((name) => ({
          inline: true,
          name: nativeTitles[name],
          value: `\`${counts(sections[name])}\``,
        })),
      ...(missed > 0
        ? [{ inline: true, name: possiblyMissed, value: `\`${missed}\`` }]
        : []),
    ],
    footer: { text: username },
    timestamp: new Date().toISOString(),
    title: `New iOS build ${report.to.version}`,
    url: link,
  };
  return { components: [linkButton("View on GitHub", link)], embeds: [embed] };
};

export const threadMessages = (
  report: NativeReport,
  link: string
): Embed[][] => {
  const sections = nativeSections(report);
  const missed = missedLines(report);
  return [
    ...(missed.length > 0
      ? diffEmbeds(possiblyMissed, missed, color, link)
      : []),
    ...nativeSectionNames
      .filter((name) => !isEmpty(sections[name]))
      .flatMap((name) =>
        diffEmbeds(nativeTitles[name], diffLines(sections[name]), color, link)
      ),
  ];
};
