import { aR as u, Y as s } from "./main.js";
function d(a, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const t = Object.getOwnPropertyDescriptor(e, r);
          t && Object.defineProperty(a, r, t.get ? t : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function (a, n) {
  (function (o, e) {
    e(n);
  })(s, function (o) {
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
    var t = e.l10ns;
    ((o.Esperanto = r), (o.default = t), Object.defineProperty(o, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var i = l.exports;
const f = u(i),
  c = d({ __proto__: null, default: f }, [i]);
export { c as e };
