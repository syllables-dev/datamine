import { aR as l, Y as u } from "./main.js";
function d(a, n) {
  for (var t = 0; t < n.length; t++) {
    const e = n[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const i in e)
        if (i !== "default" && !(i in a)) {
          const r = Object.getOwnPropertyDescriptor(e, i);
          r && Object.defineProperty(a, i, r.get ? r : { enumerable: !0, get: () => e[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} };
(function (a, n) {
  (function (t, e) {
    e(n);
  })(u, function (t) {
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
    var r = e.l10ns;
    ((t.Lithuanian = i), (t.default = r), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(o, o.exports);
var s = o.exports;
const f = l(s),
  g = d({ __proto__: null, default: f }, [s]);
export { g as l };
