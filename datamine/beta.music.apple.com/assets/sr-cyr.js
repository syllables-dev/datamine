import { bA as i, Z as l } from "./main.js";
function f(n, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
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
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, s) {
  (function (r, e) {
    e(s);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
          longhand: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        },
        months: {
          shorthand: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
          longhand: [
            "Јануар",
            "Фебруар",
            "Март",
            "Април",
            "Мај",
            "Јун",
            "Јул",
            "Август",
            "Септембар",
            "Октобар",
            "Новембар",
            "Децембар",
          ],
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Нед.",
        rangeSeparator: " до ",
      };
    e.l10ns.sr = t;
    var o = e.l10ns;
    ((r.SerbianCyrillic = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, a);
const c = i(a),
  y = f({ __proto__: null, default: c }, [a]);
export { y as s };
