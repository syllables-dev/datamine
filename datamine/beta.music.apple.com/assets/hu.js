import { bA as s, Z as i } from "./main.js";
function l(n, u) {
  for (var t = 0; t < u.length; t++) {
    const e = u[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : { enumerable: !0, get: () => e[r] });
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
  (function (t, e) {
    e(u);
  })(i, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
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
    e.l10ns.hu = r;
    var o = e.l10ns;
    ((t.Hungarian = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(f, a);
const d = s(a),
  p = l({ __proto__: null, default: d }, [a]);
export { p as h };
