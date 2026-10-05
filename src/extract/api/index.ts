import { parseSync } from "oxc-parser";
import { walk } from "oxc-walker";

import type { Node } from "oxc-parser";

import { warn } from "@/lib/expect";
import { sortedRecord, sortedSet } from "@/lib/utils";

import type { Api, HeaderUsage } from "@/types";

import {
  calleeName,
  functionLabel,
  isClass,
  isFunction,
  keyOf,
  objectEntries,
  readable,
  stringOf,
} from "./nodes";
import {
  apiPath,
  appleUrl,
  basePath,
  bracketParam,
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
  if (!apiPath.test(text) && !basePath.test(text)) {
    return;
  }
  const lead = text.match(leadingHole)?.[0] ?? "";
  return lead + text.slice(lead.length).replaceAll(namedHole, "{}");
};

const headerEntries = (context: Context, node: Node | null | undefined) => {
  for (const [name] of objectEntries(node)) {
    if (isHeader(name)) {
      requestHeader(context, name);
    }
  }
};

const onString = (context: Context, node: Node, text: string) => {
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
  } else if (httpMethods.has(text)) {
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
  } else if (key && paramObjects.has(key)) {
    addParams(context, objectEntries(node.value));
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
  if (paramCalls.has(call)) {
    addParams(
      context,
      name === undefined
        ? objectEntries(first)
        : [[name, stringOf(second) ?? null]]
    );
  } else if (
    name &&
    isHeader(name) &&
    requestHeaderCalls.has(call) &&
    node.arguments.length === 2
  ) {
    requestHeader(context, name);
  } else if (
    name &&
    titleCaseHeader.test(name) &&
    responseHeaderCalls.has(call) &&
    node.arguments.length === 1
  ) {
    responseHeader(context, name);
  }
};

const onNode = (context: Context, node: Node) => {
  if (node.type === "Property") {
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
    const name = stringOf(node.left.property);
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
      onNode(context, node);
    } else {
      onString(context, node, text);
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
  const context: Context = {
    chunk,
    classes: [],
    consumed: new WeakSet(),
    scopes: [newScope()],
    state,
  };
  walk(parseSync(chunk, source).program, {
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
