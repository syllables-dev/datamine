export const json = (value: unknown) => `${JSON.stringify(value, null, 2)}\n`;

export const jsonLines = (values: unknown[]) =>
  `${values.map((value) => JSON.stringify(value)).join("\n")}\n`;

export const readJson = async <T>(path: string): Promise<T | undefined> => {
  const file = Bun.file(path);
  return (await file.exists()) ? ((await file.json()) as T) : undefined;
};

export const readJsonLines = async <T>(path: string): Promise<T[]> => {
  const file = Bun.file(path);
  if (!(await file.exists())) {
    return [];
  }
  const text = await file.text();
  return text
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as T);
};

export const readText = async (path: string) => {
  const file = Bun.file(path);
  return (await file.exists()) ? await file.text() : undefined;
};

export const removeStale = async (dir: string, keep: Set<string>) => {
  const removed: string[] = [];
  for await (const name of new Bun.Glob("*").scan({ cwd: dir })) {
    if (!keep.has(name)) {
      await Bun.file(`${dir}/${name}`).delete();
      removed.push(name);
    }
  }
  return removed;
};
