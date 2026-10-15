import {
  S as se,
  i as ae,
  n as ie,
  aR as ne,
  I as j,
  e as b,
  c as x,
  s as S,
  a as C,
  b as N,
  f as $,
  g as p,
  d as y,
  h as r,
  aS as re,
  k as I,
  l as h,
  m as ee,
  r as D,
  u as oe,
  v as O,
  w as ce,
  x as te,
  K as ue,
  z as fe,
  E as q,
  F as B,
  G,
  aT as de,
  H as he,
  o as le,
  aU as _e,
} from "./main.js";
function J(s, e, t) {
  const l = s.slice();
  return ((l[8] = e[t]), l);
}
function L(s) {
  let e, t;
  return {
    c() {
      ((e = b("h1")), (t = q(s[0])), this.h());
    },
    l(l) {
      e = C(l, "H1", { class: !0, "data-testid": !0 });
      var i = N(e);
      ((t = B(i, s[0])), i.forEach(p), this.h());
    },
    h() {
      (r(e, "class", "heading svelte-1o61rav"), r(e, "data-testid", "upsell-personal-heading"));
    },
    m(l, i) {
      (I(l, e, i), h(e, t));
    },
    p(l, i) {
      i & 1 && G(t, l[0]);
    },
    d(l) {
      l && p(e);
    },
  };
}
function Q(s) {
  let e, t;
  return {
    c() {
      ((e = b("source")), this.h());
    },
    l(l) {
      ((e = C(l, "SOURCE", { media: !0, srcset: !0, type: !0 })), this.h());
    },
    h() {
      (r(e, "media", s[8].media),
        de(e, (t = me(s[8].fileName, s[8].fileExtension))) || r(e, "srcset", t),
        r(e, "type", `image/${s[8].fileExtension}`));
    },
    m(l, i) {
      I(l, e, i);
    },
    p: he,
    d(l) {
      l && p(e);
    },
  };
}
function X(s) {
  let e, t;
  return {
    c() {
      ((e = b("p")), (t = q(s[1])), this.h());
    },
    l(l) {
      e = C(l, "P", { class: !0, "data-testid": !0 });
      var i = N(e);
      ((t = B(i, s[1])), i.forEach(p), this.h());
    },
    h() {
      (r(e, "class", "message svelte-1o61rav"), r(e, "data-testid", "upsell-personal-message"));
    },
    m(l, i) {
      (I(l, e, i), h(e, t));
    },
    p(l, i) {
      i & 2 && G(t, l[1]);
    },
    d(l) {
      l && p(e);
    },
  };
}
function Y(s) {
  let e, t, l, i;
  return {
    c() {
      ((e = b("button")), (t = q(s[2])), this.h());
    },
    l(o) {
      e = C(o, "BUTTON", { class: !0, "data-testid": !0 });
      var f = N(e);
      ((t = B(f, s[2])), f.forEach(p), this.h());
    },
    h() {
      (r(e, "class", "cta-btn svelte-1o61rav"), r(e, "data-testid", "upsell-personal-cta"));
    },
    m(o, f) {
      (I(o, e, f), h(e, t), l || ((i = le(e, "click", s[5])), (l = !0)));
    },
    p(o, f) {
      f & 4 && G(t, o[2]);
    },
    d(o) {
      (o && p(e), (l = !1), i());
    },
  };
}
function Z(s) {
  let e, t, l, i, o, f, k, w;
  return (
    (o = new _e({})),
    {
      c() {
        ((e = b("button")), (t = b("span")), (l = q(s[3])), (i = S()), x(o.$$.fragment), this.h());
      },
      l(c) {
        e = C(c, "BUTTON", { class: !0, "data-testid": !0 });
        var E = N(e);
        t = C(E, "SPAN", { class: !0 });
        var u = N(t);
        ((l = B(u, s[3])), (i = y(u)), $(o.$$.fragment, u), u.forEach(p), E.forEach(p), this.h());
      },
      h() {
        (r(t, "class", "link-with-chevron svelte-1o61rav"),
          r(e, "class", "secondary-action svelte-1o61rav"),
          r(e, "data-testid", "upsell-personal-secondary-action"));
      },
      m(c, E) {
        (I(c, e, E), h(e, t), h(t, l), h(t, i), ee(o, t, null), (f = !0), k || ((w = le(e, "click", s[6])), (k = !0)));
      },
      p(c, E) {
        (!f || E & 8) && G(l, c[3]);
      },
      i(c) {
        f || (D(o.$$.fragment, c), (f = !0));
      },
      o(c) {
        (O(o.$$.fragment, c), (f = !1));
      },
      d(c) {
        (c && p(e), te(o), (k = !1), w());
      },
    }
  );
}
function pe(s) {
  let e, t, l, i, o, f, k, w, c, E, u, z, H, M, P, R;
  i = new ne({});
  let m = s[0] && L(s),
    A = j(s[4]),
    _ = [];
  for (let a = 0; a < A.length; a += 1) _[a] = Q(J(s, A, a));
  let v = s[1] && X(s),
    g = s[2] && Y(s),
    d = s[3] && Z(s);
  return {
    c() {
      ((e = b("div")),
        (t = b("div")),
        (l = b("div")),
        x(i.$$.fragment),
        (o = S()),
        m && m.c(),
        (f = S()),
        (k = b("div")),
        (w = b("div")),
        (c = b("picture")));
      for (let a = 0; a < _.length; a += 1) _[a].c();
      ((E = S()), (u = b("img")), (H = S()), v && v.c(), (M = S()), g && g.c(), (P = S()), d && d.c(), this.h());
    },
    l(a) {
      e = C(a, "DIV", { class: !0, "data-testid": !0 });
      var T = N(e);
      t = C(T, "DIV", { class: !0 });
      var n = N(t);
      l = C(n, "DIV", { class: !0, "data-testid": !0 });
      var U = N(l);
      ($(i.$$.fragment, U),
        U.forEach(p),
        (o = y(n)),
        m && m.l(n),
        (f = y(n)),
        (k = C(n, "DIV", { class: !0, "aria-hidden": !0, "data-testid": !0 })));
      var F = N(k);
      w = C(F, "DIV", { class: !0 });
      var W = N(w);
      c = C(W, "PICTURE", {});
      var V = N(c);
      for (let K = 0; K < _.length; K += 1) _[K].l(V);
      ((E = y(V)),
        (u = C(V, "IMG", { src: !0, class: !0, alt: !0 })),
        V.forEach(p),
        W.forEach(p),
        F.forEach(p),
        (H = y(n)),
        v && v.l(n),
        (M = y(n)),
        g && g.l(n),
        (P = y(n)),
        d && d.l(n),
        n.forEach(p),
        T.forEach(p),
        this.h());
    },
    h() {
      (r(l, "class", "logo svelte-1o61rav"),
        r(l, "data-testid", "upsell-personal-logo"),
        re(u.src, (z = "/assets/app-icons/music-note/Apple-Music-Note_250.png")) || r(u, "src", z),
        r(u, "class", "artwork__image svelte-1o61rav"),
        r(u, "alt", ""),
        r(w, "class", "artwork__inner svelte-1o61rav"),
        r(k, "class", "artwork svelte-1o61rav"),
        r(k, "aria-hidden", "true"),
        r(k, "data-testid", "upsell-personal-artwork"),
        r(t, "class", "upsell__content svelte-1o61rav"),
        r(e, "class", "upsell-container svelte-1o61rav"),
        r(e, "data-testid", "upsell-personal-container"));
    },
    m(a, T) {
      (I(a, e, T), h(e, t), h(t, l), ee(i, l, null), h(t, o), m && m.m(t, null), h(t, f), h(t, k), h(k, w), h(w, c));
      for (let n = 0; n < _.length; n += 1) _[n] && _[n].m(c, null);
      (h(c, E), h(c, u), h(t, H), v && v.m(t, null), h(t, M), g && g.m(t, null), h(t, P), d && d.m(t, null), (R = !0));
    },
    p(a, [T]) {
      if ((a[0] ? (m ? m.p(a, T) : ((m = L(a)), m.c(), m.m(t, f))) : m && (m.d(1), (m = null)), T & 16)) {
        A = j(a[4]);
        let n;
        for (n = 0; n < A.length; n += 1) {
          const U = J(a, A, n);
          _[n] ? _[n].p(U, T) : ((_[n] = Q(U)), _[n].c(), _[n].m(c, E));
        }
        for (; n < _.length; n += 1) _[n].d(1);
        _.length = A.length;
      }
      (a[1] ? (v ? v.p(a, T) : ((v = X(a)), v.c(), v.m(t, M))) : v && (v.d(1), (v = null)),
        a[2] ? (g ? g.p(a, T) : ((g = Y(a)), g.c(), g.m(t, P))) : g && (g.d(1), (g = null)),
        a[3]
          ? d
            ? (d.p(a, T), T & 8 && D(d, 1))
            : ((d = Z(a)), d.c(), D(d, 1), d.m(t, null))
          : d &&
            (oe(),
            O(d, 1, 1, () => {
              d = null;
            }),
            ce()));
    },
    i(a) {
      R || (D(i.$$.fragment, a), D(d), (R = !0));
    },
    o(a) {
      (O(i.$$.fragment, a), O(d), (R = !1));
    },
    d(a) {
      (a && p(e), te(i), m && m.d(), ue(_, a), v && v.d(), g && g.d(), d && d.d());
    },
  };
}
function me(s, e) {
  return `/assets/app-icons/music-note/${s}.${e} 1x, /assets/app-icons/music-note/${s}@2x.${e} 2x`;
}
function ve(s, e, t) {
  let { title: l = null } = e,
    { description: i = null } = e,
    { ctaText: o = null } = e,
    { secondaryCtaText: f = null } = e;
  const k = fe(),
    w = [
      { media: "(max-width: 499px)", fileName: "Apple-Music-Note_250", fileExtension: "webp" },
      { media: "(max-width: 499px)", fileName: "Apple-Music-Note_250", fileExtension: "png" },
      { media: "(min-width: 500px)", fileName: "Apple-Music-Note_500", fileExtension: "webp" },
      { media: "(min-width: 500px)", fileName: "Apple-Music-Note_500", fileExtension: "png" },
    ];
  function c() {
    k("upsellCtaClick");
  }
  function E() {
    k("upsellStudentCtaClick");
  }
  return (
    (s.$$set = (u) => {
      ("title" in u && t(0, (l = u.title)),
        "description" in u && t(1, (i = u.description)),
        "ctaText" in u && t(2, (o = u.ctaText)),
        "secondaryCtaText" in u && t(3, (f = u.secondaryCtaText)));
    }),
    [l, i, o, f, w, c, E]
  );
}
class ke extends se {
  constructor(e) {
    (super(), ae(this, e, ve, pe, ie, { title: 0, description: 1, ctaText: 2, secondaryCtaText: 3 }));
  }
}
export { ke as default };
