import { br as s, Z as i } from "./main.js";
function u(o, l) {
  for (var r = 0; r < l.length; r++) {
    const e = l[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(o) {
      a = o;
    },
  };
(function (o, l) {
  (function (r, e) {
    e(l);
  })(i, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
          longhand: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
          longhand: [
            "Januar",
            "Februar",
            "Marec",
            "April",
            "Maj",
            "Junij",
            "Julij",
            "Avgust",
            "September",
            "Oktober",
            "November",
            "December",
          ],
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        time_24hr: !0,
        ordinal: function () {
          return ".";
        },
      };
    e.l10ns.sl = t;
    var n = e.l10ns;
    ((r.Slovenian = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(d, a);
const f = s(a),
  p = u({ __proto__: null, default: f }, [a]);
export { p as s };
