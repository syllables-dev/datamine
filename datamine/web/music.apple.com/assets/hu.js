import { aR as i, Y as l } from "./main.js";
function f(o, a) {
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
var s = { exports: {} };
(function (o, a) {
  (function (r, e) {
    e(a);
  })(l, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
          longhand: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
          longhand: [
            "Január",
            "Február",
            "Március",
            "Április",
            "Május",
            "Június",
            "Július",
            "Augusztus",
            "Szeptember",
            "Október",
            "November",
            "December",
          ],
        },
        ordinal: function () {
          return ".";
        },
        weekAbbreviation: "Hét",
        scrollTitle: "Görgessen",
        toggleTitle: "Kattintson a váltáshoz",
        rangeSeparator: " - ",
        time_24hr: !0,
      };
    e.l10ns.hu = t;
    var n = e.l10ns;
    ((r.Hungarian = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, s.exports);
var u = s.exports;
const d = i(u),
  p = f({ __proto__: null, default: d }, [u]);
export { p as h };
