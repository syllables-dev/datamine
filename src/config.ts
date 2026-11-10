export const fromRoot = (path: string) =>
  Bun.fileURLToPath(new URL(`../${path}`, import.meta.url));

export const discordIdentity = {
  icon: "https://music.apple.com/assets/favicon/favicon-180.png",
  username: "Apple Music",
};

export const reportsDir = fromRoot(".datamine");
