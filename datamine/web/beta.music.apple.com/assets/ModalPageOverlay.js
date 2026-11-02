import {
  S as Te,
  i as qe,
  n as Ce,
  C as Ve,
  e as y,
  s as S,
  c as U,
  a as E,
  b as D,
  d as O,
  f as j,
  g as f,
  h,
  t as Y,
  j as ne,
  k as w,
  l as k,
  m as G,
  o as Ae,
  p as Ne,
  q as Be,
  r as m,
  u as $,
  v,
  w as F,
  x as J,
  y as Pe,
  z as Se,
  A as Oe,
  B as $e,
  D as Ie,
  E as L,
  F as R,
  G as W,
  H as K,
  I as z,
  J as B,
  K as ee,
  L as re,
  M as Fe,
  N as Me,
  O as He,
  P as Q,
  Q as se,
  R as Ke,
  T as ce,
  U as Le,
  V as Re,
  W as We,
  X as fe,
} from "./main.js";
import { T as Xe } from "./TitleBadge.js";
function ue(i, l, a) {
  const t = i.slice();
  return ((t[16] = l[a]), t);
}
function _e(i, l, a) {
  const t = i.slice();
  return ((t[21] = l[a]), t);
}
function de(i, l, a) {
  const t = i.slice();
  return ((t[24] = l[a]), t);
}
function x(i) {
  const l = i.slice(),
    a = al(l[19]);
  return ((l[20] = a), l);
}
function ze(i) {
  const l = i.slice(),
    a = l[16].items?.[0];
  l[19] = a;
  const t = ol(l[16]);
  return ((l[27] = t), l);
}
function Ue(i) {
  const l = i.slice(),
    a = l[16].items?.[0];
  return ((l[19] = a), l);
}
function je(i) {
  const l = i.slice(),
    a = l[16].items?.[0];
  return ((l[19] = a), l);
}
function he(i) {
  let l, a, t;
  return (
    (a = new Ie({ props: { artwork: i[4].artwork, profile: "artist-bio", alt: "" } })),
    {
      c() {
        ((l = y("div")), U(a.$$.fragment), this.h());
      },
      l(e) {
        l = E(e, "DIV", { class: !0, "aria-hidden": !0 });
        var n = D(l);
        (j(a.$$.fragment, n), n.forEach(f), this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__reflection svelte-q0hy4i"), h(l, "aria-hidden", "true"));
      },
      m(e, n) {
        (w(e, l, n), G(a, l, null), (t = !0));
      },
      p(e, n) {
        const o = {};
        (n & 16 && (o.artwork = e[4].artwork), a.$set(o));
      },
      i(e) {
        t || (m(a.$$.fragment, e), (t = !0));
      },
      o(e) {
        (v(a.$$.fragment, e), (t = !1));
      },
      d(e) {
        (e && f(l), J(a));
      },
    }
  );
}
function me(i) {
  let l, a, t, e, n;
  return (
    (a = new Ie({ props: { artwork: i[4].artwork, profile: "artist-bio", alt: i[4].title ?? "" } })),
    {
      c() {
        ((l = y("div")), U(a.$$.fragment), (t = S()), (e = y("div")), this.h());
      },
      l(o) {
        l = E(o, "DIV", { class: !0 });
        var s = D(l);
        (j(a.$$.fragment, s),
          s.forEach(f),
          (t = O(o)),
          (e = E(o, "DIV", { class: !0, "aria-hidden": !0 })),
          D(e).forEach(f),
          this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__artwork svelte-q0hy4i"),
          h(e, "class", "canvas-modal__artwork-anchor svelte-q0hy4i"),
          h(e, "aria-hidden", "true"));
      },
      m(o, s) {
        (w(o, l, s), G(a, l, null), w(o, t, s), w(o, e, s), (n = !0));
      },
      p(o, s) {
        const r = {};
        (s & 16 && (r.artwork = o[4].artwork), s & 16 && (r.alt = o[4].title ?? ""), a.$set(r));
      },
      i(o) {
        n || (m(a.$$.fragment, o), (n = !0));
      },
      o(o) {
        (v(a.$$.fragment, o), (n = !1));
      },
      d(o) {
        (o && (f(l), f(t), f(e)), J(a));
      },
    }
  );
}
function Ge(i) {
  let l,
    a = i[2].title + "",
    t,
    e,
    n,
    o,
    s = i[2].text + "",
    r;
  return {
    c() {
      ((l = y("h1")), (t = L(a)), (e = S()), (n = y("div")), (o = y("p")), (r = L(s)), this.h());
    },
    l(c) {
      l = E(c, "H1", { class: !0, "data-testid": !0 });
      var u = D(l);
      ((t = R(u, a)), u.forEach(f), (e = O(c)), (n = E(c, "DIV", { class: !0, "data-testid": !0 })));
      var p = D(n);
      o = E(p, "P", {});
      var q = D(o);
      ((r = R(q, s)), q.forEach(f), p.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-q0hy4i"),
        h(l, "data-testid", "canvas-modal-title"),
        h(n, "class", "canvas-modal__text svelte-q0hy4i"),
        h(n, "data-testid", "canvas-modal-text"));
    },
    m(c, u) {
      (w(c, l, u), k(l, t), w(c, e, u), w(c, n, u), k(n, o), k(o, r));
    },
    p(c, u) {
      (u & 4 && a !== (a = c[2].title + "") && W(t, a), u & 4 && s !== (s = c[2].text + "") && W(r, s));
    },
    i: K,
    o: K,
    d(c) {
      c && (f(l), f(e), f(n));
    },
  };
}
function Je(i) {
  let l,
    a,
    t = z(i[0] ?? []),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = Ee(ue(i, t, o));
  const n = (o) =>
    v(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      l = B();
    },
    l(o) {
      for (let s = 0; s < e.length; s += 1) e[s].l(o);
      l = B();
    },
    m(o, s) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(o, s);
      (w(o, l, s), (a = !0));
    },
    p(o, s) {
      if (s & 1) {
        t = z(o[0] ?? []);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = ue(o, t, r);
          e[r] ? (e[r].p(c, s), m(e[r], 1)) : ((e[r] = Ee(c)), e[r].c(), m(e[r], 1), e[r].m(l.parentNode, l));
        }
        for ($(), r = t.length; r < e.length; r += 1) n(r);
        F();
      }
    },
    i(o) {
      if (!a) {
        for (let s = 0; s < t.length; s += 1) m(e[s]);
        a = !0;
      }
    },
    o(o) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1) v(e[s]);
      a = !1;
    },
    d(o) {
      (o && f(l), ee(e, o));
    },
  };
}
function Qe(i) {
  let l,
    a,
    t = i[27] && ve(i),
    e = i[19]?.text && pe(i);
  return {
    c() {
      (t && t.c(), (l = S()), e && e.c(), (a = B()));
    },
    l(n) {
      (t && t.l(n), (l = O(n)), e && e.l(n), (a = B()));
    },
    m(n, o) {
      (t && t.m(n, o), w(n, l, o), e && e.m(n, o), w(n, a, o));
    },
    p(n, o) {
      (n[27] ? (t ? t.p(n, o) : ((t = ve(n)), t.c(), t.m(l.parentNode, l))) : t && (t.d(1), (t = null)),
        n[19]?.text ? (e ? e.p(n, o) : ((e = pe(n)), e.c(), e.m(a.parentNode, a))) : e && (e.d(1), (e = null)));
    },
    i: K,
    o: K,
    d(n) {
      (n && (f(l), f(a)), t && t.d(n), e && e.d(n));
    },
  };
}
function Ye(i) {
  let l,
    a,
    t = i[19] && ge(x(i));
  return {
    c() {
      (t && t.c(), (l = B()));
    },
    l(e) {
      (t && t.l(e), (l = B()));
    },
    m(e, n) {
      (t && t.m(e, n), w(e, l, n), (a = !0));
    },
    p(e, n) {
      e[19]
        ? t
          ? (t.p(x(e), n), n & 1 && m(t, 1))
          : ((t = ge(x(e))), t.c(), m(t, 1), t.m(l.parentNode, l))
        : t &&
          ($(),
          v(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(e) {
      a || (m(t), (a = !0));
    },
    o(e) {
      (v(t), (a = !1));
    },
    d(e) {
      (e && f(l), t && t.d(e));
    },
  };
}
function Ze(i) {
  let l,
    a = i[19]?.title && ye(i);
  return {
    c() {
      (a && a.c(), (l = B()));
    },
    l(t) {
      (a && a.l(t), (l = B()));
    },
    m(t, e) {
      (a && a.m(t, e), w(t, l, e));
    },
    p(t, e) {
      t[19]?.title ? (a ? a.p(t, e) : ((a = ye(t)), a.c(), a.m(l.parentNode, l))) : a && (a.d(1), (a = null));
    },
    i: K,
    o: K,
    d(t) {
      (t && f(l), a && a.d(t));
    },
  };
}
function ve(i) {
  let l,
    a = i[27] + "",
    t;
  return {
    c() {
      ((l = y("h2")), (t = L(a)), this.h());
    },
    l(e) {
      l = E(e, "H2", { class: !0, "data-testid": !0 });
      var n = D(l);
      ((t = R(n, a)), n.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__text-title svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-text-title"));
    },
    m(e, n) {
      (w(e, l, n), k(l, t));
    },
    p(e, n) {
      n & 1 && a !== (a = e[27] + "") && W(t, a);
    },
    d(e) {
      e && f(l);
    },
  };
}
function pe(i) {
  let l,
    a,
    t,
    e = re(i[19].text) + "",
    n;
  return {
    c() {
      ((l = y("div")), (a = y("p")), (t = new Fe(!1)), (n = S()), this.h());
    },
    l(o) {
      l = E(o, "DIV", { class: !0, "data-testid": !0 });
      var s = D(l);
      a = E(s, "P", {});
      var r = D(a);
      ((t = Me(r, !1)), r.forEach(f), (n = O(s)), s.forEach(f), this.h());
    },
    h() {
      ((t.a = null), h(l, "class", "canvas-modal__text svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-text"));
    },
    m(o, s) {
      (w(o, l, s), k(l, a), t.m(e, a), k(l, n));
    },
    p(o, s) {
      s & 1 && e !== (e = re(o[19].text) + "") && t.p(e);
    },
    d(o) {
      o && f(l);
    },
  };
}
function ge(i) {
  let l,
    a,
    t = i[20].length > 0 && be(i);
  return {
    c() {
      (t && t.c(), (l = B()));
    },
    l(e) {
      (t && t.l(e), (l = B()));
    },
    m(e, n) {
      (t && t.m(e, n), w(e, l, n), (a = !0));
    },
    p(e, n) {
      e[20].length > 0
        ? t
          ? (t.p(e, n), n & 1 && m(t, 1))
          : ((t = be(e)), t.c(), m(t, 1), t.m(l.parentNode, l))
        : t &&
          ($(),
          v(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(e) {
      a || (m(t), (a = !0));
    },
    o(e) {
      (v(t), (a = !1));
    },
    d(e) {
      (e && f(l), t && t.d(e));
    },
  };
}
function be(i) {
  let l,
    a,
    t = z(i[20]),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = we(_e(i, t, o));
  const n = (o) =>
    v(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      l = y("dl");
      for (let o = 0; o < e.length; o += 1) e[o].c();
      this.h();
    },
    l(o) {
      l = E(o, "DL", { class: !0, "data-testid": !0 });
      var s = D(l);
      for (let r = 0; r < e.length; r += 1) e[r].l(s);
      (s.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__info svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-info"));
    },
    m(o, s) {
      w(o, l, s);
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(l, null);
      a = !0;
    },
    p(o, s) {
      if (s & 1) {
        t = z(o[20]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = _e(o, t, r);
          e[r] ? (e[r].p(c, s), m(e[r], 1)) : ((e[r] = we(c)), e[r].c(), m(e[r], 1), e[r].m(l, null));
        }
        for ($(), r = t.length; r < e.length; r += 1) n(r);
        F();
      }
    },
    i(o) {
      if (!a) {
        for (let s = 0; s < t.length; s += 1) m(e[s]);
        a = !0;
      }
    },
    o(o) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1) v(e[s]);
      a = !1;
    },
    d(o) {
      (o && f(l), ee(e, o));
    },
  };
}
function xe(i) {
  let l = i[21].value + "",
    a;
  return {
    c() {
      a = L(l);
    },
    l(t) {
      a = R(t, l);
    },
    m(t, e) {
      w(t, a, e);
    },
    p(t, e) {
      e & 1 && l !== (l = t[21].value + "") && W(a, l);
    },
    i: K,
    o: K,
    d(t) {
      t && f(a);
    },
  };
}
function el(i) {
  let l,
    a,
    t = z(i[21].value),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = ke(de(i, t, o));
  const n = (o) =>
    v(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      l = B();
    },
    l(o) {
      for (let s = 0; s < e.length; s += 1) e[s].l(o);
      l = B();
    },
    m(o, s) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(o, s);
      (w(o, l, s), (a = !0));
    },
    p(o, s) {
      if (s & 1) {
        t = z(o[21].value);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = de(o, t, r);
          e[r] ? (e[r].p(c, s), m(e[r], 1)) : ((e[r] = ke(c)), e[r].c(), m(e[r], 1), e[r].m(l.parentNode, l));
        }
        for ($(), r = t.length; r < e.length; r += 1) n(r);
        F();
      }
    },
    i(o) {
      if (!a) {
        for (let s = 0; s < t.length; s += 1) m(e[s]);
        a = !0;
      }
    },
    o(o) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1) v(e[s]);
      a = !1;
    },
    d(o) {
      (o && f(l), ee(e, o));
    },
  };
}
function ll(i) {
  let l = i[24] + "",
    a;
  return {
    c() {
      a = L(l);
    },
    l(t) {
      a = R(t, l);
    },
    m(t, e) {
      w(t, a, e);
    },
    p(t, e) {
      e & 1 && l !== (l = t[24] + "") && W(a, l);
    },
    d(t) {
      t && f(a);
    },
  };
}
function ke(i) {
  let l, a;
  return (
    (l = new Xe({ props: { theme: He.Dark, $$slots: { default: [ll] }, $$scope: { ctx: i } } })),
    {
      c() {
        U(l.$$.fragment);
      },
      l(t) {
        j(l.$$.fragment, t);
      },
      m(t, e) {
        (G(l, t, e), (a = !0));
      },
      p(t, e) {
        const n = {};
        (e & 268435457 && (n.$$scope = { dirty: e, ctx: t }), l.$set(n));
      },
      i(t) {
        a || (m(l.$$.fragment, t), (a = !0));
      },
      o(t) {
        (v(l.$$.fragment, t), (a = !1));
      },
      d(t) {
        J(l, t);
      },
    }
  );
}
function we(i) {
  let l,
    a,
    t = i[21].label + "",
    e,
    n,
    o,
    s,
    r,
    c,
    u,
    p;
  const q = [el, xe],
    T = [];
  function C(_, d) {
    return (d & 1 && (s = null), s == null && (s = !!Array.isArray(_[21].value)), s ? 0 : 1);
  }
  return (
    (r = C(i, -1)),
    (c = T[r] = q[r](i)),
    {
      c() {
        ((l = y("div")), (a = y("dt")), (e = L(t)), (n = S()), (o = y("dd")), c.c(), (u = S()), this.h());
      },
      l(_) {
        l = E(_, "DIV", { class: !0 });
        var d = D(l);
        a = E(d, "DT", { class: !0 });
        var P = D(a);
        ((e = R(P, t)), P.forEach(f), (n = O(d)), (o = E(d, "DD", { class: !0 })));
        var g = D(o);
        (c.l(g), g.forEach(f), (u = O(d)), d.forEach(f), this.h());
      },
      h() {
        (h(a, "class", "canvas-modal__info-label svelte-q0hy4i"),
          h(o, "class", "canvas-modal__info-value svelte-q0hy4i"),
          h(l, "class", "canvas-modal__info-row svelte-q0hy4i"),
          Y(l, "canvas-modal__info-row--badges", Array.isArray(i[21].value)));
      },
      m(_, d) {
        (w(_, l, d), k(l, a), k(a, e), k(l, n), k(l, o), T[r].m(o, null), k(l, u), (p = !0));
      },
      p(_, d) {
        (!p || d & 1) && t !== (t = _[21].label + "") && W(e, t);
        let P = r;
        ((r = C(_, d)),
          r === P
            ? T[r].p(_, d)
            : ($(),
              v(T[P], 1, 1, () => {
                T[P] = null;
              }),
              F(),
              (c = T[r]),
              c ? c.p(_, d) : ((c = T[r] = q[r](_)), c.c()),
              m(c, 1),
              c.m(o, null)),
          (!p || d & 1) && Y(l, "canvas-modal__info-row--badges", Array.isArray(_[21].value)));
      },
      i(_) {
        p || (m(c), (p = !0));
      },
      o(_) {
        (v(c), (p = !1));
      },
      d(_) {
        (_ && f(l), T[r].d());
      },
    }
  );
}
function ye(i) {
  let l,
    a = i[19].title + "",
    t,
    e;
  return {
    c() {
      ((l = y("h1")), (t = L(a)), (e = S()), this.h());
    },
    l(n) {
      l = E(n, "H1", { class: !0, "data-testid": !0 });
      var o = D(l);
      ((t = R(o, a)), (e = O(o)), o.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-title"));
    },
    m(n, o) {
      (w(n, l, o), k(l, t), k(l, e));
    },
    p(n, o) {
      o & 1 && a !== (a = n[19].title + "") && W(t, a);
    },
    d(n) {
      n && f(l);
    },
  };
}
function Ee(i) {
  let l, a, t, e;
  const n = [Ze, Ye, Qe],
    o = [];
  function s(c, u) {
    return c[16].itemKind === "artistBioHeader"
      ? 0
      : c[16].itemKind === "artistBioInfo"
        ? 1
        : c[16].itemKind === "plainTextBlock"
          ? 2
          : -1;
  }
  function r(c, u) {
    if (u === 0) return je(c);
    if (u === 1) return Ue(c);
    if (u === 2) return ze(c);
  }
  return (
    ~(l = s(i)) && (a = o[l] = n[l](r(i, l))),
    {
      c() {
        (a && a.c(), (t = B()));
      },
      l(c) {
        (a && a.l(c), (t = B()));
      },
      m(c, u) {
        (~l && o[l].m(c, u), w(c, t, u), (e = !0));
      },
      p(c, u) {
        let p = l;
        ((l = s(c)),
          l === p
            ? ~l && o[l].p(r(c, l), u)
            : (a &&
                ($(),
                v(o[p], 1, 1, () => {
                  o[p] = null;
                }),
                F()),
              ~l
                ? ((a = o[l]), a ? a.p(r(c, l), u) : ((a = o[l] = n[l](r(c, l))), a.c()), m(a, 1), a.m(t.parentNode, t))
                : (a = null)));
      },
      i(c) {
        e || (m(a), (e = !0));
      },
      o(c) {
        (v(a), (e = !1));
      },
      d(c) {
        (c && f(t), ~l && o[l].d(c));
      },
    }
  );
}
function tl(i) {
  let l,
    a,
    t,
    e,
    n,
    o,
    s,
    r,
    c,
    u,
    p,
    q,
    T,
    C,
    _,
    d,
    P,
    g,
    N,
    Z,
    le,
    I = i[4]?.artwork && he(i);
  e = new Ve({});
  let V = i[4]?.artwork && me(i);
  const te = [Je, Ge],
    H = [];
  function ae(b, A) {
    return b[6] ? 0 : b[2] ? 1 : -1;
  }
  return (
    ~(_ = ae(i)) && (d = H[_] = te[_](i)),
    {
      c() {
        ((l = y("div")),
          I && I.c(),
          (a = S()),
          (t = y("button")),
          U(e.$$.fragment),
          (o = S()),
          (s = y("div")),
          (r = y("div")),
          (c = S()),
          (u = y("div")),
          (p = S()),
          V && V.c(),
          (q = S()),
          (T = y("div")),
          (C = y("div")),
          d && d.c(),
          (P = S()),
          (g = y("div")),
          this.h());
      },
      l(b) {
        l = E(b, "DIV", { class: !0, "data-testid": !0 });
        var A = D(l);
        (I && I.l(A), (a = O(A)), (t = E(A, "BUTTON", { class: !0, type: !0, "aria-label": !0 })));
        var X = D(t);
        (j(e.$$.fragment, X), X.forEach(f), (o = O(A)), (s = E(A, "DIV", { class: !0 })));
        var M = D(s);
        ((r = E(M, "DIV", { class: !0, "aria-hidden": !0 })),
          D(r).forEach(f),
          (c = O(M)),
          (u = E(M, "DIV", { class: !0, "aria-hidden": !0 })),
          D(u).forEach(f),
          (p = O(M)),
          V && V.l(M),
          (q = O(M)),
          (T = E(M, "DIV", { class: !0 })));
        var oe = D(T);
        C = E(oe, "DIV", { class: !0 });
        var ie = D(C);
        (d && d.l(ie),
          ie.forEach(f),
          oe.forEach(f),
          (P = O(M)),
          (g = E(M, "DIV", { class: !0, "aria-hidden": !0 })),
          D(g).forEach(f),
          M.forEach(f),
          A.forEach(f),
          this.h());
      },
      h() {
        (h(t, "class", "canvas-modal__close-button svelte-q0hy4i"),
          h(t, "type", "button"),
          h(t, "aria-label", (n = i[1]("ASE.Web.Platform.Shared.AX.Close"))),
          h(r, "class", "canvas-modal__fade canvas-modal__fade--top svelte-q0hy4i"),
          h(r, "aria-hidden", "true"),
          h(u, "class", "canvas-modal__scrim-scroll svelte-q0hy4i"),
          h(u, "aria-hidden", "true"),
          h(C, "class", "canvas-modal__article-content svelte-q0hy4i"),
          h(T, "class", "canvas-modal__article svelte-q0hy4i"),
          h(g, "class", "canvas-modal__fade canvas-modal__fade--bottom svelte-q0hy4i"),
          h(g, "aria-hidden", "true"),
          h(s, "class", "canvas-modal__content svelte-q0hy4i"),
          h(l, "class", "canvas-modal svelte-q0hy4i"),
          h(l, "data-testid", "canvas-modal"),
          Y(l, "canvas-modal--no-scroll-scrim", i[5]),
          ne(l, "--canvas-modal-bg-color", i[3]));
      },
      m(b, A) {
        (w(b, l, A),
          I && I.m(l, null),
          k(l, a),
          k(l, t),
          G(e, t, null),
          k(l, o),
          k(l, s),
          k(s, r),
          k(s, c),
          k(s, u),
          k(s, p),
          V && V.m(s, null),
          k(s, q),
          k(s, T),
          k(T, C),
          ~_ && H[_].m(C, null),
          k(s, P),
          k(s, g),
          (N = !0),
          Z || ((le = [Ae(t, "click", i[7]), Ne(Be.call(null, t))]), (Z = !0)));
      },
      p(b, [A]) {
        (b[4]?.artwork
          ? I
            ? (I.p(b, A), A & 16 && m(I, 1))
            : ((I = he(b)), I.c(), m(I, 1), I.m(l, a))
          : I &&
            ($(),
            v(I, 1, 1, () => {
              I = null;
            }),
            F()),
          (!N || (A & 2 && n !== (n = b[1]("ASE.Web.Platform.Shared.AX.Close")))) && h(t, "aria-label", n),
          b[4]?.artwork
            ? V
              ? (V.p(b, A), A & 16 && m(V, 1))
              : ((V = me(b)), V.c(), m(V, 1), V.m(s, q))
            : V &&
              ($(),
              v(V, 1, 1, () => {
                V = null;
              }),
              F()));
        let X = _;
        ((_ = ae(b)),
          _ === X
            ? ~_ && H[_].p(b, A)
            : (d &&
                ($(),
                v(H[X], 1, 1, () => {
                  H[X] = null;
                }),
                F()),
              ~_ ? ((d = H[_]), d ? d.p(b, A) : ((d = H[_] = te[_](b)), d.c()), m(d, 1), d.m(C, null)) : (d = null)),
          (!N || A & 32) && Y(l, "canvas-modal--no-scroll-scrim", b[5]),
          A & 8 && ne(l, "--canvas-modal-bg-color", b[3]));
      },
      i(b) {
        N || (m(I), m(e.$$.fragment, b), m(V), m(d), (N = !0));
      },
      o(b) {
        (v(I), v(e.$$.fragment, b), v(V), v(d), (N = !1));
      },
      d(b) {
        (b && f(l), I && I.d(), J(e), V && V.d(), ~_ && H[_].d(), (Z = !1), Pe(le));
      },
    }
  );
}
function al(i) {
  var l;
  const a = [];
  return (
    i.bornOrFormedTitle && i.bornOrFormedValue && a.push({ label: i.bornOrFormedTitle, value: i.bornOrFormedValue }),
    i.originTitle && i.originValue && a.push({ label: i.originTitle, value: i.originValue }),
    i.genreTitle &&
      !((l = i.genres) === null || l === void 0) &&
      l.length &&
      a.push({ label: i.genreTitle, value: i.genres }),
    a
  );
}
function ol(i) {
  var l, a;
  const t = i.header;
  if (t)
    return "title" in t
      ? t.title
      : (a = (l = t.item) === null || l === void 0 ? void 0 : l.titleLink) === null || a === void 0
        ? void 0
        : a.title;
}
function il(i, l, a) {
  let t, e, n, o, s, r;
  var c, u, p, q, T;
  let { sections: C = null } = l,
    { translateFn: _ } = l,
    { placeholder: d = null } = l;
  const P = Se(),
    g = (N) => {
      (N.preventDefault(), N.stopPropagation(), P("close"));
    };
  return (
    (i.$$set = (N) => {
      ("sections" in N && a(0, (C = N.sections)),
        "translateFn" in N && a(1, (_ = N.translateFn)),
        "placeholder" in N && a(2, (d = N.placeholder)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 1 && a(14, (t = C?.find((N) => N.itemKind === "artistBioHeader"))),
        i.$$.dirty & 16640 && a(4, (e = a(8, (c = t?.items)) === null || c === void 0 ? void 0 : c[0])),
        i.$$.dirty & 1 && a(6, (n = !!C && C.length > 0)),
        i.$$.dirty & 3600 &&
          a(
            13,
            (o =
              !(
                a(10, (p = a(9, (u = e?.colorBackdropArtwork)) === null || u === void 0 ? void 0 : u.dictionary)) ===
                  null || p === void 0
              ) && p.bgColor
                ? e.colorBackdropArtwork.dictionary
                : a(11, (q = e?.artwork)) === null || q === void 0
                  ? void 0
                  : q.dictionary),
          ),
        i.$$.dirty & 12288 &&
          a(3, (s = a(12, (T = o?.bgColor ? Oe(o.bgColor) : null)) !== null && T !== void 0 ? T : void 0)),
        i.$$.dirty & 8 && a(5, (r = !$e(s))));
    }),
    [C, _, d, s, e, r, n, g, c, u, p, q, T, o, t]
  );
}
class nl extends Te {
  constructor(l) {
    (super(), qe(this, l, il, tl, Ce, { sections: 0, translateFn: 1, placeholder: 2 }));
  }
}
function De(i) {
  let l,
    a,
    t = {
      modalTriggerElement: i[5],
      showOnMount: !!i[1],
      preventDefaultClose: !0,
      dialogClassNames: i[3],
      $$slots: { default: [rl] },
      $$scope: { ctx: i },
    };
  return (
    (l = new We({ props: t })),
    i[12](l),
    l.$on("close", i[8]),
    {
      c() {
        U(l.$$.fragment);
      },
      l(e) {
        j(l.$$.fragment, e);
      },
      m(e, n) {
        (G(l, e, n), (a = !0));
      },
      p(e, n) {
        const o = {};
        (n & 32 && (o.modalTriggerElement = e[5]),
          n & 2 && (o.showOnMount = !!e[1]),
          n & 8 && (o.dialogClassNames = e[3]),
          n & 32854 && (o.$$scope = { dirty: n, ctx: e }),
          l.$set(o));
      },
      i(e) {
        a || (m(l.$$.fragment, e), (a = !0));
      },
      o(e) {
        (v(l.$$.fragment, e), (a = !1));
      },
      d(e) {
        (i[12](null), J(l, e));
      },
    }
  );
}
function rl(i) {
  let l, a, t;
  return (
    (a = new nl({ props: { sections: i[1]?.sections ?? null, placeholder: i[4], translateFn: i[10] } })),
    a.$on("close", i[8]),
    {
      c() {
        ((l = y("div")), U(a.$$.fragment), this.h());
      },
      l(e) {
        l = E(e, "DIV", { class: !0 });
        var n = D(l);
        (j(a.$$.fragment, n), n.forEach(f), this.h());
      },
      h() {
        h(l, "class", "modal-page-overlay__inner svelte-101sxrd");
      },
      m(e, n) {
        (w(e, l, n), G(a, l, null), i[11](l), (t = !0));
      },
      p(e, n) {
        const o = {};
        (n & 2 && (o.sections = e[1]?.sections ?? null),
          n & 16 && (o.placeholder = e[4]),
          n & 64 && (o.translateFn = e[10]),
          a.$set(o));
      },
      i(e) {
        t || (m(a.$$.fragment, e), (t = !0));
      },
      o(e) {
        (v(a.$$.fragment, e), (t = !1));
      },
      d(e) {
        (e && f(l), J(a), i[11](null));
      },
    }
  );
}
function sl(i) {
  let l,
    a,
    t = (i[1] || i[4]) && De(i);
  return {
    c() {
      (t && t.c(), (l = B()));
    },
    l(e) {
      (t && t.l(e), (l = B()));
    },
    m(e, n) {
      (t && t.m(e, n), w(e, l, n), (a = !0));
    },
    p(e, [n]) {
      e[1] || e[4]
        ? t
          ? (t.p(e, n), n & 18 && m(t, 1))
          : ((t = De(e)), t.c(), m(t, 1), t.m(l.parentNode, l))
        : t &&
          ($(),
          v(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(e) {
      a || (m(t), (a = !0));
    },
    o(e) {
      (v(t), (a = !1));
    },
    d(e) {
      (e && f(l), t && t.d(e));
    },
  };
}
const cl = 300;
function fl(i, l, a) {
  let t, e, n, o, s;
  (Q(i, se, (g) => a(1, (e = g))), Q(i, Ke, (g) => a(4, (n = g))), Q(i, ce, (g) => a(5, (o = g))));
  const r = Le();
  Q(i, r, (g) => a(6, (s = g)));
  let c,
    u,
    p = !1,
    q = null;
  function T() {
    u &&
      requestAnimationFrame(() => {
        (u?.getBoundingClientRect(), a(9, (p = !0)));
      });
  }
  function C() {
    q === null &&
      (a(9, (p = !1)),
      (q = setTimeout(() => {
        (c?.close(), ce.set(null), se.set(null), (q = null));
      }, cl)));
  }
  Re(() => {
    clearTimeout(q);
  });
  const _ = (g) => s.t(g);
  function d(g) {
    fe[g ? "unshift" : "push"](() => {
      ((u = g), a(2, u));
    });
  }
  function P(g) {
    fe[g ? "unshift" : "push"](() => {
      ((c = g), a(0, c));
    });
  }
  return (
    (i.$$.update = () => {
      (i.$$.dirty & 512 && a(3, (t = `modal-page-overlay__dialog${p ? " modal-page-overlay__dialog--open" : ""}`)),
        i.$$.dirty & 3 && e && c && (c.showModal(), T()));
    }),
    [c, e, u, t, n, o, s, r, C, p, _, d, P]
  );
}
class dl extends Te {
  constructor(l) {
    (super(), qe(this, l, fl, sl, Ce, {}));
  }
}
export { dl as default };
