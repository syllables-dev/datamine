import {
  S as qe,
  i as Ce,
  n as Ie,
  C as Ne,
  e as E,
  s as A,
  c as U,
  a as D,
  b as T,
  d as O,
  f as j,
  g as f,
  h,
  t as ne,
  j as re,
  k as w,
  l as g,
  m as G,
  o as Be,
  p as ye,
  q as Pe,
  r as m,
  u as $,
  v,
  w as F,
  x as J,
  y as Se,
  z as Ae,
  A as Oe,
  B as $e,
  D as Ve,
  E as L,
  F as R,
  G as W,
  H as K,
  I as z,
  J as P,
  K as x,
  L as ie,
  M as Fe,
  N as Me,
  T as He,
  O as Ke,
  P as Q,
  Q as se,
  R as Le,
  U as ce,
  V as Re,
  W as We,
  X as Xe,
  Y as fe,
} from "./main.js";
function ue(n, l, a) {
  const t = n.slice();
  return ((t[16] = l[a]), t);
}
function _e(n, l, a) {
  const t = n.slice();
  return ((t[21] = l[a]), t);
}
function de(n, l, a) {
  const t = n.slice();
  return ((t[24] = l[a]), t);
}
function Z(n) {
  const l = n.slice(),
    a = al(l[19]);
  return ((l[20] = a), l);
}
function ze(n) {
  const l = n.slice(),
    a = l[16].items?.[0];
  l[19] = a;
  const t = ol(l[16]);
  return ((l[27] = t), l);
}
function Ue(n) {
  const l = n.slice(),
    a = l[16].items?.[0];
  return ((l[19] = a), l);
}
function je(n) {
  const l = n.slice(),
    a = l[16].items?.[0];
  return ((l[19] = a), l);
}
function he(n) {
  let l, a, t;
  return (
    (a = new Ve({ props: { artwork: n[4].artwork, profile: "artist-bio", alt: "" } })),
    {
      c() {
        ((l = E("div")), U(a.$$.fragment), this.h());
      },
      l(e) {
        l = D(e, "DIV", { class: !0, "aria-hidden": !0 });
        var r = T(l);
        (j(a.$$.fragment, r), r.forEach(f), this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__reflection svelte-bhq2k0"), h(l, "aria-hidden", "true"));
      },
      m(e, r) {
        (w(e, l, r), G(a, l, null), (t = !0));
      },
      p(e, r) {
        const o = {};
        (r & 16 && (o.artwork = e[4].artwork), a.$set(o));
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
function me(n) {
  let l, a, t, e, r;
  return (
    (a = new Ve({ props: { artwork: n[4].artwork, profile: "artist-bio", alt: n[4].title ?? "" } })),
    {
      c() {
        ((l = E("div")), U(a.$$.fragment), (t = A()), (e = E("div")), this.h());
      },
      l(o) {
        l = D(o, "DIV", { class: !0 });
        var s = T(l);
        (j(a.$$.fragment, s),
          s.forEach(f),
          (t = O(o)),
          (e = D(o, "DIV", { class: !0, "aria-hidden": !0 })),
          T(e).forEach(f),
          this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__artwork svelte-bhq2k0"),
          h(e, "class", "canvas-modal__artwork-anchor svelte-bhq2k0"),
          h(e, "aria-hidden", "true"));
      },
      m(o, s) {
        (w(o, l, s), G(a, l, null), w(o, t, s), w(o, e, s), (r = !0));
      },
      p(o, s) {
        const i = {};
        (s & 16 && (i.artwork = o[4].artwork), s & 16 && (i.alt = o[4].title ?? ""), a.$set(i));
      },
      i(o) {
        r || (m(a.$$.fragment, o), (r = !0));
      },
      o(o) {
        (v(a.$$.fragment, o), (r = !1));
      },
      d(o) {
        (o && (f(l), f(t), f(e)), J(a));
      },
    }
  );
}
function Ge(n) {
  let l,
    a = n[2].title + "",
    t,
    e,
    r,
    o,
    s = n[2].text + "",
    i;
  return {
    c() {
      ((l = E("h1")), (t = L(a)), (e = A()), (r = E("div")), (o = E("p")), (i = L(s)), this.h());
    },
    l(c) {
      l = D(c, "H1", { class: !0, "data-testid": !0 });
      var u = T(l);
      ((t = R(u, a)), u.forEach(f), (e = O(c)), (r = D(c, "DIV", { class: !0, "data-testid": !0 })));
      var b = T(r);
      o = D(b, "P", {});
      var C = T(o);
      ((i = R(C, s)), C.forEach(f), b.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-bhq2k0"),
        h(l, "data-testid", "canvas-modal-title"),
        h(r, "class", "canvas-modal__text svelte-bhq2k0"),
        h(r, "data-testid", "canvas-modal-text"));
    },
    m(c, u) {
      (w(c, l, u), g(l, t), w(c, e, u), w(c, r, u), g(r, o), g(o, i));
    },
    p(c, u) {
      (u & 4 && a !== (a = c[2].title + "") && W(t, a), u & 4 && s !== (s = c[2].text + "") && W(i, s));
    },
    i: K,
    o: K,
    d(c) {
      c && (f(l), f(e), f(r));
    },
  };
}
function Je(n) {
  let l,
    a,
    t = z(n[0] ?? []),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = De(ue(n, t, o));
  const r = (o) =>
    v(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      l = P();
    },
    l(o) {
      for (let s = 0; s < e.length; s += 1) e[s].l(o);
      l = P();
    },
    m(o, s) {
      for (let i = 0; i < e.length; i += 1) e[i] && e[i].m(o, s);
      (w(o, l, s), (a = !0));
    },
    p(o, s) {
      if (s & 1) {
        t = z(o[0] ?? []);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = ue(o, t, i);
          e[i] ? (e[i].p(c, s), m(e[i], 1)) : ((e[i] = De(c)), e[i].c(), m(e[i], 1), e[i].m(l.parentNode, l));
        }
        for ($(), i = t.length; i < e.length; i += 1) r(i);
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
      (o && f(l), x(e, o));
    },
  };
}
function Qe(n) {
  let l,
    a,
    t = n[27] && ve(n),
    e = n[19]?.text && pe(n);
  return {
    c() {
      (t && t.c(), (l = A()), e && e.c(), (a = P()));
    },
    l(r) {
      (t && t.l(r), (l = O(r)), e && e.l(r), (a = P()));
    },
    m(r, o) {
      (t && t.m(r, o), w(r, l, o), e && e.m(r, o), w(r, a, o));
    },
    p(r, o) {
      (r[27] ? (t ? t.p(r, o) : ((t = ve(r)), t.c(), t.m(l.parentNode, l))) : t && (t.d(1), (t = null)),
        r[19]?.text ? (e ? e.p(r, o) : ((e = pe(r)), e.c(), e.m(a.parentNode, a))) : e && (e.d(1), (e = null)));
    },
    i: K,
    o: K,
    d(r) {
      (r && (f(l), f(a)), t && t.d(r), e && e.d(r));
    },
  };
}
function Ye(n) {
  let l,
    a,
    t = n[19] && be(Z(n));
  return {
    c() {
      (t && t.c(), (l = P()));
    },
    l(e) {
      (t && t.l(e), (l = P()));
    },
    m(e, r) {
      (t && t.m(e, r), w(e, l, r), (a = !0));
    },
    p(e, r) {
      e[19]
        ? t
          ? (t.p(Z(e), r), r & 1 && m(t, 1))
          : ((t = be(Z(e))), t.c(), m(t, 1), t.m(l.parentNode, l))
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
function Ze(n) {
  let l,
    a = n[19]?.title && Ee(n);
  return {
    c() {
      (a && a.c(), (l = P()));
    },
    l(t) {
      (a && a.l(t), (l = P()));
    },
    m(t, e) {
      (a && a.m(t, e), w(t, l, e));
    },
    p(t, e) {
      t[19]?.title ? (a ? a.p(t, e) : ((a = Ee(t)), a.c(), a.m(l.parentNode, l))) : a && (a.d(1), (a = null));
    },
    i: K,
    o: K,
    d(t) {
      (t && f(l), a && a.d(t));
    },
  };
}
function ve(n) {
  let l,
    a = n[27] + "",
    t;
  return {
    c() {
      ((l = E("h2")), (t = L(a)), this.h());
    },
    l(e) {
      l = D(e, "H2", { class: !0, "data-testid": !0 });
      var r = T(l);
      ((t = R(r, a)), r.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__text-title svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-text-title"));
    },
    m(e, r) {
      (w(e, l, r), g(l, t));
    },
    p(e, r) {
      r & 1 && a !== (a = e[27] + "") && W(t, a);
    },
    d(e) {
      e && f(l);
    },
  };
}
function pe(n) {
  let l,
    a,
    t,
    e = ie(n[19].text) + "",
    r;
  return {
    c() {
      ((l = E("div")), (a = E("p")), (t = new Fe(!1)), (r = A()), this.h());
    },
    l(o) {
      l = D(o, "DIV", { class: !0, "data-testid": !0 });
      var s = T(l);
      a = D(s, "P", {});
      var i = T(a);
      ((t = Me(i, !1)), i.forEach(f), (r = O(s)), s.forEach(f), this.h());
    },
    h() {
      ((t.a = null), h(l, "class", "canvas-modal__text svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-text"));
    },
    m(o, s) {
      (w(o, l, s), g(l, a), t.m(e, a), g(l, r));
    },
    p(o, s) {
      s & 1 && e !== (e = ie(o[19].text) + "") && t.p(e);
    },
    d(o) {
      o && f(l);
    },
  };
}
function be(n) {
  let l,
    a,
    t = n[20].length > 0 && ke(n);
  return {
    c() {
      (t && t.c(), (l = P()));
    },
    l(e) {
      (t && t.l(e), (l = P()));
    },
    m(e, r) {
      (t && t.m(e, r), w(e, l, r), (a = !0));
    },
    p(e, r) {
      e[20].length > 0
        ? t
          ? (t.p(e, r), r & 1 && m(t, 1))
          : ((t = ke(e)), t.c(), m(t, 1), t.m(l.parentNode, l))
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
function ke(n) {
  let l,
    a,
    t = z(n[20]),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = we(_e(n, t, o));
  const r = (o) =>
    v(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      l = E("dl");
      for (let o = 0; o < e.length; o += 1) e[o].c();
      this.h();
    },
    l(o) {
      l = D(o, "DL", { class: !0, "data-testid": !0 });
      var s = T(l);
      for (let i = 0; i < e.length; i += 1) e[i].l(s);
      (s.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__info svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-info"));
    },
    m(o, s) {
      w(o, l, s);
      for (let i = 0; i < e.length; i += 1) e[i] && e[i].m(l, null);
      a = !0;
    },
    p(o, s) {
      if (s & 1) {
        t = z(o[20]);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = _e(o, t, i);
          e[i] ? (e[i].p(c, s), m(e[i], 1)) : ((e[i] = we(c)), e[i].c(), m(e[i], 1), e[i].m(l, null));
        }
        for ($(), i = t.length; i < e.length; i += 1) r(i);
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
      (o && f(l), x(e, o));
    },
  };
}
function xe(n) {
  let l = n[21].value + "",
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
function el(n) {
  let l,
    a,
    t = z(n[21].value),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = ge(de(n, t, o));
  const r = (o) =>
    v(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      l = P();
    },
    l(o) {
      for (let s = 0; s < e.length; s += 1) e[s].l(o);
      l = P();
    },
    m(o, s) {
      for (let i = 0; i < e.length; i += 1) e[i] && e[i].m(o, s);
      (w(o, l, s), (a = !0));
    },
    p(o, s) {
      if (s & 1) {
        t = z(o[21].value);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = de(o, t, i);
          e[i] ? (e[i].p(c, s), m(e[i], 1)) : ((e[i] = ge(c)), e[i].c(), m(e[i], 1), e[i].m(l.parentNode, l));
        }
        for ($(), i = t.length; i < e.length; i += 1) r(i);
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
      (o && f(l), x(e, o));
    },
  };
}
function ll(n) {
  let l = n[24] + "",
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
function ge(n) {
  let l, a;
  return (
    (l = new He({ props: { theme: Ke.Dark, $$slots: { default: [ll] }, $$scope: { ctx: n } } })),
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
        const r = {};
        (e & 268435457 && (r.$$scope = { dirty: e, ctx: t }), l.$set(r));
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
function we(n) {
  let l,
    a,
    t = n[21].label + "",
    e,
    r,
    o,
    s,
    i,
    c,
    u,
    b;
  const C = [el, xe],
    q = [];
  function I(_, d) {
    return (d & 1 && (s = null), s == null && (s = !!Array.isArray(_[21].value)), s ? 0 : 1);
  }
  return (
    (i = I(n, -1)),
    (c = q[i] = C[i](n)),
    {
      c() {
        ((l = E("div")), (a = E("dt")), (e = L(t)), (r = A()), (o = E("dd")), c.c(), (u = A()), this.h());
      },
      l(_) {
        l = D(_, "DIV", { class: !0 });
        var d = T(l);
        a = D(d, "DT", { class: !0 });
        var S = T(a);
        ((e = R(S, t)), S.forEach(f), (r = O(d)), (o = D(d, "DD", { class: !0 })));
        var p = T(o);
        (c.l(p), p.forEach(f), (u = O(d)), d.forEach(f), this.h());
      },
      h() {
        (h(a, "class", "canvas-modal__info-label svelte-bhq2k0"),
          h(o, "class", "canvas-modal__info-value svelte-bhq2k0"),
          h(l, "class", "canvas-modal__info-row svelte-bhq2k0"));
      },
      m(_, d) {
        (w(_, l, d), g(l, a), g(a, e), g(l, r), g(l, o), q[i].m(o, null), g(l, u), (b = !0));
      },
      p(_, d) {
        (!b || d & 1) && t !== (t = _[21].label + "") && W(e, t);
        let S = i;
        ((i = I(_, d)),
          i === S
            ? q[i].p(_, d)
            : ($(),
              v(q[S], 1, 1, () => {
                q[S] = null;
              }),
              F(),
              (c = q[i]),
              c ? c.p(_, d) : ((c = q[i] = C[i](_)), c.c()),
              m(c, 1),
              c.m(o, null)));
      },
      i(_) {
        b || (m(c), (b = !0));
      },
      o(_) {
        (v(c), (b = !1));
      },
      d(_) {
        (_ && f(l), q[i].d());
      },
    }
  );
}
function Ee(n) {
  let l,
    a = n[19].title + "",
    t,
    e;
  return {
    c() {
      ((l = E("h1")), (t = L(a)), (e = A()), this.h());
    },
    l(r) {
      l = D(r, "H1", { class: !0, "data-testid": !0 });
      var o = T(l);
      ((t = R(o, a)), (e = O(o)), o.forEach(f), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-title"));
    },
    m(r, o) {
      (w(r, l, o), g(l, t), g(l, e));
    },
    p(r, o) {
      o & 1 && a !== (a = r[19].title + "") && W(t, a);
    },
    d(r) {
      r && f(l);
    },
  };
}
function De(n) {
  let l, a, t, e;
  const r = [Ze, Ye, Qe],
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
  function i(c, u) {
    if (u === 0) return je(c);
    if (u === 1) return Ue(c);
    if (u === 2) return ze(c);
  }
  return (
    ~(l = s(n)) && (a = o[l] = r[l](i(n, l))),
    {
      c() {
        (a && a.c(), (t = P()));
      },
      l(c) {
        (a && a.l(c), (t = P()));
      },
      m(c, u) {
        (~l && o[l].m(c, u), w(c, t, u), (e = !0));
      },
      p(c, u) {
        let b = l;
        ((l = s(c)),
          l === b
            ? ~l && o[l].p(i(c, l), u)
            : (a &&
                ($(),
                v(o[b], 1, 1, () => {
                  o[b] = null;
                }),
                F()),
              ~l
                ? ((a = o[l]), a ? a.p(i(c, l), u) : ((a = o[l] = r[l](i(c, l))), a.c()), m(a, 1), a.m(t.parentNode, t))
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
function tl(n) {
  let l,
    a,
    t,
    e,
    r,
    o,
    s,
    i,
    c,
    u,
    b,
    C,
    q,
    I,
    _,
    d,
    S,
    p,
    y,
    Y,
    ee,
    V = n[4]?.artwork && he(n);
  e = new Ne({});
  let N = n[4]?.artwork && me(n);
  const le = [Je, Ge],
    H = [];
  function te(k, B) {
    return k[6] ? 0 : k[2] ? 1 : -1;
  }
  return (
    ~(_ = te(n)) && (d = H[_] = le[_](n)),
    {
      c() {
        ((l = E("div")),
          V && V.c(),
          (a = A()),
          (t = E("button")),
          U(e.$$.fragment),
          (o = A()),
          (s = E("div")),
          (i = E("div")),
          (c = A()),
          (u = E("div")),
          (b = A()),
          N && N.c(),
          (C = A()),
          (q = E("div")),
          (I = E("div")),
          d && d.c(),
          (S = A()),
          (p = E("div")),
          this.h());
      },
      l(k) {
        l = D(k, "DIV", { class: !0, "data-testid": !0 });
        var B = T(l);
        (V && V.l(B), (a = O(B)), (t = D(B, "BUTTON", { class: !0, type: !0, "aria-label": !0 })));
        var X = T(t);
        (j(e.$$.fragment, X), X.forEach(f), (o = O(B)), (s = D(B, "DIV", { class: !0 })));
        var M = T(s);
        ((i = D(M, "DIV", { class: !0, "aria-hidden": !0 })),
          T(i).forEach(f),
          (c = O(M)),
          (u = D(M, "DIV", { class: !0, "aria-hidden": !0 })),
          T(u).forEach(f),
          (b = O(M)),
          N && N.l(M),
          (C = O(M)),
          (q = D(M, "DIV", { class: !0 })));
        var ae = T(q);
        I = D(ae, "DIV", { class: !0 });
        var oe = T(I);
        (d && d.l(oe),
          oe.forEach(f),
          ae.forEach(f),
          (S = O(M)),
          (p = D(M, "DIV", { class: !0, "aria-hidden": !0 })),
          T(p).forEach(f),
          M.forEach(f),
          B.forEach(f),
          this.h());
      },
      h() {
        (h(t, "class", "canvas-modal__close-button svelte-bhq2k0"),
          h(t, "type", "button"),
          h(t, "aria-label", (r = n[1]("ASE.Web.Platform.Shared.AX.Close"))),
          h(i, "class", "canvas-modal__fade canvas-modal__fade--top svelte-bhq2k0"),
          h(i, "aria-hidden", "true"),
          h(u, "class", "canvas-modal__scrim-scroll svelte-bhq2k0"),
          h(u, "aria-hidden", "true"),
          h(I, "class", "canvas-modal__article-content svelte-bhq2k0"),
          h(q, "class", "canvas-modal__article svelte-bhq2k0"),
          h(p, "class", "canvas-modal__fade canvas-modal__fade--bottom svelte-bhq2k0"),
          h(p, "aria-hidden", "true"),
          h(s, "class", "canvas-modal__content svelte-bhq2k0"),
          h(l, "class", "canvas-modal svelte-bhq2k0"),
          h(l, "data-testid", "canvas-modal"),
          ne(l, "canvas-modal--no-scroll-scrim", n[5]),
          re(l, "--canvas-modal-bg-color", n[3]));
      },
      m(k, B) {
        (w(k, l, B),
          V && V.m(l, null),
          g(l, a),
          g(l, t),
          G(e, t, null),
          g(l, o),
          g(l, s),
          g(s, i),
          g(s, c),
          g(s, u),
          g(s, b),
          N && N.m(s, null),
          g(s, C),
          g(s, q),
          g(q, I),
          ~_ && H[_].m(I, null),
          g(s, S),
          g(s, p),
          (y = !0),
          Y || ((ee = [Be(t, "click", n[7]), ye(Pe.call(null, t))]), (Y = !0)));
      },
      p(k, [B]) {
        (k[4]?.artwork
          ? V
            ? (V.p(k, B), B & 16 && m(V, 1))
            : ((V = he(k)), V.c(), m(V, 1), V.m(l, a))
          : V &&
            ($(),
            v(V, 1, 1, () => {
              V = null;
            }),
            F()),
          (!y || (B & 2 && r !== (r = k[1]("ASE.Web.Platform.Shared.AX.Close")))) && h(t, "aria-label", r),
          k[4]?.artwork
            ? N
              ? (N.p(k, B), B & 16 && m(N, 1))
              : ((N = me(k)), N.c(), m(N, 1), N.m(s, C))
            : N &&
              ($(),
              v(N, 1, 1, () => {
                N = null;
              }),
              F()));
        let X = _;
        ((_ = te(k)),
          _ === X
            ? ~_ && H[_].p(k, B)
            : (d &&
                ($(),
                v(H[X], 1, 1, () => {
                  H[X] = null;
                }),
                F()),
              ~_ ? ((d = H[_]), d ? d.p(k, B) : ((d = H[_] = le[_](k)), d.c()), m(d, 1), d.m(I, null)) : (d = null)),
          (!y || B & 32) && ne(l, "canvas-modal--no-scroll-scrim", k[5]),
          B & 8 && re(l, "--canvas-modal-bg-color", k[3]));
      },
      i(k) {
        y || (m(V), m(e.$$.fragment, k), m(N), m(d), (y = !0));
      },
      o(k) {
        (v(V), v(e.$$.fragment, k), v(N), v(d), (y = !1));
      },
      d(k) {
        (k && f(l), V && V.d(), J(e), N && N.d(), ~_ && H[_].d(), (Y = !1), Se(ee));
      },
    }
  );
}
function al(n) {
  var l;
  const a = [];
  return (
    n.bornOrFormedTitle && n.bornOrFormedValue && a.push({ label: n.bornOrFormedTitle, value: n.bornOrFormedValue }),
    n.originTitle && n.originValue && a.push({ label: n.originTitle, value: n.originValue }),
    n.genreTitle &&
      !((l = n.genres) === null || l === void 0) &&
      l.length &&
      a.push({ label: n.genreTitle, value: n.genres }),
    a
  );
}
function ol(n) {
  var l, a;
  const t = n.header;
  if (t)
    return "title" in t
      ? t.title
      : (a = (l = t.item) === null || l === void 0 ? void 0 : l.titleLink) === null || a === void 0
        ? void 0
        : a.title;
}
function nl(n, l, a) {
  let t, e, r, o, s, i;
  var c, u, b, C, q;
  let { sections: I = null } = l,
    { translateFn: _ } = l,
    { placeholder: d = null } = l;
  const S = Ae(),
    p = (y) => {
      (y.preventDefault(), y.stopPropagation(), S("close"));
    };
  return (
    (n.$$set = (y) => {
      ("sections" in y && a(0, (I = y.sections)),
        "translateFn" in y && a(1, (_ = y.translateFn)),
        "placeholder" in y && a(2, (d = y.placeholder)));
    }),
    (n.$$.update = () => {
      (n.$$.dirty & 1 && a(14, (t = I?.find((y) => y.itemKind === "artistBioHeader"))),
        n.$$.dirty & 16640 && a(4, (e = a(8, (c = t?.items)) === null || c === void 0 ? void 0 : c[0])),
        n.$$.dirty & 1 && a(6, (r = !!I && I.length > 0)),
        n.$$.dirty & 3600 &&
          a(
            13,
            (o =
              !(
                a(10, (b = a(9, (u = e?.colorBackdropArtwork)) === null || u === void 0 ? void 0 : u.dictionary)) ===
                  null || b === void 0
              ) && b.bgColor
                ? e.colorBackdropArtwork.dictionary
                : a(11, (C = e?.artwork)) === null || C === void 0
                  ? void 0
                  : C.dictionary),
          ),
        n.$$.dirty & 12288 &&
          a(3, (s = a(12, (q = o?.bgColor ? Oe(o.bgColor) : null)) !== null && q !== void 0 ? q : void 0)),
        n.$$.dirty & 8 && a(5, (i = !$e(s))));
    }),
    [I, _, d, s, e, i, r, p, c, u, b, C, q, o, t]
  );
}
class rl extends qe {
  constructor(l) {
    (super(), Ce(this, l, nl, tl, Ie, { sections: 0, translateFn: 1, placeholder: 2 }));
  }
}
function Te(n) {
  let l,
    a,
    t = {
      modalTriggerElement: n[5],
      showOnMount: !!n[1],
      preventDefaultClose: !0,
      dialogClassNames: n[3],
      $$slots: { default: [il] },
      $$scope: { ctx: n },
    };
  return (
    (l = new Xe({ props: t })),
    n[12](l),
    l.$on("close", n[8]),
    {
      c() {
        U(l.$$.fragment);
      },
      l(e) {
        j(l.$$.fragment, e);
      },
      m(e, r) {
        (G(l, e, r), (a = !0));
      },
      p(e, r) {
        const o = {};
        (r & 32 && (o.modalTriggerElement = e[5]),
          r & 2 && (o.showOnMount = !!e[1]),
          r & 8 && (o.dialogClassNames = e[3]),
          r & 32854 && (o.$$scope = { dirty: r, ctx: e }),
          l.$set(o));
      },
      i(e) {
        a || (m(l.$$.fragment, e), (a = !0));
      },
      o(e) {
        (v(l.$$.fragment, e), (a = !1));
      },
      d(e) {
        (n[12](null), J(l, e));
      },
    }
  );
}
function il(n) {
  let l, a, t;
  return (
    (a = new rl({ props: { sections: n[1]?.sections ?? null, placeholder: n[4], translateFn: n[10] } })),
    a.$on("close", n[8]),
    {
      c() {
        ((l = E("div")), U(a.$$.fragment), this.h());
      },
      l(e) {
        l = D(e, "DIV", { class: !0 });
        var r = T(l);
        (j(a.$$.fragment, r), r.forEach(f), this.h());
      },
      h() {
        h(l, "class", "modal-page-overlay__inner svelte-101sxrd");
      },
      m(e, r) {
        (w(e, l, r), G(a, l, null), n[11](l), (t = !0));
      },
      p(e, r) {
        const o = {};
        (r & 2 && (o.sections = e[1]?.sections ?? null),
          r & 16 && (o.placeholder = e[4]),
          r & 64 && (o.translateFn = e[10]),
          a.$set(o));
      },
      i(e) {
        t || (m(a.$$.fragment, e), (t = !0));
      },
      o(e) {
        (v(a.$$.fragment, e), (t = !1));
      },
      d(e) {
        (e && f(l), J(a), n[11](null));
      },
    }
  );
}
function sl(n) {
  let l,
    a,
    t = (n[1] || n[4]) && Te(n);
  return {
    c() {
      (t && t.c(), (l = P()));
    },
    l(e) {
      (t && t.l(e), (l = P()));
    },
    m(e, r) {
      (t && t.m(e, r), w(e, l, r), (a = !0));
    },
    p(e, [r]) {
      e[1] || e[4]
        ? t
          ? (t.p(e, r), r & 18 && m(t, 1))
          : ((t = Te(e)), t.c(), m(t, 1), t.m(l.parentNode, l))
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
function fl(n, l, a) {
  let t, e, r, o, s;
  (Q(n, se, (p) => a(1, (e = p))), Q(n, Le, (p) => a(4, (r = p))), Q(n, ce, (p) => a(5, (o = p))));
  const i = Re();
  Q(n, i, (p) => a(6, (s = p)));
  let c,
    u,
    b = !1,
    C = null;
  function q() {
    u &&
      requestAnimationFrame(() => {
        (u?.getBoundingClientRect(), a(9, (b = !0)));
      });
  }
  function I() {
    C === null &&
      (a(9, (b = !1)),
      (C = setTimeout(() => {
        (c?.close(), ce.set(null), se.set(null), (C = null));
      }, cl)));
  }
  We(() => {
    clearTimeout(C);
  });
  const _ = (p) => s.t(p);
  function d(p) {
    fe[p ? "unshift" : "push"](() => {
      ((u = p), a(2, u));
    });
  }
  function S(p) {
    fe[p ? "unshift" : "push"](() => {
      ((c = p), a(0, c));
    });
  }
  return (
    (n.$$.update = () => {
      (n.$$.dirty & 512 && a(3, (t = `modal-page-overlay__dialog${b ? " modal-page-overlay__dialog--open" : ""}`)),
        n.$$.dirty & 3 && e && c && (c.showModal(), q()));
    }),
    [c, e, u, t, r, o, s, i, I, b, _, d, S]
  );
}
class _l extends qe {
  constructor(l) {
    (super(), Ce(this, l, fl, sl, Ie, {}));
  }
}
export { _l as default };
