import { bA as s, Z as l } from "./main.js";
function u(a, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(a, t, n.get ? n : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  f = {
    get exports() {
      return o;
    },
    set exports(a) {
      o = a;
    },
  };
(function (a, i) {
  (function (r, e) {
    e(i);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
          longhand: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
        },
        months: {
          shorthand: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
          longhand: [
            "Janar",
            "Shkurt",
            "Mars",
            "Prill",
            "Maj",
            "Qershor",
            "Korrik",
            "Gusht",
            "Shtator",
            "Tetor",
            "Nëntor",
            "Dhjetor",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " deri ",
        weekAbbreviation: "Java",
        yearAriaLabel: "Viti",
        monthAriaLabel: "Muaji",
        hourAriaLabel: "Ora",
        minuteAriaLabel: "Minuta",
        time_24hr: !0,
      };
    e.l10ns.sq = t;
    var n = e.l10ns;
    ((r.Albanian = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, o);
const d = s(o),
  c = u({ __proto__: null, default: d }, [o]);
export { c as s };
