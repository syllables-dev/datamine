import type { ActionRow, Embed } from "@/discord/types";

const embedsPerMessage = 10;
const messageEmbedChars = 6000;

export const linkButton = (label: string, url: string): ActionRow => ({
  components: [{ label, style: 5, type: 2, url }],
  type: 1,
});

const embedSize = (embed: Embed) =>
  (embed.title?.length ?? 0) +
  (embed.description?.length ?? 0) +
  (embed.author?.name.length ?? 0) +
  (embed.footer?.text.length ?? 0) +
  (embed.fields ?? []).reduce(
    (total, field) => total + field.name.length + field.value.length,
    0
  );

export const batchEmbeds = (embeds: Embed[]) => {
  const messages: Embed[][] = [];
  let current: Embed[] = [];
  let size = 0;
  for (const embed of embeds) {
    const next = embedSize(embed);
    if (
      current.length > 0 &&
      (current.length >= embedsPerMessage ||
        size + next > messageEmbedChars - 200)
    ) {
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
