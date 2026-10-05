import { B as z, g as I, p as N, H as E, h as d, d as W, c as A } from "./index-5.js";
var w =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function G(t, e, o) {
  return (
    (o = {
      path: e,
      exports: {},
      require: function (r, u) {
        return ee();
      },
    }),
    t(o, o.exports),
    o.exports
  );
}
function ee() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var te = G(function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function o() {
      if (typeof navigator > "u") return [];
      if (navigator.languages) return navigator.languages;
      var r = navigator.language || navigator.userLanguage;
      return r ? [r] : [];
    }
    e.getLanguages = o;
  }),
  ne = G(function (t, e) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default =
        typeof FastBoot < "u"
          ? FastBoot.require("buffer").Buffer
          : typeof process < "u" && process.versions !== null && process.versions.node !== null
            ? Buffer
            : window.Buffer));
  }),
  oe = G(function (t, e) {
    var o =
        (w && w.__read) ||
        function (n, a) {
          var i = typeof Symbol == "function" && n[Symbol.iterator];
          if (!i) return n;
          var s = i.call(n),
            c,
            l = [],
            g;
          try {
            for (; (a === void 0 || a-- > 0) && !(c = s.next()).done;) l.push(c.value);
          } catch (p) {
            g = { error: p };
          } finally {
            try {
              c && !c.done && (i = s.return) && i.call(s);
            } finally {
              if (g) throw g.error;
            }
          }
          return l;
        },
      r =
        (w && w.__spread) ||
        function () {
          for (var n = [], a = 0; a < arguments.length; a++) n = n.concat(o(arguments[a]));
          return n;
        },
      u =
        (w && w.__importDefault) ||
        function (n) {
          return n && n.__esModule ? n : { default: n };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var f = u(ne);
    function b(n) {
      return !!n && typeof n == "object" && !Array.isArray(n);
    }
    e.isObject = b;
    function J() {
      for (var n = C() + C(); n.length < 16;) n += C();
      return n.slice(0, 16);
    }
    e.generateUUID = J;
    function C() {
      return Math.random().toString(16).substring(2);
    }
    e.isLibraryType = _(function (n) {
      return /^[a|i|l|p]{1}\.[a-zA-Z0-9]+$/.test(n);
    });
    function k(n) {
      var a = function (i) {
        return typeof i < "u" && i !== null;
      };
      return (
        arguments.length === 0 && typeof process < "u" && (n = process),
        (a(n) && a(n.versions) && a(n.versions.node)) || typeof FastBoot < "u"
      );
    }
    ((e.isNodeEnvironment = k),
      (e.atob = _(
        k()
          ? function (n) {
              return f.default.from(n, "base64").toString("binary");
            }
          : function (n) {
              return window.atob(n);
            },
      )),
      (e.btoa = _(
        k()
          ? function (n) {
              return f.default.from(n).toString("base64");
            }
          : function (n) {
              return window.btoa(n);
            },
      )));
    function _(n) {
      return function () {
        for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
        for (var s = "", c = a.length; c--;) {
          var l = a[c];
          ((s += l === Object(l) ? JSON.stringify(l) : l), n._memoized || (n._memoized = {}));
        }
        return s in n._memoized ? n._memoized[s] : (n._memoized[s] = n.apply(void 0, a));
      };
    }
    e.memoize = _;
    function q(n, a) {
      var i = K(a);
      return (
        i === "" || (n.indexOf("?") === -1 && (n = n + "?"), (n = n.endsWith("?") ? "" + n + i : n + "&" + i)), n
      );
    }
    e.addQueryParams = q;
    function K(n) {
      return n
        ? Object.keys(n).reduce(function (a, i) {
            var s = n[i];
            return b(s)
              ? Object.keys(s).reduce(function (c, l) {
                  return (
                    "" +
                    c +
                    (c ? "&" : "") +
                    encodeURIComponent(i) +
                    "[" +
                    encodeURIComponent(l) +
                    "]=" +
                    encodeURIComponent(s[l])
                  );
                }, a)
              : "" + a + (a ? "&" : "") + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
          }, "")
        : "";
    }
    e.urlEncodeParameters = K;
    function Z(n) {
      var a = n.split("/"),
        i = a.pop(),
        s = o((!!i && i.match(/\d+/g)) || ["100", "100"], 2),
        c = s[0],
        l = s[1];
      return { width: parseInt(c, 10), height: parseInt(l, 10), url: n.replace(c + "x" + l, "{w}x{h}") };
    }
    ((e.getArtworkFromURL = Z),
      (e.throttled = function (n, a) {
        var i = 0;
        return function () {
          var s = Date.now();
          if (!(s - i < n)) return ((i = s), a.apply(this, Array.from(arguments)));
        };
      }),
      (e.debounce = function (n, a, i) {
        (a === void 0 && (a = 250), i === void 0 && (i = { isImmediate: !1 }));
        var s;
        return function () {
          for (var c = [], l = 0; l < arguments.length; l++) c[l] = arguments[l];
          var g = this,
            p = function () {
              ((s = void 0), i.isImmediate || n.apply(g, c));
            },
            m = i.isImmediate && s === void 0;
          (s !== void 0 && clearTimeout(s), (s = setTimeout(p, a)), m && n.apply(g, c));
        };
      }));
    function X(n) {
      var a,
        i = {};
      if (!n || (n.startsWith("http") && !n.includes("?"))) return {};
      try {
        var s = (a = n.split("?")[1]) !== null && a !== void 0 ? a : n;
        i = s.split("&").reduce(function (c, l) {
          var g = o(l.split("="), 2),
            p = g[0],
            m = g[1];
          return ((c[decodeURIComponent(p)] = decodeURIComponent(m)), c);
        }, {});
      } catch (c) {
        return {};
      }
      return i;
    }
    e.parseQueryParams = X;
    function V(n) {
      try {
        var a = o(n.split("?", 2), 2),
          i = a[0],
          s = a[1];
        if (typeof s > "u") return i;
        var c = s.split("&").map(function (m) {
            return m.split("=", 2);
          }),
          l = r(Array(c.length).keys());
        l.sort(function (m, y) {
          var S = c[m],
            F = c[y];
          return S < F ? -1 : S > F ? 1 : m - y;
        });
        var g = l.map(function (m) {
            return c[m];
          }),
          p = g
            .map(function (m) {
              var y = o(m, 2),
                S = y[0],
                F = y[1];
              return typeof F < "u" ? S + "=" + F : S;
            })
            .join("&");
        return i + "?" + p;
      } catch (m) {
        return n;
      }
    }
    e.stableSortQueryParams = V;
  });
const ie = (t) => {
    let e = null;
    return (...o) =>
      e ||
      ((e = t(...o).finally(() => {
        e = null;
      })),
      e);
  },
  ae = "en-us";
var j;
(function (t) {
  ((t.Music = "music"),
    (t.Tv = "tv"),
    (t.AppStore = "apps"),
    (t.Business = "business"),
    (t.BusinessEssentials = "businessessentials"),
    (t.ClassicalMusic = "classical"),
    (t.Education = "education"),
    (t.Podcasts = "podcasts"),
    (t.PodcastsConnect = "podcastcreators"),
    (t.SeasonalTV = "seasonaltv"),
    (t.SeasonSubscription = "seasonsubscription"),
    (t.SharedBusiness = "sharedbusiness"),
    (t.SharedEducation = "sharededucation"),
    (t.PodcastsConnectDeprecated = "xyzw"),
    (t.Activate = "activate"),
    (t.Car = "car"),
    (t.Other = "other"));
})(j || (j = {}));
let U = "",
  M = !1,
  H = {},
  P = "",
  Q = !1,
  Y = !1,
  L = ie(async () => {
    if (P && !M) {
      const e = await (await fetch(`${P}/default-localizations.json`)).json();
      return ((M = !0), e);
    }
  });
const D = ae,
  R = {},
  re = (t, e = { showScreamers: !1 }) => {
    const { defaultLocalizations: o, importDefaultLocalizations: r, showScreamers: u, showUnlocalizedUi: f } = e;
    ((P = t),
      typeof o == "object" && o && ((L = () => Promise.resolve(void 0)), (H = o)),
      typeof r == "function" && (L = r),
      typeof u == "boolean" && (Q = u),
      typeof f == "boolean" && (Y = f));
  };
let h = "",
  v;
const se = async (t = D) => {
    if (!P) return {};
    const e = `${P}/${t}.json`;
    return (await fetch(e)).json();
  },
  ce = async (t = D) => {
    if (!t) throw new Error("loadLocalizations: did not receive newLanguage");
    const e = t.toLowerCase(),
      [o, r] = await Promise.allSettled([se(e), L()]);
    (o.status === "fulfilled" ? (R[e] = o.value) : console.error(`Failed to load localizations for ${e}`),
      r.status === "fulfilled"
        ? (H = (Array.isArray(r.value) ? r.value : [r.value]).reduce((f, b) => ({ ...f, ...b }), {}))
        : console.error("Failed to load default localizations"),
      (U = e));
  },
  $ = (t) =>
    ce(t).finally(() => {
      ((h = ""), (v = Promise.resolve()));
    }),
  le = async (t = D) => {
    if (!t) throw new Error("loadLocalizationsIfNeeded: did not receive newLanguage");
    const e = t.toLowerCase();
    if (R[e]) {
      U = e;
      return;
    }
    return (h || ((h = e), (v = $(e))), h !== e && v && ((h = e), (v = v.finally(() => ((h = e), $(e))))), v);
  },
  ue = /@@([^@]+)@@/g,
  de = (t, e = {}) => (typeof t != "string" ? "" : t.replace(ue, (o, r) => e[r] || r)),
  fe = /^\*\*.+\*\*$/,
  O = (t) => fe.test(t),
  me = (t, e = { skipDefaultLocalizationsGet: !1 }) => {
    const o = R[U] || {};
    let r = o[t],
      u = t in o && !O(r);
    const f = ["Web"];
    for (const b of f)
      typeof t == "string" &&
        t.startsWith(`CommerceUI.${b}.`) &&
        !u &&
        ((t = t.replace(`CommerceUI.${b}.`, `ASE.Web.Commerce.${b}.`)), (r = o[t]), (u = t in o && !O(r)));
    return Y ? (u ? t : `**${t}**`) : u ? r : t in H && !e.skipDefaultLocalizationsGet ? H[t] : Q ? `**${t}**` : "";
  },
  ge = (t, e = {}, o = { skipDefaultLocalizationsGet: !1 }) => {
    const r = me(t, o);
    return de(r, e);
  },
  B = z === null || z === void 0 ? void 0 : z.isDev,
  be = "en-us",
  Ee = (t, e = {}) => ge(t, e),
  pe = ["l", "fb_locale"],
  we = (t) => {
    const e = B ? "locales/default-localizations.json" : `locales/${t}.json`;
    return I(e);
  },
  he = async () => (await fetch(we(be), { ...(B ? { cache: "no-store" } : {}) })).json(),
  ve = async (t) => le(t),
  ye = (t, e) => {
    const o = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(t);
    return o != null && o[1] ? decodeURI(o[1]) : void 0;
  },
  Se = (t) => [].concat(Pe(t), _e(t), Fe(), He()).filter((o) => !!o),
  Fe = () => {
    const t = oe.isNodeEnvironment() ? "" : window.location.toString(),
      e = pe.reduce((o, r) => {
        const u = ye(t, r);
        return (u && o.add(u), o);
      }, new Set());
    return Array.from(e);
  },
  Pe = (t) => {
    const e = t.getAttribute("language");
    return e ? [e] : [];
  },
  _e = (t) => {
    const e = t.closest("[lang]");
    return e ? [e.lang] : [];
  },
  He = () => {
    const t = te.getLanguages();
    return t == null ? void 0 : t.map((e) => e.toLocaleLowerCase());
  },
  Ge = async (t, e) => {
    try {
      re(I(e), { importDefaultLocalizations: he, showScreamers: B });
    } catch (o) {
      console.error("[CWC] Failed to load default language", o);
    }
    for (const o of Se(t))
      try {
        await ve(o);
        break;
      } catch (r) {
        console.error(`[CWC] Failed to load language: ${o}`, r);
      }
  },
  x = (t) =>
    t
      ? typeof t == "string"
        ? t
        : Array.isArray(t)
          ? t
              .map((e) => x(e))
              .join(" ")
              .trim()
          : Object.entries(t).reduce((e, [o, r]) => {
              if (!r) return e;
              const u = x(o);
              if (!u) return e;
              let f = e;
              return (f !== "" && (f += " "), f + u);
            }, "")
      : "",
  xe =
    ":host{display:block}.cwc-spinner{position:relative;width:32px;height:32px}.cwc-spinner--light .spinner__nib{background:#fff}.cwc-spinner--dark .spinner__nib{background:#000}.cwc-spinner--small{width:24px;height:24px}.cwc-spinner--small .spinner__nib,.cwc-spinner__nib{margin-left:-1px;width:2px;height:6px;border-radius:1px;-webkit-transform-origin:center 12px;transform-origin:center 12px}.cwc-spinner__nib{position:absolute;left:50%;top:0;-webkit-animation-name:nib;animation-name:nib;animation-direction:reverse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(.33333,0,.66667,.33333);animation-timing-function:cubic-bezier(.33333,0,.66667,.33333);background:#000}.cwc-spinner__nib-0{-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.cwc-spinner__nib-1{-webkit-animation-delay:-.9166666667s;animation-delay:-.9166666667s;-webkit-transform:rotate(30deg);transform:rotate(30deg)}.cwc-spinner__nib-2{-webkit-animation-delay:-.8333333333s;animation-delay:-.8333333333s;-webkit-transform:rotate(60deg);transform:rotate(60deg)}.cwc-spinner__nib-3{-webkit-animation-delay:-.75s;animation-delay:-.75s;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.cwc-spinner__nib-4{-webkit-animation-delay:-.6666666667s;animation-delay:-.6666666667s;-webkit-transform:rotate(120deg);transform:rotate(120deg)}.cwc-spinner__nib-5{-webkit-animation-delay:-.5833333333s;animation-delay:-.5833333333s;-webkit-transform:rotate(150deg);transform:rotate(150deg)}.cwc-spinner__nib-6{-webkit-animation-delay:-.5s;animation-delay:-.5s;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.cwc-spinner__nib-7{-webkit-animation-delay:-.4166666667s;animation-delay:-.4166666667s;-webkit-transform:rotate(210deg);transform:rotate(210deg)}.cwc-spinner__nib-8{-webkit-animation-delay:-.3333333333s;animation-delay:-.3333333333s;-webkit-transform:rotate(240deg);transform:rotate(240deg)}.cwc-spinner__nib-9{-webkit-animation-delay:-.25s;animation-delay:-.25s;-webkit-transform:rotate(270deg);transform:rotate(270deg)}.cwc-spinner__nib-10{-webkit-animation-delay:-.1666666667s;animation-delay:-.1666666667s;-webkit-transform:rotate(300deg);transform:rotate(300deg)}.cwc-spinner__nib-11{-webkit-animation-delay:-.0833333333s;animation-delay:-.0833333333s;-webkit-transform:rotate(330deg);transform:rotate(330deg)}@-webkit-keyframes nib{0%{opacity:.168627451}to{opacity:1}}@keyframes nib{0%{opacity:.168627451}to{opacity:1}}",
  Ce = N(
    class extends E {
      constructor() {
        (super(), this.__registerHost(), (this.isSmall = !1), (this.color = "dark"));
      }
      render() {
        return d(
          W,
          {
            class: x([
              "cwc-spinner",
              {
                "cwc-spinner--light": this.color === "light",
                "cwc-spinner--dark": this.color === "dark",
                "cwc-spinner--small": this.isSmall,
              },
            ]),
          },
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-0" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-1" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-2" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-3" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-4" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-5" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-6" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-7" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-8" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-9" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-10" }),
          d("div", { class: "cwc-spinner__nib cwc-spinner__nib-11" }),
        );
      }
      static get style() {
        return xe;
      }
    },
    [0, "cwc-loading-spinner", { isSmall: [4, "is-small"], color: [1] }],
  );
function ke() {
  if (typeof customElements > "u") return;
  ["cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-loading-spinner":
        customElements.get(e) || customElements.define(e, Ce);
        break;
    }
  });
}
const ze =
    '@charset "UTF-8";.cwc-button{cursor:pointer;display:inline-block;text-align:center;white-space:nowrap;min-width:28px;padding:8px 16px;border-radius:980px;background:#0071e3;color:#fff}.cwc-button:hover{text-decoration:none}.cwc-button:focus{-webkit-box-shadow:0 0 0 4px rgba(0,125,250,.6);box-shadow:0 0 0 4px rgba(0,125,250,.6);outline:none}.cwc-button:focus[data-focus-method=mouse]:not(input):not(textarea):not(select),.cwc-button:focus[data-focus-method=touch]:not(input):not(textarea):not(select){-webkit-box-shadow:none;box-shadow:none}.cwc-button:active{outline:none}.cwc-button.disabled,.cwc-button:disabled{cursor:default}@media only screen and (min-width:1069px){.cwc-button{font-size:17px;line-height:1.1764805882;font-weight:400;letter-spacing:-.022em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh){letter-spacing:0}.cwc-button:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button:hover{background:#0077ed}.cwc-button:active{background:#006edb}.cwc-button.disabled,.cwc-button:disabled{background:#0071e3;color:#fff;opacity:.32}.cwc-button-block{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border-radius:8px}.cwc-button-neutral{background:#1d1d1f;color:#fff}.cwc-button-neutral:hover{background:#272729}.cwc-button-neutral:active{background:#18181a}.cwc-button-neutral.disabled,.cwc-button-neutral:disabled{background:#1d1d1f;color:#fff;opacity:.32}.cwc-button-secondary{background:#e8e8ed;color:#000}.cwc-button-secondary:hover{background:#ebebf0}.cwc-button-secondary:active{background:#e6e6eb}.cwc-button-secondary.disabled,.cwc-button-secondary:disabled{background:#e8e8ed;color:#000;opacity:.56}.cwc-button-secondary-alpha{background:rgba(0,0,0,.08);color:#000}.cwc-button-secondary-alpha:hover{background:rgba(0,0,0,.07)}.cwc-button-secondary-alpha:active{background:rgba(0,0,0,.09)}.cwc-button-secondary-alpha.disabled,.cwc-button-secondary-alpha:disabled{background:rgba(0,0,0,.08);color:#000;opacity:.56}.cwc-button-super{min-width:28px;padding:18px 31px}@media only screen and (min-width:1069px){.cwc-button-super{font-size:17px;line-height:1.1764805882;font-weight:400;letter-spacing:-.022em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh){letter-spacing:0}.cwc-button-super:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button-super.cwc-button-block{border-radius:12px}.cwc-button-elevated{min-width:26px;padding:12px 22px}@media only screen and (min-width:1069px){.cwc-button-elevated{font-size:17px;line-height:1.1764805882;font-weight:400;letter-spacing:-.022em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh){letter-spacing:0}.cwc-button-elevated:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button-elevated.cwc-button-block{border-radius:10px}.cwc-button-reduced{min-width:23px;padding:4px 11px}@media only screen and (min-width:1069px){.cwc-button-reduced{font-size:12px;line-height:1.3333733333;font-weight:400;letter-spacing:-.01em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh){letter-spacing:0}.cwc-button-reduced:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button-reduced.cwc-button-block{border-radius:5px}cwc-button{display:inline-block;position:relative}',
  Ae = N(
    class extends E {
      constructor() {
        (super(),
          this.__registerHost(),
          (this.cwcFocus = A(this, "cwcFocus", 7)),
          (this.cwcBlur = A(this, "cwcBlur", 7)),
          (this.cwcClick = A(this, "cwcClick", 7)),
          (this.buttonFocus = () => {
            this.isButtonAutoFocus &&
              setImmediate(() => {
                this.buttonElem.focus();
              });
          }),
          (this.emitFocus = () => {
            var e;
            (e = this.cwcFocus) === null || e === void 0 || e.emit();
          }),
          (this.emitBlur = () => {
            var e;
            (e = this.cwcBlur) === null || e === void 0 || e.emit();
          }),
          (this.emitClick = () => {
            var e;
            (e = this.cwcClick) === null || e === void 0 || e.emit();
          }),
          (this.type = "button"),
          (this.size = "base"),
          (this.shape = "block"),
          (this.color = "primary"),
          (this.nativeButtonClass = void 0),
          (this.isLoading = !1),
          (this.isButtonAutoFocus = !1),
          (this.disabled = !1),
          (this.isLoadingSmall = !1));
      }
      componentDidLoad() {
        (this.buttonElem.offsetHeight < 40 && (this.isLoadingSmall = !0), this.buttonFocus());
      }
      componentDidUpdate() {
        this.buttonFocus();
      }
      render() {
        return d(
          "button",
          {
            class: x([
              "cwc-button",
              this.nativeButtonClass,
              {
                [`cwc-button-${this.size}`]: this.size !== "base",
                [`cwc-button-${this.color}`]: this.color !== "primary",
                [`cwc-button-${this.shape}`]: this.shape !== "pill",
              },
            ]),
            ref: (e) => (this.buttonElem = e),
            type: this.type,
            disabled: this.disabled,
            onFocus: this.emitFocus,
            onBlur: this.emitBlur,
            onClick: this.emitClick,
          },
          this.isLoading && d("cwc-loading-spinner", { "is-small": this.isLoadingSmall, color: "dark" }),
          d("slot", null),
        );
      }
      static get style() {
        return ze;
      }
    },
    [
      4,
      "cwc-button",
      {
        type: [1],
        size: [1],
        shape: [1],
        color: [1],
        nativeButtonClass: [1, "native-button-class"],
        isLoading: [4, "is-loading"],
        isButtonAutoFocus: [4, "is-button-auto-focus"],
        disabled: [4],
        isLoadingSmall: [32],
      },
    ],
  );
function Re() {
  if (typeof customElements > "u") return;
  ["cwc-button", "cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-button":
        customElements.get(e) || customElements.define(e, Ae);
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || ke();
        break;
    }
  });
}
const T = new Map(),
  Te =
    ".cwc-icon{display:inline-block}.cwc-icon svg{min-height:100%;width:inherit;height:inherit;display:block;color:currentColor}.cwc-icon svg *{fill:currentColor}",
  Le = (t) => t.length > 0 && /^[a-zA-Z0-9-]+$/.test(t),
  Ie = N(
    class extends E {
      constructor() {
        (super(), this.__registerHost(), (this.iconContent = void 0), (this.name = void 0));
      }
      async nameChanged(e, o) {
        e !== o && (await this.loadAsset());
      }
      async componentWillLoad() {
        await this.loadAsset();
      }
      async loadAsset() {
        const { name: e } = this;
        if (!Le(e)) {
          ((this.iconContent = ""), console.warn(`"${e}" is not a valid icon name.`));
          return;
        }
        if (T.has(e)) {
          this.iconContent = T.get(e);
          return;
        }
        try {
          const o = await fetch(I(`icons/${e}.svg`));
          if (o.ok) ((this.iconContent = await o.text()), T.set(e, this.iconContent));
          else throw ((this.iconContent = ""), new Error("Icon not found"));
        } catch (o) {
          (console.warn("Cannot load icon", this.name), (this.iconContent = ""));
        }
      }
      render() {
        return d(W, { class: "cwc-icon", role: "presentation", "aria-hidden": "true", innerHTML: this.iconContent });
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { name: ["nameChanged"] };
      }
      static get style() {
        return Te;
      }
    },
    [0, "cwc-icon", { name: [513], iconContent: [32] }, void 0, { name: ["nameChanged"] }],
  );
function Ke() {
  if (typeof customElements > "u") return;
  ["cwc-icon"].forEach((e) => {
    switch (e) {
      case "cwc-icon":
        customElements.get(e) || customElements.define(e, Ie);
        break;
    }
  });
}
export { Ke as a, Re as b, ke as d, x as g, Ge as i, Ee as t };
