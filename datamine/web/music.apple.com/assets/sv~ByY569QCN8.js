import { aR as d, Y as l } from "./main.js";
function f(o, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function (o, a) {
  (function (r, e) {
    e(a);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        firstDayOfWeek: 1,
        weekAbbreviation: "v",
        weekdays: {
          shorthand: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
          longhand: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
        },
        months: {
          shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
          longhand: [
            "januari",
            "februari",
            "mars",
            "april",
            "maj",
            "juni",
            "juli",
            "augusti",
            "september",
            "oktober",
            "november",
            "december",
          ],
        },
        rangeSeparator: " till ",
        time_24hr: !0,
        ordinal: function () {
          return ".";
        },
      };
    e.l10ns.sv = t;
    var n = e.l10ns;
    ((r.Swedish = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, s.exports);
var i = s.exports;
const u = d(i),
  g = f({ __proto__: null, default: u }, [i]);
export { g as s };
