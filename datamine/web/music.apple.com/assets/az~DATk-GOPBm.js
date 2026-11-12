import { aR as s, Y as f } from "./main.js";
function u(n, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in n)) {
          const t = Object.getOwnPropertyDescriptor(e, a);
          t && Object.defineProperty(n, a, t.get ? t : { enumerable: !0, get: () => e[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function (n, o) {
  (function (r, e) {
    e(o);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      a = {
        weekdays: {
          shorthand: ["B.", "B.e.", "Ç.a.", "Ç.", "C.a.", "C.", "Ş."],
          longhand: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
        },
        months: {
          shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen", "Okt", "Noy", "Dek"],
          longhand: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "İyun",
            "İyul",
            "Avqust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return ".";
        },
        rangeSeparator: " - ",
        weekAbbreviation: "Hf",
        scrollTitle: "Artırmaq üçün sürüşdürün",
        toggleTitle: "Aç / Bağla",
        amPM: ["GƏ", "GS"],
        time_24hr: !0,
      };
    e.l10ns.az = a;
    var t = e.l10ns;
    ((r.Azerbaijan = a), (r.default = t), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var i = l.exports;
const d = s(i),
  y = u({ __proto__: null, default: d }, [i]);
export { y as a };
