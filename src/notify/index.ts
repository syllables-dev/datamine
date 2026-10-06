import { config } from "@/config";
import { batchEmbeds, createClient } from "@/discord";
import { warn } from "@/lib/expect";
import { isNoise } from "@/notify/diff";
import { summaryMessage, threadEmbeds, threadName } from "@/notify/discord";
import { commentBody, postComment } from "@/notify/github";

import type { DiscordClient, MessagePayload } from "@/discord";
import type { Report } from "@/types";

const {
  COMMIT_URL: commitUrl,
  DISCORD_BOT_TOKEN: token,
  DISCORD_CHANNEL_ID: channel,
} = Bun.env;

const attempt = async <T>(what: string, task: () => Promise<T>) => {
  try {
    return await task();
  } catch (error) {
    warn(what, error instanceof Error ? error.message : String(error));
  }
};

const notify = async (
  discord: DiscordClient,
  channelId: string,
  report: Report,
  link: string
) => {
  const summary = await discord.send(channelId, summaryMessage(report, link));
  if (isNoise(report)) {
    return;
  }
  await attempt("Discord publish", () =>
    discord.crosspost(channelId, summary.id)
  );
  const thread = await discord.startThread(
    channelId,
    summary.id,
    threadName(report)
  );
  for (const embeds of batchEmbeds(threadEmbeds(report, link))) {
    await discord.send(thread.id, { embeds });
  }
};

const print = (report: Report, link: string) => {
  const messages: MessagePayload[] = [
    summaryMessage(report, link),
    ...(isNoise(report)
      ? []
      : batchEmbeds(threadEmbeds(report, link)).map((embeds) => ({ embeds }))),
  ];
  console.log(JSON.stringify(messages, null, 2));
};

const reports = (await Bun.file(
  `${config.paths.reports}/reports.json`
).json()) as Report[];
const discord = token && channel ? createClient(token) : undefined;
for (const report of reports.filter((item) => !item.initial)) {
  const commentUrl = await postComment(commentBody(report));
  const link =
    commentUrl ??
    commitUrl ??
    `https://github.com/${Bun.env.GITHUB_REPOSITORY ?? "syllables-dev/datamine"}`;
  if (discord && channel) {
    await notify(discord, channel, report, link);
  } else {
    print(report, link);
  }
}
