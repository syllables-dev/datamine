import {
  S as Ae,
  i as Ee,
  bI as De,
  bJ as ie,
  bK as ue,
  bL as de,
  b as p,
  g as c,
  h as f,
  bM as ce,
  k as V,
  l as w,
  bN as Se,
  H as he,
  bO as _e,
  n as Ie,
  d3 as qe,
  d8 as Fe,
  e as S,
  s as O,
  E as Te,
  c as P,
  a as D,
  d as M,
  F as Ce,
  f as H,
  t as G,
  m as y,
  o as ve,
  r as _,
  u as te,
  v as g,
  w as re,
  G as Ve,
  x as L,
  y as Pe,
  c5 as He,
  z as ye,
  co as Le,
  O as Oe,
  d9 as Me,
  da as Ne,
  D as se,
  c4 as We,
  db as Ue,
  U as je,
  Y as ze,
  dc as me,
  dd as Je,
} from "./main.js";
function Ke(i) {
  let e,
    t,
    a = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "39" },
      { height: "75" },
      { viewBox: "0 0 39 75" },
      i[0],
    ],
    r = {};
  for (let l = 0; l < a.length; l += 1) r = ie(r, a[l]);
  return {
    c() {
      ((e = ue("svg")), (t = ue("path")), this.h());
    },
    l(l) {
      e = de(l, "svg", { xmlns: !0, "xml:space": !0, width: !0, height: !0, viewBox: !0 });
      var s = p(e);
      ((t = de(s, "path", { d: !0 })), p(t).forEach(c), s.forEach(c), this.h());
    },
    h() {
      (f(
        t,
        "d",
        "M0 70.752c0 1.954 1.709 3.516 3.809 3.516h30.713c2.148 0 3.808-1.562 3.808-3.516 0-1.904-1.66-3.418-3.808-3.418H24.317V30.616c0-2.198-1.661-3.955-3.76-3.955H4.981c-2.198 0-3.858 1.513-3.858 3.369 0 2.002 1.66 3.564 3.858 3.564h11.181v33.74H3.809c-2.1 0-3.809 1.514-3.809 3.418m18.555-57.519a6.565 6.565 0 0 0 6.592-6.592c0-3.662-2.93-6.641-6.592-6.641a6.65 6.65 0 0 0-6.641 6.641c0 3.662 2.979 6.592 6.641 6.592",
      ),
        ce(e, r));
    },
    m(l, s) {
      (V(l, e, s), w(e, t));
    },
    p(l, [s]) {
      ce(
        e,
        (r = Se(a, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { "xml:space": "preserve" },
          { width: "39" },
          { height: "75" },
          { viewBox: "0 0 39 75" },
          s & 1 && l[0],
        ])),
      );
    },
    i: he,
    o: he,
    d(l) {
      l && c(e);
    },
  };
}
function Re(i, e, t) {
  return (
    (i.$$set = (a) => {
      t(0, (e = ie(ie({}, e), _e(a))));
    }),
    (e = _e(e)),
    [e]
  );
}
class Ge extends Ae {
  constructor(e) {
    (super(), Ee(this, e, Re, Ke, De, {}));
  }
}
function ge(i) {
  let e;
  return {
    c() {
      ((e = S("div")), this.h());
    },
    l(t) {
      ((e = D(t, "DIV", { class: !0, "aria-hidden": !0 })), p(e).forEach(c), this.h());
    },
    h() {
      (f(e, "class", "artist-expression-header__scrim-scroll svelte-xqfvb5"), f(e, "aria-hidden", "true"));
    },
    m(t, a) {
      V(t, e, a);
    },
    d(t) {
      t && c(e);
    },
  };
}
function be(i) {
  let e, t, a;
  return (
    (t = new Le({
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
        ((e = S("div")), P(t.$$.fragment), this.h());
      },
      l(r) {
        e = D(r, "DIV", { class: !0 });
        var l = p(e);
        (H(t.$$.fragment, l), l.forEach(c), this.h());
      },
      h() {
        f(e, "class", "artist-expression-header__cloud-buttons svelte-xqfvb5");
      },
      m(r, l) {
        (V(r, e, l), y(t, e, null), (a = !0));
      },
      p(r, l) {
        const s = {};
        (l[0] & 16384 && (s.contentDescriptor = r[14]), l[0] & 256 && (s.isPlayable = !!r[8]), t.$set(s));
      },
      i(r) {
        a || (_(t.$$.fragment, r), (a = !0));
      },
      o(r) {
        (g(t.$$.fragment, r), (a = !1));
      },
      d(r) {
        (r && c(e), L(t));
      },
    }
  );
}
function Ye(i) {
  let e, t, a, r, l, s, b;
  return (
    (a = new me({
      props: {
        useDefaultContainerStyles: !1,
        artwork: "slot",
        title: null,
        alt: i[0],
        $$slots: { artwork: [Ze] },
        $$scope: { ctx: i },
      },
    })),
    (s = new me({
      props: {
        useDefaultContainerStyles: !1,
        artwork: "slot",
        title: null,
        alt: i[0],
        $$slots: { artwork: [xe] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        ((e = S("div")), (t = S("div")), P(a.$$.fragment), (r = O()), (l = S("div")), P(s.$$.fragment), this.h());
      },
      l(h) {
        e = D(h, "DIV", { class: !0 });
        var d = p(e);
        t = D(d, "DIV", { class: !0 });
        var C = p(t);
        (H(a.$$.fragment, C), C.forEach(c), (r = M(d)), (l = D(d, "DIV", { class: !0 })));
        var B = p(l);
        (H(s.$$.fragment, B), B.forEach(c), d.forEach(c), this.h());
      },
      h() {
        (f(t, "class", "artist-expression-header__circular-artwork-gradient svelte-xqfvb5"),
          f(l, "class", "artist-expression-header__circular-artwork svelte-xqfvb5"),
          f(e, "class", "artist-expression-header__circular-artwork-container svelte-xqfvb5"));
      },
      m(h, d) {
        (V(h, e, d), w(e, t), y(a, t, null), w(e, r), w(e, l), y(s, l, null), (b = !0));
      },
      p(h, d) {
        const C = {};
        (d[0] & 1 && (C.alt = h[0]), (d[0] & 32) | (d[1] & 1) && (C.$$scope = { dirty: d, ctx: h }), a.$set(C));
        const B = {};
        (d[0] & 1 && (B.alt = h[0]), (d[0] & 33) | (d[1] & 1) && (B.$$scope = { dirty: d, ctx: h }), s.$set(B));
      },
      i(h) {
        b || (_(a.$$.fragment, h), _(s.$$.fragment, h), (b = !0));
      },
      o(h) {
        (g(a.$$.fragment, h), g(s.$$.fragment, h), (b = !1));
      },
      d(h) {
        (h && c(e), L(a), L(s));
      },
    }
  );
}
function Qe(i) {
  let e, t, a;
  return (
    (t = new se({
      props: { artwork: i[7], profile: i[18], forceFullWidth: !1, alt: i[0], lazyLoad: !1, fetchPriority: "high" },
    })),
    {
      c() {
        ((e = S("div")), P(t.$$.fragment), this.h());
      },
      l(r) {
        e = D(r, "DIV", { class: !0 });
        var l = p(e);
        (H(t.$$.fragment, l), l.forEach(c), this.h());
      },
      h() {
        f(e, "class", "artwork-container artist-expression-header__static-artwork svelte-xqfvb5");
      },
      m(r, l) {
        (V(r, e, l), y(t, e, null), (a = !0));
      },
      p(r, l) {
        const s = {};
        (l[0] & 128 && (s.artwork = r[7]), l[0] & 262144 && (s.profile = r[18]), l[0] & 1 && (s.alt = r[0]), t.$set(s));
      },
      i(r) {
        a || (_(t.$$.fragment, r), (a = !0));
      },
      o(r) {
        (g(t.$$.fragment, r), (a = !1));
      },
      d(r) {
        (r && c(e), L(t));
      },
    }
  );
}
function Xe(i) {
  let e, t;
  return (
    (e = new Je({
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
        P(e.$$.fragment);
      },
      l(a) {
        H(e.$$.fragment, a);
      },
      m(a, r) {
        (y(e, a, r), (t = !0));
      },
      p(a, r) {
        const l = {};
        (r[0] & 64 && (l.videoArtwork = a[6]),
          r[0] & 1 && (l.alt = a[0]),
          r[0] & 524288 && (l.profile = a[19]),
          e.$set(l));
      },
      i(a) {
        t || (_(e.$$.fragment, a), (t = !0));
      },
      o(a) {
        (g(e.$$.fragment, a), (t = !1));
      },
      d(a) {
        L(e, a);
      },
    }
  );
}
function Ze(i) {
  let e, t;
  return (
    (e = new se({ props: { artwork: i[5], profile: "facehole-uber", slot: "artwork" } })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(a) {
        H(e.$$.fragment, a);
      },
      m(a, r) {
        (y(e, a, r), (t = !0));
      },
      p(a, r) {
        const l = {};
        (r[0] & 32 && (l.artwork = a[5]), e.$set(l));
      },
      i(a) {
        t || (_(e.$$.fragment, a), (t = !0));
      },
      o(a) {
        (g(e.$$.fragment, a), (t = !1));
      },
      d(a) {
        L(e, a);
      },
    }
  );
}
function xe(i) {
  let e, t;
  return (
    (e = new se({ props: { artwork: i[5], profile: "facehole-uber", slot: "artwork", alt: i[0] } })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(a) {
        H(e.$$.fragment, a);
      },
      m(a, r) {
        (y(e, a, r), (t = !0));
      },
      p(a, r) {
        const l = {};
        (r[0] & 32 && (l.artwork = a[5]), r[0] & 1 && (l.alt = a[0]), e.$set(l));
      },
      i(a) {
        t || (_(e.$$.fragment, a), (t = !0));
      },
      o(a) {
        (g(e.$$.fragment, a), (t = !1));
      },
      d(a) {
        L(e, a);
      },
    }
  );
}
function ke(i) {
  let e, t, a;
  return {
    c() {
      ((e = S("div")), (t = O()), (a = S("div")), this.h());
    },
    l(r) {
      ((e = D(r, "DIV", { class: !0 })),
        p(e).forEach(c),
        (t = M(r)),
        (a = D(r, "DIV", { class: !0, "aria-hidden": !0 })),
        p(a).forEach(c),
        this.h());
    },
    h() {
      (f(e, "class", "artist-expression-header__artwork-tint svelte-xqfvb5"),
        f(a, "class", "artist-expression-header__blur-frame svelte-xqfvb5"),
        f(a, "aria-hidden", "true"));
    },
    m(r, l) {
      (V(r, e, l), V(r, t, l), V(r, a, l));
    },
    d(r) {
      r && (c(e), c(t), c(a));
    },
  };
}
function we(i) {
  let e, t, a;
  const r = [i[9], { theme: Oe.Dark }];
  let l = {};
  for (let s = 0; s < r.length; s += 1) l = ie(l, r[s]);
  return (
    (t = new Me({ props: l })),
    {
      c() {
        ((e = S("div")), P(t.$$.fragment), this.h());
      },
      l(s) {
        e = D(s, "DIV", { class: !0, "data-testid": !0 });
        var b = p(e);
        (H(t.$$.fragment, b), b.forEach(c), this.h());
      },
      h() {
        (f(e, "class", "artist-expression-header__badge svelte-xqfvb5"), f(e, "data-testid", "artist-badge"));
      },
      m(s, b) {
        (V(s, e, b), y(t, e, null), (a = !0));
      },
      p(s, b) {
        const h = b[0] & 512 ? Se(r, [Ne(s[9]), r[1]]) : {};
        t.$set(h);
      },
      i(s) {
        a || (_(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        (g(t.$$.fragment, s), (a = !1));
      },
      d(s) {
        (s && c(e), L(t));
      },
    }
  );
}
function pe(i) {
  let e, t, a;
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
        ((e = S("div")), P(t.$$.fragment), this.h());
      },
      l(r) {
        e = D(r, "DIV", { class: !0, "data-testid": !0, "aria-hidden": !0 });
        var l = p(e);
        (H(t.$$.fragment, l), l.forEach(c), this.h());
      },
      h() {
        (f(e, "class", "artist-expression-header__logo svelte-xqfvb5"),
          f(e, "data-testid", "artist-expression-header-logo"),
          f(e, "aria-hidden", "true"));
      },
      m(r, l) {
        (V(r, e, l), y(t, e, null), (a = !0));
      },
      p(r, l) {
        const s = {};
        (l[0] & 8 && (s.artwork = r[3]), l[0] & 1 && (s.alt = r[0]), t.$set(s));
      },
      i(r) {
        a || (_(t.$$.fragment, r), (a = !0));
      },
      o(r) {
        (g(t.$$.fragment, r), (a = !1));
      },
      d(r) {
        (r && c(e), L(t));
      },
    }
  );
}
function Be(i) {
  let e, t, a;
  return (
    (t = new We({ props: { isFavorited: i[11], enabled: i[13], filledFavorited: !0 } })),
    t.$on("toggle", i[22]),
    {
      c() {
        ((e = S("span")), P(t.$$.fragment), this.h());
      },
      l(r) {
        e = D(r, "SPAN", { class: !0 });
        var l = p(e);
        (H(t.$$.fragment, l), l.forEach(c), this.h());
      },
      h() {
        f(e, "class", "artist-expression-header__favorite-button svelte-xqfvb5");
      },
      m(r, l) {
        (V(r, e, l), y(t, e, null), (a = !0));
      },
      p(r, l) {
        const s = {};
        (l[0] & 2048 && (s.isFavorited = r[11]), l[0] & 8192 && (s.enabled = r[13]), t.$set(s));
      },
      i(r) {
        a || (_(t.$$.fragment, r), (a = !0));
      },
      o(r) {
        (g(t.$$.fragment, r), (a = !1));
      },
      d(r) {
        (r && c(e), L(t));
      },
    }
  );
}
function $e(i) {
  let e,
    t,
    a,
    r,
    l,
    s,
    b,
    h,
    d,
    C,
    B,
    Y,
    Q,
    K,
    T,
    F,
    N,
    W,
    z,
    I,
    U,
    J,
    X,
    A,
    Z,
    ee,
    E = i[15] && ge(),
    v = i[14] && be(i);
  const ae = [Xe, Qe, Ye],
    j = [];
  function le(o, u) {
    return o[6] ? 0 : o[7] ? 1 : o[5] ? 2 : -1;
  }
  ~(l = le(i)) && (s = j[l] = ae[l](i));
  let q = (i[7] || i[6]) && ke(),
    m = i[9] && i[9].link && we(i),
    n = i[3] && pe(i);
  ((N = new Ge({})),
    (U = new qe({
      props: { maskSvg: Fe, rectWidth: 72, rectHeight: 72, maskWidth: 30, maskHeight: 30, inverted: !0 },
    })));
  let k = i[12] && Be(i);
  return {
    c() {
      ((e = S("div")),
        E && E.c(),
        (t = O()),
        v && v.c(),
        (a = O()),
        (r = S("div")),
        s && s.c(),
        (b = O()),
        q && q.c(),
        (h = O()),
        (d = S("div")),
        m && m.c(),
        (C = O()),
        (B = S("h1")),
        (Y = Te(i[0])),
        (Q = O()),
        n && n.c(),
        (K = O()),
        (T = S("div")),
        (F = S("button")),
        P(N.$$.fragment),
        (z = O()),
        (I = S("button")),
        P(U.$$.fragment),
        (X = O()),
        k && k.c(),
        this.h());
    },
    l(o) {
      e = D(o, "DIV", { class: !0, style: !0, "data-artwork-color": !0, "data-testid": !0 });
      var u = p(e);
      (E && E.l(u), (t = M(u)), v && v.l(u), (a = M(u)), (r = D(u, "DIV", { class: !0 })));
      var x = p(r);
      (s && s.l(x), x.forEach(c), (b = M(u)), q && q.l(u), (h = M(u)), (d = D(u, "DIV", { class: !0 })));
      var R = p(d);
      (m && m.l(R), (C = M(R)), (B = D(R, "H1", { class: !0, "data-testid": !0 })));
      var ne = p(B);
      ((Y = Ce(ne, i[0])), ne.forEach(c), (Q = M(R)), n && n.l(R), (K = M(R)), (T = D(R, "DIV", { class: !0 })));
      var $ = p(T);
      F = D($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 });
      var oe = p(F);
      (H(N.$$.fragment, oe),
        oe.forEach(c),
        (z = M($)),
        (I = D($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 })));
      var fe = p(I);
      (H(U.$$.fragment, fe),
        fe.forEach(c),
        (X = M($)),
        k && k.l($),
        $.forEach(c),
        R.forEach(c),
        u.forEach(c),
        this.h());
    },
    h() {
      (f(r, "class", "artist-expression-header__artwork svelte-xqfvb5"),
        f(B, "class", "artist-expression-header__name svelte-xqfvb5"),
        f(B, "data-testid", "artist-expression-header-name"),
        G(B, "artist-expression-header__name--visually-hidden", !!i[3]),
        f(F, "class", "artist-expression-header__info-button svelte-xqfvb5"),
        f(F, "aria-label", i[2]),
        f(F, "data-testid", "artist-info-button"),
        (F.disabled = W = !i[10]),
        f(I, "class", "artist-expression-header__play-button svelte-xqfvb5"),
        f(I, "aria-label", i[1]),
        (I.disabled = J = !i[8]),
        f(I, "data-testid", "artist-play-button"),
        f(T, "class", "artist-expression-header__actions-row svelte-xqfvb5"),
        f(d, "class", "artist-expression-header__name-container svelte-xqfvb5"),
        f(e, "class", "artist-expression-header svelte-xqfvb5"),
        f(e, "style", i[17]),
        f(e, "data-artwork-color", i[4]),
        f(e, "data-testid", "artist-expression-header"),
        G(e, "artist-expression-header--fixed", !!i[7] || !!i[6]),
        G(e, "artist-expression-header--video", !!i[6]),
        G(e, "artist-expression-header--no-artwork", !i[5] && !i[6] && !i[7]));
    },
    m(o, u) {
      (V(o, e, u),
        E && E.m(e, null),
        w(e, t),
        v && v.m(e, null),
        w(e, a),
        w(e, r),
        ~l && j[l].m(r, null),
        w(e, b),
        q && q.m(e, null),
        w(e, h),
        w(e, d),
        m && m.m(d, null),
        w(d, C),
        w(d, B),
        w(B, Y),
        w(d, Q),
        n && n.m(d, null),
        w(d, K),
        w(d, T),
        w(T, F),
        y(N, F, null),
        i[27](F),
        w(T, z),
        w(T, I),
        y(U, I, null),
        w(T, X),
        k && k.m(T, null),
        (A = !0),
        Z || ((ee = [ve(F, "click", i[21]), ve(I, "click", i[28])]), (Z = !0)));
    },
    p(o, u) {
      (o[15] ? E || ((E = ge()), E.c(), E.m(e, t)) : E && (E.d(1), (E = null)),
        o[14]
          ? v
            ? (v.p(o, u), u[0] & 16384 && _(v, 1))
            : ((v = be(o)), v.c(), _(v, 1), v.m(e, a))
          : v &&
            (te(),
            g(v, 1, 1, () => {
              v = null;
            }),
            re()));
      let x = l;
      ((l = le(o)),
        l === x
          ? ~l && j[l].p(o, u)
          : (s &&
              (te(),
              g(j[x], 1, 1, () => {
                j[x] = null;
              }),
              re()),
            ~l ? ((s = j[l]), s ? s.p(o, u) : ((s = j[l] = ae[l](o)), s.c()), _(s, 1), s.m(r, null)) : (s = null)),
        o[7] || o[6] ? q || ((q = ke()), q.c(), q.m(e, h)) : q && (q.d(1), (q = null)),
        o[9] && o[9].link
          ? m
            ? (m.p(o, u), u[0] & 512 && _(m, 1))
            : ((m = we(o)), m.c(), _(m, 1), m.m(d, C))
          : m &&
            (te(),
            g(m, 1, 1, () => {
              m = null;
            }),
            re()),
        (!A || u[0] & 1) && Ve(Y, o[0]),
        (!A || u[0] & 8) && G(B, "artist-expression-header__name--visually-hidden", !!o[3]),
        o[3]
          ? n
            ? (n.p(o, u), u[0] & 8 && _(n, 1))
            : ((n = pe(o)), n.c(), _(n, 1), n.m(d, K))
          : n &&
            (te(),
            g(n, 1, 1, () => {
              n = null;
            }),
            re()),
        (!A || u[0] & 4) && f(F, "aria-label", o[2]),
        (!A || (u[0] & 1024 && W !== (W = !o[10]))) && (F.disabled = W),
        (!A || u[0] & 2) && f(I, "aria-label", o[1]),
        (!A || (u[0] & 256 && J !== (J = !o[8]))) && (I.disabled = J),
        o[12]
          ? k
            ? (k.p(o, u), u[0] & 4096 && _(k, 1))
            : ((k = Be(o)), k.c(), _(k, 1), k.m(T, null))
          : k &&
            (te(),
            g(k, 1, 1, () => {
              k = null;
            }),
            re()),
        (!A || u[0] & 131072) && f(e, "style", o[17]),
        (!A || u[0] & 16) && f(e, "data-artwork-color", o[4]),
        (!A || u[0] & 192) && G(e, "artist-expression-header--fixed", !!o[7] || !!o[6]),
        (!A || u[0] & 64) && G(e, "artist-expression-header--video", !!o[6]),
        (!A || u[0] & 224) && G(e, "artist-expression-header--no-artwork", !o[5] && !o[6] && !o[7]));
    },
    i(o) {
      A || (_(v), _(s), _(m), _(n), _(N.$$.fragment, o), _(U.$$.fragment, o), _(k), (A = !0));
    },
    o(o) {
      (g(v), g(s), g(m), g(n), g(N.$$.fragment, o), g(U.$$.fragment, o), g(k), (A = !1));
    },
    d(o) {
      (o && c(e),
        E && E.d(),
        v && v.d(),
        ~l && j[l].d(),
        q && q.d(),
        m && m.d(),
        n && n.d(),
        L(N),
        i[27](null),
        L(U),
        k && k.d(),
        (Z = !1),
        Pe(ee));
    },
  };
}
function et(i, e, t) {
  let a, r, l;
  var s, b;
  const { HD_ASPECT_RATIO: h } = Ue,
    d = He();
  let { name: C } = e,
    { ariaPlayButtonText: B } = e,
    { ariaInfoButtonLabel: Y } = e,
    { logo: Q = null } = e,
    { headerStyle: K = void 0 } = e,
    { fallbackImageStyle: T = void 0 } = e,
    { artworkColor: F = null } = e,
    { artwork: N = null } = e,
    { videoArtwork: W = null } = e,
    { uberArtwork: z = null } = e,
    { playAction: I = null } = e,
    { tourBadge: U = null } = e,
    { bioAction: J = null } = e,
    { isFavorited: X = !1 } = e,
    { showFavoriteButton: A = !1 } = e,
    { enableFavoriteButton: Z = !1 } = e,
    { contentDescriptor: ee = null } = e,
    { useScrollScrim: E = !1 } = e,
    v;
  const ae = ye(),
    j = () => {
      J && (je.set(v), d(J));
    },
    le = (n) => {
      ae("toggle-favorite", n.detail);
    };
  function q(n) {
    ze[n ? "unshift" : "push"](() => {
      ((v = n), t(16, v));
    });
  }
  const m = () => I && d(I);
  return (
    (i.$$set = (n) => {
      ("name" in n && t(0, (C = n.name)),
        "ariaPlayButtonText" in n && t(1, (B = n.ariaPlayButtonText)),
        "ariaInfoButtonLabel" in n && t(2, (Y = n.ariaInfoButtonLabel)),
        "logo" in n && t(3, (Q = n.logo)),
        "headerStyle" in n && t(23, (K = n.headerStyle)),
        "fallbackImageStyle" in n && t(24, (T = n.fallbackImageStyle)),
        "artworkColor" in n && t(4, (F = n.artworkColor)),
        "artwork" in n && t(5, (N = n.artwork)),
        "videoArtwork" in n && t(6, (W = n.videoArtwork)),
        "uberArtwork" in n && t(7, (z = n.uberArtwork)),
        "playAction" in n && t(8, (I = n.playAction)),
        "tourBadge" in n && t(9, (U = n.tourBadge)),
        "bioAction" in n && t(10, (J = n.bioAction)),
        "isFavorited" in n && t(11, (X = n.isFavorited)),
        "showFavoriteButton" in n && t(12, (A = n.showFavoriteButton)),
        "enableFavoriteButton" in n && t(13, (Z = n.enableFavoriteButton)),
        "contentDescriptor" in n && t(14, (ee = n.contentDescriptor)),
        "useScrollScrim" in n && t(15, (E = n.useScrollScrim)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 33554496 &&
        t(19, (a = [[1200], h, t(25, (s = W == null ? void 0 : W.cropStyle)) !== null && s !== void 0 ? s : "mv"])),
        i.$$.dirty[0] & 67108992 &&
          t(18, (r = [[1200], h, t(26, (b = z == null ? void 0 : z.cropStyle)) !== null && b !== void 0 ? b : "mv"])),
        i.$$.dirty[0] & 25165824 && t(17, (l = [K, T].filter(Boolean).join(" ") || void 0)));
    }),
    [C, B, Y, Q, F, N, W, z, I, U, J, X, A, Z, ee, E, v, l, r, a, d, j, le, K, T, s, b, q, m]
  );
}
class rt extends Ae {
  constructor(e) {
    (super(),
      Ee(
        this,
        e,
        et,
        $e,
        Ie,
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
export { rt as default };
