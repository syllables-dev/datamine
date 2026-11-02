import { required, requiredMatch } from "@/lib/expect";

import { isSkippedAsset } from "./assets";

const assetPath = /^\/assets\/(?<file>[^/?#]+\.(?:js|css))$/u;
const headContent = /<head[^>]*>(?<head>[\s\S]*?)<\/head>/u;
const svelteHeadBlock =
  /<!-- HEAD_svelte-\w+_START -->[\s\S]*?<!-- HEAD_svelte-\w+_END -->/gu;

export interface Page {
  entry: string;
  head: string;
  roots: string[];
}

const assetFile = (path: string | null) => {
  const file = path?.match(assetPath)?.groups?.file;
  return file && !isSkippedAsset(file) ? file : undefined;
};

const stripHead = (head: string) =>
  new HTMLRewriter()
    .on("script#serialized-server-data", {
      element(element) {
        element.remove();
      },
    })
    .transform(head)
    .replace(svelteHeadBlock, "");

export const readPage = (html: string, source: string): Page => {
  const roots = new Set<string>();
  const modules: string[] = [];
  new HTMLRewriter()
    .on("script[src]", {
      element(element) {
        const file = assetFile(element.getAttribute("src"));
        if (file) {
          roots.add(file);
          if (element.getAttribute("type") === "module") {
            modules.push(file);
          }
        }
      },
    })
    .on("link[href]", {
      element(element) {
        const file = assetFile(element.getAttribute("href"));
        if (file) {
          roots.add(file);
        }
      },
    })
    .transform(html);
  return {
    entry: required(
      modules.find((file) => file.endsWith(".js")),
      "entry module script",
      source,
      assetPath
    ),
    head: stripHead(
      requiredMatch(headContent, html, "page head", source).head ?? ""
    ),
    roots: [...roots].toSorted(),
  };
};
