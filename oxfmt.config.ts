import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "datamine/**",
    ".datamine/**",
  ],
  sortImports: {
    groups: [
      ["builtin", "external"],
      ["type-builtin", "type-external"],
      "internal",
      "type-internal",
      ["parent", "sibling", "index"],
      ["type-parent", "type-sibling", "type-index"],
      "style",
      "unknown",
    ],
    ignoreCase: true,
    newlinesBetween: true,
    order: "asc",
  },
});
