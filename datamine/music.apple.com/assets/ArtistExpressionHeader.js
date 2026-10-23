import {
  S as fe,
  i as ue,
  n as Ce,
  J as ie,
  k as I,
  r as v,
  u as ee,
  v as g,
  w as te,
  g as d,
  cF as ye,
  O as oe,
  c as H,
  f as L,
  m as N,
  x as O,
  cG as He,
  e as A,
  s as M,
  E as Fe,
  a as E,
  b as w,
  d as j,
  F as qe,
  h as u,
  l as B,
  G as Ve,
  p as Le,
  cH as Ne,
  bg as Oe,
  bh as We,
  bi as se,
  bj as _e,
  bk as me,
  bl as ve,
  bm as Pe,
  H as be,
  bn as ge,
  cA as Me,
  cI as je,
  t as X,
  o as ke,
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
        t || (v(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (g(e.$$.fragment, r), (t = !1));
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
      ((e = E(l, "A", { class: !0, href: !0, "aria-label": !0, "data-testid": !0 })), w(e).forEach(d), this.h());
    },
    h() {
      (u(e, "class", "tour-badge__link svelte-1nwwbu9"),
        u(e, "href", i[0]),
        u(e, "aria-label", i[5]),
        u(e, "data-testid", "tour-badge-link"));
    },
    m(l, s) {
      (I(l, e, s), r || ((a = Le((t = Ne.call(null, e, i[1])))), (r = !0)));
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
  let e, t, r, a, l, s, b, _;
  t = new He({});
  let o = i[4] && Be(i);
  return {
    c() {
      ((e = A("div")),
        H(t.$$.fragment),
        (r = M()),
        (a = A("p")),
        (l = Fe(i[5])),
        (s = M()),
        o && o.c(),
        (b = ie()),
        this.h());
    },
    l(c) {
      e = E(c, "DIV", { class: !0, "aria-hidden": !0 });
      var h = w(e);
      (L(t.$$.fragment, h), h.forEach(d), (r = j(c)), (a = E(c, "P", { class: !0, "data-testid": !0 })));
      var y = w(a);
      ((l = qe(y, i[5])), y.forEach(d), (s = j(c)), o && o.l(c), (b = ie()), this.h());
    },
    h() {
      (u(e, "class", "tour-badge__icon svelte-1nwwbu9"),
        u(e, "aria-hidden", "true"),
        u(a, "class", "tour-badge__description svelte-1nwwbu9"),
        u(a, "data-testid", "tour-badge-title"));
    },
    m(c, h) {
      (I(c, e, h), N(t, e, null), I(c, r, h), I(c, a, h), B(a, l), I(c, s, h), o && o.m(c, h), I(c, b, h), (_ = !0));
    },
    p(c, h) {
      ((!_ || h & 32) && Ve(l, c[5]),
        c[4] ? (o ? o.p(c, h) : ((o = Be(c)), o.c(), o.m(b.parentNode, b))) : o && (o.d(1), (o = null)));
    },
    i(c) {
      _ || (v(t.$$.fragment, c), (_ = !0));
    },
    o(c) {
      (g(t.$$.fragment, c), (_ = !1));
    },
    d(c) {
      (c && (d(e), d(r), d(a), d(s), d(b)), O(t), o && o.d(c));
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
      (r && r.m(a, l), I(a, e, l), (t = !0));
    },
    p(a, [l]) {
      a[5]
        ? r
          ? (r.p(a, l), l & 32 && v(r, 1))
          : ((r = pe(a)), r.c(), v(r, 1), r.m(e.parentNode, e))
        : r &&
          (ee(),
          g(r, 1, 1, () => {
            r = null;
          }),
          te());
    },
    i(a) {
      t || (v(r), (t = !0));
    },
    o(a) {
      (g(r), (t = !1));
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
    b,
    _,
    { link: o } = e,
    { isThemed: c = !1 } = e,
    { artworkColor: h = null } = e,
    { useBreakpoint: y = !1 } = e,
    { theme: W = null } = e;
  return (
    (i.$$set = (S) => {
      ("link" in S && t(6, (o = S.link)),
        "isThemed" in S && t(7, (c = S.isThemed)),
        "artworkColor" in S && t(8, (h = S.artworkColor)),
        "useBreakpoint" in S && t(9, (y = S.useBreakpoint)),
        "theme" in S && t(10, (W = S.theme)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 64 && t(5, (r = o.title)),
        i.$$.dirty & 64 && t(1, (a = o.segue)),
        i.$$.dirty & 64 && t(0, (l = o.url)),
        i.$$.dirty & 3 && t(4, (s = !!a && !!l)),
        i.$$.dirty & 1408 && t(3, (b = W ?? (h && c ? (ye(h) ? oe.Light : oe.Dark) : null))),
        i.$$.dirty & 1536 && t(2, (_ = y && W === null)));
    }),
    [l, a, _, b, s, r, o, c, h, y, W]
  );
}
class rt extends fe {
  constructor(e) {
    (super(), ue(this, e, tt, et, Ce, { link: 6, isThemed: 7, artworkColor: 8, useBreakpoint: 9, theme: 10 }));
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
        ve(e, a));
    },
    m(l, s) {
      (I(l, e, s), B(e, t));
    },
    p(l, [s]) {
      ve(
        e,
        (a = Pe(r, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { "xml:space": "preserve" },
          { width: "39" },
          { height: "75" },
          { viewBox: "0 0 39 75" },
          s & 1 && l[0],
        ])),
      );
    },
    i: be,
    o: be,
    d(l) {
      l && d(e);
    },
  };
}
function lt(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = se(se({}, e), ge(r))));
    }),
    (e = ge(e)),
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
      ((e = E(t, "DIV", { class: !0, "aria-hidden": !0 })), w(e).forEach(d), this.h());
    },
    h() {
      (u(e, "class", "artist-expression-header__scrim-scroll svelte-xqfvb5"), u(e, "aria-hidden", "true"));
    },
    m(t, r) {
      I(t, e, r);
    },
    d(t) {
      t && d(e);
    },
  };
}
function Ee(i) {
  let e, t, r;
  return (
    (t = new Ke({
      props: {
        contentDescriptor: i[14],
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
        e = E(a, "DIV", { class: !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artist-expression-header__cloud-buttons svelte-xqfvb5");
      },
      m(a, l) {
        (I(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 16384 && (s.contentDescriptor = a[14]), l[0] & 256 && (s.isPlayable = !!a[8]), t.$set(s));
      },
      i(a) {
        r || (v(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (g(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), O(t));
      },
    }
  );
}
function st(i) {
  let e, t, r, a, l, s, b;
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
        e = E(_, "DIV", { class: !0 });
        var o = w(e);
        t = E(o, "DIV", { class: !0 });
        var c = w(t);
        (L(r.$$.fragment, c), c.forEach(d), (a = j(o)), (l = E(o, "DIV", { class: !0 })));
        var h = w(l);
        (L(s.$$.fragment, h), h.forEach(d), o.forEach(d), this.h());
      },
      h() {
        (u(t, "class", "artist-expression-header__circular-artwork-gradient svelte-xqfvb5"),
          u(l, "class", "artist-expression-header__circular-artwork svelte-xqfvb5"),
          u(e, "class", "artist-expression-header__circular-artwork-container svelte-xqfvb5"));
      },
      m(_, o) {
        (I(_, e, o), B(e, t), N(r, t, null), B(e, a), B(e, l), N(s, l, null), (b = !0));
      },
      p(_, o) {
        const c = {};
        (o[0] & 1 && (c.alt = _[0]), (o[0] & 32) | (o[1] & 1) && (c.$$scope = { dirty: o, ctx: _ }), r.$set(c));
        const h = {};
        (o[0] & 1 && (h.alt = _[0]), (o[0] & 33) | (o[1] & 1) && (h.$$scope = { dirty: o, ctx: _ }), s.$set(h));
      },
      i(_) {
        b || (v(r.$$.fragment, _), v(s.$$.fragment, _), (b = !0));
      },
      o(_) {
        (g(r.$$.fragment, _), g(s.$$.fragment, _), (b = !1));
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
        e = E(a, "DIV", { class: !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artwork-container artist-expression-header__static-artwork svelte-xqfvb5");
      },
      m(a, l) {
        (I(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 128 && (s.artwork = a[7]), l[0] & 262144 && (s.profile = a[18]), l[0] & 1 && (s.alt = a[0]), t.$set(s));
      },
      i(a) {
        r || (v(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (g(t.$$.fragment, a), (r = !1));
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
        t || (v(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (g(e.$$.fragment, r), (t = !1));
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
        t || (v(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (g(e.$$.fragment, r), (t = !1));
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
        t || (v(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (g(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function De(i) {
  let e, t, r;
  return {
    c() {
      ((e = A("div")), (t = M()), (r = A("div")), this.h());
    },
    l(a) {
      ((e = E(a, "DIV", { class: !0 })),
        w(e).forEach(d),
        (t = j(a)),
        (r = E(a, "DIV", { class: !0, "aria-hidden": !0 })),
        w(r).forEach(d),
        this.h());
    },
    h() {
      (u(e, "class", "artist-expression-header__artwork-tint svelte-xqfvb5"),
        u(r, "class", "artist-expression-header__blur-frame svelte-xqfvb5"),
        u(r, "aria-hidden", "true"));
    },
    m(a, l) {
      (I(a, e, l), I(a, t, l), I(a, r, l));
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
  for (let s = 0; s < a.length; s += 1) l = se(l, a[s]);
  return (
    (t = new rt({ props: l })),
    {
      c() {
        ((e = A("div")), H(t.$$.fragment), this.h());
      },
      l(s) {
        e = E(s, "DIV", { class: !0, "data-testid": !0 });
        var b = w(e);
        (L(t.$$.fragment, b), b.forEach(d), this.h());
      },
      h() {
        (u(e, "class", "artist-expression-header__badge svelte-xqfvb5"), u(e, "data-testid", "artist-badge"));
      },
      m(s, b) {
        (I(s, e, b), N(t, e, null), (r = !0));
      },
      p(s, b) {
        const _ = b[0] & 512 ? Pe(a, [Re(s[9]), a[1]]) : {};
        t.$set(_);
      },
      i(s) {
        r || (v(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (g(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && d(e), O(t));
      },
    }
  );
}
function Ie(i) {
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
        e = E(a, "DIV", { class: !0, "data-testid": !0, "aria-hidden": !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (u(e, "class", "artist-expression-header__logo svelte-xqfvb5"),
          u(e, "data-testid", "artist-expression-header-logo"),
          u(e, "aria-hidden", "true"));
      },
      m(a, l) {
        (I(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 8 && (s.artwork = a[3]), l[0] & 1 && (s.alt = a[0]), t.$set(s));
      },
      i(a) {
        r || (v(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (g(t.$$.fragment, a), (r = !1));
      },
      d(a) {
        (a && d(e), O(t));
      },
    }
  );
}
function Te(i) {
  let e, t, r;
  return (
    (t = new Ue({ props: { isFavorited: i[11], enabled: i[13], filledFavorited: !0 } })),
    t.$on("toggle", i[22]),
    {
      c() {
        ((e = A("span")), H(t.$$.fragment), this.h());
      },
      l(a) {
        e = E(a, "SPAN", { class: !0 });
        var l = w(e);
        (L(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        u(e, "class", "artist-expression-header__favorite-button svelte-xqfvb5");
      },
      m(a, l) {
        (I(a, e, l), N(t, e, null), (r = !0));
      },
      p(a, l) {
        const s = {};
        (l[0] & 2048 && (s.isFavorited = a[11]), l[0] & 8192 && (s.enabled = a[13]), t.$set(s));
      },
      i(a) {
        r || (v(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        (g(t.$$.fragment, a), (r = !1));
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
    b,
    _,
    o,
    c,
    h,
    y,
    W,
    S,
    P,
    V,
    J,
    z,
    R,
    F,
    G,
    U,
    Y,
    T,
    Z,
    re,
    C = i[15] && Ae(),
    k = i[14] && Ee(i);
  const ae = [ot, nt, st],
    K = [];
  function le(f, m) {
    return f[6] ? 0 : f[7] ? 1 : f[5] ? 2 : -1;
  }
  ~(l = le(i)) && (s = K[l] = ae[l](i));
  let q = (i[7] || i[6]) && De(),
    p = i[9] && i[9].link && Se(i),
    n = i[3] && Ie(i);
  ((J = new it({})),
    (G = new Me({
      props: { maskSvg: je, rectWidth: 72, rectHeight: 72, maskWidth: 30, maskHeight: 30, inverted: !0 },
    })));
  let D = i[12] && Te(i);
  return {
    c() {
      ((e = A("div")),
        C && C.c(),
        (t = M()),
        k && k.c(),
        (r = M()),
        (a = A("div")),
        s && s.c(),
        (b = M()),
        q && q.c(),
        (_ = M()),
        (o = A("div")),
        p && p.c(),
        (c = M()),
        (h = A("h1")),
        (y = Fe(i[0])),
        (W = M()),
        n && n.c(),
        (S = M()),
        (P = A("div")),
        (V = A("button")),
        H(J.$$.fragment),
        (R = M()),
        (F = A("button")),
        H(G.$$.fragment),
        (Y = M()),
        D && D.c(),
        this.h());
    },
    l(f) {
      e = E(f, "DIV", { class: !0, style: !0, "data-artwork-color": !0, "data-testid": !0 });
      var m = w(e);
      (C && C.l(m), (t = j(m)), k && k.l(m), (r = j(m)), (a = E(m, "DIV", { class: !0 })));
      var x = w(a);
      (s && s.l(x), x.forEach(d), (b = j(m)), q && q.l(m), (_ = j(m)), (o = E(m, "DIV", { class: !0 })));
      var Q = w(o);
      (p && p.l(Q), (c = j(Q)), (h = E(Q, "H1", { class: !0, "data-testid": !0 })));
      var ce = w(h);
      ((y = qe(ce, i[0])), ce.forEach(d), (W = j(Q)), n && n.l(Q), (S = j(Q)), (P = E(Q, "DIV", { class: !0 })));
      var $ = w(P);
      V = E($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 });
      var de = w(V);
      (L(J.$$.fragment, de),
        de.forEach(d),
        (R = j($)),
        (F = E($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 })));
      var he = w(F);
      (L(G.$$.fragment, he),
        he.forEach(d),
        (Y = j($)),
        D && D.l($),
        $.forEach(d),
        Q.forEach(d),
        m.forEach(d),
        this.h());
    },
    h() {
      (u(a, "class", "artist-expression-header__artwork svelte-xqfvb5"),
        u(h, "class", "artist-expression-header__name svelte-xqfvb5"),
        u(h, "data-testid", "artist-expression-header-name"),
        X(h, "artist-expression-header__name--visually-hidden", !!i[3]),
        u(V, "class", "artist-expression-header__info-button svelte-xqfvb5"),
        u(V, "aria-label", i[2]),
        u(V, "data-testid", "artist-info-button"),
        (V.disabled = z = !i[10]),
        u(F, "class", "artist-expression-header__play-button svelte-xqfvb5"),
        u(F, "aria-label", i[1]),
        (F.disabled = U = !i[8]),
        u(F, "data-testid", "artist-play-button"),
        u(P, "class", "artist-expression-header__actions-row svelte-xqfvb5"),
        u(o, "class", "artist-expression-header__name-container svelte-xqfvb5"),
        u(e, "class", "artist-expression-header svelte-xqfvb5"),
        u(e, "style", i[17]),
        u(e, "data-artwork-color", i[4]),
        u(e, "data-testid", "artist-expression-header"),
        X(e, "artist-expression-header--fixed", !!i[7] || !!i[6]),
        X(e, "artist-expression-header--video", !!i[6]),
        X(e, "artist-expression-header--no-artwork", !i[5] && !i[6] && !i[7]));
    },
    m(f, m) {
      (I(f, e, m),
        C && C.m(e, null),
        B(e, t),
        k && k.m(e, null),
        B(e, r),
        B(e, a),
        ~l && K[l].m(a, null),
        B(e, b),
        q && q.m(e, null),
        B(e, _),
        B(e, o),
        p && p.m(o, null),
        B(o, c),
        B(o, h),
        B(h, y),
        B(o, W),
        n && n.m(o, null),
        B(o, S),
        B(o, P),
        B(P, V),
        N(J, V, null),
        i[27](V),
        B(P, R),
        B(P, F),
        N(G, F, null),
        B(P, Y),
        D && D.m(P, null),
        (T = !0),
        Z || ((re = [ke(V, "click", i[21]), ke(F, "click", i[28])]), (Z = !0)));
    },
    p(f, m) {
      (f[15] ? C || ((C = Ae()), C.c(), C.m(e, t)) : C && (C.d(1), (C = null)),
        f[14]
          ? k
            ? (k.p(f, m), m[0] & 16384 && v(k, 1))
            : ((k = Ee(f)), k.c(), v(k, 1), k.m(e, r))
          : k &&
            (ee(),
            g(k, 1, 1, () => {
              k = null;
            }),
            te()));
      let x = l;
      ((l = le(f)),
        l === x
          ? ~l && K[l].p(f, m)
          : (s &&
              (ee(),
              g(K[x], 1, 1, () => {
                K[x] = null;
              }),
              te()),
            ~l ? ((s = K[l]), s ? s.p(f, m) : ((s = K[l] = ae[l](f)), s.c()), v(s, 1), s.m(a, null)) : (s = null)),
        f[7] || f[6] ? q || ((q = De()), q.c(), q.m(e, _)) : q && (q.d(1), (q = null)),
        f[9] && f[9].link
          ? p
            ? (p.p(f, m), m[0] & 512 && v(p, 1))
            : ((p = Se(f)), p.c(), v(p, 1), p.m(o, c))
          : p &&
            (ee(),
            g(p, 1, 1, () => {
              p = null;
            }),
            te()),
        (!T || m[0] & 1) && Ve(y, f[0]),
        (!T || m[0] & 8) && X(h, "artist-expression-header__name--visually-hidden", !!f[3]),
        f[3]
          ? n
            ? (n.p(f, m), m[0] & 8 && v(n, 1))
            : ((n = Ie(f)), n.c(), v(n, 1), n.m(o, S))
          : n &&
            (ee(),
            g(n, 1, 1, () => {
              n = null;
            }),
            te()),
        (!T || m[0] & 4) && u(V, "aria-label", f[2]),
        (!T || (m[0] & 1024 && z !== (z = !f[10]))) && (V.disabled = z),
        (!T || m[0] & 2) && u(F, "aria-label", f[1]),
        (!T || (m[0] & 256 && U !== (U = !f[8]))) && (F.disabled = U),
        f[12]
          ? D
            ? (D.p(f, m), m[0] & 4096 && v(D, 1))
            : ((D = Te(f)), D.c(), v(D, 1), D.m(P, null))
          : D &&
            (ee(),
            g(D, 1, 1, () => {
              D = null;
            }),
            te()),
        (!T || m[0] & 131072) && u(e, "style", f[17]),
        (!T || m[0] & 16) && u(e, "data-artwork-color", f[4]),
        (!T || m[0] & 192) && X(e, "artist-expression-header--fixed", !!f[7] || !!f[6]),
        (!T || m[0] & 64) && X(e, "artist-expression-header--video", !!f[6]),
        (!T || m[0] & 224) && X(e, "artist-expression-header--no-artwork", !f[5] && !f[6] && !f[7]));
    },
    i(f) {
      T || (v(k), v(s), v(p), v(n), v(J.$$.fragment, f), v(G.$$.fragment, f), v(D), (T = !0));
    },
    o(f) {
      (g(k), g(s), g(p), g(n), g(J.$$.fragment, f), g(G.$$.fragment, f), g(D), (T = !1));
    },
    d(f) {
      (f && d(e),
        C && C.d(),
        k && k.d(),
        ~l && K[l].d(),
        q && q.d(),
        p && p.d(),
        n && n.d(),
        O(J),
        i[27](null),
        O(G),
        D && D.d(),
        (Z = !1),
        Je(re));
    },
  };
}
function dt(i, e, t) {
  let r, a, l;
  var s, b;
  const { HD_ASPECT_RATIO: _ } = Qe,
    o = ze();
  let { name: c } = e,
    { ariaPlayButtonText: h } = e,
    { ariaInfoButtonLabel: y } = e,
    { logo: W = null } = e,
    { headerStyle: S = void 0 } = e,
    { fallbackImageStyle: P = void 0 } = e,
    { artworkColor: V = null } = e,
    { artwork: J = null } = e,
    { videoArtwork: z = null } = e,
    { uberArtwork: R = null } = e,
    { playAction: F = null } = e,
    { tourBadge: G = null } = e,
    { bioAction: U = null } = e,
    { isFavorited: Y = !1 } = e,
    { showFavoriteButton: T = !1 } = e,
    { enableFavoriteButton: Z = !1 } = e,
    { contentDescriptor: re = null } = e,
    { useScrollScrim: C = !1 } = e,
    k;
  const ae = Ge(),
    K = () => {
      U && (Xe.set(k), o(U));
    },
    le = (n) => {
      ae("toggle-favorite", n.detail);
    };
  function q(n) {
    Ye[n ? "unshift" : "push"](() => {
      ((k = n), t(16, k));
    });
  }
  const p = () => F && o(F);
  return (
    (i.$$set = (n) => {
      ("name" in n && t(0, (c = n.name)),
        "ariaPlayButtonText" in n && t(1, (h = n.ariaPlayButtonText)),
        "ariaInfoButtonLabel" in n && t(2, (y = n.ariaInfoButtonLabel)),
        "logo" in n && t(3, (W = n.logo)),
        "headerStyle" in n && t(23, (S = n.headerStyle)),
        "fallbackImageStyle" in n && t(24, (P = n.fallbackImageStyle)),
        "artworkColor" in n && t(4, (V = n.artworkColor)),
        "artwork" in n && t(5, (J = n.artwork)),
        "videoArtwork" in n && t(6, (z = n.videoArtwork)),
        "uberArtwork" in n && t(7, (R = n.uberArtwork)),
        "playAction" in n && t(8, (F = n.playAction)),
        "tourBadge" in n && t(9, (G = n.tourBadge)),
        "bioAction" in n && t(10, (U = n.bioAction)),
        "isFavorited" in n && t(11, (Y = n.isFavorited)),
        "showFavoriteButton" in n && t(12, (T = n.showFavoriteButton)),
        "enableFavoriteButton" in n && t(13, (Z = n.enableFavoriteButton)),
        "contentDescriptor" in n && t(14, (re = n.contentDescriptor)),
        "useScrollScrim" in n && t(15, (C = n.useScrollScrim)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 33554496 &&
        t(19, (r = [[1200], _, t(25, (s = z?.cropStyle)) !== null && s !== void 0 ? s : "mv"])),
        i.$$.dirty[0] & 67108992 &&
          t(18, (a = [[1200], _, t(26, (b = R?.cropStyle)) !== null && b !== void 0 ? b : "mv"])),
        i.$$.dirty[0] & 25165824 && t(17, (l = [S, P].filter(Boolean).join(" ") || void 0)));
    }),
    [c, h, y, W, V, J, z, R, F, G, U, Y, T, Z, re, C, k, l, a, r, o, K, le, S, P, s, b, q, p]
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
        Ce,
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
