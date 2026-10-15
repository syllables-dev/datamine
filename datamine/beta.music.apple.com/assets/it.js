import { aV as l, Y as u } from "./main.js";
function c(o, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(o, r, a.get ? a : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var n = {},
  d = {
    get exports() {
      return n;
    },
    set exports(o) {
      n = o;
    },
  };
(function (o, i) {
  (function (t, e) {
    e(i);
  })(u, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
          longhand: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        },
        months: {
          shorthand: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
          longhand: [
            "Gennaio",
            "Febbraio",
            "Marzo",
            "Aprile",
            "Maggio",
            "Giugno",
            "Luglio",
            "Agosto",
            "Settembre",
            "Ottobre",
            "Novembre",
            "Dicembre",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "°";
        },
        rangeSeparator: " al ",
        weekAbbreviation: "Se",
        scrollTitle: "Scrolla per aumentare",
        toggleTitle: "Clicca per cambiare",
        time_24hr: !0,
      };
    e.l10ns.it = r;
    var a = e.l10ns;
    ((t.Italian = r), (t.default = a), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, n);
const f = l(n),
  g = c({ __proto__: null, default: f }, [n]);
export { g as i };
