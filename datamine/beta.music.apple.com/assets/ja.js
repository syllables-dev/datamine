import { aV as i, Y as s } from "./main.js";
function f(t, l) {
  for (var r = 0; r < l.length; r++) {
    const e = l[r];
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
  u = {
    get exports() {
      return o;
    },
    set exports(t) {
      o = t;
    },
  };
(function (t, l) {
  (function (r, e) {
    e(l);
  })(s, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      a = {
        weekdays: {
          shorthand: ["日", "月", "火", "水", "木", "金", "土"],
          longhand: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        },
        months: {
          shorthand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          longhand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        },
        time_24hr: !0,
        rangeSeparator: " から ",
        monthAriaLabel: "月",
        amPM: ["午前", "午後"],
        yearAriaLabel: "年",
        hourAriaLabel: "時間",
        minuteAriaLabel: "分",
      };
    e.l10ns.ja = a;
    var n = e.l10ns;
    ((r.Japanese = a), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(u, o);
const d = i(o),
  p = f({ __proto__: null, default: d }, [o]);
export { p as j };
