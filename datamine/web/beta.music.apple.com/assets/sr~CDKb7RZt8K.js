import { aR as u, Y as i } from "./main.js";
function d(o, n) {
  for (var r = 0; r < n.length; r++) {
    const e = n[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(o, t, a.get ? a : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function (o, n) {
  (function (r, e) {
    e(n);
  })(i, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
          longhand: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
          longhand: [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
          ],
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Ned.",
        rangeSeparator: " do ",
        time_24hr: !0,
      };
    e.l10ns.sr = t;
    var a = e.l10ns;
    ((r.Serbian = t), (r.default = a), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, s.exports);
var l = s.exports;
const f = u(l),
  b = d({ __proto__: null, default: f }, [l]);
export { b as s };
