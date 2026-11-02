import { warn } from "@/lib/expect";
import { probe } from "@/lib/http";

import type { SourceMap } from "@/types";

interface RawSourceMap {
  mappings?: unknown;
  sections?: { map?: RawSourceMap }[];
  sources?: unknown;
  sourcesContent?: unknown;
}

const mapComment =
  /\s*(?:\/\/[#@]\s*sourceMappingURL=(?<js>\S+)|\/\*[#@]\s*sourceMappingURL=(?<css>[^\s*]+)\s*\*\/)\s*$/u;
const dataUrl = /^data:[^,]*?(?<base64>;base64)?,(?<data>.*)$/su;
const xssiPrefix = /^\)\]\}'[^\n]*\n/u;

export const stripMapComment = (text: string) => {
  const match = text.match(mapComment);
  return {
    reference: match?.groups?.js ?? match?.groups?.css,
    text: match ? text.slice(0, match.index) : text,
  };
};

const decodeData = (url: string) => {
  const groups = url.match(dataUrl)?.groups;
  if (!groups) {
    return;
  }
  const data = groups.data ?? "";
  return groups.base64
    ? Buffer.from(data, "base64").toString("utf-8")
    : decodeURIComponent(data);
};

const parseJson = (text: string): unknown => {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const parseMap = (text: string | null | undefined) => {
  if (!text) {
    return;
  }
  const map = parseJson(text.replace(xssiPrefix, "")) as RawSourceMap | null;
  return typeof map?.mappings === "string" || Array.isArray(map?.sections)
    ? map
    : undefined;
};

const sourcesOf = (map: RawSourceMap): [string, string | null][] => {
  if (Array.isArray(map.sections)) {
    return map.sections.flatMap((section) => sourcesOf(section.map ?? {}));
  }
  const sources = Array.isArray(map.sources) ? map.sources : [];
  const contents = Array.isArray(map.sourcesContent) ? map.sourcesContent : [];
  return sources.map((source, index) => [
    String(source),
    typeof contents[index] === "string" ? contents[index] : null,
  ]);
};

const locate = async (base: string, reference: string | undefined) => {
  if (reference?.startsWith("data:")) {
    const text = decodeData(reference);
    const map = parseMap(text);
    return map && text ? { map, text, url: "inline" } : undefined;
  }
  const urls = new Set([
    ...(reference ? [new URL(reference, base).href] : []),
    `${base}.map`,
  ]);
  for (const url of urls) {
    const text = await probe(url);
    const map = parseMap(text);
    if (map && text) {
      return { map, text, url };
    }
  }
};

export const findSourceMaps = async (
  origin: string,
  crawled: Map<string, string>
) => {
  const files = new Map<string, string>();
  const found = await Promise.all(
    [...crawled].map(async ([file, raw]): Promise<SourceMap | undefined> => {
      const { reference, text } = stripMapComment(raw);
      files.set(file, text);
      const located = await locate(`${origin}/assets/${file}`, reference);
      if (!located) {
        if (reference) {
          console.log(
            `::notice title=source map reference::${file} references ${reference} but no map is served`
          );
        }
        return;
      }
      const sources = sourcesOf(located.map);
      warn(
        "source map leaked",
        `${located.url} (${sources.length} sources) for ${file}`
      );
      return { file, sources, text: located.text, url: located.url };
    })
  );
  return {
    files,
    maps: found.filter((map): map is SourceMap => map !== undefined),
  };
};
