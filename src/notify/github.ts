import { warn } from "@/lib/expect";
import { codeBlock } from "@/lib/markdown";

const commentLimit = 60_000;
const minimumBlock = 500;
const blockReserve = 300;

export interface CommentBlock {
  folded?: boolean;
  heading: string;
  lines: string[];
}

const diffBlock = (lines: string[], budget: number) => {
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
  const body = codeBlock("diff", shown);
  return hidden > 0 ? `${body}\n\n_${hidden} more lines not shown._` : body;
};

const folded = (summary: string, body: string) =>
  `<details>\n<summary><b>${summary}</b></summary>\n\n${body}\n\n</details>`;

export const commentBody = (header: string[], blocks: CommentBlock[]) => {
  const parts = [...header];
  let budget = commentLimit - parts.join("\n\n").length;
  for (const block of blocks) {
    if (budget < minimumBlock) {
      break;
    }
    const body = diffBlock(block.lines, budget - blockReserve);
    const part = block.folded
      ? folded(block.heading, body)
      : `### ${block.heading}\n\n${body}`;
    parts.push(part);
    budget -= part.length + 2;
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
