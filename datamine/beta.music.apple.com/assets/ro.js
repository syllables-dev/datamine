import { bA as u, Z as l } from "./main.js";
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
var i = {},
  s = {
    get exports() {
      return i;
    },
    set exports(n) {
      i = n;
    },
  };
(function (n, a) {
  (function (r, e) {
    e(a);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
          longhand: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        },
        months: {
          shorthand: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
          longhand: [
            "Ianuarie",
            "Februarie",
            "Martie",
            "Aprilie",
            "Mai",
            "Iunie",
            "Iulie",
            "August",
            "Septembrie",
            "Octombrie",
            "Noiembrie",
            "Decembrie",
          ],
        },
        firstDayOfWeek: 1,
        time_24hr: !0,
        ordinal: function () {
          return "";
        },
      };
    e.l10ns.ro = t;
    var o = e.l10ns;
    ((r.Romanian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, i);
const c = u(i),
  m = f({ __proto__: null, default: c }, [i]);
export { m as r };
