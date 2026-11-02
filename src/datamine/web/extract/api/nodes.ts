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

const holeName = /^[a-z][\w-]*$/u;

export const hole = (node: Node) => {
  if (
    node.type === "MemberExpression" &&
    !node.computed &&
    node.property.type === "Identifier"
  ) {
    return `{${node.property.name}}`;
  }
  if (node.type === "CallExpression" && node.arguments.length === 1) {
    const [argument] = node.arguments;
    if (
      argument?.type === "Literal" &&
      typeof argument.value === "string" &&
      holeName.test(argument.value)
    ) {
      return `{${argument.value}}`;
    }
  }
  return "{}";
};

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

export interface Constants {
  objects: Map<string, Node>;
  strings: Map<string, string>;
}

const bind = (constants: Constants, name: string, node: Node | null) => {
  const value = stringOf(node);
  if (value !== undefined) {
    constants.strings.set(name, value);
  } else if (node?.type === "ObjectExpression") {
    constants.objects.set(name, node);
  }
};

export const constantsOf = (program: Node): Constants => {
  const constants: Constants = { objects: new Map(), strings: new Map() };
  if (program.type !== "Program") {
    return constants;
  }
  for (const statement of program.body) {
    if (statement.type === "VariableDeclaration") {
      for (const declarator of statement.declarations) {
        if (declarator.id.type === "Identifier") {
          bind(constants, declarator.id.name, declarator.init);
        }
      }
    } else if (
      statement.type === "ExpressionStatement" &&
      statement.expression.type === "AssignmentExpression" &&
      statement.expression.operator === "=" &&
      statement.expression.left.type === "Identifier"
    ) {
      bind(
        constants,
        statement.expression.left.name,
        statement.expression.right
      );
    }
  }
  return constants;
};

export const resolve = (
  node: Node | null | undefined,
  constants: Constants
): string | undefined => {
  if (node?.type === "Identifier") {
    return constants.strings.get(node.name);
  }
  if (node?.type === "TemplateLiteral") {
    const parts = node.expressions.map((expression) =>
      resolve(expression, constants)
    );
    if (parts.includes(undefined)) {
      return;
    }
    return node.quasis
      .map(
        (quasi, index) =>
          (quasi.value.cooked ?? quasi.value.raw) + (parts[index] ?? "")
      )
      .join("");
  }
  if (node?.type === "BinaryExpression" && node.operator === "+") {
    const left = resolve(node.left, constants);
    const right = resolve(node.right, constants);
    return left === undefined || right === undefined ? undefined : left + right;
  }
  if (node?.type === "Literal" && typeof node.value === "string") {
    return node.value;
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

export const objectEntries = (
  node: Node | null | undefined,
  constants?: Constants
): Entry[] => {
  if (node?.type === "CallExpression") {
    return node.arguments.flatMap((argument) =>
      objectEntries(argument, constants)
    );
  }
  if (node?.type === "Identifier") {
    return objectEntries(constants?.objects.get(node.name));
  }
  if (node?.type !== "ObjectExpression") {
    return [];
  }
  return node.properties.flatMap((property): Entry[] => {
    if (property.type === "SpreadElement") {
      return objectEntries(property.argument, constants);
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
