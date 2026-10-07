import { parseSync } from "oxc-parser";
import { walk } from "oxc-walker";

import type { Node } from "oxc-parser";

import { sortedRecord, sortedSet } from "@/lib/utils";

import type { Flags } from "@/types";

const overrideKey = /^mk-[a-z0-9-]+$/u;

const keyOf = (node: Node) => {
  if (node.type === "Identifier") {
    return node.name;
  }
  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value;
  }
};

// Minified booleans are `!0` / `!1`.
const booleanOf = (node: Node) => {
  if (node.type === "Literal" && typeof node.value === "boolean") {
    return node.value;
  }
  if (
    node.type === "UnaryExpression" &&
    node.operator === "!" &&
    node.argument.type === "Literal" &&
    typeof node.argument.value === "number"
  ) {
    return node.argument.value === 0;
  }
};

// MusicKit's default bag features: `features: { "enhanced-hls": !1, ... }`,
// an object whose values are all booleans.
const featureDefaults = (node: Node) => {
  if (
    node.type !== "Property" ||
    keyOf(node.key) !== "features" ||
    node.value.type !== "ObjectExpression" ||
    node.value.properties.length < 2
  ) {
    return;
  }
  const entries: [string, boolean][] = [];
  for (const property of node.value.properties) {
    if (property.type !== "Property") {
      return;
    }
    const key = keyOf(property.key);
    const value = booleanOf(property.value);
    if (key === undefined || value === undefined) {
      return;
    }
    entries.push([key, value]);
  }
  return entries;
};

// Developer overrides read from localStorage: `x.register("mk-...")`.
const overrideOf = (node: Node) => {
  if (
    node.type !== "CallExpression" ||
    node.callee.type !== "MemberExpression" ||
    node.callee.computed ||
    keyOf(node.callee.property) !== "register" ||
    node.arguments.length !== 1
  ) {
    return;
  }
  const [argument] = node.arguments;
  const key = argument ? keyOf(argument) : undefined;
  return key !== undefined && overrideKey.test(key) ? key : undefined;
};

export const extractFlags = (sources: Map<string, string>): Flags => {
  const features = new Map<string, boolean>();
  const overrides = new Set<string>();
  for (const [file, source] of sources) {
    if (!file.endsWith(".js")) {
      continue;
    }
    walk(parseSync(file, source).program, {
      enter(node) {
        for (const [key, value] of featureDefaults(node) ?? []) {
          features.set(key, value);
        }
        const override = overrideOf(node);
        if (override !== undefined) {
          overrides.add(override);
        }
      },
    });
  }
  return { features: sortedRecord(features), overrides: sortedSet(overrides) };
};
