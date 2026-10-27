import {
  S as j,
  i as z,
  n as H,
  e as g,
  s as I,
  a as E,
  b as C,
  d as S,
  g as b,
  h,
  t as P,
  k as T,
  l as k,
  o as y,
  r as m,
  u as U,
  v,
  w as M,
  y as J,
  U as L,
  P as Q,
  C as R,
  c as G,
  f as K,
  m as N,
  x as O,
  E as B,
  F as A,
  G as D,
  a5 as Y,
  a6 as V,
} from "./main.js";
function W(s) {
  let e, t, l, a, o, _;
  return (
    (t = new R({})),
    {
      c() {
        ((e = g("button")), G(t.$$.fragment), this.h());
      },
      l(u) {
        e = E(u, "BUTTON", { type: !0, class: !0, "data-testid": !0, "aria-label": !0 });
        var p = C(e);
        (K(t.$$.fragment, p), p.forEach(b), this.h());
      },
      h() {
        (h(e, "type", "button"),
          h(e, "class", "banner__close-button svelte-r5lnk4"),
          h(e, "data-testid", "upsell-banner-close"),
          h(e, "aria-label", (l = s[4].t("ASE.Web.Music.Shared.AX.Close"))));
      },
      m(u, p) {
        (T(u, e, p), N(t, e, null), (a = !0), o || ((_ = y(e, "click", s[6])), (o = !0)));
      },
      p(u, p) {
        (!a || (p & 16 && l !== (l = u[4].t("ASE.Web.Music.Shared.AX.Close")))) && h(e, "aria-label", l);
      },
      i(u) {
        a || (m(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        (v(t.$$.fragment, u), (a = !1));
      },
      d(u) {
        (u && b(e), O(t), (o = !1), _());
      },
    }
  );
}
function X(s) {
  let e, t;
  return {
    c() {
      ((e = g("p")), (t = B(s[0])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var a = C(e);
      ((t = A(a, s[0])), a.forEach(b), this.h());
    },
    h() {
      (h(e, "class", "text__title svelte-r5lnk4"), h(e, "data-testid", "upsell-banner-title"));
    },
    m(l, a) {
      (T(l, e, a), k(e, t));
    },
    p(l, a) {
      a & 1 && D(t, l[0]);
    },
    d(l) {
      l && b(e);
    },
  };
}
function q(s) {
  let e, t;
  return {
    c() {
      ((e = g("p")), (t = B(s[1])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var a = C(e);
      ((t = A(a, s[1])), a.forEach(b), this.h());
    },
    h() {
      (h(e, "class", "text__description svelte-r5lnk4"), h(e, "data-testid", "upsell-banner-description"));
    },
    m(l, a) {
      (T(l, e, a), k(e, t));
    },
    p(l, a) {
      a & 2 && D(t, l[1]);
    },
    d(l) {
      l && b(e);
    },
  };
}
function F(s) {
  let e, t, l;
  return (
    (t = new Y({ props: { $$slots: { default: [Z] }, $$scope: { ctx: s } } })),
    t.$on("buttonClick", s[9]),
    {
      c() {
        ((e = g("div")), G(t.$$.fragment), this.h());
      },
      l(a) {
        e = E(a, "DIV", { class: !0, "data-testid": !0 });
        var o = C(e);
        (K(t.$$.fragment, o), o.forEach(b), this.h());
      },
      h() {
        (h(e, "class", "banner__cta-button svelte-r5lnk4"), h(e, "data-testid", "upsell-banner-cta"));
      },
      m(a, o) {
        (T(a, e, o), N(t, e, null), (l = !0));
      },
      p(a, o) {
        const _ = {};
        (o & 1028 && (_.$$scope = { dirty: o, ctx: a }), t.$set(_));
      },
      i(a) {
        l || (m(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        (v(t.$$.fragment, a), (l = !1));
      },
      d(a) {
        (a && b(e), O(t));
      },
    }
  );
}
function Z(s) {
  let e;
  return {
    c() {
      e = B(s[2]);
    },
    l(t) {
      e = A(t, s[2]);
    },
    m(t, l) {
      T(t, e, l);
    },
    p(t, l) {
      l & 4 && D(e, t[2]);
    },
    d(t) {
      t && b(e);
    },
  };
}
function $(s) {
  let e,
    t,
    l,
    a,
    o,
    _,
    u,
    p,
    i = !s[3] && W(s),
    c = s[0] && X(s),
    f = s[1] && q(s),
    r = s[2] && F(s);
  return {
    c() {
      ((e = g("div")),
        i && i.c(),
        (t = I()),
        (l = g("div")),
        c && c.c(),
        (a = I()),
        f && f.c(),
        (o = I()),
        r && r.c(),
        this.h());
    },
    l(n) {
      e = E(n, "DIV", { class: !0, "data-testid": !0 });
      var d = C(e);
      (i && i.l(d), (t = S(d)), (l = E(d, "DIV", { class: !0 })));
      var w = C(l);
      (c && c.l(w), (a = S(w)), f && f.l(w), w.forEach(b), (o = S(d)), r && r.l(d), d.forEach(b), this.h());
    },
    h() {
      (h(l, "class", "banner__text-container svelte-r5lnk4"),
        h(e, "class", "banner svelte-r5lnk4"),
        h(e, "data-testid", "upsell-banner-inline"),
        P(e, "banner--collapsed", s[3]));
    },
    m(n, d) {
      (T(n, e, d),
        i && i.m(e, null),
        k(e, t),
        k(e, l),
        c && c.m(l, null),
        k(l, a),
        f && f.m(l, null),
        k(e, o),
        r && r.m(e, null),
        (_ = !0),
        u || ((p = [y(e, "click", s[8]), y(e, "keydown", s[7])]), (u = !0)));
    },
    p(n, [d]) {
      (n[3]
        ? i &&
          (U(),
          v(i, 1, 1, () => {
            i = null;
          }),
          M())
        : i
          ? (i.p(n, d), d & 8 && m(i, 1))
          : ((i = W(n)), i.c(), m(i, 1), i.m(e, t)),
        n[0] ? (c ? c.p(n, d) : ((c = X(n)), c.c(), c.m(l, a))) : c && (c.d(1), (c = null)),
        n[1] ? (f ? f.p(n, d) : ((f = q(n)), f.c(), f.m(l, null))) : f && (f.d(1), (f = null)),
        n[2]
          ? r
            ? (r.p(n, d), d & 4 && m(r, 1))
            : ((r = F(n)), r.c(), m(r, 1), r.m(e, null))
          : r &&
            (U(),
            v(r, 1, 1, () => {
              r = null;
            }),
            M()),
        (!_ || d & 8) && P(e, "banner--collapsed", n[3]));
    },
    i(n) {
      _ || (m(i), m(r), (_ = !0));
    },
    o(n) {
      (v(i), v(r), (_ = !1));
    },
    d(n) {
      (n && b(e), i && i.d(), c && c.d(), f && f.d(), r && r.d(), (u = !1), J(p));
    },
  };
}
function x(s, e, t) {
  let l,
    { title: a = null } = e,
    { description: o = null } = e,
    { ctaText: _ = null } = e;
  const u = L();
  Q(s, u, (n) => t(4, (l = n)));
  let p = !1;
  const i = (n) => {
      (n.stopPropagation(), t(3, (p = !0)));
    },
    c = (n) => {
      (n.key === "Enter" || n.key === " ") &&
        (n.preventDefault(), n.currentTarget.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
    };
  function f(n) {
    V.call(this, s, n);
  }
  function r(n) {
    V.call(this, s, n);
  }
  return (
    (s.$$set = (n) => {
      ("title" in n && t(0, (a = n.title)),
        "description" in n && t(1, (o = n.description)),
        "ctaText" in n && t(2, (_ = n.ctaText)));
    }),
    [a, o, _, p, l, u, i, c, f, r]
  );
}
class te extends j {
  constructor(e) {
    (super(), z(this, e, x, $, H, { title: 0, description: 1, ctaText: 2 }));
  }
}
export { te as default };
