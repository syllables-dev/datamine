import {
  S as Te,
  i as qe,
  n as Ce,
  C as Ve,
  d as f,
  a as U,
  r as Ae,
  t as v,
  b as m,
  g as O,
  c as F,
  e as h,
  f as Y,
  s as ne,
  h as w,
  j as k,
  m as j,
  l as Ne,
  k as Be,
  o as Pe,
  p as y,
  q as E,
  u as S,
  v as G,
  w as D,
  x as $,
  y as J,
  z as Se,
  A as $e,
  B as Oe,
  D as Ie,
  E as z,
  F as ee,
  G as B,
  H as K,
  I as L,
  J as R,
  K as W,
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
import { T as Xe } from "./TitleBadge~DSVYB6FS5Y.js";
function ue(o, l, a) {
  const t = o.slice();
  return ((t[16] = l[a]), t);
}
function de(o, l, a) {
  const t = o.slice();
  return ((t[21] = l[a]), t);
}
function _e(o, l, a) {
  const t = o.slice();
  return ((t[24] = l[a]), t);
}
function x(o) {
  const l = o.slice(),
    a = al(l[19]);
  return ((l[20] = a), l);
}
function ze(o) {
  const l = o.slice(),
    a = l[16].items?.[0];
  l[19] = a;
  const t = il(l[16]);
  return ((l[27] = t), l);
}
function Ue(o) {
  const l = o.slice(),
    a = l[16].items?.[0];
  return ((l[19] = a), l);
}
function je(o) {
  const l = o.slice(),
    a = l[16].items?.[0];
  return ((l[19] = a), l);
}
function he(o) {
  let l, a, t;
  return (
    (a = new Ie({ props: { artwork: o[4].artwork, profile: "artist-bio", alt: "" } })),
    {
      c() {
        ((l = D("div")), J(a.$$.fragment), this.h());
      },
      l(e) {
        l = y(e, "DIV", { class: !0, "aria-hidden": !0 });
        var n = E(l);
        (G(a.$$.fragment, n), n.forEach(f), this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__reflection svelte-q0hy4i"), h(l, "aria-hidden", "true"));
      },
      m(e, n) {
        (w(e, l, n), j(a, l, null), (t = !0));
      },
      p(e, n) {
        const i = {};
        (n & 16 && (i.artwork = e[4].artwork), a.$set(i));
      },
      i(e) {
        t || (m(a.$$.fragment, e), (t = !0));
      },
      o(e) {
        (v(a.$$.fragment, e), (t = !1));
      },
      d(e) {
        (e && f(l), U(a));
      },
    }
  );
}
function me(o) {
  let l, a, t, e, n;
  return (
    (a = new Ie({ props: { artwork: o[4].artwork, profile: "artist-bio", alt: o[4].title ?? "" } })),
    {
      c() {
        ((l = D("div")), J(a.$$.fragment), (t = $()), (e = D("div")), this.h());
      },
      l(i) {
        l = y(i, "DIV", { class: !0 });
        var s = E(l);
        (G(a.$$.fragment, s),
          s.forEach(f),
          (t = S(i)),
          (e = y(i, "DIV", { class: !0, "aria-hidden": !0 })),
          E(e).forEach(f),
          this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__artwork svelte-q0hy4i"),
          h(e, "class", "canvas-modal__artwork-anchor svelte-q0hy4i"),
          h(e, "aria-hidden", "true"));
      },
      m(i, s) {
        (w(i, l, s), j(a, l, null), w(i, t, s), w(i, e, s), (n = !0));
      },
      p(i, s) {
        const r = {};
        (s & 16 && (r.artwork = i[4].artwork), s & 16 && (r.alt = i[4].title ?? ""), a.$set(r));
      },
      i(i) {
        n || (m(a.$$.fragment, i), (n = !0));
      },
      o(i) {
        (v(a.$$.fragment, i), (n = !1));
      },
      d(i) {
        (i && (f(l), f(t), f(e)), U(a));
      },
    }
  );
}
function Ge(o) {
  let l,
    a = o[2].title + "",
    t,
    e,
    n,
    i,
    s = o[2].text + "",
    r;
  return {
    c() {
      ((l = D("h1")), (t = W(a)), (e = $()), (n = D("div")), (i = D("p")), (r = W(s)), this.h());
    },
    l(c) {
      l = y(c, "H1", { class: !0, "data-testid": !0 });
      var u = E(l);
      ((t = R(u, a)), u.forEach(f), (e = S(c)), (n = y(c, "DIV", { class: !0, "data-testid": !0 })));
      var p = E(n);
      i = y(p, "P", {});
      var q = E(i);
      ((r = R(q, s)), q.forEach(f), p.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-q0hy4i"),
        h(l, "data-testid", "canvas-modal-title"),
        h(n, "class", "canvas-modal__text svelte-q0hy4i"),
        h(n, "data-testid", "canvas-modal-text"));
    },
    m(c, u) {
      (w(c, l, u), k(l, t), w(c, e, u), w(c, n, u), k(n, i), k(i, r));
    },
    p(c, u) {
      (u & 4 && a !== (a = c[2].title + "") && L(t, a), u & 4 && s !== (s = c[2].text + "") && L(r, s));
    },
    i: K,
    o: K,
    d(c) {
      c && (f(l), f(e), f(n));
    },
  };
}
function Je(o) {
  let l,
    a,
    t = z(o[0] ?? []),
    e = [];
  for (let i = 0; i < t.length; i += 1) e[i] = Ee(ue(o, t, i));
  const n = (i) =>
    v(e[i], 1, 1, () => {
      e[i] = null;
    });
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      l = B();
    },
    l(i) {
      for (let s = 0; s < e.length; s += 1) e[s].l(i);
      l = B();
    },
    m(i, s) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(i, s);
      (w(i, l, s), (a = !0));
    },
    p(i, s) {
      if (s & 1) {
        t = z(i[0] ?? []);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = ue(i, t, r);
          e[r] ? (e[r].p(c, s), m(e[r], 1)) : ((e[r] = Ee(c)), e[r].c(), m(e[r], 1), e[r].m(l.parentNode, l));
        }
        for (O(), r = t.length; r < e.length; r += 1) n(r);
        F();
      }
    },
    i(i) {
      if (!a) {
        for (let s = 0; s < t.length; s += 1) m(e[s]);
        a = !0;
      }
    },
    o(i) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1) v(e[s]);
      a = !1;
    },
    d(i) {
      (i && f(l), ee(e, i));
    },
  };
}
function Qe(o) {
  let l,
    a,
    t = o[27] && ve(o),
    e = o[19]?.text && pe(o);
  return {
    c() {
      (t && t.c(), (l = $()), e && e.c(), (a = B()));
    },
    l(n) {
      (t && t.l(n), (l = S(n)), e && e.l(n), (a = B()));
    },
    m(n, i) {
      (t && t.m(n, i), w(n, l, i), e && e.m(n, i), w(n, a, i));
    },
    p(n, i) {
      (n[27] ? (t ? t.p(n, i) : ((t = ve(n)), t.c(), t.m(l.parentNode, l))) : t && (t.d(1), (t = null)),
        n[19]?.text ? (e ? e.p(n, i) : ((e = pe(n)), e.c(), e.m(a.parentNode, a))) : e && (e.d(1), (e = null)));
    },
    i: K,
    o: K,
    d(n) {
      (n && (f(l), f(a)), t && t.d(n), e && e.d(n));
    },
  };
}
function Ye(o) {
  let l,
    a,
    t = o[19] && ge(x(o));
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
          (O(),
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
function Ze(o) {
  let l,
    a = o[19]?.title && ye(o);
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
function ve(o) {
  let l,
    a = o[27] + "",
    t;
  return {
    c() {
      ((l = D("h2")), (t = W(a)), this.h());
    },
    l(e) {
      l = y(e, "H2", { class: !0, "data-testid": !0 });
      var n = E(l);
      ((t = R(n, a)), n.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__text-title svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-text-title"));
    },
    m(e, n) {
      (w(e, l, n), k(l, t));
    },
    p(e, n) {
      n & 1 && a !== (a = e[27] + "") && L(t, a);
    },
    d(e) {
      e && f(l);
    },
  };
}
function pe(o) {
  let l,
    a,
    t,
    e = re(o[19].text) + "",
    n;
  return {
    c() {
      ((l = D("div")), (a = D("p")), (t = new Me(!1)), (n = $()), this.h());
    },
    l(i) {
      l = y(i, "DIV", { class: !0, "data-testid": !0 });
      var s = E(l);
      a = y(s, "P", {});
      var r = E(a);
      ((t = Fe(r, !1)), r.forEach(f), (n = S(s)), s.forEach(f), this.h());
    },
    h() {
      ((t.a = null), h(l, "class", "canvas-modal__text svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-text"));
    },
    m(i, s) {
      (w(i, l, s), k(l, a), t.m(e, a), k(l, n));
    },
    p(i, s) {
      s & 1 && e !== (e = re(i[19].text) + "") && t.p(e);
    },
    d(i) {
      i && f(l);
    },
  };
}
function ge(o) {
  let l,
    a,
    t = o[20].length > 0 && be(o);
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
          (O(),
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
function be(o) {
  let l,
    a,
    t = z(o[20]),
    e = [];
  for (let i = 0; i < t.length; i += 1) e[i] = we(de(o, t, i));
  const n = (i) =>
    v(e[i], 1, 1, () => {
      e[i] = null;
    });
  return {
    c() {
      l = D("dl");
      for (let i = 0; i < e.length; i += 1) e[i].c();
      this.h();
    },
    l(i) {
      l = y(i, "DL", { class: !0, "data-testid": !0 });
      var s = E(l);
      for (let r = 0; r < e.length; r += 1) e[r].l(s);
      (s.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__info svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-info"));
    },
    m(i, s) {
      w(i, l, s);
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(l, null);
      a = !0;
    },
    p(i, s) {
      if (s & 1) {
        t = z(i[20]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = de(i, t, r);
          e[r] ? (e[r].p(c, s), m(e[r], 1)) : ((e[r] = we(c)), e[r].c(), m(e[r], 1), e[r].m(l, null));
        }
        for (O(), r = t.length; r < e.length; r += 1) n(r);
        F();
      }
    },
    i(i) {
      if (!a) {
        for (let s = 0; s < t.length; s += 1) m(e[s]);
        a = !0;
      }
    },
    o(i) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1) v(e[s]);
      a = !1;
    },
    d(i) {
      (i && f(l), ee(e, i));
    },
  };
}
function xe(o) {
  let l = o[21].value + "",
    a;
  return {
    c() {
      a = W(l);
    },
    l(t) {
      a = R(t, l);
    },
    m(t, e) {
      w(t, a, e);
    },
    p(t, e) {
      e & 1 && l !== (l = t[21].value + "") && L(a, l);
    },
    i: K,
    o: K,
    d(t) {
      t && f(a);
    },
  };
}
function el(o) {
  let l,
    a,
    t = z(o[21].value),
    e = [];
  for (let i = 0; i < t.length; i += 1) e[i] = ke(_e(o, t, i));
  const n = (i) =>
    v(e[i], 1, 1, () => {
      e[i] = null;
    });
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      l = B();
    },
    l(i) {
      for (let s = 0; s < e.length; s += 1) e[s].l(i);
      l = B();
    },
    m(i, s) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(i, s);
      (w(i, l, s), (a = !0));
    },
    p(i, s) {
      if (s & 1) {
        t = z(i[21].value);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = _e(i, t, r);
          e[r] ? (e[r].p(c, s), m(e[r], 1)) : ((e[r] = ke(c)), e[r].c(), m(e[r], 1), e[r].m(l.parentNode, l));
        }
        for (O(), r = t.length; r < e.length; r += 1) n(r);
        F();
      }
    },
    i(i) {
      if (!a) {
        for (let s = 0; s < t.length; s += 1) m(e[s]);
        a = !0;
      }
    },
    o(i) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1) v(e[s]);
      a = !1;
    },
    d(i) {
      (i && f(l), ee(e, i));
    },
  };
}
function ll(o) {
  let l = o[24] + "",
    a;
  return {
    c() {
      a = W(l);
    },
    l(t) {
      a = R(t, l);
    },
    m(t, e) {
      w(t, a, e);
    },
    p(t, e) {
      e & 1 && l !== (l = t[24] + "") && L(a, l);
    },
    d(t) {
      t && f(a);
    },
  };
}
function ke(o) {
  let l, a;
  return (
    (l = new Xe({ props: { theme: He.Dark, $$slots: { default: [ll] }, $$scope: { ctx: o } } })),
    {
      c() {
        J(l.$$.fragment);
      },
      l(t) {
        G(l.$$.fragment, t);
      },
      m(t, e) {
        (j(l, t, e), (a = !0));
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
        U(l, t);
      },
    }
  );
}
function we(o) {
  let l,
    a,
    t = o[21].label + "",
    e,
    n,
    i,
    s,
    r,
    c,
    u,
    p;
  const q = [el, xe],
    T = [];
  function C(d, _) {
    return (_ & 1 && (s = null), s == null && (s = !!Array.isArray(d[21].value)), s ? 0 : 1);
  }
  return (
    (r = C(o, -1)),
    (c = T[r] = q[r](o)),
    {
      c() {
        ((l = D("div")), (a = D("dt")), (e = W(t)), (n = $()), (i = D("dd")), c.c(), (u = $()), this.h());
      },
      l(d) {
        l = y(d, "DIV", { class: !0 });
        var _ = E(l);
        a = y(_, "DT", { class: !0 });
        var P = E(a);
        ((e = R(P, t)), P.forEach(f), (n = S(_)), (i = y(_, "DD", { class: !0 })));
        var g = E(i);
        (c.l(g), g.forEach(f), (u = S(_)), _.forEach(f), this.h());
      },
      h() {
        (h(a, "class", "canvas-modal__info-label svelte-q0hy4i"),
          h(i, "class", "canvas-modal__info-value svelte-q0hy4i"),
          h(l, "class", "canvas-modal__info-row svelte-q0hy4i"),
          Y(l, "canvas-modal__info-row--badges", Array.isArray(o[21].value)));
      },
      m(d, _) {
        (w(d, l, _), k(l, a), k(a, e), k(l, n), k(l, i), T[r].m(i, null), k(l, u), (p = !0));
      },
      p(d, _) {
        (!p || _ & 1) && t !== (t = d[21].label + "") && L(e, t);
        let P = r;
        ((r = C(d, _)),
          r === P
            ? T[r].p(d, _)
            : (O(),
              v(T[P], 1, 1, () => {
                T[P] = null;
              }),
              F(),
              (c = T[r]),
              c ? c.p(d, _) : ((c = T[r] = q[r](d)), c.c()),
              m(c, 1),
              c.m(i, null)),
          (!p || _ & 1) && Y(l, "canvas-modal__info-row--badges", Array.isArray(d[21].value)));
      },
      i(d) {
        p || (m(c), (p = !0));
      },
      o(d) {
        (v(c), (p = !1));
      },
      d(d) {
        (d && f(l), T[r].d());
      },
    }
  );
}
function ye(o) {
  let l,
    a = o[19].title + "",
    t,
    e;
  return {
    c() {
      ((l = D("h1")), (t = W(a)), (e = $()), this.h());
    },
    l(n) {
      l = y(n, "H1", { class: !0, "data-testid": !0 });
      var i = E(l);
      ((t = R(i, a)), (e = S(i)), i.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-q0hy4i"), h(l, "data-testid", "canvas-modal-title"));
    },
    m(n, i) {
      (w(n, l, i), k(l, t), k(l, e));
    },
    p(n, i) {
      i & 1 && a !== (a = n[19].title + "") && L(t, a);
    },
    d(n) {
      n && f(l);
    },
  };
}
function Ee(o) {
  let l, a, t, e;
  const n = [Ze, Ye, Qe],
    i = [];
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
    ~(l = s(o)) && (a = i[l] = n[l](r(o, l))),
    {
      c() {
        (a && a.c(), (t = B()));
      },
      l(c) {
        (a && a.l(c), (t = B()));
      },
      m(c, u) {
        (~l && i[l].m(c, u), w(c, t, u), (e = !0));
      },
      p(c, u) {
        let p = l;
        ((l = s(c)),
          l === p
            ? ~l && i[l].p(r(c, l), u)
            : (a &&
                (O(),
                v(i[p], 1, 1, () => {
                  i[p] = null;
                }),
                F()),
              ~l
                ? ((a = i[l]), a ? a.p(r(c, l), u) : ((a = i[l] = n[l](r(c, l))), a.c()), m(a, 1), a.m(t.parentNode, t))
                : (a = null)));
      },
      i(c) {
        e || (m(a), (e = !0));
      },
      o(c) {
        (v(a), (e = !1));
      },
      d(c) {
        (c && f(t), ~l && i[l].d(c));
      },
    }
  );
}
function tl(o) {
  let l,
    a,
    t,
    e,
    n,
    i,
    s,
    r,
    c,
    u,
    p,
    q,
    T,
    C,
    d,
    _,
    P,
    g,
    N,
    Z,
    le,
    I = o[4]?.artwork && he(o);
  e = new Ve({});
  let V = o[4]?.artwork && me(o);
  const te = [Je, Ge],
    H = [];
  function ae(b, A) {
    return b[6] ? 0 : b[2] ? 1 : -1;
  }
  return (
    ~(d = ae(o)) && (_ = H[d] = te[d](o)),
    {
      c() {
        ((l = D("div")),
          I && I.c(),
          (a = $()),
          (t = D("button")),
          J(e.$$.fragment),
          (i = $()),
          (s = D("div")),
          (r = D("div")),
          (c = $()),
          (u = D("div")),
          (p = $()),
          V && V.c(),
          (q = $()),
          (T = D("div")),
          (C = D("div")),
          _ && _.c(),
          (P = $()),
          (g = D("div")),
          this.h());
      },
      l(b) {
        l = y(b, "DIV", { class: !0, "data-testid": !0 });
        var A = E(l);
        (I && I.l(A), (a = S(A)), (t = y(A, "BUTTON", { class: !0, type: !0, "aria-label": !0 })));
        var X = E(t);
        (G(e.$$.fragment, X), X.forEach(f), (i = S(A)), (s = y(A, "DIV", { class: !0 })));
        var M = E(s);
        ((r = y(M, "DIV", { class: !0, "aria-hidden": !0 })),
          E(r).forEach(f),
          (c = S(M)),
          (u = y(M, "DIV", { class: !0, "aria-hidden": !0 })),
          E(u).forEach(f),
          (p = S(M)),
          V && V.l(M),
          (q = S(M)),
          (T = y(M, "DIV", { class: !0 })));
        var ie = E(T);
        C = y(ie, "DIV", { class: !0 });
        var oe = E(C);
        (_ && _.l(oe),
          oe.forEach(f),
          ie.forEach(f),
          (P = S(M)),
          (g = y(M, "DIV", { class: !0, "aria-hidden": !0 })),
          E(g).forEach(f),
          M.forEach(f),
          A.forEach(f),
          this.h());
      },
      h() {
        (h(t, "class", "canvas-modal__close-button svelte-q0hy4i"),
          h(t, "type", "button"),
          h(t, "aria-label", (n = o[1]("ASE.Web.Platform.Shared.AX.Close"))),
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
          Y(l, "canvas-modal--no-scroll-scrim", o[5]),
          ne(l, "--canvas-modal-bg-color", o[3]));
      },
      m(b, A) {
        (w(b, l, A),
          I && I.m(l, null),
          k(l, a),
          k(l, t),
          j(e, t, null),
          k(l, i),
          k(l, s),
          k(s, r),
          k(s, c),
          k(s, u),
          k(s, p),
          V && V.m(s, null),
          k(s, q),
          k(s, T),
          k(T, C),
          ~d && H[d].m(C, null),
          k(s, P),
          k(s, g),
          (N = !0),
          Z || ((le = [Ne(t, "click", o[7]), Be(Pe.call(null, t))]), (Z = !0)));
      },
      p(b, [A]) {
        (b[4]?.artwork
          ? I
            ? (I.p(b, A), A & 16 && m(I, 1))
            : ((I = he(b)), I.c(), m(I, 1), I.m(l, a))
          : I &&
            (O(),
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
              (O(),
              v(V, 1, 1, () => {
                V = null;
              }),
              F()));
        let X = d;
        ((d = ae(b)),
          d === X
            ? ~d && H[d].p(b, A)
            : (_ &&
                (O(),
                v(H[X], 1, 1, () => {
                  H[X] = null;
                }),
                F()),
              ~d ? ((_ = H[d]), _ ? _.p(b, A) : ((_ = H[d] = te[d](b)), _.c()), m(_, 1), _.m(C, null)) : (_ = null)),
          (!N || A & 32) && Y(l, "canvas-modal--no-scroll-scrim", b[5]),
          A & 8 && ne(l, "--canvas-modal-bg-color", b[3]));
      },
      i(b) {
        N || (m(I), m(e.$$.fragment, b), m(V), m(_), (N = !0));
      },
      o(b) {
        (v(I), v(e.$$.fragment, b), v(V), v(_), (N = !1));
      },
      d(b) {
        (b && f(l), I && I.d(), U(e), V && V.d(), ~d && H[d].d(), (Z = !1), Ae(le));
      },
    }
  );
}
function al(o) {
  var l;
  const a = [];
  return (
    o.bornOrFormedTitle && o.bornOrFormedValue && a.push({ label: o.bornOrFormedTitle, value: o.bornOrFormedValue }),
    o.originTitle && o.originValue && a.push({ label: o.originTitle, value: o.originValue }),
    o.genreTitle &&
      !((l = o.genres) === null || l === void 0) &&
      l.length &&
      a.push({ label: o.genreTitle, value: o.genres }),
    a
  );
}
function il(o) {
  var l, a;
  const t = o.header;
  if (t)
    return "title" in t
      ? t.title
      : (a = (l = t.item) === null || l === void 0 ? void 0 : l.titleLink) === null || a === void 0
        ? void 0
        : a.title;
}
function ol(o, l, a) {
  let t, e, n, i, s, r;
  var c, u, p, q, T;
  let { sections: C = null } = l,
    { translateFn: d } = l,
    { placeholder: _ = null } = l;
  const P = Se(),
    g = (N) => {
      (N.preventDefault(), N.stopPropagation(), P("close"));
    };
  return (
    (o.$$set = (N) => {
      ("sections" in N && a(0, (C = N.sections)),
        "translateFn" in N && a(1, (d = N.translateFn)),
        "placeholder" in N && a(2, (_ = N.placeholder)));
    }),
    (o.$$.update = () => {
      (o.$$.dirty & 1 && a(14, (t = C?.find((N) => N.itemKind === "artistBioHeader"))),
        o.$$.dirty & 16640 && a(4, (e = a(8, (c = t?.items)) === null || c === void 0 ? void 0 : c[0])),
        o.$$.dirty & 1 && a(6, (n = !!C && C.length > 0)),
        o.$$.dirty & 3600 &&
          a(
            13,
            (i =
              !(
                a(10, (p = a(9, (u = e?.colorBackdropArtwork)) === null || u === void 0 ? void 0 : u.dictionary)) ===
                  null || p === void 0
              ) && p.bgColor
                ? e.colorBackdropArtwork.dictionary
                : a(11, (q = e?.artwork)) === null || q === void 0
                  ? void 0
                  : q.dictionary),
          ),
        o.$$.dirty & 12288 &&
          a(3, (s = a(12, (T = i?.bgColor ? $e(i.bgColor) : null)) !== null && T !== void 0 ? T : void 0)),
        o.$$.dirty & 8 && a(5, (r = !Oe(s))));
    }),
    [C, d, _, s, e, r, n, g, c, u, p, q, T, i, t]
  );
}
class nl extends Te {
  constructor(l) {
    (super(), qe(this, l, ol, tl, Ce, { sections: 0, translateFn: 1, placeholder: 2 }));
  }
}
function De(o) {
  let l,
    a,
    t = {
      modalTriggerElement: o[5],
      showOnMount: !!o[1],
      preventDefaultClose: !0,
      dialogClassNames: o[3],
      $$slots: { default: [rl] },
      $$scope: { ctx: o },
    };
  return (
    (l = new We({ props: t })),
    o[12](l),
    l.$on("close", o[8]),
    {
      c() {
        J(l.$$.fragment);
      },
      l(e) {
        G(l.$$.fragment, e);
      },
      m(e, n) {
        (j(l, e, n), (a = !0));
      },
      p(e, n) {
        const i = {};
        (n & 32 && (i.modalTriggerElement = e[5]),
          n & 2 && (i.showOnMount = !!e[1]),
          n & 8 && (i.dialogClassNames = e[3]),
          n & 32854 && (i.$$scope = { dirty: n, ctx: e }),
          l.$set(i));
      },
      i(e) {
        a || (m(l.$$.fragment, e), (a = !0));
      },
      o(e) {
        (v(l.$$.fragment, e), (a = !1));
      },
      d(e) {
        (o[12](null), U(l, e));
      },
    }
  );
}
function rl(o) {
  let l, a, t;
  return (
    (a = new nl({ props: { sections: o[1]?.sections ?? null, placeholder: o[4], translateFn: o[10] } })),
    a.$on("close", o[8]),
    {
      c() {
        ((l = D("div")), J(a.$$.fragment), this.h());
      },
      l(e) {
        l = y(e, "DIV", { class: !0 });
        var n = E(l);
        (G(a.$$.fragment, n), n.forEach(f), this.h());
      },
      h() {
        h(l, "class", "modal-page-overlay__inner svelte-101sxrd");
      },
      m(e, n) {
        (w(e, l, n), j(a, l, null), o[11](l), (t = !0));
      },
      p(e, n) {
        const i = {};
        (n & 2 && (i.sections = e[1]?.sections ?? null),
          n & 16 && (i.placeholder = e[4]),
          n & 64 && (i.translateFn = e[10]),
          a.$set(i));
      },
      i(e) {
        t || (m(a.$$.fragment, e), (t = !0));
      },
      o(e) {
        (v(a.$$.fragment, e), (t = !1));
      },
      d(e) {
        (e && f(l), U(a), o[11](null));
      },
    }
  );
}
function sl(o) {
  let l,
    a,
    t = (o[1] || o[4]) && De(o);
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
          (O(),
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
function fl(o, l, a) {
  let t, e, n, i, s;
  (Q(o, se, (g) => a(1, (e = g))), Q(o, Ke, (g) => a(4, (n = g))), Q(o, ce, (g) => a(5, (i = g))));
  const r = Le();
  Q(o, r, (g) => a(6, (s = g)));
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
  const d = (g) => s.t(g);
  function _(g) {
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
    (o.$$.update = () => {
      (o.$$.dirty & 512 && a(3, (t = `modal-page-overlay__dialog${p ? " modal-page-overlay__dialog--open" : ""}`)),
        o.$$.dirty & 3 && e && c && (c.showModal(), T()));
    }),
    [c, e, u, t, n, i, s, r, C, p, d, _, P]
  );
}
class _l extends Te {
  constructor(l) {
    (super(), qe(this, l, fl, sl, Ce, {}));
  }
}
export { _l as default };
