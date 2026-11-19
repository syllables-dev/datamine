import { aR as l, Y as d } from "./main.js";
function f(a, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(a, t, n.get ? n : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (a, o) {
  (function (r, e) {
    e(o);
  })(d, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
          longhand: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
          longhand: [
            "Janvāris",
            "Februāris",
            "Marts",
            "Aprīlis",
            "Maijs",
            "Jūnijs",
            "Jūlijs",
            "Augusts",
            "Septembris",
            "Oktobris",
            "Novembris",
            "Decembris",
          ],
        },
        rangeSeparator: " līdz ",
        time_24hr: !0,
      };
    e.l10ns.lv = t;
    var n = e.l10ns;
    ((r.Latvian = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var s = i.exports;
const u = l(s),
  c = f({ __proto__: null, default: u }, [s]);
export { c as l };
