import {
  a8 as _,
  a9 as S,
  aa as C,
  ab as D,
  ac as I,
  ad as v,
  ae as k,
  af as P,
  ag as w,
  ah as M,
  ai as x,
  aj as R,
  ak as b,
  a2 as T,
  al as E,
  am as L,
  an as q,
} from "./main.js";
import { C as N } from "./CanvasSectionsBuilder.js";
import { C as F } from "./CanvasCollectionSectionBuilder.js";
function U(s, o, e) {
  var t, a, i, r, l, u;
  const d = (t = s.body) === null || t === void 0 ? void 0 : t.data;
  if (!d || d.length === 0) throw new Error("No resource identifiers in artist detail page 2 response");
  const n = (a = s.body) === null || a === void 0 ? void 0 : a.resources;
  if (!n) throw new Error("No resource map in artist detail page 2 response");
  const c = new I(n, e),
    f = c.resource(d[0]);
  if (!f) throw new Error("No artist resource in artist detail page 2 response");
  const h =
    (r = (i = f.relationships) === null || i === void 0 ? void 0 : i.canvas) === null || r === void 0 ? void 0 : r.data;
  if (_(h)) throw new Error("No canvas resource identifiers in artist detail page 2 response");
  const m = new N(h, { resourceManager: c, primaryContent: f }, e).build(),
    p = m.find((g) => g.itemKind === "artistDetailHeader");
  if (p && p.items.length > 0) {
    const g = p.items[0];
    g.fallbackArtwork = B(m, p);
  }
  const y = { pageDetails: (l = f.attributes) === null || l === void 0 ? void 0 : l.name },
    A = {
      pageMetrics: S(e, s, "artist_detail", "Artist", c, null, y, null, null, !0),
      sections: m,
      invalidationRules: C(o, !0, s.expirationDate),
      canonicalURL: (u = f.attributes) === null || u === void 0 ? void 0 : u.url,
    };
  return D(A, e, f, c);
}
function B(s, o) {
  var e, t, a, i, r;
  for (const l of s) {
    if (l === o) continue;
    const u =
      (t = (e = l.pinnedLeadingItem) === null || e === void 0 ? void 0 : e.item) === null || t === void 0
        ? void 0
        : t.artwork;
    if (!((a = u?.dictionary) === null || a === void 0) && a.bgColor) return u;
    const d = (i = l.items) !== null && i !== void 0 ? i : [];
    for (const n of d) {
      const c = n?.artwork;
      if (!((r = c?.dictionary) === null || r === void 0) && r.bgColor) return c;
    }
  }
  return null;
}
var $ =
  (globalThis && globalThis.__awaiter) ||
  function (s, o, e, t) {
    function a(i) {
      return i instanceof e
        ? i
        : new e(function (r) {
            r(i);
          });
    }
    return new (e || (e = Promise))(function (i, r) {
      function l(n) {
        try {
          d(t.next(n));
        } catch (c) {
          r(c);
        }
      }
      function u(n) {
        try {
          d(t.throw(n));
        } catch (c) {
          r(c);
        }
      }
      function d(n) {
        n.done ? i(n.value) : a(n.value).then(l, u);
      }
      d((t = t.apply(s, o || [])).next());
    });
  };
const O = [
  v.Albums,
  v.AppleCurators,
  v.Artists,
  v.Concerts,
  v.MusicMovies,
  v.MusicVideos,
  v.Playlists,
  v.Songs,
  v.Stations,
  v.UploadedVideos,
  v.Venues,
];
function V(s, o) {
  return $(this, void 0, void 0, function* () {
    const e = k.countryCode(o),
      t = new P(`/v1/catalog/${e}/artists/${s}`, o);
    (t.queryString.artworkURL.add(w.OmitFileExtension).add(w.OmitCropCode),
      t.queryString.extend
        .add("artistBio")
        .add("editorialArtwork")
        .add("editorialVideo")
        .add("extendedAssetUrls")
        .add("hasBiographyContent")
        .add("hero")
        .add("keyColor")
        .add("plainEditorialNotes"),
      M.supportsSeoMetadata(o) && t.queryString.extend.add("seoTitle").add("seoDescription"),
      t.queryString.addParameters({
        "extend[canvas-shelves-header]": "badge",
        "filter[canvas-shelves-collection.contents.type]": O.join(","),
        include: "canvas,default-playable-content",
        "include[canvas-shelves-collection]": "contents",
        "include[canvas-shelves-group]": "children",
        "include[songs]": "albums",
        "limit[canvas-shelves-collection:contents]": "12",
        "limit[canvas-shelves-collection:contents{displayStyle}]": `${F.ArtistFeaturedTrackLockup}:24`,
        "omit[resource]": "autos",
        "relate[canvas-shelves-collection]": "see-all",
      }));
    const a = x(o);
    return (
      R.isSome(a) && t.queryString.addParameters({ geoHashLocation: a.geoHash }),
      t.queryString.addParameters({ "extend[concerts]": "tickets", "include[concerts]": "artists,venues" }),
      yield b(t, o)
    );
  });
}
var H =
  (globalThis && globalThis.__awaiter) ||
  function (s, o, e, t) {
    function a(i) {
      return i instanceof e
        ? i
        : new e(function (r) {
            r(i);
          });
    }
    return new (e || (e = Promise))(function (i, r) {
      function l(n) {
        try {
          d(t.next(n));
        } catch (c) {
          r(c);
        }
      }
      function u(n) {
        try {
          d(t.throw(n));
        } catch (c) {
          r(c);
        }
      }
      function d(n) {
        n.done ? i(n.value) : a(n.value).then(l, u);
      }
      d((t = t.apply(s, o || [])).next());
    });
  };
const K = [
    /(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewArtist(?=.*?[?&]id=(?<id>[\w\.-]+))(?:.*?[?&]cc=(?<cc>\w{2}))?/,
    /(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?artist\/(?:.*?\/)?(?:id)?(?<id>[\w\.-]+)(?:\?|$)/,
  ],
  Q = {
    $intentKind: "ArtistDetailPageIntent",
    routes(s) {
      return K.map((o) => ({
        rules: [{ regex: [o], query: ["l?"] }],
        handler: (e, t) => {
          var a, i;
          const r =
              (i = (a = e.toString().match(o)) === null || a === void 0 ? void 0 : a.groups) !== null && i !== void 0
                ? i
                : {},
            l = {
              kind: T.Artist,
              url: e.toString(),
              identifiers: { storeAdamID: r.id },
              locale: E({ storefront: r.cc, language: t.l }, s),
            };
          return L(l);
        },
      }));
    },
    perform(s, o) {
      return H(this, void 0, void 0, function* () {
        const e = s.contentDescriptor.identifiers.storeAdamID;
        if (!e) throw new Error("No artist ID in intent");
        const t = yield V(e, o);
        return U(t, s, o);
      });
    },
    actionFor(s, o, e) {
      return q(s.contentDescriptor, null, o, e);
    },
  };
export { Q as ArtistDetailPage2IntentController };
