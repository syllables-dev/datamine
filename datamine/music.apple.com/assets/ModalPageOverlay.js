import {
  S as Ie,
  i as Ve,
  n as Ne,
  C as ye,
  e as E,
  s as O,
  c as j,
  a as D,
  b as T,
  d as $,
  f as G,
  g as u,
  h,
  t as re,
  j as se,
  k as w,
  l as g,
  m as J,
  o as Pe,
  p as Ae,
  q as Me,
  r as m,
  u as S,
  v as p,
  w as F,
  x as Q,
  y as Oe,
  z as $e,
  A as Se,
  B as Fe,
  D as Be,
  E as L,
  F as R,
  G as X,
  H as K,
  I as U,
  J as P,
  K as ee,
  L as ce,
  M as He,
  N as Ke,
  T as Le,
  O as Re,
  P as Y,
  Q as fe,
  R as Xe,
  U as ue,
  V as ze,
  W as Ue,
  X as je,
  Y as _e,
} from "./main.js";
function de(i, l, a) {
  const t = i.slice();
  return ((t[16] = l[a]), t);
}
function he(i, l, a) {
  const t = i.slice();
  return ((t[21] = l[a]), t);
}
function me(i, l, a) {
  const t = i.slice();
  return ((t[24] = l[a]), t);
}
function x(i) {
  const l = i.slice(),
    a = nl(l[19]);
  return ((l[20] = a), l);
}
function Ge(i) {
  var e;
  const l = i.slice(),
    a = (e = l[16].items) == null ? void 0 : e[0];
  l[19] = a;
  const t = il(l[16]);
  return ((l[27] = t), l);
}
function Je(i) {
  var t;
  const l = i.slice(),
    a = (t = l[16].items) == null ? void 0 : t[0];
  return ((l[19] = a), l);
}
function Qe(i) {
  var t;
  const l = i.slice(),
    a = (t = l[16].items) == null ? void 0 : t[0];
  return ((l[19] = a), l);
}
function ve(i) {
  let l, a, t;
  return (
    (a = new Be({ props: { artwork: i[4].artwork, profile: "artist-bio", alt: "" } })),
    {
      c() {
        ((l = E("div")), j(a.$$.fragment), this.h());
      },
      l(e) {
        l = D(e, "DIV", { class: !0, "aria-hidden": !0 });
        var s = T(l);
        (G(a.$$.fragment, s), s.forEach(u), this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__reflection svelte-bhq2k0"), h(l, "aria-hidden", "true"));
      },
      m(e, s) {
        (w(e, l, s), J(a, l, null), (t = !0));
      },
      p(e, s) {
        const o = {};
        (s & 16 && (o.artwork = e[4].artwork), a.$set(o));
      },
      i(e) {
        t || (m(a.$$.fragment, e), (t = !0));
      },
      o(e) {
        (p(a.$$.fragment, e), (t = !1));
      },
      d(e) {
        (e && u(l), Q(a));
      },
    }
  );
}
function pe(i) {
  var o;
  let l, a, t, e, s;
  return (
    (a = new Be({ props: { artwork: i[4].artwork, profile: "artist-bio", alt: (o = i[4].title) != null ? o : "" } })),
    {
      c() {
        ((l = E("div")), j(a.$$.fragment), (t = O()), (e = E("div")), this.h());
      },
      l(n) {
        l = D(n, "DIV", { class: !0 });
        var r = T(l);
        (G(a.$$.fragment, r),
          r.forEach(u),
          (t = $(n)),
          (e = D(n, "DIV", { class: !0, "aria-hidden": !0 })),
          T(e).forEach(u),
          this.h());
      },
      h() {
        (h(l, "class", "canvas-modal__artwork svelte-bhq2k0"),
          h(e, "class", "canvas-modal__artwork-anchor svelte-bhq2k0"),
          h(e, "aria-hidden", "true"));
      },
      m(n, r) {
        (w(n, l, r), J(a, l, null), w(n, t, r), w(n, e, r), (s = !0));
      },
      p(n, r) {
        var f;
        const c = {};
        (r & 16 && (c.artwork = n[4].artwork), r & 16 && (c.alt = (f = n[4].title) != null ? f : ""), a.$set(c));
      },
      i(n) {
        s || (m(a.$$.fragment, n), (s = !0));
      },
      o(n) {
        (p(a.$$.fragment, n), (s = !1));
      },
      d(n) {
        (n && (u(l), u(t), u(e)), Q(a));
      },
    }
  );
}
function We(i) {
  let l,
    a = i[2].title + "",
    t,
    e,
    s,
    o,
    n = i[2].text + "",
    r;
  return {
    c() {
      ((l = E("h1")), (t = L(a)), (e = O()), (s = E("div")), (o = E("p")), (r = L(n)), this.h());
    },
    l(c) {
      l = D(c, "H1", { class: !0, "data-testid": !0 });
      var f = T(l);
      ((t = R(f, a)), f.forEach(u), (e = $(c)), (s = D(c, "DIV", { class: !0, "data-testid": !0 })));
      var v = T(s);
      o = D(v, "P", {});
      var C = T(o);
      ((r = R(C, n)), C.forEach(u), v.forEach(u), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-bhq2k0"),
        h(l, "data-testid", "canvas-modal-title"),
        h(s, "class", "canvas-modal__text svelte-bhq2k0"),
        h(s, "data-testid", "canvas-modal-text"));
    },
    m(c, f) {
      (w(c, l, f), g(l, t), w(c, e, f), w(c, s, f), g(s, o), g(o, r));
    },
    p(c, f) {
      (f & 4 && a !== (a = c[2].title + "") && X(t, a), f & 4 && n !== (n = c[2].text + "") && X(r, n));
    },
    i: K,
    o: K,
    d(c) {
      c && (u(l), u(e), u(s));
    },
  };
}
function Ye(i) {
  var o;
  let l,
    a,
    t = U((o = i[0]) != null ? o : []),
    e = [];
  for (let n = 0; n < t.length; n += 1) e[n] = qe(de(i, t, n));
  const s = (n) =>
    p(e[n], 1, 1, () => {
      e[n] = null;
    });
  return {
    c() {
      for (let n = 0; n < e.length; n += 1) e[n].c();
      l = P();
    },
    l(n) {
      for (let r = 0; r < e.length; r += 1) e[r].l(n);
      l = P();
    },
    m(n, r) {
      for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(n, r);
      (w(n, l, r), (a = !0));
    },
    p(n, r) {
      var c;
      if (r & 1) {
        t = U((c = n[0]) != null ? c : []);
        let f;
        for (f = 0; f < t.length; f += 1) {
          const v = de(n, t, f);
          e[f] ? (e[f].p(v, r), m(e[f], 1)) : ((e[f] = qe(v)), e[f].c(), m(e[f], 1), e[f].m(l.parentNode, l));
        }
        for (S(), f = t.length; f < e.length; f += 1) s(f);
        F();
      }
    },
    i(n) {
      if (!a) {
        for (let r = 0; r < t.length; r += 1) m(e[r]);
        a = !0;
      }
    },
    o(n) {
      e = e.filter(Boolean);
      for (let r = 0; r < e.length; r += 1) p(e[r]);
      a = !1;
    },
    d(n) {
      (n && u(l), ee(e, n));
    },
  };
}
function Ze(i) {
  var s;
  let l,
    a,
    t = i[27] && be(i),
    e = ((s = i[19]) == null ? void 0 : s.text) && ke(i);
  return {
    c() {
      (t && t.c(), (l = O()), e && e.c(), (a = P()));
    },
    l(o) {
      (t && t.l(o), (l = $(o)), e && e.l(o), (a = P()));
    },
    m(o, n) {
      (t && t.m(o, n), w(o, l, n), e && e.m(o, n), w(o, a, n));
    },
    p(o, n) {
      var r;
      (o[27] ? (t ? t.p(o, n) : ((t = be(o)), t.c(), t.m(l.parentNode, l))) : t && (t.d(1), (t = null)),
        (r = o[19]) != null && r.text
          ? e
            ? e.p(o, n)
            : ((e = ke(o)), e.c(), e.m(a.parentNode, a))
          : e && (e.d(1), (e = null)));
    },
    i: K,
    o: K,
    d(o) {
      (o && (u(l), u(a)), t && t.d(o), e && e.d(o));
    },
  };
}
function xe(i) {
  let l,
    a,
    t = i[19] && ge(x(i));
  return {
    c() {
      (t && t.c(), (l = P()));
    },
    l(e) {
      (t && t.l(e), (l = P()));
    },
    m(e, s) {
      (t && t.m(e, s), w(e, l, s), (a = !0));
    },
    p(e, s) {
      e[19]
        ? t
          ? (t.p(x(e), s), s & 1 && m(t, 1))
          : ((t = ge(x(e))), t.c(), m(t, 1), t.m(l.parentNode, l))
        : t &&
          (S(),
          p(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(e) {
      a || (m(t), (a = !0));
    },
    o(e) {
      (p(t), (a = !1));
    },
    d(e) {
      (e && u(l), t && t.d(e));
    },
  };
}
function el(i) {
  var t;
  let l,
    a = ((t = i[19]) == null ? void 0 : t.title) && Te(i);
  return {
    c() {
      (a && a.c(), (l = P()));
    },
    l(e) {
      (a && a.l(e), (l = P()));
    },
    m(e, s) {
      (a && a.m(e, s), w(e, l, s));
    },
    p(e, s) {
      var o;
      (o = e[19]) != null && o.title
        ? a
          ? a.p(e, s)
          : ((a = Te(e)), a.c(), a.m(l.parentNode, l))
        : a && (a.d(1), (a = null));
    },
    i: K,
    o: K,
    d(e) {
      (e && u(l), a && a.d(e));
    },
  };
}
function be(i) {
  let l,
    a = i[27] + "",
    t;
  return {
    c() {
      ((l = E("h2")), (t = L(a)), this.h());
    },
    l(e) {
      l = D(e, "H2", { class: !0, "data-testid": !0 });
      var s = T(l);
      ((t = R(s, a)), s.forEach(u), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__text-title svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-text-title"));
    },
    m(e, s) {
      (w(e, l, s), g(l, t));
    },
    p(e, s) {
      s & 1 && a !== (a = e[27] + "") && X(t, a);
    },
    d(e) {
      e && u(l);
    },
  };
}
function ke(i) {
  let l,
    a,
    t,
    e = ce(i[19].text) + "",
    s;
  return {
    c() {
      ((l = E("div")), (a = E("p")), (t = new He(!1)), (s = O()), this.h());
    },
    l(o) {
      l = D(o, "DIV", { class: !0, "data-testid": !0 });
      var n = T(l);
      a = D(n, "P", {});
      var r = T(a);
      ((t = Ke(r, !1)), r.forEach(u), (s = $(n)), n.forEach(u), this.h());
    },
    h() {
      ((t.a = null), h(l, "class", "canvas-modal__text svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-text"));
    },
    m(o, n) {
      (w(o, l, n), g(l, a), t.m(e, a), g(l, s));
    },
    p(o, n) {
      n & 1 && e !== (e = ce(o[19].text) + "") && t.p(e);
    },
    d(o) {
      o && u(l);
    },
  };
}
function ge(i) {
  let l,
    a,
    t = i[20].length > 0 && we(i);
  return {
    c() {
      (t && t.c(), (l = P()));
    },
    l(e) {
      (t && t.l(e), (l = P()));
    },
    m(e, s) {
      (t && t.m(e, s), w(e, l, s), (a = !0));
    },
    p(e, s) {
      e[20].length > 0
        ? t
          ? (t.p(e, s), s & 1 && m(t, 1))
          : ((t = we(e)), t.c(), m(t, 1), t.m(l.parentNode, l))
        : t &&
          (S(),
          p(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(e) {
      a || (m(t), (a = !0));
    },
    o(e) {
      (p(t), (a = !1));
    },
    d(e) {
      (e && u(l), t && t.d(e));
    },
  };
}
function we(i) {
  let l,
    a,
    t = U(i[20]),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = De(he(i, t, o));
  const s = (o) =>
    p(e[o], 1, 1, () => {
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
      var n = T(l);
      for (let r = 0; r < e.length; r += 1) e[r].l(n);
      (n.forEach(u), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__info svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-info"));
    },
    m(o, n) {
      w(o, l, n);
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(l, null);
      a = !0;
    },
    p(o, n) {
      if (n & 1) {
        t = U(o[20]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = he(o, t, r);
          e[r] ? (e[r].p(c, n), m(e[r], 1)) : ((e[r] = De(c)), e[r].c(), m(e[r], 1), e[r].m(l, null));
        }
        for (S(), r = t.length; r < e.length; r += 1) s(r);
        F();
      }
    },
    i(o) {
      if (!a) {
        for (let n = 0; n < t.length; n += 1) m(e[n]);
        a = !0;
      }
    },
    o(o) {
      e = e.filter(Boolean);
      for (let n = 0; n < e.length; n += 1) p(e[n]);
      a = !1;
    },
    d(o) {
      (o && u(l), ee(e, o));
    },
  };
}
function ll(i) {
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
      e & 1 && l !== (l = t[21].value + "") && X(a, l);
    },
    i: K,
    o: K,
    d(t) {
      t && u(a);
    },
  };
}
function tl(i) {
  let l,
    a,
    t = U(i[21].value),
    e = [];
  for (let o = 0; o < t.length; o += 1) e[o] = Ee(me(i, t, o));
  const s = (o) =>
    p(e[o], 1, 1, () => {
      e[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      l = P();
    },
    l(o) {
      for (let n = 0; n < e.length; n += 1) e[n].l(o);
      l = P();
    },
    m(o, n) {
      for (let r = 0; r < e.length; r += 1) e[r] && e[r].m(o, n);
      (w(o, l, n), (a = !0));
    },
    p(o, n) {
      if (n & 1) {
        t = U(o[21].value);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = me(o, t, r);
          e[r] ? (e[r].p(c, n), m(e[r], 1)) : ((e[r] = Ee(c)), e[r].c(), m(e[r], 1), e[r].m(l.parentNode, l));
        }
        for (S(), r = t.length; r < e.length; r += 1) s(r);
        F();
      }
    },
    i(o) {
      if (!a) {
        for (let n = 0; n < t.length; n += 1) m(e[n]);
        a = !0;
      }
    },
    o(o) {
      e = e.filter(Boolean);
      for (let n = 0; n < e.length; n += 1) p(e[n]);
      a = !1;
    },
    d(o) {
      (o && u(l), ee(e, o));
    },
  };
}
function al(i) {
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
      e & 1 && l !== (l = t[24] + "") && X(a, l);
    },
    d(t) {
      t && u(a);
    },
  };
}
function Ee(i) {
  let l, a;
  return (
    (l = new Le({ props: { theme: Re.Dark, $$slots: { default: [al] }, $$scope: { ctx: i } } })),
    {
      c() {
        j(l.$$.fragment);
      },
      l(t) {
        G(l.$$.fragment, t);
      },
      m(t, e) {
        (J(l, t, e), (a = !0));
      },
      p(t, e) {
        const s = {};
        (e & 268435457 && (s.$$scope = { dirty: e, ctx: t }), l.$set(s));
      },
      i(t) {
        a || (m(l.$$.fragment, t), (a = !0));
      },
      o(t) {
        (p(l.$$.fragment, t), (a = !1));
      },
      d(t) {
        Q(l, t);
      },
    }
  );
}
function De(i) {
  let l,
    a,
    t = i[21].label + "",
    e,
    s,
    o,
    n,
    r,
    c,
    f,
    v;
  const C = [tl, ll],
    q = [];
  function I(_, d) {
    return (d & 1 && (n = null), n == null && (n = !!Array.isArray(_[21].value)), n ? 0 : 1);
  }
  return (
    (r = I(i, -1)),
    (c = q[r] = C[r](i)),
    {
      c() {
        ((l = E("div")), (a = E("dt")), (e = L(t)), (s = O()), (o = E("dd")), c.c(), (f = O()), this.h());
      },
      l(_) {
        l = D(_, "DIV", { class: !0 });
        var d = T(l);
        a = D(d, "DT", { class: !0 });
        var A = T(a);
        ((e = R(A, t)), A.forEach(u), (s = $(d)), (o = D(d, "DD", { class: !0 })));
        var b = T(o);
        (c.l(b), b.forEach(u), (f = $(d)), d.forEach(u), this.h());
      },
      h() {
        (h(a, "class", "canvas-modal__info-label svelte-bhq2k0"),
          h(o, "class", "canvas-modal__info-value svelte-bhq2k0"),
          h(l, "class", "canvas-modal__info-row svelte-bhq2k0"));
      },
      m(_, d) {
        (w(_, l, d), g(l, a), g(a, e), g(l, s), g(l, o), q[r].m(o, null), g(l, f), (v = !0));
      },
      p(_, d) {
        (!v || d & 1) && t !== (t = _[21].label + "") && X(e, t);
        let A = r;
        ((r = I(_, d)),
          r === A
            ? q[r].p(_, d)
            : (S(),
              p(q[A], 1, 1, () => {
                q[A] = null;
              }),
              F(),
              (c = q[r]),
              c ? c.p(_, d) : ((c = q[r] = C[r](_)), c.c()),
              m(c, 1),
              c.m(o, null)));
      },
      i(_) {
        v || (m(c), (v = !0));
      },
      o(_) {
        (p(c), (v = !1));
      },
      d(_) {
        (_ && u(l), q[r].d());
      },
    }
  );
}
function Te(i) {
  let l,
    a = i[19].title + "",
    t,
    e;
  return {
    c() {
      ((l = E("h1")), (t = L(a)), (e = O()), this.h());
    },
    l(s) {
      l = D(s, "H1", { class: !0, "data-testid": !0 });
      var o = T(l);
      ((t = R(o, a)), (e = $(o)), o.forEach(u), this.h());
    },
    h() {
      (h(l, "class", "canvas-modal__title svelte-bhq2k0"), h(l, "data-testid", "canvas-modal-title"));
    },
    m(s, o) {
      (w(s, l, o), g(l, t), g(l, e));
    },
    p(s, o) {
      o & 1 && a !== (a = s[19].title + "") && X(t, a);
    },
    d(s) {
      s && u(l);
    },
  };
}
function qe(i) {
  let l, a, t, e;
  const s = [el, xe, Ze],
    o = [];
  function n(c, f) {
    return c[16].itemKind === "artistBioHeader"
      ? 0
      : c[16].itemKind === "artistBioInfo"
        ? 1
        : c[16].itemKind === "plainTextBlock"
          ? 2
          : -1;
  }
  function r(c, f) {
    if (f === 0) return Qe(c);
    if (f === 1) return Je(c);
    if (f === 2) return Ge(c);
  }
  return (
    ~(l = n(i)) && (a = o[l] = s[l](r(i, l))),
    {
      c() {
        (a && a.c(), (t = P()));
      },
      l(c) {
        (a && a.l(c), (t = P()));
      },
      m(c, f) {
        (~l && o[l].m(c, f), w(c, t, f), (e = !0));
      },
      p(c, f) {
        let v = l;
        ((l = n(c)),
          l === v
            ? ~l && o[l].p(r(c, l), f)
            : (a &&
                (S(),
                p(o[v], 1, 1, () => {
                  o[v] = null;
                }),
                F()),
              ~l
                ? ((a = o[l]), a ? a.p(r(c, l), f) : ((a = o[l] = s[l](r(c, l))), a.c()), m(a, 1), a.m(t.parentNode, t))
                : (a = null)));
      },
      i(c) {
        e || (m(a), (e = !0));
      },
      o(c) {
        (p(a), (e = !1));
      },
      d(c) {
        (c && u(t), ~l && o[l].d(c));
      },
    }
  );
}
function ol(i) {
  var oe, ne;
  let l,
    a,
    t,
    e,
    s,
    o,
    n,
    r,
    c,
    f,
    v,
    C,
    q,
    I,
    _,
    d,
    A,
    b,
    y,
    Z,
    le,
    V = ((oe = i[4]) == null ? void 0 : oe.artwork) && ve(i);
  e = new ye({});
  let N = ((ne = i[4]) == null ? void 0 : ne.artwork) && pe(i);
  const te = [Ye, We],
    H = [];
  function ae(k, B) {
    return k[6] ? 0 : k[2] ? 1 : -1;
  }
  return (
    ~(_ = ae(i)) && (d = H[_] = te[_](i)),
    {
      c() {
        ((l = E("div")),
          V && V.c(),
          (a = O()),
          (t = E("button")),
          j(e.$$.fragment),
          (o = O()),
          (n = E("div")),
          (r = E("div")),
          (c = O()),
          (f = E("div")),
          (v = O()),
          N && N.c(),
          (C = O()),
          (q = E("div")),
          (I = E("div")),
          d && d.c(),
          (A = O()),
          (b = E("div")),
          this.h());
      },
      l(k) {
        l = D(k, "DIV", { class: !0, "data-testid": !0 });
        var B = T(l);
        (V && V.l(B), (a = $(B)), (t = D(B, "BUTTON", { class: !0, type: !0, "aria-label": !0 })));
        var z = T(t);
        (G(e.$$.fragment, z), z.forEach(u), (o = $(B)), (n = D(B, "DIV", { class: !0 })));
        var M = T(n);
        ((r = D(M, "DIV", { class: !0, "aria-hidden": !0 })),
          T(r).forEach(u),
          (c = $(M)),
          (f = D(M, "DIV", { class: !0, "aria-hidden": !0 })),
          T(f).forEach(u),
          (v = $(M)),
          N && N.l(M),
          (C = $(M)),
          (q = D(M, "DIV", { class: !0 })));
        var W = T(q);
        I = D(W, "DIV", { class: !0 });
        var ie = T(I);
        (d && d.l(ie),
          ie.forEach(u),
          W.forEach(u),
          (A = $(M)),
          (b = D(M, "DIV", { class: !0, "aria-hidden": !0 })),
          T(b).forEach(u),
          M.forEach(u),
          B.forEach(u),
          this.h());
      },
      h() {
        (h(t, "class", "canvas-modal__close-button svelte-bhq2k0"),
          h(t, "type", "button"),
          h(t, "aria-label", (s = i[1]("AMP.Shared.AX.Close"))),
          h(r, "class", "canvas-modal__fade canvas-modal__fade--top svelte-bhq2k0"),
          h(r, "aria-hidden", "true"),
          h(f, "class", "canvas-modal__scrim-scroll svelte-bhq2k0"),
          h(f, "aria-hidden", "true"),
          h(I, "class", "canvas-modal__article-content svelte-bhq2k0"),
          h(q, "class", "canvas-modal__article svelte-bhq2k0"),
          h(b, "class", "canvas-modal__fade canvas-modal__fade--bottom svelte-bhq2k0"),
          h(b, "aria-hidden", "true"),
          h(n, "class", "canvas-modal__content svelte-bhq2k0"),
          h(l, "class", "canvas-modal svelte-bhq2k0"),
          h(l, "data-testid", "canvas-modal"),
          re(l, "canvas-modal--no-scroll-scrim", i[5]),
          se(l, "--canvas-modal-bg-color", i[3]));
      },
      m(k, B) {
        (w(k, l, B),
          V && V.m(l, null),
          g(l, a),
          g(l, t),
          J(e, t, null),
          g(l, o),
          g(l, n),
          g(n, r),
          g(n, c),
          g(n, f),
          g(n, v),
          N && N.m(n, null),
          g(n, C),
          g(n, q),
          g(q, I),
          ~_ && H[_].m(I, null),
          g(n, A),
          g(n, b),
          (y = !0),
          Z || ((le = [Pe(t, "click", i[7]), Ae(Me.call(null, t))]), (Z = !0)));
      },
      p(k, [B]) {
        var M, W;
        ((M = k[4]) != null && M.artwork
          ? V
            ? (V.p(k, B), B & 16 && m(V, 1))
            : ((V = ve(k)), V.c(), m(V, 1), V.m(l, a))
          : V &&
            (S(),
            p(V, 1, 1, () => {
              V = null;
            }),
            F()),
          (!y || (B & 2 && s !== (s = k[1]("AMP.Shared.AX.Close")))) && h(t, "aria-label", s),
          (W = k[4]) != null && W.artwork
            ? N
              ? (N.p(k, B), B & 16 && m(N, 1))
              : ((N = pe(k)), N.c(), m(N, 1), N.m(n, C))
            : N &&
              (S(),
              p(N, 1, 1, () => {
                N = null;
              }),
              F()));
        let z = _;
        ((_ = ae(k)),
          _ === z
            ? ~_ && H[_].p(k, B)
            : (d &&
                (S(),
                p(H[z], 1, 1, () => {
                  H[z] = null;
                }),
                F()),
              ~_ ? ((d = H[_]), d ? d.p(k, B) : ((d = H[_] = te[_](k)), d.c()), m(d, 1), d.m(I, null)) : (d = null)),
          (!y || B & 32) && re(l, "canvas-modal--no-scroll-scrim", k[5]),
          B & 8 && se(l, "--canvas-modal-bg-color", k[3]));
      },
      i(k) {
        y || (m(V), m(e.$$.fragment, k), m(N), m(d), (y = !0));
      },
      o(k) {
        (p(V), p(e.$$.fragment, k), p(N), p(d), (y = !1));
      },
      d(k) {
        (k && u(l), V && V.d(), Q(e), N && N.d(), ~_ && H[_].d(), (Z = !1), Oe(le));
      },
    }
  );
}
function nl(i) {
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
function il(i) {
  var l, a;
  const t = i.header;
  if (t)
    return "title" in t
      ? t.title
      : (a = (l = t.item) === null || l === void 0 ? void 0 : l.titleLink) === null || a === void 0
        ? void 0
        : a.title;
}
function rl(i, l, a) {
  let t, e, s, o, n, r;
  var c, f, v, C, q;
  let { sections: I = null } = l,
    { translateFn: _ } = l,
    { placeholder: d = null } = l;
  const A = $e(),
    b = (y) => {
      (y.preventDefault(), y.stopPropagation(), A("close"));
    };
  return (
    (i.$$set = (y) => {
      ("sections" in y && a(0, (I = y.sections)),
        "translateFn" in y && a(1, (_ = y.translateFn)),
        "placeholder" in y && a(2, (d = y.placeholder)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 1 && a(14, (t = I == null ? void 0 : I.find((y) => y.itemKind === "artistBioHeader"))),
        i.$$.dirty & 16640 &&
          a(4, (e = a(8, (c = t == null ? void 0 : t.items)) === null || c === void 0 ? void 0 : c[0])),
        i.$$.dirty & 1 && a(6, (s = !!I && I.length > 0)),
        i.$$.dirty & 3600 &&
          a(
            13,
            (o =
              !(
                a(
                  10,
                  (v =
                    a(9, (f = e == null ? void 0 : e.colorBackdropArtwork)) === null || f === void 0
                      ? void 0
                      : f.dictionary),
                ) === null || v === void 0
              ) && v.bgColor
                ? e.colorBackdropArtwork.dictionary
                : a(11, (C = e == null ? void 0 : e.artwork)) === null || C === void 0
                  ? void 0
                  : C.dictionary),
          ),
        i.$$.dirty & 12288 &&
          a(3, (n = a(12, (q = o != null && o.bgColor ? Se(o.bgColor) : null)) !== null && q !== void 0 ? q : void 0)),
        i.$$.dirty & 8 && a(5, (r = !Fe(n))));
    }),
    [I, _, d, n, e, r, s, b, c, f, v, C, q, o, t]
  );
}
class sl extends Ie {
  constructor(l) {
    (super(), Ve(this, l, rl, ol, Ne, { sections: 0, translateFn: 1, placeholder: 2 }));
  }
}
function Ce(i) {
  let l,
    a,
    t = {
      modalTriggerElement: i[5],
      showOnMount: !!i[1],
      preventDefaultClose: !0,
      dialogClassNames: i[3],
      $$slots: { default: [cl] },
      $$scope: { ctx: i },
    };
  return (
    (l = new je({ props: t })),
    i[12](l),
    l.$on("close", i[8]),
    {
      c() {
        j(l.$$.fragment);
      },
      l(e) {
        G(l.$$.fragment, e);
      },
      m(e, s) {
        (J(l, e, s), (a = !0));
      },
      p(e, s) {
        const o = {};
        (s & 32 && (o.modalTriggerElement = e[5]),
          s & 2 && (o.showOnMount = !!e[1]),
          s & 8 && (o.dialogClassNames = e[3]),
          s & 32854 && (o.$$scope = { dirty: s, ctx: e }),
          l.$set(o));
      },
      i(e) {
        a || (m(l.$$.fragment, e), (a = !0));
      },
      o(e) {
        (p(l.$$.fragment, e), (a = !1));
      },
      d(e) {
        (i[12](null), Q(l, e));
      },
    }
  );
}
function cl(i) {
  var e, s;
  let l, a, t;
  return (
    (a = new sl({
      props: {
        sections: (s = (e = i[1]) == null ? void 0 : e.sections) != null ? s : null,
        placeholder: i[4],
        translateFn: i[10],
      },
    })),
    a.$on("close", i[8]),
    {
      c() {
        ((l = E("div")), j(a.$$.fragment), this.h());
      },
      l(o) {
        l = D(o, "DIV", { class: !0 });
        var n = T(l);
        (G(a.$$.fragment, n), n.forEach(u), this.h());
      },
      h() {
        h(l, "class", "modal-page-overlay__inner svelte-101sxrd");
      },
      m(o, n) {
        (w(o, l, n), J(a, l, null), i[11](l), (t = !0));
      },
      p(o, n) {
        var c, f;
        const r = {};
        (n & 2 && (r.sections = (f = (c = o[1]) == null ? void 0 : c.sections) != null ? f : null),
          n & 16 && (r.placeholder = o[4]),
          n & 64 && (r.translateFn = o[10]),
          a.$set(r));
      },
      i(o) {
        t || (m(a.$$.fragment, o), (t = !0));
      },
      o(o) {
        (p(a.$$.fragment, o), (t = !1));
      },
      d(o) {
        (o && u(l), Q(a), i[11](null));
      },
    }
  );
}
function fl(i) {
  let l,
    a,
    t = (i[1] || i[4]) && Ce(i);
  return {
    c() {
      (t && t.c(), (l = P()));
    },
    l(e) {
      (t && t.l(e), (l = P()));
    },
    m(e, s) {
      (t && t.m(e, s), w(e, l, s), (a = !0));
    },
    p(e, [s]) {
      e[1] || e[4]
        ? t
          ? (t.p(e, s), s & 18 && m(t, 1))
          : ((t = Ce(e)), t.c(), m(t, 1), t.m(l.parentNode, l))
        : t &&
          (S(),
          p(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(e) {
      a || (m(t), (a = !0));
    },
    o(e) {
      (p(t), (a = !1));
    },
    d(e) {
      (e && u(l), t && t.d(e));
    },
  };
}
const ul = 300;
function _l(i, l, a) {
  let t, e, s, o, n;
  (Y(i, fe, (b) => a(1, (e = b))), Y(i, Xe, (b) => a(4, (s = b))), Y(i, ue, (b) => a(5, (o = b))));
  const r = ze();
  Y(i, r, (b) => a(6, (n = b)));
  let c,
    f,
    v = !1,
    C = null;
  function q() {
    f &&
      requestAnimationFrame(() => {
        (f == null || f.getBoundingClientRect(), a(9, (v = !0)));
      });
  }
  function I() {
    C === null &&
      (a(9, (v = !1)),
      (C = setTimeout(() => {
        (c == null || c.close(), ue.set(null), fe.set(null), (C = null));
      }, ul)));
  }
  Ue(() => {
    clearTimeout(C);
  });
  const _ = (b) => n.t(b);
  function d(b) {
    _e[b ? "unshift" : "push"](() => {
      ((f = b), a(2, f));
    });
  }
  function A(b) {
    _e[b ? "unshift" : "push"](() => {
      ((c = b), a(0, c));
    });
  }
  return (
    (i.$$.update = () => {
      (i.$$.dirty & 512 && a(3, (t = `modal-page-overlay__dialog${v ? " modal-page-overlay__dialog--open" : ""}`)),
        i.$$.dirty & 3 && e && c && (c.showModal(), q()));
    }),
    [c, e, f, t, s, o, n, r, I, v, _, d, A]
  );
}
class hl extends Ie {
  constructor(l) {
    (super(), Ve(this, l, _l, fl, Ne, {}));
  }
}
export { hl as default };
