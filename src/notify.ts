import { config } from "@/config";
import { warn } from "@/lib/expect";
import { counts, isEmpty, sectionNames } from "@/report";

import type { Report, Section, SectionName } from "@/types";

const {
  COMMIT_URL: commitUrl,
  DISCORD_BOT_TOKEN: token,
  DISCORD_CHANNEL_ID: channel,
} = Bun.env;
const { icon, username } = config.discord;
const fence = "```";
const externalSuffix = /-external$/u;

const titles: Record<SectionName, string> = {
  chunks: "Chunks",
  code: "Code strings",
  endpoints: "Endpoints",
  headers: "Headers",
  params: "Params",
  strings: "Strings",
  tokens: "Developer tokens",
  urls: "URLs",
};

interface Embed {
  author?: { icon_url?: string; name: string; url?: string };
  color?: number;
  description?: string;
  fields?: { inline?: boolean; name: string; value: string }[];
  footer?: { text: string };
  timestamp?: string;
  title?: string;
  url?: string;
}

const embedSize = (embed: Embed) =>
  (embed.title?.length ?? 0) +
  (embed.description?.length ?? 0) +
  (embed.author?.name.length ?? 0) +
  (embed.footer?.text.length ?? 0) +
  (embed.fields ?? []).reduce(
    (total, field) => total + field.name.length + field.value.length,
    0
  );

const discord = async (path: string, body?: unknown, maxWait = 60) => {
  for (;;) {
    const response = await fetch(`https://discord.com/api/v10${path}`, {
      body: body === undefined ? undefined : JSON.stringify(body),
      headers: {
        authorization: `Bot ${token}`,
        "content-type": "application/json",
      },
      method: "POST",
    });
    if (response.status === 429) {
      const { retry_after: retryAfter } = (await response.json()) as {
        retry_after: number;
      };
      if (retryAfter > maxWait) {
        throw new Error(`Discord rate limited ${path} for ${retryAfter}s`);
      }
      await Bun.sleep(retryAfter * 1000 + 250);
      continue;
    }
    if (!response.ok) {
      throw new Error(
        `Discord ${response.status} ${path}: ${await response.text()}`
      );
    }
    return (await response.json()) as { id: string };
  }
};

const send = async (embeds: Embed[]) => {
  if (!token || !channel) {
    console.log(JSON.stringify(embeds, null, 2));
    return;
  }
  const message = await discord(`/channels/${channel}/messages`, {
    allowed_mentions: { parse: [] },
    embeds,
  });
  return message.id;
};

const publish = async (id: string | undefined) => {
  if (!id) {
    return;
  }
  try {
    await discord(`/channels/${channel}/messages/${id}/crosspost`);
  } catch (error) {
    warn(
      "Discord publish",
      error instanceof Error ? error.message : String(error)
    );
  }
};

const clean = (line: string) => {
  const safe = line.replaceAll(fence, "ˋˋˋ").replaceAll("\n", "\\n");
  return safe.length > 300 ? `${safe.slice(0, 300)}...` : safe;
};

const diffLines = (section: Section) => {
  const groups: string[][] = [];
  if (section.added.length > 0) {
    groups.push([
      "# Added",
      ...section.added.map((line) => `+ ${clean(line)}`),
    ]);
  }
  if (section.updated.length > 0) {
    groups.push([
      "# Updated",
      ...section.updated.flatMap(([from, to]) => [
        `- ${clean(from)}`,
        `+ ${clean(to)}`,
      ]),
    ]);
  }
  if (section.removed.length > 0) {
    groups.push([
      "# Removed",
      ...section.removed.map((line) => `- ${clean(line)}`),
    ]);
  }
  return groups.flatMap((group, index) =>
    index === 0 ? group : ["", ...group]
  );
};

const sectionEmbeds = (
  name: SectionName,
  section: Section,
  color: number
): Embed[] => {
  const blocks: string[] = [];
  let current: string[] = [];
  let size = 0;
  for (const line of diffLines(section)) {
    if (size + line.length + 1 > 4000 && current.length > 0) {
      blocks.push(current.join("\n"));
      current = [];
      size = 0;
    }
    if (current.length === 0 && line === "") {
      continue;
    }
    current.push(line);
    size += line.length + 1;
  }
  if (current.length > 0) {
    blocks.push(current.join("\n"));
  }
  return blocks.map((block, index) => ({
    color,
    description: `${fence}diff\n${block}\n${fence}`,
    title:
      index === 0
        ? `${titles[name]} (${counts(section)})`
        : `${titles[name]} (continued)`,
  }));
};

const musickitField = (report: Report) => {
  const { from, to } = report.musickit;
  if (!to) {
    return [];
  }
  const value = from && from !== to ? `\`${from}\` → \`${to}\`` : `\`${to}\``;
  return [{ inline: true, name: "MusicKit", value }];
};

const modifiedList = (names: string[]) => {
  const shown = names.slice(0, 12).map((name) => `\`${name}\``);
  const hidden = names.length - shown.length;
  return [...shown, ...(hidden > 0 ? [`+${hidden} more`] : [])].join(", ");
};

const shortVersion = (version: string) => version.replace(externalSuffix, "");

const label = (version: string | undefined, build: string | undefined) =>
  version ? `**${shortVersion(version)}** (\`${build}\`)` : `\`${build}\``;

const headerEmbed = (report: Report, color: number): Embed => {
  const fields = [
    ...sectionNames
      .filter((name) => !isEmpty(report.sections[name]))
      .map((name) => ({
        inline: true,
        name: titles[name],
        value: `\`${counts(report.sections[name])}\``,
      })),
    ...(report.modifiedChunks.length > 0
      ? [
          {
            inline: false,
            name: `Modified chunks (${report.modifiedChunks.length})`,
            value: modifiedList(report.modifiedChunks),
          },
        ]
      : []),
  ];
  return {
    author: {
      icon_url: icon,
      name: report.host,
      url: `https://${report.host}`,
    },
    color,
    description: `${label(report.version.from, report.previousBuild)} → ${label(report.version.to, report.build)}`,
    fields: [...fields, ...musickitField(report)],
    footer: { text: username },
    timestamp: new Date().toISOString(),
    title: `New build${
      report.version.to ? ` ${shortVersion(report.version.to)}` : ""
    }`,
    ...(commitUrl && { url: commitUrl }),
  };
};

const truncatedEmbed = (color: number, hidden: number): Embed => ({
  color,
  description: `${hidden} more ${hidden === 1 ? "embed" : "embeds"} not shown.${commitUrl ? ` [See the full diff](${commitUrl})` : ""}`,
});

const targetEmbeds = (report: Report) => {
  const color =
    config.targets.find((target) => target.id === report.target)?.color ?? 0;
  const embeds = [headerEmbed(report, color)];
  const details = sectionNames.flatMap((name) =>
    isEmpty(report.sections[name])
      ? []
      : sectionEmbeds(name, report.sections[name], color)
  );
  if (details.length + 1 > 30) {
    const shown = details.slice(0, 30 - 2);
    return [
      ...embeds,
      ...shown,
      truncatedEmbed(color, details.length - shown.length),
    ];
  }
  return [...embeds, ...details];
};

const batches = (embeds: Embed[]) => {
  const messages: Embed[][] = [];
  let current: Embed[] = [];
  let size = 0;
  for (const embed of embeds) {
    const next = embedSize(embed);
    if (current.length > 0 && (current.length >= 10 || size + next > 5800)) {
      messages.push(current);
      current = [];
      size = 0;
    }
    current.push(embed);
    size += next;
  }
  if (current.length > 0) {
    messages.push(current);
  }
  return messages;
};

const reports = (await Bun.file(
  `${config.paths.reports}/reports.json`
).json()) as Report[];
for (const report of reports.filter((item) => !item.initial)) {
  const [summary, ...rest] = batches(targetEmbeds(report));
  if (summary) {
    await publish(await send(summary));
  }
  for (const message of rest) {
    await send(message);
  }
}
