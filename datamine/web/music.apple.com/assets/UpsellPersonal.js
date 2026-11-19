import {
  S as se,
  i as ae,
  n as ie,
  aN as ne,
  E as J,
  d as p,
  a as x,
  F as re,
  t as q,
  b as M,
  g as oe,
  c as ce,
  h as I,
  j as h,
  m as $,
  e as r,
  aO as ue,
  p as E,
  q as N,
  v as ee,
  u as S,
  w as C,
  y as te,
  x as y,
  z as fe,
  I as R,
  J as B,
  K as H,
  H as de,
  aP as he,
  l as le,
  aQ as _e,
} from "./main.js";
function Q(s, e, t) {
  const l = s.slice();
  return ((l[8] = e[t]), l);
}
function W(s) {
  let e, t;
  return {
    c() {
      ((e = C("h1")), (t = H(s[0])), this.h());
    },
    l(l) {
      e = E(l, "H1", { class: !0, "data-testid": !0 });
      var i = N(e);
      ((t = B(i, s[0])), i.forEach(p), this.h());
    },
    h() {
      (r(e, "class", "heading svelte-1genikb"), r(e, "data-testid", "upsell-personal-heading"));
    },
    m(l, i) {
      (I(l, e, i), h(e, t));
    },
    p(l, i) {
      i & 1 && R(t, l[0]);
    },
    d(l) {
      l && p(e);
    },
  };
}
function L(s) {
  let e, t;
  return {
    c() {
      ((e = C("source")), this.h());
    },
    l(l) {
      ((e = E(l, "SOURCE", { media: !0, srcset: !0, type: !0 })), this.h());
    },
    h() {
      (r(e, "media", s[8].media),
        he(e, (t = me(s[8].fileName, s[8].fileExtension))) || r(e, "srcset", t),
        r(e, "type", `image/${s[8].fileExtension}`));
    },
    m(l, i) {
      I(l, e, i);
    },
    p: de,
    d(l) {
      l && p(e);
    },
  };
}
function X(s) {
  let e, t;
  return {
    c() {
      ((e = C("p")), (t = H(s[1])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var i = N(e);
      ((t = B(i, s[1])), i.forEach(p), this.h());
    },
    h() {
      (r(e, "class", "message svelte-1genikb"), r(e, "data-testid", "upsell-personal-message"));
    },
    m(l, i) {
      (I(l, e, i), h(e, t));
    },
    p(l, i) {
      i & 2 && R(t, l[1]);
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
      ((e = C("button")), (t = H(s[2])), this.h());
    },
    l(o) {
      e = E(o, "BUTTON", { class: !0, "data-testid": !0 });
      var f = N(e);
      ((t = B(f, s[2])), f.forEach(p), this.h());
    },
    h() {
      (r(e, "class", "cta-btn svelte-1genikb"), r(e, "data-testid", "upsell-personal-cta"));
    },
    m(o, f) {
      (I(o, e, f), h(e, t), l || ((i = le(e, "click", s[5])), (l = !0)));
    },
    p(o, f) {
      f & 4 && R(t, o[2]);
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
        ((e = C("button")), (t = C("span")), (l = H(s[3])), (i = y()), te(o.$$.fragment), this.h());
      },
      l(c) {
        e = E(c, "BUTTON", { class: !0, "data-testid": !0 });
        var b = N(e);
        t = E(b, "SPAN", { class: !0 });
        var u = N(t);
        ((l = B(u, s[3])), (i = S(u)), ee(o.$$.fragment, u), u.forEach(p), b.forEach(p), this.h());
      },
      h() {
        (r(t, "class", "link-with-chevron svelte-1genikb"),
          r(e, "class", "secondary-action svelte-1genikb"),
          r(e, "data-testid", "upsell-personal-secondary-action"));
      },
      m(c, b) {
        (I(c, e, b), h(e, t), h(t, l), h(t, i), $(o, t, null), (f = !0), k || ((w = le(e, "click", s[6])), (k = !0)));
      },
      p(c, b) {
        (!f || b & 8) && R(l, c[3]);
      },
      i(c) {
        f || (M(o.$$.fragment, c), (f = !0));
      },
      o(c) {
        (q(o.$$.fragment, c), (f = !1));
      },
      d(c) {
        (c && p(e), x(o), (k = !1), w());
      },
    }
  );
}
function pe(s) {
  let e, t, l, i, o, f, k, w, c, b, u, z, K, O, P, U;
  i = new ne({});
  let m = s[0] && W(s),
    A = J(s[4]),
    _ = [];
  for (let a = 0; a < A.length; a += 1) _[a] = L(Q(s, A, a));
  let g = s[1] && X(s),
    v = s[2] && Y(s),
    d = s[3] && Z(s);
  return {
    c() {
      ((e = C("div")),
        (t = C("div")),
        (l = C("div")),
        te(i.$$.fragment),
        (o = y()),
        m && m.c(),
        (f = y()),
        (k = C("div")),
        (w = C("div")),
        (c = C("picture")));
      for (let a = 0; a < _.length; a += 1) _[a].c();
      ((b = y()), (u = C("img")), (K = y()), g && g.c(), (O = y()), v && v.c(), (P = y()), d && d.c(), this.h());
    },
    l(a) {
      e = E(a, "DIV", { class: !0, "data-testid": !0 });
      var T = N(e);
      t = E(T, "DIV", { class: !0 });
      var n = N(t);
      l = E(n, "DIV", { class: !0, "data-testid": !0 });
      var D = N(l);
      (ee(i.$$.fragment, D),
        D.forEach(p),
        (o = S(n)),
        m && m.l(n),
        (f = S(n)),
        (k = E(n, "DIV", { class: !0, "aria-hidden": !0, "data-testid": !0 })));
      var F = N(k);
      w = E(F, "DIV", { class: !0 });
      var G = N(w);
      c = E(G, "PICTURE", {});
      var V = N(c);
      for (let j = 0; j < _.length; j += 1) _[j].l(V);
      ((b = S(V)),
        (u = E(V, "IMG", { src: !0, class: !0, alt: !0 })),
        V.forEach(p),
        G.forEach(p),
        F.forEach(p),
        (K = S(n)),
        g && g.l(n),
        (O = S(n)),
        v && v.l(n),
        (P = S(n)),
        d && d.l(n),
        n.forEach(p),
        T.forEach(p),
        this.h());
    },
    h() {
      (r(l, "class", "logo svelte-1genikb"),
        r(l, "data-testid", "upsell-personal-logo"),
        ue(u.src, (z = "/assets/app-icons/music-note/Apple-Music-Note_250.png")) || r(u, "src", z),
        r(u, "class", "artwork__image svelte-1genikb"),
        r(u, "alt", ""),
        r(w, "class", "artwork__inner svelte-1genikb"),
        r(k, "class", "artwork svelte-1genikb"),
        r(k, "aria-hidden", "true"),
        r(k, "data-testid", "upsell-personal-artwork"),
        r(t, "class", "upsell__content svelte-1genikb"),
        r(e, "class", "upsell-container svelte-1genikb"),
        r(e, "data-testid", "upsell-personal-container"));
    },
    m(a, T) {
      (I(a, e, T), h(e, t), h(t, l), $(i, l, null), h(t, o), m && m.m(t, null), h(t, f), h(t, k), h(k, w), h(w, c));
      for (let n = 0; n < _.length; n += 1) _[n] && _[n].m(c, null);
      (h(c, b), h(c, u), h(t, K), g && g.m(t, null), h(t, O), v && v.m(t, null), h(t, P), d && d.m(t, null), (U = !0));
    },
    p(a, [T]) {
      if ((a[0] ? (m ? m.p(a, T) : ((m = W(a)), m.c(), m.m(t, f))) : m && (m.d(1), (m = null)), T & 16)) {
        A = J(a[4]);
        let n;
        for (n = 0; n < A.length; n += 1) {
          const D = Q(a, A, n);
          _[n] ? _[n].p(D, T) : ((_[n] = L(D)), _[n].c(), _[n].m(c, b));
        }
        for (; n < _.length; n += 1) _[n].d(1);
        _.length = A.length;
      }
      (a[1] ? (g ? g.p(a, T) : ((g = X(a)), g.c(), g.m(t, O))) : g && (g.d(1), (g = null)),
        a[2] ? (v ? v.p(a, T) : ((v = Y(a)), v.c(), v.m(t, P))) : v && (v.d(1), (v = null)),
        a[3]
          ? d
            ? (d.p(a, T), T & 8 && M(d, 1))
            : ((d = Z(a)), d.c(), M(d, 1), d.m(t, null))
          : d &&
            (oe(),
            q(d, 1, 1, () => {
              d = null;
            }),
            ce()));
    },
    i(a) {
      U || (M(i.$$.fragment, a), M(d), (U = !0));
    },
    o(a) {
      (q(i.$$.fragment, a), q(d), (U = !1));
    },
    d(a) {
      (a && p(e), x(i), m && m.d(), re(_, a), g && g.d(), v && v.d(), d && d.d());
    },
  };
}
function me(s, e) {
  return `/assets/app-icons/music-note/${s}.${e} 1x, /assets/app-icons/music-note/${s}@2x.${e} 2x`;
}
function ge(s, e, t) {
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
  function b() {
    k("upsellStudentCtaClick");
  }
  return (
    (s.$$set = (u) => {
      ("title" in u && t(0, (l = u.title)),
        "description" in u && t(1, (i = u.description)),
        "ctaText" in u && t(2, (o = u.ctaText)),
        "secondaryCtaText" in u && t(3, (f = u.secondaryCtaText)));
    }),
    [l, i, o, f, w, c, b]
  );
}
class ke extends se {
  constructor(e) {
    (super(), ae(this, e, ge, pe, ie, { title: 0, description: 1, ctaText: 2, secondaryCtaText: 3 }));
  }
}
export { ke as default };
