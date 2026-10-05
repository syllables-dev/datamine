import type { Target } from "@/types";

const fromRoot = (path: string) =>
  Bun.fileURLToPath(new URL(`../${path}`, import.meta.url));

export const config = {
  discord: {
    icon: "https://music.apple.com/assets/favicon/favicon-180.png",
    username: "Apple Music",
  },
  locale: "en-us",
  paths: {
    reports: fromRoot(".datamine"),
    snapshots: fromRoot("datamine"),
  },
  targets: [
    {
      color: 0xfa_23_3b,
      enabled: true,
      host: "music.apple.com",
      id: "main",
      page: "/us/new",
    },
    {
      color: 0xff_9f_0a,
      enabled: true,
      host: "beta.music.apple.com",
      id: "beta",
      page: "/us/new",
    },
    {
      color: 0x8e_8e_93,
      enabled: true,
      host: "classical.music.apple.com",
      id: "classical",
      page: "/us/browse",
    },
  ] satisfies Target[],
};
