import { br as i, Z as u } from "./main.js";
function l(t, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in t)) {
          const n = Object.getOwnPropertyDescriptor(e, a);
          n && Object.defineProperty(t, a, n.get ? n : { enumerable: !0, get: () => e[a] });
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
  (function (r, e) {
    e(s);
  })(u, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      a = {
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
    ((r.Malaysian = a), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(f, o);
const d = i(o),
  m = l({ __proto__: null, default: d }, [o]);
export { m };
