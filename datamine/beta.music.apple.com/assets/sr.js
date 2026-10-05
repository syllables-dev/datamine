import { br as u, Z as l } from "./main.js";
function i(a, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(a, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var n = {},
  d = {
    get exports() {
      return n;
    },
    set exports(a) {
      n = a;
    },
  };
(function (a, s) {
  (function (r, e) {
    e(s);
  })(l, function (r) {
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
    var o = e.l10ns;
    ((r.Serbian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, n);
const f = u(n),
  c = i({ __proto__: null, default: f }, [n]);
export { c as s };
