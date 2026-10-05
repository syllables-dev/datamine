import { br as i, Z as u } from "./main.js";
function s(t, l) {
  for (var o = 0; o < l.length; o++) {
    const e = l[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(t, r, a.get ? a : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var n = {},
  d = {
    get exports() {
      return n;
    },
    set exports(t) {
      n = t;
    },
  };
(function (t, l) {
  (function (o, e) {
    e(l);
  })(u, function (o) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        firstDayOfWeek: 1,
        rangeSeparator: " ĝis ",
        weekAbbreviation: "Sem",
        scrollTitle: "Rulumu por pligrandigi la valoron",
        toggleTitle: "Klaku por ŝalti",
        weekdays: {
          shorthand: ["Dim", "Lun", "Mar", "Mer", "Ĵaŭ", "Ven", "Sab"],
          longhand: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aŭg", "Sep", "Okt", "Nov", "Dec"],
          longhand: [
            "januaro",
            "februaro",
            "marto",
            "aprilo",
            "majo",
            "junio",
            "julio",
            "aŭgusto",
            "septembro",
            "oktobro",
            "novembro",
            "decembro",
          ],
        },
        ordinal: function () {
          return "-a";
        },
        time_24hr: !0,
      };
    e.l10ns.eo = r;
    var a = e.l10ns;
    ((o.Esperanto = r), (o.default = a), Object.defineProperty(o, "__esModule", { value: !0 }));
  });
})(d, n);
const f = i(n),
  c = s({ __proto__: null, default: f }, [n]);
export { c as e };
