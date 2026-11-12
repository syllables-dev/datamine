import { aR as f, Y as s } from "./main.js";
function u(o, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
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
var i = { exports: {} };
(function (o, a) {
  (function (r, e) {
    e(a);
  })(s, function (r) {
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
    var n = e.l10ns;
    ((r.Armenian = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const d = f(l),
  h = u({ __proto__: null, default: d }, [l]);
export { h };
