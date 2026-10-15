import {
  S as d,
  i as _,
  n as g,
  aN as m,
  e as c,
  a as k,
  b,
  g as f,
  h,
  t as o,
  O as u,
  k as v,
  aO as B,
  aP as p,
  aQ as C,
  r as D,
  v as T,
} from "./main.js";
function L(i) {
  let t, s;
  const r = i[3].default,
    a = m(r, i, i[2], null);
  return {
    c() {
      ((t = c("div")), a && a.c(), this.h());
    },
    l(e) {
      t = k(e, "DIV", { class: !0, "data-testid": !0 });
      var l = b(t);
      (a && a.l(l), l.forEach(f), this.h());
    },
    h() {
      (h(t, "class", "title-badge svelte-h0f8lr"),
        h(t, "data-testid", "title-badge"),
        o(t, "title-badge--light", i[0] === u.Light),
        o(t, "title-badge--dark", i[0] === u.Dark),
        o(t, "has-breakpoint", i[1]));
    },
    m(e, l) {
      (v(e, t, l), a && a.m(t, null), (s = !0));
    },
    p(e, [l]) {
      (a && a.p && (!s || l & 4) && B(a, r, e, e[2], s ? C(r, e[2], l, null) : p(e[2]), null),
        (!s || l & 1) && o(t, "title-badge--light", e[0] === u.Light),
        (!s || l & 1) && o(t, "title-badge--dark", e[0] === u.Dark),
        (!s || l & 2) && o(t, "has-breakpoint", e[1]));
    },
    i(e) {
      s || (D(a, e), (s = !0));
    },
    o(e) {
      (T(a, e), (s = !1));
    },
    d(e) {
      (e && f(t), a && a.d(e));
    },
  };
}
function O(i, t, s) {
  let { $$slots: r = {}, $$scope: a } = t,
    { theme: e = null } = t,
    { useBreakpoint: l = !1 } = t;
  return (
    (i.$$set = (n) => {
      ("theme" in n && s(0, (e = n.theme)),
        "useBreakpoint" in n && s(1, (l = n.useBreakpoint)),
        "$$scope" in n && s(2, (a = n.$$scope)));
    }),
    [e, l, a, r]
  );
}
class q extends d {
  constructor(t) {
    (super(), _(this, t, O, L, g, { theme: 0, useBreakpoint: 1 }));
  }
}
export { q as T };
