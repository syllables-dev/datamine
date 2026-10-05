import { br as l, Z as s } from "./main.js";
function f(t, i) {
  for (var a = 0; a < i.length; a++) {
    const e = i[a];
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
var o = {},
  d = {
    get exports() {
      return o;
    },
    set exports(t) {
      o = t;
    },
  };
(function (t, i) {
  (function (a, e) {
    e(i);
  })(s, function (a) {
    var e = typeof window < "u" && window.flatpickr !== void 0 ? window.flatpickr : { l10ns: {} },
      r = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Dom", "Lua", "Mái", "Céa", "Déa", "Aoi", "Sat"],
          longhand: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
        },
        months: {
          shorthand: ["Ean", "Fea", "Már", "Aib", "Bea", "Mei", "Iúi", "Lún", "MFo", "DFo", "Sam", "Nol"],
          longhand: [
            "Eanáir",
            "Feabhra",
            "Márta",
            "Aibreán",
            "Bealtaine",
            "Meitheamh",
            "Iúil",
            "Lúnasa",
            "Meán Fómhair",
            "Deireadh Fómhair",
            "Samhain",
            "Nollaig",
          ],
        },
        time_24hr: !0,
      };
    e.l10ns.hr = r;
    var n = e.l10ns;
    ((a.Irish = r), (a.default = n), Object.defineProperty(a, "__esModule", { value: !0 }));
  });
})(d, o);
const u = l(o),
  g = f({ __proto__: null, default: u }, [o]);
export { g };
