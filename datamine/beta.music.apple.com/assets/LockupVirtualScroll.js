import {
  S as be,
  i as ke,
  n as ve,
  aW as Z,
  I as j,
  e as M,
  s as ee,
  a as E,
  b as q,
  g as R,
  d as te,
  h as L,
  j as C,
  k as z,
  l as O,
  p as ie,
  o as Q,
  aX as Ne,
  aY as we,
  u as le,
  aZ as ye,
  a_ as Re,
  w as oe,
  r as S,
  v as H,
  y as We,
  z as Xe,
  a$ as Ce,
  b0 as re,
  V as Se,
  X as Ye,
  H as g,
  aN as Ie,
  aO as He,
  aP as Pe,
  aQ as Le,
  J as A,
  b1 as Ve,
  c as Me,
  f as Ee,
  m as ze,
  x as De,
  b2 as Ze,
  b3 as ae,
  b4 as je,
  a6 as Je,
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
const Ke = (o) => ({ item: o[0] & 128 }),
  fe = (o) => ({ item: o[45] }),
  Qe = (o) => ({ item: o[0] & 1 }),
  _e = (o) => ({ item: o[45] });
function xe(o) {
  return { c: g, l: g, m: g, p: g, i: g, o: g, d: g };
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
      e && e.p && (!t || s[0] & 268435457) && He(e, l, n, n[28], t ? Le(l, n[28], s, Qe) : Pe(n[28]), _e);
    },
    i(n) {
      t || (S(e, n), (t = !0));
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
  return { c: g, l: g, m: g, p: g, i: g, o: g, d: g };
}
function tt(o) {
  let t,
    l =
      '<div data-testid="placeholder-artwork" class="placeholder-artwork svelte-42hu87"></div> <div class="placeholder-details svelte-42hu87"></div>';
  return {
    c() {
      ((t = M("div")), (t.innerHTML = l));
    },
    l(e) {
      ((t = E(e, "DIV", { ["data-svelte-h"]: !0 })), Ve(t) !== "svelte-1alm0pv" && (t.innerHTML = l));
    },
    m(e, n) {
      z(e, t, n);
    },
    p: g,
    i: g,
    o: g,
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
      (e && e.c(), (t = A()));
    },
    l(n) {
      (e && e.l(n), (t = A()));
    },
    m(n, s) {
      (e && e.m(n, s), z(n, t, s), (l = !0));
    },
    p(n, s) {
      n[45]
        ? e
          ? (e.p(n, s), s[0] & 128 && S(e, 1))
          : ((e = me(n)), e.c(), S(e, 1), e.m(t.parentNode, t))
        : e &&
          (le(),
          H(e, 1, 1, () => {
            e = null;
          }),
          oe());
    },
    i(n) {
      l || (S(e), (l = !0));
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
      e && e.p && (!t || s[0] & 268435584) && He(e, l, n, n[28], t ? Le(l, n[28], s, Ke) : Pe(n[28]), fe);
    },
    i(n) {
      t || (S(e, n), (t = !0));
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
      ((t = M("div")), (t.innerHTML = l));
    },
    l(e) {
      ((t = E(e, "DIV", { ["data-svelte-h"]: !0 })), Ve(t) !== "svelte-1alm0pv" && (t.innerHTML = l));
    },
    m(e, n) {
      z(e, t, n);
    },
    p: g,
    i: g,
    o: g,
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
    Z((n = t[42]), a),
    {
      key: o,
      first: null,
      c() {
        ((l = A()), (e = A()), a.block.c(), this.h());
      },
      l(f) {
        ((l = A()), (e = A()), a.block.l(f), this.h());
      },
      h() {
        this.first = l;
      },
      m(f, i) {
        (z(f, l, i),
          z(f, e, i),
          a.block.m(f, (a.anchor = i)),
          (a.mount = () => e.parentNode),
          (a.anchor = e),
          (s = !0));
      },
      p(f, i) {
        ((t = f), (a.ctx = t), (i[0] & 128 && n !== (n = t[42]) && Z(n, a)) || we(a, t, i));
      },
      i(f) {
        s || (S(a.block), (s = !0));
      },
      o(f) {
        for (let i = 0; i < 3; i += 1) {
          const k = a.blocks[i];
          H(k);
        }
        s = !1;
      },
      d(f) {
        (f && (R(l), R(e)), a.block.d(f), (a.token = null), (a = null));
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
    f = `${t[2]}px`,
    i,
    k = j(t[38].rowItems);
  const y = (h) => h[42];
  for (let h = 0; h < k.length; h += 1) {
    let c = he(t, k, h),
      d = y(c);
    n.set(d, (e[h] = de(d, c)));
  }
  return {
    key: o,
    first: null,
    c() {
      l = M("div");
      for (let h = 0; h < e.length; h += 1) e[h].c();
      ((s = ee()), this.h());
    },
    l(h) {
      l = E(h, "DIV", { class: !0, "data-testid": !0 });
      var c = q(l);
      for (let d = 0; d < e.length; d += 1) e[d].l(c);
      ((s = te(c)), c.forEach(R), this.h());
    },
    h() {
      (L(l, "class", "virtual-row svelte-42hu87"),
        L(l, "data-testid", "lockup-virtual-scrolling-row"),
        C(l, "contain", "strict"),
        C(l, "top", a),
        C(l, "height", f),
        (this.first = l));
    },
    m(h, c) {
      z(h, l, c);
      for (let d = 0; d < e.length; d += 1) e[d] && e[d].m(l, null);
      (O(l, s), (i = !0));
    },
    p(h, c) {
      ((t = h),
        c[0] & 268435584 && ((k = j(t[38].rowItems)), le(), (e = ye(e, c, y, 1, t, k, n, l, Re, de, s, he)), oe()),
        c[0] & 154 && a !== (a = `${t[39]}px`) && C(l, "top", a),
        c[0] & 4 && f !== (f = `${t[2]}px`) && C(l, "height", f));
    },
    i(h) {
      if (!i) {
        for (let c = 0; c < k.length; c += 1) S(e[c]);
        i = !0;
      }
    },
    o(h) {
      for (let c = 0; c < e.length; c += 1) H(e[c]);
      i = !1;
    },
    d(h) {
      h && R(l);
      for (let c = 0; c < e.length; c += 1) e[c].d();
    },
  };
}
function nt(o) {
  let t,
    l,
    e,
    n,
    s,
    a,
    f,
    i = [],
    k = new Map(),
    y = `${o[5]}px`,
    h = `${o[1]}px`,
    c,
    d,
    B,
    p = {
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
  Z((a = o[0][0] ?? o[8](0)), p);
  let w = j(o[7]);
  const P = (m) => m[38].id;
  for (let m = 0; m < w.length; m += 1) {
    let u = ue(o, w, m),
      b = P(u);
    k.set(b, (i[m] = ge(b, u)));
  }
  return {
    c() {
      ((t = M("div")), (l = M("div")), (e = M("div")), (n = ee()), (s = M("div")), p.block.c(), (f = ee()));
      for (let m = 0; m < i.length; m += 1) i[m].c();
      this.h();
    },
    l(m) {
      t = E(m, "DIV", { "data-testid": !0, class: !0, id: !0 });
      var u = q(t);
      l = E(u, "DIV", { "data-testid": !0, class: !0 });
      var b = q(l);
      ((e = E(b, "DIV", { class: !0 })), q(e).forEach(R), (n = te(b)), (s = E(b, "DIV", { class: !0 })));
      var D = q(s);
      (p.block.l(D), D.forEach(R), (f = te(b)));
      for (let V = 0; V < i.length; V += 1) i[V].l(b);
      (b.forEach(R), u.forEach(R), this.h());
    },
    h() {
      (L(e, "class", "spacer svelte-42hu87"),
        L(s, "class", "virtual-row svelte-42hu87"),
        C(s, "visibility", "hidden"),
        C(s, "contain", "content"),
        L(l, "data-testid", "virtual-rows"),
        L(l, "class", "virtual-rows svelte-42hu87"),
        C(l, "min-height", y),
        L(t, "data-testid", "lockup-virtual-scrolling-component"),
        L(t, "class", "scrollable-container svelte-42hu87"),
        L(t, "id", "scrollable-page-override"),
        C(t, "--topSpacerHeight", h));
    },
    m(m, u) {
      (z(m, t, u),
        O(t, l),
        O(l, e),
        O(l, n),
        O(l, s),
        p.block.m(s, (p.anchor = null)),
        (p.mount = () => s),
        (p.anchor = null),
        O(l, f));
      for (let b = 0; b < i.length; b += 1) i[b] && i[b].m(l, null);
      (o[30](t),
        (c = !0),
        d ||
          ((B = [
            ie(o[9].call(null, s)),
            Q(s, "virtualScrollResize", o[12]),
            Q(t, "scroll", Ne(o[10], 10)),
            ie(o[9].call(null, t)),
            Q(t, "virtualScrollResize", o[11]),
          ]),
          (d = !0)));
    },
    p(m, u) {
      ((o = m),
        (p.ctx = o),
        (u[0] & 1 && a !== (a = o[0][0] ?? o[8](0)) && Z(a, p)) || we(p, o, u),
        u[0] & 268435614 && ((w = j(o[7])), le(), (i = ye(i, u, P, 1, o, w, k, l, Re, ge, null, ue)), oe()),
        u[0] & 32 && y !== (y = `${o[5]}px`) && C(l, "min-height", y),
        u[0] & 2 && h !== (h = `${o[1]}px`) && C(t, "--topSpacerHeight", h));
    },
    i(m) {
      if (!c) {
        S(p.block);
        for (let u = 0; u < w.length; u += 1) S(i[u]);
        c = !0;
      }
    },
    o(m) {
      for (let u = 0; u < 3; u += 1) {
        const b = p.blocks[u];
        H(b);
      }
      for (let u = 0; u < i.length; u += 1) H(i[u]);
      c = !1;
    },
    d(m) {
      (m && R(t), p.block.d(), (p.token = null), (p = null));
      for (let u = 0; u < i.length; u += 1) i[u].d();
      (o[30](null), (d = !1), We(B));
    },
  };
}
const x =
    typeof window < "u" && window.ResizeObserver
      ? new window.ResizeObserver((o) => {
          for (const t of o) {
            const l = t?.borderBoxSize[0].blockSize ?? t.contentRect.height,
              e = window.getComputedStyle(t.target),
              n = parseInt(e.getPropertyValue("--virtualRowColumns")),
              s = parseInt(e.getPropertyValue("--virtualRowGridGap")),
              a = new CustomEvent("virtualScrollResize", { detail: { height: l, columns: n, gap: s } });
            t.target.dispatchEvent(a);
          }
        })
      : null,
  T = 100,
  pe = 500,
  $ = 2e3;
function st(o, t, l) {
  let e,
    n,
    s,
    a,
    f,
    i,
    k,
    y,
    h,
    c,
    d,
    { $$slots: B = {}, $$scope: p } = t,
    { items: w = [] } = t,
    { total: P = 0 } = t,
    { getPage: m } = t,
    { log: u } = t;
  const b = Xe();
  let { topSpacerHeight: D = 32 } = t,
    V,
    N = 0,
    W = 0,
    J = 0,
    K = 0,
    X = 0,
    ne = [],
    G;
  const se = (r) => {
      r.forEach((_) => {
        _.forEach((v) => {
          w[v] || U(v);
        });
      });
    },
    Y = (r, _, v) => (r === "top" ? Math.floor : Math.ceil)(_ / v),
    Fe = (r, _) => {
      try {
        return ce(r, _);
      } catch {
        return [[]];
      }
    },
    Te = (r) => r.map((_, v) => ({ rowItems: _.map((I) => w[I] ?? U(I)), id: `row-${k + v}` })),
    U = async (r) => {
      const _ = Math.floor(r / T),
        v = r % T;
      if (!G[_]) {
        const I = _ * T;
        G[_] = (async () => {
          const { items: F } = await Oe(I);
          return (b("pageUpdate", F), F);
        })();
      }
      try {
        const F = (await G[_])[v];
        return (F && l(0, (w[r] = F), w), F);
      } catch {
        return (delete G[_], null);
      }
    },
    Oe = async (r) => {
      try {
        const { items: _, next: v, total: I } = (await m({ offset: r, limit: T })) || {};
        return { items: _, next: v, total: I };
      } catch (_) {
        return (u.error("Loading Library Items Failed", _), {});
      }
    },
    Ae = (r) => {
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
    Ge = () => {
      l(17, (W = V?.scrollTop));
    },
    Ue = (r) => {
      const { height: _, gap: v, columns: I } = r.detail;
      (l(16, (N = _)), l(19, (K = v)), l(18, (J = I)));
    },
    qe = (r) => {
      l(2, (X = r.detail.height));
    };
  (Ce(() => {
    re.set(!0);
    const r = T;
    if (!(P <= r))
      if (P <= pe) {
        const _ = Math.min(P, pe);
        for (let v = r; v < _; v++) U(v);
      } else U(r);
  }),
    Se(() => {
      re.set(!1);
    }));
  function Be(r) {
    Ye[r ? "unshift" : "push"](() => {
      ((V = r), l(6, V));
    });
  }
  return (
    (o.$$set = (r) => {
      ("items" in r && l(0, (w = r.items)),
        "total" in r && l(13, (P = r.total)),
        "getPage" in r && l(14, (m = r.getPage)),
        "log" in r && l(15, (u = r.log)),
        "topSpacerHeight" in r && l(1, (D = r.topSpacerHeight)),
        "$$scope" in r && l(28, (p = r.$$scope)));
    }),
    (o.$$.update = () => {
      (o.$$.dirty[0] & 1 &&
        (G = ce(w, T).map((r) => {
          if (!r.some((_) => _ === null)) return new Promise((_) => _(r));
        })),
        o.$$.dirty[0] & 8193 && l(27, (e = [...Array(Math.max(w.length, P)).keys()])),
        o.$$.dirty[0] & 134479872 && l(22, (n = Fe(e, J))),
        o.$$.dirty[0] & 524292 && l(4, (s = X > 0 ? X + K : null)),
        o.$$.dirty[0] & 4194322 && l(5, (a = s * n.length + D)),
        o.$$.dirty[0] & 131072 && l(26, (f = Math.max(0, W - $))),
        o.$$.dirty[0] & 196640 && l(25, (i = Math.min(W + N + $, a))),
        o.$$.dirty[0] & 67108880 && l(3, (k = Y("top", f, s))),
        o.$$.dirty[0] & 33554448 && l(21, (y = Y("bottom", i, s))),
        o.$$.dirty[0] & 6291464 && l(7, (ne = Te(n.slice(k, y)))),
        o.$$.dirty[0] & 65536 && l(24, (h = N + 2 * $)),
        o.$$.dirty[0] & 83886096 && l(23, (c = Y("top", Math.max(0, f - h), s))),
        o.$$.dirty[0] & 50331696 && l(20, (d = Y("bottom", Math.min(i + h, a), s))),
        o.$$.dirty[0] & 15728648 && c > 0 && d > 0 && (se(n.slice(c, k)), se(n.slice(y, d))));
    }),
    [w, D, X, k, s, a, V, ne, U, Ae, Ge, Ue, qe, P, m, u, N, W, J, K, d, y, n, c, h, i, f, e, p, B, Be]
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
    (t = new je({ props: { item: o[5] } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      l(e) {
        Ee(t.$$.fragment, e);
      },
      m(e, n) {
        (ze(t, e, n), (l = !0));
      },
      p(e, n) {
        const s = {};
        (n & 32 && (s.item = e[5]), t.$set(s));
      },
      i(e) {
        l || (S(t.$$.fragment, e), (l = !0));
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
        Ee(t.$$.fragment, e);
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
        l || (S(t.$$.fragment, e), (l = !0));
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
  const e = Ze("<LockupVirtualScroll>");
  let { items: n } = t,
    { getPage: s } = t,
    { total: a } = t;
  (Ce(() => {
    ae.set(!0);
  }),
    Se(() => {
      ae.set(!1);
    }));
  function f(i) {
    Je.call(this, o, i);
  }
  return (
    (o.$$set = (i) => {
      ("items" in i && l(0, (n = i.items)),
        "getPage" in i && l(1, (s = i.getPage)),
        "total" in i && l(2, (a = i.total)));
    }),
    [n, s, a, e, f]
  );
}
class ft extends be {
  constructor(t) {
    (super(), ke(this, t, ct, at, ve, { items: 0, getPage: 1, total: 2 }));
  }
}
export { ft as default };
