import {
  S as be,
  i as ke,
  n as ve,
  bs as J,
  I as K,
  e as z,
  s as ee,
  a as D,
  b as q,
  g as R,
  d as te,
  h as M,
  j as S,
  k as F,
  l as G,
  p as ie,
  o as X,
  bt as Ne,
  bu as we,
  u as le,
  bv as ye,
  bw as Re,
  w as oe,
  r as I,
  v as H,
  y as We,
  z as Ye,
  bx as Ce,
  by as re,
  W as Se,
  Y as je,
  H as p,
  bz as Ie,
  bA as He,
  bB as Le,
  bC as Pe,
  J as O,
  bD as Ee,
  c as Me,
  f as Ve,
  m as ze,
  x as De,
  bE as Je,
  bF as ae,
  bG as Ke,
  a7 as Ze,
} from "./main.js";
import { s as ce } from "./splitIntoChunks.js";
function ue(o, t, l) {
  const e = o.slice();
  ((e[38] = t[l]), (e[41] = l));
  const n = (e[3] + e[41]) * e[4] + e[1];
  return ((e[39] = n), e);
}
function he(o, t, l) {
  const e = o.slice();
  return ((e[42] = t[l]), e);
}
const Qe = (o) => ({ item: o[0] & 128 }),
  fe = (o) => ({ item: o[45] }),
  Xe = (o) => ({ item: o[0] & 1 }),
  _e = (o) => ({ item: o[45] });
function xe(o) {
  return { c: p, l: p, m: p, p, i: p, o: p, d: p };
}
function $e(o) {
  let t;
  const l = o[29].itemComponent,
    e = Ie(l, o, o[28], _e);
  return {
    c() {
      e && e.c();
    },
    l(n) {
      e && e.l(n);
    },
    m(n, s) {
      (e && e.m(n, s), (t = !0));
    },
    p(n, s) {
      e && e.p && (!t || s[0] & 268435457) && He(e, l, n, n[28], t ? Pe(l, n[28], s, Xe) : Le(n[28]), _e);
    },
    i(n) {
      t || (I(e, n), (t = !0));
    },
    o(n) {
      (H(e, n), (t = !1));
    },
    d(n) {
      e && e.d(n);
    },
  };
}
function et(o) {
  return { c: p, l: p, m: p, p, i: p, o: p, d: p };
}
function tt(o) {
  let t,
    l =
      '<div data-testid="placeholder-artwork" class="placeholder-artwork svelte-42hu87"></div> <div class="placeholder-details svelte-42hu87"></div>';
  return {
    c() {
      ((t = z("div")), (t.innerHTML = l));
    },
    l(e) {
      ((t = D(e, "DIV", { ["data-svelte-h"]: !0 })), Ee(t) !== "svelte-1alm0pv" && (t.innerHTML = l));
    },
    m(e, n) {
      F(e, t, n);
    },
    p,
    i: p,
    o: p,
    d(e) {
      e && R(t);
    },
  };
}
function lt(o) {
  let t,
    l,
    e = o[45] && me(o);
  return {
    c() {
      (e && e.c(), (t = O()));
    },
    l(n) {
      (e && e.l(n), (t = O()));
    },
    m(n, s) {
      (e && e.m(n, s), F(n, t, s), (l = !0));
    },
    p(n, s) {
      n[45]
        ? e
          ? (e.p(n, s), s[0] & 128 && I(e, 1))
          : ((e = me(n)), e.c(), I(e, 1), e.m(t.parentNode, t))
        : e &&
          (le(),
          H(e, 1, 1, () => {
            e = null;
          }),
          oe());
    },
    i(n) {
      l || (I(e), (l = !0));
    },
    o(n) {
      (H(e), (l = !1));
    },
    d(n) {
      (n && R(t), e && e.d(n));
    },
  };
}
function me(o) {
  let t;
  const l = o[29].itemComponent,
    e = Ie(l, o, o[28], fe);
  return {
    c() {
      e && e.c();
    },
    l(n) {
      e && e.l(n);
    },
    m(n, s) {
      (e && e.m(n, s), (t = !0));
    },
    p(n, s) {
      e && e.p && (!t || s[0] & 268435584) && He(e, l, n, n[28], t ? Pe(l, n[28], s, Qe) : Le(n[28]), fe);
    },
    i(n) {
      t || (I(e, n), (t = !0));
    },
    o(n) {
      (H(e, n), (t = !1));
    },
    d(n) {
      e && e.d(n);
    },
  };
}
function ot(o) {
  let t,
    l =
      '<div data-testid="placeholder-artwork" class="placeholder-artwork svelte-42hu87"></div> <div class="placeholder-details svelte-42hu87"></div>';
  return {
    c() {
      ((t = z("div")), (t.innerHTML = l));
    },
    l(e) {
      ((t = D(e, "DIV", { ["data-svelte-h"]: !0 })), Ee(t) !== "svelte-1alm0pv" && (t.innerHTML = l));
    },
    m(e, n) {
      F(e, t, n);
    },
    p,
    i: p,
    o: p,
    d(e) {
      e && R(t);
    },
  };
}
function de(o, t) {
  let l,
    e,
    n,
    s,
    a = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !0,
      pending: ot,
      then: lt,
      catch: tt,
      value: 45,
      blocks: [, , ,],
    };
  return (
    J((n = t[42]), a),
    {
      key: o,
      first: null,
      c() {
        ((l = O()), (e = O()), a.block.c(), this.h());
      },
      l(h) {
        ((l = O()), (e = O()), a.block.l(h), this.h());
      },
      h() {
        this.first = l;
      },
      m(h, i) {
        (F(h, l, i),
          F(h, e, i),
          a.block.m(h, (a.anchor = i)),
          (a.mount = () => e.parentNode),
          (a.anchor = e),
          (s = !0));
      },
      p(h, i) {
        ((t = h), (a.ctx = t), (i[0] & 128 && n !== (n = t[42]) && J(n, a)) || we(a, t, i));
      },
      i(h) {
        s || (I(a.block), (s = !0));
      },
      o(h) {
        for (let i = 0; i < 3; i += 1) {
          const v = a.blocks[i];
          H(v);
        }
        s = !1;
      },
      d(h) {
        (h && (R(l), R(e)), a.block.d(h), (a.token = null), (a = null));
      },
    }
  );
}
function ge(o, t) {
  let l,
    e = [],
    n = new Map(),
    s,
    a = `${t[39]}px`,
    h = `${t[2]}px`,
    i,
    v = K(t[38].rowItems);
  const y = (f) => f[42];
  for (let f = 0; f < v.length; f += 1) {
    let c = he(t, v, f),
      g = y(c);
    n.set(g, (e[f] = de(g, c)));
  }
  return {
    key: o,
    first: null,
    c() {
      l = z("div");
      for (let f = 0; f < e.length; f += 1) e[f].c();
      ((s = ee()), this.h());
    },
    l(f) {
      l = D(f, "DIV", { class: !0, "data-testid": !0 });
      var c = q(l);
      for (let g = 0; g < e.length; g += 1) e[g].l(c);
      ((s = te(c)), c.forEach(R), this.h());
    },
    h() {
      (M(l, "class", "virtual-row svelte-42hu87"),
        M(l, "data-testid", "lockup-virtual-scrolling-row"),
        S(l, "contain", "strict"),
        S(l, "top", a),
        S(l, "height", h),
        (this.first = l));
    },
    m(f, c) {
      F(f, l, c);
      for (let g = 0; g < e.length; g += 1) e[g] && e[g].m(l, null);
      (G(l, s), (i = !0));
    },
    p(f, c) {
      ((t = f),
        c[0] & 268435584 && ((v = K(t[38].rowItems)), le(), (e = ye(e, c, y, 1, t, v, n, l, Re, de, s, he)), oe()),
        c[0] & 154 && a !== (a = `${t[39]}px`) && S(l, "top", a),
        c[0] & 4 && h !== (h = `${t[2]}px`) && S(l, "height", h));
    },
    i(f) {
      if (!i) {
        for (let c = 0; c < v.length; c += 1) I(e[c]);
        i = !0;
      }
    },
    o(f) {
      for (let c = 0; c < e.length; c += 1) H(e[c]);
      i = !1;
    },
    d(f) {
      f && R(l);
      for (let c = 0; c < e.length; c += 1) e[c].d();
    },
  };
}
function nt(o) {
  var T;
  let t,
    l,
    e,
    n,
    s,
    a,
    h,
    i = [],
    v = new Map(),
    y = `${o[5]}px`,
    f = `${o[1]}px`,
    c,
    g,
    N,
    b = {
      ctx: o,
      current: null,
      token: null,
      hasCatch: !1,
      pending: et,
      then: $e,
      catch: xe,
      value: 45,
      blocks: [, , ,],
    };
  J((a = (T = o[0][0]) != null ? T : o[8](0)), b);
  let w = K(o[7]);
  const L = (m) => m[38].id;
  for (let m = 0; m < w.length; m += 1) {
    let u = ue(o, w, m),
      d = L(u);
    v.set(d, (i[m] = ge(d, u)));
  }
  return {
    c() {
      ((t = z("div")), (l = z("div")), (e = z("div")), (n = ee()), (s = z("div")), b.block.c(), (h = ee()));
      for (let m = 0; m < i.length; m += 1) i[m].c();
      this.h();
    },
    l(m) {
      t = D(m, "DIV", { "data-testid": !0, class: !0, id: !0 });
      var u = q(t);
      l = D(u, "DIV", { "data-testid": !0, class: !0 });
      var d = q(l);
      ((e = D(d, "DIV", { class: !0 })), q(e).forEach(R), (n = te(d)), (s = D(d, "DIV", { class: !0 })));
      var P = q(s);
      (b.block.l(P), P.forEach(R), (h = te(d)));
      for (let V = 0; V < i.length; V += 1) i[V].l(d);
      (d.forEach(R), u.forEach(R), this.h());
    },
    h() {
      (M(e, "class", "spacer svelte-42hu87"),
        M(s, "class", "virtual-row svelte-42hu87"),
        S(s, "visibility", "hidden"),
        S(s, "contain", "content"),
        M(l, "data-testid", "virtual-rows"),
        M(l, "class", "virtual-rows svelte-42hu87"),
        S(l, "min-height", y),
        M(t, "data-testid", "lockup-virtual-scrolling-component"),
        M(t, "class", "scrollable-container svelte-42hu87"),
        M(t, "id", "scrollable-page-override"),
        S(t, "--topSpacerHeight", f));
    },
    m(m, u) {
      (F(m, t, u),
        G(t, l),
        G(l, e),
        G(l, n),
        G(l, s),
        b.block.m(s, (b.anchor = null)),
        (b.mount = () => s),
        (b.anchor = null),
        G(l, h));
      for (let d = 0; d < i.length; d += 1) i[d] && i[d].m(l, null);
      (o[30](t),
        (c = !0),
        g ||
          ((N = [
            ie(o[9].call(null, s)),
            X(s, "virtualScrollResize", o[12]),
            X(t, "scroll", Ne(o[10], 10)),
            ie(o[9].call(null, t)),
            X(t, "virtualScrollResize", o[11]),
          ]),
          (g = !0)));
    },
    p(m, u) {
      var d;
      ((o = m),
        (b.ctx = o),
        (u[0] & 1 && a !== (a = (d = o[0][0]) != null ? d : o[8](0)) && J(a, b)) || we(b, o, u),
        u[0] & 268435614 && ((w = K(o[7])), le(), (i = ye(i, u, L, 1, o, w, v, l, Re, ge, null, ue)), oe()),
        u[0] & 32 && y !== (y = `${o[5]}px`) && S(l, "min-height", y),
        u[0] & 2 && f !== (f = `${o[1]}px`) && S(t, "--topSpacerHeight", f));
    },
    i(m) {
      if (!c) {
        I(b.block);
        for (let u = 0; u < w.length; u += 1) I(i[u]);
        c = !0;
      }
    },
    o(m) {
      for (let u = 0; u < 3; u += 1) {
        const d = b.blocks[u];
        H(d);
      }
      for (let u = 0; u < i.length; u += 1) H(i[u]);
      c = !1;
    },
    d(m) {
      (m && R(t), b.block.d(), (b.token = null), (b = null));
      for (let u = 0; u < i.length; u += 1) i[u].d();
      (o[30](null), (g = !1), We(N));
    },
  };
}
const x =
    typeof window < "u" && window.ResizeObserver
      ? new window.ResizeObserver((o) => {
          var t;
          for (const l of o) {
            const e = (t = l == null ? void 0 : l.borderBoxSize[0].blockSize) != null ? t : l.contentRect.height,
              n = window.getComputedStyle(l.target),
              s = parseInt(n.getPropertyValue("--virtualRowColumns")),
              a = parseInt(n.getPropertyValue("--virtualRowGridGap")),
              h = new CustomEvent("virtualScrollResize", { detail: { height: e, columns: s, gap: a } });
            l.target.dispatchEvent(h);
          }
        })
      : null,
  A = 100,
  pe = 500,
  $ = 2e3;
function st(o, t, l) {
  let e,
    n,
    s,
    a,
    h,
    i,
    v,
    y,
    f,
    c,
    g,
    { $$slots: N = {}, $$scope: b } = t,
    { items: w = [] } = t,
    { total: L = 0 } = t,
    { getPage: T } = t,
    { log: m } = t;
  const u = Ye();
  let { topSpacerHeight: d = 32 } = t,
    P,
    V = 0,
    W = 0,
    Z = 0,
    Q = 0,
    Y = 0,
    ne = [],
    B;
  const se = (r) => {
      r.forEach((_) => {
        _.forEach((k) => {
          w[k] || U(k);
        });
      });
    },
    j = (r, _, k) => (r === "top" ? Math.floor : Math.ceil)(_ / k),
    Fe = (r, _) => {
      try {
        return ce(r, _);
      } catch (k) {
        return [[]];
      }
    },
    Te = (r) =>
      r.map((_, k) => ({
        rowItems: _.map((C) => {
          var E;
          return (E = w[C]) != null ? E : U(C);
        }),
        id: `row-${v + k}`,
      })),
    U = async (r) => {
      const _ = Math.floor(r / A),
        k = r % A;
      if (!B[_]) {
        const C = _ * A;
        B[_] = (async () => {
          const { items: E } = await Ae(C);
          return (u("pageUpdate", E), E);
        })();
      }
      try {
        const E = (await B[_])[k];
        return (E && l(0, (w[r] = E), w), E);
      } catch (C) {
        return (delete B[_], null);
      }
    },
    Ae = async (r) => {
      try {
        const { items: _, next: k, total: C } = (await T({ offset: r, limit: A })) || {};
        return { items: _, next: k, total: C };
      } catch (_) {
        return (m.error("Loading Library Items Failed", _), {});
      }
    },
    Ge = (r) => {
      if (x)
        return (
          x.observe(r, { box: "border-box" }),
          {
            destroy: () => {
              x.unobserve(r);
            },
          }
        );
    },
    Oe = () => {
      l(17, (W = P == null ? void 0 : P.scrollTop));
    },
    Be = (r) => {
      const { height: _, gap: k, columns: C } = r.detail;
      (l(16, (V = _)), l(19, (Q = k)), l(18, (Z = C)));
    },
    Ue = (r) => {
      l(2, (Y = r.detail.height));
    };
  (Ce(() => {
    re.set(!0);
    const r = A;
    if (!(L <= r))
      if (L <= pe) {
        const _ = Math.min(L, pe);
        for (let k = r; k < _; k++) U(k);
      } else U(r);
  }),
    Se(() => {
      re.set(!1);
    }));
  function qe(r) {
    je[r ? "unshift" : "push"](() => {
      ((P = r), l(6, P));
    });
  }
  return (
    (o.$$set = (r) => {
      ("items" in r && l(0, (w = r.items)),
        "total" in r && l(13, (L = r.total)),
        "getPage" in r && l(14, (T = r.getPage)),
        "log" in r && l(15, (m = r.log)),
        "topSpacerHeight" in r && l(1, (d = r.topSpacerHeight)),
        "$$scope" in r && l(28, (b = r.$$scope)));
    }),
    (o.$$.update = () => {
      (o.$$.dirty[0] & 1 &&
        (B = ce(w, A).map((r) => {
          if (!r.some((_) => _ === null)) return new Promise((_) => _(r));
        })),
        o.$$.dirty[0] & 8193 && l(27, (e = [...Array(Math.max(w.length, L)).keys()])),
        o.$$.dirty[0] & 134479872 && l(22, (n = Fe(e, Z))),
        o.$$.dirty[0] & 524292 && l(4, (s = Y > 0 ? Y + Q : null)),
        o.$$.dirty[0] & 4194322 && l(5, (a = s * n.length + d)),
        o.$$.dirty[0] & 131072 && l(26, (h = Math.max(0, W - $))),
        o.$$.dirty[0] & 196640 && l(25, (i = Math.min(W + V + $, a))),
        o.$$.dirty[0] & 67108880 && l(3, (v = j("top", h, s))),
        o.$$.dirty[0] & 33554448 && l(21, (y = j("bottom", i, s))),
        o.$$.dirty[0] & 6291464 && l(7, (ne = Te(n.slice(v, y)))),
        o.$$.dirty[0] & 65536 && l(24, (f = V + 2 * $)),
        o.$$.dirty[0] & 83886096 && l(23, (c = j("top", Math.max(0, h - f), s))),
        o.$$.dirty[0] & 50331696 && l(20, (g = j("bottom", Math.min(i + f, a), s))),
        o.$$.dirty[0] & 15728648 && c > 0 && g > 0 && (se(n.slice(c, v)), se(n.slice(y, g))));
    }),
    [w, d, Y, v, s, a, P, ne, U, Ge, Oe, Be, Ue, L, T, m, V, W, Z, Q, g, y, n, c, f, i, h, e, b, N, qe]
  );
}
class it extends be {
  constructor(t) {
    (super(),
      ke(this, t, st, nt, ve, { items: 0, total: 13, getPage: 14, log: 15, topSpacerHeight: 1 }, null, [-1, -1]));
  }
}
function rt(o) {
  let t, l;
  return (
    (t = new Ke({ props: { item: o[5] } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      l(e) {
        Ve(t.$$.fragment, e);
      },
      m(e, n) {
        (ze(t, e, n), (l = !0));
      },
      p(e, n) {
        const s = {};
        (n & 32 && (s.item = e[5]), t.$set(s));
      },
      i(e) {
        l || (I(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        (H(t.$$.fragment, e), (l = !1));
      },
      d(e) {
        De(t, e);
      },
    }
  );
}
function at(o) {
  let t, l;
  return (
    (t = new it({
      props: {
        items: o[0],
        getPage: o[1],
        total: o[2],
        log: o[3],
        topSpacerHeight: 10,
        $$slots: { itemComponent: [rt, ({ item: e }) => ({ 5: e }), ({ item: e }) => (e ? 32 : 0)] },
        $$scope: { ctx: o },
      },
    })),
    t.$on("pageUpdate", o[4]),
    {
      c() {
        Me(t.$$.fragment);
      },
      l(e) {
        Ve(t.$$.fragment, e);
      },
      m(e, n) {
        (ze(t, e, n), (l = !0));
      },
      p(e, [n]) {
        const s = {};
        (n & 1 && (s.items = e[0]),
          n & 2 && (s.getPage = e[1]),
          n & 4 && (s.total = e[2]),
          n & 96 && (s.$$scope = { dirty: n, ctx: e }),
          t.$set(s));
      },
      i(e) {
        l || (I(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        (H(t.$$.fragment, e), (l = !1));
      },
      d(e) {
        De(t, e);
      },
    }
  );
}
function ct(o, t, l) {
  const e = Je("<LockupVirtualScroll>");
  let { items: n } = t,
    { getPage: s } = t,
    { total: a } = t;
  (Ce(() => {
    ae.set(!0);
  }),
    Se(() => {
      ae.set(!1);
    }));
  function h(i) {
    Ze.call(this, o, i);
  }
  return (
    (o.$$set = (i) => {
      ("items" in i && l(0, (n = i.items)),
        "getPage" in i && l(1, (s = i.getPage)),
        "total" in i && l(2, (a = i.total)));
    }),
    [n, s, a, e, h]
  );
}
class ft extends be {
  constructor(t) {
    (super(), ke(this, t, ct, at, ve, { items: 0, getPage: 1, total: 2 }));
  }
}
export { ft as default };
