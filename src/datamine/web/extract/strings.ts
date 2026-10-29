import { parseSync } from "oxc-parser";

import type { Node } from "oxc-parser";

import { required, ScrapeError } from "@/lib/expect";

const valueOf = (
  node: Node,
  constants: Map<string, Node>
): string | undefined => {
  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value;
  }
  if (node.type === "TemplateLiteral" && node.expressions.length === 0) {
    return node.quasis[0]?.value.cooked ?? undefined;
  }
  if (node.type === "Identifier") {
    const bound = constants.get(node.name);
    return bound ? valueOf(bound, constants) : undefined;
  }
};

export const extractStrings = (
  source: string,
  file: string
): Record<string, string> => {
  const { program } = parseSync(file, source);
  const constants = new Map<string, Node>();
  let exported: string | undefined;
  for (const statement of program.body) {
    if (statement.type === "VariableDeclaration") {
      for (const declarator of statement.declarations) {
        if (declarator.id.type === "Identifier" && declarator.init) {
          constants.set(declarator.id.name, declarator.init);
        }
      }
    } else if (statement.type === "ExportNamedDeclaration") {
      for (const specifier of statement.specifiers) {
        if (
          specifier.exported.type === "Identifier" &&
          specifier.exported.name === "default" &&
          specifier.local.type === "Identifier"
        ) {
          exported = specifier.local.name;
        }
      }
    }
  }
  const table = required(
    exported ? constants.get(exported) : undefined,
    "default export of the translations object",
    file
  );
  if (table.type !== "ObjectExpression") {
    throw new ScrapeError(`${file} exports a ${table.type}, not an object`);
  }
  const strings: [string, string][] = [];
  for (const property of table.properties) {
    if (property.type !== "Property") {
      continue;
    }
    const key =
      property.key.type === "Identifier"
        ? property.key.name
        : valueOf(property.key, constants);
    const value = valueOf(property.value, constants);
    if (key !== undefined && value !== undefined) {
      strings.push([key, value]);
    }
  }
  return Object.fromEntries(strings.toSorted(([a], [b]) => a.localeCompare(b)));
};
