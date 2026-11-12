import { aR as s, Y as i } from "./main.js";
function d(n, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
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
var f = { exports: {} };
(function (n, a) {
  (function (o, e) {
    e(a);
  })(i, function (o) {
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
    var t = e.l10ns;
    ((o.Korean = r), (o.default = t), Object.defineProperty(o, "__esModule", { value: !0 }));
  });
})(f, f.exports);
var l = f.exports;
const u = s(l),
  p = d({ __proto__: null, default: u }, [l]);
export { p as k };
