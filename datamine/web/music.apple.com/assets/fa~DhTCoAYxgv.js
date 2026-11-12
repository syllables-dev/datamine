import { aR as i, Y as l } from "./main.js";
function d(o, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} };
(function (o, a) {
  (function (t, e) {
    e(a);
  })(l, function (t) {
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
    var n = e.l10ns;
    ((t.Persian = r), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(f, f.exports);
var s = f.exports;
const u = i(s),
  p = d({ __proto__: null, default: u }, [s]);
export { p as f };
