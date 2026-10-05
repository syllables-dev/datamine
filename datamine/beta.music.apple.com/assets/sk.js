import { br as l, Z as u } from "./main.js";
function d(o, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
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
var a = {},
  f = {
    get exports() {
      return a;
    },
    set exports(o) {
      a = o;
    },
  };
(function (o, s) {
  (function (r, e) {
    e(s);
  })(u, function (r) {
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
    var n = e.l10ns;
    ((r.Slovak = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, a);
const i = l(a),
  p = d({ __proto__: null, default: i }, [a]);
export { p as s };
