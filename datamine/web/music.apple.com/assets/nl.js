import { aR as s, Y as u } from "./main.js";
function f(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(u, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          longhand: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        },
        months: {
          shorthand: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sept", "okt", "nov", "dec"],
          longhand: [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
          ],
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "wk",
        rangeSeparator: " t/m ",
        scrollTitle: "Scroll voor volgende / vorige",
        toggleTitle: "Klik om te wisselen",
        time_24hr: !0,
        ordinal: function (l) {
          return l === 1 || l === 8 || l >= 20 ? "ste" : "de";
        },
      };
    e.l10ns.nl = t;
    var o = e.l10ns;
    ((r.Dutch = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var d = i.exports;
const c = s(d),
  m = f({ __proto__: null, default: c }, [d]);
export { m as n };
