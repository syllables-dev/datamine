import { br as l, Z as s } from "./main.js";
function i(r, d) {
  for (var t = 0; t < d.length; t++) {
    const e = d[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in r)) {
          const n = Object.getOwnPropertyDescriptor(e, o);
          n && Object.defineProperty(r, o, n.get ? n : { enumerable: !0, get: () => e[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  c = {
    get exports() {
      return a;
    },
    set exports(r) {
      a = r;
    },
  };
(function (r, d) {
  (function (t, e) {
    e(d);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      o = {
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
    e.l10ns.cs = o;
    var n = e.l10ns;
    ((t.Czech = o), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(c, a);
const u = l(a),
  p = i({ __proto__: null, default: u }, [a]);
export { p as c };
