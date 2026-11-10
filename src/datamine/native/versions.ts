import type { Build } from "@/datamine/native/types";

const versionPattern =
  /^(?<number>\d+(?:\.\d+)*)(?:\s+(?<stage>beta|rc)(?:\s+(?<seed>\d+))?)?$/iu;

const stageRank: Record<string, number> = { beta: 0, rc: 1 };
const releaseRank = 2;

export const parseVersion = (version: string) => {
  const groups = version.trim().match(versionPattern)?.groups;
  if (!groups?.number) {
    return;
  }
  return {
    parts: groups.number.split(".").map(Number),
    seed: Number(groups.seed ?? 1),
    stage: groups.stage
      ? (stageRank[groups.stage.toLowerCase()] ?? 0)
      : releaseRank,
  };
};

const versionKey = (version: string) => {
  const parsed = parseVersion(version);
  if (!parsed) {
    throw new Error(`unrecognized iOS version ${JSON.stringify(version)}`);
  }
  return parsed;
};

export const compareBuilds = (a: Build, b: Build) => {
  const left = versionKey(a.version);
  const right = versionKey(b.version);
  const length = Math.max(left.parts.length, right.parts.length);
  for (let index = 0; index < length; index += 1) {
    const difference = (left.parts[index] ?? 0) - (right.parts[index] ?? 0);
    if (difference !== 0) {
      return difference;
    }
  }
  return (
    left.stage - right.stage ||
    left.seed - right.seed ||
    a.released.localeCompare(b.released) ||
    a.build.localeCompare(b.build)
  );
};
