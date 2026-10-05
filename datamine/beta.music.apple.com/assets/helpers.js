import { a2 as d } from "./main.js";
import { P as t } from "./group-session-proto.js";
function O(e, r, i) {
  var a, A, T;
  const f = N(e),
    n = !r || (r == null ? void 0 : r.length) === 0 ? f || { kind: d.Album } : r[0];
  (!i || i.length === 0) && (i = Array.isArray(e) ? e : [{ contentDescriptor: e }]);
  const s = M(n == null ? void 0 : n.kind);
  let u = (a = n == null ? void 0 : n.identifiers) != null ? a : {};
  return (
    s === t.Container.ContainerType.PLAYLIST &&
      (A = n == null ? void 0 : n.identifiers) != null &&
      A.storeAdamID &&
      (u = { ...u, storePlaylistGlobalID: n.identifiers.storeAdamID }),
    s === t.Container.ContainerType.ALBUM &&
      (T = n == null ? void 0 : n.identifiers) != null &&
      T.storeCloudAlbumID &&
      (u = { ...u, cloudCollectionID: n.identifiers.storeCloudAlbumID }),
    [
      {
        containerType: s,
        identifierSet: u,
        items:
          i == null
            ? void 0
            : i.map((o) => {
                var C, l, S, I, y;
                return {
                  mediaType: g((C = o == null ? void 0 : o.contentDescriptor) == null ? void 0 : C.kind),
                  identifierSet: {
                    storeAdamID: parseFloat(
                      (S = (l = o == null ? void 0 : o.contentDescriptor) == null ? void 0 : l.identifiers) == null
                        ? void 0
                        : S.storeAdamID,
                    ),
                    storeSubscriptionAdamID: parseFloat(
                      (y = (I = o == null ? void 0 : o.contentDescriptor) == null ? void 0 : I.identifiers) == null
                        ? void 0
                        : y.storeAdamID,
                    ),
                  },
                };
              }),
      },
    ]
  );
}
function F(e, r) {
  const i = D(e, r);
  return r.slice(i);
}
function D(e, r) {
  return r.findIndex((i) => {
    var f;
    return i.identifiers.storeAdamID === ((f = e.contentDescriptor) == null ? void 0 : f.identifiers.storeAdamID);
  });
}
function M(e) {
  switch (e) {
    case d.Album:
      return t.Container.ContainerType.ALBUM;
    case d.Artist:
      return t.Container.ContainerType.ARTIST;
    case d.Playlist:
      return t.Container.ContainerType.PLAYLIST;
    case d.RadioStation:
      return t.Container.ContainerType.RADIO_STATION;
    default:
      return t.Container.ContainerType.UNKNOWN;
  }
}
function g(e) {
  switch (e) {
    case d.Song:
      return t.Item.MediaType.SONG;
    case d.MusicVideo:
      return t.Item.MediaType.MUSIC_VIDEO;
    default:
      return t.Item.MediaType.UNKNOWN;
  }
}
function N(e) {
  var r;
  if (Array.isArray(e)) return (r = e[0]) == null ? void 0 : r.containerContentDescriptor;
}
export { O as convertToMRContainer, F as omitPriorSongs };
