import { parseSync } from "oxc-parser";
import { walk } from "oxc-walker";

import type { Node } from "oxc-parser";

export const localeKey = /\/locales\/(?<locale>[\w-]+)\/translations\.json$/u;
const importedFile = /(?<file>[^/]+\.js)$/u;

const stringValue = (node: Node | null | undefined) =>
  node?.type === "Literal" && typeof node.value === "string"
    ? node.value
    : undefined;

const importedChunk = (node: Node) => {
  let file: string | undefined;
  walk(node, {
    enter(child) {
      if (child.type === "ImportExpression") {
        file ??= stringValue(child.source)?.match(importedFile)?.groups?.file;
      }
    },
  });
  return file;
};

export const translationFiles = (entry: string, source: string) => {
  const files = new Map<string, string>();
  walk(parseSync(entry, source).program, {
    enter(node) {
      if (node.type !== "Property") {
        return;
      }
      const locale = stringValue(node.key)?.match(localeKey)?.groups?.locale;
      const file = locale ? importedChunk(node.value) : undefined;
      if (locale && file) {
        files.set(locale, file);
      }
    },
  });
  return files;
};
