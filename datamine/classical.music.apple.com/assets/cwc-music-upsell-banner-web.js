import { B as L, g as N, p as H, H as T, h as l, c as M, d as A } from "./index-2.js";
const re = "M100",
  se = {
    M75: ["bh", "by", "td", "eg", "jo", "xk", "lb", "ly", "mv", "np", "om", "qa", "rw", "sa", "tn", "ae", "uz", "ye"],
    GENERIC: ["cn"],
    UNSUPPORTED: ["af", "al", "bn", "bf", "ir", "pk", "pw", "st"],
  },
  ce = (n) => {
    var e, i;
    return (i = (e = Object.entries(se).find(([, a]) => a.includes(n))) === null || e === void 0 ? void 0 : e[0]) !==
      null && i !== void 0
      ? i
      : re;
  };
var h =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function G(n, e, i) {
  return (
    (i = {
      path: e,
      exports: {},
      require: function (a, s) {
        return le();
      },
    }),
    n(i, i.exports),
    i.exports
  );
}
function le() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ue = G(function (n, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function i() {
      if (typeof navigator > "u") return [];
      if (navigator.languages) return navigator.languages;
      var a = navigator.language || navigator.userLanguage;
      return a ? [a] : [];
    }
    e.getLanguages = i;
  }),
  de = G(function (n, e) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default =
        typeof FastBoot < "u"
          ? FastBoot.require("buffer").Buffer
          : typeof process < "u" && process.versions !== null && process.versions.node !== null
            ? Buffer
            : window.Buffer));
  }),
  fe = G(function (n, e) {
    var i =
        (h && h.__read) ||
        function (t, r) {
          var o = typeof Symbol == "function" && t[Symbol.iterator];
          if (!o) return t;
          var c = o.call(t),
            u,
            d = [],
            m;
          try {
            for (; (r === void 0 || r-- > 0) && !(u = c.next()).done;) d.push(u.value);
          } catch (g) {
            m = { error: g };
          } finally {
            try {
              u && !u.done && (o = c.return) && o.call(c);
            } finally {
              if (m) throw m.error;
            }
          }
          return d;
        },
      a =
        (h && h.__spread) ||
        function () {
          for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(i(arguments[r]));
          return t;
        },
      s =
        (h && h.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var f = s(de);
    function w(t) {
      return !!t && typeof t == "object" && !Array.isArray(t);
    }
    e.isObject = w;
    function _() {
      for (var t = I() + I(); t.length < 16;) t += I();
      return t.slice(0, 16);
    }
    e.generateUUID = _;
    function I() {
      return Math.random().toString(16).substring(2);
    }
    e.isLibraryType = k(function (t) {
      return /^[a|i|l|p]{1}\.[a-zA-Z0-9]+$/.test(t);
    });
    function E(t) {
      var r = function (o) {
        return typeof o < "u" && o !== null;
      };
      return (
        arguments.length === 0 && typeof process < "u" && (t = process),
        (r(t) && r(t.versions) && r(t.versions.node)) || typeof FastBoot < "u"
      );
    }
    ((e.isNodeEnvironment = E),
      (e.atob = k(
        E()
          ? function (t) {
              return f.default.from(t, "base64").toString("binary");
            }
          : function (t) {
              return window.atob(t);
            },
      )),
      (e.btoa = k(
        E()
          ? function (t) {
              return f.default.from(t).toString("base64");
            }
          : function (t) {
              return window.btoa(t);
            },
      )));
    function k(t) {
      return function () {
        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
        for (var c = "", u = r.length; u--;) {
          var d = r[u];
          ((c += d === Object(d) ? JSON.stringify(d) : d), t._memoized || (t._memoized = {}));
        }
        return c in t._memoized ? t._memoized[c] : (t._memoized[c] = t.apply(void 0, r));
      };
    }
    e.memoize = k;
    function te(t, r) {
      var o = O(r);
      return (
        o === "" || (t.indexOf("?") === -1 && (t = t + "?"), (t = t.endsWith("?") ? "" + t + o : t + "&" + o)), t
      );
    }
    e.addQueryParams = te;
    function O(t) {
      return t
        ? Object.keys(t).reduce(function (r, o) {
            var c = t[o];
            return w(c)
              ? Object.keys(c).reduce(function (u, d) {
                  return (
                    "" +
                    u +
                    (u ? "&" : "") +
                    encodeURIComponent(o) +
                    "[" +
                    encodeURIComponent(d) +
                    "]=" +
                    encodeURIComponent(c[d])
                  );
                }, r)
              : "" + r + (r ? "&" : "") + encodeURIComponent(o) + "=" + encodeURIComponent(t[o]);
          }, "")
        : "";
    }
    e.urlEncodeParameters = O;
    function ie(t) {
      var r = t.split("/"),
        o = r.pop(),
        c = i((!!o && o.match(/\d+/g)) || ["100", "100"], 2),
        u = c[0],
        d = c[1];
      return { width: parseInt(u, 10), height: parseInt(d, 10), url: t.replace(u + "x" + d, "{w}x{h}") };
    }
    ((e.getArtworkFromURL = ie),
      (e.throttled = function (t, r) {
        var o = 0;
        return function () {
          var c = Date.now();
          if (!(c - o < t)) return ((o = c), r.apply(this, Array.from(arguments)));
        };
      }),
      (e.debounce = function (t, r, o) {
        (r === void 0 && (r = 250), o === void 0 && (o = { isImmediate: !1 }));
        var c;
        return function () {
          for (var u = [], d = 0; d < arguments.length; d++) u[d] = arguments[d];
          var m = this,
            g = function () {
              ((c = void 0), o.isImmediate || t.apply(m, u));
            },
            p = o.isImmediate && c === void 0;
          (c !== void 0 && clearTimeout(c), (c = setTimeout(g, r)), p && t.apply(m, u));
        };
      }));
    function ae(t) {
      var r,
        o = {};
      if (!t || (t.startsWith("http") && !t.includes("?"))) return {};
      try {
        var c = (r = t.split("?")[1]) !== null && r !== void 0 ? r : t;
        o = c.split("&").reduce(function (u, d) {
          var m = i(d.split("="), 2),
            g = m[0],
            p = m[1];
          return ((u[decodeURIComponent(g)] = decodeURIComponent(p)), u);
        }, {});
      } catch (u) {
        return {};
      }
      return o;
    }
    e.parseQueryParams = ae;
    function oe(t) {
      try {
        var r = i(t.split("?", 2), 2),
          o = r[0],
          c = r[1];
        if (typeof c > "u") return o;
        var u = c.split("&").map(function (p) {
            return p.split("=", 2);
          }),
          d = a(Array(u.length).keys());
        d.sort(function (p, S) {
          var F = u[p],
            P = u[S];
          return F < P ? -1 : F > P ? 1 : p - S;
        });
        var m = d.map(function (p) {
            return u[p];
          }),
          g = m
            .map(function (p) {
              var S = i(p, 2),
                F = S[0],
                P = S[1];
              return typeof P < "u" ? F + "=" + P : F;
            })
            .join("&");
        return o + "?" + g;
      } catch (p) {
        return t;
      }
    }
    e.stableSortQueryParams = oe;
  });
const be = (n) => {
    let e = null;
    return (...i) =>
      e ||
      ((e = n(...i).finally(() => {
        e = null;
      })),
      e);
  },
  pe = "en-us";
var $;
(function (n) {
  ((n.Music = "music"),
    (n.Tv = "tv"),
    (n.AppStore = "apps"),
    (n.Business = "business"),
    (n.BusinessEssentials = "businessessentials"),
    (n.ClassicalMusic = "classical"),
    (n.Education = "education"),
    (n.Podcasts = "podcasts"),
    (n.PodcastsConnect = "podcastcreators"),
    (n.SeasonalTV = "seasonaltv"),
    (n.SeasonSubscription = "seasonsubscription"),
    (n.SharedBusiness = "sharedbusiness"),
    (n.SharedEducation = "sharededucation"),
    (n.PodcastsConnectDeprecated = "xyzw"),
    (n.Activate = "activate"),
    (n.Car = "car"),
    (n.Other = "other"));
})($ || ($ = {}));
let W = "",
  Y = !1,
  z = {},
  C = "",
  Z = !1,
  X = !1,
  B = be(async () => {
    if (C && !Y) {
      const e = await (await fetch(`${C}/default-localizations.json`)).json();
      return ((Y = !0), e);
    }
  });
const D = pe,
  R = {},
  me = (n, e = { showScreamers: !1 }) => {
    const { defaultLocalizations: i, importDefaultLocalizations: a, showScreamers: s, showUnlocalizedUi: f } = e;
    ((C = n),
      typeof i == "object" && i && ((B = () => Promise.resolve(void 0)), (z = i)),
      typeof a == "function" && (B = a),
      typeof s == "boolean" && (Z = s),
      typeof f == "boolean" && (X = f));
  };
let v = "",
  y;
const we = async (n = D) => {
    if (!C) return {};
    const e = `${C}/${n}.json`;
    return (await fetch(e)).json();
  },
  ge = async (n = D) => {
    if (!n) throw new Error("loadLocalizations: did not receive newLanguage");
    const e = n.toLowerCase(),
      [i, a] = await Promise.allSettled([we(e), B()]);
    (i.status === "fulfilled" ? (R[e] = i.value) : console.error(`Failed to load localizations for ${e}`),
      a.status === "fulfilled"
        ? (z = (Array.isArray(a.value) ? a.value : [a.value]).reduce((f, w) => ({ ...f, ...w }), {}))
        : console.error("Failed to load default localizations"),
      (W = e));
  },
  Q = (n) =>
    ge(n).finally(() => {
      ((v = ""), (y = Promise.resolve()));
    }),
  he = async (n = D) => {
    if (!n) throw new Error("loadLocalizationsIfNeeded: did not receive newLanguage");
    const e = n.toLowerCase();
    if (R[e]) {
      W = e;
      return;
    }
    return (v || ((v = e), (y = Q(e))), v !== e && y && ((v = e), (y = y.finally(() => ((v = e), Q(e))))), y);
  },
  ve = /@@([^@]+)@@/g,
  ye = (n, e = {}) => (typeof n != "string" ? "" : n.replace(ve, (i, a) => e[a] || a)),
  xe = /^\*\*.+\*\*$/,
  J = (n) => xe.test(n),
  _e = (n, e = { skipDefaultLocalizationsGet: !1 }) => {
    const i = R[W] || {};
    let a = i[n],
      s = n in i && !J(a);
    const f = ["Web"];
    for (const w of f)
      typeof n == "string" &&
        n.startsWith(`CommerceUI.${w}.`) &&
        !s &&
        ((n = n.replace(`CommerceUI.${w}.`, `ASE.Web.Commerce.${w}.`)), (a = i[n]), (s = n in i && !J(a)));
    return X ? (s ? n : `**${n}**`) : s ? a : n in z && !e.skipDefaultLocalizationsGet ? z[n] : Z ? `**${n}**` : "";
  },
  Se = (n, e = {}, i = { skipDefaultLocalizationsGet: !1 }) => {
    const a = _e(n, i);
    return ye(a, e);
  },
  j = L === null || L === void 0 ? void 0 : L.isDev,
  Fe = "en-us",
  b = (n, e = {}) => Se(n, e),
  Pe = ["l", "fb_locale"],
  Ce = (n) => {
    const e = j ? "locales/default-localizations.json" : `locales/${n}.json`;
    return N(e);
  },
  He = async () => (await fetch(Ce(Fe), { ...(j ? { cache: "no-store" } : {}) })).json(),
  Te = async (n) => he(n),
  ke = (n, e) => {
    const i = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(n);
    return i != null && i[1] ? decodeURI(i[1]) : void 0;
  },
  Ae = (n) => [].concat(Ie(n), Ee(n), ze(), Le()).filter((i) => !!i),
  ze = () => {
    const n = fe.isNodeEnvironment() ? "" : window.location.toString(),
      e = Pe.reduce((i, a) => {
        const s = ke(n, a);
        return (s && i.add(s), i);
      }, new Set());
    return Array.from(e);
  },
  Ie = (n) => {
    const e = n.getAttribute("language");
    return e ? [e] : [];
  },
  Ee = (n) => {
    const e = n.closest("[lang]");
    return e ? [e.lang] : [];
  },
  Le = () => {
    const n = ue.getLanguages();
    return n == null ? void 0 : n.map((e) => e.toLocaleLowerCase());
  },
  Ue = async (n, e) => {
    try {
      me(N(e), { importDefaultLocalizations: He, showScreamers: j });
    } catch (i) {
      console.error("[CWC] Failed to load default language", i);
    }
    for (const i of Ae(n))
      try {
        await Te(i);
        break;
      } catch (a) {
        console.error(`[CWC] Failed to load language: ${i}`, a);
      }
  },
  x = (n) =>
    n
      ? typeof n == "string"
        ? n
        : Array.isArray(n)
          ? n
              .map((e) => x(e))
              .join(" ")
              .trim()
          : Object.entries(n).reduce((e, [i, a]) => {
              if (!a) return e;
              const s = x(i);
              if (!s) return e;
              let f = e;
              return (f !== "" && (f += " "), f + s);
            }, "")
      : "",
  Be =
    ":host{display:block}.cwc-spinner{position:relative;width:32px;height:32px}.cwc-spinner--light .spinner__nib{background:#fff}.cwc-spinner--dark .spinner__nib{background:#000}.cwc-spinner--small{width:24px;height:24px}.cwc-spinner--small .spinner__nib,.cwc-spinner__nib{margin-left:-1px;width:2px;height:6px;border-radius:1px;-webkit-transform-origin:center 12px;transform-origin:center 12px}.cwc-spinner__nib{position:absolute;left:50%;top:0;-webkit-animation-name:nib;animation-name:nib;animation-direction:reverse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(.33333,0,.66667,.33333);animation-timing-function:cubic-bezier(.33333,0,.66667,.33333);background:#000}.cwc-spinner__nib-0{-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.cwc-spinner__nib-1{-webkit-animation-delay:-.9166666667s;animation-delay:-.9166666667s;-webkit-transform:rotate(30deg);transform:rotate(30deg)}.cwc-spinner__nib-2{-webkit-animation-delay:-.8333333333s;animation-delay:-.8333333333s;-webkit-transform:rotate(60deg);transform:rotate(60deg)}.cwc-spinner__nib-3{-webkit-animation-delay:-.75s;animation-delay:-.75s;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.cwc-spinner__nib-4{-webkit-animation-delay:-.6666666667s;animation-delay:-.6666666667s;-webkit-transform:rotate(120deg);transform:rotate(120deg)}.cwc-spinner__nib-5{-webkit-animation-delay:-.5833333333s;animation-delay:-.5833333333s;-webkit-transform:rotate(150deg);transform:rotate(150deg)}.cwc-spinner__nib-6{-webkit-animation-delay:-.5s;animation-delay:-.5s;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.cwc-spinner__nib-7{-webkit-animation-delay:-.4166666667s;animation-delay:-.4166666667s;-webkit-transform:rotate(210deg);transform:rotate(210deg)}.cwc-spinner__nib-8{-webkit-animation-delay:-.3333333333s;animation-delay:-.3333333333s;-webkit-transform:rotate(240deg);transform:rotate(240deg)}.cwc-spinner__nib-9{-webkit-animation-delay:-.25s;animation-delay:-.25s;-webkit-transform:rotate(270deg);transform:rotate(270deg)}.cwc-spinner__nib-10{-webkit-animation-delay:-.1666666667s;animation-delay:-.1666666667s;-webkit-transform:rotate(300deg);transform:rotate(300deg)}.cwc-spinner__nib-11{-webkit-animation-delay:-.0833333333s;animation-delay:-.0833333333s;-webkit-transform:rotate(330deg);transform:rotate(330deg)}@-webkit-keyframes nib{0%{opacity:.168627451}to{opacity:1}}@keyframes nib{0%{opacity:.168627451}to{opacity:1}}",
  Ne = H(
    class extends T {
      constructor() {
        (super(), this.__registerHost(), (this.isSmall = !1), (this.color = "dark"));
      }
      render() {
        return l(
          M,
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
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-0" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-1" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-2" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-3" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-4" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-5" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-6" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-7" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-8" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-9" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-10" }),
          l("div", { class: "cwc-spinner__nib cwc-spinner__nib-11" }),
        );
      }
      static get style() {
        return Be;
      }
    },
    [0, "cwc-loading-spinner", { isSmall: [4, "is-small"], color: [1] }],
  );
function K() {
  if (typeof customElements > "u") return;
  ["cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-loading-spinner":
        customElements.get(e) || customElements.define(e, Ne);
        break;
    }
  });
}
const Me =
    '@charset "UTF-8";.cwc-button{cursor:pointer;display:inline-block;text-align:center;white-space:nowrap;min-width:28px;padding:8px 16px;border-radius:980px;background:#0071e3;color:#fff}.cwc-button:hover{text-decoration:none}.cwc-button:focus{-webkit-box-shadow:0 0 0 4px rgba(0,125,250,.6);box-shadow:0 0 0 4px rgba(0,125,250,.6);outline:none}.cwc-button:focus[data-focus-method=mouse]:not(input):not(textarea):not(select),.cwc-button:focus[data-focus-method=touch]:not(input):not(textarea):not(select){-webkit-box-shadow:none;box-shadow:none}.cwc-button:active{outline:none}.cwc-button.disabled,.cwc-button:disabled{cursor:default}@media only screen and (min-width:1069px){.cwc-button{font-size:17px;line-height:1.1764805882;font-weight:400;letter-spacing:-.022em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh){letter-spacing:0}.cwc-button:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button:hover{background:#0077ed}.cwc-button:active{background:#006edb}.cwc-button.disabled,.cwc-button:disabled{background:#0071e3;color:#fff;opacity:.32}.cwc-button-block{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border-radius:8px}.cwc-button-neutral{background:#1d1d1f;color:#fff}.cwc-button-neutral:hover{background:#272729}.cwc-button-neutral:active{background:#18181a}.cwc-button-neutral.disabled,.cwc-button-neutral:disabled{background:#1d1d1f;color:#fff;opacity:.32}.cwc-button-secondary{background:#e8e8ed;color:#000}.cwc-button-secondary:hover{background:#ebebf0}.cwc-button-secondary:active{background:#e6e6eb}.cwc-button-secondary.disabled,.cwc-button-secondary:disabled{background:#e8e8ed;color:#000;opacity:.56}.cwc-button-secondary-alpha{background:rgba(0,0,0,.08);color:#000}.cwc-button-secondary-alpha:hover{background:rgba(0,0,0,.07)}.cwc-button-secondary-alpha:active{background:rgba(0,0,0,.09)}.cwc-button-secondary-alpha.disabled,.cwc-button-secondary-alpha:disabled{background:rgba(0,0,0,.08);color:#000;opacity:.56}.cwc-button-super{min-width:28px;padding:18px 31px}@media only screen and (min-width:1069px){.cwc-button-super{font-size:17px;line-height:1.1764805882;font-weight:400;letter-spacing:-.022em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh){letter-spacing:0}.cwc-button-super:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-super:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button-super.cwc-button-block{border-radius:12px}.cwc-button-elevated{min-width:26px;padding:12px 22px}@media only screen and (min-width:1069px){.cwc-button-elevated{font-size:17px;line-height:1.1764805882;font-weight:400;letter-spacing:-.022em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh){letter-spacing:0}.cwc-button-elevated:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-elevated:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button-elevated.cwc-button-block{border-radius:10px}.cwc-button-reduced{min-width:23px;padding:4px 11px}@media only screen and (min-width:1069px){.cwc-button-reduced{font-size:12px;line-height:1.3333733333;font-weight:400;letter-spacing:-.01em;font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(ar){letter-spacing:0;font-family:SF Pro AR,SF Pro Gulf,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(ja){letter-spacing:0;font-family:SF Pro JP,SF Pro Text,SF Pro Icons,Hiragino Kaku Gothic Pro,ヒラギノ角ゴ Pro W3,メイリオ,Meiryo,ＭＳ Ｐゴシック,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(ko){letter-spacing:0;font-family:SF Pro KR,SF Pro Text,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh){letter-spacing:0}.cwc-button-reduced:lang(th){font-family:SF Pro TH,SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-CN){font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-HK){font-family:SF Pro HK,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-MO){font-family:SF Pro HK,SF Pro TC,SF Pro Text,SF Pro Icons,PingFang HK,Helvetica Neue,Helvetica,Arial,sans-serif}.cwc-button-reduced:lang(zh-TW){font-family:SF Pro TC,SF Pro Text,SF Pro Icons,PingFang TC,Helvetica Neue,Helvetica,Arial,sans-serif}}.cwc-button-reduced.cwc-button-block{border-radius:5px}cwc-button{display:inline-block;position:relative}',
  Ge = H(
    class extends T {
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
        return l(
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
          this.isLoading && l("cwc-loading-spinner", { "is-small": this.isLoadingSmall, color: "dark" }),
          l("slot", null),
        );
      }
      static get style() {
        return Me;
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
function V() {
  if (typeof customElements > "u") return;
  ["cwc-button", "cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-button":
        customElements.get(e) || customElements.define(e, Ge);
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || K();
        break;
    }
  });
}
const U = new Map(),
  We =
    ".cwc-icon{display:inline-block}.cwc-icon svg{min-height:100%;width:inherit;height:inherit;display:block;color:currentColor}.cwc-icon svg *{fill:currentColor}",
  De = (n) => n.length > 0 && /^[a-zA-Z0-9-]+$/.test(n),
  Re = H(
    class extends T {
      constructor() {
        (super(), this.__registerHost(), (this.iconContent = void 0), (this.name = void 0));
      }
      async nameChanged(e, i) {
        e !== i && (await this.loadAsset());
      }
      async componentWillLoad() {
        await this.loadAsset();
      }
      async loadAsset() {
        const { name: e } = this;
        if (!De(e)) {
          ((this.iconContent = ""), console.warn(`"${e}" is not a valid icon name.`));
          return;
        }
        if (U.has(e)) {
          this.iconContent = U.get(e);
          return;
        }
        try {
          const i = await fetch(N(`icons/${e}.svg`));
          if (i.ok) ((this.iconContent = await i.text()), U.set(e, this.iconContent));
          else throw ((this.iconContent = ""), new Error("Icon not found"));
        } catch (i) {
          (console.warn("Cannot load icon", this.name), (this.iconContent = ""));
        }
      }
      render() {
        return l(M, { class: "cwc-icon", role: "presentation", "aria-hidden": "true", innerHTML: this.iconContent });
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { name: ["nameChanged"] };
      }
      static get style() {
        return We;
      }
    },
    [0, "cwc-icon", { name: [513], iconContent: [32] }, void 0, { name: ["nameChanged"] }],
  );
function ee() {
  if (typeof customElements > "u") return;
  ["cwc-icon"].forEach((e) => {
    switch (e) {
      case "cwc-icon":
        customElements.get(e) || customElements.define(e, Re);
        break;
    }
  });
}
const je =
  ".cwc-upsell-banner{position:relative;width:100%;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;padding:12px 30px}.cwc-upsell-banner__head{font-weight:600;font-size:18px;line-height:1.23}.cwc-upsell-banner__subhead{margin-top:8px;color:hsla(0,0%,100%,.8);font-size:14px}@media only screen and (max-width:999px){.cwc-upsell-banner__head{font-size:14px;line-height:1.28}.cwc-upsell-banner__subhead{font-size:11px;font-weight:500}}.cwc-upsell-banner__cta-button .cwc-button{letter-spacing:0;border-radius:4px;height:32px;min-width:125px;font-weight:600;font-size:13px;font-family:unset;background:#fff;color:#000;-webkit-box-shadow:0 0 20px rgba(0,0,0,.06);box-shadow:0 0 20px rgba(0,0,0,.06)}.cwc-upsell-banner__close-button{display:none}.cwc-upsell-banner__branding{height:20px;margin-right:20px}.cwc-upsell-banner__text--with-branding{padding-left:20px;border-left:1px solid hsla(0,0%,100%,.3)}.cwc-upsell-banner__logo-vector{max-width:100%;height:20px;fill:#fff}.cwc-upsell-banner__close-icon{width:100%}";
let q = !1;
const Ke = H(
  class extends T {
    constructor() {
      (super(),
        this.__registerHost(),
        (this.cwcCtaClick = A(this, "cwcCtaClick", 7)),
        (this.handleCloseClick = (e) => {
          ((this.isCollapsed = !0), (q = !0), e.stopPropagation());
        }),
        (this.headerText = void 0),
        (this.subheaderText = void 0),
        (this.ctaText = void 0),
        (this.brandingIcon = void 0),
        (this.brandingAria = void 0),
        (this.hasCloseButton = !1),
        (this.isCollapsed = q));
    }
    render() {
      return l(
        M,
        {
          class: x(["cwc-upsell-banner", { "cwc-upsell-banner--collapsed": this.isCollapsed }]),
          onClick: this.cwcCtaClick.emit,
          "data-test": "upsell-banner",
        },
        this.hasCloseButton &&
          !this.isCollapsed &&
          l(
            "button",
            {
              "data-test": "close-button",
              class: "cwc-upsell-banner__close-button",
              "aria-label": b("Close"),
              onClick: this.handleCloseClick,
            },
            l("cwc-icon", {
              name: "upsell-mobile-banner-close",
              class: "cwc-upsell-banner__close-icon",
              "aria-hidden": "true",
            }),
          ),
        this.brandingIcon &&
          l(
            "div",
            { class: "cwc-upsell-banner__branding", "aria-label": this.brandingAria },
            l("cwc-icon", {
              name: "music-logo",
              class: "cwc-upsell-banner__logo-vector",
              role: "presentation",
              "data-test": "branding-logo",
            }),
          ),
        (this.headerText || this.subheaderText) &&
          l(
            "div",
            {
              class: x(["cwc-upsell-banner__text", { "cwc-upsell-banner__text--with-branding": !!this.brandingIcon }]),
            },
            this.headerText &&
              l("div", { class: "cwc-upsell-banner__head", "data-test": "header-text" }, this.headerText),
            this.subheaderText &&
              l("div", { class: "cwc-upsell-banner__subhead", "data-test": "subheader-text" }, this.subheaderText),
          ),
        this.ctaText &&
          l(
            "cwc-button",
            { class: "cwc-upsell-banner__cta-button", color: "secondary", "data-test": "cta-button" },
            this.ctaText,
          ),
      );
    }
    static get style() {
      return je;
    }
  },
  [
    0,
    "cwc-upsell-banner",
    {
      headerText: [1, "header-text"],
      subheaderText: [1, "subheader-text"],
      ctaText: [1, "cta-text"],
      brandingIcon: [1, "branding-icon"],
      brandingAria: [1, "branding-aria"],
      hasCloseButton: [4, "has-close-button"],
      isCollapsed: [32],
    },
  ],
);
function Oe() {
  if (typeof customElements > "u") return;
  ["cwc-upsell-banner", "cwc-button", "cwc-icon", "cwc-loading-spinner"].forEach((e) => {
    switch (e) {
      case "cwc-upsell-banner":
        customElements.get(e) || customElements.define(e, Ke);
        break;
      case "cwc-button":
        customElements.get(e) || V();
        break;
      case "cwc-icon":
        customElements.get(e) || ee();
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || K();
        break;
    }
  });
}
const $e =
    ".cwc-upsell-banner{width:100vw;background-color:var(--musicBrandBG);color:#fff;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.07);box-shadow:0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.07)}@media only screen and (min-width:484px){.cwc-upsell-banner__text{-ms-flex:1;flex:1;margin-right:16px}.cwc-upsell-banner__head{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}}@media only screen and (max-width:483px){.cwc-upsell-banner__text{width:100%;-ms-flex-pack:center;justify-content:center;text-align:center}.cwc-upsell-banner--collapsed .cwc-upsell-banner__text{padding-top:7px;padding-bottom:7px}.cwc-upsell-banner__cta-button{display:none}.cwc-upsell-banner__close-button{position:absolute;z-index:1;top:0;-webkit-box-sizing:content-box;box-sizing:content-box;width:10px;height:10px;padding:10px;background:none;border:none;outline:none;right:0}.cwc-upsell-banner .cwc-upsell-banner__close-button{display:block}.cwc-upsell-banner--collapsed .cwc-upsell-banner__close-button,.cwc-upsell-banner--collapsed .cwc-upsell-banner__subhead{display:none}}",
  ne = H(
    class extends T {
      constructor() {
        (super(),
          this.__registerHost(),
          (this.getHeaderText = () => {
            const {
                isClassical: e,
                isIntroOffer: i,
                isFreeTrial: a,
                introPeriod: s,
                introPrice: f,
                storefront: w,
              } = this,
              _ = ce(w);
            if (e)
              return b(
                i && s && a
                  ? "CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Header.FreeTrial.GENERIC"
                  : "CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Header.NonFreeTrial.GENERIC",
              );
            if (i && s) {
              if (a)
                return b(`CommerceUI.CWC.Music.UpsellBanner.Subscribe.Header.FreeTrial.${_}`, {
                  introPricingDuration: s,
                  introPrice: f,
                });
              if (f)
                return b(`CommerceUI.CWC.Music.UpsellBanner.Subscribe.Header.PaidTrial.${_}`, {
                  introPricingDuration: s,
                  introPrice: f,
                });
            }
            return b(`CommerceUI.CWC.Music.UpsellBanner.Subscribe.Header.NonTrial.${_}`);
          }),
          (this.getSubHeaderText = () => {
            const { introPeriod: e, basePriceString: i, isIntroOffer: a, isFreeTrial: s, introPrice: f } = this;
            if (!i) return null;
            if (this.isClassical)
              return s
                ? b("CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Subhead.Free", {
                    introPricingDuration: e,
                    price: i,
                  })
                : b("CommerceUI.CWC.Music.Classical.UpsellBanner.Subscribe.Subhead.NotFree", {
                    introPricingDuration: e,
                    price: i,
                  });
            if (!a) return b("AMWeb.UpsellBanner.Subscribe.Subhead.NonTrial", { introPricingDuration: e, price: i });
            if (e) {
              if (s) return b("AMWeb.UpsellBanner.Subscribe.Subhead.Free", { introPricingDuration: e, price: i });
              if (f)
                return b("AMWeb.UpsellBanner.Subscribe.Subhead.Paid", {
                  introPricingDuration: e,
                  introPrice: f,
                  price: i,
                });
            }
            return b("AMWeb.UpsellBanner.Subscribe.Subhead.NonTrial", { price: i });
          }),
          (this.getCTAText = () => {
            const { isClassical: e, isIntroOffer: i, isFreeTrial: a } = this,
              s = e ? "CommerceUI.CWC.Music.Classical" : "AMWeb";
            if (i) {
              if (a) return b(`${s}.UpsellBanner.Subscribe.Free`);
              if (!a) return b(`${s}.UpsellBanner.Subscribe.Paid`);
            }
            return b("AMWeb.UpsellBanner.Subscribe.NonTrial");
          }),
          (this.storefront = void 0),
          (this.isEligibleForTrial = void 0),
          (this.isClassical = void 0),
          (this.isEligibleForWinbackOffer = void 0),
          (this.isIntroOffer = void 0),
          (this.isFreeTrial = void 0),
          (this.basePriceString = void 0),
          (this.introPeriod = void 0),
          (this.introPrice = void 0));
      }
      async componentWillLoad() {
        await Ue(this.el, "locales");
      }
      render() {
        return l("cwc-upsell-banner", {
          headerText: this.getHeaderText(),
          subheaderText: this.getSubHeaderText(),
          ctaText: this.getCTAText(),
          hasCloseButton: !0,
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return $e;
      }
    },
    [
      0,
      "cwc-music-upsell-banner-web",
      {
        storefront: [1],
        isEligibleForTrial: [4, "is-eligible-for-trial"],
        isClassical: [4, "is-classical"],
        isEligibleForWinbackOffer: [4, "is-eligible-for-winback-offer"],
        isIntroOffer: [4, "is-intro-offer"],
        isFreeTrial: [4, "is-free-trial"],
        basePriceString: [1, "base-price-string"],
        introPeriod: [1, "intro-period"],
        introPrice: [1, "intro-price"],
      },
    ],
  );
function Ye() {
  if (typeof customElements > "u") return;
  ["cwc-music-upsell-banner-web", "cwc-button", "cwc-icon", "cwc-loading-spinner", "cwc-upsell-banner"].forEach((e) => {
    switch (e) {
      case "cwc-music-upsell-banner-web":
        customElements.get(e) || customElements.define(e, ne);
        break;
      case "cwc-button":
        customElements.get(e) || V();
        break;
      case "cwc-icon":
        customElements.get(e) || ee();
        break;
      case "cwc-loading-spinner":
        customElements.get(e) || K();
        break;
      case "cwc-upsell-banner":
        customElements.get(e) || Oe();
        break;
    }
  });
}
const en = ne,
  nn = Ye;
export { en as CwcMusicUpsellBannerWeb, nn as defineCustomElement };
