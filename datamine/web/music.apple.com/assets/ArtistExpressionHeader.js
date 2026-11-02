import {
  S as fe,
  i as ue,
  n as Te,
  J as ie,
  k as S,
  r as b,
  u as ee,
  v as k,
  w as te,
  g as d,
  cF as Pe,
  O as oe,
  c as H,
  f as L,
  m as N,
  x as O,
  cG as He,
  e as A,
  s as M,
  E as Ce,
  a as y,
  b as w,
  d as j,
  F as Fe,
  h as u,
  l as B,
  G as qe,
  p as Le,
  cH as Ne,
  bg as Oe,
  bh as We,
  bi as se,
  bj as _e,
  bk as me,
  bl as be,
  bm as Ve,
  H as ge,
  bn as ke,
  cA as Me,
  cI as je,
  t as X,
  o as ve,
  y as Je,
  aQ as ze,
  z as Ge,
  bW as Ke,
  cJ as Re,
  D as ne,
  bD as Ue,
  cK as Qe,
  T as Xe,
  X as Ye,
  cL as we,
  cM as Ze,
} from "./main.js";
import { T as xe } from "./TitleBadge.js";
function pe(i) {
  let e, t;
  return (
    (e = new xe({ props: { theme: i[3], useBreakpoint: i[2], $$slots: { default: [$e] }, $$scope: { ctx: i } } })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(r) {
        L(e.$$.fragment, r);
      },
      m(r, a) {
        (N(e, r, a), (t = !0));
      },
      p(r, a) {
        const l = {};
        (a & 8 && (l.theme = r[3]),
          a & 4 && (l.useBreakpoint = r[2]),
          a & 2099 && (l.$$scope = { dirty: a, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (b(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (k(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Be(i) {
  let e, t, r, a;
  return {
    c() {
      ((e = A("a")), this.h());
    },
    l(l) {
      ((e = y(l, "A", { class: !0, href: !0, "aria-label": !0, "data-testid": !0 })), w(e).forEach(d), this.h());
    },
    h() {
      (u(e, "class", "tour-badge__link svelte-1nwwbu9"),
        u(e, "href", i[0]),
        u(e, "aria-label", i[5]),
        u(e, "data-testid", "tour-badge-link"));
    },
    m(l, s) {
      (S(l, e, s), r || ((a = Le((t = Ne.call(null, e, i[1])))), (r = !0)));
    },
    p(l, s) {
      (s & 1 && u(e, "href", l[0]),
        s & 32 && u(e, "aria-label", l[5]),
        t && Oe(t.update) && s & 2 && t.update.call(null, l[1]));
    },
    d(l) {
      (l && d(e), (r = !1), a());
    },
  };
}
function $e(i) {
  let e, t, r, a, l, s, g, _;
  t = new He({});
  let o = i[4] && Be(i);
  return {
    c() {
      ((e = A("div")),
        H(t.$$.fragment),
        (r = M()),
        (a = A("p")),
        (l = Ce(i[5])),
        (s = M()),
        o && o.c(),
        (g = ie()),
        this.h());
    },
    l(c) {
      e = y(c, "DIV", { class: !0, "aria-hidden": !0 });
      var h = w(e);
      (L(t.$$.fragment, h), h.forEach(d), (r = j(c)), (a = y(c, "P", { class: !0, "data-testid": !0 })));
      var P = w(a);
      ((l = Fe(P, i[5])), P.forEach(d), (s = j(c)), o && o.l(c), (g = ie()), this.h());
    },
    h() {
      (u(e, "class", "tour-badge__icon svelte-1nwwbu9"),
        u(e, "aria-hidden", "true"),
        u(a, "class", "tour-badge__description svelte-1nwwbu9"),
        u(a, "data-testid", "tour-badge-title"));
    },
    m(c, h) {
      (S(c, e, h), N(t, e, null), S(c, r, h), S(c, a, h), B(a, l), S(c, s, h), o && o.m(c, h), S(c, g, h), (_ = !0));
    },
    p(c, h) {
      ((!_ || h & 32) && qe(l, c[5]),
        c[4] ? (o ? o.p(c, h) : ((o = Be(c)), o.c(), o.m(g.parentNode, g))) : o && (o.d(1), (o = null)));
    },
    i(c) {
      _ || (b(t.$$.fragment, c), (_ = !0));
    },
    o(c) {
      (k(t.$$.fragment, c), (_ = !1));
    },
    d(c) {
      (c && (d(e), d(r), d(a), d(s), d(g)), O(t), o && o.d(c));
    },
  };
}
function et(i) {
  let e,
    t,
    r = i[5] && pe(i);
  return {
    c() {
      (r && r.c(), (e = ie()));
    },
    l(a) {
      (r && r.l(a), (e = ie()));
    },
    m(a, l) {
      (r && r.m(a, l), S(a, e, l), (t = !0));
    },
    p(a, [l]) {
      a[5]
        ? r
          ? (r.p(a, l), l & 32 && b(r, 1))
          : ((r = pe(a)), r.c(), b(r, 1), r.m(e.parentNode, e))
        : r &&
          (ee(),
          k(r, 1, 1, () => {
            r = null;
          }),
          te());
    },
    i(a) {
      t || (b(r), (t = !0));
    },
    o(a) {
      (k(r), (t = !1));
    },
    d(a) {
      (a && d(e), r && r.d(a));
    },
  };
}
function tt(i, e, t) {
  let r,
    a,
    l,
    s,
    g,
    _,
    { link: o } = e,
    { isThemed: c = !1 } = e,
    { artworkColor: h = null } = e,
    { useBreakpoint: P = !1 } = e,
    { theme: W = null } = e;
  return (
    (i.$$set = (D) => {
      ("link" in D && t(6, (o = D.link)),
        "isThemed" in D && t(7, (c = D.isThemed)),
        "artworkColor" in D && t(8, (h = D.artworkColor)),
        "useBreakpoint" in D && t(9, (P = D.useBreakpoint)),
        "theme" in D && t(10, (W = D.theme)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 64 && t(5, (r = o.title)),
        i.$$.dirty & 64 && t(1, (a = o.segue)),
        i.$$.dirty & 64 && t(0, (l = o.url)),
        i.$$.dirty & 3 && t(4, (s = !!a && !!l)),
        i.$$.dirty & 1408 && t(3, (g = W ?? (h && c ? (Pe(h) ? oe.Light : oe.Dark) : null))),
        i.$$.dirty & 1536 && t(2, (_ = P && W === null)));
    }),
    [l, a, _, g, s, r, o, c, h, P, W]
  );
}
class rt extends fe {
  constructor(e) {
    (super(), ue(this, e, tt, et, Te, { link: 6, isThemed: 7, artworkColor: 8, useBreakpoint: 9, theme: 10 }));
  }
}
function at(i) {
  let e,
    t,
    r = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "39" },
      { height: "75" },
      { viewBox: "0 0 39 75" },
      i[0],
    ],
    a = {};
  for (let l = 0; l < r.length; l += 1) a = se(a, r[l]);
  return {
    c() {
      ((e = _e("svg")), (t = _e("path")), this.h());
    },
    l(l) {
      e = me(l, "svg", { xmlns: !0, "xml:space": !0, width: !0, height: !0, viewBox: !0 });
      var s = w(e);
      ((t = me(s, "path", { d: !0 })), w(t).forEach(d), s.forEach(d), this.h());
    },
    h() {
      (u(
        t,
        "d",
        "M0 70.752c0 1.954 1.709 3.516 3.809 3.516h30.713c2.148 0 3.808-1.562 3.808-3.516 0-1.904-1.66-3.418-3.808-3.418H24.317V30.616c0-2.198-1.661-3.955-3.76-3.955H4.981c-2.198 0-3.858 1.513-3.858 3.369 0 2.002 1.66 3.564 3.858 3.564h11.181v33.74H3.809c-2.1 0-3.809 1.514-3.809 3.418m18.555-57.519a6.565 6.565 0 0 0 6.592-6.592c0-3.662-2.93-6.641-6.592-6.641a6.65 6.65 0 0 0-6.641 6.641c0 3.662 2.979 6.592 6.641 6.592",
      ),
        be(e, a));
    },
    m(l, s) {
      (S(l, e, s), B(e, t));
    },
    p(l, [s]) {
      be(
        e,
        (a = Ve(r, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { "xml:space": "preserve" },
          { width: "39" },
          { height: "75" },
          { viewBox: "0 0 39 75" },
          s & 1 && l[0],
        ])),
      );
    },
    i: ge,
    o: ge,
    d(l) {
      l && d(e);
    },
  };
}
function lt(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = se(se({}, e), ke(r))));
    }),
    (e = ke(e)),
    [e]
  );
}
class it extends fe {
  constructor(e) {
    (super(), ue(this, e, lt, at, We, {}));
  }
}
function Ae(i) {
  let e;
  return {
    c() {
      ((e = A("div")), this.h());
    },
    l(t) {
      ((e = y(t, "DIV", { class: !0, "aria-hidden": !0 })), w(e).forEach(d), this.h());
    },
    h() {
      (u(e, "class", "artist-expression-header__scrim-scroll svelte-1uq4byo"), u(e, "aria-hidden", "true"));
    },
    m(t, r) {
      S(t, e, r);
    },
    d(t) {
      t && d(e);
    },
  };
}
function ye(i) {
  let e, t, r;
  return (
    (t = new Ke({
      props: {
        contentDescriptor: i[14],
        buttonStyle: "non-platter",
        isPlayable: !!i[8],
        isArtist: !0,
        hideAddToLibrary: !0,
        showShareButton: !0,
        withPlatter: !0,
      },
    })),
    {
      c() {
        ((e = A("div")), H(t.$$.fragment), this.h());
      },
      l(a) {
        e = y(a, "DIV", { class: !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artist-expression-header__cloud-buttons svelte-1uq4byo");
      },
      m(a, l) {
        (S(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 16384 && (s.contentDescriptor = a[14]), l[0] & 256 && (s.isPlayable = !!a[8]), t.$set(s));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), O(t));
      },
    }
  );
}
function st(i) {
  let e, t, r, a, l, s, g;
  return (
    (r = new we({
      props: {
        useDefaultContainerStyles: !1,
        artwork: "slot",
        title: null,
        alt: i[0],
        $$slots: { artwork: [ft] },
        $$scope: { ctx: i },
      },
    })),
    (s = new we({
      props: {
        useDefaultContainerStyles: !1,
        artwork: "slot",
        title: null,
        alt: i[0],
        $$slots: { artwork: [ut] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        ((e = A("div")), (t = A("div")), H(r.$$.fragment), (a = M()), (l = A("div")), H(s.$$.fragment), this.h());
      },
      l(_) {
        e = y(_, "DIV", { class: !0 });
        var o = w(e);
        t = y(o, "DIV", { class: !0 });
        var c = w(t);
        (L(r.$$.fragment, c), c.forEach(d), (a = j(o)), (l = y(o, "DIV", { class: !0 })));
        var h = w(l);
        (L(s.$$.fragment, h), h.forEach(d), o.forEach(d), this.h());
      },
      h() {
        (u(t, "class", "artist-expression-header__circular-artwork-gradient svelte-1uq4byo"),
          u(l, "class", "artist-expression-header__circular-artwork svelte-1uq4byo"),
          u(e, "class", "artist-expression-header__circular-artwork-container svelte-1uq4byo"));
      },
      m(_, o) {
        (S(_, e, o), B(e, t), N(r, t, null), B(e, a), B(e, l), N(s, l, null), (g = !0));
      },
      p(_, o) {
        const c = {};
        (o[0] & 1 && (c.alt = _[0]), (o[0] & 32) | (o[1] & 1) && (c.$$scope = { dirty: o, ctx: _ }), r.$set(c));
        const h = {};
        (o[0] & 1 && (h.alt = _[0]), (o[0] & 33) | (o[1] & 1) && (h.$$scope = { dirty: o, ctx: _ }), s.$set(h));
      },
      i(_) {
        g || (b(r.$$.fragment, _), b(s.$$.fragment, _), (g = !0));
      },
      o(_) {
        (k(r.$$.fragment, _), k(s.$$.fragment, _), (g = !1));
      },
      d(_) {
        (_ && d(e), O(r), O(s));
      },
    }
  );
}
function nt(i) {
  let e, t, r;
  return (
    (t = new ne({
      props: { artwork: i[7], profile: i[18], forceFullWidth: !1, alt: i[0], lazyLoad: !1, fetchPriority: "high" },
    })),
    {
      c() {
        ((e = A("div")), H(t.$$.fragment), this.h());
      },
      l(a) {
        e = y(a, "DIV", { class: !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artwork-container artist-expression-header__static-artwork svelte-1uq4byo");
      },
      m(a, l) {
        (S(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 128 && (s.artwork = a[7]), l[0] & 262144 && (s.profile = a[18]), l[0] & 1 && (s.alt = a[0]), t.$set(s));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), O(t));
      },
    }
  );
}
function ot(i) {
  let e, t;
  return (
    (e = new Ze({
      props: {
        videoArtwork: i[6],
        artwork: null,
        alt: i[0],
        profile: i[19],
        itemKind: "artistDetailHeaderLockup",
        viewportThreshold: 0,
        videoCover: !0,
      },
    })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(r) {
        L(e.$$.fragment, r);
      },
      m(r, a) {
        (N(e, r, a), (t = !0));
      },
      p(r, a) {
        const l = {};
        (a[0] & 64 && (l.videoArtwork = r[6]),
          a[0] & 1 && (l.alt = r[0]),
          a[0] & 524288 && (l.profile = r[19]),
          e.$set(l));
      },
      i(r) {
        t || (b(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (k(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function ft(i) {
  let e, t;
  return (
    (e = new ne({ props: { artwork: i[5], profile: "facehole-uber", slot: "artwork" } })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(r) {
        L(e.$$.fragment, r);
      },
      m(r, a) {
        (N(e, r, a), (t = !0));
      },
      p(r, a) {
        const l = {};
        (a[0] & 32 && (l.artwork = r[5]), e.$set(l));
      },
      i(r) {
        t || (b(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (k(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function ut(i) {
  let e, t;
  return (
    (e = new ne({ props: { artwork: i[5], profile: "facehole-uber", slot: "artwork", alt: i[0] } })),
    {
      c() {
        H(e.$$.fragment);
      },
      l(r) {
        L(e.$$.fragment, r);
      },
      m(r, a) {
        (N(e, r, a), (t = !0));
      },
      p(r, a) {
        const l = {};
        (a[0] & 32 && (l.artwork = r[5]), a[0] & 1 && (l.alt = r[0]), e.$set(l));
      },
      i(r) {
        t || (b(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (k(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Ee(i) {
  let e, t, r;
  return {
    c() {
      ((e = A("div")), (t = M()), (r = A("div")), this.h());
    },
    l(a) {
      ((e = y(a, "DIV", { class: !0 })),
        w(e).forEach(d),
        (t = j(a)),
        (r = y(a, "DIV", { class: !0, "aria-hidden": !0 })),
        w(r).forEach(d),
        this.h());
    },
    h() {
      (u(e, "class", "artist-expression-header__artwork-tint svelte-1uq4byo"),
        u(r, "class", "artist-expression-header__blur-frame svelte-1uq4byo"),
        u(r, "aria-hidden", "true"));
    },
    m(a, l) {
      (S(a, e, l), S(a, t, l), S(a, r, l));
    },
    d(a) {
      a && (d(e), d(t), d(r));
    },
  };
}
function De(i) {
  let e, t, r;
  const a = [i[9], { theme: oe.Dark }];
  let l = {};
  for (let s = 0; s < a.length; s += 1) l = se(l, a[s]);
  return (
    (t = new rt({ props: l })),
    {
      c() {
        ((e = A("div")), H(t.$$.fragment), this.h());
      },
      l(s) {
        e = y(s, "DIV", { class: !0, "data-testid": !0 });
        var g = w(e);
        (L(t.$$.fragment, g), g.forEach(d), this.h());
      },
      h() {
        (u(e, "class", "artist-expression-header__badge svelte-1uq4byo"), u(e, "data-testid", "artist-badge"));
      },
      m(s, g) {
        (S(s, e, g), N(t, e, null), (r = !0));
      },
      p(s, g) {
        const _ = g[0] & 512 ? Ve(a, [Re(s[9]), a[1]]) : {};
        t.$set(_);
      },
      i(s) {
        r || (b(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (k(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && d(e), O(t));
      },
    }
  );
}
function Se(i) {
  let e, t, r;
  return (
    (t = new ne({
      props: {
        artwork: i[3],
        profile: "artist-expression-header-logo",
        forceFullWidth: !1,
        hasTransparentBackground: !0,
        disableAutoCenter: !0,
        alt: i[0],
      },
    })),
    {
      c() {
        ((e = A("div")), H(t.$$.fragment), this.h());
      },
      l(a) {
        e = y(a, "DIV", { class: !0, "data-testid": !0, "aria-hidden": !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (u(e, "class", "artist-expression-header__logo svelte-1uq4byo"),
          u(e, "data-testid", "artist-expression-header-logo"),
          u(e, "aria-hidden", "true"));
      },
      m(a, l) {
        (S(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 8 && (s.artwork = a[3]), l[0] & 1 && (s.alt = a[0]), t.$set(s));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), O(t));
      },
    }
  );
}
function Ie(i) {
  let e, t, r;
  return (
    (t = new Ue({ props: { isFavorited: i[11], enabled: i[13], filledFavorited: !0 } })),
    t.$on("toggle", i[22]),
    {
      c() {
        ((e = A("span")), H(t.$$.fragment), this.h());
      },
      l(a) {
        e = y(a, "SPAN", { class: !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artist-expression-header__favorite-button svelte-1uq4byo");
      },
      m(a, l) {
        (S(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 2048 && (s.isFavorited = a[11]), l[0] & 8192 && (s.enabled = a[13]), t.$set(s));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), O(t));
      },
    }
  );
}
function ct(i) {
  let e,
    t,
    r,
    a,
    l,
    s,
    g,
    _,
    o,
    c,
    h,
    P,
    W,
    D,
    V,
    q,
    J,
    z,
    R,
    C,
    G,
    U,
    Y,
    I,
    Z,
    re,
    T = i[15] && Ae(),
    v = i[14] && ye(i);
  const ae = [ot, nt, st],
    K = [];
  function le(f, m) {
    return f[6] ? 0 : f[7] ? 1 : f[5] ? 2 : -1;
  }
  ~(l = le(i)) && (s = K[l] = ae[l](i));
  let F = (i[7] || i[6]) && Ee(),
    p = i[9] && i[9].link && De(i),
    n = i[3] && Se(i);
  ((J = new it({})),
    (G = new Me({
      props: { maskSvg: je, rectWidth: 72, rectHeight: 72, maskWidth: 30, maskHeight: 30, inverted: !0 },
    })));
  let E = i[12] && Ie(i);
  return {
    c() {
      ((e = A("div")),
        T && T.c(),
        (t = M()),
        v && v.c(),
        (r = M()),
        (a = A("div")),
        s && s.c(),
        (g = M()),
        F && F.c(),
        (_ = M()),
        (o = A("div")),
        p && p.c(),
        (c = M()),
        (h = A("h1")),
        (P = Ce(i[0])),
        (W = M()),
        n && n.c(),
        (D = M()),
        (V = A("div")),
        (q = A("button")),
        H(J.$$.fragment),
        (R = M()),
        (C = A("button")),
        H(G.$$.fragment),
        (Y = M()),
        E && E.c(),
        this.h());
    },
    l(f) {
      e = y(f, "DIV", { class: !0, style: !0, "data-artwork-color": !0, "data-testid": !0 });
      var m = w(e);
      (T && T.l(m), (t = j(m)), v && v.l(m), (r = j(m)), (a = y(m, "DIV", { class: !0 })));
      var x = w(a);
      (s && s.l(x), x.forEach(d), (g = j(m)), F && F.l(m), (_ = j(m)), (o = y(m, "DIV", { class: !0 })));
      var Q = w(o);
      (p && p.l(Q), (c = j(Q)), (h = y(Q, "H1", { class: !0, "data-testid": !0 })));
      var ce = w(h);
      ((P = Fe(ce, i[0])), ce.forEach(d), (W = j(Q)), n && n.l(Q), (D = j(Q)), (V = y(Q, "DIV", { class: !0 })));
      var $ = w(V);
      q = y($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 });
      var de = w(q);
      (L(J.$$.fragment, de),
        de.forEach(d),
        (R = j($)),
        (C = y($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 })));
      var he = w(C);
      (L(G.$$.fragment, he),
        he.forEach(d),
        (Y = j($)),
        E && E.l($),
        $.forEach(d),
        Q.forEach(d),
        m.forEach(d),
        this.h());
    },
    h() {
      (u(a, "class", "artist-expression-header__artwork svelte-1uq4byo"),
        u(h, "class", "artist-expression-header__name svelte-1uq4byo"),
        u(h, "data-testid", "artist-expression-header-name"),
        X(h, "artist-expression-header__name--visually-hidden", !!i[3]),
        u(q, "class", "artist-expression-header__info-button svelte-1uq4byo"),
        u(q, "aria-label", i[2]),
        u(q, "data-testid", "artist-info-button"),
        (q.disabled = z = !i[10]),
        u(C, "class", "artist-expression-header__play-button svelte-1uq4byo"),
        u(C, "aria-label", i[1]),
        (C.disabled = U = !i[8]),
        u(C, "data-testid", "artist-play-button"),
        u(V, "class", "artist-expression-header__actions-row svelte-1uq4byo"),
        u(o, "class", "artist-expression-header__name-container svelte-1uq4byo"),
        u(e, "class", "artist-expression-header svelte-1uq4byo"),
        u(e, "style", i[17]),
        u(e, "data-artwork-color", i[4]),
        u(e, "data-testid", "artist-expression-header"),
        X(e, "artist-expression-header--fixed", !!i[7] || !!i[6]),
        X(e, "artist-expression-header--video", !!i[6]),
        X(e, "artist-expression-header--no-artwork", !i[5] && !i[6] && !i[7]));
    },
    m(f, m) {
      (S(f, e, m),
        T && T.m(e, null),
        B(e, t),
        v && v.m(e, null),
        B(e, r),
        B(e, a),
        ~l && K[l].m(a, null),
        B(e, g),
        F && F.m(e, null),
        B(e, _),
        B(e, o),
        p && p.m(o, null),
        B(o, c),
        B(o, h),
        B(h, P),
        B(o, W),
        n && n.m(o, null),
        B(o, D),
        B(o, V),
        B(V, q),
        N(J, q, null),
        i[27](q),
        B(V, R),
        B(V, C),
        N(G, C, null),
        B(V, Y),
        E && E.m(V, null),
        (I = !0),
        Z || ((re = [ve(q, "click", i[21]), ve(C, "click", i[28])]), (Z = !0)));
    },
    p(f, m) {
      (f[15] ? T || ((T = Ae()), T.c(), T.m(e, t)) : T && (T.d(1), (T = null)),
        f[14]
          ? v
            ? (v.p(f, m), m[0] & 16384 && b(v, 1))
            : ((v = ye(f)), v.c(), b(v, 1), v.m(e, r))
          : v &&
            (ee(),
            k(v, 1, 1, () => {
              v = null;
            }),
            te()));
      let x = l;
      ((l = le(f)),
        l === x
          ? ~l && K[l].p(f, m)
          : (s &&
              (ee(),
              k(K[x], 1, 1, () => {
                K[x] = null;
              }),
              te()),
            ~l ? ((s = K[l]), s ? s.p(f, m) : ((s = K[l] = ae[l](f)), s.c()), b(s, 1), s.m(a, null)) : (s = null)),
        f[7] || f[6] ? F || ((F = Ee()), F.c(), F.m(e, _)) : F && (F.d(1), (F = null)),
        f[9] && f[9].link
          ? p
            ? (p.p(f, m), m[0] & 512 && b(p, 1))
            : ((p = De(f)), p.c(), b(p, 1), p.m(o, c))
          : p &&
            (ee(),
            k(p, 1, 1, () => {
              p = null;
            }),
            te()),
        (!I || m[0] & 1) && qe(P, f[0]),
        (!I || m[0] & 8) && X(h, "artist-expression-header__name--visually-hidden", !!f[3]),
        f[3]
          ? n
            ? (n.p(f, m), m[0] & 8 && b(n, 1))
            : ((n = Se(f)), n.c(), b(n, 1), n.m(o, D))
          : n &&
            (ee(),
            k(n, 1, 1, () => {
              n = null;
            }),
            te()),
        (!I || m[0] & 4) && u(q, "aria-label", f[2]),
        (!I || (m[0] & 1024 && z !== (z = !f[10]))) && (q.disabled = z),
        (!I || m[0] & 2) && u(C, "aria-label", f[1]),
        (!I || (m[0] & 256 && U !== (U = !f[8]))) && (C.disabled = U),
        f[12]
          ? E
            ? (E.p(f, m), m[0] & 4096 && b(E, 1))
            : ((E = Ie(f)), E.c(), b(E, 1), E.m(V, null))
          : E &&
            (ee(),
            k(E, 1, 1, () => {
              E = null;
            }),
            te()),
        (!I || m[0] & 131072) && u(e, "style", f[17]),
        (!I || m[0] & 16) && u(e, "data-artwork-color", f[4]),
        (!I || m[0] & 192) && X(e, "artist-expression-header--fixed", !!f[7] || !!f[6]),
        (!I || m[0] & 64) && X(e, "artist-expression-header--video", !!f[6]),
        (!I || m[0] & 224) && X(e, "artist-expression-header--no-artwork", !f[5] && !f[6] && !f[7]));
    },
    i(f) {
      I || (b(v), b(s), b(p), b(n), b(J.$$.fragment, f), b(G.$$.fragment, f), b(E), (I = !0));
    },
    o(f) {
      (k(v), k(s), k(p), k(n), k(J.$$.fragment, f), k(G.$$.fragment, f), k(E), (I = !1));
    },
    d(f) {
      (f && d(e),
        T && T.d(),
        v && v.d(),
        ~l && K[l].d(),
        F && F.d(),
        p && p.d(),
        n && n.d(),
        O(J),
        i[27](null),
        O(G),
        E && E.d(),
        (Z = !1),
        Je(re));
    },
  };
}
function dt(i, e, t) {
  let r, a, l;
  var s, g;
  const { HD_ASPECT_RATIO: _ } = Qe,
    o = ze();
  let { name: c } = e,
    { ariaPlayButtonText: h } = e,
    { ariaInfoButtonLabel: P } = e,
    { logo: W = null } = e,
    { headerStyle: D = void 0 } = e,
    { fallbackImageStyle: V = void 0 } = e,
    { artworkColor: q = null } = e,
    { artwork: J = null } = e,
    { videoArtwork: z = null } = e,
    { uberArtwork: R = null } = e,
    { playAction: C = null } = e,
    { tourBadge: G = null } = e,
    { bioAction: U = null } = e,
    { isFavorited: Y = !1 } = e,
    { showFavoriteButton: I = !1 } = e,
    { enableFavoriteButton: Z = !1 } = e,
    { contentDescriptor: re = null } = e,
    { useScrollScrim: T = !1 } = e,
    v;
  const ae = Ge(),
    K = () => {
      U && (Xe.set(v), o(U));
    },
    le = (n) => {
      ae("toggle-favorite", n.detail);
    };
  function F(n) {
    Ye[n ? "unshift" : "push"](() => {
      ((v = n), t(16, v));
    });
  }
  const p = () => C && o(C);
  return (
    (i.$$set = (n) => {
      ("name" in n && t(0, (c = n.name)),
        "ariaPlayButtonText" in n && t(1, (h = n.ariaPlayButtonText)),
        "ariaInfoButtonLabel" in n && t(2, (P = n.ariaInfoButtonLabel)),
        "logo" in n && t(3, (W = n.logo)),
        "headerStyle" in n && t(23, (D = n.headerStyle)),
        "fallbackImageStyle" in n && t(24, (V = n.fallbackImageStyle)),
        "artworkColor" in n && t(4, (q = n.artworkColor)),
        "artwork" in n && t(5, (J = n.artwork)),
        "videoArtwork" in n && t(6, (z = n.videoArtwork)),
        "uberArtwork" in n && t(7, (R = n.uberArtwork)),
        "playAction" in n && t(8, (C = n.playAction)),
        "tourBadge" in n && t(9, (G = n.tourBadge)),
        "bioAction" in n && t(10, (U = n.bioAction)),
        "isFavorited" in n && t(11, (Y = n.isFavorited)),
        "showFavoriteButton" in n && t(12, (I = n.showFavoriteButton)),
        "enableFavoriteButton" in n && t(13, (Z = n.enableFavoriteButton)),
        "contentDescriptor" in n && t(14, (re = n.contentDescriptor)),
        "useScrollScrim" in n && t(15, (T = n.useScrollScrim)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 33554496 &&
        t(19, (r = [[1200], _, t(25, (s = z?.cropStyle)) !== null && s !== void 0 ? s : "mv"])),
        i.$$.dirty[0] & 67108992 &&
          t(18, (a = [[1200], _, t(26, (g = R?.cropStyle)) !== null && g !== void 0 ? g : "mv"])),
        i.$$.dirty[0] & 25165824 && t(17, (l = [D, V].filter(Boolean).join(" ") || void 0)));
    }),
    [c, h, P, W, q, J, z, R, C, G, U, Y, I, Z, re, T, v, l, a, r, o, K, le, D, V, s, g, F, p]
  );
}
class mt extends fe {
  constructor(e) {
    (super(),
      ue(
        this,
        e,
        dt,
        ct,
        Te,
        {
          name: 0,
          ariaPlayButtonText: 1,
          ariaInfoButtonLabel: 2,
          logo: 3,
          headerStyle: 23,
          fallbackImageStyle: 24,
          artworkColor: 4,
          artwork: 5,
          videoArtwork: 6,
          uberArtwork: 7,
          playAction: 8,
          tourBadge: 9,
          bioAction: 10,
          isFavorited: 11,
          showFavoriteButton: 12,
          enableFavoriteButton: 13,
          contentDescriptor: 14,
          useScrollScrim: 15,
        },
        null,
        [-1, -1],
      ));
  }
}
export { mt as default };
