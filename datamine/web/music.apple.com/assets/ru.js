import { aR as s, Y as u } from "./main.js";
function f(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(u, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        },
        months: {
          shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          longhand: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Нед.",
        scrollTitle: "Прокрутите для увеличения",
        toggleTitle: "Нажмите для переключения",
        amPM: ["ДП", "ПП"],
        yearAriaLabel: "Год",
        time_24hr: !0,
      };
    e.l10ns.ru = t;
    var o = e.l10ns;
    ((r.Russian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const d = s(l),
  p = f({ __proto__: null, default: d }, [l]);
export { p as r };
