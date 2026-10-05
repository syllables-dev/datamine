import { parseSync } from "oxc-parser";
import { walk } from "oxc-walker";

import { optional } from "@/lib/expect";

import type { Literals, Token } from "@/types";

const jwt = /^eyJ[\w-]+\.eyJ[\w-]+\.[\w-]+$/u;
const svelteClass = /svelte-[a-z0-9]{5,8}/gu;
const appVersion = /^\d+\.\d+\.\d+-external$/u;

const decodeSegment = (segment: string): Record<string, unknown> => {
  try {
    return JSON.parse(
      atob(segment.replaceAll("-", "+").replaceAll("_", "/"))
    ) as Record<string, unknown>;
  } catch {
    return {};
  }
};

const date = (seconds: unknown) =>
  typeof seconds === "number"
    ? new Date(seconds * 1000).toISOString()
    : undefined;

const decodeToken = (token: string): Token => {
  const [header = "", payload = ""] = token.split(".");
  const { kid } = decodeSegment(header);
  const claims = decodeSegment(payload);
  const origins = claims.root_https_origin;
  return {
    exp: date(claims.exp),
    iat: date(claims.iat),
    iss: typeof claims.iss === "string" ? claims.iss : undefined,
    kid: typeof kid === "string" ? kid : undefined,
    origins: Array.isArray(origins) ? origins.map(String) : undefined,
  };
};

const collect = (source: string, file: string, found: Set<string>) => {
  walk(parseSync(file, source).program, {
    enter(node) {
      if (node.type === "Literal" && typeof node.value === "string") {
        found.add(node.value);
      } else if (node.type === "TemplateElement" && node.value.cooked) {
        found.add(node.value.cooked);
      }
    },
  });
};

const isCodeString = (text: string) =>
  text.trim().length >= 3 && text.length <= 300 && !jwt.test(text);

export const extractLiterals = (
  sources: Map<string, string>,
  origin: string
): Literals => {
  const found = new Set<string>();
  for (const [file, source] of sources) {
    if (file.endsWith(".js")) {
      collect(source, file, found);
    }
  }
  const all = [...found];
  return {
    literals: [
      ...new Set(
        all
          .filter(isCodeString)
          .map((text) => text.replaceAll(svelteClass, "svelte-*"))
      ),
    ].toSorted(),
    tokens: all
      .filter((text) => jwt.test(text))
      .map(decodeToken)
      .toSorted((a, b) => `${a.kid}${a.iat}`.localeCompare(`${b.kid}${b.iat}`)),
    version: optional(
      all.find((text) => appVersion.test(text)),
      "app version",
      origin,
      appVersion
    ),
  };
};
