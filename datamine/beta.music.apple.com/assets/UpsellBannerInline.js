import {
  S as j,
  i as z,
  n as H,
  e as k,
  s as I,
  a as E,
  b as C,
  d as S,
  g as b,
  h as p,
  t as P,
  k as T,
  l as v,
  o as y,
  r as m,
  u as V,
  v as g,
  w as M,
  y as J,
  V as L,
  P as Q,
  C as R,
  c as G,
  f as K,
  m as N,
  x as O,
  E as B,
  F as A,
  G as D,
  a6 as Y,
  a7 as U,
} from "./main.js";
function W(a) {
  let e, t, l, s, o, _;
  return (
    (t = new R({})),
    {
      c() {
        ((e = k("button")), G(t.$$.fragment), this.h());
      },
      l(u) {
        e = E(u, "BUTTON", { type: !0, class: !0, "data-testid": !0, "aria-label": !0 });
        var h = C(e);
        (K(t.$$.fragment, h), h.forEach(b), this.h());
      },
      h() {
        (p(e, "type", "button"),
          p(e, "class", "banner__close-button svelte-1uspg9f"),
          p(e, "data-testid", "upsell-banner-close"),
          p(e, "aria-label", (l = a[4].t("ASE.Web.Music.Shared.AX.Close"))));
      },
      m(u, h) {
        (T(u, e, h), N(t, e, null), (s = !0), o || ((_ = y(e, "click", a[6])), (o = !0)));
      },
      p(u, h) {
        (!s || (h & 16 && l !== (l = u[4].t("ASE.Web.Music.Shared.AX.Close")))) && p(e, "aria-label", l);
      },
      i(u) {
        s || (m(t.$$.fragment, u), (s = !0));
      },
      o(u) {
        (g(t.$$.fragment, u), (s = !1));
      },
      d(u) {
        (u && b(e), O(t), (o = !1), _());
      },
    }
  );
}
function X(a) {
  let e, t;
  return {
    c() {
      ((e = k("p")), (t = B(a[0])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var s = C(e);
      ((t = A(s, a[0])), s.forEach(b), this.h());
    },
    h() {
      (p(e, "class", "text__title svelte-1uspg9f"), p(e, "data-testid", "upsell-banner-title"));
    },
    m(l, s) {
      (T(l, e, s), v(e, t));
    },
    p(l, s) {
      s & 1 && D(t, l[0]);
    },
    d(l) {
      l && b(e);
    },
  };
}
function q(a) {
  let e, t;
  return {
    c() {
      ((e = k("p")), (t = B(a[1])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var s = C(e);
      ((t = A(s, a[1])), s.forEach(b), this.h());
    },
    h() {
      (p(e, "class", "text__description svelte-1uspg9f"), p(e, "data-testid", "upsell-banner-description"));
    },
    m(l, s) {
      (T(l, e, s), v(e, t));
    },
    p(l, s) {
      s & 2 && D(t, l[1]);
    },
    d(l) {
      l && b(e);
    },
  };
}
function F(a) {
  let e, t, l;
  return (
    (t = new Y({ props: { $$slots: { default: [Z] }, $$scope: { ctx: a } } })),
    t.$on("buttonClick", a[9]),
    {
      c() {
        ((e = k("div")), G(t.$$.fragment), this.h());
      },
      l(s) {
        e = E(s, "DIV", { class: !0, "data-testid": !0 });
        var o = C(e);
        (K(t.$$.fragment, o), o.forEach(b), this.h());
      },
      h() {
        (p(e, "class", "banner__cta-button svelte-1uspg9f"), p(e, "data-testid", "upsell-banner-cta"));
      },
      m(s, o) {
        (T(s, e, o), N(t, e, null), (l = !0));
      },
      p(s, o) {
        const _ = {};
        (o & 1028 && (_.$$scope = { dirty: o, ctx: s }), t.$set(_));
      },
      i(s) {
        l || (m(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        (g(t.$$.fragment, s), (l = !1));
      },
      d(s) {
        (s && b(e), O(t));
      },
    }
  );
}
function Z(a) {
  let e;
  return {
    c() {
      e = B(a[2]);
    },
    l(t) {
      e = A(t, a[2]);
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
function $(a) {
  let e,
    t,
    l,
    s,
    o,
    _,
    u,
    h,
    i = !a[3] && W(a),
    c = a[0] && X(a),
    f = a[1] && q(a),
    r = a[2] && F(a);
  return {
    c() {
      ((e = k("div")),
        i && i.c(),
        (t = I()),
        (l = k("div")),
        c && c.c(),
        (s = I()),
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
      (c && c.l(w), (s = S(w)), f && f.l(w), w.forEach(b), (o = S(d)), r && r.l(d), d.forEach(b), this.h());
    },
    h() {
      (p(l, "class", "banner__text-container svelte-1uspg9f"),
        p(e, "class", "banner svelte-1uspg9f"),
        p(e, "data-testid", "upsell-banner-inline"),
        P(e, "banner--collapsed", a[3]));
    },
    m(n, d) {
      (T(n, e, d),
        i && i.m(e, null),
        v(e, t),
        v(e, l),
        c && c.m(l, null),
        v(l, s),
        f && f.m(l, null),
        v(e, o),
        r && r.m(e, null),
        (_ = !0),
        u || ((h = [y(e, "click", a[8]), y(e, "keydown", a[7])]), (u = !0)));
    },
    p(n, [d]) {
      (n[3]
        ? i &&
          (V(),
          g(i, 1, 1, () => {
            i = null;
          }),
          M())
        : i
          ? (i.p(n, d), d & 8 && m(i, 1))
          : ((i = W(n)), i.c(), m(i, 1), i.m(e, t)),
        n[0] ? (c ? c.p(n, d) : ((c = X(n)), c.c(), c.m(l, s))) : c && (c.d(1), (c = null)),
        n[1] ? (f ? f.p(n, d) : ((f = q(n)), f.c(), f.m(l, null))) : f && (f.d(1), (f = null)),
        n[2]
          ? r
            ? (r.p(n, d), d & 4 && m(r, 1))
            : ((r = F(n)), r.c(), m(r, 1), r.m(e, null))
          : r &&
            (V(),
            g(r, 1, 1, () => {
              r = null;
            }),
            M()),
        (!_ || d & 8) && P(e, "banner--collapsed", n[3]));
    },
    i(n) {
      _ || (m(i), m(r), (_ = !0));
    },
    o(n) {
      (g(i), g(r), (_ = !1));
    },
    d(n) {
      (n && b(e), i && i.d(), c && c.d(), f && f.d(), r && r.d(), (u = !1), J(h));
    },
  };
}
function x(a, e, t) {
  let l,
    { title: s = null } = e,
    { description: o = null } = e,
    { ctaText: _ = null } = e;
  const u = L();
  Q(a, u, (n) => t(4, (l = n)));
  let h = !1;
  const i = (n) => {
      (n.stopPropagation(), t(3, (h = !0)));
    },
    c = (n) => {
      (n.key === "Enter" || n.key === " ") &&
        (n.preventDefault(), n.currentTarget.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
    };
  function f(n) {
    U.call(this, a, n);
  }
  function r(n) {
    U.call(this, a, n);
  }
  return (
    (a.$$set = (n) => {
      ("title" in n && t(0, (s = n.title)),
        "description" in n && t(1, (o = n.description)),
        "ctaText" in n && t(2, (_ = n.ctaText)));
    }),
    [s, o, _, h, l, u, i, c, f, r]
  );
}
class te extends j {
  constructor(e) {
    (super(), z(this, e, x, $, H, { title: 0, description: 1, ctaText: 2 }));
  }
}
export { te as default };
