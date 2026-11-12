import { aR as l, Y as u } from "./main.js";
function f(n, o) {
  for (var a = 0; a < o.length; a++) {
    const e = o[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const t = Object.getOwnPropertyDescriptor(e, r);
          t && Object.defineProperty(n, r, t.get ? t : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function (n, o) {
  (function (a, e) {
    e(o);
  })(u, function (a) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
          longhand: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
          longhand: [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
      },
      t = e.l10ns;
    ((a.Malaysian = r), (a.default = t), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(s, s.exports);
var i = s.exports;
const d = l(i),
  m = f({ __proto__: null, default: d }, [i]);
export { m };
