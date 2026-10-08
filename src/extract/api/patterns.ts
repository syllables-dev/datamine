export const apiPath = /^\/v\d+\//u;
export const basePath =
  /^\{\w*(?:base|url|host|domain|origin)\}\/[\w/{}.:-]*$/iu;
export const hostPath =
  /^(?<host>https?:\/\/\{[\w-]*\})(?<rest>\/[\w/{}.:-]+)$/u;
export const urlMember = /^\w*(?:Url|URL)$/u;
export const namedHole = /\{\w+\}/gu;
export const leadingHole = /^\{\w+\}/u;
export const headerName = /^[A-Za-z][A-Za-z0-9]*(?:-[A-Za-z0-9]+)+$/u;
export const titleCaseHeader = /^[A-Z][A-Za-z0-9]*(?:-[A-Z0-9][A-Za-z0-9]*)+$/u;
export const bracketParam = /^[a-z][\w-]*\[[^\]]+\]$/u;
export const appleUrl =
  /^https?:\/\/[\w.-]+\.(?:apple|itunes|mzstatic|icloud|apple-mapkit|cdn-apple)\.com(?:[/?][^\s"'`]*)?$/u;

export const singleWordHeaders = new Set([
  "accept",
  "authorization",
  "cookie",
  "origin",
  "range",
  "referer",
]);
export const httpMethods = new Set([
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT",
]);
export const paramObjects = new Set([
  "params",
  "query",
  "queryParameters",
  "queryParams",
  "searchParams",
]);
export const paramCalls = new Set(["addParameter", "addParameters"]);
export const requestHeaderCalls = new Set([
  "append",
  "set",
  "setRequestHeader",
]);
export const responseHeaderCalls = new Set(["get", "getResponseHeader", "has"]);

export const isHeader = (name: string) =>
  headerName.test(name) || singleWordHeaders.has(name.toLowerCase());
