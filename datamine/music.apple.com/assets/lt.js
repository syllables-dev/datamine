import { bA as s, Z as l } from "./main.js";
function u(r, o) {
  for (var t = 0; t < o.length; t++) {
    const e = o[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const i in e)
        if (i !== "default" && !(i in r)) {
          const a = Object.getOwnPropertyDescriptor(e, i);
          a && Object.defineProperty(r, i, a.get ? a : { enumerable: !0, get: () => e[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var n = {},
  d = {
    get exports() {
      return n;
    },
    set exports(r) {
      n = r;
    },
  };
(function (r, o) {
  (function (t, e) {
    e(o);
  })(l, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      i = {
        weekdays: {
          shorthand: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
          longhand: [
            "Sekmadienis",
            "Pirmadienis",
            "Antradienis",
            "Trečiadienis",
            "Ketvirtadienis",
            "Penktadienis",
            "Šeštadienis",
          ],
        },
        months: {
          shorthand: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
          longhand: [
            "Sausis",
            "Vasaris",
            "Kovas",
            "Balandis",
            "Gegužė",
            "Birželis",
            "Liepa",
            "Rugpjūtis",
            "Rugsėjis",
            "Spalis",
            "Lapkritis",
            "Gruodis",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "-a";
        },
        rangeSeparator: " iki ",
        weekAbbreviation: "Sav",
        scrollTitle: "Keisti laiką pelės rateliu",
        toggleTitle: "Perjungti laiko formatą",
        time_24hr: !0,
      };
    e.l10ns.lt = i;
    var a = e.l10ns;
    ((t.Lithuanian = i), (t.default = a), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, n);
const f = s(n),
  g = u({ __proto__: null, default: f }, [n]);
export { g as l };
