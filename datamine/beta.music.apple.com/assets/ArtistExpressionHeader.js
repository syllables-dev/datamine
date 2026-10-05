import {
  S as Ae,
  i as Se,
  bR as De,
  bS as ie,
  bT as ue,
  bU as de,
  b as p,
  g as c,
  h as f,
  bV as ce,
  k as V,
  l as w,
  bW as Ee,
  H as he,
  bX as _e,
  n as Ie,
  dc as qe,
  dh as Fe,
  e as E,
  s as O,
  E as Te,
  c as P,
  a as D,
  d as W,
  F as Ce,
  f as H,
  t as K,
  m as y,
  o as ve,
  r as _,
  u as te,
  v as g,
  w as re,
  G as Ve,
  x as L,
  y as Pe,
  ce as He,
  z as ye,
  cx as Le,
  O as Oe,
  di as We,
  dj as Ue,
  D as se,
  cd as je,
  dk as Me,
  U as Ne,
  Y as Re,
  dl as me,
  dm as ze,
} from "./main.js";
function Ge(i) {
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
        (r = Ee(a, [
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
function Je(i, e, t) {
  return (
    (i.$$set = (a) => {
      t(0, (e = ie(ie({}, e), _e(a))));
    }),
    (e = _e(e)),
    [e]
  );
}
class Ke extends Ae {
  constructor(e) {
    (super(), Se(this, e, Je, Ge, De, {}));
  }
}
function ge(i) {
  let e;
  return {
    c() {
      ((e = E("div")), this.h());
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
        ((e = E("div")), P(t.$$.fragment), this.h());
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
function Xe(i) {
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
        ((e = E("div")), (t = E("div")), P(a.$$.fragment), (r = O()), (l = E("div")), P(s.$$.fragment), this.h());
      },
      l(h) {
        e = D(h, "DIV", { class: !0 });
        var d = p(e);
        t = D(d, "DIV", { class: !0 });
        var C = p(t);
        (H(a.$$.fragment, C), C.forEach(c), (r = W(d)), (l = D(d, "DIV", { class: !0 })));
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
function Ye(i) {
  let e, t, a;
  return (
    (t = new se({
      props: { artwork: i[7], profile: i[18], forceFullWidth: !1, alt: i[0], lazyLoad: !1, fetchPriority: "high" },
    })),
    {
      c() {
        ((e = E("div")), P(t.$$.fragment), this.h());
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
function Qe(i) {
  let e, t;
  return (
    (e = new ze({
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
      ((e = E("div")), (t = O()), (a = E("div")), this.h());
    },
    l(r) {
      ((e = D(r, "DIV", { class: !0 })),
        p(e).forEach(c),
        (t = W(r)),
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
    (t = new We({ props: l })),
    {
      c() {
        ((e = E("div")), P(t.$$.fragment), this.h());
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
        const h = b[0] & 512 ? Ee(r, [Ue(s[9]), r[1]]) : {};
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
        ((e = E("div")), P(t.$$.fragment), this.h());
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
    (t = new je({ props: { isFavorited: i[11], enabled: i[13], filledFavorited: !0 } })),
    t.$on("toggle", i[22]),
    {
      c() {
        ((e = E("span")), P(t.$$.fragment), this.h());
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
    X,
    Y,
    G,
    T,
    F,
    U,
    j,
    R,
    I,
    M,
    z,
    Q,
    A,
    Z,
    ee,
    S = i[15] && ge(),
    v = i[14] && be(i);
  const ae = [Qe, Ye, Xe],
    N = [];
  function le(o, u) {
    return o[6] ? 0 : o[7] ? 1 : o[5] ? 2 : -1;
  }
  ~(l = le(i)) && (s = N[l] = ae[l](i));
  let q = (i[7] || i[6]) && ke(),
    m = i[9] && i[9].link && we(i),
    n = i[3] && pe(i);
  ((U = new Ke({})),
    (M = new qe({
      props: { maskSvg: Fe, rectWidth: 72, rectHeight: 72, maskWidth: 30, maskHeight: 30, inverted: !0 },
    })));
  let k = i[12] && Be(i);
  return {
    c() {
      ((e = E("div")),
        S && S.c(),
        (t = O()),
        v && v.c(),
        (a = O()),
        (r = E("div")),
        s && s.c(),
        (b = O()),
        q && q.c(),
        (h = O()),
        (d = E("div")),
        m && m.c(),
        (C = O()),
        (B = E("h1")),
        (X = Te(i[0])),
        (Y = O()),
        n && n.c(),
        (G = O()),
        (T = E("div")),
        (F = E("button")),
        P(U.$$.fragment),
        (R = O()),
        (I = E("button")),
        P(M.$$.fragment),
        (Q = O()),
        k && k.c(),
        this.h());
    },
    l(o) {
      e = D(o, "DIV", { class: !0, style: !0, "data-artwork-color": !0, "data-testid": !0 });
      var u = p(e);
      (S && S.l(u), (t = W(u)), v && v.l(u), (a = W(u)), (r = D(u, "DIV", { class: !0 })));
      var x = p(r);
      (s && s.l(x), x.forEach(c), (b = W(u)), q && q.l(u), (h = W(u)), (d = D(u, "DIV", { class: !0 })));
      var J = p(d);
      (m && m.l(J), (C = W(J)), (B = D(J, "H1", { class: !0, "data-testid": !0 })));
      var ne = p(B);
      ((X = Ce(ne, i[0])), ne.forEach(c), (Y = W(J)), n && n.l(J), (G = W(J)), (T = D(J, "DIV", { class: !0 })));
      var $ = p(T);
      F = D($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 });
      var oe = p(F);
      (H(U.$$.fragment, oe),
        oe.forEach(c),
        (R = W($)),
        (I = D($, "BUTTON", { class: !0, "aria-label": !0, "data-testid": !0 })));
      var fe = p(I);
      (H(M.$$.fragment, fe),
        fe.forEach(c),
        (Q = W($)),
        k && k.l($),
        $.forEach(c),
        J.forEach(c),
        u.forEach(c),
        this.h());
    },
    h() {
      (f(r, "class", "artist-expression-header__artwork svelte-xqfvb5"),
        f(B, "class", "artist-expression-header__name svelte-xqfvb5"),
        f(B, "data-testid", "artist-expression-header-name"),
        K(B, "artist-expression-header__name--visually-hidden", !!i[3]),
        f(F, "class", "artist-expression-header__info-button svelte-xqfvb5"),
        f(F, "aria-label", i[2]),
        f(F, "data-testid", "artist-info-button"),
        (F.disabled = j = !i[10]),
        f(I, "class", "artist-expression-header__play-button svelte-xqfvb5"),
        f(I, "aria-label", i[1]),
        (I.disabled = z = !i[8]),
        f(I, "data-testid", "artist-play-button"),
        f(T, "class", "artist-expression-header__actions-row svelte-xqfvb5"),
        f(d, "class", "artist-expression-header__name-container svelte-xqfvb5"),
        f(e, "class", "artist-expression-header svelte-xqfvb5"),
        f(e, "style", i[17]),
        f(e, "data-artwork-color", i[4]),
        f(e, "data-testid", "artist-expression-header"),
        K(e, "artist-expression-header--fixed", !!i[7] || !!i[6]),
        K(e, "artist-expression-header--video", !!i[6]),
        K(e, "artist-expression-header--no-artwork", !i[5] && !i[6] && !i[7]));
    },
    m(o, u) {
      (V(o, e, u),
        S && S.m(e, null),
        w(e, t),
        v && v.m(e, null),
        w(e, a),
        w(e, r),
        ~l && N[l].m(r, null),
        w(e, b),
        q && q.m(e, null),
        w(e, h),
        w(e, d),
        m && m.m(d, null),
        w(d, C),
        w(d, B),
        w(B, X),
        w(d, Y),
        n && n.m(d, null),
        w(d, G),
        w(d, T),
        w(T, F),
        y(U, F, null),
        i[27](F),
        w(T, R),
        w(T, I),
        y(M, I, null),
        w(T, Q),
        k && k.m(T, null),
        (A = !0),
        Z || ((ee = [ve(F, "click", i[21]), ve(I, "click", i[28])]), (Z = !0)));
    },
    p(o, u) {
      (o[15] ? S || ((S = ge()), S.c(), S.m(e, t)) : S && (S.d(1), (S = null)),
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
          ? ~l && N[l].p(o, u)
          : (s &&
              (te(),
              g(N[x], 1, 1, () => {
                N[x] = null;
              }),
              re()),
            ~l ? ((s = N[l]), s ? s.p(o, u) : ((s = N[l] = ae[l](o)), s.c()), _(s, 1), s.m(r, null)) : (s = null)),
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
        (!A || u[0] & 1) && Ve(X, o[0]),
        (!A || u[0] & 8) && K(B, "artist-expression-header__name--visually-hidden", !!o[3]),
        o[3]
          ? n
            ? (n.p(o, u), u[0] & 8 && _(n, 1))
            : ((n = pe(o)), n.c(), _(n, 1), n.m(d, G))
          : n &&
            (te(),
            g(n, 1, 1, () => {
              n = null;
            }),
            re()),
        (!A || u[0] & 4) && f(F, "aria-label", o[2]),
        (!A || (u[0] & 1024 && j !== (j = !o[10]))) && (F.disabled = j),
        (!A || u[0] & 2) && f(I, "aria-label", o[1]),
        (!A || (u[0] & 256 && z !== (z = !o[8]))) && (I.disabled = z),
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
        (!A || u[0] & 192) && K(e, "artist-expression-header--fixed", !!o[7] || !!o[6]),
        (!A || u[0] & 64) && K(e, "artist-expression-header--video", !!o[6]),
        (!A || u[0] & 224) && K(e, "artist-expression-header--no-artwork", !o[5] && !o[6] && !o[7]));
    },
    i(o) {
      A || (_(v), _(s), _(m), _(n), _(U.$$.fragment, o), _(M.$$.fragment, o), _(k), (A = !0));
    },
    o(o) {
      (g(v), g(s), g(m), g(n), g(U.$$.fragment, o), g(M.$$.fragment, o), g(k), (A = !1));
    },
    d(o) {
      (o && c(e),
        S && S.d(),
        v && v.d(),
        ~l && N[l].d(),
        q && q.d(),
        m && m.d(),
        n && n.d(),
        L(U),
        i[27](null),
        L(M),
        k && k.d(),
        (Z = !1),
        Pe(ee));
    },
  };
}
function et(i, e, t) {
  let a, r, l;
  var s, b;
  const { HD_ASPECT_RATIO: h } = Me,
    d = He();
  let { name: C } = e,
    { ariaPlayButtonText: B } = e,
    { ariaInfoButtonLabel: X } = e,
    { logo: Y = null } = e,
    { headerStyle: G = void 0 } = e,
    { fallbackImageStyle: T = void 0 } = e,
    { artworkColor: F = null } = e,
    { artwork: U = null } = e,
    { videoArtwork: j = null } = e,
    { uberArtwork: R = null } = e,
    { playAction: I = null } = e,
    { tourBadge: M = null } = e,
    { bioAction: z = null } = e,
    { isFavorited: Q = !1 } = e,
    { showFavoriteButton: A = !1 } = e,
    { enableFavoriteButton: Z = !1 } = e,
    { contentDescriptor: ee = null } = e,
    { useScrollScrim: S = !1 } = e,
    v;
  const ae = ye(),
    N = () => {
      z && (Ne.set(v), d(z));
    },
    le = (n) => {
      ae("toggle-favorite", n.detail);
    };
  function q(n) {
    Re[n ? "unshift" : "push"](() => {
      ((v = n), t(16, v));
    });
  }
  const m = () => I && d(I);
  return (
    (i.$$set = (n) => {
      ("name" in n && t(0, (C = n.name)),
        "ariaPlayButtonText" in n && t(1, (B = n.ariaPlayButtonText)),
        "ariaInfoButtonLabel" in n && t(2, (X = n.ariaInfoButtonLabel)),
        "logo" in n && t(3, (Y = n.logo)),
        "headerStyle" in n && t(23, (G = n.headerStyle)),
        "fallbackImageStyle" in n && t(24, (T = n.fallbackImageStyle)),
        "artworkColor" in n && t(4, (F = n.artworkColor)),
        "artwork" in n && t(5, (U = n.artwork)),
        "videoArtwork" in n && t(6, (j = n.videoArtwork)),
        "uberArtwork" in n && t(7, (R = n.uberArtwork)),
        "playAction" in n && t(8, (I = n.playAction)),
        "tourBadge" in n && t(9, (M = n.tourBadge)),
        "bioAction" in n && t(10, (z = n.bioAction)),
        "isFavorited" in n && t(11, (Q = n.isFavorited)),
        "showFavoriteButton" in n && t(12, (A = n.showFavoriteButton)),
        "enableFavoriteButton" in n && t(13, (Z = n.enableFavoriteButton)),
        "contentDescriptor" in n && t(14, (ee = n.contentDescriptor)),
        "useScrollScrim" in n && t(15, (S = n.useScrollScrim)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 33554496 &&
        t(19, (a = [[1200], h, t(25, (s = j?.cropStyle)) !== null && s !== void 0 ? s : "mv"])),
        i.$$.dirty[0] & 67108992 &&
          t(18, (r = [[1200], h, t(26, (b = R?.cropStyle)) !== null && b !== void 0 ? b : "mv"])),
        i.$$.dirty[0] & 25165824 && t(17, (l = [G, T].filter(Boolean).join(" ") || void 0)));
    }),
    [C, B, X, Y, F, U, j, R, I, M, z, Q, A, Z, ee, S, v, l, r, a, d, N, le, G, T, s, b, q, m]
  );
}
class rt extends Ae {
  constructor(e) {
    (super(),
      Se(
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
