var Uu = Object.defineProperty;
var xu = (i, e, t) => (e in i ? Uu(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t));
var ca = (i, e, t) => xu(i, typeof e != "symbol" ? e + "" : e, t);
import { aB as p, aD as g, aE as en, aF as Fu, aG as Ku, aH as la, aI as Yo } from "./main.js";
function si(i) {
  return i
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "-")
    .replace(/(^-+)|(-+$)/, "")
    .toLowerCase();
}
const Vr = new Map();
function zo(i) {
  if (Vr.has(i)) return Vr.get(i);
  let e = si(i);
  return (
    i.endsWith("y") ? (e = e.substring(0, e.length - 1) + "ies") : e.endsWith("s") || (e = e + "s"), Vr.set(i, e), e
  );
}
function Bu(i) {
  return zo(i);
}
const Vu = [
  "contributors",
  "modalities",
  "movie",
  "musicVideo",
  "musicMovie",
  "trailer",
  "tvEpisode",
  "uploadedVideo",
  "uploaded-videos",
  "music-videos",
  "music-movies",
  "tv-episodes",
  "workouts",
];
function tn(i) {
  return i?.attributes?.playParams?.kind !== void 0 ? i.attributes.playParams.kind : i?.type;
}
function $u(i) {
  return i == null ? !1 : i.isUTS === !0 || Vu.includes(i.type) || i.attributes?.mediaKind === "video";
}
function Hu(i) {
  return i == null ? !1 : !$u(i);
}
function tr(i) {
  return tn(i) === "song";
}
function br(i) {
  return tn(i)?.startsWith("podcast-episode") === !0;
}
function ju(i) {
  const e = i?.attributes?.offers ?? [];
  return br(i) && e.some(({ type: t }) => t === "STDQ");
}
function Qo(i) {
  const e = i?.attributes?.offers ?? [];
  return br(i) && e.some(({ type: t }) => t === "PSUB");
}
function zi(i) {
  const e = i?.attributes?.offers ?? [];
  return br(i) && e.some(({ type: t }) => t === "PLUS");
}
function rn(i) {
  return !!i?.attributes?.isLive;
}
function sn(i) {
  return i?.attributes?.playParams?.format === "stream";
}
function Xo(i) {
  return i?.attributes?.playParams?.format === "tracks";
}
function qu(...i) {
  return Xo(...i);
}
function Wu(i) {
  return qu(i);
}
function Ei(i, e) {
  return !(i?.attributes?.playParams?.kind !== "radioStation" || (e !== void 0 && i.attributes?.mediaKind !== e));
}
function nn(i, e) {
  return Ei(i, e) && sn(i) && !rn(i) && i?.attributes?.streamingRadioSubType === "Episode";
}
function Qi(i, e) {
  return Ei(i, e) && rn(i) && sn(i);
}
function CT(i, e) {
  return Qi(i, e);
}
function Gu(i, e) {
  return nn(i, e) || !!i?.attributes?.isAOD;
}
function Yu(i) {
  return (
    rn(i) && sn(i) && i.attributes.stationProviderName !== void 0 && i.attributes.streamingRadioSubType === "Shoutcast"
  );
}
function zu(i) {
  return i?.type === "LiveService" || i?.defaultPlayable?.type === "Event" || i?.defaultPlayable?.type === "EbsEvent";
}
function Qu(i) {
  return Bu(i);
}
function OT(i) {
  return i.match(/-?songs$/i) !== null;
}
const Xu = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function DT(i) {
  const e = tn(i);
  return e !== void 0 && Xu.includes(e);
}
function Ju(i, e = 1) {
  if (typeof Array.prototype.flat == "function") return Array.prototype.flat.call(i, e);
  if (i == null) throw new TypeError("Cannot convert undefined or null to object");
  Array.isArray(i) || (i = Array.from(i));
  function t(r, s) {
    return s <= 0
      ? r.slice()
      : Array.prototype.reduce.call(
          r,
          function (n, a) {
            return Array.isArray(a) ? n.concat(t(a, s - 1)) : [...n, a];
          },
          [],
        );
  }
  return t(i, e);
}
function ni(i) {
  return Ju(i, 1 / 0);
}
function Jo(...i) {
  const e = ni(i)
    .map((r) => (r instanceof URL ? r.pathname : r))
    .filter((r) => typeof r == "string" && r.trim().length !== 0);
  if (e.length === 0) return "";
  let t = e[0];
  for (let r = 1; r < e.length; r++) t = t.replace(/[/]+$/, "") + "/" + e[r].replace(/^[/]+/, "");
  return (/^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")), t);
}
function Zu(i) {
  i instanceof URL && (i = i.pathname);
  const e = [],
    t = i.lastIndexOf("#");
  t !== -1 && (e.unshift(i.slice(t)), (i = i.slice(0, t)));
  const r = i.lastIndexOf("?");
  return (
    r !== -1 && (e.unshift(i.slice(r)), (i = i.slice(0, r))),
    [...i.split(new RegExp("(?<![/:]+)\\/+")), ...e].filter((s) => s.trim().length !== 0)
  );
}
const Zo = typeof FastBoot < "u" ? FastBoot.require("buffer").Buffer : typeof window < "u" ? window.Buffer : Buffer;
function _t(i) {
  const e = new Map();
  return function (...t) {
    const r = ed(t);
    if (e.has(r)) return e.get(r);
    const s = i(...t);
    return (e.set(r, s), s);
  };
}
function ed(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) {
    const r = i[t];
    if (typeof r == "object")
      try {
        e.push(JSON.stringify(r));
      } catch {
        e.push(`[object ${Object.prototype.toString.call(r)}]`);
      }
    else e.push(String(r));
  }
  return e.join("|");
}
function ki() {
  let i = $r() + $r();
  for (; i.length < 16;) i += $r();
  return i.slice(0, 16);
}
function $r() {
  return Math.random().toString(16).substring(2);
}
function hi(i) {
  if (i === void 0) return !1;
  const e = typeof i == "string" ? i : i.id;
  return /^[a|i|l|p]{1}\.[a-zA-Z0-9-]+$/.test(e);
}
const td = _t((i) => /^(a\.)?[a-zA-Z0-9]+$/.test(i));
function Vt() {
  return globalThis?.process?.versions?.node !== void 0 || typeof globalThis?.FastBoot < "u";
}
function ft() {
  return Vt();
}
const ec = _t(Vt() ? (i) => Zo.from(i, "base64").toString("binary") : (i) => window.atob(i));
_t(Vt() ? (i) => Zo.from(i).toString("base64") : (i) => window.btoa(i));
const id = (i, e = 250, t = { isImmediate: !1 }) => {
    let r;
    return function (...s) {
      const n = this,
        a = function () {
          ((r = void 0), t.isImmediate || i.apply(n, s));
        },
        o = t.isImmediate && r === void 0;
      (r !== void 0 && clearTimeout(r), (r = setTimeout(a, e)), o && i.apply(n, s));
    };
  },
  an = (i, e) => !!i && !!e && [].every.call(i, (t, r) => t === e[r]);
function rd(i) {
  if (!i || (i.startsWith("http") && !i.includes("?"))) return {};
  try {
    const e = i.split("?")[1] ?? i;
    return sd(e, "&", decodeURIComponent);
  } catch {
    return {};
  }
}
function sd(i, e = "&", t = (r) => r) {
  return typeof i != "string"
    ? {}
    : i
        .split(e)
        .map((r) => r.trim().split("=", 2))
        .reduce((r, s) => {
          const [n, a] = s;
          return ((n === "" && a === void 0) || ((r[t(n)] = t(a)), a === void 0 && (r[t(n)] = void 0)), r);
        }, {});
}
const ua = () => {},
  qe = (i) => {
    i.then(ua, ua);
  },
  Dt = _t((i) => {
    const e = ec(i);
    return on(e);
  });
function nd(i = []) {
  return Array.isArray(i) ? i : [i];
}
const on = _t((i) => {
    const e = i.length,
      t = new ArrayBuffer(e),
      r = new Uint8Array(t);
    for (let s = 0; s < e; s++) r[s] = i.charCodeAt(s);
    return r;
  }),
  tc = _t((i) => {
    const e = i.length,
      t = new ArrayBuffer(e * 2),
      r = new Uint16Array(t);
    for (let s = 0; s < e; s++) r[s] = i.charCodeAt(s);
    return r;
  }),
  Qe = _t((i) => {
    let e,
      t,
      r,
      s,
      n,
      a,
      o,
      c = 0;
    const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let h = "";
    for (; c < i.length;)
      ((e = i[c++]),
        (t = c < i.length ? i[c++] : Number.NaN),
        (r = c < i.length ? i[c++] : Number.NaN),
        (s = e >> 2),
        (n = ((e & 3) << 4) | (t >> 4)),
        (a = ((t & 15) << 2) | (r >> 6)),
        (o = r & 63),
        isNaN(t) ? (a = o = 64) : isNaN(r) && (o = 64),
        (h += l.charAt(s) + l.charAt(n) + l.charAt(a) + l.charAt(o)));
    return h;
  });
function Ke(i, e) {
  return Object.prototype.hasOwnProperty.call(Object(i), e);
}
function rt(i) {
  const t = Object.prototype.toString.call(i).toLowerCase().slice(8, -1);
  switch (t) {
    case "set":
      return new Set([...i].map((r) => rt(r)));
    case "map":
      return new Map([...i].map(([r, s]) => [rt(r), rt(s)]));
    case "date":
      return new Date(i.getTime());
    case "regexp": {
      const r = i,
        s =
          typeof r.flags == "string"
            ? r.flags
            : [
                (r.global && "g") || void 0,
                (r.ignoreCase && "i") || void 0,
                (r.multiline && "m") || void 0,
                (r.sticky && "y") || void 0,
                (r.unicode && "u") || void 0,
              ]
                .filter((n) => n !== void 0)
                .join("");
      return RegExp(i.source, s);
    }
    case "arraybuffer": {
      const r = i;
      if (typeof r.slice == "function") return r.slice(0);
      {
        const s = new i.constructor(r.byteLength);
        return (new Uint8Array(s).set(new Uint8Array(r)), s);
      }
    }
    case "dataview":
    case "int8array":
    case "uint8array":
    case "uint8clampedarray":
    case "int16array":
    case "uint16array":
    case "int32array":
    case "uint32array":
    case "float32array":
    case "float64array":
    case "bigint64array":
    case "biguint64array": {
      const r = i,
        s = r.constructor;
      return new s(rt(r.buffer), r.byteOffset, t === "dataview" ? r.byteLength : r.length);
    }
    case "array":
    case "object": {
      const r = Array.isArray(i) ? [] : {};
      for (const s in i) Ke(i, s) && (r[s] = rt(i[s]));
      return r;
    }
    default:
      return i;
  }
}
function ad(i, e) {
  return e.split(".").reduce((t, r) => {
    if (t !== void 0) return t[r];
  }, i);
}
function od(i) {
  if (typeof i != "object") throw new TypeError("Source is not an Object");
  for (const e in i) if (Ke(i, e)) return !1;
  return !0;
}
function cd(i, e, t) {
  return e.split(".").reduce((r, s, n, a) => {
    const o = n === a.length - 1,
      c = Ke(r, s),
      l = r[s] instanceof Object,
      h = r[s] === null;
    if (!o && c && (!l || h))
      throw new TypeError(`Value at ${a.slice(0, n + 1).join(".")} in keypath is not an Object.`);
    return o ? ((r[s] = t), i) : c ? r[s] : (r[s] = {});
  }, i);
}
function ld(i, e, t = !1) {
  return (
    t && (i = Object.keys(i).reduce((r, s) => ((r[i[s]] = s), r), {})),
    Object.keys(i).reduce((r, s) => {
      const n = i[s],
        a = typeof n == "function" ? n() : ad(e, n);
      return (a && cd(r, s, a), r);
    }, {})
  );
}
function nt(i = "", e = document.cookie) {
  const t = e.match(new RegExp(`(?:^|;\\s*)${i}=([^;]*)`));
  if (t) return t[1];
}
function ud(i = "", e = document.cookie) {
  const t = new RegExp(`(?:^|;\\s*)${i}=([^;]*)`, "g");
  return (e.match(t) || []).map((r) => r.replace(new RegExp(`^;?\\s*${i}=`), ""));
}
function cn(i, e, t = "", r = 14, s, n) {
  const a = new Date();
  ((s = s ?? window), (n = n ?? (/\./.test(s.location.hostname) ? s.location.hostname : "")));
  const o = n.length > 0 ? `domain=${n}; ` : "";
  a.setTime(a.getTime() + r * 24 * 60 * 60 * 1e3);
  let c = "";
  (s.location.protocol === "https:" && (c = "; secure"),
    (s.document.cookie = `${i}=${e}; expires=${a.toUTCString()}; ${o}path=${t}${c}`));
}
function fs(i, e, t) {
  cn(i, "", "/", 0, e, t);
}
function ic() {
  let i = !1;
  try {
    i = typeof sessionStorage < "u";
  } catch {}
  return i;
}
function ln() {
  let i;
  return (ic() && (i = sessionStorage), i);
}
function un() {
  let i = !1;
  try {
    i = typeof localStorage < "u";
  } catch {}
  return i;
}
function Se() {
  let i;
  return (un() && (i = localStorage), i);
}
function dd(i) {
  if (!un()) return;
  const e = Se().getItem(i);
  if (e !== null) return e;
}
function hd(i) {
  const e = dd(i);
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return;
    }
}
function pd(i, e) {
  if (un()) {
    if (!e) {
      Se().setItem(i, "");
      return;
    }
    Se().setItem(i, JSON.stringify(e));
  }
}
class Tt {
  dispatchNamespace;
  _eventRegistry = {};
  constructor(e = [], t) {
    (e.forEach((r) => {
      this._eventRegistry[r] = [];
    }),
      t && t.namespace && (this.dispatchNamespace = `com.apple.${t.namespace}`),
      this.shouldStorageDispatch &&
        ((this._handleGlobalStorageEvent = this._handleGlobalStorageEvent.bind(this)),
        window.addEventListener("storage", this._handleGlobalStorageEvent)));
  }
  get shouldStorageDispatch() {
    return typeof window < "u" && ic() && this.dispatchNamespace;
  }
  addEventListener(e, t) {
    Array.isArray(this._eventRegistry[e]) && this._eventRegistry[e].push(t);
  }
  dispatchEvent(e, t) {
    Array.isArray(this._eventRegistry[e]) && this._eventRegistry[e].forEach((r) => r(t));
  }
  dispatchDistributedEvent(e, t) {
    if ((this.dispatchEvent(e, t), this.shouldStorageDispatch)) {
      const r = `${this.dispatchNamespace}:${e}`;
      ln()?.setItem(r, JSON.stringify(t));
    }
  }
  removeEventListener(e, t) {
    if (Array.isArray(this._eventRegistry[e])) {
      const r = this._eventRegistry[e].indexOf(t);
      this._eventRegistry[e].splice(r, 1);
    }
  }
  _handleGlobalStorageEvent(e) {
    if (this.dispatchNamespace && e.key?.startsWith(`${this.dispatchNamespace}:`)) {
      const t = e.key.substring(this.dispatchNamespace.length + 1);
      this.dispatchEvent(t, JSON.parse(e.newValue));
    }
  }
}
let fd = function (e) {
  return yd(e) && !md(e);
};
function yd(i) {
  return !!i && typeof i == "object";
}
function md(i) {
  let e = Object.prototype.toString.call(i);
  return e === "[object RegExp]" || e === "[object Date]" || bd(i);
}
let gd = typeof Symbol == "function" && Symbol.for,
  vd = gd ? Symbol.for("react.element") : 60103;
function bd(i) {
  return i.$$typeof === vd;
}
function _d(i) {
  return Array.isArray(i) ? [] : {};
}
function ir(i, e) {
  return e.clone !== !1 && e.isMergeableObject(i) ? Mt(_d(i), i, e) : i;
}
function Td(i, e, t) {
  return i.concat(e).map(function (r) {
    return ir(r, t);
  });
}
function Ed(i, e) {
  if (!e.customMerge) return Mt;
  let t = e.customMerge(i);
  return typeof t == "function" ? t : Mt;
}
function kd(i) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(i).filter(function (e) {
        return i.propertyIsEnumerable(e);
      })
    : [];
}
function da(i) {
  return Object.keys(i).concat(kd(i));
}
function Sd(i, e, t) {
  let r = {};
  return (
    t.isMergeableObject(i) &&
      da(i).forEach(function (s) {
        r[s] = ir(i[s], t);
      }),
    da(e).forEach(function (s) {
      !t.isMergeableObject(e[s]) || !i[s] ? (r[s] = ir(e[s], t)) : (r[s] = Ed(s, t)(i[s], e[s], t));
    }),
    r
  );
}
function Mt(i, e, t) {
  ((t = t || {}), (t.arrayMerge = t.arrayMerge || Td), (t.isMergeableObject = t.isMergeableObject || fd));
  let r = Array.isArray(e),
    s = Array.isArray(i);
  return r === s ? (r ? t.arrayMerge(i, e, t) : Sd(i, e, t)) : ir(e, t);
}
Mt.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (r, s) {
    return Mt(r, s, t);
  }, {});
};
const ha = (i) =>
  !!(
    i &&
    typeof i.hasAttributes == "function" &&
    typeof i.hasRelationships == "function" &&
    typeof i.hasViews == "function" &&
    typeof i.serialize == "function"
  );
class Id {
  constructor(e) {
    if (((this.token = e), !e || !/^[a-z0-9\-\_]{16,}\.[a-z0-9\-\_]{16,}\.[a-z0-9\-\_]{16,}/i.test(e)))
      throw new Error("Invalid token.");
    const [t, r] = e.split("."),
      { exp: s, iss: n } = this._decode(r);
    if (((this.expiration = s * 1e3), this.isExpired)) throw new Error("Initialized with an expired token.");
    this.teamId = n;
    const { kid: a } = this._decode(t);
    this.keyId = a;
  }
  expiration;
  keyId;
  teamId;
  get isExpired() {
    return this.expiration < Date.now();
  }
  _decode(e) {
    return JSON.parse(ec(e));
  }
}
function Pd(i = []) {
  const e = {};
  return (
    i.forEach((t) => {
      t.charAt(0) === "-" ? ((t = t.substr(1)), (e[t] = !1)) : (e[t] = !0);
    }),
    e
  );
}
const wd = (i) => typeof i != "function";
function Ni(i) {
  return i === void 0 || wd(i) ? i : i();
}
function rc(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function Hr(i) {
  return typeof i == "function";
}
function Ot(i) {
  return typeof i == "string";
}
function $(i, e) {
  return Ot(i) ? (e?.trim !== !1 ? i.trim() : i).length === 0 : e?.strict === !1;
}
function Ad(i) {
  return typeof i == "boolean";
}
function Rd(i) {
  return Ad(i)
    ? !i
    : function (...e) {
        return !i(...e);
      };
}
const ys = Rd($);
function ms(i, e) {
  const t = e.path.map((r, s) => (s === 0 ? e.encode(r) : `[${e.encode(r)}]`)).join("");
  return i === null ? t : `${t}=${e.encode(i)}`;
}
const Cd = {
    comma: function (e, t) {
      return ms(e.join(","), t);
    },
    repeat: function (e, t) {
      return e
        .map((r) => ms(String(r), t))
        .filter((r) => r.length > 0)
        .join("&");
    },
    bracket: function (e, t) {
      return e
        .map(function (r) {
          return t.next(r, { ...t, path: [...t.path, ""] });
        })
        .filter(ys)
        .join("&");
    },
    index: function (e, t) {
      return e
        .map(function (r, s) {
          return t.next(r, { ...t, path: [...t.path, String(s)] });
        })
        .filter(ys)
        .join("&");
    },
  },
  Od = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (r) {
          return t.next(e[r], { ...t, path: t.path.concat(r) });
        })
        .filter(ys)
        .join("&");
    },
  },
  Dd = (i) => encodeURIComponent(String(i)),
  Md = (i) => String(i);
function Ld(i, e) {
  return !!(
    (i === void 0 && e?.skipUndefined !== !1) ||
    (i === null && e?.skipNull !== !1) ||
    ($(i) && e?.skipEmptyString !== !1)
  );
}
function Nd(i, e) {
  if (!i) return "";
  let t = "";
  if ((e?.prefix === !0 ? (t = "?") : Ot(e?.prefix) && (t = e.prefix), Ot(i))) return t + i.replace(/^[?&]+/, "");
  const r = Hr(e?.arrayFormat) ? e.arrayFormat : Cd[e?.arrayFormat ?? "comma"],
    s = Hr(e?.objectFormat) ? e.objectFormat : Od[e?.objectFormat ?? "bracket"];
  function n(l, h) {
    return Ld(l, e) ? "" : rc(l) ? s(l, h) : Array.isArray(l) ? r(l, h) : ms(l, h);
  }
  const a = e?.sort ?? ((...l) => 0);
  let o = Dd;
  Hr(e?.encode) ? (o = e.encode) : e?.encode === !1 && (o = Md);
  const c = s(i, { path: [], next: n, encode: o, sort: a });
  return c === "" ? "" : t + c;
}
function _r(i, e, t) {
  rc(e) && ((t = e), (e = ""));
  const r = Jo([i, e ?? ""]);
  let s = "?";
  r.endsWith("&") || r.endsWith("?") ? (s = "") : r.includes("?") && (s = "&");
  const n = t !== void 0 ? Nd(t, { prefix: s }) : "";
  return r + n;
}
function Ud(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (typeof i != typeof e || ((i = i), (e = e), i.byteLength !== e.byteLength)) return !1;
  for (let t = 0; t < i.byteLength; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function L(i) {
  const e = { version: i.toLowerCase() },
    t = i
      .toLowerCase()
      .split(".")
      .filter((a) => !!a);
  if (t.length <= 1 && !/^\d+$/.test(t[0])) return e;
  const r = parseInt(t[0], 10),
    s = parseInt(t[1], 10),
    n = parseInt(t[2], 10);
  return (Number.isNaN(r) || ((e.major = r), Number.isNaN(s) || (e.minor = s), Number.isNaN(n) || (e.patch = n)), e);
}
function jr(i, e, t) {
  const { userAgent: r } = e ?? {};
  if (typeof r != "string" || r.trim() === "") return t;
  for (const s of i) {
    const n = s.slice(0, -1),
      a = s[s.length - 1];
    let o = null;
    for (const c of n)
      if (((o = r.match(c)), o !== null)) {
        Object.assign(t, a(o, e, t));
        break;
      }
    if (o !== null) break;
  }
  return t;
}
function xd(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function N(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {},
      r = Object.keys(t);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(t).filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        }),
      )),
      r.forEach(function (s) {
        xd(i, s, t[s]);
      }));
  }
  return i;
}
function Fd(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t.push.apply(t, r);
  }
  return t;
}
function pa(i, e) {
  return (
    (e = e ?? {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
      : Fd(Object(e)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    i
  );
}
const qr = {
  browser: [
    [
      /^(itunes|music|tv)\/([\w.]+)\s/i,
      (i) =>
        pa(
          N(
            {
              name: "webview",
              variant: i[1]
                .trim()
                .toLowerCase()
                .replace(/(music|tv)/i, "$1.app"),
            },
            L(i[2]),
          ),
          { mobile: !1 },
        ),
    ],
    [
      /(?:(?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w.]+);)/i,
      (i) => N({ name: "webview", variant: "facebook", mobile: !0 }, L(i[1])),
    ],
    [
      /(instagram|snapchat)[/ ]([-\w.]+)/i,
      (i) => N({ name: "webview", variant: i[1].trim().toLowerCase(), mobile: !0 }, L(i[2])),
    ],
    [
      /musical_ly(?:.+app_?version\/|_)([\w.]+)/i,
      (i) => N({ name: "webview", variant: "tiktok", mobile: !0 }, L(i[1])),
    ],
    [/twitter/i, () => ({ name: "webview", variant: "twitter", mobile: !0 })],
    [/ wv\).+?(?:version|chrome)\/([\w.]+)/i, (i) => N({ name: "webview", mobile: !0 }, L(i[1]))],
    [/electron\/([\w.]+) safari/i, (i) => N({ name: "electron", mobile: !1 }, L(i[1]))],
    [
      /tesla\/(.*?(20\d\d\.([-\w.])+))/i,
      (i) => pa(N({ name: "other", variant: "tesla", mobile: !1 }, L(i[2])), { version: i[1] }),
    ],
    [
      /(samsung|huawei)browser\/([-\w.]+)/i,
      (i) =>
        N(
          {
            name: "other",
            variant: i[1]
              .trim()
              .toLowerCase()
              .replace(/browser/i, ""),
            mobile: !0,
          },
          L(i[2]),
        ),
    ],
    [/yabrowser\/([-\w.]+)/i, (i) => N({ name: "other", variant: "yandex", mobile: !1 }, L(i[1]))],
    [
      /(brave|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w.]+)/i,
      (i, { userAgent: e }) =>
        N({ name: "other", variant: i[1].trim().toLowerCase(), mobile: /mobile/i.test(e) }, L(i[2].replace(/-/g, "."))),
    ],
    [
      /edg(e|ios|a)?\/([\w.]+)/i,
      (i) => {
        var e;
        return N(
          { name: "edge", mobile: /(edgios|edga)/i.test((e = i[1]) !== null && e !== void 0 ? e : "") },
          L(i[2]),
        );
      },
    ],
    [/trident.+rv[: ]([\w.]{1,9})\b.+like gecko/i, (i) => N({ name: "ie", mobile: !1 }, L(i[1]))],
    [
      /opr\/([\w.]+)/i,
      /opera mini\/([-\w.]+)/i,
      /opera [mobiletab]{3,6}\b.+version\/([-\w.]+)/i,
      /opera(?:.+version\/|[/ ]+)([\w.]+)/i,
      (i) => N({ name: "opera", mobile: /mobile/i.test(i[0]) }, L(i[1])),
    ],
    [/headlesschrome(?:\/([\w.]+)| )/i, (i) => N({ name: "chrome", variant: "headless", mobile: !1 }, L(i[1]))],
    [/\b(?:crmo|crios)\/([\w.]+)/i, (i) => N({ name: "chrome", mobile: !0 }, L(i[1]))],
    [
      /chrome(?: browser)?\/v?([\w.]+)( mobile)?/i,
      (i) => {
        var e;
        return N({ name: "chrome", mobile: /mobile/i.test((e = i[2]) !== null && e !== void 0 ? e : "") }, L(i[1]));
      },
    ],
    [/\bfocus\/([\w.]+)/i, (i) => N({ name: "firefox", variant: "focus", mobile: !0 }, L(i[1]))],
    [
      /fxios\/([\w.-]+)/i,
      /(?:mobile|tablet);.*(?:firefox)\/([\w.-]+)/i,
      (i) => N({ name: "firefox", mobile: !0 }, L(i[1])),
    ],
    [
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[/ ]?([\w.+]+)/i,
      (i) => N({ name: "firefox", variant: i[1].trim().toLowerCase(), mobile: !1 }, L(i[2])),
    ],
    [
      /(?:firefox)\/([\w.]+)/i,
      /(?:mozilla)\/([\w.]+) .+rv:.+gecko\/\d+/i,
      (i) => N({ name: "firefox", mobile: !1 }, L(i[1])),
    ],
    [
      /version\/([\w.,]+) .*mobile(?:\/\w+ | ?)safari/i,
      /version\/([\w.,]+) .*(safari)/i,
      /webkit.+?(?:mobile ?safari|safari)(?:\/([\w.]+))/i,
      (i) => N({ name: "safari", mobile: /mobile/i.test(i[0]) }, L(i[1])),
    ],
  ],
  engine: [
    [/webkit\/(?:537\.36).+chrome\/(?!27)([\w.]+)/i, (i) => N({ name: "blink" }, L(i[1]))],
    [/windows.+ edge\/([\w.]+)/i, (i) => N({ name: "blink" }, L(i[1]))],
    [/presto\/([\w.]+)/i, (i) => N({ name: "presto" }, L(i[2]))],
    [/trident\/([\w.]+)/i, (i) => N({ name: "trident" }, L(i[1]))],
    [/gecko\/([\w.]+)/i, (i) => N({ name: "gecko" }, L(i[1]))],
    [/(khtml|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w.]+)/i, (i) => N({ name: "other" }, L(i[2]))],
    [/webkit\/([\w.]+)/i, (i) => N({ name: "webkit" }, L(i[1]))],
  ],
  os: [
    [
      /microsoft windows (vista|xp)/i,
      /windows nt 6\.2; (arm)/i,
      /windows (?:phone(?: os)?|mobile)[/ ]?([\d.\w ]*)/i,
      /windows[/ ]?([ntce\d. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d.]+)/i,
      (i) => N({ name: "windows" }, L(i[1])),
    ],
    [
      /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
      /(?:ios;fbsv\/|iphone.+ios[/ ])([\d.]+)/i,
      (i) => N({ name: "ios" }, L(i[1].replace(/_/g, "."))),
    ],
    [/mac(?:intosh;?)? os x ?([\d._]+)/i, (i) => N({ name: "macos" }, L(i[1].replace(/_/g, ".")))],
    [/cros [\w]+(?:\)| ([\w.]+)\b)/i, (i) => N({ name: "chromeos" }, L(i[1]))],
    [
      /(?:android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-/ ]?([\w.]*)/i,
      /droid ([\w.]+|[\d+])\b.+(android[- ]x86|harmonyos)/i,
      (i) => N({ name: "android" }, L(i[1])),
    ],
    [/linux/i, () => ({ name: "linux" })],
  ],
};
function Kd(i, e) {
  let t = i;
  for (const r of e) t = r(t);
  return t;
}
function Bd(i, e) {
  var t;
  const r = {
    navigator: i,
    ua: (t = i?.userAgent) !== null && t !== void 0 ? t : "",
    extensions: [],
    browser: jr(qr.browser, i, { name: "unknown", mobile: !1 }),
    engine: jr(qr.engine, i, { name: "unknown" }),
    os: jr(qr.os, i, { name: "unknown" }),
  };
  var s;
  return Kd(r, (s = e?.extensions) !== null && s !== void 0 ? s : []);
}
function Vd(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function Ui(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {},
      r = Object.keys(t);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(t).filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        }),
      )),
      r.forEach(function (s) {
        Vd(i, s, t[s]);
      }));
  }
  return i;
}
function $d(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t.push.apply(t, r);
  }
  return t;
}
function xi(i, e) {
  return (
    (e = e ?? {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
      : $d(Object(e)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    i
  );
}
function Hd(i) {
  let e = i.os.name;
  const t = i.os.name === "android";
  let r = i.os.name === "macos",
    s = i.os.name === "ios";
  var n;
  const a =
    e === "ipados" ||
    (s && /ipad/i.test(i.ua)) ||
    (r && ((n = i.navigator.maxTouchPoints) !== null && n !== void 0 ? n : 0) >= 2);
  a && ((e = "ipados"), (s = !1), (r = !1));
  const o = xi(Ui({}, i.browser), {
      isUnknown: i.browser.name === "unknown",
      isSafari: i.browser.name === "safari",
      isChrome: i.browser.name === "chrome",
      isFirefox: i.browser.name === "firefox",
      isEdge: i.browser.name === "edge",
      isWebView: i.browser.name === "webview",
      isOther: i.browser.name === "other",
      isMobile: i.browser.mobile || s || a || t || !1,
    }),
    c = xi(Ui({}, i.engine), {
      isUnknown: i.engine.name === "unknown",
      isWebKit: i.engine.name === "webkit",
      isBlink: i.engine.name === "blink",
      isGecko: i.engine.name === "gecko",
    }),
    l = xi(Ui({}, i.os), {
      name: e,
      isUnknown: i.os.name === "unknown",
      isLinux: i.os.name === "linux",
      isWindows: i.os.name === "windows",
      isMacOS: r,
      isAndroid: t,
      isIOS: s,
      isIPadOS: a,
    });
  return xi(Ui({}, i), { extensions: [...i.extensions, "flags"], browser: o, os: l, engine: c });
}
let Wr;
function yt() {
  if (Wr === void 0) {
    let i = function (e) {
      return e && e.Math === Math && e;
    };
    Wr =
      i(typeof globalThis == "object" && globalThis) ||
      i(typeof window == "object" && window) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  }
  return Wr;
}
function fa(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function jd(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        fa(n, r, s, a, o, "next", c);
      }
      function o(c) {
        fa(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function qd() {
  return gs.apply(this, arguments);
}
function gs() {
  return (
    (gs = jd(function* () {
      return yt().navigator !== void 0;
    })),
    gs.apply(this, arguments)
  );
}
function ya(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Wd(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        ya(n, r, s, a, o, "next", c);
      }
      function o(c) {
        ya(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function dn() {
  return vs.apply(this, arguments);
}
function vs() {
  return (
    (vs = Wd(function* () {
      var i, e;
      return (
        ((e = yt().process) === null || e === void 0 || (i = e.versions) === null || i === void 0 ? void 0 : i.node) !==
        void 0
      );
    })),
    vs.apply(this, arguments)
  );
}
function ma(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Tr(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        ma(n, r, s, a, o, "next", c);
      }
      function o(c) {
        ma(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Gd(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function Yd(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {},
      r = Object.keys(t);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(t).filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        }),
      )),
      r.forEach(function (s) {
        Gd(i, s, t[s]);
      }));
  }
  return i;
}
const G = {
    playready: "com.microsoft.playready",
    widevine: "com.widevine.alpha",
    clearkey: "org.w3.clearkey",
    fairplay: "com.apple.fps",
  },
  ga = { fairplay_legacy: "com.apple.fps.1_0", playready_legacy: "com.microsoft.playready" };
function sc() {
  return bs.apply(this, arguments);
}
function bs() {
  return (
    (bs = Tr(function* () {
      var i;
      const e = yt();
      return (
        ((i = e.navigator) === null || i === void 0 ? void 0 : i.requestMediaKeySystemAccess) !== void 0 &&
        e.MediaKeys !== void 0 &&
        e.MediaKeySystemAccess !== void 0
      );
    })),
    bs.apply(this, arguments)
  );
}
function zd(i) {
  return _s.apply(this, arguments);
}
function _s() {
  return (
    (_s = Tr(function* (i) {
      var e, t, r;
      const s = (r = i?.contentType) !== null && r !== void 0 ? r : 'video/mp4; codecs="avc1.42E01E"',
        n = [],
        a = yt();
      return (
        typeof ((e = a.WebKitMediaKeys) === null || e === void 0 ? void 0 : e.isTypeSupported) == "function" &&
          a.WebKitMediaKeys.isTypeSupported(ga.fairplay_legacy, s) === !0 &&
          n.push("fairplay_legacy"),
        typeof ((t = a.MSMediaKeys) === null || t === void 0 ? void 0 : t.isTypeSupported) == "function" &&
          a.MSMediaKeys.isTypeSupported(ga.playready_legacy, s) === !0 &&
          n.push("playready_legacy"),
        n
      );
    })),
    _s.apply(this, arguments)
  );
}
function Qd(i, e) {
  return Ts.apply(this, arguments);
}
function Ts() {
  return (
    (Ts = Tr(function* (i, e) {
      const t = Yd({ initDataTypes: ["keyids", "cenc"] }, e);
      if (t.audioCapabilities === void 0 && t.videoCapabilities === void 0)
        throw new Error("Configuration should at least include a audioCapabilities or videoCapabilities key");
      const r = i.indexOf(".") !== -1 ? i : G[i];
      if (r === void 0) return !1;
      var s, n;
      const a = [
        ...((s = t.audioCapabilities) !== null && s !== void 0 ? s : []),
        ...((n = t.videoCapabilities) !== null && n !== void 0 ? n : []),
      ].map(({ contentType: l }) => l);
      try {
        const h = (yield navigator.requestMediaKeySystemAccess(r, [t])).getConfiguration();
        var o, c;
        const m = [
          ...((o = h.audioCapabilities) !== null && o !== void 0 ? o : []),
          ...((c = h.videoCapabilities) !== null && c !== void 0 ? c : []),
        ].map(({ contentType: y }) => y);
        return a.every((y) => m.includes(y));
      } catch (l) {
        if (l instanceof DOMException && (l.name === "NotSupportedError" || l.name === "SecurityError")) return !1;
        throw l;
      }
    })),
    Ts.apply(this, arguments)
  );
}
function Xd(i) {
  return Es.apply(this, arguments);
}
function Es() {
  return (
    (Es = Tr(function* (i) {
      const e = [];
      if ((yield dn()) || !(yield sc())) return e;
      function t(n) {
        return typeof n == "string" ? { contentType: n } : n;
      }
      const r = i?.videoCapability !== void 0 ? [t(i.videoCapability)] : [t('video/mp4; codecs="avc1.42E01E"')],
        s = i?.audioCapability !== void 0 ? [t(i.audioCapability)] : [];
      for (const [n, a] of Object.entries(G))
        (yield Qd(a, { videoCapabilities: r, audioCapabilities: s })) && e.push(n);
      return e;
    })),
    Es.apply(this, arguments)
  );
}
function va(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Jd(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        va(n, r, s, a, o, "next", c);
      }
      function o(c) {
        va(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Zd() {
  return ks.apply(this, arguments);
}
function ks() {
  return (
    (ks = Jd(function* () {
      var i, e, t, r;
      const s = yt(),
        n = s.ManagedMediaSource !== void 0,
        a =
          typeof ((e = s.ManagedSourceBuffer) === null || e === void 0 || (i = e.prototype) === null || i === void 0
            ? void 0
            : i.appendBuffer) == "function" &&
          typeof ((r = s.ManagedSourceBuffer) === null || r === void 0 || (t = r.prototype) === null || t === void 0
            ? void 0
            : t.remove) == "function";
      return n && a;
    })),
    ks.apply(this, arguments)
  );
}
function ba(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function eh(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        ba(n, r, s, a, o, "next", c);
      }
      function o(c) {
        ba(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function th() {
  return Ss.apply(this, arguments);
}
function Ss() {
  return (
    (Ss = eh(function* () {
      return yt().MediaSource !== void 0 && yt().SourceBuffer !== void 0;
    })),
    Ss.apply(this, arguments)
  );
}
function _a(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function ih(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        _a(n, r, s, a, o, "next", c);
      }
      function o(c) {
        _a(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function nc() {
  return Is.apply(this, arguments);
}
function Is() {
  return (
    (Is = ih(function* () {
      var i;
      if (yield dn()) return !1;
      const e = document.createElement("video");
      return (
        (e?.webkitSupportsPresentationMode !== void 0 && typeof e?.webkitSetPresentationMode == "function") ||
        ((i = document) === null || i === void 0 ? void 0 : i.pictureInPictureEnabled) !== void 0
      );
    })),
    Is.apply(this, arguments)
  );
}
async function rh() {
  const e = globalThis?.window?.navigator ?? { userAgent: "", maxTouchPoints: 0 },
    t = await qd(),
    r = await dn(),
    s = await Xd(),
    n = await zd();
  let a;
  return (
    s.includes("fairplay") && (a = "fairplay"),
    s.includes("playready") && (a = "playready"),
    s.includes("widevine") && (a = "widevine"),
    {
      userAgent: await Bd(e, { extensions: [Hd] }),
      isBrowserEnvironment: t,
      isNodeEnvironment: r,
      isPictureInPictureSupported: await nc(),
      isMMSSupported: await Zd(),
      isMSESupported: await th(),
      isEMESupported: await sc(),
      isDRMAvailable: a !== void 0,
      availableKeySystems: s,
      preferredKeySystem: a,
      hasWebKitMediaKeysSupport: n.includes("fairplay_legacy"),
      hasMSMediaKeysSupport: n.includes("playready_legacy"),
    }
  );
}
class sh {
  configured = !1;
  config;
  get isConfigured() {
    return this.configured;
  }
  get userAgent() {
    return this.config.userAgent;
  }
  get ua() {
    return this.userAgent.ua;
  }
  get isNodeEnvironment() {
    return this.config.isNodeEnvironment;
  }
  get isBrowserEnvironment() {
    return this.config.isBrowserEnvironment;
  }
  get isPictureInPictureSupported() {
    return this.config.isPictureInPictureSupported;
  }
  get isMMSSupported() {
    return this.config.isMMSSupported;
  }
  get isMSESupported() {
    return this.config.isMSESupported;
  }
  get isEMESupported() {
    return this.config.isEMESupported;
  }
  get isDRMAvailable() {
    return this.config.isDRMAvailable;
  }
  get availableKeySystems() {
    return this.config.availableKeySystems;
  }
  get preferredKeySystem() {
    return this.config.preferredKeySystem;
  }
  get hasWebKitMediaKeysSupport() {
    return this.config.hasWebKitMediaKeysSupport;
  }
  get hasMSMediaKeysSupport() {
    return this.config.hasMSMediaKeysSupport;
  }
  get browser() {
    return this.userAgent.browser;
  }
  get engine() {
    return this.userAgent.engine;
  }
  get os() {
    return this.userAgent.os;
  }
  get isMobile() {
    return this.browser.isMobile;
  }
  static async detect() {
    return new this(await rh());
  }
  constructor(e) {
    ((this.config = e), (this.configured = !0));
  }
  configure(e) {
    for (const [t, r] of Object.entries(e)) this.config[t] = r;
    this.configured = !0;
  }
}
const nh = (i) => i.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (e, t) => t.toUpperCase()),
  ai = {};
function hn(i, e) {
  const t = nh(i);
  if (Ke(ai, t)) {
    const s = ai[t];
    if (e !== s.constructor)
      throw new Error(`DevFlag ${i} was already registered with a different type (${s.constructor.name})`);
    return s;
  }
  const r = new e(i);
  return (
    Object.defineProperty(ai, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return r;
      },
      set: function (s) {
        r.set(s);
      },
    }),
    r
  );
}
class pn {
  key;
  constructor(e) {
    if (typeof e != "string" || e.trim() === "") throw new Error("DevFlag requires a non-empty string key");
    this.key = e;
  }
  get value() {
    return this.get();
  }
  get configured() {
    return this.value !== void 0;
  }
  read() {
    const e = Se()?.getItem(this.key) ?? null;
    return e !== null ? e : void 0;
  }
  write(e) {
    Se()?.setItem(this.key, e);
  }
  clear() {
    Se()?.removeItem(this.key);
  }
}
class fn extends pn {
  static register(e) {
    return hn(e, this);
  }
  static get(e) {
    return this.register(e).get();
  }
  static set(e, t) {
    this.register(e).set(t);
  }
  get() {
    return this.read();
  }
  set(e) {
    (typeof e != "string" && console.warn("Value for StringDevFlag should be a string"), this.write(e));
  }
}
class _e extends pn {
  static register(e) {
    return hn(e, this);
  }
  static get(e) {
    return this.register(e).get();
  }
  static set(e, t) {
    this.register(e).set(t);
  }
  get() {
    const e = this.read();
    if (e !== void 0) return e === "1" || e.toLowerCase() === "true";
  }
  set(e) {
    if (typeof e != "boolean") {
      console.warn("Value for BooleanDevFlag should be a boolean");
      return;
    }
    this.write(e === !0 ? "1" : "0");
  }
  get enabled() {
    return this.get() === !0;
  }
  enable() {
    this.set(!0);
  }
  disable() {
    this.set(!1);
  }
  toggle() {
    this.set(!this.get());
  }
}
class Er extends pn {
  static register(e) {
    return hn(e, this);
  }
  static get(e) {
    return this.register(e).get();
  }
  static set(e, t) {
    this.register(e).set(t);
  }
  get() {
    const e = this.read();
    if (e !== void 0)
      try {
        return JSON.parse(e);
      } catch {
        return;
      }
  }
  set(e) {
    this.write(JSON.stringify(e));
  }
  prop(e) {
    if (this.value !== void 0) return this.value[e];
  }
}
function ah(i) {
  return typeof i == "number" && !Number.isNaN(i);
}
function oh(i, e) {
  const t = {};
  for (const r of e) r in i && i[r] !== void 0 && (t[r] = i[r]);
  return t;
}
class ch {
  static async create(e) {
    return new this(e);
  }
  configured = !1;
  fetchFunction = globalThis?.fetch !== void 0 ? fetch.bind(globalThis) : void 0;
  get fetch() {
    if (this.fetchFunction === void 0) throw new p(p.Reason.INTERNAL_ERROR, "Could not find fetch implementation");
    return this.fetchFunction;
  }
  get isConfigured() {
    return this.configured;
  }
  constructor(e) {
    this.configure(e ?? {});
  }
  configure(e) {
    (e?.fetchFunction !== void 0 && (this.fetchFunction = e.fetchFunction), (this.configured = !0));
  }
  buildURL(e, t, r) {
    return new URL(_r(e, t, r));
  }
  buildHeaders(...e) {
    return ni(e).reduce(function (t, r) {
      let s;
      return (
        r instanceof Headers || r instanceof Map ? (s = Array.from(r.entries())) : (s = Object.entries(r)),
        s.map(([n, a]) => {
          a === void 0 ? t.delete(n) : t.set(n, a);
        }),
        t
      );
    }, new Headers());
  }
  buildRequest(e, t) {
    return new Request(new URL(e), t);
  }
  async fetchText(e) {
    let t;
    try {
      t = await this.fetch(e);
    } catch {
      const s = e instanceof Request ? e.url : String(e);
      throw new p(p.Reason.NETWORK_ERROR, `Unable to complete request for ${s}`);
    }
    try {
      return await t.text();
    } catch {
      const s = e instanceof Request ? e.url : String(e);
      throw new p(p.Reason.REQUEST_ERROR, `Unable to read body as text for ${s}`);
    }
  }
  async fetchJSON(e) {
    let t;
    try {
      t = await this.fetch(e);
    } catch {
      const s = e instanceof Request ? e.url : String(e);
      throw new p(p.Reason.NETWORK_ERROR, `Unable to complete request for ${s}`);
    }
    try {
      return await t.json();
    } catch {
      const s = e instanceof Request ? e.url : String(e);
      throw new p(p.Reason.REQUEST_ERROR, `Unable to read body as JSON for ${s}`);
    }
  }
  async fetchArrayBuffer(e) {
    let t;
    try {
      t = await this.fetch(e);
    } catch {
      const s = e instanceof Request ? e.url : String(e);
      throw new p(p.Reason.NETWORK_ERROR, `Unable to complete request for ${s}`);
    }
    try {
      return await t.arrayBuffer();
    } catch {
      const s = e instanceof Request ? e.url : String(e);
      throw new p(p.Reason.REQUEST_ERROR, `Unable to read body as ArrayBuffer for ${s}`);
    }
  }
}
const Gr = new Map();
function pi(i) {
  if (Gr.has(i)) return Gr.get(i);
  let e = si(i);
  return (e.endsWith("s") && (e = e.slice(0, -1)), Gr.set(i, e), e);
}
const Et =
    (i = 100, e) =>
    (t, r, s) => {
      const n = s.value,
        a = lh(n, i, e);
      s.value = a;
    },
  lh = (i, e = 250, t = { isImmediate: !1 }) => {
    let r, s;
    function n(c) {
      return c?.resolve(t.cancelledValue);
    }
    const a = () => {
        r && (r.resolved || (n(r), r.timeoutId && clearTimeout(r.timeoutId)), (r = void 0));
      },
      o = (c, l, h, m) => {
        i.apply(c, m)
          .then((y) => {
            (l(y), r && (r.resolved = !0));
          })
          .catch(h);
      };
    return t.isImmediate
      ? function (...c) {
          const l = Date.now(),
            h = this;
          return (
            s && l >= s && a(),
            (s = Date.now() + e),
            r
              ? n(Promise)
              : new Promise((m, y) => {
                  ((r = { resolve: m, reject: y }), o(h, m, y, c));
                })
          );
        }
      : function (...c) {
          const l = this;
          return (
            r && a(),
            new Promise(function (h, m) {
              const y = setTimeout(o.bind(void 0, l, h, m, c), e);
              r = { resolve: h, reject: m, timeoutId: y };
            })
          );
        };
  };
function ac(i, e = {}) {
  const t = "Deprecation Warning: ",
    r = e.message ?? `${i} has been deprecated`,
    s = [];
  (e.since && s.push(`since: ${e.since}`),
    e.until && s.push(`until: ${e.until}`),
    console.warn(t + r + (s.length > 0 ? ` (${s.join(", ")})` : "")));
}
const Ps = {},
  uh = (i) => {
    let e = Ps[i];
    return (e || ((e = Promise.resolve()), (Ps[i] = e)), e);
  },
  kr = (i) => {
    let e = Promise.resolve();
    return (t, r, s) => {
      const n = s.value;
      return (
        (s.value = async function (...a) {
          return (i && (e = uh(i)), (e = e.catch(() => {}).then(() => n.apply(this, a))), i && (Ps[i] = e), e);
        }),
        s
      );
    };
  };
var Re = ((i) => ((i[(i.STANDARD = 64)] = "STANDARD"), (i[(i.HIGH = 256)] = "HIGH"), i))(Re || {}),
  S = ((i) => (
    (i.apiStorefrontChanged = "apiStorefrontChanged"),
    (i.hlsLevelUpdated = "hlsLevelUpdated"),
    (i.hlsLevelLoaded = "player.hls.levelLoaded"),
    (i.mediaContentComplete = "mediaContentComplete"),
    (i.playbackPause = "playbackPause"),
    (i.playbackPlay = "playbackPlay"),
    (i.playbackScrub = "playbackScrub"),
    (i.playbackSeek = "playbackSeek"),
    (i.playbackSkip = "playbackSkip"),
    (i.playbackStop = "playbackStop"),
    (i.lyricsPlay = "lyricsPlay"),
    (i.lyricsStop = "lyricsStop"),
    (i.lyricsUpdate = "lyricsUpdate"),
    (i.playerActivate = "playerActivate"),
    (i.playerExit = "playerExit"),
    (i.queueModified = "queueModified"),
    (i.userActivityIntent = "userActivityIntent"),
    (i.applicationActivityIntent = "applicationActivityIntent"),
    (i.timedMetadata = "timedMetadata"),
    i
  ))(S || {}),
  ht = ((i) => (
    (i.MUSICKIT = "music_kit-integration"),
    (i.OTHER = "other"),
    (i.MINI = "mini"),
    (i.SONG = "song"),
    (i.ALBUM = "album"),
    (i.ALBUM_CLASSICAL = "album-classical"),
    (i.ARTIST = "artist"),
    (i.COMPILATION = "compilation"),
    (i.COMPILATION_CLASSICAL = "compilation-classical"),
    (i.PLAYLIST = "playlist"),
    (i.PLAYLIST_CLASSICAL = "playlist-classical"),
    (i.RADIO = "radio"),
    (i.SEARCH = "search"),
    (i.STATION = "station"),
    i
  ))(ht || {}),
  dh = ((i) => (
    (i[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.RADIO = 1)] = "RADIO"),
    (i[(i.PLAYLIST = 2)] = "PLAYLIST"),
    (i[(i.ALBUM = 3)] = "ALBUM"),
    (i[(i.ARTIST = 4)] = "ARTIST"),
    i
  ))(dh || {}),
  P = ((i) => (
    (i[(i.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
    (i[(i.OTHER = 1)] = "OTHER"),
    (i[(i.TRACK_SKIPPED_FORWARDS = 2)] = "TRACK_SKIPPED_FORWARDS"),
    (i[(i.PLAYBACK_MANUALLY_PAUSED = 3)] = "PLAYBACK_MANUALLY_PAUSED"),
    (i[(i.PLAYBACK_SUSPENDED = 4)] = "PLAYBACK_SUSPENDED"),
    (i[(i.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM = 5)] = "MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM"),
    (i[(i.PLAYBACK_PAUSED_DUE_TO_INACTIVITY = 6)] = "PLAYBACK_PAUSED_DUE_TO_INACTIVITY"),
    (i[(i.NATURAL_END_OF_TRACK = 7)] = "NATURAL_END_OF_TRACK"),
    (i[(i.PLAYBACK_STOPPED_DUE_TO_SESSION_TIMEOUT = 8)] = "PLAYBACK_STOPPED_DUE_TO_SESSION_TIMEOUT"),
    (i[(i.TRACK_BANNED = 9)] = "TRACK_BANNED"),
    (i[(i.FAILED_TO_LOAD = 10)] = "FAILED_TO_LOAD"),
    (i[(i.PAUSED_ON_TIMEOUT = 11)] = "PAUSED_ON_TIMEOUT"),
    (i[(i.SCRUB_BEGIN = 12)] = "SCRUB_BEGIN"),
    (i[(i.SCRUB_END = 13)] = "SCRUB_END"),
    (i[(i.TRACK_SKIPPED_BACKWARDS = 14)] = "TRACK_SKIPPED_BACKWARDS"),
    (i[(i.NOT_SUPPORTED_BY_CLIENT = 15)] = "NOT_SUPPORTED_BY_CLIENT"),
    (i[(i.QUICK_PLAY = 16)] = "QUICK_PLAY"),
    (i[(i.EXITED_APPLICATION = 17)] = "EXITED_APPLICATION"),
    i
  ))(P || {}),
  je = ((i) => (
    (i[(i.Manual = 0)] = "Manual"),
    (i[(i.Interval = 1)] = "Interval"),
    (i[(i.SkipIntro = 2)] = "SkipIntro"),
    (i[(i.Automatic = 3)] = "Automatic"),
    (i[(i.SkipToLiveManual = 4)] = "SkipToLiveManual"),
    (i[(i.SkipToLiveAutomatic = 5)] = "SkipToLiveAutomatic"),
    i
  ))(je || {});
const hh = { NEXT_ITEM: "NEXT" };
var ph = ((i) => (
    (i[(i.REPEAT_UNKNOWN = 0)] = "REPEAT_UNKNOWN"),
    (i[(i.REPEAT_OFF = 1)] = "REPEAT_OFF"),
    (i[(i.REPEAT_ONE = 2)] = "REPEAT_ONE"),
    (i[(i.REPEAT_ALL = 3)] = "REPEAT_ALL"),
    i
  ))(ph || {}),
  fh = ((i) => (
    (i[(i.SHUFFLE_UNKNOWN = 0)] = "SHUFFLE_UNKNOWN"),
    (i[(i.SHUFFLE_OFF = 1)] = "SHUFFLE_OFF"),
    (i[(i.SHUFFLE_ON = 2)] = "SHUFFLE_ON"),
    i
  ))(fh || {}),
  yh = ((i) => (
    (i[(i.AUTO_UNKNOWN = 0)] = "AUTO_UNKNOWN"),
    (i[(i.AUTO_OFF = 1)] = "AUTO_OFF"),
    (i[(i.AUTO_ON = 2)] = "AUTO_ON"),
    (i[(i.AUTO_ON_CONTENT_UNSUPPORTED = 3)] = "AUTO_ON_CONTENT_UNSUPPORTED"),
    i
  ))(yh || {}),
  mh = ((i) => ((i[(i.NOT_SPECIFIED = 0)] = "NOT_SPECIFIED"), (i[(i.CONTAINER_CHANGED = 1)] = "CONTAINER_CHANGED"), i))(
    mh || {},
  ),
  Ce = ((i) => (
    (i[(i.PLAY_END = 0)] = "PLAY_END"),
    (i[(i.PLAY_START = 1)] = "PLAY_START"),
    (i[(i.LYRIC_DISPLAY = 2)] = "LYRIC_DISPLAY"),
    i
  ))(Ce || {}),
  oc = ((i) => (
    (i[(i.INVALID = 0)] = "INVALID"),
    (i[(i.ITUNES_STORE_CONTENT = 1)] = "ITUNES_STORE_CONTENT"),
    (i[(i.NON_SONG_CLIP = 2)] = "NON_SONG_CLIP"),
    (i[(i.AD = 3)] = "AD"),
    (i[(i.STREAM = 4)] = "STREAM"),
    (i[(i.AUDIO_AD = 5)] = "AUDIO_AD"),
    (i[(i.VIDEO_AD = 6)] = "VIDEO_AD"),
    (i[(i.TIMED_METADATA_PING = 7)] = "TIMED_METADATA_PING"),
    (i[(i.ARTIST_UPLOADED_CONTENT = 8)] = "ARTIST_UPLOADED_CONTENT"),
    (i[(i.AGGREGATE_NON_CATALOG_PLAY_TIME = 9)] = "AGGREGATE_NON_CATALOG_PLAY_TIME"),
    (i[(i.ORIGINAL_CONTENT_MOVIES = 10)] = "ORIGINAL_CONTENT_MOVIES"),
    (i[(i.ORIGINAL_CONTENT_SHOWS = 11)] = "ORIGINAL_CONTENT_SHOWS"),
    i
  ))(oc || {}),
  cc = ((i) => ((i[(i.AUDIO = 0)] = "AUDIO"), (i[(i.VIDEO = 1)] = "VIDEO"), i))(cc || {}),
  gh = ((i) => ((i[(i.AUTO = 0)] = "AUTO"), (i[(i.MANUAL = 1)] = "MANUAL"), i))(gh || {}),
  ws = ((i) => (
    (i[(i.ORIGINATING_DEVICE = 0)] = "ORIGINATING_DEVICE"),
    (i[(i.PAIRED_WATCH = 1)] = "PAIRED_WATCH"),
    (i[(i.SONOS = 2)] = "SONOS"),
    (i[(i.CAR_PLAY = 3)] = "CAR_PLAY"),
    (i[(i.WEB_AUC = 4)] = "WEB_AUC"),
    (i[(i.TWITTER_AUC = 5)] = "TWITTER_AUC"),
    (i[(i.MUSIC_SDK = 6)] = "MUSIC_SDK"),
    (i[(i.ATV_REMOTE = 7)] = "ATV_REMOTE"),
    (i[(i.WEBPLAYER = 8)] = "WEBPLAYER"),
    (i[(i.WHOLE_HOUSE_AUDIO = 9)] = "WHOLE_HOUSE_AUDIO"),
    (i[(i.MUSICKIT = 10)] = "MUSICKIT"),
    (i[(i.VW = 11)] = "VW"),
    (i[(i.UNKNOWN_SOURCE_TYPE = 12)] = "UNKNOWN_SOURCE_TYPE"),
    (i[(i.AMAZON = 13)] = "AMAZON"),
    (i[(i.PORSCHE = 14)] = "PORSCHE"),
    (i[(i.CHROMECAST = 15)] = "CHROMECAST"),
    (i[(i.WEB_APP = 16)] = "WEB_APP"),
    (i[(i.MERCEDES_BENZ = 17)] = "MERCEDES_BENZ"),
    (i[(i.THIRD_PARTY_TV = 18)] = "THIRD_PARTY_TV"),
    (i[(i.SEAT = 19)] = "SEAT"),
    (i[(i.CUPRA = 20)] = "CUPRA"),
    i
  ))(ws || {}),
  vh = ((i) => ((i[(i.EPISODE = 1)] = "EPISODE"), (i[(i.SHOUTCAST = 2)] = "SHOUTCAST"), i))(vh || {});
const yn = "/",
  ee = { CRITICAL: 50, ERROR: 40, WARNING: 30, NOTICE: 20, INFO: 10, DEBUG: 2, TRACE: 1, NONE: 0 };
function bh(i) {
  return typeof i != "string" ? !1 : ee[i.toUpperCase()] !== void 0;
}
function _h(i) {
  return typeof i != "number" ? !1 : Object.values(ee).includes(i);
}
const Ta = {
  OFF: "NONE",
  0: "NONE",
  "+": "INFO",
  "++": "DEBUG",
  V: "DEBUG",
  D: "DEBUG",
  VERBOSE: "DEBUG",
  VV: "TRACE",
  SILLY: "TRACE",
  "*": "TRACE",
};
function mt(i, e = {}) {
  if (typeof i == "number") return _h(i) ? i : void 0;
  let t = i.toUpperCase();
  return (e.allowShorthands && Ta[t] !== void 0 && (t = Ta[t]), bh(t) ? ee[t] : void 0);
}
function lc(i) {
  for (const [e, t] of Object.entries(ee)) if (i === t) return e;
}
function Th(i, e = { includeRoot: !0 }) {
  return (
    uc(i, function (t) {
      (t.parent === void 0 && !e.includeRoot) || t.clearLevel();
    }),
    i
  );
}
function Eh(i, e) {
  return (
    uc(i, function (t) {
      let r;
      const s = t.namespace;
      (t.clearLevel(),
        t.parent === void 0 && e["*"] !== void 0 ? (r = mt(e["*"])) : e[s] !== void 0 && (r = mt(e[s])),
        r !== void 0 && t.setLevel(r));
    }),
    i
  );
}
function kh(i) {
  const e = mt(i.trim(), { allowShorthands: !0 });
  if (e !== void 0) return { "*": e };
  const t = {},
    r = i.split(",").filter((s) => s.trim() !== "");
  for (const s of r) {
    const n = s.split("=", 2);
    if (n.length !== 2) continue;
    const a = n[0]?.trim() ?? "",
      o = n[1]?.trim() ?? "",
      c = mt(o, { allowShorthands: !0 });
    a !== "" && c !== void 0 && (t[a] = c);
  }
  return t;
}
function uc(i, e) {
  const t = [i];
  for (; t.length > 0;) {
    const r = t.shift();
    r !== void 0 && (t.push(...r.children), e(r));
  }
}
const Sh = ee.ERROR,
  Ih = (i, e) => i !== ee.NONE && e >= i;
let kt = class dc {
  name;
  _parent;
  _children = new Map();
  _level;
  _levelPolicy;
  _handlers;
  constructor(e, t) {
    ((this.name = e),
      (this._levelPolicy = t?.levelPolicy),
      (this._handlers = t?.handlers),
      t?.parent !== void 0 && this.linkParent(t.parent),
      t?.level !== void 0 && this.setLevel(t.level));
  }
  get parent() {
    return this._parent;
  }
  get children() {
    return Array.from(this._children.values());
  }
  get namespace() {
    return this._parent === void 0 ? this.name : this._parent.namespace + yn + this.name;
  }
  get enabled() {
    return this.level !== ee.NONE;
  }
  get level() {
    return this._level ?? this.parent?.level ?? Sh;
  }
  get levelName() {
    return lc(this.level) ?? "UNKNOWN";
  }
  get levelPolicy() {
    return this._levelPolicy ?? this.parent?.levelPolicy ?? Ih;
  }
  get handlers() {
    return this._handlers ?? this.parent?.handlers ?? {};
  }
  isEnabledFor(e) {
    return this.levelPolicy(this.level, e);
  }
  setLevel(e) {
    const t = mt(e);
    t !== void 0 && (this._level = t);
  }
  clearLevel() {
    this._level = void 0;
  }
  setLevelPolicy(e) {
    this._levelPolicy = e;
  }
  clearLevelPolicy() {
    this._levelPolicy = void 0;
  }
  addHandler(e, t) {
    (this._handlers || (this._handlers = {}), (this._handlers[e] = t));
  }
  hasHandler(e) {
    return this._handlers?.[e] !== void 0;
  }
  removeHandler(e) {
    this._handlers !== void 0 &&
      (delete this._handlers[e], Object.keys(this._handlers).length === 0 && this.clearHandlers());
  }
  clearHandlers() {
    this._handlers = void 0;
  }
  createChild(e, t) {
    const r = this._children.get(e);
    return r !== void 0 ? r : new dc(e, { ...t, parent: this });
  }
  linkChild(e) {
    if (e.parent !== void 0 && e.parent !== this)
      throw new Error(`Logger '${e.name}' is already a child of a different parent ('${e.parent.name}')`);
    const t = this._children.get(e.name);
    if (t !== void 0 && t !== e) throw new Error(`A child with name '${e.name}' is already registered`);
    return (t === void 0 && (this._children.set(e.name, e), e.linkParent(this)), e);
  }
  unlinkChild(e) {
    const t = this._children.get(e.name);
    return (t === e && (this._children.delete(e.name), t.unlinkParent()), e);
  }
  getByName(e) {
    return this._children.get(e);
  }
  getByNamespace(e) {
    return Ph(this, e);
  }
  linkParent(e) {
    return (this.parent !== e && (this.unlinkParent(), (this._parent = e), e.linkChild(this)), this);
  }
  unlinkParent() {
    return (this._parent !== void 0 && (this._parent.unlinkChild(this), (this._parent = void 0)), this);
  }
  log(e, t, ...r) {
    const s = mt(e);
    s !== void 0 && this.logRecord({ time: Date.now(), namespace: this.namespace, level: s, message: t, args: r });
  }
  logRecord(e) {
    if (!this.levelPolicy(this.level, e.level)) return;
    const t = { namespace: this.namespace, ...e };
    for (const r of Object.values(this.handlers)) r.process(t);
  }
  error(e, ...t) {
    this.log(ee.ERROR, e, ...t);
  }
  warning(e, ...t) {
    this.log(ee.WARNING, e, ...t);
  }
  warn(e, ...t) {
    this.warning(e, ...t);
  }
  info(e, ...t) {
    this.log(ee.INFO, e, ...t);
  }
  debug(e, ...t) {
    this.log(ee.DEBUG, e, ...t);
  }
  trace(e, ...t) {
    this.log(ee.TRACE, e, ...t);
  }
};
function Ph(i, e, t = yn) {
  if (((e = e.trim()), e === "" || e === "*")) return i;
  const r = e.split(t);
  if ((r[0].trim() === i.name && r.shift(), r.length === 0)) return i;
  let s = i;
  for (; s !== void 0 && r.length > 0;) {
    const n = r.shift();
    s = s.getByName(n.trim());
  }
  return s;
}
class hc {
  enabled;
  callback;
  constructor(e, t = {}) {
    ((this.callback = e), (this.enabled = t.enabled ?? !0));
  }
  process(e) {
    this.enabled && this.callback !== void 0 && this.callback(e);
  }
}
const wh = /%{([^}]+)}/gi,
  Ea = {
    timestamp: (i) => String(i.time),
    time: (i) => String(i.time),
    datetime: (i) => new Date(i.time).toISOString(),
    date: (i) => new Date(i.time).toISOString(),
    level: (i) => String(i.level),
    levelname: (i) => lc(i.level) ?? "UNKNOWN",
    message: (i) => i.message,
    name: (i) => i.namespace.split(yn).pop(),
    namespace: (i) => i.namespace,
  };
function Ah(i) {
  return function (e) {
    return i.replace(wh, function (t, r) {
      return ((r = r.toLowerCase()), Ea[r] !== void 0 ? Ea[r](e) : t);
    });
  };
}
const Rh = new Map([
    [ee.CRITICAL, "error"],
    [ee.ERROR, "error"],
    [ee.WARNING, "warn"],
    [ee.NOTICE, "warn"],
    [ee.INFO, "log"],
    [ee.DEBUG, "debug"],
  ]),
  Ch = Ah("%{datetime} %{levelname} - [%{namespace}] %{message}");
function Oh(i) {
  return i !== void 0 && i in console;
}
class Dh {
  enabled;
  mapLevels;
  levelMapping;
  format;
  get hasConsole() {
    return typeof console < "u";
  }
  constructor(e = {}) {
    ((this.enabled = e.enabled ?? !0),
      (this.mapLevels = e.mapLevels ?? !0),
      (this.levelMapping = e.levelMapping ?? Rh),
      (this.format = e.formatter ?? Ch));
  }
  process(e) {
    if (!this.enabled || !this.hasConsole) return;
    let t = "log";
    if (this.mapLevels) {
      const n = this.levelMapping.get(e.level);
      Oh(n) && (t = n);
    }
    const r = e.args ?? [],
      s = this.format(e);
    console[t](s, ...r);
  }
}
const MT = new kt("paf"),
  Mh = new Map([
    ["play", Ce.PLAY_START],
    ["playbackstarted", Ce.PLAY_START],
    ["stop", Ce.PLAY_END],
    ["playbackstopped", Ce.PLAY_END],
  ]);
function Lh(i) {
  return typeof i == "number" ? i : (Mh.get(i) ?? Ce.PLAY_END);
}
const Nh = new Map([
  ["exit", P.EXITED_APPLICATION],
  ["next", P.TRACK_SKIPPED_FORWARDS],
  ["pause", P.PLAYBACK_MANUALLY_PAUSED],
  ["playbackfinished", P.NATURAL_END_OF_TRACK],
  ["playbackstopped", P.PLAYBACK_MANUALLY_PAUSED],
  ["previous", P.TRACK_SKIPPED_BACKWARDS],
  ["scrub_begin", P.SCRUB_BEGIN],
  ["scrub_end", P.SCRUB_END],
  ["stop", P.NATURAL_END_OF_TRACK],
]);
function Uh(i) {
  if (i !== void 0) return Nh.get(i);
}
function LT(i) {
  const e = rt(i),
    t = xh(i);
  return (
    (e.eventType = t.eventType),
    (e.eventTypeString = t.eventTypeString),
    e.endReasonType === void 0 && t.eventTypeString !== void 0 && (e.endReasonType = Uh(t.eventTypeString)),
    e.reporting !== !1 && (e.reporting = !0),
    e
  );
}
function xh(i) {
  const e = i.eventType ?? Ce.PLAY_START;
  return typeof e == "number" ? { eventType: e } : { eventTypeString: e, eventType: Lh(e) };
}
function Fh(i, e, t) {
  return i.eventType === void 0
    ? Ce.PLAY_START
    : i.itemType === oc.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? Ce.PLAY_END
      : (i.eventType ?? Ce.PLAY_START);
}
const { AUDIO: ka, VIDEO: Kh } = cc;
function NT(i, e, t) {
  if (Fh(i) === Ce.LYRIC_DISPLAY) return ka;
  const { kind: r, mediaType: s } = i;
  if (typeof s == "number") return s;
  const n = typeof s == "string" ? s : r;
  return n && /video|movie/i.test(n) ? Kh : ka;
}
const Bh = {
    AFG: "143610",
    AGO: "143564",
    AIA: "143538",
    ALB: "143575",
    AND: "143611",
    ARE: "143481",
    ARG: "143505",
    ARM: "143524",
    ATG: "143540",
    AUS: "143460",
    AUT: "143445",
    AZE: "143568",
    BEL: "143446",
    BEN: "143576",
    BFA: "143578",
    BGD: "143490",
    BGR: "143526",
    BHR: "143559",
    BHS: "143539",
    BIH: "143612",
    BLR: "143565",
    BLZ: "143555",
    BMU: "143542",
    BOL: "143556",
    BRA: "143503",
    BRB: "143541",
    BRN: "143560",
    BTN: "143577",
    BWA: "143525",
    CAF: "143623",
    CAN: "143455",
    CHE: "143459",
    CHL: "143483",
    CHN: "143465",
    CIV: "143527",
    CMR: "143574",
    COD: "143613",
    COG: "143582",
    COL: "143501",
    CPV: "143580",
    CRI: "143495",
    CYM: "143544",
    CYP: "143557",
    CZE: "143489",
    DEU: "143443",
    DMA: "143545",
    DNK: "143458",
    DOM: "143508",
    DZA: "143563",
    ECU: "143509",
    EGY: "143516",
    ESP: "143454",
    EST: "143518",
    ETH: "143569",
    FIN: "143447",
    FJI: "143583",
    FRA: "143442",
    FSM: "143591",
    GAB: "143614",
    GBR: "143444",
    GEO: "143615",
    GHA: "143573",
    GIN: "143616",
    GMB: "143584",
    GNB: "143585",
    GRC: "143448",
    GRD: "143546",
    GTM: "143504",
    GUY: "143553",
    HKG: "143463",
    HND: "143510",
    HRV: "143494",
    HUN: "143482",
    IDN: "143476",
    IND: "143467",
    IRL: "143449",
    IRQ: "143617",
    ISL: "143558",
    ISR: "143491",
    ITA: "143450",
    JAM: "143511",
    JOR: "143528",
    JPN: "143462",
    KAZ: "143517",
    KEN: "143529",
    KGZ: "143586",
    KHM: "143579",
    KNA: "143548",
    KOR: "143466",
    KWT: "143493",
    LAO: "143587",
    LBN: "143497",
    LBR: "143588",
    LBY: "143567",
    LCA: "143549",
    LIE: "143522",
    LKA: "143486",
    LTU: "143520",
    LUX: "143451",
    LVA: "143519",
    MAC: "143515",
    MAR: "143620",
    MCO: "143618",
    MDA: "143523",
    MDG: "143531",
    MDV: "143488",
    MEX: "143468",
    MKD: "143530",
    MLI: "143532",
    MLT: "143521",
    MMR: "143570",
    MNE: "143619",
    MNG: "143592",
    MOZ: "143593",
    MRT: "143590",
    MSR: "143547",
    MUS: "143533",
    MWI: "143589",
    MYS: "143473",
    NAM: "143594",
    NER: "143534",
    NGA: "143561",
    NIC: "143512",
    NLD: "143452",
    NOR: "143457",
    NPL: "143484",
    NRU: "143606",
    NZL: "143461",
    OMN: "143562",
    PAK: "143477",
    PAN: "143485",
    PER: "143507",
    PHL: "143474",
    PLW: "143595",
    PNG: "143597",
    POL: "143478",
    PRT: "143453",
    PRY: "143513",
    PSE: "143596",
    QAT: "143498",
    ROU: "143487",
    RUS: "143469",
    RWA: "143621",
    SAU: "143479",
    SEN: "143535",
    SGP: "143464",
    SLB: "143601",
    SLE: "143600",
    SLV: "143506",
    SRB: "143500",
    STP: "143598",
    SUR: "143554",
    SVK: "143496",
    SVN: "143499",
    SWE: "143456",
    SWZ: "143602",
    SYC: "143599",
    TCA: "143552",
    TCD: "143581",
    THA: "143475",
    TJK: "143603",
    TKM: "143604",
    TON: "143608",
    TTO: "143551",
    TUN: "143536",
    TUR: "143480",
    TWN: "143470",
    TZA: "143572",
    UGA: "143537",
    UKR: "143492",
    URY: "143514",
    USA: "143441",
    UZB: "143566",
    VCT: "143550",
    VEN: "143502",
    VGB: "143543",
    VNM: "143471",
    VUT: "143609",
    WSM: "143607",
    XKX: "143624",
    YEM: "143571",
    ZAF: "143472",
    ZMB: "143622",
    ZWE: "143605",
  },
  Vh = 5 * 60,
  $h =
    (i = Vh) =>
    (e, t, r) => {
      if (r === void 0 || typeof r.value != "function")
        throw new TypeError(`Only methods can be decorated with @CachedResult, but ${t} is not a method.`);
      return {
        configurable: !0,
        get: function () {
          const s = r.value,
            n = i * 1e3;
          let a = -1,
            o;
          async function c(...l) {
            const h = Date.now();
            return ((o === void 0 || a === -1 || (a > 0 && h > a + n)) && ((a = h), (o = await s.apply(this, l))), o);
          }
          return (
            (c.updateCache = function (l) {
              ((a = Date.now()), (o = l));
            }),
            (c.getCachedValue = () => o),
            Object.defineProperty(this, t, { value: c, configurable: !0, writable: !0 }),
            c
          );
        },
      };
    },
  Hh = {
    AW: "ABW",
    AF: "AFG",
    AO: "AGO",
    AI: "AIA",
    AX: "ALA",
    AL: "ALB",
    AD: "AND",
    AE: "ARE",
    AR: "ARG",
    AM: "ARM",
    AS: "ASM",
    AQ: "ATA",
    TF: "ATF",
    AG: "ATG",
    AU: "AUS",
    AT: "AUT",
    AZ: "AZE",
    BI: "BDI",
    BE: "BEL",
    BJ: "BEN",
    BQ: "BES",
    BF: "BFA",
    BD: "BGD",
    BG: "BGR",
    BH: "BHR",
    BS: "BHS",
    BA: "BIH",
    BL: "BLM",
    BY: "BLR",
    BZ: "BLZ",
    BM: "BMU",
    BO: "BOL",
    BR: "BRA",
    BB: "BRB",
    BN: "BRN",
    BT: "BTN",
    BV: "BVT",
    BW: "BWA",
    CF: "CAF",
    CA: "CAN",
    CC: "CCK",
    CH: "CHE",
    CL: "CHL",
    CN: "CHN",
    CI: "CIV",
    CM: "CMR",
    CD: "COD",
    CG: "COG",
    CK: "COK",
    CO: "COL",
    KM: "COM",
    CV: "CPV",
    CR: "CRI",
    CU: "CUB",
    CW: "CUW",
    CX: "CXR",
    KY: "CYM",
    CY: "CYP",
    CZ: "CZE",
    DE: "DEU",
    DJ: "DJI",
    DM: "DMA",
    DK: "DNK",
    DO: "DOM",
    DZ: "DZA",
    EC: "ECU",
    EG: "EGY",
    ER: "ERI",
    EH: "ESH",
    ES: "ESP",
    EE: "EST",
    ET: "ETH",
    FI: "FIN",
    FJ: "FJI",
    FK: "FLK",
    FR: "FRA",
    FO: "FRO",
    FM: "FSM",
    GA: "GAB",
    GB: "GBR",
    GE: "GEO",
    GG: "GGY",
    GH: "GHA",
    GI: "GIB",
    GN: "GIN",
    GP: "GLP",
    GM: "GMB",
    GW: "GNB",
    GQ: "GNQ",
    GR: "GRC",
    GD: "GRD",
    GL: "GRL",
    GT: "GTM",
    GF: "GUF",
    GU: "GUM",
    GY: "GUY",
    HK: "HKG",
    HM: "HMD",
    HN: "HND",
    HR: "HRV",
    HT: "HTI",
    HU: "HUN",
    ID: "IDN",
    IM: "IMN",
    IN: "IND",
    IO: "IOT",
    IE: "IRL",
    IR: "IRN",
    IQ: "IRQ",
    IS: "ISL",
    IL: "ISR",
    IT: "ITA",
    JM: "JAM",
    JE: "JEY",
    JO: "JOR",
    JP: "JPN",
    KZ: "KAZ",
    KE: "KEN",
    KG: "KGZ",
    KH: "KHM",
    KI: "KIR",
    KN: "KNA",
    KR: "KOR",
    KW: "KWT",
    LA: "LAO",
    LB: "LBN",
    LR: "LBR",
    LY: "LBY",
    LC: "LCA",
    LI: "LIE",
    LK: "LKA",
    LS: "LSO",
    LT: "LTU",
    LU: "LUX",
    LV: "LVA",
    MO: "MAC",
    MF: "MAF",
    MA: "MAR",
    MC: "MCO",
    MD: "MDA",
    MG: "MDG",
    MV: "MDV",
    MX: "MEX",
    MH: "MHL",
    MK: "MKD",
    ML: "MLI",
    MT: "MLT",
    MM: "MMR",
    ME: "MNE",
    MN: "MNG",
    MP: "MNP",
    MZ: "MOZ",
    MR: "MRT",
    MS: "MSR",
    MQ: "MTQ",
    MU: "MUS",
    MW: "MWI",
    MY: "MYS",
    YT: "MYT",
    NA: "NAM",
    NC: "NCL",
    NE: "NER",
    NF: "NFK",
    NG: "NGA",
    NI: "NIC",
    NU: "NIU",
    NL: "NLD",
    NO: "NOR",
    NP: "NPL",
    NR: "NRU",
    NZ: "NZL",
    OM: "OMN",
    PK: "PAK",
    PA: "PAN",
    PN: "PCN",
    PE: "PER",
    PH: "PHL",
    PW: "PLW",
    PG: "PNG",
    PL: "POL",
    PR: "PRI",
    KP: "PRK",
    PT: "PRT",
    PY: "PRY",
    PS: "PSE",
    PF: "PYF",
    QA: "QAT",
    RE: "REU",
    RO: "ROU",
    RU: "RUS",
    RW: "RWA",
    SA: "SAU",
    SD: "SDN",
    SN: "SEN",
    SG: "SGP",
    GS: "SGS",
    SH: "SHN",
    SJ: "SJM",
    SB: "SLB",
    SL: "SLE",
    SV: "SLV",
    SM: "SMR",
    SO: "SOM",
    PM: "SPM",
    RS: "SRB",
    SS: "SSD",
    ST: "STP",
    SR: "SUR",
    SK: "SVK",
    SI: "SVN",
    SE: "SWE",
    SZ: "SWZ",
    SX: "SXM",
    SC: "SYC",
    SY: "SYR",
    TC: "TCA",
    TD: "TCD",
    TG: "TGO",
    TH: "THA",
    TJ: "TJK",
    TK: "TKL",
    TM: "TKM",
    TL: "TLS",
    TO: "TON",
    TT: "TTO",
    TN: "TUN",
    TR: "TUR",
    TV: "TUV",
    TW: "TWN",
    TZ: "TZA",
    UG: "UGA",
    UA: "UKR",
    UM: "UMI",
    UY: "URY",
    US: "USA",
    UZ: "UZB",
    VA: "VAT",
    VC: "VCT",
    VE: "VEN",
    VG: "VGB",
    VI: "VIR",
    VN: "VNM",
    VU: "VUT",
    WF: "WLF",
    WS: "WSM",
    XK: "XKX",
    YE: "YEM",
    ZA: "ZAF",
    ZM: "ZMB",
    ZW: "ZWE",
  };
function jh(i = "en-US") {
  const e = Yr[i.toLowerCase()];
  if (e) return e;
  if (i.includes("-")) {
    const r = i.split("-")[0],
      s = Yr[r.toLowerCase()];
    if (s) return s;
  }
  return Yr["en-us"];
}
const Yr = {
  af: 48,
  sq: 1,
  ar: 34,
  eu: 1,
  bg: 49,
  be: 1,
  ca: 42,
  zh: 19,
  "zh-tw": 18,
  "zh-cn": 19,
  "zh-hk": 45,
  "zh-sg": 19,
  hr: 41,
  cs: 22,
  da: 11,
  nl: 10,
  "nl-be": 65,
  en: 1,
  "en-us": 1,
  "en-eg": 26,
  "en-au": 27,
  "en-gb": 2,
  "en-ca": 6,
  "en-nz": 27,
  "en-ie": 26,
  "en-za": 26,
  "en-jm": 26,
  "en-bz": 26,
  "en-tt": 26,
  "en-001": 26,
  et: 30,
  fo: 1,
  fa: 59,
  fi: 12,
  fr: 3,
  "fr-ca": 5,
  gd: 2,
  de: 4,
  "de-ch": 57,
  el: 23,
  he: 36,
  hi: 50,
  hu: 21,
  is: 31,
  id: 37,
  it: 7,
  ja: 9,
  ko: 13,
  lv: 33,
  lt: 32,
  mk: 1,
  mt: 1,
  no: 14,
  nb: 14,
  nn: 14,
  pl: 20,
  "pt-br": 15,
  pt: 24,
  rm: 1,
  ro: 39,
  ru: 16,
  sr: 1,
  sk: 40,
  sl: 52,
  es: 8,
  "es-mx": 28,
  "es-419": 44,
  sv: 17,
  th: 35,
  ts: 1,
  tn: 1,
  tr: 25,
  uk: 29,
  ur: 55,
  ve: 1,
  vi: 43,
  xh: 1,
  yi: 1,
  zu: 56,
  ms: 38,
  iw: 36,
  lo: 46,
  tl: 47,
  kk: 51,
  ta: 53,
  te: 54,
  bn: 58,
  ga: 60,
  ht: 61,
  la: 62,
  pa: 63,
  sa: 64,
};
let ut = "Music-User-Token";
ut = "Media-User-Token";
function pc() {
  if (typeof navigator > "u") return [];
  if (navigator.languages) return navigator.languages;
  const i = navigator.language || navigator.userLanguage;
  return i ? [i] : [];
}
const qh = [
  "apps.apple.com",
  "books.apple.com",
  "fitness.apple.com",
  "music.apple.com",
  "podcasts.apple.com",
  "tv.apple.com",
];
function fc(i) {
  let e = i;
  return (
    i &&
      qh.some(function (t) {
        if (i.endsWith(`.${t}`)) return ((e = t), !0);
      }),
    e
  );
}
const Wh = new Set(["apps", "books", "music", "podcasts", "tv"]),
  Gh = /\.apple\.com$/;
function Yh(i) {
  if (!i || !Gh.test(i)) return;
  const e = i.split(".");
  let t = e[e.length - 3];
  const r = t;
  if (t && t.includes("-")) {
    const s = t.split("-");
    t = s[s.length - 1];
  }
  if (Wh.has(t)) return r;
}
function Si(i, e) {
  !e && typeof location < "u" && location.hostname && (e = location);
  let t = `${i}.itunes.apple.com`;
  if (!e) return t;
  const r = Yh(e.hostname);
  return (r && (t = `${i}.${r}.apple.com`), t);
}
function rr(i = { app: "music", p: "subscribe" }) {
  return (
    typeof i.app > "u" && (i.app = "music"),
    typeof i.p > "u" && (i.p = "subscribe"),
    Object.keys(i)
      .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(i[e])}`)
      .join("&")
  );
}
var B = ((i) => (
    (i.DEFAULT_CID = "pldfltcid"),
    (i.TV_CID = "pltvcid"),
    (i.RESTRICTIONS_ENABLED = "itre"),
    (i.STOREFRONT_COUNTRY_CODE = "itua"),
    (i.USER_TOKEN = "media-user-token"),
    i
  ))(B || {}),
  te = ((i) => ((i[(i.MUSIC = 0)] = "MUSIC"), (i[(i.PODCAST = 1)] = "PODCAST"), (i[(i.TV = 2)] = "TV"), i))(te || {});
const zh = {
    [te.TV]: "com.apple.onboarding.tvappweb",
    [te.MUSIC]: "com.apple.onboarding.musicappweb",
    [te.PODCAST]: "com.apple.onboarding.podcastsweb",
  },
  zr = { [te.TV]: "pltvcid", [te.MUSIC]: "pldfltcid", [te.PODCAST]: "pldfltcid" },
  Qh = {
    "com.apple.onboarding.tvappweb": 1,
    "com.apple.onboarding.musicappweb": 1,
    "com.apple.onboarding.podcastsweb": 1,
  },
  oe = new kt("storekit"),
  Sa = "*",
  Qr = "2.0";
class Ia {
  destination;
  origin;
  methods;
  _registry = {};
  _sequence = 0;
  _source;
  constructor(e = {}) {
    ((this.destination = e.destination),
      (this.methods = e.methods || {}),
      (this.origin = e.origin || Sa),
      e.source && (this.source = e.source));
  }
  get source() {
    return this._source;
  }
  set source(e) {
    if (!e && this._source) {
      (this._source.removeEventListener("message", this.handle), (this._source = void 0));
      return;
    }
    (e.addEventListener("message", this.handle), (this._source = e));
  }
  apply(e, t) {
    if (!this.destination) throw new Error("No destination");
    const r = this._sequence++,
      s = new Promise((n, a) => {
        this._registry[r] = { resolve: n, reject: a };
      });
    return (this.send(this.destination, { jsonrpc: Qr, id: r, method: e, params: t }), s);
  }
  call(e, ...t) {
    return this.apply(e, t);
  }
  async handleRequest(e) {
    const t = { jsonrpc: Qr, id: e.id },
      r = this.methods[e.method];
    if (!r) return Object.assign(t, { error: { code: -32601, message: "Method not found" } });
    try {
      const s = await r.apply(void 0, nd(e.params));
      return Object.assign(t, { result: s });
    } catch (s) {
      return Object.assign(t, { error: { code: s.code || -32603, message: s.message } });
    }
  }
  handleResponse(e) {
    const t = this._registry[e.id];
    (delete this._registry[e.id], t && (e.error ? t.reject(Object.assign(Error(), e.error)) : t.resolve(e.result)));
  }
  send(e, t) {
    e.postMessage(t, e.window === e ? this.origin : void 0);
  }
  handle = (e) => {
    !e.data ||
      e.data.jsonrpc !== Qr ||
      (this.origin !== Sa && this.origin !== e.origin) ||
      (e.data.method && this.destination
        ? this.handleRequest(e.data).then((t) => {
            this.send(this.destination, t);
          })
        : (Ke(e.data, "result") || e.data.error) && this.handleResponse(e.data));
  };
}
var re = ((i) => (
  (i[(i.UNAVAILABLE = -1)] = "UNAVAILABLE"),
  (i[(i.NOT_DETERMINED = 0)] = "NOT_DETERMINED"),
  (i[(i.DENIED = 1)] = "DENIED"),
  (i[(i.RESTRICTED = 2)] = "RESTRICTED"),
  (i[(i.AUTHORIZED = 3)] = "AUTHORIZED"),
  i
))(re || {});
function As(i) {
  return typeof i == "string" && i.length > 0;
}
const Xh = `https://${Si("buy")}/commerce/account/authenticateMusicKitRequest`,
  Rs = "https://authorize.music.apple.com",
  Jh = `${Rs}/upsell`,
  Zh = /^https?:\/\/(.+\.)*(apple\.com|apps\.mzstatic\.com)(\/[\w\d]+)*$/;
var Cs = ((i) => ((i[(i.AUTHORIZE = 0)] = "AUTHORIZE"), (i[(i.SUBSCRIBE = 1)] = "SUBSCRIBE"), i))(Cs || {});
class ep {
  constructor(e, t = {}) {
    if (
      ((this.developerToken = e),
      (this.deeplinkParameters = (t && t.deeplinkParameters) || {}),
      (this.iconURL = t && t.iconURL),
      (this.authenticateMethod = (t && t.authenticateMethod) || "GET"),
      this.isServiceView && window.opener !== window)
    ) {
      const r = ln()?.getItem("ac"),
        s = r != null ? new URL(r).origin : void 0;
      s && (this.dispatch = new Ia({ destination: window.opener ?? void 0, origin: s, source: window }));
    }
  }
  authenticateMethod = "GET";
  deeplinkParameters;
  iconURL;
  target = "apple-music-service-view";
  dispatch;
  _window;
  _windowClosedInterval;
  get isServiceView() {
    return (
      /(authorize\.(.+\.)*apple\.com)/i.test(window.location.hostname) || (window && window.name === this.target) || !1
    );
  }
  focus() {
    this._window && window.focus && this._window.focus();
  }
  async load(e = { action: 0 }) {
    return e.action === 1 ? this._subscribeAction(e.parameters) : this._authorizeAction(e.parameters);
  }
  present(e = "", t) {
    const { height: r, left: s, top: n, width: a } = this._calculateClientDimensions(),
      o = { height: 650, menubar: "no", resizable: "no", scrollbars: "no", status: "no", toolbar: "no", width: 650 },
      c = { ...o, left: a / 2 - o.width / 2 + s, top: r / 2 - o.height / 2 + n, ...t },
      l = Object.keys(c)
        .map((h) => `${h}=${c[h]}`)
        .join(",");
    return (
      /trident|msie/i.test(navigator.userAgent)
        ? ((this._window = window.open(window.location.href, this.target, l) || void 0),
          (this._window.location.href = e))
        : (this._window = window.open(e, this.target, l) || void 0),
      /\bedge\b/i.test(navigator.userAgent) && (this._window.opener = self),
      this.focus(),
      this._window
    );
  }
  _startPollingForWindowClosed(e) {
    !this._window ||
      this._windowClosedInterval !== void 0 ||
      (this._windowClosedInterval = setInterval(() => {
        this._window?.closed && (this._stopPollingForWindowClosed(), e());
      }, 500));
  }
  _stopPollingForWindowClosed() {
    this._windowClosedInterval !== void 0 &&
      (clearInterval(this._windowClosedInterval), (this._windowClosedInterval = void 0));
  }
  async _authorizeAction(e = {}) {
    let t, r;
    const s = window.location?.href || "";
    return (
      this.authenticateMethod === "GET"
        ? (r = `${Rs}/woa?${rr({ ...this.deeplinkParameters, a: btoa(this._thirdPartyInfo()), referrer: s })}`)
        : ((t = this._buildFormElement(Xh)), document.body.appendChild(t)),
      new Promise((n, a) => {
        const o = this.present(r);
        (this._startPollingForWindowClosed(() => {
          a(0);
        }),
          (this.dispatch = new Ia({
            methods: {
              authorize: function (c, l, h) {
                As(c) ? n({ restricted: l && l === "1", userToken: c, cid: h }) : a(0);
              },
              close: function () {},
              decline: function () {
                a(1);
              },
              switchUserId: function () {
                a(0);
              },
              thirdPartyInfo: () => this._thirdPartyInfo(this.developerToken, { ...this.deeplinkParameters, ...e }),
              unavailable: function () {
                a(-1);
              },
            },
            origin: Rs,
            source: window,
            destination: o,
          })),
          t && t.submit());
      })
    );
  }
  _buildFormElement(e, t = this.target, r = this.developerToken) {
    const s = document.createElement("form");
    (s.setAttribute("method", "post"),
      s.setAttribute("action", e),
      s.setAttribute("target", t),
      (s.style.display = "none"));
    const n = document.createElement("input");
    (n.setAttribute("name", "jwtToken"), n.setAttribute("value", r), s.appendChild(n));
    const a = document.createElement("input");
    (a.setAttribute("name", "isWebPlayer"), a.setAttribute("value", "true"), s.appendChild(a));
    const o = document.createElement("input");
    return (o.setAttribute("name", "LogoURL"), o.setAttribute("value", ""), s.appendChild(o), s);
  }
  _calculateClientDimensions(e = window) {
    return {
      height: e.innerHeight
        ? e.innerHeight
        : document.documentElement.clientHeight
          ? document.documentElement.clientHeight
          : screen.height,
      left: e.screenLeft ? e.screenLeft : screen.availLeft || screen.left,
      top: e.screenTop ? e.screenTop : screen.availTop || screen.top,
      width: e.innerWidth
        ? e.innerWidth
        : document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : screen.width,
    };
  }
  async _subscribeAction(e = {}) {
    return (
      Object.assign(e, this.deeplinkParameters),
      new Promise((t, r) => {
        const s = `${Jh}?${rr(e)}`;
        (this.present(s),
          window.addEventListener("message", ({ data: n, origin: a, source: o }) => {
            const { closeWindow: c, launchClient: l } = typeof n == "string" ? JSON.parse(n) : n;
            (!a || Zh.test(a)) &&
              (l
                ? l.supported === 0
                  ? r("Unable to subscribe on this platform.")
                  : t(l)
                : r("Subscribe action error."));
          }));
      })
    );
  }
  _thirdPartyInfo(e = this.developerToken, t) {
    let r = this.iconURL;
    const s = window.location.host || document.referrer,
      n = [
        ...[].slice.call(document.querySelectorAll('link[rel="apple-music-app-icon"]')),
        ...[].slice.call(document.querySelectorAll('link[rel="apple-touch-icon-precomposed"]')),
        ...[].slice.call(document.querySelectorAll('link[rel="apple-touch-icon"]')),
      ];
    return (
      n && n[0] && n[0].href && (r = n.find((o) => (o.sizes ? o.sizes.value === "120x120" : !1))?.href ?? n[0].href),
      JSON.stringify({ thirdPartyIconURL: r, thirdPartyName: s, thirdPartyParameters: t, thirdPartyToken: e })
    );
  }
}
var yc = ((i) => ((i.ID = "us"), (i.LANGUAGE_TAG = "en-gb"), i))(yc || {});
async function tp(i, e = "https://api.music.apple.com/v1") {
  const t = new Headers({ Authorization: `Bearer ${i}` }),
    s = await (await fetch(`${e}/storefronts`, { headers: t })).json();
  return s.errors ? Promise.reject(s.errors) : s.data;
}
class Pa {
  constructor(e, t, r) {
    ((this.id = e), (this.attributes = t), (this.type = "storefronts"), (this.href = r || `/v1/${this.type}/${e}`));
  }
  href;
  type;
  static async inferFromLanguages(e, t = pc()) {
    const r = await tp(e),
      s = r.map((l) => l.id),
      n = t[0] || "en-US",
      [a, o] = n.toLowerCase().split(/-|_/),
      c = s.includes(o) ? o : "us";
    return r.find((l) => l.id === c);
  }
}
const mc = ["music.apple.com", "podcasts.apple.com", "tv.apple.com", "apps.apple.com"],
  gc = "mut-refresh",
  Fi = [gc, B.DEFAULT_CID, B.STOREFRONT_COUNTRY_CODE, B.TV_CID, B.USER_TOKEN],
  ip = new Map([
    ["signIn", "/auth/v2/web"],
    ["signOut", "/auth/v2/web/logout"],
    ["refresh", "/auth/v2/web/refresh"],
  ]);
function rp(i) {
  if (!i) return !1;
  for (const e of mc) if (e === i || i.endsWith(`.${e}`)) return !0;
  return !1;
}
async function sp(i) {
  await Promise.allSettled(i);
}
class np {
  developerToken;
  getUserToken;
  onRequestsComplete;
  allowMultiReflection = !1;
  previousUserToken;
  hostname;
  requestsComplete = Promise.resolve();
  constructor({
    hostname: e,
    developerToken: t,
    getUserToken: r,
    startingUserToken: s,
    onRequestsComplete: n,
    allowMultiReflection: a,
  }) {
    ((this.hostname = e),
      (this.developerToken = t),
      (this.getUserToken = r),
      (this.previousUserToken = s),
      (this.onRequestsComplete = n),
      (this.allowMultiReflection = a && rp(this.hostname)),
      (this.onUserTokenChange = this.onUserTokenChange.bind(this)),
      oe.debug("Reflector allowMultiReflection?", this.allowMultiReflection));
  }
  onUserTokenChange(e) {
    const t = this.getUserToken(),
      r = this.previousUserToken !== t;
    if (((this.previousUserToken = t), oe.debug("Reflector.onUserTokenChange hasChanged?", r), r))
      return t ? (e?.domainReflection === !1 ? void 0 : this.reflect()) : this.clear();
  }
  skipJsCookieWrite(e) {
    return Fi.includes(e);
  }
  refresh() {
    if (!this.allowMultiReflection) return;
    const e = nt(gc);
    if (nt(B.USER_TOKEN) && !e) return this.makeRequests("refresh");
  }
  reflect() {
    if (this.allowMultiReflection) return this.makeRequests("signIn");
    {
      const e = Fi.map((t) => nt(t));
      (this.clearAppleComCookies(),
        Fi.forEach((t, r) => {
          const s = e[r],
            n = nt(t);
          s &&
            !n &&
            (oe.debug("Reflector.reflect calling setCookie", t, s), cn(t, s, "/", 166, void 0, fc(this.hostname)));
        }));
    }
  }
  clear() {
    if (this.allowMultiReflection) return this.makeRequests("signOut");
    oe.debug("Reflector nothing to clear, no allowMultiReflection");
  }
  makeRequests(e) {
    const t = this.sendRequests(e),
      r = this.requestsComplete;
    return ((this.requestsComplete = sp([r, t])), t);
  }
  async sendRequests(e) {
    oe.debug("Reflector makeRequests()", e);
    try {
      const t = ip.get(e);
      for (const r of mc) {
        const s = `https://auth.${r}${t}`;
        oe.debug("Reflector.makeRequests for", s);
        try {
          await fetch(s, {
            headers: { Authorization: `Bearer ${this.developerToken}` },
            method: "POST",
            credentials: "include",
          });
        } catch (n) {
          oe.error("Reflector fetch failed for ", s, n);
        }
      }
      this.clearAppleComCookies();
    } catch (t) {
      oe.error("Reflector makeRequests failed", t);
    }
    (oe.debug("Reflector calling onRequestsComplete"), this.onRequestsComplete());
  }
  clearAppleComCookies() {
    (oe.debug("Reflector.clearAppleComCookies"), Fi.forEach((e) => fs(e, void 0, "apple.com")));
  }
}
var ap = Object.defineProperty,
  op = Object.getOwnPropertyDescriptor,
  cp = (i, e, t, r) => {
    for (var s = op(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && ap(e, t, s), s);
  },
  He = ((i) => (
    (i.authorizationStatusDidChange = "authorizationStatusDidChange"),
    (i.authorizationStatusWillChange = "authorizationStatusWillChange"),
    (i.eligibleForSubscribeView = "eligibleForSubscribeView"),
    (i.authReflectionDidComplete = "authReflectionDidComplete"),
    (i.needsGDPRDidChange = "needsGDPRDidChange"),
    (i.storefrontCountryCodeDidChange = "storefrontCountryCodeDidChange"),
    (i.storefrontIdentifierDidChange = "storefrontIdentifierDidChange"),
    (i.userTokenDidChange = "userTokenDidChange"),
    i
  ))(He || {});
B.DEFAULT_CID;
let Xi = !1;
Xi = !0;
const lp = `https://${Si("buy")}`,
  up = `https://${Si("play")}/WebObjects/MZPlay.woa/wa`;
class vc extends Tt {
  constructor(e, t) {
    (super([
      "authorizationStatusDidChange",
      "authorizationStatusWillChange",
      "eligibleForSubscribeView",
      "authReflectionDidComplete",
      "needsGDPRDidChange",
      "storefrontCountryCodeDidChange",
      "userTokenDidChange",
      "storefrontIdentifierDidChange",
    ]),
      (this.developerToken = e),
      oe.info("StoreKit initialized"),
      t &&
        (t.apiBase && (this.apiBase = t.apiBase),
        t.deeplink && (this.deeplinkParameters = t.deeplink),
        t.meParameters && (this.meParameters = t.meParameters),
        t.persist && (this.persist = t.persist),
        t.prefix && (this.prefix = t.prefix),
        t.realm !== void 0 && (this.realm = t.realm),
        t.disableLogoutURL !== void 0 && (this._disableLogoutURL = t.disableLogoutURL),
        (this.bundleId = zh[this.realm])),
      (this.fetch = t !== void 0 && typeof t.fetch == "function" ? t.fetch : globalThis.fetch.bind(globalThis)),
      (this.cidNamespace = zr[this.realm]),
      (this._developerToken = new Id(e)),
      (this._serviceSetupView = new ep(e, {
        authenticateMethod: t && t.authenticateMethod,
        iconURL: t && t.iconURL,
        deeplinkParameters: this.deeplinkParameters,
      })),
      (this.storagePrefix = `${this.prefix}.${this._developerToken.teamId}`.toLocaleLowerCase()),
      !ft() &&
        this.persist === "cookie" &&
        (oe.debug("Creating Reflector"),
        (this.reflector = new np({
          hostname: window.location.hostname,
          developerToken: this.developerToken,
          getUserToken: () => this.userToken,
          startingUserToken: nt(B.USER_TOKEN),
          onRequestsComplete: () => {
            (this.userToken !== nt(B.USER_TOKEN) &&
              (oe.debug("StoreKit.onRequestsComplete called, resetting"),
              this.updateUserTokenFromStorage(),
              (this._cids = {})),
              this.dispatchEvent("authReflectionDidComplete"));
          },
          allowMultiReflection: !t?.disableAuthBridge,
        })),
        this.addEventListener("userTokenDidChange", this.reflector.onUserTokenChange)),
      this.updateUserTokenFromStorage(),
      this.developerToken &&
        this.userTokenIsValid &&
        ((this._restrictedEnabled = this.restrictedEnabled),
        this.shouldDisplayPrivacyLink(this.bundleId).catch(() => {})),
      (this._storefrontCountryCode = this.storefrontCountryCode),
      (this.whenAuthCompleted = Promise.resolve()),
      ft() ||
        (this._processLocationHash(window.location.hash), this.persist === "cookie" && this.reflector?.refresh()));
  }
  apiBase = "https://api.music.apple.com/v1";
  bundleId;
  cidNamespace;
  deeplinkParameters;
  iconURL;
  iTunesBuyBase = lp;
  meParameters = {};
  persist = "localstorage";
  playBase = up;
  prefix = "music";
  realm = te.MUSIC;
  storage = Se();
  storagePrefix;
  whenAuthCompleted;
  fetch;
  _authorizationStatus = re.NOT_DETERMINED;
  _developerToken;
  _disableLogoutURL = !1;
  _dispatchedSubscribeView = !1;
  _me = null;
  _cids = {};
  _gdprVersion = -1;
  _needsGDPR = void 0;
  _isU13;
  _parentalControls;
  _privacyAcknowledgements;
  _restrictedEnabled;
  _restrictedEnabledOverridden = !1;
  _serviceSetupView;
  _pendingUpdateConfig;
  reflector;
  _storefrontCountryCode;
  _storefrontIdentifier;
  _dynamicUserToken = nt(B.USER_TOKEN);
  updateUserTokenFromStorage(e) {
    this.realm === te.TV && delete this._cids[this.cidNamespace];
    const t = this.reflector?.requestsComplete;
    this._setUserTokenFromStorage(e);
    const r = this.reflector?.requestsComplete;
    return r && r !== t ? r : Promise.resolve();
  }
  whenReflectionComplete() {
    return this.reflector?.requestsComplete ?? Promise.resolve();
  }
  _setUserTokenFromStorage(e) {
    const t = this._getStorageItem(B.USER_TOKEN);
    if (((this._pendingUpdateConfig = e), this.persist === "cookie" && t === this.userToken)) {
      const s = (ud(B.USER_TOKEN) || []).find((n) => n !== this.userToken);
      if (s) {
        ((this.userToken = s), (this._pendingUpdateConfig = void 0));
        return;
      }
    }
    ((this.userToken = t || void 0), (this._pendingUpdateConfig = void 0));
  }
  get authorizationStatus() {
    return this._authorizationStatus;
  }
  set authorizationStatus(e) {
    this._authorizationStatus !== e &&
      (this._getIsActiveSubscription.updateCache(void 0),
      this.dispatchEvent("authorizationStatusWillChange", {
        authorizationStatus: this._authorizationStatus,
        newAuthorizationStatus: e,
      }),
      (this._authorizationStatus = e),
      this.dispatchEvent("authorizationStatusDidChange", { authorizationStatus: e }));
  }
  get cid() {
    if (!this._cids[this.cidNamespace]) {
      const e = this._getStorageItem(this.cidNamespace);
      this._cids[this.cidNamespace] = e || void 0;
    }
    return this._cids[this.cidNamespace];
  }
  set cid(e) {
    (e ? this._setStorageItem(this.cidNamespace, e) : this._removeStorageItem(this.cidNamespace),
      (this._cids[this.cidNamespace] = e));
  }
  async eligibleForSubscribeView() {
    const e = await this.hasMusicSubscription();
    return (!this.hasAuthorized || (this.hasAuthorized && !e)) && !this._dispatchedSubscribeView;
  }
  get hasAuthorized() {
    return this.authorizationStatus > re.DENIED;
  }
  get logoutURL() {
    if (!this._disableLogoutURL)
      return Xi ? `${this.iTunesBuyBase}/account/web/logout` : `${this.playBase}/webPlayerLogout`;
  }
  get parentalControls() {
    return this._parentalControls;
  }
  set parentalControls(e) {
    ((this._parentalControls = e),
      e &&
        (this.realm === te.MUSIC || this.realm === te.PODCAST
          ? (this.restrictedEnabled = e.musicParentalControlsEnabled)
          : this.realm === te.TV && e.videoContentRestrictions && (this.authorizationStatus = re.RESTRICTED)));
  }
  get isU13() {
    return !!this._isU13;
  }
  set isU13(e) {
    this._isU13 = e;
  }
  get _pldfltcid() {
    return this._cids[B.DEFAULT_CID];
  }
  set _pldfltcid(e) {
    this._cids[B.DEFAULT_CID] = e;
  }
  get privacyAcknowledgements() {
    return this._privacyAcknowledgements;
  }
  set privacyAcknowledgements(e) {
    if (((this._privacyAcknowledgements = e), !e)) {
      ((this._gdprVersion = -1), (this._needsGDPR = void 0));
      return;
    }
    if (this.bundleId) {
      const t = this._needsGDPR ?? !1;
      ((this._gdprVersion = e[this.bundleId] || 0),
        (this._needsGDPR = this._gdprVersion < (Qh[this.bundleId] || 0)),
        t !== this._needsGDPR &&
          this.dispatchEvent("needsGDPRDidChange", { GDPRVersion: this._gdprVersion, needsGDPR: this._needsGDPR }));
    }
  }
  get restrictedEnabled() {
    if (this.userToken && typeof this._restrictedEnabled != "boolean") {
      const e = this._getStorageItem(B.RESTRICTIONS_ENABLED);
      if (e) this._restrictedEnabled = e !== "0";
      else if (this._storefrontCountryCode) {
        const t = ["br", "ch", "gt", "hu", "id", "in", "it", "kr", "la", "lt", "my", "ru", "sg", "tr"];
        this._restrictedEnabled = t.indexOf(this._storefrontCountryCode) !== -1 || void 0;
      }
    }
    return this._restrictedEnabled;
  }
  set restrictedEnabled(e) {
    this._restrictedEnabledOverridden ||
      (this.userToken && e !== void 0 && this._setStorageItem(B.RESTRICTIONS_ENABLED, e ? "1" : "0"),
      (this._restrictedEnabled = e),
      e && (this.authorizationStatus = re.RESTRICTED));
  }
  overrideRestrictEnabled(e) {
    ((this._restrictedEnabledOverridden = !1), (this.restrictedEnabled = e), (this._restrictedEnabledOverridden = !0));
  }
  get storefrontCountryCode() {
    if (!this._storefrontCountryCode) {
      const e = this._getStorageItem(B.STOREFRONT_COUNTRY_CODE);
      this._storefrontCountryCode = e?.toLowerCase() || yc.ID;
    }
    return this._storefrontCountryCode;
  }
  set storefrontCountryCode(e) {
    (e && this.userToken
      ? this._setStorageItem(B.STOREFRONT_COUNTRY_CODE, e)
      : this._removeStorageItem(B.STOREFRONT_COUNTRY_CODE),
      e !== this._storefrontCountryCode &&
        ((this._storefrontCountryCode = e),
        this.dispatchEvent("storefrontCountryCodeDidChange", { storefrontCountryCode: e })));
  }
  get storefrontIdentifier() {
    return this._storefrontIdentifier;
  }
  set storefrontIdentifier(e) {
    ((this._storefrontIdentifier = e),
      this.dispatchEvent("storefrontIdentifierDidChange", { storefrontIdentifier: e }));
  }
  runTokenValidations(e, t = !0) {
    e && As(e)
      ? (t && this._setStorageItem(B.USER_TOKEN, e),
        (this.authorizationStatus = this.restrictedEnabled ? re.RESTRICTED : re.AUTHORIZED))
      : (this._removeStorageItem(B.USER_TOKEN), (this.authorizationStatus = re.NOT_DETERMINED));
  }
  wrapDynamicUserTokenForChanges(e, t = Ni(e)) {
    if (typeof e != "function") return e;
    let r = t;
    return () => {
      const s = Ni(e);
      return (
        r !== s &&
          ((r = s), this.runTokenValidations(s, !1), this.dispatchEvent("userTokenDidChange", { userToken: s })),
        s || ""
      );
    };
  }
  get dynamicUserToken() {
    return this._dynamicUserToken;
  }
  set dynamicUserToken(e) {
    const t = Ni(e);
    ((this._dynamicUserToken = this.wrapDynamicUserTokenForChanges(e, t)),
      this.runTokenValidations(t, typeof e != "function"),
      this.dispatchEvent("userTokenDidChange", {
        userToken: t,
        domainReflection: this._pendingUpdateConfig?.domainReflection,
      }));
  }
  get userToken() {
    return Ni(this.dynamicUserToken);
  }
  set userToken(e) {
    this.dynamicUserToken = e;
  }
  get userTokenIsValid() {
    return As(this.userToken);
  }
  deeplinkURL(e = {}) {
    return (
      (e = { ...(this.deeplinkParameters || {}), ...e }), `https://finance-app.itunes.apple.com/deeplink?${rr(e)}`
    );
  }
  itunesDeeplinkURL(e = { p: "browse" }) {
    return ((e = { ...(this.deeplinkParameters || {}), ...e }), `https://itunes.apple.com/deeplink?${rr(e)}`);
  }
  async pldfltcid() {
    if (!this._cids[B.DEFAULT_CID])
      try {
        await this.infoRefresh();
      } catch {
        return;
      }
    return this._cids[B.DEFAULT_CID];
  }
  async renewUserToken() {
    if (!this.userToken) return this.requestUserToken();
    const e = new Headers({
        Authorization: `Bearer ${this.developerToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Apple-Music-User-Token": `${this.userToken}`,
      }),
      t = await this.fetch(`${this.playBase}/renewMusicToken`, { method: "POST", headers: e });
    if (t.status === 401) return (await this.revokeUserToken(), Promise.reject(new Error("Renew token")));
    const r = await t.json();
    return (r["music-token"] && (this.userToken = r["music-token"]), this.userToken);
  }
  async requestStorefrontCountryCode() {
    if (this.authorizationStatus <= re.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const e = new Headers({ Authorization: `Bearer ${this.developerToken}`, [ut]: this.userToken || "" }),
      t = await this.fetch(`${this.apiBase}/me/storefront`, { headers: e });
    if (t && !t.ok)
      return (
        (t.status === 401 || t.status === 403) && this._reset(), Promise.reject("Storefront Country Code error.")
      );
    const r = await t.json();
    if (r.errors) return Promise.reject(r.errors);
    const [s] = r.data;
    return !s || !s.id
      ? Promise.reject("Storefront Country Code error.")
      : ((this.storefrontCountryCode = s.id), this.storefrontCountryCode);
  }
  async requestStorefrontIdentifier() {
    if (!this.storefrontIdentifier) {
      const e = await Pa.inferFromLanguages(this.developerToken);
      this.storefrontIdentifier = e.id;
    }
    return this.storefrontIdentifier;
  }
  async requestUserToken() {
    if (this._serviceSetupView.isServiceView) return this.userToken || "";
    try {
      const e = await this._serviceSetupView.load({ action: Cs.AUTHORIZE });
      ((this.cid = e.cid), (this.userToken = e.userToken), (this.restrictedEnabled = e.restricted));
    } catch (e) {
      return (this._reset(), (this.authorizationStatus = e), Promise.reject(e));
    }
    return this.userToken;
  }
  async revokeUserToken() {
    try {
      await this._webPlayerLogout();
    } catch {}
    (this.dispatchEvent("authorizationStatusWillChange", {
      authorizationStatus: this.authorizationStatus,
      newAuthorizationStatus: re.NOT_DETERMINED,
    }),
      this._reset(),
      this.dispatchEvent("authorizationStatusDidChange", { authorizationStatus: this.authorizationStatus }),
      this.dispatchEvent("userTokenDidChange", { userToken: this.userToken }));
  }
  setCids(e) {
    ((this._cids = { ...this._cids, ...e }),
      Object.keys(this._cids).forEach((t) => {
        this._setStorageItem(t, this._cids[t]);
      }));
  }
  async shouldDisplayPrivacyLink(e) {
    return (
      e || (e = this.bundleId), this._needsGDPR !== void 0 ? this._needsGDPR : (await this.me(), this._needsGDPR)
    );
  }
  async hasMusicSubscription() {
    return this.hasAuthorized ? this._getIsActiveSubscription() : !1;
  }
  async _getIsActiveSubscription() {
    return this.realm === te.PODCAST ? !0 : !!(await this.me()).subscription?.active;
  }
  resetSubscribeViewEligibility() {
    this._dispatchedSubscribeView = !1;
  }
  async presentSubscribeViewForEligibleUsers(e = {}, t = !0) {
    const r = await this.eligibleForSubscribeView();
    if (!(this._serviceSetupView.isServiceView || !r)) {
      if (!t) {
        (this.dispatchEvent("eligibleForSubscribeView", e), (this._dispatchedSubscribeView = !0));
        return;
      }
      try {
        const s = await this._serviceSetupView.load({ action: Cs.SUBSCRIBE });
        return ((this._dispatchedSubscribeView = !0), s);
      } catch {
        return this.revokeUserToken();
      }
    }
  }
  async infoRefresh() {
    if (this.authorizationStatus <= re.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const e = new Headers({ Authorization: `Bearer ${this.developerToken}`, [ut]: this.userToken || "" });
    try {
      const r = await (
        await this.fetch(`${this.iTunesBuyBase}/account/web/infoRefresh`, { credentials: "include", headers: e })
      ).json();
      this.setCids(r);
    } catch {}
  }
  me() {
    return this.authorizationStatus <= re.DENIED
      ? Promise.reject(`Not authorized: ${this.authorizationStatus}`)
      : (this._me ||
          (this._me = new Promise(async (e, t) => {
            const r = new Headers({ Authorization: `Bearer ${this.developerToken}`, [ut]: this.userToken || "" }),
              s = _r(this.apiBase, "/me/account", { meta: "subscription", ...this.meParameters });
            let n;
            try {
              n = await this.fetch(s, { headers: r });
            } catch {
              return t(new p(p.Reason.NETWORK_ERROR, "Failed to fetch /me/account"));
            }
            if (n && !n.ok)
              return (
                this.realm !== te.TV && (n.status === 401 || n.status === 403) && this._reset(), t("Account error.")
              );
            let a = await n.json();
            if (a.errors) return t(a.errors);
            const { data: o, meta: c } = a;
            if (!c || !c.subscription) return t("Account error.");
            this.storefrontCountryCode = c.subscription.storefront;
            const l = { meta: c, subscription: c.subscription };
            o && o.length && (l.attributes = o[0].attributes);
            try {
              let h = await this.fetch(`${this.iTunesBuyBase}/account/web/info`, {
                credentials: "include",
                headers: r,
              });
              if (
                ((a = await h.json()),
                (this.isU13 = a.isU13),
                (this.parentalControls = a.parentalControlsData),
                (this.privacyAcknowledgements = a.privacyAcknowledgement),
                od(this.privacyAcknowledgements || {}))
              ) {
                try {
                  await this.infoRefresh();
                } catch {
                  e(l);
                }
                ((h = await this.fetch(`${this.iTunesBuyBase}/account/web/info`, {
                  credentials: "include",
                  headers: r,
                })),
                  (a = await h.json()),
                  (this.isU13 = a.isU13),
                  (this.parentalControls = a.parentalControlsData),
                  (this.privacyAcknowledgements = a.privacyAcknowledgement));
              }
              l.info = a;
            } catch (h) {
              console.warn("Failed to fetch privacyAcknowledgements", h);
            }
            return e(l);
          })
            .then(
              (e) => (this._getIsActiveSubscription.updateCache(e.subscription?.active || !1), (this._me = null), e),
            )
            .catch((e) => ((this._me = null), Promise.reject(e)))),
        this._me);
  }
  async musicSubscriptionOffers(e, t = pc()) {
    let r;
    this.hasAuthorized
      ? (r = (await this.me()).info.storeFrontISO3A)
      : (e || (e = (await Pa.inferFromLanguages(this.developerToken, t))?.id),
        (r = (e && Hh[e.toUpperCase()]) || "USA"));
    const s = jh(t[0]),
      n = Bh[r];
    if (!s || !n) return [];
    const a = new Headers({ "X-Apple-Store-Front": `${n}-${s},8` });
    this.userToken &&
      (a.set("Authorization", `Bearer ${this.developerToken}`), a.set("Music-User-Token", this.userToken));
    const o = await this.fetch(`${this.iTunesBuyBase}/commerce/web/subscription/offers/music`, { headers: a });
    return o.ok ? (await o.json()).offers : Promise.reject(o.status);
  }
  _getStorageItem(e) {
    if (e) {
      if (this.persist === "cookie") return nt(e);
      if (this.persist === "localstorage") return this.storage?.getItem(`${this.storagePrefix}.${e}`);
    }
  }
  _processLocationHash(e) {
    const t = /^\#([a-zA-Z0-9+\/]{200,}={0,2})$/;
    if (t.test(e)) {
      const r = e.replace(t, "$1");
      try {
        const { itre: s, musicUserToken: n, cid: a } = JSON.parse(atob(r));
        ((this.restrictedEnabled = s && s === "1"), (this.userToken = n), (this.cid = a));
      } catch {}
      history.replaceState(null, document.title, " ");
    }
  }
  _removeStorageItem(e) {
    if (this.persist === "cookie") this._removeCookieFromDomains(e);
    else if (this.persist === "localstorage") return this.storage?.removeItem(`${this.storagePrefix}.${e}`);
  }
  _removeCookieFromDomains(e, t = window) {
    (oe.debug("Calling removeCookie", e), fs(e));
    const { hostname: r } = t.location,
      s = r.split(".");
    if (s.length && (s.shift(), s.length > 2))
      for (let n = s.length; n > 2; n--) {
        const a = s.join(".");
        (s.shift(), oe.debug("Calling removeCookie", e, t, a), fs(e, t, a));
      }
  }
  _reset(e = re.NOT_DETERMINED) {
    ((this._authorizationStatus = e),
      (this._cids = {}),
      (this._dispatchedSubscribeView = !1),
      (this._restrictedEnabled = void 0),
      (this._storefrontCountryCode = void 0),
      this._getIsActiveSubscription.updateCache(void 0),
      Object.keys(zr).forEach((t) => {
        this._removeStorageItem(zr[t]);
      }),
      this._removeStorageItem(B.RESTRICTIONS_ENABLED),
      this._removeStorageItem(B.USER_TOKEN),
      this._removeStorageItem(B.STOREFRONT_COUNTRY_CODE),
      (this._dynamicUserToken = void 0),
      (this._me = null),
      (this.privacyAcknowledgements = void 0));
  }
  _setStorageItem(e, t) {
    if (this.persist === "cookie")
      return this.reflector?.skipJsCookieWrite(e)
        ? void 0
        : (oe.debug("Calling setCookie from _setStorageItem", e, t),
          cn(e, t, "/", 180, void 0, fc(window.location.hostname)));
    if (this.persist === "localstorage") return this.storage?.setItem(`${this.storagePrefix}.${e}`, t);
  }
  async _webPlayerLogout() {
    const e = this.logoutURL;
    if (!e) return;
    const t = new Headers({
      Authorization: `Bearer ${this.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      [`X-Apple-${ut}`]: `${this.userToken}`,
    });
    Xi && (t.delete(`X-Apple-${ut}`), t.append(ut, this.userToken || ""));
    const r = await this.fetch(e, { method: "POST", headers: t, credentials: Xi ? "include" : "same-origin" });
    return r && !r.ok ? Promise.reject(r.status) : r.json();
  }
}
cp([$h(15 * 60)], vc.prototype, "_getIsActiveSubscription");
var I = ((i) => (
    (i[(i.none = 0)] = "none"),
    (i[(i.loading = 1)] = "loading"),
    (i[(i.playing = 2)] = "playing"),
    (i[(i.paused = 3)] = "paused"),
    (i[(i.stopped = 4)] = "stopped"),
    (i[(i.ended = 5)] = "ended"),
    (i[(i.seeking = 6)] = "seeking"),
    (i[(i.waiting = 8)] = "waiting"),
    (i[(i.stalled = 9)] = "stalled"),
    (i[(i.completed = 10)] = "completed"),
    i
  ))(I || {}),
  xe = ((i) => ((i[(i.pictureinpicture = 0)] = "pictureinpicture"), (i[(i.inline = 1)] = "inline"), i))(xe || {});
function mn() {
  let i, e;
  return {
    promise: new Promise(function (n, a) {
      ((i = n), (e = a));
    }),
    resolve: function (n) {
      i?.(n);
    },
    reject: function (n) {
      e?.(n);
    },
  };
}
const bc = "explicit",
  _c = [
    "contributors",
    "modalities",
    "musicMovie",
    "musicVideo",
    "podcast-episodes",
    "radioStation",
    "song",
    "uploaded-audios",
    "uploadedAudio",
    "uploaded-videos",
    "uploadedVideo",
    "workouts",
    "workout-programs",
  ],
  dp = "mediaItemStateDidChange",
  hp = "mediaItemStateWillChange",
  Os = { mediaItemStateDidChange: dp, mediaItemStateWillChange: hp },
  Tc = new kt("media-item");
function sr(i) {
  let e = i.id;
  const t = i.attributes ?? {};
  let r = "";
  const s = t.name || t.title;
  return (
    $(s) || (r += s),
    $(t.albumName) || (r += " - " + t.albumName),
    $(t.artistName) || (r += " - " + t.artistName),
    r !== "" && (e += ` (${r})`),
    e
  );
}
var ce = ((i) => (
    (i[(i.none = 0)] = "none"),
    (i[(i.preview = 1)] = "preview"),
    (i[(i.unencryptedFull = 2)] = "unencryptedFull"),
    (i[(i.encryptedFull = 3)] = "encryptedFull"),
    i
  ))(ce || {}),
  x = ((i) => (
    (i[(i.none = 0)] = "none"),
    (i[(i.loading = 1)] = "loading"),
    (i[(i.ready = 2)] = "ready"),
    (i[(i.playing = 3)] = "playing"),
    (i[(i.ended = 4)] = "ended"),
    (i[(i.unavailable = 5)] = "unavailable"),
    (i[(i.restricted = 6)] = "restricted"),
    (i[(i.error = 7)] = "error"),
    (i[(i.unsupported = 8)] = "unsupported"),
    i
  ))(x || {});
const {
    none: Ec,
    loading: wa,
    ready: Aa,
    playing: Ra,
    ended: Xr,
    unavailable: Jr,
    restricted: Ki,
    error: Zt,
    unsupported: Bi,
  } = x,
  kc = {
    [Ec]: { allowed: [wa], unknown: [Xr, Jr, Ki, Zt, Bi] },
    [wa]: { allowed: [Aa, Ki, Zt, Bi], unknown: [] },
    [Aa]: { allowed: [Ra], unknown: [Zt] },
    [Ra]: { allowed: [Xr, Zt], unknown: [Jr, Ki, Bi] },
    [Xr]: { allowed: [], unknown: [] },
    [Jr]: { allowed: [], unknown: [] },
    [Ki]: { allowed: [], unknown: [] },
    [Zt]: { allowed: [], unknown: [] },
    [Bi]: { allowed: [], unknown: [] },
  },
  Ca = (i) => x[i],
  pp = (i, e) => kc[i].allowed.includes(e),
  fp = (i, e) => kc[i].unknown.includes(e),
  yp = (i = Ec) => {
    const e = {
      current: i,
      set: function (t) {
        const { current: r } = e;
        if (!pp(r, t)) {
          const s = fp(r, t);
          Tc.debug(
            `MediaItem.state was changed from ${Ca(r)} to ${Ca(t)}`,
            s ? "but it is unknown whether it should be allowed or not." : "and it should not be happening",
          );
        }
        e.current = t;
      },
    };
    return e;
  },
  { mediaItemStateDidChange: Oa, mediaItemStateWillChange: Da } = Os;
class fi extends Tt {
  id;
  type;
  contentType;
  playables;
  channels;
  assetURL;
  hlsMetadata = {};
  flavor;
  currentKeyPlay;
  keyPlayShelf;
  keyServerQueryParameters;
  podpafMetrics;
  attributes = {};
  playbackType = ce.none;
  href;
  relationships;
  _container;
  _context;
  _releaseDate;
  _state = yp();
  _stateDidChange;
  _stateWillChange;
  assets = [];
  keyURLs;
  constructor(e = {}) {
    (super([Oa, Da]), Tc.debug("media-item: creating Media Item with options:", e));
    const t = "song";
    (e.id && e.attributes
      ? (Object.assign(this, e), (this.type = this.playParams?.kind ? this.playParams.kind : this.type || t))
      : ((this.id = e.id || ki()),
        (this.type = e.type || t),
        (this.attributes = { playParams: { id: this.id, kind: this.type } })),
      (this.contentType = e.contentType),
      (this._context = e.context || {}),
      e.container
        ? (this._container = e.container)
        : e.containerId && e.containerType && (this._container = { id: e.containerId, type: e.containerType }));
  }
  get ageGatePolicy() {
    return this.defaultPlayable?.ageGatePolicy;
  }
  get albumInfo() {
    const { albumName: e, artistName: t } = this,
      r = [];
    return (t && r.push(t), e && r.push(e), r.join(" - "));
  }
  get albumName() {
    return this.attributes.albumName;
  }
  get artistName() {
    return this.attributes.genreNames &&
      this.attributes.genreNames.indexOf("Classical") > -1 &&
      this.attributes.composerName
      ? this.attributes.composerName
      : this.attributes.artistName;
  }
  get artwork() {
    return this.attributes.artwork ?? this.attributes.images?.coverArt16X9;
  }
  get artworkURL() {
    if (this.artwork && this.artwork.url) return this.artwork.url;
  }
  get canPlay() {
    return this.isPlayable && this.isReady;
  }
  get container() {
    return this._container;
  }
  set container(e) {
    this._container = e;
  }
  get contentRating() {
    return this.attributes.contentRating;
  }
  get context() {
    return this._context;
  }
  set context(e) {
    this._context = e;
  }
  get defaultPlayable() {
    return this.playables?.[0];
  }
  get discNumber() {
    return this.attributes.discNumber;
  }
  get hasContainerArtwork() {
    return (
      this.container &&
      this.container.attributes &&
      this.container.attributes.artwork &&
      this.container.attributes.artwork.url
    );
  }
  get hasPlaylistContainer() {
    return this.container && this.container.type === "playlists" && this.container.attributes;
  }
  get supportsLinearScrubbing() {
    return this.isLinearStream && this.defaultPlayable?.assets?.streamCapability?.supportsLinearScrubbing === !0;
  }
  get isAssetScrubbingDisabled() {
    return this.isLinearStream ? !this.supportsLinearScrubbing : !1;
  }
  get isLinearStream() {
    return zu(this);
  }
  get isAlgoStation() {
    return Wu(this);
  }
  get isRadioStation() {
    return Ei(this);
  }
  get isRadioEpisode() {
    return nn(this);
  }
  get isLiveRadioStation() {
    return Qi(this);
  }
  get isLiveAudioStation() {
    return Qi(this, "audio");
  }
  get isLiveVideoStation() {
    return Qi(this, "video");
  }
  get isAOD() {
    return Gu(this);
  }
  get isSong() {
    return tr(this);
  }
  get isPodcastEpisode() {
    return br(this);
  }
  get info() {
    return `${this.title} - ${this.albumInfo}`;
  }
  get isCloudItem() {
    return this.isLibraryItem;
  }
  get isLibrary() {
    return this.playParams?.isLibrary === !0 || hi(this.playParams?.id) || hi(this.id);
  }
  get isLibraryItem() {
    return this.isLibrary;
  }
  get isCloudUpload() {
    return this.isLibraryItem && this.playParams.reporting === !1 && this.playParams.catalogId === void 0;
  }
  get isExplicitItem() {
    return this.contentRating === bc;
  }
  get isLoading() {
    return this.state === x.loading;
  }
  get isPlayableMediaType() {
    return this.isUTS || _c.indexOf(this.type) !== -1;
  }
  get isPlayable() {
    return this.isUTS
      ? !0
      : this.isPlayableMediaType
        ? this.isLiveRadioStation || this.isRadioEpisode || this.hasOffersHlsUrl
          ? !0
          : this.needsPlayParams
            ? !!this.playParams
            : !!this.rawAssetUrl || !!this.attributes.previews?.length
        : !1;
  }
  get isPlaying() {
    return this.state === x.playing;
  }
  get isPreparedToPlay() {
    const e = Ot(this.catalogId) && !$(this.catalogId),
      t = Ot(this.assetURL) && !$(this.assetURL),
      r = !!(
        this.keyURLs &&
        !$(this.keyURLs["hls-key-cert-url"]) &&
        !$(this.keyURLs["hls-key-server-url"]) &&
        !$(this.keyURLs["widevine-cert-url"])
      );
    return this.type === "song"
      ? e && t && r
      : this.isUTS
        ? (t && r) || this.playRawAssetURL
        : t || this.playRawAssetURL;
  }
  get isrc() {
    return this.attributes.isrc;
  }
  get isReady() {
    return this.state === x.ready;
  }
  get isRestricted() {
    return this.state === x.restricted;
  }
  get isUTS() {
    return !!this.defaultPlayable;
  }
  get isUnavailable() {
    return this.state === x.unavailable;
  }
  get needsPlayParams() {
    return ["musicMovie", "musicVideo", "song"].includes(this.type);
  }
  get normalizedType() {
    return Qu(this.type);
  }
  get offers() {
    return this.attributes.offers;
  }
  get offersHlsUrl() {
    const { offers: e } = this;
    return e?.find((r) => !!r.hlsUrl?.length)?.hlsUrl;
  }
  get hasOffersHlsUrl() {
    return Ot(this.offersHlsUrl) && !$(this.offersHlsUrl);
  }
  get rawAssetUrl() {
    return this.attributes.assetUrl;
  }
  get playbackDuration() {
    return this.attributes.durationInMillis || this.attributes.durationInMilliseconds;
  }
  get playEvent() {
    return this.defaultPlayable?.playEvent;
  }
  get playlistArtworkURL() {
    return this.hasPlaylistContainer && this.hasContainerArtwork
      ? this.container?.attributes?.artwork?.url
      : this.artworkURL;
  }
  get playlistName() {
    return this.hasPlaylistContainer ? this.container?.attributes?.name : this.albumName;
  }
  get playParams() {
    return this.attributes.playParams;
  }
  get isPurchasedSong() {
    return !!this.playParams?.purchasedId && this.isSong;
  }
  get playRawAssetURL() {
    return (this.isCloudUpload || !!this.rawAssetUrl) && !this.isPurchasedSong;
  }
  get previewURL() {
    return (
      this.attributes?.previews?.[0]?.url ||
      this.attributes?.previews?.[0]?.hlsUrl ||
      this.attributes?.trailers?.[0]?.assets?.hlsUrl ||
      this.attributes?.movieClips?.[0]?.hlsUrl ||
      this.attributes?.video?.hlsUrl
    );
  }
  get rating() {
    return this.attributes.rating;
  }
  get releaseDate() {
    if (this._releaseDate) return this._releaseDate;
    if (this.attributes && (this.attributes.releaseDate || this.attributes.releaseDateTime)) {
      const e = this.attributes.releaseDate || this.attributes.releaseDateTime;
      return ((this._releaseDate = /^\d{4}-\d{1,2}-\d{1,2}/.test(e) ? new Date(e) : void 0), this._releaseDate);
    }
  }
  set releaseDate(e) {
    typeof e == "string"
      ? (this._releaseDate = /^\d{4}-\d{1,2}-\d{1,2}/.test(e) ? new Date(e) : void 0)
      : typeof e == "number"
        ? (this._releaseDate = new Date(e))
        : (this._releaseDate = e);
  }
  get catalogId() {
    return this.playParams?.isLibrary === !0 ? this.playParams?.catalogId : this.playParams?.id;
  }
  get state() {
    return this._state.current;
  }
  set state(e) {
    const t = { oldState: this._state.current, state: e };
    (this._stateWillChange && this._stateWillChange(this),
      this.dispatchEvent(Da, t),
      this._state.set(e),
      this._stateDidChange && this._stateDidChange(this),
      this.dispatchEvent(Oa, t));
  }
  get title() {
    return this.attributes.name || this.attributes.title;
  }
  get trackNumber() {
    return this.attributes.trackNumber;
  }
  beginMonitoringStateDidChange(e) {
    this._stateDidChange = e;
  }
  beginMonitoringStateWillChange(e) {
    this._stateWillChange = e;
  }
  endMonitoringStateDidChange() {
    this._stateDidChange = void 0;
  }
  endMonitoringStateWillChange() {
    this._stateWillChange = void 0;
  }
  isEqual(e) {
    return this.id === e.id && this.type === e.type && this.attributes === e.attributes;
  }
  resetState() {
    (this.endMonitoringStateWillChange(), this.endMonitoringStateDidChange(), (this.state = x.none));
  }
  restrict() {
    this.isExplicitItem && ((this.state = x.restricted), this._removePlayableData());
  }
  notSupported() {
    ((this.state = x.unsupported), this._removePlayableData());
  }
  updateFromLoadError(e) {
    switch (e.reason) {
      case p.Reason.CONTENT_RESTRICTED:
        this.state = x.restricted;
        break;
      case p.Reason.CONTENT_UNAVAILABLE:
        this.state = x.unavailable;
        break;
      default:
        this.state = x.error;
    }
  }
  _removePlayableData() {
    (delete this.attributes?.playParams, delete this.attributes?.previews, delete this.attributes?.trailers);
  }
  toString() {
    const { name: e, title: t, artistName: r } = this.attributes ?? {};
    return `<MediaItem id="${this.id}" title="${e ?? t ?? "-"}" artist="${r ?? "-"}" />`;
  }
}
const T = () => (i, e, t) => {
    if (t === void 0 || typeof t.value != "function")
      throw new TypeError(`Only methods can be decorated with @Bind, but ${e} is not a method.`);
    return {
      configurable: !0,
      get: function () {
        const r = t.value.bind(this);
        return (Object.defineProperty(this, e, { value: r, configurable: !0, writable: !0 }), r);
      },
    };
  },
  u = new kt("player"),
  yi = "mk-player-tsid",
  Sc = 'audio/mp4;codecs="mp4a.40.2"',
  mp = 'video/mp4;codecs="avc1.42E01E"',
  Ds = "mk-audio-track",
  Ms = "mk-text-track",
  Ic = "mk-video-track",
  it = "Off",
  Vi = "disabled",
  Le = "showing",
  f = {
    audioTrackAdded: "audioTrackAdded",
    audioTrackChanged: "audioTrackChanged",
    audioTrackRemoved: "audioTrackRemoved",
    bufferedProgressDidChange: "bufferedProgressDidChange",
    drmUnsupported: "drmUnsupported",
    forcedTextTrackChanged: "forcedTextTrackChanged",
    mediaCanPlay: "mediaCanPlay",
    mediaElementCreated: "mediaElementCreated",
    mediaPlaybackError: "mediaPlaybackError",
    nowPlayingItemDidChange: "nowPlayingItemDidChange",
    nowPlayingItemWillChange: "nowPlayingItemWillChange",
    metadataDidChange: "metadataDidChange",
    hlsDaterangeUpdated: "player.hls.daterangeUpdated",
    playbackBitrateDidChange: "playbackBitrateDidChange",
    playbackDurationDidChange: "playbackDurationDidChange",
    playbackProgressDidChange: "playbackProgressDidChange",
    playbackRateDidChange: "playbackRateDidChange",
    playbackStateDidChange: "playbackStateDidChange",
    playbackStateWillChange: "playbackStateWillChange",
    playbackTargetAvailableDidChange: "playbackTargetAvailableDidChange",
    playbackTargetIsWirelessDidChange: "playbackTargetIsWirelessDidChange",
    playbackTimeDidChange: "playbackTimeDidChange",
    playbackVolumeDidChange: "playbackVolumeDidChange",
    playerTypeDidChange: "playerTypeDidChange",
    presentationModeDidChange: "presentationModeDidChange",
    primaryPlayerDidChange: "primaryPlayerDidChange",
    textTrackAdded: "textTrackAdded",
    textTrackChanged: "textTrackChanged",
    textTrackRemoved: "textTrackRemoved",
    timedMetadataDidChange: "timedMetadataDidChange",
    videoTrackAdded: "videoTrackAdded",
    videoTrackChanged: "videoTrackChanged",
    videoTrackRemoved: "videoTrackRemoved",
  },
  gp = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
  vp = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"],
  bp = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
  nr = () => Promise.resolve(),
  _p = (i) => {
    if (typeof i > "u") return nr;
    const e = gp.find((t) => typeof i.prototype[t] == "function");
    return typeof e != "string" ? nr : (t = self.document) => t?.[e]?.();
  },
  Tp = _p(Document),
  Ep = (i) => {
    if (typeof i > "u") return () => !1;
    const e = vp.find((t) => t in i.prototype);
    return typeof e != "string" ? () => !1 : (t = self.document) => !!t[e];
  },
  Pc = Ep(Document),
  kp = (i) => {
    if (typeof i > "u") return nr;
    const e = bp.find((t) => typeof i.prototype[t] == "function");
    return typeof e != "string" ? nr : (t) => t?.[e]();
  },
  Sp = kp(HTMLElement);
class wc {
  constructor(e) {
    this.player = e;
  }
  async exit() {
    if (this.isInFullscreen()) return this.stopDispatchingEvents(() => this.exitFullscreen());
  }
  async request(e) {
    if (e !== void 0) return this.stopDispatchingEvents(() => this.requestFullscreenForElement(e));
  }
  async stopDispatchingEvents(e) {
    return this.player.windowHandlers.stopListeningToVisibilityChanges(e);
  }
  exitFullscreen() {
    return Tp();
  }
  isInFullscreen() {
    return Pc();
  }
  requestFullscreenForElement(e) {
    return Sp(e);
  }
}
class Ip {
  ended = !1;
  start() {
    u.warn("seeker.start is not supported in this playback method");
  }
  end() {
    u.warn("seeker.end is not supported in this playback method");
  }
  seekToTime(e) {
    return (u.warn("seekToTime is not supported in this playback method"), Promise.resolve());
  }
}
class gn {
  _ended = !1;
  _lastSeekedTime = -1;
  _player;
  _startTime = -1;
  _currentItem;
  constructor(e) {
    (u.debug("seeker: new"), (this._player = e));
  }
  get ended() {
    return this._ended;
  }
  get isEngagedInPlayback() {
    return !this._player.isStopped && !this._player.isPaused;
  }
  get stillPlayingSameItem() {
    return this._currentItem === this._player.nowPlayingItem;
  }
  end() {
    if ((u.debug("seeker: end"), this._startTime === -1)) {
      u.warn("seeker: Cannot end a seeker before starting it.");
      return;
    }
    if (this._ended) {
      u.warn("seeker: Cannot end the same seeker twice.");
      return;
    }
    (this.dispatchStartEvent(), this.dispatchEndEvent());
  }
  async seekToTime(e) {
    if ((u.debug("seeker: seekToTime", e), this.ended)) {
      u.warn("seeker: Cannot seek once the seeker has ended");
      return;
    }
    return (
      this.stillPlayingSameItem || ((this._currentItem = this._player.nowPlayingItem), (this._startTime = 0)),
      (this._lastSeekedTime = e),
      this._player.seekToTime(e)
    );
  }
  start() {
    if ((u.debug("seeker: start"), this._startTime !== -1)) {
      u.warn("seeker: Cannot start same seeker twice");
      return;
    }
    ((this._currentItem = this._player.nowPlayingItem),
      (this._startTime = this._player.currentPlaybackTime),
      (this._lastSeekedTime = this._startTime));
  }
  dispatch(e, t) {
    if (!this.isEngagedInPlayback) {
      u.debug("seeker: do not dispatch because isEngagedInPlayback", this.isEngagedInPlayback);
      return;
    }
    (u.debug("seeker: dispatch", e), this._player.dispatch(e, t));
  }
  dispatchStartEvent() {
    (this.stillPlayingSameItem || ((this._startTime = 0), (this._lastSeekedTime = 0)),
      this.dispatch(S.playbackScrub, { item: this._currentItem, position: this._startTime }));
  }
  dispatchEndEvent() {
    ((this._ended = !0),
      this.dispatch(S.playbackScrub, {
        item: this._currentItem,
        position: this._lastSeekedTime,
        endReasonType: P.SCRUB_END,
      }));
  }
}
var Pp = Object.defineProperty,
  wp = Object.getOwnPropertyDescriptor,
  vn = (i, e, t, r) => {
    for (var s = wp(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Pp(e, t, s), s);
  };
const {
  visibilityChangeEvent: ar,
  visibilityState: Ls,
  unloadEventName: Ma,
} = (() => {
  let i = "visibilitychange",
    e = "visibilityState";
  typeof document.mozHidden < "u"
    ? ((i = "mozvisibilitychange"), (e = "mozVisibilityState"))
    : typeof document.msHidden < "u"
      ? ((i = "msvisibilitychange"), (e = "msVisibilityState"))
      : document.webkitHidden && ((i = "webkitvisibilitychange"), (e = "webkitVisibilityState"));
  const t = "onpagehide" in window ? "pagehide" : "unload";
  return { visibilityChangeEvent: i, visibilityState: e, unloadEventName: t };
})();
class $t {
  player;
  runtimeEnvironment;
  dispatchVisibilityChanges = !0;
  constructor(e, t) {
    ((this.player = e), (this.runtimeEnvironment = t));
  }
  activate(e = self, t = self.document) {
    (t.addEventListener(ar, this.visibilityChanged),
      e.addEventListener("storage", this.storage, !1),
      e.addEventListener(Ma, this.windowUnloaded));
  }
  deactivate() {
    (document.removeEventListener(ar, this.visibilityChanged),
      window.removeEventListener("storage", this.storage),
      window.addEventListener(Ma, this.windowUnloaded));
  }
  async stopListeningToVisibilityChanges(e) {
    this.dispatchVisibilityChanges = !1;
    const t = await e();
    return ((this.dispatchVisibilityChanges = !0), t);
  }
  dispatch(e, t = {}) {
    this.player.dispatch(e, t);
  }
  storage({ key: e, newValue: t }) {
    e === yi && this.player.tsidChanged(t);
  }
  visibilityChanged(e) {
    const t = e.target[Ls];
    (u.info("dc visibilityState", t, e, Pc()),
      this.runtimeEnvironment.os.isIOS &&
        this.dispatchVisibilityChanges &&
        (t === "hidden"
          ? this.dispatch(S.playerExit, { item: this.player.nowPlayingItem, position: this.player.currentPlaybackTime })
          : t === "visible" && this.dispatch(S.playerActivate)));
  }
  windowUnloaded() {
    this.player.isPlaying &&
      this.dispatch(S.playerExit, { item: this.player.nowPlayingItem, position: this.player.currentPlaybackTime });
  }
}
vn([T()], $t.prototype, "storage");
vn([T()], $t.prototype, "visibilityChanged");
vn([T()], $t.prototype, "windowUnloaded");
var Ap = Object.defineProperty,
  Rp = Object.getOwnPropertyDescriptor,
  Cp = (i, e, t, r) => {
    for (var s = Rp(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Ap(e, t, s), s);
  };
const La = [
    "canplay",
    "durationchange",
    "ended",
    "error",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "timeupdate",
    "volumechange",
    "waiting",
  ],
  Op = ["NotAllowedError", "NotSupportedError"];
class Sr {
  id = ki();
  privateEnabled = !1;
  siriInitiated = !1;
  windowHandlers;
  _dispatcher;
  _buffer;
  services;
  _context;
  _currentBufferedProgress = 0;
  initialPlayingDate;
  initialPlaybackTime;
  _nowPlayingItem;
  _paused = !1;
  _playbackDidStart = !1;
  _playbackState = I.none;
  _stopped = !1;
  _bitrateCalculator;
  _currentPlaybackProgress = 0;
  _isPrimaryPlayer = !0;
  _playbackTargetAvailable = !1;
  _playbackTargetIsWireless = !1;
  _seeker;
  _serial = Date.now().toString();
  fullscreen;
  _isDestroyed = !1;
  _playbackErrorSubscription;
  _isInitialized = !1;
  _deferredPlay;
  constructor(e) {
    ((this.services = e.services),
      (this._dispatcher = e.services.dispatcher),
      (this._context = e.context || {}),
      (this.privateEnabled = e.privateEnabled || !1),
      (this.siriInitiated = e.siriInitiated || !1),
      (this._bitrateCalculator = e.services.bitrateCalculator),
      (this.windowHandlers = new $t(this, e.services.runtime)),
      (this.fullscreen = new wc(this)),
      Se()?.setItem(yi, this._serial),
      (this._playbackErrorSubscription = this._dispatcher.subscribe(f.mediaPlaybackError, this.onPlaybackError)));
  }
  get bitrate() {
    return this._bitrateCalculator.bitrate;
  }
  get currentBufferedProgress() {
    return this._currentBufferedProgress;
  }
  get _currentDuration() {
    return this._targetElement.duration;
  }
  get _currentTime() {
    const e = this._targetElement.currentTime,
      r = this._buffer?.currentTimestampOffset ?? 0;
    return e - r;
  }
  get currentPlaybackDuration() {
    const e = this.nowPlayingItem;
    if (!e) return 0;
    const t = e.type === "podcast-episodes",
      r = e.playbackType === ce.encryptedFull || e.playbackType === ce.unencryptedFull,
      s = e.playbackDuration;
    return r && s && !t ? this.calculateTime(s / 1e3) : this.calculateTime(this._currentDuration);
  }
  get currentPlaybackTime() {
    return this.calculateTime(this._currentTime);
  }
  calculateTime(e = 0) {
    return Math.round(e);
  }
  get currentPlaybackTimeRemaining() {
    return this.currentPlaybackDuration - this.currentPlaybackTime;
  }
  get currentPlaybackProgress() {
    return this._currentPlaybackProgress || 0;
  }
  get hasMediaElement() {
    return this._targetElement instanceof HTMLElement && this._targetElement.parentNode !== null;
  }
  get isPaused() {
    return this._paused;
  }
  get isStopped() {
    return this._stopped;
  }
  get isPlaying() {
    return this.playbackState === I.playing;
  }
  get isPrimaryPlayer() {
    return this._isPrimaryPlayer;
  }
  set isPrimaryPlayer(e) {
    e !== this._isPrimaryPlayer &&
      ((this._isPrimaryPlayer = e),
      this._isPrimaryPlayer
        ? Se()?.setItem(yi, this._serial)
        : (this._dispatcher.publish(f.primaryPlayerDidChange, { target: this }), this.pause({ userInitiated: !1 })));
  }
  get isReady() {
    return this._targetElement.readyState !== 0;
  }
  get nowPlayingItem() {
    return this._nowPlayingItem;
  }
  set nowPlayingItem(e) {
    const t = this._dispatcher;
    if (typeof e > "u") {
      if (this._nowPlayingItem === void 0) return;
      (t.publish(f.nowPlayingItemWillChange, { item: e }),
        (this._nowPlayingItem = e),
        t.publish(f.nowPlayingItemDidChange, { item: e }));
      return;
    }
    const r = this._nowPlayingItem,
      s = this._buffer;
    r?.isEqual(e) ||
      (t.publish(f.nowPlayingItemWillChange, { item: e }),
      this.isPlaying && s?.currentItem !== e && this._pauseMedia(),
      r &&
        (u.debug("setting state to ended on ", r.title),
        (r.state = x.ended),
        r.endMonitoringStateDidChange(),
        r.endMonitoringStateWillChange()),
      (this._nowPlayingItem = e),
      u.debug("setting state to playing on ", e.title),
      (e.state = x.playing),
      e && e.info && this._setTargetElementTitle(e.info),
      t.publish(f.nowPlayingItemDidChange, { item: e }),
      t.publish(f.playbackDurationDidChange, {
        currentTarget: this._targetElement,
        duration: this.currentPlaybackDuration,
        target: this._targetElement,
        type: "durationchange",
      }));
  }
  get playbackRate() {
    return this._targetElement.playbackRate;
  }
  set playbackRate(e) {
    this._targetElement.playbackRate = e;
  }
  get defaultPlaybackRate() {
    return this._targetElement.defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    this._targetElement.defaultPlaybackRate = e;
  }
  get playbackState() {
    return this._playbackState;
  }
  setPlaybackState(e, t) {
    const r = this._playbackState;
    if (e === r) return;
    const s = { oldState: r, state: e, nowPlayingItem: t };
    (u.debug("BasePlayer.playbackState is changing", s),
      this._dispatcher.publish(f.playbackStateWillChange, s),
      (this._playbackState = e),
      this._dispatcher.publish(f.playbackStateDidChange, s));
  }
  get playbackTargetAvailable() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetAvailable;
  }
  set playbackTargetAvailable(e) {
    e !== this._playbackTargetAvailable &&
      ((this._playbackTargetAvailable = e),
      this._dispatcher.publish(f.playbackTargetAvailableDidChange, { available: e }));
  }
  get playbackTargetIsWireless() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetIsWireless;
  }
  set playbackTargetIsWireless(e) {
    e !== this._playbackTargetIsWireless &&
      ((this._playbackTargetIsWireless = e),
      this._dispatcher.publish(f.playbackTargetIsWirelessDidChange, { playing: e }));
  }
  get volume() {
    return this._targetElement.volume;
  }
  set volume(e) {
    this._targetElement.volume = e;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  get isInitialized() {
    return this._isInitialized;
  }
  clearNextManifest() {
    this._buffer?.clearNextManifest();
  }
  async initialize() {
    if ((u.trace("BasePlayer.initialize"), this._isInitialized)) {
      u.warn("Player is already initialized");
      return;
    }
    (await this.initializeMediaElement(),
      await this.initializeExtension(),
      this.initializeEventHandlers(),
      this._dispatcher.publish(f.mediaElementCreated, this._targetElement),
      (this._isInitialized = !0));
  }
  initializeEventHandlers() {
    if ((this.windowHandlers.activate(), !this.hasMediaElement)) return;
    const e = this._targetElement;
    (window.WebKitPlaybackTargetAvailabilityEvent &&
      (e.addEventListener("webkitplaybacktargetavailabilitychanged", (t) => {
        this.playbackTargetAvailable = t.availability === "available";
      }),
      e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", (t) => {
        this.playbackTargetIsWireless = t.target === this._targetElement && !this.playbackTargetIsWireless;
      })),
      u.debug(`Adding event handlers to <HTMLMediaElement id=${this._targetElement.id} />`, this._targetElement),
      La.forEach((t) => e.addEventListener(t, this)),
      this._dispatcher.publish(S.playerActivate));
  }
  removeEventHandlers() {
    (u.trace("BasePlayer.removeEventHandlers()"),
      setTimeout(() => {
        (u.debug(`Removing event handlers from <HTMLMediaElement id=${this._targetElement.id} />`, this._targetElement),
          La.forEach((e) => this._targetElement.removeEventListener(e, this)),
          this.windowHandlers.deactivate());
      }, 0));
  }
  exitFullscreen() {
    return this.fullscreen.exit();
  }
  requestFullscreen(e) {
    return this.fullscreen.request(e);
  }
  newSeeker() {
    return (this._seeker?.end(), (this._seeker = new gn(this)), this._seeker);
  }
  async stop(e) {
    (u.debug("BasePlayer.stop", e),
      await this._waitForPendingPlay(),
      this.isPlaying &&
        (u.debug("BasePlayer.play dispatching playbackStop"),
        this.dispatch(S.playbackStop, {
          item: this.nowPlayingItem,
          position: this.currentPlaybackTime,
          startPosition: this.initialPlaybackTime,
          playingDate: this.currentPlayingDate,
          startPlayingDate: this.initialPlayingDate,
          ...e,
        })),
      await this.stopMediaAndCleanup());
  }
  async stopMediaAndCleanup(e = I.stopped) {
    (u.debug("BasePlayer.stopMediaAndCleanup", e),
      await this.stopMediaElement(),
      (this._stopped = !0),
      (this._paused = !1));
    const t = this.nowPlayingItem;
    ((this.nowPlayingItem = void 0),
      (this.initialPlayingDate = void 0),
      (this.initialPlaybackTime = void 0),
      this.setPlaybackState(e, t));
  }
  onPlaybackError(e, t) {
    (this.resetDeferredPlay(), this.stop({ endReasonType: P.FAILED_TO_LOAD, userInitiated: !1 }));
  }
  calculatePlaybackProgress() {
    const e = Math.round((this.currentPlaybackTime / this.currentPlaybackDuration || 0) * 100) / 100;
    this._currentPlaybackProgress !== e &&
      ((this._currentPlaybackProgress = e),
      this._dispatcher.publish(f.playbackProgressDidChange, { progress: this._currentPlaybackProgress }));
  }
  calculateBufferedProgress(e) {
    const t = Math.round((e / this.currentPlaybackDuration) * 100);
    this._currentBufferedProgress !== t &&
      ((this._currentBufferedProgress = t), this._dispatcher.publish(f.bufferedProgressDidChange, { progress: t }));
  }
  destroy() {
    if (
      (u.debug("BasePlayer.destroy()"),
      (this._isDestroyed = !0),
      this._playbackErrorSubscription?.unsubscribe(),
      !this.hasMediaElement)
    )
      return;
    const e = this._targetElement;
    (this.extension?.destroy(e), this.resetMediaElement(), this.removeEventHandlers(), e.parentNode?.removeChild(e));
  }
  async handleEvent(e) {
    e.type !== "timeupdate" && u.debug("BasePlayer.handleEvent: ", e.type, e);
    const { nowPlayingItem: t } = this;
    switch (((e.timestamp = Date.now()), e.type)) {
      case "canplay": {
        (this._dispatcher.publish(f.mediaCanPlay, e),
          this._playbackState === I.waiting && !this._targetElement.paused && this.setPlaybackState(I.playing, t));
        break;
      }
      case "durationchange": {
        this._targetElement.duration !== 1 / 0 &&
          ((e.duration = this.currentPlaybackDuration),
          this._dispatcher.publish(f.playbackDurationDidChange, e),
          this.calculatePlaybackProgress());
        break;
      }
      case "ended": {
        if ((u.debug('media element "ended" event'), this.nowPlayingItem?.isLinearStream)) {
          u.warn("ignoring ended event for linear stream", e);
          return;
        }
        if (this.isElementCleaned()) {
          u.debug('media element already cleaned, ignoring "ended" event');
          break;
        }
        const r = this.nowPlayingItem,
          s = r?.playbackDuration ? r.playbackDuration / 1e3 : this.currentPlaybackTime,
          n = this.currentPlayingDate;
        (await this.stopMediaAndCleanup(I.ended),
          this.dispatch(S.playbackStop, {
            item: r,
            position: s,
            playingDate: n,
            endReasonType: P.NATURAL_END_OF_TRACK,
          }));
        break;
      }
      case "error": {
        if (
          (u.error("Playback Error", e, this._targetElement.error),
          (this._targetElement.error?.code === 4 || this._targetElement.error?.code === 3) && !tr(this.nowPlayingItem))
        )
          break;
        this._dispatcher.publish(f.mediaPlaybackError, new p(p.Reason.MEDIA_PLAYBACK, "Playback Error"));
        break;
      }
      case "loadedmetadata": {
        this._dispatcher.publish(f.metadataDidChange, e);
        break;
      }
      case "loadstart": {
        this.setPlaybackState(I.loading, t);
        break;
      }
      case "pause": {
        this.setPlaybackState(this._stopped ? I.stopped : I.paused, t);
        break;
      }
      case "play":
      case "playing": {
        ((this._paused = !1), (this._stopped = !1), (this.isPrimaryPlayer = !0), this.setPlaybackState(I.playing, t));
        break;
      }
      case "progress": {
        const r = this._targetElement.buffered;
        (this.handleBufferStart(), r.length === 1 && r.start(0) === 0 && this.calculateBufferedProgress(r.end(0)));
        break;
      }
      case "ratechange": {
        this._dispatcher.publish(f.playbackRateDidChange, e);
        break;
      }
      case "seeked": {
        this._stopped
          ? this.setPlaybackState(I.stopped, t)
          : this._paused
            ? this.setPlaybackState(I.paused, t)
            : this.playbackState !== I.ended && this.setPlaybackState(I.playing, t);
        break;
      }
      case "seeking": {
        (this.playbackState === I.paused
          ? (this._paused = !0)
          : this.playbackState === I.stopped && (this._stopped = !0),
          this.playbackState !== I.ended && this.setPlaybackState(I.seeking, t));
        break;
      }
      case "timeupdate": {
        (this._dispatcher.publish(f.playbackTimeDidChange, {
          currentPlaybackDuration: this.currentPlaybackDuration,
          currentPlaybackTime: this.currentPlaybackTime,
          currentPlaybackTimeRemaining: this.currentPlaybackTimeRemaining,
        }),
          this.calculatePlaybackProgress());
        const r = this._buffer;
        r && (r.currentTime = this.currentPlaybackTime);
        break;
      }
      case "volumechange": {
        this._dispatcher.publish(f.playbackVolumeDidChange, e);
        break;
      }
      case "waiting": {
        this.isReady || this.setPlaybackState(I.waiting, t);
        break;
      }
    }
  }
  handleBufferStart() {
    const { _targetElement: e } = this;
    this.initialPlaybackTime !== void 0 ||
      e.paused ||
      e.buffered.length === 0 ||
      ((this.initialPlaybackTime = this.currentPlaybackTime),
      (this.initialPlayingDate = this.currentPlayingDate),
      u.debug("BasePlayer.handleBufferStart: setting initialPlaybackTime", this.initialPlaybackTime));
  }
  async pause(e = {}) {
    (await this._waitForPendingPlay(),
      this.isPlaying &&
        (await this._pauseMedia(),
        (this._paused = !0),
        this.dispatch(S.playbackPause, {
          item: this.nowPlayingItem,
          position: this.currentPlaybackTime,
          playingDate: this.currentPlayingDate,
          ...e,
        })));
  }
  async play(e = !0) {
    if ((u.debug("BasePlayer.play()"), !!this.nowPlayingItem))
      try {
        (await this._playMedia(),
          u.debug("BasePlayer.play dispatching playbackPlay"),
          this.dispatch(S.playbackPlay, {
            userInitiated: e,
            item: this.nowPlayingItem,
            position: this.currentPlaybackTime,
            playingDate: this.currentPlayingDate,
          }));
      } catch (t) {
        if (
          (t && Op.includes(t.name) && u.error("BasePlayer.play() rejected due to", t), t?.name === "NotAllowedError")
        )
          throw new p(
            p.Reason.USER_INTERACTION_REQUIRED,
            "Playback of media content requires user interaction first and cannot be automatically started on page load.",
          );
      }
  }
  preload() {
    return this._loadMedia();
  }
  showPlaybackTargetPicker() {
    this.playbackTargetAvailable && this._targetElement.webkitShowPlaybackTargetPicker();
  }
  dispatch(e, t) {
    (t.item === void 0 && (t.item = this.nowPlayingItem),
      Ke(t, "isPlaying") || (t.isPlaying = this.isPlaying),
      this._dispatcher.publish(e, t));
  }
  tsidChanged(e) {
    e === void 0 || e === "" || (this.isPrimaryPlayer = e === this._serial);
  }
  async _waitForPendingPlay() {
    this._deferredPlay && (await this._deferredPlay.promise);
  }
  async _loadMedia() {
    (u.debug("BasePlayer._loadMedia", this._targetElement), this._targetElement.load());
  }
  async _pauseMedia() {
    this._targetElement.pause();
  }
  async _playAssetURL(e, t) {
    (u.debug("BasePlayer._playAssetURL", e), (this._targetElement.src = e));
    const r = this._loadMedia();
    if (t) {
      (u.debug("BasePlayer.loadOnly"), await r);
      return;
    }
    await this._playMedia();
  }
  async playItemFromUnencryptedSource(e, t, r, s) {
    (r?.startTime && (e += `#t=${r.startTime}`), t || this.startPlaybackSequence());
    const n = t ? void 0 : this._deferredPlay;
    try {
      await this._playAssetURL(e, t);
    } catch (a) {
      throw (n?.resolve(void 0), n !== void 0 && this._deferredPlay === n && (this._deferredPlay = void 0), a);
    }
    return this.finishPlaybackSequence();
  }
  async _playMedia() {
    u.debug("BasePlayer._playMedia", this._targetElement, this.extension);
    try {
      (await this._targetElement.play(), (this._playbackDidStart = !0));
    } catch (e) {
      throw (u.error("BasePlayer._playMedia: targetElement.play() rejected", e), e);
    }
  }
  _setTargetElementTitle(e) {
    this.hasMediaElement && (this._targetElement.title = e);
  }
  resetDeferredPlay() {
    this._deferredPlay = void 0;
  }
  async stopMediaElement() {
    (u.trace("BasePlayer.stopMediaElement()"),
      this.hasMediaElement &&
        (u.debug(`Stopping HTMLMediaElement id=${this._targetElement.id}`, this._targetElement),
        this._targetElement.pause(),
        this.resetMediaElement()));
  }
  resetMediaElement() {
    u.trace("BasePlayer.cleanupElement()");
    const e = this._targetElement;
    if (!e || this.isElementCleaned()) {
      u.debug("No HTMLMediaElement to reset");
      return;
    }
    (u.debug("Resetting HTMLMediaElement", e),
      (e.currentTime = 0),
      e.removeAttribute("src"),
      e.removeAttribute("title"));
  }
  isElementCleaned() {
    const e = this._targetElement;
    return e ? e.currentTime === 0 && e.src === "" && e.title === "" : !0;
  }
  finishPlaybackSequence() {
    u.debug("BasePlayer.finishPlaybackSequence", this._deferredPlay);
    const e = this._deferredPlay?.resolve(void 0);
    return ((this._deferredPlay = void 0), e);
  }
  startPlaybackSequence() {
    return (
      u.debug("BasePlayer.startPlaybackSequence", this._deferredPlay),
      this._deferredPlay && (u.warn("Previous playback sequence not cleared"), this.finishPlaybackSequence()),
      (this._deferredPlay = mn()),
      this._deferredPlay.promise
    );
  }
  toString() {
    return `<${this.constructor.name} id="${this.id}" isInitialized=${this.isInitialized} isDestroyed=${this.isDestroyed} />`;
  }
}
Cp([T()], Sr.prototype, "onPlaybackError");
function Ii(i, e) {
  if (i.type === "Preview" && !$(i.previewURL, { trim: !0 })) return i.previewURL;
  if (!i.assetURL) throw new Error("Cannot generate asset URL");
  const t = {};
  return (
    i.isUTS && (t.vsgn = "all"),
    e?.startOver && (t.startOver = !0),
    e?.bingeWatching && (t.bingeWatching = !0),
    e?.drmUsed && (t.drmUsed = e.drmUsed),
    i.supportsLinearScrubbing && (t.linearScrubbingSupported = !0),
    i.assetURL.match(/xapsub=accepts-css/) || (t.xapsub = "accepts-css"),
    _r(i.assetURL, t)
  );
}
var U = ((i) => (
    (i.playbackLicenseError = "playbackLicenseError"),
    (i.playbackSessionError = "playbackSessionError"),
    (i.manifestParsed = "manifestParsed"),
    (i.audioCodecIdentified = "audioCodecIdentified"),
    (i.audioTracksSwitched = "audioTracksSwitched"),
    (i.audioTracksUpdated = "audioTracksUpdated"),
    (i.textTracksSwitched = "textTracksSwitched"),
    (i.textTracksUpdated = "textTracksUpdated"),
    (i.inlineStylesParsed = "inlineStylesParsed"),
    (i.itemPlaying = "itemPlaying"),
    (i.levelUpdated = "levelUpdated"),
    (i.videoTracksUpdated = "videoTracksUpdated"),
    (i.videoTracksSwitched = "videoTracksSwitched"),
    i
  ))(U || {}),
  Lt = ((i) => ((i.MP4 = "audio/mp4"), (i.AVC1 = "video/mp4"), i))(Lt || {}),
  Dp = ((i) => (
    (i.Home = "com.apple.amp.appletv.home-team-radio"),
    (i.Away = "com.apple.amp.appletv.away-team-radio"),
    i
  ))(Dp || {});
const Mp = "com.apple.amp.appletv.identifier",
  Ac = "public.accessibility.describes-video",
  Lp = "public.accessibility.sign-language-interpretation";
function Np(i) {
  return (i.MediaSelectionOptionsTaggedMediaCharacteristics ?? []).includes(Ac);
}
function Up(i) {
  return i.characteristics !== void 0 && i.characteristics.includes("com.apple.amp.appletv.home-team-radio");
}
function xp(i) {
  return i.characteristics !== void 0 && i.characteristics.includes("com.apple.amp.appletv.away-team-radio");
}
function UT(i) {
  return i.characteristics?.find((e) => e.startsWith(Mp));
}
function Ns(i) {
  return { label: i.label, kind: i.kind, language: i.language };
}
function Rc(i, e) {
  pd(i, Ns(e));
}
function Ir(i) {
  return hd(i);
}
function At(i, e) {
  const t = Ns(i),
    r = Ns(e);
  for (const s of Object.keys(t)) if (t[s] !== r[s]) return !1;
  return !0;
}
function Zr(i) {
  return Fp(i)
    ? i
    : {
        MediaSelectionOptionsExtendedLanguageTag: i.lang ?? "",
        MediaSelectionOptionsIsDefault: !!i.default,
        MediaSelectionOptionsDisplaysNonForcedSubtitles: i.forced ? 0 : 1,
        MediaSelectionOptionsInterstitialId: i.interstitialId,
        MediaSelectionOptionsPersistentID: i.persistentID ?? -1,
        MediaSelectionOptionsName: i.name,
        MediaSelectionOptionsTaggedMediaCharacteristics: i.characteristics ?? [],
        MediaSelectionOptionsMediaType: i.mediaType,
      };
}
function Fp(i) {
  return typeof i == "object" && i !== null && "MediaSelectionOptionsExtendedLanguageTag" in i;
}
function bn(i, e) {
  if (!e?.language) return;
  const t = e.kind === "description",
    r = i.filter((s) => s.MediaSelectionOptionsExtendedLanguageTag === e.language && Np(s) === t);
  return !("id" in e) || r.length === 1 ? r[0] : r.find((s) => s.MediaSelectionOptionsPersistentID === e.id);
}
function Kp(i) {
  return i.find((e) => e.MediaSelectionOptionsIsDefault);
}
function Cc(i, e) {
  return bn(i, Ir(e));
}
function Na(i, e) {
  return Oc(i, Ds, e);
}
function Bp(i, e) {
  return Oc(i, Ic, e);
}
function Oc(i, e, t) {
  return bn(i, t) ?? Cc(i, e) ?? Kp(i) ?? i[0];
}
function es(i, e, t) {
  return bn(i, t) ?? Cc(i, Ms) ?? Vp(i, e);
}
function Vp(i, e) {
  if (!e) return;
  const t = e.MediaSelectionOptionsExtendedLanguageTag;
  return i.find(
    (r) => r.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 && r.MediaSelectionOptionsExtendedLanguageTag === t,
  );
}
function _n(i) {
  return {
    id: i.MediaSelectionOptionsPersistentID,
    label: i.MediaSelectionOptionsName,
    language: i.MediaSelectionOptionsExtendedLanguageTag,
    interstitialId: i.MediaSelectionOptionsInterstitialId,
    isDefault: i.MediaSelectionOptionsIsDefault,
  };
}
function $p(i) {
  const e = i.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e ?? []).includes(Ac) ? "description" : "main";
  return { ..._n(i), enabled: !1, kind: t, characteristics: e };
}
function Hp(i) {
  const e = i.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e ?? []).includes(Lp) ? "sign" : "main";
  return { ..._n(i), enabled: !1, kind: t, characteristics: e };
}
function Ua(i) {
  let e;
  return (
    i.MediaSelectionOptionsTaggedMediaCharacteristics?.includes("public.accessibility.describes-music-and-sound")
      ? (e = "captions")
      : (e = i.MediaSelectionOptionsMediaType === "clcp" ? "captions" : "subtitles"),
    { ..._n(i), mode: "disabled", kind: e }
  );
}
class jp {
  constructor(e, t, r) {
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = r), this.extensionTracks))
      (u.debug("MEDIA_TRACK Initializing audio track manager for hls track events"),
        (this.onExtensionAudioTracksUpdated = this.onExtensionAudioTracksUpdated.bind(this)),
        (this.onExtensionAudioTrackSwitched = this.onExtensionAudioTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(U.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.addEventListener(U.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
    else {
      if (!e.audioTracks) return;
      (u.debug("MEDIA_TRACK Initializing audio track manager for native track events"),
        (this.onAudioTrackAdded = this.onAudioTrackAdded.bind(this)),
        (this.onAudioTrackChanged = this.onAudioTrackChanged.bind(this)),
        (this.onAudioTrackRemoved = this.onAudioTrackRemoved.bind(this)),
        e.audioTracks.addEventListener("addtrack", this.onAudioTrackAdded),
        e.audioTracks.addEventListener("change", this.onAudioTrackChanged),
        e.audioTracks.addEventListener("removetrack", this.onAudioTrackRemoved));
    }
  }
  _extensionTracks = [];
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  get currentTrack() {
    return this.tracks.find((e) => e.enabled);
  }
  set currentTrack(e) {
    this.setCurrentTrack(e, !0);
  }
  setCurrentTrack(e, t = !0) {
    e &&
      (u.debug(`MEDIA_TRACK Setting audio track ${e.label}`, { shouldPersist: t }),
      t &&
        !Up(e) &&
        !xp(e) &&
        (Rc(Ds, e), u.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`)),
      this.extensionTracks
        ? (u.debug(`MEDIA_TRACK Setting track on extension ${e.id}-${e.label}`), (this.extensionTracks.audioTrack = e))
        : (u.debug("MEDIA_TRACK disabling all audio tracks"),
          Array.from(this.mediaElement.audioTracks).forEach((r) => {
            r !== e && (r.enabled = !1);
          }),
          u.debug("MEDIA_TRACK enabling", e),
          (e.enabled = !0)));
  }
  get tracks() {
    return this.extensionTracks
      ? this._extensionTracks || this.extensionTracks.audioTracks || []
      : Array.from(this.mediaElement.audioTracks);
  }
  destroy() {
    if (((this._isDestroyed = !0), this.extensionTracks))
      (this.extensionTracks.removeEventListener(U.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.removeEventListener(U.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
    else {
      if (!this.mediaElement.audioTracks) return;
      (this.mediaElement.audioTracks.removeEventListener("addtrack", this.onAudioTrackAdded),
        this.mediaElement.audioTracks.removeEventListener("change", this.onAudioTrackChanged),
        this.mediaElement.audioTracks.removeEventListener("removetrack", this.onAudioTrackRemoved));
    }
  }
  onExtensionAudioTracksUpdated(e) {
    (u.debug("MEDIA_TRACK Extension audio tracks updated", e),
      (this._extensionTracks = e),
      this.dispatcher.publish(f.audioTrackAdded, e));
  }
  onExtensionAudioTrackSwitched(e) {
    u.debug("MEDIA_TRACK Extension audio track switched", e);
    const { selectedId: t } = e;
    if (this._extensionTracks) {
      const r = (s) => {
        s.enabled = t === s.id;
      };
      this._extensionTracks.forEach(r);
    }
    this.dispatcher.publish(f.audioTrackChanged, e);
  }
  onAudioTrackAdded(e) {
    const t = Ir(Ds);
    (t !== void 0 &&
      At(e.track, t) &&
      (u.debug(`Found new track matching persisted track: ${e.track.label}`), (this.currentTrack = e.track)),
      this.dispatcher.publish(f.audioTrackAdded, e));
  }
  onAudioTrackChanged(e) {
    this.dispatcher.publish(f.audioTrackChanged, e);
  }
  onAudioTrackRemoved(e) {
    this.dispatcher.publish(f.audioTrackRemoved, e);
  }
}
class qp {
  constructor(e, t, r) {
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = r), this.extensionTracks))
      (u.debug("MEDIA_TRACK Initializing video track manager for hls track events"),
        (this.onExtensionVideoTracksUpdated = this.onExtensionVideoTracksUpdated.bind(this)),
        (this.onExtensionVideoTrackSwitched = this.onExtensionVideoTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(U.videoTracksUpdated, this.onExtensionVideoTracksUpdated),
        this.extensionTracks.addEventListener(U.videoTracksSwitched, this.onExtensionVideoTrackSwitched));
    else {
      if (!e.videoTracks) return;
      (u.debug("MEDIA_TRACK Initializing video track manager for native track events"),
        (this.onVideoTrackAdded = this.onVideoTrackAdded.bind(this)),
        (this.onVideoTrackChanged = this.onVideoTrackChanged.bind(this)),
        (this.onVideoTrackRemoved = this.onVideoTrackRemoved.bind(this)),
        e.videoTracks.addEventListener("addtrack", this.onVideoTrackAdded),
        e.videoTracks.addEventListener("change", this.onVideoTrackChanged),
        e.videoTracks.addEventListener("removetrack", this.onVideoTrackRemoved));
    }
  }
  _extensionTracks = [];
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  get currentTrack() {
    return this.tracks.find((e) => e.enabled);
  }
  set currentTrack(e) {
    this.setCurrentTrack(e);
  }
  setCurrentTrack(e) {
    (u.debug(`MEDIA_TRACK Setting video track ${e?.label}`),
      this.extensionTracks
        ? (u.debug(`MEDIA_TRACK Setting track on extension ${e?.id}-${e?.label}`),
          (this.extensionTracks.videoTrack = e))
        : (u.debug("MEDIA_TRACK disabling all video tracks"),
          Array.from(this.mediaElement.videoTracks).forEach((t) => {
            t !== e && (t.enabled = !1);
          }),
          u.debug("MEDIA_TRACK enabling", e),
          e && (e.enabled = !0)));
  }
  get tracks() {
    return this.extensionTracks
      ? this._extensionTracks || this.extensionTracks.videoTracks || []
      : Array.from(this.mediaElement.videoTracks);
  }
  destroy() {
    if (((this._isDestroyed = !0), this.extensionTracks))
      (this.extensionTracks.removeEventListener(U.videoTracksUpdated, this.onExtensionVideoTracksUpdated),
        this.extensionTracks.removeEventListener(U.videoTracksSwitched, this.onExtensionVideoTrackSwitched));
    else {
      if (!this.mediaElement.videoTracks) return;
      (this.mediaElement.videoTracks.removeEventListener("addtrack", this.onVideoTrackAdded),
        this.mediaElement.videoTracks.removeEventListener("change", this.onVideoTrackChanged),
        this.mediaElement.videoTracks.removeEventListener("removetrack", this.onVideoTrackRemoved));
    }
  }
  onExtensionVideoTracksUpdated(e) {
    (u.debug("MEDIA_TRACK Extension video tracks updated GroupOptions", e, this._extensionTracks),
      (this._extensionTracks = e),
      this.dispatcher.publish(f.videoTrackAdded, e));
  }
  onExtensionVideoTrackSwitched(e) {
    u.debug("MEDIA_TRACK Extension video track switched", e, this._extensionTracks);
    const { selectedId: t } = e;
    if (this._extensionTracks) {
      const r = (s) => {
        s.enabled = t === s.id;
      };
      this._extensionTracks.forEach(r);
    }
    this.dispatcher.publish(f.videoTrackChanged, e);
  }
  onVideoTrackAdded(e) {
    const t = Ir(Ic);
    (t !== void 0 &&
      At(e.track, t) &&
      (u.debug(`Found new track matching persisted track: ${e.track.label}`), (this.currentTrack = e.track)),
      this.dispatcher.publish(f.videoTrackAdded, e));
  }
  onVideoTrackChanged(e) {
    this.dispatcher.publish(f.videoTrackChanged, e);
  }
  onVideoTrackRemoved(e) {
    this.dispatcher.publish(f.videoTrackRemoved, e);
  }
}
const or = [],
  cr = [],
  Wp = 100;
function Gp() {
  let i = or.pop();
  return (
    i
      ? u.debug(`dom-helpers: retrieving video tag, ${or.length} remain`)
      : (u.debug("dom-helpers: no available video tags, creating one"), (i = document.createElement("video"))),
    i
  );
}
function Tn() {
  let i = cr.pop();
  return (
    i
      ? u.debug(`dom-helpers: retrieving audio tag, ${cr.length} remain`)
      : (u.debug("dom-helpers: no available audio tags, creating one"), (i = document.createElement("audio"))),
    i
  );
}
function Yp() {
  (zp(),
    u.debug(
      `dom-helpers: defer playback called.  There are ${or.length} available video elements and ${cr.length} available audio elements.`,
    ));
}
function zp() {
  (xa("audio", cr), xa("video", or));
}
function xa(i, e) {
  let t = Wp - e.length;
  for (; t > 0;) {
    const r = document.createElement(i);
    (r.load(), e.push(r), t--);
  }
}
function Qp(i) {
  return i != null && typeof i.id == "string" && "removeEventListener" in i;
}
function Xp(i) {
  return i != null && typeof i.id == "string" && typeof i.value < "u" && typeof i.value.key == "string";
}
const Dc = {
    [G.clearkey]: "",
    [G.widevine]: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
    [G.playready]: "com.microsoft.playready",
    [G.fairplay]: "com.apple.streamingkeydelivery",
  },
  { textTracksSwitched: Fa, textTracksUpdated: Ka, itemPlaying: Ba } = U;
class Jp {
  constructor(e, t, r) {
    ((this.mediaElement = e),
      (this.dispatcher = t),
      (this.extensionTracks = r),
      this._tracks.push(this.createOffOption()),
      this.extensionTracks
        ? (u.debug("MEDIA_TRACK Initializing text track manager for HLS.js track events"),
          (this.onExtensionTextTracksUpdated = this.onExtensionTextTracksUpdated.bind(this)),
          (this.onExtensionTextTrackSwitched = this.onExtensionTextTrackSwitched.bind(this)),
          (this.onExtensionItemPlaying = this.onExtensionItemPlaying.bind(this)),
          this.extensionTracks.addEventListener(Ka, this.onExtensionTextTracksUpdated),
          this.extensionTracks.addEventListener(Fa, this.onExtensionTextTrackSwitched),
          this.extensionTracks.addEventListener(Ba, this.onExtensionItemPlaying))
        : (u.debug("MEDIA_TRACK Initializing text track manager for native track events"),
          (this.onTextTrackAdded = this.onTextTrackAdded.bind(this)),
          (this.onTextTrackChanged = this.onTextTrackChanged.bind(this)),
          (this.onTextTrackRemoved = this.onTextTrackRemoved.bind(this)),
          (this.onPlayStart = this.onPlayStart.bind(this)),
          e.textTracks.addEventListener("addtrack", this.onTextTrackAdded),
          e.textTracks.addEventListener("change", this.onTextTrackChanged),
          e.textTracks.addEventListener("removetrack", this.onTextTrackRemoved),
          e.addEventListener("playing", this.onPlayStart),
          (this.onAudioTrackAddedOrChanged = id(this.onAudioTrackAddedOrChanged.bind(this))),
          (this._audioTrackSubscription = t.subscribe(
            [f.audioTrackChanged, f.audioTrackAdded],
            this.onAudioTrackAddedOrChanged,
          ))));
  }
  _tracks = [];
  _currentlyPlayingTrack;
  _audioTrackSubscription;
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  get currentTrack() {
    return this.tracks.find((e) => e.mode === "showing");
  }
  set currentTrack(e) {
    if (!e) return;
    let t;
    (Rc(Ms, e),
      u.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`),
      this.extensionTracks
        ? (u.debug(`MEDIA_TRACK Setting track on extension ${e.label}`),
          e.label === it && this.clearCurrentlyPlayingTrack(),
          (this.extensionTracks.textTrack = e))
        : (u.debug(`MEDIA_TRACK Setting track on element ${e.label}`),
          this._tracks.forEach((r) => {
            r !== e && r.mode === Le && (r.mode = Vi);
          }),
          e &&
            (u.debug(`MEDIA_TRACK setting track mode to showing for ${e.label}`),
            this.isTrackOff(e)
              ? ((this._tracks[0].mode = Le), (t = this.selectNativeForcedTrack(this.mediaElement.audioTracks)))
              : (e.mode = Le)),
          this.dispatcher.publish(f.forcedTextTrackChanged, { textTrack: t })));
  }
  get tracks() {
    return this._tracks;
  }
  destroy() {
    if (((this._isDestroyed = !0), this.clearCurrentlyPlayingTrack(), !this.extensionTracks))
      (this.mediaElement.textTracks.removeEventListener("addtrack", this.onTextTrackAdded),
        this.mediaElement.textTracks.removeEventListener("change", this.onTextTrackChanged),
        this.mediaElement.textTracks.removeEventListener("removetrack", this.onTextTrackRemoved),
        this.mediaElement.removeEventListener("playing", this.onPlayStart));
    else {
      const e = this.extensionTracks;
      (e.removeEventListener(Ka, this.onExtensionTextTracksUpdated),
        e.removeEventListener(Fa, this.onExtensionTextTrackSwitched),
        e.removeEventListener(Ba, this.onExtensionItemPlaying));
    }
    this._audioTrackSubscription?.unsubscribe();
  }
  restoreSelectedTrack() {
    const e = this.getValidSavedTrack();
    e && (u.debug(`Found track matching persisted track: ${e.label}`), (this.currentTrack = e));
  }
  getSavedTrack() {
    return Ir(Ms);
  }
  getValidSavedTrack() {
    const e = this.getSavedTrack();
    if (e) return this.tracks.find((t) => At(t, e));
  }
  onExtensionTextTracksUpdated(e) {
    (u.debug("MEDIA_TRACK Extension text tracks updated", e),
      (this._tracks = [this.createOffOption(), ...e]),
      this.dispatcher.publish(f.textTrackAdded, e));
  }
  onExtensionTextTrackSwitched(e) {
    (u.debug("MEDIA_TRACKS Extension text track switched", e), this.handleVTT(e));
    const t = e.track;
    if (this._tracks) {
      const r = (s) => {
        e.track
          ? (t.forced && s.label === it) || (t.label === it && s.label === it)
            ? (s.mode = Le)
            : (s.mode = t.persistentID === s.id ? Le : Vi)
          : (s.mode = s.label === it ? Le : Vi);
      };
      this._tracks.forEach(r);
    }
    this.dispatcher.publish(f.textTrackChanged, e);
  }
  onExtensionItemPlaying(e) {
    this.dispatcher.publish(f.forcedTextTrackChanged, { textTrack: e.forcedTextTrack });
  }
  handleVTT(e) {
    const t = e?.track?.persistentID;
    if (t !== void 0) {
      const s = this.filterSelectableTextTracks(this.mediaElement.textTracks).find((n) => n.persistentId === t);
      s && this.onNativeTrackChange(s);
    } else this.clearCurrentlyPlayingTrack();
  }
  onAudioTrackAddedOrChanged() {
    if ((u.debug("MEDIA_TRACKS text track manager detects audio track change"), !this.shouldForceSubtitle())) {
      u.debug("MEDIA_TRACKS valid persisted track found. Not displaying forced text track");
      return;
    }
    (u.debug("MEDIA_TRACKS selecting forced text track natively"), (this.currentTrack = this._tracks[0]));
  }
  onTextTrackAdded(e) {
    (this._tracks.push(e.track), this.dispatcher.publish(f.textTrackAdded, e));
  }
  onPlayStart() {
    this.restoreSelectedTrack();
  }
  onTextTrackRemoved(e) {
    this.dispatcher.publish(f.textTrackRemoved, e);
  }
  onTextTrackChanged(e) {
    const t = this.findNativeSelectedTextTrack();
    let r = this.getSavedTrack();
    if ((r || (r = this._tracks[0]), t && !At(t, r)))
      if (this.isTrackOff(r) && t.kind !== "forced") {
        const s = this.tracks.find((n) => At(n, r));
        this.currentTrack = s;
      } else {
        const s = this.findNativeTrack(r);
        s && (this.currentTrack = s);
      }
    else this.dispatcher.publish(f.textTrackChanged, e);
  }
  findNativeSelectedTextTrack() {
    for (let e = 0; e < this.mediaElement.textTracks.length; e++) {
      const t = this.mediaElement.textTracks[e];
      if (t.mode === Le) return t;
    }
  }
  findNativeTrack(e) {
    for (let t = 0; t < this.mediaElement.textTracks.length; t++) {
      const r = this.mediaElement.textTracks[t];
      if (At(r, e)) return r;
    }
  }
  selectNativeForcedTrack(e) {
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (r.enabled) {
        const s = this.findNativeForcedTrack(r);
        return (s && s.mode !== Le && (s.mode = Le), s);
      }
    }
  }
  findNativeForcedTrack(e) {
    const t = this.mediaElement.textTracks;
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      if (s.kind === "forced" && s.language === e.language) return s;
    }
  }
  onNativeTrackChange(e) {
    (this.clearCurrentlyPlayingTrack(), (this._currentlyPlayingTrack = e));
  }
  clearCurrentlyPlayingTrack() {
    this._currentlyPlayingTrack === void 0 || !Qp(this._currentlyPlayingTrack) || delete this._currentlyPlayingTrack;
  }
  filterSelectableTextTracks(e) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      (s.kind === "captions" || s.kind === "subtitles" || (s.kind === "metadata" && s.customTextTrackCueRenderer)) &&
        t.push(s);
    }
    return t;
  }
  shouldForceSubtitle() {
    u.debug("MEDIA_TRACKS Determining whether to select forced text track");
    const e = this.getValidSavedTrack();
    return !e || this.isTrackOff(e);
  }
  createOffOption() {
    const e = this.getValidSavedTrack();
    return { id: -2, label: it, language: "", kind: "subtitles", mode: !e || this.isTrackOff(e) ? Le : Vi };
  }
  isTrackOff(e) {
    return e.label === it;
  }
}
var Zp = Object.defineProperty,
  ef = Object.getOwnPropertyDescriptor,
  tf = (i, e, t, r) => {
    for (var s = ef(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Zp(e, t, s), s);
  };
const rf = "apple-music-video-container",
  sf = "picture-in-picture",
  Mc = "inline",
  nf = { "picture-in-picture": xe.pictureinpicture, inline: xe.inline },
  En = {};
En[xe.pictureinpicture] = sf;
En[xe.inline] = Mc;
const { presentationModeDidChange: ts } = f,
  { playbackLicenseError: af } = U,
  { stopped: xT } = I;
class kn extends Sr {
  extension;
  video;
  mediaPlayerType = "video";
  restrictPlatforms;
  textTrackManager;
  audioTrackManager;
  videoTrackManager;
  userInitiated = !1;
  constructor(e) {
    (super(e),
      (this.pipEventHandler = this.pipEventHandler.bind(this)),
      (this.restrictPlatforms = !0),
      e.bag?.features !== void 0 && (this.restrictPlatforms = e.bag.features.restrictPlatforms ?? !0));
  }
  get audioTracks() {
    return this.audioTrackManager?.tracks ?? [];
  }
  get containerElement() {
    return this._context.videoContainerElement ? this._context.videoContainerElement : document.getElementById(rf);
  }
  get currentAudioTrack() {
    return this.audioTrackManager?.currentTrack;
  }
  set currentAudioTrack(e) {
    this.audioTrackManager !== void 0 && (this.audioTrackManager.currentTrack = e);
  }
  get currentTextTrack() {
    return this.textTrackManager?.currentTrack;
  }
  set currentTextTrack(e) {
    this.textTrackManager !== void 0 && (this.textTrackManager.currentTrack = e);
  }
  get currentVideoTrack() {
    return this.videoTrackManager?.currentTrack;
  }
  set currentVideoTrack(e) {
    this.videoTrackManager !== void 0 && (this.videoTrackManager.currentTrack = e);
  }
  get _targetElement() {
    return this.video || { ...document.createElement("video") };
  }
  get textTracks() {
    return this.textTrackManager?.tracks ?? [];
  }
  get videoTracks() {
    return this.videoTrackManager?.tracks ?? [];
  }
  async initializeExtension() {
    const { os: e } = this.services.runtime;
    if (this.restrictPlatforms && e.isAndroid) {
      u.warn("videoPlayer.initializeExtension Not supported on the current platform");
      return;
    }
    if (!this.video) {
      u.warn("videoPlayer.initializeExtension No video element, not initializing extension");
      return;
    }
  }
  onPlaybackLicenseError(e) {
    (this.resetDeferredPlay(), this._dispatcher.publish(af, e));
  }
  setupTrackManagers(e) {
    (this.textTrackManager?.destroy?.(),
      (this.textTrackManager = new Jp(this._targetElement, this._dispatcher, e)),
      this.audioTrackManager?.destroy?.(),
      (this.audioTrackManager = new jp(this._targetElement, this._dispatcher, e)),
      this.videoTrackManager?.destroy?.(),
      (this.videoTrackManager = new qp(this._targetElement, this._dispatcher, e)));
  }
  destroy() {
    (this.finishPlaybackSequence(),
      this.textTrackManager?.destroy(),
      this.audioTrackManager?.destroy(),
      this.videoTrackManager?.destroy(),
      super.destroy());
  }
  async initializeEventHandlers() {
    (super.initializeEventHandlers(),
      this.hasMediaElement &&
        (this._targetElement.addEventListener("webkitpresentationmodechanged", this.pipEventHandler),
        this._targetElement.addEventListener("enterpictureinpicture", this.pipEventHandler),
        this._targetElement.addEventListener("leavepictureinpicture", this.pipEventHandler)));
  }
  removeEventHandlers() {
    if ((super.removeEventHandlers(), !this.hasMediaElement)) return;
    const { _targetElement: e } = this;
    (e.removeEventListener("webkitpresentationmodechanged", this.pipEventHandler),
      e.removeEventListener("enterpictureinpicture", this.pipEventHandler),
      e.removeEventListener("leavepictureinpicture", this.pipEventHandler));
  }
  async initializeMediaElement() {
    u.debug("videoPlayer.initializeMediaElement Initializing media element");
    const e = this.containerElement;
    if (!e) throw new g("mk-117", g.Reason.CONFIGURATION_ERROR, "No container element found");
    ((this.video = Gp()),
      (this.video.autoplay = !1),
      (this.video.controls = !1),
      (this.video.playsInline = !0),
      (this.video.id = "apple-music-video-player"),
      e.appendChild(this.video));
  }
  ensureMediaElementInDocument() {
    if (!this.containerElement) {
      u.warn("videoPlayer.addMediaElementToDocument No container defined");
      return;
    }
    if (!this.video) {
      u.warn("videoPlayer.addMediaElementToDocument - media element has not been initialized");
      return;
    }
    this.containerElement.appendChild(this.video);
  }
  pipEventHandler(e) {
    switch (e.type) {
      case "enterpictureinpicture": {
        this._dispatcher.publish(ts, { mode: xe.pictureinpicture });
        break;
      }
      case "leavepictureinpicture": {
        this._dispatcher.publish(ts, { mode: xe.inline });
        break;
      }
      case "webkitpresentationmodechanged": {
        const t = this._targetElement;
        this._dispatcher.publish(ts, { mode: this._translateStringToPresentationMode(t.webkitPresentationMode) });
        break;
      }
    }
  }
  async playItemFromEncryptedSource(e, t = !1, r = {}) {
    (u.debug("videoPlayer.playItemFromEncryptedSource", e, t),
      (e.playbackType = ce.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = x.loading),
      (this.userInitiated = t));
    const s = Ii(e, { ...r, drmUsed: this.services.runtime.preferredKeySystem });
    await this.playHlsStream(s, e, r);
  }
  async playItemFromUnencryptedSource(e, t, r, s) {
    u.debug("videoPlayer.playItemFromUnencryptedSource", e, t);
    const [n] = e.split("?");
    n.endsWith("m3u") || n.endsWith("m3u8")
      ? await this.playHlsStream(e, s, r)
      : (r?.startTime && (e += `#t=${r.startTime}`), await this._playAssetURL(e, t));
  }
  async setPresentationMode(e) {
    const t = this._targetElement;
    if (t.webkitSupportsPresentationMode && typeof t.webkitSetPresentationMode == "function")
      return t.webkitSetPresentationMode(this._translatePresentationModeToString(e));
    if (t.requestPictureInPicture && document.exitPictureInPicture) {
      if (e === xe.pictureinpicture) return t.requestPictureInPicture();
      if (e === xe.inline) return document.exitPictureInPicture();
    }
  }
  _translateStringToPresentationMode(e) {
    let t = nf[e];
    return (
      t === void 0 &&
        (u.warn(
          `videoPlayer._translateStringToPresentationMode ${e} is not a valid presentation mode, setting to inline`,
        ),
        (t = xe.inline)),
      t
    );
  }
  _translatePresentationModeToString(e) {
    let t = En[e];
    return (
      t === void 0 &&
        (u.warn(
          `videoPlayer._translatePresentationModeToString ${e} is not a valid presentation mode, setting to inline`,
        ),
        (t = Mc)),
      t
    );
  }
  async preloadItem(e, t) {}
}
tf([T()], kn.prototype, "onPlaybackLicenseError");
const of = 1e3,
  cf = 3,
  Lc = (i, e, t, r = 0) =>
    i().catch((s) => {
      const n = r + 1;
      function a(c) {
        if (c && n < cf) {
          const l = of * n;
          return new Promise((h, m) => {
            setTimeout(() => {
              Lc(i, e, t, n).then(h, m);
            }, l);
          });
        }
        throw s;
      }
      const o = e(s);
      return typeof o == "boolean" ? a(o) : o.then(a);
    });
let mi = { developerToken: "developerTokenNotSet", musicUserToken: "musicUserTokenNotSet" };
function lf(i) {
  mi = i;
}
function uf(i, e = !1) {
  return {
    adamId: i.isPurchasedSong ? i.playParams.purchasedId : (i.catalogId ?? "-1"),
    isLibrary: i.isLibrary,
    "user-initiated": e,
  };
}
function df(i) {
  return { event: i.isLiveAudioStation ? "beats1" : "amtv" };
}
function hf(i) {
  return { "adam-id": i.id, id: 1 };
}
function pf(i, e, t = 0) {
  const r = i.keyServerQueryParameters ?? {};
  return { id: t, "lease-action": e, ...r };
}
function Va(i, e, t) {
  let r,
    s = {
      challenge: "challenge" in t ? t.challenge : Qe(t.licenseChallenge),
      uri: t.keyuri,
      "key-system": t.keySystem,
      stkn: t.slotToken,
    };
  return (
    t.extendedLease && (s["extended-lease"] = t.extendedLease),
    (s = oh(s, Object.keys(s))),
    e.isUTS
      ? (r = { "streaming-request": { version: 1, "streaming-keys": [{ ...s, ...pf(e, i) }] } })
      : e.isLiveRadioStation
        ? (r = { ...s, ...df(e) })
        : e.hasOffersHlsUrl
          ? (r = { "license-requests": [{ ...s, ...hf(e) }] })
          : (r = { ...s, ...uf(e, t.userInitiated) }),
    r
  );
}
class ff {
  licenseUrl;
  playableItem;
  licenseData;
  initiated;
  keySystem;
  slotToken;
  startResponse;
  fetch(e) {
    const t = {
      Authorization: `Bearer ${mi.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Apple-Music-User-Token": `${mi.musicUserToken}`,
    };
    return (
      this.keySystem === G.widevine && (t["X-Apple-Renewal"] = !0),
      Lc(
        () => (
          u.debug(`Fetching License challenge from ${this.licenseUrl}`, { headers: t, body: e }),
          fetch(this.licenseUrl, { method: "POST", body: JSON.stringify(e), headers: new Headers(t) })
        ),
        (n) => n instanceof TypeError,
        "license fetch",
      )
    );
  }
  reset() {
    (u.debug("Resetting License instance"),
      (this.licenseUrl = void 0),
      (this.playableItem = void 0),
      (this.licenseData = void 0),
      (this.initiated = void 0),
      (this.keySystem = void 0),
      (this.slotToken = void 0),
      (this.startResponse = void 0));
  }
  async start(e, t, r, s, n = !1, a = !1) {
    ((this.licenseUrl = e),
      (this.playableItem = t),
      (this.licenseData = r),
      (this.keySystem = s),
      (this.initiated = n),
      u.debug(
        `Starting License request to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${sr(this.playableItem)}`,
      ));
    const o = Va("start", t, { ...r, keySystem: s, extendedLease: a, userInitiated: n });
    this.startResponse = this.fetch(o);
    try {
      const c = await this.startResponse;
      if (!c.ok) {
        let m;
        try {
          m = await c.json();
        } catch {}
        this.processJsonError(m);
      }
      u.debug("Processing License Challenge reponse as JSON");
      const l = await c.json();
      let h = l;
      return (
        l?.["streaming-response"]?.["streaming-keys"]?.length
          ? (h = l["streaming-response"]["streaming-keys"][0])
          : l?.["license-responses"]?.length && (h = l["license-responses"][0]),
        h.status !== 0 && this.processJsonError(h),
        (this.slotToken = h.stkn),
        h
      );
    } catch (c) {
      throw (
        u.error(
          `License Challenge Request failed to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${sr(this.playableItem)}`,
        ),
        (this.startResponse = void 0),
        c
      );
    }
  }
  processJsonError(e) {
    if ((e?.errorCode && (e.status = e.errorCode), e?.status === -1021 && (e.status = 190121), e && e.status !== 0)) {
      if (e.message === void 0)
        switch (e.status) {
          case -1004:
            e.message = p.Reason.DEVICE_LIMIT;
            break;
          case -1017:
            e.message = p.Reason.GEO_BLOCK;
            break;
          default:
            e.message = p.Reason.MEDIA_LICENSE;
        }
      throw new en(e);
    }
    throw new p(p.Reason.MEDIA_LICENSE, "Error acquiring license");
  }
  async stop() {
    if (this.startResponse)
      try {
        await this.startResponse;
      } catch {}
    if (!this.playableItem || !this.licenseData || !this.licenseUrl || !this.playableItem.isUTS) return;
    const e = Va("stop", this.playableItem, {
        ...this.licenseData,
        keySystem: this.keySystem,
        slotToken: this.slotToken,
        userInitiated: this.initiated,
      }),
      t = this.fetch(e);
    this.reset();
    try {
      await t;
    } catch (r) {
      u.warn("license.stop request error", r);
    }
  }
}
var yf = Object.defineProperty,
  mf = Object.getOwnPropertyDescriptor,
  gf = (i, e, t, r) => {
    for (var s = mf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && yf(e, t, s), s);
  };
class Ht extends Tt {
  developerToken;
  adamId;
  userToken;
  extURI;
  item;
  initiated = !0;
  isLibrary = !1;
  keyCertURL;
  keyServerURL;
  keySystem = G.fairplay;
  isLegacyEme = !1;
  boundDispatchKeyError;
  boundDispatchSessionError;
  boundHandleSessionCreation;
  boundStartLicenseSession;
  mediaKeySessions = {};
  _pendingRenewal;
  license;
  constructor() {
    (super([U.playbackLicenseError, U.playbackSessionError]),
      (this.boundDispatchKeyError = this.dispatchKeyError.bind(this)),
      (this.boundDispatchSessionError = this.dispatchSessionError.bind(this)),
      (this.boundHandleSessionCreation = this.handleSessionCreation.bind(this)),
      (this.boundStartLicenseSession = this.startLicenseSession.bind(this)),
      (this.license = new ff()));
  }
  get extID() {
    if (this.extURI) return this.extURI.replace("data:;base64,", "");
  }
  get isFairplay() {
    return this.keySystem === G.fairplay;
  }
  get isPlayReady() {
    return this.keySystem === G.playready;
  }
  get isWidevine() {
    return this.keySystem === G.widevine;
  }
  async acquirePlaybackLicense(e, t, r) {
    if (!this.keyServerURL || !this.developerToken || !this.userToken) return;
    const { initiated: s, isLegacyEme: n, keyServerURL: a, keySystem: o } = this,
      c = r.item;
    try {
      return await this.license.start(a, c, { challenge: t, keyuri: e }, o, s, n && c.isUTS);
    } catch (l) {
      this.dispatchEvent(U.playbackLicenseError, l);
    }
  }
  async startLicenseSession(e) {
    u.debug("Starting License Session", e);
    let t;
    const { message: r, target: s, messageType: n } = e;
    if (this.keySystem !== G.fairplay && n !== "license-request") {
      u.debug("not making license request for", n);
      return;
    }
    if (this.isPlayReady) {
      const l = String.fromCharCode.apply(null, new Uint16Array(r.buffer || r));
      t = new DOMParser().parseFromString(l, "application/xml").getElementsByTagName("Challenge")[0]
        .childNodes[0].nodeValue;
    } else t = Qe(new Uint8Array(r));
    const a = s.extURI || this.extURI,
      o = this.mediaKeySessions[a];
    if (!o) {
      u.debug("no key session info, aborting license request");
      return;
    }
    const c = this.acquirePlaybackLicense(a, t, o);
    if (o.delayCdmUpdate) o["license-json"] = c;
    else {
      const l = await c;
      await this.handleLicenseJson(l, s, a);
    }
  }
  setKeyURLs(e) {
    ((this.keyCertURL = e[this.isFairplay ? "hls-key-cert-url" : "widevine-cert-url"]),
      (this.keyServerURL = e["hls-key-server-url"]));
  }
  dispatchKeyError(e) {
    if (this.isFairplay && e?.target?.error?.systemCode === 4294955417) {
      u.error("Ignoring error", e);
      return;
    }
    (console.error(`${p.Reason.MEDIA_KEY} error in dispatchKeyError:`, e),
      this.dispatchEvent(U.playbackSessionError, new p(p.Reason.MEDIA_KEY, e)));
  }
  dispatchSessionError(e) {
    this.dispatchEvent(U.playbackSessionError, new p(p.Reason.MEDIA_SESSION, e));
  }
  async loadCertificateBuffer() {
    if (!this.keyCertURL) return Promise.reject(new p(p.Reason.MEDIA_SESSION, "No certificate URL"));
    let e;
    try {
      e = await fetch(`${this.keyCertURL}?t=${Date.now()}`);
    } catch (s) {
      throw (this.dispatchKeyError(s), s);
    }
    const t = await e.arrayBuffer(),
      r = String.fromCharCode.apply(String, new Uint8Array(t));
    return /^\<\?xml/.test(r) ? Promise.reject(new p(p.Reason.MEDIA_CERTIFICATE, "Invalid certificate.")) : t;
  }
  async handleSessionCreation(e) {
    return this.createSession(e).catch((t) => {
      this.dispatchSessionError(t);
    });
  }
  async handleLicenseJson(e, t, r) {
    if ((u.debug(`updating session ${r} with license response`, e), e?.license)) {
      const s = Dt(e.license);
      try {
        let n;
        await Promise.race([
          t.update(s),
          new Promise((a, o) => {
            n = setTimeout(() => o(new g("mk-242", g.Reason.CDM_UPDATE_TIMEOUT)), 1e4);
          }),
        ]).finally(() => clearTimeout(n));
      } catch (n) {
        (u.error("Failed to updated media keys", n), this.dispatchKeyError(n));
      }
    }
  }
  addMediaKeySessionInfo(e, t, r, s = !1) {
    const n = this.mediaKeySessions[e];
    n
      ? (u.debug(
          `keySession info exists for ${r.title}, making existing session ${n.session.sessionId} the old session`,
        ),
        (n.oldSession = n.session),
        (n.session = t))
      : (u.debug(`creating key session info for ${r.title}`),
        (this.mediaKeySessions[e] = { session: t, item: r, delayCdmUpdate: s }));
  }
  stopLicenseSession() {
    (u.info("key session sending license stop"), this.license.stop());
  }
}
gf([T()], Ht.prototype, "startLicenseSession");
var vf = Object.defineProperty,
  bf = Object.getOwnPropertyDescriptor,
  _f = (i, e, t, r) => {
    for (var s = bf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && vf(e, t, s), s);
  };
class Nc extends Ht {
  _keySystemAccess;
  _mediaKeysPromise;
  _mediaKeySessions = {};
  _mediaKeySessionRenewals = {};
  _mediaKeys;
  async attachMedia(e, t) {
    ((this.keySystem = t.keySystem),
      (this._keySystemAccess = t),
      e.addEventListener("encrypted", this.boundHandleSessionCreation, !1));
  }
  detachMedia(e) {
    e.removeEventListener("encrypted", this.boundHandleSessionCreation);
    const t = this._mediaKeySessions,
      r = this._mediaKeySessionRenewals;
    (Object.values(t).forEach((s) => {
      (s.removeEventListener("message", this.boundStartLicenseSession), qe(s.close()));
    }),
      (this._mediaKeySessions = {}),
      Object.values(r).forEach((s) => clearTimeout(s)),
      (this._mediaKeySessionRenewals = {}));
  }
  async createSession(e) {
    u.debug("fairplay eme:  createSession", e);
    const t = this._keySystemAccess;
    if (!t) return;
    const { initData: r, target: s, initDataType: n } = e;
    this._mediaKeysPromise ||
      (this._mediaKeysPromise = new Promise(async (h, m) => {
        const y = await t.createMediaKeys();
        try {
          (await s.setMediaKeys(y), (this._mediaKeys = y));
          const k = await this.loadCertificateBuffer();
          await y.setServerCertificate(k);
        } catch (k) {
          (this.dispatchKeyError(k), m(k));
        }
        h(y);
      }));
    const a = await this._mediaKeysPromise,
      o = new Uint8Array(r),
      c = String.fromCharCode.apply(void 0, Array.from(o));
    if (this.mediaKeySessions[c]) {
      u.error("fairplay eme: not creating new session for extURI", c);
      return;
    }
    const l = a.createSession();
    (u.debug("fairplay eme: creating new key session for", c),
      this.addMediaKeySessionInfo(c, l, this.item),
      l.addEventListener("message", this.startFairplayLicenseSession),
      (l.extURI = c),
      await l.generateRequest(n, r),
      (this._mediaKeySessions[l.sessionId] = l),
      u.debug("fairplay eme: created session", l));
  }
  async startFairplayLicenseSession(e) {
    const { message: t, target: r } = e,
      s = Qe(new Uint8Array(t)),
      n = r.extURI || this.extURI,
      a = this.mediaKeySessions[n];
    if (!a) {
      u.debug("fairplay eme: no key session info, aborting license request", n);
      return;
    }
    const o = await this.acquirePlaybackLicense(n, s, a);
    return this.handleLicenseJson(o, r, n);
  }
  async handleLicenseJson(e, t, r) {
    if (!e) return;
    const s = this.mediaKeySessions[r];
    if (!s) {
      u.debug("fairplay eme: media key session does not exist, not updating");
      return;
    }
    const n = e["renew-after"];
    if (e.license && n) {
      u.debug("fairplay eme: got renew after value", n, r);
      const a = this._mediaKeySessionRenewals,
        o = a[t.sessionId];
      (o && clearTimeout(o), (a[t.sessionId] = setTimeout(() => this._renewMediaKeySession(s, r), n * 1e3)));
    }
    await super.handleLicenseJson(e, t, r);
  }
  _renewMediaKeySession(e, t) {
    (delete this._mediaKeySessionRenewals[e.session.sessionId],
      u.debug("fairplay eme: renewing session", e),
      e.session.update(on("renew")));
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(e) {}
  async clearSessions() {}
}
_f([T()], Nc.prototype, "startFairplayLicenseSession");
const Tf = /^(?:.*)(skd:\/\/.+)$/i;
class Ef extends Ht {
  target;
  session;
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  isLegacyEme = !0;
  attachMedia(e, t) {
    return (
      (this.target = e),
      e.addEventListener("webkitneedkey", this.boundHandleSessionCreation, !1),
      e.addEventListener("webkitkeyerror", this.boundDispatchKeyError),
      e
    );
  }
  detachMedia(e) {
    e &&
      (e.removeEventListener("webkitneedkey", this.boundHandleSessionCreation, !1),
      e.removeEventListener("webkitkeyerror", this.boundDispatchKeyError));
  }
  destroy() {
    (u.debug("FPS destroy"),
      (this._isDestroyed = !0),
      this.detachMedia(this.target),
      this.session &&
        (this.session.removeEventListener("webkitkeyerror", this.boundDispatchKeyError),
        this.session.removeEventListener("webkitkeymessage", this.boundStartLicenseSession)));
  }
  createSession(e) {
    u.debug("FPS createSession", e);
    const { initData: t, target: r } = e,
      { item: s } = this;
    if (!s) return (u.error("Cannot createSession without item"), Promise.resolve());
    const n = this._extractAssetId(t);
    if ((u.debug("extURI", n), !r.webkitKeys && window.WebKitMediaKeys)) {
      const a = new window.WebKitMediaKeys(this.keySystem);
      r.webkitSetMediaKeys(a);
    }
    return this.loadCertificateBuffer().then((a) => {
      const o = this._concatInitDataIdAndCertificate(t, n, a),
        c = r.tagName === "VIDEO" ? Lt.AVC1 : Lt.MP4,
        l = r.webkitKeys.createSession(c, o);
      (this.addMediaKeySessionInfo(n, l, s),
        (this.session = l),
        (l.extURI = n),
        l.addEventListener("webkitkeyerror", this.boundDispatchKeyError),
        l.addEventListener("webkitkeymessage", this.boundStartLicenseSession));
    });
  }
  _extractAssetId(e) {
    let t = String.fromCharCode.apply(null, new Uint16Array(e.buffer || e));
    const r = t.match(Tf);
    return (r && r.length >= 2 && (t = r[1]), u.debug("Extracted assetId from EXT-X-KEY URI", t), t);
  }
  _concatInitDataIdAndCertificate(e, t, r) {
    (typeof t == "string" && (t = tc(t)), (r = new Uint8Array(r)));
    let s = 0;
    const n = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + r.byteLength),
      a = new DataView(n);
    (new Uint8Array(n, s, e.byteLength).set(e), (s += e.byteLength), a.setUint32(s, t.byteLength, !0), (s += 4));
    const c = new Uint8Array(n, s, t.byteLength);
    return (
      c.set(t),
      (s += c.byteLength),
      a.setUint32(s, r.byteLength, !0),
      (s += 4),
      new Uint8Array(n, s, r.byteLength).set(r),
      new Uint8Array(n, 0, n.byteLength)
    );
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(e) {}
  async clearSessions() {}
}
class kf extends Ht {
  attachMedia(e, t) {
    return (
      (this.keySystem = t.keySystem),
      e.addEventListener("msneedkey", this.boundHandleSessionCreation, !1),
      e.addEventListener("mskeyerror", this.boundDispatchKeyError),
      e
    );
  }
  detachMedia(e) {
    (e.removeEventListener("msneedkey", this.boundHandleSessionCreation, !1),
      e.removeEventListener("mskeyerror", this.boundDispatchKeyError));
  }
  createSession(e) {
    const { initData: t, target: r } = e;
    if (!r.msKeys) {
      const n = new MSMediaKeys(this.keySystem);
      r.msSetMediaKeys(n);
    }
    const s = r.msKeys.createSession(Lt.MP4, t);
    return (
      s.addEventListener("mskeyerror", this.dispatchKeyError),
      s.addEventListener("mskeymessage", this.startLicenseSession.bind(this)),
      s
    );
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(e) {}
  async clearSessions() {}
}
const Sf =
    '<WRMHEADER xmlns="http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version="4.3.0.0"><DATA><PROTECTINFO><KIDS><KID ALGID="AESCTR" VALUE="[KEYID]"></KID></KIDS></PROTECTINFO></DATA></WRMHEADER>',
  Uc = [
    0, 0, 1, 222, 112, 115, 115, 104, 0, 0, 0, 0, 154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95,
    149, 0, 0, 1, 190,
  ],
  If = [190, 1, 0, 0, 1, 0, 1, 0, 180, 1],
  Pf = (i) => {
    const e = (t, r, s) => {
      const n = t[r];
      ((t[r] = t[s]), (t[s] = n));
    };
    (e(i, 0, 3), e(i, 1, 2), e(i, 4, 5), e(i, 6, 7));
  };
function xc(i, ...e) {
  let t = 0;
  for (const n of e) t += n.length;
  const r = new i(t);
  let s = 0;
  for (const n of e) (r.set(n, s), (s += n.length));
  return r;
}
const wf = (i) => {
    (u.debug("generating Playready pssh for keyId"), Pf(i));
    const e = Qe(i),
      t = Sf.replace("[KEYID]", e),
      r = tc(t),
      s = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    return xc(Uint8Array, Uc, If, s);
  },
  Af = (i) => {
    u.debug("generating Widevine pssh for keyId");
    const e = new Uint8Array([
      0, 0, 0, 52, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29,
      33, 237, 0, 0, 0, 20, 8, 1, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    for (let t = 0; t < i.length; t++) e[e.length - 16 + t] = i[t];
    return (u.debug("generatePSSH", e), e);
  },
  Rf = { [G.widevine]: Af, [G.playready]: wf },
  Cf = (i, e) => {
    const t = Rf[e];
    if (!t) return (u.warn("No pssh generator for ", e), i);
    const r = Uint8Array.from(i);
    return t(r);
  },
  Of = (i) => xc(Uint8Array, new Uint8Array(Uc), i);
class Df extends Ht {
  _keySystemAccess;
  _mediaKeysPromise;
  _mediaKeys;
  _target;
  _sessionRemovalTimeouts = {};
  _mediaKeySessionRenewals = {};
  attachMedia(e, t) {
    ((this.keySystem = t.keySystem), (this._keySystemAccess = t), (this._target = e));
  }
  detachMedia() {
    qe(this.clearSessions());
  }
  async createSession(e) {}
  async _mediaKeysSetup() {
    const e = this._keySystemAccess;
    e &&
      (this._mediaKeysPromise ||
        (this._mediaKeysPromise = new Promise(async (t, r) => {
          const s = await e.createMediaKeys();
          try {
            (await this._target?.setMediaKeys(s), (this._mediaKeys = s));
          } catch (n) {
            (this.dispatchKeyError(n), r(n));
          }
          if (this.isWidevine) {
            const n = await this.loadCertificateBuffer();
            await s.setServerCertificate(n);
          }
          t(s);
        })),
      await this._mediaKeysPromise);
  }
  async createSessionAndGenerateRequest(e, t, r) {
    const s = !!r?.isRenewal,
      n = !!r?.delayCdmUpdate;
    if (!s && this.mediaKeySessions[e]) return;
    u.debug(`createSessionAndGenerateRequest for item ${t.title}, isRenewal ${s}`);
    const a = this._mediaKeys?.createSession(),
      { keySystem: o } = this;
    if (!a) return;
    this.addMediaKeySessionInfo(e, a, t, n);
    const c = e.includes("base64"),
      l = c ? e.split(",")[1] : e,
      h = on(c ? atob(l) : l),
      m = (this.isWidevine && t.isSong) || h.length === 16;
    let y;
    return (
      u.debug("extracted uri", e),
      this.isPlayReady && !m
        ? (u.debug("handling Playready object"), (a.extURI = e), (y = Of(h)))
        : m
          ? (u.debug("handling keyId only initData"), (a.extURI = `data:;base64,${Qe(h)}`), (y = Cf(h, o)))
          : (u.debug("handling pssh initData"), (a.extURI = e), (y = h)),
      a.addEventListener("message", this.startLicenseSession),
      a.generateRequest("cenc", y).catch((k) => {
        if (k.message.match(/generateRequest.*\(75\)/)) return a.generateRequest("cenc", y);
        throw k;
      })
    );
  }
  async handleLicenseJson(e, t, r) {
    if (!e) return;
    const s = this.mediaKeySessions[r];
    if (!s) {
      u.debug("media key session does not exist, not updating");
      return;
    }
    const n = e["renew-after"];
    if (e.license && n) {
      u.debug("Got renew after value", n, r);
      const o = this._mediaKeySessionRenewals,
        c = o[t.sessionId];
      (c && clearTimeout(c), (o[t.sessionId] = setTimeout(() => this._renewMediaKeySession(s, r), n * 1e3)));
    }
    await super.handleLicenseJson(e, t, r);
    const a = this.mediaKeySessions[r]?.oldSession;
    a &&
      (u.debug("removing old key session after updating", r),
      await this._removeAndCloseSession(a),
      delete this.mediaKeySessions[r].oldSession,
      delete this._mediaKeySessionRenewals[a.sessionId]);
  }
  _renewMediaKeySession(e, t) {
    (delete this._mediaKeySessionRenewals[e.session.sessionId],
      qe(this.createSessionAndGenerateRequest(t, e.item, { isRenewal: !0 })));
  }
  async applyDelayedCdmUpdates() {
    u.debug("applying delayed CDM updates");
    const e = Object.entries(this.mediaKeySessions);
    for (const t of e) {
      const [r, s] = t;
      if (s.delayCdmUpdate) {
        const n = await s["license-json"];
        (u.debug("delayed update of license", n),
          (s.delayCdmUpdate = !1),
          await this.handleLicenseJson(n, s.session, r));
      }
    }
  }
  async loadKeys(e, t, r) {
    await this._mediaKeysSetup();
    const s = this.filterKeyValues(e);
    for (const n of s) {
      const { dataUri: a } = n;
      await this.createSessionAndGenerateRequest(a, t, r);
    }
    if (t?.isLiveAudioStation) {
      const n = Object.keys(this.mediaKeySessions),
        a = s.reduce((o, c) => {
          const l = c.dataUri;
          return ((o[l] = !0), o);
        }, {});
      for (const o of n) a[o] || (await this._scheduleRemoveSession(o));
    }
  }
  filterKeyValues(e) {
    let t;
    if (e.length === 1) t = e;
    else {
      const r = Dc[this.keySystem];
      t = e.filter((s) => s.keyFormat === r);
    }
    return t;
  }
  async clearSessions(e) {
    const t = this.mediaKeySessions;
    if (e?.length) {
      const r = this.filterKeyValues(e);
      for (const s of r) {
        const n = s.dataUri;
        (clearTimeout(this._sessionRemovalTimeouts[n]), await this._removeSessionImmediately(n));
      }
    } else {
      (Object.values(this._sessionRemovalTimeouts).forEach((r) => clearTimeout(r)),
        u.debug("clearing key sessions", t));
      for (const r of Object.keys(t)) await this._removeSessionImmediately(r);
    }
  }
  async _scheduleRemoveSession(e) {
    if (!this.mediaKeySessions[e]) {
      u.warn("no session for dataUri, not scheduling remove", e);
      return;
    }
    if (this._sessionRemovalTimeouts[e]) return;
    const r = setTimeout(() => {
      qe(this._removeSessionImmediately(e));
    }, 60 * 1e3);
    (u.debug("deferring removal of keysession for dataUri", e), (this._sessionRemovalTimeouts[e] = r));
  }
  async _removeSessionImmediately(e) {
    const t = this.mediaKeySessions[e];
    if (!t) {
      u.warn("no session for dataUri, not removing", e);
      return;
    }
    u.debug("removing keysession for", e);
    const { session: r, oldSession: s } = t;
    (this._clearSessionRenewal(r),
      delete this.mediaKeySessions[e],
      await this._removeAndCloseSession(r),
      s && (await this._removeAndCloseSession(s)));
  }
  async _removeAndCloseSession(e) {
    (e.removeEventListener("message", this.startLicenseSession), u.debug("tearing down session", e.sessionId));
    try {
      await e.remove();
    } catch (t) {
      u.warn("Error invoking session.remove()", t);
    } finally {
      try {
        await e.close();
      } catch (t) {
        u.warn("Error invoking session.close()", t);
      }
    }
  }
  _clearSessionRenewal(e) {
    const t = this._mediaKeySessionRenewals[e.sessionId];
    t &&
      (u.debug("clearing scheduled license renewal for session", e.sessionId),
      clearTimeout(t),
      delete this._mediaKeySessionRenewals[e.sessionId]);
  }
}
function Mf(i, e) {
  e.keyURLs &&
    ((i.developerToken = mi.developerToken),
    (i.userToken = mi.musicUserToken),
    (i.item = e),
    (i.adamId = e.catalogId ?? "-1"),
    (i.isLibrary = e.isLibrary),
    i.setKeyURLs(e.keyURLs));
}
const Lf = _e.register("mk-safari-modern-eme");
class Fc extends Tt {
  _session;
  mediaElement;
  contentType;
  services;
  constructor(e) {
    (super([U.playbackLicenseError, U.playbackSessionError]),
      (this.mediaElement = e.mediaElement),
      (this.contentType = e.contentType),
      (this.services = e.services));
  }
  get runtime() {
    return this.services.runtime;
  }
  get hasMediaSession() {
    return this._session !== void 0;
  }
  get isFairplay() {
    return this._session.isFairplay;
  }
  set extURI(e) {
    this._session.extURI = e;
  }
  set initiated(e) {
    this._session.initiated = e;
  }
  get session() {
    return this._session;
  }
  async clearSessions(e) {
    return this.session?.clearSessions(e);
  }
  async initializeKeySystem() {
    const { mediaElement: e, contentType: t } = this;
    if (window.WebKitMediaKeys?.isTypeSupported(`${G.fairplay}.1_0`, Lt.MP4)) {
      let r;
      (Lf.enabled && this.runtime.isEMESupported && (r = await Nf(this.contentType)),
        r !== void 0
          ? (u.warn("media-extension: Using Fairplay modern EME"),
            (this._session = new Nc()),
            this._session.attachMedia(e, r))
          : (u.warn("media-extension: Using Fairplay legacy EME"),
            (this._session = new Ef()),
            this._session.attachMedia(e, { keySystem: G.fairplay })));
    } else if (window.MSMediaKeys?.isTypeSupported(G.playready, Lt.MP4))
      ((this._session = new kf()), this._session.attachMedia(e, { keySystem: G.playready }));
    else if (this.runtime.preferredKeySystem !== void 0 && e.canPlayType(t)) {
      const r = G[this.runtime.preferredKeySystem];
      if (r !== void 0) {
        this._session = new Df();
        const s = await Kc(r, {
          initDataTypes: ["cenc", "keyids"],
          audioCapabilities: [{ contentType: t }],
          distinctiveIdentifier: "optional",
          persistentState: "required",
        });
        s && this._session?.attachMedia(e, s);
      }
    } else u.warn("No KeySystem available for playback!");
    this._session !== void 0 &&
      [U.playbackLicenseError, U.playbackSessionError].forEach((r) => {
        this._session.addEventListener(r, (s) => {
          this.dispatchEvent(r, s);
        });
      });
  }
  setMediaItem(e) {
    Mf(this._session, e);
  }
  destroy(e) {
    this._session?.detachMedia(e);
  }
}
async function Kc(i, e) {
  try {
    return navigator.requestMediaKeySystemAccess(i, [e]);
  } catch {
    u.warn(`Unable to get KeySystem access to ${i}`);
  }
}
async function Nf(i) {
  return Kc(G.fairplay, {
    initDataTypes: ["skd"],
    audioCapabilities: [{ contentType: i, robustness: "" }],
    videoCapabilities: [{ contentType: i, robustness: "" }],
    distinctiveIdentifier: "not-allowed",
    persistentState: "not-allowed",
    sessionTypes: ["temporary"],
  });
}
const Uf = _e.register("mk-force-audio-mse"),
  Bc = () => Uf.enabled;
class $a {
  url;
  range;
  startByte;
  endByte;
  length;
  startTime;
  endTime;
  isInitSegment;
  constructor({ url: e, startByte: t, length: r, isInitSegment: s = !1 }) {
    ((this.url = e),
      (this.isInitSegment = s),
      (this.startByte = parseInt(t, 10)),
      (this.length = parseInt(r, 10)),
      (this.endByte = this.startByte + this.length - 1),
      (this.range = `bytes=${this.startByte}-${this.endByte}`));
  }
  async load() {
    const { url: e, range: t } = this;
    if (!e) return new Uint8Array();
    const r = new Headers();
    r.append("Range", t);
    const n = await (await fetch(e, { headers: r })).arrayBuffer();
    return new Uint8Array(n);
  }
}
class xf {
  constructor(e, t = !1) {
    ((this.url = e), (this.isInitSegment = t));
  }
  async load() {
    const { url: e } = this;
    if (!e) return new Uint8Array();
    const r = await (await fetch(e)).arrayBuffer();
    return new Uint8Array(r);
  }
}
const Ha = /^#EXT-X-BYTERANGE:([^\n]+)\n/gim,
  ja = /^#EXT-X-MAP:([^\n]+)\n/im,
  Ff = /#EXTINF:\d*\.\d*\,[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  Kf = /#EXTINF:\d*\.\d*,\s*#EXT-X-BITRATE:\d{1,3}[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  Bf = u.createChild("hls");
function Vf(i) {
  if (!i || !ja.test(i)) return;
  const [, e] = i.match(ja);
  return e.split(",").reduce((t, r) => {
    const [s, n] = r.split("=");
    return ((t[s.toLowerCase()] = n.replace(/\"/gi, "")), t);
  }, {});
}
class $f {
  _segments = [];
  _addedSegments = {};
  get segments() {
    return this._segments;
  }
  addSegment(e, t) {
    this._addedSegments[t] || (Bf.debug("Adding segment", t), this._segments.push(e), (this._addedSegments[t] = !0));
  }
  extractLiveRadioSegments(e, t) {
    this._extractContinuousSegments(Ff, e, t);
  }
  extractHlsOffersSegments(e, t) {
    this._extractContinuousSegments(Kf, e, t);
  }
  _extractContinuousSegments(e, t, r) {
    if (!t || !e.test(t)) return;
    e.lastIndex = 0;
    let s;
    for (; (s = e.exec(t));) {
      const n = s[0].startsWith("#EXT-X-MAP") ? s[2] : s[1];
      let a = n;
      /^http(s)?:\/\//.test(a) || (a = Jo([...Zu(r).slice(0, -1), n]));
      const o = s[0].startsWith("#EXT-X-MAP");
      this.addSegment(new xf(a, o), n);
    }
  }
  extractByteRangeSegments(e, t) {
    if (!e || !Ha.test(e)) return;
    const r = Vf(e),
      s = t.split("/").pop() ?? "",
      n = t.replace(s, r.uri),
      [a, o] = r.byterange.split("@"),
      c = new $a({ url: n, startByte: o, length: a });
    (this.addSegment(c, c.range),
      (e.match(Ha) ?? []).forEach((l) => {
        const [, h, m] = l.match(/^#EXT-X-BYTERANGE:(\d+)@(\d+)\n/),
          y = new $a({ url: n, startByte: m, length: h });
        this.addSegment(y, y.range);
      }));
  }
}
var gi = ((i) => ((i.keysParsed = "keysParsed"), i))(gi || {}),
  Hf = Object.defineProperty,
  jf = Object.getOwnPropertyDescriptor,
  qf = (i, e, t, r) => {
    for (var s = jf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Hf(e, t, s), s);
  };
const Wf = /^#EXT-X-TARGETDURATION:(\d+)/im,
  qa = /^#EXT-X-KEY:[^\n]+URI="([^"]+)"/im,
  Gf = /^#EXT-X-KEY:.*(.*$)/gim;
class Vc extends Tt {
  _data;
  _downlink = 0;
  _extURI;
  _url;
  _item;
  _segmentList = new $f();
  _manifestRefreshInterval;
  services;
  constructor(e, t, r) {
    (super([U.manifestParsed, gi.keysParsed]),
      (this._data = e),
      (this._item = t),
      (this._url = t.assetURL),
      (this.services = r.services));
  }
  parse() {
    const e = this._item,
      t = this._data;
    if (this.services.runtime.preferredKeySystem !== "fairplay" || Bc())
      if ((this._detectKeyTags(), e.hasOffersHlsUrl)) this._segmentList.extractHlsOffersSegments(t, e.assetURL);
      else if (e.isLiveRadioStation) {
        this._segmentList.extractLiveRadioSegments(t, e.assetURL);
        const [, s] = this._data.match(Wf);
        u.debug(`manifest: setting up manifest refresh interval at ${s} seconds`);
        const n = parseInt(s, 10) * 1e3;
        this._manifestRefreshInterval = setInterval(this.liveRadioRefresh, n);
      } else this._segmentList.extractByteRangeSegments(t, e.assetURL);
  }
  static async load(e, t) {
    u.debug("loading manifest for item", e.title);
    const r = e.assetURL,
      s = ln(),
      n = s ? (t.cache ?? !0) : !1,
      a = t.services;
    if (n) {
      const m = s?.getItem(r);
      if (m) return new this(m, e, { services: a });
    }
    const o = new Date().getTime(),
      c = await a.request.fetchText(r),
      l = new Date().getTime(),
      h = new this(c, e, { services: a });
    return ((h.downlink = (c.length * 8) / ((l - o) / 1e3) / 1024), n && s?.setItem(r, c), h);
  }
  get downlink() {
    return this._downlink;
  }
  set downlink(e) {
    this._downlink = e;
  }
  get mediaItem() {
    return this._item;
  }
  async liveRadioRefresh() {
    const e = await this.services.request.fetchText(this._url);
    ((this._data = e),
      this._detectKeyTags(),
      this._segmentList.extractLiveRadioSegments(e, this._url),
      this.dispatchEvent(U.manifestParsed));
  }
  segmentsForTimeRange(e) {
    const t = Math.floor(e.start / 10) + 1,
      r = Math.floor(e.end / 10) + 1,
      { segments: s } = this;
    return [s[0], ...s.slice(t, r + 1)];
  }
  get segments() {
    return this._segmentList.segments;
  }
  get extURI() {
    if (!this._extURI) {
      const e = this._data.match(qa);
      (u.debug("manifest: EXT_X_KEY_URI matches", e), (this._extURI = (e && e[1]) || void 0));
    }
    return this._extURI;
  }
  get keyValues() {
    let e = this._modernKeys;
    return (e.length || (e = this._legacyKeys), e);
  }
  _detectKeyTags() {
    const e = this.keyValues;
    e.length && this.dispatchEvent(gi.keysParsed, { item: this.mediaItem, keys: e });
  }
  get _legacyKeys() {
    const e = this._data.match(qa);
    u.debug("manifest: EXT_X_KEY_URI matches", e);
    const t = (e && e[1]) || void 0;
    this._extURI = t;
    const r = [];
    return (t && r.push({ keyFormat: Dc[G.widevine], dataUri: t }), r);
  }
  get _modernKeys() {
    let e;
    const t = [];
    for (; (e = Gf.exec(this._data));) {
      const r = e[0],
        s = /KEYFORMAT="(.*?)"/.exec(r)?.[1] ?? "",
        n = /URI="(.*?)"/.exec(r)?.[1] ?? "";
      s && n && t.push({ keyFormat: s, dataUri: n });
    }
    return t;
  }
  stop() {
    this._manifestRefreshInterval && clearInterval(this._manifestRefreshInterval);
  }
}
qf([T()], Vc.prototype, "liveRadioRefresh");
const Yf = "seamlessAudioTransition",
  zf = "bufferTimedMetadataDidChange",
  Qf = "loadSegmentError",
  Pe = { seamlessAudioTransition: Yf, bufferTimedMetadataDidChange: zf, loadSegmentError: Qf };
function $c(i, e = "utf-8") {
  return e === "iso-8859-1" ? String.fromCharCode(...i) : new TextDecoder(e).decode(i);
}
function Wa(i, e = 0, t) {
  const r = [];
  t = t ?? i.length;
  for (let s = e; s < t; s++) {
    const n = i[s];
    if (String.fromCharCode(n) === "\0") break;
    r.push(String.fromCharCode(n));
  }
  return [r.join(""), r.length];
}
class Sn {
  constructor(e, t, r, s) {
    ((this.id = e), (this.data = t), (this.start = r), (this.end = s));
  }
  get size() {
    return this.end - this.start;
  }
  get rawBytes() {
    return this.data.slice(this.start, this.end);
  }
}
const Xf = [237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237];
class Hc extends Sn {
  view;
  constructor(e, t, r) {
    (super("pssh", e, t, r), (this.view = new DataView(e.buffer, t)));
  }
  get systemId() {
    const { data: e, start: t } = this,
      r = t + 12;
    return e.slice(r, r + 16);
  }
  get dataSize() {
    return this.view.getUint32(28);
  }
  get psshData() {
    const { data: e, start: t, dataSize: r } = this,
      s = t + 32;
    return e.slice(s, s + r);
  }
  get keyBytes() {
    const { psshData: e } = this;
    return e.slice(2, 18);
  }
  get isWidevine() {
    return an(this.systemId, Xf);
  }
}
class Jf extends Sn {
  constructor(e, t, r) {
    (super("tenc", e, t, r), (this.data = e), (this.start = t), (this.end = r));
  }
  get isProtected() {
    const { data: e, start: t } = this;
    return e[t + 14];
  }
  get defaultKeyId() {
    const { data: e, start: t } = this;
    return e.slice(t + 16, t + 32);
  }
  set defaultKeyId(e) {
    const { data: t, start: r } = this;
    for (let s = 0; s < e.length; s++) t[s + r + 16] = e[s];
  }
}
function Rt(i, e, t = []) {
  for (let r = e; r < i.length;) {
    if (t.length === 0) return;
    const n = new DataView(i.buffer, r).getUint32(0),
      a = $c(i.subarray(r + 4, r + 8)),
      o = r + n;
    if (t.length === 1 && a === t[0]) return new Sn(a, i, r, o);
    if (a === t[0]) return Rt(i, r + 8, t.slice(1));
    r += n;
  }
}
function Zf(i) {
  const e = Rt(i, 0, ["moov", "trak", "mdia", "minf", "stbl", "stsd"]),
    t = [];
  if (!e) return t;
  const r = e.start + 16;
  for (let s = r; s < e.end;) {
    let n = Rt(i, s, ["enca"]),
      a = 36;
    if ((n || ((n = Rt(i, s, ["encv"])), (a = 86)), !n)) return t;
    const o = Rt(i, n.start + a, ["sinf", "schi", "tenc"]);
    o ? (t.push(new Jf(o.data, o.start, o.end)), (s = o.end)) : (s = e.end);
  }
  return t;
}
function ey(i) {
  const e = Rt(i, 0, ["moov"]),
    t = [];
  if (!e) return t;
  const r = new DataView(i.buffer, 0),
    s = e.start + 8;
  for (let n = s; n < e.size;) {
    const a = r.getUint32(n);
    ($c(i.subarray(n + 4, n + 8)) === "pssh" && t.push(new Hc(i, n, n + a)), (n += a));
  }
  return t;
}
function ty(i) {
  const e = [],
    t = new DataView(i.buffer);
  for (let r = 0; r < i.length;) {
    const s = t.getUint32(r);
    (e.push(new Hc(i, r, r + s)), (r += s));
  }
  return e;
}
const Ga = (i) => {
  const [e] = Zf(i);
  if (!e) return;
  const r = ey(i).find((s) => s.isWidevine);
  r && (e.defaultKeyId = r.keyBytes);
};
class jc {
  version = [3, 2, 0];
  frames = [];
  flags = { unsynchronized: !1, extendedHeader: !1, footer: !1, experimental: !1 };
  get major() {
    return this.version[0];
  }
  get minor() {
    return this.version[1];
  }
  get revision() {
    return this.version[2] ?? 0;
  }
  static parse(e) {
    return iy(e);
  }
  constructor(e) {
    ((this.version = e.version),
      (this.flags = { unsynchronized: !1, extendedHeader: !1, footer: !1, experimental: !1, ...e.flags }),
      (this.frames = e.frames ?? []));
  }
}
function iy(i) {
  if (i.length === 0 || ry(i) !== "ID3") return;
  const e = {};
  let t = 3;
  ((e.version = [3, i[t++], i[t++]]), (e.flags = sy(i)), (t += 1));
  const r = t + 4 + Us(i.subarray(t, t + 4));
  return (
    (t += 4),
    e.flags.extendedHeader && (t += Us(i.subarray(t, t + 4))),
    e.version[1] > 2 && (e.frames = qc(i, e.version, [t, r])),
    new jc(e)
  );
}
function ry(i, e = 0) {
  return Xe(i.subarray(e, 3));
}
function sy(i, e = 5) {
  const t = i[e];
  return { unsynchronized: $i(t, 7), extendedHeader: $i(t, 6), experimental: $i(t, 5), footer: $i(t, 4) };
}
const ny = { WXXX: dy, TXXX: uy, TPE1: ay, TIT2: cy, TALB: oy, TEXT: ly, PRIV: hy, CHAP: py };
function qc(i, e, t) {
  t = t ?? [0, i.byteLength];
  const r = t[1] ?? i.byteLength;
  let s = t[0] ?? 0;
  const n = new DataView(i.buffer, 0, r),
    a = [];
  for (; s + 8 <= r;) {
    const o = Xe(i.subarray(s, s + 4));
    s += 4;
    const c = e[1] === 4 ? Us(i.subarray(s, s + 4)) : n.getUint32(s);
    if (((s += 4), i[s++] << (8 + i[s++]), s + c > r)) break;
    const l = i.slice(s, s + c),
      h = ny[o]?.(o, l, e);
    (h && a.push(h), (s += c));
  }
  return a;
}
function ay(i, e, t) {
  return { key: "TPE1", data: Pr(Xe(e.subarray(1), jt(e[0]))) };
}
function oy(i, e, t) {
  return { key: "TALB", data: Pr(Xe(e.subarray(1), jt(e[0]))) };
}
function cy(i, e, t) {
  return { key: "TIT2", data: Pr(Xe(e.subarray(1), jt(e[0]))) };
}
function ly(i, e, t) {
  return { key: "TEXT", data: Pr(Xe(e.subarray(1), jt(e[0]))) };
}
function uy(i, e, t) {
  const r = jt(e[0]),
    [s, n] = wr(e.subarray(1), r),
    a = n > 0 ? n + 2 : 0;
  return { key: "TXXX", data: Xe(e.subarray(a), r), description: s };
}
function dy(i, e, t) {
  const r = jt(e[0]),
    [s, n] = wr(e.subarray(1), r),
    a = n > 0 ? n + 2 : 0;
  return { key: "WXXX", data: Xe(e.subarray(a), r), description: s };
}
function hy(i, e, t) {
  const [r, s] = wr(e);
  if (s !== 0) return { key: "PRIV", owner: r, data: e.slice(s + 1) };
}
function py(i, e, t) {
  const r = new DataView(e.buffer),
    s = { key: "CHAP", elementId: "", startTime: 0, endTime: 0, frames: [] },
    [n, a] = wr(e);
  s.elementId = n;
  let o = a + 1;
  return (
    (s.startTime = r.getUint32(o)),
    (o += 4),
    (s.endTime = r.getUint32(o)),
    (o += 4),
    (s.startOffset = r.getUint32(o)),
    (o += 4),
    (s.endOffset = r.getUint32(o)),
    (o += 4),
    (s.frames = qc(e, t, [o, e.length])),
    s
  );
}
function Xe(i, e = "utf-8") {
  return new TextDecoder(e).decode(i);
}
function $i(i, e) {
  return (i & (1 << e)) !== 0;
}
const fy = { 0: "iso-8859-1", 1: "utf-16", 2: "utf-16be", 3: "utf-8" };
function jt(i) {
  return fy[i] ?? "iso-8859-1";
}
function Pr(i) {
  return i.replace(/^\0*|\0*/g, "");
}
function wr(i, e = "utf-8", t = 0) {
  const r = [];
  for (let s = t; s < i.byteLength; s++) {
    const n = i[s];
    if (n === 0) break;
    r.push(n);
  }
  return [Xe(new Uint8Array(r), e), r.length];
}
function Us(i) {
  return (i[0] & 127) * 2097152 + (i[1] & 127) * 16384 + (i[2] & 127) * 128 + (i[3] & 127);
}
function xs(i, e, t) {
  return e + 4 > i.length ? !1 : i[e] === t[0] && i[e + 1] === t[1] && i[e + 2] === t[2] && i[e + 3] === t[3];
}
function yy(i) {
  return i?.length >= 8 ? xs(i, 4, [102, 116, 121, 112]) : !1;
}
function my(i) {
  const e = i.length,
    t = [];
  if (yy(i)) return t;
  for (let r = 0; r < e; r++) {
    if (xs(i, r, [109, 111, 111, 102])) return t;
    if (xs(i, r, [101, 109, 115, 103])) {
      const s = r - 4,
        a = new DataView(i.buffer, s).getUint32(0),
        o = i.subarray(s, s + a);
      ((r = r + a - 1), t.push(o));
    }
  }
  return t;
}
class Wc {
  performer;
  title;
  album;
  links;
  storefrontAdamIds;
  blob;
  constructor(e) {
    ((this.performer = e?.performer),
      (this.title = e?.title),
      (this.album = e?.album),
      (this.links = e?.links),
      (this.storefrontAdamIds = e?.storefrontAdamIds ?? {}),
      (this.blob = e?.blob));
  }
  storefrontAdamId(e) {
    return this.storefrontAdamIds?.[e];
  }
  equals(e) {
    return gy(this, e);
  }
}
function gy(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (
    typeof i != typeof e ||
    ((i = i), (e = e), i.album !== e.album || i.title !== e.title || i.performer !== e.performer) ||
    i.links?.length !== e.links?.length
  )
    return !1;
  for (let t = 0; t < (i.links?.length ?? 0); t++) if (!Ya(i.links?.[t], e.links?.[t])) return !1;
  return !(!Ya(i.storefrontAdamIds, e.storefrontAdamIds) || !Ud(i.blob, e.blob));
}
function Ya(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (typeof i != typeof e) return !1;
  ((i = i), (e = e));
  const t = Object.keys(i),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (const s of t) if (i[s] !== e[s]) return !1;
  return !0;
}
function vy(i) {
  const e = {};
  for (const t of i)
    if (t.key !== void 0)
      switch (t.key) {
        case "TALB":
          e.album = t.data;
          break;
        case "TIT2":
          e.title = t.data;
          break;
        case "TPE1":
          e.performer = t.data;
          break;
        case "WXXX":
          t.description !== void 0 &&
            (e.links === void 0 && (e.links = []),
            e.links.some((r) => r.url === t.data) || e.links.push({ description: t.description ?? "", url: t.data }));
          break;
        case "PRIV":
          (t.owner === "com.apple.radio.adamid" && (e.storefrontAdamIds = Gc(t.data)),
            t.owner === "com.apple.radio.ping.jingle" && (e.blob = Yc(t.data)));
          break;
      }
  return new Wc(e);
}
function by(i) {
  const e = {};
  for (const t of i) {
    if (!Xp(t) || t?.value === void 0) continue;
    const r = t.value;
    switch (r.key) {
      case "TALB":
        e.album = r.data;
        break;
      case "TIT2":
        e.title = r.data;
        break;
      case "TPE1":
        e.performer = r.data;
        break;
      case "WXXX":
        ((e.links = e.links ?? []),
          e.links.some(({ url: s }) => s === r.data) ||
            e.links.push({ description: r.description ?? "", url: r.data }));
        break;
      case "PRIV": {
        const s = r.owner || r.info;
        (s === "com.apple.radio.ping.jingle" && (e.blob = Yc(r.data)),
          s === "com.apple.radio.adamid" && (e.storefrontAdamIds = Gc(r.data)));
        break;
      }
    }
  }
  return new Wc(e);
}
function Gc(i) {
  let e;
  i.constructor.name === "Uint8Array" ? (e = new TextDecoder("utf-8").decode(i)) : (e = i);
  const t = e.trim().split(",");
  if (t.length === 0) return;
  const r = (n) => n === void 0 || n === "",
    s = {};
  for (const n of t) {
    const [a, o] = n.split(":", 2).map((c) => c.trim());
    !r(a) && !r(o) && o !== "0" && s[a] === void 0 && (s[a] = o);
  }
  return s;
}
function Yc(i) {
  return typeof i == "string" ? Uint8Array.from(atob(i), (e) => e.charCodeAt(0)) : i;
}
class _y {
  constructor(e) {
    this.data = e;
    const t = new DataView(e.buffer);
    let r = 8;
    if (e[r] !== 1) return;
    ((r += 4), (this.timeScale = t.getUint32(r)), (r += 4));
    const n = t.getUint32(r);
    r += 4;
    const a = t.getUint32(r);
    if (((r += 4), (this.presentationTime = 2 ** 32 * n + a), !Number.isSafeInteger(this.presentationTime)))
      throw ((this.presentationTime = Number.MAX_SAFE_INTEGER), new Error("Failed to create 64 bit integer"));
    ((this.eventDuration = t.getUint32(r)), (r += 4), (this.id = t.getUint32(r)), (r += 4));
    const [o, c] = Wa(e, r);
    ((r += c + 1), (this.schemeIdUri = o));
    const [l, h] = Wa(e, r);
    ((r += h + 1), (this.payload = e.subarray(r, e.byteLength)), (this.id3 = jc.parse(this.payload)));
  }
  schemeIdUri;
  eventDuration;
  presentationTime;
  payload;
  timeScale;
  id3;
  id;
  _timedMetadata;
  get length() {
    return this.data.length;
  }
  get elementPresentationTime() {
    const { presentationTime: e, timeScale: t } = this;
    return e && t ? Math.round(e / t) : NaN;
  }
  get timedMetadata() {
    if (this._timedMetadata) return this._timedMetadata;
    const e = this.id3?.frames;
    if (e) return ((this._timedMetadata = vy(e)), this._timedMetadata);
  }
}
class Ty {
  constructor(e, t) {
    ((this._currentTime = e), (this._onDidChange = t), (this._getCurrentEmsg = this._getCurrentEmsg.bind(this)));
  }
  _currentEmsgInterval;
  _emsgLookup = {};
  _currentEmsg;
  processEmsgs(e) {
    const t = my(e);
    t.length &&
      (this._currentEmsgInterval || (this._currentEmsgInterval = setInterval(this._getCurrentEmsg, 1e3)),
      t.forEach((r) => {
        const s = new _y(r);
        this._emsgLookup[s.elementPresentationTime] = s;
      }));
  }
  stop() {
    const { _currentEmsgInterval: e } = this;
    e && clearInterval(e);
  }
  _getCurrentEmsg() {
    const { _currentTime: e, _emsgLookup: t } = this,
      r = Math.round(e()),
      s = [],
      n = Object.keys(t);
    for (let o = 0; o < n.length; o++) {
      const c = parseInt(n[o], 10);
      if (c < r) s.push(c);
      else break;
    }
    const a = s.pop();
    if (a) {
      const o = t[a];
      if (!o) return;
      const { _currentEmsg: c, _onDidChange: l } = this,
        h = c?.payload,
        m = o.payload;
      ((!h || !an(h, m)) && ((this._currentEmsg = o), l(o)), this._cleanupEmsgs(a));
    }
  }
  _cleanupEmsgs(e) {
    const { _emsgLookup: t } = this;
    Object.keys(t).forEach((s) => {
      parseInt(s, 10) < e && delete t[s];
    });
  }
}
class Ey {
  constructor(e, t, r) {
    ((this._item = e),
      (this._timedMetadataManager = new Ty(
        () => t.currentTime,
        (s) => {
          r.publish(Pe.bufferTimedMetadataDidChange, {
            item: this._item,
            metadata: s.timedMetadata,
            position: t.currentTime,
            playingDate: void 0,
          });
        },
      )));
  }
  _timedMetadataManager;
  process(e, t) {
    const { _item: r } = this;
    try {
      r.isLiveRadioStation
        ? this._processLiveRadioSegment(e, t)
        : r.hasOffersHlsUrl && this._processHlsOffersSegment(e, t);
    } catch (s) {
      u.error("Error processing segment", s);
    }
  }
  stop() {
    this._timedMetadataManager.stop();
  }
  _processHlsOffersSegment(e, t) {
    e.isInitSegment && Ga(t);
  }
  _processLiveRadioSegment(e, t) {
    (e.isInitSegment && Ga(t), this._timedMetadataManager.processEmsgs(t));
  }
}
var ky = Object.defineProperty,
  Sy = Object.getOwnPropertyDescriptor,
  In = (i, e, t, r) => {
    for (var s = Sy(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && ky(e, t, s), s);
  };
const b = u.createChild("mse"),
  Iy = _e.get("mk-mse-buffer"),
  { manifestParsed: za } = U;
class Ar {
  dispatcher;
  mediaSource;
  sourceBuffer;
  element;
  _currentTime;
  currentlyLoadingSegmentIndex;
  duration;
  firstSegmentLoadPromise = Promise.resolve();
  hasKickstarted = !1;
  isOverBufferLimit;
  seekResolver;
  seekWhenUpdated;
  segmentIndexToFetch = -1;
  segmentProcessor;
  timeToTrim = 10;
  isAtEndOfStream = !1;
  isFullyBuffered = !1;
  _playableUrl;
  clip;
  deferredRemoves = [];
  timestampOffsetAdjustment;
  playbackTimeline;
  currentTimestampOffset = 0;
  nextSeamlessTransition;
  constructor({ dispatcher: e, element: t, manifest: r, currentTime: s, duration: n, clip: a }) {
    ((this.dispatcher = e),
      (this.clip = a),
      (this.element = t),
      (this.mediaSource = new MediaSource()),
      this.mediaSource.addEventListener("sourceopen", this.onSourceOpen),
      (this.segmentProcessor = new Ey(r.mediaItem, t, e)),
      (this.playbackTimeline = { current: { manifest: r } }),
      r.addEventListener(za, this.onManifestParsed),
      (this._currentTime = s || 0),
      (this.duration = n),
      (window.mseBuffer = this));
  }
  onSourceOpen() {
    b.debug("mediaSource open handler");
    const { mediaSource: e } = this;
    if (e.activeSourceBuffers.length > 0) {
      b.debug("not adding new source buffer");
      return;
    }
    b.debug("adding new source buffer");
    const t = e.addSourceBuffer(Sc);
    ((this.sourceBuffer = t), t.addEventListener("updateend", this.updateEndHandler));
    const { clip: r, hasAppendWindowSupport: s } = this;
    (r &&
      (s
        ? (b.debug("appendWindowStart/End", r.start, r.end),
          (t.appendWindowStart = r.start),
          (t.appendWindowEnd = r.end))
        : (b.debug("seeking for clip", r.start), qe(this.seek(r.start)))),
      this.updateSegmentToFetch(0, !0));
  }
  setNextManifest(e) {
    (b.debug("setting next manifest for ", e.mediaItem.title),
      this.nextSeamlessTransition
        ? (b.debug(`abandoning transition scheduled for ${this.nextSeamlessTransition}`),
          this.revertSeamlessTransition(!0),
          (this.playbackTimeline.next = { manifest: e }))
        : ((this.playbackTimeline.next = { manifest: e }),
          this.isFullyBuffered &&
            (b.debug("current song is fully buffered, beginning transition to next"),
            this.transitionToNextManifest())));
  }
  isItemPlaying(e) {
    const { playbackTimeline: t } = this,
      r = this.nextSeamlessTransition ? t.previous?.manifest.mediaItem : t.current?.manifest.mediaItem;
    return r ? (b.debug(`isItemPlaying ${e.title}, ${r.title}, ${e.id === r.id}`), e.id === r.id) : !1;
  }
  get currentItem() {
    return this.manifest.mediaItem;
  }
  get playableUrl() {
    let e = this._playableUrl;
    return (
      e || ((e = window.URL.createObjectURL(this.mediaSource)), b.debug("created url", e), (this._playableUrl = e), e)
    );
  }
  get segments() {
    const { manifest: e, clip: t } = this;
    return t ? e.segmentsForTimeRange(t) : e.segments || [];
  }
  get currentTime() {
    return this._currentTime;
  }
  set currentTime(e) {
    if (((e = e + this.currentTimestampOffset), this._currentTime === e)) return;
    const { nextSeamlessTransition: t } = this;
    if (t && e >= t) {
      (b.debug("setting offset to", t),
        (this.currentTimestampOffset = t || 0),
        (this.nextSeamlessTransition = void 0),
        (this.duration = this.manifest.mediaItem.playbackDuration / 1e3),
        b.debug("buffer setting duration to", this.duration));
      const a = { previous: this.playbackTimeline.previous?.manifest?.mediaItem, current: this.manifest.mediaItem };
      (b.debug("dispatching seamless audio transition", a), this.dispatcher.publish(Pe.seamlessAudioTransition, a));
    }
    this._currentTime = e;
    const { isOverBufferLimit: r, timeToTrim: s } = this,
      n = e > this.timeToTrim;
    r && n && (b.debug("buffer over limit, trimming to ", s), this.removeToTime(s), (this.timeToTrim += 10));
  }
  get hasAppendWindowSupport() {
    return this.sourceBuffer?.appendWindowStart !== void 0;
  }
  async seek(e) {
    const { duration: t, seekWhenUpdated: r, sourceBuffer: s } = this;
    if (
      (this.resolveSeekPromise(!1),
      b.debug("seek to ", e),
      (e = +e),
      e > t && (b.debug("rounding seek time to duration", e, t), (e = t)),
      !s)
    )
      return !1;
    if ((this.revertSeamlessTransition(), s.updating))
      return (
        b.debug("sourcebuffer updating, deferring seek"),
        new Promise((o) => {
          (r && r.resolve(!1), (this.seekWhenUpdated = { seek: this.seek.bind(this, e), resolve: o }));
        })
      );
    ((this.currentlyLoadingSegmentIndex = void 0),
      this.updateSegmentToFetch(0, !0),
      this.removeToTime(e),
      (this.timeToTrim = Math.floor(e / 10) * 10));
    const n = this.getSegmentForTime(e);
    (n !== 0 && (await this.firstSegmentLoadPromise),
      b.debug("seeking to", e, "segment", n),
      this.updateSegmentToFetch(n, !0));
    const a = new Promise((o) => {
      this.seekResolver = { time: e, resolve: o };
    });
    return (this.checkSeekBuffered(), a);
  }
  clearNextManifest() {
    (this.revertSeamlessTransition(!0), (this.playbackTimeline.next = void 0));
  }
  revertSeamlessTransition(e = !1) {
    const { playbackTimeline: t, nextSeamlessTransition: r } = this;
    if (!r || !t.previous) {
      b.debug("no need to revert, no transition");
      return;
    }
    ((this.isAtEndOfStream = e),
      b.debug("reverting seamless transition with discardNextManifest", e),
      e ? this.clearBufferToEnd(r) : this.clearBuffer(),
      b.debug(`abandoning transition to ${this.manifest.mediaItem.title}`),
      (t.next = e ? void 0 : t.current),
      (t.current = t.previous),
      (t.previous = void 0));
    const s = this.manifest.mediaItem;
    (b.debug(`current item reverted to ${s.title}`),
      (this.nextSeamlessTransition = void 0),
      (this.duration = s.playbackDuration / 1e3),
      b.debug(`reverted duration to ${this.duration}`),
      e ||
        ((this.currentTimestampOffset = 0),
        (this.timestampOffsetAdjustment = 0),
        b.debug("reverted currentTimestampOffset and timestampOffsetAdjustment to 0")),
      this.printInfo(),
      (this.segmentIndexToFetch = -1));
  }
  get streamHasEnding() {
    return !this.manifest.mediaItem.isLiveRadioStation;
  }
  stop() {
    (this.segmentProcessor.stop(), this.setEndOfStream(), this.remove());
  }
  remove() {
    b.debug("removing sourceBuffer and mediaSource");
    const { sourceBuffer: e, mediaSource: t } = this;
    (this.seekResolver?.resolve(!1), this.manifest.removeEventListener(za, this.onManifestParsed));
    const r = this._playableUrl;
    (r && (b.debug("revoking url", r), window.URL.revokeObjectURL(r)),
      t.removeEventListener("sourceopen", this.onSourceOpen),
      e && (e.removeEventListener("updateend", this.updateEndHandler), (this.sourceBuffer = void 0)));
  }
  onManifestParsed() {
    const e = this.segmentIndexToFetch + 1;
    (b.debug("manifestParsed, loading segment", e), this.updateSegmentToFetch(e, !0));
  }
  updateEndHandler() {
    if ((this.kickstartBuffer(), this.clearDeferredRemove())) return;
    if ((b.debug("update end", this.seekWhenUpdated), this.seekWhenUpdated)) {
      b.debug("updateEndHandler resolving seekWhenUpdated");
      const { seekWhenUpdated: s } = this;
      (qe(s.seek().then(s.resolve)), (this.seekWhenUpdated = void 0));
      return;
    }
    this.checkSeekBuffered();
    const { clip: e, sourceBuffer: t, hasAppendWindowSupport: r } = this;
    if (e && t && !r) {
      const { buffered: s } = t;
      if (this.isTimeBuffered(e.end + 1)) {
        const n = s.end(s.length - 1);
        (b.debug("clipping sourcebuffer to", e.end, n), t.remove(e.end, n));
        return;
      }
    }
    if (this.isAtEndOfStream) {
      (b.debug("buffer is at end of stream"),
        this.streamHasEnding &&
          (b.debug("isAtEndOfStream, not fetching any more segments"),
          this.playbackTimeline.next || this.setEndOfStream(),
          this.transitionToNextManifest()),
        (this.isAtEndOfStream = !1));
      return;
    }
    (b.debug("updateEndHandler invoking loadSegment"), qe(this.loadSegment()));
  }
  clearDeferredRemove() {
    if (this.deferredRemoves.length === 0) return !1;
    const e = this.deferredRemoves.shift();
    return (
      b.trace("clearDeferredRemove", e),
      e.end > e.start
        ? this.sourceBuffer?.remove(e.start, e.end)
        : e.end <= e.start &&
          b.warn(
            `Trying to remove an invalid time range from SourceBuffer: |${e.start} <=> ${e.end}| (${e.end - e.start})`,
          ),
      !0
    );
  }
  transitionToNextManifest() {
    b.debug("beginning transition to next manifest");
    const { playbackTimeline: e, sourceBuffer: t } = this;
    if (!e.next || !t) {
      b.debug("no next manifest");
      return;
    }
    const r = this.endOfBufferTime || this.currentTimestampOffset;
    (b.debug("setting seamless transition at", r),
      (this.nextSeamlessTransition = r),
      (this.timestampOffsetAdjustment = r),
      (this.playbackTimeline.current.endTime = r),
      (e.previous = e.current),
      b.debug("previous manifest set to", e.previous?.manifest.mediaItem.title),
      (e.current = e.next),
      b.debug("current manifest set to", e.current.manifest.mediaItem.title),
      (e.next = void 0),
      this.updateSegmentToFetch(0, !0),
      this.printInfo());
  }
  updateSegmentToFetch(e, t = !1) {
    this.segments.length &&
      e < this.segments.length &&
      e !== this.segmentIndexToFetch &&
      ((this.segmentIndexToFetch = e),
      t && (b.debug("updateSegmentToFetch invoking loadSegment"), qe(this.loadSegment())));
  }
  async loadSegment() {
    const e = this.segmentIndexToFetch,
      t = this.segments[e];
    if (e === this.currentlyLoadingSegmentIndex) {
      b.debug(`segment ${e} is currently loading, not loading it again`);
      return;
    }
    if (t)
      try {
        (b.debug(`begin loadSegment ${e}`), (this.currentlyLoadingSegmentIndex = e));
        const r = t.load();
        e === 0 && (this.firstSegmentLoadPromise = r);
        const s = await r;
        if (e !== 0 && e !== this.segmentIndexToFetch) {
          b.debug("load segment index to fetch changed, not processing bytes for segment", e);
          return;
        }
        (this.segmentProcessor.process(t, s), b.debug(`loadSegment processed: ${e}`));
        const { sourceBuffer: n, timestampOffsetAdjustment: a } = this;
        if (!n) return;
        try {
          (typeof a == "number" &&
            (b.debug("adjusting timestampOffset of sourcebuffer to", a),
            (n.timestampOffset = a),
            (this.timestampOffsetAdjustment = void 0)),
            n.appendBuffer(s),
            (this.isFullyBuffered = !1),
            (this.isOverBufferLimit = !1),
            b.debug("appended to buffer", s.length),
            this.printBufferTimes(),
            e === this.segments.length - 1
              ? (this.isAtEndOfStream = !0)
              : e === this.segmentIndexToFetch &&
                (b.debug("loadSegment bumping segment index to fetch to ", e + 1), this.updateSegmentToFetch(e + 1)));
        } catch (o) {
          o.name === "QuotaExceededError"
            ? ((this.isOverBufferLimit = !0), b.debug("reached buffer limit"))
            : b.warn("Error appending to source buffer", o);
        }
      } catch (r) {
        (b.error("Error loading segment", r), this.dispatcher.publish(Pe.loadSegmentError, r));
      } finally {
        this.currentlyLoadingSegmentIndex = void 0;
      }
  }
  setEndOfStream() {
    const { sourceBuffer: e, mediaSource: t } = this;
    !e ||
      t.readyState === "ended" ||
      (!e.updating && t.readyState === "open"
        ? (b.debug("mediaSource.endOfStream"), t.endOfStream(), (this.isFullyBuffered = !0))
        : b.error("Could not end of stream (updating, readyState)", e.updating, t.readyState));
  }
  removeToTime(e) {
    (b.debug("removing to time", e),
      e > 0 && (this.isTimeBuffered(e) || this.isOverBufferLimit) && this.safeSourceBufferRemove(0, e));
  }
  safeSourceBufferRemove(e, t) {
    b.trace("safeSourceBufferRemove", e, t);
    const { sourceBuffer: r } = this;
    r &&
      (r.updating
        ? this.deferredRemoves.push({ start: e, end: t })
        : t <= e
          ? b.warn(`Trying to remove an invalid time range from SourceBuffer: |${e} <=> ${t}| (${t - e})`)
          : r.remove(e, t));
  }
  get previousOffset() {
    return this.playbackTimeline?.previous?.endTime || 0;
  }
  get manifest() {
    return this.playbackTimeline.current?.manifest;
  }
  checkSeekBuffered() {
    const { seekResolver: e, currentTimestampOffset: t } = this;
    if (!e) return;
    const { time: r } = e,
      s = r + t,
      n = this.isTimeBuffered(s);
    (b.debug("resolving seek for time, adjustedTime, isBuffered", r, s, n),
      this.printBufferTimes(),
      n &&
        (b.debug("resolving seek to true for time:", s), (this.element.currentTime = s), this.resolveSeekPromise(!0)));
  }
  resolveSeekPromise(e) {
    this.seekResolver && (this.seekResolver.resolve(e), (this.seekResolver = void 0));
  }
  get endOfBufferTime() {
    const e = this.sourceBuffer?.buffered;
    return !e || !e.length ? !1 : e.end(e.length - 1);
  }
  isTimeBuffered(e) {
    const t = this.sourceBuffer?.buffered;
    if (!t) return !1;
    for (let r = 0; r < t.length; r++)
      if ((b.debug("isTimeBuffered", t.start(r), e, t.end(r)), e >= t.start(r) && e <= t.end(r))) return !0;
    return !1;
  }
  clearBufferToEnd(e) {
    const { sourceBuffer: t } = this;
    if (!t || !t.buffered) return;
    const r = t.buffered.end(t.buffered.length - 1);
    this.safeSourceBufferRemove(e, r);
  }
  clearBuffer() {
    const { sourceBuffer: e } = this;
    if (!e || !e.buffered) return;
    const t = e.buffered;
    for (let r = 0; r < t.length; r++) this.safeSourceBufferRemove(t.start(r), t.end(r));
  }
  get bufferTimesString() {
    const e = this.sourceBuffer?.buffered;
    if (!e) return "";
    const t = [];
    for (let r = 0; r < e.length; r++) t.push(`start ${e.start(r)} end: ${e.end(r)}`);
    return t.join(",");
  }
  printBufferTimes() {
    Iy && b.debug("buffer times", this.bufferTimesString);
  }
  getSegmentForTime(e) {
    return Math.floor(e / 10) + 1;
  }
  kickstartBuffer() {
    const { hasKickstarted: e, element: t, clip: r } = this,
      { buffered: s } = t;
    if (!e) {
      if (this.manifest.mediaItem.isSong) {
        r && this.isTimeBuffered(r.start) && ((t.currentTime = r.start), (this.hasKickstarted = !0));
        return;
      }
      s.length && ((t.currentTime = s.start(0)), (this.hasKickstarted = !0));
    }
  }
  printInfo() {
    const { playbackTimeline: e } = this;
    (b.info("---- Buffer Info ----"),
      b.info("currently buffering item", e.current.manifest.mediaItem.title),
      b.info("next item to buffer", e.next?.manifest.mediaItem.title),
      b.info("previously buffered item", e.previous?.manifest.mediaItem.title),
      b.info("currentTimestampOffset", this.currentTimestampOffset),
      b.info("currentTime", this.currentTime),
      b.info("duration", this.duration),
      b.info("nextSeamlessTransition", this.nextSeamlessTransition),
      b.info("timestampOffsetAdjustment", this.timestampOffsetAdjustment),
      b.info("buffered times", this.bufferTimesString),
      b.info("isAtEndOfStream", this.isAtEndOfStream),
      b.info("isFullyBuffered", this.isFullyBuffered),
      b.info("segmentIndexToFetch", this.segmentIndexToFetch),
      b.info("segments.length", this.segments.length),
      b.info("---- End Buffer Info ----"));
  }
}
In([T()], Ar.prototype, "onSourceOpen");
In([T()], Ar.prototype, "onManifestParsed");
In([T()], Ar.prototype, "updateEndHandler");
var Py = Object.defineProperty,
  wy = Object.getOwnPropertyDescriptor,
  qt = (i, e, t, r) => {
    for (var s = wy(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Py(e, t, s), s);
  };
const { mediaPlaybackError: ei } = f,
  Ay = 15;
class Ge extends Sr {
  currentAudioTrack = void 0;
  currentTextTrack = void 0;
  currentVideoTrack = void 0;
  textTracks = [];
  audioTracks = [];
  videoTracks = [];
  audio;
  isSeamlessAudioTransitionsEnabled = !1;
  delaySeamlessCdmUpdates = !1;
  isTabHidden = !1;
  pendingPlaybackItem;
  extension;
  mediaPlayerType = "audio";
  playerName = "AudioPlayer";
  manifest;
  nextManifest;
  constructor(e) {
    super(e);
    const t = e.bag?.features ?? {};
    ((this.isSeamlessAudioTransitionsEnabled = !!t["seamless-audio-transitions"]),
      (this.delaySeamlessCdmUpdates = !!t["delay-seamless-cdm-updates"]),
      (window.audioPlayer = this),
      this._dispatcher.subscribe(Pe.loadSegmentError, this.onLoadSegmentError),
      this.setupVisibilityTracking());
  }
  async destroy() {
    (super.destroy(),
      this._dispatcher.unsubscribe(Pe.loadSegmentError, this.onLoadSegmentError),
      this.tearDownVisibilityTracking());
  }
  onLoadSegmentError(e) {
    (this._dispatcher.publish(ei, new p(p.Reason.MEDIA_SESSION, e)), this.destroy());
  }
  get currentPlayingDate() {}
  get isPlayingAtLiveEdge() {
    return !1;
  }
  get seekableTimeRanges() {
    return this.currentPlaybackDuration ? [{ start: 0, end: this.currentPlaybackDuration }] : void 0;
  }
  get supportsPreviewImages() {
    return !1;
  }
  get _targetElement() {
    return this.audio;
  }
  async initializeExtension() {
    ((this.extension = new Fc({
      mediaElement: this.audio,
      contentType: Sc,
      services: { runtime: this.services.runtime },
    })),
      await this.extension.initializeKeySystem(),
      this.extension.addEventListener(U.playbackLicenseError, (e) => {
        (this.resetDeferredPlay(), this._dispatcher.publish(ei, e));
      }),
      this.extension.addEventListener(U.playbackSessionError, (e) => {
        (this._dispatcher.publish(ei, new p(p.Reason.MEDIA_SESSION, e)), this.destroy());
      }));
  }
  async initializeMediaElement() {
    const e = Tn();
    ((e.autoplay = !1),
      (e.id = "apple-music-player"),
      (e.controls = !1),
      (e.muted = !1),
      (e.playbackRate = 1),
      (e.preload = "metadata"),
      (e.volume = 1),
      (this.audio = e),
      document.body.appendChild(e),
      u.debug("initializedMediaElement", e));
  }
  removeEventHandlers() {
    (this._targetElement.removeEventListener("timeupdate", this.onTimeUpdate),
      this._targetElement.removeEventListener("timeupdate", this.delayedCdmUpdateCheck),
      super.removeEventHandlers());
  }
  async stopMediaElement() {
    (await super.stopMediaElement(), await this.tearDownManifests(), this._buffer?.stop(), (this._buffer = void 0));
  }
  async preloadItem(e) {
    const { extension: t, nextManifest: r } = this,
      s = this._buffer;
    if (e.type !== "song" || !(s && t) || !this.isSeamlessAudioTransitionsEnabled || e.playRawAssetURL) return;
    if (r?.mediaItem.id === e.id) {
      u.debug("already have next manifest for ", e.title);
      return;
    }
    if (r && r.mediaItem.id !== e.id) {
      u.debug(`preventing race condition: not overwriting nextManifest for ${r.mediaItem.title} with ${e.title}`);
      return;
    }
    (this._targetElement.removeEventListener("timeupdate", this.onTimeUpdate),
      this._targetElement.addEventListener("timeupdate", this.onTimeUpdate),
      u.debug("player preparing next manifest for", e.title));
    const n = await this.loadAndParseManifest(e, !1);
    (s.setNextManifest(n), t.setMediaItem(e), (this.nextManifest = n));
  }
  async playItemFromUnencryptedSource(e, t, r, s) {
    throw new g("mk-244", g.Reason.CONTENT_UNSUPPORTED, {
      description: "AudioPlayer cannot play unencrypted sources",
      data: { url: e, item: s },
    });
  }
  async playItemFromEncryptedSource(e, t = !1, r) {
    const s = this._paused && !t;
    u.debug("playItemFromEncryptedSource", e.title);
    const { browser: n } = this.services.runtime,
      a = n.isSafari && n.major === 26;
    if (this.isTabHidden && this.extension?.isFairplay && tr(e) && a && !t)
      return (
        u.debug("Tab is hidden, suspending FairPlay song playback for", e.title),
        (this.pendingPlaybackItem = e),
        Promise.resolve()
      );
    const o = s ? void 0 : this.startPlaybackSequence();
    if (e.playRawAssetURL)
      return (
        (e.playbackType = ce.unencryptedFull),
        (this.nowPlayingItem = e),
        await this._playAssetURL(e.assetURL, s),
        this.finishPlaybackSequence()
      );
    const { extension: c } = this;
    if ((this.delaySeamlessCdmUpdates && this.extension?.session?.applyDelayedCdmUpdates(), !c)) return o;
    ((c.initiated = t),
      c.setMediaItem(e),
      (e.playbackType = ce.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = x.loading));
    const l = await this.getManifestForItem(e);
    this.manifest = l;
    const h = Bc();
    if (((e.isSong || (c.isFairplay && h)) && (c.extURI = l.extURI), (e.state = x.ready), c.isFairplay && !h)) {
      let m = e.assetURL;
      (r?.startTime && (m += `#t=${r.startTime}`), await this._playAssetURL(m, s));
    } else {
      const m = this._buffer;
      !m || !this.isSeamlessAudioTransitionsEnabled || !m.isItemPlaying(l.mediaItem)
        ? await this.beginNewBufferForItem(s, l, r)
        : u.debug("already have buffer, continuing playback");
    }
    return this.finishPlaybackSequence();
  }
  async getManifestForItem(e) {
    u.debug("reconciling item to play against playing item");
    const { nextManifest: t, manifest: r, isSeamlessAudioTransitionsEnabled: s } = this,
      n = this._buffer;
    if (!n || !r)
      return (
        u.debug("no buffer or manifest, creating manifest [title, buffer, manifest]", e.title, !!n, !!r),
        this.loadAndParseManifest(e)
      );
    if (!s)
      return (
        u.debug("seamless transitions disabled, stopping and creating manifest for", e.title),
        await this.tearDownManifests(),
        this.loadAndParseManifest(e)
      );
    const a = !n.isItemPlaying(e);
    u.debug("itemMismatch", a);
    let o;
    const c = t?.mediaItem.id === e.id;
    return (
      t && !a && c
        ? (u.debug(`replacing manifest for ${r.mediaItem.title} with next manifest ${t.mediaItem.title}`),
          (o = t),
          (this.nextManifest = void 0),
          u.debug("cease listening for keys on manifest for", r.mediaItem.title),
          await this.tearDownManifest(r))
        : a
          ? t?.mediaItem.id !== e.id
            ? (u.debug(`item to play ${e.title} does not match playing or next items, tearing down all manifests`),
              await this.tearDownManifests(),
              (o = await this.loadAndParseManifest(e)))
            : (u.debug(`item to play ${e.title} matches next item, tearing down current manifest`),
              await this.tearDownManifest(r),
              (o = t))
          : (u.debug("item is already playing, returning existing manifest"), (o = r)),
      u.debug("getManifestForItem loading keys for", o.mediaItem.title),
      this.extension?.session?.loadKeys(o.keyValues, o.mediaItem),
      o
    );
  }
  async seekToTime(e) {
    const t = this._buffer;
    if (t) {
      if ((u.debug("audio-player: buffer seek to", e), !(await t.seek(e)))) return;
      this.isSeamlessAudioTransitionsEnabled && this.onTimeUpdate();
    } else (u.debug("audio-player: media element seek to", e), (this._targetElement.currentTime = e));
  }
  async tearDownManifests() {
    ((this.manifest = await this.tearDownManifest(this.manifest)),
      (this.nextManifest = await this.tearDownManifest(this.nextManifest)));
  }
  async tearDownManifest(e) {
    const { extension: t } = this;
    e &&
      (u.debug("tearing down manifest for", e.mediaItem.title),
      e.stop(),
      t && (await t.clearSessions(e.keyValues)),
      e.removeEventListener(gi.keysParsed, this.loadKeysHandler));
  }
  async loadAndParseManifest(e, t = !0) {
    u.debug(`will load and parse manifest for ${e.title}, loadKeys ${t}`);
    let r;
    try {
      return (
        (r = await Vc.load(e, {
          cache: !1,
          services: { runtime: this.services.runtime, request: this.services.request },
        })),
        t && r.addEventListener(gi.keysParsed, this.loadKeysHandler),
        r.parse(),
        r
      );
    } catch (s) {
      this.resetDeferredPlay();
      const n = new p(p.Reason.NETWORK_ERROR, "Could not fetch manifest");
      throw ((n.data = s), this._dispatcher.publish(ei, n), n);
    }
  }
  onTimeUpdate() {
    if (!this._buffer) return;
    const { currentPlaybackTimeRemaining: t, nextManifest: r, delaySeamlessCdmUpdates: s } = this;
    r &&
      t < Ay &&
      (u.debug("player loading keys for", r.mediaItem.title, s),
      s
        ? (this.extension?.session?.loadKeys(r.keyValues, r.mediaItem, { delayCdmUpdate: !0 }),
          this._targetElement.addEventListener("timeupdate", this.delayedCdmUpdateCheck))
        : this.extension?.session?.loadKeys(r.keyValues, r.mediaItem),
      this._targetElement.removeEventListener("timeupdate", this.onTimeUpdate));
  }
  delayedCdmUpdateCheck() {
    const e = this.nowPlayingItem?.playbackDuration,
      t = e ? e / 1e3 : this.currentPlaybackDuration,
      r = this._currentTime,
      s = Number((t - r).toFixed(3));
    if (s < 1) {
      const n = s * 1e3;
      (u.debug("delayed CDM update in ", n),
        setTimeout(() => {
          (u.debug("applying delayed CDM update"), this.extension?.session?.applyDelayedCdmUpdates());
        }, n),
        this._targetElement.removeEventListener("timeupdate", this.delayedCdmUpdateCheck));
    }
  }
  loadKeysHandler(e) {
    this.extension?.session?.loadKeys(e.keys, e.item);
  }
  async beginNewBufferForItem(e, t, r) {
    if (
      (u.debug("creating new MseBuffer for item", t.mediaItem.title, e),
      this._buffer && (u.debug("stopping old buffer"), this._buffer.stop()),
      (this._buffer = new Ar({
        dispatcher: this._dispatcher,
        element: this._targetElement,
        duration: t.mediaItem.playbackDuration / 1e3,
        manifest: t,
      })),
      await this._playAssetURL(this._buffer.playableUrl, !0),
      !e)
    ) {
      let s = Promise.resolve();
      return (r?.startTime && (s = this.seekToTime(r.startTime)), s.then(() => this._playMedia()));
    }
  }
  async setPresentationMode(e) {
    return Promise.resolve();
  }
  async loadPreviewImage(e) {}
  setupVisibilityTracking() {
    (document.addEventListener(ar, this.onVisibilityChange), (this.isTabHidden = document[Ls] === "hidden"));
  }
  tearDownVisibilityTracking() {
    document.removeEventListener(ar, this.onVisibilityChange);
  }
  onVisibilityChange() {
    const e = this.isTabHidden;
    if (
      ((this.isTabHidden = document[Ls] === "hidden"),
      u.debug("Tab visibility changed:", { wasHidden: e, isTabHidden: this.isTabHidden }),
      e && !this.isTabHidden && this.pendingPlaybackItem && this.extension?.isFairplay && tr(this.pendingPlaybackItem))
    ) {
      u.debug("Tab became visible, resuming FairPlay song playback for", this.pendingPlaybackItem.title);
      const t = this.pendingPlaybackItem;
      ((this.pendingPlaybackItem = void 0),
        this.playItemFromEncryptedSource(t, !1).catch((r) => {
          (u.error("Failed to resume FairPlay song playback after tab visibility change:", r),
            this._dispatcher.publish(ei, new p(p.Reason.MEDIA_SESSION, r)));
        }));
    }
  }
}
qt([T()], Ge.prototype, "onLoadSegmentError");
qt([Et(250)], Ge.prototype, "seekToTime");
qt([T()], Ge.prototype, "onTimeUpdate");
qt([T()], Ge.prototype, "delayedCdmUpdateCheck");
qt([T()], Ge.prototype, "loadKeysHandler");
qt([T()], Ge.prototype, "onVisibilityChange");
class Ry extends Ht {
  _currentSession;
  _keySystemAccess;
  _mediaKeysPromise;
  _mediaKeysServerCertificate;
  async attachMedia(e, t) {
    ((this.keySystem = t.keySystem),
      (this._keySystemAccess = t),
      e.addEventListener("encrypted", this.boundHandleSessionCreation, !1));
  }
  detachMedia(e) {
    e.removeEventListener("encrypted", this.boundHandleSessionCreation);
  }
  async createSession(e) {
    u.debug("Encrypted createSession", e);
    const t = this._keySystemAccess;
    if (!t) return;
    const { initData: r, initDataType: s, target: n } = e;
    if (
      (this._mediaKeysPromise ||
        (this._mediaKeysPromise = new Promise(async (a, o) => {
          const c = await t.createMediaKeys();
          try {
            await n.setMediaKeys(c);
          } catch (h) {
            (this.dispatchKeyError(h), o(h));
          }
          const l = await this.loadCertificateBuffer();
          (await c.setServerCertificate(l), (this._mediaKeysServerCertificate = l), a(c));
        })),
      await this._mediaKeysPromise,
      this._mediaKeysServerCertificate)
    )
      return this._createSession(n, r, s);
  }
  generatePSSH(e) {
    const t = new Uint8Array([
        0, 0, 0, 52, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29,
        33, 237, 0, 0, 0, 20, 8, 1, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]),
      r = Dt(e);
    for (let s = 0; s < r.length; s++) t[t.length - 16 + s] = r[s];
    return (u.debug("generatePSSH", t), t);
  }
  _createSession(e, t, r) {
    const s = e.mediaKeys.createSession(),
      { item: n } = this;
    if (!n) return;
    (this._teardownCurrentSession(), u.debug("creating media key session", s));
    const a = this.isWidevine && n.isSong;
    let o;
    if (a) o = this.generatePSSH(this.extID);
    else {
      const h = ty(new Uint8Array(t)).find((y) => y.isWidevine)?.rawBytes,
        m = h ? Qe(h) : void 0;
      (u.debug("extracted uri", m), (s.extURI = m), (o = t));
    }
    return (
      s.addEventListener("message", this.startLicenseSession),
      (this._currentSession = s),
      s.generateRequest(r, o).catch((c) => {
        if (c.message.match(/generateRequest.*\(75\)/)) return s.generateRequest(r, o);
        throw c;
      })
    );
  }
  _teardownCurrentSession() {
    this._currentSession &&
      (u.debug("tearing down media key session", this._currentSession),
      this._currentSession.removeEventListener("message", this.startLicenseSession),
      (this._currentSession = void 0));
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(e, t, r) {}
  async clearSessions() {}
}
class Cy extends Tt {
  audioTracks = [];
  textTracks = [];
  videoTracks = [];
  session;
  extURI;
  hasMediaSession;
  initiated;
  isFairplay;
  constructor(e) {
    (super(e), (this.extURI = ""), (this.initiated = !0), (this.isFairplay = !0), (this.hasMediaSession = !0));
  }
  destroy(e) {}
  setMediaItem(e) {}
  async initializeKeySystem() {
    this.session = new Ry();
  }
  async clearSessions() {}
}
class Oy {
  id = ki();
  playerName = "PlayerStub";
  bitrate = Re.STANDARD;
  audioTracks = [];
  currentBufferedProgress = 0;
  currentPlaybackDuration = 0;
  currentPlaybackProgress = 0;
  currentPlaybackTime = 0;
  currentPlaybackTimeRemaining = 0;
  currentPlayingDate = void 0;
  isPlayingAtLiveEdge = !1;
  isPlaying = !1;
  isPrimaryPlayer = !0;
  isReady = !1;
  nowPlayingItem;
  isPaused = !1;
  isStopped = !1;
  playbackState = I.none;
  playbackTargetAvailable = !1;
  playbackTargetIsWireless = !1;
  previewOnly = !1;
  supportsPreviewImages = !1;
  textTracks = [];
  videoTracks = [];
  extension = new Cy([]);
  hasAuthorization = !0;
  windowHandlers;
  isDestroyed = !1;
  services;
  _dispatcher;
  _volume = 1;
  _playbackRate = 1;
  _defaultPlaybackRate = 1;
  constructor(e) {
    ((this.services = e.services),
      (this._dispatcher = e.services.dispatcher),
      (this.windowHandlers = new $t(this, e.services.runtime)));
  }
  currentAudioTrack;
  currentTextTrack;
  currentVideoTrack;
  seekableTimeRanges;
  get hasMediaElement() {
    return !0;
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    ((this._playbackRate = e), this._dispatcher.publish(f.playbackRateDidChange, new Event("ratechange")));
  }
  get defaultPlaybackRate() {
    return this._defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    ((this._defaultPlaybackRate = e), this._dispatcher.publish(f.playbackRateDidChange, new Event("ratechange")));
  }
  get volume() {
    return this._volume;
  }
  set volume(e) {
    ((this._volume = e), this._dispatcher.publish(f.playbackVolumeDidChange, new Event("volumeChange")));
  }
  destroy() {}
  dispatch() {}
  async exitFullscreen() {}
  async loadPreviewImage(e) {}
  async initialize() {}
  calculateTime(e) {
    return e;
  }
  clearNextManifest() {}
  mute() {}
  newSeeker() {
    return new gn(this);
  }
  async pause(e) {}
  async play() {}
  async playItemFromEncryptedSource(e, t, r) {}
  async playItemFromUnencryptedSource(e, t, r) {}
  async preload() {}
  async seekToTime(e) {}
  async requestFullscreen() {}
  setPlaybackState(e, t) {
    this.playbackState = e;
  }
  async setPresentationMode(e) {}
  showPlaybackTargetPicker() {}
  async stop(e) {}
  async stopMediaAndCleanup() {}
  supportsPictureInPicture() {
    return !1;
  }
  tsidChanged() {}
  async preloadItem(e, t) {}
  toString() {
    return `<PlayerStub id="${this.id}" isInitialized=true isDestroyed=false />`;
  }
}
class Dy extends Fc {
  destroy(e) {
    (this._session?.stopLicenseSession(), super.destroy(e));
  }
}
var My = Object.defineProperty,
  Ly = Object.getOwnPropertyDescriptor,
  Pn = (i, e, t, r) => {
    for (var s = Ly(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && My(e, t, s), s);
  };
const { mediaPlaybackError: Ny } = f,
  { playbackLicenseError: Qa, playbackSessionError: Xa } = U;
class Rr extends kn {
  playerName = "NativeSafariVideoPlayer";
  _blobUrl;
  get currentPlayingDate() {}
  get isPlayingAtLiveEdge() {
    return !1;
  }
  get seekableTimeRanges() {
    return this.currentPlaybackDuration ? [{ start: 0, end: this.currentPlaybackDuration }] : void 0;
  }
  get supportsPreviewImages() {
    return !1;
  }
  async initializeExtension() {
    if (!this.video) {
      u.warn("NativeSafariVideoPlayer.initializeExtension No video element, not initializing extension");
      return;
    }
    const e = new Dy({ mediaElement: this.video, contentType: mp, services: { runtime: this.services.runtime } });
    ((this.extension = e),
      await e.initializeKeySystem(),
      e.addEventListener(Qa, this.onPlaybackLicenseError),
      e.addEventListener(Xa, this.onPlaybackSessionError));
  }
  destroy() {
    u.debug("native-safari-video-player.destroy");
    const { extension: e, video: t } = this;
    (this._blobUrl && (URL.revokeObjectURL(this._blobUrl), (this._blobUrl = void 0)),
      !(!e || !t) &&
        (e.removeEventListener(Qa, this.onPlaybackLicenseError),
        e.removeEventListener(Xa, this.onPlaybackSessionError),
        t.removeEventListener("loadedmetadata", this.onMetadataLoaded),
        super.destroy()));
  }
  async loadPreviewImage(e) {}
  async preloadItem(e, t) {}
  async playHlsStream(e, t, r = {}) {
    u.debug("native-safari-video-player.playHlsStream", e);
    const { video: s } = this;
    if (!s) {
      const c = "NativeSafariVideoPlayer.playHlsStream(): No video element";
      throw (u.error(c), new Error(c));
    }
    this.setupTrackManagers();
    const n = this.startPlaybackSequence(),
      o = (this.services.manifest.personalizedManifests ? this.playByBlob(e, s, r) : this.playBySource(e, s, r)).then(
        () => n,
      );
    return (t && this.extension?.setMediaItem(t), s.addEventListener("loadedmetadata", this.onMetadataLoaded), o);
  }
  onPlaybackSessionError(e) {
    this._dispatcher.publish(Ny, new p(p.Reason.MEDIA_SESSION, e));
  }
  async onMetadataLoaded() {
    u.debug("native-safari-video-player.onMetadataLoaded");
    const { nowPlayingItem: e } = this;
    (e && (e.state = x.ready), await this._playMedia(), this.finishPlaybackSequence());
  }
  async seekToTime(e) {
    (u.debug("native-safari-video-player: media element seek to", e), (this._targetElement.currentTime = e));
  }
  async playByBlob(e, t, r = {}) {
    u.debug("native-safari-video-player: playing video by blob");
    const s = this.services.manifest;
    let n = await s.getManifest(e);
    if (!n && (u.debug("native-safari-video-player: fetching manifest"), (n = await s.fetchManifest(e)), !n))
      throw (u.error(`No manifest for ${e}`), new p(p.Reason.CONTENT_UNAVAILABLE, "Failed to load manifest"));
    (u.debug("native-safari-video-player: loaded manifest", !!n), await s.clearManifest(e));
    const a = n.contentType,
      o = n.content.replace(/^#EXT-X-SESSION-DATA-ITUNES:.*$/gm, ""),
      c = new Blob([o], { type: a });
    ((e = URL.createObjectURL(c)), (this._blobUrl = e));
    const l = document.createElement("source");
    (l.setAttribute("src", e),
      a && l.setAttribute("type", a),
      u.debug("native-safari-video-player: blob url", e),
      r.startTime !== void 0 && (t.currentTime = r.startTime),
      t.appendChild(l));
  }
  async playBySource(e, t, r = {}) {
    (u.debug("native-safari-video-player: playing video by source"),
      r.startTime !== void 0 && (e += `#t=${r.startTime}`),
      (t.src = e));
  }
  async stopMediaElement() {
    (u.trace("native-safari-video-player.stopMediaElement()"),
      this.hasMediaElement &&
        (u.debug(`Stopping HTMLMediaElement id=${this._targetElement.id}`, this._targetElement),
        this._targetElement.pause(),
        this.resetMediaElement()),
      this.destroy());
  }
}
Pn([T()], Rr.prototype, "onPlaybackSessionError");
Pn([T()], Rr.prototype, "onMetadataLoaded");
Pn([Et(250)], Rr.prototype, "seekToTime");
const zc = "js-cdn.music.apple.com",
  Qc = "/musickit/v3/",
  Uy = "current",
  xy = new RegExp(`^https://([a-z0-9]+-)?${(zc + Qc.replace(/v3/, "(v2|v3)")).replace(/[\.\/]/g, "\\$&")}`, "i"),
  Fy = /^https:\/\/(.*\/includes\/js-cdn)\//i,
  Ky = /^([a-z]+:)?\/\//;
function wn(i) {
  return ft() || !i ? null : document.querySelector(`script[src*="${i}"]`);
}
function Xc() {
  return typeof document > "u" || !document.querySelectorAll
    ? []
    : Array.from(document.querySelectorAll("script[src]"));
}
function By() {
  for (const i of Xc()) {
    const e = xy.exec(i.src);
    if (e) return e[1] || "";
  }
  return "";
}
function Vy() {
  for (const i of Xc()) {
    const e = Fy.exec(i.src);
    if (e) return e[1] || "";
  }
  return "";
}
function Jc() {
  return ft() ? "" : `//${By()}${zc}`;
}
function Zc() {
  const i = Vy();
  return i && "//" + i;
}
const An = fn.register("mk-hlsjs-log-level"),
  $y = fn.register("mk-hlsjs-version");
function Hy() {
  const i = An.value,
    e = "hls.js";
  switch (i) {
    case "info":
    case "error":
    case "warn":
      return "hls.production.verbose.min.js";
    case "trace":
    case "debug":
      return (console.warn(`HLS log level ${i} is not supported, loading production build.`), e);
    default:
      return e;
  }
}
function el() {
  const i = { hls: "", rtc: "" };
  if (ft()) return i;
  const e = Zc() || Jc(),
    t = $y.get() || Uy,
    r = Hy();
  return ((i.hls = `https:${e}/hls.js/${t}/hls.js/${r}`), (i.rtc = `https:${e}/hls.js/${t}/rtc.js/rtc.min.js`), i);
}
function tl(i, e = window) {
  if (ft()) return "";
  const t = Se()?.getItem("mkCDNBaseURLOverride");
  if (t) return t;
  const r = wn(i);
  return r ? r.getAttribute("src").replace(new RegExp(`${i}$`), "") : `${Zc() || Jc()}${Qc}`;
}
const Ja = new Map();
function Cr(i, e) {
  const t = Ja.get(i);
  if (t) return t;
  const r = new Promise((s, n) => {
    if ((ft() && n("Dynamic script loading is unsupported in Node environments."), wn(i))) return s();
    const o = document.createElement("script");
    (e &&
      Object.keys(e).forEach((l) => {
        o.setAttribute(l, e[l]);
      }),
      (o.onload = () => {
        s();
      }),
      (o.onerror = (l) => {
        n(l);
      }));
    let c;
    (Ky.test(i) ? (c = i) : (c = `${tl(i)}${i}`), (o.src = c), document.head.appendChild(o));
  });
  return (Ja.set(i, r), r);
}
function jy(i) {
  return (e, t, r) => {
    const s = r.value,
      n = qy(s, i);
    r.value = n;
  };
}
function qy(i, e) {
  let t = 0,
    r,
    s;
  const n = () => {
    (clearTimeout(s), (s = 0), (r = void 0));
  };
  return function (...a) {
    const o = this;
    return new Promise(function (c, l) {
      const h = Date.now();
      h - t < e
        ? (r && (r.resolve(void 0), n()),
          (r = { resolve: c, reject: l, args: a }),
          (s = setTimeout(
            () => {
              (i.apply(o, r.args).then(r.resolve).catch(r.reject), n());
            },
            e - (h - t + 1),
          )))
        : (n(), (t = h), i.apply(o, a).then(c).catch(l));
    });
  };
}
const F = u.createChild("tracks");
var Wy = Object.defineProperty,
  Gy = Object.getOwnPropertyDescriptor,
  Je = (i, e, t, r) => {
    for (var s = Gy(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Wy(e, t, s), s);
  };
const {
    audioTracksSwitched: Hi,
    audioTracksUpdated: is,
    inlineStylesParsed: Za,
    itemPlaying: eo,
    textTracksSwitched: ji,
    textTracksUpdated: to,
    videoTracksUpdated: io,
    videoTracksSwitched: ro,
  } = U,
  Yy = _e.register("mk-hlsjs-interstitial-playback");
class Ve extends Tt {
  constructor(e) {
    (super([Hi, is, Za, eo, ji, to, io, ro]), (this.session = e));
    const {
      AUDIO_TRACK_SWITCHED: t,
      INLINE_STYLES_PARSED: r,
      ITEM_PLAYING: s,
      MANIFEST_PARSED: n,
      SESSION_DATA_COMPLETE: a,
      SUBTITLE_TRACK_SWITCH: o,
      VIDEO_TRACK_SWITCHED: c,
    } = window.Hls.Events;
    (this.session.on(t, this.handleAudioTrackSwitched),
      this.session.on(r, this.handleInlineStylesParsed),
      this.session.on(s, this.handleItemPlaying),
      this.session.on(n, this.handleManifestParsed),
      this.session.on(a, this.handleSessionDataComplete),
      this.session.on(o, this.handleSubtitleTrackSwitch),
      this.session.on(c, this.handleVideoTrackSwitched));
  }
  _audioTracks = [];
  _videoTracks = [];
  _textTracks = [];
  _localizedRenditionNames;
  _interstitialItemIds = new Set();
  _playingItemId;
  _parsedManifestItemIds = new Set();
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  get audioTracks() {
    return this._audioTracks;
  }
  get textTracks() {
    return this._textTracks;
  }
  get videoTracks() {
    return this._videoTracks;
  }
  get currentInterstitialId() {
    return this.session.getCurrentIntegratedTimelineSegmentAndCurrentTime()?.segment?.interstitialEventIdentifier;
  }
  set audioTrack(e) {
    F.debug("set audioTrack", e);
    const { currentInterstitialId: t, session: r } = this;
    !r ||
      !e ||
      e.id === void 0 ||
      (e.interstitialId === t &&
        (t || this.setAudioAndSubtitleForItem(e),
        this.setTrackOnInterstitialItems({ track: e, setTrack: this.setAudioAndSubtitleForItem })));
  }
  set videoTrack(e) {
    F.debug("set videoTrack", e);
    const { session: t } = this;
    !t || (e && e.id === void 0) || (t.videoSelectedPersistentID = e ? Number(e.id) : void 0);
  }
  set textTrack(e) {
    const { currentInterstitialId: t } = this;
    if ((F.debug("set textTrack:", e), e && e.interstitialId !== t)) return;
    if (!t) {
      const s = es(this.subtitleMediaOptions, this.currentAudioMediaOption, e),
        n = s ? s.MediaSelectionOptionsPersistentID : -1;
      this.setSubtitleTrack(n);
    }
    F.debug("set subtitle track on all interstitial items", this._interstitialItemIds);
    const r = !e || e.label === it;
    this.setTrackOnInterstitialItems({ track: r ? void 0 : e, setTrack: this.setSubtitleForInterstitial });
  }
  setPreferredAudioTrackForItem(e, t) {
    const r = e[0]?.MediaSelectionOptionsInterstitialId,
      s = Na(e, t),
      n = this.session.getEnabledAudioMediaOptionForItem({ interstitialAssetId: r });
    return (
      F.debug("setPreferredAudioTrackForItem - preferred track", s, n),
      !s || s.MediaSelectionOptionsPersistentID === n?.MediaSelectionOptionsPersistentID
        ? n
        : (this.setAudioTrack(s.MediaSelectionOptionsPersistentID, r), s)
    );
  }
  setPreferredSubtitleTrackForItem(e, t, r) {
    const s = e[0]?.MediaSelectionOptionsInterstitialId,
      n = es(e, t, r),
      a = this.session.getEnabledSubtitleMediaOptionForItem({ interstitialAssetId: s });
    (F.debug("setPreferredSubtitleTrackForItem - preferred track", s, n, a),
      !((!a && !n) || (a && n?.MediaSelectionOptionsPersistentID === a.MediaSelectionOptionsPersistentID)) &&
        this.setSubtitleTrack(n?.MediaSelectionOptionsPersistentID ?? -1, s));
  }
  setAudioAndSubtitleForItem(e, t) {
    F.debug("setAudioAndSubtitleForItem", { track: e, interstitialId: t });
    const r = t ? this.session.getAudioMediaOptionsForItem({ interstitialAssetId: t }) : this.session.audioMediaOptions,
      s = this.setPreferredAudioTrackForItem(r, e);
    F.debug("determining subtitle track due to audio track change");
    const n = t
      ? this.session.getSubtitleMediaOptionsForItem({ interstitialAssetId: t })
      : this.session.subtitleMediaOptions;
    this.setPreferredSubtitleTrackForItem(n, s);
  }
  setSubtitleForInterstitial(e, t) {
    const r = this.session.getSubtitleMediaOptionsForItem({ interstitialAssetId: t }),
      s = this.session.getEnabledAudioMediaOptionForItem({ interstitialAssetId: t });
    this.setPreferredSubtitleTrackForItem(r, s, e);
  }
  pruneInterstitialItems() {
    (F.debug("pruneInterstitialItems"),
      this._interstitialItemIds.forEach((e) => {
        const t = this.session.getAudioMediaOptionsForItem({ interstitialAssetId: e });
        (!t || t.length === 0) &&
          (F.debug(`Removing '${e}' from _interstitialItemIds`), this._interstitialItemIds.delete(e));
      }));
  }
  setTrackOnInterstitialItems({ track: e, setTrack: t }) {
    (F.debug("setTrackOnInterstitialItems", e),
      this.pruneInterstitialItems(),
      F.debug("Updating interstitial items:", this._interstitialItemIds));
    let r = 0;
    this._interstitialItemIds.forEach((s) => {
      (setTimeout(() => t(e, s), r), (r += 500));
    });
  }
  setAudioTrack(e, t) {
    const { session: r } = this;
    t
      ? (F.debug("Set audio track for interstitial", t, e), r.setInterstitialAudioSelectedPersistentId(t, e))
      : (F.debug("Set audio track for primary content", e), (r.audioSelectedPersistentID = e));
  }
  setSubtitleTrack(e, t) {
    const { session: r } = this;
    if (!t) {
      (F.debug("Set subtitle track for primary content", e), (r.subtitleSelectedPersistentID = e));
      return;
    }
    try {
      (F.debug("Set subtitle track for interstitial", t, e), r.setInterstitialSubtitleSelectedPersistentId(t, e));
    } catch (s) {
      F.error("Failed to set subtitle track for interstitial", t, e, s);
    }
  }
  get audioMediaOptions() {
    const { currentInterstitialId: e, session: t } = this;
    return t ? (e ? t.getAudioMediaOptionsForItem({ interstitialAssetId: e }) : t.audioMediaOptions) : [];
  }
  get currentAudioMediaOption() {
    const { currentInterstitialId: e, session: t } = this;
    if (t)
      return e
        ? t.getEnabledAudioMediaOptionForItem({ interstitialAssetId: e })
        : this.audioMediaOptions?.find((r) => r.MediaSelectionOptionsPersistentID === t.audioSelectedPersistentID);
  }
  get currentSubtitleMediaOption() {
    const { currentInterstitialId: e, session: t } = this;
    if (t)
      return e
        ? t.getEnabledSubtitleMediaOptionForItem({ interstitialAssetId: e })
        : this.subtitleMediaOptions?.find(
            (r) => r.MediaSelectionOptionsPersistentID === t.subtitleSelectedPersistentID,
          );
  }
  get subtitleMediaOptions() {
    const { currentInterstitialId: e, session: t } = this;
    return t ? (e ? t.getSubtitleMediaOptionsForItem({ interstitialAssetId: e }) : t.subtitleMediaOptions) : [];
  }
  get currentVideoMediaOption() {
    const { session: e } = this;
    if (e)
      return this.videoMediaOptions?.find((t) => t.MediaSelectionOptionsPersistentID === e.videoSelectedPersistentID);
  }
  get videoMediaOptions() {
    const { session: e } = this;
    return e ? e.videoMediaOptions : [];
  }
  audioTracksUpdated(e = []) {
    const t = e.map($p);
    ((this._audioTracks = t), this.dispatchEvent(is, t));
  }
  videoTracksUpdated(e = []) {
    const t = e.map(Hp);
    ((this._videoTracks = t), this.dispatchEvent(io, t));
  }
  handleItemPlaying(e, t) {
    F.debug("handleItemPlaying", t);
    const { itemId: r, interstitialId: s } = t;
    ((this._playingItemId = r),
      this.updateAVAndTextTracks({ itemId: r }),
      s
        ? (this.dispatchEvent(Hi, { selectedId: this.currentAudioMediaOption?.MediaSelectionOptionsPersistentID }),
          this.dispatchEvent(ji, { selectedId: this.currentSubtitleMediaOption?.MediaSelectionOptionsPersistentID }))
        : this.handlePrimaryItemPlaying());
    const n = this.currentSubtitleMediaOption;
    this.dispatchEvent(eo, {
      forcedTextTrack: n && n.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 ? Ua(n) : void 0,
    });
  }
  handlePrimaryItemPlaying() {
    const {
        audioMediaOptions: e,
        currentAudioMediaOption: t,
        currentSubtitleMediaOption: r,
        subtitleMediaOptions: s,
      } = this,
      n = Na(e);
    n && t?.MediaSelectionOptionsPersistentID === n.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(Hi, { selectedId: t?.MediaSelectionOptionsPersistentID })
      : n && this.setAudioTrack(n.MediaSelectionOptionsPersistentID);
    const a = es(s, n);
    a && r?.MediaSelectionOptionsPersistentID === a.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(ji, { selectedId: r?.MediaSelectionOptionsPersistentID })
      : this.setSubtitleTrack(a?.MediaSelectionOptionsPersistentID ?? -1);
  }
  updateAVAndTextTracks(e) {
    const t = this.session.getAudioMediaOptionsForItem(e),
      r = this.session.getSubtitleMediaOptionsForItem(e),
      s = this.session.getVideoMediaOptionsForItem?.(e) ?? [];
    (F.debug("updateAVAndTextTracks - updating audio/video and text tracks with options:", t, r, s),
      this.audioTracksUpdated(t),
      this.videoTracksUpdated(s),
      this.subtitleTracksUpdated(r));
  }
  handleAudioTrackSwitched(e, t) {
    if (
      (F.debug("handleAudioTrackSwitched", t, "current option: ", this.currentAudioMediaOption),
      !this.isEventForCurrentItem(t))
    )
      return;
    const r = t?.track?.persistentID;
    this.dispatchEvent(Hi, { selectedId: r });
  }
  handleInlineStylesParsed(e, t) {
    this.dispatchEvent(Za, t);
  }
  handleManifestParsed(e, t) {
    F.debug("handleManifestParsed", t);
    const { audioTracks: r, interstitialId: s, subtitleTracks: n, videoTracks: a = [] } = t,
      o = r.map(Zr),
      c = n.map(Zr),
      l = a.map(Zr);
    if (s && o.length > 0) {
      this._interstitialItemIds.add(s);
      const m = this.setPreferredAudioTrackForItem(o);
      this.setPreferredSubtitleTrackForItem(c, m);
    }
    l.length > 0 && (this.session.videoSelectedPersistentID = Bp(l)?.MediaSelectionOptionsPersistentID);
    const h = t.itemId !== void 0 && t.itemId === this._playingItemId && !this._parsedManifestItemIds.has(t.itemId);
    (this._parsedManifestItemIds.add(t.itemId), (!Yy.enabled || h) && this.handleItemPlaying("hlsItemPlaying", t));
  }
  handleSessionDataComplete(e, t) {
    t?.itemList?.forEach((r) => {
      if (r["DATA-ID"] === "_hls.localized-rendition-names" && r.VALUE)
        try {
          ((this._localizedRenditionNames = JSON.parse(r.VALUE)),
            this._audioTracks.forEach((s) => {
              const n = this._localizedRenditionNames?.[s.label];
              n && (s.localizedRenditionNames = n);
            }),
            this.dispatchEvent(is, this._audioTracks));
        } catch (s) {
          F.error("Failed to parse _hls.localized-rendition-names", s);
          return;
        }
    });
  }
  handleSubtitleTrackSwitch(e, t) {
    (F.debug("handleSubtitleTrackSwitch", t), this.isEventForCurrentItem(t) && this.dispatchEvent(ji, t));
  }
  handleVideoTrackSwitched(e, t) {
    if (
      (F.debug("handleVideoTrackSwitched", t, "current option: ", this.currentVideoMediaOption),
      !this.isEventForCurrentItem(t))
    )
      return;
    const r = t?.track?.persistentID;
    this.dispatchEvent(ro, { selectedId: r });
  }
  subtitleTracksUpdated(e = []) {
    const t = [];
    (e.forEach((r) => {
      r.MediaSelectionOptionsDisplaysNonForcedSubtitles !== 0 && t.push(Ua(r));
    }),
      (this._textTracks = t),
      this.dispatchEvent(to, t));
  }
  isEventForCurrentItem(e) {
    return this.currentInterstitialId ? e.interstitialId === this.currentInterstitialId : !e.interstitialId;
  }
  destroy() {
    this._isDestroyed = !0;
    const {
      AUDIO_TRACK_SWITCHED: e,
      INLINE_STYLES_PARSED: t,
      ITEM_PLAYING: r,
      MANIFEST_PARSED: s,
      SESSION_DATA_COMPLETE: n,
      SUBTITLE_TRACK_SWITCH: a,
      VIDEO_TRACK_SWITCHED: o,
    } = window.Hls.Events;
    (this.session.off(e, this.handleAudioTrackSwitched),
      this.session.off(t, this.handleInlineStylesParsed),
      this.session.off(r, this.handleItemPlaying),
      this.session.off(s, this.handleManifestParsed),
      this.session.off(n, this.handleSessionDataComplete),
      this.session.off(a, this.handleSubtitleTrackSwitch),
      this.session.off(o, this.handleVideoTrackSwitched));
  }
}
Je([T()], Ve.prototype, "setAudioAndSubtitleForItem");
Je([T()], Ve.prototype, "setSubtitleForInterstitial");
Je([T()], Ve.prototype, "handleItemPlaying");
Je([T()], Ve.prototype, "handleAudioTrackSwitched");
Je([T()], Ve.prototype, "handleInlineStylesParsed");
Je([T()], Ve.prototype, "handleManifestParsed");
Je([T()], Ve.prototype, "handleSessionDataComplete");
Je([T()], Ve.prototype, "handleSubtitleTrackSwitch");
Je([T()], Ve.prototype, "handleVideoTrackSwitched");
class zy {
  hls;
  lastPosition;
  lastPromise;
  constructor(e) {
    this.hls = e;
  }
  loadPreviewImage(e) {
    return this.lastPosition === e
      ? this.lastPromise
      : ((this.lastPosition = e),
        (this.lastPromise = new Promise((t, r) => {
          this.hls.loadImageIframeData$(e).subscribe((n) => {
            const { data: a } = n,
              o = new Blob([a], { type: "image/jpeg" });
            t(o);
          });
        })),
        this.lastPromise);
  }
}
var Qy = Object.defineProperty,
  Xy = Object.getOwnPropertyDescriptor,
  $e = (i, e, t, r) => {
    for (var s = Xy(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Qy(e, t, s), s);
  };
const Fs = { bufferStalledError: "bufferStalledError", keySystemGenericError: "keySystemGenericError" },
  Jy = new Set([p.Reason.DEVICE_LIMIT, p.Reason.GEO_BLOCK, p.Reason.WIDEVINE_CDM_EXPIRED]),
  qi = _e.register("mk-hlsjs-interstitial-playback"),
  Zy = Er.register("mk-hlsjs-config-overrides"),
  em = _e.get("mk-block-report-cdn-server"),
  tm = (i) => {
    const { Hls: e } = window;
    if (e && em) {
      const t = rt(e.DefaultConfig.fragLoadPolicy);
      ((t.default.reportCDNServer = !1), (t.customURL.reportCDNServer = !1), (i.fragLoadPolicy = t));
    }
  },
  im = (i) => {
    const e = Zy.value;
    e && typeof e == "object" && Object.assign(i, e);
  };
class ye extends kn {
  playerName = "HlsJsVideoPlayer";
  _hlsSession;
  _hlsPreviewImageLoader;
  _hlsJsTracks;
  _license;
  get keySystem() {
    return this.services.runtime.preferredKeySystem;
  }
  _rtcTracker;
  _levels;
  _channelsByGroup = {};
  _currentLevel;
  _unrecoverableError;
  _isMediaAttached = !1;
  _integratedTimelineDuration;
  hlsScriptURL;
  appInfo;
  _manifestParsed = !1;
  playbackDataStore = {};
  get shouldDispatchErrors() {
    return !this.userInitiated || this._playbackDidStart;
  }
  constructor(e) {
    (super(e),
      (this._rtcTracker = e?.playbackServices?.getRTCStreamingTracker()),
      (this._license = e.services.license),
      (this.hlsScriptURL = e.bag?.urls.hls),
      (this.appInfo = e.bag?.app));
  }
  get supportsPreviewImages() {
    return this._manifestParsed
      ? !this.services.runtime.isMobile && !!this._hlsSession?.iframeVariants?.some((e) => e?.imageCodec === "mjpg")
      : !1;
  }
  get currentPlayingDate() {
    return this._hlsSession?.playingDate;
  }
  get isPlayingAtLiveEdge() {
    const e = this._hlsSession;
    return !e || !this.nowPlayingItem?.isLinearStream ? !1 : !!e.isPlayingAtLive;
  }
  get seekableTimeRanges() {
    const e = this._hlsSession;
    return e
      ? e.seekableTimeRanges
      : this.currentPlaybackDuration
        ? [{ start: 0, end: this.currentPlaybackDuration }]
        : void 0;
  }
  get currentPlaybackDuration() {
    return this._integratedTimelineDuration
      ? this.calculateTime(this._integratedTimelineDuration)
      : super.currentPlaybackDuration;
  }
  get currentPlaybackTime() {
    let e = {};
    return (
      qi.enabled && (e = this._hlsSession?.getCurrentIntegratedTimelineSegmentAndCurrentTime()),
      e?.targetTime ?? super.currentPlaybackTime
    );
  }
  async initializeExtension() {
    try {
      if (!this.hlsScriptURL) throw new Error("HLS.js script URL is not configured");
      await Promise.all([Cr(this.hlsScriptURL), this._rtcTracker?.loadScript()]);
    } catch (e) {
      throw (u.error(`hlsjs-video-player failed to load script ${this.hlsScriptURL}`, e), e);
    }
  }
  destroy() {
    (u.debug("hlsjs-video-player.destroy"),
      this.destroyHlsPlayer(),
      this.unloadPlaybackItem("current"),
      this.unloadPlaybackItem("next"),
      super.destroy());
  }
  destroyHlsPlayer() {
    if ((u.debug("hlsjs-video-player.destroyHlsPlayer"), this._hlsJsTracks?.destroy(), !this._hlsSession)) return;
    const {
        DATERANGE_UPDATED: e,
        ERROR: t,
        INTERNAL_ERROR: r,
        INTERSTITIALS_UPDATED: s,
        MANIFEST_PARSED: n,
        KEY_REQUEST_STARTED: a,
        LICENSE_CHALLENGE_CREATED: o,
        LEVEL_SWITCHED: c,
        UNRESOLVED_URI_LOADING: l,
      } = window.Hls.Events,
      h = this._hlsSession;
    (this.detachMedia(),
      h.off(t, this.handleHlsError),
      h.off(r, this.handleHlsError),
      h.off(n, this.handleManifestParsed),
      h.off(a, this.handleKeyRequestStarted),
      h.off(o, this.handleLicenseChallengeCreated),
      h.off(c, this.handleLevelSwitched),
      h.off(e, this.handleDaterangeUpdated),
      qi.enabled && h.off(s, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && h.off(l, this.handleUnresolvedUriLoading),
      h.destroy(),
      (window.hlsSession = void 0),
      (this._hlsSession = void 0));
  }
  async stopMediaAndCleanup(e = I.stopped) {
    (u.debug("hlsjs-video-player.stopMediaAndCleanup", e),
      await super.stopMediaAndCleanup(e),
      this.playbackDataStore.next ? this.unloadPlaybackItem("current") : this.destroy());
  }
  async playHlsStream(e, t, r = {}) {
    (u.debug("hlsjs-video-player.playHlsStream", e, t),
      (this._unrecoverableError = void 0),
      (this._manifestParsed = !1),
      (this.playbackDataStore.next && this.playbackDataStore.next.id === t?.id) ||
        (this.unloadNextItem(), this.destroyHlsPlayer()),
      this._hlsSession || this.createHlsPlayer(t),
      this.ensureMediaElementInDocument(),
      this.setupTrackManagers(this._hlsJsTracks));
    const n = { requiresCDMAttachOnStart: this.keySystem !== void 0 },
      a = (q, ae) => ae?.keyURLs?.[q] !== void 0;
    this.keySystem === "widevine" &&
      a("widevine-cert-url", t) &&
      ((n.maxSecurityLevel = "WIDEVINE_SOFTWARE"),
      (n.keySystemConfig = {
        initDataTypes: ["cenc", "keyids"],
        distinctiveIdentifier: "optional",
        persistentState: "required",
      }));
    const o = { itemId: t?.id, subs: "accepts-css", platformInfo: n, appData: { serviceName: this.appInfo?.name } },
      { _rtcTracker: c, _hlsSession: l } = this;
    let h;
    if (c) {
      h = c.reportingAgent;
      const q = c.prepareReportingAgent(t);
      q !== void 0 && (o.appData.reportingAgent = q);
    }
    (u.debug("RTC: loadSource with load options", o),
      this.services.manifest.personalizedManifests &&
        ((e = e.replace("https://", "manifest://")), u.info("Manifest already loaded, passing url to HLSJS", e)),
      t !== void 0 && this.setCurrentPlaybackItem(t));
    const { startTime: m, startTimestamp: y } = r,
      k = y ? new Date(y) : m;
    (l?.loadSource(e, o, k),
      this.attachMedia(),
      t !== void 0 &&
        (this.keySystem === "fairplay" && a("hls-key-cert-url", t)
          ? l?.setProtectionData({ fairplaystreaming: { serverCertUrl: t.keyURLs["hls-key-cert-url"] } })
          : a("widevine-cert-url", t) &&
            l?.setProtectionData({ widevine: { serverCertUrl: t.keyURLs["widevine-cert-url"] } }),
        (t.state = x.ready)),
      h?.destroy(),
      l?.setRate(1));
  }
  async preloadItem(e, t) {
    return this.preloadNextItem(e, t);
  }
  async preloadNextItem(e, t) {
    u.trace("hlsjs-video-player.preloadNextItem", e, t);
    const r = this.playbackDataStore.next;
    if (r !== void 0 && r.id === e.id) {
      u.info(`Source already preloaded for item "${e}"`);
      return;
    }
    (u.info(`Prefetching HLS source for item "${e}"`),
      this.unloadPlaybackItem("next"),
      (this.playbackDataStore.next = { id: e.id, item: e, asset: void 0 }),
      this._hlsSession?.prefetchSource(Ii(e, { ...t, drmUsed: this.keySystem }), { itemId: e.id }));
  }
  async unloadNextItem(e) {
    (u.debug("hlsjs-video-player.unloadNextItem", e),
      (e === void 0 || e.id === this.playbackDataStore.next?.id) && this.unloadPlaybackItem("next"));
  }
  async unloadPlaybackItem(e) {
    u.trace("unloadPlaybackItem(...)", e);
    const t = this.playbackDataStore[e];
    ((this.playbackDataStore[e] = void 0),
      u.debug(`Reset ${t !== void 0 ? "occupied" : "unoccupied"} playback slot: ${e}`),
      t !== void 0 &&
        t.licenseChallenge !== void 0 &&
        (u.debug(`Revoking license for playback slot: ${e}`),
        this._license.revokeLicense(t.item, t.licenseChallenge, { userInitiated: t.config?.userInitiated ?? !1 })));
  }
  createHlsPlayer(e) {
    const { Hls: t } = window,
      r = An.get(),
      { os: s, browser: n } = this.services.runtime,
      a = {
        attemptErrorRecovery: !0,
        clearMediaKeysOnPromise: !1,
        customTextTrackCueRenderer: !1,
        debug: !!r,
        debugLevel: r,
        enableItemPreloading: !0,
        enableIFramePreloading: !1,
        enablePerformanceLogging: !!r,
        enablePlayReadyKeySystem: !0,
        enableQueryParamsForITunes: !this.services.manifest.personalizedManifests,
        enableRtcReporting: this._rtcTracker !== void 0,
        keySystemPreference: this.keySystem === "fairplay" ? "fairplaystreaming" : this.keySystem,
        useMediaKeySystemAccessFilter: !0,
        maintainMediaKeysBetweenSessions: !1,
        nativeControlsEnabled: s.isAndroid || n.isSafari,
        enableContentSteering: !0,
        allowFastSwitchUp: !0,
        liveAllowLowLatencyPlayback: !0,
        rtcErrStackNumLines: 100,
        rtcLogHistoryNumLines: 100,
        useMediaCapabilities: !0,
        allowEagerAppendInitSegment: !1,
        forwardItemLimit: 3,
      };
    ((qi.enabled || e?.isPodcastEpisode) && Object.assign(a, { gapless: !0, enableInterstitialPlayback: !0 }),
      e?.isPodcastEpisode && Object.assign(a, { interstitialResumptionBufferHole: 0, forceInterstitialSnapOutIn: !0 }),
      tm(a),
      im(a));
    const o = new t(a),
      {
        DATERANGE_UPDATED: c,
        ERROR: l,
        INTERNAL_ERROR: h,
        INTERSTITIALS_UPDATED: m,
        KEY_REQUEST_STARTED: y,
        LEVEL_SWITCHED: k,
        LICENSE_CHALLENGE_CREATED: q,
        MANIFEST_PARSED: ae,
        UNRESOLVED_URI_LOADING: X,
      } = t.Events;
    (o.on(l, this.handleHlsError),
      o.on(h, this.handleHlsError),
      o.on(ae, this.handleManifestParsed),
      o.on(y, this.handleKeyRequestStarted),
      o.on(q, this.handleLicenseChallengeCreated),
      o.on(k, this.handleLevelSwitched),
      o.on(c, this.handleDaterangeUpdated),
      qi.enabled && o.on(m, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && o.on(X, this.handleUnresolvedUriLoading),
      (this._hlsSession = o),
      (window.hlsSession = o),
      (this._hlsJsTracks = new Ve(o)),
      (this._hlsPreviewImageLoader = new zy(this._hlsSession)));
  }
  setCurrentPlaybackItem(e) {
    this.unloadPlaybackItem("current");
    let t = { id: e.id, item: e, asset: void 0, config: { userInitiated: this.userInitiated } };
    return (
      e.id === this.playbackDataStore.next?.id &&
        ((t = { ...this.playbackDataStore.next, ...t }), (this.playbackDataStore.next = void 0)),
      (this.playbackDataStore.current = t),
      t
    );
  }
  async handleUnresolvedUriLoading(e, t) {
    const r = t.uri,
      s = r.replace("manifest://", "https://");
    u.debug("handleUnresolvedUriLoading for uri ", r);
    const n = this.services.manifest,
      a = (await n.getManifest(s)) ?? (await n.fetchManifest(s));
    if (!a) {
      u.error(`No cached manifest for ${s}`);
      return;
    }
    (await n.clearManifest(s), t.resolve({ uri: s, status: 200, data: a.content }));
  }
  handleInterstitialUpdated(e, t) {
    (u.debug("handleInterstitialUpdated - ", e, t),
      t.integratedTimeline.duration && (this._integratedTimelineDuration = t.integratedTimeline.duration));
  }
  handleLevelSwitched(e, t) {
    if (!t) return;
    const r = t,
      { audioCodec: s, mediaOptionId: n } = r;
    !s ||
      !n ||
      this._currentLevel?.mediaOptionId === r?.mediaOptionId ||
      ((this._currentLevel = r),
      this._dispatcher.publish(S.hlsLevelUpdated, {
        level: r,
        userInitiated: this.userInitiated,
        item: this.nowPlayingItem,
        position: this.currentPlaybackTime,
        playingDate: this._hlsSession?.playingDate,
      }));
  }
  handleDaterangeUpdated(e, t) {
    (u.info("handleDaterangeUpdated", JSON.stringify(t)), this._dispatcher.publish(f.hlsDaterangeUpdated, t));
  }
  handleHlsError(e, t) {
    if ((u.warn("HLS.js error", JSON.stringify(t)), this._unrecoverableError)) return;
    let r = new g("mk-193", p.Reason.UNSUPPORTED_ERROR, t.reason);
    r.data = t;
    const { bufferStalledError: s, keySystemGenericError: n } = Fs;
    if (t.details === n) {
      this._dispatcher.publish(n, r);
      return;
    }
    let a = !1;
    if (
      (t.details === s &&
        t.stallType === "Seek" &&
        t.response?.code === -12909 &&
        ((r = new p(p.Reason.BUFFER_STALLED_ERROR, t.stallType)),
        (r.data = { stallType: t.stallType, code: t.response?.code }),
        (a = !0)),
      t.reason === "output-restricted" && (r = new p(p.Reason.OUTPUT_RESTRICTED, t.reason)),
      t.fatal)
    )
      if ((this.destroy(), this.shouldDispatchErrors || a)) this._dispatcher.publish(f.mediaPlaybackError, r);
      else throw r;
  }
  async handleManifestParsed(e, t) {
    ((this._manifestParsed = !0),
      u.debug("handleManifestParsed", t),
      (this._levels = t.levels ?? []),
      (this._channelsByGroup = (t.audioTracks ?? []).reduce((r, s) => ((r[s.groupId] = s.channels), r), {})));
  }
  handleKeyRequestStarted(e, t) {
    (u.debug("hlsjs-video.handleKeyRequestStarted"), t.resolve({}));
  }
  async handleLicenseChallengeCreated(e, t) {
    u.trace("handleLicenseChallengeCreated", t);
    const { userInitiated: r } = this,
      s = t.appItemIds?.[0];
    if (s === void 0)
      throw new g("mk-185", g.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const n = this.playbackDataStore.next?.id === s ? this.playbackDataStore.next : this.playbackDataStore.current;
    if (n === void 0)
      throw new g("mk-186", g.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    try {
      const a = await this._license.requestLicense(n.item, t, { userInitiated: r }),
        o = { statusCode: a.status };
      a?.license && (this.keySystem === "fairplay" ? (o.ckc = Dt(a.license)) : (o.license = Dt(a.license)));
      const c = a["renew-after"];
      (c && (o.renewalDate = new Date(Date.now() + c * 1e3)),
        (n.licenseChallenge = t),
        (n.licenseKey = o),
        (n.config = { stkn: a.stkn, userInitiated: r }),
        t.resolve(o));
    } catch (a) {
      if (this._unrecoverableError) return;
      const o = a.data,
        c = {};
      (o?.status !== void 0 && (c.statusCode = parseInt(o.status, 10)),
        u.warn("Passing license response error to Hls.js", c),
        t.resolve(c),
        p.isMKError(a) &&
          Jy.has(a.reason) &&
          ((this._unrecoverableError = a),
          this.resetDeferredPlay(),
          await this.stop({ endReasonType: P.FAILED_TO_LOAD, userInitiated: r })),
        this.onPlaybackLicenseError(a));
    }
  }
  async seekToTime(e) {
    this._hlsSession
      ? (u.debug("hlsjs-video: hls seekTo", e), (this._hlsSession.seekTo = e))
      : (u.debug("hlsjs-video: media element seek to", e), (this._targetElement.currentTime = e));
  }
  async loadPreviewImage(e) {
    return this._hlsPreviewImageLoader?.loadPreviewImage(e);
  }
  attachMedia() {
    this._isMediaAttached || (this._hlsSession?.attachMedia(this.video), (this._isMediaAttached = !0));
  }
  detachMedia() {
    (this._hlsSession?.detachMedia(), (this._isMediaAttached = !1));
  }
}
$e([T()], ye.prototype, "handleUnresolvedUriLoading");
$e([T()], ye.prototype, "handleInterstitialUpdated");
$e([T()], ye.prototype, "handleLevelSwitched");
$e([T()], ye.prototype, "handleDaterangeUpdated");
$e([T()], ye.prototype, "handleHlsError");
$e([T()], ye.prototype, "handleManifestParsed");
$e([T()], ye.prototype, "handleKeyRequestStarted");
$e([T()], ye.prototype, "handleLicenseChallengeCreated");
$e([Et(250)], ye.prototype, "seekToTime");
$e([jy(250)], ye.prototype, "loadPreviewImage");
function rm(i) {
  const [e] = i.split("?");
  return e.endsWith("m3u") || e.endsWith("m3u8");
}
var sm = Object.defineProperty,
  nm = Object.getOwnPropertyDescriptor,
  il = (i, e, t, r) => {
    for (var s = nm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && sm(e, t, s), s);
  };
class Rn {
  _isDestroyed = !1;
  mediaElement;
  metadataTrack;
  _activeMetadata;
  get activeMetadata() {
    return this._activeMetadata;
  }
  get activeCues() {
    const e = this.metadataTrack?.activeCues;
    return e != null ? Array.from(e) : [];
  }
  onchange;
  get isDestroyed() {
    return this._isDestroyed;
  }
  get tracks() {
    return this.metadataTrack !== void 0 ? [this.metadataTrack] : [];
  }
  get currentTrack() {
    return this.metadataTrack;
  }
  constructor(e) {
    ((this.onchange = e?.onchange), e?.element !== void 0 && this.attach(e.element));
  }
  attach(e) {
    if (this.mediaElement !== void 0 && this.mediaElement !== e)
      throw new Error("MetadaTrackManager is already attached to a different HTMLMediaElement.");
    this.mediaElement !== e &&
      ((this.mediaElement = e),
      this.mediaElement.addEventListener("loadedmetadata", this.registerMetadataTrack),
      this.mediaElement.addEventListener("loadeddata", this.registerMetadataTrack));
  }
  detach() {
    (this.mediaElement !== void 0 &&
      (this.mediaElement.removeEventListener("loadedmetadata", this.registerMetadataTrack),
      this.mediaElement.removeEventListener("loadeddata", this.registerMetadataTrack),
      (this.mediaElement = void 0)),
      this.metadataTrack !== void 0 &&
        (this.metadataTrack.removeEventListener("cuechange", this.onCueChange), (this.metadataTrack = void 0)));
  }
  registerMetadataTrack(e) {
    if (this.mediaElement !== void 0)
      for (let t = 0; t < this.mediaElement.textTracks.length; t++) {
        const r = this.mediaElement.textTracks[t];
        if (r.kind === "metadata") {
          this.metadataTrack === void 0
            ? ((this.metadataTrack = r), this.metadataTrack.addEventListener("cuechange", this.onCueChange))
            : F.warning(`Skipping registering metadata TextTrack with id "${r.id ?? "unknown"}"`);
          break;
        }
      }
  }
  onCueChange(e) {
    if ((F.debug("Processing metadata cues"), this.activeCues === void 0 || this.activeCues.length <= 0))
      (this.activeMetadata !== void 0 && this.onchange?.(), (this._activeMetadata = void 0));
    else {
      const t = by(this.activeCues);
      (this.activeMetadata === void 0 || !t.equals(this.activeMetadata)) &&
        (F.debug("Track TimedMetadata changed", t), (this._activeMetadata = t), this.onchange?.(t));
    }
  }
  saveTrack() {}
  restoreSelectedTrack() {}
  destroy() {
    ((this._isDestroyed = !0), (this.onchange = void 0), this.detach());
  }
}
il([T()], Rn.prototype, "registerMetadataTrack");
il([T()], Rn.prototype, "onCueChange");
var am = Object.defineProperty,
  om = Object.getOwnPropertyDescriptor,
  St = (i, e, t, r) => {
    for (var s = om(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && am(e, t, s), s);
  };
const cm = { keySystemGenericError: "keySystemGenericError" },
  lm = new Set([p.Reason.DEVICE_LIMIT, p.Reason.GEO_BLOCK]),
  O = u.createChild("hlsjs-audio"),
  um = Er.register("mk-hlsjs-config-overrides"),
  dm = (i) => {
    const e = um.value;
    e && typeof e == "object" && Object.assign(i, e);
  };
class Ye extends Sr {
  currentAudioTrack = void 0;
  currentTextTrack = void 0;
  currentVideoTrack = void 0;
  textTracks = [];
  audioTracks = [];
  videoTracks = [];
  userInitiated = !1;
  mediaElement;
  mediaPlayerType = "hlsjs-audio";
  playerName = "HlsJsAudioPlayer";
  hls;
  supportsPreviewImages = !1;
  async loadPreviewImage() {}
  get _targetElement() {
    return this.mediaElement;
  }
  extension;
  async setPresentationMode(e) {
    return Promise.resolve();
  }
  _license;
  get keySystem() {
    return this.services.runtime.preferredKeySystem;
  }
  _rtcTracker;
  _currentLevel;
  _isMediaAttached = !1;
  _unrecoverableError;
  hlsScriptURL;
  appInfo;
  id3MetadataManager;
  playbackDataStore = {};
  get shouldDispatchErrors() {
    return !this.userInitiated || this._playbackDidStart;
  }
  constructor(e) {
    (super(e),
      (this._rtcTracker = e?.playbackServices?.getRTCStreamingTracker()),
      (this._license = e.services.license),
      (this.appInfo = e.bag?.app),
      (this.hlsScriptURL = e.bag?.urls.hls),
      (this.id3MetadataManager = new Rn({
        onchange: (t) => {
          const r = {
            item: this.nowPlayingItem,
            metadata: t,
            position: this.currentPlaybackTime,
            playingDate: this.currentPlayingDate,
          };
          (O.debug("Dispatching bufferTimedMetadataDidChange", r),
            this._dispatcher?.publish(Pe.bufferTimedMetadataDidChange, r));
        },
      })));
  }
  get currentPlayingDate() {
    return this.hls?.playingDate;
  }
  get isPlayingAtLiveEdge() {
    const e = this.hls;
    return !e || !this.nowPlayingItem?.isLinearStream ? !1 : !!e.isPlayingAtLive;
  }
  async playItemFromUnencryptedSource(e, t, r, s) {
    if (!rm(e))
      throw new g("mk-245", g.Reason.CONTENT_UNSUPPORTED, {
        description: "HlsJsAudioPlayer cannot play unencrypted non-HLS sources",
        data: { url: e, item: s },
      });
    return this.playHlsStream(e, s, r);
  }
  async playItemFromEncryptedSource(e, t = !1, r = {}) {
    if ((O.trace("HlsJsAudioPlayer.playItemFromEncryptedSource", e, r), this.playbackState === I.stopped)) {
      O.debug("hlsjsAudioPlayer.playItemFromEncryptedSource aborting playback because player is stopped");
      return;
    }
    (O.debug(`Playing Encrypted Item: ${sr(e)}`),
      (e.playbackType = ce.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = x.loading),
      (this.userInitiated = t),
      await this.playHlsStream(e.assetURL, e, r));
  }
  async initializeMediaElement() {
    const e = Tn();
    ((e.autoplay = !1),
      (e.id = "apple-music-player"),
      (e.controls = !1),
      (e.muted = !1),
      (e.playbackRate = 1),
      (e.preload = "metadata"),
      (e.volume = 1),
      (this.mediaElement = e),
      document.body.appendChild(e),
      this.id3MetadataManager.attach(e),
      O.debug("initializedMediaElement", e));
  }
  get seekableTimeRanges() {
    const e = this.hls;
    return e
      ? e.seekableTimeRanges
      : this.currentPlaybackDuration
        ? [{ start: 0, end: this.currentPlaybackDuration }]
        : void 0;
  }
  async initializeExtension() {
    try {
      if (!this.hlsScriptURL) throw new Error("HLS.js script URL is not configured");
      await Promise.all([Cr(this.hlsScriptURL), this._rtcTracker?.loadScript()]);
    } catch (e) {
      throw (O.error(`hlsjs-audio-player failed to load script ${this.hlsScriptURL}`, e), e);
    }
  }
  async stopMediaElement() {
    (O.trace("HlsJsAudioPlayer.stopMediaElement()"), await super.stopMediaElement(), this.destroy());
  }
  async stopMediaAndCleanup(e = I.stopped) {
    (O.debug("HlsJsAudioPlayer.stopMediaAndCleanup", e),
      await super.stopMediaAndCleanup(e),
      this.unloadPlaybackItem("current"));
  }
  destroy() {
    if ((O.debug("HlsJsAudioPlayer.destroy()"), this.hls)) {
      const e = this.hls;
      this.detachMedia();
      const t = e.Events;
      (e.off(t.ERROR, this.handleHlsError),
        e.off(t.INTERNAL_ERROR, this.handleHlsError),
        e.off(t.MANIFEST_PARSED, this.handleManifestParsed),
        e.off(t.KEY_REQUEST_STARTED, this.handleKeyRequestStarted),
        e.off(t.LICENSE_CHALLENGE_CREATED, this.handleLicenseChallengeCreated),
        e.off(t.LEVEL_SWITCHED, this.handleLevelSwitched),
        e.destroy());
    }
    (this.id3MetadataManager.destroy(),
      this.unloadPlaybackItem("current"),
      this.unloadPlaybackItem("next"),
      super.destroy());
  }
  async playHlsStream(e, t, r = {}) {
    (O.trace("HlsJsAudioPlayer.playHlsStream()", e, t, r),
      (this._unrecoverableError = void 0),
      O.debug("Initiating HLS.js player"),
      this.createHlsPlayer());
    let s, n;
    this.keySystem === "widevine" &&
      (O.debug("Setting Widevine specific HLS options"),
      (s = "WIDEVINE_SOFTWARE"),
      (n = { initDataTypes: ["cenc", "keyids"], distinctiveIdentifier: "optional", persistentState: "required" }));
    const a = {
        subs: "accepts-css",
        platformInfo: { requiresCDMAttachOnStart: this.keySystem !== void 0, maxSecurityLevel: s, keySystemConfig: n },
        appData: { serviceName: this.appInfo?.name },
        itemId: t?.id,
      },
      { _rtcTracker: o } = this;
    let c;
    if (o) {
      c = o.reportingAgent;
      const l = o.prepareReportingAgent(t);
      l !== void 0 && (a.appData.reportingAgent = l);
    }
    if (
      (t !== void 0 && this.setCurrentPlaybackItem(t),
      O.info(`Loading source into HLS.js: ${e}`),
      O.debug("Calling loadSource with options", a),
      this.hls.loadSource(e, a, r.startTime),
      this.attachMedia(),
      t)
    ) {
      const l = (h) => t.keyURLs?.[h] !== void 0;
      (this.keySystem === "fairplay" && l("hls-key-cert-url")
        ? (O.info(`Setting Protection Data URL for FairPlay: ${t.keyURLs["hls-key-cert-url"]}`),
          this.hls.setProtectionData({ fairplaystreaming: { serverCertUrl: t.keyURLs["hls-key-cert-url"] } }))
        : l("widevine-cert-url") &&
          (O.info(`Setting Protection Data URL for Widevine: ${t.keyURLs["widevine-cert-url"]}`),
          this.hls.setProtectionData({ widevine: { serverCertUrl: t.keyURLs["widevine-cert-url"] } })),
        (t.state = x.ready));
    }
    (c?.destroy(), this.hls.setRate(1));
  }
  setCurrentPlaybackItem(e) {
    this.unloadPlaybackItem("current");
    let t = { id: e.id, item: e, asset: void 0, config: { userInitiated: this.userInitiated } };
    return (
      e.id === this.playbackDataStore.next?.id &&
        ((t = { ...this.playbackDataStore.next, ...t }), (this.playbackDataStore.next = void 0)),
      (this.playbackDataStore.current = t),
      t
    );
  }
  async preloadItem(e, t) {
    return this.preloadNextItem(e, t);
  }
  async preloadNextItem(e, t) {
    O.trace("preloadNextItem", e, t);
    const r = this.playbackDataStore.next;
    if (r !== void 0 && r.id === e.id) {
      O.info(`Source already preloaded for item "${e}"`);
      return;
    }
    (O.info(`Prefetching HLS source for item "${e}"`),
      this.unloadPlaybackItem("next"),
      (this.playbackDataStore.next = { id: e.id, item: e, asset: void 0 }),
      this.hls?.prefetchSource(Ii(e, { ...t, drmUsed: this.keySystem }), { itemId: e.id }));
  }
  async unloadNextItem(e) {
    (e === void 0 || e.id === this.playbackDataStore.next?.id) && this.unloadPlaybackItem("next");
  }
  async unloadPlaybackItem(e) {
    const t = this.playbackDataStore[e];
    ((this.playbackDataStore[e] = void 0),
      t !== void 0 &&
        t.licenseChallenge !== void 0 &&
        this._license.revokeLicense(t.item, t.licenseChallenge, { userInitiated: t.config?.userInitiated ?? !1 }));
  }
  createHlsPlayer() {
    O.trace("HlsJsAudioPlayer.createHlsPlayer()");
    const { os: e } = this.services.runtime,
      { Hls: t } = window,
      r = An.get(),
      s = {
        clearMediaKeysOnPromise: !1,
        debug: !!r,
        debugLevel: r,
        enableItemPreloading: !0,
        enablePerformanceLogging: !!r,
        enablePlayReadyKeySystem: !0,
        enableRtcReporting: this._rtcTracker !== void 0,
        keySystemPreference: this.keySystem === "fairplay" ? "fairplaystreaming" : this.keySystem,
        useMediaKeySystemAccessFilter: !0,
        nativeControlsEnabled: e.isAndroid,
        enableID3Cues: !0,
        rtcErrStackNumLines: 100,
        rtcLogHistoryNumLines: 100,
        useMediaCapabilities: !0,
        forwardItemLimit: 3,
      };
    (O.debug("Reading HLS.js option overrides from DevFlag"), dm(s), O.debug("Constructing HLS instance", s));
    const n = new t(s);
    (O.debug(`Using HLS instance with ID ${n.sessionID}`, s),
      O.debug("Adding Event handlers for HLS instance"),
      n.on(t.Events.ERROR, this.handleHlsError),
      n.on(t.Events.INTERNAL_ERROR, this.handleHlsError),
      n.on(t.Events.MANIFEST_PARSED, this.handleManifestParsed),
      n.on(t.Events.KEY_REQUEST_STARTED, this.handleKeyRequestStarted),
      n.on(t.Events.LICENSE_CHALLENGE_CREATED, this.handleLicenseChallengeCreated),
      n.on(t.Events.LEVEL_SWITCHED, this.handleLevelSwitched),
      (this.hls = n));
  }
  handleLevelSwitched(e, t) {
    if (!t) return;
    const r = t,
      { audioCodec: s, mediaOptionId: n } = r;
    !s ||
      !n ||
      this._currentLevel?.mediaOptionId === r?.mediaOptionId ||
      ((this._currentLevel = r), this._dispatcher.publish(S.hlsLevelUpdated, { level: r }));
  }
  handleHlsError(e, t) {
    if ((O.warn("HLS.js error", JSON.stringify(t)), this._unrecoverableError)) return;
    let r = new p(p.Reason.UNSUPPORTED_ERROR, t.reason);
    r.data = t;
    const { keySystemGenericError: s } = cm;
    if (t.details === s) {
      this._dispatcher.publish(s, r);
      return;
    }
    if ((t.reason === "output-restricted" && (r = new p(p.Reason.OUTPUT_RESTRICTED, t.reason)), t.fatal))
      if ((this.hls.destroy(), this.shouldDispatchErrors)) this._dispatcher.publish(f.mediaPlaybackError, r);
      else throw r;
  }
  async handleManifestParsed(e, t) {
    (O.debug("handleManifestParsed", t), (this.nowPlayingItem.state = x.ready));
  }
  handleKeyRequestStarted(e, t) {
    O.trace("HlsJsAudioPlayer.handleKeyRequestStarted()", t);
    const r = t.appItemIds?.[0] ?? "unknown";
    (O.debug(`Generating key request for item ${r} with URI ${t.keyuri}`), t.resolve({}));
  }
  async handleLicenseChallengeCreated(e, t) {
    O.trace("HlsJsAudioPlayer.handleLicenseChallengeCreated()", t);
    const r = t.appItemIds?.[0];
    if (r === void 0)
      throw new g("mk-191", g.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const s = this.playbackDataStore.next?.id === r ? this.playbackDataStore.next : this.playbackDataStore.current;
    if (s === void 0)
      throw new g("mk-192", g.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    O.debug(`Handling License Challenge for item ${r} with URI ${t.keyuri}`);
    const { userInitiated: n } = this;
    try {
      const a = await this._license.requestLicense(s.item, t, { userInitiated: n }),
        o = { statusCode: a.status };
      a?.license && (this.keySystem === "fairplay" ? (o.ckc = Dt(a.license)) : (o.license = Dt(a.license)));
      const c = a["renew-after"];
      (c && (o.renewalDate = new Date(Date.now() + c * 1e3)),
        (s.licenseChallenge = t),
        (s.licenseKey = o),
        (s.config = { userInitiated: n }),
        O.debug(`Passing License Challenge Response for ${t.keyuri} to HLS`, o),
        t.resolve(o));
    } catch (a) {
      if (this._unrecoverableError) return;
      const o = a.data,
        c = {};
      (o?.status !== void 0 && (c.statusCode = parseInt(o.status, 10)),
        O.warn("Passing license response error to Hls.js", c),
        t.resolve(c),
        p.isMKError(a) &&
          lm.has(a.reason) &&
          ((this._unrecoverableError = a),
          this.resetDeferredPlay(),
          await this.stop({ endReasonType: P.FAILED_TO_LOAD, userInitiated: this.userInitiated })),
        this.onPlaybackLicenseError(a));
    }
  }
  onPlaybackLicenseError(e) {
    (this.resetDeferredPlay(), this._dispatcher.publish(U.playbackLicenseError, e));
  }
  async seekToTime(e) {
    this.hls
      ? (O.debug("hlsjs-audio: hls seekTo", e), (this.hls.seekTo = e))
      : (O.debug("hlsjs-audio: media element seek to", e), (this._targetElement.currentTime = e));
  }
  attachMedia() {
    this._isMediaAttached || (this.hls?.attachMedia(this.mediaElement), (this._isMediaAttached = !0));
  }
  detachMedia() {
    (this.hls?.detachMedia(), (this._isMediaAttached = !1));
  }
}
St([T()], Ye.prototype, "handleLevelSwitched");
St([T()], Ye.prototype, "handleHlsError");
St([T()], Ye.prototype, "handleManifestParsed");
St([T()], Ye.prototype, "handleKeyRequestStarted");
St([T()], Ye.prototype, "handleLicenseChallengeCreated");
St([T()], Ye.prototype, "onPlaybackLicenseError");
St([Et(250)], Ye.prototype, "seekToTime");
var hm = Object.defineProperty,
  pm = Object.getOwnPropertyDescriptor,
  rl = (i, e, t, r) => {
    for (var s = pm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && hm(e, t, s), s);
  };
const D = u.createChild("html-audio"),
  so = [
    "canplay",
    "durationchange",
    "ended",
    "error",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "timeupdate",
    "volumechange",
    "waiting",
  ],
  fm = ["NotAllowedError", "NotSupportedError"];
class oi {
  id = ki();
  playerName = "HTMLAudioPlayer";
  windowHandlers;
  mediaElement;
  extension = void 0;
  audioTracks = [];
  textTracks = [];
  videoTracks = [];
  currentAudioTrack = void 0;
  currentTextTrack = void 0;
  currentVideoTrack = void 0;
  dispatcher;
  bitrateCalculator;
  fullscreen;
  serial = Date.now().toString();
  playbackErrorSubscription;
  _currentBufferedProgress = 0;
  _currentPlaybackProgress = 0;
  _nowPlayingItem;
  paused = !1;
  _playbackState = I.none;
  stopped = !1;
  _isPrimaryPlayer = !0;
  _playbackTargetAvailable = !1;
  _playbackTargetIsWireless = !1;
  seeker;
  _isDestroyed = !1;
  _isInitialized = !1;
  initialPlaybackTime;
  deferredPlay;
  constructor(e) {
    ((this.dispatcher = e.services.dispatcher),
      (this.bitrateCalculator = e.services.bitrateCalculator),
      (this.windowHandlers = new $t(this, e.services.runtime)),
      (this.fullscreen = new wc(this)),
      Se()?.setItem(yi, this.serial),
      (this.playbackErrorSubscription = this.dispatcher.subscribe(f.mediaPlaybackError, this.onPlaybackError)));
  }
  get targetElement() {
    return this.mediaElement;
  }
  get bitrate() {
    return this.bitrateCalculator.bitrate;
  }
  get currentBufferedProgress() {
    return this._currentBufferedProgress;
  }
  get currentDuration() {
    return this.targetElement.duration;
  }
  get currentTime() {
    return this.targetElement.currentTime;
  }
  get currentPlaybackDuration() {
    const e = this.nowPlayingItem;
    if (!e) return 0;
    const t = e.type === "podcast-episodes",
      r = e.playbackType === ce.unencryptedFull,
      s = e.playbackDuration;
    return r && s && !t ? this.calculateTime(s / 1e3) : this.calculateTime(this.currentDuration);
  }
  get currentPlaybackTime() {
    return this.calculateTime(this.currentTime);
  }
  get currentPlayingDate() {}
  get isPlayingAtLiveEdge() {
    return !1;
  }
  get seekableTimeRanges() {
    return this.currentPlaybackDuration ? [{ start: 0, end: this.currentPlaybackDuration }] : void 0;
  }
  get supportsPreviewImages() {
    return !1;
  }
  calculateTime(e = 0) {
    return Math.round(e);
  }
  get currentPlaybackTimeRemaining() {
    return this.currentPlaybackDuration - this.currentPlaybackTime;
  }
  get currentPlaybackProgress() {
    return this._currentPlaybackProgress || 0;
  }
  get hasMediaElement() {
    return this.targetElement instanceof HTMLElement && this.targetElement.parentNode !== null;
  }
  get isPaused() {
    return this.paused;
  }
  get isStopped() {
    return this.stopped;
  }
  get isPlaying() {
    return this.playbackState === I.playing;
  }
  get isPrimaryPlayer() {
    return this._isPrimaryPlayer;
  }
  set isPrimaryPlayer(e) {
    e !== this._isPrimaryPlayer &&
      ((this._isPrimaryPlayer = e),
      this._isPrimaryPlayer
        ? Se()?.setItem(yi, this.serial)
        : (this.dispatcher.publish(f.primaryPlayerDidChange, { target: this }), this.pause({ userInitiated: !1 })));
  }
  get isReady() {
    return this.targetElement.readyState !== 0;
  }
  get nowPlayingItem() {
    return this._nowPlayingItem;
  }
  set nowPlayingItem(e) {
    const t = this.dispatcher;
    if (typeof e > "u") {
      if (this._nowPlayingItem === void 0) return;
      (t.publish(f.nowPlayingItemWillChange, { item: e }),
        (this._nowPlayingItem = e),
        t.publish(f.nowPlayingItemDidChange, { item: e }));
      return;
    }
    const r = this._nowPlayingItem;
    r?.isEqual(e) ||
      (t.publish(f.nowPlayingItemWillChange, { item: e }),
      this.isPlaying && this.pauseMedia(),
      r &&
        (D.debug("setting state to ended on ", r.title),
        (r.state = x.ended),
        r.endMonitoringStateDidChange(),
        r.endMonitoringStateWillChange()),
      (this._nowPlayingItem = e),
      D.debug("setting state to playing on ", e.title),
      (e.state = x.playing),
      e && e.info && this.setTargetElementTitle(e.info),
      t.publish(f.nowPlayingItemDidChange, { item: e }),
      t.publish(f.playbackDurationDidChange, {
        currentTarget: this.targetElement,
        duration: this.currentPlaybackDuration,
        target: this.targetElement,
        type: "durationchange",
      }));
  }
  get playbackRate() {
    return this.targetElement.playbackRate;
  }
  set playbackRate(e) {
    this.targetElement.playbackRate = e;
  }
  get defaultPlaybackRate() {
    return this.targetElement.defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    this.targetElement.defaultPlaybackRate = e;
  }
  get playbackState() {
    return this._playbackState;
  }
  setPlaybackState(e, t) {
    const r = this._playbackState;
    if (e === r) return;
    const s = { oldState: r, state: e, nowPlayingItem: t };
    (D.debug("HTMLAudioPlayer.playbackState is changing", s),
      this.dispatcher.publish(f.playbackStateWillChange, s),
      (this._playbackState = e),
      this.dispatcher.publish(f.playbackStateDidChange, s));
  }
  get playbackTargetAvailable() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetAvailable;
  }
  set playbackTargetAvailable(e) {
    e !== this._playbackTargetAvailable &&
      ((this._playbackTargetAvailable = e),
      this.dispatcher.publish(f.playbackTargetAvailableDidChange, { available: e }));
  }
  get playbackTargetIsWireless() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetIsWireless;
  }
  set playbackTargetIsWireless(e) {
    e !== this._playbackTargetIsWireless &&
      ((this._playbackTargetIsWireless = e),
      this.dispatcher.publish(f.playbackTargetIsWirelessDidChange, { playing: e }));
  }
  get volume() {
    return this.targetElement.volume;
  }
  set volume(e) {
    this.targetElement.volume = e;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  get isInitialized() {
    return this._isInitialized;
  }
  clearNextManifest() {}
  async initialize() {
    if ((D.trace("HTMLAudioPlayer.initialize"), this._isInitialized)) {
      D.warn("Player is already initialized");
      return;
    }
    (await this.initializeMediaElement(),
      this.initializeEventHandlers(),
      this.dispatcher.publish(f.mediaElementCreated, this.targetElement),
      (this._isInitialized = !0));
  }
  initializeEventHandlers() {
    if ((this.windowHandlers.activate(), !this.hasMediaElement)) return;
    const e = this.targetElement;
    (window.WebKitPlaybackTargetAvailabilityEvent &&
      (e.addEventListener("webkitplaybacktargetavailabilitychanged", (t) => {
        this.playbackTargetAvailable = t.availability === "available";
      }),
      e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", (t) => {
        this.playbackTargetIsWireless = t.target === this.targetElement && !this.playbackTargetIsWireless;
      })),
      D.debug(`Adding event handlers to <HTMLMediaElement id=${this.targetElement.id} />`, this.targetElement));
    for (const t of so) e.addEventListener(t, this);
    this.dispatcher.publish(S.playerActivate);
  }
  removeEventHandlers() {
    (D.trace("HTMLAudioPlayer.removeEventHandlers()"),
      setTimeout(() => {
        D.debug(`Removing event handlers from <HTMLMediaElement id=${this.targetElement.id} />`, this.targetElement);
        for (const e of so) this.targetElement.removeEventListener(e, this);
        this.windowHandlers.deactivate();
      }, 0));
  }
  exitFullscreen() {
    return this.fullscreen.exit();
  }
  requestFullscreen(e) {
    return this.fullscreen.request(e);
  }
  newSeeker() {
    return (this.seeker?.end(), (this.seeker = new gn(this)), this.seeker);
  }
  async stop(e) {
    (D.debug("HTMLAudioPlayer.stop", e),
      await this.waitForPendingPlay(),
      this.isPlaying &&
        (D.debug("HTMLAudioPlayer.stop dispatching playbackStop"),
        this.dispatch(S.playbackStop, {
          item: this.nowPlayingItem,
          position: this.currentPlaybackTime,
          startPosition: this.initialPlaybackTime,
          ...e,
        })),
      await this.stopMediaAndCleanup());
  }
  async stopMediaAndCleanup(e = I.stopped) {
    (D.debug("HTMLAudioPlayer.stopMediaAndCleanup", e),
      await this.stopMediaElement(),
      (this.stopped = !0),
      (this.paused = !1));
    const t = this.nowPlayingItem;
    ((this.nowPlayingItem = void 0), (this.initialPlaybackTime = void 0), this.setPlaybackState(e, t));
  }
  onPlaybackError(e, t) {
    (this.resetDeferredPlay(), this.stop({ endReasonType: P.FAILED_TO_LOAD, userInitiated: !1 }));
  }
  calculatePlaybackProgress() {
    const e = Math.round((this.currentPlaybackTime / this.currentPlaybackDuration || 0) * 100) / 100;
    this._currentPlaybackProgress !== e &&
      ((this._currentPlaybackProgress = e),
      this.dispatcher.publish(f.playbackProgressDidChange, { progress: this._currentPlaybackProgress }));
  }
  calculateBufferedProgress(e) {
    const t = Math.round((e / this.currentPlaybackDuration) * 100);
    this._currentBufferedProgress !== t &&
      ((this._currentBufferedProgress = t), this.dispatcher.publish(f.bufferedProgressDidChange, { progress: t }));
  }
  destroy() {
    if (
      (D.debug("HTMLAudioPlayer.destroy()"),
      (this._isDestroyed = !0),
      this.playbackErrorSubscription.unsubscribe(),
      !this.hasMediaElement)
    )
      return;
    const e = this.targetElement;
    (this.resetMediaElement(), this.removeEventHandlers(), e.parentNode?.removeChild(e));
  }
  async handleEvent(e) {
    e.type !== "timeupdate" && D.debug("HTMLAudioPlayer.handleEvent: ", e.type, e);
    const { nowPlayingItem: t } = this;
    switch (((e.timestamp = Date.now()), e.type)) {
      case "canplay": {
        (this.dispatcher.publish(f.mediaCanPlay, e),
          this._playbackState === I.waiting && !this.targetElement.paused && this.setPlaybackState(I.playing, t));
        break;
      }
      case "durationchange": {
        this.targetElement.duration !== 1 / 0 &&
          ((e.duration = this.currentPlaybackDuration),
          this.dispatcher.publish(f.playbackDurationDidChange, e),
          this.calculatePlaybackProgress());
        break;
      }
      case "ended": {
        if ((D.debug('media element "ended" event'), this.isElementCleaned())) {
          D.debug('media element already cleaned, ignoring "ended" event');
          break;
        }
        const r = this.nowPlayingItem,
          s = r?.playbackDuration ? r.playbackDuration / 1e3 : this.currentPlaybackTime;
        (await this.stopMediaAndCleanup(I.ended),
          this.dispatch(S.playbackStop, { item: r, position: s, endReasonType: P.NATURAL_END_OF_TRACK }));
        break;
      }
      case "error": {
        (D.error("Playback Error", e, this.targetElement.error),
          this.dispatcher.publish(f.mediaPlaybackError, new p(p.Reason.MEDIA_PLAYBACK, "Playback Error")));
        break;
      }
      case "loadedmetadata": {
        this.dispatcher.publish(f.metadataDidChange, e);
        break;
      }
      case "loadstart": {
        this.setPlaybackState(I.loading, t);
        break;
      }
      case "pause": {
        this.setPlaybackState(this.stopped ? I.stopped : I.paused, t);
        break;
      }
      case "play":
      case "playing": {
        ((this.paused = !1), (this.stopped = !1), (this.isPrimaryPlayer = !0), this.setPlaybackState(I.playing, t));
        break;
      }
      case "progress": {
        const r = this.targetElement.buffered;
        (this.handleBufferStart(), r.length === 1 && r.start(0) === 0 && this.calculateBufferedProgress(r.end(0)));
        break;
      }
      case "ratechange": {
        this.dispatcher.publish(f.playbackRateDidChange, e);
        break;
      }
      case "seeked": {
        this.stopped
          ? this.setPlaybackState(I.stopped, t)
          : this.paused
            ? this.setPlaybackState(I.paused, t)
            : this.playbackState !== I.ended && this.setPlaybackState(I.playing, t);
        break;
      }
      case "seeking": {
        (this.playbackState === I.paused ? (this.paused = !0) : this.playbackState === I.stopped && (this.stopped = !0),
          this.playbackState !== I.ended && this.setPlaybackState(I.seeking, t));
        break;
      }
      case "timeupdate": {
        (this.dispatcher.publish(f.playbackTimeDidChange, {
          currentPlaybackDuration: this.currentPlaybackDuration,
          currentPlaybackTime: this.currentPlaybackTime,
          currentPlaybackTimeRemaining: this.currentPlaybackTimeRemaining,
        }),
          this.calculatePlaybackProgress());
        break;
      }
      case "volumechange": {
        this.dispatcher.publish(f.playbackVolumeDidChange, e);
        break;
      }
      case "waiting": {
        this.isReady || this.setPlaybackState(I.waiting, t);
        break;
      }
    }
  }
  handleBufferStart() {
    const { targetElement: e } = this;
    this.initialPlaybackTime !== void 0 ||
      e.paused ||
      e.buffered.length === 0 ||
      ((this.initialPlaybackTime = this.currentPlaybackTime),
      D.debug("HTMLAudioPlayer.handleBufferStart: setting initialPlaybackTime", this.initialPlaybackTime));
  }
  async pause(e = {}) {
    (await this.waitForPendingPlay(),
      this.isPlaying &&
        (await this.pauseMedia(),
        (this.paused = !0),
        this.dispatch(S.playbackPause, { item: this.nowPlayingItem, position: this.currentPlaybackTime, ...e })));
  }
  async play(e = !0) {
    if ((D.debug("HTMLAudioPlayer.play()"), !!this.nowPlayingItem))
      try {
        (await this.playMedia(),
          D.debug("HTMLAudioPlayer.play dispatching playbackPlay"),
          this.dispatch(S.playbackPlay, {
            userInitiated: e,
            item: this.nowPlayingItem,
            position: this.currentPlaybackTime,
          }));
      } catch (t) {
        const r = t?.name;
        if (
          (r !== void 0 && fm.includes(r) && D.error("HTMLAudioPlayer.play() rejected due to", t),
          r === "NotAllowedError")
        )
          throw new p(
            p.Reason.USER_INTERACTION_REQUIRED,
            "Playback of media content requires user interaction first and cannot be automatically started on page load.",
          );
      }
  }
  preload() {
    return this.loadMedia();
  }
  showPlaybackTargetPicker() {
    this.playbackTargetAvailable && this.targetElement.webkitShowPlaybackTargetPicker();
  }
  dispatch(e, t) {
    (t.item === void 0 && (t.item = this.nowPlayingItem),
      Ke(t, "isPlaying") || (t.isPlaying = this.isPlaying),
      this.dispatcher.publish(e, t));
  }
  tsidChanged(e) {
    e === void 0 || e === "" || (this.isPrimaryPlayer = e === this.serial);
  }
  async waitForPendingPlay() {
    this.deferredPlay && (await this.deferredPlay.promise);
  }
  async loadMedia() {
    (D.debug("HTMLAudioPlayer.loadMedia", this.targetElement), this.targetElement.load());
  }
  async pauseMedia() {
    this.targetElement.pause();
  }
  async playAssetURL(e, t) {
    (D.debug("HTMLAudioPlayer.playAssetURL", e), (this.targetElement.src = e));
    const r = this.loadMedia();
    if (t) {
      (D.debug("HTMLAudioPlayer.loadOnly"), await r);
      return;
    }
    await this.playMedia();
  }
  async playItemFromUnencryptedSource(e, t, r, s) {
    (r?.startTime && (e += `#t=${r.startTime}`), t || this.startPlaybackSequence());
    const n = t ? void 0 : this.deferredPlay;
    try {
      await this.playAssetURL(e, t);
    } catch (a) {
      throw (n?.resolve(void 0), n !== void 0 && this.deferredPlay === n && (this.deferredPlay = void 0), a);
    }
    return this.finishPlaybackSequence();
  }
  async playItemFromEncryptedSource(e, t, r) {
    throw new g("mk-243", g.Reason.CONTENT_UNSUPPORTED, {
      description: "HTMLAudioPlayer cannot play encrypted sources",
      data: { item: e },
    });
  }
  async seekToTime(e) {
    this.targetElement.currentTime = e;
  }
  async preloadItem(e, t) {}
  async setPresentationMode(e) {}
  async loadPreviewImage(e) {}
  async playMedia() {
    D.debug("HTMLAudioPlayer.playMedia", this.targetElement);
    try {
      await this.targetElement.play();
    } catch (e) {
      throw (D.error("HTMLAudioPlayer.playMedia: targetElement.play() rejected", e), e);
    }
  }
  setTargetElementTitle(e) {
    this.hasMediaElement && (this.targetElement.title = e);
  }
  resetDeferredPlay() {
    this.deferredPlay = void 0;
  }
  async stopMediaElement() {
    (D.trace("HTMLAudioPlayer.stopMediaElement()"),
      this.hasMediaElement &&
        (D.debug(`Stopping HTMLMediaElement id=${this.targetElement.id}`, this.targetElement),
        this.targetElement.pause(),
        this.resetMediaElement()));
  }
  resetMediaElement() {
    D.trace("HTMLAudioPlayer.resetMediaElement()");
    const e = this.targetElement;
    if (!e || this.isElementCleaned()) {
      D.debug("No HTMLMediaElement to reset");
      return;
    }
    (D.debug("Resetting HTMLMediaElement", e),
      (e.currentTime = 0),
      e.removeAttribute("src"),
      e.removeAttribute("title"));
  }
  isElementCleaned() {
    const e = this.targetElement;
    return e ? e.currentTime === 0 && e.src === "" && e.title === "" : !0;
  }
  finishPlaybackSequence() {
    D.debug("HTMLAudioPlayer.finishPlaybackSequence", this.deferredPlay);
    const e = this.deferredPlay?.resolve(void 0);
    return ((this.deferredPlay = void 0), e);
  }
  startPlaybackSequence() {
    return (
      D.debug("HTMLAudioPlayer.startPlaybackSequence", this.deferredPlay),
      this.deferredPlay && (D.warn("Previous playback sequence not cleared"), this.finishPlaybackSequence()),
      (this.deferredPlay = mn()),
      this.deferredPlay.promise
    );
  }
  async initializeMediaElement() {
    const e = Tn();
    ((e.autoplay = !1),
      (e.id = "apple-music-player"),
      (e.controls = !1),
      (e.muted = !1),
      (e.playbackRate = 1),
      (e.preload = "metadata"),
      (e.volume = 1),
      (this.mediaElement = e),
      document.body.appendChild(e),
      D.debug("initializedMediaElement", e));
  }
  toString() {
    return `<${this.playerName} id="${this.id}" isInitialized=${this.isInitialized} isDestroyed=${this.isDestroyed} />`;
  }
}
rl([T()], oi.prototype, "onPlaybackError");
rl([Et(250)], oi.prototype, "seekToTime");
let sl = "playback/Unknown-0.0.0";
function ym(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
function mm(i) {
  const e = i?.name !== void 0 && i.name !== "" ? ym(i.name) : "Unknown",
    t = i?.build ?? i?.version ?? "0.0.0";
  sl = `playback/${e}-${t}`;
}
function nl() {
  return sl;
}
var gm = ((i) => ((i.REPEAT = "REPEAT"), (i.SHUFFLE = "SHUFFLE"), (i.AUTOPLAY = "AUTOPLAY"), i))(gm || {}),
  Ue = ((i) => (
    (i[(i.PREVIEW_ONLY = 0)] = "PREVIEW_ONLY"),
    (i[(i.MIXED_CONTENT = 1)] = "MIXED_CONTENT"),
    (i[(i.FULL_PLAYBACK_ONLY = 2)] = "FULL_PLAYBACK_ONLY"),
    (i[(i.SHAREPLAY_PARTICIPANT = 3)] = "SHAREPLAY_PARTICIPANT"),
    i
  ))(Ue || {});
const vm = "capabilitiesChanged",
  bm = "musickitconfigured",
  _m = "autoplayEnabledDidChange",
  Tm = "musickitloaded",
  Em = "mediaSkipAvailable",
  km = "mediaRollEntered",
  Sm = "mediaUpNext",
  Im = "needsGDPRDidChange",
  Pm = "queueIsReady",
  wm = "queueItemsDidChange",
  Am = "queueItemForStartPosition",
  Rm = "queuePositionDidChange",
  Cm = "shuffleModeDidChange",
  Om = "repeatModeDidChange",
  Dm = "musickitwebcomponentsloaded",
  E = {
    configured: bm,
    loaded: Tm,
    audioTrackAdded: f.audioTrackAdded,
    audioTrackChanged: f.audioTrackChanged,
    audioTrackRemoved: f.audioTrackRemoved,
    authorizationStatusDidChange: He.authorizationStatusDidChange,
    authorizationStatusWillChange: He.authorizationStatusWillChange,
    bufferedProgressDidChange: f.bufferedProgressDidChange,
    capabilitiesChanged: vm,
    autoplayEnabledDidChange: _m,
    drmUnsupported: f.drmUnsupported,
    eligibleForSubscribeView: He.eligibleForSubscribeView,
    forcedTextTrackChanged: f.forcedTextTrackChanged,
    hlsDaterangeUpdated: f.hlsDaterangeUpdated,
    mediaCanPlay: f.mediaCanPlay,
    mediaElementCreated: f.mediaElementCreated,
    mediaItemStateDidChange: Os.mediaItemStateDidChange,
    mediaItemStateWillChange: Os.mediaItemStateWillChange,
    mediaPlaybackError: f.mediaPlaybackError,
    mediaSkipAvailable: Em,
    mediaRollEntered: km,
    mediaUpNext: Sm,
    metadataDidChange: f.metadataDidChange,
    authReflectionDidComplete: He.authReflectionDidComplete,
    needsGDPRDidChange: Im,
    nowPlayingItemDidChange: f.nowPlayingItemDidChange,
    nowPlayingItemWillChange: f.nowPlayingItemWillChange,
    playInitiated: "playInitiated",
    playbackBitrateDidChange: f.playbackBitrateDidChange,
    playbackDurationDidChange: f.playbackDurationDidChange,
    playbackProgressDidChange: f.playbackProgressDidChange,
    playbackRateDidChange: f.playbackRateDidChange,
    playbackStateDidChange: f.playbackStateDidChange,
    playbackStateWillChange: f.playbackStateWillChange,
    playbackTargetAvailableDidChange: f.playbackTargetAvailableDidChange,
    playbackTargetIsWirelessDidChange: f.playbackTargetIsWirelessDidChange,
    playbackTimeDidChange: f.playbackTimeDidChange,
    playbackVolumeDidChange: f.playbackVolumeDidChange,
    playerTypeDidChange: f.playerTypeDidChange,
    presentationModeDidChange: f.presentationModeDidChange,
    primaryPlayerDidChange: f.primaryPlayerDidChange,
    queueIsReady: Pm,
    queueItemsDidChange: wm,
    queueItemForStartPosition: Am,
    queuePositionDidChange: Rm,
    shuffleModeDidChange: Cm,
    repeatModeDidChange: Om,
    storefrontCountryCodeDidChange: He.storefrontCountryCodeDidChange,
    storefrontIdentifierDidChange: He.storefrontIdentifierDidChange,
    textTrackAdded: f.textTrackAdded,
    textTrackChanged: f.textTrackChanged,
    textTrackRemoved: f.textTrackRemoved,
    timedMetadataDidChange: f.timedMetadataDidChange,
    userTokenDidChange: He.userTokenDidChange,
    videoTrackAdded: f.videoTrackAdded,
    videoTrackChanged: f.videoTrackChanged,
    videoTrackRemoved: f.videoTrackRemoved,
    webComponentsLoaded: Dm,
  },
  FT = {
    playbackStateChanged: "sharePlay.playbackStateChanged",
    volumeChanged: "sharePlay.volumeChanged",
    nextItem: "sharePlay.nextItem",
    previousItem: "sharePlay.previousItem",
    shuffleModeChanged: "sharePlay.shuffleModeChanged",
    repeatModeChanged: "sharePlay.repeatModeChanged",
    autoPlayChanged: "sharePlay.autoPlayChanged",
    progressChanged: "sharePlay.progressChanged",
    mediaStateUpdate: "sharePlay.mediaStateUpdate",
  };
function Mm(i) {
  const e = parseInt(i.hlsMetadata["skip.count"], 10),
    t = [];
  if (isNaN(e) || e === 0) return t;
  for (let r = 0; r < e; r++) {
    const s = {
      start: parseFloat(i.hlsMetadata[`skip.${r}.start`]),
      duration: parseFloat(i.hlsMetadata[`skip.${r}.duration`]),
      target: parseFloat(i.hlsMetadata[`skip.${r}.target`]),
      label: i.hlsMetadata[`skip.${r}.label`],
    };
    (i.hlsMetadata[`skip.${r}.promo.enabled`] !== void 0 &&
      (s.promo = {
        enabled: i.hlsMetadata[`skip.${r}.promo.enabled`] === "true",
        image: i.hlsMetadata[`skip.${r}.promo.image`],
        "image-height": parseInt(i.hlsMetadata[`skip.${r}.promo.image-height`], 10),
        "image-width": parseInt(i.hlsMetadata[`skip.${r}.promo.image-width`], 10),
        genre: i.hlsMetadata[`skip.${r}.promo.genre`],
        "release-year": parseInt(i.hlsMetadata[`skip.${r}.promo.release-year`], 10),
        "rating-display-name": i.hlsMetadata[`skip.${r}.promo.rating-display-name`],
        "rating-system": i.hlsMetadata[`skip.${r}.promo.rating-system`],
        "canonical-id": i.hlsMetadata[`skip.${r}.promo.canonical-id`],
        title: i.hlsMetadata[`skip.${r}.promo.title`],
        "rating-tag": i.hlsMetadata[`skip.${r}.promo.rating-tag`],
        "rating-rank": i.hlsMetadata[`skip.${r}.promo.rating-rank`],
        "up-next": {
          "is-added": i.hlsMetadata[`skip.${r}.promo.up-next.is-added`] === "true",
          "add-label": i.hlsMetadata[`skip.${r}.promo.up-next.add-label`],
          "added-label": i.hlsMetadata[`skip.${r}.promo.up-next.added-label`],
        },
        runtime: parseInt(i.hlsMetadata[`skip.${r}.promo.runtime`], 10),
      }),
      t.push(s));
  }
  return t;
}
function Ks(i, e = ["pre-roll", "mid-roll", "post-roll"]) {
  if (i.hlsMetadata === void 0) return [];
  const t = [];
  return (
    e.forEach((r) => {
      const s = parseInt(i.hlsMetadata[`${r}.count`], 10);
      if (!isNaN(s))
        for (let n = 0; n < s; n++) {
          const a = `${r}.${n}`,
            o = {
              index: n,
              type: r,
              skippable: i.hlsMetadata[`${a}.skippable`] === "true",
              "adam-id": i.hlsMetadata[`${a}.adam-id`],
              start: Math.round(parseFloat(i.hlsMetadata[`${a}.start`])),
              duration: Math.round(parseFloat(i.hlsMetadata[`${a}.duration`])),
            },
            c = `${a}.dynamic-slot.data-set-id`;
          (i.hlsMetadata[c] !== void 0 && (o["dynamic-id"] = i.hlsMetadata[c]), t.push(o));
        }
    }),
    t
  );
}
const no = (i, e) => i + e.duration;
function KT(i) {
  const e = Ks(i, ["pre-roll"]),
    t = Ks(i, ["post-roll"]),
    r = e.reduce(no, 0),
    s = t.reduce(no, 0),
    n = i.hlsMetadata["up-next.start"] ?? i.hlsMetadata["watched.time"] ?? i.hlsMetadata["feature.duration"],
    a = parseFloat(n),
    o = a - r;
  return { mainContentStarts: r, mainContentEnds: a, mainContentLength: o, totalContentLength: a + s };
}
var Lm = Object.defineProperty,
  Nm = Object.getOwnPropertyDescriptor,
  Um = (i, e, t, r) => {
    for (var s = Nm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Lm(e, t, s), s);
  };
class Or {
  constructor(e, t, r, s, n = !1) {
    ((this.dispatcher = e), (this.callback = t), (this.start = r), (this.stop = s), (this.allowMultiple = n));
  }
  inWatchSpan = !1;
  startMonitor() {
    (this.dispatcher.unsubscribe(E.playbackTimeDidChange, this.handleTimeChange),
      this.dispatcher.subscribe(E.playbackTimeDidChange, this.handleTimeChange));
  }
  stopMonitor() {
    this.dispatcher.unsubscribe(E.playbackTimeDidChange, this.handleTimeChange);
  }
  async handleTimeChange(e, { currentPlaybackTime: t }) {
    if (!Number.isFinite(t) || t < this.start || t > this.stop) {
      this.inWatchSpan = !1;
      return;
    }
    this.inWatchSpan ||
      (this.allowMultiple || this.stopMonitor(), (this.inWatchSpan = !0), await this.callback(t, this));
  }
}
Um([T()], Or.prototype, "handleTimeChange");
var xm = Object.defineProperty,
  Fm = Object.getOwnPropertyDescriptor,
  Km = (i, e, t, r) => {
    for (var s = Fm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && xm(e, t, s), s);
  };
class Pi {
  isActive = !1;
  isMonitoring = !1;
  dispatcher;
  playbackController;
  watchers = [];
  constructor(e) {
    ((this.handlePlaybackThreshold = this.handlePlaybackThreshold.bind(this)),
      (this.playbackController = e.controller),
      (this.dispatcher = e.services.dispatcher),
      this.dispatcher.subscribe(E.nowPlayingItemDidChange, this.handleMediaItemChange));
  }
  activate() {
    ((this.isActive = !0), this.startMonitor());
  }
  deactivate() {
    ((this.isActive = !1), this.clearMonitor());
  }
  clearMonitor() {
    this.isMonitoring && (this.watchers.forEach((e) => e.stopMonitor()), (this.isMonitoring = !1));
  }
  shouldMonitor() {
    return this.isActive;
  }
  startMonitor() {
    this.shouldMonitor() && (this.watchers.forEach((e) => e.startMonitor()), (this.isMonitoring = !0));
  }
  handleMediaItemChange() {
    this.isActive && (this.clearMonitor(), this.shouldMonitor() && this.startMonitor());
  }
}
Km([T()], Pi.prototype, "handleMediaItemChange");
class Bm extends Pi {
  rollMap = new Map();
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold(e, t) {
    if (!this.rollMap.has(t)) return;
    const r = this.rollMap.get(t);
    (this.dispatcher.publish(E.mediaRollEntered, r), this.rollMap.delete(t));
  }
  shouldMonitor() {
    return super.shouldMonitor() ? this.getRollMetadata().length > 0 : !1;
  }
  startMonitor() {
    (this.setupWatchers(this.getRollMetadata()), super.startMonitor());
  }
  getRollMetadata() {
    const e = this.playbackController.nowPlayingItem;
    return e === void 0 ? [] : Ks(e, ["pre-roll", "post-roll"]);
  }
  setupWatchers(e) {
    const t = [];
    (e.forEach((r) => {
      const { start: s, duration: n } = r,
        a = new Or(this.dispatcher, this.handlePlaybackThreshold, s, s + n);
      (t.push(a), this.rollMap.set(a, r));
    }),
      (this.watchers = t));
  }
}
class Vm extends Pi {
  skipMap = new Map();
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold(e, t) {
    if (!this.skipMap.has(t)) return;
    const r = this.skipMap.get(t);
    this.dispatcher.publish(E.mediaSkipAvailable, r);
  }
  shouldMonitor() {
    return super.shouldMonitor() ? this.getNowPlayingMetadata().length > 0 : !1;
  }
  startMonitor() {
    (this.setupWatchers(this.getNowPlayingMetadata()), super.startMonitor());
  }
  getNowPlayingMetadata() {
    const e = this.playbackController.nowPlayingItem;
    return e === void 0 ? [] : Mm(e);
  }
  setupWatchers(e) {
    const t = [];
    (e.forEach((r) => {
      const { start: s, target: n, duration: a, promo: o } = r,
        c = new Or(this.dispatcher, this.handlePlaybackThreshold, s, o ? n : s + a, !0);
      (t.push(c), this.skipMap.set(c, r));
    }),
      (this.watchers = t));
  }
}
const _ = new kt("services"),
  BT = (i) => Math.min(Math.round(Cn(i)), Math.round(On(i))),
  ao = (i) => !isNaN(Cn(i)) && !isNaN(On(i)),
  Cn = (i) => parseFloat(i.hlsMetadata["up-next.start"]),
  On = (i) => parseFloat(i.hlsMetadata["watched.time"]),
  $m = async (i, e) => {
    if (!(!i.isUTS || !i.assetURL))
      try {
        const t = Ii(i, e.playOptions),
          r = await e.manifestManager.fetchManifest(t);
        i.hlsMetadata = { ...i.hlsMetadata, ...Hm(r.content) };
      } catch (t) {
        _.error(t.message, t);
      }
  };
function Hm(i, e = {}) {
  const t = /^(?:#EXT-X-SESSION-DATA:?)DATA-ID="([^"]+)".+VALUE="([^"]+)".*$/,
    r = "com.apple.hls.",
    s = {};
  for (const n of i.split(`
`)) {
    const a = n.match(t);
    if (a) {
      let o = a[1];
      a[1].startsWith(r) && e.stripPrefix !== !1 && (o = a[1].slice(r.length));
      const c = a[2];
      s[o] = c;
    }
  }
  return s;
}
var jm = Object.defineProperty,
  qm = Object.getOwnPropertyDescriptor,
  Wm = (i, e, t, r) => {
    for (var s = qm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && jm(e, t, s), s);
  };
class al extends Pi {
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold() {
    this.dispatcher.publish(E.mediaUpNext);
  }
  shouldMonitor() {
    if (!super.shouldMonitor()) return !1;
    const e = this.playbackController.nowPlayingItem;
    return e !== void 0 && ao(e);
  }
  startMonitor() {
    (this.setupWatchers(), super.startMonitor());
  }
  setupWatchers() {
    const e = this.playbackController.nowPlayingItem;
    !e ||
      !ao(e) ||
      (this.watchers = [
        new Or(
          this.dispatcher,
          this.handlePlaybackThreshold,
          Math.round(this.getStartTime(e)),
          Number.POSITIVE_INFINITY,
        ),
      ]);
  }
  getStartTime(e) {
    const t = Cn(e);
    return isNaN(t) ? On(e) : t;
  }
}
Wm([T()], al.prototype, "handlePlaybackThreshold");
const gt = _e.register("mk-console-logging"),
  Nt = fn.register("mk-logging-levels"),
  ol = ee.ERROR;
let lr = ol;
const M = new kt("mk", { level: lr, handlers: { console: new Dh({ enabled: !1 }), external: new hc(() => {}) } });
function cl(i) {
  Eh(M, kh(i));
}
function Gm() {
  (M.setLevel(lr), Th(M, { includeRoot: !1 }));
}
function Bs(i) {
  M.handlers.console.enabled = i ?? !1;
}
function oo(i) {
  lr = mt(i) ?? lr;
}
function Ym() {
  return M.level !== ol;
}
function zm(i) {
  M.handlers.external = new hc(i);
}
function Qm(i) {
  const e = {};
  i !== void 0 && (i = i.startsWith("mk/") ? i : "mk/" + i);
  const t = M.children;
  for (; t.length > 0;) {
    const r = t.shift();
    if (r === void 0) break;
    (i !== void 0 && !r.namespace.startsWith(i)) || ((e[r.namespace] = r.levelName), t.unshift(...r.children));
  }
  return e;
}
const ci = {
  getLogger(i = "*") {
    return M.getByNamespace(i ?? "*");
  },
  setConsoleOutput(i) {
    i === !0
      ? (gt.enable(), Bs(!0), M.info("Console output is enabled with level " + M.levelName))
      : (gt.disable(), Bs(!1));
  },
  setLoggingLevels(i, e) {
    i.trim() !== "" ? (Nt.set(i), cl(i), ci.setConsoleOutput(e ?? !0)) : ci.clearLoggingLevels(e ?? !1);
  },
  clearLoggingLevels(i = !1) {
    (ci.setConsoleOutput(i), Nt.clear(), Gm());
  },
  listLoggers(i) {
    return Qm(i);
  },
};
gt.enabled && ci.setConsoleOutput(gt.enabled);
Nt.value !== void 0 && ci.setLoggingLevels(Nt.value, gt.enabled);
var ke = ((i) => ((i[(i.none = 0)] = "none"), (i[(i.one = 1)] = "one"), (i[(i.all = 2)] = "all"), i))(ke || {});
class Xm {
  canSetRepeatMode = !1;
  get repeatMode() {
    return 0;
  }
  set repeatMode(e) {
    e !== this.repeatMode && _.warn("setting repeatMode is not supported in this playback method");
  }
}
class Jm {
  canSetRepeatMode = !0;
  dispatcher;
  _repeatMode;
  constructor(e, t = 0) {
    ((this.dispatcher = e), (this._repeatMode = t));
  }
  get repeatMode() {
    return this._repeatMode;
  }
  set repeatMode(e) {
    !(e in ke) ||
      e === this._repeatMode ||
      ((this._repeatMode = e), this.dispatcher.publish(E.repeatModeDidChange, this._repeatMode));
  }
}
const co = el(),
  H = {
    app: {},
    autoplay: { maxQueueSizeForAutoplay: 50, maxQueueSizeInRequest: 10, maxUpcomingTracksToMaintain: 10 },
    features: {
      xtrick: !0,
      isWeb: !0,
      bookmarking: !1,
      "seamless-audio-transitions": !0,
      "enhanced-hls": !1,
      "fetch-container-pages": !1,
    },
    urls: {
      hls: co.hls,
      rtc: co.rtc,
      mediaApi: "https://amp-api.music.apple.com/v1",
      webPlayback: `https://${Si("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
    },
  },
  lo = Er.register("mk-offers-key-urls").get();
lo
  ? (H.urls.hlsOffersKeyUrls = lo)
  : (H.urls.hlsOffersKeyUrls = {
      "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
      "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
      "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
    });
let w;
function Zm(i, e) {
  return ((w = new eg(i, e)), w);
}
class eg {
  precache;
  storekit;
  dispatcher;
  _apiStorefrontId;
  _defaultStorefrontCountryCode;
  _hasAuthorized = !1;
  _metricsClientId;
  _providedRequestUserToken = !1;
  constructor(e, t = {}) {
    const { dispatcher: r } = t.services ?? {};
    if (!r) throw new p(p.Reason.CONFIGURATION_ERROR, "No dispatcher configured for Store Service");
    ((this.dispatcher = r),
      "precache" in t && (this.precache = t.precache),
      t.storefrontId && (this.storefrontId = t.storefrontId),
      (this._defaultStorefrontCountryCode = t.storefrontCountryCode),
      ("affiliateToken" in t || "campaignToken" in t) &&
        (t.linkParameters = { ...(t.linkParameters || {}), at: t.affiliateToken, ct: t.campaignToken }),
      (this.storekit = new vc(e, {
        apiBase: H.urls.mediaApi,
        authenticateMethod: H.features["legacy-authenticate-method"] ? "POST" : "GET",
        deeplink: t.linkParameters,
        disableAuthBridge: t.disableAuthBridge,
        iconURL: H.app.icon,
        meParameters: t.meParameters,
        persist: t.persist,
        realm: t.realm || te.MUSIC,
        fetch: t?.services?.request?.fetch,
        disableLogoutURL: t.disableLogoutURL,
      })),
      this.storekit.addEventListener(E.authorizationStatusDidChange, (s) => {
        const { authorizationStatus: n } = s;
        this._hasAuthorized = [re.AUTHORIZED, re.RESTRICTED].includes(n);
      }));
  }
  get authorizationStatus() {
    return this.storekit.authorizationStatus;
  }
  get cid() {
    return this.storekit.cid;
  }
  get developerToken() {
    return this.storekit.developerToken;
  }
  get hasAuthorized() {
    return this._hasAuthorized;
  }
  get isAuthorized() {
    return this.storekit.hasAuthorized;
  }
  get isRestricted() {
    return this.storekit.authorizationStatus === re.RESTRICTED;
  }
  get isU13() {
    return this.storekit.isU13;
  }
  get metricsClientId() {
    return this._metricsClientId;
  }
  set metricsClientId(e) {
    this._metricsClientId = e;
  }
  get musicUserToken() {
    return this.storekit.userToken;
  }
  set musicUserToken(e) {
    this.storekit.userToken = e;
  }
  updateUserTokenFromStorage(e) {
    return this.storekit.updateUserTokenFromStorage(e);
  }
  set dynamicMusicUserToken(e) {
    this.storekit.dynamicUserToken = e;
  }
  get needsGDPR() {
    _.error("needsGDPR has been deprecated. Plesae migrate to shouldDisplayPrivacyLink()");
  }
  get realm() {
    return this.storekit.realm;
  }
  set requestUserToken(e) {
    ((this._providedRequestUserToken = !0), (this.storekit.requestUserToken = e));
  }
  get restrictedEnabled() {
    return this.storekit.restrictedEnabled;
  }
  set restrictedEnabled(e) {
    this.storekit.overrideRestrictEnabled(e);
  }
  get storefrontCountryCode() {
    return this.isAuthorized
      ? this.storekit.storefrontCountryCode
      : (this._defaultStorefrontCountryCode ?? this.storekit.storefrontCountryCode);
  }
  get storefrontId() {
    return this._apiStorefrontId || this.storekit.storefrontCountryCode;
  }
  set storefrontId(e) {
    (e && (e = e.toLowerCase()),
      e !== this._apiStorefrontId &&
        ((this._apiStorefrontId = e), this.dispatcher.publish(S.apiStorefrontChanged, { storefrontId: e })));
  }
  get subscribeURL() {
    return this.storekit.deeplinkURL({ p: "subscribe" });
  }
  get subscribeFamilyURL() {
    return this.storekit.deeplinkURL({ p: "subscribe-family" });
  }
  get subscribeIndividualURL() {
    return this.storekit.deeplinkURL({ p: "subscribe-individual" });
  }
  get subscribeStudentURL() {
    return this.storekit.deeplinkURL({ p: "subscribe-student" });
  }
  get userToken() {
    return this.musicUserToken;
  }
  async authorize() {
    if (this.storekit.userTokenIsValid) return this.storekit.userToken;
    let e;
    try {
      e = await this.storekit.requestUserToken();
    } catch {
      try {
        await this.unauthorize();
      } catch {}
      throw new p(p.Reason.AUTHORIZATION_ERROR, "Unauthorized");
    }
    if ((this._providedRequestUserToken && (this.storekit.userToken = e), this.storekit.userTokenIsValid))
      return (
        await this.storekit
          .requestStorefrontCountryCode()
          .catch(async (t) => (await this.unauthorize(), Promise.reject(t))),
        e
      );
  }
  async shouldDisplayPrivacyLink(e) {
    return this.storekit.shouldDisplayPrivacyLink(e);
  }
  async unauthorize() {
    return this.storekit.revokeUserToken();
  }
}
function tg(i) {
  return (i === void 0 && (i = w && w.storekit), i !== void 0 && i.hasAuthorized && i.userTokenIsValid);
}
async function ig(i) {
  return (i === void 0 && (i = w && w.storekit), i.hasMusicSubscription());
}
function rg(i) {
  const e = ld(
    {
      id: "metadata.itemId",
      type: "metadata.itemType",
      "attributes.contentRating": function () {
        if (i?.metadata?.isExplicit === 1) return bc;
      },
      "attributes.playParams": function () {
        return i?.metadata?.isPlayable === 0 ? !1 : { id: i?.metadata?.itemId, kind: i?.metadata?.itemType };
      },
      "container.id": "metadata.containerId",
      "container.name": "metadata.containerName",
      "container.type": "metadata.containerType",
    },
    i,
  );
  return { attributes: {}, ...e };
}
const sg = { condition: () => !0, toOptions: (i, e, t) => [{ ...i, context: t }] },
  ng = (i) => i.type === "stations" && i.attributes?.isLive,
  ag = (i, e, t) => [
    { ...i, context: t, container: { attributes: i.attributes, id: i.id, type: i.type, name: t?.featureName } },
  ],
  og = { condition: ng, toOptions: ag },
  cg = {
    condition: function (e) {
      return (
        e.type === "stations" &&
        e.attributes?.kind === "streaming" &&
        e.attributes?.streamingRadioSubType?.toLowerCase() === "episode" &&
        e.attributes?.isLive === !1
      );
    },
    toOptions: function (e, t, r) {
      return [
        {
          ...e,
          context: r,
          container: {
            attributes: e.attributes,
            id: e.id,
            type: e.type,
            name: r?.featureName,
            stationHash: e.attributes?.playParams?.stationHash,
          },
        },
      ];
    },
  },
  ll = (i) => (e) => !!e.relationships?.[i]?.data,
  Dn =
    (...i) =>
    ({ type: e }) =>
      i.includes(e),
  ul = (i) => {
    if (i === void 0 || i === "") return;
    const { prefix: e } = H;
    return e ? `${e}:${i}` : i;
  },
  lg = (i, e) => e ?? i?.container?.name ?? ht.SONG,
  ug = (i, e, t) => {
    const r = { id: i.id, ...e, name: ul(lg(i, t?.featureName)) };
    return [
      { relationships: i.relationships, attributes: i.attributes, id: i.id, type: i.type, container: r, context: t },
    ];
  },
  dg = { toOptions: ug, condition: Dn("songs", "library-songs", "music-videos", "library-music-videos") },
  hg = (i) => {
    if (i === void 0) return;
    const [e] = Object.keys(i);
    return i[e];
  },
  pg = (i) => {
    if (i === void 0) return;
    const e = Object.keys(i);
    return i[e[e.length - 1]];
  },
  fg = ({ type: i, attributes: { assetTokens: e } }) => (i.includes("udio") ? hg(e) : pg(e)),
  yg = {
    condition: Dn("uploaded-audios", "uploadedAudio", "uploaded-videos", "uploadedVideo"),
    toOptions: (i, e, t) => {
      const r = {
        ...i,
        context: t,
        attributes: {
          ...i.attributes,
          assetUrl: fg(i),
          playParams: i?.attributes?.playParams ?? { id: i.id, kind: i.type },
        },
      };
      return (
        e !== void 0 && (r.container = e),
        t?.featureName !== void 0 && (r.container = { ...r.container, name: t?.featureName }),
        [r]
      );
    },
  },
  mg = {
    toOptions: function (i, e, t) {
      return i.relationships.episodes.data.map((r) => ({ ...r, context: t }));
    },
    condition: ll("episodes"),
    requiredRelationships: ["episodes"],
  };
function gg(i = []) {
  return i.length === 0
    ? !1
    : i.filter(({ attributes: e }) => (e ? e.workName || e.movementName || e.movementCount || e.movementNumber : !1))
        .length > 0;
}
const vg = (i, e) => {
    if (e) return e;
    const t = gg(i.relationships.tracks.data);
    if (i.type === "albums" || i.type === "library-albums") return t ? ht.ALBUM_CLASSICAL : ht.ALBUM;
    if (i.type === "playlists" || i.type === "library-playlists") return t ? ht.PLAYLIST_CLASSICAL : ht.PLAYLIST;
  },
  bg = (i, e, t) => {
    const r = { attributes: i.attributes, id: i.id, type: i.type, name: ul(vg(i, t?.featureName)) };
    return i.relationships.tracks.data.map((s) => ({
      attributes: s.attributes,
      id: s.id,
      type: s.type,
      container: r,
      context: t,
    }));
  },
  _g = { toOptions: bg, condition: ll("tracks"), requiredRelationships: ["tracks"] },
  Tg = {
    condition: Dn("music-movies"),
    toOptions: (i, e, t) => {
      const r = {
        ...i,
        context: t,
        attributes: {
          ...i.attributes,
          playParams: i?.attributes?.playParams ?? { id: i.id, kind: "musicMovie" },
          offers: void 0,
        },
      };
      return (
        e !== void 0 && (r.container = e),
        t?.featureName !== void 0 && (r.container = { ...r.container, name: t?.featureName }),
        [r]
      );
    },
  },
  dl = [_g, mg, dg, og, cg, yg, Tg],
  Vs = (i, e, t = {}) => (
    (e = e?.serialize?.().data ?? e),
    (dl.find((s) => s.condition(i, e, t)) ?? sg).toOptions(i, e, t).map((s) => new fi(s))
  ),
  Eg = dl.reduce((i, e) => {
    const t = e.requiredRelationships;
    return (t && i.push(...t), i);
  }, []),
  kg = new Set(Eg),
  ur = (i, e) => Array.isArray(i) && (i.length === 0 || e(i[0])),
  uo = (i) => i && i.id !== void 0 && i.type !== void 0,
  Sg = (i) => i && i.id !== void 0,
  Ig = (i) =>
    i &&
    i.contentId !== void 0 &&
    i.metadata !== void 0 &&
    i.metadata.itemId !== void 0 &&
    i.metadata.itemType !== void 0,
  Pg = (i) => i && i.items && Array.isArray(i.items),
  ho = (i) => i && i.loaded,
  wg = M.linkChild(new kt("queue")),
  Ag = (i) => {
    if (!Pg(i) && !ho(i)) return [];
    const e = ho(i) ? Cg(i) : Rg(i);
    return (e.forEach((t) => (t.context = { ...i.context, ...t.context })), e);
  },
  Rg = ({ items: i }) => (ur(i, Ig) ? i.map((e) => new fi(rg(e))) : ur(i, Sg) ? i.map((e) => new fi(e)) : []),
  Cg = (i) => {
    const e = [],
      { loaded: t, container: r, context: s } = i;
    return t === void 0
      ? []
      : ur(t, ha)
        ? (t.forEach((n) => {
            e.push(...po(n, r, s));
          }),
          e)
        : ur(t, uo)
          ? (t.forEach((n) => {
              e.push(...$s(n, r, s));
            }),
            e)
          : ha(t)
            ? po(t, r, s)
            : uo(t)
              ? $s(t, r, s)
              : [];
  },
  po = (i, e, t = {}) => {
    const { data: r } = i.serialize(!0, void 0, { includeRelationships: kg, allowFullDuplicateSerializations: !0 });
    return $s(r, e, t);
  },
  $s = (i, e, t = {}) => (wg.trace("resourceToMediaItem()", i), Vs(i, e, t));
M.createChild("queue");
class hl {
  isAutoplay = !1;
  item;
  constructor(e, t) {
    ((this.item = e), (this.isAutoplay = t?.isAutoplay ?? !1));
  }
  restrict() {
    return this.item.restrict();
  }
}
function Ct(i, e) {
  return i.map((t) => new hl(t, e));
}
function Ne(i) {
  return i.map((e) => e.item);
}
const { queueItemsDidChange: Og, queuePositionDidChange: fo } = E;
class pl {
  repeatable;
  hasAutoplayStation = !1;
  playbackMode = Ue.MIXED_CONTENT;
  _itemIDs = [];
  _queueItems = [];
  _isRestricted = !1;
  _nextPlayableItemIndex = -1;
  _position = -1;
  _dispatcher;
  constructor(e) {
    if (((this._dispatcher = e.services.dispatcher), (this.playbackMode = e.playbackMode), !e.descriptor)) return;
    const t = Ag(e.descriptor).filter((r) => Hs(r, this.playbackMode));
    ((this._queueItems = Ct(t)),
      this._reindex(),
      e.descriptor.startWith !== void 0 && (this.position = this._getStartItemPosition(e.descriptor.startWith)));
  }
  get isEmpty() {
    return this.length === 0;
  }
  set isRestricted(e) {
    this._isRestricted = e;
    const t = this.currentItem?.id;
    this._isRestricted &&
      !this.isEmpty &&
      (this.removeQueueItems((r) => r.item.isExplicitItem),
      this.isEmpty &&
        this._dispatcher.publish(E.mediaPlaybackError, new p(p.Reason.CONTENT_RESTRICTED, "Content restricted")),
      t && (this.position = this._getStartItemPosition(t)));
  }
  get isRestricted() {
    return this._isRestricted;
  }
  get appendTargetIndex() {
    let e = this.length;
    const t = this._queueItems.findIndex((r) => r.isAutoplay);
    return (t !== -1 && this.position < t && (e = t), e);
  }
  get items() {
    return Ne(this._queueItems);
  }
  get autoplayItems() {
    return Ne(this._queueItems.filter((e) => e.isAutoplay));
  }
  get unplayedAutoplayItems() {
    return Ne(this._unplayedQueueItems.filter((e) => e.isAutoplay));
  }
  get userAddedItems() {
    return Ne(this._queueItems.filter((e) => !e.isAutoplay));
  }
  get unplayedUserItems() {
    return Ne(this._unplayedQueueItems.filter((e) => !e.isAutoplay));
  }
  get playableItems() {
    return Ne(this._queueItems.filter((e) => lt(e.item, this.playbackMode)));
  }
  get unplayedPlayableItems() {
    return Ne(this._unplayedQueueItems.filter((e) => lt(e.item, this.playbackMode)));
  }
  get length() {
    return this._queueItems.length;
  }
  get nextPlayableItem() {
    if (this.nextPlayableItemIndex !== -1) return this.item(this.nextPlayableItemIndex);
  }
  get nextPlayableItemIndex() {
    return ((this._nextPlayableItemIndex = this.findPlayableIndexForward()), this._nextPlayableItemIndex);
  }
  get position() {
    return this._position;
  }
  set position(e) {
    this._updatePosition(e);
  }
  get isInitiated() {
    return this.position >= 0;
  }
  get previousPlayableItem() {
    if (this.previousPlayableItemIndex !== -1) return this.item(this.previousPlayableItemIndex);
  }
  get previousPlayableItemIndex() {
    return this.findPlayableIndexBackward();
  }
  removeQueueItems(e) {
    for (let t = this.length - 1; t >= 0; t--) e(this.queueItem(t), t) && this.spliceQueueItems(t, 1);
  }
  indexForItem(e) {
    return (typeof e == "string" ? this._itemIDs : this.items).indexOf(e);
  }
  item(e) {
    return this.queueItem(e)?.item;
  }
  get currentItem() {
    return this.item(this.position);
  }
  queueItem(e) {
    return this._queueItems?.[e];
  }
  updateItems(e) {
    ((this._queueItems = Ct(e)), this._reindex(), this._dispatcher.publish(E.queueItemsDidChange, this.items));
  }
  get currentQueueItem() {
    return this.queueItem(this.position);
  }
  remove(e) {
    if ((ac("remove", { message: "The queue remove function has been deprecated" }), e === this.position))
      throw new p(p.Reason.INVALID_ARGUMENTS);
    this.splice(e, 1);
  }
  append(e = []) {
    return this.appendQueueItems(Ct(e));
  }
  appendQueueItems(e = []) {
    this.spliceQueueItems(this.appendTargetIndex, 0, e);
  }
  splice(e, t, r = []) {
    return Ne(this.spliceQueueItems(e, t, Ct(r)));
  }
  spliceQueueItems(e, t, r = [], s = !0) {
    r = r.filter((a) => Hs(a?.item, this.playbackMode));
    const n = this._queueItems.splice(e, t, ...r);
    return (
      this._itemIDs.splice(e, t, ...r.map((a) => a.item.id)),
      s &&
        (this._dispatcher.publish(S.queueModified, { start: e, added: Ne(r), removed: Ne(n) }),
        this._dispatcher.publish(Og, this.items)),
      n
    );
  }
  clearAfterCurrent() {
    if (this.position === -1) this.clear();
    else if (this.length > 0 && this.position + 1 < this.length) {
      const e = this.position + 1;
      this.splice(e, this.length);
    }
  }
  clear() {
    this.length > 0 && (this.splice(0, this.length), this.reset());
  }
  reset() {
    const e = this.position;
    ((this._position = -1), e >= 0 && this._dispatcher.publish(fo, { oldPosition: e, position: this.position }));
  }
  _isSameItems(e) {
    if (e.length !== this.length) return !1;
    const t = e.map((a) => a.id).sort(),
      r = [...this._itemIDs].sort();
    let s, n;
    try {
      ((s = JSON.stringify(t)), (n = JSON.stringify(r)));
    } catch {
      return !1;
    }
    return s === n;
  }
  _reindex() {
    this._queueItems && (this._itemIDs = this._queueItems.map((e) => e.item.id));
  }
  _updatePosition(e) {
    if (e === this._position) return;
    const t = this._position;
    this._position = e;
    const r = this.item(e);
    ((!r || !lt(r, this.playbackMode)) && (this._position = this.findPlayableIndexForward(e)),
      this._position !== t && this._dispatcher.publish(fo, { oldPosition: t, position: this._position }));
  }
  findPlayableIndexForward(e = this.position) {
    if (this.isEmpty || (this.isInitiated && !yo([0, this.position], e))) return -1;
    const t = this.repeatable?.repeatMode;
    if (e < this.length)
      for (let r = e + 1; r < this.length; r++) {
        const s = this.item(r);
        if (lt(s, this.playbackMode)) return r;
      }
    if (t === ke.all)
      for (let r = 0; r <= e; r++) {
        const s = this.item(r);
        if (lt(s, this.playbackMode)) return r;
      }
    return -1;
  }
  findPlayableIndexBackward(e = this.position) {
    if (this.isEmpty || !yo([0, this.position], e)) return -1;
    const t = this.repeatable?.repeatMode;
    if (e > 0)
      for (let r = e - 1; r >= 0; r--) {
        const s = this.item(r);
        if (lt(s, this.playbackMode)) return r;
      }
    if (t === ke.all)
      for (let r = this.length - 1; r >= e; r--) {
        const s = this.item(r);
        if (lt(s, this.playbackMode)) return r;
      }
    return -1;
  }
  get _unplayedQueueItems() {
    const e = this.position < 0 ? 0 : this.position;
    return this._queueItems.slice(e);
  }
  _getStartItemPosition(e) {
    if (e === void 0) return -1;
    if ((typeof e == "object" && "id" in e && (e = e.id), typeof e == "string")) return this.indexForItem(e);
    const t = parseInt(`${e}`, 10);
    return t >= 0 && t < this.length ? t : -1;
  }
}
function Hs(i, e) {
  return i.isPlayable || (e !== Ue.FULL_PLAYBACK_ONLY && i.previewURL !== void 0);
}
function Dg(i) {
  return i.isRestricted;
}
function Mg(i) {
  return i.isUnavailable;
}
function lt(i, e) {
  return Hs(i, e) && !Dg(i) && !Mg(i);
}
function yo(i, e) {
  return i[0] <= e && e <= i[1];
}
const Lg = { ...hh, ...P },
  Ng = ["EditorialVideoClip", "uploaded-videos", "uploadedVideo", "musicVideo"],
  mo = async () => {},
  Ug = (i) =>
    i?.isUTS || Ng.includes(i?.type)
      ? { FORWARD: 10, BACK: 10 }
      : i?.isAOD
        ? { FORWARD: 30, BACK: 30 }
        : { FORWARD: 30, BACK: 15 };
class fl {
  constructor(e) {
    this.mediaItemPlayback = e;
  }
  canSeek = !1;
  getSeekSeconds(e) {
    return { BACK: 0, FORWARD: 0 };
  }
  seekBackward(e, t = mo) {
    _.warn("seekBackward is not supported in this playback method");
  }
  seekForward(e, t = mo) {
    _.warn("seekForward is not supported in this playback method");
  }
  async seekToTime(e, t) {
    _.warn("seekToTime is not supported in this playback method");
  }
}
class yl {
  constructor(e, t) {
    ((this._dispatcher = e), (this.mediaItemPlayback = t));
  }
  canSeek = !0;
  getSeekSeconds(e) {
    return Ug(e);
  }
  async seekBackward(e, t = this._seekToBeginning) {
    const r = this.mediaItemPlayback.nowPlayingItem;
    if (r === void 0) {
      _.warn("Cannot seekBackward when nowPlayingItem is not yet set.");
      return;
    }
    const s = this.mediaItemPlayback.currentPlaybackTime - this._resolveInterval(r, "BACK", e);
    if (s < 0) {
      await t.call(this);
      return;
    }
    await this.seekToTime(s, je.Interval);
  }
  async seekForward(e, t = this._seekToEnd) {
    const r = this.mediaItemPlayback.nowPlayingItem;
    if (r === void 0) {
      _.warn("Cannot seekForward when nowPlayingItem is not yet set.");
      return;
    }
    const s = this.mediaItemPlayback.currentPlaybackTime + this._resolveInterval(r, "FORWARD", e);
    if (s > this.mediaItemPlayback.currentPlaybackDuration) {
      await t.call(this);
      return;
    }
    await this.seekToTime(s, je.Interval);
  }
  async seekToTime(e, t = je.Manual) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      _.warn("Cannot seekToTime when nowPlayingItem is not yet set.");
      return;
    }
    const r = this.mediaItemPlayback.nowPlayingItem,
      s = this.mediaItemPlayback.currentPlaybackTime,
      n = this.mediaItemPlayback.currentPlayingDate,
      a = Math.min(Math.max(0, e), this.mediaItemPlayback.currentPlaybackDuration);
    let o;
    if (r.isLinearStream && n !== void 0) {
      const c = (a - s) * 1e3;
      o = new Date(n.getTime() + c);
    }
    (await this.mediaItemPlayback.seekToTime(a, t),
      this._dispatcher.publish(S.playbackSeek, {
        item: r,
        startPosition: s,
        position: a,
        playingDate: o,
        startPlayingDate: n,
        seekReasonType: t,
      }));
  }
  _resolveInterval(e, t, r) {
    return r == null
      ? this.getSeekSeconds(e)[t]
      : !Number.isFinite(r) || r <= 0
        ? (_.warn(`Ignoring invalid seek interval ${r}, using the default for this item.`), this.getSeekSeconds(e)[t])
        : r;
  }
  async _seekToBeginning() {
    await this.seekToTime(0, je.Interval);
  }
  async _seekToEnd() {
    await this.seekToTime(this.mediaItemPlayback.currentPlaybackDuration, je.Interval);
  }
}
const xg = (i) => {
  const e = [...i],
    { length: t } = e;
  for (let r = 0; r < t; ++r) {
    const s = r + Math.floor(Math.random() * (t - r)),
      n = e[s];
    ((e[s] = e[r]), (e[r] = n));
  }
  return e;
};
var Fg = Object.defineProperty,
  Kg = Object.getOwnPropertyDescriptor,
  Bg = (i, e, t, r) => {
    for (var s = Kg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Fg(e, t, s), s);
  },
  Mn = ((i) => ((i[(i.off = 0)] = "off"), (i[(i.songs = 1)] = "songs"), i))(Mn || {});
const rs = "Shuffling is not supported in this playback method.";
class Vg {
  canSetShuffleMode = !1;
  queue;
  set shuffle(e) {
    _.warn(rs);
  }
  get shuffleMode() {
    return 0;
  }
  set shuffleMode(e) {
    _.warn(rs);
  }
  checkAndReshuffle(e) {
    _.warn(rs);
  }
}
class ml {
  constructor(e, { dispatcher: t }) {
    ((this.controller = e),
      (this.dispatcher = t),
      this.dispatcher.subscribe(S.queueModified, this.queueModifiedHandler),
      (this._queue = e.queue));
  }
  canSetShuffleMode = !0;
  dispatcher;
  mode = 0;
  _queue;
  _unshuffledIDs = [];
  _isSpliceFromShuffle = !1;
  get queue() {
    return this._queue;
  }
  set queue(e) {
    ((this._queue = e), (this._unshuffledIDs = e.userAddedItems.map((t) => t.id)), this.checkAndReshuffle(!1));
  }
  queueModifiedHandler(e, t) {
    if (this._isSpliceFromShuffle) {
      this._isSpliceFromShuffle = !1;
      return;
    }
    const { start: r, added: s, removed: n } = t;
    if (n.length > 0) {
      const a = n.map((o) => o.id);
      this._unshuffledIDs = this._unshuffledIDs.filter((o) => !a.includes(o));
    }
    s.length > 0 && this._unshuffledIDs.splice(r, 0, ...s.map((a) => a.id));
  }
  set shuffle(e) {
    this.shuffleMode = e ? 1 : 0;
  }
  get shuffleMode() {
    return this.mode;
  }
  set shuffleMode(e) {
    e === this.shuffleMode ||
      !(e in Mn) ||
      (_.debug(`mk: set shuffleMode from ${this.shuffleMode} to ${e}`),
      (this.mode = e),
      this.mode === 1 ? this.shuffleQueue() : this.unshuffleQueue(),
      this.controller.nowPlayingItem &&
        (this._queue.position = this._queue.indexForItem(this.controller.nowPlayingItem.id)),
      this.dispatcher.publish(E.shuffleModeDidChange, this.shuffleMode));
  }
  checkAndReshuffle(e = !1) {
    this.shuffleMode === 1 && this.shuffleQueue(e);
  }
  shuffleQueue(e = !0) {
    const { userAddedItems: t } = this._queue;
    if (t.length <= 1) return t;
    const r = t.slice(0),
      s = this._queue.position > -1 ? r.splice(this._queue.position, 1) : [];
    let n = [];
    do n = xg(r);
    while (r.length > 1 && an(n, r));
    const a = [...s, ...n];
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, a.length, Ct(a), e));
  }
  unshuffleQueue(e = !0) {
    let t = [];
    const r = this._unshuffledIDs.reduce((c, l, h) => ((c[l] = h), c), {}),
      s = [];
    let n = 0;
    const a = this._queue.item(this._queue.position);
    (this._queue.userAddedItems.forEach((c) => {
      const l = r[c.id];
      (l === void 0 && s.push(c), (t[l] = c), c.id === a?.id && (n = l));
    }),
      (t = t.filter(Boolean)));
    const o = t.concat(s);
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, o.length, Ct(o), e), (this._queue.position = n));
  }
}
Bg([T()], ml.prototype, "queueModifiedHandler");
var $g = Object.defineProperty,
  Hg = Object.getOwnPropertyDescriptor,
  jg = (i, e, t, r) => {
    for (var s = Hg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && $g(e, t, s), s);
  },
  st = ((i) => ((i.continuous = "continuous"), (i.serial = "serial"), i))(st || {});
const { queueItemsDidChange: qg } = E;
class Ln {
  _continuous;
  _context = {};
  _autoplayEnabled;
  _queue;
  _storekit;
  _repeatable;
  _shuffler;
  _seekable;
  services;
  _rollMonitor;
  _skipIntro;
  _upNext;
  _playbackMode;
  _isActive = !1;
  get isActive() {
    return this._isActive;
  }
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  constructor(e) {
    ((this.onPlaybackStateDidChange = this.onPlaybackStateDidChange.bind(this)),
      (this._autoplayEnabled = e?.autoplayEnabled ?? !1),
      (this._continuous = !1),
      (this.services = e.services),
      (this.storekit = this.services.store.storekit),
      (this._skipIntro = new Vm({ controller: this, services: e.services })),
      (this._upNext = new al({ controller: this, services: e.services })),
      (this._rollMonitor = new Bm({ controller: this, services: e.services })),
      (this._shuffler = new Vg()),
      (this._seekable = new fl(this._mediaItemPlayback)),
      (this._repeatable = new Xm()),
      this._dispatcher.subscribe(E.autoplayEnabledDidChange, this.updateAutoplay),
      (this._playbackMode = e.playbackMode));
  }
  updateAutoplay(e, t) {
    this.autoplayEnabled = t;
  }
  constructContext(e, t) {
    let r = e?.context;
    return (
      e?.featureName !== void 0 &&
        r?.featureName === void 0 &&
        (_.warn("featureName is deprecated, pass it inside context"), r || (r = {}), (r.featureName = e.featureName)),
      r ?? t ?? {}
    );
  }
  get context() {
    return this._context;
  }
  get shuffler() {
    return this._shuffler;
  }
  get continuous() {
    return this._continuous || this.hasAuthorization;
  }
  set continuous(e) {
    this._continuous = e;
  }
  get autoplayEnabled() {
    return this._autoplayEnabled;
  }
  set autoplayEnabled(e) {
    this._autoplayEnabled = e;
  }
  get previewOnly() {
    return this._mediaItemPlayback.previewOnly;
  }
  get _dispatcher() {
    return this.services.dispatcher;
  }
  get hasAuthorization() {
    return tg(this.storekit);
  }
  get isPlaying() {
    return this._mediaItemPlayback.isPlaying;
  }
  get isPrimaryPlayer() {
    return this._mediaItemPlayback.isPrimaryPlayer;
  }
  set isPrimaryPlayer(e) {
    this._mediaItemPlayback.isPrimaryPlayer = e;
  }
  get isReady() {
    return this._mediaItemPlayback.isReady;
  }
  get _mediaItemPlayback() {
    return this.services.mediaItemPlayback;
  }
  get nowPlayingItem() {
    return this._mediaItemPlayback.nowPlayingItem;
  }
  get nowPlayingItemIndex() {
    return this.queue ? this.queue.position : -1;
  }
  get playbackMode() {
    return this._playbackMode;
  }
  set playbackMode(e) {
    ((this._playbackMode = e), this.queue && (this.queue.playbackMode = e));
  }
  get queue() {
    return this._queue;
  }
  set queue(e) {
    this.setQueue(e);
  }
  get repeatMode() {
    return this._repeatable.repeatMode;
  }
  set repeatMode(e) {
    this._repeatable.repeatMode = e;
  }
  get seekSeconds() {
    const { nowPlayingItem: e } = this;
    if (e !== void 0) return this._seekable.getSeekSeconds(e);
  }
  set shuffle(e) {
    this._shuffler.shuffle = e;
  }
  get shuffleMode() {
    return this._shuffler.shuffleMode;
  }
  set shuffleMode(e) {
    this._shuffler.shuffleMode = e;
  }
  get storekit() {
    return this._storekit;
  }
  set storekit(e) {
    e &&
      (e.addEventListener(
        He.authorizationStatusWillChange,
        async ({ authorizationStatus: t, newAuthorizationStatus: r }) => {
          t > re.DENIED && r < re.RESTRICTED
            ? await this.stop({ endReasonType: P.PLAYBACK_SUSPENDED, userInitiated: !1 })
            : await this.stop({ userInitiated: !1 });
        },
      ),
      (this._storekit = e));
  }
  async changeToMediaAtIndex(e = 0) {
    await this.stop();
    const t = this.queue.item(e)?.id,
      r = this._mediaItemPlayback?.playOptions?.get(t);
    let s = r?.startTime || 0;
    this._dispatcher.publish(E.playInitiated, {
      item: this.queue.item(e),
      timestamp: r?.meta?.initiatedTimestamp ?? Date.now(),
    });
    const n = await this._changeToMediaAtIndex(e, { userInitiated: !0 });
    n &&
      (n.id !== t && (s = 0),
      this._dispatcher.publish(S.playbackPlay, {
        item: n,
        position: s,
        playingDate: this._mediaItemPlayback.currentPlayingDate,
        userInitiated: !0,
      }));
  }
  async changeToMediaItem(e) {
    const t = this.queue.indexForItem(e);
    return t === -1 ? Promise.reject(new p(p.Reason.MEDIA_DESCRIPTOR)) : this.changeToMediaAtIndex(t);
  }
  async activate() {
    (_.debug("PlaybackController.activate()"),
      (this._isActive = !0),
      this._dispatcher.unsubscribe(E.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._dispatcher.subscribe(E.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._skipIntro.activate(),
      this._upNext.activate(),
      this._rollMonitor.activate());
  }
  async deactivate() {
    (_.debug("PlaybackController.deactivate()"),
      (this._isActive = !1),
      await this.stop(),
      this._dispatcher.unsubscribe(E.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._skipIntro.deactivate(),
      this._upNext.deactivate(),
      this._rollMonitor.deactivate());
  }
  async destroy() {
    ((this._isDestroyed = !0),
      await this.deactivate(),
      this._dispatcher.unsubscribe(E.autoplayEnabledDidChange, this.updateAutoplay));
  }
  async pause(e) {
    return this._mediaItemPlayback.pause(e);
  }
  async play() {
    if (this.nowPlayingItem) return this._mediaItemPlayback.play();
    if (!this._queue || this._queue.isEmpty) return;
    if (this.nowPlayingItemIndex >= 0) return this.changeToMediaAtIndex(this.nowPlayingItemIndex);
    const { queue: e } = this;
    if (e.nextPlayableItemIndex !== -1) return this.changeToMediaAtIndex(e.nextPlayableItemIndex);
  }
  async playSingleMediaItem(e, t) {
    (e.isUTS && (await $m(e, { manifestManager: this.services.manifest, playOptions: t })),
      this._dispatcher.publish(E.queueItemsDidChange, [e]));
    const r = await this._mediaItemPlayback.startMediaItemPlayback(e, !0);
    if (r) {
      const s = {
        item: r,
        position: this._mediaItemPlayback.currentPlaybackTime ?? 0,
        playingDate: this._mediaItemPlayback.currentPlayingDate,
        userInitiated: !0,
      };
      (_.debug("playSingleMediaItem: Dispatching DispatchTypes.playbackPlay event", s),
        this._dispatcher.publish(S.playbackPlay, s));
    }
  }
  async onPlaybackStateDidChange(e, t) {
    t.state === I.ended &&
      (this.continuous || this.repeatMode === ke.one) &&
      (_.debug("controller detected track ended event, moving to next item."),
      this._dispatcher.publish(S.applicationActivityIntent, {
        endReasonType: P.TRACK_SKIPPED_FORWARDS,
        userInitiated: !1,
      }),
      await this._next());
  }
  async preload() {
    return this._mediaItemPlayback.preload();
  }
  showPlaybackTargetPicker() {
    this._mediaItemPlayback.showPlaybackTargetPicker();
  }
  async seekBackward(e) {
    return this._seekable.seekBackward(e);
  }
  async seekForward(e) {
    return this._seekable.seekForward(e, this.skipToNextItem.bind(this));
  }
  async skipToNextItem() {
    return this._next({ userInitiated: !0 });
  }
  async skipToPreviousItem() {
    return this._previous({ userInitiated: !0 });
  }
  getNewSeeker() {
    return this._mediaItemPlayback.getNewSeeker();
  }
  async seekToTime(e, t) {
    await this._seekable.seekToTime(e, t);
  }
  async replaceQueue(e, t) {
    if (
      (await this.extractGlobalValues(t),
      await this._mediaItemPlayback.stop(),
      t?.context !== void 0 && (this._context = t.context),
      this.setQueue(
        new pl({
          services: { dispatcher: this.services.dispatcher },
          descriptor: { loaded: e, context: this.context, startWith: t?.startWith ?? t?.startPosition },
          playbackMode: this.playbackMode,
        }),
      ),
      e.length === 0)
    )
      throw (
        _.warn("No items (0) are playable for new queue"),
        new p(p.Reason.CONTENT_UNAVAILABLE, "No playable items for queue")
      );
    if (
      (t?.shuffleMode !== void 0 && (this.shuffleMode = t.shuffleMode),
      t?.repeatMode !== void 0 && (this.repeatMode = t.repeatMode),
      ah(t?.startTime))
    ) {
      const r = this.queue.nextPlayableItem;
      r && this._mediaItemPlayback.playOptions.set(r.id, { startTime: t?.startTime });
    }
    return (
      this._dispatcher.publish("queue.created", this.queue),
      this._dispatcher.publish("queue.ready", this.queue),
      this._dispatcher.publish(E.queueIsReady, this.queue.items),
      this.queue
    );
  }
  async extractGlobalValues(e) {
    ((this._context = this.constructContext(e)),
      e?.featureName !== void 0 &&
        e.context &&
        (_.warn("featureName is deprecated, pass it inside context"), (e.context.featureName = e.featureName)));
  }
  async stop(e) {
    await this._mediaItemPlayback.stop(e);
  }
  async _changeToMediaAtIndex(e = 0, t = {}) {
    if (this.queue.isEmpty) return;
    this.queue.position = e;
    const r = this.queue.item(this.queue.position);
    if (!r) return;
    const s = await this._mediaItemPlayback.startMediaItemPlayback(r, t.userInitiated ?? !1);
    if (!s && r.state === x.unsupported) {
      await this.skipToNextItem();
      return;
    }
    return s;
  }
  async _next(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === ke.one && this.queue.currentItem !== void 0) {
      (await this.stop({ userInitiated: t, ...e }), await this.play());
      return;
    } else
      !t &&
        e.seamlessAudioTransition &&
        (this._dispatcher.publish(S.playbackStop, { userInitiated: t, endReasonType: P.NATURAL_END_OF_TRACK, ...e }),
        (e = { userInitiated: e.userInitiated, seamlessAudioTransition: !0 }));
    return this._nextAtIndex(this.queue.nextPlayableItemIndex, e);
  }
  async _nextAtIndex(e, t = {}) {
    if (this.queue.isEmpty) return;
    const { _mediaItemPlayback: r } = this,
      s = t.userInitiated ?? !1,
      n = this.isPlaying,
      a = r.currentPlaybackTime,
      o = new Set();
    for (; e >= 0 && !o.has(e);) {
      let c;
      try {
        c = await this._changeToMediaAtIndex(e, { userInitiated: s });
      } catch (l) {
        if (!p.isReason(l, p.Reason.AGE_VERIFICATION_REQUIRED)) throw l;
        (_.debug("controller/index._next skipping age restricted item at", e),
          o.add(e),
          (e = this.queue.findPlayableIndexForward(e)));
        continue;
      }
      return (
        this._notifySkip(n, c, {
          userInitiated: s,
          seamlessAudioTransition: t.seamlessAudioTransition ?? !1,
          position: a,
          direction: P.TRACK_SKIPPED_FORWARDS,
        }),
        c
      );
    }
    (_.debug("controller/index._next no next item available, stopping playback"),
      await this.stop({ userInitiated: s, seamlessAudioTransition: t.seamlessAudioTransition }),
      (r.playbackState = I.completed));
  }
  async _previous(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === ke.one && this.queue.currentItem !== void 0) {
      (await this.stop({ endReasonType: P.TRACK_SKIPPED_BACKWARDS, userInitiated: t }), await this.play());
      return;
    }
    const r = this.queue.previousPlayableItemIndex;
    if (t && this.repeatMode === ke.none && this.nowPlayingItem !== void 0 && r === -1) {
      (await this.stop({ endReasonType: P.TRACK_SKIPPED_BACKWARDS, userInitiated: !0 }), await this.play());
      return;
    }
    if (r === -1) return;
    const s = this.isPlaying,
      n = this._mediaItemPlayback.currentPlaybackTime,
      a = await this._changeToMediaAtIndex(r, { userInitiated: t });
    return (
      this._notifySkip(s, a, {
        userInitiated: t,
        seamlessAudioTransition: !1,
        direction: P.TRACK_SKIPPED_BACKWARDS,
        position: n,
      }),
      a
    );
  }
  _notifySkip(e, t, r) {
    const { userInitiated: s, direction: n, position: a, seamlessAudioTransition: o = !1 } = r,
      c = this._dispatcher;
    o
      ? (_.debug("seamlessAudioTransition transition, PAF play"),
        c.publish(S.playbackPlay, { item: t, position: 0, endReasonType: P.NATURAL_END_OF_TRACK }))
      : e
        ? t
          ? c.publish(S.playbackSkip, { item: t, userInitiated: s, direction: n, position: a })
          : c.publish(S.playbackStop, { item: t, userInitiated: s, position: a })
        : t &&
          c.publish(S.playbackPlay, {
            item: t,
            playingDate: this._mediaItemPlayback.currentPlayingDate,
            position: 0,
            ...(s ? { endReasonType: P.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM } : {}),
          });
  }
  setQueue(e) {
    return (
      _.trace("PlaybackController.prepareQueue()"),
      this.hasAuthorization && (e.isRestricted = this.storekit.restrictedEnabled || !1),
      (e.repeatable = this._repeatable),
      (this._queue = e),
      (this._shuffler.queue = this._queue),
      this._dispatcher.publish(qg, e.items),
      e
    );
  }
}
jg([T()], Ln.prototype, "updateAutoplay");
function Wg(i, e, t) {
  return (
    (e = e || i.height || 100),
    (t = t || i.width || 100),
    window.devicePixelRatio >= 1.5 && ((t *= 2), (e *= 2)),
    i.url.replace("{h}", `${e}`).replace("{w}", `${t}`).replace("{f}", "jpeg")
  );
}
var Gg = Object.defineProperty,
  Yg = Object.getOwnPropertyDescriptor,
  gl = (i, e, t, r) => {
    for (var s = Yg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Gg(e, t, s), s);
  };
const go = Object.freeze({ endReasonType: P.PLAYBACK_SUSPENDED, userInitiated: !1 });
class Nn {
  constructor(e, t) {
    ((this.capabilities = e),
      (this.dispatcher = t),
      this.session &&
        (this.dispatcher.subscribe(E.nowPlayingItemDidChange, this.onNowPlayingItemDidChange),
        this.dispatcher.subscribe(E.capabilitiesChanged, this.onCapabilitiesChanged),
        this._setMediaSessionHandlers()));
  }
  controller;
  session = navigator.mediaSession;
  onCapabilitiesChanged() {
    (this._resetHandlers(), this._setMediaSessionHandlers());
  }
  onNowPlayingItemDidChange(e, { item: t }) {
    this._setMediaSessionMetadata(t);
  }
  _setMediaSessionMetadata(e) {
    !this.session ||
      !("MediaMetadata" in window) ||
      !e ||
      (this.session.metadata = new window.MediaMetadata({
        title: e.title,
        artist: e.artistName ?? e.attributes?.showTitle,
        album: e.albumName,
        artwork: e.artwork
          ? [96, 128, 192, 256, 384, 512].map((t) => ({
              src: Wg(e.artwork, t, t),
              sizes: `${t}x${t}`,
              type: "image/jpeg",
            }))
          : [],
      }));
  }
  _setMediaSessionHandlers() {
    this.session &&
      (this._resetHandlers(),
      this.session.setActionHandler("play", () => this.controller?.play()),
      this.capabilities.canPause
        ? this.session.setActionHandler("pause", () => this.controller?.pause(go))
        : this.session.setActionHandler("pause", () => this.controller?.stop(go)),
      this.capabilities.canSeek &&
        (this.session.setActionHandler("seekforward", (e) => this.controller?.seekForward(e?.seekOffset)),
        this.session.setActionHandler("seekbackward", (e) => this.controller?.seekBackward(e?.seekOffset))),
      this.capabilities.canSkipToNextItem &&
        this.session.setActionHandler("nexttrack", () => this.controller?.skipToNextItem()),
      this.capabilities.canSkipToPreviousItem &&
        this.session.setActionHandler("previoustrack", () => this.controller?.skipToPreviousItem()));
  }
  _resetHandlers() {
    this.session &&
      (this.session.setActionHandler("play", void 0),
      this.session.setActionHandler("pause", void 0),
      this.session.setActionHandler("seekforward", void 0),
      this.session.setActionHandler("seekbackward", void 0),
      this.session.setActionHandler("nexttrack", void 0),
      this.session.setActionHandler("previoustrack", void 0));
  }
}
gl([T()], Nn.prototype, "onCapabilitiesChanged");
gl([T()], Nn.prototype, "onNowPlayingItemDidChange");
var W = ((i) => (
  (i[(i.PAUSE = 0)] = "PAUSE"),
  (i[(i.EDIT_QUEUE = 1)] = "EDIT_QUEUE"),
  (i[(i.SEEK = 2)] = "SEEK"),
  (i[(i.REPEAT = 3)] = "REPEAT"),
  (i[(i.SHUFFLE = 4)] = "SHUFFLE"),
  (i[(i.SKIP_NEXT = 5)] = "SKIP_NEXT"),
  (i[(i.SKIP_PREVIOUS = 6)] = "SKIP_PREVIOUS"),
  (i[(i.SKIP_TO_ITEM = 7)] = "SKIP_TO_ITEM"),
  (i[(i.AUTOPLAY = 8)] = "AUTOPLAY"),
  (i[(i.VOLUME = 9)] = "VOLUME"),
  i
))(W || {});
class zg {
  constructor(e) {
    ((this._dispatcher = e), (this._mediaSession = new Nn(this, e)));
  }
  _checkCapability = (e) => e === 9;
  _mediaSession;
  set controller(e) {
    this._mediaSession.controller = e;
  }
  updateChecker(e) {
    this._checkCapability !== e && ((this._checkCapability = e), this._dispatcher.publish(E.capabilitiesChanged));
  }
  get canEditPlaybackQueue() {
    return this._checkCapability(1);
  }
  get canPause() {
    return this._checkCapability(0);
  }
  get canSeek() {
    return this._checkCapability(2);
  }
  get canSetRepeatMode() {
    return this._checkCapability(3);
  }
  get canSetShuffleMode() {
    return this._checkCapability(4);
  }
  get canSkipToNextItem() {
    return this._checkCapability(5);
  }
  get canSkipToMediaItem() {
    return this._checkCapability(7);
  }
  get canSkipToPreviousItem() {
    return this._checkCapability(6);
  }
  get canAutoplay() {
    return this._checkCapability(8);
  }
  get canSetVolume() {
    return this._checkCapability(9);
  }
}
var Qg = Object.defineProperty,
  Xg = Object.getOwnPropertyDescriptor,
  vl = (i, e, t, r) => {
    for (var s = Xg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Qg(e, t, s), s);
  };
class Un extends Ln {
  type = st.continuous;
  controllerName = "ContinuousPlaybackController";
  _isLiveStation = !1;
  _isTracksStation = !1;
  station;
  constructor(e) {
    (super(e), (this._continuous = !0));
  }
  get continuous() {
    return !0;
  }
  set continuous(e) {
    if (e !== !0) throw new p(p.Reason.UNSUPPORTED_ERROR, "Continuous playback cannot be disabled for station queues.");
  }
  get isLive() {
    return this._isLiveStation;
  }
  set isLive(e) {
    e !== this._isLiveStation && ((this._isLiveStation = e), this._dispatcher.publish(E.capabilitiesChanged));
  }
  get isTracksStation() {
    return this._isTracksStation;
  }
  set isTracksStation(e) {
    e !== this._isTracksStation && ((this._isTracksStation = e), this._dispatcher.publish(E.capabilitiesChanged));
  }
  async changeToMediaItem(e) {
    _.warn("changeToMediaItem is not supported for this type of playback");
  }
  hasCapabilities(e) {
    switch (e) {
      case W.VOLUME:
        return !0;
      case W.PAUSE:
      case W.SKIP_NEXT:
      case W.SKIP_PREVIOUS:
      case W.SEEK:
        return !this.isLive;
      case W.SKIP_TO_ITEM:
      case W.AUTOPLAY:
      case W.EDIT_QUEUE:
      case W.SHUFFLE:
      case W.REPEAT:
      default:
        return !1;
    }
  }
  async pause(e) {
    if (this.isLive) {
      _.warn("pause is not supported for this type of playback");
      return;
    }
    return super.pause(e);
  }
  async skipToPreviousItem() {
    if (this.isLive) {
      _.warn("skipToPreviousItem is not supported for this type of playback");
      return;
    }
    return super.skipToPreviousItem();
  }
  async replaceQueue(e, t) {
    const r = e[0];
    if (r === void 0) throw new p(p.Reason.CONTENT_UNAVAILABLE, "No Queue item");
    if (!Ei(r)) throw new p(p.Reason.MEDIA_DESCRIPTOR, "Item is not a Radio Station");
    return (
      (this.station = r),
      (this.isLive = !!r?.isLiveRadioStation || !!r?.attributes?.isLive),
      (this.isTracksStation = Xo(r)),
      (this._context = { featureName: ht.STATION, ...t?.context }),
      (this._seekable = this.isLive
        ? new fl(this._mediaItemPlayback)
        : new yl(this._dispatcher, this._mediaItemPlayback)),
      this.isTracksStation
        ? (e = await this.loadNextTracks(this.station, { context: this.context }))
        : (e.length > 1 && _.warn(`Attempting to play multiple Live Radio Station items (${e.length})`), (e = [r])),
      super.replaceQueue(e, { context: this.context })
    );
  }
  async appendToQueue(e) {
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Appending to the Queue is not supported for this type of playback");
  }
  async insertInQueue(e, t) {
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Inserting into the Queue is not supported for this type of playback");
  }
  async prependToQueue(e, t) {
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Prepending to the Queue is not supported for this type of playback");
  }
  async clearQueue() {
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Clearing the Queue is not supported for this type of playback");
  }
  getNewSeeker() {
    return this.hasCapabilities(W.SEEK) ? super.getNewSeeker() : new Ip();
  }
  async skipToNextItem() {
    if (this.isLive) {
      _.warn("Method skipToNextItem is not supported for this type of playback");
      return;
    }
    return super.skipToNextItem();
  }
  async loadNextTracks(e, t) {
    if (t?.limit === 0) return (_.warn("Not loading next tracks, limit is set to zero (0)"), []);
    _.debug(`Loading tracks for station ${e.id}`);
    let r = await this.services.itemLoader.loadStationNextTracks(e.id, {
      container: t?.container ?? e,
      context: t?.context,
      limit: t?.limit,
    });
    if ((_.debug(`Loaded ${r.length} tracks for station ${e.id}`), r.length === 0))
      throw (
        _.warn("No track data is available for the current station", { stationId: this.station?.id }),
        new p(p.Reason.CONTENT_UNAVAILABLE, "No track data is available for the current station.")
      );
    return (typeof t?.limit == "number" && t.limit > 0 && (r = r.slice(0, t.limit)), r);
  }
  async queueNextTracks() {
    if (!this.isActive) {
      _.debug("Not loading next tracks, controller is not active");
      return;
    }
    if (this.station === void 0 || !this.isTracksStation) {
      _.debug("Not loading next tracks, not a tracks radio station");
      return;
    }
    if (this.queue.isEmpty) {
      _.debug("Not loading next tracks, queue is empty");
      return;
    }
    if (this.queue.nextPlayableItemIndex !== -1) {
      _.debug("Not loading next tracks, enough playable items in queue");
      return;
    }
    const e = await this.loadNextTracks(this.station, { context: this.context, limit: 1 });
    e.length > 0 && (_.debug(`Queueing ${e.length} ${e.length === 1 ? "track" : "tracks"}`), this.queue.append(e));
  }
  async activate() {
    (await super.activate(),
      this._dispatcher.subscribe(E.queuePositionDidChange, this.queueNextTracks),
      this.queueNextTracks());
  }
  async deactivate() {
    (await super.deactivate(), this._dispatcher.unsubscribe(E.queuePositionDidChange, this.queueNextTracks));
  }
}
vl([T()], Un.prototype, "hasCapabilities");
vl([T()], Un.prototype, "queueNextTracks");
var Jg = Object.defineProperty,
  Zg = Object.getOwnPropertyDescriptor,
  bl = (i, e, t, r) => {
    for (var s = Zg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Jg(e, t, s), s);
  };
class xn {
  constructor(e, t, r) {
    ((this.dispatcher = e), (this.callback = t), (this.percentage = r));
  }
  threshold = -1;
  startMonitor() {
    (this.dispatcher.unsubscribe(E.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.unsubscribe(E.playbackTimeDidChange, this.handleTimeChange),
      this.dispatcher.subscribe(E.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.subscribe(E.playbackTimeDidChange, this.handleTimeChange));
  }
  stopMonitor() {
    (this.dispatcher.unsubscribe(E.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.unsubscribe(E.playbackTimeDidChange, this.handleTimeChange),
      (this.threshold = -1));
  }
  async handleTimeChange(e, { currentPlaybackDuration: t, currentPlaybackTime: r }) {
    (this.threshold < 0 && this.updateThreshold(e, { duration: t }),
      !(r < this.threshold) && (this.stopMonitor(), await this.callback(r, this)));
  }
  updateThreshold(e, { duration: t }) {
    this.threshold = t * this.percentage;
  }
}
bl([T()], xn.prototype, "handleTimeChange");
bl([T()], xn.prototype, "updateThreshold");
class ev extends Pi {
  isSeamlessAudioTransitionsEnabled = !1;
  constructor(e) {
    (super(e),
      (this.watchers = [new xn(this.dispatcher, this.handlePlaybackThreshold, 0.3)]),
      (this.isSeamlessAudioTransitionsEnabled = H.features["seamless-audio-transitions"]));
  }
  async handlePlaybackThreshold() {
    await this.playbackController.prepareToPlayNextItem();
  }
  shouldMonitor() {
    if (!super.shouldMonitor() || !this.playbackController.hasAuthorization || this.playbackController.previewOnly)
      return !1;
    const e = this.getNextPlayableItem(),
      t = e !== void 0;
    return this.isSeamlessAudioTransitionsEnabled ? t : t && !e?.isPreparedToPlay;
  }
  getNextPlayableItem() {
    return this.playbackController.queue.nextPlayableItem;
  }
}
var tv = Object.defineProperty,
  iv = Object.getOwnPropertyDescriptor,
  wi = (i, e, t, r) => {
    for (var s = iv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && tv(e, t, s), s);
  };
class Wt extends Ln {
  type = st.serial;
  controllerName = "SerialPlaybackController";
  _preloader;
  _isSeamlessAudioTransitionsEnabled;
  autoplayQueueSizeThreshold;
  autoplayUpcomingTracksLimit;
  maxTracksForAutoplayStation;
  _autoplayStation;
  loadingAutoplayStation = !1;
  loadingAutoplayTracks = !1;
  get autoplayStation() {
    return this._autoplayStation;
  }
  get autoplayStarted() {
    return this._autoplayStation !== void 0;
  }
  constructor(e) {
    (super(e),
      (this._queue = new pl(e)),
      (this._repeatable = new Jm(this._dispatcher)),
      (this._seekable = new yl(this._dispatcher, this._mediaItemPlayback)),
      (this._shuffler = new ml(this, { dispatcher: this._dispatcher })),
      (this._isSeamlessAudioTransitionsEnabled = !!e?.bag?.features["seamless-audio-transitions"]),
      (this.autoplayQueueSizeThreshold = e?.bag?.autoplay?.maxQueueSizeForAutoplay ?? 50),
      (this.autoplayUpcomingTracksLimit = e?.bag?.autoplay?.maxUpcomingTracksToMaintain ?? 10),
      (this.maxTracksForAutoplayStation = e?.bag?.autoplay?.maxQueueSizeInRequest ?? 10));
    const t = { controller: this, services: e.services };
    this._preloader = new ev(t);
  }
  get autoplayEnabled() {
    return this._autoplayEnabled;
  }
  set autoplayEnabled(e) {
    ((this._autoplayEnabled = e), e === !0 ? this.startAutoplay() : this.stopAutoplay());
  }
  async activate() {
    (await super.activate(),
      this._preloader.activate(),
      this._dispatcher.subscribe(E.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.subscribe(E.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.subscribe(E.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.subscribe(E.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.subscribe(Pe.seamlessAudioTransition, this.onSeamlessAudioTransition));
  }
  async deactivate() {
    (await super.deactivate(),
      this._preloader.deactivate(),
      this._dispatcher.unsubscribe(E.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.unsubscribe(E.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(E.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(E.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(Pe.seamlessAudioTransition, this.onSeamlessAudioTransition),
      await this.stopAutoplay());
  }
  hasCapabilities(e) {
    switch (e) {
      case W.EDIT_QUEUE:
      case W.SKIP_NEXT:
      case W.SKIP_TO_ITEM:
      case W.AUTOPLAY:
      case W.VOLUME:
      case W.SKIP_PREVIOUS:
        return !0;
      case W.REPEAT:
      case W.SHUFFLE:
        return !this.queue?.currentQueueItem?.isAutoplay;
      case W.PAUSE:
      case W.SEEK:
        return !this.nowPlayingItem?.isAssetScrubbingDisabled;
      default:
        return !1;
    }
  }
  async onSeamlessAudioTransition(e, t) {
    (_.trace("onSeamlessAudioTransition", t),
      this._next({
        userInitiated: !1,
        seamlessAudioTransition: !0,
        endReasonType: P.NATURAL_END_OF_TRACK,
        position: t.previous.playbackDuration / 1e3,
        isPlaying: !1,
      }));
  }
  async onRepeatModeChange() {
    (this.repeatMode === ke.none
      ? (_.debug("Queueing Autoplay tracks after RepeatMode change"), await this.queueAutoplayTracks())
      : (_.debug("Removing Autoplay tracks after RepeatMode change"),
        this.queue.removeQueueItems((e, t) => t > this.queue.position && e.isAutoplay)),
      this.repeatMode !== ke.one && this.prepareToPlayNextItem());
  }
  async onQueueChange() {
    this.queue.isInitiated
      ? this.queue.isEmpty || (await this.queueAutoplayTracks(), this.prepareToPlayNextItem())
      : (this.stopAutoplay(), this.startAutoplay());
  }
  async prepareToPlayNextItem() {
    if (!this.nowPlayingItem) return;
    const e = this.queue.nextPlayableItem;
    if (!e || this.queue.currentItem === e) {
      _.debug("Not preparing next item: no next item or current item is same as next item");
      return;
    }
    if (!this.queue.currentItem.isPreparedToPlay) {
      _.debug("Not preparing next item: current item not prepared to play");
      return;
    }
    try {
      return (_.debug(`Preparing next MediaItem: ${sr(e)}`, e), await this._mediaItemPlayback.preloadMediaItem(e));
    } catch (t) {
      _.debug("next item failed to prepare for playbck -", t);
    }
  }
  async appendToQueue(e) {
    return (this.queue.splice(this.queue.appendTargetIndex, 0, e), this.queue);
  }
  async insertInQueue(e, t) {
    return (this.queue.splice(t, 0, e), this.queue);
  }
  async prependToQueue(e, t) {
    return (
      t?.clear === !0 && this.queue.clearAfterCurrent(), this.queue.splice(this.queue.position + 1, 0, e), this.queue
    );
  }
  async clearQueue() {
    return (this.queue.clear(), this.queue);
  }
  async replaceQueue(e, t) {
    const r = await super.replaceQueue(e, t);
    return (await this.stopAutoplay(), await this.startAutoplay(), r);
  }
  async stopAutoplay() {
    (_.trace("SerialController.stopAutoplay()"),
      (this._autoplayStation = void 0),
      (this.queue.hasAutoplayStation = !1),
      _.debug("Removing unplayed Autoplay tracks from Queue"),
      this.queue.isInitiated && this.queue.removeQueueItems((e, t) => t > this.queue.position && e.isAutoplay === !0));
  }
  async startAutoplay() {
    if ((_.trace("SerialController.startAutoplay()"), !this.isActive)) {
      _.debug("Not starting autoplay, not active");
      return;
    }
    if (!this.autoplayEnabled) {
      _.debug("Not starting autoplay, not enabled");
      return;
    }
    if (this.repeatMode !== ke.none) {
      _.debug("Not starting autoplay, repeat mode is on");
      return;
    }
    if (this.autoplayStation !== void 0) {
      _.debug("Autoplay station already created");
      return;
    }
    if (this.loadingAutoplayStation) {
      _.debug("Autoplay station already loading");
      return;
    }
    const e = this.queue.items.slice(-this.maxTracksForAutoplayStation);
    if (e.length === 0) {
      _.debug("No items in queue to start Autoplay station");
      return;
    }
    this.loadingAutoplayStation = !0;
    const t = this.queue.userAddedItems.slice(-1)?.pop();
    let r;
    t?.container !== void 0 && (r = { id: t.container.id, type: t.container.type });
    let s;
    try {
      (_.info(`Creating Autoplay station with ${e.length} ${e.length === 1 ? "item" : "items"}`),
        (s = (
          await this.services.itemLoader.createAutoplayStation(
            this.queue.items.slice(-this.maxTracksForAutoplayStation),
            { container: r },
          )
        ).station));
    } catch (n) {
      _.warning(`Unable to create Autoplay station: ${n.message}`);
    }
    (s === void 0
      ? _.info("Unable to create Autoplay station: no server data")
      : _.info(`Created Autoplay Station ${s?.id}`),
      (this._autoplayStation = s),
      (this.queue.hasAutoplayStation = s !== void 0),
      (this.loadingAutoplayStation = !1),
      await this.queueAutoplayTracks());
  }
  async queueAutoplayTracks(e) {
    if (this._autoplayStation === void 0) {
      _.debug("Skipping loading Autoplay tracks, no autoplay station");
      return;
    }
    if (e?.limit === 0) {
      _.warn("Skipping loading Autoplay tracks, track limit set to 0");
      return;
    }
    if (this.queue.unplayedUserItems.length > this.autoplayQueueSizeThreshold) {
      _.debug(
        `Skipping loading Autoplay tracks, more than ${this.autoplayQueueSizeThreshold} user added tracks in the queue `,
      );
      return;
    }
    if (this.loadingAutoplayTracks) {
      _.debug("Skipping loading Autoplay tracks, already loading");
      return;
    }
    const t =
      this.autoplayUpcomingTracksLimit -
      this.queue.unplayedAutoplayItems.length +
      (this.queue.currentQueueItem?.isAutoplay ? 1 : 0);
    if (t <= 0) {
      _.debug(
        `Skipping loading Autoplay tracks, ${this.autoplayUpcomingTracksLimit} autoplay items already in the queue`,
      );
      return;
    }
    ((this.loadingAutoplayTracks = !0),
      _.debug(`Loading next tracks from Autoplay station ${this._autoplayStation.id} (amount: ${t})`));
    let r = await this.services.itemLoader.loadStationNextTracks(this._autoplayStation.id, {
      limit: t,
      container: this._autoplayStation,
      context: {
        ...this.context,
        featureName: "now_playing",
        reco_id: this.context.featureName?.startsWith("listen-now") ? void 0 : this.context.reco_id,
      },
    });
    (typeof e?.limit == "number" && e.limit > 0 && (r = r.slice(0, e.limit)),
      _.debug(`Queueing ${r.length} tracks from Autoplay station ${this._autoplayStation.id}`),
      this.queue.appendQueueItems(r.map((s) => new hl(s, { isAutoplay: !0 }))),
      (this.loadingAutoplayTracks = !1));
  }
  async _changeToMediaAtIndex(e = 0, t = { userInitiated: !1 }) {
    return await super._changeToMediaAtIndex(e, t);
  }
  get shouldTransitionSeamlessly() {
    return this._isSeamlessAudioTransitionsEnabled && this.hasAuthorization && !this.previewOnly;
  }
}
wi([T()], Wt.prototype, "hasCapabilities");
wi([T()], Wt.prototype, "onSeamlessAudioTransition");
wi([T()], Wt.prototype, "onRepeatModeChange");
wi([T()], Wt.prototype, "onQueueChange");
wi([T()], Wt.prototype, "prepareToPlayNextItem");
const vo = {};
function rv(i, e, t, r = {}) {
  const { once: s } = r,
    n = Array.isArray(e) ? e : [e],
    a = [];
  for (const o of n) {
    const c = sv(o, t);
    (s === !0 ? i.subscribeOnce(o, c) : i.subscribe(o, c), a.push(() => _l(i, o, t)));
  }
  return () => {
    for (const o of a) o();
  };
}
function _l(i, e, t) {
  const r = Tl(e);
  let s;
  for (let n = r.length - 1; n >= 0; n--) {
    const [a, o] = r[n];
    if (a === t) {
      ((s = o), r.splice(n, 1));
      break;
    }
  }
  s && i.unsubscribe(e, s);
}
function Tl(i) {
  let e = vo[i];
  return (e || ((e = []), (vo[i] = e)), e);
}
function sv(i, e) {
  const t = Tl(i),
    r = (s, n) => {
      e(n, s);
    };
  return (t.push([e, r]), r);
}
class nv {
  _bitrate;
  _dispatcher;
  _downlinkSamples = [];
  constructor(e, t = Re.STANDARD) {
    ((this._bitrate = t ?? Re.STANDARD),
      (this._dispatcher = e),
      window?.navigator?.connection?.downlink !== void 0 &&
        this._recalculateBitrate((window.navigator.connection.downlink || 0) * 100));
  }
  get bitrate() {
    return this._bitrate;
  }
  set bitrate(e) {
    this._bitrate !== e && ((this._bitrate = e), this._dispatcher.publish(f.playbackBitrateDidChange, { bitrate: e }));
  }
  _calculateAverageDownlink() {
    return this._downlinkSamples.length === 0
      ? 0
      : this._downlinkSamples.reduce((e, t) => e + t, 0) / this._downlinkSamples.length || 0;
  }
  _recalculateBitrate(e) {
    (u.debug("_recalculateBitrate", e),
      this._downlinkSamples.push(e),
      this._calculateAverageDownlink() > Re.STANDARD
        ? (u.debug("setting bitrate to", Re.HIGH), (this.bitrate = Re.HIGH))
        : (u.debug("setting bitrate to", Re.STANDARD), (this.bitrate = Re.STANDARD)));
  }
}
const fe = _.createChild("player"),
  av = _e.register("mk-hlsjs-song-playback"),
  ov = _e.register("mk-force-native-safari-video-player");
class cv {
  services;
  cachedPlayers = new Map();
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  constructor(e) {
    this.services = e.services;
  }
  async createPlayer(e, t) {
    if ((fe.trace("PlayerManager.createPlayer()", e, t), e.contentType === "audio"))
      return this.createAudioPlayer(e, t);
    if (e.contentType === "video") return this.createVideoPlayer(e, t);
    throw new g("mk-171", g.Reason.CONTENT_UNSUPPORTED, {
      description: `Unable to create player for asset: ${e.id}`,
      data: e,
    });
  }
  async createAudioPlayer(e, t) {
    const { playerOptions: r } = t;
    if (!e.encrypted && !e.hls) {
      const s = this.cachedPlayers.get(oi);
      if (s !== void 0 && !s.isDestroyed) return (fe.debug("Using cached HTMLAudioPlayer instance"), s);
      fe.info("Creating HTMLAudioPlayer for unencrypted asset");
      const n = new oi(r);
      return (await n.initialize(), fe.debug("Caching HTMLAudioPlayer instance"), this.cachedPlayers.set(oi, n), n);
    }
    if (!e.encrypted) {
      fe.info("Creating HlsJsAudioPlayer for unencrypted HLS asset");
      const s = new Ye(r);
      return (await s.initialize(), s);
    }
    if (await lv(e)) {
      fe.info("Creating HlsJsAudioPlayer required for asset");
      const s = new Ye(r);
      return (await s.initialize(), s);
    } else {
      const s = this.cachedPlayers.get(Ge);
      if (s !== void 0 && !s.isDestroyed) return (fe.debug("Using cached AudioPlayer instance"), s);
      fe.info("Creating AudioPlayer as a fall through");
      const n = new Ge(r);
      return (await n.initialize(), fe.debug("Caching AudioPlayer instance"), this.cachedPlayers.set(Ge, n), n);
    }
  }
  async createVideoPlayer(e, t) {
    fe.debug("Creating VideoPlayer");
    const { playerOptions: r } = t;
    if (ov.enabled) {
      fe.info("Creating NativeSafariVideoPlayer with mkForceSafariNativeVideoPlayer enabled");
      const a = new Rr(r);
      return (await a.initialize(), a);
    }
    const s = this.cachedPlayers.get(ye);
    if (s !== void 0 && !s.isDestroyed) return (fe.debug("Using cached HlsJsVideoPlayer instance"), s);
    fe.info("Creating HLSjsVideoPlayer as the default");
    const n = new ye(r);
    return (await n.initialize(), this.cachedPlayers.set(ye, n), n);
  }
  destroy() {
    this._isDestroyed = !0;
    for (const e of this.cachedPlayers.values()) e.destroy();
    this.cachedPlayers.clear();
  }
}
async function lv(i) {
  return !!(
    i.contentType === "video" ||
    i.item === void 0 ||
    Ei(i.item ?? {}) ||
    nn(i.item ?? {}) ||
    Qo(i.item ?? {}) ||
    zi(i.item ?? {}) ||
    av.enabled
  );
}
const Fn = [
    "artist",
    "album",
    "audioBook",
    "episode",
    "librarySong",
    "movie",
    "musicMovie",
    "musicVideo",
    "playlist",
    "podcast",
    "podcastEpisode",
    "radioStation",
    "song",
    "station",
    "trailer",
    "tvEpisode",
    "uploadedAudio",
    "uploadedVideo",
  ],
  Kn = [
    "artists",
    "albums",
    "audioBooks",
    "episodes",
    "librarySongs",
    "movies",
    "musicVideos",
    "musicMovies",
    "playlists",
    "podcasts",
    "podcastEpisodes",
    "radioStations",
    "songs",
    "stations",
    "trailers",
    "tvEpisodes",
    "uploadedVideos",
    "uploadedAudios",
  ],
  Ae = _.createChild("item-loader");
function uv(i) {
  return i != null && i.item !== void 0;
}
function dv(i) {
  return i != null && Array.isArray(i.items);
}
function hv(i) {
  return i != null && typeof i.url == "string";
}
function pv(i) {
  return i != null && Array.isArray(i.urls);
}
function fv(i) {
  return i !== void 0 && typeof i.id == "string" && typeof i.type == "string" && typeof i.attributes < "u";
}
function bo(i) {
  if (
    Object.keys(i).reduce(function (t, r) {
      return r === "item" || r === "items" || r === "url" || r === "urls" || Fn.includes(r) || Kn.includes(r)
        ? t + 1
        : t;
    }, 0) > 1
  )
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Using multiple media kinds is not supported");
  return uv(i) ? _o([i.item]) : dv(i) ? _o(i.items) : hv(i) ? [js(i.url)] : pv(i) ? i.urls.map((t) => js(t)) : yv(i);
}
function _o(i) {
  const e = [];
  for (const t of i)
    typeof t == "string"
      ? e.push(js(t))
      : t instanceof fi
        ? e.push({ id: t.id, kind: pi(t.type), item: t })
        : fv(t)
          ? e.push({ id: t.id, kind: pi(t.type), data: t })
          : e.push(t);
  return e;
}
function js(i) {
  if (!Fu(i)) throw new p(p.Reason.INVALID_ARGUMENTS, `Invalid media URL: ${i}`);
  const { contentId: e, kind: t } = Ku(i);
  if (e === void 0) throw new p(p.Reason.CONTENT_UNAVAILABLE, `Unable to resolve URL: ${i}`);
  const r = El(t);
  if (r === void 0 || (!Fn.includes(r) && !Kn.includes(r)))
    throw new p(p.Reason.CONTENT_UNSUPPORTED, `Unsupported Media Kind: ${r}`);
  return { id: e, kind: pi(r) };
}
function yv(i) {
  let e;
  const t = [];
  for (const a of Object.keys(i)) {
    const o = El(a);
    mv(a) && (e === void 0 ? (e = [o, i[a]]) : t.push(a));
  }
  const [r, s] = e ?? [];
  if (r === void 0 || s === void 0) return [];
  t.length > 0 && Ae.warn(`Found redundant named options besides ${r}: ${t.join(", ")}`);
  const n = pi(r);
  return Array.isArray(s) ? s.map((a) => ({ id: a, kind: n })) : [{ id: s, kind: n }];
}
function El(i) {
  const e = pi(i);
  return e === "episode" ? "podcastEpisode" : e === "radio-station" ? "station" : i;
}
function mv(i) {
  return Fn.includes(i) || Kn.includes(i);
}
function gv(i, e) {
  const t = {};
  for (const r of i) {
    const s = e(r);
    (t[s] === void 0 && (t[s] = []), t[s].push(r));
  }
  return t;
}
class vv {
  services;
  fetchContainerPages;
  isConfigured = !0;
  static create(e) {
    const t = new this(e);
    return (t.configure(e), t);
  }
  constructor(e) {
    ((this.services = e.services), (this.fetchContainerPages = e.fetchContainerPages ?? !1));
  }
  configure(e) {
    e.fetchContainerPages !== void 0 && (this.fetchContainerPages = e.fetchContainerPages);
  }
  convertOptionsToItemDescriptors(e) {
    return bo(e);
  }
  buildRequest(e, t) {
    return this.services.mediaAPI.createRequest(e, t);
  }
  async loadItems(e) {
    (Ae.trace("MusicItemLoader.loadItems()", e), Ae.debug("Loading resources for options", e));
    const t = await this.loadResources({ fetchContainerPages: this.fetchContainerPages, ...e }),
      r = this.createItems(t, { container: e?.container, context: e?.context });
    return (Ae.debug(`Transformed ${t.length} resources into ${r.length} MediaItems`), r);
  }
  async loadStation(e) {
    Ae.debug("Loading Radio Station", e);
    const r = this.convertOptionsToItemDescriptors(e).find((n) => n.kind === "station");
    if (r === void 0) {
      Ae.debug("No station descriptor found in options, returning undefined");
      return;
    }
    return (
      await this.loadItems({
        restricted: e.restricted,
        items: [r],
        container: e?.container,
        context: e?.context,
        fetchContainerPages: !1,
      })
    )[0];
  }
  async loadStationNextTracks(e, t) {
    const r = typeof e == "string" ? e : e.id,
      s = this.buildRequest(`/v1/me/stations/next-tracks/${r}`, {
        params: t?.limit !== void 0 ? { limit: t.limit } : void 0,
        method: "POST",
      }),
      n = await this.fetchResources(s),
      a = {
        id: t?.container?.id ?? r,
        type: "stations",
        href: t?.container?.href ?? `/v1/catalog/${this.services.mediaAPI.storefrontId}/stations/${r}`,
        attributes: t?.container?.attributes ?? {},
      },
      o = t?.context ?? {};
    return ni(n.map((c) => Vs(c, a, o)));
  }
  async createAutoplayStation(e, t) {
    const r = [];
    for (let l = 0; l < e.length; l++) {
      const h = e[l],
        m = zo(h instanceof fi ? h.type : h.kind);
      /(-?songs|artists?)$/.test(m) &&
        r.push({
          id: h.id,
          type: hi(h.id) ? "library-songs" : "songs",
          meta: t?.container !== void 0 ? { container: t.container } : void 0,
        });
    }
    if (r.length === 0)
      throw (
        Ae.error("Unable to create AutoplayStation: No items to seed"),
        new p(p.Reason.CONTENT_UNAVAILABLE, "Unable to create AutoplayStation: No items to seed")
      );
    const s = this.buildRequest("/v1/me/stations/continuous", {
        params: {
          "limit[results:tracks]": t?.limit !== void 0 && t.limit > 1 ? t.limit : void 0,
          with: t?.withTracks === !0 ? ["tracks"] : void 0,
        },
        method: "POST",
        body: { data: r },
      }),
      { errors: n, results: a } = await s.send().then((l) => l.json());
    if (n !== void 0 && n.length > 0) {
      Ae.error("Unable to create AutoplayStation: Server Error");
      const l = new p(p.Reason.CONTENT_UNSUPPORTED, "Unable to create AutoplayStation: Server Error");
      throw ((l.data = { errors: n }), l);
    }
    if (a?.station === void 0)
      throw (
        Ae.error("Unable to create AutoplayStation: No station returned from server"),
        new p(p.Reason.CONTENT_UNAVAILABLE, "Unable to create AutoplayStation: No station returned from server")
      );
    const o = this.createItems(a.station, { container: t?.container, context: t?.context })[0];
    let c = [];
    return (
      Array.isArray(a.tracks) && (c = this.createItems(a.tracks, { container: o, context: t?.context })),
      Ae.info(`Created AutoPlay station ${o.id} with ${c.length} tracks`),
      { station: o, tracks: c }
    );
  }
  async loadResources(e) {
    const t = bo(e),
      r = bv(e.parameters),
      s = new Map(t.map((y, k) => [y.id, { position: k, descriptor: y }])),
      n = gv(t, (y) => y.kind),
      a = Object.entries(n),
      o = [],
      c = [];
    for (const [y, k] of a) {
      const q = [],
        ae = [],
        X = [];
      for (const le of k) le.item !== void 0 || le.data !== void 0 ? q.push(le) : (hi(le.id) ? X : ae).push(le);
      const we = [];
      (/^(?:playlists?|albums?)$/i.test(y) && we.push("tracks"), /^podcasts?$/i.test(y) && we.push("episodes"));
      const Qt = /^(?:playlists?|library-playlists?)$/i.test(y),
        Xt = e.restricted ? "explicit" : void 0;
      q.length > 0 && o.push(...q.map((le) => le.item ?? le.data));
      const ct = Mt(rt(r), { include: we, extend: Qt ? ["hasCollaboration"] : [], restrict: Xt }),
        Li = 16;
      if (ae.length > 0) {
        const le = To(ae, Li);
        for (const Jt of le)
          c.push(
            this.buildRequest(`/v1/catalog/${this.services.mediaAPI.storefrontId}/${si(y)}s`, {
              params: { ...ct, ids: Jt },
            }),
          );
      }
      if (X.length > 0)
        if (y === "song") {
          const le = To(X, Li);
          for (const Jt of le) c.push(this.buildRequest(`/v1/me/library/${si(y)}s/`, { params: { ...ct, ids: Jt } }));
        } else for (const le of X) c.push(this.buildRequest(`/v1/me/library/${si(y)}s/${le.id}`, { params: ct }));
    }
    const l = await Promise.all(
        c.map((y) =>
          this.fetchResources(y, {
            fetchContainerPages: e.fetchContainerPages,
            containerItemLimit: e.containerItemLimit,
            restricted: e.restricted,
          }),
        ),
      ),
      h = Array(s.size);
    for (const y of [...o, ...ni(l)]) {
      const k = s.get(y.id);
      k?.position !== void 0 && (h[k.position] = y);
    }
    const m = [];
    for (const { position: y, descriptor: k } of s.values()) h[y] === void 0 && m.push(k);
    if (m.length > 0) {
      const y = new p(
        p.Reason.NOT_FOUND,
        `One or more items could not be resolved: ${m.map(({ id: k }) => k).join(", ")}`,
      );
      throw ((y.data = m), y);
    }
    return h;
  }
  async fetchResources(e, t) {
    const r = t?.restricted ? "explicit" : void 0,
      s = t?.fetchContainerPages ?? !1,
      n = Math.max(0, t?.containerItemLimit ?? 1 / 0),
      o = await (await e.send()).json();
    if (o?.data === void 0) return (Ae.error("Unable to fetch resources: empty data from server"), []);
    const c = Array.isArray(o.data) ? o.data : [o.data];
    return Promise.all(
      c.map(async (l) => {
        const h = l.relationships?.tracks ?? l.relationships?.episodes;
        if (h === void 0) return l;
        const m = [...h.data];
        let y;
        for (s && m.length < n && (y = h.next); y !== void 0;) {
          const k = Math.min(100, n - m.length),
            X = await (await this.buildRequest(y, { params: { restrict: r, limit: k } }).send()).json();
          (m.push(...X.data), (y = m.length < n ? X.next : void 0));
        }
        return (delete h?.next, delete h?.href, (h.data = m.slice(0, n)), l);
      }),
    );
  }
  createItems(e, t) {
    return ((e = Array.isArray(e) ? e : [e]), ni(e.map((r) => Vs(r, t?.container, t?.context))));
  }
}
function bv(i) {
  const e = { ...i };
  if (i === void 0) return e;
  for (const t of ["extend", "include", "relate", "fields"])
    if (e[t] !== void 0) {
      const r = i[t];
      typeof r == "string" && (e[t] = r.split(/(?:,{1}?\s*|\s+)/));
    }
  return e;
}
function To(i, e) {
  return i.reduce(function (r, s, n) {
    const a = Math.floor(n / e);
    return (r[a] === void 0 && (r[a] = []), r[a].push(s.id), r);
  }, []);
}
var _v = Object.defineProperty,
  Tv = Object.getOwnPropertyDescriptor,
  Bn = (i, e, t, r) => {
    for (var s = Tv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && _v(e, t, s), s);
  };
class Dr {
  services;
  config;
  _trackers = [];
  enabled = !0;
  get isEnabled() {
    return this.enabled;
  }
  registeredEvents = new Set();
  lastUserIntent;
  lastApplicationIntent;
  get isConfigured() {
    return this.config !== void 0;
  }
  get dispatcher() {
    return this.services.dispatcher;
  }
  get trackers() {
    return this._trackers;
  }
  constructor(e) {
    ((this.services = e.services),
      (this.enabled = e.enabled ?? !0),
      e.trackers !== void 0 && this.registerTrackers(e.trackers));
  }
  async configure(e) {
    ((this.config = e), this.isEnabled && (await this.configureTrackers()));
  }
  async enable() {
    this.isEnabled || ((this.enabled = !0), await this.configureTrackers());
  }
  async disable() {
    this.isEnabled &&
      ((this.enabled = !1),
      this.teardownListeners(),
      await Promise.all(
        this.trackers.map(async function (e) {
          try {
            await e.cleanup?.();
          } catch {
            _.warn(`Tracker failed to clean up: ${e.constructor.name}`);
          }
        }),
      ));
  }
  async registerTracker(e) {
    await this.registerTrackers([e]);
  }
  async registerTrackers(e) {
    (this.trackers.push(...e), this.isConfigured && this.isEnabled && (await this.configureTrackers()));
  }
  getTrackerByType(e) {
    return this._trackers.find((t) => t instanceof e);
  }
  async configureTrackers() {
    const e = this.config;
    if (e === void 0)
      throw new g("mk-142", g.Reason.CONFIGURATION_ERROR, { description: "PlayActivityService is not configured yet" });
    if (this.isEnabled) {
      (await Promise.all(
        this.trackers.map(async function (t) {
          try {
            await t.cleanup?.();
          } catch {
            _.warn(`Tracker failed to clean up: ${t.constructor.name}`);
          }
        }),
      ),
        this.teardownListeners(),
        (this.registeredEvents = new Set()));
      for (const t of this._trackers) for (const r of t.requestedEvents) this.registeredEvents.add(r);
      (this.setupListeners(),
        await Promise.all(
          this.trackers.map(async function (t) {
            try {
              await t.configure(e);
            } catch {
              _.warn(`Tracker failed to configure: ${t.constructor.name}`);
            }
          }),
        ));
    }
  }
  handleEvent(e, t = {}) {
    const r = this.addIntention(e, t);
    e === S.playerActivate && (r.flush = typeof t.isPlaying == "boolean" ? !t.isPlaying : void 0);
    for (const s of this._trackers) s.handleEvent(e, r, t.item);
  }
  addIntention(e, t) {
    if (![S.playbackPause, S.playbackStop].includes(e)) return t;
    const r = { ...this.lastUserIntent, ...this.lastApplicationIntent, ...t };
    return (this.clearIntention(), r);
  }
  clearIntention() {
    ((this.lastUserIntent = void 0), (this.lastApplicationIntent = void 0));
  }
  recordApplicationIntent(e, t) {
    this.lastApplicationIntent = t;
  }
  recordUserIntent(e, t) {
    this.lastUserIntent = t;
  }
  setupListeners() {
    (this.registeredEvents.forEach((e) => {
      this.dispatcher.subscribe(e, this.handleEvent);
    }),
      this.dispatcher.subscribe(S.userActivityIntent, this.recordUserIntent),
      this.dispatcher.subscribe(S.applicationActivityIntent, this.recordApplicationIntent));
  }
  teardownListeners() {
    (this.registeredEvents.forEach((e) => {
      this.dispatcher.unsubscribe(e, this.handleEvent);
    }),
      this.dispatcher.unsubscribe(S.userActivityIntent, this.recordUserIntent),
      this.dispatcher.unsubscribe(S.applicationActivityIntent, this.recordApplicationIntent));
  }
}
Bn([T()], Dr.prototype, "handleEvent");
Bn([T()], Dr.prototype, "recordApplicationIntent");
Bn([T()], Dr.prototype, "recordUserIntent");
var Ev = Object.defineProperty,
  kv = Object.getOwnPropertyDescriptor,
  Vn = (i, e, t, r) => {
    for (var s = kv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Ev(e, t, s), s);
  };
const ue = M.createChild("playback"),
  Eo = (i, e) => {
    const { os: t } = e;
    if (i.isLinearStream && (t.name === "ios" || t.name === "ipados")) {
      ue.warn("Cannot play linear stream on iOS or iPad");
      const r = new p(p.Reason.CONTENT_UNSUPPORTED, "IOS LINEAR");
      throw ((r.data = { item: i }), r);
    }
  },
  ko = async (i, e) => {
    if (i.container?.attributes?.requiresSubscription && !(await e())) {
      const r = new p(p.Reason.SUBSCRIPTION_ERROR);
      throw ((r.data = i), r);
    }
  },
  So = (i, e) => {
    const { isMSESupported: t, isMMSSupported: r } = e;
    if (i.hasOffersHlsUrl && !t && !r) {
      ue.warn("HLSjs is not supported");
      const s = new p(p.Reason.CONTENT_UNSUPPORTED, "HLSjs Unsupported on Device");
      throw ((s.data = { item: i }), s);
    }
  };
let Io = !1;
class Mr {
  playerState = { defaultPlaybackRate: 1, playbackRate: 1, volume: 1 };
  playOptions = new Map();
  hasMusicSubscription;
  _currentPlayer;
  services;
  previewOnly = !1;
  _volumeAtMute;
  currentPlayback;
  _isDestroyed = !1;
  _currentTimedMetadata;
  playerOptions;
  get isDestroyed() {
    return this._isDestroyed;
  }
  constructor(e) {
    ((this.services = e.services), (this.playerOptions = e.playerOptions));
    const { playbackServices: t } = e.playerOptions;
    ((this.hasMusicSubscription = t.hasMusicSubscription),
      lf(this.playerOptions.tokens),
      (this._currentPlayer = new Oy(this.playerOptions)),
      this.dispatcher.subscribe(U.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.subscribe(Fs.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher.subscribe(Pe.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
  }
  get bitrateCalculator() {
    return this.services.bitrateCalculator;
  }
  get dispatcher() {
    return this.services.dispatcher;
  }
  get playerManager() {
    return this.services.player;
  }
  get manifestManager() {
    return this.services.manifest;
  }
  get currentPlaybackTime() {
    return this._currentPlayer.currentPlaybackTime;
  }
  get currentPlaybackTimeRemaining() {
    return this._currentPlayer.currentPlaybackTimeRemaining;
  }
  get currentPlayingDate() {
    return this._currentPlayer.currentPlayingDate;
  }
  get isPlayingAtLiveEdge() {
    return this._currentPlayer.isPlayingAtLiveEdge;
  }
  get seekableTimeRanges() {
    return this._currentPlayer.seekableTimeRanges;
  }
  get audioTracks() {
    return this._currentPlayer.audioTracks;
  }
  get currentAudioTrack() {
    return this._currentPlayer.currentAudioTrack;
  }
  set currentAudioTrack(e) {
    this._currentPlayer.currentAudioTrack = e;
  }
  get currentPlaybackDuration() {
    return this._currentPlayer.currentPlaybackDuration;
  }
  get currentBufferedProgress() {
    return this._currentPlayer.currentBufferedProgress;
  }
  get currentPlaybackProgress() {
    return this._currentPlayer.currentPlaybackProgress;
  }
  get currentTextTrack() {
    return this._currentPlayer.currentTextTrack;
  }
  set currentTextTrack(e) {
    this._currentPlayer.currentTextTrack = e;
  }
  get currentVideoTrack() {
    return this._currentPlayer.currentVideoTrack;
  }
  set currentVideoTrack(e) {
    this._currentPlayer.currentVideoTrack = e;
  }
  get isPlaying() {
    return this._currentPlayer.isPlaying;
  }
  get isPrimaryPlayer() {
    return this._currentPlayer.isPrimaryPlayer;
  }
  set isPrimaryPlayer(e) {
    this._currentPlayer.isPrimaryPlayer = e;
  }
  get isReady() {
    return this._currentPlayer.isReady;
  }
  get nowPlayingItem() {
    return this._currentPlayer.nowPlayingItem;
  }
  get currentTimedMetadata() {
    return this._currentTimedMetadata;
  }
  get playbackRate() {
    return this._currentPlayer.playbackRate;
  }
  set playbackRate(e) {
    this._updatePlayerState("playbackRate", e);
  }
  get defaultPlaybackRate() {
    return this._currentPlayer.defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    this._updatePlayerState("defaultPlaybackRate", e);
  }
  get playbackState() {
    return this._currentPlayer.playbackState;
  }
  set playbackState(e) {
    this._currentPlayer.setPlaybackState(e, this.nowPlayingItem);
  }
  get playbackTargetAvailable() {
    return this._currentPlayer.playbackTargetAvailable;
  }
  get playbackTargetIsWireless() {
    return this._currentPlayer.playbackTargetIsWireless;
  }
  get supportsPreviewImages() {
    return this._currentPlayer.supportsPreviewImages;
  }
  get textTracks() {
    return this._currentPlayer.textTracks;
  }
  get videoTracks() {
    return this._currentPlayer.videoTracks;
  }
  get volume() {
    return this._currentPlayer.volume;
  }
  set volume(e) {
    (this._currentPlayer.isDestroyed && this.dispatcher.publish(f.playbackVolumeDidChange, {}),
      this._updatePlayerState("volume", e));
  }
  clearNextManifest() {
    this._currentPlayer.clearNextManifest();
  }
  destroy() {
    ((this._currentTimedMetadata = void 0),
      (this._isDestroyed = !0),
      this.dispatcher.unsubscribe(U.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.unsubscribe(Fs.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher?.unsubscribe(Pe.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
  }
  exitFullscreen() {
    return this._currentPlayer.exitFullscreen();
  }
  async loadPreviewImage(e) {
    return this._currentPlayer.loadPreviewImage(e);
  }
  getNewSeeker() {
    return this._currentPlayer.newSeeker();
  }
  mute() {
    ((this._volumeAtMute = this.volume), (this.volume = 0));
  }
  async pause(e) {
    return this._currentPlayer.pause(e);
  }
  async play() {
    return this._currentPlayer.play();
  }
  async preload() {
    return this._currentPlayer.preload();
  }
  async prepareToPlay(e) {
    return (ue.trace("MediaItemPlayback.prepareToPlay()", e), this.preloadMediaItem(e));
  }
  async preloadMediaItem(e) {
    if ((ue.trace("MediaItemPlayback.preloadItem()", e), ju(e)))
      return (ue.info(`Free podcast episode, not preparing item: ${e}`, e), e);
    const t = this.playOptions.get(e.id);
    ue.info(`Preparing MediaItem: ${e}`, e);
    const r = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Re.HIGH ? 256 : 64,
      startOver: t?.startOver,
      bingeWatching: t?.bingeWatching,
    });
    return (
      Po(e, r, this.previewOnly),
      ue.info(`Calling ${this._currentPlayer.constructor.name}.preloadItem for ${e}`),
      await this._currentPlayer.preloadItem(e, t),
      e
    );
  }
  requestFullscreen(e) {
    return this._currentPlayer.requestFullscreen(e);
  }
  showPlaybackTargetPicker() {
    this._currentPlayer.showPlaybackTargetPicker();
  }
  async seekToTime(e, t = je.Manual) {
    await this._currentPlayer.seekToTime(e, t);
  }
  async setPresentationMode(e) {
    return this._currentPlayer.setPresentationMode(e);
  }
  async startMediaItemPlayback(e, t) {
    return (ue.trace("MediaItemPlayback.startMediaItemPlayback()", e), this.playMediaItem(e, t));
  }
  async playMediaItem(e, t = !1, r) {
    (ue.trace("MediaItemPlayback.playMediaItem()", e),
      Eo(e, this.services.runtime),
      So(e, this.services.runtime),
      await ko(e, this.hasMusicSubscription),
      this.playOptions.has(e.id) && ((r = r ?? this.playOptions.get(e.id)), this.playOptions.delete(e.id)));
    const s = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Re.HIGH ? 256 : 64,
      startOver: r?.startOver,
      bingeWatching: r?.bingeWatching,
    });
    return (await this.playAsset(s, t, r), e);
  }
  async playAsset(e, t = !1, r) {
    ue.trace("MediaItemPlayback.playAsset", e);
    const s = e.item;
    (s?.resetState(),
      Eo(s, this.services.runtime),
      So(s, this.services.runtime),
      await ko(s, this.hasMusicSubscription),
      (this._currentTimedMetadata = void 0),
      this.playOptions.has(s.id) && ((r = r ?? this.playOptions.get(s.id)), this.playOptions.delete(s.id)));
    const n = await this.playerManager.createPlayer(e, { playerOptions: this.playerOptions, playOptions: r });
    if ((await this.setCurrentPlayer(n), Po(s, e, this.previewOnly), e.encrypted))
      if (e.encrypted)
        (ue.debug(`Initializing encrypted playback for ${s}`, e),
          (s.playbackType = ce.encryptedFull),
          (n.nowPlayingItem = s),
          await n.playItemFromEncryptedSource(s, t, r));
      else
        throw new g("mk-170", g.Reason.CONTENT_UNSUPPORTED, {
          description: "Unable to play asset for MediaItem",
          data: { asset: e, item: s },
        });
    else {
      ue.debug(`Initializing unencrypted playback for ${s}`, e);
      const a = n.isPaused && !t;
      ((s.playbackType = this.previewOnly || e.preview ? ce.preview : ce.unencryptedFull),
        (n.nowPlayingItem = s),
        await n.playItemFromUnencryptedSource(e.assetURL, a, this.previewOnly ? void 0 : r, s));
    }
    return ((this.currentPlayback = { asset: e, item: s, userInitiated: t }), e);
  }
  async stop(e) {
    await this._currentPlayer.stop(e);
  }
  unmute() {
    this.volume > 0 || ((this.volume = this._volumeAtMute || 1), (this._volumeAtMute = void 0));
  }
  async setCurrentPlayer(e) {
    return (
      this._currentPlayer === e ||
        (ue.debug("MediaItemPlayback: setting currentPlayer", e),
        await this._currentPlayer.stop(),
        (this._currentPlayer = e),
        ue.trace("Applying default player state", e, this.playerState),
        Object.assign(e, this.playerState),
        this.dispatcher.publish(f.playerTypeDidChange, { player: e })),
      e
    );
  }
  getCurrentPlayer() {
    return this._currentPlayer;
  }
  async onKeySystemGenericError(e, t) {
    if (Io) this.dispatcher.publish(f.mediaPlaybackError, t);
    else if (
      ((Io = !0),
      ue.warn("Retrying playback after keysystemGenericError"),
      await this.stop(),
      this.currentPlayback !== void 0)
    ) {
      const { asset: r, item: s, userInitiated: n } = this.currentPlayback;
      r !== void 0 ? await this.playAsset(r, n) : await this.playMediaItem(s, n);
    }
  }
  onBufferTimedMetadataDidChange(e, t) {
    this._currentTimedMetadata = t.metadata;
  }
  async onPlaybackLicenseError(e, t) {
    this.dispatcher.publish(f.mediaPlaybackError, t);
  }
  _updatePlayerState(e, t) {
    ((this.playerState[e] = t), (this._currentPlayer[e] = t));
  }
}
Vn([T()], Mr.prototype, "onKeySystemGenericError");
Vn([T()], Mr.prototype, "onBufferTimedMetadataDidChange");
Vn([T()], Mr.prototype, "onPlaybackLicenseError");
function Po(i, e, t) {
  ((i.assetURL = e.assetURL),
    e.encrypted &&
      (i.keyURLs = {
        "hls-key-server-url": e.keyServerURL,
        "hls-key-cert-url": e.keyCertURL,
        "widevine-cert-url": e.keyCertURL,
      }),
    e.meta !== void 0 && (i.hlsMetadata = e.meta),
    t
      ? (i.playbackType = ce.preview)
      : e.encrypted
        ? e.encrypted
          ? (i.playbackType = ce.encryptedFull)
          : (i.playbackType = ce.none)
        : (i.playbackType = ce.unencryptedFull),
    (i.state = x.ready));
}
const Wi = _.createChild("rtc");
class kl {
  options;
  reportingAgent;
  instance;
  currentMediaItem;
  _storeBag;
  requestedEvents = [];
  get isConfigured() {
    return this.instance !== void 0;
  }
  constructor(e) {
    this.options = e;
  }
  async configure(e) {
    this.instance = e.instance;
  }
  handleEvent(e, t, r) {}
  async loadScript() {
    if (!H.urls.rtc) throw new Error("bag.urls.rtc is not configured");
    await Cr(H.urls.rtc);
  }
  prepareReportingAgent(e) {
    const {
      Sender: t,
      ClientName: r,
      ServiceName: s,
      ApplicationName: n,
      ReportingStoreBag: a,
      DeviceName: o,
    } = window.rtc.RTCReportingAgentConfigKeys;
    e = e ?? this.instance.nowPlayingItem;
    const c = {
        firmwareVersion: this.generateBrowserVersion(),
        model: this.options.browserName,
        ...this.getMediaIdentifiers(e),
      },
      l = this.getServiceNameForItem(e);
    this._storeBag === void 0 && (this._storeBag = this.generateStoreBag(l));
    const h = {
      [t]: "HLSJS",
      [r]: this.options.clientName,
      [s]: l,
      [n]: this.options.applicationName,
      [a]: this._storeBag,
      [o]: this.options.osVersion,
      userInfoDict: c,
    };
    return (
      Wi.debug("RTC: creating reporting agent with config", h),
      (this.reportingAgent = new window.rtc.RTCReportingAgent(h)),
      Wi.debug("RTC: created reporting agent", this.reportingAgent),
      this.reportingAgent
    );
  }
  async cleanup() {
    this.clearReportingAgent();
  }
  getMediaIdentifiers(e) {
    const t = e?.defaultPlayable;
    if (t) {
      const r = {};
      return (
        t.mediaMetrics?.MediaIdentifier !== void 0 && (r.MediaIdentifier = t.mediaMetrics.MediaIdentifier),
        t.channelId !== void 0 && (r.ContentProvider = t.channelId),
        r
      );
    } else {
      if (e?.type === "musicVideo" || e?.type === "podcast-episodes") return { MediaIdentifier: `adamid=${e.id}` };
      if (e?.isLiveVideoStation) return { MediaIdentifier: `raid=${e.id}` };
    }
  }
  clearReportingAgent() {
    this.reportingAgent !== void 0 &&
      (this.reportingAgent.destroy(),
      Wi.debug("RTC: called destroy on reporting agent", this.reportingAgent),
      (this.reportingAgent = void 0));
  }
  generateBrowserVersion() {
    return this.options.browserMajorVersion
      ? `${this.options.browserMajorVersion}.${this.options.browserMinorVersion || 0}`
      : "unknown";
  }
  generateStoreBag(e) {
    const { storeBagURL: t, clientName: r, applicationName: s, browserName: n } = this.options,
      a = `${H.app.name}-${H.app.build}`,
      o = this.instance?.version,
      l = { iTunesAppVersion: `${a}/${o}` },
      h = new window.rtc.RTCStorebag.RTCReportingStoreBag(t, r, e, s, n, l);
    return (Wi.debug("RTC: created store bag", h), h);
  }
  getServiceNameForItem(e) {
    const t = this.options.serviceName;
    return e
      ? e.isLinearStream
        ? e.defaultPlayable?.useSeparateQoSReportingBucket
          ? "com.apple.tv.external.indefinite.fast"
          : "com.apple.tv.external.indefinite"
        : e.defaultPlayable?.useSeparateQoSReportingBucket
          ? "com.apple.tv.external.fast"
          : t
      : t;
  }
}
function Sv(i, e = 1) {
  if (typeof Array.prototype.flat == "function") return Array.prototype.flat.call(i, e);
  if (i == null) throw new TypeError("Cannot convert undefined or null to object");
  Array.isArray(i) || (i = Array.from(i));
  function t(r, s) {
    return s <= 0
      ? r.slice()
      : Array.prototype.reduce.call(
          r,
          function (n, a) {
            return Array.isArray(a) ? n.concat(t(a, s - 1)) : [...n, a];
          },
          [],
        );
  }
  return t(i, e);
}
function Iv(i) {
  return Sv(i, 1 / 0);
}
function Pv(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function dr(i) {
  return typeof i == "string";
}
function Ut(i, e) {
  return dr(i) ? (e?.trim === !0 ? i.trim() : i).length === 0 : !1;
}
function ss(i) {
  return typeof i == "function";
}
function wv(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function Av(i, e) {
  if (((e = dr(e) && !Ut(e, { trim: !0 }) ? e : ""), e.length > 1))
    throw new Error("QueryString prefix can only be a single character");
  return i.replace(new RegExp(`^[?&${e}]+`, "i"), "");
}
function Rv(i, e) {
  if (!i) return "";
  let t = e?.prefix === !0 ? "?" : "";
  if ((dr(e?.prefix) && (t = e.prefix), dr(i))) return t + Av(i, t);
  const r = ss(e?.arrayFormat) ? e.arrayFormat : (Co[e?.arrayFormat ?? wo] ?? Co[wo]),
    s = ss(e?.objectFormat) ? e.objectFormat : (Ro[e?.objectFormat ?? Ao] ?? Ro[Ao]);
  function n(l, h) {
    return Dv(l, e) ? "" : wv(l) ? s(l, h) : Array.isArray(l) ? r(l, h) : wt(l, h);
  }
  const a = e?.sort ?? Ov;
  let o = Cv;
  ss(e?.encode) && (o = e.encode);
  const c = s(i, {
    path: [],
    format: n,
    encode: o,
    sort: a,
    formatting: {
      skipNull: e?.skipNull ?? !1,
      skipUndefined: e?.skipUndefined ?? !0,
      skipEmptyString: e?.skipEmptyString ?? !0,
      skipEmptyArray: e?.skipEmptyArray ?? !0,
      includeNullValue: e?.includeNullValue ?? !1,
    },
  });
  return Ut(c) ? "" : t + c;
}
const wo = "bracket",
  Ao = "bracket",
  Cv = (i) => encodeURIComponent(String(i)),
  Ov = (...i) => 0,
  Ro = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (r) {
          return t.format(e[r], { ...t, path: t.path.concat(r) });
        })
        .filter((r) => !Ut(r))
        .join("&");
    },
    dot: function (e, t) {
      throw new Error("Not Implemented");
    },
  },
  Co = {
    comma: function (e, t) {
      return wt(e.join(","), t);
    },
    repeat: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? wt("", t)
        : e
            .map((r) => wt(String(r), t))
            .filter((r) => r.length > 0)
            .join("&");
    },
    bracket: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? wt("", t)
        : e
            .map(function (r) {
              return t.format(r, { ...t, path: [...t.path, ""] });
            })
            .filter((r) => !Ut(r) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
    index: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? wt("", t)
        : e
            .map(function (r, s) {
              return t.format(r, { ...t, path: [...t.path, String(s)] });
            })
            .filter((r) => !Ut(r) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
  };
function wt(i, e) {
  const t = e.path.map((r, s) => (s === 0 ? e.encode(r) : `[${e.encode(r)}]`)).join("");
  return i === null && e.formatting.includeNullValue !== !0 ? t : `${t}=${e.encode(i)}`;
}
function Dv(i, e) {
  return !!(
    (i === void 0 && e?.skipUndefined !== !1) ||
    (i === null && e?.skipNull !== !1) ||
    (Ut(i) && e?.skipEmptyString !== !1) ||
    (Array.isArray(i) && i.length === 0 && e?.skipEmptyArray !== !1)
  );
}
function Mv(i) {
  const e = { method: "GET", host: i.hostname, path: i.pathname };
  if (i.searchParams.size > 0) {
    const t = {};
    for (const [r, s] of i.searchParams.entries()) t[r] = s;
    e.params = t;
  }
  return e;
}
function Sl(i, e) {
  return Rv(i, { prefix: e?.prefix, objectFormat: "bracket", arrayFormat: "comma" });
}
function Il(i, e, t) {
  let r = e ?? "";
  Pv(r) && ((t = e), (r = ""));
  const s = Lv(i, r);
  let n = "?";
  s.endsWith("&") || s.endsWith("?") ? (n = "") : s.includes("?") && (n = "&");
  const a = t === void 0 ? "" : Sl(t, { prefix: n });
  return s + a;
}
function Lv(...i) {
  const e = Iv(i).filter((r) => typeof r == "string" && r.trim().length !== 0);
  if (e.length === 0) return "/";
  let t = e[0];
  for (let r = 1; r < e.length; r++) t = t.replace(/[/]+$/, "") + "/" + e[r].replace(/^[/]+/, "");
  return (
    /^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")),
    (t = t.replace(/(:)?[/]+/g, (r, s) => (s ? r : "/"))),
    t
  );
}
function Pl(i) {
  return typeof i == "string";
}
function Nv(i, e) {
  return Pl(i) ? i.length === 0 : !1;
}
const Uv = (i) => !Nv(i);
function xv(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class $n {
  static create(e) {
    return new $n(e);
  }
  withMethod(e) {
    return ((this._config.method = e), this);
  }
  withScheme(e) {
    return ((this._config.scheme = e), this);
  }
  withHost(e) {
    const t = /^(https?)?(:?:\/\/)?([^/]+)/i.exec(e);
    return (t && (Uv(t[1]) && this.withScheme(t[1]), (this._config.host = t[2])), this);
  }
  withPath(e) {
    return ((this._config.path = "/" + e.replace(/^\/+/, "")), this);
  }
  withHeader(e, t) {
    return ((this._config.headers[e.toLowerCase()] = t), this);
  }
  withHeaders(e) {
    if (e instanceof Headers || e instanceof Map) for (const [t, r] of e.entries()) this.withHeader(t, r);
    else for (const [t, r] of Object.entries(e)) this.withHeader(t, r);
    return this;
  }
  withDeveloperToken(e) {
    return this.withHeader("Authorization", `Bearer ${e}`);
  }
  withMediaUserToken(e) {
    return this.withHeader("Media-User-Token", e);
  }
  withUserAgent(e) {
    return this.withHeader("User-Agent", e);
  }
  withUserCountry(e) {
    return this.withHeader("User-Country", e);
  }
  withQueryParams(e) {
    return (this._config.params === void 0 && (this._config.params = {}), Object.assign(this._config.params, e), this);
  }
  withQueryParam(e, t) {
    return this.withQueryParams({ [e]: t });
  }
  withParams(e) {
    return this.withQueryParams(e);
  }
  withParam(e, t) {
    return this.withQueryParams({ [e]: t });
  }
  withBody(e) {
    return (
      this._config.headers?.["Content-Type"] === void 0 && this.withHeader("Content-Type", "application/json"),
      (this._config.body = Pl(e) ? e : JSON.stringify(e)),
      this
    );
  }
  withConfig(e) {
    const t = {
      scheme: this.withScheme,
      method: this.withMethod,
      host: this.withHost,
      path: this.withPath,
      headers: this.withHeaders,
      params: this.withQueryParams,
      body: this.withBody,
    };
    for (const [r, s] of Object.entries(t)) {
      const n = e[r];
      n !== void 0 && s.call(this, n);
    }
    return this;
  }
  withURL(e) {
    return this.withConfig(Mv(e));
  }
  async config() {
    return this._config;
  }
  async build() {
    const { MediaAPIRequest: e } = await la(
      async () => {
        const { MediaAPIRequest: t } = await Promise.resolve().then(() => Do);
        return { MediaAPIRequest: t };
      },
      void 0,
    );
    return new e(await this.config());
  }
  async send(e) {
    const { sendRequest: t } = await la(
      async () => {
        const { sendRequest: r } = await Promise.resolve().then(() => Do);
        return { sendRequest: r };
      },
      void 0,
    );
    return t(await this.build(), { fetch: e?.fetch });
  }
  constructor(e) {
    (xv(this, "_config", { method: "GET", scheme: "https", host: "", path: "", headers: {}, params: {}, body: void 0 }),
      this.withConfig(e ?? {}));
  }
}
class hr extends Error {
  constructor(e, t, r) {
    super(t);
  }
}
function ti(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class Fv {
  get url() {
    return this.response.url;
  }
  get status() {
    return this.response.status;
  }
  get statusText() {
    return this.response.statusText;
  }
  get ok() {
    return this.response.ok;
  }
  get headers() {
    return this.response.headers;
  }
  async text() {
    return (this.textPayload === void 0 && (this.textPayload = await this.response.text()), this.textPayload);
  }
  async json() {
    if (this.jsonPayload === void 0) {
      const e = await this.text();
      this.jsonPayload = JSON.parse(e);
    }
    return this.jsonPayload;
  }
  async hasData() {
    return (await this.json()).data !== void 0;
  }
  async hasNext() {
    return (await this.json()).next !== void 0;
  }
  async hasErrors() {
    return (await this.json()).errors !== void 0;
  }
  async data() {
    return (await this.json()).data;
  }
  async next() {
    return (await this.json()).next;
  }
  async errors() {
    return (await this.json()).errors;
  }
  constructor(e, t) {
    (ti(this, "__brand__", "MediaAPIResponse"),
      ti(this, "config", void 0),
      ti(this, "response", void 0),
      ti(this, "textPayload", void 0),
      ti(this, "jsonPayload", void 0),
      (this.response = e),
      (this.config = Kv(t) ? t.config : t));
  }
}
function Kv(i) {
  return i != null && i.__brand__ === "MediaAPIRequest";
}
function Oo(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class wl extends Request {
  static async builder() {
    return $n.create();
  }
  async send(e) {
    return Hn(this, e);
  }
  constructor(e) {
    const t = new URL(Il(`${e.scheme ?? "https"}://${e.host}`, e.path, Sl(e.params ?? {}, { prefix: "?" }))),
      r = { method: e.method, headers: new Headers(e.headers ?? {}), body: void 0 };
    (e.body !== void 0 &&
      (typeof e.body == "string"
        ? (r.body = e.body)
        : ((r.body = JSON.stringify(e.body)),
          r.headers.has("Content-Type") || r.headers.set("Content-Type", "application/json"))),
      super(t, r),
      Oo(this, "__brand__", "MediaAPIRequest"),
      Oo(this, "config", void 0),
      (this.config = e));
  }
}
async function Hn(i, e) {
  const t = (e?.fetch ?? globalThis?.fetch !== void 0) ? fetch.bind(globalThis) : void 0;
  if (t === void 0) throw new hr("CONFIGURATION_ERROR", "Unable to find valid fetch implementation");
  let r;
  try {
    r = await t(i);
  } catch (s) {
    throw new hr("NETWORK_ERROR", `Unable to complete request for ${i.url}`, s);
  }
  return new Fv(r, i);
}
const Do = Object.freeze(
  Object.defineProperty({ __proto__: null, MediaAPIRequest: wl, sendRequest: Hn }, Symbol.toStringTag, {
    value: "Module",
  }),
);
function ii(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
const Bv = "api.music.apple.com";
class Vv {
  get fetch() {
    if (this.fetchFunction === void 0) throw new hr("CONFIGURATION_ERROR", "Could not find a fetch implementation");
    return this.fetchFunction;
  }
  resolvePath(e) {
    return new URL(Il(`${this.scheme}://${this.host}`, e));
  }
  createRequest(e, t) {
    const r = { ...t?.headers, Authorization: `Bearer ${this.developerToken}` };
    this.mediaUserToken !== void 0 && (r["Media-User-Token"] = this.mediaUserToken);
    const s = { ...t?.params };
    if (e instanceof URL || /^http?s/i.test(e)) {
      const n = new URL(e);
      if (n.hostname !== this.host) throw new hr("VALUE_ERROR", "URL host does not match configured API host");
      e = n.pathname;
      for (const [a, o] of n.searchParams.entries()) s[a] = o;
    }
    return new wl({
      method: t?.method ?? "GET",
      scheme: this.scheme,
      host: this.host,
      path: e,
      headers: r,
      params: s,
      body: t?.body,
    });
  }
  async get(e, t) {
    return this.makeRequest("GET", e, t);
  }
  async post(e, t) {
    return this.makeRequest("POST", e, t);
  }
  async put(e, t) {
    return this.makeRequest("PUT", e, t);
  }
  async patch(e, t) {
    return this.makeRequest("PATCH", e, t);
  }
  async delete(e, t) {
    return this.makeRequest("DELETE", e, t);
  }
  async head(e, t) {
    return this.makeRequest("HEAD", e, t);
  }
  async makeRequest(e, t, r) {
    return Hn(this.createRequest(t, { ...r, method: e }), { fetch: this.fetch });
  }
  constructor(e) {
    if (
      (ii(this, "scheme", void 0),
      ii(this, "host", void 0),
      ii(this, "developerToken", void 0),
      ii(this, "mediaUserToken", void 0),
      ii(this, "fetchFunction", void 0),
      e.developerToken === void 0 || e.developerToken.trim() === "")
    )
      throw new Error("Missing or empty developer token");
    ((this.developerToken = e.developerToken.trim()),
      (this.scheme = e.scheme ?? "https"),
      (this.host = e.host ?? Bv),
      (this.mediaUserToken = e.mediaUserToken),
      (this.fetchFunction = (e.fetch ?? globalThis?.fetch !== void 0) ? globalThis.fetch.bind(globalThis) : void 0));
  }
}
function Mo(i, e) {
  return $v(i)
    .map((t) => {
      switch (t.type) {
        case 1:
          return t.value in e ? encodeURIComponent(`${e[t.value]}`) : `{{${t.value}}}`;
        case 0:
        default:
          return t.value;
      }
    })
    .join("");
}
function $v(i) {
  try {
    return qs(i);
  } catch (e) {
    throw e.message === "UNCLOSED_PARAMETER" ? new Error(`Unclosed parameter in path: "${i}"`) : e;
  }
}
function qs(i, e = []) {
  if (i.startsWith("{{")) {
    const t = i.indexOf("}}");
    if (t === -1) throw new Error("UNCLOSED_PARAMETER");
    const r = { type: 1, value: i.slice(2, t) };
    return t + 2 < i.length ? qs(i.slice(t + 2), [...e, r]) : [...e, r];
  } else {
    const t = i.indexOf("{{");
    return t === -1 ? [...e, { type: 0, value: i }] : qs(i.slice(t), [...e, { type: 0, value: i.slice(0, t) }]);
  }
}
class Hv extends Vv {
  isConfigured = !0;
  services;
  storefrontId = "us";
  get fetch() {
    return this.services.request.fetch;
  }
  get parameters() {
    return { storefront: this.storefrontId, storefrontId: this.storefrontId, storefrontID: this.storefrontId };
  }
  constructor(e) {
    if ($(e.host)) throw new g("mk-114", g.Reason.CONFIGURATION_ERROR, "Invalid API Host for MediaAPIClient");
    if ($(e.developerToken))
      throw new g("mk-115", g.Reason.CONFIGURATION_ERROR, "Invalid developerToken for MediaAPIClient");
    (super({ host: e.host, developerToken: e.developerToken, mediaUserToken: e.mediaUserToken }),
      (this.services = e.services),
      e.storefrontId !== void 0 && (this.storefrontId = e.storefrontId));
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const r of t) {
      const s = this[r].bind(this);
      this[r] = async function (n, ...a) {
        return s(typeof n == "string" ? Mo(n, this.parameters) : n, ...a);
      }.bind(this);
    }
  }
  configure(e) {
    (e.host !== void 0 && (this.host = e.host),
      e.developerToken !== void 0 && (this.developerToken = e.developerToken),
      e.mediaUserToken !== void 0 && (this.mediaUserToken = e.mediaUserToken),
      e.storefrontId !== void 0 && (this.storefrontId = e.storefrontId));
  }
  createRequest(e, ...t) {
    return (typeof e == "string" && (e = Mo(e, this.parameters)), super.createRequest(e, ...t));
  }
}
const jv = (i, e) => {
    Al.info("converting manifest URIs to absolute paths");
    const t = new URL(i);
    let r = e.replace(/URI="([^"]*)"/g, function (s, n) {
      return `URI="${new URL(n, t).href}"`;
    });
    return (
      (r = r.replace(/^(#EXT-X-STREAM-INF:[^\n]*\n)(.*$)/gim, function (s, n, a) {
        const o = new URL(a, t);
        return `${n}${o.href}`;
      })),
      r
    );
  },
  qv = ["https://play.itunes.apple.com/", "https://linear.tv.apple.com/", "https://play-edge.itunes.apple.com"],
  Al = u.createChild("manifest"),
  Lo = _e.register("mk-load-manifest-once");
class Wv {
  cache;
  services;
  personalizedManifests = !1;
  developerToken;
  mediaUserToken;
  isConfigured = !0;
  constructor(e) {
    ((this.services = e.services),
      (this.developerToken = e.developerToken),
      (this.mediaUserToken = e.mediaUserToken),
      (this.cache = e.cache ?? new Map()),
      (this.personalizedManifests = e.personalizedManifests ?? !1),
      Lo.configured && (this.personalizedManifests = Lo.enabled));
  }
  get fetch() {
    return this.services.request.fetch;
  }
  async fetchManifest(e) {
    return (Al.info("fetching manifest at", e), this.personalizedManifests ? this.fetchForCache(e) : this.fetchOnly(e));
  }
  async getManifest(e) {
    return this.cache.get(e);
  }
  async setManifest(e, t) {
    this.cache.set(e, t);
  }
  async clearManifest(e) {
    const t = this.cache.get(e);
    return (this.cache.delete(e), t);
  }
  async clearAll() {
    this.cache.clear();
  }
  clear(e) {
    e ? this.clearManifest(e) : this.clearAll();
  }
  async fetchForCache(e) {
    const t = new Headers();
    qv.some((c) => e.startsWith(c)) &&
      this.mediaUserToken !== void 0 &&
      (t.set("Authorization", `Bearer ${this.developerToken}`), t.set("media-user-token", this.mediaUserToken));
    const s = await this.fetch(e, { headers: t }),
      n = jv(e, await s.text()),
      a = s.headers.get("content-type") ?? void 0,
      o = { url: e, content: n, contentType: a };
    return (this.cache.set(e, o), o);
  }
  async fetchOnly(e) {
    const t = await this.fetch(e),
      r = await t.text(),
      s = t.headers.get("content-type") ?? void 0;
    return { url: e, content: r, contentType: s };
  }
  configure(e) {
    (e.developerToken !== void 0 && (this.developerToken = e.developerToken),
      Ke(e, "mediaUserToken") && (this.mediaUserToken = e.mediaUserToken),
      e.personalizedManifests !== void 0 && (this.personalizedManifests = e.personalizedManifests),
      e.cache !== void 0 && (this.cache = e.cache));
  }
}
class Gv {
  services;
  get client() {
    return this.services.mediaAPI;
  }
  constructor(e) {
    this.services = e.services;
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const r of t)
      this[r] = async function (s, ...n) {
        return No(await this.client[r](s, ...n));
      }.bind(this);
  }
  async request(e, t, r) {
    return No(
      await this.client.createRequest(e, { params: t, headers: r?.headers, method: r?.method, body: r?.body }).send(),
    );
  }
  async music(e, t, r) {
    const s = await this.request(e, t, r);
    return ((s.data = s.json), s);
  }
}
async function No(i) {
  const e = {
    url: i.url,
    status: i.status,
    statusText: i.statusText,
    text: await i.text(),
    json: void 0,
    data: void 0,
    errors: void 0,
  };
  return (
    e.text.trim().length > 0 && ((e.json = await i.json()), (e.data = await i.data()), (e.errors = await i.errors())), e
  );
}
async function Uo(i, e) {
  const { mediaAPI: t } = e,
    r = await t.get("/v1/play/assets", { params: { ...i.playParams, keyFormat: "web" } });
  if (r.status === 500) throw new g("mk-153", g.Reason.SERVER_ERROR, { data: i });
  if (r.status === 403) {
    const n = await r.json(),
      a = n?.code === "40303" ? g.Reason.SUBSCRIPTION_ERROR : g.Reason.ACCESS_DENIED;
    throw new g("mk-154", a, { description: n?.title ?? n?.detail ?? "", data: i });
  }
  if (r.status !== 200) throw new g("mk-155", g.Reason.CONTENT_UNAVAILABLE, { data: i });
  return (await r.json())?.results?.assets ?? [];
}
async function Yv(i, e) {
  const t = new Headers({
      Authorization: `Bearer ${e.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Apple-Music-User-Token": `${e.mediaUserToken}`,
    }),
    r = String(i.playParams.id),
    s = i.isLibraryItem
      ? Object.fromEntries(
          [
            ["purchaseAdamId", i.playParams.purchasedId],
            ["subscriptionAdamId", td(r) ? r.slice(2) : i.playParams.catalogId],
            ["universalLibraryId", hi(r) ? r : void 0],
          ].filter(([, h]) => h !== void 0),
        )
      : { salableAdamId: r },
    n = e.request,
    a = n.buildRequest(e.endpoint, { method: "POST", body: JSON.stringify(s), headers: t }),
    o = await n.fetchJSON(a);
  if (o?.failureType !== void 0 && Yo(o.failureType) === g.Reason.AGE_VERIFICATION_REQUIRED) throw p.serverError(o);
  if (o?.songList === void 0 || o.songList.length === 0)
    throw new g("mk-160", g.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to load assets for MediaItem",
      data: i,
    });
  const c = o.songList[0];
  let l;
  if (zv(c))
    l = {
      url: c["hls-playlist-url"],
      playlist: !0,
      encrypted: !0,
      keyServerURL: c["hls-key-server-url"],
      fairplayCertURL: c["hls-key-cert-url"],
      widevineCertURL: c["widevine-cert-url"],
    };
  else if (Qv(c))
    l = {
      url: c.assets[0].URL,
      playlist: !1,
      encrypted: !i.playRawAssetURL,
      keyServerURL: c["hls-key-server-url"],
      fairplayCertURL: c["hls-key-cert-url"],
      widevineCertURL: c["widevine-cert-url"],
    };
  else {
    const h = e.bitrate ?? 64,
      m = e.encoding ?? "cbcp",
      y = c.assets.find((k) => (k.flavor ?? "").endsWith(`${m}${h}`))?.URL;
    y !== void 0 &&
      (l = {
        url: y,
        playlist: !1,
        encrypted: !0,
        bitrate: h,
        encoding: m,
        keyServerURL: c["hls-key-server-url"],
        fairplayCertURL: c["hls-key-cert-url"],
        widevineCertURL: c["widevine-cert-url"],
      });
  }
  if (l === void 0)
    throw new g("mk-161", g.Reason.CONTENT_UNAVAILABLE, { description: "Unable to fetch asset from MZPlay", data: i });
  return l;
}
function zv(i) {
  const e = i["hls-playlist-url"];
  return e !== void 0 && !$(e);
}
function Qv(i) {
  const e = i.assets[0];
  return i.assets.length === 1 && e !== void 0 && e.flavor === void 0 && !$(e.URL);
}
const Xv = /^(?:#EXT-X-SESSION-DATA:?)DATA-ID="([^"]+)".+VALUE="([^"]+)".*$/,
  Jv = /^com\.apple\.hls\./i;
async function Zv(i, e) {
  if (!i.isUTS || !i.assetURL)
    throw new g("mk-167", g.Reason.INVALID_ARGUMENTS, { description: "Item is not an UTS item", data: i });
  const t = Ii(i, e.playOptions);
  let r;
  try {
    r = await e.manifestManager.fetchManifest(t);
  } catch (n) {
    throw new g("mk-168", g.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to fetch HLS Playlist",
      data: i,
      origin: n,
    });
  }
  const s = {};
  for (const n of r.content.split(`
`)) {
    const a = n.match(Xv);
    a !== null && (s[a[1].replace(Jv, "")] = a[2]);
  }
  return s;
}
const eb = _e.register("mk-broadcast-radio-playback"),
  tb = _e.register("mk-hlsjs-song-playback"),
  J = _.createChild("asset");
class ib {
  services;
  isConfigured = !0;
  _mzplayAssetEndpoint;
  get mzplayAssetEndpoint() {
    if (this._mzplayAssetEndpoint === void 0)
      throw new g("mk-147", g.Reason.CONFIGURATION_ERROR, { description: "MZPlay assets URL is not configured" });
    return this._mzplayAssetEndpoint;
  }
  _staticKeyURLs;
  get staticKeyURLs() {
    if (this._staticKeyURLs === void 0)
      throw new g("mk-143", g.Reason.CONFIGURATION_ERROR, { description: "Static Key URLs not configured" });
    return this._staticKeyURLs;
  }
  get keySystem() {
    if (this.services.runtime.preferredKeySystem === void 0)
      throw new g("mk-140", g.Reason.CONTENT_UNSUPPORTED, { description: "No DRM KeySytem available" });
    return this.services.runtime.preferredKeySystem;
  }
  constructor(e) {
    ((this.services = e.services),
      (this._mzplayAssetEndpoint = e.mzplayAssetEndpoint),
      (this._staticKeyURLs = e.staticKeyURLs));
  }
  async configure(e) {
    (J.trace("MKPlayableAssetResolver.configure(...)", e),
      e?.mzplayAssetEndpoint !== void 0 && (this._mzplayAssetEndpoint = e.mzplayAssetEndpoint),
      e?.staticKeyURLs !== void 0 && (this._staticKeyURLs = e.staticKeyURLs));
  }
  async resolveAsset(e, t) {
    if ((J.info(`Resolving asset for ${e}`, e, t), await this.shouldPlayPreview(e, t))) {
      J.debug(`Resolving preview asset for ${e}`, e, t);
      const r = await this.resolvePreviewAsset(e, t);
      return (J.debug(`Resolved preview asset for ${e}`, r), r);
    }
    if (!$(e.rawAssetUrl ?? "")) {
      J.debug(`Resolving direct asset for ${e}`, e, t);
      const r = await this.resolveDirectURLAsset(e, t);
      return (J.debug(`Resolved direct asset for ${e}`, r), r);
    }
    if (Yu(e)) {
      J.debug(`Resolving Broadcast Radio asset for ${e}`, e, t);
      const r = await this.resolveBroadcastRadioAsset(e, t);
      return (J.debug(`Resolved Broadcast Radio asset for ${e}`, r), r);
    }
    if (e.isUTS) {
      J.debug(`Resolving UTS asset for ${e}`, e, t);
      const r = await this.resolveUTSAsset(e, t);
      return (J.debug(`Resolved UTS asset for ${e}`, r), r);
    }
    if ((zi(e) || Qo(e)) && e.hasOffersHlsUrl) {
      J.debug(`Resolving HLS Offer asset for ${e}`, e, t);
      const r = await this.resolveHLSOffersAsset(e, t);
      return (J.debug(`Resolved HLS Offer asset for ${e}`, r), r);
    }
    if (e.isLiveRadioStation || e.isRadioEpisode || e.isLiveVideoStation) {
      J.debug(`Resolving Live Radio asset for ${e}`, e, t);
      const r = await this.resolveRadioStationAsset(e, t);
      return (J.debug(`Resolved Live Radio asset for ${e}`, r), r);
    }
    if (e.type === "song" && tb.enabled) {
      J.debug(`Resolving Catalog Song asset for ${e}`, e, t);
      const r = await this.resolveCatalogSongAsset(e, t);
      return (J.debug(`Resolved Catalog Song asset for ${e}`, r), r);
    }
    if (await this.isMediaAPIContentType(e, t)) {
      J.debug(`Resolving MZPlay asset for ${e}`, e, t);
      const r = await this.resolveMZPlayWebAsset(e, t);
      return (J.debug(`Resolved MZPlay asset for ${e}`, r), r);
    }
    throw new g("mk-145", g.Reason.CONTENT_UNSUPPORTED, {
      description: `Could not resolve asset for content type ${e.type}`,
      data: e,
    });
  }
  async resolvePreviewAsset(e, t) {
    if ((J.debug(`Resolving preview asset for ${e}`, e, t), e.previewURL === void 0 || $(e.previewURL)))
      throw new g("mk-150", g.Reason.INVALID_ARGUMENTS, { description: "Missing previewURL for MediaItem", data: e });
    const r = e.attributes?.previews?.[0]?.url ? "progressive" : "hls";
    return {
      id: e.catalogId ?? e.id,
      encrypted: !1,
      assetURL: e.previewURL,
      contentType: this.assetContentType(e),
      item: e,
      delivery: r,
      hls: r === "hls",
      preview: !0,
    };
  }
  async resolveDirectURLAsset(e, t) {
    if ($(e.rawAssetUrl ?? ""))
      throw new g("mk-151", g.Reason.INVALID_ARGUMENTS, { description: "Missing rawAssetURL for MediaItem", data: e });
    return {
      id: e.catalogId ?? e.id,
      encrypted: !1,
      assetURL: e.rawAssetUrl,
      contentType: this.assetContentType(e),
      item: e,
      delivery: "progressive",
      hls: !1,
      preview: !1,
    };
  }
  async resolveBroadcastRadioAsset(e, t) {
    if (!eb.enabled) throw new g("mk-152", g.Reason.CONTENT_UNSUPPORTED, { data: e });
    const r = await Uo(e, { mediaAPI: this.services.mediaAPI });
    if (r === void 0 || r.length === 0)
      throw new g("mk-156", g.Reason.CONTENT_UNAVAILABLE, {
        description: "No Broadcast RadioStation assets returned from the server",
        data: e,
      });
    return {
      id: e.catalogId ?? e.id,
      encrypted: !1,
      assetURL: r[0].url,
      contentType: this.assetContentType(e),
      item: e,
      delivery: "icy",
      hls: !1,
      preview: !1,
    };
  }
  async resolveHLSOffersAsset(e, t) {
    await this.assertSubscription(e, t);
    try {
      return {
        id: e.catalogId ?? e.id,
        encrypted: !0,
        assetURL: e.attributes?.assetUrl ?? e.attributes.offers?.[0].hlsUrl,
        contentType: this.assetContentType(e),
        keySystem: this.keySystem,
        keyServerURL: this.staticKeyURLs["hls-key-server-url"],
        keyCertURL:
          this.keySystem === "fairplay"
            ? this.staticKeyURLs["hls-key-cert-url"]
            : this.staticKeyURLs["widevine-cert-url"],
        item: e,
        delivery: "hls",
        hls: !0,
        preview: !1,
      };
    } catch (r) {
      throw new g("mk-144", g.Reason.CONTENT_UNSUPPORTED, {
        description: "Unable to play HLS offers",
        data: e,
        origin: r,
      });
    }
  }
  async resolveRadioStationAsset(e, t) {
    const r = await Uo(e, { mediaAPI: this.services.mediaAPI });
    if (r === void 0 || r.length === 0)
      throw new g("mk-148", g.Reason.CONTENT_UNAVAILABLE, {
        description: "No RadioStation assets returned from the server",
        data: e,
      });
    const s = r[0];
    return (
      r.length > 1 && J.warn("Multiple RadioStation assets returned from the server"),
      {
        id: e.catalogId ?? e.id,
        encrypted: !0,
        assetURL: s.url,
        contentType: this.assetContentType(e),
        keySystem: this.keySystem,
        keyServerURL: s.keyServerUrl,
        keyCertURL: this.keySystem === "fairplay" ? s.fairPlayKeyCertificateUrl : s.widevineKeyCertificateUrl,
        item: e,
        delivery: "hls",
        hls: !0,
        preview: !1,
      }
    );
  }
  async resolveCatalogSongAsset(e, t) {
    await this.assertSubscription(e, t);
    const r = this.keySystem,
      s = await this.services.mediaAPI.get("/v1/play/assets", {
        params: {
          ...e.playParams,
          includeLicenseUrls: !0,
          hlsEncryption: t?.hlsEncryption ?? "CBC",
          ...(t?.hlsEnhancedAsset ? { hlsProfile: "enhancedHls" } : {}),
        },
      }),
      { results: n } = await s.json();
    if (n?.assets === void 0 || n.assets.length === 0) throw new g("mk-169", g.Reason.CONTENT_UNAVAILABLE, { data: e });
    const a = n.assets[0];
    return (
      n.assets.length > 1 && J.warn("Multiple MediaAPI assets returned from the server"),
      {
        id: e.catalogId ?? e.id,
        encrypted: !0,
        assetURL: a.url,
        contentType: this.assetContentType(e),
        keySystem: r,
        keyServerURL: a.keyServerUrl,
        keyCertURL: r === "fairplay" ? a.fairPlayKeyCertificateUrl : a.widevineKeyCertificateUrl,
        item: e,
        delivery: "hls",
        hls: !0,
        preview: !1,
      }
    );
  }
  async resolveMZPlayWebAsset(e, t) {
    await this.assertSubscription(e, t);
    const r = this.keySystem,
      s = await Yv(e, {
        bitrate: t?.bitrate,
        request: this.services.request,
        endpoint: this.mzplayAssetEndpoint,
        encoding: r === "fairplay" ? "cbcp" : "ctrp",
        developerToken: this.services.mediaAPI.developerToken,
        mediaUserToken: this.services.mediaAPI.mediaUserToken,
      });
    if (!s.encrypted)
      return {
        id: e.catalogId ?? e.id,
        encrypted: !1,
        assetURL: s.url,
        contentType: this.assetContentType(e),
        item: e,
        delivery: "progressive",
        hls: !1,
        preview: !1,
      };
    const n = s.playlist || "encoding" in s ? "hls" : "progressive";
    return {
      id: e.catalogId ?? e.id,
      encrypted: !0,
      assetURL: s.url,
      contentType: this.assetContentType(e),
      keySystem: r,
      keyServerURL: s.keyServerURL,
      keyCertURL: r === "fairplay" ? s.fairplayCertURL : s.widevineCertURL,
      item: e,
      delivery: n,
      hls: n === "hls",
      preview: !1,
    };
  }
  async resolveUTSAsset(e, t) {
    if (!e.isUTS)
      throw new g("mk-162", g.Reason.INVALID_ARGUMENTS, { description: "MediaItem is not an UTS item", data: e });
    const r = e.attributes?.assets;
    if (r === void 0)
      throw new g("mk-163", g.Reason.INVALID_ARGUMENTS, { description: "Missing UTS asset data", data: e });
    const s = _e.register("mk-hlsjs-interstitial-playback"),
      n = { webbrowser: !0 };
    s.enabled && (n.supportsInterstitials = !0);
    const a = _r(e.assetURL, n);
    e.assetURL = a;
    const o = await Zv(e, {
      manifestManager: this.services.manifest,
      playOptions: { bingeWatching: t?.bingeWatching },
    });
    return {
      id: e.id,
      encrypted: !0,
      assetURL: a,
      contentType: this.assetContentType(e),
      keySystem: this.keySystem,
      keyServerURL: r.fpsKeyServerUrl,
      keyCertURL: this.keySystem === "fairplay" ? r.fpsCertificateUrl : r.wideVineCertificateUrl,
      item: e,
      meta: o,
      delivery: "hls",
      hls: !0,
      preview: !1,
    };
  }
  async isMediaAPIContentType(e, t) {
    return _c.includes(e.type);
  }
  assetContentType(e) {
    return Hu(e) ? "audio" : "video";
  }
  async isPlayable(e, t) {
    return e.isUTS
      ? !0
      : (await this.isMediaAPIContentType(e, t))
        ? e.isLiveRadioStation || e.isRadioEpisode || e.hasOffersHlsUrl
          ? !0
          : ["song", "musicVideo", "musicMovie"].includes(e.type)
            ? e.playParams !== void 0
            : !$(e.rawAssetUrl ?? "") || !$(e.previewURL ?? "")
        : !1;
  }
  async shouldPlayPreview(e, t) {
    return e.isLiveRadioStation ||
      e.isRadioEpisode ||
      e.isLiveVideoStation ||
      e.rawAssetUrl ||
      (e.isPodcastEpisode && zi(e) && e.hasOffersHlsUrl) ||
      e.isUTS ||
      e.isLibraryItem
      ? !1
      : t?.previewOnly === !0 || !(await this.isPlayable(e))
        ? !0
        : $(e.rawAssetUrl ?? "")
          ? t?.subscription !== !0
            ? !0
            : e.playParams?.hasDrm === !1
              ? !1
              : !this.services.runtime.isDRMAvailable && !$(e.previewURL ?? "")
          : !1;
  }
  async assertSubscription(e, t) {
    if (this.services.mediaAPI.mediaUserToken === void 0)
      throw new g("mk-159", g.Reason.AUTHORIZATION_ERROR, { description: "Authorization required", data: e });
    if (!(e.isPodcastEpisode && zi(e) && e.hasOffersHlsUrl) && t?.subscription !== !0)
      throw new g("mk-149", g.Reason.SUBSCRIPTION_ERROR, { description: "Subscription required for content", data: e });
  }
}
const rb = _.createChild("license");
class jn {
  isConfigured = !0;
  logger = rb;
  services;
  _developerToken;
  get developerToken() {
    return this._developerToken;
  }
  _mediaUserToken;
  get mediaUserToken() {
    return this._mediaUserToken;
  }
  get keySystem() {
    return this.services.runtime.preferredKeySystem;
  }
  get keySystemId() {
    return G[this.keySystem];
  }
  constructor(e) {
    ((this.services = e.services),
      (this._developerToken = e.developerToken),
      (this._mediaUserToken = e.mediaUserToken));
  }
  configure(e) {
    (e.developerToken !== void 0 && (this._developerToken = e.developerToken),
      (this._mediaUserToken = e.mediaUserToken));
  }
  createChallengeHeaders(e, t, r) {
    const s = {
      Authorization: `Bearer ${this.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(this.mediaUserToken ? { "X-Apple-Music-User-Token": this.mediaUserToken } : {}),
    };
    return (this.services.runtime.preferredKeySystem === "widevine" && (s["X-Apple-Renewal"] = !0), new Headers(s));
  }
  assertDeveloperToken() {
    if (this.developerToken === void 0 || $(this.developerToken))
      throw new g("mk-175", g.Reason.CONTENT_RESTRICTED, {
        description: "No developer token configured for resolving playback licenses",
      });
  }
  assertUserToken() {
    if (this.mediaUserToken === void 0 || $(this.mediaUserToken))
      throw new g("mk-176", g.Reason.CONTENT_RESTRICTED, {
        description: "No user token configured for resolving playback licenses",
      });
  }
  async makeServerRequest(e, t, r) {
    let s;
    try {
      (this.logger.debug(`Making license request to ${e} with URI ${t}`),
        (s = await this.services.request.fetch(new Request(e, r))));
    } catch (n) {
      throw (
        this.logger.error(`Failed to make license request to ${e} with URI ${t}`),
        new g("mk-174", g.Reason.MEDIA_LICENSE, { data: { url: e, keyuri: t }, origin: n })
      );
    }
    if (!s.ok)
      try {
        this.handleServerError(await s.json());
      } catch {
        this.handleServerError();
      }
    return await s.json();
  }
  handleServerError(e) {
    const t = e?.status ?? e?.errorCode ?? 0,
      r = Yo(t) || g.Reason.MEDIA_LICENSE,
      s = e?.dialog,
      n = e?.message ?? e?.customerMessage ?? e?.errorMessage ?? r;
    throw s !== void 0
      ? new en({ ...e, status: t, message: n, dialog: s })
      : new g("mk-183", r, { description: n, data: { status: t, message: n, context: e } });
  }
}
class sb extends jn {
  lastKeyId = 0;
  async isCompatible(e, t) {
    return (
      (e.keyURLs?.["hls-key-server-url"] ?? "").endsWith("/podcast/hls/license/streaming/start") || e.hasOffersHlsUrl
    );
  }
  async requestLicense(e, t, r) {
    (this.assertDeveloperToken(), this.assertUserToken());
    const s = e.keyURLs?.["hls-key-server-url"],
      n = await this.makeServerRequest(s, t.keyuri, {
        method: "POST",
        headers: this.createChallengeHeaders(e, t, r ?? {}),
        body: JSON.stringify(this.createChallengeBody(e, t, r ?? void 0)),
      }),
      a = n["license-responses"]?.[0];
    if (a === void 0)
      throw new g("mk-179", g.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: n },
      });
    if (a.status !== 0)
      throw new g("mk-184", g.Reason.SERVER_ERROR, {
        description: `License server responded with code '${a.status ?? "unknown"}'`,
        data: { body: n },
      });
    return a;
  }
  async revokeLicense(e, t, r) {}
  createChallengeBody(e, t, r) {
    const s = (this.lastKeyId += 1),
      n = typeof t.licenseChallenge == "string" ? t.licenseChallenge : Qe(t.licenseChallenge);
    return {
      version: 1,
      "license-requests": [
        { id: s, "adam-id": e.catalogId ?? e.id, challenge: n, uri: t.keyuri, "key-system": this.keySystemId },
      ],
    };
  }
}
class nb extends jn {
  lastKeyId = 0;
  async isCompatible(e, t) {
    const r = e.keyURLs?.["hls-key-server-url"] ?? "";
    return (
      r.endsWith("/WebObjects/MZPlay.woa/wa/fpsRequest") ||
      r.endsWith("/WebObjects/MZPlayLocal.woa/wa/fpsRequest") ||
      r.endsWith("/WebObjects/MZPlay.woa/hls/anonymous/fpsRequest") ||
      r.endsWith("/v1/hls/streaming-key-delivery") ||
      r.endsWith("/v1/hls/anonymous/streaming-key-delivery")
    );
  }
  async requestLicense(e, t, r) {
    (this.assertDeveloperToken(), this.isAnonymousPlayback(e) || this.assertUserToken());
    const s = e.keyURLs?.["hls-key-server-url"],
      n = await this.makeServerRequest(s, t.keyuri, {
        method: "POST",
        headers: this.createChallengeHeaders(e, t, r),
        body: JSON.stringify(this.createChallengeBody(e, t, { ...r, "lease-action": "start" })),
      }),
      a = n["streaming-response"]?.["streaming-keys"][0];
    if (a === void 0)
      throw new g("mk-180", g.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: n },
      });
    if (a.status !== 0)
      throw new en({ status: a.status, dialog: { message: "Error acquiring license" } }, g.Reason.MEDIA_LICENSE);
    return a;
  }
  async revokeLicense(e, t, r) {
    (this.assertDeveloperToken(), this.isAnonymousPlayback(e) || this.assertUserToken());
    const s = e.keyURLs?.["hls-key-server-url"];
    try {
      await this.makeServerRequest(s, t.keyuri, {
        method: "POST",
        headers: this.createChallengeHeaders(e, t, r),
        body: JSON.stringify(this.createChallengeBody(e, t, { ...r, "lease-action": "stop" })),
      });
    } catch (n) {
      this.logger.warn("Revoke license request failed", n);
    }
  }
  createChallengeBody(e, t, r) {
    const s = (this.lastKeyId += 1),
      n = typeof t.licenseChallenge == "string" ? t.licenseChallenge : Qe(t.licenseChallenge);
    return {
      "streaming-request": {
        version: 1,
        "streaming-keys": [
          {
            "lease-action": r["lease-action"],
            id: s,
            challenge: n,
            uri: t.keyuri,
            "key-system": this.keySystemId,
            stkn: r.stkn,
            ...e.keyServerQueryParameters,
          },
        ],
      },
    };
  }
  isAnonymousPlayback(e) {
    const t = e.keyURLs?.["hls-key-server-url"] ?? "";
    return t === "" || t.includes("/hls/anonymous");
  }
}
class ab extends jn {
  async isCompatible(e, t) {
    const r = e.keyURLs?.["hls-key-server-url"] ?? "";
    return (
      r.includes("/WebObjects/MZPlay.woa/wa/acquireWebPlaybackLicense") ||
      r.includes("/WebObjects/MZPlay.woa/web/radio/versions/1/license") ||
      r.includes("/v1/radio/streaming-key-delivery")
    );
  }
  async requestLicense(e, t, r) {
    (this.assertDeveloperToken(), this.assertUserToken());
    const s = { userInitiated: r?.userInitiated ?? !1 },
      n = e.keyURLs["hls-key-server-url"];
    return await this.makeServerRequest(n, t.keyuri, {
      method: "POST",
      headers: this.createChallengeHeaders(e, t, s),
      body: JSON.stringify(this.createChallengeBody(e, t, s)),
    });
  }
  async revokeLicense(e, t, r) {}
  createChallengeBody(e, t, r) {
    const s = typeof t.licenseChallenge == "string" ? t.licenseChallenge : Qe(t.licenseChallenge);
    return {
      adamId: e.catalogId ?? "-1",
      isLibrary: e.isLibrary,
      "user-initiated": r.userInitiated,
      challenge: s,
      uri: t.keyuri,
      "key-system": this.keySystemId,
    };
  }
}
class ob {
  isConfigured = !0;
  children;
  constructor(e) {
    this.children = new Set(e.managers ?? []);
  }
  configure(e) {
    for (const t of this.children.values()) t.configure(e);
  }
  async isCompatible(...e) {
    return (await this.findManager(...e)) !== void 0;
  }
  async requestLicense(e, t, r) {
    const s = await this.findManager(e, t, r);
    if (s === void 0)
      throw new g("mk-177", g.Reason.MEDIA_LICENSE, { description: `Unable to request license for ${e}` });
    return s.requestLicense(e, t, r);
  }
  async revokeLicense(e, t, r) {
    const s = await this.findManager(e, t, r);
    if (s === void 0)
      throw new g("mk-178", g.Reason.MEDIA_LICENSE, { description: `Unable to revoke license for ${e}` });
    return s.revokeLicense(e, t, r);
  }
  async findManager(e, t, r) {
    for (const s of this.children) if (await s.isCompatible(e, t, r)) return s;
  }
}
function cb(i) {
  const e = i.configurations,
    { runtime: t, request: r, dispatcher: s, store: n } = i.services,
    a = new Hv({ ...e.mediaAPIClient, services: { request: r } }),
    o = new Gv({ ...e.mediaAPIAccess, services: { mediaAPI: a } }),
    c = new Wv({ ...e.manifestManager, services: { request: r } }),
    l = { streaming: nb, batch: sb, web: ab },
    h = (e.licenseManager.include ?? ["streaming", "batch", "web"]).map(function (Qt) {
      return new l[Qt]({
        services: { runtime: t, request: r },
        developerToken: e.licenseManager.developerToken,
        mediaUserToken: e.licenseManager.mediaUserToken,
      });
    }),
    m = new ob({
      services: { runtime: t, request: r },
      developerToken: e.licenseManager.developerToken,
      mediaUserToken: e.licenseManager.mediaUserToken,
      managers: h,
    }),
    y = new ib({ ...e.assetResolver, services: { runtime: t, request: r, mediaAPI: a, manifest: c } }),
    k = new nv(s, e.bitrateCalculator?.bitrate),
    q = new cv({ services: { runtime: t } }),
    ae = new vv({ ...e.itemLoader, services: { mediaAPI: a } }),
    X = new Dr({ services: { dispatcher: s }, trackers: e.playActivity?.trackers ?? [] }),
    we = new Mr({
      services: {
        runtime: t,
        request: r,
        dispatcher: s,
        store: n,
        player: q,
        manifest: c,
        assetResolver: y,
        bitrateCalculator: k,
      },
      playerOptions: lb({
        services: {
          runtime: t,
          request: r,
          dispatcher: s,
          manifest: c,
          license: m,
          bitrateCalculator: k,
          playActivity: X,
          store: n,
        },
        ...e.mediaItemPlayback,
      }),
    });
  return {
    runtime: t,
    request: r,
    dispatcher: s,
    mediaAPIClient: a,
    mediaAPIAccess: o,
    playActivity: X,
    itemLoader: ae,
    manifest: c,
    license: m,
    assetResolver: y,
    player: q,
    mediaItemPlayback: we,
    bitrateCalculator: k,
  };
}
function xo(i, e) {
  return (
    e.storefrontId !== void 0 &&
      (i.mediaAPIClient.configure({ storefrontId: e.storefrontId }),
      i.itemLoader.configure({ storefrontId: e.storefrontId })),
    e.mediaUserToken !== void 0 &&
      (i.mediaAPIClient.configure({ mediaUserToken: e.mediaUserToken }),
      i.manifest.configure({ mediaUserToken: e.mediaUserToken }),
      i.license.configure({ mediaUserToken: e.mediaUserToken })),
    i
  );
}
function lb(i) {
  const { services: e } = i;
  return {
    tokens: i.tokens,
    bag: i.bag,
    context: i.context ?? {},
    autoplayEnabled: i.autoplayEnabled,
    privateEnabled: i.privateEnabled,
    siriInitiated: i.siriInitiated,
    services: {
      runtime: e.runtime,
      request: e.request,
      dispatcher: e.dispatcher,
      manifest: e.manifest,
      license: e.license,
      bitrateCalculator: e.bitrateCalculator,
    },
    playbackServices: {
      getRTCStreamingTracker: () => e.playActivity.getTrackerByType(kl),
      hasMusicSubscription: async function () {
        return e.store?.storekit?.hasMusicSubscription() ?? !1;
      },
    },
  };
}
var ub = Object.defineProperty,
  db = Object.getOwnPropertyDescriptor,
  Gt = (i, e, t, r) => {
    for (var s = db(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && ub(e, t, s), s);
  };
const hb = [
    p.Reason.AGE_VERIFICATION_REQUIRED,
    p.Reason.CONTENT_EQUIVALENT,
    p.Reason.CONTENT_RESTRICTED,
    p.Reason.CONTENT_UNAVAILABLE,
    p.Reason.CONTENT_UNSUPPORTED,
    p.Reason.SERVER_ERROR,
    p.Reason.SUBSCRIPTION_ERROR,
    p.Reason.UNSUPPORTED_ERROR,
    p.Reason.USER_INTERACTION_REQUIRED,
  ],
  pb = Er.register("mk-bag-features-overrides");
class It {
  app;
  capabilities;
  context = {};
  _playbackMode = Ue.MIXED_CONTENT;
  _autoplayEnabled = !1;
  id;
  prefix;
  privateEnabled = !1;
  siriInitiated = !1;
  sourceType = ws.MUSICKIT;
  get version() {
    return nl();
  }
  playbackActions;
  guid;
  _bag = H;
  playbackControllers = {};
  _playbackController;
  get playbackController() {
    return this._playbackController;
  }
  _queue;
  services;
  _whenConfigured = void 0;
  constructor(e) {
    ((this.id = ki()), mm(e.app));
    const { developerToken: t } = e;
    if (typeof t != "string" || t.trim() === "")
      throw new p(p.Reason.CONFIGURATION_ERROR, "Missing or empty developer token");
    Object.assign(H.features, Pd(e.features));
    const r = pb.get();
    (r && (M.warn("Overriding bag.features with", r), (H.features = { ...H.features, ...r })),
      Object.assign(H.autoplay, e.autoplay),
      Object.assign(H.app, e.app),
      Object.assign(H.urls, e.urls),
      M.debug("Instance Configuration: ", H));
    const s = ["playbackActions", "guid", "playbackMode", "privateEnabled", "siriInitiated", "sourceType"];
    for (const l of s) l in e && (Ke(this, `_${l}`) ? (this[`_${l}`] = e[l]) : (this[l] = e[l]));
    ("prefix" in e && /^(?:web|preview)$/.test(e.prefix || "") && (this.prefix = H.prefix = e.prefix),
      this.configureLogger(e));
    const n = Zm(t, e);
    let a = "amp-api.music.apple.com",
      o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/acquireWebPlaybackLicense",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      };
    this.realm === te.PODCAST &&
      ((a = "amp-api.podcasts.apple.com"),
      (o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      }));
    let c = !1;
    if (
      (this.realm === te.TV && (c = !0),
      (this.services = cb({
        services: { ...e.services, store: n },
        configurations: {
          mediaAPIClient: {
            host: a,
            developerToken: t,
            mediaUserToken: n.musicUserToken,
            storefrontId: this.storefrontId,
          },
          itemLoader: { storefrontId: n?.storefrontId, fetchContainerPages: !!H.features["fetch-container-pages"] },
          manifestManager: { developerToken: t, mediaUserToken: n.musicUserToken, personalizedManifests: c },
          licenseManager: { developerToken: t, mediaUserToken: n.musicUserToken },
          assetResolver: {
            staticKeyURLs: o,
            mzplayAssetEndpoint: `https://${Si("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
          },
          bitrateCalculator: { bitrate: e.bitrate },
          playActivity: { trackers: e.playActivityAPI },
          mediaItemPlayback: {
            bag: H,
            tokens: w,
            context: this.context,
            autoplayEnabled: this.autoplayEnabled,
            privateEnabled: this.privateEnabled,
            siriInitiated: this.siriInitiated,
            playbackMode: this.playbackMode,
          },
        },
      })),
      (this.capabilities = new zg(this.services.dispatcher)),
      this._initializeInternalEventHandling(),
      M.info(`MusicKit JS Version: ${this.version}`),
      M.info("InstanceId", this.id),
      M.debug("Link Parameters", e.linkParameters),
      H.app && M.debug("App", H.app),
      e.userToken)
    ) {
      const { userToken: l } = e;
      typeof l == "function" ? (w.dynamicMusicUserToken = l) : (this.musicUserToken = l);
    }
  }
  setOptions(e) {}
  get developerToken() {
    return w.developerToken;
  }
  get api() {
    return this.services.mediaAPIAccess;
  }
  get audioTracks() {
    return this._mediaItemPlayback.audioTracks;
  }
  get authorizationStatus() {
    return w.authorizationStatus;
  }
  get bitrate() {
    return this.services.bitrateCalculator.bitrate;
  }
  set bitrate(e) {
    this.services.bitrateCalculator.bitrate = e;
  }
  get browserSupportsPictureInPicture() {
    return nc();
  }
  get browserSupportsVideoDrm() {
    return this.services.runtime.isDRMAvailable;
  }
  get cid() {
    return this.realm === te.TV || this.sourceType !== ws.MUSICKIT ? w.cid : !1;
  }
  get continuous() {
    return this._playbackController?.continuous ?? !1;
  }
  set continuous(e) {
    this.getPlaybackController().continuous = e;
  }
  get autoplayEnabled() {
    return this._autoplayEnabled;
  }
  set autoplayEnabled(e) {
    (this.realm !== te.MUSIC && (e = !1),
      e !== this.autoplayEnabled &&
        ((this._autoplayEnabled = e),
        this.services.dispatcher.publish(E.autoplayEnabledDidChange, this.autoplayEnabled)));
  }
  get currentAudioTrack() {
    return this._mediaItemPlayback.currentAudioTrack;
  }
  set currentAudioTrack(e) {
    this._mediaItemPlayback.currentAudioTrack = e;
  }
  get currentPlaybackDuration() {
    return this._mediaItemPlayback.currentPlaybackDuration;
  }
  get currentPlaybackProgress() {
    return this._mediaItemPlayback.currentPlaybackProgress;
  }
  get currentPlaybackTime() {
    return this._mediaItemPlayback.currentPlaybackTime;
  }
  get currentPlayingDate() {
    return this._mediaItemPlayback.currentPlayingDate;
  }
  get isPlayingAtLiveEdge() {
    return this._mediaItemPlayback.isPlayingAtLiveEdge;
  }
  get seekableTimeRanges() {
    return this._mediaItemPlayback.seekableTimeRanges;
  }
  get currentPlaybackTimeRemaining() {
    return this._mediaItemPlayback.currentPlaybackTimeRemaining;
  }
  get currentTextTrack() {
    return this._mediaItemPlayback.currentTextTrack;
  }
  set currentTextTrack(e) {
    this._mediaItemPlayback.currentTextTrack = e;
  }
  get isAuthorized() {
    return w.isAuthorized;
  }
  get isPlaying() {
    return this._playbackController?.isPlaying ?? !1;
  }
  get isRestricted() {
    return w.isRestricted;
  }
  get isU13() {
    return w.isU13;
  }
  get metricsClientId() {
    return w.metricsClientId;
  }
  set metricsClientId(e) {
    w.metricsClientId = e;
  }
  get musicUserToken() {
    return w.musicUserToken;
  }
  set musicUserToken(e) {
    (e && w.musicUserToken === e) || (w.musicUserToken = e);
  }
  updateUserTokenFromStorage(e) {
    return w.updateUserTokenFromStorage(e);
  }
  whenReflectionComplete() {
    return w.storekit.whenReflectionComplete();
  }
  get needsGDPR() {
    return w.needsGDPR;
  }
  get nowPlayingItem() {
    return this._mediaItemPlayback.nowPlayingItem;
  }
  get currentTimedMetadata() {
    return this._mediaItemPlayback.currentTimedMetadata;
  }
  get nowPlayingItemIndex() {
    return this._playbackController?.nowPlayingItemIndex ?? -1;
  }
  get playbackMode() {
    return this._playbackMode;
  }
  set playbackMode(e) {
    if (Object.values(Ue).indexOf(e) === -1) return;
    const t = e === Ue.PREVIEW_ONLY,
      r = this.services.mediaItemPlayback;
    (r && (r.previewOnly = t),
      this._playbackMode !== e &&
        ((this._playbackMode = e), this._playbackController !== void 0 && (this._playbackController.playbackMode = e)));
  }
  get playbackRate() {
    return this._mediaItemPlayback.playbackRate;
  }
  set playbackRate(e) {
    this._mediaItemPlayback.playbackRate = e;
  }
  get defaultPlaybackRate() {
    return this._mediaItemPlayback.defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    this._mediaItemPlayback.defaultPlaybackRate = e;
  }
  get playbackState() {
    return this._mediaItemPlayback.playbackState;
  }
  get playbackTargetAvailable() {
    return this._mediaItemPlayback.playbackTargetAvailable;
  }
  get playbackTargetIsWireless() {
    return this._mediaItemPlayback.playbackTargetIsWireless;
  }
  get previewOnly() {
    return this.playbackMode === Ue.PREVIEW_ONLY;
  }
  set previewOnly(e) {
    this.playbackMode = e ? Ue.PREVIEW_ONLY : Ue.MIXED_CONTENT;
  }
  get queue() {
    return this._playbackController?.queue;
  }
  get queueIsEmpty() {
    return this._playbackController?.queue?.isEmpty ?? !0;
  }
  get realm() {
    return w.realm;
  }
  get repeatMode() {
    return this._playbackController?.repeatMode ?? ke.none;
  }
  set repeatMode(e) {
    this.getPlaybackController().repeatMode = e;
  }
  set requestUserToken(e) {
    w.requestUserToken = e;
  }
  get restrictedEnabled() {
    return w.restrictedEnabled;
  }
  set restrictedEnabled(e) {
    w.restrictedEnabled = e;
  }
  get supportsPreviewImages() {
    return this._mediaItemPlayback.supportsPreviewImages;
  }
  get seekSeconds() {
    return this._playbackController?.seekSeconds;
  }
  set shuffle(e) {
    this.getPlaybackController().shuffle = e;
  }
  get shuffleMode() {
    return this._playbackController?.shuffleMode ?? Mn.off;
  }
  set shuffleMode(e) {
    this.getPlaybackController().shuffleMode = e;
  }
  get storefrontCountryCode() {
    return w.storefrontCountryCode;
  }
  get subscribeURL() {
    return w.subscribeURL;
  }
  get subscribeFamilyURL() {
    return w.subscribeFamilyURL;
  }
  get subscribeIndividualURL() {
    return w.subscribeIndividualURL;
  }
  get subscribeStudentURL() {
    return w.subscribeStudentURL;
  }
  get textTracks() {
    return this._mediaItemPlayback.textTracks;
  }
  get videoContainerElement() {
    return this.context.videoContainerElement;
  }
  set videoContainerElement(e) {
    this.context.videoContainerElement = e;
  }
  get videoTracks() {
    return this._mediaItemPlayback.videoTracks;
  }
  get currentVideoTrack() {
    return this._mediaItemPlayback.currentVideoTrack;
  }
  set currentVideoTrack(e) {
    this._mediaItemPlayback.currentVideoTrack = e;
  }
  get volume() {
    return this._mediaItemPlayback.volume;
  }
  set volume(e) {
    this._mediaItemPlayback.volume = e;
  }
  get storefrontId() {
    return w.storefrontId;
  }
  set storefrontId(e) {
    w.storefrontId = e;
  }
  get _mediaItemPlayback() {
    return this.services.mediaItemPlayback;
  }
  getPlaybackController() {
    if ((M.trace("MKInstance.getPlaybackController()", this._playbackController), this._playbackController === void 0))
      throw new p(p.Reason.INTERNAL_ERROR, "No PlaybackController active");
    return this._playbackController;
  }
  async setPlaybackController(e) {
    return (
      M.trace("MKInstance.setPlaybackController()", e),
      this._playbackController === e ||
        (this._playbackController !== void 0 && (await this._playbackController.deactivate()),
        (e.autoplayEnabled = this._autoplayEnabled),
        await e.activate(),
        (this.capabilities.controller = e),
        this.capabilities.updateChecker(e.hasCapabilities),
        (this._playbackController = e)),
      e
    );
  }
  addEventListener(e, t, r = {}) {
    return rv(this.services.dispatcher, e, t, r);
  }
  async authorize() {
    return (this.deferPlayback(), w.authorize());
  }
  canAuthorize() {
    return this.services.runtime.isDRMAvailable && !this.isAuthorized;
  }
  canUnauthorize() {
    return this.services.runtime.isDRMAvailable && this.isAuthorized;
  }
  async changeToMediaAtIndex(e) {
    this._isPlaybackSupported() &&
      (await this.validateAuthorization(),
      this.signalChangeItemIntent(),
      await this.getPlaybackController().changeToMediaAtIndex(e));
  }
  async changeToMediaItem(e) {
    (M.debug("instance.changeToMediaItem", e),
      this._isPlaybackSupported() &&
        (await this.validateAuthorization(),
        this.signalChangeItemIntent(),
        await this.getPlaybackController().changeToMediaItem(e)));
  }
  async changeUserStorefront(e) {
    this.storefrontId = e;
  }
  async cleanup() {
    (this.services.mediaItemPlayback.destroy(), this.signalIntent({ endReasonType: P.EXITED_APPLICATION }));
    const e = Object.keys(this.playbackControllers).map((t) => this.playbackControllers[t].destroy());
    try {
      await Promise.all(e);
    } catch (t) {
      M.error("Error cleaning up controller", t);
    }
    this.services.dispatcher.unsubscribeAll();
  }
  async configure(e) {
    await this.setPlaybackController(this.getPlaybackControllerByType(st.serial));
    const { promise: t, resolve: r } = mn();
    ((this._whenConfigured = t),
      await w.storekit.whenAuthCompleted,
      e?.storefrontId !== void 0 && (this.storefrontId = e.storefrontId),
      e?.utsAPIClient !== void 0 && (this.services.utsAPIClient = e.utsAPIClient),
      await this.configurePlayActivity(),
      this._initializeExternalEventPublishing(),
      r());
  }
  deferPlayback() {
    (M.debug("deferPlayback", this._playbackController), Yp());
  }
  async me() {
    try {
      return await w.storekit.me();
    } catch {
      return Promise.reject(new p(p.Reason.AUTHORIZATION_ERROR, "Unauthorized"));
    }
  }
  musicSubscriptionOffers() {
    return w.storekit.musicSubscriptionOffers(this.storefrontId);
  }
  musicSubcriptionOffers() {
    return (
      ac("musicSubcriptionOffers", {
        message: "musicSubcriptionOffers has been deprecated, use musicSubscriptionOffers instead",
      }),
      this.musicSubscriptionOffers()
    );
  }
  hasMusicSubscription() {
    return ig(w.storekit);
  }
  mute() {
    return this._mediaItemPlayback.mute();
  }
  async pause(e) {
    if (this._isPlaybackSupported()) {
      try {
        (this.signalIntent({ endReasonType: P.PLAYBACK_MANUALLY_PAUSED }), await this.getPlaybackController().pause(e));
      } catch (t) {
        this._handlePlaybackError(t);
      }
      return Promise.resolve();
    }
  }
  async play() {
    if ((M.debug("instance.play()"), !!this._isPlaybackSupported())) {
      await this.validateAuthorization();
      try {
        await this.getPlaybackController().play();
      } catch (e) {
        this._handlePlaybackError(e);
      }
      return Promise.resolve();
    }
  }
  async playMediaItem(e, t) {
    if (
      (M.trace("MKInstance.playMediaItem()", e, t),
      t?.bingeWatching || this.deferPlayback(),
      (t = { ...t }),
      e?.playEvent && !Ke(t, "startTime"))
    ) {
      const { playEvent: r } = e;
      !r.isDone && r.playCursorInSeconds !== void 0 && (t.startTime = r.playCursorInSeconds);
    }
    this.services.dispatcher.publish(E.playInitiated, { item: e, timestamp: t.meta?.initiatedTimestamp ?? Date.now() });
    try {
      t && this._mediaItemPlayback.playOptions.set(e.id, t);
      const r = await this.getPlaybackController().playSingleMediaItem(e, t);
      return (this.services.dispatcher.publish(E.capabilitiesChanged), r);
    } catch (r) {
      (M.error("mk:playMediaItem error", r), this._handlePlaybackError(r));
    }
  }
  removeEventListener(e, t) {
    _l(this.services.dispatcher, e, t);
  }
  async shouldDisplayPrivacyLink(e) {
    return w.shouldDisplayPrivacyLink(e);
  }
  exitFullscreen() {
    return this._mediaItemPlayback.exitFullscreen();
  }
  requestFullscreen(e) {
    return this._mediaItemPlayback.requestFullscreen(e);
  }
  async loadPreviewImage(e) {
    return this._mediaItemPlayback.loadPreviewImage(e);
  }
  getNewSeeker() {
    return this.getPlaybackController().getNewSeeker();
  }
  async seekToTime(e, t = je.Manual) {
    if (this._isPlaybackSupported()) {
      await this.validateAuthorization();
      try {
        await this.getPlaybackController().seekToTime(e, t);
      } catch (r) {
        this._handlePlaybackError(r);
      }
      return Promise.resolve();
    }
  }
  async setPresentationMode(e) {
    return this._mediaItemPlayback.setPresentationMode(e);
  }
  async skipToNextItem() {
    if (this._isPlaybackSupported()) {
      (await this.validateAuthorization(),
        this.signalIntent({ endReasonType: P.TRACK_SKIPPED_FORWARDS, direction: P.TRACK_SKIPPED_FORWARDS }));
      try {
        await this.getPlaybackController().skipToNextItem();
      } catch (e) {
        this._handlePlaybackError(e);
      }
    }
  }
  async skipToPreviousItem() {
    if (this._isPlaybackSupported()) {
      (await this.validateAuthorization(),
        this.signalIntent({ endReasonType: P.TRACK_SKIPPED_BACKWARDS, direction: P.TRACK_SKIPPED_BACKWARDS }));
      try {
        await this.getPlaybackController().skipToPreviousItem();
      } catch (e) {
        this._handlePlaybackError(e);
      }
    }
  }
  async seekForward(e) {
    if (this._isPlaybackSupported()) {
      await this.validateAuthorization();
      try {
        (this.signalIntent({ endReasonType: P.TRACK_SKIPPED_FORWARDS, direction: P.TRACK_SKIPPED_FORWARDS }),
          await this.getPlaybackController().seekForward(e));
      } catch (t) {
        this._handlePlaybackError(t);
      }
    }
  }
  async seekBackward(e) {
    if (this._isPlaybackSupported()) {
      await this.validateAuthorization();
      try {
        await this.getPlaybackController().seekBackward(e);
      } catch (t) {
        this._handlePlaybackError(t);
      }
    }
  }
  showPlaybackTargetPicker() {
    this.getPlaybackController().showPlaybackTargetPicker();
  }
  async stop(e) {
    if (this._isPlaybackSupported()) {
      this.signalIntent({ endReasonType: e?.endReasonType, userInitiated: e?.userInitiated ?? !0 });
      try {
        await this.getPlaybackController().stop(e);
      } catch (t) {
        this._handlePlaybackError(t);
      }
    }
  }
  resetSubscribeViewEligibility() {
    w.storekit.resetSubscribeViewEligibility();
  }
  async unauthorize() {
    return w.unauthorize();
  }
  unmute() {
    return this._mediaItemPlayback.unmute();
  }
  getPlaybackControllerByType(e) {
    let t = this.playbackControllers[e];
    if (t !== void 0) return t;
    const { services: r } = this,
      s = {
        services: {
          runtime: r.runtime,
          request: r.request,
          dispatcher: r.dispatcher,
          store: w,
          itemLoader: r.itemLoader,
          manifest: r.manifest,
          mediaItemPlayback: r.mediaItemPlayback,
          playActivity: r.playActivity,
        },
        playbackMode: this.playbackMode,
      };
    switch (e) {
      case st.serial: {
        t = new Wt(s);
        break;
      }
      case st.continuous: {
        t = new Un(s);
        break;
      }
      default:
        throw new p(p.Reason.UNSUPPORTED_ERROR, `Unsupported controller requested: ${e}`);
    }
    return ((this.playbackControllers[e] = t), t);
  }
  playbackControllerForItems(e) {
    const t = e[0];
    return t?.isRadioStation && !t?.isRadioEpisode
      ? this.getPlaybackControllerByType(st.continuous)
      : this.getPlaybackControllerByType(st.serial);
  }
  _handlePlaybackError(e) {
    if ((M.error("mediaPlaybackError", e), p.isMKError(e) && hb.includes(e.reason))) throw e;
  }
  _initializeInternalEventHandling() {
    const e = this.services;
    (w.storekit.addEventListener(E.userTokenDidChange, ({ userToken: t }) => {
      (this._whenConfigured && this._whenConfigured.then(() => this.configurePlayActivity().catch()).catch(),
        M.debug(`Updating services with mediaUserToken: ${this.musicUserToken}`),
        xo(e, { mediaUserToken: t }));
    }),
      e.dispatcher.subscribe(S.apiStorefrontChanged, function (t, { storefrontId: r }) {
        (M.debug(`Updating services with storefrontId: ${r}`), xo(e, { storefrontId: r }));
      }),
      e.dispatcher.subscribe(E.mediaPlaybackError, (t, r) => this._handlePlaybackError(r)),
      e.dispatcher.subscribe(E.playbackVolumeDidChange, (t, r) => {
        const s = r?.target;
        (s?.muted || s?.volume) && (this.volume = s?.muted ? 0 : s?.volume);
      }),
      e.dispatcher.subscribe(E.playbackStateDidChange, (t, r) => {
        r.state === I.paused &&
          (M.debug("mk: playbackStateDidChange callback - calling storekit.presentSubscribeViewForEligibleUsers"),
          w.storekit.presentSubscribeViewForEligibleUsers({ state: r.state, item: this.nowPlayingItem }, !1));
      }),
      e.dispatcher.subscribe(
        Pe.bufferTimedMetadataDidChange,
        (t, { metadata: r, item: s, position: n, playingDate: a }) => {
          if (r.blob) {
            const o = {
              item: s ?? this.nowPlayingItem,
              position: n ?? this.currentPlaybackTime,
              playingDate: a ?? this.currentPlayingDate,
              storefrontId: this.storefrontId.toUpperCase(),
              metadata: r,
            };
            (M.debug('Dispatching TimedMetadata "ping"', o), e.dispatcher.publish(S.timedMetadata, o));
          }
        },
      ));
  }
  _initializeExternalEventPublishing() {
    ([
      E.authorizationStatusDidChange,
      E.authReflectionDidComplete,
      E.needsGDPRDidChange,
      E.storefrontCountryCodeDidChange,
      E.storefrontIdentifierDidChange,
      E.userTokenDidChange,
      E.eligibleForSubscribeView,
    ].forEach((e) => {
      w.storekit.addEventListener(e, (t) => this.services.dispatcher.publish(e, t));
    }),
      this.services.dispatcher.subscribe(Pe.bufferTimedMetadataDidChange, (e, { metadata: t }) => {
        (M.debug("Dispatching TimedMetadata change", t), this.services.dispatcher.publish(E.timedMetadataDidChange, t));
      }));
  }
  configureLogger(e) {
    (Ym() || (e.debug === !0 ? oo(ee.DEBUG) : e.logLevel !== void 0 && oo(e.logLevel)),
      gt.enabled && Bs(gt.enabled),
      Nt.value !== void 0 && cl(Nt.value),
      e.logHandler !== void 0 && zm(e.logHandler));
  }
  async configurePlayActivity() {
    const { services: e } = this;
    await e.playActivity.configure({
      instance: this,
      services: {
        runtime: e.runtime,
        request: e.request,
        dispatcher: e.dispatcher,
        mediaAPIClient: e.mediaAPIClient,
        utsAPIClient: e.utsAPIClient,
        playActivity: e.playActivity,
      },
    });
  }
  _isPlaybackSupported() {
    return this.services.runtime.isNodeEnvironment
      ? (M.warn("Media playback is not supported in Node environments."), !1)
      : !0;
  }
  signalChangeItemIntent() {
    this.signalIntent({ endReasonType: P.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM });
  }
  signalIntent(e) {
    this.services.dispatcher.publish(S.userActivityIntent, { userInitiated: !0, ...e });
  }
  async validateAuthorization(e = !1) {
    (!e && this.playbackMode !== Ue.FULL_PLAYBACK_ONLY) ||
      ((this._playbackController === void 0 ||
        !this._playbackController.isReady ||
        !this._playbackController.isPlaying) &&
        (await this.authorize()));
  }
}
Gt([Et(250, { isImmediate: !0 })], It.prototype, "pause");
Gt([Et(250, { isImmediate: !0 })], It.prototype, "play");
Gt([kr("skip")], It.prototype, "skipToNextItem");
Gt([kr("skip")], It.prototype, "skipToPreviousItem");
Gt([kr("seek")], It.prototype, "seekForward");
Gt([kr("seek")], It.prototype, "seekBackward");
function VT() {
  function i(a) {
    return Vt() ? void 0 : document.head.querySelector(`meta[name=${a}]`)?.content || void 0;
  }
  const e = i("apple-music-developer-token") || i("JWT"),
    t = i("apple-music-app-build") || i("version"),
    r = i("apple-music-app-name"),
    s = i("apple-music-app-version");
  let n;
  return (
    (e || t || r || s) &&
      ((n = {}),
      e && (n.developerToken = e),
      (t || r || s) && ((n.app = {}), t && (n.app.build = t), r && (n.app.name = r), s && (n.app.version = s))),
    n
  );
}
function qn(i) {
  if (Vt()) return;
  const e = new Event(i, { bubbles: !0, cancelable: !0 });
  setTimeout(() => document.dispatchEvent(e));
}
async function fb() {
  if (Vt()) return;
  const i = wn("musickit.js");
  if (i?.dataset?.webComponents !== "") return;
  const e = "noModule" in i,
    t = `components/musickit-components/musickit-components${e ? ".esm" : ""}.js`,
    r = "https:" + tl(t) + t,
    s = {};
  (e && (s.type = "module"),
    i.hasAttribute("async") && (s.async = ""),
    i.hasAttribute("defer") && (s.defer = ""),
    await Cr(r, s),
    qn(E.webComponentsLoaded));
}
function yb(i) {
  return i === "*";
}
function mb(i) {
  return i === "**";
}
function gb(i) {
  return /^\{[^}]*\}$/i.test(i);
}
function ns(i) {
  return i instanceof RegExp ? i.toString() : String(i);
}
function vb(i) {
  return i instanceof RegExp || i.indexOf("*") !== -1 || (i.indexOf("{") !== -1 && i.indexOf("}") !== -1);
}
function Rl(i, e) {
  return function (r) {
    return i.test(r);
  };
}
function bb(i) {
  return (
    "escape" in RegExp && typeof RegExp.escape == "function"
      ? RegExp.escape
      : (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )(i);
}
function _b(i, e) {
  const t = bb(e),
    s = i.split(e).reduce(function (n, a, o) {
      const c = o > 0 ? t : "";
      if (yb(a)) return n + c + `[^${t}]+`;
      if (mb(a)) return n + ".*";
      if (gb(a)) {
        const l = a
          .slice(1, -1)
          .split(",")
          .map((h) => h.trim())
          .filter((h) => h.length > 0);
        return l.length <= 0 ? n + c + `[^${t}]+` : n + c + `(?:${l.join("|")})`;
      }
      return n + c + a;
    }, "");
  return Rl(new RegExp(s, ""));
}
function Tb(i, e) {
  return function (r) {
    return r === i;
  };
}
function Eb(i, e) {
  return i instanceof RegExp ? Rl(i) : vb(i) ? _b(i, e) : Tb(i);
}
class kb {
  topicSeparator;
  topicTransformer;
  subscriptions;
  get subscribers() {
    const e = [];
    for (const [t, [, r]] of this.subscriptions.entries()) e.push([t, r]);
    return e;
  }
  get topics() {
    return Array.from(this.subscriptions.keys());
  }
  constructor(e) {
    ((this.topicSeparator = e?.topicSeparator ?? "."),
      (this.topicTransformer = e?.topicTransformer ?? ((t) => t)),
      (this.subscriptions = new Map()));
  }
  publish(...e) {
    const [t, r] = e,
      s = this.topicTransformer(t);
    for (const n of this.subscriptions.values()) {
      const [a, o] = n;
      if (a(s))
        for (let c = 0; c < o.length; c++)
          try {
            o[c](s, r);
          } catch (l) {
            console.error(`subscriber for ${s} at ${c} threw an error`, l);
          }
    }
    return this;
  }
  publishAll(e) {
    for (const [t, r] of e) this.publish(t, r);
    return this;
  }
  subscribe(e, t) {
    Array.isArray(e) || (e = [e]);
    for (const r of e) {
      const s = ns(r);
      if (!this.subscriptions.has(s)) {
        const a = Eb(r, this.topicSeparator);
        this.subscriptions.set(s, [a, []]);
      }
      const [, n] = this.subscriptions.get(s);
      n.push(t);
    }
    return {
      patterns: e,
      handler: t,
      unsubscribe: () => {
        for (const r of e) this.unsubscribe(r, t);
      },
    };
  }
  subscribeAll(e, t) {
    return this.subscribe(e, t);
  }
  subscribeOnce(e, t) {
    const r = Array.isArray(e) ? e : [e],
      s = [];
    for (const n of r) {
      const a = (...c) => {
          (this.unsubscribe(n, a), t(...c));
        },
        o = this.subscribe(n, a);
      s.push(o.unsubscribe);
    }
    return {
      patterns: r,
      handler: t,
      unsubscribe: () => {
        for (const n of s) n();
      },
    };
  }
  unsubscribe(e, t) {
    const r = ns(e),
      s = this.subscriptions,
      n = s.get(r);
    if (n === void 0) return;
    const [, a] = n;
    if (a !== void 0) {
      const o = a.indexOf(t);
      (o >= 0 && a.splice(o, 1), a.length === 0 && s.delete(r));
    }
  }
  unsubscribeAll(e) {
    if (e === void 0) this.subscriptions.clear();
    else {
      const t = ns(e);
      this.subscriptions.delete(t);
    }
  }
}
const Cl = typeof window < "u" && typeof document < "u";
let Ol = !1;
const We = [];
async function Sb() {
  const i = We.map((e) => e.cleanup());
  (await Promise.all(i), We.splice(0, We.length));
}
function $T() {
  Ol = !0;
}
async function HT(i, e = It, t) {
  if (!i) throw new p(p.Reason.INVALID_ARGUMENTS, "configuration required");
  const r = { ...i };
  r.mergeQueryParams &&
    Cl &&
    window.location &&
    (r.linkParameters = { ...(i.linkParameters || {}), ...rd(window.location.href) });
  const s = new e({
    ...r,
    services: { runtime: await sh.detect(), dispatcher: new kb(), request: new ch(), ...i.services },
  });
  return (Ol || (await Sb()), t && (await t(s)), We.push(s), qn(E.configured), s);
}
function jT() {
  return We;
}
function Ib(i) {
  if (We.length !== 0) return typeof i > "u" ? We[We.length - 1] : We.find((e) => e.id === i);
}
Cl && (qe(fb()), qn(E.loaded));
const Pb = [
  "contributors",
  "modalities",
  "movie",
  "musicVideo",
  "musicMovie",
  "trailer",
  "tvEpisode",
  "uploadedVideo",
  "uploaded-videos",
  "music-videos",
  "music-movies",
  "tv-episodes",
  "workouts",
];
function qT(i) {
  return i?.isUTS || Pb.includes(i?.type) ? "video" : (i?.attributes?.mediaKind ?? "audio");
}
var Wn = { setDelegate: !0 };
function wb() {
  Wn = { setDelegate: !0 };
}
function Ab(i) {
  var e = {},
    t = xl(i),
    r,
    s;
  for (var n in i)
    ((r = null),
      (s = null),
      t && ((r = i.__lookupGetter__(n)), (s = i.__lookupSetter__(n))),
      r || s ? (r && e.__defineGetter__(n, r), s && e.__defineSetter__(n, s)) : (e[n] = i[n]));
  return e;
}
function li(i) {
  return typeof i < "u";
}
function vi(i) {
  return li(i) && i !== null;
}
function Rb(i) {
  return vi(i) && !Dl(i) && !Ml(i) && !Ll(i);
}
function Dl(i) {
  return Ul(i) && i.length === 0;
}
function Ml(i) {
  return Gn(i) && i.length === 0;
}
function Ll(i) {
  return Lr(i) && Object.keys(i).length === 0;
}
function ie(i) {
  return typeof i == "function";
}
function bi(i) {
  return typeof i == "number";
}
function Nl(i) {
  return bi(i) && i % 1 === 0;
}
function Ul(i) {
  return typeof i == "string" || i instanceof String;
}
function Cb(i) {
  return !!i && i.nodeType == 1;
}
function Gn(i) {
  return !!i && i.constructor === Array;
}
function Lr(i) {
  return !!i && i.constructor === Object;
}
function Ob(i) {
  var e = [];
  for (var t in i) {
    var r = i[t];
    i.hasOwnProperty(t) && !ie(r) && e.push(r);
  }
  return e;
}
function Db(i) {
  var e = [];
  for (var t in i) i.hasOwnProperty(t) && !ie(i[t]) && e.push(t);
  return e;
}
function Mb(i) {
  for (var e in i) if (i.hasOwnProperty(e)) return !0;
}
function Lb(i) {
  for (var e in i) if (i.hasOwnProperty(e) && i[e]) return !0;
}
function xl(i) {
  return Lr(i) && ie(i.__lookupGetter__) && ie(i.__lookupSetter__) && ie(i.__defineGetter__) && ie(i.__defineSetter__);
}
function Nb(i) {
  var e = [];
  for (var t in i) {
    var r = i[t];
    i.hasOwnProperty(t) && ie(r) && e.push(r);
  }
  return e;
}
function Ub(i) {
  var e = {};
  for (var t in i) i.hasOwnProperty(t) && !ie(i[t]) && (e[i[t]] = t);
  return e;
}
function Fl(i) {
  var e = [!0, !0, !0].concat(Array.prototype.slice.call(arguments));
  return Yn.apply(null, e);
}
function Yn(i, e, t, r) {
  for (var s = t ? r || {} : {}, n, a = 3; a < arguments.length; a++) {
    n = arguments[a];
    for (var o in n)
      if (Object.prototype.hasOwnProperty.call(n, o)) {
        var c = n[o];
        (i || c != null) && (e || typeof c != "function") && (s[o] = c);
      }
  }
  return s;
}
function xb(i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    Wn[t] = !0;
  }
}
function Fb(i, e, t) {
  var r = !1;
  if (((t = t || !1), i && e && i !== e)) {
    var s = {};
    (Object.keys(e).forEach(function (n) {
      i[n] || (s[n] = !0);
    }),
      Fl(s, Wn),
      (r = Kl(i, e, t ? i : null, s)));
  }
  return r;
}
function Kl(i, e, t, r) {
  var s = !1;
  if (i && e) {
    ((r = r || {}), (t = t || e));
    var n = function (m, y, k, q, ae) {
      var X = function () {
        return k[ae].apply(m, arguments);
      };
      return (y && (X.origFunction = y), (X.attachedMethod = !0), X);
    };
    for (var a in e)
      if (!(a in r) && e[a] && ie(e[a])) {
        var o = i[a],
          c = o && ie(o),
          l = null;
        (c && (o.attachedMethod === !0 ? (l = o) : (l = o.bind(i))), (i[a] = n(t, l, e, i, a)), (s = !0));
      }
  }
  return s;
}
function Bl(i) {
  var e = !1;
  for (var t in i)
    if (ie(i[t]) && i[t].attachedMethod === !0) {
      var r = i[t].origFunction;
      if (r) for (; i[t].origFunction;) ((i[t] = i[t].origFunction), (e = !0));
      else delete i[t];
    }
  return e;
}
function Kb(i, e) {
  var t = {};
  for (var r in i)
    e[r] &&
      ie(i[r].setDelegate) &&
      (t[r] = i[r].setDelegate.apply(i[r], [e[r]].concat(Array.prototype.slice.call(arguments, 2))));
  return t;
}
var Bb = function (e) {
  var t = !1;
  for (var r in e) {
    var s = e[r];
    s && typeof s == "object" && ie(s.setDelegate) && (t |= Bl(s));
  }
  return !!t;
};
function Vb(i, e) {
  var t = null;
  if (i && e && e.setDelegate) {
    var r = {},
      s;
    for (s in i) ie(i[s]) && i[s].origFunction && (r[s] = i[s]);
    t = e.setDelegate(r);
  }
  return t;
}
function $b(i, e) {
  var t = {};
  if (i) for (var r = 0; r < i.length; r++) t[i[r]] = 0;
  if (e) for (var s = 0; s < e.length; s++) t[e[s]] = 0;
  return Object.keys(t);
}
function zn() {
  return typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : {};
}
var d = Object.freeze({
    __proto__: null,
    _utResetNonOverridableFunctions: wb,
    shallowClone: Ab,
    isDefined: li,
    isDefinedNonNull: vi,
    isDefinedNonNullNonEmpty: Rb,
    isEmptyString: Dl,
    isEmptyArray: Ml,
    isEmptyObject: Ll,
    isFunction: ie,
    isNumber: bi,
    isInteger: Nl,
    isString: Ul,
    isElement: Cb,
    isArray: Gn,
    isObject: Lr,
    values: Ob,
    keys: Db,
    hasAnyKeys: Mb,
    hasAnyNonNullKeys: Lb,
    hasGetterAndSetterMethods: xl,
    methods: Nb,
    invert: Ub,
    extend: Fl,
    copyKeysAndValues: Yn,
    addNonOverrideableFunctions: xb,
    attachMethods: Kl,
    detachMethods: Bl,
    attachDelegate: Fb,
    setDelegates: Kb,
    resetDelegates: Bb,
    copyDelegatedFunctions: Vb,
    dedupedArray: $b,
    globalScope: zn,
  }),
  as = { exponential: { maxWait: 1500, initialDelay: 100, factor: 2 } },
  Vl = function (i, e, t) {
    ((this.delay = i || as.exponential.initialDelay),
      (this.maxWait = bi(e) ? e : as.exponential.maxWait),
      (this.factor = t || as.exponential.factor),
      (this.timeWaited = 0));
  };
Vl.prototype.nextDelay = function () {
  var e = null,
    t = this.maxWait - this.timeWaited;
  return (
    t > 0 && ((this.delay = Math.min(this.delay, t)), (this.timeWaited += this.delay)),
    (this.maxWait === 0 || t > 0) && ((e = this.delay), (this.delay = this.delay * this.factor)),
    e
  );
};
function $l(i, e, t, r) {
  var s = function () {
    var a = i.nextDelay();
    a ? setTimeout($l.bind(null, i, e, t, r), a) : r.apply(r, arguments);
  };
  e.call(e, t, s);
}
function Hb(i, e, t, r, s, n) {
  var a = new Vl(r, s, n);
  $l(a, i, e, t);
}
var jb = Object.freeze({ __proto__: null, exponentialBackoff: Hb });
function qb(i, e, t) {
  var r = void 0;
  if (li(i))
    if ((li(e) || (e = 1024 * 1024), li(t) || (t = 2), bi(i) && bi(e) && e > 0 && Nl(t) && t >= 0)) {
      var s = Math.pow(10, t),
        n = i > 0 ? "floor" : "ceil";
      r = Math[n](i / e / s) * s;
    } else r = NaN;
  return r;
}
var Wb = Object.freeze({ __proto__: null, deResNumber: qb }),
  Qn = "0123456789",
  Gb = Qn + "ABCDEF",
  Hl = Qn + "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  jl = Hl + "abcdefghijklmnopqrstuvwxy",
  ql = jl + "z";
function Yb(i, e, t) {
  var r = !1;
  return (
    i &&
      e &&
      ((i = i.substr(0, e.length)), t && ((i = i.toLowerCase()), (e = e.toLowerCase())), (r = i.indexOf(e) === 0)),
    r
  );
}
function zb(i, e, t) {
  var r = !1;
  if (i && e) {
    t && ((i = i.toLowerCase()), (e = e.toLowerCase()));
    var s = i.length - e.length;
    r = s >= 0 && i.lastIndexOf(e) === s;
  }
  return r;
}
function Qb(i, e, t) {
  var r = null,
    s = `	
\v\f\r             　\u2028\u2029​`,
    n = new RegExp("^[" + s + "]+"),
    a = new RegExp("[" + s + "]+$");
  if (i)
    if (!t && (!e || e == s) && i.trim) r = i.trim();
    else {
      var o = null,
        c = null,
        l = null;
      e && typeof e < "u"
        ? ((e = e.replace(/([.?*+^$[\]\\(){}-])/g, "\\$1")),
          (o = "[" + e + "]"),
          (c = new RegExp("^" + o + "+")),
          (l = new RegExp(o + "+$")))
        : ((o = s), (c = n), (l = a));
      var h = i.replace(c, "");
      r = h.replace(l, "");
    }
  return r;
}
function Wl(i, e) {
  var t = "";
  if (i)
    for (var r = i.toLowerCase().split("_"), s, n = 0; n < r.length; n++)
      ((s = r[n][0]), (n !== 0 || e) && (s = s.toUpperCase()), (t += s + r[n].slice(1)));
  return t;
}
function Xb(i) {
  return Wl(i, !0);
}
function Jb(i) {
  var e = "",
    t = "",
    r = !0;
  for (var s in i) {
    var n = i[s];
    (n || n === 0 || n === !1) && ((e += t + s + "=" + encodeURIComponent(n)), r && ((t = "&"), (r = !1)));
  }
  return e;
}
function Zb(i, e) {
  return (
    "The function " +
    i +
    "." +
    e +
    "() must be overridden with a platform-specific delegate function.If you have no data for this function, have your delegate return null or undefined (no 'return')"
  );
}
function e_(i, e) {
  var t = null;
  e = e || "\\S+";
  var r = new RegExp("\\b" + e + "/(\\S+)\\b", "i"),
    s = r.exec(i);
  return (s && s[1] && (t = s[1]), t);
}
function t_(i) {
  var e = "z",
    t = Date.now(),
    r = Math.floor(Math.random() * 1e5);
  return ((t = t.toString(36).toUpperCase()), (r = r.toString(36).toUpperCase()), i + e + t + e + r);
}
function i_(i) {
  for (var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", t = "", r, s = 0, n = e.length; s < n; s++)
    ((r = e.charAt(s)), r === "x" ? (t += pr(i)) : r === "y" ? (t += pr(i, "8", "b")) : (t += r));
  return t;
}
function pr(i, e, t) {
  var r = zn(),
    s = r.crypto || r.msCrypto,
    n;
  return (
    i
      ? (n = ((i() * 16) | 0).toString(16))
      : s && s.getRandomValues
        ? (n = (s.getRandomValues(new Uint8Array(1))[0] & 15).toString(16))
        : s && s.randomBytes
          ? (n = s.randomBytes(1).toString("hex")[0])
          : (n = ((Math.random() * 16) | 0).toString(16)),
    e && t && (n < e || n > t) && (n = pr(i, e, t)),
    n
  );
}
function r_(i, e) {
  var t = "",
    r = e.length;
  if (r <= 36) t = i.toString(r).toUpperCase();
  else {
    for (var s, n, a = []; i > 0;) ((s = i % r), (n = e.charAt(s)), a.push(n), (i = (i - s) / r));
    t = a.reverse().join("");
  }
  return (t === "" && (t = "0"), t);
}
function s_(i) {
  var e;
  if (Math.floor(4294967295 / 256) == 16777215) {
    var t = zn(),
      r = t.crypto || t.msCrypto,
      s,
      n,
      a,
      o,
      c;
    if (r && r.getRandomValues)
      ((s = r.getRandomValues(new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT))), (c = !0));
    else if (r && r.randomBytes) {
      var l = r.randomBytes(16);
      ((s = new Uint32Array(l.buffer, l.byteOffset, l.byteLength / Uint32Array.BYTES_PER_ELEMENT)), (c = !0));
    } else
      for (s = new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT), n = 0; n < s.length; n++)
        s[n] = Math.floor(Math.random() * Math.floor(4294967295));
    if (s) {
      for (e = "", n = 0; n < s.length; n++)
        for (o = s[n], a = 0; a < 6; a++) ((e += ql[o % 62]), (o = Math.floor(o / 62)));
      i && (e = "1_" + (c ? "1" : "2") + "_" + e);
    }
  }
  return e;
}
var me = Object.freeze({
  __proto__: null,
  base10Alphabet: Qn,
  base16Alphabet: Gb,
  base36Alphabet: Hl,
  base61Alphabet: jl,
  base62Alphabet: ql,
  startsWith: Yb,
  endsWith: zb,
  trim: Qb,
  snakeCaseToCamelCase: Wl,
  snakeCaseToUpperCamelCase: Xb,
  exceptionString: Zb,
  paramString: Jb,
  versionStringFromUserAgent: e_,
  requestId: t_,
  uuid: i_,
  randomHexCharacter: pr,
  convertNumberToBaseAlphabet: r_,
  cryptoRandomBase62String: s_,
});
function Gl(i, e, t) {
  var r = e;
  if (i && e)
    for (var s = i.split("."), n = 0; r && n < s.length; n++) {
      var a = s[n];
      (!(a in r) && t && (r[a] = {}), a in r ? (r = r[a]) : (r = null));
    }
  return r;
}
function Ws(i) {
  var e = null;
  if (i && arguments.length > 1)
    for (var t = Yl(Array.prototype.slice.call(arguments, 1)), r = t.length - 1; r >= 0; r--) {
      var s = t[r];
      if (((e = Gl(i, s)), vi(e))) break;
    }
  return e;
}
function n_(i, e) {
  return Gl(i, e, !0);
}
function Yl(i) {
  var e = [],
    t = [];
  ((t = t.concat(i)), arguments && arguments.length > 1 && (t = t.concat(Array.prototype.slice.call(arguments, 1))));
  for (var r = 0; r < t.length; r++) {
    var s = t[r];
    e = e.concat(s);
  }
  return e;
}
var a_ = Object.freeze({ __proto__: null, valueForKeyPath: Ws, createObjectAtKeyPath: n_, sourcesArray: Yl });
function Gs(i) {
  for (var e = [!1, !1, !1].concat(Array.prototype.slice.call(arguments)), t = [], r = 0; r < e.length; r++) {
    var s = e[r];
    if (s && s.constructor === Array) for (var n = 0; n < s.length; n++) t.push(s[n]);
    else t.push(s);
  }
  return Yn.apply(null, t);
}
function o_(i, e, t, r) {
  var s = Gs(r),
    n = s;
  if (i && e) {
    var a = {};
    if (
      (t ||
        (e = e.filter(function (h) {
          return h in s;
        })),
      e.length)
    )
      for (var o = 0; o < e.length; o++) {
        var c = e[o],
          l = i[c];
        ie(l) && (a[c] = l.call(i, s));
      }
    n = Gs(n, a);
  }
  return n;
}
function c_(i, e, t, r) {
  var s, n, a;
  if (i && e && t)
    if (((n = {}), (s = Ws(e, t, t.custom)), s)) {
      var o, c;
      if (Gn(s)) for (o = 0; o < s.length; ++o) ((c = i[s[o]]), vi(c) && (n[s[o]] = c));
      else if (Lr(s)) {
        for (var l in s)
          for (o = 0; o < s[l].length; ++o)
            if (((c = Ws(s[l][o], i)), vi(c))) {
              n[l] = c;
              break;
            }
      } else a = "metrics: incorrect data type provided to applyFieldsMap (only accepts objects and Arrays)";
    } else a = "metrics: unable to get " + e + " section from fieldsMap";
  else {
    var h = [];
    (i || h.push("data"),
      e || h.push("sectionName"),
      t || h.push("fieldsMap"),
      (a = "metrics: missing argument(s): " + h.join(",") + " not provided to applyFieldsMap"));
  }
  return (a && ie(r) && r(a), n);
}
var Nr = Object.freeze({ __proto__: null, mergeAndCleanEventFields: Gs, processMetricsData: o_, applyFieldsMap: c_ });
function l_(i, e, t) {
  zl(i, "GET", null, e, t);
}
function zl(i, e, t, r, s, n) {
  var a = new XMLHttpRequest();
  ((t = t || void 0), (n = n || {}), (r = ie(r) ? r : function () {}), (s = ie(s) ? s : function () {}));
  var o = n.async !== !1;
  (n.timeout && o && (a.timeout = n.timeout),
    (a.onload = function () {
      a.status >= 200 && a.status < 300
        ? r(a.response)
        : s(new Error("XHR error: server responded with status " + a.status + " " + a.statusText), a.status);
    }),
    (a.onerror = function () {
      s(new Error("XHR error"));
    }),
    a.open(e, i, o),
    (a.withCredentials = typeof n.withCredentials == "boolean" ? n.withCredentials : !0),
    a.setRequestHeader("Content-type", "application/json"),
    a.send(t));
}
var Ql = Object.freeze({ __proto__: null, makeAjaxGetRequest: l_, makeAjaxRequest: zl }),
  Xn = { STORAGE_TYPE: { LOCAL_STORAGE: "localStorage", SESSION_STORAGE: "sessionStorage" } },
  Xl = function (e) {
    var t = null,
      r = !1;
    return function () {
      return (
        e
          ? (t = e)
          : (r ||
              (console.error(
                "storageObject: storage object not found. Override this function if there is a platform-specific implementation",
              ),
              (r = !0)),
            t ||
              (t = {
                storage: {},
                getItem: function (s) {
                  return this.storage[s];
                },
                setItem: function (s, n) {
                  this.storage[s] = n;
                },
                removeItem: function (s) {
                  delete this.storage[s];
                },
              })),
        t
      );
    };
  };
function Jn(i) {
  var e = null,
    t = null,
    r = i === Xn.STORAGE_TYPE.LOCAL_STORAGE;
  try {
    ((t = r ? typeof localStorage : typeof sessionStorage),
      t !== "undefined" ? (e = r ? localStorage : sessionStorage) : (e = null));
  } catch (s) {
    ((e = null), console.error("_utils.storage._defaultStorageObject: Unable to retrieve storage object: " + s));
  }
  return e;
}
function u_(i) {
  return Jn(i);
}
var d_ = Xl(Jn(Xn.STORAGE_TYPE.LOCAL_STORAGE)),
  h_ = Xl(Jn(Xn.STORAGE_TYPE.SESSION_STORAGE));
function p_(i, e, t) {
  var r = null;
  if (t)
    try {
      (i.setItem(e, JSON.stringify(t)), (r = t));
    } catch {}
  else r = i.removeItem(e);
  return r;
}
function f_(i, e) {
  var t = null,
    r = i.getItem(e);
  if (r)
    try {
      t = JSON.parse(r);
    } catch {
      t = void 0;
    }
  return t;
}
var z = Object.freeze({
  __proto__: null,
  _utDefaultStorageObject: u_,
  localStorageObject: d_,
  sessionStorageObject: h_,
  saveObjectToStorage: p_,
  objectFromStorage: f_,
});
function Ji(i) {
  this.key = i;
}
Ji.prototype.toString = function () {
  return this.key;
};
var Fe = {
    flagArguments: {
      INCLUDE_CALL_STACK: new Ji("INCLUDE_CALL_STACK"),
      MIRROR_TO_SERVER: new Ji("MIRROR_TO_SERVER"),
      SUPPRESS_CLIENT_OUTPUT: new Ji("SUPPRESS_CLIENT_OUTPUT"),
    },
    setDelegate: function (e) {
      return d.attachDelegate(this, e);
    },
    execute: function (e, t, r) {
      var s = e.levelStringToIntMap[t];
      if (e.level() !== e.NONE && e.level() <= s) {
        var n = Array.prototype.slice.call(r),
          a = Fe.nonFlagLogArguments(n),
          o = Fe.logOptions(e, s, n),
          c = o.includeCallStack ? new Error().stack : null,
          l = c
            ? a.concat(
                `
` + c,
              )
            : a;
        if (((e[t]._lastLog = l), o.mirrorToServer, o.throwInsteadOfPrint)) throw new Error(a.toString());
        o.suppressClientOutput || (console[t] ? console[t].apply(console, l) : console.log.apply(console, l));
      }
    },
    isFlagObject: function (e) {
      return e && e === Fe.flagArguments[e.toString()];
    },
    nonFlagLogArguments: function (e) {
      return e.filter(function (t) {
        return !Fe.isFlagObject(t);
      });
    },
    logOptions: function (e, t, r) {
      var s = {},
        n;
      return (
        r.forEach(function (a) {
          Fe.isFlagObject(a) && ((n = me.snakeCaseToCamelCase(a.toString())), (s[n] = !0));
        }),
        d.isFunction(e.mirrorToServerLevel) &&
          e.mirrorToServerLevel() !== e.NONE &&
          e.mirrorToServerLevel() <= t &&
          (s.mirrorToServer = !0),
        e.throwLevel() !== e.NONE && e.throwLevel() <= t && (s.throwInsteadOfPrint = !0),
        s
      );
    },
    sendToServer: function (e, t, r, s) {},
  },
  Ys = { NONE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 },
  fr = {
    MIN_LEVEL: Ys.NONE,
    MAX_LEVEL: Ys.ERROR,
    levelIntToStringMap: { 0: "none", 1: "debug", 2: "info", 3: "warn", 4: "error" },
    levelStringToIntMap: { none: 0, debug: 1, info: 2, warn: 3, error: 4 },
  };
d.extend(fr, Ys);
var Zn = { loggerName: "defaultLogger", level: fr.INFO, throwLevel: fr.NONE },
  Fo = !1,
  Ko = {};
function j(i) {
  ((this._loggerName = i),
    this._level,
    this._throwLevel,
    Fo || ((Fo = !0), d.extend(j.prototype, fr), d.extend(j.prototype, Fe.flagArguments)));
}
function Ai(i) {
  i = i || Zn.loggerName;
  var e = Ko[i];
  return (e || ((e = new j(i)), (Ko[i] = e)), e);
}
j.level = function () {
  return Zn.level;
};
j.throwLevel = function () {
  return Zn.throwLevel;
};
j.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
j.prototype.loggerName = function () {
  return this._loggerName;
};
j.prototype.levelParameterAsInt = function (e) {
  var t = null,
    r;
  return (
    d.isString(e) ? (r = this.levelStringToIntMap[e.toLowerCase()]) : d.isNumber(e) && (r = e),
    r >= this.MIN_LEVEL && r <= this.MAX_LEVEL && (t = r),
    t
  );
};
j.prototype.setLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._level = t);
};
j.prototype.setThrowLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._throwLevel = t);
};
j.prototype.level = function () {
  var e = this._level;
  return d.isNumber(e) ? e : j.level();
};
j.prototype.levelString = function () {
  return this.levelIntToStringMap[this.level()];
};
j.prototype.throwLevel = function () {
  var e = this._throwLevel;
  return d.isNumber(e) ? e : j.throwLevel();
};
j.prototype.debug = function () {
  Fe.execute(this, "debug", arguments);
};
j.prototype.info = function () {
  Fe.execute(this, "info", arguments);
};
j.prototype.warn = function () {
  Fe.execute(this, "warn", arguments);
};
j.prototype.error = function () {
  Fe.execute(this, "error", arguments);
};
j.prototype.lastLog = function (e) {
  return this[e] ? this[e]._lastLog : null;
};
j.level;
j.throwLevel;
var Ur = function () {};
Ur.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Ur.prototype.localStorageObject = z.localStorageObject;
Ur.prototype.sessionStorageObject = z.sessionStorageObject;
var ea = function () {};
ea.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ea.prototype.makeAjaxRequest = Ql.makeAjaxRequest;
var xr = "noTopicConfig",
  Bo = "_",
  zs = { configBaseUrl: "https://xp.apple.com/config/1/report", disabled: !0 },
  os,
  Vo = function (e, t, r) {
    if (r) {
      e.push(r);
      var s = r[t];
      s && d.hasAnyKeys(s) && e.push(s);
    }
  },
  V = function (e) {
    ((this.environment = new Ur()),
      (this.network = new ea()),
      (this.logger = new j("mt-client-config")),
      (this._topic = e || xr),
      (this._debugSource = null),
      (this._cachedSource = null),
      (this._serviceSource = null),
      (this._initCalled = !1),
      (this._initialized = !1),
      (this._showedDebugWarning = !1),
      (this._showedNoProvidedSourceWarning = !1),
      (this._keyPathsThatSuppressWarning = { configBaseUrl: !0 }),
      (this._configFetchPromise = null),
      (this.DEBUG_SOURCE_KEY = "mtClientConfig_debugSource" + Bo + this._topic),
      (this.CACHED_SOURCE_KEY = "mtClientConfig_cachedSource" + Bo + this._topic));
  };
V.defaultConfig = function () {
  return (os || (os = new V(xr)), os);
};
V.prototype._defaults = function () {
  return zs;
};
V.prototype._setInitialized = function (e) {
  this._initialized = e;
};
V.prototype._setInitCalled = function (e) {
  this._initCalled = e;
};
V.prototype._setShowedDebugWarning = function (e) {
  this._showedDebugWarning = e;
};
V.prototype._setShowedNoProvidedSourceWarning = function (e) {
  this._showedNoProvidedSourceWarning = e;
};
V.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
V.prototype.resetDelegate = function () {
  (d.detachMethods(this), d.resetDelegates(this));
};
V.prototype.topic = function () {
  return this._topic;
};
V.prototype.configHostname = function () {};
V.prototype.configUrl = function () {
  var e = this.configHostname(),
    t;
  return (
    e ? (t = Promise.resolve("https://" + e + "/config/1/report")) : (t = this.value("configBaseUrl")),
    t.then(
      function (r) {
        return (
          this._topic !== xr
            ? (r += "/" + this.topic())
            : this.logger.error("config.configUrl(): Topic must be provided"),
          r
        );
      }.bind(this),
    )
  );
};
V.prototype.sources = function () {};
V.prototype.value = function (e, t) {
  var r = function () {
    var n = this.cachedSource(),
      a = this.serviceSource(),
      o = this.sources(),
      c = this.debugSource(),
      l = n || a || o || c,
      h;
    return (
      !o &&
        !a &&
        !(e in this._keyPathsThatSuppressWarning) &&
        (this._showedNoProvidedSourceWarning ||
          ((this._showedNoProvidedSourceWarning = !0),
          this.logger.warn(
            "Metrics config: No config provided via delegate or fetched via init(), using cached config values.",
          ))),
      c &&
        (this._showedDebugWarning ||
          ((this._showedDebugWarning = !0),
          this.logger.warn(`"debugSource" found.
This will override any same-named client-supplied configSource fields.
This setting "sticks" across session, use "setDebugSource(null)" to clear`))),
      d.isArray(o) || (o = [o]),
      e === "disabled" ? (l ? (h = [n, a, o, c]) : (h = [zs])) : (h = [zs, n, a, o, c]),
      (h = this.configSourcesWithOverrides(h, t || this.topic())),
      a_.valueForKeyPath.apply(null, [e].concat(h))
    );
  }.bind(this);
  if (this._configFetchPromise) return this._configFetchPromise.then(r);
  var s = r();
  return Promise.resolve(s);
};
V.prototype.configSourcesWithOverrides = function (e, t) {
  var r = e;
  if (e && e.length && t) {
    r = [];
    for (var s = 0; s < e.length; s++) {
      var n = e[s];
      if (n)
        if (d.isArray(n) && n.length) {
          for (var a = [], o = 0; o < n.length; o++) Vo(a, t, n[o]);
          r.push(a);
        } else Vo(r, t, n);
    }
  }
  return r;
};
V.prototype.setDebugSource = function (e) {
  return (
    (this._debugSource = e || null),
    z.saveObjectToStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY, this._debugSource)
  );
};
V.prototype.debugSource = function () {
  return (
    this._debugSource ||
      (this._debugSource = z.objectFromStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY)),
    this._debugSource
  );
};
V.prototype.setCachedSource = function (e) {
  return (
    (this._cachedSource = e || null),
    z.saveObjectToStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY, this._cachedSource)
  );
};
V.prototype.cachedSource = function () {
  return (
    this._cachedSource ||
      (this._cachedSource = z.objectFromStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY)),
    this._cachedSource
  );
};
V.prototype.setServiceSource = function (e) {
  return ((this._serviceSource = e), this._serviceSource);
};
V.prototype.serviceSource = function () {
  return this._serviceSource;
};
V.prototype.init = function (e) {
  var t = this._topic === xr || !d.isFunction(e);
  if (
    (t &&
      this.logger.warn(
        "config.init(): Falling back to default config because configSourcesFn or a valid topic was not provided",
      ),
    this._initCalled || t)
  )
    return Promise.resolve(this);
  this._initCalled = !0;
  var r = this;
  return (
    (this._configFetchPromise = Promise.resolve(e())
      .then(function (s) {
        return (
          r.setDelegate({
            sources: function () {
              return s;
            },
          }),
          (r._initialized = !0),
          r
        );
      })
      .catch(function (s) {
        throw ((r._initCalled = !1), (r._initialized = !1), s);
      })),
    this._configFetchPromise
  );
};
V.prototype.cleanup = function () {
  ((this._initCalled = this._initialized = !1),
    this.setCachedSource(),
    this.setDebugSource(),
    this.resetDelegate(),
    (this.environment = null),
    (this.network = null),
    (this.logger = null),
    (this._topic = null),
    (this._debugSource = null),
    (this._cachedSource = null),
    (this._serviceSource = null),
    (this._initCalled = !1),
    (this._initialized = !1),
    (this._showedDebugWarning = !1),
    (this._showedNoProvidedSourceWarning = !1),
    (this._configFetchPromise = null));
};
V.prototype.initialized = function () {
  return this._initialized;
};
var he = function (e) {
  V.call(this, e);
};
he.prototype = Object.create(V.prototype);
he.prototype.constructor = he;
he.prototype.disabled = function (e) {
  return this.value("disabled", e).then(function (t) {
    return !!t;
  });
};
he.prototype.blacklistedEvents = function (e) {
  return this.denylistedEvents(e);
};
he.prototype.denylistedEvents = function (e) {
  var t = this.value("blacklistedEvents", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      }),
    r = this.value("denylistedEvents", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      });
  return Promise.all([t, r]).then(function (s) {
    var n = s[0],
      a = s[1];
    return Jl(n, a);
  });
};
function Jl(i, e) {
  var t = {},
    r = [];
  if (i) for (var s = 0; s < i.length; s++) t[i[s]] = 0;
  if (e) for (var n = 0; n < e.length; n++) t[e[n]] = 0;
  return ((r = Object.keys(t)), r);
}
he.prototype.blacklistedFields = function (e) {
  return this.denylistedFields(e);
};
he.prototype.denylistedFields = function (e) {
  var t = this.value("blacklistedFields", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      }),
    r = this.value("denylistedFields", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      });
  return Promise.all([t, r]).then(function (s) {
    var n = s[0],
      a = s[1];
    return Jl(n, a);
  });
};
he.prototype.removeBlacklistedFields = function (e, t) {
  return this.removeDenylistedFields(e, t);
};
he.prototype.removeDenylistedFields = function (e, t) {
  return e
    ? this.denylistedFields(t).then(function (r) {
        for (var s = 0; s < r.length; s++) {
          var n = r[s];
          n && n in e && delete e[n];
        }
        return e;
      })
    : Promise.resolve(e);
};
he.prototype.metricsDisabledOrBlacklistedEvent = function (e, t) {
  return this.metricsDisabledOrDenylistedEvent(e, t);
};
he.prototype.metricsDisabledOrDenylistedEvent = function (e, t) {
  return this.disabled(t).then(
    function (r) {
      return (
        r ||
        (e
          ? this.denylistedEvents(t).then(function (s) {
              return s.indexOf(e) > -1;
            })
          : !1)
      );
    }.bind(this),
  );
};
he.prototype.deResFields = function (e) {
  return this.value("deResFields", e).then(function (t) {
    return t || [];
  });
};
he.prototype.applyDeRes = function (e, t) {
  return e
    ? this.deResFields(t).then(function (r) {
        var s;
        return (
          r.forEach(function (n) {
            ((s = n.fieldName), s in e && (e[s] = Wb.deResNumber(e[s], n.magnitude, n.significantDigits)));
          }),
          e
        );
      })
    : Promise.resolve(e);
};
var De = function (e, t) {
  if (!d.isDefinedNonNullNonEmpty(e) || !d.isString(e)) throw new Error("No valid topic was provided to Delegates.");
  ((this.config = this.getOrCreateConfig(e)),
    d.isDefinedNonNull(t) && ((this.environment = t.environment), (this.eventRecorder = t.eventRecorder)),
    (this._useOrginalContextForDelegateFunc = !1));
};
De.prototype.init = function () {
  if (!d.isDefinedNonNull(this.environment)) throw new Error("No environment was provided to Delegate options.");
  if (!d.isDefinedNonNull(this.eventRecorder)) throw new Error("No eventRecorder was provided to Delegate options.");
  (this.config.environment.setDelegate(this.environment),
    this.config.logger.setDelegate(this.logger),
    this.config.network.setDelegate(this.network));
  var i = d.isFunction(this.configSources) ? this.configSources.bind(this) : null;
  return this.config.init(i);
};
De.prototype.mergeDelegates = function (i) {
  var e = this;
  for (var t in i) e[t] || (e[t] = i[t]);
  this.config.setDelegate(i.config);
};
De.prototype.cleanup = function () {
  (d.isFunction(this.eventRecorder.cleanup) && this.eventRecorder.cleanup(),
    (this.config = null),
    (this.eventRecorder = null),
    (this.environment = null));
};
De.prototype.setEventRecorder = function (e) {
  return (
    d.isDefinedNonNull(e) &&
      (d.isDefinedNonNull(this.eventRecorder)
        ? (d.setDelegates(this.eventRecorder, e), this.eventRecorder.setDelegate(e))
        : (this.eventRecorder = e)),
    this
  );
};
De.prototype.setEnvironment = function (e) {
  if (!d.isDefinedNonNull(this.environment)) this.environment = e;
  else {
    var t = Object.create(this.environment);
    (d.extend(t, e), (this.environment = t));
  }
  return this;
};
De.prototype.setConfig = function (e) {
  return (this.config.setDelegate(e), this);
};
De.prototype.getOrCreateConfig = function (e) {
  return (d.isDefinedNonNull(this.config) || (this.config = new he(e)), this.config);
};
De.prototype.configSources = function () {
  throw new Error("This method should be implemented by subdelegates.");
};
function Pt() {
  this._operationPromiseChain = Promise.resolve();
}
Pt.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Pt.prototype.recordEvent = function (e, t) {
  var r = Array.prototype.slice.call(arguments, 2),
    s = this;
  return (
    (this._operationPromiseChain = this._operationPromiseChain.then(function () {
      return Promise.resolve(t).then(function (n) {
        return s._recordEvent.apply(s, [e, n].concat(r));
      });
    })),
    this._operationPromiseChain
  );
};
Pt.prototype.flushUnreportedEvents = function () {
  var e = Array.prototype.slice.call(arguments),
    t = this;
  return this._operationPromiseChain.then(function () {
    return ((t._operationPromiseChain = Promise.resolve()), t._flushUnreportedEvents.apply(t, e));
  });
};
Pt.prototype._recordEvent = function (e, t) {};
Pt.prototype._flushUnreportedEvents = function (e) {};
var ui = {
    setDelegate: function (e) {
      return d.attachDelegate(this, e);
    },
    globalScope: function () {
      return d.globalScope();
    },
  },
  yr = {
    AJAX: "ajax",
    AJAX_SYNCHRONOUS: "ajaxSynchronous",
    IMAGE: "image",
    BEACON: "beacon",
    BEACON_SYNCHRONOUS: "beaconSynchronous",
  },
  y_ = ["dsId", "consumerId"];
function m_(i, e) {
  var t = { _topic: e };
  return (Object.setPrototypeOf(t, i), t);
}
var Me = function (e) {
  (this._validateConfig(e),
    (this._config = e),
    (this._topicConfigCache = {}),
    (this._topicPropsCache = {}),
    (this.logger = Ai("mt-event-queue")));
};
Me.prototype._validateConfig = function (e) {
  var t = "please call constructor with a valid Config instance first.";
  if (e) {
    if (!e.topic || !d.isFunction(e.topic)) throw new TypeError("Unable to find config.topic function, " + t);
    if (!e.metricsDisabledOrDenylistedEvent || !d.isFunction(e.metricsDisabledOrDenylistedEvent))
      throw new TypeError("Unable to find config.metricsDisabledOrDenylistedEvent function, " + t);
    if (!e.removeDenylistedFields || !d.isFunction(e.removeDenylistedFields))
      throw new TypeError("Unable to find config.removeDenylistedFields function, " + t);
  } else throw new TypeError("Unable to find config, " + t);
};
Me.prototype._removeIdentifiableFieldsForTopic = function (e, t) {
  ((this._topicPropsCache[e] = this._topicPropsCache[e] || {}),
    this._topicPropsCache[e].anonymous &&
      y_.forEach(function (r) {
        delete t[r];
      }));
};
Me.prototype._record = function (e) {};
Me.prototype.cleanup = function () {
  ((this._config = null), (this._topicConfigCache = null), (this._topicPropsCache = {}));
};
Me.prototype.recordEvent = function (e, t) {
  if (!this._config || !t) return Promise.resolve(null);
  var r = this._config,
    s = this,
    n = arguments;
  return (
    d.isDefinedNonNullNonEmpty(e) &&
      e !== r.topic() &&
      ((r = this._topicConfigCache[e]), r || (r = this._topicConfigCache[e] = m_(this._config, e))),
    t.anonymous === !0 &&
      ((!d.isDefinedNonNull(this._topicPropsCache[e]) || this._topicPropsCache[e].anonymous !== !0) &&
        this.setProperties(e, { anonymous: !0 }),
      delete t.anonymous),
    r
      .metricsDisabledOrDenylistedEvent(t.eventType)
      .then(function (a) {
        return a
          ? null
          : r
              .removeDenylistedFields(t)
              .then(function () {
                return (
                  s._removeIdentifiableFieldsForTopic(e, t),
                  s._record.apply(s, [r].concat(Array.prototype.slice.call(n, 1)))
                );
              })
              .then(function () {
                return t;
              });
      })
      .catch(function (a) {
        return (s.logger.error(a), null);
      })
  );
};
Me.prototype.sendMethod = function () {
  return "javascript";
};
Me.prototype.setProperties = function (e, t) {
  ((this._topicPropsCache[e] = this._topicPropsCache[e] || {}), (this._topicPropsCache[e] = t));
};
var ta = {
  setDelegate: function (e) {
    return d.attachDelegate(this, e);
  },
  makeAjaxRequest: Ql.makeAjaxRequest,
};
function Zl() {
  var i = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(i) && i.indexOf("IEMobile") == -1;
}
function g_() {
  return d.isFunction(ui.globalScope().fetch) && !/Firefox/.test(navigator.userAgent);
}
function dt() {
  return Ai("mt-event-queue");
}
var C = {
    DEFAULT_REQUEST_TIMEOUT: 1e4,
    EVENTS_KEY: "events",
    EVENT_DELIVERY_VERSION: "1.0",
    MAX_PERSISTENT_QUEUE_SIZE: 100,
    RETRY_EXPONENT_BASE: 2,
    SEND_METHOD: yr,
    URL_DELIVERY_VERSION: 2,
    PROPERTIES_KEY: "properties",
  },
  v = {
    eventQueues: {},
    postIntervalEnabled: !0,
    enqueueEvent: function (e, t) {
      if (e && t && e.topic()) {
        var r = e.topic();
        return (
          (v.eventQueues = v.eventQueues || {}),
          (v.eventQueues[r] = v.eventQueues[r] || {}),
          (v.eventQueues[r].topicConfig = e),
          (v.eventQueues[r].flushConfig = v.eventQueues[r].flushConfig || {}),
          (v.eventQueues[r][C.EVENTS_KEY] = v.eventQueues[r][C.EVENTS_KEY] || []),
          v.eventQueues[r][C.EVENTS_KEY].push(t),
          Object.keys(v.eventQueues[r].flushConfig).length === 0 &&
            Promise.all([e.value("metricsUrl"), e.value("requestTimeout"), e.value("postFrequency")]).then(
              function (s) {
                var n = v.eventQueues[r].flushConfig;
                ((n.metricsUrl = s[0]), (n.requestTimeout = s[1]), (n.postFrequency = s[2]));
              },
            ),
          e.value("maxPersistentQueueSize").then(function (s) {
            return ((s = s || C.MAX_PERSISTENT_QUEUE_SIZE), v.trimEventQueues(v.eventQueues, s), t);
          })
        );
      } else return Promise.resolve(null);
    },
    trimEventQueues: function (e, t) {
      var r = Object.keys(e);
      r.length &&
        r.forEach(function (s) {
          var n = e[s][C.EVENTS_KEY];
          n &&
            n.length &&
            n.length > t &&
            (dt().warn(
              "eventQueue overflow, deleting LRU events: size is: " + n.length + " which is over max size: " + t,
            ),
            (e[s][C.EVENTS_KEY] = n.slice(-t)));
        });
    },
    resetTopicQueue: function (e) {
      v.eventQueues[e] && (v.eventQueues[e][C.EVENTS_KEY] = null);
    },
    resetTopicRetryAttempts: function (e) {
      v.eventQueues[e] && (v.eventQueues[e].retryAttempts = 0);
    },
    scheduleNextTopicRetryAttempt: function (e) {
      var t = e.topic();
      return v.eventQueues[t] && this.postIntervalEnabled
        ? e.value("postFrequency").then(function (r) {
            var s = v.eventQueues[t];
            ((s.retryAttempts = s.retryAttempts || 0), s.retryAttempts++);
            var n = Math.pow(C.RETRY_EXPONENT_BASE, s.retryAttempts) * r;
            (v.resetTopicPostInterval(t), v.setTopicPostInterval(e, n));
          })
        : Promise.resolve();
    },
    sendEvents: function (e, t) {
      var r = [];
      for (var s in v.eventQueues) {
        var n = v.eventQueues[s].topicConfig;
        if (d.isDefinedNonNull(n)) {
          var a = v.sendEventsForTopicConfig(n, e, t);
          r.push(a);
        } else
          dt().warn(
            'MetricsKit: Unable to find the topic config for the topic "' +
              s +
              '". Please ensure The topic has been initialized within delegates.',
          );
      }
      return Promise.all(r);
    },
    sendEventsForTopicConfig: function (e, t, r) {
      var s = e.topic(),
        n = v.eventQueues[s];
      return Promise.all([
        e.value("testExponentialBackoff"),
        e.value("metricsUrl"),
        e.disabled(),
        e.value("postFrequency"),
      ]).then(function (a) {
        var o = a[0],
          c = a[1],
          l = a[2],
          h = a[3];
        if (n && c && !l && !o) {
          if (!(n.retryAttempts && r)) {
            (v.resetTopicPostInterval(s), v.setTopicPostInterval(e, h));
            var m;
            switch (t) {
              case C.SEND_METHOD.IMAGE:
                m = v.sendEventsViaImage(e);
                break;
              case C.SEND_METHOD.BEACON:
                m = v.sendEventsViaBeacon(e);
                break;
              case C.SEND_METHOD.AJAX_SYNCHRONOUS:
                m = v.sendEventsViaAjax(e, !1);
                break;
              case C.SEND_METHOD.AJAX:
              default:
                m = v.sendEventsViaAjax(e, !0);
                break;
            }
            return m;
          }
        } else if (o) return v.scheduleNextTopicRetryAttempt(e);
      });
    },
    sendEventsViaImage: function (e) {
      var t = e.topic(),
        r = Promise.resolve();
      return (
        v.eventQueues[t] &&
          (r = Gi(e, function (s) {
            var n = s.metricsUrl,
              a = n.indexOf("?") == -1 ? "?" : "&",
              o = n + a + "responseType=image",
              c = v.eventQueues[t][C.EVENTS_KEY];
            (c &&
              c.length &&
              c.forEach(function (l) {
                var h = v.createQueryParams(l);
                if (h) {
                  var m = o + "&" + h,
                    y = new Image(),
                    k = v.eventQueues[t][C.PROPERTIES_KEY];
                  (k && k.anonymous && y.setAttribute("crossOrigin", "anonymous"), (y.src = m));
                }
              }),
              v.resetTopicQueue(t));
          })),
        r
      );
    },
    createQueryParams: function (e) {
      var t,
        r,
        s = "";
      return (
        Object.keys(e).forEach(function (n, a, o) {
          ((t = e[n]),
            (r = d.isString(t) ? t : JSON.stringify(t)),
            (s += n + "=" + encodeURIComponent(r)),
            a < o.length - 1 && (s += "&"));
        }),
        s.length ? s : null
      );
    },
    sendEventsViaAjax: function (e, t) {
      var r = Promise.resolve(),
        s = e.topic();
      if (v.eventQueues[s] && v.eventQueues[s][C.EVENTS_KEY]) {
        var n = v.eventQueues[s][C.EVENTS_KEY],
          a = er(n);
        (v.resetTopicQueue(s),
          a &&
            (r = Gi(e, function (o) {
              var c = o.metricsUrl,
                l = o.requestTimeout,
                h = function () {
                  v.resetTopicRetryAttempts(s);
                },
                m = function (ae, X) {
                  if (X >= 400 && X < 500) h();
                  else {
                    var we = v.eventQueues[s][C.EVENTS_KEY] || [];
                    ((v.eventQueues[s][C.EVENTS_KEY] = n.concat(we)), v.scheduleNextTopicRetryAttempt(e));
                  }
                },
                y = v.eventQueues[s][C.PROPERTIES_KEY] || {},
                k = { async: t, timeout: l };
              (y.anonymous && (k.withCredentials = !1), ta.makeAjaxRequest(c, "POST", a, h, m, k));
            })));
      }
      return r;
    },
    sendEventsViaBeacon: function (e) {
      var t = Promise.resolve();
      if (!d.isFunction(navigator.sendBeacon))
        return (dt().error("navigator.sendBeacon() is not available in the environment"), t);
      var r = e.topic(),
        s = v.eventQueues[r];
      if (s) {
        var n = s[C.PROPERTIES_KEY];
        if (n && n.anonymous)
          g_()
            ? (t = v.sendEventsViaFetch(e, { keepalive: !0 }))
            : Zl()
              ? (t = v.sendEventsViaAjax(e, !1))
              : (t = v.sendEventsViaImage(e));
        else {
          var a = er(s[C.EVENTS_KEY]);
          a &&
            (v.resetTopicQueue(r),
            (t = Gi(e, function (o) {
              var c = o.metricsUrl,
                l = ui.globalScope().Blob,
                h = new l([a], { type: "application/json" }),
                m = navigator.sendBeacon(c, h);
              m || dt().error("navigator.sendBeacon() was unable to queue the data for transfer");
            })));
        }
      }
      return t;
    },
    sendEventsViaFetch: function (e, t) {
      var r = Promise.resolve(),
        s = e.topic(),
        n = v.eventQueues[s],
        a = d.isDefinedNonNull(t) ? t.keepalive : null;
      if (d.isDefinedNonNull(n)) {
        var o = er(n[C.EVENTS_KEY]);
        if (o) {
          v.resetTopicQueue(s);
          var c = n[C.PROPERTIES_KEY] || {};
          r = Gi(e, function (l) {
            var h = l.metricsUrl;
            d.globalScope().fetch(h, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: o,
              credentials: c.anonymous === !0 ? "omit" : "same-origin",
              keepalive: d.isDefinedNonNull(a) ? a : !0,
            });
          });
        }
      }
      return r;
    },
    setTopicPostInterval: function (e, t) {
      var r = e.topic();
      v.eventQueues[r] &&
        t &&
        this.postIntervalEnabled &&
        (this.resetTopicPostInterval(r),
        (v.eventQueues[r].postIntervalToken = ui.globalScope().setInterval(function () {
          (dt().debug("MetricsKit: triggering postIntervalTimer for " + r + " at " + new Date().toString()),
            v.sendEventsForTopicConfig(e));
        }, t)));
    },
    resetTopicPostInterval: function (e) {
      v.eventQueues[e] &&
        (ui.globalScope().clearInterval(v.eventQueues[e].postIntervalToken),
        (v.eventQueues[e].postIntervalToken = null));
    },
    resetQueuePostIntervals: function () {
      for (var e in v.eventQueues) v.resetTopicPostInterval(e);
    },
    setQueuePostIntervals: function () {
      var e = [],
        t = function (o) {
          return function (c) {
            v.setTopicPostInterval(o, c);
          };
        };
      for (var r in v.eventQueues) {
        var s = v.eventQueues[r][C.EVENTS_KEY],
          n = v.eventQueues[r].topicConfig;
        if (s && s.length && n) {
          var a = n.value("postFrequency").then(t(n));
          e.push(a);
        }
      }
      return Promise.all(e);
    },
    objectContainsValue: function (e, t) {
      var r = !1;
      for (var s in e) {
        var n = e[s];
        if (e.hasOwnProperty(s) && !d.isFunction(n) && n === t) {
          r = !0;
          break;
        }
      }
      return r;
    },
    setProperties: function (e, t) {
      ((v.eventQueues = v.eventQueues || {}),
        (v.eventQueues[e] = v.eventQueues[e] || {}),
        (v.eventQueues[e][C.PROPERTIES_KEY] = t));
    },
  };
function Zi() {
  return v;
}
function er(i) {
  var e = null;
  if (i && i.length) {
    var t = {};
    ((t.deliveryVersion = C.EVENT_DELIVERY_VERSION), (t.postTime = Date.now()), (t[C.EVENTS_KEY] = i));
    try {
      e = JSON.stringify(t);
    } catch (r) {
      dt().error("Error stringifying events as JSON: " + r);
    }
  }
  return e;
}
function v_(i) {
  return er([i]);
}
function eu(i) {
  return i.value("metricsUrl").then(function (e) {
    var t = e + "/" + C.URL_DELIVERY_VERSION + "/";
    return t + i.topic();
  });
}
function Gi(i, e) {
  if (!d.isFunction(e)) {
    dt().warn("No callback function is provided for resolveTopicConfigWithCallback()");
    return;
  }
  if (d.isString(i.metricsUrl) && !d.isFunction(i.value)) {
    var t = d.isFunction(i.topic) ? i.topic() : i.topic,
      r = i.metricsUrl + "/" + C.URL_DELIVERY_VERSION + "/" + t,
      s = i.requestTimeout || C.DEFAULT_REQUEST_TIMEOUT,
      n = i.postFrequency;
    return e({ requestTimeout: Math.min(s, n), metricsUrl: r });
  } else
    return Promise.all([i.value("requestTimeout"), i.value("postFrequency"), eu(i)]).then(function (a) {
      var o = a[0] || C.DEFAULT_REQUEST_TIMEOUT,
        c = a[1],
        l = a[2];
      return e({ requestTimeout: Math.min(o, c), metricsUrl: l });
    });
}
function b_(i) {
  return Promise.all([i.value("requestTimeout"), i.value("postFrequency")]).then(function (e) {
    var t = e[0] || C.DEFAULT_REQUEST_TIMEOUT,
      r = e[1];
    return Math.min(t, r);
  });
}
function __(i, e, t) {
  var r = i.topic();
  return i.disabled().then(function (s) {
    if (!s)
      return i
        .value("postFrequency")
        .then(function (n) {
          return (
            n === 0 && (t = !0),
            v.enqueueEvent(i, e).then(function () {
              return n;
            })
          );
        })
        .then(function (n) {
          if (t) return v.sendEvents(C.SEND_METHOD.AJAX, !0);
          !v.eventQueues[r].postIntervalToken && v.postIntervalEnabled && v.setTopicPostInterval(i, n);
        });
  });
}
function T_(i, e) {
  return i
    ? e === yr.BEACON_SYNCHRONOUS
      ? E_()
      : d.isString(e) && v.objectContainsValue(yr, e)
        ? v.sendEvents(e, !0)
        : d.isFunction(navigator.sendBeacon)
          ? v.sendEvents(C.SEND_METHOD.BEACON, !0)
          : Zl()
            ? v.sendEvents(C.SEND_METHOD.AJAX_SYNCHRONOUS, !0)
            : v.sendEvents(C.SEND_METHOD.IMAGE, !0)
    : v.sendEvents(C.SEND_METHOD.AJAX, !0);
}
function E_() {
  for (var i in v.eventQueues) {
    var e = v.eventQueues[i],
      t = e.flushConfig,
      r = d.extend({}, t, {
        _topic: i,
        topic: function () {
          return this._topic;
        },
      });
    v.sendEventsViaBeacon(r);
  }
}
var ge = function (e) {
  Me.apply(this, arguments);
};
ge.prototype = Object.create(Me.prototype);
ge.prototype.constructor = ge;
ge.prototype._utResetQueue = function () {
  for (var e in Zi().eventQueues) Zi().resetTopicPostInterval(e);
  Zi().eventQueues = {};
};
ge.prototype._record = function (e, t, r) {
  return __(e, t, r);
};
ge.prototype.SEND_METHOD = yr;
ge.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ge.prototype.flushUnreportedEvents = function (e, t) {
  return T_.apply(null, arguments);
};
ge.prototype.setProperties = function (e, t) {
  (Object.getPrototypeOf(ge.prototype).setProperties.call(this, e, t), Zi().setProperties(e, t));
};
ge.prototype.cleanup = function () {
  (Object.getPrototypeOf(ge.prototype).cleanup.call(this), this._utResetQueue());
};
var _i = function (e) {
  Me.apply(this, arguments);
};
_i.prototype = Object.create(Me.prototype);
_i.prototype.constructor = _i;
_i.prototype._record = function (e, t) {
  var r = v_(t);
  if (r)
    return Promise.all([eu(e), b_(e)]).then(
      function (s) {
        var n = s[0],
          a = s[1],
          o = { timeout: a };
        (this._topicPropsCache[e.topic()] && this._topicPropsCache[e.topic()].anonymous && (o.withCredentials = !1),
          ta.makeAjaxRequest(n, "POST", r, null, null, o));
      }.bind(this),
    );
};
var k_ = Ai("mt-event-queue");
function R(i) {
  this._config = i;
}
R.prototype._document = function () {
  if (typeof document < "u") return document;
  throw "metricskit-delegates-html.environment HTML delegate 'document' object not found";
};
R.prototype._window = function () {
  if (typeof window < "u") return window;
  throw "metricskit-delegates-html.environment HTML delegate 'window' object not found";
};
R.prototype.browser = function () {
  var e = this._window().navigator.userAgent;
  return !d.isDefinedNonNull(this._config) || !d.isDefinedNonNullNonEmpty(e)
    ? null
    : this._config.value("browserMaps").then(function (t) {
        if (!d.isDefinedNonNull(t)) return null;
        for (var r = t.specifiedBrowsers || [], s = t.browserMap || {}, n = null, a = 0; a < r.length; a++) {
          var o = r[a];
          if (e.indexOf(o) > -1) {
            n = o;
            break;
          }
        }
        if (!d.isDefinedNonNull(n)) {
          var c = e.match(/Mozilla\/5.0 \((.*?)\)(\s|$)((.*?)\/(.*?)(\s)\(.*\))?(.*?)\/(.*?)(\s|$)/);
          d.isDefinedNonNullNonEmpty(c) && c.length >= 8 && (n = c[7]);
        }
        d.isDefinedNonNull(n) ? (n = n.trim()) : (n = "unknown");
        var l = s[n] || n;
        return l;
      });
};
R.prototype.cookie = function () {
  return this._window().document.cookie;
};
R.prototype.pageUrl = function () {
  return this._window().location.href;
};
R.prototype.parentPageUrl = function () {
  var e = this._window(),
    t = e.parent,
    r;
  if (t !== e)
    try {
      r = t.location.href;
    } catch {
      r = this._document().referrer;
    }
  return r;
};
R.prototype.pixelRatio = function () {
  return this._window().devicePixelRatio;
};
R.prototype.screenHeight = function () {
  return this._window().screen.height;
};
R.prototype.screenWidth = function () {
  return this._window().screen.width;
};
R.prototype.userAgent = function () {
  return this._window().navigator.userAgent;
};
R.prototype.windowInnerHeight = function () {
  return this._window().innerHeight;
};
R.prototype.windowInnerWidth = function () {
  return this._window().innerWidth;
};
R.prototype.windowOuterHeight = function () {
  return this._window().outerHeight;
};
R.prototype.windowOuterWidth = function () {
  return this._window().outerWidth;
};
R.prototype.timeOriginOffset = function () {
  var e = null,
    t = this._window().performance;
  return (t && t.timing && (e = t.timing.navigationStart), e);
};
R.prototype.app = function () {};
R.prototype.appVersion = function () {};
R.prototype.capacityData = function () {};
R.prototype.capacityDataAvailable = function () {};
R.prototype.capacityDisk = function () {};
R.prototype.capacitySystem = function () {};
R.prototype.capacitySystemAvailable = function () {};
R.prototype.connectionType = function () {};
R.prototype.dsId = function () {};
R.prototype.hardwareBrand = function () {};
R.prototype.hardwareFamily = function () {};
R.prototype.hardwareModel = function () {};
R.prototype.hostApp = function () {};
R.prototype.hostAppVersion = function () {};
R.prototype.os = function () {};
R.prototype.osBuildNumber = function () {};
R.prototype.osLanguages = function () {};
R.prototype.osVersion = function () {};
R.prototype.resourceRevNum = function () {};
R.prototype.storeFrontCountryCode = function () {};
R.prototype.storeFrontHeader = function () {};
R.prototype.storeFrontLanguage = function () {};
R.prototype.userType = function () {};
function Oe(i) {
  (Pt.call(this), (this._proxyEventRecorder = i), (this.SEND_METHOD = i.SEND_METHOD));
}
Oe.prototype = Object.create(Pt.prototype);
Oe.prototype.constructor = Oe;
Oe.prototype._recordEvent = function (e, t) {
  return this._proxyEventRecorder.recordEvent.apply(this._proxyEventRecorder, arguments);
};
Oe.prototype.flushUnreportedEvents = function (e, t) {
  var r = this,
    s = Array.prototype.slice.call(arguments);
  return d.isDefinedNonNull(this._proxyEventRecorder.SEND_METHOD) &&
    t === this._proxyEventRecorder.SEND_METHOD.BEACON_SYNCHRONOUS
    ? this._proxyEventRecorder.flushUnreportedEvents.apply(this._proxyEventRecorder, arguments)
    : this._operationPromiseChain.then(function () {
        return (
          (r._operationPromiseChain = Promise.resolve()),
          r._proxyEventRecorder.flushUnreportedEvents.apply(r._proxyEventRecorder, s)
        );
      });
};
Oe.prototype._flushUnreportedEvents = function () {
  return this._proxyEventRecorder.flushUnreportedEvents.apply(this._proxyEventRecorder, arguments);
};
Oe.prototype.sendMethod = function () {
  return this._proxyEventRecorder.sendMethod.apply(this._proxyEventRecorder, arguments);
};
Oe.prototype.setProperties = function (e, t) {
  return this._proxyEventRecorder.setProperties.apply(this._proxyEventRecorder, arguments);
};
Oe.prototype.cleanup = function () {
  return this._proxyEventRecorder.cleanup.apply(this._proxyEventRecorder, arguments);
};
var at = function (e, t) {
  var r = this.getOrCreateConfig(e);
  (De.call(this, e, { environment: new R(r), eventRecorder: new Oe(new ge(r)) }),
    (this.immediateEventRecorder = new Oe(new _i(r))),
    (this.network = null),
    (this.logger = null),
    t &&
      (this.mergeDelegates(t),
      t.environment && this.setEnvironment(t.environment),
      t.eventRecorder && this.setEventRecorder(t.eventRecorder),
      t.network && this.setNetwork(t.network),
      t.logger && this.setLogger(t.logger),
      t.config && (t.config.url && this.config.setDelegate({ configUrl: t.config.url }), this.setConfig(t.config))));
};
at.prototype = Object.create(De.prototype);
at.prototype.constructor = at;
at.prototype.setEnvironment = function (i) {
  return (ui.setDelegate(i), De.prototype.setEnvironment.call(this, i));
};
at.prototype.setNetwork = function (i) {
  return (i && ((this.network = i), ta.setDelegate(i)), this);
};
at.prototype.setLogger = function (i) {
  return (i && ((this.logger = i), k_.setDelegate(i)), this);
};
at.prototype.setImmediateEventRecorder = function (i) {
  if (i) {
    var e = Object.create(this.immediateEventRecorder);
    (Object.assign(e, i), (this.immediateEventRecorder = e));
  }
  return this;
};
at.prototype.configSources = function () {
  var e = this;
  return new Promise(function (t, r) {
    var s = function (c) {
        try {
          var l = JSON.parse(c);
          (e.config.setCachedSource(l), e.config.setServiceSource(l), t(l));
        } catch (h) {
          n(h);
        }
      },
      n = function (c) {
        (e.config.setCachedSource(e.config.cachedSource()), r(c));
      },
      a = Promise.resolve(e.config.configUrl());
    a.then(function (o) {
      jb.exponentialBackoff(e.config.network.makeAjaxRequest.bind(e.config.network, o, "GET", null), s, n);
    }).catch(n);
  });
};
var Ri = function () {};
Ri.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Ri.prototype.localStorageObject = z.localStorageObject;
Ri.prototype.sessionStorageObject = z.sessionStorageObject;
Ri.prototype.platformIdentifier = function (e, t, r) {};
var S_ = function () {
  ((this.environment = new Ri()), (this.logger = Ai("mt-client-constraints")));
};
function Qs(i, e, t, r) {
  if (!d.isDefined(i) || !d.isDefinedNonNullNonEmpty(e) || !d.isFunction(r)) return i;
  var s = e.split(".");
  return Xs(i, s, null, [], null, t, r);
}
function Xs(i, e, t, r, s, n, a) {
  if (d.isFunction(i)) return s || i;
  if ((r.push(t), e.length === 0)) return (a(i, t, r.slice(1).join("."), s), s || i);
  if (!d.isDefined(i)) return s || i;
  var o = n ? i : {},
    c = e.shift();
  if (c.length > 2 && c.indexOf("[]") === c.length - 2) {
    ((c = c.slice(0, -2)), r.push(c), d.extend(o, i));
    var l = o[c];
    if (d.isDefinedNonNull(l)) {
      var h = l.map(function (y, k) {
        var q = n ? l : l.slice();
        return (Xs(y, e.slice(), k, r, q, n, a), r.pop(), q[k]);
      });
      o[c] = h;
    }
  } else {
    var m = i[c];
    (d.extend(o, i), (o = Xs(m, e, c, r, o, n, a)));
  }
  return (r.pop(), s ? ((s[t] = o), s) : o);
}
var $o = {
  all: {
    initMatchValue: !0,
    accumulateMatchResult: function (i, e) {
      return i && e;
    },
  },
  any: {
    initMatchValue: !1,
    accumulateMatchResult: function (i, e) {
      return i || e;
    },
  },
};
function I_(i) {
  var e = $o[i];
  return (d.isDefinedNonNull(e) || (e = $o.all), e);
}
function P_(i, e, t) {
  if (!d.isObject(e) || !d.isObject(t)) return !1;
  var r = t.matchType,
    s = t.matches;
  if (!d.isDefinedNonNullNonEmpty(s)) return !1;
  var n = I_(r),
    a = n.initMatchValue;
  return (
    Qs(e, i, !1, function (o, c, l, h) {
      var m = Object.keys(s).every(function (y) {
        var k = s[y];
        return d.isDefinedNonNull(xt[y]) ? xt[y](c, h, k) : !1;
      });
      a = n.accumulateMatchResult(a, m);
    }),
    !!a
  );
}
function w_(i, e) {
  return !!d.isObject(e) && e.hasOwnProperty(i) && d.isDefinedNonNullNonEmpty(e[i]);
}
function A_(i, e, t) {
  if (!d.isObject(e)) return !1;
  var r = e[i];
  return e.hasOwnProperty(i) && t.indexOf(r) > -1;
}
function R_(i, e, t) {
  if (!d.isObject(e) || !d.isArray(t)) return !1;
  var r = e[i];
  return e.hasOwnProperty(i) && t.indexOf(r) === -1;
}
var xt = { nonEmpty: w_, valueMatches: A_, nonValueMatches: R_, nestedFieldMatches: P_ },
  mr = { OVERRIDE_FIELD_VALUE: "overrideFieldValue" },
  ia = function () {};
ia.prototype.constrainedValue = function (e, t, r) {
  var s = e && e.hasOwnProperty(r) ? e[r] : null;
  return this.applyConstraintRules(s, t);
};
ia.prototype.applyConstraintRules = function (e, t) {
  var r = e;
  if (t) {
    var s = t.denylisted || t.blacklisted;
    s ? (r = null) : t.hasOwnProperty(mr.OVERRIDE_FIELD_VALUE) && (r = t.overrideFieldValue);
  }
  return r;
};
var C_ = me.exceptionString,
  Te = function (e) {
    this._constraintsInstance = e;
  };
Te.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Te.prototype.constrainedValue = function (e, t, r, s) {
  throw C_("field_actions.Base", "constrainedValue");
};
Te.prototype.performAction = function (e, t, r, s) {
  return (d.isDefinedNonNull(s) && !d.isEmptyObject(s) && (e = this.constrainedValue(e, s, r, t)), e);
};
function tu(i) {
  i = i || "";
  var e = iu(i).split("/"),
    t,
    r,
    s;
  return (
    i.indexOf("//") === -1 ? (t = e[0]) : (t = e[2]), (r = t.substring(t.indexOf("@") + 1)), (s = r.split(":")[0]), s
  );
}
function O_(i) {
  var e = tu(i).split("."),
    t = e[e.length - 1],
    r = e[e.length - 2],
    s = 2;
  return (t && t.length === 2 && r && (r.length === 2 || r in D_()) && (s = 3), e.slice(-1 * s).join("."));
}
function D_() {
  var i = { com: !0, org: !0, net: !0, edu: !0, gov: !0 };
  return i;
}
function iu(i, e) {
  var t = i || "",
    r = t.split("?"),
    s = r[0],
    n = M_(r[1]).split("&"),
    a = n
      .filter(function (o) {
        var c = o.split("="),
          l = c[0],
          h = c[1];
        return d.isArray(e)
          ? e.indexOf(l) !== -1
          : d.isObject(e)
            ? d.isObject(e[l]) && d.isArray(e[l].allowedValues) && e[l].allowedValues.indexOf(h) !== -1
            : !1;
      })
      .join("&");
  return a.length > 0 ? s + "?" + a : s;
}
function M_(i) {
  var e = i || "";
  return e.split("#")[0];
}
function L_(i, e) {
  var t = i || "",
    r = e || [],
    s = r.reduce(function (n, a) {
      var o = new RegExp(a.searchPattern, a.flags),
        c = a.replaceVal;
      return n.replace(o, c);
    }, t);
  return s;
}
var Js = "-",
  N_ = "z";
function ru(i) {
  if (!d.isDefinedNonNull(i) || !d.isInteger(i.idVersion)) return "0";
  var e = me.uuid(),
    t = i.generatedIdSeparator || N_,
    r = U_(i) + Js + e || "",
    s = r
      .split(Js)
      .map(function (n) {
        var a = parseInt(n, 16);
        return me.convertNumberToBaseAlphabet(a, me.base61Alphabet);
      })
      .join(t);
  return s;
}
function U_(i) {
  var e = [i.idVersion];
  return (
    i.time && e.push(i.time),
    e
      .map(function (t) {
        return t.toString(16);
      })
      .join(Js)
  );
}
function su(i, e, t, r) {
  var s = this.storageKey(r, t, e),
    n = this._constraintsInstance.system.environment,
    a = z.objectFromStorage(n.localStorageObject(), s) || {};
  return (
    (a.value = this.idString(a, e)),
    this.rulesHaveLifespan(e) &&
      (!d.isNumber(a.expirationTime) || this.timeExpired(a.expirationTime)) &&
      (a.expirationTime = this.expirationTime(e.lifespan)),
    z.saveObjectToStorage(n.localStorageObject(), s, a),
    (i = a.value),
    i
  );
}
var Ho = {};
function x_(i, e, t, r) {
  var s = this.storageKey(r, t, e),
    n = Ho[s];
  return (n || ((n = su.apply(this, arguments)), (Ho[s] = n)), n);
}
var ra = "_",
  F_ = "mtId",
  se = function () {
    Te.apply(this, arguments);
  };
se.prototype = Object.create(Te.prototype);
se.prototype.constructor = se;
se.prototype.SCOPE_STRATEGIES = { ALL: "all", MAIN_DOMAIN: "mainDomain" };
se.prototype.rulesHaveLifespan = function (e) {
  return ((e = e || {}), d.isNumber(e.lifespan));
};
se.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
se.prototype.storageKey = function (e, t, r) {
  var s = this.scope(t, r);
  return this.storageKeyPrefix(r, e) + (s ? ra + s : "");
};
se.prototype.storageKeyPrefix = function (e, t) {
  return e && d.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : F_ + ra + t;
};
se.prototype.scope = function (e, t) {
  var r = "";
  if (t && (t.namespace && (r += t.namespace), t.scopeStrategy)) {
    var s;
    switch (t.scopeStrategy) {
      case this.SCOPE_STRATEGIES.MAIN_DOMAIN:
        var n = t.scopeFieldName;
        s = O_(e[n]) || "unknownDomain";
        break;
      case this.SCOPE_STRATEGIES.ALL:
      default:
        s = this.SCOPE_STRATEGIES.ALL;
        break;
    }
    (r.length && (r += ra), (r += s));
  }
  return r;
};
se.prototype.idString = function (e, t) {
  var r = e ? e.value : null,
    s = r;
  return ((!r || (d.isNumber(e.expirationTime) && this.timeExpired(e.expirationTime))) && (s = this.generateId(t)), s);
};
se.prototype.generateId = function (e) {
  return (
    (e = e || {}),
    ru({
      idVersion: this.generatedIdVersion(),
      time: this.expirationTime(e.lifespan),
      generatedIdSeparator: this.generatedIdSeparator(e.tokenSeparator),
    })
  );
};
se.prototype.generatedIdVersion = function () {
  return 4;
};
se.prototype.idTokenSeparator = function () {
  return "-";
};
se.prototype.generatedIdSeparator = function (e) {
  return e || "z";
};
se.prototype.timeExpired = function (e) {
  return e <= Date.now();
};
se.prototype.constrainedValue = function (e, t, r, s) {
  return (
    r &&
      t &&
      !d.isEmptyObject(t) &&
      (t.persistIdForSession === !0 ? (e = x_.apply(this, arguments)) : (e = su.apply(this, arguments))),
    e
  );
};
var nu = function (e, t) {
  ((this._base = e),
    (this._idAction = new se(t)),
    this._idAction.setDelegate({
      storageKey: function (s, n, a) {
        return this.storageKeyPrefix() + "_" + this.scope(n, a);
      }.bind(this._idAction),
      storageKeyPrefix: function () {
        return "mtClientId";
      },
    }));
};
nu.prototype.constrainedValue = function (e, t) {
  var r = t;
  t &&
    d.isNumber(t.expirationPeriod) &&
    ((r = d.extend({}, t)), (r.lifespan = r.expirationPeriod), delete r.expirationPeriod);
  var s = e ? e.clientId : null,
    n = this._idAction.performAction(s, "clientId", e, r);
  return this._base.applyConstraintRules(n, t);
};
var vt = function () {
  Te.apply(this, arguments);
};
vt.prototype = Object.create(Te.prototype);
vt.prototype.constructor = vt;
vt.prototype.SCOPES = {
  HOSTNAME: "hostname",
  FULL: "full",
  FULL_WITHOUT_PARAMS: "fullWithoutParams",
  FULL_WITH_REPLACEMENTS: "fullWithReplacements",
};
vt.prototype.constrainedValue = function (e, t) {
  if (e && t && t.scope)
    switch (t.scope) {
      case this.SCOPES.HOSTNAME:
        e = tu(e);
        break;
      case this.SCOPES.FULL_WITHOUT_PARAMS:
        e = iu(e, t.allowedParams);
        break;
      case this.SCOPES.FULL_WITH_REPLACEMENTS:
        e = L_(e, t.replacements);
        break;
      case this.SCOPES.FULL:
    }
  return e;
};
var au = function (e) {
  ((this._base = e), (this._urlAction = new vt()));
};
au.prototype.constrainedValue = function (e, t) {
  var r = e ? e.parentPageUrl : null,
    s = this._urlAction.performAction(r, "parentPageUrl", e, t);
  return this._base.applyConstraintRules(s, t);
};
var K_ = function (i) {
    ((this.base = new ia()), (this.clientId = new nu(this.base, i)), (this.parentPageUrl = new au(this.base)));
  },
  sa = function (e) {
    this._fieldHandlers = new K_(e);
  };
sa.prototype.applyConstraints = function (e, t) {
  return (t && t.fieldConstraints && (e = this.applyFieldConstraints(e, t.fieldConstraints)), e);
};
sa.prototype.applyFieldConstraints = function (e, t) {
  if (t) {
    var r = {},
      s,
      n,
      a;
    for (a in t)
      ((n = t[a]),
        (e.hasOwnProperty(a) || n.generateValue === !0 || n.hasOwnProperty(mr.OVERRIDE_FIELD_VALUE)) &&
          (a in this._fieldHandlers
            ? (s = this._fieldHandlers[a].constrainedValue(e, n))
            : (s = this._fieldHandlers.base.constrainedValue(e, n, a)),
          (r[a] = s)));
    for (a in r) e[a] = r[a];
    e = Nr.mergeAndCleanEventFields(e);
  }
  return e;
};
function ou(i, e, t, r) {
  var s = i || {};
  if (
    ((r =
      r ||
      function (l, h, m) {
        return l[m] || {};
      }),
    e && e[t])
  ) {
    var n,
      a,
      o = s[t] || {};
    s[t] = o;
    for (n in e[t]) {
      var c = r(o, e[t], n);
      o[n] = c;
      for (a in e[t][n]) c[a] = e[t][n][a];
    }
  }
  return s;
}
var Yt = function (e) {
  this.treatment = new sa(e);
};
Yt.prototype.constraintsForEvent = function (e, t, r) {
  if (!t) return Promise.resolve(null);
  var s = this;
  return Promise.resolve(t.constraintProfile(r))
    .then(function (n) {
      if (!n) return null;
      var a = "constraints.profiles." + n;
      return t.value(a, r);
    })
    .then(function (n) {
      var a = null;
      return (
        n &&
          n.precedenceOrderedRules &&
          (a = n.precedenceOrderedRules.reduce(function (o, c) {
            return (s.eventMatchesRule(e, c) && (o = s.updateRules(o, c)), o);
          }, {})),
        a
      );
    });
};
Yt.prototype.eventMatchesRule = function (e, t) {
  var r = !1;
  return (
    e &&
      t.filters &&
      (t.filters === "any"
        ? (r = !0)
        : d.isObject(t.filters) &&
          (r =
            this.eventMatchesNonEmptyFields(e, t.filters.nonEmptyFields) &&
            this.eventMatchesFieldValues(e, t.filters.valueMatches))),
    r
  );
};
Yt.prototype.eventMatchesNonEmptyFields = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !d.isArray(t)
        ? (r = !0)
        : (r = t.every(function (s) {
            return xt.nonEmpty(s, e);
          }))),
    r
  );
};
Yt.prototype.eventMatchesFieldValues = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !d.isObject(t) || d.isEmptyObject(t)
        ? (r = !0)
        : (r = Object.keys(t).every(function (s) {
            var n = t[s];
            return xt.valueMatches(s, e, n);
          }))),
    r
  );
};
Yt.prototype.updateRules = function (e, t) {
  return ou(e, t, "fieldConstraints");
};
var cu = function () {};
cu.prototype.performAction = function (e, t, r) {
  return r !== !0 ? e : null;
};
var lu = function () {};
lu.prototype.performAction = function (e, t, r) {
  return !e || !d.isArray(r) || d.isEmptyArray(r)
    ? e
    : ((e = d.extend({}, e)),
      r.forEach(function (s) {
        delete e[s];
      }),
      d.isEmptyObject(e) ? null : e);
};
var uu = function () {};
uu.prototype.performAction = function (e, t, r) {
  if (!e || !d.isArray(r) || d.isEmptyArray(r)) return e;
  var s = {};
  return (
    r.forEach(function (n) {
      d.isDefinedNonNull(e[n]) && (s[n] = e[n]);
    }),
    d.isEmptyObject(s) ? null : s
  );
};
var B_ = "mtSessionization",
  du = "_",
  V_ = "-",
  cs = "sessionId",
  ls = "sessionStartTime",
  Ze = function (e) {
    this._constraintsInstance = e;
  };
Ze.prototype.performAction = function (e, t, r) {
  if (!d.isDefinedNonNull(e) || !d.isDefined(r)) return e;
  if (d.isDefinedNonNull(r.sessionResetOptions)) {
    if (!d.isDefinedNonNull(r.sessionResetOptions.filters))
      throw new SyntaxError('sessionizationFields Action: unable to find the required config "filters"');
    var s = this._resetSession(e, t, r);
    if (s !== !0) return e;
  }
  e = d.extend({}, e);
  var n = this._storageKey(e, r),
    a = this._constraintsInstance.system.environment,
    o = z.objectFromStorage(a.localStorageObject(), n) || {};
  (this._shouldCreateNewSession(t, o, r) &&
    ((o.sessionId = this._generateSessionId(r)),
    (o.rawFirstEventTimeInSession = t.eventTime),
    (o.firstEventTimeInSession = e.eventTime),
    (o.eventCount = 0)),
    (o.rawLastEventTimeInSession = t.eventTime),
    (o.lastEventTimeInSession = e.eventTime),
    (o.eventCount += 1),
    z.saveObjectToStorage(a.localStorageObject(), n, o));
  var c = this._getSessionFieldNames(r);
  return ((e[c.sessionId] = o.sessionId), r.sessionStartTime && (e[c.sessionStartTime] = o.firstEventTimeInSession), e);
};
Ze.prototype._storageKey = function (e, t) {
  var r = this._scope(e, t);
  return this._storageKeyPrefix(t) + (d.isEmptyString(r) ? "" : du + r);
};
Ze.prototype._storageKeyPrefix = function (e) {
  return e && d.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : B_;
};
Ze.prototype._scope = function (e, t) {
  var r = "";
  return (
    d.isDefined(t) &&
      (d.isString(t.namespace) && (r += t.namespace),
      d.isString(t.scopeFieldName) &&
        d.isDefinedNonNull(e[t.scopeFieldName]) &&
        ((r += du), (r += e[t.scopeFieldName].toString()))),
    r
  );
};
Ze.prototype._generateSessionId = function (e) {
  return ru({ idVersion: 1, time: Date.now(), idTokenSeparator: V_, generatedIdSeparator: e.tokenSeparator });
};
Ze.prototype._shouldCreateNewSession = function (e, t, r) {
  var s = !1;
  return (
    (s |= !d.isDefinedNonNull(t.sessionId)),
    d.isDefinedNonNull(r.endSessionConditions) &&
      (d.isDefinedNonNull(r.endSessionConditions.lifespan) &&
        (s |= e.eventTime >= t.rawFirstEventTimeInSession + r.endSessionConditions.lifespan),
      d.isDefinedNonNull(r.endSessionConditions.idleSpan) &&
        (s |= e.eventTime >= t.rawLastEventTimeInSession + r.endSessionConditions.idleSpan),
      d.isDefinedNonNull(r.endSessionConditions.eventCount) &&
        (s |= t.eventCount >= r.endSessionConditions.eventCount)),
    s
  );
};
Ze.prototype._resetSession = function (e, t, r) {
  var s = r.sessionResetOptions,
    n = this._constraintsInstance._constraintGenerator;
  if (d.isDefinedNonNull(n) && d.isDefinedNonNull(n.eventMatchesTreatment) && n.eventMatchesTreatment(t, s)) {
    var a = this._storageKey(e, r),
      o = this._constraintsInstance.system.environment;
    return (z.saveObjectToStorage(o.localStorageObject(), a, void 0), s.newSessionAfterReset);
  }
  return !0;
};
Ze.prototype._getSessionFieldNames = function (e) {
  var t = { sessionId: cs, sessionStartTime: ls };
  return (
    d.isDefinedNonNull(e.sessionFields) &&
      (d.isDefinedNonNullNonEmpty(e.sessionFields[cs]) && (t.sessionId = e.sessionFields[cs]),
      d.isDefinedNonNullNonEmpty(e.sessionFields[ls]) && (t.sessionStartTime = e.sessionFields[ls])),
    t
  );
};
var na = function () {};
na.prototype.performAction = function (e, t, r) {
  if (!e || !r || !d.isString(r.timeReference) || !d.isNumber(r.bucketInterval) || !d.isArray(r.fields)) return e;
  var s = e[r.timeReference];
  if (!d.isNumber(s)) return e;
  var n = this._clampToBoundary(s, r.bucketInterval),
    a = n - s;
  return (
    (e[r.timeReference] = n),
    r.fields.forEach(function (o) {
      var c = e[o];
      d.isNumber(c) && (e[o] += a);
    }),
    e
  );
};
na.prototype._clampToBoundary = function (e, t) {
  var r = e % t,
    s = e - r,
    n = s + t;
  return r <= t / 2 ? s : n;
};
var tt = {
    blacklistedEventAction: "blacklisted",
    denylistedEventAction: "denylisted",
    blacklistedFieldsAction: "blacklistedFields",
    denylistedFieldsAction: "denylistedFields",
    whitelistedFieldsAction: "whitelistedFields",
    allowlistedFieldsAction: "allowlistedFields",
    sessionizationFieldsAction: "sessionizationFields",
    clampingEventAction: "clamping",
  },
  hu = function (e) {
    var t = new cu(),
      r = new lu(),
      s = new uu(),
      n = new Ze(e),
      a = new na();
    ((this._actions = {}),
      (this._actions[tt.blacklistedEventAction] = t),
      (this._actions[tt.denylistedEventAction] = t),
      (this._actions[tt.blacklistedFieldsAction] = r),
      (this._actions[tt.denylistedFieldsAction] = r),
      (this._actions[tt.whitelistedFieldsAction] = s),
      (this._actions[tt.allowlistedFieldsAction] = s),
      (this._actions[tt.sessionizationFieldsAction] = n),
      (this._actions[tt.clampingEventAction] = a));
  };
hu.prototype.getAction = function (e) {
  return this._actions[e];
};
var di = "start",
  $_ = "value",
  H_ = function (e, t) {
    var r = -1,
      s = r;
    if (!d.isDefinedNonNull(t) || e.length === 0 || (d.isDefinedNonNull(e[0]) && t < e[0][di])) return r;
    if (e[e.length - 1][di] < t) s = e.length - 1;
    else
      for (var n = 0; n < e.length; n++) {
        var a = e[n][di];
        if (a === t) {
          s = n;
          break;
        } else if (a > t) {
          s = n - 1;
          break;
        }
      }
    return s;
  },
  Ti = function () {
    Te.apply(this, arguments);
  };
Ti.prototype = Object.create(Te.prototype);
Ti.prototype.constructor = Ti;
Ti.prototype.constrainedValue = function (e, t) {
  var r = t ? t.precision : 0,
    s = t ? t.buckets : null;
  if (d.isDefinedNonNullNonEmpty(s)) {
    s = s.slice().sort(function (o, c) {
      return o[di] - c[di];
    });
    var n = H_(s, e),
      a = s[n];
    d.isDefinedNonNull(a) && (e = a[$_]);
  } else d.isNumber(e) && d.isNumber(r) && r > 0 && (e = Math.floor(e / r) * r);
  return e;
};
var j_ = "mt_serial_number",
  gr = "exp",
  Zs = "sn",
  et = function (e) {
    ((e = e || {}),
      (this._nextRotationTime = e.nextRotationTime || Number.POSITIVE_INFINITY),
      (this._storageKey = e.namespace || j_),
      (this._initialSerialNumber = e.initialSerialNumber || 0),
      (this._rotationPeriod = e.rotationPeriod || Number.POSITIVE_INFINITY));
  };
et.prototype.setDelegate = function (e) {
  d.attachDelegate(this, e);
};
et.prototype.localStorageObject = function () {
  return z.localStorageObject();
};
et.prototype.getNextSerialNumber = function (e) {
  var t = this._storageKey,
    r = this._getCurrentSerialNumberData(t),
    s = r[Zs];
  return (
    (e = d.isNumber(e) ? e : 1),
    (s = parseInt(s, 10)),
    isNaN(s) && (s = this._initialSerialNumber),
    (s = this._increaseSerialNumber(s, e)),
    (r[Zs] = s),
    z.saveObjectToStorage(this.localStorageObject(), this._storageKey, r),
    s
  );
};
et.prototype.resetSerialNumber = function () {
  var e = z.objectFromStorage(this.localStorageObject(), this._storageKey);
  d.isDefinedNonNull(e) && this._resetSerialNumber(e[gr]);
};
et.prototype.getTime = function () {
  return Date.now();
};
et.prototype._increaseSerialNumber = function (e, t) {
  return e + t;
};
et.prototype._getCurrentSerialNumberData = function (e) {
  var t = z.objectFromStorage(this.localStorageObject(), e),
    r,
    s;
  for (
    t
      ? ((r = t[gr]), (r = parseInt(r, 10)), (t[gr] = r = isNaN(r) ? this._nextRotationTime : r))
      : (r = this._nextRotationTime - this._rotationPeriod);
    !t || this.getTime() >= r;
  )
    ((r = s = r + this._rotationPeriod), (t = this._resetSerialNumber(s)));
  return t;
};
et.prototype._resetSerialNumber = function (e) {
  var t = {};
  return (
    (t[gr] = e),
    (t[Zs] = this._initialSerialNumber),
    z.saveObjectToStorage(this.localStorageObject(), this._storageKey, t),
    t
  );
};
var jo = "_",
  q_ = "mtTimestamp",
  ot = function () {
    (Te.apply(this, arguments),
      (this._storage = this._constraintsInstance.system.environment.localStorageObject()),
      (this._precisionEndTimeCache = {}),
      (this._serialNumberGenerator = null));
  };
ot.prototype = Object.create(Te.prototype);
ot.prototype.constructor = ot;
ot.prototype.constrainedValue = function (e, t, r, s) {
  var n = e;
  if (d.isNumber(e) && d.isObject(t) && d.isNumber(t.precision) && t.precision > 0) {
    var a = this._computePrecisionStartTime(e, t);
    ((this._serialNumberGenerator = new et({
      namespace: this._persistentStorageKey(t, s),
      nextRotationTime: a + t.precision,
      rotationPeriod: t.precision,
    })),
      this._serialNumberGenerator.setDelegate(this._constraintsInstance.system.environment),
      this._serialNumberGenerator.setDelegate({
        getTime: function () {
          return e;
        },
      }));
    var o = this._serialNumberGenerator.getNextSerialNumber();
    ((n = this._computeTimestamp(a, o)), (this._serialNumberGenerator = null));
  }
  return n;
};
ot.prototype._computeTimestamp = function (e, t) {
  return e + t;
};
ot.prototype._persistentStorageKey = function (e, t) {
  var r = e.namespace ? jo + e.namespace : "";
  return (e.storageKeyPrefix || q_) + r + jo + t;
};
ot.prototype._computePrecisionStartTime = function (e, t) {
  var r = t.precision;
  return Math.floor(e / r) * r;
};
var us = "_",
  W_ = "mtHash",
  G_ = "salt",
  Y_ = 10,
  Be = function () {
    Te.apply(this, arguments);
  };
Be.prototype = Object.create(Te.prototype);
Be.prototype.constructor = Be;
function pu(i, e) {
  var t = i.namespace ? us + i.namespace : "";
  return (i.storageKeyPrefix || W_) + t + us + G_ + us + e;
}
function z_() {
  for (var i = ""; i.length < Y_;) i += me.randomHexCharacter();
  return i;
}
function Q_(i, e) {
  return [i, e]
    .map(function (t) {
      var r = 0;
      if (d.isDefinedNonNullNonEmpty(t))
        for (var s = 0; s < t.length; s++) {
          var n = t.charCodeAt(s);
          r = (r << 5) - r + n;
        }
      var a = Math.abs(r);
      return ((a = parseInt(a, 16)), me.convertNumberToBaseAlphabet(a, me.base62Alphabet));
    })
    .join("");
}
Be.prototype.constrainedValue = function (e, t, r, s) {
  return d.isDefinedNonNullNonEmpty(e)
    ? this._loadPlatformBasedSalt(t, s).then(function (n) {
        return Q_(e, n);
      })
    : e;
};
Be.prototype.timeExpired = function (e) {
  return e ? e <= Date.now() : !1;
};
Be.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
Be.prototype._loadPlatformBasedSalt = function (e, t) {
  var r = null,
    s = this,
    n = e.platformBasedSalt;
  return (
    d.isDefinedNonNull(n)
      ? ((r = this._constraintsInstance.system.environment.platformIdentifier(
          n.saltNamespace,
          "userid",
          n.crossDeviceSync || !0,
        )),
        d.isDefinedNonNull(r)
          ? (r = r.then(function (a) {
              return (
                d.isDefinedNonNull(a) ||
                  (s._constraintsInstance.system.logger.warn(
                    "Hash: platform returned an empty salt. Will use default salt generator to generate the salt.",
                  ),
                  (a = s._getSalt(e, t))),
                a
              );
            }))
          : (r = Promise.resolve(this._getSalt(e, t))))
      : (r = Promise.resolve(this._getSalt(e, t))),
    r
  );
};
Be.prototype._getSalt = function (e, t) {
  var r = this._retrieveSaltFromStorage(e, t),
    s = e.saltLifespan;
  if (!d.isDefinedNonNull(r) || this.timeExpired(r.expirationTime)) {
    var n = this._constraintsInstance.system.environment.localStorageObject(),
      a = z_();
    ((r = { salt: a, expirationTime: this.expirationTime(s) }), z.saveObjectToStorage(n, pu(e, t), r));
  }
  return r.salt;
};
Be.prototype._retrieveSaltFromStorage = function (e, t) {
  var r = this._constraintsInstance.system.environment.localStorageObject(),
    s = z.objectFromStorage(r, pu(e, t));
  return s;
};
var ri = { ID: "idGenerator", NUMBER: "numberDeres", TIME: "timeDeres", URL: "urlDeres", HASH: "hash" },
  fu = function (e) {
    ((this.actions = {}),
      (this.actions[ri.ID] = new se(e)),
      (this.actions[ri.NUMBER] = new Ti(e)),
      (this.actions[ri.TIME] = new ot(e)),
      (this.actions[ri.URL] = new vt(e)),
      (this.actions[ri.HASH] = new Be(e)));
  };
fu.prototype.getAction = function (e) {
  return this.actions[e];
};
var yu = function (e) {
  ((this._eventActions = new hu(e)), (this._fieldActions = new fu(e)));
};
yu.prototype.applyConstraints = function (e, t) {
  var r = e;
  if (t && !d.isEmptyObject(t)) {
    var s = [],
      n = this;
    if (t.fieldActions && !d.isEmptyObject(t.fieldActions)) {
      var a = !1,
        o = r;
      ((o = Object.keys(t.fieldActions).reduce(function (h, m) {
        var y = t.fieldActions[m];
        if (y) {
          var k = y.denylisted || y.blacklisted,
            q = y.treatmentType,
            ae = n._fieldActions.getAction(q);
          h = Qs(h, m, !1, function (X, we, Qt, Xt) {
            if (k) (delete Xt[we], (a = !0));
            else if (y.hasOwnProperty(mr.OVERRIDE_FIELD_VALUE)) ((Xt[we] = y[mr.OVERRIDE_FIELD_VALUE]), (a = !0));
            else if (ae) {
              var ct = ae.performAction(X, m, r, y);
              ((Xt[we] = ct),
                ct instanceof Promise &&
                  s.push(
                    ct.then(function (Li) {
                      Qs(o, m, !0, function (le, Jt, Lu, Nu) {
                        Lu === Qt && (Nu[Jt] = Li);
                      });
                    }),
                  ),
                (a = !0));
            }
          });
        }
        return h;
      }, o)),
        a &&
          (s.length > 0
            ? (r = Promise.all(s).then(function () {
                return o;
              }))
            : (r = o)));
    }
    if (t.eventActions && !d.isEmptyObject(t.eventActions)) {
      var c = Object.keys(t.eventActions),
        l = function (h) {
          return (
            c.forEach(function (m) {
              var y = n._eventActions.getAction(m);
              if (y) {
                var k = t.eventActions[m];
                h = y.performAction(h, e, k);
              }
            }),
            h
          );
        };
      r instanceof Promise
        ? (r = Promise.resolve(r).then(function (h) {
            return l(h);
          }))
        : (r = l(r));
    }
  }
  return r;
};
var X_ = "filters",
  J_ = "any",
  Yi = "eventActions",
  ds = "fieldActions";
function Z_(i, e) {
  var t = i || {};
  return (eT(t, e), tT(t, e), t);
}
function eT(i, e) {
  i[Yi] || (i[Yi] = {});
  var t = i[Yi],
    r = e[Yi];
  r &&
    Object.keys(r).reduce(function (s, n) {
      var a = s[n],
        o = r[n];
      return (
        d.isArray(a)
          ? d.isArray(o) &&
            o.forEach(function (c) {
              a.indexOf(c) === -1 && a.push(c);
            })
          : d.isArray(o)
            ? (s[n] = o.slice())
            : (d.isObject(o) || (!d.isObject(o) && !d.isFunction(o))) && (s[n] = o),
        s
      );
    }, t);
}
function tT(i, e) {
  (i[ds] || (i[ds] = {}),
    ou(i, e, ds, function (t, r, s) {
      return t[s] && t[s].treatmentType === r[s].treatmentType ? t[s] : {};
    }));
}
var Fr = function (e) {
  ((this._constraintsInstance = e), (this.treatment = new yu(e)));
};
Fr.prototype._combineTreatments = function (e, t, r) {
  var s,
    n = [];
  return (
    d.isArray(e)
      ? (e.forEach(function (a) {
          if (a) {
            var o = "treatmentProfiles." + a,
              c = t.value(o, r).then(function (l) {
                return l && l.treatments ? l.treatments : [];
              });
            n.push(c);
          }
        }),
        (s = Promise.all(n).then(function (a) {
          var o = [];
          return (
            a.forEach(function (c) {
              o = o.concat(c);
            }),
            o
          );
        })))
      : (s = Promise.resolve([])),
    s
  );
};
Fr.prototype.constraintsForEvent = function (e, t, r) {
  if (!t) return Promise.resolve(null);
  var s = this;
  return Promise.resolve(t.constraintProfiles(r))
    .then(function (n) {
      return d.isDefinedNonNull(n)
        ? n
        : Promise.resolve(t.constraintProfile(r)).then(function (a) {
            return d.isDefinedNonNull(a) ? [a] : null;
          });
    })
    .then(function (n) {
      if (d.isDefinedNonNull(n)) {
        if (!d.isArray(n))
          throw new TypeError('"constraintProfiles" should be an Array, but got: ' + (n && n.constructor));
        return s._combineTreatments(n, t, r).then(function (a) {
          if (a.length === 0)
            throw new SyntaxError("The constraintProfiles: " + n.join(", ") + " are not found in the topic config");
          return a;
        });
      } else return Promise.resolve([]);
    })
    .then(function (n) {
      var a = n.reduce(function (o, c) {
        return (s.eventMatchesTreatment(e, c) && (o = Z_(o, c)), o);
      }, null);
      return a;
    });
};
Fr.prototype.eventMatchesTreatment = function (e, t) {
  var r = t[X_];
  if (!d.isDefinedNonNull(r)) return !0;
  if (d.isString(r)) return r === J_;
  if (Object.keys(r).length === 0)
    throw new SyntaxError(
      `Unable to find the filter in 
` + JSON.stringify(t),
    );
  return Object.keys(r).every(function (s) {
    var n = r[s];
    if (n && d.isString(n)) return !1;
    if (!n || !d.isObject(n) || d.isEmptyObject(n))
      throw new SyntaxError(
        "Invalid filter object for field (" +
          s +
          `) in 
` +
          JSON.stringify(t),
      );
    return Object.keys(n).every(function (a) {
      var o = n[a];
      if (xt[a]) return xt[a](s, e, o);
      throw new SyntaxError(
        "Unable to find the filter (" +
          a +
          ") for field (" +
          s +
          `)in 
` +
          JSON.stringify(t),
      );
    });
  });
};
var iT = {
  constraintProfile: function (e) {
    return this.value("constraints.defaultProfile", e);
  },
  constraintProfiles: function (e) {
    return this.value("defaultTreatmentProfiles", e);
  },
};
function rT(i) {
  var e = !0;
  return (
    (e &= d.isDefinedNonNull(i)),
    e &&
      ((e &= !d.isEmptyObject(i)),
      (e &= d.isFunction(i.initialized)),
      (e &= d.isFunction(i.value)),
      (e &= d.isFunction(i.constraintProfile))),
    e
  );
}
function sT(i) {
  return ((d.isFunction(i.constraintProfile) && d.isFunction(i.constraintProfiles)) || d.attachMethods(i, iT, i), i);
}
var Kr = function (e, t) {
  if (!rT(e)) throw new Error('The topic config is not a valid instance of "mt-client-config".');
  ((this._isInitialized = !1),
    (this._topicConfig = e),
    (this._constraintGenerator = null),
    (this.system = new S_()),
    d.setDelegates(this.system, t || {}));
};
Kr.prototype._getConstraintGenerator = function () {
  var e = this;
  return this._constraintGenerator
    ? Promise.resolve(this._constraintGenerator)
    : this._topicConfig.value("treatmentProfiles").then(function (t) {
        return (
          d.isDefinedNonNull(t) ? (e._constraintGenerator = new Fr(e)) : (e._constraintGenerator = new Yt(e)),
          e._constraintGenerator
        );
      });
};
Kr.prototype.constraintsForEvent = function (e, t) {
  var r = this;
  return this._getConstraintGenerator().then(function (s) {
    return s.constraintsForEvent(e, r._topicConfig, t);
  });
};
Kr.prototype.applyConstraintTreatments = function (e, t) {
  var r = t ? Promise.resolve(t) : this.constraintsForEvent(e),
    s = this;
  return Promise.all([r, this._getConstraintGenerator(), this._topicConfig.value("anonymous")])
    .then(function (n) {
      var a = n[0],
        o = n[1],
        c = n[2];
      return (d.isDefinedNonNull(c) && (e.anonymous = c), o.treatment.applyConstraints(e, a));
    })
    .catch(function (n) {
      return (s.system.logger.warn("An error occurred while applying constraints: " + n.message || n), null);
    });
};
var hs, ps;
function mu() {
  return [
    "app",
    "appVersion",
    "hardwareFamily",
    "hardwareModel",
    "os",
    "osBuildNumber",
    "osLanguages",
    "osVersion",
    "resourceRevNum",
    "screenHeight",
    "screenWidth",
    "userAgent",
  ];
}
function gu() {
  return ["delegateApp", "hardwareBrand", "storeFrontCountryCode", "storeFrontHeader", "storeFrontLanguage"];
}
function nT() {
  return [
    "baseVersion",
    "clientEventId",
    "connection",
    "eventTime",
    "eventType",
    "eventVersion",
    "timezoneOffset",
    "xpPostFrequency",
    "xpSendMethod",
  ];
}
function vu() {
  return (ps || (ps = mu().concat(gu())), ps);
}
function aT() {
  return (hs || (hs = vu().concat(nT())), hs);
}
var oT = d.attachDelegate,
  cT = me.cryptoRandomBase62String,
  Br = me.exceptionString,
  qo;
function Q(i) {
  if (!d.isDefinedNonNull(i)) throw new Error("A processor instance is required for creating BaseEventHandler.");
  ((this._processor = i),
    qo ||
      ((qo = !0),
      vu().forEach(function (e) {
        Q.prototype[e] = function (t) {
          var r;
          return (t && t.hasOwnProperty(e) ? (r = t[e]) : (r = this.environment()[e]()), r);
        };
      })));
}
Q._className = "eventHandlers.base";
Q.prototype.setDelegate = function (e) {
  return oT(this, e);
};
Q.prototype.environment = function () {
  throw Br(Q._className, "environment");
};
Q.prototype.eventRecorder = function () {
  throw Br(Q._className, "eventRecorder");
};
Q.prototype.metricsData = function () {
  throw Br(Q._className, "metricsData");
};
Q.prototype.processMetricsData = function () {
  throw Br(Q._className, "processMetricsData");
};
Q.prototype.knownFields = function () {
  return aT();
};
Q.prototype.baseVersion = function () {
  return 1;
};
Q.prototype.clientEventId = function (e) {
  return (e && e.clientEventId) || cT(!0);
};
Q.prototype.connection = function (e) {
  return (e && e.connection) || this.environment().connectionType();
};
Q.prototype.dsId = function (e) {
  return (e && e.dsId) || this.environment().dsId();
};
Q.prototype.eventTime = function (e) {
  return (e && e.eventTime) || Date.now();
};
Q.prototype.eventVersion = function (e) {
  return (e && e.eventVersion) || null;
};
Q.prototype.timezoneOffset = function (e) {
  return (e && e.timezoneOffset) || new Date().getTimezoneOffset();
};
Q.prototype.xpPostFrequency = function (e) {
  return (e && e.xpPostFrequency) || this._processor.config.value("postFrequency");
};
Q.prototype.xpSendMethod = function (i) {
  return (i && i.xpSendMethod) || this.eventRecorder().sendMethod();
};
var lT = { Base: Q },
  uT = d.attachDelegate,
  bu = me.exceptionString,
  dT = z.localStorageObject,
  hT = z.sessionStorageObject,
  Wo;
function Ie() {
  Wo ||
    ((Wo = !0),
    mu().forEach(function (i) {
      Ie.prototype[i] = function () {
        throw bu(Ie._className, i);
      };
    }),
    gu().forEach(function (i) {
      Ie.prototype[i] = function () {};
    }));
}
Ie._className = "system.environment";
Ie.prototype.setDelegate = function (e) {
  return uT(this, e);
};
Ie.prototype.connectionType = function () {
  throw bu(Ie._className, "connectionType");
};
Ie.prototype.dsId = function () {};
Ie.prototype.localStorageObject = dT;
Ie.prototype.sessionStorageObject = hT;
Ie.prototype.platformIdentifier = function () {};
var pT = { Environment: Ie };
function _u() {
  this._eventData = {};
}
_u.prototype.updateData = function () {
  d.extend.apply(null, [this._eventData].concat(Array.prototype.slice.call(arguments)));
};
var Tu = { MetricsData: _u },
  Eu = pT.Environment;
function ze() {
  Eu.apply(this, arguments);
}
ze.prototype = Object.create(Eu.prototype);
ze.prototype.constructor = ze;
ze.prototype.consumerId = function () {};
ze.prototype.consumerNs = function () {};
ze.prototype.isOffline = function () {};
ze.prototype.videoViewportHeight = function () {};
ze.prototype.videoViewportWidth = function () {};
var fT = d.attachDelegate,
  ku = me.exceptionString,
  Su = "PlayActivityProcessor.system.eventRecorder",
  Ci = function () {};
Ci.prototype.setDelegate = function (e) {
  return fT(this, e);
};
Ci.prototype.recordEvent = function (e, t) {
  throw ku(Su, "recordEvent");
};
Ci.prototype.sendMethod = function () {
  throw ku(Su, "sendMethod");
};
Ci.prototype.flushUnreportedEvents = function (e) {};
var yT = Ai("mt-metricskit-processor-play-activity"),
  mT = function () {
    ((this.environment = new ze()), (this.eventRecorder = new Ci()), (this.logger = yT));
  },
  Iu = function (e) {
    this._processor = e;
  };
Iu.prototype.applyFieldsMap = function (e, t) {
  return this._processor.config.value("fieldsMap").then(function (r) {
    return Nr.applyFieldsMap(e, t, r);
  });
};
var gT = function (e) {
    this.eventFields = new Iu(e);
  },
  A = {
    UNKNOWN: "unknown",
    NEXT: "next",
    PREVIOUS: "previous",
    LOCATION: "location",
    INTERVAL: "interval",
    PLAYHEAD: "playhead",
    SCRUB: "scrub",
    TRANSITION: "transition",
    INTERRUPTION: "interruption",
    BUFFERING: "buffering",
    PLAY: "play",
    SEEK: "seek",
    PLAY_OTHER: "playOther",
    SKIP_INTRO: "skipIntro",
    SKIP_TO_LIVE: "skipToLive",
  },
  de = {
    ACTION_TYPE: "actionType",
    CONSUMER_ID: "consumerId",
    CONSUMER_NS: "consumerNs",
    DS_ID: "dsId",
    EVENT_TYPE: "eventType",
    EVENT_VERSION: "eventVersion",
    IS_OFFLINE: "isOffline",
    VIDEO_VIEWPORT_HEIGHT: "videoViewportHeight",
    VIDEO_VIEWPORT_WIDTH: "videoViewportWidth",
  },
  pt = {
    TYPE: { MANUAL: "manual", AUTOMATIC: "automatic", UNKNOWN: A.UNKNOWN },
    ASSET_PLACEMENT: {
      PRE_ROLL: "preroll",
      POST_ROLL: "postroll",
      MID_ROLL: "midroll",
      FEATURE: "feature",
      CATCH_UP_TO_LIVE: "catchUpToLive",
    },
    PLAY_START_REASON: {
      PLAY: A.PLAY,
      PLAY_OTHER: A.PLAY_OTHER,
      UNPAUSE: "unpause",
      NEXT: A.NEXT,
      PREVIOUS: A.PREVIOUS,
      SEEK: A.SEEK,
      TRANSITION: A.TRANSITION,
      INTERRUPTION: A.INTERRUPTION,
      FOREGROUND: "foreground",
      FOCUS: "focus",
      BUFFERING: A.BUFFERING,
      UNKNOWN: A.UNKNOWN,
      SKIP_TO_LIVE: A.SKIP_TO_LIVE,
    },
    PLAY_START_REASON_TYPE: { SKIP_INTRO: A.SKIP_INTRO, SKIP_TO_LIVE: A.SKIP_TO_LIVE },
    PLAY_STOP_REASON: {
      COMPLETE: "complete",
      TRANSITION: A.TRANSITION,
      PLAY_OTHER: A.PLAY_OTHER,
      PAUSE: "pause",
      SEEK: A.SEEK,
      NEXT: A.NEXT,
      INTERRUPTION: A.INTERRUPTION,
      BACKGROUND: "background",
      EXIT: "exit",
      INACTIVITY: "inactivity",
      BUFFERING: A.BUFFERING,
      ERROR: "error",
      FAILURE: "failure",
      UNKNOWN: A.UNKNOWN,
      CLOSE_PLAYER: "closePlayer",
      SKIP_TO_LIVE: A.SKIP_TO_LIVE,
    },
    PLAY_STOP_REASON_TYPE: { SKIP_INTRO: A.SKIP_INTRO, SKIP_TO_LIVE: A.SKIP_TO_LIVE },
    SEEK_START_REASON: {
      NEXT: A.NEXT,
      PREVIOUS: A.PREVIOUS,
      LOCATION: A.LOCATION,
      INTERVAL: A.INTERVAL,
      PLAYHEAD: A.PLAYHEAD,
      SCRUB: A.SCRUB,
      UNKNOWN: A.UNKNOWN,
      SKIP_INTRO: A.SKIP_INTRO,
    },
    SEEK_STOP_REASON: {
      NEXT: A.NEXT,
      PREVIOUS: A.PREVIOUS,
      LOCATION: A.LOCATION,
      INTERVAL: A.INTERVAL,
      PLAYHEAD: A.PLAYHEAD,
      SCRUB: A.SCRUB,
      UNKNOWN: A.UNKNOWN,
      SEEK: A.SEEK,
      SKIP_INTRO: A.SKIP_INTRO,
    },
    SEEK_STOP_REASON_TYPE: { SKIP_INTRO: A.SKIP_INTRO },
  },
  Pu = {
    ACTIVITY_TYPE: { PLAY: A.PLAY, SEEK: A.SEEK },
    ACTION_TYPE: { START: "start", STOP: "stop" },
    EVENT_TYPE: { PLAY_ACTIVITY: "playActivity", SEEK_ACTIVITY: "seekActivity" },
  },
  aa = { INCLUDES_START_POSITIONS: "includesStartPositions", INCLUDES_END_POSITIONS: "includesEndPositions" },
  Y = function (e, t) {
    ((this._processor = e),
      (this._activityType = t),
      (this._startMetricsDataPromise = Promise.resolve(null)),
      (this._isStopped = !1));
  };
Y.ACTIVITY_TYPE = Pu.ACTIVITY_TYPE;
Object.defineProperties(Y.prototype, {
  isStopped: {
    get: function () {
      return this._isStopped;
    },
  },
  type: {
    get: function () {
      return this._activityType;
    },
  },
  startOverallPosition: {
    get: function () {
      return this._startMetricsDataPromise
        ? this._startMetricsDataPromise.then(function (i) {
            return i.overallPosition;
          })
        : Promise.resolve(null);
    },
  },
});
d.extend(Y.prototype, pt);
Y.prototype.started = function (e, t, r, s) {
  var n = this._startEventHandler(),
    a = this;
  if (n) {
    if (((this._startMetricsDataPromise = n.metricsData.apply(n, arguments)), this.type != Y.ACTIVITY_TYPE.SEEK))
      return this._processor.system.eventRecorder.recordEvent(
        this._processor.config.topic(),
        this._startMetricsDataPromise,
      );
  } else
    a._processor.system.logger.error(
      'Failed to record the start event with activityType: "' +
        r +
        '" due to unexpected current type "' +
        this.type +
        '", expected "' +
        Y.ACTIVITY_TYPE.PLAY +
        '" or "' +
        Y.ACTIVITY_TYPE.SEEK +
        '"',
    );
  return Promise.resolve(null);
};
Y.prototype.stopped = function (e, t, r, s) {
  var n = Array.prototype.slice.call(arguments),
    a = this._stopEventHandler(),
    o = this;
  if (a) {
    this._isStopped = !0;
    var c = this._startMetricsDataPromise.then(function (l) {
      var h = [e, t, r, s, l].concat(Array.prototype.slice.call(n, 4));
      return a.metricsData.apply(a, h);
    });
    return o._processor.system.eventRecorder.recordEvent(o._processor.config.topic(), c);
  } else
    o._processor.system.logger.error(
      'Failed to record the stop event with activityType: "' +
        r +
        '" due to unexpected current type "' +
        this.type +
        '", expected "' +
        Y.ACTIVITY_TYPE.PLAY +
        '" or "' +
        Y.ACTIVITY_TYPE.SEEK +
        '"',
    );
  return Promise.resolve(null);
};
Y.prototype._startEventHandler = function () {
  var e;
  switch (this.type) {
    case Y.ACTIVITY_TYPE.PLAY:
      e = this._processor.eventHandlers.playStart;
      break;
    case Y.ACTIVITY_TYPE.SEEK:
      e = this._processor.eventHandlers.seekStart;
      break;
  }
  return e;
};
Y.prototype._stopEventHandler = function () {
  var e;
  switch (this.type) {
    case Y.ACTIVITY_TYPE.PLAY:
      e = this._processor.eventHandlers.playStop;
      break;
    case Y.ACTIVITY_TYPE.SEEK:
      e = this._processor.eventHandlers.seekStop;
      break;
  }
  return e;
};
var vT = d.isInteger,
  Oi = function (e, t, r) {
    ((this._date = new Date()),
      (this._position = t),
      this._validatePlaybackRate(e),
      (this._playbackRate = e),
      (this._logger = r));
  };
Object.defineProperties(Oi.prototype, {
  playbackRate: {
    get: function () {
      return this._playbackRate;
    },
  },
});
Oi.prototype.update = function (e, t) {
  ((this._date = new Date()), (this._position = t), this._validatePlaybackRate(e), (this._playbackRate = e));
};
Oi.prototype.estimatedTime = function (e) {
  var t;
  vT(e) ? (t = e) : (this._logger.error("VPAFKit error: position should be an integer"), (t = Math.round(e)));
  var r = t - this._position,
    s = this.playbackRate == 0 ? 1 : this.playbackRate,
    n = r / s;
  return this._date.getTime() + Math.round(n);
};
Oi.prototype._validatePlaybackRate = function (e) {
  e == 0 && this._logger.error("VPAFKit error: playbackRate should not be zero.");
};
var bT = d.attachDelegate,
  _T = d.extend,
  wu = d.isFunction,
  TT = d.isNumber,
  Au = Tu.MetricsData,
  Ru = aa.INCLUDES_START_POSITIONS,
  ET = aa.INCLUDES_END_POSITIONS,
  K = function (e, t) {
    (Au.apply(this, arguments),
      (this._processor = e),
      (this._playlist = t),
      (this._playActivity = null),
      (this._playStartPlaylistItem = null),
      (this._seekActivity = null),
      (this._timeTracker = null),
      (this._shouldGenerateTransitions = !0));
  };
K.prototype = Object.create(Au.prototype);
K.prototype.constructor = K;
_T(K.prototype, pt);
Object.defineProperties(K.prototype, {
  shouldGenerateTransitions: {
    get: function () {
      return this._shouldGenerateTransitions;
    },
    set: function (i) {
      this._shouldGenerateTransitions = i;
    },
  },
});
K.prototype.setDelegate = function (e) {
  return bT(this, e);
};
K.prototype.playStarted = function (e, t, r) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
K.prototype.playStartedWithPlaybackRate = function (e, t, r, s) {
  var n = Promise.resolve(),
    a = this;
  if (this._hasUnstoppedActivity(this._playActivity))
    this._error("inconsistent state: did you forget to call playStopped?");
  else {
    var o = this._playlistItem(t, Ru);
    o
      ? (n = this._playStarted
          .apply(this, [o].concat(Array.prototype.slice.call(arguments, 1)))
          .then(function () {
            a.shouldGenerateTransitions && (a._timeTracker = new Oi(e, t, a._processor.system.logger));
          })
          .catch(function (c) {
            a._error(c);
          }))
      : this._error(
          'Failed to record play start event due to no active playlist item for the overall position "' + t + '".',
        );
  }
  return n;
};
K.prototype.playStopped = function (e, t, r) {
  var s = this._generatePlaylistTransitionsIfNecessary(e),
    n = this,
    a = Array.prototype.slice.call(arguments);
  return (
    this._hasUnstoppedActivity(this._playActivity)
      ? (s = s
          .then(function () {
            var o = n._playStopped.apply(n, Array.prototype.slice.call(a));
            return ((n._playStartPlaylistItem = null), (n._timeTracker = null), o);
          })
          .catch(function (o) {
            n._error(o);
          }))
      : this._error("inconsistent state: did you forget to call playStarted?"),
    s
  );
};
K.prototype.playTransitioned = function (e) {
  var t = this,
    r = Array.prototype.slice.call(arguments, 1);
  return this.playStopped
    .apply(this, [e, this.TYPE.AUTOMATIC, this.PLAY_STOP_REASON.TRANSITION].concat(r))
    .then(function () {
      return t.playStarted.apply(t, [e, t.TYPE.AUTOMATIC, t.PLAY_START_REASON.TRANSITION].concat(r));
    })
    .catch(function (s) {
      t._error(s);
    });
};
K.prototype.seekStarted = function (e, t, r) {
  var s = Promise.resolve();
  if (this._hasUnstoppedActivity(this._seekActivity))
    this._error("inconsistent state: did you forget to call seekStopped?");
  else {
    var n = this._playlistItem(e, Ru);
    if (n) {
      var a = this._activityArguments.apply(this, [n].concat(Array.prototype.slice.call(arguments)));
      this._seekActivity = new Y(this._processor, Y.ACTIVITY_TYPE.SEEK);
      var o = this;
      s = this._seekActivity.started.apply(this._seekActivity, a).catch(function (c) {
        o._error(c);
      });
    } else
      this._error(
        'Failed to record seek start event due to no active playlist item for the overall position "' + e + '".',
      );
  }
  return s;
};
K.prototype.seekStopped = function (e, t, r) {
  var s = Promise.resolve(),
    n = this._playlistItem(e, ET);
  if (n && this._hasUnstoppedActivity(this._seekActivity)) {
    var a = this._activityArguments.apply(this, [n].concat(Array.prototype.slice.call(arguments))),
      o = this;
    s = this._seekActivity.stopped.apply(this._seekActivity, a).catch(function (c) {
      o._error(c);
    });
  } else this._error("inconsistent state: did you forget to call seekStarted?");
  return s;
};
K.prototype.synchronize = function (e, t) {
  if (this.shouldGenerateTransitions) {
    var r = e > 0,
      s = this._hasUnstoppedActivity(this._playActivity),
      n = Promise.resolve(),
      a = this;
    return (
      s && r
        ? (n = this._generatePlaylistTransitionsIfNecessary(t)
            .then(function () {
              a._timeTracker.update(e, t);
            })
            .catch(function (o) {
              a._error(o);
            }))
        : s && !r
          ? this._error("inconsistent state: did you forget to call playStopped?")
          : !s && r && this._error("inconsistent state: did you forget to call playStarted?"),
      n
    );
  }
};
K.prototype._playStarted = function (e, t, r, s) {
  var n = this._activityArguments.apply(this, [e].concat(Array.prototype.slice.call(arguments, 1)));
  return (
    (this._playStartPlaylistItem = e),
    (this._playActivity = new Y(this._processor, Y.ACTIVITY_TYPE.PLAY)),
    this._playActivity.started.apply(this._playActivity, n)
  );
};
K.prototype._playStopped = function (e, t, r) {
  var s = this._playStartPlaylistItem,
    n = this._activityArguments.apply(this, [s].concat(Array.prototype.slice.call(arguments)));
  return this._playActivity.stopped.apply(this._playActivity, n);
};
K.prototype._playlistItem = function (e, t) {
  var r;
  return (
    this._playlist && wu(this._playlist.getItem) && (r = this._playlist.getItem(e, t)),
    r || this._error("unable to get item from playlist"),
    r
  );
};
K.prototype._playlistItems = function (e, t) {
  var r = [];
  return (
    this._playlist && wu(this._playlist.getItems)
      ? (r = this._playlist.getItems(e, t))
      : this._error("unable to get items from playlist"),
    r
  );
};
K.prototype._relativePosition = function (e, t) {
  t = t || this._playlistItem(e);
  var r;
  return (t && TT(t.startOverallPosition) && (r = e - t.startOverallPosition + (t.startPosition || 0)), r);
};
K.prototype._combineEventData = function (e, t) {
  var r = this._playlist ? this._playlist.eventData : null,
    s = e ? e.eventData : null,
    n = [];
  return (r && n.push(r), s && n.push(s), this._eventData && n.push(this._eventData), t && (n = n.concat(t)), n);
};
K.prototype._activityArguments = function (e, t, r, s) {
  var n = this._relativePosition(t, e),
    a = this._combineEventData(e, Array.prototype.slice.call(arguments, 4)),
    o = [n, t, r, s].concat(a);
  return o;
};
K.prototype._generatePlaylistTransitionsIfNecessary = function (e) {
  var t = this,
    r = Promise.resolve();
  return (
    this.shouldGenerateTransitions &&
      this._hasUnstoppedActivity(this._playActivity) &&
      (r = this._playActivity.startOverallPosition
        .then(function (s) {
          return s || 0;
        })
        .then(function (s) {
          var n = t._playlistItems(s, e),
            a,
            o,
            c = Promise.resolve();
          t._playlist._returnsOrderedItems || n.sort(t._playlistItemComparator);
          for (var l = 0; l + 1 < n.length; l++)
            if (((o = n[l + 1]), (a = o.startOverallPosition), !(a <= s))) {
              if (a >= e) break;
              c = c.then(
                function () {
                  var h = this,
                    m = h.startOverallPosition,
                    y = { eventTime: t._timeTracker ? t._timeTracker.estimatedTime(m) : null };
                  return t._playStopped(m, t.TYPE.AUTOMATIC, t.PLAY_STOP_REASON.TRANSITION, y).then(function () {
                    return t._playStarted(h, m, t.TYPE.AUTOMATIC, t.PLAY_START_REASON.TRANSITION, y);
                  });
                }.bind(o),
              );
            }
          return c;
        })),
    r
  );
};
K.prototype._hasUnstoppedActivity = function (e) {
  return e && !e.isStopped;
};
K.prototype._error = function (e) {
  this._processor.system.logger.error(this.constructor.name + " error: " + e);
};
K.prototype._playlistItemComparator = function (e, t) {
  return e.startOverallPosition == t.startOverallPosition
    ? 0
    : e.startOverallPosition < t.startOverallPosition
      ? -1
      : 1;
};
var ve = function (e, t) {
  K.apply(this, arguments);
};
ve.prototype = Object.create(K.prototype);
ve.prototype.constructor = ve;
Object.defineProperty(ve.prototype, "shouldGenerateTransitions", {
  get: function () {
    return !1;
  },
  set: function () {
    this._error(
      'Changing "shouldGenerateTransitions" is not allowed in HLSRollItemsMediaActivityTracker. Please use correct play activity tracker if you need to automatically generate transition play activity events ',
    );
  },
});
ve.prototype.playStarted = function (e, t, r, s) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
ve.prototype.playStartedWithPlaybackRate = function (e, t, r, s, n) {
  var a = Promise.resolve(),
    o = this;
  if (t < n.start * 1e3 || t > (n.start + n.duration) * 1e3)
    return (this._error("The giving overallPosition(" + t + ") is not in the given roll item's timeframe."), a);
  if (this._hasUnstoppedActivity(this._playActivity))
    this._error("inconsistent state: did you forget to call playStopped?");
  else {
    var c = this._playlistItem(n);
    c
      ? (a = this._playStarted
          .apply(this, [c, t, r, s].concat(Array.prototype.slice.call(arguments, 5)))
          .catch(function (l) {
            o._error(l);
          }))
      : this._error(
          'Failed to record play start event due to no active playlist item for the roll item info startOverallPos("' +
            n.start +
            '"), duration("' +
            n.duration +
            '").',
        );
  }
  return a;
};
ve.prototype.jumpFromOverallPosition = function (e, t, r) {
  var s = Promise.resolve(),
    n = Array.prototype.slice.call(arguments, 3),
    a = this;
  return e < t.start * 1e3 || e > (t.start + t.duration) * 1e3
    ? (this._error("The giving overallPosition(" + e + ") is not in the given roll item's timeframe."), s)
    : (this._hasUnstoppedActivity(this._playActivity) &&
        (s = this.playStopped.apply(this, [e, this.TYPE.AUTOMATIC, this.PLAY_STOP_REASON.NEXT].concat(n))),
      (s = s
        .then(function () {
          return a.seekStarted.apply(a, [e, a.TYPE.AUTOMATIC, a.SEEK_START_REASON.NEXT, t].concat(n));
        })
        .then(function () {
          return a.seekStopped.apply(a, [r.start * 1e3, a.TYPE.AUTOMATIC, a.SEEK_STOP_REASON.NEXT, r].concat(n));
        })
        .then(function () {
          return a.playStarted.apply(a, [r.start * 1e3, a.TYPE.AUTOMATIC, a.PLAY_START_REASON.NEXT, r].concat(n));
        })),
      s);
};
ve.prototype.playStopped = function (e, t, r) {
  var s = this,
    n = Promise.resolve();
  if (this._hasUnstoppedActivity(this._playActivity)) {
    if (e < this._playStartPlaylistItem.startOverallPosition || e > this._playStartPlaylistItem.endOverallPosition)
      return (
        this._error(
          "inconsistent state: the stop-overall-position(" +
            e +
            ") is out of the active rollItem(" +
            this._playStartPlaylistItem.startOverallPosition +
            "," +
            this._playStartPlaylistItem.endOverallPosition +
            ").",
        ),
        n
      );
    var a = Array.prototype.slice.call(arguments);
    n = n
      .then(function () {
        var o = s._playStopped.apply(s, Array.prototype.slice.call(a));
        return ((s._playStartPlaylistItem = null), (s._timeTracker = null), o);
      })
      .catch(function (o) {
        s._error(o);
      });
  } else this._error("inconsistent state: did you forget to call playStarted?");
  return n;
};
ve.prototype.seekStarted = function (e, t, r, s) {
  var n = Promise.resolve();
  if (e < s.start * 1e3 || e > (s.start + s.duration) * 1e3)
    return (this._error("The giving overallPosition(" + e + ") is not in the given roll item's timeframe."), n);
  if (this._hasUnstoppedActivity(this._seekActivity))
    this._error("inconsistent state: did you forget to call seekStopped?");
  else {
    var a = this._playlistItem(s);
    if (a) {
      var o = this._activityArguments.apply(this, [a, e, t, r].concat(Array.prototype.slice.call(arguments, 4)));
      this._seekActivity = new Y(this._processor, Y.ACTIVITY_TYPE.SEEK);
      var c = this;
      n = this._seekActivity.started.apply(this._seekActivity, o).catch(function (l) {
        c._error(l);
      });
    } else
      this._error(
        'Failed to record seek start event due to no active playlist item for the roll item info startOverallPos("' +
          s.start +
          '"), duration("' +
          s.duration +
          '").',
      );
  }
  return n;
};
ve.prototype.seekStopped = function (e, t, r, s) {
  var n = Promise.resolve(),
    a = this._playlistItem(s);
  if (a && this._hasUnstoppedActivity(this._seekActivity)) {
    var o = this._activityArguments.apply(this, [a, e, t, r].concat(Array.prototype.slice.call(arguments, 4))),
      c = this;
    n = this._seekActivity.stopped.apply(this._seekActivity, o).catch(function (l) {
      c._error(l);
    });
  } else this._error("inconsistent state: did you forget to call seekStarted?");
  return n;
};
ve.prototype._playlistItem = function (e) {
  var t;
  return (
    this._playlist &&
      d.isFunction(this._playlist.getItemForRollItem) &&
      (t = this._playlist.getItemForRollItem(e.start * 1e3, e.duration * 1e3)),
    t || this._error("unable to get item from playlist"),
    t
  );
};
ve.prototype._relativePosition = function (e, t) {
  var r;
  return d.isDefinedNonNull(t)
    ? (t && d.isNumber(t.startOverallPosition) && (r = e - t.startOverallPosition + (t.startPosition || 0)), r)
    : (this._error("please provide the active playlist item for calculating the relative position."), r);
};
var Cu = Tu.MetricsData,
  bt = function (e) {
    (Cu.apply(this, arguments), (this._startOverallPosition = e), (this._startPosition = 0));
  };
bt.prototype = new Cu();
bt.prototype.constructor = bt;
Object.defineProperties(bt.prototype, {
  startOverallPosition: {
    get: function () {
      return this._startOverallPosition;
    },
  },
  startPosition: {
    get: function () {
      return this._startPosition;
    },
    set: function (i) {
      this._startPosition = i;
    },
  },
  eventData: {
    get: function () {
      return this._eventData;
    },
  },
});
var Ft = function (e, t) {
  (bt.apply(this, arguments), (this._duration = t));
};
Ft.prototype = new bt();
Ft.prototype.constructor = Ft;
Object.defineProperties(Ft.prototype, {
  duration: {
    get: function () {
      return this._duration;
    },
  },
  endOverallPosition: {
    get: function () {
      return this.startOverallPosition + this.duration;
    },
  },
});
Ft.prototype.containsOverallPosition = function (e) {
  return this.startOverallPosition <= e && this.endOverallPosition > e;
};
var zt = function () {};
zt.prototype.RANGE_OPTIONS = aa;
Object.defineProperties(zt.prototype, { eventData: { get: function () {} } });
zt.prototype.getItem = function (e, t) {};
zt.prototype.getItems = function (e, t) {};
var ne = function (e) {
  (zt.apply(this, arguments),
    (this._startPosition = e),
    (this._mainFeatureMetricsData = d.copyKeysAndValues.apply(
      null,
      [!1, !1, !1, null].concat(Array.prototype.slice.call(arguments, 1)),
    )),
    (this._rollItems = []));
};
ne.prototype = new zt();
ne.prototype.constructor = ne;
ne.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ne.prototype.addRollInfoItems = function (e) {
  e &&
    e.length &&
    e.forEach(function (t) {
      this.addRollInfoItem(t);
    }, this);
};
ne.prototype.addRollInfoItem = function (e) {
  e && this.addRollItem(e.start * 1e3, e.duration * 1e3, e.metricsData);
};
ne.prototype.addRollItem = function (e, t) {
  var r = new Ft(e, t);
  (r.updateData.apply(r, Array.prototype.slice.call(arguments, 2)), this._addRollItem(r));
};
ne.prototype.updateMainFeatureMetricsData = function () {
  d.extend.apply(null, [this._mainFeatureMetricsData].concat(Array.prototype.slice.call(arguments)));
};
ne.prototype.getItemForRollItem = function (e, t) {
  var r = this._indexOfLastRollItemWithStartBeforePosition(e),
    s = this._rollItems[r];
  return d.isDefinedNonNull(s) && s.duration === t ? s : null;
};
ne.prototype.getItem = function (e, t) {
  var r = this._indexOfLastRollItemWithStartBeforePosition(e),
    s;
  if (!d.isInteger(r)) s = this._mainFeatureItemWithStartOverallPosition(this._startPosition);
  else {
    for (; t != this.RANGE_OPTIONS.INCLUDES_START_POSITIONS && this._rollItems[r].startOverallPosition == e && r > 0;)
      r--;
    ((s = this._rollItems[r]),
      !s.containsOverallPosition(e) &&
        (t != this.RANGE_OPTIONS.INCLUDES_END_POSITIONS || s.endOverallPosition != e) &&
        (s = this._mainFeatureItemWithStartOverallPosition(s.endOverallPosition)));
  }
  return s;
};
ne.prototype.getItems = function (e, t) {
  var r = [];
  if (!this._rollItems.length) r.push(this._mainFeatureItemWithStartOverallPosition(this._startPosition));
  else {
    var s = this._indexOfLastRollItemWithStartBeforePosition(e);
    for (
      d.isInteger(s) || (r.push(this._mainFeatureItemWithStartOverallPosition(this._startPosition)), (s = 0));
      s < this._rollItems.length;
    ) {
      var n = this._rollItems[s];
      if (n.startOverallPosition > t) break;
      if ((n.endOverallPosition >= e && r.push(n), s++, n.endOverallPosition < t))
        if (s < this._rollItems.length) {
          var a = this._rollItems[s];
          a.startOverallPosition &&
            a.startOverallPosition > n.endOverallPosition &&
            r.push(this._mainFeatureItemWithStartOverallPosition(n.endOverallPosition));
        } else r.push(this._mainFeatureItemWithStartOverallPosition(n.endOverallPosition));
    }
  }
  return r;
};
ne.prototype._addRollItem = function (e) {
  if (e) {
    var t = this._insertionIndexForItemWithPosition(e.startOverallPosition);
    this._rollItems.splice(t, 0, e);
  }
};
ne.prototype._indexOfLastRollItemWithStartBeforePosition = function (e) {
  var t,
    r = this._rollItems[0];
  return (
    r && d.isInteger(e) && r.startOverallPosition <= e && (t = this._insertionIndexForItemWithPosition(e) - 1), t
  );
};
ne.prototype._insertionIndexForItemWithPosition = function (e) {
  for (var t = 0, r = this._rollItems.length; t < r;) {
    var s = Math.floor((t + r) / 2),
      n = this._rollItems[s];
    n.startOverallPosition > e ? (r = s) : (t = s + 1);
  }
  return t;
};
ne.prototype._mainFeatureItemWithStartOverallPosition = function (e) {
  var t = new bt(e);
  return ((t.startPosition = this._featurePlayheadProgress(e)), t.updateData(this._mainFeatureMetricsData), t);
};
ne.prototype._featurePlayheadProgress = function (e) {
  e = e || 0;
  var t = this._indexOfLastRollItemWithStartBeforePosition(e),
    r = this._startPosition || 0,
    s,
    n;
  d.isInteger(t) || (t = -1);
  for (var a = t; a >= 0; a--)
    ((s = this._rollItems[a]),
      a === 0
        ? (r += s.startOverallPosition)
        : ((n = this._rollItems[a - 1]), (r += s.startOverallPosition - n.endOverallPosition)));
  return r;
};
var Di = function (e) {
  this._processor = e;
};
Di.prototype.createTracker = function (e) {
  var t = new K(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Di.prototype.createHLSRollItemsMediaActivityTracker = function (e) {
  var t = new ve(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Di.prototype.createHLSVideoPlaylist = function (e) {
  var t = new ne(e);
  return (t.updateMainFeatureMetricsData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Di.prototype.createMediaPlaylist = function (e) {
  return this.createHLSVideoPlaylist.apply(this, arguments);
};
var Ou = me.exceptionString,
  Mi = function (e) {
    this._processor = e;
  };
Mi.prototype.knownFields = function () {
  throw Ou("PlayActivityEventHandler", "knownFields");
};
Mi.prototype.eventType = function (i) {
  throw Ou("PlayActivityEventHandler", "eventType");
};
Mi.prototype.processMetricsData = function () {
  var e = Array.prototype.slice.call(arguments),
    t = this.eventType(e),
    r = this._processor.config,
    s = this._processor._constraints,
    n = this;
  return r
    .metricsDisabledOrBlacklistedEvent(t)
    .then(function (a) {
      if (a) throw "event was disabled";
    })
    .then(function () {
      var a = n._processor.eventHandlers.base,
        o = a.metricsData.apply(a, e);
      return o;
    })
    .then(function (a) {
      var o = [];
      e = [a].concat(e);
      var c = Nr.processMetricsData(n, n.knownFields(), !0, e),
        l = {};
      return (
        Object.keys(c).forEach(function (h) {
          var m = c[h],
            y = Promise.resolve(m).then(function (k) {
              l[h] = k;
            });
          o.push(y);
        }),
        Promise.all(o).then(function () {
          return l;
        })
      );
    })
    .then(function (a) {
      return s.applyConstraintTreatments(a);
    })
    .then(function (a) {
      return r.removeBlacklistedFields(a);
    })
    .catch(function (a) {
      return (
        n._processor.system.logger.error(
          "PlayActivity Processor: Unable to generate the event (" +
            n.eventType(e) +
            ") for the topic " +
            r.topic() +
            ", due to " +
            a,
        ),
        null
      );
    });
};
var kT = d.attachDelegate,
  ST = d.extend,
  Z = function (e, t, r) {
    (Mi.call(this, e), (this._defaultEventType = t), (this._reasonConstants = r), this._defaultActionType);
  };
Z.prototype = Object.create(Mi.prototype);
Z.prototype.constructor = Z;
ST(Z, Pu);
Object.defineProperties(Z.prototype, {
  TYPE: {
    get: function () {
      return pt.TYPE;
    },
  },
  REASON: {
    get: function () {
      return this._reasonConstants;
    },
  },
});
Z.prototype.setDelegate = function (e) {
  return kT(this, e);
};
Z.prototype.knownFields = function () {
  var e = [de.ACTION_TYPE, de.EVENT_TYPE, de.EVENT_VERSION];
  return e;
};
Z.prototype.eventType = function (e) {
  return this._defaultEventType;
};
Z.prototype.eventVersion = function (e) {
  var t = this._processor.eventHandlers.base.eventVersion(e);
  return t !== null ? t : 1;
};
Z.prototype.actionType = function (e) {
  return this._defaultActionType;
};
var Kt = function (e, t, r) {
  (Z.apply(this, arguments), (this._defaultActionType = Z.ACTION_TYPE.START));
};
Kt.prototype = Object.create(Z.prototype);
Kt.prototype.constructor = Kt;
Kt.prototype.metricsData = function (e, t, r, s) {
  var n = { position: e, overallPosition: t, startType: r, startReason: s },
    a = Array.prototype.slice.call(arguments, 4);
  return this.processMetricsData.apply(this, [n].concat(a));
};
var Bt = function (e, t, r) {
  (Z.apply(this, arguments), (this._defaultActionType = Z.ACTION_TYPE.STOP));
};
Bt.prototype = Object.create(Z.prototype);
Bt.prototype.constructor = Bt;
Bt.prototype.metricsData = function (e, t, r, s, n) {
  var a = this.eventType();
  n = n || {};
  var o = {
    position: e,
    overallPosition: t,
    stopType: r,
    stopReason: s,
    startPosition: n.position,
    startOverallPosition: n.overallPosition,
    startTime: n.eventTime,
    startType: n.startType,
    startReason: n.startReason,
    startReasonType: n.startReasonType,
  };
  a === Z.EVENT_TYPE.SEEK_ACTIVITY && (o.startAssetId = n.assetId);
  var c = Array.prototype.slice.call(arguments, 5);
  return this.processMetricsData.apply(this, [o].concat(c));
};
var oa = lT.Base,
  be = function (e) {
    oa.apply(this, arguments);
  };
be.prototype = Object.create(oa.prototype);
be.prototype.constructor = be;
be.prototype.environment = function () {
  return this._processor.system.environment;
};
be.prototype.eventRecorder = function () {
  return this._processor.system.eventRecorder;
};
be.prototype.knownFields = function () {
  var e = oa.prototype
    .knownFields()
    .concat([
      de.ACTION_TYPE,
      de.CONSUMER_ID,
      de.CONSUMER_NS,
      de.DS_ID,
      de.IS_OFFLINE,
      de.VIDEO_VIEWPORT_HEIGHT,
      de.VIDEO_VIEWPORT_WIDTH,
    ]);
  return e;
};
be.prototype.consumerId = function (e) {
  var t = de.CONSUMER_ID;
  return e && t in e ? e[t] : this.environment().consumerId();
};
be.prototype.consumerNs = function (e) {
  var t = de.CONSUMER_NS;
  return e && t in e ? e[t] : this.environment().consumerNs();
};
be.prototype.isOffline = function (e) {
  var t = de.IS_OFFLINE;
  return e && t in e ? e[t] : this.environment().isOffline();
};
be.prototype.videoViewportHeight = function (e) {
  var t = de.VIDEO_VIEWPORT_HEIGHT;
  return e && t in e ? e[t] : this.environment().videoViewportHeight();
};
be.prototype.videoViewportWidth = function (e) {
  var t = de.VIDEO_VIEWPORT_WIDTH;
  return e && t in e ? e[t] : this.environment().videoViewportWidth();
};
be.prototype.metricsData = function () {
  var e = Array.prototype.slice.call(arguments),
    t = Nr.processMetricsData(this, this.knownFields(), !0, e);
  return t;
};
var IT = function (e) {
    ((this.base = new be(e)),
      (this.playStart = new Kt(e, Z.EVENT_TYPE.PLAY_ACTIVITY, pt.PLAY_START_REASON)),
      (this.playStop = new Bt(e, Z.EVENT_TYPE.PLAY_ACTIVITY, pt.PLAY_STOP_REASON)),
      (this.seekStart = new Kt(e, Z.EVENT_TYPE.SEEK_ACTIVITY, pt.SEEK_START_REASON)),
      (this.seekStop = new Bt(e, Z.EVENT_TYPE.SEEK_ACTIVITY, pt.SEEK_STOP_REASON)));
  },
  Du = function (e) {
    if (!d.isDefinedNonNull(e)) throw new Error("No delegate is provided to PlayActivityProcessor");
    ((this._initCalled = !1),
      (this._delegatePackage = e),
      (this.system = new mT()),
      (this.config = this._delegatePackage.config),
      (this.eventHandlers = new IT(this)),
      (this.utils = new gT(this)),
      (this.mediaActivityTracker = new Di(this)));
  };
Du.prototype.init = function () {
  var e = Promise.resolve();
  return (
    this._initCalled ||
      ((this._initCalled = !0),
      this._delegatePackage &&
        (d.setDelegates(this.eventHandlers, this._delegatePackage), d.setDelegates(this.system, this._delegatePackage)),
      sT(this.config),
      (e = this._delegatePackage.init()),
      (this._constraints = new Kr(this.config, { environment: this.system.environment }))),
    e
  );
};
Du.prototype.cleanup = function () {
  (this._delegatePackage && d.isFunction(this._delegatePackage.cleanup) && this._delegatePackage.cleanup(),
    this.config.cleanup(),
    d.resetDelegates(this.eventHandlers),
    d.resetDelegates(this.system),
    d.resetDelegates(this.utils),
    (this.config = null),
    (this.system = null),
    (this.eventHandlers = null),
    (this.utils = null),
    (this._delegatePackage = null),
    (this._constraints = null),
    (this._initCalled = !1));
};
const WT = new Map([
    [S.playbackPlay, "play"],
    [S.hlsLevelLoaded, "hlsMetadataLoaded"],
    [S.playbackPause, "pause"],
    [S.playbackScrub, "scrub"],
    [S.playbackSeek, "seek"],
    [S.playbackSkip, "skip"],
    [S.playbackStop, "stop"],
    [S.playerExit, "exit"],
  ]),
  GT = {
    [P.EXITED_APPLICATION]: "EXIT",
    [P.FAILED_TO_LOAD]: "FAILURE",
    [P.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM]: "PLAY_OTHER",
    [P.NATURAL_END_OF_TRACK]: "COMPLETE",
    [P.PLAYBACK_PAUSED_DUE_TO_INACTIVITY]: "INACTIVITY",
    [P.SCRUB_BEGIN]: "SEEK",
    [P.TRACK_SKIPPED_BACKWARDS]: "SEEK",
    [P.TRACK_SKIPPED_FORWARDS]: "SEEK",
    [P.PLAYBACK_SUSPENDED]: "CLOSE_PLAYER",
    [Lg.NEXT_ITEM]: "NEXT",
  },
  Ee = {
    UNKNOWN: "unknown",
    NEXT: "next",
    TRANSITION: "transition",
    INTERRUPTION: "interruption",
    BUFFERING: "buffering",
    PLAY: "play",
    SEEK: "seek",
    PLAY_OTHER: "playOther",
    SKIP_TO_LIVE: "skipToLive",
  },
  YT = {
    TYPE: { MANUAL: "manual", AUTOMATIC: "automatic" },
    PLAY_START_REASON: {
      PLAY: Ee.PLAY,
      PLAY_OTHER: Ee.PLAY_OTHER,
      UNPAUSE: "unpause",
      NEXT: Ee.NEXT,
      BUFFERING: Ee.BUFFERING,
    },
    PLAY_STOP_REASON: {
      COMPLETE: "complete",
      TRANSITION: Ee.TRANSITION,
      PLAY_OTHER: Ee.PLAY_OTHER,
      PAUSE: "pause",
      SEEK: Ee.SEEK,
      NEXT: Ee.NEXT,
      INTERRUPTION: Ee.INTERRUPTION,
      BACKGROUND: "background",
      EXIT: "exit",
      INACTIVITY: "inactivity",
      BUFFERING: Ee.BUFFERING,
      ERROR: "error",
      FAILURE: "failure",
      UNKNOWN: Ee.UNKNOWN,
      CLOSE_PLAYER: "closePlayer",
      SKIP_TO_LIVE: Ee.SKIP_TO_LIVE,
    },
  };
var PT = ((i) => (
  (i.SEEK_STARTED = "seekStarted"),
  (i.SEEK_STOPPED = "seekStopped"),
  (i.PLAY_STARTED = "playStarted"),
  (i.PLAY_STOPPED = "playStopped"),
  i
))(PT || {});
function zT(i) {
  return Math.round(i * 1e3);
}
function QT() {
  return Array.isArray(navigator.languages)
    ? navigator.languages
    : typeof navigator.language == "string"
      ? [navigator.language]
      : [];
}
function XT(i) {
  return { delegatedPlayback: i.playbackTargetIsWireless ? "Airplay" : "None" };
}
function JT(i) {
  return i.seekReasonType === je.Interval;
}
function Mu(i, e) {
  if (i == null) throw new Error(e);
}
function ZT(i, e) {
  Mu(i, `${e ?? "PAF"} Tracker: Attempted to track event without first calling createTracker()`);
}
function eE(i, e) {
  Mu(i, `${e ?? "PAF"} Tracker: Attempted to create tracker without first calling configure()`);
}
const pe = _.createChild("ctp"),
  vr = class vr {
    _isConfigured = !1;
    tracking;
    instance;
    rtcTracker;
    get active() {
      return this.rtcTracker !== void 0;
    }
    get isConfigured() {
      return this._isConfigured;
    }
    requestedEvents = [E.playInitiated, E.mediaCanPlay];
    async configure(e) {
      ((this.instance = e.instance),
        (this.rtcTracker = e.services.playActivity?.getTrackerByType(kl)),
        (this._isConfigured = !0));
    }
    handleEvent(e, t, r) {
      e === E.playInitiated
        ? (pe.debug("ClickToPlayTracker.handleEvent", e, t), this.registerPlay(t.item, t.timestamp))
        : e === E.mediaCanPlay &&
          (pe.debug("ClickToPlayTracker.handleEvent", e, t), this.trackPlay(this.instance.nowPlayingItem, t.timestamp));
    }
    registerPlay(e, t) {
      if (!this.active || e === void 0) {
        pe.debug("Not registring play: inactive");
        return;
      }
      if (t === void 0) {
        pe.warn(`registerPlay timestamp value for item ${e.id} is missing, discarding`);
        return;
      }
      return (
        this.tracking !== void 0 && pe.warn(`Replacing item ${this.tracking.item.id} with item ${e.id}`),
        pe.debug(`Registering ${e.id} initiated at ${t}`),
        (this.tracking = { item: e, initiatedTimestamp: t }),
        this.tracking
      );
    }
    trackPlay(e, t) {
      if (!this.active || e === void 0) {
        pe.debug("Not tracking play: inactive");
        return;
      }
      if (this.tracking === void 0) {
        pe.warn("ClickToPlayTracker.trackPlay called without a registered tracking item");
        return;
      }
      const r = t ?? Date.now(),
        s = this.tracking.initiatedTimestamp,
        n = r - s;
      if ((pe.debug(`trackPlay: item=${e.id}, initiated=${s}, started=${r}, timestampDiff=${n}`), s > r)) {
        pe.warn("Initiated timestamp is not before started timestamp, ignoring");
        return;
      }
      const a = this.getReportingAgent(e);
      if (a === void 0) {
        pe.warn(`No reporting agent for ${e.id}, discarding`);
        return;
      }
      return (
        pe.info(`Reporting playback success after ${n}ms`),
        a.issueReportingEvent(vr.EVENT_ID, {
          event: "playbackStartup",
          playbackStartupResult: "success",
          tapToFirstFrame: n,
          PlayType: e.isLinearStream ? "LIVE" : "VOD",
        }),
        (this.tracking = void 0),
        { item: e, initiatedTimestamp: s, playbackTimestamp: r }
      );
    }
    getReportingAgent(e) {
      if (this.rtcTracker === void 0) {
        pe.warn("Could not get RTCReportingAgent from RTCStreamingTracker service");
        return;
      }
      const t = this.rtcTracker.getMediaIdentifiers(e),
        r = this.rtcTracker.reportingAgent?.SessionInfo;
      if (t === void 0 || r === void 0) return;
      if (
        !Object.entries(t).every(function ([n, a]) {
          return r[n] === a;
        })
      ) {
        pe.warn(`RTCReportingAgent is not associated with item ${e.id}`);
        return;
      }
      return this.rtcTracker.reportingAgent;
    }
  };
ca(vr, "EVENT_ID", 4101);
let Go = vr;
function wT() {
  const i = {};
  i.version = nl();
  const e = el();
  ((i.hlsJSURL = e.hls),
    (i.rtcJSURL = e.rtc),
    (i.hlsJSVersion = window.Hls !== void 0 ? window.Hls.version : "not-loaded"));
  const t = Ib();
  i.instanceId = t?.id;
  const r = t?.services.runtime;
  return (
    (i.runtime =
      r === void 0
        ? void 0
        : {
            browser: `${r.browser.name} ${r.browser.version}`,
            engine: `${r.engine.name} ${r.engine.version}`,
            os: `${r.os.name} ${r.os.version}`,
            mobile: r.isMobile,
            keysystems: r.availableKeySystems,
          }),
    (i.controller = t?._playbackController?.controllerName ?? "none"),
    (i.player = t?._mediaItemPlayback?.getCurrentPlayer()?.playerName ?? "none"),
    (i.queue = {
      size: t?.queue?.length ?? 0,
      position: t?.queue?.position ?? -1,
      currentItem:
        t?.queue?.currentItem === void 0
          ? void 0
          : {
              id: t?.queue?.currentItem.id,
              type: t?.queue?.currentItem.type,
              title: t?.queue?.currentItem.title,
              attributes: t?.queue?.currentItem.attributes ?? {},
            },
    }),
    (i.nowPlayingItem =
      t?.nowPlayingItem === void 0
        ? void 0
        : {
            id: t.nowPlayingItem.id,
            type: t.nowPlayingItem.type,
            title: t.nowPlayingItem.title,
            attributes: t?.queue?.currentItem.attributes ?? {},
          }),
    (i.isPlaying = t?.isPlaying ?? !1),
    (i.playbackModes = {
      shuffle: ["off", "on"][t?.shuffleMode ?? 0],
      repeat: ["off", "one", "all"][t?.repeatMode ?? 0],
      autoplay: t?.autoplayEnabled === !0 ? "on" : "off",
    }),
    (i.devFlags = Object.entries(ai).reduce(function (s, [n, a]) {
      return { ...s, [n]: a.value };
    }, {})),
    i
  );
}
const tE = {
  get info() {
    return wT();
  },
  ...ai,
};
export {
  ws as $,
  Dp as A,
  T as B,
  ke as C,
  S as D,
  E,
  Mn as F,
  P as G,
  nl as H,
  ci as I,
  tE as J,
  el as K,
  qT as L,
  fi as M,
  ce as N,
  Ue as O,
  xe as P,
  Re as Q,
  $T as R,
  Or as S,
  jT as T,
  Ib as U,
  Lg as V,
  at as W,
  gh as X,
  Ni as Y,
  nd as Z,
  MT as _,
  Ke as a,
  oc as a0,
  Fh as a1,
  Ce as a2,
  dh as a3,
  hi as a4,
  od as a5,
  mh as a6,
  ht as a7,
  vh as a8,
  ki as a9,
  W as aA,
  lb as aB,
  YT as aC,
  jh as aD,
  oe as aE,
  kl as aF,
  Go as aG,
  HT as aH,
  Cl as aI,
  VT as aJ,
  qe as aK,
  Wg as aL,
  NT as aa,
  LT as ab,
  cc as ac,
  cn as ad,
  nt as ae,
  rt as af,
  Sr as ag,
  f as ah,
  x as ai,
  u as aj,
  CT as ak,
  Ud as al,
  tg as am,
  DT as an,
  _e as ao,
  ph as ap,
  fh as aq,
  yh as ar,
  OT as as,
  Bu as at,
  ee as au,
  It as av,
  M as aw,
  ac as ax,
  te as ay,
  FT as az,
  zT as b,
  je as c,
  KT as d,
  XT as e,
  UT as f,
  BT as g,
  ao as h,
  Up as i,
  xp as j,
  GT as k,
  _ as l,
  WT as m,
  Du as n,
  PT as o,
  Mm as p,
  JT as q,
  ZT as r,
  w as s,
  eE as t,
  Ks as u,
  I as v,
  Mu as w,
  H as x,
  QT as y,
  gm as z,
};
