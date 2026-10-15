import { aV as u, Y as s } from "./main.js";
function l(a, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(a, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  d = {
    get exports() {
      return o;
    },
    set exports(a) {
      o = a;
    },
  };
(function (a, i) {
  (function (t, e) {
    e(i);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["P", "E", "T", "K", "N", "R", "L"],
          longhand: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
        },
        months: {
          shorthand: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
          longhand: [
            "Jaanuar",
            "Veebruar",
            "Märts",
            "Aprill",
            "Mai",
            "Juuni",
            "Juuli",
            "August",
            "September",
            "Oktoober",
            "November",
            "Detsember",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return ".";
        },
        weekAbbreviation: "Näd",
        rangeSeparator: " kuni ",
        scrollTitle: "Keri, et suurendada",
        toggleTitle: "Klõpsa, et vahetada",
        time_24hr: !0,
      };
    e.l10ns.et = r;
    var n = e.l10ns;
    ((t.Estonian = r), (t.default = n), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, o);
const f = u(o),
  c = l({ __proto__: null, default: f }, [o]);
export { c as e };
