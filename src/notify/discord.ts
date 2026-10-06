import { config } from "@/config";
import { codeBlock, linkButton } from "@/discord";
import {
  chunkLines,
  diffLines,
  isNoise,
  notableSections,
  shortVersion,
  titles,
} from "@/notify/diff";
import { counts, isEmpty, sectionNames } from "@/report";

import type { Embed, MessagePayload } from "@/discord";
import type { Report } from "@/types";

const { icon, username } = config.discord;
const blockSize = 3900;
const maxThreadEmbeds = 30;

const colorOf = (report: Report) =>
  config.targets.find((target) => target.id === report.target)?.color ?? 0;

const label = (version: string | undefined, build: string | undefined) =>
  version ? `**${shortVersion(version)}** (\`${build}\`)` : `\`${build}\``;

const musickitField = (report: Report) => {
  const { from, to } = report.musickit;
  if (!to) {
    return [];
  }
  const value = from && from !== to ? `\`${from}\` → \`${to}\`` : `\`${to}\``;
  return [{ inline: true, name: "MusicKit", value }];
};

export const threadName = (report: Report) =>
  `${report.version.to ? shortVersion(report.version.to) : report.build} · ${report.host}`;

export const summaryMessage = (
  report: Report,
  link: string
): MessagePayload => {
  const noise = isNoise(report);
  const versions = `${label(report.version.from, report.previousBuild)} → ${label(report.version.to, report.build)}`;
  const embed: Embed = {
    author: {
      icon_url: icon,
      name: report.host,
      url: `https://${report.host}`,
    },
    color: colorOf(report),
    description: noise ? `${versions}\nNo UI changes` : versions,
    fields: [
      ...sectionNames
        .filter((name) => !isEmpty(report.sections[name]))
        .map((name) => ({
          inline: true,
          name: titles[name],
          value: `\`${counts(report.sections[name])}\``,
        })),
      ...musickitField(report),
    ],
    footer: { text: username },
    timestamp: new Date().toISOString(),
    title: noise
      ? `Rebuild ${report.build}`
      : `New build${report.version.to ? ` ${shortVersion(report.version.to)}` : ""}`,
    url: link,
  };
  return { components: [linkButton("View on GitHub", link)], embeds: [embed] };
};

export const threadEmbeds = (report: Report, link: string): Embed[] => {
  const color = colorOf(report);
  const embeds = notableSections
    .filter((name) => !isEmpty(report.sections[name]))
    .flatMap((name) =>
      chunkLines(diffLines(report.sections[name]), blockSize).map(
        (lines, index): Embed => ({
          color,
          description: `## ${titles[name]}${index > 0 ? " (continued)" : ""}\n${codeBlock("diff", lines)}`,
        })
      )
    );
  if (embeds.length <= maxThreadEmbeds) {
    return embeds;
  }
  const hidden = embeds.length - (maxThreadEmbeds - 1);
  return [
    ...embeds.slice(0, maxThreadEmbeds - 1),
    {
      color,
      description: `${hidden} more ${hidden === 1 ? "block" : "blocks"} not shown. [See the full diff](${link})`,
    },
  ];
};
