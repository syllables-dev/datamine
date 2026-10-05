import type { Node } from "oxc-parser";

import { sortedSet } from "@/lib/utils";

import type { HeaderUsage } from "@/types";

import type { Entry } from "./nodes";

export interface Scope {
  headers: Set<string>;
  label?: string;
  methods: Set<string>;
  params: Map<string, string | null>;
  paths: Set<string>;
  targets: Set<string>;
}

interface EndpointEntry {
  chunks: Set<string>;
  headers: Set<string>;
  methods: Set<string>;
  params: Map<string, string | null>;
}

export interface State {
  endpoints: Map<string, EndpointEntry>;
  requestHeaders: Map<string, Map<string, HeaderUsage>>;
  responseHeaders: Map<string, Set<string>>;
  spellings: Map<string, Set<string>>;
  urls: Set<string>;
}

export interface Context {
  chunk: string;
  classes: (string | undefined)[];
  consumed: WeakSet<Node>;
  scopes: Scope[];
  state: State;
}

export const newState = (): State => ({
  endpoints: new Map(),
  requestHeaders: new Map(),
  responseHeaders: new Map(),
  spellings: new Map(),
  urls: new Set(),
});

export const newScope = (label?: string): Scope => ({
  headers: new Set(),
  label,
  methods: new Set(),
  params: new Map(),
  paths: new Set(),
  targets: new Set(),
});

const newEndpoint = (): EndpointEntry => ({
  chunks: new Set(),
  headers: new Set(),
  methods: new Set(),
  params: new Map(),
});

export const current = (context: Context) => context.scopes.at(-1) as Scope;

export const spell = (state: State, name: string) => {
  const id = name.toLowerCase();
  state.spellings.set(id, (state.spellings.get(id) ?? new Set()).add(name));
  return id;
};

export const requestHeader = (context: Context, name: string) => {
  current(context).headers.add(spell(context.state, name));
};

export const responseHeader = (context: Context, name: string) => {
  const id = spell(context.state, name);
  const { responseHeaders } = context.state;
  responseHeaders.set(
    id,
    (responseHeaders.get(id) ?? new Set()).add(context.chunk)
  );
};

export const addParams = (context: Context, entries: Entry[]) => {
  for (const [key, value] of entries) {
    current(context).params.set(key, value);
  }
};

const mergeEndpoint = (endpoint: EndpointEntry, scope: Scope) => {
  for (const method of scope.methods) {
    endpoint.methods.add(method);
  }
  for (const header of scope.headers) {
    endpoint.headers.add(header);
  }
  for (const [key, value] of scope.params) {
    if ((endpoint.params.get(key) ?? null) === null) {
      endpoint.params.set(key, value);
    }
  }
};

const flushPaths = (context: Context, scope: Scope) => {
  for (const raw of scope.paths) {
    const [path = raw, query] = raw.split("?", 2);
    const endpoint = context.state.endpoints.get(path) ?? newEndpoint();
    endpoint.chunks.add(context.chunk);
    for (const pair of query ? query.split("&") : []) {
      const [key = "", value] = pair.split("=", 2);
      endpoint.params.set(key, value ?? null);
    }
    if (scope.paths.size <= 3) {
      mergeEndpoint(endpoint, scope);
    }
    context.state.endpoints.set(path, endpoint);
  }
};

const flushHeaders = (context: Context, scope: Scope) => {
  const targets = sortedSet([
    ...[...scope.paths].map((path) => path.split("?", 1)[0] ?? path),
    ...scope.targets,
  ]);
  for (const header of scope.headers) {
    const usage: HeaderUsage = {
      chunk: context.chunk,
      ...(scope.label && { in: scope.label }),
      ...(scope.methods.size > 0 && { methods: sortedSet(scope.methods) }),
      ...(targets.length > 0 && { targets }),
    };
    const usages =
      context.state.requestHeaders.get(header) ??
      new Map<string, HeaderUsage>();
    usages.set(JSON.stringify(usage), usage);
    context.state.requestHeaders.set(header, usages);
  }
};

export const flush = (context: Context, scope: Scope) => {
  flushPaths(context, scope);
  flushHeaders(context, scope);
};
