import { br as s, Z as l } from "./main.js";
function u(a, i) {
  for (var e = 0; e < i.length; e++) {
    const r = i[e];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const t in r)
        if (t !== "default" && !(t in a)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n && Object.defineProperty(a, t, n.get ? n : { enumerable: !0, get: () => r[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  f = {
    get exports() {
      return o;
    },
    set exports(a) {
      o = a;
    },
  };
(function (a, i) {
  (function (e, r) {
    r(i);
  })(l, function (e) {
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
    var n = r.l10ns;
    ((e.Turkish = t), (e.default = n), Object.defineProperty(e, "__esModule", { value: !0 }));
  });
})(f, o);
const d = s(o),
  c = u({ __proto__: null, default: d }, [o]);
export { c as t };
