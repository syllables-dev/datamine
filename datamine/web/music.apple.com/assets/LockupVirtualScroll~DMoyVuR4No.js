import {
  S as ke,
  i as be,
  n as ve,
  aS as Y,
  E as Z,
  d as R,
  r as Ke,
  t as I,
  b as S,
  aT as we,
  g as le,
  aU as ye,
  aV as Re,
  c as oe,
  s as C,
  h as z,
  j as G,
  k as ie,
  l as Q,
  aW as Ne,
  e as M,
  p as V,
  q,
  u as ee,
  w as E,
  x as te,
  z as We,
  aX as Ce,
  aY as re,
  V as Se,
  H as g,
  aJ as He,
  aK as Ie,
  aL as Le,
  aM as Me,
  X as Xe,
  G as O,
  aZ as Pe,
  a as Ve,
  m as Ee,
  v as ze,
  y as Te,
  a_ as Ye,
  a$ as ae,
  b0 as Ze,
  a6 as je,
} from "./main.js";
import { s as ce } from "./splitIntoChunks~Bcj4F1urXd.js";
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
const Je = (o) => ({ item: o[0] & 128 }),
  fe = (o) => ({ item: o[45] }),
  Qe = (o) => ({ item: o[0] & 1 }),
  _e = (o) => ({ item: o[45] });
function xe(o) {
  return { c: g, l: g, m: g, p: g, i: g, o: g, d: g };
}
function $e(o) {
  let t;
  const l = o[29].itemComponent,
    e = He(l, o, o[28], _e);
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
      e && e.p && (!t || s[0] & 268435457) && Ie(e, l, n, n[28], t ? Me(l, n[28], s, Qe) : Le(n[28]), _e);
    },
    i(n) {
      t || (S(e, n), (t = !0));
    },
    o(n) {
      (I(e, n), (t = !1));
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
      ((t = E("div")), (t.innerHTML = l));
    },
    l(e) {
      ((t = V(e, "DIV", { "data-svelte-h": !0 })), Pe(t) !== "svelte-1alm0pv" && (t.innerHTML = l));
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
      (e && e.c(), (t = O()));
    },
    l(n) {
      (e && e.l(n), (t = O()));
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
          I(e, 1, 1, () => {
            e = null;
          }),
          oe());
    },
    i(n) {
      l || (S(e), (l = !0));
    },
    o(n) {
      (I(e), (l = !1));
    },
    d(n) {
      (n && R(t), e && e.d(n));
    },
  };
}
function me(o) {
  let t;
  const l = o[29].itemComponent,
    e = He(l, o, o[28], fe);
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
      e && e.p && (!t || s[0] & 268435584) && Ie(e, l, n, n[28], t ? Me(l, n[28], s, Je) : Le(n[28]), fe);
    },
    i(n) {
      t || (S(e, n), (t = !0));
    },
    o(n) {
      (I(e, n), (t = !1));
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
      ((t = E("div")), (t.innerHTML = l));
    },
    l(e) {
      ((t = V(e, "DIV", { "data-svelte-h": !0 })), Pe(t) !== "svelte-1alm0pv" && (t.innerHTML = l));
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
    Y((n = t[42]), a),
    {
      key: o,
      first: null,
      c() {
        ((l = O()), (e = O()), a.block.c(), this.h());
      },
      l(f) {
        ((l = O()), (e = O()), a.block.l(f), this.h());
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
        ((t = f), (a.ctx = t), (i[0] & 128 && n !== (n = t[42]) && Y(n, a)) || we(a, t, i));
      },
      i(f) {
        s || (S(a.block), (s = !0));
      },
      o(f) {
        for (let i = 0; i < 3; i += 1) {
          const b = a.blocks[i];
          I(b);
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
    b = Z(t[38].rowItems);
  const y = (h) => h[42];
  for (let h = 0; h < b.length; h += 1) {
    let c = he(t, b, h),
      d = y(c);
    n.set(d, (e[h] = de(d, c)));
  }
  return {
    key: o,
    first: null,
    c() {
      l = E("div");
      for (let h = 0; h < e.length; h += 1) e[h].c();
      ((s = te()), this.h());
    },
    l(h) {
      l = V(h, "DIV", { class: !0, "data-testid": !0 });
      var c = q(l);
      for (let d = 0; d < e.length; d += 1) e[d].l(c);
      ((s = ee(c)), c.forEach(R), this.h());
    },
    h() {
      (M(l, "class", "virtual-row svelte-42hu87"),
        M(l, "data-testid", "lockup-virtual-scrolling-row"),
        C(l, "contain", "strict"),
        C(l, "top", a),
        C(l, "height", f),
        (this.first = l));
    },
    m(h, c) {
      z(h, l, c);
      for (let d = 0; d < e.length; d += 1) e[d] && e[d].m(l, null);
      (G(l, s), (i = !0));
    },
    p(h, c) {
      ((t = h),
        c[0] & 268435584 && ((b = Z(t[38].rowItems)), le(), (e = ye(e, c, y, 1, t, b, n, l, Re, de, s, he)), oe()),
        c[0] & 154 && a !== (a = `${t[39]}px`) && C(l, "top", a),
        c[0] & 4 && f !== (f = `${t[2]}px`) && C(l, "height", f));
    },
    i(h) {
      if (!i) {
        for (let c = 0; c < b.length; c += 1) S(e[c]);
        i = !0;
      }
    },
    o(h) {
      for (let c = 0; c < e.length; c += 1) I(e[c]);
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
    b = new Map(),
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
  Y((a = o[0][0] ?? o[8](0)), p);
  let w = Z(o[7]);
  const L = (m) => m[38].id;
  for (let m = 0; m < w.length; m += 1) {
    let u = ue(o, w, m),
      k = L(u);
    b.set(k, (i[m] = ge(k, u)));
  }
  return {
    c() {
      ((t = E("div")), (l = E("div")), (e = E("div")), (n = te()), (s = E("div")), p.block.c(), (f = te()));
      for (let m = 0; m < i.length; m += 1) i[m].c();
      this.h();
    },
    l(m) {
      t = V(m, "DIV", { "data-testid": !0, class: !0, id: !0 });
      var u = q(t);
      l = V(u, "DIV", { "data-testid": !0, class: !0 });
      var k = q(l);
      ((e = V(k, "DIV", { class: !0 })), q(e).forEach(R), (n = ee(k)), (s = V(k, "DIV", { class: !0 })));
      var T = q(s);
      (p.block.l(T), T.forEach(R), (f = ee(k)));
      for (let P = 0; P < i.length; P += 1) i[P].l(k);
      (k.forEach(R), u.forEach(R), this.h());
    },
    h() {
      (M(e, "class", "spacer svelte-42hu87"),
        M(s, "class", "virtual-row svelte-42hu87"),
        C(s, "visibility", "hidden"),
        C(s, "contain", "content"),
        M(l, "data-testid", "virtual-rows"),
        M(l, "class", "virtual-rows svelte-42hu87"),
        C(l, "min-height", y),
        M(t, "data-testid", "lockup-virtual-scrolling-component"),
        M(t, "class", "scrollable-container svelte-42hu87"),
        M(t, "id", "scrollable-page-override"),
        C(t, "--topSpacerHeight", h));
    },
    m(m, u) {
      (z(m, t, u),
        G(t, l),
        G(l, e),
        G(l, n),
        G(l, s),
        p.block.m(s, (p.anchor = null)),
        (p.mount = () => s),
        (p.anchor = null),
        G(l, f));
      for (let k = 0; k < i.length; k += 1) i[k] && i[k].m(l, null);
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
        (u[0] & 1 && a !== (a = o[0][0] ?? o[8](0)) && Y(a, p)) || we(p, o, u),
        u[0] & 268435614 && ((w = Z(o[7])), le(), (i = ye(i, u, L, 1, o, w, b, l, Re, ge, null, ue)), oe()),
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
        const k = p.blocks[u];
        I(k);
      }
      for (let u = 0; u < i.length; u += 1) I(i[u]);
      c = !1;
    },
    d(m) {
      (m && R(t), p.block.d(), (p.token = null), (p = null));
      for (let u = 0; u < i.length; u += 1) i[u].d();
      (o[30](null), (d = !1), Ke(B));
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
  F = 100,
  pe = 500,
  $ = 2e3;
function st(o, t, l) {
  let e,
    n,
    s,
    a,
    f,
    i,
    b,
    y,
    h,
    c,
    d,
    { $$slots: B = {}, $$scope: p } = t,
    { items: w = [] } = t,
    { total: L = 0 } = t,
    { getPage: m } = t,
    { log: u } = t;
  const k = We();
  let { topSpacerHeight: T = 32 } = t,
    P,
    K = 0,
    N = 0,
    j = 0,
    J = 0,
    W = 0,
    ne = [],
    A;
  const se = (r) => {
      r.forEach((_) => {
        _.forEach((v) => {
          w[v] || U(v);
        });
      });
    },
    X = (r, _, v) => (r === "top" ? Math.floor : Math.ceil)(_ / v),
    De = (r, _) => {
      try {
        return ce(r, _);
      } catch {
        return [[]];
      }
    },
    Fe = (r) => r.map((_, v) => ({ rowItems: _.map((H) => w[H] ?? U(H)), id: `row-${b + v}` })),
    U = async (r) => {
      const _ = Math.floor(r / F),
        v = r % F;
      if (!A[_]) {
        const H = _ * F;
        A[_] = (async () => {
          const { items: D } = await Ge(H);
          return (k("pageUpdate", D), D);
        })();
      }
      try {
        const D = (await A[_])[v];
        return (D && l(0, (w[r] = D), w), D);
      } catch {
        return (delete A[_], null);
      }
    },
    Ge = async (r) => {
      try {
        const { items: _, next: v, total: H } = (await m({ offset: r, limit: F })) || {};
        return { items: _, next: v, total: H };
      } catch (_) {
        return (u.error("Loading Library Items Failed", _), {});
      }
    },
    Oe = (r) => {
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
    Ae = () => {
      l(17, (N = P?.scrollTop));
    },
    Ue = (r) => {
      const { height: _, gap: v, columns: H } = r.detail;
      (l(16, (K = _)), l(19, (J = v)), l(18, (j = H)));
    },
    qe = (r) => {
      l(2, (W = r.detail.height));
    };
  (Ce(() => {
    re.set(!0);
    const r = F;
    if (!(L <= r))
      if (L <= pe) {
        const _ = Math.min(L, pe);
        for (let v = r; v < _; v++) U(v);
      } else U(r);
  }),
    Se(() => {
      re.set(!1);
    }));
  function Be(r) {
    Xe[r ? "unshift" : "push"](() => {
      ((P = r), l(6, P));
    });
  }
  return (
    (o.$$set = (r) => {
      ("items" in r && l(0, (w = r.items)),
        "total" in r && l(13, (L = r.total)),
        "getPage" in r && l(14, (m = r.getPage)),
        "log" in r && l(15, (u = r.log)),
        "topSpacerHeight" in r && l(1, (T = r.topSpacerHeight)),
        "$$scope" in r && l(28, (p = r.$$scope)));
    }),
    (o.$$.update = () => {
      (o.$$.dirty[0] & 1 &&
        (A = ce(w, F).map((r) => {
          if (!r.some((_) => _ === null)) return new Promise((_) => _(r));
        })),
        o.$$.dirty[0] & 8193 && l(27, (e = [...Array(Math.max(w.length, L)).keys()])),
        o.$$.dirty[0] & 134479872 && l(22, (n = De(e, j))),
        o.$$.dirty[0] & 524292 && l(4, (s = W > 0 ? W + J : null)),
        o.$$.dirty[0] & 4194322 && l(5, (a = s * n.length + T)),
        o.$$.dirty[0] & 131072 && l(26, (f = Math.max(0, N - $))),
        o.$$.dirty[0] & 196640 && l(25, (i = Math.min(N + K + $, a))),
        o.$$.dirty[0] & 67108880 && l(3, (b = X("top", f, s))),
        o.$$.dirty[0] & 33554448 && l(21, (y = X("bottom", i, s))),
        o.$$.dirty[0] & 6291464 && l(7, (ne = Fe(n.slice(b, y)))),
        o.$$.dirty[0] & 65536 && l(24, (h = K + 2 * $)),
        o.$$.dirty[0] & 83886096 && l(23, (c = X("top", Math.max(0, f - h), s))),
        o.$$.dirty[0] & 50331696 && l(20, (d = X("bottom", Math.min(i + h, a), s))),
        o.$$.dirty[0] & 15728648 && c > 0 && d > 0 && (se(n.slice(c, b)), se(n.slice(y, d))));
    }),
    [w, T, W, b, s, a, P, ne, U, Oe, Ae, Ue, qe, L, m, u, K, N, j, J, d, y, n, c, h, i, f, e, p, B, Be]
  );
}
class it extends ke {
  constructor(t) {
    (super(),
      be(this, t, st, nt, ve, { items: 0, total: 13, getPage: 14, log: 15, topSpacerHeight: 1 }, null, [-1, -1]));
  }
}
function rt(o) {
  let t, l;
  return (
    (t = new Ze({ props: { item: o[5] } })),
    {
      c() {
        Te(t.$$.fragment);
      },
      l(e) {
        ze(t.$$.fragment, e);
      },
      m(e, n) {
        (Ee(t, e, n), (l = !0));
      },
      p(e, n) {
        const s = {};
        (n & 32 && (s.item = e[5]), t.$set(s));
      },
      i(e) {
        l || (S(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        (I(t.$$.fragment, e), (l = !1));
      },
      d(e) {
        Ve(t, e);
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
        Te(t.$$.fragment);
      },
      l(e) {
        ze(t.$$.fragment, e);
      },
      m(e, n) {
        (Ee(t, e, n), (l = !0));
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
        (I(t.$$.fragment, e), (l = !1));
      },
      d(e) {
        Ve(t, e);
      },
    }
  );
}
function ct(o, t, l) {
  const e = Ye("<LockupVirtualScroll>");
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
    je.call(this, o, i);
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
class ft extends ke {
  constructor(t) {
    (super(), be(this, t, ct, at, ve, { items: 0, getPage: 1, total: 2 }));
  }
}
export { ft as default };
