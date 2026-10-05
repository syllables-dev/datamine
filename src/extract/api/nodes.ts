import type { Node } from "oxc-parser";

export type Entry = [string, string | null];

const functionTypes = new Set([
  "ArrowFunctionExpression",
  "FunctionDeclaration",
  "FunctionExpression",
]);

export const isFunction = (node: Node) => functionTypes.has(node.type);

export const isClass = (node: Node) =>
  node.type === "ClassDeclaration" || node.type === "ClassExpression";

export const readable = (name: string | undefined) =>
  name && name.length >= 4 ? name : undefined;

export const hole = (node: Node) =>
  node.type === "MemberExpression" &&
  !node.computed &&
  node.property.type === "Identifier"
    ? `{${node.property.name}}`
    : "{}";

export const stringOf = (node: Node | null | undefined): string | undefined => {
  if (node?.type === "Literal" && typeof node.value === "string") {
    return node.value;
  }
  if (node?.type === "TemplateLiteral") {
    return node.quasis
      .map((quasi, index) => {
        const expression = node.expressions[index];
        return (
          (quasi.value.cooked ?? quasi.value.raw) +
          (expression ? hole(expression) : "")
        );
      })
      .join("");
  }
  if (node?.type === "BinaryExpression" && node.operator === "+") {
    const left = stringOf(node.left);
    const right = stringOf(node.right);
    if (left === undefined && right === undefined) {
      return;
    }
    return (left ?? hole(node.left)) + (right ?? hole(node.right));
  }
};

export const keyOf = (node: Node): string | undefined => {
  if (node.type !== "Property" && node.type !== "MethodDefinition") {
    return;
  }
  if (!node.computed && node.key.type === "Identifier") {
    return node.key.name;
  }
  return stringOf(node.key);
};

export const calleeName = (node: Node): string | undefined => {
  if (node.type !== "CallExpression") {
    return;
  }
  const { callee } = node;
  if (
    callee.type === "MemberExpression" &&
    !callee.computed &&
    callee.property.type === "Identifier"
  ) {
    return callee.property.name;
  }
  return callee.type === "Identifier" ? callee.name : undefined;
};

export const objectEntries = (node: Node | null | undefined): Entry[] => {
  if (node?.type === "CallExpression") {
    return node.arguments.flatMap((argument) => objectEntries(argument));
  }
  if (node?.type !== "ObjectExpression") {
    return [];
  }
  return node.properties.flatMap((property): Entry[] => {
    if (property.type === "SpreadElement") {
      return objectEntries(property.argument);
    }
    const key = keyOf(property);
    return key === undefined ? [] : [[key, stringOf(property.value) ?? null]];
  });
};

const ownName = (node: Node) =>
  (node.type === "FunctionDeclaration" || node.type === "FunctionExpression") &&
  node.id
    ? node.id.name
    : undefined;

const parentName = (parent: Node | null) => {
  if (parent?.type === "MethodDefinition" || parent?.type === "Property") {
    return keyOf(parent);
  }
  if (
    parent?.type === "VariableDeclarator" &&
    parent.id.type === "Identifier"
  ) {
    return parent.id.name;
  }
};

export const functionLabel = (
  node: Node,
  parent: Node | null,
  className: string | undefined
) => {
  const name = readable(parentName(parent) ?? ownName(node));
  if (!name) {
    return;
  }
  return parent?.type === "MethodDefinition" && className
    ? `${className}.${name}`
    : name;
};
