import { bA as l, Z as d } from "./main.js";
function s(n, i) {
  for (var t = 0; t < i.length; t++) {
    const e = i[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(n, r, o.get ? o : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  f = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, i) {
  (function (t, e) {
    e(i);
  })(d, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
          longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        },
        months: {
          shorthand: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          longhand: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        rangeSeparator: " 至 ",
        weekAbbreviation: "週",
        scrollTitle: "滾動切換",
        toggleTitle: "點擊切換 12/24 小時時制",
      };
    e.l10ns.zh_tw = r;
    var o = e.l10ns;
    ((t.MandarinTraditional = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(f, a);
const u = l(a),
  p = s({ __proto__: null, default: u }, [a]);
export { p as z };
