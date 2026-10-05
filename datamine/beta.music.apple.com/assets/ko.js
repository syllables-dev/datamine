import { bA as l, Z as s } from "./main.js";
function i(t, f) {
  for (var o = 0; o < f.length; o++) {
    const e = f[o];
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
var a = {},
  d = {
    get exports() {
      return a;
    },
    set exports(t) {
      a = t;
    },
  };
(function (t, f) {
  (function (o, e) {
    e(f);
  })(s, function (o) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["일", "월", "화", "수", "목", "금", "토"],
          longhand: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        },
        months: {
          shorthand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          longhand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },
        ordinal: function () {
          return "일";
        },
        rangeSeparator: " ~ ",
        amPM: ["오전", "오후"],
      };
    e.l10ns.ko = r;
    var n = e.l10ns;
    ((o.Korean = r), (o.default = n), Object.defineProperty(o, "__esModule", { value: !0 }));
  });
})(d, a);
const u = l(a),
  p = i({ __proto__: null, default: u }, [a]);
export { p as k };
