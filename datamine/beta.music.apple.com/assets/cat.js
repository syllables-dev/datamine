import { br as c, Z as l } from "./main.js";
function f(n, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(n, t, a.get ? a : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  d = {
    get exports() {
      return o;
    },
    set exports(n) {
      o = n;
    },
  };
(function (n, s) {
  (function (r, e) {
    e(s);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
          longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        },
        months: {
          shorthand: ["Gen", "Febr", "Març", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
          longhand: [
            "Gener",
            "Febrer",
            "Març",
            "Abril",
            "Maig",
            "Juny",
            "Juliol",
            "Agost",
            "Setembre",
            "Octubre",
            "Novembre",
            "Desembre",
          ],
        },
        ordinal: function (u) {
          var i = u % 100;
          if (i > 3 && i < 21) return "è";
          switch (i % 10) {
            case 1:
              return "r";
            case 2:
              return "n";
            case 3:
              return "r";
            case 4:
              return "t";
            default:
              return "è";
          }
        },
        firstDayOfWeek: 1,
        rangeSeparator: " a ",
        time_24hr: !0,
      };
    e.l10ns.cat = e.l10ns.ca = t;
    var a = e.l10ns;
    ((r.Catalan = t), (r.default = a), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, o);
const g = c(o),
  D = f({ __proto__: null, default: g }, [o]);
export { D as c };
