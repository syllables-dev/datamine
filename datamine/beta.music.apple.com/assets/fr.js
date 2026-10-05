import { bA as u, Z as f } from "./main.js";
function d(n, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
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
  s = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, i) {
  (function (r, e) {
    e(i);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
          longhand: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        },
        months: {
          shorthand: ["janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"],
          longhand: [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
          ],
        },
        ordinal: function (l) {
          return l > 1 ? "" : "er";
        },
        rangeSeparator: " au ",
        weekAbbreviation: "Sem",
        scrollTitle: "Défiler pour augmenter la valeur",
        toggleTitle: "Cliquer pour basculer",
        time_24hr: !0,
      };
    e.l10ns.fr = t;
    var o = e.l10ns;
    ((r.French = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(s, a);
const c = u(a),
  p = d({ __proto__: null, default: c }, [a]);
export { p as f };
