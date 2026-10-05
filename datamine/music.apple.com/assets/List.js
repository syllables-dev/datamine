import {
  S as Ve,
  i as $e,
  n as je,
  I as ze,
  e as I,
  s as J,
  a as S,
  b as w,
  g as m,
  d as Y,
  h as d,
  t as $,
  j as Be,
  k as P,
  l as k,
  o as Fe,
  bt as Hi,
  p as et,
  u as ce,
  bv as si,
  bw as ji,
  w as ue,
  bH as Ye,
  r as _,
  v as p,
  y as dt,
  z as Et,
  bx as mt,
  bs as yt,
  bu as li,
  Y as Kt,
  H as le,
  bz as ni,
  bA as oi,
  bB as ai,
  bC as ci,
  bI as At,
  bJ as We,
  bK as qe,
  bL as Ge,
  bM as Xe,
  bN as Ct,
  bO as xe,
  c as j,
  f as z,
  m as B,
  x as O,
  bp as Bi,
  bo as lr,
  bP as Oi,
  bQ as ct,
  W as ut,
  bR as at,
  E as pe,
  F as be,
  G as ve,
  bS as Dt,
  a2 as It,
  bT as zi,
  bU as Wi,
  P as Ce,
  bV as Ui,
  bW as Tt,
  V as Ze,
  bE as Pt,
  bX as tt,
  bY as _t,
  bZ as Ki,
  by as St,
  b_ as wt,
  J as He,
  b$ as qi,
  c0 as qt,
  c1 as Gi,
  c2 as Zi,
  c3 as Ji,
  c4 as ui,
  D as fi,
  c5 as Lt,
  c6 as di,
  c7 as Mt,
  c8 as Gt,
  c9 as Zt,
  ca as mi,
  cb as _i,
  cc as Jt,
  cd as hi,
  ce as Yi,
  cf as Qi,
  cg as Wt,
  bF as nr,
  ch as Xi,
  ci as gi,
  cj as pi,
  ck as xi,
  cl as es,
  cm as rt,
  cn as Je,
  a7 as bi,
  co as ts,
  cp as rs,
  cq as ft,
  cr as is,
  cs as ss,
  ct as ls,
  cu as vi,
  cv as ns,
  cw as os,
  cx as as,
  aE as cs,
  aY as us,
  cy as fs,
  cz as ki,
  cA as ds,
  cB as kt,
  cC as ms,
  cD as _s,
  cE as or,
  cF as hs,
  cG as gs,
  cH as Ut,
  K as Ft,
  cI as ps,
  cJ as bs,
  cK as vs,
  cL as ks,
  cM as wi,
  cN as ws,
  cO as ys,
  cP as Is,
  b4 as Ot,
  cQ as Ss,
  cR as Es,
  cS as As,
  cT as Cs,
  cU as Ds,
  bq as yi,
  cV as Ts,
  cW as ar,
  a6 as Ps,
  X as Ls,
  cX as cr,
  cY as Ms,
  cZ as Fs,
  c_ as Vs,
  c$ as $s,
  d0 as Rs,
  d1 as Ns,
  d2 as Qe,
  d3 as Hs,
  d4 as js,
  d5 as Bs,
  d6 as Os,
  d7 as ur,
} from "./main.js";
import { s as zs } from "./splitIntoChunks.js";
function Ws(i, e) {
  const t = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const s = e[r],
        l = Array.isArray(s) ? s[0] : s;
      Array.isArray(s) && s.length > 1 ? t.push(l(i, s[1])) : t.push(l(i));
    }
  return {
    update(r) {
      if (((r && r.length) || 0) !== t.length) throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let s = 0; s < r.length; s++) {
          const l = t[s];
          if (l && l.update) {
            const n = r[s];
            Array.isArray(n) && n.length > 1 ? l.update(n[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        s && s.destroy && s.destroy();
      }
    },
  };
}
function fr(i, e, t) {
  const r = i.slice();
  ((r[53] = e[t]), (r[57] = t));
  const s = r[8] + r[57];
  r[54] = s;
  const l = r[54] * r[2];
  return ((r[55] = l), r);
}
const Us = (i) => ({
    item: i[0] & 2048,
    itemIdx: i[0] & 2304,
    visibleItems: i[0] & 2048,
    isSelected: i[0] & 2049,
    handleClick: i[0] & 2048,
  }),
  dr = (i) => {
    var e;
    return {
      item: i[58],
      itemIdx: i[54],
      visibleItems: i[11],
      isSelected: i[0] === ((e = i[58]) == null ? void 0 : e.id),
      handleClick: i[15](i[57]),
    };
  },
  Ks = (i) => ({ itemIdx: i[0] & 2304 }),
  mr = (i) => ({ itemIdx: i[54] });
function qs(i) {
  return { c: le, l: le, m: le, p: le, i: le, o: le, d: le };
}
function Gs(i) {
  let e;
  const t = i[38].itemComponent,
    r = ni(t, i, i[37], dr);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, l) {
      (r && r.m(s, l), (e = !0));
    },
    p(s, l) {
      r && r.p && (!e || (l[0] & 2305) | (l[1] & 64)) && oi(r, t, s, s[37], e ? ci(t, s[37], l, Us) : ai(s[37]), dr);
    },
    i(s) {
      e || (_(r, s), (e = !0));
    },
    o(s) {
      (p(r, s), (e = !1));
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function Zs(i) {
  let e;
  const t = i[38].placeholder,
    r = ni(t, i, i[37], mr);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, l) {
      (r && r.m(s, l), (e = !0));
    },
    p(s, l) {
      r && r.p && (!e || (l[0] & 2304) | (l[1] & 64)) && oi(r, t, s, s[37], e ? ci(t, s[37], l, Ks) : ai(s[37]), mr);
    },
    i(s) {
      e || (_(r, s), (e = !0));
    },
    o(s) {
      (p(r, s), (e = !1));
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function _r(i, e) {
  let t,
    r,
    s,
    l,
    n = `${e[55]}px`,
    o = `${e[2]}px`,
    a,
    c = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Zs,
      then: Gs,
      catch: qs,
      value: 58,
      blocks: [, , ,],
    };
  return (
    yt((r = e[53]), c),
    {
      key: i,
      first: null,
      c() {
        ((t = I("div")), c.block.c(), (s = J()), this.h());
      },
      l(u) {
        t = S(u, "DIV", { class: !0, "data-testid": !0, role: !0 });
        var f = w(t);
        (c.block.l(f), (s = Y(f)), f.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "virtual-row svelte-zsv6m4"),
          d(t, "data-testid", "virtual-row"),
          d(t, "role", (l = e[7] ? "rowgroup" : null)),
          Be(t, "contain", "strict"),
          Be(t, "top", n),
          Be(t, "min-height", o),
          (this.first = t));
      },
      m(u, f) {
        (P(u, t, f), c.block.m(t, (c.anchor = null)), (c.mount = () => t), (c.anchor = s), k(t, s), (a = !0));
      },
      p(u, f) {
        ((e = u),
          (c.ctx = e),
          (f[0] & 2048 && r !== (r = e[53]) && yt(r, c)) || li(c, e, f),
          (!a || (f[0] & 128 && l !== (l = e[7] ? "rowgroup" : null))) && d(t, "role", l),
          f[0] & 2308 && n !== (n = `${e[55]}px`) && Be(t, "top", n),
          f[0] & 4 && o !== (o = `${e[2]}px`) && Be(t, "min-height", o));
      },
      i(u) {
        a || (_(c.block), (a = !0));
      },
      o(u) {
        for (let f = 0; f < 3; f += 1) {
          const h = c.blocks[f];
          p(h);
        }
        a = !1;
      },
      d(u) {
        (u && m(t), c.block.d(), (c.token = null), (c = null));
      },
    }
  );
}
function Js(i) {
  let e,
    t,
    r,
    s = [],
    l = new Map(),
    n,
    o,
    a = `${i[9]}px`,
    c = `${i[2]}px`,
    u,
    f,
    h,
    E,
    g,
    C,
    b = ze(i[11]);
  const A = (y) => y[53];
  for (let y = 0; y < b.length; y += 1) {
    let v = fr(i, b, y),
      V = A(v);
    l.set(V, (s[y] = _r(V, v)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")), (r = I("div")));
      for (let y = 0; y < s.length; y += 1) s[y].c();
      ((u = J()), (f = I("div")), this.h());
    },
    l(y) {
      e = S(y, "DIV", { class: !0, "data-testid": !0, tabindex: !0 });
      var v = w(e);
      t = S(v, "DIV", { class: !0, id: !0 });
      var V = w(t);
      r = S(V, "DIV", { class: !0, "data-testid": !0, role: !0, "aria-rowcount": !0 });
      var te = w(r);
      for (let N = 0; N < s.length; N += 1) s[N].l(te);
      (te.forEach(m),
        (u = Y(V)),
        (f = S(V, "DIV", { class: !0 })),
        w(f).forEach(m),
        V.forEach(m),
        v.forEach(m),
        this.h());
    },
    h() {
      (d(r, "class", "virtual-rows svelte-zsv6m4"),
        d(r, "data-testid", "virtual-rows"),
        d(r, "role", (n = i[7] ? "grid" : null)),
        d(r, "aria-rowcount", (o = i[7] ? i[1] : null)),
        $(r, "row-zebra-striping", i[5]),
        Be(r, "min-height", a),
        Be(r, "--rowHeight", c),
        d(f, "class", "svelte-zsv6m4"),
        $(f, "bottom-spacer-hidden", i[3]),
        Be(f, "height", "10px"),
        d(t, "class", "scrollable-container svelte-zsv6m4"),
        d(t, "id", "scrollable-page-override"),
        Be(t, "contain", "layout"),
        d(e, "class", "container svelte-zsv6m4"),
        d(e, "data-testid", "container"),
        d(e, "tabindex", "0"),
        $(e, "scrollable-container-constrained-width", i[4]));
    },
    m(y, v) {
      (P(y, e, v), k(e, t), k(t, r));
      for (let V = 0; V < s.length; V += 1) s[V] && s[V].m(r, null);
      (k(t, u),
        k(t, f),
        i[39](t),
        (E = !0),
        g ||
          ((C = [
            Fe(t, "scroll", Hi(i[14], 10)),
            et(i[12].call(null, t)),
            Fe(t, "virtualScrollResize", i[13]),
            Fe(e, "keydown", i[17]),
            Fe(e, "keyup", i[16]),
            et((h = Ws.call(null, e, i[6]))),
          ]),
          (g = !0)));
    },
    p(y, v) {
      ((v[0] & 35205) | (v[1] & 64) &&
        ((b = ze(y[11])), ce(), (s = si(s, v, A, 1, y, b, l, r, ji, _r, null, fr)), ue()),
        (!E || (v[0] & 128 && n !== (n = y[7] ? "grid" : null))) && d(r, "role", n),
        (!E || (v[0] & 130 && o !== (o = y[7] ? y[1] : null))) && d(r, "aria-rowcount", o),
        (!E || v[0] & 32) && $(r, "row-zebra-striping", y[5]),
        v[0] & 512 && a !== (a = `${y[9]}px`) && Be(r, "min-height", a),
        v[0] & 4 && c !== (c = `${y[2]}px`) && Be(r, "--rowHeight", c),
        (!E || v[0] & 8) && $(f, "bottom-spacer-hidden", y[3]),
        h && Ye(h.update) && v[0] & 64 && h.update.call(null, y[6]),
        (!E || v[0] & 16) && $(e, "scrollable-container-constrained-width", y[4]));
    },
    i(y) {
      if (!E) {
        for (let v = 0; v < b.length; v += 1) _(s[v]);
        E = !0;
      }
    },
    o(y) {
      for (let v = 0; v < s.length; v += 1) p(s[v]);
      E = !1;
    },
    d(y) {
      y && m(e);
      for (let v = 0; v < s.length; v += 1) s[v].d();
      (i[39](null), (g = !1), dt(C));
    },
  };
}
const zt =
    typeof window < "u" && window.ResizeObserver
      ? new window.ResizeObserver((i) => {
          var e;
          for (const t of i) {
            const r = (e = t == null ? void 0 : t.borderBoxSize[0].blockSize) != null ? e : t.contentRect.height,
              s = new CustomEvent("virtualScrollResize", { detail: { height: r } });
            t.target.dispatchEvent(s);
          }
        })
      : null,
  hr = 500;
function Ys(i, e, t) {
  let r,
    s,
    l,
    n,
    o,
    a,
    c,
    u,
    f,
    h,
    E,
    { $$slots: g = {}, $$scope: C } = e;
  const b = Et();
  let { items: A } = e,
    { itemCount: y } = e,
    { itemHeight: v } = e,
    { amountToFetch: V } = e,
    { bottomSpacerHidden: te = !1 } = e,
    { bufferHeight: N } = e,
    { fetchIntentFn: Z } = e,
    { selectedItemId: W = null } = e,
    { log: q } = e,
    { jet: ie } = e,
    { overrideKeydown: ne = null } = e,
    { restrainContainerWidth: X = !1 } = e,
    { rowZebraStriping: fe = !1 } = e,
    { use: ke = [] } = e,
    { allowCountUpdates: x = !1 } = e,
    { useManualPagination: G = !0 } = e,
    { pageMetadata: de = null } = e,
    { setAriaAttributes: Pe = !1 } = e,
    H = 0,
    se,
    U = 0,
    Q = 0,
    L;
  const De = (D, re, ae) =>
      D.slice(re, ae).map((ye) => {
        var Le;
        return (Le = A[ye]) != null ? Le : me(ye);
      }),
    ge = (D, re, ae) => {
      re > 0 &&
        ae > 0 &&
        (D.slice(re, a).forEach((ye) => {
          A[ye] || me(ye);
        }),
        D.slice(c, ae).forEach((ye) => {
          A[ye] || me(ye);
        }));
    },
    Te = (D, re, ae) => (D === "top" ? Math.floor : Math.ceil)(re / ae),
    me = async (D) => {
      const re = Math.floor(D / V),
        ae = D % V;
      if (!L[re]) {
        const ye = re * V;
        L[re] = (async () => {
          await (L == null ? void 0 : L[re - 1]);
          const { items: Le } = await Ie(ye);
          return Le;
        })();
      }
      try {
        const Le = (await L[re])[ae];
        return (Le && t(18, (A[D] = Le), A), Le);
      } catch (ye) {
        return (delete L[re], null);
      }
    },
    Ie = async (D) => {
      if (G)
        try {
          const re = Z({ offset: D, limit: V }),
            { items: ae, next: ye, total: Le } = await ie.dispatch(re);
          return (b("fetchComplete", { items: ae, offset: D }), { items: ae, next: ye, total: Le });
        } catch (re) {
          return (q.error("Loading Paginated Items Failed", re), {});
        }
      else if (r) {
        const re = Z({ path: r, limit: V });
        try {
          const ae = await ie.dispatch(re);
          r = ae.next;
          const { items: ye } = ae;
          return (b("fetchComplete", { items: ye, offset: D }), { items: ye, next: r });
        } catch (ae) {
          return (q.error("Loading Paginated Items Failed", ae), {});
        }
      } else
        x && (q.warn("No more pages to fetch, updating scroll list total count."), b("updateItemsCount", A.length));
    },
    oe = (D) => {
      if (zt)
        return (
          zt.observe(D, { box: "border-box" }),
          {
            destroy: () => {
              zt.unobserve(D);
            },
          }
        );
    },
    _e = (D) => {
      const { height: re } = D.detail;
      t(28, (U = re));
    },
    K = () => {
      t(29, (Q = se == null ? void 0 : se.scrollTop));
    };
  function we(D, re) {
    const { item: ae } = D.detail,
      { id: ye } = ae;
    (t(0, (W = ye)), (H = re), b("select", { id: W, scrollTop: se.scrollTop }));
  }
  const T = (D) => (re) => we(re, D),
    M = { shift: !1, tab: !1 },
    Se = (D, re) => {
      D === "Shift" ? (M.shift = re) : D === "Tab" && (M.tab = re);
    },
    Re = () => M.shift && M.tab;
  function Ae(D) {
    (D.key === "Tab" || D.key === "Shift") && (D.preventDefault(), Se(D.key, !1));
  }
  function Me(D) {
    var Le;
    if (ne) {
      ne(D);
      return;
    }
    (D.key === "ArrowUp" || D.key === "ArrowDown") && D.preventDefault();
    const re = D.key === "Tab" && D.shiftKey && H === 0,
      ae = D.key === "Tab" && !D.shiftKey && H === A.length - 1,
      ye = re || ae;
    switch ((D.key === "Tab" && !ye && D.preventDefault(), Se(D.key, !0), D.key)) {
      case "ArrowUp":
        H = Math.max(H - 1, 0);
        break;
      case "ArrowDown":
        H = Math.min(H + 1, A.length - 1);
        break;
      case "Tab":
        Re() ? (H = Math.max(H - 1, 0)) : (H = Math.min(H + 1, A.length - 1));
        break;
    }
    (Le = A[H]) != null && Le.id && (t(0, (W = A[H].id)), b("select", { id: W, scrollTop: se.scrollTop }));
  }
  mt(() => {
    const D = V;
    if (!(y <= D))
      if (G && y <= hr) {
        const re = Math.min(y, hr);
        for (let ae = D; ae < re; ae++) me(ae);
      } else me(D);
  });
  function Oe(D) {
    Kt[D ? "unshift" : "push"](() => {
      ((se = D), t(10, se));
    });
  }
  return (
    (i.$$set = (D) => {
      ("items" in D && t(18, (A = D.items)),
        "itemCount" in D && t(1, (y = D.itemCount)),
        "itemHeight" in D && t(2, (v = D.itemHeight)),
        "amountToFetch" in D && t(19, (V = D.amountToFetch)),
        "bottomSpacerHidden" in D && t(3, (te = D.bottomSpacerHidden)),
        "bufferHeight" in D && t(20, (N = D.bufferHeight)),
        "fetchIntentFn" in D && t(21, (Z = D.fetchIntentFn)),
        "selectedItemId" in D && t(0, (W = D.selectedItemId)),
        "log" in D && t(22, (q = D.log)),
        "jet" in D && t(23, (ie = D.jet)),
        "overrideKeydown" in D && t(24, (ne = D.overrideKeydown)),
        "restrainContainerWidth" in D && t(4, (X = D.restrainContainerWidth)),
        "rowZebraStriping" in D && t(5, (fe = D.rowZebraStriping)),
        "use" in D && t(6, (ke = D.use)),
        "allowCountUpdates" in D && t(25, (x = D.allowCountUpdates)),
        "useManualPagination" in D && t(26, (G = D.useManualPagination)),
        "pageMetadata" in D && t(27, (de = D.pageMetadata)),
        "setAriaAttributes" in D && t(7, (Pe = D.setAriaAttributes)),
        "$$scope" in D && t(37, (C = D.$$scope)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 134217728 && (r = de == null ? void 0 : de.next),
        i.$$.dirty[0] & 786434 &&
          (L = zs(A, V).map((D, re) => {
            const ye = (re + 1) * V ? V : y % V;
            if (!(D.length < ye)) return new Promise((Le) => Le(D));
          })),
        i.$$.dirty[0] & 2 && t(33, (s = [...Array(y).keys()])),
        (i.$$.dirty[0] & 4) | (i.$$.dirty[1] & 4) && t(9, (l = v * s.length)),
        i.$$.dirty[0] & 537919488 && t(36, (n = Math.max(0, Q - N))),
        i.$$.dirty[0] & 806355456 && t(35, (o = Math.min(Q + U + N, l))),
        (i.$$.dirty[0] & 4) | (i.$$.dirty[1] & 32) && t(8, (a = Te("top", n, v))),
        (i.$$.dirty[0] & 4) | (i.$$.dirty[1] & 16) && t(30, (c = Te("bottom", o, v))),
        (i.$$.dirty[0] & 1073742080) | (i.$$.dirty[1] & 4) && t(11, (u = De(s, a, c))),
        i.$$.dirty[0] & 269484032 && t(34, (f = U + 2 * N)),
        (i.$$.dirty[0] & 4) | (i.$$.dirty[1] & 40) && t(32, (h = Te("top", Math.max(0, n - f), v))),
        (i.$$.dirty[0] & 516) | (i.$$.dirty[1] & 24) && t(31, (E = Te("bottom", Math.min(o + f, l), v))),
        i.$$.dirty[1] & 7 && ge(s, h, E));
    }),
    [
      W,
      y,
      v,
      te,
      X,
      fe,
      ke,
      Pe,
      a,
      l,
      se,
      u,
      oe,
      _e,
      K,
      T,
      Ae,
      Me,
      A,
      V,
      N,
      Z,
      q,
      ie,
      ne,
      x,
      G,
      de,
      U,
      Q,
      c,
      E,
      h,
      s,
      f,
      o,
      n,
      C,
      g,
      Oe,
    ]
  );
}
class Ii extends Ve {
  constructor(e) {
    (super(),
      $e(
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
function gr(i, e) {
  e && i.focus({ preventScroll: !0 });
}
function Qs(i, e) {
  return (
    gr(i, e),
    {
      update(t) {
        gr(i, t);
      },
    }
  );
}
function Xs(i) {
  let e,
    t,
    r,
    s,
    l = [{ xmlns: "http://www.w3.org/2000/svg" }, { width: "28" }, { height: "28" }, { viewBox: "0 0 20 22" }, i[0]],
    n = {};
  for (let o = 0; o < l.length; o += 1) n = We(n, l[o]);
  return {
    c() {
      ((e = qe("svg")), (t = qe("clipPath")), (r = qe("path")), (s = qe("path")), this.h());
    },
    l(o) {
      e = Ge(o, "svg", { xmlns: !0, width: !0, height: !0, viewBox: !0 });
      var a = w(e);
      t = Ge(a, "clipPath", { id: !0 });
      var c = w(t);
      ((r = Ge(c, "path", { d: !0 })),
        w(r).forEach(m),
        c.forEach(m),
        (s = Ge(a, "path", { d: !0, "clip-path": !0 })),
        w(s).forEach(m),
        a.forEach(m),
        this.h());
    },
    h() {
      (d(
        r,
        "d",
        "m3 16.2.7.8 8.6-8.4c-.2-.1-.3-.3-.5-.4-.2-.2-.3-.3-.4-.5zm8.9-13.6 5.6 5.6c-1.1 1-2.3 1.5-3.6 1.2l-2.7 2.5.1 2.5v6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-6.2l-4.7 4.5c-.3.3-.8.3-1 0L1.5 20c-.2.2-.6.2-.8-.1l-.3-.3c-.2-.3-.2-.6-.1-.8L1.4 17c-.2-.2-.3-.7 0-1l9.2-9.8c-.2-1.3.2-2.6 1.3-3.6m1.3-1.3c1.7-1.7 3.9-1.7 5.6 0s1.6 3.9 0 5.6z",
      ),
        d(t, "id", "a"),
        d(s, "d", "M-5-5h30v31.6H-5z"),
        d(s, "clip-path", "url(#a)"),
        Xe(e, n));
    },
    m(o, a) {
      (P(o, e, a), k(e, t), k(t, r), k(e, s));
    },
    p(o, [a]) {
      Xe(
        e,
        (n = Ct(l, [
          { xmlns: "http://www.w3.org/2000/svg" },
          { width: "28" },
          { height: "28" },
          { viewBox: "0 0 20 22" },
          a & 1 && o[0],
        ])),
      );
    },
    i: le,
    o: le,
    d(o) {
      o && m(e);
    },
  };
}
function xs(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = We(We({}, e), xe(r))));
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
function tl(i) {
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
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p: le,
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function rl(i) {
  let e, t, r, s, l, n;
  return {
    c() {
      ((e = I("picture")), (t = I("source")), (s = J()), (l = I("img")), this.h());
    },
    l(o) {
      e = S(o, "PICTURE", {});
      var a = w(e);
      ((t = S(a, "SOURCE", { srcset: !0, type: !0 })),
        (s = Y(a)),
        (l = S(a, "IMG", { "data-testid": !0, class: !0, role: !0, src: !0, alt: !0 })),
        a.forEach(m),
        this.h());
    },
    h() {
      (Bi(t, (r = i[2])) || d(t, "srcset", r),
        d(t, "type", "image/webp"),
        d(l, "data-testid", "library-artist-image-icon"),
        d(l, "class", "artist-image svelte-1ehefgf"),
        d(l, "role", "presentation"),
        lr(l.src, (n = i[1])) || d(l, "src", n),
        d(l, "alt", ""));
    },
    m(o, a) {
      (P(o, e, a), k(e, t), k(e, s), k(e, l));
    },
    p(o, a) {
      (a & 4 && r !== (r = o[2]) && d(t, "srcset", r), a & 2 && !lr(l.src, (n = o[1])) && d(l, "src", n));
    },
    i: le,
    o: le,
    d(o) {
      o && m(e);
    },
  };
}
function il(i) {
  let e, t, r, s;
  const l = [rl, tl],
    n = [];
  function o(a, c) {
    return a[2] && a[1] ? 0 : 1;
  }
  return (
    (t = o(i)),
    (r = n[t] = l[t](i)),
    {
      c() {
        ((e = I("span")), r.c(), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { "data-testid": !0, class: !0 });
        var c = w(e);
        (r.l(c), c.forEach(m), this.h());
      },
      h() {
        (d(e, "data-testid", "library-artist-icon"),
          d(e, "class", "artist-icon svelte-1ehefgf"),
          $(e, "is-selected", i[0]));
      },
      m(a, c) {
        (P(a, e, c), n[t].m(e, null), (s = !0));
      },
      p(a, [c]) {
        let u = t;
        ((t = o(a)),
          t === u
            ? n[t].p(a, c)
            : (ce(),
              p(n[u], 1, 1, () => {
                n[u] = null;
              }),
              ue(),
              (r = n[t]),
              r ? r.p(a, c) : ((r = n[t] = l[t](a)), r.c()),
              _(r, 1),
              r.m(e, null)),
          (!s || c & 1) && $(e, "is-selected", a[0]));
      },
      i(a) {
        s || (_(r), (s = !0));
      },
      o(a) {
        (p(r), (s = !1));
      },
      d(a) {
        (a && m(e), n[t].d());
      },
    }
  );
}
const pr = "72";
function sl(i, e, t) {
  let r, s, l;
  var n, o;
  let { artwork: a } = e,
    { isSelected: c = !1 } = e;
  return (
    (i.$$set = (u) => {
      ("artwork" in u && t(3, (a = u.artwork)), "isSelected" in u && t(0, (c = u.isSelected)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 56 &&
        t(
          6,
          (r =
            t(5, (o = t(4, (n = a == null ? void 0 : a.dictionary)) === null || n === void 0 ? void 0 : n.url)) ===
              null || o === void 0
              ? void 0
              : o.replace("{w}", pr).replace("{h}", pr)),
        ),
        i.$$.dirty & 64 && t(2, (s = r == null ? void 0 : r.replace("{f}", "webp"))),
        i.$$.dirty & 64 && t(1, (l = r == null ? void 0 : r.replace("{f}", "jpg"))));
    }),
    [c, l, s, a, n, o, r]
  );
}
class Si extends Ve {
  constructor(e) {
    (super(), $e(this, e, sl, il, je, { artwork: 3, isSelected: 0 }));
  }
}
function br(i) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = pe(i[4])), this.h());
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var s = w(e);
      ((t = be(s, i[4])), s.forEach(m), this.h());
    },
    h() {
      d(e, "class", "artist-name svelte-yegxkw");
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      s & 16 && ve(t, r[4]);
    },
    d(r) {
      r && m(e);
    },
  };
}
function ll(i) {
  let e, t, r, s, l, n, o, a, c;
  t = new Si({ props: { artwork: i[5], isSelected: i[0] } });
  let u = i[4] && br(i);
  return (
    (l = new Oi({ props: { inFavorites: i[2] } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), u && u.c(), (s = J()), j(l.$$.fragment), this.h());
      },
      l(f) {
        e = S(f, "DIV", { "data-testid": !0, "aria-selected": !0, role: !0, tabindex: !0, class: !0 });
        var h = w(e);
        (z(t.$$.fragment, h), (r = Y(h)), u && u.l(h), (s = Y(h)), z(l.$$.fragment, h), h.forEach(m), this.h());
      },
      h() {
        (d(e, "data-testid", "library-artists-component"),
          d(e, "aria-selected", i[0]),
          d(e, "role", "option"),
          d(e, "tabindex", "0"),
          d(e, "class", "svelte-yegxkw"),
          $(e, "is-selected", i[0]));
      },
      m(f, h) {
        (P(f, e, h),
          B(t, e, null),
          k(e, r),
          u && u.m(e, null),
          k(e, s),
          B(l, e, null),
          (o = !0),
          a || ((c = [et((n = Qs.call(null, e, i[0]))), Fe(e, "click", i[10])]), (a = !0)));
      },
      p(f, [h]) {
        const E = {};
        (h & 32 && (E.artwork = f[5]),
          h & 1 && (E.isSelected = f[0]),
          t.$set(E),
          f[4] ? (u ? u.p(f, h) : ((u = br(f)), u.c(), u.m(e, s))) : u && (u.d(1), (u = null)));
        const g = {};
        (h & 4 && (g.inFavorites = f[2]),
          l.$set(g),
          (!o || h & 1) && d(e, "aria-selected", f[0]),
          n && Ye(n.update) && h & 1 && n.update.call(null, f[0]),
          (!o || h & 1) && $(e, "is-selected", f[0]));
      },
      i(f) {
        o || (_(t.$$.fragment, f), _(l.$$.fragment, f), (o = !0));
      },
      o(f) {
        (p(t.$$.fragment, f), p(l.$$.fragment, f), (o = !1));
      },
      d(f) {
        (f && m(e), O(t), u && u.d(), O(l), (a = !1), dt(c));
      },
    }
  );
}
function nl(i, e, t) {
  let r,
    s,
    l,
    n,
    o,
    a,
    c = le,
    u = () => (c(), (c = Dt(n, (A) => t(9, (a = A)))), n);
  i.$$.on_destroy.push(() => c());
  var f;
  let { isSelected: h = !1 } = e,
    { item: E } = e;
  const g = ct(),
    C = Et();
  ut(() => {
    g.unsubscribeFromUpdates(l);
  });
  const b = () => C("itemClicked", { item: E });
  return (
    (i.$$set = (A) => {
      ("isSelected" in A && t(0, (h = A.isSelected)), "item" in A && t(1, (E = A.item)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 2 && t(5, (r = (E == null ? void 0 : E.artwork) || null)),
        i.$$.dirty & 2 && t(4, (s = E == null ? void 0 : E.name)),
        i.$$.dirty & 2 && t(8, (l = at(E))),
        i.$$.dirty & 256 && u(t(3, (n = g.subscribeToUpdates(l)))),
        i.$$.dirty & 896 &&
          t(2, (o = a && (t(7, (f = g.get(l, It.Artist))) === null || f === void 0 ? void 0 : f.inFavorites))));
    }),
    [h, E, o, n, s, r, C, f, l, a, b]
  );
}
class ol extends Ve {
  constructor(e) {
    (super(), $e(this, e, nl, ll, je, { isSelected: 0, item: 1 }));
  }
}
function al(i) {
  let e,
    t,
    r = [{ xmlns: "http://www.w3.org/2000/svg" }, { viewBox: "0 0 13 29" }, i[0]],
    s = {};
  for (let l = 0; l < r.length; l += 1) s = We(s, r[l]);
  return {
    c() {
      ((e = qe("svg")), (t = qe("path")), this.h());
    },
    l(l) {
      e = Ge(l, "svg", { xmlns: !0, viewBox: !0 });
      var n = w(e);
      ((t = Ge(n, "path", { d: !0 })), w(t).forEach(m), n.forEach(m), this.h());
    },
    h() {
      (d(t, "d", "m12.716 28.349-.779.651L0 14.5 11.937 0l.779.651L1.303 14.5z"), Xe(e, s));
    },
    m(l, n) {
      (P(l, e, n), k(e, t));
    },
    p(l, [n]) {
      Xe(e, (s = Ct(r, [{ xmlns: "http://www.w3.org/2000/svg" }, { viewBox: "0 0 13 29" }, n & 1 && l[0]])));
    },
    i: le,
    o: le,
    d(l) {
      l && m(e);
    },
  };
}
function cl(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = We(We({}, e), xe(r))));
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
const vr = zi(0);
function fl(i) {
  let e, t;
  return (
    (e = new ol({ props: { item: i[28], isSelected: i[29] } })),
    e.$on("itemClicked", function () {
      Ye(i[30]) && i[30].apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        i = r;
        const l = {};
        (s[0] & 268435456 && (l.item = i[28]), s[0] & 536870912 && (l.isSelected = i[29]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function dl(i) {
  let e, t, r;
  return (
    (t = new Si({ props: { artwork: null } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0, slot: !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "artist-placeholder svelte-1rh5vsj"), d(e, "slot", "placeholder"));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p: le,
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function kr(i) {
  let e,
    t,
    r,
    s = {
      ctx: i,
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
    yt((t = i[10](i[1])), s),
    {
      c() {
        ((e = He()), s.block.c());
      },
      l(l) {
        ((e = He()), s.block.l(l));
      },
      m(l, n) {
        (P(l, e, n), s.block.m(l, (s.anchor = n)), (s.mount = () => e.parentNode), (s.anchor = e), (r = !0));
      },
      p(l, n) {
        ((i = l), (s.ctx = i), (n[0] & 2 && t !== (t = i[10](i[1])) && yt(t, s)) || li(s, i, n));
      },
      i(l) {
        r || (_(s.block), (r = !0));
      },
      o(l) {
        for (let n = 0; n < 3; n += 1) {
          const o = s.blocks[n];
          p(o);
        }
        r = !1;
      },
      d(l) {
        (l && m(e), s.block.d(l), (s.token = null), (s = null));
      },
    }
  );
}
function ml(i) {
  return { c: le, l: le, m: le, p: le, i: le, o: le, d: le };
}
function _l(i) {
  let e,
    t,
    r,
    s,
    l,
    n,
    o = i[5].t("ASE.Web.Music.SideBar.Artists") + "",
    a,
    c,
    u,
    f,
    h,
    E;
  return (
    (s = new ul({ props: { class: "chevron-icon" } })),
    (u = new Gi({ props: { section: i[0] } })),
    {
      c() {
        ((e = I("article")),
          (t = I("div")),
          (r = I("button")),
          j(s.$$.fragment),
          (l = J()),
          (n = I("span")),
          (a = pe(o)),
          (c = J()),
          j(u.$$.fragment),
          this.h());
      },
      l(g) {
        e = S(g, "ARTICLE", { "aria-label": !0, class: !0, "data-testid": !0 });
        var C = w(e);
        t = S(C, "DIV", { class: !0, "data-testid": !0 });
        var b = w(t);
        r = S(b, "BUTTON", { class: !0, "data-testid": !0 });
        var A = w(r);
        (z(s.$$.fragment, A), (l = Y(A)), (n = S(A, "SPAN", {})));
        var y = w(n);
        ((a = be(y, o)),
          y.forEach(m),
          A.forEach(m),
          b.forEach(m),
          (c = Y(C)),
          z(u.$$.fragment, C),
          C.forEach(m),
          this.h());
      },
      h() {
        (d(r, "class", "back-to-artists svelte-1rh5vsj"),
          d(r, "data-testid", "back-to-artists-button"),
          d(t, "class", "back-to-artists-container svelte-1rh5vsj"),
          d(t, "data-testid", "back-to-artists-container"),
          d(e, "aria-label", i[3]),
          d(e, "class", "artist-detail-container svelte-1rh5vsj"),
          d(e, "data-testid", "artist-detail-container"));
      },
      m(g, C) {
        (P(g, e, C),
          k(e, t),
          k(t, r),
          B(s, r, null),
          k(r, l),
          k(r, n),
          k(n, a),
          k(e, c),
          B(u, e, null),
          (f = !0),
          h || ((E = Fe(r, "click", i[11])), (h = !0)));
      },
      p(g, C) {
        (!f || C[0] & 32) && o !== (o = g[5].t("ASE.Web.Music.SideBar.Artists") + "") && ve(a, o);
        const b = {};
        (C[0] & 2 && (b.section = g[0]), u.$set(b), (!f || C[0] & 8) && d(e, "aria-label", g[3]));
      },
      i(g) {
        f || (_(s.$$.fragment, g), _(u.$$.fragment, g), (f = !0));
      },
      o(g) {
        (p(s.$$.fragment, g), p(u.$$.fragment, g), (f = !1));
      },
      d(g) {
        (g && m(e), O(s), O(u), (h = !1), E());
      },
    }
  );
}
function hl(i) {
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
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p: le,
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function gl(i) {
  let e, t, r, s, l;
  ((r = new Ii({
    props: {
      items: i[2],
      itemCount: i[4],
      amountToFetch: vl,
      itemHeight: pl,
      bufferHeight: bl,
      fetchIntentFn: Wi,
      restrainContainerWidth: !0,
      bottomSpacerHidden: !0,
      rowZebraStriping: !1,
      log: i[8],
      selectedItemId: i[1],
      jet: i[6],
      $$slots: {
        placeholder: [dl],
        itemComponent: [
          fl,
          ({ item: o, isSelected: a, handleClick: c }) => ({ 28: o, 29: a, 30: c }),
          ({ item: o, isSelected: a, handleClick: c }) => [
            (o ? 268435456 : 0) | (a ? 536870912 : 0) | (c ? 1073741824 : 0),
          ],
        ],
      },
      $$scope: { ctx: i },
    },
  })),
    r.$on("select", i[12]),
    r.$on("fetchComplete", i[13]));
  let n = i[1] && kr(i);
  return {
    c() {
      ((e = I("div")), (t = I("div")), j(r.$$.fragment), (s = J()), n && n.c(), this.h());
    },
    l(o) {
      e = S(o, "DIV", { class: !0, "data-testid": !0 });
      var a = w(e);
      t = S(a, "DIV", { class: !0, "data-testid": !0 });
      var c = w(t);
      (z(r.$$.fragment, c), c.forEach(m), (s = Y(a)), n && n.l(a), a.forEach(m), this.h());
    },
    h() {
      (d(t, "class", "artist-list-container svelte-1rh5vsj"),
        d(t, "data-testid", "artist-list-container"),
        d(e, "class", "artists-container svelte-1rh5vsj"),
        d(e, "data-testid", "library-artists-component"));
    },
    m(o, a) {
      (P(o, e, a), k(e, t), B(r, t, null), k(e, s), n && n.m(e, null), (l = !0));
    },
    p(o, a) {
      const c = {};
      (a[0] & 4 && (c.items = o[2]),
        a[0] & 16 && (c.itemCount = o[4]),
        a[0] & 2 && (c.selectedItemId = o[1]),
        (a[0] & 1879048192) | (a[1] & 1) && (c.$$scope = { dirty: a, ctx: o }),
        r.$set(c),
        o[1]
          ? n
            ? (n.p(o, a), a[0] & 2 && _(n, 1))
            : ((n = kr(o)), n.c(), _(n, 1), n.m(e, null))
          : n &&
            (ce(),
            p(n, 1, 1, () => {
              n = null;
            }),
            ue()));
    },
    i(o) {
      l || (_(r.$$.fragment, o), _(n), (l = !0));
    },
    o(o) {
      (p(r.$$.fragment, o), p(n), (l = !1));
    },
    d(o) {
      (o && m(e), O(r), n && n.d());
    },
  };
}
const pl = 54,
  bl = 500,
  vl = 100;
function kl(i, e, t) {
  let r, s, l, n, o, a, c, u, f;
  (Ce(i, vr, (x) => t(23, (c = x))), Ce(i, Ui, (x) => t(24, (u = x))));
  var h, E, g, C;
  let { section: b } = e;
  const A = Tt(),
    y = Ze();
  Ce(i, y, (x) => t(5, (f = x)));
  const v = Pt("<Artists>"),
    V = ct(),
    te = tt(),
    { state: N } = _t();
  Ce(i, N, (x) => t(22, (a = x)));
  let Z = {},
    W,
    q;
  (Ki(() => {
    q && W && (q.scrollTop = W);
  }),
    mt(() => {
      ((q = document.getElementById("scrollable-page-override")),
        St.set(!0),
        ne(r, 0),
        !(u === "xsmall" || u === "small") &&
          !l &&
          ((W = 0),
          A.perform(
            wt({ kind: "selectedArtistIdChanged", metadata: { id: r[0].id, historyOperation: "replaceState" } }),
          )));
    }),
    ut(() => {
      St.set(!1);
    }));
  async function ie(x) {
    if (!x) return { items: [] };
    const G = qi({ id: x });
    return A.dispatch(G);
  }
  function ne(x, G) {
    (x.forEach((de, Pe) => {
      const { id: H } = de;
      typeof Z[H] > "u" && t(18, (Z[H] = { index: Pe + G, artist: de }), Z);
    }),
      t(18, (Z = Object.assign({}, Z))));
  }
  function X() {
    A.perform(wt({ kind: "selectedArtistIdChanged", metadata: { id: null, historyOperation: "pushState" } }));
  }
  function fe(x) {
    const { id: G, scrollTop: de } = x.detail;
    (vr.set(de),
      (W = c),
      A.perform(wt({ kind: "selectedArtistIdChanged", metadata: { id: G, historyOperation: "pushState" } })));
  }
  async function ke(x) {
    var G;
    const { items: de, offset: Pe } = x.detail;
    (ne(de, Pe),
      await qt([{ items: de }], (G = a.user) === null || G === void 0 ? void 0 : G.subscriberType, A, v, te, V));
  }
  return (
    (i.$$set = (x) => {
      "section" in x && t(0, (b = x.section));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 1 && t(2, (r = b == null ? void 0 : b.items)),
        i.$$.dirty[0] & 16385 &&
          t(4, (s = t(14, (h = b == null ? void 0 : b.metadata)) === null || h === void 0 ? void 0 : h.total)),
        i.$$.dirty[0] & 32769 &&
          t(1, (l = (t(15, (E = b.metadata)) === null || E === void 0 ? void 0 : E.selectedId) || null)),
        i.$$.dirty[0] & 458754 &&
          t(
            19,
            (n =
              t(17, (C = t(16, (g = Z[l])) === null || g === void 0 ? void 0 : g.artist)) !== null && C !== void 0
                ? C
                : null),
          ),
        i.$$.dirty[0] & 524288 && t(3, (o = (n == null ? void 0 : n.name) || null)));
    }),
    [b, l, r, o, s, f, A, y, v, N, ie, X, fe, ke, h, E, g, C, Z, n]
  );
}
class wl extends Ve {
  constructor(e) {
    (super(), $e(this, e, kl, gl, je, { section: 0 }, null, [-1, -1]));
  }
}
function wr(i, e, t) {
  const r = i.slice();
  return ((r[3] = e[t]), r);
}
function yr(i, e) {
  let t,
    r,
    s = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "",
    l,
    n;
  return {
    key: i,
    first: null,
    c() {
      ((t = I("div")), (r = I("span")), (l = pe(s)), (n = J()), this.h());
    },
    l(o) {
      t = S(o, "DIV", { role: !0, class: !0 });
      var a = w(t);
      r = S(a, "SPAN", { class: !0, "data-testid": !0 });
      var c = w(r);
      ((l = be(c, s)), c.forEach(m), (n = Y(a)), a.forEach(m), this.h());
    },
    h() {
      (d(r, "class", "library-track__" + e[3].id + "-text svelte-1w5wkc6"),
        d(r, "data-testid", `library-track__${e[3].id}-text`),
        d(t, "role", "columnheader"),
        d(t, "class", "library-track__" + e[3].id + " svelte-1w5wkc6"),
        (this.first = t));
    },
    m(o, a) {
      (P(o, t, a), k(t, r), k(r, l), k(t, n));
    },
    p(o, a) {
      ((e = o), a & 1 && s !== (s = (e[3].labelKey ? e[0].t(e[3].labelKey) : "Favorited") + "") && ve(l, s));
    },
    d(o) {
      o && m(t);
    },
  };
}
function yl(i) {
  let e,
    t,
    r = [],
    s = new Map(),
    l = ze(i[2]);
  const n = (o) => o[3].id;
  for (let o = 0; o < l.length; o += 1) {
    let a = wr(i, l, o),
      c = n(a);
    s.set(c, (r[o] = yr(c, a)));
  }
  return {
    c() {
      ((e = I("div")), (t = I("div")));
      for (let o = 0; o < r.length; o += 1) r[o].c();
      this.h();
    },
    l(o) {
      e = S(o, "DIV", { class: !0 });
      var a = w(e);
      t = S(a, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var c = w(t);
      for (let u = 0; u < r.length; u += 1) r[u].l(c);
      (c.forEach(m), a.forEach(m), this.h());
    },
    h() {
      (d(t, "class", "library-track library-track--header svelte-1w5wkc6"),
        d(t, "role", "row"),
        d(t, "data-testid", "library-track--header"),
        d(e, "class", "library-track-header-container svelte-1w5wkc6"));
    },
    m(o, a) {
      (P(o, e, a), k(e, t));
      for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
    },
    p(o, [a]) {
      a & 5 && ((l = ze(o[2])), (r = si(r, a, n, 1, o, l, s, t, Ji, yr, null, wr)));
    },
    i: le,
    o: le,
    d(o) {
      o && m(e);
      for (let a = 0; a < r.length; a += 1) r[a].d();
    },
  };
}
function Il(i, e, t) {
  let r;
  const s = Ze();
  return (
    Ce(i, s, (n) => t(0, (r = n))),
    [
      r,
      s,
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
    (super(), $e(this, e, Il, yl, je, {}));
  }
}
function El(i) {
  let e, t;
  return {
    c() {
      ((e = I("span")), (t = pe(i[14])), this.h());
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var s = w(e);
      ((t = be(s, i[14])), s.forEach(m), this.h());
    },
    h() {
      d(e, "class", "library-track-name__text svelte-1mdcewe");
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      s[0] & 16384 && ve(t, r[14]);
    },
    i: le,
    o: le,
    d(r) {
      r && m(e);
    },
  };
}
function Al(i) {
  let e, t, r, s, l, n, o;
  return (
    (n = new Yi({ props: { explicitAriaText: i[17].t("ASE.Web.Music.Explicit") } })),
    {
      c() {
        ((e = I("span")), (t = I("span")), (r = pe(i[14])), (s = J()), (l = I("span")), j(n.$$.fragment), this.h());
      },
      l(a) {
        e = S(a, "SPAN", { class: !0 });
        var c = w(e);
        t = S(c, "SPAN", { class: !0 });
        var u = w(t);
        ((r = be(u, i[14])), u.forEach(m), (s = Y(c)), (l = S(c, "SPAN", { class: !0 })));
        var f = w(l);
        (z(n.$$.fragment, f), f.forEach(m), c.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "library-track-name__text svelte-1mdcewe"),
          d(l, "class", "explicit-badge svelte-1mdcewe"),
          d(e, "class", "library-track-name__explicit-wrapper svelte-1mdcewe"));
      },
      m(a, c) {
        (P(a, e, c), k(e, t), k(t, r), k(e, s), k(e, l), B(n, l, null), (o = !0));
      },
      p(a, c) {
        (!o || c[0] & 16384) && ve(r, a[14]);
        const u = {};
        (c[0] & 131072 && (u.explicitAriaText = a[17].t("ASE.Web.Music.Explicit")), n.$set(u));
      },
      i(a) {
        o || (_(n.$$.fragment, a), (o = !0));
      },
      o(a) {
        (p(n.$$.fragment, a), (o = !1));
      },
      d(a) {
        (a && m(e), O(n));
      },
    }
  );
}
function Ir(i) {
  let e, t, r;
  return (
    (t = new _i({ props: { item: i[4], isExplicit: i[2] } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0, "data-testid": !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "library-track-name__play-button-wrapper artwork-overlay svelte-1mdcewe"),
          d(e, "data-testid", "track-play-button"));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[0] & 16 && (n.item = s[4]), l[0] & 4 && (n.isExplicit = s[2]), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Sr(i) {
  let e, t;
  return (
    (e = new Jt({
      props: {
        attachedTo: i[0].contentDescriptor,
        isPlayable: i[0].playAction !== null && !i[1],
        itemProperties: { title: i[0].name, subtitleLinks: [{ title: i[0].artistName }], artwork: i[0].artwork },
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
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[0] & 1 && (l.attachedTo = r[0].contentDescriptor),
          s[0] & 3 && (l.isPlayable = r[0].playAction !== null && !r[1]),
          s[0] & 1 &&
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
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Cl(i) {
  let e, t, r, s, l, n, o, a, c, u, f, h, E, g, C, b, A, y, v, V, te, N, Z, W, q, ie, ne, X, fe, ke, x;
  ((r = new ui({
    props: { isFavorited: i[6], platter: !1, enabled: !0, title: i[17].t("ASE.Web.Music.VO.FavoriteHelpText") },
  })),
    r.$on("toggle", i[23]));
  const G = [Al, El],
    de = [];
  function Pe(U, Q) {
    return U[2] ? 0 : 1;
  }
  ((o = Pe(i)),
    (a = de[o] = G[o](i)),
    (f = new fi({ props: { artwork: i[15], forceFullWidth: !1, profile: "track-list" } })));
  let H = i[5] && Ir(i),
    se = i[0].contentDescriptor && Sr(i);
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        j(r.$$.fragment),
        (s = J()),
        (l = I("div")),
        (n = I("div")),
        a.c(),
        (c = J()),
        (u = I("div")),
        (h = I("div")),
        j(f.$$.fragment),
        (E = J()),
        H && H.c(),
        (g = J()),
        (C = I("div")),
        se && se.c(),
        (b = J()),
        (A = I("div")),
        (y = I("div")),
        (v = pe(i[13])),
        (V = J()),
        (te = I("div")),
        (N = I("div")),
        (Z = pe(i[12])),
        (W = J()),
        (q = I("div")),
        (ie = I("div")),
        (ne = pe(i[11])),
        this.h());
    },
    l(U) {
      e = S(U, "DIV", { "data-testid": !0, class: !0, "data-current-mouse-target": !0 });
      var Q = w(e);
      t = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 });
      var L = w(t);
      (z(r.$$.fragment, L), L.forEach(m), (s = Y(Q)), (l = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var De = w(l);
      n = S(De, "DIV", { class: !0 });
      var ge = w(n);
      (a.l(ge), (c = Y(ge)), (u = S(ge, "DIV", { class: !0 })));
      var Te = w(u);
      h = S(Te, "DIV", { style: !0 });
      var me = w(h);
      (z(f.$$.fragment, me), (E = Y(Te)), H && H.l(Te), Te.forEach(m), (g = Y(ge)), (C = S(ge, "DIV", { class: !0 })));
      var Ie = w(C);
      (se && se.l(Ie),
        Ie.forEach(m),
        ge.forEach(m),
        De.forEach(m),
        (b = Y(Q)),
        (A = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var oe = w(A);
      y = S(oe, "DIV", { class: !0 });
      var _e = w(y);
      ((v = be(_e, i[13])),
        _e.forEach(m),
        oe.forEach(m),
        (V = Y(Q)),
        (te = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var K = w(te);
      N = S(K, "DIV", { class: !0 });
      var we = w(N);
      ((Z = be(we, i[12])),
        we.forEach(m),
        K.forEach(m),
        (W = Y(Q)),
        (q = S(Q, "DIV", { role: !0, class: !0, "data-testid": !0 })));
      var T = w(q);
      ie = S(T, "DIV", { class: !0 });
      var M = w(ie);
      ((ne = be(M, i[11])), M.forEach(m), T.forEach(m), Q.forEach(m), this.h());
    },
    h() {
      (d(t, "role", "cell"),
        d(t, "class", "library-track__badge svelte-1mdcewe"),
        d(t, "data-testid", "library-track__badge"),
        Be(h, "display", "contents"),
        Be(h, "--override-placeholder-bg-color", "var(--genericJoeColor)"),
        d(u, "class", "library-track-name__artwork svelte-1mdcewe"),
        d(C, "class", "action-menu svelte-1mdcewe"),
        d(n, "class", "library-track-name svelte-1mdcewe"),
        d(l, "role", "cell"),
        d(l, "class", "library-track__song svelte-1mdcewe"),
        d(l, "data-testid", "library-track__song"),
        d(y, "class", "svelte-1mdcewe"),
        d(A, "role", "cell"),
        d(A, "class", "library-track__artist svelte-1mdcewe"),
        d(A, "data-testid", "library-track__artist"),
        d(N, "class", "svelte-1mdcewe"),
        d(te, "role", "cell"),
        d(te, "class", "library-track__album svelte-1mdcewe"),
        d(te, "data-testid", "library-track__album"),
        d(ie, "class", "svelte-1mdcewe"),
        d(q, "role", "cell"),
        d(q, "class", "library-track__time svelte-1mdcewe"),
        d(q, "data-testid", "library-track__time"),
        d(e, "data-testid", "library-track"),
        d(e, "class", "library-track svelte-1mdcewe"),
        d(e, "data-current-mouse-target", (X = i[3].currentMouseTarget === i[0])),
        $(e, "selected", i[16]),
        $(e, "library-track--disabled", i[1]),
        $(e, "is-playing", i[9]),
        $(e, "is-paused", i[8]),
        $(e, "is-loading", i[10]));
    },
    m(U, Q) {
      (P(U, e, Q),
        k(e, t),
        B(r, t, null),
        k(e, s),
        k(e, l),
        k(l, n),
        de[o].m(n, null),
        k(n, c),
        k(n, u),
        k(u, h),
        B(f, h, null),
        k(u, E),
        H && H.m(u, null),
        k(n, g),
        k(n, C),
        se && se.m(C, null),
        k(e, b),
        k(e, A),
        k(A, y),
        k(y, v),
        k(e, V),
        k(e, te),
        k(te, N),
        k(N, Z),
        k(e, W),
        k(e, q),
        k(q, ie),
        k(ie, ne),
        (fe = !0),
        ke || ((x = [Fe(e, "mousedown", i[37]), Fe(e, "click", i[22]), Fe(e, "dblclick", i[21])]), (ke = !0)));
    },
    p(U, Q) {
      const L = {};
      (Q[0] & 64 && (L.isFavorited = U[6]),
        Q[0] & 131072 && (L.title = U[17].t("ASE.Web.Music.VO.FavoriteHelpText")),
        r.$set(L));
      let De = o;
      ((o = Pe(U)),
        o === De
          ? de[o].p(U, Q)
          : (ce(),
            p(de[De], 1, 1, () => {
              de[De] = null;
            }),
            ue(),
            (a = de[o]),
            a ? a.p(U, Q) : ((a = de[o] = G[o](U)), a.c()),
            _(a, 1),
            a.m(n, c)));
      const ge = {};
      (Q[0] & 32768 && (ge.artwork = U[15]),
        f.$set(ge),
        U[5]
          ? H
            ? (H.p(U, Q), Q[0] & 32 && _(H, 1))
            : ((H = Ir(U)), H.c(), _(H, 1), H.m(u, null))
          : H &&
            (ce(),
            p(H, 1, 1, () => {
              H = null;
            }),
            ue()),
        U[0].contentDescriptor
          ? se
            ? (se.p(U, Q), Q[0] & 1 && _(se, 1))
            : ((se = Sr(U)), se.c(), _(se, 1), se.m(C, null))
          : se &&
            (ce(),
            p(se, 1, 1, () => {
              se = null;
            }),
            ue()),
        (!fe || Q[0] & 8192) && ve(v, U[13]),
        (!fe || Q[0] & 4096) && ve(Z, U[12]),
        (!fe || Q[0] & 2048) && ve(ne, U[11]),
        (!fe || (Q[0] & 9 && X !== (X = U[3].currentMouseTarget === U[0]))) && d(e, "data-current-mouse-target", X),
        (!fe || Q[0] & 65536) && $(e, "selected", U[16]),
        (!fe || Q[0] & 2) && $(e, "library-track--disabled", U[1]),
        (!fe || Q[0] & 512) && $(e, "is-playing", U[9]),
        (!fe || Q[0] & 256) && $(e, "is-paused", U[8]),
        (!fe || Q[0] & 1024) && $(e, "is-loading", U[10]));
    },
    i(U) {
      fe || (_(r.$$.fragment, U), _(a), _(f.$$.fragment, U), _(H), _(se), (fe = !0));
    },
    o(U) {
      (p(r.$$.fragment, U), p(a), p(f.$$.fragment, U), p(H), p(se), (fe = !1));
    },
    d(U) {
      (U && m(e), O(r), de[o].d(), O(f), H && H.d(), se && se.d(), (ke = !1), dt(x));
    },
  };
}
function Dl(i, e, t) {
  let r,
    s,
    l,
    n,
    o,
    a,
    c,
    u,
    f,
    h,
    E,
    g,
    C,
    b,
    A,
    y,
    v,
    V,
    te,
    N,
    Z,
    W,
    q,
    ie = le,
    ne = () => (ie(), (ie = Dt(te, (K) => t(35, (q = K)))), te),
    X,
    fe,
    ke;
  i.$$.on_destroy.push(() => ie());
  var x;
  const G = Ze();
  Ce(i, G, (K) => t(17, (ke = K)));
  const de = tt(),
    Pe = Lt(),
    { queue: H, isRestricted: se } = di();
  Ce(i, H, (K) => t(36, (X = K)));
  const U = Mt();
  Ce(i, U, (K) => t(3, (fe = K)));
  const Q = ct();
  let { item: L } = e,
    { items: De = [] } = e,
    ge = !1,
    Te = [];
  mt(async () => {
    try {
      const K = await (se == null ? void 0 : se());
      t(26, (ge = K));
    } catch (K) {}
  });
  function me() {
    u && Pe(W.playAction);
  }
  function Ie(K) {
    U.handleClick(L, K);
  }
  const oe = (K) => {
    hi(E, C, g, !K.detail, Q, !1, !0, Pe);
  };
  ut(() => {
    Q.unsubscribeFromUpdates(E);
  });
  const _e = () => U.setCurrentMouseTarget(L);
  return (
    (i.$$set = (K) => {
      ("item" in K && t(0, (L = K.item)), "items" in K && t(24, (De = K.items)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 9 && t(16, (r = L.id && fe.selectedItems.some((K) => K.id === L.id))),
        i.$$.dirty[0] & 1 && t(15, (s = (L == null ? void 0 : L.artwork) || null)),
        i.$$.dirty[0] & 1 && t(14, (l = (L == null ? void 0 : L.name) || "")),
        i.$$.dirty[0] & 1 && t(13, (n = (L == null ? void 0 : L.artistName) || "")),
        i.$$.dirty[0] & 1 && t(12, (o = (L == null ? void 0 : L.albumName) || "")),
        i.$$.dirty[0] & 1 && t(34, (a = Math.trunc((L == null ? void 0 : L.durationInMillis) / 1e3) || null)),
        i.$$.dirty[1] & 8 && t(11, (c = Gt(a, de.language) || "")),
        i.$$.dirty[0] & 1 && t(5, (u = (L == null ? void 0 : L.playAction) || null)),
        i.$$.dirty[0] & 1 && t(2, (f = (L == null ? void 0 : L.contentRating) === "explicit")),
        i.$$.dirty[0] & 1 && t(33, (h = at(L))),
        i.$$.dirty[0] & 1 && t(28, (E = Zt(L))),
        i.$$.dirty[0] & 1 && t(29, (g = L == null ? void 0 : L.contentDescriptor)),
        i.$$.dirty[0] & 536870912 && t(30, (C = g == null ? void 0 : g.kind)),
        i.$$.dirty[1] & 36 && t(32, (b = h && X.nowPlayingItemId === h)),
        i.$$.dirty[1] & 34 && t(10, (A = b && X.derivedStates.isLoading)),
        i.$$.dirty[1] & 34 && t(9, (y = b && X.derivedStates.isPlaying)),
        i.$$.dirty[1] & 34 && t(8, (v = b && X.derivedStates.isPaused)),
        i.$$.dirty[0] & 67108869 && t(1, (V = (L == null ? void 0 : L.isDisabled) || (f && ge))),
        i.$$.dirty[0] & 268435456 && ne(t(7, (te = Q.subscribeToUpdates(E)))),
        (i.$$.dirty[0] & 1375731712) | (i.$$.dirty[1] & 16) &&
          t(6, (N = q && (t(25, (x = Q.get(E, C))) === null || x === void 0 ? void 0 : x.inFavorites))),
        i.$$.dirty[0] & 16777216 && Promise.all(De).then((K) => t(27, (Te = K))),
        i.$$.dirty[0] & 134217728 && t(31, (Z = Te.map((K) => K.contentDescriptor))),
        (i.$$.dirty[0] & 3) | (i.$$.dirty[1] & 1) &&
          t(
            4,
            (W = (() =>
              Object.assign(Object.assign({}, L), { playAction: !V && L.playAction && mi(L.playAction, Z) }))()),
          ));
    }),
    [
      L,
      V,
      f,
      fe,
      W,
      u,
      N,
      te,
      v,
      y,
      A,
      c,
      o,
      n,
      l,
      s,
      r,
      ke,
      G,
      H,
      U,
      me,
      Ie,
      oe,
      De,
      x,
      ge,
      Te,
      E,
      g,
      C,
      Z,
      b,
      h,
      a,
      q,
      X,
      _e,
    ]
  );
}
class Tl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Dl, Cl, je, { item: 0, items: 24 }, null, [-1, -1]));
  }
}
function Pl(i) {
  let e, t, r, s, l;
  return (
    (e = new Tl({ props: { item: i[16], items: i[17] } })),
    (s = new Xi({})),
    {
      c() {
        (j(e.$$.fragment), (t = J()), (r = I("div")), j(s.$$.fragment), this.h());
      },
      l(n) {
        (z(e.$$.fragment, n), (t = Y(n)), (r = S(n, "DIV", { class: !0, slot: !0 })));
        var o = w(r);
        (z(s.$$.fragment, o), o.forEach(m), this.h());
      },
      h() {
        (d(r, "class", "song-placeholder svelte-7p26k2"), d(r, "slot", "placeholder"));
      },
      m(n, o) {
        (B(e, n, o), P(n, t, o), P(n, r, o), B(s, r, null), (l = !0));
      },
      p(n, o) {
        const a = {};
        (o & 65536 && (a.item = n[16]), o & 131072 && (a.items = n[17]), e.$set(a));
      },
      i(n) {
        l || (_(e.$$.fragment, n), _(s.$$.fragment, n), (l = !0));
      },
      o(n) {
        (p(e.$$.fragment, n), p(s.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (m(t), m(r)), O(e, n), O(s));
      },
    }
  );
}
function Ll(i) {
  let e, t, r, s, l;
  return (
    (t = new Sl({})),
    (s = new Ii({
      props: {
        items: i[0],
        itemCount: i[2],
        amountToFetch: Ml,
        itemHeight: Fl,
        bufferHeight: Vl,
        fetchIntentFn: Qi,
        bottomSpacerHidden: !1,
        restrainContainerWidth: !1,
        rowZebraStriping: !0,
        log: i[3],
        jet: i[4],
        overrideKeydown: i[5].handleKeydown,
        use: [
          [
            Wt,
            {
              dragData: { items: i[1] },
              badgeCount: i[1].length,
              dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
            },
          ],
        ],
        $$slots: {
          itemComponent: [
            Pl,
            ({ item: n, visibleItems: o }) => ({ 16: n, 17: o }),
            ({ item: n, visibleItems: o }) => (n ? 65536 : 0) | (o ? 131072 : 0),
          ],
        },
        $$scope: { ctx: i },
      },
    })),
    s.$on("fetchComplete", i[7]),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), j(s.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "DIV", { class: !0, "data-testid": !0 });
        var o = w(e);
        (z(t.$$.fragment, o), (r = Y(o)), z(s.$$.fragment, o), o.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "songs-container svelte-7p26k2"), d(e, "data-testid", "library-songs-component"));
      },
      m(n, o) {
        (P(n, e, o), B(t, e, null), k(e, r), B(s, e, null), (l = !0));
      },
      p(n, [o]) {
        const a = {};
        (o & 1 && (a.items = n[0]),
          o & 4 && (a.itemCount = n[2]),
          o & 2 &&
            (a.use = [
              [
                Wt,
                {
                  dragData: { items: n[1] },
                  badgeCount: n[1].length,
                  dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
                },
              ],
            ]),
          o & 458752 && (a.$$scope = { dirty: o, ctx: n }),
          s.$set(a));
      },
      i(n) {
        l || (_(t.$$.fragment, n), _(s.$$.fragment, n), (l = !0));
      },
      o(n) {
        (p(t.$$.fragment, n), p(s.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && m(e), O(t), O(s));
      },
    }
  );
}
const Ml = 100,
  Fl = 44,
  Vl = 1e3;
function $l(i, e, t) {
  let r, s, l, n, o, a;
  var c;
  const u = Symbol(),
    f = Pt("<Songs>"),
    h = Tt(),
    E = Mt();
  Ce(i, E, (v) => t(11, (a = v)));
  const g = ct(),
    C = tt(),
    { state: b } = _t();
  Ce(i, b, (v) => t(12, (o = v)));
  let { section: A } = e;
  async function y(v) {
    var V;
    if (v.detail) {
      const { items: te } = v.detail;
      (E.addItems(u, te),
        await qt([{ items: te }], (V = o.user) === null || V === void 0 ? void 0 : V.subscriberType, h, f, C, g));
    }
  }
  return (
    mt(() => {
      (St.set(!0), nr.set(!0));
    }),
    ut(() => {
      (St.set(!1), E.resetItems(u), nr.set(!1));
    }),
    (i.$$set = (v) => {
      "section" in v && t(8, (A = v.section));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 256 && t(0, (r = A == null ? void 0 : A.items)),
        i.$$.dirty & 768 &&
          t(2, (s = t(9, (c = A == null ? void 0 : A.metadata)) === null || c === void 0 ? void 0 : c.total)),
        i.$$.dirty & 1 && E.addItems(u, r),
        i.$$.dirty & 2048 &&
          t(10, (l = a.selectedItems.includes(a.currentMouseTarget) ? a.selectedItems : [a.currentMouseTarget])),
        i.$$.dirty & 1024 && t(1, (n = l.map((v) => (v == null ? void 0 : v.contentDescriptor)))));
    }),
    [r, n, s, f, h, E, b, y, A, c, l, a]
  );
}
class Rl extends Ve {
  constructor(e) {
    (super(), $e(this, e, $l, Ll, je, { section: 8 }));
  }
}
const Nl = "‪",
  Er = "‬";
function Ar(i) {
  if (typeof document > "u" || !(document.dir === gi.RTL)) return i;
  const t = i.slice(-1);
  return /^[a-z0-9]+$/i.test(t) || t === Er ? i : i.replace(/.$/, `${Nl}${t}${Er}`);
}
function Cr(i) {
  let e, t;
  return (
    (e = new es({ props: { playAction: i[0], playButtonStyle: "non-platter", isStandAlone: !0, isFilled: !1 } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s & 1 && (l.playAction = r[0]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Dr(i) {
  let e,
    t,
    r,
    s = i[2] && i[2].length && Tr(i),
    l = i[1] && i[1].length && Pr(i);
  return {
    c() {
      ((e = I("div")), s && s.c(), (t = J()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0, "data-testid": !0 });
      var o = w(e);
      (s && s.l(o), (t = Y(o)), l && l.l(o), o.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list-row__by-line songs-list-row__by-line--work svelte-1wqzc4z"),
        d(e, "data-testid", "composer-header-second-row"));
    },
    m(n, o) {
      (P(n, e, o), s && s.m(e, null), k(e, t), l && l.m(e, null), (r = !0));
    },
    p(n, o) {
      (n[2] && n[2].length
        ? s
          ? (s.p(n, o), o & 4 && _(s, 1))
          : ((s = Tr(n)), s.c(), _(s, 1), s.m(e, t))
        : s &&
          (ce(),
          p(s, 1, 1, () => {
            s = null;
          }),
          ue()),
        n[1] && n[1].length
          ? l
            ? (l.p(n, o), o & 2 && _(l, 1))
            : ((l = Pr(n)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (ce(),
            p(l, 1, 1, () => {
              l = null;
            }),
            ue()));
    },
    i(n) {
      r || (_(s), _(l), (r = !0));
    },
    o(n) {
      (p(s), p(l), (r = !1));
    },
    d(n) {
      (n && m(e), s && s.d(), l && l.d());
    },
  };
}
function Tr(i) {
  let e,
    t = i[9].t("ASE.Web.Music.SongsList.ComposerBy") + "",
    r,
    s,
    l,
    n;
  return (
    (l = new rt({
      props: {
        items: i[2],
        translateFn: i[9].t,
        $$slots: { default: [jl, ({ item: o }) => ({ 18: o }), ({ item: o }) => (o ? 262144 : 0)] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        ((e = I("span")), (r = pe(t)), (s = J()), j(l.$$.fragment), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { class: !0 });
        var a = w(e);
        ((r = be(a, t)), (s = Y(a)), z(l.$$.fragment, a), a.forEach(m), this.h());
      },
      h() {
        d(e, "class", "svelte-1wqzc4z");
      },
      m(o, a) {
        (P(o, e, a), k(e, r), k(e, s), B(l, e, null), (n = !0));
      },
      p(o, a) {
        (!n || a & 512) && t !== (t = o[9].t("ASE.Web.Music.SongsList.ComposerBy") + "") && ve(r, t);
        const c = {};
        (a & 4 && (c.items = o[2]),
          a & 512 && (c.translateFn = o[9].t),
          a & 786432 && (c.$$scope = { dirty: a, ctx: o }),
          l.$set(c));
      },
      i(o) {
        n || (_(l.$$.fragment, o), (n = !0));
      },
      o(o) {
        (p(l.$$.fragment, o), (n = !1));
      },
      d(o) {
        (o && m(e), O(l));
      },
    }
  );
}
function Hl(i) {
  let e = i[18].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s & 262144 && e !== (e = r[18].title + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function jl(i) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: i[18].segue, $$slots: { default: [Hl] }, $$scope: { ctx: i } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(s) {
        e = S(s, "SPAN", {});
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l & 262144 && (n.action = s[18].segue), l & 786432 && (n.$$scope = { dirty: l, ctx: s }), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Pr(i) {
  let e, t, r;
  return (
    (t = new rt({
      props: {
        items: i[1],
        translateFn: i[9].t,
        $$slots: { default: [Ol, ({ item: s }) => ({ 17: s }), ({ item: s }) => (s ? 131072 : 0)] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "SPAN", { class: !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        d(e, "class", "svelte-1wqzc4z");
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l & 2 && (n.items = s[1]),
          l & 512 && (n.translateFn = s[9].t),
          l & 655360 && (n.$$scope = { dirty: l, ctx: s }),
          t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Bl(i) {
  let e = i[17].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s & 131072 && e !== (e = r[17].title + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function Ol(i) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: i[17].segue, $$slots: { default: [Bl] }, $$scope: { ctx: i } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(s) {
        e = S(s, "SPAN", {});
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l & 131072 && (n.action = s[17].segue), l & 655360 && (n.$$scope = { dirty: l, ctx: s }), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function zl(i) {
  let e,
    t,
    r,
    s,
    l,
    n = Ar(i[8]) + "",
    o,
    a,
    c,
    u,
    f,
    h,
    E,
    g,
    C,
    b,
    A,
    y,
    v,
    V,
    te,
    N = i[0] && Cr(i),
    Z = i[7] && Dr(i);
  return (
    (y = new Jt({
      props: {
        attachedTo: i[3],
        isPlayable: i[6],
        itemProperties: { subtitleLinks: [...i[2], ...i[1]], title: i[8] },
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
          (s = I("div")),
          (l = I("span")),
          (o = pe(n)),
          (a = J()),
          Z && Z.c(),
          (c = J()),
          (u = I("div")),
          (f = I("div")),
          (h = I("div")),
          (E = J()),
          (g = I("time")),
          (C = pe(i[5])),
          (b = J()),
          (A = I("div")),
          j(y.$$.fragment),
          this.h());
      },
      l(W) {
        e = S(W, "DIV", { class: !0, "data-testid": !0 });
        var q = w(e);
        t = S(q, "DIV", { class: !0 });
        var ie = w(t);
        (N && N.l(ie), ie.forEach(m), (r = Y(q)), (s = S(q, "DIV", { role: !0, class: !0 })));
        var ne = w(s);
        l = S(ne, "SPAN", { class: !0, "data-testid": !0 });
        var X = w(l);
        ((o = be(X, n)),
          X.forEach(m),
          (a = Y(ne)),
          Z && Z.l(ne),
          ne.forEach(m),
          (c = Y(q)),
          (u = S(q, "DIV", { role: !0, class: !0 })));
        var fe = w(u);
        f = S(fe, "DIV", { class: !0 });
        var ke = w(f);
        ((h = S(ke, "DIV", { class: !0 })),
          w(h).forEach(m),
          (E = Y(ke)),
          (g = S(ke, "TIME", { datetime: !0, class: !0, "data-testid": !0 })));
        var x = w(g);
        ((C = be(x, i[5])), x.forEach(m), (b = Y(ke)), (A = S(ke, "DIV", { class: !0 })));
        var G = w(A);
        (z(y.$$.fragment, G), G.forEach(m), ke.forEach(m), fe.forEach(m), q.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "songs-list__col songs-list__col--shim svelte-1wqzc4z"),
          d(l, "class", "composer-header__first-row svelte-1wqzc4z"),
          d(l, "data-testid", "composer-header-first-row"),
          d(s, "role", "columnheader"),
          d(s, "class", "songs-list__col songs-list__col--song songs-list__col--work-header svelte-1wqzc4z"),
          d(h, "class", "songs-list-row__add-to-library"),
          d(g, "datetime", i[4]),
          d(g, "class", "songs-list-row__length svelte-1wqzc4z"),
          d(g, "data-testid", "composer-header-duration"),
          d(A, "class", "songs-list-row__context-menu svelte-1wqzc4z"),
          d(f, "class", "songs-list-row__controls svelte-1wqzc4z"),
          d(u, "role", "columnheader"),
          d(
            u,
            "class",
            "songs-list__col songs-list__col--time songs-list__header-col songs-list__header-col--time svelte-1wqzc4z",
          ),
          d(e, "class", "composer-header songs-list-row songs-list-row--works-list-header svelte-1wqzc4z"),
          d(e, "data-testid", "composer-header"));
      },
      m(W, q) {
        (P(W, e, q),
          k(e, t),
          N && N.m(t, null),
          k(e, r),
          k(e, s),
          k(s, l),
          k(l, o),
          k(s, a),
          Z && Z.m(s, null),
          k(e, c),
          k(e, u),
          k(u, f),
          k(f, h),
          k(f, E),
          k(f, g),
          k(g, C),
          k(f, b),
          k(f, A),
          B(y, A, null),
          (v = !0),
          V || ((te = Fe(e, "dblclick", i[15])), (V = !0)));
      },
      p(W, [q]) {
        (W[0]
          ? N
            ? (N.p(W, q), q & 1 && _(N, 1))
            : ((N = Cr(W)), N.c(), _(N, 1), N.m(t, null))
          : N &&
            (ce(),
            p(N, 1, 1, () => {
              N = null;
            }),
            ue()),
          (!v || q & 256) && n !== (n = Ar(W[8]) + "") && ve(o, n),
          W[7]
            ? Z
              ? (Z.p(W, q), q & 128 && _(Z, 1))
              : ((Z = Dr(W)), Z.c(), _(Z, 1), Z.m(s, null))
            : Z &&
              (ce(),
              p(Z, 1, 1, () => {
                Z = null;
              }),
              ue()),
          (!v || q & 32) && ve(C, W[5]),
          (!v || q & 16) && d(g, "datetime", W[4]));
        const ie = {};
        (q & 8 && (ie.attachedTo = W[3]),
          q & 64 && (ie.isPlayable = W[6]),
          q & 262 && (ie.itemProperties = { subtitleLinks: [...W[2], ...W[1]], title: W[8] }),
          y.$set(ie));
      },
      i(W) {
        v || (_(N), _(Z), _(y.$$.fragment, W), (v = !0));
      },
      o(W) {
        (p(N), p(Z), p(y.$$.fragment, W), (v = !1));
      },
      d(W) {
        (W && m(e), N && N.d(), Z && Z.d(), O(y), (V = !1), te());
      },
    }
  );
}
function Wl(i, e, t) {
  let r, s, l, n, o, a, c, u, f, h, E;
  var g;
  const C = Ze();
  Ce(i, C, (V) => t(9, (E = V)));
  const b = tt(),
    A = Lt();
  let { header: y } = e;
  const v = () => A(o);
  return (
    (i.$$set = (V) => {
      "header" in V && t(12, (y = V.header));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 4096 && t(8, (r = y.firstRowText || "")),
        i.$$.dirty & 12288 && t(2, (s = t(13, (g = y.composerLinks)) !== null && g !== void 0 ? g : [])),
        i.$$.dirty & 4096 && t(1, (l = y.artistLinks)),
        i.$$.dirty & 6 && t(7, (n = (s == null ? void 0 : s.length) || (l == null ? void 0 : l.length))),
        i.$$.dirty & 4096 && t(0, (o = y.playAction)),
        i.$$.dirty & 1 && t(6, (a = !!o)),
        i.$$.dirty & 4096 && t(14, (c = Math.trunc(y.duration / 1e3))),
        i.$$.dirty & 16384 && t(5, (u = Gt(c, b.language))),
        i.$$.dirty & 16384 && t(4, (f = pi(c))),
        i.$$.dirty & 1 && t(3, (h = xi(o) && o.items)));
    }),
    [o, l, s, h, f, u, a, n, r, E, C, A, y, g, c, v]
  );
}
class Ul extends Ve {
  constructor(e) {
    (super(), $e(this, e, Wl, zl, je, { header: 12 }));
  }
}
function Kl(i) {
  let e,
    t,
    r = [{ xmlns: "http://www.w3.org/2000/svg" }, { width: "6" }, { height: "6" }, { viewBox: "0 0 64 64" }, i[0]],
    s = {};
  for (let l = 0; l < r.length; l += 1) s = We(s, r[l]);
  return {
    c() {
      ((e = qe("svg")), (t = qe("path")), this.h());
    },
    l(l) {
      e = Ge(l, "svg", { xmlns: !0, width: !0, height: !0, viewBox: !0 });
      var n = w(e);
      ((t = Ge(n, "path", { d: !0 })), w(t).forEach(m), n.forEach(m), this.h());
    },
    h() {
      (d(
        t,
        "d",
        "M31.948 61.587c16.185 0 29.587-13.43 29.587-29.587 0-16.186-13.43-29.587-29.616-29.587C15.762 2.413 2.36 15.814 2.36 32c0 16.157 13.43 29.587 29.587 29.587Z",
      ),
        Xe(e, s));
    },
    m(l, n) {
      (P(l, e, n), k(e, t));
    },
    p(l, [n]) {
      Xe(
        e,
        (s = Ct(r, [
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
      l && m(e);
    },
  };
}
function ql(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = We(We({}, e), xe(r))));
    }),
    (e = xe(e)),
    [e]
  );
}
let Gl = class extends Ve {
  constructor(e) {
    (super(), $e(this, e, ql, Kl, At, {}));
  }
};
function Lr(i) {
  let e, t, r, s;
  return (
    (t = new Gl({})),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, role: !0, "aria-label": !0, "data-testid": !0 });
        var n = w(e);
        (z(t.$$.fragment, n), n.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "popular svelte-taox9z"),
          d(e, "role", "img"),
          d(e, "aria-label", (r = i[3].t("ASE.Web.Music.PopularTrack"))),
          d(e, "data-testid", "popular-glyph"));
      },
      m(l, n) {
        (P(l, e, n), B(t, e, null), (s = !0));
      },
      p(l, n) {
        (!s || (n & 8 && r !== (r = l[3].t("ASE.Web.Music.PopularTrack")))) && d(e, "aria-label", r);
      },
      i(l) {
        s || (_(t.$$.fragment, l), (s = !0));
      },
      o(l) {
        (p(t.$$.fragment, l), (s = !1));
      },
      d(l) {
        (l && m(e), O(t));
      },
    }
  );
}
function Mr(i) {
  let e, t, r;
  return (
    (t = new ui({
      props: { isFavorited: i[1], platter: !1, enabled: !0, title: i[3].t("ASE.Web.Music.VO.FavoriteHelpText") },
    })),
    t.$on("toggle", i[5]),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "favorite svelte-taox9z"), $(e, "is-favorited", i[1]));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l & 2 && (n.isFavorited = s[1]),
          l & 8 && (n.title = s[3].t("ASE.Web.Music.VO.FavoriteHelpText")),
          t.$set(n),
          (!r || l & 2) && $(e, "is-favorited", s[1]));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Zl(i) {
  let e,
    t,
    r,
    s = i[0] && Lr(i),
    l = i[2] && Mr(i);
  return {
    c() {
      ((e = I("div")), s && s.c(), (t = J()), l && l.c(), this.h());
    },
    l(n) {
      e = S(n, "DIV", { class: !0 });
      var o = w(e);
      (s && s.l(o), (t = Y(o)), l && l.l(o), o.forEach(m), this.h());
    },
    h() {
      d(e, "class", "favorite-or-popular svelte-taox9z");
    },
    m(n, o) {
      (P(n, e, o), s && s.m(e, null), k(e, t), l && l.m(e, null), (r = !0));
    },
    p(n, [o]) {
      (n[0]
        ? s
          ? (s.p(n, o), o & 1 && _(s, 1))
          : ((s = Lr(n)), s.c(), _(s, 1), s.m(e, t))
        : s &&
          (ce(),
          p(s, 1, 1, () => {
            s = null;
          }),
          ue()),
        n[2]
          ? l
            ? (l.p(n, o), o & 4 && _(l, 1))
            : ((l = Mr(n)), l.c(), _(l, 1), l.m(e, null))
          : l &&
            (ce(),
            p(l, 1, 1, () => {
              l = null;
            }),
            ue()));
    },
    i(n) {
      r || (_(s), _(l), (r = !0));
    },
    o(n) {
      (p(s), p(l), (r = !1));
    },
    d(n) {
      (n && m(e), s && s.d(), l && l.d());
    },
  };
}
function Jl(i, e, t) {
  let r;
  const s = Ze();
  Ce(i, s, (c) => t(3, (r = c)));
  let { isPopular: l = !1 } = e,
    { inFavorites: n = !1 } = e,
    { showFavoriteButton: o = !0 } = e;
  function a(c) {
    bi.call(this, i, c);
  }
  return (
    (i.$$set = (c) => {
      ("isPopular" in c && t(0, (l = c.isPopular)),
        "inFavorites" in c && t(1, (n = c.inFavorites)),
        "showFavoriteButton" in c && t(2, (o = c.showFavoriteButton)));
    }),
    [l, n, o, r, s, a]
  );
}
class Yl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Jl, Zl, je, { isPopular: 0, inFavorites: 1, showFavoriteButton: 2 }));
  }
}
function Ql(i) {
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
      i[0],
    ],
    s = {};
  for (let l = 0; l < r.length; l += 1) s = We(s, r[l]);
  return {
    c() {
      ((e = qe("svg")), (t = qe("path")), this.h());
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
      var n = w(e);
      ((t = Ge(n, "path", { "fill-rule": !0, d: !0 })), w(t).forEach(m), n.forEach(m), this.h());
    },
    h() {
      (d(t, "fill-rule", "nonzero"),
        d(
          t,
          "d",
          "M16.747 12.437c1.166 0 1.753-.565 1.753-1.771V2.771C18.5 1.565 17.913 1 16.747 1H2.253C1.087 1 .5 1.565.5 2.771v7.895c0 1.206.587 1.771 1.753 1.771zm-.02-1.109H2.273c-.47 0-.675-.193-.675-.675V2.791c0-.489.205-.682.675-.682h14.454c.47 0 .675.193.675.682v7.862c0 .482-.205.675-.675.675m-8.738-1.296c.976 0 1.637-.709 1.637-1.708V5.961c0-.255.055-.324.205-.359l1.603-.385c.327-.09.429-.159.429-.559v-1.35c0-.262-.095-.379-.457-.289l-1.991.503c-.341.082-.41.151-.41.558v3.107c0 .303-.027.358-.375.455l-.627.165c-.621.165-1.139.537-1.139 1.213 0 .585.436 1.012 1.125 1.012M13.828 15a.636.636 0 0 0 .627-.648.636.636 0 0 0-.627-.647H5.159a.64.64 0 0 0-.635.647c0 .359.287.648.635.648z",
        ),
        Xe(e, s));
    },
    m(l, n) {
      (P(l, e, n), k(e, t));
    },
    p(l, [n]) {
      Xe(
        e,
        (s = Ct(r, [
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
      l && m(e);
    },
  };
}
function Xl(i, e, t) {
  return (
    (i.$$set = (r) => {
      t(0, (e = We(We({}, e), xe(r))));
    }),
    (e = xe(e)),
    [e]
  );
}
class xl extends Ve {
  constructor(e) {
    (super(), $e(this, e, Xl, Ql, At, {}));
  }
}
function Fr(i) {
  let e, t, r;
  return (
    (t = new xl({})),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        d(e, "class", "songs-list-row__video-glyph svelte-ejraru");
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function en(i) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(i[45])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "data-testid": !0 });
      var s = w(e);
      ((t = be(s, i[45])), s.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list-row__column-data svelte-ejraru"), d(e, "data-testid", "track-number"));
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      s[1] & 16384 && ve(t, r[45]);
    },
    i: le,
    o: le,
    d(r) {
      r && m(e);
    },
  };
}
function tn(i) {
  let e, t, r, s;
  const l = [sn, rn],
    n = [];
  function o(a, c) {
    return a[48] ? 0 : 1;
  }
  return (
    (e = o(i)),
    (t = n[e] = l[e](i)),
    {
      c() {
        (t.c(), (r = He()));
      },
      l(a) {
        (t.l(a), (r = He()));
      },
      m(a, c) {
        (n[e].m(a, c), P(a, r, c), (s = !0));
      },
      p(a, c) {
        let u = e;
        ((e = o(a)),
          e === u
            ? n[e].p(a, c)
            : (ce(),
              p(n[u], 1, 1, () => {
                n[u] = null;
              }),
              ue(),
              (t = n[e]),
              t ? t.p(a, c) : ((t = n[e] = l[e](a)), t.c()),
              _(t, 1),
              t.m(r.parentNode, r)));
      },
      i(a) {
        s || (_(t), (s = !0));
      },
      o(a) {
        (p(t), (s = !1));
      },
      d(a) {
        (a && m(r), n[e].d(a));
      },
    }
  );
}
function rn(i) {
  var r, s;
  let e, t;
  return (
    (e = new Ut({
      props: {
        artwork: i[21],
        artworkProfile: i[43](),
        badgeArtwork: (r = i[18]) == null ? void 0 : r.attributes.artwork,
        badgeName: (s = i[18]) == null ? void 0 : s.attributes.name,
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        z(e.$$.fragment, l);
      },
      m(l, n) {
        (B(e, l, n), (t = !0));
      },
      p(l, n) {
        var a, c;
        const o = {};
        (n[0] & 2097152 && (o.artwork = l[21]),
          n[1] & 4096 && (o.artworkProfile = l[43]()),
          n[0] & 262144 && (o.badgeArtwork = (a = l[18]) == null ? void 0 : a.attributes.artwork),
          n[0] & 262144 && (o.badgeName = (c = l[18]) == null ? void 0 : c.attributes.name),
          e.$set(o));
      },
      i(l) {
        t || (_(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        (p(e.$$.fragment, l), (t = !1));
      },
      d(l) {
        O(e, l);
      },
    }
  );
}
function sn(i) {
  var o, a;
  let e, t, r, s, l, n;
  return (
    (t = new Ut({
      props: {
        artwork: i[21],
        artworkProfile: i[43](),
        badgeArtwork: (o = i[18]) == null ? void 0 : o.attributes.artwork,
        badgeName: (a = i[18]) == null ? void 0 : a.attributes.name,
      },
    })),
    (l = new Ut({ props: { artwork: i[21], artworkProfile: i[43](), badgeArtwork: void 0, badgeName: void 0 } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (s = I("div")), j(l.$$.fragment), this.h());
      },
      l(c) {
        e = S(c, "DIV", { class: !0 });
        var u = w(e);
        (z(t.$$.fragment, u), u.forEach(m), (r = Y(c)), (s = S(c, "DIV", { class: !0 })));
        var f = w(s);
        (z(l.$$.fragment, f), f.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "is-viewport-small"), d(s, "class", "is-viewport-large"));
      },
      m(c, u) {
        (P(c, e, u), B(t, e, null), P(c, r, u), P(c, s, u), B(l, s, null), (n = !0));
      },
      p(c, u) {
        var E, g;
        const f = {};
        (u[0] & 2097152 && (f.artwork = c[21]),
          u[1] & 4096 && (f.artworkProfile = c[43]()),
          u[0] & 262144 && (f.badgeArtwork = (E = c[18]) == null ? void 0 : E.attributes.artwork),
          u[0] & 262144 && (f.badgeName = (g = c[18]) == null ? void 0 : g.attributes.name),
          t.$set(f));
        const h = {};
        (u[0] & 2097152 && (h.artwork = c[21]), u[1] & 4096 && (h.artworkProfile = c[43]()), l.$set(h));
      },
      i(c) {
        n || (_(t.$$.fragment, c), _(l.$$.fragment, c), (n = !0));
      },
      o(c) {
        (p(t.$$.fragment, c), p(l.$$.fragment, c), (n = !1));
      },
      d(c) {
        (c && (m(e), m(r), m(s)), O(t), O(l));
      },
    }
  );
}
function Vr(i) {
  let e, t, r;
  return (
    (t = new _i({
      props: {
        ariaLabel: i[25].t("ASE.Web.Music.Album.Track.Play.AriaLabel", {
          songName: i[13],
          artistName: i[0].artistName,
        }),
        item: i[30],
        isExplicit: i[11],
      },
    })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0, "data-testid": !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "songs-list-row__play-button-wrapper svelte-ejraru"), d(e, "data-testid", "track-play-button"));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[0] & 33562625 &&
          (n.ariaLabel = s[25].t("ASE.Web.Music.Album.Track.Play.AriaLabel", {
            songName: s[13],
            artistName: s[0].artistName,
          })),
          l[0] & 1073741824 && (n.item = s[30]),
          l[0] & 2048 && (n.isExplicit = s[11]),
          t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function ln(i) {
  let e, t;
  return (
    (e = new Je({ props: { action: i[40], $$slots: { default: [on] }, $$scope: { ctx: i } } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[1] & 512 && (l.action = r[40]),
          (s[0] & 8192) | (s[3] & 2048) && (l.$$scope = { dirty: s, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function nn(i) {
  let e, t, r, s, l, n;
  return (
    (t = new Je({ props: { action: i[40], $$slots: { default: [an] }, $$scope: { ctx: i } } })),
    (l = new fs({})),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (s = I("span")), j(l.$$.fragment), this.h());
      },
      l(o) {
        e = S(o, "DIV", { class: !0, dir: !0 });
        var a = w(e);
        (z(t.$$.fragment, a), (r = Y(a)), (s = S(a, "SPAN", { class: !0 })));
        var c = w(s);
        (z(l.$$.fragment, c), c.forEach(m), a.forEach(m), this.h());
      },
      h() {
        (d(s, "class", "songs-list-row__badge songs-list-row__badge--explicit svelte-ejraru"),
          d(e, "class", "songs-list-row__explicit-wrapper svelte-ejraru"),
          d(e, "dir", "auto"));
      },
      m(o, a) {
        (P(o, e, a), B(t, e, null), k(e, r), k(e, s), B(l, s, null), (n = !0));
      },
      p(o, a) {
        const c = {};
        (a[1] & 512 && (c.action = o[40]),
          (a[0] & 8192) | (a[3] & 2048) && (c.$$scope = { dirty: a, ctx: o }),
          t.$set(c));
      },
      i(o) {
        n || (_(t.$$.fragment, o), _(l.$$.fragment, o), (n = !0));
      },
      o(o) {
        (p(t.$$.fragment, o), p(l.$$.fragment, o), (n = !1));
      },
      d(o) {
        (o && m(e), O(t), O(l));
      },
    }
  );
}
function on(i) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(i[13])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var s = w(e);
      ((t = be(s, i[13])), s.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list-row__song-name svelte-ejraru"),
        d(e, "aria-label", i[13]),
        d(e, "tabindex", "-1"),
        d(e, "role", "checkbox"),
        d(e, "dir", "auto"),
        d(e, "data-testid", "track-title"));
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      (s[0] & 8192 && ve(t, r[13]), s[0] & 8192 && d(e, "aria-label", r[13]));
    },
    d(r) {
      r && m(e);
    },
  };
}
function an(i) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(i[13])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "aria-label": !0, tabindex: !0, role: !0, dir: !0, "data-testid": !0 });
      var s = w(e);
      ((t = be(s, i[13])), s.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list-row__song-name svelte-ejraru"),
        d(e, "aria-label", i[13]),
        d(e, "tabindex", "-1"),
        d(e, "role", "checkbox"),
        d(e, "dir", "auto"),
        d(e, "data-testid", "track-title"));
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      (s[0] & 8192 && ve(t, r[13]), s[0] & 8192 && d(e, "aria-label", r[13]));
    },
    d(r) {
      r && m(e);
    },
  };
}
function $r(i) {
  let e, t, r, s;
  return (
    (r = new rt({
      props: {
        items: i[12],
        translateFn: i[25].t,
        $$slots: { default: [un, ({ item: l }) => ({ 103: l }), ({ item: l }) => [0, 0, 0, l ? 1024 : 0]] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        ((e = I("div")), (t = I("span")), j(r.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0, "data-testid": !0, dir: !0 });
        var n = w(e);
        t = S(n, "SPAN", { class: !0 });
        var o = w(t);
        (z(r.$$.fragment, o), o.forEach(m), n.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "svelte-ejraru"),
          d(e, "class", "songs-list-row__by-line svelte-ejraru"),
          d(e, "data-testid", "track-title-by-line"),
          d(e, "dir", "auto"),
          $(e, "songs-list-row__by-line__mobile", !i[6] || i[24]));
      },
      m(l, n) {
        (P(l, e, n), k(e, t), B(r, t, null), (s = !0));
      },
      p(l, n) {
        const o = {};
        (n[0] & 4096 && (o.items = l[12]),
          n[0] & 33554432 && (o.translateFn = l[25].t),
          n[3] & 3072 && (o.$$scope = { dirty: n, ctx: l }),
          r.$set(o),
          (!s || n[0] & 16777280) && $(e, "songs-list-row__by-line__mobile", !l[6] || l[24]));
      },
      i(l) {
        s || (_(r.$$.fragment, l), (s = !0));
      },
      o(l) {
        (p(r.$$.fragment, l), (s = !1));
      },
      d(l) {
        (l && m(e), O(r));
      },
    }
  );
}
function cn(i) {
  let e = i[103].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s[3] & 1024 && e !== (e = r[103].title + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function un(i) {
  let e, t;
  return (
    (e = new Je({ props: { action: i[103].segue, $$slots: { default: [cn] }, $$scope: { ctx: i } } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[3] & 1024 && (l.action = r[103].segue), s[3] & 3072 && (l.$$scope = { dirty: s, ctx: r }), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Rr(i) {
  let e, t;
  return {
    c() {
      ((e = I("div")), (t = pe(i[44])), this.h());
    },
    l(r) {
      e = S(r, "DIV", { class: !0, "data-testid": !0 });
      var s = w(e);
      ((t = be(s, i[44])), s.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list-row__rank svelte-ejraru"), d(e, "data-testid", "track-ranking"));
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      s[1] & 8192 && ve(t, r[44]);
    },
    d(r) {
      r && m(e);
    },
  };
}
function Nr(i) {
  let e, t, r, s, l;
  const n = [dn, fn],
    o = [];
  function a(c, u) {
    return c[23] ? 0 : 1;
  }
  return (
    (r = a(i)),
    (s = o[r] = n[r](i)),
    {
      c() {
        ((e = I("div")), (t = I("div")), s.c(), this.h());
      },
      l(c) {
        e = S(c, "DIV", { class: !0, "data-testid": !0 });
        var u = w(e);
        t = S(u, "DIV", { class: !0, dir: !0 });
        var f = w(t);
        (s.l(f), f.forEach(m), u.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "songs-list__song-link-wrapper svelte-ejraru"),
          d(t, "dir", "auto"),
          d(e, "class", "songs-list__col songs-list__col--secondary svelte-ejraru"),
          d(e, "data-testid", "track-column-secondary"));
      },
      m(c, u) {
        (P(c, e, u), k(e, t), o[r].m(t, null), (l = !0));
      },
      p(c, u) {
        let f = r;
        ((r = a(c)),
          r === f
            ? o[r].p(c, u)
            : (ce(),
              p(o[f], 1, 1, () => {
                o[f] = null;
              }),
              ue(),
              (s = o[r]),
              s ? s.p(c, u) : ((s = o[r] = n[r](c)), s.c()),
              _(s, 1),
              s.m(t, null)));
      },
      i(c) {
        l || (_(s), (l = !0));
      },
      o(c) {
        (p(s), (l = !1));
      },
      d(c) {
        (c && m(e), o[r].d());
      },
    }
  );
}
function fn(i) {
  let e, t;
  return (
    (e = new rt({
      props: {
        items: i[12],
        translateFn: i[25].t,
        $$slots: { default: [_n, ({ item: r }) => ({ 103: r }), ({ item: r }) => [0, 0, 0, r ? 1024 : 0]] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[0] & 4096 && (l.items = r[12]),
          s[0] & 33554432 && (l.translateFn = r[25].t),
          s[3] & 3072 && (l.$$scope = { dirty: s, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function dn(i) {
  let e, t;
  return (
    (e = new rt({
      props: {
        items: i[39],
        translateFn: i[25].t,
        $$slots: { default: [gn, ({ item: r }) => ({ 102: r }), ({ item: r }) => [0, 0, 0, r ? 512 : 0]] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[1] & 256 && (l.items = r[39]),
          s[0] & 33554432 && (l.translateFn = r[25].t),
          s[3] & 2560 && (l.$$scope = { dirty: s, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function mn(i) {
  let e = i[103].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s[3] & 1024 && e !== (e = r[103].title + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function _n(i) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: i[103].segue, $$slots: { default: [mn] }, $$scope: { ctx: i } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(s) {
        e = S(s, "SPAN", {});
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[3] & 1024 && (n.action = s[103].segue), l[3] & 3072 && (n.$$scope = { dirty: l, ctx: s }), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function hn(i) {
  let e = i[102].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s[3] & 512 && e !== (e = r[102].title + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function gn(i) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: i[102].segue, $$slots: { default: [hn] }, $$scope: { ctx: i } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(s) {
        e = S(s, "SPAN", {});
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[3] & 512 && (n.action = s[102].segue), l[3] & 2560 && (n.$$scope = { dirty: l, ctx: s }), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Hr(i) {
  let e, t, r, s, l, n;
  const o = [bn, pn],
    a = [];
  function c(u, f) {
    return u[23] ? 0 : 1;
  }
  return (
    (r = c(i)),
    (s = a[r] = o[r](i)),
    {
      c() {
        ((e = I("div")), (t = I("div")), s.c(), this.h());
      },
      l(u) {
        e = S(u, "DIV", { class: !0, "data-testid": !0 });
        var f = w(e);
        t = S(f, "DIV", { class: !0, dir: !0 });
        var h = w(t);
        (s.l(h), h.forEach(m), f.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "songs-list__song-link-wrapper svelte-ejraru"),
          d(t, "dir", (l = i[23] ? void 0 : "auto")),
          d(e, "class", "songs-list__col songs-list__col--tertiary svelte-ejraru"),
          d(e, "data-testid", "track-column-tertiary"));
      },
      m(u, f) {
        (P(u, e, f), k(e, t), a[r].m(t, null), (n = !0));
      },
      p(u, f) {
        let h = r;
        ((r = c(u)),
          r === h
            ? a[r].p(u, f)
            : (ce(),
              p(a[h], 1, 1, () => {
                a[h] = null;
              }),
              ue(),
              (s = a[r]),
              s ? s.p(u, f) : ((s = a[r] = o[r](u)), s.c()),
              _(s, 1),
              s.m(t, null)),
          (!n || (f[0] & 8388608 && l !== (l = u[23] ? void 0 : "auto"))) && d(t, "dir", l));
      },
      i(u) {
        n || (_(s), (n = !0));
      },
      o(u) {
        (p(s), (n = !1));
      },
      d(u) {
        (u && m(e), a[r].d());
      },
    }
  );
}
function pn(i) {
  let e, t;
  return (
    (e = new rt({
      props: {
        items: i[39],
        translateFn: i[25].t,
        $$slots: { default: [kn, ({ item: r }) => ({ 102: r }), ({ item: r }) => [0, 0, 0, r ? 512 : 0]] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[1] & 256 && (l.items = r[39]),
          s[0] & 33554432 && (l.translateFn = r[25].t),
          s[3] & 2560 && (l.$$scope = { dirty: s, ctx: r }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function bn(i) {
  let e,
    t,
    r = i[18] && jr(i);
  return {
    c() {
      (r && r.c(), (e = He()));
    },
    l(s) {
      (r && r.l(s), (e = He()));
    },
    m(s, l) {
      (r && r.m(s, l), P(s, e, l), (t = !0));
    },
    p(s, l) {
      s[18]
        ? r
          ? (r.p(s, l), l[0] & 262144 && _(r, 1))
          : ((r = jr(s)), r.c(), _(r, 1), r.m(e.parentNode, e))
        : r &&
          (ce(),
          p(r, 1, 1, () => {
            r = null;
          }),
          ue());
    },
    i(s) {
      t || (_(r), (t = !0));
    },
    o(s) {
      (p(r), (t = !1));
    },
    d(s) {
      (s && m(e), r && r.d(s));
    },
  };
}
function vn(i) {
  let e = i[102].title + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s[3] & 512 && e !== (e = r[102].title + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function kn(i) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: i[102].segue, $$slots: { default: [vn] }, $$scope: { ctx: i } } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment));
      },
      l(s) {
        e = S(s, "SPAN", {});
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[3] & 512 && (n.action = s[102].segue), l[3] & 2560 && (n.$$scope = { dirty: l, ctx: s }), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function jr(i) {
  var a, c, u;
  let e,
    t,
    r,
    s,
    l = ((a = i[18]) == null ? void 0 : a.attributes.name) + "",
    n,
    o;
  return (
    (t = new ki({
      props: {
        artwork: (c = i[18]) == null ? void 0 : c.attributes.artwork,
        name: (u = i[18]) == null ? void 0 : u.attributes.name,
      },
    })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (s = I("span")), (n = pe(l)), this.h());
      },
      l(f) {
        e = S(f, "DIV", { class: !0 });
        var h = w(e);
        (z(t.$$.fragment, h), (r = Y(h)), (s = S(h, "SPAN", { class: !0 })));
        var E = w(s);
        ((n = be(E, l)), E.forEach(m), h.forEach(m), this.h());
      },
      h() {
        (d(s, "class", "songs-list-row__badge-name"),
          d(e, "class", "songs-list-row__badge__contributor-wrapper svelte-ejraru"));
      },
      m(f, h) {
        (P(f, e, h), B(t, e, null), k(e, r), k(e, s), k(s, n), (o = !0));
      },
      p(f, h) {
        var g, C, b;
        const E = {};
        (h[0] & 262144 && (E.artwork = (g = f[18]) == null ? void 0 : g.attributes.artwork),
          h[0] & 262144 && (E.name = (C = f[18]) == null ? void 0 : C.attributes.name),
          t.$set(E),
          (!o || h[0] & 262144) && l !== (l = ((b = f[18]) == null ? void 0 : b.attributes.name) + "") && ve(n, l));
      },
      i(f) {
        o || (_(t.$$.fragment, f), (o = !0));
      },
      o(f) {
        (p(t.$$.fragment, f), (o = !1));
      },
      d(f) {
        (f && m(e), O(t));
      },
    }
  );
}
function Br(i) {
  let e, t, r, s, l, n;
  const o = [yn, wn],
    a = [];
  function c(u, f) {
    return u[23] ? 0 : u[18] ? 1 : -1;
  }
  return (
    ~(r = c(i)) && (s = a[r] = o[r](i)),
    {
      c() {
        ((e = I("div")), (t = I("div")), s && s.c(), this.h());
      },
      l(u) {
        e = S(u, "DIV", { class: !0, "data-testid": !0 });
        var f = w(e);
        t = S(f, "DIV", { class: !0, dir: !0 });
        var h = w(t);
        (s && s.l(h), h.forEach(m), f.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "songs-list__song-link-wrapper svelte-ejraru"),
          d(t, "dir", (l = i[23] ? "auto" : void 0)),
          d(e, "class", "songs-list__col songs-list__col--quaternary svelte-ejraru"),
          d(e, "data-testid", "track-column-quaternary"),
          $(e, "songs-list__reactions", i[7]));
      },
      m(u, f) {
        (P(u, e, f), k(e, t), ~r && a[r].m(t, null), (n = !0));
      },
      p(u, f) {
        let h = r;
        ((r = c(u)),
          r === h
            ? ~r && a[r].p(u, f)
            : (s &&
                (ce(),
                p(a[h], 1, 1, () => {
                  a[h] = null;
                }),
                ue()),
              ~r ? ((s = a[r]), s ? s.p(u, f) : ((s = a[r] = o[r](u)), s.c()), _(s, 1), s.m(t, null)) : (s = null)),
          (!n || (f[0] & 8388608 && l !== (l = u[23] ? "auto" : void 0))) && d(t, "dir", l),
          (!n || f[0] & 128) && $(e, "songs-list__reactions", u[7]));
      },
      i(u) {
        n || (_(s), (n = !0));
      },
      o(u) {
        (p(s), (n = !1));
      },
      d(u) {
        (u && m(e), ~r && a[r].d());
      },
    }
  );
}
function wn(i) {
  var a, c, u;
  let e,
    t,
    r,
    s,
    l = ((a = i[18]) == null ? void 0 : a.attributes.name) + "",
    n,
    o;
  return (
    (t = new ki({
      props: {
        artwork: (c = i[18]) == null ? void 0 : c.attributes.artwork,
        name: (u = i[18]) == null ? void 0 : u.attributes.name,
      },
    })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), (r = J()), (s = I("span")), (n = pe(l)), this.h());
      },
      l(f) {
        e = S(f, "DIV", { class: !0 });
        var h = w(e);
        (z(t.$$.fragment, h), (r = Y(h)), (s = S(h, "SPAN", { class: !0 })));
        var E = w(s);
        ((n = be(E, l)), E.forEach(m), h.forEach(m), this.h());
      },
      h() {
        (d(s, "class", "songs-list-row__badge-name"),
          d(e, "class", "songs-list-row__badge__contributor-wrapper svelte-ejraru"));
      },
      m(f, h) {
        (P(f, e, h), B(t, e, null), k(e, r), k(e, s), k(s, n), (o = !0));
      },
      p(f, h) {
        var g, C, b;
        const E = {};
        (h[0] & 262144 && (E.artwork = (g = f[18]) == null ? void 0 : g.attributes.artwork),
          h[0] & 262144 && (E.name = (C = f[18]) == null ? void 0 : C.attributes.name),
          t.$set(E),
          (!o || h[0] & 262144) && l !== (l = ((b = f[18]) == null ? void 0 : b.attributes.name) + "") && ve(n, l));
      },
      i(f) {
        o || (_(t.$$.fragment, f), (o = !0));
      },
      o(f) {
        (p(t.$$.fragment, f), (o = !1));
      },
      d(f) {
        (f && m(e), O(t));
      },
    }
  );
}
function yn(i) {
  let e, t, r, s, l, n;
  return (
    (t = new ds({ props: { trackId: i[14], popoverPosition: i[26] ? kt.Right : kt.Left, appendPopoverToBody: !0 } })),
    (l = new ms({ props: { trackId: i[14] } })),
    {
      c() {
        ((e = I("span")), j(t.$$.fragment), (r = J()), (s = I("span")), j(l.$$.fragment), this.h());
      },
      l(o) {
        e = S(o, "SPAN", { class: !0 });
        var a = w(e);
        (z(t.$$.fragment, a), a.forEach(m), (r = Y(o)), (s = S(o, "SPAN", { class: !0 })));
        var c = w(s);
        (z(l.$$.fragment, c), c.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "is-viewport-large"), d(s, "class", "is-viewport-small"));
      },
      m(o, a) {
        (P(o, e, a), B(t, e, null), P(o, r, a), P(o, s, a), B(l, s, null), (n = !0));
      },
      p(o, a) {
        const c = {};
        (a[0] & 16384 && (c.trackId = o[14]),
          a[0] & 67108864 && (c.popoverPosition = o[26] ? kt.Right : kt.Left),
          t.$set(c));
        const u = {};
        (a[0] & 16384 && (u.trackId = o[14]), l.$set(u));
      },
      i(o) {
        n || (_(t.$$.fragment, o), _(l.$$.fragment, o), (n = !0));
      },
      o(o) {
        (p(t.$$.fragment, o), p(l.$$.fragment, o), (n = !1));
      },
      d(o) {
        (o && (m(e), m(r), m(s)), O(t), O(l));
      },
    }
  );
}
function Or(i) {
  let e, t, r;
  return (
    (t = new Je({ props: { action: i[0].playAction, $$slots: { default: [In] }, $$scope: { ctx: i } } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0, "data-testid": !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "songs-list-row__preview-button svelte-ejraru"), d(e, "data-testid", "track-preview"));
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[0] & 1 && (n.action = s[0].playAction),
          (l[0] & 33554432) | (l[3] & 2048) && (n.$$scope = { dirty: l, ctx: s }),
          t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function In(i) {
  let e = i[25].t("ASE.Web.Music.Preview.AllCaps") + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s[0] & 33554432 && e !== (e = r[25].t("ASE.Web.Music.Preview.AllCaps") + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function zr(i) {
  let e, t, r;
  return (
    (t = new _s({ props: { contentDescriptor: i[0].contentDescriptor, iconOnly: !0 } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        d(e, "class", "songs-list-row__add-to-library svelte-ejraru");
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      p(s, l) {
        const n = {};
        (l[0] & 1 && (n.contentDescriptor = s[0].contentDescriptor), t.$set(n));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Wr(i) {
  let e, t;
  return {
    c() {
      ((e = I("time")), (t = pe(i[38])), this.h());
    },
    l(r) {
      e = S(r, "TIME", { datetime: !0, class: !0, "data-testid": !0 });
      var s = w(e);
      ((t = be(s, i[38])), s.forEach(m), this.h());
    },
    h() {
      (d(e, "datetime", i[37]),
        d(e, "class", "songs-list-row__length svelte-ejraru"),
        d(e, "data-testid", "track-duration"));
    },
    m(r, s) {
      (P(r, e, s), k(e, t));
    },
    p(r, s) {
      (s[1] & 128 && ve(t, r[38]), s[1] & 64 && d(e, "datetime", r[37]));
    },
    d(r) {
      r && m(e);
    },
  };
}
function Ur(i) {
  var s;
  let e, t, r;
  return (
    (t = new Jt({
      props: {
        attachedTo: i[0].contentDescriptor,
        isPlayable: i[0].playAction !== null && !i[47],
        isMinimalMenu: i[46],
        itemProperties: {
          subtitleLinks: i[0].subtitleLinks,
          title: i[13],
          artwork: ((s = i[0]) == null ? void 0 : s.artwork) || i[10],
        },
        hasMaterial: !1,
        buttonStyle: "non-platter",
        prependItems: i[9]
          ? [
              {
                action: i[89],
                label: i[25].t("ASE.Web.Music.ContextualMenu.RemoveFromPlaylist"),
                icon: or.RemoveFromPlaylistIcon,
              },
            ]
          : [],
      },
    })),
    t.$on("actionComplete", function () {
      Ye(i[101]) && i[101].apply(this, arguments);
    }),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(l) {
        e = S(l, "DIV", { class: !0 });
        var n = w(e);
        (z(t.$$.fragment, n), n.forEach(m), this.h());
      },
      h() {
        d(e, "class", "songs-list-row__context-menu svelte-ejraru");
      },
      m(l, n) {
        (P(l, e, n), B(t, e, null), (r = !0));
      },
      p(l, n) {
        var a;
        i = l;
        const o = {};
        (n[0] & 1 && (o.attachedTo = i[0].contentDescriptor),
          (n[0] & 1) | (n[1] & 65536) && (o.isPlayable = i[0].playAction !== null && !i[47]),
          n[1] & 32768 && (o.isMinimalMenu = i[46]),
          n[0] & 9217 &&
            (o.itemProperties = {
              subtitleLinks: i[0].subtitleLinks,
              title: i[13],
              artwork: ((a = i[0]) == null ? void 0 : a.artwork) || i[10],
            }),
          n[0] & 34079232 &&
            (o.prependItems = i[9]
              ? [
                  {
                    action: i[89],
                    label: i[25].t("ASE.Web.Music.ContextualMenu.RemoveFromPlaylist"),
                    icon: or.RemoveFromPlaylistIcon,
                  },
                ]
              : []),
          t.$set(o));
      },
      i(l) {
        r || (_(t.$$.fragment, l), (r = !0));
      },
      o(l) {
        (p(t.$$.fragment, l), (r = !1));
      },
      d(l) {
        (l && m(e), O(t));
      },
    }
  );
}
function Sn(i) {
  let e,
    t,
    r = !i[16] || !1,
    s,
    l,
    n = !i[47] && !i[16] && zr(i),
    o = !i[16] && Wr(i),
    a = r && Ur(i);
  return {
    c() {
      (n && n.c(), (e = J()), o && o.c(), (t = J()), a && a.c(), (s = He()));
    },
    l(c) {
      (n && n.l(c), (e = Y(c)), o && o.l(c), (t = Y(c)), a && a.l(c), (s = He()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), o && o.m(c, u), P(c, t, u), a && a.m(c, u), P(c, s, u), (l = !0));
    },
    p(c, u) {
      (!c[47] && !c[16]
        ? n
          ? (n.p(c, u), (u[0] & 65536) | (u[1] & 65536) && _(n, 1))
          : ((n = zr(c)), n.c(), _(n, 1), n.m(e.parentNode, e))
        : n &&
          (ce(),
          p(n, 1, 1, () => {
            n = null;
          }),
          ue()),
        c[16] ? o && (o.d(1), (o = null)) : o ? o.p(c, u) : ((o = Wr(c)), o.c(), o.m(t.parentNode, t)),
        u[0] & 65536 && (r = !c[16] || !1),
        r
          ? a
            ? (a.p(c, u), u[0] & 65536 && _(a, 1))
            : ((a = Ur(c)), a.c(), _(a, 1), a.m(s.parentNode, s))
          : a &&
            (ce(),
            p(a, 1, 1, () => {
              a = null;
            }),
            ue()));
    },
    i(c) {
      l || (_(n), _(a), (l = !0));
    },
    o(c) {
      (p(n), p(a), (l = !1));
    },
    d(c) {
      (c && (m(e), m(t), m(s)), n && n.d(c), o && o.d(c), a && a.d(c));
    },
  };
}
function En(i) {
  let e, t, r, s, l, n, o, a, c, u, f, h, E, g, C, b, A, y, v, V, te, N, Z, W, q, ie, ne, X, fe, ke, x, G, de, Pe;
  ((r = new Yl({ props: { isPopular: i[0].showPopularityIndicator, inFavorites: i[29], showFavoriteButton: i[41] } })),
    r.$on("toggle", i[61]));
  let H = i[15] && !i[42] && Fr();
  const se = [tn, en],
    U = [];
  function Q(T, M) {
    return T[42] ? 0 : T[45] || T[45] === 0 ? 1 : -1;
  }
  ~(c = Q(i)) && (u = U[c] = se[c](i));
  let L = i[0].playAction && !i[16] && Vr(i);
  const De = [nn, ln],
    ge = [];
  function Te(T, M) {
    return T[11] ? 0 : 1;
  }
  ((C = Te(i)), (b = ge[C] = De[C](i)));
  let me = i[12].length && $r(i),
    Ie = i[44] && Rr(i),
    oe = i[4] && i[20] !== "albumTrackList" && Nr(i),
    _e = i[5] && Hr(i),
    K = i[6] && Br(i),
    we = i[47] && Or(i);
  return (
    (ne = new ts({
      props: {
        contentDescriptor: i[0].contentDescriptor,
        isPlayable: i[30].playAction !== null,
        $$slots: {
          default: [
            Sn,
            ({ onContextMenuActionComplete: T }) => ({ 101: T }),
            ({ onContextMenuActionComplete: T }) => [0, 0, 0, T ? 256 : 0],
          ],
        },
        $$scope: { ctx: i },
      },
    })),
    ne.$on("contextMenuActionComplete", i[90]),
    {
      c() {
        ((e = I("div")),
          (t = I("div")),
          j(r.$$.fragment),
          (s = J()),
          (l = I("div")),
          (n = I("div")),
          H && H.c(),
          (o = J()),
          (a = I("div")),
          u && u.c(),
          (f = J()),
          L && L.c(),
          (h = J()),
          (E = I("div")),
          (g = I("div")),
          b.c(),
          (A = J()),
          me && me.c(),
          (y = J()),
          (v = J()),
          Ie && Ie.c(),
          (V = J()),
          oe && oe.c(),
          (te = J()),
          _e && _e.c(),
          (N = J()),
          K && K.c(),
          (Z = J()),
          (W = I("div")),
          (q = I("div")),
          we && we.c(),
          (ie = J()),
          j(ne.$$.fragment),
          this.h());
      },
      l(T) {
        e = S(T, "DIV", {
          class: !0,
          role: !0,
          tabindex: !0,
          "data-row": !0,
          "data-current-mouse-target": !0,
          "data-testid": !0,
          "aria-label": !0,
        });
        var M = w(e);
        t = S(M, "DIV", { class: !0, "data-testid": !0 });
        var Se = w(t);
        (z(r.$$.fragment, Se), Se.forEach(m), (s = Y(M)), (l = S(M, "DIV", { class: !0, "data-testid": !0 })));
        var Re = w(l);
        n = S(Re, "DIV", { class: !0 });
        var Ae = w(n);
        (H && H.l(Ae), (o = Y(Ae)), (a = S(Ae, "DIV", { class: !0 })));
        var Me = w(a);
        (u && u.l(Me), (f = Y(Me)), L && L.l(Me), Me.forEach(m), (h = Y(Ae)), (E = S(Ae, "DIV", { class: !0 })));
        var Oe = w(E);
        g = S(Oe, "DIV", { class: !0, "data-testid": !0 });
        var D = w(g);
        (b.l(D),
          (A = Y(D)),
          me && me.l(D),
          D.forEach(m),
          (y = Y(Oe)),
          Oe.forEach(m),
          (v = Y(Ae)),
          Ie && Ie.l(Ae),
          Ae.forEach(m),
          Re.forEach(m),
          (V = Y(M)),
          oe && oe.l(M),
          (te = Y(M)),
          _e && _e.l(M),
          (N = Y(M)),
          K && K.l(M),
          (Z = Y(M)),
          (W = S(M, "DIV", { class: !0, "data-testid": !0 })));
        var re = w(W);
        q = S(re, "DIV", { class: !0 });
        var ae = w(q);
        (we && we.l(ae), (ie = Y(ae)), z(ne.$$.fragment, ae), ae.forEach(m), re.forEach(m), M.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "songs-list__col songs-list__col--favorite-or-popular svelte-ejraru"),
          d(t, "data-testid", "track-column-favorite-or-popular"),
          d(a, "class", "songs-list-row__song-index svelte-ejraru"),
          $(a, "songs-list-row__song-index--ranking", i[44]),
          $(a, "songs-list-row--with-collaborators", !i[17]),
          d(g, "class", "songs-list-row__song-name-wrapper svelte-ejraru"),
          d(g, "data-testid", "song-name-wrapper"),
          $(g, "songs-list-row__song-name-wrapper--explicit", i[11]),
          d(E, "class", "songs-list-row__song-wrapper svelte-ejraru"),
          d(n, "class", "songs-list-row__song-container svelte-ejraru"),
          d(l, "class", "songs-list__col songs-list__col--song svelte-ejraru"),
          d(l, "data-testid", "track-column-song"),
          d(q, "class", "songs-list-row__controls svelte-ejraru"),
          d(W, "class", "songs-list__col songs-list__col--time svelte-ejraru"),
          d(W, "data-testid", "track-column-controls"),
          d(e, "class", "songs-list-row drop-reset svelte-ejraru"),
          d(e, "role", "row"),
          d(e, "tabindex", "0"),
          d(e, "data-row", i[1]),
          d(e, "data-current-mouse-target", (X = i[49].currentMouseTarget === i[0])),
          d(e, "data-testid", "track-list-item"),
          d(e, "aria-label", i[28]),
          $(e, "is-loading", i[36]),
          $(e, "is-playing", i[35]),
          $(e, "is-paused", i[34]),
          $(e, "songs-list-row--disabled", i[16]),
          $(e, "songs-list-row--artwork", i[42]),
          $(e, "songs-list-row--no-artwork", !i[42]),
          $(e, "songs-list-row--decorated", i[42] && i[22]),
          $(e, "songs-list-row--two-lines", i[12].length),
          $(e, "songs-list-row--album", i[20] === "albumTrackList"),
          $(e, "songs-list-row--playlist", i[20] === "playlistTrackList"),
          $(e, "songs-list-row--compilation", i[20] === "compilationTrackList"),
          $(e, "songs-list-row--selected", i[2]),
          $(e, "songs-list-row--preview", i[47]),
          $(e, "disabled", i[16]));
      },
      m(T, M) {
        (P(T, e, M),
          k(e, t),
          B(r, t, null),
          k(e, s),
          k(e, l),
          k(l, n),
          H && H.m(n, null),
          k(n, o),
          k(n, a),
          ~c && U[c].m(a, null),
          k(a, f),
          L && L.m(a, null),
          k(n, h),
          k(n, E),
          k(E, g),
          ge[C].m(g, null),
          k(g, A),
          me && me.m(g, null),
          k(E, y),
          k(n, v),
          Ie && Ie.m(n, null),
          k(e, V),
          oe && oe.m(e, null),
          k(e, te),
          _e && _e.m(e, null),
          k(e, N),
          K && K.m(e, null),
          k(e, Z),
          k(e, W),
          k(W, q),
          we && we.m(q, null),
          k(q, ie),
          B(ne, q, null),
          i[91](e),
          (G = !0),
          de ||
            ((Pe = [
              Fe(e, "dblclick", i[92]),
              Fe(e, "mousedown", i[93]),
              Fe(e, "mousedown", i[57]),
              Fe(e, "click", i[59]),
              Fe(e, "keydown", i[58]),
              Fe(e, "focusin", i[60]),
              et((fe = An.call(null, e, i[3]))),
              et((ke = rs.call(null, e, i[8] && { targets: [ft.Top, ft.Bottom], onDrop: i[94] }))),
              et((x = i[56].call(null, e, { impressionMetrics: i[32], location: i[31] }))),
            ]),
            (de = !0)));
      },
      p(T, M) {
        const Se = {};
        (M[0] & 1 && (Se.isPopular = T[0].showPopularityIndicator),
          M[0] & 536870912 && (Se.inFavorites = T[29]),
          M[1] & 1024 && (Se.showFavoriteButton = T[41]),
          r.$set(Se),
          T[15] && !T[42]
            ? H
              ? (M[0] & 32768) | (M[1] & 2048) && _(H, 1)
              : ((H = Fr()), H.c(), _(H, 1), H.m(n, o))
            : H &&
              (ce(),
              p(H, 1, 1, () => {
                H = null;
              }),
              ue()));
        let Re = c;
        ((c = Q(T)),
          c === Re
            ? ~c && U[c].p(T, M)
            : (u &&
                (ce(),
                p(U[Re], 1, 1, () => {
                  U[Re] = null;
                }),
                ue()),
              ~c ? ((u = U[c]), u ? u.p(T, M) : ((u = U[c] = se[c](T)), u.c()), _(u, 1), u.m(a, f)) : (u = null)),
          T[0].playAction && !T[16]
            ? L
              ? (L.p(T, M), M[0] & 65537 && _(L, 1))
              : ((L = Vr(T)), L.c(), _(L, 1), L.m(a, null))
            : L &&
              (ce(),
              p(L, 1, 1, () => {
                L = null;
              }),
              ue()),
          (!G || M[1] & 8192) && $(a, "songs-list-row__song-index--ranking", T[44]),
          (!G || M[0] & 131072) && $(a, "songs-list-row--with-collaborators", !T[17]));
        let Ae = C;
        ((C = Te(T)),
          C === Ae
            ? ge[C].p(T, M)
            : (ce(),
              p(ge[Ae], 1, 1, () => {
                ge[Ae] = null;
              }),
              ue(),
              (b = ge[C]),
              b ? b.p(T, M) : ((b = ge[C] = De[C](T)), b.c()),
              _(b, 1),
              b.m(g, A)),
          T[12].length
            ? me
              ? (me.p(T, M), M[0] & 4096 && _(me, 1))
              : ((me = $r(T)), me.c(), _(me, 1), me.m(g, null))
            : me &&
              (ce(),
              p(me, 1, 1, () => {
                me = null;
              }),
              ue()),
          (!G || M[0] & 2048) && $(g, "songs-list-row__song-name-wrapper--explicit", T[11]),
          T[44] ? (Ie ? Ie.p(T, M) : ((Ie = Rr(T)), Ie.c(), Ie.m(n, null))) : Ie && (Ie.d(1), (Ie = null)),
          T[4] && T[20] !== "albumTrackList"
            ? oe
              ? (oe.p(T, M), M[0] & 1048592 && _(oe, 1))
              : ((oe = Nr(T)), oe.c(), _(oe, 1), oe.m(e, te))
            : oe &&
              (ce(),
              p(oe, 1, 1, () => {
                oe = null;
              }),
              ue()),
          T[5]
            ? _e
              ? (_e.p(T, M), M[0] & 32 && _(_e, 1))
              : ((_e = Hr(T)), _e.c(), _(_e, 1), _e.m(e, N))
            : _e &&
              (ce(),
              p(_e, 1, 1, () => {
                _e = null;
              }),
              ue()),
          T[6]
            ? K
              ? (K.p(T, M), M[0] & 64 && _(K, 1))
              : ((K = Br(T)), K.c(), _(K, 1), K.m(e, Z))
            : K &&
              (ce(),
              p(K, 1, 1, () => {
                K = null;
              }),
              ue()),
          T[47]
            ? we
              ? (we.p(T, M), M[1] & 65536 && _(we, 1))
              : ((we = Or(T)), we.c(), _(we, 1), we.m(q, ie))
            : we &&
              (ce(),
              p(we, 1, 1, () => {
                we = null;
              }),
              ue()));
        const Me = {};
        (M[0] & 1 && (Me.contentDescriptor = T[0].contentDescriptor),
          M[0] & 1073741824 && (Me.isPlayable = T[30].playAction !== null),
          (M[0] & 34153985) | (M[1] & 98496) | (M[3] & 2304) && (Me.$$scope = { dirty: M, ctx: T }),
          ne.$set(Me),
          (!G || M[0] & 2) && d(e, "data-row", T[1]),
          (!G || ((M[0] & 1) | (M[1] & 262144) && X !== (X = T[49].currentMouseTarget === T[0]))) &&
            d(e, "data-current-mouse-target", X),
          (!G || M[0] & 268435456) && d(e, "aria-label", T[28]),
          fe && Ye(fe.update) && M[0] & 8 && fe.update.call(null, T[3]),
          ke &&
            Ye(ke.update) &&
            M[0] & 256 &&
            ke.update.call(null, T[8] && { targets: [ft.Top, ft.Bottom], onDrop: T[94] }),
          x && Ye(x.update) && M[1] & 3 && x.update.call(null, { impressionMetrics: T[32], location: T[31] }),
          (!G || M[1] & 32) && $(e, "is-loading", T[36]),
          (!G || M[1] & 16) && $(e, "is-playing", T[35]),
          (!G || M[1] & 8) && $(e, "is-paused", T[34]),
          (!G || M[0] & 65536) && $(e, "songs-list-row--disabled", T[16]),
          (!G || M[1] & 2048) && $(e, "songs-list-row--artwork", T[42]),
          (!G || M[1] & 2048) && $(e, "songs-list-row--no-artwork", !T[42]),
          (!G || (M[0] & 4194304) | (M[1] & 2048)) && $(e, "songs-list-row--decorated", T[42] && T[22]),
          (!G || M[0] & 4096) && $(e, "songs-list-row--two-lines", T[12].length),
          (!G || M[0] & 1048576) && $(e, "songs-list-row--album", T[20] === "albumTrackList"),
          (!G || M[0] & 1048576) && $(e, "songs-list-row--playlist", T[20] === "playlistTrackList"),
          (!G || M[0] & 1048576) && $(e, "songs-list-row--compilation", T[20] === "compilationTrackList"),
          (!G || M[0] & 4) && $(e, "songs-list-row--selected", T[2]),
          (!G || M[1] & 65536) && $(e, "songs-list-row--preview", T[47]),
          (!G || M[0] & 65536) && $(e, "disabled", T[16]));
      },
      i(T) {
        G ||
          (_(r.$$.fragment, T),
          _(H),
          _(u),
          _(L),
          _(b),
          _(me),
          _(oe),
          _(_e),
          _(K),
          _(we),
          _(ne.$$.fragment, T),
          (G = !0));
      },
      o(T) {
        (p(r.$$.fragment, T), p(H), p(u), p(L), p(b), p(me), p(oe), p(_e), p(K), p(we), p(ne.$$.fragment, T), (G = !1));
      },
      d(T) {
        (T && m(e),
          O(r),
          H && H.d(),
          ~c && U[c].d(),
          L && L.d(),
          ge[C].d(),
          me && me.d(),
          Ie && Ie.d(),
          oe && oe.d(),
          _e && _e.d(),
          K && K.d(),
          we && we.d(),
          O(ne),
          i[91](null),
          (de = !1),
          dt(Pe));
      },
    }
  );
}
function An(i, e) {
  return (
    e && i.focus(),
    {
      update(t) {
        t && i.focus();
      },
    }
  );
}
function Cn(i, e, t) {
  let r,
    s,
    l,
    n,
    o,
    a,
    c,
    u,
    f,
    h,
    E,
    g,
    C,
    b,
    A,
    y,
    v,
    V,
    te,
    N,
    Z,
    W,
    q,
    ie,
    ne,
    X,
    fe,
    ke,
    x,
    G,
    de,
    Pe,
    H,
    se,
    U,
    Q,
    L,
    De,
    ge,
    Te,
    me,
    Ie,
    oe,
    _e,
    K,
    we,
    T,
    M = le,
    Se = () => (M(), (M = Dt(De, (F) => t(85, (T = F)))), De),
    Re,
    Ae,
    Me;
  (Ce(i, is, (F) => t(96, (K = F))), Ce(i, ss, (F) => t(86, (Re = F))), i.$$.on_destroy.push(() => M()));
  var Oe, D, re, ae, ye, Le, it, st, lt, nt;
  const R = ct(),
    ee = Ze();
  Ce(i, ee, (F) => t(25, (_e = F)));
  const Ee = Mt();
  Ce(i, Ee, (F) => t(49, (we = F)));
  const Ne = tt(),
    Ue = Lt(),
    { queue: ht, isRestricted: Vt } = di();
  Ce(i, ht, (F) => t(87, (Ae = F)));
  const { state: Yt } = _t();
  Ce(i, Yt, (F) => t(88, (Me = F)));
  const $t = Et(),
    { captureImpressions: Ei } = ls();
  let Rt = !1,
    Qt = !1;
  (mt(async () => {
    try {
      const F = await (Vt == null ? void 0 : Vt());
      t(76, (Rt = F));
    } catch (F) {}
    t(26, (Qt = document.dir === gi.RTL));
  }),
    ut(() => {
      R.unsubscribeFromUpdates(f);
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
  function Ai(F) {
    let Ke;
    if ((h ? (Ke = hs(F)) : (Ke = gs(F)), Ke.contentDescriptor.url || Ke.contentDescriptor.catalogUrl))
      return cs(
        { kind: us.CatalogPage, intent: Ke },
        {
          data: [
            {
              excludingFields: [],
              includingFields: ["pageFields", "languages", "impressionsSnapshot", "clickLocation"],
              shouldFlush: !1,
              fields: {
                targetId: ie == null ? void 0 : ie.identifiers.storeAdamID,
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
  function Ci(F) {
    F.metaKey && (Bt = !0);
  }
  function Di(F) {
    if (F.key === "Enter" && F.target === ot) Ue(L.playAction);
    else if (F.key === "Tab")
      if (F.shiftKey)
        document.activeElement === ot && (gt ? Ee.clearSelection() : (Ee.selectPreviousItem(he), F.preventDefault()));
      else {
        const Ke = ot.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        );
        document.activeElement === Ke[Ke.length - 1] &&
          (pt ? Ee.clearSelection() : (Ee.selectNextItem(he), F.preventDefault()));
      }
  }
  function Ti(F) {
    Ee.handleClick(he, F);
  }
  function Pi() {
    const F = we.selectedItems.length;
    (!Bt && F <= 1 && (gt || pt) && Ee.selectItem(he), (Bt = !1));
  }
  const Li = () => {
      hi(f, ge, he.contentDescriptor, Te, R, K, !0, Ue);
    },
    Mi = () => {
      $t("removeFromPlaylist", { itemId: u });
    };
  function Fi(F) {
    bi.call(this, i, F);
  }
  function Vi(F) {
    Kt[F ? "unshift" : "push"](() => {
      ((ot = F), t(27, ot));
    });
  }
  const $i = () => Ue(L.playAction),
    Ri = (F) => {
      F.metaKey || Ee.setCurrentMouseTarget(he);
    },
    Ni = (...F) => $t("drop", ...F);
  return (
    (i.$$set = (F) => {
      ("item" in F && t(0, (he = F.item)),
        "containerItemDescriptors" in F && t(62, (Nt = F.containerItemDescriptors)),
        "rowIndex" in F && t(1, (Xt = F.rowIndex)),
        "isFirst" in F && t(63, (gt = F.isFirst)),
        "isLast" in F && t(64, (pt = F.isLast)),
        "isSelected" in F && t(2, (xt = F.isSelected)),
        "isLastSelected" in F && t(3, (er = F.isLastSelected)),
        "showSecondColumn" in F && t(4, (Ht = F.showSecondColumn)),
        "showThirdColumn" in F && t(5, (tr = F.showThirdColumn)),
        "showFourthColumn" in F && t(6, (bt = F.showFourthColumn)),
        "hasReactions" in F && t(7, (vt = F.hasReactions)),
        "socialProfiles" in F && t(65, (jt = F.socialProfiles)),
        "dropEnabled" in F && t(8, (rr = F.dropEnabled)),
        "shouldShowRemoveFromPlaylist" in F && t(9, (ir = F.shouldShowRemoveFromPlaylist)),
        "containerArtwork" in F && t(10, (sr = F.containerArtwork)));
    }),
    (i.$$.update = () => {
      (i.$$.dirty[0] & 1 &&
        t(
          20,
          (r = (() => {
            const F = he.layoutStyle;
            return typeof F == "string" ? F : F == null ? void 0 : F.kind;
          })()),
        ),
        i.$$.dirty[0] & 192 && t(23, (s = bt && vt)),
        i.$$.dirty[0] & 192 && t(24, (l = bt && !vt)),
        i.$$.dirty[0] & 25165824 && t(17, (n = !s && !l)),
        i.$$.dirty[0] & 25165824 && t(48, (o = l || s)),
        i.$$.dirty[2] & 67108880 &&
          t(
            83,
            (a = vi(
              t(66, (Oe = Me == null ? void 0 : Me.user)) === null || Oe === void 0 ? void 0 : Oe.subscriberType,
            )),
          ),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[2] & 32) &&
          t(84, (c = t(67, (D = he.contentDescriptor)) === null || D === void 0 ? void 0 : D.kind)),
        i.$$.dirty[0] & 1 && t(19, (u = at(he))),
        i.$$.dirty[0] & 1 && t(14, (f = Zt(he))),
        i.$$.dirty[2] & 4194304 && t(15, (h = ns.includes(c))),
        i.$$.dirty[0] & 1 && t(47, (E = he.isPreviewMode)),
        i.$$.dirty[0] & 1 && t(11, (g = he.showExplicitBadge)),
        (i.$$.dirty[0] & 2049) | (i.$$.dirty[2] & 16384) && t(16, (C = he.isDisabled || (g && Rt))),
        i.$$.dirty[0] & 65537 && t(46, (b = C && !!he.isPrerelease)),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[2] & 384) &&
          t(
            79,
            (U =
              t(
                70,
                (ye =
                  t(69, (ae = he.socialProfileContentDescriptor)) === null || ae === void 0 ? void 0 : ae.identifiers),
              ) === null || ye === void 0
                ? void 0
                : ye.socialProfileID),
          ),
        (i.$$.dirty[0] & 131072) | (i.$$.dirty[2] & 16908296) &&
          t(18, (Q = n ? jt.get(U) : Re == null ? void 0 : Re.get(U))),
        i.$$.dirty[0] & 262144 && t(22, (A = !!Q)),
        i.$$.dirty[0] & 1 && t(45, (y = he.trackNumber)),
        i.$$.dirty[0] & 1 && t(13, (v = he.title)),
        i.$$.dirty[0] & 1 && t(44, (V = he.rankingText)),
        i.$$.dirty[0] & 1 && t(21, (te = he.artwork)),
        i.$$.dirty[0] & 4227072 &&
          t(43, (N = () => (h ? "music-video-tracklist" : A ? "track-list-decorated" : "track-list"))),
        i.$$.dirty[0] & 3145728 && t(42, (Z = !!te || r === "playlistTrackList")),
        (i.$$.dirty[0] & 65536) | (i.$$.dirty[2] & 2097152) && t(41, (W = a && !C)),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[2] & 64) &&
          t(82, (q = t(68, (re = he.contentDescriptor)) === null || re === void 0 ? void 0 : re.url)),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[2] & 1048576) &&
          t(78, (ie = Object.assign(Object.assign({}, he.contentDescriptor), { url: os(q) }))),
        (i.$$.dirty[0] & 65536) | (i.$$.dirty[2] & 65536) && t(40, (ne = !!ie && !C && Ai(ie))),
        i.$$.dirty[0] & 1 && t(12, (X = he.subtitleLinks || [])),
        i.$$.dirty[0] & 1 && t(39, (fe = he.tertiaryLinks || [])),
        i.$$.dirty[0] & 1 && t(81, (ke = Math.trunc(he.duration / 1e3))),
        i.$$.dirty[2] & 524288 && t(38, (x = Gt(ke, Ne.language))),
        i.$$.dirty[2] & 524288 && t(37, (G = pi(ke))),
        (i.$$.dirty[0] & 524288) | (i.$$.dirty[2] & 33554432) && t(80, (de = u && Ae.nowPlayingItemId === u)),
        i.$$.dirty[2] & 33816576 && t(36, (Pe = de && Ae.derivedStates.isLoading)),
        i.$$.dirty[2] & 33816576 && t(35, (H = de && Ae.derivedStates.isPlaying)),
        i.$$.dirty[2] & 33816576 && t(34, (se = de && Ae.derivedStates.isPaused)),
        (i.$$.dirty[0] & 65537) | (i.$$.dirty[2] & 1) &&
          t(
            30,
            (L = (() =>
              Object.assign(Object.assign({}, he), { playAction: !C && he.playAction && mi(he.playAction, Nt) }))()),
          ),
        i.$$.dirty[0] & 16384 && Se(t(33, (De = R.subscribeToUpdates(f)))),
        i.$$.dirty[0] & 32768 && t(77, (ge = h ? It.MusicVideo : It.Song)),
        (i.$$.dirty[0] & 16384) | (i.$$.dirty[2] & 8421888) &&
          t(29, (Te = T && (t(71, (Le = R.get(f, ge))) === null || Le === void 0 ? void 0 : Le.inFavorites))),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[2] & 3072) &&
          t(
            32,
            (me =
              t(
                73,
                (st =
                  t(72, (it = he == null ? void 0 : he.impressionMetrics)) === null || it === void 0
                    ? void 0
                    : it.fields),
              ) !== null && st !== void 0
                ? st
                : {}),
          ),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[2] & 12288) &&
          t(
            31,
            (Ie =
              t(
                75,
                (nt =
                  t(74, (lt = he == null ? void 0 : he.impressionMetrics)) === null || lt === void 0
                    ? void 0
                    : lt.clickLocationFields),
              ) !== null && nt !== void 0
                ? nt
                : {}),
          ),
        i.$$.dirty[0] & 33568784 &&
          t(
            28,
            (oe = (() => {
              let F = v;
              return (
                Ht &&
                  (F = _e.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: F,
                    contentB: as(
                      X.map((Ke) => Ke.title),
                      Ne.language,
                      _e.t,
                    ),
                  })),
                g &&
                  (F = _e.t("ASE.Web.Music.ContentA.Comma.ContentB", {
                    contentA: _e.t("ASE.Web.Music.Explicit"),
                    contentB: F,
                  })),
                F
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
      v,
      f,
      h,
      C,
      n,
      Q,
      u,
      r,
      te,
      A,
      s,
      l,
      _e,
      Qt,
      ot,
      oe,
      Te,
      L,
      Ie,
      me,
      De,
      se,
      H,
      Pe,
      G,
      x,
      fe,
      ne,
      W,
      Z,
      N,
      V,
      y,
      b,
      E,
      o,
      we,
      ee,
      Ee,
      Ue,
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
      D,
      re,
      ae,
      ye,
      Le,
      it,
      st,
      lt,
      nt,
      Rt,
      ge,
      ie,
      U,
      de,
      ke,
      q,
      a,
      c,
      T,
      Re,
      Ae,
      Me,
      Mi,
      Fi,
      Vi,
      $i,
      Ri,
      Ni,
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
function Kr(i, e, t) {
  const r = i.slice();
  return ((r[60] = e[t]), (r[62] = t), r);
}
function qr(i, e, t) {
  const r = i.slice();
  return ((r[63] = e[t]), r);
}
function Pn(i) {
  let e,
    t = ze(i[15]),
    r = [];
  for (let s = 0; s < t.length; s += 1) r[s] = Gr(qr(i, t, s));
  return {
    c() {
      e = I("div");
      for (let s = 0; s < r.length; s += 1) r[s].c();
      this.h();
    },
    l(s) {
      e = S(s, "DIV", { class: !0, "aria-hidden": !0, role: !0, "data-testid": !0 });
      var l = w(e);
      for (let n = 0; n < r.length; n += 1) r[n].l(l);
      (l.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list__header svelte-88ilm8"),
        d(e, "aria-hidden", "true"),
        d(e, "role", "row"),
        d(e, "data-testid", "tracklist-column-header"),
        $(e, "songs-list__header--is-visible", i[8]));
    },
    m(s, l) {
      P(s, e, l);
      for (let n = 0; n < r.length; n += 1) r[n] && r[n].m(e, null);
    },
    p(s, l) {
      if (l[0] & 32784) {
        t = ze(s[15]);
        let n;
        for (n = 0; n < t.length; n += 1) {
          const o = qr(s, t, n);
          r[n] ? r[n].p(o, l) : ((r[n] = Gr(o)), r[n].c(), r[n].m(e, null));
        }
        for (; n < r.length; n += 1) r[n].d(1);
        r.length = t.length;
      }
      l[0] & 256 && $(e, "songs-list__header--is-visible", s[8]);
    },
    i: le,
    o: le,
    d(s) {
      (s && m(e), Ft(r, s));
    },
  };
}
function Ln(i) {
  let e, t;
  return (
    (e = new Ul({ props: { header: i[0].header.item } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s[0] & 1 && (l.header = r[0].header.item), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Gr(i) {
  let e,
    t,
    r = i[63].headerText + "",
    s,
    l,
    n,
    o,
    a;
  return {
    c() {
      ((e = I("div")), (t = I("div")), (s = pe(r)), (n = J()), this.h());
    },
    l(c) {
      e = S(c, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var u = w(e);
      t = S(u, "DIV", { class: !0 });
      var f = w(t);
      ((s = be(f, r)), f.forEach(m), (n = Y(u)), u.forEach(m), this.h());
    },
    h() {
      (d(
        t,
        "class",
        (l = "songs-list__header-col-label songs-list__header-col-label--" + i[63].key + " svelte-88ilm8"),
      ),
        d(
          e,
          "class",
          (o =
            "songs-list__col songs-list__col--" +
            i[63].key +
            " songs-list__header-col songs-list__header-col--" +
            i[63].key +
            " svelte-88ilm8"),
        ),
        d(e, "role", "columnheader"),
        d(e, "data-testid", (a = "tracklist-column-header-" + i[63].key)),
        $(e, "songs-list__reactions", i[63].key === "quaternary" && i[4]));
    },
    m(c, u) {
      (P(c, e, u), k(e, t), k(t, s), k(e, n));
    },
    p(c, u) {
      (u[0] & 32768 && r !== (r = c[63].headerText + "") && ve(s, r),
        u[0] & 32768 &&
          l !== (l = "songs-list__header-col-label songs-list__header-col-label--" + c[63].key + " svelte-88ilm8") &&
          d(t, "class", l),
        u[0] & 32768 &&
          o !==
            (o =
              "songs-list__col songs-list__col--" +
              c[63].key +
              " songs-list__header-col songs-list__header-col--" +
              c[63].key +
              " svelte-88ilm8") &&
          d(e, "class", o),
        u[0] & 32768 && a !== (a = "tracklist-column-header-" + c[63].key) && d(e, "data-testid", a),
        u[0] & 32784 && $(e, "songs-list__reactions", c[63].key === "quaternary" && c[4]));
    },
    d(c) {
      c && m(e);
    },
  };
}
function Zr(i) {
  let e;
  return {
    c() {
      ((e = I("div")), this.h());
    },
    l(t) {
      ((e = S(t, "DIV", { class: !0 })), w(e).forEach(m), this.h());
    },
    h() {
      d(e, "class", "reorder-placeholder svelte-88ilm8");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && m(e);
    },
  };
}
function Jr(i) {
  let e;
  return {
    c() {
      ((e = I("div")), this.h());
    },
    l(t) {
      ((e = S(t, "DIV", { class: !0 })), w(e).forEach(m), this.h());
    },
    h() {
      d(e, "class", "reorder-placeholder svelte-88ilm8");
    },
    m(t, r) {
      P(t, e, r);
    },
    d(t) {
      t && m(e);
    },
  };
}
function Yr(i) {
  let e,
    t,
    r,
    s,
    l,
    n = i[62] === 0 && i[11] && i[1] === -1 && Zr();
  function o(...c) {
    return i[46](i[60], i[62], ...c);
  }
  ((t = new Dn({
    props: {
      item: i[60],
      rowIndex: i[62],
      showSecondColumn: i[7],
      showThirdColumn: i[6],
      showFourthColumn: i[5],
      hasReactions: i[4],
      containerItemDescriptors: i[19],
      containerArtwork: i[24],
      socialProfiles: i[13],
      shouldShowRemoveFromPlaylist: i[17],
      isFirst: i[62] === 0,
      isLast: i[62] === i[3].length - 1,
      dropEnabled: i[14] && !i[11],
      isSelected: i[12].selectedItems.includes(i[60]),
      isLastSelected: i[12].selectedItems[i[12].selectedItems.length - 1] === i[60],
    },
  })),
    t.$on("contextMenuActionComplete", i[45]),
    t.$on("drop", o),
    t.$on("removeFromPlaylist", i[47]));
  let a = i[11] && i[1] === i[62] && Jr();
  return {
    c() {
      (n && n.c(), (e = J()), j(t.$$.fragment), (r = J()), a && a.c(), (s = He()));
    },
    l(c) {
      (n && n.l(c), (e = Y(c)), z(t.$$.fragment, c), (r = Y(c)), a && a.l(c), (s = He()));
    },
    m(c, u) {
      (n && n.m(c, u), P(c, e, u), B(t, c, u), P(c, r, u), a && a.m(c, u), P(c, s, u), (l = !0));
    },
    p(c, u) {
      ((i = c),
        i[62] === 0 && i[11] && i[1] === -1
          ? n || ((n = Zr()), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null)));
      const f = {};
      (u[0] & 8 && (f.item = i[60]),
        u[0] & 128 && (f.showSecondColumn = i[7]),
        u[0] & 64 && (f.showThirdColumn = i[6]),
        u[0] & 32 && (f.showFourthColumn = i[5]),
        u[0] & 16 && (f.hasReactions = i[4]),
        u[0] & 524288 && (f.containerItemDescriptors = i[19]),
        u[0] & 16777216 && (f.containerArtwork = i[24]),
        u[0] & 8192 && (f.socialProfiles = i[13]),
        u[0] & 131072 && (f.shouldShowRemoveFromPlaylist = i[17]),
        u[0] & 8 && (f.isLast = i[62] === i[3].length - 1),
        u[0] & 18432 && (f.dropEnabled = i[14] && !i[11]),
        u[0] & 4104 && (f.isSelected = i[12].selectedItems.includes(i[60])),
        u[0] & 4104 && (f.isLastSelected = i[12].selectedItems[i[12].selectedItems.length - 1] === i[60]),
        t.$set(f),
        i[11] && i[1] === i[62] ? a || ((a = Jr()), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), (a = null)));
    },
    i(c) {
      l || (_(t.$$.fragment, c), (l = !0));
    },
    o(c) {
      (p(t.$$.fragment, c), (l = !1));
    },
    d(c) {
      (c && (m(e), m(r), m(s)), n && n.d(c), O(t, c), a && a.d(c));
    },
  };
}
function Mn(i) {
  let e, t, r, s, l, n, o, a, c;
  const u = [Ln, Pn],
    f = [];
  function h(b, A) {
    return (A[0] & 1 && (t = null), t == null && (t = !!wi(b[0].header)), t ? 0 : 1);
  }
  ((r = h(i, [-1, -1, -1])), (s = f[r] = u[r](i)));
  let E = ze(i[3]),
    g = [];
  for (let b = 0; b < E.length; b += 1) g[b] = Yr(Kr(i, E, b));
  const C = (b) =>
    p(g[b], 1, 1, () => {
      g[b] = null;
    });
  return {
    c() {
      ((e = I("div")), s.c(), (l = J()));
      for (let b = 0; b < g.length; b += 1) g[b].c();
      this.h();
    },
    l(b) {
      e = S(b, "DIV", { class: !0, role: !0, "data-testid": !0 });
      var A = w(e);
      (s.l(A), (l = Y(A)));
      for (let y = 0; y < g.length; y += 1) g[y].l(A);
      (A.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "songs-list svelte-88ilm8"),
        d(e, "role", "grid"),
        d(e, "data-testid", "tracklist"),
        $(e, "songs-list--header-is-visible", i[8]),
        $(e, "songs-list--has-composer-header", i[16]),
        $(e, "songs-list--has-preview", i[23]),
        $(e, "songs-list--album", i[9]),
        $(e, "songs-list--playlist", i[10]),
        $(e, "songs-list--compilation", i[18]));
    },
    m(b, A) {
      (P(b, e, A), f[r].m(e, null), k(e, l));
      for (let y = 0; y < g.length; y += 1) g[y] && g[y].m(e, null);
      ((o = !0),
        a ||
          ((c = [
            Fe(window, "keydown", i[31]),
            Fe(e, "keydown", i[28].handleKeydown),
            et(
              (n = Wt.call(null, e, {
                dragData: { items: i[21], indexedItems: i[20], containerDescriptor: i[2] },
                badgeCount: i[21].length,
                dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
              })),
            ),
          ]),
          (a = !0)));
    },
    p(b, A) {
      let y = r;
      if (
        ((r = h(b, A)),
        r === y
          ? f[r].p(b, A)
          : (ce(),
            p(f[y], 1, 1, () => {
              f[y] = null;
            }),
            ue(),
            (s = f[r]),
            s ? s.p(b, A) : ((s = f[r] = u[r](b)), s.c()),
            _(s, 1),
            s.m(e, l)),
        A[0] & 1762294014)
      ) {
        E = ze(b[3]);
        let v;
        for (v = 0; v < E.length; v += 1) {
          const V = Kr(b, E, v);
          g[v] ? (g[v].p(V, A), _(g[v], 1)) : ((g[v] = Yr(V)), g[v].c(), _(g[v], 1), g[v].m(e, null));
        }
        for (ce(), v = E.length; v < g.length; v += 1) C(v);
        ue();
      }
      (n &&
        Ye(n.update) &&
        A[0] & 3145732 &&
        n.update.call(null, {
          dragData: { items: b[21], indexedItems: b[20], containerDescriptor: b[2] },
          badgeCount: b[21].length,
          dragImage: '[data-current-mouse-target="true"] .artwork-component picture',
        }),
        (!o || A[0] & 256) && $(e, "songs-list--header-is-visible", b[8]),
        (!o || A[0] & 65536) && $(e, "songs-list--has-composer-header", b[16]),
        (!o || A[0] & 8388608) && $(e, "songs-list--has-preview", b[23]),
        (!o || A[0] & 512) && $(e, "songs-list--album", b[9]),
        (!o || A[0] & 1024) && $(e, "songs-list--playlist", b[10]),
        (!o || A[0] & 262144) && $(e, "songs-list--compilation", b[18]));
    },
    i(b) {
      if (!o) {
        _(s);
        for (let A = 0; A < E.length; A += 1) _(g[A]);
        o = !0;
      }
    },
    o(b) {
      (p(s), (g = g.filter(Tn)));
      for (let A = 0; A < g.length; A += 1) p(g[A]);
      o = !1;
    },
    d(b) {
      (b && m(e), f[r].d(), Ft(g, b), (a = !1), dt(c));
    },
  };
}
function Fn(i, e, t) {
  let r,
    s,
    l,
    n,
    o,
    a,
    c,
    u,
    f,
    h,
    E,
    g,
    C,
    b,
    A,
    y,
    v,
    V,
    te,
    N,
    Z,
    W,
    q,
    ie,
    ne,
    X,
    fe,
    ke,
    x,
    G,
    de,
    Pe,
    H = le,
    se = () => (H(), (H = Dt(h, (R) => t(44, (Pe = R)))), h);
  i.$$.on_destroy.push(() => H());
  var U, Q, L, De;
  const ge = Symbol(),
    Te = ct(),
    { state: me } = _t();
  Ce(i, me, (R) => t(49, (de = R)));
  const Ie = Ze();
  Ce(i, Ie, (R) => t(43, (x = R)));
  const oe = Tt(),
    _e = Lt(),
    K = Mt();
  Ce(i, K, (R) => t(12, (G = R)));
  const we = tt(),
    T = Pt("<TrackList>"),
    M = ps();
  let { section: Se } = e;
  const Re = Et();
  let Ae = null,
    Me = null;
  const Oe = () => {
    const R = K.getItems(ge),
      ee = G.selectedItems.map((Ee) => ({ index: R.indexOf(Ee), id: at(Ee) }));
    if ((K.resetItems(ge), K.clearSelection(), K.addItems(ge, a), ee)) {
      const Ee = ee
        .map(({ index: Ne, id: Ue }) => (at(a[Ne]) === Ue ? a[Ne] : a.find((ht) => at(ht) === Ue)))
        .filter(Boolean);
      K.selectMultiple(Ee);
    }
  };
  function D() {
    f === It.Album &&
      a &&
      setTimeout(() => {
        var R;
        qt([Se], (R = de.user) === null || R === void 0 ? void 0 : R.subscriberType, oe, T, we, Te, !0);
      }, 250);
  }
  let re = new Map();
  async function ae(R, ee, { detail: Ee }) {
    if (o && Se.reorderAction && "indexedItems" in Ee.data && Ot(Ee.data.containerDescriptor) === Ot(r)) {
      let Ne = Ee.dropTarget === ft.Top ? ee - 1 : ee;
      (ye(Ne), await _e(Ss(Se.reorderAction, Ne, Ee.data)), Le());
    }
  }
  function ye(R) {
    t(1, (Ae = R));
  }
  async function Le() {
    (clearTimeout(Me), t(1, (Ae = null)), (Me = null), await Es());
  }
  const it = (R) => {
    R.key === "a" && (R.metaKey || R.ctrlKey) && (R.preventDefault(), K.selectAll());
  };
  ut(() => {
    (K.resetItems(ge), Te.unsubscribeFromUpdates(u), bs());
  });
  const st = (R) => {
      Re("catalogActionOnTrackListItem", R.detail);
    },
    lt = (R, ee, ...Ee) => ae(R, ee, ...Ee),
    nt = async (R) => {
      const { itemId: ee } = R.detail,
        Ee = As({ operationType: Cs.RemoveFromPlaylist, id: ee, containerId: Ot(r) });
      await oe.dispatch(Ee);
      const Ne = Ds(ee);
      (await oe.perform(Ne),
        await oe.perform(
          wt({ kind: "libraryItemsDeleted", metadata: { id: ee, type: "library-songs", isLibraryContentId: !0 } }),
        ));
    };
  return (
    (i.$$set = (R) => {
      "section" in R && t(0, (Se = R.section));
    }),
    (i.$$.update = () => {
      if (
        (i.$$.dirty[0] & 1 && t(2, (r = Se.containerContentDescriptor)),
        i.$$.dirty[0] & 1 && t(24, (s = Se.containerArtwork)),
        i.$$.dirty[0] & 1 && t(38, (l = !!Se.canEdit)),
        i.$$.dirty[0] & 2 && t(11, (n = Ae != null)),
        (i.$$.dirty[0] & 2049) | (i.$$.dirty[1] & 128) &&
          t(14, (o = l && oe.isUserInHomeStorefront() && !!Se.reorderAction && !n)),
        i.$$.dirty[0] & 1 && t(3, (a = Se.items || [])),
        i.$$.dirty[0] & 8 && t(23, (c = a.some((R) => R.isPreviewMode))),
        i.$$.dirty[0] & 8 && Oe(),
        i.$$.dirty[0] & 4 && t(36, (u = !!r && Zt({ contentDescriptor: r }))),
        i.$$.dirty[0] & 4 && t(41, (f = r == null ? void 0 : r.kind)),
        i.$$.dirty[1] & 32 && se(t(22, (h = Te.subscribeToUpdates(u)))),
        i.$$.dirty[1] & 9250 &&
          t(42, (E = Pe && !!f && (t(32, (U = Te.get(u, f))) === null || U === void 0 ? void 0 : U.inLibrary))),
        i.$$.dirty[1] & 2048 && D(),
        i.$$.dirty[0] & 4096 &&
          t(
            40,
            (g = (() =>
              G.currentMouseTarget
                ? G.selectedItems.includes(G.currentMouseTarget)
                  ? G.selectedItems
                  : [G.currentMouseTarget]
                : [])()),
          ),
        i.$$.dirty[1] & 512 && t(21, (C = g.map((R) => (R == null ? void 0 : R.contentDescriptor)))),
        (i.$$.dirty[0] & 8) | (i.$$.dirty[1] & 512) &&
          t(20, (b = g.map((R) => ({ index: a.indexOf(R), item: R.contentDescriptor })))),
        i.$$.dirty[0] & 8 && t(19, (A = a.map((R) => R.contentDescriptor))),
        (i.$$.dirty[0] & 1) | (i.$$.dirty[1] & 4) &&
          t(37, (y = t(33, (Q = Se.header)) === null || Q === void 0 ? void 0 : Q.item)),
        i.$$.dirty[0] & 8 &&
          t(
            39,
            (v = (() => {
              var R;
              const ee = (R = a[0]) === null || R === void 0 ? void 0 : R.layoutStyle;
              return typeof ee == "string" ? ee : ee == null ? void 0 : ee.kind;
            })()),
          ),
        i.$$.dirty[1] & 256 && t(9, (V = v === "albumTrackList")),
        i.$$.dirty[1] & 256 && t(18, (te = v === "compilationTrackList")),
        i.$$.dirty[1] & 256 && t(10, (N = v === "playlistTrackList")),
        (i.$$.dirty[0] & 1025) | (i.$$.dirty[1] & 136) &&
          t(
            17,
            (Z =
              t(34, (L = vs(Se.containerContentDescriptor) && N && l && oe.isUserInHomeStorefront())) !== null &&
              L !== void 0
                ? L
                : !1),
          ),
        i.$$.dirty[0] & 1 && t(8, (W = ks(Se.header))),
        i.$$.dirty[0] & 1 && t(16, (q = wi(Se.header))),
        i.$$.dirty[0] & 520 &&
          t(
            7,
            (ie =
              a.some((R) => {
                var ee;
                return (ee = R.subtitleLinks) === null || ee === void 0 ? void 0 : ee.length;
              }) && !V),
          ),
        i.$$.dirty[0] & 8 &&
          t(
            6,
            (ne = a.some((R) => {
              var ee;
              return (ee = R.tertiaryLinks) === null || ee === void 0 ? void 0 : ee.length;
            })),
          ),
        i.$$.dirty[1] & 64 && t(5, (X = !!(y != null && y.fourthColumnText))),
        i.$$.dirty[0] & 8 &&
          t(
            4,
            (fe = a.some((R) => {
              var ee;
              return (ee = R.reactions) === null || ee === void 0 ? void 0 : ee.length;
            })),
          ),
        (i.$$.dirty[0] & 480) | (i.$$.dirty[1] & 4160) &&
          t(
            15,
            (ke = (() => {
              const R = [];
              let ee;
              return (
                W && (ee = y),
                ie &&
                  R.push({
                    key: "secondary",
                    headerText:
                      (ee == null ? void 0 : ee.secondColumnText) || x.t("ASE.Web.Music.SongsListHeaders.artist"),
                  }),
                ne &&
                  R.push({
                    key: "tertiary",
                    headerText:
                      (ee == null ? void 0 : ee.thirdColumnText) || x.t("ASE.Web.Music.SongsListHeaders.album"),
                  }),
                X && R.push({ key: "quaternary", headerText: ee == null ? void 0 : ee.fourthColumnText }),
                [
                  { headerText: "", key: "favorite-or-popular" },
                  {
                    key: "song",
                    headerText:
                      (ee == null ? void 0 : ee.firstColumnText) || x.t("ASE.Web.Music.SongsListHeaders.song"),
                  },
                  ...R,
                  { headerText: x.t("ASE.Web.Music.SongsListHeaders.time"), key: "time" },
                ]
              );
            })()),
          ),
        (i.$$.dirty[0] & 25) | (i.$$.dirty[1] & 16))
      ) {
        if (!(t(35, (De = Se.collaborators)) === null || De === void 0) && De.length)
          ws(new Map(Se.collaborators.map((R) => [R.id, R])));
        else if (M) {
          let R = a
            .map((Ee) => {
              var Ne, Ue;
              return (Ue =
                (Ne = Ee.socialProfileContentDescriptor) === null || Ne === void 0 ? void 0 : Ne.identifiers) ===
                null || Ue === void 0
                ? void 0
                : Ue.socialProfileID;
            })
            .filter((Ee) => Ee != null);
          const ee = new Set(R);
          ee.size > 0 &&
            M.fetchProfilesFromIds(Array.from(ee)).then((Ee) => {
              t(13, (re = new Map(Ee.map((Ne) => [Ne.id, Ne]))));
            });
        }
        fe && a.length && ys(new Map(a.map((R) => [R.contentDescriptor.identifiers.storeAdamID, R.reactions])));
      }
    }),
    [
      Se,
      Ae,
      r,
      a,
      fe,
      X,
      ne,
      ie,
      W,
      V,
      N,
      n,
      G,
      re,
      o,
      ke,
      q,
      Z,
      te,
      A,
      b,
      C,
      h,
      c,
      s,
      me,
      Ie,
      oe,
      K,
      Re,
      ae,
      it,
      U,
      Q,
      L,
      De,
      u,
      y,
      l,
      v,
      g,
      f,
      E,
      x,
      Pe,
      st,
      lt,
      nt,
    ]
  );
}
class Vn extends Ve {
  constructor(e) {
    (super(), $e(this, e, Fn, Mn, je, { section: 0 }, null, [-1, -1, -1]));
  }
}
function $n(i) {
  let e, t;
  return (
    (e = new Ts({ props: { initials: ar(i[0].name) } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s & 1 && (l.initials = ar(r[0].name)), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Rn(i) {
  let e, t;
  return (
    (e = new fi({ props: { artwork: i[0].artwork, forceFullWidth: !1, profile: "track-lockup", alt: "" } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s & 1 && (l.artwork = r[0].artwork), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Nn(i) {
  let e = i[0] + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s & 1 && e !== (e = r[0] + "") && ve(t, e);
    },
    d(r) {
      r && m(t);
    },
  };
}
function Qr(i) {
  let e, t, r;
  return (
    (t = new yi({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((e = I("div")), j(t.$$.fragment), this.h());
      },
      l(s) {
        e = S(s, "DIV", { class: !0 });
        var l = w(e);
        (z(t.$$.fragment, l), l.forEach(m), this.h());
      },
      h() {
        d(e, "class", "chevron-container svelte-16yxrct");
      },
      m(s, l) {
        (P(s, e, l), B(t, e, null), (r = !0));
      },
      i(s) {
        r || (_(t.$$.fragment, s), (r = !0));
      },
      o(s) {
        (p(t.$$.fragment, s), (r = !1));
      },
      d(s) {
        (s && m(e), O(t));
      },
    }
  );
}
function Hn(i) {
  let e,
    t,
    r,
    s,
    l,
    n,
    o,
    a = i[0].name + "",
    c,
    u,
    f,
    h,
    E,
    g;
  const C = [Rn, $n],
    b = [];
  function A(v, V) {
    return v[0].artwork ? 0 : 1;
  }
  ((r = A(i)),
    (s = b[r] = C[r](i)),
    (h = new rt({
      props: {
        items: i[0].roleNames,
        translateFn: i[1].t,
        $$slots: { default: [Nn, ({ item: v }) => ({ 0: v }), ({ item: v }) => (v ? 1 : 0)] },
        $$scope: { ctx: i },
      },
    })));
  let y = i[0].segue && Qr();
  return {
    c() {
      ((e = I("div")),
        (t = I("div")),
        s.c(),
        (l = J()),
        (n = I("div")),
        (o = I("div")),
        (c = pe(a)),
        (u = J()),
        (f = I("div")),
        j(h.$$.fragment),
        (E = J()),
        y && y.c(),
        this.h());
    },
    l(v) {
      e = S(v, "DIV", { class: !0 });
      var V = w(e);
      t = S(V, "DIV", { class: !0 });
      var te = w(t);
      (s.l(te), te.forEach(m), (l = Y(V)), (n = S(V, "DIV", { class: !0 })));
      var N = w(n);
      o = S(N, "DIV", { class: !0 });
      var Z = w(o);
      ((c = be(Z, a)), Z.forEach(m), (u = Y(N)), (f = S(N, "DIV", { class: !0 })));
      var W = w(f);
      (z(h.$$.fragment, W), W.forEach(m), N.forEach(m), (E = Y(V)), y && y.l(V), V.forEach(m), this.h());
    },
    h() {
      (d(t, "class", "artist-artwork svelte-16yxrct"),
        d(o, "class", "artist-name svelte-16yxrct"),
        d(f, "class", "artist-roles svelte-16yxrct"),
        d(n, "class", "artist-metadata svelte-16yxrct"),
        d(e, "class", "credit-lockup__container svelte-16yxrct"));
    },
    m(v, V) {
      (P(v, e, V),
        k(e, t),
        b[r].m(t, null),
        k(e, l),
        k(e, n),
        k(n, o),
        k(o, c),
        k(n, u),
        k(n, f),
        B(h, f, null),
        k(e, E),
        y && y.m(e, null),
        (g = !0));
    },
    p(v, V) {
      let te = r;
      ((r = A(v)),
        r === te
          ? b[r].p(v, V)
          : (ce(),
            p(b[te], 1, 1, () => {
              b[te] = null;
            }),
            ue(),
            (s = b[r]),
            s ? s.p(v, V) : ((s = b[r] = C[r](v)), s.c()),
            _(s, 1),
            s.m(t, null)),
        (!g || V & 1) && a !== (a = v[0].name + "") && ve(c, a));
      const N = {};
      (V & 1 && (N.items = v[0].roleNames),
        V & 2 && (N.translateFn = v[1].t),
        V & 9 && (N.$$scope = { dirty: V, ctx: v }),
        h.$set(N),
        v[0].segue
          ? y
            ? V & 1 && _(y, 1)
            : ((y = Qr()), y.c(), _(y, 1), y.m(e, null))
          : y &&
            (ce(),
            p(y, 1, 1, () => {
              y = null;
            }),
            ue()));
    },
    i(v) {
      g || (_(s), _(h.$$.fragment, v), _(y), (g = !0));
    },
    o(v) {
      (p(s), p(h.$$.fragment, v), p(y), (g = !1));
    },
    d(v) {
      (v && m(e), b[r].d(), O(h), y && y.d());
    },
  };
}
function jn(i) {
  let e, t;
  return (
    (e = new Je({ props: { action: i[0].segue, $$slots: { default: [Hn] }, $$scope: { ctx: i } } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, [s]) {
        const l = {};
        (s & 1 && (l.action = r[0].segue), s & 11 && (l.$$scope = { dirty: s, ctx: r }), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Bn(i, e, t) {
  let r,
    { item: s } = e;
  const l = Ze();
  return (
    Ce(i, l, (n) => t(1, (r = n))),
    (i.$$set = (n) => {
      "item" in n && t(0, (s = n.item));
    }),
    [s, r, l]
  );
}
class On extends Ve {
  constructor(e) {
    (super(), $e(this, e, Bn, jn, je, { item: 0 }));
  }
}
function Xr(i, e, t) {
  const r = i.slice();
  return ((r[25] = e[t]), r);
}
function xr(i) {
  let e,
    t = i[25] + "",
    r;
  return {
    c() {
      ((e = I("p")), (r = pe(t)), this.h());
    },
    l(s) {
      e = S(s, "P", { class: !0 });
      var l = w(e);
      ((r = be(l, t)), l.forEach(m), this.h());
    },
    h() {
      d(e, "class", "credits__lyrics-snippet-line svelte-15ugb9h");
    },
    m(s, l) {
      (P(s, e, l), k(e, r));
    },
    p(s, l) {
      l & 32 && t !== (t = s[25] + "") && ve(r, t);
    },
    d(s) {
      s && m(e);
    },
  };
}
function zn(i) {
  let e =
      (i[4] ? i[1].t("ASE.Web.Music.View.Full.Lyrics") : i[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "",
    t,
    r,
    s,
    l;
  return (
    (s = new yi({ props: { class: "chevron", "aria-hidden": "true" } })),
    {
      c() {
        ((t = pe(e)), (r = J()), j(s.$$.fragment));
      },
      l(n) {
        ((t = be(n, e)), (r = Y(n)), z(s.$$.fragment, n));
      },
      m(n, o) {
        (P(n, t, o), P(n, r, o), B(s, n, o), (l = !0));
      },
      p(n, o) {
        (!l || o & 18) &&
          e !==
            (e =
              (n[4]
                ? n[1].t("ASE.Web.Music.View.Full.Lyrics")
                : n[1].t("ASE.Web.Music.View.Full.Lyrics.Unsubscribed")) + "") &&
          ve(t, e);
      },
      i(n) {
        l || (_(s.$$.fragment, n), (l = !0));
      },
      o(n) {
        (p(s.$$.fragment, n), (l = !1));
      },
      d(n) {
        (n && (m(t), m(r)), O(s, n));
      },
    }
  );
}
function ei(i) {
  let e, t, r, s, l;
  return (
    (t = new Hs({ props: { maskSvg: js, inverted: i[8], maskWidth: 22, maskHeight: 22 } })),
    {
      c() {
        ((e = I("button")), j(t.$$.fragment), this.h());
      },
      l(n) {
        e = S(n, "BUTTON", { class: !0 });
        var o = w(e);
        (z(t.$$.fragment, o), o.forEach(m), this.h());
      },
      h() {
        d(e, "class", "lyrics-contextual-button svelte-15ugb9h");
      },
      m(n, o) {
        (P(n, e, o), B(t, e, null), (r = !0), s || ((l = Fe(e, "click", i[18])), (s = !0)));
      },
      p(n, o) {
        const a = {};
        (o & 256 && (a.inverted = n[8]), t.$set(a));
      },
      i(n) {
        r || (_(t.$$.fragment, n), (r = !0));
      },
      o(n) {
        (p(t.$$.fragment, n), (r = !1));
      },
      d(n) {
        (n && m(e), O(t), (s = !1), l());
      },
    }
  );
}
function Wn(i) {
  let e,
    t,
    r = i[3] && ei(i);
  return {
    c() {
      ((e = I("div")), r && r.c(), this.h());
    },
    l(s) {
      e = S(s, "DIV", { slot: !0, class: !0 });
      var l = w(e);
      (r && r.l(l), l.forEach(m), this.h());
    },
    h() {
      (d(e, "slot", "button-container"), d(e, "class", "button-container svelte-15ugb9h"));
    },
    m(s, l) {
      (P(s, e, l), r && r.m(e, null), (t = !0));
    },
    p(s, l) {
      s[3]
        ? r
          ? (r.p(s, l), l & 8 && _(r, 1))
          : ((r = ei(s)), r.c(), _(r, 1), r.m(e, null))
        : r &&
          (ce(),
          p(r, 1, 1, () => {
            r = null;
          }),
          ue());
    },
    i(s) {
      t || (_(r), (t = !0));
    },
    o(s) {
      (p(r), (t = !1));
    },
    d(s) {
      (s && m(e), r && r.d());
    },
  };
}
function Un(i) {
  let e, t, r, s, l;
  return {
    c() {
      ((e = I("div")), (t = I("amp-lyrics")), this.h());
    },
    l(n) {
      e = S(n, "DIV", { slot: !0 });
      var o = w(e);
      ((t = S(o, "AMP-LYRICS", {
        "static-lyrics": !0,
        "catalog-id": !0,
        "show-translation": !0,
        "show-pronunciation": !0,
        "enable-translations": !0,
        class: !0,
      })),
        w(t).forEach(m),
        o.forEach(m),
        this.h());
    },
    h() {
      (Qe(t, "static-lyrics", !0),
        Qe(t, "catalog-id", (r = i[0].songId)),
        Qe(t, "show-translation", i[8]),
        Qe(t, "show-pronunciation", !1),
        Qe(t, "enable-translations", !0),
        Qe(t, "class", "svelte-15ugb9h"),
        d(e, "slot", "content"));
    },
    m(n, o) {
      (P(n, e, o), k(e, t), s || ((l = Fe(t, "lyricsReady", i[13])), (s = !0)));
    },
    p(n, o) {
      (o & 1 && r !== (r = n[0].songId) && Qe(t, "catalog-id", r), o & 256 && Qe(t, "show-translation", n[8]));
    },
    d(n) {
      (n && m(e), (s = !1), l());
    },
  };
}
function Kn(i) {
  let e, t;
  return (
    (e = new Rs({
      props: {
        title: i[7],
        subtitle: i[6],
        translateFn: i[1].t,
        $$slots: { content: [Un], "button-container": [Wn] },
        $$scope: { ctx: i },
      },
    })),
    e.$on("close", function () {
      Ye(i[2].close) && i[2].close.apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        i = r;
        const l = {};
        (s & 128 && (l.title = i[7]),
          s & 64 && (l.subtitle = i[6]),
          s & 2 && (l.translateFn = i[1].t),
          s & 268435721 && (l.$$scope = { dirty: s, ctx: i }),
          e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function qn(i) {
  let e,
    t,
    r,
    s,
    l,
    n,
    o,
    a = ze(i[5]),
    c = [];
  for (let f = 0; f < a.length; f += 1) c[f] = xr(Xr(i, a, f));
  ((r = new Ps({ props: { buttonStyle: "textButton", $$slots: { default: [zn] }, $$scope: { ctx: i } } })),
    r.$on("buttonClick", i[11]));
  let u = { modalTriggerElement: Gn, $$slots: { default: [Kn] }, $$scope: { ctx: i } };
  return (
    (n = new Ls({ props: u })),
    i[19](n),
    n.$on("close", i[12]),
    {
      c() {
        e = I("div");
        for (let f = 0; f < c.length; f += 1) c[f].c();
        ((t = J()), j(r.$$.fragment), (s = J()), (l = I("div")), j(n.$$.fragment), this.h());
      },
      l(f) {
        e = S(f, "DIV", { class: !0, "data-testid": !0 });
        var h = w(e);
        for (let g = 0; g < c.length; g += 1) c[g].l(h);
        ((t = Y(h)), z(r.$$.fragment, h), h.forEach(m), (s = Y(f)), (l = S(f, "DIV", { class: !0 })));
        var E = w(l);
        (z(n.$$.fragment, E), E.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "credits__lyrics-snippet svelte-15ugb9h"),
          d(e, "data-testid", "credits__lyrics-snippet"),
          d(l, "class", "credits__lyrics-modal svelte-15ugb9h"));
      },
      m(f, h) {
        P(f, e, h);
        for (let E = 0; E < c.length; E += 1) c[E] && c[E].m(e, null);
        (k(e, t), B(r, e, null), P(f, s, h), P(f, l, h), B(n, l, null), (o = !0));
      },
      p(f, [h]) {
        if (h & 32) {
          a = ze(f[5]);
          let C;
          for (C = 0; C < a.length; C += 1) {
            const b = Xr(f, a, C);
            c[C] ? c[C].p(b, h) : ((c[C] = xr(b)), c[C].c(), c[C].m(e, t));
          }
          for (; C < c.length; C += 1) c[C].d(1);
          c.length = a.length;
        }
        const E = {};
        (h & 268435474 && (E.$$scope = { dirty: h, ctx: f }), r.$set(E));
        const g = {};
        (h & 268435919 && (g.$$scope = { dirty: h, ctx: f }), n.$set(g));
      },
      i(f) {
        o || (_(r.$$.fragment, f), _(n.$$.fragment, f), (o = !0));
      },
      o(f) {
        (p(r.$$.fragment, f), p(n.$$.fragment, f), (o = !1));
      },
      d(f) {
        (f && (m(e), m(s), m(l)), Ft(c, f), O(r), i[19](null), O(n));
      },
    }
  );
}
let Gn = null;
function Zn(i, e, t) {
  let r, s, l, n, o, a, c, u;
  Ce(i, cr, (X) => t(8, (a = X)));
  var f, h;
  let { section: E } = e;
  const g = Ze();
  Ce(i, g, (X) => t(1, (u = X)));
  const { state: C } = _t();
  Ce(i, C, (X) => t(17, (c = X)));
  const b = Tt(),
    A = tt();
  let y,
    v = null;
  const V = () => {
      if (o) (y.showModal(), N(), W && (v = Date.now()));
      else {
        const X = Ms({ type: Fs.Open, activePath: Vs.subscribe });
        b.perform(X);
      }
    },
    te = () => {
      if (v) {
        const X = Date.now() - v;
        (Ns(b, W, A.storefront, a, X), (v = null));
      }
    },
    N = () => {
      (b.recordCustomMetricsEvent({
        actionType: "navigate",
        targetType: "button",
        targetId: "lyrics",
        eventType: "click",
      }),
        b.recordCustomMetricsEvent({ eventType: "page", pageDisplayType: "cardView", pageType: "Lyrics" }));
    };
  let Z = !1,
    W = null;
  function q(X) {
    (t(3, (Z = X.detail.hasTranslations)),
      (W = { lyricsId: X.detail.lyricsId, language: X.detail.language, catalogId: X.detail.catalogId }));
  }
  const ie = () => $s(cr, (a = !a), a);
  function ne(X) {
    Kt[X ? "unshift" : "push"](() => {
      ((y = X), t(2, y));
    });
  }
  return (
    (i.$$set = (X) => {
      "section" in X && t(14, (E = X.section));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 16384 && t(0, (r = E.items[0])),
        i.$$.dirty & 1 && t(7, (s = r.name)),
        i.$$.dirty & 3 &&
          t(
            6,
            (l = u.t("ASE.Web.Music.ContentA.Middot.ContentB.Middot.ContentC", {
              contentA: r.albumName,
              contentB: r.artistName,
              contentC: r.releaseDate,
            })),
          ),
        i.$$.dirty & 32769 &&
          t(
            5,
            (n =
              t(15, (f = r.lyricsExcerpt)) === null || f === void 0
                ? void 0
                : f.split(`
`)),
          ),
        i.$$.dirty & 196608 &&
          t(
            4,
            (o = vi(t(16, (h = c == null ? void 0 : c.user)) === null || h === void 0 ? void 0 : h.subscriberType)),
          ));
    }),
    [r, u, y, Z, o, n, l, s, a, g, C, V, te, q, E, f, h, c, ie, ne]
  );
}
class Jn extends Ve {
  constructor(e) {
    (super(), $e(this, e, Zn, qn, je, { section: 14 }));
  }
}
function Yn(i) {
  let e, t;
  return (
    (e = new Bs({ props: { itemComponent: i[1], section: i[0] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s & 2 && (l.itemComponent = r[1]), s & 1 && (l.section = r[0]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Qn(i) {
  let e, t;
  return (
    (e = new Jn({ props: { section: i[0] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(r) {
        z(e.$$.fragment, r);
      },
      m(r, s) {
        (B(e, r, s), (t = !0));
      },
      p(r, s) {
        const l = {};
        (s & 1 && (l.section = r[0]), e.$set(l));
      },
      i(r) {
        t || (_(e.$$.fragment, r), (t = !0));
      },
      o(r) {
        (p(e.$$.fragment, r), (t = !1));
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Xn(i) {
  var E;
  let e,
    t,
    r = (i[2] ? i[3].t("ASE.Web.Music.MediaComponents.Lyrics.Header") : (E = i[0]) == null ? void 0 : E.title) + "",
    s,
    l,
    n,
    o,
    a,
    c;
  const u = [Qn, Yn],
    f = [];
  function h(g, C) {
    return g[2] ? 0 : 1;
  }
  return (
    (o = h(i)),
    (a = f[o] = u[o](i)),
    {
      c() {
        ((e = I("section")), (t = I("h2")), (s = pe(r)), (l = J()), (n = I("div")), a.c(), this.h());
      },
      l(g) {
        e = S(g, "SECTION", { class: !0, "data-testid": !0 });
        var C = w(e);
        t = S(C, "H2", { class: !0, "data-testid": !0 });
        var b = w(t);
        ((s = be(b, r)), b.forEach(m), (l = Y(C)), (n = S(C, "DIV", { class: !0 })));
        var A = w(n);
        (a.l(A), A.forEach(m), C.forEach(m), this.h());
      },
      h() {
        (d(t, "class", "cell-title svelte-1tqjbs7"),
          d(t, "data-testid", "cell-title"),
          d(n, "class", "cell-details svelte-1tqjbs7"),
          d(e, "class", "cell-container svelte-1tqjbs7"),
          d(e, "data-testid", "cell-container"));
      },
      m(g, C) {
        (P(g, e, C), k(e, t), k(t, s), k(e, l), k(e, n), f[o].m(n, null), (c = !0));
      },
      p(g, [C]) {
        var A;
        (!c || C & 13) &&
          r !==
            (r =
              (g[2] ? g[3].t("ASE.Web.Music.MediaComponents.Lyrics.Header") : (A = g[0]) == null ? void 0 : A.title) +
              "") &&
          ve(s, r);
        let b = o;
        ((o = h(g)),
          o === b
            ? f[o].p(g, C)
            : (ce(),
              p(f[b], 1, 1, () => {
                f[b] = null;
              }),
              ue(),
              (a = f[o]),
              a ? a.p(g, C) : ((a = f[o] = u[o](g)), a.c()),
              _(a, 1),
              a.m(n, null)));
      },
      i(g) {
        c || (_(a), (c = !0));
      },
      o(g) {
        (p(a), (c = !1));
      },
      d(g) {
        (g && m(e), f[o].d());
      },
    }
  );
}
const xn = "lyric-details";
function eo(i, e, t) {
  let r,
    s,
    l,
    { section: n } = e;
  const o = Ze();
  return (
    Ce(i, o, (a) => t(3, (l = a))),
    (i.$$set = (a) => {
      "section" in a && t(0, (n = a.section));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 1 && t(2, (r = n.id === xn));
    }),
    t(1, (s = On)),
    [n, s, r, l, o]
  );
}
class to extends Ve {
  constructor(e) {
    (super(), $e(this, e, eo, Xn, je, { section: 0 }));
  }
}
function ti(i, e, t) {
  const r = i.slice();
  return ((r[2] = e[t]), r);
}
function ri(i) {
  let e,
    t,
    r = ze(i[0].items),
    s = [];
  for (let n = 0; n < r.length; n += 1) s[n] = ii(ti(i, r, n));
  const l = (n) =>
    p(s[n], 1, 1, () => {
      s[n] = null;
    });
  return {
    c() {
      e = I("ul");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = S(n, "UL", { class: !0, "data-testid": !0 });
      var o = w(e);
      for (let a = 0; a < s.length; a += 1) s[a].l(o);
      (o.forEach(m), this.h());
    },
    h() {
      (d(e, "class", "calendar-events-list svelte-57psqt"), d(e, "data-testid", "events-list"));
    },
    m(n, o) {
      P(n, e, o);
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(e, null);
      t = !0;
    },
    p(n, o) {
      if (o & 1) {
        r = ze(n[0].items);
        let a;
        for (a = 0; a < r.length; a += 1) {
          const c = ti(n, r, a);
          s[a] ? (s[a].p(c, o), _(s[a], 1)) : ((s[a] = ii(c)), s[a].c(), _(s[a], 1), s[a].m(e, null));
        }
        for (ce(), a = r.length; a < s.length; a += 1) l(a);
        ue();
      }
    },
    i(n) {
      if (!t) {
        for (let o = 0; o < r.length; o += 1) _(s[o]);
        t = !0;
      }
    },
    o(n) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1) p(s[o]);
      t = !1;
    },
    d(n) {
      (n && m(e), Ft(s, n));
    },
  };
}
function ii(i) {
  let e, t, r, s;
  return (
    (t = new Os({ props: { item: i[2], badgeTheme: "light" } })),
    {
      c() {
        ((e = I("li")), j(t.$$.fragment), (r = J()), this.h());
      },
      l(l) {
        e = S(l, "LI", { class: !0, "data-testid": !0 });
        var n = w(e);
        (z(t.$$.fragment, n), (r = Y(n)), n.forEach(m), this.h());
      },
      h() {
        (d(e, "class", "calendar-events-list-item svelte-57psqt"), d(e, "data-testid", "events-list-item"));
      },
      m(l, n) {
        (P(l, e, n), B(t, e, null), k(e, r), (s = !0));
      },
      p(l, n) {
        const o = {};
        (n & 1 && (o.item = l[2]), t.$set(o));
      },
      i(l) {
        s || (_(t.$$.fragment, l), (s = !0));
      },
      o(l) {
        (p(t.$$.fragment, l), (s = !1));
      },
      d(l) {
        (l && m(e), O(t));
      },
    }
  );
}
function ro(i) {
  let e,
    t,
    r = i[1].length && ri(i);
  return {
    c() {
      (r && r.c(), (e = He()));
    },
    l(s) {
      (r && r.l(s), (e = He()));
    },
    m(s, l) {
      (r && r.m(s, l), P(s, e, l), (t = !0));
    },
    p(s, [l]) {
      s[1].length
        ? r
          ? (r.p(s, l), l & 2 && _(r, 1))
          : ((r = ri(s)), r.c(), _(r, 1), r.m(e.parentNode, e))
        : r &&
          (ce(),
          p(r, 1, 1, () => {
            r = null;
          }),
          ue());
    },
    i(s) {
      t || (_(r), (t = !0));
    },
    o(s) {
      (p(r), (t = !1));
    },
    d(s) {
      (s && m(e), r && r.d(s));
    },
  };
}
function io(i, e, t) {
  let r,
    { section: s } = e;
  return (
    (i.$$set = (l) => {
      "section" in l && t(0, (s = l.section));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 1 && t(1, (r = s.items));
    }),
    [s, r]
  );
}
class so extends Ve {
  constructor(e) {
    (super(), $e(this, e, io, ro, je, { section: 0 }));
  }
}
function lo(i) {
  let e = i[3].warn("unsupported list section:", i[1], i[0]) + "",
    t;
  return {
    c() {
      t = pe(e);
    },
    l(r) {
      t = be(r, e);
    },
    m(r, s) {
      P(r, t, s);
    },
    p(r, s) {
      s & 3 && e !== (e = r[3].warn("unsupported list section:", r[1], r[0]) + "") && ve(t, e);
    },
    i: le,
    o: le,
    d(r) {
      r && m(t);
    },
  };
}
function no(i) {
  let e, t, r;
  var s = i[2];
  function l(n, o) {
    return { props: { section: n[0] } };
  }
  return (
    s && (e = ur(s, l(i))),
    {
      c() {
        (e && j(e.$$.fragment), (t = He()));
      },
      l(n) {
        (e && z(e.$$.fragment, n), (t = He()));
      },
      m(n, o) {
        (e && B(e, n, o), P(n, t, o), (r = !0));
      },
      p(n, o) {
        if (o & 4 && s !== (s = n[2])) {
          if (e) {
            ce();
            const a = e;
            (p(a.$$.fragment, 1, 0, () => {
              O(a, 1);
            }),
              ue());
          }
          s ? ((e = ur(s, l(n))), j(e.$$.fragment), _(e.$$.fragment, 1), B(e, t.parentNode, t)) : (e = null);
        } else if (s) {
          const a = {};
          (o & 1 && (a.section = n[0]), e.$set(a));
        }
      },
      i(n) {
        r || (e && _(e.$$.fragment, n), (r = !0));
      },
      o(n) {
        (e && p(e.$$.fragment, n), (r = !1));
      },
      d(n) {
        (n && m(t), e && O(e, n));
      },
    }
  );
}
function oo(i) {
  let e, t, r, s;
  const l = [no, lo],
    n = [];
  function o(a, c) {
    return a[2] ? 0 : 1;
  }
  return (
    (e = o(i)),
    (t = n[e] = l[e](i)),
    {
      c() {
        (t.c(), (r = He()));
      },
      l(a) {
        (t.l(a), (r = He()));
      },
      m(a, c) {
        (n[e].m(a, c), P(a, r, c), (s = !0));
      },
      p(a, [c]) {
        let u = e;
        ((e = o(a)),
          e === u
            ? n[e].p(a, c)
            : (ce(),
              p(n[u], 1, 1, () => {
                n[u] = null;
              }),
              ue(),
              (t = n[e]),
              t ? t.p(a, c) : ((t = n[e] = l[e](a)), t.c()),
              _(t, 1),
              t.m(r.parentNode, r)));
      },
      i(a) {
        s || (_(t), (s = !0));
      },
      o(a) {
        (p(t), (s = !1));
      },
      d(a) {
        (a && m(r), n[e].d(a));
      },
    }
  );
}
function ao(i, e, t) {
  let r, s;
  const l = Pt("<ListSection>");
  let { section: n } = e;
  const o = {
    libraryArtists: wl,
    librarySongs: Rl,
    trackLockup: Vn,
    songDetailItemLockup: to,
    calendarEventLockup: so,
  };
  return (
    (i.$$set = (a) => {
      "section" in a && t(0, (n = a.section));
    }),
    (i.$$.update = () => {
      (i.$$.dirty & 1 && t(1, (r = n.itemKind)), i.$$.dirty & 2 && t(2, (s = o[r])));
    }),
    [n, r, s, l]
  );
}
class ho extends Ve {
  constructor(e) {
    (super(), $e(this, e, ao, oo, je, { section: 0 }));
  }
}
export { ho as default };
