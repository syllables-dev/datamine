import { aR as s, Y as f } from "./main.js";
function u(o, n) {
  for (var a = 0; a < n.length; a++) {
    const e = n[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const t = Object.getOwnPropertyDescriptor(e, r);
          t && Object.defineProperty(o, r, t.get ? t : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function (o, n) {
  (function (a, e) {
    e(n);
  })(f, function (a) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
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
    e.l10ns.ja = r;
    var t = e.l10ns;
    ((a.Japanese = r), (a.default = t), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(l, l.exports);
var i = l.exports;
const d = s(i),
  c = u({ __proto__: null, default: d }, [i]);
export { c as j };
