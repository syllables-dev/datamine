import {
  ad as f,
  ae as C,
  af as S,
  a1 as c,
  ag as b,
  ah as M,
  ai as m,
  aj as T,
  ak as v,
  al as x,
  am as N,
  an as U,
  ao as _,
  ap as K,
  aq as w,
  ar as h,
  as as B,
  at as O,
  au as k,
  av as $,
  aw as y,
  ax as L,
  ay as V,
  az as Y,
} from "./main.js";
function z(t, r, n) {
  switch (t.kind) {
    case c.Song:
    case c.MusicVideo:
      return r ? M(r, "pin", m(t), n) : null;
    case c.Artist:
      const i = m(t);
      return T(
        { kind: x.LibraryPage, intent: N({ id: i, language: null, storefront: null }) },
        v({ fields: { actionDetails: { kind: t.kind }, actionType: "navigate", targetId: i, targetType: "pin" } }),
      );
    default:
      return M(t, "pin", m(t), n);
  }
}
async function H(t, r) {
  const n = await U(t.identifiers?.cloudUniversalLibraryID, r),
    i = n.body?.resources,
    s = new b(i, r),
    a = s.resource(n.body?.data?.[0]);
  return s.resources(a?.relationships?.albums?.data)?.map((e) => f(e, r)) ?? [];
}
function l(t, r, n, i, s) {
  const a = s ? "button" : "pin",
    e = w,
    u = s ? { actionContext: "contextualAction" } : {};
  switch (t) {
    case "shuffle":
      return B(r, i, null, n, null, a, e, u);
    case "playLast":
      return h(
        r.map((d) => ({ contentDescriptor: d })),
        null,
        w,
        { actionType: t },
      );
    case "playNext":
      return K(
        r.map((d) => ({ contentDescriptor: d })),
        null,
        w,
        { actionType: t },
      );
    case "play":
    default:
      return _(r, i, null, n, null, a, e, u);
  }
}
function J(t, r, n) {
  const i = O(t.type, n);
  if (!i) return null;
  const s = (
      t.relationships?.albums ??
      t.relationships?.playlists ??
      t.relationships?.artists ??
      t.relationships?.catalog
    )?.data?.[0],
    a = r.resource(s);
  if (!a) return null;
  switch (i) {
    case c.Artist:
      return f(t, n);
    case c.Song:
      return f(a, n);
    default:
      return null;
  }
}
async function Q(t, r, n) {
  const i = f(t, n),
    s = J(t, r, n),
    a = r.resource(t.relationships?.catalog?.data?.[0]),
    e = { ...t.attributes?.artwork, ...a?.attributes?.artwork },
    u = e?.url ? C(e) : null,
    d = t.attributes?.name,
    q = t.meta.libraryPin?.positionUUID,
    p = t.meta.libraryPin?.action,
    E = t.attributes?.canEdit,
    F = S(t.attributes),
    D = t.attributes?.hasCatalog;
  let o = [i];
  i.kind === c.Artist && (o = await H(i, n));
  const R = l("play", o, s, n),
    I = l("shuffle", o, s, n);
  return {
    id: t.id,
    href: t.href,
    kind: i.kind,
    artwork: u,
    canEdit: E,
    action: p === "shuffle" ? I : R,
    defaultAction: p,
    hasCatalog: D,
    positionID: q,
    segue: z(i, s, n),
    showExplicitBadge: F,
    title: d,
    playAction: R,
    shuffleAction: I,
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
    i = new b(n, r);
  return Promise.all(
    t.body.data.map((s) => {
      const a = i.resource(s);
      return Q(a, i, r);
    }),
  );
}
function A(t, r) {
  return new k(`/v1/me/library/pins/${t}`, r);
}
function P(t, r) {
  return new Promise((n, i) => {
    const s = r.required(L);
    (async function a() {
      try {
        const e = await X(r);
        if (e.body.data) {
          const u = await W(e, r);
          if (t?.call(null, u)) return n(e);
        }
      } catch {
        return (s.error("Failed getting library pins"), i("Failed getting library pins"));
      }
      setTimeout(a, Y);
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
    limit: $.toString(),
    "include[library-songs]": "albums,playlists,artists",
    "include[library-music-videos]": "albums,playlists,artists",
    "include[library-artists]": "catalog",
    "fields[artists]": "artwork",
  });
  const n = await y({ url: r.string }, t),
    i = t.required(L);
  if (V(n, i, "Get Library Pin")) throw new Error("Request to Music API failed: Get Library Pin");
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
  return P((a) => a.some((e) => e.id === t && e.defaultAction === r), n);
}
async function tt(t, r, n) {
  const i = A(t, n);
  i.queryString.addParameters({ after: r ?? "top" });
  const s = await y({ url: i.string, method: "POST" }, n);
  if (g(s, "Move Library Pin", n)) throw new Error("Request to Music API failed: Add Library Pin");
  return P((a) => !0, n);
}
async function nt(t, r) {
  const n = A(t, r),
    i = await y({ url: n.string, method: "DELETE" }, r);
  if (g(i, "Delete Library Pin", r)) throw new Error("Request to Music API failed: Delete Library Pin");
  return P((s) => !s.some((a) => a.id === t), r);
}
export { G as a, nt as b, tt as c, j as d, W as m, X as r };
