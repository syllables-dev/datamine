import { aR as l, Y as f } from "./main.js";
function s(t, i) {
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
var a = { exports: {} };
(function (t, i) {
  (function (r, e) {
    e(i);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      o = {
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
    e.l10ns.ro = o;
    var n = e.l10ns;
    ((r.Romanian = o), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(a, a.exports);
var u = a.exports;
const c = l(u),
  m = s({ __proto__: null, default: c }, [u]);
export { m as r };
