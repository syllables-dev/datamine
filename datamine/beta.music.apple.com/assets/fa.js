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
  d = {
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
          shorthand: ["یک", "دو", "سه", "چهار", "پنج", "جمعه", "شنبه"],
          longhand: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنچ‌شنبه", "جمعه", "شنبه"],
        },
        months: {
          shorthand: [
            "ژانویه",
            "فوریه",
            "مارس",
            "آوریل",
            "مه",
            "ژوئن",
            "ژوئیه",
            "اوت",
            "سپتامبر",
            "اکتبر",
            "نوامبر",
            "دسامبر",
          ],
          longhand: [
            "ژانویه",
            "فوریه",
            "مارس",
            "آوریل",
            "مه",
            "ژوئن",
            "ژوئیه",
            "اوت",
            "سپتامبر",
            "اکتبر",
            "نوامبر",
            "دسامبر",
          ],
        },
        firstDayOfWeek: 6,
        ordinal: function () {
          return "";
        },
      };
    e.l10ns.fa = r;
    var o = e.l10ns;
    ((t.Persian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, a);
const u = s(a),
  p = l({ __proto__: null, default: u }, [a]);
export { p as f };
