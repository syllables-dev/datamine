import { batchEmbeds, codeBlock } from "@/discord";
import { chunkLines } from "@/notify/diff";

import type { Embed } from "@/discord";

const blockSize = 3900;
const maxSectionBlocks = 10;

export const diffEmbeds = (
  title: string,
  lines: string[],
  color: number,
  link: string
): Embed[][] => {
  const blocks = chunkLines(lines, blockSize);
  const shown =
    blocks.length > maxSectionBlocks
      ? blocks.slice(0, maxSectionBlocks - 1)
      : blocks;
  const embeds = shown.map((block, index): Embed => ({
    color,
    description: `## ${title}${index > 0 ? " (continued)" : ""}
${codeBlock("diff", block)}`,
  }));
  const hidden = blocks.length - shown.length;
  if (hidden > 0) {
    embeds.push({
      color,
      description: `${hidden} more ${hidden === 1 ? "block" : "blocks"} not shown. [See the full diff](${link})`,
    });
  }
  return batchEmbeds(embeds);
};
