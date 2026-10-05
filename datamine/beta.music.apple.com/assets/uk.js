import { bA as i, Z as f } from "./main.js";
function s(n, u) {
  for (var t = 0; t < u.length; t++) {
    const e = u[t];
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
var a = {},
  l = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, u) {
  (function (t, e) {
    e(u);
  })(f, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
        },
        months: {
          shorthand: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
          longhand: [
            "Січень",
            "Лютий",
            "Березень",
            "Квітень",
            "Травень",
            "Червень",
            "Липень",
            "Серпень",
            "Вересень",
            "Жовтень",
            "Листопад",
            "Грудень",
          ],
        },
        time_24hr: !0,
      };
    e.l10ns.uk = r;
    var o = e.l10ns;
    ((t.Ukrainian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(l, a);
const d = i(a),
  p = s({ __proto__: null, default: d }, [a]);
export { p as u };
