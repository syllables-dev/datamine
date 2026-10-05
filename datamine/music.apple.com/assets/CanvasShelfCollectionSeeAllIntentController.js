import { a8 as a, ao as A, a9 as E, aA as v, ac as C, af as h, ag as f, ak as w } from "./main.js";
import { f as _, e as M, b as T } from "./CanvasCollectionSectionBuilder.js";
const m = {
  TOP_SONGS: "FUSE.Artist.Section.TopSongs",
  ALBUMS: "FUSE.Artist.Section.Albums",
  ESSENTIALS: "FUSE.Artist.Section.Essentials",
  MUSIC_VIDEOS: "FUSE.Artist.Section.MusicVideos",
  ARTIST_PLAYLISTS: "FUSE.Artist.Section.Playlists",
  MORE_TO_HEAR: "FUSE.Artist.Section.MoreToHear",
  MORE_TO_SEE: "FUSE.Artist.Section.MoreToSee",
};
function p(o, t, e) {
  var i;
  const n = o.body,
    s = n?.resources,
    l = (i = n?.data) === null || i === void 0 ? void 0 : i[0];
  if (a(s)) throw new Error("No resource map in canvas shelf collection see-all response.");
  if (!_(l)) throw new Error("No canvas shelf collection resource identifier.");
  const u = new C(s, e),
    c = u.resource(l);
  if (!M(c, e)) throw new Error("No canvas shelf collection resource.");
  const r = new T(
    c,
    { resourceManager: u, collectionsPreferSeeAllDisplayAttributes: !0, dropCollectionSectionHeaders: !0 },
    e,
    0,
  ).build();
  if (a(r))
    throw (
      A.error(e, "Failed to build canvas shelf collection section for see-all."),
      new Error("Failed to build canvas shelf collection section.")
    );
  return {
    pageMetrics: E(e, o, "see_all", "SeeAll", u),
    header: y(c.attributes.title, c.attributes.kind, t.artistName, e),
    sections: [r],
  };
}
function y(o, t, e, i) {
  if (a(o)) return null;
  if (a(e) || a(t)) return { title: o };
  const n = m[t];
  return a(n) ? { title: o } : { title: v.string(n, i, { artistName: e }) };
}
function F(o, t) {
  const e = new h(o.href, t);
  return (
    e.queryString.artworkURL.add(f.OmitFileExtension).add(f.OmitCropCode),
    e.queryString.extend.add("plainEditorialNotes").add("seeAllDisplay"),
    e.queryString.addParameters({ include: "contents", "limit[contents]": "100", "omit[resource]": "autos" }),
    w(e, t)
  );
}
var I =
  (globalThis && globalThis.__awaiter) ||
  function (o, t, e, i) {
    function n(s) {
      return s instanceof e
        ? s
        : new e(function (l) {
            l(s);
          });
    }
    return new (e || (e = Promise))(function (s, l) {
      function u(r) {
        try {
          d(i.next(r));
        } catch (S) {
          l(S);
        }
      }
      function c(r) {
        try {
          d(i.throw(r));
        } catch (S) {
          l(S);
        }
      }
      function d(r) {
        r.done ? s(r.value) : n(r.value).then(u, c);
      }
      d((i = i.apply(o, t || [])).next());
    });
  };
const L = {
  $intentKind: "CanvasShelfCollectionSeeAllIntent",
  perform(o, t) {
    return I(this, void 0, void 0, function* () {
      const e = yield F(o, t);
      return p(e, o, t);
    });
  },
};
export { L as CanvasShelfCollectionSeeAllIntentController };
