import { fromRoot } from "@/config";

import type { Target } from "@/datamine/web/types";

export const locale = "en-us";

export const webDir = fromRoot("datamine/web");

export const targets: Target[] = [
  {
    color: 0xfa_23_3b,
    host: "music.apple.com",
    id: "main",
    page: "/us/new",
  },
  {
    color: 0xfb_5c_74,
    host: "beta.music.apple.com",
    id: "beta",
    page: "/us/new",
  },
  {
    color: 0x8e_8e_93,
    host: "classical.music.apple.com",
    id: "classical",
    page: "/us/browse",
  },
];
