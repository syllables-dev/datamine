import { aR as f, Y as s } from "./main.js";
function d(a, n) {
  for (var r = 0; r < n.length; r++) {
    const e = n[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(a, t, o.get ? o : { enumerable: !0, get: () => e[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function (a, n) {
  (function (r, e) {
    e(n);
  })(s, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
          longhand: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
        },
        months: {
          shorthand: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
          longhand: [
            "იანვარი",
            "თებერვალი",
            "მარტი",
            "აპრილი",
            "მაისი",
            "ივნისი",
            "ივლისი",
            "აგვისტო",
            "სექტემბერი",
            "ოქტომბერი",
            "ნოემბერი",
            "დეკემბერი",
          ],
        },
        firstDayOfWeek: 1,
        ordinal: function () {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "კვ.",
        scrollTitle: "დასქროლეთ გასადიდებლად",
        toggleTitle: "დააკლიკეთ გადართვისთვის",
        amPM: ["AM", "PM"],
        yearAriaLabel: "წელი",
        time_24hr: !0,
      };
    e.l10ns.ka = t;
    var o = e.l10ns;
    ((r.Georgian = t), (r.default = o), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(i, i.exports);
var l = i.exports;
const u = f(l),
  p = d({ __proto__: null, default: u }, [l]);
export { p as k };
