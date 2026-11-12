import { aR as s, Y as f } from "./main.js";
function l(o, n) {
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
var u = { exports: {} };
(function (o, n) {
  (function (r, e) {
    e(n);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley"],
          longhand: ["Sunnudagur", "Mánadagur", "Týsdagur", "Mikudagur", "Hósdagur", "Fríggjadagur", "Leygardagur"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
          longhand: [
            "Januar",
            "Februar",
            "Mars",
            "Apríl",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "Septembur",
            "Oktobur",
            "Novembur",
            "Desembur",
          ],
        },
        ordinal: function () {
          return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "vika",
        scrollTitle: "Rulla fyri at broyta",
        toggleTitle: "Trýst fyri at skifta",
        yearAriaLabel: "Ár",
        time_24hr: !0,
      };
    e.l10ns.fo = t;
    var a = e.l10ns;
    ((r.Faroese = t), (r.default = a), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(u, u.exports);
var i = u.exports;
const d = s(i),
  p = l({ __proto__: null, default: d }, [i]);
export { p as f };
