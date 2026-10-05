import { a8 as y, a9 as v, aa as w, ac as m, ad as c, ae as _, af as A, ag as g, ak as b } from "./main.js";
import { C as M } from "./CanvasSectionsBuilder.js";
import "./CanvasCollectionSectionBuilder.js";
function R(o, a, r) {
  var t, u, e, n, l;
  const p = (t = o.body) === null || t === void 0 ? void 0 : t.data;
  if (!p || p.length === 0) throw new Error("No resource identifiers in artist biography page response");
  const d = (u = o.body) === null || u === void 0 ? void 0 : u.resources;
  if (!d) throw new Error("No resource map in artist biography page response");
  const i = new m(d, r),
    s = i.resource(p[0]);
  if (!s) throw new Error("No artist resource in artist biography page response");
  const f =
    (n = (e = s.relationships) === null || e === void 0 ? void 0 : e["artist-biography-canvas"]) === null ||
    n === void 0
      ? void 0
      : n.data;
  if (y(f)) throw new Error("No artist-biography-canvas resource identifiers in artist biography page response");
  const h = new M(f, { resourceManager: i, primaryContent: s }, r).build();
  return {
    pageMetrics: v(r, o, "artist_detail", "ArtistBiography", i),
    sections: h,
    invalidationRules: w(a, !0, o.expirationDate),
    canonicalURL: (l = s.attributes) === null || l === void 0 ? void 0 : l.url,
  };
}
var I =
  (globalThis && globalThis.__awaiter) ||
  function (o, a, r, t) {
    function u(e) {
      return e instanceof r
        ? e
        : new r(function (n) {
            n(e);
          });
    }
    return new (r || (r = Promise))(function (e, n) {
      function l(i) {
        try {
          d(t.next(i));
        } catch (s) {
          n(s);
        }
      }
      function p(i) {
        try {
          d(t.throw(i));
        } catch (s) {
          n(s);
        }
      }
      function d(i) {
        i.done ? e(i.value) : u(i.value).then(l, p);
      }
      d((t = t.apply(o, a || [])).next());
    });
  };
const C = [
  c.Albums,
  c.AppleCurators,
  c.Artists,
  c.Concerts,
  c.MusicMovies,
  c.MusicVideos,
  c.Playlists,
  c.Songs,
  c.Stations,
  c.UploadedVideos,
  c.Venues,
];
function B(o, a) {
  return I(this, void 0, void 0, function* () {
    const r = _.countryCode(a),
      t = new A(`/v1/catalog/${r}/artists/${o}`, a);
    return (
      t.queryString.artworkURL.add(g.OmitFileExtension).add(g.OmitCropCode),
      t.queryString.extend
        .add("artistBio")
        .add("bornOrFormed")
        .add("origin")
        .add("editorialArtwork")
        .add("hero")
        .add("isGroup")
        .add("plainEditorialNotes"),
      t.queryString.addParameters({
        "filter[canvas-shelves-collection.contents.type]": C.join(","),
        include: "artist-biography-canvas",
        "omit[resource]": "autos",
      }),
      yield b(t, a)
    );
  });
}
var E =
  (globalThis && globalThis.__awaiter) ||
  function (o, a, r, t) {
    function u(e) {
      return e instanceof r
        ? e
        : new r(function (n) {
            n(e);
          });
    }
    return new (r || (r = Promise))(function (e, n) {
      function l(i) {
        try {
          d(t.next(i));
        } catch (s) {
          n(s);
        }
      }
      function p(i) {
        try {
          d(t.throw(i));
        } catch (s) {
          n(s);
        }
      }
      function d(i) {
        i.done ? e(i.value) : u(i.value).then(l, p);
      }
      d((t = t.apply(o, a || [])).next());
    });
  };
const U = {
  $intentKind: "ArtistBiographyPageIntent",
  perform(o, a) {
    return E(this, void 0, void 0, function* () {
      const r = o.contentDescriptor.identifiers.storeAdamID;
      if (!r) throw new Error("No artist ID in biography intent");
      const t = yield B(r, a);
      return R(t, o, a);
    });
  },
};
export { U as ArtistBiographyPageIntentController };
