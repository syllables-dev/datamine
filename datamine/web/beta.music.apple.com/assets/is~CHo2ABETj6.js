import { aR as s, Y as l } from "./main.js";
function d(n, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in n)) {
          const t = Object.getOwnPropertyDescriptor(e, a);
          t && Object.defineProperty(n, a, t.get ? t : { enumerable: !0, get: () => e[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, o) {
  (function (r, e) {
    e(o);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      a = {
        weekdays: {
          shorthand: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
          longhand: [
            "Sunnudagur",
            "Mánudagur",
            "Þriðjudagur",
            "Miðvikudagur",
            "Fimmtudagur",
            "Föstudagur",
            "Laugardagur",
          ],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
          longhand: [
            "Janúar",
            "Febrúar",
            "Mars",
            "Apríl",
            "Maí",
            "Júní",
            "Júlí",
            "Ágúst",
            "September",
            "Október",
            "Nóvember",
            "Desember",
          ],
        },
        ordinal: function () {
          return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "vika",
        yearAriaLabel: "Ár",
        time_24hr: !0,
      };
    e.l10ns.is = a;
    var t = e.l10ns;
    ((r.Icelandic = a), (r.default = t), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var u = i.exports;
const f = s(u),
  g = d({ __proto__: null, default: f }, [u]);
export { g as i };
