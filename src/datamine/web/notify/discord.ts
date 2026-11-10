import { discordIdentity } from "@/config";
import { targets } from "@/datamine/web/config";
import {
  isNoise,
  notableSections,
  shortVersion,
  titles,
  versionLine,
} from "@/datamine/web/notify/sections";
import { sectionNames } from "@/datamine/web/report";
import { linkButton } from "@/discord/components";
import { counts, diffLines, isEmpty } from "@/notify/diff";
import { diffEmbeds } from "@/notify/discord";

import type { Report } from "@/datamine/web/types";
import type { Embed, MessagePayload } from "@/discord/types";

const { icon, username } = discordIdentity;

const colorOf = (report: Report) =>
  targets.find((target) => target.id === report.target)?.color ?? 0;

export const threadName = (report: Report) =>
  `${report.version.to ? shortVersion(report.version.to) : report.build} · ${report.host}`;

export const summaryMessage = (
  report: Report,
  link: string
): MessagePayload => {
  const noise = isNoise(report);
  const versions = versionLine(report);
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

export const threadMessages = (report: Report, link: string): Embed[][] =>
  notableSections
    .filter((name) => !isEmpty(report.sections[name]))
    .flatMap((name) =>
      diffEmbeds(
        titles[name],
        diffLines(report.sections[name]),
        colorOf(report),
        link
      )
    );
