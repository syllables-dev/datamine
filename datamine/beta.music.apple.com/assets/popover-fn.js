var Q = Object.defineProperty;
var _ = (e, t, o) => (t in e ? Q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o));
var H = (e, t, o) => (_(e, typeof t != "symbol" ? t + "" : t, o), o);
var M = class extends Event {
    constructor(t, { oldState: o = "", newState: r = "", ...i } = {}) {
      super(t, i);
      H(this, "oldState");
      H(this, "newState");
      ((this.oldState = String(o || "")), (this.newState = String(r || "")));
    }
  },
  W = new WeakMap();
function U(e, t, o) {
  W.set(
    e,
    setTimeout(() => {
      W.has(e) && e.dispatchEvent(new M("toggle", { cancelable: !1, oldState: t, newState: o }));
    }, 0),
  );
}
var F = globalThis.ShadowRoot || function () {},
  J = globalThis.HTMLDialogElement || function () {},
  L = new WeakMap(),
  f = new WeakMap(),
  c = new WeakMap(),
  w = new WeakMap();
function A(e) {
  return w.get(e) || "hidden";
}
var P = new WeakMap();
function E(e) {
  return [...e].pop();
}
function X(e) {
  const t = e.popoverTargetElement;
  if (!(t instanceof HTMLElement)) return;
  const o = A(t);
  (e.popoverTargetAction === "show" && o === "showing") ||
    (e.popoverTargetAction === "hide" && o === "hidden") ||
    (o === "showing" ? b(t, !0, !0) : d(t, !1) && (P.set(t, e), R(t)));
}
function d(e, t) {
  return !(
    (e.popover !== "auto" && e.popover !== "manual" && e.popover !== "hint") ||
    !e.isConnected ||
    (t && A(e) !== "showing") ||
    (!t && A(e) !== "hidden") ||
    (e instanceof J && e.hasAttribute("open")) ||
    document.fullscreenElement === e
  );
}
function q(e) {
  if (!e) return 0;
  const t = f.get(document) || new Set(),
    o = c.get(document) || new Set();
  return o.has(e) ? [...o].indexOf(e) + t.size + 1 : t.has(e) ? [...t].indexOf(e) + 1 : 0;
}
function Y(e) {
  const t = G(e),
    o = Z(e);
  return q(t) > q(o) ? t : o;
}
function m(e) {
  let t;
  const o = c.get(e) || new Set(),
    r = f.get(e) || new Set(),
    i = o.size > 0 ? o : r.size > 0 ? r : null;
  return i ? ((t = E(i)), t.isConnected ? t : (i.delete(t), m(e))) : null;
}
function z(e) {
  for (const t of e || [])
    if (!t.isConnected) e.delete(t);
    else return t;
  return null;
}
function y(e) {
  return typeof e.getRootNode == "function" ? e.getRootNode() : e.parentNode ? y(e.parentNode) : e;
}
function G(e) {
  for (; e;) {
    if (e instanceof HTMLElement && e.popover === "auto" && w.get(e) === "showing") return e;
    if (
      ((e = (e instanceof Element && e.assignedSlot) || e.parentElement || y(e)),
      e instanceof F && (e = e.host),
      e instanceof Document)
    )
      return;
  }
}
function Z(e) {
  for (; e;) {
    const t = e.popoverTargetElement;
    if (t instanceof HTMLElement) return t;
    if (((e = e.parentElement || y(e)), e instanceof F && (e = e.host), e instanceof Document)) return;
  }
}
function j(e, t) {
  const o = new Map();
  let r = 0;
  for (const u of t || []) (o.set(u, r), (r += 1));
  (o.set(e, r), (r += 1));
  let i = null;
  function a(u) {
    if (!u) return;
    let l = !1,
      n = null,
      s = null;
    for (; !l;) {
      if (((n = G(u) || null), n === null || !o.has(n))) return;
      ((e.popover === "hint" || n.popover === "auto") && (l = !0), l || (u = n.parentElement));
    }
    ((s = o.get(n)), (i === null || o.get(i) < s) && (i = n));
  }
  return (a(e.parentElement || y(e)), i);
}
function ee(e) {
  return e.hidden ||
    e instanceof F ||
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
function te(e) {
  if (e.shadowRoot && e.shadowRoot.delegatesFocus !== !0) return null;
  let t = e;
  t.shadowRoot && (t = t.shadowRoot);
  let o = t.querySelector("[autofocus]");
  if (o) return o;
  {
    const a = t.querySelectorAll("slot");
    for (const u of a) {
      const l = u.assignedElements({ flatten: !0 });
      for (const n of l) {
        if (n.hasAttribute("autofocus")) return n;
        if (((o = n.querySelector("[autofocus]")), o)) return o;
      }
    }
  }
  const r = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  let i = r.currentNode;
  for (; i;) {
    if (ee(i)) return i;
    i = r.nextNode();
  }
}
function oe(e) {
  var t;
  (t = te(e)) == null || t.focus();
}
var k = new WeakMap();
function R(e) {
  if (!d(e, !1)) return;
  const t = e.ownerDocument;
  if (!e.dispatchEvent(new M("beforetoggle", { cancelable: !0, oldState: "closed", newState: "open" })) || !d(e, !1))
    return;
  let o = !1;
  const r = e.popover;
  let i = null;
  const a = j(e, f.get(t) || new Set()),
    u = j(e, c.get(t) || new Set());
  if (
    (r === "auto" && (O(c.get(t) || new Set(), o, !0), v(a || t, o, !0), (i = "auto")),
    r === "hint" &&
      (u
        ? (v(u, o, !0), (i = "hint"))
        : (O(c.get(t) || new Set(), o, !0), a ? (v(a, o, !0), (i = "auto")) : (i = "hint"))),
    r === "auto" || r === "hint")
  ) {
    if (r !== e.popover || !d(e, !1)) return;
    (m(t) || (o = !0),
      i === "auto"
        ? (f.has(t) || f.set(t, new Set()), f.get(t).add(e))
        : i === "hint" && (c.has(t) || c.set(t, new Set()), c.get(t).add(e)));
  }
  k.delete(e);
  const l = t.activeElement;
  (e.classList.add(":popover-open"),
    w.set(e, "showing"),
    L.has(t) || L.set(t, new Set()),
    L.get(t).add(e),
    K(P.get(e), !0),
    oe(e),
    o && l && e.popover === "auto" && k.set(e, l),
    U(e, "closed", "open"));
}
function b(e, t = !1, o = !1) {
  var l, n;
  if (!d(e, !0)) return;
  const r = e.ownerDocument;
  if (["auto", "hint"].includes(e.popover) && (v(e, t, o), !d(e, !0))) return;
  const i = f.get(r) || new Set(),
    a = i.has(e) && E(i) === e;
  if (
    (K(P.get(e), !1),
    P.delete(e),
    o &&
      (e.dispatchEvent(new M("beforetoggle", { oldState: "open", newState: "closed" })),
      a && E(i) !== e && v(e, t, o),
      !d(e, !0)))
  )
    return;
  ((l = L.get(r)) == null || l.delete(e),
    i.delete(e),
    (n = c.get(r)) == null || n.delete(e),
    e.classList.remove(":popover-open"),
    w.set(e, "hidden"),
    o && U(e, "open", "closed"));
  const u = k.get(e);
  u && (k.delete(e), t && u.focus());
}
function ne(e, t = !1, o = !1) {
  let r = m(e);
  for (; r;) (b(r, t, o), (r = m(e)));
}
function O(e, t = !1, o = !1) {
  let r = z(e);
  for (; r;) (b(r, t, o), (r = z(e)));
}
function B(e, t, o, r) {
  let i = !1,
    a = !1;
  for (; i || !a;) {
    a = !0;
    let u = null,
      l = !1;
    for (const n of t)
      if (n === e) l = !0;
      else if (l) {
        u = n;
        break;
      }
    if (!u) return;
    for (; A(u) === "showing" && t.size;) b(E(t), o, r);
    (t.has(e) && E(t) !== e && (i = !0), i && (r = !1));
  }
}
function v(e, t, o) {
  var i, a;
  const r = e.ownerDocument || e;
  if (e instanceof Document) return ne(r, t, o);
  if ((i = c.get(r)) != null && i.has(e)) {
    B(e, c.get(r), t, o);
    return;
  }
  (O(c.get(r) || new Set(), t, o), (a = f.get(r)) != null && a.has(e) && B(e, f.get(r), t, o));
}
var D = new WeakMap();
function V(e) {
  if (!e.isTrusted) return;
  const t = e.composedPath()[0];
  if (!t) return;
  const o = t.ownerDocument;
  if (!m(o)) return;
  const i = Y(t);
  if (i && e.type === "pointerdown") D.set(o, i);
  else if (e.type === "pointerup") {
    const a = D.get(o) === i;
    (D.delete(o), a && v(i || o, !1, !0));
  }
}
var x = new WeakMap();
function K(e, t = !1) {
  if (!e) return;
  x.has(e) || x.set(e, e.getAttribute("aria-expanded"));
  const o = e.popoverTargetElement;
  if (o instanceof HTMLElement && o.popover === "auto") e.setAttribute("aria-expanded", String(t));
  else {
    const r = x.get(e);
    r ? e.setAttribute("aria-expanded", r) : e.removeAttribute("aria-expanded");
  }
}
var $ = globalThis.ShadowRoot || function () {};
function ue() {
  return typeof HTMLElement < "u" && typeof HTMLElement.prototype == "object" && "popover" in HTMLElement.prototype;
}
function le() {
  const e = document.createElement("div");
  return (e.setAttribute("popover", "hint"), e.popover === "hint");
}
function pe() {
  var e;
  return !!((e = document.body) != null && e.showPopover && !/native code/i.test(document.body.showPopover.toString()));
}
function h(e, t, o) {
  const r = e[t];
  Object.defineProperty(e, t, {
    value(i) {
      return r.call(this, o(i));
    },
  });
}
var re = /(^|[^\\]):popover-open\b/g;
function ie() {
  return typeof globalThis.CSSLayerBlockRule == "function";
}
function se() {
  const e = ie();
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
function I(e) {
  const t = se();
  if (g === null)
    try {
      ((g = new CSSStyleSheet()), g.replaceSync(t));
    } catch (o) {
      g = !1;
    }
  if (g === !1) {
    const o = document.createElement("style");
    ((o.textContent = t), e instanceof Document ? e.head.prepend(o) : e.prepend(o));
  } else e.adoptedStyleSheets = [g, ...e.adoptedStyleSheets];
}
function ce() {
  if (typeof window > "u") return;
  window.ToggleEvent = window.ToggleEvent || M;
  function e(n) {
    return (n != null && n.includes(":popover-open") && (n = n.replace(re, "$1.\\:popover-open")), n);
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
          R(this);
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
              : (n.force === void 0 || n.force === !0) && R(this),
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
          return (I(s), s);
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
          return (n.shadowRoot && I(n.shadowRoot), n);
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
          const p = y(this),
            S = this.getAttribute("popovertarget");
          return ((p instanceof Document || p instanceof $) && S && p.getElementById(S)) || null;
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
  const a = (n) => {
      const s = n.composedPath(),
        p = s[0];
      if (!(p instanceof Element) || (p != null && p.shadowRoot)) return;
      const S = y(p);
      if (!(S instanceof $ || S instanceof Document)) return;
      const N = s.find((T) => {
        var C;
        return (C = T.matches) == null ? void 0 : C.call(T, "[popovertargetaction],[popovertarget]");
      });
      if (N) {
        (X(N), n.preventDefault());
        return;
      }
    },
    u = (n) => {
      const s = n.key,
        p = n.target;
      !n.defaultPrevented && p && (s === "Escape" || s === "Esc") && v(p.ownerDocument, !0, !0);
    };
  (((n) => {
    (n.addEventListener("click", a),
      n.addEventListener("keydown", u),
      n.addEventListener("pointerdown", V),
      n.addEventListener("pointerup", V));
  })(document),
    I(document));
}
export { ce as apply, I as injectStyles, le as isHintSupported, pe as isPolyfilled, ue as isSupported };
