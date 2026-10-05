import { required, requiredMatch, warn } from "@/lib/expect";

import { isSkippedAsset } from "./assets";

const assetPath = /^\/assets\/(?<file>[^/?#]+\.(?:js|css))$/u;
const musickitPath = /\/musickit\/v3\/amp\/musickit\.js$/u;
const headContent = /<head[^>]*>(?<head>[\s\S]*?)<\/head>/u;
const svelteHeadBlock =
  /<!-- HEAD_svelte-\w+_START -->[\s\S]*?<!-- HEAD_svelte-\w+_END -->/gu;

export interface Page {
  entry: string;
  head: string;
  musickit?: string;
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
  const musickit: string[] = [];
  new HTMLRewriter()
    .on("script[src]", {
      element(element) {
        const src = element.getAttribute("src");
        const file = assetFile(src);
        if (file) {
          roots.add(file);
          if (element.getAttribute("type") === "module") {
            modules.push(file);
          }
        } else if (src && musickitPath.test(src)) {
          musickit.push(src);
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
  if (musickit.length === 0) {
    warn("MusicKit script", `no script matching ${musickitPath} in ${source}`);
  }
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
    musickit: musickit[0],
    roots: [...roots].toSorted(),
  };
};
