import { aR as s, Y as d } from "./main.js";
function p(i, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(i, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function (i, a) {
  (function (r, e) {
    e(a);
  })(d, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
          longhand: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        },
        months: {
          shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
          longhand: [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień",
          ],
        },
        rangeSeparator: " do ",
        weekAbbreviation: "tydz.",
        scrollTitle: "Przewiń, aby zwiększyć",
        toggleTitle: "Kliknij, aby przełączyć",
        firstDayOfWeek: 1,
        time_24hr: !0,
        ordinal: function () {
          return ".";
        },
      };
    e.l10ns.pl = t;
    var o = e.l10ns;
    ((r.Polish = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(n, n.exports);
var l = n.exports;
const f = s(l),
  u = p({ __proto__: null, default: f }, [l]);
export { u as p };
