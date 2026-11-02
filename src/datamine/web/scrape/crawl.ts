import { warn } from "@/lib/expect";
import { get } from "@/lib/http";

import { isSkippedAsset } from "./assets";

const chunkReference =
  /["'`](?:\.\/|\/?assets\/)(?<file>[\w.~-]+?\.(?:js|css))["'`]/gu;

const references = (text: string) =>
  [...text.matchAll(chunkReference)]
    .map((match) => match.groups?.file)
    .filter(
      (file): file is string => file !== undefined && !isSkippedAsset(file)
    );

export const crawl = async (
  origin: string,
  roots: string[]
): Promise<Map<string, string>> => {
  const files = new Map<string, string>();
  const seen = new Set(roots);
  const queue = [...roots];
  while (queue.length > 0) {
    const batch = queue.splice(0, 16);
    const texts = await Promise.all(
      batch.map((file) => get(`${origin}/assets/${file}`))
    );
    for (const [index, file] of batch.entries()) {
      const text = texts[index] ?? "";
      files.set(file, text);
      for (const found of references(text)) {
        if (!seen.has(found)) {
          seen.add(found);
          queue.push(found);
        }
      }
    }
  }
  if (files.size <= roots.length) {
    warn(
      "lazy chunks",
      `no chunk references matching ${chunkReference} under ${origin}`
    );
  }
  return files;
};
