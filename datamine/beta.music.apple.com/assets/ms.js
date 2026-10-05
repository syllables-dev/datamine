import { bA as i, Z as u } from "./main.js";
function l(t, s) {
  for (var a = 0; a < s.length; a++) {
    const e = s[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(t, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var o = {},
  f = {
    get exports() {
      return o;
    },
    set exports(t) {
      o = t;
    },
  };
(function (t, s) {
  (function (a, e) {
    e(s);
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
      n = e.l10ns;
    ((a.Malaysian = r), (a.default = n), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(f, o);
const d = i(o),
  m = l({ __proto__: null, default: d }, [o]);
export { m };
