import { a2 as r } from "./main.js";
import { P as n } from "./group-session-proto.js";
function T(e, t, i) {
  const u = A(e),
    o = !t || t?.length === 0 ? u || { kind: r.Album } : t[0];
  (!i || i.length === 0) && (i = Array.isArray(e) ? e : [{ contentDescriptor: e }]);
  const d = c(o?.kind);
  let a = o?.identifiers ?? {};
  return (
    d === n.Container.ContainerType.PLAYLIST &&
      o?.identifiers?.storeAdamID &&
      (a = { ...a, storePlaylistGlobalID: o.identifiers.storeAdamID }),
    d === n.Container.ContainerType.ALBUM &&
      o?.identifiers?.storeCloudAlbumID &&
      (a = { ...a, cloudCollectionID: o.identifiers.storeCloudAlbumID }),
    [
      {
        containerType: d,
        identifierSet: a,
        items: i?.map((s) => ({
          mediaType: m(s?.contentDescriptor?.kind),
          identifierSet: {
            storeAdamID: parseFloat(s?.contentDescriptor?.identifiers?.storeAdamID),
            storeSubscriptionAdamID: parseFloat(s?.contentDescriptor?.identifiers?.storeAdamID),
          },
        })),
      },
    ]
  );
}
function l(e, t) {
  const i = f(e, t);
  return t.slice(i);
}
function f(e, t) {
  return t.findIndex((i) => i.identifiers.storeAdamID === e.contentDescriptor?.identifiers.storeAdamID);
}
function c(e) {
  switch (e) {
    case r.Album:
      return n.Container.ContainerType.ALBUM;
    case r.Artist:
      return n.Container.ContainerType.ARTIST;
    case r.Playlist:
      return n.Container.ContainerType.PLAYLIST;
    case r.RadioStation:
      return n.Container.ContainerType.RADIO_STATION;
    default:
      return n.Container.ContainerType.UNKNOWN;
  }
}
function m(e) {
  switch (e) {
    case r.Song:
      return n.Item.MediaType.SONG;
    case r.MusicVideo:
      return n.Item.MediaType.MUSIC_VIDEO;
    default:
      return n.Item.MediaType.UNKNOWN;
  }
}
function A(e) {
  if (Array.isArray(e)) return e[0]?.containerContentDescriptor;
}
export { T as convertToMRContainer, l as omitPriorSongs };
