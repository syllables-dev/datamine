import { parseSync } from "oxc-parser";
import { walk } from "oxc-walker";

import type { Node } from "oxc-parser";

import { optional } from "@/lib/expect";

const releaseVersion = /^\d+\.\d+\.\d+$/u;

const isVersionKey = (node: Node) =>
  (node.type === "Identifier" && node.name === "version") ||
  (node.type === "Literal" && node.value === "version");

const assignedVersion = (node: Node) => {
  if (
    node.type === "AssignmentExpression" &&
    node.left.type === "MemberExpression" &&
    !node.left.computed
  ) {
    return isVersionKey(node.left.property) ? node.right : undefined;
  }
  if (node.type === "Property") {
    return isVersionKey(node.key) ? node.value : undefined;
  }
};

export const musickitVersion = (source: string) => {
  let version: string | undefined;
  walk(parseSync("musickit.js", source).program, {
    enter(node) {
      const value = version ? undefined : assignedVersion(node);
      if (
        value?.type === "Literal" &&
        typeof value.value === "string" &&
        releaseVersion.test(value.value)
      ) {
        version = value.value;
      }
    },
  });
  return optional(version, "MusicKit version", "musickit.js", releaseVersion);
};
