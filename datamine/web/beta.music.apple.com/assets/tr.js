import { aR as l, Y as u } from "./main.js";
function f(n, o) {
  for (var e = 0; e < o.length; e++) {
    const r = o[e];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in n)) {
          const a = Object.getOwnPropertyDescriptor(r, t);
          a && Object.defineProperty(n, t, a.get ? a : { enumerable: !0, get: () => r[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, o) {
  (function (e, r) {
    r(o);
  })(u, function (e) {
    var r = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          longhand: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        },
        months: {
          shorthand: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
          longhand: [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return ".";
        },
        rangeSeparator: " - ",
        weekAbbreviation: "Hf",
        scrollTitle: "Artırmak için kaydırın",
        toggleTitle: "Aç/Kapa",
        amPM: ["ÖÖ", "ÖS"],
        time_24hr: !0,
      };
    r.l10ns.tr = t;
    var a = r.l10ns;
    ((e.Turkish = t), (e.default = a), Object.defineProperty(e, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var s = i.exports;
const d = l(s),
  c = f({ __proto__: null, default: d }, [s]);
export { c as t };
