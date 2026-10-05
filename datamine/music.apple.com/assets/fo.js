import { br as i, Z as s } from "./main.js";
function f(a, u) {
  for (var r = 0; r < u.length; r++) {
    const e = u[r];
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
  l = {
    get exports() {
      return n;
    },
    set exports(a) {
      n = a;
    },
  };
(function (a, u) {
  (function (r, e) {
    e(u);
  })(s, function (r) {
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
    var o = e.l10ns;
    ((r.Faroese = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(l, n);
const d = i(n),
  c = f({ __proto__: null, default: d }, [n]);
export { c as f };
