import { aR as s, Y as l } from "./main.js";
function p(n, o) {
  for (var t = 0; t < o.length; t++) {
    const e = o[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(n, r, a.get ? a : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, o) {
  (function (t, e) {
    e(o);
  })(l, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["P", "E", "T", "K", "N", "R", "L"],
          longhand: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
        },
        months: {
          shorthand: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
          longhand: [
            "Jaanuar",
            "Veebruar",
            "Märts",
            "Aprill",
            "Mai",
            "Juuni",
            "Juuli",
            "August",
            "September",
            "Oktoober",
            "November",
            "Detsember",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return ".";
        },
        weekAbbreviation: "Näd",
        rangeSeparator: " kuni ",
        scrollTitle: "Keri, et suurendada",
        toggleTitle: "Klõpsa, et vahetada",
        time_24hr: !0,
      };
    e.l10ns.et = r;
    var a = e.l10ns;
    ((t.Estonian = r), (t.default = a), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var u = i.exports;
const d = s(u),
  c = p({ __proto__: null, default: d }, [u]);
export { c as e };
