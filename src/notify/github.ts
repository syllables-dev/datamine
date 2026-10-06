import { warn } from "@/lib/expect";
import {
  bundleSections,
  diffLines,
  notableSections,
  shortVersion,
  titles,
} from "@/notify/diff";
import { counts, isEmpty, sectionNames } from "@/report";

import type { Report, SectionName } from "@/types";

const fence = "```";
const commentLimit = 60_000;

const label = (version: string | undefined, build: string | undefined) =>
  version ? `**${shortVersion(version)}** (\`${build}\`)` : `\`${build}\``;

const block = (lines: string[], budget: number) => {
  const shown: string[] = [];
  let size = 0;
  for (const line of lines) {
    if (size + line.length + 1 > budget) {
      break;
    }
    shown.push(line);
    size += line.length + 1;
  }
  const hidden = lines.length - shown.length;
  const body = `${fence}diff\n${shown.join("\n").replaceAll(fence, "ˋˋˋ")}\n${fence}`;
  return hidden > 0 ? `${body}\n\n_${hidden} more lines not shown._` : body;
};

const folded = (summary: string, body: string) =>
  `<details>\n<summary><b>${summary}</b></summary>\n\n${body}\n\n</details>`;

export const commentBody = (report: Report) => {
  const parts = [
    `## ${report.host}`,
    `${label(report.version.from, report.previousBuild)} → ${label(report.version.to, report.build)}`,
  ];
  let budget = commentLimit - parts.join("\n\n").length;
  const order: SectionName[] = [...notableSections, ...bundleSections];
  for (const name of order.filter((item) => sectionNames.includes(item))) {
    const section = report.sections[name];
    if (isEmpty(section) || budget < 500) {
      continue;
    }
    const heading = `${titles[name]} (${counts(section)})`;
    const body = block(diffLines(section, 1000), budget - 300);
    const part = notableSections.includes(name)
      ? `### ${heading}\n\n${body}`
      : folded(heading, body);
    parts.push(part);
    budget -= part.length + 2;
  }
  if (report.movedStrings.length > 0 && budget > 500) {
    const lines = report.movedStrings.map(([from, to]) => `${from} -> ${to}`);
    parts.push(
      folded(
        `Moved strings (${report.movedStrings.length})`,
        block(lines, budget - 300)
      )
    );
  }
  return parts.join("\n\n");
};

export const postComment = async (body: string) => {
  const {
    COMMIT_SHA: sha,
    GITHUB_REPOSITORY: repository,
    GITHUB_TOKEN: token,
  } = Bun.env;
  if (!sha || !repository || !token) {
    console.log(body);
    return;
  }
  const response = await fetch(
    `https://api.github.com/repos/${repository}/commits/${sha}/comments`,
    {
      body: JSON.stringify({ body }),
      headers: {
        accept: "application/vnd.github+json",
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      method: "POST",
    }
  );
  if (!response.ok) {
    warn("GitHub comment", `${response.status}: ${await response.text()}`);
    return;
  }
  return ((await response.json()) as { html_url: string }).html_url;
};
