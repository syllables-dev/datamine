import { br as s, Z as i } from "./main.js";
function l(n, f) {
  for (var t = 0; t < f.length; t++) {
    const e = f[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  u = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, f) {
  (function (t, e) {
    e(f);
  })(i, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["နွေ", "လာ", "ဂါ", "ဟူး", "ကြာ", "သော", "နေ"],
          longhand: ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"],
        },
        months: {
          shorthand: ["ဇန်", "ဖေ", "မတ်", "ပြီ", "မေ", "ဇွန်", "လိုင်", "သြ", "စက်", "အောက်", "နို", "ဒီ"],
          longhand: [
            "ဇန်နဝါရီ",
            "ဖေဖော်ဝါရီ",
            "မတ်",
            "ဧပြီ",
            "မေ",
            "ဇွန်",
            "ဇူလိုင်",
            "သြဂုတ်",
            "စက်တင်ဘာ",
            "အောက်တိုဘာ",
            "နိုဝင်ဘာ",
            "ဒီဇင်ဘာ",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        time_24hr: !0,
      };
    e.l10ns.my = r;
    var o = e.l10ns;
    ((t.Burmese = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(u, a);
const d = s(a),
  m = l({ __proto__: null, default: d }, [a]);
export { m };
