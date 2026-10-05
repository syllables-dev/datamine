const regexSyntax = /[.*+?^${}()|[\]\\]/gu;

export const escapeRegex = (text: string) => text.replace(regexSyntax, "\\$&");

export const anyOf = (texts: Iterable<string>) =>
  new RegExp(
    [...texts]
      .toSorted((a, b) => b.length - a.length)
      .map(escapeRegex)
      .join("|"),
    "gu"
  );

export const sortedRecord = <T>(entries: Iterable<[string, T]>) =>
  Object.fromEntries(
    [...entries].toSorted(([a], [b]) => a.localeCompare(b))
  ) as Record<string, T>;

export const sortedSet = (values: Iterable<string>) =>
  [...new Set(values)].toSorted();
