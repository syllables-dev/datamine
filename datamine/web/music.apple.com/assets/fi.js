import { aR as s, Y as l } from "./main.js";
function f(u, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in u)) {
          const o = Object.getOwnPropertyDescriptor(e, a);
          o && Object.defineProperty(u, a, o.get ? o : { enumerable: !0, get: () => e[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function (u, i) {
  (function (t, e) {
    e(i);
  })(l, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      a = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["su", "ma", "ti", "ke", "to", "pe", "la"],
          longhand: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
        },
        months: {
          shorthand: [
            "tammi",
            "helmi",
            "maalis",
            "huhti",
            "touko",
            "kesä",
            "heinä",
            "elo",
            "syys",
            "loka",
            "marras",
            "joulu",
          ],
          longhand: [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kesäkuu",
            "heinäkuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
          ],
        },
        ordinal: function () {
          return ".";
        },
        time_24hr: !0,
      };
    e.l10ns.fi = a;
    var o = e.l10ns;
    ((t.Finnish = a), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(n, n.exports);
var r = n.exports;
const k = s(r),
  m = f({ __proto__: null, default: k }, [r]);
export { m as f };
