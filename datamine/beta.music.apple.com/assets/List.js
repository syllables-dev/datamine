import {
  S as Fe,
  i as Ve,
  n as je,
  I as ze,
  e as I,
  s as J,
  a as S,
  b as v,
  g as d,
  d as Y,
  h as f,
  t as $,
  j as Be,
  k as P,
  l as b,
  o as Me,
  bC as Hi,
  p as et,
  u as ce,
  bE as si,
  bF as ji,
  w as ue,
  bQ as Ye,
  r as _,
  v as h,
  y as dt,
  z as Et,
  bG as mt,
  bB as yt,
  bD as li,
  Y as Ut,
  H as se,
  bI as ni,
  bJ as oi,
  bK as ai,
  bL as ci,
  bR as At,
  bS as qe,
  bT as Ke,
  bU as Ge,
  bV as Xe,
  bW as Ct,
  bX as xe,
  c as j,
  f as z,
  m as B,
  x as O,
  by as Bi,
  bx as lr,
  bY as Oi,
  bZ as ct,
  W as ut,
  b_ as at,
  E as pe,
  F as be,
  G as ve,
  b$ as Dt,
  a2 as It,
  c0 as zi,
  c1 as qi,
  P as Ce,
  c2 as Wi,
  c3 as Tt,
  V as Ze,
  bN as Pt,
  c4 as tt,
  c5 as _t,
  c6 as Ui,
  bH as St,
  c7 as wt,
  J as He,
  c8 as Ki,
  c9 as Kt,
  ca as Gi,
  cb as Zi,
  cc as Ji,
  cd as ui,
  D as fi,
  ce as Lt,
  cf as di,
  cg as Mt,
  ch as Gt,
  ci as Zt,
  cj as mi,
  ck as _i,
  cl as Jt,
  cm as hi,
  cn as Yi,
  co as Qi,
  cp as qt,
  bO as nr,
  cq as Xi,
  cr as gi,
  cs as pi,
  ct as xi,
  cu as es,
  cv as rt,
  cw as Je,
  a7 as bi,
  cx as ts,
  cy as rs,
  cz as ft,
  cA as is,
  cB as ss,
  cC as ls,
  cD as vi,
  cE as ns,
  cF as os,
  cG as as,
  aE as cs,
  aY as us,
  cH as fs,
  cI as ki,
  cJ as ds,
  cK as kt,
  cL as ms,
  cM as _s,
  cN as or,
  cO as hs,
  cP as gs,
  cQ as Wt,
  K as Ft,
  cR as ps,
  cS as bs,
  cT as vs,
  cU as ks,
  cV as wi,
  cW as ws,
  cX as ys,
  cY as Is,
  b4 as Ot,
  cZ as Ss,
  c_ as Es,
  c$ as As,
  d0 as Cs,
  d1 as Ds,
  bz as yi,
  d2 as Ts,
  d3 as ar,
  a6 as Ps,
  X as Ls,
  d4 as cr,
  d5 as Ms,
  d6 as Fs,
  d7 as Vs,
  d8 as $s,
  d9 as Rs,
  da as Ns,
  db as Qe,
  dc as Hs,
  dd as js,
  de as Bs,
  df as Os,
  dg as ur,
} from "./main.js";
import { s as zs } from "./splitIntoChunks.js";
function qs(s, e) {
  const t = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r],
        l = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(l(s, i[1])) : t.push(l(s));
    }
  return {
    update(r) {
      if (((r && r.length) || 0) !== t.length) throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const l = t[i];
          if (l && l.update) {
            const n = r[i];
            Array.isArray(n) && n.length > 1 ? l.update(n[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < t.length; r++) {
        const i = t[r];
        i && i.destroy && i.destroy();
      }
    },
  };
}
function fr(s, e, t) {
  const r = s.slice();
  ((r[53] = e[t]), (r[57] = t));
  const i = r[8] + r[57];
  r[54] = i;
  const l = r[54] * r[2];
  return ((r[55] = l), r);
}
const Ws = (s) => ({
    item: s[0] & 2048,
    itemIdx: s[0] & 2304,
    visibleItems: s[0] & 2048,
    isSelected: s[0] & 2049,
    handleClick: s[0] & 2048,
  }),
  dr = (s) => ({
    item: s[58],
    itemIdx: s[54],
    visibleItems: s[11],
    isSelected: s[0] === s[58]?.id,
    handleClick: s[15](s[57]),
  }),
  Us = (s) => ({ itemIdx: s[0] & 2304 }),
  mr = (s) => ({ itemIdx: s[54] });
function Ks(s) {
  return { c: se, l: se, m: se, p: se, i: se, o: se, d: se };
}
function Gs(s) {
  let e;
  const t = s[38].itemComponent,
    r = ni(t, s, s[37], dr);
  return {
    c() {
      r && r.c();
    },
    l(i) {
      r && r.l(i);
    },
    m(i, l) {
      (r && r.m(i, l), (e = !0));
    },
    p(i, l) {
      r && r.p && (!e || (l[0] & 2305) | (l[1] & 64)) && oi(r, t, i, i[37], e ? ci(t, i[37], l, Ws) : ai(i[37]), dr);
    },
    i(i) {
      e || (_(r, i), (e = !0));
    },
    o(i) {
      (h(r, i), (e = !1));
    },
    d(i) {
      r && r.d(i);
    },
  };
}
function Zs(s) {
  let e;
  const t = s[38].placeholder,
    r = ni(t, s, s[37], mr);
  return {
    c() {
      r && r.c();
    },
    l(i) {
      r && r.l(i);
    },
    m(i, l) {
      (r && r.m(i, l), (e = !0));
    },
    p(i, l) {
      r && r.p && (!e || (l[0] & 2304) | (l[1] & 64)) && oi(r, t, i, i[37], e ? ci(t, i[37], l, Us) : ai(i[37]), mr);
    },
    i(i) {
      e || (_(r, i), (e = !0));
    },
    o(i) {
      (h(r, i), (e = !1));
    },
    d(i) {
      r && r.d(i);
    },
  };
}
function _r(s, e) {
  let t,
    r,
    i,
    l,
    n = `${e[55]}px`,
    a = `${e[2]}px`,
    o,
    c = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Zs,
      then: Gs,
      catch: Ks,
      value: 58,
      blocks: [, , ,],
    };
  return (
    yt((r = e[53]), c),
    {
      key: s,
      first: null,
      c() {
        ((t = I("div")), c.block.c(), (i = J()), this.h());
      },
      l(u) {
        t = S(u, "DIV", { class: !0, "data-testid": !0, role: !0 });
        var m = v(t);
        (c.block.l(m), (i = Y(m)), m.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "virtual-row svelte-zsv6m4"),
          f(t, "data-testid", "virtual-row"),
          f(t, "role", (l = e[7] ? "rowgroup" : null)),
          Be(t, "contain", "strict"),
          Be(t, "top", n),
          Be(t, "min-height", a),
          (this.first = t));
      },
      m(u, m) {
        (P(u, t, m), c.block.m(t, (c.anchor = null)), (c.mount = () => t), (c.anchor = i), b(t, i), (o = !0));
      },
      p(u, m) {
        ((e = u),
          (c.ctx = e),
          (m[0] & 2048 && r !== (r = e[53]) && yt(r, c)) || li(c, e, m),
          (!o || (m[0] & 128 && l !== (l = e[7] ? "rowgroup" : null))) && f(t, "role", l),
          m[0] & 2308 && n !== (n = `${e[55]}px`) && Be(t, "top", n),
          m[0] & 4 && a !== (a = `${e[2]}px`) && Be(t, "min-height", a));
      },
      i(u) {
        o || (_(c.block), (o = !0));
      },
      o(u) {
        for (let m = 0; m < 3; m += 1) {
          const k = c.blocks[m];
          h(k);
        }
        o = !1;
      },
      d(u) {
        (u && d(t), c.block.d(), (c.token = null), (c = null));
      },
    }
  );
}
function Js(s) {
  let e,
    t,
    r,
    i = [],
    l = new Map(),
    n,
    a,
    o = `${s[9]}px`,
    c = `${s[2]}px`,
    u,
    m,
    k,
    E,
    g,
    T,
    w = ze(s[11]);
  const A = (y) => y[53];
  for (let y = 0; y < w.length; y += 1) {
    let p = fr(s, w, y),
      F = A(p);
    l.set(F, (i[y] = _r(F, p)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")), (r = I("div")));
      for (let y = 0; y < i.length; y += 1) i[y].c();
      ((u = J()), (m = I("div")), this.h());
    },
    l(y) {
      e = S(y, "DIV", { class: !0, "data-testid": !0, tabindex: !0 });
      var p = v(e);
      t = S(p, "DIV", { class: !0, id: !0 });
      var F = v(t);
      r = S(F, "DIV", { class: !0, "data-testid": !0, role: !0, "aria-rowcount": !0 });
      var te = v(r);
      for (let N = 0; N < i.length; N += 1) i[N].l(te);
      (te.forEach(d),
        (u = Y(F)),
        (m = S(F, "DIV", { class: !0 })),
        v(m).forEach(d),
        F.forEach(d),
        p.forEach(d),
        this.h());
    },
    h() {
      (f(r, "class", "virtual-rows svelte-zsv6m4"),
        f(r, "data-testid", "virtual-rows"),
        f(r, "role", (n = s[7] ? "grid" : null)),
        f(r, "aria-rowcount", (a = s[7] ? s[1] : null)),
        $(r, "row-zebra-striping", s[5]),
        Be(r, "min-height", o),
        Be(r, "--rowHeight", c),
        f(m, "class", "svelte-zsv6m4"),
        $(m, "bottom-spacer-hidden", s[3]),
        Be(m, "height", "10px"),
        f(t, "class", "scrollable-container svelte-zsv6m4"),
        f(t, "id", "scrollable-page-override"),
        Be(t, "contain", "layout"),
        f(e, "class", "container svelte-zsv6m4"),
        f(e, "data-testid", "container"),
        f(e, "tabindex", "0"),
        $(e, "scrollable-container-constrained-width", s[4]));
    },
    m(y, p) {
      (P(y, e, p), b(e, t), b(t, r));
      for (let F = 0; F < i.length; F += 1) i[F] && i[F].m(r, null);
      (b(t, u),
        b(t, m),
        s[39](t),
        (E = !0),
        g ||
          ((T = [
            Me(t, "scroll", Hi(s[14], 10)),
            et(s[12].call(null, t)),
            Me(t, "virtualScrollResize", s[13]),
            Me(e, "keydown", s[17]),
            Me(e, "keyup", s[16]),
            et((k = qs.call(null, e, s[6]))),
          ]),
          (g = !0)));
    },
    p(y, p) {
      ((p[0] & 35205) | (p[1] & 64) &&
        ((w = ze(y[11])), ce(), (i = si(i, p, A, 1, y, w, l, r, ji, _r, null, fr)), ue()),
        (!E || (p[0] & 128 && n !== (n = y[7] ? "grid" : null))) && f(r, "role", n),
        (!E || (p[0] & 130 && a !== (a = y[7] ? y[1] : null))) && f(r, "aria-rowcount", a),
        (!E || p[0] & 32) && $(r, "row-zebra-striping", y[5]),
        p[0] & 512 && o !== (o = `${y[9]}px`) && Be(r, "min-height", o),
        p[0] & 4 && c !== (c = `${y[2]}px`) && Be(r, "--rowHeight", c),
        (!E || p[0] & 8) && $(m, "bottom-spacer-hidden", y[3]),
        k && Ye(k.update) && p[0] & 64 && k.update.call(null, y[6]),
        (!E || p[0] & 16) && $(e, "scrollable-container-constrained-width", y[4]));
    },
    i(y) {
      if (!E) {
        for (let p = 0; p < w.length; p += 1) _(i[p]);
        E = !0;
      }
    },
    o(y) {
      for (let p = 0; p < i.length; p += 1) h(i[p]);
      E = !1;
    },
    d(y) {
      y && d(e);
      for (let p = 0; p < i.length; p += 1) i[p].d();
      (s[39](null), (g = !1), dt(T));
    },
  };
}
const zt =
    typeof window < "u" && window.ResizeObserver
      ? new window.ResizeObserver((s) => {
          for (const e of s) {
            const t = e?.borderBoxSize[0].blockSize ?? e.contentRect.height,
              r = new CustomEvent("virtualScrollResize", { detail: { height: t } });
            e.target.dispatchEvent(r);
          }
        })
      : null,
  hr = 500;
function Ys(s, e, t) {
  let r,
    i,
    l,
    n,
    a,
    o,
    c,
    u,
    m,
    k,
    E,
    { $$slots: g = {}, $$scope: T } = e;
  const w = Et();
  let { items: A } = e,
    { itemCount: y } = e,
    { itemHeight: p } = e,
    { amountToFetch: F } = e,
    { bottomSpacerHidden: te = !1 } = e,
    { bufferHeight: N } = e,
    { fetchIntentFn: Z } = e,
    { selectedItemId: q = null } = e,
    { log: K } = e,
    { jet: ie } = e,
    { overrideKeydown: ne = null } = e,
    { restrainContainerWidth: X = !1 } = e,
    { rowZebraStriping: fe = !1 } = e,
    { use: ke = [] } = e,
    { allowCountUpdates: x = !1 } = e,
    { useManualPagination: G = !0 } = e,
    { pageMetadata: _e = null } = e,
    { setAriaAttributes: Pe = !1 } = e,
    H = 0,
    le,
    W = 0,
    Q = 0,
    V;
  const De = (C, re, ae) => C.slice(re, ae).map((ye) => A[ye] ?? de(ye)),
    ge = (C, re, ae) => {
      re > 0 &&
        ae > 0 &&
        (C.slice(re, o).forEach((ye) => {
          A[ye] || de(ye);
        }),
        C.slice(c, ae).forEach((ye) => {
          A[ye] || de(ye);
        }));
    },
    Te = (C, re, ae) => (C === "top" ? Math.floor : Math.ceil)(re / ae),
    de = async (C) => {
      const re = Math.floor(C / F),
        ae = C % F;
      if (!V[re]) {
        const ye = re * F;
        V[re] = (async () => {
          await V?.[re - 1];
          const { items: Ne } = await Ie(ye);
          return Ne;
        })();
      }
      try {
        const Ne = (await V[re])[ae];
        return (Ne && t(18, (A[C] = Ne), A), Ne);
      } catch {
        return (delete V[re], null);
      }
    },
    Ie = async (C) => {
      if (G)
        try {
          const re = Z({ offset: C, limit: F }),
            { items: ae, next: ye, total: Ne } = await ie.dispatch(re);
          return (w("fetchComplete", { items: ae, offset: C }), { items: ae, next: ye, total: Ne });
        } catch (re) {
          return (K.error("Loading Paginated Items Failed", re), {});
        }
      else if (r) {
        const re = Z({ path: r, limit: F });
        try {
          const ae = await ie.dispatch(re);
          r = ae.next;
          const { items: ye } = ae;
          return (w("fetchComplete", { items: ye, offset: C }), { items: ye, next: r });
        } catch (ae) {
          return (K.error("Loading Paginated Items Failed", ae), {});
        }
      } else
        x && (K.warn("No more pages to fetch, updating scroll list total count."), w("updateItemsCount", A.length));
    },
    oe = (C) => {
      if (zt)
        return (
          zt.observe(C, { box: "border-box" }),
          {
            destroy: () => {
              zt.unobserve(C);
            },
          }
        );
    },
    me = (C) => {
      const { height: re } = C.detail;
      t(28, (W = re));
    },
    U = () => {
      t(29, (Q = le?.scrollTop));
    };
  function we(C, re) {
    const { item: ae } = C.detail,
      { id: ye } = ae;
    (t(0, (q = ye)), (H = re), w("select", { id: q, scrollTop: le.scrollTop }));
  }
  const D = (C) => (re) => we(re, C),
    L = { shift: !1, tab: !1 },
    Se = (C, re) => {
      C === "Shift" ? (L.shift = re) : C === "Tab" && (L.tab = re);
    },
    $e = () => L.shift && L.tab;
  function Ae(C) {
    (C.key === "Tab" || C.key === "Shift") && (C.preventDefault(), Se(C.key, !1));
  }
  function Le(C) {
    if (ne) {
      ne(C);
      return;
    }
    (C.key === "ArrowUp" || C.key === "ArrowDown") && C.preventDefault();
    const re = C.key === "Tab" && C.shiftKey && H === 0,
      ae = C.key === "Tab" && !C.shiftKey && H === A.length - 1,
      ye = re || ae;
    switch ((C.key === "Tab" && !ye && C.preventDefault(), Se(C.key, !0), C.key)) {
      case "ArrowUp":
        H = Math.max(H - 1, 0);
        break;
      case "ArrowDown":
        H = Math.min(H + 1, A.length - 1);
        break;
      case "Tab":
        $e() ? (H = Math.max(H - 1, 0)) : (H = Math.min(H + 1, A.length - 1));
        break;
    }
    A[H]?.id && (t(0, (q = A[H].id)), w("select", { id: q, scrollTop: le.scrollTop }));
  }
  mt(() => {
    const C = F;
    if (!(y <= C))
      if (G && y <= hr) {
        const re = Math.min(y, hr);
        for (let ae = C; ae < re; ae++) de(ae);
      } else de(C);
  });
  function Oe(C) {
    Ut[C ? "unshift" : "push"](() => {
      ((le = C), t(10, le));
    });
  }
  return (
    (s.$$set = (C) => {
      ("items" in C && t(18, (A = C.items)),
        "itemCount" in C && t(1, (y = C.itemCount)),
        "itemHeight" in C && t(2, (p = C.itemHeight)),
        "amountToFetch" in C && t(19, (F = C.amountToFetch)),
        "bottomSpacerHidden" in C && t(3, (te = C.bottomSpacerHidden)),
        "bufferHeight" in C && t(20, (N = C.bufferHeight)),
        "fetchIntentFn" in C && t(21, (Z = C.fetchIntentFn)),
        "selectedItemId" in C && t(0, (q = C.selectedItemId)),
        "log" in C && t(22, (K = C.log)),
        "jet" in C && t(23, (ie = C.jet)),
        "overrideKeydown" in C && t(24, (ne = C.overrideKeydown)),
        "restrainContainerWidth" in C && t(4, (X = C.restrainContainerWidth)),
        "rowZebraStriping" in C && t(5, (fe = C.rowZebraStriping)),
        "use" in C && t(6, (ke = C.use)),
        "allowCountUpdates" in C && t(25, (x = C.allowCountUpdates)),
        "useManualPagination" in C && t(26, (G = C.useManualPagination)),
        "pageMetadata" in C && t(27, (_e = C.pageMetadata)),
        "setAriaAttributes" in C && t(7, (Pe = C.setAriaAttributes)),
        "$$scope" in C && t(37, (T = C.$$scope)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 134217728 && (r = _e?.next),
        s.$$.dirty[0] & 786434 &&
          (V = zs(A, F).map((C, re) => {
            const ye = (re + 1) * F ? F : y % F;
            if (!(C.length < ye)) return new Promise((Ne) => Ne(C));
          })),
        s.$$.dirty[0] & 2 && t(33, (i = [...Array(y).keys()])),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 4) && t(9, (l = p * i.length)),
        s.$$.dirty[0] & 537919488 && t(36, (n = Math.max(0, Q - N))),
        s.$$.dirty[0] & 806355456 && t(35, (a = Math.min(Q + W + N, l))),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 32) && t(8, (o = Te("top", n, p))),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 16) && t(30, (c = Te("bottom", a, p))),
        (s.$$.dirty[0] & 1073742080) | (s.$$.dirty[1] & 4) && t(11, (u = De(i, o, c))),
        s.$$.dirty[0] & 269484032 && t(34, (m = W + 2 * N)),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 40) && t(32, (k = Te("top", Math.max(0, n - m), p))),
        (s.$$.dirty[0] & 516) | (s.$$.dirty[1] & 24) && t(31, (E = Te("bottom", Math.min(a + m, l), p))),
        s.$$.dirty[1] & 7 && ge(i, k, E));
    }),
    [
      q,
      y,
      p,
      te,
      X,
      fe,
      ke,
      Pe,
      o,
      l,
      le,
      u,
      oe,
      me,
      U,
      D,
      Ae,
      Le,
      A,
      F,
      N,
      Z,
      K,
      ie,
      ne,
      x,
      G,
      _e,
      W,
      Q,
      c,
      E,
      k,
      i,
      m,
      a,
      n,
      T,
      g,
      Oe,
    ]
  );
}
class Ii extends Fe {
  constructor(e) {
    (super(),
      Ve(
        this,
        e,
        Ys,
        Js,
        je,
        {
          items: 18,
          itemCount: 1,
          itemHeight: 2,
          amountToFetch: 19,
          bottomSpacerHidden: 3,
          bufferHeight: 20,
          fetchIntentFn: 21,
          selectedItemId: 0,
          log: 22,
          jet: 23,
          overrideKeydown: 24,
          restrainContainerWidth: 4,
          rowZebraStriping: 5,
          use: 6,
          allowCountUpdates: 25,
          useManualPagination: 26,
          pageMetadata: 27,
          setAriaAttributes: 7,
        },
        null,
        [-1, -1],
      ));
  }
}
function gr(s, e) {
  e && s.focus({ preventScroll: !0 });
}
function Qs(s, e) {
  return (
    gr(s, e),
    {
      update(t) {
        gr(s, t);
      },
    }
  );
}
function Xs(s) {
  let e,
    t,
    r,
    i,
    l = [{ xmlns: "http://www.w3.org/2000/svg" }, { width: "28" }, { height: "28" }, { viewBox: "0 0 20 22" }, s[0]],
    n = {};
  for (let a = 0; a < l.length; a += 1) n = qe(n, l[a]);
  return {
    c() {
      ((e = Ke("svg")), (t = Ke("clipPath")), (r = Ke("path")), (i = Ke("path")), this.h());
    },
    l(a) {
      e = Ge(a, "svg", { xmlns: !0, width: !0, height: !0, viewBox: !0 });
      var o = v(e);
      t = Ge(o, "clipPath", { id: !0 });
      var c = v(t);
      ((r = Ge(c, "path", { d: !0 })),
        v(r).forEach(d),
        c.forEach(d),
        (i = Ge(o, "path", { d: !0, "clip-path": !0 })),
        v(i).forEach(d),
        o.forEach(d),
        this.h());
    },
    h() {
      (f(
        r,
        "d",
        "m3 16.2.7.8 8.6-8.4c-.2-.1-.3-.3-.5-.4-.2-.2-.3-.3-.4-.5zm8.9-13.6 5.6 5.6c-1.1 1-2.3 1.5-3.6 1.2l-2.7 2.5.1 2.5v6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-6.2l-4.7 4.5c-.3.3-.8.3-1 0L1.5 20c-.2.2-.6.2-.8-.1l-.3-.3c-.2-.3-.2-.6-.1-.8L1.4 17c-.2-.2-.3-.7 0-1l9.2-9.8c-.2-1.3.2-2.6 1.3-3.6m1.3-1.3c1.7-1.7 3.9-1.7 5.6 0s1.6 3.9 0 5.6z",
      ),
        f(t, "id", "a"),
        f(i, "d", "M-5-5h30v31.6H-5z"),
        f(i, "clip-path", "url(#a)"),
        Xe(e, n));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), b(t, r), b(e, i));
    },
    p(a, [o]) {
      Xe(
        e,
        (n = Ct(l, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { width: "28" },
          { height: "28" },
          { viewBox: "0 0 20 22" },
          o & 1 && a[0],
        ])),
      );
    },
    i: se,
    o: se,
    d(a) {
      a && d(e);
    },
  };
}
function xs(s, e, t) {
  return (
    (s.$$set = (r) => {
      t(0, (e = qe(qe({}, e), xe(r))));
    }),
    (e = xe(e)),
    [e]
  );
}
let el = class extends Fe {
  constructor(e) {
    (super(), Ve(this, e, xs, Xs, At, {}));
  }
};
function tl(s) {
  let e, t;
  return (
    (e = new el({ props: { "data-testid": "library-general-artist-icon", class: "general-artist-icon" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p: se,
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function rl(s) {
  let e, t, r, i, l, n;
  return {
    c() {
      ((e = I("picture")), (t = I("source")), (i = J()), (l = I("img")), this.h());
    },
    l(a) {
      e = S(a, "PICTURE", {});
      var o = v(e);
      ((t = S(o, "SOURCE", { srcset: !0, type: !0 })),
        (i = Y(o)),
        (l = S(o, "IMG", { "data-testid": !0, class: !0, role: !0, src: !0, alt: !0 })),
        o.forEach(d),
        this.h());
    },
    h() {
      (Bi(t, (r = s[2])) || f(t, "srcset", r),
        f(t, "type", "image/webp"),
        f(l, "data-testid", "library-artist-image-icon"),
        f(l, "class", "artist-image svelte-1ehefgf"),
        f(l, "role", "presentation"),
        lr(l.src, (n = s[1])) || f(l, "src", n),
        f(l, "alt", ""));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), b(e, i), b(e, l));
    },
    p(a, o) {
      (o & 4 && r !== (r = a[2]) && f(t, "srcset", r), o & 2 && !lr(l.src, (n = a[1])) && f(l, "src", n));
    },
    i: se,
    o: se,
    d(a) {
      a && d(e);
    },
  };
}
function il(s) {
  let e, t, r, i;
  const l = [rl, tl],
    n = [];
  function a(o, c) {
    return o[2] && o[1] ? 0 : 1;
  }
  return (
    (t = a(s)),
    (r = n[t] = l[t](s)),
    {
      c() {
        ((e = I("span")), r.c(), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { "data-testid": !0, class: !0 });
        var c = v(e);
        (r.l(c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "data-testid", "library-artist-icon"),
          f(e, "class", "artist-icon svelte-1ehefgf"),
          $(e, "is-selected", s[0]));
      },
      m(o, c) {
        (P(o, e, c), n[t].m(e, null), (i = !0));
      },
      p(o, [c]) {
        let u = t;
        ((t = a(o)),
          t === u
            ? n[t].p(o, c)
            : (ce(),
              h(n[u], 1, 1, () => {
                n[u] = null;
              }),
              ue(),
              (r = n[t]),
              r ? r.p(o, c) : ((r = n[t] = l[t](o)), r.c()),
              _(r, 1),
              r.m(e, null)),
          (!i || c & 1) && $(e, "is-selected", o[0]));
      },
      i(o) {
        i || (_(r), (i = !0));
      },
      o(o) {
        (h(r), (i = !1));
      },
      d(o) {
        (o && d(e), n[t].d());
      },
    }
  );
}
const pr = "72";
function sl(s, e, t) {
  let r, i, l;
  var n, a;
  let { artwork: o } = e,
    { isSelected: c = !1 } = e;
  return (
    (s.$$set = (u) => {
      ("artwork" in u && t(3, (o = u.artwork)), "isSelected" in u && t(0, (c = u.isSelected)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 56 &&
        t(
          6,
          (r =
            t(5, (a = t(4, (n = o?.dictionary)) === null || n === void 0 ? void 0 : n.url)) === null || a === void 0
              ? void 0
              : a.replace("{w}", pr).replace("{h}", pr)),
        ),
        s.$$.dirty & 64 && t(2, (i = r?.replace("{f}", "webp"))),
        s.$$.dirty & 64 && t(1, (l = r?.replace("{f}", "jpg"))));
    }),
    [c, l, i, o, n, a, r]
  );
}
class Si extends Fe {
  constructor(e) {
    (super(), Ve(this, e, sl, il, je, { artwork: 3, isSelected: 0 }));
  }
}
function br(s) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = pe(s[4])), this.h());
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var i = v(e);
      ((t = be(i, s[4])), i.forEach(d), this.h());
    },
    h() {
      f(e, "class", "artist-name svelte-yegxkw");
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i & 16 && ve(t, r[4]);
    },
    d(r) {
      r && d(e);
    },
  };
}
function ll(s) {
  let e, t, r, i, l, n, a, o, c;
  t = new Si({ props: { artwork: s[5], isSelected: s[0] } });
  let u = s[4] && br(s);
  return (
    (l = new Oi({ props: { inFavorites: s[2] } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), u && u.c(), (i = J()), j(l.$$.fragment), this.h());
      },
      l(m) {
        e = S(m, "DIV", { "data-testid": !0, "aria-selected": !0, role: !0, tabindex: !0, class: !0 });
        var k = v(e);
        (z(t.$$.fragment, k), (r = Y(k)), u && u.l(k), (i = Y(k)), z(l.$$.fragment, k), k.forEach(d), this.h());
      },
      h() {
        (f(e, "data-testid", "library-artists-component"),
          f(e, "aria-selected", s[0]),
          f(e, "role", "option"),
          f(e, "tabindex", "0"),
          f(e, "class", "svelte-yegxkw"),
          $(e, "is-selected", s[0]));
      },
      m(m, k) {
        (P(m, e, k),
          B(t, e, null),
          b(e, r),
          u && u.m(e, null),
          b(e, i),
          B(l, e, null),
          (a = !0),
          o || ((c = [et((n = Qs.call(null, e, s[0]))), Me(e, "click", s[10])]), (o = !0)));
      },
      p(m, [k]) {
        const E = {};
        (k & 32 && (E.artwork = m[5]),
          k & 1 && (E.isSelected = m[0]),
          t.$set(E),
          m[4] ? (u ? u.p(m, k) : ((u = br(m)), u.c(), u.m(e, i))) : u && (u.d(1), (u = null)));
        const g = {};
        (k & 4 && (g.inFavorites = m[2]),
          l.$set(g),
          (!a || k & 1) && f(e, "aria-selected", m[0]),
          n && Ye(n.update) && k & 1 && n.update.call(null, m[0]),
          (!a || k & 1) && $(e, "is-selected", m[0]));
      },
      i(m) {
        a || (_(t.$$.fragment, m), _(l.$$.fragment, m), (a = !0));
      },
      o(m) {
        (h(t.$$.fragment, m), h(l.$$.fragment, m), (a = !1));
      },
      d(m) {
        (m && d(e), O(t), u && u.d(), O(l), (o = !1), dt(c));
      },
    }
  );
}
function nl(s, e, t) {
  let r,
    i,
    l,
    n,
    a,
    o,
    c = se,
    u = () => (c(), (c = Dt(n, (A) => t(9, (o = A)))), n);
  s.$$.on_destroy.push(() => c());
  var m;
  let { isSelected: k = !1 } = e,
    { item: E } = e;
  const g = ct(),
    T = Et();
  ut(() => {
    g.unsubscribeFromUpdates(l);
  });
  const w = () => T("itemClicked", { item: E });
  return (
    (s.$$set = (A) => {
      ("isSelected" in A && t(0, (k = A.isSelected)), "item" in A && t(1, (E = A.item)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 2 && t(5, (r = E?.artwork || null)),
        s.$$.dirty & 2 && t(4, (i = E?.name)),
        s.$$.dirty & 2 && t(8, (l = at(E))),
        s.$$.dirty & 256 && u(t(3, (n = g.subscribeToUpdates(l)))),
        s.$$.dirty & 896 &&
          t(2, (a = o && (t(7, (m = g.get(l, It.Artist))) === null || m === void 0 ? void 0 : m.inFavorites))));
    }),
    [k, E, a, n, i, r, T, m, l, o, w]
  );
}
class ol extends Fe {
  constructor(e) {
    (super(), Ve(this, e, nl, ll, je, { isSelected: 0, item: 1 }));
  }
}
function al(s) {
  let e,
    t,
    r = [{ xmlns: "http://www.w3.org/2000/svg" }, { viewBox: "0 0 13 29" }, s[0]],
    i = {};
  for (let l = 0; l < r.length; l += 1) i = qe(i, r[l]);
  return {
    c() {
      ((e = Ke("svg")), (t = Ke("path")), this.h());
    },
    l(l) {
      e = Ge(l, "svg", { xmlns: !0, viewBox: !0 });
      var n = v(e);
      ((t = Ge(n, "path", { d: !0 })), v(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (f(t, "d", "m12.716 28.349-.779.651L0 14.5 11.937 0l.779.651L1.303 14.5z"), Xe(e, i));
    },
    m(l, n) {
      (P(l, e, n), b(e, t));
    },
    p(l, [n]) {
      Xe(e, (i = Ct(r, [{ xmlns: "http://www.w3.org/2000/svg" }, { viewBox: "0 0 13 29" }, n & 1 && l[0]])));
    },
    i: se,
    o: se,
    d(l) {
      l && d(e);
    },
  };
}
function cl(s, e, t) {
  return (
    (s.$$set = (r) => {
      t(0, (e = qe(qe({}, e), xe(r))));
    }),
    (e = xe(e)),
    [e]
  );
}
let ul = class extends Fe {
  constructor(e) {
    (super(), Ve(this, e, cl, al, At, {}));
  }
};
const vr = zi(0);
function fl(s) {
  let e, t;
  return (
    (e = new ol({ props: { item: s[28], isSelected: s[29] } })),
    e.$on("itemClicked", function () {
      Ye(s[30]) && s[30].apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        s = r;
        const l = {};
        (i[0] & 268435456 && (l.item = s[28]), i[0] & 536870912 && (l.isSelected = s[29]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function dl(s) {
  let e, t, r;
  return (
    (t = new Si({ props: { artwork: null } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, slot: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "artist-placeholder svelte-1rh5vsj"), f(e, "slot", "placeholder"));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p: se,
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function kr(s) {
  let e,
    t,
    r,
    i = {
      ctx: s,
      current: null,
      token: null,
      hasCatch: !1,
      pending: hl,
      then: _l,
      catch: ml,
      value: 0,
      blocks: [, , ,],
    };
  return (
    yt((t = s[10](s[1])), i),
    {
      c() {
        ((e = He()), i.block.c());
      },
      l(l) {
        ((e = He()), i.block.l(l));
      },
      m(l, n) {
        (P(l, e, n), i.block.m(l, (i.anchor = n)), (i.mount = () => e.parentNode), (i.anchor = e), (r = !0));
      },
      p(l, n) {
        ((s = l), (i.ctx = s), (n[0] & 2 && t !== (t = s[10](s[1])) && yt(t, i)) || li(i, s, n));
      },
      i(l) {
        r || (_(i.block), (r = !0));
      },
      o(l) {
        for (let n = 0; n < 3; n += 1) {
          const a = i.blocks[n];
          h(a);
        }
        r = !1;
      },
      d(l) {
        (l && d(e), i.block.d(l), (i.token = null), (i = null));
      },
    }
  );
}
function ml(s) {
  return { c: se, l: se, m: se, p: se, i: se, o: se, d: se };
}
function _l(s) {
  let e,
    t,
    r,
    i,
    l,
    n,
    a = s[5].t("ASE.Web.Music.SideBar.Artists") + "",
    o,
    c,
    u,
    m,
    k,
    E;
  return (
    (i = new ul({ props: { class: "chevron-icon" } })),
    (u = new Gi({ props: { section: s[0] } })),
    {
      c() {
        ((e = I("article")),
          (t = I("div")),
          (r = I("button")),
          j(i.$$.fragment),
          (l = J()),
          (n = I("span")),
          (o = pe(a)),
          (c = J()),
          j(u.$$.fragment),
          this.h());
      },
      l(g) {
        e = S(g, "ARTICLE", { "aria-label": !0, class: !0, "data-testid": !0 });
        var T = v(e);
        t = S(T, "DIV", { class: !0, "data-testid": !0 });
        var w = v(t);
        r = S(w, "BUTTON", { class: !0, "data-testid": !0 });
        var A = v(r);
        (z(i.$$.fragment, A), (l = Y(A)), (n = S(A, "SPAN", {})));
        var y = v(n);
        ((o = be(y, a)),
          y.forEach(d),
          A.forEach(d),
          w.forEach(d),
          (c = Y(T)),
          z(u.$$.fragment, T),
          T.forEach(d),
          this.h());
      },
      h() {
        (f(r, "class", "back-to-artists svelte-1rh5vsj"),
          f(r, "data-testid", "back-to-artists-button"),
          f(t, "class", "back-to-artists-container svelte-1rh5vsj"),
          f(t, "data-testid", "back-to-artists-container"),
          f(e, "aria-label", s[3]),
          f(e, "class", "artist-detail-container svelte-1rh5vsj"),
          f(e, "data-testid", "artist-detail-container"));
      },
      m(g, T) {
        (P(g, e, T),
          b(e, t),
          b(t, r),
          B(i, r, null),
          b(r, l),
          b(r, n),
          b(n, o),
          b(e, c),
          B(u, e, null),
          (m = !0),
          k || ((E = Me(r, "click", s[11])), (k = !0)));
      },
      p(g, T) {
        (!m || T[0] & 32) && a !== (a = g[5].t("ASE.Web.Music.SideBar.Artists") + "") && ve(o, a);
        const w = {};
        (T[0] & 2 && (w.section = g[0]), u.$set(w), (!m || T[0] & 8) && f(e, "aria-label", g[3]));
      },
      i(g) {
        m || (_(i.$$.fragment, g), _(u.$$.fragment, g), (m = !0));
      },
      o(g) {
        (h(i.$$.fragment, g), h(u.$$.fragment, g), (m = !1));
      },
      d(g) {
        (g && d(e), O(i), O(u), (k = !1), E());
      },
    }
  );
}
function hl(s) {
  let e, t;
  return (
    (e = new Zi({ props: { delay: 500 } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p: se,
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function gl(s) {
  let e, t, r, i, l;
  ((r = new Ii({
    props: {
      items: s[2],
      itemCount: s[4],
      amountToFetch: vl,
      itemHeight: pl,
      bufferHeight: bl,
      fetchIntentFn: qi,
      restrainContainerWidth: !0,
      bottomSpacerHidden: !0,
      rowZebraStriping: !1,
      log: s[8],
      selectedItemId: s[1],
      jet: s[6],
      $$slots: {
        placeholder: [dl],
        itemComponent: [
          fl,
          ({ item: a, isSelected: o, handleClick: c }) => ({ 28: a, 29: o, 30: c }),
          ({ item: a, isSelected: o, handleClick: c }) => [
            (a ? 268435456 : 0) | (o ? 536870912 : 0) | (c ? 1073741824 : 0),
          ],
        ],
      },
      $$scope: { ctx: s },
    },
  })),
    r.$on("select", s[12]),
    r.$on("fetchComplete", s[13]));
  let n = s[1] && kr(s);
  return {
    c() {
      ((e = I("div")), (t = I("div")), j(r.$$.fragment), (i = J()), n && n.c(), this.h());
    },
    l(a) {
      e = S(a, "DIV", { class: !0, "data-testid": !0 });
      var o = v(e);
      t = S(o, "DIV", { class: !0, "data-testid": !0 });
      var c = v(t);
      (z(r.$$.fragment, c), c.forEach(d), (i = Y(o)), n && n.l(o), o.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "artist-list-container svelte-1rh5vsj"),
        f(t, "data-testid", "artist-list-container"),
        f(e, "class", "artists-container svelte-1rh5vsj"),
        f(e, "data-testid", "library-artists-component"));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), B(r, t, null), b(e, i), n && n.m(e, null), (l = !0));
    },
    p(a, o) {
      const c = {};
      (o[0] & 4 && (c.items = a[2]),
        o[0] & 16 && (c.itemCount = a[4]),
        o[0] & 2 && (c.selectedItemId = a[1]),
        (o[0] & 1879048192) | (o[1] & 1) && (c.$$scope = { dirty: o, ctx: a }),
        r.$set(c),
        a[1]
          ? n
            ? (n.p(a, o), o[0] & 2 && _(n, 1))
            : ((n = kr(a)), n.c(), _(n, 1), n.m(e, null))
          : n &&
            (ce(),
            h(n, 1, 1, () => {
              n = null;
            }),
            ue()));
    },
    i(a) {
      l || (_(r.$$.fragment, a), _(n), (l = !0));
    },
    o(a) {
      (h(r.$$.fragment, a), h(n), (l = !1));
    },
    d(a) {
      (a && d(e), O(r), n && n.d());
    },
  };
}
const pl = 54,
  bl = 500,
  vl = 100;
function kl(s, e, t) {
  let r, i, l, n, a, o, c, u, m;
  (Ce(s, vr, (x) => t(23, (c = x))), Ce(s, Wi, (x) => t(24, (u = x))));
  var k, E, g, T;
  let { section: w } = e;
  const A = Tt(),
    y = Ze();
  Ce(s, y, (x) => t(5, (m = x)));
  const p = Pt("<Artists>"),
    F = ct(),
    te = tt(),
    { state: N } = _t();
  Ce(s, N, (x) => t(22, (o = x)));
  let Z = {},
    q,
    K;
  (Ui(() => {
    K && q && (K.scrollTop = q);
  }),
    mt(() => {
      ((K = document.getElementById("scrollable-page-override")),
        St.set(!0),
        ne(r, 0),
        !(u === "xsmall" || u === "small") &&
          !l &&
          ((q = 0),
          A.perform(
            wt({ kind: "selectedArtistIdChanged", metadata: { id: r[0].id, historyOperation: "replaceState" } }),
          )));
    }),
    ut(() => {
      St.set(!1);
    }));
  async function ie(x) {
    if (!x) return { items: [] };
    const G = Ki({ id: x });
    return A.dispatch(G);
  }
  function ne(x, G) {
    (x.forEach((_e, Pe) => {
      const { id: H } = _e;
      typeof Z[H] > "u" && t(18, (Z[H] = { index: Pe + G, artist: _e }), Z);
    }),
      t(18, (Z = Object.assign({}, Z))));
  }
  function X() {
    A.perform(wt({ kind: "selectedArtistIdChanged", metadata: { id: null, historyOperation: "pushState" } }));
  }
  function fe(x) {
    const { id: G, scrollTop: _e } = x.detail;
    (vr.set(_e),
      (q = c),
      A.perform(wt({ kind: "selectedArtistIdChanged", metadata: { id: G, historyOperation: "pushState" } })));
  }
  async function ke(x) {
    var G;
    const { items: _e, offset: Pe } = x.detail;
    (ne(_e, Pe),
      await Kt([{ items: _e }], (G = o.user) === null || G === void 0 ? void 0 : G.subscriberType, A, p, te, F));
  }
  return (
    (s.$$set = (x) => {
      "section" in x && t(0, (w = x.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 1 && t(2, (r = w?.items)),
        s.$$.dirty[0] & 16385 && t(4, (i = t(14, (k = w?.metadata)) === null || k === void 0 ? void 0 : k.total)),
        s.$$.dirty[0] & 32769 &&
          t(1, (l = (t(15, (E = w.metadata)) === null || E === void 0 ? void 0 : E.selectedId) || null)),
        s.$$.dirty[0] & 458754 &&
          t(
            19,
            (n =
              t(17, (T = t(16, (g = Z[l])) === null || g === void 0 ? void 0 : g.artist)) !== null && T !== void 0
                ? T
                : null),
          ),
        s.$$.dirty[0] & 524288 && t(3, (a = n?.name || null)));
    }),
    [w, l, r, a, i, m, A, y, p, N, ie, X, fe, ke, k, E, g, T, Z, n]
  );
}
class wl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, kl, gl, je, { section: 0 }, null, [-1, -1]));
  }
}
function wr(s, e, t) {
  const r = s.slice();
  return ((r[3] = e[t]), r);
}
function yr(s, e) {
  let t,
    r,
    i = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "",
    l,
    n;
  return {
    key: s,
    first: null,
    c() {
      ((t = I("div")), (r = I("span")), (l = pe(i)), (n = J()), this.h());
    },
    l(a) {
      t = S(a, "DIV", { role: !0, class: !0 });
      var o = v(t);
      r = S(o, "SPAN", { class: !0, "data-testid": !0 });
      var c = v(r);
      ((l = be(c, i)), c.forEach(d), (n = Y(o)), o.forEach(d), this.h());
    },
    h() {
      (f(r, "class", "library-track__" + e[3].id + "-text svelte-1w5wkc6"),
        f(r, "data-testid", `library-track__${e[3].id}-text`),
        f(t, "role", "columnheader"),
        f(t, "class", "library-track__" + e[3].id + " svelte-1w5wkc6"),
        (this.first = t));
    },
    m(a, o) {
      (P(a, t, o), b(t, r), b(r, l), b(t, n));
    },
    p(a, o) {
      ((e = a), o & 1 && i !== (i = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "") && ve(l, i));
    },
    d(a) {
      a && d(t);
    },
  };
}
function yl(s) {
  let e,
    t,
    r = [],
    i = new Map(),
    l = ze(s[2]);
  const n = (a) => a[3].id;
  for (let a = 0; a < l.length; a += 1) {
    let o = wr(s, l, a),
      c = n(o);
    i.set(c, (r[a] = yr(c, o)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")));
      for (let a = 0; a < r.length; a += 1) r[a].c();
      this.h();
    },
    l(a) {
      e = S(a, "DIV", { class: !0 });
      var o = v(e);
      t = S(o, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var c = v(t);
      for (let u = 0; u < r.length; u += 1) r[u].l(c);
      (c.forEach(d), o.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "library-track library-track--header svelte-1w5wkc6"),
        f(t, "role", "row"),
        f(t, "data-testid", "library-track--header"),
        f(e, "class", "library-track-header-container svelte-1w5wkc6"));
    },
    m(a, o) {
      (P(a, e, o), b(e, t));
      for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
    },
    p(a, [o]) {
      o & 5 && ((l = ze(a[2])), (r = si(r, o, n, 1, a, l, i, t, Ji, yr, null, wr)));
    },
    i: se,
    o: se,
    d(a) {
      a && d(e);
      for (let o = 0; o < r.length; o += 1) r[o].d();
    },
  };
}
function Il(s, e, t) {
  let r;
  const i = Ze();
  return (
    Ce(s, i, (n) => t(0, (r = n))),
    [
      r,
      i,
      [
        { id: "badge" },
        { id: "song", labelKey: "ASE.Web.Music.Library.Headers.name" },
        { id: "artist", labelKey: "ASE.Web.Music.Library.Headers.artist" },
        { id: "album", labelKey: "ASE.Web.Music.Library.Headers.album" },
        { id: "time", labelKey: "ASE.Web.Music.Library.Headers.time" },
      ],
    ]
  );
}
class Sl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Il, yl, je, {}));
  }
}
function El(s) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = pe(s[14])), this.h());
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var i = v(e);
      ((t = be(i, s[14])), i.forEach(d), this.h());
    },
    h() {
      f(e, "class", "library-track-name__text svelte-1cq9ch0");
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i[0] & 16384 && ve(t, r[14]);
    },
    i: se,
    o: se,
    d(r) {
      r && d(e);
    },
  };
}
function Al(s) {
  let e, t, r, i, l, n, a;
  return (
    (n = new Yi({ props: { explicitAriaText: s[17].t("ASE.Web.Music.Explicit") } })),
    {
      c() {
        ((e = I("span")), (t = I("span")), (r = pe(s[14])), (i = J()), (l = I("span")), j(n.$$.fragment), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { class: !0 });
        var c = v(e);
        t = S(c, "SPAN", { class: !0 });
        var u = v(t);
        ((r = be(u, s[14])), u.forEach(d), (i = Y(c)), (l = S(c, "SPAN", { class: !0 })));
        var m = v(l);
        (z(n.$$.fragment, m), m.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "library-track-name__text svelte-1cq9ch0"),
          f(l, "class", "explicit-badge svelte-1cq9ch0"),
          f(e, "class", "library-track-name__explicit-wrapper svelte-1cq9ch0"));
      },
      m(o, c) {
        (P(o, e, c), b(e, t), b(t, r), b(e, i), b(e, l), B(n, l, null), (a = !0));
      },
      p(o, c) {
        (!a || c[0] & 16384) && ve(r, o[14]);
        const u = {};
        (c[0] & 131072 && (u.explicitAriaText = o[17].t("ASE.Web.Music.Explicit")), n.$set(u));
      },
      i(o) {
        a || (_(n.$$.fragment, o), (a = !0));
      },
      o(o) {
        (h(n.$$.fragment, o), (a = !1));
      },
      d(o) {
        (o && d(e), O(n));
      },
    }
  );
}
function Ir(s) {
  let e, t, r;
  return (
    (t = new _i({ props: { item: s[4], isExplicit: s[2] } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "library-track-name__play-button-wrapper artwork-overlay svelte-1cq9ch0"),
          f(e, "data-testid", "track-play-button"));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[0] & 16 && (n.item = i[4]), l[0] & 4 && (n.isExplicit = i[2]), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Sr(s) {
  let e, t;
  return (
    (e = new Jt({
      props: {
        attachedTo: s[0].contentDescriptor,
        isPlayable: s[0].playAction !== null && !s[1],
        itemProperties: { title: s[0].name, subtitleLinks: [{ title: s[0].artistName }], artwork: s[0].artwork },
        buttonStyle: "non-platter",
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[0] & 1 && (l.attachedTo = r[0].contentDescriptor),
          i[0] & 3 && (l.isPlayable = r[0].playAction !== null && !r[1]),
          i[0] & 1 &&
            (l.itemProperties = {
              title: r[0].name,
              subtitleLinks: [{ title: r[0].artistName }],
              artwork: r[0].artwork,
            }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Cl(s) {
  let e, t, r, i, l, n, a, o, c, u, m, k, E, g, T, w, A, y, p, F, te, N, Z, q, K, ie, ne, X, fe, ke, x;
  ((r = new ui({
    props: { isFavorited: s[6], platter: !1, enabled: !0, title: s[17].t("ASE.Web.Music.VO.FavoriteHelpText") },
  })),
    r.$on("toggle", s[23]));
  const G = [Al, El],
    _e = [];
  function Pe(W, Q) {
    return W[2] ? 0 : 1;
  }
  ((a = Pe(s)),
    (o = _e[a] = G[a](s)),
    (m = new fi({ props: { artwork: s[15], forceFullWidth: !1, profile: "track-list" } })));
  let H = s[5] && Ir(s),
    le = s[0].contentDescriptor && Sr(s);
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        j(r.$$.fragment),
        (i = J()),
        (l = I("div")),
        (n = I("div")),
        o.c(),
        (c = J()),
        (u = I("div")),
        (k = I("div")),
        j(m.$$.fragment),
        (E = J()),
        H && H.c(),
        (g = J()),
        (T = I("div")),
        le && le.c(),
        (w = J()),
        (A = I("div")),
        (y = I("div")),
        (p = pe(s[13])),
        (F = J()),
        (te = I("div")),
        (N = I("div")),
        (Z = pe(s[12])),
        (q = J()),
        (K = I("div")),
        (ie = I("div")),
        (ne = pe(s[11])),
        this.h());
    },
    l(W) {
      e = S(W, "DIV", { "data-testid": !0, class: !0, "data-current-mouse-target": !0 });
      var Q = v(e);
      t = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 });
      var V = v(t);
      (z(r.$$.fragment, V), V.forEach(d), (i = Y(Q)), (l = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var De = v(l);
      n = S(De, "DIV", { class: !0 });
      var ge = v(n);
      (o.l(ge), (c = Y(ge)), (u = S(ge, "DIV", { class: !0 })));
      var Te = v(u);
      k = S(Te, "DIV", { style: !0 });
      var de = v(k);
      (z(m.$$.fragment, de), (E = Y(Te)), H && H.l(Te), Te.forEach(d), (g = Y(ge)), (T = S(ge, "DIV", { class: !0 })));
      var Ie = v(T);
      (le && le.l(Ie),
        Ie.forEach(d),
        ge.forEach(d),
        De.forEach(d),
        (w = Y(Q)),
        (A = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var oe = v(A);
      y = S(oe, "DIV", { class: !0 });
      var me = v(y);
      ((p = be(me, s[13])),
        me.forEach(d),
        oe.forEach(d),
        (F = Y(Q)),
        (te = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var U = v(te);
      N = S(U, "DIV", { class: !0 });
      var we = v(N);
      ((Z = be(we, s[12])),
        we.forEach(d),
        U.forEach(d),
        (q = Y(Q)),
        (K = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var D = v(K);
      ie = S(D, "DIV", { class: !0 });
      var L = v(ie);
      ((ne = be(L, s[11])), L.forEach(d), D.forEach(d), Q.forEach(d), this.h());
    },
    h() {
      (f(t, "role", "cell"),
        f(t, "class", "library-track__badge svelte-1cq9ch0"),
        f(t, "data-testid", "library-track__badge"),
        Be(k, "display", "contents"),
        Be(k, "--override-placeholder-bg-color", "var(--genericJoeColor)"),
        f(u, "class", "library-track-name__artwork svelte-1cq9ch0"),
        f(T, "class", "action-menu svelte-1cq9ch0"),
        f(n, "class", "library-track-name svelte-1cq9ch0"),
        f(l, "role", "cell"),
        f(l, "class", "library-track__song svelte-1cq9ch0"),
        f(l, "data-testid", "library-track__song"),
        f(y, "class", "svelte-1cq9ch0"),
        f(A, "role", "cell"),
        f(A, "class", "library-track__artist svelte-1cq9ch0"),
        f(A, "data-testid", "library-track__artist"),
        f(N, "class", "svelte-1cq9ch0"),
        f(te, "role", "cell"),
        f(te, "class", "library-track__album svelte-1cq9ch0"),
        f(te, "data-testid", "library-track__album"),
        f(ie, "class", "svelte-1cq9ch0"),
        f(K, "role", "cell"),
        f(K, "class", "library-track__time svelte-1cq9ch0"),
        f(K, "data-testid", "library-track__time"),
        f(e, "data-testid", "library-track"),
        f(e, "class", "library-track svelte-1cq9ch0"),
        f(e, "data-current-mouse-target", (X = s[3].currentMouseTarget === s[0])),
        $(e, "selected", s[16]),
        $(e, "library-track--disabled", s[1]),
        $(e, "is-playing", s[9]),
        $(e, "is-paused", s[8]),
        $(e, "is-loading", s[10]));
    },
    m(W, Q) {
      (P(W, e, Q),
        b(e, t),
        B(r, t, null),
        b(e, i),
        b(e, l),
        b(l, n),
        _e[a].m(n, null),
        b(n, c),
        b(n, u),
        b(u, k),
        B(m, k, null),
        b(u, E),
        H && H.m(u, null),
        b(n, g),
        b(n, T),
        le && le.m(T, null),
        b(e, w),
        b(e, A),
        b(A, y),
        b(y, p),
        b(e, F),
        b(e, te),
        b(te, N),
        b(N, Z),
        b(e, q),
        b(e, K),
        b(K, ie),
        b(ie, ne),
        (fe = !0),
        ke || ((x = [Me(e, "mousedown", s[37]), Me(e, "click", s[22]), Me(e, "dblclick", s[21])]), (ke = !0)));
    },
    p(W, Q) {
      const V = {};
      (Q[0] & 64 && (V.isFavorited = W[6]),
        Q[0] & 131072 && (V.title = W[17].t("ASE.Web.Music.VO.FavoriteHelpText")),
        r.$set(V));
      let De = a;
      ((a = Pe(W)),
        a === De
          ? _e[a].p(W, Q)
          : (ce(),
            h(_e[De], 1, 1, () => {
              _e[De] = null;
            }),
            ue(),
            (o = _e[a]),
            o ? o.p(W, Q) : ((o = _e[a] = G[a](W)), o.c()),
            _(o, 1),
            o.m(n, c)));
      const ge = {};
      (Q[0] & 32768 && (ge.artwork = W[15]),
        m.$set(ge),
        W[5]
          ? H
            ? (H.p(W, Q), Q[0] & 32 && _(H, 1))
            : ((H = Ir(W)), H.c(), _(H, 1), H.m(u, null))
          : H &&
            (ce(),
            h(H, 1, 1, () => {
              H = null;
            }),
            ue()),
        W[0].contentDescriptor
          ? le
            ? (le.p(W, Q), Q[0] & 1 && _(le, 1))
            : ((le = Sr(W)), le.c(), _(le, 1), le.m(T, null))
          : le &&
            (ce(),
            h(le, 1, 1, () => {
              le = null;
            }),
            ue()),
        (!fe || Q[0] & 8192) && ve(p, W[13]),
        (!fe || Q[0] & 4096) && ve(Z, W[12]),
        (!fe || Q[0] & 2048) && ve(ne, W[11]),
        (!fe || (Q[0] & 9 && X !== (X = W[3].currentMouseTarget === W[0]))) && f(e, "data-current-mouse-target", X),
        (!fe || Q[0] & 65536) && $(e, "selected", W[16]),
        (!fe || Q[0] & 2) && $(e, "library-track--disabled", W[1]),
        (!fe || Q[0] & 512) && $(e, "is-playing", W[9]),
        (!fe || Q[0] & 256) && $(e, "is-paused", W[8]),
        (!fe || Q[0] & 1024) && $(e, "is-loading", W[10]));
    },
    i(W) {
      fe || (_(r.$$.fragment, W), _(o), _(m.$$.fragment, W), _(H), _(le), (fe = !0));
    },
    o(W) {
      (h(r.$$.fragment, W), h(o), h(m.$$.fragment, W), h(H), h(le), (fe = !1));
    },
    d(W) {
      (W && d(e), O(r), _e[a].d(), O(m), H && H.d(), le && le.d(), (ke = !1), dt(x));
    },
  };
}
function Dl(s, e, t) {
  let r,
    i,
    l,
    n,
    a,
    o,
    c,
    u,
    m,
    k,
    E,
    g,
    T,
    w,
    A,
    y,
    p,
    F,
    te,
    N,
    Z,
    q,
    K,
    ie = se,
    ne = () => (ie(), (ie = Dt(te, (U) => t(35, (K = U)))), te),
    X,
    fe,
    ke;
  s.$$.on_destroy.push(() => ie());
  var x;
  const G = Ze();
  Ce(s, G, (U) => t(17, (ke = U)));
  const _e = tt(),
    Pe = Lt(),
    { queue: H, isRestricted: le } = di();
  Ce(s, H, (U) => t(36, (X = U)));
  const W = Mt();
  Ce(s, W, (U) => t(3, (fe = U)));
  const Q = ct();
  let { item: V } = e,
    { items: De = [] } = e,
    ge = !1,
    Te = [];
  mt(async () => {
    try {
      const U = await le?.();
      t(26, (ge = U));
    } catch {}
  });
  function de() {
    u && Pe(q.playAction);
  }
  function Ie(U) {
    W.handleClick(V, U);
  }
  const oe = (U) => {
    hi(E, T, g, !U.detail, Q, !1, !0, Pe);
  };
  ut(() => {
    Q.unsubscribeFromUpdates(E);
  });
  const me = () => W.setCurrentMouseTarget(V);
  return (
    (s.$$set = (U) => {
      ("item" in U && t(0, (V = U.item)), "items" in U && t(24, (De = U.items)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 9 && t(16, (r = V.id && fe.selectedItems.some((U) => U.id === V.id))),
        s.$$.dirty[0] & 1 && t(15, (i = V?.artwork || null)),
        s.$$.dirty[0] & 1 && t(14, (l = V?.name || "")),
        s.$$.dirty[0] & 1 && t(13, (n = V?.artistName || "")),
        s.$$.dirty[0] & 1 && t(12, (a = V?.albumName || "")),
        s.$$.dirty[0] & 1 && t(34, (o = Math.trunc(V?.durationInMillis / 1e3) || null)),
        s.$$.dirty[1] & 8 && t(11, (c = Gt(o, _e.language) || "")),
        s.$$.dirty[0] & 1 && t(5, (u = V?.playAction || null)),
        s.$$.dirty[0] & 1 && t(2, (m = V?.contentRating === "explicit")),
        s.$$.dirty[0] & 1 && t(33, (k = at(V))),
        s.$$.dirty[0] & 1 && t(28, (E = Zt(V))),
        s.$$.dirty[0] & 1 && t(29, (g = V?.contentDescriptor)),
        s.$$.dirty[0] & 536870912 && t(30, (T = g?.kind)),
        s.$$.dirty[1] & 36 && t(32, (w = k && X.nowPlayingItemId === k)),
        s.$$.dirty[1] & 34 && t(10, (A = w && X.derivedStates.isLoading)),
        s.$$.dirty[1] & 34 && t(9, (y = w && X.derivedStates.isPlaying)),
        s.$$.dirty[1] & 34 && t(8, (p = w && X.derivedStates.isPaused)),
        s.$$.dirty[0] & 67108869 && t(1, (F = V?.isDisabled || (m && ge))),
        s.$$.dirty[0] & 268435456 && ne(t(7, (te = Q.subscribeToUpdates(E)))),
        (s.$$.dirty[0] & 1375731712) | (s.$$.dirty[1] & 16) &&
          t(6, (N = K && (t(25, (x = Q.get(E, T))) === null || x === void 0 ? void 0 : x.inFavorites))),
        s.$$.dirty[0] & 16777216 && Promise.all(De).then((U) => t(27, (Te = U))),
        s.$$.dirty[0] & 134217728 && t(31, (Z = Te.map((U) => U.contentDescriptor))),
        (s.$$.dirty[0] & 3) | (s.$$.dirty[1] & 1) &&
          t(
            4,
            (q = (() =>
              Object.assign(Object.assign({}, V), { playAction: !F && V.playAction && mi(V.playAction, Z) }))()),
          ));
    }),
    [
      V,
      F,
      m,
      fe,
      q,
      u,
      N,
      te,
      p,
      y,
      A,
      c,
      a,
      n,
      l,
      i,
      r,
      ke,
      G,
      H,
      W,
      de,
      Ie,
      oe,
      De,
      x,
      ge,
      Te,
      E,
      g,
      T,
      Z,
      w,
      k,
      o,
      K,
      X,
      me,
    ]
  );
}
class Tl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Dl, Cl, je, { item: 0, items: 24 }, null, [-1, -1]));
  }
}
function Pl(s) {
  let e, t, r, i, l;
  return (
    (e = new Tl({ props: { item: s[16], items: s[17] } })),
    (i = new Xi({})),
    {
      c() {
        (j(e.$$.fragment), (t = J()), (r = I("div")), j(i.$$.fragment), this.h());
      },
      l(n) {
        (z(e.$$.fragment, n), (t = Y(n)), (r = S(n, "DIV", { class: !0, slot: !0 })));
        var a = v(r);
        (z(i.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        (f(r, "class", "song-placeholder svelte-7p26k2"), f(r, "slot", "placeholder"));
      },
      m(n, a) {
        (B(e, n, a), P(n, t, a), P(n, r, a), B(i, r, null), (l = !0));
      },
      p(n, a) {
        const o = {};
        (a & 65536 && (o.item = n[16]), a & 131072 && (o.items = n[17]), e.$set(o));
      },
      i(n) {
        l || (_(e.$$.fragment, n), _(i.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(e.$$.fragment, n), h(i.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (d(t), d(r)), O(e, n), O(i));
      },
    }
  );
}
function Ll(s) {
  let e, t, r, i, l;
  return (
    (t = new Sl({})),
    (i = new Ii({
      props: {
        items: s[0],
        itemCount: s[2],
        amountToFetch: Ml,
        itemHeight: Fl,
        bufferHeight: Vl,
        fetchIntentFn: Qi,
        bottomSpacerHidden: !1,
        restrainContainerWidth: !1,
        rowZebraStriping: !0,
        log: s[3],
        jet: s[4],
        overrideKeydown: s[5].handleKeydown,
        use: [
          [
            qt,
            {
              dragData: { items: s[1] },
              badgeCount: s[1].length,
              dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
            },
          ],
        ],
        $$slots: {
          itemComponent: [
            Pl,
            ({ item: n, visibleItems: a }) => ({ 16: n, 17: a }),
            ({ item: n, visibleItems: a }) => (n ? 65536 : 0) | (a ? 131072 : 0),
          ],
        },
        $$scope: { ctx: s },
      },
    })),
    i.$on("fetchComplete", s[7]),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), j(i.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "DIV", { class: !0, "data-testid": !0 });
        var a = v(e);
        (z(t.$$.fragment, a), (r = Y(a)), z(i.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-container svelte-7p26k2"), f(e, "data-testid", "library-songs-component"));
      },
      m(n, a) {
        (P(n, e, a), B(t, e, null), b(e, r), B(i, e, null), (l = !0));
      },
      p(n, [a]) {
        const o = {};
        (a & 1 && (o.items = n[0]),
          a & 4 && (o.itemCount = n[2]),
          a & 2 &&
            (o.use = [
              [
                qt,
                {
                  dragData: { items: n[1] },
                  badgeCount: n[1].length,
                  dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
                },
              ],
            ]),
          a & 458752 && (o.$$scope = { dirty: a, ctx: n }),
          i.$set(o));
      },
      i(n) {
        l || (_(t.$$.fragment, n), _(i.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(t.$$.fragment, n), h(i.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && d(e), O(t), O(i));
      },
    }
  );
}
const Ml = 100,
  Fl = 44,
  Vl = 1e3;
function $l(s, e, t) {
  let r, i, l, n, a, o;
  var c;
  const u = Symbol(),
    m = Pt("<Songs>"),
    k = Tt(),
    E = Mt();
  Ce(s, E, (p) => t(11, (o = p)));
  const g = ct(),
    T = tt(),
    { state: w } = _t();
  Ce(s, w, (p) => t(12, (a = p)));
  let { section: A } = e;
  async function y(p) {
    var F;
    if (p.detail) {
      const { items: te } = p.detail;
      (E.addItems(u, te),
        await Kt([{ items: te }], (F = a.user) === null || F === void 0 ? void 0 : F.subscriberType, k, m, T, g));
    }
  }
  return (
    mt(() => {
      (St.set(!0), nr.set(!0));
    }),
    ut(() => {
      (St.set(!1), E.resetItems(u), nr.set(!1));
    }),
    (s.$$set = (p) => {
      "section" in p && t(8, (A = p.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 256 && t(0, (r = A?.items)),
        s.$$.dirty & 768 && t(2, (i = t(9, (c = A?.metadata)) === null || c === void 0 ? void 0 : c.total)),
        s.$$.dirty & 1 && E.addItems(u, r),
        s.$$.dirty & 2048 &&
          t(10, (l = o.selectedItems.includes(o.currentMouseTarget) ? o.selectedItems : [o.currentMouseTarget])),
        s.$$.dirty & 1024 && t(1, (n = l.map((p) => p?.contentDescriptor))));
    }),
    [r, n, i, m, k, E, w, y, A, c, l, o]
  );
}
class Rl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, $l, Ll, je, { section: 8 }));
  }
}
const Nl = "‪",
  Er = "‬";
function Ar(s) {
  if (typeof document > "u" || !(document.dir === gi.RTL)) return s;
  const t = s.slice(-1);
  return /^[a-z0-9]+$/i.test(t) || t === Er ? s : s.replace(/.$/, `${Nl}${t}${Er}`);
}
function Cr(s) {
  let e, t;
  return (
    (e = new es({ props: { playAction: s[0], playButtonStyle: "non-platter", isStandAlone: !0, isFilled: !1 } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i & 1 && (l.playAction = r[0]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Dr(s) {
  let e,
    t,
    r,
    i = s[2] && s[2].length && Tr(s),
    l = s[1] && s[1].length && Pr(s);
  return {
    c() {
      ((e = I("div")), i && i.c(), (t = J()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0, "data-testid": !0 });
      var a = v(e);
      (i && i.l(a), (t = Y(a)), l && l.l(a), a.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__by-line songs-list-row__by-line--work svelte-1wqzc4z"),
        f(e, "data-testid", "composer-header-second-row"));
    },
    m(n, a) {
      (P(n, e, a), i && i.m(e, null), b(e, t), l && l.m(e, null), (r = !0));
    },
    p(n, a) {
      (n[2] && n[2].length
        ? i
          ? (i.p(n, a), a & 4 && _(i, 1))
          : ((i = Tr(n)), i.c(), _(i, 1), i.m(e, t))
        : i &&
          (ce(),
          h(i, 1, 1, () => {
            i = null;
          }),
          ue()),
        n[1] && n[1].length
          ? l
            ? (l.p(n, a), a & 2 && _(l, 1))
            : ((l = Pr(n)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (ce(),
            h(l, 1, 1, () => {
              l = null;
            }),
            ue()));
    },
    i(n) {
      r || (_(i), _(l), (r = !0));
    },
    o(n) {
      (h(i), h(l), (r = !1));
    },
    d(n) {
      (n && d(e), i && i.d(), l && l.d());
    },
  };
}
function Tr(s) {
  let e,
    t = s[9].t("ASE.Web.Music.SongsList.ComposerBy") + "",
    r,
    i,
    l,
    n;
  return (
    (l = new rt({
      props: {
        items: s[2],
        translateFn: s[9].t,
        $$slots: { default: [jl, ({ item: a }) => ({ 18: a }), ({ item: a }) => (a ? 262144 : 0)] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        ((e = I("span")), (r = pe(t)), (i = J()), j(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var o = v(e);
        ((r = be(o, t)), (i = Y(o)), z(l.$$.fragment, o), o.forEach(d), this.h());
      },
      h() {
        f(e, "class", "svelte-1wqzc4z");
      },
      m(a, o) {
        (P(a, e, o), b(e, r), b(e, i), B(l, e, null), (n = !0));
      },
      p(a, o) {
        (!n || o & 512) && t !== (t = a[9].t("ASE.Web.Music.SongsList.ComposerBy") + "") && ve(r, t);
        const c = {};
        (o & 4 && (c.items = a[2]),
          o & 512 && (c.translateFn = a[9].t),
          o & 786432 && (c.$$scope = { dirty: o, ctx: a }),
          l.$set(c));
      },
      i(a) {
        n || (_(l.$$.fragment, a), (n = !0));
      },
      o(a) {
        (h(l.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && d(e), O(l));
      },
    }
  );
}
function Hl(s) {
  let e = s[18].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 262144 && e !== (e = r[18].title + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function jl(s) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: s[18].segue, $$slots: { default: [Hl] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l & 262144 && (n.action = i[18].segue), l & 786432 && (n.$$scope = { dirty: l, ctx: i }), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Pr(s) {
  let e, t, r;
  return (
    (t = new rt({
      props: {
        items: s[1],
        translateFn: s[9].t,
        $$slots: { default: [Ol, ({ item: i }) => ({ 17: i }), ({ item: i }) => (i ? 131072 : 0)] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "SPAN", { class: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "svelte-1wqzc4z");
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l & 2 && (n.items = i[1]),
          l & 512 && (n.translateFn = i[9].t),
          l & 655360 && (n.$$scope = { dirty: l, ctx: i }),
          t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Bl(s) {
  let e = s[17].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 131072 && e !== (e = r[17].title + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function Ol(s) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: s[17].segue, $$slots: { default: [Bl] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l & 131072 && (n.action = i[17].segue), l & 655360 && (n.$$scope = { dirty: l, ctx: i }), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function zl(s) {
  let e,
    t,
    r,
    i,
    l,
    n = Ar(s[8]) + "",
    a,
    o,
    c,
    u,
    m,
    k,
    E,
    g,
    T,
    w,
    A,
    y,
    p,
    F,
    te,
    N = s[0] && Cr(s),
    Z = s[7] && Dr(s);
  return (
    (y = new Jt({
      props: {
        attachedTo: s[3],
        isPlayable: s[6],
        itemProperties: { subtitleLinks: [...s[2], ...s[1]], title: s[8] },
        hasMaterial: !1,
        buttonStyle: "non-platter",
      },
    })),
    {
      c() {
        ((e = I("div")),
          (t = I("div")),
          N && N.c(),
          (r = J()),
          (i = I("div")),
          (l = I("span")),
          (a = pe(n)),
          (o = J()),
          Z && Z.c(),
          (c = J()),
          (u = I("div")),
          (m = I("div")),
          (k = I("div")),
          (E = J()),
          (g = I("time")),
          (T = pe(s[5])),
          (w = J()),
          (A = I("div")),
          j(y.$$.fragment),
          this.h());
      },
      l(q) {
        e = S(q, "DIV", { class: !0, "data-testid": !0 });
        var K = v(e);
        t = S(K, "DIV", { class: !0 });
        var ie = v(t);
        (N && N.l(ie), ie.forEach(d), (r = Y(K)), (i = S(K, "DIV", { role: !0, class: !0 })));
        var ne = v(i);
        l = S(ne, "SPAN", { class: !0, "data-testid": !0 });
        var X = v(l);
        ((a = be(X, n)),
          X.forEach(d),
          (o = Y(ne)),
          Z && Z.l(ne),
          ne.forEach(d),
          (c = Y(K)),
          (u = S(K, "DIV", { role: !0, class: !0 })));
        var fe = v(u);
        m = S(fe, "DIV", { class: !0 });
        var ke = v(m);
        ((k = S(ke, "DIV", { class: !0 })),
          v(k).forEach(d),
          (E = Y(ke)),
          (g = S(ke, "TIME", { datetime: !0, class: !0, "data-testid": !0 })));
        var x = v(g);
        ((T = be(x, s[5])), x.forEach(d), (w = Y(ke)), (A = S(ke, "DIV", { class: !0 })));
        var G = v(A);
        (z(y.$$.fragment, G), G.forEach(d), ke.forEach(d), fe.forEach(d), K.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__col songs-list__col--shim svelte-1wqzc4z"),
          f(l, "class", "composer-header__first-row svelte-1wqzc4z"),
          f(l, "data-testid", "composer-header-first-row"),
          f(i, "role", "columnheader"),
          f(i, "class", "songs-list__col songs-list__col--song songs-list__col--work-header svelte-1wqzc4z"),
          f(k, "class", "songs-list-row__add-to-library"),
          f(g, "datetime", s[4]),
          f(g, "class", "songs-list-row__length svelte-1wqzc4z"),
          f(g, "data-testid", "composer-header-duration"),
          f(A, "class", "songs-list-row__context-menu svelte-1wqzc4z"),
          f(m, "class", "songs-list-row__controls svelte-1wqzc4z"),
          f(u, "role", "columnheader"),
          f(
            u,
            "class",
            "songs-list__col songs-list__col--time songs-list__header-col songs-list__header-col--time svelte-1wqzc4z",
          ),
          f(e, "class", "composer-header songs-list-row songs-list-row--works-list-header svelte-1wqzc4z"),
          f(e, "data-testid", "composer-header"));
      },
      m(q, K) {
        (P(q, e, K),
          b(e, t),
          N && N.m(t, null),
          b(e, r),
          b(e, i),
          b(i, l),
          b(l, a),
          b(i, o),
          Z && Z.m(i, null),
          b(e, c),
          b(e, u),
          b(u, m),
          b(m, k),
          b(m, E),
          b(m, g),
          b(g, T),
          b(m, w),
          b(m, A),
          B(y, A, null),
          (p = !0),
          F || ((te = Me(e, "dblclick", s[15])), (F = !0)));
      },
      p(q, [K]) {
        (q[0]
          ? N
            ? (N.p(q, K), K & 1 && _(N, 1))
            : ((N = Cr(q)), N.c(), _(N, 1), N.m(t, null))
          : N &&
            (ce(),
            h(N, 1, 1, () => {
              N = null;
            }),
            ue()),
          (!p || K & 256) && n !== (n = Ar(q[8]) + "") && ve(a, n),
          q[7]
            ? Z
              ? (Z.p(q, K), K & 128 && _(Z, 1))
              : ((Z = Dr(q)), Z.c(), _(Z, 1), Z.m(i, null))
            : Z &&
              (ce(),
              h(Z, 1, 1, () => {
                Z = null;
              }),
              ue()),
          (!p || K & 32) && ve(T, q[5]),
          (!p || K & 16) && f(g, "datetime", q[4]));
        const ie = {};
        (K & 8 && (ie.attachedTo = q[3]),
          K & 64 && (ie.isPlayable = q[6]),
          K & 262 && (ie.itemProperties = { subtitleLinks: [...q[2], ...q[1]], title: q[8] }),
          y.$set(ie));
      },
      i(q) {
        p || (_(N), _(Z), _(y.$$.fragment, q), (p = !0));
      },
      o(q) {
        (h(N), h(Z), h(y.$$.fragment, q), (p = !1));
      },
      d(q) {
        (q && d(e), N && N.d(), Z && Z.d(), O(y), (F = !1), te());
      },
    }
  );
}
function ql(s, e, t) {
  let r, i, l, n, a, o, c, u, m, k, E;
  var g;
  const T = Ze();
  Ce(s, T, (F) => t(9, (E = F)));
  const w = tt(),
    A = Lt();
  let { header: y } = e;
  const p = () => A(a);
  return (
    (s.$$set = (F) => {
      "header" in F && t(12, (y = F.header));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 4096 && t(8, (r = y.firstRowText || "")),
        s.$$.dirty & 12288 && t(2, (i = t(13, (g = y.composerLinks)) !== null && g !== void 0 ? g : [])),
        s.$$.dirty & 4096 && t(1, (l = y.artistLinks)),
        s.$$.dirty & 6 && t(7, (n = i?.length || l?.length)),
        s.$$.dirty & 4096 && t(0, (a = y.playAction)),
        s.$$.dirty & 1 && t(6, (o = !!a)),
        s.$$.dirty & 4096 && t(14, (c = Math.trunc(y.duration / 1e3))),
        s.$$.dirty & 16384 && t(5, (u = Gt(c, w.language))),
        s.$$.dirty & 16384 && t(4, (m = pi(c))),
        s.$$.dirty & 1 && t(3, (k = xi(a) && a.items)));
    }),
    [a, l, i, k, m, u, o, n, r, E, T, A, y, g, c, p]
  );
}
class Wl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, ql, zl, je, { header: 12 }));
  }
}
function Ul(s) {
  let e,
    t,
    r = [{ xmlns: "http://www.w3.org/2000/svg" }, { width: "6" }, { height: "6" }, { viewBox: "0 0 64 64" }, s[0]],
    i = {};
  for (let l = 0; l < r.length; l += 1) i = qe(i, r[l]);
  return {
    c() {
      ((e = Ke("svg")), (t = Ke("path")), this.h());
    },
    l(l) {
      e = Ge(l, "svg", { xmlns: !0, width: !0, height: !0, viewBox: !0 });
      var n = v(e);
      ((t = Ge(n, "path", { d: !0 })), v(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (f(
        t,
        "d",
        "M31.948 61.587c16.185 0 29.587-13.43 29.587-29.587 0-16.186-13.43-29.587-29.616-29.587C15.762 2.413 2.36 15.814 2.36 32c0 16.157 13.43 29.587 29.587 29.587Z",
      ),
        Xe(e, i));
    },
    m(l, n) {
      (P(l, e, n), b(e, t));
    },
    p(l, [n]) {
      Xe(
        e,
        (i = Ct(r, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { width: "6" },
          { height: "6" },
          { viewBox: "0 0 64 64" },
          n & 1 && l[0],
        ])),
      );
    },
    i: se,
    o: se,
    d(l) {
      l && d(e);
    },
  };
}
function Kl(s, e, t) {
  return (
    (s.$$set = (r) => {
      t(0, (e = qe(qe({}, e), xe(r))));
    }),
    (e = xe(e)),
    [e]
  );
}
let Gl = class extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Kl, Ul, At, {}));
  }
};
function Lr(s) {
  let e, t, r, i;
  return (
    (t = new Gl({})),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, role: !0, "aria-label": !0, "data-testid": !0 });
        var n = v(e);
        (z(t.$$.fragment, n), n.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "popular svelte-taox9z"),
          f(e, "role", "img"),
          f(e, "aria-label", (r = s[3].t("ASE.Web.Music.PopularTrack"))),
          f(e, "data-testid", "popular-glyph"));
      },
      m(l, n) {
        (P(l, e, n), B(t, e, null), (i = !0));
      },
      p(l, n) {
        (!i || (n & 8 && r !== (r = l[3].t("ASE.Web.Music.PopularTrack")))) && f(e, "aria-label", r);
      },
      i(l) {
        i || (_(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        (h(t.$$.fragment, l), (i = !1));
      },
      d(l) {
        (l && d(e), O(t));
      },
    }
  );
}
function Mr(s) {
  let e, t, r;
  return (
    (t = new ui({
      props: { isFavorited: s[1], platter: !1, enabled: !0, title: s[3].t("ASE.Web.Music.VO.FavoriteHelpText") },
    })),
    t.$on("toggle", s[5]),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "favorite svelte-taox9z"), $(e, "is-favorited", s[1]));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l & 2 && (n.isFavorited = i[1]),
          l & 8 && (n.title = i[3].t("ASE.Web.Music.VO.FavoriteHelpText")),
          t.$set(n),
          (!r || l & 2) && $(e, "is-favorited", i[1]));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Zl(s) {
  let e,
    t,
    r,
    i = s[0] && Lr(s),
    l = s[2] && Mr(s);
  return {
    c() {
      ((e = I("div")), i && i.c(), (t = J()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0 });
      var a = v(e);
      (i && i.l(a), (t = Y(a)), l && l.l(a), a.forEach(d), this.h());
    },
    h() {
      f(e, "class", "favorite-or-popular svelte-taox9z");
    },
    m(n, a) {
      (P(n, e, a), i && i.m(e, null), b(e, t), l && l.m(e, null), (r = !0));
    },
    p(n, [a]) {
      (n[0]
        ? i
          ? (i.p(n, a), a & 1 && _(i, 1))
          : ((i = Lr(n)), i.c(), _(i, 1), i.m(e, t))
        : i &&
          (ce(),
          h(i, 1, 1, () => {
            i = null;
          }),
          ue()),
        n[2]
          ? l
            ? (l.p(n, a), a & 4 && _(l, 1))
            : ((l = Mr(n)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (ce(),
            h(l, 1, 1, () => {
              l = null;
            }),
            ue()));
    },
    i(n) {
      r || (_(i), _(l), (r = !0));
    },
    o(n) {
      (h(i), h(l), (r = !1));
    },
    d(n) {
      (n && d(e), i && i.d(), l && l.d());
    },
  };
}
function Jl(s, e, t) {
  let r;
  const i = Ze();
  Ce(s, i, (c) => t(3, (r = c)));
  let { isPopular: l = !1 } = e,
    { inFavorites: n = !1 } = e,
    { showFavoriteButton: a = !0 } = e;
  function o(c) {
    bi.call(this, s, c);
  }
  return (
    (s.$$set = (c) => {
      ("isPopular" in c && t(0, (l = c.isPopular)),
        "inFavorites" in c && t(1, (n = c.inFavorites)),
        "showFavoriteButton" in c && t(2, (a = c.showFavoriteButton)));
    }),
    [l, n, a, r, i, o]
  );
}
class Yl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Jl, Zl, je, { isPopular: 0, inFavorites: 1, showFavoriteButton: 2 }));
  }
}
function Ql(s) {
  let e,
    t,
    r = [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { "fill-rule": "evenodd" },
      { "stroke-linejoin": "round" },
      { "stroke-miterlimit": "2" },
      { "clip-rule": "evenodd" },
      { "data-testid": "track-video-svg" },
      { viewBox: "0 0 19 16" },
      s[0],
    ],
    i = {};
  for (let l = 0; l < r.length; l += 1) i = qe(i, r[l]);
  return {
    c() {
      ((e = Ke("svg")), (t = Ke("path")), this.h());
    },
    l(l) {
      e = Ge(l, "svg", {
        xmlns: !0,
        "xml:space": !0,
        "fill-rule": !0,
        "stroke-linejoin": !0,
        "stroke-miterlimit": !0,
        "clip-rule": !0,
        "data-testid": !0,
        viewBox: !0,
      });
      var n = v(e);
      ((t = Ge(n, "path", { "fill-rule": !0, d: !0 })), v(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (f(t, "fill-rule", "nonzero"),
        f(
          t,
          "d",
          "M16.747 12.437c1.166 0 1.753-.565 1.753-1.771V2.771C18.5 1.565 17.913 1 16.747 1H2.253C1.087 1 .5 1.565.5 2.771v7.895c0 1.206.587 1.771 1.753 1.771zm-.02-1.109H2.273c-.47 0-.675-.193-.675-.675V2.791c0-.489.205-.682.675-.682h14.454c.47 0 .675.193.675.682v7.862c0 .482-.205.675-.675.675m-8.738-1.296c.976 0 1.637-.709 1.637-1.708V5.961c0-.255.055-.324.205-.359l1.603-.385c.327-.09.429-.159.429-.559v-1.35c0-.262-.095-.379-.457-.289l-1.991.503c-.341.082-.41.151-.41.558v3.107c0 .303-.027.358-.375.455l-.627.165c-.621.165-1.139.537-1.139 1.213 0 .585.436 1.012 1.125 1.012M13.828 15a.636.636 0 0 0 .627-.648.636.636 0 0 0-.627-.647H5.159a.64.64 0 0 0-.635.647c0 .359.287.648.635.648z",
        ),
        Xe(e, i));
    },
    m(l, n) {
      (P(l, e, n), b(e, t));
    },
    p(l, [n]) {
      Xe(
        e,
        (i = Ct(r, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { "xml:space": "preserve" },
          { "fill-rule": "evenodd" },
          { "stroke-linejoin": "round" },
          { "stroke-miterlimit": "2" },
          { "clip-rule": "evenodd" },
          { "data-testid": "track-video-svg" },
          { viewBox: "0 0 19 16" },
          n & 1 && l[0],
        ])),
      );
    },
    i: se,
    o: se,
    d(l) {
      l && d(e);
    },
  };
}
function Xl(s, e, t) {
  return (
    (s.$$set = (r) => {
      t(0, (e = qe(qe({}, e), xe(r))));
    }),
    (e = xe(e)),
    [e]
  );
}
class xl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Xl, Ql, At, {}));
  }
}
function Fr(s) {
  let e, t, r;
  return (
    (t = new xl({})),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__video-glyph svelte-ejraru");
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function en(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(s[45])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "data-testid": !0 });
      var i = v(e);
      ((t = be(i, s[45])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__column-data svelte-ejraru"), f(e, "data-testid", "track-number"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i[1] & 16384 && ve(t, r[45]);
    },
    i: se,
    o: se,
    d(r) {
      r && d(e);
    },
  };
}
function tn(s) {
  let e, t, r, i;
  const l = [sn, rn],
    n = [];
  function a(o, c) {
    return o[48] ? 0 : 1;
  }
  return (
    (e = a(s)),
    (t = n[e] = l[e](s)),
    {
      c() {
        (t.c(), (r = He()));
      },
      l(o) {
        (t.l(o), (r = He()));
      },
      m(o, c) {
        (n[e].m(o, c), P(o, r, c), (i = !0));
      },
      p(o, c) {
        let u = e;
        ((e = a(o)),
          e === u
            ? n[e].p(o, c)
            : (ce(),
              h(n[u], 1, 1, () => {
                n[u] = null;
              }),
              ue(),
              (t = n[e]),
              t ? t.p(o, c) : ((t = n[e] = l[e](o)), t.c()),
              _(t, 1),
              t.m(r.parentNode, r)));
      },
      i(o) {
        i || (_(t), (i = !0));
      },
      o(o) {
        (h(t), (i = !1));
      },
      d(o) {
        (o && d(r), n[e].d(o));
      },
    }
  );
}
function rn(s) {
  let e, t;
  return (
    (e = new Wt({
      props: {
        artwork: s[21],
        artworkProfile: s[43](),
        badgeArtwork: s[18]?.attributes.artwork,
        badgeName: s[18]?.attributes.name,
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[0] & 2097152 && (l.artwork = r[21]),
          i[1] & 4096 && (l.artworkProfile = r[43]()),
          i[0] & 262144 && (l.badgeArtwork = r[18]?.attributes.artwork),
          i[0] & 262144 && (l.badgeName = r[18]?.attributes.name),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function sn(s) {
  let e, t, r, i, l, n;
  return (
    (t = new Wt({
      props: {
        artwork: s[21],
        artworkProfile: s[43](),
        badgeArtwork: s[18]?.attributes.artwork,
        badgeName: s[18]?.attributes.name,
      },
    })),
    (l = new Wt({ props: { artwork: s[21], artworkProfile: s[43](), badgeArtwork: void 0, badgeName: void 0 } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (i = I("div")), j(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "DIV", { class: !0 });
        var o = v(e);
        (z(t.$$.fragment, o), o.forEach(d), (r = Y(a)), (i = S(a, "DIV", { class: !0 })));
        var c = v(i);
        (z(l.$$.fragment, c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "is-viewport-small"), f(i, "class", "is-viewport-large"));
      },
      m(a, o) {
        (P(a, e, o), B(t, e, null), P(a, r, o), P(a, i, o), B(l, i, null), (n = !0));
      },
      p(a, o) {
        const c = {};
        (o[0] & 2097152 && (c.artwork = a[21]),
          o[1] & 4096 && (c.artworkProfile = a[43]()),
          o[0] & 262144 && (c.badgeArtwork = a[18]?.attributes.artwork),
          o[0] & 262144 && (c.badgeName = a[18]?.attributes.name),
          t.$set(c));
        const u = {};
        (o[0] & 2097152 && (u.artwork = a[21]), o[1] & 4096 && (u.artworkProfile = a[43]()), l.$set(u));
      },
      i(a) {
        n || (_(t.$$.fragment, a), _(l.$$.fragment, a), (n = !0));
      },
      o(a) {
        (h(t.$$.fragment, a), h(l.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && (d(e), d(r), d(i)), O(t), O(l));
      },
    }
  );
}
function Vr(s) {
  let e, t, r;
  return (
    (t = new _i({
      props: {
        ariaLabel: s[25].t("ASE.Web.Music.Album.Track.Play.AriaLabel", {
          songName: s[13],
          artistName: s[0].artistName,
        }),
        item: s[30],
        isExplicit: s[11],
      },
    })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-list-row__play-button-wrapper svelte-ejraru"), f(e, "data-testid", "track-play-button"));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[0] & 33562625 &&
          (n.ariaLabel = i[25].t("ASE.Web.Music.Album.Track.Play.AriaLabel", {
            songName: i[13],
            artistName: i[0].artistName,
          })),
          l[0] & 1073741824 && (n.item = i[30]),
          l[0] & 2048 && (n.isExplicit = i[11]),
          t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function ln(s) {
  let e, t;
  return (
    (e = new Je({ props: { action: s[40], $$slots: { default: [on] }, $$scope: { ctx: s } } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[1] & 512 && (l.action = r[40]),
          (i[0] & 8192) | (i[3] & 2048) && (l.$$scope = { dirty: i, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function nn(s) {
  let e, t, r, i, l, n;
  return (
    (t = new Je({ props: { action: s[40], $$slots: { default: [an] }, $$scope: { ctx: s } } })),
    (l = new fs({})),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (i = I("span")), j(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "DIV", { class: !0, dir: !0 });
        var o = v(e);
        (z(t.$$.fragment, o), (r = Y(o)), (i = S(o, "SPAN", { class: !0 })));
        var c = v(i);
        (z(l.$$.fragment, c), c.forEach(d), o.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "songs-list-row__badge songs-list-row__badge--explicit svelte-ejraru"),
          f(e, "class", "songs-list-row__explicit-wrapper svelte-ejraru"),
          f(e, "dir", "auto"));
      },
      m(a, o) {
        (P(a, e, o), B(t, e, null), b(e, r), b(e, i), B(l, i, null), (n = !0));
      },
      p(a, o) {
        const c = {};
        (o[1] & 512 && (c.action = a[40]),
          (o[0] & 8192) | (o[3] & 2048) && (c.$$scope = { dirty: o, ctx: a }),
          t.$set(c));
      },
      i(a) {
        n || (_(t.$$.fragment, a), _(l.$$.fragment, a), (n = !0));
      },
      o(a) {
        (h(t.$$.fragment, a), h(l.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && d(e), O(t), O(l));
      },
    }
  );
}
function on(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(s[13])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var i = v(e);
      ((t = be(i, s[13])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__song-name svelte-ejraru"),
        f(e, "aria-label", s[13]),
        f(e, "tabindex", "-1"),
        f(e, "role", "checkbox"),
        f(e, "dir", "auto"),
        f(e, "data-testid", "track-title"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      (i[0] & 8192 && ve(t, r[13]), i[0] & 8192 && f(e, "aria-label", r[13]));
    },
    d(r) {
      r && d(e);
    },
  };
}
function an(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(s[13])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var i = v(e);
      ((t = be(i, s[13])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__song-name svelte-ejraru"),
        f(e, "aria-label", s[13]),
        f(e, "tabindex", "-1"),
        f(e, "role", "checkbox"),
        f(e, "dir", "auto"),
        f(e, "data-testid", "track-title"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      (i[0] & 8192 && ve(t, r[13]), i[0] & 8192 && f(e, "aria-label", r[13]));
    },
    d(r) {
      r && d(e);
    },
  };
}
function $r(s) {
  let e, t, r, i;
  return (
    (r = new rt({
      props: {
        items: s[12],
        translateFn: s[25].t,
        $$slots: { default: [un, ({ item: l }) => ({ 103: l }), ({ item: l }) => [0, 0, 0, l ? 1024 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        ((e = I("div")), (t = I("span")), j(r.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, "data-testid": !0, dir: !0 });
        var n = v(e);
        t = S(n, "SPAN", { class: !0 });
        var a = v(t);
        (z(r.$$.fragment, a), a.forEach(d), n.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "svelte-ejraru"),
          f(e, "class", "songs-list-row__by-line svelte-ejraru"),
          f(e, "data-testid", "track-title-by-line"),
          f(e, "dir", "auto"),
          $(e, "songs-list-row__by-line__mobile", !s[6] || s[24]));
      },
      m(l, n) {
        (P(l, e, n), b(e, t), B(r, t, null), (i = !0));
      },
      p(l, n) {
        const a = {};
        (n[0] & 4096 && (a.items = l[12]),
          n[0] & 33554432 && (a.translateFn = l[25].t),
          n[3] & 3072 && (a.$$scope = { dirty: n, ctx: l }),
          r.$set(a),
          (!i || n[0] & 16777280) && $(e, "songs-list-row__by-line__mobile", !l[6] || l[24]));
      },
      i(l) {
        i || (_(r.$$.fragment, l), (i = !0));
      },
      o(l) {
        (h(r.$$.fragment, l), (i = !1));
      },
      d(l) {
        (l && d(e), O(r));
      },
    }
  );
}
function cn(s) {
  let e = s[103].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 1024 && e !== (e = r[103].title + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function un(s) {
  let e, t;
  return (
    (e = new Je({ props: { action: s[103].segue, $$slots: { default: [cn] }, $$scope: { ctx: s } } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[3] & 1024 && (l.action = r[103].segue), i[3] & 3072 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Rr(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(s[44])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "data-testid": !0 });
      var i = v(e);
      ((t = be(i, s[44])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__rank svelte-ejraru"), f(e, "data-testid", "track-ranking"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i[1] & 8192 && ve(t, r[44]);
    },
    d(r) {
      r && d(e);
    },
  };
}
function Nr(s) {
  let e, t, r, i, l;
  const n = [dn, fn],
    a = [];
  function o(c, u) {
    return c[23] ? 0 : 1;
  }
  return (
    (r = o(s)),
    (i = a[r] = n[r](s)),
    {
      c() {
        ((e = I("div")), (t = I("div")), i.c(), this.h());
      },
      l(c) {
        e = S(c, "DIV", { class: !0, "data-testid": !0 });
        var u = v(e);
        t = S(u, "DIV", { class: !0, dir: !0 });
        var m = v(t);
        (i.l(m), m.forEach(d), u.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__song-link-wrapper svelte-ejraru"),
          f(t, "dir", "auto"),
          f(e, "class", "songs-list__col songs-list__col--secondary svelte-ejraru"),
          f(e, "data-testid", "track-column-secondary"));
      },
      m(c, u) {
        (P(c, e, u), b(e, t), a[r].m(t, null), (l = !0));
      },
      p(c, u) {
        let m = r;
        ((r = o(c)),
          r === m
            ? a[r].p(c, u)
            : (ce(),
              h(a[m], 1, 1, () => {
                a[m] = null;
              }),
              ue(),
              (i = a[r]),
              i ? i.p(c, u) : ((i = a[r] = n[r](c)), i.c()),
              _(i, 1),
              i.m(t, null)));
      },
      i(c) {
        l || (_(i), (l = !0));
      },
      o(c) {
        (h(i), (l = !1));
      },
      d(c) {
        (c && d(e), a[r].d());
      },
    }
  );
}
function fn(s) {
  let e, t;
  return (
    (e = new rt({
      props: {
        items: s[12],
        translateFn: s[25].t,
        $$slots: { default: [_n, ({ item: r }) => ({ 103: r }), ({ item: r }) => [0, 0, 0, r ? 1024 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[0] & 4096 && (l.items = r[12]),
          i[0] & 33554432 && (l.translateFn = r[25].t),
          i[3] & 3072 && (l.$$scope = { dirty: i, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function dn(s) {
  let e, t;
  return (
    (e = new rt({
      props: {
        items: s[39],
        translateFn: s[25].t,
        $$slots: { default: [gn, ({ item: r }) => ({ 102: r }), ({ item: r }) => [0, 0, 0, r ? 512 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[1] & 256 && (l.items = r[39]),
          i[0] & 33554432 && (l.translateFn = r[25].t),
          i[3] & 2560 && (l.$$scope = { dirty: i, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function mn(s) {
  let e = s[103].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 1024 && e !== (e = r[103].title + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function _n(s) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: s[103].segue, $$slots: { default: [mn] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[3] & 1024 && (n.action = i[103].segue), l[3] & 3072 && (n.$$scope = { dirty: l, ctx: i }), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function hn(s) {
  let e = s[102].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 512 && e !== (e = r[102].title + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function gn(s) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: s[102].segue, $$slots: { default: [hn] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[3] & 512 && (n.action = i[102].segue), l[3] & 2560 && (n.$$scope = { dirty: l, ctx: i }), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Hr(s) {
  let e, t, r, i, l, n;
  const a = [bn, pn],
    o = [];
  function c(u, m) {
    return u[23] ? 0 : 1;
  }
  return (
    (r = c(s)),
    (i = o[r] = a[r](s)),
    {
      c() {
        ((e = I("div")), (t = I("div")), i.c(), this.h());
      },
      l(u) {
        e = S(u, "DIV", { class: !0, "data-testid": !0 });
        var m = v(e);
        t = S(m, "DIV", { class: !0, dir: !0 });
        var k = v(t);
        (i.l(k), k.forEach(d), m.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__song-link-wrapper svelte-ejraru"),
          f(t, "dir", (l = s[23] ? void 0 : "auto")),
          f(e, "class", "songs-list__col songs-list__col--tertiary svelte-ejraru"),
          f(e, "data-testid", "track-column-tertiary"));
      },
      m(u, m) {
        (P(u, e, m), b(e, t), o[r].m(t, null), (n = !0));
      },
      p(u, m) {
        let k = r;
        ((r = c(u)),
          r === k
            ? o[r].p(u, m)
            : (ce(),
              h(o[k], 1, 1, () => {
                o[k] = null;
              }),
              ue(),
              (i = o[r]),
              i ? i.p(u, m) : ((i = o[r] = a[r](u)), i.c()),
              _(i, 1),
              i.m(t, null)),
          (!n || (m[0] & 8388608 && l !== (l = u[23] ? void 0 : "auto"))) && f(t, "dir", l));
      },
      i(u) {
        n || (_(i), (n = !0));
      },
      o(u) {
        (h(i), (n = !1));
      },
      d(u) {
        (u && d(e), o[r].d());
      },
    }
  );
}
function pn(s) {
  let e, t;
  return (
    (e = new rt({
      props: {
        items: s[39],
        translateFn: s[25].t,
        $$slots: { default: [kn, ({ item: r }) => ({ 102: r }), ({ item: r }) => [0, 0, 0, r ? 512 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[1] & 256 && (l.items = r[39]),
          i[0] & 33554432 && (l.translateFn = r[25].t),
          i[3] & 2560 && (l.$$scope = { dirty: i, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function bn(s) {
  let e,
    t,
    r = s[18] && jr(s);
  return {
    c() {
      (r && r.c(), (e = He()));
    },
    l(i) {
      (r && r.l(i), (e = He()));
    },
    m(i, l) {
      (r && r.m(i, l), P(i, e, l), (t = !0));
    },
    p(i, l) {
      i[18]
        ? r
          ? (r.p(i, l), l[0] & 262144 && _(r, 1))
          : ((r = jr(i)), r.c(), _(r, 1), r.m(e.parentNode, e))
        : r &&
          (ce(),
          h(r, 1, 1, () => {
            r = null;
          }),
          ue());
    },
    i(i) {
      t || (_(r), (t = !0));
    },
    o(i) {
      (h(r), (t = !1));
    },
    d(i) {
      (i && d(e), r && r.d(i));
    },
  };
}
function vn(s) {
  let e = s[102].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 512 && e !== (e = r[102].title + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function kn(s) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: s[102].segue, $$slots: { default: [vn] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[3] & 512 && (n.action = i[102].segue), l[3] & 2560 && (n.$$scope = { dirty: l, ctx: i }), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function jr(s) {
  let e,
    t,
    r,
    i,
    l = s[18]?.attributes.name + "",
    n,
    a;
  return (
    (t = new ki({ props: { artwork: s[18]?.attributes.artwork, name: s[18]?.attributes.name } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (i = I("span")), (n = pe(l)), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0 });
        var c = v(e);
        (z(t.$$.fragment, c), (r = Y(c)), (i = S(c, "SPAN", { class: !0 })));
        var u = v(i);
        ((n = be(u, l)), u.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "songs-list-row__badge-name"),
          f(e, "class", "songs-list-row__badge__contributor-wrapper svelte-ejraru"));
      },
      m(o, c) {
        (P(o, e, c), B(t, e, null), b(e, r), b(e, i), b(i, n), (a = !0));
      },
      p(o, c) {
        const u = {};
        (c[0] & 262144 && (u.artwork = o[18]?.attributes.artwork),
          c[0] & 262144 && (u.name = o[18]?.attributes.name),
          t.$set(u),
          (!a || c[0] & 262144) && l !== (l = o[18]?.attributes.name + "") && ve(n, l));
      },
      i(o) {
        a || (_(t.$$.fragment, o), (a = !0));
      },
      o(o) {
        (h(t.$$.fragment, o), (a = !1));
      },
      d(o) {
        (o && d(e), O(t));
      },
    }
  );
}
function Br(s) {
  let e, t, r, i, l, n;
  const a = [yn, wn],
    o = [];
  function c(u, m) {
    return u[23] ? 0 : u[18] ? 1 : -1;
  }
  return (
    ~(r = c(s)) && (i = o[r] = a[r](s)),
    {
      c() {
        ((e = I("div")), (t = I("div")), i && i.c(), this.h());
      },
      l(u) {
        e = S(u, "DIV", { class: !0, "data-testid": !0 });
        var m = v(e);
        t = S(m, "DIV", { class: !0, dir: !0 });
        var k = v(t);
        (i && i.l(k), k.forEach(d), m.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__song-link-wrapper svelte-ejraru"),
          f(t, "dir", (l = s[23] ? "auto" : void 0)),
          f(e, "class", "songs-list__col songs-list__col--quaternary svelte-ejraru"),
          f(e, "data-testid", "track-column-quaternary"),
          $(e, "songs-list__reactions", s[7]));
      },
      m(u, m) {
        (P(u, e, m), b(e, t), ~r && o[r].m(t, null), (n = !0));
      },
      p(u, m) {
        let k = r;
        ((r = c(u)),
          r === k
            ? ~r && o[r].p(u, m)
            : (i &&
                (ce(),
                h(o[k], 1, 1, () => {
                  o[k] = null;
                }),
                ue()),
              ~r ? ((i = o[r]), i ? i.p(u, m) : ((i = o[r] = a[r](u)), i.c()), _(i, 1), i.m(t, null)) : (i = null)),
          (!n || (m[0] & 8388608 && l !== (l = u[23] ? "auto" : void 0))) && f(t, "dir", l),
          (!n || m[0] & 128) && $(e, "songs-list__reactions", u[7]));
      },
      i(u) {
        n || (_(i), (n = !0));
      },
      o(u) {
        (h(i), (n = !1));
      },
      d(u) {
        (u && d(e), ~r && o[r].d());
      },
    }
  );
}
function wn(s) {
  let e,
    t,
    r,
    i,
    l = s[18]?.attributes.name + "",
    n,
    a;
  return (
    (t = new ki({ props: { artwork: s[18]?.attributes.artwork, name: s[18]?.attributes.name } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (i = I("span")), (n = pe(l)), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0 });
        var c = v(e);
        (z(t.$$.fragment, c), (r = Y(c)), (i = S(c, "SPAN", { class: !0 })));
        var u = v(i);
        ((n = be(u, l)), u.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "songs-list-row__badge-name"),
          f(e, "class", "songs-list-row__badge__contributor-wrapper svelte-ejraru"));
      },
      m(o, c) {
        (P(o, e, c), B(t, e, null), b(e, r), b(e, i), b(i, n), (a = !0));
      },
      p(o, c) {
        const u = {};
        (c[0] & 262144 && (u.artwork = o[18]?.attributes.artwork),
          c[0] & 262144 && (u.name = o[18]?.attributes.name),
          t.$set(u),
          (!a || c[0] & 262144) && l !== (l = o[18]?.attributes.name + "") && ve(n, l));
      },
      i(o) {
        a || (_(t.$$.fragment, o), (a = !0));
      },
      o(o) {
        (h(t.$$.fragment, o), (a = !1));
      },
      d(o) {
        (o && d(e), O(t));
      },
    }
  );
}
function yn(s) {
  let e, t, r, i, l, n;
  return (
    (t = new ds({ props: { trackId: s[14], popoverPosition: s[26] ? kt.Right : kt.Left, appendPopoverToBody: !0 } })),
    (l = new ms({ props: { trackId: s[14] } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment), (r = J()), (i = I("span")), j(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var o = v(e);
        (z(t.$$.fragment, o), o.forEach(d), (r = Y(a)), (i = S(a, "SPAN", { class: !0 })));
        var c = v(i);
        (z(l.$$.fragment, c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "is-viewport-large"), f(i, "class", "is-viewport-small"));
      },
      m(a, o) {
        (P(a, e, o), B(t, e, null), P(a, r, o), P(a, i, o), B(l, i, null), (n = !0));
      },
      p(a, o) {
        const c = {};
        (o[0] & 16384 && (c.trackId = a[14]),
          o[0] & 67108864 && (c.popoverPosition = a[26] ? kt.Right : kt.Left),
          t.$set(c));
        const u = {};
        (o[0] & 16384 && (u.trackId = a[14]), l.$set(u));
      },
      i(a) {
        n || (_(t.$$.fragment, a), _(l.$$.fragment, a), (n = !0));
      },
      o(a) {
        (h(t.$$.fragment, a), h(l.$$.fragment, a), (n = !1));
      },
      d(a) {
        (a && (d(e), d(r), d(i)), O(t), O(l));
      },
    }
  );
}
function Or(s) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: s[0].playAction, $$slots: { default: [In] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-list-row__preview-button svelte-ejraru"), f(e, "data-testid", "track-preview"));
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[0] & 1 && (n.action = i[0].playAction),
          (l[0] & 33554432) | (l[3] & 2048) && (n.$$scope = { dirty: l, ctx: i }),
          t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function In(s) {
  let e = s[25].t("ASE.Web.Music.Preview.AllCaps") + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[0] & 33554432 && e !== (e = r[25].t("ASE.Web.Music.Preview.AllCaps") + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function zr(s) {
  let e, t, r;
  return (
    (t = new _s({ props: { contentDescriptor: s[0].contentDescriptor, iconOnly: !0 } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__add-to-library svelte-ejraru");
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l[0] & 1 && (n.contentDescriptor = i[0].contentDescriptor), t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function qr(s) {
  let e, t;
  return {
    c() {
      ((e = I("time")), (t = pe(s[38])), this.h());
    },
    l(r) {
      e = S(r, "TIME", { datetime: !0, class: !0, "data-testid": !0 });
      var i = v(e);
      ((t = be(i, s[38])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "datetime", s[37]),
        f(e, "class", "songs-list-row__length svelte-ejraru"),
        f(e, "data-testid", "track-duration"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      (i[1] & 128 && ve(t, r[38]), i[1] & 64 && f(e, "datetime", r[37]));
    },
    d(r) {
      r && d(e);
    },
  };
}
function Wr(s) {
  let e, t, r;
  return (
    (t = new Jt({
      props: {
        attachedTo: s[0].contentDescriptor,
        isPlayable: s[0].playAction !== null && !s[47],
        isMinimalMenu: s[46],
        itemProperties: { subtitleLinks: s[0].subtitleLinks, title: s[13], artwork: s[0]?.artwork || s[10] },
        hasMaterial: !1,
        buttonStyle: "non-platter",
        prependItems: s[9]
          ? [
              {
                action: s[89],
                label: s[25].t("ASE.Web.Music.ContextualMenu.RemoveFromPlaylist"),
                icon: or.RemoveFromPlaylistIcon,
              },
            ]
          : [],
      },
    })),
    t.$on("actionComplete", function () {
      Ye(s[101]) && s[101].apply(this, arguments);
    }),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__context-menu svelte-ejraru");
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      p(i, l) {
        s = i;
        const n = {};
        (l[0] & 1 && (n.attachedTo = s[0].contentDescriptor),
          (l[0] & 1) | (l[1] & 65536) && (n.isPlayable = s[0].playAction !== null && !s[47]),
          l[1] & 32768 && (n.isMinimalMenu = s[46]),
          l[0] & 9217 &&
            (n.itemProperties = { subtitleLinks: s[0].subtitleLinks, title: s[13], artwork: s[0]?.artwork || s[10] }),
          l[0] & 34079232 &&
            (n.prependItems = s[9]
              ? [
                  {
                    action: s[89],
                    label: s[25].t("ASE.Web.Music.ContextualMenu.RemoveFromPlaylist"),
                    icon: or.RemoveFromPlaylistIcon,
                  },
                ]
              : []),
          t.$set(n));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Sn(s) {
  let e,
    t,
    r = !s[16] || !1,
    i,
    l,
    n = !s[47] && !s[16] && zr(s),
    a = !s[16] && qr(s),
    o = r && Wr(s);
  return {
    c() {
      (n && n.c(), (e = J()), a && a.c(), (t = J()), o && o.c(), (i = He()));
    },
    l(c) {
      (n && n.l(c), (e = Y(c)), a && a.l(c), (t = Y(c)), o && o.l(c), (i = He()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), a && a.m(c, u), P(c, t, u), o && o.m(c, u), P(c, i, u), (l = !0));
    },
    p(c, u) {
      (!c[47] && !c[16]
        ? n
          ? (n.p(c, u), (u[0] & 65536) | (u[1] & 65536) && _(n, 1))
          : ((n = zr(c)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (ce(),
          h(n, 1, 1, () => {
            n = null;
          }),
          ue()),
        c[16] ? a && (a.d(1), (a = null)) : a ? a.p(c, u) : ((a = qr(c)), a.c(), a.m(t.parentNode, t)),
        u[0] & 65536 && (r = !c[16] || !1),
        r
          ? o
            ? (o.p(c, u), u[0] & 65536 && _(o, 1))
            : ((o = Wr(c)), o.c(), _(o, 1), o.m(i.parentNode, i))
          : o &&
            (ce(),
            h(o, 1, 1, () => {
              o = null;
            }),
            ue()));
    },
    i(c) {
      l || (_(n), _(o), (l = !0));
    },
    o(c) {
      (h(n), h(o), (l = !1));
    },
    d(c) {
      (c && (d(e), d(t), d(i)), n && n.d(c), a && a.d(c), o && o.d(c));
    },
  };
}
function En(s) {
  let e, t, r, i, l, n, a, o, c, u, m, k, E, g, T, w, A, y, p, F, te, N, Z, q, K, ie, ne, X, fe, ke, x, G, _e, Pe;
  ((r = new Yl({ props: { isPopular: s[0].showPopularityIndicator, inFavorites: s[29], showFavoriteButton: s[41] } })),
    r.$on("toggle", s[61]));
  let H = s[15] && !s[42] && Fr();
  const le = [tn, en],
    W = [];
  function Q(D, L) {
    return D[42] ? 0 : D[45] || D[45] === 0 ? 1 : -1;
  }
  ~(c = Q(s)) && (u = W[c] = le[c](s));
  let V = s[0].playAction && !s[16] && Vr(s);
  const De = [nn, ln],
    ge = [];
  function Te(D, L) {
    return D[11] ? 0 : 1;
  }
  ((T = Te(s)), (w = ge[T] = De[T](s)));
  let de = s[12].length && $r(s),
    Ie = s[44] && Rr(s),
    oe = s[4] && s[20] !== "albumTrackList" && Nr(s),
    me = s[5] && Hr(s),
    U = s[6] && Br(s),
    we = s[47] && Or(s);
  return (
    (ne = new ts({
      props: {
        contentDescriptor: s[0].contentDescriptor,
        isPlayable: s[30].playAction !== null,
        $$slots: {
          default: [
            Sn,
            ({ onContextMenuActionComplete: D }) => ({ 101: D }),
            ({ onContextMenuActionComplete: D }) => [0, 0, 0, D ? 256 : 0],
          ],
        },
        $$scope: { ctx: s },
      },
    })),
    ne.$on("contextMenuActionComplete", s[90]),
    {
      c() {
        ((e = I("div")),
          (t = I("div")),
          j(r.$$.fragment),
          (i = J()),
          (l = I("div")),
          (n = I("div")),
          H && H.c(),
          (a = J()),
          (o = I("div")),
          u && u.c(),
          (m = J()),
          V && V.c(),
          (k = J()),
          (E = I("div")),
          (g = I("div")),
          w.c(),
          (A = J()),
          de && de.c(),
          (y = J()),
          (p = J()),
          Ie && Ie.c(),
          (F = J()),
          oe && oe.c(),
          (te = J()),
          me && me.c(),
          (N = J()),
          U && U.c(),
          (Z = J()),
          (q = I("div")),
          (K = I("div")),
          we && we.c(),
          (ie = J()),
          j(ne.$$.fragment),
          this.h());
      },
      l(D) {
        e = S(D, "DIV", {
          class: !0,
          role: !0,
          tabindex: !0,
          "data-row": !0,
          "data-current-mouse-target": !0,
          "data-testid": !0,
          "aria-label": !0,
        });
        var L = v(e);
        t = S(L, "DIV", { class: !0, "data-testid": !0 });
        var Se = v(t);
        (z(r.$$.fragment, Se), Se.forEach(d), (i = Y(L)), (l = S(L, "DIV", { class: !0, "data-testid": !0 })));
        var $e = v(l);
        n = S($e, "DIV", { class: !0 });
        var Ae = v(n);
        (H && H.l(Ae), (a = Y(Ae)), (o = S(Ae, "DIV", { class: !0 })));
        var Le = v(o);
        (u && u.l(Le), (m = Y(Le)), V && V.l(Le), Le.forEach(d), (k = Y(Ae)), (E = S(Ae, "DIV", { class: !0 })));
        var Oe = v(E);
        g = S(Oe, "DIV", { class: !0, "data-testid": !0 });
        var C = v(g);
        (w.l(C),
          (A = Y(C)),
          de && de.l(C),
          C.forEach(d),
          (y = Y(Oe)),
          Oe.forEach(d),
          (p = Y(Ae)),
          Ie && Ie.l(Ae),
          Ae.forEach(d),
          $e.forEach(d),
          (F = Y(L)),
          oe && oe.l(L),
          (te = Y(L)),
          me && me.l(L),
          (N = Y(L)),
          U && U.l(L),
          (Z = Y(L)),
          (q = S(L, "DIV", { class: !0, "data-testid": !0 })));
        var re = v(q);
        K = S(re, "DIV", { class: !0 });
        var ae = v(K);
        (we && we.l(ae), (ie = Y(ae)), z(ne.$$.fragment, ae), ae.forEach(d), re.forEach(d), L.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__col songs-list__col--favorite-or-popular svelte-ejraru"),
          f(t, "data-testid", "track-column-favorite-or-popular"),
          f(o, "class", "songs-list-row__song-index svelte-ejraru"),
          $(o, "songs-list-row__song-index--ranking", s[44]),
          $(o, "songs-list-row--with-collaborators", !s[17]),
          f(g, "class", "songs-list-row__song-name-wrapper svelte-ejraru"),
          f(g, "data-testid", "song-name-wrapper"),
          $(g, "songs-list-row__song-name-wrapper--explicit", s[11]),
          f(E, "class", "songs-list-row__song-wrapper svelte-ejraru"),
          f(n, "class", "songs-list-row__song-container svelte-ejraru"),
          f(l, "class", "songs-list__col songs-list__col--song svelte-ejraru"),
          f(l, "data-testid", "track-column-song"),
          f(K, "class", "songs-list-row__controls svelte-ejraru"),
          f(q, "class", "songs-list__col songs-list__col--time svelte-ejraru"),
          f(q, "data-testid", "track-column-controls"),
          f(e, "class", "songs-list-row drop-reset svelte-ejraru"),
          f(e, "role", "row"),
          f(e, "tabindex", "0"),
          f(e, "data-row", s[1]),
          f(e, "data-current-mouse-target", (X = s[49].currentMouseTarget === s[0])),
          f(e, "data-testid", "track-list-item"),
          f(e, "aria-label", s[28]),
          $(e, "is-loading", s[36]),
          $(e, "is-playing", s[35]),
          $(e, "is-paused", s[34]),
          $(e, "songs-list-row--disabled", s[16]),
          $(e, "songs-list-row--artwork", s[42]),
          $(e, "songs-list-row--no-artwork", !s[42]),
          $(e, "songs-list-row--decorated", s[42] && s[22]),
          $(e, "songs-list-row--two-lines", s[12].length),
          $(e, "songs-list-row--album", s[20] === "albumTrackList"),
          $(e, "songs-list-row--playlist", s[20] === "playlistTrackList"),
          $(e, "songs-list-row--compilation", s[20] === "compilationTrackList"),
          $(e, "songs-list-row--selected", s[2]),
          $(e, "songs-list-row--preview", s[47]),
          $(e, "disabled", s[16]));
      },
      m(D, L) {
        (P(D, e, L),
          b(e, t),
          B(r, t, null),
          b(e, i),
          b(e, l),
          b(l, n),
          H && H.m(n, null),
          b(n, a),
          b(n, o),
          ~c && W[c].m(o, null),
          b(o, m),
          V && V.m(o, null),
          b(n, k),
          b(n, E),
          b(E, g),
          ge[T].m(g, null),
          b(g, A),
          de && de.m(g, null),
          b(E, y),
          b(n, p),
          Ie && Ie.m(n, null),
          b(e, F),
          oe && oe.m(e, null),
          b(e, te),
          me && me.m(e, null),
          b(e, N),
          U && U.m(e, null),
          b(e, Z),
          b(e, q),
          b(q, K),
          we && we.m(K, null),
          b(K, ie),
          B(ne, K, null),
          s[91](e),
          (G = !0),
          _e ||
            ((Pe = [
              Me(e, "dblclick", s[92]),
              Me(e, "mousedown", s[93]),
              Me(e, "mousedown", s[57]),
              Me(e, "click", s[59]),
              Me(e, "keydown", s[58]),
              Me(e, "focusin", s[60]),
              et((fe = An.call(null, e, s[3]))),
              et((ke = rs.call(null, e, s[8] && { targets: [ft.Top, ft.Bottom], onDrop: s[94] }))),
              et((x = s[56].call(null, e, { impressionMetrics: s[32], location: s[31] }))),
            ]),
            (_e = !0)));
      },
      p(D, L) {
        const Se = {};
        (L[0] & 1 && (Se.isPopular = D[0].showPopularityIndicator),
          L[0] & 536870912 && (Se.inFavorites = D[29]),
          L[1] & 1024 && (Se.showFavoriteButton = D[41]),
          r.$set(Se),
          D[15] && !D[42]
            ? H
              ? (L[0] & 32768) | (L[1] & 2048) && _(H, 1)
              : ((H = Fr()), H.c(), _(H, 1), H.m(n, a))
            : H &&
              (ce(),
              h(H, 1, 1, () => {
                H = null;
              }),
              ue()));
        let $e = c;
        ((c = Q(D)),
          c === $e
            ? ~c && W[c].p(D, L)
            : (u &&
                (ce(),
                h(W[$e], 1, 1, () => {
                  W[$e] = null;
                }),
                ue()),
              ~c ? ((u = W[c]), u ? u.p(D, L) : ((u = W[c] = le[c](D)), u.c()), _(u, 1), u.m(o, m)) : (u = null)),
          D[0].playAction && !D[16]
            ? V
              ? (V.p(D, L), L[0] & 65537 && _(V, 1))
              : ((V = Vr(D)), V.c(), _(V, 1), V.m(o, null))
            : V &&
              (ce(),
              h(V, 1, 1, () => {
                V = null;
              }),
              ue()),
          (!G || L[1] & 8192) && $(o, "songs-list-row__song-index--ranking", D[44]),
          (!G || L[0] & 131072) && $(o, "songs-list-row--with-collaborators", !D[17]));
        let Ae = T;
        ((T = Te(D)),
          T === Ae
            ? ge[T].p(D, L)
            : (ce(),
              h(ge[Ae], 1, 1, () => {
                ge[Ae] = null;
              }),
              ue(),
              (w = ge[T]),
              w ? w.p(D, L) : ((w = ge[T] = De[T](D)), w.c()),
              _(w, 1),
              w.m(g, A)),
          D[12].length
            ? de
              ? (de.p(D, L), L[0] & 4096 && _(de, 1))
              : ((de = $r(D)), de.c(), _(de, 1), de.m(g, null))
            : de &&
              (ce(),
              h(de, 1, 1, () => {
                de = null;
              }),
              ue()),
          (!G || L[0] & 2048) && $(g, "songs-list-row__song-name-wrapper--explicit", D[11]),
          D[44] ? (Ie ? Ie.p(D, L) : ((Ie = Rr(D)), Ie.c(), Ie.m(n, null))) : Ie && (Ie.d(1), (Ie = null)),
          D[4] && D[20] !== "albumTrackList"
            ? oe
              ? (oe.p(D, L), L[0] & 1048592 && _(oe, 1))
              : ((oe = Nr(D)), oe.c(), _(oe, 1), oe.m(e, te))
            : oe &&
              (ce(),
              h(oe, 1, 1, () => {
                oe = null;
              }),
              ue()),
          D[5]
            ? me
              ? (me.p(D, L), L[0] & 32 && _(me, 1))
              : ((me = Hr(D)), me.c(), _(me, 1), me.m(e, N))
            : me &&
              (ce(),
              h(me, 1, 1, () => {
                me = null;
              }),
              ue()),
          D[6]
            ? U
              ? (U.p(D, L), L[0] & 64 && _(U, 1))
              : ((U = Br(D)), U.c(), _(U, 1), U.m(e, Z))
            : U &&
              (ce(),
              h(U, 1, 1, () => {
                U = null;
              }),
              ue()),
          D[47]
            ? we
              ? (we.p(D, L), L[1] & 65536 && _(we, 1))
              : ((we = Or(D)), we.c(), _(we, 1), we.m(K, ie))
            : we &&
              (ce(),
              h(we, 1, 1, () => {
                we = null;
              }),
              ue()));
        const Le = {};
        (L[0] & 1 && (Le.contentDescriptor = D[0].contentDescriptor),
          L[0] & 1073741824 && (Le.isPlayable = D[30].playAction !== null),
          (L[0] & 34153985) | (L[1] & 98496) | (L[3] & 2304) && (Le.$$scope = { dirty: L, ctx: D }),
          ne.$set(Le),
          (!G || L[0] & 2) && f(e, "data-row", D[1]),
          (!G || ((L[0] & 1) | (L[1] & 262144) && X !== (X = D[49].currentMouseTarget === D[0]))) &&
            f(e, "data-current-mouse-target", X),
          (!G || L[0] & 268435456) && f(e, "aria-label", D[28]),
          fe && Ye(fe.update) && L[0] & 8 && fe.update.call(null, D[3]),
          ke &&
            Ye(ke.update) &&
            L[0] & 256 &&
            ke.update.call(null, D[8] && { targets: [ft.Top, ft.Bottom], onDrop: D[94] }),
          x && Ye(x.update) && L[1] & 3 && x.update.call(null, { impressionMetrics: D[32], location: D[31] }),
          (!G || L[1] & 32) && $(e, "is-loading", D[36]),
          (!G || L[1] & 16) && $(e, "is-playing", D[35]),
          (!G || L[1] & 8) && $(e, "is-paused", D[34]),
          (!G || L[0] & 65536) && $(e, "songs-list-row--disabled", D[16]),
          (!G || L[1] & 2048) && $(e, "songs-list-row--artwork", D[42]),
          (!G || L[1] & 2048) && $(e, "songs-list-row--no-artwork", !D[42]),
          (!G || (L[0] & 4194304) | (L[1] & 2048)) && $(e, "songs-list-row--decorated", D[42] && D[22]),
          (!G || L[0] & 4096) && $(e, "songs-list-row--two-lines", D[12].length),
          (!G || L[0] & 1048576) && $(e, "songs-list-row--album", D[20] === "albumTrackList"),
          (!G || L[0] & 1048576) && $(e, "songs-list-row--playlist", D[20] === "playlistTrackList"),
          (!G || L[0] & 1048576) && $(e, "songs-list-row--compilation", D[20] === "compilationTrackList"),
          (!G || L[0] & 4) && $(e, "songs-list-row--selected", D[2]),
          (!G || L[1] & 65536) && $(e, "songs-list-row--preview", D[47]),
          (!G || L[0] & 65536) && $(e, "disabled", D[16]));
      },
      i(D) {
        G ||
          (_(r.$$.fragment, D),
          _(H),
          _(u),
          _(V),
          _(w),
          _(de),
          _(oe),
          _(me),
          _(U),
          _(we),
          _(ne.$$.fragment, D),
          (G = !0));
      },
      o(D) {
        (h(r.$$.fragment, D), h(H), h(u), h(V), h(w), h(de), h(oe), h(me), h(U), h(we), h(ne.$$.fragment, D), (G = !1));
      },
      d(D) {
        (D && d(e),
          O(r),
          H && H.d(),
          ~c && W[c].d(),
          V && V.d(),
          ge[T].d(),
          de && de.d(),
          Ie && Ie.d(),
          oe && oe.d(),
          me && me.d(),
          U && U.d(),
          we && we.d(),
          O(ne),
          s[91](null),
          (_e = !1),
          dt(Pe));
      },
    }
  );
}
function An(s, e) {
  return (
    e && s.focus(),
    {
      update(t) {
        t && s.focus();
      },
    }
  );
}
function Cn(s, e, t) {
  let r,
    i,
    l,
    n,
    a,
    o,
    c,
    u,
    m,
    k,
    E,
    g,
    T,
    w,
    A,
    y,
    p,
    F,
    te,
    N,
    Z,
    q,
    K,
    ie,
    ne,
    X,
    fe,
    ke,
    x,
    G,
    _e,
    Pe,
    H,
    le,
    W,
    Q,
    V,
    De,
    ge,
    Te,
    de,
    Ie,
    oe,
    me,
    U,
    we,
    D,
    L = se,
    Se = () => (L(), (L = Dt(De, (M) => t(85, (D = M)))), De),
    $e,
    Ae,
    Le;
  (Ce(s, is, (M) => t(96, (U = M))), Ce(s, ss, (M) => t(86, ($e = M))), s.$$.on_destroy.push(() => L()));
  var Oe, C, re, ae, ye, Ne, it, st, lt, nt;
  const R = ct(),
    ee = Ze();
  Ce(s, ee, (M) => t(25, (me = M)));
  const Ee = Mt();
  Ce(s, Ee, (M) => t(49, (we = M)));
  const Re = tt(),
    We = Lt(),
    { queue: ht, isRestricted: Vt } = di();
  Ce(s, ht, (M) => t(87, (Ae = M)));
  const { state: Yt } = _t();
  Ce(s, Yt, (M) => t(88, (Le = M)));
  const $t = Et(),
    { captureImpressions: Ei } = ls();
  let Rt = !1,
    Qt = !1;
  (mt(async () => {
    try {
      const M = await Vt?.();
      t(76, (Rt = M));
    } catch {}
    t(26, (Qt = document.dir === gi.RTL));
  }),
    ut(() => {
      R.unsubscribeFromUpdates(m);
    }));
  let { item: he } = e,
    { containerItemDescriptors: Nt = [] } = e,
    { rowIndex: Xt } = e,
    { isFirst: gt } = e,
    { isLast: pt } = e,
    { isSelected: xt } = e,
    { isLastSelected: er } = e,
    { showSecondColumn: Ht } = e,
    { showThirdColumn: tr } = e,
    { showFourthColumn: bt } = e,
    { hasReactions: vt = !1 } = e,
    { socialProfiles: jt = new Map() } = e,
    { dropEnabled: rr = !1 } = e,
    { shouldShowRemoveFromPlaylist: ir = !1 } = e,
    { containerArtwork: sr } = e,
    ot;
  function Ai(M) {
    let Ue;
    if ((k ? (Ue = hs(M)) : (Ue = gs(M)), Ue.contentDescriptor.url || Ue.contentDescriptor.catalogUrl))
      return cs(
        { kind: us.CatalogPage, intent: Ue },
        {
          data: [
            {
              excludingFields: [],
              includingFields: ["pageFields", "languages", "impressionsSnapshot", "clickLocation"],
              shouldFlush: !1,
              fields: {
                targetId: ie?.identifiers.storeAdamID,
                actionType: "credits",
                targetType: "button",
                actionContext: "track",
                eventType: "click",
              },
            },
          ],
          custom: {},
        },
      );
  }
  let Bt = !1;
  function Ci(M) {
    M.metaKey && (Bt = !0);
  }
  function Di(M) {
    if (M.key === "Enter" && M.target === ot) We(V.playAction);
    else if (M.key === "Tab")
      if (M.shiftKey)
        document.activeElement === ot && (gt ? Ee.clearSelection() : (Ee.selectPreviousItem(he), M.preventDefault()));
      else {
        const Ue = ot.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        );
        document.activeElement === Ue[Ue.length - 1] &&
          (pt ? Ee.clearSelection() : (Ee.selectNextItem(he), M.preventDefault()));
      }
  }
  function Ti(M) {
    Ee.handleClick(he, M);
  }
  function Pi() {
    const M = we.selectedItems.length;
    (!Bt && M <= 1 && (gt || pt) && Ee.selectItem(he), (Bt = !1));
  }
  const Li = () => {
      hi(m, ge, he.contentDescriptor, Te, R, U, !0, We);
    },
    Mi = () => {
      $t("removeFromPlaylist", { itemId: u });
    };
  function Fi(M) {
    bi.call(this, s, M);
  }
  function Vi(M) {
    Ut[M ? "unshift" : "push"](() => {
      ((ot = M), t(27, ot));
    });
  }
  const $i = () => We(V.playAction),
    Ri = (M) => {
      M.metaKey || Ee.setCurrentMouseTarget(he);
    },
    Ni = (...M) => $t("drop", ...M);
  return (
    (s.$$set = (M) => {
      ("item" in M && t(0, (he = M.item)),
        "containerItemDescriptors" in M && t(62, (Nt = M.containerItemDescriptors)),
        "rowIndex" in M && t(1, (Xt = M.rowIndex)),
        "isFirst" in M && t(63, (gt = M.isFirst)),
        "isLast" in M && t(64, (pt = M.isLast)),
        "isSelected" in M && t(2, (xt = M.isSelected)),
        "isLastSelected" in M && t(3, (er = M.isLastSelected)),
        "showSecondColumn" in M && t(4, (Ht = M.showSecondColumn)),
        "showThirdColumn" in M && t(5, (tr = M.showThirdColumn)),
        "showFourthColumn" in M && t(6, (bt = M.showFourthColumn)),
        "hasReactions" in M && t(7, (vt = M.hasReactions)),
        "socialProfiles" in M && t(65, (jt = M.socialProfiles)),
        "dropEnabled" in M && t(8, (rr = M.dropEnabled)),
        "shouldShowRemoveFromPlaylist" in M && t(9, (ir = M.shouldShowRemoveFromPlaylist)),
        "containerArtwork" in M && t(10, (sr = M.containerArtwork)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 1 &&
        t(
          20,
          (r = (() => {
            const M = he.layoutStyle;
            return typeof M == "string" ? M : M?.kind;
          })()),
        ),
        s.$$.dirty[0] & 192 && t(23, (i = bt && vt)),
        s.$$.dirty[0] & 192 && t(24, (l = bt && !vt)),
        s.$$.dirty[0] & 25165824 && t(17, (n = !i && !l)),
        s.$$.dirty[0] & 25165824 && t(48, (a = l || i)),
        s.$$.dirty[2] & 67108880 &&
          t(83, (o = vi(t(66, (Oe = Le?.user)) === null || Oe === void 0 ? void 0 : Oe.subscriberType))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 32) &&
          t(84, (c = t(67, (C = he.contentDescriptor)) === null || C === void 0 ? void 0 : C.kind)),
        s.$$.dirty[0] & 1 && t(19, (u = at(he))),
        s.$$.dirty[0] & 1 && t(14, (m = Zt(he))),
        s.$$.dirty[2] & 4194304 && t(15, (k = ns.includes(c))),
        s.$$.dirty[0] & 1 && t(47, (E = he.isPreviewMode)),
        s.$$.dirty[0] & 1 && t(11, (g = he.showExplicitBadge)),
        (s.$$.dirty[0] & 2049) | (s.$$.dirty[2] & 16384) && t(16, (T = he.isDisabled || (g && Rt))),
        s.$$.dirty[0] & 65537 && t(46, (w = T && !!he.isPrerelease)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 384) &&
          t(
            79,
            (W =
              t(
                70,
                (ye =
                  t(69, (ae = he.socialProfileContentDescriptor)) === null || ae === void 0 ? void 0 : ae.identifiers),
              ) === null || ye === void 0
                ? void 0
                : ye.socialProfileID),
          ),
        (s.$$.dirty[0] & 131072) | (s.$$.dirty[2] & 16908296) && t(18, (Q = n ? jt.get(W) : $e?.get(W))),
        s.$$.dirty[0] & 262144 && t(22, (A = !!Q)),
        s.$$.dirty[0] & 1 && t(45, (y = he.trackNumber)),
        s.$$.dirty[0] & 1 && t(13, (p = he.title)),
        s.$$.dirty[0] & 1 && t(44, (F = he.rankingText)),
        s.$$.dirty[0] & 1 && t(21, (te = he.artwork)),
        s.$$.dirty[0] & 4227072 &&
          t(43, (N = () => (k ? "music-video-tracklist" : A ? "track-list-decorated" : "track-list"))),
        s.$$.dirty[0] & 3145728 && t(42, (Z = !!te || r === "playlistTrackList")),
        (s.$$.dirty[0] & 65536) | (s.$$.dirty[2] & 2097152) && t(41, (q = o && !T)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 64) &&
          t(82, (K = t(68, (re = he.contentDescriptor)) === null || re === void 0 ? void 0 : re.url)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 1048576) &&
          t(78, (ie = Object.assign(Object.assign({}, he.contentDescriptor), { url: os(K) }))),
        (s.$$.dirty[0] & 65536) | (s.$$.dirty[2] & 65536) && t(40, (ne = !!ie && !T && Ai(ie))),
        s.$$.dirty[0] & 1 && t(12, (X = he.subtitleLinks || [])),
        s.$$.dirty[0] & 1 && t(39, (fe = he.tertiaryLinks || [])),
        s.$$.dirty[0] & 1 && t(81, (ke = Math.trunc(he.duration / 1e3))),
        s.$$.dirty[2] & 524288 && t(38, (x = Gt(ke, Re.language))),
        s.$$.dirty[2] & 524288 && t(37, (G = pi(ke))),
        (s.$$.dirty[0] & 524288) | (s.$$.dirty[2] & 33554432) && t(80, (_e = u && Ae.nowPlayingItemId === u)),
        s.$$.dirty[2] & 33816576 && t(36, (Pe = _e && Ae.derivedStates.isLoading)),
        s.$$.dirty[2] & 33816576 && t(35, (H = _e && Ae.derivedStates.isPlaying)),
        s.$$.dirty[2] & 33816576 && t(34, (le = _e && Ae.derivedStates.isPaused)),
        (s.$$.dirty[0] & 65537) | (s.$$.dirty[2] & 1) &&
          t(
            30,
            (V = (() =>
              Object.assign(Object.assign({}, he), { playAction: !T && he.playAction && mi(he.playAction, Nt) }))()),
          ),
        s.$$.dirty[0] & 16384 && Se(t(33, (De = R.subscribeToUpdates(m)))),
        s.$$.dirty[0] & 32768 && t(77, (ge = k ? It.MusicVideo : It.Song)),
        (s.$$.dirty[0] & 16384) | (s.$$.dirty[2] & 8421888) &&
          t(29, (Te = D && (t(71, (Ne = R.get(m, ge))) === null || Ne === void 0 ? void 0 : Ne.inFavorites))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 3072) &&
          t(
            32,
            (de =
              t(73, (st = t(72, (it = he?.impressionMetrics)) === null || it === void 0 ? void 0 : it.fields)) !==
                null && st !== void 0
                ? st
                : {}),
          ),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 12288) &&
          t(
            31,
            (Ie =
              t(
                75,
                (nt = t(74, (lt = he?.impressionMetrics)) === null || lt === void 0 ? void 0 : lt.clickLocationFields),
              ) !== null && nt !== void 0
                ? nt
                : {}),
          ),
        s.$$.dirty[0] & 33568784 &&
          t(
            28,
            (oe = (() => {
              let M = p;
              return (
                Ht &&
                  (M = me.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: M,
                    contentB: as(
                      X.map((Ue) => Ue.title),
                      Re.language,
                      me.t,
                    ),
                  })),
                g &&
                  (M = me.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: me.t("ASE.Web.Music.Explicit"),
                    contentB: M,
                  })),
                M
              );
            })()),
          ));
    }),
    [
      he,
      Xt,
      xt,
      er,
      Ht,
      tr,
      bt,
      vt,
      rr,
      ir,
      sr,
      g,
      X,
      p,
      m,
      k,
      T,
      n,
      Q,
      u,
      r,
      te,
      A,
      i,
      l,
      me,
      Qt,
      ot,
      oe,
      Te,
      V,
      Ie,
      de,
      De,
      le,
      H,
      Pe,
      G,
      x,
      fe,
      ne,
      q,
      Z,
      N,
      F,
      y,
      w,
      E,
      a,
      we,
      ee,
      Ee,
      We,
      ht,
      Yt,
      $t,
      Ei,
      Ci,
      Di,
      Ti,
      Pi,
      Li,
      Nt,
      gt,
      pt,
      jt,
      Oe,
      C,
      re,
      ae,
      ye,
      Ne,
      it,
      st,
      lt,
      nt,
      Rt,
      ge,
      ie,
      W,
      _e,
      ke,
      K,
      o,
      c,
      D,
      $e,
      Ae,
      Le,
      Mi,
      Fi,
      Vi,
      $i,
      Ri,
      Ni,
    ]
  );
}
class Dn extends Fe {
  constructor(e) {
    (super(),
      Ve(
        this,
        e,
        Cn,
        En,
        je,
        {
          item: 0,
          containerItemDescriptors: 62,
          rowIndex: 1,
          isFirst: 63,
          isLast: 64,
          isSelected: 2,
          isLastSelected: 3,
          showSecondColumn: 4,
          showThirdColumn: 5,
          showFourthColumn: 6,
          hasReactions: 7,
          socialProfiles: 65,
          dropEnabled: 8,
          shouldShowRemoveFromPlaylist: 9,
          containerArtwork: 10,
        },
        null,
        [-1, -1, -1, -1],
      ));
  }
}
const { Boolean: Tn } = Is;
function Ur(s, e, t) {
  const r = s.slice();
  return ((r[60] = e[t]), (r[62] = t), r);
}
function Kr(s, e, t) {
  const r = s.slice();
  return ((r[63] = e[t]), r);
}
function Pn(s) {
  let e,
    t = ze(s[15]),
    r = [];
  for (let i = 0; i < t.length; i += 1) r[i] = Gr(Kr(s, t, i));
  return {
    c() {
      e = I("div");
      for (let i = 0; i < r.length; i += 1) r[i].c();
      this.h();
    },
    l(i) {
      e = S(i, "DIV", { class: !0, "aria-hidden": !0, role: !0, "data-testid": !0 });
      var l = v(e);
      for (let n = 0; n < r.length; n += 1) r[n].l(l);
      (l.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list__header svelte-88ilm8"),
        f(e, "aria-hidden", "true"),
        f(e, "role", "row"),
        f(e, "data-testid", "tracklist-column-header"),
        $(e, "songs-list__header--is-visible", s[8]));
    },
    m(i, l) {
      P(i, e, l);
      for (let n = 0; n < r.length; n += 1) r[n] && r[n].m(e, null);
    },
    p(i, l) {
      if (l[0] & 32784) {
        t = ze(i[15]);
        let n;
        for (n = 0; n < t.length; n += 1) {
          const a = Kr(i, t, n);
          r[n] ? r[n].p(a, l) : ((r[n] = Gr(a)), r[n].c(), r[n].m(e, null));
        }
        for (; n < r.length; n += 1) r[n].d(1);
        r.length = t.length;
      }
      l[0] & 256 && $(e, "songs-list__header--is-visible", i[8]);
    },
    i: se,
    o: se,
    d(i) {
      (i && d(e), Ft(r, i));
    },
  };
}
function Ln(s) {
  let e, t;
  return (
    (e = new Wl({ props: { header: s[0].header.item } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i[0] & 1 && (l.header = r[0].header.item), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Gr(s) {
  let e,
    t,
    r = s[63].headerText + "",
    i,
    l,
    n,
    a,
    o;
  return {
    c() {
      ((e = I("div")), (t = I("div")), (i = pe(r)), (n = J()), this.h());
    },
    l(c) {
      e = S(c, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var u = v(e);
      t = S(u, "DIV", { class: !0 });
      var m = v(t);
      ((i = be(m, r)), m.forEach(d), (n = Y(u)), u.forEach(d), this.h());
    },
    h() {
      (f(
        t,
        "class",
        (l = "songs-list__header-col-label songs-list__header-col-label--" + s[63].key + " svelte-88ilm8"),
      ),
        f(
          e,
          "class",
          (a =
            "songs-list__col songs-list__col--" +
            s[63].key +
            " songs-list__header-col songs-list__header-col--" +
            s[63].key +
            " svelte-88ilm8"),
        ),
        f(e, "role", "columnheader"),
        f(e, "data-testid", (o = "tracklist-column-header-" + s[63].key)),
        $(e, "songs-list__reactions", s[63].key === "quaternary" && s[4]));
    },
    m(c, u) {
      (P(c, e, u), b(e, t), b(t, i), b(e, n));
    },
    p(c, u) {
      (u[0] & 32768 && r !== (r = c[63].headerText + "") && ve(i, r),
        u[0] & 32768 &&
          l !== (l = "songs-list__header-col-label songs-list__header-col-label--" + c[63].key + " svelte-88ilm8") &&
          f(t, "class", l),
        u[0] & 32768 &&
          a !==
            (a =
              "songs-list__col songs-list__col--" +
              c[63].key +
              " songs-list__header-col songs-list__header-col--" +
              c[63].key +
              " svelte-88ilm8") &&
          f(e, "class", a),
        u[0] & 32768 && o !== (o = "tracklist-column-header-" + c[63].key) && f(e, "data-testid", o),
        u[0] & 32784 && $(e, "songs-list__reactions", c[63].key === "quaternary" && c[4]));
    },
    d(c) {
      c && d(e);
    },
  };
}
function Zr(s) {
  let e;
  return {
    c() {
      ((e = I("div")), this.h());
    },
    l(t) {
      ((e = S(t, "DIV", { class: !0 })), v(e).forEach(d), this.h());
    },
    h() {
      f(e, "class", "reorder-placeholder svelte-88ilm8");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && d(e);
    },
  };
}
function Jr(s) {
  let e;
  return {
    c() {
      ((e = I("div")), this.h());
    },
    l(t) {
      ((e = S(t, "DIV", { class: !0 })), v(e).forEach(d), this.h());
    },
    h() {
      f(e, "class", "reorder-placeholder svelte-88ilm8");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && d(e);
    },
  };
}
function Yr(s) {
  let e,
    t,
    r,
    i,
    l,
    n = s[62] === 0 && s[11] && s[1] === -1 && Zr();
  function a(...c) {
    return s[46](s[60], s[62], ...c);
  }
  ((t = new Dn({
    props: {
      item: s[60],
      rowIndex: s[62],
      showSecondColumn: s[7],
      showThirdColumn: s[6],
      showFourthColumn: s[5],
      hasReactions: s[4],
      containerItemDescriptors: s[19],
      containerArtwork: s[24],
      socialProfiles: s[13],
      shouldShowRemoveFromPlaylist: s[17],
      isFirst: s[62] === 0,
      isLast: s[62] === s[3].length - 1,
      dropEnabled: s[14] && !s[11],
      isSelected: s[12].selectedItems.includes(s[60]),
      isLastSelected: s[12].selectedItems[s[12].selectedItems.length - 1] === s[60],
    },
  })),
    t.$on("contextMenuActionComplete", s[45]),
    t.$on("drop", a),
    t.$on("removeFromPlaylist", s[47]));
  let o = s[11] && s[1] === s[62] && Jr();
  return {
    c() {
      (n && n.c(), (e = J()), j(t.$$.fragment), (r = J()), o && o.c(), (i = He()));
    },
    l(c) {
      (n && n.l(c), (e = Y(c)), z(t.$$.fragment, c), (r = Y(c)), o && o.l(c), (i = He()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), B(t, c, u), P(c, r, u), o && o.m(c, u), P(c, i, u), (l = !0));
    },
    p(c, u) {
      ((s = c),
        s[62] === 0 && s[11] && s[1] === -1
          ? n || ((n = Zr()), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null)));
      const m = {};
      (u[0] & 8 && (m.item = s[60]),
        u[0] & 128 && (m.showSecondColumn = s[7]),
        u[0] & 64 && (m.showThirdColumn = s[6]),
        u[0] & 32 && (m.showFourthColumn = s[5]),
        u[0] & 16 && (m.hasReactions = s[4]),
        u[0] & 524288 && (m.containerItemDescriptors = s[19]),
        u[0] & 16777216 && (m.containerArtwork = s[24]),
        u[0] & 8192 && (m.socialProfiles = s[13]),
        u[0] & 131072 && (m.shouldShowRemoveFromPlaylist = s[17]),
        u[0] & 8 && (m.isLast = s[62] === s[3].length - 1),
        u[0] & 18432 && (m.dropEnabled = s[14] && !s[11]),
        u[0] & 4104 && (m.isSelected = s[12].selectedItems.includes(s[60])),
        u[0] & 4104 && (m.isLastSelected = s[12].selectedItems[s[12].selectedItems.length - 1] === s[60]),
        t.$set(m),
        s[11] && s[1] === s[62] ? o || ((o = Jr()), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), (o = null)));
    },
    i(c) {
      l || (_(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      (h(t.$$.fragment, c), (l = !1));
    },
    d(c) {
      (c && (d(e), d(r), d(i)), n && n.d(c), O(t, c), o && o.d(c));
    },
  };
}
function Mn(s) {
  let e, t, r, i, l, n, a, o, c;
  const u = [Ln, Pn],
    m = [];
  function k(w, A) {
    return (A[0] & 1 && (t = null), t == null && (t = !!wi(w[0].header)), t ? 0 : 1);
  }
  ((r = k(s, [-1, -1, -1])), (i = m[r] = u[r](s)));
  let E = ze(s[3]),
    g = [];
  for (let w = 0; w < E.length; w += 1) g[w] = Yr(Ur(s, E, w));
  const T = (w) =>
    h(g[w], 1, 1, () => {
      g[w] = null;
    });
  return {
    c() {
      ((e = I("div")), i.c(), (l = J()));
      for (let w = 0; w < g.length; w += 1) g[w].c();
      this.h();
    },
    l(w) {
      e = S(w, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var A = v(e);
      (i.l(A), (l = Y(A)));
      for (let y = 0; y < g.length; y += 1) g[y].l(A);
      (A.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list svelte-88ilm8"),
        f(e, "role", "grid"),
        f(e, "data-testid", "tracklist"),
        $(e, "songs-list--header-is-visible", s[8]),
        $(e, "songs-list--has-composer-header", s[16]),
        $(e, "songs-list--has-preview", s[23]),
        $(e, "songs-list--album", s[9]),
        $(e, "songs-list--playlist", s[10]),
        $(e, "songs-list--compilation", s[18]));
    },
    m(w, A) {
      (P(w, e, A), m[r].m(e, null), b(e, l));
      for (let y = 0; y < g.length; y += 1) g[y] && g[y].m(e, null);
      ((a = !0),
        o ||
          ((c = [
            Me(window, "keydown", s[31]),
            Me(e, "keydown", s[28].handleKeydown),
            et(
              (n = qt.call(null, e, {
                dragData: { items: s[21], indexedItems: s[20], containerDescriptor: s[2] },
                badgeCount: s[21].length,
                dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
              })),
            ),
          ]),
          (o = !0)));
    },
    p(w, A) {
      let y = r;
      if (
        ((r = k(w, A)),
        r === y
          ? m[r].p(w, A)
          : (ce(),
            h(m[y], 1, 1, () => {
              m[y] = null;
            }),
            ue(),
            (i = m[r]),
            i ? i.p(w, A) : ((i = m[r] = u[r](w)), i.c()),
            _(i, 1),
            i.m(e, l)),
        A[0] & 1762294014)
      ) {
        E = ze(w[3]);
        let p;
        for (p = 0; p < E.length; p += 1) {
          const F = Ur(w, E, p);
          g[p] ? (g[p].p(F, A), _(g[p], 1)) : ((g[p] = Yr(F)), g[p].c(), _(g[p], 1), g[p].m(e, null));
        }
        for (ce(), p = E.length; p < g.length; p += 1) T(p);
        ue();
      }
      (n &&
        Ye(n.update) &&
        A[0] & 3145732 &&
        n.update.call(null, {
          dragData: { items: w[21], indexedItems: w[20], containerDescriptor: w[2] },
          badgeCount: w[21].length,
          dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
        }),
        (!a || A[0] & 256) && $(e, "songs-list--header-is-visible", w[8]),
        (!a || A[0] & 65536) && $(e, "songs-list--has-composer-header", w[16]),
        (!a || A[0] & 8388608) && $(e, "songs-list--has-preview", w[23]),
        (!a || A[0] & 512) && $(e, "songs-list--album", w[9]),
        (!a || A[0] & 1024) && $(e, "songs-list--playlist", w[10]),
        (!a || A[0] & 262144) && $(e, "songs-list--compilation", w[18]));
    },
    i(w) {
      if (!a) {
        _(i);
        for (let A = 0; A < E.length; A += 1) _(g[A]);
        a = !0;
      }
    },
    o(w) {
      (h(i), (g = g.filter(Tn)));
      for (let A = 0; A < g.length; A += 1) h(g[A]);
      a = !1;
    },
    d(w) {
      (w && d(e), m[r].d(), Ft(g, w), (o = !1), dt(c));
    },
  };
}
function Fn(s, e, t) {
  let r,
    i,
    l,
    n,
    a,
    o,
    c,
    u,
    m,
    k,
    E,
    g,
    T,
    w,
    A,
    y,
    p,
    F,
    te,
    N,
    Z,
    q,
    K,
    ie,
    ne,
    X,
    fe,
    ke,
    x,
    G,
    _e,
    Pe,
    H = se,
    le = () => (H(), (H = Dt(k, (R) => t(44, (Pe = R)))), k);
  s.$$.on_destroy.push(() => H());
  var W, Q, V, De;
  const ge = Symbol(),
    Te = ct(),
    { state: de } = _t();
  Ce(s, de, (R) => t(49, (_e = R)));
  const Ie = Ze();
  Ce(s, Ie, (R) => t(43, (x = R)));
  const oe = Tt(),
    me = Lt(),
    U = Mt();
  Ce(s, U, (R) => t(12, (G = R)));
  const we = tt(),
    D = Pt("<TrackList>"),
    L = ps();
  let { section: Se } = e;
  const $e = Et();
  let Ae = null,
    Le = null;
  const Oe = () => {
    const R = U.getItems(ge),
      ee = G.selectedItems.map((Ee) => ({ index: R.indexOf(Ee), id: at(Ee) }));
    if ((U.resetItems(ge), U.clearSelection(), U.addItems(ge, o), ee)) {
      const Ee = ee
        .map(({ index: Re, id: We }) => (at(o[Re]) === We ? o[Re] : o.find((ht) => at(ht) === We)))
        .filter(Boolean);
      U.selectMultiple(Ee);
    }
  };
  function C() {
    m === It.Album &&
      o &&
      setTimeout(() => {
        var R;
        Kt([Se], (R = _e.user) === null || R === void 0 ? void 0 : R.subscriberType, oe, D, we, Te, !0);
      }, 250);
  }
  let re = new Map();
  async function ae(R, ee, { detail: Ee }) {
    if (a && Se.reorderAction && "indexedItems" in Ee.data && Ot(Ee.data.containerDescriptor) === Ot(r)) {
      let Re = Ee.dropTarget === ft.Top ? ee - 1 : ee;
      (ye(Re), await me(Ss(Se.reorderAction, Re, Ee.data)), Ne());
    }
  }
  function ye(R) {
    t(1, (Ae = R));
  }
  async function Ne() {
    (clearTimeout(Le), t(1, (Ae = null)), (Le = null), await Es());
  }
  const it = (R) => {
    R.key === "a" && (R.metaKey || R.ctrlKey) && (R.preventDefault(), U.selectAll());
  };
  ut(() => {
    (U.resetItems(ge), Te.unsubscribeFromUpdates(u), bs());
  });
  const st = (R) => {
      $e("catalogActionOnTrackListItem", R.detail);
    },
    lt = (R, ee, ...Ee) => ae(R, ee, ...Ee),
    nt = async (R) => {
      const { itemId: ee } = R.detail,
        Ee = As({ operationType: Cs.RemoveFromPlaylist, id: ee, containerId: Ot(r) });
      await oe.dispatch(Ee);
      const Re = Ds(ee);
      (await oe.perform(Re),
        await oe.perform(
          wt({ kind: "libraryItemsDeleted", metadata: { id: ee, type: "library-songs", isLibraryContentId: !0 } }),
        ));
    };
  return (
    (s.$$set = (R) => {
      "section" in R && t(0, (Se = R.section));
    }),
    (s.$$.update = () => {
      if (
        (s.$$.dirty[0] & 1 && t(2, (r = Se.containerContentDescriptor)),
        s.$$.dirty[0] & 1 && t(24, (i = Se.containerArtwork)),
        s.$$.dirty[0] & 1 && t(38, (l = !!Se.canEdit)),
        s.$$.dirty[0] & 2 && t(11, (n = Ae != null)),
        (s.$$.dirty[0] & 2049) | (s.$$.dirty[1] & 128) &&
          t(14, (a = l && oe.isUserInHomeStorefront() && !!Se.reorderAction && !n)),
        s.$$.dirty[0] & 1 && t(3, (o = Se.items || [])),
        s.$$.dirty[0] & 8 && t(23, (c = o.some((R) => R.isPreviewMode))),
        s.$$.dirty[0] & 8 && Oe(),
        s.$$.dirty[0] & 4 && t(36, (u = !!r && Zt({ contentDescriptor: r }))),
        s.$$.dirty[0] & 4 && t(41, (m = r?.kind)),
        s.$$.dirty[1] & 32 && le(t(22, (k = Te.subscribeToUpdates(u)))),
        s.$$.dirty[1] & 9250 &&
          t(42, (E = Pe && !!m && (t(32, (W = Te.get(u, m))) === null || W === void 0 ? void 0 : W.inLibrary))),
        s.$$.dirty[1] & 2048 && C(),
        s.$$.dirty[0] & 4096 &&
          t(
            40,
            (g = (() =>
              G.currentMouseTarget
                ? G.selectedItems.includes(G.currentMouseTarget)
                  ? G.selectedItems
                  : [G.currentMouseTarget]
                : [])()),
          ),
        s.$$.dirty[1] & 512 && t(21, (T = g.map((R) => R?.contentDescriptor))),
        (s.$$.dirty[0] & 8) | (s.$$.dirty[1] & 512) &&
          t(20, (w = g.map((R) => ({ index: o.indexOf(R), item: R.contentDescriptor })))),
        s.$$.dirty[0] & 8 && t(19, (A = o.map((R) => R.contentDescriptor))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[1] & 4) &&
          t(37, (y = t(33, (Q = Se.header)) === null || Q === void 0 ? void 0 : Q.item)),
        s.$$.dirty[0] & 8 &&
          t(
            39,
            (p = (() => {
              var R;
              const ee = (R = o[0]) === null || R === void 0 ? void 0 : R.layoutStyle;
              return typeof ee == "string" ? ee : ee?.kind;
            })()),
          ),
        s.$$.dirty[1] & 256 && t(9, (F = p === "albumTrackList")),
        s.$$.dirty[1] & 256 && t(18, (te = p === "compilationTrackList")),
        s.$$.dirty[1] & 256 && t(10, (N = p === "playlistTrackList")),
        (s.$$.dirty[0] & 1025) | (s.$$.dirty[1] & 136) &&
          t(
            17,
            (Z =
              t(34, (V = vs(Se.containerContentDescriptor) && N && l && oe.isUserInHomeStorefront())) !== null &&
              V !== void 0
                ? V
                : !1),
          ),
        s.$$.dirty[0] & 1 && t(8, (q = ks(Se.header))),
        s.$$.dirty[0] & 1 && t(16, (K = wi(Se.header))),
        s.$$.dirty[0] & 520 &&
          t(
            7,
            (ie =
              o.some((R) => {
                var ee;
                return (ee = R.subtitleLinks) === null || ee === void 0 ? void 0 : ee.length;
              }) && !F),
          ),
        s.$$.dirty[0] & 8 &&
          t(
            6,
            (ne = o.some((R) => {
              var ee;
              return (ee = R.tertiaryLinks) === null || ee === void 0 ? void 0 : ee.length;
            })),
          ),
        s.$$.dirty[1] & 64 && t(5, (X = !!y?.fourthColumnText)),
        s.$$.dirty[0] & 8 &&
          t(
            4,
            (fe = o.some((R) => {
              var ee;
              return (ee = R.reactions) === null || ee === void 0 ? void 0 : ee.length;
            })),
          ),
        (s.$$.dirty[0] & 480) | (s.$$.dirty[1] & 4160) &&
          t(
            15,
            (ke = (() => {
              const R = [];
              let ee;
              return (
                q && (ee = y),
                ie &&
                  R.push({
                    key: "secondary",
                    headerText: ee?.secondColumnText || x.t("ASE.Web.Music.SongsListHeaders.artist"),
                  }),
                ne &&
                  R.push({
                    key: "tertiary",
                    headerText: ee?.thirdColumnText || x.t("ASE.Web.Music.SongsListHeaders.album"),
                  }),
                X && R.push({ key: "quaternary", headerText: ee?.fourthColumnText }),
                [
                  { headerText: "", key: "favorite-or-popular" },
                  { key: "song", headerText: ee?.firstColumnText || x.t("ASE.Web.Music.SongsListHeaders.song") },
                  ...R,
                  { headerText: x.t("ASE.Web.Music.SongsListHeaders.time"), key: "time" },
                ]
              );
            })()),
          ),
        (s.$$.dirty[0] & 25) | (s.$$.dirty[1] & 16))
      ) {
        if (!(t(35, (De = Se.collaborators)) === null || De === void 0) && De.length)
          ws(new Map(Se.collaborators.map((R) => [R.id, R])));
        else if (L) {
          let R = o
            .map((Ee) => {
              var Re, We;
              return (We =
                (Re = Ee.socialProfileContentDescriptor) === null || Re === void 0 ? void 0 : Re.identifiers) ===
                null || We === void 0
                ? void 0
                : We.socialProfileID;
            })
            .filter((Ee) => Ee != null);
          const ee = new Set(R);
          ee.size > 0 &&
            L.fetchProfilesFromIds(Array.from(ee)).then((Ee) => {
              t(13, (re = new Map(Ee.map((Re) => [Re.id, Re]))));
            });
        }
        fe && o.length && ys(new Map(o.map((R) => [R.contentDescriptor.identifiers.storeAdamID, R.reactions])));
      }
    }),
    [
      Se,
      Ae,
      r,
      o,
      fe,
      X,
      ne,
      ie,
      q,
      F,
      N,
      n,
      G,
      re,
      a,
      ke,
      K,
      Z,
      te,
      A,
      w,
      T,
      k,
      c,
      i,
      de,
      Ie,
      oe,
      U,
      $e,
      ae,
      it,
      W,
      Q,
      V,
      De,
      u,
      y,
      l,
      p,
      g,
      m,
      E,
      x,
      Pe,
      st,
      lt,
      nt,
    ]
  );
}
class Vn extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Fn, Mn, je, { section: 0 }, null, [-1, -1, -1]));
  }
}
function $n(s) {
  let e, t;
  return (
    (e = new Ts({ props: { initials: ar(s[0].name) } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i & 1 && (l.initials = ar(r[0].name)), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Rn(s) {
  let e, t;
  return (
    (e = new fi({ props: { artwork: s[0].artwork, forceFullWidth: !1, profile: "track-lockup", alt: "" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i & 1 && (l.artwork = r[0].artwork), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Nn(s) {
  let e = s[0] + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 1 && e !== (e = r[0] + "") && ve(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function Qr(s) {
  let e, t, r;
  return (
    (t = new yi({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (z(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "chevron-container svelte-16yxrct");
      },
      m(i, l) {
        (P(i, e, l), B(t, e, null), (r = !0));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), O(t));
      },
    }
  );
}
function Hn(s) {
  let e,
    t,
    r,
    i,
    l,
    n,
    a,
    o = s[0].name + "",
    c,
    u,
    m,
    k,
    E,
    g;
  const T = [Rn, $n],
    w = [];
  function A(p, F) {
    return p[0].artwork ? 0 : 1;
  }
  ((r = A(s)),
    (i = w[r] = T[r](s)),
    (k = new rt({
      props: {
        items: s[0].roleNames,
        translateFn: s[1].t,
        $$slots: { default: [Nn, ({ item: p }) => ({ 0: p }), ({ item: p }) => (p ? 1 : 0)] },
        $$scope: { ctx: s },
      },
    })));
  let y = s[0].segue && Qr();
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        i.c(),
        (l = J()),
        (n = I("div")),
        (a = I("div")),
        (c = pe(o)),
        (u = J()),
        (m = I("div")),
        j(k.$$.fragment),
        (E = J()),
        y && y.c(),
        this.h());
    },
    l(p) {
      e = S(p, "DIV", { class: !0 });
      var F = v(e);
      t = S(F, "DIV", { class: !0 });
      var te = v(t);
      (i.l(te), te.forEach(d), (l = Y(F)), (n = S(F, "DIV", { class: !0 })));
      var N = v(n);
      a = S(N, "DIV", { class: !0 });
      var Z = v(a);
      ((c = be(Z, o)), Z.forEach(d), (u = Y(N)), (m = S(N, "DIV", { class: !0 })));
      var q = v(m);
      (z(k.$$.fragment, q), q.forEach(d), N.forEach(d), (E = Y(F)), y && y.l(F), F.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "artist-artwork svelte-16yxrct"),
        f(a, "class", "artist-name svelte-16yxrct"),
        f(m, "class", "artist-roles svelte-16yxrct"),
        f(n, "class", "artist-metadata svelte-16yxrct"),
        f(e, "class", "credit-lockup__container svelte-16yxrct"));
    },
    m(p, F) {
      (P(p, e, F),
        b(e, t),
        w[r].m(t, null),
        b(e, l),
        b(e, n),
        b(n, a),
        b(a, c),
        b(n, u),
        b(n, m),
        B(k, m, null),
        b(e, E),
        y && y.m(e, null),
        (g = !0));
    },
    p(p, F) {
      let te = r;
      ((r = A(p)),
        r === te
          ? w[r].p(p, F)
          : (ce(),
            h(w[te], 1, 1, () => {
              w[te] = null;
            }),
            ue(),
            (i = w[r]),
            i ? i.p(p, F) : ((i = w[r] = T[r](p)), i.c()),
            _(i, 1),
            i.m(t, null)),
        (!g || F & 1) && o !== (o = p[0].name + "") && ve(c, o));
      const N = {};
      (F & 1 && (N.items = p[0].roleNames),
        F & 2 && (N.translateFn = p[1].t),
        F & 9 && (N.$$scope = { dirty: F, ctx: p }),
        k.$set(N),
        p[0].segue
          ? y
            ? F & 1 && _(y, 1)
            : ((y = Qr()), y.c(), _(y, 1), y.m(e, null))
          : y &&
            (ce(),
            h(y, 1, 1, () => {
              y = null;
            }),
            ue()));
    },
    i(p) {
      g || (_(i), _(k.$$.fragment, p), _(y), (g = !0));
    },
    o(p) {
      (h(i), h(k.$$.fragment, p), h(y), (g = !1));
    },
    d(p) {
      (p && d(e), w[r].d(), O(k), y && y.d());
    },
  };
}
function jn(s) {
  let e, t;
  return (
    (e = new Je({ props: { action: s[0].segue, $$slots: { default: [Hn] }, $$scope: { ctx: s } } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, [i]) {
        const l = {};
        (i & 1 && (l.action = r[0].segue), i & 11 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Bn(s, e, t) {
  let r,
    { item: i } = e;
  const l = Ze();
  return (
    Ce(s, l, (n) => t(1, (r = n))),
    (s.$$set = (n) => {
      "item" in n && t(0, (i = n.item));
    }),
    [i, r, l]
  );
}
class On extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Bn, jn, je, { item: 0 }));
  }
}
function Xr(s, e, t) {
  const r = s.slice();
  return ((r[25] = e[t]), r);
}
function xr(s) {
  let e,
    t = s[25] + "",
    r;
  return {
    c() {
      ((e = I("p")), (r = pe(t)), this.h());
    },
    l(i) {
      e = S(i, "P", { class: !0 });
      var l = v(e);
      ((r = be(l, t)), l.forEach(d), this.h());
    },
    h() {
      f(e, "class", "credits__lyrics-snippet-line svelte-15ugb9h");
    },
    m(i, l) {
      (P(i, e, l), b(e, r));
    },
    p(i, l) {
      l & 32 && t !== (t = i[25] + "") && ve(r, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function zn(s) {
  let e =
      (s[4] ? s[1].t("ASE.Web.Music.View.Full.Lyrics") : s[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "",
    t,
    r,
    i,
    l;
  return (
    (i = new yi({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((t = pe(e)), (r = J()), j(i.$$.fragment));
      },
      l(n) {
        ((t = be(n, e)), (r = Y(n)), z(i.$$.fragment, n));
      },
      m(n, a) {
        (P(n, t, a), P(n, r, a), B(i, n, a), (l = !0));
      },
      p(n, a) {
        (!l || a & 18) &&
          e !==
            (e =
              (n[4]
                ? n[1].t("ASE.Web.Music.View.Full.Lyrics")
                : n[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "") &&
          ve(t, e);
      },
      i(n) {
        l || (_(i.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(i.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (d(t), d(r)), O(i, n));
      },
    }
  );
}
function ei(s) {
  let e, t, r, i, l;
  return (
    (t = new Hs({ props: { maskSvg: js, inverted: s[8], maskWidth: 22, maskHeight: 22 } })),
    {
      c() {
        ((e = I("button")), j(t.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "BUTTON", { class: !0 });
        var a = v(e);
        (z(t.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        f(e, "class", "lyrics-contextual-button svelte-15ugb9h");
      },
      m(n, a) {
        (P(n, e, a), B(t, e, null), (r = !0), i || ((l = Me(e, "click", s[18])), (i = !0)));
      },
      p(n, a) {
        const o = {};
        (a & 256 && (o.inverted = n[8]), t.$set(o));
      },
      i(n) {
        r || (_(t.$$.fragment, n), (r = !0));
      },
      o(n) {
        (h(t.$$.fragment, n), (r = !1));
      },
      d(n) {
        (n && d(e), O(t), (i = !1), l());
      },
    }
  );
}
function qn(s) {
  let e,
    t,
    r = s[3] && ei(s);
  return {
    c() {
      ((e = I("div")), r && r.c(), this.h());
    },
    l(i) {
      e = S(i, "DIV", { slot: !0, class: !0 });
      var l = v(e);
      (r && r.l(l), l.forEach(d), this.h());
    },
    h() {
      (f(e, "slot", "button-container"), f(e, "class", "button-container svelte-15ugb9h"));
    },
    m(i, l) {
      (P(i, e, l), r && r.m(e, null), (t = !0));
    },
    p(i, l) {
      i[3]
        ? r
          ? (r.p(i, l), l & 8 && _(r, 1))
          : ((r = ei(i)), r.c(), _(r, 1), r.m(e, null))
        : r &&
          (ce(),
          h(r, 1, 1, () => {
            r = null;
          }),
          ue());
    },
    i(i) {
      t || (_(r), (t = !0));
    },
    o(i) {
      (h(r), (t = !1));
    },
    d(i) {
      (i && d(e), r && r.d());
    },
  };
}
function Wn(s) {
  let e, t, r, i, l;
  return {
    c() {
      ((e = I("div")), (t = I("amp-lyrics")), this.h());
    },
    l(n) {
      e = S(n, "DIV", { slot: !0 });
      var a = v(e);
      ((t = S(a, "AMP-LYRICS", {
        "static-lyrics": !0,
        "catalog-id": !0,
        "show-translation": !0,
        "show-pronunciation": !0,
        "enable-translations": !0,
        class: !0,
      })),
        v(t).forEach(d),
        a.forEach(d),
        this.h());
    },
    h() {
      (Qe(t, "static-lyrics", !0),
        Qe(t, "catalog-id", (r = s[0].songId)),
        Qe(t, "show-translation", s[8]),
        Qe(t, "show-pronunciation", !1),
        Qe(t, "enable-translations", !0),
        Qe(t, "class", "svelte-15ugb9h"),
        f(e, "slot", "content"));
    },
    m(n, a) {
      (P(n, e, a), b(e, t), i || ((l = Me(t, "lyricsReady", s[13])), (i = !0)));
    },
    p(n, a) {
      (a & 1 && r !== (r = n[0].songId) && Qe(t, "catalog-id", r), a & 256 && Qe(t, "show-translation", n[8]));
    },
    d(n) {
      (n && d(e), (i = !1), l());
    },
  };
}
function Un(s) {
  let e, t;
  return (
    (e = new Rs({
      props: {
        title: s[7],
        subtitle: s[6],
        translateFn: s[1].t,
        $$slots: { content: [Wn], "button-container": [qn] },
        $$scope: { ctx: s },
      },
    })),
    e.$on("close", function () {
      Ye(s[2].close) && s[2].close.apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        s = r;
        const l = {};
        (i & 128 && (l.title = s[7]),
          i & 64 && (l.subtitle = s[6]),
          i & 2 && (l.translateFn = s[1].t),
          i & 268435721 && (l.$$scope = { dirty: i, ctx: s }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Kn(s) {
  let e,
    t,
    r,
    i,
    l,
    n,
    a,
    o = ze(s[5]),
    c = [];
  for (let m = 0; m < o.length; m += 1) c[m] = xr(Xr(s, o, m));
  ((r = new Ps({ props: { buttonStyle: "textButton", $$slots: { default: [zn] }, $$scope: { ctx: s } } })),
    r.$on("buttonClick", s[11]));
  let u = { modalTriggerElement: Gn, $$slots: { default: [Un] }, $$scope: { ctx: s } };
  return (
    (n = new Ls({ props: u })),
    s[19](n),
    n.$on("close", s[12]),
    {
      c() {
        e = I("div");
        for (let m = 0; m < c.length; m += 1) c[m].c();
        ((t = J()), j(r.$$.fragment), (i = J()), (l = I("div")), j(n.$$.fragment), this.h());
      },
      l(m) {
        e = S(m, "DIV", { class: !0, "data-testid": !0 });
        var k = v(e);
        for (let g = 0; g < c.length; g += 1) c[g].l(k);
        ((t = Y(k)), z(r.$$.fragment, k), k.forEach(d), (i = Y(m)), (l = S(m, "DIV", { class: !0 })));
        var E = v(l);
        (z(n.$$.fragment, E), E.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "credits__lyrics-snippet svelte-15ugb9h"),
          f(e, "data-testid", "credits__lyrics-snippet"),
          f(l, "class", "credits__lyrics-modal svelte-15ugb9h"));
      },
      m(m, k) {
        P(m, e, k);
        for (let E = 0; E < c.length; E += 1) c[E] && c[E].m(e, null);
        (b(e, t), B(r, e, null), P(m, i, k), P(m, l, k), B(n, l, null), (a = !0));
      },
      p(m, [k]) {
        if (k & 32) {
          o = ze(m[5]);
          let T;
          for (T = 0; T < o.length; T += 1) {
            const w = Xr(m, o, T);
            c[T] ? c[T].p(w, k) : ((c[T] = xr(w)), c[T].c(), c[T].m(e, t));
          }
          for (; T < c.length; T += 1) c[T].d(1);
          c.length = o.length;
        }
        const E = {};
        (k & 268435474 && (E.$$scope = { dirty: k, ctx: m }), r.$set(E));
        const g = {};
        (k & 268435919 && (g.$$scope = { dirty: k, ctx: m }), n.$set(g));
      },
      i(m) {
        a || (_(r.$$.fragment, m), _(n.$$.fragment, m), (a = !0));
      },
      o(m) {
        (h(r.$$.fragment, m), h(n.$$.fragment, m), (a = !1));
      },
      d(m) {
        (m && (d(e), d(i), d(l)), Ft(c, m), O(r), s[19](null), O(n));
      },
    }
  );
}
let Gn = null;
function Zn(s, e, t) {
  let r, i, l, n, a, o, c, u;
  Ce(s, cr, (X) => t(8, (o = X)));
  var m, k;
  let { section: E } = e;
  const g = Ze();
  Ce(s, g, (X) => t(1, (u = X)));
  const { state: T } = _t();
  Ce(s, T, (X) => t(17, (c = X)));
  const w = Tt(),
    A = tt();
  let y,
    p = null;
  const F = () => {
      if (a) (y.showModal(), N(), q && (p = Date.now()));
      else {
        const X = Ms({ type: Fs.Open, activePath: Vs.subscribe });
        w.perform(X);
      }
    },
    te = () => {
      if (p) {
        const X = Date.now() - p;
        (Ns(w, q, A.storefront, o, X), (p = null));
      }
    },
    N = () => {
      (w.recordCustomMetricsEvent({
        actionType: "navigate",
        targetType: "button",
        targetId: "lyrics",
        eventType: "click",
      }),
        w.recordCustomMetricsEvent({ eventType: "page", pageDisplayType: "cardView", pageType: "Lyrics" }));
    };
  let Z = !1,
    q = null;
  function K(X) {
    (t(3, (Z = X.detail.hasTranslations)),
      (q = { lyricsId: X.detail.lyricsId, language: X.detail.language, catalogId: X.detail.catalogId }));
  }
  const ie = () => $s(cr, (o = !o), o);
  function ne(X) {
    Ut[X ? "unshift" : "push"](() => {
      ((y = X), t(2, y));
    });
  }
  return (
    (s.$$set = (X) => {
      "section" in X && t(14, (E = X.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 16384 && t(0, (r = E.items[0])),
        s.$$.dirty & 1 && t(7, (i = r.name)),
        s.$$.dirty & 3 &&
          t(
            6,
            (l = u.t("ASE.Web.Music.ContentA.Middot.ContentB.Middot.ContentC", {
              contentA: r.albumName,
              contentB: r.artistName,
              contentC: r.releaseDate,
            })),
          ),
        s.$$.dirty & 32769 &&
          t(
            5,
            (n =
              t(15, (m = r.lyricsExcerpt)) === null || m === void 0
                ? void 0
                : m.split(`
`)),
          ),
        s.$$.dirty & 196608 &&
          t(4, (a = vi(t(16, (k = c?.user)) === null || k === void 0 ? void 0 : k.subscriberType))));
    }),
    [r, u, y, Z, a, n, l, i, o, g, T, F, te, K, E, m, k, c, ie, ne]
  );
}
class Jn extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Zn, Kn, je, { section: 14 }));
  }
}
function Yn(s) {
  let e, t;
  return (
    (e = new Bs({ props: { itemComponent: s[1], section: s[0] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i & 2 && (l.itemComponent = r[1]), i & 1 && (l.section = r[0]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Qn(s) {
  let e, t;
  return (
    (e = new Jn({ props: { section: s[0] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, i) {
        (B(e, r, i), (t = !0));
      },
      p(r, i) {
        const l = {};
        (i & 1 && (l.section = r[0]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Xn(s) {
  let e,
    t,
    r = (s[2] ? s[3].t("ASE.Web.Music.MediaComponents.Lyrics.Header") : s[0]?.title) + "",
    i,
    l,
    n,
    a,
    o,
    c;
  const u = [Qn, Yn],
    m = [];
  function k(E, g) {
    return E[2] ? 0 : 1;
  }
  return (
    (a = k(s)),
    (o = m[a] = u[a](s)),
    {
      c() {
        ((e = I("section")), (t = I("h2")), (i = pe(r)), (l = J()), (n = I("div")), o.c(), this.h());
      },
      l(E) {
        e = S(E, "SECTION", { class: !0, "data-testid": !0 });
        var g = v(e);
        t = S(g, "H2", { class: !0, "data-testid": !0 });
        var T = v(t);
        ((i = be(T, r)), T.forEach(d), (l = Y(g)), (n = S(g, "DIV", { class: !0 })));
        var w = v(n);
        (o.l(w), w.forEach(d), g.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "cell-title svelte-1tqjbs7"),
          f(t, "data-testid", "cell-title"),
          f(n, "class", "cell-details svelte-1tqjbs7"),
          f(e, "class", "cell-container svelte-1tqjbs7"),
          f(e, "data-testid", "cell-container"));
      },
      m(E, g) {
        (P(E, e, g), b(e, t), b(t, i), b(e, l), b(e, n), m[a].m(n, null), (c = !0));
      },
      p(E, [g]) {
        (!c || g & 13) &&
          r !== (r = (E[2] ? E[3].t("ASE.Web.Music.MediaComponents.Lyrics.Header") : E[0]?.title) + "") &&
          ve(i, r);
        let T = a;
        ((a = k(E)),
          a === T
            ? m[a].p(E, g)
            : (ce(),
              h(m[T], 1, 1, () => {
                m[T] = null;
              }),
              ue(),
              (o = m[a]),
              o ? o.p(E, g) : ((o = m[a] = u[a](E)), o.c()),
              _(o, 1),
              o.m(n, null)));
      },
      i(E) {
        c || (_(o), (c = !0));
      },
      o(E) {
        (h(o), (c = !1));
      },
      d(E) {
        (E && d(e), m[a].d());
      },
    }
  );
}
const xn = "lyric-details";
function eo(s, e, t) {
  let r,
    i,
    l,
    { section: n } = e;
  const a = Ze();
  return (
    Ce(s, a, (o) => t(3, (l = o))),
    (s.$$set = (o) => {
      "section" in o && t(0, (n = o.section));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(2, (r = n.id === xn));
    }),
    t(1, (i = On)),
    [n, i, r, l, a]
  );
}
class to extends Fe {
  constructor(e) {
    (super(), Ve(this, e, eo, Xn, je, { section: 0 }));
  }
}
function ti(s, e, t) {
  const r = s.slice();
  return ((r[2] = e[t]), r);
}
function ri(s) {
  let e,
    t,
    r = ze(s[0].items),
    i = [];
  for (let n = 0; n < r.length; n += 1) i[n] = ii(ti(s, r, n));
  const l = (n) =>
    h(i[n], 1, 1, () => {
      i[n] = null;
    });
  return {
    c() {
      e = I("ul");
      for (let n = 0; n < i.length; n += 1) i[n].c();
      this.h();
    },
    l(n) {
      e = S(n, "UL", { class: !0, "data-testid": !0 });
      var a = v(e);
      for (let o = 0; o < i.length; o += 1) i[o].l(a);
      (a.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "calendar-events-list svelte-57psqt"), f(e, "data-testid", "events-list"));
    },
    m(n, a) {
      P(n, e, a);
      for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
      t = !0;
    },
    p(n, a) {
      if (a & 1) {
        r = ze(n[0].items);
        let o;
        for (o = 0; o < r.length; o += 1) {
          const c = ti(n, r, o);
          i[o] ? (i[o].p(c, a), _(i[o], 1)) : ((i[o] = ii(c)), i[o].c(), _(i[o], 1), i[o].m(e, null));
        }
        for (ce(), o = r.length; o < i.length; o += 1) l(o);
        ue();
      }
    },
    i(n) {
      if (!t) {
        for (let a = 0; a < r.length; a += 1) _(i[a]);
        t = !0;
      }
    },
    o(n) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1) h(i[a]);
      t = !1;
    },
    d(n) {
      (n && d(e), Ft(i, n));
    },
  };
}
function ii(s) {
  let e, t, r, i;
  return (
    (t = new Os({ props: { item: s[2], badgeTheme: "light" } })),
    {
      c() {
        ((e = I("li")), j(t.$$.fragment), (r = J()), this.h());
      },
      l(l) {
        e = S(l, "LI", { class: !0, "data-testid": !0 });
        var n = v(e);
        (z(t.$$.fragment, n), (r = Y(n)), n.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "calendar-events-list-item svelte-57psqt"), f(e, "data-testid", "events-list-item"));
      },
      m(l, n) {
        (P(l, e, n), B(t, e, null), b(e, r), (i = !0));
      },
      p(l, n) {
        const a = {};
        (n & 1 && (a.item = l[2]), t.$set(a));
      },
      i(l) {
        i || (_(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        (h(t.$$.fragment, l), (i = !1));
      },
      d(l) {
        (l && d(e), O(t));
      },
    }
  );
}
function ro(s) {
  let e,
    t,
    r = s[1].length && ri(s);
  return {
    c() {
      (r && r.c(), (e = He()));
    },
    l(i) {
      (r && r.l(i), (e = He()));
    },
    m(i, l) {
      (r && r.m(i, l), P(i, e, l), (t = !0));
    },
    p(i, [l]) {
      i[1].length
        ? r
          ? (r.p(i, l), l & 2 && _(r, 1))
          : ((r = ri(i)), r.c(), _(r, 1), r.m(e.parentNode, e))
        : r &&
          (ce(),
          h(r, 1, 1, () => {
            r = null;
          }),
          ue());
    },
    i(i) {
      t || (_(r), (t = !0));
    },
    o(i) {
      (h(r), (t = !1));
    },
    d(i) {
      (i && d(e), r && r.d(i));
    },
  };
}
function io(s, e, t) {
  let r,
    { section: i } = e;
  return (
    (s.$$set = (l) => {
      "section" in l && t(0, (i = l.section));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(1, (r = i.items));
    }),
    [i, r]
  );
}
class so extends Fe {
  constructor(e) {
    (super(), Ve(this, e, io, ro, je, { section: 0 }));
  }
}
function lo(s) {
  let e = s[3].warn("unsupported list section:", s[1], s[0]) + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 3 && e !== (e = r[3].warn("unsupported list section:", r[1], r[0]) + "") && ve(t, e);
    },
    i: se,
    o: se,
    d(r) {
      r && d(t);
    },
  };
}
function no(s) {
  let e, t, r;
  var i = s[2];
  function l(n, a) {
    return { props: { section: n[0] } };
  }
  return (
    i && (e = ur(i, l(s))),
    {
      c() {
        (e && j(e.$$.fragment), (t = He()));
      },
      l(n) {
        (e && z(e.$$.fragment, n), (t = He()));
      },
      m(n, a) {
        (e && B(e, n, a), P(n, t, a), (r = !0));
      },
      p(n, a) {
        if (a & 4 && i !== (i = n[2])) {
          if (e) {
            ce();
            const o = e;
            (h(o.$$.fragment, 1, 0, () => {
              O(o, 1);
            }),
              ue());
          }
          i ? ((e = ur(i, l(n))), j(e.$$.fragment), _(e.$$.fragment, 1), B(e, t.parentNode, t)) : (e = null);
        } else if (i) {
          const o = {};
          (a & 1 && (o.section = n[0]), e.$set(o));
        }
      },
      i(n) {
        r || (e && _(e.$$.fragment, n), (r = !0));
      },
      o(n) {
        (e && h(e.$$.fragment, n), (r = !1));
      },
      d(n) {
        (n && d(t), e && O(e, n));
      },
    }
  );
}
function oo(s) {
  let e, t, r, i;
  const l = [no, lo],
    n = [];
  function a(o, c) {
    return o[2] ? 0 : 1;
  }
  return (
    (e = a(s)),
    (t = n[e] = l[e](s)),
    {
      c() {
        (t.c(), (r = He()));
      },
      l(o) {
        (t.l(o), (r = He()));
      },
      m(o, c) {
        (n[e].m(o, c), P(o, r, c), (i = !0));
      },
      p(o, [c]) {
        let u = e;
        ((e = a(o)),
          e === u
            ? n[e].p(o, c)
            : (ce(),
              h(n[u], 1, 1, () => {
                n[u] = null;
              }),
              ue(),
              (t = n[e]),
              t ? t.p(o, c) : ((t = n[e] = l[e](o)), t.c()),
              _(t, 1),
              t.m(r.parentNode, r)));
      },
      i(o) {
        i || (_(t), (i = !0));
      },
      o(o) {
        (h(t), (i = !1));
      },
      d(o) {
        (o && d(r), n[e].d(o));
      },
    }
  );
}
function ao(s, e, t) {
  let r, i;
  const l = Pt("<ListSection>");
  let { section: n } = e;
  const a = {
    libraryArtists: wl,
    librarySongs: Rl,
    trackLockup: Vn,
    songDetailItemLockup: to,
    calendarEventLockup: so,
  };
  return (
    (s.$$set = (o) => {
      "section" in o && t(0, (n = o.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 1 && t(1, (r = n.itemKind)), s.$$.dirty & 2 && t(2, (i = a[r])));
    }),
    [n, r, i, l]
  );
}
class ho extends Fe {
  constructor(e) {
    (super(), Ve(this, e, ao, oo, je, { section: 0 }));
  }
}
export { ho as default };
