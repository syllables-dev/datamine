const k = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  appendChildSlotFix: !1,
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  scriptDataOpts: !1,
  scopedSlotTextContentFix: !1,
  shadowDomShim: !1,
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0,
  patchPseudoShadowDom: !1,
};
let b,
  ee,
  D,
  te = !1,
  P = !1,
  M = !1,
  p = !1,
  C = null,
  _ = !1;
const nt = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
  lt = (e) => {
    const t = new URL(e, g.$resourcesUrl$);
    return t.origin !== A.location.origin ? t.href : t.pathname;
  },
  ot = (e) => (g.$resourcesUrl$ = e),
  m =
    (e, t = "") =>
    () => {},
  I = "http://www.w3.org/1999/xlink",
  W = {},
  pe = "http://www.w3.org/2000/svg",
  he = "http://www.w3.org/1999/xhtml",
  ye = (e) => e != null,
  H = (e) => ((e = typeof e), e === "object" || e === "function");
function ve(e) {
  var t, n, s;
  return (s =
    (n = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null ||
    n === void 0
      ? void 0
      : n.getAttribute("content")) !== null && s !== void 0
    ? s
    : void 0;
}
const se = (e, t, ...n) => {
    let s = null,
      l = null,
      i = null,
      o = !1,
      c = !1;
    const r = [],
      $ = (f) => {
        for (let d = 0; d < f.length; d++)
          ((s = f[d]),
            Array.isArray(s)
              ? $(s)
              : s != null &&
                typeof s != "boolean" &&
                ((o = typeof e != "function" && !H(s)) && (s = String(s)),
                o && c ? (r[r.length - 1].$text$ += s) : r.push(o ? U(null, s) : s),
                (c = o)));
      };
    if (($(n), t)) {
      (t.key && (l = t.key), t.name && (i = t.name));
      {
        const f = t.className || t.class;
        f &&
          (t.class =
            typeof f != "object"
              ? f
              : Object.keys(f)
                  .filter((d) => f[d])
                  .join(" "));
      }
    }
    if (typeof e == "function") return e(t === null ? {} : t, r, ke);
    const a = U(e, null);
    return ((a.$attrs$ = t), r.length > 0 && (a.$children$ = r), (a.$key$ = l), (a.$name$ = i), a);
  },
  U = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return ((n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n);
  },
  Se = {},
  me = (e) => e && e.$tag$ === Se,
  ke = { forEach: (e, t) => e.map(z).forEach(t), map: (e, t) => e.map(z).map(t).map(be) },
  z = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  be = (e) => {
    if (typeof e.vtag == "function") {
      const n = Object.assign({}, e.vattrs);
      return (e.vkey && (n.key = e.vkey), e.vname && (n.name = e.vname), se(e.vtag, n, ...(e.vchildren || [])));
    }
    const t = U(e.vtag, e.vtext);
    return ((t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t);
  },
  Le = (e) => Je.map((t) => t(e)).find((t) => !!t),
  Te = (e, t) =>
    e != null && !H(e)
      ? t & 4
        ? e === "false"
          ? !1
          : e === "" || !!e
        : t & 2
          ? parseFloat(e)
          : t & 1
            ? String(e)
            : e
      : e,
  xe = (e) => e,
  it = (e, t, n) => {
    const s = xe(e);
    return { emit: (l) => Ee(s, t, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: l }) };
  },
  Ee = (e, t, n) => {
    const s = g.ce(t, n);
    return (e.dispatchEvent(s), s);
  },
  q = new WeakMap(),
  Re = (e, t, n) => {
    let s = B.get(e);
    (Ve && n ? ((s = s || new CSSStyleSheet()), typeof s == "string" ? (s = t) : s.replaceSync(t)) : (s = t),
      B.set(e, s));
  },
  Ae = (e, t, n) => {
    var s;
    const l = ne(t, n),
      i = B.get(l);
    if (((e = e.nodeType === 11 ? e : y), i))
      if (typeof i == "string") {
        e = e.head || e;
        let o = q.get(e),
          c;
        if ((o || q.set(e, (o = new Set())), !o.has(l))) {
          {
            ((c = y.createElement("style")), (c.innerHTML = i));
            const r = (s = g.$nonce$) !== null && s !== void 0 ? s : ve(y);
            (r != null && c.setAttribute("nonce", r), e.insertBefore(c, e.querySelector("link")));
          }
          o && o.add(l);
        }
      } else e.adoptedStyleSheets.includes(i) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, i]);
    return l;
  },
  Oe = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      s = t.$flags$,
      l = m("attachStyles", t.$tagName$),
      i = Ae(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    (s & 10 && ((n["s-sc"] = i), n.classList.add(i + "-h"), s & 2 && n.classList.add(i + "-s")), l());
  },
  ne = (e, t) => "sc-" + (t && e.$flags$ & 32 ? e.$tagName$ + "-" + t : e.$tagName$),
  Q = (e, t, n, s, l, i) => {
    if (n !== s) {
      let o = Y(e, t),
        c = t.toLowerCase();
      if (t === "class") {
        const r = e.classList,
          $ = K(n),
          a = K(s);
        (r.remove(...$.filter((f) => f && !a.includes(f))), r.add(...a.filter((f) => f && !$.includes(f))));
      } else if (t === "style") {
        for (const r in n) (!s || s[r] == null) && (r.includes("-") ? e.style.removeProperty(r) : (e.style[r] = ""));
        for (const r in s)
          (!n || s[r] !== n[r]) && (r.includes("-") ? e.style.setProperty(r, s[r]) : (e.style[r] = s[r]));
      } else if (t !== "key")
        if (t === "ref") s && s(e);
        else if (!e.__lookupSetter__(t) && t[0] === "o" && t[1] === "n")
          (t[2] === "-" ? (t = t.slice(3)) : Y(A, c) ? (t = c.slice(2)) : (t = c[2] + t.slice(3)),
            n && g.rel(e, t, n, !1),
            s && g.ael(e, t, s, !1));
        else {
          const r = H(s);
          if ((o || (r && s !== null)) && !l)
            try {
              if (e.tagName.includes("-")) e[t] = s;
              else {
                const a = s == null ? "" : s;
                t === "list" ? (o = !1) : (n == null || e[t] != a) && (e[t] = a);
              }
            } catch (a) {}
          let $ = !1;
          (c !== (c = c.replace(/^xlink\:?/, "")) && ((t = c), ($ = !0)),
            s == null || s === !1
              ? (s !== !1 || e.getAttribute(t) === "") && ($ ? e.removeAttributeNS(I, t) : e.removeAttribute(t))
              : (!o || i & 4 || l) &&
                !r &&
                ((s = s === !0 ? "" : s), $ ? e.setAttributeNS(I, t, s) : e.setAttribute(t, s)));
        }
    }
  },
  Pe = /\s/,
  K = (e) => (e ? e.split(Pe) : []),
  le = (e, t, n, s) => {
    const l = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      i = (e && e.$attrs$) || W,
      o = t.$attrs$ || W;
    for (s in i) s in o || Q(l, s, i[s], void 0, n, t.$flags$);
    for (s in o) Q(l, s, i[s], o[s], n, t.$flags$);
  },
  j = (e, t, n, s) => {
    const l = t.$children$[n];
    let i = 0,
      o,
      c,
      r;
    if (
      (te || ((M = !0), l.$tag$ === "slot" && (b && s.classList.add(b + "-s"), (l.$flags$ |= l.$children$ ? 2 : 1))),
      l.$text$ !== null)
    )
      o = l.$elm$ = y.createTextNode(l.$text$);
    else if (l.$flags$ & 1) o = l.$elm$ = y.createTextNode("");
    else {
      if (
        (p || (p = l.$tag$ === "svg"),
        (o = l.$elm$ = y.createElementNS(p ? pe : he, l.$flags$ & 2 ? "slot-fb" : l.$tag$)),
        p && l.$tag$ === "foreignObject" && (p = !1),
        le(null, l, p),
        ye(b) && o["s-si"] !== b && o.classList.add((o["s-si"] = b)),
        l.$children$)
      )
        for (i = 0; i < l.$children$.length; ++i) ((c = j(e, l, i, o)), c && o.appendChild(c));
      l.$tag$ === "svg" ? (p = !1) : o.tagName === "foreignObject" && (p = !0);
    }
    return (
      (o["s-hn"] = D),
      l.$flags$ & 3 &&
        ((o["s-sr"] = !0),
        (o["s-cr"] = ee),
        (o["s-sn"] = l.$name$ || ""),
        (r = e && e.$children$ && e.$children$[n]),
        r && r.$tag$ === l.$tag$ && e.$elm$ && x(e.$elm$, !1)),
      o
    );
  },
  x = (e, t) => {
    g.$flags$ |= 1;
    const n = e.childNodes;
    for (let s = n.length - 1; s >= 0; s--) {
      const l = n[s];
      (l["s-hn"] !== D &&
        l["s-ol"] &&
        (re(l).insertBefore(l, N(l)), l["s-ol"].remove(), (l["s-ol"] = void 0), (M = !0)),
        t && x(l, t));
    }
    g.$flags$ &= -2;
  },
  oe = (e, t, n, s, l, i) => {
    let o = (e["s-cr"] && e["s-cr"].parentNode) || e,
      c;
    for (o.shadowRoot && o.tagName === D && (o = o.shadowRoot); l <= i; ++l)
      s[l] && ((c = j(null, n, l, e)), c && ((s[l].$elm$ = c), o.insertBefore(c, N(t))));
  },
  ie = (e, t, n) => {
    for (let s = t; s <= n; ++s) {
      const l = e[s];
      if (l) {
        const i = l.$elm$;
        (ae(l), i && ((P = !0), i["s-ol"] ? i["s-ol"].remove() : x(i, !0), i.remove()));
      }
    }
  },
  Ue = (e, t, n, s) => {
    let l = 0,
      i = 0,
      o = 0,
      c = 0,
      r = t.length - 1,
      $ = t[0],
      a = t[r],
      f = s.length - 1,
      d = s[0],
      u = s[f],
      v,
      S;
    for (; l <= r && i <= f;)
      if ($ == null) $ = t[++l];
      else if (a == null) a = t[--r];
      else if (d == null) d = s[++i];
      else if (u == null) u = s[--f];
      else if (O($, d)) (L($, d), ($ = t[++l]), (d = s[++i]));
      else if (O(a, u)) (L(a, u), (a = t[--r]), (u = s[--f]));
      else if (O($, u))
        (($.$tag$ === "slot" || u.$tag$ === "slot") && x($.$elm$.parentNode, !1),
          L($, u),
          e.insertBefore($.$elm$, a.$elm$.nextSibling),
          ($ = t[++l]),
          (u = s[--f]));
      else if (O(a, d))
        (($.$tag$ === "slot" || u.$tag$ === "slot") && x(a.$elm$.parentNode, !1),
          L(a, d),
          e.insertBefore(a.$elm$, $.$elm$),
          (a = t[--r]),
          (d = s[++i]));
      else {
        for (o = -1, c = l; c <= r; ++c)
          if (t[c] && t[c].$key$ !== null && t[c].$key$ === d.$key$) {
            o = c;
            break;
          }
        (o >= 0
          ? ((S = t[o]),
            S.$tag$ !== d.$tag$ ? (v = j(t && t[i], n, o, e)) : (L(S, d), (t[o] = void 0), (v = S.$elm$)),
            (d = s[++i]))
          : ((v = j(t && t[i], n, i, e)), (d = s[++i])),
          v && re($.$elm$).insertBefore(v, N($.$elm$)));
      }
    l > r ? oe(e, s[f + 1] == null ? null : s[f + 1].$elm$, n, s, i, f) : i > f && ie(t, l, r);
  },
  O = (e, t) => (e.$tag$ === t.$tag$ ? (e.$tag$ === "slot" ? e.$name$ === t.$name$ : e.$key$ === t.$key$) : !1),
  N = (e) => (e && e["s-ol"]) || e,
  re = (e) => (e["s-ol"] ? e["s-ol"] : e).parentNode,
  L = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      s = e.$children$,
      l = t.$children$,
      i = t.$tag$,
      o = t.$text$;
    let c;
    o === null
      ? ((p = i === "svg" ? !0 : i === "foreignObject" ? !1 : p),
        i === "slot" || le(e, t, p),
        s !== null && l !== null
          ? Ue(n, s, t, l)
          : l !== null
            ? (e.$text$ !== null && (n.textContent = ""), oe(n, null, t, l, 0, l.length - 1))
            : s !== null && ie(s, 0, s.length - 1),
        p && i === "svg" && (p = !1))
      : (c = n["s-cr"])
        ? (c.parentNode.textContent = o)
        : e.$text$ !== o && (n.data = o);
  },
  ce = (e) => {
    const t = e.childNodes;
    let n, s, l, i, o, c;
    for (s = 0, l = t.length; s < l; s++)
      if (((n = t[s]), n.nodeType === 1)) {
        if (n["s-sr"]) {
          for (o = n["s-sn"], n.hidden = !1, i = 0; i < l; i++)
            if (((c = t[i].nodeType), t[i]["s-hn"] !== n["s-hn"] || o !== "")) {
              if (c === 1 && o === t[i].getAttribute("slot")) {
                n.hidden = !0;
                break;
              }
            } else if (c === 1 || (c === 3 && t[i].textContent.trim() !== "")) {
              n.hidden = !0;
              break;
            }
        }
        ce(n);
      }
  },
  h = [],
  $e = (e) => {
    let t,
      n,
      s,
      l,
      i,
      o,
      c = 0;
    const r = e.childNodes,
      $ = r.length;
    for (; c < $; c++) {
      if (((t = r[c]), t["s-sr"] && (n = t["s-cr"]) && n.parentNode))
        for (s = n.parentNode.childNodes, l = t["s-sn"], o = s.length - 1; o >= 0; o--)
          ((n = s[o]),
            !n["s-cn"] &&
              !n["s-nr"] &&
              n["s-hn"] !== t["s-hn"] &&
              (X(n, l)
                ? ((i = h.find((a) => a.$nodeToRelocate$ === n)),
                  (P = !0),
                  (n["s-sn"] = n["s-sn"] || l),
                  i ? (i.$slotRefNode$ = t) : h.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n["s-sr"] &&
                    h.map((a) => {
                      X(a.$nodeToRelocate$, n["s-sn"]) &&
                        ((i = h.find((f) => f.$nodeToRelocate$ === n)),
                        i && !a.$slotRefNode$ && (a.$slotRefNode$ = i.$slotRefNode$));
                    }))
                : h.some((a) => a.$nodeToRelocate$ === n) || h.push({ $nodeToRelocate$: n })));
      t.nodeType === 1 && $e(t);
    }
  },
  X = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute("slot") === null && t === "") || e.getAttribute("slot") === t
      : e["s-sn"] === t
        ? !0
        : t === "",
  ae = (e) => {
    (e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(ae));
  },
  je = (e, t, n = !1) => {
    const s = e.$hostElement$,
      l = e.$cmpMeta$,
      i = e.$vnode$ || U(null, null),
      o = me(t) ? t : se(null, null, t);
    if (
      ((D = s.tagName),
      l.$attrsToReflect$ && ((o.$attrs$ = o.$attrs$ || {}), l.$attrsToReflect$.map(([c, r]) => (o.$attrs$[r] = s[c]))),
      n && o.$attrs$)
    )
      for (const c of Object.keys(o.$attrs$))
        s.hasAttribute(c) && !["key", "ref", "style", "class"].includes(c) && (o.$attrs$[c] = s[c]);
    ((o.$tag$ = null),
      (o.$flags$ |= 4),
      (e.$vnode$ = o),
      (o.$elm$ = i.$elm$ = s.shadowRoot || s),
      (b = s["s-sc"]),
      (ee = s["s-cr"]),
      (te = (l.$flags$ & 1) !== 0),
      (P = !1),
      L(i, o));
    {
      if (((g.$flags$ |= 1), M)) {
        $e(o.$elm$);
        let c,
          r,
          $,
          a,
          f,
          d,
          u = 0;
        for (; u < h.length; u++)
          ((c = h[u]),
            (r = c.$nodeToRelocate$),
            r["s-ol"] || (($ = y.createTextNode("")), ($["s-nr"] = r), r.parentNode.insertBefore((r["s-ol"] = $), r)));
        for (u = 0; u < h.length; u++)
          if (((c = h[u]), (r = c.$nodeToRelocate$), c.$slotRefNode$)) {
            for (
              a = c.$slotRefNode$.parentNode, f = c.$slotRefNode$.nextSibling, $ = r["s-ol"];
              ($ = $.previousSibling);
            )
              if (
                ((d = $["s-nr"]),
                d && d["s-sn"] === r["s-sn"] && a === d.parentNode && ((d = d.nextSibling), !d || !d["s-nr"]))
              ) {
                f = d;
                break;
              }
            ((!f && a !== r.parentNode) || r.nextSibling !== f) &&
              r !== f &&
              (!r["s-hn"] && r["s-ol"] && (r["s-hn"] = r["s-ol"].parentNode.nodeName), a.insertBefore(r, f));
          } else r.nodeType === 1 && (r.hidden = !0);
      }
      (P && ce(o.$elm$), (g.$flags$ &= -2), (h.length = 0));
    }
  },
  Be = (e, t) => {},
  fe = (e, t) => ((e.$flags$ |= 16), Be(e, e.$ancestorComponent$), st(() => De(e, t))),
  De = (e, t) => {
    const n = e.$hostElement$,
      s = m("scheduleUpdate", e.$cmpMeta$.$tagName$),
      l = n;
    let i;
    return (
      t ? (i = T(l, "componentWillLoad")) : (i = T(l, "componentWillUpdate")),
      (i = G(i, () => T(l, "componentWillRender"))),
      s(),
      G(i, () => Fe(e, l, t))
    );
  },
  G = (e, t) => (_e(e) ? e.then(t) : t()),
  _e = (e) => e instanceof Promise || (e && e.then && typeof e.then == "function"),
  Fe = async (e, t, n) => {
    const s = e.$hostElement$,
      l = m("update", e.$cmpMeta$.$tagName$);
    (s["s-rc"], n && Oe(e));
    const i = m("render", e.$cmpMeta$.$tagName$);
    (Me(e, t, s, n), i(), l(), He(e));
  },
  Me = (e, t, n, s) => {
    try {
      ((C = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (k.hasRenderFn || k.reflect) && (k.vdomRender || k.reflect) && (k.hydrateServerSide || je(e, t, s)));
    } catch (r) {
      R(r, e.$hostElement$);
    }
    return ((C = null), null);
  },
  He = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      s = m("postUpdate", t),
      l = n;
    (e.$ancestorComponent$,
      T(l, "componentDidRender"),
      e.$flags$ & 64 ? (T(l, "componentDidUpdate"), s()) : ((e.$flags$ |= 64), T(l, "componentDidLoad"), s()));
  },
  T = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (s) {
        R(s);
      }
  },
  Ne = (e, t) => E(e).$instanceValues$.get(t),
  we = (e, t, n, s) => {
    const l = E(e),
      i = e,
      o = l.$instanceValues$.get(t),
      c = l.$flags$,
      r = i;
    n = Te(n, s.$members$[t][0]);
    const $ = Number.isNaN(o) && Number.isNaN(n);
    if (n !== o && !$) {
      l.$instanceValues$.set(t, n);
      {
        if (s.$watchers$ && c & 128) {
          const f = s.$watchers$[t];
          f &&
            f.map((d) => {
              try {
                r[d](n, o, t);
              } catch (u) {
                R(u, i);
              }
            });
        }
        if ((c & 18) === 2) {
          if (r.componentShouldUpdate && r.componentShouldUpdate(n, o, t) === !1) return;
          fe(l, !1);
        }
      }
    }
  },
  Ce = (e, t, n) => {
    var s;
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const l = Object.entries(t.$members$),
        i = e.prototype;
      l.map(([o, [c]]) => {
        (c & 31 || c & 32) &&
          Object.defineProperty(i, o, {
            get() {
              return Ne(this, o);
            },
            set(r) {
              we(this, o, r, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const o = new Map();
        ((i.attributeChangedCallback = function (c, r, $) {
          g.jmp(() => {
            const a = o.get(c);
            if (this.hasOwnProperty(a)) (($ = this[a]), delete this[a]);
            else {
              if (i.hasOwnProperty(a) && typeof this[a] == "number" && this[a] == $) return;
              if (a == null) {
                const f = E(this),
                  d = f == null ? void 0 : f.$flags$;
                if (!(d & 8) && d & 128 && $ !== r) {
                  const v = this,
                    S = t.$watchers$[c];
                  S == null ||
                    S.forEach((w) => {
                      v[w] != null && v[w].call(v, $, r, c);
                    });
                }
                return;
              }
            }
            this[a] = $ === null && typeof this[a] == "boolean" ? !1 : $;
          });
        }),
          (e.observedAttributes = Array.from(
            new Set([
              ...Object.keys((s = t.$watchers$) !== null && s !== void 0 ? s : {}),
              ...l
                .filter(([c, r]) => r[0] & 15)
                .map(([c, r]) => {
                  const $ = r[1] || c;
                  return (o.set($, c), r[0] & 512 && t.$attrsToReflect$.push([c, $]), $);
                }),
            ]),
          )));
      }
    }
    return e;
  },
  Ie = async (e, t, n, s, l) => {
    if (
      !(t.$flags$ & 32) &&
      ((t.$flags$ |= 32),
      (l = e.constructor),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      l.style)
    ) {
      let o = l.style;
      typeof o != "string" && (o = o[(t.$modeName$ = Le(e))]);
      const c = ne(n, t.$modeName$);
      if (!B.has(c)) {
        const r = m("registerStyles", n.$tagName$);
        (Re(c, o, !!(n.$flags$ & 1)), r());
      }
    }
    (t.$ancestorComponent$, (() => fe(t, !0))());
  },
  J = (e) => {},
  We = (e) => {
    if (!(g.$flags$ & 1)) {
      const t = E(e),
        n = t.$cmpMeta$,
        s = m("connectedCallback", n.$tagName$);
      (t.$flags$ & 1
        ? (de(e, t, n.$listeners$),
          t != null && t.$lazyInstance$
            ? J(t.$lazyInstance$)
            : t != null && t.$onReadyPromise$ && t.$onReadyPromise$.then(() => J(t.$lazyInstance$)))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && ze(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([l, [i]]) => {
              if (i & 31 && e.hasOwnProperty(l)) {
                const o = e[l];
                (delete e[l], (e[l] = o));
              }
            }),
          Ie(e, t, n)),
        s());
    }
  },
  ze = (e) => {
    const t = (e["s-cr"] = y.createComment(""));
    ((t["s-cn"] = !0), e.insertBefore(t, e.firstChild));
  },
  qe = async (e) => {
    if (!(g.$flags$ & 1)) {
      const t = E(e);
      t.$rmListeners$ && (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
    }
  },
  rt = (e, t) => {
    const n = { $flags$: t[0], $tagName$: t[1] };
    ((n.$members$ = t[2]), (n.$listeners$ = t[3]), (n.$watchers$ = e.$watchers$), (n.$attrsToReflect$ = []));
    const s = e.prototype.connectedCallback,
      l = e.prototype.disconnectedCallback;
    return (
      Object.assign(e.prototype, {
        __registerHost() {
          Ge(this, n);
        },
        connectedCallback() {
          (We(this), s && s.call(this));
        },
        disconnectedCallback() {
          (qe(this), l && l.call(this));
        },
        __attachShadow() {
          this.attachShadow({ mode: "open", delegatesFocus: !!(n.$flags$ & 16) });
        },
      }),
      (e.is = n.$tagName$),
      Ce(e, n)
    );
  },
  de = (e, t, n, s) => {
    n &&
      n.map(([l, i, o]) => {
        const c = Ke(e, l),
          r = Qe(t, o),
          $ = Xe(l);
        (g.ael(c, i, r, $), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => g.rel(c, i, r, $)));
      });
  },
  Qe = (e, t) => (n) => {
    try {
      k.lazyLoad || e.$hostElement$[t](n);
    } catch (s) {
      R(s);
    }
  },
  Ke = (e, t) => (t & 4 ? y : t & 8 ? A : t & 16 ? y.body : e),
  Xe = (e) => (Ye ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0),
  ct = (e) => (g.$nonce$ = e),
  $t = (e) => Object.assign(g, e),
  ue = new WeakMap(),
  E = (e) => ue.get(e),
  Ge = (e, t) => {
    const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
    return (de(e, n, t.$listeners$), ue.set(e, n));
  },
  Y = (e, t) => t in e,
  R = (e, t) => (0, console.error)(e, t),
  B = new Map(),
  Je = [],
  A = typeof window < "u" ? window : {},
  y = A.document || { head: {} },
  at = A.HTMLElement || class {},
  g = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, s) => e.addEventListener(t, n, s),
    rel: (e, t, n, s) => e.removeEventListener(t, n, s),
    ce: (e, t) => new CustomEvent(e, t),
  },
  Ye = (() => {
    let e = !1;
    try {
      y.addEventListener(
        "e",
        null,
        Object.defineProperty({}, "passive", {
          get() {
            e = !0;
          },
        }),
      );
    } catch (t) {}
    return e;
  })(),
  Ze = (e) => Promise.resolve(e),
  Ve = (() => {
    try {
      return (new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function");
    } catch (e) {}
    return !1;
  })(),
  Z = [],
  ge = [],
  et = (e, t) => (n) => {
    (e.push(n), _ || ((_ = !0), t && g.$flags$ & 4 ? tt(F) : g.raf(F)));
  },
  V = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        R(n);
      }
    e.length = 0;
  },
  F = () => {
    (V(Z), V(ge), (_ = Z.length > 0) && g.raf(F));
  },
  tt = (e) => Ze().then(e),
  st = et(ge, !0);
export { nt as B, at as H, ct as a, $t as b, it as c, Se as d, lt as g, se as h, rt as p, ot as s };
