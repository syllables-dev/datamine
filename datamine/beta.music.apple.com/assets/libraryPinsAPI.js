import {
  as as L,
  at as B,
  aJ as O,
  a2 as g,
  ac as K,
  b3 as _,
  b4 as M,
  aE as Y,
  b5 as $,
  aY as V,
  b6 as H,
  b7 as J,
  b8 as z,
  b9 as Q,
  ba as R,
  bb as W,
  bc as X,
  bd as Z,
  af as h,
  be as G,
  bf as m,
  bg as E,
  bh as j,
  bi as tt,
} from "./main.js";
function nt(t, n, i) {
  switch (t.kind) {
    case g.Song:
    case g.MusicVideo:
      return n ? _(n, "pin", M(t), i) : null;
    case g.Artist:
      const r = M(t);
      return Y(
        { kind: V.LibraryPage, intent: H({ id: r, language: null, storefront: null }) },
        $({ fields: { actionDetails: { kind: t.kind }, actionType: "navigate", targetId: r, targetType: "pin" } }),
      );
    default:
      return _(t, "pin", M(t), i);
  }
}
async function it(t, n) {
  var a, o, l, d, c, y, f, P;
  const i = await J((a = t.identifiers) == null ? void 0 : a.cloudUniversalLibraryID, n),
    r = (o = i.body) == null ? void 0 : o.resources,
    s = new K(r, n),
    e = s.resource((d = (l = i.body) == null ? void 0 : l.data) == null ? void 0 : d[0]);
  return (P =
    (f = s.resources(
      (y = (c = e == null ? void 0 : e.relationships) == null ? void 0 : c.albums) == null ? void 0 : y.data,
    )) == null
      ? void 0
      : f.map((u) => L(u, n))) != null
    ? P
    : [];
}
function A(t, n, i, r, s) {
  const e = s ? "button" : "pin",
    a = R,
    o = s ? { actionContext: "contextualAction" } : {};
  switch (t) {
    case "shuffle":
      return X(n, r, null, i, null, e, a, o);
    case "playLast":
      return W(
        n.map((l) => ({ contentDescriptor: l })),
        null,
        R,
        { actionType: t },
      );
    case "playNext":
      return Q(
        n.map((l) => ({ contentDescriptor: l })),
        null,
        R,
        { actionType: t },
      );
    case "play":
    default:
      return z(n, r, null, i, null, e, a, o);
  }
}
function rt(t, n, i) {
  var a, o, l, d, c, y, f, P, u;
  const r = Z(t.type, i);
  if (!r) return null;
  const s =
      (u =
        (P =
          (f =
            (c =
              (l = (a = t.relationships) == null ? void 0 : a.albums) != null
                ? l
                : (o = t.relationships) == null
                  ? void 0
                  : o.playlists) != null
              ? c
              : (d = t.relationships) == null
                ? void 0
                : d.artists) != null
            ? f
            : (y = t.relationships) == null
              ? void 0
              : y.catalog) == null
          ? void 0
          : P.data) == null
        ? void 0
        : u[0],
    e = n.resource(s);
  if (!e) return null;
  switch (r) {
    case g.Artist:
      return L(t, i);
    case g.Song:
      return L(e, i);
    default:
      return null;
  }
}
async function st(t, n, i) {
  var F, p, D, C, S, T, N, v, x, U;
  const r = L(t, i),
    s = rt(t, n, i),
    e = n.resource(
      (D = (p = (F = t.relationships) == null ? void 0 : F.catalog) == null ? void 0 : p.data) == null ? void 0 : D[0],
    ),
    a = {
      ...((C = t.attributes) == null ? void 0 : C.artwork),
      ...((S = e == null ? void 0 : e.attributes) == null ? void 0 : S.artwork),
    },
    o = a != null && a.url ? B(a) : null,
    l = (T = t.attributes) == null ? void 0 : T.name,
    d = (N = t.meta.libraryPin) == null ? void 0 : N.positionUUID,
    c = (v = t.meta.libraryPin) == null ? void 0 : v.action,
    y = (x = t.attributes) == null ? void 0 : x.canEdit,
    f = O(t.attributes),
    P = (U = t.attributes) == null ? void 0 : U.hasCatalog;
  let u = [r];
  r.kind === g.Artist && (u = await it(r, i));
  const k = A("play", u, s, i),
    q = A("shuffle", u, s, i);
  return {
    id: t.id,
    href: t.href,
    kind: r.kind,
    artwork: o,
    canEdit: y,
    action: c === "shuffle" ? q : k,
    defaultAction: c,
    hasCatalog: P,
    positionID: d,
    segue: nt(r, s, i),
    showExplicitBadge: f,
    title: l,
    playAction: k,
    shuffleAction: q,
    contextualMenuActions: {
      playAction: A("play", u, s, i, !0),
      playNextAction: A("playNext", u, s, i, !0),
      playLastAction: A("playLast", u, s, i, !0),
      shuffleAction: A("shuffle", u, s, i, !0),
    },
  };
}
async function at(t, n) {
  var s;
  const i = (s = t.body) == null ? void 0 : s.resources,
    r = new K(i, n);
  return Promise.all(
    t.body.data.map((e) => {
      const a = r.resource(e);
      return st(a, r, n);
    }),
  );
}
function w(t, n) {
  return new h(`/v1/me/library/pins/${t}`, n);
}
function b(t, n) {
  return new Promise((i, r) => {
    const s = n.required(E);
    (async function e() {
      try {
        const a = await et(n);
        if (a.body.data) {
          const o = await at(a, n);
          if (t != null && t.call(null, o)) return i(a);
        }
      } catch (a) {
        return (s.error("Failed getting library pins"), r("Failed getting library pins"));
      }
      setTimeout(e, tt);
    })();
  });
}
function I(t, n, i) {
  const r = i.required(E);
  return (t == null ? void 0 : t.statusCode) > 299
    ? (r.error(`Non 200 status code from ${n} response. Status code: ${t.statusCode}`), !0)
    : !1;
}
async function et(t) {
  const n = new h("/v1/me/library/pins", t);
  n.queryString.addParameters({
    meta: "libraryPin",
    limit: G.toString(),
    "include[library-songs]": "albums,playlists,artists",
    "include[library-music-videos]": "albums,playlists,artists",
    "include[library-artists]": "catalog",
    "fields[artists]": "artwork",
  });
  const i = await m({ url: n.string }, t),
    r = t.required(E);
  if (j(i, r, "Get Library Pin")) throw new Error("Request to Music API failed: Get Library Pin");
  return i;
}
async function ut(t, n) {
  const i = await m({ url: w(t, n).string, body: "", method: "POST" }, n);
  if (I(i, "Add Library Pin", n)) throw new Error("Request to Music API failed: Add Library Pin");
  return b((r) => r.some((s) => s.id === t), n);
}
async function lt(t, n, i) {
  const r = w(t, i);
  r.queryString.addParameters({ action: n });
  const s = await m({ url: r.string, method: "PATCH" }, i);
  if (I(s, "Move Library Pin", i)) throw new Error("Request to Music API failed: Add Library Pin");
  return b((e) => e.some((a) => a.id === t && a.defaultAction === n), i);
}
async function ct(t, n, i) {
  const r = w(t, i);
  r.queryString.addParameters({ after: n != null ? n : "top" });
  const s = await m({ url: r.string, method: "POST" }, i);
  if (I(s, "Move Library Pin", i)) throw new Error("Request to Music API failed: Add Library Pin");
  return b((e) => !0, i);
}
async function dt(t, n) {
  const i = w(t, n),
    r = await m({ url: i.string, method: "DELETE" }, n);
  if (I(r, "Delete Library Pin", n)) throw new Error("Request to Music API failed: Delete Library Pin");
  return b((s) => !s.some((e) => e.id === t), n);
}
export { ut as a, dt as b, ct as c, lt as d, at as m, et as r };
