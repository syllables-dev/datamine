import { parseSync } from "oxc-parser";
import { walk } from "oxc-walker";

import type { Node } from "oxc-parser";

import { warn } from "@/lib/expect";
import { sortedRecord, sortedSet } from "@/lib/utils";

import type { Api, HeaderUsage } from "@/types";

import {
  calleeName,
  constantsOf,
  functionLabel,
  isClass,
  isFunction,
  keyOf,
  objectEntries,
  readable,
  resolve,
  stringOf,
} from "./nodes";
import {
  apiPath,
  appleUrl,
  basePath,
  bracketParam,
  hostPath,
  httpMethods,
  isHeader,
  leadingHole,
  namedHole,
  paramCalls,
  paramObjects,
  requestHeaderCalls,
  responseHeaderCalls,
  titleCaseHeader,
  urlMember,
} from "./patterns";
import {
  addParams,
  current,
  flush,
  newScope,
  newState,
  requestHeader,
  responseHeader,
} from "./state";

import type { Context, Scope, State } from "./state";

const asPath = (text: string) => {
  const { host, rest } = text.match(hostPath)?.groups ?? {};
  if (host && rest) {
    return host + rest.replaceAll(namedHole, "{}");
  }
  if (!apiPath.test(text) && !basePath.test(text)) {
    return;
  }
  const lead = text.match(leadingHole)?.[0] ?? "";
  return lead + text.slice(lead.length).replaceAll(namedHole, "{}");
};

const headerNames = (
  context: Context,
  node: Node | null | undefined
): string[] => {
  if (node?.type === "CallExpression") {
    return node.arguments.flatMap((argument) => headerNames(context, argument));
  }
  if (node?.type !== "ObjectExpression") {
    return [];
  }
  return node.properties.flatMap((property) => {
    if (property.type === "SpreadElement") {
      return headerNames(context, property.argument);
    }
    const name = property.computed
      ? resolve(property.key, context.constants)
      : keyOf(property);
    return name === undefined ? [] : [name];
  });
};

const headerEntries = (context: Context, node: Node | null | undefined) => {
  for (const name of headerNames(context, node)) {
    if (isHeader(name)) {
      requestHeader(context, name);
    }
  }
};

const bodyFields = (context: Context, node: Node | null | undefined) =>
  node?.type === "NewExpression"
    ? node.arguments.flatMap((argument) =>
        objectEntries(argument, context.constants)
      )
    : objectEntries(node, context.constants);

const comparisons = new Set(["!=", "!==", "==", "==="]);

const onString = (
  context: Context,
  node: Node,
  parent: Node | null,
  text: string
) => {
  if (node.type === "BinaryExpression" || node.type === "TemplateLiteral") {
    walk(node, {
      enter(child) {
        context.consumed.add(child);
      },
    });
  }
  const path = asPath(text);
  if (path) {
    current(context).paths.add(path);
  } else if (
    httpMethods.has(text) &&
    !(parent?.type === "BinaryExpression" && comparisons.has(parent.operator))
  ) {
    current(context).methods.add(text);
  } else if (appleUrl.test(text)) {
    context.state.urls.add(text);
  }
};

const onProperty = (context: Context, node: Node) => {
  if (node.type !== "Property") {
    return;
  }
  const key = keyOf(node);
  if (key === "headers") {
    headerEntries(context, node.value);
  } else if (key === "body") {
    for (const [field] of bodyFields(context, node.value)) {
      current(context).body.add(field);
    }
  } else if (key && paramObjects.has(key)) {
    addParams(context, objectEntries(node.value, context.constants));
  } else if (key && bracketParam.test(key)) {
    current(context).params.set(key, stringOf(node.value) ?? null);
  }
};

const onCall = (context: Context, node: Node) => {
  if (node.type !== "CallExpression") {
    return;
  }
  const call = calleeName(node) ?? "";
  const [first, second] = node.arguments;
  const name = stringOf(first);
  const header = resolve(first, context.constants) ?? name;
  if (paramCalls.has(call)) {
    addParams(
      context,
      name === undefined
        ? objectEntries(first, context.constants)
        : [[name, stringOf(second) ?? null]]
    );
  } else if (
    header &&
    isHeader(header) &&
    requestHeaderCalls.has(call) &&
    node.arguments.length === 2
  ) {
    requestHeader(context, header);
  } else if (
    name &&
    titleCaseHeader.test(name) &&
    responseHeaderCalls.has(call) &&
    node.arguments.length === 1
  ) {
    responseHeader(context, name);
  }
};

const isReference = (node: Node, parent: Node | null) =>
  !(
    (parent?.type === "MemberExpression" &&
      !parent.computed &&
      parent.property === node) ||
    (parent?.type === "Property" && !parent.computed && parent.key === node) ||
    (parent?.type === "VariableDeclarator" && parent.id === node)
  );

const onNode = (context: Context, node: Node, parent: Node | null) => {
  if (node.type === "Identifier") {
    const value = context.constants.strings.get(node.name);
    const path = value === undefined ? undefined : asPath(value);
    if (path && isReference(node, parent)) {
      current(context).paths.add(path);
    }
  } else if (node.type === "Property") {
    onProperty(context, node);
  } else if (node.type === "CallExpression") {
    onCall(context, node);
  } else if (
    node.type === "NewExpression" &&
    node.callee.type === "Identifier" &&
    node.callee.name === "Headers"
  ) {
    headerEntries(context, node.arguments[0]);
  } else if (
    node.type === "AssignmentExpression" &&
    node.left.type === "MemberExpression" &&
    node.left.computed
  ) {
    const name = resolve(node.left.property, context.constants);
    if (name && titleCaseHeader.test(name)) {
      requestHeader(context, name);
    }
  } else if (
    node.type === "MemberExpression" &&
    !node.computed &&
    node.property.type === "Identifier" &&
    urlMember.test(node.property.name)
  ) {
    current(context).targets.add(`{${node.property.name}}`);
  }
};

const enter = (context: Context, node: Node, parent: Node | null) => {
  if (node.type === "ClassDeclaration" || node.type === "ClassExpression") {
    context.classes.push(readable(node.id?.name));
  } else if (isFunction(node)) {
    context.scopes.push(
      newScope(
        functionLabel(node, parent, context.classes.at(-1)) ??
          current(context).label
      )
    );
  } else if (!context.consumed.has(node)) {
    const text = stringOf(node);
    if (text === undefined) {
      onNode(context, node, parent);
    } else {
      onString(context, node, parent, text);
    }
  }
};

const leave = (context: Context, node: Node) => {
  if (isClass(node)) {
    context.classes.pop();
  } else if (isFunction(node)) {
    flush(context, context.scopes.pop() as Scope);
  }
};

const scan = (state: State, chunk: string, source: string) => {
  const { program } = parseSync(chunk, source);
  const context: Context = {
    chunk,
    classes: [],
    constants: constantsOf(program),
    consumed: new WeakSet(),
    scopes: [{ ...newScope(), root: true }],
    state,
  };
  walk(program, {
    enter(node, parent) {
      enter(context, node, parent);
    },
    leave(node) {
      leave(context, node);
    },
  });
  flush(context, context.scopes.pop() as Scope);
};

export const emptyApi = (): Api => ({
  endpoints: {},
  requestHeaders: {},
  responseHeaders: {},
  urls: [],
});

const byUsage = (a: HeaderUsage, b: HeaderUsage) =>
  JSON.stringify(a).localeCompare(JSON.stringify(b));

export const extractApi = (
  sources: Map<string, string>,
  origin: string
): Api => {
  const state = newState();
  for (const [chunk, source] of sources) {
    scan(state, chunk, source);
  }
  if (state.endpoints.size === 0 || state.requestHeaders.size === 0) {
    warn(
      "API extraction",
      `${state.endpoints.size} endpoints and ${state.requestHeaders.size} request headers found in ${origin}`
    );
  }
  const display = (id: string) =>
    [...(state.spellings.get(id) ?? [id])].toSorted()[0] ?? id;
  return {
    endpoints: sortedRecord(
      [...state.endpoints].map(([path, endpoint]) => [
        path,
        {
          ...(endpoint.body.size > 0 && { body: sortedSet(endpoint.body) }),
          chunks: sortedSet(endpoint.chunks),
          headers: sortedSet([...endpoint.headers].map(display)),
          methods: sortedSet(endpoint.methods),
          params: sortedRecord(endpoint.params),
        },
      ])
    ),
    requestHeaders: sortedRecord(
      [...state.requestHeaders].map(([id, usages]) => [
        display(id),
        [...usages.values()].toSorted(byUsage),
      ])
    ),
    responseHeaders: sortedRecord(
      [...state.responseHeaders].map(([id, chunks]) => [
        display(id),
        sortedSet(chunks),
      ])
    ),
    urls: sortedSet(state.urls),
  };
};
