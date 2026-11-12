import { aR as d, Y as f } from "./main.js";
function i(n, a) {
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
var s = { exports: {} };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
          longhand: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
          longhand: [
            "Január",
            "Február",
            "Marec",
            "Apríl",
            "Máj",
            "Jún",
            "Júl",
            "August",
            "September",
            "Október",
            "November",
            "December",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        time_24hr: !0,
        ordinal: function () {
          return ".";
        },
      };
    e.l10ns.sk = t;
    var o = e.l10ns;
    ((r.Slovak = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, s.exports);
var l = s.exports;
const u = d(l),
  p = i({ __proto__: null, default: u }, [l]);
export { p as s };
