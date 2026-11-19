import { aR as u, Y as c } from "./main.js";
function d(a, n) {
  for (var t = 0; t < n.length; t++) {
    const e = n[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(a, r, o.get ? o : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (a, n) {
  (function (t, e) {
    e(n);
  })(c, function (t) {
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
    var o = e.l10ns;
    ((t.Italian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const f = u(l),
  g = d({ __proto__: null, default: f }, [l]);
export { g as i };
