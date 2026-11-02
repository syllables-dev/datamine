import path from "node:path";

const musicFiles =
  "staged_system_apps/Music\\.app/(Music|Frameworks/MusicApplication\\.framework/MusicApplication|(PlugIns|Extensions)/[^/]+\\.appex/[^/.]+)$";
const appexBinary = /\/(?<name>[^/]+)\.appex\/(?<binary>[^/]+)$/u;
const mountCopy = "/private/tmp/";

export class FetchError extends Error {
  override readonly name = "FetchError";
}

const ipsw = async (args: string[]) => {
  const process = Bun.spawn(["ipsw", ...args], {
    stderr: "inherit",
    stdout: "inherit",
  });
  if ((await process.exited) !== 0) {
    throw new FetchError(
      `ipsw ${args.join(" ")} exited with ${process.exitCode}`
    );
  }
};

const find = async (dir: string, pattern: string) => {
  const found = await Array.fromAsync(
    new Bun.Glob(pattern).scan({ absolute: true, cwd: dir })
  );
  return found.filter((file) => !file.includes(mountCopy)).toSorted();
};

export const fetchSharedCache = async (url: string, dir: string) => {
  await ipsw([
    "extract",
    "--dyld",
    "--dyld-arch",
    "arm64e",
    "--remote",
    url,
    "--output",
    dir,
  ]);
  const [cache] = await find(dir, "**/dyld_shared_cache_arm64e");
  if (!cache) {
    throw new FetchError(`no dyld_shared_cache_arm64e under ${dir}`);
  }
  return path.dirname(cache);
};

const isMusicBinary = (file: string) => {
  const appex = file.match(appexBinary)?.groups;
  return appex
    ? appex.name === appex.binary
    : file.endsWith("/Music.app/Music") ||
        file.endsWith("/MusicApplication.framework/MusicApplication");
};

export const fetchMusicApp = async (
  url: string,
  device: string,
  dir: string
) => {
  await ipsw([
    "extract",
    "--files",
    "--device",
    device,
    "--pattern",
    musicFiles,
    "--remote",
    url,
    "--output",
    dir,
  ]);
  const files = await find(dir, "**/Music.app/**");
  const binaries = files.filter(isMusicBinary);
  if (!binaries.some((file) => file.endsWith("/Music.app/Music"))) {
    throw new FetchError(`Music.app binary not found under ${dir}`);
  }
  return binaries;
};
