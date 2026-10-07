import { config } from "@/config";
import { batchEmbeds, codeBlock, linkButton } from "@/discord";
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
const maxSectionBlocks = 10;

const colorOf = (report: Report) =>
  config.targets.find((target) => target.id === report.target)?.color ?? 0;

const label = (version: string | undefined, build: string | undefined) =>
  version ? `**${shortVersion(version)}** (\`${build}\`)` : `\`${build}\``;

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
    fields: sectionNames
      .filter((name) => !isEmpty(report.sections[name]))
      .map((name) => ({
        inline: true,
        name: titles[name],
        value: `\`${counts(report.sections[name])}\``,
      })),
    footer: { text: username },
    timestamp: new Date().toISOString(),
    title: noise
      ? `Rebuild ${report.build}`
      : `New build${report.version.to ? ` ${shortVersion(report.version.to)}` : ""}`,
    url: link,
  };
  return { components: [linkButton("View on GitHub", link)], embeds: [embed] };
};

export const threadMessages = (report: Report, link: string): Embed[][] => {
  const color = colorOf(report);
  return notableSections
    .filter((name) => !isEmpty(report.sections[name]))
    .flatMap((name) => {
      const blocks = chunkLines(diffLines(report.sections[name]), blockSize);
      const shown =
        blocks.length > maxSectionBlocks
          ? blocks.slice(0, maxSectionBlocks - 1)
          : blocks;
      const embeds = shown.map((lines, index): Embed => ({
        color,
        description: `## ${titles[name]}${index > 0 ? " (continued)" : ""}
${codeBlock("diff", lines)}`,
      }));
      const hidden = blocks.length - shown.length;
      if (hidden > 0) {
        embeds.push({
          color,
          description: `${hidden} more ${hidden === 1 ? "block" : "blocks"} not shown. [See the full diff](${link})`,
        });
      }
      return batchEmbeds(embeds);
    });
};
