var $u = Object.defineProperty;
var Hu = (i, e, t) => (e in i ? $u(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t));
var qr = (i, e, t) => Hu(i, typeof e != "symbol" ? e + "" : e, t);
import { _ as pa } from "./main.js";
function ju(i, e = 1) {
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
  return ju(i, 1 / 0);
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
function qu(i) {
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
function Tt(i) {
  const e = new Map();
  return function (...t) {
    const r = Wu(t);
    if (e.has(r)) return e.get(r);
    const s = i(...t);
    return (e.set(r, s), s);
  };
}
function Wu(i) {
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
function Si() {
  let i = Wr() + Wr();
  for (; i.length < 16;) i += Wr();
  return i.slice(0, 16);
}
function Wr() {
  return Math.random().toString(16).substring(2);
}
function fi(i) {
  if (i === void 0) return !1;
  const e = typeof i == "string" ? i : i.id;
  return /^[a|i|l|p]{1}\.[a-zA-Z0-9-]+$/.test(e);
}
const Gu = Tt((i) => /^(a\.)?[a-zA-Z0-9]+$/.test(i));
function $t() {
  return globalThis?.process?.versions?.node !== void 0 || typeof globalThis?.FastBoot < "u";
}
function yt() {
  return $t();
}
const ec = Tt($t() ? (i) => Zo.from(i, "base64").toString("binary") : (i) => window.atob(i));
Tt($t() ? (i) => Zo.from(i).toString("base64") : (i) => window.btoa(i));
const Yu = (i, e = 250, t = { isImmediate: !1 }) => {
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
  on = (i, e) => !!i && !!e && [].every.call(i, (t, r) => t === e[r]);
function zu(i) {
  if (!i || (i.startsWith("http") && !i.includes("?"))) return {};
  try {
    const e = i.split("?")[1] ?? i;
    return Qu(e, "&", decodeURIComponent);
  } catch {
    return {};
  }
}
function Qu(i, e = "&", t = (r) => r) {
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
const fa = () => {},
  We = (i) => {
    i.then(fa, fa);
  },
  Nt = Tt((i) => {
    const e = ec(i);
    return cn(e);
  });
function Xu(i = []) {
  return Array.isArray(i) ? i : [i];
}
const cn = Tt((i) => {
    const e = i.length,
      t = new ArrayBuffer(e),
      r = new Uint8Array(t);
    for (let s = 0; s < e; s++) r[s] = i.charCodeAt(s);
    return r;
  }),
  tc = Tt((i) => {
    const e = i.length,
      t = new ArrayBuffer(e * 2),
      r = new Uint16Array(t);
    for (let s = 0; s < e; s++) r[s] = i.charCodeAt(s);
    return r;
  }),
  Xe = Tt((i) => {
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
function Ve(i, e) {
  return Object.prototype.hasOwnProperty.call(Object(i), e);
}
function st(i) {
  const t = Object.prototype.toString.call(i).toLowerCase().slice(8, -1);
  switch (t) {
    case "set":
      return new Set([...i].map((r) => st(r)));
    case "map":
      return new Map([...i].map(([r, s]) => [st(r), st(s)]));
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
      return new s(st(r.buffer), r.byteOffset, t === "dataview" ? r.byteLength : r.length);
    }
    case "array":
    case "object": {
      const r = Array.isArray(i) ? [] : {};
      for (const s in i) Ve(i, s) && (r[s] = st(i[s]));
      return r;
    }
    default:
      return i;
  }
}
function Ju(i, e) {
  return e.split(".").reduce((t, r) => {
    if (t !== void 0) return t[r];
  }, i);
}
function Zu(i) {
  if (typeof i != "object") throw new TypeError("Source is not an Object");
  for (const e in i) if (Ve(i, e)) return !1;
  return !0;
}
function ed(i, e, t) {
  return e.split(".").reduce((r, s, n, a) => {
    const o = n === a.length - 1,
      c = Ve(r, s),
      l = r[s] instanceof Object,
      h = r[s] === null;
    if (!o && c && (!l || h))
      throw new TypeError(`Value at ${a.slice(0, n + 1).join(".")} in keypath is not an Object.`);
    return o ? ((r[s] = t), i) : c ? r[s] : (r[s] = {});
  }, i);
}
function td(i, e, t = !1) {
  return (
    t && (i = Object.keys(i).reduce((r, s) => ((r[i[s]] = s), r), {})),
    Object.keys(i).reduce((r, s) => {
      const n = i[s],
        a = typeof n == "function" ? n() : Ju(e, n);
      return (a && ed(r, s, a), r);
    }, {})
  );
}
function at(i = "", e = document.cookie) {
  const t = e.match(new RegExp(`(?:^|;\\s*)${i}=([^;]*)`));
  if (t) return t[1];
}
function id(i = "", e = document.cookie) {
  const t = new RegExp(`(?:^|;\\s*)${i}=([^;]*)`, "g");
  return (e.match(t) || []).map((r) => r.replace(new RegExp(`^;?\\s*${i}=`), ""));
}
function ln(i, e, t = "", r = 14, s, n) {
  const a = new Date();
  ((s = s ?? window), (n = n ?? (/\./.test(s.location.hostname) ? s.location.hostname : "")));
  const o = n.length > 0 ? `domain=${n}; ` : "";
  a.setTime(a.getTime() + r * 24 * 60 * 60 * 1e3);
  let c = "";
  (s.location.protocol === "https:" && (c = "; secure"),
    (s.document.cookie = `${i}=${e}; expires=${a.toUTCString()}; ${o}path=${t}${c}`));
}
function _s(i, e, t) {
  ln(i, "", "/", 0, e, t);
}
function ic() {
  let i = !1;
  try {
    i = typeof sessionStorage < "u";
  } catch {}
  return i;
}
function un() {
  let i;
  return (ic() && (i = sessionStorage), i);
}
function dn() {
  let i = !1;
  try {
    i = typeof localStorage < "u";
  } catch {}
  return i;
}
function Ie() {
  let i;
  return (dn() && (i = localStorage), i);
}
function rd(i) {
  if (!dn()) return;
  const e = Ie().getItem(i);
  if (e !== null) return e;
}
function sd(i) {
  const e = rd(i);
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return;
    }
}
function nd(i, e) {
  if (dn()) {
    if (!e) {
      Ie().setItem(i, "");
      return;
    }
    Ie().setItem(i, JSON.stringify(e));
  }
}
class Et {
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
      un()?.setItem(r, JSON.stringify(t));
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
let ad = function (e) {
  return od(e) && !cd(e);
};
function od(i) {
  return !!i && typeof i == "object";
}
function cd(i) {
  let e = Object.prototype.toString.call(i);
  return e === "[object RegExp]" || e === "[object Date]" || dd(i);
}
let ld = typeof Symbol == "function" && Symbol.for,
  ud = ld ? Symbol.for("react.element") : 60103;
function dd(i) {
  return i.$$typeof === ud;
}
function hd(i) {
  return Array.isArray(i) ? [] : {};
}
function sr(i, e) {
  return e.clone !== !1 && e.isMergeableObject(i) ? Mt(hd(i), i, e) : i;
}
function pd(i, e, t) {
  return i.concat(e).map(function (r) {
    return sr(r, t);
  });
}
function fd(i, e) {
  if (!e.customMerge) return Mt;
  let t = e.customMerge(i);
  return typeof t == "function" ? t : Mt;
}
function yd(i) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(i).filter(function (e) {
        return i.propertyIsEnumerable(e);
      })
    : [];
}
function ya(i) {
  return Object.keys(i).concat(yd(i));
}
function md(i, e, t) {
  let r = {};
  return (
    t.isMergeableObject(i) &&
      ya(i).forEach(function (s) {
        r[s] = sr(i[s], t);
      }),
    ya(e).forEach(function (s) {
      !t.isMergeableObject(e[s]) || !i[s] ? (r[s] = sr(e[s], t)) : (r[s] = fd(s, t)(i[s], e[s], t));
    }),
    r
  );
}
function Mt(i, e, t) {
  ((t = t || {}), (t.arrayMerge = t.arrayMerge || pd), (t.isMergeableObject = t.isMergeableObject || ad));
  let r = Array.isArray(e),
    s = Array.isArray(i);
  return r === s ? (r ? t.arrayMerge(i, e, t) : md(i, e, t)) : sr(e, t);
}
Mt.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (r, s) {
    return Mt(r, s, t);
  }, {});
};
const ma = (i) =>
  !!(
    i &&
    typeof i.hasAttributes == "function" &&
    typeof i.hasRelationships == "function" &&
    typeof i.hasViews == "function" &&
    typeof i.serialize == "function"
  );
class gd {
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
const R = {
    INVALID_ERROR_ID: "INVALID_ERROR_ID",
    INVALID_ERROR_REASON: "INVALID_ERROR_REASON",
    ACCESS_DENIED: "ACCESS_DENIED",
    AGE_GATE: "AGE_GATE",
    AGE_VERIFICATION_REQUIRED: "AGE_VERIFICATION_REQUIRED",
    AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
    BUFFER_STALLED_ERROR: "BUFFER_STALLED_ERROR",
    CONFIGURATION_ERROR: "CONFIGURATION_ERROR",
    CONTENT_EQUIVALENT: "CONTENT_EQUIVALENT",
    CONTENT_RESTRICTED: "CONTENT_RESTRICTED",
    CONTENT_UNAVAILABLE: "CONTENT_UNAVAILABLE",
    CONTENT_UNSUPPORTED: "CONTENT_UNSUPPORTED",
    DEVICE_LIMIT: "DEVICE_LIMIT",
    GEO_BLOCK: "GEO_BLOCK",
    INVALID_ARGUMENTS: "INVALID_ARGUMENTS",
    PLAYREADY_CBC_ENCRYPTION_ERROR: "PLAYREADY_CBC_ENCRYPTION_ERROR",
    MEDIA_CERTIFICATE: "MEDIA_CERTIFICATE",
    MEDIA_DESCRIPTOR: "MEDIA_DESCRIPTOR",
    MEDIA_LICENSE: "MEDIA_LICENSE",
    MEDIA_KEY: "MEDIA_KEY",
    MEDIA_PLAYBACK: "MEDIA_PLAYBACK",
    MEDIA_SESSION: "MEDIA_SESSION",
    NETWORK_ERROR: "NETWORK_ERROR",
    NOT_FOUND: "NOT_FOUND",
    NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
    PARSE_ERROR: "PARSE_ERROR",
    PLAY_ACTIVITY: "PLAY_ACTIVITY",
    REQUEST_ERROR: "REQUEST_ERROR",
    QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
    SERVER_ERROR: "SERVER_ERROR",
    SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",
    STREAM_UPSELL: "STREAM_UPSELL",
    SUBSCRIPTION_ERROR: "SUBSCRIPTION_ERROR",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    UNAUTHORIZED_ERROR: "UNAUTHORIZED_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
    UNSUPPORTED_ERROR: "UNSUPPORTED_ERROR",
    USER_INTERACTION_REQUIRED: "USER_INTERACTION_REQUIRED",
    INTERNAL_ERROR: "INTERNAL_ERROR",
    CDM_UPDATE_TIMEOUT: "CDM_UPDATE_TIMEOUT",
    OUTPUT_RESTRICTED: "OUTPUT_RESTRICTED",
    WIDEVINE_CDM_EXPIRED: "WIDEVINE_CDM_EXPIRED",
  },
  vd = {
    400: R.REQUEST_ERROR,
    401: R.UNAUTHORIZED_ERROR,
    403: R.ACCESS_DENIED,
    404: R.NOT_FOUND,
    405: R.NOT_FOUND,
    413: R.REQUEST_ERROR,
    414: R.REQUEST_ERROR,
    429: R.QUOTA_EXCEEDED,
    500: R.SERVER_ERROR,
    501: R.NOT_FOUND,
    503: R.SERVICE_UNAVAILABLE,
  },
  Xi = {
    "-1003": R.MEDIA_LICENSE,
    "-1004": R.DEVICE_LIMIT,
    "-1017": R.GEO_BLOCK,
    1010: R.NOT_FOUND,
    2002: R.AUTHORIZATION_ERROR,
    2034: R.TOKEN_EXPIRED,
    3059: R.DEVICE_LIMIT,
    3063: R.SUBSCRIPTION_ERROR,
    3076: R.CONTENT_UNAVAILABLE,
    3082: R.CONTENT_RESTRICTED,
    3084: R.STREAM_UPSELL,
    3770: R.AGE_VERIFICATION_REQUIRED,
    5002: R.SERVER_ERROR,
    180202: R.PLAYREADY_CBC_ENCRYPTION_ERROR,
    190121: R.WIDEVINE_CDM_EXPIRED,
  };
function rc(i) {
  return Xi[i];
}
const bd = new Set([
  R.CONTENT_EQUIVALENT,
  R.CONTENT_UNAVAILABLE,
  R.CONTENT_UNSUPPORTED,
  R.SERVER_ERROR,
  R.SUBSCRIPTION_ERROR,
  R.UNSUPPORTED_ERROR,
  R.USER_INTERACTION_REQUIRED,
]);
function Gr(i) {
  return i !== void 0 && i instanceof y;
}
function _d(i) {
  return typeof i != "string" ? !1 : /mk-[0-9]{3,}/.test(i);
}
const pi = class pi extends Error {
  static isMKError(e) {
    return Gr(e);
  }
  static isReason(e, t) {
    return Gr(e) && e.reason === t;
  }
  isMKError = !0;
  id;
  reason;
  description;
  origin;
  data;
  get errorCode() {
    return this.reason;
  }
  constructor(e, t, r) {
    if (!_d(e)) throw new pi("mk-000", R.INVALID_ERROR_ID, { description: `Invalid error id format: ${e}` });
    if (t === void 0 || !(t in R)) throw new pi("mk-001", R.INVALID_ERROR_REASON, `Invalid error reason: ${t}`);
    ((r = r ?? {}),
      typeof r == "string" ? (r = { description: r }) : r instanceof Error && (r = { origin: r }),
      r.description === void 0 &&
        r.origin !== void 0 &&
        (r.description = Gr(r.origin) ? r.origin.description : r.origin.message));
    let s = `[${e}] ${t}`;
    (r.description !== void 0 && (s += `; ${r.description}`),
      super(s),
      (this.name = "MKError"),
      (this.id = e),
      (this.reason = t),
      (this.description = r.description ?? ""),
      (this.origin = r.origin),
      (this.data = r.data));
  }
};
qr(pi, "Reason", R);
let y = pi;
Object.assign(y, R);
class p extends y {
  constructor(e, t) {
    (bd.has(e) && (t = t ?? e), super("mk-007", e, { description: t }));
  }
  static playActivityError(e) {
    return new this(R.PLAY_ACTIVITY, e);
  }
  static parseError(e) {
    return new this(R.PARSE_ERROR, e);
  }
  static responseError(e) {
    const { status: t, statusText: r } = e,
      s = vd[t] || R.NETWORK_ERROR,
      n = new this(s, r || `${t}`);
    return ((n.data = e), n);
  }
  static serverError(e) {
    return new Er(e);
  }
  static internalError(e) {
    return new this(R.INTERNAL_ERROR, e);
  }
}
class Er extends p {
  get response() {
    return this.data;
  }
  get dialog() {
    return this.response.dialog;
  }
  constructor(e, t) {
    const r = Xi[e.failureType ?? 0] || Xi[e.errorCode ?? 0] || Xi[e.status] || t || R.UNKNOWN_ERROR;
    (super(r, e.dialog?.message ?? e.customerMessage ?? e.message ?? e.errorMessage ?? ""),
      (this.data = e),
      this.dialog !== void 0 &&
        typeof this.dialog.okButtonAction?.url == "string" &&
        (this.dialog.okButtonAction.url = this.dialog.okButtonAction.url.replace(
          /[&?](?:challenge|key-system|uri|user-initiated)=[^&]+/gim,
          "",
        )));
  }
}
function Td(i = []) {
  const e = {};
  return (
    i.forEach((t) => {
      t.charAt(0) === "-" ? ((t = t.substr(1)), (e[t] = !1)) : (e[t] = !0);
    }),
    e
  );
}
const Ed = (i) => typeof i != "function";
function xi(i) {
  return i === void 0 || Ed(i) ? i : i();
}
function sc(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function Yr(i) {
  return typeof i == "function";
}
function Dt(i) {
  return typeof i == "string";
}
function H(i, e) {
  return Dt(i) ? (e?.trim !== !1 ? i.trim() : i).length === 0 : e?.strict === !1;
}
function kd(i) {
  return typeof i == "boolean";
}
function Sd(i) {
  return kd(i)
    ? !i
    : function (...e) {
        return !i(...e);
      };
}
const Ts = Sd(H);
function Es(i, e) {
  const t = e.path.map((r, s) => (s === 0 ? e.encode(r) : `[${e.encode(r)}]`)).join("");
  return i === null ? t : `${t}=${e.encode(i)}`;
}
const Id = {
    comma: function (e, t) {
      return Es(e.join(","), t);
    },
    repeat: function (e, t) {
      return e
        .map((r) => Es(String(r), t))
        .filter((r) => r.length > 0)
        .join("&");
    },
    bracket: function (e, t) {
      return e
        .map(function (r) {
          return t.next(r, { ...t, path: [...t.path, ""] });
        })
        .filter(Ts)
        .join("&");
    },
    index: function (e, t) {
      return e
        .map(function (r, s) {
          return t.next(r, { ...t, path: [...t.path, String(s)] });
        })
        .filter(Ts)
        .join("&");
    },
  },
  Pd = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (r) {
          return t.next(e[r], { ...t, path: t.path.concat(r) });
        })
        .filter(Ts)
        .join("&");
    },
  },
  wd = (i) => encodeURIComponent(String(i)),
  Ad = (i) => String(i);
function Rd(i, e) {
  return !!(
    (i === void 0 && e?.skipUndefined !== !1) ||
    (i === null && e?.skipNull !== !1) ||
    (H(i) && e?.skipEmptyString !== !1)
  );
}
function Cd(i, e) {
  if (!i) return "";
  let t = "";
  if ((e?.prefix === !0 ? (t = "?") : Dt(e?.prefix) && (t = e.prefix), Dt(i))) return t + i.replace(/^[?&]+/, "");
  const r = Yr(e?.arrayFormat) ? e.arrayFormat : Id[e?.arrayFormat ?? "comma"],
    s = Yr(e?.objectFormat) ? e.objectFormat : Pd[e?.objectFormat ?? "bracket"];
  function n(l, h) {
    return Rd(l, e) ? "" : sc(l) ? s(l, h) : Array.isArray(l) ? r(l, h) : Es(l, h);
  }
  const a = e?.sort ?? ((...l) => 0);
  let o = wd;
  Yr(e?.encode) ? (o = e.encode) : e?.encode === !1 && (o = Ad);
  const c = s(i, { path: [], next: n, encode: o, sort: a });
  return c === "" ? "" : t + c;
}
function kr(i, e, t) {
  sc(e) && ((t = e), (e = ""));
  const r = Jo([i, e ?? ""]);
  let s = "?";
  r.endsWith("&") || r.endsWith("?") ? (s = "") : r.includes("?") && (s = "&");
  const n = t !== void 0 ? Cd(t, { prefix: s }) : "";
  return r + n;
}
function Od(i, e) {
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
function zr(i, e, t) {
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
function Dd(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function U(i) {
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
        Dd(i, s, t[s]);
      }));
  }
  return i;
}
function Nd(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t.push.apply(t, r);
  }
  return t;
}
function ga(i, e) {
  return (
    (e = e ?? {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
      : Nd(Object(e)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    i
  );
}
const Qr = {
  browser: [
    [
      /^(itunes|music|tv)\/([\w.]+)\s/i,
      (i) =>
        ga(
          U(
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
      (i) => U({ name: "webview", variant: "facebook", mobile: !0 }, L(i[1])),
    ],
    [
      /(instagram|snapchat)[/ ]([-\w.]+)/i,
      (i) => U({ name: "webview", variant: i[1].trim().toLowerCase(), mobile: !0 }, L(i[2])),
    ],
    [
      /musical_ly(?:.+app_?version\/|_)([\w.]+)/i,
      (i) => U({ name: "webview", variant: "tiktok", mobile: !0 }, L(i[1])),
    ],
    [/twitter/i, () => ({ name: "webview", variant: "twitter", mobile: !0 })],
    [/ wv\).+?(?:version|chrome)\/([\w.]+)/i, (i) => U({ name: "webview", mobile: !0 }, L(i[1]))],
    [/electron\/([\w.]+) safari/i, (i) => U({ name: "electron", mobile: !1 }, L(i[1]))],
    [
      /tesla\/(.*?(20\d\d\.([-\w.])+))/i,
      (i) => ga(U({ name: "other", variant: "tesla", mobile: !1 }, L(i[2])), { version: i[1] }),
    ],
    [
      /(samsung|huawei)browser\/([-\w.]+)/i,
      (i) =>
        U(
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
    [/yabrowser\/([-\w.]+)/i, (i) => U({ name: "other", variant: "yandex", mobile: !1 }, L(i[1]))],
    [
      /(brave|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w.]+)/i,
      (i, { userAgent: e }) =>
        U({ name: "other", variant: i[1].trim().toLowerCase(), mobile: /mobile/i.test(e) }, L(i[2].replace(/-/g, "."))),
    ],
    [
      /edg(e|ios|a)?\/([\w.]+)/i,
      (i) => {
        var e;
        return U(
          { name: "edge", mobile: /(edgios|edga)/i.test((e = i[1]) !== null && e !== void 0 ? e : "") },
          L(i[2]),
        );
      },
    ],
    [/trident.+rv[: ]([\w.]{1,9})\b.+like gecko/i, (i) => U({ name: "ie", mobile: !1 }, L(i[1]))],
    [
      /opr\/([\w.]+)/i,
      /opera mini\/([-\w.]+)/i,
      /opera [mobiletab]{3,6}\b.+version\/([-\w.]+)/i,
      /opera(?:.+version\/|[/ ]+)([\w.]+)/i,
      (i) => U({ name: "opera", mobile: /mobile/i.test(i[0]) }, L(i[1])),
    ],
    [/headlesschrome(?:\/([\w.]+)| )/i, (i) => U({ name: "chrome", variant: "headless", mobile: !1 }, L(i[1]))],
    [/\b(?:crmo|crios)\/([\w.]+)/i, (i) => U({ name: "chrome", mobile: !0 }, L(i[1]))],
    [
      /chrome(?: browser)?\/v?([\w.]+)( mobile)?/i,
      (i) => {
        var e;
        return U({ name: "chrome", mobile: /mobile/i.test((e = i[2]) !== null && e !== void 0 ? e : "") }, L(i[1]));
      },
    ],
    [/\bfocus\/([\w.]+)/i, (i) => U({ name: "firefox", variant: "focus", mobile: !0 }, L(i[1]))],
    [
      /fxios\/([\w.-]+)/i,
      /(?:mobile|tablet);.*(?:firefox)\/([\w.-]+)/i,
      (i) => U({ name: "firefox", mobile: !0 }, L(i[1])),
    ],
    [
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[/ ]?([\w.+]+)/i,
      (i) => U({ name: "firefox", variant: i[1].trim().toLowerCase(), mobile: !1 }, L(i[2])),
    ],
    [
      /(?:firefox)\/([\w.]+)/i,
      /(?:mozilla)\/([\w.]+) .+rv:.+gecko\/\d+/i,
      (i) => U({ name: "firefox", mobile: !1 }, L(i[1])),
    ],
    [
      /version\/([\w.,]+) .*mobile(?:\/\w+ | ?)safari/i,
      /version\/([\w.,]+) .*(safari)/i,
      /webkit.+?(?:mobile ?safari|safari)(?:\/([\w.]+))/i,
      (i) => U({ name: "safari", mobile: /mobile/i.test(i[0]) }, L(i[1])),
    ],
  ],
  engine: [
    [/webkit\/(?:537\.36).+chrome\/(?!27)([\w.]+)/i, (i) => U({ name: "blink" }, L(i[1]))],
    [/windows.+ edge\/([\w.]+)/i, (i) => U({ name: "blink" }, L(i[1]))],
    [/presto\/([\w.]+)/i, (i) => U({ name: "presto" }, L(i[2]))],
    [/trident\/([\w.]+)/i, (i) => U({ name: "trident" }, L(i[1]))],
    [/gecko\/([\w.]+)/i, (i) => U({ name: "gecko" }, L(i[1]))],
    [/(khtml|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w.]+)/i, (i) => U({ name: "other" }, L(i[2]))],
    [/webkit\/([\w.]+)/i, (i) => U({ name: "webkit" }, L(i[1]))],
  ],
  os: [
    [
      /microsoft windows (vista|xp)/i,
      /windows nt 6\.2; (arm)/i,
      /windows (?:phone(?: os)?|mobile)[/ ]?([\d.\w ]*)/i,
      /windows[/ ]?([ntce\d. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d.]+)/i,
      (i) => U({ name: "windows" }, L(i[1])),
    ],
    [
      /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
      /(?:ios;fbsv\/|iphone.+ios[/ ])([\d.]+)/i,
      (i) => U({ name: "ios" }, L(i[1].replace(/_/g, "."))),
    ],
    [/mac(?:intosh;?)? os x ?([\d._]+)/i, (i) => U({ name: "macos" }, L(i[1].replace(/_/g, ".")))],
    [/cros [\w]+(?:\)| ([\w.]+)\b)/i, (i) => U({ name: "chromeos" }, L(i[1]))],
    [
      /(?:android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-/ ]?([\w.]*)/i,
      /droid ([\w.]+|[\d+])\b.+(android[- ]x86|harmonyos)/i,
      (i) => U({ name: "android" }, L(i[1])),
    ],
    [/linux/i, () => ({ name: "linux" })],
  ],
};
function Md(i, e) {
  let t = i;
  for (const r of e) t = r(t);
  return t;
}
function Ld(i, e) {
  var t;
  const r = {
    navigator: i,
    ua: (t = i?.userAgent) !== null && t !== void 0 ? t : "",
    extensions: [],
    browser: zr(Qr.browser, i, { name: "unknown", mobile: !1 }),
    engine: zr(Qr.engine, i, { name: "unknown" }),
    os: zr(Qr.os, i, { name: "unknown" }),
  };
  var s;
  return Md(r, (s = e?.extensions) !== null && s !== void 0 ? s : []);
}
function Ud(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function Fi(i) {
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
        Ud(i, s, t[s]);
      }));
  }
  return i;
}
function xd(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t.push.apply(t, r);
  }
  return t;
}
function Ki(i, e) {
  return (
    (e = e ?? {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
      : xd(Object(e)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    i
  );
}
function Fd(i) {
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
  const o = Ki(Fi({}, i.browser), {
      isUnknown: i.browser.name === "unknown",
      isSafari: i.browser.name === "safari",
      isChrome: i.browser.name === "chrome",
      isFirefox: i.browser.name === "firefox",
      isEdge: i.browser.name === "edge",
      isWebView: i.browser.name === "webview",
      isOther: i.browser.name === "other",
      isMobile: i.browser.mobile || s || a || t || !1,
    }),
    c = Ki(Fi({}, i.engine), {
      isUnknown: i.engine.name === "unknown",
      isWebKit: i.engine.name === "webkit",
      isBlink: i.engine.name === "blink",
      isGecko: i.engine.name === "gecko",
    }),
    l = Ki(Fi({}, i.os), {
      name: e,
      isUnknown: i.os.name === "unknown",
      isLinux: i.os.name === "linux",
      isWindows: i.os.name === "windows",
      isMacOS: r,
      isAndroid: t,
      isIOS: s,
      isIPadOS: a,
    });
  return Ki(Fi({}, i), { extensions: [...i.extensions, "flags"], browser: o, os: l, engine: c });
}
let Xr;
function mt() {
  if (Xr === void 0) {
    let i = function (e) {
      return e && e.Math === Math && e;
    };
    Xr =
      i(typeof globalThis == "object" && globalThis) ||
      i(typeof window == "object" && window) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  }
  return Xr;
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
function Kd(i) {
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
function Vd() {
  return ks.apply(this, arguments);
}
function ks() {
  return (
    (ks = Kd(function* () {
      return mt().navigator !== void 0;
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
function Bd(i) {
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
function hn() {
  return Ss.apply(this, arguments);
}
function Ss() {
  return (
    (Ss = Bd(function* () {
      var i, e;
      return (
        ((e = mt().process) === null || e === void 0 || (i = e.versions) === null || i === void 0 ? void 0 : i.node) !==
        void 0
      );
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
function Sr(i) {
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
function $d(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function Hd(i) {
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
        $d(i, s, t[s]);
      }));
  }
  return i;
}
const Y = {
    playready: "com.microsoft.playready",
    widevine: "com.widevine.alpha",
    clearkey: "org.w3.clearkey",
    fairplay: "com.apple.fps",
  },
  Ta = { fairplay_legacy: "com.apple.fps.1_0", playready_legacy: "com.microsoft.playready" };
function nc() {
  return Is.apply(this, arguments);
}
function Is() {
  return (
    (Is = Sr(function* () {
      var i;
      const e = mt();
      return (
        ((i = e.navigator) === null || i === void 0 ? void 0 : i.requestMediaKeySystemAccess) !== void 0 &&
        e.MediaKeys !== void 0 &&
        e.MediaKeySystemAccess !== void 0
      );
    })),
    Is.apply(this, arguments)
  );
}
function jd(i) {
  return Ps.apply(this, arguments);
}
function Ps() {
  return (
    (Ps = Sr(function* (i) {
      var e, t, r;
      const s = (r = i?.contentType) !== null && r !== void 0 ? r : 'video/mp4; codecs="avc1.42E01E"',
        n = [],
        a = mt();
      return (
        typeof ((e = a.WebKitMediaKeys) === null || e === void 0 ? void 0 : e.isTypeSupported) == "function" &&
          a.WebKitMediaKeys.isTypeSupported(Ta.fairplay_legacy, s) === !0 &&
          n.push("fairplay_legacy"),
        typeof ((t = a.MSMediaKeys) === null || t === void 0 ? void 0 : t.isTypeSupported) == "function" &&
          a.MSMediaKeys.isTypeSupported(Ta.playready_legacy, s) === !0 &&
          n.push("playready_legacy"),
        n
      );
    })),
    Ps.apply(this, arguments)
  );
}
function qd(i, e) {
  return ws.apply(this, arguments);
}
function ws() {
  return (
    (ws = Sr(function* (i, e) {
      const t = Hd({ initDataTypes: ["keyids", "cenc"] }, e);
      if (t.audioCapabilities === void 0 && t.videoCapabilities === void 0)
        throw new Error("Configuration should at least include a audioCapabilities or videoCapabilities key");
      const r = i.indexOf(".") !== -1 ? i : Y[i];
      if (r === void 0) return !1;
      var s, n;
      const a = [
        ...((s = t.audioCapabilities) !== null && s !== void 0 ? s : []),
        ...((n = t.videoCapabilities) !== null && n !== void 0 ? n : []),
      ].map(({ contentType: l }) => l);
      try {
        const h = (yield navigator.requestMediaKeySystemAccess(r, [t])).getConfiguration();
        var o, c;
        const g = [
          ...((o = h.audioCapabilities) !== null && o !== void 0 ? o : []),
          ...((c = h.videoCapabilities) !== null && c !== void 0 ? c : []),
        ].map(({ contentType: m }) => m);
        return a.every((m) => g.includes(m));
      } catch (l) {
        if (l instanceof DOMException && (l.name === "NotSupportedError" || l.name === "SecurityError")) return !1;
        throw l;
      }
    })),
    ws.apply(this, arguments)
  );
}
function Wd(i) {
  return As.apply(this, arguments);
}
function As() {
  return (
    (As = Sr(function* (i) {
      const e = [];
      if ((yield hn()) || !(yield nc())) return e;
      function t(n) {
        return typeof n == "string" ? { contentType: n } : n;
      }
      const r = i?.videoCapability !== void 0 ? [t(i.videoCapability)] : [t('video/mp4; codecs="avc1.42E01E"')],
        s = i?.audioCapability !== void 0 ? [t(i.audioCapability)] : [];
      for (const [n, a] of Object.entries(Y))
        (yield qd(a, { videoCapabilities: r, audioCapabilities: s })) && e.push(n);
      return e;
    })),
    As.apply(this, arguments)
  );
}
function Ea(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Gd(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        Ea(n, r, s, a, o, "next", c);
      }
      function o(c) {
        Ea(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Yd() {
  return Rs.apply(this, arguments);
}
function Rs() {
  return (
    (Rs = Gd(function* () {
      var i, e, t, r;
      const s = mt(),
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
    Rs.apply(this, arguments)
  );
}
function ka(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function zd(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        ka(n, r, s, a, o, "next", c);
      }
      function o(c) {
        ka(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Qd() {
  return Cs.apply(this, arguments);
}
function Cs() {
  return (
    (Cs = zd(function* () {
      return mt().MediaSource !== void 0 && mt().SourceBuffer !== void 0;
    })),
    Cs.apply(this, arguments)
  );
}
function Sa(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Xd(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        Sa(n, r, s, a, o, "next", c);
      }
      function o(c) {
        Sa(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function ac() {
  return Os.apply(this, arguments);
}
function Os() {
  return (
    (Os = Xd(function* () {
      var i;
      if (yield hn()) return !1;
      const e = document.createElement("video");
      return (
        (e?.webkitSupportsPresentationMode !== void 0 && typeof e?.webkitSetPresentationMode == "function") ||
        ((i = document) === null || i === void 0 ? void 0 : i.pictureInPictureEnabled) !== void 0
      );
    })),
    Os.apply(this, arguments)
  );
}
async function Jd() {
  const e = globalThis?.window?.navigator ?? { userAgent: "", maxTouchPoints: 0 },
    t = await Vd(),
    r = await hn(),
    s = await Wd(),
    n = await jd();
  let a;
  return (
    s.includes("fairplay") && (a = "fairplay"),
    s.includes("playready") && (a = "playready"),
    s.includes("widevine") && (a = "widevine"),
    {
      userAgent: await Ld(e, { extensions: [Fd] }),
      isBrowserEnvironment: t,
      isNodeEnvironment: r,
      isPictureInPictureSupported: await ac(),
      isMMSSupported: await Yd(),
      isMSESupported: await Qd(),
      isEMESupported: await nc(),
      isDRMAvailable: a !== void 0,
      availableKeySystems: s,
      preferredKeySystem: a,
      hasWebKitMediaKeysSupport: n.includes("fairplay_legacy"),
      hasMSMediaKeysSupport: n.includes("playready_legacy"),
    }
  );
}
class Zd {
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
    return new this(await Jd());
  }
  constructor(e) {
    ((this.config = e), (this.configured = !0));
  }
  configure(e) {
    for (const [t, r] of Object.entries(e)) this.config[t] = r;
    this.configured = !0;
  }
}
function ai(i) {
  return i
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "-")
    .replace(/(^-+)|(-+$)/, "")
    .toLowerCase();
}
const eh = (i) => i.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (e, t) => t.toUpperCase()),
  oi = {};
function pn(i, e) {
  const t = eh(i);
  if (Ve(oi, t)) {
    const s = oi[t];
    if (e !== s.constructor)
      throw new Error(`DevFlag ${i} was already registered with a different type (${s.constructor.name})`);
    return s;
  }
  const r = new e(i);
  return (
    Object.defineProperty(oi, t, {
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
class fn {
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
    const e = Ie()?.getItem(this.key) ?? null;
    return e !== null ? e : void 0;
  }
  write(e) {
    Ie()?.setItem(this.key, e);
  }
  clear() {
    Ie()?.removeItem(this.key);
  }
}
class yn extends fn {
  static register(e) {
    return pn(e, this);
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
class Te extends fn {
  static register(e) {
    return pn(e, this);
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
class Ir extends fn {
  static register(e) {
    return pn(e, this);
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
const oc =
  /\/(?:([a-z]{2})\/)?(album|artist|episode|movie|music-video|playlist|podcast|post|season|show|song|station)\/(?:[^/]*\/)?(?:id)?(\d+|[a-z]{2}\.[a-z0-9-]+|umc.cmc.[a-zA-Z0-9]+)(?:.*(?:[?|&]i=(\d+)).*)?.*$/i;
function th(i) {
  return oc.test(String(i));
}
function cc(i) {
  const e = i.match(oc) || [];
  let [, t, r, s, n] = e;
  return (
    r === "music-video" && (r = "musicVideo"),
    ["album", "playlist"].indexOf(r) !== -1 && n
      ? ((r = "song"), (s = n))
      : r === "podcast" && n && ((r = "episode"), (s = n)),
    { storefrontId: t, kind: r, contentId: s, itemId: n }
  );
}
function FT(i) {
  const e = cc(i),
    { storefrontId: t, kind: r, contentId: s } = e;
  if ([t, r, s].some((a) => a === void 0)) throw new TypeError(`Invalid Media URL: ${i}`);
  const n = !!s && s.startsWith("umc.");
  return { storefrontId: t, kind: r, contentId: s, isUTS: n };
}
function ih(i) {
  return typeof i == "number" && !Number.isNaN(i);
}
const Jr = new Map();
function lc(i) {
  if (Jr.has(i)) return Jr.get(i);
  let e = ai(i);
  return (
    i.endsWith("y") ? (e = e.substring(0, e.length - 1) + "ies") : e.endsWith("s") || (e = e + "s"), Jr.set(i, e), e
  );
}
function rh(i) {
  return lc(i);
}
function sh(i, e) {
  const t = {};
  for (const r of e) r in i && i[r] !== void 0 && (t[r] = i[r]);
  return t;
}
class nh {
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
    return new URL(kr(e, t, r));
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
const Zr = new Map();
function yi(i) {
  if (Zr.has(i)) return Zr.get(i);
  let e = ai(i);
  return (e.endsWith("s") && (e = e.slice(0, -1)), Zr.set(i, e), e);
}
const kt =
    (i = 100, e) =>
    (t, r, s) => {
      const n = s.value,
        a = ah(n, i, e);
      s.value = a;
    },
  ah = (i, e = 250, t = { isImmediate: !1 }) => {
    let r, s;
    function n(c) {
      return c?.resolve(t.cancelledValue);
    }
    const a = () => {
        r && (r.resolved || (n(r), r.timeoutId && clearTimeout(r.timeoutId)), (r = void 0));
      },
      o = (c, l, h, g) => {
        i.apply(c, g)
          .then((m) => {
            (l(m), r && (r.resolved = !0));
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
              : new Promise((g, m) => {
                  ((r = { resolve: g, reject: m }), o(h, g, m, c));
                })
          );
        }
      : function (...c) {
          const l = this;
          return (
            r && a(),
            new Promise(function (h, g) {
              const m = setTimeout(o.bind(void 0, l, h, g, c), e);
              r = { resolve: h, reject: g, timeoutId: m };
            })
          );
        };
  };
function uc(i, e = {}) {
  const t = "Deprecation Warning: ",
    r = e.message ?? `${i} has been deprecated`,
    s = [];
  (e.since && s.push(`since: ${e.since}`),
    e.until && s.push(`until: ${e.until}`),
    console.warn(t + r + (s.length > 0 ? ` (${s.join(", ")})` : "")));
}
const Ds = {},
  oh = (i) => {
    let e = Ds[i];
    return (e || ((e = Promise.resolve()), (Ds[i] = e)), e);
  },
  Pr = (i) => {
    let e = Promise.resolve();
    return (t, r, s) => {
      const n = s.value;
      return (
        (s.value = async function (...a) {
          return (i && (e = oh(i)), (e = e.catch(() => {}).then(() => n.apply(this, a))), i && (Ds[i] = e), e);
        }),
        s
      );
    };
  };
var Ce = ((i) => ((i[(i.STANDARD = 64)] = "STANDARD"), (i[(i.HIGH = 256)] = "HIGH"), i))(Ce || {}),
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
  pt = ((i) => (
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
  ))(pt || {}),
  ch = ((i) => (
    (i[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.RADIO = 1)] = "RADIO"),
    (i[(i.PLAYLIST = 2)] = "PLAYLIST"),
    (i[(i.ALBUM = 3)] = "ALBUM"),
    (i[(i.ARTIST = 4)] = "ARTIST"),
    i
  ))(ch || {}),
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
  qe = ((i) => (
    (i[(i.Manual = 0)] = "Manual"),
    (i[(i.Interval = 1)] = "Interval"),
    (i[(i.SkipIntro = 2)] = "SkipIntro"),
    (i[(i.Automatic = 3)] = "Automatic"),
    (i[(i.SkipToLiveManual = 4)] = "SkipToLiveManual"),
    (i[(i.SkipToLiveAutomatic = 5)] = "SkipToLiveAutomatic"),
    i
  ))(qe || {});
const lh = { NEXT_ITEM: "NEXT" };
var uh = ((i) => (
    (i[(i.REPEAT_UNKNOWN = 0)] = "REPEAT_UNKNOWN"),
    (i[(i.REPEAT_OFF = 1)] = "REPEAT_OFF"),
    (i[(i.REPEAT_ONE = 2)] = "REPEAT_ONE"),
    (i[(i.REPEAT_ALL = 3)] = "REPEAT_ALL"),
    i
  ))(uh || {}),
  dh = ((i) => (
    (i[(i.SHUFFLE_UNKNOWN = 0)] = "SHUFFLE_UNKNOWN"),
    (i[(i.SHUFFLE_OFF = 1)] = "SHUFFLE_OFF"),
    (i[(i.SHUFFLE_ON = 2)] = "SHUFFLE_ON"),
    i
  ))(dh || {}),
  hh = ((i) => (
    (i[(i.AUTO_UNKNOWN = 0)] = "AUTO_UNKNOWN"),
    (i[(i.AUTO_OFF = 1)] = "AUTO_OFF"),
    (i[(i.AUTO_ON = 2)] = "AUTO_ON"),
    (i[(i.AUTO_ON_CONTENT_UNSUPPORTED = 3)] = "AUTO_ON_CONTENT_UNSUPPORTED"),
    i
  ))(hh || {}),
  ph = ((i) => ((i[(i.NOT_SPECIFIED = 0)] = "NOT_SPECIFIED"), (i[(i.CONTAINER_CHANGED = 1)] = "CONTAINER_CHANGED"), i))(
    ph || {},
  ),
  Oe = ((i) => (
    (i[(i.PLAY_END = 0)] = "PLAY_END"),
    (i[(i.PLAY_START = 1)] = "PLAY_START"),
    (i[(i.LYRIC_DISPLAY = 2)] = "LYRIC_DISPLAY"),
    i
  ))(Oe || {}),
  dc = ((i) => (
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
  ))(dc || {}),
  hc = ((i) => ((i[(i.AUDIO = 0)] = "AUDIO"), (i[(i.VIDEO = 1)] = "VIDEO"), i))(hc || {}),
  fh = ((i) => ((i[(i.AUTO = 0)] = "AUTO"), (i[(i.MANUAL = 1)] = "MANUAL"), i))(fh || {}),
  Ns = ((i) => (
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
  ))(Ns || {}),
  yh = ((i) => ((i[(i.EPISODE = 1)] = "EPISODE"), (i[(i.SHOUTCAST = 2)] = "SHOUTCAST"), i))(yh || {});
const mn = "/",
  te = { CRITICAL: 50, ERROR: 40, WARNING: 30, NOTICE: 20, INFO: 10, DEBUG: 2, TRACE: 1, NONE: 0 };
function mh(i) {
  return typeof i != "string" ? !1 : te[i.toUpperCase()] !== void 0;
}
function gh(i) {
  return typeof i != "number" ? !1 : Object.values(te).includes(i);
}
const Ia = {
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
function gt(i, e = {}) {
  if (typeof i == "number") return gh(i) ? i : void 0;
  let t = i.toUpperCase();
  return (e.allowShorthands && Ia[t] !== void 0 && (t = Ia[t]), mh(t) ? te[t] : void 0);
}
function pc(i) {
  for (const [e, t] of Object.entries(te)) if (i === t) return e;
}
function vh(i, e = { includeRoot: !0 }) {
  return (
    fc(i, function (t) {
      (t.parent === void 0 && !e.includeRoot) || t.clearLevel();
    }),
    i
  );
}
function bh(i, e) {
  return (
    fc(i, function (t) {
      let r;
      const s = t.namespace;
      (t.clearLevel(),
        t.parent === void 0 && e["*"] !== void 0 ? (r = gt(e["*"])) : e[s] !== void 0 && (r = gt(e[s])),
        r !== void 0 && t.setLevel(r));
    }),
    i
  );
}
function _h(i) {
  const e = gt(i.trim(), { allowShorthands: !0 });
  if (e !== void 0) return { "*": e };
  const t = {},
    r = i.split(",").filter((s) => s.trim() !== "");
  for (const s of r) {
    const n = s.split("=", 2);
    if (n.length !== 2) continue;
    const a = n[0]?.trim() ?? "",
      o = n[1]?.trim() ?? "",
      c = gt(o, { allowShorthands: !0 });
    a !== "" && c !== void 0 && (t[a] = c);
  }
  return t;
}
function fc(i, e) {
  const t = [i];
  for (; t.length > 0;) {
    const r = t.shift();
    r !== void 0 && (t.push(...r.children), e(r));
  }
}
const Th = te.ERROR,
  Eh = (i, e) => i !== te.NONE && e >= i;
let St = class yc {
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
    return this._parent === void 0 ? this.name : this._parent.namespace + mn + this.name;
  }
  get enabled() {
    return this.level !== te.NONE;
  }
  get level() {
    return this._level ?? this.parent?.level ?? Th;
  }
  get levelName() {
    return pc(this.level) ?? "UNKNOWN";
  }
  get levelPolicy() {
    return this._levelPolicy ?? this.parent?.levelPolicy ?? Eh;
  }
  get handlers() {
    return this._handlers ?? this.parent?.handlers ?? {};
  }
  isEnabledFor(e) {
    return this.levelPolicy(this.level, e);
  }
  setLevel(e) {
    const t = gt(e);
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
    return r !== void 0 ? r : new yc(e, { ...t, parent: this });
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
    return kh(this, e);
  }
  linkParent(e) {
    return (this.parent !== e && (this.unlinkParent(), (this._parent = e), e.linkChild(this)), this);
  }
  unlinkParent() {
    return (this._parent !== void 0 && (this._parent.unlinkChild(this), (this._parent = void 0)), this);
  }
  log(e, t, ...r) {
    const s = gt(e);
    s !== void 0 && this.logRecord({ time: Date.now(), namespace: this.namespace, level: s, message: t, args: r });
  }
  logRecord(e) {
    if (!this.levelPolicy(this.level, e.level)) return;
    const t = { namespace: this.namespace, ...e };
    for (const r of Object.values(this.handlers)) r.process(t);
  }
  error(e, ...t) {
    this.log(te.ERROR, e, ...t);
  }
  warning(e, ...t) {
    this.log(te.WARNING, e, ...t);
  }
  warn(e, ...t) {
    this.warning(e, ...t);
  }
  info(e, ...t) {
    this.log(te.INFO, e, ...t);
  }
  debug(e, ...t) {
    this.log(te.DEBUG, e, ...t);
  }
  trace(e, ...t) {
    this.log(te.TRACE, e, ...t);
  }
};
function kh(i, e, t = mn) {
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
class mc {
  enabled;
  callback;
  constructor(e, t = {}) {
    ((this.callback = e), (this.enabled = t.enabled ?? !0));
  }
  process(e) {
    this.enabled && this.callback !== void 0 && this.callback(e);
  }
}
const Sh = /%{([^}]+)}/gi,
  Pa = {
    timestamp: (i) => String(i.time),
    time: (i) => String(i.time),
    datetime: (i) => new Date(i.time).toISOString(),
    date: (i) => new Date(i.time).toISOString(),
    level: (i) => String(i.level),
    levelname: (i) => pc(i.level) ?? "UNKNOWN",
    message: (i) => i.message,
    name: (i) => i.namespace.split(mn).pop(),
    namespace: (i) => i.namespace,
  };
function Ih(i) {
  return function (e) {
    return i.replace(Sh, function (t, r) {
      return ((r = r.toLowerCase()), Pa[r] !== void 0 ? Pa[r](e) : t);
    });
  };
}
const Ph = new Map([
    [te.CRITICAL, "error"],
    [te.ERROR, "error"],
    [te.WARNING, "warn"],
    [te.NOTICE, "warn"],
    [te.INFO, "log"],
    [te.DEBUG, "debug"],
  ]),
  wh = Ih("%{datetime} %{levelname} - [%{namespace}] %{message}");
function Ah(i) {
  return i !== void 0 && i in console;
}
class Rh {
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
      (this.levelMapping = e.levelMapping ?? Ph),
      (this.format = e.formatter ?? wh));
  }
  process(e) {
    if (!this.enabled || !this.hasConsole) return;
    let t = "log";
    if (this.mapLevels) {
      const n = this.levelMapping.get(e.level);
      Ah(n) && (t = n);
    }
    const r = e.args ?? [],
      s = this.format(e);
    console[t](s, ...r);
  }
}
const KT = new St("paf"),
  Ch = new Map([
    ["play", Oe.PLAY_START],
    ["playbackstarted", Oe.PLAY_START],
    ["stop", Oe.PLAY_END],
    ["playbackstopped", Oe.PLAY_END],
  ]);
function Oh(i) {
  return typeof i == "number" ? i : (Ch.get(i) ?? Oe.PLAY_END);
}
const Dh = new Map([
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
function Nh(i) {
  if (i !== void 0) return Dh.get(i);
}
function VT(i) {
  const e = st(i),
    t = Mh(i);
  return (
    (e.eventType = t.eventType),
    (e.eventTypeString = t.eventTypeString),
    e.endReasonType === void 0 && t.eventTypeString !== void 0 && (e.endReasonType = Nh(t.eventTypeString)),
    e.reporting !== !1 && (e.reporting = !0),
    e
  );
}
function Mh(i) {
  const e = i.eventType ?? Oe.PLAY_START;
  return typeof e == "number" ? { eventType: e } : { eventTypeString: e, eventType: Oh(e) };
}
function Lh(i, e, t) {
  return i.eventType === void 0
    ? Oe.PLAY_START
    : i.itemType === dc.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? Oe.PLAY_END
      : (i.eventType ?? Oe.PLAY_START);
}
const { AUDIO: wa, VIDEO: Uh } = hc;
function BT(i, e, t) {
  if (Lh(i) === Oe.LYRIC_DISPLAY) return wa;
  const { kind: r, mediaType: s } = i;
  if (typeof s == "number") return s;
  const n = typeof s == "string" ? s : r;
  return n && /video|movie/i.test(n) ? Uh : wa;
}
const xh = {
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
  Fh = 5 * 60,
  Kh =
    (i = Fh) =>
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
  Vh = {
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
function Bh(i = "en-US") {
  const e = es[i.toLowerCase()];
  if (e) return e;
  if (i.includes("-")) {
    const r = i.split("-")[0],
      s = es[r.toLowerCase()];
    if (s) return s;
  }
  return es["en-us"];
}
const es = {
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
let dt = "Music-User-Token";
dt = "Media-User-Token";
function gc() {
  if (typeof navigator > "u") return [];
  if (navigator.languages) return navigator.languages;
  const i = navigator.language || navigator.userLanguage;
  return i ? [i] : [];
}
const $h = [
  "apps.apple.com",
  "books.apple.com",
  "fitness.apple.com",
  "music.apple.com",
  "podcasts.apple.com",
  "tv.apple.com",
];
function vc(i) {
  let e = i;
  return (
    i &&
      $h.some(function (t) {
        if (i.endsWith(`.${t}`)) return ((e = t), !0);
      }),
    e
  );
}
const Hh = new Set(["apps", "books", "music", "podcasts", "tv"]),
  jh = /\.apple\.com$/;
function qh(i) {
  if (!i || !jh.test(i)) return;
  const e = i.split(".");
  let t = e[e.length - 3];
  const r = t;
  if (t && t.includes("-")) {
    const s = t.split("-");
    t = s[s.length - 1];
  }
  if (Hh.has(t)) return r;
}
function Ii(i, e) {
  !e && typeof location < "u" && location.hostname && (e = location);
  let t = `${i}.itunes.apple.com`;
  if (!e) return t;
  const r = qh(e.hostname);
  return (r && (t = `${i}.${r}.apple.com`), t);
}
function nr(i = { app: "music", p: "subscribe" }) {
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
  ie = ((i) => ((i[(i.MUSIC = 0)] = "MUSIC"), (i[(i.PODCAST = 1)] = "PODCAST"), (i[(i.TV = 2)] = "TV"), i))(ie || {});
const Wh = {
    [ie.TV]: "com.apple.onboarding.tvappweb",
    [ie.MUSIC]: "com.apple.onboarding.musicappweb",
    [ie.PODCAST]: "com.apple.onboarding.podcastsweb",
  },
  ts = { [ie.TV]: "pltvcid", [ie.MUSIC]: "pldfltcid", [ie.PODCAST]: "pldfltcid" },
  Gh = {
    "com.apple.onboarding.tvappweb": 1,
    "com.apple.onboarding.musicappweb": 1,
    "com.apple.onboarding.podcastsweb": 1,
  },
  ce = new St("storekit"),
  Aa = "*",
  is = "2.0";
class Ra {
  destination;
  origin;
  methods;
  _registry = {};
  _sequence = 0;
  _source;
  constructor(e = {}) {
    ((this.destination = e.destination),
      (this.methods = e.methods || {}),
      (this.origin = e.origin || Aa),
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
    return (this.send(this.destination, { jsonrpc: is, id: r, method: e, params: t }), s);
  }
  call(e, ...t) {
    return this.apply(e, t);
  }
  async handleRequest(e) {
    const t = { jsonrpc: is, id: e.id },
      r = this.methods[e.method];
    if (!r) return Object.assign(t, { error: { code: -32601, message: "Method not found" } });
    try {
      const s = await r.apply(void 0, Xu(e.params));
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
      e.data.jsonrpc !== is ||
      (this.origin !== Aa && this.origin !== e.origin) ||
      (e.data.method && this.destination
        ? this.handleRequest(e.data).then((t) => {
            this.send(this.destination, t);
          })
        : (Ve(e.data, "result") || e.data.error) && this.handleResponse(e.data));
  };
}
var se = ((i) => (
  (i[(i.UNAVAILABLE = -1)] = "UNAVAILABLE"),
  (i[(i.NOT_DETERMINED = 0)] = "NOT_DETERMINED"),
  (i[(i.DENIED = 1)] = "DENIED"),
  (i[(i.RESTRICTED = 2)] = "RESTRICTED"),
  (i[(i.AUTHORIZED = 3)] = "AUTHORIZED"),
  i
))(se || {});
function Ms(i) {
  return typeof i == "string" && i.length > 0;
}
const Yh = `https://${Ii("buy")}/commerce/account/authenticateMusicKitRequest`,
  Ls = "https://authorize.music.apple.com",
  zh = `${Ls}/upsell`,
  Qh = /^https?:\/\/(.+\.)*(apple\.com|apps\.mzstatic\.com)(\/[\w\d]+)*$/;
var Us = ((i) => ((i[(i.AUTHORIZE = 0)] = "AUTHORIZE"), (i[(i.SUBSCRIBE = 1)] = "SUBSCRIBE"), i))(Us || {});
class Xh {
  constructor(e, t = {}) {
    if (
      ((this.developerToken = e),
      (this.deeplinkParameters = (t && t.deeplinkParameters) || {}),
      (this.iconURL = t && t.iconURL),
      (this.authenticateMethod = (t && t.authenticateMethod) || "GET"),
      this.isServiceView && window.opener !== window)
    ) {
      const r = un()?.getItem("ac"),
        s = r != null ? new URL(r).origin : void 0;
      s && (this.dispatch = new Ra({ destination: window.opener ?? void 0, origin: s, source: window }));
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
        ? (r = `${Ls}/woa?${nr({ ...this.deeplinkParameters, a: btoa(this._thirdPartyInfo()), referrer: s })}`)
        : ((t = this._buildFormElement(Yh)), document.body.appendChild(t)),
      new Promise((n, a) => {
        const o = this.present(r);
        (this._startPollingForWindowClosed(() => {
          a(0);
        }),
          (this.dispatch = new Ra({
            methods: {
              authorize: function (c, l, h) {
                Ms(c) ? n({ restricted: l && l === "1", userToken: c, cid: h }) : a(0);
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
            origin: Ls,
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
        const s = `${zh}?${nr(e)}`;
        (this.present(s),
          window.addEventListener("message", ({ data: n, origin: a, source: o }) => {
            const { closeWindow: c, launchClient: l } = typeof n == "string" ? JSON.parse(n) : n;
            (!a || Qh.test(a)) &&
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
var bc = ((i) => ((i.ID = "us"), (i.LANGUAGE_TAG = "en-gb"), i))(bc || {});
async function Jh(i, e = "https://api.music.apple.com/v1") {
  const t = new Headers({ Authorization: `Bearer ${i}` }),
    s = await (await fetch(`${e}/storefronts`, { headers: t })).json();
  return s.errors ? Promise.reject(s.errors) : s.data;
}
class Ca {
  constructor(e, t, r) {
    ((this.id = e), (this.attributes = t), (this.type = "storefronts"), (this.href = r || `/v1/${this.type}/${e}`));
  }
  href;
  type;
  static async inferFromLanguages(e, t = gc()) {
    const r = await Jh(e),
      s = r.map((l) => l.id),
      n = t[0] || "en-US",
      [a, o] = n.toLowerCase().split(/-|_/),
      c = s.includes(o) ? o : "us";
    return r.find((l) => l.id === c);
  }
}
const _c = ["music.apple.com", "podcasts.apple.com", "tv.apple.com", "apps.apple.com"],
  Tc = "mut-refresh",
  Vi = [Tc, B.DEFAULT_CID, B.STOREFRONT_COUNTRY_CODE, B.TV_CID, B.USER_TOKEN],
  Zh = new Map([
    ["signIn", "/auth/v2/web"],
    ["signOut", "/auth/v2/web/logout"],
    ["refresh", "/auth/v2/web/refresh"],
  ]);
function ep(i) {
  if (!i) return !1;
  for (const e of _c) if (e === i || i.endsWith(`.${e}`)) return !0;
  return !1;
}
async function tp(i) {
  await Promise.allSettled(i);
}
class ip {
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
      (this.allowMultiReflection = a && ep(this.hostname)),
      (this.onUserTokenChange = this.onUserTokenChange.bind(this)),
      ce.debug("Reflector allowMultiReflection?", this.allowMultiReflection));
  }
  onUserTokenChange(e) {
    const t = this.getUserToken(),
      r = this.previousUserToken !== t;
    if (((this.previousUserToken = t), ce.debug("Reflector.onUserTokenChange hasChanged?", r), r))
      return t ? (e?.domainReflection === !1 ? void 0 : this.reflect()) : this.clear();
  }
  skipJsCookieWrite(e) {
    return Vi.includes(e);
  }
  refresh() {
    if (!this.allowMultiReflection) return;
    const e = at(Tc);
    if (at(B.USER_TOKEN) && !e) return this.makeRequests("refresh");
  }
  reflect() {
    if (this.allowMultiReflection) return this.makeRequests("signIn");
    {
      const e = Vi.map((t) => at(t));
      (this.clearAppleComCookies(),
        Vi.forEach((t, r) => {
          const s = e[r],
            n = at(t);
          s &&
            !n &&
            (ce.debug("Reflector.reflect calling setCookie", t, s), ln(t, s, "/", 166, void 0, vc(this.hostname)));
        }));
    }
  }
  clear() {
    if (this.allowMultiReflection) return this.makeRequests("signOut");
    ce.debug("Reflector nothing to clear, no allowMultiReflection");
  }
  makeRequests(e) {
    const t = this.sendRequests(e),
      r = this.requestsComplete;
    return ((this.requestsComplete = tp([r, t])), t);
  }
  async sendRequests(e) {
    ce.debug("Reflector makeRequests()", e);
    try {
      const t = Zh.get(e);
      for (const r of _c) {
        const s = `https://auth.${r}${t}`;
        ce.debug("Reflector.makeRequests for", s);
        try {
          await fetch(s, {
            headers: { Authorization: `Bearer ${this.developerToken}` },
            method: "POST",
            credentials: "include",
          });
        } catch (n) {
          ce.error("Reflector fetch failed for ", s, n);
        }
      }
      this.clearAppleComCookies();
    } catch (t) {
      ce.error("Reflector makeRequests failed", t);
    }
    (ce.debug("Reflector calling onRequestsComplete"), this.onRequestsComplete());
  }
  clearAppleComCookies() {
    (ce.debug("Reflector.clearAppleComCookies"), Vi.forEach((e) => _s(e, void 0, "apple.com")));
  }
}
var rp = Object.defineProperty,
  sp = Object.getOwnPropertyDescriptor,
  np = (i, e, t, r) => {
    for (var s = sp(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && rp(e, t, s), s);
  },
  je = ((i) => (
    (i.authorizationStatusDidChange = "authorizationStatusDidChange"),
    (i.authorizationStatusWillChange = "authorizationStatusWillChange"),
    (i.eligibleForSubscribeView = "eligibleForSubscribeView"),
    (i.authReflectionDidComplete = "authReflectionDidComplete"),
    (i.needsGDPRDidChange = "needsGDPRDidChange"),
    (i.storefrontCountryCodeDidChange = "storefrontCountryCodeDidChange"),
    (i.storefrontIdentifierDidChange = "storefrontIdentifierDidChange"),
    (i.userTokenDidChange = "userTokenDidChange"),
    i
  ))(je || {});
B.DEFAULT_CID;
let Ji = !1;
Ji = !0;
const ap = `https://${Ii("buy")}`,
  op = `https://${Ii("play")}/WebObjects/MZPlay.woa/wa`;
class Ec extends Et {
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
      ce.info("StoreKit initialized"),
      t &&
        (t.apiBase && (this.apiBase = t.apiBase),
        t.deeplink && (this.deeplinkParameters = t.deeplink),
        t.meParameters && (this.meParameters = t.meParameters),
        t.persist && (this.persist = t.persist),
        t.prefix && (this.prefix = t.prefix),
        t.realm !== void 0 && (this.realm = t.realm),
        t.disableLogoutURL !== void 0 && (this._disableLogoutURL = t.disableLogoutURL),
        (this.bundleId = Wh[this.realm])),
      (this.fetch = t !== void 0 && typeof t.fetch == "function" ? t.fetch : globalThis.fetch.bind(globalThis)),
      (this.cidNamespace = ts[this.realm]),
      (this._developerToken = new gd(e)),
      (this._serviceSetupView = new Xh(e, {
        authenticateMethod: t && t.authenticateMethod,
        iconURL: t && t.iconURL,
        deeplinkParameters: this.deeplinkParameters,
      })),
      (this.storagePrefix = `${this.prefix}.${this._developerToken.teamId}`.toLocaleLowerCase()),
      !yt() &&
        this.persist === "cookie" &&
        (ce.debug("Creating Reflector"),
        (this.reflector = new ip({
          hostname: window.location.hostname,
          developerToken: this.developerToken,
          getUserToken: () => this.userToken,
          startingUserToken: at(B.USER_TOKEN),
          onRequestsComplete: () => {
            (this.userToken !== at(B.USER_TOKEN) &&
              (ce.debug("StoreKit.onRequestsComplete called, resetting"),
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
      yt() ||
        (this._processLocationHash(window.location.hash), this.persist === "cookie" && this.reflector?.refresh()));
  }
  apiBase = "https://api.music.apple.com/v1";
  bundleId;
  cidNamespace;
  deeplinkParameters;
  iconURL;
  iTunesBuyBase = ap;
  meParameters = {};
  persist = "localstorage";
  playBase = op;
  prefix = "music";
  realm = ie.MUSIC;
  storage = Ie();
  storagePrefix;
  whenAuthCompleted;
  fetch;
  _authorizationStatus = se.NOT_DETERMINED;
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
  _dynamicUserToken = at(B.USER_TOKEN);
  updateUserTokenFromStorage(e) {
    this.realm === ie.TV && (this._cids = {});
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
      const s = (id(B.USER_TOKEN) || []).find((n) => n !== this.userToken);
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
    return this.authorizationStatus > se.DENIED;
  }
  get logoutURL() {
    if (!this._disableLogoutURL)
      return Ji ? `${this.iTunesBuyBase}/account/web/logout` : `${this.playBase}/webPlayerLogout`;
  }
  get parentalControls() {
    return this._parentalControls;
  }
  set parentalControls(e) {
    ((this._parentalControls = e),
      e &&
        (this.realm === ie.MUSIC || this.realm === ie.PODCAST
          ? (this.restrictedEnabled = e.musicParentalControlsEnabled)
          : this.realm === ie.TV && e.videoContentRestrictions && (this.authorizationStatus = se.RESTRICTED)));
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
        (this._needsGDPR = this._gdprVersion < (Gh[this.bundleId] || 0)),
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
      e && (this.authorizationStatus = se.RESTRICTED));
  }
  overrideRestrictEnabled(e) {
    ((this._restrictedEnabledOverridden = !1), (this.restrictedEnabled = e), (this._restrictedEnabledOverridden = !0));
  }
  get storefrontCountryCode() {
    if (!this._storefrontCountryCode) {
      const e = this._getStorageItem(B.STOREFRONT_COUNTRY_CODE);
      this._storefrontCountryCode = e?.toLowerCase() || bc.ID;
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
    e && Ms(e)
      ? (t && this._setStorageItem(B.USER_TOKEN, e),
        (this.authorizationStatus = this.restrictedEnabled ? se.RESTRICTED : se.AUTHORIZED))
      : (this._removeStorageItem(B.USER_TOKEN), (this.authorizationStatus = se.NOT_DETERMINED));
  }
  wrapDynamicUserTokenForChanges(e, t = xi(e)) {
    if (typeof e != "function") return e;
    let r = t;
    return () => {
      const s = xi(e);
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
    const t = xi(e);
    ((this._dynamicUserToken = this.wrapDynamicUserTokenForChanges(e, t)),
      this.runTokenValidations(t, typeof e != "function"),
      this.dispatchEvent("userTokenDidChange", {
        userToken: t,
        domainReflection: this._pendingUpdateConfig?.domainReflection,
      }));
  }
  get userToken() {
    return xi(this.dynamicUserToken);
  }
  set userToken(e) {
    this.dynamicUserToken = e;
  }
  get userTokenIsValid() {
    return Ms(this.userToken);
  }
  deeplinkURL(e = {}) {
    return (
      (e = { ...(this.deeplinkParameters || {}), ...e }), `https://finance-app.itunes.apple.com/deeplink?${nr(e)}`
    );
  }
  itunesDeeplinkURL(e = { p: "browse" }) {
    return ((e = { ...(this.deeplinkParameters || {}), ...e }), `https://itunes.apple.com/deeplink?${nr(e)}`);
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
    if (this.authorizationStatus <= se.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const e = new Headers({ Authorization: `Bearer ${this.developerToken}`, [dt]: this.userToken || "" }),
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
      const e = await Ca.inferFromLanguages(this.developerToken);
      this.storefrontIdentifier = e.id;
    }
    return this.storefrontIdentifier;
  }
  async requestUserToken() {
    if (this._serviceSetupView.isServiceView) return this.userToken || "";
    try {
      const e = await this._serviceSetupView.load({ action: Us.AUTHORIZE });
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
      newAuthorizationStatus: se.NOT_DETERMINED,
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
    return this.realm === ie.PODCAST ? !0 : !!(await this.me()).subscription?.active;
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
        const s = await this._serviceSetupView.load({ action: Us.SUBSCRIBE });
        return ((this._dispatchedSubscribeView = !0), s);
      } catch {
        return this.revokeUserToken();
      }
    }
  }
  async infoRefresh() {
    if (this.authorizationStatus <= se.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const e = new Headers({ Authorization: `Bearer ${this.developerToken}`, [dt]: this.userToken || "" });
    try {
      const r = await (
        await this.fetch(`${this.iTunesBuyBase}/account/web/infoRefresh`, { credentials: "include", headers: e })
      ).json();
      this.setCids(r);
    } catch {}
  }
  me() {
    return this.authorizationStatus <= se.DENIED
      ? Promise.reject(`Not authorized: ${this.authorizationStatus}`)
      : (this._me ||
          (this._me = new Promise(async (e, t) => {
            const r = new Headers({ Authorization: `Bearer ${this.developerToken}`, [dt]: this.userToken || "" }),
              s = kr(this.apiBase, "/me/account", { meta: "subscription", ...this.meParameters });
            let n;
            try {
              n = await this.fetch(s, { headers: r });
            } catch {
              return t(new p(p.Reason.NETWORK_ERROR, "Failed to fetch /me/account"));
            }
            if (n && !n.ok)
              return (
                this.realm !== ie.TV && (n.status === 401 || n.status === 403) && this._reset(), t("Account error.")
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
                Zu(this.privacyAcknowledgements || {}))
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
  async musicSubscriptionOffers(e, t = gc()) {
    let r;
    this.hasAuthorized
      ? (r = (await this.me()).info.storeFrontISO3A)
      : (e || (e = (await Ca.inferFromLanguages(this.developerToken, t))?.id),
        (r = (e && Vh[e.toUpperCase()]) || "USA"));
    const s = Bh(t[0]),
      n = xh[r];
    if (!s || !n) return [];
    const a = new Headers({ "X-Apple-Store-Front": `${n}-${s},8` });
    this.userToken &&
      (a.set("Authorization", `Bearer ${this.developerToken}`), a.set("Music-User-Token", this.userToken));
    const o = await this.fetch(`${this.iTunesBuyBase}/commerce/web/subscription/offers/music`, { headers: a });
    return o.ok ? (await o.json()).offers : Promise.reject(o.status);
  }
  _getStorageItem(e) {
    if (e) {
      if (this.persist === "cookie") return at(e);
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
    (ce.debug("Calling removeCookie", e), _s(e));
    const { hostname: r } = t.location,
      s = r.split(".");
    if (s.length && (s.shift(), s.length > 2))
      for (let n = s.length; n > 2; n--) {
        const a = s.join(".");
        (s.shift(), ce.debug("Calling removeCookie", e, t, a), _s(e, t, a));
      }
  }
  _reset(e = se.NOT_DETERMINED) {
    ((this._authorizationStatus = e),
      (this._cids = {}),
      (this._dispatchedSubscribeView = !1),
      (this._restrictedEnabled = void 0),
      (this._storefrontCountryCode = void 0),
      this._getIsActiveSubscription.updateCache(void 0),
      Object.keys(ts).forEach((t) => {
        this._removeStorageItem(ts[t]);
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
        : (ce.debug("Calling setCookie from _setStorageItem", e, t),
          ln(e, t, "/", 180, void 0, vc(window.location.hostname)));
    if (this.persist === "localstorage") return this.storage?.setItem(`${this.storagePrefix}.${e}`, t);
  }
  async _webPlayerLogout() {
    const e = this.logoutURL;
    if (!e) return;
    const t = new Headers({
      Authorization: `Bearer ${this.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      [`X-Apple-${dt}`]: `${this.userToken}`,
    });
    Ji && (t.delete(`X-Apple-${dt}`), t.append(dt, this.userToken || ""));
    const r = await this.fetch(e, { method: "POST", headers: t, credentials: Ji ? "include" : "same-origin" });
    return r && !r.ok ? Promise.reject(r.status) : r.json();
  }
}
np([Kh(15 * 60)], Ec.prototype, "_getIsActiveSubscription");
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
  Fe = ((i) => ((i[(i.pictureinpicture = 0)] = "pictureinpicture"), (i[(i.inline = 1)] = "inline"), i))(Fe || {});
function gn() {
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
const cp = [
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
function vn(i) {
  return i?.attributes?.playParams?.kind !== void 0 ? i.attributes.playParams.kind : i?.type;
}
function lp(i) {
  return i == null ? !1 : i.isUTS === !0 || cp.includes(i.type) || i.attributes?.mediaKind === "video";
}
function up(i) {
  return i == null ? !1 : !lp(i);
}
function ar(i) {
  return vn(i) === "song";
}
function wr(i) {
  return vn(i)?.startsWith("podcast-episode") === !0;
}
function dp(i) {
  const e = i?.attributes?.offers ?? [];
  return wr(i) && e.some(({ type: t }) => t === "STDQ");
}
function kc(i) {
  const e = i?.attributes?.offers ?? [];
  return wr(i) && e.some(({ type: t }) => t === "PSUB");
}
function Zi(i) {
  const e = i?.attributes?.offers ?? [];
  return wr(i) && e.some(({ type: t }) => t === "PLUS");
}
function bn(i) {
  return !!i?.attributes?.isLive;
}
function _n(i) {
  return i?.attributes?.playParams?.format === "stream";
}
function Sc(i) {
  return i?.attributes?.playParams?.format === "tracks";
}
function hp(...i) {
  return Sc(...i);
}
function pp(i) {
  return hp(i);
}
function Pi(i, e) {
  return !(i?.attributes?.playParams?.kind !== "radioStation" || (e !== void 0 && i.attributes?.mediaKind !== e));
}
function Tn(i, e) {
  return Pi(i, e) && _n(i) && !bn(i) && i?.attributes?.streamingRadioSubType === "Episode";
}
function er(i, e) {
  return Pi(i, e) && bn(i) && _n(i);
}
function $T(i, e) {
  return er(i, e);
}
function fp(i, e) {
  return Tn(i, e) || !!i?.attributes?.isAOD;
}
function yp(i) {
  return (
    bn(i) && _n(i) && i.attributes.stationProviderName !== void 0 && i.attributes.streamingRadioSubType === "Shoutcast"
  );
}
function mp(i) {
  return i?.type === "LiveService" || i?.defaultPlayable?.type === "Event" || i?.defaultPlayable?.type === "EbsEvent";
}
function gp(i) {
  return rh(i);
}
function HT(i) {
  return i.match(/-?songs$/i) !== null;
}
const vp = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function jT(i) {
  const e = vn(i);
  return e !== void 0 && vp.includes(e);
}
const Ic = "explicit",
  Pc = [
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
  bp = "mediaItemStateDidChange",
  _p = "mediaItemStateWillChange",
  xs = { mediaItemStateDidChange: bp, mediaItemStateWillChange: _p },
  wc = new St("media-item");
function or(i) {
  let e = i.id;
  const t = i.attributes ?? {};
  let r = "";
  const s = t.name || t.title;
  return (
    H(s) || (r += s),
    H(t.albumName) || (r += " - " + t.albumName),
    H(t.artistName) || (r += " - " + t.artistName),
    r !== "" && (e += ` (${r})`),
    e
  );
}
var le = ((i) => (
    (i[(i.none = 0)] = "none"),
    (i[(i.preview = 1)] = "preview"),
    (i[(i.unencryptedFull = 2)] = "unencryptedFull"),
    (i[(i.encryptedFull = 3)] = "encryptedFull"),
    i
  ))(le || {}),
  F = ((i) => (
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
  ))(F || {});
const {
    none: Ac,
    loading: Oa,
    ready: Da,
    playing: Na,
    ended: rs,
    unavailable: ss,
    restricted: Bi,
    error: ei,
    unsupported: $i,
  } = F,
  Rc = {
    [Ac]: { allowed: [Oa], unknown: [rs, ss, Bi, ei, $i] },
    [Oa]: { allowed: [Da, Bi, ei, $i], unknown: [] },
    [Da]: { allowed: [Na], unknown: [ei] },
    [Na]: { allowed: [rs, ei], unknown: [ss, Bi, $i] },
    [rs]: { allowed: [], unknown: [] },
    [ss]: { allowed: [], unknown: [] },
    [Bi]: { allowed: [], unknown: [] },
    [ei]: { allowed: [], unknown: [] },
    [$i]: { allowed: [], unknown: [] },
  },
  Ma = (i) => F[i],
  Tp = (i, e) => Rc[i].allowed.includes(e),
  Ep = (i, e) => Rc[i].unknown.includes(e),
  kp = (i = Ac) => {
    const e = {
      current: i,
      set: function (t) {
        const { current: r } = e;
        if (!Tp(r, t)) {
          const s = Ep(r, t);
          wc.debug(
            `MediaItem.state was changed from ${Ma(r)} to ${Ma(t)}`,
            s ? "but it is unknown whether it should be allowed or not." : "and it should not be happening",
          );
        }
        e.current = t;
      },
    };
    return e;
  },
  { mediaItemStateDidChange: La, mediaItemStateWillChange: Ua } = xs;
class mi extends Et {
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
  playbackType = le.none;
  href;
  relationships;
  _container;
  _context;
  _releaseDate;
  _state = kp();
  _stateDidChange;
  _stateWillChange;
  assets = [];
  keyURLs;
  constructor(e = {}) {
    (super([La, Ua]), wc.debug("media-item: creating Media Item with options:", e));
    const t = "song";
    (e.id && e.attributes
      ? (Object.assign(this, e), (this.type = this.playParams?.kind ? this.playParams.kind : this.type || t))
      : ((this.id = e.id || Si()),
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
    return mp(this);
  }
  get isAlgoStation() {
    return pp(this);
  }
  get isRadioStation() {
    return Pi(this);
  }
  get isRadioEpisode() {
    return Tn(this);
  }
  get isLiveRadioStation() {
    return er(this);
  }
  get isLiveAudioStation() {
    return er(this, "audio");
  }
  get isLiveVideoStation() {
    return er(this, "video");
  }
  get isAOD() {
    return fp(this);
  }
  get isSong() {
    return ar(this);
  }
  get isPodcastEpisode() {
    return wr(this);
  }
  get info() {
    return `${this.title} - ${this.albumInfo}`;
  }
  get isCloudItem() {
    return this.isLibraryItem;
  }
  get isLibrary() {
    return this.playParams?.isLibrary === !0 || fi(this.playParams?.id) || fi(this.id);
  }
  get isLibraryItem() {
    return this.isLibrary;
  }
  get isCloudUpload() {
    return this.isLibraryItem && this.playParams.reporting === !1 && this.playParams.catalogId === void 0;
  }
  get isExplicitItem() {
    return this.contentRating === Ic;
  }
  get isLoading() {
    return this.state === F.loading;
  }
  get isPlayableMediaType() {
    return this.isUTS || Pc.indexOf(this.type) !== -1;
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
    return this.state === F.playing;
  }
  get isPreparedToPlay() {
    const e = Dt(this.catalogId) && !H(this.catalogId),
      t = Dt(this.assetURL) && !H(this.assetURL),
      r = !!(
        this.keyURLs &&
        !H(this.keyURLs["hls-key-cert-url"]) &&
        !H(this.keyURLs["hls-key-server-url"]) &&
        !H(this.keyURLs["widevine-cert-url"])
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
    return this.state === F.ready;
  }
  get isRestricted() {
    return this.state === F.restricted;
  }
  get isUTS() {
    return !!this.defaultPlayable;
  }
  get isUnavailable() {
    return this.state === F.unavailable;
  }
  get needsPlayParams() {
    return ["musicMovie", "musicVideo", "song"].includes(this.type);
  }
  get normalizedType() {
    return gp(this.type);
  }
  get offers() {
    return this.attributes.offers;
  }
  get offersHlsUrl() {
    const { offers: e } = this;
    return e?.find((r) => !!r.hlsUrl?.length)?.hlsUrl;
  }
  get hasOffersHlsUrl() {
    return Dt(this.offersHlsUrl) && !H(this.offersHlsUrl);
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
      this.dispatchEvent(Ua, t),
      this._state.set(e),
      this._stateDidChange && this._stateDidChange(this),
      this.dispatchEvent(La, t));
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
    (this.endMonitoringStateWillChange(), this.endMonitoringStateDidChange(), (this.state = F.none));
  }
  restrict() {
    this.isExplicitItem && ((this.state = F.restricted), this._removePlayableData());
  }
  notSupported() {
    ((this.state = F.unsupported), this._removePlayableData());
  }
  updateFromLoadError(e) {
    switch (e.reason) {
      case p.Reason.CONTENT_RESTRICTED:
        this.state = F.restricted;
        break;
      case p.Reason.CONTENT_UNAVAILABLE:
        this.state = F.unavailable;
        break;
      default:
        this.state = F.error;
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
  u = new St("player"),
  gi = "mk-player-tsid",
  Cc = 'audio/mp4;codecs="mp4a.40.2"',
  Sp = 'video/mp4;codecs="avc1.42E01E"',
  Fs = "mk-audio-track",
  Ks = "mk-text-track",
  Oc = "mk-video-track",
  rt = "Off",
  Hi = "disabled",
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
  Ip = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
  Pp = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"],
  wp = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
  cr = () => Promise.resolve(),
  Ap = (i) => {
    if (typeof i > "u") return cr;
    const e = Ip.find((t) => typeof i.prototype[t] == "function");
    return typeof e != "string" ? cr : (t = self.document) => t?.[e]?.();
  },
  Rp = Ap(Document),
  Cp = (i) => {
    if (typeof i > "u") return () => !1;
    const e = Pp.find((t) => t in i.prototype);
    return typeof e != "string" ? () => !1 : (t = self.document) => !!t[e];
  },
  Dc = Cp(Document),
  Op = (i) => {
    if (typeof i > "u") return cr;
    const e = wp.find((t) => typeof i.prototype[t] == "function");
    return typeof e != "string" ? cr : (t) => t?.[e]();
  },
  Dp = Op(HTMLElement);
class Nc {
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
    return Rp();
  }
  isInFullscreen() {
    return Dc();
  }
  requestFullscreenForElement(e) {
    return Dp(e);
  }
}
class Np {
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
class En {
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
var Mp = Object.defineProperty,
  Lp = Object.getOwnPropertyDescriptor,
  kn = (i, e, t, r) => {
    for (var s = Lp(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Mp(e, t, s), s);
  };
const {
  visibilityChangeEvent: lr,
  visibilityState: Vs,
  unloadEventName: xa,
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
class Ht {
  player;
  runtimeEnvironment;
  dispatchVisibilityChanges = !0;
  constructor(e, t) {
    ((this.player = e), (this.runtimeEnvironment = t));
  }
  activate(e = self, t = self.document) {
    (t.addEventListener(lr, this.visibilityChanged),
      e.addEventListener("storage", this.storage, !1),
      e.addEventListener(xa, this.windowUnloaded));
  }
  deactivate() {
    (document.removeEventListener(lr, this.visibilityChanged),
      window.removeEventListener("storage", this.storage),
      window.addEventListener(xa, this.windowUnloaded));
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
    e === gi && this.player.tsidChanged(t);
  }
  visibilityChanged(e) {
    const t = e.target[Vs];
    (u.info("dc visibilityState", t, e, Dc()),
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
kn([T()], Ht.prototype, "storage");
kn([T()], Ht.prototype, "visibilityChanged");
kn([T()], Ht.prototype, "windowUnloaded");
var Up = Object.defineProperty,
  xp = Object.getOwnPropertyDescriptor,
  Fp = (i, e, t, r) => {
    for (var s = xp(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Up(e, t, s), s);
  };
const Fa = [
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
  Kp = ["NotAllowedError", "NotSupportedError"];
class Ar {
  id = Si();
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
      (this.windowHandlers = new Ht(this, e.services.runtime)),
      (this.fullscreen = new Nc(this)),
      Ie()?.setItem(gi, this._serial),
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
      r = e.playbackType === le.encryptedFull || e.playbackType === le.unencryptedFull,
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
        ? Ie()?.setItem(gi, this._serial)
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
        (r.state = F.ended),
        r.endMonitoringStateDidChange(),
        r.endMonitoringStateWillChange()),
      (this._nowPlayingItem = e),
      u.debug("setting state to playing on ", e.title),
      (e.state = F.playing),
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
      Fa.forEach((t) => e.addEventListener(t, this)),
      this._dispatcher.publish(S.playerActivate));
  }
  removeEventHandlers() {
    (u.trace("BasePlayer.removeEventHandlers()"),
      setTimeout(() => {
        (u.debug(`Removing event handlers from <HTMLMediaElement id=${this._targetElement.id} />`, this._targetElement),
          Fa.forEach((e) => this._targetElement.removeEventListener(e, this)),
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
    return (this._seeker?.end(), (this._seeker = new En(this)), this._seeker);
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
          (this._targetElement.error?.code === 4 || this._targetElement.error?.code === 3) && !ar(this.nowPlayingItem))
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
          (t && Kp.includes(t.name) && u.error("BasePlayer.play() rejected due to", t), t?.name === "NotAllowedError")
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
      Ve(t, "isPlaying") || (t.isPlaying = this.isPlaying),
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
      (this._deferredPlay = gn()),
      this._deferredPlay.promise
    );
  }
  toString() {
    return `<${this.constructor.name} id="${this.id}" isInitialized=${this.isInitialized} isDestroyed=${this.isDestroyed} />`;
  }
}
Fp([T()], Ar.prototype, "onPlaybackError");
function wi(i, e) {
  if (i.type === "Preview" && !H(i.previewURL, { trim: !0 })) return i.previewURL;
  if (!i.assetURL) throw new Error("Cannot generate asset URL");
  const t = {};
  return (
    i.isUTS && (t.vsgn = "all"),
    e?.startOver && (t.startOver = !0),
    e?.bingeWatching && (t.bingeWatching = !0),
    e?.drmUsed && (t.drmUsed = e.drmUsed),
    i.supportsLinearScrubbing && (t.linearScrubbingSupported = !0),
    i.assetURL.match(/xapsub=accepts-css/) || (t.xapsub = "accepts-css"),
    kr(i.assetURL, t)
  );
}
var x = ((i) => (
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
  ))(x || {}),
  Lt = ((i) => ((i.MP4 = "audio/mp4"), (i.AVC1 = "video/mp4"), i))(Lt || {}),
  Vp = ((i) => (
    (i.Home = "com.apple.amp.appletv.home-team-radio"),
    (i.Away = "com.apple.amp.appletv.away-team-radio"),
    i
  ))(Vp || {});
const Bp = "com.apple.amp.appletv.identifier",
  Mc = "public.accessibility.describes-video",
  $p = "public.accessibility.sign-language-interpretation";
function Hp(i) {
  return (i.MediaSelectionOptionsTaggedMediaCharacteristics ?? []).includes(Mc);
}
function jp(i) {
  return i.characteristics !== void 0 && i.characteristics.includes("com.apple.amp.appletv.home-team-radio");
}
function qp(i) {
  return i.characteristics !== void 0 && i.characteristics.includes("com.apple.amp.appletv.away-team-radio");
}
function qT(i) {
  return i.characteristics?.find((e) => e.startsWith(Bp));
}
function Bs(i) {
  return { label: i.label, kind: i.kind, language: i.language };
}
function Lc(i, e) {
  nd(i, Bs(e));
}
function Rr(i) {
  return sd(i);
}
function Rt(i, e) {
  const t = Bs(i),
    r = Bs(e);
  for (const s of Object.keys(t)) if (t[s] !== r[s]) return !1;
  return !0;
}
function ns(i) {
  return Wp(i)
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
function Wp(i) {
  return typeof i == "object" && i !== null && "MediaSelectionOptionsExtendedLanguageTag" in i;
}
function Sn(i, e) {
  if (!e?.language) return;
  const t = e.kind === "description",
    r = i.filter((s) => s.MediaSelectionOptionsExtendedLanguageTag === e.language && Hp(s) === t);
  return !("id" in e) || r.length === 1 ? r[0] : r.find((s) => s.MediaSelectionOptionsPersistentID === e.id);
}
function Gp(i) {
  return i.find((e) => e.MediaSelectionOptionsIsDefault);
}
function Uc(i, e) {
  return Sn(i, Rr(e));
}
function Ka(i, e) {
  return xc(i, Fs, e);
}
function Yp(i, e) {
  return xc(i, Oc, e);
}
function xc(i, e, t) {
  return Sn(i, t) ?? Uc(i, e) ?? Gp(i) ?? i[0];
}
function as(i, e, t) {
  return Sn(i, t) ?? Uc(i, Ks) ?? zp(i, e);
}
function zp(i, e) {
  if (!e) return;
  const t = e.MediaSelectionOptionsExtendedLanguageTag;
  return i.find(
    (r) => r.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 && r.MediaSelectionOptionsExtendedLanguageTag === t,
  );
}
function In(i) {
  return {
    id: i.MediaSelectionOptionsPersistentID,
    label: i.MediaSelectionOptionsName,
    language: i.MediaSelectionOptionsExtendedLanguageTag,
    interstitialId: i.MediaSelectionOptionsInterstitialId,
    isDefault: i.MediaSelectionOptionsIsDefault,
  };
}
function Qp(i) {
  const e = i.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e ?? []).includes(Mc) ? "description" : "main";
  return { ...In(i), enabled: !1, kind: t, characteristics: e };
}
function Xp(i) {
  const e = i.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e ?? []).includes($p) ? "sign" : "main";
  return { ...In(i), enabled: !1, kind: t, characteristics: e };
}
function Va(i) {
  let e;
  return (
    i.MediaSelectionOptionsTaggedMediaCharacteristics?.includes("public.accessibility.describes-music-and-sound")
      ? (e = "captions")
      : (e = i.MediaSelectionOptionsMediaType === "clcp" ? "captions" : "subtitles"),
    { ...In(i), mode: "disabled", kind: e }
  );
}
class Jp {
  constructor(e, t, r) {
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = r), this.extensionTracks))
      (u.debug("MEDIA_TRACK Initializing audio track manager for hls track events"),
        (this.onExtensionAudioTracksUpdated = this.onExtensionAudioTracksUpdated.bind(this)),
        (this.onExtensionAudioTrackSwitched = this.onExtensionAudioTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(x.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.addEventListener(x.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
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
        !jp(e) &&
        !qp(e) &&
        (Lc(Fs, e), u.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`)),
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
      (this.extensionTracks.removeEventListener(x.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.removeEventListener(x.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
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
    const t = Rr(Fs);
    (t !== void 0 &&
      Rt(e.track, t) &&
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
class Zp {
  constructor(e, t, r) {
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = r), this.extensionTracks))
      (u.debug("MEDIA_TRACK Initializing video track manager for hls track events"),
        (this.onExtensionVideoTracksUpdated = this.onExtensionVideoTracksUpdated.bind(this)),
        (this.onExtensionVideoTrackSwitched = this.onExtensionVideoTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(x.videoTracksUpdated, this.onExtensionVideoTracksUpdated),
        this.extensionTracks.addEventListener(x.videoTracksSwitched, this.onExtensionVideoTrackSwitched));
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
      (this.extensionTracks.removeEventListener(x.videoTracksUpdated, this.onExtensionVideoTracksUpdated),
        this.extensionTracks.removeEventListener(x.videoTracksSwitched, this.onExtensionVideoTrackSwitched));
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
    const t = Rr(Oc);
    (t !== void 0 &&
      Rt(e.track, t) &&
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
const ur = [],
  dr = [],
  ef = 100;
function tf() {
  let i = ur.pop();
  return (
    i
      ? u.debug(`dom-helpers: retrieving video tag, ${ur.length} remain`)
      : (u.debug("dom-helpers: no available video tags, creating one"), (i = document.createElement("video"))),
    i
  );
}
function Pn() {
  let i = dr.pop();
  return (
    i
      ? u.debug(`dom-helpers: retrieving audio tag, ${dr.length} remain`)
      : (u.debug("dom-helpers: no available audio tags, creating one"), (i = document.createElement("audio"))),
    i
  );
}
function rf() {
  (sf(),
    u.debug(
      `dom-helpers: defer playback called.  There are ${ur.length} available video elements and ${dr.length} available audio elements.`,
    ));
}
function sf() {
  (Ba("audio", dr), Ba("video", ur));
}
function Ba(i, e) {
  let t = ef - e.length;
  for (; t > 0;) {
    const r = document.createElement(i);
    (r.load(), e.push(r), t--);
  }
}
function nf(i) {
  return i != null && typeof i.id == "string" && "removeEventListener" in i;
}
function af(i) {
  return i != null && typeof i.id == "string" && typeof i.value < "u" && typeof i.value.key == "string";
}
const Fc = {
    [Y.clearkey]: "",
    [Y.widevine]: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
    [Y.playready]: "com.microsoft.playready",
    [Y.fairplay]: "com.apple.streamingkeydelivery",
  },
  { textTracksSwitched: $a, textTracksUpdated: Ha, itemPlaying: ja } = x;
class of {
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
          this.extensionTracks.addEventListener(Ha, this.onExtensionTextTracksUpdated),
          this.extensionTracks.addEventListener($a, this.onExtensionTextTrackSwitched),
          this.extensionTracks.addEventListener(ja, this.onExtensionItemPlaying))
        : (u.debug("MEDIA_TRACK Initializing text track manager for native track events"),
          (this.onTextTrackAdded = this.onTextTrackAdded.bind(this)),
          (this.onTextTrackChanged = this.onTextTrackChanged.bind(this)),
          (this.onTextTrackRemoved = this.onTextTrackRemoved.bind(this)),
          (this.onPlayStart = this.onPlayStart.bind(this)),
          e.textTracks.addEventListener("addtrack", this.onTextTrackAdded),
          e.textTracks.addEventListener("change", this.onTextTrackChanged),
          e.textTracks.addEventListener("removetrack", this.onTextTrackRemoved),
          e.addEventListener("playing", this.onPlayStart),
          (this.onAudioTrackAddedOrChanged = Yu(this.onAudioTrackAddedOrChanged.bind(this))),
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
    (Lc(Ks, e),
      u.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`),
      this.extensionTracks
        ? (u.debug(`MEDIA_TRACK Setting track on extension ${e.label}`),
          e.label === rt && this.clearCurrentlyPlayingTrack(),
          (this.extensionTracks.textTrack = e))
        : (u.debug(`MEDIA_TRACK Setting track on element ${e.label}`),
          this._tracks.forEach((r) => {
            r !== e && r.mode === Le && (r.mode = Hi);
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
      (e.removeEventListener(Ha, this.onExtensionTextTracksUpdated),
        e.removeEventListener($a, this.onExtensionTextTrackSwitched),
        e.removeEventListener(ja, this.onExtensionItemPlaying));
    }
    this._audioTrackSubscription?.unsubscribe();
  }
  restoreSelectedTrack() {
    const e = this.getValidSavedTrack();
    e && (u.debug(`Found track matching persisted track: ${e.label}`), (this.currentTrack = e));
  }
  getSavedTrack() {
    return Rr(Ks);
  }
  getValidSavedTrack() {
    const e = this.getSavedTrack();
    if (e) return this.tracks.find((t) => Rt(t, e));
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
          ? (t.forced && s.label === rt) || (t.label === rt && s.label === rt)
            ? (s.mode = Le)
            : (s.mode = t.persistentID === s.id ? Le : Hi)
          : (s.mode = s.label === rt ? Le : Hi);
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
    if ((r || (r = this._tracks[0]), t && !Rt(t, r)))
      if (this.isTrackOff(r) && t.kind !== "forced") {
        const s = this.tracks.find((n) => Rt(n, r));
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
      if (Rt(r, e)) return r;
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
    this._currentlyPlayingTrack === void 0 || !nf(this._currentlyPlayingTrack) || delete this._currentlyPlayingTrack;
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
    return { id: -2, label: rt, language: "", kind: "subtitles", mode: !e || this.isTrackOff(e) ? Le : Hi };
  }
  isTrackOff(e) {
    return e.label === rt;
  }
}
var cf = Object.defineProperty,
  lf = Object.getOwnPropertyDescriptor,
  uf = (i, e, t, r) => {
    for (var s = lf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && cf(e, t, s), s);
  };
const df = "apple-music-video-container",
  hf = "picture-in-picture",
  Kc = "inline",
  pf = { "picture-in-picture": Fe.pictureinpicture, inline: Fe.inline },
  wn = {};
wn[Fe.pictureinpicture] = hf;
wn[Fe.inline] = Kc;
const { presentationModeDidChange: os } = f,
  { playbackLicenseError: ff } = x,
  { stopped: WT } = I;
class An extends Ar {
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
    return this._context.videoContainerElement ? this._context.videoContainerElement : document.getElementById(df);
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
    (this.resetDeferredPlay(), this._dispatcher.publish(ff, e));
  }
  setupTrackManagers(e) {
    (this.textTrackManager?.destroy?.(),
      (this.textTrackManager = new of(this._targetElement, this._dispatcher, e)),
      this.audioTrackManager?.destroy?.(),
      (this.audioTrackManager = new Jp(this._targetElement, this._dispatcher, e)),
      this.videoTrackManager?.destroy?.(),
      (this.videoTrackManager = new Zp(this._targetElement, this._dispatcher, e)));
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
    if (!e) throw new y("mk-117", y.Reason.CONFIGURATION_ERROR, "No container element found");
    ((this.video = tf()),
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
        this._dispatcher.publish(os, { mode: Fe.pictureinpicture });
        break;
      }
      case "leavepictureinpicture": {
        this._dispatcher.publish(os, { mode: Fe.inline });
        break;
      }
      case "webkitpresentationmodechanged": {
        const t = this._targetElement;
        this._dispatcher.publish(os, { mode: this._translateStringToPresentationMode(t.webkitPresentationMode) });
        break;
      }
    }
  }
  async playItemFromEncryptedSource(e, t = !1, r = {}) {
    (u.debug("videoPlayer.playItemFromEncryptedSource", e, t),
      (e.playbackType = le.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = F.loading),
      (this.userInitiated = t));
    const s = wi(e, { ...r, drmUsed: this.services.runtime.preferredKeySystem });
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
      if (e === Fe.pictureinpicture) return t.requestPictureInPicture();
      if (e === Fe.inline) return document.exitPictureInPicture();
    }
  }
  _translateStringToPresentationMode(e) {
    let t = pf[e];
    return (
      t === void 0 &&
        (u.warn(
          `videoPlayer._translateStringToPresentationMode ${e} is not a valid presentation mode, setting to inline`,
        ),
        (t = Fe.inline)),
      t
    );
  }
  _translatePresentationModeToString(e) {
    let t = wn[e];
    return (
      t === void 0 &&
        (u.warn(
          `videoPlayer._translatePresentationModeToString ${e} is not a valid presentation mode, setting to inline`,
        ),
        (t = Kc)),
      t
    );
  }
  async preloadItem(e, t) {}
}
uf([T()], An.prototype, "onPlaybackLicenseError");
const yf = 1e3,
  mf = 3,
  Vc = (i, e, t, r = 0) =>
    i().catch((s) => {
      const n = r + 1;
      function a(c) {
        if (c && n < mf) {
          const l = yf * n;
          return new Promise((h, g) => {
            setTimeout(() => {
              Vc(i, e, t, n).then(h, g);
            }, l);
          });
        }
        throw s;
      }
      const o = e(s);
      return typeof o == "boolean" ? a(o) : o.then(a);
    });
let vi = { developerToken: "developerTokenNotSet", musicUserToken: "musicUserTokenNotSet" };
function gf(i) {
  vi = i;
}
function vf(i, e = !1) {
  return {
    adamId: i.isPurchasedSong ? i.playParams.purchasedId : (i.catalogId ?? "-1"),
    isLibrary: i.isLibrary,
    "user-initiated": e,
  };
}
function bf(i) {
  return { event: i.isLiveAudioStation ? "beats1" : "amtv" };
}
function _f(i) {
  return { "adam-id": i.id, id: 1 };
}
function Tf(i, e, t = 0) {
  const r = i.keyServerQueryParameters ?? {};
  return { id: t, "lease-action": e, ...r };
}
function qa(i, e, t) {
  let r,
    s = {
      challenge: "challenge" in t ? t.challenge : Xe(t.licenseChallenge),
      uri: t.keyuri,
      "key-system": t.keySystem,
      stkn: t.slotToken,
    };
  return (
    t.extendedLease && (s["extended-lease"] = t.extendedLease),
    (s = sh(s, Object.keys(s))),
    e.isUTS
      ? (r = { "streaming-request": { version: 1, "streaming-keys": [{ ...s, ...Tf(e, i) }] } })
      : e.isLiveRadioStation
        ? (r = { ...s, ...bf(e) })
        : e.hasOffersHlsUrl
          ? (r = { "license-requests": [{ ...s, ..._f(e) }] })
          : (r = { ...s, ...vf(e, t.userInitiated) }),
    r
  );
}
class Ef {
  licenseUrl;
  playableItem;
  licenseData;
  initiated;
  keySystem;
  slotToken;
  startResponse;
  fetch(e) {
    const t = {
      Authorization: `Bearer ${vi.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Apple-Music-User-Token": `${vi.musicUserToken}`,
    };
    return (
      this.keySystem === Y.widevine && (t["X-Apple-Renewal"] = !0),
      Vc(
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
        `Starting License request to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${or(this.playableItem)}`,
      ));
    const o = qa("start", t, { ...r, keySystem: s, extendedLease: a, userInitiated: n });
    this.startResponse = this.fetch(o);
    try {
      const c = await this.startResponse;
      if (!c.ok) {
        let g;
        try {
          g = await c.json();
        } catch {}
        this.processJsonError(g);
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
          `License Challenge Request failed to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${or(this.playableItem)}`,
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
      throw new Er(e);
    }
    throw new p(p.Reason.MEDIA_LICENSE, "Error acquiring license");
  }
  async stop() {
    if (this.startResponse)
      try {
        await this.startResponse;
      } catch {}
    if (!this.playableItem || !this.licenseData || !this.licenseUrl || !this.playableItem.isUTS) return;
    const e = qa("stop", this.playableItem, {
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
var kf = Object.defineProperty,
  Sf = Object.getOwnPropertyDescriptor,
  If = (i, e, t, r) => {
    for (var s = Sf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && kf(e, t, s), s);
  };
class jt extends Et {
  developerToken;
  adamId;
  userToken;
  extURI;
  item;
  initiated = !0;
  isLibrary = !1;
  keyCertURL;
  keyServerURL;
  keySystem = Y.fairplay;
  isLegacyEme = !1;
  boundDispatchKeyError;
  boundDispatchSessionError;
  boundHandleSessionCreation;
  boundStartLicenseSession;
  mediaKeySessions = {};
  _pendingRenewal;
  license;
  constructor() {
    (super([x.playbackLicenseError, x.playbackSessionError]),
      (this.boundDispatchKeyError = this.dispatchKeyError.bind(this)),
      (this.boundDispatchSessionError = this.dispatchSessionError.bind(this)),
      (this.boundHandleSessionCreation = this.handleSessionCreation.bind(this)),
      (this.boundStartLicenseSession = this.startLicenseSession.bind(this)),
      (this.license = new Ef()));
  }
  get extID() {
    if (this.extURI) return this.extURI.replace("data:;base64,", "");
  }
  get isFairplay() {
    return this.keySystem === Y.fairplay;
  }
  get isPlayReady() {
    return this.keySystem === Y.playready;
  }
  get isWidevine() {
    return this.keySystem === Y.widevine;
  }
  async acquirePlaybackLicense(e, t, r) {
    if (!this.keyServerURL || !this.developerToken || !this.userToken) return;
    const { initiated: s, isLegacyEme: n, keyServerURL: a, keySystem: o } = this,
      c = r.item;
    try {
      return await this.license.start(a, c, { challenge: t, keyuri: e }, o, s, n && c.isUTS);
    } catch (l) {
      this.dispatchEvent(x.playbackLicenseError, l);
    }
  }
  async startLicenseSession(e) {
    u.debug("Starting License Session", e);
    let t;
    const { message: r, target: s, messageType: n } = e;
    if (this.keySystem !== Y.fairplay && n !== "license-request") {
      u.debug("not making license request for", n);
      return;
    }
    if (this.isPlayReady) {
      const l = String.fromCharCode.apply(null, new Uint16Array(r.buffer || r));
      t = new DOMParser().parseFromString(l, "application/xml").getElementsByTagName("Challenge")[0]
        .childNodes[0].nodeValue;
    } else t = Xe(new Uint8Array(r));
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
      this.dispatchEvent(x.playbackSessionError, new p(p.Reason.MEDIA_KEY, e)));
  }
  dispatchSessionError(e) {
    this.dispatchEvent(x.playbackSessionError, new p(p.Reason.MEDIA_SESSION, e));
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
      const s = Nt(e.license);
      try {
        let n;
        await Promise.race([
          t.update(s),
          new Promise((a, o) => {
            n = setTimeout(() => o(new y("mk-242", y.Reason.CDM_UPDATE_TIMEOUT)), 1e4);
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
If([T()], jt.prototype, "startLicenseSession");
var Pf = Object.defineProperty,
  wf = Object.getOwnPropertyDescriptor,
  Af = (i, e, t, r) => {
    for (var s = wf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Pf(e, t, s), s);
  };
class Bc extends jt {
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
      (s.removeEventListener("message", this.boundStartLicenseSession), We(s.close()));
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
      (this._mediaKeysPromise = new Promise(async (h, g) => {
        const m = await t.createMediaKeys();
        try {
          (await s.setMediaKeys(m), (this._mediaKeys = m));
          const k = await this.loadCertificateBuffer();
          await m.setServerCertificate(k);
        } catch (k) {
          (this.dispatchKeyError(k), g(k));
        }
        h(m);
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
      s = Xe(new Uint8Array(t)),
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
      e.session.update(cn("renew")));
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(e) {}
  async clearSessions() {}
}
Af([T()], Bc.prototype, "startFairplayLicenseSession");
const Rf = /^(?:.*)(skd:\/\/.+)$/i;
class Cf extends jt {
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
    const r = t.match(Rf);
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
class Of extends jt {
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
const Df =
    '<WRMHEADER xmlns="http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version="4.3.0.0"><DATA><PROTECTINFO><KIDS><KID ALGID="AESCTR" VALUE="[KEYID]"></KID></KIDS></PROTECTINFO></DATA></WRMHEADER>',
  $c = [
    0, 0, 1, 222, 112, 115, 115, 104, 0, 0, 0, 0, 154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95,
    149, 0, 0, 1, 190,
  ],
  Nf = [190, 1, 0, 0, 1, 0, 1, 0, 180, 1],
  Mf = (i) => {
    const e = (t, r, s) => {
      const n = t[r];
      ((t[r] = t[s]), (t[s] = n));
    };
    (e(i, 0, 3), e(i, 1, 2), e(i, 4, 5), e(i, 6, 7));
  };
function Hc(i, ...e) {
  let t = 0;
  for (const n of e) t += n.length;
  const r = new i(t);
  let s = 0;
  for (const n of e) (r.set(n, s), (s += n.length));
  return r;
}
const Lf = (i) => {
    (u.debug("generating Playready pssh for keyId"), Mf(i));
    const e = Xe(i),
      t = Df.replace("[KEYID]", e),
      r = tc(t),
      s = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    return Hc(Uint8Array, $c, Nf, s);
  },
  Uf = (i) => {
    u.debug("generating Widevine pssh for keyId");
    const e = new Uint8Array([
      0, 0, 0, 52, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29,
      33, 237, 0, 0, 0, 20, 8, 1, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    for (let t = 0; t < i.length; t++) e[e.length - 16 + t] = i[t];
    return (u.debug("generatePSSH", e), e);
  },
  xf = { [Y.widevine]: Uf, [Y.playready]: Lf },
  Ff = (i, e) => {
    const t = xf[e];
    if (!t) return (u.warn("No pssh generator for ", e), i);
    const r = Uint8Array.from(i);
    return t(r);
  },
  Kf = (i) => Hc(Uint8Array, new Uint8Array($c), i);
class Vf extends jt {
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
    We(this.clearSessions());
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
      h = cn(c ? atob(l) : l),
      g = (this.isWidevine && t.isSong) || h.length === 16;
    let m;
    return (
      u.debug("extracted uri", e),
      this.isPlayReady && !g
        ? (u.debug("handling Playready object"), (a.extURI = e), (m = Kf(h)))
        : g
          ? (u.debug("handling keyId only initData"), (a.extURI = `data:;base64,${Xe(h)}`), (m = Ff(h, o)))
          : (u.debug("handling pssh initData"), (a.extURI = e), (m = h)),
      a.addEventListener("message", this.startLicenseSession),
      a.generateRequest("cenc", m).catch((k) => {
        if (k.message.match(/generateRequest.*\(75\)/)) return a.generateRequest("cenc", m);
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
      We(this.createSessionAndGenerateRequest(t, e.item, { isRenewal: !0 })));
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
      const r = Fc[this.keySystem];
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
      We(this._removeSessionImmediately(e));
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
function Bf(i, e) {
  e.keyURLs &&
    ((i.developerToken = vi.developerToken),
    (i.userToken = vi.musicUserToken),
    (i.item = e),
    (i.adamId = e.catalogId ?? "-1"),
    (i.isLibrary = e.isLibrary),
    i.setKeyURLs(e.keyURLs));
}
const $f = Te.register("mk-safari-modern-eme");
class jc extends Et {
  _session;
  mediaElement;
  contentType;
  services;
  constructor(e) {
    (super([x.playbackLicenseError, x.playbackSessionError]),
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
    if (window.WebKitMediaKeys?.isTypeSupported(`${Y.fairplay}.1_0`, Lt.MP4)) {
      let r;
      ($f.enabled && this.runtime.isEMESupported && (r = await Hf(this.contentType)),
        r !== void 0
          ? (u.warn("media-extension: Using Fairplay modern EME"),
            (this._session = new Bc()),
            this._session.attachMedia(e, r))
          : (u.warn("media-extension: Using Fairplay legacy EME"),
            (this._session = new Cf()),
            this._session.attachMedia(e, { keySystem: Y.fairplay })));
    } else if (window.MSMediaKeys?.isTypeSupported(Y.playready, Lt.MP4))
      ((this._session = new Of()), this._session.attachMedia(e, { keySystem: Y.playready }));
    else if (this.runtime.preferredKeySystem !== void 0 && e.canPlayType(t)) {
      const r = Y[this.runtime.preferredKeySystem];
      if (r !== void 0) {
        this._session = new Vf();
        const s = await qc(r, {
          initDataTypes: ["cenc", "keyids"],
          audioCapabilities: [{ contentType: t }],
          distinctiveIdentifier: "optional",
          persistentState: "required",
        });
        s && this._session?.attachMedia(e, s);
      }
    } else u.warn("No KeySystem available for playback!");
    this._session !== void 0 &&
      [x.playbackLicenseError, x.playbackSessionError].forEach((r) => {
        this._session.addEventListener(r, (s) => {
          this.dispatchEvent(r, s);
        });
      });
  }
  setMediaItem(e) {
    Bf(this._session, e);
  }
  destroy(e) {
    this._session?.detachMedia(e);
  }
}
async function qc(i, e) {
  try {
    return navigator.requestMediaKeySystemAccess(i, [e]);
  } catch {
    u.warn(`Unable to get KeySystem access to ${i}`);
  }
}
async function Hf(i) {
  return qc(Y.fairplay, {
    initDataTypes: ["skd"],
    audioCapabilities: [{ contentType: i, robustness: "" }],
    videoCapabilities: [{ contentType: i, robustness: "" }],
    distinctiveIdentifier: "not-allowed",
    persistentState: "not-allowed",
    sessionTypes: ["temporary"],
  });
}
const jf = Te.register("mk-force-audio-mse"),
  Wc = () => jf.enabled;
class Wa {
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
class qf {
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
const Ga = /^#EXT-X-BYTERANGE:([^\n]+)\n/gim,
  Ya = /^#EXT-X-MAP:([^\n]+)\n/im,
  Wf = /#EXTINF:\d*\.\d*\,[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  Gf = /#EXTINF:\d*\.\d*,\s*#EXT-X-BITRATE:\d{1,3}[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  Yf = u.createChild("hls");
function zf(i) {
  if (!i || !Ya.test(i)) return;
  const [, e] = i.match(Ya);
  return e.split(",").reduce((t, r) => {
    const [s, n] = r.split("=");
    return ((t[s.toLowerCase()] = n.replace(/\"/gi, "")), t);
  }, {});
}
class Qf {
  _segments = [];
  _addedSegments = {};
  get segments() {
    return this._segments;
  }
  addSegment(e, t) {
    this._addedSegments[t] || (Yf.debug("Adding segment", t), this._segments.push(e), (this._addedSegments[t] = !0));
  }
  extractLiveRadioSegments(e, t) {
    this._extractContinuousSegments(Wf, e, t);
  }
  extractHlsOffersSegments(e, t) {
    this._extractContinuousSegments(Gf, e, t);
  }
  _extractContinuousSegments(e, t, r) {
    if (!t || !e.test(t)) return;
    e.lastIndex = 0;
    let s;
    for (; (s = e.exec(t));) {
      const n = s[0].startsWith("#EXT-X-MAP") ? s[2] : s[1];
      let a = n;
      /^http(s)?:\/\//.test(a) || (a = Jo([...qu(r).slice(0, -1), n]));
      const o = s[0].startsWith("#EXT-X-MAP");
      this.addSegment(new qf(a, o), n);
    }
  }
  extractByteRangeSegments(e, t) {
    if (!e || !Ga.test(e)) return;
    const r = zf(e),
      s = t.split("/").pop() ?? "",
      n = t.replace(s, r.uri),
      [a, o] = r.byterange.split("@"),
      c = new Wa({ url: n, startByte: o, length: a });
    (this.addSegment(c, c.range),
      (e.match(Ga) ?? []).forEach((l) => {
        const [, h, g] = l.match(/^#EXT-X-BYTERANGE:(\d+)@(\d+)\n/),
          m = new Wa({ url: n, startByte: g, length: h });
        this.addSegment(m, m.range);
      }));
  }
}
var bi = ((i) => ((i.keysParsed = "keysParsed"), i))(bi || {}),
  Xf = Object.defineProperty,
  Jf = Object.getOwnPropertyDescriptor,
  Zf = (i, e, t, r) => {
    for (var s = Jf(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Xf(e, t, s), s);
  };
const ey = /^#EXT-X-TARGETDURATION:(\d+)/im,
  za = /^#EXT-X-KEY:[^\n]+URI="([^"]+)"/im,
  ty = /^#EXT-X-KEY:.*(.*$)/gim;
class Gc extends Et {
  _data;
  _downlink = 0;
  _extURI;
  _url;
  _item;
  _segmentList = new Qf();
  _manifestRefreshInterval;
  services;
  constructor(e, t, r) {
    (super([x.manifestParsed, bi.keysParsed]),
      (this._data = e),
      (this._item = t),
      (this._url = t.assetURL),
      (this.services = r.services));
  }
  parse() {
    const e = this._item,
      t = this._data;
    if (this.services.runtime.preferredKeySystem !== "fairplay" || Wc())
      if ((this._detectKeyTags(), e.hasOffersHlsUrl)) this._segmentList.extractHlsOffersSegments(t, e.assetURL);
      else if (e.isLiveRadioStation) {
        this._segmentList.extractLiveRadioSegments(t, e.assetURL);
        const [, s] = this._data.match(ey);
        u.debug(`manifest: setting up manifest refresh interval at ${s} seconds`);
        const n = parseInt(s, 10) * 1e3;
        this._manifestRefreshInterval = setInterval(this.liveRadioRefresh, n);
      } else this._segmentList.extractByteRangeSegments(t, e.assetURL);
  }
  static async load(e, t) {
    u.debug("loading manifest for item", e.title);
    const r = e.assetURL,
      s = un(),
      n = s ? (t.cache ?? !0) : !1,
      a = t.services;
    if (n) {
      const g = s?.getItem(r);
      if (g) return new this(g, e, { services: a });
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
      this.dispatchEvent(x.manifestParsed));
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
      const e = this._data.match(za);
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
    e.length && this.dispatchEvent(bi.keysParsed, { item: this.mediaItem, keys: e });
  }
  get _legacyKeys() {
    const e = this._data.match(za);
    u.debug("manifest: EXT_X_KEY_URI matches", e);
    const t = (e && e[1]) || void 0;
    this._extURI = t;
    const r = [];
    return (t && r.push({ keyFormat: Fc[Y.widevine], dataUri: t }), r);
  }
  get _modernKeys() {
    let e;
    const t = [];
    for (; (e = ty.exec(this._data));) {
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
Zf([T()], Gc.prototype, "liveRadioRefresh");
const iy = "seamlessAudioTransition",
  ry = "bufferTimedMetadataDidChange",
  sy = "loadSegmentError",
  we = { seamlessAudioTransition: iy, bufferTimedMetadataDidChange: ry, loadSegmentError: sy };
function Yc(i, e = "utf-8") {
  return e === "iso-8859-1" ? String.fromCharCode(...i) : new TextDecoder(e).decode(i);
}
function Qa(i, e = 0, t) {
  const r = [];
  t = t ?? i.length;
  for (let s = e; s < t; s++) {
    const n = i[s];
    if (String.fromCharCode(n) === "\0") break;
    r.push(String.fromCharCode(n));
  }
  return [r.join(""), r.length];
}
class Rn {
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
const ny = [237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237];
class zc extends Rn {
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
    return on(this.systemId, ny);
  }
}
class ay extends Rn {
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
function Ct(i, e, t = []) {
  for (let r = e; r < i.length;) {
    if (t.length === 0) return;
    const n = new DataView(i.buffer, r).getUint32(0),
      a = Yc(i.subarray(r + 4, r + 8)),
      o = r + n;
    if (t.length === 1 && a === t[0]) return new Rn(a, i, r, o);
    if (a === t[0]) return Ct(i, r + 8, t.slice(1));
    r += n;
  }
}
function oy(i) {
  const e = Ct(i, 0, ["moov", "trak", "mdia", "minf", "stbl", "stsd"]),
    t = [];
  if (!e) return t;
  const r = e.start + 16;
  for (let s = r; s < e.end;) {
    let n = Ct(i, s, ["enca"]),
      a = 36;
    if ((n || ((n = Ct(i, s, ["encv"])), (a = 86)), !n)) return t;
    const o = Ct(i, n.start + a, ["sinf", "schi", "tenc"]);
    o ? (t.push(new ay(o.data, o.start, o.end)), (s = o.end)) : (s = e.end);
  }
  return t;
}
function cy(i) {
  const e = Ct(i, 0, ["moov"]),
    t = [];
  if (!e) return t;
  const r = new DataView(i.buffer, 0),
    s = e.start + 8;
  for (let n = s; n < e.size;) {
    const a = r.getUint32(n);
    (Yc(i.subarray(n + 4, n + 8)) === "pssh" && t.push(new zc(i, n, n + a)), (n += a));
  }
  return t;
}
function ly(i) {
  const e = [],
    t = new DataView(i.buffer);
  for (let r = 0; r < i.length;) {
    const s = t.getUint32(r);
    (e.push(new zc(i, r, r + s)), (r += s));
  }
  return e;
}
const Xa = (i) => {
  const [e] = oy(i);
  if (!e) return;
  const r = cy(i).find((s) => s.isWidevine);
  r && (e.defaultKeyId = r.keyBytes);
};
class Qc {
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
    return uy(e);
  }
  constructor(e) {
    ((this.version = e.version),
      (this.flags = { unsynchronized: !1, extendedHeader: !1, footer: !1, experimental: !1, ...e.flags }),
      (this.frames = e.frames ?? []));
  }
}
function uy(i) {
  if (i.length === 0 || dy(i) !== "ID3") return;
  const e = {};
  let t = 3;
  ((e.version = [3, i[t++], i[t++]]), (e.flags = hy(i)), (t += 1));
  const r = t + 4 + $s(i.subarray(t, t + 4));
  return (
    (t += 4),
    e.flags.extendedHeader && (t += $s(i.subarray(t, t + 4))),
    e.version[1] > 2 && (e.frames = Xc(i, e.version, [t, r])),
    new Qc(e)
  );
}
function dy(i, e = 0) {
  return Je(i.subarray(e, 3));
}
function hy(i, e = 5) {
  const t = i[e];
  return { unsynchronized: ji(t, 7), extendedHeader: ji(t, 6), experimental: ji(t, 5), footer: ji(t, 4) };
}
const py = { WXXX: by, TXXX: vy, TPE1: fy, TIT2: my, TALB: yy, TEXT: gy, PRIV: _y, CHAP: Ty };
function Xc(i, e, t) {
  t = t ?? [0, i.byteLength];
  const r = t[1] ?? i.byteLength;
  let s = t[0] ?? 0;
  const n = new DataView(i.buffer, 0, r),
    a = [];
  for (; s + 8 <= r;) {
    const o = Je(i.subarray(s, s + 4));
    s += 4;
    const c = e[1] === 4 ? $s(i.subarray(s, s + 4)) : n.getUint32(s);
    if (((s += 4), i[s++] << (8 + i[s++]), s + c > r)) break;
    const l = i.slice(s, s + c),
      h = py[o]?.(o, l, e);
    (h && a.push(h), (s += c));
  }
  return a;
}
function fy(i, e, t) {
  return { key: "TPE1", data: Cr(Je(e.subarray(1), qt(e[0]))) };
}
function yy(i, e, t) {
  return { key: "TALB", data: Cr(Je(e.subarray(1), qt(e[0]))) };
}
function my(i, e, t) {
  return { key: "TIT2", data: Cr(Je(e.subarray(1), qt(e[0]))) };
}
function gy(i, e, t) {
  return { key: "TEXT", data: Cr(Je(e.subarray(1), qt(e[0]))) };
}
function vy(i, e, t) {
  const r = qt(e[0]),
    [s, n] = Or(e.subarray(1), r),
    a = n > 0 ? n + 2 : 0;
  return { key: "TXXX", data: Je(e.subarray(a), r), description: s };
}
function by(i, e, t) {
  const r = qt(e[0]),
    [s, n] = Or(e.subarray(1), r),
    a = n > 0 ? n + 2 : 0;
  return { key: "WXXX", data: Je(e.subarray(a), r), description: s };
}
function _y(i, e, t) {
  const [r, s] = Or(e);
  if (s !== 0) return { key: "PRIV", owner: r, data: e.slice(s + 1) };
}
function Ty(i, e, t) {
  const r = new DataView(e.buffer),
    s = { key: "CHAP", elementId: "", startTime: 0, endTime: 0, frames: [] },
    [n, a] = Or(e);
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
    (s.frames = Xc(e, t, [o, e.length])),
    s
  );
}
function Je(i, e = "utf-8") {
  return new TextDecoder(e).decode(i);
}
function ji(i, e) {
  return (i & (1 << e)) !== 0;
}
const Ey = { 0: "iso-8859-1", 1: "utf-16", 2: "utf-16be", 3: "utf-8" };
function qt(i) {
  return Ey[i] ?? "iso-8859-1";
}
function Cr(i) {
  return i.replace(/^\0*|\0*/g, "");
}
function Or(i, e = "utf-8", t = 0) {
  const r = [];
  for (let s = t; s < i.byteLength; s++) {
    const n = i[s];
    if (n === 0) break;
    r.push(n);
  }
  return [Je(new Uint8Array(r), e), r.length];
}
function $s(i) {
  return (i[0] & 127) * 2097152 + (i[1] & 127) * 16384 + (i[2] & 127) * 128 + (i[3] & 127);
}
function Hs(i, e, t) {
  return e + 4 > i.length ? !1 : i[e] === t[0] && i[e + 1] === t[1] && i[e + 2] === t[2] && i[e + 3] === t[3];
}
function ky(i) {
  return i?.length >= 8 ? Hs(i, 4, [102, 116, 121, 112]) : !1;
}
function Sy(i) {
  const e = i.length,
    t = [];
  if (ky(i)) return t;
  for (let r = 0; r < e; r++) {
    if (Hs(i, r, [109, 111, 111, 102])) return t;
    if (Hs(i, r, [101, 109, 115, 103])) {
      const s = r - 4,
        a = new DataView(i.buffer, s).getUint32(0),
        o = i.subarray(s, s + a);
      ((r = r + a - 1), t.push(o));
    }
  }
  return t;
}
class Jc {
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
    return Iy(this, e);
  }
}
function Iy(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (
    typeof i != typeof e ||
    ((i = i), (e = e), i.album !== e.album || i.title !== e.title || i.performer !== e.performer) ||
    i.links?.length !== e.links?.length
  )
    return !1;
  for (let t = 0; t < (i.links?.length ?? 0); t++) if (!Ja(i.links?.[t], e.links?.[t])) return !1;
  return !(!Ja(i.storefrontAdamIds, e.storefrontAdamIds) || !Od(i.blob, e.blob));
}
function Ja(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (typeof i != typeof e) return !1;
  ((i = i), (e = e));
  const t = Object.keys(i),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (const s of t) if (i[s] !== e[s]) return !1;
  return !0;
}
function Py(i) {
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
          (t.owner === "com.apple.radio.adamid" && (e.storefrontAdamIds = Zc(t.data)),
            t.owner === "com.apple.radio.ping.jingle" && (e.blob = el(t.data)));
          break;
      }
  return new Jc(e);
}
function wy(i) {
  const e = {};
  for (const t of i) {
    if (!af(t) || t?.value === void 0) continue;
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
        (s === "com.apple.radio.ping.jingle" && (e.blob = el(r.data)),
          s === "com.apple.radio.adamid" && (e.storefrontAdamIds = Zc(r.data)));
        break;
      }
    }
  }
  return new Jc(e);
}
function Zc(i) {
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
function el(i) {
  return typeof i == "string" ? Uint8Array.from(atob(i), (e) => e.charCodeAt(0)) : i;
}
class Ay {
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
    const [o, c] = Qa(e, r);
    ((r += c + 1), (this.schemeIdUri = o));
    const [l, h] = Qa(e, r);
    ((r += h + 1), (this.payload = e.subarray(r, e.byteLength)), (this.id3 = Qc.parse(this.payload)));
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
    if (e) return ((this._timedMetadata = Py(e)), this._timedMetadata);
  }
}
class Ry {
  constructor(e, t) {
    ((this._currentTime = e), (this._onDidChange = t), (this._getCurrentEmsg = this._getCurrentEmsg.bind(this)));
  }
  _currentEmsgInterval;
  _emsgLookup = {};
  _currentEmsg;
  processEmsgs(e) {
    const t = Sy(e);
    t.length &&
      (this._currentEmsgInterval || (this._currentEmsgInterval = setInterval(this._getCurrentEmsg, 1e3)),
      t.forEach((r) => {
        const s = new Ay(r);
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
        g = o.payload;
      ((!h || !on(h, g)) && ((this._currentEmsg = o), l(o)), this._cleanupEmsgs(a));
    }
  }
  _cleanupEmsgs(e) {
    const { _emsgLookup: t } = this;
    Object.keys(t).forEach((s) => {
      parseInt(s, 10) < e && delete t[s];
    });
  }
}
class Cy {
  constructor(e, t, r) {
    ((this._item = e),
      (this._timedMetadataManager = new Ry(
        () => t.currentTime,
        (s) => {
          r.publish(we.bufferTimedMetadataDidChange, {
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
    e.isInitSegment && Xa(t);
  }
  _processLiveRadioSegment(e, t) {
    (e.isInitSegment && Xa(t), this._timedMetadataManager.processEmsgs(t));
  }
}
var Oy = Object.defineProperty,
  Dy = Object.getOwnPropertyDescriptor,
  Cn = (i, e, t, r) => {
    for (var s = Dy(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Oy(e, t, s), s);
  };
const b = u.createChild("mse"),
  Ny = Te.get("mk-mse-buffer"),
  { manifestParsed: Za } = x;
class Dr {
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
      (this.segmentProcessor = new Cy(r.mediaItem, t, e)),
      (this.playbackTimeline = { current: { manifest: r } }),
      r.addEventListener(Za, this.onManifestParsed),
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
    const t = e.addSourceBuffer(Cc);
    ((this.sourceBuffer = t), t.addEventListener("updateend", this.updateEndHandler));
    const { clip: r, hasAppendWindowSupport: s } = this;
    (r &&
      (s
        ? (b.debug("appendWindowStart/End", r.start, r.end),
          (t.appendWindowStart = r.start),
          (t.appendWindowEnd = r.end))
        : (b.debug("seeking for clip", r.start), We(this.seek(r.start)))),
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
      (b.debug("dispatching seamless audio transition", a), this.dispatcher.publish(we.seamlessAudioTransition, a));
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
    (this.seekResolver?.resolve(!1), this.manifest.removeEventListener(Za, this.onManifestParsed));
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
      (We(s.seek().then(s.resolve)), (this.seekWhenUpdated = void 0));
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
    (b.debug("updateEndHandler invoking loadSegment"), We(this.loadSegment()));
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
      t && (b.debug("updateSegmentToFetch invoking loadSegment"), We(this.loadSegment())));
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
        (b.error("Error loading segment", r), this.dispatcher.publish(we.loadSegmentError, r));
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
    Ny && b.debug("buffer times", this.bufferTimesString);
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
Cn([T()], Dr.prototype, "onSourceOpen");
Cn([T()], Dr.prototype, "onManifestParsed");
Cn([T()], Dr.prototype, "updateEndHandler");
var My = Object.defineProperty,
  Ly = Object.getOwnPropertyDescriptor,
  Wt = (i, e, t, r) => {
    for (var s = Ly(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && My(e, t, s), s);
  };
const { mediaPlaybackError: ti } = f,
  Uy = 15;
class Ye extends Ar {
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
      this._dispatcher.subscribe(we.loadSegmentError, this.onLoadSegmentError),
      this.setupVisibilityTracking());
  }
  async destroy() {
    (super.destroy(),
      this._dispatcher.unsubscribe(we.loadSegmentError, this.onLoadSegmentError),
      this.tearDownVisibilityTracking());
  }
  onLoadSegmentError(e) {
    (this._dispatcher.publish(ti, new p(p.Reason.MEDIA_SESSION, e)), this.destroy());
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
    ((this.extension = new jc({
      mediaElement: this.audio,
      contentType: Cc,
      services: { runtime: this.services.runtime },
    })),
      await this.extension.initializeKeySystem(),
      this.extension.addEventListener(x.playbackLicenseError, (e) => {
        (this.resetDeferredPlay(), this._dispatcher.publish(ti, e));
      }),
      this.extension.addEventListener(x.playbackSessionError, (e) => {
        (this._dispatcher.publish(ti, new p(p.Reason.MEDIA_SESSION, e)), this.destroy());
      }));
  }
  async initializeMediaElement() {
    const e = Pn();
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
    throw new y("mk-244", y.Reason.CONTENT_UNSUPPORTED, {
      description: "AudioPlayer cannot play unencrypted sources",
      data: { url: e, item: s },
    });
  }
  async playItemFromEncryptedSource(e, t = !1, r) {
    const s = this._paused && !t;
    u.debug("playItemFromEncryptedSource", e.title);
    const { browser: n } = this.services.runtime,
      a = n.isSafari && n.major === 26;
    if (this.isTabHidden && this.extension?.isFairplay && ar(e) && a && !t)
      return (
        u.debug("Tab is hidden, suspending FairPlay song playback for", e.title),
        (this.pendingPlaybackItem = e),
        Promise.resolve()
      );
    const o = s ? void 0 : this.startPlaybackSequence();
    if (e.playRawAssetURL)
      return (
        (e.playbackType = le.unencryptedFull),
        (this.nowPlayingItem = e),
        await this._playAssetURL(e.assetURL, s),
        this.finishPlaybackSequence()
      );
    const { extension: c } = this;
    if ((this.delaySeamlessCdmUpdates && this.extension?.session?.applyDelayedCdmUpdates(), !c)) return o;
    ((c.initiated = t),
      c.setMediaItem(e),
      (e.playbackType = le.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = F.loading));
    const l = await this.getManifestForItem(e);
    this.manifest = l;
    const h = Wc();
    if (((e.isSong || (c.isFairplay && h)) && (c.extURI = l.extURI), (e.state = F.ready), c.isFairplay && !h)) {
      let g = e.assetURL;
      (r?.startTime && (g += `#t=${r.startTime}`), await this._playAssetURL(g, s));
    } else {
      const g = this._buffer;
      !g || !this.isSeamlessAudioTransitionsEnabled || !g.isItemPlaying(l.mediaItem)
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
      e.removeEventListener(bi.keysParsed, this.loadKeysHandler));
  }
  async loadAndParseManifest(e, t = !0) {
    u.debug(`will load and parse manifest for ${e.title}, loadKeys ${t}`);
    let r;
    try {
      return (
        (r = await Gc.load(e, {
          cache: !1,
          services: { runtime: this.services.runtime, request: this.services.request },
        })),
        t && r.addEventListener(bi.keysParsed, this.loadKeysHandler),
        r.parse(),
        r
      );
    } catch (s) {
      this.resetDeferredPlay();
      const n = new p(p.Reason.NETWORK_ERROR, "Could not fetch manifest");
      throw ((n.data = s), this._dispatcher.publish(ti, n), n);
    }
  }
  onTimeUpdate() {
    if (!this._buffer) return;
    const { currentPlaybackTimeRemaining: t, nextManifest: r, delaySeamlessCdmUpdates: s } = this;
    r &&
      t < Uy &&
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
      (this._buffer = new Dr({
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
    (document.addEventListener(lr, this.onVisibilityChange), (this.isTabHidden = document[Vs] === "hidden"));
  }
  tearDownVisibilityTracking() {
    document.removeEventListener(lr, this.onVisibilityChange);
  }
  onVisibilityChange() {
    const e = this.isTabHidden;
    if (
      ((this.isTabHidden = document[Vs] === "hidden"),
      u.debug("Tab visibility changed:", { wasHidden: e, isTabHidden: this.isTabHidden }),
      e && !this.isTabHidden && this.pendingPlaybackItem && this.extension?.isFairplay && ar(this.pendingPlaybackItem))
    ) {
      u.debug("Tab became visible, resuming FairPlay song playback for", this.pendingPlaybackItem.title);
      const t = this.pendingPlaybackItem;
      ((this.pendingPlaybackItem = void 0),
        this.playItemFromEncryptedSource(t, !1).catch((r) => {
          (u.error("Failed to resume FairPlay song playback after tab visibility change:", r),
            this._dispatcher.publish(ti, new p(p.Reason.MEDIA_SESSION, r)));
        }));
    }
  }
}
Wt([T()], Ye.prototype, "onLoadSegmentError");
Wt([kt(250)], Ye.prototype, "seekToTime");
Wt([T()], Ye.prototype, "onTimeUpdate");
Wt([T()], Ye.prototype, "delayedCdmUpdateCheck");
Wt([T()], Ye.prototype, "loadKeysHandler");
Wt([T()], Ye.prototype, "onVisibilityChange");
class xy extends jt {
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
      r = Nt(e);
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
      const h = ly(new Uint8Array(t)).find((m) => m.isWidevine)?.rawBytes,
        g = h ? Xe(h) : void 0;
      (u.debug("extracted uri", g), (s.extURI = g), (o = t));
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
class Fy extends Et {
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
    this.session = new xy();
  }
  async clearSessions() {}
}
class Ky {
  id = Si();
  playerName = "PlayerStub";
  bitrate = Ce.STANDARD;
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
  extension = new Fy([]);
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
      (this.windowHandlers = new Ht(this, e.services.runtime)));
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
    return new En(this);
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
class Vy extends jc {
  destroy(e) {
    (this._session?.stopLicenseSession(), super.destroy(e));
  }
}
var By = Object.defineProperty,
  $y = Object.getOwnPropertyDescriptor,
  On = (i, e, t, r) => {
    for (var s = $y(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && By(e, t, s), s);
  };
const { mediaPlaybackError: Hy } = f,
  { playbackLicenseError: eo, playbackSessionError: to } = x;
class Nr extends An {
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
    const e = new Vy({ mediaElement: this.video, contentType: Sp, services: { runtime: this.services.runtime } });
    ((this.extension = e),
      await e.initializeKeySystem(),
      e.addEventListener(eo, this.onPlaybackLicenseError),
      e.addEventListener(to, this.onPlaybackSessionError));
  }
  destroy() {
    u.debug("native-safari-video-player.destroy");
    const { extension: e, video: t } = this;
    (this._blobUrl && (URL.revokeObjectURL(this._blobUrl), (this._blobUrl = void 0)),
      !(!e || !t) &&
        (e.removeEventListener(eo, this.onPlaybackLicenseError),
        e.removeEventListener(to, this.onPlaybackSessionError),
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
    this._dispatcher.publish(Hy, new p(p.Reason.MEDIA_SESSION, e));
  }
  async onMetadataLoaded() {
    u.debug("native-safari-video-player.onMetadataLoaded");
    const { nowPlayingItem: e } = this;
    (e && (e.state = F.ready), await this._playMedia(), this.finishPlaybackSequence());
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
On([T()], Nr.prototype, "onPlaybackSessionError");
On([T()], Nr.prototype, "onMetadataLoaded");
On([kt(250)], Nr.prototype, "seekToTime");
const tl = "js-cdn.music.apple.com",
  il = "/musickit/v3/",
  jy = "current",
  qy = new RegExp(`^https://([a-z0-9]+-)?${(tl + il.replace(/v3/, "(v2|v3)")).replace(/[\.\/]/g, "\\$&")}`, "i"),
  Wy = /^https:\/\/(.*\/includes\/js-cdn)\//i,
  Gy = /^([a-z]+:)?\/\//;
function Dn(i) {
  return yt() || !i ? null : document.querySelector(`script[src*="${i}"]`);
}
function rl() {
  return typeof document > "u" || !document.querySelectorAll
    ? []
    : Array.from(document.querySelectorAll("script[src]"));
}
function Yy() {
  for (const i of rl()) {
    const e = qy.exec(i.src);
    if (e) return e[1] || "";
  }
  return "";
}
function zy() {
  for (const i of rl()) {
    const e = Wy.exec(i.src);
    if (e) return e[1] || "";
  }
  return "";
}
function sl() {
  return yt() ? "" : `//${Yy()}${tl}`;
}
function nl() {
  const i = zy();
  return i && "//" + i;
}
const Nn = yn.register("mk-hlsjs-log-level"),
  Qy = yn.register("mk-hlsjs-version");
function Xy() {
  const i = Nn.value,
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
function al() {
  const i = { hls: "", rtc: "" };
  if (yt()) return i;
  const e = nl() || sl(),
    t = Qy.get() || jy,
    r = Xy();
  return ((i.hls = `https:${e}/hls.js/${t}/hls.js/${r}`), (i.rtc = `https:${e}/hls.js/${t}/rtc.js/rtc.min.js`), i);
}
function ol(i, e = window) {
  if (yt()) return "";
  const t = Ie()?.getItem("mkCDNBaseURLOverride");
  if (t) return t;
  const r = Dn(i);
  return r ? r.getAttribute("src").replace(new RegExp(`${i}$`), "") : `${nl() || sl()}${il}`;
}
const io = new Map();
function Mr(i, e) {
  const t = io.get(i);
  if (t) return t;
  const r = new Promise((s, n) => {
    if ((yt() && n("Dynamic script loading is unsupported in Node environments."), Dn(i))) return s();
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
    (Gy.test(i) ? (c = i) : (c = `${ol(i)}${i}`), (o.src = c), document.head.appendChild(o));
  });
  return (io.set(i, r), r);
}
function Jy(i) {
  return (e, t, r) => {
    const s = r.value,
      n = Zy(s, i);
    r.value = n;
  };
}
function Zy(i, e) {
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
const K = u.createChild("tracks");
var em = Object.defineProperty,
  tm = Object.getOwnPropertyDescriptor,
  Ze = (i, e, t, r) => {
    for (var s = tm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && em(e, t, s), s);
  };
const {
    audioTracksSwitched: qi,
    audioTracksUpdated: cs,
    inlineStylesParsed: ro,
    itemPlaying: so,
    textTracksSwitched: Wi,
    textTracksUpdated: no,
    videoTracksUpdated: ao,
    videoTracksSwitched: oo,
  } = x,
  im = Te.register("mk-hlsjs-interstitial-playback");
class $e extends Et {
  constructor(e) {
    (super([qi, cs, ro, so, Wi, no, ao, oo]), (this.session = e));
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
    K.debug("set audioTrack", e);
    const { currentInterstitialId: t, session: r } = this;
    !r ||
      !e ||
      e.id === void 0 ||
      (e.interstitialId === t &&
        (t || this.setAudioAndSubtitleForItem(e),
        this.setTrackOnInterstitialItems({ track: e, setTrack: this.setAudioAndSubtitleForItem })));
  }
  set videoTrack(e) {
    K.debug("set videoTrack", e);
    const { session: t } = this;
    !t || (e && e.id === void 0) || (t.videoSelectedPersistentID = e ? Number(e.id) : void 0);
  }
  set textTrack(e) {
    const { currentInterstitialId: t } = this;
    if ((K.debug("set textTrack:", e), e && e.interstitialId !== t)) return;
    if (!t) {
      const s = as(this.subtitleMediaOptions, this.currentAudioMediaOption, e),
        n = s ? s.MediaSelectionOptionsPersistentID : -1;
      this.setSubtitleTrack(n);
    }
    K.debug("set subtitle track on all interstitial items", this._interstitialItemIds);
    const r = !e || e.label === rt;
    this.setTrackOnInterstitialItems({ track: r ? void 0 : e, setTrack: this.setSubtitleForInterstitial });
  }
  setPreferredAudioTrackForItem(e, t) {
    const r = e[0]?.MediaSelectionOptionsInterstitialId,
      s = Ka(e, t),
      n = this.session.getEnabledAudioMediaOptionForItem({ interstitialAssetId: r });
    return (
      K.debug("setPreferredAudioTrackForItem - preferred track", s, n),
      !s || s.MediaSelectionOptionsPersistentID === n?.MediaSelectionOptionsPersistentID
        ? n
        : (this.setAudioTrack(s.MediaSelectionOptionsPersistentID, r), s)
    );
  }
  setPreferredSubtitleTrackForItem(e, t, r) {
    const s = e[0]?.MediaSelectionOptionsInterstitialId,
      n = as(e, t, r),
      a = this.session.getEnabledSubtitleMediaOptionForItem({ interstitialAssetId: s });
    (K.debug("setPreferredSubtitleTrackForItem - preferred track", s, n, a),
      !((!a && !n) || (a && n?.MediaSelectionOptionsPersistentID === a.MediaSelectionOptionsPersistentID)) &&
        this.setSubtitleTrack(n?.MediaSelectionOptionsPersistentID ?? -1, s));
  }
  setAudioAndSubtitleForItem(e, t) {
    K.debug("setAudioAndSubtitleForItem", { track: e, interstitialId: t });
    const r = t ? this.session.getAudioMediaOptionsForItem({ interstitialAssetId: t }) : this.session.audioMediaOptions,
      s = this.setPreferredAudioTrackForItem(r, e);
    K.debug("determining subtitle track due to audio track change");
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
    (K.debug("pruneInterstitialItems"),
      this._interstitialItemIds.forEach((e) => {
        const t = this.session.getAudioMediaOptionsForItem({ interstitialAssetId: e });
        (!t || t.length === 0) &&
          (K.debug(`Removing '${e}' from _interstitialItemIds`), this._interstitialItemIds.delete(e));
      }));
  }
  setTrackOnInterstitialItems({ track: e, setTrack: t }) {
    (K.debug("setTrackOnInterstitialItems", e),
      this.pruneInterstitialItems(),
      K.debug("Updating interstitial items:", this._interstitialItemIds));
    let r = 0;
    this._interstitialItemIds.forEach((s) => {
      (setTimeout(() => t(e, s), r), (r += 500));
    });
  }
  setAudioTrack(e, t) {
    const { session: r } = this;
    t
      ? (K.debug("Set audio track for interstitial", t, e), r.setInterstitialAudioSelectedPersistentId(t, e))
      : (K.debug("Set audio track for primary content", e), (r.audioSelectedPersistentID = e));
  }
  setSubtitleTrack(e, t) {
    const { session: r } = this;
    if (!t) {
      (K.debug("Set subtitle track for primary content", e), (r.subtitleSelectedPersistentID = e));
      return;
    }
    try {
      (K.debug("Set subtitle track for interstitial", t, e), r.setInterstitialSubtitleSelectedPersistentId(t, e));
    } catch (s) {
      K.error("Failed to set subtitle track for interstitial", t, e, s);
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
    const t = e.map(Qp);
    ((this._audioTracks = t), this.dispatchEvent(cs, t));
  }
  videoTracksUpdated(e = []) {
    const t = e.map(Xp);
    ((this._videoTracks = t), this.dispatchEvent(ao, t));
  }
  handleItemPlaying(e, t) {
    K.debug("handleItemPlaying", t);
    const { itemId: r, interstitialId: s } = t;
    ((this._playingItemId = r),
      this.updateAVAndTextTracks({ itemId: r }),
      s
        ? (this.dispatchEvent(qi, { selectedId: this.currentAudioMediaOption?.MediaSelectionOptionsPersistentID }),
          this.dispatchEvent(Wi, { selectedId: this.currentSubtitleMediaOption?.MediaSelectionOptionsPersistentID }))
        : this.handlePrimaryItemPlaying());
    const n = this.currentSubtitleMediaOption;
    this.dispatchEvent(so, {
      forcedTextTrack: n && n.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 ? Va(n) : void 0,
    });
  }
  handlePrimaryItemPlaying() {
    const {
        audioMediaOptions: e,
        currentAudioMediaOption: t,
        currentSubtitleMediaOption: r,
        subtitleMediaOptions: s,
      } = this,
      n = Ka(e);
    n && t?.MediaSelectionOptionsPersistentID === n.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(qi, { selectedId: t?.MediaSelectionOptionsPersistentID })
      : n && this.setAudioTrack(n.MediaSelectionOptionsPersistentID);
    const a = as(s, n);
    a && r?.MediaSelectionOptionsPersistentID === a.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(Wi, { selectedId: r?.MediaSelectionOptionsPersistentID })
      : this.setSubtitleTrack(a?.MediaSelectionOptionsPersistentID ?? -1);
  }
  updateAVAndTextTracks(e) {
    const t = this.session.getAudioMediaOptionsForItem(e),
      r = this.session.getSubtitleMediaOptionsForItem(e),
      s = this.session.getVideoMediaOptionsForItem?.(e) ?? [];
    (K.debug("updateAVAndTextTracks - updating audio/video and text tracks with options:", t, r, s),
      this.audioTracksUpdated(t),
      this.videoTracksUpdated(s),
      this.subtitleTracksUpdated(r));
  }
  handleAudioTrackSwitched(e, t) {
    if (
      (K.debug("handleAudioTrackSwitched", t, "current option: ", this.currentAudioMediaOption),
      !this.isEventForCurrentItem(t))
    )
      return;
    const r = t?.track?.persistentID;
    this.dispatchEvent(qi, { selectedId: r });
  }
  handleInlineStylesParsed(e, t) {
    this.dispatchEvent(ro, t);
  }
  handleManifestParsed(e, t) {
    K.debug("handleManifestParsed", t);
    const { audioTracks: r, interstitialId: s, subtitleTracks: n, videoTracks: a = [] } = t,
      o = r.map(ns),
      c = n.map(ns),
      l = a.map(ns);
    if (s && o.length > 0) {
      this._interstitialItemIds.add(s);
      const g = this.setPreferredAudioTrackForItem(o);
      this.setPreferredSubtitleTrackForItem(c, g);
    }
    l.length > 0 && (this.session.videoSelectedPersistentID = Yp(l)?.MediaSelectionOptionsPersistentID);
    const h = t.itemId !== void 0 && t.itemId === this._playingItemId && !this._parsedManifestItemIds.has(t.itemId);
    (this._parsedManifestItemIds.add(t.itemId), (!im.enabled || h) && this.handleItemPlaying("hlsItemPlaying", t));
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
            this.dispatchEvent(cs, this._audioTracks));
        } catch (s) {
          K.error("Failed to parse _hls.localized-rendition-names", s);
          return;
        }
    });
  }
  handleSubtitleTrackSwitch(e, t) {
    (K.debug("handleSubtitleTrackSwitch", t), this.isEventForCurrentItem(t) && this.dispatchEvent(Wi, t));
  }
  handleVideoTrackSwitched(e, t) {
    if (
      (K.debug("handleVideoTrackSwitched", t, "current option: ", this.currentVideoMediaOption),
      !this.isEventForCurrentItem(t))
    )
      return;
    const r = t?.track?.persistentID;
    this.dispatchEvent(oo, { selectedId: r });
  }
  subtitleTracksUpdated(e = []) {
    const t = [];
    (e.forEach((r) => {
      r.MediaSelectionOptionsDisplaysNonForcedSubtitles !== 0 && t.push(Va(r));
    }),
      (this._textTracks = t),
      this.dispatchEvent(no, t));
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
Ze([T()], $e.prototype, "setAudioAndSubtitleForItem");
Ze([T()], $e.prototype, "setSubtitleForInterstitial");
Ze([T()], $e.prototype, "handleItemPlaying");
Ze([T()], $e.prototype, "handleAudioTrackSwitched");
Ze([T()], $e.prototype, "handleInlineStylesParsed");
Ze([T()], $e.prototype, "handleManifestParsed");
Ze([T()], $e.prototype, "handleSessionDataComplete");
Ze([T()], $e.prototype, "handleSubtitleTrackSwitch");
Ze([T()], $e.prototype, "handleVideoTrackSwitched");
class rm {
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
var sm = Object.defineProperty,
  nm = Object.getOwnPropertyDescriptor,
  He = (i, e, t, r) => {
    for (var s = nm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && sm(e, t, s), s);
  };
const js = { bufferStalledError: "bufferStalledError", keySystemGenericError: "keySystemGenericError" },
  am = new Set([p.Reason.DEVICE_LIMIT, p.Reason.GEO_BLOCK, p.Reason.WIDEVINE_CDM_EXPIRED]),
  Gi = Te.register("mk-hlsjs-interstitial-playback"),
  om = Ir.register("mk-hlsjs-config-overrides"),
  cm = Te.get("mk-block-report-cdn-server"),
  lm = (i) => {
    const { Hls: e } = window;
    if (e && cm) {
      const t = st(e.DefaultConfig.fragLoadPolicy);
      ((t.default.reportCDNServer = !1), (t.customURL.reportCDNServer = !1), (i.fragLoadPolicy = t));
    }
  },
  um = (i) => {
    const e = om.value;
    e && typeof e == "object" && Object.assign(i, e);
  };
class me extends An {
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
      Gi.enabled && (e = this._hlsSession?.getCurrentIntegratedTimelineSegmentAndCurrentTime()),
      e?.targetTime ?? super.currentPlaybackTime
    );
  }
  async initializeExtension() {
    try {
      if (!this.hlsScriptURL) throw new Error("HLS.js script URL is not configured");
      await Promise.all([Mr(this.hlsScriptURL), this._rtcTracker?.loadScript()]);
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
      Gi.enabled && h.off(s, this.handleInterstitialUpdated),
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
      a = (W, oe) => oe?.keyURLs?.[W] !== void 0;
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
      const W = c.prepareReportingAgent(t);
      W !== void 0 && (o.appData.reportingAgent = W);
    }
    (u.debug("RTC: loadSource with load options", o),
      this.services.manifest.personalizedManifests &&
        ((e = e.replace("https://", "manifest://")), u.info("Manifest already loaded, passing url to HLSJS", e)),
      t !== void 0 && this.setCurrentPlaybackItem(t));
    const { startTime: g, startTimestamp: m } = r,
      k = m ? new Date(m) : g;
    (l?.loadSource(e, o, k),
      this.attachMedia(),
      t !== void 0 &&
        (this.keySystem === "fairplay" && a("hls-key-cert-url", t)
          ? l?.setProtectionData({ fairplaystreaming: { serverCertUrl: t.keyURLs["hls-key-cert-url"] } })
          : a("widevine-cert-url", t) &&
            l?.setProtectionData({ widevine: { serverCertUrl: t.keyURLs["widevine-cert-url"] } }),
        (t.state = F.ready)),
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
      this._hlsSession?.prefetchSource(wi(e, { ...t, drmUsed: this.keySystem }), { itemId: e.id }));
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
      r = Nn.get(),
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
    ((Gi.enabled || e?.isPodcastEpisode) && Object.assign(a, { gapless: !0, enableInterstitialPlayback: !0 }),
      e?.isPodcastEpisode && Object.assign(a, { interstitialResumptionBufferHole: 0, forceInterstitialSnapOutIn: !0 }),
      lm(a),
      um(a));
    const o = new t(a),
      {
        DATERANGE_UPDATED: c,
        ERROR: l,
        INTERNAL_ERROR: h,
        INTERSTITIALS_UPDATED: g,
        KEY_REQUEST_STARTED: m,
        LEVEL_SWITCHED: k,
        LICENSE_CHALLENGE_CREATED: W,
        MANIFEST_PARSED: oe,
        UNRESOLVED_URI_LOADING: J,
      } = t.Events;
    (o.on(l, this.handleHlsError),
      o.on(h, this.handleHlsError),
      o.on(oe, this.handleManifestParsed),
      o.on(m, this.handleKeyRequestStarted),
      o.on(W, this.handleLicenseChallengeCreated),
      o.on(k, this.handleLevelSwitched),
      o.on(c, this.handleDaterangeUpdated),
      Gi.enabled && o.on(g, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && o.on(J, this.handleUnresolvedUriLoading),
      (this._hlsSession = o),
      (window.hlsSession = o),
      (this._hlsJsTracks = new $e(o)),
      (this._hlsPreviewImageLoader = new rm(this._hlsSession)));
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
    let r = new y("mk-193", p.Reason.UNSUPPORTED_ERROR, t.reason);
    r.data = t;
    const { bufferStalledError: s, keySystemGenericError: n } = js;
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
      throw new y("mk-185", y.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const n = this.playbackDataStore.next?.id === s ? this.playbackDataStore.next : this.playbackDataStore.current;
    if (n === void 0)
      throw new y("mk-186", y.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    try {
      const a = await this._license.requestLicense(n.item, t, { userInitiated: r }),
        o = { statusCode: a.status };
      a?.license && (this.keySystem === "fairplay" ? (o.ckc = Nt(a.license)) : (o.license = Nt(a.license)));
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
          am.has(a.reason) &&
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
He([T()], me.prototype, "handleUnresolvedUriLoading");
He([T()], me.prototype, "handleInterstitialUpdated");
He([T()], me.prototype, "handleLevelSwitched");
He([T()], me.prototype, "handleDaterangeUpdated");
He([T()], me.prototype, "handleHlsError");
He([T()], me.prototype, "handleManifestParsed");
He([T()], me.prototype, "handleKeyRequestStarted");
He([T()], me.prototype, "handleLicenseChallengeCreated");
He([kt(250)], me.prototype, "seekToTime");
He([Jy(250)], me.prototype, "loadPreviewImage");
function dm(i) {
  const [e] = i.split("?");
  return e.endsWith("m3u") || e.endsWith("m3u8");
}
var hm = Object.defineProperty,
  pm = Object.getOwnPropertyDescriptor,
  cl = (i, e, t, r) => {
    for (var s = pm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && hm(e, t, s), s);
  };
class Mn {
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
            : K.warning(`Skipping registering metadata TextTrack with id "${r.id ?? "unknown"}"`);
          break;
        }
      }
  }
  onCueChange(e) {
    if ((K.debug("Processing metadata cues"), this.activeCues === void 0 || this.activeCues.length <= 0))
      (this.activeMetadata !== void 0 && this.onchange?.(), (this._activeMetadata = void 0));
    else {
      const t = wy(this.activeCues);
      (this.activeMetadata === void 0 || !t.equals(this.activeMetadata)) &&
        (K.debug("Track TimedMetadata changed", t), (this._activeMetadata = t), this.onchange?.(t));
    }
  }
  saveTrack() {}
  restoreSelectedTrack() {}
  destroy() {
    ((this._isDestroyed = !0), (this.onchange = void 0), this.detach());
  }
}
cl([T()], Mn.prototype, "registerMetadataTrack");
cl([T()], Mn.prototype, "onCueChange");
var fm = Object.defineProperty,
  ym = Object.getOwnPropertyDescriptor,
  It = (i, e, t, r) => {
    for (var s = ym(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && fm(e, t, s), s);
  };
const mm = { keySystemGenericError: "keySystemGenericError" },
  gm = new Set([p.Reason.DEVICE_LIMIT, p.Reason.GEO_BLOCK]),
  D = u.createChild("hlsjs-audio"),
  vm = Ir.register("mk-hlsjs-config-overrides"),
  bm = (i) => {
    const e = vm.value;
    e && typeof e == "object" && Object.assign(i, e);
  };
class ze extends Ar {
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
      (this.id3MetadataManager = new Mn({
        onchange: (t) => {
          const r = {
            item: this.nowPlayingItem,
            metadata: t,
            position: this.currentPlaybackTime,
            playingDate: this.currentPlayingDate,
          };
          (D.debug("Dispatching bufferTimedMetadataDidChange", r),
            this._dispatcher?.publish(we.bufferTimedMetadataDidChange, r));
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
    if (!dm(e))
      throw new y("mk-245", y.Reason.CONTENT_UNSUPPORTED, {
        description: "HlsJsAudioPlayer cannot play unencrypted non-HLS sources",
        data: { url: e, item: s },
      });
    return this.playHlsStream(e, s, r);
  }
  async playItemFromEncryptedSource(e, t = !1, r = {}) {
    if ((D.trace("HlsJsAudioPlayer.playItemFromEncryptedSource", e, r), this.playbackState === I.stopped)) {
      D.debug("hlsjsAudioPlayer.playItemFromEncryptedSource aborting playback because player is stopped");
      return;
    }
    (D.debug(`Playing Encrypted Item: ${or(e)}`),
      (e.playbackType = le.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = F.loading),
      (this.userInitiated = t),
      await this.playHlsStream(e.assetURL, e, r));
  }
  async initializeMediaElement() {
    const e = Pn();
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
      D.debug("initializedMediaElement", e));
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
      await Promise.all([Mr(this.hlsScriptURL), this._rtcTracker?.loadScript()]);
    } catch (e) {
      throw (D.error(`hlsjs-audio-player failed to load script ${this.hlsScriptURL}`, e), e);
    }
  }
  async stopMediaElement() {
    (D.trace("HlsJsAudioPlayer.stopMediaElement()"), await super.stopMediaElement(), this.destroy());
  }
  async stopMediaAndCleanup(e = I.stopped) {
    (D.debug("HlsJsAudioPlayer.stopMediaAndCleanup", e),
      await super.stopMediaAndCleanup(e),
      this.unloadPlaybackItem("current"));
  }
  destroy() {
    if ((D.debug("HlsJsAudioPlayer.destroy()"), this.hls)) {
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
    (D.trace("HlsJsAudioPlayer.playHlsStream()", e, t, r),
      (this._unrecoverableError = void 0),
      D.debug("Initiating HLS.js player"),
      this.createHlsPlayer());
    let s, n;
    this.keySystem === "widevine" &&
      (D.debug("Setting Widevine specific HLS options"),
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
      D.info(`Loading source into HLS.js: ${e}`),
      D.debug("Calling loadSource with options", a),
      this.hls.loadSource(e, a, r.startTime),
      this.attachMedia(),
      t)
    ) {
      const l = (h) => t.keyURLs?.[h] !== void 0;
      (this.keySystem === "fairplay" && l("hls-key-cert-url")
        ? (D.info(`Setting Protection Data URL for FairPlay: ${t.keyURLs["hls-key-cert-url"]}`),
          this.hls.setProtectionData({ fairplaystreaming: { serverCertUrl: t.keyURLs["hls-key-cert-url"] } }))
        : l("widevine-cert-url") &&
          (D.info(`Setting Protection Data URL for Widevine: ${t.keyURLs["widevine-cert-url"]}`),
          this.hls.setProtectionData({ widevine: { serverCertUrl: t.keyURLs["widevine-cert-url"] } })),
        (t.state = F.ready));
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
    D.trace("preloadNextItem", e, t);
    const r = this.playbackDataStore.next;
    if (r !== void 0 && r.id === e.id) {
      D.info(`Source already preloaded for item "${e}"`);
      return;
    }
    (D.info(`Prefetching HLS source for item "${e}"`),
      this.unloadPlaybackItem("next"),
      (this.playbackDataStore.next = { id: e.id, item: e, asset: void 0 }),
      this.hls?.prefetchSource(wi(e, { ...t, drmUsed: this.keySystem }), { itemId: e.id }));
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
    D.trace("HlsJsAudioPlayer.createHlsPlayer()");
    const { os: e } = this.services.runtime,
      { Hls: t } = window,
      r = Nn.get(),
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
    (D.debug("Reading HLS.js option overrides from DevFlag"), bm(s), D.debug("Constructing HLS instance", s));
    const n = new t(s);
    (D.debug(`Using HLS instance with ID ${n.sessionID}`, s),
      D.debug("Adding Event handlers for HLS instance"),
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
    if ((D.warn("HLS.js error", JSON.stringify(t)), this._unrecoverableError)) return;
    let r = new p(p.Reason.UNSUPPORTED_ERROR, t.reason);
    r.data = t;
    const { keySystemGenericError: s } = mm;
    if (t.details === s) {
      this._dispatcher.publish(s, r);
      return;
    }
    if ((t.reason === "output-restricted" && (r = new p(p.Reason.OUTPUT_RESTRICTED, t.reason)), t.fatal))
      if ((this.hls.destroy(), this.shouldDispatchErrors)) this._dispatcher.publish(f.mediaPlaybackError, r);
      else throw r;
  }
  async handleManifestParsed(e, t) {
    (D.debug("handleManifestParsed", t), (this.nowPlayingItem.state = F.ready));
  }
  handleKeyRequestStarted(e, t) {
    D.trace("HlsJsAudioPlayer.handleKeyRequestStarted()", t);
    const r = t.appItemIds?.[0] ?? "unknown";
    (D.debug(`Generating key request for item ${r} with URI ${t.keyuri}`), t.resolve({}));
  }
  async handleLicenseChallengeCreated(e, t) {
    D.trace("HlsJsAudioPlayer.handleLicenseChallengeCreated()", t);
    const r = t.appItemIds?.[0];
    if (r === void 0)
      throw new y("mk-191", y.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const s = this.playbackDataStore.next?.id === r ? this.playbackDataStore.next : this.playbackDataStore.current;
    if (s === void 0)
      throw new y("mk-192", y.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    D.debug(`Handling License Challenge for item ${r} with URI ${t.keyuri}`);
    const { userInitiated: n } = this;
    try {
      const a = await this._license.requestLicense(s.item, t, { userInitiated: n }),
        o = { statusCode: a.status };
      a?.license && (this.keySystem === "fairplay" ? (o.ckc = Nt(a.license)) : (o.license = Nt(a.license)));
      const c = a["renew-after"];
      (c && (o.renewalDate = new Date(Date.now() + c * 1e3)),
        (s.licenseChallenge = t),
        (s.licenseKey = o),
        (s.config = { userInitiated: n }),
        D.debug(`Passing License Challenge Response for ${t.keyuri} to HLS`, o),
        t.resolve(o));
    } catch (a) {
      if (this._unrecoverableError) return;
      const o = a.data,
        c = {};
      (o?.status !== void 0 && (c.statusCode = parseInt(o.status, 10)),
        D.warn("Passing license response error to Hls.js", c),
        t.resolve(c),
        p.isMKError(a) &&
          gm.has(a.reason) &&
          ((this._unrecoverableError = a),
          this.resetDeferredPlay(),
          await this.stop({ endReasonType: P.FAILED_TO_LOAD, userInitiated: this.userInitiated })),
        this.onPlaybackLicenseError(a));
    }
  }
  onPlaybackLicenseError(e) {
    (this.resetDeferredPlay(), this._dispatcher.publish(x.playbackLicenseError, e));
  }
  async seekToTime(e) {
    this.hls
      ? (D.debug("hlsjs-audio: hls seekTo", e), (this.hls.seekTo = e))
      : (D.debug("hlsjs-audio: media element seek to", e), (this._targetElement.currentTime = e));
  }
  attachMedia() {
    this._isMediaAttached || (this.hls?.attachMedia(this.mediaElement), (this._isMediaAttached = !0));
  }
  detachMedia() {
    (this.hls?.detachMedia(), (this._isMediaAttached = !1));
  }
}
It([T()], ze.prototype, "handleLevelSwitched");
It([T()], ze.prototype, "handleHlsError");
It([T()], ze.prototype, "handleManifestParsed");
It([T()], ze.prototype, "handleKeyRequestStarted");
It([T()], ze.prototype, "handleLicenseChallengeCreated");
It([T()], ze.prototype, "onPlaybackLicenseError");
It([kt(250)], ze.prototype, "seekToTime");
var _m = Object.defineProperty,
  Tm = Object.getOwnPropertyDescriptor,
  ll = (i, e, t, r) => {
    for (var s = Tm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && _m(e, t, s), s);
  };
const N = u.createChild("html-audio"),
  co = [
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
  Em = ["NotAllowedError", "NotSupportedError"];
class ci {
  id = Si();
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
      (this.windowHandlers = new Ht(this, e.services.runtime)),
      (this.fullscreen = new Nc(this)),
      Ie()?.setItem(gi, this.serial),
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
      r = e.playbackType === le.unencryptedFull,
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
        ? Ie()?.setItem(gi, this.serial)
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
        (N.debug("setting state to ended on ", r.title),
        (r.state = F.ended),
        r.endMonitoringStateDidChange(),
        r.endMonitoringStateWillChange()),
      (this._nowPlayingItem = e),
      N.debug("setting state to playing on ", e.title),
      (e.state = F.playing),
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
    (N.debug("HTMLAudioPlayer.playbackState is changing", s),
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
    if ((N.trace("HTMLAudioPlayer.initialize"), this._isInitialized)) {
      N.warn("Player is already initialized");
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
      N.debug(`Adding event handlers to <HTMLMediaElement id=${this.targetElement.id} />`, this.targetElement));
    for (const t of co) e.addEventListener(t, this);
    this.dispatcher.publish(S.playerActivate);
  }
  removeEventHandlers() {
    (N.trace("HTMLAudioPlayer.removeEventHandlers()"),
      setTimeout(() => {
        N.debug(`Removing event handlers from <HTMLMediaElement id=${this.targetElement.id} />`, this.targetElement);
        for (const e of co) this.targetElement.removeEventListener(e, this);
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
    return (this.seeker?.end(), (this.seeker = new En(this)), this.seeker);
  }
  async stop(e) {
    (N.debug("HTMLAudioPlayer.stop", e),
      await this.waitForPendingPlay(),
      this.isPlaying &&
        (N.debug("HTMLAudioPlayer.stop dispatching playbackStop"),
        this.dispatch(S.playbackStop, {
          item: this.nowPlayingItem,
          position: this.currentPlaybackTime,
          startPosition: this.initialPlaybackTime,
          ...e,
        })),
      await this.stopMediaAndCleanup());
  }
  async stopMediaAndCleanup(e = I.stopped) {
    (N.debug("HTMLAudioPlayer.stopMediaAndCleanup", e),
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
      (N.debug("HTMLAudioPlayer.destroy()"),
      (this._isDestroyed = !0),
      this.playbackErrorSubscription.unsubscribe(),
      !this.hasMediaElement)
    )
      return;
    const e = this.targetElement;
    (this.resetMediaElement(), this.removeEventHandlers(), e.parentNode?.removeChild(e));
  }
  async handleEvent(e) {
    e.type !== "timeupdate" && N.debug("HTMLAudioPlayer.handleEvent: ", e.type, e);
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
        if ((N.debug('media element "ended" event'), this.isElementCleaned())) {
          N.debug('media element already cleaned, ignoring "ended" event');
          break;
        }
        const r = this.nowPlayingItem,
          s = r?.playbackDuration ? r.playbackDuration / 1e3 : this.currentPlaybackTime;
        (await this.stopMediaAndCleanup(I.ended),
          this.dispatch(S.playbackStop, { item: r, position: s, endReasonType: P.NATURAL_END_OF_TRACK }));
        break;
      }
      case "error": {
        (N.error("Playback Error", e, this.targetElement.error),
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
      N.debug("HTMLAudioPlayer.handleBufferStart: setting initialPlaybackTime", this.initialPlaybackTime));
  }
  async pause(e = {}) {
    (await this.waitForPendingPlay(),
      this.isPlaying &&
        (await this.pauseMedia(),
        (this.paused = !0),
        this.dispatch(S.playbackPause, { item: this.nowPlayingItem, position: this.currentPlaybackTime, ...e })));
  }
  async play(e = !0) {
    if ((N.debug("HTMLAudioPlayer.play()"), !!this.nowPlayingItem))
      try {
        (await this.playMedia(),
          N.debug("HTMLAudioPlayer.play dispatching playbackPlay"),
          this.dispatch(S.playbackPlay, {
            userInitiated: e,
            item: this.nowPlayingItem,
            position: this.currentPlaybackTime,
          }));
      } catch (t) {
        const r = t?.name;
        if (
          (r !== void 0 && Em.includes(r) && N.error("HTMLAudioPlayer.play() rejected due to", t),
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
      Ve(t, "isPlaying") || (t.isPlaying = this.isPlaying),
      this.dispatcher.publish(e, t));
  }
  tsidChanged(e) {
    e === void 0 || e === "" || (this.isPrimaryPlayer = e === this.serial);
  }
  async waitForPendingPlay() {
    this.deferredPlay && (await this.deferredPlay.promise);
  }
  async loadMedia() {
    (N.debug("HTMLAudioPlayer.loadMedia", this.targetElement), this.targetElement.load());
  }
  async pauseMedia() {
    this.targetElement.pause();
  }
  async playAssetURL(e, t) {
    (N.debug("HTMLAudioPlayer.playAssetURL", e), (this.targetElement.src = e));
    const r = this.loadMedia();
    if (t) {
      (N.debug("HTMLAudioPlayer.loadOnly"), await r);
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
    throw new y("mk-243", y.Reason.CONTENT_UNSUPPORTED, {
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
    N.debug("HTMLAudioPlayer.playMedia", this.targetElement);
    try {
      await this.targetElement.play();
    } catch (e) {
      throw (N.error("HTMLAudioPlayer.playMedia: targetElement.play() rejected", e), e);
    }
  }
  setTargetElementTitle(e) {
    this.hasMediaElement && (this.targetElement.title = e);
  }
  resetDeferredPlay() {
    this.deferredPlay = void 0;
  }
  async stopMediaElement() {
    (N.trace("HTMLAudioPlayer.stopMediaElement()"),
      this.hasMediaElement &&
        (N.debug(`Stopping HTMLMediaElement id=${this.targetElement.id}`, this.targetElement),
        this.targetElement.pause(),
        this.resetMediaElement()));
  }
  resetMediaElement() {
    N.trace("HTMLAudioPlayer.resetMediaElement()");
    const e = this.targetElement;
    if (!e || this.isElementCleaned()) {
      N.debug("No HTMLMediaElement to reset");
      return;
    }
    (N.debug("Resetting HTMLMediaElement", e),
      (e.currentTime = 0),
      e.removeAttribute("src"),
      e.removeAttribute("title"));
  }
  isElementCleaned() {
    const e = this.targetElement;
    return e ? e.currentTime === 0 && e.src === "" && e.title === "" : !0;
  }
  finishPlaybackSequence() {
    N.debug("HTMLAudioPlayer.finishPlaybackSequence", this.deferredPlay);
    const e = this.deferredPlay?.resolve(void 0);
    return ((this.deferredPlay = void 0), e);
  }
  startPlaybackSequence() {
    return (
      N.debug("HTMLAudioPlayer.startPlaybackSequence", this.deferredPlay),
      this.deferredPlay && (N.warn("Previous playback sequence not cleared"), this.finishPlaybackSequence()),
      (this.deferredPlay = gn()),
      this.deferredPlay.promise
    );
  }
  async initializeMediaElement() {
    const e = Pn();
    ((e.autoplay = !1),
      (e.id = "apple-music-player"),
      (e.controls = !1),
      (e.muted = !1),
      (e.playbackRate = 1),
      (e.preload = "metadata"),
      (e.volume = 1),
      (this.mediaElement = e),
      document.body.appendChild(e),
      N.debug("initializedMediaElement", e));
  }
  toString() {
    return `<${this.playerName} id="${this.id}" isInitialized=${this.isInitialized} isDestroyed=${this.isDestroyed} />`;
  }
}
ll([T()], ci.prototype, "onPlaybackError");
ll([kt(250)], ci.prototype, "seekToTime");
let ul = "playback/Unknown-0.0.0";
function km(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
function Sm(i) {
  const e = i?.name !== void 0 && i.name !== "" ? km(i.name) : "Unknown",
    t = i?.build ?? i?.version ?? "0.0.0";
  ul = `playback/${e}-${t}`;
}
function dl() {
  return ul;
}
var Im = ((i) => ((i.REPEAT = "REPEAT"), (i.SHUFFLE = "SHUFFLE"), (i.AUTOPLAY = "AUTOPLAY"), i))(Im || {}),
  xe = ((i) => (
    (i[(i.PREVIEW_ONLY = 0)] = "PREVIEW_ONLY"),
    (i[(i.MIXED_CONTENT = 1)] = "MIXED_CONTENT"),
    (i[(i.FULL_PLAYBACK_ONLY = 2)] = "FULL_PLAYBACK_ONLY"),
    (i[(i.SHAREPLAY_PARTICIPANT = 3)] = "SHAREPLAY_PARTICIPANT"),
    i
  ))(xe || {});
const Pm = "capabilitiesChanged",
  wm = "musickitconfigured",
  Am = "autoplayEnabledDidChange",
  Rm = "musickitloaded",
  Cm = "mediaSkipAvailable",
  Om = "mediaRollEntered",
  Dm = "mediaUpNext",
  Nm = "needsGDPRDidChange",
  Mm = "queueIsReady",
  Lm = "queueItemsDidChange",
  Um = "queueItemForStartPosition",
  xm = "queuePositionDidChange",
  Fm = "shuffleModeDidChange",
  Km = "repeatModeDidChange",
  Vm = "musickitwebcomponentsloaded",
  E = {
    configured: wm,
    loaded: Rm,
    audioTrackAdded: f.audioTrackAdded,
    audioTrackChanged: f.audioTrackChanged,
    audioTrackRemoved: f.audioTrackRemoved,
    authorizationStatusDidChange: je.authorizationStatusDidChange,
    authorizationStatusWillChange: je.authorizationStatusWillChange,
    bufferedProgressDidChange: f.bufferedProgressDidChange,
    capabilitiesChanged: Pm,
    autoplayEnabledDidChange: Am,
    drmUnsupported: f.drmUnsupported,
    eligibleForSubscribeView: je.eligibleForSubscribeView,
    forcedTextTrackChanged: f.forcedTextTrackChanged,
    hlsDaterangeUpdated: f.hlsDaterangeUpdated,
    mediaCanPlay: f.mediaCanPlay,
    mediaElementCreated: f.mediaElementCreated,
    mediaItemStateDidChange: xs.mediaItemStateDidChange,
    mediaItemStateWillChange: xs.mediaItemStateWillChange,
    mediaPlaybackError: f.mediaPlaybackError,
    mediaSkipAvailable: Cm,
    mediaRollEntered: Om,
    mediaUpNext: Dm,
    metadataDidChange: f.metadataDidChange,
    authReflectionDidComplete: je.authReflectionDidComplete,
    needsGDPRDidChange: Nm,
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
    queueIsReady: Mm,
    queueItemsDidChange: Lm,
    queueItemForStartPosition: Um,
    queuePositionDidChange: xm,
    shuffleModeDidChange: Fm,
    repeatModeDidChange: Km,
    storefrontCountryCodeDidChange: je.storefrontCountryCodeDidChange,
    storefrontIdentifierDidChange: je.storefrontIdentifierDidChange,
    textTrackAdded: f.textTrackAdded,
    textTrackChanged: f.textTrackChanged,
    textTrackRemoved: f.textTrackRemoved,
    timedMetadataDidChange: f.timedMetadataDidChange,
    userTokenDidChange: je.userTokenDidChange,
    videoTrackAdded: f.videoTrackAdded,
    videoTrackChanged: f.videoTrackChanged,
    videoTrackRemoved: f.videoTrackRemoved,
    webComponentsLoaded: Vm,
  },
  GT = {
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
function Bm(i) {
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
function qs(i, e = ["pre-roll", "mid-roll", "post-roll"]) {
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
const lo = (i, e) => i + e.duration;
function YT(i) {
  const e = qs(i, ["pre-roll"]),
    t = qs(i, ["post-roll"]),
    r = e.reduce(lo, 0),
    s = t.reduce(lo, 0),
    n = i.hlsMetadata["up-next.start"] ?? i.hlsMetadata["watched.time"] ?? i.hlsMetadata["feature.duration"],
    a = parseFloat(n),
    o = a - r;
  return { mainContentStarts: r, mainContentEnds: a, mainContentLength: o, totalContentLength: a + s };
}
var $m = Object.defineProperty,
  Hm = Object.getOwnPropertyDescriptor,
  jm = (i, e, t, r) => {
    for (var s = Hm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && $m(e, t, s), s);
  };
class Lr {
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
jm([T()], Lr.prototype, "handleTimeChange");
var qm = Object.defineProperty,
  Wm = Object.getOwnPropertyDescriptor,
  Gm = (i, e, t, r) => {
    for (var s = Wm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && qm(e, t, s), s);
  };
class Ai {
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
Gm([T()], Ai.prototype, "handleMediaItemChange");
class Ym extends Ai {
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
    return e === void 0 ? [] : qs(e, ["pre-roll", "post-roll"]);
  }
  setupWatchers(e) {
    const t = [];
    (e.forEach((r) => {
      const { start: s, duration: n } = r,
        a = new Lr(this.dispatcher, this.handlePlaybackThreshold, s, s + n);
      (t.push(a), this.rollMap.set(a, r));
    }),
      (this.watchers = t));
  }
}
class zm extends Ai {
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
    return e === void 0 ? [] : Bm(e);
  }
  setupWatchers(e) {
    const t = [];
    (e.forEach((r) => {
      const { start: s, target: n, duration: a, promo: o } = r,
        c = new Lr(this.dispatcher, this.handlePlaybackThreshold, s, o ? n : s + a, !0);
      (t.push(c), this.skipMap.set(c, r));
    }),
      (this.watchers = t));
  }
}
const _ = new St("services"),
  zT = (i) => Math.min(Math.round(Ln(i)), Math.round(Un(i))),
  uo = (i) => !isNaN(Ln(i)) && !isNaN(Un(i)),
  Ln = (i) => parseFloat(i.hlsMetadata["up-next.start"]),
  Un = (i) => parseFloat(i.hlsMetadata["watched.time"]),
  Qm = async (i, e) => {
    if (!(!i.isUTS || !i.assetURL))
      try {
        const t = wi(i, e.playOptions),
          r = await e.manifestManager.fetchManifest(t);
        i.hlsMetadata = { ...i.hlsMetadata, ...Xm(r.content) };
      } catch (t) {
        _.error(t.message, t);
      }
  };
function Xm(i, e = {}) {
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
var Jm = Object.defineProperty,
  Zm = Object.getOwnPropertyDescriptor,
  eg = (i, e, t, r) => {
    for (var s = Zm(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Jm(e, t, s), s);
  };
class hl extends Ai {
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold() {
    this.dispatcher.publish(E.mediaUpNext);
  }
  shouldMonitor() {
    if (!super.shouldMonitor()) return !1;
    const e = this.playbackController.nowPlayingItem;
    return e !== void 0 && uo(e);
  }
  startMonitor() {
    (this.setupWatchers(), super.startMonitor());
  }
  setupWatchers() {
    const e = this.playbackController.nowPlayingItem;
    !e ||
      !uo(e) ||
      (this.watchers = [
        new Lr(
          this.dispatcher,
          this.handlePlaybackThreshold,
          Math.round(this.getStartTime(e)),
          Number.POSITIVE_INFINITY,
        ),
      ]);
  }
  getStartTime(e) {
    const t = Ln(e);
    return isNaN(t) ? Un(e) : t;
  }
}
eg([T()], hl.prototype, "handlePlaybackThreshold");
const vt = Te.register("mk-console-logging"),
  Ut = yn.register("mk-logging-levels"),
  pl = te.ERROR;
let hr = pl;
const M = new St("mk", { level: hr, handlers: { console: new Rh({ enabled: !1 }), external: new mc(() => {}) } });
function fl(i) {
  bh(M, _h(i));
}
function tg() {
  (M.setLevel(hr), vh(M, { includeRoot: !1 }));
}
function Ws(i) {
  M.handlers.console.enabled = i ?? !1;
}
function ho(i) {
  hr = gt(i) ?? hr;
}
function ig() {
  return M.level !== pl;
}
function rg(i) {
  M.handlers.external = new mc(i);
}
function sg(i) {
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
const li = {
  getLogger(i = "*") {
    return M.getByNamespace(i ?? "*");
  },
  setConsoleOutput(i) {
    i === !0
      ? (vt.enable(), Ws(!0), M.info("Console output is enabled with level " + M.levelName))
      : (vt.disable(), Ws(!1));
  },
  setLoggingLevels(i, e) {
    i.trim() !== "" ? (Ut.set(i), fl(i), li.setConsoleOutput(e ?? !0)) : li.clearLoggingLevels(e ?? !1);
  },
  clearLoggingLevels(i = !1) {
    (li.setConsoleOutput(i), Ut.clear(), tg());
  },
  listLoggers(i) {
    return sg(i);
  },
};
vt.enabled && li.setConsoleOutput(vt.enabled);
Ut.value !== void 0 && li.setLoggingLevels(Ut.value, vt.enabled);
var Se = ((i) => ((i[(i.none = 0)] = "none"), (i[(i.one = 1)] = "one"), (i[(i.all = 2)] = "all"), i))(Se || {});
class ng {
  canSetRepeatMode = !1;
  get repeatMode() {
    return 0;
  }
  set repeatMode(e) {
    e !== this.repeatMode && _.warn("setting repeatMode is not supported in this playback method");
  }
}
class ag {
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
    !(e in Se) ||
      e === this._repeatMode ||
      ((this._repeatMode = e), this.dispatcher.publish(E.repeatModeDidChange, this._repeatMode));
  }
}
const po = al(),
  j = {
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
      hls: po.hls,
      rtc: po.rtc,
      mediaApi: "https://amp-api.music.apple.com/v1",
      webPlayback: `https://${Ii("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
    },
  },
  fo = Ir.register("mk-offers-key-urls").get();
fo
  ? (j.urls.hlsOffersKeyUrls = fo)
  : (j.urls.hlsOffersKeyUrls = {
      "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
      "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
      "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
    });
let w;
function og(i, e) {
  return ((w = new cg(i, e)), w);
}
class cg {
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
      (this.storekit = new Ec(e, {
        apiBase: j.urls.mediaApi,
        authenticateMethod: j.features["legacy-authenticate-method"] ? "POST" : "GET",
        deeplink: t.linkParameters,
        disableAuthBridge: t.disableAuthBridge,
        iconURL: j.app.icon,
        meParameters: t.meParameters,
        persist: t.persist,
        realm: t.realm || ie.MUSIC,
        fetch: t?.services?.request?.fetch,
        disableLogoutURL: t.disableLogoutURL,
      })),
      this.storekit.addEventListener(E.authorizationStatusDidChange, (s) => {
        const { authorizationStatus: n } = s;
        this._hasAuthorized = [se.AUTHORIZED, se.RESTRICTED].includes(n);
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
    return this.storekit.authorizationStatus === se.RESTRICTED;
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
function lg(i) {
  return (i === void 0 && (i = w && w.storekit), i !== void 0 && i.hasAuthorized && i.userTokenIsValid);
}
async function ug(i) {
  return (i === void 0 && (i = w && w.storekit), i.hasMusicSubscription());
}
function dg(i) {
  const e = td(
    {
      id: "metadata.itemId",
      type: "metadata.itemType",
      "attributes.contentRating": function () {
        if (i?.metadata?.isExplicit === 1) return Ic;
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
const hg = { condition: () => !0, toOptions: (i, e, t) => [{ ...i, context: t }] },
  pg = (i) => i.type === "stations" && i.attributes?.isLive,
  fg = (i, e, t) => [
    { ...i, context: t, container: { attributes: i.attributes, id: i.id, type: i.type, name: t?.featureName } },
  ],
  yg = { condition: pg, toOptions: fg },
  mg = {
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
  yl = (i) => (e) => !!e.relationships?.[i]?.data,
  xn =
    (...i) =>
    ({ type: e }) =>
      i.includes(e),
  ml = (i) => {
    if (i === void 0 || i === "") return;
    const { prefix: e } = j;
    return e ? `${e}:${i}` : i;
  },
  gg = (i, e) => e ?? i?.container?.name ?? pt.SONG,
  vg = (i, e, t) => {
    const r = { id: i.id, ...e, name: ml(gg(i, t?.featureName)) };
    return [
      { relationships: i.relationships, attributes: i.attributes, id: i.id, type: i.type, container: r, context: t },
    ];
  },
  bg = { toOptions: vg, condition: xn("songs", "library-songs", "music-videos", "library-music-videos") },
  _g = (i) => {
    if (i === void 0) return;
    const [e] = Object.keys(i);
    return i[e];
  },
  Tg = (i) => {
    if (i === void 0) return;
    const e = Object.keys(i);
    return i[e[e.length - 1]];
  },
  Eg = ({ type: i, attributes: { assetTokens: e } }) => (i.includes("udio") ? _g(e) : Tg(e)),
  kg = {
    condition: xn("uploaded-audios", "uploadedAudio", "uploaded-videos", "uploadedVideo"),
    toOptions: (i, e, t) => {
      const r = {
        ...i,
        context: t,
        attributes: {
          ...i.attributes,
          assetUrl: Eg(i),
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
  Sg = {
    toOptions: function (i, e, t) {
      return i.relationships.episodes.data.map((r) => ({ ...r, context: t }));
    },
    condition: yl("episodes"),
    requiredRelationships: ["episodes"],
  };
function Ig(i = []) {
  return i.length === 0
    ? !1
    : i.filter(({ attributes: e }) => (e ? e.workName || e.movementName || e.movementCount || e.movementNumber : !1))
        .length > 0;
}
const Pg = (i, e) => {
    if (e) return e;
    const t = Ig(i.relationships.tracks.data);
    if (i.type === "albums" || i.type === "library-albums") return t ? pt.ALBUM_CLASSICAL : pt.ALBUM;
    if (i.type === "playlists" || i.type === "library-playlists") return t ? pt.PLAYLIST_CLASSICAL : pt.PLAYLIST;
  },
  wg = (i, e, t) => {
    const r = { attributes: i.attributes, id: i.id, type: i.type, name: ml(Pg(i, t?.featureName)) };
    return i.relationships.tracks.data.map((s) => ({
      attributes: s.attributes,
      id: s.id,
      type: s.type,
      container: r,
      context: t,
    }));
  },
  Ag = { toOptions: wg, condition: yl("tracks"), requiredRelationships: ["tracks"] },
  Rg = {
    condition: xn("music-movies"),
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
  gl = [Ag, Sg, bg, yg, mg, kg, Rg],
  Gs = (i, e, t = {}) => (
    (e = e?.serialize?.().data ?? e),
    (gl.find((s) => s.condition(i, e, t)) ?? hg).toOptions(i, e, t).map((s) => new mi(s))
  ),
  Cg = gl.reduce((i, e) => {
    const t = e.requiredRelationships;
    return (t && i.push(...t), i);
  }, []),
  Og = new Set(Cg),
  pr = (i, e) => Array.isArray(i) && (i.length === 0 || e(i[0])),
  yo = (i) => i && i.id !== void 0 && i.type !== void 0,
  Dg = (i) => i && i.id !== void 0,
  Ng = (i) =>
    i &&
    i.contentId !== void 0 &&
    i.metadata !== void 0 &&
    i.metadata.itemId !== void 0 &&
    i.metadata.itemType !== void 0,
  Mg = (i) => i && i.items && Array.isArray(i.items),
  mo = (i) => i && i.loaded,
  Lg = M.linkChild(new St("queue")),
  Ug = (i) => {
    if (!Mg(i) && !mo(i)) return [];
    const e = mo(i) ? Fg(i) : xg(i);
    return (e.forEach((t) => (t.context = { ...i.context, ...t.context })), e);
  },
  xg = ({ items: i }) => (pr(i, Ng) ? i.map((e) => new mi(dg(e))) : pr(i, Dg) ? i.map((e) => new mi(e)) : []),
  Fg = (i) => {
    const e = [],
      { loaded: t, container: r, context: s } = i;
    return t === void 0
      ? []
      : pr(t, ma)
        ? (t.forEach((n) => {
            e.push(...go(n, r, s));
          }),
          e)
        : pr(t, yo)
          ? (t.forEach((n) => {
              e.push(...Ys(n, r, s));
            }),
            e)
          : ma(t)
            ? go(t, r, s)
            : yo(t)
              ? Ys(t, r, s)
              : [];
  },
  go = (i, e, t = {}) => {
    const { data: r } = i.serialize(!0, void 0, { includeRelationships: Og, allowFullDuplicateSerializations: !0 });
    return Ys(r, e, t);
  },
  Ys = (i, e, t = {}) => (Lg.trace("resourceToMediaItem()", i), Gs(i, e, t));
M.createChild("queue");
class vl {
  isAutoplay = !1;
  item;
  constructor(e, t) {
    ((this.item = e), (this.isAutoplay = t?.isAutoplay ?? !1));
  }
  restrict() {
    return this.item.restrict();
  }
}
function Ot(i, e) {
  return i.map((t) => new vl(t, e));
}
function Ue(i) {
  return i.map((e) => e.item);
}
const { queueItemsDidChange: Kg, queuePositionDidChange: vo } = E;
class bl {
  repeatable;
  hasAutoplayStation = !1;
  playbackMode = xe.MIXED_CONTENT;
  _itemIDs = [];
  _queueItems = [];
  _isRestricted = !1;
  _nextPlayableItemIndex = -1;
  _position = -1;
  _dispatcher;
  constructor(e) {
    if (((this._dispatcher = e.services.dispatcher), (this.playbackMode = e.playbackMode), !e.descriptor)) return;
    const t = Ug(e.descriptor).filter((r) => zs(r, this.playbackMode));
    ((this._queueItems = Ot(t)),
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
    return Ue(this._queueItems);
  }
  get autoplayItems() {
    return Ue(this._queueItems.filter((e) => e.isAutoplay));
  }
  get unplayedAutoplayItems() {
    return Ue(this._unplayedQueueItems.filter((e) => e.isAutoplay));
  }
  get userAddedItems() {
    return Ue(this._queueItems.filter((e) => !e.isAutoplay));
  }
  get unplayedUserItems() {
    return Ue(this._unplayedQueueItems.filter((e) => !e.isAutoplay));
  }
  get playableItems() {
    return Ue(this._queueItems.filter((e) => ut(e.item, this.playbackMode)));
  }
  get unplayedPlayableItems() {
    return Ue(this._unplayedQueueItems.filter((e) => ut(e.item, this.playbackMode)));
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
    ((this._queueItems = Ot(e)), this._reindex(), this._dispatcher.publish(E.queueItemsDidChange, this.items));
  }
  get currentQueueItem() {
    return this.queueItem(this.position);
  }
  remove(e) {
    if ((uc("remove", { message: "The queue remove function has been deprecated" }), e === this.position))
      throw new p(p.Reason.INVALID_ARGUMENTS);
    this.splice(e, 1);
  }
  append(e = []) {
    return this.appendQueueItems(Ot(e));
  }
  appendQueueItems(e = []) {
    this.spliceQueueItems(this.appendTargetIndex, 0, e);
  }
  splice(e, t, r = []) {
    return Ue(this.spliceQueueItems(e, t, Ot(r)));
  }
  spliceQueueItems(e, t, r = [], s = !0) {
    r = r.filter((a) => zs(a?.item, this.playbackMode));
    const n = this._queueItems.splice(e, t, ...r);
    return (
      this._itemIDs.splice(e, t, ...r.map((a) => a.item.id)),
      s &&
        (this._dispatcher.publish(S.queueModified, { start: e, added: Ue(r), removed: Ue(n) }),
        this._dispatcher.publish(Kg, this.items)),
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
    ((this._position = -1), e >= 0 && this._dispatcher.publish(vo, { oldPosition: e, position: this.position }));
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
    ((!r || !ut(r, this.playbackMode)) && (this._position = this.findPlayableIndexForward(e)),
      this._position !== t && this._dispatcher.publish(vo, { oldPosition: t, position: this._position }));
  }
  findPlayableIndexForward(e = this.position) {
    if (this.isEmpty || (this.isInitiated && !bo([0, this.position], e))) return -1;
    const t = this.repeatable?.repeatMode;
    if (e < this.length)
      for (let r = e + 1; r < this.length; r++) {
        const s = this.item(r);
        if (ut(s, this.playbackMode)) return r;
      }
    if (t === Se.all)
      for (let r = 0; r <= e; r++) {
        const s = this.item(r);
        if (ut(s, this.playbackMode)) return r;
      }
    return -1;
  }
  findPlayableIndexBackward(e = this.position) {
    if (this.isEmpty || !bo([0, this.position], e)) return -1;
    const t = this.repeatable?.repeatMode;
    if (e > 0)
      for (let r = e - 1; r >= 0; r--) {
        const s = this.item(r);
        if (ut(s, this.playbackMode)) return r;
      }
    if (t === Se.all)
      for (let r = this.length - 1; r >= e; r--) {
        const s = this.item(r);
        if (ut(s, this.playbackMode)) return r;
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
function zs(i, e) {
  return i.isPlayable || (e !== xe.FULL_PLAYBACK_ONLY && i.previewURL !== void 0);
}
function Vg(i) {
  return i.isRestricted;
}
function Bg(i) {
  return i.isUnavailable;
}
function ut(i, e) {
  return zs(i, e) && !Vg(i) && !Bg(i);
}
function bo(i, e) {
  return i[0] <= e && e <= i[1];
}
const $g = { ...lh, ...P },
  Hg = ["EditorialVideoClip", "uploaded-videos", "uploadedVideo", "musicVideo"],
  _o = async () => {},
  jg = (i) =>
    i?.isUTS || Hg.includes(i?.type)
      ? { FORWARD: 10, BACK: 10 }
      : i?.isAOD
        ? { FORWARD: 30, BACK: 30 }
        : { FORWARD: 30, BACK: 15 };
class _l {
  constructor(e) {
    this.mediaItemPlayback = e;
  }
  canSeek = !1;
  getSeekSeconds(e) {
    return { BACK: 0, FORWARD: 0 };
  }
  seekBackward(e, t = _o) {
    _.warn("seekBackward is not supported in this playback method");
  }
  seekForward(e, t = _o) {
    _.warn("seekForward is not supported in this playback method");
  }
  async seekToTime(e, t) {
    _.warn("seekToTime is not supported in this playback method");
  }
}
class Tl {
  constructor(e, t) {
    ((this._dispatcher = e), (this.mediaItemPlayback = t));
  }
  canSeek = !0;
  getSeekSeconds(e) {
    return jg(e);
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
    await this.seekToTime(s, qe.Interval);
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
    await this.seekToTime(s, qe.Interval);
  }
  async seekToTime(e, t = qe.Manual) {
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
    await this.seekToTime(0, qe.Interval);
  }
  async _seekToEnd() {
    await this.seekToTime(this.mediaItemPlayback.currentPlaybackDuration, qe.Interval);
  }
}
const qg = (i) => {
  const e = [...i],
    { length: t } = e;
  for (let r = 0; r < t; ++r) {
    const s = r + Math.floor(Math.random() * (t - r)),
      n = e[s];
    ((e[s] = e[r]), (e[r] = n));
  }
  return e;
};
var Wg = Object.defineProperty,
  Gg = Object.getOwnPropertyDescriptor,
  Yg = (i, e, t, r) => {
    for (var s = Gg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Wg(e, t, s), s);
  },
  Fn = ((i) => ((i[(i.off = 0)] = "off"), (i[(i.songs = 1)] = "songs"), i))(Fn || {});
const ls = "Shuffling is not supported in this playback method.";
class zg {
  canSetShuffleMode = !1;
  queue;
  set shuffle(e) {
    _.warn(ls);
  }
  get shuffleMode() {
    return 0;
  }
  set shuffleMode(e) {
    _.warn(ls);
  }
  checkAndReshuffle(e) {
    _.warn(ls);
  }
}
class El {
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
      !(e in Fn) ||
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
    do n = qg(r);
    while (r.length > 1 && on(n, r));
    const a = [...s, ...n];
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, a.length, Ot(a), e));
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
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, o.length, Ot(o), e), (this._queue.position = n));
  }
}
Yg([T()], El.prototype, "queueModifiedHandler");
var Qg = Object.defineProperty,
  Xg = Object.getOwnPropertyDescriptor,
  Jg = (i, e, t, r) => {
    for (var s = Xg(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Qg(e, t, s), s);
  },
  nt = ((i) => ((i.continuous = "continuous"), (i.serial = "serial"), i))(nt || {});
const { queueItemsDidChange: Zg } = E;
class Kn {
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
      (this._skipIntro = new zm({ controller: this, services: e.services })),
      (this._upNext = new hl({ controller: this, services: e.services })),
      (this._rollMonitor = new Ym({ controller: this, services: e.services })),
      (this._shuffler = new zg()),
      (this._seekable = new _l(this._mediaItemPlayback)),
      (this._repeatable = new ng()),
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
    return lg(this.storekit);
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
        je.authorizationStatusWillChange,
        async ({ authorizationStatus: t, newAuthorizationStatus: r }) => {
          t > se.DENIED && r < se.RESTRICTED
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
    (e.isUTS && (await Qm(e, { manifestManager: this.services.manifest, playOptions: t })),
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
      (this.continuous || this.repeatMode === Se.one) &&
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
        new bl({
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
      ih(t?.startTime))
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
    if (!s && r.state === F.unsupported) {
      await this.skipToNextItem();
      return;
    }
    return s;
  }
  async _next(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === Se.one && this.queue.currentItem !== void 0) {
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
    if (this.repeatMode === Se.one && this.queue.currentItem !== void 0) {
      (await this.stop({ endReasonType: P.TRACK_SKIPPED_BACKWARDS, userInitiated: t }), await this.play());
      return;
    }
    const r = this.queue.previousPlayableItemIndex;
    if (t && this.repeatMode === Se.none && this.nowPlayingItem !== void 0 && r === -1) {
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
      this._dispatcher.publish(Zg, e.items),
      e
    );
  }
}
Jg([T()], Kn.prototype, "updateAutoplay");
function ev(i, e, t) {
  return (
    (e = e || i.height || 100),
    (t = t || i.width || 100),
    window.devicePixelRatio >= 1.5 && ((t *= 2), (e *= 2)),
    i.url.replace("{h}", `${e}`).replace("{w}", `${t}`).replace("{f}", "jpeg")
  );
}
var tv = Object.defineProperty,
  iv = Object.getOwnPropertyDescriptor,
  kl = (i, e, t, r) => {
    for (var s = iv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && tv(e, t, s), s);
  };
const To = Object.freeze({ endReasonType: P.PLAYBACK_SUSPENDED, userInitiated: !1 });
class Vn {
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
              src: ev(e.artwork, t, t),
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
        ? this.session.setActionHandler("pause", () => this.controller?.pause(To))
        : this.session.setActionHandler("pause", () => this.controller?.stop(To)),
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
kl([T()], Vn.prototype, "onCapabilitiesChanged");
kl([T()], Vn.prototype, "onNowPlayingItemDidChange");
var G = ((i) => (
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
))(G || {});
class rv {
  constructor(e) {
    ((this._dispatcher = e), (this._mediaSession = new Vn(this, e)));
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
var sv = Object.defineProperty,
  nv = Object.getOwnPropertyDescriptor,
  Sl = (i, e, t, r) => {
    for (var s = nv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && sv(e, t, s), s);
  };
class Bn extends Kn {
  type = nt.continuous;
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
      case G.VOLUME:
        return !0;
      case G.PAUSE:
      case G.SKIP_NEXT:
      case G.SKIP_PREVIOUS:
      case G.SEEK:
        return !this.isLive;
      case G.SKIP_TO_ITEM:
      case G.AUTOPLAY:
      case G.EDIT_QUEUE:
      case G.SHUFFLE:
      case G.REPEAT:
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
    if (!Pi(r)) throw new p(p.Reason.MEDIA_DESCRIPTOR, "Item is not a Radio Station");
    return (
      (this.station = r),
      (this.isLive = !!r?.isLiveRadioStation || !!r?.attributes?.isLive),
      (this.isTracksStation = Sc(r)),
      (this._context = { featureName: pt.STATION, ...t?.context }),
      (this._seekable = this.isLive
        ? new _l(this._mediaItemPlayback)
        : new Tl(this._dispatcher, this._mediaItemPlayback)),
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
    return this.hasCapabilities(G.SEEK) ? super.getNewSeeker() : new Np();
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
Sl([T()], Bn.prototype, "hasCapabilities");
Sl([T()], Bn.prototype, "queueNextTracks");
var av = Object.defineProperty,
  ov = Object.getOwnPropertyDescriptor,
  Il = (i, e, t, r) => {
    for (var s = ov(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && av(e, t, s), s);
  };
class $n {
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
Il([T()], $n.prototype, "handleTimeChange");
Il([T()], $n.prototype, "updateThreshold");
class cv extends Ai {
  isSeamlessAudioTransitionsEnabled = !1;
  constructor(e) {
    (super(e),
      (this.watchers = [new $n(this.dispatcher, this.handlePlaybackThreshold, 0.3)]),
      (this.isSeamlessAudioTransitionsEnabled = j.features["seamless-audio-transitions"]));
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
var lv = Object.defineProperty,
  uv = Object.getOwnPropertyDescriptor,
  Ri = (i, e, t, r) => {
    for (var s = uv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && lv(e, t, s), s);
  };
class Gt extends Kn {
  type = nt.serial;
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
      (this._queue = new bl(e)),
      (this._repeatable = new ag(this._dispatcher)),
      (this._seekable = new Tl(this._dispatcher, this._mediaItemPlayback)),
      (this._shuffler = new El(this, { dispatcher: this._dispatcher })),
      (this._isSeamlessAudioTransitionsEnabled = !!e?.bag?.features["seamless-audio-transitions"]),
      (this.autoplayQueueSizeThreshold = e?.bag?.autoplay?.maxQueueSizeForAutoplay ?? 50),
      (this.autoplayUpcomingTracksLimit = e?.bag?.autoplay?.maxUpcomingTracksToMaintain ?? 10),
      (this.maxTracksForAutoplayStation = e?.bag?.autoplay?.maxQueueSizeInRequest ?? 10));
    const t = { controller: this, services: e.services };
    this._preloader = new cv(t);
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
      this._dispatcher.subscribe(we.seamlessAudioTransition, this.onSeamlessAudioTransition));
  }
  async deactivate() {
    (await super.deactivate(),
      this._preloader.deactivate(),
      this._dispatcher.unsubscribe(E.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.unsubscribe(E.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(E.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(E.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(we.seamlessAudioTransition, this.onSeamlessAudioTransition),
      await this.stopAutoplay());
  }
  hasCapabilities(e) {
    switch (e) {
      case G.EDIT_QUEUE:
      case G.SKIP_NEXT:
      case G.SKIP_TO_ITEM:
      case G.AUTOPLAY:
      case G.VOLUME:
      case G.SKIP_PREVIOUS:
        return !0;
      case G.REPEAT:
      case G.SHUFFLE:
        return !this.queue?.currentQueueItem?.isAutoplay;
      case G.PAUSE:
      case G.SEEK:
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
    (this.repeatMode === Se.none
      ? (_.debug("Queueing Autoplay tracks after RepeatMode change"), await this.queueAutoplayTracks())
      : (_.debug("Removing Autoplay tracks after RepeatMode change"),
        this.queue.removeQueueItems((e, t) => t > this.queue.position && e.isAutoplay)),
      this.repeatMode !== Se.one && this.prepareToPlayNextItem());
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
      return (_.debug(`Preparing next MediaItem: ${or(e)}`, e), await this._mediaItemPlayback.preloadMediaItem(e));
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
    if (this.repeatMode !== Se.none) {
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
      this.queue.appendQueueItems(r.map((s) => new vl(s, { isAutoplay: !0 }))),
      (this.loadingAutoplayTracks = !1));
  }
  async _changeToMediaAtIndex(e = 0, t = { userInitiated: !1 }) {
    return await super._changeToMediaAtIndex(e, t);
  }
  get shouldTransitionSeamlessly() {
    return this._isSeamlessAudioTransitionsEnabled && this.hasAuthorization && !this.previewOnly;
  }
}
Ri([T()], Gt.prototype, "hasCapabilities");
Ri([T()], Gt.prototype, "onSeamlessAudioTransition");
Ri([T()], Gt.prototype, "onRepeatModeChange");
Ri([T()], Gt.prototype, "onQueueChange");
Ri([T()], Gt.prototype, "prepareToPlayNextItem");
const Eo = {};
function dv(i, e, t, r = {}) {
  const { once: s } = r,
    n = Array.isArray(e) ? e : [e],
    a = [];
  for (const o of n) {
    const c = hv(o, t);
    (s === !0 ? i.subscribeOnce(o, c) : i.subscribe(o, c), a.push(() => Pl(i, o, t)));
  }
  return () => {
    for (const o of a) o();
  };
}
function Pl(i, e, t) {
  const r = wl(e);
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
function wl(i) {
  let e = Eo[i];
  return (e || ((e = []), (Eo[i] = e)), e);
}
function hv(i, e) {
  const t = wl(i),
    r = (s, n) => {
      e(n, s);
    };
  return (t.push([e, r]), r);
}
class pv {
  _bitrate;
  _dispatcher;
  _downlinkSamples = [];
  constructor(e, t = Ce.STANDARD) {
    ((this._bitrate = t ?? Ce.STANDARD),
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
      this._calculateAverageDownlink() > Ce.STANDARD
        ? (u.debug("setting bitrate to", Ce.HIGH), (this.bitrate = Ce.HIGH))
        : (u.debug("setting bitrate to", Ce.STANDARD), (this.bitrate = Ce.STANDARD)));
  }
}
const ye = _.createChild("player"),
  fv = Te.register("mk-hlsjs-song-playback"),
  yv = Te.register("mk-force-native-safari-video-player");
class mv {
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
    if ((ye.trace("PlayerManager.createPlayer()", e, t), e.contentType === "audio"))
      return this.createAudioPlayer(e, t);
    if (e.contentType === "video") return this.createVideoPlayer(e, t);
    throw new y("mk-171", y.Reason.CONTENT_UNSUPPORTED, {
      description: `Unable to create player for asset: ${e.id}`,
      data: e,
    });
  }
  async createAudioPlayer(e, t) {
    const { playerOptions: r } = t;
    if (!e.encrypted && !e.hls) {
      const s = this.cachedPlayers.get(ci);
      if (s !== void 0 && !s.isDestroyed) return (ye.debug("Using cached HTMLAudioPlayer instance"), s);
      ye.info("Creating HTMLAudioPlayer for unencrypted asset");
      const n = new ci(r);
      return (await n.initialize(), ye.debug("Caching HTMLAudioPlayer instance"), this.cachedPlayers.set(ci, n), n);
    }
    if (!e.encrypted) {
      ye.info("Creating HlsJsAudioPlayer for unencrypted HLS asset");
      const s = new ze(r);
      return (await s.initialize(), s);
    }
    if (await gv(e)) {
      ye.info("Creating HlsJsAudioPlayer required for asset");
      const s = new ze(r);
      return (await s.initialize(), s);
    } else {
      const s = this.cachedPlayers.get(Ye);
      if (s !== void 0 && !s.isDestroyed) return (ye.debug("Using cached AudioPlayer instance"), s);
      ye.info("Creating AudioPlayer as a fall through");
      const n = new Ye(r);
      return (await n.initialize(), ye.debug("Caching AudioPlayer instance"), this.cachedPlayers.set(Ye, n), n);
    }
  }
  async createVideoPlayer(e, t) {
    ye.debug("Creating VideoPlayer");
    const { playerOptions: r } = t;
    if (yv.enabled) {
      ye.info("Creating NativeSafariVideoPlayer with mkForceSafariNativeVideoPlayer enabled");
      const a = new Nr(r);
      return (await a.initialize(), a);
    }
    const s = this.cachedPlayers.get(me);
    if (s !== void 0 && !s.isDestroyed) return (ye.debug("Using cached HlsJsVideoPlayer instance"), s);
    ye.info("Creating HLSjsVideoPlayer as the default");
    const n = new me(r);
    return (await n.initialize(), this.cachedPlayers.set(me, n), n);
  }
  destroy() {
    this._isDestroyed = !0;
    for (const e of this.cachedPlayers.values()) e.destroy();
    this.cachedPlayers.clear();
  }
}
async function gv(i) {
  return !!(
    i.contentType === "video" ||
    i.item === void 0 ||
    Pi(i.item ?? {}) ||
    Tn(i.item ?? {}) ||
    kc(i.item ?? {}) ||
    Zi(i.item ?? {}) ||
    fv.enabled
  );
}
const Hn = [
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
  jn = [
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
  Re = _.createChild("item-loader");
function vv(i) {
  return i != null && i.item !== void 0;
}
function bv(i) {
  return i != null && Array.isArray(i.items);
}
function _v(i) {
  return i != null && typeof i.url == "string";
}
function Tv(i) {
  return i != null && Array.isArray(i.urls);
}
function Ev(i) {
  return i !== void 0 && typeof i.id == "string" && typeof i.type == "string" && typeof i.attributes < "u";
}
function ko(i) {
  if (
    Object.keys(i).reduce(function (t, r) {
      return r === "item" || r === "items" || r === "url" || r === "urls" || Hn.includes(r) || jn.includes(r)
        ? t + 1
        : t;
    }, 0) > 1
  )
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Using multiple media kinds is not supported");
  return vv(i) ? So([i.item]) : bv(i) ? So(i.items) : _v(i) ? [Qs(i.url)] : Tv(i) ? i.urls.map((t) => Qs(t)) : kv(i);
}
function So(i) {
  const e = [];
  for (const t of i)
    typeof t == "string"
      ? e.push(Qs(t))
      : t instanceof mi
        ? e.push({ id: t.id, kind: yi(t.type), item: t })
        : Ev(t)
          ? e.push({ id: t.id, kind: yi(t.type), data: t })
          : e.push(t);
  return e;
}
function Qs(i) {
  if (!th(i)) throw new p(p.Reason.INVALID_ARGUMENTS, `Invalid media URL: ${i}`);
  const { contentId: e, kind: t } = cc(i);
  if (e === void 0) throw new p(p.Reason.CONTENT_UNAVAILABLE, `Unable to resolve URL: ${i}`);
  const r = Al(t);
  if (r === void 0 || (!Hn.includes(r) && !jn.includes(r)))
    throw new p(p.Reason.CONTENT_UNSUPPORTED, `Unsupported Media Kind: ${r}`);
  return { id: e, kind: yi(r) };
}
function kv(i) {
  let e;
  const t = [];
  for (const a of Object.keys(i)) {
    const o = Al(a);
    Sv(a) && (e === void 0 ? (e = [o, i[a]]) : t.push(a));
  }
  const [r, s] = e ?? [];
  if (r === void 0 || s === void 0) return [];
  t.length > 0 && Re.warn(`Found redundant named options besides ${r}: ${t.join(", ")}`);
  const n = yi(r);
  return Array.isArray(s) ? s.map((a) => ({ id: a, kind: n })) : [{ id: s, kind: n }];
}
function Al(i) {
  const e = yi(i);
  return e === "episode" ? "podcastEpisode" : e === "radio-station" ? "station" : i;
}
function Sv(i) {
  return Hn.includes(i) || jn.includes(i);
}
function Iv(i, e) {
  const t = {};
  for (const r of i) {
    const s = e(r);
    (t[s] === void 0 && (t[s] = []), t[s].push(r));
  }
  return t;
}
class Pv {
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
    return ko(e);
  }
  buildRequest(e, t) {
    return this.services.mediaAPI.createRequest(e, t);
  }
  async loadItems(e) {
    (Re.trace("MusicItemLoader.loadItems()", e), Re.debug("Loading resources for options", e));
    const t = await this.loadResources({ fetchContainerPages: this.fetchContainerPages, ...e }),
      r = this.createItems(t, { container: e?.container, context: e?.context });
    return (Re.debug(`Transformed ${t.length} resources into ${r.length} MediaItems`), r);
  }
  async loadStation(e) {
    Re.debug("Loading Radio Station", e);
    const r = this.convertOptionsToItemDescriptors(e).find((n) => n.kind === "station");
    if (r === void 0) {
      Re.debug("No station descriptor found in options, returning undefined");
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
    return ni(n.map((c) => Gs(c, a, o)));
  }
  async createAutoplayStation(e, t) {
    const r = [];
    for (let l = 0; l < e.length; l++) {
      const h = e[l],
        g = lc(h instanceof mi ? h.type : h.kind);
      /(-?songs|artists?)$/.test(g) &&
        r.push({
          id: h.id,
          type: fi(h.id) ? "library-songs" : "songs",
          meta: t?.container !== void 0 ? { container: t.container } : void 0,
        });
    }
    if (r.length === 0)
      throw (
        Re.error("Unable to create AutoplayStation: No items to seed"),
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
      Re.error("Unable to create AutoplayStation: Server Error");
      const l = new p(p.Reason.CONTENT_UNSUPPORTED, "Unable to create AutoplayStation: Server Error");
      throw ((l.data = { errors: n }), l);
    }
    if (a?.station === void 0)
      throw (
        Re.error("Unable to create AutoplayStation: No station returned from server"),
        new p(p.Reason.CONTENT_UNAVAILABLE, "Unable to create AutoplayStation: No station returned from server")
      );
    const o = this.createItems(a.station, { container: t?.container, context: t?.context })[0];
    let c = [];
    return (
      Array.isArray(a.tracks) && (c = this.createItems(a.tracks, { container: o, context: t?.context })),
      Re.info(`Created AutoPlay station ${o.id} with ${c.length} tracks`),
      { station: o, tracks: c }
    );
  }
  async loadResources(e) {
    const t = ko(e),
      r = wv(e.parameters),
      s = new Map(t.map((m, k) => [m.id, { position: k, descriptor: m }])),
      n = Iv(t, (m) => m.kind),
      a = Object.entries(n),
      o = [],
      c = [];
    for (const [m, k] of a) {
      const W = [],
        oe = [],
        J = [];
      for (const ue of k) ue.item !== void 0 || ue.data !== void 0 ? W.push(ue) : (fi(ue.id) ? J : oe).push(ue);
      const Ae = [];
      (/^(?:playlists?|albums?)$/i.test(m) && Ae.push("tracks"), /^podcasts?$/i.test(m) && Ae.push("episodes"));
      const Xt = /^(?:playlists?|library-playlists?)$/i.test(m),
        Jt = e.restricted ? "explicit" : void 0;
      W.length > 0 && o.push(...W.map((ue) => ue.item ?? ue.data));
      const lt = Mt(st(r), { include: Ae, extend: Xt ? ["hasCollaboration"] : [], restrict: Jt }),
        Ui = 16;
      if (oe.length > 0) {
        const ue = Io(oe, Ui);
        for (const Zt of ue)
          c.push(
            this.buildRequest(`/v1/catalog/${this.services.mediaAPI.storefrontId}/${ai(m)}s`, {
              params: { ...lt, ids: Zt },
            }),
          );
      }
      if (J.length > 0)
        if (m === "song") {
          const ue = Io(J, Ui);
          for (const Zt of ue) c.push(this.buildRequest(`/v1/me/library/${ai(m)}s/`, { params: { ...lt, ids: Zt } }));
        } else for (const ue of J) c.push(this.buildRequest(`/v1/me/library/${ai(m)}s/${ue.id}`, { params: lt }));
    }
    const l = await Promise.all(
        c.map((m) =>
          this.fetchResources(m, {
            fetchContainerPages: e.fetchContainerPages,
            containerItemLimit: e.containerItemLimit,
            restricted: e.restricted,
          }),
        ),
      ),
      h = Array(s.size);
    for (const m of [...o, ...ni(l)]) {
      const k = s.get(m.id);
      k?.position !== void 0 && (h[k.position] = m);
    }
    const g = [];
    for (const { position: m, descriptor: k } of s.values()) h[m] === void 0 && g.push(k);
    if (g.length > 0) {
      const m = new p(
        p.Reason.NOT_FOUND,
        `One or more items could not be resolved: ${g.map(({ id: k }) => k).join(", ")}`,
      );
      throw ((m.data = g), m);
    }
    return h;
  }
  async fetchResources(e, t) {
    const r = t?.restricted ? "explicit" : void 0,
      s = t?.fetchContainerPages ?? !1,
      n = Math.max(0, t?.containerItemLimit ?? 1 / 0),
      o = await (await e.send()).json();
    if (o?.data === void 0) return (Re.error("Unable to fetch resources: empty data from server"), []);
    const c = Array.isArray(o.data) ? o.data : [o.data];
    return Promise.all(
      c.map(async (l) => {
        const h = l.relationships?.tracks ?? l.relationships?.episodes;
        if (h === void 0) return l;
        const g = [...h.data];
        let m;
        for (s && g.length < n && (m = h.next); m !== void 0;) {
          const k = Math.min(100, n - g.length),
            J = await (await this.buildRequest(m, { params: { restrict: r, limit: k } }).send()).json();
          (g.push(...J.data), (m = g.length < n ? J.next : void 0));
        }
        return (delete h?.next, delete h?.href, (h.data = g.slice(0, n)), l);
      }),
    );
  }
  createItems(e, t) {
    return ((e = Array.isArray(e) ? e : [e]), ni(e.map((r) => Gs(r, t?.container, t?.context))));
  }
}
function wv(i) {
  const e = { ...i };
  if (i === void 0) return e;
  for (const t of ["extend", "include", "relate", "fields"])
    if (e[t] !== void 0) {
      const r = i[t];
      typeof r == "string" && (e[t] = r.split(/(?:,{1}?\s*|\s+)/));
    }
  return e;
}
function Io(i, e) {
  return i.reduce(function (r, s, n) {
    const a = Math.floor(n / e);
    return (r[a] === void 0 && (r[a] = []), r[a].push(s.id), r);
  }, []);
}
var Av = Object.defineProperty,
  Rv = Object.getOwnPropertyDescriptor,
  qn = (i, e, t, r) => {
    for (var s = Rv(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Av(e, t, s), s);
  };
class Ur {
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
      throw new y("mk-142", y.Reason.CONFIGURATION_ERROR, { description: "PlayActivityService is not configured yet" });
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
qn([T()], Ur.prototype, "handleEvent");
qn([T()], Ur.prototype, "recordApplicationIntent");
qn([T()], Ur.prototype, "recordUserIntent");
var Cv = Object.defineProperty,
  Ov = Object.getOwnPropertyDescriptor,
  Wn = (i, e, t, r) => {
    for (var s = Ov(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && Cv(e, t, s), s);
  };
const de = M.createChild("playback"),
  Po = (i, e) => {
    const { os: t } = e;
    if (i.isLinearStream && (t.name === "ios" || t.name === "ipados")) {
      de.warn("Cannot play linear stream on iOS or iPad");
      const r = new p(p.Reason.CONTENT_UNSUPPORTED, "IOS LINEAR");
      throw ((r.data = { item: i }), r);
    }
  },
  wo = async (i, e) => {
    if (i.container?.attributes?.requiresSubscription && !(await e())) {
      const r = new p(p.Reason.SUBSCRIPTION_ERROR);
      throw ((r.data = i), r);
    }
  },
  Ao = (i, e) => {
    const { isMSESupported: t, isMMSSupported: r } = e;
    if (i.hasOffersHlsUrl && !t && !r) {
      de.warn("HLSjs is not supported");
      const s = new p(p.Reason.CONTENT_UNSUPPORTED, "HLSjs Unsupported on Device");
      throw ((s.data = { item: i }), s);
    }
  };
let Ro = !1;
class xr {
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
      gf(this.playerOptions.tokens),
      (this._currentPlayer = new Ky(this.playerOptions)),
      this.dispatcher.subscribe(x.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.subscribe(js.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher.subscribe(we.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
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
      this.dispatcher.unsubscribe(x.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.unsubscribe(js.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher?.unsubscribe(we.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
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
    return (de.trace("MediaItemPlayback.prepareToPlay()", e), this.preloadMediaItem(e));
  }
  async preloadMediaItem(e) {
    if ((de.trace("MediaItemPlayback.preloadItem()", e), dp(e)))
      return (de.info(`Free podcast episode, not preparing item: ${e}`, e), e);
    const t = this.playOptions.get(e.id);
    de.info(`Preparing MediaItem: ${e}`, e);
    const r = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Ce.HIGH ? 256 : 64,
      startOver: t?.startOver,
      bingeWatching: t?.bingeWatching,
    });
    return (
      Co(e, r, this.previewOnly),
      de.info(`Calling ${this._currentPlayer.constructor.name}.preloadItem for ${e}`),
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
  async seekToTime(e, t = qe.Manual) {
    await this._currentPlayer.seekToTime(e, t);
  }
  async setPresentationMode(e) {
    return this._currentPlayer.setPresentationMode(e);
  }
  async startMediaItemPlayback(e, t) {
    return (de.trace("MediaItemPlayback.startMediaItemPlayback()", e), this.playMediaItem(e, t));
  }
  async playMediaItem(e, t = !1, r) {
    (de.trace("MediaItemPlayback.playMediaItem()", e),
      Po(e, this.services.runtime),
      Ao(e, this.services.runtime),
      await wo(e, this.hasMusicSubscription),
      this.playOptions.has(e.id) && ((r = r ?? this.playOptions.get(e.id)), this.playOptions.delete(e.id)));
    const s = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Ce.HIGH ? 256 : 64,
      startOver: r?.startOver,
      bingeWatching: r?.bingeWatching,
    });
    return (await this.playAsset(s, t, r), e);
  }
  async playAsset(e, t = !1, r) {
    de.trace("MediaItemPlayback.playAsset", e);
    const s = e.item;
    (s?.resetState(),
      Po(s, this.services.runtime),
      Ao(s, this.services.runtime),
      await wo(s, this.hasMusicSubscription),
      (this._currentTimedMetadata = void 0),
      this.playOptions.has(s.id) && ((r = r ?? this.playOptions.get(s.id)), this.playOptions.delete(s.id)));
    const n = await this.playerManager.createPlayer(e, { playerOptions: this.playerOptions, playOptions: r });
    if ((await this.setCurrentPlayer(n), Co(s, e, this.previewOnly), e.encrypted))
      if (e.encrypted)
        (de.debug(`Initializing encrypted playback for ${s}`, e),
          (s.playbackType = le.encryptedFull),
          (n.nowPlayingItem = s),
          await n.playItemFromEncryptedSource(s, t, r));
      else
        throw new y("mk-170", y.Reason.CONTENT_UNSUPPORTED, {
          description: "Unable to play asset for MediaItem",
          data: { asset: e, item: s },
        });
    else {
      de.debug(`Initializing unencrypted playback for ${s}`, e);
      const a = n.isPaused && !t;
      ((s.playbackType = this.previewOnly || e.preview ? le.preview : le.unencryptedFull),
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
        (de.debug("MediaItemPlayback: setting currentPlayer", e),
        await this._currentPlayer.stop(),
        (this._currentPlayer = e),
        de.trace("Applying default player state", e, this.playerState),
        Object.assign(e, this.playerState),
        this.dispatcher.publish(f.playerTypeDidChange, { player: e })),
      e
    );
  }
  getCurrentPlayer() {
    return this._currentPlayer;
  }
  async onKeySystemGenericError(e, t) {
    if (Ro) this.dispatcher.publish(f.mediaPlaybackError, t);
    else if (
      ((Ro = !0),
      de.warn("Retrying playback after keysystemGenericError"),
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
Wn([T()], xr.prototype, "onKeySystemGenericError");
Wn([T()], xr.prototype, "onBufferTimedMetadataDidChange");
Wn([T()], xr.prototype, "onPlaybackLicenseError");
function Co(i, e, t) {
  ((i.assetURL = e.assetURL),
    e.encrypted &&
      (i.keyURLs = {
        "hls-key-server-url": e.keyServerURL,
        "hls-key-cert-url": e.keyCertURL,
        "widevine-cert-url": e.keyCertURL,
      }),
    e.meta !== void 0 && (i.hlsMetadata = e.meta),
    t
      ? (i.playbackType = le.preview)
      : e.encrypted
        ? e.encrypted
          ? (i.playbackType = le.encryptedFull)
          : (i.playbackType = le.none)
        : (i.playbackType = le.unencryptedFull),
    (i.state = F.ready));
}
const Yi = _.createChild("rtc");
class Rl {
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
    if (!j.urls.rtc) throw new Error("bag.urls.rtc is not configured");
    await Mr(j.urls.rtc);
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
      Yi.debug("RTC: creating reporting agent with config", h),
      (this.reportingAgent = new window.rtc.RTCReportingAgent(h)),
      Yi.debug("RTC: created reporting agent", this.reportingAgent),
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
      Yi.debug("RTC: called destroy on reporting agent", this.reportingAgent),
      (this.reportingAgent = void 0));
  }
  generateBrowserVersion() {
    return this.options.browserMajorVersion
      ? `${this.options.browserMajorVersion}.${this.options.browserMinorVersion || 0}`
      : "unknown";
  }
  generateStoreBag(e) {
    const { storeBagURL: t, clientName: r, applicationName: s, browserName: n } = this.options,
      a = `${j.app.name}-${j.app.build}`,
      o = this.instance?.version,
      l = { iTunesAppVersion: `${a}/${o}` },
      h = new window.rtc.RTCStorebag.RTCReportingStoreBag(t, r, e, s, n, l);
    return (Yi.debug("RTC: created store bag", h), h);
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
function Dv(i, e = 1) {
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
function Nv(i) {
  return Dv(i, 1 / 0);
}
function Mv(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function fr(i) {
  return typeof i == "string";
}
function xt(i, e) {
  return fr(i) ? (e?.trim === !0 ? i.trim() : i).length === 0 : !1;
}
function us(i) {
  return typeof i == "function";
}
function Lv(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function Uv(i, e) {
  if (((e = fr(e) && !xt(e, { trim: !0 }) ? e : ""), e.length > 1))
    throw new Error("QueryString prefix can only be a single character");
  return i.replace(new RegExp(`^[?&${e}]+`, "i"), "");
}
function xv(i, e) {
  if (!i) return "";
  let t = e?.prefix === !0 ? "?" : "";
  if ((fr(e?.prefix) && (t = e.prefix), fr(i))) return t + Uv(i, t);
  const r = us(e?.arrayFormat) ? e.arrayFormat : (Mo[e?.arrayFormat ?? Oo] ?? Mo[Oo]),
    s = us(e?.objectFormat) ? e.objectFormat : (No[e?.objectFormat ?? Do] ?? No[Do]);
  function n(l, h) {
    return Vv(l, e) ? "" : Lv(l) ? s(l, h) : Array.isArray(l) ? r(l, h) : At(l, h);
  }
  const a = e?.sort ?? Kv;
  let o = Fv;
  us(e?.encode) && (o = e.encode);
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
  return xt(c) ? "" : t + c;
}
const Oo = "bracket",
  Do = "bracket",
  Fv = (i) => encodeURIComponent(String(i)),
  Kv = (...i) => 0,
  No = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (r) {
          return t.format(e[r], { ...t, path: t.path.concat(r) });
        })
        .filter((r) => !xt(r))
        .join("&");
    },
    dot: function (e, t) {
      throw new Error("Not Implemented");
    },
  },
  Mo = {
    comma: function (e, t) {
      return At(e.join(","), t);
    },
    repeat: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? At("", t)
        : e
            .map((r) => At(String(r), t))
            .filter((r) => r.length > 0)
            .join("&");
    },
    bracket: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? At("", t)
        : e
            .map(function (r) {
              return t.format(r, { ...t, path: [...t.path, ""] });
            })
            .filter((r) => !xt(r) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
    index: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? At("", t)
        : e
            .map(function (r, s) {
              return t.format(r, { ...t, path: [...t.path, String(s)] });
            })
            .filter((r) => !xt(r) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
  };
function At(i, e) {
  const t = e.path.map((r, s) => (s === 0 ? e.encode(r) : `[${e.encode(r)}]`)).join("");
  return i === null && e.formatting.includeNullValue !== !0 ? t : `${t}=${e.encode(i)}`;
}
function Vv(i, e) {
  return !!(
    (i === void 0 && e?.skipUndefined !== !1) ||
    (i === null && e?.skipNull !== !1) ||
    (xt(i) && e?.skipEmptyString !== !1) ||
    (Array.isArray(i) && i.length === 0 && e?.skipEmptyArray !== !1)
  );
}
function Bv(i) {
  const e = { method: "GET", host: i.hostname, path: i.pathname };
  if (i.searchParams.size > 0) {
    const t = {};
    for (const [r, s] of i.searchParams.entries()) t[r] = s;
    e.params = t;
  }
  return e;
}
function Cl(i, e) {
  return xv(i, { prefix: e?.prefix, objectFormat: "bracket", arrayFormat: "comma" });
}
function Ol(i, e, t) {
  let r = e ?? "";
  Mv(r) && ((t = e), (r = ""));
  const s = $v(i, r);
  let n = "?";
  s.endsWith("&") || s.endsWith("?") ? (n = "") : s.includes("?") && (n = "&");
  const a = t === void 0 ? "" : Cl(t, { prefix: n });
  return s + a;
}
function $v(...i) {
  const e = Nv(i).filter((r) => typeof r == "string" && r.trim().length !== 0);
  if (e.length === 0) return "/";
  let t = e[0];
  for (let r = 1; r < e.length; r++) t = t.replace(/[/]+$/, "") + "/" + e[r].replace(/^[/]+/, "");
  return (
    /^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")),
    (t = t.replace(/(:)?[/]+/g, (r, s) => (s ? r : "/"))),
    t
  );
}
function Dl(i) {
  return typeof i == "string";
}
function Hv(i, e) {
  return Dl(i) ? i.length === 0 : !1;
}
const jv = (i) => !Hv(i);
function qv(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class Gn {
  static create(e) {
    return new Gn(e);
  }
  withMethod(e) {
    return ((this._config.method = e), this);
  }
  withScheme(e) {
    return ((this._config.scheme = e), this);
  }
  withHost(e) {
    const t = /^(https?)?(:?:\/\/)?([^/]+)/i.exec(e);
    return (t && (jv(t[1]) && this.withScheme(t[1]), (this._config.host = t[2])), this);
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
      (this._config.body = Dl(e) ? e : JSON.stringify(e)),
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
    return this.withConfig(Bv(e));
  }
  async config() {
    return this._config;
  }
  async build() {
    const { MediaAPIRequest: e } = await pa(
      async () => {
        const { MediaAPIRequest: t } = await Promise.resolve().then(() => Uo);
        return { MediaAPIRequest: t };
      },
      void 0,
    );
    return new e(await this.config());
  }
  async send(e) {
    const { sendRequest: t } = await pa(
      async () => {
        const { sendRequest: r } = await Promise.resolve().then(() => Uo);
        return { sendRequest: r };
      },
      void 0,
    );
    return t(await this.build(), { fetch: e?.fetch });
  }
  constructor(e) {
    (qv(this, "_config", { method: "GET", scheme: "https", host: "", path: "", headers: {}, params: {}, body: void 0 }),
      this.withConfig(e ?? {}));
  }
}
class yr extends Error {
  constructor(e, t, r) {
    super(t);
  }
}
function ii(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class Wv {
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
    (ii(this, "__brand__", "MediaAPIResponse"),
      ii(this, "config", void 0),
      ii(this, "response", void 0),
      ii(this, "textPayload", void 0),
      ii(this, "jsonPayload", void 0),
      (this.response = e),
      (this.config = Gv(t) ? t.config : t));
  }
}
function Gv(i) {
  return i != null && i.__brand__ === "MediaAPIRequest";
}
function Lo(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class Nl extends Request {
  static async builder() {
    return Gn.create();
  }
  async send(e) {
    return Yn(this, e);
  }
  constructor(e) {
    const t = new URL(Ol(`${e.scheme ?? "https"}://${e.host}`, e.path, Cl(e.params ?? {}, { prefix: "?" }))),
      r = { method: e.method, headers: new Headers(e.headers ?? {}), body: void 0 };
    (e.body !== void 0 &&
      (typeof e.body == "string"
        ? (r.body = e.body)
        : ((r.body = JSON.stringify(e.body)),
          r.headers.has("Content-Type") || r.headers.set("Content-Type", "application/json"))),
      super(t, r),
      Lo(this, "__brand__", "MediaAPIRequest"),
      Lo(this, "config", void 0),
      (this.config = e));
  }
}
async function Yn(i, e) {
  const t = (e?.fetch ?? globalThis?.fetch !== void 0) ? fetch.bind(globalThis) : void 0;
  if (t === void 0) throw new yr("CONFIGURATION_ERROR", "Unable to find valid fetch implementation");
  let r;
  try {
    r = await t(i);
  } catch (s) {
    throw new yr("NETWORK_ERROR", `Unable to complete request for ${i.url}`, s);
  }
  return new Wv(r, i);
}
const Uo = Object.freeze(
  Object.defineProperty({ __proto__: null, MediaAPIRequest: Nl, sendRequest: Yn }, Symbol.toStringTag, {
    value: "Module",
  }),
);
function ri(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
const Yv = "api.music.apple.com";
class zv {
  get fetch() {
    if (this.fetchFunction === void 0) throw new yr("CONFIGURATION_ERROR", "Could not find a fetch implementation");
    return this.fetchFunction;
  }
  resolvePath(e) {
    return new URL(Ol(`${this.scheme}://${this.host}`, e));
  }
  createRequest(e, t) {
    const r = { ...t?.headers, Authorization: `Bearer ${this.developerToken}` };
    this.mediaUserToken !== void 0 && (r["Media-User-Token"] = this.mediaUserToken);
    const s = { ...t?.params };
    if (e instanceof URL || /^http?s/i.test(e)) {
      const n = new URL(e);
      if (n.hostname !== this.host) throw new yr("VALUE_ERROR", "URL host does not match configured API host");
      e = n.pathname;
      for (const [a, o] of n.searchParams.entries()) s[a] = o;
    }
    return new Nl({
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
    return Yn(this.createRequest(t, { ...r, method: e }), { fetch: this.fetch });
  }
  constructor(e) {
    if (
      (ri(this, "scheme", void 0),
      ri(this, "host", void 0),
      ri(this, "developerToken", void 0),
      ri(this, "mediaUserToken", void 0),
      ri(this, "fetchFunction", void 0),
      e.developerToken === void 0 || e.developerToken.trim() === "")
    )
      throw new Error("Missing or empty developer token");
    ((this.developerToken = e.developerToken.trim()),
      (this.scheme = e.scheme ?? "https"),
      (this.host = e.host ?? Yv),
      (this.mediaUserToken = e.mediaUserToken),
      (this.fetchFunction = (e.fetch ?? globalThis?.fetch !== void 0) ? globalThis.fetch.bind(globalThis) : void 0));
  }
}
function xo(i, e) {
  return Qv(i)
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
function Qv(i) {
  try {
    return Xs(i);
  } catch (e) {
    throw e.message === "UNCLOSED_PARAMETER" ? new Error(`Unclosed parameter in path: "${i}"`) : e;
  }
}
function Xs(i, e = []) {
  if (i.startsWith("{{")) {
    const t = i.indexOf("}}");
    if (t === -1) throw new Error("UNCLOSED_PARAMETER");
    const r = { type: 1, value: i.slice(2, t) };
    return t + 2 < i.length ? Xs(i.slice(t + 2), [...e, r]) : [...e, r];
  } else {
    const t = i.indexOf("{{");
    return t === -1 ? [...e, { type: 0, value: i }] : Xs(i.slice(t), [...e, { type: 0, value: i.slice(0, t) }]);
  }
}
class Xv extends zv {
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
    if (H(e.host)) throw new y("mk-114", y.Reason.CONFIGURATION_ERROR, "Invalid API Host for MediaAPIClient");
    if (H(e.developerToken))
      throw new y("mk-115", y.Reason.CONFIGURATION_ERROR, "Invalid developerToken for MediaAPIClient");
    (super({ host: e.host, developerToken: e.developerToken, mediaUserToken: e.mediaUserToken }),
      (this.services = e.services),
      e.storefrontId !== void 0 && (this.storefrontId = e.storefrontId));
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const r of t) {
      const s = this[r].bind(this);
      this[r] = async function (n, ...a) {
        return s(typeof n == "string" ? xo(n, this.parameters) : n, ...a);
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
    return (typeof e == "string" && (e = xo(e, this.parameters)), super.createRequest(e, ...t));
  }
}
const Jv = (i, e) => {
    Ml.info("converting manifest URIs to absolute paths");
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
  Zv = ["https://play.itunes.apple.com/", "https://linear.tv.apple.com/", "https://play-edge.itunes.apple.com"],
  Ml = u.createChild("manifest"),
  Fo = Te.register("mk-load-manifest-once");
class eb {
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
      Fo.configured && (this.personalizedManifests = Fo.enabled));
  }
  get fetch() {
    return this.services.request.fetch;
  }
  async fetchManifest(e) {
    return (Ml.info("fetching manifest at", e), this.personalizedManifests ? this.fetchForCache(e) : this.fetchOnly(e));
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
    Zv.some((c) => e.startsWith(c)) &&
      this.mediaUserToken !== void 0 &&
      (t.set("Authorization", `Bearer ${this.developerToken}`), t.set("media-user-token", this.mediaUserToken));
    const s = await this.fetch(e, { headers: t }),
      n = Jv(e, await s.text()),
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
      Ve(e, "mediaUserToken") && (this.mediaUserToken = e.mediaUserToken),
      e.personalizedManifests !== void 0 && (this.personalizedManifests = e.personalizedManifests),
      e.cache !== void 0 && (this.cache = e.cache));
  }
}
class tb {
  services;
  get client() {
    return this.services.mediaAPI;
  }
  constructor(e) {
    this.services = e.services;
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const r of t)
      this[r] = async function (s, ...n) {
        return Ko(await this.client[r](s, ...n));
      }.bind(this);
  }
  async request(e, t, r) {
    return Ko(
      await this.client.createRequest(e, { params: t, headers: r?.headers, method: r?.method, body: r?.body }).send(),
    );
  }
  async music(e, t, r) {
    const s = await this.request(e, t, r);
    return ((s.data = s.json), s);
  }
}
async function Ko(i) {
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
async function Vo(i, e) {
  const { mediaAPI: t } = e,
    r = await t.get("/v1/play/assets", { params: { ...i.playParams, keyFormat: "web" } });
  if (r.status === 500) throw new y("mk-153", y.Reason.SERVER_ERROR, { data: i });
  if (r.status === 403) {
    const n = await r.json(),
      a = n?.code === "40303" ? y.Reason.SUBSCRIPTION_ERROR : y.Reason.ACCESS_DENIED;
    throw new y("mk-154", a, { description: n?.title ?? n?.detail ?? "", data: i });
  }
  if (r.status !== 200) throw new y("mk-155", y.Reason.CONTENT_UNAVAILABLE, { data: i });
  return (await r.json())?.results?.assets ?? [];
}
async function ib(i, e) {
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
            ["subscriptionAdamId", Gu(r) ? r.slice(2) : i.playParams.catalogId],
            ["universalLibraryId", fi(r) ? r : void 0],
          ].filter(([, h]) => h !== void 0),
        )
      : { salableAdamId: r },
    n = e.request,
    a = n.buildRequest(e.endpoint, { method: "POST", body: JSON.stringify(s), headers: t }),
    o = await n.fetchJSON(a);
  if (o?.failureType !== void 0 && rc(o.failureType) === y.Reason.AGE_VERIFICATION_REQUIRED) throw p.serverError(o);
  if (o?.songList === void 0 || o.songList.length === 0)
    throw new y("mk-160", y.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to load assets for MediaItem",
      data: i,
    });
  const c = o.songList[0];
  let l;
  if (rb(c))
    l = {
      url: c["hls-playlist-url"],
      playlist: !0,
      encrypted: !0,
      keyServerURL: c["hls-key-server-url"],
      fairplayCertURL: c["hls-key-cert-url"],
      widevineCertURL: c["widevine-cert-url"],
    };
  else if (sb(c))
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
      g = e.encoding ?? "cbcp",
      m = c.assets.find((k) => (k.flavor ?? "").endsWith(`${g}${h}`))?.URL;
    m !== void 0 &&
      (l = {
        url: m,
        playlist: !1,
        encrypted: !0,
        bitrate: h,
        encoding: g,
        keyServerURL: c["hls-key-server-url"],
        fairplayCertURL: c["hls-key-cert-url"],
        widevineCertURL: c["widevine-cert-url"],
      });
  }
  if (l === void 0)
    throw new y("mk-161", y.Reason.CONTENT_UNAVAILABLE, { description: "Unable to fetch asset from MZPlay", data: i });
  return l;
}
function rb(i) {
  const e = i["hls-playlist-url"];
  return e !== void 0 && !H(e);
}
function sb(i) {
  const e = i.assets[0];
  return i.assets.length === 1 && e !== void 0 && e.flavor === void 0 && !H(e.URL);
}
const nb = /^(?:#EXT-X-SESSION-DATA:?)DATA-ID="([^"]+)".+VALUE="([^"]+)".*$/,
  ab = /^com\.apple\.hls\./i;
async function ob(i, e) {
  if (!i.isUTS || !i.assetURL)
    throw new y("mk-167", y.Reason.INVALID_ARGUMENTS, { description: "Item is not an UTS item", data: i });
  const t = wi(i, e.playOptions);
  let r;
  try {
    r = await e.manifestManager.fetchManifest(t);
  } catch (n) {
    throw new y("mk-168", y.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to fetch HLS Playlist",
      data: i,
      origin: n,
    });
  }
  const s = {};
  for (const n of r.content.split(`
`)) {
    const a = n.match(nb);
    a !== null && (s[a[1].replace(ab, "")] = a[2]);
  }
  return s;
}
const cb = Te.register("mk-broadcast-radio-playback"),
  lb = Te.register("mk-hlsjs-song-playback"),
  Z = _.createChild("asset");
class ub {
  services;
  isConfigured = !0;
  _mzplayAssetEndpoint;
  get mzplayAssetEndpoint() {
    if (this._mzplayAssetEndpoint === void 0)
      throw new y("mk-147", y.Reason.CONFIGURATION_ERROR, { description: "MZPlay assets URL is not configured" });
    return this._mzplayAssetEndpoint;
  }
  _staticKeyURLs;
  get staticKeyURLs() {
    if (this._staticKeyURLs === void 0)
      throw new y("mk-143", y.Reason.CONFIGURATION_ERROR, { description: "Static Key URLs not configured" });
    return this._staticKeyURLs;
  }
  get keySystem() {
    if (this.services.runtime.preferredKeySystem === void 0)
      throw new y("mk-140", y.Reason.CONTENT_UNSUPPORTED, { description: "No DRM KeySytem available" });
    return this.services.runtime.preferredKeySystem;
  }
  constructor(e) {
    ((this.services = e.services),
      (this._mzplayAssetEndpoint = e.mzplayAssetEndpoint),
      (this._staticKeyURLs = e.staticKeyURLs));
  }
  async configure(e) {
    (Z.trace("MKPlayableAssetResolver.configure(...)", e),
      e?.mzplayAssetEndpoint !== void 0 && (this._mzplayAssetEndpoint = e.mzplayAssetEndpoint),
      e?.staticKeyURLs !== void 0 && (this._staticKeyURLs = e.staticKeyURLs));
  }
  async resolveAsset(e, t) {
    if ((Z.info(`Resolving asset for ${e}`, e, t), await this.shouldPlayPreview(e, t))) {
      Z.debug(`Resolving preview asset for ${e}`, e, t);
      const r = await this.resolvePreviewAsset(e, t);
      return (Z.debug(`Resolved preview asset for ${e}`, r), r);
    }
    if (!H(e.rawAssetUrl ?? "")) {
      Z.debug(`Resolving direct asset for ${e}`, e, t);
      const r = await this.resolveDirectURLAsset(e, t);
      return (Z.debug(`Resolved direct asset for ${e}`, r), r);
    }
    if (yp(e)) {
      Z.debug(`Resolving Broadcast Radio asset for ${e}`, e, t);
      const r = await this.resolveBroadcastRadioAsset(e, t);
      return (Z.debug(`Resolved Broadcast Radio asset for ${e}`, r), r);
    }
    if (e.isUTS) {
      Z.debug(`Resolving UTS asset for ${e}`, e, t);
      const r = await this.resolveUTSAsset(e, t);
      return (Z.debug(`Resolved UTS asset for ${e}`, r), r);
    }
    if ((Zi(e) || kc(e)) && e.hasOffersHlsUrl) {
      Z.debug(`Resolving HLS Offer asset for ${e}`, e, t);
      const r = await this.resolveHLSOffersAsset(e, t);
      return (Z.debug(`Resolved HLS Offer asset for ${e}`, r), r);
    }
    if (e.isLiveRadioStation || e.isRadioEpisode || e.isLiveVideoStation) {
      Z.debug(`Resolving Live Radio asset for ${e}`, e, t);
      const r = await this.resolveRadioStationAsset(e, t);
      return (Z.debug(`Resolved Live Radio asset for ${e}`, r), r);
    }
    if (e.type === "song" && lb.enabled) {
      Z.debug(`Resolving Catalog Song asset for ${e}`, e, t);
      const r = await this.resolveCatalogSongAsset(e, t);
      return (Z.debug(`Resolved Catalog Song asset for ${e}`, r), r);
    }
    if (await this.isMediaAPIContentType(e, t)) {
      Z.debug(`Resolving MZPlay asset for ${e}`, e, t);
      const r = await this.resolveMZPlayWebAsset(e, t);
      return (Z.debug(`Resolved MZPlay asset for ${e}`, r), r);
    }
    throw new y("mk-145", y.Reason.CONTENT_UNSUPPORTED, {
      description: `Could not resolve asset for content type ${e.type}`,
      data: e,
    });
  }
  async resolvePreviewAsset(e, t) {
    if ((Z.debug(`Resolving preview asset for ${e}`, e, t), e.previewURL === void 0 || H(e.previewURL)))
      throw new y("mk-150", y.Reason.INVALID_ARGUMENTS, { description: "Missing previewURL for MediaItem", data: e });
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
    if (H(e.rawAssetUrl ?? ""))
      throw new y("mk-151", y.Reason.INVALID_ARGUMENTS, { description: "Missing rawAssetURL for MediaItem", data: e });
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
    if (!cb.enabled) throw new y("mk-152", y.Reason.CONTENT_UNSUPPORTED, { data: e });
    const r = await Vo(e, { mediaAPI: this.services.mediaAPI });
    if (r === void 0 || r.length === 0)
      throw new y("mk-156", y.Reason.CONTENT_UNAVAILABLE, {
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
      throw new y("mk-144", y.Reason.CONTENT_UNSUPPORTED, {
        description: "Unable to play HLS offers",
        data: e,
        origin: r,
      });
    }
  }
  async resolveRadioStationAsset(e, t) {
    const r = await Vo(e, { mediaAPI: this.services.mediaAPI });
    if (r === void 0 || r.length === 0)
      throw new y("mk-148", y.Reason.CONTENT_UNAVAILABLE, {
        description: "No RadioStation assets returned from the server",
        data: e,
      });
    const s = r[0];
    return (
      r.length > 1 && Z.warn("Multiple RadioStation assets returned from the server"),
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
    if (n?.assets === void 0 || n.assets.length === 0) throw new y("mk-169", y.Reason.CONTENT_UNAVAILABLE, { data: e });
    const a = n.assets[0];
    return (
      n.assets.length > 1 && Z.warn("Multiple MediaAPI assets returned from the server"),
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
      s = await ib(e, {
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
      throw new y("mk-162", y.Reason.INVALID_ARGUMENTS, { description: "MediaItem is not an UTS item", data: e });
    const r = e.attributes?.assets;
    if (r === void 0)
      throw new y("mk-163", y.Reason.INVALID_ARGUMENTS, { description: "Missing UTS asset data", data: e });
    const s = Te.register("mk-hlsjs-interstitial-playback"),
      n = { webbrowser: !0 };
    s.enabled && (n.supportsInterstitials = !0);
    const a = kr(e.assetURL, n);
    e.assetURL = a;
    const o = await ob(e, {
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
    return Pc.includes(e.type);
  }
  assetContentType(e) {
    return up(e) ? "audio" : "video";
  }
  async isPlayable(e, t) {
    return e.isUTS
      ? !0
      : (await this.isMediaAPIContentType(e, t))
        ? e.isLiveRadioStation || e.isRadioEpisode || e.hasOffersHlsUrl
          ? !0
          : ["song", "musicVideo", "musicMovie"].includes(e.type)
            ? e.playParams !== void 0
            : !H(e.rawAssetUrl ?? "") || !H(e.previewURL ?? "")
        : !1;
  }
  async shouldPlayPreview(e, t) {
    return e.isLiveRadioStation ||
      e.isRadioEpisode ||
      e.isLiveVideoStation ||
      e.rawAssetUrl ||
      (e.isPodcastEpisode && Zi(e) && e.hasOffersHlsUrl) ||
      e.isUTS ||
      e.isLibraryItem
      ? !1
      : t?.previewOnly === !0 || !(await this.isPlayable(e))
        ? !0
        : H(e.rawAssetUrl ?? "")
          ? t?.subscription !== !0
            ? !0
            : e.playParams?.hasDrm === !1
              ? !1
              : !this.services.runtime.isDRMAvailable && !H(e.previewURL ?? "")
          : !1;
  }
  async assertSubscription(e, t) {
    if (this.services.mediaAPI.mediaUserToken === void 0)
      throw new y("mk-159", y.Reason.AUTHORIZATION_ERROR, { description: "Authorization required", data: e });
    if (!(e.isPodcastEpisode && Zi(e) && e.hasOffersHlsUrl) && t?.subscription !== !0)
      throw new y("mk-149", y.Reason.SUBSCRIPTION_ERROR, { description: "Subscription required for content", data: e });
  }
}
const db = _.createChild("license");
class zn {
  isConfigured = !0;
  logger = db;
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
    return Y[this.keySystem];
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
    if (this.developerToken === void 0 || H(this.developerToken))
      throw new y("mk-175", y.Reason.CONTENT_RESTRICTED, {
        description: "No developer token configured for resolving playback licenses",
      });
  }
  assertUserToken() {
    if (this.mediaUserToken === void 0 || H(this.mediaUserToken))
      throw new y("mk-176", y.Reason.CONTENT_RESTRICTED, {
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
        new y("mk-174", y.Reason.MEDIA_LICENSE, { data: { url: e, keyuri: t }, origin: n })
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
      r = rc(t) || y.Reason.MEDIA_LICENSE,
      s = e?.dialog,
      n = e?.message ?? e?.customerMessage ?? e?.errorMessage ?? r;
    throw s !== void 0
      ? new Er({ ...e, status: t, message: n, dialog: s })
      : new y("mk-183", r, { description: n, data: { status: t, message: n, context: e } });
  }
}
class hb extends zn {
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
      throw new y("mk-179", y.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: n },
      });
    if (a.status !== 0)
      throw new y("mk-184", y.Reason.SERVER_ERROR, {
        description: `License server responded with code '${a.status ?? "unknown"}'`,
        data: { body: n },
      });
    return a;
  }
  async revokeLicense(e, t, r) {}
  createChallengeBody(e, t, r) {
    const s = (this.lastKeyId += 1),
      n = typeof t.licenseChallenge == "string" ? t.licenseChallenge : Xe(t.licenseChallenge);
    return {
      version: 1,
      "license-requests": [
        { id: s, "adam-id": e.catalogId ?? e.id, challenge: n, uri: t.keyuri, "key-system": this.keySystemId },
      ],
    };
  }
}
class pb extends zn {
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
      throw new y("mk-180", y.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: n },
      });
    if (a.status !== 0)
      throw new Er({ status: a.status, dialog: { message: "Error acquiring license" } }, y.Reason.MEDIA_LICENSE);
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
      n = typeof t.licenseChallenge == "string" ? t.licenseChallenge : Xe(t.licenseChallenge);
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
class fb extends zn {
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
    const s = typeof t.licenseChallenge == "string" ? t.licenseChallenge : Xe(t.licenseChallenge);
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
class yb {
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
      throw new y("mk-177", y.Reason.MEDIA_LICENSE, { description: `Unable to request license for ${e}` });
    return s.requestLicense(e, t, r);
  }
  async revokeLicense(e, t, r) {
    const s = await this.findManager(e, t, r);
    if (s === void 0)
      throw new y("mk-178", y.Reason.MEDIA_LICENSE, { description: `Unable to revoke license for ${e}` });
    return s.revokeLicense(e, t, r);
  }
  async findManager(e, t, r) {
    for (const s of this.children) if (await s.isCompatible(e, t, r)) return s;
  }
}
function mb(i) {
  const e = i.configurations,
    { runtime: t, request: r, dispatcher: s, store: n } = i.services,
    a = new Xv({ ...e.mediaAPIClient, services: { request: r } }),
    o = new tb({ ...e.mediaAPIAccess, services: { mediaAPI: a } }),
    c = new eb({ ...e.manifestManager, services: { request: r } }),
    l = { streaming: pb, batch: hb, web: fb },
    h = (e.licenseManager.include ?? ["streaming", "batch", "web"]).map(function (Xt) {
      return new l[Xt]({
        services: { runtime: t, request: r },
        developerToken: e.licenseManager.developerToken,
        mediaUserToken: e.licenseManager.mediaUserToken,
      });
    }),
    g = new yb({
      services: { runtime: t, request: r },
      developerToken: e.licenseManager.developerToken,
      mediaUserToken: e.licenseManager.mediaUserToken,
      managers: h,
    }),
    m = new ub({ ...e.assetResolver, services: { runtime: t, request: r, mediaAPI: a, manifest: c } }),
    k = new pv(s, e.bitrateCalculator?.bitrate),
    W = new mv({ services: { runtime: t } }),
    oe = new Pv({ ...e.itemLoader, services: { mediaAPI: a } }),
    J = new Ur({ services: { dispatcher: s }, trackers: e.playActivity?.trackers ?? [] }),
    Ae = new xr({
      services: {
        runtime: t,
        request: r,
        dispatcher: s,
        store: n,
        player: W,
        manifest: c,
        assetResolver: m,
        bitrateCalculator: k,
      },
      playerOptions: gb({
        services: {
          runtime: t,
          request: r,
          dispatcher: s,
          manifest: c,
          license: g,
          bitrateCalculator: k,
          playActivity: J,
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
    playActivity: J,
    itemLoader: oe,
    manifest: c,
    license: g,
    assetResolver: m,
    player: W,
    mediaItemPlayback: Ae,
    bitrateCalculator: k,
  };
}
function Bo(i, e) {
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
function gb(i) {
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
      getRTCStreamingTracker: () => e.playActivity.getTrackerByType(Rl),
      hasMusicSubscription: async function () {
        return e.store?.storekit?.hasMusicSubscription() ?? !1;
      },
    },
  };
}
var vb = Object.defineProperty,
  bb = Object.getOwnPropertyDescriptor,
  Yt = (i, e, t, r) => {
    for (var s = bb(e, t), n = i.length - 1, a; n >= 0; n--) (a = i[n]) && (s = a(e, t, s) || s);
    return (s && vb(e, t, s), s);
  };
const _b = [
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
  Tb = Ir.register("mk-bag-features-overrides");
class Pt {
  app;
  capabilities;
  context = {};
  _playbackMode = xe.MIXED_CONTENT;
  _autoplayEnabled = !1;
  id;
  prefix;
  privateEnabled = !1;
  siriInitiated = !1;
  sourceType = Ns.MUSICKIT;
  get version() {
    return dl();
  }
  playbackActions;
  guid;
  _bag = j;
  playbackControllers = {};
  _playbackController;
  get playbackController() {
    return this._playbackController;
  }
  _queue;
  services;
  _whenConfigured = void 0;
  constructor(e) {
    ((this.id = Si()), Sm(e.app));
    const { developerToken: t } = e;
    if (typeof t != "string" || t.trim() === "")
      throw new p(p.Reason.CONFIGURATION_ERROR, "Missing or empty developer token");
    Object.assign(j.features, Td(e.features));
    const r = Tb.get();
    (r && (M.warn("Overriding bag.features with", r), (j.features = { ...j.features, ...r })),
      Object.assign(j.autoplay, e.autoplay),
      Object.assign(j.app, e.app),
      Object.assign(j.urls, e.urls),
      M.debug("Instance Configuration: ", j));
    const s = ["playbackActions", "guid", "playbackMode", "privateEnabled", "siriInitiated", "sourceType"];
    for (const l of s) l in e && (Ve(this, `_${l}`) ? (this[`_${l}`] = e[l]) : (this[l] = e[l]));
    ("prefix" in e && /^(?:web|preview)$/.test(e.prefix || "") && (this.prefix = j.prefix = e.prefix),
      this.configureLogger(e));
    const n = og(t, e);
    let a = "amp-api.music.apple.com",
      o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/acquireWebPlaybackLicense",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      };
    this.realm === ie.PODCAST &&
      ((a = "amp-api.podcasts.apple.com"),
      (o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      }));
    let c = !1;
    if (
      (this.realm === ie.TV && (c = !0),
      (this.services = mb({
        services: { ...e.services, store: n },
        configurations: {
          mediaAPIClient: {
            host: a,
            developerToken: t,
            mediaUserToken: n.musicUserToken,
            storefrontId: this.storefrontId,
          },
          itemLoader: { storefrontId: n?.storefrontId, fetchContainerPages: !!j.features["fetch-container-pages"] },
          manifestManager: { developerToken: t, mediaUserToken: n.musicUserToken, personalizedManifests: c },
          licenseManager: { developerToken: t, mediaUserToken: n.musicUserToken },
          assetResolver: {
            staticKeyURLs: o,
            mzplayAssetEndpoint: `https://${Ii("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
          },
          bitrateCalculator: { bitrate: e.bitrate },
          playActivity: { trackers: e.playActivityAPI },
          mediaItemPlayback: {
            bag: j,
            tokens: w,
            context: this.context,
            autoplayEnabled: this.autoplayEnabled,
            privateEnabled: this.privateEnabled,
            siriInitiated: this.siriInitiated,
            playbackMode: this.playbackMode,
          },
        },
      })),
      (this.capabilities = new rv(this.services.dispatcher)),
      this._initializeInternalEventHandling(),
      M.info(`MusicKit JS Version: ${this.version}`),
      M.info("InstanceId", this.id),
      M.debug("Link Parameters", e.linkParameters),
      j.app && M.debug("App", j.app),
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
    return ac();
  }
  get browserSupportsVideoDrm() {
    return this.services.runtime.isDRMAvailable;
  }
  get cid() {
    return this.realm === ie.TV || this.sourceType !== Ns.MUSICKIT ? w.cid : !1;
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
    (this.realm !== ie.MUSIC && (e = !1),
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
    if (Object.values(xe).indexOf(e) === -1) return;
    const t = e === xe.PREVIEW_ONLY,
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
    return this.playbackMode === xe.PREVIEW_ONLY;
  }
  set previewOnly(e) {
    this.playbackMode = e ? xe.PREVIEW_ONLY : xe.MIXED_CONTENT;
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
    return this._playbackController?.repeatMode ?? Se.none;
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
    return this._playbackController?.shuffleMode ?? Fn.off;
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
    return dv(this.services.dispatcher, e, t, r);
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
    await this.setPlaybackController(this.getPlaybackControllerByType(nt.serial));
    const { promise: t, resolve: r } = gn();
    ((this._whenConfigured = t),
      await w.storekit.whenAuthCompleted,
      e?.storefrontId !== void 0 && (this.storefrontId = e.storefrontId),
      e?.utsAPIClient !== void 0 && (this.services.utsAPIClient = e.utsAPIClient),
      await this.configurePlayActivity(),
      this._initializeExternalEventPublishing(),
      r());
  }
  deferPlayback() {
    (M.debug("deferPlayback", this._playbackController), rf());
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
      uc("musicSubcriptionOffers", {
        message: "musicSubcriptionOffers has been deprecated, use musicSubscriptionOffers instead",
      }),
      this.musicSubscriptionOffers()
    );
  }
  hasMusicSubscription() {
    return ug(w.storekit);
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
      e?.playEvent && !Ve(t, "startTime"))
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
    Pl(this.services.dispatcher, e, t);
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
  async seekToTime(e, t = qe.Manual) {
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
      case nt.serial: {
        t = new Gt(s);
        break;
      }
      case nt.continuous: {
        t = new Bn(s);
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
      ? this.getPlaybackControllerByType(nt.continuous)
      : this.getPlaybackControllerByType(nt.serial);
  }
  _handlePlaybackError(e) {
    if ((M.error("mediaPlaybackError", e), p.isMKError(e) && _b.includes(e.reason))) throw e;
  }
  _initializeInternalEventHandling() {
    const e = this.services;
    (w.storekit.addEventListener(E.userTokenDidChange, ({ userToken: t }) => {
      (this._whenConfigured && this._whenConfigured.then(() => this.configurePlayActivity().catch()).catch(),
        M.debug(`Updating services with mediaUserToken: ${this.musicUserToken}`),
        Bo(e, { mediaUserToken: t }));
    }),
      e.dispatcher.subscribe(S.apiStorefrontChanged, function (t, { storefrontId: r }) {
        (M.debug(`Updating services with storefrontId: ${r}`), Bo(e, { storefrontId: r }));
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
        we.bufferTimedMetadataDidChange,
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
      this.services.dispatcher.subscribe(we.bufferTimedMetadataDidChange, (e, { metadata: t }) => {
        (M.debug("Dispatching TimedMetadata change", t), this.services.dispatcher.publish(E.timedMetadataDidChange, t));
      }));
  }
  configureLogger(e) {
    (ig() || (e.debug === !0 ? ho(te.DEBUG) : e.logLevel !== void 0 && ho(e.logLevel)),
      vt.enabled && Ws(vt.enabled),
      Ut.value !== void 0 && fl(Ut.value),
      e.logHandler !== void 0 && rg(e.logHandler));
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
    (!e && this.playbackMode !== xe.FULL_PLAYBACK_ONLY) ||
      ((this._playbackController === void 0 ||
        !this._playbackController.isReady ||
        !this._playbackController.isPlaying) &&
        (await this.authorize()));
  }
}
Yt([kt(250, { isImmediate: !0 })], Pt.prototype, "pause");
Yt([kt(250, { isImmediate: !0 })], Pt.prototype, "play");
Yt([Pr("skip")], Pt.prototype, "skipToNextItem");
Yt([Pr("skip")], Pt.prototype, "skipToPreviousItem");
Yt([Pr("seek")], Pt.prototype, "seekForward");
Yt([Pr("seek")], Pt.prototype, "seekBackward");
function QT() {
  function i(a) {
    return $t() ? void 0 : document.head.querySelector(`meta[name=${a}]`)?.content || void 0;
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
function Qn(i) {
  if ($t()) return;
  const e = new Event(i, { bubbles: !0, cancelable: !0 });
  setTimeout(() => document.dispatchEvent(e));
}
async function Eb() {
  if ($t()) return;
  const i = Dn("musickit.js");
  if (i?.dataset?.webComponents !== "") return;
  const e = "noModule" in i,
    t = `components/musickit-components/musickit-components${e ? ".esm" : ""}.js`,
    r = "https:" + ol(t) + t,
    s = {};
  (e && (s.type = "module"),
    i.hasAttribute("async") && (s.async = ""),
    i.hasAttribute("defer") && (s.defer = ""),
    await Mr(r, s),
    Qn(E.webComponentsLoaded));
}
function kb(i) {
  return i === "*";
}
function Sb(i) {
  return i === "**";
}
function Ib(i) {
  return /^\{[^}]*\}$/i.test(i);
}
function ds(i) {
  return i instanceof RegExp ? i.toString() : String(i);
}
function Pb(i) {
  return i instanceof RegExp || i.indexOf("*") !== -1 || (i.indexOf("{") !== -1 && i.indexOf("}") !== -1);
}
function Ll(i, e) {
  return function (r) {
    return i.test(r);
  };
}
function wb(i) {
  return (
    "escape" in RegExp && typeof RegExp.escape == "function"
      ? RegExp.escape
      : (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )(i);
}
function Ab(i, e) {
  const t = wb(e),
    s = i.split(e).reduce(function (n, a, o) {
      const c = o > 0 ? t : "";
      if (kb(a)) return n + c + `[^${t}]+`;
      if (Sb(a)) return n + ".*";
      if (Ib(a)) {
        const l = a
          .slice(1, -1)
          .split(",")
          .map((h) => h.trim())
          .filter((h) => h.length > 0);
        return l.length <= 0 ? n + c + `[^${t}]+` : n + c + `(?:${l.join("|")})`;
      }
      return n + c + a;
    }, "");
  return Ll(new RegExp(s, ""));
}
function Rb(i, e) {
  return function (r) {
    return r === i;
  };
}
function Cb(i, e) {
  return i instanceof RegExp ? Ll(i) : Pb(i) ? Ab(i, e) : Rb(i);
}
class Ob {
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
      const s = ds(r);
      if (!this.subscriptions.has(s)) {
        const a = Cb(r, this.topicSeparator);
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
    const r = ds(e),
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
      const t = ds(e);
      this.subscriptions.delete(t);
    }
  }
}
const Ul = typeof window < "u" && typeof document < "u";
let xl = !1;
const Ge = [];
async function Db() {
  const i = Ge.map((e) => e.cleanup());
  (await Promise.all(i), Ge.splice(0, Ge.length));
}
function XT() {
  xl = !0;
}
async function JT(i, e = Pt, t) {
  if (!i) throw new p(p.Reason.INVALID_ARGUMENTS, "configuration required");
  const r = { ...i };
  r.mergeQueryParams &&
    Ul &&
    window.location &&
    (r.linkParameters = { ...(i.linkParameters || {}), ...zu(window.location.href) });
  const s = new e({
    ...r,
    services: { runtime: await Zd.detect(), dispatcher: new Ob(), request: new nh(), ...i.services },
  });
  return (xl || (await Db()), t && (await t(s)), Ge.push(s), Qn(E.configured), s);
}
function ZT() {
  return Ge;
}
function Nb(i) {
  if (Ge.length !== 0) return typeof i > "u" ? Ge[Ge.length - 1] : Ge.find((e) => e.id === i);
}
Ul && (We(Eb()), Qn(E.loaded));
const Mb = [
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
function eE(i) {
  return i?.isUTS || Mb.includes(i?.type) ? "video" : (i?.attributes?.mediaKind ?? "audio");
}
var Xn = { setDelegate: !0 };
function Lb() {
  Xn = { setDelegate: !0 };
}
function Ub(i) {
  var e = {},
    t = Hl(i),
    r,
    s;
  for (var n in i)
    ((r = null),
      (s = null),
      t && ((r = i.__lookupGetter__(n)), (s = i.__lookupSetter__(n))),
      r || s ? (r && e.__defineGetter__(n, r), s && e.__defineSetter__(n, s)) : (e[n] = i[n]));
  return e;
}
function ui(i) {
  return typeof i < "u";
}
function _i(i) {
  return ui(i) && i !== null;
}
function xb(i) {
  return _i(i) && !Fl(i) && !Kl(i) && !Vl(i);
}
function Fl(i) {
  return $l(i) && i.length === 0;
}
function Kl(i) {
  return Jn(i) && i.length === 0;
}
function Vl(i) {
  return Fr(i) && Object.keys(i).length === 0;
}
function re(i) {
  return typeof i == "function";
}
function Ti(i) {
  return typeof i == "number";
}
function Bl(i) {
  return Ti(i) && i % 1 === 0;
}
function $l(i) {
  return typeof i == "string" || i instanceof String;
}
function Fb(i) {
  return !!i && i.nodeType == 1;
}
function Jn(i) {
  return !!i && i.constructor === Array;
}
function Fr(i) {
  return !!i && i.constructor === Object;
}
function Kb(i) {
  var e = [];
  for (var t in i) {
    var r = i[t];
    i.hasOwnProperty(t) && !re(r) && e.push(r);
  }
  return e;
}
function Vb(i) {
  var e = [];
  for (var t in i) i.hasOwnProperty(t) && !re(i[t]) && e.push(t);
  return e;
}
function Bb(i) {
  for (var e in i) if (i.hasOwnProperty(e)) return !0;
}
function $b(i) {
  for (var e in i) if (i.hasOwnProperty(e) && i[e]) return !0;
}
function Hl(i) {
  return Fr(i) && re(i.__lookupGetter__) && re(i.__lookupSetter__) && re(i.__defineGetter__) && re(i.__defineSetter__);
}
function Hb(i) {
  var e = [];
  for (var t in i) {
    var r = i[t];
    i.hasOwnProperty(t) && re(r) && e.push(r);
  }
  return e;
}
function jb(i) {
  var e = {};
  for (var t in i) i.hasOwnProperty(t) && !re(i[t]) && (e[i[t]] = t);
  return e;
}
function jl(i) {
  var e = [!0, !0, !0].concat(Array.prototype.slice.call(arguments));
  return Zn.apply(null, e);
}
function Zn(i, e, t, r) {
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
function qb(i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    Xn[t] = !0;
  }
}
function Wb(i, e, t) {
  var r = !1;
  if (((t = t || !1), i && e && i !== e)) {
    var s = {};
    (Object.keys(e).forEach(function (n) {
      i[n] || (s[n] = !0);
    }),
      jl(s, Xn),
      (r = ql(i, e, t ? i : null, s)));
  }
  return r;
}
function ql(i, e, t, r) {
  var s = !1;
  if (i && e) {
    ((r = r || {}), (t = t || e));
    var n = function (g, m, k, W, oe) {
      var J = function () {
        return k[oe].apply(g, arguments);
      };
      return (m && (J.origFunction = m), (J.attachedMethod = !0), J);
    };
    for (var a in e)
      if (!(a in r) && e[a] && re(e[a])) {
        var o = i[a],
          c = o && re(o),
          l = null;
        (c && (o.attachedMethod === !0 ? (l = o) : (l = o.bind(i))), (i[a] = n(t, l, e, i, a)), (s = !0));
      }
  }
  return s;
}
function Wl(i) {
  var e = !1;
  for (var t in i)
    if (re(i[t]) && i[t].attachedMethod === !0) {
      var r = i[t].origFunction;
      if (r) for (; i[t].origFunction;) ((i[t] = i[t].origFunction), (e = !0));
      else delete i[t];
    }
  return e;
}
function Gb(i, e) {
  var t = {};
  for (var r in i)
    e[r] &&
      re(i[r].setDelegate) &&
      (t[r] = i[r].setDelegate.apply(i[r], [e[r]].concat(Array.prototype.slice.call(arguments, 2))));
  return t;
}
var Yb = function (e) {
  var t = !1;
  for (var r in e) {
    var s = e[r];
    s && typeof s == "object" && re(s.setDelegate) && (t |= Wl(s));
  }
  return !!t;
};
function zb(i, e) {
  var t = null;
  if (i && e && e.setDelegate) {
    var r = {},
      s;
    for (s in i) re(i[s]) && i[s].origFunction && (r[s] = i[s]);
    t = e.setDelegate(r);
  }
  return t;
}
function Qb(i, e) {
  var t = {};
  if (i) for (var r = 0; r < i.length; r++) t[i[r]] = 0;
  if (e) for (var s = 0; s < e.length; s++) t[e[s]] = 0;
  return Object.keys(t);
}
function ea() {
  return typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : {};
}
var d = Object.freeze({
    __proto__: null,
    _utResetNonOverridableFunctions: Lb,
    shallowClone: Ub,
    isDefined: ui,
    isDefinedNonNull: _i,
    isDefinedNonNullNonEmpty: xb,
    isEmptyString: Fl,
    isEmptyArray: Kl,
    isEmptyObject: Vl,
    isFunction: re,
    isNumber: Ti,
    isInteger: Bl,
    isString: $l,
    isElement: Fb,
    isArray: Jn,
    isObject: Fr,
    values: Kb,
    keys: Vb,
    hasAnyKeys: Bb,
    hasAnyNonNullKeys: $b,
    hasGetterAndSetterMethods: Hl,
    methods: Hb,
    invert: jb,
    extend: jl,
    copyKeysAndValues: Zn,
    addNonOverrideableFunctions: qb,
    attachMethods: ql,
    detachMethods: Wl,
    attachDelegate: Wb,
    setDelegates: Gb,
    resetDelegates: Yb,
    copyDelegatedFunctions: zb,
    dedupedArray: Qb,
    globalScope: ea,
  }),
  hs = { exponential: { maxWait: 1500, initialDelay: 100, factor: 2 } },
  Gl = function (i, e, t) {
    ((this.delay = i || hs.exponential.initialDelay),
      (this.maxWait = Ti(e) ? e : hs.exponential.maxWait),
      (this.factor = t || hs.exponential.factor),
      (this.timeWaited = 0));
  };
Gl.prototype.nextDelay = function () {
  var e = null,
    t = this.maxWait - this.timeWaited;
  return (
    t > 0 && ((this.delay = Math.min(this.delay, t)), (this.timeWaited += this.delay)),
    (this.maxWait === 0 || t > 0) && ((e = this.delay), (this.delay = this.delay * this.factor)),
    e
  );
};
function Yl(i, e, t, r) {
  var s = function () {
    var a = i.nextDelay();
    a ? setTimeout(Yl.bind(null, i, e, t, r), a) : r.apply(r, arguments);
  };
  e.call(e, t, s);
}
function Xb(i, e, t, r, s, n) {
  var a = new Gl(r, s, n);
  Yl(a, i, e, t);
}
var Jb = Object.freeze({ __proto__: null, exponentialBackoff: Xb });
function Zb(i, e, t) {
  var r = void 0;
  if (ui(i))
    if ((ui(e) || (e = 1024 * 1024), ui(t) || (t = 2), Ti(i) && Ti(e) && e > 0 && Bl(t) && t >= 0)) {
      var s = Math.pow(10, t),
        n = i > 0 ? "floor" : "ceil";
      r = Math[n](i / e / s) * s;
    } else r = NaN;
  return r;
}
var e_ = Object.freeze({ __proto__: null, deResNumber: Zb }),
  ta = "0123456789",
  t_ = ta + "ABCDEF",
  zl = ta + "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Ql = zl + "abcdefghijklmnopqrstuvwxy",
  Xl = Ql + "z";
function i_(i, e, t) {
  var r = !1;
  return (
    i &&
      e &&
      ((i = i.substr(0, e.length)), t && ((i = i.toLowerCase()), (e = e.toLowerCase())), (r = i.indexOf(e) === 0)),
    r
  );
}
function r_(i, e, t) {
  var r = !1;
  if (i && e) {
    t && ((i = i.toLowerCase()), (e = e.toLowerCase()));
    var s = i.length - e.length;
    r = s >= 0 && i.lastIndexOf(e) === s;
  }
  return r;
}
function s_(i, e, t) {
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
function Jl(i, e) {
  var t = "";
  if (i)
    for (var r = i.toLowerCase().split("_"), s, n = 0; n < r.length; n++)
      ((s = r[n][0]), (n !== 0 || e) && (s = s.toUpperCase()), (t += s + r[n].slice(1)));
  return t;
}
function n_(i) {
  return Jl(i, !0);
}
function a_(i) {
  var e = "",
    t = "",
    r = !0;
  for (var s in i) {
    var n = i[s];
    (n || n === 0 || n === !1) && ((e += t + s + "=" + encodeURIComponent(n)), r && ((t = "&"), (r = !1)));
  }
  return e;
}
function o_(i, e) {
  return (
    "The function " +
    i +
    "." +
    e +
    "() must be overridden with a platform-specific delegate function.If you have no data for this function, have your delegate return null or undefined (no 'return')"
  );
}
function c_(i, e) {
  var t = null;
  e = e || "\\S+";
  var r = new RegExp("\\b" + e + "/(\\S+)\\b", "i"),
    s = r.exec(i);
  return (s && s[1] && (t = s[1]), t);
}
function l_(i) {
  var e = "z",
    t = Date.now(),
    r = Math.floor(Math.random() * 1e5);
  return ((t = t.toString(36).toUpperCase()), (r = r.toString(36).toUpperCase()), i + e + t + e + r);
}
function u_(i) {
  for (var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", t = "", r, s = 0, n = e.length; s < n; s++)
    ((r = e.charAt(s)), r === "x" ? (t += mr(i)) : r === "y" ? (t += mr(i, "8", "b")) : (t += r));
  return t;
}
function mr(i, e, t) {
  var r = ea(),
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
    e && t && (n < e || n > t) && (n = mr(i, e, t)),
    n
  );
}
function d_(i, e) {
  var t = "",
    r = e.length;
  if (r <= 36) t = i.toString(r).toUpperCase();
  else {
    for (var s, n, a = []; i > 0;) ((s = i % r), (n = e.charAt(s)), a.push(n), (i = (i - s) / r));
    t = a.reverse().join("");
  }
  return (t === "" && (t = "0"), t);
}
function h_(i) {
  var e;
  if (Math.floor(4294967295 / 256) == 16777215) {
    var t = ea(),
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
        for (o = s[n], a = 0; a < 6; a++) ((e += Xl[o % 62]), (o = Math.floor(o / 62)));
      i && (e = "1_" + (c ? "1" : "2") + "_" + e);
    }
  }
  return e;
}
var ge = Object.freeze({
  __proto__: null,
  base10Alphabet: ta,
  base16Alphabet: t_,
  base36Alphabet: zl,
  base61Alphabet: Ql,
  base62Alphabet: Xl,
  startsWith: i_,
  endsWith: r_,
  trim: s_,
  snakeCaseToCamelCase: Jl,
  snakeCaseToUpperCamelCase: n_,
  exceptionString: o_,
  paramString: a_,
  versionStringFromUserAgent: c_,
  requestId: l_,
  uuid: u_,
  randomHexCharacter: mr,
  convertNumberToBaseAlphabet: d_,
  cryptoRandomBase62String: h_,
});
function Zl(i, e, t) {
  var r = e;
  if (i && e)
    for (var s = i.split("."), n = 0; r && n < s.length; n++) {
      var a = s[n];
      (!(a in r) && t && (r[a] = {}), a in r ? (r = r[a]) : (r = null));
    }
  return r;
}
function Js(i) {
  var e = null;
  if (i && arguments.length > 1)
    for (var t = eu(Array.prototype.slice.call(arguments, 1)), r = t.length - 1; r >= 0; r--) {
      var s = t[r];
      if (((e = Zl(i, s)), _i(e))) break;
    }
  return e;
}
function p_(i, e) {
  return Zl(i, e, !0);
}
function eu(i) {
  var e = [],
    t = [];
  ((t = t.concat(i)), arguments && arguments.length > 1 && (t = t.concat(Array.prototype.slice.call(arguments, 1))));
  for (var r = 0; r < t.length; r++) {
    var s = t[r];
    e = e.concat(s);
  }
  return e;
}
var f_ = Object.freeze({ __proto__: null, valueForKeyPath: Js, createObjectAtKeyPath: p_, sourcesArray: eu });
function Zs(i) {
  for (var e = [!1, !1, !1].concat(Array.prototype.slice.call(arguments)), t = [], r = 0; r < e.length; r++) {
    var s = e[r];
    if (s && s.constructor === Array) for (var n = 0; n < s.length; n++) t.push(s[n]);
    else t.push(s);
  }
  return Zn.apply(null, t);
}
function y_(i, e, t, r) {
  var s = Zs(r),
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
        re(l) && (a[c] = l.call(i, s));
      }
    n = Zs(n, a);
  }
  return n;
}
function m_(i, e, t, r) {
  var s, n, a;
  if (i && e && t)
    if (((n = {}), (s = Js(e, t, t.custom)), s)) {
      var o, c;
      if (Jn(s)) for (o = 0; o < s.length; ++o) ((c = i[s[o]]), _i(c) && (n[s[o]] = c));
      else if (Fr(s)) {
        for (var l in s)
          for (o = 0; o < s[l].length; ++o)
            if (((c = Js(s[l][o], i)), _i(c))) {
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
  return (a && re(r) && r(a), n);
}
var Kr = Object.freeze({ __proto__: null, mergeAndCleanEventFields: Zs, processMetricsData: y_, applyFieldsMap: m_ });
function g_(i, e, t) {
  tu(i, "GET", null, e, t);
}
function tu(i, e, t, r, s, n) {
  var a = new XMLHttpRequest();
  ((t = t || void 0), (n = n || {}), (r = re(r) ? r : function () {}), (s = re(s) ? s : function () {}));
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
var iu = Object.freeze({ __proto__: null, makeAjaxGetRequest: g_, makeAjaxRequest: tu }),
  ia = { STORAGE_TYPE: { LOCAL_STORAGE: "localStorage", SESSION_STORAGE: "sessionStorage" } },
  ru = function (e) {
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
function ra(i) {
  var e = null,
    t = null,
    r = i === ia.STORAGE_TYPE.LOCAL_STORAGE;
  try {
    ((t = r ? typeof localStorage : typeof sessionStorage),
      t !== "undefined" ? (e = r ? localStorage : sessionStorage) : (e = null));
  } catch (s) {
    ((e = null), console.error("_utils.storage._defaultStorageObject: Unable to retrieve storage object: " + s));
  }
  return e;
}
function v_(i) {
  return ra(i);
}
var b_ = ru(ra(ia.STORAGE_TYPE.LOCAL_STORAGE)),
  __ = ru(ra(ia.STORAGE_TYPE.SESSION_STORAGE));
function T_(i, e, t) {
  var r = null;
  if (t)
    try {
      (i.setItem(e, JSON.stringify(t)), (r = t));
    } catch {}
  else r = i.removeItem(e);
  return r;
}
function E_(i, e) {
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
var Q = Object.freeze({
  __proto__: null,
  _utDefaultStorageObject: v_,
  localStorageObject: b_,
  sessionStorageObject: __,
  saveObjectToStorage: T_,
  objectFromStorage: E_,
});
function tr(i) {
  this.key = i;
}
tr.prototype.toString = function () {
  return this.key;
};
var Ke = {
    flagArguments: {
      INCLUDE_CALL_STACK: new tr("INCLUDE_CALL_STACK"),
      MIRROR_TO_SERVER: new tr("MIRROR_TO_SERVER"),
      SUPPRESS_CLIENT_OUTPUT: new tr("SUPPRESS_CLIENT_OUTPUT"),
    },
    setDelegate: function (e) {
      return d.attachDelegate(this, e);
    },
    execute: function (e, t, r) {
      var s = e.levelStringToIntMap[t];
      if (e.level() !== e.NONE && e.level() <= s) {
        var n = Array.prototype.slice.call(r),
          a = Ke.nonFlagLogArguments(n),
          o = Ke.logOptions(e, s, n),
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
      return e && e === Ke.flagArguments[e.toString()];
    },
    nonFlagLogArguments: function (e) {
      return e.filter(function (t) {
        return !Ke.isFlagObject(t);
      });
    },
    logOptions: function (e, t, r) {
      var s = {},
        n;
      return (
        r.forEach(function (a) {
          Ke.isFlagObject(a) && ((n = ge.snakeCaseToCamelCase(a.toString())), (s[n] = !0));
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
  en = { NONE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 },
  gr = {
    MIN_LEVEL: en.NONE,
    MAX_LEVEL: en.ERROR,
    levelIntToStringMap: { 0: "none", 1: "debug", 2: "info", 3: "warn", 4: "error" },
    levelStringToIntMap: { none: 0, debug: 1, info: 2, warn: 3, error: 4 },
  };
d.extend(gr, en);
var sa = { loggerName: "defaultLogger", level: gr.INFO, throwLevel: gr.NONE },
  $o = !1,
  Ho = {};
function q(i) {
  ((this._loggerName = i),
    this._level,
    this._throwLevel,
    $o || (($o = !0), d.extend(q.prototype, gr), d.extend(q.prototype, Ke.flagArguments)));
}
function Ci(i) {
  i = i || sa.loggerName;
  var e = Ho[i];
  return (e || ((e = new q(i)), (Ho[i] = e)), e);
}
q.level = function () {
  return sa.level;
};
q.throwLevel = function () {
  return sa.throwLevel;
};
q.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
q.prototype.loggerName = function () {
  return this._loggerName;
};
q.prototype.levelParameterAsInt = function (e) {
  var t = null,
    r;
  return (
    d.isString(e) ? (r = this.levelStringToIntMap[e.toLowerCase()]) : d.isNumber(e) && (r = e),
    r >= this.MIN_LEVEL && r <= this.MAX_LEVEL && (t = r),
    t
  );
};
q.prototype.setLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._level = t);
};
q.prototype.setThrowLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._throwLevel = t);
};
q.prototype.level = function () {
  var e = this._level;
  return d.isNumber(e) ? e : q.level();
};
q.prototype.levelString = function () {
  return this.levelIntToStringMap[this.level()];
};
q.prototype.throwLevel = function () {
  var e = this._throwLevel;
  return d.isNumber(e) ? e : q.throwLevel();
};
q.prototype.debug = function () {
  Ke.execute(this, "debug", arguments);
};
q.prototype.info = function () {
  Ke.execute(this, "info", arguments);
};
q.prototype.warn = function () {
  Ke.execute(this, "warn", arguments);
};
q.prototype.error = function () {
  Ke.execute(this, "error", arguments);
};
q.prototype.lastLog = function (e) {
  return this[e] ? this[e]._lastLog : null;
};
q.level;
q.throwLevel;
var Vr = function () {};
Vr.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Vr.prototype.localStorageObject = Q.localStorageObject;
Vr.prototype.sessionStorageObject = Q.sessionStorageObject;
var na = function () {};
na.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
na.prototype.makeAjaxRequest = iu.makeAjaxRequest;
var Br = "noTopicConfig",
  jo = "_",
  tn = { configBaseUrl: "https://xp.apple.com/config/1/report", disabled: !0 },
  ps,
  qo = function (e, t, r) {
    if (r) {
      e.push(r);
      var s = r[t];
      s && d.hasAnyKeys(s) && e.push(s);
    }
  },
  $ = function (e) {
    ((this.environment = new Vr()),
      (this.network = new na()),
      (this.logger = new q("mt-client-config")),
      (this._topic = e || Br),
      (this._debugSource = null),
      (this._cachedSource = null),
      (this._serviceSource = null),
      (this._initCalled = !1),
      (this._initialized = !1),
      (this._showedDebugWarning = !1),
      (this._showedNoProvidedSourceWarning = !1),
      (this._keyPathsThatSuppressWarning = { configBaseUrl: !0 }),
      (this._configFetchPromise = null),
      (this.DEBUG_SOURCE_KEY = "mtClientConfig_debugSource" + jo + this._topic),
      (this.CACHED_SOURCE_KEY = "mtClientConfig_cachedSource" + jo + this._topic));
  };
$.defaultConfig = function () {
  return (ps || (ps = new $(Br)), ps);
};
$.prototype._defaults = function () {
  return tn;
};
$.prototype._setInitialized = function (e) {
  this._initialized = e;
};
$.prototype._setInitCalled = function (e) {
  this._initCalled = e;
};
$.prototype._setShowedDebugWarning = function (e) {
  this._showedDebugWarning = e;
};
$.prototype._setShowedNoProvidedSourceWarning = function (e) {
  this._showedNoProvidedSourceWarning = e;
};
$.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
$.prototype.resetDelegate = function () {
  (d.detachMethods(this), d.resetDelegates(this));
};
$.prototype.topic = function () {
  return this._topic;
};
$.prototype.configHostname = function () {};
$.prototype.configUrl = function () {
  var e = this.configHostname(),
    t;
  return (
    e ? (t = Promise.resolve("https://" + e + "/config/1/report")) : (t = this.value("configBaseUrl")),
    t.then(
      function (r) {
        return (
          this._topic !== Br
            ? (r += "/" + this.topic())
            : this.logger.error("config.configUrl(): Topic must be provided"),
          r
        );
      }.bind(this),
    )
  );
};
$.prototype.sources = function () {};
$.prototype.value = function (e, t) {
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
      e === "disabled" ? (l ? (h = [n, a, o, c]) : (h = [tn])) : (h = [tn, n, a, o, c]),
      (h = this.configSourcesWithOverrides(h, t || this.topic())),
      f_.valueForKeyPath.apply(null, [e].concat(h))
    );
  }.bind(this);
  if (this._configFetchPromise) return this._configFetchPromise.then(r);
  var s = r();
  return Promise.resolve(s);
};
$.prototype.configSourcesWithOverrides = function (e, t) {
  var r = e;
  if (e && e.length && t) {
    r = [];
    for (var s = 0; s < e.length; s++) {
      var n = e[s];
      if (n)
        if (d.isArray(n) && n.length) {
          for (var a = [], o = 0; o < n.length; o++) qo(a, t, n[o]);
          r.push(a);
        } else qo(r, t, n);
    }
  }
  return r;
};
$.prototype.setDebugSource = function (e) {
  return (
    (this._debugSource = e || null),
    Q.saveObjectToStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY, this._debugSource)
  );
};
$.prototype.debugSource = function () {
  return (
    this._debugSource ||
      (this._debugSource = Q.objectFromStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY)),
    this._debugSource
  );
};
$.prototype.setCachedSource = function (e) {
  return (
    (this._cachedSource = e || null),
    Q.saveObjectToStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY, this._cachedSource)
  );
};
$.prototype.cachedSource = function () {
  return (
    this._cachedSource ||
      (this._cachedSource = Q.objectFromStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY)),
    this._cachedSource
  );
};
$.prototype.setServiceSource = function (e) {
  return ((this._serviceSource = e), this._serviceSource);
};
$.prototype.serviceSource = function () {
  return this._serviceSource;
};
$.prototype.init = function (e) {
  var t = this._topic === Br || !d.isFunction(e);
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
$.prototype.cleanup = function () {
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
$.prototype.initialized = function () {
  return this._initialized;
};
var pe = function (e) {
  $.call(this, e);
};
pe.prototype = Object.create($.prototype);
pe.prototype.constructor = pe;
pe.prototype.disabled = function (e) {
  return this.value("disabled", e).then(function (t) {
    return !!t;
  });
};
pe.prototype.blacklistedEvents = function (e) {
  return this.denylistedEvents(e);
};
pe.prototype.denylistedEvents = function (e) {
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
    return su(n, a);
  });
};
function su(i, e) {
  var t = {},
    r = [];
  if (i) for (var s = 0; s < i.length; s++) t[i[s]] = 0;
  if (e) for (var n = 0; n < e.length; n++) t[e[n]] = 0;
  return ((r = Object.keys(t)), r);
}
pe.prototype.blacklistedFields = function (e) {
  return this.denylistedFields(e);
};
pe.prototype.denylistedFields = function (e) {
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
    return su(n, a);
  });
};
pe.prototype.removeBlacklistedFields = function (e, t) {
  return this.removeDenylistedFields(e, t);
};
pe.prototype.removeDenylistedFields = function (e, t) {
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
pe.prototype.metricsDisabledOrBlacklistedEvent = function (e, t) {
  return this.metricsDisabledOrDenylistedEvent(e, t);
};
pe.prototype.metricsDisabledOrDenylistedEvent = function (e, t) {
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
pe.prototype.deResFields = function (e) {
  return this.value("deResFields", e).then(function (t) {
    return t || [];
  });
};
pe.prototype.applyDeRes = function (e, t) {
  return e
    ? this.deResFields(t).then(function (r) {
        var s;
        return (
          r.forEach(function (n) {
            ((s = n.fieldName), s in e && (e[s] = e_.deResNumber(e[s], n.magnitude, n.significantDigits)));
          }),
          e
        );
      })
    : Promise.resolve(e);
};
var Ne = function (e, t) {
  if (!d.isDefinedNonNullNonEmpty(e) || !d.isString(e)) throw new Error("No valid topic was provided to Delegates.");
  ((this.config = this.getOrCreateConfig(e)),
    d.isDefinedNonNull(t) && ((this.environment = t.environment), (this.eventRecorder = t.eventRecorder)),
    (this._useOrginalContextForDelegateFunc = !1));
};
Ne.prototype.init = function () {
  if (!d.isDefinedNonNull(this.environment)) throw new Error("No environment was provided to Delegate options.");
  if (!d.isDefinedNonNull(this.eventRecorder)) throw new Error("No eventRecorder was provided to Delegate options.");
  (this.config.environment.setDelegate(this.environment),
    this.config.logger.setDelegate(this.logger),
    this.config.network.setDelegate(this.network));
  var i = d.isFunction(this.configSources) ? this.configSources.bind(this) : null;
  return this.config.init(i);
};
Ne.prototype.mergeDelegates = function (i) {
  var e = this;
  for (var t in i) e[t] || (e[t] = i[t]);
  this.config.setDelegate(i.config);
};
Ne.prototype.cleanup = function () {
  (d.isFunction(this.eventRecorder.cleanup) && this.eventRecorder.cleanup(),
    (this.config = null),
    (this.eventRecorder = null),
    (this.environment = null));
};
Ne.prototype.setEventRecorder = function (e) {
  return (
    d.isDefinedNonNull(e) &&
      (d.isDefinedNonNull(this.eventRecorder)
        ? (d.setDelegates(this.eventRecorder, e), this.eventRecorder.setDelegate(e))
        : (this.eventRecorder = e)),
    this
  );
};
Ne.prototype.setEnvironment = function (e) {
  if (!d.isDefinedNonNull(this.environment)) this.environment = e;
  else {
    var t = Object.create(this.environment);
    (d.extend(t, e), (this.environment = t));
  }
  return this;
};
Ne.prototype.setConfig = function (e) {
  return (this.config.setDelegate(e), this);
};
Ne.prototype.getOrCreateConfig = function (e) {
  return (d.isDefinedNonNull(this.config) || (this.config = new pe(e)), this.config);
};
Ne.prototype.configSources = function () {
  throw new Error("This method should be implemented by subdelegates.");
};
function wt() {
  this._operationPromiseChain = Promise.resolve();
}
wt.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
wt.prototype.recordEvent = function (e, t) {
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
wt.prototype.flushUnreportedEvents = function () {
  var e = Array.prototype.slice.call(arguments),
    t = this;
  return this._operationPromiseChain.then(function () {
    return ((t._operationPromiseChain = Promise.resolve()), t._flushUnreportedEvents.apply(t, e));
  });
};
wt.prototype._recordEvent = function (e, t) {};
wt.prototype._flushUnreportedEvents = function (e) {};
var di = {
    setDelegate: function (e) {
      return d.attachDelegate(this, e);
    },
    globalScope: function () {
      return d.globalScope();
    },
  },
  vr = {
    AJAX: "ajax",
    AJAX_SYNCHRONOUS: "ajaxSynchronous",
    IMAGE: "image",
    BEACON: "beacon",
    BEACON_SYNCHRONOUS: "beaconSynchronous",
  },
  k_ = ["dsId", "consumerId"];
function S_(i, e) {
  var t = { _topic: e };
  return (Object.setPrototypeOf(t, i), t);
}
var Me = function (e) {
  (this._validateConfig(e),
    (this._config = e),
    (this._topicConfigCache = {}),
    (this._topicPropsCache = {}),
    (this.logger = Ci("mt-event-queue")));
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
      k_.forEach(function (r) {
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
      ((r = this._topicConfigCache[e]), r || (r = this._topicConfigCache[e] = S_(this._config, e))),
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
var aa = {
  setDelegate: function (e) {
    return d.attachDelegate(this, e);
  },
  makeAjaxRequest: iu.makeAjaxRequest,
};
function nu() {
  var i = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(i) && i.indexOf("IEMobile") == -1;
}
function I_() {
  return d.isFunction(di.globalScope().fetch) && !/Firefox/.test(navigator.userAgent);
}
function ht() {
  return Ci("mt-event-queue");
}
var O = {
    DEFAULT_REQUEST_TIMEOUT: 1e4,
    EVENTS_KEY: "events",
    EVENT_DELIVERY_VERSION: "1.0",
    MAX_PERSISTENT_QUEUE_SIZE: 100,
    RETRY_EXPONENT_BASE: 2,
    SEND_METHOD: vr,
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
          (v.eventQueues[r][O.EVENTS_KEY] = v.eventQueues[r][O.EVENTS_KEY] || []),
          v.eventQueues[r][O.EVENTS_KEY].push(t),
          Object.keys(v.eventQueues[r].flushConfig).length === 0 &&
            Promise.all([e.value("metricsUrl"), e.value("requestTimeout"), e.value("postFrequency")]).then(
              function (s) {
                var n = v.eventQueues[r].flushConfig;
                ((n.metricsUrl = s[0]), (n.requestTimeout = s[1]), (n.postFrequency = s[2]));
              },
            ),
          e.value("maxPersistentQueueSize").then(function (s) {
            return ((s = s || O.MAX_PERSISTENT_QUEUE_SIZE), v.trimEventQueues(v.eventQueues, s), t);
          })
        );
      } else return Promise.resolve(null);
    },
    trimEventQueues: function (e, t) {
      var r = Object.keys(e);
      r.length &&
        r.forEach(function (s) {
          var n = e[s][O.EVENTS_KEY];
          n &&
            n.length &&
            n.length > t &&
            (ht().warn(
              "eventQueue overflow, deleting LRU events: size is: " + n.length + " which is over max size: " + t,
            ),
            (e[s][O.EVENTS_KEY] = n.slice(-t)));
        });
    },
    resetTopicQueue: function (e) {
      v.eventQueues[e] && (v.eventQueues[e][O.EVENTS_KEY] = null);
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
            var n = Math.pow(O.RETRY_EXPONENT_BASE, s.retryAttempts) * r;
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
          ht().warn(
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
            var g;
            switch (t) {
              case O.SEND_METHOD.IMAGE:
                g = v.sendEventsViaImage(e);
                break;
              case O.SEND_METHOD.BEACON:
                g = v.sendEventsViaBeacon(e);
                break;
              case O.SEND_METHOD.AJAX_SYNCHRONOUS:
                g = v.sendEventsViaAjax(e, !1);
                break;
              case O.SEND_METHOD.AJAX:
              default:
                g = v.sendEventsViaAjax(e, !0);
                break;
            }
            return g;
          }
        } else if (o) return v.scheduleNextTopicRetryAttempt(e);
      });
    },
    sendEventsViaImage: function (e) {
      var t = e.topic(),
        r = Promise.resolve();
      return (
        v.eventQueues[t] &&
          (r = zi(e, function (s) {
            var n = s.metricsUrl,
              a = n.indexOf("?") == -1 ? "?" : "&",
              o = n + a + "responseType=image",
              c = v.eventQueues[t][O.EVENTS_KEY];
            (c &&
              c.length &&
              c.forEach(function (l) {
                var h = v.createQueryParams(l);
                if (h) {
                  var g = o + "&" + h,
                    m = new Image(),
                    k = v.eventQueues[t][O.PROPERTIES_KEY];
                  (k && k.anonymous && m.setAttribute("crossOrigin", "anonymous"), (m.src = g));
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
      if (v.eventQueues[s] && v.eventQueues[s][O.EVENTS_KEY]) {
        var n = v.eventQueues[s][O.EVENTS_KEY],
          a = rr(n);
        (v.resetTopicQueue(s),
          a &&
            (r = zi(e, function (o) {
              var c = o.metricsUrl,
                l = o.requestTimeout,
                h = function () {
                  v.resetTopicRetryAttempts(s);
                },
                g = function (oe, J) {
                  if (J >= 400 && J < 500) h();
                  else {
                    var Ae = v.eventQueues[s][O.EVENTS_KEY] || [];
                    ((v.eventQueues[s][O.EVENTS_KEY] = n.concat(Ae)), v.scheduleNextTopicRetryAttempt(e));
                  }
                },
                m = v.eventQueues[s][O.PROPERTIES_KEY] || {},
                k = { async: t, timeout: l };
              (m.anonymous && (k.withCredentials = !1), aa.makeAjaxRequest(c, "POST", a, h, g, k));
            })));
      }
      return r;
    },
    sendEventsViaBeacon: function (e) {
      var t = Promise.resolve();
      if (!d.isFunction(navigator.sendBeacon))
        return (ht().error("navigator.sendBeacon() is not available in the environment"), t);
      var r = e.topic(),
        s = v.eventQueues[r];
      if (s) {
        var n = s[O.PROPERTIES_KEY];
        if (n && n.anonymous)
          I_()
            ? (t = v.sendEventsViaFetch(e, { keepalive: !0 }))
            : nu()
              ? (t = v.sendEventsViaAjax(e, !1))
              : (t = v.sendEventsViaImage(e));
        else {
          var a = rr(s[O.EVENTS_KEY]);
          a &&
            (v.resetTopicQueue(r),
            (t = zi(e, function (o) {
              var c = o.metricsUrl,
                l = di.globalScope().Blob,
                h = new l([a], { type: "application/json" }),
                g = navigator.sendBeacon(c, h);
              g || ht().error("navigator.sendBeacon() was unable to queue the data for transfer");
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
        var o = rr(n[O.EVENTS_KEY]);
        if (o) {
          v.resetTopicQueue(s);
          var c = n[O.PROPERTIES_KEY] || {};
          r = zi(e, function (l) {
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
        (v.eventQueues[r].postIntervalToken = di.globalScope().setInterval(function () {
          (ht().debug("MetricsKit: triggering postIntervalTimer for " + r + " at " + new Date().toString()),
            v.sendEventsForTopicConfig(e));
        }, t)));
    },
    resetTopicPostInterval: function (e) {
      v.eventQueues[e] &&
        (di.globalScope().clearInterval(v.eventQueues[e].postIntervalToken),
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
        var s = v.eventQueues[r][O.EVENTS_KEY],
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
        (v.eventQueues[e][O.PROPERTIES_KEY] = t));
    },
  };
function ir() {
  return v;
}
function rr(i) {
  var e = null;
  if (i && i.length) {
    var t = {};
    ((t.deliveryVersion = O.EVENT_DELIVERY_VERSION), (t.postTime = Date.now()), (t[O.EVENTS_KEY] = i));
    try {
      e = JSON.stringify(t);
    } catch (r) {
      ht().error("Error stringifying events as JSON: " + r);
    }
  }
  return e;
}
function P_(i) {
  return rr([i]);
}
function au(i) {
  return i.value("metricsUrl").then(function (e) {
    var t = e + "/" + O.URL_DELIVERY_VERSION + "/";
    return t + i.topic();
  });
}
function zi(i, e) {
  if (!d.isFunction(e)) {
    ht().warn("No callback function is provided for resolveTopicConfigWithCallback()");
    return;
  }
  if (d.isString(i.metricsUrl) && !d.isFunction(i.value)) {
    var t = d.isFunction(i.topic) ? i.topic() : i.topic,
      r = i.metricsUrl + "/" + O.URL_DELIVERY_VERSION + "/" + t,
      s = i.requestTimeout || O.DEFAULT_REQUEST_TIMEOUT,
      n = i.postFrequency;
    return e({ requestTimeout: Math.min(s, n), metricsUrl: r });
  } else
    return Promise.all([i.value("requestTimeout"), i.value("postFrequency"), au(i)]).then(function (a) {
      var o = a[0] || O.DEFAULT_REQUEST_TIMEOUT,
        c = a[1],
        l = a[2];
      return e({ requestTimeout: Math.min(o, c), metricsUrl: l });
    });
}
function w_(i) {
  return Promise.all([i.value("requestTimeout"), i.value("postFrequency")]).then(function (e) {
    var t = e[0] || O.DEFAULT_REQUEST_TIMEOUT,
      r = e[1];
    return Math.min(t, r);
  });
}
function A_(i, e, t) {
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
          if (t) return v.sendEvents(O.SEND_METHOD.AJAX, !0);
          !v.eventQueues[r].postIntervalToken && v.postIntervalEnabled && v.setTopicPostInterval(i, n);
        });
  });
}
function R_(i, e) {
  return i
    ? e === vr.BEACON_SYNCHRONOUS
      ? C_()
      : d.isString(e) && v.objectContainsValue(vr, e)
        ? v.sendEvents(e, !0)
        : d.isFunction(navigator.sendBeacon)
          ? v.sendEvents(O.SEND_METHOD.BEACON, !0)
          : nu()
            ? v.sendEvents(O.SEND_METHOD.AJAX_SYNCHRONOUS, !0)
            : v.sendEvents(O.SEND_METHOD.IMAGE, !0)
    : v.sendEvents(O.SEND_METHOD.AJAX, !0);
}
function C_() {
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
var ve = function (e) {
  Me.apply(this, arguments);
};
ve.prototype = Object.create(Me.prototype);
ve.prototype.constructor = ve;
ve.prototype._utResetQueue = function () {
  for (var e in ir().eventQueues) ir().resetTopicPostInterval(e);
  ir().eventQueues = {};
};
ve.prototype._record = function (e, t, r) {
  return A_(e, t, r);
};
ve.prototype.SEND_METHOD = vr;
ve.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ve.prototype.flushUnreportedEvents = function (e, t) {
  return R_.apply(null, arguments);
};
ve.prototype.setProperties = function (e, t) {
  (Object.getPrototypeOf(ve.prototype).setProperties.call(this, e, t), ir().setProperties(e, t));
};
ve.prototype.cleanup = function () {
  (Object.getPrototypeOf(ve.prototype).cleanup.call(this), this._utResetQueue());
};
var Ei = function (e) {
  Me.apply(this, arguments);
};
Ei.prototype = Object.create(Me.prototype);
Ei.prototype.constructor = Ei;
Ei.prototype._record = function (e, t) {
  var r = P_(t);
  if (r)
    return Promise.all([au(e), w_(e)]).then(
      function (s) {
        var n = s[0],
          a = s[1],
          o = { timeout: a };
        (this._topicPropsCache[e.topic()] && this._topicPropsCache[e.topic()].anonymous && (o.withCredentials = !1),
          aa.makeAjaxRequest(n, "POST", r, null, null, o));
      }.bind(this),
    );
};
var O_ = Ci("mt-event-queue");
function C(i) {
  this._config = i;
}
C.prototype._document = function () {
  if (typeof document < "u") return document;
  throw "metricskit-delegates-html.environment HTML delegate 'document' object not found";
};
C.prototype._window = function () {
  if (typeof window < "u") return window;
  throw "metricskit-delegates-html.environment HTML delegate 'window' object not found";
};
C.prototype.browser = function () {
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
C.prototype.cookie = function () {
  return this._window().document.cookie;
};
C.prototype.pageUrl = function () {
  return this._window().location.href;
};
C.prototype.parentPageUrl = function () {
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
C.prototype.pixelRatio = function () {
  return this._window().devicePixelRatio;
};
C.prototype.screenHeight = function () {
  return this._window().screen.height;
};
C.prototype.screenWidth = function () {
  return this._window().screen.width;
};
C.prototype.userAgent = function () {
  return this._window().navigator.userAgent;
};
C.prototype.windowInnerHeight = function () {
  return this._window().innerHeight;
};
C.prototype.windowInnerWidth = function () {
  return this._window().innerWidth;
};
C.prototype.windowOuterHeight = function () {
  return this._window().outerHeight;
};
C.prototype.windowOuterWidth = function () {
  return this._window().outerWidth;
};
C.prototype.timeOriginOffset = function () {
  var e = null,
    t = this._window().performance;
  return (t && t.timing && (e = t.timing.navigationStart), e);
};
C.prototype.app = function () {};
C.prototype.appVersion = function () {};
C.prototype.capacityData = function () {};
C.prototype.capacityDataAvailable = function () {};
C.prototype.capacityDisk = function () {};
C.prototype.capacitySystem = function () {};
C.prototype.capacitySystemAvailable = function () {};
C.prototype.connectionType = function () {};
C.prototype.dsId = function () {};
C.prototype.hardwareBrand = function () {};
C.prototype.hardwareFamily = function () {};
C.prototype.hardwareModel = function () {};
C.prototype.hostApp = function () {};
C.prototype.hostAppVersion = function () {};
C.prototype.os = function () {};
C.prototype.osBuildNumber = function () {};
C.prototype.osLanguages = function () {};
C.prototype.osVersion = function () {};
C.prototype.resourceRevNum = function () {};
C.prototype.storeFrontCountryCode = function () {};
C.prototype.storeFrontHeader = function () {};
C.prototype.storeFrontLanguage = function () {};
C.prototype.userType = function () {};
function De(i) {
  (wt.call(this), (this._proxyEventRecorder = i), (this.SEND_METHOD = i.SEND_METHOD));
}
De.prototype = Object.create(wt.prototype);
De.prototype.constructor = De;
De.prototype._recordEvent = function (e, t) {
  return this._proxyEventRecorder.recordEvent.apply(this._proxyEventRecorder, arguments);
};
De.prototype.flushUnreportedEvents = function (e, t) {
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
De.prototype._flushUnreportedEvents = function () {
  return this._proxyEventRecorder.flushUnreportedEvents.apply(this._proxyEventRecorder, arguments);
};
De.prototype.sendMethod = function () {
  return this._proxyEventRecorder.sendMethod.apply(this._proxyEventRecorder, arguments);
};
De.prototype.setProperties = function (e, t) {
  return this._proxyEventRecorder.setProperties.apply(this._proxyEventRecorder, arguments);
};
De.prototype.cleanup = function () {
  return this._proxyEventRecorder.cleanup.apply(this._proxyEventRecorder, arguments);
};
var ot = function (e, t) {
  var r = this.getOrCreateConfig(e);
  (Ne.call(this, e, { environment: new C(r), eventRecorder: new De(new ve(r)) }),
    (this.immediateEventRecorder = new De(new Ei(r))),
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
ot.prototype = Object.create(Ne.prototype);
ot.prototype.constructor = ot;
ot.prototype.setEnvironment = function (i) {
  return (di.setDelegate(i), Ne.prototype.setEnvironment.call(this, i));
};
ot.prototype.setNetwork = function (i) {
  return (i && ((this.network = i), aa.setDelegate(i)), this);
};
ot.prototype.setLogger = function (i) {
  return (i && ((this.logger = i), O_.setDelegate(i)), this);
};
ot.prototype.setImmediateEventRecorder = function (i) {
  if (i) {
    var e = Object.create(this.immediateEventRecorder);
    (Object.assign(e, i), (this.immediateEventRecorder = e));
  }
  return this;
};
ot.prototype.configSources = function () {
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
      Jb.exponentialBackoff(e.config.network.makeAjaxRequest.bind(e.config.network, o, "GET", null), s, n);
    }).catch(n);
  });
};
var Oi = function () {};
Oi.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Oi.prototype.localStorageObject = Q.localStorageObject;
Oi.prototype.sessionStorageObject = Q.sessionStorageObject;
Oi.prototype.platformIdentifier = function (e, t, r) {};
var D_ = function () {
  ((this.environment = new Oi()), (this.logger = Ci("mt-client-constraints")));
};
function rn(i, e, t, r) {
  if (!d.isDefined(i) || !d.isDefinedNonNullNonEmpty(e) || !d.isFunction(r)) return i;
  var s = e.split(".");
  return sn(i, s, null, [], null, t, r);
}
function sn(i, e, t, r, s, n, a) {
  if (d.isFunction(i)) return s || i;
  if ((r.push(t), e.length === 0)) return (a(i, t, r.slice(1).join("."), s), s || i);
  if (!d.isDefined(i)) return s || i;
  var o = n ? i : {},
    c = e.shift();
  if (c.length > 2 && c.indexOf("[]") === c.length - 2) {
    ((c = c.slice(0, -2)), r.push(c), d.extend(o, i));
    var l = o[c];
    if (d.isDefinedNonNull(l)) {
      var h = l.map(function (m, k) {
        var W = n ? l : l.slice();
        return (sn(m, e.slice(), k, r, W, n, a), r.pop(), W[k]);
      });
      o[c] = h;
    }
  } else {
    var g = i[c];
    (d.extend(o, i), (o = sn(g, e, c, r, o, n, a)));
  }
  return (r.pop(), s ? ((s[t] = o), s) : o);
}
var Wo = {
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
function N_(i) {
  var e = Wo[i];
  return (d.isDefinedNonNull(e) || (e = Wo.all), e);
}
function M_(i, e, t) {
  if (!d.isObject(e) || !d.isObject(t)) return !1;
  var r = t.matchType,
    s = t.matches;
  if (!d.isDefinedNonNullNonEmpty(s)) return !1;
  var n = N_(r),
    a = n.initMatchValue;
  return (
    rn(e, i, !1, function (o, c, l, h) {
      var g = Object.keys(s).every(function (m) {
        var k = s[m];
        return d.isDefinedNonNull(Ft[m]) ? Ft[m](c, h, k) : !1;
      });
      a = n.accumulateMatchResult(a, g);
    }),
    !!a
  );
}
function L_(i, e) {
  return !!d.isObject(e) && e.hasOwnProperty(i) && d.isDefinedNonNullNonEmpty(e[i]);
}
function U_(i, e, t) {
  if (!d.isObject(e)) return !1;
  var r = e[i];
  return e.hasOwnProperty(i) && t.indexOf(r) > -1;
}
function x_(i, e, t) {
  if (!d.isObject(e) || !d.isArray(t)) return !1;
  var r = e[i];
  return e.hasOwnProperty(i) && t.indexOf(r) === -1;
}
var Ft = { nonEmpty: L_, valueMatches: U_, nonValueMatches: x_, nestedFieldMatches: M_ },
  br = { OVERRIDE_FIELD_VALUE: "overrideFieldValue" },
  oa = function () {};
oa.prototype.constrainedValue = function (e, t, r) {
  var s = e && e.hasOwnProperty(r) ? e[r] : null;
  return this.applyConstraintRules(s, t);
};
oa.prototype.applyConstraintRules = function (e, t) {
  var r = e;
  if (t) {
    var s = t.denylisted || t.blacklisted;
    s ? (r = null) : t.hasOwnProperty(br.OVERRIDE_FIELD_VALUE) && (r = t.overrideFieldValue);
  }
  return r;
};
var F_ = ge.exceptionString,
  Ee = function (e) {
    this._constraintsInstance = e;
  };
Ee.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Ee.prototype.constrainedValue = function (e, t, r, s) {
  throw F_("field_actions.Base", "constrainedValue");
};
Ee.prototype.performAction = function (e, t, r, s) {
  return (d.isDefinedNonNull(s) && !d.isEmptyObject(s) && (e = this.constrainedValue(e, s, r, t)), e);
};
function ou(i) {
  i = i || "";
  var e = cu(i).split("/"),
    t,
    r,
    s;
  return (
    i.indexOf("//") === -1 ? (t = e[0]) : (t = e[2]), (r = t.substring(t.indexOf("@") + 1)), (s = r.split(":")[0]), s
  );
}
function K_(i) {
  var e = ou(i).split("."),
    t = e[e.length - 1],
    r = e[e.length - 2],
    s = 2;
  return (t && t.length === 2 && r && (r.length === 2 || r in V_()) && (s = 3), e.slice(-1 * s).join("."));
}
function V_() {
  var i = { com: !0, org: !0, net: !0, edu: !0, gov: !0 };
  return i;
}
function cu(i, e) {
  var t = i || "",
    r = t.split("?"),
    s = r[0],
    n = B_(r[1]).split("&"),
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
function B_(i) {
  var e = i || "";
  return e.split("#")[0];
}
function $_(i, e) {
  var t = i || "",
    r = e || [],
    s = r.reduce(function (n, a) {
      var o = new RegExp(a.searchPattern, a.flags),
        c = a.replaceVal;
      return n.replace(o, c);
    }, t);
  return s;
}
var nn = "-",
  H_ = "z";
function lu(i) {
  if (!d.isDefinedNonNull(i) || !d.isInteger(i.idVersion)) return "0";
  var e = ge.uuid(),
    t = i.generatedIdSeparator || H_,
    r = j_(i) + nn + e || "",
    s = r
      .split(nn)
      .map(function (n) {
        var a = parseInt(n, 16);
        return ge.convertNumberToBaseAlphabet(a, ge.base61Alphabet);
      })
      .join(t);
  return s;
}
function j_(i) {
  var e = [i.idVersion];
  return (
    i.time && e.push(i.time),
    e
      .map(function (t) {
        return t.toString(16);
      })
      .join(nn)
  );
}
function uu(i, e, t, r) {
  var s = this.storageKey(r, t, e),
    n = this._constraintsInstance.system.environment,
    a = Q.objectFromStorage(n.localStorageObject(), s) || {};
  return (
    (a.value = this.idString(a, e)),
    this.rulesHaveLifespan(e) &&
      (!d.isNumber(a.expirationTime) || this.timeExpired(a.expirationTime)) &&
      (a.expirationTime = this.expirationTime(e.lifespan)),
    Q.saveObjectToStorage(n.localStorageObject(), s, a),
    (i = a.value),
    i
  );
}
var Go = {};
function q_(i, e, t, r) {
  var s = this.storageKey(r, t, e),
    n = Go[s];
  return (n || ((n = uu.apply(this, arguments)), (Go[s] = n)), n);
}
var ca = "_",
  W_ = "mtId",
  ne = function () {
    Ee.apply(this, arguments);
  };
ne.prototype = Object.create(Ee.prototype);
ne.prototype.constructor = ne;
ne.prototype.SCOPE_STRATEGIES = { ALL: "all", MAIN_DOMAIN: "mainDomain" };
ne.prototype.rulesHaveLifespan = function (e) {
  return ((e = e || {}), d.isNumber(e.lifespan));
};
ne.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
ne.prototype.storageKey = function (e, t, r) {
  var s = this.scope(t, r);
  return this.storageKeyPrefix(r, e) + (s ? ca + s : "");
};
ne.prototype.storageKeyPrefix = function (e, t) {
  return e && d.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : W_ + ca + t;
};
ne.prototype.scope = function (e, t) {
  var r = "";
  if (t && (t.namespace && (r += t.namespace), t.scopeStrategy)) {
    var s;
    switch (t.scopeStrategy) {
      case this.SCOPE_STRATEGIES.MAIN_DOMAIN:
        var n = t.scopeFieldName;
        s = K_(e[n]) || "unknownDomain";
        break;
      case this.SCOPE_STRATEGIES.ALL:
      default:
        s = this.SCOPE_STRATEGIES.ALL;
        break;
    }
    (r.length && (r += ca), (r += s));
  }
  return r;
};
ne.prototype.idString = function (e, t) {
  var r = e ? e.value : null,
    s = r;
  return ((!r || (d.isNumber(e.expirationTime) && this.timeExpired(e.expirationTime))) && (s = this.generateId(t)), s);
};
ne.prototype.generateId = function (e) {
  return (
    (e = e || {}),
    lu({
      idVersion: this.generatedIdVersion(),
      time: this.expirationTime(e.lifespan),
      generatedIdSeparator: this.generatedIdSeparator(e.tokenSeparator),
    })
  );
};
ne.prototype.generatedIdVersion = function () {
  return 4;
};
ne.prototype.idTokenSeparator = function () {
  return "-";
};
ne.prototype.generatedIdSeparator = function (e) {
  return e || "z";
};
ne.prototype.timeExpired = function (e) {
  return e <= Date.now();
};
ne.prototype.constrainedValue = function (e, t, r, s) {
  return (
    r &&
      t &&
      !d.isEmptyObject(t) &&
      (t.persistIdForSession === !0 ? (e = q_.apply(this, arguments)) : (e = uu.apply(this, arguments))),
    e
  );
};
var du = function (e, t) {
  ((this._base = e),
    (this._idAction = new ne(t)),
    this._idAction.setDelegate({
      storageKey: function (s, n, a) {
        return this.storageKeyPrefix() + "_" + this.scope(n, a);
      }.bind(this._idAction),
      storageKeyPrefix: function () {
        return "mtClientId";
      },
    }));
};
du.prototype.constrainedValue = function (e, t) {
  var r = t;
  t &&
    d.isNumber(t.expirationPeriod) &&
    ((r = d.extend({}, t)), (r.lifespan = r.expirationPeriod), delete r.expirationPeriod);
  var s = e ? e.clientId : null,
    n = this._idAction.performAction(s, "clientId", e, r);
  return this._base.applyConstraintRules(n, t);
};
var bt = function () {
  Ee.apply(this, arguments);
};
bt.prototype = Object.create(Ee.prototype);
bt.prototype.constructor = bt;
bt.prototype.SCOPES = {
  HOSTNAME: "hostname",
  FULL: "full",
  FULL_WITHOUT_PARAMS: "fullWithoutParams",
  FULL_WITH_REPLACEMENTS: "fullWithReplacements",
};
bt.prototype.constrainedValue = function (e, t) {
  if (e && t && t.scope)
    switch (t.scope) {
      case this.SCOPES.HOSTNAME:
        e = ou(e);
        break;
      case this.SCOPES.FULL_WITHOUT_PARAMS:
        e = cu(e, t.allowedParams);
        break;
      case this.SCOPES.FULL_WITH_REPLACEMENTS:
        e = $_(e, t.replacements);
        break;
      case this.SCOPES.FULL:
    }
  return e;
};
var hu = function (e) {
  ((this._base = e), (this._urlAction = new bt()));
};
hu.prototype.constrainedValue = function (e, t) {
  var r = e ? e.parentPageUrl : null,
    s = this._urlAction.performAction(r, "parentPageUrl", e, t);
  return this._base.applyConstraintRules(s, t);
};
var G_ = function (i) {
    ((this.base = new oa()), (this.clientId = new du(this.base, i)), (this.parentPageUrl = new hu(this.base)));
  },
  la = function (e) {
    this._fieldHandlers = new G_(e);
  };
la.prototype.applyConstraints = function (e, t) {
  return (t && t.fieldConstraints && (e = this.applyFieldConstraints(e, t.fieldConstraints)), e);
};
la.prototype.applyFieldConstraints = function (e, t) {
  if (t) {
    var r = {},
      s,
      n,
      a;
    for (a in t)
      ((n = t[a]),
        (e.hasOwnProperty(a) || n.generateValue === !0 || n.hasOwnProperty(br.OVERRIDE_FIELD_VALUE)) &&
          (a in this._fieldHandlers
            ? (s = this._fieldHandlers[a].constrainedValue(e, n))
            : (s = this._fieldHandlers.base.constrainedValue(e, n, a)),
          (r[a] = s)));
    for (a in r) e[a] = r[a];
    e = Kr.mergeAndCleanEventFields(e);
  }
  return e;
};
function pu(i, e, t, r) {
  var s = i || {};
  if (
    ((r =
      r ||
      function (l, h, g) {
        return l[g] || {};
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
var zt = function (e) {
  this.treatment = new la(e);
};
zt.prototype.constraintsForEvent = function (e, t, r) {
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
zt.prototype.eventMatchesRule = function (e, t) {
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
zt.prototype.eventMatchesNonEmptyFields = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !d.isArray(t)
        ? (r = !0)
        : (r = t.every(function (s) {
            return Ft.nonEmpty(s, e);
          }))),
    r
  );
};
zt.prototype.eventMatchesFieldValues = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !d.isObject(t) || d.isEmptyObject(t)
        ? (r = !0)
        : (r = Object.keys(t).every(function (s) {
            var n = t[s];
            return Ft.valueMatches(s, e, n);
          }))),
    r
  );
};
zt.prototype.updateRules = function (e, t) {
  return pu(e, t, "fieldConstraints");
};
var fu = function () {};
fu.prototype.performAction = function (e, t, r) {
  return r !== !0 ? e : null;
};
var yu = function () {};
yu.prototype.performAction = function (e, t, r) {
  return !e || !d.isArray(r) || d.isEmptyArray(r)
    ? e
    : ((e = d.extend({}, e)),
      r.forEach(function (s) {
        delete e[s];
      }),
      d.isEmptyObject(e) ? null : e);
};
var mu = function () {};
mu.prototype.performAction = function (e, t, r) {
  if (!e || !d.isArray(r) || d.isEmptyArray(r)) return e;
  var s = {};
  return (
    r.forEach(function (n) {
      d.isDefinedNonNull(e[n]) && (s[n] = e[n]);
    }),
    d.isEmptyObject(s) ? null : s
  );
};
var Y_ = "mtSessionization",
  gu = "_",
  z_ = "-",
  fs = "sessionId",
  ys = "sessionStartTime",
  et = function (e) {
    this._constraintsInstance = e;
  };
et.prototype.performAction = function (e, t, r) {
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
    o = Q.objectFromStorage(a.localStorageObject(), n) || {};
  (this._shouldCreateNewSession(t, o, r) &&
    ((o.sessionId = this._generateSessionId(r)),
    (o.rawFirstEventTimeInSession = t.eventTime),
    (o.firstEventTimeInSession = e.eventTime),
    (o.eventCount = 0)),
    (o.rawLastEventTimeInSession = t.eventTime),
    (o.lastEventTimeInSession = e.eventTime),
    (o.eventCount += 1),
    Q.saveObjectToStorage(a.localStorageObject(), n, o));
  var c = this._getSessionFieldNames(r);
  return ((e[c.sessionId] = o.sessionId), r.sessionStartTime && (e[c.sessionStartTime] = o.firstEventTimeInSession), e);
};
et.prototype._storageKey = function (e, t) {
  var r = this._scope(e, t);
  return this._storageKeyPrefix(t) + (d.isEmptyString(r) ? "" : gu + r);
};
et.prototype._storageKeyPrefix = function (e) {
  return e && d.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : Y_;
};
et.prototype._scope = function (e, t) {
  var r = "";
  return (
    d.isDefined(t) &&
      (d.isString(t.namespace) && (r += t.namespace),
      d.isString(t.scopeFieldName) &&
        d.isDefinedNonNull(e[t.scopeFieldName]) &&
        ((r += gu), (r += e[t.scopeFieldName].toString()))),
    r
  );
};
et.prototype._generateSessionId = function (e) {
  return lu({ idVersion: 1, time: Date.now(), idTokenSeparator: z_, generatedIdSeparator: e.tokenSeparator });
};
et.prototype._shouldCreateNewSession = function (e, t, r) {
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
et.prototype._resetSession = function (e, t, r) {
  var s = r.sessionResetOptions,
    n = this._constraintsInstance._constraintGenerator;
  if (d.isDefinedNonNull(n) && d.isDefinedNonNull(n.eventMatchesTreatment) && n.eventMatchesTreatment(t, s)) {
    var a = this._storageKey(e, r),
      o = this._constraintsInstance.system.environment;
    return (Q.saveObjectToStorage(o.localStorageObject(), a, void 0), s.newSessionAfterReset);
  }
  return !0;
};
et.prototype._getSessionFieldNames = function (e) {
  var t = { sessionId: fs, sessionStartTime: ys };
  return (
    d.isDefinedNonNull(e.sessionFields) &&
      (d.isDefinedNonNullNonEmpty(e.sessionFields[fs]) && (t.sessionId = e.sessionFields[fs]),
      d.isDefinedNonNullNonEmpty(e.sessionFields[ys]) && (t.sessionStartTime = e.sessionFields[ys])),
    t
  );
};
var ua = function () {};
ua.prototype.performAction = function (e, t, r) {
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
ua.prototype._clampToBoundary = function (e, t) {
  var r = e % t,
    s = e - r,
    n = s + t;
  return r <= t / 2 ? s : n;
};
var it = {
    blacklistedEventAction: "blacklisted",
    denylistedEventAction: "denylisted",
    blacklistedFieldsAction: "blacklistedFields",
    denylistedFieldsAction: "denylistedFields",
    whitelistedFieldsAction: "whitelistedFields",
    allowlistedFieldsAction: "allowlistedFields",
    sessionizationFieldsAction: "sessionizationFields",
    clampingEventAction: "clamping",
  },
  vu = function (e) {
    var t = new fu(),
      r = new yu(),
      s = new mu(),
      n = new et(e),
      a = new ua();
    ((this._actions = {}),
      (this._actions[it.blacklistedEventAction] = t),
      (this._actions[it.denylistedEventAction] = t),
      (this._actions[it.blacklistedFieldsAction] = r),
      (this._actions[it.denylistedFieldsAction] = r),
      (this._actions[it.whitelistedFieldsAction] = s),
      (this._actions[it.allowlistedFieldsAction] = s),
      (this._actions[it.sessionizationFieldsAction] = n),
      (this._actions[it.clampingEventAction] = a));
  };
vu.prototype.getAction = function (e) {
  return this._actions[e];
};
var hi = "start",
  Q_ = "value",
  X_ = function (e, t) {
    var r = -1,
      s = r;
    if (!d.isDefinedNonNull(t) || e.length === 0 || (d.isDefinedNonNull(e[0]) && t < e[0][hi])) return r;
    if (e[e.length - 1][hi] < t) s = e.length - 1;
    else
      for (var n = 0; n < e.length; n++) {
        var a = e[n][hi];
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
  ki = function () {
    Ee.apply(this, arguments);
  };
ki.prototype = Object.create(Ee.prototype);
ki.prototype.constructor = ki;
ki.prototype.constrainedValue = function (e, t) {
  var r = t ? t.precision : 0,
    s = t ? t.buckets : null;
  if (d.isDefinedNonNullNonEmpty(s)) {
    s = s.slice().sort(function (o, c) {
      return o[hi] - c[hi];
    });
    var n = X_(s, e),
      a = s[n];
    d.isDefinedNonNull(a) && (e = a[Q_]);
  } else d.isNumber(e) && d.isNumber(r) && r > 0 && (e = Math.floor(e / r) * r);
  return e;
};
var J_ = "mt_serial_number",
  _r = "exp",
  an = "sn",
  tt = function (e) {
    ((e = e || {}),
      (this._nextRotationTime = e.nextRotationTime || Number.POSITIVE_INFINITY),
      (this._storageKey = e.namespace || J_),
      (this._initialSerialNumber = e.initialSerialNumber || 0),
      (this._rotationPeriod = e.rotationPeriod || Number.POSITIVE_INFINITY));
  };
tt.prototype.setDelegate = function (e) {
  d.attachDelegate(this, e);
};
tt.prototype.localStorageObject = function () {
  return Q.localStorageObject();
};
tt.prototype.getNextSerialNumber = function (e) {
  var t = this._storageKey,
    r = this._getCurrentSerialNumberData(t),
    s = r[an];
  return (
    (e = d.isNumber(e) ? e : 1),
    (s = parseInt(s, 10)),
    isNaN(s) && (s = this._initialSerialNumber),
    (s = this._increaseSerialNumber(s, e)),
    (r[an] = s),
    Q.saveObjectToStorage(this.localStorageObject(), this._storageKey, r),
    s
  );
};
tt.prototype.resetSerialNumber = function () {
  var e = Q.objectFromStorage(this.localStorageObject(), this._storageKey);
  d.isDefinedNonNull(e) && this._resetSerialNumber(e[_r]);
};
tt.prototype.getTime = function () {
  return Date.now();
};
tt.prototype._increaseSerialNumber = function (e, t) {
  return e + t;
};
tt.prototype._getCurrentSerialNumberData = function (e) {
  var t = Q.objectFromStorage(this.localStorageObject(), e),
    r,
    s;
  for (
    t
      ? ((r = t[_r]), (r = parseInt(r, 10)), (t[_r] = r = isNaN(r) ? this._nextRotationTime : r))
      : (r = this._nextRotationTime - this._rotationPeriod);
    !t || this.getTime() >= r;
  )
    ((r = s = r + this._rotationPeriod), (t = this._resetSerialNumber(s)));
  return t;
};
tt.prototype._resetSerialNumber = function (e) {
  var t = {};
  return (
    (t[_r] = e),
    (t[an] = this._initialSerialNumber),
    Q.saveObjectToStorage(this.localStorageObject(), this._storageKey, t),
    t
  );
};
var Yo = "_",
  Z_ = "mtTimestamp",
  ct = function () {
    (Ee.apply(this, arguments),
      (this._storage = this._constraintsInstance.system.environment.localStorageObject()),
      (this._precisionEndTimeCache = {}),
      (this._serialNumberGenerator = null));
  };
ct.prototype = Object.create(Ee.prototype);
ct.prototype.constructor = ct;
ct.prototype.constrainedValue = function (e, t, r, s) {
  var n = e;
  if (d.isNumber(e) && d.isObject(t) && d.isNumber(t.precision) && t.precision > 0) {
    var a = this._computePrecisionStartTime(e, t);
    ((this._serialNumberGenerator = new tt({
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
ct.prototype._computeTimestamp = function (e, t) {
  return e + t;
};
ct.prototype._persistentStorageKey = function (e, t) {
  var r = e.namespace ? Yo + e.namespace : "";
  return (e.storageKeyPrefix || Z_) + r + Yo + t;
};
ct.prototype._computePrecisionStartTime = function (e, t) {
  var r = t.precision;
  return Math.floor(e / r) * r;
};
var ms = "_",
  eT = "mtHash",
  tT = "salt",
  iT = 10,
  Be = function () {
    Ee.apply(this, arguments);
  };
Be.prototype = Object.create(Ee.prototype);
Be.prototype.constructor = Be;
function bu(i, e) {
  var t = i.namespace ? ms + i.namespace : "";
  return (i.storageKeyPrefix || eT) + t + ms + tT + ms + e;
}
function rT() {
  for (var i = ""; i.length < iT;) i += ge.randomHexCharacter();
  return i;
}
function sT(i, e) {
  return [i, e]
    .map(function (t) {
      var r = 0;
      if (d.isDefinedNonNullNonEmpty(t))
        for (var s = 0; s < t.length; s++) {
          var n = t.charCodeAt(s);
          r = (r << 5) - r + n;
        }
      var a = Math.abs(r);
      return ((a = parseInt(a, 16)), ge.convertNumberToBaseAlphabet(a, ge.base62Alphabet));
    })
    .join("");
}
Be.prototype.constrainedValue = function (e, t, r, s) {
  return d.isDefinedNonNullNonEmpty(e)
    ? this._loadPlatformBasedSalt(t, s).then(function (n) {
        return sT(e, n);
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
      a = rT();
    ((r = { salt: a, expirationTime: this.expirationTime(s) }), Q.saveObjectToStorage(n, bu(e, t), r));
  }
  return r.salt;
};
Be.prototype._retrieveSaltFromStorage = function (e, t) {
  var r = this._constraintsInstance.system.environment.localStorageObject(),
    s = Q.objectFromStorage(r, bu(e, t));
  return s;
};
var si = { ID: "idGenerator", NUMBER: "numberDeres", TIME: "timeDeres", URL: "urlDeres", HASH: "hash" },
  _u = function (e) {
    ((this.actions = {}),
      (this.actions[si.ID] = new ne(e)),
      (this.actions[si.NUMBER] = new ki(e)),
      (this.actions[si.TIME] = new ct(e)),
      (this.actions[si.URL] = new bt(e)),
      (this.actions[si.HASH] = new Be(e)));
  };
_u.prototype.getAction = function (e) {
  return this.actions[e];
};
var Tu = function (e) {
  ((this._eventActions = new vu(e)), (this._fieldActions = new _u(e)));
};
Tu.prototype.applyConstraints = function (e, t) {
  var r = e;
  if (t && !d.isEmptyObject(t)) {
    var s = [],
      n = this;
    if (t.fieldActions && !d.isEmptyObject(t.fieldActions)) {
      var a = !1,
        o = r;
      ((o = Object.keys(t.fieldActions).reduce(function (h, g) {
        var m = t.fieldActions[g];
        if (m) {
          var k = m.denylisted || m.blacklisted,
            W = m.treatmentType,
            oe = n._fieldActions.getAction(W);
          h = rn(h, g, !1, function (J, Ae, Xt, Jt) {
            if (k) (delete Jt[Ae], (a = !0));
            else if (m.hasOwnProperty(br.OVERRIDE_FIELD_VALUE)) ((Jt[Ae] = m[br.OVERRIDE_FIELD_VALUE]), (a = !0));
            else if (oe) {
              var lt = oe.performAction(J, g, r, m);
              ((Jt[Ae] = lt),
                lt instanceof Promise &&
                  s.push(
                    lt.then(function (Ui) {
                      rn(o, g, !0, function (ue, Zt, Vu, Bu) {
                        Vu === Xt && (Bu[Zt] = Ui);
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
            c.forEach(function (g) {
              var m = n._eventActions.getAction(g);
              if (m) {
                var k = t.eventActions[g];
                h = m.performAction(h, e, k);
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
var nT = "filters",
  aT = "any",
  Qi = "eventActions",
  gs = "fieldActions";
function oT(i, e) {
  var t = i || {};
  return (cT(t, e), lT(t, e), t);
}
function cT(i, e) {
  i[Qi] || (i[Qi] = {});
  var t = i[Qi],
    r = e[Qi];
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
function lT(i, e) {
  (i[gs] || (i[gs] = {}),
    pu(i, e, gs, function (t, r, s) {
      return t[s] && t[s].treatmentType === r[s].treatmentType ? t[s] : {};
    }));
}
var $r = function (e) {
  ((this._constraintsInstance = e), (this.treatment = new Tu(e)));
};
$r.prototype._combineTreatments = function (e, t, r) {
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
$r.prototype.constraintsForEvent = function (e, t, r) {
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
        return (s.eventMatchesTreatment(e, c) && (o = oT(o, c)), o);
      }, null);
      return a;
    });
};
$r.prototype.eventMatchesTreatment = function (e, t) {
  var r = t[nT];
  if (!d.isDefinedNonNull(r)) return !0;
  if (d.isString(r)) return r === aT;
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
      if (Ft[a]) return Ft[a](s, e, o);
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
var uT = {
  constraintProfile: function (e) {
    return this.value("constraints.defaultProfile", e);
  },
  constraintProfiles: function (e) {
    return this.value("defaultTreatmentProfiles", e);
  },
};
function dT(i) {
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
function hT(i) {
  return ((d.isFunction(i.constraintProfile) && d.isFunction(i.constraintProfiles)) || d.attachMethods(i, uT, i), i);
}
var Hr = function (e, t) {
  if (!dT(e)) throw new Error('The topic config is not a valid instance of "mt-client-config".');
  ((this._isInitialized = !1),
    (this._topicConfig = e),
    (this._constraintGenerator = null),
    (this.system = new D_()),
    d.setDelegates(this.system, t || {}));
};
Hr.prototype._getConstraintGenerator = function () {
  var e = this;
  return this._constraintGenerator
    ? Promise.resolve(this._constraintGenerator)
    : this._topicConfig.value("treatmentProfiles").then(function (t) {
        return (
          d.isDefinedNonNull(t) ? (e._constraintGenerator = new $r(e)) : (e._constraintGenerator = new zt(e)),
          e._constraintGenerator
        );
      });
};
Hr.prototype.constraintsForEvent = function (e, t) {
  var r = this;
  return this._getConstraintGenerator().then(function (s) {
    return s.constraintsForEvent(e, r._topicConfig, t);
  });
};
Hr.prototype.applyConstraintTreatments = function (e, t) {
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
var vs, bs;
function Eu() {
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
function ku() {
  return ["delegateApp", "hardwareBrand", "storeFrontCountryCode", "storeFrontHeader", "storeFrontLanguage"];
}
function pT() {
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
function Su() {
  return (bs || (bs = Eu().concat(ku())), bs);
}
function fT() {
  return (vs || (vs = Su().concat(pT())), vs);
}
var yT = d.attachDelegate,
  mT = ge.cryptoRandomBase62String,
  jr = ge.exceptionString,
  zo;
function X(i) {
  if (!d.isDefinedNonNull(i)) throw new Error("A processor instance is required for creating BaseEventHandler.");
  ((this._processor = i),
    zo ||
      ((zo = !0),
      Su().forEach(function (e) {
        X.prototype[e] = function (t) {
          var r;
          return (t && t.hasOwnProperty(e) ? (r = t[e]) : (r = this.environment()[e]()), r);
        };
      })));
}
X._className = "eventHandlers.base";
X.prototype.setDelegate = function (e) {
  return yT(this, e);
};
X.prototype.environment = function () {
  throw jr(X._className, "environment");
};
X.prototype.eventRecorder = function () {
  throw jr(X._className, "eventRecorder");
};
X.prototype.metricsData = function () {
  throw jr(X._className, "metricsData");
};
X.prototype.processMetricsData = function () {
  throw jr(X._className, "processMetricsData");
};
X.prototype.knownFields = function () {
  return fT();
};
X.prototype.baseVersion = function () {
  return 1;
};
X.prototype.clientEventId = function (e) {
  return (e && e.clientEventId) || mT(!0);
};
X.prototype.connection = function (e) {
  return (e && e.connection) || this.environment().connectionType();
};
X.prototype.dsId = function (e) {
  return (e && e.dsId) || this.environment().dsId();
};
X.prototype.eventTime = function (e) {
  return (e && e.eventTime) || Date.now();
};
X.prototype.eventVersion = function (e) {
  return (e && e.eventVersion) || null;
};
X.prototype.timezoneOffset = function (e) {
  return (e && e.timezoneOffset) || new Date().getTimezoneOffset();
};
X.prototype.xpPostFrequency = function (e) {
  return (e && e.xpPostFrequency) || this._processor.config.value("postFrequency");
};
X.prototype.xpSendMethod = function (i) {
  return (i && i.xpSendMethod) || this.eventRecorder().sendMethod();
};
var gT = { Base: X },
  vT = d.attachDelegate,
  Iu = ge.exceptionString,
  bT = Q.localStorageObject,
  _T = Q.sessionStorageObject,
  Qo;
function Pe() {
  Qo ||
    ((Qo = !0),
    Eu().forEach(function (i) {
      Pe.prototype[i] = function () {
        throw Iu(Pe._className, i);
      };
    }),
    ku().forEach(function (i) {
      Pe.prototype[i] = function () {};
    }));
}
Pe._className = "system.environment";
Pe.prototype.setDelegate = function (e) {
  return vT(this, e);
};
Pe.prototype.connectionType = function () {
  throw Iu(Pe._className, "connectionType");
};
Pe.prototype.dsId = function () {};
Pe.prototype.localStorageObject = bT;
Pe.prototype.sessionStorageObject = _T;
Pe.prototype.platformIdentifier = function () {};
var TT = { Environment: Pe };
function Pu() {
  this._eventData = {};
}
Pu.prototype.updateData = function () {
  d.extend.apply(null, [this._eventData].concat(Array.prototype.slice.call(arguments)));
};
var wu = { MetricsData: Pu },
  Au = TT.Environment;
function Qe() {
  Au.apply(this, arguments);
}
Qe.prototype = Object.create(Au.prototype);
Qe.prototype.constructor = Qe;
Qe.prototype.consumerId = function () {};
Qe.prototype.consumerNs = function () {};
Qe.prototype.isOffline = function () {};
Qe.prototype.videoViewportHeight = function () {};
Qe.prototype.videoViewportWidth = function () {};
var ET = d.attachDelegate,
  Ru = ge.exceptionString,
  Cu = "PlayActivityProcessor.system.eventRecorder",
  Di = function () {};
Di.prototype.setDelegate = function (e) {
  return ET(this, e);
};
Di.prototype.recordEvent = function (e, t) {
  throw Ru(Cu, "recordEvent");
};
Di.prototype.sendMethod = function () {
  throw Ru(Cu, "sendMethod");
};
Di.prototype.flushUnreportedEvents = function (e) {};
var kT = Ci("mt-metricskit-processor-play-activity"),
  ST = function () {
    ((this.environment = new Qe()), (this.eventRecorder = new Di()), (this.logger = kT));
  },
  Ou = function (e) {
    this._processor = e;
  };
Ou.prototype.applyFieldsMap = function (e, t) {
  return this._processor.config.value("fieldsMap").then(function (r) {
    return Kr.applyFieldsMap(e, t, r);
  });
};
var IT = function (e) {
    this.eventFields = new Ou(e);
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
  he = {
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
  ft = {
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
  Du = {
    ACTIVITY_TYPE: { PLAY: A.PLAY, SEEK: A.SEEK },
    ACTION_TYPE: { START: "start", STOP: "stop" },
    EVENT_TYPE: { PLAY_ACTIVITY: "playActivity", SEEK_ACTIVITY: "seekActivity" },
  },
  da = { INCLUDES_START_POSITIONS: "includesStartPositions", INCLUDES_END_POSITIONS: "includesEndPositions" },
  z = function (e, t) {
    ((this._processor = e),
      (this._activityType = t),
      (this._startMetricsDataPromise = Promise.resolve(null)),
      (this._isStopped = !1));
  };
z.ACTIVITY_TYPE = Du.ACTIVITY_TYPE;
Object.defineProperties(z.prototype, {
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
d.extend(z.prototype, ft);
z.prototype.started = function (e, t, r, s) {
  var n = this._startEventHandler(),
    a = this;
  if (n) {
    if (((this._startMetricsDataPromise = n.metricsData.apply(n, arguments)), this.type != z.ACTIVITY_TYPE.SEEK))
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
        z.ACTIVITY_TYPE.PLAY +
        '" or "' +
        z.ACTIVITY_TYPE.SEEK +
        '"',
    );
  return Promise.resolve(null);
};
z.prototype.stopped = function (e, t, r, s) {
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
        z.ACTIVITY_TYPE.PLAY +
        '" or "' +
        z.ACTIVITY_TYPE.SEEK +
        '"',
    );
  return Promise.resolve(null);
};
z.prototype._startEventHandler = function () {
  var e;
  switch (this.type) {
    case z.ACTIVITY_TYPE.PLAY:
      e = this._processor.eventHandlers.playStart;
      break;
    case z.ACTIVITY_TYPE.SEEK:
      e = this._processor.eventHandlers.seekStart;
      break;
  }
  return e;
};
z.prototype._stopEventHandler = function () {
  var e;
  switch (this.type) {
    case z.ACTIVITY_TYPE.PLAY:
      e = this._processor.eventHandlers.playStop;
      break;
    case z.ACTIVITY_TYPE.SEEK:
      e = this._processor.eventHandlers.seekStop;
      break;
  }
  return e;
};
var PT = d.isInteger,
  Ni = function (e, t, r) {
    ((this._date = new Date()),
      (this._position = t),
      this._validatePlaybackRate(e),
      (this._playbackRate = e),
      (this._logger = r));
  };
Object.defineProperties(Ni.prototype, {
  playbackRate: {
    get: function () {
      return this._playbackRate;
    },
  },
});
Ni.prototype.update = function (e, t) {
  ((this._date = new Date()), (this._position = t), this._validatePlaybackRate(e), (this._playbackRate = e));
};
Ni.prototype.estimatedTime = function (e) {
  var t;
  PT(e) ? (t = e) : (this._logger.error("VPAFKit error: position should be an integer"), (t = Math.round(e)));
  var r = t - this._position,
    s = this.playbackRate == 0 ? 1 : this.playbackRate,
    n = r / s;
  return this._date.getTime() + Math.round(n);
};
Ni.prototype._validatePlaybackRate = function (e) {
  e == 0 && this._logger.error("VPAFKit error: playbackRate should not be zero.");
};
var wT = d.attachDelegate,
  AT = d.extend,
  Nu = d.isFunction,
  RT = d.isNumber,
  Mu = wu.MetricsData,
  Lu = da.INCLUDES_START_POSITIONS,
  CT = da.INCLUDES_END_POSITIONS,
  V = function (e, t) {
    (Mu.apply(this, arguments),
      (this._processor = e),
      (this._playlist = t),
      (this._playActivity = null),
      (this._playStartPlaylistItem = null),
      (this._seekActivity = null),
      (this._timeTracker = null),
      (this._shouldGenerateTransitions = !0));
  };
V.prototype = Object.create(Mu.prototype);
V.prototype.constructor = V;
AT(V.prototype, ft);
Object.defineProperties(V.prototype, {
  shouldGenerateTransitions: {
    get: function () {
      return this._shouldGenerateTransitions;
    },
    set: function (i) {
      this._shouldGenerateTransitions = i;
    },
  },
});
V.prototype.setDelegate = function (e) {
  return wT(this, e);
};
V.prototype.playStarted = function (e, t, r) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
V.prototype.playStartedWithPlaybackRate = function (e, t, r, s) {
  var n = Promise.resolve(),
    a = this;
  if (this._hasUnstoppedActivity(this._playActivity))
    this._error("inconsistent state: did you forget to call playStopped?");
  else {
    var o = this._playlistItem(t, Lu);
    o
      ? (n = this._playStarted
          .apply(this, [o].concat(Array.prototype.slice.call(arguments, 1)))
          .then(function () {
            a.shouldGenerateTransitions && (a._timeTracker = new Ni(e, t, a._processor.system.logger));
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
V.prototype.playStopped = function (e, t, r) {
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
V.prototype.playTransitioned = function (e) {
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
V.prototype.seekStarted = function (e, t, r) {
  var s = Promise.resolve();
  if (this._hasUnstoppedActivity(this._seekActivity))
    this._error("inconsistent state: did you forget to call seekStopped?");
  else {
    var n = this._playlistItem(e, Lu);
    if (n) {
      var a = this._activityArguments.apply(this, [n].concat(Array.prototype.slice.call(arguments)));
      this._seekActivity = new z(this._processor, z.ACTIVITY_TYPE.SEEK);
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
V.prototype.seekStopped = function (e, t, r) {
  var s = Promise.resolve(),
    n = this._playlistItem(e, CT);
  if (n && this._hasUnstoppedActivity(this._seekActivity)) {
    var a = this._activityArguments.apply(this, [n].concat(Array.prototype.slice.call(arguments))),
      o = this;
    s = this._seekActivity.stopped.apply(this._seekActivity, a).catch(function (c) {
      o._error(c);
    });
  } else this._error("inconsistent state: did you forget to call seekStarted?");
  return s;
};
V.prototype.synchronize = function (e, t) {
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
V.prototype._playStarted = function (e, t, r, s) {
  var n = this._activityArguments.apply(this, [e].concat(Array.prototype.slice.call(arguments, 1)));
  return (
    (this._playStartPlaylistItem = e),
    (this._playActivity = new z(this._processor, z.ACTIVITY_TYPE.PLAY)),
    this._playActivity.started.apply(this._playActivity, n)
  );
};
V.prototype._playStopped = function (e, t, r) {
  var s = this._playStartPlaylistItem,
    n = this._activityArguments.apply(this, [s].concat(Array.prototype.slice.call(arguments)));
  return this._playActivity.stopped.apply(this._playActivity, n);
};
V.prototype._playlistItem = function (e, t) {
  var r;
  return (
    this._playlist && Nu(this._playlist.getItem) && (r = this._playlist.getItem(e, t)),
    r || this._error("unable to get item from playlist"),
    r
  );
};
V.prototype._playlistItems = function (e, t) {
  var r = [];
  return (
    this._playlist && Nu(this._playlist.getItems)
      ? (r = this._playlist.getItems(e, t))
      : this._error("unable to get items from playlist"),
    r
  );
};
V.prototype._relativePosition = function (e, t) {
  t = t || this._playlistItem(e);
  var r;
  return (t && RT(t.startOverallPosition) && (r = e - t.startOverallPosition + (t.startPosition || 0)), r);
};
V.prototype._combineEventData = function (e, t) {
  var r = this._playlist ? this._playlist.eventData : null,
    s = e ? e.eventData : null,
    n = [];
  return (r && n.push(r), s && n.push(s), this._eventData && n.push(this._eventData), t && (n = n.concat(t)), n);
};
V.prototype._activityArguments = function (e, t, r, s) {
  var n = this._relativePosition(t, e),
    a = this._combineEventData(e, Array.prototype.slice.call(arguments, 4)),
    o = [n, t, r, s].concat(a);
  return o;
};
V.prototype._generatePlaylistTransitionsIfNecessary = function (e) {
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
                    g = h.startOverallPosition,
                    m = { eventTime: t._timeTracker ? t._timeTracker.estimatedTime(g) : null };
                  return t._playStopped(g, t.TYPE.AUTOMATIC, t.PLAY_STOP_REASON.TRANSITION, m).then(function () {
                    return t._playStarted(h, g, t.TYPE.AUTOMATIC, t.PLAY_START_REASON.TRANSITION, m);
                  });
                }.bind(o),
              );
            }
          return c;
        })),
    r
  );
};
V.prototype._hasUnstoppedActivity = function (e) {
  return e && !e.isStopped;
};
V.prototype._error = function (e) {
  this._processor.system.logger.error(this.constructor.name + " error: " + e);
};
V.prototype._playlistItemComparator = function (e, t) {
  return e.startOverallPosition == t.startOverallPosition
    ? 0
    : e.startOverallPosition < t.startOverallPosition
      ? -1
      : 1;
};
var be = function (e, t) {
  V.apply(this, arguments);
};
be.prototype = Object.create(V.prototype);
be.prototype.constructor = be;
Object.defineProperty(be.prototype, "shouldGenerateTransitions", {
  get: function () {
    return !1;
  },
  set: function () {
    this._error(
      'Changing "shouldGenerateTransitions" is not allowed in HLSRollItemsMediaActivityTracker. Please use correct play activity tracker if you need to automatically generate transition play activity events ',
    );
  },
});
be.prototype.playStarted = function (e, t, r, s) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
be.prototype.playStartedWithPlaybackRate = function (e, t, r, s, n) {
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
be.prototype.jumpFromOverallPosition = function (e, t, r) {
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
be.prototype.playStopped = function (e, t, r) {
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
be.prototype.seekStarted = function (e, t, r, s) {
  var n = Promise.resolve();
  if (e < s.start * 1e3 || e > (s.start + s.duration) * 1e3)
    return (this._error("The giving overallPosition(" + e + ") is not in the given roll item's timeframe."), n);
  if (this._hasUnstoppedActivity(this._seekActivity))
    this._error("inconsistent state: did you forget to call seekStopped?");
  else {
    var a = this._playlistItem(s);
    if (a) {
      var o = this._activityArguments.apply(this, [a, e, t, r].concat(Array.prototype.slice.call(arguments, 4)));
      this._seekActivity = new z(this._processor, z.ACTIVITY_TYPE.SEEK);
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
be.prototype.seekStopped = function (e, t, r, s) {
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
be.prototype._playlistItem = function (e) {
  var t;
  return (
    this._playlist &&
      d.isFunction(this._playlist.getItemForRollItem) &&
      (t = this._playlist.getItemForRollItem(e.start * 1e3, e.duration * 1e3)),
    t || this._error("unable to get item from playlist"),
    t
  );
};
be.prototype._relativePosition = function (e, t) {
  var r;
  return d.isDefinedNonNull(t)
    ? (t && d.isNumber(t.startOverallPosition) && (r = e - t.startOverallPosition + (t.startPosition || 0)), r)
    : (this._error("please provide the active playlist item for calculating the relative position."), r);
};
var Uu = wu.MetricsData,
  _t = function (e) {
    (Uu.apply(this, arguments), (this._startOverallPosition = e), (this._startPosition = 0));
  };
_t.prototype = new Uu();
_t.prototype.constructor = _t;
Object.defineProperties(_t.prototype, {
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
var Kt = function (e, t) {
  (_t.apply(this, arguments), (this._duration = t));
};
Kt.prototype = new _t();
Kt.prototype.constructor = Kt;
Object.defineProperties(Kt.prototype, {
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
Kt.prototype.containsOverallPosition = function (e) {
  return this.startOverallPosition <= e && this.endOverallPosition > e;
};
var Qt = function () {};
Qt.prototype.RANGE_OPTIONS = da;
Object.defineProperties(Qt.prototype, { eventData: { get: function () {} } });
Qt.prototype.getItem = function (e, t) {};
Qt.prototype.getItems = function (e, t) {};
var ae = function (e) {
  (Qt.apply(this, arguments),
    (this._startPosition = e),
    (this._mainFeatureMetricsData = d.copyKeysAndValues.apply(
      null,
      [!1, !1, !1, null].concat(Array.prototype.slice.call(arguments, 1)),
    )),
    (this._rollItems = []));
};
ae.prototype = new Qt();
ae.prototype.constructor = ae;
ae.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ae.prototype.addRollInfoItems = function (e) {
  e &&
    e.length &&
    e.forEach(function (t) {
      this.addRollInfoItem(t);
    }, this);
};
ae.prototype.addRollInfoItem = function (e) {
  e && this.addRollItem(e.start * 1e3, e.duration * 1e3, e.metricsData);
};
ae.prototype.addRollItem = function (e, t) {
  var r = new Kt(e, t);
  (r.updateData.apply(r, Array.prototype.slice.call(arguments, 2)), this._addRollItem(r));
};
ae.prototype.updateMainFeatureMetricsData = function () {
  d.extend.apply(null, [this._mainFeatureMetricsData].concat(Array.prototype.slice.call(arguments)));
};
ae.prototype.getItemForRollItem = function (e, t) {
  var r = this._indexOfLastRollItemWithStartBeforePosition(e),
    s = this._rollItems[r];
  return d.isDefinedNonNull(s) && s.duration === t ? s : null;
};
ae.prototype.getItem = function (e, t) {
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
ae.prototype.getItems = function (e, t) {
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
ae.prototype._addRollItem = function (e) {
  if (e) {
    var t = this._insertionIndexForItemWithPosition(e.startOverallPosition);
    this._rollItems.splice(t, 0, e);
  }
};
ae.prototype._indexOfLastRollItemWithStartBeforePosition = function (e) {
  var t,
    r = this._rollItems[0];
  return (
    r && d.isInteger(e) && r.startOverallPosition <= e && (t = this._insertionIndexForItemWithPosition(e) - 1), t
  );
};
ae.prototype._insertionIndexForItemWithPosition = function (e) {
  for (var t = 0, r = this._rollItems.length; t < r;) {
    var s = Math.floor((t + r) / 2),
      n = this._rollItems[s];
    n.startOverallPosition > e ? (r = s) : (t = s + 1);
  }
  return t;
};
ae.prototype._mainFeatureItemWithStartOverallPosition = function (e) {
  var t = new _t(e);
  return ((t.startPosition = this._featurePlayheadProgress(e)), t.updateData(this._mainFeatureMetricsData), t);
};
ae.prototype._featurePlayheadProgress = function (e) {
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
var Mi = function (e) {
  this._processor = e;
};
Mi.prototype.createTracker = function (e) {
  var t = new V(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Mi.prototype.createHLSRollItemsMediaActivityTracker = function (e) {
  var t = new be(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Mi.prototype.createHLSVideoPlaylist = function (e) {
  var t = new ae(e);
  return (t.updateMainFeatureMetricsData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Mi.prototype.createMediaPlaylist = function (e) {
  return this.createHLSVideoPlaylist.apply(this, arguments);
};
var xu = ge.exceptionString,
  Li = function (e) {
    this._processor = e;
  };
Li.prototype.knownFields = function () {
  throw xu("PlayActivityEventHandler", "knownFields");
};
Li.prototype.eventType = function (i) {
  throw xu("PlayActivityEventHandler", "eventType");
};
Li.prototype.processMetricsData = function () {
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
      var c = Kr.processMetricsData(n, n.knownFields(), !0, e),
        l = {};
      return (
        Object.keys(c).forEach(function (h) {
          var g = c[h],
            m = Promise.resolve(g).then(function (k) {
              l[h] = k;
            });
          o.push(m);
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
var OT = d.attachDelegate,
  DT = d.extend,
  ee = function (e, t, r) {
    (Li.call(this, e), (this._defaultEventType = t), (this._reasonConstants = r), this._defaultActionType);
  };
ee.prototype = Object.create(Li.prototype);
ee.prototype.constructor = ee;
DT(ee, Du);
Object.defineProperties(ee.prototype, {
  TYPE: {
    get: function () {
      return ft.TYPE;
    },
  },
  REASON: {
    get: function () {
      return this._reasonConstants;
    },
  },
});
ee.prototype.setDelegate = function (e) {
  return OT(this, e);
};
ee.prototype.knownFields = function () {
  var e = [he.ACTION_TYPE, he.EVENT_TYPE, he.EVENT_VERSION];
  return e;
};
ee.prototype.eventType = function (e) {
  return this._defaultEventType;
};
ee.prototype.eventVersion = function (e) {
  var t = this._processor.eventHandlers.base.eventVersion(e);
  return t !== null ? t : 1;
};
ee.prototype.actionType = function (e) {
  return this._defaultActionType;
};
var Vt = function (e, t, r) {
  (ee.apply(this, arguments), (this._defaultActionType = ee.ACTION_TYPE.START));
};
Vt.prototype = Object.create(ee.prototype);
Vt.prototype.constructor = Vt;
Vt.prototype.metricsData = function (e, t, r, s) {
  var n = { position: e, overallPosition: t, startType: r, startReason: s },
    a = Array.prototype.slice.call(arguments, 4);
  return this.processMetricsData.apply(this, [n].concat(a));
};
var Bt = function (e, t, r) {
  (ee.apply(this, arguments), (this._defaultActionType = ee.ACTION_TYPE.STOP));
};
Bt.prototype = Object.create(ee.prototype);
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
  a === ee.EVENT_TYPE.SEEK_ACTIVITY && (o.startAssetId = n.assetId);
  var c = Array.prototype.slice.call(arguments, 5);
  return this.processMetricsData.apply(this, [o].concat(c));
};
var ha = gT.Base,
  _e = function (e) {
    ha.apply(this, arguments);
  };
_e.prototype = Object.create(ha.prototype);
_e.prototype.constructor = _e;
_e.prototype.environment = function () {
  return this._processor.system.environment;
};
_e.prototype.eventRecorder = function () {
  return this._processor.system.eventRecorder;
};
_e.prototype.knownFields = function () {
  var e = ha.prototype
    .knownFields()
    .concat([
      he.ACTION_TYPE,
      he.CONSUMER_ID,
      he.CONSUMER_NS,
      he.DS_ID,
      he.IS_OFFLINE,
      he.VIDEO_VIEWPORT_HEIGHT,
      he.VIDEO_VIEWPORT_WIDTH,
    ]);
  return e;
};
_e.prototype.consumerId = function (e) {
  var t = he.CONSUMER_ID;
  return e && t in e ? e[t] : this.environment().consumerId();
};
_e.prototype.consumerNs = function (e) {
  var t = he.CONSUMER_NS;
  return e && t in e ? e[t] : this.environment().consumerNs();
};
_e.prototype.isOffline = function (e) {
  var t = he.IS_OFFLINE;
  return e && t in e ? e[t] : this.environment().isOffline();
};
_e.prototype.videoViewportHeight = function (e) {
  var t = he.VIDEO_VIEWPORT_HEIGHT;
  return e && t in e ? e[t] : this.environment().videoViewportHeight();
};
_e.prototype.videoViewportWidth = function (e) {
  var t = he.VIDEO_VIEWPORT_WIDTH;
  return e && t in e ? e[t] : this.environment().videoViewportWidth();
};
_e.prototype.metricsData = function () {
  var e = Array.prototype.slice.call(arguments),
    t = Kr.processMetricsData(this, this.knownFields(), !0, e);
  return t;
};
var NT = function (e) {
    ((this.base = new _e(e)),
      (this.playStart = new Vt(e, ee.EVENT_TYPE.PLAY_ACTIVITY, ft.PLAY_START_REASON)),
      (this.playStop = new Bt(e, ee.EVENT_TYPE.PLAY_ACTIVITY, ft.PLAY_STOP_REASON)),
      (this.seekStart = new Vt(e, ee.EVENT_TYPE.SEEK_ACTIVITY, ft.SEEK_START_REASON)),
      (this.seekStop = new Bt(e, ee.EVENT_TYPE.SEEK_ACTIVITY, ft.SEEK_STOP_REASON)));
  },
  Fu = function (e) {
    if (!d.isDefinedNonNull(e)) throw new Error("No delegate is provided to PlayActivityProcessor");
    ((this._initCalled = !1),
      (this._delegatePackage = e),
      (this.system = new ST()),
      (this.config = this._delegatePackage.config),
      (this.eventHandlers = new NT(this)),
      (this.utils = new IT(this)),
      (this.mediaActivityTracker = new Mi(this)));
  };
Fu.prototype.init = function () {
  var e = Promise.resolve();
  return (
    this._initCalled ||
      ((this._initCalled = !0),
      this._delegatePackage &&
        (d.setDelegates(this.eventHandlers, this._delegatePackage), d.setDelegates(this.system, this._delegatePackage)),
      hT(this.config),
      (e = this._delegatePackage.init()),
      (this._constraints = new Hr(this.config, { environment: this.system.environment }))),
    e
  );
};
Fu.prototype.cleanup = function () {
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
const tE = new Map([
    [S.playbackPlay, "play"],
    [S.hlsLevelLoaded, "hlsMetadataLoaded"],
    [S.playbackPause, "pause"],
    [S.playbackScrub, "scrub"],
    [S.playbackSeek, "seek"],
    [S.playbackSkip, "skip"],
    [S.playbackStop, "stop"],
    [S.playerExit, "exit"],
  ]),
  iE = {
    [P.EXITED_APPLICATION]: "EXIT",
    [P.FAILED_TO_LOAD]: "FAILURE",
    [P.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM]: "PLAY_OTHER",
    [P.NATURAL_END_OF_TRACK]: "COMPLETE",
    [P.PLAYBACK_PAUSED_DUE_TO_INACTIVITY]: "INACTIVITY",
    [P.SCRUB_BEGIN]: "SEEK",
    [P.TRACK_SKIPPED_BACKWARDS]: "SEEK",
    [P.TRACK_SKIPPED_FORWARDS]: "SEEK",
    [P.PLAYBACK_SUSPENDED]: "CLOSE_PLAYER",
    [$g.NEXT_ITEM]: "NEXT",
  },
  ke = {
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
  rE = {
    TYPE: { MANUAL: "manual", AUTOMATIC: "automatic" },
    PLAY_START_REASON: {
      PLAY: ke.PLAY,
      PLAY_OTHER: ke.PLAY_OTHER,
      UNPAUSE: "unpause",
      NEXT: ke.NEXT,
      BUFFERING: ke.BUFFERING,
    },
    PLAY_STOP_REASON: {
      COMPLETE: "complete",
      TRANSITION: ke.TRANSITION,
      PLAY_OTHER: ke.PLAY_OTHER,
      PAUSE: "pause",
      SEEK: ke.SEEK,
      NEXT: ke.NEXT,
      INTERRUPTION: ke.INTERRUPTION,
      BACKGROUND: "background",
      EXIT: "exit",
      INACTIVITY: "inactivity",
      BUFFERING: ke.BUFFERING,
      ERROR: "error",
      FAILURE: "failure",
      UNKNOWN: ke.UNKNOWN,
      CLOSE_PLAYER: "closePlayer",
      SKIP_TO_LIVE: ke.SKIP_TO_LIVE,
    },
  };
var MT = ((i) => (
  (i.SEEK_STARTED = "seekStarted"),
  (i.SEEK_STOPPED = "seekStopped"),
  (i.PLAY_STARTED = "playStarted"),
  (i.PLAY_STOPPED = "playStopped"),
  i
))(MT || {});
function sE(i) {
  return Math.round(i * 1e3);
}
function nE() {
  return Array.isArray(navigator.languages)
    ? navigator.languages
    : typeof navigator.language == "string"
      ? [navigator.language]
      : [];
}
function aE(i) {
  return { delegatedPlayback: i.playbackTargetIsWireless ? "Airplay" : "None" };
}
function oE(i) {
  return i.seekReasonType === qe.Interval;
}
function Ku(i, e) {
  if (i == null) throw new Error(e);
}
function cE(i, e) {
  Ku(i, `${e ?? "PAF"} Tracker: Attempted to track event without first calling createTracker()`);
}
function lE(i, e) {
  Ku(i, `${e ?? "PAF"} Tracker: Attempted to create tracker without first calling configure()`);
}
const fe = _.createChild("ctp"),
  Tr = class Tr {
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
        (this.rtcTracker = e.services.playActivity?.getTrackerByType(Rl)),
        (this._isConfigured = !0));
    }
    handleEvent(e, t, r) {
      e === E.playInitiated
        ? (fe.debug("ClickToPlayTracker.handleEvent", e, t), this.registerPlay(t.item, t.timestamp))
        : e === E.mediaCanPlay &&
          (fe.debug("ClickToPlayTracker.handleEvent", e, t), this.trackPlay(this.instance.nowPlayingItem, t.timestamp));
    }
    registerPlay(e, t) {
      if (!this.active || e === void 0) {
        fe.debug("Not registring play: inactive");
        return;
      }
      if (t === void 0) {
        fe.warn(`registerPlay timestamp value for item ${e.id} is missing, discarding`);
        return;
      }
      return (
        this.tracking !== void 0 && fe.warn(`Replacing item ${this.tracking.item.id} with item ${e.id}`),
        fe.debug(`Registering ${e.id} initiated at ${t}`),
        (this.tracking = { item: e, initiatedTimestamp: t }),
        this.tracking
      );
    }
    trackPlay(e, t) {
      if (!this.active || e === void 0) {
        fe.debug("Not tracking play: inactive");
        return;
      }
      if (this.tracking === void 0) {
        fe.warn("ClickToPlayTracker.trackPlay called without a registered tracking item");
        return;
      }
      const r = t ?? Date.now(),
        s = this.tracking.initiatedTimestamp,
        n = r - s;
      if ((fe.debug(`trackPlay: item=${e.id}, initiated=${s}, started=${r}, timestampDiff=${n}`), s > r)) {
        fe.warn("Initiated timestamp is not before started timestamp, ignoring");
        return;
      }
      const a = this.getReportingAgent(e);
      if (a === void 0) {
        fe.warn(`No reporting agent for ${e.id}, discarding`);
        return;
      }
      return (
        fe.info(`Reporting playback success after ${n}ms`),
        a.issueReportingEvent(Tr.EVENT_ID, {
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
        fe.warn("Could not get RTCReportingAgent from RTCStreamingTracker service");
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
        fe.warn(`RTCReportingAgent is not associated with item ${e.id}`);
        return;
      }
      return this.rtcTracker.reportingAgent;
    }
  };
qr(Tr, "EVENT_ID", 4101);
let Xo = Tr;
function LT() {
  const i = {};
  i.version = dl();
  const e = al();
  ((i.hlsJSURL = e.hls),
    (i.rtcJSURL = e.rtc),
    (i.hlsJSVersion = window.Hls !== void 0 ? window.Hls.version : "not-loaded"));
  const t = Nb();
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
    (i.devFlags = Object.entries(oi).reduce(function (s, [n, a]) {
      return { ...s, [n]: a.value };
    }, {})),
    i
  );
}
const uE = {
  get info() {
    return LT();
  },
  ...oi,
};
export {
  Xu as $,
  Vp as A,
  T as B,
  Se as C,
  S as D,
  E,
  Fn as F,
  P as G,
  dl as H,
  li as I,
  uE as J,
  al as K,
  eE as L,
  mi as M,
  FT as N,
  le as O,
  Fe as P,
  xe as Q,
  Ce as R,
  Lr as S,
  p as T,
  XT as U,
  $g as V,
  ot as W,
  ZT as X,
  Nb as Y,
  fh as Z,
  xi as _,
  Ve as a,
  KT as a0,
  Ns as a1,
  dc as a2,
  Lh as a3,
  Oe as a4,
  ch as a5,
  fi as a6,
  Zu as a7,
  ph as a8,
  pt as a9,
  ie as aA,
  GT as aB,
  G as aC,
  gb as aD,
  rE as aE,
  Bh as aF,
  ce as aG,
  Rl as aH,
  Xo as aI,
  JT as aJ,
  Ul as aK,
  QT as aL,
  We as aM,
  ev as aN,
  yh as aa,
  Si as ab,
  BT as ac,
  VT as ad,
  hc as ae,
  ln as af,
  at as ag,
  st as ah,
  Ar as ai,
  f as aj,
  F as ak,
  u as al,
  $T as am,
  Od as an,
  lg as ao,
  jT as ap,
  Te as aq,
  uh as ar,
  dh as as,
  hh as at,
  HT as au,
  rh as av,
  te as aw,
  Pt as ax,
  M as ay,
  uc as az,
  sE as b,
  qe as c,
  YT as d,
  aE as e,
  qT as f,
  zT as g,
  uo as h,
  jp as i,
  qp as j,
  iE as k,
  _ as l,
  tE as m,
  Fu as n,
  MT as o,
  Bm as p,
  oE as q,
  cE as r,
  w as s,
  lE as t,
  qs as u,
  I as v,
  Ku as w,
  j as x,
  nE as y,
  Im as z,
};
