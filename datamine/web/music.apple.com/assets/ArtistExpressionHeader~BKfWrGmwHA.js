import {
  S as fe,
  i as ue,
  n as Te,
  d,
  t as k,
  b,
  g as ee,
  c as te,
  h as D,
  G as ie,
  O as oe,
  cu as Pe,
  a as L,
  m as H,
  v as N,
  y as O,
  cv as Le,
  I as qe,
  j as B,
  e as u,
  p as A,
  q as w,
  u as j,
  J as Ce,
  w as y,
  x as z,
  K as Fe,
  k as He,
  cw as Ne,
  b1 as Oe,
  b2 as We,
  b3 as ne,
  H as _e,
  b4 as me,
  b5 as Ve,
  b6 as be,
  b7 as ge,
  b8 as ke,
  co as je,
  cx as ze,
  r as Ke,
  f as Q,
  l as ve,
  br as Me,
  z as Je,
  cy as Re,
  bK as Ue,
  cz as Ge,
  D as se,
  cA as we,
  cB as Xe,
  bq as Qe,
  T as Ye,
  X as Ze,
} from "./main.js";
import { T as xe } from "./TitleBadge~DSVYB6FS5Y.js";
function pe(i) {
  let e, t;
  return (
    (e = new xe({ props: { theme: i[3], useBreakpoint: i[2], $$slots: { default: [$e] }, $$scope: { ctx: i } } })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(r) {
        N(e.$$.fragment, r);
      },
      m(r, a) {
        (H(e, r, a), (t = !0));
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
        L(e, r);
      },
    }
  );
}
function Be(i) {
  let e, t, r, a;
  return {
    c() {
      ((e = y("a")), this.h());
    },
    l(l) {
      ((e = A(l, "A", { class: !0, href: !0, "aria-label": !0, "data-testid": !0 })), w(e).forEach(d), this.h());
    },
    h() {
      (u(e, "class", "tour-badge__link svelte-1nwwbu9"),
        u(e, "href", i[0]),
        u(e, "aria-label", i[5]),
        u(e, "data-testid", "tour-badge-link"));
    },
    m(l, n) {
      (D(l, e, n), r || ((a = He((t = Ne.call(null, e, i[1])))), (r = !0)));
    },
    p(l, n) {
      (n & 1 && u(e, "href", l[0]),
        n & 32 && u(e, "aria-label", l[5]),
        t && Oe(t.update) && n & 2 && t.update.call(null, l[1]));
    },
    d(l) {
      (l && d(e), (r = !1), a());
    },
  };
}
function $e(i) {
  let e, t, r, a, l, n, g, _;
  t = new Le({});
  let o = i[4] && Be(i);
  return {
    c() {
      ((e = y("div")),
        O(t.$$.fragment),
        (r = z()),
        (a = y("p")),
        (l = Fe(i[5])),
        (n = z()),
        o && o.c(),
        (g = ie()),
        this.h());
    },
    l(c) {
      e = A(c, "DIV", { class: !0, "aria-hidden": !0 });
      var h = w(e);
      (N(t.$$.fragment, h), h.forEach(d), (r = j(c)), (a = A(c, "P", { class: !0, "data-testid": !0 })));
      var P = w(a);
      ((l = Ce(P, i[5])), P.forEach(d), (n = j(c)), o && o.l(c), (g = ie()), this.h());
    },
    h() {
      (u(e, "class", "tour-badge__icon svelte-1nwwbu9"),
        u(e, "aria-hidden", "true"),
        u(a, "class", "tour-badge__description svelte-1nwwbu9"),
        u(a, "data-testid", "tour-badge-title"));
    },
    m(c, h) {
      (D(c, e, h), H(t, e, null), D(c, r, h), D(c, a, h), B(a, l), D(c, n, h), o && o.m(c, h), D(c, g, h), (_ = !0));
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
      (c && (d(e), d(r), d(a), d(n), d(g)), L(t), o && o.d(c));
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
      (r && r.m(a, l), D(a, e, l), (t = !0));
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
    n,
    g,
    _,
    { link: o } = e,
    { isThemed: c = !1 } = e,
    { artworkColor: h = null } = e,
    { useBreakpoint: P = !1 } = e,
    { theme: W = null } = e;
  return (
    (i.$$set = (S) => {
      ("link" in S && t(6, (o = S.link)),
        "isThemed" in S && t(7, (c = S.isThemed)),
        "artworkColor" in S && t(8, (h = S.artworkColor)),
        "useBreakpoint" in S && t(9, (P = S.useBreakpoint)),
        "theme" in S && t(10, (W = S.theme)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 64 && t(5, (r = o.title)),
        i.$$.dirty & 64 && t(1, (a = o.segue)),
        i.$$.dirty & 64 && t(0, (l = o.url)),
        i.$$.dirty & 3 && t(4, (n = !!a && !!l)),
        i.$$.dirty & 1408 && t(3, (g = W ?? (h && c ? (Pe(h) ? oe.Light : oe.Dark) : null))),
        i.$$.dirty & 1536 && t(2, (_ = P && W === null)));
    }),
    [l, a, _, g, n, r, o, c, h, P, W]
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
  for (let l = 0; l < r.length; l += 1) a = ne(a, r[l]);
  return {
    c() {
      ((e = ge("svg")), (t = ge("path")), this.h());
    },
    l(l) {
      e = be(l, "svg", { xmlns: !0, "xml:space": !0, width: !0, height: !0, viewBox: !0 });
      var n = w(e);
      ((t = be(n, "path", { d: !0 })), w(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (u(
        t,
        "d",
        "M0 70.752c0 1.954 1.709 3.516 3.809 3.516h30.713c2.148 0 3.808-1.562 3.808-3.516 0-1.904-1.66-3.418-3.808-3.418H24.317V30.616c0-2.198-1.661-3.955-3.76-3.955H4.981c-2.198 0-3.858 1.513-3.858 3.369 0 2.002 1.66 3.564 3.858 3.564h11.181v33.74H3.809c-2.1 0-3.809 1.514-3.809 3.418m18.555-57.519a6.565 6.565 0 0 0 6.592-6.592c0-3.662-2.93-6.641-6.592-6.641a6.65 6.65 0 0 0-6.641 6.641c0 3.662 2.979 6.592 6.641 6.592",
      ),
        me(e, a));
    },
    m(l, n) {
      (D(l, e, n), B(e, t));
    },
    p(l, [n]) {
      me(
        e,
        (a = Ve(r, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { "xml:space": "preserve" },
          { width: "39" },
          { height: "75" },
          { viewBox: "0 0 39 75" },
          n & 1 && l[0],
        ])),
      );
    },
    i: _e,
    o: _e,
    d(l) {
      l && d(e);
    },
  };
}
function lt(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = ne(ne({}, e), ke(r))));
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
      ((e = y("div")), this.h());
    },
    l(t) {
      ((e = A(t, "DIV", { class: !0, "aria-hidden": !0 })), w(e).forEach(d), this.h());
    },
    h() {
      (u(e, "class", "artist-expression-header__scrim-scroll svelte-1uq4byo"), u(e, "aria-hidden", "true"));
    },
    m(t, r) {
      D(t, e, r);
    },
    d(t) {
      t && d(e);
    },
  };
}
function ye(i) {
  let e, t, r;
  return (
    (t = new Ue({
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
        ((e = y("div")), O(t.$$.fragment), this.h());
      },
      l(a) {
        e = A(a, "DIV", { class: !0 });
        var l = w(e);
        (N(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artist-expression-header__cloud-buttons svelte-1uq4byo");
      },
      m(a, l) {
        (D(a, e, l), H(t, e, null), (r = !0));
      },
      p(a, l) {
        const n = {};
        (l[0] & 16384 && (n.contentDescriptor = a[14]), l[0] & 256 && (n.isPlayable = !!a[8]), t.$set(n));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), L(t));
      },
    }
  );
}
function nt(i) {
  let e, t, r, a, l, n, g;
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
    (n = new we({
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
        ((e = y("div")), (t = y("div")), O(r.$$.fragment), (a = z()), (l = y("div")), O(n.$$.fragment), this.h());
      },
      l(_) {
        e = A(_, "DIV", { class: !0 });
        var o = w(e);
        t = A(o, "DIV", { class: !0 });
        var c = w(t);
        (N(r.$$.fragment, c), c.forEach(d), (a = j(o)), (l = A(o, "DIV", { class: !0 })));
        var h = w(l);
        (N(n.$$.fragment, h), h.forEach(d), o.forEach(d), this.h());
      },
      h() {
        (u(t, "class", "artist-expression-header__circular-artwork-gradient svelte-1uq4byo"),
          u(l, "class", "artist-expression-header__circular-artwork svelte-1uq4byo"),
          u(e, "class", "artist-expression-header__circular-artwork-container svelte-1uq4byo"));
      },
      m(_, o) {
        (D(_, e, o), B(e, t), H(r, t, null), B(e, a), B(e, l), H(n, l, null), (g = !0));
      },
      p(_, o) {
        const c = {};
        (o[0] & 1 && (c.alt = _[0]), (o[0] & 32) | (o[1] & 1) && (c.$$scope = { dirty: o, ctx: _ }), r.$set(c));
        const h = {};
        (o[0] & 1 && (h.alt = _[0]), (o[0] & 33) | (o[1] & 1) && (h.$$scope = { dirty: o, ctx: _ }), n.$set(h));
      },
      i(_) {
        g || (b(r.$$.fragment, _), b(n.$$.fragment, _), (g = !0));
      },
      o(_) {
        (k(r.$$.fragment, _), k(n.$$.fragment, _), (g = !1));
      },
      d(_) {
        (_ && d(e), L(r), L(n));
      },
    }
  );
}
function st(i) {
  let e, t, r;
  return (
    (t = new se({
      props: { artwork: i[7], profile: i[18], forceFullWidth: !1, alt: i[0], lazyLoad: !1, fetchPriority: "high" },
    })),
    {
      c() {
        ((e = y("div")), O(t.$$.fragment), this.h());
      },
      l(a) {
        e = A(a, "DIV", { class: !0 });
        var l = w(e);
        (N(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artwork-container artist-expression-header__static-artwork svelte-1uq4byo");
      },
      m(a, l) {
        (D(a, e, l), H(t, e, null), (r = !0));
      },
      p(a, l) {
        const n = {};
        (l[0] & 128 && (n.artwork = a[7]), l[0] & 262144 && (n.profile = a[18]), l[0] & 1 && (n.alt = a[0]), t.$set(n));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), L(t));
      },
    }
  );
}
function ot(i) {
  let e, t;
  return (
    (e = new Ge({
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
        O(e.$$.fragment);
      },
      l(r) {
        N(e.$$.fragment, r);
      },
      m(r, a) {
        (H(e, r, a), (t = !0));
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
        L(e, r);
      },
    }
  );
}
function ft(i) {
  let e, t;
  return (
    (e = new se({ props: { artwork: i[5], profile: "facehole-uber", slot: "artwork" } })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(r) {
        N(e.$$.fragment, r);
      },
      m(r, a) {
        (H(e, r, a), (t = !0));
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
        L(e, r);
      },
    }
  );
}
function ut(i) {
  let e, t;
  return (
    (e = new se({ props: { artwork: i[5], profile: "facehole-uber", slot: "artwork", alt: i[0] } })),
    {
      c() {
        O(e.$$.fragment);
      },
      l(r) {
        N(e.$$.fragment, r);
      },
      m(r, a) {
        (H(e, r, a), (t = !0));
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
        L(e, r);
      },
    }
  );
}
function Ee(i) {
  let e, t, r;
  return {
    c() {
      ((e = y("div")), (t = z()), (r = y("div")), this.h());
    },
    l(a) {
      ((e = A(a, "DIV", { class: !0 })),
        w(e).forEach(d),
        (t = j(a)),
        (r = A(a, "DIV", { class: !0, "aria-hidden": !0 })),
        w(r).forEach(d),
        this.h());
    },
    h() {
      (u(e, "class", "artist-expression-header__artwork-tint svelte-1uq4byo"),
        u(r, "class", "artist-expression-header__blur-frame svelte-1uq4byo"),
        u(r, "aria-hidden", "true"));
    },
    m(a, l) {
      (D(a, e, l), D(a, t, l), D(a, r, l));
    },
    d(a) {
      a && (d(e), d(t), d(r));
    },
  };
}
function Se(i) {
  let e, t, r;
  const a = [i[9], { theme: oe.Dark }];
  let l = {};
  for (let n = 0; n < a.length; n += 1) l = ne(l, a[n]);
  return (
    (t = new rt({ props: l })),
    {
      c() {
        ((e = y("div")), O(t.$$.fragment), this.h());
      },
      l(n) {
        e = A(n, "DIV", { class: !0, "data-testid": !0 });
        var g = w(e);
        (N(t.$$.fragment, g), g.forEach(d), this.h());
      },
      h() {
        (u(e, "class", "artist-expression-header__badge svelte-1uq4byo"), u(e, "data-testid", "artist-badge"));
      },
      m(n, g) {
        (D(n, e, g), H(t, e, null), (r = !0));
      },
      p(n, g) {
        const _ = g[0] & 512 ? Ve(a, [Xe(n[9]), a[1]]) : {};
        t.$set(_);
      },
      i(n) {
        r || (b(t.$$.fragment, n), (r = !0));
      },
      o(n) {
        (k(t.$$.fragment, n), (r = !1));
      },
      d(n) {
        (n && d(e), L(t));
      },
    }
  );
}
function De(i) {
  let e, t, r;
  return (
    (t = new se({
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
        ((e = y("div")), O(t.$$.fragment), this.h());
      },
      l(a) {
        e = A(a, "DIV", { class: !0, "data-testid": !0, "aria-hidden": !0 });
        var l = w(e);
        (N(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (u(e, "class", "artist-expression-header__logo svelte-1uq4byo"),
          u(e, "data-testid", "artist-expression-header-logo"),
          u(e, "aria-hidden", "true"));
      },
      m(a, l) {
        (D(a, e, l), H(t, e, null), (r = !0));
      },
      p(a, l) {
        const n = {};
        (l[0] & 8 && (n.artwork = a[3]), l[0] & 1 && (n.alt = a[0]), t.$set(n));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), L(t));
      },
    }
  );
}
function Ie(i) {
  let e, t, r;
  return (
    (t = new Qe({ props: { isFavorited: i[11], enabled: i[13], filledFavorited: !0 } })),
    t.$on("toggle", i[22]),
    {
      c() {
        ((e = y("span")), O(t.$$.fragment), this.h());
      },
      l(a) {
        e = A(a, "SPAN", { class: !0 });
        var l = w(e);
        (N(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artist-expression-header__favorite-button svelte-1uq4byo");
      },
      m(a, l) {
        (D(a, e, l), H(t, e, null), (r = !0));
      },
      p(a, l) {
        const n = {};
        (l[0] & 2048 && (n.isFavorited = a[11]), l[0] & 8192 && (n.enabled = a[13]), t.$set(n));
      },
      i(a) {
        r || (b(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), L(t));
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
    n,
    g,
    _,
    o,
    c,
    h,
    P,
    W,
    S,
    V,
    F,
    K,
    M,
    U,
    q,
    J,
    G,
    Y,
    I,
    Z,
    re,
    T = i[15] && Ae(),
    v = i[14] && ye(i);
  const ae = [ot, st, nt],
    R = [];
  function le(f, m) {
    return f[6] ? 0 : f[7] ? 1 : f[5] ? 2 : -1;
  }
  ~(l = le(i)) && (n = R[l] = ae[l](i));
  let C = (i[7] || i[6]) && Ee(),
    p = i[9] && i[9].link && Se(i),
    s = i[3] && De(i);
  ((K = new it({})),
    (J = new je({
      props: { maskSvg: ze, rectWidth: 72, rectHeight: 72, maskWidth: 30, maskHeight: 30, inverted: !0 },
    })));
  let E = i[12] && Ie(i);
  return {
    c() {
      ((e = y("div")),
        T && T.c(),
        (t = z()),
        v && v.c(),
        (r = z()),
        (a = y("div")),
        n && n.c(),
        (g = z()),
        C && C.c(),
        (_ = z()),
        (o = y("div")),
        p && p.c(),
        (c = z()),
        (h = y("h1")),
        (P = Fe(i[0])),
        (W = z()),
        s && s.c(),
        (S = z()),
        (V = y("div")),
        (F = y("button")),
        O(K.$$.fragment),
        (U = z()),
        (q = y("button")),
        O(J.$$.fragment),
        (Y = z()),
        E && E.c(),
        this.h());
    },
    l(f) {
      e = A(f, "DIV", { class: !0, style: !0, "data-artwork-color": !0, "data-testid": !0 });
      var m = w(e);
      (T && T.l(m), (t = j(m)), v && v.l(m), (r = j(m)), (a = A(m, "DIV", { class: !0 })));
      var x = w(a);
      (n && n.l(x), x.forEach(d), (g = j(m)), C && C.l(m), (_ = j(m)), (o = A(m, "DIV", { class: !0 })));
      var X = w(o);
      (p && p.l(X), (c = j(X)), (h = A(X, "H1", { class: !0, "data-testid": !0 })));
      var ce = w(h);
      ((P = Ce(ce, i[0])), ce.forEach(d), (W = j(X)), s && s.l(X), (S = j(X)), (V = A(X, "DIV", { class: !0 })));
      var $ = w(V);
      F = A($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 });
      var de = w(F);
      (N(K.$$.fragment, de),
        de.forEach(d),
        (U = j($)),
        (q = A($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 })));
      var he = w(q);
      (N(J.$$.fragment, he),
        he.forEach(d),
        (Y = j($)),
        E && E.l($),
        $.forEach(d),
        X.forEach(d),
        m.forEach(d),
        this.h());
    },
    h() {
      (u(a, "class", "artist-expression-header__artwork svelte-1uq4byo"),
        u(h, "class", "artist-expression-header__name svelte-1uq4byo"),
        u(h, "data-testid", "artist-expression-header-name"),
        Q(h, "artist-expression-header__name--visually-hidden", !!i[3]),
        u(F, "class", "artist-expression-header__info-button svelte-1uq4byo"),
        u(F, "aria-label", i[2]),
        u(F, "data-testid", "artist-info-button"),
        (F.disabled = M = !i[10]),
        u(q, "class", "artist-expression-header__play-button svelte-1uq4byo"),
        u(q, "aria-label", i[1]),
        (q.disabled = G = !i[8]),
        u(q, "data-testid", "artist-play-button"),
        u(V, "class", "artist-expression-header__actions-row svelte-1uq4byo"),
        u(o, "class", "artist-expression-header__name-container svelte-1uq4byo"),
        u(e, "class", "artist-expression-header svelte-1uq4byo"),
        u(e, "style", i[17]),
        u(e, "data-artwork-color", i[4]),
        u(e, "data-testid", "artist-expression-header"),
        Q(e, "artist-expression-header--fixed", !!i[7] || !!i[6]),
        Q(e, "artist-expression-header--video", !!i[6]),
        Q(e, "artist-expression-header--no-artwork", !i[5] && !i[6] && !i[7]));
    },
    m(f, m) {
      (D(f, e, m),
        T && T.m(e, null),
        B(e, t),
        v && v.m(e, null),
        B(e, r),
        B(e, a),
        ~l && R[l].m(a, null),
        B(e, g),
        C && C.m(e, null),
        B(e, _),
        B(e, o),
        p && p.m(o, null),
        B(o, c),
        B(o, h),
        B(h, P),
        B(o, W),
        s && s.m(o, null),
        B(o, S),
        B(o, V),
        B(V, F),
        H(K, F, null),
        i[27](F),
        B(V, U),
        B(V, q),
        H(J, q, null),
        B(V, Y),
        E && E.m(V, null),
        (I = !0),
        Z || ((re = [ve(F, "click", i[21]), ve(q, "click", i[28])]), (Z = !0)));
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
          ? ~l && R[l].p(f, m)
          : (n &&
              (ee(),
              k(R[x], 1, 1, () => {
                R[x] = null;
              }),
              te()),
            ~l ? ((n = R[l]), n ? n.p(f, m) : ((n = R[l] = ae[l](f)), n.c()), b(n, 1), n.m(a, null)) : (n = null)),
        f[7] || f[6] ? C || ((C = Ee()), C.c(), C.m(e, _)) : C && (C.d(1), (C = null)),
        f[9] && f[9].link
          ? p
            ? (p.p(f, m), m[0] & 512 && b(p, 1))
            : ((p = Se(f)), p.c(), b(p, 1), p.m(o, c))
          : p &&
            (ee(),
            k(p, 1, 1, () => {
              p = null;
            }),
            te()),
        (!I || m[0] & 1) && qe(P, f[0]),
        (!I || m[0] & 8) && Q(h, "artist-expression-header__name--visually-hidden", !!f[3]),
        f[3]
          ? s
            ? (s.p(f, m), m[0] & 8 && b(s, 1))
            : ((s = De(f)), s.c(), b(s, 1), s.m(o, S))
          : s &&
            (ee(),
            k(s, 1, 1, () => {
              s = null;
            }),
            te()),
        (!I || m[0] & 4) && u(F, "aria-label", f[2]),
        (!I || (m[0] & 1024 && M !== (M = !f[10]))) && (F.disabled = M),
        (!I || m[0] & 2) && u(q, "aria-label", f[1]),
        (!I || (m[0] & 256 && G !== (G = !f[8]))) && (q.disabled = G),
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
        (!I || m[0] & 192) && Q(e, "artist-expression-header--fixed", !!f[7] || !!f[6]),
        (!I || m[0] & 64) && Q(e, "artist-expression-header--video", !!f[6]),
        (!I || m[0] & 224) && Q(e, "artist-expression-header--no-artwork", !f[5] && !f[6] && !f[7]));
    },
    i(f) {
      I || (b(v), b(n), b(p), b(s), b(K.$$.fragment, f), b(J.$$.fragment, f), b(E), (I = !0));
    },
    o(f) {
      (k(v), k(n), k(p), k(s), k(K.$$.fragment, f), k(J.$$.fragment, f), k(E), (I = !1));
    },
    d(f) {
      (f && d(e),
        T && T.d(),
        v && v.d(),
        ~l && R[l].d(),
        C && C.d(),
        p && p.d(),
        s && s.d(),
        L(K),
        i[27](null),
        L(J),
        E && E.d(),
        (Z = !1),
        Ke(re));
    },
  };
}
function dt(i, e, t) {
  let r, a, l;
  var n, g;
  const { HD_ASPECT_RATIO: _ } = Re,
    o = Me();
  let { name: c } = e,
    { ariaPlayButtonText: h } = e,
    { ariaInfoButtonLabel: P } = e,
    { logo: W = null } = e,
    { headerStyle: S = void 0 } = e,
    { fallbackImageStyle: V = void 0 } = e,
    { artworkColor: F = null } = e,
    { artwork: K = null } = e,
    { videoArtwork: M = null } = e,
    { uberArtwork: U = null } = e,
    { playAction: q = null } = e,
    { tourBadge: J = null } = e,
    { bioAction: G = null } = e,
    { isFavorited: Y = !1 } = e,
    { showFavoriteButton: I = !1 } = e,
    { enableFavoriteButton: Z = !1 } = e,
    { contentDescriptor: re = null } = e,
    { useScrollScrim: T = !1 } = e,
    v;
  const ae = Je(),
    R = () => {
      G && (Ye.set(v), o(G));
    },
    le = (s) => {
      ae("toggle-favorite", s.detail);
    };
  function C(s) {
    Ze[s ? "unshift" : "push"](() => {
      ((v = s), t(16, v));
    });
  }
  const p = () => q && o(q);
  return (
    (i.$$set = (s) => {
      ("name" in s && t(0, (c = s.name)),
        "ariaPlayButtonText" in s && t(1, (h = s.ariaPlayButtonText)),
        "ariaInfoButtonLabel" in s && t(2, (P = s.ariaInfoButtonLabel)),
        "logo" in s && t(3, (W = s.logo)),
        "headerStyle" in s && t(23, (S = s.headerStyle)),
        "fallbackImageStyle" in s && t(24, (V = s.fallbackImageStyle)),
        "artworkColor" in s && t(4, (F = s.artworkColor)),
        "artwork" in s && t(5, (K = s.artwork)),
        "videoArtwork" in s && t(6, (M = s.videoArtwork)),
        "uberArtwork" in s && t(7, (U = s.uberArtwork)),
        "playAction" in s && t(8, (q = s.playAction)),
        "tourBadge" in s && t(9, (J = s.tourBadge)),
        "bioAction" in s && t(10, (G = s.bioAction)),
        "isFavorited" in s && t(11, (Y = s.isFavorited)),
        "showFavoriteButton" in s && t(12, (I = s.showFavoriteButton)),
        "enableFavoriteButton" in s && t(13, (Z = s.enableFavoriteButton)),
        "contentDescriptor" in s && t(14, (re = s.contentDescriptor)),
        "useScrollScrim" in s && t(15, (T = s.useScrollScrim)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 33554496 &&
        t(19, (r = [[1200], _, t(25, (n = M?.cropStyle)) !== null && n !== void 0 ? n : "mv"])),
        i.$$.dirty[0] & 67108992 &&
          t(18, (a = [[1200], _, t(26, (g = U?.cropStyle)) !== null && g !== void 0 ? g : "mv"])),
        i.$$.dirty[0] & 25165824 && t(17, (l = [S, V].filter(Boolean).join(" ") || void 0)));
    }),
    [c, h, P, W, F, K, M, U, q, J, G, Y, I, Z, re, T, v, l, a, r, o, R, le, S, V, n, g, C, p]
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
