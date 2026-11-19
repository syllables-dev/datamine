import { aR as i, Y as s } from "./main.js";
function d(r, a) {
  for (var n = 0; n < a.length; n++) {
    const e = a[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(r, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} };
(function (r, a) {
  (function (n, e) {
    e(a);
  })(s, function (n) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"],
          longhand: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"],
        },
        months: {
          shorthand: [
            "1-р сар",
            "2-р сар",
            "3-р сар",
            "4-р сар",
            "5-р сар",
            "6-р сар",
            "7-р сар",
            "8-р сар",
            "9-р сар",
            "10-р сар",
            "11-р сар",
            "12-р сар",
          ],
          longhand: [
            "Нэгдүгээр сар",
            "Хоёрдугаар сар",
            "Гуравдугаар сар",
            "Дөрөвдүгээр сар",
            "Тавдугаар сар",
            "Зургаадугаар сар",
            "Долдугаар сар",
            "Наймдугаар сар",
            "Есдүгээр сар",
            "Аравдугаар сар",
            "Арваннэгдүгээр сар",
            "Арванхоёрдугаар сар",
          ],
        },
        rangeSeparator: "-с ",
        time_24hr: !0,
      };
    e.l10ns.mn = t;
    var o = e.l10ns;
    ((n.Mongolian = t), (n.default = o), Object.defineProperty(n, "__esModule", { value: !0 }));
  });
})(f, f.exports);
var l = f.exports;
const u = i(l),
  m = d({ __proto__: null, default: u }, [l]);
export { m };
