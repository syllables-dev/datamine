import { createClient } from "@/discord";
import { warn } from "@/lib/expect";
import { postComment } from "@/notify/github";

import type { DiscordClient, Embed, MessagePayload } from "@/discord";

export interface Post {
  summary: MessagePayload;
  thread?: { messages: Embed[][]; name: string };
}

const {
  COMMIT_URL: commitUrl,
  DISCORD_BOT_TOKEN: token,
  DISCORD_CHANNEL_ID: channel,
  GITHUB_REPOSITORY: repository,
} = Bun.env;

const attempt = async <T>(what: string, task: () => Promise<T>) => {
  try {
    return await task();
  } catch (error) {
    warn(what, error instanceof Error ? error.message : String(error));
  }
};

const send = async (discord: DiscordClient, channelId: string, post: Post) => {
  const summary = await discord.send(channelId, post.summary);
  if (!post.thread) {
    return;
  }
  await attempt("Discord publish", () =>
    discord.crosspost(channelId, summary.id)
  );
  const thread = await discord.startThread(
    channelId,
    summary.id,
    post.thread.name
  );
  for (const embeds of post.thread.messages) {
    await discord.send(thread.id, { embeds });
  }
};

const print = (post: Post) => {
  const threadMessages = post.thread?.messages ?? [];
  const messages: MessagePayload[] = [
    post.summary,
    ...threadMessages.map((embeds) => ({ embeds })),
  ];
  console.log(JSON.stringify(messages, null, 2));
};

export const publish = async (
  comment: string,
  compose: (link: string) => Post
) => {
  const commentUrl = await postComment(comment);
  const link =
    commentUrl ??
    commitUrl ??
    `https://github.com/${repository ?? "syllables-dev/datamine"}`;
  const post = compose(link);
  if (token && channel) {
    await send(createClient(token), channel, post);
  } else {
    print(post);
  }
};
