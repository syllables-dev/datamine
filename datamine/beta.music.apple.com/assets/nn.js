import { bA as l, Z as s } from "./main.js";
function u(t, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in t)) {
          const o = Object.getOwnPropertyDescriptor(e, n);
          o && Object.defineProperty(t, n, o.get ? o : { enumerable: !0, get: () => e[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(t) {
      a = t;
    },
  };
(function (t, i) {
  (function (r, e) {
    e(i);
  })(s, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      n = {
        weekdays: {
          shorthand: ["Sø.", "Må.", "Ty.", "On.", "To.", "Fr.", "La."],
          longhand: ["Søndag", "Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mars", "Apr", "Mai", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Des"],
          longhand: [
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "Veke",
        scrollTitle: "Scroll for å endre",
        toggleTitle: "Klikk for å veksle",
        time_24hr: !0,
        ordinal: function () {
          return ".";
        },
      };
    e.l10ns.nn = n;
    var o = e.l10ns;
    ((r.NorwegianNynorsk = n), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, a);
const f = l(a),
  c = u({ __proto__: null, default: f }, [a]);
export { c as n };
