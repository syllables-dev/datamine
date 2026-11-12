import { aR as s, Y as f } from "./main.js";
function u(n, a) {
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
var l = { exports: {} };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Нд", "Пн", "Аў", "Ср", "Чц", "Пт", "Сб"],
          longhand: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
        },
        months: {
          shorthand: ["Сту", "Лют", "Сак", "Кра", "Тра", "Чэр", "Ліп", "Жні", "Вер", "Кас", "Ліс", "Сне"],
          longhand: [
            "Студзень",
            "Люты",
            "Сакавік",
            "Красавік",
            "Травень",
            "Чэрвень",
            "Ліпень",
            "Жнівень",
            "Верасень",
            "Кастрычнік",
            "Лістапад",
            "Снежань",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Тыд.",
        scrollTitle: "Пракруціце для павелічэння",
        toggleTitle: "Націсніце для пераключэння",
        amPM: ["ДП", "ПП"],
        yearAriaLabel: "Год",
        time_24hr: !0,
      };
    e.l10ns.be = t;
    var o = e.l10ns;
    ((r.Belarusian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var i = l.exports;
const d = s(i),
  b = u({ __proto__: null, default: d }, [i]);
export { b };
