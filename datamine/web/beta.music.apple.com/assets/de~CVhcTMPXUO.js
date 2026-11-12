import { aR as s, Y as u } from "./main.js";
function d(o, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (o, a) {
  (function (r, e) {
    e(a);
  })(u, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
          longhand: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum Ändern scrollen",
        toggleTitle: "Zum Umschalten klicken",
        time_24hr: !0,
      };
    e.l10ns.de = t;
    var n = e.l10ns;
    ((r.German = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const f = s(l),
  g = d({ __proto__: null, default: f }, [l]);
export { g as d };
