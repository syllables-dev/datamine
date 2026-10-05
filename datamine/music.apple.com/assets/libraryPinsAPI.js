import {
  as as f,
  at as C,
  aJ as S,
  a2 as c,
  ac as M,
  b3 as I,
  b4 as m,
  aE as T,
  b5 as N,
  aY as v,
  b6 as x,
  b7 as U,
  b8 as _,
  b9 as K,
  ba as b,
  bb as h,
  bc as B,
  bd as O,
  af as k,
  be as Y,
  bf as y,
  bg as L,
  bh as $,
  bi as V,
} from "./main.js";
function H(t, r, n) {
  switch (t.kind) {
    case c.Song:
    case c.MusicVideo:
      return r ? I(r, "pin", m(t), n) : null;
    case c.Artist:
      const i = m(t);
      return T(
        { kind: v.LibraryPage, intent: x({ id: i, language: null, storefront: null }) },
        N({ fields: { actionDetails: { kind: t.kind }, actionType: "navigate", targetId: i, targetType: "pin" } }),
      );
    default:
      return I(t, "pin", m(t), n);
  }
}
async function J(t, r) {
  const n = await U(t.identifiers?.cloudUniversalLibraryID, r),
    i = n.body?.resources,
    s = new M(i, r),
    e = s.resource(n.body?.data?.[0]);
  return s.resources(e?.relationships?.albums?.data)?.map((a) => f(a, r)) ?? [];
}
function l(t, r, n, i, s) {
  const e = s ? "button" : "pin",
    a = b,
    u = s ? { actionContext: "contextualAction" } : {};
  switch (t) {
    case "shuffle":
      return B(r, i, null, n, null, e, a, u);
    case "playLast":
      return h(
        r.map((d) => ({ contentDescriptor: d })),
        null,
        b,
        { actionType: t },
      );
    case "playNext":
      return K(
        r.map((d) => ({ contentDescriptor: d })),
        null,
        b,
        { actionType: t },
      );
    case "play":
    default:
      return _(r, i, null, n, null, e, a, u);
  }
}
function z(t, r, n) {
  const i = O(t.type, n);
  if (!i) return null;
  const s = (
      t.relationships?.albums ??
      t.relationships?.playlists ??
      t.relationships?.artists ??
      t.relationships?.catalog
    )?.data?.[0],
    e = r.resource(s);
  if (!e) return null;
  switch (i) {
    case c.Artist:
      return f(t, n);
    case c.Song:
      return f(e, n);
    default:
      return null;
  }
}
async function Q(t, r, n) {
  const i = f(t, n),
    s = z(t, r, n),
    e = r.resource(t.relationships?.catalog?.data?.[0]),
    a = { ...t.attributes?.artwork, ...e?.attributes?.artwork },
    u = a?.url ? C(a) : null,
    d = t.attributes?.name,
    E = t.meta.libraryPin?.positionUUID,
    w = t.meta.libraryPin?.action,
    q = t.attributes?.canEdit,
    F = S(t.attributes),
    D = t.attributes?.hasCatalog;
  let o = [i];
  i.kind === c.Artist && (o = await J(i, n));
  const p = l("play", o, s, n),
    R = l("shuffle", o, s, n);
  return {
    id: t.id,
    href: t.href,
    kind: i.kind,
    artwork: u,
    canEdit: q,
    action: w === "shuffle" ? R : p,
    defaultAction: w,
    hasCatalog: D,
    positionID: E,
    segue: H(i, s, n),
    showExplicitBadge: F,
    title: d,
    playAction: p,
    shuffleAction: R,
    contextualMenuActions: {
      playAction: l("play", o, s, n, !0),
      playNextAction: l("playNext", o, s, n, !0),
      playLastAction: l("playLast", o, s, n, !0),
      shuffleAction: l("shuffle", o, s, n, !0),
    },
  };
}
async function W(t, r) {
  const n = t.body?.resources,
    i = new M(n, r);
  return Promise.all(
    t.body.data.map((s) => {
      const e = i.resource(s);
      return Q(e, i, r);
    }),
  );
}
function A(t, r) {
  return new k(`/v1/me/library/pins/${t}`, r);
}
function P(t, r) {
  return new Promise((n, i) => {
    const s = r.required(L);
    (async function e() {
      try {
        const a = await X(r);
        if (a.body.data) {
          const u = await W(a, r);
          if (t?.call(null, u)) return n(a);
        }
      } catch {
        return (s.error("Failed getting library pins"), i("Failed getting library pins"));
      }
      setTimeout(e, V);
    })();
  });
}
function g(t, r, n) {
  const i = n.required(L);
  return t?.statusCode > 299
    ? (i.error(`Non 200 status code from ${r} response. Status code: ${t.statusCode}`), !0)
    : !1;
}
async function X(t) {
  const r = new k("/v1/me/library/pins", t);
  r.queryString.addParameters({
    meta: "libraryPin",
    limit: Y.toString(),
    "include[library-songs]": "albums,playlists,artists",
    "include[library-music-videos]": "albums,playlists,artists",
    "include[library-artists]": "catalog",
    "fields[artists]": "artwork",
  });
  const n = await y({ url: r.string }, t),
    i = t.required(L);
  if ($(n, i, "Get Library Pin")) throw new Error("Request to Music API failed: Get Library Pin");
  return n;
}
async function G(t, r) {
  const n = await y({ url: A(t, r).string, body: "", method: "POST" }, r);
  if (g(n, "Add Library Pin", r)) throw new Error("Request to Music API failed: Add Library Pin");
  return P((i) => i.some((s) => s.id === t), r);
}
async function j(t, r, n) {
  const i = A(t, n);
  i.queryString.addParameters({ action: r });
  const s = await y({ url: i.string, method: "PATCH" }, n);
  if (g(s, "Move Library Pin", n)) throw new Error("Request to Music API failed: Add Library Pin");
  return P((e) => e.some((a) => a.id === t && a.defaultAction === r), n);
}
async function tt(t, r, n) {
  const i = A(t, n);
  i.queryString.addParameters({ after: r ?? "top" });
  const s = await y({ url: i.string, method: "POST" }, n);
  if (g(s, "Move Library Pin", n)) throw new Error("Request to Music API failed: Add Library Pin");
  return P((e) => !0, n);
}
async function nt(t, r) {
  const n = A(t, r),
    i = await y({ url: n.string, method: "DELETE" }, r);
  if (g(i, "Delete Library Pin", r)) throw new Error("Request to Music API failed: Delete Library Pin");
  return P((s) => !s.some((e) => e.id === t), r);
}
export { G as a, nt as b, tt as c, j as d, W as m, X as r };
