import { aR as u, Y as f } from "./main.js";
function d(n, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
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
var i = { exports: {} };
(function (n, o) {
  (function (r, e) {
    e(o);
  })(f, function (r) {
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
        ordinal: function (l) {
          var s = l % 100;
          if (s > 3 && s < 21) return "è";
          switch (s % 10) {
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
})(i, i.exports);
var c = i.exports;
const g = u(c),
  b = d({ __proto__: null, default: g }, [c]);
export { b as c };
