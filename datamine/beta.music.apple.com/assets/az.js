import { bA as i, Z as s } from "./main.js";
function f(t, l) {
  for (var r = 0; r < l.length; r++) {
    const e = l[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in t)) {
          const n = Object.getOwnPropertyDescriptor(e, a);
          n && Object.defineProperty(t, a, n.get ? n : { enumerable: !0, get: () => e[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  u = {
    get exports() {
      return o;
    },
    set exports(t) {
      o = t;
    },
  };
(function (t, l) {
  (function (r, e) {
    e(l);
  })(s, function (r) {
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
    var n = e.l10ns;
    ((r.Azerbaijan = a), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(u, o);
const d = i(o),
  c = f({ __proto__: null, default: d }, [o]);
export { c as a };
