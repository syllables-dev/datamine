export interface Target {
  color: number;
  enabled: boolean;
  host: string;
  id: string;
  page: string;
}

export interface Endpoint {
  chunks: string[];
  headers: string[];
  methods: string[];
  params: Record<string, string | null>;
}

export interface HeaderUsage {
  chunk: string;
  in?: string;
  methods?: string[];
  targets?: string[];
}

export interface Api {
  endpoints: Record<string, Endpoint>;
  requestHeaders: Record<string, HeaderUsage[]>;
  responseHeaders: Record<string, string[]>;
  urls: string[];
}

export interface Token {
  exp?: string;
  iat?: string;
  iss?: string;
  kid?: string;
  origins?: string[];
}

export interface Literals {
  literals: string[];
  tokens: Token[];
  version?: string;
}

export interface Manifest {
  chunks: Record<string, string>;
  entry: string;
  fetchedAt: string;
  musickit?: { hash: string; version: string };
  roots: string[];
  version?: string;
}

export interface Snapshot {
  api: Api;
  literals: string[];
  manifest: Manifest;
  strings: Record<string, string>;
  tokens: Token[];
}

export type SectionName =
  | "chunks"
  | "code"
  | "endpoints"
  | "headers"
  | "params"
  | "strings"
  | "tokens"
  | "urls";

export interface Section {
  added: string[];
  removed: string[];
  updated: [string, string][];
}

export interface Report {
  build: string;
  host: string;
  initial: boolean;
  modifiedChunks: string[];
  movedStrings: [string, string][];
  musickit: { from?: string; to?: string };
  previousBuild?: string;
  sections: Record<SectionName, Section>;
  target: string;
  totals: {
    chunks: number;
    endpoints: number;
    headers: number;
    strings: number;
  };
  version: { from?: string; to?: string };
}
