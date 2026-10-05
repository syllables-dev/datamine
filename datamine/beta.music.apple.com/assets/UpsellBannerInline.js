import {
  S as O,
  i as j,
  n as H,
  e as g,
  s as w,
  a as E,
  b as y,
  d as z,
  g as b,
  h,
  t as D,
  k as C,
  l as v,
  o as I,
  r as m,
  u as P,
  v as k,
  w as V,
  y as J,
  V as L,
  P as Q,
  C as R,
  c as F,
  f as G,
  m as K,
  x as N,
  E as S,
  F as B,
  G as A,
  a6 as Y,
  a7 as M,
} from "./main.js";
function U(s) {
  let e, t, l, a, r, _;
  return (
    (t = new R({})),
    {
      c() {
        ((e = g("button")), F(t.$$.fragment), this.h());
      },
      l(u) {
        e = E(u, "BUTTON", { type: !0, class: !0, "data-testid": !0, "aria-label": !0 });
        var p = y(e);
        (G(t.$$.fragment, p), p.forEach(b), this.h());
      },
      h() {
        (h(e, "type", "button"),
          h(e, "class", "banner__close-button svelte-1ozlay5"),
          h(e, "data-testid", "upsell-banner-close"),
          h(e, "aria-label", (l = s[4].t("ASE.Web.Music.Shared.AX.Close"))));
      },
      m(u, p) {
        (C(u, e, p), K(t, e, null), (a = !0), r || ((_ = I(e, "click", s[6])), (r = !0)));
      },
      p(u, p) {
        (!a || (p & 16 && l !== (l = u[4].t("ASE.Web.Music.Shared.AX.Close")))) && h(e, "aria-label", l);
      },
      i(u) {
        a || (m(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        (k(t.$$.fragment, u), (a = !1));
      },
      d(u) {
        (u && b(e), N(t), (r = !1), _());
      },
    }
  );
}
function W(s) {
  let e, t;
  return {
    c() {
      ((e = g("p")), (t = S(s[0])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var a = y(e);
      ((t = B(a, s[0])), a.forEach(b), this.h());
    },
    h() {
      (h(e, "class", "text__title svelte-1ozlay5"), h(e, "data-testid", "upsell-banner-title"));
    },
    m(l, a) {
      (C(l, e, a), v(e, t));
    },
    p(l, a) {
      a & 1 && A(t, l[0]);
    },
    d(l) {
      l && b(e);
    },
  };
}
function X(s) {
  let e, t;
  return {
    c() {
      ((e = g("p")), (t = S(s[1])), this.h());
    },
    l(l) {
      e = E(l, "P", { class: !0, "data-testid": !0 });
      var a = y(e);
      ((t = B(a, s[1])), a.forEach(b), this.h());
    },
    h() {
      (h(e, "class", "text__description svelte-1ozlay5"), h(e, "data-testid", "upsell-banner-description"));
    },
    m(l, a) {
      (C(l, e, a), v(e, t));
    },
    p(l, a) {
      a & 2 && A(t, l[1]);
    },
    d(l) {
      l && b(e);
    },
  };
}
function q(s) {
  let e, t, l;
  return (
    (t = new Y({ props: { $$slots: { default: [Z] }, $$scope: { ctx: s } } })),
    t.$on("buttonClick", s[9]),
    {
      c() {
        ((e = g("div")), F(t.$$.fragment), this.h());
      },
      l(a) {
        e = E(a, "DIV", { class: !0, "data-testid": !0 });
        var r = y(e);
        (G(t.$$.fragment, r), r.forEach(b), this.h());
      },
      h() {
        (h(e, "class", "banner__cta-button svelte-1ozlay5"), h(e, "data-testid", "upsell-banner-cta"));
      },
      m(a, r) {
        (C(a, e, r), K(t, e, null), (l = !0));
      },
      p(a, r) {
        const _ = {};
        (r & 1028 && (_.$$scope = { dirty: r, ctx: a }), t.$set(_));
      },
      i(a) {
        l || (m(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (l = !1));
      },
      d(a) {
        (a && b(e), N(t));
      },
    }
  );
}
function Z(s) {
  let e;
  return {
    c() {
      e = S(s[2]);
    },
    l(t) {
      e = B(t, s[2]);
    },
    m(t, l) {
      C(t, e, l);
    },
    p(t, l) {
      l & 4 && A(e, t[2]);
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
    r,
    _,
    u,
    p,
    i = !s[3] && U(s),
    c = s[0] && W(s),
    f = s[1] && X(s),
    o = s[2] && q(s);
  return {
    c() {
      ((e = g("div")),
        i && i.c(),
        (t = w()),
        (l = g("div")),
        c && c.c(),
        (a = w()),
        f && f.c(),
        (r = w()),
        o && o.c(),
        this.h());
    },
    l(n) {
      e = E(n, "DIV", { class: !0, "data-testid": !0 });
      var d = y(e);
      (i && i.l(d), (t = z(d)), (l = E(d, "DIV", { class: !0 })));
      var T = y(l);
      (c && c.l(T), (a = z(T)), f && f.l(T), T.forEach(b), (r = z(d)), o && o.l(d), d.forEach(b), this.h());
    },
    h() {
      (h(l, "class", "banner__text-container svelte-1ozlay5"),
        h(e, "class", "banner svelte-1ozlay5"),
        h(e, "data-testid", "upsell-banner-inline"),
        D(e, "banner--collapsed", s[3]));
    },
    m(n, d) {
      (C(n, e, d),
        i && i.m(e, null),
        v(e, t),
        v(e, l),
        c && c.m(l, null),
        v(l, a),
        f && f.m(l, null),
        v(e, r),
        o && o.m(e, null),
        (_ = !0),
        u || ((p = [I(e, "click", s[8]), I(e, "keydown", s[7])]), (u = !0)));
    },
    p(n, [d]) {
      (n[3]
        ? i &&
          (P(),
          k(i, 1, 1, () => {
            i = null;
          }),
          V())
        : i
          ? (i.p(n, d), d & 8 && m(i, 1))
          : ((i = U(n)), i.c(), m(i, 1), i.m(e, t)),
        n[0] ? (c ? c.p(n, d) : ((c = W(n)), c.c(), c.m(l, a))) : c && (c.d(1), (c = null)),
        n[1] ? (f ? f.p(n, d) : ((f = X(n)), f.c(), f.m(l, null))) : f && (f.d(1), (f = null)),
        n[2]
          ? o
            ? (o.p(n, d), d & 4 && m(o, 1))
            : ((o = q(n)), o.c(), m(o, 1), o.m(e, null))
          : o &&
            (P(),
            k(o, 1, 1, () => {
              o = null;
            }),
            V()),
        (!_ || d & 8) && D(e, "banner--collapsed", n[3]));
    },
    i(n) {
      _ || (m(i), m(o), (_ = !0));
    },
    o(n) {
      (k(i), k(o), (_ = !1));
    },
    d(n) {
      (n && b(e), i && i.d(), c && c.d(), f && f.d(), o && o.d(), (u = !1), J(p));
    },
  };
}
function x(s, e, t) {
  let l,
    { title: a = null } = e,
    { description: r = null } = e,
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
    M.call(this, s, n);
  }
  function o(n) {
    M.call(this, s, n);
  }
  return (
    (s.$$set = (n) => {
      ("title" in n && t(0, (a = n.title)),
        "description" in n && t(1, (r = n.description)),
        "ctaText" in n && t(2, (_ = n.ctaText)));
    }),
    [a, r, _, p, l, u, i, c, f, o]
  );
}
class te extends O {
  constructor(e) {
    (super(), j(this, e, x, $, H, { title: 0, description: 1, ctaText: 2 }));
  }
}
export { te as default };
