import { br as l, Z as f } from "./main.js";
function s(o, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(o) {
      a = o;
    },
  };
(function (o, i) {
  (function (t, e) {
    e(i);
  })(f, function (t) {
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
    var n = e.l10ns;
    ((t.Kazakh = r), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, a);
const u = l(a),
  p = s({ __proto__: null, default: u }, [a]);
export { p as k };
