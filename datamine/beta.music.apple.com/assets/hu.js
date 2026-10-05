import { br as s, Z as i } from "./main.js";
function l(n, u) {
  for (var r = 0; r < u.length; r++) {
    const e = u[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  f = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, u) {
  (function (r, e) {
    e(u);
  })(i, function (r) {
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
    var o = e.l10ns;
    ((r.Hungarian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, a);
const d = s(a),
  p = l({ __proto__: null, default: d }, [a]);
export { p as h };
