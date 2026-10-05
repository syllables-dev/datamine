export class ScrapeError extends Error {
  override readonly name = "ScrapeError";
}

const describe = (what: string, source: string, pattern?: RegExp) =>
  `${what} not found in ${source}${pattern ? ` (pattern ${pattern})` : ""}`;

export const warn = (title: string, message: string) => {
  console.log(`::warning title=${title}::${message}`);
};

export const required = <T>(
  value: T | null | undefined,
  what: string,
  source: string,
  pattern?: RegExp
): T => {
  if (value === null || value === undefined) {
    throw new ScrapeError(describe(what, source, pattern));
  }
  return value;
};

export const optional = <T>(
  value: T | undefined,
  what: string,
  source: string,
  pattern?: RegExp
) => {
  if (value === undefined) {
    warn(what, describe(what, source, pattern));
  }
  return value;
};

export const requiredMatch = (
  pattern: RegExp,
  text: string,
  what: string,
  source: string
) => required(text.match(pattern)?.groups, what, source, pattern);
