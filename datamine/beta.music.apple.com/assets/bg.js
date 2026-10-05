import { br as l, Z as i } from "./main.js";
function s(n, f) {
  for (var t = 0; t < f.length; t++) {
    const e = f[t];
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
  u = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, f) {
  (function (t, e) {
    e(f);
  })(i, function (t) {
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
})(u, a);
const d = l(a),
  c = s({ __proto__: null, default: d }, [a]);
export { c as b };
