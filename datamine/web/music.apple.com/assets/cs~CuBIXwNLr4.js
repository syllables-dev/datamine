import { aR as s, Y as i } from "./main.js";
function c(n, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const r = Object.getOwnPropertyDescriptor(e, t);
          r && Object.defineProperty(n, t, r.get ? r : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function (n, a) {
  (function (o, e) {
    e(a);
  })(i, function (o) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
          longhand: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        },
        months: {
          shorthand: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"],
          longhand: [
            "Leden",
            "Únor",
            "Březen",
            "Duben",
            "Květen",
            "Červen",
            "Červenec",
            "Srpen",
            "Září",
            "Říjen",
            "Listopad",
            "Prosinec",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return ".";
        },
        rangeSeparator: " do ",
        weekAbbreviation: "Týd.",
        scrollTitle: "Rolujte pro změnu",
        toggleTitle: "Přepnout dopoledne/odpoledne",
        amPM: ["dop.", "odp."],
        yearAriaLabel: "Rok",
        time_24hr: !0,
      };
    e.l10ns.cs = t;
    var r = e.l10ns;
    ((o.Czech = t), (o.default = r), Object.defineProperty(o, "__esModule", { value: !0 }));
  });
})(d, d.exports);
var l = d.exports;
const f = s(l),
  p = c({ __proto__: null, default: f }, [l]);
export { p as c };
