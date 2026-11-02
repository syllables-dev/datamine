var _d = Object.defineProperty;
var Ed = (i, e, t) => (e in i ? _d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t));
var is = (i, e, t) => (Ed(i, typeof e != "symbol" ? e + "" : e, t), t);
import { _ as Na } from "./main.js";
function Sd(i, e = 1) {
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
function fi(i) {
  return Sd(i, 1 / 0);
}
function Sc(...i) {
  const e = fi(i)
    .map((r) => (r instanceof URL ? r.pathname : r))
    .filter((r) => typeof r == "string" && r.trim().length !== 0);
  if (e.length === 0) return "";
  let t = e[0];
  for (let r = 1; r < e.length; r++) t = t.replace(/[/]+$/, "") + "/" + e[r].replace(/^[/]+/, "");
  return (/^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")), t);
}
function kd(i) {
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
const kc = typeof FastBoot < "u" ? FastBoot.require("buffer").Buffer : typeof window < "u" ? window.Buffer : Buffer;
function Ct(i) {
  const e = new Map();
  return function (...t) {
    const r = Id(t);
    if (e.has(r)) return e.get(r);
    const s = i(...t);
    return (e.set(r, s), s);
  };
}
function Id(i) {
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
function Nr() {
  let i = rs() + rs();
  for (; i.length < 16;) i += rs();
  return i.slice(0, 16);
}
function rs() {
  return Math.random().toString(16).substring(2);
}
function _i(i) {
  if (i === void 0) return !1;
  const e = typeof i == "string" ? i : i.id;
  return /^[a|i|l|p]{1}\.[a-zA-Z0-9-]+$/.test(e);
}
const Pd = Ct((i) => /^(a\.)?[a-zA-Z0-9]+$/.test(i));
function Xt() {
  return globalThis?.process?.versions?.node !== void 0 || typeof globalThis?.FastBoot < "u";
}
function kt() {
  return Xt();
}
const Ic = Ct(Xt() ? (i) => kc.from(i, "base64").toString("binary") : (i) => window.atob(i));
Ct(Xt() ? (i) => kc.from(i).toString("base64") : (i) => window.btoa(i));
const Ad = (i, e = 250, t = { isImmediate: !1 }) => {
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
  Pn = (i, e) => !!i && !!e && [].every.call(i, (t, r) => t === e[r]);
function wd(i) {
  if (!i || (i.startsWith("http") && !i.includes("?"))) return {};
  try {
    const e = i.split("?")[1] ?? i;
    return Rd(e, "&", decodeURIComponent);
  } catch {
    return {};
  }
}
function Rd(i, e = "&", t = (r) => r) {
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
const La = () => {},
  Xe = (i) => {
    i.then(La, La);
  },
  $t = Ct((i) => {
    const e = Ic(i);
    return An(e);
  });
function Cd(i = []) {
  return Array.isArray(i) ? i : [i];
}
const An = Ct((i) => {
    const e = i.length,
      t = new ArrayBuffer(e),
      r = new Uint8Array(t);
    for (let s = 0; s < e; s++) r[s] = i.charCodeAt(s);
    return r;
  }),
  Pc = Ct((i) => {
    const e = i.length,
      t = new ArrayBuffer(e * 2),
      r = new Uint16Array(t);
    for (let s = 0; s < e; s++) r[s] = i.charCodeAt(s);
    return r;
  }),
  it = Ct((i) => {
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
function je(i, e) {
  return Object.prototype.hasOwnProperty.call(Object(i), e);
}
function dt(i) {
  const t = Object.prototype.toString.call(i).toLowerCase().slice(8, -1);
  switch (t) {
    case "set":
      return new Set([...i].map((r) => dt(r)));
    case "map":
      return new Map([...i].map(([r, s]) => [dt(r), dt(s)]));
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
      return new s(dt(r.buffer), r.byteOffset, t === "dataview" ? r.byteLength : r.length);
    }
    case "array":
    case "object": {
      const r = Array.isArray(i) ? [] : {};
      for (const s in i) je(i, s) && (r[s] = dt(i[s]));
      return r;
    }
    default:
      return i;
  }
}
function Od(i, e) {
  return e.split(".").reduce((t, r) => {
    if (t !== void 0) return t[r];
  }, i);
}
function Dd(i) {
  if (typeof i != "object") throw new TypeError("Source is not an Object");
  for (const e in i) if (je(i, e)) return !1;
  return !0;
}
function Nd(i, e, t) {
  return e.split(".").reduce((r, s, n, a) => {
    const o = n === a.length - 1,
      c = je(r, s),
      l = r[s] instanceof Object,
      h = r[s] === null;
    if (!o && c && (!l || h))
      throw new TypeError(`Value at ${a.slice(0, n + 1).join(".")} in keypath is not an Object.`);
    return o ? ((r[s] = t), i) : c ? r[s] : (r[s] = {});
  }, i);
}
function Ld(i, e, t = !1) {
  return (
    t && (i = Object.keys(i).reduce((r, s) => ((r[i[s]] = s), r), {})),
    Object.keys(i).reduce((r, s) => {
      const n = i[s],
        a = typeof n == "function" ? n() : Od(e, n);
      return (a && Nd(r, s, a), r);
    }, {})
  );
}
function pt(i = "", e = document.cookie) {
  const t = e.match(new RegExp(`(?:^|;\\s*)${i}=([^;]*)`));
  if (t) return t[1];
}
function Md(i = "", e = document.cookie) {
  const t = new RegExp(`(?:^|;\\s*)${i}=([^;]*)`, "g");
  return (e.match(t) || []).map((r) => r.replace(new RegExp(`^;?\\s*${i}=`), ""));
}
function wn(i, e, t = "", r = 14, s, n) {
  const a = new Date();
  ((s = s ?? window), (n = n ?? (/\./.test(s.location.hostname) ? s.location.hostname : "")));
  const o = n.length > 0 ? `domain=${n}; ` : "";
  a.setTime(a.getTime() + r * 24 * 60 * 60 * 1e3);
  let c = "";
  (s.location.protocol === "https:" && (c = "; secure"),
    (s.document.cookie = `${i}=${e}; expires=${a.toUTCString()}; ${o}path=${t}${c}`));
}
function Ls(i, e, t) {
  wn(i, "", "/", 0, e, t);
}
function Ac() {
  let i = !1;
  try {
    i = typeof sessionStorage < "u";
  } catch {}
  return i;
}
function Rn() {
  let i;
  return (Ac() && (i = sessionStorage), i);
}
function Cn() {
  let i = !1;
  try {
    i = typeof localStorage < "u";
  } catch {}
  return i;
}
function He() {
  let i;
  return (Cn() && (i = localStorage), i);
}
function Ud(i) {
  if (!Cn()) return;
  const e = He().getItem(i);
  if (e !== null) return e;
}
function xd(i) {
  const e = Ud(i);
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return;
    }
}
function Fd(i, e) {
  if (Cn()) {
    if (!e) {
      He().setItem(i, "");
      return;
    }
    He().setItem(i, JSON.stringify(e));
  }
}
class Ot {
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
    return typeof window < "u" && Ac() && this.dispatchNamespace;
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
      Rn()?.setItem(r, JSON.stringify(t));
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
let Kd = function (e) {
  return Vd(e) && !Bd(e);
};
function Vd(i) {
  return !!i && typeof i == "object";
}
function Bd(i) {
  let e = Object.prototype.toString.call(i);
  return e === "[object RegExp]" || e === "[object Date]" || jd(i);
}
let $d = typeof Symbol == "function" && Symbol.for,
  Hd = $d ? Symbol.for("react.element") : 60103;
function jd(i) {
  return i.$$typeof === Hd;
}
function qd(i) {
  return Array.isArray(i) ? [] : {};
}
function pr(i, e) {
  return e.clone !== !1 && e.isMergeableObject(i) ? Ht(qd(i), i, e) : i;
}
function Wd(i, e, t) {
  return i.concat(e).map(function (r) {
    return pr(r, t);
  });
}
function Yd(i, e) {
  if (!e.customMerge) return Ht;
  let t = e.customMerge(i);
  return typeof t == "function" ? t : Ht;
}
function Gd(i) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(i).filter(function (e) {
        return i.propertyIsEnumerable(e);
      })
    : [];
}
function Ma(i) {
  return Object.keys(i).concat(Gd(i));
}
function zd(i, e, t) {
  let r = {};
  return (
    t.isMergeableObject(i) &&
      Ma(i).forEach(function (s) {
        r[s] = pr(i[s], t);
      }),
    Ma(e).forEach(function (s) {
      !t.isMergeableObject(e[s]) || !i[s] ? (r[s] = pr(e[s], t)) : (r[s] = Yd(s, t)(i[s], e[s], t));
    }),
    r
  );
}
function Ht(i, e, t) {
  ((t = t || {}), (t.arrayMerge = t.arrayMerge || Wd), (t.isMergeableObject = t.isMergeableObject || Kd));
  let r = Array.isArray(e),
    s = Array.isArray(i);
  return r === s ? (r ? t.arrayMerge(i, e, t) : zd(i, e, t)) : pr(e, t);
}
Ht.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (r, s) {
    return Ht(r, s, t);
  }, {});
};
const Ua = (i) =>
  !!(
    i &&
    typeof i.hasAttributes == "function" &&
    typeof i.hasRelationships == "function" &&
    typeof i.hasViews == "function" &&
    typeof i.serialize == "function"
  );
class Qd {
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
    return JSON.parse(Ic(e));
  }
}
const w = {
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
  Xd = {
    400: w.REQUEST_ERROR,
    401: w.UNAUTHORIZED_ERROR,
    403: w.ACCESS_DENIED,
    404: w.NOT_FOUND,
    405: w.NOT_FOUND,
    413: w.REQUEST_ERROR,
    414: w.REQUEST_ERROR,
    429: w.QUOTA_EXCEEDED,
    500: w.SERVER_ERROR,
    501: w.NOT_FOUND,
    503: w.SERVICE_UNAVAILABLE,
  },
  ar = {
    "-1003": w.MEDIA_LICENSE,
    "-1004": w.DEVICE_LIMIT,
    "-1017": w.GEO_BLOCK,
    1010: w.NOT_FOUND,
    2002: w.AUTHORIZATION_ERROR,
    2034: w.TOKEN_EXPIRED,
    3059: w.DEVICE_LIMIT,
    3063: w.SUBSCRIPTION_ERROR,
    3076: w.CONTENT_UNAVAILABLE,
    3082: w.CONTENT_RESTRICTED,
    3084: w.STREAM_UPSELL,
    3770: w.AGE_VERIFICATION_REQUIRED,
    5002: w.SERVER_ERROR,
    180202: w.PLAYREADY_CBC_ENCRYPTION_ERROR,
    190121: w.WIDEVINE_CDM_EXPIRED,
  };
function wc(i) {
  return ar[i];
}
const Jd = new Set([
  w.CONTENT_EQUIVALENT,
  w.CONTENT_UNAVAILABLE,
  w.CONTENT_UNSUPPORTED,
  w.SERVER_ERROR,
  w.SUBSCRIPTION_ERROR,
  w.UNSUPPORTED_ERROR,
  w.USER_INTERACTION_REQUIRED,
]);
function xa(i) {
  return i !== void 0 && i instanceof m;
}
function Zd(i) {
  return typeof i != "string" ? !1 : /mk-[0-9]{3,}/.test(i);
}
const Dr = class extends Error {
  static isMKError(e) {
    return xa(e);
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
    if (!Zd(e)) throw new Dr("mk-000", w.INVALID_ERROR_ID, { description: `Invalid error id format: ${e}` });
    if (t === void 0 || !(t in w)) throw new Dr("mk-001", w.INVALID_ERROR_REASON, `Invalid error reason: ${t}`);
    ((r = r ?? {}),
      typeof r == "string" ? (r = { description: r }) : r instanceof Error && (r = { origin: r }),
      r.description === void 0 &&
        r.origin !== void 0 &&
        (r.description = xa(r.origin) ? r.origin.description : r.origin.message));
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
let m = Dr;
is(m, "Reason", w);
Object.assign(m, w);
class p extends m {
  constructor(e, t) {
    (Jd.has(e) && (t = t ?? e), super("mk-007", e, { description: t }));
  }
  static playActivityError(e) {
    return new this(w.PLAY_ACTIVITY, e);
  }
  static parseError(e) {
    return new this(w.PARSE_ERROR, e);
  }
  static responseError(e) {
    const { status: t, statusText: r } = e,
      s = Xd[t] || w.NETWORK_ERROR,
      n = new this(s, r || `${t}`);
    return ((n.data = e), n);
  }
  static serverError(e) {
    return new Lr(e);
  }
  static internalError(e) {
    return new this(w.INTERNAL_ERROR, e);
  }
}
class Lr extends p {
  get response() {
    return this.data;
  }
  get dialog() {
    return this.response.dialog;
  }
  constructor(e, t) {
    const r = ar[e.failureType ?? 0] || ar[e.errorCode ?? 0] || ar[e.status] || t || w.UNKNOWN_ERROR;
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
function eh(i = []) {
  const e = {};
  return (
    i.forEach((t) => {
      t.charAt(0) === "-" ? ((t = t.substr(1)), (e[t] = !1)) : (e[t] = !0);
    }),
    e
  );
}
const th = (i) => typeof i != "function";
function ji(i) {
  return i === void 0 || th(i) ? i : i();
}
function Rc(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function ss(i) {
  return typeof i == "function";
}
function Bt(i) {
  return typeof i == "string";
}
function q(i, e) {
  return Bt(i) ? (e?.trim !== !1 ? i.trim() : i).length === 0 : e?.strict === !1;
}
function ih(i) {
  return typeof i == "boolean";
}
function rh(i) {
  return ih(i)
    ? !i
    : function (...e) {
        return !i(...e);
      };
}
const Ms = rh(q);
function Us(i, e) {
  const t = e.path.map((r, s) => (s === 0 ? e.encode(r) : `[${e.encode(r)}]`)).join("");
  return i === null ? t : `${t}=${e.encode(i)}`;
}
const sh = {
    comma: function (e, t) {
      return Us(e.join(","), t);
    },
    repeat: function (e, t) {
      return e
        .map((r) => Us(String(r), t))
        .filter((r) => r.length > 0)
        .join("&");
    },
    bracket: function (e, t) {
      return e
        .map(function (r) {
          return t.next(r, { ...t, path: [...t.path, ""] });
        })
        .filter(Ms)
        .join("&");
    },
    index: function (e, t) {
      return e
        .map(function (r, s) {
          return t.next(r, { ...t, path: [...t.path, String(s)] });
        })
        .filter(Ms)
        .join("&");
    },
  },
  nh = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (r) {
          return t.next(e[r], { ...t, path: t.path.concat(r) });
        })
        .filter(Ms)
        .join("&");
    },
  },
  ah = (i) => encodeURIComponent(String(i)),
  oh = (i) => String(i);
function ch(i, e) {
  return !!(
    (i === void 0 && e?.skipUndefined !== !1) ||
    (i === null && e?.skipNull !== !1) ||
    (q(i) && e?.skipEmptyString !== !1)
  );
}
function lh(i, e) {
  if (!i) return "";
  let t = "";
  if ((e?.prefix === !0 ? (t = "?") : Bt(e?.prefix) && (t = e.prefix), Bt(i))) return t + i.replace(/^[?&]+/, "");
  const r = ss(e?.arrayFormat) ? e.arrayFormat : sh[e?.arrayFormat ?? "comma"],
    s = ss(e?.objectFormat) ? e.objectFormat : nh[e?.objectFormat ?? "bracket"];
  function n(l, h) {
    return ch(l, e) ? "" : Rc(l) ? s(l, h) : Array.isArray(l) ? r(l, h) : Us(l, h);
  }
  const a = e?.sort ?? ((...l) => 0);
  let o = ah;
  ss(e?.encode) ? (o = e.encode) : e?.encode === !1 && (o = oh);
  const c = s(i, { path: [], next: n, encode: o, sort: a });
  return c === "" ? "" : t + c;
}
function Mr(i, e, t) {
  Rc(e) && ((t = e), (e = ""));
  const r = Sc([i, e ?? ""]);
  let s = "?";
  r.endsWith("&") || r.endsWith("?") ? (s = "") : r.includes("?") && (s = "&");
  const n = t !== void 0 ? lh(t, { prefix: s }) : "";
  return r + n;
}
function uh(i, e) {
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
function ns(i, e, t) {
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
function dh(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function M(i) {
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
        dh(i, s, t[s]);
      }));
  }
  return i;
}
function hh(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(i, s).enumerable;
      })),
      t.push.apply(t, r));
  }
  return t;
}
function Fa(i, e) {
  return (
    (e = e ?? {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
      : hh(Object(e)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    i
  );
}
const as = {
  browser: [
    [
      /^(itunes|music|tv)\/([\w.]+)\s/i,
      (i) =>
        Fa(
          M(
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
      (i) => M({ name: "webview", variant: "facebook", mobile: !0 }, L(i[1])),
    ],
    [
      /(instagram|snapchat)[/ ]([-\w.]+)/i,
      (i) => M({ name: "webview", variant: i[1].trim().toLowerCase(), mobile: !0 }, L(i[2])),
    ],
    [
      /musical_ly(?:.+app_?version\/|_)([\w.]+)/i,
      (i) => M({ name: "webview", variant: "tiktok", mobile: !0 }, L(i[1])),
    ],
    [/twitter/i, () => ({ name: "webview", variant: "twitter", mobile: !0 })],
    [/ wv\).+?(?:version|chrome)\/([\w.]+)/i, (i) => M({ name: "webview", mobile: !0 }, L(i[1]))],
    [/electron\/([\w.]+) safari/i, (i) => M({ name: "electron", mobile: !1 }, L(i[1]))],
    [
      /tesla\/(.*?(20\d\d\.([-\w.])+))/i,
      (i) => Fa(M({ name: "other", variant: "tesla", mobile: !1 }, L(i[2])), { version: i[1] }),
    ],
    [
      /(samsung|huawei)browser\/([-\w.]+)/i,
      (i) =>
        M(
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
    [/yabrowser\/([-\w.]+)/i, (i) => M({ name: "other", variant: "yandex", mobile: !1 }, L(i[1]))],
    [
      /(brave|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w.]+)/i,
      (i, { userAgent: e }) =>
        M({ name: "other", variant: i[1].trim().toLowerCase(), mobile: /mobile/i.test(e) }, L(i[2].replace(/-/g, "."))),
    ],
    [
      /edg(e|ios|a)?\/([\w.]+)/i,
      (i) => {
        var e;
        return M(
          { name: "edge", mobile: /(edgios|edga)/i.test((e = i[1]) !== null && e !== void 0 ? e : "") },
          L(i[2]),
        );
      },
    ],
    [/trident.+rv[: ]([\w.]{1,9})\b.+like gecko/i, (i) => M({ name: "ie", mobile: !1 }, L(i[1]))],
    [
      /opr\/([\w.]+)/i,
      /opera mini\/([-\w.]+)/i,
      /opera [mobiletab]{3,6}\b.+version\/([-\w.]+)/i,
      /opera(?:.+version\/|[/ ]+)([\w.]+)/i,
      (i) => M({ name: "opera", mobile: /mobile/i.test(i[0]) }, L(i[1])),
    ],
    [/headlesschrome(?:\/([\w.]+)| )/i, (i) => M({ name: "chrome", variant: "headless", mobile: !1 }, L(i[1]))],
    [/\b(?:crmo|crios)\/([\w.]+)/i, (i) => M({ name: "chrome", mobile: !0 }, L(i[1]))],
    [
      /chrome(?: browser)?\/v?([\w.]+)( mobile)?/i,
      (i) => {
        var e;
        return M({ name: "chrome", mobile: /mobile/i.test((e = i[2]) !== null && e !== void 0 ? e : "") }, L(i[1]));
      },
    ],
    [/\bfocus\/([\w.]+)/i, (i) => M({ name: "firefox", variant: "focus", mobile: !0 }, L(i[1]))],
    [
      /fxios\/([\w.-]+)/i,
      /(?:mobile|tablet);.*(?:firefox)\/([\w.-]+)/i,
      (i) => M({ name: "firefox", mobile: !0 }, L(i[1])),
    ],
    [
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[/ ]?([\w.+]+)/i,
      (i) => M({ name: "firefox", variant: i[1].trim().toLowerCase(), mobile: !1 }, L(i[2])),
    ],
    [
      /(?:firefox)\/([\w.]+)/i,
      /(?:mozilla)\/([\w.]+) .+rv:.+gecko\/\d+/i,
      (i) => M({ name: "firefox", mobile: !1 }, L(i[1])),
    ],
    [
      /version\/([\w.,]+) .*mobile(?:\/\w+ | ?)safari/i,
      /version\/([\w.,]+) .*(safari)/i,
      /webkit.+?(?:mobile ?safari|safari)(?:\/([\w.]+))/i,
      (i) => M({ name: "safari", mobile: /mobile/i.test(i[0]) }, L(i[1])),
    ],
  ],
  engine: [
    [/webkit\/(?:537\.36).+chrome\/(?!27)([\w.]+)/i, (i) => M({ name: "blink" }, L(i[1]))],
    [/windows.+ edge\/([\w.]+)/i, (i) => M({ name: "blink" }, L(i[1]))],
    [/presto\/([\w.]+)/i, (i) => M({ name: "presto" }, L(i[2]))],
    [/trident\/([\w.]+)/i, (i) => M({ name: "trident" }, L(i[1]))],
    [/gecko\/([\w.]+)/i, (i) => M({ name: "gecko" }, L(i[1]))],
    [/(khtml|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w.]+)/i, (i) => M({ name: "other" }, L(i[2]))],
    [/webkit\/([\w.]+)/i, (i) => M({ name: "webkit" }, L(i[1]))],
  ],
  os: [
    [
      /microsoft windows (vista|xp)/i,
      /windows nt 6\.2; (arm)/i,
      /windows (?:phone(?: os)?|mobile)[/ ]?([\d.\w ]*)/i,
      /windows[/ ]?([ntce\d. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d.]+)/i,
      (i) => M({ name: "windows" }, L(i[1])),
    ],
    [
      /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
      /(?:ios;fbsv\/|iphone.+ios[/ ])([\d.]+)/i,
      (i) => M({ name: "ios" }, L(i[1].replace(/_/g, "."))),
    ],
    [/mac(?:intosh;?)? os x ?([\d._]+)/i, (i) => M({ name: "macos" }, L(i[1].replace(/_/g, ".")))],
    [/cros [\w]+(?:\)| ([\w.]+)\b)/i, (i) => M({ name: "chromeos" }, L(i[1]))],
    [
      /(?:android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-/ ]?([\w.]*)/i,
      /droid ([\w.]+|[\d+])\b.+(android[- ]x86|harmonyos)/i,
      (i) => M({ name: "android" }, L(i[1])),
    ],
    [/linux/i, () => ({ name: "linux" })],
  ],
};
function ph(i, e) {
  let t = i;
  for (const r of e) t = r(t);
  return t;
}
function fh(i, e) {
  var t;
  const r = {
    navigator: i,
    ua: (t = i?.userAgent) !== null && t !== void 0 ? t : "",
    extensions: [],
    browser: ns(as.browser, i, { name: "unknown", mobile: !1 }),
    engine: ns(as.engine, i, { name: "unknown" }),
    os: ns(as.os, i, { name: "unknown" }),
  };
  var s;
  return ph(r, (s = e?.extensions) !== null && s !== void 0 ? s : []);
}
function yh(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function qi(i) {
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
        yh(i, s, t[s]);
      }));
  }
  return i;
}
function mh(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    (e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(i, s).enumerable;
      })),
      t.push.apply(t, r));
  }
  return t;
}
function Wi(i, e) {
  return (
    (e = e ?? {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
      : mh(Object(e)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    i
  );
}
function gh(i) {
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
  const o = Wi(qi({}, i.browser), {
      isUnknown: i.browser.name === "unknown",
      isSafari: i.browser.name === "safari",
      isChrome: i.browser.name === "chrome",
      isFirefox: i.browser.name === "firefox",
      isEdge: i.browser.name === "edge",
      isWebView: i.browser.name === "webview",
      isOther: i.browser.name === "other",
      isMobile: i.browser.mobile || s || a || t || !1,
    }),
    c = Wi(qi({}, i.engine), {
      isUnknown: i.engine.name === "unknown",
      isWebKit: i.engine.name === "webkit",
      isBlink: i.engine.name === "blink",
      isGecko: i.engine.name === "gecko",
    }),
    l = Wi(qi({}, i.os), {
      name: e,
      isUnknown: i.os.name === "unknown",
      isLinux: i.os.name === "linux",
      isWindows: i.os.name === "windows",
      isMacOS: r,
      isAndroid: t,
      isIOS: s,
      isIPadOS: a,
    });
  return Wi(qi({}, i), { extensions: [...i.extensions, "flags"], browser: o, os: l, engine: c });
}
let os;
function It() {
  if (os === void 0) {
    let i = function (e) {
      return e && e.Math === Math && e;
    };
    os =
      i(typeof globalThis == "object" && globalThis) ||
      i(typeof window == "object" && window) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  }
  return os;
}
function Ka(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function vh(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        Ka(n, r, s, a, o, "next", c);
      }
      function o(c) {
        Ka(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function bh() {
  return xs.apply(this, arguments);
}
function xs() {
  return (
    (xs = vh(function* () {
      return It().navigator !== void 0;
    })),
    xs.apply(this, arguments)
  );
}
function Va(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Th(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        Va(n, r, s, a, o, "next", c);
      }
      function o(c) {
        Va(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function On() {
  return Fs.apply(this, arguments);
}
function Fs() {
  return (
    (Fs = Th(function* () {
      var i, e;
      return (
        ((e = It().process) === null || e === void 0 || (i = e.versions) === null || i === void 0 ? void 0 : i.node) !==
        void 0
      );
    })),
    Fs.apply(this, arguments)
  );
}
function Ba(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Ur(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        Ba(n, r, s, a, o, "next", c);
      }
      function o(c) {
        Ba(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function _h(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
function Eh(i) {
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
        _h(i, s, t[s]);
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
  $a = { fairplay_legacy: "com.apple.fps.1_0", playready_legacy: "com.microsoft.playready" };
function Cc() {
  return Ks.apply(this, arguments);
}
function Ks() {
  return (
    (Ks = Ur(function* () {
      var i;
      const e = It();
      return (
        ((i = e.navigator) === null || i === void 0 ? void 0 : i.requestMediaKeySystemAccess) !== void 0 &&
        e.MediaKeys !== void 0 &&
        e.MediaKeySystemAccess !== void 0
      );
    })),
    Ks.apply(this, arguments)
  );
}
function Sh(i) {
  return Vs.apply(this, arguments);
}
function Vs() {
  return (
    (Vs = Ur(function* (i) {
      var e, t, r;
      const s = (r = i?.contentType) !== null && r !== void 0 ? r : 'video/mp4; codecs="avc1.42E01E"',
        n = [],
        a = It();
      return (
        typeof ((e = a.WebKitMediaKeys) === null || e === void 0 ? void 0 : e.isTypeSupported) == "function" &&
          a.WebKitMediaKeys.isTypeSupported($a.fairplay_legacy, s) === !0 &&
          n.push("fairplay_legacy"),
        typeof ((t = a.MSMediaKeys) === null || t === void 0 ? void 0 : t.isTypeSupported) == "function" &&
          a.MSMediaKeys.isTypeSupported($a.playready_legacy, s) === !0 &&
          n.push("playready_legacy"),
        n
      );
    })),
    Vs.apply(this, arguments)
  );
}
function kh(i, e) {
  return Bs.apply(this, arguments);
}
function Bs() {
  return (
    (Bs = Ur(function* (i, e) {
      const t = Eh({ initDataTypes: ["keyids", "cenc"] }, e);
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
        const f = [
          ...((o = h.audioCapabilities) !== null && o !== void 0 ? o : []),
          ...((c = h.videoCapabilities) !== null && c !== void 0 ? c : []),
        ].map(({ contentType: y }) => y);
        return a.every((y) => f.includes(y));
      } catch (l) {
        if (l instanceof DOMException && (l.name === "NotSupportedError" || l.name === "SecurityError")) return !1;
        throw l;
      }
    })),
    Bs.apply(this, arguments)
  );
}
function Ih(i) {
  return $s.apply(this, arguments);
}
function $s() {
  return (
    ($s = Ur(function* (i) {
      const e = [];
      if ((yield On()) || !(yield Cc())) return e;
      function t(n) {
        return typeof n == "string" ? { contentType: n } : n;
      }
      const r = i?.videoCapability !== void 0 ? [t(i.videoCapability)] : [t('video/mp4; codecs="avc1.42E01E"')],
        s = i?.audioCapability !== void 0 ? [t(i.audioCapability)] : [];
      for (const [n, a] of Object.entries(G))
        (yield kh(a, { videoCapabilities: r, audioCapabilities: s })) && e.push(n);
      return e;
    })),
    $s.apply(this, arguments)
  );
}
function Ha(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Ph(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        Ha(n, r, s, a, o, "next", c);
      }
      function o(c) {
        Ha(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Ah() {
  return Hs.apply(this, arguments);
}
function Hs() {
  return (
    (Hs = Ph(function* () {
      var i, e, t, r;
      const s = It(),
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
    Hs.apply(this, arguments)
  );
}
function ja(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function wh(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        ja(n, r, s, a, o, "next", c);
      }
      function o(c) {
        ja(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Rh() {
  return js.apply(this, arguments);
}
function js() {
  return (
    (js = wh(function* () {
      return It().MediaSource !== void 0 && It().SourceBuffer !== void 0;
    })),
    js.apply(this, arguments)
  );
}
function qa(i, e, t, r, s, n, a) {
  try {
    var o = i[n](a),
      c = o.value;
  } catch (l) {
    t(l);
    return;
  }
  o.done ? e(c) : Promise.resolve(c).then(r, s);
}
function Ch(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, s) {
      var n = i.apply(e, t);
      function a(c) {
        qa(n, r, s, a, o, "next", c);
      }
      function o(c) {
        qa(n, r, s, a, o, "throw", c);
      }
      a(void 0);
    });
  };
}
function Oc() {
  return qs.apply(this, arguments);
}
function qs() {
  return (
    (qs = Ch(function* () {
      var i;
      if (yield On()) return !1;
      const e = document.createElement("video");
      return (
        (e?.webkitSupportsPresentationMode !== void 0 && typeof e?.webkitSetPresentationMode == "function") ||
        ((i = document) === null || i === void 0 ? void 0 : i.pictureInPictureEnabled) !== void 0
      );
    })),
    qs.apply(this, arguments)
  );
}
async function Oh() {
  const e = globalThis?.window?.navigator ?? { userAgent: "", maxTouchPoints: 0 },
    t = await bh(),
    r = await On(),
    s = await Ih(),
    n = await Sh();
  let a;
  return (
    s.includes("fairplay") && (a = "fairplay"),
    s.includes("playready") && (a = "playready"),
    s.includes("widevine") && (a = "widevine"),
    {
      userAgent: await fh(e, { extensions: [gh] }),
      isBrowserEnvironment: t,
      isNodeEnvironment: r,
      isPictureInPictureSupported: await Oc(),
      isMMSSupported: await Ah(),
      isMSESupported: await Rh(),
      isEMESupported: await Cc(),
      isDRMAvailable: a !== void 0,
      availableKeySystems: s,
      preferredKeySystem: a,
      hasWebKitMediaKeysSupport: n.includes("fairplay_legacy"),
      hasMSMediaKeysSupport: n.includes("playready_legacy"),
    }
  );
}
class Dh {
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
    return new this(await Oh());
  }
  constructor(e) {
    ((this.config = e), (this.configured = !0));
  }
  configure(e) {
    for (const [t, r] of Object.entries(e)) this.config[t] = r;
    this.configured = !0;
  }
}
function yi(i) {
  return i
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "-")
    .replace(/(^-+)|(-+$)/, "")
    .toLowerCase();
}
const Nh = (i) => i.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (e, t) => t.toUpperCase()),
  mi = {};
function Dn(i, e) {
  const t = Nh(i);
  if (je(mi, t)) {
    const s = mi[t];
    if (e !== s.constructor)
      throw new Error(`DevFlag ${i} was already registered with a different type (${s.constructor.name})`);
    return s;
  }
  const r = new e(i);
  return (
    Object.defineProperty(mi, t, {
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
class Nn {
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
    const e = He()?.getItem(this.key) ?? null;
    return e !== null ? e : void 0;
  }
  write(e) {
    He()?.setItem(this.key, e);
  }
  clear() {
    He()?.removeItem(this.key);
  }
}
class Ln extends Nn {
  static register(e) {
    return Dn(e, this);
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
class ve extends Nn {
  static register(e) {
    return Dn(e, this);
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
class xr extends Nn {
  static register(e) {
    return Dn(e, this);
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
const Dc =
  /\/(?:([a-z]{2})\/)?(album|artist|episode|movie|music-video|playlist|podcast|post|season|show|song|station)\/(?:[^/]*\/)?(?:id)?(\d+|[a-z]{2}\.[a-z0-9-]+|umc.cmc.[a-zA-Z0-9]+)(?:.*(?:[?|&]i=(\d+)).*)?.*$/i;
function Lh(i) {
  return Dc.test(String(i));
}
function Nc(i) {
  const e = i.match(Dc) || [];
  let [, t, r, s, n] = e;
  return (
    r === "music-video" && (r = "musicVideo"),
    ["album", "playlist"].indexOf(r) !== -1 && n
      ? ((r = "song"), (s = n))
      : r === "podcast" && n && ((r = "episode"), (s = n)),
    { storefrontId: t, kind: r, contentId: s, itemId: n }
  );
}
function GE(i) {
  const e = Nc(i),
    { storefrontId: t, kind: r, contentId: s } = e;
  if ([t, r, s].some((a) => a === void 0)) throw new TypeError(`Invalid Media URL: ${i}`);
  const n = !!s && s.startsWith("umc.");
  return { storefrontId: t, kind: r, contentId: s, isUTS: n };
}
function Mh(i) {
  return typeof i == "number" && !Number.isNaN(i);
}
const cs = new Map();
function Lc(i) {
  if (cs.has(i)) return cs.get(i);
  let e = yi(i);
  return (
    i.endsWith("y") ? (e = e.substring(0, e.length - 1) + "ies") : e.endsWith("s") || (e = e + "s"), cs.set(i, e), e
  );
}
function Uh(i) {
  return Lc(i);
}
function xh(i, e) {
  const t = {};
  for (const r of e) r in i && i[r] !== void 0 && (t[r] = i[r]);
  return t;
}
class Fh {
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
    return new URL(Mr(e, t, r));
  }
  buildHeaders(...e) {
    return fi(e).reduce(function (t, r) {
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
const ls = new Map();
function Ei(i) {
  if (ls.has(i)) return ls.get(i);
  let e = yi(i);
  return (e.endsWith("s") && (e = e.slice(0, -1)), ls.set(i, e), e);
}
const Jt =
    (i = 100, e) =>
    (t, r, s) => {
      const n = s.value,
        a = Kh(n, i, e);
      s.value = a;
    },
  Kh = (i, e = 250, t = { isImmediate: !1 }) => {
    let r, s;
    function n(c) {
      return c?.resolve(t.cancelledValue);
    }
    const a = () => {
        r && (r.resolved || (n(r), r.timeoutId && clearTimeout(r.timeoutId)), (r = void 0));
      },
      o = (c, l, h, f) => {
        i.apply(c, f)
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
              : new Promise((f, y) => {
                  ((r = { resolve: f, reject: y }), o(h, f, y, c));
                })
          );
        }
      : function (...c) {
          const l = this;
          return (
            r && a(),
            new Promise(function (h, f) {
              const y = setTimeout(o.bind(void 0, l, h, f, c), e);
              r = { resolve: h, reject: f, timeoutId: y };
            })
          );
        };
  };
function Mc(i, e = {}) {
  const t = "Deprecation Warning: ",
    r = e.message ?? `${i} has been deprecated`,
    s = [];
  (e.since && s.push(`since: ${e.since}`),
    e.until && s.push(`until: ${e.until}`),
    console.warn(t + r + (s.length > 0 ? ` (${s.join(", ")})` : "")));
}
const Ws = {},
  Vh = (i) => {
    let e = Ws[i];
    return (e || ((e = Promise.resolve()), (Ws[i] = e)), e);
  },
  Fr = (i) => {
    let e = Promise.resolve();
    return (t, r, s) => {
      const n = s.value;
      return (
        (s.value = async function (...a) {
          return (i && (e = Vh(i)), (e = e.catch(() => {}).then(() => n.apply(this, a))), i && (Ws[i] = e), e);
        }),
        s
      );
    };
  };
var Ne = ((i) => ((i[(i.STANDARD = 64)] = "STANDARD"), (i[(i.HIGH = 256)] = "HIGH"), i))(Ne || {}),
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
  _t = ((i) => (
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
  ))(_t || {}),
  Bh = ((i) => (
    (i[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.RADIO = 1)] = "RADIO"),
    (i[(i.PLAYLIST = 2)] = "PLAYLIST"),
    (i[(i.ALBUM = 3)] = "ALBUM"),
    (i[(i.ARTIST = 4)] = "ARTIST"),
    i
  ))(Bh || {}),
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
  ye = ((i) => (
    (i[(i.Manual = 0)] = "Manual"),
    (i[(i.Interval = 1)] = "Interval"),
    (i[(i.SkipIntro = 2)] = "SkipIntro"),
    (i[(i.Automatic = 3)] = "Automatic"),
    (i[(i.SkipToLiveManual = 4)] = "SkipToLiveManual"),
    (i[(i.SkipToLiveAutomatic = 5)] = "SkipToLiveAutomatic"),
    i
  ))(ye || {});
const $h = { NEXT_ITEM: "NEXT" };
var Hh = ((i) => (
    (i[(i.REPEAT_UNKNOWN = 0)] = "REPEAT_UNKNOWN"),
    (i[(i.REPEAT_OFF = 1)] = "REPEAT_OFF"),
    (i[(i.REPEAT_ONE = 2)] = "REPEAT_ONE"),
    (i[(i.REPEAT_ALL = 3)] = "REPEAT_ALL"),
    i
  ))(Hh || {}),
  jh = ((i) => (
    (i[(i.SHUFFLE_UNKNOWN = 0)] = "SHUFFLE_UNKNOWN"),
    (i[(i.SHUFFLE_OFF = 1)] = "SHUFFLE_OFF"),
    (i[(i.SHUFFLE_ON = 2)] = "SHUFFLE_ON"),
    i
  ))(jh || {}),
  qh = ((i) => (
    (i[(i.AUTO_UNKNOWN = 0)] = "AUTO_UNKNOWN"),
    (i[(i.AUTO_OFF = 1)] = "AUTO_OFF"),
    (i[(i.AUTO_ON = 2)] = "AUTO_ON"),
    (i[(i.AUTO_ON_CONTENT_UNSUPPORTED = 3)] = "AUTO_ON_CONTENT_UNSUPPORTED"),
    i
  ))(qh || {}),
  Wh = ((i) => ((i[(i.NOT_SPECIFIED = 0)] = "NOT_SPECIFIED"), (i[(i.CONTAINER_CHANGED = 1)] = "CONTAINER_CHANGED"), i))(
    Wh || {},
  ),
  Et = ((i) => (
    (i[(i.PLAY_END = 0)] = "PLAY_END"),
    (i[(i.PLAY_START = 1)] = "PLAY_START"),
    (i[(i.LYRIC_DISPLAY = 2)] = "LYRIC_DISPLAY"),
    i
  ))(Et || {}),
  Yh = ((i) => (
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
  ))(Yh || {}),
  Gh = ((i) => ((i[(i.AUDIO = 0)] = "AUDIO"), (i[(i.VIDEO = 1)] = "VIDEO"), i))(Gh || {}),
  zh = ((i) => ((i[(i.AUTO = 0)] = "AUTO"), (i[(i.MANUAL = 1)] = "MANUAL"), i))(zh || {}),
  Ys = ((i) => (
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
  ))(Ys || {}),
  Qh = ((i) => ((i[(i.EPISODE = 1)] = "EPISODE"), (i[(i.SHOUTCAST = 2)] = "SHOUTCAST"), i))(Qh || {});
const Mn = "/",
  ie = { CRITICAL: 50, ERROR: 40, WARNING: 30, NOTICE: 20, INFO: 10, DEBUG: 2, TRACE: 1, NONE: 0 };
function Xh(i) {
  return typeof i != "string" ? !1 : ie[i.toUpperCase()] !== void 0;
}
function Jh(i) {
  return typeof i != "number" ? !1 : Object.values(ie).includes(i);
}
const Wa = {
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
function Pt(i, e = {}) {
  if (typeof i == "number") return Jh(i) ? i : void 0;
  let t = i.toUpperCase();
  return (e.allowShorthands && Wa[t] !== void 0 && (t = Wa[t]), Xh(t) ? ie[t] : void 0);
}
function Uc(i) {
  for (const [e, t] of Object.entries(ie)) if (i === t) return e;
}
function Zh(i, e = { includeRoot: !0 }) {
  return (
    xc(i, function (t) {
      (t.parent === void 0 && !e.includeRoot) || t.clearLevel();
    }),
    i
  );
}
function ep(i, e) {
  return (
    xc(i, function (t) {
      let r;
      const s = t.namespace;
      (t.clearLevel(),
        t.parent === void 0 && e["*"] !== void 0 ? (r = Pt(e["*"])) : e[s] !== void 0 && (r = Pt(e[s])),
        r !== void 0 && t.setLevel(r));
    }),
    i
  );
}
function tp(i) {
  const e = Pt(i.trim(), { allowShorthands: !0 });
  if (e !== void 0) return { "*": e };
  const t = {},
    r = i.split(",").filter((s) => s.trim() !== "");
  for (const s of r) {
    const n = s.split("=", 2);
    if (n.length !== 2) continue;
    const a = n[0]?.trim() ?? "",
      o = n[1]?.trim() ?? "",
      c = Pt(o, { allowShorthands: !0 });
    a !== "" && c !== void 0 && (t[a] = c);
  }
  return t;
}
function xc(i, e) {
  const t = [i];
  for (; t.length > 0;) {
    const r = t.shift();
    r !== void 0 && (t.push(...r.children), e(r));
  }
}
const ip = ie.ERROR,
  rp = (i, e) => i !== ie.NONE && e >= i;
let Dt = class Fc {
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
    return this._parent === void 0 ? this.name : this._parent.namespace + Mn + this.name;
  }
  get enabled() {
    return this.level !== ie.NONE;
  }
  get level() {
    return this._level ?? this.parent?.level ?? ip;
  }
  get levelName() {
    return Uc(this.level) ?? "UNKNOWN";
  }
  get levelPolicy() {
    return this._levelPolicy ?? this.parent?.levelPolicy ?? rp;
  }
  get handlers() {
    return this._handlers ?? this.parent?.handlers ?? {};
  }
  isEnabledFor(e) {
    return this.levelPolicy(this.level, e);
  }
  setLevel(e) {
    const t = Pt(e);
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
    return r !== void 0 ? r : new Fc(e, { ...t, parent: this });
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
    return sp(this, e);
  }
  linkParent(e) {
    return (this.parent !== e && (this.unlinkParent(), (this._parent = e), e.linkChild(this)), this);
  }
  unlinkParent() {
    return (this._parent !== void 0 && (this._parent.unlinkChild(this), (this._parent = void 0)), this);
  }
  log(e, t, ...r) {
    const s = Pt(e);
    s !== void 0 && this.logRecord({ time: Date.now(), namespace: this.namespace, level: s, message: t, args: r });
  }
  logRecord(e) {
    if (!this.levelPolicy(this.level, e.level)) return;
    const t = { namespace: this.namespace, ...e };
    for (const r of Object.values(this.handlers)) r.process(t);
  }
  error(e, ...t) {
    this.log(ie.ERROR, e, ...t);
  }
  warning(e, ...t) {
    this.log(ie.WARNING, e, ...t);
  }
  warn(e, ...t) {
    this.warning(e, ...t);
  }
  info(e, ...t) {
    this.log(ie.INFO, e, ...t);
  }
  debug(e, ...t) {
    this.log(ie.DEBUG, e, ...t);
  }
  trace(e, ...t) {
    this.log(ie.TRACE, e, ...t);
  }
};
function sp(i, e, t = Mn) {
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
class Kc {
  enabled;
  callback;
  constructor(e, t = {}) {
    ((this.callback = e), (this.enabled = t.enabled ?? !0));
  }
  process(e) {
    this.enabled && this.callback !== void 0 && this.callback(e);
  }
}
const np = /%{([^}]+)}/gi,
  Ya = {
    timestamp: (i) => String(i.time),
    time: (i) => String(i.time),
    datetime: (i) => new Date(i.time).toISOString(),
    date: (i) => new Date(i.time).toISOString(),
    level: (i) => String(i.level),
    levelname: (i) => Uc(i.level) ?? "UNKNOWN",
    message: (i) => i.message,
    name: (i) => i.namespace.split(Mn).pop(),
    namespace: (i) => i.namespace,
  };
function ap(i) {
  return function (e) {
    return i.replace(np, function (t, r) {
      return ((r = r.toLowerCase()), Ya[r] !== void 0 ? Ya[r](e) : t);
    });
  };
}
const op = new Map([
    [ie.CRITICAL, "error"],
    [ie.ERROR, "error"],
    [ie.WARNING, "warn"],
    [ie.NOTICE, "warn"],
    [ie.INFO, "log"],
    [ie.DEBUG, "debug"],
  ]),
  cp = ap("%{datetime} %{levelname} - [%{namespace}] %{message}");
function lp(i) {
  return i !== void 0 && i in console;
}
class up {
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
      (this.levelMapping = e.levelMapping ?? op),
      (this.format = e.formatter ?? cp));
  }
  process(e) {
    if (!this.enabled || !this.hasConsole) return;
    let t = "log";
    if (this.mapLevels) {
      const n = this.levelMapping.get(e.level);
      lp(n) && (t = n);
    }
    const r = e.args ?? [],
      s = this.format(e);
    console[t](s, ...r);
  }
}
const zE = new Dt("paf"),
  dp = new Map([
    ["play", Et.PLAY_START],
    ["playbackstarted", Et.PLAY_START],
    ["stop", Et.PLAY_END],
    ["playbackstopped", Et.PLAY_END],
  ]);
function hp(i) {
  return typeof i == "number" ? i : (dp.get(i) ?? Et.PLAY_END);
}
const pp = new Map([
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
function fp(i) {
  if (i !== void 0) return pp.get(i);
}
function QE(i) {
  const e = dt(i),
    t = yp(i);
  return (
    (e.eventType = t.eventType),
    (e.eventTypeString = t.eventTypeString),
    e.endReasonType === void 0 && t.eventTypeString !== void 0 && (e.endReasonType = fp(t.eventTypeString)),
    e.reporting !== !1 && (e.reporting = !0),
    e
  );
}
function yp(i) {
  const e = i.eventType ?? Et.PLAY_START;
  return typeof e == "number" ? { eventType: e } : { eventTypeString: e, eventType: hp(e) };
}
const mp = {
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
  gp = 5 * 60,
  vp =
    (i = gp) =>
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
  bp = {
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
function Tp(i = "en-US") {
  const e = us[i.toLowerCase()];
  if (e) return e;
  if (i.includes("-")) {
    const r = i.split("-")[0],
      s = us[r.toLowerCase()];
    if (s) return s;
  }
  return us["en-us"];
}
const us = {
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
let bt = "Music-User-Token";
bt = "Media-User-Token";
function Vc() {
  if (typeof navigator > "u") return [];
  if (navigator.languages) return navigator.languages;
  const i = navigator.language || navigator.userLanguage;
  return i ? [i] : [];
}
const _p = [
  "apps.apple.com",
  "books.apple.com",
  "fitness.apple.com",
  "music.apple.com",
  "podcasts.apple.com",
  "tv.apple.com",
];
function Bc(i) {
  let e = i;
  return (
    i &&
      _p.some(function (t) {
        if (i.endsWith(`.${t}`)) return ((e = t), !0);
      }),
    e
  );
}
const Ep = new Set(["apps", "books", "music", "podcasts", "tv"]),
  Sp = /\.apple\.com$/;
function kp(i) {
  if (!i || !Sp.test(i)) return;
  const e = i.split(".");
  let t = e[e.length - 3];
  const r = t;
  if (t && t.includes("-")) {
    const s = t.split("-");
    t = s[s.length - 1];
  }
  if (Ep.has(t)) return r;
}
function Ci(i, e) {
  !e && typeof location < "u" && location.hostname && (e = location);
  let t = `${i}.itunes.apple.com`;
  if (!e) return t;
  const r = kp(e.hostname);
  return (r && (t = `${i}.${r}.apple.com`), t);
}
function fr(i = { app: "music", p: "subscribe" }) {
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
  ae = ((i) => ((i[(i.MUSIC = 0)] = "MUSIC"), (i[(i.PODCAST = 1)] = "PODCAST"), (i[(i.TV = 2)] = "TV"), i))(ae || {});
const Ip = {
    [ae.TV]: "com.apple.onboarding.tvappweb",
    [ae.MUSIC]: "com.apple.onboarding.musicappweb",
    [ae.PODCAST]: "com.apple.onboarding.podcastsweb",
  },
  ds = { [ae.TV]: "pltvcid", [ae.MUSIC]: "pldfltcid", [ae.PODCAST]: "pldfltcid" },
  Pp = {
    "com.apple.onboarding.tvappweb": 1,
    "com.apple.onboarding.musicappweb": 1,
    "com.apple.onboarding.podcastsweb": 1,
  },
  de = new Dt("storekit"),
  Ga = "*",
  hs = "2.0";
class za {
  destination;
  origin;
  methods;
  _registry = {};
  _sequence = 0;
  _source;
  constructor(e = {}) {
    ((this.destination = e.destination),
      (this.methods = e.methods || {}),
      (this.origin = e.origin || Ga),
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
    return (this.send(this.destination, { jsonrpc: hs, id: r, method: e, params: t }), s);
  }
  call(e, ...t) {
    return this.apply(e, t);
  }
  async handleRequest(e) {
    const t = { jsonrpc: hs, id: e.id },
      r = this.methods[e.method];
    if (!r) return Object.assign(t, { error: { code: -32601, message: "Method not found" } });
    try {
      const s = await r.apply(void 0, Cd(e.params));
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
      e.data.jsonrpc !== hs ||
      (this.origin !== Ga && this.origin !== e.origin) ||
      (e.data.method && this.destination
        ? this.handleRequest(e.data).then((t) => {
            this.send(this.destination, t);
          })
        : (je(e.data, "result") || e.data.error) && this.handleResponse(e.data));
  };
}
var ne = ((i) => (
  (i[(i.UNAVAILABLE = -1)] = "UNAVAILABLE"),
  (i[(i.NOT_DETERMINED = 0)] = "NOT_DETERMINED"),
  (i[(i.DENIED = 1)] = "DENIED"),
  (i[(i.RESTRICTED = 2)] = "RESTRICTED"),
  (i[(i.AUTHORIZED = 3)] = "AUTHORIZED"),
  i
))(ne || {});
function Gs(i) {
  return typeof i == "string" && i.length > 0;
}
const Ap = `https://${Ci("buy")}/commerce/account/authenticateMusicKitRequest`,
  zs = "https://authorize.music.apple.com",
  wp = `${zs}/upsell`,
  Rp = /^https?:\/\/(.+\.)*(apple\.com|apps\.mzstatic\.com)(\/[\w\d]+)*$/;
var Qs = ((i) => ((i[(i.AUTHORIZE = 0)] = "AUTHORIZE"), (i[(i.SUBSCRIBE = 1)] = "SUBSCRIBE"), i))(Qs || {});
class Cp {
  constructor(e, t = {}) {
    if (
      ((this.developerToken = e),
      (this.deeplinkParameters = (t && t.deeplinkParameters) || {}),
      (this.iconURL = t && t.iconURL),
      (this.authenticateMethod = (t && t.authenticateMethod) || "GET"),
      this.isServiceView && window.opener !== window)
    ) {
      const r = Rn()?.getItem("ac"),
        s = r != null ? new URL(r).origin : void 0;
      s && (this.dispatch = new za({ destination: window.opener ?? void 0, origin: s, source: window }));
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
        ? (r = `${zs}/woa?${fr({ ...this.deeplinkParameters, a: btoa(this._thirdPartyInfo()), referrer: s })}`)
        : ((t = this._buildFormElement(Ap)), document.body.appendChild(t)),
      new Promise((n, a) => {
        const o = this.present(r);
        (this._startPollingForWindowClosed(() => {
          a(0);
        }),
          (this.dispatch = new za({
            methods: {
              authorize: function (c, l, h) {
                Gs(c) ? n({ restricted: l && l === "1", userToken: c, cid: h }) : a(0);
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
            origin: zs,
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
        const s = `${wp}?${fr(e)}`;
        (this.present(s),
          window.addEventListener("message", ({ data: n, origin: a, source: o }) => {
            const { closeWindow: c, launchClient: l } = typeof n == "string" ? JSON.parse(n) : n;
            (!a || Rp.test(a)) &&
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
var $c = ((i) => ((i.ID = "us"), (i.LANGUAGE_TAG = "en-gb"), i))($c || {});
async function Op(i, e = "https://api.music.apple.com/v1") {
  const t = new Headers({ Authorization: `Bearer ${i}` }),
    s = await (await fetch(`${e}/storefronts`, { headers: t })).json();
  return s.errors ? Promise.reject(s.errors) : s.data;
}
class Qa {
  constructor(e, t, r) {
    ((this.id = e), (this.attributes = t), (this.type = "storefronts"), (this.href = r || `/v1/${this.type}/${e}`));
  }
  href;
  type;
  static async inferFromLanguages(e, t = Vc()) {
    const r = await Op(e),
      s = r.map((l) => l.id),
      n = t[0] || "en-US",
      [a, o] = n.toLowerCase().split(/-|_/),
      c = s.includes(o) ? o : "us";
    return r.find((l) => l.id === c);
  }
}
const Hc = ["music.apple.com", "podcasts.apple.com", "tv.apple.com", "apps.apple.com"],
  jc = "mut-refresh",
  Yi = [jc, B.DEFAULT_CID, B.STOREFRONT_COUNTRY_CODE, B.TV_CID, B.USER_TOKEN],
  Dp = new Map([
    ["signIn", "/auth/v2/web"],
    ["signOut", "/auth/v2/web/logout"],
    ["refresh", "/auth/v2/web/refresh"],
  ]);
function Np(i) {
  if (!i) return !1;
  for (const e of Hc) if (e === i || i.endsWith(`.${e}`)) return !0;
  return !1;
}
class Lp {
  developerToken;
  getUserToken;
  onRequestsComplete;
  allowMultiReflection = !1;
  previousUserToken;
  hostname;
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
      (this.allowMultiReflection = a && Np(this.hostname)),
      (this.onUserTokenChange = this.onUserTokenChange.bind(this)),
      de.debug("Reflector allowMultiReflection?", this.allowMultiReflection));
  }
  onUserTokenChange(e) {
    const t = this.getUserToken(),
      r = this.previousUserToken !== t;
    if (((this.previousUserToken = t), de.debug("Reflector.onUserTokenChange hasChanged?", r), r))
      return t ? (e?.domainReflection === !1 ? void 0 : this.reflect()) : this.clear();
  }
  skipJsCookieWrite(e) {
    return Yi.includes(e);
  }
  refresh() {
    if (!this.allowMultiReflection) return;
    const e = pt(jc);
    if (pt(B.USER_TOKEN) && !e) return this.makeRequests("refresh");
  }
  reflect() {
    if (this.allowMultiReflection) return this.makeRequests("signIn");
    {
      const e = Yi.map((t) => pt(t));
      (this.clearAppleComCookies(),
        Yi.forEach((t, r) => {
          const s = e[r],
            n = pt(t);
          s &&
            !n &&
            (de.debug("Reflector.reflect calling setCookie", t, s), wn(t, s, "/", 166, void 0, Bc(this.hostname)));
        }));
    }
  }
  clear() {
    if (this.allowMultiReflection) return this.makeRequests("signOut");
    de.debug("Reflector nothing to clear, no allowMultiReflection");
  }
  async makeRequests(e) {
    de.debug("Reflector makeRequests()", e);
    try {
      const t = Dp.get(e);
      for (const r of Hc) {
        const s = `https://auth.${r}${t}`;
        de.debug("Reflector.makeRequests for", s);
        try {
          await fetch(s, {
            headers: { Authorization: `Bearer ${this.developerToken}` },
            method: "POST",
            credentials: "include",
          });
        } catch (n) {
          de.error("Reflector fetch failed for ", s, n);
        }
      }
      this.clearAppleComCookies();
    } catch (t) {
      de.error("Reflector makeRequests failed", t);
    }
    (de.debug("Reflector calling onRequestsComplete"), this.onRequestsComplete());
  }
  clearAppleComCookies() {
    (de.debug("Reflector.clearAppleComCookies"), Yi.forEach((e) => Ls(e, void 0, "apple.com")));
  }
}
var Mp = Object.defineProperty,
  Up = Object.getOwnPropertyDescriptor,
  xp = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Up(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Mp(e, t, s), s);
  },
  Qe = ((i) => (
    (i.authorizationStatusDidChange = "authorizationStatusDidChange"),
    (i.authorizationStatusWillChange = "authorizationStatusWillChange"),
    (i.eligibleForSubscribeView = "eligibleForSubscribeView"),
    (i.authReflectionDidComplete = "authReflectionDidComplete"),
    (i.needsGDPRDidChange = "needsGDPRDidChange"),
    (i.storefrontCountryCodeDidChange = "storefrontCountryCodeDidChange"),
    (i.storefrontIdentifierDidChange = "storefrontIdentifierDidChange"),
    (i.userTokenDidChange = "userTokenDidChange"),
    i
  ))(Qe || {});
B.DEFAULT_CID;
let or = !1;
or = !0;
const Fp = `https://${Ci("buy")}`,
  Kp = `https://${Ci("play")}/WebObjects/MZPlay.woa/wa`;
class qc extends Ot {
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
      de.info("StoreKit initialized"),
      t &&
        (t.apiBase && (this.apiBase = t.apiBase),
        t.deeplink && (this.deeplinkParameters = t.deeplink),
        t.meParameters && (this.meParameters = t.meParameters),
        t.persist && (this.persist = t.persist),
        t.prefix && (this.prefix = t.prefix),
        t.realm !== void 0 && (this.realm = t.realm),
        t.disableLogoutURL !== void 0 && (this._disableLogoutURL = t.disableLogoutURL),
        (this.bundleId = Ip[this.realm])),
      (this.fetch = t !== void 0 && typeof t.fetch == "function" ? t.fetch : globalThis.fetch.bind(globalThis)),
      (this.cidNamespace = ds[this.realm]),
      (this._developerToken = new Qd(e)),
      (this._serviceSetupView = new Cp(e, {
        authenticateMethod: t && t.authenticateMethod,
        iconURL: t && t.iconURL,
        deeplinkParameters: this.deeplinkParameters,
      })),
      (this.storagePrefix = `${this.prefix}.${this._developerToken.teamId}`.toLocaleLowerCase()),
      !kt() &&
        this.persist === "cookie" &&
        (de.debug("Creating Reflector"),
        (this.reflector = new Lp({
          hostname: window.location.hostname,
          developerToken: this.developerToken,
          getUserToken: () => this.userToken,
          startingUserToken: pt(B.USER_TOKEN),
          onRequestsComplete: () => {
            (this.userToken !== pt(B.USER_TOKEN) &&
              (de.debug("StoreKit.onRequestsComplete called, resetting"),
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
      kt() ||
        (this._processLocationHash(window.location.hash), this.persist === "cookie" && this.reflector?.refresh()));
  }
  apiBase = "https://api.music.apple.com/v1";
  bundleId;
  cidNamespace;
  deeplinkParameters;
  iconURL;
  iTunesBuyBase = Fp;
  meParameters = {};
  persist = "localstorage";
  playBase = Kp;
  prefix = "music";
  realm = ae.MUSIC;
  storage = He();
  storagePrefix;
  whenAuthCompleted;
  fetch;
  _authorizationStatus = ne.NOT_DETERMINED;
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
  _dynamicUserToken = pt(B.USER_TOKEN);
  updateUserTokenFromStorage(e) {
    const t = this._getStorageItem(B.USER_TOKEN);
    if (((this._pendingUpdateConfig = e), this.persist === "cookie" && t === this.userToken)) {
      const s = (Md(B.USER_TOKEN) || []).find((n) => n !== this.userToken);
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
    return this.authorizationStatus > ne.DENIED;
  }
  get logoutURL() {
    if (!this._disableLogoutURL)
      return or ? `${this.iTunesBuyBase}/account/web/logout` : `${this.playBase}/webPlayerLogout`;
  }
  get parentalControls() {
    return this._parentalControls;
  }
  set parentalControls(e) {
    ((this._parentalControls = e),
      e &&
        (this.realm === ae.MUSIC || this.realm === ae.PODCAST
          ? (this.restrictedEnabled = e.musicParentalControlsEnabled)
          : this.realm === ae.TV && e.videoContentRestrictions && (this.authorizationStatus = ne.RESTRICTED)));
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
        (this._needsGDPR = this._gdprVersion < (Pp[this.bundleId] || 0)),
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
      e && (this.authorizationStatus = ne.RESTRICTED));
  }
  overrideRestrictEnabled(e) {
    ((this._restrictedEnabledOverridden = !1), (this.restrictedEnabled = e), (this._restrictedEnabledOverridden = !0));
  }
  get storefrontCountryCode() {
    if (!this._storefrontCountryCode) {
      const e = this._getStorageItem(B.STOREFRONT_COUNTRY_CODE);
      this._storefrontCountryCode = e?.toLowerCase() || $c.ID;
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
    e && Gs(e)
      ? (t && this._setStorageItem(B.USER_TOKEN, e),
        (this.authorizationStatus = this.restrictedEnabled ? ne.RESTRICTED : ne.AUTHORIZED))
      : (this._removeStorageItem(B.USER_TOKEN), (this.authorizationStatus = ne.NOT_DETERMINED));
  }
  wrapDynamicUserTokenForChanges(e, t = ji(e)) {
    if (typeof e != "function") return e;
    let r = t;
    return () => {
      const s = ji(e);
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
    const t = ji(e);
    ((this._dynamicUserToken = this.wrapDynamicUserTokenForChanges(e, t)),
      this.runTokenValidations(t, typeof e != "function"),
      this.dispatchEvent("userTokenDidChange", {
        userToken: t,
        domainReflection: this._pendingUpdateConfig?.domainReflection,
      }));
  }
  get userToken() {
    return ji(this.dynamicUserToken);
  }
  set userToken(e) {
    this.dynamicUserToken = e;
  }
  get userTokenIsValid() {
    return Gs(this.userToken);
  }
  deeplinkURL(e = {}) {
    return (
      (e = { ...(this.deeplinkParameters || {}), ...e }), `https://finance-app.itunes.apple.com/deeplink?${fr(e)}`
    );
  }
  itunesDeeplinkURL(e = { p: "browse" }) {
    return ((e = { ...(this.deeplinkParameters || {}), ...e }), `https://itunes.apple.com/deeplink?${fr(e)}`);
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
    if (this.authorizationStatus <= ne.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const e = new Headers({ Authorization: `Bearer ${this.developerToken}`, [bt]: this.userToken || "" }),
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
      const e = await Qa.inferFromLanguages(this.developerToken);
      this.storefrontIdentifier = e.id;
    }
    return this.storefrontIdentifier;
  }
  async requestUserToken() {
    if (this._serviceSetupView.isServiceView) return this.userToken || "";
    try {
      const e = await this._serviceSetupView.load({ action: Qs.AUTHORIZE });
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
      newAuthorizationStatus: ne.NOT_DETERMINED,
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
    return this.realm === ae.PODCAST ? !0 : !!(await this.me()).subscription?.active;
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
        const s = await this._serviceSetupView.load({ action: Qs.SUBSCRIBE });
        return ((this._dispatchedSubscribeView = !0), s);
      } catch {
        return this.revokeUserToken();
      }
    }
  }
  async infoRefresh() {
    if (this.authorizationStatus <= ne.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const e = new Headers({ Authorization: `Bearer ${this.developerToken}`, [bt]: this.userToken || "" });
    try {
      const r = await (
        await this.fetch(`${this.iTunesBuyBase}/account/web/infoRefresh`, { credentials: "include", headers: e })
      ).json();
      this.setCids(r);
    } catch {}
  }
  me() {
    return this.authorizationStatus <= ne.DENIED
      ? Promise.reject(`Not authorized: ${this.authorizationStatus}`)
      : (this._me ||
          (this._me = new Promise(async (e, t) => {
            const r = new Headers({ Authorization: `Bearer ${this.developerToken}`, [bt]: this.userToken || "" }),
              s = Mr(this.apiBase, "/me/account", { meta: "subscription", ...this.meParameters });
            let n;
            try {
              n = await this.fetch(s, { headers: r });
            } catch {
              return t(new p(p.Reason.NETWORK_ERROR, "Failed to fetch /me/account"));
            }
            if (n && !n.ok)
              return (
                this.realm !== ae.TV && (n.status === 401 || n.status === 403) && this._reset(), t("Account error.")
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
                Dd(this.privacyAcknowledgements || {}))
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
  async musicSubscriptionOffers(e, t = Vc()) {
    let r;
    this.hasAuthorized
      ? (r = (await this.me()).info.storeFrontISO3A)
      : (e || (e = (await Qa.inferFromLanguages(this.developerToken, t))?.id),
        (r = (e && bp[e.toUpperCase()]) || "USA"));
    const s = Tp(t[0]),
      n = mp[r];
    if (!s || !n) return [];
    const a = new Headers({ "X-Apple-Store-Front": `${n}-${s},8` });
    this.userToken &&
      (a.set("Authorization", `Bearer ${this.developerToken}`), a.set("Music-User-Token", this.userToken));
    const o = await this.fetch(`${this.iTunesBuyBase}/commerce/web/subscription/offers/music`, { headers: a });
    return o.ok ? (await o.json()).offers : Promise.reject(o.status);
  }
  _getStorageItem(e) {
    if (e) {
      if (this.persist === "cookie") return pt(e);
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
    (de.debug("Calling removeCookie", e), Ls(e));
    const { hostname: r } = t.location,
      s = r.split(".");
    if (s.length && (s.shift(), s.length > 2))
      for (let n = s.length; n > 2; n--) {
        const a = s.join(".");
        (s.shift(), de.debug("Calling removeCookie", e, t, a), Ls(e, t, a));
      }
  }
  _reset(e = ne.NOT_DETERMINED) {
    ((this._authorizationStatus = e),
      (this._cids = {}),
      (this._dispatchedSubscribeView = !1),
      (this._restrictedEnabled = void 0),
      (this._storefrontCountryCode = void 0),
      this._getIsActiveSubscription.updateCache(void 0),
      Object.keys(ds).forEach((t) => {
        this._removeStorageItem(ds[t]);
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
        : (de.debug("Calling setCookie from _setStorageItem", e, t),
          wn(e, t, "/", 180, void 0, Bc(window.location.hostname)));
    if (this.persist === "localstorage") return this.storage?.setItem(`${this.storagePrefix}.${e}`, t);
  }
  async _webPlayerLogout() {
    const e = this.logoutURL;
    if (!e) return;
    const t = new Headers({
      Authorization: `Bearer ${this.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      [`X-Apple-${bt}`]: `${this.userToken}`,
    });
    or && (t.delete(`X-Apple-${bt}`), t.append(bt, this.userToken || ""));
    const r = await this.fetch(e, { method: "POST", headers: t, credentials: or ? "include" : "same-origin" });
    return r && !r.ok ? Promise.reject(r.status) : r.json();
  }
}
xp([vp(15 * 60)], qc.prototype, "_getIsActiveSubscription", 1);
var U = ((i) => (
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
  ))(U || {}),
  Ae = ((i) => ((i[(i.pictureinpicture = 0)] = "pictureinpicture"), (i[(i.inline = 1)] = "inline"), i))(Ae || {});
function Wc() {
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
const Vp = [
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
function Un(i) {
  return i?.attributes?.playParams?.kind !== void 0 ? i.attributes.playParams.kind : i?.type;
}
function Bp(i) {
  return i == null ? !1 : i.isUTS === !0 || Vp.includes(i.type) || i.attributes?.mediaKind === "video";
}
function $p(i) {
  return i == null ? !1 : !Bp(i);
}
function yr(i) {
  return Un(i) === "song";
}
function Kr(i) {
  return Un(i)?.startsWith("podcast-episode") === !0;
}
function Hp(i) {
  const e = i?.attributes?.offers ?? [];
  return Kr(i) && e.some(({ type: t }) => t === "STDQ");
}
function Yc(i) {
  const e = i?.attributes?.offers ?? [];
  return Kr(i) && e.some(({ type: t }) => t === "PSUB");
}
function cr(i) {
  const e = i?.attributes?.offers ?? [];
  return Kr(i) && e.some(({ type: t }) => t === "PLUS");
}
function xn(i) {
  return !!i?.attributes?.isLive;
}
function Fn(i) {
  return i?.attributes?.playParams?.format === "stream";
}
function Gc(i) {
  return i?.attributes?.playParams?.format === "tracks";
}
function jp(...i) {
  return Gc(...i);
}
function qp(i) {
  return jp(i);
}
function Oi(i, e) {
  return !(i?.attributes?.playParams?.kind !== "radioStation" || (e !== void 0 && i.attributes?.mediaKind !== e));
}
function Kn(i, e) {
  return Oi(i, e) && Fn(i) && !xn(i) && i?.attributes?.streamingRadioSubType === "Episode";
}
function lr(i, e) {
  return Oi(i, e) && xn(i) && Fn(i);
}
function XE(i, e) {
  return lr(i, e);
}
function Wp(i, e) {
  return Kn(i, e) || !!i?.attributes?.isAOD;
}
function Yp(i) {
  return (
    xn(i) && Fn(i) && i.attributes.stationProviderName !== void 0 && i.attributes.streamingRadioSubType === "Shoutcast"
  );
}
function Gp(i) {
  return i?.type === "LiveService" || i?.defaultPlayable?.type === "Event" || i?.defaultPlayable?.type === "EbsEvent";
}
function zp(i) {
  return Uh(i);
}
function JE(i) {
  return i.match(/-?songs$/i) !== null;
}
const Qp = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function ZE(i) {
  const e = Un(i);
  return e !== void 0 && Qp.includes(e);
}
const zc = "explicit",
  Qc = [
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
  Xp = "mediaItemStateDidChange",
  Jp = "mediaItemStateWillChange",
  Xs = { mediaItemStateDidChange: Xp, mediaItemStateWillChange: Jp },
  Xc = new Dt("media-item");
function mr(i) {
  let e = i.id;
  const t = i.attributes ?? {};
  let r = "";
  const s = t.name || t.title;
  return (
    q(s) || (r += s),
    q(t.albumName) || (r += " - " + t.albumName),
    q(t.artistName) || (r += " - " + t.artistName),
    r !== "" && (e += ` (${r})`),
    e
  );
}
var me = ((i) => (
    (i[(i.none = 0)] = "none"),
    (i[(i.preview = 1)] = "preview"),
    (i[(i.unencryptedFull = 2)] = "unencryptedFull"),
    (i[(i.encryptedFull = 3)] = "encryptedFull"),
    i
  ))(me || {}),
  $ = ((i) => (
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
  ))($ || {});
const {
    none: Jc,
    loading: Xa,
    ready: Ja,
    playing: Za,
    ended: ps,
    unavailable: fs,
    restricted: Gi,
    error: ci,
    unsupported: zi,
  } = $,
  Zc = {
    [Jc]: { allowed: [Xa], unknown: [ps, fs, Gi, ci, zi] },
    [Xa]: { allowed: [Ja, Gi, ci, zi], unknown: [] },
    [Ja]: { allowed: [Za], unknown: [ci] },
    [Za]: { allowed: [ps, ci], unknown: [fs, Gi, zi] },
    [ps]: { allowed: [], unknown: [] },
    [fs]: { allowed: [], unknown: [] },
    [Gi]: { allowed: [], unknown: [] },
    [ci]: { allowed: [], unknown: [] },
    [zi]: { allowed: [], unknown: [] },
  },
  eo = (i) => $[i],
  Zp = (i, e) => Zc[i].allowed.includes(e),
  ef = (i, e) => Zc[i].unknown.includes(e),
  tf = (i = Jc) => {
    const e = {
      current: i,
      set: function (t) {
        const { current: r } = e;
        if (!Zp(r, t)) {
          const s = ef(r, t);
          Xc.debug(
            `MediaItem.state was changed from ${eo(r)} to ${eo(t)}`,
            s ? "but it is unknown whether it should be allowed or not." : "and it should not be happening",
          );
        }
        e.current = t;
      },
    };
    return e;
  },
  { mediaItemStateDidChange: to, mediaItemStateWillChange: io } = Xs;
class Si extends Ot {
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
  playbackType = me.none;
  href;
  relationships;
  _container;
  _context;
  _releaseDate;
  _state = tf();
  _stateDidChange;
  _stateWillChange;
  assets = [];
  keyURLs;
  constructor(e = {}) {
    (super([to, io]), Xc.debug("media-item: creating Media Item with options:", e));
    const t = "song";
    (e.id && e.attributes
      ? (Object.assign(this, e), (this.type = this.playParams?.kind ? this.playParams.kind : this.type || t))
      : ((this.id = e.id || Nr()),
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
    return Gp(this);
  }
  get isAlgoStation() {
    return qp(this);
  }
  get isRadioStation() {
    return Oi(this);
  }
  get isRadioEpisode() {
    return Kn(this);
  }
  get isLiveRadioStation() {
    return lr(this);
  }
  get isLiveAudioStation() {
    return lr(this, "audio");
  }
  get isLiveVideoStation() {
    return lr(this, "video");
  }
  get isAOD() {
    return Wp(this);
  }
  get isSong() {
    return yr(this);
  }
  get isPodcastEpisode() {
    return Kr(this);
  }
  get info() {
    return `${this.title} - ${this.albumInfo}`;
  }
  get isCloudItem() {
    return this.isLibraryItem;
  }
  get isLibrary() {
    return this.playParams?.isLibrary === !0 || _i(this.playParams?.id) || _i(this.id);
  }
  get isLibraryItem() {
    return this.isLibrary;
  }
  get isCloudUpload() {
    return this.isLibraryItem && this.playParams.reporting === !1 && this.playParams.catalogId === void 0;
  }
  get isExplicitItem() {
    return this.contentRating === zc;
  }
  get isLoading() {
    return this.state === $.loading;
  }
  get isPlayableMediaType() {
    return this.isUTS || Qc.indexOf(this.type) !== -1;
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
    return this.state === $.playing;
  }
  get isPreparedToPlay() {
    const e = Bt(this.catalogId) && !q(this.catalogId),
      t = Bt(this.assetURL) && !q(this.assetURL),
      r = !!(
        this.keyURLs &&
        !q(this.keyURLs["hls-key-cert-url"]) &&
        !q(this.keyURLs["hls-key-server-url"]) &&
        !q(this.keyURLs["widevine-cert-url"])
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
    return this.state === $.ready;
  }
  get isRestricted() {
    return this.state === $.restricted;
  }
  get isUTS() {
    return !!this.defaultPlayable;
  }
  get isUnavailable() {
    return this.state === $.unavailable;
  }
  get needsPlayParams() {
    return ["musicMovie", "musicVideo", "song"].includes(this.type);
  }
  get normalizedType() {
    return zp(this.type);
  }
  get offers() {
    return this.attributes.offers;
  }
  get offersHlsUrl() {
    const { offers: e } = this;
    return e?.find((r) => !!r.hlsUrl?.length)?.hlsUrl;
  }
  get hasOffersHlsUrl() {
    return Bt(this.offersHlsUrl) && !q(this.offersHlsUrl);
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
      this.dispatchEvent(io, t),
      this._state.set(e),
      this._stateDidChange && this._stateDidChange(this),
      this.dispatchEvent(to, t));
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
    (this.endMonitoringStateWillChange(), this.endMonitoringStateDidChange(), (this.state = $.none));
  }
  restrict() {
    this.isExplicitItem && ((this.state = $.restricted), this._removePlayableData());
  }
  notSupported() {
    ((this.state = $.unsupported), this._removePlayableData());
  }
  updateFromLoadError(e) {
    switch (e.reason) {
      case p.Reason.CONTENT_RESTRICTED:
        this.state = $.restricted;
        break;
      case p.Reason.CONTENT_UNAVAILABLE:
        this.state = $.unavailable;
        break;
      default:
        this.state = $.error;
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
const _ = () => (i, e, t) => {
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
  u = new Dt("player"),
  Js = "mk-player-tsid",
  el = 'audio/mp4;codecs="mp4a.40.2"',
  rf = 'video/mp4;codecs="avc1.42E01E"',
  Zs = "mk-audio-track",
  en = "mk-text-track",
  tn = "mk-video-track",
  ut = "Off",
  Qi = "disabled",
  xe = "showing",
  g = {
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
  sf = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
  nf = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"],
  af = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
  gr = () => Promise.resolve(),
  of = (i) => {
    if (typeof i > "u") return gr;
    const e = sf.find((t) => typeof i.prototype[t] == "function");
    return typeof e != "string" ? gr : (t = self.document) => t?.[e]?.();
  },
  cf = of(Document),
  lf = (i) => {
    if (typeof i > "u") return () => !1;
    const e = nf.find((t) => t in i.prototype);
    return typeof e != "string" ? () => !1 : (t = self.document) => !!t[e];
  },
  tl = lf(Document),
  uf = (i) => {
    if (typeof i > "u") return gr;
    const e = af.find((t) => typeof i.prototype[t] == "function");
    return typeof e != "string" ? gr : (t) => t?.[e]();
  },
  df = uf(HTMLElement);
class hf {
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
    return cf();
  }
  isInFullscreen() {
    return tl();
  }
  requestFullscreenForElement(e) {
    return df(e);
  }
}
class pf {
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
class il {
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
    return this._player.isEngagedInPlayback;
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
var ff = Object.defineProperty,
  yf = Object.getOwnPropertyDescriptor,
  Vn = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? yf(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && ff(e, t, s), s);
  };
const {
  visibilityChangeEvent: vr,
  visibilityState: rn,
  unloadEventName: ro,
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
class Di {
  player;
  runtimeEnvironment;
  dispatchVisibilityChanges = !0;
  constructor(e, t) {
    ((this.player = e), (this.runtimeEnvironment = t));
  }
  activate(e = self, t = self.document) {
    (t.addEventListener(vr, this.visibilityChanged),
      e.addEventListener("storage", this.storage, !1),
      e.addEventListener(ro, this.windowUnloaded));
  }
  deactivate() {
    (document.removeEventListener(vr, this.visibilityChanged),
      window.removeEventListener("storage", this.storage),
      window.addEventListener(ro, this.windowUnloaded));
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
    e === Js && this.player.tsidChanged(t);
  }
  visibilityChanged(e) {
    const t = e.target[rn];
    (u.info("dc visibilityState", t, e, tl()),
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
Vn([_()], Di.prototype, "storage", 1);
Vn([_()], Di.prototype, "visibilityChanged", 1);
Vn([_()], Di.prototype, "windowUnloaded", 1);
var mf = Object.defineProperty,
  gf = Object.getOwnPropertyDescriptor,
  vf = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? gf(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && mf(e, t, s), s);
  };
const so = [
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
  bf = ["NotAllowedError", "NotSupportedError"];
class Vr {
  id = Nr();
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
  _playbackState = U.none;
  _stopped = !1;
  _timing;
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
      (this._timing = e.services.timing),
      (this._context = e.context || {}),
      (this.privateEnabled = e.privateEnabled || !1),
      (this.siriInitiated = e.siriInitiated || !1),
      (this._bitrateCalculator = e.services.bitrateCalculator),
      (this.windowHandlers = new Di(this, e.services.runtime)),
      (this.fullscreen = new hf(this)),
      He()?.setItem(Js, this._serial),
      (this._playbackErrorSubscription = this._dispatcher.subscribe(g.mediaPlaybackError, this.onPlaybackError)));
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
      r = e.playbackType === me.encryptedFull || e.playbackType === me.unencryptedFull,
      s = e.playbackDuration;
    return r && s && !t ? this.calculateTime(s / 1e3) : this.calculateTime(this._currentDuration);
  }
  get currentPlaybackTime() {
    return this.calculateTime(this._currentTime);
  }
  calculateTime(e) {
    return this._timing.time(e);
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
  get isEngagedInPlayback() {
    return !this._stopped && !this.isPaused();
  }
  get isPlaying() {
    return this.playbackState === U.playing;
  }
  get isPrimaryPlayer() {
    return this._isPrimaryPlayer;
  }
  set isPrimaryPlayer(e) {
    e !== this._isPrimaryPlayer &&
      ((this._isPrimaryPlayer = e),
      this._isPrimaryPlayer
        ? He()?.setItem(Js, this._serial)
        : (this._dispatcher.publish(g.primaryPlayerDidChange, { target: this }), this.pause({ userInitiated: !1 })));
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
      (t.publish(g.nowPlayingItemWillChange, { item: e }),
        (this._nowPlayingItem = e),
        t.publish(g.nowPlayingItemDidChange, { item: e }));
      return;
    }
    const r = this._nowPlayingItem,
      s = this._buffer;
    r?.isEqual(e) ||
      (t.publish(g.nowPlayingItemWillChange, { item: e }),
      this.isPlaying && s?.currentItem !== e && this._pauseMedia(),
      r &&
        (u.debug("setting state to ended on ", r.title),
        (r.state = $.ended),
        r.endMonitoringStateDidChange(),
        r.endMonitoringStateWillChange()),
      (this._nowPlayingItem = e),
      u.debug("setting state to playing on ", e.title),
      (e.state = $.playing),
      e && e.info && this._setTargetElementTitle(e.info),
      t.publish(g.nowPlayingItemDidChange, { item: e }),
      t.publish(g.playbackDurationDidChange, {
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
      this._dispatcher.publish(g.playbackStateWillChange, s),
      (this._playbackState = e),
      this._dispatcher.publish(g.playbackStateDidChange, s));
  }
  get playbackTargetAvailable() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetAvailable;
  }
  set playbackTargetAvailable(e) {
    e !== this._playbackTargetAvailable &&
      ((this._playbackTargetAvailable = e),
      this._dispatcher.publish(g.playbackTargetAvailableDidChange, { available: e }));
  }
  get playbackTargetIsWireless() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetIsWireless;
  }
  set playbackTargetIsWireless(e) {
    e !== this._playbackTargetIsWireless &&
      ((this._playbackTargetIsWireless = e),
      this._dispatcher.publish(g.playbackTargetIsWirelessDidChange, { playing: e }));
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
      this._dispatcher.publish(g.mediaElementCreated, this._targetElement),
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
      so.forEach((t) => e.addEventListener(t, this)),
      this._dispatcher.publish(S.playerActivate));
  }
  removeEventHandlers() {
    (u.trace("BasePlayer.removeEventHandlers()"),
      setTimeout(() => {
        (u.debug(`Removing event handlers from <HTMLMediaElement id=${this._targetElement.id} />`, this._targetElement),
          so.forEach((e) => this._targetElement.removeEventListener(e, this)),
          this.windowHandlers.deactivate());
      }, 0));
  }
  isPaused() {
    return this._paused;
  }
  exitFullscreen() {
    return this.fullscreen.exit();
  }
  requestFullscreen(e) {
    return this.fullscreen.request(e);
  }
  newSeeker() {
    return (this._seeker?.end(), (this._seeker = new il(this)), this._seeker);
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
  async stopMediaAndCleanup(e = U.stopped) {
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
      this._dispatcher.publish(g.playbackProgressDidChange, { progress: this._currentPlaybackProgress }));
  }
  calculateBufferedProgress(e) {
    const t = Math.round((e / this.currentPlaybackDuration) * 100);
    this._currentBufferedProgress !== t &&
      ((this._currentBufferedProgress = t), this._dispatcher.publish(g.bufferedProgressDidChange, { progress: t }));
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
        (this._dispatcher.publish(g.mediaCanPlay, e),
          this._playbackState === U.waiting && !this._targetElement.paused && this.setPlaybackState(U.playing, t));
        break;
      }
      case "durationchange": {
        this._targetElement.duration !== 1 / 0 &&
          ((e.duration = this.currentPlaybackDuration),
          this._dispatcher.publish(g.playbackDurationDidChange, e),
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
        (await this.stopMediaAndCleanup(U.ended),
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
          (this._targetElement.error?.code === 4 || this._targetElement.error?.code === 3) && !yr(this.nowPlayingItem))
        )
          break;
        this._dispatcher.publish(g.mediaPlaybackError, new p(p.Reason.MEDIA_PLAYBACK, "Playback Error"));
        break;
      }
      case "loadedmetadata": {
        this._dispatcher.publish(g.metadataDidChange, e);
        break;
      }
      case "loadstart": {
        this.setPlaybackState(U.loading, t);
        break;
      }
      case "pause": {
        this.setPlaybackState(this._stopped ? U.stopped : U.paused, t);
        break;
      }
      case "play":
      case "playing": {
        ((this._paused = !1), (this._stopped = !1), (this.isPrimaryPlayer = !0), this.setPlaybackState(U.playing, t));
        break;
      }
      case "progress": {
        const r = this._targetElement.buffered;
        (this.handleBufferStart(), r.length === 1 && r.start(0) === 0 && this.calculateBufferedProgress(r.end(0)));
        break;
      }
      case "ratechange": {
        this._dispatcher.publish(g.playbackRateDidChange, e);
        break;
      }
      case "seeked": {
        this._stopped
          ? this.setPlaybackState(U.stopped, t)
          : this._paused
            ? this.setPlaybackState(U.paused, t)
            : this.playbackState !== U.ended && this.setPlaybackState(U.playing, t);
        break;
      }
      case "seeking": {
        (this.playbackState === U.paused
          ? (this._paused = !0)
          : this.playbackState === U.stopped && (this._stopped = !0),
          this.playbackState !== U.ended && this.setPlaybackState(U.seeking, t));
        break;
      }
      case "timeupdate": {
        (this._dispatcher.publish(g.playbackTimeDidChange, {
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
        this._dispatcher.publish(g.playbackVolumeDidChange, e);
        break;
      }
      case "waiting": {
        this.isReady || this.setPlaybackState(U.waiting, t);
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
          (t && bf.includes(t.name) && u.error("BasePlayer.play() rejected due to", t), t?.name === "NotAllowedError")
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
      je(t, "isPlaying") || (t.isPlaying = this.isPlaying),
      this._dispatcher.publish(e, t));
  }
  tsidChanged(e) {
    e === void 0 || e === "" || (this.isPrimaryPlayer = e === this._serial);
  }
  async _waitForPendingPlay() {
    this._deferredPlay && (await this._deferredPlay.promise, (this._deferredPlay = void 0));
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
    return (
      r?.startTime && (e += `#t=${r.startTime}`),
      t || this.startPlaybackSequence(),
      await this._playAssetURL(e, t),
      this.finishPlaybackSequence()
    );
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
      (this._deferredPlay = Wc()),
      this._deferredPlay.promise
    );
  }
  toString() {
    return `<${this.constructor.name} id="${this.id}" isInitialized=${this.isInitialized} isDestroyed=${this.isDestroyed} />`;
  }
}
vf([_()], Vr.prototype, "onPlaybackError", 1);
function Ni(i, e) {
  if (i.type === "Preview" && !q(i.previewURL, { trim: !0 })) return i.previewURL;
  if (!i.assetURL) throw new Error("Cannot generate asset URL");
  const t = {};
  return (
    i.isUTS && (t.vsgn = "all"),
    e?.startOver && (t.startOver = !0),
    e?.bingeWatching && (t.bingeWatching = !0),
    e?.drmUsed && (t.drmUsed = e.drmUsed),
    i.supportsLinearScrubbing && (t.linearScrubbingSupported = !0),
    i.assetURL.match(/xapsub=accepts-css/) || (t.xapsub = "accepts-css"),
    Mr(i.assetURL, t)
  );
}
var F = ((i) => (
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
  ))(F || {}),
  jt = ((i) => ((i.MP4 = "audio/mp4"), (i.AVC1 = "video/mp4"), i))(jt || {}),
  sn = ((i) => (
    (i.Home = "com.apple.amp.appletv.home-team-radio"),
    (i.Away = "com.apple.amp.appletv.away-team-radio"),
    i
  ))(sn || {});
const Tf = "com.apple.amp.appletv.identifier",
  rl = "public.accessibility.describes-video",
  _f = "public.accessibility.sign-language-interpretation";
function Ef(i) {
  return (i.MediaSelectionOptionsTaggedMediaCharacteristics ?? []).includes(rl);
}
function sl(i) {
  return i.characteristics !== void 0 && i.characteristics.includes("com.apple.amp.appletv.home-team-radio");
}
function nl(i) {
  return i.characteristics !== void 0 && i.characteristics.includes("com.apple.amp.appletv.away-team-radio");
}
function Sf(i) {
  return i.characteristics?.find((e) => e.startsWith(Tf));
}
function nn(i) {
  return { label: i.label, kind: i.kind, language: i.language };
}
function Bn(i, e) {
  Fd(i, nn(e));
}
function Br(i) {
  return xd(i);
}
function Ft(i, e) {
  const t = nn(i),
    r = nn(e);
  for (const s of Object.keys(t)) if (t[s] !== r[s]) return !1;
  return !0;
}
function ys(i) {
  return kf(i)
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
function kf(i) {
  return typeof i == "object" && i !== null && "MediaSelectionOptionsExtendedLanguageTag" in i;
}
function $n(i, e) {
  if (!e?.language) return;
  const t = e.kind === "description",
    r = i.filter((s) => s.MediaSelectionOptionsExtendedLanguageTag === e.language && Ef(s) === t);
  return !("id" in e) || r.length === 1 ? r[0] : r.find((s) => s.MediaSelectionOptionsPersistentID === e.id);
}
function If(i) {
  return i.find((e) => e.MediaSelectionOptionsIsDefault);
}
function al(i, e) {
  return $n(i, Br(e));
}
function no(i, e) {
  return ol(i, Zs, e);
}
function Pf(i, e) {
  return ol(i, tn, e);
}
function ol(i, e, t) {
  return $n(i, t) ?? al(i, e) ?? If(i) ?? i[0];
}
function ms(i, e, t) {
  return $n(i, t) ?? al(i, en) ?? Af(i, e);
}
function Af(i, e) {
  if (!e) return;
  const t = e.MediaSelectionOptionsExtendedLanguageTag;
  return i.find(
    (r) => r.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 && r.MediaSelectionOptionsExtendedLanguageTag === t,
  );
}
function Hn(i) {
  return {
    id: i.MediaSelectionOptionsPersistentID,
    label: i.MediaSelectionOptionsName,
    language: i.MediaSelectionOptionsExtendedLanguageTag,
    interstitialId: i.MediaSelectionOptionsInterstitialId,
    isDefault: i.MediaSelectionOptionsIsDefault,
  };
}
function wf(i) {
  const e = i.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e ?? []).includes(rl) ? "description" : "main";
  return { ...Hn(i), enabled: !1, kind: t, characteristics: e };
}
function Rf(i) {
  const e = i.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e ?? []).includes(_f) ? "sign" : "main";
  return { ...Hn(i), enabled: !1, kind: t, characteristics: e };
}
function ao(i) {
  let e;
  return (
    i.MediaSelectionOptionsTaggedMediaCharacteristics?.includes("public.accessibility.describes-music-and-sound")
      ? (e = "captions")
      : (e = i.MediaSelectionOptionsMediaType === "clcp" ? "captions" : "subtitles"),
    { ...Hn(i), mode: "disabled", kind: e }
  );
}
class Cf {
  constructor(e, t, r) {
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = r), this.extensionTracks))
      (u.debug("MEDIA_TRACK Initializing audio track manager for hls track events"),
        (this.onExtensionAudioTracksUpdated = this.onExtensionAudioTracksUpdated.bind(this)),
        (this.onExtensionAudioTrackSwitched = this.onExtensionAudioTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(F.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.addEventListener(F.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
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
        !sl(e) &&
        !nl(e) &&
        (Bn(Zs, e), u.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`)),
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
      (this.extensionTracks.removeEventListener(F.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.removeEventListener(F.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
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
      this.dispatcher.publish(g.audioTrackAdded, e));
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
    this.dispatcher.publish(g.audioTrackChanged, e);
  }
  onAudioTrackAdded(e) {
    const t = Br(Zs);
    (t !== void 0 &&
      Ft(e.track, t) &&
      (u.debug(`Found new track matching persisted track: ${e.track.label}`), (this.currentTrack = e.track)),
      this.dispatcher.publish(g.audioTrackAdded, e));
  }
  onAudioTrackChanged(e) {
    this.dispatcher.publish(g.audioTrackChanged, e);
  }
  onAudioTrackRemoved(e) {
    this.dispatcher.publish(g.audioTrackRemoved, e);
  }
}
class Of {
  constructor(e, t, r) {
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = r), this.extensionTracks))
      (u.debug("MEDIA_TRACK Initializing video track manager for hls track events"),
        (this.onExtensionVideoTracksUpdated = this.onExtensionVideoTracksUpdated.bind(this)),
        (this.onExtensionVideoTrackSwitched = this.onExtensionVideoTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(F.videoTracksUpdated, this.onExtensionVideoTracksUpdated),
        this.extensionTracks.addEventListener(F.videoTracksSwitched, this.onExtensionVideoTrackSwitched));
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
      e && Bn(tn, e),
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
      (this.extensionTracks.removeEventListener(F.videoTracksUpdated, this.onExtensionVideoTracksUpdated),
        this.extensionTracks.removeEventListener(F.videoTracksSwitched, this.onExtensionVideoTrackSwitched));
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
      this.dispatcher.publish(g.videoTrackAdded, e));
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
    this.dispatcher.publish(g.videoTrackChanged, e);
  }
  onVideoTrackAdded(e) {
    const t = Br(tn);
    (t !== void 0 &&
      Ft(e.track, t) &&
      (u.debug(`Found new track matching persisted track: ${e.track.label}`), (this.currentTrack = e.track)),
      this.dispatcher.publish(g.videoTrackAdded, e));
  }
  onVideoTrackChanged(e) {
    this.dispatcher.publish(g.videoTrackChanged, e);
  }
  onVideoTrackRemoved(e) {
    this.dispatcher.publish(g.videoTrackRemoved, e);
  }
}
const br = [],
  Tr = [],
  Df = 100;
function Nf() {
  let i = br.pop();
  return (
    i
      ? u.debug(`dom-helpers: retrieving video tag, ${br.length} remain`)
      : (u.debug("dom-helpers: no available video tags, creating one"), (i = document.createElement("video"))),
    i
  );
}
function cl() {
  let i = Tr.pop();
  return (
    i
      ? u.debug(`dom-helpers: retrieving audio tag, ${Tr.length} remain`)
      : (u.debug("dom-helpers: no available audio tags, creating one"), (i = document.createElement("audio"))),
    i
  );
}
function Lf() {
  (Mf(),
    u.debug(
      `dom-helpers: defer playback called.  There are ${br.length} available video elements and ${Tr.length} available audio elements.`,
    ));
}
function Mf() {
  (oo("audio", Tr), oo("video", br));
}
function oo(i, e) {
  let t = Df - e.length;
  for (; t > 0;) {
    const r = document.createElement(i);
    (r.load(), e.push(r), t--);
  }
}
function Uf(i) {
  return i != null && typeof i.id == "string" && "removeEventListener" in i;
}
function xf(i) {
  return i != null && typeof i.id == "string" && typeof i.value < "u" && typeof i.value.key == "string";
}
const ll = {
    [G.clearkey]: "",
    [G.widevine]: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
    [G.playready]: "com.microsoft.playready",
    [G.fairplay]: "com.apple.streamingkeydelivery",
  },
  { textTracksSwitched: co, textTracksUpdated: lo, itemPlaying: uo } = F;
class Ff {
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
          this.extensionTracks.addEventListener(lo, this.onExtensionTextTracksUpdated),
          this.extensionTracks.addEventListener(co, this.onExtensionTextTrackSwitched),
          this.extensionTracks.addEventListener(uo, this.onExtensionItemPlaying))
        : (u.debug("MEDIA_TRACK Initializing text track manager for native track events"),
          (this.onTextTrackAdded = this.onTextTrackAdded.bind(this)),
          (this.onTextTrackChanged = this.onTextTrackChanged.bind(this)),
          (this.onTextTrackRemoved = this.onTextTrackRemoved.bind(this)),
          (this.onPlayStart = this.onPlayStart.bind(this)),
          e.textTracks.addEventListener("addtrack", this.onTextTrackAdded),
          e.textTracks.addEventListener("change", this.onTextTrackChanged),
          e.textTracks.addEventListener("removetrack", this.onTextTrackRemoved),
          e.addEventListener("playing", this.onPlayStart),
          (this.onAudioTrackAddedOrChanged = Ad(this.onAudioTrackAddedOrChanged.bind(this))),
          (this._audioTrackSubscription = t.subscribe(
            [g.audioTrackChanged, g.audioTrackAdded],
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
    (Bn(en, e),
      u.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`),
      this.extensionTracks
        ? (u.debug(`MEDIA_TRACK Setting track on extension ${e.label}`),
          e.label === ut && this.clearCurrentlyPlayingTrack(),
          (this.extensionTracks.textTrack = e))
        : (u.debug(`MEDIA_TRACK Setting track on element ${e.label}`),
          this._tracks.forEach((r) => {
            r !== e && r.mode === xe && (r.mode = Qi);
          }),
          e &&
            (u.debug(`MEDIA_TRACK setting track mode to showing for ${e.label}`),
            this.isTrackOff(e)
              ? ((this._tracks[0].mode = xe), (t = this.selectNativeForcedTrack(this.mediaElement.audioTracks)))
              : (e.mode = xe)),
          this.dispatcher.publish(g.forcedTextTrackChanged, { textTrack: t })));
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
      (e.removeEventListener(lo, this.onExtensionTextTracksUpdated),
        e.removeEventListener(co, this.onExtensionTextTrackSwitched),
        e.removeEventListener(uo, this.onExtensionItemPlaying));
    }
    this._audioTrackSubscription?.unsubscribe();
  }
  restoreSelectedTrack() {
    const e = this.getValidSavedTrack();
    e && (u.debug(`Found track matching persisted track: ${e.label}`), (this.currentTrack = e));
  }
  getSavedTrack() {
    return Br(en);
  }
  getValidSavedTrack() {
    const e = this.getSavedTrack();
    if (e) return this.tracks.find((t) => Ft(t, e));
  }
  onExtensionTextTracksUpdated(e) {
    (u.debug("MEDIA_TRACK Extension text tracks updated", e),
      (this._tracks = [this.createOffOption(), ...e]),
      this.dispatcher.publish(g.textTrackAdded, e));
  }
  onExtensionTextTrackSwitched(e) {
    (u.debug("MEDIA_TRACKS Extension text track switched", e), this.handleVTT(e));
    const t = e.track;
    if (this._tracks) {
      const r = (s) => {
        e.track
          ? (t.forced && s.label === ut) || (t.label === ut && s.label === ut)
            ? (s.mode = xe)
            : (s.mode = t.persistentID === s.id ? xe : Qi)
          : (s.mode = s.label === ut ? xe : Qi);
      };
      this._tracks.forEach(r);
    }
    this.dispatcher.publish(g.textTrackChanged, e);
  }
  onExtensionItemPlaying(e) {
    this.dispatcher.publish(g.forcedTextTrackChanged, { textTrack: e.forcedTextTrack });
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
    (this._tracks.push(e.track), this.dispatcher.publish(g.textTrackAdded, e));
  }
  onPlayStart() {
    this.restoreSelectedTrack();
  }
  onTextTrackRemoved(e) {
    this.dispatcher.publish(g.textTrackRemoved, e);
  }
  onTextTrackChanged(e) {
    const t = this.findNativeSelectedTextTrack();
    let r = this.getSavedTrack();
    if ((r || (r = this._tracks[0]), t && !Ft(t, r)))
      if (this.isTrackOff(r) && t.kind !== "forced") {
        const s = this.tracks.find((n) => Ft(n, r));
        this.currentTrack = s;
      } else {
        const s = this.findNativeTrack(r);
        s && (this.currentTrack = s);
      }
    else this.dispatcher.publish(g.textTrackChanged, e);
  }
  findNativeSelectedTextTrack() {
    for (let e = 0; e < this.mediaElement.textTracks.length; e++) {
      const t = this.mediaElement.textTracks[e];
      if (t.mode === xe) return t;
    }
  }
  findNativeTrack(e) {
    for (let t = 0; t < this.mediaElement.textTracks.length; t++) {
      const r = this.mediaElement.textTracks[t];
      if (Ft(r, e)) return r;
    }
  }
  selectNativeForcedTrack(e) {
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (r.enabled) {
        const s = this.findNativeForcedTrack(r);
        return (s && s.mode !== xe && (s.mode = xe), s);
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
    this._currentlyPlayingTrack === void 0 || !Uf(this._currentlyPlayingTrack) || delete this._currentlyPlayingTrack;
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
    return { id: -2, label: ut, language: "", kind: "subtitles", mode: !e || this.isTrackOff(e) ? xe : Qi };
  }
  isTrackOff(e) {
    return e.label === ut;
  }
}
var Kf = Object.defineProperty,
  Vf = Object.getOwnPropertyDescriptor,
  Bf = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Vf(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Kf(e, t, s), s);
  };
const $f = "apple-music-video-container",
  Hf = "picture-in-picture",
  ul = "inline",
  jf = { "picture-in-picture": Ae.pictureinpicture, inline: Ae.inline },
  jn = {};
jn[Ae.pictureinpicture] = Hf;
jn[Ae.inline] = ul;
const { presentationModeDidChange: gs } = g,
  { playbackLicenseError: qf } = F;
class qn extends Vr {
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
    return this._context.videoContainerElement ? this._context.videoContainerElement : document.getElementById($f);
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
    (this.resetDeferredPlay(), this._dispatcher.publish(qf, e));
  }
  setupTrackManagers(e) {
    (this.textTrackManager?.destroy?.(),
      (this.textTrackManager = new Ff(this._targetElement, this._dispatcher, e)),
      this.audioTrackManager?.destroy?.(),
      (this.audioTrackManager = new Cf(this._targetElement, this._dispatcher, e)),
      this.videoTrackManager?.destroy?.(),
      (this.videoTrackManager = new Of(this._targetElement, this._dispatcher, e)));
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
    if (!e) throw new m("mk-117", m.Reason.CONFIGURATION_ERROR, "No container element found");
    ((this.video = Nf()),
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
        this._dispatcher.publish(gs, { mode: Ae.pictureinpicture });
        break;
      }
      case "leavepictureinpicture": {
        this._dispatcher.publish(gs, { mode: Ae.inline });
        break;
      }
      case "webkitpresentationmodechanged": {
        const t = this._targetElement;
        this._dispatcher.publish(gs, { mode: this._translateStringToPresentationMode(t.webkitPresentationMode) });
        break;
      }
    }
  }
  async playItemFromEncryptedSource(e, t = !1, r = {}) {
    (u.debug("videoPlayer.playItemFromEncryptedSource", e, t),
      (e.playbackType = me.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = $.loading),
      (this.userInitiated = t));
    const s = Ni(e, { ...r, drmUsed: this.services.runtime.preferredKeySystem });
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
      if (e === Ae.pictureinpicture) return t.requestPictureInPicture();
      if (e === Ae.inline) return document.exitPictureInPicture();
    }
  }
  _translateStringToPresentationMode(e) {
    let t = jf[e];
    return (
      t === void 0 &&
        (u.warn(
          `videoPlayer._translateStringToPresentationMode ${e} is not a valid presentation mode, setting to inline`,
        ),
        (t = Ae.inline)),
      t
    );
  }
  _translatePresentationModeToString(e) {
    let t = jn[e];
    return (
      t === void 0 &&
        (u.warn(
          `videoPlayer._translatePresentationModeToString ${e} is not a valid presentation mode, setting to inline`,
        ),
        (t = ul)),
      t
    );
  }
  async preloadItem(e, t) {}
}
Bf([_()], qn.prototype, "onPlaybackLicenseError", 1);
const Wf = 1e3,
  Yf = 3,
  dl = (i, e, t, r = 0) =>
    i().catch((s) => {
      const n = r + 1;
      function a(c) {
        if (c && n < Yf) {
          const l = Wf * n;
          return new Promise((h, f) => {
            setTimeout(() => {
              dl(i, e, t, n).then(h, f);
            }, l);
          });
        }
        throw s;
      }
      const o = e(s);
      return typeof o == "boolean" ? a(o) : o.then(a);
    });
let ki = { developerToken: "developerTokenNotSet", musicUserToken: "musicUserTokenNotSet", cid: "cidNotSet" };
function Gf(i) {
  ki = i;
}
function zf(i, e = !1) {
  return {
    adamId: i.isPurchasedSong ? i.playParams.purchasedId : (i.catalogId ?? "-1"),
    isLibrary: i.isLibrary,
    "user-initiated": e,
  };
}
function Qf(i) {
  return { event: i.isLiveAudioStation ? "beats1" : "amtv" };
}
function Xf(i) {
  return { "adam-id": i.id, id: 1 };
}
function Jf(i, e, t = 0) {
  const r = i.keyServerQueryParameters ?? {};
  return { id: t, "lease-action": e, ...r };
}
function ho(i, e, t) {
  let r,
    s = {
      challenge: "challenge" in t ? t.challenge : it(t.licenseChallenge),
      uri: t.keyuri,
      "key-system": t.keySystem,
      stkn: t.slotToken,
    };
  return (
    t.extendedLease && (s["extended-lease"] = t.extendedLease),
    (s = xh(s, Object.keys(s))),
    e.isUTS
      ? (r = { "streaming-request": { version: 1, "streaming-keys": [{ ...s, ...Jf(e, i) }] } })
      : e.isLiveRadioStation
        ? (r = { ...s, ...Qf(e) })
        : e.hasOffersHlsUrl
          ? (r = { "license-requests": [{ ...s, ...Xf(e) }] })
          : (r = { ...s, ...zf(e, t.userInitiated) }),
    r
  );
}
class Zf {
  licenseUrl;
  playableItem;
  licenseData;
  initiated;
  keySystem;
  slotToken;
  startResponse;
  fetch(e) {
    const t = {
      Authorization: `Bearer ${ki.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Apple-Music-User-Token": `${ki.musicUserToken}`,
    };
    return (
      this.keySystem === G.widevine && (t["X-Apple-Renewal"] = !0),
      dl(
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
        `Starting License request to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${mr(this.playableItem)}`,
      ));
    const o = ho("start", t, { ...r, keySystem: s, extendedLease: a, userInitiated: n });
    this.startResponse = this.fetch(o);
    try {
      const c = await this.startResponse;
      if (!c.ok) {
        let f;
        try {
          f = await c.json();
        } catch {}
        this.processJsonError(f);
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
          `License Challenge Request failed to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${mr(this.playableItem)}`,
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
      throw new Lr(e);
    }
    throw new p(p.Reason.MEDIA_LICENSE, "Error acquiring license");
  }
  async stop() {
    if (this.startResponse)
      try {
        await this.startResponse;
      } catch {}
    if (!this.playableItem || !this.licenseData || !this.licenseUrl || !this.playableItem.isUTS) return;
    const e = ho("stop", this.playableItem, {
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
var ey = Object.defineProperty,
  ty = Object.getOwnPropertyDescriptor,
  iy = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? ty(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && ey(e, t, s), s);
  };
class Zt extends Ot {
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
    (super([F.playbackLicenseError, F.playbackSessionError]),
      (this.boundDispatchKeyError = this.dispatchKeyError.bind(this)),
      (this.boundDispatchSessionError = this.dispatchSessionError.bind(this)),
      (this.boundHandleSessionCreation = this.handleSessionCreation.bind(this)),
      (this.boundStartLicenseSession = this.startLicenseSession.bind(this)),
      (this.license = new Zf()));
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
      this.dispatchEvent(F.playbackLicenseError, l);
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
    } else t = it(new Uint8Array(r));
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
      this.dispatchEvent(F.playbackSessionError, new p(p.Reason.MEDIA_KEY, e)));
  }
  dispatchSessionError(e) {
    this.dispatchEvent(F.playbackSessionError, new p(p.Reason.MEDIA_SESSION, e));
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
      const s = $t(e.license);
      try {
        let n;
        await Promise.race([
          t.update(s),
          new Promise((a, o) => {
            n = setTimeout(() => o(new m("mk-242", m.Reason.CDM_UPDATE_TIMEOUT)), 1e4);
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
iy([_()], Zt.prototype, "startLicenseSession", 1);
var ry = Object.defineProperty,
  sy = Object.getOwnPropertyDescriptor,
  ny = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? sy(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && ry(e, t, s), s);
  };
class hl extends Zt {
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
      (s.removeEventListener("message", this.boundStartLicenseSession), Xe(s.close()));
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
      (this._mediaKeysPromise = new Promise(async (h, f) => {
        const y = await t.createMediaKeys();
        try {
          (await s.setMediaKeys(y), (this._mediaKeys = y));
          const k = await this.loadCertificateBuffer();
          await y.setServerCertificate(k);
        } catch (k) {
          (this.dispatchKeyError(k), f(k));
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
      s = it(new Uint8Array(t)),
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
      e.session.update(An("renew")));
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(e) {}
  async clearSessions() {}
}
ny([_()], hl.prototype, "startFairplayLicenseSession", 1);
const ay = /^(?:.*)(skd:\/\/.+)$/i;
class oy extends Zt {
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
        c = r.tagName === "VIDEO" ? jt.AVC1 : jt.MP4,
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
    const r = t.match(ay);
    return (r && r.length >= 2 && (t = r[1]), u.debug("Extracted assetId from EXT-X-KEY URI", t), t);
  }
  _concatInitDataIdAndCertificate(e, t, r) {
    (typeof t == "string" && (t = Pc(t)), (r = new Uint8Array(r)));
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
class cy extends Zt {
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
    const s = r.msKeys.createSession(jt.MP4, t);
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
const ly =
    '<WRMHEADER xmlns="http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version="4.3.0.0"><DATA><PROTECTINFO><KIDS><KID ALGID="AESCTR" VALUE="[KEYID]"></KID></KIDS></PROTECTINFO></DATA></WRMHEADER>',
  pl = [
    0, 0, 1, 222, 112, 115, 115, 104, 0, 0, 0, 0, 154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95,
    149, 0, 0, 1, 190,
  ],
  uy = [190, 1, 0, 0, 1, 0, 1, 0, 180, 1],
  dy = (i) => {
    const e = (t, r, s) => {
      const n = t[r];
      ((t[r] = t[s]), (t[s] = n));
    };
    (e(i, 0, 3), e(i, 1, 2), e(i, 4, 5), e(i, 6, 7));
  };
function fl(i, ...e) {
  let t = 0;
  for (const n of e) t += n.length;
  const r = new i(t);
  let s = 0;
  for (const n of e) (r.set(n, s), (s += n.length));
  return r;
}
const hy = (i) => {
    (u.debug("generating Playready pssh for keyId"), dy(i));
    const e = it(i),
      t = ly.replace("[KEYID]", e),
      r = Pc(t),
      s = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    return fl(Uint8Array, pl, uy, s);
  },
  py = (i) => {
    u.debug("generating Widevine pssh for keyId");
    const e = new Uint8Array([
      0, 0, 0, 52, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29,
      33, 237, 0, 0, 0, 20, 8, 1, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    for (let t = 0; t < i.length; t++) e[e.length - 16 + t] = i[t];
    return (u.debug("generatePSSH", e), e);
  },
  fy = { [G.widevine]: py, [G.playready]: hy },
  yy = (i, e) => {
    const t = fy[e];
    if (!t) return (u.warn("No pssh generator for ", e), i);
    const r = Uint8Array.from(i);
    return t(r);
  },
  my = (i) => fl(Uint8Array, new Uint8Array(pl), i);
class gy extends Zt {
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
    Xe(this.clearSessions());
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
      h = An(c ? atob(l) : l),
      f = (this.isWidevine && t.isSong) || h.length === 16;
    let y;
    return (
      u.debug("extracted uri", e),
      this.isPlayReady && !f
        ? (u.debug("handling Playready object"), (a.extURI = e), (y = my(h)))
        : f
          ? (u.debug("handling keyId only initData"), (a.extURI = `data:;base64,${it(h)}`), (y = yy(h, o)))
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
      Xe(this.createSessionAndGenerateRequest(t, e.item, { isRenewal: !0 })));
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
      const r = ll[this.keySystem];
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
      Xe(this._removeSessionImmediately(e));
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
function vy(i, e) {
  e.keyURLs &&
    ((i.developerToken = ki.developerToken),
    (i.userToken = ki.musicUserToken),
    (i.item = e),
    (i.adamId = e.catalogId ?? "-1"),
    (i.isLibrary = e.isLibrary),
    i.setKeyURLs(e.keyURLs));
}
const by = ve.register("mk-safari-modern-eme");
class yl extends Ot {
  _session;
  mediaElement;
  contentType;
  services;
  constructor(e) {
    (super([F.playbackLicenseError, F.playbackSessionError]),
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
    if (window.WebKitMediaKeys?.isTypeSupported(`${G.fairplay}.1_0`, jt.MP4)) {
      let r;
      (by.enabled && this.runtime.isEMESupported && (r = await Ty(this.contentType)),
        r !== void 0
          ? (u.warn("media-extension: Using Fairplay modern EME"),
            (this._session = new hl()),
            this._session.attachMedia(e, r))
          : (u.warn("media-extension: Using Fairplay legacy EME"),
            (this._session = new oy()),
            this._session.attachMedia(e, { keySystem: G.fairplay })));
    } else if (window.MSMediaKeys?.isTypeSupported(G.playready, jt.MP4))
      ((this._session = new cy()), this._session.attachMedia(e, { keySystem: G.playready }));
    else if (this.runtime.preferredKeySystem !== void 0 && e.canPlayType(t)) {
      const r = G[this.runtime.preferredKeySystem];
      if (r !== void 0) {
        this._session = new gy();
        const s = await ml(r, {
          initDataTypes: ["cenc", "keyids"],
          audioCapabilities: [{ contentType: t }],
          distinctiveIdentifier: "optional",
          persistentState: "required",
        });
        s && this._session?.attachMedia(e, s);
      }
    } else u.warn("No KeySystem available for playback!");
    this._session !== void 0 &&
      [F.playbackLicenseError, F.playbackSessionError].forEach((r) => {
        this._session.addEventListener(r, (s) => {
          this.dispatchEvent(r, s);
        });
      });
  }
  setMediaItem(e) {
    vy(this._session, e);
  }
  destroy(e) {
    this._session?.detachMedia(e);
  }
}
async function ml(i, e) {
  try {
    return navigator.requestMediaKeySystemAccess(i, [e]);
  } catch {
    u.warn(`Unable to get KeySystem access to ${i}`);
  }
}
async function Ty(i) {
  return ml(G.fairplay, {
    initDataTypes: ["skd"],
    audioCapabilities: [{ contentType: i, robustness: "" }],
    videoCapabilities: [{ contentType: i, robustness: "" }],
    distinctiveIdentifier: "not-allowed",
    persistentState: "not-allowed",
    sessionTypes: ["temporary"],
  });
}
const _y = ve.register("mk-force-audio-mse"),
  gl = () => _y.enabled;
class po {
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
class Ey {
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
const fo = /^#EXT-X-BYTERANGE:([^\n]+)\n/gim,
  yo = /^#EXT-X-MAP:([^\n]+)\n/im,
  Sy = /#EXTINF:\d*\.\d*\,[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  ky = /#EXTINF:\d*\.\d*,\s*#EXT-X-BITRATE:\d{1,3}[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  Iy = u.createChild("hls");
function Py(i) {
  if (!i || !yo.test(i)) return;
  const [, e] = i.match(yo);
  return e.split(",").reduce((t, r) => {
    const [s, n] = r.split("=");
    return ((t[s.toLowerCase()] = n.replace(/\"/gi, "")), t);
  }, {});
}
class Ay {
  _segments = [];
  _addedSegments = {};
  get segments() {
    return this._segments;
  }
  addSegment(e, t) {
    this._addedSegments[t] || (Iy.debug("Adding segment", t), this._segments.push(e), (this._addedSegments[t] = !0));
  }
  extractLiveRadioSegments(e, t) {
    this._extractContinuousSegments(Sy, e, t);
  }
  extractHlsOffersSegments(e, t) {
    this._extractContinuousSegments(ky, e, t);
  }
  _extractContinuousSegments(e, t, r) {
    if (!t || !e.test(t)) return;
    e.lastIndex = 0;
    let s;
    for (; (s = e.exec(t));) {
      const n = s[0].startsWith("#EXT-X-MAP") ? s[2] : s[1];
      let a = n;
      /^http(s)?:\/\//.test(a) || (a = Sc([...kd(r).slice(0, -1), n]));
      const o = s[0].startsWith("#EXT-X-MAP");
      this.addSegment(new Ey(a, o), n);
    }
  }
  extractByteRangeSegments(e, t) {
    if (!e || !fo.test(e)) return;
    const r = Py(e),
      s = t.split("/").pop() ?? "",
      n = t.replace(s, r.uri),
      [a, o] = r.byterange.split("@"),
      c = new po({ url: n, startByte: o, length: a });
    (this.addSegment(c, c.range),
      (e.match(fo) ?? []).forEach((l) => {
        const [, h, f] = l.match(/^#EXT-X-BYTERANGE:(\d+)@(\d+)\n/),
          y = new po({ url: n, startByte: f, length: h });
        this.addSegment(y, y.range);
      }));
  }
}
var Ii = ((i) => ((i.keysParsed = "keysParsed"), i))(Ii || {}),
  wy = Object.defineProperty,
  Ry = Object.getOwnPropertyDescriptor,
  Cy = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Ry(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && wy(e, t, s), s);
  };
const Oy = /^#EXT-X-TARGETDURATION:(\d+)/im,
  mo = /^#EXT-X-KEY:[^\n]+URI="([^"]+)"/im,
  Dy = /^#EXT-X-KEY:.*(.*$)/gim;
class vl extends Ot {
  _data;
  _downlink = 0;
  _extURI;
  _url;
  _item;
  _segmentList = new Ay();
  _manifestRefreshInterval;
  services;
  constructor(e, t, r) {
    (super([F.manifestParsed, Ii.keysParsed]),
      (this._data = e),
      (this._item = t),
      (this._url = t.assetURL),
      (this.services = r.services));
  }
  parse() {
    const e = this._item,
      t = this._data;
    if (this.services.runtime.preferredKeySystem !== "fairplay" || gl())
      if ((this._detectKeyTags(), e.hasOffersHlsUrl)) this._segmentList.extractHlsOffersSegments(t, e.assetURL);
      else if (e.isLiveRadioStation) {
        this._segmentList.extractLiveRadioSegments(t, e.assetURL);
        const [, s] = this._data.match(Oy);
        u.debug(`manifest: setting up manifest refresh interval at ${s} seconds`);
        const n = parseInt(s, 10) * 1e3;
        this._manifestRefreshInterval = setInterval(this.liveRadioRefresh, n);
      } else this._segmentList.extractByteRangeSegments(t, e.assetURL);
  }
  static async load(e, t) {
    u.debug("loading manifest for item", e.title);
    const r = e.assetURL,
      s = Rn(),
      n = s ? (t.cache ?? !0) : !1,
      a = t.services;
    if (n) {
      const f = s?.getItem(r);
      if (f) return new this(f, e, { services: a });
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
      this.dispatchEvent(F.manifestParsed));
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
      const e = this._data.match(mo);
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
    e.length && this.dispatchEvent(Ii.keysParsed, { item: this.mediaItem, keys: e });
  }
  get _legacyKeys() {
    const e = this._data.match(mo);
    u.debug("manifest: EXT_X_KEY_URI matches", e);
    const t = (e && e[1]) || void 0;
    this._extURI = t;
    const r = [];
    return (t && r.push({ keyFormat: ll[G.widevine], dataUri: t }), r);
  }
  get _modernKeys() {
    let e;
    const t = [];
    for (; (e = Dy.exec(this._data));) {
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
Cy([_()], vl.prototype, "liveRadioRefresh", 1);
const Ny = "seamlessAudioTransition",
  Ly = "bufferTimedMetadataDidChange",
  My = "loadSegmentError",
  Ce = { seamlessAudioTransition: Ny, bufferTimedMetadataDidChange: Ly, loadSegmentError: My };
function bl(i, e = "utf-8") {
  return e === "iso-8859-1" ? String.fromCharCode(...i) : new TextDecoder(e).decode(i);
}
function go(i, e = 0, t) {
  const r = [];
  t = t ?? i.length;
  for (let s = e; s < t; s++) {
    const n = i[s];
    if (String.fromCharCode(n) === "\0") break;
    r.push(String.fromCharCode(n));
  }
  return [r.join(""), r.length];
}
class Wn {
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
const Uy = [237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237];
class Tl extends Wn {
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
    return Pn(this.systemId, Uy);
  }
}
class xy extends Wn {
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
function Kt(i, e, t = []) {
  for (let r = e; r < i.length;) {
    if (t.length === 0) return;
    const n = new DataView(i.buffer, r).getUint32(0),
      a = bl(i.subarray(r + 4, r + 8)),
      o = r + n;
    if (t.length === 1 && a === t[0]) return new Wn(a, i, r, o);
    if (a === t[0]) return Kt(i, r + 8, t.slice(1));
    r += n;
  }
}
function Fy(i) {
  const e = Kt(i, 0, ["moov", "trak", "mdia", "minf", "stbl", "stsd"]),
    t = [];
  if (!e) return t;
  const r = e.start + 16;
  for (let s = r; s < e.end;) {
    let n = Kt(i, s, ["enca"]),
      a = 36;
    if ((n || ((n = Kt(i, s, ["encv"])), (a = 86)), !n)) return t;
    const o = Kt(i, n.start + a, ["sinf", "schi", "tenc"]);
    o ? (t.push(new xy(o.data, o.start, o.end)), (s = o.end)) : (s = e.end);
  }
  return t;
}
function Ky(i) {
  const e = Kt(i, 0, ["moov"]),
    t = [];
  if (!e) return t;
  const r = new DataView(i.buffer, 0),
    s = e.start + 8;
  for (let n = s; n < e.size;) {
    const a = r.getUint32(n);
    (bl(i.subarray(n + 4, n + 8)) === "pssh" && t.push(new Tl(i, n, n + a)), (n += a));
  }
  return t;
}
function Vy(i) {
  const e = [],
    t = new DataView(i.buffer);
  for (let r = 0; r < i.length;) {
    const s = t.getUint32(r);
    (e.push(new Tl(i, r, r + s)), (r += s));
  }
  return e;
}
const vo = (i) => {
  const [e] = Fy(i);
  if (!e) return;
  const r = Ky(i).find((s) => s.isWidevine);
  r && (e.defaultKeyId = r.keyBytes);
};
class _l {
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
    return By(e);
  }
  constructor(e) {
    ((this.version = e.version),
      (this.flags = { unsynchronized: !1, extendedHeader: !1, footer: !1, experimental: !1, ...e.flags }),
      (this.frames = e.frames ?? []));
  }
}
function By(i) {
  if (i.length === 0 || $y(i) !== "ID3") return;
  const e = {};
  let t = 3;
  ((e.version = [3, i[t++], i[t++]]), (e.flags = Hy(i)), (t += 1));
  const r = t + 4 + an(i.subarray(t, t + 4));
  return (
    (t += 4),
    e.flags.extendedHeader && (t += an(i.subarray(t, t + 4))),
    e.version[1] > 2 && (e.frames = El(i, e.version, [t, r])),
    new _l(e)
  );
}
function $y(i, e = 0) {
  return rt(i.subarray(e, 3));
}
function Hy(i, e = 5) {
  const t = i[e];
  return { unsynchronized: Xi(t, 7), extendedHeader: Xi(t, 6), experimental: Xi(t, 5), footer: Xi(t, 4) };
}
const jy = { WXXX: Qy, TXXX: zy, TPE1: qy, TIT2: Yy, TALB: Wy, TEXT: Gy, PRIV: Xy, CHAP: Jy };
function El(i, e, t) {
  t = t ?? [0, i.byteLength];
  const r = t[1] ?? i.byteLength;
  let s = t[0] ?? 0;
  const n = new DataView(i.buffer, 0, r),
    a = [];
  for (; s + 8 <= r;) {
    const o = rt(i.subarray(s, s + 4));
    s += 4;
    const c = e[1] === 4 ? an(i.subarray(s, s + 4)) : n.getUint32(s);
    if (((s += 4), i[s++] << (8 + i[s++]), s + c > r)) break;
    const l = i.slice(s, s + c),
      h = jy[o]?.(o, l, e);
    (h && a.push(h), (s += c));
  }
  return a;
}
function qy(i, e, t) {
  return { key: "TPE1", data: $r(rt(e.subarray(1), ei(e[0]))) };
}
function Wy(i, e, t) {
  return { key: "TALB", data: $r(rt(e.subarray(1), ei(e[0]))) };
}
function Yy(i, e, t) {
  return { key: "TIT2", data: $r(rt(e.subarray(1), ei(e[0]))) };
}
function Gy(i, e, t) {
  return { key: "TEXT", data: $r(rt(e.subarray(1), ei(e[0]))) };
}
function zy(i, e, t) {
  const r = ei(e[0]),
    [s, n] = Hr(e.subarray(1), r),
    a = n > 0 ? n + 2 : 0;
  return { key: "TXXX", data: rt(e.subarray(a), r), description: s };
}
function Qy(i, e, t) {
  const r = ei(e[0]),
    [s, n] = Hr(e.subarray(1), r),
    a = n > 0 ? n + 2 : 0;
  return { key: "WXXX", data: rt(e.subarray(a), r), description: s };
}
function Xy(i, e, t) {
  const [r, s] = Hr(e);
  if (s !== 0) return { key: "PRIV", owner: r, data: e.slice(s + 1) };
}
function Jy(i, e, t) {
  const r = new DataView(e.buffer),
    s = { key: "CHAP", elementId: "", startTime: 0, endTime: 0, frames: [] },
    [n, a] = Hr(e);
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
    (s.frames = El(e, t, [o, e.length])),
    s
  );
}
function rt(i, e = "utf-8") {
  return new TextDecoder(e).decode(i);
}
function Xi(i, e) {
  return (i & (1 << e)) !== 0;
}
const Zy = { 0: "iso-8859-1", 1: "utf-16", 2: "utf-16be", 3: "utf-8" };
function ei(i) {
  return Zy[i] ?? "iso-8859-1";
}
function $r(i) {
  return i.replace(/^\0*|\0*/g, "");
}
function Hr(i, e = "utf-8", t = 0) {
  const r = [];
  for (let s = t; s < i.byteLength; s++) {
    const n = i[s];
    if (n === 0) break;
    r.push(n);
  }
  return [rt(new Uint8Array(r), e), r.length];
}
function an(i) {
  return (i[0] & 127) * 2097152 + (i[1] & 127) * 16384 + (i[2] & 127) * 128 + (i[3] & 127);
}
function on(i, e, t) {
  return e + 4 > i.length ? !1 : i[e] === t[0] && i[e + 1] === t[1] && i[e + 2] === t[2] && i[e + 3] === t[3];
}
function em(i) {
  return i?.length >= 8 ? on(i, 4, [102, 116, 121, 112]) : !1;
}
function tm(i) {
  const e = i.length,
    t = [];
  if (em(i)) return t;
  for (let r = 0; r < e; r++) {
    if (on(i, r, [109, 111, 111, 102])) return t;
    if (on(i, r, [101, 109, 115, 103])) {
      const s = r - 4,
        a = new DataView(i.buffer, s).getUint32(0),
        o = i.subarray(s, s + a);
      ((r = r + a - 1), t.push(o));
    }
  }
  return t;
}
class Sl {
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
    return im(this, e);
  }
}
function im(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (
    typeof i != typeof e ||
    ((i = i), (e = e), i.album !== e.album || i.title !== e.title || i.performer !== e.performer) ||
    i.links?.length !== e.links?.length
  )
    return !1;
  for (let t = 0; t < (i.links?.length ?? 0); t++) if (!bo(i.links?.[t], e.links?.[t])) return !1;
  return !(!bo(i.storefrontAdamIds, e.storefrontAdamIds) || !uh(i.blob, e.blob));
}
function bo(i, e) {
  if (i === void 0 && e === void 0) return !0;
  if (typeof i != typeof e) return !1;
  ((i = i), (e = e));
  const t = Object.keys(i),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (const s of t) if (i[s] !== e[s]) return !1;
  return !0;
}
function rm(i) {
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
          (t.owner === "com.apple.radio.adamid" && (e.storefrontAdamIds = kl(t.data)),
            t.owner === "com.apple.radio.ping.jingle" && (e.blob = Il(t.data)));
          break;
      }
  return new Sl(e);
}
function sm(i) {
  const e = {};
  for (const t of i) {
    if (!xf(t) || t?.value === void 0) continue;
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
        (s === "com.apple.radio.ping.jingle" && (e.blob = Il(r.data)),
          s === "com.apple.radio.adamid" && (e.storefrontAdamIds = kl(r.data)));
        break;
      }
    }
  }
  return new Sl(e);
}
function kl(i) {
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
function Il(i) {
  return typeof i == "string" ? Uint8Array.from(atob(i), (e) => e.charCodeAt(0)) : i;
}
class nm {
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
    const [o, c] = go(e, r);
    ((r += c + 1), (this.schemeIdUri = o));
    const [l, h] = go(e, r);
    ((r += h + 1), (this.payload = e.subarray(r, e.byteLength)), (this.id3 = _l.parse(this.payload)));
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
    if (e) return ((this._timedMetadata = rm(e)), this._timedMetadata);
  }
}
class am {
  constructor(e, t) {
    ((this._currentTime = e), (this._onDidChange = t), (this._getCurrentEmsg = this._getCurrentEmsg.bind(this)));
  }
  _currentEmsgInterval;
  _emsgLookup = {};
  _currentEmsg;
  processEmsgs(e) {
    const t = tm(e);
    t.length &&
      (this._currentEmsgInterval || (this._currentEmsgInterval = setInterval(this._getCurrentEmsg, 1e3)),
      t.forEach((r) => {
        const s = new nm(r);
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
        f = o.payload;
      ((!h || !Pn(h, f)) && ((this._currentEmsg = o), l(o)), this._cleanupEmsgs(a));
    }
  }
  _cleanupEmsgs(e) {
    const { _emsgLookup: t } = this;
    Object.keys(t).forEach((s) => {
      parseInt(s, 10) < e && delete t[s];
    });
  }
}
class om {
  constructor(e, t, r) {
    ((this._item = e),
      (this._timedMetadataManager = new am(
        () => t.currentTime,
        (s) => {
          r.publish(Ce.bufferTimedMetadataDidChange, {
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
    e.isInitSegment && vo(t);
  }
  _processLiveRadioSegment(e, t) {
    (e.isInitSegment && vo(t), this._timedMetadataManager.processEmsgs(t));
  }
}
var cm = Object.defineProperty,
  lm = Object.getOwnPropertyDescriptor,
  Yn = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? lm(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && cm(e, t, s), s);
  };
const E = u.createChild("mse"),
  um = ve.get("mk-mse-buffer"),
  { manifestParsed: To } = F;
class jr {
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
      (this.segmentProcessor = new om(r.mediaItem, t, e)),
      (this.playbackTimeline = { current: { manifest: r } }),
      r.addEventListener(To, this.onManifestParsed),
      (this._currentTime = s || 0),
      (this.duration = n),
      (window.mseBuffer = this));
  }
  onSourceOpen() {
    E.debug("mediaSource open handler");
    const { mediaSource: e } = this;
    if (e.activeSourceBuffers.length > 0) {
      E.debug("not adding new source buffer");
      return;
    }
    E.debug("adding new source buffer");
    const t = e.addSourceBuffer(el);
    ((this.sourceBuffer = t), t.addEventListener("updateend", this.updateEndHandler));
    const { clip: r, hasAppendWindowSupport: s } = this;
    (r &&
      (s
        ? (E.debug("appendWindowStart/End", r.start, r.end),
          (t.appendWindowStart = r.start),
          (t.appendWindowEnd = r.end))
        : (E.debug("seeking for clip", r.start), Xe(this.seek(r.start)))),
      this.updateSegmentToFetch(0, !0));
  }
  setNextManifest(e) {
    (E.debug("setting next manifest for ", e.mediaItem.title),
      this.nextSeamlessTransition
        ? (E.debug(`abandoning transition scheduled for ${this.nextSeamlessTransition}`),
          this.revertSeamlessTransition(!0),
          (this.playbackTimeline.next = { manifest: e }))
        : ((this.playbackTimeline.next = { manifest: e }),
          this.isFullyBuffered &&
            (E.debug("current song is fully buffered, beginning transition to next"),
            this.transitionToNextManifest())));
  }
  isItemPlaying(e) {
    const { playbackTimeline: t } = this,
      r = this.nextSeamlessTransition ? t.previous?.manifest.mediaItem : t.current?.manifest.mediaItem;
    return r ? (E.debug(`isItemPlaying ${e.title}, ${r.title}, ${e.id === r.id}`), e.id === r.id) : !1;
  }
  get currentItem() {
    return this.manifest.mediaItem;
  }
  get playableUrl() {
    let e = this._playableUrl;
    return (
      e || ((e = window.URL.createObjectURL(this.mediaSource)), E.debug("created url", e), (this._playableUrl = e), e)
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
      (E.debug("setting offset to", t),
        (this.currentTimestampOffset = t || 0),
        (this.nextSeamlessTransition = void 0),
        (this.duration = this.manifest.mediaItem.playbackDuration / 1e3),
        E.debug("buffer setting duration to", this.duration));
      const a = { previous: this.playbackTimeline.previous?.manifest?.mediaItem, current: this.manifest.mediaItem };
      (E.debug("dispatching seamless audio transition", a), this.dispatcher.publish(Ce.seamlessAudioTransition, a));
    }
    this._currentTime = e;
    const { isOverBufferLimit: r, timeToTrim: s } = this,
      n = e > this.timeToTrim;
    r && n && (E.debug("buffer over limit, trimming to ", s), this.removeToTime(s), (this.timeToTrim += 10));
  }
  get hasAppendWindowSupport() {
    return this.sourceBuffer?.appendWindowStart !== void 0;
  }
  async seek(e) {
    const { duration: t, seekWhenUpdated: r, sourceBuffer: s } = this;
    if (
      (this.resolveSeekPromise(!1),
      E.debug("seek to ", e),
      (e = +e),
      e > t && (E.debug("rounding seek time to duration", e, t), (e = t)),
      !s)
    )
      return !1;
    if ((this.revertSeamlessTransition(), s.updating))
      return (
        E.debug("sourcebuffer updating, deferring seek"),
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
      E.debug("seeking to", e, "segment", n),
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
      E.debug("no need to revert, no transition");
      return;
    }
    ((this.isAtEndOfStream = e),
      E.debug("reverting seamless transition with discardNextManifest", e),
      e ? this.clearBufferToEnd(r) : this.clearBuffer(),
      E.debug(`abandoning transition to ${this.manifest.mediaItem.title}`),
      (t.next = e ? void 0 : t.current),
      (t.current = t.previous),
      (t.previous = void 0));
    const s = this.manifest.mediaItem;
    (E.debug(`current item reverted to ${s.title}`),
      (this.nextSeamlessTransition = void 0),
      (this.duration = s.playbackDuration / 1e3),
      E.debug(`reverted duration to ${this.duration}`),
      e ||
        ((this.currentTimestampOffset = 0),
        (this.timestampOffsetAdjustment = 0),
        E.debug("reverted currentTimestampOffset and timestampOffsetAdjustment to 0")),
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
    E.debug("removing sourceBuffer and mediaSource");
    const { sourceBuffer: e, mediaSource: t } = this;
    (this.seekResolver?.resolve(!1), this.manifest.removeEventListener(To, this.onManifestParsed));
    const r = this._playableUrl;
    (r && (E.debug("revoking url", r), window.URL.revokeObjectURL(r)),
      t.removeEventListener("sourceopen", this.onSourceOpen),
      e && (e.removeEventListener("updateend", this.updateEndHandler), (this.sourceBuffer = void 0)));
  }
  onManifestParsed() {
    const e = this.segmentIndexToFetch + 1;
    (E.debug("manifestParsed, loading segment", e), this.updateSegmentToFetch(e, !0));
  }
  updateEndHandler() {
    if ((this.kickstartBuffer(), this.clearDeferredRemove())) return;
    if ((E.debug("update end", this.seekWhenUpdated), this.seekWhenUpdated)) {
      E.debug("updateEndHandler resolving seekWhenUpdated");
      const { seekWhenUpdated: s } = this;
      (Xe(s.seek().then(s.resolve)), (this.seekWhenUpdated = void 0));
      return;
    }
    this.checkSeekBuffered();
    const { clip: e, sourceBuffer: t, hasAppendWindowSupport: r } = this;
    if (e && t && !r) {
      const { buffered: s } = t;
      if (this.isTimeBuffered(e.end + 1)) {
        const n = s.end(s.length - 1);
        (E.debug("clipping sourcebuffer to", e.end, n), t.remove(e.end, n));
        return;
      }
    }
    if (this.isAtEndOfStream) {
      (E.debug("buffer is at end of stream"),
        this.streamHasEnding &&
          (E.debug("isAtEndOfStream, not fetching any more segments"),
          this.playbackTimeline.next || this.setEndOfStream(),
          this.transitionToNextManifest()),
        (this.isAtEndOfStream = !1));
      return;
    }
    (E.debug("updateEndHandler invoking loadSegment"), Xe(this.loadSegment()));
  }
  clearDeferredRemove() {
    if (this.deferredRemoves.length === 0) return !1;
    const e = this.deferredRemoves.shift();
    return (
      E.trace("clearDeferredRemove", e),
      e.end > e.start
        ? this.sourceBuffer?.remove(e.start, e.end)
        : e.end <= e.start &&
          E.warn(
            `Trying to remove an invalid time range from SourceBuffer: |${e.start} <=> ${e.end}| (${e.end - e.start})`,
          ),
      !0
    );
  }
  transitionToNextManifest() {
    E.debug("beginning transition to next manifest");
    const { playbackTimeline: e, sourceBuffer: t } = this;
    if (!e.next || !t) {
      E.debug("no next manifest");
      return;
    }
    const r = this.endOfBufferTime || this.currentTimestampOffset;
    (E.debug("setting seamless transition at", r),
      (this.nextSeamlessTransition = r),
      (this.timestampOffsetAdjustment = r),
      (this.playbackTimeline.current.endTime = r),
      (e.previous = e.current),
      E.debug("previous manifest set to", e.previous?.manifest.mediaItem.title),
      (e.current = e.next),
      E.debug("current manifest set to", e.current.manifest.mediaItem.title),
      (e.next = void 0),
      this.updateSegmentToFetch(0, !0),
      this.printInfo());
  }
  updateSegmentToFetch(e, t = !1) {
    this.segments.length &&
      e < this.segments.length &&
      e !== this.segmentIndexToFetch &&
      ((this.segmentIndexToFetch = e),
      t && (E.debug("updateSegmentToFetch invoking loadSegment"), Xe(this.loadSegment())));
  }
  async loadSegment() {
    const e = this.segmentIndexToFetch,
      t = this.segments[e];
    if (e === this.currentlyLoadingSegmentIndex) {
      E.debug(`segment ${e} is currently loading, not loading it again`);
      return;
    }
    if (t)
      try {
        (E.debug(`begin loadSegment ${e}`), (this.currentlyLoadingSegmentIndex = e));
        const r = t.load();
        e === 0 && (this.firstSegmentLoadPromise = r);
        const s = await r;
        if (e !== 0 && e !== this.segmentIndexToFetch) {
          E.debug("load segment index to fetch changed, not processing bytes for segment", e);
          return;
        }
        (this.segmentProcessor.process(t, s), E.debug(`loadSegment processed: ${e}`));
        const { sourceBuffer: n, timestampOffsetAdjustment: a } = this;
        if (!n) return;
        try {
          (typeof a == "number" &&
            (E.debug("adjusting timestampOffset of sourcebuffer to", a),
            (n.timestampOffset = a),
            (this.timestampOffsetAdjustment = void 0)),
            n.appendBuffer(s),
            (this.isFullyBuffered = !1),
            (this.isOverBufferLimit = !1),
            E.debug("appended to buffer", s.length),
            this.printBufferTimes(),
            e === this.segments.length - 1
              ? (this.isAtEndOfStream = !0)
              : e === this.segmentIndexToFetch &&
                (E.debug("loadSegment bumping segment index to fetch to ", e + 1), this.updateSegmentToFetch(e + 1)));
        } catch (o) {
          o.name === "QuotaExceededError"
            ? ((this.isOverBufferLimit = !0), E.debug("reached buffer limit"))
            : E.warn("Error appending to source buffer", o);
        }
      } catch (r) {
        (E.error("Error loading segment", r), this.dispatcher.publish(Ce.loadSegmentError, r));
      } finally {
        this.currentlyLoadingSegmentIndex = void 0;
      }
  }
  setEndOfStream() {
    const { sourceBuffer: e, mediaSource: t } = this;
    !e ||
      t.readyState === "ended" ||
      (!e.updating && t.readyState === "open"
        ? (E.debug("mediaSource.endOfStream"), t.endOfStream(), (this.isFullyBuffered = !0))
        : E.error("Could not end of stream (updating, readyState)", e.updating, t.readyState));
  }
  removeToTime(e) {
    (E.debug("removing to time", e),
      e > 0 && (this.isTimeBuffered(e) || this.isOverBufferLimit) && this.safeSourceBufferRemove(0, e));
  }
  safeSourceBufferRemove(e, t) {
    E.trace("safeSourceBufferRemove", e, t);
    const { sourceBuffer: r } = this;
    r &&
      (r.updating
        ? this.deferredRemoves.push({ start: e, end: t })
        : t <= e
          ? E.warn(`Trying to remove an invalid time range from SourceBuffer: |${e} <=> ${t}| (${t - e})`)
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
    (E.debug("resolving seek for time, adjustedTime, isBuffered", r, s, n),
      this.printBufferTimes(),
      n &&
        (E.debug("resolving seek to true for time:", s), (this.element.currentTime = s), this.resolveSeekPromise(!0)));
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
      if ((E.debug("isTimeBuffered", t.start(r), e, t.end(r)), e >= t.start(r) && e <= t.end(r))) return !0;
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
    um && E.debug("buffer times", this.bufferTimesString);
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
    (E.info("---- Buffer Info ----"),
      E.info("currently buffering item", e.current.manifest.mediaItem.title),
      E.info("next item to buffer", e.next?.manifest.mediaItem.title),
      E.info("previously buffered item", e.previous?.manifest.mediaItem.title),
      E.info("currentTimestampOffset", this.currentTimestampOffset),
      E.info("currentTime", this.currentTime),
      E.info("duration", this.duration),
      E.info("nextSeamlessTransition", this.nextSeamlessTransition),
      E.info("timestampOffsetAdjustment", this.timestampOffsetAdjustment),
      E.info("buffered times", this.bufferTimesString),
      E.info("isAtEndOfStream", this.isAtEndOfStream),
      E.info("isFullyBuffered", this.isFullyBuffered),
      E.info("segmentIndexToFetch", this.segmentIndexToFetch),
      E.info("segments.length", this.segments.length),
      E.info("---- End Buffer Info ----"));
  }
}
Yn([_()], jr.prototype, "onSourceOpen", 1);
Yn([_()], jr.prototype, "onManifestParsed", 1);
Yn([_()], jr.prototype, "updateEndHandler", 1);
var dm = Object.defineProperty,
  hm = Object.getOwnPropertyDescriptor,
  ti = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? hm(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && dm(e, t, s), s);
  };
const { mediaPlaybackError: li } = g,
  pm = 15;
class Ze extends Vr {
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
      this._dispatcher.subscribe(Ce.loadSegmentError, this.onLoadSegmentError),
      this.setupVisibilityTracking());
  }
  async destroy() {
    (super.destroy(),
      this._dispatcher.unsubscribe(Ce.loadSegmentError, this.onLoadSegmentError),
      this.tearDownVisibilityTracking());
  }
  onLoadSegmentError(e) {
    (this._dispatcher.publish(li, new p(p.Reason.MEDIA_SESSION, e)), this.destroy());
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
    ((this.extension = new yl({
      mediaElement: this.audio,
      contentType: el,
      services: { runtime: this.services.runtime },
    })),
      await this.extension.initializeKeySystem(),
      this.extension.addEventListener(F.playbackLicenseError, (e) => {
        (this.resetDeferredPlay(), this._dispatcher.publish(li, e));
      }),
      this.extension.addEventListener(F.playbackSessionError, (e) => {
        (this._dispatcher.publish(li, new p(p.Reason.MEDIA_SESSION, e)), this.destroy());
      }));
  }
  async initializeMediaElement() {
    const e = cl();
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
  async playItemFromEncryptedSource(e, t = !1, r) {
    const s = this._paused && !t;
    u.debug("playItemFromEncryptedSource", e.title);
    const { browser: n } = this.services.runtime,
      a = n.isSafari && n.major === 26;
    if (this.isTabHidden && this.extension?.isFairplay && yr(e) && a && !t)
      return (
        u.debug("Tab is hidden, suspending FairPlay song playback for", e.title),
        (this.pendingPlaybackItem = e),
        Promise.resolve()
      );
    const o = s ? void 0 : this.startPlaybackSequence();
    if (e.playRawAssetURL)
      return (
        (e.playbackType = me.unencryptedFull),
        (this.nowPlayingItem = e),
        await this._playAssetURL(e.assetURL, s),
        this.finishPlaybackSequence()
      );
    const { extension: c } = this;
    if ((this.delaySeamlessCdmUpdates && this.extension?.session?.applyDelayedCdmUpdates(), !c)) return o;
    ((c.initiated = t),
      c.setMediaItem(e),
      (e.playbackType = me.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = $.loading));
    const l = await this.getManifestForItem(e);
    this.manifest = l;
    const h = gl();
    if (((e.isSong || (c.isFairplay && h)) && (c.extURI = l.extURI), (e.state = $.ready), c.isFairplay && !h)) {
      let f = e.assetURL;
      (r?.startTime && (f += `#t=${r.startTime}`), await this._playAssetURL(f, s));
    } else {
      const f = this._buffer;
      !f || !this.isSeamlessAudioTransitionsEnabled || !f.isItemPlaying(l.mediaItem)
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
      e.removeEventListener(Ii.keysParsed, this.loadKeysHandler));
  }
  async loadAndParseManifest(e, t = !0) {
    u.debug(`will load and parse manifest for ${e.title}, loadKeys ${t}`);
    let r;
    try {
      return (
        (r = await vl.load(e, {
          cache: !1,
          services: { runtime: this.services.runtime, request: this.services.request },
        })),
        t && r.addEventListener(Ii.keysParsed, this.loadKeysHandler),
        r.parse(),
        r
      );
    } catch (s) {
      this.resetDeferredPlay();
      const n = new p(p.Reason.NETWORK_ERROR, "Could not fetch manifest");
      throw ((n.data = s), this._dispatcher.publish(li, n), n);
    }
  }
  onTimeUpdate() {
    if (!this._buffer) return;
    const { currentPlaybackTimeRemaining: t, nextManifest: r, delaySeamlessCdmUpdates: s } = this;
    r &&
      t < pm &&
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
      (this._buffer = new jr({
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
    (document.addEventListener(vr, this.onVisibilityChange), (this.isTabHidden = document[rn] === "hidden"));
  }
  tearDownVisibilityTracking() {
    document.removeEventListener(vr, this.onVisibilityChange);
  }
  onVisibilityChange() {
    const e = this.isTabHidden;
    if (
      ((this.isTabHidden = document[rn] === "hidden"),
      u.debug("Tab visibility changed:", { wasHidden: e, isTabHidden: this.isTabHidden }),
      e && !this.isTabHidden && this.pendingPlaybackItem && this.extension?.isFairplay && yr(this.pendingPlaybackItem))
    ) {
      u.debug("Tab became visible, resuming FairPlay song playback for", this.pendingPlaybackItem.title);
      const t = this.pendingPlaybackItem;
      ((this.pendingPlaybackItem = void 0),
        this.playItemFromEncryptedSource(t, !1).catch((r) => {
          (u.error("Failed to resume FairPlay song playback after tab visibility change:", r),
            this._dispatcher.publish(li, new p(p.Reason.MEDIA_SESSION, r)));
        }));
    }
  }
}
ti([_()], Ze.prototype, "onLoadSegmentError", 1);
ti([Jt(250)], Ze.prototype, "seekToTime", 1);
ti([_()], Ze.prototype, "onTimeUpdate", 1);
ti([_()], Ze.prototype, "delayedCdmUpdateCheck", 1);
ti([_()], Ze.prototype, "loadKeysHandler", 1);
ti([_()], Ze.prototype, "onVisibilityChange", 1);
class fm extends Zt {
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
      r = $t(e);
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
      const h = Vy(new Uint8Array(t)).find((y) => y.isWidevine)?.rawBytes,
        f = h ? it(h) : void 0;
      (u.debug("extracted uri", f), (s.extURI = f), (o = t));
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
class ym extends Ot {
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
    this.session = new fm();
  }
  async clearSessions() {}
}
class mm {
  id = Nr();
  playerName = "PlayerStub";
  bitrate = Ne.STANDARD;
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
  paused = !1;
  playbackState = U.none;
  playbackTargetAvailable = !1;
  playbackTargetIsWireless = !1;
  previewOnly = !1;
  supportsPreviewImages = !1;
  textTracks = [];
  videoTracks = [];
  extension = new ym([]);
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
      (this.windowHandlers = new Di(this, e.services.runtime)));
  }
  currentAudioTrack;
  currentTextTrack;
  currentVideoTrack;
  seekableTimeRanges;
  get hasMediaElement() {
    return !0;
  }
  get isEngagedInPlayback() {
    return !this.paused;
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    ((this._playbackRate = e), this._dispatcher.publish(g.playbackRateDidChange, new Event("ratechange")));
  }
  get defaultPlaybackRate() {
    return this._defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    ((this._defaultPlaybackRate = e), this._dispatcher.publish(g.playbackRateDidChange, new Event("ratechange")));
  }
  get volume() {
    return this._volume;
  }
  set volume(e) {
    ((this._volume = e), this._dispatcher.publish(g.playbackVolumeDidChange, new Event("volumeChange")));
  }
  destroy() {}
  dispatch() {}
  async exitFullscreen() {}
  async loadPreviewImage(e) {}
  async initialize() {}
  isPaused() {
    return this.paused;
  }
  calculateTime(e) {
    return e;
  }
  clearNextManifest() {}
  mute() {}
  newSeeker() {
    return new il(this);
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
class gm extends yl {
  destroy(e) {
    (this._session?.stopLicenseSession(), super.destroy(e));
  }
}
var vm = Object.defineProperty,
  bm = Object.getOwnPropertyDescriptor,
  Gn = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? bm(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && vm(e, t, s), s);
  };
const { mediaPlaybackError: Tm } = g,
  { playbackLicenseError: _o, playbackSessionError: Eo } = F;
class qr extends qn {
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
    const e = new gm({ mediaElement: this.video, contentType: rf, services: { runtime: this.services.runtime } });
    ((this.extension = e),
      await e.initializeKeySystem(),
      e.addEventListener(_o, this.onPlaybackLicenseError),
      e.addEventListener(Eo, this.onPlaybackSessionError));
  }
  destroy() {
    u.debug("native-safari-video-player.destroy");
    const { extension: e, video: t } = this;
    (this._blobUrl && (URL.revokeObjectURL(this._blobUrl), (this._blobUrl = void 0)),
      !(!e || !t) &&
        (e.removeEventListener(_o, this.onPlaybackLicenseError),
        e.removeEventListener(Eo, this.onPlaybackSessionError),
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
    this._dispatcher.publish(Tm, new p(p.Reason.MEDIA_SESSION, e));
  }
  async onMetadataLoaded() {
    u.debug("native-safari-video-player.onMetadataLoaded");
    const { nowPlayingItem: e } = this;
    (e && (e.state = $.ready), await this._playMedia(), this.finishPlaybackSequence());
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
Gn([_()], qr.prototype, "onPlaybackSessionError", 1);
Gn([_()], qr.prototype, "onMetadataLoaded", 1);
Gn([Jt(250)], qr.prototype, "seekToTime", 1);
const Pl = "js-cdn.music.apple.com",
  Al = "/musickit/v3/",
  _m = "current",
  Em = new RegExp(`^https://([a-z0-9]+-)?${(Pl + Al.replace(/v3/, "(v2|v3)")).replace(/[\.\/]/g, "\\$&")}`, "i"),
  Sm = /^https:\/\/(.*\/includes\/js-cdn)\//i,
  km = /^([a-z]+:)?\/\//;
function zn(i) {
  return kt() || !i ? null : document.querySelector(`script[src*="${i}"]`);
}
function wl() {
  return typeof document > "u" || !document.querySelectorAll
    ? []
    : Array.from(document.querySelectorAll("script[src]"));
}
function Im() {
  for (const i of wl()) {
    const e = Em.exec(i.src);
    if (e) return e[1] || "";
  }
  return "";
}
function Pm() {
  for (const i of wl()) {
    const e = Sm.exec(i.src);
    if (e) return e[1] || "";
  }
  return "";
}
function Rl() {
  return kt() ? "" : `//${Im()}${Pl}`;
}
function Cl() {
  const i = Pm();
  return i && "//" + i;
}
const Qn = Ln.register("mk-hlsjs-log-level"),
  Am = Ln.register("mk-hlsjs-version");
function wm() {
  const i = Qn.value,
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
function Ol() {
  const i = { hls: "", rtc: "" };
  if (kt()) return i;
  const e = Cl() || Rl(),
    t = Am.get() || _m,
    r = wm();
  return ((i.hls = `https:${e}/hls.js/${t}/hls.js/${r}`), (i.rtc = `https:${e}/hls.js/${t}/rtc.js/rtc.min.js`), i);
}
function Dl(i, e = window) {
  if (kt()) return "";
  const t = He()?.getItem("mkCDNBaseURLOverride");
  if (t) return t;
  const r = zn(i);
  return r ? r.getAttribute("src").replace(new RegExp(`${i}$`), "") : `${Cl() || Rl()}${Al}`;
}
const So = new Map();
function Wr(i, e) {
  const t = So.get(i);
  if (t) return t;
  const r = new Promise((s, n) => {
    if ((kt() && n("Dynamic script loading is unsupported in Node environments."), zn(i))) return s();
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
    (km.test(i) ? (c = i) : (c = `${Dl(i)}${i}`), (o.src = c), document.head.appendChild(o));
  });
  return (So.set(i, r), r);
}
function Rm(i) {
  return (e, t, r) => {
    const s = r.value,
      n = Cm(s, i);
    r.value = n;
  };
}
function Cm(i, e) {
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
var Om = Object.defineProperty,
  Dm = Object.getOwnPropertyDescriptor,
  st = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Dm(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Om(e, t, s), s);
  };
const {
    audioTracksSwitched: Ji,
    audioTracksUpdated: vs,
    inlineStylesParsed: ko,
    itemPlaying: Io,
    textTracksSwitched: Zi,
    textTracksUpdated: Po,
    videoTracksUpdated: Ao,
    videoTracksSwitched: wo,
  } = F,
  Nm = ve.register("mk-hlsjs-interstitial-playback");
class We extends Ot {
  constructor(e) {
    (super([Ji, vs, ko, Io, Zi, Po, Ao, wo]), (this.session = e));
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
      const s = ms(this.subtitleMediaOptions, this.currentAudioMediaOption, e),
        n = s ? s.MediaSelectionOptionsPersistentID : -1;
      this.setSubtitleTrack(n);
    }
    K.debug("set subtitle track on all interstitial items", this._interstitialItemIds);
    const r = !e || e.label === ut;
    this.setTrackOnInterstitialItems({ track: r ? void 0 : e, setTrack: this.setSubtitleForInterstitial });
  }
  setPreferredAudioTrackForItem(e, t) {
    const r = e[0]?.MediaSelectionOptionsInterstitialId,
      s = no(e, t),
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
      n = ms(e, t, r),
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
    const t = e.map(wf);
    ((this._audioTracks = t), this.dispatchEvent(vs, t));
  }
  videoTracksUpdated(e = []) {
    const t = e.map(Rf);
    ((this._videoTracks = t), this.dispatchEvent(Ao, t));
  }
  handleItemPlaying(e, t) {
    K.debug("handleItemPlaying", t);
    const { itemId: r, interstitialId: s } = t;
    (this.updateAVAndTextTracks({ itemId: r }),
      s
        ? (this.dispatchEvent(Ji, { selectedId: this.currentAudioMediaOption?.MediaSelectionOptionsPersistentID }),
          this.dispatchEvent(Zi, { selectedId: this.currentSubtitleMediaOption?.MediaSelectionOptionsPersistentID }))
        : this.handlePrimaryItemPlaying());
    const n = this.currentSubtitleMediaOption;
    this.dispatchEvent(Io, {
      forcedTextTrack: n && n.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 ? ao(n) : void 0,
    });
  }
  handlePrimaryItemPlaying() {
    const {
        audioMediaOptions: e,
        currentAudioMediaOption: t,
        currentSubtitleMediaOption: r,
        subtitleMediaOptions: s,
      } = this,
      n = no(e);
    n && t?.MediaSelectionOptionsPersistentID === n.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(Ji, { selectedId: t?.MediaSelectionOptionsPersistentID })
      : n && this.setAudioTrack(n.MediaSelectionOptionsPersistentID);
    const a = ms(s, n);
    a && r?.MediaSelectionOptionsPersistentID === a.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(Zi, { selectedId: r?.MediaSelectionOptionsPersistentID })
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
    this.dispatchEvent(Ji, { selectedId: r });
  }
  handleInlineStylesParsed(e, t) {
    this.dispatchEvent(ko, t);
  }
  handleManifestParsed(e, t) {
    K.debug("handleManifestParsed", t);
    const { audioTracks: r, interstitialId: s, subtitleTracks: n, videoTracks: a = [] } = t,
      o = r.map(ys),
      c = n.map(ys),
      l = a.map(ys);
    if (s && o.length > 0) {
      this._interstitialItemIds.add(s);
      const h = this.setPreferredAudioTrackForItem(o);
      this.setPreferredSubtitleTrackForItem(c, h);
    }
    (l.length > 0 && (this.session.videoSelectedPersistentID = Pf(l)?.MediaSelectionOptionsPersistentID),
      Nm.enabled || this.handleItemPlaying("hlsItemPlaying", t));
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
            this.dispatchEvent(vs, this._audioTracks));
        } catch (s) {
          K.error("Failed to parse _hls.localized-rendition-names", s);
          return;
        }
    });
  }
  handleSubtitleTrackSwitch(e, t) {
    (K.debug("handleSubtitleTrackSwitch", t), this.isEventForCurrentItem(t) && this.dispatchEvent(Zi, t));
  }
  handleVideoTrackSwitched(e, t) {
    if (
      (K.debug("handleVideoTrackSwitched", t, "current option: ", this.currentVideoMediaOption),
      !this.isEventForCurrentItem(t))
    )
      return;
    const r = t?.track?.persistentID;
    this.dispatchEvent(wo, { selectedId: r });
  }
  subtitleTracksUpdated(e = []) {
    const t = [];
    (e.forEach((r) => {
      r.MediaSelectionOptionsDisplaysNonForcedSubtitles !== 0 && t.push(ao(r));
    }),
      (this._textTracks = t),
      this.dispatchEvent(Po, t));
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
st([_()], We.prototype, "setAudioAndSubtitleForItem", 1);
st([_()], We.prototype, "setSubtitleForInterstitial", 1);
st([_()], We.prototype, "handleItemPlaying", 1);
st([_()], We.prototype, "handleAudioTrackSwitched", 1);
st([_()], We.prototype, "handleInlineStylesParsed", 1);
st([_()], We.prototype, "handleManifestParsed", 1);
st([_()], We.prototype, "handleSessionDataComplete", 1);
st([_()], We.prototype, "handleSubtitleTrackSwitch", 1);
st([_()], We.prototype, "handleVideoTrackSwitched", 1);
class Lm {
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
var Mm = Object.defineProperty,
  Um = Object.getOwnPropertyDescriptor,
  Ye = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Um(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Mm(e, t, s), s);
  };
const cn = { bufferStalledError: "bufferStalledError", keySystemGenericError: "keySystemGenericError" },
  xm = new Set([p.Reason.DEVICE_LIMIT, p.Reason.GEO_BLOCK, p.Reason.WIDEVINE_CDM_EXPIRED]),
  er = ve.register("mk-hlsjs-interstitial-playback"),
  Ro = ve.register("mk-hlsjs-item-preloading"),
  Fm = xr.register("mk-hlsjs-config-overrides"),
  Km = ve.get("mk-block-report-cdn-server"),
  Vm = (i) => {
    const { Hls: e } = window;
    if (e && Km) {
      const t = dt(e.DefaultConfig.fragLoadPolicy);
      ((t.default.reportCDNServer = !1), (t.customURL.reportCDNServer = !1), (i.fragLoadPolicy = t));
    }
  },
  Bm = (i) => {
    const e = Fm.value;
    e && typeof e == "object" && Object.assign(i, e);
  };
class Te extends qn {
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
      ? this._timing.time(this._integratedTimelineDuration)
      : super.currentPlaybackDuration;
  }
  get currentPlaybackTime() {
    let e = {};
    return (
      er.enabled && (e = this._hlsSession?.getCurrentIntegratedTimelineSegmentAndCurrentTime()),
      e?.targetTime ?? super.currentPlaybackTime
    );
  }
  async initializeExtension() {
    try {
      if (!this.hlsScriptURL) throw new Error("HLS.js script URL is not configured");
      await Promise.all([Wr(this.hlsScriptURL), this._rtcTracker?.loadScript()]);
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
      er.enabled && h.off(s, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && h.off(l, this.handleUnresolvedUriLoading),
      h.destroy(),
      (window.hlsSession = void 0),
      (this._hlsSession = void 0));
  }
  async stopMediaAndCleanup(e = U.stopped) {
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
      a = (W, ce) => ce?.keyURLs?.[W] !== void 0;
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
    const { startTime: f, startTimestamp: y } = r,
      k = y ? new Date(y) : f;
    (l?.loadSource(e, o, k),
      this.attachMedia(),
      t !== void 0 &&
        (this.keySystem === "fairplay" && a("hls-key-cert-url", t)
          ? l?.setProtectionData({ fairplaystreaming: { serverCertUrl: t.keyURLs["hls-key-cert-url"] } })
          : a("widevine-cert-url", t) &&
            l?.setProtectionData({ widevine: { serverCertUrl: t.keyURLs["widevine-cert-url"] } }),
        (t.state = $.ready)),
      h?.destroy(),
      l?.setRate(1));
  }
  async preloadItem(e, t) {
    return this.preloadNextItem(e, t);
  }
  async preloadNextItem(e, t) {
    if ((u.trace("hlsjs-video-player.preloadNextItem", e, t), Ro.value === !1)) {
      u.info("hlsjs-video-player.preloadNextItem - not preloading item; disabled by dev flag");
      return;
    }
    const r = this.playbackDataStore.next;
    if (r !== void 0 && r.id === e.id) {
      u.info(`Source already preloaded for item "${e}"`);
      return;
    }
    (u.info(`Prefetching HLS source for item "${e}"`),
      this.unloadPlaybackItem("next"),
      (this.playbackDataStore.next = { id: e.id, item: e, asset: void 0 }),
      this._hlsSession?.prefetchSource(Ni(e, { ...t, drmUsed: this.keySystem }), { itemId: e.id }));
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
      r = Qn.get(),
      { os: s, browser: n } = this.services.runtime,
      a = {
        attemptErrorRecovery: !0,
        clearMediaKeysOnPromise: !1,
        customTextTrackCueRenderer: !1,
        debug: !!r,
        debugLevel: r,
        enableItemPreloading: Ro.value !== !1,
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
    ((er.enabled || e?.isPodcastEpisode) && Object.assign(a, { gapless: !0, enableInterstitialPlayback: !0 }),
      Vm(a),
      Bm(a));
    const o = new t(a),
      {
        DATERANGE_UPDATED: c,
        ERROR: l,
        INTERNAL_ERROR: h,
        INTERSTITIALS_UPDATED: f,
        KEY_REQUEST_STARTED: y,
        LEVEL_SWITCHED: k,
        LICENSE_CHALLENGE_CREATED: W,
        MANIFEST_PARSED: ce,
        UNRESOLVED_URI_LOADING: te,
      } = t.Events;
    (o.on(l, this.handleHlsError),
      o.on(h, this.handleHlsError),
      o.on(ce, this.handleManifestParsed),
      o.on(y, this.handleKeyRequestStarted),
      o.on(W, this.handleLicenseChallengeCreated),
      o.on(k, this.handleLevelSwitched),
      o.on(c, this.handleDaterangeUpdated),
      er.enabled && o.on(f, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && o.on(te, this.handleUnresolvedUriLoading),
      (this._hlsSession = o),
      (window.hlsSession = o),
      (this._hlsJsTracks = new We(o)),
      (this._hlsPreviewImageLoader = new Lm(this._hlsSession)));
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
    (u.info("handleDaterangeUpdated", JSON.stringify(t)), this._dispatcher.publish(g.hlsDaterangeUpdated, t));
  }
  handleHlsError(e, t) {
    if ((u.warn("HLS.js error", JSON.stringify(t)), this._unrecoverableError)) return;
    let r = new m("mk-193", p.Reason.UNSUPPORTED_ERROR, t.reason);
    r.data = t;
    const { bufferStalledError: s, keySystemGenericError: n } = cn;
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
      if ((this.destroy(), this.shouldDispatchErrors || a)) this._dispatcher.publish(g.mediaPlaybackError, r);
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
      throw new m("mk-185", m.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const n = this.playbackDataStore.next?.id === s ? this.playbackDataStore.next : this.playbackDataStore.current;
    if (n === void 0)
      throw new m("mk-186", m.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    try {
      const a = await this._license.requestLicense(n.item, t, { userInitiated: r }),
        o = { statusCode: a.status };
      a?.license && (this.keySystem === "fairplay" ? (o.ckc = $t(a.license)) : (o.license = $t(a.license)));
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
          xm.has(a.reason) &&
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
Ye([_()], Te.prototype, "handleUnresolvedUriLoading", 1);
Ye([_()], Te.prototype, "handleInterstitialUpdated", 1);
Ye([_()], Te.prototype, "handleLevelSwitched", 1);
Ye([_()], Te.prototype, "handleDaterangeUpdated", 1);
Ye([_()], Te.prototype, "handleHlsError", 1);
Ye([_()], Te.prototype, "handleManifestParsed", 1);
Ye([_()], Te.prototype, "handleKeyRequestStarted", 1);
Ye([_()], Te.prototype, "handleLicenseChallengeCreated", 1);
Ye([Jt(250)], Te.prototype, "seekToTime", 1);
Ye([Rm(250)], Te.prototype, "loadPreviewImage", 1);
var $m = Object.defineProperty,
  Hm = Object.getOwnPropertyDescriptor,
  Nl = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Hm(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && $m(e, t, s), s);
  };
class Xn {
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
      const t = sm(this.activeCues);
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
Nl([_()], Xn.prototype, "registerMetadataTrack", 1);
Nl([_()], Xn.prototype, "onCueChange", 1);
var jm = Object.defineProperty,
  qm = Object.getOwnPropertyDescriptor,
  Nt = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? qm(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && jm(e, t, s), s);
  };
const Co = ve.register("mk-hlsjs-item-preloading"),
  Wm = { keySystemGenericError: "keySystemGenericError" },
  Ym = new Set([p.Reason.DEVICE_LIMIT, p.Reason.GEO_BLOCK]),
  D = u.createChild("hlsjs-audio"),
  Gm = xr.register("mk-hlsjs-config-overrides"),
  zm = (i) => {
    const e = Gm.value;
    e && typeof e == "object" && Object.assign(i, e);
  };
class yt extends Vr {
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
      (this.id3MetadataManager = new Xn({
        onchange: (t) => {
          const r = {
            item: this.nowPlayingItem,
            metadata: t,
            position: this.currentPlaybackTime,
            playingDate: this.currentPlayingDate,
          };
          (D.debug("Dispatching bufferTimedMetadataDidChange", r),
            this._dispatcher?.publish(Ce.bufferTimedMetadataDidChange, r));
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
  async playItemFromEncryptedSource(e, t = !1, r = {}) {
    if ((D.trace("HlsJsAudioPlayer.playItemFromEncryptedSource", e, r), this.playbackState === U.stopped)) {
      D.debug("hlsjsAudioPlayer.playItemFromEncryptedSource aborting playback because player is stopped");
      return;
    }
    (D.debug(`Playing Encrypted Item: ${mr(e)}`),
      (e.playbackType = me.encryptedFull),
      (this.nowPlayingItem = e),
      (e.state = $.loading),
      (this.userInitiated = t),
      await this.playHlsStream(e.assetURL, e, r));
  }
  async initializeMediaElement() {
    const e = cl();
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
      await Promise.all([Wr(this.hlsScriptURL), this._rtcTracker?.loadScript()]);
    } catch (e) {
      throw (D.error(`hlsjs-audio-player failed to load script ${this.hlsScriptURL}`, e), e);
    }
  }
  async stopMediaElement() {
    (D.trace("HlsJsAudioPlayer.stopMediaElement()"), await super.stopMediaElement(), this.destroy());
  }
  async stopMediaAndCleanup(e = U.stopped) {
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
    (t !== void 0 && this.setCurrentPlaybackItem(t),
      D.info(`Loading source into HLS.js: ${e}`),
      D.debug("Calling loadSource with options", a),
      this.hls.loadSource(e, a, r.startTime),
      this.attachMedia(),
      t &&
        (this.keySystem === "fairplay"
          ? (D.info(`Setting Protection Data URL for FairPlay: ${t.keyURLs["hls-key-cert-url"]}`),
            this.hls.setProtectionData({ fairplaystreaming: { serverCertUrl: t.keyURLs["hls-key-cert-url"] } }))
          : (D.info(`Setting Protection Data URL for Widevine: ${t.keyURLs["widevine-cert-url"]}`),
            this.hls.setProtectionData({ widevine: { serverCertUrl: t.keyURLs["widevine-cert-url"] } })),
        (t.state = $.ready)),
      c?.destroy(),
      this.hls.setRate(1));
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
    if ((D.trace("preloadNextItem", e, t), Co.value !== !1)) {
      const r = this.playbackDataStore.next;
      if (r !== void 0 && r.id === e.id) {
        D.info(`Source already preloaded for item "${e}"`);
        return;
      }
      (D.info(`Prefetching HLS source for item "${e}"`),
        this.unloadPlaybackItem("next"),
        (this.playbackDataStore.next = { id: e.id, item: e, asset: void 0 }),
        this.hls?.prefetchSource(Ni(e, { ...t, drmUsed: this.keySystem }), { itemId: e.id }));
    }
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
      r = Qn.get(),
      s = {
        clearMediaKeysOnPromise: !1,
        debug: !!r,
        debugLevel: r,
        enableItemPreloading: Co.value !== !1,
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
    (D.debug("Reading HLS.js option overrides from DevFlag"), zm(s), D.debug("Constructing HLS instance", s));
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
    const { keySystemGenericError: s } = Wm;
    if (t.details === s) {
      this._dispatcher.publish(s, r);
      return;
    }
    if ((t.reason === "output-restricted" && (r = new p(p.Reason.OUTPUT_RESTRICTED, t.reason)), t.fatal))
      if ((this.hls.destroy(), this.shouldDispatchErrors)) this._dispatcher.publish(g.mediaPlaybackError, r);
      else throw r;
  }
  async handleManifestParsed(e, t) {
    (D.debug("handleManifestParsed", t), (this.nowPlayingItem.state = $.ready));
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
      throw new m("mk-191", m.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const s = this.playbackDataStore.next?.id === r ? this.playbackDataStore.next : this.playbackDataStore.current;
    if (s === void 0)
      throw new m("mk-192", m.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    D.debug(`Handling License Challenge for item ${r} with URI ${t.keyuri}`);
    const { userInitiated: n } = this;
    try {
      const a = await this._license.requestLicense(s.item, t, { userInitiated: n }),
        o = { statusCode: a.status };
      a?.license && (this.keySystem === "fairplay" ? (o.ckc = $t(a.license)) : (o.license = $t(a.license)));
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
          Ym.has(a.reason) &&
          ((this._unrecoverableError = a),
          this.resetDeferredPlay(),
          await this.stop({ endReasonType: P.FAILED_TO_LOAD, userInitiated: this.userInitiated })),
        this.onPlaybackLicenseError(a));
    }
  }
  onPlaybackLicenseError(e) {
    (this.resetDeferredPlay(), this._dispatcher.publish(F.playbackLicenseError, e));
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
Nt([_()], yt.prototype, "handleLevelSwitched", 1);
Nt([_()], yt.prototype, "handleHlsError", 1);
Nt([_()], yt.prototype, "handleManifestParsed", 1);
Nt([_()], yt.prototype, "handleKeyRequestStarted", 1);
Nt([_()], yt.prototype, "handleLicenseChallengeCreated", 1);
Nt([_()], yt.prototype, "onPlaybackLicenseError", 1);
Nt([Jt(250)], yt.prototype, "seekToTime", 1);
let Ll = "playback/Unknown-0.0.0";
function Qm(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
function Xm(i) {
  const e = i?.name !== void 0 && i.name !== "" ? Qm(i.name) : "Unknown",
    t = i?.build ?? i?.version ?? "0.0.0";
  Ll = `playback/${e}-${t}`;
}
function Ml() {
  return Ll;
}
var Jm = ((i) => ((i.REPEAT = "REPEAT"), (i.SHUFFLE = "SHUFFLE"), (i.AUTOPLAY = "AUTOPLAY"), i))(Jm || {}),
  Be = ((i) => (
    (i[(i.PREVIEW_ONLY = 0)] = "PREVIEW_ONLY"),
    (i[(i.MIXED_CONTENT = 1)] = "MIXED_CONTENT"),
    (i[(i.FULL_PLAYBACK_ONLY = 2)] = "FULL_PLAYBACK_ONLY"),
    (i[(i.SHAREPLAY_PARTICIPANT = 3)] = "SHAREPLAY_PARTICIPANT"),
    i
  ))(Be || {});
const Zm = "capabilitiesChanged",
  eg = "musickitconfigured",
  tg = "autoplayEnabledDidChange",
  ig = "musickitloaded",
  rg = "mediaSkipAvailable",
  sg = "mediaRollEntered",
  ng = "mediaUpNext",
  ag = "needsGDPRDidChange",
  og = "queueIsReady",
  cg = "queueItemsDidChange",
  lg = "queueItemForStartPosition",
  ug = "queuePositionDidChange",
  dg = "shuffleModeDidChange",
  hg = "repeatModeDidChange",
  pg = "musickitwebcomponentsloaded",
  b = {
    configured: eg,
    loaded: ig,
    audioTrackAdded: g.audioTrackAdded,
    audioTrackChanged: g.audioTrackChanged,
    audioTrackRemoved: g.audioTrackRemoved,
    authorizationStatusDidChange: Qe.authorizationStatusDidChange,
    authorizationStatusWillChange: Qe.authorizationStatusWillChange,
    bufferedProgressDidChange: g.bufferedProgressDidChange,
    capabilitiesChanged: Zm,
    autoplayEnabledDidChange: tg,
    drmUnsupported: g.drmUnsupported,
    eligibleForSubscribeView: Qe.eligibleForSubscribeView,
    forcedTextTrackChanged: g.forcedTextTrackChanged,
    hlsDaterangeUpdated: g.hlsDaterangeUpdated,
    mediaCanPlay: g.mediaCanPlay,
    mediaElementCreated: g.mediaElementCreated,
    mediaItemStateDidChange: Xs.mediaItemStateDidChange,
    mediaItemStateWillChange: Xs.mediaItemStateWillChange,
    mediaPlaybackError: g.mediaPlaybackError,
    mediaSkipAvailable: rg,
    mediaRollEntered: sg,
    mediaUpNext: ng,
    metadataDidChange: g.metadataDidChange,
    authReflectionDidComplete: Qe.authReflectionDidComplete,
    needsGDPRDidChange: ag,
    nowPlayingItemDidChange: g.nowPlayingItemDidChange,
    nowPlayingItemWillChange: g.nowPlayingItemWillChange,
    playInitiated: "playInitiated",
    playbackBitrateDidChange: g.playbackBitrateDidChange,
    playbackDurationDidChange: g.playbackDurationDidChange,
    playbackProgressDidChange: g.playbackProgressDidChange,
    playbackRateDidChange: g.playbackRateDidChange,
    playbackStateDidChange: g.playbackStateDidChange,
    playbackStateWillChange: g.playbackStateWillChange,
    playbackTargetAvailableDidChange: g.playbackTargetAvailableDidChange,
    playbackTargetIsWirelessDidChange: g.playbackTargetIsWirelessDidChange,
    playbackTimeDidChange: g.playbackTimeDidChange,
    playbackVolumeDidChange: g.playbackVolumeDidChange,
    playerTypeDidChange: g.playerTypeDidChange,
    presentationModeDidChange: g.presentationModeDidChange,
    primaryPlayerDidChange: g.primaryPlayerDidChange,
    queueIsReady: og,
    queueItemsDidChange: cg,
    queueItemForStartPosition: lg,
    queuePositionDidChange: ug,
    shuffleModeDidChange: dg,
    repeatModeDidChange: hg,
    storefrontCountryCodeDidChange: Qe.storefrontCountryCodeDidChange,
    storefrontIdentifierDidChange: Qe.storefrontIdentifierDidChange,
    textTrackAdded: g.textTrackAdded,
    textTrackChanged: g.textTrackChanged,
    textTrackRemoved: g.textTrackRemoved,
    timedMetadataDidChange: g.timedMetadataDidChange,
    userTokenDidChange: Qe.userTokenDidChange,
    videoTrackAdded: g.videoTrackAdded,
    videoTrackChanged: g.videoTrackChanged,
    videoTrackRemoved: g.videoTrackRemoved,
    webComponentsLoaded: pg,
  },
  eS = {
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
function Ul(i) {
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
function _r(i, e = ["pre-roll", "mid-roll", "post-roll"]) {
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
const Oo = (i, e) => i + e.duration;
function fg(i) {
  const e = _r(i, ["pre-roll"]),
    t = _r(i, ["post-roll"]),
    r = e.reduce(Oo, 0),
    s = t.reduce(Oo, 0),
    n = i.hlsMetadata["up-next.start"] ?? i.hlsMetadata["watched.time"] ?? i.hlsMetadata["feature.duration"],
    a = parseFloat(n),
    o = a - r;
  return { mainContentStarts: r, mainContentEnds: a, mainContentLength: o, totalContentLength: a + s };
}
var yg = Object.defineProperty,
  mg = Object.getOwnPropertyDescriptor,
  gg = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? mg(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && yg(e, t, s), s);
  };
class Li {
  constructor(e, t, r, s, n = !1) {
    ((this.dispatcher = e), (this.callback = t), (this.start = r), (this.stop = s), (this.allowMultiple = n));
  }
  inWatchSpan = !1;
  startMonitor() {
    (this.dispatcher.unsubscribe(b.playbackTimeDidChange, this.handleTimeChange),
      this.dispatcher.subscribe(b.playbackTimeDidChange, this.handleTimeChange));
  }
  stopMonitor() {
    this.dispatcher.unsubscribe(b.playbackTimeDidChange, this.handleTimeChange);
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
gg([_()], Li.prototype, "handleTimeChange", 1);
var vg = Object.defineProperty,
  bg = Object.getOwnPropertyDescriptor,
  Tg = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? bg(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && vg(e, t, s), s);
  };
class Mi {
  isActive = !1;
  isMonitoring = !1;
  dispatcher;
  playbackController;
  watchers = [];
  constructor(e) {
    ((this.handlePlaybackThreshold = this.handlePlaybackThreshold.bind(this)),
      (this.playbackController = e.controller),
      (this.dispatcher = e.services.dispatcher),
      this.dispatcher.subscribe(b.nowPlayingItemDidChange, this.handleMediaItemChange));
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
Tg([_()], Mi.prototype, "handleMediaItemChange", 1);
class _g extends Mi {
  rollMap = new Map();
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold(e, t) {
    if (!this.rollMap.has(t)) return;
    const r = this.rollMap.get(t);
    (this.dispatcher.publish(b.mediaRollEntered, r), this.rollMap.delete(t));
  }
  shouldMonitor() {
    return super.shouldMonitor() ? this.getRollMetadata().length > 0 : !1;
  }
  startMonitor() {
    (this.setupWatchers(this.getRollMetadata()), super.startMonitor());
  }
  getRollMetadata() {
    const e = this.playbackController.nowPlayingItem;
    return e === void 0 ? [] : _r(e, ["pre-roll", "post-roll"]);
  }
  setupWatchers(e) {
    const t = [];
    (e.forEach((r) => {
      const { start: s, duration: n } = r,
        a = new Li(this.dispatcher, this.handlePlaybackThreshold, s, s + n);
      (t.push(a), this.rollMap.set(a, r));
    }),
      (this.watchers = t));
  }
}
class Eg extends Mi {
  skipMap = new Map();
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold(e, t) {
    if (!this.skipMap.has(t)) return;
    const r = this.skipMap.get(t);
    this.dispatcher.publish(b.mediaSkipAvailable, r);
  }
  shouldMonitor() {
    return super.shouldMonitor() ? this.getNowPlayingMetadata().length > 0 : !1;
  }
  startMonitor() {
    (this.setupWatchers(this.getNowPlayingMetadata()), super.startMonitor());
  }
  getNowPlayingMetadata() {
    const e = this.playbackController.nowPlayingItem;
    return e === void 0 ? [] : Ul(e);
  }
  setupWatchers(e) {
    const t = [];
    (e.forEach((r) => {
      const { start: s, target: n, duration: a, promo: o } = r,
        c = new Li(this.dispatcher, this.handlePlaybackThreshold, s, o ? n : s + a, !0);
      (t.push(c), this.skipMap.set(c, r));
    }),
      (this.watchers = t));
  }
}
const T = new Dt("services"),
  Sg = (i) => Math.min(Math.round(Jn(i)), Math.round(Zn(i))),
  ln = (i) => !isNaN(Jn(i)) && !isNaN(Zn(i)),
  Jn = (i) => parseFloat(i.hlsMetadata["up-next.start"]),
  Zn = (i) => parseFloat(i.hlsMetadata["watched.time"]),
  kg = async (i, e) => {
    if (!(!i.isUTS || !i.assetURL))
      try {
        const t = Ni(i, e.playOptions),
          r = await e.manifestManager.fetchManifest(t);
        i.hlsMetadata = { ...i.hlsMetadata, ...Ig(r.content) };
      } catch (t) {
        T.error(t.message, t);
      }
  };
function Ig(i, e = {}) {
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
var Pg = Object.defineProperty,
  Ag = Object.getOwnPropertyDescriptor,
  wg = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Ag(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Pg(e, t, s), s);
  };
class xl extends Mi {
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold() {
    this.dispatcher.publish(b.mediaUpNext);
  }
  shouldMonitor() {
    if (!super.shouldMonitor()) return !1;
    const e = this.playbackController.nowPlayingItem;
    return e !== void 0 && ln(e);
  }
  startMonitor() {
    (this.setupWatchers(), super.startMonitor());
  }
  setupWatchers() {
    const e = this.playbackController.nowPlayingItem;
    !e ||
      !ln(e) ||
      (this.watchers = [
        new Li(
          this.dispatcher,
          this.handlePlaybackThreshold,
          Math.round(this.getStartTime(e)),
          Number.POSITIVE_INFINITY,
        ),
      ]);
  }
  getStartTime(e) {
    const t = Jn(e);
    return isNaN(t) ? Zn(e) : t;
  }
}
wg([_()], xl.prototype, "handlePlaybackThreshold", 1);
const At = ve.register("mk-console-logging"),
  qt = Ln.register("mk-logging-levels"),
  Fl = ie.ERROR;
let Er = Fl;
const N = new Dt("mk", { level: Er, handlers: { console: new up({ enabled: !1 }), external: new Kc(() => {}) } });
function Kl(i) {
  ep(N, tp(i));
}
function Rg() {
  (N.setLevel(Er), Zh(N, { includeRoot: !1 }));
}
function un(i) {
  N.handlers.console.enabled = i ?? !1;
}
function Do(i) {
  Er = Pt(i) ?? Er;
}
function Cg() {
  return N.level !== Fl;
}
function Og(i) {
  N.handlers.external = new Kc(i);
}
function Dg(i) {
  const e = {};
  i !== void 0 && (i = i.startsWith("mk/") ? i : "mk/" + i);
  const t = N.children;
  for (; t.length > 0;) {
    const r = t.shift();
    if (r === void 0) break;
    (i !== void 0 && !r.namespace.startsWith(i)) || ((e[r.namespace] = r.levelName), t.unshift(...r.children));
  }
  return e;
}
const gi = {
  getLogger(i = "*") {
    return N.getByNamespace(i ?? "*");
  },
  setConsoleOutput(i) {
    i === !0
      ? (At.enable(), un(!0), N.info("Console output is enabled with level " + N.levelName))
      : (At.disable(), un(!1));
  },
  setLoggingLevels(i, e) {
    i.trim() !== "" ? (qt.set(i), Kl(i), gi.setConsoleOutput(e ?? !0)) : gi.clearLoggingLevels(e ?? !1);
  },
  clearLoggingLevels(i = !1) {
    (gi.setConsoleOutput(i), qt.clear(), Rg());
  },
  listLoggers(i) {
    return Dg(i);
  },
};
At.enabled && gi.setConsoleOutput(At.enabled);
qt.value !== void 0 && gi.setLoggingLevels(qt.value, At.enabled);
var we = ((i) => ((i[(i.none = 0)] = "none"), (i[(i.one = 1)] = "one"), (i[(i.all = 2)] = "all"), i))(we || {});
class Ng {
  canSetRepeatMode = !1;
  get repeatMode() {
    return 0;
  }
  set repeatMode(e) {
    e !== this.repeatMode && T.warn("setting repeatMode is not supported in this playback method");
  }
}
class Lg {
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
    !(e in we) ||
      e === this._repeatMode ||
      ((this._repeatMode = e), this.dispatcher.publish(b.repeatModeDidChange, this._repeatMode));
  }
}
const No = Ol(),
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
      hls: No.hls,
      rtc: No.rtc,
      mediaApi: "https://amp-api.music.apple.com/v1",
      webPlayback: `https://${Ci("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
    },
  },
  Lo = xr.register("mk-offers-key-urls").get();
Lo
  ? (j.urls.hlsOffersKeyUrls = Lo)
  : (j.urls.hlsOffersKeyUrls = {
      "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
      "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
      "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
    });
let I;
function Mg(i, e) {
  return ((I = new Ug(i, e)), I);
}
class Ug {
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
      (this.storekit = new qc(e, {
        apiBase: j.urls.mediaApi,
        authenticateMethod: j.features["legacy-authenticate-method"] ? "POST" : "GET",
        deeplink: t.linkParameters,
        disableAuthBridge: t.disableAuthBridge,
        iconURL: j.app.icon,
        meParameters: t.meParameters,
        persist: t.persist,
        realm: t.realm || ae.MUSIC,
        fetch: t?.services?.request?.fetch,
        disableLogoutURL: t.disableLogoutURL,
      })),
      this.storekit.addEventListener(b.authorizationStatusDidChange, (s) => {
        const { authorizationStatus: n } = s;
        this._hasAuthorized = [ne.AUTHORIZED, ne.RESTRICTED].includes(n);
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
    return this.storekit.authorizationStatus === ne.RESTRICTED;
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
    T.error("needsGDPR has been deprecated. Plesae migrate to shouldDisplayPrivacyLink()");
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
function xg(i) {
  return (i === void 0 && (i = I && I.storekit), i !== void 0 && i.hasAuthorized && i.userTokenIsValid);
}
async function Fg(i) {
  return (i === void 0 && (i = I && I.storekit), i.hasMusicSubscription());
}
function Kg(i) {
  const e = Ld(
    {
      id: "metadata.itemId",
      type: "metadata.itemType",
      "attributes.contentRating": function () {
        if (i?.metadata?.isExplicit === 1) return zc;
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
const Vg = { condition: () => !0, toOptions: (i, e, t) => [{ ...i, context: t }] },
  Bg = (i) => i.type === "stations" && i.attributes?.isLive,
  $g = (i, e, t) => [
    { ...i, context: t, container: { attributes: i.attributes, id: i.id, type: i.type, name: t?.featureName } },
  ],
  Hg = { condition: Bg, toOptions: $g },
  jg = {
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
  Vl = (i) => (e) => !!e.relationships?.[i]?.data,
  ea =
    (...i) =>
    ({ type: e }) =>
      i.includes(e),
  Bl = (i) => {
    if (i === void 0 || i === "") return;
    const { prefix: e } = j;
    return e ? `${e}:${i}` : i;
  },
  qg = (i, e) => e ?? i?.container?.name ?? _t.SONG,
  Wg = (i, e, t) => {
    const r = { id: i.id, ...e, name: Bl(qg(i, t?.featureName)) };
    return [
      { relationships: i.relationships, attributes: i.attributes, id: i.id, type: i.type, container: r, context: t },
    ];
  },
  Yg = { toOptions: Wg, condition: ea("songs", "library-songs", "music-videos", "library-music-videos") },
  Gg = (i) => {
    if (i === void 0) return;
    const [e] = Object.keys(i);
    return i[e];
  },
  zg = (i) => {
    if (i === void 0) return;
    const e = Object.keys(i);
    return i[e[e.length - 1]];
  },
  Qg = ({ type: i, attributes: { assetTokens: e } }) => (i.includes("udio") ? Gg(e) : zg(e)),
  Xg = {
    condition: ea("uploaded-audios", "uploadedAudio", "uploaded-videos", "uploadedVideo"),
    toOptions: (i, e, t) => {
      const r = {
        ...i,
        context: t,
        attributes: {
          ...i.attributes,
          assetUrl: Qg(i),
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
  Jg = {
    toOptions: function (i, e, t) {
      return i.relationships.episodes.data.map((r) => ({ ...r, context: t }));
    },
    condition: Vl("episodes"),
    requiredRelationships: ["episodes"],
  };
function Zg(i = []) {
  return i.length === 0
    ? !1
    : i.filter(({ attributes: e }) => (e ? e.workName || e.movementName || e.movementCount || e.movementNumber : !1))
        .length > 0;
}
const ev = (i, e) => {
    if (e) return e;
    const t = Zg(i.relationships.tracks.data);
    if (i.type === "albums" || i.type === "library-albums") return t ? _t.ALBUM_CLASSICAL : _t.ALBUM;
    if (i.type === "playlists" || i.type === "library-playlists") return t ? _t.PLAYLIST_CLASSICAL : _t.PLAYLIST;
  },
  tv = (i, e, t) => {
    const r = { attributes: i.attributes, id: i.id, type: i.type, name: Bl(ev(i, t?.featureName)) };
    return i.relationships.tracks.data.map((s) => ({
      attributes: s.attributes,
      id: s.id,
      type: s.type,
      container: r,
      context: t,
    }));
  },
  iv = { toOptions: tv, condition: Vl("tracks"), requiredRelationships: ["tracks"] },
  rv = {
    condition: ea("music-movies"),
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
  $l = [iv, Jg, Yg, Hg, jg, Xg, rv],
  dn = (i, e, t = {}) => (
    (e = e?.serialize?.().data ?? e),
    ($l.find((s) => s.condition(i, e, t)) ?? Vg).toOptions(i, e, t).map((s) => new Si(s))
  ),
  sv = $l.reduce((i, e) => {
    const t = e.requiredRelationships;
    return (t && i.push(...t), i);
  }, []),
  nv = new Set(sv),
  Sr = (i, e) => Array.isArray(i) && (i.length === 0 || e(i[0])),
  Mo = (i) => i && i.id !== void 0 && i.type !== void 0,
  av = (i) => i && i.id !== void 0,
  ov = (i) =>
    i &&
    i.contentId !== void 0 &&
    i.metadata !== void 0 &&
    i.metadata.itemId !== void 0 &&
    i.metadata.itemType !== void 0,
  cv = (i) => i && i.items && Array.isArray(i.items),
  Uo = (i) => i && i.loaded,
  lv = N.linkChild(new Dt("queue")),
  uv = (i) => {
    if (!cv(i) && !Uo(i)) return [];
    const e = Uo(i) ? hv(i) : dv(i);
    return (e.forEach((t) => (t.context = { ...i.context, ...t.context })), e);
  },
  dv = ({ items: i }) => (Sr(i, ov) ? i.map((e) => new Si(Kg(e))) : Sr(i, av) ? i.map((e) => new Si(e)) : []),
  hv = (i) => {
    const e = [],
      { loaded: t, container: r, context: s } = i;
    return t === void 0
      ? []
      : Sr(t, Ua)
        ? (t.forEach((n) => {
            e.push(...xo(n, r, s));
          }),
          e)
        : Sr(t, Mo)
          ? (t.forEach((n) => {
              e.push(...hn(n, r, s));
            }),
            e)
          : Ua(t)
            ? xo(t, r, s)
            : Mo(t)
              ? hn(t, r, s)
              : [];
  },
  xo = (i, e, t = {}) => {
    const { data: r } = i.serialize(!0, void 0, { includeRelationships: nv, allowFullDuplicateSerializations: !0 });
    return hn(r, e, t);
  },
  hn = (i, e, t = {}) => (lv.trace("resourceToMediaItem()", i), dn(i, e, t));
N.createChild("queue");
class Hl {
  isAutoplay = !1;
  item;
  constructor(e, t) {
    ((this.item = e), (this.isAutoplay = t?.isAutoplay ?? !1));
  }
  restrict() {
    return this.item.restrict();
  }
}
function Vt(i, e) {
  return i.map((t) => new Hl(t, e));
}
function Fe(i) {
  return i.map((e) => e.item);
}
const { queueItemsDidChange: pv, queuePositionDidChange: Fo } = b;
class jl {
  repeatable;
  hasAutoplayStation = !1;
  playbackMode = Be.MIXED_CONTENT;
  _itemIDs = [];
  _queueItems = [];
  _isRestricted = !1;
  _nextPlayableItemIndex = -1;
  _position = -1;
  _dispatcher;
  constructor(e) {
    if (((this._dispatcher = e.services.dispatcher), (this.playbackMode = e.playbackMode), !e.descriptor)) return;
    const t = uv(e.descriptor).filter((r) => pn(r, this.playbackMode));
    ((this._queueItems = Vt(t)),
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
        this._dispatcher.publish(b.mediaPlaybackError, new p(p.Reason.CONTENT_RESTRICTED, "Content restricted")),
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
    return Fe(this._queueItems);
  }
  get autoplayItems() {
    return Fe(this._queueItems.filter((e) => e.isAutoplay));
  }
  get unplayedAutoplayItems() {
    return Fe(this._unplayedQueueItems.filter((e) => e.isAutoplay));
  }
  get userAddedItems() {
    return Fe(this._queueItems.filter((e) => !e.isAutoplay));
  }
  get unplayedUserItems() {
    return Fe(this._unplayedQueueItems.filter((e) => !e.isAutoplay));
  }
  get playableItems() {
    return Fe(this._queueItems.filter((e) => vt(e.item, this.playbackMode)));
  }
  get unplayedPlayableItems() {
    return Fe(this._unplayedQueueItems.filter((e) => vt(e.item, this.playbackMode)));
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
    ((this._queueItems = Vt(e)), this._reindex(), this._dispatcher.publish(b.queueItemsDidChange, this.items));
  }
  get currentQueueItem() {
    return this.queueItem(this.position);
  }
  remove(e) {
    if ((Mc("remove", { message: "The queue remove function has been deprecated" }), e === this.position))
      throw new p(p.Reason.INVALID_ARGUMENTS);
    this.splice(e, 1);
  }
  append(e = []) {
    return this.appendQueueItems(Vt(e));
  }
  appendQueueItems(e = []) {
    this.spliceQueueItems(this.appendTargetIndex, 0, e);
  }
  splice(e, t, r = []) {
    return Fe(this.spliceQueueItems(e, t, Vt(r)));
  }
  spliceQueueItems(e, t, r = [], s = !0) {
    r = r.filter((a) => pn(a?.item, this.playbackMode));
    const n = this._queueItems.splice(e, t, ...r);
    return (
      this._itemIDs.splice(e, t, ...r.map((a) => a.item.id)),
      s &&
        (this._dispatcher.publish(S.queueModified, { start: e, added: Fe(r), removed: Fe(n) }),
        this._dispatcher.publish(pv, this.items)),
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
    ((this._position = -1), e >= 0 && this._dispatcher.publish(Fo, { oldPosition: e, position: this.position }));
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
    ((!r || !vt(r, this.playbackMode)) && (this._position = this.findPlayableIndexForward(e)),
      this._position !== t && this._dispatcher.publish(Fo, { oldPosition: t, position: this._position }));
  }
  findPlayableIndexForward(e = this.position) {
    if (this.isEmpty || (this.isInitiated && !Ko([0, this.position], e))) return -1;
    const t = this.repeatable?.repeatMode;
    if (e < this.length)
      for (let r = e + 1; r < this.length; r++) {
        const s = this.item(r);
        if (vt(s, this.playbackMode)) return r;
      }
    if (t === we.all)
      for (let r = 0; r <= e; r++) {
        const s = this.item(r);
        if (vt(s, this.playbackMode)) return r;
      }
    return -1;
  }
  findPlayableIndexBackward(e = this.position) {
    if (this.isEmpty || !Ko([0, this.position], e)) return -1;
    const t = this.repeatable?.repeatMode;
    if (e > 0)
      for (let r = e - 1; r >= 0; r--) {
        const s = this.item(r);
        if (vt(s, this.playbackMode)) return r;
      }
    if (t === we.all)
      for (let r = this.length - 1; r >= e; r--) {
        const s = this.item(r);
        if (vt(s, this.playbackMode)) return r;
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
function pn(i, e) {
  return i.isPlayable || (e !== Be.FULL_PLAYBACK_ONLY && i.previewURL !== void 0);
}
function fv(i) {
  return i.isRestricted;
}
function yv(i) {
  return i.isUnavailable;
}
function vt(i, e) {
  return pn(i, e) && !fv(i) && !yv(i);
}
function Ko(i, e) {
  return i[0] <= e && e <= i[1];
}
const ql = { ...$h, ...P },
  mv = ["EditorialVideoClip", "uploaded-videos", "uploadedVideo", "musicVideo"],
  Vo = async () => {},
  gv = (i) =>
    i?.isUTS || mv.includes(i?.type)
      ? { FORWARD: 10, BACK: 10 }
      : i?.isAOD
        ? { FORWARD: 30, BACK: 30 }
        : { FORWARD: 30, BACK: 15 };
class Wl {
  constructor(e) {
    this.mediaItemPlayback = e;
  }
  canSeek = !1;
  getSeekSeconds(e) {
    return { BACK: 0, FORWARD: 0 };
  }
  seekBackward(e = Vo) {
    T.warn("seekBackward is not supported in this playback method");
  }
  seekForward(e = Vo) {
    T.warn("seekForward is not supported in this playback method");
  }
  async seekToTime(e, t) {
    T.warn("seekToTime is not supported in this playback method");
  }
}
class Yl {
  constructor(e, t) {
    ((this._dispatcher = e), (this.mediaItemPlayback = t));
  }
  canSeek = !0;
  getSeekSeconds(e) {
    return gv(e);
  }
  async seekBackward(e = this._seekToBeginning) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      T.warn("Cannot seekBackward when nowPlayingItem is not yet set.");
      return;
    }
    const t =
      this.mediaItemPlayback.currentPlaybackTime - this.getSeekSeconds(this.mediaItemPlayback.nowPlayingItem).BACK;
    if (t < 0) {
      await e.call(this);
      return;
    }
    await this.seekToTime(t, ye.Interval);
  }
  async seekForward(e = this._seekToEnd) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      T.warn("Cannot seekForward when nowPlayingItem is not yet set.");
      return;
    }
    const t =
      this.mediaItemPlayback.currentPlaybackTime + this.getSeekSeconds(this.mediaItemPlayback.nowPlayingItem).FORWARD;
    if (t > this.mediaItemPlayback.currentPlaybackDuration) {
      await e.call(this);
      return;
    }
    await this.seekToTime(t, ye.Interval);
  }
  async seekToTime(e, t = ye.Manual) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      T.warn("Cannot seekToTime when nowPlayingItem is not yet set.");
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
  async _seekToBeginning() {
    await this.seekToTime(0, ye.Interval);
  }
  async _seekToEnd() {
    await this.seekToTime(this.mediaItemPlayback.currentPlaybackDuration, ye.Interval);
  }
}
const vv = (i) => {
  const e = [...i],
    { length: t } = e;
  for (let r = 0; r < t; ++r) {
    const s = r + Math.floor(Math.random() * (t - r)),
      n = e[s];
    ((e[s] = e[r]), (e[r] = n));
  }
  return e;
};
var bv = Object.defineProperty,
  Tv = Object.getOwnPropertyDescriptor,
  _v = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Tv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && bv(e, t, s), s);
  },
  ta = ((i) => ((i[(i.off = 0)] = "off"), (i[(i.songs = 1)] = "songs"), i))(ta || {});
const bs = "Shuffling is not supported in this playback method.";
class Ev {
  canSetShuffleMode = !1;
  queue;
  set shuffle(e) {
    T.warn(bs);
  }
  get shuffleMode() {
    return 0;
  }
  set shuffleMode(e) {
    T.warn(bs);
  }
  checkAndReshuffle(e) {
    T.warn(bs);
  }
}
class Gl {
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
      !(e in ta) ||
      (T.debug(`mk: set shuffleMode from ${this.shuffleMode} to ${e}`),
      (this.mode = e),
      this.mode === 1 ? this.shuffleQueue() : this.unshuffleQueue(),
      this.controller.nowPlayingItem &&
        (this._queue.position = this._queue.indexForItem(this.controller.nowPlayingItem.id)),
      this.dispatcher.publish(b.shuffleModeDidChange, this.shuffleMode));
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
    do n = vv(r);
    while (r.length > 1 && Pn(n, r));
    const a = [...s, ...n];
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, a.length, Vt(a), e));
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
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, o.length, Vt(o), e), (this._queue.position = n));
  }
}
_v([_()], Gl.prototype, "queueModifiedHandler", 1);
var Sv = Object.defineProperty,
  kv = Object.getOwnPropertyDescriptor,
  Iv = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? kv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Sv(e, t, s), s);
  },
  ht = ((i) => ((i.continuous = "continuous"), (i.serial = "serial"), i))(ht || {});
const { queueItemsDidChange: Pv } = b;
class ia {
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
      (this._skipIntro = new Eg({ controller: this, services: e.services })),
      (this._upNext = new xl({ controller: this, services: e.services })),
      (this._rollMonitor = new _g({ controller: this, services: e.services })),
      (this._shuffler = new Ev()),
      (this._seekable = new Wl(this._mediaItemPlayback)),
      (this._repeatable = new Ng()),
      this._dispatcher.subscribe(b.autoplayEnabledDidChange, this.updateAutoplay),
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
        (T.warn("featureName is deprecated, pass it inside context"), r || (r = {}), (r.featureName = e.featureName)),
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
    return xg(this.storekit);
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
        Qe.authorizationStatusWillChange,
        async ({ authorizationStatus: t, newAuthorizationStatus: r }) => {
          t > ne.DENIED && r < ne.RESTRICTED
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
    this._dispatcher.publish(b.playInitiated, {
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
    (T.debug("PlaybackController.activate()"),
      (this._isActive = !0),
      this._dispatcher.unsubscribe(b.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._dispatcher.subscribe(b.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._skipIntro.activate(),
      this._upNext.activate(),
      this._rollMonitor.activate());
  }
  async deactivate() {
    (T.debug("PlaybackController.deactivate()"),
      (this._isActive = !1),
      await this.stop(),
      this._dispatcher.unsubscribe(b.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._skipIntro.deactivate(),
      this._upNext.deactivate(),
      this._rollMonitor.deactivate());
  }
  async destroy() {
    ((this._isDestroyed = !0),
      await this.deactivate(),
      this._dispatcher.unsubscribe(b.autoplayEnabledDidChange, this.updateAutoplay));
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
    (e.isUTS && (await kg(e, { manifestManager: this.services.manifest, playOptions: t })),
      this._dispatcher.publish(b.queueItemsDidChange, [e]));
    const r = await this._mediaItemPlayback.startMediaItemPlayback(e, !0);
    if (r) {
      const s = {
        item: r,
        position: this._mediaItemPlayback.currentPlaybackTime ?? 0,
        playingDate: this._mediaItemPlayback.currentPlayingDate,
        userInitiated: !0,
      };
      (T.debug("playSingleMediaItem: Dispatching DispatchTypes.playbackPlay event", s),
        this._dispatcher.publish(S.playbackPlay, s));
    }
  }
  async onPlaybackStateDidChange(e, t) {
    t.state === U.ended &&
      (this.continuous || this.repeatMode === we.one) &&
      (T.debug("controller detected track ended event, moving to next item."),
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
  async seekBackward() {
    return this._seekable.seekBackward();
  }
  async seekForward() {
    return this._seekable.seekForward(this.skipToNextItem.bind(this));
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
        new jl({
          services: { dispatcher: this.services.dispatcher },
          descriptor: { loaded: e, context: this.context, startWith: t?.startWith ?? t?.startPosition },
          playbackMode: this.playbackMode,
        }),
      ),
      e.length === 0)
    )
      throw (
        T.warn("No items (0) are playable for new queue"),
        new p(p.Reason.CONTENT_UNAVAILABLE, "No playable items for queue")
      );
    if (
      (t?.shuffleMode !== void 0 && (this.shuffleMode = t.shuffleMode),
      t?.repeatMode !== void 0 && (this.repeatMode = t.repeatMode),
      Mh(t?.startTime))
    ) {
      const r = this.queue.nextPlayableItem;
      r && this._mediaItemPlayback.playOptions.set(r.id, { startTime: t?.startTime });
    }
    return (
      this._dispatcher.publish("queue.created", this.queue),
      this._dispatcher.publish("queue.ready", this.queue),
      this._dispatcher.publish(b.queueIsReady, this.queue.items),
      this.queue
    );
  }
  async extractGlobalValues(e) {
    ((this._context = this.constructContext(e)),
      e?.featureName !== void 0 &&
        e.context &&
        (T.warn("featureName is deprecated, pass it inside context"), (e.context.featureName = e.featureName)));
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
    if (!s && r.state === $.unsupported) {
      await this.skipToNextItem();
      return;
    }
    return s;
  }
  async _next(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === we.one && this.queue.currentItem !== void 0) {
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
      s = t.userInitiated ?? !1;
    if (e < 0) {
      (T.debug("controller/index._next no next item available, stopping playback"),
        await this.stop({ userInitiated: s, seamlessAudioTransition: t.seamlessAudioTransition }),
        (r.playbackState = U.completed));
      return;
    }
    const n = this.isPlaying,
      a = r.currentPlaybackTime,
      o = await this._changeToMediaAtIndex(e, { userInitiated: s });
    return (
      this._notifySkip(n, o, {
        userInitiated: s,
        seamlessAudioTransition: t.seamlessAudioTransition ?? !1,
        position: a,
        direction: P.TRACK_SKIPPED_FORWARDS,
      }),
      o
    );
  }
  async _previous(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === we.one && this.queue.currentItem !== void 0) {
      (await this.stop({ endReasonType: P.TRACK_SKIPPED_BACKWARDS, userInitiated: t }), await this.play());
      return;
    }
    const r = this.queue.previousPlayableItemIndex;
    if (t && this.repeatMode === we.none && this.nowPlayingItem !== void 0 && r === -1) {
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
      ? (T.debug("seamlessAudioTransition transition, PAF play"),
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
      T.trace("PlaybackController.prepareQueue()"),
      this.hasAuthorization && (e.isRestricted = this.storekit.restrictedEnabled || !1),
      (e.repeatable = this._repeatable),
      (this._queue = e),
      (this._shuffler.queue = this._queue),
      this._dispatcher.publish(Pv, e.items),
      e
    );
  }
}
Iv([_()], ia.prototype, "updateAutoplay", 1);
function Av(i, e, t) {
  return (
    (e = e || i.height || 100),
    (t = t || i.width || 100),
    window.devicePixelRatio >= 1.5 && ((t *= 2), (e *= 2)),
    i.url.replace("{h}", `${e}`).replace("{w}", `${t}`).replace("{f}", "jpeg")
  );
}
var wv = Object.defineProperty,
  Rv = Object.getOwnPropertyDescriptor,
  zl = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Rv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && wv(e, t, s), s);
  };
const Bo = Object.freeze({ endReasonType: P.PLAYBACK_SUSPENDED, userInitiated: !1 });
class ra {
  constructor(e, t) {
    ((this.capabilities = e),
      (this.dispatcher = t),
      this.session &&
        (this.dispatcher.subscribe(b.nowPlayingItemDidChange, this.onNowPlayingItemDidChange),
        this.dispatcher.subscribe(b.capabilitiesChanged, this.onCapabilitiesChanged),
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
              src: Av(e.artwork, t, t),
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
        ? this.session.setActionHandler("pause", () => this.controller?.pause(Bo))
        : this.session.setActionHandler("pause", () => this.controller?.stop(Bo)),
      this.capabilities.canSeek &&
        (this.session.setActionHandler("seekforward", () => this.controller?.seekForward()),
        this.session.setActionHandler("seekbackward", () => this.controller?.seekBackward())),
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
zl([_()], ra.prototype, "onCapabilitiesChanged", 1);
zl([_()], ra.prototype, "onNowPlayingItemDidChange", 1);
var Y = ((i) => (
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
))(Y || {});
class Cv {
  constructor(e) {
    ((this._dispatcher = e), (this._mediaSession = new ra(this, e)));
  }
  _checkCapability = (e) => e === 9;
  _mediaSession;
  set controller(e) {
    this._mediaSession.controller = e;
  }
  updateChecker(e) {
    this._checkCapability !== e && ((this._checkCapability = e), this._dispatcher.publish(b.capabilitiesChanged));
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
var Ov = Object.defineProperty,
  Dv = Object.getOwnPropertyDescriptor,
  Ql = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Dv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Ov(e, t, s), s);
  };
class sa extends ia {
  type = ht.continuous;
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
    e !== this._isLiveStation && ((this._isLiveStation = e), this._dispatcher.publish(b.capabilitiesChanged));
  }
  get isTracksStation() {
    return this._isTracksStation;
  }
  set isTracksStation(e) {
    e !== this._isTracksStation && ((this._isTracksStation = e), this._dispatcher.publish(b.capabilitiesChanged));
  }
  async changeToMediaItem(e) {
    T.warn("changeToMediaItem is not supported for this type of playback");
  }
  hasCapabilities(e) {
    switch (e) {
      case Y.VOLUME:
        return !0;
      case Y.PAUSE:
      case Y.SKIP_NEXT:
      case Y.SKIP_PREVIOUS:
      case Y.SEEK:
        return !this.isLive;
      case Y.SKIP_TO_ITEM:
      case Y.AUTOPLAY:
      case Y.EDIT_QUEUE:
      case Y.SHUFFLE:
      case Y.REPEAT:
      default:
        return !1;
    }
  }
  async pause(e) {
    if (this.isLive) {
      T.warn("pause is not supported for this type of playback");
      return;
    }
    return super.pause(e);
  }
  async skipToPreviousItem() {
    if (this.isLive) {
      T.warn("skipToPreviousItem is not supported for this type of playback");
      return;
    }
    return super.skipToPreviousItem();
  }
  async replaceQueue(e, t) {
    const r = e[0];
    if (r === void 0) throw new p(p.Reason.CONTENT_UNAVAILABLE, "No Queue item");
    if (!Oi(r)) throw new p(p.Reason.MEDIA_DESCRIPTOR, "Item is not a Radio Station");
    return (
      (this.station = r),
      (this.isLive = !!r?.isLiveRadioStation || !!r?.attributes?.isLive),
      (this.isTracksStation = Gc(r)),
      (this._context = { featureName: _t.STATION, ...t?.context }),
      (this._seekable = this.isLive
        ? new Wl(this._mediaItemPlayback)
        : new Yl(this._dispatcher, this._mediaItemPlayback)),
      this.isTracksStation
        ? (e = await this.loadNextTracks(this.station, { context: this.context }))
        : (e.length > 1 && T.warn(`Attempting to play multiple Live Radio Station items (${e.length})`), (e = [r])),
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
    return this.hasCapabilities(Y.SEEK) ? super.getNewSeeker() : new pf();
  }
  async skipToNextItem() {
    if (this.isLive) {
      T.warn("Method skipToNextItem is not supported for this type of playback");
      return;
    }
    return super.skipToNextItem();
  }
  async loadNextTracks(e, t) {
    if (t?.limit === 0) return (T.warn("Not loading next tracks, limit is set to zero (0)"), []);
    T.debug(`Loading tracks for station ${e.id}`);
    let r = await this.services.itemLoader.loadStationNextTracks(e.id, {
      container: t?.container ?? e,
      context: t?.context,
      limit: t?.limit,
    });
    if ((T.debug(`Loaded ${r.length} tracks for station ${e.id}`), r.length === 0))
      throw (
        T.warn("No track data is available for the current station", { stationId: this.station?.id }),
        new p(p.Reason.CONTENT_UNAVAILABLE, "No track data is available for the current station.")
      );
    return (typeof t?.limit == "number" && t.limit > 0 && (r = r.slice(0, t.limit)), r);
  }
  async queueNextTracks() {
    if (!this.isActive) {
      T.debug("Not loading next tracks, controller is not active");
      return;
    }
    if (this.station === void 0 || !this.isTracksStation) {
      T.debug("Not loading next tracks, not a tracks radio station");
      return;
    }
    if (this.queue.isEmpty) {
      T.debug("Not loading next tracks, queue is empty");
      return;
    }
    if (this.queue.nextPlayableItemIndex !== -1) {
      T.debug("Not loading next tracks, enough playable items in queue");
      return;
    }
    const e = await this.loadNextTracks(this.station, { context: this.context, limit: 1 });
    e.length > 0 && (T.debug(`Queueing ${e.length} ${e.length === 1 ? "track" : "tracks"}`), this.queue.append(e));
  }
  async activate() {
    (await super.activate(),
      this._dispatcher.subscribe(b.queuePositionDidChange, this.queueNextTracks),
      this.queueNextTracks());
  }
  async deactivate() {
    (await super.deactivate(), this._dispatcher.unsubscribe(b.queuePositionDidChange, this.queueNextTracks));
  }
}
Ql([_()], sa.prototype, "hasCapabilities", 1);
Ql([_()], sa.prototype, "queueNextTracks", 1);
var Nv = Object.defineProperty,
  Lv = Object.getOwnPropertyDescriptor,
  Xl = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Lv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Nv(e, t, s), s);
  };
class na {
  constructor(e, t, r) {
    ((this.dispatcher = e), (this.callback = t), (this.percentage = r));
  }
  threshold = -1;
  startMonitor() {
    (this.dispatcher.unsubscribe(b.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.unsubscribe(b.playbackTimeDidChange, this.handleTimeChange),
      this.dispatcher.subscribe(b.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.subscribe(b.playbackTimeDidChange, this.handleTimeChange));
  }
  stopMonitor() {
    (this.dispatcher.unsubscribe(b.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.unsubscribe(b.playbackTimeDidChange, this.handleTimeChange),
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
Xl([_()], na.prototype, "handleTimeChange", 1);
Xl([_()], na.prototype, "updateThreshold", 1);
class Mv extends Mi {
  isSeamlessAudioTransitionsEnabled = !1;
  constructor(e) {
    (super(e),
      (this.watchers = [new na(this.dispatcher, this.handlePlaybackThreshold, 0.3)]),
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
var Uv = Object.defineProperty,
  xv = Object.getOwnPropertyDescriptor,
  Ui = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? xv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Uv(e, t, s), s);
  };
class ii extends ia {
  type = ht.serial;
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
      (this._queue = new jl(e)),
      (this._repeatable = new Lg(this._dispatcher)),
      (this._seekable = new Yl(this._dispatcher, this._mediaItemPlayback)),
      (this._shuffler = new Gl(this, { dispatcher: this._dispatcher })),
      (this._isSeamlessAudioTransitionsEnabled = !!e?.bag?.features["seamless-audio-transitions"]),
      (this.autoplayQueueSizeThreshold = e?.bag?.autoplay?.maxQueueSizeForAutoplay ?? 50),
      (this.autoplayUpcomingTracksLimit = e?.bag?.autoplay?.maxUpcomingTracksToMaintain ?? 10),
      (this.maxTracksForAutoplayStation = e?.bag?.autoplay?.maxQueueSizeInRequest ?? 10));
    const t = { controller: this, services: e.services };
    this._preloader = new Mv(t);
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
      this._dispatcher.subscribe(b.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.subscribe(b.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.subscribe(b.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.subscribe(b.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.subscribe(Ce.seamlessAudioTransition, this.onSeamlessAudioTransition));
  }
  async deactivate() {
    (await super.deactivate(),
      this._preloader.deactivate(),
      this._dispatcher.unsubscribe(b.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.unsubscribe(b.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(b.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(b.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(Ce.seamlessAudioTransition, this.onSeamlessAudioTransition),
      await this.stopAutoplay());
  }
  hasCapabilities(e) {
    switch (e) {
      case Y.EDIT_QUEUE:
      case Y.SKIP_NEXT:
      case Y.SKIP_TO_ITEM:
      case Y.AUTOPLAY:
      case Y.VOLUME:
      case Y.SKIP_PREVIOUS:
        return !0;
      case Y.REPEAT:
      case Y.SHUFFLE:
        return !this.queue?.currentQueueItem?.isAutoplay;
      case Y.PAUSE:
      case Y.SEEK:
        return !this.nowPlayingItem?.isAssetScrubbingDisabled;
      default:
        return !1;
    }
  }
  async onSeamlessAudioTransition(e, t) {
    (T.trace("onSeamlessAudioTransition", t),
      this._next({
        userInitiated: !1,
        seamlessAudioTransition: !0,
        endReasonType: P.NATURAL_END_OF_TRACK,
        position: t.previous.playbackDuration / 1e3,
        isPlaying: !1,
      }));
  }
  async onRepeatModeChange() {
    (this.repeatMode === we.none
      ? (T.debug("Queueing Autoplay tracks after RepeatMode change"), await this.queueAutoplayTracks())
      : (T.debug("Removing Autoplay tracks after RepeatMode change"),
        this.queue.removeQueueItems((e, t) => t > this.queue.position && e.isAutoplay)),
      this.repeatMode !== we.one && this.prepareToPlayNextItem());
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
      T.debug("Not preparing next item: no next item or current item is same as next item");
      return;
    }
    if (!this.queue.currentItem.isPreparedToPlay) {
      T.debug("Not preparing next item: current item not prepared to play");
      return;
    }
    try {
      return (T.debug(`Preparing next MediaItem: ${mr(e)}`, e), this._mediaItemPlayback.preloadMediaItem(e));
    } catch (t) {
      T.debug("next item failed to prepare for playbck -", t);
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
    (T.trace("SerialController.stopAutoplay()"),
      (this._autoplayStation = void 0),
      (this.queue.hasAutoplayStation = !1),
      T.debug("Removing unplayed Autoplay tracks from Queue"),
      this.queue.isInitiated && this.queue.removeQueueItems((e, t) => t > this.queue.position && e.isAutoplay === !0));
  }
  async startAutoplay() {
    if ((T.trace("SerialController.startAutoplay()"), !this.isActive)) {
      T.debug("Not starting autoplay, not active");
      return;
    }
    if (!this.autoplayEnabled) {
      T.debug("Not starting autoplay, not enabled");
      return;
    }
    if (this.repeatMode !== we.none) {
      T.debug("Not starting autoplay, repeat mode is on");
      return;
    }
    if (this.autoplayStation !== void 0) {
      T.debug("Autoplay station already created");
      return;
    }
    if (this.loadingAutoplayStation) {
      T.debug("Autoplay station already loading");
      return;
    }
    const e = this.queue.items.slice(-this.maxTracksForAutoplayStation);
    if (e.length === 0) {
      T.debug("No items in queue to start Autoplay station");
      return;
    }
    this.loadingAutoplayStation = !0;
    const t = this.queue.userAddedItems.slice(-1)?.pop();
    let r;
    t?.container !== void 0 && (r = { id: t.container.id, type: t.container.type });
    let s;
    try {
      (T.info(`Creating Autoplay station with ${e.length} ${e.length === 1 ? "item" : "items"}`),
        (s = (
          await this.services.itemLoader.createAutoplayStation(
            this.queue.items.slice(-this.maxTracksForAutoplayStation),
            { container: r },
          )
        ).station));
    } catch (n) {
      T.warning(`Unable to create Autoplay station: ${n.message}`);
    }
    (s === void 0
      ? T.info("Unable to create Autoplay station: no server data")
      : T.info(`Created Autoplay Station ${s?.id}`),
      (this._autoplayStation = s),
      (this.queue.hasAutoplayStation = s !== void 0),
      (this.loadingAutoplayStation = !1),
      await this.queueAutoplayTracks());
  }
  async queueAutoplayTracks(e) {
    if (this._autoplayStation === void 0) {
      T.debug("Skipping loading Autoplay tracks, no autoplay station");
      return;
    }
    if (e?.limit === 0) {
      T.warn("Skipping loading Autoplay tracks, track limit set to 0");
      return;
    }
    if (this.queue.unplayedUserItems.length > this.autoplayQueueSizeThreshold) {
      T.debug(
        `Skipping loading Autoplay tracks, more than ${this.autoplayQueueSizeThreshold} user added tracks in the queue `,
      );
      return;
    }
    if (this.loadingAutoplayTracks) {
      T.debug("Skipping loading Autoplay tracks, already loading");
      return;
    }
    const t =
      this.autoplayUpcomingTracksLimit -
      this.queue.unplayedAutoplayItems.length +
      (this.queue.currentQueueItem?.isAutoplay ? 1 : 0);
    if (t <= 0) {
      T.debug(
        `Skipping loading Autoplay tracks, ${this.autoplayUpcomingTracksLimit} autoplay items already in the queue`,
      );
      return;
    }
    ((this.loadingAutoplayTracks = !0),
      T.debug(`Loading next tracks from Autoplay station ${this._autoplayStation.id} (amount: ${t})`));
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
      T.debug(`Queueing ${r.length} tracks from Autoplay station ${this._autoplayStation.id}`),
      this.queue.appendQueueItems(r.map((s) => new Hl(s, { isAutoplay: !0 }))),
      (this.loadingAutoplayTracks = !1));
  }
  async _changeToMediaAtIndex(e = 0, t = { userInitiated: !1 }) {
    return await super._changeToMediaAtIndex(e, t);
  }
  get shouldTransitionSeamlessly() {
    return this._isSeamlessAudioTransitionsEnabled && this.hasAuthorization && !this.previewOnly;
  }
}
Ui([_()], ii.prototype, "hasCapabilities", 1);
Ui([_()], ii.prototype, "onSeamlessAudioTransition", 1);
Ui([_()], ii.prototype, "onRepeatModeChange", 1);
Ui([_()], ii.prototype, "onQueueChange", 1);
Ui([_()], ii.prototype, "prepareToPlayNextItem", 1);
const $o = {};
function Fv(i, e, t, r = {}) {
  const { once: s } = r,
    n = Array.isArray(e) ? e : [e],
    a = [];
  for (const o of n) {
    const c = Kv(o, t);
    (s === !0 ? i.subscribeOnce(o, c) : i.subscribe(o, c), a.push(() => Jl(i, o, t)));
  }
  return () => {
    for (const o of a) o();
  };
}
function Jl(i, e, t) {
  const r = Zl(e);
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
function Zl(i) {
  let e = $o[i];
  return (e || ((e = []), ($o[i] = e)), e);
}
function Kv(i, e) {
  const t = Zl(i),
    r = (s, n) => {
      e(n, s);
    };
  return (t.push([e, r]), r);
}
class Vv {
  _bitrate;
  _dispatcher;
  _downlinkSamples = [];
  constructor(e, t = Ne.STANDARD) {
    ((this._bitrate = t ?? Ne.STANDARD),
      (this._dispatcher = e),
      window?.navigator?.connection?.downlink !== void 0 &&
        this._recalculateBitrate((window.navigator.connection.downlink || 0) * 100));
  }
  get bitrate() {
    return this._bitrate;
  }
  set bitrate(e) {
    this._bitrate !== e && ((this._bitrate = e), this._dispatcher.publish(g.playbackBitrateDidChange, { bitrate: e }));
  }
  _calculateAverageDownlink() {
    return this._downlinkSamples.length === 0
      ? 0
      : this._downlinkSamples.reduce((e, t) => e + t, 0) / this._downlinkSamples.length || 0;
  }
  _recalculateBitrate(e) {
    (u.debug("_recalculateBitrate", e),
      this._downlinkSamples.push(e),
      this._calculateAverageDownlink() > Ne.STANDARD
        ? (u.debug("setting bitrate to", Ne.HIGH), (this.bitrate = Ne.HIGH))
        : (u.debug("setting bitrate to", Ne.STANDARD), (this.bitrate = Ne.STANDARD)));
  }
}
class Bv {
  mode;
  constructor(e = !1) {
    this.mode = e ? 0 : 1;
  }
  time(e = 0) {
    return this.mode === 1 ? Math.round(e) : e;
  }
}
const Ge = T.createChild("player"),
  $v = ve.register("mk-hlsjs-song-playback"),
  Hv = ve.register("mk-force-native-safari-video-player");
class jv {
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
    if ((Ge.trace("PlayerManager.createPlayer()", e, t), e.contentType === "audio"))
      return this.createAudioPlayer(e, t);
    if (e.contentType === "video") return this.createVideoPlayer(e, t);
    throw new m("mk-171", m.Reason.CONTENT_UNSUPPORTED, {
      description: `Unable to create player for asset: ${e.id}`,
      data: e,
    });
  }
  async createAudioPlayer(e, t) {
    const { playerOptions: r } = t;
    if (await qv(e)) {
      Ge.info("Creating HlsJsAudioPlayer required for asset");
      const s = new yt(r);
      return (await s.initialize(), s);
    } else {
      const s = this.cachedPlayers.get(Ze);
      if (s !== void 0 && !s.isDestroyed) return (Ge.debug("Using cached AudioPlayer instance"), s);
      Ge.info("Creating AudioPlayer as a fall through");
      const n = new Ze(r);
      return (await n.initialize(), Ge.debug("Caching AudioPlayer instance"), this.cachedPlayers.set(Ze, n), n);
    }
  }
  async createVideoPlayer(e, t) {
    Ge.debug("Creating VideoPlayer");
    const { playerOptions: r } = t;
    if (Hv.enabled) {
      Ge.info("Creating NativeSafariVideoPlayer with mkForceSafariNativeVideoPlayer enabled");
      const a = new qr(r);
      return (await a.initialize(), a);
    }
    const s = this.cachedPlayers.get(Te);
    if (s !== void 0 && !s.isDestroyed) return (Ge.debug("Using cached HlsJsVideoPlayer instance"), s);
    Ge.info("Creating HLSjsVideoPlayer as the default");
    const n = new Te(r);
    return (await n.initialize(), this.cachedPlayers.set(Te, n), n);
  }
  destroy() {
    this._isDestroyed = !0;
    for (const e of this.cachedPlayers.values()) e.destroy();
    this.cachedPlayers.clear();
  }
}
async function qv(i) {
  return !!(
    i.contentType === "video" ||
    i.item === void 0 ||
    Oi(i.item ?? {}) ||
    Kn(i.item ?? {}) ||
    Yc(i.item ?? {}) ||
    cr(i.item ?? {}) ||
    $v.enabled
  );
}
const aa = [
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
  oa = [
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
  De = T.createChild("item-loader");
function Wv(i) {
  return i != null && i.item !== void 0;
}
function Yv(i) {
  return i != null && Array.isArray(i.items);
}
function Gv(i) {
  return i != null && typeof i.url == "string";
}
function zv(i) {
  return i != null && Array.isArray(i.urls);
}
function Qv(i) {
  return i !== void 0 && typeof i.id == "string" && typeof i.type == "string" && typeof i.attributes < "u";
}
function Ho(i) {
  if (
    Object.keys(i).reduce(function (t, r) {
      return r === "item" || r === "items" || r === "url" || r === "urls" || aa.includes(r) || oa.includes(r)
        ? t + 1
        : t;
    }, 0) > 1
  )
    throw new p(p.Reason.UNSUPPORTED_ERROR, "Using multiple media kinds is not supported");
  return Wv(i) ? jo([i.item]) : Yv(i) ? jo(i.items) : Gv(i) ? [fn(i.url)] : zv(i) ? i.urls.map((t) => fn(t)) : Xv(i);
}
function jo(i) {
  const e = [];
  for (const t of i)
    typeof t == "string"
      ? e.push(fn(t))
      : t instanceof Si
        ? e.push({ id: t.id, kind: Ei(t.type), item: t })
        : Qv(t)
          ? e.push({ id: t.id, kind: Ei(t.type), data: t })
          : e.push(t);
  return e;
}
function fn(i) {
  if (!Lh(i)) throw new p(p.Reason.INVALID_ARGUMENTS, `Invalid media URL: ${i}`);
  const { contentId: e, kind: t } = Nc(i);
  if (e === void 0) throw new p(p.Reason.CONTENT_UNAVAILABLE, `Unable to resolve URL: ${i}`);
  const r = eu(t);
  if (r === void 0 || (!aa.includes(r) && !oa.includes(r)))
    throw new p(p.Reason.CONTENT_UNSUPPORTED, `Unsupported Media Kind: ${r}`);
  return { id: e, kind: Ei(r) };
}
function Xv(i) {
  let e;
  const t = [];
  for (const a of Object.keys(i)) {
    const o = eu(a);
    Jv(a) && (e === void 0 ? (e = [o, i[a]]) : t.push(a));
  }
  const [r, s] = e ?? [];
  if (r === void 0 || s === void 0) return [];
  t.length > 0 && De.warn(`Found redundant named options besides ${r}: ${t.join(", ")}`);
  const n = Ei(r);
  return Array.isArray(s) ? s.map((a) => ({ id: a, kind: n })) : [{ id: s, kind: n }];
}
function eu(i) {
  const e = Ei(i);
  return e === "episode" ? "podcastEpisode" : e === "radio-station" ? "station" : i;
}
function Jv(i) {
  return aa.includes(i) || oa.includes(i);
}
function Zv(i, e) {
  const t = {};
  for (const r of i) {
    const s = e(r);
    (t[s] === void 0 && (t[s] = []), t[s].push(r));
  }
  return t;
}
class eb {
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
    return Ho(e);
  }
  buildRequest(e, t) {
    return this.services.mediaAPI.createRequest(e, t);
  }
  async loadItems(e) {
    (De.trace("MusicItemLoader.loadItems()", e), De.debug("Loading resources for options", e));
    const t = await this.loadResources({ fetchContainerPages: this.fetchContainerPages, ...e }),
      r = this.createItems(t, { container: e?.container, context: e?.context });
    return (De.debug(`Transformed ${t.length} resources into ${r.length} MediaItems`), r);
  }
  async loadStation(e) {
    De.debug("Loading Radio Station", e);
    const r = this.convertOptionsToItemDescriptors(e).find((n) => n.kind === "station");
    if (r === void 0) {
      De.debug("No station descriptor found in options, returning undefined");
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
    return fi(n.map((c) => dn(c, a, o)));
  }
  async createAutoplayStation(e, t) {
    const r = [];
    for (let l = 0; l < e.length; l++) {
      const h = e[l],
        f = Lc(h instanceof Si ? h.type : h.kind);
      /(-?songs|artists?)$/.test(f) &&
        r.push({
          id: h.id,
          type: _i(h.id) ? "library-songs" : "songs",
          meta: t?.container !== void 0 ? { container: t.container } : void 0,
        });
    }
    if (r.length === 0)
      throw (
        De.error("Unable to create AutoplayStation: No items to seed"),
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
      De.error("Unable to create AutoplayStation: Server Error");
      const l = new p(p.Reason.CONTENT_UNSUPPORTED, "Unable to create AutoplayStation: Server Error");
      throw ((l.data = { errors: n }), l);
    }
    if (a?.station === void 0)
      throw (
        De.error("Unable to create AutoplayStation: No station returned from server"),
        new p(p.Reason.CONTENT_UNAVAILABLE, "Unable to create AutoplayStation: No station returned from server")
      );
    const o = this.createItems(a.station, { container: t?.container, context: t?.context })[0];
    let c = [];
    return (
      Array.isArray(a.tracks) && (c = this.createItems(a.tracks, { container: o, context: t?.context })),
      De.info(`Created AutoPlay station ${o.id} with ${c.length} tracks`),
      { station: o, tracks: c }
    );
  }
  async loadResources(e) {
    const t = Ho(e),
      r = tb(e.parameters),
      s = new Map(t.map((y, k) => [y.id, { position: k, descriptor: y }])),
      n = Zv(t, (y) => y.kind),
      a = Object.entries(n),
      o = [],
      c = [];
    for (const [y, k] of a) {
      const W = [],
        ce = [],
        te = [];
      for (const he of k) he.item !== void 0 || he.data !== void 0 ? W.push(he) : (_i(he.id) ? te : ce).push(he);
      const Pe = [];
      (/^(?:playlists?|albums?)$/i.test(y) && Pe.push("tracks"), /^podcasts?$/i.test(y) && Pe.push("episodes"));
      const ai = /^(?:playlists?|library-playlists?)$/i.test(y),
        mt = e.restricted ? "explicit" : void 0;
      W.length > 0 && o.push(...W.map((he) => he.item ?? he.data));
      const gt = Ht(dt(r), { include: Pe, extend: ai ? ["hasCollaboration"] : [], restrict: mt }),
        Hi = 16;
      if (ce.length > 0) {
        const he = qo(ce, Hi);
        for (const oi of he)
          c.push(
            this.buildRequest(`/v1/catalog/${this.services.mediaAPI.storefrontId}/${yi(y)}s`, {
              params: { ...gt, ids: oi },
            }),
          );
      }
      if (te.length > 0)
        if (y === "song") {
          const he = qo(te, Hi);
          for (const oi of he) c.push(this.buildRequest(`/v1/me/library/${yi(y)}s/`, { params: { ...gt, ids: oi } }));
        } else for (const he of te) c.push(this.buildRequest(`/v1/me/library/${yi(y)}s/${he.id}`, { params: gt }));
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
    for (const y of [...o, ...fi(l)]) {
      const k = s.get(y.id);
      k?.position !== void 0 && (h[k.position] = y);
    }
    const f = [];
    for (const { position: y, descriptor: k } of s.values()) h[y] === void 0 && f.push(k);
    if (f.length > 0) {
      const y = new p(
        p.Reason.NOT_FOUND,
        `One or more items could not be resolved: ${f.map(({ id: k }) => k).join(", ")}`,
      );
      throw ((y.data = f), y);
    }
    return h;
  }
  async fetchResources(e, t) {
    const r = t?.restricted ? "explicit" : void 0,
      s = t?.fetchContainerPages ?? !1,
      n = Math.max(0, t?.containerItemLimit ?? 1 / 0),
      o = await (await e.send()).json();
    if (o?.data === void 0) return (De.error("Unable to fetch resources: empty data from server"), []);
    const c = Array.isArray(o.data) ? o.data : [o.data];
    return Promise.all(
      c.map(async (l) => {
        const h = l.relationships?.tracks ?? l.relationships?.episodes;
        if (h === void 0) return l;
        const f = [...h.data];
        let y;
        for (s && f.length < n && (y = h.next); y !== void 0;) {
          const k = Math.min(100, n - f.length),
            te = await (await this.buildRequest(y, { params: { restrict: r, limit: k } }).send()).json();
          (f.push(...te.data), (y = f.length < n ? te.next : void 0));
        }
        return (delete h?.next, delete h?.href, (h.data = f.slice(0, n)), l);
      }),
    );
  }
  createItems(e, t) {
    return ((e = Array.isArray(e) ? e : [e]), fi(e.map((r) => dn(r, t?.container, t?.context))));
  }
}
function tb(i) {
  const e = { ...i };
  if (i === void 0) return e;
  for (const t of ["extend", "include", "relate", "fields"])
    if (e[t] !== void 0) {
      const r = i[t];
      typeof r == "string" && (e[t] = r.split(/(?:,{1}?\s*|\s+)/));
    }
  return e;
}
function qo(i, e) {
  return i.reduce(function (r, s, n) {
    const a = Math.floor(n / e);
    return (r[a] === void 0 && (r[a] = []), r[a].push(s.id), r);
  }, []);
}
var ib = Object.defineProperty,
  rb = Object.getOwnPropertyDescriptor,
  ca = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? rb(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && ib(e, t, s), s);
  };
class Yr {
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
            T.warn(`Tracker failed to clean up: ${e.constructor.name}`);
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
      throw new m("mk-142", m.Reason.CONFIGURATION_ERROR, { description: "PlayActivityService is not configured yet" });
    if (this.isEnabled) {
      (await Promise.all(
        this.trackers.map(async function (t) {
          try {
            await t.cleanup?.();
          } catch {
            T.warn(`Tracker failed to clean up: ${t.constructor.name}`);
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
              T.warn(`Tracker failed to configure: ${t.constructor.name}`);
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
ca([_()], Yr.prototype, "handleEvent", 1);
ca([_()], Yr.prototype, "recordApplicationIntent", 1);
ca([_()], Yr.prototype, "recordUserIntent", 1);
var sb = Object.defineProperty,
  nb = Object.getOwnPropertyDescriptor,
  la = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? nb(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && sb(e, t, s), s);
  };
const pe = N.createChild("playback"),
  Wo = (i, e) => {
    const { os: t } = e;
    if (i.isLinearStream && (t.name === "ios" || t.name === "ipados")) {
      pe.warn("Cannot play linear stream on iOS or iPad");
      const r = new p(p.Reason.CONTENT_UNSUPPORTED, "IOS LINEAR");
      throw ((r.data = { item: i }), r);
    }
  },
  Yo = async (i, e) => {
    if (i.container?.attributes?.requiresSubscription && !(await e())) {
      const r = new p(p.Reason.SUBSCRIPTION_ERROR);
      throw ((r.data = i), r);
    }
  },
  Go = (i, e) => {
    const { isMSESupported: t, isMMSSupported: r } = e;
    if (i.hasOffersHlsUrl && !t && !r) {
      pe.warn("HLSjs is not supported");
      const s = new p(p.Reason.CONTENT_UNSUPPORTED, "HLSjs Unsupported on Device");
      throw ((s.data = { item: i }), s);
    }
  };
let zo = !1;
class Gr {
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
      Gf(this.playerOptions.tokens),
      (this._currentPlayer = new mm(this.playerOptions)),
      this.dispatcher.subscribe(F.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.subscribe(cn.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher.subscribe(Ce.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
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
    (this._currentPlayer.isDestroyed && this.dispatcher.publish(g.playbackVolumeDidChange, {}),
      this._updatePlayerState("volume", e));
  }
  clearNextManifest() {
    this._currentPlayer.clearNextManifest();
  }
  destroy() {
    ((this._currentTimedMetadata = void 0),
      (this._isDestroyed = !0),
      this.dispatcher.unsubscribe(F.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.unsubscribe(cn.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher?.unsubscribe(Ce.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
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
    return (pe.trace("MediaItemPlayback.prepareToPlay()", e), this.preloadMediaItem(e));
  }
  async preloadMediaItem(e) {
    if ((pe.trace("MediaItemPlayback.preloadItem()", e), Hp(e)))
      return (pe.info(`Free podcast episode, not preparing item: ${e}`, e), e);
    const t = this.playOptions.get(e.id);
    pe.info(`Preparing MediaItem: ${e}`, e);
    const r = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Ne.HIGH ? 256 : 64,
      startOver: t?.startOver,
      bingeWatching: t?.bingeWatching,
    });
    return (
      Qo(e, r, this.previewOnly),
      pe.info(`Calling ${this._currentPlayer.constructor.name}.preloadItem for ${e}`),
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
  async seekToTime(e, t = ye.Manual) {
    await this._currentPlayer.seekToTime(e, t);
  }
  async setPresentationMode(e) {
    return this._currentPlayer.setPresentationMode(e);
  }
  async startMediaItemPlayback(e, t) {
    return (pe.trace("MediaItemPlayback.startMediaItemPlayback()", e), this.playMediaItem(e, t));
  }
  async playMediaItem(e, t = !1, r) {
    (pe.trace("MediaItemPlayback.playMediaItem()", e),
      Wo(e, this.services.runtime),
      Go(e, this.services.runtime),
      await Yo(e, this.hasMusicSubscription),
      this.playOptions.has(e.id) && ((r = r ?? this.playOptions.get(e.id)), this.playOptions.delete(e.id)));
    const s = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Ne.HIGH ? 256 : 64,
      startOver: r?.startOver,
      bingeWatching: r?.bingeWatching,
    });
    return (await this.playAsset(s, t, r), e);
  }
  async playAsset(e, t = !1, r) {
    pe.trace("MediaItemPlayback.playAsset", e);
    const s = e.item;
    (s?.resetState(),
      Wo(s, this.services.runtime),
      Go(s, this.services.runtime),
      await Yo(s, this.hasMusicSubscription),
      (this._currentTimedMetadata = void 0),
      this.playOptions.has(s.id) && ((r = r ?? this.playOptions.get(s.id)), this.playOptions.delete(s.id)));
    const n = await this.playerManager.createPlayer(e, { playerOptions: this.playerOptions, playOptions: r });
    if ((await this.setCurrentPlayer(n), Qo(s, e, this.previewOnly), e.encrypted))
      if (e.encrypted)
        (pe.debug(`Initializing encrypted playback for ${s}`, e),
          (s.playbackType = me.encryptedFull),
          (n.nowPlayingItem = s),
          await n.playItemFromEncryptedSource(s, t, r));
      else
        throw new m("mk-170", m.Reason.CONTENT_UNSUPPORTED, {
          description: "Unable to play asset for MediaItem",
          data: { asset: e, item: s },
        });
    else {
      pe.debug(`Initializing unencrypted playback for ${s}`, e);
      const a = n.isPaused() && !t;
      ((s.playbackType = this.previewOnly || e.preview ? me.preview : me.unencryptedFull),
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
        (pe.debug("MediaItemPlayback: setting currentPlayer", e),
        await this._currentPlayer.stop(),
        (this._currentPlayer = e),
        pe.trace("Applying default player state", e, this.playerState),
        Object.assign(e, this.playerState),
        this.dispatcher.publish(g.playerTypeDidChange, { player: e })),
      e
    );
  }
  getCurrentPlayer() {
    return this._currentPlayer;
  }
  async onKeySystemGenericError(e, t) {
    if (zo) this.dispatcher.publish(g.mediaPlaybackError, t);
    else if (
      ((zo = !0),
      pe.warn("Retrying playback after keysystemGenericError"),
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
    this.dispatcher.publish(g.mediaPlaybackError, t);
  }
  _updatePlayerState(e, t) {
    ((this.playerState[e] = t), (this._currentPlayer[e] = t));
  }
}
la([_()], Gr.prototype, "onKeySystemGenericError", 1);
la([_()], Gr.prototype, "onBufferTimedMetadataDidChange", 1);
la([_()], Gr.prototype, "onPlaybackLicenseError", 1);
function Qo(i, e, t) {
  ((i.assetURL = e.assetURL),
    e.encrypted &&
      (i.keyURLs = {
        "hls-key-server-url": e.keyServerURL,
        "hls-key-cert-url": e.keyCertURL,
        "widevine-cert-url": e.keyCertURL,
      }),
    e.meta !== void 0 && (i.hlsMetadata = e.meta),
    t
      ? (i.playbackType = me.preview)
      : e.encrypted
        ? e.encrypted
          ? (i.playbackType = me.encryptedFull)
          : (i.playbackType = me.none)
        : (i.playbackType = me.unencryptedFull),
    (i.state = $.ready));
}
const tr = T.createChild("rtc");
class tu {
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
    await Wr(j.urls.rtc);
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
      tr.debug("RTC: creating reporting agent with config", h),
      (this.reportingAgent = new window.rtc.RTCReportingAgent(h)),
      tr.debug("RTC: created reporting agent", this.reportingAgent),
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
      tr.debug("RTC: called destroy on reporting agent", this.reportingAgent),
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
    return (tr.debug("RTC: created store bag", h), h);
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
function ab(i, e = 1) {
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
function ob(i) {
  return ab(i, 1 / 0);
}
function cb(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function kr(i) {
  return typeof i == "string";
}
function Wt(i, e) {
  return kr(i) ? (e?.trim === !0 ? i.trim() : i).length === 0 : !1;
}
function Ts(i) {
  return typeof i == "function";
}
function lb(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function ub(i, e) {
  if (((e = kr(e) && !Wt(e, { trim: !0 }) ? e : ""), e.length > 1))
    throw new Error("QueryString prefix can only be a single character");
  return i.replace(new RegExp(`^[?&${e}]+`, "i"), "");
}
function db(i, e) {
  if (!i) return "";
  let t = e?.prefix === !0 ? "?" : "";
  if ((kr(e?.prefix) && (t = e.prefix), kr(i))) return t + ub(i, t);
  const r = Ts(e?.arrayFormat) ? e.arrayFormat : (ec[e?.arrayFormat ?? Xo] ?? ec[Xo]),
    s = Ts(e?.objectFormat) ? e.objectFormat : (Zo[e?.objectFormat ?? Jo] ?? Zo[Jo]);
  function n(l, h) {
    return fb(l, e) ? "" : lb(l) ? s(l, h) : Array.isArray(l) ? r(l, h) : xt(l, h);
  }
  const a = e?.sort ?? pb;
  let o = hb;
  Ts(e?.encode) && (o = e.encode);
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
  return Wt(c) ? "" : t + c;
}
const Xo = "bracket",
  Jo = "bracket",
  hb = (i) => encodeURIComponent(String(i)),
  pb = (...i) => 0,
  Zo = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (r) {
          return t.format(e[r], { ...t, path: t.path.concat(r) });
        })
        .filter((r) => !Wt(r))
        .join("&");
    },
    dot: function (e, t) {
      throw new Error("Not Implemented");
    },
  },
  ec = {
    comma: function (e, t) {
      return xt(e.join(","), t);
    },
    repeat: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? xt("", t)
        : e
            .map((r) => xt(String(r), t))
            .filter((r) => r.length > 0)
            .join("&");
    },
    bracket: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? xt("", t)
        : e
            .map(function (r) {
              return t.format(r, { ...t, path: [...t.path, ""] });
            })
            .filter((r) => !Wt(r) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
    index: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? xt("", t)
        : e
            .map(function (r, s) {
              return t.format(r, { ...t, path: [...t.path, String(s)] });
            })
            .filter((r) => !Wt(r) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
  };
function xt(i, e) {
  const t = e.path.map((r, s) => (s === 0 ? e.encode(r) : `[${e.encode(r)}]`)).join("");
  return i === null && e.formatting.includeNullValue !== !0 ? t : `${t}=${e.encode(i)}`;
}
function fb(i, e) {
  return !!(
    (i === void 0 && e?.skipUndefined !== !1) ||
    (i === null && e?.skipNull !== !1) ||
    (Wt(i) && e?.skipEmptyString !== !1) ||
    (Array.isArray(i) && i.length === 0 && e?.skipEmptyArray !== !1)
  );
}
function yb(i) {
  const e = { method: "GET", host: i.hostname, path: i.pathname };
  if (i.searchParams.size > 0) {
    const t = {};
    for (const [r, s] of i.searchParams.entries()) t[r] = s;
    e.params = t;
  }
  return e;
}
function iu(i, e) {
  return db(i, { prefix: e?.prefix, objectFormat: "bracket", arrayFormat: "comma" });
}
function ru(i, e, t) {
  let r = e ?? "";
  cb(r) && ((t = e), (r = ""));
  const s = mb(i, r);
  let n = "?";
  s.endsWith("&") || s.endsWith("?") ? (n = "") : s.includes("?") && (n = "&");
  const a = t === void 0 ? "" : iu(t, { prefix: n });
  return s + a;
}
function mb(...i) {
  const e = ob(i).filter((r) => typeof r == "string" && r.trim().length !== 0);
  if (e.length === 0) return "/";
  let t = e[0];
  for (let r = 1; r < e.length; r++) t = t.replace(/[/]+$/, "") + "/" + e[r].replace(/^[/]+/, "");
  return (
    /^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")),
    (t = t.replace(/(:)?[/]+/g, (r, s) => (s ? r : "/"))),
    t
  );
}
function su(i) {
  return typeof i == "string";
}
function gb(i, e) {
  return su(i) ? (e?.trim === !0 ? i.trim() : i).length === 0 : !1;
}
const vb = (i) => !gb(i);
function bb(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class ua {
  static create(e) {
    return new ua(e);
  }
  withMethod(e) {
    return ((this._config.method = e), this);
  }
  withScheme(e) {
    return ((this._config.scheme = e), this);
  }
  withHost(e) {
    const t = /^(https?)?(:?:\/\/)?([^/]+)/i.exec(e);
    return (t && (vb(t[1]) && this.withScheme(t[1]), (this._config.host = t[2])), this);
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
      (this._config.body = su(e) ? e : JSON.stringify(e)),
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
    return this.withConfig(yb(e));
  }
  async config() {
    return this._config;
  }
  async build() {
    const { MediaAPIRequest: e } = await Na(() => Promise.resolve().then(() => ic), void 0);
    return new e(await this.config());
  }
  async send(e) {
    const { sendRequest: t } = await Na(() => Promise.resolve().then(() => ic), void 0);
    return t(await this.build(), { fetch: e?.fetch });
  }
  constructor(e) {
    (bb(this, "_config", { method: "GET", scheme: "https", host: "", path: "", headers: {}, params: {}, body: void 0 }),
      this.withConfig(e ?? {}));
  }
}
class Ir extends Error {
  constructor(e, t, r) {
    super(t);
  }
}
function ui(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class Tb {
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
    (ui(this, "__brand__", "MediaAPIResponse"),
      ui(this, "config", void 0),
      ui(this, "response", void 0),
      ui(this, "textPayload", void 0),
      ui(this, "jsonPayload", void 0),
      (this.response = e),
      (this.config = _b(t) ? t.config : t));
  }
}
function _b(i) {
  return i != null && i.__brand__ === "MediaAPIRequest";
}
function tc(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
class nu extends Request {
  static async builder() {
    return ua.create();
  }
  async send(e) {
    return da(this, e);
  }
  constructor(e) {
    const t = new URL(ru(`${e.scheme ?? "https"}://${e.host}`, e.path, iu(e.params ?? {}, { prefix: "?" }))),
      r = { method: e.method, headers: new Headers(e.headers ?? {}), body: void 0 };
    (e.body !== void 0 &&
      (typeof e.body == "string"
        ? (r.body = e.body)
        : ((r.body = JSON.stringify(e.body)),
          r.headers.has("Content-Type") || r.headers.set("Content-Type", "application/json"))),
      super(t, r),
      tc(this, "__brand__", "MediaAPIRequest"),
      tc(this, "config", void 0),
      (this.config = e));
  }
}
async function da(i, e) {
  const t = (e?.fetch ?? globalThis?.fetch !== void 0) ? fetch.bind(globalThis) : void 0;
  if (t === void 0) throw new Ir("CONFIGURATION_ERROR", "Unable to find valid fetch implementation");
  let r;
  try {
    r = await t(i);
  } catch (s) {
    throw new Ir("NETWORK_ERROR", `Unable to complete request for ${i.url}`, s);
  }
  return new Tb(r, i);
}
const ic = Object.freeze(
  Object.defineProperty({ __proto__: null, MediaAPIRequest: nu, sendRequest: da }, Symbol.toStringTag, {
    value: "Module",
  }),
);
function di(i, e, t) {
  return (
    e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i
  );
}
const Eb = "api.music.apple.com";
class Sb {
  get fetch() {
    if (this.fetchFunction === void 0) throw new Ir("CONFIGURATION_ERROR", "Could not find a fetch implementation");
    return this.fetchFunction;
  }
  resolvePath(e) {
    return new URL(ru(`${this.scheme}://${this.host}`, e));
  }
  createRequest(e, t) {
    const r = { ...t?.headers, Authorization: `Bearer ${this.developerToken}` };
    this.mediaUserToken !== void 0 && (r["Media-User-Token"] = this.mediaUserToken);
    const s = { ...t?.params };
    if (e instanceof URL || /^http?s/i.test(e)) {
      const n = new URL(e);
      if (n.hostname !== this.host) throw new Ir("VALUE_ERROR", "URL host does not match configured API host");
      e = n.pathname;
      for (const [a, o] of n.searchParams.entries()) s[a] = o;
    }
    return new nu({
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
    return da(this.createRequest(t, { ...r, method: e }), { fetch: this.fetch });
  }
  constructor(e) {
    if (
      (di(this, "scheme", void 0),
      di(this, "host", void 0),
      di(this, "developerToken", void 0),
      di(this, "mediaUserToken", void 0),
      di(this, "fetchFunction", void 0),
      e.developerToken === void 0 || e.developerToken.trim() === "")
    )
      throw new Error("Missing or empty developer token");
    ((this.developerToken = e.developerToken.trim()),
      (this.scheme = e.scheme ?? "https"),
      (this.host = e.host ?? Eb),
      (this.mediaUserToken = e.mediaUserToken),
      (this.fetchFunction = (e.fetch ?? globalThis?.fetch !== void 0) ? globalThis.fetch.bind(globalThis) : void 0));
  }
}
function rc(i, e) {
  return kb(i)
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
function kb(i) {
  try {
    return yn(i);
  } catch (e) {
    throw e.message === "UNCLOSED_PARAMETER" ? new Error(`Unclosed parameter in path: "${i}"`) : e;
  }
}
function yn(i, e = []) {
  if (i.startsWith("{{")) {
    const t = i.indexOf("}}");
    if (t === -1) throw new Error("UNCLOSED_PARAMETER");
    const r = { type: 1, value: i.slice(2, t) };
    return t + 2 < i.length ? yn(i.slice(t + 2), [...e, r]) : [...e, r];
  } else {
    const t = i.indexOf("{{");
    return t === -1 ? [...e, { type: 0, value: i }] : yn(i.slice(t), [...e, { type: 0, value: i.slice(0, t) }]);
  }
}
class Ib extends Sb {
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
    if (q(e.host)) throw new m("mk-114", m.Reason.CONFIGURATION_ERROR, "Invalid API Host for MediaAPIClient");
    if (q(e.developerToken))
      throw new m("mk-115", m.Reason.CONFIGURATION_ERROR, "Invalid developerToken for MediaAPIClient");
    (super({ host: e.host, developerToken: e.developerToken, mediaUserToken: e.mediaUserToken }),
      (this.services = e.services),
      e.storefrontId !== void 0 && (this.storefrontId = e.storefrontId));
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const r of t) {
      const s = this[r].bind(this);
      this[r] = async function (n, ...a) {
        return s(typeof n == "string" ? rc(n, this.parameters) : n, ...a);
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
    return (typeof e == "string" && (e = rc(e, this.parameters)), super.createRequest(e, ...t));
  }
}
const Pb = (i, e) => {
    au.info("converting manifest URIs to absolute paths");
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
  Ab = ["https://play.itunes.apple.com/", "https://linear.tv.apple.com/", "https://play-edge.itunes.apple.com"],
  au = u.createChild("manifest"),
  sc = ve.register("mk-load-manifest-once");
class wb {
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
      sc.configured && (this.personalizedManifests = sc.enabled));
  }
  get fetch() {
    return this.services.request.fetch;
  }
  async fetchManifest(e) {
    return (au.info("fetching manifest at", e), this.personalizedManifests ? this.fetchForCache(e) : this.fetchOnly(e));
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
    Ab.some((c) => e.startsWith(c)) &&
      this.mediaUserToken !== void 0 &&
      (t.set("Authorization", `Bearer ${this.developerToken}`), t.set("media-user-token", this.mediaUserToken));
    const s = await this.fetch(e, { headers: t }),
      n = Pb(e, await s.text()),
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
      je(e, "mediaUserToken") && (this.mediaUserToken = e.mediaUserToken),
      e.personalizedManifests !== void 0 && (this.personalizedManifests = e.personalizedManifests),
      e.cache !== void 0 && (this.cache = e.cache));
  }
}
class Rb {
  services;
  get client() {
    return this.services.mediaAPI;
  }
  constructor(e) {
    this.services = e.services;
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const r of t)
      this[r] = async function (s, ...n) {
        return nc(await this.client[r](s, ...n));
      }.bind(this);
  }
  async request(e, t, r) {
    return nc(
      await this.client.createRequest(e, { params: t, headers: r?.headers, method: r?.method, body: r?.body }).send(),
    );
  }
  async music(e, t, r) {
    const s = await this.request(e, t, r);
    return ((s.data = s.json), s);
  }
}
async function nc(i) {
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
async function ac(i, e) {
  const { mediaAPI: t } = e,
    r = await t.get("/v1/play/assets", { params: { ...i.playParams, keyFormat: "web" } });
  if (r.status === 500) throw new m("mk-153", m.Reason.SERVER_ERROR, { data: i });
  if (r.status === 403) {
    const n = await r.json(),
      a = n?.code === "40303" ? m.Reason.SUBSCRIPTION_ERROR : m.Reason.ACCESS_DENIED;
    throw new m("mk-154", a, { description: n?.title ?? n?.detail ?? "", data: i });
  }
  if (r.status !== 200) throw new m("mk-155", m.Reason.CONTENT_UNAVAILABLE, { data: i });
  return (await r.json())?.results?.assets ?? [];
}
async function Cb(i, e) {
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
            ["subscriptionAdamId", Pd(r) ? r.slice(2) : i.playParams.catalogId],
            ["universalLibraryId", _i(r) ? r : void 0],
          ].filter(([, h]) => h !== void 0),
        )
      : { salableAdamId: r },
    n = e.request,
    a = n.buildRequest(e.endpoint, { method: "POST", body: JSON.stringify(s), headers: t }),
    o = await n.fetchJSON(a);
  if (o?.failureType !== void 0 && wc(o.failureType) === m.Reason.AGE_VERIFICATION_REQUIRED) throw p.serverError(o);
  if (o?.songList === void 0 || o.songList.length === 0)
    throw new m("mk-160", m.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to load assets for MediaItem",
      data: i,
    });
  const c = o.songList[0];
  let l;
  if (Ob(c))
    l = {
      url: c["hls-playlist-url"],
      playlist: !0,
      keyServerURL: c["hls-key-server-url"],
      fairplayCertURL: c["hls-key-cert-url"],
      widevineCertURL: c["widevine-cert-url"],
    };
  else if (Db(c))
    l = {
      url: c.assets[0].URL,
      playlist: !1,
      keyServerURL: c["hls-key-server-url"],
      fairplayCertURL: c["hls-key-cert-url"],
      widevineCertURL: c["widevine-cert-url"],
    };
  else {
    const h = e.bitrate ?? 64,
      f = e.encoding ?? "cbcp",
      y = c.assets.find((k) => (k.flavor ?? "").endsWith(`${f}${h}`))?.URL;
    y !== void 0 &&
      (l = {
        url: y,
        playlist: !1,
        bitrate: h,
        encoding: f,
        keyServerURL: c["hls-key-server-url"],
        fairplayCertURL: c["hls-key-cert-url"],
        widevineCertURL: c["widevine-cert-url"],
      });
  }
  if (l === void 0)
    throw new m("mk-161", m.Reason.CONTENT_UNAVAILABLE, { description: "Unable to fetch asset from MZPlay", data: i });
  return l;
}
function Ob(i) {
  const e = i["hls-playlist-url"];
  return e !== void 0 && !q(e);
}
function Db(i) {
  const e = i.assets[0];
  return i.assets.length === 1 && e !== void 0 && e.flavor === void 0 && !q(e.URL);
}
const Nb = /^(?:#EXT-X-SESSION-DATA:?)DATA-ID="([^"]+)".+VALUE="([^"]+)".*$/,
  Lb = /^com\.apple\.hls\./i;
async function Mb(i, e) {
  if (!i.isUTS || !i.assetURL)
    throw new m("mk-167", m.Reason.INVALID_ARGUMENTS, { description: "Item is not an UTS item", data: i });
  const t = Ni(i, e.playOptions);
  let r;
  try {
    r = await e.manifestManager.fetchManifest(t);
  } catch (n) {
    throw new m("mk-168", m.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to fetch HLS Playlist",
      data: i,
      origin: n,
    });
  }
  const s = {};
  for (const n of r.content.split(`
`)) {
    const a = n.match(Nb);
    a !== null && (s[a[1].replace(Lb, "")] = a[2]);
  }
  return s;
}
const Ub = ve.register("mk-broadcast-radio-playback"),
  xb = ve.register("mk-hlsjs-song-playback"),
  J = T.createChild("asset");
class Fb {
  services;
  isConfigured = !0;
  _mzplayAssetEndpoint;
  get mzplayAssetEndpoint() {
    if (this._mzplayAssetEndpoint === void 0)
      throw new m("mk-147", m.Reason.CONFIGURATION_ERROR, { description: "MZPlay assets URL is not configured" });
    return this._mzplayAssetEndpoint;
  }
  _staticKeyURLs;
  get staticKeyURLs() {
    if (this._staticKeyURLs === void 0)
      throw new m("mk-143", m.Reason.CONFIGURATION_ERROR, { description: "Static Key URLs not configured" });
    return this._staticKeyURLs;
  }
  get keySystem() {
    if (this.services.runtime.preferredKeySystem === void 0)
      throw new m("mk-140", m.Reason.CONTENT_UNSUPPORTED, { description: "No DRM KeySytem available" });
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
    if (!q(e.rawAssetUrl ?? "")) {
      J.debug(`Resolving direct asset for ${e}`, e, t);
      const r = await this.resolveDirectURLAsset(e, t);
      return (J.debug(`Resolved direct asset for ${e}`, r), r);
    }
    if (Yp(e)) {
      J.debug(`Resolving Broadcast Radio asset for ${e}`, e, t);
      const r = await this.resolveBroadcastRadioAsset(e, t);
      return (J.debug(`Resolved Broadcast Radio asset for ${e}`, r), r);
    }
    if (e.isUTS) {
      J.debug(`Resolving UTS asset for ${e}`, e, t);
      const r = await this.resolveUTSAsset(e, t);
      return (J.debug(`Resolved UTS asset for ${e}`, r), r);
    }
    if ((cr(e) || Yc(e)) && e.hasOffersHlsUrl) {
      J.debug(`Resolving HLS Offer asset for ${e}`, e, t);
      const r = await this.resolveHLSOffersAsset(e, t);
      return (J.debug(`Resolved HLS Offer asset for ${e}`, r), r);
    }
    if (e.isLiveRadioStation || e.isRadioEpisode || e.isLiveVideoStation) {
      J.debug(`Resolving Live Radio asset for ${e}`, e, t);
      const r = await this.resolveRadioStationAsset(e, t);
      return (J.debug(`Resolved Live Radio asset for ${e}`, r), r);
    }
    if (e.type === "song" && xb.enabled) {
      J.debug(`Resolving Catalog Song asset for ${e}`, e, t);
      const r = await this.resolveCatalogSongAsset(e, t);
      return (J.debug(`Resolved Catalog Song asset for ${e}`, r), r);
    }
    if (await this.isMediaAPIContentType(e, t)) {
      J.debug(`Resolving MZPlay asset for ${e}`, e, t);
      const r = await this.resolveMZPlayWebAsset(e, t);
      return (J.debug(`Resolved MZPlay asset for ${e}`, r), r);
    }
    throw new m("mk-145", m.Reason.CONTENT_UNSUPPORTED, {
      description: `Could not resolve asset for content type ${e.type}`,
      data: e,
    });
  }
  async resolvePreviewAsset(e, t) {
    if ((J.debug(`Resolving preview asset for ${e}`, e, t), e.previewURL === void 0 || q(e.previewURL)))
      throw new m("mk-150", m.Reason.INVALID_ARGUMENTS, { description: "Missing previewURL for MediaItem", data: e });
    return {
      id: e.catalogId ?? e.id,
      encrypted: !1,
      assetURL: e.previewURL,
      contentType: this.assetContentType(e),
      item: e,
      preview: !0,
    };
  }
  async resolveDirectURLAsset(e, t) {
    if (q(e.rawAssetUrl ?? ""))
      throw new m("mk-151", m.Reason.INVALID_ARGUMENTS, { description: "Missing rawAssetURL for MediaItem", data: e });
    return {
      id: e.catalogId ?? e.id,
      encrypted: !1,
      assetURL: e.rawAssetUrl,
      contentType: this.assetContentType(e),
      item: e,
      preview: !1,
    };
  }
  async resolveBroadcastRadioAsset(e, t) {
    if (!Ub.enabled) throw new m("mk-152", m.Reason.CONTENT_UNSUPPORTED, { data: e });
    const r = await ac(e, { mediaAPI: this.services.mediaAPI });
    if (r === void 0 || r.length === 0)
      throw new m("mk-156", m.Reason.CONTENT_UNAVAILABLE, {
        description: "No Broadcast RadioStation assets returned from the server",
        data: e,
      });
    return {
      id: e.catalogId ?? e.id,
      encrypted: !1,
      assetURL: r[0].url,
      contentType: this.assetContentType(e),
      item: e,
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
        preview: !1,
      };
    } catch (r) {
      throw new m("mk-144", m.Reason.CONTENT_UNSUPPORTED, {
        description: "Unable to play HLS offers",
        data: e,
        origin: r,
      });
    }
  }
  async resolveRadioStationAsset(e, t) {
    const r = await ac(e, { mediaAPI: this.services.mediaAPI });
    if (r === void 0 || r.length === 0)
      throw new m("mk-148", m.Reason.CONTENT_UNAVAILABLE, {
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
    if (n?.assets === void 0 || n.assets.length === 0) throw new m("mk-169", m.Reason.CONTENT_UNAVAILABLE, { data: e });
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
        preview: !1,
      }
    );
  }
  async resolveMZPlayWebAsset(e, t) {
    await this.assertSubscription(e, t);
    const r = this.keySystem,
      s = await Cb(e, {
        bitrate: t?.bitrate,
        request: this.services.request,
        endpoint: this.mzplayAssetEndpoint,
        encoding: r === "fairplay" ? "cbcp" : "ctrp",
        developerToken: this.services.mediaAPI.developerToken,
        mediaUserToken: this.services.mediaAPI.mediaUserToken,
      });
    return {
      id: e.catalogId ?? e.id,
      encrypted: !0,
      assetURL: s.url,
      contentType: this.assetContentType(e),
      keySystem: r,
      keyServerURL: s.keyServerURL,
      keyCertURL: r === "fairplay" ? s.fairplayCertURL : s.widevineCertURL,
      item: e,
      preview: !1,
    };
  }
  async resolveUTSAsset(e, t) {
    if (!e.isUTS)
      throw new m("mk-162", m.Reason.INVALID_ARGUMENTS, { description: "MediaItem is not an UTS item", data: e });
    const r = e.attributes?.assets;
    if (r === void 0)
      throw new m("mk-163", m.Reason.INVALID_ARGUMENTS, { description: "Missing UTS asset data", data: e });
    const s = ve.register("mk-hlsjs-interstitial-playback"),
      n = { webbrowser: !0 };
    s.enabled && (n.supportsInterstitials = !0);
    const a = Mr(e.assetURL, n);
    e.assetURL = a;
    const o = await Mb(e, {
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
      preview: !1,
    };
  }
  async isMediaAPIContentType(e, t) {
    return Qc.includes(e.type);
  }
  assetContentType(e) {
    return $p(e) ? "audio" : "video";
  }
  async isPlayable(e, t) {
    return e.isUTS
      ? !0
      : (await this.isMediaAPIContentType(e, t))
        ? e.isLiveRadioStation || e.isRadioEpisode || e.hasOffersHlsUrl
          ? !0
          : ["song", "musicVideo", "musicMovie"].includes(e.type)
            ? e.playParams !== void 0
            : !q(e.rawAssetUrl ?? "") || !q(e.previewURL ?? "")
        : !1;
  }
  async shouldPlayPreview(e, t) {
    return e.isLiveRadioStation ||
      e.isRadioEpisode ||
      e.isLiveVideoStation ||
      e.rawAssetUrl ||
      (e.isPodcastEpisode && cr(e) && e.hasOffersHlsUrl) ||
      e.isUTS ||
      e.isLibraryItem
      ? !1
      : t?.previewOnly === !0 || !(await this.isPlayable(e))
        ? !0
        : q(e.rawAssetUrl ?? "")
          ? t?.subscription !== !0
            ? !0
            : e.playParams?.hasDrm === !1
              ? !1
              : !this.services.runtime.isDRMAvailable && !q(e.previewURL ?? "")
          : !1;
  }
  async assertSubscription(e, t) {
    if (this.services.mediaAPI.mediaUserToken === void 0)
      throw new m("mk-159", m.Reason.AUTHORIZATION_ERROR, { description: "Authorization required", data: e });
    if (!(e.isPodcastEpisode && cr(e) && e.hasOffersHlsUrl) && t?.subscription !== !0)
      throw new m("mk-149", m.Reason.SUBSCRIPTION_ERROR, { description: "Subscription required for content", data: e });
  }
}
const Kb = T.createChild("license");
class ha {
  isConfigured = !0;
  logger = Kb;
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
    if (this.developerToken === void 0 || q(this.developerToken))
      throw new m("mk-175", m.Reason.CONTENT_RESTRICTED, {
        description: "No developer token configured for resolving playback licenses",
      });
  }
  assertUserToken() {
    if (this.mediaUserToken === void 0 || q(this.mediaUserToken))
      throw new m("mk-176", m.Reason.CONTENT_RESTRICTED, {
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
        new m("mk-174", m.Reason.MEDIA_LICENSE, { data: { url: e, keyuri: t }, origin: n })
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
      r = wc(t) || m.Reason.MEDIA_LICENSE,
      s = e?.dialog,
      n = e?.message ?? e?.customerMessage ?? e?.errorMessage ?? r;
    throw s !== void 0
      ? new Lr({ ...e, status: t, message: n, dialog: s })
      : new m("mk-183", r, { description: n, data: { status: t, message: n, context: e } });
  }
}
class Vb extends ha {
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
      throw new m("mk-179", m.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: n },
      });
    if (a.status !== 0)
      throw new m("mk-184", m.Reason.SERVER_ERROR, {
        description: `License server responded with code '${a.status ?? "unknown"}'`,
        data: { body: n },
      });
    return a;
  }
  async revokeLicense(e, t, r) {}
  createChallengeBody(e, t, r) {
    const s = (this.lastKeyId += 1),
      n = typeof t.licenseChallenge == "string" ? t.licenseChallenge : it(t.licenseChallenge);
    return {
      version: 1,
      "license-requests": [
        { id: s, "adam-id": e.catalogId ?? e.id, challenge: n, uri: t.keyuri, "key-system": this.keySystemId },
      ],
    };
  }
}
class Bb extends ha {
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
      throw new m("mk-180", m.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: n },
      });
    if (a.status !== 0)
      throw new Lr({ status: a.status, dialog: { message: "Error acquiring license" } }, m.Reason.MEDIA_LICENSE);
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
      n = typeof t.licenseChallenge == "string" ? t.licenseChallenge : it(t.licenseChallenge);
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
class $b extends ha {
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
    const s = typeof t.licenseChallenge == "string" ? t.licenseChallenge : it(t.licenseChallenge);
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
class Hb {
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
      throw new m("mk-177", m.Reason.MEDIA_LICENSE, { description: `Unable to request license for ${e}` });
    return s.requestLicense(e, t, r);
  }
  async revokeLicense(e, t, r) {
    const s = await this.findManager(e, t, r);
    if (s === void 0)
      throw new m("mk-178", m.Reason.MEDIA_LICENSE, { description: `Unable to revoke license for ${e}` });
    return s.revokeLicense(e, t, r);
  }
  async findManager(e, t, r) {
    for (const s of this.children) if (await s.isCompatible(e, t, r)) return s;
  }
}
function jb(i) {
  const e = i.configurations,
    { runtime: t, request: r, dispatcher: s, store: n } = i.services,
    a = new Ib({ ...e.mediaAPIClient, services: { request: r } }),
    o = new Rb({ ...e.mediaAPIAccess, services: { mediaAPI: a } }),
    c = new wb({ ...e.manifestManager, services: { request: r } }),
    l = { streaming: Bb, batch: Vb, web: $b },
    h = (e.licenseManager.include ?? ["streaming", "batch", "web"]).map(function (mt) {
      return new l[mt]({
        services: { runtime: t, request: r },
        developerToken: e.licenseManager.developerToken,
        mediaUserToken: e.licenseManager.mediaUserToken,
      });
    }),
    f = new Hb({
      services: { runtime: t, request: r },
      developerToken: e.licenseManager.developerToken,
      mediaUserToken: e.licenseManager.mediaUserToken,
      managers: h,
    }),
    y = new Fb({ ...e.assetResolver, services: { runtime: t, request: r, mediaAPI: a, manifest: c } }),
    k = new Bv(),
    W = new Vv(s, e.bitrateCalculator?.bitrate),
    ce = new jv({ services: { runtime: t } }),
    te = new eb({ ...e.itemLoader, services: { mediaAPI: a } }),
    Pe = new Yr({ services: { dispatcher: s }, trackers: e.playActivity?.trackers ?? [] }),
    ai = new Gr({
      services: {
        runtime: t,
        request: r,
        dispatcher: s,
        store: n,
        player: ce,
        manifest: c,
        assetResolver: y,
        bitrateCalculator: W,
        timing: k,
      },
      playerOptions: qb({
        services: {
          runtime: t,
          request: r,
          dispatcher: s,
          manifest: c,
          license: f,
          bitrateCalculator: W,
          timing: k,
          playActivity: Pe,
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
    playActivity: Pe,
    itemLoader: te,
    manifest: c,
    license: f,
    assetResolver: y,
    player: ce,
    mediaItemPlayback: ai,
    timing: k,
    bitrateCalculator: W,
  };
}
function oc(i, e) {
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
function qb(i) {
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
      timing: e.timing,
    },
    playbackServices: {
      getRTCStreamingTracker: () => e.playActivity.getTrackerByType(tu),
      hasMusicSubscription: async function () {
        return e.store?.storekit?.hasMusicSubscription() ?? !1;
      },
    },
  };
}
var Wb = Object.defineProperty,
  Yb = Object.getOwnPropertyDescriptor,
  ri = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? Yb(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && Wb(e, t, s), s);
  };
const Gb = [
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
  zb = xr.register("mk-bag-features-overrides");
class Lt {
  app;
  capabilities;
  context = {};
  _playbackMode = Be.MIXED_CONTENT;
  _autoplayEnabled = !1;
  id;
  prefix;
  privateEnabled = !1;
  siriInitiated = !1;
  sourceType = Ys.MUSICKIT;
  get version() {
    return Ml();
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
    ((this.id = Nr()), Xm(e.app));
    const { developerToken: t } = e;
    if (typeof t != "string" || t.trim() === "")
      throw new p(p.Reason.CONFIGURATION_ERROR, "Missing or empty developer token");
    Object.assign(j.features, eh(e.features));
    const r = zb.get();
    (r && (N.warn("Overriding bag.features with", r), (j.features = { ...j.features, ...r })),
      Object.assign(j.autoplay, e.autoplay),
      Object.assign(j.app, e.app),
      Object.assign(j.urls, e.urls),
      N.debug("Instance Configuration: ", j));
    const s = ["playbackActions", "guid", "playbackMode", "privateEnabled", "siriInitiated", "sourceType"];
    for (const l of s) l in e && (je(this, `_${l}`) ? (this[`_${l}`] = e[l]) : (this[l] = e[l]));
    ("prefix" in e && /^(?:web|preview)$/.test(e.prefix || "") && (this.prefix = j.prefix = e.prefix),
      this.configureLogger(e));
    const n = Mg(t, e);
    let a = "amp-api.music.apple.com",
      o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/acquireWebPlaybackLicense",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      };
    this.realm === ae.PODCAST &&
      ((a = "amp-api.podcasts.apple.com"),
      (o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      }));
    let c = !1;
    if (
      (this.realm === ae.TV && (c = !0),
      (this.services = jb({
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
            mzplayAssetEndpoint: `https://${Ci("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
          },
          bitrateCalculator: { bitrate: e.bitrate },
          playActivity: { trackers: e.playActivityAPI },
          mediaItemPlayback: {
            bag: j,
            tokens: I,
            context: this.context,
            autoplayEnabled: this.autoplayEnabled,
            privateEnabled: this.privateEnabled,
            siriInitiated: this.siriInitiated,
            playbackMode: this.playbackMode,
          },
        },
      })),
      (this.capabilities = new Cv(this.services.dispatcher)),
      this._initializeInternalEventHandling(),
      N.info(`MusicKit JS Version: ${this.version}`),
      N.info("InstanceId", this.id),
      N.debug("Link Parameters", e.linkParameters),
      j.app && N.debug("App", j.app),
      e.userToken)
    ) {
      const { userToken: l } = e;
      typeof l == "function" ? (I.dynamicMusicUserToken = l) : (this.musicUserToken = l);
    }
  }
  setOptions(e) {}
  get developerToken() {
    return I.developerToken;
  }
  get api() {
    return this.services.mediaAPIAccess;
  }
  get audioTracks() {
    return this._mediaItemPlayback.audioTracks;
  }
  get authorizationStatus() {
    return I.authorizationStatus;
  }
  get bitrate() {
    return this.services.bitrateCalculator.bitrate;
  }
  set bitrate(e) {
    this.services.bitrateCalculator.bitrate = e;
  }
  get browserSupportsPictureInPicture() {
    return Oc();
  }
  get browserSupportsVideoDrm() {
    return this.services.runtime.isDRMAvailable;
  }
  get cid() {
    return this.realm === ae.TV || this.sourceType !== Ys.MUSICKIT ? I.cid : !1;
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
    (this.realm !== ae.MUSIC && (e = !1),
      e !== this.autoplayEnabled &&
        ((this._autoplayEnabled = e),
        this.services.dispatcher.publish(b.autoplayEnabledDidChange, this.autoplayEnabled)));
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
    return I.isAuthorized;
  }
  get isPlaying() {
    return this._playbackController?.isPlaying ?? !1;
  }
  get isRestricted() {
    return I.isRestricted;
  }
  get isU13() {
    return I.isU13;
  }
  get metricsClientId() {
    return I.metricsClientId;
  }
  set metricsClientId(e) {
    I.metricsClientId = e;
  }
  get musicUserToken() {
    return I.musicUserToken;
  }
  set musicUserToken(e) {
    (e && I.musicUserToken === e) || (I.musicUserToken = e);
  }
  updateUserTokenFromStorage(e) {
    return I.updateUserTokenFromStorage(e);
  }
  get needsGDPR() {
    return I.needsGDPR;
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
    if (Object.values(Be).indexOf(e) === -1) return;
    const t = e === Be.PREVIEW_ONLY,
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
    return this.playbackMode === Be.PREVIEW_ONLY;
  }
  set previewOnly(e) {
    this.playbackMode = e ? Be.PREVIEW_ONLY : Be.MIXED_CONTENT;
  }
  get queue() {
    return this._playbackController?.queue;
  }
  get queueIsEmpty() {
    return this._playbackController?.queue?.isEmpty ?? !0;
  }
  get realm() {
    return I.realm;
  }
  get repeatMode() {
    return this._playbackController?.repeatMode ?? we.none;
  }
  set repeatMode(e) {
    this.getPlaybackController().repeatMode = e;
  }
  set requestUserToken(e) {
    I.requestUserToken = e;
  }
  get restrictedEnabled() {
    return I.restrictedEnabled;
  }
  set restrictedEnabled(e) {
    I.restrictedEnabled = e;
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
    return this._playbackController?.shuffleMode ?? ta.off;
  }
  set shuffleMode(e) {
    this.getPlaybackController().shuffleMode = e;
  }
  get storefrontCountryCode() {
    return I.storefrontCountryCode;
  }
  get subscribeURL() {
    return I.subscribeURL;
  }
  get subscribeFamilyURL() {
    return I.subscribeFamilyURL;
  }
  get subscribeIndividualURL() {
    return I.subscribeIndividualURL;
  }
  get subscribeStudentURL() {
    return I.subscribeStudentURL;
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
    return I.storefrontId;
  }
  set storefrontId(e) {
    I.storefrontId = e;
  }
  get _mediaItemPlayback() {
    return this.services.mediaItemPlayback;
  }
  getPlaybackController() {
    if ((N.trace("MKInstance.getPlaybackController()", this._playbackController), this._playbackController === void 0))
      throw new p(p.Reason.INTERNAL_ERROR, "No PlaybackController active");
    return this._playbackController;
  }
  async setPlaybackController(e) {
    return (
      N.trace("MKInstance.setPlaybackController()", e),
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
    return Fv(this.services.dispatcher, e, t, r);
  }
  async authorize() {
    return (this.deferPlayback(), I.authorize());
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
    (N.debug("instance.changeToMediaItem", e),
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
      N.error("Error cleaning up controller", t);
    }
    this.services.dispatcher.unsubscribeAll();
  }
  async configure(e) {
    await this.setPlaybackController(this.getPlaybackControllerByType(ht.serial));
    const { promise: t, resolve: r } = Wc();
    ((this._whenConfigured = t),
      await I.storekit.whenAuthCompleted,
      e?.storefrontId !== void 0 && (this.storefrontId = e.storefrontId),
      e?.utsAPIClient !== void 0 && (this.services.utsAPIClient = e.utsAPIClient),
      await this.configurePlayActivity(),
      this._initializeExternalEventPublishing(),
      r());
  }
  deferPlayback() {
    (N.debug("deferPlayback", this._playbackController), Lf());
  }
  async me() {
    try {
      return await I.storekit.me();
    } catch {
      return Promise.reject(new p(p.Reason.AUTHORIZATION_ERROR, "Unauthorized"));
    }
  }
  musicSubscriptionOffers() {
    return I.storekit.musicSubscriptionOffers(this.storefrontId);
  }
  musicSubcriptionOffers() {
    return (
      Mc("musicSubcriptionOffers", {
        message: "musicSubcriptionOffers has been deprecated, use musicSubscriptionOffers instead",
      }),
      this.musicSubscriptionOffers()
    );
  }
  hasMusicSubscription() {
    return Fg(I.storekit);
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
    if ((N.debug("instance.play()"), !!this._isPlaybackSupported())) {
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
      (N.trace("MKInstance.playMediaItem()", e, t),
      t?.bingeWatching || this.deferPlayback(),
      (t = { ...t }),
      e?.playEvent && !je(t, "startTime"))
    ) {
      const { playEvent: r } = e;
      !r.isDone && r.playCursorInSeconds !== void 0 && (t.startTime = r.playCursorInSeconds);
    }
    this.services.dispatcher.publish(b.playInitiated, { item: e, timestamp: t.meta?.initiatedTimestamp ?? Date.now() });
    try {
      t && this._mediaItemPlayback.playOptions.set(e.id, t);
      const r = await this.getPlaybackController().playSingleMediaItem(e, t);
      return (this.services.dispatcher.publish(b.capabilitiesChanged), r);
    } catch (r) {
      (N.error("mk:playMediaItem error", r), this._handlePlaybackError(r));
    }
  }
  removeEventListener(e, t) {
    Jl(this.services.dispatcher, e, t);
  }
  async shouldDisplayPrivacyLink(e) {
    return I.shouldDisplayPrivacyLink(e);
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
  async seekToTime(e, t = ye.Manual) {
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
  async seekForward() {
    if (this._isPlaybackSupported()) {
      await this.validateAuthorization();
      try {
        (this.signalIntent({ endReasonType: P.TRACK_SKIPPED_FORWARDS, direction: P.TRACK_SKIPPED_FORWARDS }),
          await this.getPlaybackController().seekForward());
      } catch (e) {
        this._handlePlaybackError(e);
      }
    }
  }
  async seekBackward() {
    if (this._isPlaybackSupported()) {
      await this.validateAuthorization();
      try {
        await this.getPlaybackController().seekBackward();
      } catch (e) {
        this._handlePlaybackError(e);
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
    I.storekit.resetSubscribeViewEligibility();
  }
  async unauthorize() {
    return I.unauthorize();
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
          store: I,
          itemLoader: r.itemLoader,
          manifest: r.manifest,
          mediaItemPlayback: r.mediaItemPlayback,
          playActivity: r.playActivity,
        },
        playbackMode: this.playbackMode,
      };
    switch (e) {
      case ht.serial: {
        t = new ii(s);
        break;
      }
      case ht.continuous: {
        t = new sa(s);
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
      ? this.getPlaybackControllerByType(ht.continuous)
      : this.getPlaybackControllerByType(ht.serial);
  }
  _handlePlaybackError(e) {
    if ((N.error("mediaPlaybackError", e), p.isMKError(e) && Gb.includes(e.reason))) throw e;
  }
  _initializeInternalEventHandling() {
    const e = this.services;
    (I.storekit.addEventListener(b.userTokenDidChange, ({ userToken: t }) => {
      (this._whenConfigured && this._whenConfigured.then(() => this.configurePlayActivity().catch()).catch(),
        N.debug(`Updating services with mediaUserToken: ${this.musicUserToken}`),
        oc(e, { mediaUserToken: t }));
    }),
      e.dispatcher.subscribe(S.apiStorefrontChanged, function (t, { storefrontId: r }) {
        (N.debug(`Updating services with storefrontId: ${r}`), oc(e, { storefrontId: r }));
      }),
      e.dispatcher.subscribe(b.mediaPlaybackError, (t, r) => this._handlePlaybackError(r)),
      e.dispatcher.subscribe(b.playbackVolumeDidChange, (t, r) => {
        const s = r?.target;
        (s?.muted || s?.volume) && (this.volume = s?.muted ? 0 : s?.volume);
      }),
      e.dispatcher.subscribe(b.playbackStateDidChange, (t, r) => {
        r.state === U.paused &&
          (N.debug("mk: playbackStateDidChange callback - calling storekit.presentSubscribeViewForEligibleUsers"),
          I.storekit.presentSubscribeViewForEligibleUsers({ state: r.state, item: this.nowPlayingItem }, !1));
      }),
      e.dispatcher.subscribe(
        Ce.bufferTimedMetadataDidChange,
        (t, { metadata: r, item: s, position: n, playingDate: a }) => {
          if (r.blob) {
            const o = {
              item: s ?? this.nowPlayingItem,
              position: n ?? this.currentPlaybackTime,
              playingDate: a ?? this.currentPlayingDate,
              storefrontId: this.storefrontId.toUpperCase(),
              metadata: r,
            };
            (N.debug('Dispatching TimedMetadata "ping"', o), e.dispatcher.publish(S.timedMetadata, o));
          }
        },
      ));
  }
  _initializeExternalEventPublishing() {
    ([
      b.authorizationStatusDidChange,
      b.authReflectionDidComplete,
      b.needsGDPRDidChange,
      b.storefrontCountryCodeDidChange,
      b.storefrontIdentifierDidChange,
      b.userTokenDidChange,
      b.eligibleForSubscribeView,
    ].forEach((e) => {
      I.storekit.addEventListener(e, (t) => this.services.dispatcher.publish(e, t));
    }),
      this.services.dispatcher.subscribe(Ce.bufferTimedMetadataDidChange, (e, { metadata: t }) => {
        (N.debug("Dispatching TimedMetadata change", t), this.services.dispatcher.publish(b.timedMetadataDidChange, t));
      }));
  }
  configureLogger(e) {
    (Cg() || (e.debug === !0 ? Do(ie.DEBUG) : e.logLevel !== void 0 && Do(e.logLevel)),
      At.enabled && un(At.enabled),
      qt.value !== void 0 && Kl(qt.value),
      e.logHandler !== void 0 && Og(e.logHandler));
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
      ? (N.warn("Media playback is not supported in Node environments."), !1)
      : !0;
  }
  signalChangeItemIntent() {
    this.signalIntent({ endReasonType: P.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM });
  }
  signalIntent(e) {
    this.services.dispatcher.publish(S.userActivityIntent, { userInitiated: !0, ...e });
  }
  async validateAuthorization(e = !1) {
    (!e && this.playbackMode !== Be.FULL_PLAYBACK_ONLY) ||
      ((this._playbackController === void 0 ||
        !this._playbackController.isReady ||
        !this._playbackController.isPlaying) &&
        (await this.authorize()));
  }
}
ri([Jt(250, { isImmediate: !0 })], Lt.prototype, "pause", 1);
ri([Jt(250, { isImmediate: !0 })], Lt.prototype, "play", 1);
ri([Fr("skip")], Lt.prototype, "skipToNextItem", 1);
ri([Fr("skip")], Lt.prototype, "skipToPreviousItem", 1);
ri([Fr("seek")], Lt.prototype, "seekForward", 1);
ri([Fr("seek")], Lt.prototype, "seekBackward", 1);
function tS() {
  function i(a) {
    return Xt() ? void 0 : document.head.querySelector(`meta[name=${a}]`)?.content || void 0;
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
function pa(i) {
  if (Xt()) return;
  const e = new Event(i, { bubbles: !0, cancelable: !0 });
  setTimeout(() => document.dispatchEvent(e));
}
async function Qb() {
  if (Xt()) return;
  const i = zn("musickit.js");
  if (i?.dataset?.webComponents !== "") return;
  const e = "noModule" in i,
    t = `components/musickit-components/musickit-components${e ? ".esm" : ""}.js`,
    r = "https:" + Dl(t) + t,
    s = {};
  (e && (s.type = "module"),
    i.hasAttribute("async") && (s.async = ""),
    i.hasAttribute("defer") && (s.defer = ""),
    await Wr(r, s),
    pa(b.webComponentsLoaded));
}
function Xb(i) {
  return i === "*";
}
function Jb(i) {
  return i === "**";
}
function Zb(i) {
  return /^\{[^}]*\}$/i.test(i);
}
function _s(i) {
  return i instanceof RegExp ? i.toString() : String(i);
}
function eT(i) {
  return i instanceof RegExp || i.indexOf("*") !== -1 || (i.indexOf("{") !== -1 && i.indexOf("}") !== -1);
}
function ou(i, e) {
  return function (r) {
    return i.test(r);
  };
}
function tT(i) {
  return (
    "escape" in RegExp && typeof RegExp.escape == "function"
      ? RegExp.escape
      : (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )(i);
}
function iT(i, e) {
  const t = tT(e),
    s = i.split(e).reduce(function (n, a, o) {
      const c = o > 0 ? t : "";
      if (Xb(a)) return n + c + `[^${t}]+`;
      if (Jb(a)) return n + ".*";
      if (Zb(a)) {
        const l = a
          .slice(1, -1)
          .split(",")
          .map((h) => h.trim())
          .filter((h) => h.length > 0);
        return l.length <= 0 ? n + c + `[^${t}]+` : n + c + `(?:${l.join("|")})`;
      }
      return n + c + a;
    }, "");
  return ou(new RegExp(s, ""));
}
function rT(i, e) {
  return function (r) {
    return r === i;
  };
}
function sT(i, e) {
  return i instanceof RegExp ? ou(i) : eT(i) ? iT(i, e) : rT(i);
}
class nT {
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
      const s = _s(r);
      if (!this.subscriptions.has(s)) {
        const a = sT(r, this.topicSeparator);
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
    const r = _s(e),
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
      const t = _s(e);
      this.subscriptions.delete(t);
    }
  }
}
const cu = typeof window < "u" && typeof document < "u";
let lu = !1;
const Je = [];
async function aT() {
  const i = Je.map((e) => e.cleanup());
  (await Promise.all(i), Je.splice(0, Je.length));
}
function iS() {
  lu = !0;
}
async function rS(i, e = Lt, t) {
  if (!i) throw new p(p.Reason.INVALID_ARGUMENTS, "configuration required");
  const r = { ...i };
  r.mergeQueryParams &&
    cu &&
    window.location &&
    (r.linkParameters = { ...(i.linkParameters || {}), ...wd(window.location.href) });
  const s = new e({
    ...r,
    services: { runtime: await Dh.detect(), dispatcher: new nT(), request: new Fh(), ...i.services },
  });
  return (lu || (await aT()), t && (await t(s)), Je.push(s), pa(b.configured), s);
}
function sS() {
  return Je;
}
function oT(i) {
  if (Je.length !== 0) return typeof i > "u" ? Je[Je.length - 1] : Je.find((e) => e.id === i);
}
cu && (Xe(Qb()), pa(b.loaded));
const cT = [
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
function nS(i) {
  return i?.isUTS || cT.includes(i?.type) ? "video" : (i?.attributes?.mediaKind ?? "audio");
}
const mn = "com.apple.tv";
class uu {
  appBundleIds;
  dispatcher;
  item;
  itemTiming;
  instance;
  npPlay;
  playable;
  pldfltcid;
  utsClient;
  watcher;
  _isDestroyed = !1;
  get isDestroyed() {
    return this._isDestroyed;
  }
  constructor(e, t, r, s, n, a, o) {
    ((this.dispatcher = e),
      (this.item = r),
      (this.instance = t),
      (this.npPlay = o),
      (this.playable = s),
      (this.pldfltcid = n),
      (this.utsClient = a),
      (this.appBundleIds = this.getAppBundleIds(s, r)),
      (this.itemTiming = fg(r)));
  }
  destroy() {
    ((this._isDestroyed = !0), this.watcher?.stopMonitor(), (this.watcher = void 0));
  }
  async trackActivity(e, t) {
    return Promise.resolve();
  }
  getAppBundleIds(e, t) {
    const r = t?.channels;
    return !Array.isArray(r) || e?.channelId === void 0
      ? void 0
      : (r.find((n) => n.id === e.channelId)?.appBundleIds?.[0] ?? void 0);
  }
  determineRelativePosition(e, t) {
    return e <= t.mainContentStarts ? 0 : e >= t.mainContentEnds ? t.mainContentEnds : e - t.mainContentStarts;
  }
}
var lT = Object.defineProperty,
  uT = Object.getOwnPropertyDescriptor,
  du = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? uT(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && lT(e, t, s), s);
  };
class hu extends uu {
  playMetadataLive;
  scheduleItems = [];
  async init() {
    const { playable: e } = this,
      t = await this.utsClient?.request("getContentsPlayMetadataLive", {
        brandId: e.channelId,
        externalServiceId: e.externalServiceId,
      });
    ((this.playMetadataLive = t?.data ?? t), this.resetListening());
  }
  destroy() {
    this.unsubscribe();
  }
  async trackActivity(e, t) {
    (e === "scrub" || e === "seek") && this.resetListening();
  }
  handleTimeChange() {
    const { scheduleItems: e } = this,
      t = this.instance.currentPlayingDate?.getTime() ?? 0;
    if (!(t === 0 || !e)) {
      for (let r = 0; r < e.length; r++) {
        const s = e[r],
          n = s.eventTime.liveBadgeTime.startTime,
          a = s.eventTime.liveBadgeTime.endTime;
        if (t >= n && t <= a) (e.splice(r, 1), (r -= 1), this.onLiveEvent(s));
        else if (t > n) (e.splice(r, 1), (r -= 1));
        else if (t < n) return;
      }
      e.length === 0 && this.unsubscribe();
    }
  }
  async onLiveEvent(e) {
    const t = this.pldfltcid,
      { appBundleIds: r, playable: s, utsClient: n } = this;
    if (!t || !n || !s) return;
    const a = this.generateEventStartEvent(e);
    await this.npPlay?.send("live", a, t, r ?? mn);
  }
  generateEventStartEvent(e) {
    return { bundleId: mn, millisecondsSinceEvent: 0, cause: "Event_Start", passThrough: e?.nowPlayingPassThrough };
  }
  resetListening() {
    const e = this.playMetadataLive?.schedule;
    e && e.length && ((this.scheduleItems = [...e]), this.unsubscribe(), this.subscribe());
  }
  subscribe() {
    this.dispatcher.subscribe(b.playbackTimeDidChange, this.handleTimeChange);
  }
  unsubscribe() {
    this.dispatcher.unsubscribe(b.playbackTimeDidChange, this.handleTimeChange);
  }
}
du([_()], hu.prototype, "handleTimeChange", 1);
du([_()], hu.prototype, "onLiveEvent", 1);
var dT = Object.defineProperty,
  hT = Object.getOwnPropertyDescriptor,
  pT = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? hT(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && dT(e, t, s), s);
  };
const fT = new Set(["exit", "pause", "play", "scrub", "seek", "skip", "stop"]),
  ir = T.createChild("bookmark");
class yT extends uu {
  metadata;
  cachedDuration;
  get currentPlaybackDuration() {
    let e = Math.round(this.instance.currentPlaybackDuration ?? 0);
    return ((isNaN(e) || e === 0) && this.cachedDuration && (e = Math.round(this.cachedDuration)), e);
  }
  get hasPlaybackDuration() {
    const e = this.currentPlaybackDuration;
    return !isNaN(e) && e > 0;
  }
  get metadataPending() {
    return this.metadata === void 0;
  }
  async init() {
    const { item: e } = this;
    if (ln(e)) {
      const t = Sg(e);
      this.setupVodWatcher(t, Number.POSITIVE_INFINITY);
    }
    this.metadata = void 0;
  }
  async fetchAndSetMetadata() {
    const { playable: e, utsClient: t } = this,
      r = this.currentPlaybackDuration;
    if (!this.hasPlaybackDuration) {
      ir.info("fetchAndSetMetadata - can not fetch metadata due to missing duration");
      return;
    }
    const s = {
        externalId: e.externalId,
        brandId: e.channelId,
        hlsAssetDuration: r,
        playablePassThrough: e.playablePassThrough,
      },
      n = await t?.request("getContentsPlayMetadataVOD", s);
    this.metadata = n?.data ?? n;
  }
  setupVodWatcher(e, t) {
    ((this.watcher = new Li(this.dispatcher, this.onContentCompletionThreshhold, e, t, !0)),
      this.watcher.startMonitor());
  }
  async onContentCompletionThreshhold(e) {
    (await this.trackActivity("exit", e), this.dispatcher.publish(S.mediaContentComplete, this.item));
  }
  async trackActivity(e, t) {
    (ir.info(`trackActivity called - eventType: ${e}, position: ${t}`),
      this.hasPlaybackDuration && (this.cachedDuration = this.instance.currentPlaybackDuration),
      this.metadataPending && this.hasPlaybackDuration && (await this.fetchAndSetMetadata()));
    let { itemTiming: r } = this;
    const { appBundleIds: s, metadata: n, playable: a, pldfltcid: o } = this;
    if (!n || !a || !r || !fT.has(e)) {
      ir.info("trackActivity - cannot track event due to missing data");
      return;
    }
    if (e === "stop") {
      const h = r.totalContentLength;
      if (!this.item?.isLinearStream && h !== void 0 && t !== void 0) {
        const f = h - t;
        f >= 0 && f < 5 && (t = h + 0.5);
      }
    }
    const c = this.currentPlaybackDuration;
    ((isNaN(r.totalContentLength) || (c && c < r.totalContentLength)) &&
      this.hasPlaybackDuration &&
      (this.itemTiming = r = { ...r, mainContentEnds: c, mainContentLength: c, totalContentLength: c }),
      ir.info(`Bookmarking VOD progress at ${t}/${r.mainContentLength}`));
    const l = this.generateVodEvent(a, n, r, t);
    await this.npPlay?.send("vod", l, o, s ?? mn);
  }
  generateVodEvent(e, t, r, s) {
    return {
      playHeadInMilliseconds: Math.floor(s * 1e3),
      mediaLengthInMilliseconds: Math.floor(r.totalContentLength * 1e3),
      mainContentInfo: {
        isDone: s >= r.mainContentEnds ? "Done" : "Not_Done",
        playHeadInMilliseconds: Math.floor(this.determineRelativePosition(s, r) * 1e3),
        lengthInMilliseconds: Math.floor(r.mainContentLength * 1e3),
        passThrough: this.metadata?.nowPlayingPassThrough ?? "",
      },
    };
  }
}
pT([_()], yT.prototype, "onContentCompletionThreshhold", 1);
(S.playbackPlay, S.playbackPause, S.playbackScrub, S.playbackSeek, S.playbackSkip, S.playbackStop, S.playerExit);
T.createChild("bookmark");
var fa = { setDelegate: !0 };
function mT() {
  fa = { setDelegate: !0 };
}
function gT(i) {
  var e = {},
    t = vu(i),
    r,
    s;
  for (var n in i)
    ((r = null),
      (s = null),
      t && ((r = i.__lookupGetter__(n)), (s = i.__lookupSetter__(n))),
      r || s ? (r && e.__defineGetter__(n, r), s && e.__defineSetter__(n, s)) : (e[n] = i[n]));
  return e;
}
function vi(i) {
  return typeof i < "u";
}
function Pi(i) {
  return vi(i) && i !== null;
}
function vT(i) {
  return Pi(i) && !pu(i) && !fu(i) && !yu(i);
}
function pu(i) {
  return gu(i) && i.length === 0;
}
function fu(i) {
  return ya(i) && i.length === 0;
}
function yu(i) {
  return zr(i) && Object.keys(i).length === 0;
}
function se(i) {
  return typeof i == "function";
}
function Ai(i) {
  return typeof i == "number";
}
function mu(i) {
  return Ai(i) && i % 1 === 0;
}
function gu(i) {
  return typeof i == "string" || i instanceof String;
}
function bT(i) {
  return !!i && i.nodeType == 1;
}
function ya(i) {
  return !!i && i.constructor === Array;
}
function zr(i) {
  return !!i && i.constructor === Object;
}
function TT(i) {
  var e = [];
  for (var t in i) {
    var r = i[t];
    i.hasOwnProperty(t) && !se(r) && e.push(r);
  }
  return e;
}
function _T(i) {
  var e = [];
  for (var t in i) i.hasOwnProperty(t) && !se(i[t]) && e.push(t);
  return e;
}
function ET(i) {
  for (var e in i) if (i.hasOwnProperty(e)) return !0;
}
function ST(i) {
  for (var e in i) if (i.hasOwnProperty(e) && i[e]) return !0;
}
function vu(i) {
  return zr(i) && se(i.__lookupGetter__) && se(i.__lookupSetter__) && se(i.__defineGetter__) && se(i.__defineSetter__);
}
function kT(i) {
  var e = [];
  for (var t in i) {
    var r = i[t];
    i.hasOwnProperty(t) && se(r) && e.push(r);
  }
  return e;
}
function IT(i) {
  var e = {};
  for (var t in i) i.hasOwnProperty(t) && !se(i[t]) && (e[i[t]] = t);
  return e;
}
function bu(i) {
  var e = [!0, !0, !0].concat(Array.prototype.slice.call(arguments));
  return ma.apply(null, e);
}
function ma(i, e, t, r) {
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
function PT(i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    fa[t] = !0;
  }
}
function AT(i, e, t) {
  var r = !1;
  if (((t = t || !1), i && e && i !== e)) {
    var s = {};
    (Object.keys(e).forEach(function (n) {
      i[n] || (s[n] = !0);
    }),
      bu(s, fa),
      (r = Tu(i, e, t ? i : null, s)));
  }
  return r;
}
function Tu(i, e, t, r) {
  var s = !1;
  if (i && e) {
    ((r = r || {}), (t = t || e));
    var n = function (f, y, k, W, ce) {
      var te = function () {
        return k[ce].apply(f, arguments);
      };
      return (y && (te.origFunction = y), (te.attachedMethod = !0), te);
    };
    for (var a in e)
      if (!(a in r) && e[a] && se(e[a])) {
        var o = i[a],
          c = o && se(o),
          l = null;
        (c && (o.attachedMethod === !0 ? (l = o) : (l = o.bind(i))), (i[a] = n(t, l, e, i, a)), (s = !0));
      }
  }
  return s;
}
function _u(i) {
  var e = !1;
  for (var t in i)
    if (se(i[t]) && i[t].attachedMethod === !0) {
      var r = i[t].origFunction;
      if (r) for (; i[t].origFunction;) ((i[t] = i[t].origFunction), (e = !0));
      else delete i[t];
    }
  return e;
}
function wT(i, e) {
  var t = {};
  for (var r in i)
    e[r] &&
      se(i[r].setDelegate) &&
      (t[r] = i[r].setDelegate.apply(i[r], [e[r]].concat(Array.prototype.slice.call(arguments, 2))));
  return t;
}
var RT = function (e) {
  var t = !1;
  for (var r in e) {
    var s = e[r];
    s && typeof s == "object" && se(s.setDelegate) && (t |= _u(s));
  }
  return !!t;
};
function CT(i, e) {
  var t = null;
  if (i && e && e.setDelegate) {
    var r = {},
      s;
    for (s in i) se(i[s]) && i[s].origFunction && (r[s] = i[s]);
    t = e.setDelegate(r);
  }
  return t;
}
function OT(i, e) {
  var t = {};
  if (i) for (var r = 0; r < i.length; r++) t[i[r]] = 0;
  if (e) for (var s = 0; s < e.length; s++) t[e[s]] = 0;
  return Object.keys(t);
}
function ga() {
  return typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : {};
}
var d = Object.freeze({
    __proto__: null,
    _utResetNonOverridableFunctions: mT,
    shallowClone: gT,
    isDefined: vi,
    isDefinedNonNull: Pi,
    isDefinedNonNullNonEmpty: vT,
    isEmptyString: pu,
    isEmptyArray: fu,
    isEmptyObject: yu,
    isFunction: se,
    isNumber: Ai,
    isInteger: mu,
    isString: gu,
    isElement: bT,
    isArray: ya,
    isObject: zr,
    values: TT,
    keys: _T,
    hasAnyKeys: ET,
    hasAnyNonNullKeys: ST,
    hasGetterAndSetterMethods: vu,
    methods: kT,
    invert: IT,
    extend: bu,
    copyKeysAndValues: ma,
    addNonOverrideableFunctions: PT,
    attachMethods: Tu,
    detachMethods: _u,
    attachDelegate: AT,
    setDelegates: wT,
    resetDelegates: RT,
    copyDelegatedFunctions: CT,
    dedupedArray: OT,
    globalScope: ga,
  }),
  Es = { exponential: { maxWait: 1500, initialDelay: 100, factor: 2 } },
  Eu = function (i, e, t) {
    ((this.delay = i || Es.exponential.initialDelay),
      (this.maxWait = Ai(e) ? e : Es.exponential.maxWait),
      (this.factor = t || Es.exponential.factor),
      (this.timeWaited = 0));
  };
Eu.prototype.nextDelay = function () {
  var e = null,
    t = this.maxWait - this.timeWaited;
  return (
    t > 0 && ((this.delay = Math.min(this.delay, t)), (this.timeWaited += this.delay)),
    (this.maxWait === 0 || t > 0) && ((e = this.delay), (this.delay = this.delay * this.factor)),
    e
  );
};
function Su(i, e, t, r) {
  var s = function () {
    var a = i.nextDelay();
    a ? setTimeout(Su.bind(null, i, e, t, r), a) : r.apply(r, arguments);
  };
  e.call(e, t, s);
}
function DT(i, e, t, r, s, n) {
  var a = new Eu(r, s, n);
  Su(a, i, e, t);
}
var NT = Object.freeze({ __proto__: null, exponentialBackoff: DT });
function LT(i, e, t) {
  var r = void 0;
  if (vi(i))
    if ((vi(e) || (e = 1024 * 1024), vi(t) || (t = 2), Ai(i) && Ai(e) && e > 0 && mu(t) && t >= 0)) {
      var s = Math.pow(10, t),
        n = i > 0 ? "floor" : "ceil";
      r = Math[n](i / e / s) * s;
    } else r = NaN;
  return r;
}
var MT = Object.freeze({ __proto__: null, deResNumber: LT }),
  va = "0123456789",
  UT = va + "ABCDEF",
  ku = va + "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Iu = ku + "abcdefghijklmnopqrstuvwxy",
  Pu = Iu + "z";
function xT(i, e, t) {
  var r = !1;
  return (
    i &&
      e &&
      ((i = i.substr(0, e.length)), t && ((i = i.toLowerCase()), (e = e.toLowerCase())), (r = i.indexOf(e) === 0)),
    r
  );
}
function FT(i, e, t) {
  var r = !1;
  if (i && e) {
    t && ((i = i.toLowerCase()), (e = e.toLowerCase()));
    var s = i.length - e.length;
    r = s >= 0 && i.lastIndexOf(e) === s;
  }
  return r;
}
function KT(i, e, t) {
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
function Au(i, e) {
  var t = "";
  if (i)
    for (var r = i.toLowerCase().split("_"), s, n = 0; n < r.length; n++)
      ((s = r[n][0]), (n !== 0 || e) && (s = s.toUpperCase()), (t += s + r[n].slice(1)));
  return t;
}
function VT(i) {
  return Au(i, !0);
}
function BT(i) {
  var e = "",
    t = "",
    r = !0;
  for (var s in i) {
    var n = i[s];
    (n || n === 0 || n === !1) && ((e += t + s + "=" + encodeURIComponent(n)), r && ((t = "&"), (r = !1)));
  }
  return e;
}
function $T(i, e) {
  return (
    "The function " +
    i +
    "." +
    e +
    "() must be overridden with a platform-specific delegate function.If you have no data for this function, have your delegate return null or undefined (no 'return')"
  );
}
function HT(i, e) {
  var t = null;
  e = e || "\\S+";
  var r = new RegExp("\\b" + e + "/(\\S+)\\b", "i"),
    s = r.exec(i);
  return (s && s[1] && (t = s[1]), t);
}
function jT(i) {
  var e = "z",
    t = Date.now(),
    r = Math.floor(Math.random() * 1e5);
  return ((t = t.toString(36).toUpperCase()), (r = r.toString(36).toUpperCase()), i + e + t + e + r);
}
function qT(i) {
  for (var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", t = "", r, s = 0, n = e.length; s < n; s++)
    ((r = e.charAt(s)), r === "x" ? (t += Pr(i)) : r === "y" ? (t += Pr(i, "8", "b")) : (t += r));
  return t;
}
function Pr(i, e, t) {
  var r = ga(),
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
    e && t && (n < e || n > t) && (n = Pr(i, e, t)),
    n
  );
}
function WT(i, e) {
  var t = "",
    r = e.length;
  if (r <= 36) t = i.toString(r).toUpperCase();
  else {
    for (var s, n, a = []; i > 0;) ((s = i % r), (n = e.charAt(s)), a.push(n), (i = (i - s) / r));
    t = a.reverse().join("");
  }
  return (t === "" && (t = "0"), t);
}
function YT(i) {
  var e;
  if (Math.floor(4294967295 / 256) == 16777215) {
    var t = ga(),
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
        for (o = s[n], a = 0; a < 6; a++) ((e += Pu[o % 62]), (o = Math.floor(o / 62)));
      i && (e = "1_" + (c ? "1" : "2") + "_" + e);
    }
  }
  return e;
}
var _e = Object.freeze({
  __proto__: null,
  base10Alphabet: va,
  base16Alphabet: UT,
  base36Alphabet: ku,
  base61Alphabet: Iu,
  base62Alphabet: Pu,
  startsWith: xT,
  endsWith: FT,
  trim: KT,
  snakeCaseToCamelCase: Au,
  snakeCaseToUpperCamelCase: VT,
  exceptionString: $T,
  paramString: BT,
  versionStringFromUserAgent: HT,
  requestId: jT,
  uuid: qT,
  randomHexCharacter: Pr,
  convertNumberToBaseAlphabet: WT,
  cryptoRandomBase62String: YT,
});
function wu(i, e, t) {
  var r = e;
  if (i && e)
    for (var s = i.split("."), n = 0; r && n < s.length; n++) {
      var a = s[n];
      (!(a in r) && t && (r[a] = {}), a in r ? (r = r[a]) : (r = null));
    }
  return r;
}
function gn(i) {
  var e = null;
  if (i && arguments.length > 1)
    for (var t = Ru(Array.prototype.slice.call(arguments, 1)), r = t.length - 1; r >= 0; r--) {
      var s = t[r];
      if (((e = wu(i, s)), Pi(e))) break;
    }
  return e;
}
function GT(i, e) {
  return wu(i, e, !0);
}
function Ru(i) {
  var e = [],
    t = [];
  ((t = t.concat(i)), arguments && arguments.length > 1 && (t = t.concat(Array.prototype.slice.call(arguments, 1))));
  for (var r = 0; r < t.length; r++) {
    var s = t[r];
    e = e.concat(s);
  }
  return e;
}
var zT = Object.freeze({ __proto__: null, valueForKeyPath: gn, createObjectAtKeyPath: GT, sourcesArray: Ru });
function vn(i) {
  for (var e = [!1, !1, !1].concat(Array.prototype.slice.call(arguments)), t = [], r = 0; r < e.length; r++) {
    var s = e[r];
    if (s && s.constructor === Array) for (var n = 0; n < s.length; n++) t.push(s[n]);
    else t.push(s);
  }
  return ma.apply(null, t);
}
function QT(i, e, t, r) {
  var s = vn(r),
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
        se(l) && (a[c] = l.call(i, s));
      }
    n = vn(n, a);
  }
  return n;
}
function XT(i, e, t, r) {
  var s, n, a;
  if (i && e && t)
    if (((n = {}), (s = gn(e, t, t.custom)), s)) {
      var o, c;
      if (ya(s)) for (o = 0; o < s.length; ++o) ((c = i[s[o]]), Pi(c) && (n[s[o]] = c));
      else if (zr(s)) {
        for (var l in s)
          for (o = 0; o < s[l].length; ++o)
            if (((c = gn(s[l][o], i)), Pi(c))) {
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
  return (a && se(r) && r(a), n);
}
var Qr = Object.freeze({ __proto__: null, mergeAndCleanEventFields: vn, processMetricsData: QT, applyFieldsMap: XT });
function JT(i, e, t) {
  Cu(i, "GET", null, e, t);
}
function Cu(i, e, t, r, s, n) {
  var a = new XMLHttpRequest();
  ((t = t || void 0), (n = n || {}), (r = se(r) ? r : function () {}), (s = se(s) ? s : function () {}));
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
var Ou = Object.freeze({ __proto__: null, makeAjaxGetRequest: JT, makeAjaxRequest: Cu }),
  ba = { STORAGE_TYPE: { LOCAL_STORAGE: "localStorage", SESSION_STORAGE: "sessionStorage" } },
  Du = function (e) {
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
function Ta(i) {
  var e = null,
    t = null,
    r = i === ba.STORAGE_TYPE.LOCAL_STORAGE;
  try {
    ((t = r ? typeof localStorage : typeof sessionStorage),
      t !== "undefined" ? (e = r ? localStorage : sessionStorage) : (e = null));
  } catch (s) {
    ((e = null), console.error("_utils.storage._defaultStorageObject: Unable to retrieve storage object: " + s));
  }
  return e;
}
function ZT(i) {
  return Ta(i);
}
var e_ = Du(Ta(ba.STORAGE_TYPE.LOCAL_STORAGE)),
  t_ = Du(Ta(ba.STORAGE_TYPE.SESSION_STORAGE));
function i_(i, e, t) {
  var r = null;
  if (t)
    try {
      (i.setItem(e, JSON.stringify(t)), (r = t));
    } catch {}
  else r = i.removeItem(e);
  return r;
}
function r_(i, e) {
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
  _utDefaultStorageObject: ZT,
  localStorageObject: e_,
  sessionStorageObject: t_,
  saveObjectToStorage: i_,
  objectFromStorage: r_,
});
function ur(i) {
  this.key = i;
}
ur.prototype.toString = function () {
  return this.key;
};
var $e = {
    flagArguments: {
      INCLUDE_CALL_STACK: new ur("INCLUDE_CALL_STACK"),
      MIRROR_TO_SERVER: new ur("MIRROR_TO_SERVER"),
      SUPPRESS_CLIENT_OUTPUT: new ur("SUPPRESS_CLIENT_OUTPUT"),
    },
    setDelegate: function (e) {
      return d.attachDelegate(this, e);
    },
    execute: function (e, t, r) {
      var s = e.levelStringToIntMap[t];
      if (e.level() !== e.NONE && e.level() <= s) {
        var n = Array.prototype.slice.call(r),
          a = $e.nonFlagLogArguments(n),
          o = $e.logOptions(e, s, n),
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
      return e && e === $e.flagArguments[e.toString()];
    },
    nonFlagLogArguments: function (e) {
      return e.filter(function (t) {
        return !$e.isFlagObject(t);
      });
    },
    logOptions: function (e, t, r) {
      var s = {},
        n;
      return (
        r.forEach(function (a) {
          $e.isFlagObject(a) && ((n = _e.snakeCaseToCamelCase(a.toString())), (s[n] = !0));
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
  bn = { NONE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 },
  Ar = {
    MIN_LEVEL: bn.NONE,
    MAX_LEVEL: bn.ERROR,
    levelIntToStringMap: { 0: "none", 1: "debug", 2: "info", 3: "warn", 4: "error" },
    levelStringToIntMap: { none: 0, debug: 1, info: 2, warn: 3, error: 4 },
  };
d.extend(Ar, bn);
var _a = { loggerName: "defaultLogger", level: Ar.INFO, throwLevel: Ar.NONE },
  cc = !1,
  lc = {};
function ee(i) {
  ((this._loggerName = i),
    this._level,
    this._throwLevel,
    cc || ((cc = !0), d.extend(ee.prototype, Ar), d.extend(ee.prototype, $e.flagArguments)));
}
function xi(i) {
  i = i || _a.loggerName;
  var e = lc[i];
  return (e || ((e = new ee(i)), (lc[i] = e)), e);
}
ee.level = function () {
  return _a.level;
};
ee.throwLevel = function () {
  return _a.throwLevel;
};
ee.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ee.prototype.loggerName = function () {
  return this._loggerName;
};
ee.prototype.levelParameterAsInt = function (e) {
  var t = null,
    r;
  return (
    d.isString(e) ? (r = this.levelStringToIntMap[e.toLowerCase()]) : d.isNumber(e) && (r = e),
    r >= this.MIN_LEVEL && r <= this.MAX_LEVEL && (t = r),
    t
  );
};
ee.prototype.setLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._level = t);
};
ee.prototype.setThrowLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._throwLevel = t);
};
ee.prototype.level = function () {
  var e = this._level;
  return d.isNumber(e) ? e : ee.level();
};
ee.prototype.levelString = function () {
  return this.levelIntToStringMap[this.level()];
};
ee.prototype.throwLevel = function () {
  var e = this._throwLevel;
  return d.isNumber(e) ? e : ee.throwLevel();
};
ee.prototype.debug = function () {
  $e.execute(this, "debug", arguments);
};
ee.prototype.info = function () {
  $e.execute(this, "info", arguments);
};
ee.prototype.warn = function () {
  $e.execute(this, "warn", arguments);
};
ee.prototype.error = function () {
  $e.execute(this, "error", arguments);
};
ee.prototype.lastLog = function (e) {
  return this[e] ? this[e]._lastLog : null;
};
var Xr = function () {};
Xr.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Xr.prototype.localStorageObject = Q.localStorageObject;
Xr.prototype.sessionStorageObject = Q.sessionStorageObject;
var Ea = function () {};
Ea.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Ea.prototype.makeAjaxRequest = Ou.makeAjaxRequest;
var Jr = "noTopicConfig",
  uc = "_",
  Tn = { configBaseUrl: "https://xp.apple.com/config/1/report", disabled: !0 },
  Ss,
  dc = function (e, t, r) {
    if (r) {
      e.push(r);
      var s = r[t];
      s && d.hasAnyKeys(s) && e.push(s);
    }
  },
  H = function (e) {
    ((this.environment = new Xr()),
      (this.network = new Ea()),
      (this.logger = new ee("mt-client-config")),
      (this._topic = e || Jr),
      (this._debugSource = null),
      (this._cachedSource = null),
      (this._serviceSource = null),
      (this._initCalled = !1),
      (this._initialized = !1),
      (this._showedDebugWarning = !1),
      (this._showedNoProvidedSourceWarning = !1),
      (this._keyPathsThatSuppressWarning = { configBaseUrl: !0 }),
      (this._configFetchPromise = null),
      (this.DEBUG_SOURCE_KEY = "mtClientConfig_debugSource" + uc + this._topic),
      (this.CACHED_SOURCE_KEY = "mtClientConfig_cachedSource" + uc + this._topic));
  };
H.defaultConfig = function () {
  return (Ss || (Ss = new H(Jr)), Ss);
};
H.prototype._defaults = function () {
  return Tn;
};
H.prototype._setInitialized = function (e) {
  this._initialized = e;
};
H.prototype._setInitCalled = function (e) {
  this._initCalled = e;
};
H.prototype._setShowedDebugWarning = function (e) {
  this._showedDebugWarning = e;
};
H.prototype._setShowedNoProvidedSourceWarning = function (e) {
  this._showedNoProvidedSourceWarning = e;
};
H.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
H.prototype.resetDelegate = function () {
  (d.detachMethods(this), d.resetDelegates(this));
};
H.prototype.topic = function () {
  return this._topic;
};
H.prototype.configHostname = function () {};
H.prototype.configUrl = function () {
  var e = this.configHostname(),
    t;
  return (
    e ? (t = Promise.resolve("https://" + e + "/config/1/report")) : (t = this.value("configBaseUrl")),
    t.then(
      function (r) {
        return (
          this._topic !== Jr
            ? (r += "/" + this.topic())
            : this.logger.error("config.configUrl(): Topic must be provided"),
          r
        );
      }.bind(this),
    )
  );
};
H.prototype.sources = function () {};
H.prototype.value = function (e, t) {
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
      e === "disabled" ? (l ? (h = [n, a, o, c]) : (h = [Tn])) : (h = [Tn, n, a, o, c]),
      (h = this.configSourcesWithOverrides(h, t || this.topic())),
      zT.valueForKeyPath.apply(null, [e].concat(h))
    );
  }.bind(this);
  if (this._configFetchPromise) return this._configFetchPromise.then(r);
  var s = r();
  return Promise.resolve(s);
};
H.prototype.configSourcesWithOverrides = function (e, t) {
  var r = e;
  if (e && e.length && t) {
    r = [];
    for (var s = 0; s < e.length; s++) {
      var n = e[s];
      if (n)
        if (d.isArray(n) && n.length) {
          for (var a = [], o = 0; o < n.length; o++) dc(a, t, n[o]);
          r.push(a);
        } else dc(r, t, n);
    }
  }
  return r;
};
H.prototype.setDebugSource = function (e) {
  return (
    (this._debugSource = e || null),
    Q.saveObjectToStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY, this._debugSource)
  );
};
H.prototype.debugSource = function () {
  return (
    this._debugSource ||
      (this._debugSource = Q.objectFromStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY)),
    this._debugSource
  );
};
H.prototype.setCachedSource = function (e) {
  return (
    (this._cachedSource = e || null),
    Q.saveObjectToStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY, this._cachedSource)
  );
};
H.prototype.cachedSource = function () {
  return (
    this._cachedSource ||
      (this._cachedSource = Q.objectFromStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY)),
    this._cachedSource
  );
};
H.prototype.setServiceSource = function (e) {
  return ((this._serviceSource = e), this._serviceSource);
};
H.prototype.serviceSource = function () {
  return this._serviceSource;
};
H.prototype.init = function (e) {
  var t = this._topic === Jr || !d.isFunction(e);
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
H.prototype.cleanup = function () {
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
H.prototype.initialized = function () {
  return this._initialized;
};
var ge = function (e) {
  H.call(this, e);
};
ge.prototype = Object.create(H.prototype);
ge.prototype.constructor = ge;
ge.prototype.disabled = function (e) {
  return this.value("disabled", e).then(function (t) {
    return !!t;
  });
};
ge.prototype.blacklistedEvents = function (e) {
  return this.denylistedEvents(e);
};
ge.prototype.denylistedEvents = function (e) {
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
    return Nu(n, a);
  });
};
function Nu(i, e) {
  var t = {},
    r = [];
  if (i) for (var s = 0; s < i.length; s++) t[i[s]] = 0;
  if (e) for (var n = 0; n < e.length; n++) t[e[n]] = 0;
  return ((r = Object.keys(t)), r);
}
ge.prototype.blacklistedFields = function (e) {
  return this.denylistedFields(e);
};
ge.prototype.denylistedFields = function (e) {
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
    return Nu(n, a);
  });
};
ge.prototype.removeBlacklistedFields = function (e, t) {
  return this.removeDenylistedFields(e, t);
};
ge.prototype.removeDenylistedFields = function (e, t) {
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
ge.prototype.metricsDisabledOrBlacklistedEvent = function (e, t) {
  return this.metricsDisabledOrDenylistedEvent(e, t);
};
ge.prototype.metricsDisabledOrDenylistedEvent = function (e, t) {
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
ge.prototype.deResFields = function (e) {
  return this.value("deResFields", e).then(function (t) {
    return t || [];
  });
};
ge.prototype.applyDeRes = function (e, t) {
  return e
    ? this.deResFields(t).then(function (r) {
        var s;
        return (
          r.forEach(function (n) {
            ((s = n.fieldName), s in e && (e[s] = MT.deResNumber(e[s], n.magnitude, n.significantDigits)));
          }),
          e
        );
      })
    : Promise.resolve(e);
};
var Me = function (e, t) {
  if (!d.isDefinedNonNullNonEmpty(e) || !d.isString(e)) throw new Error("No valid topic was provided to Delegates.");
  ((this.config = this.getOrCreateConfig(e)),
    d.isDefinedNonNull(t) && ((this.environment = t.environment), (this.eventRecorder = t.eventRecorder)),
    (this._useOrginalContextForDelegateFunc = !1));
};
Me.prototype.init = function () {
  if (!d.isDefinedNonNull(this.environment)) throw new Error("No environment was provided to Delegate options.");
  if (!d.isDefinedNonNull(this.eventRecorder)) throw new Error("No eventRecorder was provided to Delegate options.");
  (this.config.environment.setDelegate(this.environment),
    this.config.logger.setDelegate(this.logger),
    this.config.network.setDelegate(this.network));
  var i = d.isFunction(this.configSources) ? this.configSources.bind(this) : null;
  return this.config.init(i);
};
Me.prototype.mergeDelegates = function (i) {
  var e = this;
  for (var t in i) e[t] || (e[t] = i[t]);
  this.config.setDelegate(i.config);
};
Me.prototype.cleanup = function () {
  (d.isFunction(this.eventRecorder.cleanup) && this.eventRecorder.cleanup(),
    (this.config = null),
    (this.eventRecorder = null),
    (this.environment = null));
};
Me.prototype.setEventRecorder = function (e) {
  return (
    d.isDefinedNonNull(e) &&
      (d.isDefinedNonNull(this.eventRecorder)
        ? (d.setDelegates(this.eventRecorder, e), this.eventRecorder.setDelegate(e))
        : (this.eventRecorder = e)),
    this
  );
};
Me.prototype.setEnvironment = function (e) {
  if (!d.isDefinedNonNull(this.environment)) this.environment = e;
  else {
    var t = Object.create(this.environment);
    (d.extend(t, e), (this.environment = t));
  }
  return this;
};
Me.prototype.setConfig = function (e) {
  return (this.config.setDelegate(e), this);
};
Me.prototype.getOrCreateConfig = function (e) {
  return (d.isDefinedNonNull(this.config) || (this.config = new ge(e)), this.config);
};
Me.prototype.configSources = function () {
  throw new Error("This method should be implemented by subdelegates.");
};
function Mt() {
  this._operationPromiseChain = Promise.resolve();
}
Mt.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Mt.prototype.recordEvent = function (e, t) {
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
Mt.prototype.flushUnreportedEvents = function () {
  var e = Array.prototype.slice.call(arguments),
    t = this;
  return this._operationPromiseChain.then(function () {
    return ((t._operationPromiseChain = Promise.resolve()), t._flushUnreportedEvents.apply(t, e));
  });
};
Mt.prototype._recordEvent = function (e, t) {};
Mt.prototype._flushUnreportedEvents = function (e) {};
var bi = {
    setDelegate: function (e) {
      return d.attachDelegate(this, e);
    },
    globalScope: function () {
      return d.globalScope();
    },
  },
  wr = {
    AJAX: "ajax",
    AJAX_SYNCHRONOUS: "ajaxSynchronous",
    IMAGE: "image",
    BEACON: "beacon",
    BEACON_SYNCHRONOUS: "beaconSynchronous",
  },
  s_ = ["dsId", "consumerId"];
function n_(i, e) {
  var t = { _topic: e };
  return (Object.setPrototypeOf(t, i), t);
}
var Ue = function (e) {
  (this._validateConfig(e),
    (this._config = e),
    (this._topicConfigCache = {}),
    (this._topicPropsCache = {}),
    (this.logger = xi("mt-event-queue")));
};
Ue.prototype._validateConfig = function (e) {
  var t = "please call constructor with a valid Config instance first.";
  if (e) {
    if (!e.topic || !d.isFunction(e.topic)) throw new TypeError("Unable to find config.topic function, " + t);
    if (!e.metricsDisabledOrDenylistedEvent || !d.isFunction(e.metricsDisabledOrDenylistedEvent))
      throw new TypeError("Unable to find config.metricsDisabledOrDenylistedEvent function, " + t);
    if (!e.removeDenylistedFields || !d.isFunction(e.removeDenylistedFields))
      throw new TypeError("Unable to find config.removeDenylistedFields function, " + t);
  } else throw new TypeError("Unable to find config, " + t);
};
Ue.prototype._removeIdentifiableFieldsForTopic = function (e, t) {
  ((this._topicPropsCache[e] = this._topicPropsCache[e] || {}),
    this._topicPropsCache[e].anonymous &&
      s_.forEach(function (r) {
        delete t[r];
      }));
};
Ue.prototype._record = function (e) {};
Ue.prototype.cleanup = function () {
  ((this._config = null), (this._topicConfigCache = null), (this._topicPropsCache = {}));
};
Ue.prototype.recordEvent = function (e, t) {
  if (!this._config || !t) return Promise.resolve(null);
  var r = this._config,
    s = this,
    n = arguments;
  return (
    d.isDefinedNonNullNonEmpty(e) &&
      e !== r.topic() &&
      ((r = this._topicConfigCache[e]), r || (r = this._topicConfigCache[e] = n_(this._config, e))),
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
Ue.prototype.sendMethod = function () {
  return "javascript";
};
Ue.prototype.setProperties = function (e, t) {
  ((this._topicPropsCache[e] = this._topicPropsCache[e] || {}), (this._topicPropsCache[e] = t));
};
var Sa = {
  setDelegate: function (e) {
    return d.attachDelegate(this, e);
  },
  makeAjaxRequest: Ou.makeAjaxRequest,
};
function Lu() {
  var i = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(i) && i.indexOf("IEMobile") == -1;
}
function a_() {
  return d.isFunction(bi.globalScope().fetch) && !/Firefox/.test(navigator.userAgent);
}
function Tt() {
  return xi("mt-event-queue");
}
var O = {
    DEFAULT_REQUEST_TIMEOUT: 1e4,
    EVENTS_KEY: "events",
    EVENT_DELIVERY_VERSION: "1.0",
    MAX_PERSISTENT_QUEUE_SIZE: 100,
    RETRY_EXPONENT_BASE: 2,
    SEND_METHOD: wr,
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
            (Tt().warn(
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
          Tt().warn(
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
            var f;
            switch (t) {
              case O.SEND_METHOD.IMAGE:
                f = v.sendEventsViaImage(e);
                break;
              case O.SEND_METHOD.BEACON:
                f = v.sendEventsViaBeacon(e);
                break;
              case O.SEND_METHOD.AJAX_SYNCHRONOUS:
                f = v.sendEventsViaAjax(e, !1);
                break;
              case O.SEND_METHOD.AJAX:
              default:
                f = v.sendEventsViaAjax(e, !0);
                break;
            }
            return f;
          }
        } else if (o) return v.scheduleNextTopicRetryAttempt(e);
      });
    },
    sendEventsViaImage: function (e) {
      var t = e.topic(),
        r = Promise.resolve();
      return (
        v.eventQueues[t] &&
          (r = rr(e, function (s) {
            var n = s.metricsUrl,
              a = n.indexOf("?") == -1 ? "?" : "&",
              o = n + a + "responseType=image",
              c = v.eventQueues[t][O.EVENTS_KEY];
            (c &&
              c.length &&
              c.forEach(function (l) {
                var h = v.createQueryParams(l);
                if (h) {
                  var f = o + "&" + h,
                    y = new Image(),
                    k = v.eventQueues[t][O.PROPERTIES_KEY];
                  (k && k.anonymous && y.setAttribute("crossOrigin", "anonymous"), (y.src = f));
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
          a = hr(n);
        (v.resetTopicQueue(s),
          a &&
            (r = rr(e, function (o) {
              var c = o.metricsUrl,
                l = o.requestTimeout,
                h = function () {
                  v.resetTopicRetryAttempts(s);
                },
                f = function (ce, te) {
                  if (te >= 400 && te < 500) h();
                  else {
                    var Pe = v.eventQueues[s][O.EVENTS_KEY] || [];
                    ((v.eventQueues[s][O.EVENTS_KEY] = n.concat(Pe)), v.scheduleNextTopicRetryAttempt(e));
                  }
                },
                y = v.eventQueues[s][O.PROPERTIES_KEY] || {},
                k = { async: t, timeout: l };
              (y.anonymous && (k.withCredentials = !1), Sa.makeAjaxRequest(c, "POST", a, h, f, k));
            })));
      }
      return r;
    },
    sendEventsViaBeacon: function (e) {
      var t = Promise.resolve();
      if (!d.isFunction(navigator.sendBeacon))
        return (Tt().error("navigator.sendBeacon() is not available in the environment"), t);
      var r = e.topic(),
        s = v.eventQueues[r];
      if (s) {
        var n = s[O.PROPERTIES_KEY];
        if (n && n.anonymous)
          a_()
            ? (t = v.sendEventsViaFetch(e, { keepalive: !0 }))
            : Lu()
              ? (t = v.sendEventsViaAjax(e, !1))
              : (t = v.sendEventsViaImage(e));
        else {
          var a = hr(s[O.EVENTS_KEY]);
          a &&
            (v.resetTopicQueue(r),
            (t = rr(e, function (o) {
              var c = o.metricsUrl,
                l = bi.globalScope().Blob,
                h = new l([a], { type: "application/json" }),
                f = navigator.sendBeacon(c, h);
              f || Tt().error("navigator.sendBeacon() was unable to queue the data for transfer");
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
        var o = hr(n[O.EVENTS_KEY]);
        if (o) {
          v.resetTopicQueue(s);
          var c = n[O.PROPERTIES_KEY] || {};
          r = rr(e, function (l) {
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
        (v.eventQueues[r].postIntervalToken = bi.globalScope().setInterval(function () {
          (Tt().debug("MetricsKit: triggering postIntervalTimer for " + r + " at " + new Date().toString()),
            v.sendEventsForTopicConfig(e));
        }, t)));
    },
    resetTopicPostInterval: function (e) {
      v.eventQueues[e] &&
        (bi.globalScope().clearInterval(v.eventQueues[e].postIntervalToken),
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
function dr() {
  return v;
}
function hr(i) {
  var e = null;
  if (i && i.length) {
    var t = {};
    ((t.deliveryVersion = O.EVENT_DELIVERY_VERSION), (t.postTime = Date.now()), (t[O.EVENTS_KEY] = i));
    try {
      e = JSON.stringify(t);
    } catch (r) {
      Tt().error("Error stringifying events as JSON: " + r);
    }
  }
  return e;
}
function o_(i) {
  return hr([i]);
}
function Mu(i) {
  return i.value("metricsUrl").then(function (e) {
    var t = e + "/" + O.URL_DELIVERY_VERSION + "/";
    return t + i.topic();
  });
}
function rr(i, e) {
  if (!d.isFunction(e)) {
    Tt().warn("No callback function is provided for resolveTopicConfigWithCallback()");
    return;
  }
  if (d.isString(i.metricsUrl) && !d.isFunction(i.value)) {
    var t = d.isFunction(i.topic) ? i.topic() : i.topic,
      r = i.metricsUrl + "/" + O.URL_DELIVERY_VERSION + "/" + t,
      s = i.requestTimeout || O.DEFAULT_REQUEST_TIMEOUT,
      n = i.postFrequency;
    return e({ requestTimeout: Math.min(s, n), metricsUrl: r });
  } else
    return Promise.all([i.value("requestTimeout"), i.value("postFrequency"), Mu(i)]).then(function (a) {
      var o = a[0] || O.DEFAULT_REQUEST_TIMEOUT,
        c = a[1],
        l = a[2];
      return e({ requestTimeout: Math.min(o, c), metricsUrl: l });
    });
}
function c_(i) {
  return Promise.all([i.value("requestTimeout"), i.value("postFrequency")]).then(function (e) {
    var t = e[0] || O.DEFAULT_REQUEST_TIMEOUT,
      r = e[1];
    return Math.min(t, r);
  });
}
function l_(i, e, t) {
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
function u_(i, e) {
  return i
    ? e === wr.BEACON_SYNCHRONOUS
      ? d_()
      : d.isString(e) && v.objectContainsValue(wr, e)
        ? v.sendEvents(e, !0)
        : d.isFunction(navigator.sendBeacon)
          ? v.sendEvents(O.SEND_METHOD.BEACON, !0)
          : Lu()
            ? v.sendEvents(O.SEND_METHOD.AJAX_SYNCHRONOUS, !0)
            : v.sendEvents(O.SEND_METHOD.IMAGE, !0)
    : v.sendEvents(O.SEND_METHOD.AJAX, !0);
}
function d_() {
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
var Ee = function (e) {
  Ue.apply(this, arguments);
};
Ee.prototype = Object.create(Ue.prototype);
Ee.prototype.constructor = Ee;
Ee.prototype._utResetQueue = function () {
  for (var e in dr().eventQueues) dr().resetTopicPostInterval(e);
  dr().eventQueues = {};
};
Ee.prototype._record = function (e, t, r) {
  return l_(e, t, r);
};
Ee.prototype.SEND_METHOD = wr;
Ee.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Ee.prototype.flushUnreportedEvents = function (e, t) {
  return u_.apply(null, arguments);
};
Ee.prototype.setProperties = function (e, t) {
  (Object.getPrototypeOf(Ee.prototype).setProperties.call(this, e, t), dr().setProperties(e, t));
};
Ee.prototype.cleanup = function () {
  (Object.getPrototypeOf(Ee.prototype).cleanup.call(this), this._utResetQueue());
};
var wi = function (e) {
  Ue.apply(this, arguments);
};
wi.prototype = Object.create(Ue.prototype);
wi.prototype.constructor = wi;
wi.prototype._record = function (e, t) {
  var r = o_(t);
  if (r)
    return Promise.all([Mu(e), c_(e)]).then(
      function (s) {
        var n = s[0],
          a = s[1],
          o = { timeout: a };
        (this._topicPropsCache[e.topic()] && this._topicPropsCache[e.topic()].anonymous && (o.withCredentials = !1),
          Sa.makeAjaxRequest(n, "POST", r, null, null, o));
      }.bind(this),
    );
};
var h_ = xi("mt-event-queue");
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
function Le(i) {
  (Mt.call(this), (this._proxyEventRecorder = i), (this.SEND_METHOD = i.SEND_METHOD));
}
Le.prototype = Object.create(Mt.prototype);
Le.prototype.constructor = Le;
Le.prototype._recordEvent = function (e, t) {
  return this._proxyEventRecorder.recordEvent.apply(this._proxyEventRecorder, arguments);
};
Le.prototype.flushUnreportedEvents = function (e, t) {
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
Le.prototype._flushUnreportedEvents = function () {
  return this._proxyEventRecorder.flushUnreportedEvents.apply(this._proxyEventRecorder, arguments);
};
Le.prototype.sendMethod = function () {
  return this._proxyEventRecorder.sendMethod.apply(this._proxyEventRecorder, arguments);
};
Le.prototype.setProperties = function (e, t) {
  return this._proxyEventRecorder.setProperties.apply(this._proxyEventRecorder, arguments);
};
Le.prototype.cleanup = function () {
  return this._proxyEventRecorder.cleanup.apply(this._proxyEventRecorder, arguments);
};
var et = function (e, t) {
  var r = this.getOrCreateConfig(e);
  (Me.call(this, e, { environment: new C(r), eventRecorder: new Le(new Ee(r)) }),
    (this.immediateEventRecorder = new Le(new wi(r))),
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
et.prototype = Object.create(Me.prototype);
et.prototype.constructor = et;
et.prototype.setEnvironment = function (i) {
  return (bi.setDelegate(i), Me.prototype.setEnvironment.call(this, i));
};
et.prototype.setNetwork = function (i) {
  return (i && ((this.network = i), Sa.setDelegate(i)), this);
};
et.prototype.setLogger = function (i) {
  return (i && ((this.logger = i), h_.setDelegate(i)), this);
};
et.prototype.setImmediateEventRecorder = function (i) {
  if (i) {
    var e = Object.create(this.immediateEventRecorder);
    (Object.assign(e, i), (this.immediateEventRecorder = e));
  }
  return this;
};
et.prototype.configSources = function () {
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
      NT.exponentialBackoff(e.config.network.makeAjaxRequest.bind(e.config.network, o, "GET", null), s, n);
    }).catch(n);
  });
};
var Fi = function () {};
Fi.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Fi.prototype.localStorageObject = Q.localStorageObject;
Fi.prototype.sessionStorageObject = Q.sessionStorageObject;
Fi.prototype.platformIdentifier = function (e, t, r) {};
var p_ = function () {
  ((this.environment = new Fi()), (this.logger = xi("mt-client-constraints")));
};
function _n(i, e, t, r) {
  if (!d.isDefined(i) || !d.isDefinedNonNullNonEmpty(e) || !d.isFunction(r)) return i;
  var s = e.split(".");
  return En(i, s, null, [], null, t, r);
}
function En(i, e, t, r, s, n, a) {
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
        var W = n ? l : l.slice();
        return (En(y, e.slice(), k, r, W, n, a), r.pop(), W[k]);
      });
      o[c] = h;
    }
  } else {
    var f = i[c];
    (d.extend(o, i), (o = En(f, e, c, r, o, n, a)));
  }
  return (r.pop(), s ? ((s[t] = o), s) : o);
}
var hc = {
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
function f_(i) {
  var e = hc[i];
  return (d.isDefinedNonNull(e) || (e = hc.all), e);
}
function y_(i, e, t) {
  if (!d.isObject(e) || !d.isObject(t)) return !1;
  var r = t.matchType,
    s = t.matches;
  if (!d.isDefinedNonNullNonEmpty(s)) return !1;
  var n = f_(r),
    a = n.initMatchValue;
  return (
    _n(e, i, !1, function (o, c, l, h) {
      var f = Object.keys(s).every(function (y) {
        var k = s[y];
        return d.isDefinedNonNull(Yt[y]) ? Yt[y](c, h, k) : !1;
      });
      a = n.accumulateMatchResult(a, f);
    }),
    !!a
  );
}
function m_(i, e) {
  return !!d.isObject(e) && e.hasOwnProperty(i) && d.isDefinedNonNullNonEmpty(e[i]);
}
function g_(i, e, t) {
  if (!d.isObject(e)) return !1;
  var r = e[i];
  return e.hasOwnProperty(i) && t.indexOf(r) > -1;
}
function v_(i, e, t) {
  if (!d.isObject(e) || !d.isArray(t)) return !1;
  var r = e[i];
  return e.hasOwnProperty(i) && t.indexOf(r) === -1;
}
var Yt = { nonEmpty: m_, valueMatches: g_, nonValueMatches: v_, nestedFieldMatches: y_ },
  Rr = { OVERRIDE_FIELD_VALUE: "overrideFieldValue" },
  ka = function () {};
ka.prototype.constrainedValue = function (e, t, r) {
  var s = e && e.hasOwnProperty(r) ? e[r] : null;
  return this.applyConstraintRules(s, t);
};
ka.prototype.applyConstraintRules = function (e, t) {
  var r = e;
  if (t) {
    var s = t.denylisted || t.blacklisted;
    s ? (r = null) : t.hasOwnProperty(Rr.OVERRIDE_FIELD_VALUE) && (r = t.overrideFieldValue);
  }
  return r;
};
var b_ = _e.exceptionString,
  Ie = function (e) {
    this._constraintsInstance = e;
  };
Ie.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
Ie.prototype.constrainedValue = function (e, t, r, s) {
  throw b_("field_actions.Base", "constrainedValue");
};
Ie.prototype.performAction = function (e, t, r, s) {
  return (d.isDefinedNonNull(s) && !d.isEmptyObject(s) && (e = this.constrainedValue(e, s, r, t)), e);
};
function Uu(i) {
  i = i || "";
  var e = xu(i).split("/"),
    t,
    r,
    s;
  return (
    i.indexOf("//") === -1 ? (t = e[0]) : (t = e[2]), (r = t.substring(t.indexOf("@") + 1)), (s = r.split(":")[0]), s
  );
}
function T_(i) {
  var e = Uu(i).split("."),
    t = e[e.length - 1],
    r = e[e.length - 2],
    s = 2;
  return (t && t.length === 2 && r && (r.length === 2 || r in __()) && (s = 3), e.slice(-1 * s).join("."));
}
function __() {
  var i = { com: !0, org: !0, net: !0, edu: !0, gov: !0 };
  return i;
}
function xu(i, e) {
  var t = i || "",
    r = t.split("?"),
    s = r[0],
    n = E_(r[1]).split("&"),
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
function E_(i) {
  var e = i || "";
  return e.split("#")[0];
}
function S_(i, e) {
  var t = i || "",
    r = e || [],
    s = r.reduce(function (n, a) {
      var o = new RegExp(a.searchPattern, a.flags),
        c = a.replaceVal;
      return n.replace(o, c);
    }, t);
  return s;
}
var Sn = "-",
  k_ = "z";
function Fu(i) {
  if (!d.isDefinedNonNull(i) || !d.isInteger(i.idVersion)) return "0";
  var e = _e.uuid(),
    t = i.generatedIdSeparator || k_,
    r = I_(i) + Sn + e || "",
    s = r
      .split(Sn)
      .map(function (n) {
        var a = parseInt(n, 16);
        return _e.convertNumberToBaseAlphabet(a, _e.base61Alphabet);
      })
      .join(t);
  return s;
}
function I_(i) {
  var e = [i.idVersion];
  return (
    i.time && e.push(i.time),
    e
      .map(function (t) {
        return t.toString(16);
      })
      .join(Sn)
  );
}
function Ku(i, e, t, r) {
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
var pc = {};
function P_(i, e, t, r) {
  var s = this.storageKey(r, t, e),
    n = pc[s];
  return (n || ((n = Ku.apply(this, arguments)), (pc[s] = n)), n);
}
var Ia = "_",
  A_ = "mtId",
  oe = function () {
    Ie.apply(this, arguments);
  };
oe.prototype = Object.create(Ie.prototype);
oe.prototype.constructor = oe;
oe.prototype.SCOPE_STRATEGIES = { ALL: "all", MAIN_DOMAIN: "mainDomain" };
oe.prototype.rulesHaveLifespan = function (e) {
  return ((e = e || {}), d.isNumber(e.lifespan));
};
oe.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
oe.prototype.storageKey = function (e, t, r) {
  var s = this.scope(t, r);
  return this.storageKeyPrefix(r, e) + (s ? Ia + s : "");
};
oe.prototype.storageKeyPrefix = function (e, t) {
  return e && d.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : A_ + Ia + t;
};
oe.prototype.scope = function (e, t) {
  var r = "";
  if (t && (t.namespace && (r += t.namespace), t.scopeStrategy)) {
    var s;
    switch (t.scopeStrategy) {
      case this.SCOPE_STRATEGIES.MAIN_DOMAIN:
        var n = t.scopeFieldName;
        s = T_(e[n]) || "unknownDomain";
        break;
      case this.SCOPE_STRATEGIES.ALL:
      default:
        s = this.SCOPE_STRATEGIES.ALL;
        break;
    }
    (r.length && (r += Ia), (r += s));
  }
  return r;
};
oe.prototype.idString = function (e, t) {
  var r = e ? e.value : null,
    s = r;
  return ((!r || (d.isNumber(e.expirationTime) && this.timeExpired(e.expirationTime))) && (s = this.generateId(t)), s);
};
oe.prototype.generateId = function (e) {
  return (
    (e = e || {}),
    Fu({
      idVersion: this.generatedIdVersion(),
      time: this.expirationTime(e.lifespan),
      generatedIdSeparator: this.generatedIdSeparator(e.tokenSeparator),
    })
  );
};
oe.prototype.generatedIdVersion = function () {
  return 4;
};
oe.prototype.idTokenSeparator = function () {
  return "-";
};
oe.prototype.generatedIdSeparator = function (e) {
  return e || "z";
};
oe.prototype.timeExpired = function (e) {
  return e <= Date.now();
};
oe.prototype.constrainedValue = function (e, t, r, s) {
  return (
    r &&
      t &&
      !d.isEmptyObject(t) &&
      (t.persistIdForSession === !0 ? (e = P_.apply(this, arguments)) : (e = Ku.apply(this, arguments))),
    e
  );
};
var Vu = function (e, t) {
  ((this._base = e),
    (this._idAction = new oe(t)),
    this._idAction.setDelegate({
      storageKey: function (s, n, a) {
        return this.storageKeyPrefix() + "_" + this.scope(n, a);
      }.bind(this._idAction),
      storageKeyPrefix: function () {
        return "mtClientId";
      },
    }));
};
Vu.prototype.constrainedValue = function (e, t) {
  var r = t;
  t &&
    d.isNumber(t.expirationPeriod) &&
    ((r = d.extend({}, t)), (r.lifespan = r.expirationPeriod), delete r.expirationPeriod);
  var s = e ? e.clientId : null,
    n = this._idAction.performAction(s, "clientId", e, r);
  return this._base.applyConstraintRules(n, t);
};
var wt = function () {
  Ie.apply(this, arguments);
};
wt.prototype = Object.create(Ie.prototype);
wt.prototype.constructor = wt;
wt.prototype.SCOPES = {
  HOSTNAME: "hostname",
  FULL: "full",
  FULL_WITHOUT_PARAMS: "fullWithoutParams",
  FULL_WITH_REPLACEMENTS: "fullWithReplacements",
};
wt.prototype.constrainedValue = function (e, t) {
  if (e && t && t.scope)
    switch (t.scope) {
      case this.SCOPES.HOSTNAME:
        e = Uu(e);
        break;
      case this.SCOPES.FULL_WITHOUT_PARAMS:
        e = xu(e, t.allowedParams);
        break;
      case this.SCOPES.FULL_WITH_REPLACEMENTS:
        e = S_(e, t.replacements);
        break;
      case this.SCOPES.FULL:
    }
  return e;
};
var Bu = function (e) {
  ((this._base = e), (this._urlAction = new wt()));
};
Bu.prototype.constrainedValue = function (e, t) {
  var r = e ? e.parentPageUrl : null,
    s = this._urlAction.performAction(r, "parentPageUrl", e, t);
  return this._base.applyConstraintRules(s, t);
};
var w_ = function (i) {
    ((this.base = new ka()), (this.clientId = new Vu(this.base, i)), (this.parentPageUrl = new Bu(this.base)));
  },
  Pa = function (e) {
    this._fieldHandlers = new w_(e);
  };
Pa.prototype.applyConstraints = function (e, t) {
  return (t && t.fieldConstraints && (e = this.applyFieldConstraints(e, t.fieldConstraints)), e);
};
Pa.prototype.applyFieldConstraints = function (e, t) {
  if (t) {
    var r = {},
      s,
      n,
      a;
    for (a in t)
      ((n = t[a]),
        (e.hasOwnProperty(a) || n.generateValue === !0 || n.hasOwnProperty(Rr.OVERRIDE_FIELD_VALUE)) &&
          (a in this._fieldHandlers
            ? (s = this._fieldHandlers[a].constrainedValue(e, n))
            : (s = this._fieldHandlers.base.constrainedValue(e, n, a)),
          (r[a] = s)));
    for (a in r) e[a] = r[a];
    e = Qr.mergeAndCleanEventFields(e);
  }
  return e;
};
function $u(i, e, t, r) {
  var s = i || {};
  if (
    ((r =
      r ||
      function (l, h, f) {
        return l[f] || {};
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
var si = function (e) {
  this.treatment = new Pa(e);
};
si.prototype.constraintsForEvent = function (e, t, r) {
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
si.prototype.eventMatchesRule = function (e, t) {
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
si.prototype.eventMatchesNonEmptyFields = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !d.isArray(t)
        ? (r = !0)
        : (r = t.every(function (s) {
            return Yt.nonEmpty(s, e);
          }))),
    r
  );
};
si.prototype.eventMatchesFieldValues = function (e, t) {
  var r = !1;
  return (
    e &&
      (!t || !d.isObject(t) || d.isEmptyObject(t)
        ? (r = !0)
        : (r = Object.keys(t).every(function (s) {
            var n = t[s];
            return Yt.valueMatches(s, e, n);
          }))),
    r
  );
};
si.prototype.updateRules = function (e, t) {
  return $u(e, t, "fieldConstraints");
};
var Hu = function () {};
Hu.prototype.performAction = function (e, t, r) {
  return r !== !0 ? e : null;
};
var ju = function () {};
ju.prototype.performAction = function (e, t, r) {
  return !e || !d.isArray(r) || d.isEmptyArray(r)
    ? e
    : ((e = d.extend({}, e)),
      r.forEach(function (s) {
        delete e[s];
      }),
      d.isEmptyObject(e) ? null : e);
};
var qu = function () {};
qu.prototype.performAction = function (e, t, r) {
  if (!e || !d.isArray(r) || d.isEmptyArray(r)) return e;
  var s = {};
  return (
    r.forEach(function (n) {
      d.isDefinedNonNull(e[n]) && (s[n] = e[n]);
    }),
    d.isEmptyObject(s) ? null : s
  );
};
var R_ = "mtSessionization",
  Wu = "_",
  C_ = "-",
  ks = "sessionId",
  Is = "sessionStartTime",
  nt = function (e) {
    this._constraintsInstance = e;
  };
nt.prototype.performAction = function (e, t, r) {
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
nt.prototype._storageKey = function (e, t) {
  var r = this._scope(e, t);
  return this._storageKeyPrefix(t) + (d.isEmptyString(r) ? "" : Wu + r);
};
nt.prototype._storageKeyPrefix = function (e) {
  return e && d.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : R_;
};
nt.prototype._scope = function (e, t) {
  var r = "";
  return (
    d.isDefined(t) &&
      (d.isString(t.namespace) && (r += t.namespace),
      d.isString(t.scopeFieldName) &&
        d.isDefinedNonNull(e[t.scopeFieldName]) &&
        ((r += Wu), (r += e[t.scopeFieldName].toString()))),
    r
  );
};
nt.prototype._generateSessionId = function (e) {
  return Fu({ idVersion: 1, time: Date.now(), idTokenSeparator: C_, generatedIdSeparator: e.tokenSeparator });
};
nt.prototype._shouldCreateNewSession = function (e, t, r) {
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
nt.prototype._resetSession = function (e, t, r) {
  var s = r.sessionResetOptions,
    n = this._constraintsInstance._constraintGenerator;
  if (d.isDefinedNonNull(n) && d.isDefinedNonNull(n.eventMatchesTreatment) && n.eventMatchesTreatment(t, s)) {
    var a = this._storageKey(e, r),
      o = this._constraintsInstance.system.environment;
    return (Q.saveObjectToStorage(o.localStorageObject(), a, void 0), s.newSessionAfterReset);
  }
  return !0;
};
nt.prototype._getSessionFieldNames = function (e) {
  var t = { sessionId: ks, sessionStartTime: Is };
  return (
    d.isDefinedNonNull(e.sessionFields) &&
      (d.isDefinedNonNullNonEmpty(e.sessionFields[ks]) && (t.sessionId = e.sessionFields[ks]),
      d.isDefinedNonNullNonEmpty(e.sessionFields[Is]) && (t.sessionStartTime = e.sessionFields[Is])),
    t
  );
};
var Aa = function () {};
Aa.prototype.performAction = function (e, t, r) {
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
Aa.prototype._clampToBoundary = function (e, t) {
  var r = e % t,
    s = e - r,
    n = s + t;
  return r <= t / 2 ? s : n;
};
var lt = {
    blacklistedEventAction: "blacklisted",
    denylistedEventAction: "denylisted",
    blacklistedFieldsAction: "blacklistedFields",
    denylistedFieldsAction: "denylistedFields",
    whitelistedFieldsAction: "whitelistedFields",
    allowlistedFieldsAction: "allowlistedFields",
    sessionizationFieldsAction: "sessionizationFields",
    clampingEventAction: "clamping",
  },
  Yu = function (e) {
    var t = new Hu(),
      r = new ju(),
      s = new qu(),
      n = new nt(e),
      a = new Aa();
    ((this._actions = {}),
      (this._actions[lt.blacklistedEventAction] = t),
      (this._actions[lt.denylistedEventAction] = t),
      (this._actions[lt.blacklistedFieldsAction] = r),
      (this._actions[lt.denylistedFieldsAction] = r),
      (this._actions[lt.whitelistedFieldsAction] = s),
      (this._actions[lt.allowlistedFieldsAction] = s),
      (this._actions[lt.sessionizationFieldsAction] = n),
      (this._actions[lt.clampingEventAction] = a));
  };
Yu.prototype.getAction = function (e) {
  return this._actions[e];
};
var Ti = "start",
  O_ = "value",
  D_ = function (e, t) {
    var r = -1,
      s = r;
    if (!d.isDefinedNonNull(t) || e.length === 0 || (d.isDefinedNonNull(e[0]) && t < e[0][Ti])) return r;
    if (e[e.length - 1][Ti] < t) s = e.length - 1;
    else
      for (var n = 0; n < e.length; n++) {
        var a = e[n][Ti];
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
  Ri = function () {
    Ie.apply(this, arguments);
  };
Ri.prototype = Object.create(Ie.prototype);
Ri.prototype.constructor = Ri;
Ri.prototype.constrainedValue = function (e, t) {
  var r = t ? t.precision : 0,
    s = t ? t.buckets : null;
  if (d.isDefinedNonNullNonEmpty(s)) {
    s = s.slice().sort(function (o, c) {
      return o[Ti] - c[Ti];
    });
    var n = D_(s, e),
      a = s[n];
    d.isDefinedNonNull(a) && (e = a[O_]);
  } else d.isNumber(e) && d.isNumber(r) && r > 0 && (e = Math.floor(e / r) * r);
  return e;
};
var N_ = "mt_serial_number",
  Cr = "exp",
  kn = "sn",
  at = function (e) {
    ((e = e || {}),
      (this._nextRotationTime = e.nextRotationTime || Number.POSITIVE_INFINITY),
      (this._storageKey = e.namespace || N_),
      (this._initialSerialNumber = e.initialSerialNumber || 0),
      (this._rotationPeriod = e.rotationPeriod || Number.POSITIVE_INFINITY));
  };
at.prototype.setDelegate = function (e) {
  d.attachDelegate(this, e);
};
at.prototype.localStorageObject = function () {
  return Q.localStorageObject();
};
at.prototype.getNextSerialNumber = function (e) {
  var t = this._storageKey,
    r = this._getCurrentSerialNumberData(t),
    s = r[kn];
  return (
    (e = d.isNumber(e) ? e : 1),
    (s = parseInt(s, 10)),
    isNaN(s) && (s = this._initialSerialNumber),
    (s = this._increaseSerialNumber(s, e)),
    (r[kn] = s),
    Q.saveObjectToStorage(this.localStorageObject(), this._storageKey, r),
    s
  );
};
at.prototype.resetSerialNumber = function () {
  var e = Q.objectFromStorage(this.localStorageObject(), this._storageKey);
  d.isDefinedNonNull(e) && this._resetSerialNumber(e[Cr]);
};
at.prototype.getTime = function () {
  return Date.now();
};
at.prototype._increaseSerialNumber = function (e, t) {
  return e + t;
};
at.prototype._getCurrentSerialNumberData = function (e) {
  var t = Q.objectFromStorage(this.localStorageObject(), e),
    r,
    s;
  for (
    t
      ? ((r = t[Cr]), (r = parseInt(r, 10)), (t[Cr] = r = isNaN(r) ? this._nextRotationTime : r))
      : (r = this._nextRotationTime - this._rotationPeriod);
    !t || this.getTime() >= r;
  )
    ((r = s = r + this._rotationPeriod), (t = this._resetSerialNumber(s)));
  return t;
};
at.prototype._resetSerialNumber = function (e) {
  var t = {};
  return (
    (t[Cr] = e),
    (t[kn] = this._initialSerialNumber),
    Q.saveObjectToStorage(this.localStorageObject(), this._storageKey, t),
    t
  );
};
var fc = "_",
  L_ = "mtTimestamp",
  ft = function () {
    (Ie.apply(this, arguments),
      (this._storage = this._constraintsInstance.system.environment.localStorageObject()),
      (this._precisionEndTimeCache = {}),
      (this._serialNumberGenerator = null));
  };
ft.prototype = Object.create(Ie.prototype);
ft.prototype.constructor = ft;
ft.prototype.constrainedValue = function (e, t, r, s) {
  var n = e;
  if (d.isNumber(e) && d.isObject(t) && d.isNumber(t.precision) && t.precision > 0) {
    var a = this._computePrecisionStartTime(e, t);
    ((this._serialNumberGenerator = new at({
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
ft.prototype._computeTimestamp = function (e, t) {
  return e + t;
};
ft.prototype._persistentStorageKey = function (e, t) {
  var r = e.namespace ? fc + e.namespace : "";
  return (e.storageKeyPrefix || L_) + r + fc + t;
};
ft.prototype._computePrecisionStartTime = function (e, t) {
  var r = t.precision;
  return Math.floor(e / r) * r;
};
var Ps = "_",
  M_ = "mtHash",
  U_ = "salt",
  x_ = 10,
  qe = function () {
    Ie.apply(this, arguments);
  };
qe.prototype = Object.create(Ie.prototype);
qe.prototype.constructor = qe;
function Gu(i, e) {
  var t = i.namespace ? Ps + i.namespace : "";
  return (i.storageKeyPrefix || M_) + t + Ps + U_ + Ps + e;
}
function F_() {
  for (var i = ""; i.length < x_;) i += _e.randomHexCharacter();
  return i;
}
function K_(i, e) {
  return [i, e]
    .map(function (t) {
      var r = 0;
      if (d.isDefinedNonNullNonEmpty(t))
        for (var s = 0; s < t.length; s++) {
          var n = t.charCodeAt(s);
          r = (r << 5) - r + n;
        }
      var a = Math.abs(r);
      return ((a = parseInt(a, 16)), _e.convertNumberToBaseAlphabet(a, _e.base62Alphabet));
    })
    .join("");
}
qe.prototype.constrainedValue = function (e, t, r, s) {
  return d.isDefinedNonNullNonEmpty(e)
    ? this._loadPlatformBasedSalt(t, s).then(function (n) {
        return K_(e, n);
      })
    : e;
};
qe.prototype.timeExpired = function (e) {
  return e ? e <= Date.now() : !1;
};
qe.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
qe.prototype._loadPlatformBasedSalt = function (e, t) {
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
qe.prototype._getSalt = function (e, t) {
  var r = this._retrieveSaltFromStorage(e, t),
    s = e.saltLifespan;
  if (!d.isDefinedNonNull(r) || this.timeExpired(r.expirationTime)) {
    var n = this._constraintsInstance.system.environment.localStorageObject(),
      a = F_();
    ((r = { salt: a, expirationTime: this.expirationTime(s) }), Q.saveObjectToStorage(n, Gu(e, t), r));
  }
  return r.salt;
};
qe.prototype._retrieveSaltFromStorage = function (e, t) {
  var r = this._constraintsInstance.system.environment.localStorageObject(),
    s = Q.objectFromStorage(r, Gu(e, t));
  return s;
};
var hi = { ID: "idGenerator", NUMBER: "numberDeres", TIME: "timeDeres", URL: "urlDeres", HASH: "hash" },
  zu = function (e) {
    ((this.actions = {}),
      (this.actions[hi.ID] = new oe(e)),
      (this.actions[hi.NUMBER] = new Ri(e)),
      (this.actions[hi.TIME] = new ft(e)),
      (this.actions[hi.URL] = new wt(e)),
      (this.actions[hi.HASH] = new qe(e)));
  };
zu.prototype.getAction = function (e) {
  return this.actions[e];
};
var Qu = function (e) {
  ((this._eventActions = new Yu(e)), (this._fieldActions = new zu(e)));
};
Qu.prototype.applyConstraints = function (e, t) {
  var r = e;
  if (t && !d.isEmptyObject(t)) {
    var s = [],
      n = this;
    if (t.fieldActions && !d.isEmptyObject(t.fieldActions)) {
      var a = !1,
        o = r;
      ((o = Object.keys(t.fieldActions).reduce(function (h, f) {
        var y = t.fieldActions[f];
        if (y) {
          var k = y.denylisted || y.blacklisted,
            W = y.treatmentType,
            ce = n._fieldActions.getAction(W);
          h = _n(h, f, !1, function (te, Pe, ai, mt) {
            if (k) (delete mt[Pe], (a = !0));
            else if (y.hasOwnProperty(Rr.OVERRIDE_FIELD_VALUE)) ((mt[Pe] = y[Rr.OVERRIDE_FIELD_VALUE]), (a = !0));
            else if (ce) {
              var gt = ce.performAction(te, f, r, y);
              ((mt[Pe] = gt),
                gt instanceof Promise &&
                  s.push(
                    gt.then(function (Hi) {
                      _n(o, f, !0, function (he, oi, bd, Td) {
                        bd === ai && (Td[oi] = Hi);
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
            c.forEach(function (f) {
              var y = n._eventActions.getAction(f);
              if (y) {
                var k = t.eventActions[f];
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
var V_ = "filters",
  B_ = "any",
  sr = "eventActions",
  As = "fieldActions";
function $_(i, e) {
  var t = i || {};
  return (H_(t, e), j_(t, e), t);
}
function H_(i, e) {
  i[sr] || (i[sr] = {});
  var t = i[sr],
    r = e[sr];
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
function j_(i, e) {
  (i[As] || (i[As] = {}),
    $u(i, e, As, function (t, r, s) {
      return t[s] && t[s].treatmentType === r[s].treatmentType ? t[s] : {};
    }));
}
var Zr = function (e) {
  ((this._constraintsInstance = e), (this.treatment = new Qu(e)));
};
Zr.prototype._combineTreatments = function (e, t, r) {
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
Zr.prototype.constraintsForEvent = function (e, t, r) {
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
        return (s.eventMatchesTreatment(e, c) && (o = $_(o, c)), o);
      }, null);
      return a;
    });
};
Zr.prototype.eventMatchesTreatment = function (e, t) {
  var r = t[V_];
  if (!d.isDefinedNonNull(r)) return !0;
  if (d.isString(r)) return r === B_;
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
      if (Yt[a]) return Yt[a](s, e, o);
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
var q_ = {
  constraintProfile: function (e) {
    return this.value("constraints.defaultProfile", e);
  },
  constraintProfiles: function (e) {
    return this.value("defaultTreatmentProfiles", e);
  },
};
function W_(i) {
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
function Y_(i) {
  return ((d.isFunction(i.constraintProfile) && d.isFunction(i.constraintProfiles)) || d.attachMethods(i, q_, i), i);
}
var es = function (e, t) {
  if (!W_(e)) throw new Error('The topic config is not a valid instance of "mt-client-config".');
  ((this._isInitialized = !1),
    (this._topicConfig = e),
    (this._constraintGenerator = null),
    (this.system = new p_()),
    d.setDelegates(this.system, t || {}));
};
es.prototype._getConstraintGenerator = function () {
  var e = this;
  return this._constraintGenerator
    ? Promise.resolve(this._constraintGenerator)
    : this._topicConfig.value("treatmentProfiles").then(function (t) {
        return (
          d.isDefinedNonNull(t) ? (e._constraintGenerator = new Zr(e)) : (e._constraintGenerator = new si(e)),
          e._constraintGenerator
        );
      });
};
es.prototype.constraintsForEvent = function (e, t) {
  var r = this;
  return this._getConstraintGenerator().then(function (s) {
    return s.constraintsForEvent(e, r._topicConfig, t);
  });
};
es.prototype.applyConstraintTreatments = function (e, t) {
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
const G_ = es;
var ws, Rs;
function Xu() {
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
function Ju() {
  return ["delegateApp", "hardwareBrand", "storeFrontCountryCode", "storeFrontHeader", "storeFrontLanguage"];
}
function z_() {
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
function Zu() {
  return (Rs || (Rs = Xu().concat(Ju())), Rs);
}
function Q_() {
  return (ws || (ws = Zu().concat(z_())), ws);
}
var X_ = d.attachDelegate,
  J_ = _e.cryptoRandomBase62String,
  ts = _e.exceptionString,
  yc;
function X(i) {
  if (!d.isDefinedNonNull(i)) throw new Error("A processor instance is required for creating BaseEventHandler.");
  ((this._processor = i),
    yc ||
      ((yc = !0),
      Zu().forEach(function (e) {
        X.prototype[e] = function (t) {
          var r;
          return (t && t.hasOwnProperty(e) ? (r = t[e]) : (r = this.environment()[e]()), r);
        };
      })));
}
X._className = "eventHandlers.base";
X.prototype.setDelegate = function (e) {
  return X_(this, e);
};
X.prototype.environment = function () {
  throw ts(X._className, "environment");
};
X.prototype.eventRecorder = function () {
  throw ts(X._className, "eventRecorder");
};
X.prototype.metricsData = function () {
  throw ts(X._className, "metricsData");
};
X.prototype.processMetricsData = function () {
  throw ts(X._className, "processMetricsData");
};
X.prototype.knownFields = function () {
  return Q_();
};
X.prototype.baseVersion = function () {
  return 1;
};
X.prototype.clientEventId = function (e) {
  return (e && e.clientEventId) || J_(!0);
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
var Z_ = { Base: X },
  eE = d.attachDelegate,
  ed = _e.exceptionString,
  tE = Q.localStorageObject,
  iE = Q.sessionStorageObject,
  mc;
function Re() {
  mc ||
    ((mc = !0),
    Xu().forEach(function (i) {
      Re.prototype[i] = function () {
        throw ed(Re._className, i);
      };
    }),
    Ju().forEach(function (i) {
      Re.prototype[i] = function () {};
    }));
}
Re._className = "system.environment";
Re.prototype.setDelegate = function (e) {
  return eE(this, e);
};
Re.prototype.connectionType = function () {
  throw ed(Re._className, "connectionType");
};
Re.prototype.dsId = function () {};
Re.prototype.localStorageObject = tE;
Re.prototype.sessionStorageObject = iE;
Re.prototype.platformIdentifier = function () {};
var rE = { Environment: Re };
function td() {
  this._eventData = {};
}
td.prototype.updateData = function () {
  d.extend.apply(null, [this._eventData].concat(Array.prototype.slice.call(arguments)));
};
var id = { MetricsData: td },
  rd = rE.Environment;
function tt() {
  rd.apply(this, arguments);
}
tt.prototype = Object.create(rd.prototype);
tt.prototype.constructor = tt;
tt.prototype.consumerId = function () {};
tt.prototype.consumerNs = function () {};
tt.prototype.isOffline = function () {};
tt.prototype.videoViewportHeight = function () {};
tt.prototype.videoViewportWidth = function () {};
var sE = d.attachDelegate,
  sd = _e.exceptionString,
  nd = "PlayActivityProcessor.system.eventRecorder",
  Ki = function () {};
Ki.prototype.setDelegate = function (e) {
  return sE(this, e);
};
Ki.prototype.recordEvent = function (e, t) {
  throw sd(nd, "recordEvent");
};
Ki.prototype.sendMethod = function () {
  throw sd(nd, "sendMethod");
};
Ki.prototype.flushUnreportedEvents = function (e) {};
var nE = xi("mt-metricskit-processor-play-activity"),
  aE = function () {
    ((this.environment = new tt()), (this.eventRecorder = new Ki()), (this.logger = nE));
  },
  ad = function (e) {
    this._processor = e;
  };
ad.prototype.applyFieldsMap = function (e, t) {
  return this._processor.config.value("fieldsMap").then(function (r) {
    return Qr.applyFieldsMap(e, t, r);
  });
};
var oE = function (e) {
    this.eventFields = new ad(e);
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
  fe = {
    ACTION_TYPE: "actionType",
    CONSUMER_ID: "consumerId",
    CONSUMER_NS: "consumerNs",
    DS_ID: "dsId",
    EVENT_TYPE: "eventType",
    EVENT_VERSION: "eventVersion",
    IS_OFFLINE: "isOffline",
    START_REASON_TYPE: "startReasonType",
    STOP_REASON_TYPE: "stopReasonType",
    VIDEO_VIEWPORT_HEIGHT: "videoViewportHeight",
    VIDEO_VIEWPORT_WIDTH: "videoViewportWidth",
  },
  St = {
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
  od = {
    ACTIVITY_TYPE: { PLAY: A.PLAY, SEEK: A.SEEK },
    ACTION_TYPE: { START: "start", STOP: "stop" },
    EVENT_TYPE: { PLAY_ACTIVITY: "playActivity", SEEK_ACTIVITY: "seekActivity" },
  },
  wa = { INCLUDES_START_POSITIONS: "includesStartPositions", INCLUDES_END_POSITIONS: "includesEndPositions" },
  z = function (e, t) {
    ((this._processor = e),
      (this._activityType = t),
      (this._startMetricsDataPromise = Promise.resolve(null)),
      (this._isStopped = !1));
  };
z.ACTIVITY_TYPE = od.ACTIVITY_TYPE;
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
d.extend(z.prototype, St);
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
var cE = d.isInteger,
  Vi = function (e, t, r) {
    ((this._date = new Date()),
      (this._position = t),
      this._validatePlaybackRate(e),
      (this._playbackRate = e),
      (this._logger = r));
  };
Object.defineProperties(Vi.prototype, {
  playbackRate: {
    get: function () {
      return this._playbackRate;
    },
  },
});
Vi.prototype.update = function (e, t) {
  ((this._date = new Date()), (this._position = t), this._validatePlaybackRate(e), (this._playbackRate = e));
};
Vi.prototype.estimatedTime = function (e) {
  var t;
  cE(e) ? (t = e) : (this._logger.error("VPAFKit error: position should be an integer"), (t = Math.round(e)));
  var r = t - this._position,
    s = this.playbackRate == 0 ? 1 : this.playbackRate,
    n = r / s;
  return this._date.getTime() + Math.round(n);
};
Vi.prototype._validatePlaybackRate = function (e) {
  e == 0 && this._logger.error("VPAFKit error: playbackRate should not be zero.");
};
var lE = d.attachDelegate,
  uE = d.extend,
  cd = d.isFunction,
  dE = d.isNumber,
  ld = id.MetricsData,
  ud = wa.INCLUDES_START_POSITIONS,
  hE = wa.INCLUDES_END_POSITIONS,
  V = function (e, t) {
    (ld.apply(this, arguments),
      (this._processor = e),
      (this._playlist = t),
      (this._playActivity = null),
      (this._playStartPlaylistItem = null),
      (this._seekActivity = null),
      (this._timeTracker = null),
      (this._shouldGenerateTransitions = !0));
  };
V.prototype = Object.create(ld.prototype);
V.prototype.constructor = V;
uE(V.prototype, St);
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
  return lE(this, e);
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
    var o = this._playlistItem(t, ud);
    o
      ? (n = this._playStarted
          .apply(this, [o].concat(Array.prototype.slice.call(arguments, 1)))
          .then(function () {
            a.shouldGenerateTransitions && (a._timeTracker = new Vi(e, t, a._processor.system.logger));
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
    var n = this._playlistItem(e, ud);
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
    n = this._playlistItem(e, hE);
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
    this._playlist && cd(this._playlist.getItem) && (r = this._playlist.getItem(e, t)),
    r || this._error("unable to get item from playlist"),
    r
  );
};
V.prototype._playlistItems = function (e, t) {
  var r = [];
  return (
    this._playlist && cd(this._playlist.getItems)
      ? (r = this._playlist.getItems(e, t))
      : this._error("unable to get items from playlist"),
    r
  );
};
V.prototype._relativePosition = function (e, t) {
  t = t || this._playlistItem(e);
  var r;
  return (t && dE(t.startOverallPosition) && (r = e - t.startOverallPosition + (t.startPosition || 0)), r);
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
                    f = h.startOverallPosition,
                    y = { eventTime: t._timeTracker ? t._timeTracker.estimatedTime(f) : null };
                  return t._playStopped(f, t.TYPE.AUTOMATIC, t.PLAY_STOP_REASON.TRANSITION, y).then(function () {
                    return t._playStarted(h, f, t.TYPE.AUTOMATIC, t.PLAY_START_REASON.TRANSITION, y);
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
var Se = function (e, t) {
  V.apply(this, arguments);
};
Se.prototype = Object.create(V.prototype);
Se.prototype.constructor = Se;
Object.defineProperty(Se.prototype, "shouldGenerateTransitions", {
  get: function () {
    return !1;
  },
  set: function () {
    this._error(
      'Changing "shouldGenerateTransitions" is not allowed in HLSRollItemsMediaActivityTracker. Please use correct play activity tracker if you need to automatically generate transition play activity events ',
    );
  },
});
Se.prototype.playStarted = function (e, t, r, s) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
Se.prototype.playStartedWithPlaybackRate = function (e, t, r, s, n) {
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
Se.prototype.jumpFromOverallPosition = function (e, t, r) {
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
Se.prototype.playStopped = function (e, t, r) {
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
Se.prototype.seekStarted = function (e, t, r, s) {
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
Se.prototype.seekStopped = function (e, t, r, s) {
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
Se.prototype._playlistItem = function (e) {
  var t;
  return (
    this._playlist &&
      d.isFunction(this._playlist.getItemForRollItem) &&
      (t = this._playlist.getItemForRollItem(e.start * 1e3, e.duration * 1e3)),
    t || this._error("unable to get item from playlist"),
    t
  );
};
Se.prototype._relativePosition = function (e, t) {
  var r;
  return d.isDefinedNonNull(t)
    ? (t && d.isNumber(t.startOverallPosition) && (r = e - t.startOverallPosition + (t.startPosition || 0)), r)
    : (this._error("please provide the active playlist item for calculating the relative position."), r);
};
var dd = id.MetricsData,
  Rt = function (e) {
    (dd.apply(this, arguments), (this._startOverallPosition = e), (this._startPosition = 0));
  };
Rt.prototype = new dd();
Rt.prototype.constructor = Rt;
Object.defineProperties(Rt.prototype, {
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
var Gt = function (e, t) {
  (Rt.apply(this, arguments), (this._duration = t));
};
Gt.prototype = new Rt();
Gt.prototype.constructor = Gt;
Object.defineProperties(Gt.prototype, {
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
Gt.prototype.containsOverallPosition = function (e) {
  return this.startOverallPosition <= e && this.endOverallPosition > e;
};
var ni = function () {};
ni.prototype.RANGE_OPTIONS = wa;
Object.defineProperties(ni.prototype, { eventData: { get: function () {} } });
ni.prototype.getItem = function (e, t) {};
ni.prototype.getItems = function (e, t) {};
var ue = function (e) {
  (ni.apply(this, arguments),
    (this._startPosition = e),
    (this._mainFeatureMetricsData = d.copyKeysAndValues.apply(
      null,
      [!1, !1, !1, null].concat(Array.prototype.slice.call(arguments, 1)),
    )),
    (this._rollItems = []));
};
ue.prototype = new ni();
ue.prototype.constructor = ue;
ue.prototype.setDelegate = function (e) {
  return d.attachDelegate(this, e);
};
ue.prototype.addRollInfoItems = function (e) {
  e &&
    e.length &&
    e.forEach(function (t) {
      this.addRollInfoItem(t);
    }, this);
};
ue.prototype.addRollInfoItem = function (e) {
  e && this.addRollItem(e.start * 1e3, e.duration * 1e3, e.metricsData);
};
ue.prototype.addRollItem = function (e, t) {
  var r = new Gt(e, t);
  (r.updateData.apply(r, Array.prototype.slice.call(arguments, 2)), this._addRollItem(r));
};
ue.prototype.updateMainFeatureMetricsData = function () {
  d.extend.apply(null, [this._mainFeatureMetricsData].concat(Array.prototype.slice.call(arguments)));
};
ue.prototype.getItemForRollItem = function (e, t) {
  var r = this._indexOfLastRollItemWithStartBeforePosition(e),
    s = this._rollItems[r];
  return d.isDefinedNonNull(s) && s.duration === t ? s : null;
};
ue.prototype.getItem = function (e, t) {
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
ue.prototype.getItems = function (e, t) {
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
ue.prototype._addRollItem = function (e) {
  if (e) {
    var t = this._insertionIndexForItemWithPosition(e.startOverallPosition);
    this._rollItems.splice(t, 0, e);
  }
};
ue.prototype._indexOfLastRollItemWithStartBeforePosition = function (e) {
  var t,
    r = this._rollItems[0];
  return (
    r && d.isInteger(e) && r.startOverallPosition <= e && (t = this._insertionIndexForItemWithPosition(e) - 1), t
  );
};
ue.prototype._insertionIndexForItemWithPosition = function (e) {
  for (var t = 0, r = this._rollItems.length; t < r;) {
    var s = Math.floor((t + r) / 2),
      n = this._rollItems[s];
    n.startOverallPosition > e ? (r = s) : (t = s + 1);
  }
  return t;
};
ue.prototype._mainFeatureItemWithStartOverallPosition = function (e) {
  var t = new Rt(e);
  return ((t.startPosition = this._featurePlayheadProgress(e)), t.updateData(this._mainFeatureMetricsData), t);
};
ue.prototype._featurePlayheadProgress = function (e) {
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
var Bi = function (e) {
  this._processor = e;
};
Bi.prototype.createTracker = function (e) {
  var t = new V(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Bi.prototype.createHLSRollItemsMediaActivityTracker = function (e) {
  var t = new Se(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Bi.prototype.createHLSVideoPlaylist = function (e) {
  var t = new ue(e);
  return (t.updateMainFeatureMetricsData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Bi.prototype.createMediaPlaylist = function (e) {
  return this.createHLSVideoPlaylist.apply(this, arguments);
};
var hd = _e.exceptionString,
  $i = function (e) {
    this._processor = e;
  };
$i.prototype.knownFields = function () {
  throw hd("PlayActivityEventHandler", "knownFields");
};
$i.prototype.eventType = function (i) {
  throw hd("PlayActivityEventHandler", "eventType");
};
$i.prototype.processMetricsData = function () {
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
      var c = Qr.processMetricsData(n, n.knownFields(), !0, e),
        l = {};
      return (
        Object.keys(c).forEach(function (h) {
          var f = c[h],
            y = Promise.resolve(f).then(function (k) {
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
var pE = d.attachDelegate,
  fE = d.extend,
  Z = function (e, t, r) {
    ($i.call(this, e), (this._defaultEventType = t), (this._reasonConstants = r), this._defaultActionType);
  };
Z.prototype = Object.create($i.prototype);
Z.prototype.constructor = Z;
fE(Z, od);
Object.defineProperties(Z.prototype, {
  TYPE: {
    get: function () {
      return St.TYPE;
    },
  },
  REASON: {
    get: function () {
      return this._reasonConstants;
    },
  },
});
Z.prototype.setDelegate = function (e) {
  return pE(this, e);
};
Z.prototype.knownFields = function () {
  var e = [fe.ACTION_TYPE, fe.EVENT_TYPE, fe.EVENT_VERSION];
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
var zt = function (e, t, r) {
  (Z.apply(this, arguments), (this._defaultActionType = Z.ACTION_TYPE.START));
};
zt.prototype = Object.create(Z.prototype);
zt.prototype.constructor = zt;
zt.prototype.metricsData = function (e, t, r, s) {
  var n = { position: e, overallPosition: t, startType: r, startReason: s },
    a = Array.prototype.slice.call(arguments, 4);
  return this.processMetricsData.apply(this, [n].concat(a));
};
var Qt = function (e, t, r) {
  (Z.apply(this, arguments), (this._defaultActionType = Z.ACTION_TYPE.STOP));
};
Qt.prototype = Object.create(Z.prototype);
Qt.prototype.constructor = Qt;
Qt.prototype.metricsData = function (e, t, r, s, n) {
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
var Ra = Z_.Base,
  ke = function (e) {
    Ra.apply(this, arguments);
  };
ke.prototype = Object.create(Ra.prototype);
ke.prototype.constructor = ke;
ke.prototype.environment = function () {
  return this._processor.system.environment;
};
ke.prototype.eventRecorder = function () {
  return this._processor.system.eventRecorder;
};
ke.prototype.knownFields = function () {
  var e = Ra.prototype
    .knownFields()
    .concat([
      fe.ACTION_TYPE,
      fe.CONSUMER_ID,
      fe.CONSUMER_NS,
      fe.DS_ID,
      fe.IS_OFFLINE,
      fe.VIDEO_VIEWPORT_HEIGHT,
      fe.VIDEO_VIEWPORT_WIDTH,
    ]);
  return e;
};
ke.prototype.consumerId = function (e) {
  var t = fe.CONSUMER_ID;
  return e && t in e ? e[t] : this.environment().consumerId();
};
ke.prototype.consumerNs = function (e) {
  var t = fe.CONSUMER_NS;
  return e && t in e ? e[t] : this.environment().consumerNs();
};
ke.prototype.isOffline = function (e) {
  var t = fe.IS_OFFLINE;
  return e && t in e ? e[t] : this.environment().isOffline();
};
ke.prototype.videoViewportHeight = function (e) {
  var t = fe.VIDEO_VIEWPORT_HEIGHT;
  return e && t in e ? e[t] : this.environment().videoViewportHeight();
};
ke.prototype.videoViewportWidth = function (e) {
  var t = fe.VIDEO_VIEWPORT_WIDTH;
  return e && t in e ? e[t] : this.environment().videoViewportWidth();
};
ke.prototype.metricsData = function () {
  var e = Array.prototype.slice.call(arguments),
    t = Qr.processMetricsData(this, this.knownFields(), !0, e);
  return t;
};
var yE = function (e) {
    ((this.base = new ke(e)),
      (this.playStart = new zt(e, Z.EVENT_TYPE.PLAY_ACTIVITY, St.PLAY_START_REASON)),
      (this.playStop = new Qt(e, Z.EVENT_TYPE.PLAY_ACTIVITY, St.PLAY_STOP_REASON)),
      (this.seekStart = new zt(e, Z.EVENT_TYPE.SEEK_ACTIVITY, St.SEEK_START_REASON)),
      (this.seekStop = new Qt(e, Z.EVENT_TYPE.SEEK_ACTIVITY, St.SEEK_STOP_REASON)));
  },
  Ca = function (e) {
    if (!d.isDefinedNonNull(e)) throw new Error("No delegate is provided to PlayActivityProcessor");
    ((this._initCalled = !1),
      (this._delegatePackage = e),
      (this.system = new aE()),
      (this.config = this._delegatePackage.config),
      (this.eventHandlers = new yE(this)),
      (this.utils = new oE(this)),
      (this.mediaActivityTracker = new Bi(this)));
  };
Ca.prototype.init = function () {
  var e = Promise.resolve();
  return (
    this._initCalled ||
      ((this._initCalled = !0),
      this._delegatePackage &&
        (d.setDelegates(this.eventHandlers, this._delegatePackage), d.setDelegates(this.system, this._delegatePackage)),
      Y_(this.config),
      (e = this._delegatePackage.init()),
      (this._constraints = new G_(this.config, { environment: this.system.environment }))),
    e
  );
};
Ca.prototype.cleanup = function () {
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
const pd = {
    "ac-3": "AC3",
    "mp4a.a5": "AC3",
    alac: "Apple Lossless",
    "ec-3": "EC3",
    "mp4a.a6": "EC3",
    flac: "Free Lossless",
    "mp4a.40.2": "AAC",
    "mp4a.40.5": "AAC",
    "mp4a.40.29": "AAC",
    "mp4a.40.34": "MP3",
    "mp4a.40.42": "AAC",
  },
  mE = /^[0-9]+\/JOC$/,
  gE = (i) => mE.test(i),
  vE = (i, e) => !!e && pd[i] === "EC3" && gE(e),
  bE = (i, e) => {
    const t = i?.toLowerCase() ?? "";
    return vE(t, e) ? "Atmos" : (pd[t] ?? i);
  },
  TE = ["dvh1.05.01", "dvhe.05.06"],
  _E = { PQ: "HDR", HLG: "HDR", SDH: "SDH" },
  EE = (i) => TE.indexOf(i) !== -1,
  SE = (i) => _E[i] ?? i,
  kE = (i, e) => (EE(i) ? "DolbyVision" : SE(e));
var Ve = ((i) => (
    (i.buffering = "buffering"),
    (i.idle = "idle"),
    (i.paused = "paused"),
    (i.playing = "playing"),
    (i.hlsMetadataPending = "hlsMetadataPending"),
    (i.hlsMetadataLoaded = "hlsMetadataLoaded"),
    i
  ))(Ve || {}),
  le = ((i) => (
    (i.bufferStart = "BUFFER_START"),
    (i.bufferStop = "BUFFER_STOP"),
    (i.exit = "EXIT"),
    (i.play = "PLAY"),
    (i.pause = "PAUSE"),
    (i.stop = "STOP"),
    (i.next = "NEXT"),
    (i.newItem = "NEW"),
    (i.hlsMetadataPending = "HLS_METADATA_PENDING"),
    (i.hlsMetadataLoaded = "HLS_METADATA_LOADED"),
    i
  ))(le || {});
const fd = "~~previous~~",
  Cs = {
    initial: "idle",
    states: {
      idle: {
        on: {
          PLAY: { target: "playing", context: { reason: "PLAY", manual: "MANUAL", fromInitialPlay: !0 } },
          HLS_METADATA_PENDING: {
            target: "hlsMetadataPending",
            context: { reason: "HLS_METADATA_PENDING", manual: "MANUAL", fromInitialPlay: !0 },
          },
        },
      },
      hlsMetadataPending: {
        on: {
          HLS_METADATA_LOADED: {
            target: "hlsMetadataLoaded",
            context: { reason: "HLS_METADATA_LOADED", manual: "MANUAL", fromInitialPlay: !0 },
          },
        },
      },
      hlsMetadataLoaded: {
        on: {
          PLAY: { target: "playing", context: { reason: "PLAY", manual: "MANUAL", fromInitialPlay: !0 } },
          HLS_METADATA_PENDING: {
            target: "hlsMetadataPending",
            context: { reason: "HLS_METADATA_PENDING", manual: "MANUAL" },
          },
        },
      },
      playing: {
        on: {
          BUFFER_START: {
            target: "buffering",
            context: { reason: "BUFFERING", manual: "AUTOMATIC", fromInitialPlay: fd },
          },
          EXIT: { target: "idle", context: { reason: "EXIT" } },
          PAUSE: { target: "paused", context: { reason: "PAUSE" } },
          STOP: { target: "idle", context: {} },
          NEXT: { target: "idle", context: { reason: "NEXT" } },
          NEW: { target: "idle", context: {} },
        },
      },
      paused: {
        on: {
          PLAY: { target: "playing", context: { reason: "UNPAUSE" } },
          NEW: { target: "idle", context: {} },
          EXIT: { target: "idle", context: { reason: "EXIT" } },
        },
      },
      buffering: {
        on: {
          BUFFER_STOP: { target: "playing", context: { reason: "BUFFERING", manual: "AUTOMATIC" } },
          EXIT: { target: "idle", context: { reason: "EXIT" } },
        },
      },
    },
  },
  Os = { manual: "UNKNOWN", reason: "UNKNOWN", fromInitialPlay: !1 };
class IE {
  currentState = Cs.initial;
  currentContext = Os;
  isAllowedTransition(e) {
    return this.getNextState(e) !== void 0;
  }
  transition(e, t = {}) {
    const r = this.getNextState(e);
    if (!r) return;
    T.debug(`[mk/activity/vpaf] Transitioning from ${this.currentState} to ${r.target} because ${e}`);
    const s = {};
    return (
      je(t, "manual") &&
        (t.manual !== void 0 ? (s.manual = t.manual ? "MANUAL" : "AUTOMATIC") : (s.manual = "UNKNOWN")),
      t.reason !== void 0 && (s.reason = t.reason),
      (this.currentContext = { ...Os, ...r.context, ...s, ...this.preservePreviousContext(r.context) }),
      (this.currentState = r.target),
      this.currentContext
    );
  }
  reset() {
    ((this.currentState = Cs.initial), (this.currentContext = Os));
  }
  getNextState(e) {
    return Cs.states[this.currentState].on[e];
  }
  preservePreviousContext(e) {
    const t = {};
    return (
      ["manual", "reason", "reasonType", "fromInitialPlay"].forEach((r) => {
        e[r] === fd && (t[r] = this.currentContext[r]);
      }),
      t
    );
  }
}
const gc = new Map([
    [S.playbackPlay, "play"],
    [S.hlsLevelLoaded, "hlsMetadataLoaded"],
    [S.playbackPause, "pause"],
    [S.playbackScrub, "scrub"],
    [S.playbackSeek, "seek"],
    [S.playbackSkip, "skip"],
    [S.playbackStop, "stop"],
    [S.playerExit, "exit"],
  ]),
  PE = {
    [P.EXITED_APPLICATION]: "EXIT",
    [P.FAILED_TO_LOAD]: "FAILURE",
    [P.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM]: "PLAY_OTHER",
    [P.NATURAL_END_OF_TRACK]: "COMPLETE",
    [P.PLAYBACK_PAUSED_DUE_TO_INACTIVITY]: "INACTIVITY",
    [P.SCRUB_BEGIN]: "SEEK",
    [P.TRACK_SKIPPED_BACKWARDS]: "SEEK",
    [P.TRACK_SKIPPED_FORWARDS]: "SEEK",
    [P.PLAYBACK_SUSPENDED]: "CLOSE_PLAYER",
    [ql.NEXT_ITEM]: "NEXT",
  },
  R = {
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
  aS = {
    TYPE: { MANUAL: "manual", AUTOMATIC: "automatic", UNKNOWN: R.UNKNOWN },
    ASSET_PLACEMENT: {
      PRE_ROLL: "preroll",
      POST_ROLL: "postroll",
      MID_ROLL: "midroll",
      FEATURE: "feature",
      CATCH_UP_TO_LIVE: "catchUpToLive",
    },
    PLAY_START_REASON: {
      PLAY: R.PLAY,
      PLAY_OTHER: R.PLAY_OTHER,
      UNPAUSE: "unpause",
      NEXT: R.NEXT,
      PREVIOUS: R.PREVIOUS,
      SEEK: R.SEEK,
      TRANSITION: R.TRANSITION,
      INTERRUPTION: R.INTERRUPTION,
      FOREGROUND: "foreground",
      FOCUS: "focus",
      BUFFERING: R.BUFFERING,
      UNKNOWN: R.UNKNOWN,
      SKIP_TO_LIVE: R.SKIP_TO_LIVE,
    },
    PLAY_START_REASON_TYPE: { SKIP_INTRO: R.SKIP_INTRO, SKIP_TO_LIVE: R.SKIP_TO_LIVE },
    PLAY_STOP_REASON: {
      COMPLETE: "complete",
      TRANSITION: R.TRANSITION,
      PLAY_OTHER: R.PLAY_OTHER,
      PAUSE: "pause",
      SEEK: R.SEEK,
      NEXT: R.NEXT,
      INTERRUPTION: R.INTERRUPTION,
      BACKGROUND: "background",
      EXIT: "exit",
      INACTIVITY: "inactivity",
      BUFFERING: R.BUFFERING,
      ERROR: "error",
      FAILURE: "failure",
      UNKNOWN: R.UNKNOWN,
      CLOSE_PLAYER: "closePlayer",
      SKIP_TO_LIVE: R.SKIP_TO_LIVE,
    },
    PLAY_STOP_REASON_TYPE: { SKIP_INTRO: R.SKIP_INTRO, SKIP_TO_LIVE: R.SKIP_TO_LIVE },
    SEEK_START_REASON: {
      NEXT: R.NEXT,
      PREVIOUS: R.PREVIOUS,
      LOCATION: R.LOCATION,
      INTERVAL: R.INTERVAL,
      PLAYHEAD: R.PLAYHEAD,
      SCRUB: R.SCRUB,
      UNKNOWN: R.UNKNOWN,
      SKIP_INTRO: R.SKIP_INTRO,
    },
    SEEK_STOP_REASON: {
      NEXT: R.NEXT,
      PREVIOUS: R.PREVIOUS,
      LOCATION: R.LOCATION,
      INTERVAL: R.INTERVAL,
      PLAYHEAD: R.PLAYHEAD,
      SCRUB: R.SCRUB,
      UNKNOWN: R.UNKNOWN,
      SEEK: R.SEEK,
      SKIP_INTRO: R.SKIP_INTRO,
    },
    SEEK_STOP_REASON_TYPE: { SKIP_INTRO: R.SKIP_INTRO },
  };
var re = ((i) => (
  (i.SEEK_STARTED = "seekStarted"),
  (i.SEEK_STOPPED = "seekStopped"),
  (i.PLAY_STARTED = "playStarted"),
  (i.PLAY_STOPPED = "playStopped"),
  i
))(re || {});
const In = "xp_amp_tv_vpaf",
  AE = "daf.xp.apple.com",
  wE = "com.apple.tv",
  RE = "web-tv-player",
  CE = "1.0",
  OE = "TV",
  DE = {
    [S.playbackPause]: le.pause,
    [S.playbackPlay]: le.play,
    [S.hlsLevelLoaded]: le.hlsMetadataLoaded,
    [S.playbackStop]: le.stop,
    [S.playerExit]: le.exit,
  },
  vc = { [Ae.pictureinpicture]: "pictureInPicture", [Ae.inline]: "foreground", _default: "foreground" };
function Or(i) {
  return Math.round(i * 1e3);
}
function NE() {
  return Array.isArray(navigator.languages)
    ? navigator.languages
    : typeof navigator.language == "string"
      ? [navigator.language]
      : [];
}
function yd(i) {
  return { delegatedPlayback: i.playbackTargetIsWireless ? "Airplay" : "None" };
}
function bc(i) {
  return i.seekReasonType === ye.Interval;
}
function Oa(i, e) {
  if (i == null) throw new Error(e);
}
function Ut(i, e) {
  Oa(i, `${e ?? "PAF"} Tracker: Attempted to track event without first calling createTracker()`);
}
function Ds(i, e) {
  Oa(i, `${e ?? "PAF"} Tracker: Attempted to create tracker without first calling configure()`);
}
function LE(i, e) {
  const t = i.defaultPlayable;
  if (t.type === "EbsEvent") return;
  let r = parseFloat(i.hlsMetadata["feature.duration"] ?? t.duration);
  for (const s of e) r += s.duration;
  return Or(r);
}
function md(i) {
  return i.defaultPlayable?.vpafMetrics?.extraType === "VideoSummary";
}
function Tc(i) {
  const e = { url: i.attributes.url, assetId: i?.hlsMetadata?.["feature.adam-id"] };
  return (
    i.isLinearStream || (e.assetPlacement = md(i) ? "VideoSummary" : "feature"),
    i.attributes.isAdultContent === !0 && (e.sensitiveContentType = "adult"),
    e
  );
}
function ME(i) {
  return i.map((e) => {
    const t = {
      start: e.start,
      duration: e.duration,
      metricsData: { assetPlacement: e.type.replace("-", ""), assetId: e["adam-id"], isSkippable: e.skippable },
    };
    return (
      (e["dynamic-id"] || e["dynamic-slot.data-set-id"]) &&
        (t.metricsData["data.dynamicSlot.dataSetId"] = e["dynamic-id"] ?? e["dynamic-slot.data-set-id"]),
      t
    );
  });
}
function gd(i) {
  const { currentAudioTrack: e, nowPlayingItem: t } = i;
  let r, s;
  e?.kind === "description"
    ? ((s = e?.language), (r = void 0))
    : ((s = void 0), (r = e?.language ?? t?.defaultPlayable?.primaryLocale?.locale));
  let n;
  if (t?.isLinearStream && e) {
    const a = Sf(e);
    sl(e) ? (n = sn.Home) : nl(e) ? (n = sn.Away) : a && (n = a);
  }
  return { audioLocale: r, audioDescriptionLocale: s, audioVariantId: n };
}
function UE(i) {
  const { language: e, kind: t } = i.currentTextTrack ?? {};
  return t === "captions"
    ? { subtitleLocale: void 0, closedCaptionLocale: e }
    : t === "subtitles"
      ? { subtitleLocale: e, closedCaptionLocale: void 0 }
      : { subtitleLocale: void 0, closedCaptionLocale: void 0 };
}
function _c(i, e) {
  return { ...BE(), ...$E(e), ...KE(e), ...VE(i), ...gd(i), ...UE(i), ...yd(i) };
}
function Ke(i, e) {
  if (e?.isLinearStream) {
    if (i.playingDate === void 0)
      throw new Error('VPAFTracker: The property `playingDate` is required on data for "linear" content');
    return i;
  }
  if (i.position === void 0) throw new Error('VPAFTracker: The property `position` is required on data "vod" content');
  return i;
}
function Oe(i, e) {
  if (i?.isLinearStream) {
    if (e.playingDate === void 0)
      throw new Error("VPAF: Can't report playback position for linear stream without playingDate value");
    return e.playingDate.getTime();
  }
  return Or(e.position ?? 0);
}
function nr(i) {
  return i.seekReasonType === ye.SkipIntro;
}
function xE(i) {
  return i.seekReasonType === ye.SkipToLiveManual || i.seekReasonType === ye.SkipToLiveAutomatic;
}
function FE(i) {
  if (i.endReasonType !== void 0) return PE[i.endReasonType];
}
function pi(i) {
  return { manual: i.userInitiated, reason: FE(i) };
}
function vd(i) {
  return {
    start: i.startTime,
    duration: i.endTime - i.startTime,
    metricsData: { assetId: i.id, assetPlacement: "catchUpToLive", isSkippable: !0 },
  };
}
function Ec(i) {
  const e = vd(i);
  return ((e.start = e.start / 1e3), (e.duration = e.duration / 1e3), e);
}
function KE(i) {
  return i.defaultPlayable.vpafMetrics;
}
function VE(i) {
  const e = i.videoContainerElement?.querySelector("video");
  return { videoViewportHeight: e?.clientHeight, videoViewportWidth: e?.clientWidth };
}
function BE() {
  return { downloadState: "streaming", playbackFocus: "foreground", topic: In };
}
function $E(i) {
  return { programmingType: i.isLinearStream ? "live" : "videoOnDemand" };
}
var HE = Object.defineProperty,
  jE = Object.getOwnPropertyDescriptor,
  ot = (i, e, t, r) => {
    for (var s = r > 1 ? void 0 : r ? jE(e, t) : e, n = i.length - 1, a; n >= 0; n--)
      (a = i[n]) && (s = (r ? a(e, t, s) : a(s)) || s);
    return (r && s && HE(e, t, s), s);
  };
const x = T.createChild("vpaf"),
  ze = "VPAF";
class ct {
  _currentItem;
  playActivityProcessor;
  currentKeyPlay;
  currentSkipItems;
  dispatcher;
  instance;
  isScrubbing = !1;
  isBuffering = !1;
  rollItemsTracker;
  scrubStopPosition;
  tracker;
  synchronizeTimeout;
  state;
  lastTrackedEvent = void 0;
  get requestedEvents() {
    return Array.from(gc.keys());
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  constructor() {
    this.state = new IE();
  }
  get currentItem() {
    return this._currentItem;
  }
  set currentItem(e) {
    ((this._currentItem = e), (this.currentSkipItems = e ? Ul(e) : void 0));
  }
  async configure(e) {
    if (((this.instance = e.instance), (this.dispatcher = e.services.dispatcher), !I.storekit.cid))
      try {
        await I.storekit.infoRefresh();
      } catch {}
    const t = e.services.utsAPIClient,
      r = NE(),
      s = {
        config: { configHostname: () => AE },
        environment: {
          app() {
            return wE;
          },
          appVersion() {
            return CE;
          },
          consumerId() {
            return I.storekit.cid;
          },
          consumerNs() {
            return OE;
          },
          isOffline() {
            return !1;
          },
          delegateApp() {
            return RE;
          },
          osLanguages() {
            return r;
          },
          resourceRevNum() {
            return j.app.build;
          },
          storeFrontCountryCode() {
            return t?.configuration?.userProps?.country ?? "";
          },
        },
      },
      n = new et(In, s);
    (n.eventRecorder.setProperties(In, { anonymous: !I.isAuthorized }),
      (this.playActivityProcessor = new Ca(n)),
      await this.playActivityProcessor.init(),
      this.setupListeners());
  }
  async cleanup() {
    ((this.tracker = void 0),
      (this.isScrubbing = !1),
      (this.scrubStopPosition = void 0),
      this.teardownListeners(),
      this.stopSynchronizing());
  }
  shouldTrackPlayActivity(e, t) {
    if (!t) return !1;
    const r = t.defaultPlayable;
    if (!r || !r.vpafMetrics) return !1;
    const s = DE[e];
    return s !== void 0 ? this.state.isAllowedTransition(s) : !0;
  }
  handleEvent(e, t, r) {
    if (!this.shouldTrackPlayActivity(e, r)) return;
    const s = gc.get(e);
    s !== void 0 && typeof this[s] == "function" && this[s](r, t);
  }
  async bufferStart(e, t) {
    if ((x.debug("VPAFTracker: handling bufferStart()"), !(await this.canTrackItem(e)))) {
      x.debug("VPAFTracker: aborting bufferStart, no tracker");
      return;
    }
    if (this.state.currentState !== Ve.playing) {
      x.debug("VPAFTracker: aborting bufferStart, not playing");
      return;
    }
    if (this.lastTrackedEvent?.reason === "seek") {
      x.debug("VPAFTracker: aborting bufferStart, after a seek");
      return;
    }
    const r = this.state.currentContext.fromInitialPlay,
      s = Oe(e, Ke(t, e));
    (this.state.transition(le.bufferStart),
      r
        ? x.debug("VPAFTracker: bufferStart() not tracking PLAY_STOPPED, it is from initial play")
        : await this.trackEvent(re.PLAY_STOPPED, s));
  }
  async bufferEnd(e, t) {
    if ((x.debug("VPAFTracker: handling bufferEnd()"), !(await this.canTrackItem(e)))) return;
    if (this.state.currentState !== Ve.buffering) {
      x.debug("VPAFTracker: aborting bufferEnd, not buffering");
      return;
    }
    if (this.lastTrackedEvent?.reason === "seek") {
      x.debug("VPAFTracker: aborting bufferEnd, after a seek");
      return;
    }
    const r = this.state.currentContext.fromInitialPlay,
      s = Oe(e, Ke(t, e));
    (this.state.transition(le.bufferStop),
      r
        ? x.debug("VPAFTracker: bufferEnd() not tracking PLAY_STARTED, it is from initial play")
        : await this.trackEvent(re.PLAY_STARTED, s));
  }
  async exit(e, t = {}) {
    (await this.canTrackItem(this.currentItem)) &&
      (x.debug("VPAFTracker.exit()"),
      this.state.transition(le.exit),
      await this.trackEvent(re.PLAY_STOPPED, Oe(void 0, Ke(t, t.item))),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async pause(e, t = {}) {
    if (!(await this.canTrackItem(e))) return;
    x.debug("VPAFTracker.pause()");
    const r = Oe(e, Ke(t, e)),
      s = t.endReasonType === ql.NEXT_ITEM ? le.next : le.pause;
    (this.state.transition(s, pi(t)), await this.trackEvent(re.PLAY_STOPPED, r));
  }
  async play(e, t = {}) {
    if (!(await this.canTrackItem(e))) return;
    if (e.isLinearStream && !t.playingDate) {
      (x.debug("VPAFTracker.play() - going to metadata pending state"),
        this.state.transition(le.hlsMetadataPending, pi(t)));
      return;
    }
    x.debug("VPAFTracker.play()");
    const r = Oe(e, { position: 0, ...t });
    (this.state.transition(le.play, pi(t)), await this.trackEvent(re.PLAY_STARTED, r));
  }
  async scrub(e, t = {}) {
    if (e === void 0 || t.position === void 0) return;
    const r = Oe(e, Ke(t, e));
    if (this.isScrubbing && t.endReasonType === void 0) {
      this.scrubStopPosition = r;
      return;
    }
    this.isScrubbing && this.scrubEnd(e, r);
  }
  async seek(e, t = {}) {
    if (
      e !== void 0 &&
      !(e.isLinearStream && (t.playingDate === void 0 || t.startPlayingDate === void 0)) &&
      !(!e.isLinearStream && (t.position === void 0 || t.startPosition === void 0))
    ) {
      if (xE(t)) return this.trackJumpToLive(e, t);
      if (e.currentKeyPlay) return this.currentKeyPlay ? this.trackJumpToKeyPlay(e, t) : this.trackEnterKeyPlay(e);
      if (this.currentKeyPlay) return this.trackExitKeyPlay(e, t);
      nr(t) || bc(t) ? await this.trackSeek(e, t) : await this.trackScrub(e, t);
    }
  }
  async skip(e, t = {}) {}
  async stop(e, t = {}) {
    if (!(await this.canTrackItem(e))) return;
    x.debug("VPAFTracker.stop()");
    const r = Oe(e, Ke(t, e));
    (this.state.transition(le.stop, pi(t)),
      await this.trackEvent(re.PLAY_STOPPED, r),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async lyricsPlay(e, t) {}
  async lyricsStop() {}
  async trackSeek(e, t) {
    const r = {},
      s = this.getSkipActionName(t.position);
    nr(t) && typeof s == "string" && (r.actionName = s);
    const n = { ...t, position: t.startPosition, playingDate: t.startPlayingDate };
    (await this.trackSeekStart(e, n, r), await this.trackSeekStop(e, t, r));
  }
  async trackEnterKeyPlay(e) {
    if ((x.debug("VPAFTracker.trackEnterKeyPlay"), !(await this.canTrackItem(e)))) return;
    (await this.createRollItemsTracker(e),
      this.assertRollItemsTracker(this.rollItemsTracker),
      (this.currentKeyPlay = Ec(e.currentKeyPlay)));
    const t = this.currentKeyPlay.start * 1e3;
    await this.rollItemsTracker.playStarted(
      t,
      this.rollItemsTracker.TYPE.MANUAL,
      this.rollItemsTracker.PLAY_START_REASON.PLAY,
      { ...this.currentKeyPlay },
    );
  }
  async trackExitKeyPlay(e, t) {
    (x.debug("VPAFTracker.trackExitKeyPlay"), this.assertRollItemsTracker(this.rollItemsTracker), Ut(this.tracker, ze));
    const r = Oe(e, Ke(t, e));
    (await this.rollItemsTracker.playStopped(
      r,
      this.rollItemsTracker.TYPE.MANUAL,
      this.rollItemsTracker.PLAY_STOP_REASON.PLAY_OTHER,
      this.currentKeyPlay,
    ),
      await this.tracker.playStarted(
        r,
        this.rollItemsTracker.TYPE.MANUAL,
        this.rollItemsTracker.PLAY_STOP_REASON.PLAY_OTHER,
      ),
      (this.currentKeyPlay = void 0));
  }
  async trackJumpToLive(e, t) {
    (x.debug("VPAFTracker.trackJumpToLive"), this.assertRollItemsTracker(this.rollItemsTracker));
    const r = Oe(e, Ke(t, e)),
      s = t.startPlayingDate.getTime(),
      n =
        t.seekReasonType === ye.SkipToLiveManual
          ? this.rollItemsTracker.TYPE.MANUAL
          : this.rollItemsTracker.TYPE.AUTOMATIC;
    (await this.rollItemsTracker.playStopped(s, n, this.rollItemsTracker.PLAY_STOP_REASON.SEEK, {
      ...this.currentKeyPlay,
      stopReasonType: this.rollItemsTracker.PLAY_STOP_REASON_TYPE.SKIP_TO_LIVE,
    }),
      (this.currentKeyPlay = void 0),
      await this.trackEvent(re.SEEK_STARTED, s, n, this.rollItemsTracker.PLAY_START_REASON.SKIP_TO_LIVE),
      await this.trackEvent(re.SEEK_STOPPED, r, n, this.rollItemsTracker.PLAY_START_REASON.SKIP_TO_LIVE),
      await this.trackEvent(re.PLAY_STARTED, r, n, this.rollItemsTracker.PLAY_START_REASON.SEEK, {
        startReasonType: this.rollItemsTracker.PLAY_START_REASON_TYPE.SKIP_TO_LIVE,
      }));
  }
  async trackJumpToKeyPlay(e, t) {
    (x.debug("VPAFTracker.trackJumpToKeyPlay"), this.assertRollItemsTracker(this.rollItemsTracker));
    const r =
        t.seekReasonType === ye.Automatic ? this.rollItemsTracker.TYPE.AUTOMATIC : this.rollItemsTracker.TYPE.MANUAL,
      s = (this.currentKeyPlay.start + this.currentKeyPlay.duration) * 1e3,
      n = Math.min(t.startPlayingDate.getTime(), s),
      a = Ec(e.currentKeyPlay),
      o = a.start * 1e3,
      c = this.rollItemsTracker.PLAY_STOP_REASON.NEXT;
    (await this.rollItemsTracker.playStopped(n, r, c, this.currentKeyPlay),
      await this.rollItemsTracker.playStarted(o, r, c, a),
      (this.currentKeyPlay = a));
  }
  async trackSeekStart(e, t, r = {}) {
    Ut(this.tracker, ze);
    const s =
        t.seekReasonType === ye.SkipIntro
          ? this.tracker.SEEK_START_REASON.SKIP_INTRO
          : this.tracker.SEEK_START_REASON.INTERVAL,
      n = Oe(e, Ke(t, e)),
      a = this.tracker.TYPE.MANUAL;
    if (this.state.currentState === Ve.playing) {
      const o = nr(t) ? { ...r, stopReasonType: this.tracker.PLAY_STOP_REASON_TYPE.SKIP_INTRO } : r;
      await this.trackEvent(re.PLAY_STOPPED, n, a, this.tracker.PLAY_STOP_REASON.SEEK, o);
    }
    await this.trackEvent(re.SEEK_STARTED, n, a, s, r);
  }
  async trackSeekStop(e, t, r = {}) {
    Ut(this.tracker, ze);
    const s = bc(t) ? this.tracker.SEEK_STOP_REASON.INTERVAL : this.tracker.SEEK_STOP_REASON.SKIP_INTRO,
      n = Oe(e, Ke(t, e)),
      a = this.tracker.TYPE.AUTOMATIC;
    if ((await this.trackEvent(re.SEEK_STOPPED, n, a, s, r), this.state.currentState === Ve.playing)) {
      const o = nr(t) ? { ...r, startReasonType: this.tracker.PLAY_START_REASON_TYPE.SKIP_INTRO } : r;
      await this.trackEvent(re.PLAY_STARTED, n, a, this.tracker.PLAY_START_REASON.SEEK, o);
    }
  }
  async trackScrub(e, t) {
    const r = e.isLinearStream ? t.playingDate.getTime() : Or(t.position),
      s = e.isLinearStream ? t.startPlayingDate.getTime() : Or(t.startPosition);
    (await this.scrubStart(e, s), await this.scrubEnd(e, r));
  }
  async scrubStart(e, t) {
    (await this.canTrackItem(e)) &&
      (Ut(this.tracker, ze),
      (this.isScrubbing = !0),
      (this.scrubStopPosition = t),
      this.state.currentState === Ve.playing &&
        (await this.trackEvent(
          re.PLAY_STOPPED,
          this.scrubStopPosition,
          this.tracker.TYPE.AUTOMATIC,
          this.tracker.PLAY_STOP_REASON.SEEK,
        )),
      await this.trackEvent(re.SEEK_STARTED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.SCRUB));
  }
  async scrubEnd(e, t) {
    (Ut(this.tracker, ze),
      await this.trackEvent(re.SEEK_STOPPED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_STOP_REASON.SCRUB),
      this.state.currentState === Ve.playing &&
        (await this.trackEvent(re.PLAY_STARTED, t, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.SEEK)),
      (this.isScrubbing = !1),
      (this.scrubStopPosition = void 0));
  }
  async trackEvent(e, t, r, s, n) {
    (Ut(this.tracker, ze),
      r === void 0 && (r = this.tracker.TYPE[this.state.currentContext.manual]),
      s === void 0 &&
        (s =
          e === re.PLAY_STARTED
            ? this.tracker.PLAY_START_REASON[this.state.currentContext.reason]
            : this.tracker.PLAY_STOP_REASON[this.state.currentContext.reason]),
      x.debug(`VPAFTracker.trackEvent(${e}, ${t}, ${r}, ${s})`, n),
      await this.tracker[e].call(this.tracker, Math.round(t), r, s, n),
      (this.lastTrackedEvent = { eventType: e, position: t, type: r, reason: s, namedArgs: n }));
  }
  async createTracker(e) {
    Ds(this.playActivityProcessor, ze);
    const { mediaActivityTracker: t } = this.playActivityProcessor,
      r = Tc(e),
      s = ME(_r(e)),
      n = e.defaultPlayable?.summarizedContent,
      a = md(e)
        ? {
            isSkippable: !0,
            ...(n
              ? {
                  featureAssetId: n.adamId ?? r.assetId,
                  featureCanonicalId: n.canonicalId,
                  featureReferenceId: n.contentId,
                  featureExternalId: n.externalId,
                }
              : {}),
          }
        : void 0;
    x.debug("VPAF: Creating HLS Playlist", r);
    const o = t.createHLSVideoPlaylist(0, r);
    return (
      x.debug("VPAF: adding roll items", s),
      o.addRollInfoItems(s),
      x.debug(`VPAFTracker.createTracker: creating new tracker for ${e?.id}`),
      (this.tracker = t.createTracker(o, ...(await this.getMappedPlaybackFields(e)), _c(this.instance, e), {
        overallLength: LE(e, s),
        featureAssetId: r.assetId,
        ...a,
      })),
      this.startSynchronizing(),
      this.tracker
    );
  }
  async createRollItemsTracker(e) {
    Ds(this.playActivityProcessor, ze);
    const t = Tc(e),
      r = this.playActivityProcessor.mediaActivityTracker.createHLSVideoPlaylist(0, t);
    return (
      e.keyPlayShelf.forEach((s) => {
        const n = vd(s);
        r.addRollItem(n.start, n.duration, n.metricsData);
        const a = r.getItemForRollItem(n.start, n.duration);
        a.startPosition = n.start;
      }),
      (this.rollItemsTracker = this.playActivityProcessor?.mediaActivityTracker.createHLSRollItemsMediaActivityTracker(
        r,
        ...(await this.getMappedPlaybackFields(e)),
        _c(this.instance, e),
        { extraType: "CatchUpToLive", featureAssetId: t.assetId, featureCanonicalId: e.defaultPlayable?.canonicalId },
      )),
      this.rollItemsTracker
    );
  }
  async onPlaybackStateChange(e, t) {
    const { state: r } = t,
      s = this.currentItem,
      n = {
        position: this.instance.currentPlaybackTime,
        playingDate: this.instance.currentPlayingDate,
        userInitiated: t.userInitiated ?? !1,
      },
      a = `PlaybackStates.${U[t.oldState]}`,
      o = `PlaybackStates.${U[t.state]}`;
    (x.debug(`onPlaybackStateChange: ${a} -> ${o}`, n),
      r === U.waiting
        ? ((this.isBuffering = !0),
          x.debug("VPAFTracker.onPlaybackStateChange: triggering bufferStart()", n),
          await this.bufferStart(s, n))
        : r === U.playing
          ? (this.isBuffering || this.state.currentState === Ve.buffering) &&
            ((this.isBuffering = !1),
            x.debug("VPAFTracker.onPlaybackStateChange: triggering bufferEnd()", n),
            await this.bufferEnd(s, n))
          : r !== U.stalled &&
            (x.debug("VPAFTracker.onPlaybackStateChange: resetting isBuffering=false"), (this.isBuffering = !1)));
  }
  async handleLevelUpdated(e, t) {
    x.debug("VPAFTracker.handleLevelUpdated()", t);
    const { audioCodec: r, audioChannelCount: s, videoRange: n, videoCodec: a } = t.level;
    if (!r && !(n && a)) return;
    const o = {};
    (r && (o.audioFormat = bE(r, s)),
      n && a && (o.videoColorRange = kE(a, n)),
      this.tracker?.updateData(o),
      this.rollItemsTracker?.updateData(o),
      this.state?.currentState === Ve.hlsMetadataPending &&
        (x.debug("VPAF: HLS metadata loaded", t),
        this.state.transition(le.hlsMetadataLoaded, pi(t)),
        await this.play(this.currentItem, t)));
  }
  handleAudioTrackChange() {
    if (this.tracker === void 0 || this.instance === void 0) return;
    const e = gd(this.instance);
    e && (x.debug("Updating AudioData", e), this.tracker.updateData(e), this.rollItemsTracker?.updateData(e));
  }
  handleForcedTextTrackChange(e, { textTrack: t }) {
    const r = { forcedSubtitleLocale: t?.language };
    (this.tracker?.updateData(r), this.rollItemsTracker?.updateData(r));
  }
  handlePresentationModeChange(e, { mode: t }) {
    const r = { playbackFocus: vc[t] ?? vc._default };
    (this.tracker?.updateData(r), this.rollItemsTracker?.updateData(r));
  }
  handleTargetWirelessChange() {
    if (this.instance !== void 0) {
      const e = yd(this.instance);
      (this.tracker?.updateData(e), this.rollItemsTracker?.updateData(e));
    }
  }
  handleTextTrackChange() {
    const { tracker: e } = this;
    if (e === void 0) return;
    const t = this.instance?.currentTextTrack;
    if (!t || (t.kind !== "captions" && t?.kind !== "subtitles")) return;
    const r = t.language === "" ? void 0 : t.language,
      s = {
        closedCaptionLocale: t.kind === "captions" ? r : void 0,
        subtitleLocale: t.kind === "subtitles" ? r : void 0,
      };
    (e.updateData(s), this.rollItemsTracker?.updateData(s));
  }
  handleNowPlayingItemDidChange(e, t) {
    const { item: r } = t;
    r ||
      (x.debug("handleNowPlayingItemDidChange: calling exit and clearing currentItem"),
      this.state.transition(le.exit),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async canTrackItem(e) {
    return e === void 0 || e.defaultPlayable === void 0
      ? !1
      : (this.currentItem?.id !== e.id &&
          (this.state.transition(le.newItem), (this.currentItem = e), await this.createTracker(e)),
        this.tracker !== void 0);
  }
  getSkipActionName(e) {
    return (this.currentSkipItems ?? []).find((r) => r.target === e)?.label;
  }
  setupListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.subscribe(b.audioTrackChanged, this.handleAudioTrackChange),
      this.dispatcher.subscribe(b.textTrackChanged, this.handleTextTrackChange),
      this.dispatcher.subscribe(b.forcedTextTrackChanged, this.handleForcedTextTrackChange),
      this.dispatcher.subscribe(b.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.subscribe(b.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.subscribe(S.hlsLevelUpdated, this.handleLevelUpdated),
      this.dispatcher.subscribe(b.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange),
      this.dispatcher.subscribe(b.presentationModeDidChange, this.handlePresentationModeChange));
  }
  teardownListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.unsubscribe(b.audioTrackChanged, this.handleAudioTrackChange),
      this.dispatcher.unsubscribe(b.textTrackChanged, this.handleTextTrackChange),
      this.dispatcher.unsubscribe(b.forcedTextTrackChanged, this.handleForcedTextTrackChange),
      this.dispatcher.unsubscribe(b.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.unsubscribe(b.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.unsubscribe(S.hlsLevelUpdated, this.handleLevelUpdated),
      this.dispatcher.unsubscribe(b.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange),
      this.dispatcher.unsubscribe(b.presentationModeDidChange, this.handlePresentationModeChange));
  }
  startSynchronizing() {
    this.synchronizeTimeout === void 0 && (this.synchronizeTimeout = setInterval(this.synchronize, 6e4));
  }
  stopSynchronizing() {
    this.synchronizeTimeout !== void 0 && (clearInterval(this.synchronizeTimeout), (this.synchronizeTimeout = void 0));
  }
  synchronize() {
    if (this.tracker === void 0 || this.instance === void 0 || this.currentItem === void 0) {
      this.stopSynchronizing();
      return;
    }
    const e = this.state.currentState === Ve.paused,
      { playbackRate: t, currentPlaybackTime: r } = this.instance,
      s = e ? 0 : t,
      n = Math.round(r * 1e3);
    (x.debug(`VPAF: synchronize rate: ${s} and current time: ${n}`), this.tracker.synchronize(s, n));
  }
  assertRollItemsTracker(e) {
    Oa(e, "VPAFTracker: Attempted to track roll item event before `trackerEnterKeyPlay` was called");
  }
  async getMappedPlaybackFields(e) {
    Ds(this.playActivityProcessor, ze);
    const { utils: t } = this.playActivityProcessor,
      r = e.defaultPlayable,
      s = await t.eventFields.applyFieldsMap(r, "utsVpafPlayable"),
      n = await t.eventFields.applyFieldsMap(e.attributes, "utsVpafContent");
    return [s, n];
  }
}
ot([_()], ct.prototype, "onPlaybackStateChange", 1);
ot([_()], ct.prototype, "handleLevelUpdated", 1);
ot([_()], ct.prototype, "handleAudioTrackChange", 1);
ot([_()], ct.prototype, "handleForcedTextTrackChange", 1);
ot([_()], ct.prototype, "handlePresentationModeChange", 1);
ot([_()], ct.prototype, "handleTargetWirelessChange", 1);
ot([_()], ct.prototype, "handleTextTrackChange", 1);
ot([_()], ct.prototype, "handleNowPlayingItemDidChange", 1);
ot([_()], ct.prototype, "synchronize", 1);
const be = T.createChild("ctp"),
  Da = class {
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
    requestedEvents = [b.playInitiated, b.mediaCanPlay];
    async configure(e) {
      ((this.instance = e.instance),
        (this.rtcTracker = e.services.playActivity?.getTrackerByType(tu)),
        (this._isConfigured = !0));
    }
    handleEvent(e, t, r) {
      e === b.playInitiated
        ? (be.debug("ClickToPlayTracker.handleEvent", e, t), this.registerPlay(t.item, t.timestamp))
        : e === b.mediaCanPlay &&
          (be.debug("ClickToPlayTracker.handleEvent", e, t), this.trackPlay(this.instance.nowPlayingItem, t.timestamp));
    }
    registerPlay(e, t) {
      if (!this.active || e === void 0) {
        be.debug("Not registring play: inactive");
        return;
      }
      if (t === void 0) {
        be.warn(`registerPlay timestamp value for item ${e.id} is missing, discarding`);
        return;
      }
      return (
        this.tracking !== void 0 && be.warn(`Replacing item ${this.tracking.item.id} with item ${e.id}`),
        be.debug(`Registering ${e.id} initiated at ${t}`),
        (this.tracking = { item: e, initiatedTimestamp: t }),
        this.tracking
      );
    }
    trackPlay(e, t) {
      if (!this.active || e === void 0) {
        be.debug("Not tracking play: inactive");
        return;
      }
      if (this.tracking === void 0) {
        be.warn("ClickToPlayTracker.trackPlay called without a registered tracking item");
        return;
      }
      const r = t ?? Date.now(),
        s = this.tracking.initiatedTimestamp,
        n = r - s;
      if ((be.debug(`trackPlay: item=${e.id}, initiated=${s}, started=${r}, timestampDiff=${n}`), s > r)) {
        be.warn("Initiated timestamp is not before started timestamp, ignoring");
        return;
      }
      const a = this.getReportingAgent(e);
      if (a === void 0) {
        be.warn(`No reporting agent for ${e.id}, discarding`);
        return;
      }
      return (
        be.info(`Reporting playback success after ${n}ms`),
        a.issueReportingEvent(Da.EVENT_ID, {
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
        be.warn("Could not get RTCReportingAgent from RTCStreamingTracker service");
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
        be.warn(`RTCReportingAgent is not associated with item ${e.id}`);
        return;
      }
      return this.rtcTracker.reportingAgent;
    }
  };
let Ns = Da;
is(Ns, "EVENT_ID", 4101);
function qE() {
  const i = {};
  i.version = Ml();
  const e = Ol();
  ((i.hlsJSURL = e.hls),
    (i.rtcJSURL = e.rtc),
    (i.hlsJSVersion = window.Hls !== void 0 ? window.Hls.version : "not-loaded"));
  const t = oT();
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
    (i.devFlags = Object.entries(mi).reduce(function (s, [n, a]) {
      return { ...s, [n]: a.value };
    }, {})),
    i
  );
}
const oS = {
  get info() {
    return qE();
  },
  ...mi,
};
export {
  S as $,
  Ys as A,
  je as B,
  Yh as C,
  Et as D,
  b as E,
  Bh as F,
  _i as G,
  Dd as H,
  Wh as I,
  _t as J,
  Qh as K,
  Gh as L,
  Si as M,
  Nr as N,
  QE as O,
  ht as P,
  jl as Q,
  pt as R,
  ye as S,
  wn as T,
  dt as U,
  ql as V,
  Vr as W,
  g as X,
  $ as Y,
  u as Z,
  T as _,
  Lt as a,
  ve as a0,
  XE as a1,
  uh as a2,
  xg as a3,
  ZE as a4,
  j as a5,
  I as a6,
  Hh as a7,
  jh as a8,
  qh as a9,
  Ns as aA,
  rS as aB,
  cu as aC,
  tS as aD,
  Xe as aE,
  Av as aF,
  JE as aa,
  Uh as ab,
  ie as ac,
  N as ad,
  Mc as ae,
  _ as af,
  eS as ag,
  Y as ah,
  qb as ai,
  aS as aj,
  et as ak,
  Ca as al,
  gc as am,
  re as an,
  Ut as ao,
  yd as ap,
  Ds as aq,
  bc as ar,
  PE as as,
  Tp as at,
  NE as au,
  Or as av,
  wd as aw,
  Ld as ax,
  de as ay,
  tu as az,
  m as b,
  P as c,
  ta as d,
  Cd as e,
  we as f,
  Ml as g,
  Jm as h,
  ae as i,
  oT as j,
  sS as k,
  iS as l,
  p as m,
  Ne as n,
  U as o,
  Be as p,
  Ae as q,
  me as r,
  GE as s,
  nS as t,
  Ol as u,
  oS as v,
  gi as w,
  zh as x,
  ji as y,
  zE as z,
};
