const fence = "```";

export const codeBlock = (language: string, lines: string[]) =>
  `${fence}${language}\n${lines.map((line) => line.replaceAll(fence, "ˋˋˋ")).join("\n")}\n${fence}`;
