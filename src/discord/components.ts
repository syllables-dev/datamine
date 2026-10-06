import type { ActionRow, Embed } from "@/discord/types";

export const limits = {
  description: 4096,
  embedsPerMessage: 10,
  messageEmbedChars: 6000,
};

export const linkButton = (label: string, url: string): ActionRow => ({
  components: [{ label, style: 5, type: 2, url }],
  type: 1,
});

const fence = "```";

export const codeSafe = (text: string) => text.replaceAll(fence, "ˋˋˋ");

export const codeBlock = (language: string, lines: string[]) =>
  `${fence}${language}\n${lines.map(codeSafe).join("\n")}\n${fence}`;

export const embedSize = (embed: Embed) =>
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
      (current.length >= limits.embedsPerMessage ||
        size + next > limits.messageEmbedChars - 200)
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
