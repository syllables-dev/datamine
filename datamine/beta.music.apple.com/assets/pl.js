import { bA as l, Z as s } from "./main.js";
function d(o, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(o, r, i.get ? i : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var n = {},
  p = {
    get exports() {
      return n;
    },
    set exports(o) {
      n = o;
    },
  };
(function (o, a) {
  (function (t, e) {
    e(a);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
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
    e.l10ns.pl = r;
    var i = e.l10ns;
    ((t.Polish = r), (t.default = i), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(p, n);
const f = l(n),
  c = d({ __proto__: null, default: f }, [n]);
export { c as p };
