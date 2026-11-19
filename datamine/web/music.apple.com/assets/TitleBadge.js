import {
  S as d,
  i as _,
  n as g,
  aJ as m,
  d as u,
  t as c,
  b,
  aK as k,
  aL as p,
  aM as B,
  f as o,
  O as f,
  h as v,
  e as h,
  p as C,
  q as D,
  w as L,
} from "./main.js";
function T(i) {
  let t, s;
  const r = i[3].default,
    a = m(r, i, i[2], null);
  return {
    c() {
      ((t = L("div")), a && a.c(), this.h());
    },
    l(e) {
      t = C(e, "DIV", { class: !0, "data-testid": !0 });
      var l = D(t);
      (a && a.l(l), l.forEach(u), this.h());
    },
    h() {
      (h(t, "class", "title-badge svelte-h0f8lr"),
        h(t, "data-testid", "title-badge"),
        o(t, "title-badge--light", i[0] === f.Light),
        o(t, "title-badge--dark", i[0] === f.Dark),
        o(t, "has-breakpoint", i[1]));
    },
    m(e, l) {
      (v(e, t, l), a && a.m(t, null), (s = !0));
    },
    p(e, [l]) {
      (a && a.p && (!s || l & 4) && k(a, r, e, e[2], s ? B(r, e[2], l, null) : p(e[2]), null),
        (!s || l & 1) && o(t, "title-badge--light", e[0] === f.Light),
        (!s || l & 1) && o(t, "title-badge--dark", e[0] === f.Dark),
        (!s || l & 2) && o(t, "has-breakpoint", e[1]));
    },
    i(e) {
      s || (b(a, e), (s = !0));
    },
    o(e) {
      (c(a, e), (s = !1));
    },
    d(e) {
      (e && u(t), a && a.d(e));
    },
  };
}
function q(i, t, s) {
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
class w extends d {
  constructor(t) {
    (super(), _(this, t, q, T, g, { theme: 0, useBreakpoint: 1 }));
  }
}
export { w as T };
