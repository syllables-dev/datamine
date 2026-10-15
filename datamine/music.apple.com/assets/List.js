import {
  S as Fe,
  i as Ve,
  n as He,
  I as ze,
  e as I,
  s as Z,
  a as S,
  b as v,
  g as d,
  d as J,
  h as f,
  t as V,
  j as Oe,
  k as P,
  l as b,
  o as Me,
  aX as Hi,
  p as et,
  u as ce,
  aZ as si,
  a_ as ji,
  w as ue,
  b5 as Qe,
  r as _,
  v as h,
  y as dt,
  z as Et,
  a$ as mt,
  aW as yt,
  aY as li,
  X as Ut,
  H as le,
  aN as ni,
  aO as oi,
  aP as ai,
  aQ as ci,
  b6 as At,
  b7 as qe,
  b8 as Ke,
  b9 as Ge,
  ba as Xe,
  bb as Ct,
  bc as xe,
  c as B,
  f as q,
  m as O,
  x as z,
  aT as Bi,
  aS as lr,
  bd as Oi,
  be as ct,
  V as ut,
  bf as at,
  E as ve,
  F as ke,
  G as we,
  bg as Dt,
  a1 as It,
  bh as zi,
  bi as qi,
  P as De,
  bj as Wi,
  bk as Tt,
  U as Ze,
  b2 as Pt,
  bl as tt,
  bm as _t,
  bn as Ui,
  b0 as St,
  bo as wt,
  J as Ne,
  bp as Ki,
  bq as Kt,
  br as Gi,
  bs as Zi,
  bt as Ji,
  bu as ui,
  D as fi,
  bv as Lt,
  bw as di,
  bx as Mt,
  by as Gt,
  bz as Zt,
  bA as mi,
  bB as _i,
  bC as Jt,
  bD as hi,
  bE as Qi,
  bF as Yi,
  bG as qt,
  b3 as nr,
  bH as Xi,
  bI as gi,
  bJ as pi,
  bK as xi,
  bL as es,
  bM as rt,
  bN as Je,
  a6 as bi,
  bO as ts,
  bP as rs,
  bQ as ft,
  bR as is,
  bS as ss,
  bT as ls,
  bU as vi,
  bV as ns,
  bW as os,
  bX as as,
  aj as cs,
  al as us,
  bY as fs,
  bZ as ki,
  b_ as ds,
  b$ as kt,
  c0 as ms,
  c1 as _s,
  c2 as or,
  c3 as hs,
  c4 as gs,
  c5 as Wt,
  K as Ft,
  c6 as ps,
  c7 as bs,
  c8 as vs,
  c9 as ks,
  ca as wi,
  cb as ws,
  cc as ys,
  cd as Is,
  ai as Ot,
  ce as Ss,
  cf as Es,
  cg as As,
  ch as Cs,
  ci as Ds,
  aU as yi,
  cj as Ts,
  ck as ar,
  a5 as Ps,
  W as Ls,
  cl as cr,
  cm as Ms,
  cn as Fs,
  co as Vs,
  cp as $s,
  cq as Rs,
  cr as Ns,
  cs as Ye,
  ct as Hs,
  cu as js,
  cv as Bs,
  cw as Os,
  cx as ur,
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
  return { c: le, l: le, m: le, p: le, i: le, o: le, d: le };
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
        ((t = I("div")), c.block.c(), (i = Z()), this.h());
      },
      l(u) {
        t = S(u, "DIV", { class: !0, "data-testid": !0, role: !0 });
        var m = v(t);
        (c.block.l(m), (i = J(m)), m.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "virtual-row svelte-zsv6m4"),
          f(t, "data-testid", "virtual-row"),
          f(t, "role", (l = e[7] ? "rowgroup" : null)),
          Oe(t, "contain", "strict"),
          Oe(t, "top", n),
          Oe(t, "min-height", a),
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
          m[0] & 2308 && n !== (n = `${e[55]}px`) && Oe(t, "top", n),
          m[0] & 4 && a !== (a = `${e[2]}px`) && Oe(t, "min-height", a));
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
      L = A(p);
    l.set(L, (i[y] = _r(L, p)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")), (r = I("div")));
      for (let y = 0; y < i.length; y += 1) i[y].c();
      ((u = Z()), (m = I("div")), this.h());
    },
    l(y) {
      e = S(y, "DIV", { class: !0, "data-testid": !0, tabindex: !0 });
      var p = v(e);
      t = S(p, "DIV", { class: !0, id: !0 });
      var L = v(t);
      r = S(L, "DIV", { class: !0, "data-testid": !0, role: !0, "aria-rowcount": !0 });
      var te = v(r);
      for (let H = 0; H < i.length; H += 1) i[H].l(te);
      (te.forEach(d),
        (u = J(L)),
        (m = S(L, "DIV", { class: !0 })),
        v(m).forEach(d),
        L.forEach(d),
        p.forEach(d),
        this.h());
    },
    h() {
      (f(r, "class", "virtual-rows svelte-zsv6m4"),
        f(r, "data-testid", "virtual-rows"),
        f(r, "role", (n = s[7] ? "grid" : null)),
        f(r, "aria-rowcount", (a = s[7] ? s[1] : null)),
        V(r, "row-zebra-striping", s[5]),
        Oe(r, "min-height", o),
        Oe(r, "--rowHeight", c),
        f(m, "class", "svelte-zsv6m4"),
        V(m, "bottom-spacer-hidden", s[3]),
        Oe(m, "height", "10px"),
        f(t, "class", "scrollable-container svelte-zsv6m4"),
        f(t, "id", "scrollable-page-override"),
        Oe(t, "contain", "layout"),
        f(e, "class", "container svelte-zsv6m4"),
        f(e, "data-testid", "container"),
        f(e, "tabindex", "0"),
        V(e, "scrollable-container-constrained-width", s[4]));
    },
    m(y, p) {
      (P(y, e, p), b(e, t), b(t, r));
      for (let L = 0; L < i.length; L += 1) i[L] && i[L].m(r, null);
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
        (!E || p[0] & 32) && V(r, "row-zebra-striping", y[5]),
        p[0] & 512 && o !== (o = `${y[9]}px`) && Oe(r, "min-height", o),
        p[0] & 4 && c !== (c = `${y[2]}px`) && Oe(r, "--rowHeight", c),
        (!E || p[0] & 8) && V(m, "bottom-spacer-hidden", y[3]),
        k && Qe(k.update) && p[0] & 64 && k.update.call(null, y[6]),
        (!E || p[0] & 16) && V(e, "scrollable-container-constrained-width", y[4]));
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
function Qs(s, e, t) {
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
    { amountToFetch: L } = e,
    { bottomSpacerHidden: te = !1 } = e,
    { bufferHeight: H } = e,
    { fetchIntentFn: K } = e,
    { selectedItemId: j = null } = e,
    { log: Q } = e,
    { jet: x } = e,
    { overrideKeydown: he = null } = e,
    { restrainContainerWidth: Y = !1 } = e,
    { rowZebraStriping: fe = !1 } = e,
    { use: ye = [] } = e,
    { allowCountUpdates: R = !1 } = e,
    { useManualPagination: ne = !0 } = e,
    { pageMetadata: _e = null } = e,
    { setAriaAttributes: oe = !1 } = e,
    X = 0,
    ie,
    G = 0,
    $ = 0,
    W;
  const Ie = (C, re, pe) => C.slice(re, pe).map((Se) => A[Se] ?? be(Se)),
    Ae = (C, re, pe) => {
      re > 0 &&
        pe > 0 &&
        (C.slice(re, o).forEach((Se) => {
          A[Se] || be(Se);
        }),
        C.slice(c, pe).forEach((Se) => {
          A[Se] || be(Se);
        }));
    },
    se = (C, re, pe) => (C === "top" ? Math.floor : Math.ceil)(re / pe),
    be = async (C) => {
      const re = Math.floor(C / L),
        pe = C % L;
      if (!W[re]) {
        const Se = re * L;
        W[re] = (async () => {
          await W?.[re - 1];
          const { items: Re } = await ge(Se);
          return Re;
        })();
      }
      try {
        const Re = (await W[re])[pe];
        return (Re && t(18, (A[C] = Re), A), Re);
      } catch {
        return (delete W[re], null);
      }
    },
    ge = async (C) => {
      if (ne)
        try {
          const re = K({ offset: C, limit: L }),
            { items: pe, next: Se, total: Re } = await x.dispatch(re);
          return (w("fetchComplete", { items: pe, offset: C }), { items: pe, next: Se, total: Re });
        } catch (re) {
          return (Q.error("Loading Paginated Items Failed", re), {});
        }
      else if (r) {
        const re = K({ path: r, limit: L });
        try {
          const pe = await x.dispatch(re);
          r = pe.next;
          const { items: Se } = pe;
          return (w("fetchComplete", { items: Se, offset: C }), { items: Se, next: r });
        } catch (pe) {
          return (Q.error("Loading Paginated Items Failed", pe), {});
        }
      } else
        R && (Q.warn("No more pages to fetch, updating scroll list total count."), w("updateItemsCount", A.length));
    },
    ae = (C) => {
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
    de = (C) => {
      const { height: re } = C.detail;
      t(28, (G = re));
    },
    U = () => {
      t(29, ($ = ie?.scrollTop));
    };
  function D(C, re) {
    const { item: pe } = C.detail,
      { id: Se } = pe;
    (t(0, (j = Se)), (X = re), w("select", { id: j, scrollTop: ie.scrollTop }));
  }
  const F = (C) => (re) => D(re, C),
    Le = { shift: !1, tab: !1 },
    Ce = (C, re) => {
      C === "Shift" ? (Le.shift = re) : C === "Tab" && (Le.tab = re);
    },
    Pe = () => Le.shift && Le.tab;
  function Te(C) {
    (C.key === "Tab" || C.key === "Shift") && (C.preventDefault(), Ce(C.key, !1));
  }
  function je(C) {
    if (he) {
      he(C);
      return;
    }
    (C.key === "ArrowUp" || C.key === "ArrowDown") && C.preventDefault();
    const re = C.key === "Tab" && C.shiftKey && X === 0,
      pe = C.key === "Tab" && !C.shiftKey && X === A.length - 1,
      Se = re || pe;
    switch ((C.key === "Tab" && !Se && C.preventDefault(), Ce(C.key, !0), C.key)) {
      case "ArrowUp":
        X = Math.max(X - 1, 0);
        break;
      case "ArrowDown":
        X = Math.min(X + 1, A.length - 1);
        break;
      case "Tab":
        Pe() ? (X = Math.max(X - 1, 0)) : (X = Math.min(X + 1, A.length - 1));
        break;
    }
    A[X]?.id && (t(0, (j = A[X].id)), w("select", { id: j, scrollTop: ie.scrollTop }));
  }
  mt(() => {
    const C = L;
    if (!(y <= C))
      if (ne && y <= hr) {
        const re = Math.min(y, hr);
        for (let pe = C; pe < re; pe++) be(pe);
      } else be(C);
  });
  function Be(C) {
    Ut[C ? "unshift" : "push"](() => {
      ((ie = C), t(10, ie));
    });
  }
  return (
    (s.$$set = (C) => {
      ("items" in C && t(18, (A = C.items)),
        "itemCount" in C && t(1, (y = C.itemCount)),
        "itemHeight" in C && t(2, (p = C.itemHeight)),
        "amountToFetch" in C && t(19, (L = C.amountToFetch)),
        "bottomSpacerHidden" in C && t(3, (te = C.bottomSpacerHidden)),
        "bufferHeight" in C && t(20, (H = C.bufferHeight)),
        "fetchIntentFn" in C && t(21, (K = C.fetchIntentFn)),
        "selectedItemId" in C && t(0, (j = C.selectedItemId)),
        "log" in C && t(22, (Q = C.log)),
        "jet" in C && t(23, (x = C.jet)),
        "overrideKeydown" in C && t(24, (he = C.overrideKeydown)),
        "restrainContainerWidth" in C && t(4, (Y = C.restrainContainerWidth)),
        "rowZebraStriping" in C && t(5, (fe = C.rowZebraStriping)),
        "use" in C && t(6, (ye = C.use)),
        "allowCountUpdates" in C && t(25, (R = C.allowCountUpdates)),
        "useManualPagination" in C && t(26, (ne = C.useManualPagination)),
        "pageMetadata" in C && t(27, (_e = C.pageMetadata)),
        "setAriaAttributes" in C && t(7, (oe = C.setAriaAttributes)),
        "$$scope" in C && t(37, (T = C.$$scope)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 134217728 && (r = _e?.next),
        s.$$.dirty[0] & 786434 &&
          (W = zs(A, L).map((C, re) => {
            const Se = (re + 1) * L ? L : y % L;
            if (!(C.length < Se)) return new Promise((Re) => Re(C));
          })),
        s.$$.dirty[0] & 2 && t(33, (i = [...Array(y).keys()])),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 4) && t(9, (l = p * i.length)),
        s.$$.dirty[0] & 537919488 && t(36, (n = Math.max(0, $ - H))),
        s.$$.dirty[0] & 806355456 && t(35, (a = Math.min($ + G + H, l))),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 32) && t(8, (o = se("top", n, p))),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 16) && t(30, (c = se("bottom", a, p))),
        (s.$$.dirty[0] & 1073742080) | (s.$$.dirty[1] & 4) && t(11, (u = Ie(i, o, c))),
        s.$$.dirty[0] & 269484032 && t(34, (m = G + 2 * H)),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 40) && t(32, (k = se("top", Math.max(0, n - m), p))),
        (s.$$.dirty[0] & 516) | (s.$$.dirty[1] & 24) && t(31, (E = se("bottom", Math.min(a + m, l), p))),
        s.$$.dirty[1] & 7 && Ae(i, k, E));
    }),
    [
      j,
      y,
      p,
      te,
      Y,
      fe,
      ye,
      oe,
      o,
      l,
      ie,
      u,
      ae,
      de,
      U,
      F,
      Te,
      je,
      A,
      L,
      H,
      K,
      Q,
      x,
      he,
      R,
      ne,
      _e,
      G,
      $,
      c,
      E,
      k,
      i,
      m,
      a,
      n,
      T,
      g,
      Be,
    ]
  );
}
class Ii extends Fe {
  constructor(e) {
    (super(),
      Ve(
        this,
        e,
        Qs,
        Js,
        He,
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
function Ys(s, e) {
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
    i: le,
    o: le,
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
      },
      p: le,
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        z(e, r);
      },
    }
  );
}
function rl(s) {
  let e, t, r, i, l, n;
  return {
    c() {
      ((e = I("picture")), (t = I("source")), (i = Z()), (l = I("img")), this.h());
    },
    l(a) {
      e = S(a, "PICTURE", {});
      var o = v(e);
      ((t = S(o, "SOURCE", { srcset: !0, type: !0 })),
        (i = J(o)),
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
    i: le,
    o: le,
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
          V(e, "is-selected", s[0]));
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
          (!i || c & 1) && V(e, "is-selected", o[0]));
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
    (super(), Ve(this, e, sl, il, He, { artwork: 3, isSelected: 0 }));
  }
}
function br(s) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = ve(s[4])), this.h());
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var i = v(e);
      ((t = ke(i, s[4])), i.forEach(d), this.h());
    },
    h() {
      f(e, "class", "artist-name svelte-yegxkw");
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i & 16 && we(t, r[4]);
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
        ((e = I("div")), B(t.$$.fragment), (r = Z()), u && u.c(), (i = Z()), B(l.$$.fragment), this.h());
      },
      l(m) {
        e = S(m, "DIV", { "data-testid": !0, "aria-selected": !0, role: !0, tabindex: !0, class: !0 });
        var k = v(e);
        (q(t.$$.fragment, k), (r = J(k)), u && u.l(k), (i = J(k)), q(l.$$.fragment, k), k.forEach(d), this.h());
      },
      h() {
        (f(e, "data-testid", "library-artists-component"),
          f(e, "aria-selected", s[0]),
          f(e, "role", "option"),
          f(e, "tabindex", "0"),
          f(e, "class", "svelte-yegxkw"),
          V(e, "is-selected", s[0]));
      },
      m(m, k) {
        (P(m, e, k),
          O(t, e, null),
          b(e, r),
          u && u.m(e, null),
          b(e, i),
          O(l, e, null),
          (a = !0),
          o || ((c = [et((n = Ys.call(null, e, s[0]))), Me(e, "click", s[10])]), (o = !0)));
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
          n && Qe(n.update) && k & 1 && n.update.call(null, m[0]),
          (!a || k & 1) && V(e, "is-selected", m[0]));
      },
      i(m) {
        a || (_(t.$$.fragment, m), _(l.$$.fragment, m), (a = !0));
      },
      o(m) {
        (h(t.$$.fragment, m), h(l.$$.fragment, m), (a = !1));
      },
      d(m) {
        (m && d(e), z(t), u && u.d(), z(l), (o = !1), dt(c));
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
    c = le,
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
    (super(), Ve(this, e, nl, ll, He, { isSelected: 0, item: 1 }));
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
    i: le,
    o: le,
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
      Qe(s[30]) && s[30].apply(this, arguments);
    }),
    {
      c() {
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, slot: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "artist-placeholder svelte-1rh5vsj"), f(e, "slot", "placeholder"));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
      },
      p: le,
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), z(t));
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
        ((e = Ne()), i.block.c());
      },
      l(l) {
        ((e = Ne()), i.block.l(l));
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
  return { c: le, l: le, m: le, p: le, i: le, o: le, d: le };
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
          B(i.$$.fragment),
          (l = Z()),
          (n = I("span")),
          (o = ve(a)),
          (c = Z()),
          B(u.$$.fragment),
          this.h());
      },
      l(g) {
        e = S(g, "ARTICLE", { "aria-label": !0, class: !0, "data-testid": !0 });
        var T = v(e);
        t = S(T, "DIV", { class: !0, "data-testid": !0 });
        var w = v(t);
        r = S(w, "BUTTON", { class: !0, "data-testid": !0 });
        var A = v(r);
        (q(i.$$.fragment, A), (l = J(A)), (n = S(A, "SPAN", {})));
        var y = v(n);
        ((o = ke(y, a)),
          y.forEach(d),
          A.forEach(d),
          w.forEach(d),
          (c = J(T)),
          q(u.$$.fragment, T),
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
          O(i, r, null),
          b(r, l),
          b(r, n),
          b(n, o),
          b(e, c),
          O(u, e, null),
          (m = !0),
          k || ((E = Me(r, "click", s[11])), (k = !0)));
      },
      p(g, T) {
        (!m || T[0] & 32) && a !== (a = g[5].t("ASE.Web.Music.SideBar.Artists") + "") && we(o, a);
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
        (g && d(e), z(i), z(u), (k = !1), E());
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
      },
      p: le,
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (h(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        z(e, r);
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
      ((e = I("div")), (t = I("div")), B(r.$$.fragment), (i = Z()), n && n.c(), this.h());
    },
    l(a) {
      e = S(a, "DIV", { class: !0, "data-testid": !0 });
      var o = v(e);
      t = S(o, "DIV", { class: !0, "data-testid": !0 });
      var c = v(t);
      (q(r.$$.fragment, c), c.forEach(d), (i = J(o)), n && n.l(o), o.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "artist-list-container svelte-1rh5vsj"),
        f(t, "data-testid", "artist-list-container"),
        f(e, "class", "artists-container svelte-1rh5vsj"),
        f(e, "data-testid", "library-artists-component"));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), O(r, t, null), b(e, i), n && n.m(e, null), (l = !0));
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
      (a && d(e), z(r), n && n.d());
    },
  };
}
const pl = 54,
  bl = 500,
  vl = 100;
function kl(s, e, t) {
  let r, i, l, n, a, o, c, u, m;
  (De(s, vr, (R) => t(23, (c = R))), De(s, Wi, (R) => t(24, (u = R))));
  var k, E, g, T;
  let { section: w } = e;
  const A = Tt(),
    y = Ze();
  De(s, y, (R) => t(5, (m = R)));
  const p = Pt("<Artists>"),
    L = ct(),
    te = tt(),
    { state: H } = _t();
  De(s, H, (R) => t(22, (o = R)));
  let K = {},
    j,
    Q;
  (Ui(() => {
    Q && j && (Q.scrollTop = j);
  }),
    mt(() => {
      ((Q = document.getElementById("scrollable-page-override")),
        St.set(!0),
        he(r, 0),
        !(u === "xsmall" || u === "small") &&
          !l &&
          ((j = 0),
          A.perform(
            wt({ kind: "selectedArtistIdChanged", metadata: { id: r[0].id, historyOperation: "replaceState" } }),
          )));
    }),
    ut(() => {
      St.set(!1);
    }));
  async function x(R) {
    if (!R) return { items: [] };
    const ne = Ki({ id: R });
    return A.dispatch(ne);
  }
  function he(R, ne) {
    (R.forEach((_e, oe) => {
      const { id: X } = _e;
      typeof K[X] > "u" && t(18, (K[X] = { index: oe + ne, artist: _e }), K);
    }),
      t(18, (K = Object.assign({}, K))));
  }
  function Y() {
    A.perform(wt({ kind: "selectedArtistIdChanged", metadata: { id: null, historyOperation: "pushState" } }));
  }
  function fe(R) {
    const { id: ne, scrollTop: _e } = R.detail;
    (vr.set(_e),
      (j = c),
      A.perform(wt({ kind: "selectedArtistIdChanged", metadata: { id: ne, historyOperation: "pushState" } })));
  }
  async function ye(R) {
    var ne;
    const { items: _e, offset: oe } = R.detail;
    (he(_e, oe),
      await Kt([{ items: _e }], (ne = o.user) === null || ne === void 0 ? void 0 : ne.subscriberType, A, p, te, L));
  }
  return (
    (s.$$set = (R) => {
      "section" in R && t(0, (w = R.section));
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
              t(17, (T = t(16, (g = K[l])) === null || g === void 0 ? void 0 : g.artist)) !== null && T !== void 0
                ? T
                : null),
          ),
        s.$$.dirty[0] & 524288 && t(3, (a = n?.name || null)));
    }),
    [w, l, r, a, i, m, A, y, p, H, x, Y, fe, ye, k, E, g, T, K, n]
  );
}
class wl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, kl, gl, He, { section: 0 }, null, [-1, -1]));
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
      ((t = I("div")), (r = I("span")), (l = ve(i)), (n = Z()), this.h());
    },
    l(a) {
      t = S(a, "DIV", { role: !0, class: !0 });
      var o = v(t);
      r = S(o, "SPAN", { class: !0, "data-testid": !0 });
      var c = v(r);
      ((l = ke(c, i)), c.forEach(d), (n = J(o)), o.forEach(d), this.h());
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
      ((e = a), o & 1 && i !== (i = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "") && we(l, i));
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
    i: le,
    o: le,
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
    De(s, i, (n) => t(0, (r = n))),
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
    (super(), Ve(this, e, Il, yl, He, {}));
  }
}
function El(s) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = ve(s[14])), this.h());
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var i = v(e);
      ((t = ke(i, s[14])), i.forEach(d), this.h());
    },
    h() {
      f(e, "class", "library-track-name__text svelte-1cq9ch0");
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i[0] & 16384 && we(t, r[14]);
    },
    i: le,
    o: le,
    d(r) {
      r && d(e);
    },
  };
}
function Al(s) {
  let e, t, r, i, l, n, a;
  return (
    (n = new Qi({ props: { explicitAriaText: s[17].t("ASE.Web.Music.Explicit") } })),
    {
      c() {
        ((e = I("span")), (t = I("span")), (r = ve(s[14])), (i = Z()), (l = I("span")), B(n.$$.fragment), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { class: !0 });
        var c = v(e);
        t = S(c, "SPAN", { class: !0 });
        var u = v(t);
        ((r = ke(u, s[14])), u.forEach(d), (i = J(c)), (l = S(c, "SPAN", { class: !0 })));
        var m = v(l);
        (q(n.$$.fragment, m), m.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "library-track-name__text svelte-1cq9ch0"),
          f(l, "class", "explicit-badge svelte-1cq9ch0"),
          f(e, "class", "library-track-name__explicit-wrapper svelte-1cq9ch0"));
      },
      m(o, c) {
        (P(o, e, c), b(e, t), b(t, r), b(e, i), b(e, l), O(n, l, null), (a = !0));
      },
      p(o, c) {
        (!a || c[0] & 16384) && we(r, o[14]);
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
        (o && d(e), z(n));
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "library-track-name__play-button-wrapper artwork-overlay svelte-1cq9ch0"),
          f(e, "data-testid", "track-play-button"));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
      },
    }
  );
}
function Cl(s) {
  let e, t, r, i, l, n, a, o, c, u, m, k, E, g, T, w, A, y, p, L, te, H, K, j, Q, x, he, Y, fe, ye, R;
  ((r = new ui({
    props: { isFavorited: s[6], platter: !1, enabled: !0, title: s[17].t("ASE.Web.Music.VO.FavoriteHelpText") },
  })),
    r.$on("toggle", s[23]));
  const ne = [Al, El],
    _e = [];
  function oe(G, $) {
    return G[2] ? 0 : 1;
  }
  ((a = oe(s)),
    (o = _e[a] = ne[a](s)),
    (m = new fi({ props: { artwork: s[15], forceFullWidth: !1, profile: "track-list" } })));
  let X = s[5] && Ir(s),
    ie = s[0].contentDescriptor && Sr(s);
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        B(r.$$.fragment),
        (i = Z()),
        (l = I("div")),
        (n = I("div")),
        o.c(),
        (c = Z()),
        (u = I("div")),
        (k = I("div")),
        B(m.$$.fragment),
        (E = Z()),
        X && X.c(),
        (g = Z()),
        (T = I("div")),
        ie && ie.c(),
        (w = Z()),
        (A = I("div")),
        (y = I("div")),
        (p = ve(s[13])),
        (L = Z()),
        (te = I("div")),
        (H = I("div")),
        (K = ve(s[12])),
        (j = Z()),
        (Q = I("div")),
        (x = I("div")),
        (he = ve(s[11])),
        this.h());
    },
    l(G) {
      e = S(G, "DIV", { "data-testid": !0, class: !0, "data-current-mouse-target": !0 });
      var $ = v(e);
      t = S($, "DIV", { role: !0, class: !0, "data-testid": !0 });
      var W = v(t);
      (q(r.$$.fragment, W), W.forEach(d), (i = J($)), (l = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var Ie = v(l);
      n = S(Ie, "DIV", { class: !0 });
      var Ae = v(n);
      (o.l(Ae), (c = J(Ae)), (u = S(Ae, "DIV", { class: !0 })));
      var se = v(u);
      k = S(se, "DIV", { style: !0 });
      var be = v(k);
      (q(m.$$.fragment, be), (E = J(se)), X && X.l(se), se.forEach(d), (g = J(Ae)), (T = S(Ae, "DIV", { class: !0 })));
      var ge = v(T);
      (ie && ie.l(ge),
        ge.forEach(d),
        Ae.forEach(d),
        Ie.forEach(d),
        (w = J($)),
        (A = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var ae = v(A);
      y = S(ae, "DIV", { class: !0 });
      var de = v(y);
      ((p = ke(de, s[13])),
        de.forEach(d),
        ae.forEach(d),
        (L = J($)),
        (te = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var U = v(te);
      H = S(U, "DIV", { class: !0 });
      var D = v(H);
      ((K = ke(D, s[12])),
        D.forEach(d),
        U.forEach(d),
        (j = J($)),
        (Q = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var F = v(Q);
      x = S(F, "DIV", { class: !0 });
      var Le = v(x);
      ((he = ke(Le, s[11])), Le.forEach(d), F.forEach(d), $.forEach(d), this.h());
    },
    h() {
      (f(t, "role", "cell"),
        f(t, "class", "library-track__badge svelte-1cq9ch0"),
        f(t, "data-testid", "library-track__badge"),
        Oe(k, "display", "contents"),
        Oe(k, "--override-placeholder-bg-color", "var(--genericJoeColor)"),
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
        f(H, "class", "svelte-1cq9ch0"),
        f(te, "role", "cell"),
        f(te, "class", "library-track__album svelte-1cq9ch0"),
        f(te, "data-testid", "library-track__album"),
        f(x, "class", "svelte-1cq9ch0"),
        f(Q, "role", "cell"),
        f(Q, "class", "library-track__time svelte-1cq9ch0"),
        f(Q, "data-testid", "library-track__time"),
        f(e, "data-testid", "library-track"),
        f(e, "class", "library-track svelte-1cq9ch0"),
        f(e, "data-current-mouse-target", (Y = s[3].currentMouseTarget === s[0])),
        V(e, "selected", s[16]),
        V(e, "library-track--disabled", s[1]),
        V(e, "is-playing", s[9]),
        V(e, "is-paused", s[8]),
        V(e, "is-loading", s[10]));
    },
    m(G, $) {
      (P(G, e, $),
        b(e, t),
        O(r, t, null),
        b(e, i),
        b(e, l),
        b(l, n),
        _e[a].m(n, null),
        b(n, c),
        b(n, u),
        b(u, k),
        O(m, k, null),
        b(u, E),
        X && X.m(u, null),
        b(n, g),
        b(n, T),
        ie && ie.m(T, null),
        b(e, w),
        b(e, A),
        b(A, y),
        b(y, p),
        b(e, L),
        b(e, te),
        b(te, H),
        b(H, K),
        b(e, j),
        b(e, Q),
        b(Q, x),
        b(x, he),
        (fe = !0),
        ye || ((R = [Me(e, "mousedown", s[37]), Me(e, "click", s[22]), Me(e, "dblclick", s[21])]), (ye = !0)));
    },
    p(G, $) {
      const W = {};
      ($[0] & 64 && (W.isFavorited = G[6]),
        $[0] & 131072 && (W.title = G[17].t("ASE.Web.Music.VO.FavoriteHelpText")),
        r.$set(W));
      let Ie = a;
      ((a = oe(G)),
        a === Ie
          ? _e[a].p(G, $)
          : (ce(),
            h(_e[Ie], 1, 1, () => {
              _e[Ie] = null;
            }),
            ue(),
            (o = _e[a]),
            o ? o.p(G, $) : ((o = _e[a] = ne[a](G)), o.c()),
            _(o, 1),
            o.m(n, c)));
      const Ae = {};
      ($[0] & 32768 && (Ae.artwork = G[15]),
        m.$set(Ae),
        G[5]
          ? X
            ? (X.p(G, $), $[0] & 32 && _(X, 1))
            : ((X = Ir(G)), X.c(), _(X, 1), X.m(u, null))
          : X &&
            (ce(),
            h(X, 1, 1, () => {
              X = null;
            }),
            ue()),
        G[0].contentDescriptor
          ? ie
            ? (ie.p(G, $), $[0] & 1 && _(ie, 1))
            : ((ie = Sr(G)), ie.c(), _(ie, 1), ie.m(T, null))
          : ie &&
            (ce(),
            h(ie, 1, 1, () => {
              ie = null;
            }),
            ue()),
        (!fe || $[0] & 8192) && we(p, G[13]),
        (!fe || $[0] & 4096) && we(K, G[12]),
        (!fe || $[0] & 2048) && we(he, G[11]),
        (!fe || ($[0] & 9 && Y !== (Y = G[3].currentMouseTarget === G[0]))) && f(e, "data-current-mouse-target", Y),
        (!fe || $[0] & 65536) && V(e, "selected", G[16]),
        (!fe || $[0] & 2) && V(e, "library-track--disabled", G[1]),
        (!fe || $[0] & 512) && V(e, "is-playing", G[9]),
        (!fe || $[0] & 256) && V(e, "is-paused", G[8]),
        (!fe || $[0] & 1024) && V(e, "is-loading", G[10]));
    },
    i(G) {
      fe || (_(r.$$.fragment, G), _(o), _(m.$$.fragment, G), _(X), _(ie), (fe = !0));
    },
    o(G) {
      (h(r.$$.fragment, G), h(o), h(m.$$.fragment, G), h(X), h(ie), (fe = !1));
    },
    d(G) {
      (G && d(e), z(r), _e[a].d(), z(m), X && X.d(), ie && ie.d(), (ye = !1), dt(R));
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
    L,
    te,
    H,
    K,
    j,
    Q,
    x = le,
    he = () => (x(), (x = Dt(te, (U) => t(35, (Q = U)))), te),
    Y,
    fe,
    ye;
  s.$$.on_destroy.push(() => x());
  var R;
  const ne = Ze();
  De(s, ne, (U) => t(17, (ye = U)));
  const _e = tt(),
    oe = Lt(),
    { queue: X, isRestricted: ie } = di();
  De(s, X, (U) => t(36, (Y = U)));
  const G = Mt();
  De(s, G, (U) => t(3, (fe = U)));
  const $ = ct();
  let { item: W } = e,
    { items: Ie = [] } = e,
    Ae = !1,
    se = [];
  mt(async () => {
    try {
      const U = await ie?.();
      t(26, (Ae = U));
    } catch {}
  });
  function be() {
    u && oe(j.playAction);
  }
  function ge(U) {
    G.handleClick(W, U);
  }
  const ae = (U) => {
    hi(E, T, g, !U.detail, $, !1, !0, oe);
  };
  ut(() => {
    $.unsubscribeFromUpdates(E);
  });
  const de = () => G.setCurrentMouseTarget(W);
  return (
    (s.$$set = (U) => {
      ("item" in U && t(0, (W = U.item)), "items" in U && t(24, (Ie = U.items)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 9 && t(16, (r = W.id && fe.selectedItems.some((U) => U.id === W.id))),
        s.$$.dirty[0] & 1 && t(15, (i = W?.artwork || null)),
        s.$$.dirty[0] & 1 && t(14, (l = W?.name || "")),
        s.$$.dirty[0] & 1 && t(13, (n = W?.artistName || "")),
        s.$$.dirty[0] & 1 && t(12, (a = W?.albumName || "")),
        s.$$.dirty[0] & 1 && t(34, (o = Math.trunc(W?.durationInMillis / 1e3) || null)),
        s.$$.dirty[1] & 8 && t(11, (c = Gt(o, _e.language) || "")),
        s.$$.dirty[0] & 1 && t(5, (u = W?.playAction || null)),
        s.$$.dirty[0] & 1 && t(2, (m = W?.contentRating === "explicit")),
        s.$$.dirty[0] & 1 && t(33, (k = at(W))),
        s.$$.dirty[0] & 1 && t(28, (E = Zt(W))),
        s.$$.dirty[0] & 1 && t(29, (g = W?.contentDescriptor)),
        s.$$.dirty[0] & 536870912 && t(30, (T = g?.kind)),
        s.$$.dirty[1] & 36 && t(32, (w = k && Y.nowPlayingItemId === k)),
        s.$$.dirty[1] & 34 && t(10, (A = w && Y.derivedStates.isLoading)),
        s.$$.dirty[1] & 34 && t(9, (y = w && Y.derivedStates.isPlaying)),
        s.$$.dirty[1] & 34 && t(8, (p = w && Y.derivedStates.isPaused)),
        s.$$.dirty[0] & 67108869 && t(1, (L = W?.isDisabled || (m && Ae))),
        s.$$.dirty[0] & 268435456 && he(t(7, (te = $.subscribeToUpdates(E)))),
        (s.$$.dirty[0] & 1375731712) | (s.$$.dirty[1] & 16) &&
          t(6, (H = Q && (t(25, (R = $.get(E, T))) === null || R === void 0 ? void 0 : R.inFavorites))),
        s.$$.dirty[0] & 16777216 && Promise.all(Ie).then((U) => t(27, (se = U))),
        s.$$.dirty[0] & 134217728 && t(31, (K = se.map((U) => U.contentDescriptor))),
        (s.$$.dirty[0] & 3) | (s.$$.dirty[1] & 1) &&
          t(
            4,
            (j = (() =>
              Object.assign(Object.assign({}, W), { playAction: !L && W.playAction && mi(W.playAction, K) }))()),
          ));
    }),
    [
      W,
      L,
      m,
      fe,
      j,
      u,
      H,
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
      ye,
      ne,
      X,
      G,
      be,
      ge,
      ae,
      Ie,
      R,
      Ae,
      se,
      E,
      g,
      T,
      K,
      w,
      k,
      o,
      Q,
      Y,
      de,
    ]
  );
}
class Tl extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Dl, Cl, He, { item: 0, items: 24 }, null, [-1, -1]));
  }
}
function Pl(s) {
  let e, t, r, i, l;
  return (
    (e = new Tl({ props: { item: s[16], items: s[17] } })),
    (i = new Xi({})),
    {
      c() {
        (B(e.$$.fragment), (t = Z()), (r = I("div")), B(i.$$.fragment), this.h());
      },
      l(n) {
        (q(e.$$.fragment, n), (t = J(n)), (r = S(n, "DIV", { class: !0, slot: !0 })));
        var a = v(r);
        (q(i.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        (f(r, "class", "song-placeholder svelte-7p26k2"), f(r, "slot", "placeholder"));
      },
      m(n, a) {
        (O(e, n, a), P(n, t, a), P(n, r, a), O(i, r, null), (l = !0));
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
        (n && (d(t), d(r)), z(e, n), z(i));
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
        fetchIntentFn: Yi,
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
        ((e = I("div")), B(t.$$.fragment), (r = Z()), B(i.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "DIV", { class: !0, "data-testid": !0 });
        var a = v(e);
        (q(t.$$.fragment, a), (r = J(a)), q(i.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-container svelte-7p26k2"), f(e, "data-testid", "library-songs-component"));
      },
      m(n, a) {
        (P(n, e, a), O(t, e, null), b(e, r), O(i, e, null), (l = !0));
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
        (n && d(e), z(t), z(i));
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
  De(s, E, (p) => t(11, (o = p)));
  const g = ct(),
    T = tt(),
    { state: w } = _t();
  De(s, w, (p) => t(12, (a = p)));
  let { section: A } = e;
  async function y(p) {
    var L;
    if (p.detail) {
      const { items: te } = p.detail;
      (E.addItems(u, te),
        await Kt([{ items: te }], (L = a.user) === null || L === void 0 ? void 0 : L.subscriberType, k, m, T, g));
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
    (super(), Ve(this, e, $l, Ll, He, { section: 8 }));
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
      ((e = I("div")), i && i.c(), (t = Z()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0, "data-testid": !0 });
      var a = v(e);
      (i && i.l(a), (t = J(a)), l && l.l(a), a.forEach(d), this.h());
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
        ((e = I("span")), (r = ve(t)), (i = Z()), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var o = v(e);
        ((r = ke(o, t)), (i = J(o)), q(l.$$.fragment, o), o.forEach(d), this.h());
      },
      h() {
        f(e, "class", "svelte-1wqzc4z");
      },
      m(a, o) {
        (P(a, e, o), b(e, r), b(e, i), O(l, e, null), (n = !0));
      },
      p(a, o) {
        (!n || o & 512) && t !== (t = a[9].t("ASE.Web.Music.SongsList.ComposerBy") + "") && we(r, t);
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
        (a && d(e), z(l));
      },
    }
  );
}
function Hl(s) {
  let e = s[18].title + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 262144 && e !== (e = r[18].title + "") && we(t, e);
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
        ((e = I("span")), B(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
        ((e = I("span")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "SPAN", { class: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "svelte-1wqzc4z");
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
      },
    }
  );
}
function Bl(s) {
  let e = s[17].title + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 131072 && e !== (e = r[17].title + "") && we(t, e);
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
        ((e = I("span")), B(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
    L,
    te,
    H = s[0] && Cr(s),
    K = s[7] && Dr(s);
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
          H && H.c(),
          (r = Z()),
          (i = I("div")),
          (l = I("span")),
          (a = ve(n)),
          (o = Z()),
          K && K.c(),
          (c = Z()),
          (u = I("div")),
          (m = I("div")),
          (k = I("div")),
          (E = Z()),
          (g = I("time")),
          (T = ve(s[5])),
          (w = Z()),
          (A = I("div")),
          B(y.$$.fragment),
          this.h());
      },
      l(j) {
        e = S(j, "DIV", { class: !0, "data-testid": !0 });
        var Q = v(e);
        t = S(Q, "DIV", { class: !0 });
        var x = v(t);
        (H && H.l(x), x.forEach(d), (r = J(Q)), (i = S(Q, "DIV", { role: !0, class: !0 })));
        var he = v(i);
        l = S(he, "SPAN", { class: !0, "data-testid": !0 });
        var Y = v(l);
        ((a = ke(Y, n)),
          Y.forEach(d),
          (o = J(he)),
          K && K.l(he),
          he.forEach(d),
          (c = J(Q)),
          (u = S(Q, "DIV", { role: !0, class: !0 })));
        var fe = v(u);
        m = S(fe, "DIV", { class: !0 });
        var ye = v(m);
        ((k = S(ye, "DIV", { class: !0 })),
          v(k).forEach(d),
          (E = J(ye)),
          (g = S(ye, "TIME", { datetime: !0, class: !0, "data-testid": !0 })));
        var R = v(g);
        ((T = ke(R, s[5])), R.forEach(d), (w = J(ye)), (A = S(ye, "DIV", { class: !0 })));
        var ne = v(A);
        (q(y.$$.fragment, ne), ne.forEach(d), ye.forEach(d), fe.forEach(d), Q.forEach(d), this.h());
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
      m(j, Q) {
        (P(j, e, Q),
          b(e, t),
          H && H.m(t, null),
          b(e, r),
          b(e, i),
          b(i, l),
          b(l, a),
          b(i, o),
          K && K.m(i, null),
          b(e, c),
          b(e, u),
          b(u, m),
          b(m, k),
          b(m, E),
          b(m, g),
          b(g, T),
          b(m, w),
          b(m, A),
          O(y, A, null),
          (p = !0),
          L || ((te = Me(e, "dblclick", s[15])), (L = !0)));
      },
      p(j, [Q]) {
        (j[0]
          ? H
            ? (H.p(j, Q), Q & 1 && _(H, 1))
            : ((H = Cr(j)), H.c(), _(H, 1), H.m(t, null))
          : H &&
            (ce(),
            h(H, 1, 1, () => {
              H = null;
            }),
            ue()),
          (!p || Q & 256) && n !== (n = Ar(j[8]) + "") && we(a, n),
          j[7]
            ? K
              ? (K.p(j, Q), Q & 128 && _(K, 1))
              : ((K = Dr(j)), K.c(), _(K, 1), K.m(i, null))
            : K &&
              (ce(),
              h(K, 1, 1, () => {
                K = null;
              }),
              ue()),
          (!p || Q & 32) && we(T, j[5]),
          (!p || Q & 16) && f(g, "datetime", j[4]));
        const x = {};
        (Q & 8 && (x.attachedTo = j[3]),
          Q & 64 && (x.isPlayable = j[6]),
          Q & 262 && (x.itemProperties = { subtitleLinks: [...j[2], ...j[1]], title: j[8] }),
          y.$set(x));
      },
      i(j) {
        p || (_(H), _(K), _(y.$$.fragment, j), (p = !0));
      },
      o(j) {
        (h(H), h(K), h(y.$$.fragment, j), (p = !1));
      },
      d(j) {
        (j && d(e), H && H.d(), K && K.d(), z(y), (L = !1), te());
      },
    }
  );
}
function ql(s, e, t) {
  let r, i, l, n, a, o, c, u, m, k, E;
  var g;
  const T = Ze();
  De(s, T, (L) => t(9, (E = L)));
  const w = tt(),
    A = Lt();
  let { header: y } = e;
  const p = () => A(a);
  return (
    (s.$$set = (L) => {
      "header" in L && t(12, (y = L.header));
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
    (super(), Ve(this, e, ql, zl, He, { header: 12 }));
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
    i: le,
    o: le,
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, role: !0, "aria-label": !0, "data-testid": !0 });
        var n = v(e);
        (q(t.$$.fragment, n), n.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "popular svelte-taox9z"),
          f(e, "role", "img"),
          f(e, "aria-label", (r = s[3].t("ASE.Web.Music.PopularTrack"))),
          f(e, "data-testid", "popular-glyph"));
      },
      m(l, n) {
        (P(l, e, n), O(t, e, null), (i = !0));
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
        (l && d(e), z(t));
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "favorite svelte-taox9z"), V(e, "is-favorited", s[1]));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
      },
      p(i, l) {
        const n = {};
        (l & 2 && (n.isFavorited = i[1]),
          l & 8 && (n.title = i[3].t("ASE.Web.Music.VO.FavoriteHelpText")),
          t.$set(n),
          (!r || l & 2) && V(e, "is-favorited", i[1]));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), z(t));
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
      ((e = I("div")), i && i.c(), (t = Z()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0 });
      var a = v(e);
      (i && i.l(a), (t = J(a)), l && l.l(a), a.forEach(d), this.h());
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
  De(s, i, (c) => t(3, (r = c)));
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
class Ql extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Jl, Zl, He, { isPopular: 0, inFavorites: 1, showFavoriteButton: 2 }));
  }
}
function Yl(s) {
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
    i: le,
    o: le,
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
    (super(), Ve(this, e, Xl, Yl, At, {}));
  }
}
function Fr(s) {
  let e, t, r;
  return (
    (t = new xl({})),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__video-glyph svelte-ejraru");
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), z(t));
      },
    }
  );
}
function en(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = ve(s[45])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "data-testid": !0 });
      var i = v(e);
      ((t = ke(i, s[45])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__column-data svelte-ejraru"), f(e, "data-testid", "track-number"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i[1] & 16384 && we(t, r[45]);
    },
    i: le,
    o: le,
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
        (t.c(), (r = Ne()));
      },
      l(o) {
        (t.l(o), (r = Ne()));
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
        ((e = I("div")), B(t.$$.fragment), (r = Z()), (i = I("div")), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "DIV", { class: !0 });
        var o = v(e);
        (q(t.$$.fragment, o), o.forEach(d), (r = J(a)), (i = S(a, "DIV", { class: !0 })));
        var c = v(i);
        (q(l.$$.fragment, c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "is-viewport-small"), f(i, "class", "is-viewport-large"));
      },
      m(a, o) {
        (P(a, e, o), O(t, e, null), P(a, r, o), P(a, i, o), O(l, i, null), (n = !0));
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
        (a && (d(e), d(r), d(i)), z(t), z(l));
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-list-row__play-button-wrapper svelte-ejraru"), f(e, "data-testid", "track-play-button"));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
        ((e = I("div")), B(t.$$.fragment), (r = Z()), (i = I("span")), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "DIV", { class: !0, dir: !0 });
        var o = v(e);
        (q(t.$$.fragment, o), (r = J(o)), (i = S(o, "SPAN", { class: !0 })));
        var c = v(i);
        (q(l.$$.fragment, c), c.forEach(d), o.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "songs-list-row__badge songs-list-row__badge--explicit svelte-ejraru"),
          f(e, "class", "songs-list-row__explicit-wrapper svelte-ejraru"),
          f(e, "dir", "auto"));
      },
      m(a, o) {
        (P(a, e, o), O(t, e, null), b(e, r), b(e, i), O(l, i, null), (n = !0));
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
        (a && d(e), z(t), z(l));
      },
    }
  );
}
function on(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = ve(s[13])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var i = v(e);
      ((t = ke(i, s[13])), i.forEach(d), this.h());
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
      (i[0] & 8192 && we(t, r[13]), i[0] & 8192 && f(e, "aria-label", r[13]));
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
      ((e = I("div")), (t = ve(s[13])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var i = v(e);
      ((t = ke(i, s[13])), i.forEach(d), this.h());
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
      (i[0] & 8192 && we(t, r[13]), i[0] & 8192 && f(e, "aria-label", r[13]));
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
        ((e = I("div")), (t = I("span")), B(r.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, "data-testid": !0, dir: !0 });
        var n = v(e);
        t = S(n, "SPAN", { class: !0 });
        var a = v(t);
        (q(r.$$.fragment, a), a.forEach(d), n.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "svelte-ejraru"),
          f(e, "class", "songs-list-row__by-line svelte-ejraru"),
          f(e, "data-testid", "track-title-by-line"),
          f(e, "dir", "auto"),
          V(e, "songs-list-row__by-line__mobile", !s[6] || s[24]));
      },
      m(l, n) {
        (P(l, e, n), b(e, t), O(r, t, null), (i = !0));
      },
      p(l, n) {
        const a = {};
        (n[0] & 4096 && (a.items = l[12]),
          n[0] & 33554432 && (a.translateFn = l[25].t),
          n[3] & 3072 && (a.$$scope = { dirty: n, ctx: l }),
          r.$set(a),
          (!i || n[0] & 16777280) && V(e, "songs-list-row__by-line__mobile", !l[6] || l[24]));
      },
      i(l) {
        i || (_(r.$$.fragment, l), (i = !0));
      },
      o(l) {
        (h(r.$$.fragment, l), (i = !1));
      },
      d(l) {
        (l && d(e), z(r));
      },
    }
  );
}
function cn(s) {
  let e = s[103].title + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 1024 && e !== (e = r[103].title + "") && we(t, e);
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
      },
    }
  );
}
function Rr(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = ve(s[44])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "data-testid": !0 });
      var i = v(e);
      ((t = ke(i, s[44])), i.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__rank svelte-ejraru"), f(e, "data-testid", "track-ranking"));
    },
    m(r, i) {
      (P(r, e, i), b(e, t));
    },
    p(r, i) {
      i[1] & 8192 && we(t, r[44]);
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
      },
    }
  );
}
function mn(s) {
  let e = s[103].title + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 1024 && e !== (e = r[103].title + "") && we(t, e);
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
        ((e = I("span")), B(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
      },
    }
  );
}
function hn(s) {
  let e = s[102].title + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 512 && e !== (e = r[102].title + "") && we(t, e);
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
        ((e = I("span")), B(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
      (r && r.c(), (e = Ne()));
    },
    l(i) {
      (r && r.l(i), (e = Ne()));
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
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[3] & 512 && e !== (e = r[102].title + "") && we(t, e);
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
        ((e = I("span")), B(t.$$.fragment));
      },
      l(i) {
        e = S(i, "SPAN", {});
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
        ((e = I("div")), B(t.$$.fragment), (r = Z()), (i = I("span")), (n = ve(l)), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0 });
        var c = v(e);
        (q(t.$$.fragment, c), (r = J(c)), (i = S(c, "SPAN", { class: !0 })));
        var u = v(i);
        ((n = ke(u, l)), u.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "songs-list-row__badge-name"),
          f(e, "class", "songs-list-row__badge__contributor-wrapper svelte-ejraru"));
      },
      m(o, c) {
        (P(o, e, c), O(t, e, null), b(e, r), b(e, i), b(i, n), (a = !0));
      },
      p(o, c) {
        const u = {};
        (c[0] & 262144 && (u.artwork = o[18]?.attributes.artwork),
          c[0] & 262144 && (u.name = o[18]?.attributes.name),
          t.$set(u),
          (!a || c[0] & 262144) && l !== (l = o[18]?.attributes.name + "") && we(n, l));
      },
      i(o) {
        a || (_(t.$$.fragment, o), (a = !0));
      },
      o(o) {
        (h(t.$$.fragment, o), (a = !1));
      },
      d(o) {
        (o && d(e), z(t));
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
          V(e, "songs-list__reactions", s[7]));
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
          (!n || m[0] & 128) && V(e, "songs-list__reactions", u[7]));
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
        ((e = I("div")), B(t.$$.fragment), (r = Z()), (i = I("span")), (n = ve(l)), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0 });
        var c = v(e);
        (q(t.$$.fragment, c), (r = J(c)), (i = S(c, "SPAN", { class: !0 })));
        var u = v(i);
        ((n = ke(u, l)), u.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "songs-list-row__badge-name"),
          f(e, "class", "songs-list-row__badge__contributor-wrapper svelte-ejraru"));
      },
      m(o, c) {
        (P(o, e, c), O(t, e, null), b(e, r), b(e, i), b(i, n), (a = !0));
      },
      p(o, c) {
        const u = {};
        (c[0] & 262144 && (u.artwork = o[18]?.attributes.artwork),
          c[0] & 262144 && (u.name = o[18]?.attributes.name),
          t.$set(u),
          (!a || c[0] & 262144) && l !== (l = o[18]?.attributes.name + "") && we(n, l));
      },
      i(o) {
        a || (_(t.$$.fragment, o), (a = !0));
      },
      o(o) {
        (h(t.$$.fragment, o), (a = !1));
      },
      d(o) {
        (o && d(e), z(t));
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
        ((e = I("span")), B(t.$$.fragment), (r = Z()), (i = I("span")), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var o = v(e);
        (q(t.$$.fragment, o), o.forEach(d), (r = J(a)), (i = S(a, "SPAN", { class: !0 })));
        var c = v(i);
        (q(l.$$.fragment, c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "is-viewport-large"), f(i, "class", "is-viewport-small"));
      },
      m(a, o) {
        (P(a, e, o), O(t, e, null), P(a, r, o), P(a, i, o), O(l, i, null), (n = !0));
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
        (a && (d(e), d(r), d(i)), z(t), z(l));
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-list-row__preview-button svelte-ejraru"), f(e, "data-testid", "track-preview"));
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
      },
    }
  );
}
function In(s) {
  let e = s[25].t("ASE.Web.Music.Preview.AllCaps") + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i[0] & 33554432 && e !== (e = r[25].t("ASE.Web.Music.Preview.AllCaps") + "") && we(t, e);
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
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__add-to-library svelte-ejraru");
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
      },
    }
  );
}
function qr(s) {
  let e, t;
  return {
    c() {
      ((e = I("time")), (t = ve(s[38])), this.h());
    },
    l(r) {
      e = S(r, "TIME", { datetime: !0, class: !0, "data-testid": !0 });
      var i = v(e);
      ((t = ke(i, s[38])), i.forEach(d), this.h());
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
      (i[1] & 128 && we(t, r[38]), i[1] & 64 && f(e, "datetime", r[37]));
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
      Qe(s[101]) && s[101].apply(this, arguments);
    }),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__context-menu svelte-ejraru");
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
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
        (i && d(e), z(t));
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
      (n && n.c(), (e = Z()), a && a.c(), (t = Z()), o && o.c(), (i = Ne()));
    },
    l(c) {
      (n && n.l(c), (e = J(c)), a && a.l(c), (t = J(c)), o && o.l(c), (i = Ne()));
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
  let e, t, r, i, l, n, a, o, c, u, m, k, E, g, T, w, A, y, p, L, te, H, K, j, Q, x, he, Y, fe, ye, R, ne, _e;
  ((r = new Ql({ props: { isPopular: s[0].showPopularityIndicator, inFavorites: s[29], showFavoriteButton: s[41] } })),
    r.$on("toggle", s[61]));
  let oe = s[15] && !s[42] && Fr();
  const X = [tn, en],
    ie = [];
  function G(D, F) {
    return D[42] ? 0 : D[45] || D[45] === 0 ? 1 : -1;
  }
  ~(c = G(s)) && (u = ie[c] = X[c](s));
  let $ = s[0].playAction && !s[16] && Vr(s);
  const W = [nn, ln],
    Ie = [];
  function Ae(D, F) {
    return D[11] ? 0 : 1;
  }
  ((T = Ae(s)), (w = Ie[T] = W[T](s)));
  let se = s[12].length && $r(s),
    be = s[44] && Rr(s),
    ge = s[4] && s[20] !== "albumTrackList" && Nr(s),
    ae = s[5] && Hr(s),
    de = s[6] && Br(s),
    U = s[47] && Or(s);
  return (
    (x = new ts({
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
    x.$on("contextMenuActionComplete", s[90]),
    {
      c() {
        ((e = I("div")),
          (t = I("div")),
          B(r.$$.fragment),
          (i = Z()),
          (l = I("div")),
          (n = I("div")),
          oe && oe.c(),
          (a = Z()),
          (o = I("div")),
          u && u.c(),
          (m = Z()),
          $ && $.c(),
          (k = Z()),
          (E = I("div")),
          (g = I("div")),
          w.c(),
          (A = Z()),
          se && se.c(),
          (y = Z()),
          be && be.c(),
          (p = Z()),
          ge && ge.c(),
          (L = Z()),
          ae && ae.c(),
          (te = Z()),
          de && de.c(),
          (H = Z()),
          (K = I("div")),
          (j = I("div")),
          U && U.c(),
          (Q = Z()),
          B(x.$$.fragment),
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
        var F = v(e);
        t = S(F, "DIV", { class: !0, "data-testid": !0 });
        var Le = v(t);
        (q(r.$$.fragment, Le), Le.forEach(d), (i = J(F)), (l = S(F, "DIV", { class: !0, "data-testid": !0 })));
        var Ce = v(l);
        n = S(Ce, "DIV", { class: !0 });
        var Pe = v(n);
        (oe && oe.l(Pe), (a = J(Pe)), (o = S(Pe, "DIV", { class: !0 })));
        var Te = v(o);
        (u && u.l(Te), (m = J(Te)), $ && $.l(Te), Te.forEach(d), (k = J(Pe)), (E = S(Pe, "DIV", { class: !0 })));
        var je = v(E);
        g = S(je, "DIV", { class: !0, "data-testid": !0 });
        var Be = v(g);
        (w.l(Be),
          (A = J(Be)),
          se && se.l(Be),
          Be.forEach(d),
          je.forEach(d),
          (y = J(Pe)),
          be && be.l(Pe),
          Pe.forEach(d),
          Ce.forEach(d),
          (p = J(F)),
          ge && ge.l(F),
          (L = J(F)),
          ae && ae.l(F),
          (te = J(F)),
          de && de.l(F),
          (H = J(F)),
          (K = S(F, "DIV", { class: !0, "data-testid": !0 })));
        var C = v(K);
        j = S(C, "DIV", { class: !0 });
        var re = v(j);
        (U && U.l(re), (Q = J(re)), q(x.$$.fragment, re), re.forEach(d), C.forEach(d), F.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__col songs-list__col--favorite-or-popular svelte-ejraru"),
          f(t, "data-testid", "track-column-favorite-or-popular"),
          f(o, "class", "songs-list-row__song-index svelte-ejraru"),
          V(o, "songs-list-row__song-index--ranking", s[44]),
          V(o, "songs-list-row--with-collaborators", !s[17]),
          f(g, "class", "songs-list-row__song-name-wrapper svelte-ejraru"),
          f(g, "data-testid", "song-name-wrapper"),
          V(g, "songs-list-row__song-name-wrapper--explicit", s[11]),
          f(E, "class", "songs-list-row__song-wrapper svelte-ejraru"),
          f(n, "class", "songs-list-row__song-container svelte-ejraru"),
          f(l, "class", "songs-list__col songs-list__col--song svelte-ejraru"),
          f(l, "data-testid", "track-column-song"),
          f(j, "class", "songs-list-row__controls svelte-ejraru"),
          f(K, "class", "songs-list__col songs-list__col--time svelte-ejraru"),
          f(K, "data-testid", "track-column-controls"),
          f(e, "class", "songs-list-row drop-reset svelte-ejraru"),
          f(e, "role", "row"),
          f(e, "tabindex", "0"),
          f(e, "data-row", s[1]),
          f(e, "data-current-mouse-target", (he = s[49].currentMouseTarget === s[0])),
          f(e, "data-testid", "track-list-item"),
          f(e, "aria-label", s[28]),
          V(e, "is-loading", s[36]),
          V(e, "is-playing", s[35]),
          V(e, "is-paused", s[34]),
          V(e, "songs-list-row--disabled", s[16]),
          V(e, "songs-list-row--artwork", s[42]),
          V(e, "songs-list-row--no-artwork", !s[42]),
          V(e, "songs-list-row--decorated", s[42] && s[22]),
          V(e, "songs-list-row--two-lines", s[12].length),
          V(e, "songs-list-row--album", s[20] === "albumTrackList"),
          V(e, "songs-list-row--playlist", s[20] === "playlistTrackList"),
          V(e, "songs-list-row--compilation", s[20] === "compilationTrackList"),
          V(e, "songs-list-row--selected", s[2]),
          V(e, "songs-list-row--preview", s[47]),
          V(e, "disabled", s[16]));
      },
      m(D, F) {
        (P(D, e, F),
          b(e, t),
          O(r, t, null),
          b(e, i),
          b(e, l),
          b(l, n),
          oe && oe.m(n, null),
          b(n, a),
          b(n, o),
          ~c && ie[c].m(o, null),
          b(o, m),
          $ && $.m(o, null),
          b(n, k),
          b(n, E),
          b(E, g),
          Ie[T].m(g, null),
          b(g, A),
          se && se.m(g, null),
          b(n, y),
          be && be.m(n, null),
          b(e, p),
          ge && ge.m(e, null),
          b(e, L),
          ae && ae.m(e, null),
          b(e, te),
          de && de.m(e, null),
          b(e, H),
          b(e, K),
          b(K, j),
          U && U.m(j, null),
          b(j, Q),
          O(x, j, null),
          s[91](e),
          (R = !0),
          ne ||
            ((_e = [
              Me(e, "dblclick", s[92]),
              Me(e, "mousedown", s[93]),
              Me(e, "mousedown", s[57]),
              Me(e, "click", s[59]),
              Me(e, "keydown", s[58]),
              Me(e, "focusin", s[60]),
              et((Y = An.call(null, e, s[3]))),
              et((fe = rs.call(null, e, s[8] && { targets: [ft.Top, ft.Bottom], onDrop: s[94] }))),
              et((ye = s[56].call(null, e, { impressionMetrics: s[32], location: s[31] }))),
            ]),
            (ne = !0)));
      },
      p(D, F) {
        const Le = {};
        (F[0] & 1 && (Le.isPopular = D[0].showPopularityIndicator),
          F[0] & 536870912 && (Le.inFavorites = D[29]),
          F[1] & 1024 && (Le.showFavoriteButton = D[41]),
          r.$set(Le),
          D[15] && !D[42]
            ? oe
              ? (F[0] & 32768) | (F[1] & 2048) && _(oe, 1)
              : ((oe = Fr()), oe.c(), _(oe, 1), oe.m(n, a))
            : oe &&
              (ce(),
              h(oe, 1, 1, () => {
                oe = null;
              }),
              ue()));
        let Ce = c;
        ((c = G(D)),
          c === Ce
            ? ~c && ie[c].p(D, F)
            : (u &&
                (ce(),
                h(ie[Ce], 1, 1, () => {
                  ie[Ce] = null;
                }),
                ue()),
              ~c ? ((u = ie[c]), u ? u.p(D, F) : ((u = ie[c] = X[c](D)), u.c()), _(u, 1), u.m(o, m)) : (u = null)),
          D[0].playAction && !D[16]
            ? $
              ? ($.p(D, F), F[0] & 65537 && _($, 1))
              : (($ = Vr(D)), $.c(), _($, 1), $.m(o, null))
            : $ &&
              (ce(),
              h($, 1, 1, () => {
                $ = null;
              }),
              ue()),
          (!R || F[1] & 8192) && V(o, "songs-list-row__song-index--ranking", D[44]),
          (!R || F[0] & 131072) && V(o, "songs-list-row--with-collaborators", !D[17]));
        let Pe = T;
        ((T = Ae(D)),
          T === Pe
            ? Ie[T].p(D, F)
            : (ce(),
              h(Ie[Pe], 1, 1, () => {
                Ie[Pe] = null;
              }),
              ue(),
              (w = Ie[T]),
              w ? w.p(D, F) : ((w = Ie[T] = W[T](D)), w.c()),
              _(w, 1),
              w.m(g, A)),
          D[12].length
            ? se
              ? (se.p(D, F), F[0] & 4096 && _(se, 1))
              : ((se = $r(D)), se.c(), _(se, 1), se.m(g, null))
            : se &&
              (ce(),
              h(se, 1, 1, () => {
                se = null;
              }),
              ue()),
          (!R || F[0] & 2048) && V(g, "songs-list-row__song-name-wrapper--explicit", D[11]),
          D[44] ? (be ? be.p(D, F) : ((be = Rr(D)), be.c(), be.m(n, null))) : be && (be.d(1), (be = null)),
          D[4] && D[20] !== "albumTrackList"
            ? ge
              ? (ge.p(D, F), F[0] & 1048592 && _(ge, 1))
              : ((ge = Nr(D)), ge.c(), _(ge, 1), ge.m(e, L))
            : ge &&
              (ce(),
              h(ge, 1, 1, () => {
                ge = null;
              }),
              ue()),
          D[5]
            ? ae
              ? (ae.p(D, F), F[0] & 32 && _(ae, 1))
              : ((ae = Hr(D)), ae.c(), _(ae, 1), ae.m(e, te))
            : ae &&
              (ce(),
              h(ae, 1, 1, () => {
                ae = null;
              }),
              ue()),
          D[6]
            ? de
              ? (de.p(D, F), F[0] & 64 && _(de, 1))
              : ((de = Br(D)), de.c(), _(de, 1), de.m(e, H))
            : de &&
              (ce(),
              h(de, 1, 1, () => {
                de = null;
              }),
              ue()),
          D[47]
            ? U
              ? (U.p(D, F), F[1] & 65536 && _(U, 1))
              : ((U = Or(D)), U.c(), _(U, 1), U.m(j, Q))
            : U &&
              (ce(),
              h(U, 1, 1, () => {
                U = null;
              }),
              ue()));
        const Te = {};
        (F[0] & 1 && (Te.contentDescriptor = D[0].contentDescriptor),
          F[0] & 1073741824 && (Te.isPlayable = D[30].playAction !== null),
          (F[0] & 34153985) | (F[1] & 98496) | (F[3] & 2304) && (Te.$$scope = { dirty: F, ctx: D }),
          x.$set(Te),
          (!R || F[0] & 2) && f(e, "data-row", D[1]),
          (!R || ((F[0] & 1) | (F[1] & 262144) && he !== (he = D[49].currentMouseTarget === D[0]))) &&
            f(e, "data-current-mouse-target", he),
          (!R || F[0] & 268435456) && f(e, "aria-label", D[28]),
          Y && Qe(Y.update) && F[0] & 8 && Y.update.call(null, D[3]),
          fe &&
            Qe(fe.update) &&
            F[0] & 256 &&
            fe.update.call(null, D[8] && { targets: [ft.Top, ft.Bottom], onDrop: D[94] }),
          ye && Qe(ye.update) && F[1] & 3 && ye.update.call(null, { impressionMetrics: D[32], location: D[31] }),
          (!R || F[1] & 32) && V(e, "is-loading", D[36]),
          (!R || F[1] & 16) && V(e, "is-playing", D[35]),
          (!R || F[1] & 8) && V(e, "is-paused", D[34]),
          (!R || F[0] & 65536) && V(e, "songs-list-row--disabled", D[16]),
          (!R || F[1] & 2048) && V(e, "songs-list-row--artwork", D[42]),
          (!R || F[1] & 2048) && V(e, "songs-list-row--no-artwork", !D[42]),
          (!R || (F[0] & 4194304) | (F[1] & 2048)) && V(e, "songs-list-row--decorated", D[42] && D[22]),
          (!R || F[0] & 4096) && V(e, "songs-list-row--two-lines", D[12].length),
          (!R || F[0] & 1048576) && V(e, "songs-list-row--album", D[20] === "albumTrackList"),
          (!R || F[0] & 1048576) && V(e, "songs-list-row--playlist", D[20] === "playlistTrackList"),
          (!R || F[0] & 1048576) && V(e, "songs-list-row--compilation", D[20] === "compilationTrackList"),
          (!R || F[0] & 4) && V(e, "songs-list-row--selected", D[2]),
          (!R || F[1] & 65536) && V(e, "songs-list-row--preview", D[47]),
          (!R || F[0] & 65536) && V(e, "disabled", D[16]));
      },
      i(D) {
        R ||
          (_(r.$$.fragment, D),
          _(oe),
          _(u),
          _($),
          _(w),
          _(se),
          _(ge),
          _(ae),
          _(de),
          _(U),
          _(x.$$.fragment, D),
          (R = !0));
      },
      o(D) {
        (h(r.$$.fragment, D), h(oe), h(u), h($), h(w), h(se), h(ge), h(ae), h(de), h(U), h(x.$$.fragment, D), (R = !1));
      },
      d(D) {
        (D && d(e),
          z(r),
          oe && oe.d(),
          ~c && ie[c].d(),
          $ && $.d(),
          Ie[T].d(),
          se && se.d(),
          be && be.d(),
          ge && ge.d(),
          ae && ae.d(),
          de && de.d(),
          U && U.d(),
          z(x),
          s[91](null),
          (ne = !1),
          dt(_e));
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
    L,
    te,
    H,
    K,
    j,
    Q,
    x,
    he,
    Y,
    fe,
    ye,
    R,
    ne,
    _e,
    oe,
    X,
    ie,
    G,
    $,
    W,
    Ie,
    Ae,
    se,
    be,
    ge,
    ae,
    de,
    U,
    D,
    F,
    Le = le,
    Ce = () => (Le(), (Le = Dt(Ie, (M) => t(85, (F = M)))), Ie),
    Pe,
    Te,
    je;
  (De(s, is, (M) => t(96, (U = M))), De(s, ss, (M) => t(86, (Pe = M))), s.$$.on_destroy.push(() => Le()));
  var Be, C, re, pe, Se, Re, it, st, lt, nt;
  const N = ct(),
    ee = Ze();
  De(s, ee, (M) => t(25, (de = M)));
  const Ee = Mt();
  De(s, Ee, (M) => t(49, (D = M)));
  const $e = tt(),
    We = Lt(),
    { queue: ht, isRestricted: Vt } = di();
  De(s, ht, (M) => t(87, (Te = M)));
  const { state: Qt } = _t();
  De(s, Qt, (M) => t(88, (je = M)));
  const $t = Et(),
    { captureImpressions: Ei } = ls();
  let Rt = !1,
    Yt = !1;
  (mt(async () => {
    try {
      const M = await Vt?.();
      t(76, (Rt = M));
    } catch {}
    t(26, (Yt = document.dir === gi.RTL));
  }),
    ut(() => {
      N.unsubscribeFromUpdates(m);
    }));
  let { item: me } = e,
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
                targetId: x?.identifiers.storeAdamID,
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
    if (M.key === "Enter" && M.target === ot) We(W.playAction);
    else if (M.key === "Tab")
      if (M.shiftKey)
        document.activeElement === ot && (gt ? Ee.clearSelection() : (Ee.selectPreviousItem(me), M.preventDefault()));
      else {
        const Ue = ot.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        );
        document.activeElement === Ue[Ue.length - 1] &&
          (pt ? Ee.clearSelection() : (Ee.selectNextItem(me), M.preventDefault()));
      }
  }
  function Ti(M) {
    Ee.handleClick(me, M);
  }
  function Pi() {
    const M = D.selectedItems.length;
    (!Bt && M <= 1 && (gt || pt) && Ee.selectItem(me), (Bt = !1));
  }
  const Li = () => {
      hi(m, Ae, me.contentDescriptor, se, N, U, !0, We);
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
  const $i = () => We(W.playAction),
    Ri = (M) => {
      M.metaKey || Ee.setCurrentMouseTarget(me);
    },
    Ni = (...M) => $t("drop", ...M);
  return (
    (s.$$set = (M) => {
      ("item" in M && t(0, (me = M.item)),
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
            const M = me.layoutStyle;
            return typeof M == "string" ? M : M?.kind;
          })()),
        ),
        s.$$.dirty[0] & 192 && t(23, (i = bt && vt)),
        s.$$.dirty[0] & 192 && t(24, (l = bt && !vt)),
        s.$$.dirty[0] & 25165824 && t(17, (n = !i && !l)),
        s.$$.dirty[0] & 25165824 && t(48, (a = l || i)),
        s.$$.dirty[2] & 67108880 &&
          t(83, (o = vi(t(66, (Be = je?.user)) === null || Be === void 0 ? void 0 : Be.subscriberType))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 32) &&
          t(84, (c = t(67, (C = me.contentDescriptor)) === null || C === void 0 ? void 0 : C.kind)),
        s.$$.dirty[0] & 1 && t(19, (u = at(me))),
        s.$$.dirty[0] & 1 && t(14, (m = Zt(me))),
        s.$$.dirty[2] & 4194304 && t(15, (k = ns.includes(c))),
        s.$$.dirty[0] & 1 && t(47, (E = me.isPreviewMode)),
        s.$$.dirty[0] & 1 && t(11, (g = me.showExplicitBadge)),
        (s.$$.dirty[0] & 2049) | (s.$$.dirty[2] & 16384) && t(16, (T = me.isDisabled || (g && Rt))),
        s.$$.dirty[0] & 65537 && t(46, (w = T && !!me.isPrerelease)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 384) &&
          t(
            79,
            (G =
              t(
                70,
                (Se =
                  t(69, (pe = me.socialProfileContentDescriptor)) === null || pe === void 0 ? void 0 : pe.identifiers),
              ) === null || Se === void 0
                ? void 0
                : Se.socialProfileID),
          ),
        (s.$$.dirty[0] & 131072) | (s.$$.dirty[2] & 16908296) && t(18, ($ = n ? jt.get(G) : Pe?.get(G))),
        s.$$.dirty[0] & 262144 && t(22, (A = !!$)),
        s.$$.dirty[0] & 1 && t(45, (y = me.trackNumber)),
        s.$$.dirty[0] & 1 && t(13, (p = me.title)),
        s.$$.dirty[0] & 1 && t(44, (L = me.rankingText)),
        s.$$.dirty[0] & 1 && t(21, (te = me.artwork)),
        s.$$.dirty[0] & 4227072 &&
          t(43, (H = () => (k ? "music-video-tracklist" : A ? "track-list-decorated" : "track-list"))),
        s.$$.dirty[0] & 3145728 && t(42, (K = !!te || r === "playlistTrackList")),
        (s.$$.dirty[0] & 65536) | (s.$$.dirty[2] & 2097152) && t(41, (j = o && !T)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 64) &&
          t(82, (Q = t(68, (re = me.contentDescriptor)) === null || re === void 0 ? void 0 : re.url)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 1048576) &&
          t(78, (x = Object.assign(Object.assign({}, me.contentDescriptor), { url: os(Q) }))),
        (s.$$.dirty[0] & 65536) | (s.$$.dirty[2] & 65536) && t(40, (he = !!x && !T && Ai(x))),
        s.$$.dirty[0] & 1 && t(12, (Y = me.subtitleLinks || [])),
        s.$$.dirty[0] & 1 && t(39, (fe = me.tertiaryLinks || [])),
        s.$$.dirty[0] & 1 && t(81, (ye = Math.trunc(me.duration / 1e3))),
        s.$$.dirty[2] & 524288 && t(38, (R = Gt(ye, $e.language))),
        s.$$.dirty[2] & 524288 && t(37, (ne = pi(ye))),
        (s.$$.dirty[0] & 524288) | (s.$$.dirty[2] & 33554432) && t(80, (_e = u && Te.nowPlayingItemId === u)),
        s.$$.dirty[2] & 33816576 && t(36, (oe = _e && Te.derivedStates.isLoading)),
        s.$$.dirty[2] & 33816576 && t(35, (X = _e && Te.derivedStates.isPlaying)),
        s.$$.dirty[2] & 33816576 && t(34, (ie = _e && Te.derivedStates.isPaused)),
        (s.$$.dirty[0] & 65537) | (s.$$.dirty[2] & 1) &&
          t(
            30,
            (W = (() =>
              Object.assign(Object.assign({}, me), { playAction: !T && me.playAction && mi(me.playAction, Nt) }))()),
          ),
        s.$$.dirty[0] & 16384 && Ce(t(33, (Ie = N.subscribeToUpdates(m)))),
        s.$$.dirty[0] & 32768 && t(77, (Ae = k ? It.MusicVideo : It.Song)),
        (s.$$.dirty[0] & 16384) | (s.$$.dirty[2] & 8421888) &&
          t(29, (se = F && (t(71, (Re = N.get(m, Ae))) === null || Re === void 0 ? void 0 : Re.inFavorites))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 3072) &&
          t(
            32,
            (be =
              t(73, (st = t(72, (it = me?.impressionMetrics)) === null || it === void 0 ? void 0 : it.fields)) !==
                null && st !== void 0
                ? st
                : {}),
          ),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 12288) &&
          t(
            31,
            (ge =
              t(
                75,
                (nt = t(74, (lt = me?.impressionMetrics)) === null || lt === void 0 ? void 0 : lt.clickLocationFields),
              ) !== null && nt !== void 0
                ? nt
                : {}),
          ),
        s.$$.dirty[0] & 33568784 &&
          t(
            28,
            (ae = (() => {
              let M = p;
              return (
                Ht &&
                  (M = de.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: M,
                    contentB: as(
                      Y.map((Ue) => Ue.title),
                      $e.language,
                      de.t,
                    ),
                  })),
                g &&
                  (M = de.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: de.t("ASE.Web.Music.Explicit"),
                    contentB: M,
                  })),
                M
              );
            })()),
          ));
    }),
    [
      me,
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
      Y,
      p,
      m,
      k,
      T,
      n,
      $,
      u,
      r,
      te,
      A,
      i,
      l,
      de,
      Yt,
      ot,
      ae,
      se,
      W,
      ge,
      be,
      Ie,
      ie,
      X,
      oe,
      ne,
      R,
      fe,
      he,
      j,
      K,
      H,
      L,
      y,
      w,
      E,
      a,
      D,
      ee,
      Ee,
      We,
      ht,
      Qt,
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
      Be,
      C,
      re,
      pe,
      Se,
      Re,
      it,
      st,
      lt,
      nt,
      Rt,
      Ae,
      x,
      G,
      _e,
      ye,
      Q,
      o,
      c,
      F,
      Pe,
      Te,
      je,
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
        He,
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
        V(e, "songs-list__header--is-visible", s[8]));
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
      l[0] & 256 && V(e, "songs-list__header--is-visible", i[8]);
    },
    i: le,
    o: le,
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
      ((e = I("div")), (t = I("div")), (i = ve(r)), (n = Z()), this.h());
    },
    l(c) {
      e = S(c, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var u = v(e);
      t = S(u, "DIV", { class: !0 });
      var m = v(t);
      ((i = ke(m, r)), m.forEach(d), (n = J(u)), u.forEach(d), this.h());
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
        V(e, "songs-list__reactions", s[63].key === "quaternary" && s[4]));
    },
    m(c, u) {
      (P(c, e, u), b(e, t), b(t, i), b(e, n));
    },
    p(c, u) {
      (u[0] & 32768 && r !== (r = c[63].headerText + "") && we(i, r),
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
        u[0] & 32784 && V(e, "songs-list__reactions", c[63].key === "quaternary" && c[4]));
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
function Qr(s) {
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
      (n && n.c(), (e = Z()), B(t.$$.fragment), (r = Z()), o && o.c(), (i = Ne()));
    },
    l(c) {
      (n && n.l(c), (e = J(c)), q(t.$$.fragment, c), (r = J(c)), o && o.l(c), (i = Ne()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), O(t, c, u), P(c, r, u), o && o.m(c, u), P(c, i, u), (l = !0));
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
      (c && (d(e), d(r), d(i)), n && n.d(c), z(t, c), o && o.d(c));
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
  for (let w = 0; w < E.length; w += 1) g[w] = Qr(Ur(s, E, w));
  const T = (w) =>
    h(g[w], 1, 1, () => {
      g[w] = null;
    });
  return {
    c() {
      ((e = I("div")), i.c(), (l = Z()));
      for (let w = 0; w < g.length; w += 1) g[w].c();
      this.h();
    },
    l(w) {
      e = S(w, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var A = v(e);
      (i.l(A), (l = J(A)));
      for (let y = 0; y < g.length; y += 1) g[y].l(A);
      (A.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list svelte-88ilm8"),
        f(e, "role", "grid"),
        f(e, "data-testid", "tracklist"),
        V(e, "songs-list--header-is-visible", s[8]),
        V(e, "songs-list--has-composer-header", s[16]),
        V(e, "songs-list--has-preview", s[23]),
        V(e, "songs-list--album", s[9]),
        V(e, "songs-list--playlist", s[10]),
        V(e, "songs-list--compilation", s[18]));
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
          const L = Ur(w, E, p);
          g[p] ? (g[p].p(L, A), _(g[p], 1)) : ((g[p] = Qr(L)), g[p].c(), _(g[p], 1), g[p].m(e, null));
        }
        for (ce(), p = E.length; p < g.length; p += 1) T(p);
        ue();
      }
      (n &&
        Qe(n.update) &&
        A[0] & 3145732 &&
        n.update.call(null, {
          dragData: { items: w[21], indexedItems: w[20], containerDescriptor: w[2] },
          badgeCount: w[21].length,
          dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
        }),
        (!a || A[0] & 256) && V(e, "songs-list--header-is-visible", w[8]),
        (!a || A[0] & 65536) && V(e, "songs-list--has-composer-header", w[16]),
        (!a || A[0] & 8388608) && V(e, "songs-list--has-preview", w[23]),
        (!a || A[0] & 512) && V(e, "songs-list--album", w[9]),
        (!a || A[0] & 1024) && V(e, "songs-list--playlist", w[10]),
        (!a || A[0] & 262144) && V(e, "songs-list--compilation", w[18]));
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
    L,
    te,
    H,
    K,
    j,
    Q,
    x,
    he,
    Y,
    fe,
    ye,
    R,
    ne,
    _e,
    oe,
    X = le,
    ie = () => (X(), (X = Dt(k, (N) => t(44, (oe = N)))), k);
  s.$$.on_destroy.push(() => X());
  var G, $, W, Ie;
  const Ae = Symbol(),
    se = ct(),
    { state: be } = _t();
  De(s, be, (N) => t(49, (_e = N)));
  const ge = Ze();
  De(s, ge, (N) => t(43, (R = N)));
  const ae = Tt(),
    de = Lt(),
    U = Mt();
  De(s, U, (N) => t(12, (ne = N)));
  const D = tt(),
    F = Pt("<TrackList>"),
    Le = ps();
  let { section: Ce } = e;
  const Pe = Et();
  let Te = null,
    je = null;
  const Be = () => {
    const N = U.getItems(Ae),
      ee = ne.selectedItems.map((Ee) => ({ index: N.indexOf(Ee), id: at(Ee) }));
    if ((U.resetItems(Ae), U.clearSelection(), U.addItems(Ae, o), ee)) {
      const Ee = ee
        .map(({ index: $e, id: We }) => (at(o[$e]) === We ? o[$e] : o.find((ht) => at(ht) === We)))
        .filter(Boolean);
      U.selectMultiple(Ee);
    }
  };
  function C() {
    m === It.Album &&
      o &&
      setTimeout(() => {
        var N;
        Kt([Ce], (N = _e.user) === null || N === void 0 ? void 0 : N.subscriberType, ae, F, D, se, !0);
      }, 250);
  }
  let re = new Map();
  async function pe(N, ee, { detail: Ee }) {
    if (a && Ce.reorderAction && "indexedItems" in Ee.data && Ot(Ee.data.containerDescriptor) === Ot(r)) {
      let $e = Ee.dropTarget === ft.Top ? ee - 1 : ee;
      (Se($e), await de(Ss(Ce.reorderAction, $e, Ee.data)), Re());
    }
  }
  function Se(N) {
    t(1, (Te = N));
  }
  async function Re() {
    (clearTimeout(je), t(1, (Te = null)), (je = null), await Es());
  }
  const it = (N) => {
    N.key === "a" && (N.metaKey || N.ctrlKey) && (N.preventDefault(), U.selectAll());
  };
  ut(() => {
    (U.resetItems(Ae), se.unsubscribeFromUpdates(u), bs());
  });
  const st = (N) => {
      Pe("catalogActionOnTrackListItem", N.detail);
    },
    lt = (N, ee, ...Ee) => pe(N, ee, ...Ee),
    nt = async (N) => {
      const { itemId: ee } = N.detail,
        Ee = As({ operationType: Cs.RemoveFromPlaylist, id: ee, containerId: Ot(r) });
      await ae.dispatch(Ee);
      const $e = Ds(ee);
      (await ae.perform($e),
        await ae.perform(
          wt({ kind: "libraryItemsDeleted", metadata: { id: ee, type: "library-songs", isLibraryContentId: !0 } }),
        ));
    };
  return (
    (s.$$set = (N) => {
      "section" in N && t(0, (Ce = N.section));
    }),
    (s.$$.update = () => {
      if (
        (s.$$.dirty[0] & 1 && t(2, (r = Ce.containerContentDescriptor)),
        s.$$.dirty[0] & 1 && t(24, (i = Ce.containerArtwork)),
        s.$$.dirty[0] & 1 && t(38, (l = !!Ce.canEdit)),
        s.$$.dirty[0] & 2 && t(11, (n = Te != null)),
        (s.$$.dirty[0] & 2049) | (s.$$.dirty[1] & 128) &&
          t(14, (a = l && ae.isUserInHomeStorefront() && !!Ce.reorderAction && !n)),
        s.$$.dirty[0] & 1 && t(3, (o = Ce.items || [])),
        s.$$.dirty[0] & 8 && t(23, (c = o.some((N) => N.isPreviewMode))),
        s.$$.dirty[0] & 8 && Be(),
        s.$$.dirty[0] & 4 && t(36, (u = !!r && Zt({ contentDescriptor: r }))),
        s.$$.dirty[0] & 4 && t(41, (m = r?.kind)),
        s.$$.dirty[1] & 32 && ie(t(22, (k = se.subscribeToUpdates(u)))),
        s.$$.dirty[1] & 9250 &&
          t(42, (E = oe && !!m && (t(32, (G = se.get(u, m))) === null || G === void 0 ? void 0 : G.inLibrary))),
        s.$$.dirty[1] & 2048 && C(),
        s.$$.dirty[0] & 4096 &&
          t(
            40,
            (g = (() =>
              ne.currentMouseTarget
                ? ne.selectedItems.includes(ne.currentMouseTarget)
                  ? ne.selectedItems
                  : [ne.currentMouseTarget]
                : [])()),
          ),
        s.$$.dirty[1] & 512 && t(21, (T = g.map((N) => N?.contentDescriptor))),
        (s.$$.dirty[0] & 8) | (s.$$.dirty[1] & 512) &&
          t(20, (w = g.map((N) => ({ index: o.indexOf(N), item: N.contentDescriptor })))),
        s.$$.dirty[0] & 8 && t(19, (A = o.map((N) => N.contentDescriptor))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[1] & 4) &&
          t(37, (y = t(33, ($ = Ce.header)) === null || $ === void 0 ? void 0 : $.item)),
        s.$$.dirty[0] & 8 &&
          t(
            39,
            (p = (() => {
              var N;
              const ee = (N = o[0]) === null || N === void 0 ? void 0 : N.layoutStyle;
              return typeof ee == "string" ? ee : ee?.kind;
            })()),
          ),
        s.$$.dirty[1] & 256 && t(9, (L = p === "albumTrackList")),
        s.$$.dirty[1] & 256 && t(18, (te = p === "compilationTrackList")),
        s.$$.dirty[1] & 256 && t(10, (H = p === "playlistTrackList")),
        (s.$$.dirty[0] & 1025) | (s.$$.dirty[1] & 136) &&
          t(
            17,
            (K =
              t(34, (W = vs(Ce.containerContentDescriptor) && H && l && ae.isUserInHomeStorefront())) !== null &&
              W !== void 0
                ? W
                : !1),
          ),
        s.$$.dirty[0] & 1 && t(8, (j = ks(Ce.header))),
        s.$$.dirty[0] & 1 && t(16, (Q = wi(Ce.header))),
        s.$$.dirty[0] & 520 &&
          t(
            7,
            (x =
              o.some((N) => {
                var ee;
                return (ee = N.subtitleLinks) === null || ee === void 0 ? void 0 : ee.length;
              }) && !L),
          ),
        s.$$.dirty[0] & 8 &&
          t(
            6,
            (he = o.some((N) => {
              var ee;
              return (ee = N.tertiaryLinks) === null || ee === void 0 ? void 0 : ee.length;
            })),
          ),
        s.$$.dirty[1] & 64 && t(5, (Y = !!y?.fourthColumnText)),
        s.$$.dirty[0] & 8 &&
          t(
            4,
            (fe = o.some((N) => {
              var ee;
              return (ee = N.reactions) === null || ee === void 0 ? void 0 : ee.length;
            })),
          ),
        (s.$$.dirty[0] & 480) | (s.$$.dirty[1] & 4160) &&
          t(
            15,
            (ye = (() => {
              const N = [];
              let ee;
              return (
                j && (ee = y),
                x &&
                  N.push({
                    key: "secondary",
                    headerText: ee?.secondColumnText || R.t("ASE.Web.Music.SongsListHeaders.artist"),
                  }),
                he &&
                  N.push({
                    key: "tertiary",
                    headerText: ee?.thirdColumnText || R.t("ASE.Web.Music.SongsListHeaders.album"),
                  }),
                Y && N.push({ key: "quaternary", headerText: ee?.fourthColumnText }),
                [
                  { headerText: "", key: "favorite-or-popular" },
                  { key: "song", headerText: ee?.firstColumnText || R.t("ASE.Web.Music.SongsListHeaders.song") },
                  ...N,
                  { headerText: R.t("ASE.Web.Music.SongsListHeaders.time"), key: "time" },
                ]
              );
            })()),
          ),
        (s.$$.dirty[0] & 25) | (s.$$.dirty[1] & 16))
      ) {
        if (!(t(35, (Ie = Ce.collaborators)) === null || Ie === void 0) && Ie.length)
          ws(new Map(Ce.collaborators.map((N) => [N.id, N])));
        else if (Le) {
          let N = o
            .map((Ee) => {
              var $e, We;
              return (We =
                ($e = Ee.socialProfileContentDescriptor) === null || $e === void 0 ? void 0 : $e.identifiers) ===
                null || We === void 0
                ? void 0
                : We.socialProfileID;
            })
            .filter((Ee) => Ee != null);
          const ee = new Set(N);
          ee.size > 0 &&
            Le.fetchProfilesFromIds(Array.from(ee)).then((Ee) => {
              t(13, (re = new Map(Ee.map(($e) => [$e.id, $e]))));
            });
        }
        fe && o.length && ys(new Map(o.map((N) => [N.contentDescriptor.identifiers.storeAdamID, N.reactions])));
      }
    }),
    [
      Ce,
      Te,
      r,
      o,
      fe,
      Y,
      he,
      x,
      j,
      L,
      H,
      n,
      ne,
      re,
      a,
      ye,
      Q,
      K,
      te,
      A,
      w,
      T,
      k,
      c,
      i,
      be,
      ge,
      ae,
      U,
      Pe,
      pe,
      it,
      G,
      $,
      W,
      Ie,
      u,
      y,
      l,
      p,
      g,
      m,
      E,
      R,
      oe,
      st,
      lt,
      nt,
    ]
  );
}
class Vn extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Fn, Mn, He, { section: 0 }, null, [-1, -1, -1]));
  }
}
function $n(s) {
  let e, t;
  return (
    (e = new Ts({ props: { initials: ar(s[0].name) } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
      },
    }
  );
}
function Nn(s) {
  let e = s[0] + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 1 && e !== (e = r[0] + "") && we(t, e);
    },
    d(r) {
      r && d(t);
    },
  };
}
function Yr(s) {
  let e, t, r;
  return (
    (t = new yi({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(i) {
        e = S(i, "DIV", { class: !0 });
        var l = v(e);
        (q(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "chevron-container svelte-16yxrct");
      },
      m(i, l) {
        (P(i, e, l), O(t, e, null), (r = !0));
      },
      i(i) {
        r || (_(t.$$.fragment, i), (r = !0));
      },
      o(i) {
        (h(t.$$.fragment, i), (r = !1));
      },
      d(i) {
        (i && d(e), z(t));
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
  function A(p, L) {
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
  let y = s[0].segue && Yr();
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        i.c(),
        (l = Z()),
        (n = I("div")),
        (a = I("div")),
        (c = ve(o)),
        (u = Z()),
        (m = I("div")),
        B(k.$$.fragment),
        (E = Z()),
        y && y.c(),
        this.h());
    },
    l(p) {
      e = S(p, "DIV", { class: !0 });
      var L = v(e);
      t = S(L, "DIV", { class: !0 });
      var te = v(t);
      (i.l(te), te.forEach(d), (l = J(L)), (n = S(L, "DIV", { class: !0 })));
      var H = v(n);
      a = S(H, "DIV", { class: !0 });
      var K = v(a);
      ((c = ke(K, o)), K.forEach(d), (u = J(H)), (m = S(H, "DIV", { class: !0 })));
      var j = v(m);
      (q(k.$$.fragment, j), j.forEach(d), H.forEach(d), (E = J(L)), y && y.l(L), L.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "artist-artwork svelte-16yxrct"),
        f(a, "class", "artist-name svelte-16yxrct"),
        f(m, "class", "artist-roles svelte-16yxrct"),
        f(n, "class", "artist-metadata svelte-16yxrct"),
        f(e, "class", "credit-lockup__container svelte-16yxrct"));
    },
    m(p, L) {
      (P(p, e, L),
        b(e, t),
        w[r].m(t, null),
        b(e, l),
        b(e, n),
        b(n, a),
        b(a, c),
        b(n, u),
        b(n, m),
        O(k, m, null),
        b(e, E),
        y && y.m(e, null),
        (g = !0));
    },
    p(p, L) {
      let te = r;
      ((r = A(p)),
        r === te
          ? w[r].p(p, L)
          : (ce(),
            h(w[te], 1, 1, () => {
              w[te] = null;
            }),
            ue(),
            (i = w[r]),
            i ? i.p(p, L) : ((i = w[r] = T[r](p)), i.c()),
            _(i, 1),
            i.m(t, null)),
        (!g || L & 1) && o !== (o = p[0].name + "") && we(c, o));
      const H = {};
      (L & 1 && (H.items = p[0].roleNames),
        L & 2 && (H.translateFn = p[1].t),
        L & 9 && (H.$$scope = { dirty: L, ctx: p }),
        k.$set(H),
        p[0].segue
          ? y
            ? L & 1 && _(y, 1)
            : ((y = Yr()), y.c(), _(y, 1), y.m(e, null))
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
      (p && d(e), w[r].d(), z(k), y && y.d());
    },
  };
}
function jn(s) {
  let e, t;
  return (
    (e = new Je({ props: { action: s[0].segue, $$slots: { default: [Hn] }, $$scope: { ctx: s } } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
      },
    }
  );
}
function Bn(s, e, t) {
  let r,
    { item: i } = e;
  const l = Ze();
  return (
    De(s, l, (n) => t(1, (r = n))),
    (s.$$set = (n) => {
      "item" in n && t(0, (i = n.item));
    }),
    [i, r, l]
  );
}
class On extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Bn, jn, He, { item: 0 }));
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
      ((e = I("p")), (r = ve(t)), this.h());
    },
    l(i) {
      e = S(i, "P", { class: !0 });
      var l = v(e);
      ((r = ke(l, t)), l.forEach(d), this.h());
    },
    h() {
      f(e, "class", "credits__lyrics-snippet-line svelte-15ugb9h");
    },
    m(i, l) {
      (P(i, e, l), b(e, r));
    },
    p(i, l) {
      l & 32 && t !== (t = i[25] + "") && we(r, t);
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
        ((t = ve(e)), (r = Z()), B(i.$$.fragment));
      },
      l(n) {
        ((t = ke(n, e)), (r = J(n)), q(i.$$.fragment, n));
      },
      m(n, a) {
        (P(n, t, a), P(n, r, a), O(i, n, a), (l = !0));
      },
      p(n, a) {
        (!l || a & 18) &&
          e !==
            (e =
              (n[4]
                ? n[1].t("ASE.Web.Music.View.Full.Lyrics")
                : n[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "") &&
          we(t, e);
      },
      i(n) {
        l || (_(i.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(i.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (d(t), d(r)), z(i, n));
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
        ((e = I("button")), B(t.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "BUTTON", { class: !0 });
        var a = v(e);
        (q(t.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        f(e, "class", "lyrics-contextual-button svelte-15ugb9h");
      },
      m(n, a) {
        (P(n, e, a), O(t, e, null), (r = !0), i || ((l = Me(e, "click", s[18])), (i = !0)));
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
        (n && d(e), z(t), (i = !1), l());
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
      (Ye(t, "static-lyrics", !0),
        Ye(t, "catalog-id", (r = s[0].songId)),
        Ye(t, "show-translation", s[8]),
        Ye(t, "show-pronunciation", !1),
        Ye(t, "enable-translations", !0),
        Ye(t, "class", "svelte-15ugb9h"),
        f(e, "slot", "content"));
    },
    m(n, a) {
      (P(n, e, a), b(e, t), i || ((l = Me(t, "lyricsReady", s[13])), (i = !0)));
    },
    p(n, a) {
      (a & 1 && r !== (r = n[0].songId) && Ye(t, "catalog-id", r), a & 256 && Ye(t, "show-translation", n[8]));
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
      Qe(s[2].close) && s[2].close.apply(this, arguments);
    }),
    {
      c() {
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
        ((t = Z()), B(r.$$.fragment), (i = Z()), (l = I("div")), B(n.$$.fragment), this.h());
      },
      l(m) {
        e = S(m, "DIV", { class: !0, "data-testid": !0 });
        var k = v(e);
        for (let g = 0; g < c.length; g += 1) c[g].l(k);
        ((t = J(k)), q(r.$$.fragment, k), k.forEach(d), (i = J(m)), (l = S(m, "DIV", { class: !0 })));
        var E = v(l);
        (q(n.$$.fragment, E), E.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "credits__lyrics-snippet svelte-15ugb9h"),
          f(e, "data-testid", "credits__lyrics-snippet"),
          f(l, "class", "credits__lyrics-modal svelte-15ugb9h"));
      },
      m(m, k) {
        P(m, e, k);
        for (let E = 0; E < c.length; E += 1) c[E] && c[E].m(e, null);
        (b(e, t), O(r, e, null), P(m, i, k), P(m, l, k), O(n, l, null), (a = !0));
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
        (m && (d(e), d(i), d(l)), Ft(c, m), z(r), s[19](null), z(n));
      },
    }
  );
}
let Gn = null;
function Zn(s, e, t) {
  let r, i, l, n, a, o, c, u;
  De(s, cr, (Y) => t(8, (o = Y)));
  var m, k;
  let { section: E } = e;
  const g = Ze();
  De(s, g, (Y) => t(1, (u = Y)));
  const { state: T } = _t();
  De(s, T, (Y) => t(17, (c = Y)));
  const w = Tt(),
    A = tt();
  let y,
    p = null;
  const L = () => {
      if (a) (y.showModal(), H(), j && (p = Date.now()));
      else {
        const Y = Ms({ type: Fs.Open, activePath: Vs.subscribe });
        w.perform(Y);
      }
    },
    te = () => {
      if (p) {
        const Y = Date.now() - p;
        (Ns(w, j, A.storefront, o, Y), (p = null));
      }
    },
    H = () => {
      (w.recordCustomMetricsEvent({
        actionType: "navigate",
        targetType: "button",
        targetId: "lyrics",
        eventType: "click",
      }),
        w.recordCustomMetricsEvent({ eventType: "page", pageDisplayType: "cardView", pageType: "Lyrics" }));
    };
  let K = !1,
    j = null;
  function Q(Y) {
    (t(3, (K = Y.detail.hasTranslations)),
      (j = { lyricsId: Y.detail.lyricsId, language: Y.detail.language, catalogId: Y.detail.catalogId }));
  }
  const x = () => $s(cr, (o = !o), o);
  function he(Y) {
    Ut[Y ? "unshift" : "push"](() => {
      ((y = Y), t(2, y));
    });
  }
  return (
    (s.$$set = (Y) => {
      "section" in Y && t(14, (E = Y.section));
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
    [r, u, y, K, a, n, l, i, o, g, T, L, te, Q, E, m, k, c, x, he]
  );
}
class Jn extends Fe {
  constructor(e) {
    (super(), Ve(this, e, Zn, Kn, He, { section: 14 }));
  }
}
function Qn(s) {
  let e, t;
  return (
    (e = new Bs({ props: { itemComponent: s[1], section: s[0] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
      },
    }
  );
}
function Yn(s) {
  let e, t;
  return (
    (e = new Jn({ props: { section: s[0] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(r) {
        q(e.$$.fragment, r);
      },
      m(r, i) {
        (O(e, r, i), (t = !0));
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
        z(e, r);
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
  const u = [Yn, Qn],
    m = [];
  function k(E, g) {
    return E[2] ? 0 : 1;
  }
  return (
    (a = k(s)),
    (o = m[a] = u[a](s)),
    {
      c() {
        ((e = I("section")), (t = I("h2")), (i = ve(r)), (l = Z()), (n = I("div")), o.c(), this.h());
      },
      l(E) {
        e = S(E, "SECTION", { class: !0, "data-testid": !0 });
        var g = v(e);
        t = S(g, "H2", { class: !0, "data-testid": !0 });
        var T = v(t);
        ((i = ke(T, r)), T.forEach(d), (l = J(g)), (n = S(g, "DIV", { class: !0 })));
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
          we(i, r);
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
    De(s, a, (o) => t(3, (l = o))),
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
    (super(), Ve(this, e, eo, Xn, He, { section: 0 }));
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
        ((e = I("li")), B(t.$$.fragment), (r = Z()), this.h());
      },
      l(l) {
        e = S(l, "LI", { class: !0, "data-testid": !0 });
        var n = v(e);
        (q(t.$$.fragment, n), (r = J(n)), n.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "calendar-events-list-item svelte-57psqt"), f(e, "data-testid", "events-list-item"));
      },
      m(l, n) {
        (P(l, e, n), O(t, e, null), b(e, r), (i = !0));
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
        (l && d(e), z(t));
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
      (r && r.c(), (e = Ne()));
    },
    l(i) {
      (r && r.l(i), (e = Ne()));
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
    (super(), Ve(this, e, io, ro, He, { section: 0 }));
  }
}
function lo(s) {
  let e = s[3].warn("unsupported list section:", s[1], s[0]) + "",
    t;
  return {
    c() {
      t = ve(e);
    },
    l(r) {
      t = ke(r, e);
    },
    m(r, i) {
      P(r, t, i);
    },
    p(r, i) {
      i & 3 && e !== (e = r[3].warn("unsupported list section:", r[1], r[0]) + "") && we(t, e);
    },
    i: le,
    o: le,
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
        (e && B(e.$$.fragment), (t = Ne()));
      },
      l(n) {
        (e && q(e.$$.fragment, n), (t = Ne()));
      },
      m(n, a) {
        (e && O(e, n, a), P(n, t, a), (r = !0));
      },
      p(n, a) {
        if (a & 4 && i !== (i = n[2])) {
          if (e) {
            ce();
            const o = e;
            (h(o.$$.fragment, 1, 0, () => {
              z(o, 1);
            }),
              ue());
          }
          i ? ((e = ur(i, l(n))), B(e.$$.fragment), _(e.$$.fragment, 1), O(e, t.parentNode, t)) : (e = null);
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
        (n && d(t), e && z(e, n));
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
        (t.c(), (r = Ne()));
      },
      l(o) {
        (t.l(o), (r = Ne()));
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
    (super(), Ve(this, e, ao, oo, He, { section: 0 }));
  }
}
export { ho as default };
