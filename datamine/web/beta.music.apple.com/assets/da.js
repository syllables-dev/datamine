import { aR as i, Y as u } from "./main.js";
function f(n, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in n)) {
          const t = Object.getOwnPropertyDescriptor(e, a);
          t && Object.defineProperty(n, a, t.get ? t : { enumerable: !0, get: () => e[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function (n, o) {
  (function (r, e) {
    e(o);
  })(u, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      a = {
        weekdays: {
          shorthand: ["søn", "man", "tir", "ons", "tors", "fre", "lør"],
          longhand: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
        },
        months: {
          shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
          longhand: [
            "januar",
            "februar",
            "marts",
            "april",
            "maj",
            "juni",
            "juli",
            "august",
            "september",
            "oktober",
            "november",
            "december",
          ],
        },
        ordinal: function () {
          return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "uge",
        time_24hr: !0,
      };
    e.l10ns.da = a;
    var t = e.l10ns;
    ((r.Danish = a), (r.default = t), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, d.exports);
var s = d.exports;
const l = i(s),
  c = f({ __proto__: null, default: l }, [s]);
export { c as d };
