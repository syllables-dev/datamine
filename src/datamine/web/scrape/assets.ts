export const assetHash = /~(?<hash>[0-9a-f]{8,})(?=\.\w+$)/u;
const skippedAsset = /-legacy\b|^translations\b/u;

export const hashOf = (file: string) => file.match(assetHash)?.groups?.hash;

export const baseName = (file: string) => file.replace(assetHash, "");

export const isSkippedAsset = (file: string) => skippedAsset.test(file);
