export interface Target {
  color: number;
  enabled: boolean;
  host: string;
  id: string;
  page: string;
}

export interface Endpoint {
  body?: string[];
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

export interface Flags {
  features: Record<string, boolean>;
  overrides: string[];
}

export interface Manifest {
  chunks: Record<string, string>;
  entry: string;
  fetchedAt: string;
  roots: string[];
  version?: string;
}

export interface Snapshot {
  api: Api;
  /** Missing in snapshots written before flags were tracked. */
  flags?: Flags;
  literals: string[];
  manifest: Manifest;
  strings: Record<string, string>;
  tokens: Token[];
}

export type SectionName =
  | "chunks"
  | "code"
  | "endpoints"
  | "features"
  | "headers"
  | "overrides"
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
