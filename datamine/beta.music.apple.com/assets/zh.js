import { br as i, Z as s } from "./main.js";
function f(n, l) {
  for (var t = 0; t < l.length; t++) {
    const e = l[t];
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
  d = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, l) {
  (function (t, e) {
    e(l);
  })(s, function (t) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        weekdays: {
          shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
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
        weekAbbreviation: "周",
        scrollTitle: "滚动切换",
        toggleTitle: "点击切换 12/24 小时时制",
      };
    e.l10ns.zh = r;
    var o = e.l10ns;
    ((t.Mandarin = r), (t.default = o), Object.defineProperty(t, "__esModule", { value: !0 }));
  });
})(d, a);
const u = i(a),
  p = f({ __proto__: null, default: u }, [a]);
export { p as z };
