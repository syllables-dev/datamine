import { br as i, Z as f } from "./main.js";
function s(o, l) {
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
  u = {
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
  })(f, function (r) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      t = {
        weekdays: {
          shorthand: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស.", "សុក្រ", "សៅរ៍"],
          longhand: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"],
        },
        months: {
          shorthand: ["មករា", "កុម្ភះ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
          longhand: ["មករា", "កុម្ភះ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
        },
        ordinal: function () {
          return "";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " ដល់ ",
        weekAbbreviation: "សប្តាហ៍",
        scrollTitle: "រំកិលដើម្បីបង្កើន",
        toggleTitle: "ចុចដើម្បីផ្លាស់ប្ដូរ",
        yearAriaLabel: "ឆ្នាំ",
        time_24hr: !0,
      };
    e.l10ns.km = t;
    var n = e.l10ns;
    ((r.Khmer = t), (r.default = n), Object.defineProperty(r, "__esModule", { value: !0 }));
  });
})(u, a);
const d = i(a),
  m = s({ __proto__: null, default: d }, [a]);
export { m as k };
