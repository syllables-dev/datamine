import { br as r, Z as s } from "./main.js";
function l(n, o) {
  for (var t = 0; t < o.length; t++) {
    const e = o[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const u in e)
        if (u !== "default" && !(u in n)) {
          const a = Object.getOwnPropertyDescriptor(e, u);
          a && Object.defineProperty(n, u, a.get ? a : { enumerable: !0, get: () => e[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var i = {},
  f = {
    get exports() {
      return i;
    },
    set exports(n) {
      i = n;
    },
  };
(function (n, o) {
  (function (t, e) {
    e(o);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      u = {
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
    e.l10ns.fi = u;
    var a = e.l10ns;
    ((t.Finnish = u), (t.default = a), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(f, i);
const k = r(i),
  m = l({ __proto__: null, default: k }, [i]);
export { m as f };
