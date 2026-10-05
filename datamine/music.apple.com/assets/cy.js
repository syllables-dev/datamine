import { bA as i, Z as u } from "./main.js";
function l(d, n) {
  for (var a = 0; a < n.length; a++) {
    const r = n[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in d)) {
          const f = Object.getOwnPropertyDescriptor(r, o);
          f && Object.defineProperty(d, o, f.get ? f : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var t = {},
  c = {
    get exports() {
      return t;
    },
    set exports(d) {
      t = d;
    },
  };
(function (d, n) {
  (function (a, r) {
    r(n);
  })(u, function (a) {
    var r = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      o = {
        weekdays: {
          shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
          longhand: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
        },
        months: {
          shorthand: ["Ion", "Chwef", "Maw", "Ebr", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"],
          longhand: [
            "Ionawr",
            "Chwefror",
            "Mawrth",
            "Ebrill",
            "Mai",
            "Mehefin",
            "Gorffennaf",
            "Awst",
            "Medi",
            "Hydref",
            "Tachwedd",
            "Rhagfyr",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function (e) {
          return e === 1
            ? "af"
            : e === 2
              ? "ail"
              : e === 3 || e === 4
                ? "ydd"
                : e === 5 || e === 6
                  ? "ed"
                  : (e >= 7 && e <= 10) || e == 12 || e == 15 || e == 18 || e == 20
                    ? "fed"
                    : e == 11 || e == 13 || e == 14 || e == 16 || e == 17 || e == 19
                      ? "eg"
                      : e >= 21 && e <= 39
                        ? "ain"
                        : "";
        },
        time_24hr: !0,
      };
    r.l10ns.cy = o;
    var f = r.l10ns;
    ((a.Welsh = o), (a.default = f), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(c, t);
const s = i(t),
  w = l({ __proto__: null, default: s }, [t]);
export { w as c };
