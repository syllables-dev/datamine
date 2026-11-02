var M = class extends Event {
    oldState;
    newState;
    constructor(e, { oldState: t = "", newState: o = "", ...r } = {}) {
      (super(e, r), (this.oldState = String(t || "")), (this.newState = String(o || "")));
    }
  },
  F = new WeakMap();
function B(e, t, o) {
  F.set(
    e,
    setTimeout(() => {
      F.has(e) && e.dispatchEvent(new M("toggle", { cancelable: !1, oldState: t, newState: o }));
    }, 0),
  );
}
var R = globalThis.ShadowRoot || function () {},
  G = globalThis.HTMLDialogElement || function () {},
  L = new WeakMap(),
  f = new WeakMap(),
  p = new WeakMap(),
  w = new WeakMap();
function A(e) {
  return w.get(e) || "hidden";
}
var P = new WeakMap();
function E(e) {
  return [...e].pop();
}
function K(e) {
  const t = e.popoverTargetElement;
  if (!(t instanceof HTMLElement)) return;
  const o = A(t);
  (e.popoverTargetAction === "show" && o === "showing") ||
    (e.popoverTargetAction === "hide" && o === "hidden") ||
    (o === "showing" ? b(t, !0, !0) : d(t, !1) && (P.set(t, e), x(t)));
}
function d(e, t) {
  return !(
    (e.popover !== "auto" && e.popover !== "manual" && e.popover !== "hint") ||
    !e.isConnected ||
    (t && A(e) !== "showing") ||
    (!t && A(e) !== "hidden") ||
    (e instanceof G && e.hasAttribute("open")) ||
    document.fullscreenElement === e
  );
}
function N(e) {
  if (!e) return 0;
  const t = f.get(document) || new Set(),
    o = p.get(document) || new Set();
  return o.has(e) ? [...o].indexOf(e) + t.size + 1 : t.has(e) ? [...t].indexOf(e) + 1 : 0;
}
function Q(e) {
  const t = V(e),
    o = _(e);
  return N(t) > N(o) ? t : o;
}
function m(e) {
  let t;
  const o = p.get(e) || new Set(),
    r = f.get(e) || new Set(),
    i = o.size > 0 ? o : r.size > 0 ? r : null;
  return i ? ((t = E(i)), t.isConnected ? t : (i.delete(t), m(e))) : null;
}
function C(e) {
  for (const t of e || [])
    if (!t.isConnected) e.delete(t);
    else return t;
  return null;
}
function y(e) {
  return typeof e.getRootNode == "function" ? e.getRootNode() : e.parentNode ? y(e.parentNode) : e;
}
function V(e) {
  for (; e;) {
    if (e instanceof HTMLElement && e.popover === "auto" && w.get(e) === "showing") return e;
    if (
      ((e = (e instanceof Element && e.assignedSlot) || e.parentElement || y(e)),
      e instanceof R && (e = e.host),
      e instanceof Document)
    )
      return;
  }
}
function _(e) {
  for (; e;) {
    const t = e.popoverTargetElement;
    if (t instanceof HTMLElement) return t;
    if (((e = e.parentElement || y(e)), e instanceof R && (e = e.host), e instanceof Document)) return;
  }
}
function W(e, t) {
  const o = new Map();
  let r = 0;
  for (const a of t || []) (o.set(a, r), (r += 1));
  (o.set(e, r), (r += 1));
  let i = null;
  function u(a) {
    if (!a) return;
    let l = !1,
      n = null,
      s = null;
    for (; !l;) {
      if (((n = V(a) || null), n === null || !o.has(n))) return;
      ((e.popover === "hint" || n.popover === "auto") && (l = !0), l || (a = n.parentElement));
    }
    ((s = o.get(n)), (i === null || o.get(i) < s) && (i = n));
  }
  return (u(e.parentElement || y(e)), i);
}
function J(e) {
  return e.hidden ||
    e instanceof R ||
    ((e instanceof HTMLButtonElement ||
      e instanceof HTMLInputElement ||
      e instanceof HTMLSelectElement ||
      e instanceof HTMLTextAreaElement ||
      e instanceof HTMLOptGroupElement ||
      e instanceof HTMLOptionElement ||
      e instanceof HTMLFieldSetElement) &&
      e.disabled) ||
    (e instanceof HTMLInputElement && e.type === "hidden") ||
    (e instanceof HTMLAnchorElement && e.href === "")
    ? !1
    : typeof e.tabIndex == "number" && e.tabIndex !== -1;
}
function X(e) {
  if (e.shadowRoot && e.shadowRoot.delegatesFocus !== !0) return null;
  let t = e;
  t.shadowRoot && (t = t.shadowRoot);
  let o = t.querySelector("[autofocus]");
  if (o) return o;
  {
    const u = t.querySelectorAll("slot");
    for (const a of u) {
      const l = a.assignedElements({ flatten: !0 });
      for (const n of l) {
        if (n.hasAttribute("autofocus")) return n;
        if (((o = n.querySelector("[autofocus]")), o)) return o;
      }
    }
  }
  const r = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  let i = r.currentNode;
  for (; i;) {
    if (J(i)) return i;
    i = r.nextNode();
  }
}
function Y(e) {
  X(e)?.focus();
}
var k = new WeakMap();
function x(e) {
  if (!d(e, !1)) return;
  const t = e.ownerDocument;
  if (!e.dispatchEvent(new M("beforetoggle", { cancelable: !0, oldState: "closed", newState: "open" })) || !d(e, !1))
    return;
  let o = !1;
  const r = e.popover;
  let i = null;
  const u = W(e, f.get(t) || new Set()),
    a = W(e, p.get(t) || new Set());
  if (
    (r === "auto" && (I(p.get(t) || new Set(), o, !0), v(u || t, o, !0), (i = "auto")),
    r === "hint" &&
      (a
        ? (v(a, o, !0), (i = "hint"))
        : (I(p.get(t) || new Set(), o, !0), u ? (v(u, o, !0), (i = "auto")) : (i = "hint"))),
    r === "auto" || r === "hint")
  ) {
    if (r !== e.popover || !d(e, !1)) return;
    (m(t) || (o = !0),
      i === "auto"
        ? (f.has(t) || f.set(t, new Set()), f.get(t).add(e))
        : i === "hint" && (p.has(t) || p.set(t, new Set()), p.get(t).add(e)));
  }
  k.delete(e);
  const l = t.activeElement;
  (e.classList.add(":popover-open"),
    w.set(e, "showing"),
    L.has(t) || L.set(t, new Set()),
    L.get(t).add(e),
    $(P.get(e), !0),
    Y(e),
    o && l && e.popover === "auto" && k.set(e, l),
    B(e, "closed", "open"));
}
function b(e, t = !1, o = !1) {
  if (!d(e, !0)) return;
  const r = e.ownerDocument;
  if (["auto", "hint"].includes(e.popover) && (v(e, t, o), !d(e, !0))) return;
  const i = f.get(r) || new Set(),
    u = i.has(e) && E(i) === e;
  if (
    ($(P.get(e), !1),
    P.delete(e),
    o &&
      (e.dispatchEvent(new M("beforetoggle", { oldState: "open", newState: "closed" })),
      u && E(i) !== e && v(e, t, o),
      !d(e, !0)))
  )
    return;
  (L.get(r)?.delete(e),
    i.delete(e),
    p.get(r)?.delete(e),
    e.classList.remove(":popover-open"),
    w.set(e, "hidden"),
    o && B(e, "open", "closed"));
  const a = k.get(e);
  a && (k.delete(e), t && a.focus());
}
function Z(e, t = !1, o = !1) {
  let r = m(e);
  for (; r;) (b(r, t, o), (r = m(e)));
}
function I(e, t = !1, o = !1) {
  let r = C(e);
  for (; r;) (b(r, t, o), (r = C(e)));
}
function q(e, t, o, r) {
  let i = !1,
    u = !1;
  for (; i || !u;) {
    u = !0;
    let a = null,
      l = !1;
    for (const n of t)
      if (n === e) l = !0;
      else if (l) {
        a = n;
        break;
      }
    if (!a) return;
    for (; A(a) === "showing" && t.size;) b(E(t), o, r);
    (t.has(e) && E(t) !== e && (i = !0), i && (r = !1));
  }
}
function v(e, t, o) {
  const r = e.ownerDocument || e;
  if (e instanceof Document) return Z(r, t, o);
  if (p.get(r)?.has(e)) {
    q(e, p.get(r), t, o);
    return;
  }
  (I(p.get(r) || new Set(), t, o), f.get(r)?.has(e) && q(e, f.get(r), t, o));
}
var T = new WeakMap();
function z(e) {
  if (!e.isTrusted) return;
  const t = e.composedPath()[0];
  if (!t) return;
  const o = t.ownerDocument;
  if (!m(o)) return;
  const i = Q(t);
  if (i && e.type === "pointerdown") T.set(o, i);
  else if (e.type === "pointerup") {
    const u = T.get(o) === i;
    (T.delete(o), u && v(i || o, !1, !0));
  }
}
var H = new WeakMap();
function $(e, t = !1) {
  if (!e) return;
  H.has(e) || H.set(e, e.getAttribute("aria-expanded"));
  const o = e.popoverTargetElement;
  if (o instanceof HTMLElement && o.popover === "auto") e.setAttribute("aria-expanded", String(t));
  else {
    const r = H.get(e);
    r ? e.setAttribute("aria-expanded", r) : e.removeAttribute("aria-expanded");
  }
}
var j = globalThis.ShadowRoot || function () {};
function ne() {
  return typeof HTMLElement < "u" && typeof HTMLElement.prototype == "object" && "popover" in HTMLElement.prototype;
}
function re() {
  const e = document.createElement("div");
  return (e.setAttribute("popover", "hint"), e.popover === "hint");
}
function ie() {
  return !!(document.body?.showPopover && !/native code/i.test(document.body.showPopover.toString()));
}
function h(e, t, o) {
  const r = e[t];
  Object.defineProperty(e, t, {
    value(i) {
      return r.call(this, o(i));
    },
  });
}
var ee = /(^|[^\\]):popover-open\b/g;
function te() {
  return typeof globalThis.CSSLayerBlockRule == "function";
}
function oe() {
  const e = te();
  return `
${e ? "@layer popover-polyfill {" : ""}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }

  :where(dialog[popover].\\:popover-open) {
    display: block;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
${e ? "}" : ""}
`;
}
var g = null;
function D(e) {
  const t = oe();
  if (g === null)
    try {
      ((g = new CSSStyleSheet()), g.replaceSync(t));
    } catch {
      g = !1;
    }
  if (g === !1) {
    const o = document.createElement("style");
    ((o.textContent = t), e instanceof Document ? e.head.prepend(o) : e.prepend(o));
  } else e.adoptedStyleSheets = [g, ...e.adoptedStyleSheets];
}
function se() {
  if (typeof window > "u") return;
  window.ToggleEvent = window.ToggleEvent || M;
  function e(n) {
    return (n?.includes(":popover-open") && (n = n.replace(ee, "$1.\\:popover-open")), n);
  }
  (h(Document.prototype, "querySelector", e),
    h(Document.prototype, "querySelectorAll", e),
    h(Element.prototype, "querySelector", e),
    h(Element.prototype, "querySelectorAll", e),
    h(Element.prototype, "matches", e),
    h(Element.prototype, "closest", e),
    h(DocumentFragment.prototype, "querySelectorAll", e),
    Object.defineProperties(HTMLElement.prototype, {
      popover: {
        enumerable: !0,
        configurable: !0,
        get() {
          if (!this.hasAttribute("popover")) return null;
          const n = (this.getAttribute("popover") || "").toLowerCase();
          return n === "" || n == "auto" ? "auto" : n == "hint" ? "hint" : "manual";
        },
        set(n) {
          n === null ? this.removeAttribute("popover") : this.setAttribute("popover", n);
        },
      },
      showPopover: {
        enumerable: !0,
        configurable: !0,
        value(n = {}) {
          x(this);
        },
      },
      hidePopover: {
        enumerable: !0,
        configurable: !0,
        value() {
          b(this, !0, !0);
        },
      },
      togglePopover: {
        enumerable: !0,
        configurable: !0,
        value(n = {}) {
          return (
            typeof n == "boolean" && (n = { force: n }),
            (w.get(this) === "showing" && n.force === void 0) || n.force === !1
              ? b(this, !0, !0)
              : (n.force === void 0 || n.force === !0) && x(this),
            w.get(this) === "showing"
          );
        },
      },
    }));
  const t = Element.prototype.attachShadow;
  t &&
    Object.defineProperties(Element.prototype, {
      attachShadow: {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value(n) {
          const s = t.call(this, n);
          return (D(s), s);
        },
      },
    });
  const o = HTMLElement.prototype.attachInternals;
  o &&
    Object.defineProperties(HTMLElement.prototype, {
      attachInternals: {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value() {
          const n = o.call(this);
          return (n.shadowRoot && D(n.shadowRoot), n);
        },
      },
    });
  const r = new WeakMap();
  function i(n) {
    Object.defineProperties(n.prototype, {
      popoverTargetElement: {
        enumerable: !0,
        configurable: !0,
        set(s) {
          if (s === null) (this.removeAttribute("popovertarget"), r.delete(this));
          else if (s instanceof Element) (this.setAttribute("popovertarget", ""), r.set(this, s));
          else throw new TypeError("popoverTargetElement must be an element or null");
        },
        get() {
          if (
            (this.localName !== "button" && this.localName !== "input") ||
            (this.localName === "input" && this.type !== "reset" && this.type !== "image" && this.type !== "button") ||
            this.disabled ||
            (this.form && this.type === "submit")
          )
            return null;
          const s = r.get(this);
          if (s && s.isConnected) return s;
          if (s && !s.isConnected) return (r.delete(this), null);
          const c = y(this),
            S = this.getAttribute("popovertarget");
          return ((c instanceof Document || c instanceof j) && S && c.getElementById(S)) || null;
        },
      },
      popoverTargetAction: {
        enumerable: !0,
        configurable: !0,
        get() {
          const s = (this.getAttribute("popovertargetaction") || "").toLowerCase();
          return s === "show" || s === "hide" ? s : "toggle";
        },
        set(s) {
          this.setAttribute("popovertargetaction", s);
        },
      },
    });
  }
  (i(HTMLButtonElement), i(HTMLInputElement));
  const u = (n) => {
      const s = n.composedPath(),
        c = s[0];
      if (!(c instanceof Element) || c?.shadowRoot) return;
      const S = y(c);
      if (!(S instanceof j || S instanceof Document)) return;
      const O = s.find((U) => U.matches?.("[popovertargetaction],[popovertarget]"));
      if (O) {
        (K(O), n.preventDefault());
        return;
      }
    },
    a = (n) => {
      const s = n.key,
        c = n.target;
      !n.defaultPrevented && c && (s === "Escape" || s === "Esc") && v(c.ownerDocument, !0, !0);
    };
  (((n) => {
    (n.addEventListener("click", u),
      n.addEventListener("keydown", a),
      n.addEventListener("pointerdown", z),
      n.addEventListener("pointerup", z));
  })(document),
    D(document));
}
export { se as apply, D as injectStyles, re as isHintSupported, ie as isPolyfilled, ne as isSupported };
