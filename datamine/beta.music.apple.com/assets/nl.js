import { br as d, Z as u } from "./main.js";
function s(n, l) {
  for (var r = 0; r < l.length; r++) {
    const e = l[r];
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
var a = {},
  f = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, l) {
  (function (r, e) {
    e(l);
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
        ordinal: function (i) {
          return i === 1 || i === 8 || i >= 20 ? "ste" : "de";
        },
      };
    e.l10ns.nl = t;
    var o = e.l10ns;
    ((r.Dutch = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, a);
const g = d(a),
  m = s({ __proto__: null, default: g }, [a]);
export { m as n };
