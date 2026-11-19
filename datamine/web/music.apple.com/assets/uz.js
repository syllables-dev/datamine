import { aR as u, Y as f } from "./main.js";
function s(n, a) {
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
var l = { exports: {} };
(function (n, a) {
  (function (t, e) {
    e(a);
  })(f, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["Якш", "Душ", "Сеш", "Чор", "Пай", "Жум", "Шан"],
          longhand: ["Якшанба", "Душанба", "Сешанба", "Чоршанба", "Пайшанба", "Жума", "Шанба"],
        },
        months: {
          shorthand: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          longhand: [
            "Январ",
            "Феврал",
            "Март",
            "Апрел",
            "Май",
            "Июн",
            "Июл",
            "Август",
            "Сентябр",
            "Октябр",
            "Ноябр",
            "Декабр",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Ҳафта",
        scrollTitle: "Катталаштириш учун айлантиринг",
        toggleTitle: "Ўтиш учун босинг",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Йил",
        time_24hr: !0,
      };
    e.l10ns.uz = r;
    var o = e.l10ns;
    ((t.Uzbek = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var i = l.exports;
const d = u(i),
  p = s({ __proto__: null, default: d }, [i]);
export { p as u };
