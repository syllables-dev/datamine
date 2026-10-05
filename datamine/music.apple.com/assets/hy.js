import { br as l, Z as f } from "./main.js";
function s(n, i) {
  for (var r = 0; r < i.length; r++) {
    const e = i[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = {},
  u = {
    get exports() {
      return a;
    },
    set exports(n) {
      a = n;
    },
  };
(function (n, i) {
  (function (r, e) {
    e(i);
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ"],
          longhand: ["Կիրակի", "Եկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"],
        },
        months: {
          shorthand: ["Հնվ", "Փտր", "Մար", "Ապր", "Մայ", "Հնս", "Հլս", "Օգս", "Սեպ", "Հոկ", "Նմբ", "Դեկ"],
          longhand: [
            "Հունվար",
            "Փետրվար",
            "Մարտ",
            "Ապրիլ",
            "Մայիս",
            "Հունիս",
            "Հուլիս",
            "Օգոստոս",
            "Սեպտեմբեր",
            "Հոկտեմբեր",
            "Նոյեմբեր",
            "Դեկտեմբեր",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "ՇԲՏ",
        scrollTitle: "Ոլորեք՝ մեծացնելու համար",
        toggleTitle: "Սեղմեք՝ փոխելու համար",
        amPM: ["ՄԿ", "ԿՀ"],
        yearAriaLabel: "Տարի",
        monthAriaLabel: "Ամիս",
        hourAriaLabel: "Ժամ",
        minuteAriaLabel: "Րոպե",
        time_24hr: !0,
      };
    e.l10ns.hy = t;
    var o = e.l10ns;
    ((r.Armenian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(u, a);
const d = l(a),
  h = s({ __proto__: null, default: d }, [a]);
export { h };
