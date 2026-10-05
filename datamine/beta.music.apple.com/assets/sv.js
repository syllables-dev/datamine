import { br as i, Z as d } from "./main.js";
function l(n, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
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
  u = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, s) {
  (function (r, e) {
    e(s);
  })(d, function (r) {
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
    var o = e.l10ns;
    ((r.Swedish = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(u, a);
const f = i(a),
  c = l({ __proto__: null, default: f }, [a]);
export { c as s };
