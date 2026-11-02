import {
  S as me,
  i as _e,
  n as pe,
  I as le,
  e as y,
  s as L,
  E as J,
  a as M,
  b as w,
  d as T,
  F as Q,
  g as v,
  h,
  aN as he,
  k as V,
  l as _,
  r as I,
  u as G,
  v as D,
  w as H,
  G as X,
  aO as ve,
  aP as ge,
  U as be,
  P as Ee,
  aQ as ke,
  aR as ye,
  aS as Me,
  aT as $e,
  aU as we,
  aV as Ie,
  aW as Pe,
  aX as Se,
  c as Y,
  f as Z,
  m as j,
  H as S,
  x as z,
  aY as De,
  o as Ne,
  aZ as Oe,
  a_ as se,
  J as oe,
  a$ as Ae,
  b0 as q,
  b1 as Fe,
} from "./main.js";
function re(l, t, e) {
  const n = l.slice();
  return ((n[10] = t[e]), n);
}
function ie(l) {
  let t, e;
  return (
    (t = new Se({ props: { page: l[6] } })),
    {
      c() {
        Y(t.$$.fragment);
      },
      l(n) {
        Z(t.$$.fragment, n);
      },
      m(n, a) {
        (j(t, n, a), (e = !0));
      },
      p: S,
      i(n) {
        e || (I(t.$$.fragment, n), (e = !0));
      },
      o(n) {
        (D(t.$$.fragment, n), (e = !1));
      },
      d(n) {
        z(t, n);
      },
    }
  );
}
function ce(l, t) {
  let e,
    n,
    a = t[2].t(t[10].locKey) + "",
    s,
    u,
    p,
    E,
    k,
    P,
    N;
  return (
    (p = new De({ props: { class: "link-box__chevron", "aria-hidden": "true" } })),
    {
      key: l,
      first: null,
      c() {
        ((e = y("a")), (n = y("span")), (s = J(a)), (u = L()), Y(p.$$.fragment), (E = L()), this.h());
      },
      l(d) {
        e = M(d, "A", { href: !0, class: !0, "data-testid": !0 });
        var r = w(e);
        n = M(r, "SPAN", { class: !0 });
        var g = w(n);
        ((s = Q(g, a)), g.forEach(v), (u = T(r)), Z(p.$$.fragment, r), (E = T(r)), r.forEach(v), this.h());
      },
      h() {
        (h(n, "class", "icon-copy svelte-1ma4y5r"),
          h(e, "href", t[10].url),
          h(e, "class", "link icon-wrapper svelte-1ma4y5r"),
          h(e, "data-testid", `not-found-link-${t[10].id.type}`),
          (this.first = e));
      },
      m(d, r) {
        (V(d, e, r),
          _(e, n),
          _(n, s),
          _(e, u),
          j(p, e, null),
          _(e, E),
          (k = !0),
          P || ((N = Ne(e, "click", Oe(t[8](t[10])))), (P = !0)));
      },
      p(d, r) {
        ((t = d), (!k || r & 4) && a !== (a = t[2].t(t[10].locKey) + "") && X(s, a));
      },
      i(d) {
        k || (I(p.$$.fragment, d), (k = !0));
      },
      o(d) {
        (D(p.$$.fragment, d), (k = !1));
      },
      d(d) {
        (d && v(e), z(p), (P = !1), N());
      },
    }
  );
}
function ue(l) {
  let t,
    e,
    n,
    a = { ctx: l, current: null, token: null, hasCatch: !0, pending: We, then: Te, catch: Le, blocks: [, , ,] };
  return (
    se((e = l[1]), a),
    {
      c() {
        ((t = oe()), a.block.c());
      },
      l(s) {
        ((t = oe()), a.block.l(s));
      },
      m(s, u) {
        (V(s, t, u), a.block.m(s, (a.anchor = u)), (a.mount = () => t.parentNode), (a.anchor = t), (n = !0));
      },
      p(s, u) {
        ((l = s), (a.ctx = l), (u & 2 && e !== (e = l[1]) && se(e, a)) || Ae(a, l, u));
      },
      i(s) {
        n || (I(a.block), (n = !0));
      },
      o(s) {
        for (let u = 0; u < 3; u += 1) {
          const p = a.blocks[u];
          D(p);
        }
        n = !1;
      },
      d(s) {
        (s && v(t), a.block.d(s), (a.token = null), (a = null));
      },
    }
  );
}
function Le(l) {
  return { c: S, l: S, m: S, p: S, i: S, o: S, d: S };
}
function Te(l) {
  let t;
  return {
    c() {
      ((t = y("web-music-ipod")), this.h());
    },
    l(e) {
      ((t = M(e, "WEB-MUSIC-IPOD", { locale: !0, i18n: !0, class: !0 })), w(t).forEach(v), this.h());
    },
    h() {
      (q(t, "locale", l[4]), q(t, "i18n", l[2]), q(t, "class", "svelte-1ma4y5r"));
    },
    m(e, n) {
      V(e, t, n);
    },
    p(e, n) {
      n & 4 && q(t, "i18n", e[2]);
    },
    i: S,
    o: S,
    d(e) {
      e && v(t);
    },
  };
}
function We(l) {
  let t, e, n;
  return (
    (e = new Fe({ props: { delay: 500, ariaLoading: l[2].t("ASE.Web.Music.CityPicker.Loading") } })),
    {
      c() {
        ((t = y("div")), Y(e.$$.fragment), this.h());
      },
      l(a) {
        t = M(a, "DIV", { class: !0 });
        var s = w(t);
        (Z(e.$$.fragment, s), s.forEach(v), this.h());
      },
      h() {
        h(t, "class", "loading-container svelte-1ma4y5r");
      },
      m(a, s) {
        (V(a, t, s), j(e, t, null), (n = !0));
      },
      p(a, s) {
        const u = {};
        (s & 4 && (u.ariaLoading = a[2].t("ASE.Web.Music.CityPicker.Loading")), e.$set(u));
      },
      i(a) {
        n || (I(e.$$.fragment, a), (n = !0));
      },
      o(a) {
        (D(e.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && v(t), z(e));
      },
    }
  );
}
function Ce(l) {
  let t,
    e,
    n,
    a,
    s,
    u,
    p,
    E,
    k = l[2].t(l[5].title) + "",
    P,
    N,
    d,
    r = l[2].t(l[5].subtitle) + "",
    g,
    O,
    $,
    c = [],
    C = new Map(),
    R,
    F,
    W,
    f = !l[0] && ie(l),
    U = le(l[7]);
  const x = (o) => o[10].id;
  for (let o = 0; o < U.length; o += 1) {
    let i = re(l, U, o),
      b = x(i);
    C.set(b, (c[o] = ce(b, i)));
  }
  let m = l[1] && ue(l);
  return {
    c() {
      ((t = y("div")),
        (e = y("div")),
        f && f.c(),
        (n = L()),
        (a = y("div")),
        (s = y("img")),
        (p = L()),
        (E = y("h1")),
        (P = J(k)),
        (N = L()),
        (d = y("p")),
        (g = J(r)),
        (O = L()),
        ($ = y("div")));
      for (let o = 0; o < c.length; o += 1) c[o].c();
      ((R = L()), (F = y("div")), m && m.c(), this.h());
    },
    l(o) {
      t = M(o, "DIV", { class: !0 });
      var i = w(t);
      e = M(i, "DIV", { class: !0 });
      var b = w(e);
      (f && f.l(b), (n = T(b)), (a = M(b, "DIV", { class: !0 })));
      var A = w(a);
      ((s = M(A, "IMG", { class: !0, src: !0, alt: !0 })),
        (p = T(A)),
        (E = M(A, "H1", { "data-testid": !0, class: !0 })));
      var ee = w(E);
      ((P = Q(ee, k)), ee.forEach(v), (N = T(A)), (d = M(A, "P", { class: !0 })));
      var te = w(d);
      ((g = Q(te, r)), te.forEach(v), (O = T(A)), ($ = M(A, "DIV", { class: !0 })));
      var ae = w($);
      for (let B = 0; B < c.length; B += 1) c[B].l(ae);
      (ae.forEach(v), A.forEach(v), (R = T(b)), (F = M(b, "DIV", { class: !0 })));
      var ne = w(F);
      (m && m.l(ne), ne.forEach(v), b.forEach(v), i.forEach(v), this.h());
    },
    h() {
      (h(s, "class", "app-icon svelte-1ma4y5r"),
        he(s.src, (u = "/assets/favicon/favicon-180.png")) || h(s, "src", u),
        h(s, "alt", ""),
        h(E, "data-testid", "not-found-heading"),
        h(E, "class", "svelte-1ma4y5r"),
        h(d, "class", "svelte-1ma4y5r"),
        h($, "class", "links svelte-1ma4y5r"),
        h(a, "class", "music-message music-message--overlay svelte-1ma4y5r"),
        h(F, "class", "ipod-container svelte-1ma4y5r"),
        h(e, "class", "error-page-content svelte-1ma4y5r"),
        h(t, "class", "error-page-container svelte-1ma4y5r"));
    },
    m(o, i) {
      (V(o, t, i),
        _(t, e),
        f && f.m(e, null),
        _(e, n),
        _(e, a),
        _(a, s),
        _(a, p),
        _(a, E),
        _(E, P),
        _(a, N),
        _(a, d),
        _(d, g),
        _(a, O),
        _(a, $));
      for (let b = 0; b < c.length; b += 1) c[b] && c[b].m($, null);
      (_(e, R), _(e, F), m && m.m(F, null), (W = !0));
    },
    p(o, [i]) {
      (o[0]
        ? f &&
          (G(),
          D(f, 1, 1, () => {
            f = null;
          }),
          H())
        : f
          ? (f.p(o, i), i & 1 && I(f, 1))
          : ((f = ie(o)), f.c(), I(f, 1), f.m(e, n)),
        (!W || i & 4) && k !== (k = o[2].t(o[5].title) + "") && X(P, k),
        (!W || i & 4) && r !== (r = o[2].t(o[5].subtitle) + "") && X(g, r),
        i & 388 && ((U = le(o[7])), G(), (c = ve(c, i, x, 1, o, U, C, $, ge, ce, null, re)), H()),
        o[1]
          ? m
            ? (m.p(o, i), i & 2 && I(m, 1))
            : ((m = ue(o)), m.c(), I(m, 1), m.m(F, null))
          : m &&
            (G(),
            D(m, 1, 1, () => {
              m = null;
            }),
            H()));
    },
    i(o) {
      if (!W) {
        I(f);
        for (let i = 0; i < U.length; i += 1) I(c[i]);
        (I(m), (W = !0));
      }
    },
    o(o) {
      D(f);
      for (let i = 0; i < c.length; i += 1) D(c[i]);
      (D(m), (W = !1));
    },
    d(o) {
      (o && v(t), f && f.d());
      for (let i = 0; i < c.length; i += 1) c[i].d();
      m && m.d();
    },
  };
}
const Ue = "/includes/ipod/web-music-ipod.esm.js",
  de = "web-music-ipod-script",
  K = "web-music-ipod",
  Ve = 5e3;
function fe() {
  let l;
  return Promise.race([
    customElements.whenDefined(K),
    new Promise((t, e) => {
      l = setTimeout(() => e(new Error(`Timed out waiting for ${K} to be defined`)), Ve);
    }),
  ])
    .then(() => {})
    .finally(() => clearTimeout(l));
}
function qe(l, t, e) {
  let n,
    { ipodOnly: a = !1 } = t;
  const s = be();
  Ee(l, s, (r) => e(2, (n = r)));
  const u = ke(),
    p = ye(),
    E = a
      ? { title: "ASE.Web.Music.Meta.iPod.Title", subtitle: "ASE.Web.Music.Meta.iPod.Subtitle" }
      : { title: "ASE.Web.Music.Error.NotFound.Title", subtitle: "ASE.Web.Music.Error.NotFound.Subtitle" },
    k = {
      seoData: {
        pageTitle: n.t("ASE.Web.Music.Meta.NotFound.PageTitle", { siteName: n.t("ASE.Web.Music.AppleMusic") }),
        description: n.t("ASE.Web.Music.Meta.NotFound.Description"),
        noIndex: !0,
        noFollow: !0,
      },
    },
    P = [Me, $e, we].map((r) => Object.assign(Object.assign({}, r), { url: Ie(r.url, p) }));
  function N(r) {
    return () => {
      var g;
      return u((g = r.opaqueData) === null || g === void 0 ? void 0 : g.call(r, p));
    };
  }
  let d;
  return (
    Pe(() => {
      const r = new Promise((g, O) => {
        const $ = document.getElementById(de);
        if ($) {
          const C = () => O(new Error(`Failed to load ${K} script`));
          return (
            $.addEventListener("error", C, { once: !0 }),
            fe()
              .then(g, O)
              .finally(() => $.removeEventListener("error", C))
          );
        }
        const c = document.createElement("script");
        ((c.id = de),
          (c.type = "module"),
          (c.src = Ue),
          c.addEventListener("load", () => {
            fe().then(g, O);
          }),
          c.addEventListener("error", () => {
            (c.remove(), O(new Error(`Failed to load ${K} script`)));
          }),
          document.body.appendChild(c));
      });
      (r.catch(() => {}), e(1, (d = r)));
    }),
    (l.$$set = (r) => {
      "ipodOnly" in r && e(0, (a = r.ipodOnly));
    }),
    [a, d, n, s, p, E, k, P, N]
  );
}
class Re extends me {
  constructor(t) {
    (super(), _e(this, t, qe, Ce, pe, { ipodOnly: 0 }));
  }
}
export { Re as default };
