import { get } from "@/lib/http";

import type { AppleDbRelease, Build } from "@/datamine/native/types";

const base = "https://api.appledb.dev/ios";
const buildKey = /^iOS;(?<build>(?<major>\d+)[A-Z]\d+[a-z]?)$/u;
const leadingNumber = /^\d+/u;

const majorOf = (build: string) => Number(build.match(leadingNumber)?.[0]);

const buildsFrom = (keys: string[]) =>
  keys.flatMap((key) => {
    const groups = key.match(buildKey)?.groups;
    return groups ? [{ build: groups.build, major: Number(groups.major) }] : [];
  });

const ipswFor = (release: AppleDbRelease, device: string) =>
  release.sources
    ?.filter(
      (source) => source.type === "ipsw" && source.deviceMap.includes(device)
    )
    .flatMap((source) => source.links)
    .find((link) => link.active && link.preferred)?.url;

const release = async (build: string) =>
  JSON.parse(await get(`${base}/iOS;${build}.json`)) as AppleDbRelease;

export const newestBuild = async (
  device: string,
  since?: Build
): Promise<Build | undefined> => {
  const builds = buildsFrom(JSON.parse(await get(`${base}/index.json`)));
  const sinceMajor = since
    ? majorOf(since.build)
    : Math.max(...builds.map((item) => item.major));
  const candidates = builds.filter((item) => item.major >= sinceMajor);
  const releases = await Promise.all(
    candidates.map((item) => release(item.build))
  );
  return releases
    .flatMap((item): Build[] => {
      const ipsw = ipswFor(item, device);
      return ipsw && item.released
        ? [
            {
              build: item.build,
              ipsw,
              released: item.released,
              version: item.version,
            },
          ]
        : [];
    })
    .toSorted(
      (a, b) =>
        a.released.localeCompare(b.released) || a.build.localeCompare(b.build)
    )
    .at(-1);
};
