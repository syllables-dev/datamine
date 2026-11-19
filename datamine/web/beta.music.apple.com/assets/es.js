import { aR as u, Y as l } from "./main.js";
function f(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in n)) {
          const t = Object.getOwnPropertyDescriptor(e, o);
          t && Object.defineProperty(n, o, t.get ? t : { enumerable: !0, get: () => e[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      o = {
        weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
          longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        },
        months: {
          shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
          longhand: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
        },
        ordinal: function () {
          return "º";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " a ",
        time_24hr: !0,
      };
    e.l10ns.es = o;
    var t = e.l10ns;
    ((r.Spanish = o), (r.default = t), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var s = i.exports;
const c = u(s),
  p = f({ __proto__: null, default: c }, [s]);
export { p as e };
