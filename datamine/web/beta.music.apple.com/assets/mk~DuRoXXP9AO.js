import { aR as s, Y as l } from "./main.js";
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
  })(l, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
          longhand: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
        },
        months: {
          shorthand: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
          longhand: [
            "Јануари",
            "Февруари",
            "Март",
            "Април",
            "Мај",
            "Јуни",
            "Јули",
            "Август",
            "Септември",
            "Октомври",
            "Ноември",
            "Декември",
          ],
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Нед.",
        rangeSeparator: " до ",
        time_24hr: !0,
      };
    e.l10ns.mk = r;
    var o = e.l10ns;
    ((t.Macedonian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var f = i.exports;
const c = s(f),
  m = d({ __proto__: null, default: c }, [f]);
export { m };
