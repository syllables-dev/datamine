import { aR as u, Y as l } from "./main.js";
function c(f, t) {
  for (var a = 0; a < t.length; a++) {
    const r = t[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in f)) {
          const d = Object.getOwnPropertyDescriptor(r, o);
          d && Object.defineProperty(f, o, d.get ? d : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function (f, t) {
  (function (a, r) {
    r(t);
  })(l, function (a) {
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
    var d = r.l10ns;
    ((a.Welsh = o), (a.default = d), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(n, n.exports);
var i = n.exports;
const s = u(i),
  w = c({ __proto__: null, default: s }, [i]);
export { w as c };
