import { aR as f, Y as s } from "./main.js";
function d(n, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, a) {
  (function (t, e) {
    e(a);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["Жс", "Дс", "Сc", "Ср", "Бс", "Жм", "Сб"],
          longhand: ["Жексенбi", "Дүйсенбi", "Сейсенбi", "Сәрсенбi", "Бейсенбi", "Жұма", "Сенбi"],
        },
        months: {
          shorthand: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шiл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
          longhand: [
            "Қаңтар",
            "Ақпан",
            "Наурыз",
            "Сәуiр",
            "Мамыр",
            "Маусым",
            "Шiлде",
            "Тамыз",
            "Қыркүйек",
            "Қазан",
            "Қараша",
            "Желтоқсан",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Апта",
        scrollTitle: "Үлкейту үшін айналдырыңыз",
        toggleTitle: "Ауыстыру үшін басыңыз",
        amPM: ["ТД", "ТК"],
        yearAriaLabel: "Жыл",
      };
    e.l10ns.kz = r;
    var o = e.l10ns;
    ((t.Kazakh = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const c = f(l),
  p = d({ __proto__: null, default: c }, [l]);
export { p as k };
