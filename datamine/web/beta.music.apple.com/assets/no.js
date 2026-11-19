import { aR as s, Y as u } from "./main.js";
function d(t, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in t)) {
          const o = Object.getOwnPropertyDescriptor(e, n);
          o && Object.defineProperty(t, n, o.get ? o : { enumerable: !0, get: () => e[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (t, a) {
  (function (r, e) {
    e(a);
  })(u, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      n = {
        weekdays: {
          shorthand: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
          longhand: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
          longhand: [
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "Uke",
        scrollTitle: "Scroll for å endre",
        toggleTitle: "Klikk for å veksle",
        time_24hr: !0,
        ordinal: function () {
          return ".";
        },
      };
    e.l10ns.no = n;
    var o = e.l10ns;
    ((r.Norwegian = n), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const f = s(l),
  c = d({ __proto__: null, default: f }, [l]);
export { c as n };
