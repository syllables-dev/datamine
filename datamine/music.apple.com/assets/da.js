import { aV as s, Y as i } from "./main.js";
function u(t, d) {
  for (var r = 0; r < d.length; r++) {
    const e = d[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in t)) {
          const n = Object.getOwnPropertyDescriptor(e, a);
          n && Object.defineProperty(t, a, n.get ? n : { enumerable: !0, get: () => e[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  f = {
    get exports() {
      return o;
    },
    set exports(t) {
      o = t;
    },
  };
(function (t, d) {
  (function (r, e) {
    e(d);
  })(i, function (r) {
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
    var n = e.l10ns;
    ((r.Danish = a), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, o);
const l = s(o),
  c = u({ __proto__: null, default: l }, [o]);
export { c as d };
