import { aR as i, Y as s } from "./main.js";
function u(n, a) {
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
var f = { exports: {} };
(function (n, a) {
  (function (t, e) {
    e(a);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        },
        months: {
          shorthand: ["Яну", "Фев", "Март", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
          longhand: [
            "Януари",
            "Февруари",
            "Март",
            "Април",
            "Май",
            "Юни",
            "Юли",
            "Август",
            "Септември",
            "Октомври",
            "Ноември",
            "Декември",
          ],
        },
        time_24hr: !0,
        firstDayOfWeek: 1,
      };
    e.l10ns.bg = r;
    var o = e.l10ns;
    ((t.Bulgarian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(f, f.exports);
var l = f.exports;
const d = i(l),
  c = u({ __proto__: null, default: d }, [l]);
export { c as b };
