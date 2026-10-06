import type { Channel, Message, MessagePayload } from "@/discord/types";

const base = "https://discord.com/api/v10";

export class DiscordError extends Error {
  override readonly name = "DiscordError";
}

export const createClient = (token: string, maxWait = 60) => {
  const request = async <T>(path: string, body?: unknown): Promise<T> => {
    for (;;) {
      const response = await fetch(`${base}${path}`, {
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
          throw new DiscordError(`rate limited ${path} for ${retryAfter}s`);
        }
        await Bun.sleep(retryAfter * 1000 + 250);
        continue;
      }
      if (!response.ok) {
        throw new DiscordError(
          `${response.status} ${path}: ${await response.text()}`
        );
      }
      return (await response.json()) as T;
    }
  };

  return {
    crosspost: (channel: string, message: string) =>
      request<Message>(`/channels/${channel}/messages/${message}/crosspost`),

    send: (channel: string, payload: MessagePayload) =>
      request<Message>(`/channels/${channel}/messages`, {
        allowed_mentions: { parse: [] },
        ...payload,
      }),

    startThread: (channel: string, message: string, name: string) =>
      request<Channel>(`/channels/${channel}/messages/${message}/threads`, {
        auto_archive_duration: 10_080,
        name: name.slice(0, 100),
      }),
  };
};

export type DiscordClient = ReturnType<typeof createClient>;
