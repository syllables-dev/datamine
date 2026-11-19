import {
  S as z,
  i as F,
  n as G,
  d as p,
  r as H,
  t as k,
  b as m,
  g as y,
  c as M,
  f as U,
  h as T,
  j as v,
  l as A,
  e as h,
  p as g,
  q as E,
  u as I,
  w as C,
  x as S,
  U as L,
  P as Q,
  C as R,
  a as j,
  m as J,
  v as N,
  y as O,
  I as B,
  J as D,
  K as P,
  a5 as Y,
  a6 as V,
} from "./main.js";
function q(s) {
  let e, t, l, a, o, _;
  return (
    (t = new R({})),
    {
      c() {
        ((e = C("button")), O(t.$$.fragment), this.h());
      },
      l(u) {
        e = g(u, "BUTTON", { type: !0, class: !0, "data-testid": !0, "aria-label": !0 });
        var b = E(e);
        (N(t.$$.fragment, b), b.forEach(p), this.h());
      },
      h() {
        (h(e, "type", "button"),
          h(e, "class", "banner__close-button svelte-r5lnk4"),
          h(e, "data-testid", "upsell-banner-close"),
          h(e, "aria-label", (l = s[4].t("ASE.Web.Music.Shared.AX.Close"))));
      },
      m(u, b) {
        (T(u, e, b), J(t, e, null), (a = !0), o || ((_ = A(e, "click", s[6])), (o = !0)));
      },
      p(u, b) {
        (!a || (b & 16 && l !== (l = u[4].t("ASE.Web.Music.Shared.AX.Close")))) && h(e, "aria-label", l);
      },
      i(u) {
        a || (m(t.$$.fragment, u), (a = !0));
      },
      o(u) {
        (k(t.$$.fragment, u), (a = !1));
      },
      d(u) {
        (u && p(e), j(t), (o = !1), _());
      },
    }
  );
}
function K(s) {
  let e, t;
  return {
    c() {
      ((e = C("p")), (t = P(s[0])), this.h());
    },
    l(l) {
      e = g(l, "P", { class: !0, "data-testid": !0 });
      var a = E(e);
      ((t = D(a, s[0])), a.forEach(p), this.h());
    },
    h() {
      (h(e, "class", "text__title svelte-r5lnk4"), h(e, "data-testid", "upsell-banner-title"));
    },
    m(l, a) {
      (T(l, e, a), v(e, t));
    },
    p(l, a) {
      a & 1 && B(t, l[0]);
    },
    d(l) {
      l && p(e);
    },
  };
}
function W(s) {
  let e, t;
  return {
    c() {
      ((e = C("p")), (t = P(s[1])), this.h());
    },
    l(l) {
      e = g(l, "P", { class: !0, "data-testid": !0 });
      var a = E(e);
      ((t = D(a, s[1])), a.forEach(p), this.h());
    },
    h() {
      (h(e, "class", "text__description svelte-r5lnk4"), h(e, "data-testid", "upsell-banner-description"));
    },
    m(l, a) {
      (T(l, e, a), v(e, t));
    },
    p(l, a) {
      a & 2 && B(t, l[1]);
    },
    d(l) {
      l && p(e);
    },
  };
}
function X(s) {
  let e, t, l;
  return (
    (t = new Y({ props: { $$slots: { default: [Z] }, $$scope: { ctx: s } } })),
    t.$on("buttonClick", s[9]),
    {
      c() {
        ((e = C("div")), O(t.$$.fragment), this.h());
      },
      l(a) {
        e = g(a, "DIV", { class: !0, "data-testid": !0 });
        var o = E(e);
        (N(t.$$.fragment, o), o.forEach(p), this.h());
      },
      h() {
        (h(e, "class", "banner__cta-button svelte-r5lnk4"), h(e, "data-testid", "upsell-banner-cta"));
      },
      m(a, o) {
        (T(a, e, o), J(t, e, null), (l = !0));
      },
      p(a, o) {
        const _ = {};
        (o & 1028 && (_.$$scope = { dirty: o, ctx: a }), t.$set(_));
      },
      i(a) {
        l || (m(t.$$.fragment, a), (l = !0));
      },
      o(a) {
        (k(t.$$.fragment, a), (l = !1));
      },
      d(a) {
        (a && p(e), j(t));
      },
    }
  );
}
function Z(s) {
  let e;
  return {
    c() {
      e = P(s[2]);
    },
    l(t) {
      e = D(t, s[2]);
    },
    m(t, l) {
      T(t, e, l);
    },
    p(t, l) {
      l & 4 && B(e, t[2]);
    },
    d(t) {
      t && p(e);
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
    b,
    i = !s[3] && q(s),
    c = s[0] && K(s),
    f = s[1] && W(s),
    r = s[2] && X(s);
  return {
    c() {
      ((e = C("div")),
        i && i.c(),
        (t = S()),
        (l = C("div")),
        c && c.c(),
        (a = S()),
        f && f.c(),
        (o = S()),
        r && r.c(),
        this.h());
    },
    l(n) {
      e = g(n, "DIV", { class: !0, "data-testid": !0 });
      var d = E(e);
      (i && i.l(d), (t = I(d)), (l = g(d, "DIV", { class: !0 })));
      var w = E(l);
      (c && c.l(w), (a = I(w)), f && f.l(w), w.forEach(p), (o = I(d)), r && r.l(d), d.forEach(p), this.h());
    },
    h() {
      (h(l, "class", "banner__text-container svelte-r5lnk4"),
        h(e, "class", "banner svelte-r5lnk4"),
        h(e, "data-testid", "upsell-banner-inline"),
        U(e, "banner--collapsed", s[3]));
    },
    m(n, d) {
      (T(n, e, d),
        i && i.m(e, null),
        v(e, t),
        v(e, l),
        c && c.m(l, null),
        v(l, a),
        f && f.m(l, null),
        v(e, o),
        r && r.m(e, null),
        (_ = !0),
        u || ((b = [A(e, "click", s[8]), A(e, "keydown", s[7])]), (u = !0)));
    },
    p(n, [d]) {
      (n[3]
        ? i &&
          (y(),
          k(i, 1, 1, () => {
            i = null;
          }),
          M())
        : i
          ? (i.p(n, d), d & 8 && m(i, 1))
          : ((i = q(n)), i.c(), m(i, 1), i.m(e, t)),
        n[0] ? (c ? c.p(n, d) : ((c = K(n)), c.c(), c.m(l, a))) : c && (c.d(1), (c = null)),
        n[1] ? (f ? f.p(n, d) : ((f = W(n)), f.c(), f.m(l, null))) : f && (f.d(1), (f = null)),
        n[2]
          ? r
            ? (r.p(n, d), d & 4 && m(r, 1))
            : ((r = X(n)), r.c(), m(r, 1), r.m(e, null))
          : r &&
            (y(),
            k(r, 1, 1, () => {
              r = null;
            }),
            M()),
        (!_ || d & 8) && U(e, "banner--collapsed", n[3]));
    },
    i(n) {
      _ || (m(i), m(r), (_ = !0));
    },
    o(n) {
      (k(i), k(r), (_ = !1));
    },
    d(n) {
      (n && p(e), i && i.d(), c && c.d(), f && f.d(), r && r.d(), (u = !1), H(b));
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
  let b = !1;
  const i = (n) => {
      (n.stopPropagation(), t(3, (b = !0)));
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
    [a, o, _, b, l, u, i, c, f, r]
  );
}
class te extends z {
  constructor(e) {
    (super(), F(this, e, x, $, G, { title: 0, description: 1, ctaText: 2 }));
  }
}
export { te as default };
