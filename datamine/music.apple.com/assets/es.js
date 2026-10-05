import { bA as s, Z as u } from "./main.js";
function l(t, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in t)) {
          const n = Object.getOwnPropertyDescriptor(e, o);
          n && Object.defineProperty(t, o, n.get ? n : { enumerable: !0, get: () => e[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  f = {
    get exports() {
      return a;
    },
    set exports(t) {
      a = t;
    },
  };
(function (t, i) {
  (function (r, e) {
    e(i);
  })(u, function (r) {
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
    var n = e.l10ns;
    ((r.Spanish = o), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, a);
const c = s(a),
  p = l({ __proto__: null, default: c }, [a]);
export { p as e };
