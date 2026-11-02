import {
  S as Ve,
  i as $e,
  n as He,
  I as Oe,
  e as I,
  s as Z,
  a as S,
  b as v,
  g as d,
  d as J,
  h as f,
  t as V,
  j as Be,
  k as P,
  l as b,
  o as Fe,
  ba as Hr,
  p as et,
  u as ue,
  aO as sr,
  aP as qr,
  w as fe,
  bg as Qe,
  r as _,
  v as h,
  y as mt,
  z as St,
  aW as Et,
  a_ as wt,
  a$ as lr,
  X as Wt,
  H as ne,
  b2 as nr,
  b3 as or,
  b4 as ar,
  b5 as cr,
  bh as At,
  bi as ze,
  bj as Ue,
  bk as Ke,
  bl as Xe,
  bm as Ct,
  bn as xe,
  c as B,
  f as W,
  m as O,
  x as z,
  b7 as Br,
  aN as li,
  bo as Or,
  bp as ut,
  V as ft,
  bq as ct,
  E as ke,
  F as we,
  G as ye,
  br as Dt,
  a1 as yt,
  bs as zr,
  bt as Wr,
  P as Ce,
  bu as jr,
  bv as Tt,
  U as Ge,
  bd as Pt,
  aR as tt,
  bw as _t,
  bx as Ur,
  bb as It,
  by as kt,
  J as Re,
  bz as Kr,
  bA as jt,
  bB as Gr,
  b1 as Zr,
  bC as Jr,
  bD as ur,
  D as fr,
  aQ as Lt,
  bE as dr,
  bF as Mt,
  bG as Ut,
  bH as Kt,
  bI as mr,
  bJ as _r,
  bK as Gt,
  bL as hr,
  bM as Qr,
  bN as Yr,
  bO as Ot,
  be as ni,
  bP as Xr,
  bQ as gr,
  bR as pr,
  bS as xr,
  bT as es,
  bU as it,
  bV as Ze,
  a6 as br,
  bW as ts,
  bX as is,
  bY as dt,
  bZ as rs,
  b_ as ss,
  b$ as ls,
  c0 as vr,
  c1 as ns,
  c2 as os,
  c3 as as,
  aj as cs,
  al as us,
  c4 as fs,
  c5 as kr,
  c6 as ds,
  c7 as vt,
  c8 as ms,
  c9 as _s,
  ca as oi,
  cb as hs,
  cc as gs,
  cd as zt,
  K as Ft,
  ce as ps,
  cf as bs,
  cg as vs,
  ch as ks,
  ci as wr,
  cj as ws,
  ck as ys,
  cl as Is,
  ai as qt,
  cm as Ss,
  cn as Es,
  co as As,
  cp as Cs,
  cq as Ds,
  b8 as yr,
  cr as Ts,
  cs as ai,
  a5 as Ps,
  W as Ls,
  ct as ci,
  cu as Ms,
  cv as Fs,
  cw as Vs,
  cx as $s,
  cy as Ns,
  cz as Rs,
  b0 as Ye,
  cA as Hs,
  cB as qs,
  cC as Bs,
  cD as Os,
  cE as ui,
} from "./main.js";
import { s as zs } from "./splitIntoChunks.js";
function Ws(s, e) {
  const t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i],
        l = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? t.push(l(s, r[1])) : t.push(l(s));
    }
  return {
    update(i) {
      if (((i && i.length) || 0) !== t.length) throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const l = t[r];
          if (l && l.update) {
            const n = i[r];
            Array.isArray(n) && n.length > 1 ? l.update(n[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        r && r.destroy && r.destroy();
      }
    },
  };
}
function fi(s, e, t) {
  const i = s.slice();
  ((i[53] = e[t]), (i[57] = t));
  const r = i[8] + i[57];
  i[54] = r;
  const l = i[54] * i[2];
  return ((i[55] = l), i);
}
const js = (s) => ({
    item: s[0] & 2048,
    itemIdx: s[0] & 2304,
    visibleItems: s[0] & 2048,
    isSelected: s[0] & 2049,
    handleClick: s[0] & 2048,
  }),
  di = (s) => ({
    item: s[58],
    itemIdx: s[54],
    visibleItems: s[11],
    isSelected: s[0] === s[58]?.id,
    handleClick: s[15](s[57]),
  }),
  Us = (s) => ({ itemIdx: s[0] & 2304 }),
  mi = (s) => ({ itemIdx: s[54] });
function Ks(s) {
  return { c: ne, l: ne, m: ne, p: ne, i: ne, o: ne, d: ne };
}
function Gs(s) {
  let e;
  const t = s[38].itemComponent,
    i = nr(t, s, s[37], di);
  return {
    c() {
      i && i.c();
    },
    l(r) {
      i && i.l(r);
    },
    m(r, l) {
      (i && i.m(r, l), (e = !0));
    },
    p(r, l) {
      i && i.p && (!e || (l[0] & 2305) | (l[1] & 64)) && or(i, t, r, r[37], e ? cr(t, r[37], l, js) : ar(r[37]), di);
    },
    i(r) {
      e || (_(i, r), (e = !0));
    },
    o(r) {
      (h(i, r), (e = !1));
    },
    d(r) {
      i && i.d(r);
    },
  };
}
function Zs(s) {
  let e;
  const t = s[38].placeholder,
    i = nr(t, s, s[37], mi);
  return {
    c() {
      i && i.c();
    },
    l(r) {
      i && i.l(r);
    },
    m(r, l) {
      (i && i.m(r, l), (e = !0));
    },
    p(r, l) {
      i && i.p && (!e || (l[0] & 2304) | (l[1] & 64)) && or(i, t, r, r[37], e ? cr(t, r[37], l, Us) : ar(r[37]), mi);
    },
    i(r) {
      e || (_(i, r), (e = !0));
    },
    o(r) {
      (h(i, r), (e = !1));
    },
    d(r) {
      i && i.d(r);
    },
  };
}
function _i(s, e) {
  let t,
    i,
    r,
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
    wt((i = e[53]), c),
    {
      key: s,
      first: null,
      c() {
        ((t = I("div")), c.block.c(), (r = Z()), this.h());
      },
      l(u) {
        t = S(u, "DIV", { class: !0, "data-testid": !0, role: !0 });
        var m = v(t);
        (c.block.l(m), (r = J(m)), m.forEach(d), this.h());
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
        (P(u, t, m), c.block.m(t, (c.anchor = null)), (c.mount = () => t), (c.anchor = r), b(t, r), (o = !0));
      },
      p(u, m) {
        ((e = u),
          (c.ctx = e),
          (m[0] & 2048 && i !== (i = e[53]) && wt(i, c)) || lr(c, e, m),
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
    i,
    r = [],
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
    w = Oe(s[11]);
  const A = (y) => y[53];
  for (let y = 0; y < w.length; y += 1) {
    let p = fi(s, w, y),
      L = A(p);
    l.set(L, (r[y] = _i(L, p)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")), (i = I("div")));
      for (let y = 0; y < r.length; y += 1) r[y].c();
      ((u = Z()), (m = I("div")), this.h());
    },
    l(y) {
      e = S(y, "DIV", { class: !0, "data-testid": !0, tabindex: !0 });
      var p = v(e);
      t = S(p, "DIV", { class: !0, id: !0 });
      var L = v(t);
      i = S(L, "DIV", { class: !0, "data-testid": !0, role: !0, "aria-rowcount": !0 });
      var te = v(i);
      for (let R = 0; R < r.length; R += 1) r[R].l(te);
      (te.forEach(d),
        (u = J(L)),
        (m = S(L, "DIV", { class: !0 })),
        v(m).forEach(d),
        L.forEach(d),
        p.forEach(d),
        this.h());
    },
    h() {
      (f(i, "class", "virtual-rows svelte-zsv6m4"),
        f(i, "data-testid", "virtual-rows"),
        f(i, "role", (n = s[7] ? "grid" : null)),
        f(i, "aria-rowcount", (a = s[7] ? s[1] : null)),
        V(i, "row-zebra-striping", s[5]),
        Be(i, "min-height", o),
        Be(i, "--rowHeight", c),
        f(m, "class", "svelte-zsv6m4"),
        V(m, "bottom-spacer-hidden", s[3]),
        Be(m, "height", "10px"),
        f(t, "class", "scrollable-container svelte-zsv6m4"),
        f(t, "id", "scrollable-page-override"),
        Be(t, "contain", "layout"),
        f(e, "class", "container svelte-zsv6m4"),
        f(e, "data-testid", "container"),
        f(e, "tabindex", "0"),
        V(e, "scrollable-container-constrained-width", s[4]));
    },
    m(y, p) {
      (P(y, e, p), b(e, t), b(t, i));
      for (let L = 0; L < r.length; L += 1) r[L] && r[L].m(i, null);
      (b(t, u),
        b(t, m),
        s[39](t),
        (E = !0),
        g ||
          ((T = [
            Fe(t, "scroll", Hr(s[14], 10)),
            et(s[12].call(null, t)),
            Fe(t, "virtualScrollResize", s[13]),
            Fe(e, "keydown", s[17]),
            Fe(e, "keyup", s[16]),
            et((k = Ws.call(null, e, s[6]))),
          ]),
          (g = !0)));
    },
    p(y, p) {
      ((p[0] & 35205) | (p[1] & 64) &&
        ((w = Oe(y[11])), ue(), (r = sr(r, p, A, 1, y, w, l, i, qr, _i, null, fi)), fe()),
        (!E || (p[0] & 128 && n !== (n = y[7] ? "grid" : null))) && f(i, "role", n),
        (!E || (p[0] & 130 && a !== (a = y[7] ? y[1] : null))) && f(i, "aria-rowcount", a),
        (!E || p[0] & 32) && V(i, "row-zebra-striping", y[5]),
        p[0] & 512 && o !== (o = `${y[9]}px`) && Be(i, "min-height", o),
        p[0] & 4 && c !== (c = `${y[2]}px`) && Be(i, "--rowHeight", c),
        (!E || p[0] & 8) && V(m, "bottom-spacer-hidden", y[3]),
        k && Qe(k.update) && p[0] & 64 && k.update.call(null, y[6]),
        (!E || p[0] & 16) && V(e, "scrollable-container-constrained-width", y[4]));
    },
    i(y) {
      if (!E) {
        for (let p = 0; p < w.length; p += 1) _(r[p]);
        E = !0;
      }
    },
    o(y) {
      for (let p = 0; p < r.length; p += 1) h(r[p]);
      E = !1;
    },
    d(y) {
      y && d(e);
      for (let p = 0; p < r.length; p += 1) r[p].d();
      (s[39](null), (g = !1), mt(T));
    },
  };
}
const Bt =
    typeof window < "u" && window.ResizeObserver
      ? new window.ResizeObserver((s) => {
          for (const e of s) {
            const t = e?.borderBoxSize[0].blockSize ?? e.contentRect.height,
              i = new CustomEvent("virtualScrollResize", { detail: { height: t } });
            e.target.dispatchEvent(i);
          }
        })
      : null,
  hi = 500;
function Qs(s, e, t) {
  let i,
    r,
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
  const w = St();
  let { items: A } = e,
    { itemCount: y } = e,
    { itemHeight: p } = e,
    { amountToFetch: L } = e,
    { bottomSpacerHidden: te = !1 } = e,
    { bufferHeight: R } = e,
    { fetchIntentFn: K } = e,
    { selectedItemId: H = null } = e,
    { log: Q } = e,
    { jet: ee } = e,
    { overrideKeydown: he = null } = e,
    { restrainContainerWidth: x = !1 } = e,
    { rowZebraStriping: oe = !1 } = e,
    { use: be = [] } = e,
    { allowCountUpdates: q = !1 } = e,
    { useManualPagination: le = !0 } = e,
    { pageMetadata: me = null } = e,
    { setAriaAttributes: ae = !1 } = e,
    Y = 0,
    re,
    G = 0,
    $ = 0,
    Ie;
  const j = (C, ie, pe) => C.slice(ie, pe).map((Se) => A[Se] ?? ve(Se)),
    Ee = (C, ie, pe) => {
      ie > 0 &&
        pe > 0 &&
        (C.slice(ie, o).forEach((Se) => {
          A[Se] || ve(Se);
        }),
        C.slice(c, pe).forEach((Se) => {
          A[Se] || ve(Se);
        }));
    },
    se = (C, ie, pe) => (C === "top" ? Math.floor : Math.ceil)(ie / pe),
    ve = async (C) => {
      const ie = Math.floor(C / L),
        pe = C % L;
      if (!Ie[ie]) {
        const Se = ie * L;
        Ie[ie] = (async () => {
          await Ie?.[ie - 1];
          const { items: Ne } = await ge(Se);
          return Ne;
        })();
      }
      try {
        const Ne = (await Ie[ie])[pe];
        return (Ne && t(18, (A[C] = Ne), A), Ne);
      } catch {
        return (delete Ie[ie], null);
      }
    },
    ge = async (C) => {
      if (le)
        try {
          const ie = K({ offset: C, limit: L }),
            { items: pe, next: Se, total: Ne } = await ee.dispatch(ie);
          return (w("fetchComplete", { items: pe, offset: C }), { items: pe, next: Se, total: Ne });
        } catch (ie) {
          return (Q.error("Loading Paginated Items Failed", ie), {});
        }
      else if (i) {
        const ie = K({ path: i, limit: L });
        try {
          const pe = await ee.dispatch(ie);
          i = pe.next;
          const { items: Se } = pe;
          return (w("fetchComplete", { items: Se, offset: C }), { items: Se, next: i });
        } catch (pe) {
          return (Q.error("Loading Paginated Items Failed", pe), {});
        }
      } else
        q && (Q.warn("No more pages to fetch, updating scroll list total count."), w("updateItemsCount", A.length));
    },
    ce = (C) => {
      if (Bt)
        return (
          Bt.observe(C, { box: "border-box" }),
          {
            destroy: () => {
              Bt.unobserve(C);
            },
          }
        );
    },
    de = (C) => {
      const { height: ie } = C.detail;
      t(28, (G = ie));
    },
    U = () => {
      t(29, ($ = re?.scrollTop));
    };
  function D(C, ie) {
    const { item: pe } = C.detail,
      { id: Se } = pe;
    (t(0, (H = Se)), (Y = ie), w("select", { id: H, scrollTop: re.scrollTop }));
  }
  const F = (C) => (ie) => D(ie, C),
    Le = { shift: !1, tab: !1 },
    Ae = (C, ie) => {
      C === "Shift" ? (Le.shift = ie) : C === "Tab" && (Le.tab = ie);
    },
    Pe = () => Le.shift && Le.tab;
  function De(C) {
    (C.key === "Tab" || C.key === "Shift") && (C.preventDefault(), Ae(C.key, !1));
  }
  function We(C) {
    if (he) {
      he(C);
      return;
    }
    (C.key === "ArrowUp" || C.key === "ArrowDown") && C.preventDefault();
    const ie = C.key === "Tab" && C.shiftKey && Y === 0,
      pe = C.key === "Tab" && !C.shiftKey && Y === A.length - 1,
      Se = ie || pe;
    switch ((C.key === "Tab" && !Se && C.preventDefault(), Ae(C.key, !0), C.key)) {
      case "ArrowUp":
        Y = Math.max(Y - 1, 0);
        break;
      case "ArrowDown":
        Y = Math.min(Y + 1, A.length - 1);
        break;
      case "Tab":
        Pe() ? (Y = Math.max(Y - 1, 0)) : (Y = Math.min(Y + 1, A.length - 1));
        break;
    }
    A[Y]?.id && (t(0, (H = A[Y].id)), w("select", { id: H, scrollTop: re.scrollTop }));
  }
  Et(() => {
    const C = L;
    if (!(y <= C))
      if (le && y <= hi) {
        const ie = Math.min(y, hi);
        for (let pe = C; pe < ie; pe++) ve(pe);
      } else ve(C);
  });
  function qe(C) {
    Wt[C ? "unshift" : "push"](() => {
      ((re = C), t(10, re));
    });
  }
  return (
    (s.$$set = (C) => {
      ("items" in C && t(18, (A = C.items)),
        "itemCount" in C && t(1, (y = C.itemCount)),
        "itemHeight" in C && t(2, (p = C.itemHeight)),
        "amountToFetch" in C && t(19, (L = C.amountToFetch)),
        "bottomSpacerHidden" in C && t(3, (te = C.bottomSpacerHidden)),
        "bufferHeight" in C && t(20, (R = C.bufferHeight)),
        "fetchIntentFn" in C && t(21, (K = C.fetchIntentFn)),
        "selectedItemId" in C && t(0, (H = C.selectedItemId)),
        "log" in C && t(22, (Q = C.log)),
        "jet" in C && t(23, (ee = C.jet)),
        "overrideKeydown" in C && t(24, (he = C.overrideKeydown)),
        "restrainContainerWidth" in C && t(4, (x = C.restrainContainerWidth)),
        "rowZebraStriping" in C && t(5, (oe = C.rowZebraStriping)),
        "use" in C && t(6, (be = C.use)),
        "allowCountUpdates" in C && t(25, (q = C.allowCountUpdates)),
        "useManualPagination" in C && t(26, (le = C.useManualPagination)),
        "pageMetadata" in C && t(27, (me = C.pageMetadata)),
        "setAriaAttributes" in C && t(7, (ae = C.setAriaAttributes)),
        "$$scope" in C && t(37, (T = C.$$scope)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 134217728 && (i = me?.next),
        s.$$.dirty[0] & 786434 &&
          (Ie = zs(A, L).map((C, ie) => {
            const Se = (ie + 1) * L ? L : y % L;
            if (!(C.length < Se)) return new Promise((Ne) => Ne(C));
          })),
        s.$$.dirty[0] & 2 && t(33, (r = [...Array(y).keys()])),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 4) && t(9, (l = p * r.length)),
        s.$$.dirty[0] & 537919488 && t(36, (n = Math.max(0, $ - R))),
        s.$$.dirty[0] & 806355456 && t(35, (a = Math.min($ + G + R, l))),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 32) && t(8, (o = se("top", n, p))),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 16) && t(30, (c = se("bottom", a, p))),
        (s.$$.dirty[0] & 1073742080) | (s.$$.dirty[1] & 4) && t(11, (u = j(r, o, c))),
        s.$$.dirty[0] & 269484032 && t(34, (m = G + 2 * R)),
        (s.$$.dirty[0] & 4) | (s.$$.dirty[1] & 40) && t(32, (k = se("top", Math.max(0, n - m), p))),
        (s.$$.dirty[0] & 516) | (s.$$.dirty[1] & 24) && t(31, (E = se("bottom", Math.min(a + m, l), p))),
        s.$$.dirty[1] & 7 && Ee(r, k, E));
    }),
    [
      H,
      y,
      p,
      te,
      x,
      oe,
      be,
      ae,
      o,
      l,
      re,
      u,
      ce,
      de,
      U,
      F,
      De,
      We,
      A,
      L,
      R,
      K,
      Q,
      ee,
      he,
      q,
      le,
      me,
      G,
      $,
      c,
      E,
      k,
      r,
      m,
      a,
      n,
      T,
      g,
      qe,
    ]
  );
}
class Ir extends Ve {
  constructor(e) {
    (super(),
      $e(
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
function gi(s, e) {
  e && s.focus({ preventScroll: !0 });
}
function Ys(s, e) {
  return (
    gi(s, e),
    {
      update(t) {
        gi(s, t);
      },
    }
  );
}
function Xs(s) {
  let e,
    t,
    i,
    r,
    l = [{ xmlns: "http://www.w3.org/2000/svg" }, { width: "28" }, { height: "28" }, { viewBox: "0 0 20 22" }, s[0]],
    n = {};
  for (let a = 0; a < l.length; a += 1) n = ze(n, l[a]);
  return {
    c() {
      ((e = Ue("svg")), (t = Ue("clipPath")), (i = Ue("path")), (r = Ue("path")), this.h());
    },
    l(a) {
      e = Ke(a, "svg", { xmlns: !0, width: !0, height: !0, viewBox: !0 });
      var o = v(e);
      t = Ke(o, "clipPath", { id: !0 });
      var c = v(t);
      ((i = Ke(c, "path", { d: !0 })),
        v(i).forEach(d),
        c.forEach(d),
        (r = Ke(o, "path", { d: !0, "clip-path": !0 })),
        v(r).forEach(d),
        o.forEach(d),
        this.h());
    },
    h() {
      (f(
        i,
        "d",
        "m3 16.2.7.8 8.6-8.4c-.2-.1-.3-.3-.5-.4-.2-.2-.3-.3-.4-.5zm8.9-13.6 5.6 5.6c-1.1 1-2.3 1.5-3.6 1.2l-2.7 2.5.1 2.5v6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-6.2l-4.7 4.5c-.3.3-.8.3-1 0L1.5 20c-.2.2-.6.2-.8-.1l-.3-.3c-.2-.3-.2-.6-.1-.8L1.4 17c-.2-.2-.3-.7 0-1l9.2-9.8c-.2-1.3.2-2.6 1.3-3.6m1.3-1.3c1.7-1.7 3.9-1.7 5.6 0s1.6 3.9 0 5.6z",
      ),
        f(t, "id", "a"),
        f(r, "d", "M-5-5h30v31.6H-5z"),
        f(r, "clip-path", "url(#a)"),
        Xe(e, n));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), b(t, i), b(e, r));
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
    i: ne,
    o: ne,
    d(a) {
      a && d(e);
    },
  };
}
function xs(s, e, t) {
  return (
    (s.$$set = (i) => {
      t(0, (e = ze(ze({}, e), xe(i))));
    }),
    (e = xe(e)),
    [e]
  );
}
let el = class extends Ve {
  constructor(e) {
    (super(), $e(this, e, xs, Xs, At, {}));
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p: ne,
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function il(s) {
  let e, t, i, r, l, n;
  return {
    c() {
      ((e = I("picture")), (t = I("source")), (r = Z()), (l = I("img")), this.h());
    },
    l(a) {
      e = S(a, "PICTURE", {});
      var o = v(e);
      ((t = S(o, "SOURCE", { srcset: !0, type: !0 })),
        (r = J(o)),
        (l = S(o, "IMG", { "data-testid": !0, class: !0, role: !0, src: !0, alt: !0 })),
        o.forEach(d),
        this.h());
    },
    h() {
      (Br(t, (i = s[2])) || f(t, "srcset", i),
        f(t, "type", "image/webp"),
        f(l, "data-testid", "library-artist-image-icon"),
        f(l, "class", "artist-image svelte-1c7s20n"),
        f(l, "role", "presentation"),
        li(l.src, (n = s[1])) || f(l, "src", n),
        f(l, "alt", ""));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), b(e, r), b(e, l));
    },
    p(a, o) {
      (o & 4 && i !== (i = a[2]) && f(t, "srcset", i), o & 2 && !li(l.src, (n = a[1])) && f(l, "src", n));
    },
    i: ne,
    o: ne,
    d(a) {
      a && d(e);
    },
  };
}
function rl(s) {
  let e, t, i, r;
  const l = [il, tl],
    n = [];
  function a(o, c) {
    return o[2] && o[1] ? 0 : 1;
  }
  return (
    (t = a(s)),
    (i = n[t] = l[t](s)),
    {
      c() {
        ((e = I("span")), i.c(), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { "data-testid": !0, class: !0 });
        var c = v(e);
        (i.l(c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "data-testid", "library-artist-icon"),
          f(e, "class", "artist-icon svelte-1c7s20n"),
          V(e, "is-selected", s[0]));
      },
      m(o, c) {
        (P(o, e, c), n[t].m(e, null), (r = !0));
      },
      p(o, [c]) {
        let u = t;
        ((t = a(o)),
          t === u
            ? n[t].p(o, c)
            : (ue(),
              h(n[u], 1, 1, () => {
                n[u] = null;
              }),
              fe(),
              (i = n[t]),
              i ? i.p(o, c) : ((i = n[t] = l[t](o)), i.c()),
              _(i, 1),
              i.m(e, null)),
          (!r || c & 1) && V(e, "is-selected", o[0]));
      },
      i(o) {
        r || (_(i), (r = !0));
      },
      o(o) {
        (h(i), (r = !1));
      },
      d(o) {
        (o && d(e), n[t].d());
      },
    }
  );
}
const pi = "72";
function sl(s, e, t) {
  let i, r, l;
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
          (i =
            t(5, (a = t(4, (n = o?.dictionary)) === null || n === void 0 ? void 0 : n.url)) === null || a === void 0
              ? void 0
              : a.replace("{w}", pi).replace("{h}", pi)),
        ),
        s.$$.dirty & 64 && t(2, (r = i?.replace("{f}", "webp"))),
        s.$$.dirty & 64 && t(1, (l = i?.replace("{f}", "jpg"))));
    }),
    [c, l, r, o, n, a, i]
  );
}
class Sr extends Ve {
  constructor(e) {
    (super(), $e(this, e, sl, rl, He, { artwork: 3, isSelected: 0 }));
  }
}
function bi(s) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = ke(s[4])), this.h());
    },
    l(i) {
      e = S(i, "SPAN", { class: !0 });
      var r = v(e);
      ((t = we(r, s[4])), r.forEach(d), this.h());
    },
    h() {
      f(e, "class", "artist-name svelte-1fzf05r");
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      r & 16 && ye(t, i[4]);
    },
    d(i) {
      i && d(e);
    },
  };
}
function ll(s) {
  let e, t, i, r, l, n, a, o, c;
  t = new Sr({ props: { artwork: s[5], isSelected: s[0] } });
  let u = s[4] && bi(s);
  return (
    (l = new Or({ props: { inFavorites: s[2] } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), (i = Z()), u && u.c(), (r = Z()), B(l.$$.fragment), this.h());
      },
      l(m) {
        e = S(m, "DIV", { "data-testid": !0, "aria-selected": !0, role: !0, tabindex: !0, class: !0 });
        var k = v(e);
        (W(t.$$.fragment, k), (i = J(k)), u && u.l(k), (r = J(k)), W(l.$$.fragment, k), k.forEach(d), this.h());
      },
      h() {
        (f(e, "data-testid", "library-artists-component"),
          f(e, "aria-selected", s[0]),
          f(e, "role", "option"),
          f(e, "tabindex", "0"),
          f(e, "class", "svelte-1fzf05r"),
          V(e, "is-selected", s[0]));
      },
      m(m, k) {
        (P(m, e, k),
          O(t, e, null),
          b(e, i),
          u && u.m(e, null),
          b(e, r),
          O(l, e, null),
          (a = !0),
          o || ((c = [et((n = Ys.call(null, e, s[0]))), Fe(e, "click", s[10])]), (o = !0)));
      },
      p(m, [k]) {
        const E = {};
        (k & 32 && (E.artwork = m[5]),
          k & 1 && (E.isSelected = m[0]),
          t.$set(E),
          m[4] ? (u ? u.p(m, k) : ((u = bi(m)), u.c(), u.m(e, r))) : u && (u.d(1), (u = null)));
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
        (m && d(e), z(t), u && u.d(), z(l), (o = !1), mt(c));
      },
    }
  );
}
function nl(s, e, t) {
  let i,
    r,
    l,
    n,
    a,
    o,
    c = ne,
    u = () => (c(), (c = Dt(n, (A) => t(9, (o = A)))), n);
  s.$$.on_destroy.push(() => c());
  var m;
  let { isSelected: k = !1 } = e,
    { item: E } = e;
  const g = ut(),
    T = St();
  ft(() => {
    g.unsubscribeFromUpdates(l);
  });
  const w = () => T("itemClicked", { item: E });
  return (
    (s.$$set = (A) => {
      ("isSelected" in A && t(0, (k = A.isSelected)), "item" in A && t(1, (E = A.item)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 2 && t(5, (i = E?.artwork || null)),
        s.$$.dirty & 2 && t(4, (r = E?.name)),
        s.$$.dirty & 2 && t(8, (l = ct(E))),
        s.$$.dirty & 256 && u(t(3, (n = g.subscribeToUpdates(l)))),
        s.$$.dirty & 896 &&
          t(2, (a = o && (t(7, (m = g.get(l, yt.Artist))) === null || m === void 0 ? void 0 : m.inFavorites))));
    }),
    [k, E, a, n, r, i, T, m, l, o, w]
  );
}
class ol extends Ve {
  constructor(e) {
    (super(), $e(this, e, nl, ll, He, { isSelected: 0, item: 1 }));
  }
}
function al(s) {
  let e,
    t,
    i = [{ xmlns: "http://www.w3.org/2000/svg" }, { viewBox: "0 0 13 29" }, s[0]],
    r = {};
  for (let l = 0; l < i.length; l += 1) r = ze(r, i[l]);
  return {
    c() {
      ((e = Ue("svg")), (t = Ue("path")), this.h());
    },
    l(l) {
      e = Ke(l, "svg", { xmlns: !0, viewBox: !0 });
      var n = v(e);
      ((t = Ke(n, "path", { d: !0 })), v(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (f(t, "d", "m12.716 28.349-.779.651L0 14.5 11.937 0l.779.651L1.303 14.5z"), Xe(e, r));
    },
    m(l, n) {
      (P(l, e, n), b(e, t));
    },
    p(l, [n]) {
      Xe(e, (r = Ct(i, [{ xmlns: "http://www.w3.org/2000/svg" }, { viewBox: "0 0 13 29" }, n & 1 && l[0]])));
    },
    i: ne,
    o: ne,
    d(l) {
      l && d(e);
    },
  };
}
function cl(s, e, t) {
  return (
    (s.$$set = (i) => {
      t(0, (e = ze(ze({}, e), xe(i))));
    }),
    (e = xe(e)),
    [e]
  );
}
let ul = class extends Ve {
  constructor(e) {
    (super(), $e(this, e, cl, al, At, {}));
  }
};
const vi = zr(0);
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        s = i;
        const l = {};
        (r[0] & 268435456 && (l.item = s[28]), r[0] & 536870912 && (l.isSelected = s[29]), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function dl(s) {
  let e, t, i;
  return (
    (t = new Sr({ props: { artwork: null } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0, slot: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "artist-placeholder svelte-1rh5vsj"), f(e, "slot", "placeholder"));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p: ne,
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function ki(s) {
  let e,
    t,
    i,
    r = {
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
    wt((t = s[10](s[1])), r),
    {
      c() {
        ((e = Re()), r.block.c());
      },
      l(l) {
        ((e = Re()), r.block.l(l));
      },
      m(l, n) {
        (P(l, e, n), r.block.m(l, (r.anchor = n)), (r.mount = () => e.parentNode), (r.anchor = e), (i = !0));
      },
      p(l, n) {
        ((s = l), (r.ctx = s), (n[0] & 2 && t !== (t = s[10](s[1])) && wt(t, r)) || lr(r, s, n));
      },
      i(l) {
        i || (_(r.block), (i = !0));
      },
      o(l) {
        for (let n = 0; n < 3; n += 1) {
          const a = r.blocks[n];
          h(a);
        }
        i = !1;
      },
      d(l) {
        (l && d(e), r.block.d(l), (r.token = null), (r = null));
      },
    }
  );
}
function ml(s) {
  return { c: ne, l: ne, m: ne, p: ne, i: ne, o: ne, d: ne };
}
function _l(s) {
  let e,
    t,
    i,
    r,
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
    (r = new ul({ props: { class: "chevron-icon" } })),
    (u = new Gr({ props: { section: s[0] } })),
    {
      c() {
        ((e = I("article")),
          (t = I("div")),
          (i = I("button")),
          B(r.$$.fragment),
          (l = Z()),
          (n = I("span")),
          (o = ke(a)),
          (c = Z()),
          B(u.$$.fragment),
          this.h());
      },
      l(g) {
        e = S(g, "ARTICLE", { "aria-label": !0, class: !0, "data-testid": !0 });
        var T = v(e);
        t = S(T, "DIV", { class: !0, "data-testid": !0 });
        var w = v(t);
        i = S(w, "BUTTON", { class: !0, "data-testid": !0 });
        var A = v(i);
        (W(r.$$.fragment, A), (l = J(A)), (n = S(A, "SPAN", {})));
        var y = v(n);
        ((o = we(y, a)),
          y.forEach(d),
          A.forEach(d),
          w.forEach(d),
          (c = J(T)),
          W(u.$$.fragment, T),
          T.forEach(d),
          this.h());
      },
      h() {
        (f(i, "class", "back-to-artists svelte-1rh5vsj"),
          f(i, "data-testid", "back-to-artists-button"),
          f(t, "class", "back-to-artists-container svelte-1rh5vsj"),
          f(t, "data-testid", "back-to-artists-container"),
          f(e, "aria-label", s[3]),
          f(e, "class", "artist-detail-container svelte-1rh5vsj"),
          f(e, "data-testid", "artist-detail-container"));
      },
      m(g, T) {
        (P(g, e, T),
          b(e, t),
          b(t, i),
          O(r, i, null),
          b(i, l),
          b(i, n),
          b(n, o),
          b(e, c),
          O(u, e, null),
          (m = !0),
          k || ((E = Fe(i, "click", s[11])), (k = !0)));
      },
      p(g, T) {
        (!m || T[0] & 32) && a !== (a = g[5].t("ASE.Web.Music.SideBar.Artists") + "") && ye(o, a);
        const w = {};
        (T[0] & 2 && (w.section = g[0]), u.$set(w), (!m || T[0] & 8) && f(e, "aria-label", g[3]));
      },
      i(g) {
        m || (_(r.$$.fragment, g), _(u.$$.fragment, g), (m = !0));
      },
      o(g) {
        (h(r.$$.fragment, g), h(u.$$.fragment, g), (m = !1));
      },
      d(g) {
        (g && d(e), z(r), z(u), (k = !1), E());
      },
    }
  );
}
function hl(s) {
  let e, t;
  return (
    (e = new Zr({ props: { delay: 500 } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p: ne,
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function gl(s) {
  let e, t, i, r, l;
  ((i = new Ir({
    props: {
      items: s[2],
      itemCount: s[4],
      amountToFetch: vl,
      itemHeight: pl,
      bufferHeight: bl,
      fetchIntentFn: Wr,
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
    i.$on("select", s[12]),
    i.$on("fetchComplete", s[13]));
  let n = s[1] && ki(s);
  return {
    c() {
      ((e = I("div")), (t = I("div")), B(i.$$.fragment), (r = Z()), n && n.c(), this.h());
    },
    l(a) {
      e = S(a, "DIV", { class: !0, "data-testid": !0 });
      var o = v(e);
      t = S(o, "DIV", { class: !0, "data-testid": !0 });
      var c = v(t);
      (W(i.$$.fragment, c), c.forEach(d), (r = J(o)), n && n.l(o), o.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "artist-list-container svelte-1rh5vsj"),
        f(t, "data-testid", "artist-list-container"),
        f(e, "class", "artists-container svelte-1rh5vsj"),
        f(e, "data-testid", "library-artists-component"));
    },
    m(a, o) {
      (P(a, e, o), b(e, t), O(i, t, null), b(e, r), n && n.m(e, null), (l = !0));
    },
    p(a, o) {
      const c = {};
      (o[0] & 4 && (c.items = a[2]),
        o[0] & 16 && (c.itemCount = a[4]),
        o[0] & 2 && (c.selectedItemId = a[1]),
        (o[0] & 1879048192) | (o[1] & 1) && (c.$$scope = { dirty: o, ctx: a }),
        i.$set(c),
        a[1]
          ? n
            ? (n.p(a, o), o[0] & 2 && _(n, 1))
            : ((n = ki(a)), n.c(), _(n, 1), n.m(e, null))
          : n &&
            (ue(),
            h(n, 1, 1, () => {
              n = null;
            }),
            fe()));
    },
    i(a) {
      l || (_(i.$$.fragment, a), _(n), (l = !0));
    },
    o(a) {
      (h(i.$$.fragment, a), h(n), (l = !1));
    },
    d(a) {
      (a && d(e), z(i), n && n.d());
    },
  };
}
const pl = 54,
  bl = 500,
  vl = 100;
function kl(s, e, t) {
  let i, r, l, n, a, o, c, u, m;
  (Ce(s, vi, (q) => t(23, (c = q))), Ce(s, jr, (q) => t(24, (u = q))));
  var k, E, g, T;
  let { section: w } = e;
  const A = Tt(),
    y = Ge();
  Ce(s, y, (q) => t(5, (m = q)));
  const p = Pt("<Artists>"),
    L = ut(),
    te = tt(),
    { state: R } = _t();
  Ce(s, R, (q) => t(22, (o = q)));
  let K = {},
    H,
    Q;
  (Ur(() => {
    Q && H && (Q.scrollTop = H);
  }),
    Et(() => {
      ((Q = document.getElementById("scrollable-page-override")),
        It.set(!0),
        he(i, 0),
        !(u === "xsmall" || u === "small") &&
          !l &&
          ((H = 0),
          A.perform(
            kt({ kind: "selectedArtistIdChanged", metadata: { id: i[0].id, historyOperation: "replaceState" } }),
          )));
    }),
    ft(() => {
      It.set(!1);
    }));
  async function ee(q) {
    if (!q) return { items: [] };
    const le = Kr({ id: q });
    return A.dispatch(le);
  }
  function he(q, le) {
    (q.forEach((me, ae) => {
      const { id: Y } = me;
      typeof K[Y] > "u" && t(18, (K[Y] = { index: ae + le, artist: me }), K);
    }),
      t(18, (K = Object.assign({}, K))));
  }
  function x() {
    A.perform(kt({ kind: "selectedArtistIdChanged", metadata: { id: null, historyOperation: "pushState" } }));
  }
  function oe(q) {
    const { id: le, scrollTop: me } = q.detail;
    (vi.set(me),
      (H = c),
      A.perform(kt({ kind: "selectedArtistIdChanged", metadata: { id: le, historyOperation: "pushState" } })));
  }
  async function be(q) {
    var le;
    const { items: me, offset: ae } = q.detail;
    (he(me, ae),
      await jt([{ items: me }], (le = o.user) === null || le === void 0 ? void 0 : le.subscriberType, A, p, te, L));
  }
  return (
    (s.$$set = (q) => {
      "section" in q && t(0, (w = q.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 1 && t(2, (i = w?.items)),
        s.$$.dirty[0] & 16385 && t(4, (r = t(14, (k = w?.metadata)) === null || k === void 0 ? void 0 : k.total)),
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
    [w, l, i, a, r, m, A, y, p, R, ee, x, oe, be, k, E, g, T, K, n]
  );
}
class wl extends Ve {
  constructor(e) {
    (super(), $e(this, e, kl, gl, He, { section: 0 }, null, [-1, -1]));
  }
}
function wi(s, e, t) {
  const i = s.slice();
  return ((i[3] = e[t]), i);
}
function yi(s, e) {
  let t,
    i,
    r = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "",
    l,
    n;
  return {
    key: s,
    first: null,
    c() {
      ((t = I("div")), (i = I("span")), (l = ke(r)), (n = Z()), this.h());
    },
    l(a) {
      t = S(a, "DIV", { role: !0, class: !0 });
      var o = v(t);
      i = S(o, "SPAN", { class: !0, "data-testid": !0 });
      var c = v(i);
      ((l = we(c, r)), c.forEach(d), (n = J(o)), o.forEach(d), this.h());
    },
    h() {
      (f(i, "class", "library-track__" + e[3].id + "-text svelte-12reoxy"),
        f(i, "data-testid", `library-track__${e[3].id}-text`),
        f(t, "role", "columnheader"),
        f(t, "class", "library-track__" + e[3].id + " svelte-12reoxy"),
        (this.first = t));
    },
    m(a, o) {
      (P(a, t, o), b(t, i), b(i, l), b(t, n));
    },
    p(a, o) {
      ((e = a), o & 1 && r !== (r = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "") && ye(l, r));
    },
    d(a) {
      a && d(t);
    },
  };
}
function yl(s) {
  let e,
    t,
    i = [],
    r = new Map(),
    l = Oe(s[2]);
  const n = (a) => a[3].id;
  for (let a = 0; a < l.length; a += 1) {
    let o = wi(s, l, a),
      c = n(o);
    r.set(c, (i[a] = yi(c, o)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")));
      for (let a = 0; a < i.length; a += 1) i[a].c();
      this.h();
    },
    l(a) {
      e = S(a, "DIV", { class: !0 });
      var o = v(e);
      t = S(o, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var c = v(t);
      for (let u = 0; u < i.length; u += 1) i[u].l(c);
      (c.forEach(d), o.forEach(d), this.h());
    },
    h() {
      (f(t, "class", "library-track library-track--header svelte-12reoxy"),
        f(t, "role", "row"),
        f(t, "data-testid", "library-track--header"),
        f(e, "class", "library-track-header-container svelte-12reoxy"));
    },
    m(a, o) {
      (P(a, e, o), b(e, t));
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(t, null);
    },
    p(a, [o]) {
      o & 5 && ((l = Oe(a[2])), (i = sr(i, o, n, 1, a, l, r, t, Jr, yi, null, wi)));
    },
    i: ne,
    o: ne,
    d(a) {
      a && d(e);
      for (let o = 0; o < i.length; o += 1) i[o].d();
    },
  };
}
function Il(s, e, t) {
  let i;
  const r = Ge();
  return (
    Ce(s, r, (n) => t(0, (i = n))),
    [
      i,
      r,
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
class Sl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Il, yl, He, {}));
  }
}
function El(s) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = ke(s[14])), this.h());
    },
    l(i) {
      e = S(i, "SPAN", { class: !0 });
      var r = v(e);
      ((t = we(r, s[14])), r.forEach(d), this.h());
    },
    h() {
      f(e, "class", "library-track-name__text svelte-iv5fou");
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      r[0] & 16384 && ye(t, i[14]);
    },
    i: ne,
    o: ne,
    d(i) {
      i && d(e);
    },
  };
}
function Al(s) {
  let e, t, i, r, l, n, a;
  return (
    (n = new Qr({ props: { explicitAriaText: s[17].t("ASE.Web.Music.Explicit") } })),
    {
      c() {
        ((e = I("span")), (t = I("span")), (i = ke(s[14])), (r = Z()), (l = I("span")), B(n.$$.fragment), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { class: !0 });
        var c = v(e);
        t = S(c, "SPAN", { class: !0 });
        var u = v(t);
        ((i = we(u, s[14])), u.forEach(d), (r = J(c)), (l = S(c, "SPAN", { class: !0 })));
        var m = v(l);
        (W(n.$$.fragment, m), m.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "library-track-name__text svelte-iv5fou"),
          f(l, "class", "explicit-badge svelte-iv5fou"),
          f(e, "class", "library-track-name__explicit-wrapper svelte-iv5fou"));
      },
      m(o, c) {
        (P(o, e, c), b(e, t), b(t, i), b(e, r), b(e, l), O(n, l, null), (a = !0));
      },
      p(o, c) {
        (!a || c[0] & 16384) && ye(i, o[14]);
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
function Ii(s) {
  let e, t, i;
  return (
    (t = new _r({ props: { item: s[4], isExplicit: s[2] } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "library-track-name__play-button-wrapper artwork-overlay svelte-iv5fou"),
          f(e, "data-testid", "track-play-button"));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[0] & 16 && (n.item = r[4]), l[0] & 4 && (n.isExplicit = r[2]), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Si(s) {
  let e, t;
  return (
    (e = new Gt({
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[0] & 1 && (l.attachedTo = i[0].contentDescriptor),
          r[0] & 3 && (l.isPlayable = i[0].playAction !== null && !i[1]),
          r[0] & 1 &&
            (l.itemProperties = {
              title: i[0].name,
              subtitleLinks: [{ title: i[0].artistName }],
              artwork: i[0].artwork,
            }),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Cl(s) {
  let e, t, i, r, l, n, a, o, c, u, m, k, E, g, T, w, A, y, p, L, te, R, K, H, Q, ee, he, x, oe, be, q;
  ((i = new ur({
    props: { isFavorited: s[6], platter: !1, enabled: !0, title: s[17].t("ASE.Web.Music.VO.FavoriteHelpText") },
  })),
    i.$on("toggle", s[24]));
  const le = [Al, El],
    me = [];
  function ae(G, $) {
    return G[2] ? 0 : 1;
  }
  ((a = ae(s)),
    (o = me[a] = le[a](s)),
    (m = new fr({ props: { artwork: s[15], forceFullWidth: !1, profile: "track-list" } })));
  let Y = s[5] && Ii(s),
    re = s[0].contentDescriptor && Si(s);
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        B(i.$$.fragment),
        (r = Z()),
        (l = I("div")),
        (n = I("div")),
        o.c(),
        (c = Z()),
        (u = I("div")),
        (k = I("div")),
        B(m.$$.fragment),
        (E = Z()),
        Y && Y.c(),
        (g = Z()),
        (T = I("div")),
        re && re.c(),
        (w = Z()),
        (A = I("div")),
        (y = I("div")),
        (p = ke(s[13])),
        (L = Z()),
        (te = I("div")),
        (R = I("div")),
        (K = ke(s[12])),
        (H = Z()),
        (Q = I("div")),
        (ee = I("div")),
        (he = ke(s[11])),
        this.h());
    },
    l(G) {
      e = S(G, "DIV", { "data-testid": !0, class: !0, "data-current-mouse-target": !0 });
      var $ = v(e);
      t = S($, "DIV", { role: !0, class: !0, "data-testid": !0 });
      var Ie = v(t);
      (W(i.$$.fragment, Ie), Ie.forEach(d), (r = J($)), (l = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var j = v(l);
      n = S(j, "DIV", { class: !0 });
      var Ee = v(n);
      (o.l(Ee), (c = J(Ee)), (u = S(Ee, "DIV", { class: !0 })));
      var se = v(u);
      k = S(se, "DIV", { style: !0 });
      var ve = v(k);
      (W(m.$$.fragment, ve), (E = J(se)), Y && Y.l(se), se.forEach(d), (g = J(Ee)), (T = S(Ee, "DIV", { class: !0 })));
      var ge = v(T);
      (re && re.l(ge),
        ge.forEach(d),
        Ee.forEach(d),
        j.forEach(d),
        (w = J($)),
        (A = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var ce = v(A);
      y = S(ce, "DIV", { class: !0 });
      var de = v(y);
      ((p = we(de, s[13])),
        de.forEach(d),
        ce.forEach(d),
        (L = J($)),
        (te = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var U = v(te);
      R = S(U, "DIV", { class: !0 });
      var D = v(R);
      ((K = we(D, s[12])),
        D.forEach(d),
        U.forEach(d),
        (H = J($)),
        (Q = S($, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var F = v(Q);
      ee = S(F, "DIV", { class: !0 });
      var Le = v(ee);
      ((he = we(Le, s[11])), Le.forEach(d), F.forEach(d), $.forEach(d), this.h());
    },
    h() {
      (f(t, "role", "cell"),
        f(t, "class", "library-track__badge svelte-iv5fou"),
        f(t, "data-testid", "library-track__badge"),
        Be(k, "display", "contents"),
        Be(k, "--override-placeholder-bg-color", "var(--genericJoeColor)"),
        f(u, "class", "library-track-name__artwork svelte-iv5fou"),
        f(T, "class", "action-menu svelte-iv5fou"),
        f(n, "class", "library-track-name svelte-iv5fou"),
        f(l, "role", "cell"),
        f(l, "class", "library-track__song svelte-iv5fou"),
        f(l, "data-testid", "library-track__song"),
        f(y, "class", "svelte-iv5fou"),
        f(A, "role", "cell"),
        f(A, "class", "library-track__artist svelte-iv5fou"),
        f(A, "data-testid", "library-track__artist"),
        f(R, "class", "svelte-iv5fou"),
        f(te, "role", "cell"),
        f(te, "class", "library-track__album svelte-iv5fou"),
        f(te, "data-testid", "library-track__album"),
        f(ee, "class", "svelte-iv5fou"),
        f(Q, "role", "cell"),
        f(Q, "class", "library-track__time svelte-iv5fou"),
        f(Q, "data-testid", "library-track__time"),
        f(e, "data-testid", "library-track"),
        f(e, "class", "library-track svelte-iv5fou"),
        f(e, "data-current-mouse-target", (x = s[3].currentMouseTarget === s[0])),
        V(e, "selected", s[16]),
        V(e, "library-track--disabled", s[1]),
        V(e, "is-playing", s[9]),
        V(e, "is-paused", s[8]),
        V(e, "is-loading", s[10]));
    },
    m(G, $) {
      (P(G, e, $),
        b(e, t),
        O(i, t, null),
        b(e, r),
        b(e, l),
        b(l, n),
        me[a].m(n, null),
        b(n, c),
        b(n, u),
        b(u, k),
        O(m, k, null),
        b(u, E),
        Y && Y.m(u, null),
        b(n, g),
        b(n, T),
        re && re.m(T, null),
        b(e, w),
        b(e, A),
        b(A, y),
        b(y, p),
        b(e, L),
        b(e, te),
        b(te, R),
        b(R, K),
        b(e, H),
        b(e, Q),
        b(Q, ee),
        b(ee, he),
        (oe = !0),
        be || ((q = [Fe(e, "mousedown", s[38]), Fe(e, "click", s[23]), Fe(e, "dblclick", s[22])]), (be = !0)));
    },
    p(G, $) {
      const Ie = {};
      ($[0] & 64 && (Ie.isFavorited = G[6]),
        $[0] & 131072 && (Ie.title = G[17].t("ASE.Web.Music.VO.FavoriteHelpText")),
        i.$set(Ie));
      let j = a;
      ((a = ae(G)),
        a === j
          ? me[a].p(G, $)
          : (ue(),
            h(me[j], 1, 1, () => {
              me[j] = null;
            }),
            fe(),
            (o = me[a]),
            o ? o.p(G, $) : ((o = me[a] = le[a](G)), o.c()),
            _(o, 1),
            o.m(n, c)));
      const Ee = {};
      ($[0] & 32768 && (Ee.artwork = G[15]),
        m.$set(Ee),
        G[5]
          ? Y
            ? (Y.p(G, $), $[0] & 32 && _(Y, 1))
            : ((Y = Ii(G)), Y.c(), _(Y, 1), Y.m(u, null))
          : Y &&
            (ue(),
            h(Y, 1, 1, () => {
              Y = null;
            }),
            fe()),
        G[0].contentDescriptor
          ? re
            ? (re.p(G, $), $[0] & 1 && _(re, 1))
            : ((re = Si(G)), re.c(), _(re, 1), re.m(T, null))
          : re &&
            (ue(),
            h(re, 1, 1, () => {
              re = null;
            }),
            fe()),
        (!oe || $[0] & 8192) && ye(p, G[13]),
        (!oe || $[0] & 4096) && ye(K, G[12]),
        (!oe || $[0] & 2048) && ye(he, G[11]),
        (!oe || ($[0] & 9 && x !== (x = G[3].currentMouseTarget === G[0]))) && f(e, "data-current-mouse-target", x),
        (!oe || $[0] & 65536) && V(e, "selected", G[16]),
        (!oe || $[0] & 2) && V(e, "library-track--disabled", G[1]),
        (!oe || $[0] & 512) && V(e, "is-playing", G[9]),
        (!oe || $[0] & 256) && V(e, "is-paused", G[8]),
        (!oe || $[0] & 1024) && V(e, "is-loading", G[10]));
    },
    i(G) {
      oe || (_(i.$$.fragment, G), _(o), _(m.$$.fragment, G), _(Y), _(re), (oe = !0));
    },
    o(G) {
      (h(i.$$.fragment, G), h(o), h(m.$$.fragment, G), h(Y), h(re), (oe = !1));
    },
    d(G) {
      (G && d(e), z(i), me[a].d(), z(m), Y && Y.d(), re && re.d(), (be = !1), mt(q));
    },
  };
}
function Dl(s, e, t) {
  let i,
    r,
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
    R,
    K,
    H,
    Q,
    ee = ne,
    he = () => (ee(), (ee = Dt(te, (U) => t(35, (Q = U)))), te),
    x,
    oe,
    be,
    q;
  s.$$.on_destroy.push(() => ee());
  var le;
  const me = Ge();
  Ce(s, me, (U) => t(17, (q = U)));
  const ae = tt(),
    Y = Lt(),
    { queue: re, isRestricted: G } = dr();
  (Ce(s, re, (U) => t(37, (oe = U))), Ce(s, G, (U) => t(36, (x = U))));
  const $ = Mt();
  Ce(s, $, (U) => t(3, (be = U)));
  const Ie = ut();
  let { item: j } = e,
    { items: Ee = [] } = e,
    se = [];
  function ve() {
    u && Y(H.playAction);
  }
  function ge(U) {
    $.handleClick(j, U);
  }
  const ce = (U) => {
    hr(E, T, g, !U.detail, Ie, !1, !0, Y);
  };
  ft(() => {
    Ie.unsubscribeFromUpdates(E);
  });
  const de = () => $.setCurrentMouseTarget(j);
  return (
    (s.$$set = (U) => {
      ("item" in U && t(0, (j = U.item)), "items" in U && t(25, (Ee = U.items)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 9 && t(16, (i = j.id && be.selectedItems.some((U) => U.id === j.id))),
        s.$$.dirty[0] & 1 && t(15, (r = j?.artwork || null)),
        s.$$.dirty[0] & 1 && t(14, (l = j?.name || "")),
        s.$$.dirty[0] & 1 && t(13, (n = j?.artistName || "")),
        s.$$.dirty[0] & 1 && t(12, (a = j?.albumName || "")),
        s.$$.dirty[0] & 1 && t(34, (o = Math.trunc(j?.durationInMillis / 1e3) || null)),
        s.$$.dirty[1] & 8 && t(11, (c = Ut(o, ae.language) || "")),
        s.$$.dirty[0] & 1 && t(5, (u = j?.playAction || null)),
        s.$$.dirty[0] & 1 && t(2, (m = j?.contentRating === "explicit")),
        s.$$.dirty[0] & 1 && t(33, (k = ct(j))),
        s.$$.dirty[0] & 1 && t(28, (E = Kt(j))),
        s.$$.dirty[0] & 1 && t(29, (g = j?.contentDescriptor)),
        s.$$.dirty[0] & 536870912 && t(30, (T = g?.kind)),
        s.$$.dirty[1] & 68 && t(32, (w = k && oe.nowPlayingItemId === k)),
        s.$$.dirty[1] & 66 && t(10, (A = w && oe.derivedStates.isLoading)),
        s.$$.dirty[1] & 66 && t(9, (y = w && oe.derivedStates.isPlaying)),
        s.$$.dirty[1] & 66 && t(8, (p = w && oe.derivedStates.isPaused)),
        (s.$$.dirty[0] & 5) | (s.$$.dirty[1] & 32) && t(1, (L = j?.isDisabled || (m && x))),
        s.$$.dirty[0] & 268435456 && he(t(7, (te = Ie.subscribeToUpdates(E)))),
        (s.$$.dirty[0] & 1409286144) | (s.$$.dirty[1] & 16) &&
          t(6, (R = Q && (t(26, (le = Ie.get(E, T))) === null || le === void 0 ? void 0 : le.inFavorites))),
        s.$$.dirty[0] & 33554432 && Promise.all(Ee).then((U) => t(27, (se = U))),
        s.$$.dirty[0] & 134217728 && t(31, (K = se.map((U) => U.contentDescriptor))),
        (s.$$.dirty[0] & 3) | (s.$$.dirty[1] & 1) &&
          t(
            4,
            (H = (() =>
              Object.assign(Object.assign({}, j), { playAction: !L && j.playAction && mr(j.playAction, K) }))()),
          ));
    }),
    [
      j,
      L,
      m,
      be,
      H,
      u,
      R,
      te,
      p,
      y,
      A,
      c,
      a,
      n,
      l,
      r,
      i,
      q,
      me,
      re,
      G,
      $,
      ve,
      ge,
      ce,
      Ee,
      le,
      se,
      E,
      g,
      T,
      K,
      w,
      k,
      o,
      Q,
      x,
      oe,
      de,
    ]
  );
}
class Tl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Dl, Cl, He, { item: 0, items: 25 }, null, [-1, -1]));
  }
}
function Pl(s) {
  let e, t, i, r, l;
  return (
    (e = new Tl({ props: { item: s[16], items: s[17] } })),
    (r = new Xr({})),
    {
      c() {
        (B(e.$$.fragment), (t = Z()), (i = I("div")), B(r.$$.fragment), this.h());
      },
      l(n) {
        (W(e.$$.fragment, n), (t = J(n)), (i = S(n, "DIV", { class: !0, slot: !0 })));
        var a = v(i);
        (W(r.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        (f(i, "class", "song-placeholder svelte-zg0bwg"), f(i, "slot", "placeholder"));
      },
      m(n, a) {
        (O(e, n, a), P(n, t, a), P(n, i, a), O(r, i, null), (l = !0));
      },
      p(n, a) {
        const o = {};
        (a & 65536 && (o.item = n[16]), a & 131072 && (o.items = n[17]), e.$set(o));
      },
      i(n) {
        l || (_(e.$$.fragment, n), _(r.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(e.$$.fragment, n), h(r.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (d(t), d(i)), z(e, n), z(r));
      },
    }
  );
}
function Ll(s) {
  let e, t, i, r, l;
  return (
    (t = new Sl({})),
    (r = new Ir({
      props: {
        items: s[0],
        itemCount: s[2],
        amountToFetch: Ml,
        itemHeight: Fl,
        bufferHeight: Vl,
        fetchIntentFn: Yr,
        bottomSpacerHidden: !1,
        restrainContainerWidth: !1,
        rowZebraStriping: !0,
        log: s[3],
        jet: s[4],
        overrideKeydown: s[5].handleKeydown,
        use: [
          [
            Ot,
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
    r.$on("fetchComplete", s[7]),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), (i = Z()), B(r.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "DIV", { class: !0, "data-testid": !0 });
        var a = v(e);
        (W(t.$$.fragment, a), (i = J(a)), W(r.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-container svelte-zg0bwg"), f(e, "data-testid", "library-songs-component"));
      },
      m(n, a) {
        (P(n, e, a), O(t, e, null), b(e, i), O(r, e, null), (l = !0));
      },
      p(n, [a]) {
        const o = {};
        (a & 1 && (o.items = n[0]),
          a & 4 && (o.itemCount = n[2]),
          a & 2 &&
            (o.use = [
              [
                Ot,
                {
                  dragData: { items: n[1] },
                  badgeCount: n[1].length,
                  dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
                },
              ],
            ]),
          a & 458752 && (o.$$scope = { dirty: a, ctx: n }),
          r.$set(o));
      },
      i(n) {
        l || (_(t.$$.fragment, n), _(r.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(t.$$.fragment, n), h(r.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && d(e), z(t), z(r));
      },
    }
  );
}
const Ml = 100,
  Fl = 44,
  Vl = 1e3;
function $l(s, e, t) {
  let i, r, l, n, a, o;
  var c;
  const u = Symbol(),
    m = Pt("<Songs>"),
    k = Tt(),
    E = Mt();
  Ce(s, E, (p) => t(11, (o = p)));
  const g = ut(),
    T = tt(),
    { state: w } = _t();
  Ce(s, w, (p) => t(12, (a = p)));
  let { section: A } = e;
  async function y(p) {
    var L;
    if (p.detail) {
      const { items: te } = p.detail;
      (E.addItems(u, te),
        await jt([{ items: te }], (L = a.user) === null || L === void 0 ? void 0 : L.subscriberType, k, m, T, g));
    }
  }
  return (
    Et(() => {
      (It.set(!0), ni.set(!0));
    }),
    ft(() => {
      (It.set(!1), E.resetItems(u), ni.set(!1));
    }),
    (s.$$set = (p) => {
      "section" in p && t(8, (A = p.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 256 && t(0, (i = A?.items)),
        s.$$.dirty & 768 && t(2, (r = t(9, (c = A?.metadata)) === null || c === void 0 ? void 0 : c.total)),
        s.$$.dirty & 1 && E.addItems(u, i),
        s.$$.dirty & 2048 &&
          t(10, (l = o.selectedItems.includes(o.currentMouseTarget) ? o.selectedItems : [o.currentMouseTarget])),
        s.$$.dirty & 1024 && t(1, (n = l.map((p) => p?.contentDescriptor))));
    }),
    [i, n, r, m, k, E, w, y, A, c, l, o]
  );
}
class Nl extends Ve {
  constructor(e) {
    (super(), $e(this, e, $l, Ll, He, { section: 8 }));
  }
}
const Rl = "‪",
  Ei = "‬";
function Ai(s) {
  if (typeof document > "u" || !(document.dir === gr.RTL)) return s;
  const t = s.slice(-1);
  return /^[a-z0-9]+$/i.test(t) || t === Ei ? s : s.replace(/.$/, `${Rl}${t}${Ei}`);
}
function Ci(s) {
  let e, t;
  return (
    (e = new es({ props: { playAction: s[0], playButtonStyle: "non-platter", isStandAlone: !0, isFilled: !1 } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r & 1 && (l.playAction = i[0]), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Di(s) {
  let e,
    t,
    i,
    r = s[2] && s[2].length && Ti(s),
    l = s[1] && s[1].length && Pi(s);
  return {
    c() {
      ((e = I("div")), r && r.c(), (t = Z()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0, "data-testid": !0 });
      var a = v(e);
      (r && r.l(a), (t = J(a)), l && l.l(a), a.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__by-line songs-list-row__by-line--work svelte-1wqzc4z"),
        f(e, "data-testid", "composer-header-second-row"));
    },
    m(n, a) {
      (P(n, e, a), r && r.m(e, null), b(e, t), l && l.m(e, null), (i = !0));
    },
    p(n, a) {
      (n[2] && n[2].length
        ? r
          ? (r.p(n, a), a & 4 && _(r, 1))
          : ((r = Ti(n)), r.c(), _(r, 1), r.m(e, t))
        : r &&
          (ue(),
          h(r, 1, 1, () => {
            r = null;
          }),
          fe()),
        n[1] && n[1].length
          ? l
            ? (l.p(n, a), a & 2 && _(l, 1))
            : ((l = Pi(n)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (ue(),
            h(l, 1, 1, () => {
              l = null;
            }),
            fe()));
    },
    i(n) {
      i || (_(r), _(l), (i = !0));
    },
    o(n) {
      (h(r), h(l), (i = !1));
    },
    d(n) {
      (n && d(e), r && r.d(), l && l.d());
    },
  };
}
function Ti(s) {
  let e,
    t = s[9].t("ASE.Web.Music.SongsList.ComposerBy") + "",
    i,
    r,
    l,
    n;
  return (
    (l = new it({
      props: {
        items: s[2],
        translateFn: s[9].t,
        $$slots: { default: [ql, ({ item: a }) => ({ 18: a }), ({ item: a }) => (a ? 262144 : 0)] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        ((e = I("span")), (i = ke(t)), (r = Z()), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var o = v(e);
        ((i = we(o, t)), (r = J(o)), W(l.$$.fragment, o), o.forEach(d), this.h());
      },
      h() {
        f(e, "class", "svelte-1wqzc4z");
      },
      m(a, o) {
        (P(a, e, o), b(e, i), b(e, r), O(l, e, null), (n = !0));
      },
      p(a, o) {
        (!n || o & 512) && t !== (t = a[9].t("ASE.Web.Music.SongsList.ComposerBy") + "") && ye(i, t);
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
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r & 262144 && e !== (e = i[18].title + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function ql(s) {
  let e, t, i;
  return (
    (t = new Ze({ props: { action: s[18].segue, $$slots: { default: [Hl] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment));
      },
      l(r) {
        e = S(r, "SPAN", {});
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l & 262144 && (n.action = r[18].segue), l & 786432 && (n.$$scope = { dirty: l, ctx: r }), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Pi(s) {
  let e, t, i;
  return (
    (t = new it({
      props: {
        items: s[1],
        translateFn: s[9].t,
        $$slots: { default: [Ol, ({ item: r }) => ({ 17: r }), ({ item: r }) => (r ? 131072 : 0)] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "SPAN", { class: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "svelte-1wqzc4z");
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l & 2 && (n.items = r[1]),
          l & 512 && (n.translateFn = r[9].t),
          l & 655360 && (n.$$scope = { dirty: l, ctx: r }),
          t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Bl(s) {
  let e = s[17].title + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r & 131072 && e !== (e = i[17].title + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function Ol(s) {
  let e, t, i;
  return (
    (t = new Ze({ props: { action: s[17].segue, $$slots: { default: [Bl] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment));
      },
      l(r) {
        e = S(r, "SPAN", {});
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l & 131072 && (n.action = r[17].segue), l & 655360 && (n.$$scope = { dirty: l, ctx: r }), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function zl(s) {
  let e,
    t,
    i,
    r,
    l,
    n = Ai(s[8]) + "",
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
    R = s[0] && Ci(s),
    K = s[7] && Di(s);
  return (
    (y = new Gt({
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
          R && R.c(),
          (i = Z()),
          (r = I("div")),
          (l = I("span")),
          (a = ke(n)),
          (o = Z()),
          K && K.c(),
          (c = Z()),
          (u = I("div")),
          (m = I("div")),
          (k = I("div")),
          (E = Z()),
          (g = I("time")),
          (T = ke(s[5])),
          (w = Z()),
          (A = I("div")),
          B(y.$$.fragment),
          this.h());
      },
      l(H) {
        e = S(H, "DIV", { class: !0, "data-testid": !0 });
        var Q = v(e);
        t = S(Q, "DIV", { class: !0 });
        var ee = v(t);
        (R && R.l(ee), ee.forEach(d), (i = J(Q)), (r = S(Q, "DIV", { role: !0, class: !0 })));
        var he = v(r);
        l = S(he, "SPAN", { class: !0, "data-testid": !0 });
        var x = v(l);
        ((a = we(x, n)),
          x.forEach(d),
          (o = J(he)),
          K && K.l(he),
          he.forEach(d),
          (c = J(Q)),
          (u = S(Q, "DIV", { role: !0, class: !0 })));
        var oe = v(u);
        m = S(oe, "DIV", { class: !0 });
        var be = v(m);
        ((k = S(be, "DIV", { class: !0 })),
          v(k).forEach(d),
          (E = J(be)),
          (g = S(be, "TIME", { datetime: !0, class: !0, "data-testid": !0 })));
        var q = v(g);
        ((T = we(q, s[5])), q.forEach(d), (w = J(be)), (A = S(be, "DIV", { class: !0 })));
        var le = v(A);
        (W(y.$$.fragment, le), le.forEach(d), be.forEach(d), oe.forEach(d), Q.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__col songs-list__col--shim svelte-1wqzc4z"),
          f(l, "class", "composer-header__first-row svelte-1wqzc4z"),
          f(l, "data-testid", "composer-header-first-row"),
          f(r, "role", "columnheader"),
          f(r, "class", "songs-list__col songs-list__col--song songs-list__col--work-header svelte-1wqzc4z"),
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
      m(H, Q) {
        (P(H, e, Q),
          b(e, t),
          R && R.m(t, null),
          b(e, i),
          b(e, r),
          b(r, l),
          b(l, a),
          b(r, o),
          K && K.m(r, null),
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
          L || ((te = Fe(e, "dblclick", s[15])), (L = !0)));
      },
      p(H, [Q]) {
        (H[0]
          ? R
            ? (R.p(H, Q), Q & 1 && _(R, 1))
            : ((R = Ci(H)), R.c(), _(R, 1), R.m(t, null))
          : R &&
            (ue(),
            h(R, 1, 1, () => {
              R = null;
            }),
            fe()),
          (!p || Q & 256) && n !== (n = Ai(H[8]) + "") && ye(a, n),
          H[7]
            ? K
              ? (K.p(H, Q), Q & 128 && _(K, 1))
              : ((K = Di(H)), K.c(), _(K, 1), K.m(r, null))
            : K &&
              (ue(),
              h(K, 1, 1, () => {
                K = null;
              }),
              fe()),
          (!p || Q & 32) && ye(T, H[5]),
          (!p || Q & 16) && f(g, "datetime", H[4]));
        const ee = {};
        (Q & 8 && (ee.attachedTo = H[3]),
          Q & 64 && (ee.isPlayable = H[6]),
          Q & 262 && (ee.itemProperties = { subtitleLinks: [...H[2], ...H[1]], title: H[8] }),
          y.$set(ee));
      },
      i(H) {
        p || (_(R), _(K), _(y.$$.fragment, H), (p = !0));
      },
      o(H) {
        (h(R), h(K), h(y.$$.fragment, H), (p = !1));
      },
      d(H) {
        (H && d(e), R && R.d(), K && K.d(), z(y), (L = !1), te());
      },
    }
  );
}
function Wl(s, e, t) {
  let i, r, l, n, a, o, c, u, m, k, E;
  var g;
  const T = Ge();
  Ce(s, T, (L) => t(9, (E = L)));
  const w = tt(),
    A = Lt();
  let { header: y } = e;
  const p = () => A(a);
  return (
    (s.$$set = (L) => {
      "header" in L && t(12, (y = L.header));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 4096 && t(8, (i = y.firstRowText || "")),
        s.$$.dirty & 12288 && t(2, (r = t(13, (g = y.composerLinks)) !== null && g !== void 0 ? g : [])),
        s.$$.dirty & 4096 && t(1, (l = y.artistLinks)),
        s.$$.dirty & 6 && t(7, (n = r?.length || l?.length)),
        s.$$.dirty & 4096 && t(0, (a = y.playAction)),
        s.$$.dirty & 1 && t(6, (o = !!a)),
        s.$$.dirty & 4096 && t(14, (c = Math.trunc(y.duration / 1e3))),
        s.$$.dirty & 16384 && t(5, (u = Ut(c, w.language))),
        s.$$.dirty & 16384 && t(4, (m = pr(c))),
        s.$$.dirty & 1 && t(3, (k = xr(a) && a.items)));
    }),
    [a, l, r, k, m, u, o, n, i, E, T, A, y, g, c, p]
  );
}
class jl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Wl, zl, He, { header: 12 }));
  }
}
function Ul(s) {
  let e,
    t,
    i = [{ xmlns: "http://www.w3.org/2000/svg" }, { width: "6" }, { height: "6" }, { viewBox: "0 0 64 64" }, s[0]],
    r = {};
  for (let l = 0; l < i.length; l += 1) r = ze(r, i[l]);
  return {
    c() {
      ((e = Ue("svg")), (t = Ue("path")), this.h());
    },
    l(l) {
      e = Ke(l, "svg", { xmlns: !0, width: !0, height: !0, viewBox: !0 });
      var n = v(e);
      ((t = Ke(n, "path", { d: !0 })), v(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (f(
        t,
        "d",
        "M31.948 61.587c16.185 0 29.587-13.43 29.587-29.587 0-16.186-13.43-29.587-29.616-29.587C15.762 2.413 2.36 15.814 2.36 32c0 16.157 13.43 29.587 29.587 29.587Z",
      ),
        Xe(e, r));
    },
    m(l, n) {
      (P(l, e, n), b(e, t));
    },
    p(l, [n]) {
      Xe(
        e,
        (r = Ct(i, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { width: "6" },
          { height: "6" },
          { viewBox: "0 0 64 64" },
          n & 1 && l[0],
        ])),
      );
    },
    i: ne,
    o: ne,
    d(l) {
      l && d(e);
    },
  };
}
function Kl(s, e, t) {
  return (
    (s.$$set = (i) => {
      t(0, (e = ze(ze({}, e), xe(i))));
    }),
    (e = xe(e)),
    [e]
  );
}
let Gl = class extends Ve {
  constructor(e) {
    (super(), $e(this, e, Kl, Ul, At, {}));
  }
};
function Li(s) {
  let e, t, i, r;
  return (
    (t = new Gl({})),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, role: !0, "aria-label": !0, "data-testid": !0 });
        var n = v(e);
        (W(t.$$.fragment, n), n.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "popular svelte-taox9z"),
          f(e, "role", "img"),
          f(e, "aria-label", (i = s[3].t("ASE.Web.Music.PopularTrack"))),
          f(e, "data-testid", "popular-glyph"));
      },
      m(l, n) {
        (P(l, e, n), O(t, e, null), (r = !0));
      },
      p(l, n) {
        (!r || (n & 8 && i !== (i = l[3].t("ASE.Web.Music.PopularTrack")))) && f(e, "aria-label", i);
      },
      i(l) {
        r || (_(t.$$.fragment, l), (r = !0));
      },
      o(l) {
        (h(t.$$.fragment, l), (r = !1));
      },
      d(l) {
        (l && d(e), z(t));
      },
    }
  );
}
function Mi(s) {
  let e, t, i;
  return (
    (t = new ur({
      props: { isFavorited: s[1], platter: !1, enabled: !0, title: s[3].t("ASE.Web.Music.VO.FavoriteHelpText") },
    })),
    t.$on("toggle", s[5]),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "favorite svelte-taox9z"), V(e, "is-favorited", s[1]));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l & 2 && (n.isFavorited = r[1]),
          l & 8 && (n.title = r[3].t("ASE.Web.Music.VO.FavoriteHelpText")),
          t.$set(n),
          (!i || l & 2) && V(e, "is-favorited", r[1]));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Zl(s) {
  let e,
    t,
    i,
    r = s[0] && Li(s),
    l = s[2] && Mi(s);
  return {
    c() {
      ((e = I("div")), r && r.c(), (t = Z()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0 });
      var a = v(e);
      (r && r.l(a), (t = J(a)), l && l.l(a), a.forEach(d), this.h());
    },
    h() {
      f(e, "class", "favorite-or-popular svelte-taox9z");
    },
    m(n, a) {
      (P(n, e, a), r && r.m(e, null), b(e, t), l && l.m(e, null), (i = !0));
    },
    p(n, [a]) {
      (n[0]
        ? r
          ? (r.p(n, a), a & 1 && _(r, 1))
          : ((r = Li(n)), r.c(), _(r, 1), r.m(e, t))
        : r &&
          (ue(),
          h(r, 1, 1, () => {
            r = null;
          }),
          fe()),
        n[2]
          ? l
            ? (l.p(n, a), a & 4 && _(l, 1))
            : ((l = Mi(n)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (ue(),
            h(l, 1, 1, () => {
              l = null;
            }),
            fe()));
    },
    i(n) {
      i || (_(r), _(l), (i = !0));
    },
    o(n) {
      (h(r), h(l), (i = !1));
    },
    d(n) {
      (n && d(e), r && r.d(), l && l.d());
    },
  };
}
function Jl(s, e, t) {
  let i;
  const r = Ge();
  Ce(s, r, (c) => t(3, (i = c)));
  let { isPopular: l = !1 } = e,
    { inFavorites: n = !1 } = e,
    { showFavoriteButton: a = !0 } = e;
  function o(c) {
    br.call(this, s, c);
  }
  return (
    (s.$$set = (c) => {
      ("isPopular" in c && t(0, (l = c.isPopular)),
        "inFavorites" in c && t(1, (n = c.inFavorites)),
        "showFavoriteButton" in c && t(2, (a = c.showFavoriteButton)));
    }),
    [l, n, a, i, r, o]
  );
}
class Ql extends Ve {
  constructor(e) {
    (super(), $e(this, e, Jl, Zl, He, { isPopular: 0, inFavorites: 1, showFavoriteButton: 2 }));
  }
}
function Yl(s) {
  let e,
    t,
    i = [
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
    r = {};
  for (let l = 0; l < i.length; l += 1) r = ze(r, i[l]);
  return {
    c() {
      ((e = Ue("svg")), (t = Ue("path")), this.h());
    },
    l(l) {
      e = Ke(l, "svg", {
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
      ((t = Ke(n, "path", { "fill-rule": !0, d: !0 })), v(t).forEach(d), n.forEach(d), this.h());
    },
    h() {
      (f(t, "fill-rule", "nonzero"),
        f(
          t,
          "d",
          "M16.747 12.437c1.166 0 1.753-.565 1.753-1.771V2.771C18.5 1.565 17.913 1 16.747 1H2.253C1.087 1 .5 1.565.5 2.771v7.895c0 1.206.587 1.771 1.753 1.771zm-.02-1.109H2.273c-.47 0-.675-.193-.675-.675V2.791c0-.489.205-.682.675-.682h14.454c.47 0 .675.193.675.682v7.862c0 .482-.205.675-.675.675m-8.738-1.296c.976 0 1.637-.709 1.637-1.708V5.961c0-.255.055-.324.205-.359l1.603-.385c.327-.09.429-.159.429-.559v-1.35c0-.262-.095-.379-.457-.289l-1.991.503c-.341.082-.41.151-.41.558v3.107c0 .303-.027.358-.375.455l-.627.165c-.621.165-1.139.537-1.139 1.213 0 .585.436 1.012 1.125 1.012M13.828 15a.636.636 0 0 0 .627-.648.636.636 0 0 0-.627-.647H5.159a.64.64 0 0 0-.635.647c0 .359.287.648.635.648z",
        ),
        Xe(e, r));
    },
    m(l, n) {
      (P(l, e, n), b(e, t));
    },
    p(l, [n]) {
      Xe(
        e,
        (r = Ct(i, [
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
    i: ne,
    o: ne,
    d(l) {
      l && d(e);
    },
  };
}
function Xl(s, e, t) {
  return (
    (s.$$set = (i) => {
      t(0, (e = ze(ze({}, e), xe(i))));
    }),
    (e = xe(e)),
    [e]
  );
}
class xl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Xl, Yl, At, {}));
  }
}
function Fi(s) {
  let e, t, i;
  return (
    (t = new xl({})),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__video-glyph svelte-12qfpku");
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function en(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = ke(s[45])), this.h());
    },
    l(i) {
      e = S(i, "DIV", { class: !0, "data-testid": !0 });
      var r = v(e);
      ((t = we(r, s[45])), r.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__column-data svelte-12qfpku"), f(e, "data-testid", "track-number"));
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      r[1] & 16384 && ye(t, i[45]);
    },
    i: ne,
    o: ne,
    d(i) {
      i && d(e);
    },
  };
}
function tn(s) {
  let e, t, i, r;
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
        (t.c(), (i = Re()));
      },
      l(o) {
        (t.l(o), (i = Re()));
      },
      m(o, c) {
        (n[e].m(o, c), P(o, i, c), (r = !0));
      },
      p(o, c) {
        let u = e;
        ((e = a(o)),
          e === u
            ? n[e].p(o, c)
            : (ue(),
              h(n[u], 1, 1, () => {
                n[u] = null;
              }),
              fe(),
              (t = n[e]),
              t ? t.p(o, c) : ((t = n[e] = l[e](o)), t.c()),
              _(t, 1),
              t.m(i.parentNode, i)));
      },
      i(o) {
        r || (_(t), (r = !0));
      },
      o(o) {
        (h(t), (r = !1));
      },
      d(o) {
        (o && d(i), n[e].d(o));
      },
    }
  );
}
function rn(s) {
  let e, t;
  return (
    (e = new zt({
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[0] & 2097152 && (l.artwork = i[21]),
          r[1] & 4096 && (l.artworkProfile = i[43]()),
          r[0] & 262144 && (l.badgeArtwork = i[18]?.attributes.artwork),
          r[0] & 262144 && (l.badgeName = i[18]?.attributes.name),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function sn(s) {
  let e, t, i, r, l, n;
  return (
    (t = new zt({
      props: {
        artwork: s[21],
        artworkProfile: s[43](),
        badgeArtwork: s[18]?.attributes.artwork,
        badgeName: s[18]?.attributes.name,
      },
    })),
    (l = new zt({ props: { artwork: s[21], artworkProfile: s[43](), badgeArtwork: void 0, badgeName: void 0 } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), (i = Z()), (r = I("div")), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "DIV", { class: !0 });
        var o = v(e);
        (W(t.$$.fragment, o), o.forEach(d), (i = J(a)), (r = S(a, "DIV", { class: !0 })));
        var c = v(r);
        (W(l.$$.fragment, c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "is-viewport-small"), f(r, "class", "is-viewport-large"));
      },
      m(a, o) {
        (P(a, e, o), O(t, e, null), P(a, i, o), P(a, r, o), O(l, r, null), (n = !0));
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
        (a && (d(e), d(i), d(r)), z(t), z(l));
      },
    }
  );
}
function Vi(s) {
  let e, t, i;
  return (
    (t = new _r({
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
      l(r) {
        e = S(r, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-list-row__play-button-wrapper svelte-12qfpku"), f(e, "data-testid", "track-play-button"));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[0] & 33562625 &&
          (n.ariaLabel = r[25].t("ASE.Web.Music.Album.Track.Play.AriaLabel", {
            songName: r[13],
            artistName: r[0].artistName,
          })),
          l[0] & 1073741824 && (n.item = r[30]),
          l[0] & 2048 && (n.isExplicit = r[11]),
          t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function ln(s) {
  let e, t;
  return (
    (e = new Ze({ props: { action: s[40], $$slots: { default: [on] }, $$scope: { ctx: s } } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[1] & 512 && (l.action = i[40]),
          (r[0] & 8192) | (r[3] & 2048) && (l.$$scope = { dirty: r, ctx: i }),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function nn(s) {
  let e, t, i, r, l, n;
  return (
    (t = new Ze({ props: { action: s[40], $$slots: { default: [an] }, $$scope: { ctx: s } } })),
    (l = new fs({})),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), (i = Z()), (r = I("span")), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "DIV", { class: !0, dir: !0 });
        var o = v(e);
        (W(t.$$.fragment, o), (i = J(o)), (r = S(o, "SPAN", { class: !0 })));
        var c = v(r);
        (W(l.$$.fragment, c), c.forEach(d), o.forEach(d), this.h());
      },
      h() {
        (f(r, "class", "songs-list-row__badge songs-list-row__badge--explicit svelte-12qfpku"),
          f(e, "class", "songs-list-row__explicit-wrapper svelte-12qfpku"),
          f(e, "dir", "auto"));
      },
      m(a, o) {
        (P(a, e, o), O(t, e, null), b(e, i), b(e, r), O(l, r, null), (n = !0));
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
      ((e = I("div")), (t = ke(s[13])), this.h());
    },
    l(i) {
      e = S(i, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var r = v(e);
      ((t = we(r, s[13])), r.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__song-name svelte-12qfpku"),
        f(e, "aria-label", s[13]),
        f(e, "tabindex", "-1"),
        f(e, "role", "checkbox"),
        f(e, "dir", "auto"),
        f(e, "data-testid", "track-title"));
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      (r[0] & 8192 && ye(t, i[13]), r[0] & 8192 && f(e, "aria-label", i[13]));
    },
    d(i) {
      i && d(e);
    },
  };
}
function an(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = ke(s[13])), this.h());
    },
    l(i) {
      e = S(i, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var r = v(e);
      ((t = we(r, s[13])), r.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__song-name svelte-12qfpku"),
        f(e, "aria-label", s[13]),
        f(e, "tabindex", "-1"),
        f(e, "role", "checkbox"),
        f(e, "dir", "auto"),
        f(e, "data-testid", "track-title"));
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      (r[0] & 8192 && ye(t, i[13]), r[0] & 8192 && f(e, "aria-label", i[13]));
    },
    d(i) {
      i && d(e);
    },
  };
}
function $i(s) {
  let e, t, i, r;
  return (
    (i = new it({
      props: {
        items: s[12],
        translateFn: s[25].t,
        $$slots: { default: [un, ({ item: l }) => ({ 103: l }), ({ item: l }) => [0, 0, 0, l ? 1024 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        ((e = I("div")), (t = I("span")), B(i.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, "data-testid": !0, dir: !0 });
        var n = v(e);
        t = S(n, "SPAN", { class: !0 });
        var a = v(t);
        (W(i.$$.fragment, a), a.forEach(d), n.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "svelte-12qfpku"),
          f(e, "class", "songs-list-row__by-line svelte-12qfpku"),
          f(e, "data-testid", "track-title-by-line"),
          f(e, "dir", "auto"),
          V(e, "songs-list-row__by-line__mobile", !s[6] || s[24]));
      },
      m(l, n) {
        (P(l, e, n), b(e, t), O(i, t, null), (r = !0));
      },
      p(l, n) {
        const a = {};
        (n[0] & 4096 && (a.items = l[12]),
          n[0] & 33554432 && (a.translateFn = l[25].t),
          n[3] & 3072 && (a.$$scope = { dirty: n, ctx: l }),
          i.$set(a),
          (!r || n[0] & 16777280) && V(e, "songs-list-row__by-line__mobile", !l[6] || l[24]));
      },
      i(l) {
        r || (_(i.$$.fragment, l), (r = !0));
      },
      o(l) {
        (h(i.$$.fragment, l), (r = !1));
      },
      d(l) {
        (l && d(e), z(i));
      },
    }
  );
}
function cn(s) {
  let e = s[103].title + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r[3] & 1024 && e !== (e = i[103].title + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function un(s) {
  let e, t;
  return (
    (e = new Ze({ props: { action: s[103].segue, $$slots: { default: [cn] }, $$scope: { ctx: s } } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[3] & 1024 && (l.action = i[103].segue), r[3] & 3072 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Ni(s) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = ke(s[44])), this.h());
    },
    l(i) {
      e = S(i, "DIV", { class: !0, "data-testid": !0 });
      var r = v(e);
      ((t = we(r, s[44])), r.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list-row__rank svelte-12qfpku"), f(e, "data-testid", "track-ranking"));
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      r[1] & 8192 && ye(t, i[44]);
    },
    d(i) {
      i && d(e);
    },
  };
}
function Ri(s) {
  let e, t, i, r, l;
  const n = [dn, fn],
    a = [];
  function o(c, u) {
    return c[23] ? 0 : 1;
  }
  return (
    (i = o(s)),
    (r = a[i] = n[i](s)),
    {
      c() {
        ((e = I("div")), (t = I("div")), r.c(), this.h());
      },
      l(c) {
        e = S(c, "DIV", { class: !0, "data-testid": !0 });
        var u = v(e);
        t = S(u, "DIV", { class: !0, dir: !0 });
        var m = v(t);
        (r.l(m), m.forEach(d), u.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__song-link-wrapper svelte-12qfpku"),
          f(t, "dir", "auto"),
          f(e, "class", "songs-list__col songs-list__col--secondary svelte-12qfpku"),
          f(e, "data-testid", "track-column-secondary"));
      },
      m(c, u) {
        (P(c, e, u), b(e, t), a[i].m(t, null), (l = !0));
      },
      p(c, u) {
        let m = i;
        ((i = o(c)),
          i === m
            ? a[i].p(c, u)
            : (ue(),
              h(a[m], 1, 1, () => {
                a[m] = null;
              }),
              fe(),
              (r = a[i]),
              r ? r.p(c, u) : ((r = a[i] = n[i](c)), r.c()),
              _(r, 1),
              r.m(t, null)));
      },
      i(c) {
        l || (_(r), (l = !0));
      },
      o(c) {
        (h(r), (l = !1));
      },
      d(c) {
        (c && d(e), a[i].d());
      },
    }
  );
}
function fn(s) {
  let e, t;
  return (
    (e = new it({
      props: {
        items: s[12],
        translateFn: s[25].t,
        $$slots: { default: [_n, ({ item: i }) => ({ 103: i }), ({ item: i }) => [0, 0, 0, i ? 1024 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[0] & 4096 && (l.items = i[12]),
          r[0] & 33554432 && (l.translateFn = i[25].t),
          r[3] & 3072 && (l.$$scope = { dirty: r, ctx: i }),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function dn(s) {
  let e, t;
  return (
    (e = new it({
      props: {
        items: s[39],
        translateFn: s[25].t,
        $$slots: { default: [gn, ({ item: i }) => ({ 102: i }), ({ item: i }) => [0, 0, 0, i ? 512 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[1] & 256 && (l.items = i[39]),
          r[0] & 33554432 && (l.translateFn = i[25].t),
          r[3] & 2560 && (l.$$scope = { dirty: r, ctx: i }),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function mn(s) {
  let e = s[103].title + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r[3] & 1024 && e !== (e = i[103].title + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function _n(s) {
  let e, t, i;
  return (
    (t = new Ze({ props: { action: s[103].segue, $$slots: { default: [mn] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment));
      },
      l(r) {
        e = S(r, "SPAN", {});
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[3] & 1024 && (n.action = r[103].segue), l[3] & 3072 && (n.$$scope = { dirty: l, ctx: r }), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function hn(s) {
  let e = s[102].title + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r[3] & 512 && e !== (e = i[102].title + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function gn(s) {
  let e, t, i;
  return (
    (t = new Ze({ props: { action: s[102].segue, $$slots: { default: [hn] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment));
      },
      l(r) {
        e = S(r, "SPAN", {});
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[3] & 512 && (n.action = r[102].segue), l[3] & 2560 && (n.$$scope = { dirty: l, ctx: r }), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Hi(s) {
  let e, t, i, r, l, n;
  const a = [bn, pn],
    o = [];
  function c(u, m) {
    return u[23] ? 0 : 1;
  }
  return (
    (i = c(s)),
    (r = o[i] = a[i](s)),
    {
      c() {
        ((e = I("div")), (t = I("div")), r.c(), this.h());
      },
      l(u) {
        e = S(u, "DIV", { class: !0, "data-testid": !0 });
        var m = v(e);
        t = S(m, "DIV", { class: !0, dir: !0 });
        var k = v(t);
        (r.l(k), k.forEach(d), m.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__song-link-wrapper svelte-12qfpku"),
          f(t, "dir", (l = s[23] ? void 0 : "auto")),
          f(e, "class", "songs-list__col songs-list__col--tertiary svelte-12qfpku"),
          f(e, "data-testid", "track-column-tertiary"));
      },
      m(u, m) {
        (P(u, e, m), b(e, t), o[i].m(t, null), (n = !0));
      },
      p(u, m) {
        let k = i;
        ((i = c(u)),
          i === k
            ? o[i].p(u, m)
            : (ue(),
              h(o[k], 1, 1, () => {
                o[k] = null;
              }),
              fe(),
              (r = o[i]),
              r ? r.p(u, m) : ((r = o[i] = a[i](u)), r.c()),
              _(r, 1),
              r.m(t, null)),
          (!n || (m[0] & 8388608 && l !== (l = u[23] ? void 0 : "auto"))) && f(t, "dir", l));
      },
      i(u) {
        n || (_(r), (n = !0));
      },
      o(u) {
        (h(r), (n = !1));
      },
      d(u) {
        (u && d(e), o[i].d());
      },
    }
  );
}
function pn(s) {
  let e, t;
  return (
    (e = new it({
      props: {
        items: s[39],
        translateFn: s[25].t,
        $$slots: { default: [kn, ({ item: i }) => ({ 102: i }), ({ item: i }) => [0, 0, 0, i ? 512 : 0]] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[1] & 256 && (l.items = i[39]),
          r[0] & 33554432 && (l.translateFn = i[25].t),
          r[3] & 2560 && (l.$$scope = { dirty: r, ctx: i }),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function bn(s) {
  let e,
    t,
    i = s[18] && qi(s);
  return {
    c() {
      (i && i.c(), (e = Re()));
    },
    l(r) {
      (i && i.l(r), (e = Re()));
    },
    m(r, l) {
      (i && i.m(r, l), P(r, e, l), (t = !0));
    },
    p(r, l) {
      r[18]
        ? i
          ? (i.p(r, l), l[0] & 262144 && _(i, 1))
          : ((i = qi(r)), i.c(), _(i, 1), i.m(e.parentNode, e))
        : i &&
          (ue(),
          h(i, 1, 1, () => {
            i = null;
          }),
          fe());
    },
    i(r) {
      t || (_(i), (t = !0));
    },
    o(r) {
      (h(i), (t = !1));
    },
    d(r) {
      (r && d(e), i && i.d(r));
    },
  };
}
function vn(s) {
  let e = s[102].title + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r[3] & 512 && e !== (e = i[102].title + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function kn(s) {
  let e, t, i;
  return (
    (t = new Ze({ props: { action: s[102].segue, $$slots: { default: [vn] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment));
      },
      l(r) {
        e = S(r, "SPAN", {});
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[3] & 512 && (n.action = r[102].segue), l[3] & 2560 && (n.$$scope = { dirty: l, ctx: r }), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function qi(s) {
  let e,
    t,
    i,
    r,
    l = s[18]?.attributes.name + "",
    n,
    a;
  return (
    (t = new kr({ props: { artwork: s[18]?.attributes.artwork, name: s[18]?.attributes.name } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), (i = Z()), (r = I("span")), (n = ke(l)), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0 });
        var c = v(e);
        (W(t.$$.fragment, c), (i = J(c)), (r = S(c, "SPAN", { class: !0 })));
        var u = v(r);
        ((n = we(u, l)), u.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(r, "class", "songs-list-row__badge-name"),
          f(e, "class", "songs-list-row__badge__contributor-wrapper svelte-12qfpku"));
      },
      m(o, c) {
        (P(o, e, c), O(t, e, null), b(e, i), b(e, r), b(r, n), (a = !0));
      },
      p(o, c) {
        const u = {};
        (c[0] & 262144 && (u.artwork = o[18]?.attributes.artwork),
          c[0] & 262144 && (u.name = o[18]?.attributes.name),
          t.$set(u),
          (!a || c[0] & 262144) && l !== (l = o[18]?.attributes.name + "") && ye(n, l));
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
function Bi(s) {
  let e, t, i, r, l, n;
  const a = [yn, wn],
    o = [];
  function c(u, m) {
    return u[23] ? 0 : u[18] ? 1 : -1;
  }
  return (
    ~(i = c(s)) && (r = o[i] = a[i](s)),
    {
      c() {
        ((e = I("div")), (t = I("div")), r && r.c(), this.h());
      },
      l(u) {
        e = S(u, "DIV", { class: !0, "data-testid": !0 });
        var m = v(e);
        t = S(m, "DIV", { class: !0, dir: !0 });
        var k = v(t);
        (r && r.l(k), k.forEach(d), m.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__song-link-wrapper svelte-12qfpku"),
          f(t, "dir", (l = s[23] ? "auto" : void 0)),
          f(e, "class", "songs-list__col songs-list__col--quaternary svelte-12qfpku"),
          f(e, "data-testid", "track-column-quaternary"),
          V(e, "songs-list__reactions", s[7]));
      },
      m(u, m) {
        (P(u, e, m), b(e, t), ~i && o[i].m(t, null), (n = !0));
      },
      p(u, m) {
        let k = i;
        ((i = c(u)),
          i === k
            ? ~i && o[i].p(u, m)
            : (r &&
                (ue(),
                h(o[k], 1, 1, () => {
                  o[k] = null;
                }),
                fe()),
              ~i ? ((r = o[i]), r ? r.p(u, m) : ((r = o[i] = a[i](u)), r.c()), _(r, 1), r.m(t, null)) : (r = null)),
          (!n || (m[0] & 8388608 && l !== (l = u[23] ? "auto" : void 0))) && f(t, "dir", l),
          (!n || m[0] & 128) && V(e, "songs-list__reactions", u[7]));
      },
      i(u) {
        n || (_(r), (n = !0));
      },
      o(u) {
        (h(r), (n = !1));
      },
      d(u) {
        (u && d(e), ~i && o[i].d());
      },
    }
  );
}
function wn(s) {
  let e,
    t,
    i,
    r,
    l = s[18]?.attributes.name + "",
    n,
    a;
  return (
    (t = new kr({ props: { artwork: s[18]?.attributes.artwork, name: s[18]?.attributes.name } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), (i = Z()), (r = I("span")), (n = ke(l)), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0 });
        var c = v(e);
        (W(t.$$.fragment, c), (i = J(c)), (r = S(c, "SPAN", { class: !0 })));
        var u = v(r);
        ((n = we(u, l)), u.forEach(d), c.forEach(d), this.h());
      },
      h() {
        (f(r, "class", "songs-list-row__badge-name"),
          f(e, "class", "songs-list-row__badge__contributor-wrapper svelte-12qfpku"));
      },
      m(o, c) {
        (P(o, e, c), O(t, e, null), b(e, i), b(e, r), b(r, n), (a = !0));
      },
      p(o, c) {
        const u = {};
        (c[0] & 262144 && (u.artwork = o[18]?.attributes.artwork),
          c[0] & 262144 && (u.name = o[18]?.attributes.name),
          t.$set(u),
          (!a || c[0] & 262144) && l !== (l = o[18]?.attributes.name + "") && ye(n, l));
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
  let e, t, i, r, l, n;
  return (
    (t = new ds({ props: { trackId: s[14], popoverPosition: s[26] ? vt.Right : vt.Left, appendPopoverToBody: !0 } })),
    (l = new ms({ props: { trackId: s[14] } })),
    {
      c() {
        ((e = I("span")), B(t.$$.fragment), (i = Z()), (r = I("span")), B(l.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var o = v(e);
        (W(t.$$.fragment, o), o.forEach(d), (i = J(a)), (r = S(a, "SPAN", { class: !0 })));
        var c = v(r);
        (W(l.$$.fragment, c), c.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "is-viewport-large"), f(r, "class", "is-viewport-small"));
      },
      m(a, o) {
        (P(a, e, o), O(t, e, null), P(a, i, o), P(a, r, o), O(l, r, null), (n = !0));
      },
      p(a, o) {
        const c = {};
        (o[0] & 16384 && (c.trackId = a[14]),
          o[0] & 67108864 && (c.popoverPosition = a[26] ? vt.Right : vt.Left),
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
        (a && (d(e), d(i), d(r)), z(t), z(l));
      },
    }
  );
}
function Oi(s) {
  let e, t, i;
  return (
    (t = new Ze({ props: { action: s[0].playAction, $$slots: { default: [In] }, $$scope: { ctx: s } } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0, "data-testid": !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "songs-list-row__preview-button svelte-12qfpku"), f(e, "data-testid", "track-preview"));
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[0] & 1 && (n.action = r[0].playAction),
          (l[0] & 33554432) | (l[3] & 2048) && (n.$$scope = { dirty: l, ctx: r }),
          t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function In(s) {
  let e = s[25].t("ASE.Web.Music.Preview.AllCaps") + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r[0] & 33554432 && e !== (e = i[25].t("ASE.Web.Music.Preview.AllCaps") + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function zi(s) {
  let e, t, i;
  return (
    (t = new _s({ props: { contentDescriptor: s[0].contentDescriptor, iconOnly: !0 } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__add-to-library svelte-12qfpku");
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        const n = {};
        (l[0] & 1 && (n.contentDescriptor = r[0].contentDescriptor), t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Wi(s) {
  let e, t;
  return {
    c() {
      ((e = I("time")), (t = ke(s[38])), this.h());
    },
    l(i) {
      e = S(i, "TIME", { datetime: !0, class: !0, "data-testid": !0 });
      var r = v(e);
      ((t = we(r, s[38])), r.forEach(d), this.h());
    },
    h() {
      (f(e, "datetime", s[37]),
        f(e, "class", "songs-list-row__length svelte-12qfpku"),
        f(e, "data-testid", "track-duration"));
    },
    m(i, r) {
      (P(i, e, r), b(e, t));
    },
    p(i, r) {
      (r[1] & 128 && ye(t, i[38]), r[1] & 64 && f(e, "datetime", i[37]));
    },
    d(i) {
      i && d(e);
    },
  };
}
function ji(s) {
  let e, t, i;
  return (
    (t = new Gt({
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
                action: s[90],
                label: s[25].t("ASE.Web.Music.ContextualMenu.RemoveFromPlaylist"),
                icon: oi.RemoveFromPlaylistIcon,
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
      l(r) {
        e = S(r, "DIV", { class: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "songs-list-row__context-menu svelte-12qfpku");
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      p(r, l) {
        s = r;
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
                    action: s[90],
                    label: s[25].t("ASE.Web.Music.ContextualMenu.RemoveFromPlaylist"),
                    icon: oi.RemoveFromPlaylistIcon,
                  },
                ]
              : []),
          t.$set(n));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Sn(s) {
  let e,
    t,
    i = !s[16] || !1,
    r,
    l,
    n = !s[47] && !s[16] && zi(s),
    a = !s[16] && Wi(s),
    o = i && ji(s);
  return {
    c() {
      (n && n.c(), (e = Z()), a && a.c(), (t = Z()), o && o.c(), (r = Re()));
    },
    l(c) {
      (n && n.l(c), (e = J(c)), a && a.l(c), (t = J(c)), o && o.l(c), (r = Re()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), a && a.m(c, u), P(c, t, u), o && o.m(c, u), P(c, r, u), (l = !0));
    },
    p(c, u) {
      (!c[47] && !c[16]
        ? n
          ? (n.p(c, u), (u[0] & 65536) | (u[1] & 65536) && _(n, 1))
          : ((n = zi(c)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (ue(),
          h(n, 1, 1, () => {
            n = null;
          }),
          fe()),
        c[16] ? a && (a.d(1), (a = null)) : a ? a.p(c, u) : ((a = Wi(c)), a.c(), a.m(t.parentNode, t)),
        u[0] & 65536 && (i = !c[16] || !1),
        i
          ? o
            ? (o.p(c, u), u[0] & 65536 && _(o, 1))
            : ((o = ji(c)), o.c(), _(o, 1), o.m(r.parentNode, r))
          : o &&
            (ue(),
            h(o, 1, 1, () => {
              o = null;
            }),
            fe()));
    },
    i(c) {
      l || (_(n), _(o), (l = !0));
    },
    o(c) {
      (h(n), h(o), (l = !1));
    },
    d(c) {
      (c && (d(e), d(t), d(r)), n && n.d(c), a && a.d(c), o && o.d(c));
    },
  };
}
function En(s) {
  let e, t, i, r, l, n, a, o, c, u, m, k, E, g, T, w, A, y, p, L, te, R, K, H, Q, ee, he, x, oe, be, q, le, me;
  ((i = new Ql({ props: { isPopular: s[0].showPopularityIndicator, inFavorites: s[29], showFavoriteButton: s[41] } })),
    i.$on("toggle", s[62]));
  let ae = s[15] && !s[42] && Fi();
  const Y = [tn, en],
    re = [];
  function G(D, F) {
    return D[42] ? 0 : D[45] || D[45] === 0 ? 1 : -1;
  }
  ~(c = G(s)) && (u = re[c] = Y[c](s));
  let $ = s[0].playAction && !s[16] && Vi(s);
  const Ie = [nn, ln],
    j = [];
  function Ee(D, F) {
    return D[11] ? 0 : 1;
  }
  ((T = Ee(s)), (w = j[T] = Ie[T](s)));
  let se = s[12].length && $i(s),
    ve = s[44] && Ni(s),
    ge = s[4] && s[20] !== "albumTrackList" && Ri(s),
    ce = s[5] && Hi(s),
    de = s[6] && Bi(s),
    U = s[47] && Oi(s);
  return (
    (ee = new ts({
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
    ee.$on("contextMenuActionComplete", s[91]),
    {
      c() {
        ((e = I("div")),
          (t = I("div")),
          B(i.$$.fragment),
          (r = Z()),
          (l = I("div")),
          (n = I("div")),
          ae && ae.c(),
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
          ve && ve.c(),
          (p = Z()),
          ge && ge.c(),
          (L = Z()),
          ce && ce.c(),
          (te = Z()),
          de && de.c(),
          (R = Z()),
          (K = I("div")),
          (H = I("div")),
          U && U.c(),
          (Q = Z()),
          B(ee.$$.fragment),
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
        (W(i.$$.fragment, Le), Le.forEach(d), (r = J(F)), (l = S(F, "DIV", { class: !0, "data-testid": !0 })));
        var Ae = v(l);
        n = S(Ae, "DIV", { class: !0 });
        var Pe = v(n);
        (ae && ae.l(Pe), (a = J(Pe)), (o = S(Pe, "DIV", { class: !0 })));
        var De = v(o);
        (u && u.l(De), (m = J(De)), $ && $.l(De), De.forEach(d), (k = J(Pe)), (E = S(Pe, "DIV", { class: !0 })));
        var We = v(E);
        g = S(We, "DIV", { class: !0, "data-testid": !0 });
        var qe = v(g);
        (w.l(qe),
          (A = J(qe)),
          se && se.l(qe),
          qe.forEach(d),
          We.forEach(d),
          (y = J(Pe)),
          ve && ve.l(Pe),
          Pe.forEach(d),
          Ae.forEach(d),
          (p = J(F)),
          ge && ge.l(F),
          (L = J(F)),
          ce && ce.l(F),
          (te = J(F)),
          de && de.l(F),
          (R = J(F)),
          (K = S(F, "DIV", { class: !0, "data-testid": !0 })));
        var C = v(K);
        H = S(C, "DIV", { class: !0 });
        var ie = v(H);
        (U && U.l(ie), (Q = J(ie)), W(ee.$$.fragment, ie), ie.forEach(d), C.forEach(d), F.forEach(d), this.h());
      },
      h() {
        (f(t, "class", "songs-list__col songs-list__col--favorite-or-popular svelte-12qfpku"),
          f(t, "data-testid", "track-column-favorite-or-popular"),
          f(o, "class", "songs-list-row__song-index svelte-12qfpku"),
          V(o, "songs-list-row__song-index--ranking", s[44]),
          V(o, "songs-list-row--with-collaborators", !s[17]),
          f(g, "class", "songs-list-row__song-name-wrapper svelte-12qfpku"),
          f(g, "data-testid", "song-name-wrapper"),
          V(g, "songs-list-row__song-name-wrapper--explicit", s[11]),
          f(E, "class", "songs-list-row__song-wrapper svelte-12qfpku"),
          f(n, "class", "songs-list-row__song-container svelte-12qfpku"),
          f(l, "class", "songs-list__col songs-list__col--song svelte-12qfpku"),
          f(l, "data-testid", "track-column-song"),
          f(H, "class", "songs-list-row__controls svelte-12qfpku"),
          f(K, "class", "songs-list__col songs-list__col--time svelte-12qfpku"),
          f(K, "data-testid", "track-column-controls"),
          f(e, "class", "songs-list-row drop-reset svelte-12qfpku"),
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
          O(i, t, null),
          b(e, r),
          b(e, l),
          b(l, n),
          ae && ae.m(n, null),
          b(n, a),
          b(n, o),
          ~c && re[c].m(o, null),
          b(o, m),
          $ && $.m(o, null),
          b(n, k),
          b(n, E),
          b(E, g),
          j[T].m(g, null),
          b(g, A),
          se && se.m(g, null),
          b(n, y),
          ve && ve.m(n, null),
          b(e, p),
          ge && ge.m(e, null),
          b(e, L),
          ce && ce.m(e, null),
          b(e, te),
          de && de.m(e, null),
          b(e, R),
          b(e, K),
          b(K, H),
          U && U.m(H, null),
          b(H, Q),
          O(ee, H, null),
          s[92](e),
          (q = !0),
          le ||
            ((me = [
              Fe(e, "dblclick", s[93]),
              Fe(e, "mousedown", s[94]),
              Fe(e, "mousedown", s[58]),
              Fe(e, "click", s[60]),
              Fe(e, "keydown", s[59]),
              Fe(e, "focusin", s[61]),
              et((x = An.call(null, e, s[3]))),
              et((oe = is.call(null, e, s[8] && { targets: [dt.Top, dt.Bottom], onDrop: s[95] }))),
              et((be = s[57].call(null, e, { impressionMetrics: s[32], location: s[31] }))),
            ]),
            (le = !0)));
      },
      p(D, F) {
        const Le = {};
        (F[0] & 1 && (Le.isPopular = D[0].showPopularityIndicator),
          F[0] & 536870912 && (Le.inFavorites = D[29]),
          F[1] & 1024 && (Le.showFavoriteButton = D[41]),
          i.$set(Le),
          D[15] && !D[42]
            ? ae
              ? (F[0] & 32768) | (F[1] & 2048) && _(ae, 1)
              : ((ae = Fi()), ae.c(), _(ae, 1), ae.m(n, a))
            : ae &&
              (ue(),
              h(ae, 1, 1, () => {
                ae = null;
              }),
              fe()));
        let Ae = c;
        ((c = G(D)),
          c === Ae
            ? ~c && re[c].p(D, F)
            : (u &&
                (ue(),
                h(re[Ae], 1, 1, () => {
                  re[Ae] = null;
                }),
                fe()),
              ~c ? ((u = re[c]), u ? u.p(D, F) : ((u = re[c] = Y[c](D)), u.c()), _(u, 1), u.m(o, m)) : (u = null)),
          D[0].playAction && !D[16]
            ? $
              ? ($.p(D, F), F[0] & 65537 && _($, 1))
              : (($ = Vi(D)), $.c(), _($, 1), $.m(o, null))
            : $ &&
              (ue(),
              h($, 1, 1, () => {
                $ = null;
              }),
              fe()),
          (!q || F[1] & 8192) && V(o, "songs-list-row__song-index--ranking", D[44]),
          (!q || F[0] & 131072) && V(o, "songs-list-row--with-collaborators", !D[17]));
        let Pe = T;
        ((T = Ee(D)),
          T === Pe
            ? j[T].p(D, F)
            : (ue(),
              h(j[Pe], 1, 1, () => {
                j[Pe] = null;
              }),
              fe(),
              (w = j[T]),
              w ? w.p(D, F) : ((w = j[T] = Ie[T](D)), w.c()),
              _(w, 1),
              w.m(g, A)),
          D[12].length
            ? se
              ? (se.p(D, F), F[0] & 4096 && _(se, 1))
              : ((se = $i(D)), se.c(), _(se, 1), se.m(g, null))
            : se &&
              (ue(),
              h(se, 1, 1, () => {
                se = null;
              }),
              fe()),
          (!q || F[0] & 2048) && V(g, "songs-list-row__song-name-wrapper--explicit", D[11]),
          D[44] ? (ve ? ve.p(D, F) : ((ve = Ni(D)), ve.c(), ve.m(n, null))) : ve && (ve.d(1), (ve = null)),
          D[4] && D[20] !== "albumTrackList"
            ? ge
              ? (ge.p(D, F), F[0] & 1048592 && _(ge, 1))
              : ((ge = Ri(D)), ge.c(), _(ge, 1), ge.m(e, L))
            : ge &&
              (ue(),
              h(ge, 1, 1, () => {
                ge = null;
              }),
              fe()),
          D[5]
            ? ce
              ? (ce.p(D, F), F[0] & 32 && _(ce, 1))
              : ((ce = Hi(D)), ce.c(), _(ce, 1), ce.m(e, te))
            : ce &&
              (ue(),
              h(ce, 1, 1, () => {
                ce = null;
              }),
              fe()),
          D[6]
            ? de
              ? (de.p(D, F), F[0] & 64 && _(de, 1))
              : ((de = Bi(D)), de.c(), _(de, 1), de.m(e, R))
            : de &&
              (ue(),
              h(de, 1, 1, () => {
                de = null;
              }),
              fe()),
          D[47]
            ? U
              ? (U.p(D, F), F[1] & 65536 && _(U, 1))
              : ((U = Oi(D)), U.c(), _(U, 1), U.m(H, Q))
            : U &&
              (ue(),
              h(U, 1, 1, () => {
                U = null;
              }),
              fe()));
        const De = {};
        (F[0] & 1 && (De.contentDescriptor = D[0].contentDescriptor),
          F[0] & 1073741824 && (De.isPlayable = D[30].playAction !== null),
          (F[0] & 34153985) | (F[1] & 98496) | (F[3] & 2304) && (De.$$scope = { dirty: F, ctx: D }),
          ee.$set(De),
          (!q || F[0] & 2) && f(e, "data-row", D[1]),
          (!q || ((F[0] & 1) | (F[1] & 262144) && he !== (he = D[49].currentMouseTarget === D[0]))) &&
            f(e, "data-current-mouse-target", he),
          (!q || F[0] & 268435456) && f(e, "aria-label", D[28]),
          x && Qe(x.update) && F[0] & 8 && x.update.call(null, D[3]),
          oe &&
            Qe(oe.update) &&
            F[0] & 256 &&
            oe.update.call(null, D[8] && { targets: [dt.Top, dt.Bottom], onDrop: D[95] }),
          be && Qe(be.update) && F[1] & 3 && be.update.call(null, { impressionMetrics: D[32], location: D[31] }),
          (!q || F[1] & 32) && V(e, "is-loading", D[36]),
          (!q || F[1] & 16) && V(e, "is-playing", D[35]),
          (!q || F[1] & 8) && V(e, "is-paused", D[34]),
          (!q || F[0] & 65536) && V(e, "songs-list-row--disabled", D[16]),
          (!q || F[1] & 2048) && V(e, "songs-list-row--artwork", D[42]),
          (!q || F[1] & 2048) && V(e, "songs-list-row--no-artwork", !D[42]),
          (!q || (F[0] & 4194304) | (F[1] & 2048)) && V(e, "songs-list-row--decorated", D[42] && D[22]),
          (!q || F[0] & 4096) && V(e, "songs-list-row--two-lines", D[12].length),
          (!q || F[0] & 1048576) && V(e, "songs-list-row--album", D[20] === "albumTrackList"),
          (!q || F[0] & 1048576) && V(e, "songs-list-row--playlist", D[20] === "playlistTrackList"),
          (!q || F[0] & 1048576) && V(e, "songs-list-row--compilation", D[20] === "compilationTrackList"),
          (!q || F[0] & 4) && V(e, "songs-list-row--selected", D[2]),
          (!q || F[1] & 65536) && V(e, "songs-list-row--preview", D[47]),
          (!q || F[0] & 65536) && V(e, "disabled", D[16]));
      },
      i(D) {
        q ||
          (_(i.$$.fragment, D),
          _(ae),
          _(u),
          _($),
          _(w),
          _(se),
          _(ge),
          _(ce),
          _(de),
          _(U),
          _(ee.$$.fragment, D),
          (q = !0));
      },
      o(D) {
        (h(i.$$.fragment, D),
          h(ae),
          h(u),
          h($),
          h(w),
          h(se),
          h(ge),
          h(ce),
          h(de),
          h(U),
          h(ee.$$.fragment, D),
          (q = !1));
      },
      d(D) {
        (D && d(e),
          z(i),
          ae && ae.d(),
          ~c && re[c].d(),
          $ && $.d(),
          j[T].d(),
          se && se.d(),
          ve && ve.d(),
          ge && ge.d(),
          ce && ce.d(),
          de && de.d(),
          U && U.d(),
          z(ee),
          s[92](null),
          (le = !1),
          mt(me));
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
  let i,
    r,
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
    R,
    K,
    H,
    Q,
    ee,
    he,
    x,
    oe,
    be,
    q,
    le,
    me,
    ae,
    Y,
    re,
    G,
    $,
    Ie,
    j,
    Ee,
    se,
    ve,
    ge,
    ce,
    de,
    U,
    D,
    F,
    Le = ne,
    Ae = () => (Le(), (Le = Dt(j, (M) => t(85, (F = M)))), j),
    Pe,
    De,
    We,
    qe;
  (Ce(s, rs, (M) => t(97, (U = M))), Ce(s, ss, (M) => t(86, (Pe = M))), s.$$.on_destroy.push(() => Le()));
  var C, ie, pe, Se, Ne, rt, st, lt, nt, N;
  const X = ut(),
    Me = Ge();
  Ce(s, Me, (M) => t(25, (de = M)));
  const Te = Mt();
  Ce(s, Te, (M) => t(49, (D = M)));
  const Je = tt(),
    ot = Lt(),
    { queue: Zt, isRestricted: Jt } = dr();
  (Ce(s, Zt, (M) => t(87, (De = M))), Ce(s, Jt, (M) => t(88, (We = M))));
  const { state: Qt } = _t();
  Ce(s, Qt, (M) => t(89, (qe = M)));
  const Vt = St(),
    { captureImpressions: Er } = ls();
  let Yt = !1;
  (Et(() => {
    t(26, (Yt = document.dir === gr.RTL));
  }),
    ft(() => {
      X.unsubscribeFromUpdates(m);
    }));
  let { item: _e } = e,
    { containerItemDescriptors: $t = [] } = e,
    { rowIndex: Xt } = e,
    { isFirst: ht } = e,
    { isLast: gt } = e,
    { isSelected: xt } = e,
    { isLastSelected: ei } = e,
    { showSecondColumn: Nt } = e,
    { showThirdColumn: ti } = e,
    { showFourthColumn: pt } = e,
    { hasReactions: bt = !1 } = e,
    { socialProfiles: Rt = new Map() } = e,
    { dropEnabled: ii = !1 } = e,
    { shouldShowRemoveFromPlaylist: ri = !1 } = e,
    { containerArtwork: si } = e,
    at;
  function Ar(M) {
    let je;
    if ((k ? (je = hs(M)) : (je = gs(M)), je.contentDescriptor.url || je.contentDescriptor.catalogUrl))
      return cs(
        { kind: us.CatalogPage, intent: je },
        {
          data: [
            {
              excludingFields: [],
              includingFields: ["pageFields", "languages", "impressionsSnapshot", "clickLocation"],
              shouldFlush: !1,
              fields: {
                targetId: ee?.identifiers.storeAdamID,
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
  let Ht = !1;
  function Cr(M) {
    M.metaKey && (Ht = !0);
  }
  function Dr(M) {
    if (M.key === "Enter" && M.target === at) ot(Ie.playAction);
    else if (M.key === "Tab")
      if (M.shiftKey)
        document.activeElement === at && (ht ? Te.clearSelection() : (Te.selectPreviousItem(_e), M.preventDefault()));
      else {
        const je = at.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        );
        document.activeElement === je[je.length - 1] &&
          (gt ? Te.clearSelection() : (Te.selectNextItem(_e), M.preventDefault()));
      }
  }
  function Tr(M) {
    Te.handleClick(_e, M);
  }
  function Pr() {
    const M = D.selectedItems.length;
    (!Ht && M <= 1 && (ht || gt) && Te.selectItem(_e), (Ht = !1));
  }
  const Lr = () => {
      hr(m, Ee, _e.contentDescriptor, se, X, U, !0, ot);
    },
    Mr = () => {
      Vt("removeFromPlaylist", { itemId: u });
    };
  function Fr(M) {
    br.call(this, s, M);
  }
  function Vr(M) {
    Wt[M ? "unshift" : "push"](() => {
      ((at = M), t(27, at));
    });
  }
  const $r = () => ot(Ie.playAction),
    Nr = (M) => {
      M.metaKey || Te.setCurrentMouseTarget(_e);
    },
    Rr = (...M) => Vt("drop", ...M);
  return (
    (s.$$set = (M) => {
      ("item" in M && t(0, (_e = M.item)),
        "containerItemDescriptors" in M && t(63, ($t = M.containerItemDescriptors)),
        "rowIndex" in M && t(1, (Xt = M.rowIndex)),
        "isFirst" in M && t(64, (ht = M.isFirst)),
        "isLast" in M && t(65, (gt = M.isLast)),
        "isSelected" in M && t(2, (xt = M.isSelected)),
        "isLastSelected" in M && t(3, (ei = M.isLastSelected)),
        "showSecondColumn" in M && t(4, (Nt = M.showSecondColumn)),
        "showThirdColumn" in M && t(5, (ti = M.showThirdColumn)),
        "showFourthColumn" in M && t(6, (pt = M.showFourthColumn)),
        "hasReactions" in M && t(7, (bt = M.hasReactions)),
        "socialProfiles" in M && t(66, (Rt = M.socialProfiles)),
        "dropEnabled" in M && t(8, (ii = M.dropEnabled)),
        "shouldShowRemoveFromPlaylist" in M && t(9, (ri = M.shouldShowRemoveFromPlaylist)),
        "containerArtwork" in M && t(10, (si = M.containerArtwork)));
    }),
    (s.$$.update = () => {
      (s.$$.dirty[0] & 1 &&
        t(
          20,
          (i = (() => {
            const M = _e.layoutStyle;
            return typeof M == "string" ? M : M?.kind;
          })()),
        ),
        s.$$.dirty[0] & 192 && t(23, (r = pt && bt)),
        s.$$.dirty[0] & 192 && t(24, (l = pt && !bt)),
        s.$$.dirty[0] & 25165824 && t(17, (n = !r && !l)),
        s.$$.dirty[0] & 25165824 && t(48, (a = l || r)),
        s.$$.dirty[2] & 134217760 &&
          t(83, (o = vr(t(67, (C = qe?.user)) === null || C === void 0 ? void 0 : C.subscriberType))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 64) &&
          t(84, (c = t(68, (ie = _e.contentDescriptor)) === null || ie === void 0 ? void 0 : ie.kind)),
        s.$$.dirty[0] & 1 && t(19, (u = ct(_e))),
        s.$$.dirty[0] & 1 && t(14, (m = Kt(_e))),
        s.$$.dirty[2] & 4194304 && t(15, (k = ns.includes(c))),
        s.$$.dirty[0] & 1 && t(47, (E = _e.isPreviewMode)),
        s.$$.dirty[0] & 1 && t(11, (g = _e.showExplicitBadge)),
        (s.$$.dirty[0] & 2049) | (s.$$.dirty[2] & 67108864) && t(16, (T = _e.isDisabled || (g && We))),
        s.$$.dirty[0] & 65537 && t(46, (w = T && !!_e.isPrerelease)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 768) &&
          t(
            79,
            (G =
              t(
                71,
                (Ne =
                  t(70, (Se = _e.socialProfileContentDescriptor)) === null || Se === void 0 ? void 0 : Se.identifiers),
              ) === null || Ne === void 0
                ? void 0
                : Ne.socialProfileID),
          ),
        (s.$$.dirty[0] & 131072) | (s.$$.dirty[2] & 16908304) && t(18, ($ = n ? Rt.get(G) : Pe?.get(G))),
        s.$$.dirty[0] & 262144 && t(22, (A = !!$)),
        s.$$.dirty[0] & 1 && t(45, (y = _e.trackNumber)),
        s.$$.dirty[0] & 1 && t(13, (p = _e.title)),
        s.$$.dirty[0] & 1 && t(44, (L = _e.rankingText)),
        s.$$.dirty[0] & 1 && t(21, (te = _e.artwork)),
        s.$$.dirty[0] & 4227072 &&
          t(43, (R = () => (k ? "music-video-tracklist" : A ? "track-list-decorated" : "track-list"))),
        s.$$.dirty[0] & 3145728 && t(42, (K = !!te || i === "playlistTrackList")),
        (s.$$.dirty[0] & 65536) | (s.$$.dirty[2] & 2097152) && t(41, (H = o && !T)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 128) &&
          t(82, (Q = t(69, (pe = _e.contentDescriptor)) === null || pe === void 0 ? void 0 : pe.url)),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 1048576) &&
          t(78, (ee = Object.assign(Object.assign({}, _e.contentDescriptor), { url: os(Q) }))),
        (s.$$.dirty[0] & 65536) | (s.$$.dirty[2] & 65536) && t(40, (he = !!ee && !T && Ar(ee))),
        s.$$.dirty[0] & 1 && t(12, (x = _e.subtitleLinks || [])),
        s.$$.dirty[0] & 1 && t(39, (oe = _e.tertiaryLinks || [])),
        s.$$.dirty[0] & 1 && t(81, (be = Math.trunc(_e.duration / 1e3))),
        s.$$.dirty[2] & 524288 && t(38, (q = Ut(be, Je.language))),
        s.$$.dirty[2] & 524288 && t(37, (le = pr(be))),
        (s.$$.dirty[0] & 524288) | (s.$$.dirty[2] & 33554432) && t(80, (me = u && De.nowPlayingItemId === u)),
        s.$$.dirty[2] & 33816576 && t(36, (ae = me && De.derivedStates.isLoading)),
        s.$$.dirty[2] & 33816576 && t(35, (Y = me && De.derivedStates.isPlaying)),
        s.$$.dirty[2] & 33816576 && t(34, (re = me && De.derivedStates.isPaused)),
        (s.$$.dirty[0] & 65537) | (s.$$.dirty[2] & 2) &&
          t(
            30,
            (Ie = (() =>
              Object.assign(Object.assign({}, _e), { playAction: !T && _e.playAction && mr(_e.playAction, $t) }))()),
          ),
        s.$$.dirty[0] & 16384 && Ae(t(33, (j = X.subscribeToUpdates(m)))),
        s.$$.dirty[0] & 32768 && t(77, (Ee = k ? yt.MusicVideo : yt.Song)),
        (s.$$.dirty[0] & 16384) | (s.$$.dirty[2] & 8422400) &&
          t(29, (se = F && (t(72, (rt = X.get(m, Ee))) === null || rt === void 0 ? void 0 : rt.inFavorites))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 6144) &&
          t(
            32,
            (ve =
              t(74, (lt = t(73, (st = _e?.impressionMetrics)) === null || st === void 0 ? void 0 : st.fields)) !==
                null && lt !== void 0
                ? lt
                : {}),
          ),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[2] & 24576) &&
          t(
            31,
            (ge =
              t(
                76,
                (N = t(75, (nt = _e?.impressionMetrics)) === null || nt === void 0 ? void 0 : nt.clickLocationFields),
              ) !== null && N !== void 0
                ? N
                : {}),
          ),
        s.$$.dirty[0] & 33568784 &&
          t(
            28,
            (ce = (() => {
              let M = p;
              return (
                Nt &&
                  (M = de.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: M,
                    contentB: as(
                      x.map((je) => je.title),
                      Je.language,
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
      _e,
      Xt,
      xt,
      ei,
      Nt,
      ti,
      pt,
      bt,
      ii,
      ri,
      si,
      g,
      x,
      p,
      m,
      k,
      T,
      n,
      $,
      u,
      i,
      te,
      A,
      r,
      l,
      de,
      Yt,
      at,
      ce,
      se,
      Ie,
      ge,
      ve,
      j,
      re,
      Y,
      ae,
      le,
      q,
      oe,
      he,
      H,
      K,
      R,
      L,
      y,
      w,
      E,
      a,
      D,
      Me,
      Te,
      ot,
      Zt,
      Jt,
      Qt,
      Vt,
      Er,
      Cr,
      Dr,
      Tr,
      Pr,
      Lr,
      $t,
      ht,
      gt,
      Rt,
      C,
      ie,
      pe,
      Se,
      Ne,
      rt,
      st,
      lt,
      nt,
      N,
      Ee,
      ee,
      G,
      me,
      be,
      Q,
      o,
      c,
      F,
      Pe,
      De,
      We,
      qe,
      Mr,
      Fr,
      Vr,
      $r,
      Nr,
      Rr,
    ]
  );
}
class Dn extends Ve {
  constructor(e) {
    (super(),
      $e(
        this,
        e,
        Cn,
        En,
        He,
        {
          item: 0,
          containerItemDescriptors: 63,
          rowIndex: 1,
          isFirst: 64,
          isLast: 65,
          isSelected: 2,
          isLastSelected: 3,
          showSecondColumn: 4,
          showThirdColumn: 5,
          showFourthColumn: 6,
          hasReactions: 7,
          socialProfiles: 66,
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
function Ui(s, e, t) {
  const i = s.slice();
  return ((i[60] = e[t]), (i[62] = t), i);
}
function Ki(s, e, t) {
  const i = s.slice();
  return ((i[63] = e[t]), i);
}
function Pn(s) {
  let e,
    t = Oe(s[15]),
    i = [];
  for (let r = 0; r < t.length; r += 1) i[r] = Gi(Ki(s, t, r));
  return {
    c() {
      e = I("div");
      for (let r = 0; r < i.length; r += 1) i[r].c();
      this.h();
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-hidden": !0, role: !0, "data-testid": !0 });
      var l = v(e);
      for (let n = 0; n < i.length; n += 1) i[n].l(l);
      (l.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list__header svelte-1nv2jor"),
        f(e, "aria-hidden", "true"),
        f(e, "role", "row"),
        f(e, "data-testid", "tracklist-column-header"),
        V(e, "songs-list__header--is-visible", s[8]));
    },
    m(r, l) {
      P(r, e, l);
      for (let n = 0; n < i.length; n += 1) i[n] && i[n].m(e, null);
    },
    p(r, l) {
      if (l[0] & 32784) {
        t = Oe(r[15]);
        let n;
        for (n = 0; n < t.length; n += 1) {
          const a = Ki(r, t, n);
          i[n] ? i[n].p(a, l) : ((i[n] = Gi(a)), i[n].c(), i[n].m(e, null));
        }
        for (; n < i.length; n += 1) i[n].d(1);
        i.length = t.length;
      }
      l[0] & 256 && V(e, "songs-list__header--is-visible", r[8]);
    },
    i: ne,
    o: ne,
    d(r) {
      (r && d(e), Ft(i, r));
    },
  };
}
function Ln(s) {
  let e, t;
  return (
    (e = new jl({ props: { header: s[0].header.item } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r[0] & 1 && (l.header = i[0].header.item), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Gi(s) {
  let e,
    t,
    i = s[63].headerText + "",
    r,
    l,
    n,
    a,
    o;
  return {
    c() {
      ((e = I("div")), (t = I("div")), (r = ke(i)), (n = Z()), this.h());
    },
    l(c) {
      e = S(c, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var u = v(e);
      t = S(u, "DIV", { class: !0 });
      var m = v(t);
      ((r = we(m, i)), m.forEach(d), (n = J(u)), u.forEach(d), this.h());
    },
    h() {
      (f(
        t,
        "class",
        (l = "songs-list__header-col-label songs-list__header-col-label--" + s[63].key + " svelte-1nv2jor"),
      ),
        f(
          e,
          "class",
          (a =
            "songs-list__col songs-list__col--" +
            s[63].key +
            " songs-list__header-col songs-list__header-col--" +
            s[63].key +
            " svelte-1nv2jor"),
        ),
        f(e, "role", "columnheader"),
        f(e, "data-testid", (o = "tracklist-column-header-" + s[63].key)),
        V(e, "songs-list__reactions", s[63].key === "quaternary" && s[4]));
    },
    m(c, u) {
      (P(c, e, u), b(e, t), b(t, r), b(e, n));
    },
    p(c, u) {
      (u[0] & 32768 && i !== (i = c[63].headerText + "") && ye(r, i),
        u[0] & 32768 &&
          l !== (l = "songs-list__header-col-label songs-list__header-col-label--" + c[63].key + " svelte-1nv2jor") &&
          f(t, "class", l),
        u[0] & 32768 &&
          a !==
            (a =
              "songs-list__col songs-list__col--" +
              c[63].key +
              " songs-list__header-col songs-list__header-col--" +
              c[63].key +
              " svelte-1nv2jor") &&
          f(e, "class", a),
        u[0] & 32768 && o !== (o = "tracklist-column-header-" + c[63].key) && f(e, "data-testid", o),
        u[0] & 32784 && V(e, "songs-list__reactions", c[63].key === "quaternary" && c[4]));
    },
    d(c) {
      c && d(e);
    },
  };
}
function Zi(s) {
  let e;
  return {
    c() {
      ((e = I("div")), this.h());
    },
    l(t) {
      ((e = S(t, "DIV", { class: !0 })), v(e).forEach(d), this.h());
    },
    h() {
      f(e, "class", "reorder-placeholder svelte-1nv2jor");
    },
    m(t, i) {
      P(t, e, i);
    },
    d(t) {
      t && d(e);
    },
  };
}
function Ji(s) {
  let e;
  return {
    c() {
      ((e = I("div")), this.h());
    },
    l(t) {
      ((e = S(t, "DIV", { class: !0 })), v(e).forEach(d), this.h());
    },
    h() {
      f(e, "class", "reorder-placeholder svelte-1nv2jor");
    },
    m(t, i) {
      P(t, e, i);
    },
    d(t) {
      t && d(e);
    },
  };
}
function Qi(s) {
  let e,
    t,
    i,
    r,
    l,
    n = s[62] === 0 && s[11] && s[1] === -1 && Zi();
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
  let o = s[11] && s[1] === s[62] && Ji();
  return {
    c() {
      (n && n.c(), (e = Z()), B(t.$$.fragment), (i = Z()), o && o.c(), (r = Re()));
    },
    l(c) {
      (n && n.l(c), (e = J(c)), W(t.$$.fragment, c), (i = J(c)), o && o.l(c), (r = Re()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), O(t, c, u), P(c, i, u), o && o.m(c, u), P(c, r, u), (l = !0));
    },
    p(c, u) {
      ((s = c),
        s[62] === 0 && s[11] && s[1] === -1
          ? n || ((n = Zi()), n.c(), n.m(e.parentNode, e))
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
        s[11] && s[1] === s[62] ? o || ((o = Ji()), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), (o = null)));
    },
    i(c) {
      l || (_(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      (h(t.$$.fragment, c), (l = !1));
    },
    d(c) {
      (c && (d(e), d(i), d(r)), n && n.d(c), z(t, c), o && o.d(c));
    },
  };
}
function Mn(s) {
  let e, t, i, r, l, n, a, o, c;
  const u = [Ln, Pn],
    m = [];
  function k(w, A) {
    return (A[0] & 1 && (t = null), t == null && (t = !!wr(w[0].header)), t ? 0 : 1);
  }
  ((i = k(s, [-1, -1, -1])), (r = m[i] = u[i](s)));
  let E = Oe(s[3]),
    g = [];
  for (let w = 0; w < E.length; w += 1) g[w] = Qi(Ui(s, E, w));
  const T = (w) =>
    h(g[w], 1, 1, () => {
      g[w] = null;
    });
  return {
    c() {
      ((e = I("div")), r.c(), (l = Z()));
      for (let w = 0; w < g.length; w += 1) g[w].c();
      this.h();
    },
    l(w) {
      e = S(w, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var A = v(e);
      (r.l(A), (l = J(A)));
      for (let y = 0; y < g.length; y += 1) g[y].l(A);
      (A.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "songs-list svelte-1nv2jor"),
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
      (P(w, e, A), m[i].m(e, null), b(e, l));
      for (let y = 0; y < g.length; y += 1) g[y] && g[y].m(e, null);
      ((a = !0),
        o ||
          ((c = [
            Fe(window, "keydown", s[31]),
            Fe(e, "keydown", s[28].handleKeydown),
            et(
              (n = Ot.call(null, e, {
                dragData: { items: s[21], indexedItems: s[20], containerDescriptor: s[2] },
                badgeCount: s[21].length,
                dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
              })),
            ),
          ]),
          (o = !0)));
    },
    p(w, A) {
      let y = i;
      if (
        ((i = k(w, A)),
        i === y
          ? m[i].p(w, A)
          : (ue(),
            h(m[y], 1, 1, () => {
              m[y] = null;
            }),
            fe(),
            (r = m[i]),
            r ? r.p(w, A) : ((r = m[i] = u[i](w)), r.c()),
            _(r, 1),
            r.m(e, l)),
        A[0] & 1762294014)
      ) {
        E = Oe(w[3]);
        let p;
        for (p = 0; p < E.length; p += 1) {
          const L = Ui(w, E, p);
          g[p] ? (g[p].p(L, A), _(g[p], 1)) : ((g[p] = Qi(L)), g[p].c(), _(g[p], 1), g[p].m(e, null));
        }
        for (ue(), p = E.length; p < g.length; p += 1) T(p);
        fe();
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
        _(r);
        for (let A = 0; A < E.length; A += 1) _(g[A]);
        a = !0;
      }
    },
    o(w) {
      (h(r), (g = g.filter(Tn)));
      for (let A = 0; A < g.length; A += 1) h(g[A]);
      a = !1;
    },
    d(w) {
      (w && d(e), m[i].d(), Ft(g, w), (o = !1), mt(c));
    },
  };
}
function Fn(s, e, t) {
  let i,
    r,
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
    R,
    K,
    H,
    Q,
    ee,
    he,
    x,
    oe,
    be,
    q,
    le,
    me,
    ae,
    Y = ne,
    re = () => (Y(), (Y = Dt(k, (N) => t(44, (ae = N)))), k);
  s.$$.on_destroy.push(() => Y());
  var G, $, Ie, j;
  const Ee = Symbol(),
    se = ut(),
    { state: ve } = _t();
  Ce(s, ve, (N) => t(49, (me = N)));
  const ge = Ge();
  Ce(s, ge, (N) => t(43, (q = N)));
  const ce = Tt(),
    de = Lt(),
    U = Mt();
  Ce(s, U, (N) => t(12, (le = N)));
  const D = tt(),
    F = Pt("<TrackList>"),
    Le = ps();
  let { section: Ae } = e;
  const Pe = St();
  let De = null,
    We = null;
  const qe = () => {
    const N = U.getItems(Ee),
      X = le.selectedItems.map((Me) => ({ index: N.indexOf(Me), id: ct(Me) }));
    if ((U.resetItems(Ee), U.clearSelection(), U.addItems(Ee, o), X)) {
      const Me = X.map(({ index: Te, id: Je }) => (ct(o[Te]) === Je ? o[Te] : o.find((ot) => ct(ot) === Je))).filter(
        Boolean,
      );
      U.selectMultiple(Me);
    }
  };
  function C() {
    m === yt.Album &&
      o &&
      setTimeout(() => {
        var N;
        jt([Ae], (N = me.user) === null || N === void 0 ? void 0 : N.subscriberType, ce, F, D, se, !0);
      }, 250);
  }
  let ie = new Map();
  async function pe(N, X, { detail: Me }) {
    if (a && Ae.reorderAction && "indexedItems" in Me.data && qt(Me.data.containerDescriptor) === qt(i)) {
      let Te = Me.dropTarget === dt.Top ? X - 1 : X;
      (Se(Te), await de(Ss(Ae.reorderAction, Te, Me.data)), Ne());
    }
  }
  function Se(N) {
    t(1, (De = N));
  }
  async function Ne() {
    (clearTimeout(We), t(1, (De = null)), (We = null), await Es());
  }
  const rt = (N) => {
    N.key === "a" && (N.metaKey || N.ctrlKey) && (N.preventDefault(), U.selectAll());
  };
  ft(() => {
    (U.resetItems(Ee), se.unsubscribeFromUpdates(u), bs());
  });
  const st = (N) => {
      Pe("catalogActionOnTrackListItem", N.detail);
    },
    lt = (N, X, ...Me) => pe(N, X, ...Me),
    nt = async (N) => {
      const { itemId: X } = N.detail,
        Me = As({ operationType: Cs.RemoveFromPlaylist, id: X, containerId: qt(i) });
      await ce.dispatch(Me);
      const Te = Ds(X);
      (await ce.perform(Te),
        await ce.perform(
          kt({ kind: "libraryItemsDeleted", metadata: { id: X, type: "library-songs", isLibraryContentId: !0 } }),
        ));
    };
  return (
    (s.$$set = (N) => {
      "section" in N && t(0, (Ae = N.section));
    }),
    (s.$$.update = () => {
      if (
        (s.$$.dirty[0] & 1 && t(2, (i = Ae.containerContentDescriptor)),
        s.$$.dirty[0] & 1 && t(24, (r = Ae.containerArtwork)),
        s.$$.dirty[0] & 1 && t(38, (l = !!Ae.canEdit)),
        s.$$.dirty[0] & 2 && t(11, (n = De != null)),
        (s.$$.dirty[0] & 2049) | (s.$$.dirty[1] & 128) &&
          t(14, (a = l && ce.isUserInHomeStorefront() && !!Ae.reorderAction && !n)),
        s.$$.dirty[0] & 1 && t(3, (o = Ae.items || [])),
        s.$$.dirty[0] & 8 && t(23, (c = o.some((N) => N.isPreviewMode))),
        s.$$.dirty[0] & 8 && qe(),
        s.$$.dirty[0] & 4 && t(36, (u = !!i && Kt({ contentDescriptor: i }))),
        s.$$.dirty[0] & 4 && t(41, (m = i?.kind)),
        s.$$.dirty[1] & 32 && re(t(22, (k = se.subscribeToUpdates(u)))),
        s.$$.dirty[1] & 9250 &&
          t(42, (E = ae && !!m && (t(32, (G = se.get(u, m))) === null || G === void 0 ? void 0 : G.inLibrary))),
        s.$$.dirty[1] & 2048 && C(),
        s.$$.dirty[0] & 4096 &&
          t(
            40,
            (g = (() =>
              le.currentMouseTarget
                ? le.selectedItems.includes(le.currentMouseTarget)
                  ? le.selectedItems
                  : [le.currentMouseTarget]
                : [])()),
          ),
        s.$$.dirty[1] & 512 && t(21, (T = g.map((N) => N?.contentDescriptor))),
        (s.$$.dirty[0] & 8) | (s.$$.dirty[1] & 512) &&
          t(20, (w = g.map((N) => ({ index: o.indexOf(N), item: N.contentDescriptor })))),
        s.$$.dirty[0] & 8 && t(19, (A = o.map((N) => N.contentDescriptor))),
        (s.$$.dirty[0] & 1) | (s.$$.dirty[1] & 4) &&
          t(37, (y = t(33, ($ = Ae.header)) === null || $ === void 0 ? void 0 : $.item)),
        s.$$.dirty[0] & 8 &&
          t(
            39,
            (p = (() => {
              var N;
              const X = (N = o[0]) === null || N === void 0 ? void 0 : N.layoutStyle;
              return typeof X == "string" ? X : X?.kind;
            })()),
          ),
        s.$$.dirty[1] & 256 && t(9, (L = p === "albumTrackList")),
        s.$$.dirty[1] & 256 && t(18, (te = p === "compilationTrackList")),
        s.$$.dirty[1] & 256 && t(10, (R = p === "playlistTrackList")),
        (s.$$.dirty[0] & 1025) | (s.$$.dirty[1] & 136) &&
          t(
            17,
            (K =
              t(34, (Ie = vs(Ae.containerContentDescriptor) && R && l && ce.isUserInHomeStorefront())) !== null &&
              Ie !== void 0
                ? Ie
                : !1),
          ),
        s.$$.dirty[0] & 1 && t(8, (H = ks(Ae.header))),
        s.$$.dirty[0] & 1 && t(16, (Q = wr(Ae.header))),
        s.$$.dirty[0] & 520 &&
          t(
            7,
            (ee =
              o.some((N) => {
                var X;
                return (X = N.subtitleLinks) === null || X === void 0 ? void 0 : X.length;
              }) && !L),
          ),
        s.$$.dirty[0] & 8 &&
          t(
            6,
            (he = o.some((N) => {
              var X;
              return (X = N.tertiaryLinks) === null || X === void 0 ? void 0 : X.length;
            })),
          ),
        s.$$.dirty[1] & 64 && t(5, (x = !!y?.fourthColumnText)),
        s.$$.dirty[0] & 8 &&
          t(
            4,
            (oe = o.some((N) => {
              var X;
              return (X = N.reactions) === null || X === void 0 ? void 0 : X.length;
            })),
          ),
        (s.$$.dirty[0] & 480) | (s.$$.dirty[1] & 4160) &&
          t(
            15,
            (be = (() => {
              const N = [];
              let X;
              return (
                H && (X = y),
                ee &&
                  N.push({
                    key: "secondary",
                    headerText: X?.secondColumnText || q.t("ASE.Web.Music.SongsListHeaders.artist"),
                  }),
                he &&
                  N.push({
                    key: "tertiary",
                    headerText: X?.thirdColumnText || q.t("ASE.Web.Music.SongsListHeaders.album"),
                  }),
                x && N.push({ key: "quaternary", headerText: X?.fourthColumnText }),
                [
                  { headerText: "", key: "favorite-or-popular" },
                  { key: "song", headerText: X?.firstColumnText || q.t("ASE.Web.Music.SongsListHeaders.song") },
                  ...N,
                  { headerText: q.t("ASE.Web.Music.SongsListHeaders.time"), key: "time" },
                ]
              );
            })()),
          ),
        (s.$$.dirty[0] & 25) | (s.$$.dirty[1] & 16))
      ) {
        if (!(t(35, (j = Ae.collaborators)) === null || j === void 0) && j.length)
          ws(new Map(Ae.collaborators.map((N) => [N.id, N])));
        else if (Le) {
          let N = o
            .map((Me) => {
              var Te, Je;
              return (Je =
                (Te = Me.socialProfileContentDescriptor) === null || Te === void 0 ? void 0 : Te.identifiers) ===
                null || Je === void 0
                ? void 0
                : Je.socialProfileID;
            })
            .filter((Me) => Me != null);
          const X = new Set(N);
          X.size > 0 &&
            Le.fetchProfilesFromIds(Array.from(X)).then((Me) => {
              t(13, (ie = new Map(Me.map((Te) => [Te.id, Te]))));
            });
        }
        oe && o.length && ys(new Map(o.map((N) => [N.contentDescriptor.identifiers.storeAdamID, N.reactions])));
      }
    }),
    [
      Ae,
      De,
      i,
      o,
      oe,
      x,
      he,
      ee,
      H,
      L,
      R,
      n,
      le,
      ie,
      a,
      be,
      Q,
      K,
      te,
      A,
      w,
      T,
      k,
      c,
      r,
      ve,
      ge,
      ce,
      U,
      Pe,
      pe,
      rt,
      G,
      $,
      Ie,
      j,
      u,
      y,
      l,
      p,
      g,
      m,
      E,
      q,
      ae,
      st,
      lt,
      nt,
    ]
  );
}
class Vn extends Ve {
  constructor(e) {
    (super(), $e(this, e, Fn, Mn, He, { section: 0 }, null, [-1, -1, -1]));
  }
}
function $n(s) {
  let e, t;
  return (
    (e = new Ts({ props: { initials: ai(s[0].name) } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r & 1 && (l.initials = ai(i[0].name)), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Nn(s) {
  let e, t;
  return (
    (e = new fr({ props: { artwork: s[0].artwork, forceFullWidth: !1, profile: "track-lockup", alt: "" } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r & 1 && (l.artwork = i[0].artwork), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Rn(s) {
  let e = s[0] + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r & 1 && e !== (e = i[0] + "") && ye(t, e);
    },
    d(i) {
      i && d(t);
    },
  };
}
function Yi(s) {
  let e, t, i;
  return (
    (t = new yr({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((e = I("div")), B(t.$$.fragment), this.h());
      },
      l(r) {
        e = S(r, "DIV", { class: !0 });
        var l = v(e);
        (W(t.$$.fragment, l), l.forEach(d), this.h());
      },
      h() {
        f(e, "class", "chevron-container svelte-16yxrct");
      },
      m(r, l) {
        (P(r, e, l), O(t, e, null), (i = !0));
      },
      i(r) {
        i || (_(t.$$.fragment, r), (i = !0));
      },
      o(r) {
        (h(t.$$.fragment, r), (i = !1));
      },
      d(r) {
        (r && d(e), z(t));
      },
    }
  );
}
function Hn(s) {
  let e,
    t,
    i,
    r,
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
  const T = [Nn, $n],
    w = [];
  function A(p, L) {
    return p[0].artwork ? 0 : 1;
  }
  ((i = A(s)),
    (r = w[i] = T[i](s)),
    (k = new it({
      props: {
        items: s[0].roleNames,
        translateFn: s[1].t,
        $$slots: { default: [Rn, ({ item: p }) => ({ 0: p }), ({ item: p }) => (p ? 1 : 0)] },
        $$scope: { ctx: s },
      },
    })));
  let y = s[0].segue && Yi();
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        r.c(),
        (l = Z()),
        (n = I("div")),
        (a = I("div")),
        (c = ke(o)),
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
      (r.l(te), te.forEach(d), (l = J(L)), (n = S(L, "DIV", { class: !0 })));
      var R = v(n);
      a = S(R, "DIV", { class: !0 });
      var K = v(a);
      ((c = we(K, o)), K.forEach(d), (u = J(R)), (m = S(R, "DIV", { class: !0 })));
      var H = v(m);
      (W(k.$$.fragment, H), H.forEach(d), R.forEach(d), (E = J(L)), y && y.l(L), L.forEach(d), this.h());
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
        w[i].m(t, null),
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
      let te = i;
      ((i = A(p)),
        i === te
          ? w[i].p(p, L)
          : (ue(),
            h(w[te], 1, 1, () => {
              w[te] = null;
            }),
            fe(),
            (r = w[i]),
            r ? r.p(p, L) : ((r = w[i] = T[i](p)), r.c()),
            _(r, 1),
            r.m(t, null)),
        (!g || L & 1) && o !== (o = p[0].name + "") && ye(c, o));
      const R = {};
      (L & 1 && (R.items = p[0].roleNames),
        L & 2 && (R.translateFn = p[1].t),
        L & 9 && (R.$$scope = { dirty: L, ctx: p }),
        k.$set(R),
        p[0].segue
          ? y
            ? L & 1 && _(y, 1)
            : ((y = Yi()), y.c(), _(y, 1), y.m(e, null))
          : y &&
            (ue(),
            h(y, 1, 1, () => {
              y = null;
            }),
            fe()));
    },
    i(p) {
      g || (_(r), _(k.$$.fragment, p), _(y), (g = !0));
    },
    o(p) {
      (h(r), h(k.$$.fragment, p), h(y), (g = !1));
    },
    d(p) {
      (p && d(e), w[i].d(), z(k), y && y.d());
    },
  };
}
function qn(s) {
  let e, t;
  return (
    (e = new Ze({ props: { action: s[0].segue, $$slots: { default: [Hn] }, $$scope: { ctx: s } } })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, [r]) {
        const l = {};
        (r & 1 && (l.action = i[0].segue), r & 11 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Bn(s, e, t) {
  let i,
    { item: r } = e;
  const l = Ge();
  return (
    Ce(s, l, (n) => t(1, (i = n))),
    (s.$$set = (n) => {
      "item" in n && t(0, (r = n.item));
    }),
    [r, i, l]
  );
}
class On extends Ve {
  constructor(e) {
    (super(), $e(this, e, Bn, qn, He, { item: 0 }));
  }
}
function Xi(s, e, t) {
  const i = s.slice();
  return ((i[25] = e[t]), i);
}
function xi(s) {
  let e,
    t = s[25] + "",
    i;
  return {
    c() {
      ((e = I("p")), (i = ke(t)), this.h());
    },
    l(r) {
      e = S(r, "P", { class: !0 });
      var l = v(e);
      ((i = we(l, t)), l.forEach(d), this.h());
    },
    h() {
      f(e, "class", "credits__lyrics-snippet-line svelte-15ugb9h");
    },
    m(r, l) {
      (P(r, e, l), b(e, i));
    },
    p(r, l) {
      l & 32 && t !== (t = r[25] + "") && ye(i, t);
    },
    d(r) {
      r && d(e);
    },
  };
}
function zn(s) {
  let e =
      (s[4] ? s[1].t("ASE.Web.Music.View.Full.Lyrics") : s[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "",
    t,
    i,
    r,
    l;
  return (
    (r = new yr({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((t = ke(e)), (i = Z()), B(r.$$.fragment));
      },
      l(n) {
        ((t = we(n, e)), (i = J(n)), W(r.$$.fragment, n));
      },
      m(n, a) {
        (P(n, t, a), P(n, i, a), O(r, n, a), (l = !0));
      },
      p(n, a) {
        (!l || a & 18) &&
          e !==
            (e =
              (n[4]
                ? n[1].t("ASE.Web.Music.View.Full.Lyrics")
                : n[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "") &&
          ye(t, e);
      },
      i(n) {
        l || (_(r.$$.fragment, n), (l = !0));
      },
      o(n) {
        (h(r.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (d(t), d(i)), z(r, n));
      },
    }
  );
}
function er(s) {
  let e, t, i, r, l;
  return (
    (t = new Hs({ props: { maskSvg: qs, inverted: s[8], maskWidth: 22, maskHeight: 22 } })),
    {
      c() {
        ((e = I("button")), B(t.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "BUTTON", { class: !0 });
        var a = v(e);
        (W(t.$$.fragment, a), a.forEach(d), this.h());
      },
      h() {
        f(e, "class", "lyrics-contextual-button svelte-15ugb9h");
      },
      m(n, a) {
        (P(n, e, a), O(t, e, null), (i = !0), r || ((l = Fe(e, "click", s[18])), (r = !0)));
      },
      p(n, a) {
        const o = {};
        (a & 256 && (o.inverted = n[8]), t.$set(o));
      },
      i(n) {
        i || (_(t.$$.fragment, n), (i = !0));
      },
      o(n) {
        (h(t.$$.fragment, n), (i = !1));
      },
      d(n) {
        (n && d(e), z(t), (r = !1), l());
      },
    }
  );
}
function Wn(s) {
  let e,
    t,
    i = s[3] && er(s);
  return {
    c() {
      ((e = I("div")), i && i.c(), this.h());
    },
    l(r) {
      e = S(r, "DIV", { slot: !0, class: !0 });
      var l = v(e);
      (i && i.l(l), l.forEach(d), this.h());
    },
    h() {
      (f(e, "slot", "button-container"), f(e, "class", "button-container svelte-15ugb9h"));
    },
    m(r, l) {
      (P(r, e, l), i && i.m(e, null), (t = !0));
    },
    p(r, l) {
      r[3]
        ? i
          ? (i.p(r, l), l & 8 && _(i, 1))
          : ((i = er(r)), i.c(), _(i, 1), i.m(e, null))
        : i &&
          (ue(),
          h(i, 1, 1, () => {
            i = null;
          }),
          fe());
    },
    i(r) {
      t || (_(i), (t = !0));
    },
    o(r) {
      (h(i), (t = !1));
    },
    d(r) {
      (r && d(e), i && i.d());
    },
  };
}
function jn(s) {
  let e, t, i, r, l;
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
        Ye(t, "catalog-id", (i = s[0].songId)),
        Ye(t, "show-translation", s[8]),
        Ye(t, "show-pronunciation", !1),
        Ye(t, "enable-translations", !0),
        Ye(t, "class", "svelte-15ugb9h"),
        f(e, "slot", "content"));
    },
    m(n, a) {
      (P(n, e, a), b(e, t), r || ((l = Fe(t, "lyricsReady", s[13])), (r = !0)));
    },
    p(n, a) {
      (a & 1 && i !== (i = n[0].songId) && Ye(t, "catalog-id", i), a & 256 && Ye(t, "show-translation", n[8]));
    },
    d(n) {
      (n && d(e), (r = !1), l());
    },
  };
}
function Un(s) {
  let e, t;
  return (
    (e = new Ns({
      props: {
        title: s[7],
        subtitle: s[6],
        translateFn: s[1].t,
        $$slots: { content: [jn], "button-container": [Wn] },
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        s = i;
        const l = {};
        (r & 128 && (l.title = s[7]),
          r & 64 && (l.subtitle = s[6]),
          r & 2 && (l.translateFn = s[1].t),
          r & 268435721 && (l.$$scope = { dirty: r, ctx: s }),
          e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Kn(s) {
  let e,
    t,
    i,
    r,
    l,
    n,
    a,
    o = Oe(s[5]),
    c = [];
  for (let m = 0; m < o.length; m += 1) c[m] = xi(Xi(s, o, m));
  ((i = new Ps({ props: { buttonStyle: "textButton", $$slots: { default: [zn] }, $$scope: { ctx: s } } })),
    i.$on("buttonClick", s[11]));
  let u = { modalTriggerElement: Gn, $$slots: { default: [Un] }, $$scope: { ctx: s } };
  return (
    (n = new Ls({ props: u })),
    s[19](n),
    n.$on("close", s[12]),
    {
      c() {
        e = I("div");
        for (let m = 0; m < c.length; m += 1) c[m].c();
        ((t = Z()), B(i.$$.fragment), (r = Z()), (l = I("div")), B(n.$$.fragment), this.h());
      },
      l(m) {
        e = S(m, "DIV", { class: !0, "data-testid": !0 });
        var k = v(e);
        for (let g = 0; g < c.length; g += 1) c[g].l(k);
        ((t = J(k)), W(i.$$.fragment, k), k.forEach(d), (r = J(m)), (l = S(m, "DIV", { class: !0 })));
        var E = v(l);
        (W(n.$$.fragment, E), E.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "credits__lyrics-snippet svelte-15ugb9h"),
          f(e, "data-testid", "credits__lyrics-snippet"),
          f(l, "class", "credits__lyrics-modal svelte-15ugb9h"));
      },
      m(m, k) {
        P(m, e, k);
        for (let E = 0; E < c.length; E += 1) c[E] && c[E].m(e, null);
        (b(e, t), O(i, e, null), P(m, r, k), P(m, l, k), O(n, l, null), (a = !0));
      },
      p(m, [k]) {
        if (k & 32) {
          o = Oe(m[5]);
          let T;
          for (T = 0; T < o.length; T += 1) {
            const w = Xi(m, o, T);
            c[T] ? c[T].p(w, k) : ((c[T] = xi(w)), c[T].c(), c[T].m(e, t));
          }
          for (; T < c.length; T += 1) c[T].d(1);
          c.length = o.length;
        }
        const E = {};
        (k & 268435474 && (E.$$scope = { dirty: k, ctx: m }), i.$set(E));
        const g = {};
        (k & 268435919 && (g.$$scope = { dirty: k, ctx: m }), n.$set(g));
      },
      i(m) {
        a || (_(i.$$.fragment, m), _(n.$$.fragment, m), (a = !0));
      },
      o(m) {
        (h(i.$$.fragment, m), h(n.$$.fragment, m), (a = !1));
      },
      d(m) {
        (m && (d(e), d(r), d(l)), Ft(c, m), z(i), s[19](null), z(n));
      },
    }
  );
}
let Gn = null;
function Zn(s, e, t) {
  let i, r, l, n, a, o, c, u;
  Ce(s, ci, (x) => t(8, (o = x)));
  var m, k;
  let { section: E } = e;
  const g = Ge();
  Ce(s, g, (x) => t(1, (u = x)));
  const { state: T } = _t();
  Ce(s, T, (x) => t(17, (c = x)));
  const w = Tt(),
    A = tt();
  let y,
    p = null;
  const L = () => {
      if (a) (y.showModal(), R(), H && (p = Date.now()));
      else {
        const x = Ms({ type: Fs.Open, activePath: Vs.subscribe });
        w.perform(x);
      }
    },
    te = () => {
      if (p) {
        const x = Date.now() - p;
        (Rs(w, H, A.storefront, o, x), (p = null));
      }
    },
    R = () => {
      (w.recordCustomMetricsEvent({
        actionType: "navigate",
        targetType: "button",
        targetId: "lyrics",
        eventType: "click",
      }),
        w.recordCustomMetricsEvent({ eventType: "page", pageDisplayType: "cardView", pageType: "Lyrics" }));
    };
  let K = !1,
    H = null;
  function Q(x) {
    (t(3, (K = x.detail.hasTranslations)),
      (H = { lyricsId: x.detail.lyricsId, language: x.detail.language, catalogId: x.detail.catalogId }));
  }
  const ee = () => $s(ci, (o = !o), o);
  function he(x) {
    Wt[x ? "unshift" : "push"](() => {
      ((y = x), t(2, y));
    });
  }
  return (
    (s.$$set = (x) => {
      "section" in x && t(14, (E = x.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 16384 && t(0, (i = E.items[0])),
        s.$$.dirty & 1 && t(7, (r = i.name)),
        s.$$.dirty & 3 &&
          t(
            6,
            (l = u.t("ASE.Web.Music.ContentA.Middot.ContentB.Middot.ContentC", {
              contentA: i.albumName,
              contentB: i.artistName,
              contentC: i.releaseDate,
            })),
          ),
        s.$$.dirty & 32769 &&
          t(
            5,
            (n =
              t(15, (m = i.lyricsExcerpt)) === null || m === void 0
                ? void 0
                : m.split(`
`)),
          ),
        s.$$.dirty & 196608 &&
          t(4, (a = vr(t(16, (k = c?.user)) === null || k === void 0 ? void 0 : k.subscriberType))));
    }),
    [i, u, y, K, a, n, l, r, o, g, T, L, te, Q, E, m, k, c, ee, he]
  );
}
class Jn extends Ve {
  constructor(e) {
    (super(), $e(this, e, Zn, Kn, He, { section: 14 }));
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r & 2 && (l.itemComponent = i[1]), r & 1 && (l.section = i[0]), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
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
      l(i) {
        W(e.$$.fragment, i);
      },
      m(i, r) {
        (O(e, i, r), (t = !0));
      },
      p(i, r) {
        const l = {};
        (r & 1 && (l.section = i[0]), e.$set(l));
      },
      i(i) {
        t || (_(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        (h(e.$$.fragment, i), (t = !1));
      },
      d(i) {
        z(e, i);
      },
    }
  );
}
function Xn(s) {
  let e,
    t,
    i = (s[2] ? s[3].t("ASE.Web.Music.MediaComponents.Lyrics.Header") : s[0]?.title) + "",
    r,
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
        ((e = I("section")), (t = I("h2")), (r = ke(i)), (l = Z()), (n = I("div")), o.c(), this.h());
      },
      l(E) {
        e = S(E, "SECTION", { class: !0, "data-testid": !0 });
        var g = v(e);
        t = S(g, "H2", { class: !0, "data-testid": !0 });
        var T = v(t);
        ((r = we(T, i)), T.forEach(d), (l = J(g)), (n = S(g, "DIV", { class: !0 })));
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
        (P(E, e, g), b(e, t), b(t, r), b(e, l), b(e, n), m[a].m(n, null), (c = !0));
      },
      p(E, [g]) {
        (!c || g & 13) &&
          i !== (i = (E[2] ? E[3].t("ASE.Web.Music.MediaComponents.Lyrics.Header") : E[0]?.title) + "") &&
          ye(r, i);
        let T = a;
        ((a = k(E)),
          a === T
            ? m[a].p(E, g)
            : (ue(),
              h(m[T], 1, 1, () => {
                m[T] = null;
              }),
              fe(),
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
  let i,
    r,
    l,
    { section: n } = e;
  const a = Ge();
  return (
    Ce(s, a, (o) => t(3, (l = o))),
    (s.$$set = (o) => {
      "section" in o && t(0, (n = o.section));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(2, (i = n.id === xn));
    }),
    t(1, (r = On)),
    [n, r, i, l, a]
  );
}
class to extends Ve {
  constructor(e) {
    (super(), $e(this, e, eo, Xn, He, { section: 0 }));
  }
}
function tr(s, e, t) {
  const i = s.slice();
  return ((i[2] = e[t]), i);
}
function ir(s) {
  let e,
    t,
    i = Oe(s[0].items),
    r = [];
  for (let n = 0; n < i.length; n += 1) r[n] = rr(tr(s, i, n));
  const l = (n) =>
    h(r[n], 1, 1, () => {
      r[n] = null;
    });
  return {
    c() {
      e = I("ul");
      for (let n = 0; n < r.length; n += 1) r[n].c();
      this.h();
    },
    l(n) {
      e = S(n, "UL", { class: !0, "data-testid": !0 });
      var a = v(e);
      for (let o = 0; o < r.length; o += 1) r[o].l(a);
      (a.forEach(d), this.h());
    },
    h() {
      (f(e, "class", "calendar-events-list svelte-57psqt"), f(e, "data-testid", "events-list"));
    },
    m(n, a) {
      P(n, e, a);
      for (let o = 0; o < r.length; o += 1) r[o] && r[o].m(e, null);
      t = !0;
    },
    p(n, a) {
      if (a & 1) {
        i = Oe(n[0].items);
        let o;
        for (o = 0; o < i.length; o += 1) {
          const c = tr(n, i, o);
          r[o] ? (r[o].p(c, a), _(r[o], 1)) : ((r[o] = rr(c)), r[o].c(), _(r[o], 1), r[o].m(e, null));
        }
        for (ue(), o = i.length; o < r.length; o += 1) l(o);
        fe();
      }
    },
    i(n) {
      if (!t) {
        for (let a = 0; a < i.length; a += 1) _(r[a]);
        t = !0;
      }
    },
    o(n) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1) h(r[a]);
      t = !1;
    },
    d(n) {
      (n && d(e), Ft(r, n));
    },
  };
}
function rr(s) {
  let e, t, i, r;
  return (
    (t = new Os({ props: { item: s[2], badgeTheme: "light" } })),
    {
      c() {
        ((e = I("li")), B(t.$$.fragment), (i = Z()), this.h());
      },
      l(l) {
        e = S(l, "LI", { class: !0, "data-testid": !0 });
        var n = v(e);
        (W(t.$$.fragment, n), (i = J(n)), n.forEach(d), this.h());
      },
      h() {
        (f(e, "class", "calendar-events-list-item svelte-57psqt"), f(e, "data-testid", "events-list-item"));
      },
      m(l, n) {
        (P(l, e, n), O(t, e, null), b(e, i), (r = !0));
      },
      p(l, n) {
        const a = {};
        (n & 1 && (a.item = l[2]), t.$set(a));
      },
      i(l) {
        r || (_(t.$$.fragment, l), (r = !0));
      },
      o(l) {
        (h(t.$$.fragment, l), (r = !1));
      },
      d(l) {
        (l && d(e), z(t));
      },
    }
  );
}
function io(s) {
  let e,
    t,
    i = s[1].length && ir(s);
  return {
    c() {
      (i && i.c(), (e = Re()));
    },
    l(r) {
      (i && i.l(r), (e = Re()));
    },
    m(r, l) {
      (i && i.m(r, l), P(r, e, l), (t = !0));
    },
    p(r, [l]) {
      r[1].length
        ? i
          ? (i.p(r, l), l & 2 && _(i, 1))
          : ((i = ir(r)), i.c(), _(i, 1), i.m(e.parentNode, e))
        : i &&
          (ue(),
          h(i, 1, 1, () => {
            i = null;
          }),
          fe());
    },
    i(r) {
      t || (_(i), (t = !0));
    },
    o(r) {
      (h(i), (t = !1));
    },
    d(r) {
      (r && d(e), i && i.d(r));
    },
  };
}
function ro(s, e, t) {
  let i,
    { section: r } = e;
  return (
    (s.$$set = (l) => {
      "section" in l && t(0, (r = l.section));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(1, (i = r.items));
    }),
    [r, i]
  );
}
class so extends Ve {
  constructor(e) {
    (super(), $e(this, e, ro, io, He, { section: 0 }));
  }
}
function lo(s) {
  let e = s[3].warn("unsupported list section:", s[1], s[0]) + "",
    t;
  return {
    c() {
      t = ke(e);
    },
    l(i) {
      t = we(i, e);
    },
    m(i, r) {
      P(i, t, r);
    },
    p(i, r) {
      r & 3 && e !== (e = i[3].warn("unsupported list section:", i[1], i[0]) + "") && ye(t, e);
    },
    i: ne,
    o: ne,
    d(i) {
      i && d(t);
    },
  };
}
function no(s) {
  let e, t, i;
  var r = s[2];
  function l(n, a) {
    return { props: { section: n[0] } };
  }
  return (
    r && (e = ui(r, l(s))),
    {
      c() {
        (e && B(e.$$.fragment), (t = Re()));
      },
      l(n) {
        (e && W(e.$$.fragment, n), (t = Re()));
      },
      m(n, a) {
        (e && O(e, n, a), P(n, t, a), (i = !0));
      },
      p(n, a) {
        if (a & 4 && r !== (r = n[2])) {
          if (e) {
            ue();
            const o = e;
            (h(o.$$.fragment, 1, 0, () => {
              z(o, 1);
            }),
              fe());
          }
          r ? ((e = ui(r, l(n))), B(e.$$.fragment), _(e.$$.fragment, 1), O(e, t.parentNode, t)) : (e = null);
        } else if (r) {
          const o = {};
          (a & 1 && (o.section = n[0]), e.$set(o));
        }
      },
      i(n) {
        i || (e && _(e.$$.fragment, n), (i = !0));
      },
      o(n) {
        (e && h(e.$$.fragment, n), (i = !1));
      },
      d(n) {
        (n && d(t), e && z(e, n));
      },
    }
  );
}
function oo(s) {
  let e, t, i, r;
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
        (t.c(), (i = Re()));
      },
      l(o) {
        (t.l(o), (i = Re()));
      },
      m(o, c) {
        (n[e].m(o, c), P(o, i, c), (r = !0));
      },
      p(o, [c]) {
        let u = e;
        ((e = a(o)),
          e === u
            ? n[e].p(o, c)
            : (ue(),
              h(n[u], 1, 1, () => {
                n[u] = null;
              }),
              fe(),
              (t = n[e]),
              t ? t.p(o, c) : ((t = n[e] = l[e](o)), t.c()),
              _(t, 1),
              t.m(i.parentNode, i)));
      },
      i(o) {
        r || (_(t), (r = !0));
      },
      o(o) {
        (h(t), (r = !1));
      },
      d(o) {
        (o && d(i), n[e].d(o));
      },
    }
  );
}
function ao(s, e, t) {
  let i, r;
  const l = Pt("<ListSection>");
  let { section: n } = e;
  const a = {
    libraryArtists: wl,
    librarySongs: Nl,
    trackLockup: Vn,
    songDetailItemLockup: to,
    calendarEventLockup: so,
  };
  return (
    (s.$$set = (o) => {
      "section" in o && t(0, (n = o.section));
    }),
    (s.$$.update = () => {
      (s.$$.dirty & 1 && t(1, (i = n.itemKind)), s.$$.dirty & 2 && t(2, (r = a[i])));
    }),
    [n, i, r, l]
  );
}
class ho extends Ve {
  constructor(e) {
    (super(), $e(this, e, ao, oo, He, { section: 0 }));
  }
}
export { ho as default };
