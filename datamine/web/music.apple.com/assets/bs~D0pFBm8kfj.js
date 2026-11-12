import { aR as l, Y as u } from "./main.js";
function f(a, n) {
  for (var t = 0; t < n.length; t++) {
    const e = n[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(a, r, o.get ? o : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function (a, n) {
  (function (t, e) {
    e(n);
  })(u, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
          longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
          longhand: [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar",
          ],
        },
        time_24hr: !0,
      };
    e.l10ns.bs = r;
    var o = e.l10ns;
    ((t.Bosnian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(s, s.exports);
var i = s.exports;
const d = l(i),
  c = f({ __proto__: null, default: d }, [i]);
export { c as b };
