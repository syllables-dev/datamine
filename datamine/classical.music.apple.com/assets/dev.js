var md = Object.defineProperty;
var gd = (r, e, t) => (e in r ? md(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t));
var c = (r, e, t) => (gd(r, typeof e != "symbol" ? e + "" : e, t), t);
import { _ as Da } from "./main.js";
function vd(r, e = 1) {
  if (typeof Array.prototype.flat == "function") return Array.prototype.flat.call(r, e);
  if (r == null) throw new TypeError("Cannot convert undefined or null to object");
  Array.isArray(r) || (r = Array.from(r));
  function t(i, s) {
    return s <= 0
      ? i.slice()
      : Array.prototype.reduce.call(
          i,
          function (n, a) {
            return Array.isArray(a) ? n.concat(t(a, s - 1)) : [...n, a];
          },
          [],
        );
  }
  return t(r, e);
}
function mr(r) {
  return vd(r, 1 / 0);
}
function _c(...r) {
  const e = mr(r)
    .map((i) => (i instanceof URL ? i.pathname : i))
    .filter((i) => typeof i == "string" && i.trim().length !== 0);
  if (e.length === 0) return "";
  let t = e[0];
  for (let i = 1; i < e.length; i++) t = t.replace(/[/]+$/, "") + "/" + e[i].replace(/^[/]+/, "");
  return (/^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")), t);
}
function bd(r) {
  r instanceof URL && (r = r.pathname);
  const e = [],
    t = r.lastIndexOf("#");
  t !== -1 && (e.unshift(r.slice(t)), (r = r.slice(0, t)));
  const i = r.lastIndexOf("?");
  return (
    i !== -1 && (e.unshift(r.slice(i)), (r = r.slice(0, i))),
    [...r.split(new RegExp("(?<![/:]+)\\/+")), ...e].filter((s) => s.trim().length !== 0)
  );
}
const Tc = typeof FastBoot < "u" ? FastBoot.require("buffer").Buffer : typeof window < "u" ? window.Buffer : Buffer;
function Lt(r) {
  const e = new Map();
  return function (...t) {
    const i = _d(t);
    if (e.has(i)) return e.get(i);
    const s = r(...t);
    return (e.set(i, s), s);
  };
}
function _d(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const i = r[t];
    if (typeof i == "object")
      try {
        e.push(JSON.stringify(i));
      } catch (s) {
        e.push(`[object ${Object.prototype.toString.call(i)}]`);
      }
    else e.push(String(i));
  }
  return e.join("|");
}
function Li() {
  let r = ss() + ss();
  for (; r.length < 16;) r += ss();
  return r.slice(0, 16);
}
function ss() {
  return Math.random().toString(16).substring(2);
}
function Sr(r) {
  if (r === void 0) return !1;
  const e = typeof r == "string" ? r : r.id;
  return /^[a|i|l|p]{1}\.[a-zA-Z0-9-]+$/.test(e);
}
const Td = Lt((r) => /^(a\.)?[a-zA-Z0-9]+$/.test(r));
function er() {
  var r, e;
  return (
    ((e = (r = globalThis == null ? void 0 : globalThis.process) == null ? void 0 : r.versions) == null
      ? void 0
      : e.node) !== void 0 || typeof (globalThis == null ? void 0 : globalThis.FastBoot) < "u"
  );
}
function wt() {
  return er();
}
const Ec = Lt(er() ? (r) => Tc.from(r, "base64").toString("binary") : (r) => window.atob(r));
Lt(er() ? (r) => Tc.from(r).toString("base64") : (r) => window.btoa(r));
const Ed = (r, e = 250, t = { isImmediate: !1 }) => {
    let i;
    return function (...s) {
      const n = this,
        a = function () {
          ((i = void 0), t.isImmediate || r.apply(n, s));
        },
        o = t.isImmediate && i === void 0;
      (i !== void 0 && clearTimeout(i), (i = setTimeout(a, e)), o && r.apply(n, s));
    };
  },
  Pn = (r, e) => !!r && !!e && [].every.call(r, (t, i) => t === e[i]);
function Sd(r) {
  var e;
  if (!r || (r.startsWith("http") && !r.includes("?"))) return {};
  try {
    const t = (e = r.split("?")[1]) != null ? e : r;
    return Id(t, "&", decodeURIComponent);
  } catch (t) {
    return {};
  }
}
function Id(r, e = "&", t = (i) => i) {
  return typeof r != "string"
    ? {}
    : r
        .split(e)
        .map((i) => i.trim().split("=", 2))
        .reduce((i, s) => {
          const [n, a] = s;
          return ((n === "" && a === void 0) || ((i[t(n)] = t(a)), a === void 0 && (i[t(n)] = void 0)), i);
        }, {});
}
const Na = () => {},
  rt = (r) => {
    r.then(Na, Na);
  },
  qt = Lt((r) => {
    const e = Ec(r);
    return An(e);
  });
function kd(r = []) {
  return Array.isArray(r) ? r : [r];
}
const An = Lt((r) => {
    const e = r.length,
      t = new ArrayBuffer(e),
      i = new Uint8Array(t);
    for (let s = 0; s < e; s++) i[s] = r.charCodeAt(s);
    return i;
  }),
  Sc = Lt((r) => {
    const e = r.length,
      t = new ArrayBuffer(e * 2),
      i = new Uint16Array(t);
    for (let s = 0; s < e; s++) i[s] = r.charCodeAt(s);
    return i;
  }),
  ot = Lt((r) => {
    let e,
      t,
      i,
      s,
      n,
      a,
      o,
      l = 0;
    const u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let d = "";
    for (; l < r.length;)
      ((e = r[l++]),
        (t = l < r.length ? r[l++] : Number.NaN),
        (i = l < r.length ? r[l++] : Number.NaN),
        (s = e >> 2),
        (n = ((e & 3) << 4) | (t >> 4)),
        (a = ((t & 15) << 2) | (i >> 6)),
        (o = i & 63),
        isNaN(t) ? (a = o = 64) : isNaN(i) && (o = 64),
        (d += u.charAt(s) + u.charAt(n) + u.charAt(a) + u.charAt(o)));
    return d;
  });
function Qe(r, e) {
  return Object.prototype.hasOwnProperty.call(Object(r), e);
}
function mt(r) {
  const t = Object.prototype.toString.call(r).toLowerCase().slice(8, -1);
  switch (t) {
    case "set":
      return new Set([...r].map((i) => mt(i)));
    case "map":
      return new Map([...r].map(([i, s]) => [mt(i), mt(s)]));
    case "date":
      return new Date(r.getTime());
    case "regexp": {
      const i = r,
        s =
          typeof i.flags == "string"
            ? i.flags
            : [
                (i.global && "g") || void 0,
                (i.ignoreCase && "i") || void 0,
                (i.multiline && "m") || void 0,
                (i.sticky && "y") || void 0,
                (i.unicode && "u") || void 0,
              ]
                .filter((n) => n !== void 0)
                .join("");
      return RegExp(r.source, s);
    }
    case "arraybuffer": {
      const i = r;
      if (typeof i.slice == "function") return i.slice(0);
      {
        const s = new r.constructor(i.byteLength);
        return (new Uint8Array(s).set(new Uint8Array(i)), s);
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
      const i = r,
        s = i.constructor;
      return new s(mt(i.buffer), i.byteOffset, t === "dataview" ? i.byteLength : i.length);
    }
    case "array":
    case "object": {
      const i = Array.isArray(r) ? [] : {};
      for (const s in r) Qe(r, s) && (i[s] = mt(r[s]));
      return i;
    }
    default:
      return r;
  }
}
function Pd(r, e) {
  return e.split(".").reduce((t, i) => {
    if (t !== void 0) return t[i];
  }, r);
}
function Ad(r) {
  if (typeof r != "object") throw new TypeError("Source is not an Object");
  for (const e in r) if (Qe(r, e)) return !1;
  return !0;
}
function wd(r, e, t) {
  return e.split(".").reduce((i, s, n, a) => {
    const o = n === a.length - 1,
      l = Qe(i, s),
      u = i[s] instanceof Object,
      d = i[s] === null;
    if (!o && l && (!u || d))
      throw new TypeError(`Value at ${a.slice(0, n + 1).join(".")} in keypath is not an Object.`);
    return o ? ((i[s] = t), r) : l ? i[s] : (i[s] = {});
  }, r);
}
function Rd(r, e, t = !1) {
  return (
    t && (r = Object.keys(r).reduce((i, s) => ((i[r[s]] = s), i), {})),
    Object.keys(r).reduce((i, s) => {
      const n = r[s],
        a = typeof n == "function" ? n() : Pd(e, n);
      return (a && wd(i, s, a), i);
    }, {})
  );
}
function vt(r = "", e = document.cookie) {
  const t = e.match(new RegExp(`(?:^|;\\s*)${r}=([^;]*)`));
  if (t) return t[1];
}
function Cd(r = "", e = document.cookie) {
  const t = new RegExp(`(?:^|;\\s*)${r}=([^;]*)`, "g");
  return (e.match(t) || []).map((i) => i.replace(new RegExp(`^;?\\s*${r}=`), ""));
}
function wn(r, e, t = "", i = 14, s, n) {
  const a = new Date();
  ((s = s != null ? s : window), (n = n != null ? n : /\./.test(s.location.hostname) ? s.location.hostname : ""));
  const o = n.length > 0 ? `domain=${n}; ` : "";
  a.setTime(a.getTime() + i * 24 * 60 * 60 * 1e3);
  let l = "";
  (s.location.protocol === "https:" && (l = "; secure"),
    (s.document.cookie = `${r}=${e}; expires=${a.toUTCString()}; ${o}path=${t}${l}`));
}
function Ms(r, e, t) {
  wn(r, "", "/", 0, e, t);
}
function Ic() {
  let r = !1;
  try {
    r = typeof sessionStorage < "u";
  } catch (e) {}
  return r;
}
function Rn() {
  let r;
  return (Ic() && (r = sessionStorage), r);
}
function Cn() {
  let r = !1;
  try {
    r = typeof localStorage < "u";
  } catch (e) {}
  return r;
}
function ze() {
  let r;
  return (Cn() && (r = localStorage), r);
}
function Od(r) {
  if (!Cn()) return;
  const e = ze().getItem(r);
  if (e !== null) return e;
}
function Dd(r) {
  const e = Od(r);
  if (e)
    try {
      return JSON.parse(e);
    } catch (t) {
      return;
    }
}
function Nd(r, e) {
  if (Cn()) {
    if (!e) {
      ze().setItem(r, "");
      return;
    }
    ze().setItem(r, JSON.stringify(e));
  }
}
class Mt {
  constructor(e = [], t) {
    c(this, "dispatchNamespace");
    c(this, "_eventRegistry", {});
    (e.forEach((i) => {
      this._eventRegistry[i] = [];
    }),
      t && t.namespace && (this.dispatchNamespace = `com.apple.${t.namespace}`),
      this.shouldStorageDispatch &&
        ((this._handleGlobalStorageEvent = this._handleGlobalStorageEvent.bind(this)),
        window.addEventListener("storage", this._handleGlobalStorageEvent)));
  }
  get shouldStorageDispatch() {
    return typeof window < "u" && Ic() && this.dispatchNamespace;
  }
  addEventListener(e, t) {
    Array.isArray(this._eventRegistry[e]) && this._eventRegistry[e].push(t);
  }
  dispatchEvent(e, t) {
    Array.isArray(this._eventRegistry[e]) && this._eventRegistry[e].forEach((i) => i(t));
  }
  dispatchDistributedEvent(e, t) {
    var i;
    if ((this.dispatchEvent(e, t), this.shouldStorageDispatch)) {
      const s = `${this.dispatchNamespace}:${e}`;
      (i = Rn()) == null || i.setItem(s, JSON.stringify(t));
    }
  }
  removeEventListener(e, t) {
    if (Array.isArray(this._eventRegistry[e])) {
      const i = this._eventRegistry[e].indexOf(t);
      this._eventRegistry[e].splice(i, 1);
    }
  }
  _handleGlobalStorageEvent(e) {
    var t;
    if (this.dispatchNamespace && (t = e.key) != null && t.startsWith(`${this.dispatchNamespace}:`)) {
      const i = e.key.substring(this.dispatchNamespace.length + 1);
      this.dispatchEvent(i, JSON.parse(e.newValue));
    }
  }
}
let Ld = function (e) {
  return Md(e) && !Ud(e);
};
function Md(r) {
  return !!r && typeof r == "object";
}
function Ud(r) {
  let e = Object.prototype.toString.call(r);
  return e === "[object RegExp]" || e === "[object Date]" || Kd(r);
}
let xd = typeof Symbol == "function" && Symbol.for,
  Fd = xd ? Symbol.for("react.element") : 60103;
function Kd(r) {
  return r.$$typeof === Fd;
}
function Vd(r) {
  return Array.isArray(r) ? [] : {};
}
function pi(r, e) {
  return e.clone !== !1 && e.isMergeableObject(r) ? Wt(Vd(r), r, e) : r;
}
function Bd(r, e, t) {
  return r.concat(e).map(function (i) {
    return pi(i, t);
  });
}
function $d(r, e) {
  if (!e.customMerge) return Wt;
  let t = e.customMerge(r);
  return typeof t == "function" ? t : Wt;
}
function Hd(r) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(r).filter(function (e) {
        return r.propertyIsEnumerable(e);
      })
    : [];
}
function La(r) {
  return Object.keys(r).concat(Hd(r));
}
function jd(r, e, t) {
  let i = {};
  return (
    t.isMergeableObject(r) &&
      La(r).forEach(function (s) {
        i[s] = pi(r[s], t);
      }),
    La(e).forEach(function (s) {
      !t.isMergeableObject(e[s]) || !r[s] ? (i[s] = pi(e[s], t)) : (i[s] = $d(s, t)(r[s], e[s], t));
    }),
    i
  );
}
function Wt(r, e, t) {
  ((t = t || {}), (t.arrayMerge = t.arrayMerge || Bd), (t.isMergeableObject = t.isMergeableObject || Ld));
  let i = Array.isArray(e),
    s = Array.isArray(r);
  return i === s ? (i ? t.arrayMerge(r, e, t) : jd(r, e, t)) : pi(e, t);
}
Wt.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (i, s) {
    return Wt(i, s, t);
  }, {});
};
const Ma = (r) =>
  !!(
    r &&
    typeof r.hasAttributes == "function" &&
    typeof r.hasRelationships == "function" &&
    typeof r.hasViews == "function" &&
    typeof r.serialize == "function"
  );
class qd {
  constructor(e) {
    c(this, "expiration");
    c(this, "keyId");
    c(this, "teamId");
    if (((this.token = e), !e || !/^[a-z0-9\-\_]{16,}\.[a-z0-9\-\_]{16,}\.[a-z0-9\-\_]{16,}/i.test(e)))
      throw new Error("Invalid token.");
    const [t, i] = e.split("."),
      { exp: s, iss: n } = this._decode(i);
    if (((this.expiration = s * 1e3), this.isExpired)) throw new Error("Initialized with an expired token.");
    this.teamId = n;
    const { kid: a } = this._decode(t);
    this.keyId = a;
  }
  get isExpired() {
    return this.expiration < Date.now();
  }
  _decode(e) {
    return JSON.parse(Ec(e));
  }
}
const O = {
    INVALID_ERROR_ID: "INVALID_ERROR_ID",
    INVALID_ERROR_REASON: "INVALID_ERROR_REASON",
    ACCESS_DENIED: "ACCESS_DENIED",
    AGE_GATE: "AGE_GATE",
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
  Wd = {
    400: O.REQUEST_ERROR,
    401: O.UNAUTHORIZED_ERROR,
    403: O.ACCESS_DENIED,
    404: O.NOT_FOUND,
    405: O.NOT_FOUND,
    413: O.REQUEST_ERROR,
    414: O.REQUEST_ERROR,
    429: O.QUOTA_EXCEEDED,
    500: O.SERVER_ERROR,
    501: O.NOT_FOUND,
    503: O.SERVICE_UNAVAILABLE,
  },
  oi = {
    "-1003": O.MEDIA_LICENSE,
    "-1004": O.DEVICE_LIMIT,
    "-1017": O.GEO_BLOCK,
    1010: O.NOT_FOUND,
    2002: O.AUTHORIZATION_ERROR,
    2034: O.TOKEN_EXPIRED,
    3059: O.DEVICE_LIMIT,
    3063: O.SUBSCRIPTION_ERROR,
    3076: O.CONTENT_UNAVAILABLE,
    3082: O.CONTENT_RESTRICTED,
    3084: O.STREAM_UPSELL,
    5002: O.SERVER_ERROR,
    180202: O.PLAYREADY_CBC_ENCRYPTION_ERROR,
    190121: O.WIDEVINE_CDM_EXPIRED,
  };
function Yd(r) {
  return oi[r];
}
const Gd = new Set([
  O.CONTENT_EQUIVALENT,
  O.CONTENT_UNAVAILABLE,
  O.CONTENT_UNSUPPORTED,
  O.SERVER_ERROR,
  O.SUBSCRIPTION_ERROR,
  O.UNSUPPORTED_ERROR,
  O.USER_INTERACTION_REQUIRED,
]);
function Ua(r) {
  return r !== void 0 && r instanceof v;
}
function zd(r) {
  return typeof r != "string" ? !1 : /mk-[0-9]{3,}/.test(r);
}
const Ni = class extends Error {
  constructor(t, i, s) {
    var a;
    if (!zd(t)) throw new Ni("mk-000", O.INVALID_ERROR_ID, { description: `Invalid error id format: ${t}` });
    if (i === void 0 || !(i in O)) throw new Ni("mk-001", O.INVALID_ERROR_REASON, `Invalid error reason: ${i}`);
    ((s = s != null ? s : {}),
      typeof s == "string" ? (s = { description: s }) : s instanceof Error && (s = { origin: s }),
      s.description === void 0 &&
        s.origin !== void 0 &&
        (s.description = Ua(s.origin) ? s.origin.description : s.origin.message));
    let n = `[${t}] ${i}`;
    s.description !== void 0 && (n += `; ${s.description}`);
    super(n);
    c(this, "isMKError", !0);
    c(this, "id");
    c(this, "reason");
    c(this, "description");
    c(this, "origin");
    c(this, "data");
    ((this.name = "MKError"),
      (this.id = t),
      (this.reason = i),
      (this.description = (a = s.description) != null ? a : ""),
      (this.origin = s.origin),
      (this.data = s.data));
  }
  static isMKError(t) {
    return Ua(t);
  }
  get errorCode() {
    return this.reason;
  }
};
let v = Ni;
c(v, "Reason", O);
Object.assign(v, O);
class m extends v {
  constructor(e, t) {
    (Gd.has(e) && (t = t != null ? t : e), super("mk-007", e, { description: t }));
  }
  static playActivityError(e) {
    return new this(O.PLAY_ACTIVITY, e);
  }
  static parseError(e) {
    return new this(O.PARSE_ERROR, e);
  }
  static responseError(e) {
    const { status: t, statusText: i } = e,
      s = Wd[t] || O.NETWORK_ERROR,
      n = new this(s, i || `${t}`);
    return ((n.data = e), n);
  }
  static serverError(e) {
    return new Mi(e);
  }
  static internalError(e) {
    return new this(O.INTERNAL_ERROR, e);
  }
}
class Mi extends m {
  get response() {
    return this.data;
  }
  get dialog() {
    return this.response.dialog;
  }
  constructor(e, t) {
    var s, n, a, o, l, u, d, p;
    const i =
      oi[(s = e.failureType) != null ? s : 0] ||
      oi[(n = e.errorCode) != null ? n : 0] ||
      oi[e.status] ||
      t ||
      O.UNKNOWN_ERROR;
    (super(
      i,
      (d =
        (u =
          (l = (o = (a = e.dialog) == null ? void 0 : a.message) != null ? o : e.customerMessage) != null
            ? l
            : e.message) != null
          ? u
          : e.errorMessage) != null
        ? d
        : "",
    ),
      (this.data = e),
      this.dialog !== void 0 &&
        typeof ((p = this.dialog.okButtonAction) == null ? void 0 : p.url) == "string" &&
        (this.dialog.okButtonAction.url = this.dialog.okButtonAction.url.replace(
          /[&?](?:challenge|key-system|uri|user-initiated)=[^&]+/gim,
          "",
        )));
  }
}
function Qd(r = []) {
  const e = {};
  return (
    r.forEach((t) => {
      t.charAt(0) === "-" ? ((t = t.substr(1)), (e[t] = !1)) : (e[t] = !0);
    }),
    e
  );
}
const Xd = (r) => typeof r != "function";
function qr(r) {
  return r === void 0 || Xd(r) ? r : r();
}
function kc(r) {
  return !!r && typeof r == "object" && !Array.isArray(r);
}
function ns(r) {
  return typeof r == "function";
}
function jt(r) {
  return typeof r == "string";
}
function z(r, e) {
  return jt(r)
    ? ((e == null ? void 0 : e.trim) !== !1 ? r.trim() : r).length === 0
    : (e == null ? void 0 : e.strict) === !1;
}
function Jd(r) {
  return typeof r == "boolean";
}
function Zd(r) {
  return Jd(r)
    ? !r
    : function (...e) {
        return !r(...e);
      };
}
const Us = Zd(z);
function xs(r, e) {
  const t = e.path.map((i, s) => (s === 0 ? e.encode(i) : `[${e.encode(i)}]`)).join("");
  return r === null ? t : `${t}=${e.encode(r)}`;
}
const eh = {
    comma: function (e, t) {
      return xs(e.join(","), t);
    },
    repeat: function (e, t) {
      return e
        .map((i) => xs(String(i), t))
        .filter((i) => i.length > 0)
        .join("&");
    },
    bracket: function (e, t) {
      return e
        .map(function (i) {
          return t.next(i, { ...t, path: [...t.path, ""] });
        })
        .filter(Us)
        .join("&");
    },
    index: function (e, t) {
      return e
        .map(function (i, s) {
          return t.next(i, { ...t, path: [...t.path, String(s)] });
        })
        .filter(Us)
        .join("&");
    },
  },
  th = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (i) {
          return t.next(e[i], { ...t, path: t.path.concat(i) });
        })
        .filter(Us)
        .join("&");
    },
  },
  rh = (r) => encodeURIComponent(String(r)),
  ih = (r) => String(r);
function sh(r, e) {
  return !!(
    (r === void 0 && (e == null ? void 0 : e.skipUndefined) !== !1) ||
    (r === null && (e == null ? void 0 : e.skipNull) !== !1) ||
    (z(r) && (e == null ? void 0 : e.skipEmptyString) !== !1)
  );
}
function nh(r, e) {
  var u, d, p;
  if (!r) return "";
  let t = "";
  if (((e == null ? void 0 : e.prefix) === !0 ? (t = "?") : jt(e == null ? void 0 : e.prefix) && (t = e.prefix), jt(r)))
    return t + r.replace(/^[?&]+/, "");
  const i = ns(e == null ? void 0 : e.arrayFormat)
      ? e.arrayFormat
      : eh[(u = e == null ? void 0 : e.arrayFormat) != null ? u : "comma"],
    s = ns(e == null ? void 0 : e.objectFormat)
      ? e.objectFormat
      : th[(d = e == null ? void 0 : e.objectFormat) != null ? d : "bracket"];
  function n(y, g) {
    return sh(y, e) ? "" : kc(y) ? s(y, g) : Array.isArray(y) ? i(y, g) : xs(y, g);
  }
  const a = (p = e == null ? void 0 : e.sort) != null ? p : (...y) => 0;
  let o = rh;
  ns(e == null ? void 0 : e.encode) ? (o = e.encode) : (e == null ? void 0 : e.encode) === !1 && (o = ih);
  const l = s(r, { path: [], next: n, encode: o, sort: a });
  return l === "" ? "" : t + l;
}
function Ui(r, e, t) {
  kc(e) && ((t = e), (e = ""));
  const i = _c([r, e != null ? e : ""]);
  let s = "?";
  i.endsWith("&") || i.endsWith("?") ? (s = "") : i.includes("?") && (s = "&");
  const n = t !== void 0 ? nh(t, { prefix: s }) : "";
  return i + n;
}
function ah(r, e) {
  if (r === void 0 && e === void 0) return !0;
  if (typeof r != typeof e || ((r = r), (e = e), r.byteLength !== e.byteLength)) return !1;
  for (let t = 0; t < r.byteLength; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function F(r) {
  const e = { version: r.toLowerCase() },
    t = r
      .toLowerCase()
      .split(".")
      .filter((a) => !!a);
  if (t.length <= 1 && !/^\d+$/.test(t[0])) return e;
  const i = parseInt(t[0], 10),
    s = parseInt(t[1], 10),
    n = parseInt(t[2], 10);
  return (Number.isNaN(i) || ((e.major = i), Number.isNaN(s) || (e.minor = s), Number.isNaN(n) || (e.patch = n)), e);
}
function as(r, e, t) {
  const { userAgent: i } = e != null ? e : {};
  if (typeof i != "string" || i.trim() === "") return t;
  for (const s of r) {
    const n = s.slice(0, -1),
      a = s[s.length - 1];
    let o = null;
    for (const l of n)
      if (((o = i.match(l)), o !== null)) {
        Object.assign(t, a(o, e, t));
        break;
      }
    if (o !== null) break;
  }
  return t;
}
function oh(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
function K(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {},
      i = Object.keys(t);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (i = i.concat(
        Object.getOwnPropertySymbols(t).filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        }),
      )),
      i.forEach(function (s) {
        oh(r, s, t[s]);
      }));
  }
  return r;
}
function ch(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    (e &&
      (i = i.filter(function (s) {
        return Object.getOwnPropertyDescriptor(r, s).enumerable;
      })),
      t.push.apply(t, i));
  }
  return t;
}
function xa(r, e) {
  return (
    (e = e != null ? e : {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
      : ch(Object(e)).forEach(function (t) {
          Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    r
  );
}
const os = {
  browser: [
    [
      /^(itunes|music|tv)\/([\w.]+)\s/i,
      (r) =>
        xa(
          K(
            {
              name: "webview",
              variant: r[1]
                .trim()
                .toLowerCase()
                .replace(/(music|tv)/i, "$1.app"),
            },
            F(r[2]),
          ),
          { mobile: !1 },
        ),
    ],
    [
      /(?:(?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w.]+);)/i,
      (r) => K({ name: "webview", variant: "facebook", mobile: !0 }, F(r[1])),
    ],
    [
      /(instagram|snapchat)[/ ]([-\w.]+)/i,
      (r) => K({ name: "webview", variant: r[1].trim().toLowerCase(), mobile: !0 }, F(r[2])),
    ],
    [
      /musical_ly(?:.+app_?version\/|_)([\w.]+)/i,
      (r) => K({ name: "webview", variant: "tiktok", mobile: !0 }, F(r[1])),
    ],
    [/twitter/i, () => ({ name: "webview", variant: "twitter", mobile: !0 })],
    [/ wv\).+?(?:version|chrome)\/([\w.]+)/i, (r) => K({ name: "webview", mobile: !0 }, F(r[1]))],
    [/electron\/([\w.]+) safari/i, (r) => K({ name: "electron", mobile: !1 }, F(r[1]))],
    [
      /tesla\/(.*?(20\d\d\.([-\w.])+))/i,
      (r) => xa(K({ name: "other", variant: "tesla", mobile: !1 }, F(r[2])), { version: r[1] }),
    ],
    [
      /(samsung|huawei)browser\/([-\w.]+)/i,
      (r) =>
        K(
          {
            name: "other",
            variant: r[1]
              .trim()
              .toLowerCase()
              .replace(/browser/i, ""),
            mobile: !0,
          },
          F(r[2]),
        ),
    ],
    [/yabrowser\/([-\w.]+)/i, (r) => K({ name: "other", variant: "yandex", mobile: !1 }, F(r[1]))],
    [
      /(brave|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w.]+)/i,
      (r, { userAgent: e }) =>
        K({ name: "other", variant: r[1].trim().toLowerCase(), mobile: /mobile/i.test(e) }, F(r[2].replace(/-/g, "."))),
    ],
    [
      /edg(e|ios|a)?\/([\w.]+)/i,
      (r) => {
        var e;
        return K(
          { name: "edge", mobile: /(edgios|edga)/i.test((e = r[1]) !== null && e !== void 0 ? e : "") },
          F(r[2]),
        );
      },
    ],
    [/trident.+rv[: ]([\w.]{1,9})\b.+like gecko/i, (r) => K({ name: "ie", mobile: !1 }, F(r[1]))],
    [
      /opr\/([\w.]+)/i,
      /opera mini\/([-\w.]+)/i,
      /opera [mobiletab]{3,6}\b.+version\/([-\w.]+)/i,
      /opera(?:.+version\/|[/ ]+)([\w.]+)/i,
      (r) => K({ name: "opera", mobile: /mobile/i.test(r[0]) }, F(r[1])),
    ],
    [/headlesschrome(?:\/([\w.]+)| )/i, (r) => K({ name: "chrome", variant: "headless", mobile: !1 }, F(r[1]))],
    [/\b(?:crmo|crios)\/([\w.]+)/i, (r) => K({ name: "chrome", mobile: !0 }, F(r[1]))],
    [
      /chrome(?: browser)?\/v?([\w.]+)( mobile)?/i,
      (r) => {
        var e;
        return K({ name: "chrome", mobile: /mobile/i.test((e = r[2]) !== null && e !== void 0 ? e : "") }, F(r[1]));
      },
    ],
    [/\bfocus\/([\w.]+)/i, (r) => K({ name: "firefox", variant: "focus", mobile: !0 }, F(r[1]))],
    [
      /fxios\/([\w.-]+)/i,
      /(?:mobile|tablet);.*(?:firefox)\/([\w.-]+)/i,
      (r) => K({ name: "firefox", mobile: !0 }, F(r[1])),
    ],
    [
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[/ ]?([\w.+]+)/i,
      (r) => K({ name: "firefox", variant: r[1].trim().toLowerCase(), mobile: !1 }, F(r[2])),
    ],
    [
      /(?:firefox)\/([\w.]+)/i,
      /(?:mozilla)\/([\w.]+) .+rv:.+gecko\/\d+/i,
      (r) => K({ name: "firefox", mobile: !1 }, F(r[1])),
    ],
    [
      /version\/([\w.,]+) .*mobile(?:\/\w+ | ?)safari/i,
      /version\/([\w.,]+) .*(safari)/i,
      /webkit.+?(?:mobile ?safari|safari)(?:\/([\w.]+))/i,
      (r) => K({ name: "safari", mobile: /mobile/i.test(r[0]) }, F(r[1])),
    ],
  ],
  engine: [
    [/webkit\/(?:537\.36).+chrome\/(?!27)([\w.]+)/i, (r) => K({ name: "blink" }, F(r[1]))],
    [/windows.+ edge\/([\w.]+)/i, (r) => K({ name: "blink" }, F(r[1]))],
    [/presto\/([\w.]+)/i, (r) => K({ name: "presto" }, F(r[2]))],
    [/trident\/([\w.]+)/i, (r) => K({ name: "trident" }, F(r[1]))],
    [/gecko\/([\w.]+)/i, (r) => K({ name: "gecko" }, F(r[1]))],
    [/(khtml|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w.]+)/i, (r) => K({ name: "other" }, F(r[2]))],
    [/webkit\/([\w.]+)/i, (r) => K({ name: "webkit" }, F(r[1]))],
  ],
  os: [
    [
      /microsoft windows (vista|xp)/i,
      /windows nt 6\.2; (arm)/i,
      /windows (?:phone(?: os)?|mobile)[/ ]?([\d.\w ]*)/i,
      /windows[/ ]?([ntce\d. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d.]+)/i,
      (r) => K({ name: "windows" }, F(r[1])),
    ],
    [
      /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
      /(?:ios;fbsv\/|iphone.+ios[/ ])([\d.]+)/i,
      (r) => K({ name: "ios" }, F(r[1].replace(/_/g, "."))),
    ],
    [/mac(?:intosh;?)? os x ?([\d._]+)/i, (r) => K({ name: "macos" }, F(r[1].replace(/_/g, ".")))],
    [/cros [\w]+(?:\)| ([\w.]+)\b)/i, (r) => K({ name: "chromeos" }, F(r[1]))],
    [
      /(?:android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-/ ]?([\w.]*)/i,
      /droid ([\w.]+|[\d+])\b.+(android[- ]x86|harmonyos)/i,
      (r) => K({ name: "android" }, F(r[1])),
    ],
    [/linux/i, () => ({ name: "linux" })],
  ],
};
function lh(r, e) {
  let t = r;
  for (const i of e) t = i(t);
  return t;
}
function uh(r, e) {
  var t;
  const i = {
    navigator: r,
    ua: (t = r == null ? void 0 : r.userAgent) !== null && t !== void 0 ? t : "",
    extensions: [],
    browser: as(os.browser, r, { name: "unknown", mobile: !1 }),
    engine: as(os.engine, r, { name: "unknown" }),
    os: as(os.os, r, { name: "unknown" }),
  };
  var s;
  return lh(i, (s = e == null ? void 0 : e.extensions) !== null && s !== void 0 ? s : []);
}
function dh(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
function Wr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {},
      i = Object.keys(t);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (i = i.concat(
        Object.getOwnPropertySymbols(t).filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        }),
      )),
      i.forEach(function (s) {
        dh(r, s, t[s]);
      }));
  }
  return r;
}
function hh(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    (e &&
      (i = i.filter(function (s) {
        return Object.getOwnPropertyDescriptor(r, s).enumerable;
      })),
      t.push.apply(t, i));
  }
  return t;
}
function Yr(r, e) {
  return (
    (e = e != null ? e : {}),
    Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
      : hh(Object(e)).forEach(function (t) {
          Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
        }),
    r
  );
}
function fh(r) {
  let e = r.os.name;
  const t = r.os.name === "android";
  let i = r.os.name === "macos",
    s = r.os.name === "ios";
  var n;
  const a =
    e === "ipados" ||
    (s && /ipad/i.test(r.ua)) ||
    (i && ((n = r.navigator.maxTouchPoints) !== null && n !== void 0 ? n : 0) >= 2);
  a && ((e = "ipados"), (s = !1), (i = !1));
  const o = Yr(Wr({}, r.browser), {
      isUnknown: r.browser.name === "unknown",
      isSafari: r.browser.name === "safari",
      isChrome: r.browser.name === "chrome",
      isFirefox: r.browser.name === "firefox",
      isEdge: r.browser.name === "edge",
      isWebView: r.browser.name === "webview",
      isOther: r.browser.name === "other",
      isMobile: r.browser.mobile || s || a || t || !1,
    }),
    l = Yr(Wr({}, r.engine), {
      isUnknown: r.engine.name === "unknown",
      isWebKit: r.engine.name === "webkit",
      isBlink: r.engine.name === "blink",
      isGecko: r.engine.name === "gecko",
    }),
    u = Yr(Wr({}, r.os), {
      name: e,
      isUnknown: r.os.name === "unknown",
      isLinux: r.os.name === "linux",
      isWindows: r.os.name === "windows",
      isMacOS: i,
      isAndroid: t,
      isIOS: s,
      isIPadOS: a,
    });
  return Yr(Wr({}, r), { extensions: [...r.extensions, "flags"], browser: o, os: u, engine: l });
}
let cs;
function Rt() {
  if (cs === void 0) {
    let r = function (e) {
      return e && e.Math === Math && e;
    };
    cs =
      r(typeof globalThis == "object" && globalThis) ||
      r(typeof window == "object" && window) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  }
  return cs;
}
function Fa(r, e, t, i, s, n, a) {
  try {
    var o = r[n](a),
      l = o.value;
  } catch (u) {
    t(u);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, s);
}
function ph(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, s) {
      var n = r.apply(e, t);
      function a(l) {
        Fa(n, i, s, a, o, "next", l);
      }
      function o(l) {
        Fa(n, i, s, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function yh() {
  return Fs.apply(this, arguments);
}
function Fs() {
  return (
    (Fs = ph(function* () {
      return Rt().navigator !== void 0;
    })),
    Fs.apply(this, arguments)
  );
}
function Ka(r, e, t, i, s, n, a) {
  try {
    var o = r[n](a),
      l = o.value;
  } catch (u) {
    t(u);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, s);
}
function mh(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, s) {
      var n = r.apply(e, t);
      function a(l) {
        Ka(n, i, s, a, o, "next", l);
      }
      function o(l) {
        Ka(n, i, s, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function On() {
  return Ks.apply(this, arguments);
}
function Ks() {
  return (
    (Ks = mh(function* () {
      var r, e;
      return (
        ((e = Rt().process) === null || e === void 0 || (r = e.versions) === null || r === void 0 ? void 0 : r.node) !==
        void 0
      );
    })),
    Ks.apply(this, arguments)
  );
}
function Va(r, e, t, i, s, n, a) {
  try {
    var o = r[n](a),
      l = o.value;
  } catch (u) {
    t(u);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, s);
}
function xi(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, s) {
      var n = r.apply(e, t);
      function a(l) {
        Va(n, i, s, a, o, "next", l);
      }
      function o(l) {
        Va(n, i, s, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function gh(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
function vh(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {},
      i = Object.keys(t);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (i = i.concat(
        Object.getOwnPropertySymbols(t).filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        }),
      )),
      i.forEach(function (s) {
        gh(r, s, t[s]);
      }));
  }
  return r;
}
const J = {
    playready: "com.microsoft.playready",
    widevine: "com.widevine.alpha",
    clearkey: "org.w3.clearkey",
    fairplay: "com.apple.fps",
  },
  Ba = { fairplay_legacy: "com.apple.fps.1_0", playready_legacy: "com.microsoft.playready" };
function Pc() {
  return Vs.apply(this, arguments);
}
function Vs() {
  return (
    (Vs = xi(function* () {
      var r;
      const e = Rt();
      return (
        ((r = e.navigator) === null || r === void 0 ? void 0 : r.requestMediaKeySystemAccess) !== void 0 &&
        e.MediaKeys !== void 0 &&
        e.MediaKeySystemAccess !== void 0
      );
    })),
    Vs.apply(this, arguments)
  );
}
function bh(r) {
  return Bs.apply(this, arguments);
}
function Bs() {
  return (
    (Bs = xi(function* (r) {
      var e, t, i;
      const s =
          (i = r == null ? void 0 : r.contentType) !== null && i !== void 0 ? i : 'video/mp4; codecs="avc1.42E01E"',
        n = [],
        a = Rt();
      return (
        typeof ((e = a.WebKitMediaKeys) === null || e === void 0 ? void 0 : e.isTypeSupported) == "function" &&
          a.WebKitMediaKeys.isTypeSupported(Ba.fairplay_legacy, s) === !0 &&
          n.push("fairplay_legacy"),
        typeof ((t = a.MSMediaKeys) === null || t === void 0 ? void 0 : t.isTypeSupported) == "function" &&
          a.MSMediaKeys.isTypeSupported(Ba.playready_legacy, s) === !0 &&
          n.push("playready_legacy"),
        n
      );
    })),
    Bs.apply(this, arguments)
  );
}
function _h(r, e) {
  return $s.apply(this, arguments);
}
function $s() {
  return (
    ($s = xi(function* (r, e) {
      const t = vh({ initDataTypes: ["keyids", "cenc"] }, e);
      if (t.audioCapabilities === void 0 && t.videoCapabilities === void 0)
        throw new Error("Configuration should at least include a audioCapabilities or videoCapabilities key");
      const i = r.indexOf(".") !== -1 ? r : J[r];
      if (i === void 0) return !1;
      var s, n;
      const a = [
        ...((s = t.audioCapabilities) !== null && s !== void 0 ? s : []),
        ...((n = t.videoCapabilities) !== null && n !== void 0 ? n : []),
      ].map(({ contentType: u }) => u);
      try {
        const d = (yield navigator.requestMediaKeySystemAccess(i, [t])).getConfiguration();
        var o, l;
        const p = [
          ...((o = d.audioCapabilities) !== null && o !== void 0 ? o : []),
          ...((l = d.videoCapabilities) !== null && l !== void 0 ? l : []),
        ].map(({ contentType: y }) => y);
        return a.every((y) => p.includes(y));
      } catch (u) {
        if (u instanceof DOMException && (u.name === "NotSupportedError" || u.name === "SecurityError")) return !1;
        throw u;
      }
    })),
    $s.apply(this, arguments)
  );
}
function Th(r) {
  return Hs.apply(this, arguments);
}
function Hs() {
  return (
    (Hs = xi(function* (r) {
      const e = [];
      if ((yield On()) || !(yield Pc())) return e;
      function t(n) {
        return typeof n == "string" ? { contentType: n } : n;
      }
      const i =
          (r == null ? void 0 : r.videoCapability) !== void 0
            ? [t(r.videoCapability)]
            : [t('video/mp4; codecs="avc1.42E01E"')],
        s = (r == null ? void 0 : r.audioCapability) !== void 0 ? [t(r.audioCapability)] : [];
      for (const [n, a] of Object.entries(J))
        (yield _h(a, { videoCapabilities: i, audioCapabilities: s })) && e.push(n);
      return e;
    })),
    Hs.apply(this, arguments)
  );
}
function $a(r, e, t, i, s, n, a) {
  try {
    var o = r[n](a),
      l = o.value;
  } catch (u) {
    t(u);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, s);
}
function Eh(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, s) {
      var n = r.apply(e, t);
      function a(l) {
        $a(n, i, s, a, o, "next", l);
      }
      function o(l) {
        $a(n, i, s, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function Sh() {
  return js.apply(this, arguments);
}
function js() {
  return (
    (js = Eh(function* () {
      var r, e, t, i;
      const s = Rt(),
        n = s.ManagedMediaSource !== void 0,
        a =
          typeof ((e = s.ManagedSourceBuffer) === null || e === void 0 || (r = e.prototype) === null || r === void 0
            ? void 0
            : r.appendBuffer) == "function" &&
          typeof ((i = s.ManagedSourceBuffer) === null || i === void 0 || (t = i.prototype) === null || t === void 0
            ? void 0
            : t.remove) == "function";
      return n && a;
    })),
    js.apply(this, arguments)
  );
}
function Ha(r, e, t, i, s, n, a) {
  try {
    var o = r[n](a),
      l = o.value;
  } catch (u) {
    t(u);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, s);
}
function Ih(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, s) {
      var n = r.apply(e, t);
      function a(l) {
        Ha(n, i, s, a, o, "next", l);
      }
      function o(l) {
        Ha(n, i, s, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function kh() {
  return qs.apply(this, arguments);
}
function qs() {
  return (
    (qs = Ih(function* () {
      return Rt().MediaSource !== void 0 && Rt().SourceBuffer !== void 0;
    })),
    qs.apply(this, arguments)
  );
}
function ja(r, e, t, i, s, n, a) {
  try {
    var o = r[n](a),
      l = o.value;
  } catch (u) {
    t(u);
    return;
  }
  o.done ? e(l) : Promise.resolve(l).then(i, s);
}
function Ph(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, s) {
      var n = r.apply(e, t);
      function a(l) {
        ja(n, i, s, a, o, "next", l);
      }
      function o(l) {
        ja(n, i, s, a, o, "throw", l);
      }
      a(void 0);
    });
  };
}
function Ac() {
  return Ws.apply(this, arguments);
}
function Ws() {
  return (
    (Ws = Ph(function* () {
      var r;
      if (yield On()) return !1;
      const e = document.createElement("video");
      return (
        ((e == null ? void 0 : e.webkitSupportsPresentationMode) !== void 0 &&
          typeof (e == null ? void 0 : e.webkitSetPresentationMode) == "function") ||
        ((r = document) === null || r === void 0 ? void 0 : r.pictureInPictureEnabled) !== void 0
      );
    })),
    Ws.apply(this, arguments)
  );
}
async function Ah() {
  var o;
  const r = globalThis == null ? void 0 : globalThis.window,
    e = (o = r == null ? void 0 : r.navigator) != null ? o : { userAgent: "", maxTouchPoints: 0 },
    t = await yh(),
    i = await On(),
    s = await Th(),
    n = await bh();
  let a;
  return (
    s.includes("fairplay") && (a = "fairplay"),
    s.includes("playready") && (a = "playready"),
    s.includes("widevine") && (a = "widevine"),
    {
      userAgent: await uh(e, { extensions: [fh] }),
      isBrowserEnvironment: t,
      isNodeEnvironment: i,
      isPictureInPictureSupported: await Ac(),
      isMMSSupported: await Sh(),
      isMSESupported: await kh(),
      isEMESupported: await Pc(),
      isDRMAvailable: a !== void 0,
      availableKeySystems: s,
      preferredKeySystem: a,
      hasWebKitMediaKeysSupport: n.includes("fairplay_legacy"),
      hasMSMediaKeysSupport: n.includes("playready_legacy"),
    }
  );
}
class wh {
  constructor(e) {
    c(this, "configured", !1);
    c(this, "config");
    ((this.config = e), (this.configured = !0));
  }
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
    return new this(await Ah());
  }
  configure(e) {
    for (const [t, i] of Object.entries(e)) this.config[t] = i;
    this.configured = !0;
  }
}
function gr(r) {
  return r
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "-")
    .replace(/(^-+)|(-+$)/, "")
    .toLowerCase();
}
const Rh = (r) => r.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (e, t) => t.toUpperCase()),
  vr = {};
function Dn(r, e) {
  const t = Rh(r);
  if (Qe(vr, t)) {
    const s = vr[t];
    if (e !== s.constructor)
      throw new Error(`DevFlag ${r} was already registered with a different type (${s.constructor.name})`);
    return s;
  }
  const i = new e(r);
  return (
    Object.defineProperty(vr, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return i;
      },
      set: function (s) {
        i.set(s);
      },
    }),
    i
  );
}
class Nn {
  constructor(e) {
    c(this, "key");
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
    var t, i;
    const e = (i = (t = ze()) == null ? void 0 : t.getItem(this.key)) != null ? i : null;
    return e !== null ? e : void 0;
  }
  write(e) {
    var t;
    (t = ze()) == null || t.setItem(this.key, e);
  }
  clear() {
    var e;
    (e = ze()) == null || e.removeItem(this.key);
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
class Se extends Nn {
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
class Fi extends Nn {
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
      } catch (t) {
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
const wc =
  /\/(?:([a-z]{2})\/)?(album|artist|episode|movie|music-video|playlist|podcast|post|season|show|song|station)\/(?:[^/]*\/)?(?:id)?(\d+|[a-z]{2}\.[a-z0-9-]+|umc.cmc.[a-zA-Z0-9]+)(?:.*(?:[?|&]i=(\d+)).*)?.*$/i;
function Ch(r) {
  return wc.test(String(r));
}
function Rc(r) {
  const e = r.match(wc) || [];
  let [, t, i, s, n] = e;
  return (
    i === "music-video" && (i = "musicVideo"),
    ["album", "playlist"].indexOf(i) !== -1 && n
      ? ((i = "song"), (s = n))
      : i === "podcast" && n && ((i = "episode"), (s = n)),
    { storefrontId: t, kind: i, contentId: s, itemId: n }
  );
}
function KE(r) {
  const e = Rc(r),
    { storefrontId: t, kind: i, contentId: s } = e;
  if ([t, i, s].some((a) => a === void 0)) throw new TypeError(`Invalid Media URL: ${r}`);
  const n = !!s && s.startsWith("umc.");
  return { storefrontId: t, kind: i, contentId: s, isUTS: n };
}
function Oh(r) {
  return typeof r == "number" && !Number.isNaN(r);
}
const ls = new Map();
function Cc(r) {
  if (ls.has(r)) return ls.get(r);
  let e = gr(r);
  return (
    r.endsWith("y") ? (e = e.substring(0, e.length - 1) + "ies") : e.endsWith("s") || (e = e + "s"), ls.set(r, e), e
  );
}
function Dh(r) {
  return Cc(r);
}
function Nh(r, e) {
  const t = {};
  for (const i of e) i in r && r[i] !== void 0 && (t[i] = r[i]);
  return t;
}
class Lh {
  constructor(e) {
    c(this, "configured", !1);
    c(
      this,
      "fetchFunction",
      (globalThis == null ? void 0 : globalThis.fetch) !== void 0 ? fetch.bind(globalThis) : void 0,
    );
    this.configure(e != null ? e : {});
  }
  static async create(e) {
    return new this(e);
  }
  get fetch() {
    if (this.fetchFunction === void 0) throw new m(m.Reason.INTERNAL_ERROR, "Could not find fetch implementation");
    return this.fetchFunction;
  }
  get isConfigured() {
    return this.configured;
  }
  configure(e) {
    ((e == null ? void 0 : e.fetchFunction) !== void 0 && (this.fetchFunction = e.fetchFunction),
      (this.configured = !0));
  }
  buildURL(e, t, i) {
    return new URL(Ui(e, t, i));
  }
  buildHeaders(...e) {
    return mr(e).reduce(function (t, i) {
      let s;
      return (
        i instanceof Headers || i instanceof Map ? (s = Array.from(i.entries())) : (s = Object.entries(i)),
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
    } catch (i) {
      const s = e instanceof Request ? e.url : String(e);
      throw new m(m.Reason.NETWORK_ERROR, `Unable to complete request for ${s}`);
    }
    try {
      return await t.text();
    } catch (i) {
      const s = e instanceof Request ? e.url : String(e);
      throw new m(m.Reason.REQUEST_ERROR, `Unable to read body as text for ${s}`);
    }
  }
  async fetchJSON(e) {
    let t;
    try {
      t = await this.fetch(e);
    } catch (i) {
      const s = e instanceof Request ? e.url : String(e);
      throw new m(m.Reason.NETWORK_ERROR, `Unable to complete request for ${s}`);
    }
    try {
      return await t.json();
    } catch (i) {
      const s = e instanceof Request ? e.url : String(e);
      throw new m(m.Reason.REQUEST_ERROR, `Unable to read body as JSON for ${s}`);
    }
  }
  async fetchArrayBuffer(e) {
    let t;
    try {
      t = await this.fetch(e);
    } catch (i) {
      const s = e instanceof Request ? e.url : String(e);
      throw new m(m.Reason.NETWORK_ERROR, `Unable to complete request for ${s}`);
    }
    try {
      return await t.arrayBuffer();
    } catch (i) {
      const s = e instanceof Request ? e.url : String(e);
      throw new m(m.Reason.REQUEST_ERROR, `Unable to read body as ArrayBuffer for ${s}`);
    }
  }
}
const us = new Map();
function Ir(r) {
  if (us.has(r)) return us.get(r);
  let e = gr(r);
  return (e.endsWith("s") && (e = e.slice(0, -1)), us.set(r, e), e);
}
const tr =
    (r = 100, e) =>
    (t, i, s) => {
      const n = s.value,
        a = Mh(n, r, e);
      s.value = a;
    },
  Mh = (r, e = 250, t = { isImmediate: !1 }) => {
    let i, s;
    function n(l) {
      return l == null ? void 0 : l.resolve(t.cancelledValue);
    }
    const a = () => {
        i && (i.resolved || (n(i), i.timeoutId && clearTimeout(i.timeoutId)), (i = void 0));
      },
      o = (l, u, d, p) => {
        r.apply(l, p)
          .then((y) => {
            (u(y), i && (i.resolved = !0));
          })
          .catch(d);
      };
    return t.isImmediate
      ? function (...l) {
          const u = Date.now(),
            d = this;
          return (
            s && u >= s && a(),
            (s = Date.now() + e),
            i
              ? n(Promise)
              : new Promise((p, y) => {
                  ((i = { resolve: p, reject: y }), o(d, p, y, l));
                })
          );
        }
      : function (...l) {
          const u = this;
          return (
            i && a(),
            new Promise(function (d, p) {
              const y = setTimeout(o.bind(void 0, u, d, p, l), e);
              i = { resolve: d, reject: p, timeoutId: y };
            })
          );
        };
  };
function Oc(r, e = {}) {
  var n;
  const t = "Deprecation Warning: ",
    i = (n = e.message) != null ? n : `${r} has been deprecated`,
    s = [];
  (e.since && s.push(`since: ${e.since}`),
    e.until && s.push(`until: ${e.until}`),
    console.warn(t + i + (s.length > 0 ? ` (${s.join(", ")})` : "")));
}
const Ys = {},
  Uh = (r) => {
    let e = Ys[r];
    return (e || ((e = Promise.resolve()), (Ys[r] = e)), e);
  },
  Ki = (r) => {
    let e = Promise.resolve();
    return (t, i, s) => {
      const n = s.value;
      return (
        (s.value = async function (...a) {
          return (r && (e = Uh(r)), (e = e.catch(() => {}).then(() => n.apply(this, a))), r && (Ys[r] = e), e);
        }),
        s
      );
    };
  };
var Ke = ((r) => ((r[(r.STANDARD = 64)] = "STANDARD"), (r[(r.HIGH = 256)] = "HIGH"), r))(Ke || {}),
  P = ((r) => (
    (r.apiStorefrontChanged = "apiStorefrontChanged"),
    (r.hlsLevelUpdated = "hlsLevelUpdated"),
    (r.hlsLevelLoaded = "player.hls.levelLoaded"),
    (r.mediaContentComplete = "mediaContentComplete"),
    (r.playbackPause = "playbackPause"),
    (r.playbackPlay = "playbackPlay"),
    (r.playbackScrub = "playbackScrub"),
    (r.playbackSeek = "playbackSeek"),
    (r.playbackSkip = "playbackSkip"),
    (r.playbackStop = "playbackStop"),
    (r.lyricsPlay = "lyricsPlay"),
    (r.lyricsStop = "lyricsStop"),
    (r.lyricsUpdate = "lyricsUpdate"),
    (r.playerActivate = "playerActivate"),
    (r.playerExit = "playerExit"),
    (r.queueModified = "queueModified"),
    (r.userActivityIntent = "userActivityIntent"),
    (r.applicationActivityIntent = "applicationActivityIntent"),
    (r.timedMetadata = "timedMetadata"),
    r
  ))(P || {}),
  kt = ((r) => (
    (r.MUSICKIT = "music_kit-integration"),
    (r.OTHER = "other"),
    (r.MINI = "mini"),
    (r.SONG = "song"),
    (r.ALBUM = "album"),
    (r.ALBUM_CLASSICAL = "album-classical"),
    (r.ARTIST = "artist"),
    (r.COMPILATION = "compilation"),
    (r.COMPILATION_CLASSICAL = "compilation-classical"),
    (r.PLAYLIST = "playlist"),
    (r.PLAYLIST_CLASSICAL = "playlist-classical"),
    (r.RADIO = "radio"),
    (r.SEARCH = "search"),
    (r.STATION = "station"),
    r
  ))(kt || {}),
  xh = ((r) => (
    (r[(r.UNKNOWN = 0)] = "UNKNOWN"),
    (r[(r.RADIO = 1)] = "RADIO"),
    (r[(r.PLAYLIST = 2)] = "PLAYLIST"),
    (r[(r.ALBUM = 3)] = "ALBUM"),
    (r[(r.ARTIST = 4)] = "ARTIST"),
    r
  ))(xh || {}),
  R = ((r) => (
    (r[(r.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
    (r[(r.OTHER = 1)] = "OTHER"),
    (r[(r.TRACK_SKIPPED_FORWARDS = 2)] = "TRACK_SKIPPED_FORWARDS"),
    (r[(r.PLAYBACK_MANUALLY_PAUSED = 3)] = "PLAYBACK_MANUALLY_PAUSED"),
    (r[(r.PLAYBACK_SUSPENDED = 4)] = "PLAYBACK_SUSPENDED"),
    (r[(r.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM = 5)] = "MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM"),
    (r[(r.PLAYBACK_PAUSED_DUE_TO_INACTIVITY = 6)] = "PLAYBACK_PAUSED_DUE_TO_INACTIVITY"),
    (r[(r.NATURAL_END_OF_TRACK = 7)] = "NATURAL_END_OF_TRACK"),
    (r[(r.PLAYBACK_STOPPED_DUE_TO_SESSION_TIMEOUT = 8)] = "PLAYBACK_STOPPED_DUE_TO_SESSION_TIMEOUT"),
    (r[(r.TRACK_BANNED = 9)] = "TRACK_BANNED"),
    (r[(r.FAILED_TO_LOAD = 10)] = "FAILED_TO_LOAD"),
    (r[(r.PAUSED_ON_TIMEOUT = 11)] = "PAUSED_ON_TIMEOUT"),
    (r[(r.SCRUB_BEGIN = 12)] = "SCRUB_BEGIN"),
    (r[(r.SCRUB_END = 13)] = "SCRUB_END"),
    (r[(r.TRACK_SKIPPED_BACKWARDS = 14)] = "TRACK_SKIPPED_BACKWARDS"),
    (r[(r.NOT_SUPPORTED_BY_CLIENT = 15)] = "NOT_SUPPORTED_BY_CLIENT"),
    (r[(r.QUICK_PLAY = 16)] = "QUICK_PLAY"),
    (r[(r.EXITED_APPLICATION = 17)] = "EXITED_APPLICATION"),
    r
  ))(R || {}),
  _e = ((r) => (
    (r[(r.Manual = 0)] = "Manual"),
    (r[(r.Interval = 1)] = "Interval"),
    (r[(r.SkipIntro = 2)] = "SkipIntro"),
    (r[(r.Automatic = 3)] = "Automatic"),
    (r[(r.SkipToLiveManual = 4)] = "SkipToLiveManual"),
    (r[(r.SkipToLiveAutomatic = 5)] = "SkipToLiveAutomatic"),
    r
  ))(_e || {});
const Fh = { NEXT_ITEM: "NEXT" };
var Kh = ((r) => (
    (r[(r.REPEAT_UNKNOWN = 0)] = "REPEAT_UNKNOWN"),
    (r[(r.REPEAT_OFF = 1)] = "REPEAT_OFF"),
    (r[(r.REPEAT_ONE = 2)] = "REPEAT_ONE"),
    (r[(r.REPEAT_ALL = 3)] = "REPEAT_ALL"),
    r
  ))(Kh || {}),
  Vh = ((r) => (
    (r[(r.SHUFFLE_UNKNOWN = 0)] = "SHUFFLE_UNKNOWN"),
    (r[(r.SHUFFLE_OFF = 1)] = "SHUFFLE_OFF"),
    (r[(r.SHUFFLE_ON = 2)] = "SHUFFLE_ON"),
    r
  ))(Vh || {}),
  Bh = ((r) => (
    (r[(r.AUTO_UNKNOWN = 0)] = "AUTO_UNKNOWN"),
    (r[(r.AUTO_OFF = 1)] = "AUTO_OFF"),
    (r[(r.AUTO_ON = 2)] = "AUTO_ON"),
    (r[(r.AUTO_ON_CONTENT_UNSUPPORTED = 3)] = "AUTO_ON_CONTENT_UNSUPPORTED"),
    r
  ))(Bh || {}),
  $h = ((r) => ((r[(r.NOT_SPECIFIED = 0)] = "NOT_SPECIFIED"), (r[(r.CONTAINER_CHANGED = 1)] = "CONTAINER_CHANGED"), r))(
    $h || {},
  ),
  Pt = ((r) => (
    (r[(r.PLAY_END = 0)] = "PLAY_END"),
    (r[(r.PLAY_START = 1)] = "PLAY_START"),
    (r[(r.LYRIC_DISPLAY = 2)] = "LYRIC_DISPLAY"),
    r
  ))(Pt || {}),
  Hh = ((r) => (
    (r[(r.INVALID = 0)] = "INVALID"),
    (r[(r.ITUNES_STORE_CONTENT = 1)] = "ITUNES_STORE_CONTENT"),
    (r[(r.NON_SONG_CLIP = 2)] = "NON_SONG_CLIP"),
    (r[(r.AD = 3)] = "AD"),
    (r[(r.STREAM = 4)] = "STREAM"),
    (r[(r.AUDIO_AD = 5)] = "AUDIO_AD"),
    (r[(r.VIDEO_AD = 6)] = "VIDEO_AD"),
    (r[(r.TIMED_METADATA_PING = 7)] = "TIMED_METADATA_PING"),
    (r[(r.ARTIST_UPLOADED_CONTENT = 8)] = "ARTIST_UPLOADED_CONTENT"),
    (r[(r.AGGREGATE_NON_CATALOG_PLAY_TIME = 9)] = "AGGREGATE_NON_CATALOG_PLAY_TIME"),
    (r[(r.ORIGINAL_CONTENT_MOVIES = 10)] = "ORIGINAL_CONTENT_MOVIES"),
    (r[(r.ORIGINAL_CONTENT_SHOWS = 11)] = "ORIGINAL_CONTENT_SHOWS"),
    r
  ))(Hh || {}),
  jh = ((r) => ((r[(r.AUDIO = 0)] = "AUDIO"), (r[(r.VIDEO = 1)] = "VIDEO"), r))(jh || {}),
  qh = ((r) => ((r[(r.AUTO = 0)] = "AUTO"), (r[(r.MANUAL = 1)] = "MANUAL"), r))(qh || {}),
  Gs = ((r) => (
    (r[(r.ORIGINATING_DEVICE = 0)] = "ORIGINATING_DEVICE"),
    (r[(r.PAIRED_WATCH = 1)] = "PAIRED_WATCH"),
    (r[(r.SONOS = 2)] = "SONOS"),
    (r[(r.CAR_PLAY = 3)] = "CAR_PLAY"),
    (r[(r.WEB_AUC = 4)] = "WEB_AUC"),
    (r[(r.TWITTER_AUC = 5)] = "TWITTER_AUC"),
    (r[(r.MUSIC_SDK = 6)] = "MUSIC_SDK"),
    (r[(r.ATV_REMOTE = 7)] = "ATV_REMOTE"),
    (r[(r.WEBPLAYER = 8)] = "WEBPLAYER"),
    (r[(r.WHOLE_HOUSE_AUDIO = 9)] = "WHOLE_HOUSE_AUDIO"),
    (r[(r.MUSICKIT = 10)] = "MUSICKIT"),
    (r[(r.VW = 11)] = "VW"),
    (r[(r.UNKNOWN_SOURCE_TYPE = 12)] = "UNKNOWN_SOURCE_TYPE"),
    (r[(r.AMAZON = 13)] = "AMAZON"),
    (r[(r.PORSCHE = 14)] = "PORSCHE"),
    (r[(r.CHROMECAST = 15)] = "CHROMECAST"),
    (r[(r.WEB_APP = 16)] = "WEB_APP"),
    (r[(r.MERCEDES_BENZ = 17)] = "MERCEDES_BENZ"),
    (r[(r.THIRD_PARTY_TV = 18)] = "THIRD_PARTY_TV"),
    (r[(r.SEAT = 19)] = "SEAT"),
    (r[(r.CUPRA = 20)] = "CUPRA"),
    r
  ))(Gs || {}),
  Wh = ((r) => ((r[(r.EPISODE = 1)] = "EPISODE"), (r[(r.SHOUTCAST = 2)] = "SHOUTCAST"), r))(Wh || {});
const Mn = "/",
  ae = { CRITICAL: 50, ERROR: 40, WARNING: 30, NOTICE: 20, INFO: 10, DEBUG: 2, TRACE: 1, NONE: 0 };
function Yh(r) {
  return typeof r != "string" ? !1 : ae[r.toUpperCase()] !== void 0;
}
function Gh(r) {
  return typeof r != "number" ? !1 : Object.values(ae).includes(r);
}
const qa = {
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
function Ct(r, e = {}) {
  if (typeof r == "number") return Gh(r) ? r : void 0;
  let t = r.toUpperCase();
  return (e.allowShorthands && qa[t] !== void 0 && (t = qa[t]), Yh(t) ? ae[t] : void 0);
}
function Dc(r) {
  for (const [e, t] of Object.entries(ae)) if (r === t) return e;
}
function zh(r, e = { includeRoot: !0 }) {
  return (
    Nc(r, function (t) {
      (t.parent === void 0 && !e.includeRoot) || t.clearLevel();
    }),
    r
  );
}
function Qh(r, e) {
  return (
    Nc(r, function (t) {
      let i;
      const s = t.namespace;
      (t.clearLevel(),
        t.parent === void 0 && e["*"] !== void 0 ? (i = Ct(e["*"])) : e[s] !== void 0 && (i = Ct(e[s])),
        i !== void 0 && t.setLevel(i));
    }),
    r
  );
}
function Xh(r) {
  var s, n, a, o;
  const e = Ct(r.trim(), { allowShorthands: !0 });
  if (e !== void 0) return { "*": e };
  const t = {},
    i = r.split(",").filter((l) => l.trim() !== "");
  for (const l of i) {
    const u = l.split("=", 2);
    if (u.length !== 2) continue;
    const d = (n = (s = u[0]) == null ? void 0 : s.trim()) != null ? n : "",
      p = (o = (a = u[1]) == null ? void 0 : a.trim()) != null ? o : "",
      y = Ct(p, { allowShorthands: !0 });
    d !== "" && y !== void 0 && (t[d] = y);
  }
  return t;
}
function Nc(r, e) {
  const t = [r];
  for (; t.length > 0;) {
    const i = t.shift();
    i !== void 0 && (t.push(...i.children), e(i));
  }
}
const Jh = ae.ERROR,
  Zh = (r, e) => r !== ae.NONE && e >= r;
let Ut = class Lc {
  constructor(e, t) {
    c(this, "name");
    c(this, "_parent");
    c(this, "_children", new Map());
    c(this, "_level");
    c(this, "_levelPolicy");
    c(this, "_handlers");
    ((this.name = e),
      (this._levelPolicy = t == null ? void 0 : t.levelPolicy),
      (this._handlers = t == null ? void 0 : t.handlers),
      (t == null ? void 0 : t.parent) !== void 0 && this.linkParent(t.parent),
      (t == null ? void 0 : t.level) !== void 0 && this.setLevel(t.level));
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
    return this.level !== ae.NONE;
  }
  get level() {
    var e, t, i;
    return (i = (t = this._level) != null ? t : (e = this.parent) == null ? void 0 : e.level) != null ? i : Jh;
  }
  get levelName() {
    var e;
    return (e = Dc(this.level)) != null ? e : "UNKNOWN";
  }
  get levelPolicy() {
    var e, t, i;
    return (i = (t = this._levelPolicy) != null ? t : (e = this.parent) == null ? void 0 : e.levelPolicy) != null
      ? i
      : Zh;
  }
  get handlers() {
    var e, t, i;
    return (i = (t = this._handlers) != null ? t : (e = this.parent) == null ? void 0 : e.handlers) != null ? i : {};
  }
  isEnabledFor(e) {
    return this.levelPolicy(this.level, e);
  }
  setLevel(e) {
    const t = Ct(e);
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
    var t;
    return ((t = this._handlers) == null ? void 0 : t[e]) !== void 0;
  }
  removeHandler(e) {
    this._handlers !== void 0 &&
      (delete this._handlers[e], Object.keys(this._handlers).length === 0 && this.clearHandlers());
  }
  clearHandlers() {
    this._handlers = void 0;
  }
  createChild(e, t) {
    const i = this._children.get(e);
    return i !== void 0 ? i : new Lc(e, { ...t, parent: this });
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
    return ef(this, e);
  }
  linkParent(e) {
    return (this.parent !== e && (this.unlinkParent(), (this._parent = e), e.linkChild(this)), this);
  }
  unlinkParent() {
    return (this._parent !== void 0 && (this._parent.unlinkChild(this), (this._parent = void 0)), this);
  }
  log(e, t, ...i) {
    const s = Ct(e);
    s !== void 0 && this.logRecord({ time: Date.now(), namespace: this.namespace, level: s, message: t, args: i });
  }
  logRecord(e) {
    if (!this.levelPolicy(this.level, e.level)) return;
    const t = { namespace: this.namespace, ...e };
    for (const i of Object.values(this.handlers)) i.process(t);
  }
  error(e, ...t) {
    this.log(ae.ERROR, e, ...t);
  }
  warning(e, ...t) {
    this.log(ae.WARNING, e, ...t);
  }
  warn(e, ...t) {
    this.warning(e, ...t);
  }
  info(e, ...t) {
    this.log(ae.INFO, e, ...t);
  }
  debug(e, ...t) {
    this.log(ae.DEBUG, e, ...t);
  }
  trace(e, ...t) {
    this.log(ae.TRACE, e, ...t);
  }
};
function ef(r, e, t = Mn) {
  if (((e = e.trim()), e === "" || e === "*")) return r;
  const i = e.split(t);
  if ((i[0].trim() === r.name && i.shift(), i.length === 0)) return r;
  let s = r;
  for (; s !== void 0 && i.length > 0;) {
    const n = i.shift();
    s = s.getByName(n.trim());
  }
  return s;
}
class Mc {
  constructor(e, t = {}) {
    c(this, "enabled");
    c(this, "callback");
    var i;
    ((this.callback = e), (this.enabled = (i = t.enabled) != null ? i : !0));
  }
  process(e) {
    this.enabled && this.callback !== void 0 && this.callback(e);
  }
}
const tf = /%{([^}]+)}/gi,
  Wa = {
    timestamp: (r) => String(r.time),
    time: (r) => String(r.time),
    datetime: (r) => new Date(r.time).toISOString(),
    date: (r) => new Date(r.time).toISOString(),
    level: (r) => String(r.level),
    levelname: (r) => {
      var e;
      return (e = Dc(r.level)) != null ? e : "UNKNOWN";
    },
    message: (r) => r.message,
    name: (r) => r.namespace.split(Mn).pop(),
    namespace: (r) => r.namespace,
  };
function rf(r) {
  return function (e) {
    return r.replace(tf, function (t, i) {
      return ((i = i.toLowerCase()), Wa[i] !== void 0 ? Wa[i](e) : t);
    });
  };
}
const sf = new Map([
    [ae.CRITICAL, "error"],
    [ae.ERROR, "error"],
    [ae.WARNING, "warn"],
    [ae.NOTICE, "warn"],
    [ae.INFO, "log"],
    [ae.DEBUG, "debug"],
  ]),
  nf = rf("%{datetime} %{levelname} - [%{namespace}] %{message}");
function af(r) {
  return r !== void 0 && r in console;
}
class of {
  constructor(e = {}) {
    c(this, "enabled");
    c(this, "mapLevels");
    c(this, "levelMapping");
    c(this, "format");
    var t, i, s, n;
    ((this.enabled = (t = e.enabled) != null ? t : !0),
      (this.mapLevels = (i = e.mapLevels) != null ? i : !0),
      (this.levelMapping = (s = e.levelMapping) != null ? s : sf),
      (this.format = (n = e.formatter) != null ? n : nf));
  }
  get hasConsole() {
    return typeof console < "u";
  }
  process(e) {
    var n;
    if (!this.enabled || !this.hasConsole) return;
    let t = "log";
    if (this.mapLevels) {
      const a = this.levelMapping.get(e.level);
      af(a) && (t = a);
    }
    const i = (n = e.args) != null ? n : [],
      s = this.format(e);
    console[t](s, ...i);
  }
}
const VE = new Ut("paf"),
  cf = new Map([
    ["play", Pt.PLAY_START],
    ["playbackstarted", Pt.PLAY_START],
    ["stop", Pt.PLAY_END],
    ["playbackstopped", Pt.PLAY_END],
  ]);
function lf(r) {
  var e;
  return typeof r == "number" ? r : (e = cf.get(r)) != null ? e : Pt.PLAY_END;
}
const uf = new Map([
  ["exit", R.EXITED_APPLICATION],
  ["next", R.TRACK_SKIPPED_FORWARDS],
  ["pause", R.PLAYBACK_MANUALLY_PAUSED],
  ["playbackfinished", R.NATURAL_END_OF_TRACK],
  ["playbackstopped", R.PLAYBACK_MANUALLY_PAUSED],
  ["previous", R.TRACK_SKIPPED_BACKWARDS],
  ["scrub_begin", R.SCRUB_BEGIN],
  ["scrub_end", R.SCRUB_END],
  ["stop", R.NATURAL_END_OF_TRACK],
]);
function df(r) {
  if (r !== void 0) return uf.get(r);
}
function BE(r) {
  const e = mt(r),
    t = hf(r);
  return (
    (e.eventType = t.eventType),
    (e.eventTypeString = t.eventTypeString),
    e.endReasonType === void 0 && t.eventTypeString !== void 0 && (e.endReasonType = df(t.eventTypeString)),
    e.reporting !== !1 && (e.reporting = !0),
    e
  );
}
function hf(r) {
  var t;
  const e = (t = r.eventType) != null ? t : Pt.PLAY_START;
  return typeof e == "number" ? { eventType: e } : { eventTypeString: e, eventType: lf(e) };
}
const ff = {
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
  pf = 5 * 60,
  yf =
    (r = pf) =>
    (e, t, i) => {
      if (i === void 0 || typeof i.value != "function")
        throw new TypeError(`Only methods can be decorated with @CachedResult, but ${t} is not a method.`);
      return {
        configurable: !0,
        get: function () {
          const s = i.value,
            n = r * 1e3;
          let a = -1,
            o;
          async function l(...u) {
            const d = Date.now();
            return ((o === void 0 || a === -1 || (a > 0 && d > a + n)) && ((a = d), (o = await s.apply(this, u))), o);
          }
          return (
            (l.updateCache = function (u) {
              ((a = Date.now()), (o = u));
            }),
            (l.getCachedValue = () => o),
            Object.defineProperty(this, t, { value: l, configurable: !0, writable: !0 }),
            l
          );
        },
      };
    },
  mf = {
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
function gf(r = "en-US") {
  const e = ds[r.toLowerCase()];
  if (e) return e;
  if (r.includes("-")) {
    const i = r.split("-")[0],
      s = ds[i.toLowerCase()];
    if (s) return s;
  }
  return ds["en-us"];
}
const ds = {
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
let St = "Music-User-Token";
St = "Media-User-Token";
function Uc() {
  if (typeof navigator > "u") return [];
  if (navigator.languages) return navigator.languages;
  const r = navigator.language || navigator.userLanguage;
  return r ? [r] : [];
}
const vf = [
  "apps.apple.com",
  "books.apple.com",
  "fitness.apple.com",
  "music.apple.com",
  "podcasts.apple.com",
  "tv.apple.com",
];
function xc(r) {
  let e = r;
  return (
    r &&
      vf.some(function (t) {
        if (r.endsWith(`.${t}`)) return ((e = t), !0);
      }),
    e
  );
}
const bf = new Set(["apps", "books", "music", "podcasts", "tv"]),
  _f = /\.apple\.com$/;
function Tf(r) {
  if (!r || !_f.test(r)) return;
  const e = r.split(".");
  let t = e[e.length - 3];
  const i = t;
  if (t && t.includes("-")) {
    const s = t.split("-");
    t = s[s.length - 1];
  }
  if (bf.has(t)) return i;
}
function Dr(r, e) {
  !e && typeof location < "u" && location.hostname && (e = location);
  let t = `${r}.itunes.apple.com`;
  if (!e) return t;
  const i = Tf(e.hostname);
  return (i && (t = `${r}.${i}.apple.com`), t);
}
function yi(r = { app: "music", p: "subscribe" }) {
  return (
    typeof r.app > "u" && (r.app = "music"),
    typeof r.p > "u" && (r.p = "subscribe"),
    Object.keys(r)
      .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`)
      .join("&")
  );
}
var j = ((r) => (
    (r.DEFAULT_CID = "pldfltcid"),
    (r.TV_CID = "pltvcid"),
    (r.RESTRICTIONS_ENABLED = "itre"),
    (r.STOREFRONT_COUNTRY_CODE = "itua"),
    (r.USER_TOKEN = "media-user-token"),
    r
  ))(j || {}),
  le = ((r) => ((r[(r.MUSIC = 0)] = "MUSIC"), (r[(r.PODCAST = 1)] = "PODCAST"), (r[(r.TV = 2)] = "TV"), r))(le || {});
const Ef = {
    [le.TV]: "com.apple.onboarding.tvappweb",
    [le.MUSIC]: "com.apple.onboarding.musicappweb",
    [le.PODCAST]: "com.apple.onboarding.podcastsweb",
  },
  hs = { [le.TV]: "pltvcid", [le.MUSIC]: "pldfltcid", [le.PODCAST]: "pldfltcid" },
  Sf = {
    "com.apple.onboarding.tvappweb": 1,
    "com.apple.onboarding.musicappweb": 1,
    "com.apple.onboarding.podcastsweb": 1,
  },
  ge = new Ut("storekit"),
  Ya = "*",
  fs = "2.0";
class Ga {
  constructor(e = {}) {
    c(this, "destination");
    c(this, "origin");
    c(this, "methods");
    c(this, "_registry", {});
    c(this, "_sequence", 0);
    c(this, "_source");
    c(this, "handle", (e) => {
      !e.data ||
        e.data.jsonrpc !== fs ||
        (this.origin !== Ya && this.origin !== e.origin) ||
        (e.data.method && this.destination
          ? this.handleRequest(e.data).then((t) => {
              this.send(this.destination, t);
            })
          : (Qe(e.data, "result") || e.data.error) && this.handleResponse(e.data));
    });
    ((this.destination = e.destination),
      (this.methods = e.methods || {}),
      (this.origin = e.origin || Ya),
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
    const i = this._sequence++,
      s = new Promise((n, a) => {
        this._registry[i] = { resolve: n, reject: a };
      });
    return (this.send(this.destination, { jsonrpc: fs, id: i, method: e, params: t }), s);
  }
  call(e, ...t) {
    return this.apply(e, t);
  }
  async handleRequest(e) {
    const t = { jsonrpc: fs, id: e.id },
      i = this.methods[e.method];
    if (!i) return Object.assign(t, { error: { code: -32601, message: "Method not found" } });
    try {
      const s = await i.apply(void 0, kd(e.params));
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
}
var he = ((r) => (
  (r[(r.UNAVAILABLE = -1)] = "UNAVAILABLE"),
  (r[(r.NOT_DETERMINED = 0)] = "NOT_DETERMINED"),
  (r[(r.DENIED = 1)] = "DENIED"),
  (r[(r.RESTRICTED = 2)] = "RESTRICTED"),
  (r[(r.AUTHORIZED = 3)] = "AUTHORIZED"),
  r
))(he || {});
function zs(r) {
  return typeof r == "string" && r.length > 0;
}
const If = `https://${Dr("buy")}/commerce/account/authenticateMusicKitRequest`,
  Qs = "https://authorize.music.apple.com",
  kf = `${Qs}/upsell`,
  Pf = /^https?:\/\/(.+\.)*(apple\.com|apps\.mzstatic\.com)(\/[\w\d]+)*$/;
var Xs = ((r) => ((r[(r.AUTHORIZE = 0)] = "AUTHORIZE"), (r[(r.SUBSCRIBE = 1)] = "SUBSCRIBE"), r))(Xs || {});
class Af {
  constructor(e, t = {}) {
    c(this, "authenticateMethod", "GET");
    c(this, "deeplinkParameters");
    c(this, "iconURL");
    c(this, "target", "apple-music-service-view");
    c(this, "dispatch");
    c(this, "_window");
    c(this, "_windowClosedInterval");
    var i, s;
    if (
      ((this.developerToken = e),
      (this.deeplinkParameters = (t && t.deeplinkParameters) || {}),
      (this.iconURL = t && t.iconURL),
      (this.authenticateMethod = (t && t.authenticateMethod) || "GET"),
      this.isServiceView && window.opener !== window)
    ) {
      const n = (i = Rn()) == null ? void 0 : i.getItem("ac"),
        a = n != null ? new URL(n).origin : void 0;
      a &&
        (this.dispatch = new Ga({ destination: (s = window.opener) != null ? s : void 0, origin: a, source: window }));
    }
  }
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
    const { height: i, left: s, top: n, width: a } = this._calculateClientDimensions(),
      o = { height: 650, menubar: "no", resizable: "no", scrollbars: "no", status: "no", toolbar: "no", width: 650 },
      l = { ...o, left: a / 2 - o.width / 2 + s, top: i / 2 - o.height / 2 + n, ...t },
      u = Object.keys(l)
        .map((d) => `${d}=${l[d]}`)
        .join(",");
    return (
      /trident|msie/i.test(navigator.userAgent)
        ? ((this._window = window.open(window.location.href, this.target, u) || void 0),
          (this._window.location.href = e))
        : (this._window = window.open(e, this.target, u) || void 0),
      /\bedge\b/i.test(navigator.userAgent) && (this._window.opener = self),
      this.focus(),
      this._window
    );
  }
  _startPollingForWindowClosed(e) {
    !this._window ||
      this._windowClosedInterval !== void 0 ||
      (this._windowClosedInterval = setInterval(() => {
        var t;
        (t = this._window) != null && t.closed && (this._stopPollingForWindowClosed(), e());
      }, 500));
  }
  _stopPollingForWindowClosed() {
    this._windowClosedInterval !== void 0 &&
      (clearInterval(this._windowClosedInterval), (this._windowClosedInterval = void 0));
  }
  async _authorizeAction(e = {}) {
    var n;
    let t, i;
    const s = ((n = window.location) == null ? void 0 : n.href) || "";
    return (
      this.authenticateMethod === "GET"
        ? (i = `${Qs}/woa?${yi({ ...this.deeplinkParameters, a: btoa(this._thirdPartyInfo()), referrer: s })}`)
        : ((t = this._buildFormElement(If)), document.body.appendChild(t)),
      new Promise((a, o) => {
        const l = this.present(i);
        (this._startPollingForWindowClosed(() => {
          o(0);
        }),
          (this.dispatch = new Ga({
            methods: {
              authorize: function (u, d, p) {
                zs(u) ? a({ restricted: d && d === "1", userToken: u, cid: p }) : o(0);
              },
              close: function () {},
              decline: function () {
                o(1);
              },
              switchUserId: function () {
                o(0);
              },
              thirdPartyInfo: () => this._thirdPartyInfo(this.developerToken, { ...this.deeplinkParameters, ...e }),
              unavailable: function () {
                o(-1);
              },
            },
            origin: Qs,
            source: window,
            destination: l,
          })),
          t && t.submit());
      })
    );
  }
  _buildFormElement(e, t = this.target, i = this.developerToken) {
    const s = document.createElement("form");
    (s.setAttribute("method", "post"),
      s.setAttribute("action", e),
      s.setAttribute("target", t),
      (s.style.display = "none"));
    const n = document.createElement("input");
    (n.setAttribute("name", "jwtToken"), n.setAttribute("value", i), s.appendChild(n));
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
      new Promise((t, i) => {
        const s = `${kf}?${yi(e)}`;
        (this.present(s),
          window.addEventListener("message", ({ data: n, origin: a, source: o }) => {
            const { closeWindow: l, launchClient: u } = typeof n == "string" ? JSON.parse(n) : n;
            (!a || Pf.test(a)) &&
              (u
                ? u.supported === 0
                  ? i("Unable to subscribe on this platform.")
                  : t(u)
                : i("Subscribe action error."));
          }));
      })
    );
  }
  _thirdPartyInfo(e = this.developerToken, t) {
    var a;
    let i = this.iconURL;
    const s = window.location.host || document.referrer,
      n = [
        ...[].slice.call(document.querySelectorAll('link[rel="apple-music-app-icon"]')),
        ...[].slice.call(document.querySelectorAll('link[rel="apple-touch-icon-precomposed"]')),
        ...[].slice.call(document.querySelectorAll('link[rel="apple-touch-icon"]')),
      ];
    if (n && n[0] && n[0].href) {
      const o = n.find((l) => (l.sizes ? l.sizes.value === "120x120" : !1));
      i = (a = o == null ? void 0 : o.href) != null ? a : n[0].href;
    }
    return JSON.stringify({ thirdPartyIconURL: i, thirdPartyName: s, thirdPartyParameters: t, thirdPartyToken: e });
  }
}
var Fc = ((r) => ((r.ID = "us"), (r.LANGUAGE_TAG = "en-gb"), r))(Fc || {});
async function wf(r, e = "https://api.music.apple.com/v1") {
  const t = new Headers({ Authorization: `Bearer ${r}` }),
    s = await (await fetch(`${e}/storefronts`, { headers: t })).json();
  return s.errors ? Promise.reject(s.errors) : s.data;
}
class za {
  constructor(e, t, i) {
    c(this, "href");
    c(this, "type");
    ((this.id = e), (this.attributes = t), (this.type = "storefronts"), (this.href = i || `/v1/${this.type}/${e}`));
  }
  static async inferFromLanguages(e, t = Uc()) {
    const i = await wf(e),
      s = i.map((u) => u.id),
      n = t[0] || "en-US",
      [a, o] = n.toLowerCase().split(/-|_/),
      l = s.includes(o) ? o : "us";
    return i.find((u) => u.id === l);
  }
}
const Kc = ["music.apple.com", "podcasts.apple.com", "tv.apple.com", "apps.apple.com"],
  Vc = "mut-refresh",
  Gr = [Vc, j.DEFAULT_CID, j.STOREFRONT_COUNTRY_CODE, j.TV_CID, j.USER_TOKEN],
  Rf = new Map([
    ["signIn", "/auth/v2/web"],
    ["signOut", "/auth/v2/web/logout"],
    ["refresh", "/auth/v2/web/refresh"],
  ]);
function Cf(r) {
  if (!r) return !1;
  for (const e of Kc) if (e === r || r.endsWith(`.${e}`)) return !0;
  return !1;
}
class Of {
  constructor({
    hostname: e,
    developerToken: t,
    getUserToken: i,
    startingUserToken: s,
    onRequestsComplete: n,
    allowMultiReflection: a,
  }) {
    c(this, "developerToken");
    c(this, "getUserToken");
    c(this, "onRequestsComplete");
    c(this, "allowMultiReflection", !1);
    c(this, "previousUserToken");
    c(this, "hostname");
    ((this.hostname = e),
      (this.developerToken = t),
      (this.getUserToken = i),
      (this.previousUserToken = s),
      (this.onRequestsComplete = n),
      (this.allowMultiReflection = a && Cf(this.hostname)),
      (this.onUserTokenChange = this.onUserTokenChange.bind(this)),
      ge.debug("Reflector allowMultiReflection?", this.allowMultiReflection));
  }
  onUserTokenChange(e) {
    const t = this.getUserToken(),
      i = this.previousUserToken !== t;
    if (((this.previousUserToken = t), ge.debug("Reflector.onUserTokenChange hasChanged?", i), i))
      return t ? ((e == null ? void 0 : e.domainReflection) === !1 ? void 0 : this.reflect()) : this.clear();
  }
  skipJsCookieWrite(e) {
    return Gr.includes(e);
  }
  refresh() {
    if (!this.allowMultiReflection) return;
    const e = vt(Vc);
    if (vt(j.USER_TOKEN) && !e) return this.makeRequests("refresh");
  }
  reflect() {
    if (this.allowMultiReflection) return this.makeRequests("signIn");
    {
      const e = Gr.map((t) => vt(t));
      (this.clearAppleComCookies(),
        Gr.forEach((t, i) => {
          const s = e[i],
            n = vt(t);
          s &&
            !n &&
            (ge.debug("Reflector.reflect calling setCookie", t, s), wn(t, s, "/", 166, void 0, xc(this.hostname)));
        }));
    }
  }
  clear() {
    if (this.allowMultiReflection) return this.makeRequests("signOut");
    ge.debug("Reflector nothing to clear, no allowMultiReflection");
  }
  async makeRequests(e) {
    ge.debug("Reflector makeRequests()", e);
    try {
      const t = Rf.get(e);
      for (const i of Kc) {
        const s = `https://auth.${i}${t}`;
        ge.debug("Reflector.makeRequests for", s);
        try {
          await fetch(s, {
            headers: { Authorization: `Bearer ${this.developerToken}` },
            method: "POST",
            credentials: "include",
          });
        } catch (n) {
          ge.error("Reflector fetch failed for ", s, n);
        }
      }
      this.clearAppleComCookies();
    } catch (t) {
      ge.error("Reflector makeRequests failed", t);
    }
    (ge.debug("Reflector calling onRequestsComplete"), this.onRequestsComplete());
  }
  clearAppleComCookies() {
    (ge.debug("Reflector.clearAppleComCookies"), Gr.forEach((e) => Ms(e, void 0, "apple.com")));
  }
}
var Df = Object.defineProperty,
  Nf = Object.getOwnPropertyDescriptor,
  Lf = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Nf(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Df(e, t, s), s);
  },
  tt = ((r) => (
    (r.authorizationStatusDidChange = "authorizationStatusDidChange"),
    (r.authorizationStatusWillChange = "authorizationStatusWillChange"),
    (r.eligibleForSubscribeView = "eligibleForSubscribeView"),
    (r.authReflectionDidComplete = "authReflectionDidComplete"),
    (r.needsGDPRDidChange = "needsGDPRDidChange"),
    (r.storefrontCountryCodeDidChange = "storefrontCountryCodeDidChange"),
    (r.storefrontIdentifierDidChange = "storefrontIdentifierDidChange"),
    (r.userTokenDidChange = "userTokenDidChange"),
    r
  ))(tt || {});
j.DEFAULT_CID;
let ci = !1;
ci = !0;
const Mf = `https://${Dr("buy")}`,
  Uf = `https://${Dr("play")}/WebObjects/MZPlay.woa/wa`;
class Bc extends Mt {
  constructor(t, i) {
    var s;
    super([
      "authorizationStatusDidChange",
      "authorizationStatusWillChange",
      "eligibleForSubscribeView",
      "authReflectionDidComplete",
      "needsGDPRDidChange",
      "storefrontCountryCodeDidChange",
      "userTokenDidChange",
      "storefrontIdentifierDidChange",
    ]);
    c(this, "apiBase", "https://api.music.apple.com/v1");
    c(this, "bundleId");
    c(this, "cidNamespace");
    c(this, "deeplinkParameters");
    c(this, "iconURL");
    c(this, "iTunesBuyBase", Mf);
    c(this, "meParameters", {});
    c(this, "persist", "localstorage");
    c(this, "playBase", Uf);
    c(this, "prefix", "music");
    c(this, "realm", le.MUSIC);
    c(this, "storage", ze());
    c(this, "storagePrefix");
    c(this, "whenAuthCompleted");
    c(this, "fetch");
    c(this, "_authorizationStatus", he.NOT_DETERMINED);
    c(this, "_developerToken");
    c(this, "_disableLogoutURL", !1);
    c(this, "_dispatchedSubscribeView", !1);
    c(this, "_me", null);
    c(this, "_cids", {});
    c(this, "_gdprVersion", -1);
    c(this, "_needsGDPR");
    c(this, "_isU13");
    c(this, "_parentalControls");
    c(this, "_privacyAcknowledgements");
    c(this, "_restrictedEnabled");
    c(this, "_restrictedEnabledOverridden", !1);
    c(this, "_serviceSetupView");
    c(this, "_pendingUpdateConfig");
    c(this, "reflector");
    c(this, "_storefrontCountryCode");
    c(this, "_storefrontIdentifier");
    c(this, "_dynamicUserToken", vt(j.USER_TOKEN));
    ((this.developerToken = t),
      ge.info("StoreKit initialized"),
      i &&
        (i.apiBase && (this.apiBase = i.apiBase),
        i.deeplink && (this.deeplinkParameters = i.deeplink),
        i.meParameters && (this.meParameters = i.meParameters),
        i.persist && (this.persist = i.persist),
        i.prefix && (this.prefix = i.prefix),
        i.realm !== void 0 && (this.realm = i.realm),
        i.disableLogoutURL !== void 0 && (this._disableLogoutURL = i.disableLogoutURL),
        (this.bundleId = Ef[this.realm])),
      (this.fetch = i !== void 0 && typeof i.fetch == "function" ? i.fetch : globalThis.fetch.bind(globalThis)),
      (this.cidNamespace = hs[this.realm]),
      (this._developerToken = new qd(t)),
      (this._serviceSetupView = new Af(t, {
        authenticateMethod: i && i.authenticateMethod,
        iconURL: i && i.iconURL,
        deeplinkParameters: this.deeplinkParameters,
      })),
      (this.storagePrefix = `${this.prefix}.${this._developerToken.teamId}`.toLocaleLowerCase()),
      !wt() &&
        this.persist === "cookie" &&
        (ge.debug("Creating Reflector"),
        (this.reflector = new Of({
          hostname: window.location.hostname,
          developerToken: this.developerToken,
          getUserToken: () => this.userToken,
          startingUserToken: vt(j.USER_TOKEN),
          onRequestsComplete: () => {
            (this.userToken !== vt(j.USER_TOKEN) &&
              (ge.debug("StoreKit.onRequestsComplete called, resetting"),
              this.updateUserTokenFromStorage(),
              (this._cids = {})),
              this.dispatchEvent("authReflectionDidComplete"));
          },
          allowMultiReflection: !(i != null && i.disableAuthBridge),
        })),
        this.addEventListener("userTokenDidChange", this.reflector.onUserTokenChange)),
      this.updateUserTokenFromStorage(),
      this.developerToken &&
        this.userTokenIsValid &&
        ((this._restrictedEnabled = this.restrictedEnabled),
        this.shouldDisplayPrivacyLink(this.bundleId).catch(() => {})),
      (this._storefrontCountryCode = this.storefrontCountryCode),
      (this.whenAuthCompleted = Promise.resolve()),
      wt() ||
        (this._processLocationHash(window.location.hash),
        this.persist === "cookie" && ((s = this.reflector) == null || s.refresh())));
  }
  updateUserTokenFromStorage(t) {
    const i = this._getStorageItem(j.USER_TOKEN);
    if (((this._pendingUpdateConfig = t), this.persist === "cookie" && i === this.userToken)) {
      const n = (Cd(j.USER_TOKEN) || []).find((a) => a !== this.userToken);
      if (n) {
        ((this.userToken = n), (this._pendingUpdateConfig = void 0));
        return;
      }
    }
    ((this.userToken = i || void 0), (this._pendingUpdateConfig = void 0));
  }
  get authorizationStatus() {
    return this._authorizationStatus;
  }
  set authorizationStatus(t) {
    this._authorizationStatus !== t &&
      (this._getIsActiveSubscription.updateCache(void 0),
      this.dispatchEvent("authorizationStatusWillChange", {
        authorizationStatus: this._authorizationStatus,
        newAuthorizationStatus: t,
      }),
      (this._authorizationStatus = t),
      this.dispatchEvent("authorizationStatusDidChange", { authorizationStatus: t }));
  }
  get cid() {
    if (!this._cids[this.cidNamespace]) {
      const t = this._getStorageItem(this.cidNamespace);
      this._cids[this.cidNamespace] = t || void 0;
    }
    return this._cids[this.cidNamespace];
  }
  set cid(t) {
    (t ? this._setStorageItem(this.cidNamespace, t) : this._removeStorageItem(this.cidNamespace),
      (this._cids[this.cidNamespace] = t));
  }
  async eligibleForSubscribeView() {
    const t = await this.hasMusicSubscription();
    return (!this.hasAuthorized || (this.hasAuthorized && !t)) && !this._dispatchedSubscribeView;
  }
  get hasAuthorized() {
    return this.authorizationStatus > he.DENIED;
  }
  get logoutURL() {
    if (!this._disableLogoutURL)
      return ci ? `${this.iTunesBuyBase}/account/web/logout` : `${this.playBase}/webPlayerLogout`;
  }
  get parentalControls() {
    return this._parentalControls;
  }
  set parentalControls(t) {
    ((this._parentalControls = t),
      t &&
        (this.realm === le.MUSIC || this.realm === le.PODCAST
          ? (this.restrictedEnabled = t.musicParentalControlsEnabled)
          : this.realm === le.TV && t.videoContentRestrictions && (this.authorizationStatus = he.RESTRICTED)));
  }
  get isU13() {
    return !!this._isU13;
  }
  set isU13(t) {
    this._isU13 = t;
  }
  get _pldfltcid() {
    return this._cids[j.DEFAULT_CID];
  }
  set _pldfltcid(t) {
    this._cids[j.DEFAULT_CID] = t;
  }
  get privacyAcknowledgements() {
    return this._privacyAcknowledgements;
  }
  set privacyAcknowledgements(t) {
    var i;
    if (((this._privacyAcknowledgements = t), !t)) {
      ((this._gdprVersion = -1), (this._needsGDPR = void 0));
      return;
    }
    if (this.bundleId) {
      const s = (i = this._needsGDPR) != null ? i : !1;
      ((this._gdprVersion = t[this.bundleId] || 0),
        (this._needsGDPR = this._gdprVersion < (Sf[this.bundleId] || 0)),
        s !== this._needsGDPR &&
          this.dispatchEvent("needsGDPRDidChange", { GDPRVersion: this._gdprVersion, needsGDPR: this._needsGDPR }));
    }
  }
  get restrictedEnabled() {
    if (this.userToken && typeof this._restrictedEnabled != "boolean") {
      const t = this._getStorageItem(j.RESTRICTIONS_ENABLED);
      if (t) this._restrictedEnabled = t !== "0";
      else if (this._storefrontCountryCode) {
        const i = ["br", "ch", "gt", "hu", "id", "in", "it", "kr", "la", "lt", "my", "ru", "sg", "tr"];
        this._restrictedEnabled = i.indexOf(this._storefrontCountryCode) !== -1 || void 0;
      }
    }
    return this._restrictedEnabled;
  }
  set restrictedEnabled(t) {
    this._restrictedEnabledOverridden ||
      (this.userToken && t !== void 0 && this._setStorageItem(j.RESTRICTIONS_ENABLED, t ? "1" : "0"),
      (this._restrictedEnabled = t),
      t && (this.authorizationStatus = he.RESTRICTED));
  }
  overrideRestrictEnabled(t) {
    ((this._restrictedEnabledOverridden = !1), (this.restrictedEnabled = t), (this._restrictedEnabledOverridden = !0));
  }
  get storefrontCountryCode() {
    if (!this._storefrontCountryCode) {
      const t = this._getStorageItem(j.STOREFRONT_COUNTRY_CODE);
      this._storefrontCountryCode = (t == null ? void 0 : t.toLowerCase()) || Fc.ID;
    }
    return this._storefrontCountryCode;
  }
  set storefrontCountryCode(t) {
    (t && this.userToken
      ? this._setStorageItem(j.STOREFRONT_COUNTRY_CODE, t)
      : this._removeStorageItem(j.STOREFRONT_COUNTRY_CODE),
      t !== this._storefrontCountryCode &&
        ((this._storefrontCountryCode = t),
        this.dispatchEvent("storefrontCountryCodeDidChange", { storefrontCountryCode: t })));
  }
  get storefrontIdentifier() {
    return this._storefrontIdentifier;
  }
  set storefrontIdentifier(t) {
    ((this._storefrontIdentifier = t),
      this.dispatchEvent("storefrontIdentifierDidChange", { storefrontIdentifier: t }));
  }
  runTokenValidations(t, i = !0) {
    t && zs(t)
      ? (i && this._setStorageItem(j.USER_TOKEN, t),
        (this.authorizationStatus = this.restrictedEnabled ? he.RESTRICTED : he.AUTHORIZED))
      : (this._removeStorageItem(j.USER_TOKEN), (this.authorizationStatus = he.NOT_DETERMINED));
  }
  wrapDynamicUserTokenForChanges(t, i = qr(t)) {
    if (typeof t != "function") return t;
    let s = i;
    return () => {
      const n = qr(t);
      return (
        s !== n &&
          ((s = n), this.runTokenValidations(n, !1), this.dispatchEvent("userTokenDidChange", { userToken: n })),
        n || ""
      );
    };
  }
  get dynamicUserToken() {
    return this._dynamicUserToken;
  }
  set dynamicUserToken(t) {
    var s;
    const i = qr(t);
    ((this._dynamicUserToken = this.wrapDynamicUserTokenForChanges(t, i)),
      this.runTokenValidations(i, typeof t != "function"),
      this.dispatchEvent("userTokenDidChange", {
        userToken: i,
        domainReflection: (s = this._pendingUpdateConfig) == null ? void 0 : s.domainReflection,
      }));
  }
  get userToken() {
    return qr(this.dynamicUserToken);
  }
  set userToken(t) {
    this.dynamicUserToken = t;
  }
  get userTokenIsValid() {
    return zs(this.userToken);
  }
  deeplinkURL(t = {}) {
    return (
      (t = { ...(this.deeplinkParameters || {}), ...t }), `https://finance-app.itunes.apple.com/deeplink?${yi(t)}`
    );
  }
  itunesDeeplinkURL(t = { p: "browse" }) {
    return ((t = { ...(this.deeplinkParameters || {}), ...t }), `https://itunes.apple.com/deeplink?${yi(t)}`);
  }
  async pldfltcid() {
    if (!this._cids[j.DEFAULT_CID])
      try {
        await this.infoRefresh();
      } catch (t) {
        return;
      }
    return this._cids[j.DEFAULT_CID];
  }
  async renewUserToken() {
    if (!this.userToken) return this.requestUserToken();
    const t = new Headers({
        Authorization: `Bearer ${this.developerToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Apple-Music-User-Token": `${this.userToken}`,
      }),
      i = await this.fetch(`${this.playBase}/renewMusicToken`, { method: "POST", headers: t });
    if (i.status === 401) return (await this.revokeUserToken(), Promise.reject(new Error("Renew token")));
    const s = await i.json();
    return (s["music-token"] && (this.userToken = s["music-token"]), this.userToken);
  }
  async requestStorefrontCountryCode() {
    if (this.authorizationStatus <= he.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const t = new Headers({ Authorization: `Bearer ${this.developerToken}`, [St]: this.userToken || "" }),
      i = await this.fetch(`${this.apiBase}/me/storefront`, { headers: t });
    if (i && !i.ok)
      return (
        (i.status === 401 || i.status === 403) && this._reset(), Promise.reject("Storefront Country Code error.")
      );
    const s = await i.json();
    if (s.errors) return Promise.reject(s.errors);
    const [n] = s.data;
    return !n || !n.id
      ? Promise.reject("Storefront Country Code error.")
      : ((this.storefrontCountryCode = n.id), this.storefrontCountryCode);
  }
  async requestStorefrontIdentifier() {
    if (!this.storefrontIdentifier) {
      const t = await za.inferFromLanguages(this.developerToken);
      this.storefrontIdentifier = t.id;
    }
    return this.storefrontIdentifier;
  }
  async requestUserToken() {
    if (this._serviceSetupView.isServiceView) return this.userToken || "";
    try {
      const t = await this._serviceSetupView.load({ action: Xs.AUTHORIZE });
      ((this.cid = t.cid), (this.userToken = t.userToken), (this.restrictedEnabled = t.restricted));
    } catch (t) {
      return (this._reset(), (this.authorizationStatus = t), Promise.reject(t));
    }
    return this.userToken;
  }
  async revokeUserToken() {
    try {
      await this._webPlayerLogout();
    } catch (t) {}
    (this.dispatchEvent("authorizationStatusWillChange", {
      authorizationStatus: this.authorizationStatus,
      newAuthorizationStatus: he.NOT_DETERMINED,
    }),
      this._reset(),
      this.dispatchEvent("authorizationStatusDidChange", { authorizationStatus: this.authorizationStatus }),
      this.dispatchEvent("userTokenDidChange", { userToken: this.userToken }));
  }
  setCids(t) {
    ((this._cids = { ...this._cids, ...t }),
      Object.keys(this._cids).forEach((i) => {
        this._setStorageItem(i, this._cids[i]);
      }));
  }
  async shouldDisplayPrivacyLink(t) {
    return (
      t || (t = this.bundleId), this._needsGDPR !== void 0 ? this._needsGDPR : (await this.me(), this._needsGDPR)
    );
  }
  async hasMusicSubscription() {
    return this.hasAuthorized ? this._getIsActiveSubscription() : !1;
  }
  async _getIsActiveSubscription() {
    var i;
    return this.realm === le.PODCAST ? !0 : !!((i = (await this.me()).subscription) != null && i.active);
  }
  resetSubscribeViewEligibility() {
    this._dispatchedSubscribeView = !1;
  }
  async presentSubscribeViewForEligibleUsers(t = {}, i = !0) {
    const s = await this.eligibleForSubscribeView();
    if (!(this._serviceSetupView.isServiceView || !s)) {
      if (!i) {
        (this.dispatchEvent("eligibleForSubscribeView", t), (this._dispatchedSubscribeView = !0));
        return;
      }
      try {
        const n = await this._serviceSetupView.load({ action: Xs.SUBSCRIBE });
        return ((this._dispatchedSubscribeView = !0), n);
      } catch (n) {
        return this.revokeUserToken();
      }
    }
  }
  async infoRefresh() {
    if (this.authorizationStatus <= he.DENIED) return Promise.reject(`Not authorized: ${this.authorizationStatus}`);
    const t = new Headers({ Authorization: `Bearer ${this.developerToken}`, [St]: this.userToken || "" });
    try {
      const s = await (
        await this.fetch(`${this.iTunesBuyBase}/account/web/infoRefresh`, { credentials: "include", headers: t })
      ).json();
      this.setCids(s);
    } catch (i) {}
  }
  me() {
    return this.authorizationStatus <= he.DENIED
      ? Promise.reject(`Not authorized: ${this.authorizationStatus}`)
      : (this._me ||
          (this._me = new Promise(async (t, i) => {
            const s = new Headers({ Authorization: `Bearer ${this.developerToken}`, [St]: this.userToken || "" }),
              n = Ui(this.apiBase, "/me/account", { meta: "subscription", ...this.meParameters });
            let a;
            try {
              a = await this.fetch(n, { headers: s });
            } catch (p) {
              return i(new m(m.Reason.NETWORK_ERROR, "Failed to fetch /me/account"));
            }
            if (a && !a.ok)
              return (
                this.realm !== le.TV && (a.status === 401 || a.status === 403) && this._reset(), i("Account error.")
              );
            let o = await a.json();
            if (o.errors) return i(o.errors);
            const { data: l, meta: u } = o;
            if (!u || !u.subscription) return i("Account error.");
            this.storefrontCountryCode = u.subscription.storefront;
            const d = { meta: u, subscription: u.subscription };
            l && l.length && (d.attributes = l[0].attributes);
            try {
              let p = await this.fetch(`${this.iTunesBuyBase}/account/web/info`, {
                credentials: "include",
                headers: s,
              });
              if (
                ((o = await p.json()),
                (this.isU13 = o.isU13),
                (this.parentalControls = o.parentalControlsData),
                (this.privacyAcknowledgements = o.privacyAcknowledgement),
                Ad(this.privacyAcknowledgements || {}))
              ) {
                try {
                  await this.infoRefresh();
                } catch (y) {
                  t(d);
                }
                ((p = await this.fetch(`${this.iTunesBuyBase}/account/web/info`, {
                  credentials: "include",
                  headers: s,
                })),
                  (o = await p.json()),
                  (this.isU13 = o.isU13),
                  (this.parentalControls = o.parentalControlsData),
                  (this.privacyAcknowledgements = o.privacyAcknowledgement));
              }
              d.info = o;
            } catch (p) {
              console.warn("Failed to fetch privacyAcknowledgements", p);
            }
            return t(d);
          })
            .then((t) => {
              var i;
              return (
                this._getIsActiveSubscription.updateCache(((i = t.subscription) == null ? void 0 : i.active) || !1),
                (this._me = null),
                t
              );
            })
            .catch((t) => ((this._me = null), Promise.reject(t)))),
        this._me);
  }
  async musicSubscriptionOffers(t, i = Uc()) {
    let s;
    if (this.hasAuthorized) s = (await this.me()).info.storeFrontISO3A;
    else {
      if (!t) {
        const d = await za.inferFromLanguages(this.developerToken, i);
        t = d == null ? void 0 : d.id;
      }
      s = (t && mf[t.toUpperCase()]) || "USA";
    }
    const n = gf(i[0]),
      a = ff[s];
    if (!n || !a) return [];
    const o = new Headers({ "X-Apple-Store-Front": `${a}-${n},8` });
    this.userToken &&
      (o.set("Authorization", `Bearer ${this.developerToken}`), o.set("Music-User-Token", this.userToken));
    const l = await this.fetch(`${this.iTunesBuyBase}/commerce/web/subscription/offers/music`, { headers: o });
    return l.ok ? (await l.json()).offers : Promise.reject(l.status);
  }
  _getStorageItem(t) {
    var i;
    if (t) {
      if (this.persist === "cookie") return vt(t);
      if (this.persist === "localstorage")
        return (i = this.storage) == null ? void 0 : i.getItem(`${this.storagePrefix}.${t}`);
    }
  }
  _processLocationHash(t) {
    const i = /^\#([a-zA-Z0-9+\/]{200,}={0,2})$/;
    if (i.test(t)) {
      const s = t.replace(i, "$1");
      try {
        const { itre: n, musicUserToken: a, cid: o } = JSON.parse(atob(s));
        ((this.restrictedEnabled = n && n === "1"), (this.userToken = a), (this.cid = o));
      } catch (n) {}
      history.replaceState(null, document.title, " ");
    }
  }
  _removeStorageItem(t) {
    var i;
    if (this.persist === "cookie") this._removeCookieFromDomains(t);
    else if (this.persist === "localstorage")
      return (i = this.storage) == null ? void 0 : i.removeItem(`${this.storagePrefix}.${t}`);
  }
  _removeCookieFromDomains(t, i = window) {
    (ge.debug("Calling removeCookie", t), Ms(t));
    const { hostname: s } = i.location,
      n = s.split(".");
    if (n.length && (n.shift(), n.length > 2))
      for (let a = n.length; a > 2; a--) {
        const o = n.join(".");
        (n.shift(), ge.debug("Calling removeCookie", t, i, o), Ms(t, i, o));
      }
  }
  _reset(t = he.NOT_DETERMINED) {
    ((this._authorizationStatus = t),
      (this._cids = {}),
      (this._dispatchedSubscribeView = !1),
      (this._restrictedEnabled = void 0),
      (this._storefrontCountryCode = void 0),
      this._getIsActiveSubscription.updateCache(void 0),
      Object.keys(hs).forEach((i) => {
        this._removeStorageItem(hs[i]);
      }),
      this._removeStorageItem(j.RESTRICTIONS_ENABLED),
      this._removeStorageItem(j.USER_TOKEN),
      this._removeStorageItem(j.STOREFRONT_COUNTRY_CODE),
      (this._dynamicUserToken = void 0),
      (this._me = null),
      (this.privacyAcknowledgements = void 0));
  }
  _setStorageItem(t, i) {
    var s, n;
    if (this.persist === "cookie")
      return (s = this.reflector) != null && s.skipJsCookieWrite(t)
        ? void 0
        : (ge.debug("Calling setCookie from _setStorageItem", t, i),
          wn(t, i, "/", 180, void 0, xc(window.location.hostname)));
    if (this.persist === "localstorage")
      return (n = this.storage) == null ? void 0 : n.setItem(`${this.storagePrefix}.${t}`, i);
  }
  async _webPlayerLogout() {
    const t = this.logoutURL;
    if (!t) return;
    const i = new Headers({
      Authorization: `Bearer ${this.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      [`X-Apple-${St}`]: `${this.userToken}`,
    });
    ci && (i.delete(`X-Apple-${St}`), i.append(St, this.userToken || ""));
    const s = await this.fetch(t, { method: "POST", headers: i, credentials: ci ? "include" : "same-origin" });
    return s && !s.ok ? Promise.reject(s.status) : s.json();
  }
}
Lf([yf(15 * 60)], Bc.prototype, "_getIsActiveSubscription", 1);
var V = ((r) => (
    (r[(r.none = 0)] = "none"),
    (r[(r.loading = 1)] = "loading"),
    (r[(r.playing = 2)] = "playing"),
    (r[(r.paused = 3)] = "paused"),
    (r[(r.stopped = 4)] = "stopped"),
    (r[(r.ended = 5)] = "ended"),
    (r[(r.seeking = 6)] = "seeking"),
    (r[(r.waiting = 8)] = "waiting"),
    (r[(r.stalled = 9)] = "stalled"),
    (r[(r.completed = 10)] = "completed"),
    r
  ))(V || {}),
  Ne = ((r) => ((r[(r.pictureinpicture = 0)] = "pictureinpicture"), (r[(r.inline = 1)] = "inline"), r))(Ne || {});
function $c() {
  let r, e;
  return {
    promise: new Promise(function (n, a) {
      ((r = n), (e = a));
    }),
    resolve: function (n) {
      r == null || r(n);
    },
    reject: function (n) {
      e == null || e(n);
    },
  };
}
const xf = [
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
function Un(r) {
  var e, t;
  return ((t = (e = r == null ? void 0 : r.attributes) == null ? void 0 : e.playParams) == null ? void 0 : t.kind) !==
    void 0
    ? r.attributes.playParams.kind
    : r == null
      ? void 0
      : r.type;
}
function Ff(r) {
  var e;
  return r == null
    ? !1
    : r.isUTS === !0 || xf.includes(r.type) || ((e = r.attributes) == null ? void 0 : e.mediaKind) === "video";
}
function Kf(r) {
  return r == null ? !1 : !Ff(r);
}
function mi(r) {
  return Un(r) === "song";
}
function Vi(r) {
  var e;
  return ((e = Un(r)) == null ? void 0 : e.startsWith("podcast-episode")) === !0;
}
function Vf(r) {
  var t, i;
  const e = (i = (t = r == null ? void 0 : r.attributes) == null ? void 0 : t.offers) != null ? i : [];
  return Vi(r) && e.some(({ type: s }) => s === "STDQ");
}
function Hc(r) {
  var t, i;
  const e = (i = (t = r == null ? void 0 : r.attributes) == null ? void 0 : t.offers) != null ? i : [];
  return Vi(r) && e.some(({ type: s }) => s === "PSUB");
}
function li(r) {
  var t, i;
  const e = (i = (t = r == null ? void 0 : r.attributes) == null ? void 0 : t.offers) != null ? i : [];
  return Vi(r) && e.some(({ type: s }) => s === "PLUS");
}
function xn(r) {
  var e;
  return !!((e = r == null ? void 0 : r.attributes) != null && e.isLive);
}
function Fn(r) {
  var e, t;
  return (
    ((t = (e = r == null ? void 0 : r.attributes) == null ? void 0 : e.playParams) == null ? void 0 : t.format) ===
    "stream"
  );
}
function jc(r) {
  var e, t;
  return (
    ((t = (e = r == null ? void 0 : r.attributes) == null ? void 0 : e.playParams) == null ? void 0 : t.format) ===
    "tracks"
  );
}
function Bf(...r) {
  return jc(...r);
}
function $f(r) {
  return Bf(r);
}
function Nr(r, e) {
  var t, i, s;
  return !(
    ((i = (t = r == null ? void 0 : r.attributes) == null ? void 0 : t.playParams) == null ? void 0 : i.kind) !==
      "radioStation" ||
    (e !== void 0 && ((s = r.attributes) == null ? void 0 : s.mediaKind) !== e)
  );
}
function Kn(r, e) {
  var t;
  return (
    Nr(r, e) &&
    Fn(r) &&
    !xn(r) &&
    ((t = r == null ? void 0 : r.attributes) == null ? void 0 : t.streamingRadioSubType) === "Episode"
  );
}
function ui(r, e) {
  return Nr(r, e) && xn(r) && Fn(r);
}
function $E(r, e) {
  return ui(r, e);
}
function Hf(r, e) {
  var t;
  return Kn(r, e) || !!((t = r == null ? void 0 : r.attributes) != null && t.isAOD);
}
function jf(r) {
  return (
    xn(r) && Fn(r) && r.attributes.stationProviderName !== void 0 && r.attributes.streamingRadioSubType === "Shoutcast"
  );
}
function qf(r) {
  var e, t;
  return (
    (r == null ? void 0 : r.type) === "LiveService" ||
    ((e = r == null ? void 0 : r.defaultPlayable) == null ? void 0 : e.type) === "Event" ||
    ((t = r == null ? void 0 : r.defaultPlayable) == null ? void 0 : t.type) === "EbsEvent"
  );
}
function Wf(r) {
  return Dh(r);
}
function HE(r) {
  return r.match(/-?songs$/i) !== null;
}
const Yf = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function jE(r) {
  const e = Un(r);
  return e !== void 0 && Yf.includes(e);
}
const qc = "explicit",
  Wc = [
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
  Gf = "mediaItemStateDidChange",
  zf = "mediaItemStateWillChange",
  Js = { mediaItemStateDidChange: Gf, mediaItemStateWillChange: zf },
  Yc = new Ut("media-item");
function gi(r) {
  var n;
  let e = r.id;
  const t = (n = r.attributes) != null ? n : {};
  let i = "";
  const s = t.name || t.title;
  return (
    z(s) || (i += s),
    z(t.albumName) || (i += " - " + t.albumName),
    z(t.artistName) || (i += " - " + t.artistName),
    i !== "" && (e += ` (${i})`),
    e
  );
}
var Te = ((r) => (
    (r[(r.none = 0)] = "none"),
    (r[(r.preview = 1)] = "preview"),
    (r[(r.unencryptedFull = 2)] = "unencryptedFull"),
    (r[(r.encryptedFull = 3)] = "encryptedFull"),
    r
  ))(Te || {}),
  q = ((r) => (
    (r[(r.none = 0)] = "none"),
    (r[(r.loading = 1)] = "loading"),
    (r[(r.ready = 2)] = "ready"),
    (r[(r.playing = 3)] = "playing"),
    (r[(r.ended = 4)] = "ended"),
    (r[(r.unavailable = 5)] = "unavailable"),
    (r[(r.restricted = 6)] = "restricted"),
    (r[(r.error = 7)] = "error"),
    (r[(r.unsupported = 8)] = "unsupported"),
    r
  ))(q || {});
const {
    none: Gc,
    loading: Qa,
    ready: Xa,
    playing: Ja,
    ended: ps,
    unavailable: ys,
    restricted: zr,
    error: lr,
    unsupported: Qr,
  } = q,
  zc = {
    [Gc]: { allowed: [Qa], unknown: [ps, ys, zr, lr, Qr] },
    [Qa]: { allowed: [Xa, zr, lr, Qr], unknown: [] },
    [Xa]: { allowed: [Ja], unknown: [lr] },
    [Ja]: { allowed: [ps, lr], unknown: [ys, zr, Qr] },
    [ps]: { allowed: [], unknown: [] },
    [ys]: { allowed: [], unknown: [] },
    [zr]: { allowed: [], unknown: [] },
    [lr]: { allowed: [], unknown: [] },
    [Qr]: { allowed: [], unknown: [] },
  },
  Za = (r) => q[r],
  Qf = (r, e) => zc[r].allowed.includes(e),
  Xf = (r, e) => zc[r].unknown.includes(e),
  Jf = (r = Gc) => {
    const e = {
      current: r,
      set: function (t) {
        const { current: i } = e;
        if (!Qf(i, t)) {
          const s = Xf(i, t);
          Yc.debug(
            `MediaItem.state was changed from ${Za(i)} to ${Za(t)}`,
            s ? "but it is unknown whether it should be allowed or not." : "and it should not be happening",
          );
        }
        e.current = t;
      },
    };
    return e;
  },
  { mediaItemStateDidChange: eo, mediaItemStateWillChange: to } = Js;
class kr extends Mt {
  constructor(t = {}) {
    var s;
    super([eo, to]);
    c(this, "id");
    c(this, "type");
    c(this, "contentType");
    c(this, "playables");
    c(this, "channels");
    c(this, "assetURL");
    c(this, "hlsMetadata", {});
    c(this, "flavor");
    c(this, "currentKeyPlay");
    c(this, "keyPlayShelf");
    c(this, "keyServerQueryParameters");
    c(this, "podpafMetrics");
    c(this, "attributes", {});
    c(this, "playbackType", Te.none);
    c(this, "href");
    c(this, "relationships");
    c(this, "_container");
    c(this, "_context");
    c(this, "_releaseDate");
    c(this, "_state", Jf());
    c(this, "_stateDidChange");
    c(this, "_stateWillChange");
    c(this, "assets", []);
    c(this, "keyURLs");
    Yc.debug("media-item: creating Media Item with options:", t);
    const i = "song";
    (t.id && t.attributes
      ? (Object.assign(this, t),
        (this.type = (s = this.playParams) != null && s.kind ? this.playParams.kind : this.type || i))
      : ((this.id = t.id || Li()),
        (this.type = t.type || i),
        (this.attributes = { playParams: { id: this.id, kind: this.type } })),
      (this.contentType = t.contentType),
      (this._context = t.context || {}),
      t.container
        ? (this._container = t.container)
        : t.containerId && t.containerType && (this._container = { id: t.containerId, type: t.containerType }));
  }
  get ageGatePolicy() {
    var t;
    return (t = this.defaultPlayable) == null ? void 0 : t.ageGatePolicy;
  }
  get albumInfo() {
    const { albumName: t, artistName: i } = this,
      s = [];
    return (i && s.push(i), t && s.push(t), s.join(" - "));
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
    var t, i;
    return (i = this.attributes.artwork) != null ? i : (t = this.attributes.images) == null ? void 0 : t.coverArt16X9;
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
  set container(t) {
    this._container = t;
  }
  get contentRating() {
    return this.attributes.contentRating;
  }
  get context() {
    return this._context;
  }
  set context(t) {
    this._context = t;
  }
  get defaultPlayable() {
    var t;
    return (t = this.playables) == null ? void 0 : t[0];
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
    var t, i, s;
    return (
      this.isLinearStream &&
      ((s = (i = (t = this.defaultPlayable) == null ? void 0 : t.assets) == null ? void 0 : i.streamCapability) == null
        ? void 0
        : s.supportsLinearScrubbing) === !0
    );
  }
  get isAssetScrubbingDisabled() {
    return this.isLinearStream ? !this.supportsLinearScrubbing : !1;
  }
  get isLinearStream() {
    return qf(this);
  }
  get isAlgoStation() {
    return $f(this);
  }
  get isRadioStation() {
    return Nr(this);
  }
  get isRadioEpisode() {
    return Kn(this);
  }
  get isLiveRadioStation() {
    return ui(this);
  }
  get isLiveAudioStation() {
    return ui(this, "audio");
  }
  get isLiveVideoStation() {
    return ui(this, "video");
  }
  get isAOD() {
    return Hf(this);
  }
  get isSong() {
    return mi(this);
  }
  get isPodcastEpisode() {
    return Vi(this);
  }
  get info() {
    return `${this.title} - ${this.albumInfo}`;
  }
  get isCloudItem() {
    return this.isLibraryItem;
  }
  get isLibrary() {
    var t, i;
    return (
      ((t = this.playParams) == null ? void 0 : t.isLibrary) === !0 ||
      Sr((i = this.playParams) == null ? void 0 : i.id) ||
      Sr(this.id)
    );
  }
  get isLibraryItem() {
    return this.isLibrary;
  }
  get isCloudUpload() {
    return this.isLibraryItem && this.playParams.reporting === !1 && this.playParams.catalogId === void 0;
  }
  get isExplicitItem() {
    return this.contentRating === qc;
  }
  get isLoading() {
    return this.state === q.loading;
  }
  get isPlayableMediaType() {
    return this.isUTS || Wc.indexOf(this.type) !== -1;
  }
  get isPlayable() {
    var t;
    return this.isUTS
      ? !0
      : this.isPlayableMediaType
        ? this.isLiveRadioStation || this.isRadioEpisode || this.hasOffersHlsUrl
          ? !0
          : this.needsPlayParams
            ? !!this.playParams
            : !!this.rawAssetUrl || !!((t = this.attributes.previews) != null && t.length)
        : !1;
  }
  get isPlaying() {
    return this.state === q.playing;
  }
  get isPreparedToPlay() {
    const t = jt(this.catalogId) && !z(this.catalogId),
      i = jt(this.assetURL) && !z(this.assetURL),
      s = !!(
        this.keyURLs &&
        !z(this.keyURLs["hls-key-cert-url"]) &&
        !z(this.keyURLs["hls-key-server-url"]) &&
        !z(this.keyURLs["widevine-cert-url"])
      );
    return this.type === "song"
      ? t && i && s
      : this.isUTS
        ? (i && s) || this.playRawAssetURL
        : i || this.playRawAssetURL;
  }
  get isrc() {
    return this.attributes.isrc;
  }
  get isReady() {
    return this.state === q.ready;
  }
  get isRestricted() {
    return this.state === q.restricted;
  }
  get isUTS() {
    return !!this.defaultPlayable;
  }
  get isUnavailable() {
    return this.state === q.unavailable;
  }
  get needsPlayParams() {
    return ["musicMovie", "musicVideo", "song"].includes(this.type);
  }
  get normalizedType() {
    return Wf(this.type);
  }
  get offers() {
    return this.attributes.offers;
  }
  get offersHlsUrl() {
    const { offers: t } = this,
      i =
        t == null
          ? void 0
          : t.find((s) => {
              var n;
              return !!((n = s.hlsUrl) != null && n.length);
            });
    return i == null ? void 0 : i.hlsUrl;
  }
  get hasOffersHlsUrl() {
    return jt(this.offersHlsUrl) && !z(this.offersHlsUrl);
  }
  get rawAssetUrl() {
    return this.attributes.assetUrl;
  }
  get playbackDuration() {
    return this.attributes.durationInMillis || this.attributes.durationInMilliseconds;
  }
  get playEvent() {
    var t;
    return (t = this.defaultPlayable) == null ? void 0 : t.playEvent;
  }
  get playlistArtworkURL() {
    var t, i, s;
    return this.hasPlaylistContainer && this.hasContainerArtwork
      ? (s = (i = (t = this.container) == null ? void 0 : t.attributes) == null ? void 0 : i.artwork) == null
        ? void 0
        : s.url
      : this.artworkURL;
  }
  get playlistName() {
    var t, i;
    return this.hasPlaylistContainer
      ? (i = (t = this.container) == null ? void 0 : t.attributes) == null
        ? void 0
        : i.name
      : this.albumName;
  }
  get playParams() {
    return this.attributes.playParams;
  }
  get isPurchasedSong() {
    var t;
    return !!((t = this.playParams) != null && t.purchasedId) && this.isSong;
  }
  get playRawAssetURL() {
    return (this.isCloudUpload || !!this.rawAssetUrl) && !this.isPurchasedSong;
  }
  get previewURL() {
    var t, i, s, n, a, o, l, u, d, p, y, g, k, w, M;
    return (
      ((s = (i = (t = this.attributes) == null ? void 0 : t.previews) == null ? void 0 : i[0]) == null
        ? void 0
        : s.url) ||
      ((o = (a = (n = this.attributes) == null ? void 0 : n.previews) == null ? void 0 : a[0]) == null
        ? void 0
        : o.hlsUrl) ||
      ((p =
        (d = (u = (l = this.attributes) == null ? void 0 : l.trailers) == null ? void 0 : u[0]) == null
          ? void 0
          : d.assets) == null
        ? void 0
        : p.hlsUrl) ||
      ((k = (g = (y = this.attributes) == null ? void 0 : y.movieClips) == null ? void 0 : g[0]) == null
        ? void 0
        : k.hlsUrl) ||
      ((M = (w = this.attributes) == null ? void 0 : w.video) == null ? void 0 : M.hlsUrl)
    );
  }
  get rating() {
    return this.attributes.rating;
  }
  get releaseDate() {
    if (this._releaseDate) return this._releaseDate;
    if (this.attributes && (this.attributes.releaseDate || this.attributes.releaseDateTime)) {
      const t = this.attributes.releaseDate || this.attributes.releaseDateTime;
      return ((this._releaseDate = /^\d{4}-\d{1,2}-\d{1,2}/.test(t) ? new Date(t) : void 0), this._releaseDate);
    }
  }
  set releaseDate(t) {
    typeof t == "string"
      ? (this._releaseDate = /^\d{4}-\d{1,2}-\d{1,2}/.test(t) ? new Date(t) : void 0)
      : typeof t == "number"
        ? (this._releaseDate = new Date(t))
        : (this._releaseDate = t);
  }
  get catalogId() {
    var t, i, s;
    return ((t = this.playParams) == null ? void 0 : t.isLibrary) === !0
      ? (i = this.playParams) == null
        ? void 0
        : i.catalogId
      : (s = this.playParams) == null
        ? void 0
        : s.id;
  }
  get state() {
    return this._state.current;
  }
  set state(t) {
    const i = { oldState: this._state.current, state: t };
    (this._stateWillChange && this._stateWillChange(this),
      this.dispatchEvent(to, i),
      this._state.set(t),
      this._stateDidChange && this._stateDidChange(this),
      this.dispatchEvent(eo, i));
  }
  get title() {
    return this.attributes.name || this.attributes.title;
  }
  get trackNumber() {
    return this.attributes.trackNumber;
  }
  beginMonitoringStateDidChange(t) {
    this._stateDidChange = t;
  }
  beginMonitoringStateWillChange(t) {
    this._stateWillChange = t;
  }
  endMonitoringStateDidChange() {
    this._stateDidChange = void 0;
  }
  endMonitoringStateWillChange() {
    this._stateWillChange = void 0;
  }
  isEqual(t) {
    return this.id === t.id && this.type === t.type && this.attributes === t.attributes;
  }
  resetState() {
    (this.endMonitoringStateWillChange(), this.endMonitoringStateDidChange(), (this.state = q.none));
  }
  restrict() {
    this.isExplicitItem && ((this.state = q.restricted), this._removePlayableData());
  }
  notSupported() {
    ((this.state = q.unsupported), this._removePlayableData());
  }
  updateFromLoadError(t) {
    switch (t.reason) {
      case m.Reason.CONTENT_RESTRICTED:
        this.state = q.restricted;
        break;
      case m.Reason.CONTENT_UNAVAILABLE:
        this.state = q.unavailable;
        break;
      default:
        this.state = q.error;
    }
  }
  _removePlayableData() {
    var t, i, s;
    ((t = this.attributes) == null || delete t.playParams,
      (i = this.attributes) == null || delete i.previews,
      (s = this.attributes) == null || delete s.trailers);
  }
  toString() {
    var n, a;
    const { name: t, title: i, artistName: s } = (n = this.attributes) != null ? n : {};
    return `<MediaItem id="${this.id}" title="${(a = t != null ? t : i) != null ? a : "-"}" artist="${s != null ? s : "-"}" />`;
  }
}
const S = () => (r, e, t) => {
    if (t === void 0 || typeof t.value != "function")
      throw new TypeError(`Only methods can be decorated with @Bind, but ${e} is not a method.`);
    return {
      configurable: !0,
      get: function () {
        const i = t.value.bind(this);
        return (Object.defineProperty(this, e, { value: i, configurable: !0, writable: !0 }), i);
      },
    };
  },
  h = new Ut("player"),
  Zs = "mk-player-tsid",
  Qc = 'audio/mp4;codecs="mp4a.40.2"',
  Zf = 'video/mp4;codecs="avc1.42E01E"',
  en = "mk-audio-track",
  tn = "mk-text-track",
  yt = "Off",
  Xr = "disabled",
  He = "showing",
  T = {
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
  },
  ep = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
  tp = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"],
  rp = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
  vi = () => Promise.resolve(),
  ip = (r) => {
    if (typeof r > "u") return vi;
    const e = ep.find((t) => typeof r.prototype[t] == "function");
    return typeof e != "string"
      ? vi
      : (t = self.document) => {
          var i;
          return (i = t == null ? void 0 : t[e]) == null ? void 0 : i.call(t);
        };
  },
  sp = ip(Document),
  np = (r) => {
    if (typeof r > "u") return () => !1;
    const e = tp.find((t) => t in r.prototype);
    return typeof e != "string" ? () => !1 : (t = self.document) => !!t[e];
  },
  Xc = np(Document),
  ap = (r) => {
    if (typeof r > "u") return vi;
    const e = rp.find((t) => typeof r.prototype[t] == "function");
    return typeof e != "string" ? vi : (t) => (t == null ? void 0 : t[e]());
  },
  op = ap(HTMLElement);
class cp {
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
    return sp();
  }
  isInFullscreen() {
    return Xc();
  }
  requestFullscreenForElement(e) {
    return op(e);
  }
}
class lp {
  constructor() {
    c(this, "ended", !1);
  }
  start() {
    h.warn("seeker.start is not supported in this playback method");
  }
  end() {
    h.warn("seeker.end is not supported in this playback method");
  }
  seekToTime(e) {
    return (h.warn("seekToTime is not supported in this playback method"), Promise.resolve());
  }
}
class Jc {
  constructor(e) {
    c(this, "_ended", !1);
    c(this, "_lastSeekedTime", -1);
    c(this, "_player");
    c(this, "_startTime", -1);
    c(this, "_currentItem");
    (h.debug("seeker: new"), (this._player = e));
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
    if ((h.debug("seeker: end"), this._startTime === -1)) {
      h.warn("seeker: Cannot end a seeker before starting it.");
      return;
    }
    if (this._ended) {
      h.warn("seeker: Cannot end the same seeker twice.");
      return;
    }
    (this.dispatchStartEvent(), this.dispatchEndEvent());
  }
  async seekToTime(e) {
    if ((h.debug("seeker: seekToTime", e), this.ended)) {
      h.warn("seeker: Cannot seek once the seeker has ended");
      return;
    }
    return (
      this.stillPlayingSameItem || ((this._currentItem = this._player.nowPlayingItem), (this._startTime = 0)),
      (this._lastSeekedTime = e),
      this._player.seekToTime(e)
    );
  }
  start() {
    if ((h.debug("seeker: start"), this._startTime !== -1)) {
      h.warn("seeker: Cannot start same seeker twice");
      return;
    }
    ((this._currentItem = this._player.nowPlayingItem),
      (this._startTime = this._player.currentPlaybackTime),
      (this._lastSeekedTime = this._startTime));
  }
  dispatch(e, t) {
    if (!this.isEngagedInPlayback) {
      h.debug("seeker: do not dispatch because isEngagedInPlayback", this.isEngagedInPlayback);
      return;
    }
    (h.debug("seeker: dispatch", e), this._player.dispatch(e, t));
  }
  dispatchStartEvent() {
    (this.stillPlayingSameItem || ((this._startTime = 0), (this._lastSeekedTime = 0)),
      this.dispatch(P.playbackScrub, { item: this._currentItem, position: this._startTime }));
  }
  dispatchEndEvent() {
    ((this._ended = !0),
      this.dispatch(P.playbackScrub, {
        item: this._currentItem,
        position: this._lastSeekedTime,
        endReasonType: R.SCRUB_END,
      }));
  }
}
var up = Object.defineProperty,
  dp = Object.getOwnPropertyDescriptor,
  Vn = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? dp(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && up(e, t, s), s);
  };
const {
  visibilityChangeEvent: bi,
  visibilityState: rn,
  unloadEventName: ro,
} = (() => {
  let r = "visibilitychange",
    e = "visibilityState";
  typeof document.mozHidden < "u"
    ? ((r = "mozvisibilitychange"), (e = "mozVisibilityState"))
    : typeof document.msHidden < "u"
      ? ((r = "msvisibilitychange"), (e = "msVisibilityState"))
      : document.webkitHidden && ((r = "webkitvisibilitychange"), (e = "webkitVisibilityState"));
  const t = "onpagehide" in window ? "pagehide" : "unload";
  return { visibilityChangeEvent: r, visibilityState: e, unloadEventName: t };
})();
class Lr {
  constructor(e, t) {
    c(this, "player");
    c(this, "runtimeEnvironment");
    c(this, "dispatchVisibilityChanges", !0);
    ((this.player = e), (this.runtimeEnvironment = t));
  }
  activate(e = self, t = self.document) {
    (t.addEventListener(bi, this.visibilityChanged),
      e.addEventListener("storage", this.storage, !1),
      e.addEventListener(ro, this.windowUnloaded));
  }
  deactivate() {
    (document.removeEventListener(bi, this.visibilityChanged),
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
    e === Zs && this.player.tsidChanged(t);
  }
  visibilityChanged(e) {
    const t = e.target[rn];
    (h.info("dc visibilityState", t, e, Xc()),
      this.runtimeEnvironment.os.isIOS &&
        this.dispatchVisibilityChanges &&
        (t === "hidden"
          ? this.dispatch(P.playerExit, { item: this.player.nowPlayingItem, position: this.player.currentPlaybackTime })
          : t === "visible" && this.dispatch(P.playerActivate)));
  }
  windowUnloaded() {
    this.player.isPlaying &&
      this.dispatch(P.playerExit, { item: this.player.nowPlayingItem, position: this.player.currentPlaybackTime });
  }
}
Vn([S()], Lr.prototype, "storage", 1);
Vn([S()], Lr.prototype, "visibilityChanged", 1);
Vn([S()], Lr.prototype, "windowUnloaded", 1);
var hp = Object.defineProperty,
  fp = Object.getOwnPropertyDescriptor,
  pp = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? fp(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && hp(e, t, s), s);
  };
const io = [
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
  yp = ["NotAllowedError", "NotSupportedError"];
class Bi {
  constructor(e) {
    c(this, "id", Li());
    c(this, "privateEnabled", !1);
    c(this, "siriInitiated", !1);
    c(this, "windowHandlers");
    c(this, "_dispatcher");
    c(this, "_buffer");
    c(this, "services");
    c(this, "_context");
    c(this, "_currentBufferedProgress", 0);
    c(this, "initialPlayingDate");
    c(this, "initialPlaybackTime");
    c(this, "_nowPlayingItem");
    c(this, "_paused", !1);
    c(this, "_playbackDidStart", !1);
    c(this, "_playbackState", V.none);
    c(this, "_stopped", !1);
    c(this, "_timing");
    c(this, "_bitrateCalculator");
    c(this, "_currentPlaybackProgress", 0);
    c(this, "_isPrimaryPlayer", !0);
    c(this, "_playbackTargetAvailable", !1);
    c(this, "_playbackTargetIsWireless", !1);
    c(this, "_seeker");
    c(this, "_serial", Date.now().toString());
    c(this, "fullscreen");
    c(this, "_isDestroyed", !1);
    c(this, "_playbackErrorSubscription");
    c(this, "_isInitialized", !1);
    c(this, "_deferredPlay");
    var t;
    ((this.services = e.services),
      (this._dispatcher = e.services.dispatcher),
      (this._timing = e.services.timing),
      (this._context = e.context || {}),
      (this.privateEnabled = e.privateEnabled || !1),
      (this.siriInitiated = e.siriInitiated || !1),
      (this._bitrateCalculator = e.services.bitrateCalculator),
      (this.windowHandlers = new Lr(this, e.services.runtime)),
      (this.fullscreen = new cp(this)),
      (t = ze()) == null || t.setItem(Zs, this._serial),
      (this._playbackErrorSubscription = this._dispatcher.subscribe(T.mediaPlaybackError, this.onPlaybackError)));
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
    var s;
    const e = this._targetElement.currentTime,
      t = this._buffer,
      i = (s = t == null ? void 0 : t.currentTimestampOffset) != null ? s : 0;
    return e - i;
  }
  get currentPlaybackDuration() {
    const e = this.nowPlayingItem;
    if (!e) return 0;
    const t = e.type === "podcast-episodes",
      i = e.playbackType === Te.encryptedFull || e.playbackType === Te.unencryptedFull,
      s = e.playbackDuration;
    return i && s && !t ? this.calculateTime(s / 1e3) : this.calculateTime(this._currentDuration);
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
    return this.playbackState === V.playing;
  }
  get isPrimaryPlayer() {
    return this._isPrimaryPlayer;
  }
  set isPrimaryPlayer(e) {
    var t;
    e !== this._isPrimaryPlayer &&
      ((this._isPrimaryPlayer = e),
      this._isPrimaryPlayer
        ? (t = ze()) == null || t.setItem(Zs, this._serial)
        : (this._dispatcher.publish(T.primaryPlayerDidChange, { target: this }), this.pause({ userInitiated: !1 })));
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
      (t.publish(T.nowPlayingItemWillChange, { item: e }),
        (this._nowPlayingItem = e),
        t.publish(T.nowPlayingItemDidChange, { item: e }));
      return;
    }
    const i = this._nowPlayingItem,
      s = this._buffer;
    (i != null && i.isEqual(e)) ||
      (t.publish(T.nowPlayingItemWillChange, { item: e }),
      this.isPlaying && (s == null ? void 0 : s.currentItem) !== e && this._pauseMedia(),
      i &&
        (h.debug("setting state to ended on ", i.title),
        (i.state = q.ended),
        i.endMonitoringStateDidChange(),
        i.endMonitoringStateWillChange()),
      (this._nowPlayingItem = e),
      h.debug("setting state to playing on ", e.title),
      (e.state = q.playing),
      e && e.info && this._setTargetElementTitle(e.info),
      t.publish(T.nowPlayingItemDidChange, { item: e }),
      t.publish(T.playbackDurationDidChange, {
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
    const i = this._playbackState;
    if (e === i) return;
    const s = { oldState: i, state: e, nowPlayingItem: t };
    (h.debug("BasePlayer.playbackState is changing", s),
      this._dispatcher.publish(T.playbackStateWillChange, s),
      (this._playbackState = e),
      this._dispatcher.publish(T.playbackStateDidChange, s));
  }
  get playbackTargetAvailable() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetAvailable;
  }
  set playbackTargetAvailable(e) {
    e !== this._playbackTargetAvailable &&
      ((this._playbackTargetAvailable = e),
      this._dispatcher.publish(T.playbackTargetAvailableDidChange, { available: e }));
  }
  get playbackTargetIsWireless() {
    return window.WebKitPlaybackTargetAvailabilityEvent !== void 0 && this._playbackTargetIsWireless;
  }
  set playbackTargetIsWireless(e) {
    e !== this._playbackTargetIsWireless &&
      ((this._playbackTargetIsWireless = e),
      this._dispatcher.publish(T.playbackTargetIsWirelessDidChange, { playing: e }));
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
    var e;
    (e = this._buffer) == null || e.clearNextManifest();
  }
  async initialize() {
    if ((h.trace("BasePlayer.initialize"), this._isInitialized)) {
      h.warn("Player is already initialized");
      return;
    }
    (await this.initializeMediaElement(),
      await this.initializeExtension(),
      this.initializeEventHandlers(),
      this._dispatcher.publish(T.mediaElementCreated, this._targetElement),
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
      h.debug(`Adding event handlers to <HTMLMediaElement id=${this._targetElement.id} />`, this._targetElement),
      io.forEach((t) => e.addEventListener(t, this)),
      this._dispatcher.publish(P.playerActivate));
  }
  removeEventHandlers() {
    (h.trace("BasePlayer.removeEventHandlers()"),
      setTimeout(() => {
        (h.debug(`Removing event handlers from <HTMLMediaElement id=${this._targetElement.id} />`, this._targetElement),
          io.forEach((e) => this._targetElement.removeEventListener(e, this)),
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
    var e;
    return ((e = this._seeker) == null || e.end(), (this._seeker = new Jc(this)), this._seeker);
  }
  async stop(e) {
    (h.debug("BasePlayer.stop", e),
      await this._waitForPendingPlay(),
      this.isPlaying &&
        (h.debug("BasePlayer.play dispatching playbackStop"),
        this.dispatch(P.playbackStop, {
          item: this.nowPlayingItem,
          position: this.currentPlaybackTime,
          startPosition: this.initialPlaybackTime,
          playingDate: this.currentPlayingDate,
          startPlayingDate: this.initialPlayingDate,
          ...e,
        })),
      await this.stopMediaAndCleanup());
  }
  async stopMediaAndCleanup(e = V.stopped) {
    (h.debug("BasePlayer.stopMediaAndCleanup", e),
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
    (this.resetDeferredPlay(), this.stop({ endReasonType: R.FAILED_TO_LOAD, userInitiated: !1 }));
  }
  calculatePlaybackProgress() {
    const e = Math.round((this.currentPlaybackTime / this.currentPlaybackDuration || 0) * 100) / 100;
    this._currentPlaybackProgress !== e &&
      ((this._currentPlaybackProgress = e),
      this._dispatcher.publish(T.playbackProgressDidChange, { progress: this._currentPlaybackProgress }));
  }
  calculateBufferedProgress(e) {
    const t = Math.round((e / this.currentPlaybackDuration) * 100);
    this._currentBufferedProgress !== t &&
      ((this._currentBufferedProgress = t), this._dispatcher.publish(T.bufferedProgressDidChange, { progress: t }));
  }
  destroy() {
    var t, i, s;
    if (
      (h.debug("BasePlayer.destroy()"),
      (this._isDestroyed = !0),
      (t = this._playbackErrorSubscription) == null || t.unsubscribe(),
      !this.hasMediaElement)
    )
      return;
    const e = this._targetElement;
    ((i = this.extension) == null || i.destroy(e),
      this.resetMediaElement(),
      this.removeEventHandlers(),
      (s = e.parentNode) == null || s.removeChild(e));
  }
  async handleEvent(e) {
    var i, s, n;
    e.type !== "timeupdate" && h.debug("BasePlayer.handleEvent: ", e.type, e);
    const { nowPlayingItem: t } = this;
    switch (((e.timestamp = Date.now()), e.type)) {
      case "canplay": {
        (this._dispatcher.publish(T.mediaCanPlay, e),
          this._playbackState === V.waiting && !this._targetElement.paused && this.setPlaybackState(V.playing, t));
        break;
      }
      case "durationchange": {
        this._targetElement.duration !== 1 / 0 &&
          ((e.duration = this.currentPlaybackDuration),
          this._dispatcher.publish(T.playbackDurationDidChange, e),
          this.calculatePlaybackProgress());
        break;
      }
      case "ended": {
        if ((h.debug('media element "ended" event'), (i = this.nowPlayingItem) != null && i.isLinearStream)) {
          h.warn("ignoring ended event for linear stream", e);
          return;
        }
        if (this.isElementCleaned()) {
          h.debug('media element already cleaned, ignoring "ended" event');
          break;
        }
        const a = this.nowPlayingItem,
          o = a != null && a.playbackDuration ? a.playbackDuration / 1e3 : this.currentPlaybackTime,
          l = this.currentPlayingDate;
        (await this.stopMediaAndCleanup(V.ended),
          this.dispatch(P.playbackStop, {
            item: a,
            position: o,
            playingDate: l,
            endReasonType: R.NATURAL_END_OF_TRACK,
          }));
        break;
      }
      case "error": {
        if (
          (h.error("Playback Error", e, this._targetElement.error),
          (((s = this._targetElement.error) == null ? void 0 : s.code) === 4 ||
            ((n = this._targetElement.error) == null ? void 0 : n.code) === 3) &&
            !mi(this.nowPlayingItem))
        )
          break;
        this._dispatcher.publish(T.mediaPlaybackError, new m(m.Reason.MEDIA_PLAYBACK, "Playback Error"));
        break;
      }
      case "loadedmetadata": {
        this._dispatcher.publish(T.metadataDidChange, e);
        break;
      }
      case "loadstart": {
        this.setPlaybackState(V.loading, t);
        break;
      }
      case "pause": {
        this.setPlaybackState(this._stopped ? V.stopped : V.paused, t);
        break;
      }
      case "play":
      case "playing": {
        ((this._paused = !1), (this._stopped = !1), (this.isPrimaryPlayer = !0), this.setPlaybackState(V.playing, t));
        break;
      }
      case "progress": {
        const a = this._targetElement.buffered;
        (this.handleBufferStart(), a.length === 1 && a.start(0) === 0 && this.calculateBufferedProgress(a.end(0)));
        break;
      }
      case "ratechange": {
        this._dispatcher.publish(T.playbackRateDidChange, e);
        break;
      }
      case "seeked": {
        this._stopped
          ? this.setPlaybackState(V.stopped, t)
          : this._paused
            ? this.setPlaybackState(V.paused, t)
            : this.playbackState !== V.ended && this.setPlaybackState(V.playing, t);
        break;
      }
      case "seeking": {
        (this.playbackState === V.paused
          ? (this._paused = !0)
          : this.playbackState === V.stopped && (this._stopped = !0),
          this.playbackState !== V.ended && this.setPlaybackState(V.seeking, t));
        break;
      }
      case "timeupdate": {
        (this._dispatcher.publish(T.playbackTimeDidChange, {
          currentPlaybackDuration: this.currentPlaybackDuration,
          currentPlaybackTime: this.currentPlaybackTime,
          currentPlaybackTimeRemaining: this.currentPlaybackTimeRemaining,
        }),
          this.calculatePlaybackProgress());
        const a = this._buffer;
        a && (a.currentTime = this.currentPlaybackTime);
        break;
      }
      case "volumechange": {
        this._dispatcher.publish(T.playbackVolumeDidChange, e);
        break;
      }
      case "waiting": {
        this.isReady || this.setPlaybackState(V.waiting, t);
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
      h.debug("BasePlayer.handleBufferStart: setting initialPlaybackTime", this.initialPlaybackTime));
  }
  async pause(e = {}) {
    (await this._waitForPendingPlay(),
      this.isPlaying &&
        (await this._pauseMedia(),
        (this._paused = !0),
        this.dispatch(P.playbackPause, {
          item: this.nowPlayingItem,
          position: this.currentPlaybackTime,
          playingDate: this.currentPlayingDate,
          ...e,
        })));
  }
  async play(e = !0) {
    if ((h.debug("BasePlayer.play()"), !!this.nowPlayingItem))
      try {
        (await this._playMedia(),
          h.debug("BasePlayer.play dispatching playbackPlay"),
          this.dispatch(P.playbackPlay, {
            userInitiated: e,
            item: this.nowPlayingItem,
            position: this.currentPlaybackTime,
            playingDate: this.currentPlayingDate,
          }));
      } catch (t) {
        if (
          (t && yp.includes(t.name) && h.error("BasePlayer.play() rejected due to", t),
          (t == null ? void 0 : t.name) === "NotAllowedError")
        )
          throw new m(
            m.Reason.USER_INTERACTION_REQUIRED,
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
      Qe(t, "isPlaying") || (t.isPlaying = this.isPlaying),
      this._dispatcher.publish(e, t));
  }
  tsidChanged(e) {
    e === void 0 || e === "" || (this.isPrimaryPlayer = e === this._serial);
  }
  async _waitForPendingPlay() {
    this._deferredPlay && (await this._deferredPlay.promise, (this._deferredPlay = void 0));
  }
  async _loadMedia() {
    (h.debug("BasePlayer._loadMedia", this._targetElement), this._targetElement.load());
  }
  async _pauseMedia() {
    this._targetElement.pause();
  }
  async _playAssetURL(e, t) {
    (h.debug("BasePlayer._playAssetURL", e), (this._targetElement.src = e));
    const i = this._loadMedia();
    if (t) {
      (h.debug("BasePlayer.loadOnly"), await i);
      return;
    }
    await this._playMedia();
  }
  async playItemFromUnencryptedSource(e, t, i, s) {
    return (
      i != null && i.startTime && (e += `#t=${i.startTime}`),
      t || this.startPlaybackSequence(),
      await this._playAssetURL(e, t),
      this.finishPlaybackSequence()
    );
  }
  async _playMedia() {
    h.debug("BasePlayer._playMedia", this._targetElement, this.extension);
    try {
      (await this._targetElement.play(), (this._playbackDidStart = !0));
    } catch (e) {
      throw (h.error("BasePlayer._playMedia: targetElement.play() rejected", e), e);
    }
  }
  _setTargetElementTitle(e) {
    this.hasMediaElement && (this._targetElement.title = e);
  }
  resetDeferredPlay() {
    this._deferredPlay = void 0;
  }
  async stopMediaElement() {
    (h.trace("BasePlayer.stopMediaElement()"),
      this.hasMediaElement &&
        (h.debug(`Stopping HTMLMediaElement id=${this._targetElement.id}`, this._targetElement),
        this._targetElement.pause(),
        this.resetMediaElement()));
  }
  resetMediaElement() {
    h.trace("BasePlayer.cleanupElement()");
    const e = this._targetElement;
    if (!e || this.isElementCleaned()) {
      h.debug("No HTMLMediaElement to reset");
      return;
    }
    (h.debug("Resetting HTMLMediaElement", e),
      (e.currentTime = 0),
      e.removeAttribute("src"),
      e.removeAttribute("title"));
  }
  isElementCleaned() {
    const e = this._targetElement;
    return e ? e.currentTime === 0 && e.src === "" && e.title === "" : !0;
  }
  finishPlaybackSequence() {
    var t;
    h.debug("BasePlayer.finishPlaybackSequence", this._deferredPlay);
    const e = (t = this._deferredPlay) == null ? void 0 : t.resolve(void 0);
    return ((this._deferredPlay = void 0), e);
  }
  startPlaybackSequence() {
    return (
      h.debug("BasePlayer.startPlaybackSequence", this._deferredPlay),
      this._deferredPlay && (h.warn("Previous playback sequence not cleared"), this.finishPlaybackSequence()),
      (this._deferredPlay = $c()),
      this._deferredPlay.promise
    );
  }
  toString() {
    return `<${this.constructor.name} id="${this.id}" isInitialized=${this.isInitialized} isDestroyed=${this.isDestroyed} />`;
  }
}
pp([S()], Bi.prototype, "onPlaybackError", 1);
function Mr(r, e) {
  if (r.type === "Preview" && !z(r.previewURL, { trim: !0 })) return r.previewURL;
  if (!r.assetURL) throw new Error("Cannot generate asset URL");
  const t = {};
  return (
    e != null && e.startOver && (t.startOver = !0),
    e != null && e.bingeWatching && (t.bingeWatching = !0),
    e != null && e.drmUsed && (t.drmUsed = e.drmUsed),
    r.supportsLinearScrubbing && (t.linearScrubbingSupported = !0),
    r.assetURL.match(/xapsub=accepts-css/) || (t.xapsub = "accepts-css"),
    Ui(r.assetURL, t)
  );
}
var W = ((r) => (
    (r.playbackLicenseError = "playbackLicenseError"),
    (r.playbackSessionError = "playbackSessionError"),
    (r.manifestParsed = "manifestParsed"),
    (r.audioCodecIdentified = "audioCodecIdentified"),
    (r.audioTracksSwitched = "audioTracksSwitched"),
    (r.audioTracksUpdated = "audioTracksUpdated"),
    (r.textTracksSwitched = "textTracksSwitched"),
    (r.textTracksUpdated = "textTracksUpdated"),
    (r.inlineStylesParsed = "inlineStylesParsed"),
    (r.itemPlaying = "itemPlaying"),
    (r.levelUpdated = "levelUpdated"),
    r
  ))(W || {}),
  Yt = ((r) => ((r.MP4 = "audio/mp4"), (r.AVC1 = "video/mp4"), r))(Yt || {}),
  sn = ((r) => (
    (r.Home = "com.apple.amp.appletv.home-team-radio"),
    (r.Away = "com.apple.amp.appletv.away-team-radio"),
    r
  ))(sn || {});
const mp = "com.apple.amp.appletv.identifier",
  Zc = "public.accessibility.describes-video";
function gp(r) {
  var e;
  return ((e = r.MediaSelectionOptionsTaggedMediaCharacteristics) != null ? e : []).includes(Zc);
}
function el(r) {
  return r.characteristics !== void 0 && r.characteristics.includes("com.apple.amp.appletv.home-team-radio");
}
function tl(r) {
  return r.characteristics !== void 0 && r.characteristics.includes("com.apple.amp.appletv.away-team-radio");
}
function vp(r) {
  var e;
  return (e = r.characteristics) == null ? void 0 : e.find((t) => t.startsWith(mp));
}
function nn(r) {
  return { label: r.label, kind: r.kind, language: r.language };
}
function rl(r, e) {
  Nd(r, nn(e));
}
function Bn(r) {
  return Dd(r);
}
function yr(r, e) {
  const t = nn(r),
    i = nn(e);
  for (const s of Object.keys(t)) if (t[s] !== i[s]) return !1;
  return !0;
}
function so(r) {
  var e, t, i;
  return bp(r)
    ? r
    : {
        MediaSelectionOptionsExtendedLanguageTag: (e = r.lang) != null ? e : "",
        MediaSelectionOptionsIsDefault: !!r.default,
        MediaSelectionOptionsDisplaysNonForcedSubtitles: r.forced ? 0 : 1,
        MediaSelectionOptionsInterstitialId: r.interstitialId,
        MediaSelectionOptionsPersistentID: (t = r.persistentID) != null ? t : -1,
        MediaSelectionOptionsName: r.name,
        MediaSelectionOptionsTaggedMediaCharacteristics: (i = r.characteristics) != null ? i : [],
        MediaSelectionOptionsMediaType: r.mediaType,
      };
}
function bp(r) {
  return typeof r == "object" && r !== null && "MediaSelectionOptionsExtendedLanguageTag" in r;
}
function $n(r, e) {
  if (!(e != null && e.language)) return;
  const t = e.kind === "description",
    i = r.filter((s) => s.MediaSelectionOptionsExtendedLanguageTag === e.language && gp(s) === t);
  return !("id" in e) || i.length === 1 ? i[0] : i.find((s) => s.MediaSelectionOptionsPersistentID === e.id);
}
function _p(r) {
  return r.find((e) => e.MediaSelectionOptionsIsDefault);
}
function il(r, e) {
  return $n(r, Bn(e));
}
function no(r, e) {
  var t, i, s;
  return (s = (i = (t = $n(r, e)) != null ? t : il(r, en)) != null ? i : _p(r)) != null ? s : r[0];
}
function ms(r, e, t) {
  var i, s;
  return (s = (i = $n(r, t)) != null ? i : il(r, tn)) != null ? s : Tp(r, e);
}
function Tp(r, e) {
  if (!e) return;
  const t = e.MediaSelectionOptionsExtendedLanguageTag;
  return r.find(
    (i) => i.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 && i.MediaSelectionOptionsExtendedLanguageTag === t,
  );
}
function sl(r) {
  return {
    id: r.MediaSelectionOptionsPersistentID,
    label: r.MediaSelectionOptionsName,
    language: r.MediaSelectionOptionsExtendedLanguageTag,
    interstitialId: r.MediaSelectionOptionsInterstitialId,
    isDefault: r.MediaSelectionOptionsIsDefault,
  };
}
function Ep(r) {
  const e = r.MediaSelectionOptionsTaggedMediaCharacteristics,
    t = (e != null ? e : []).includes(Zc) ? "description" : "main";
  return { ...sl(r), enabled: !1, kind: t, characteristics: e };
}
function ao(r) {
  var t;
  let e;
  return (
    (t = r.MediaSelectionOptionsTaggedMediaCharacteristics) != null &&
    t.includes("public.accessibility.describes-music-and-sound")
      ? (e = "captions")
      : (e = r.MediaSelectionOptionsMediaType === "clcp" ? "captions" : "subtitles"),
    { ...sl(r), mode: "disabled", kind: e }
  );
}
class Sp {
  constructor(e, t, i) {
    c(this, "_extensionTracks", []);
    c(this, "_isDestroyed", !1);
    if (((this.mediaElement = e), (this.dispatcher = t), (this.extensionTracks = i), this.extensionTracks))
      (h.debug("MEDIA_TRACK Initializing audio track manager for hls track events"),
        (this.onExtensionAudioTracksUpdated = this.onExtensionAudioTracksUpdated.bind(this)),
        (this.onExtensionAudioTrackSwitched = this.onExtensionAudioTrackSwitched.bind(this)),
        this.extensionTracks.addEventListener(W.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.addEventListener(W.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
    else {
      if (!e.audioTracks) return;
      (h.debug("MEDIA_TRACK Initializing audio track manager for native track events"),
        (this.onAudioTrackAdded = this.onAudioTrackAdded.bind(this)),
        (this.onAudioTrackChanged = this.onAudioTrackChanged.bind(this)),
        (this.onAudioTrackRemoved = this.onAudioTrackRemoved.bind(this)),
        e.audioTracks.addEventListener("addtrack", this.onAudioTrackAdded),
        e.audioTracks.addEventListener("change", this.onAudioTrackChanged),
        e.audioTracks.addEventListener("removetrack", this.onAudioTrackRemoved));
    }
  }
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
      (h.debug(`MEDIA_TRACK Setting audio track ${e.label}`, { shouldPersist: t }),
      t &&
        !el(e) &&
        !tl(e) &&
        (rl(en, e), h.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`)),
      this.extensionTracks
        ? (h.debug(`MEDIA_TRACK Setting track on extension ${e.id}-${e.label}`), (this.extensionTracks.audioTrack = e))
        : (h.debug("MEDIA_TRACK disabling all audio tracks"),
          Array.from(this.mediaElement.audioTracks).forEach((i) => {
            i !== e && (i.enabled = !1);
          }),
          h.debug("MEDIA_TRACK enabling", e),
          (e.enabled = !0)));
  }
  get tracks() {
    return this.extensionTracks
      ? this._extensionTracks || this.extensionTracks.audioTracks || []
      : Array.from(this.mediaElement.audioTracks);
  }
  destroy() {
    if (((this._isDestroyed = !0), this.extensionTracks))
      (this.extensionTracks.removeEventListener(W.audioTracksUpdated, this.onExtensionAudioTracksUpdated),
        this.extensionTracks.removeEventListener(W.audioTracksSwitched, this.onExtensionAudioTrackSwitched));
    else {
      if (!this.mediaElement.audioTracks) return;
      (this.mediaElement.audioTracks.removeEventListener("addtrack", this.onAudioTrackAdded),
        this.mediaElement.audioTracks.removeEventListener("change", this.onAudioTrackChanged),
        this.mediaElement.audioTracks.removeEventListener("removetrack", this.onAudioTrackRemoved));
    }
  }
  onExtensionAudioTracksUpdated(e) {
    (h.debug("MEDIA_TRACK Extension audio tracks updated", e),
      (this._extensionTracks = e),
      this.dispatcher.publish(T.audioTrackAdded, e));
  }
  onExtensionAudioTrackSwitched(e) {
    h.debug("MEDIA_TRACK Extension audio track switched", e);
    const { selectedId: t } = e;
    if (this._extensionTracks) {
      const i = (s) => {
        s.enabled = t === s.id;
      };
      this._extensionTracks.forEach(i);
    }
    this.dispatcher.publish(T.audioTrackChanged, e);
  }
  onAudioTrackAdded(e) {
    const t = Bn(en);
    (t !== void 0 &&
      yr(e.track, t) &&
      (h.debug(`Found new track matching persisted track: ${e.track.label}`), (this.currentTrack = e.track)),
      this.dispatcher.publish(T.audioTrackAdded, e));
  }
  onAudioTrackChanged(e) {
    this.dispatcher.publish(T.audioTrackChanged, e);
  }
  onAudioTrackRemoved(e) {
    this.dispatcher.publish(T.audioTrackRemoved, e);
  }
}
const _i = [],
  Ti = [],
  Ip = 100;
function kp() {
  let r = _i.pop();
  return (
    r
      ? h.debug(`dom-helpers: retrieving video tag, ${_i.length} remain`)
      : (h.debug("dom-helpers: no available video tags, creating one"), (r = document.createElement("video"))),
    r
  );
}
function nl() {
  let r = Ti.pop();
  return (
    r
      ? h.debug(`dom-helpers: retrieving audio tag, ${Ti.length} remain`)
      : (h.debug("dom-helpers: no available audio tags, creating one"), (r = document.createElement("audio"))),
    r
  );
}
function Pp() {
  (Ap(),
    h.debug(
      `dom-helpers: defer playback called.  There are ${_i.length} available video elements and ${Ti.length} available audio elements.`,
    ));
}
function Ap() {
  (oo("audio", Ti), oo("video", _i));
}
function oo(r, e) {
  let t = Ip - e.length;
  for (; t > 0;) {
    const i = document.createElement(r);
    (i.load(), e.push(i), t--);
  }
}
function wp(r) {
  return r != null && typeof r.id == "string" && "removeEventListener" in r;
}
function Rp(r) {
  return r != null && typeof r.id == "string" && typeof r.value < "u" && typeof r.value.key == "string";
}
const al = {
    [J.clearkey]: "",
    [J.widevine]: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
    [J.playready]: "com.microsoft.playready",
    [J.fairplay]: "com.apple.streamingkeydelivery",
  },
  { textTracksSwitched: co, textTracksUpdated: lo, itemPlaying: uo } = W;
class Cp {
  constructor(e, t, i) {
    c(this, "_tracks", []);
    c(this, "_currentlyPlayingTrack");
    c(this, "_audioTrackSubscription");
    c(this, "_isDestroyed", !1);
    ((this.mediaElement = e),
      (this.dispatcher = t),
      (this.extensionTracks = i),
      this._tracks.push(this.createOffOption()),
      this.extensionTracks
        ? (h.debug("MEDIA_TRACK Initializing text track manager for HLS.js track events"),
          (this.onExtensionTextTracksUpdated = this.onExtensionTextTracksUpdated.bind(this)),
          (this.onExtensionTextTrackSwitched = this.onExtensionTextTrackSwitched.bind(this)),
          (this.onExtensionItemPlaying = this.onExtensionItemPlaying.bind(this)),
          this.extensionTracks.addEventListener(lo, this.onExtensionTextTracksUpdated),
          this.extensionTracks.addEventListener(co, this.onExtensionTextTrackSwitched),
          this.extensionTracks.addEventListener(uo, this.onExtensionItemPlaying))
        : (h.debug("MEDIA_TRACK Initializing text track manager for native track events"),
          (this.onTextTrackAdded = this.onTextTrackAdded.bind(this)),
          (this.onTextTrackChanged = this.onTextTrackChanged.bind(this)),
          (this.onTextTrackRemoved = this.onTextTrackRemoved.bind(this)),
          (this.onPlayStart = this.onPlayStart.bind(this)),
          e.textTracks.addEventListener("addtrack", this.onTextTrackAdded),
          e.textTracks.addEventListener("change", this.onTextTrackChanged),
          e.textTracks.addEventListener("removetrack", this.onTextTrackRemoved),
          e.addEventListener("playing", this.onPlayStart),
          (this.onAudioTrackAddedOrChanged = Ed(this.onAudioTrackAddedOrChanged.bind(this))),
          (this._audioTrackSubscription = t.subscribe(
            [T.audioTrackChanged, T.audioTrackAdded],
            this.onAudioTrackAddedOrChanged,
          ))));
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  get currentTrack() {
    return this.tracks.find((e) => e.mode === "showing");
  }
  set currentTrack(e) {
    if (!e) return;
    let t;
    (rl(tn, e),
      h.debug(`MEDIA_TRACK save track selection ${e.language},${e.label},${e.kind}`),
      this.extensionTracks
        ? (h.debug(`MEDIA_TRACK Setting track on extension ${e.label}`),
          e.label === yt && this.clearCurrentlyPlayingTrack(),
          (this.extensionTracks.textTrack = e))
        : (h.debug(`MEDIA_TRACK Setting track on element ${e.label}`),
          this._tracks.forEach((i) => {
            i !== e && i.mode === He && (i.mode = Xr);
          }),
          e &&
            (h.debug(`MEDIA_TRACK setting track mode to showing for ${e.label}`),
            this.isTrackOff(e)
              ? ((this._tracks[0].mode = He), (t = this.selectNativeForcedTrack(this.mediaElement.audioTracks)))
              : (e.mode = He)),
          this.dispatcher.publish(T.forcedTextTrackChanged, { textTrack: t })));
  }
  get tracks() {
    return this._tracks;
  }
  destroy() {
    var e;
    if (((this._isDestroyed = !0), this.clearCurrentlyPlayingTrack(), !this.extensionTracks))
      (this.mediaElement.textTracks.removeEventListener("addtrack", this.onTextTrackAdded),
        this.mediaElement.textTracks.removeEventListener("change", this.onTextTrackChanged),
        this.mediaElement.textTracks.removeEventListener("removetrack", this.onTextTrackRemoved),
        this.mediaElement.removeEventListener("playing", this.onPlayStart));
    else {
      const t = this.extensionTracks;
      (t.removeEventListener(lo, this.onExtensionTextTracksUpdated),
        t.removeEventListener(co, this.onExtensionTextTrackSwitched),
        t.removeEventListener(uo, this.onExtensionItemPlaying));
    }
    (e = this._audioTrackSubscription) == null || e.unsubscribe();
  }
  restoreSelectedTrack() {
    const e = this.getValidSavedTrack();
    e && (h.debug(`Found track matching persisted track: ${e.label}`), (this.currentTrack = e));
  }
  getSavedTrack() {
    return Bn(tn);
  }
  getValidSavedTrack() {
    const e = this.getSavedTrack();
    if (e) return this.tracks.find((t) => yr(t, e));
  }
  onExtensionTextTracksUpdated(e) {
    (h.debug("MEDIA_TRACK Extension text tracks updated", e),
      (this._tracks = [this.createOffOption(), ...e]),
      this.dispatcher.publish(T.textTrackAdded, e));
  }
  onExtensionTextTrackSwitched(e) {
    (h.debug("MEDIA_TRACKS Extension text track switched", e), this.handleVTT(e));
    const t = e.track;
    if (this._tracks) {
      const i = (s) => {
        e.track
          ? (t.forced && s.label === yt) || (t.label === yt && s.label === yt)
            ? (s.mode = He)
            : (s.mode = t.persistentID === s.id ? He : Xr)
          : (s.mode = s.label === yt ? He : Xr);
      };
      this._tracks.forEach(i);
    }
    this.dispatcher.publish(T.textTrackChanged, e);
  }
  onExtensionItemPlaying(e) {
    this.dispatcher.publish(T.forcedTextTrackChanged, { textTrack: e.forcedTextTrack });
  }
  handleVTT(e) {
    var i;
    const t = (i = e == null ? void 0 : e.track) == null ? void 0 : i.persistentID;
    if (t !== void 0) {
      const n = this.filterSelectableTextTracks(this.mediaElement.textTracks).find((a) => a.persistentId === t);
      n && this.onNativeTrackChange(n);
    } else this.clearCurrentlyPlayingTrack();
  }
  onAudioTrackAddedOrChanged() {
    if ((h.debug("MEDIA_TRACKS text track manager detects audio track change"), !this.shouldForceSubtitle())) {
      h.debug("MEDIA_TRACKS valid persisted track found. Not displaying forced text track");
      return;
    }
    (h.debug("MEDIA_TRACKS selecting forced text track natively"), (this.currentTrack = this._tracks[0]));
  }
  onTextTrackAdded(e) {
    (this._tracks.push(e.track), this.dispatcher.publish(T.textTrackAdded, e));
  }
  onPlayStart() {
    this.restoreSelectedTrack();
  }
  onTextTrackRemoved(e) {
    this.dispatcher.publish(T.textTrackRemoved, e);
  }
  onTextTrackChanged(e) {
    const t = this.findNativeSelectedTextTrack();
    let i = this.getSavedTrack();
    if ((i || (i = this._tracks[0]), t && !yr(t, i)))
      if (this.isTrackOff(i) && t.kind !== "forced") {
        const s = this.tracks.find((n) => yr(n, i));
        this.currentTrack = s;
      } else {
        const s = this.findNativeTrack(i);
        s && (this.currentTrack = s);
      }
    else this.dispatcher.publish(T.textTrackChanged, e);
  }
  findNativeSelectedTextTrack() {
    for (let e = 0; e < this.mediaElement.textTracks.length; e++) {
      const t = this.mediaElement.textTracks[e];
      if (t.mode === He) return t;
    }
  }
  findNativeTrack(e) {
    for (let t = 0; t < this.mediaElement.textTracks.length; t++) {
      const i = this.mediaElement.textTracks[t];
      if (yr(i, e)) return i;
    }
  }
  selectNativeForcedTrack(e) {
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      if (i.enabled) {
        const s = this.findNativeForcedTrack(i);
        return (s && s.mode !== He && (s.mode = He), s);
      }
    }
  }
  findNativeForcedTrack(e) {
    const t = this.mediaElement.textTracks;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (s.kind === "forced" && s.language === e.language) return s;
    }
  }
  onNativeTrackChange(e) {
    (this.clearCurrentlyPlayingTrack(), (this._currentlyPlayingTrack = e));
  }
  clearCurrentlyPlayingTrack() {
    this._currentlyPlayingTrack === void 0 || !wp(this._currentlyPlayingTrack) || delete this._currentlyPlayingTrack;
  }
  filterSelectableTextTracks(e) {
    const t = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      (s.kind === "captions" || s.kind === "subtitles" || (s.kind === "metadata" && s.customTextTrackCueRenderer)) &&
        t.push(s);
    }
    return t;
  }
  shouldForceSubtitle() {
    h.debug("MEDIA_TRACKS Determining whether to select forced text track");
    const e = this.getValidSavedTrack();
    return !e || this.isTrackOff(e);
  }
  createOffOption() {
    const e = this.getValidSavedTrack();
    return { id: -2, label: yt, language: "", kind: "subtitles", mode: !e || this.isTrackOff(e) ? He : Xr };
  }
  isTrackOff(e) {
    return e.label === yt;
  }
}
var Op = Object.defineProperty,
  Dp = Object.getOwnPropertyDescriptor,
  Np = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Dp(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Op(e, t, s), s);
  };
const Lp = "apple-music-video-container",
  Mp = "picture-in-picture",
  ol = "inline",
  Up = { "picture-in-picture": Ne.pictureinpicture, inline: Ne.inline },
  Hn = {};
Hn[Ne.pictureinpicture] = Mp;
Hn[Ne.inline] = ol;
const { presentationModeDidChange: gs } = T,
  { playbackLicenseError: xp } = W;
class jn extends Bi {
  constructor(t) {
    var i, s;
    super(t);
    c(this, "extension");
    c(this, "video");
    c(this, "mediaPlayerType", "video");
    c(this, "restrictPlatforms");
    c(this, "textTrackManager");
    c(this, "audioTrackManager");
    c(this, "userInitiated", !1);
    ((this.pipEventHandler = this.pipEventHandler.bind(this)),
      (this.restrictPlatforms = !0),
      ((i = t.bag) == null ? void 0 : i.features) !== void 0 &&
        (this.restrictPlatforms = (s = t.bag.features.restrictPlatforms) != null ? s : !0));
  }
  get audioTracks() {
    var t, i;
    return (i = (t = this.audioTrackManager) == null ? void 0 : t.tracks) != null ? i : [];
  }
  get containerElement() {
    return this._context.videoContainerElement ? this._context.videoContainerElement : document.getElementById(Lp);
  }
  get currentAudioTrack() {
    var t;
    return (t = this.audioTrackManager) == null ? void 0 : t.currentTrack;
  }
  set currentAudioTrack(t) {
    this.audioTrackManager !== void 0 && (this.audioTrackManager.currentTrack = t);
  }
  get currentTextTrack() {
    var t;
    return (t = this.textTrackManager) == null ? void 0 : t.currentTrack;
  }
  set currentTextTrack(t) {
    this.textTrackManager !== void 0 && (this.textTrackManager.currentTrack = t);
  }
  get _targetElement() {
    return this.video || { ...document.createElement("video") };
  }
  get textTracks() {
    var t, i;
    return (i = (t = this.textTrackManager) == null ? void 0 : t.tracks) != null ? i : [];
  }
  async initializeExtension() {
    const { os: t } = this.services.runtime;
    if (this.restrictPlatforms && t.isAndroid) {
      h.warn("videoPlayer.initializeExtension Not supported on the current platform");
      return;
    }
    if (!this.video) {
      h.warn("videoPlayer.initializeExtension No video element, not initializing extension");
      return;
    }
  }
  onPlaybackLicenseError(t) {
    (this.resetDeferredPlay(), this._dispatcher.publish(xp, t));
  }
  setupTrackManagers(t) {
    var i, s, n, a;
    ((s = (i = this.textTrackManager) == null ? void 0 : i.destroy) == null || s.call(i),
      (this.textTrackManager = new Cp(this._targetElement, this._dispatcher, t)),
      (a = (n = this.audioTrackManager) == null ? void 0 : n.destroy) == null || a.call(n),
      (this.audioTrackManager = new Sp(this._targetElement, this._dispatcher, t)));
  }
  destroy() {
    var t, i;
    (this.finishPlaybackSequence(),
      (t = this.textTrackManager) == null || t.destroy(),
      (i = this.audioTrackManager) == null || i.destroy(),
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
    const { _targetElement: t } = this;
    (t.removeEventListener("webkitpresentationmodechanged", this.pipEventHandler),
      t.removeEventListener("enterpictureinpicture", this.pipEventHandler),
      t.removeEventListener("leavepictureinpicture", this.pipEventHandler));
  }
  async initializeMediaElement() {
    h.debug("videoPlayer.initializeMediaElement Initializing media element");
    const t = this.containerElement;
    if (!t) throw new v("mk-117", v.Reason.CONFIGURATION_ERROR, "No container element found");
    ((this.video = kp()),
      (this.video.autoplay = !1),
      (this.video.controls = !1),
      (this.video.playsInline = !0),
      (this.video.id = "apple-music-video-player"),
      t.appendChild(this.video));
  }
  ensureMediaElementInDocument() {
    if (!this.containerElement) {
      h.warn("videoPlayer.addMediaElementToDocument No container defined");
      return;
    }
    if (!this.video) {
      h.warn("videoPlayer.addMediaElementToDocument - media element has not been initialized");
      return;
    }
    this.containerElement.appendChild(this.video);
  }
  pipEventHandler(t) {
    switch (t.type) {
      case "enterpictureinpicture": {
        this._dispatcher.publish(gs, { mode: Ne.pictureinpicture });
        break;
      }
      case "leavepictureinpicture": {
        this._dispatcher.publish(gs, { mode: Ne.inline });
        break;
      }
      case "webkitpresentationmodechanged": {
        const i = this._targetElement;
        this._dispatcher.publish(gs, { mode: this._translateStringToPresentationMode(i.webkitPresentationMode) });
        break;
      }
    }
  }
  async playItemFromEncryptedSource(t, i = !1, s = {}) {
    (h.debug("videoPlayer.playItemFromEncryptedSource", t, i),
      (t.playbackType = Te.encryptedFull),
      (this.nowPlayingItem = t),
      (t.state = q.loading),
      (this.userInitiated = i));
    const n = Mr(t, { ...s, drmUsed: this.services.runtime.preferredKeySystem });
    await this.playHlsStream(n, t, s);
  }
  async playItemFromUnencryptedSource(t, i, s, n) {
    h.debug("videoPlayer.playItemFromUnencryptedSource", t, i);
    const [a] = t.split("?");
    a.endsWith("m3u") || a.endsWith("m3u8")
      ? await this.playHlsStream(t, n, s)
      : (s != null && s.startTime && (t += `#t=${s.startTime}`), await this._playAssetURL(t, i));
  }
  async setPresentationMode(t) {
    const i = this._targetElement;
    if (i.webkitSupportsPresentationMode && typeof i.webkitSetPresentationMode == "function")
      return i.webkitSetPresentationMode(this._translatePresentationModeToString(t));
    if (i.requestPictureInPicture && document.exitPictureInPicture) {
      if (t === Ne.pictureinpicture) return i.requestPictureInPicture();
      if (t === Ne.inline) return document.exitPictureInPicture();
    }
  }
  _translateStringToPresentationMode(t) {
    let i = Up[t];
    return (
      i === void 0 &&
        (h.warn(
          `videoPlayer._translateStringToPresentationMode ${t} is not a valid presentation mode, setting to inline`,
        ),
        (i = Ne.inline)),
      i
    );
  }
  _translatePresentationModeToString(t) {
    let i = Hn[t];
    return (
      i === void 0 &&
        (h.warn(
          `videoPlayer._translatePresentationModeToString ${t} is not a valid presentation mode, setting to inline`,
        ),
        (i = ol)),
      i
    );
  }
  async preloadItem(t, i) {}
}
Np([S()], jn.prototype, "onPlaybackLicenseError", 1);
const Fp = 1e3,
  Kp = 3,
  cl = (r, e, t, i = 0) =>
    r().catch((s) => {
      const n = i + 1;
      function a(l) {
        if (l && n < Kp) {
          const u = Fp * n;
          return new Promise((d, p) => {
            setTimeout(() => {
              cl(r, e, t, n).then(d, p);
            }, u);
          });
        }
        throw s;
      }
      const o = e(s);
      return typeof o == "boolean" ? a(o) : o.then(a);
    });
let Pr = { developerToken: "developerTokenNotSet", musicUserToken: "musicUserTokenNotSet", cid: "cidNotSet" };
function Vp(r) {
  Pr = r;
}
function Bp(r, e = !1) {
  var t;
  return {
    adamId: r.isPurchasedSong ? r.playParams.purchasedId : (t = r.catalogId) != null ? t : "-1",
    isLibrary: r.isLibrary,
    "user-initiated": e,
  };
}
function $p(r) {
  return { event: r.isLiveAudioStation ? "beats1" : "amtv" };
}
function Hp(r) {
  return { "adam-id": r.id, id: 1 };
}
function jp(r, e, t = 0) {
  var s;
  const i = (s = r.keyServerQueryParameters) != null ? s : {};
  return { id: t, "lease-action": e, ...i };
}
function ho(r, e, t) {
  let i,
    s = {
      challenge: "challenge" in t ? t.challenge : ot(t.licenseChallenge),
      uri: t.keyuri,
      "key-system": t.keySystem,
      stkn: t.slotToken,
    };
  return (
    t.extendedLease && (s["extended-lease"] = t.extendedLease),
    (s = Nh(s, Object.keys(s))),
    e.isUTS
      ? (i = { "streaming-request": { version: 1, "streaming-keys": [{ ...s, ...jp(e, r) }] } })
      : e.isLiveRadioStation
        ? (i = { ...s, ...$p(e) })
        : e.hasOffersHlsUrl
          ? (i = { "license-requests": [{ ...s, ...Hp(e) }] })
          : (i = { ...s, ...Bp(e, t.userInitiated) }),
    i
  );
}
class qp {
  constructor() {
    c(this, "licenseUrl");
    c(this, "playableItem");
    c(this, "licenseData");
    c(this, "initiated");
    c(this, "keySystem");
    c(this, "slotToken");
    c(this, "startResponse");
  }
  fetch(e) {
    const t = {
      Authorization: `Bearer ${Pr.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Apple-Music-User-Token": `${Pr.musicUserToken}`,
    };
    return (
      this.keySystem === J.widevine && (t["X-Apple-Renewal"] = !0),
      cl(
        () => (
          h.debug(`Fetching License challenge from ${this.licenseUrl}`, { headers: t, body: e }),
          fetch(this.licenseUrl, { method: "POST", body: JSON.stringify(e), headers: new Headers(t) })
        ),
        (n) => n instanceof TypeError,
        "license fetch",
      )
    );
  }
  reset() {
    (h.debug("Resetting License instance"),
      (this.licenseUrl = void 0),
      (this.playableItem = void 0),
      (this.licenseData = void 0),
      (this.initiated = void 0),
      (this.keySystem = void 0),
      (this.slotToken = void 0),
      (this.startResponse = void 0));
  }
  async start(e, t, i, s, n = !1, a = !1) {
    var l, u, d;
    ((this.licenseUrl = e),
      (this.playableItem = t),
      (this.licenseData = i),
      (this.keySystem = s),
      (this.initiated = n),
      h.debug(
        `Starting License request to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${gi(this.playableItem)}`,
      ));
    const o = ho("start", t, { ...i, keySystem: s, extendedLease: a, userInitiated: n });
    this.startResponse = this.fetch(o);
    try {
      const p = await this.startResponse;
      if (!p.ok) {
        let k;
        try {
          k = await p.json();
        } catch (w) {}
        this.processJsonError(k);
      }
      h.debug("Processing License Challenge reponse as JSON");
      const y = await p.json();
      let g = y;
      return (
        (u = (l = y == null ? void 0 : y["streaming-response"]) == null ? void 0 : l["streaming-keys"]) != null &&
        u.length
          ? (g = y["streaming-response"]["streaming-keys"][0])
          : (d = y == null ? void 0 : y["license-responses"]) != null && d.length && (g = y["license-responses"][0]),
        g.status !== 0 && this.processJsonError(g),
        (this.slotToken = g.stkn),
        g
      );
    } catch (p) {
      throw (
        h.error(
          `License Challenge Request failed to ${this.licenseUrl} with URI ${this.licenseData.keyuri} for ${gi(this.playableItem)}`,
        ),
        (this.startResponse = void 0),
        p
      );
    }
  }
  processJsonError(e) {
    if (
      (e != null && e.errorCode && (e.status = e.errorCode),
      (e == null ? void 0 : e.status) === -1021 && (e.status = 190121),
      e && e.status !== 0)
    ) {
      if (e.message === void 0)
        switch (e.status) {
          case -1004:
            e.message = m.Reason.DEVICE_LIMIT;
            break;
          case -1017:
            e.message = m.Reason.GEO_BLOCK;
            break;
          default:
            e.message = m.Reason.MEDIA_LICENSE;
        }
      throw new Mi(e);
    }
    throw new m(m.Reason.MEDIA_LICENSE, "Error acquiring license");
  }
  async stop() {
    if (this.startResponse)
      try {
        await this.startResponse;
      } catch (i) {}
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
    } catch (i) {
      h.warn("license.stop request error", i);
    }
  }
}
var Wp = Object.defineProperty,
  Yp = Object.getOwnPropertyDescriptor,
  Gp = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Yp(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Wp(e, t, s), s);
  };
class rr extends Mt {
  constructor() {
    super([W.playbackLicenseError, W.playbackSessionError]);
    c(this, "developerToken");
    c(this, "adamId");
    c(this, "userToken");
    c(this, "extURI");
    c(this, "item");
    c(this, "initiated", !0);
    c(this, "isLibrary", !1);
    c(this, "keyCertURL");
    c(this, "keyServerURL");
    c(this, "keySystem", J.fairplay);
    c(this, "isLegacyEme", !1);
    c(this, "boundDispatchKeyError");
    c(this, "boundDispatchSessionError");
    c(this, "boundHandleSessionCreation");
    c(this, "boundStartLicenseSession");
    c(this, "mediaKeySessions", {});
    c(this, "_pendingRenewal");
    c(this, "license");
    ((this.boundDispatchKeyError = this.dispatchKeyError.bind(this)),
      (this.boundDispatchSessionError = this.dispatchSessionError.bind(this)),
      (this.boundHandleSessionCreation = this.handleSessionCreation.bind(this)),
      (this.boundStartLicenseSession = this.startLicenseSession.bind(this)),
      (this.license = new qp()));
  }
  get extID() {
    if (this.extURI) return this.extURI.replace("data:;base64,", "");
  }
  get isFairplay() {
    return this.keySystem === J.fairplay;
  }
  get isPlayReady() {
    return this.keySystem === J.playready;
  }
  get isWidevine() {
    return this.keySystem === J.widevine;
  }
  async acquirePlaybackLicense(t, i, s) {
    if (!this.keyServerURL || !this.developerToken || !this.userToken) return;
    const { initiated: n, isLegacyEme: a, keyServerURL: o, keySystem: l } = this,
      u = s.item;
    try {
      return await this.license.start(o, u, { challenge: i, keyuri: t }, l, n, a && u.isUTS);
    } catch (d) {
      this.dispatchEvent(W.playbackLicenseError, d);
    }
  }
  async startLicenseSession(t) {
    h.debug("Starting License Session", t);
    let i;
    const { message: s, target: n, messageType: a } = t;
    if (this.keySystem !== J.fairplay && a !== "license-request") {
      h.debug("not making license request for", a);
      return;
    }
    if (this.isPlayReady) {
      const d = String.fromCharCode.apply(null, new Uint16Array(s.buffer || s));
      i = new DOMParser().parseFromString(d, "application/xml").getElementsByTagName("Challenge")[0]
        .childNodes[0].nodeValue;
    } else i = ot(new Uint8Array(s));
    const o = n.extURI || this.extURI,
      l = this.mediaKeySessions[o];
    if (!l) {
      h.debug("no key session info, aborting license request");
      return;
    }
    const u = this.acquirePlaybackLicense(o, i, l);
    if (l.delayCdmUpdate) l["license-json"] = u;
    else {
      const d = await u;
      await this.handleLicenseJson(d, n, o);
    }
  }
  setKeyURLs(t) {
    ((this.keyCertURL = t[this.isFairplay ? "hls-key-cert-url" : "widevine-cert-url"]),
      (this.keyServerURL = t["hls-key-server-url"]));
  }
  dispatchKeyError(t) {
    var i, s;
    if (
      this.isFairplay &&
      ((s = (i = t == null ? void 0 : t.target) == null ? void 0 : i.error) == null ? void 0 : s.systemCode) ===
        4294955417
    ) {
      h.error("Ignoring error", t);
      return;
    }
    (console.error(`${m.Reason.MEDIA_KEY} error in dispatchKeyError:`, t),
      this.dispatchEvent(W.playbackSessionError, new m(m.Reason.MEDIA_KEY, t)));
  }
  dispatchSessionError(t) {
    this.dispatchEvent(W.playbackSessionError, new m(m.Reason.MEDIA_SESSION, t));
  }
  async loadCertificateBuffer() {
    if (!this.keyCertURL) return Promise.reject(new m(m.Reason.MEDIA_SESSION, "No certificate URL"));
    let t;
    try {
      t = await fetch(`${this.keyCertURL}?t=${Date.now()}`);
    } catch (n) {
      throw (this.dispatchKeyError(n), n);
    }
    const i = await t.arrayBuffer(),
      s = String.fromCharCode.apply(String, new Uint8Array(i));
    return /^\<\?xml/.test(s) ? Promise.reject(new m(m.Reason.MEDIA_CERTIFICATE, "Invalid certificate.")) : i;
  }
  async handleSessionCreation(t) {
    return this.createSession(t).catch((i) => {
      this.dispatchSessionError(i);
    });
  }
  async handleLicenseJson(t, i, s) {
    if ((h.debug(`updating session ${s} with license response`, t), t != null && t.license)) {
      const n = qt(t.license);
      try {
        let a;
        await Promise.race([
          i.update(n),
          new Promise((o, l) => {
            a = setTimeout(() => l(new v("mk-242", v.Reason.CDM_UPDATE_TIMEOUT)), 1e4);
          }),
        ]).finally(() => clearTimeout(a));
      } catch (a) {
        (h.error("Failed to updated media keys", a), this.dispatchKeyError(a));
      }
    }
  }
  addMediaKeySessionInfo(t, i, s, n = !1) {
    const a = this.mediaKeySessions[t];
    a
      ? (h.debug(
          `keySession info exists for ${s.title}, making existing session ${a.session.sessionId} the old session`,
        ),
        (a.oldSession = a.session),
        (a.session = i))
      : (h.debug(`creating key session info for ${s.title}`),
        (this.mediaKeySessions[t] = { session: i, item: s, delayCdmUpdate: n }));
  }
  stopLicenseSession() {
    (h.info("key session sending license stop"), this.license.stop());
  }
}
Gp([S()], rr.prototype, "startLicenseSession", 1);
var zp = Object.defineProperty,
  Qp = Object.getOwnPropertyDescriptor,
  Xp = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Qp(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && zp(e, t, s), s);
  };
class ll extends rr {
  constructor() {
    super(...arguments);
    c(this, "_keySystemAccess");
    c(this, "_mediaKeysPromise");
    c(this, "_mediaKeySessions", {});
    c(this, "_mediaKeySessionRenewals", {});
    c(this, "_mediaKeys");
  }
  async attachMedia(t, i) {
    ((this.keySystem = i.keySystem),
      (this._keySystemAccess = i),
      t.addEventListener("encrypted", this.boundHandleSessionCreation, !1));
  }
  detachMedia(t) {
    t.removeEventListener("encrypted", this.boundHandleSessionCreation);
    const i = this._mediaKeySessions,
      s = this._mediaKeySessionRenewals;
    (Object.values(i).forEach((n) => {
      (n.removeEventListener("message", this.boundStartLicenseSession), rt(n.close()));
    }),
      (this._mediaKeySessions = {}),
      Object.values(s).forEach((n) => clearTimeout(n)),
      (this._mediaKeySessionRenewals = {}));
  }
  async createSession(t) {
    h.debug("fairplay eme:  createSession", t);
    const i = this._keySystemAccess;
    if (!i) return;
    const { initData: s, target: n, initDataType: a } = t;
    this._mediaKeysPromise ||
      (this._mediaKeysPromise = new Promise(async (p, y) => {
        const g = await i.createMediaKeys();
        try {
          (await n.setMediaKeys(g), (this._mediaKeys = g));
          const k = await this.loadCertificateBuffer();
          await g.setServerCertificate(k);
        } catch (k) {
          (this.dispatchKeyError(k), y(k));
        }
        p(g);
      }));
    const o = await this._mediaKeysPromise,
      l = new Uint8Array(s),
      u = String.fromCharCode.apply(void 0, Array.from(l));
    if (this.mediaKeySessions[u]) {
      h.error("fairplay eme: not creating new session for extURI", u);
      return;
    }
    const d = o.createSession();
    (h.debug("fairplay eme: creating new key session for", u),
      this.addMediaKeySessionInfo(u, d, this.item),
      d.addEventListener("message", this.startFairplayLicenseSession),
      (d.extURI = u),
      await d.generateRequest(a, s),
      (this._mediaKeySessions[d.sessionId] = d),
      h.debug("fairplay eme: created session", d));
  }
  async startFairplayLicenseSession(t) {
    const { message: i, target: s } = t,
      n = ot(new Uint8Array(i)),
      a = s.extURI || this.extURI,
      o = this.mediaKeySessions[a];
    if (!o) {
      h.debug("fairplay eme: no key session info, aborting license request", a);
      return;
    }
    const l = await this.acquirePlaybackLicense(a, n, o);
    return this.handleLicenseJson(l, s, a);
  }
  async handleLicenseJson(t, i, s) {
    if (!t) return;
    const n = this.mediaKeySessions[s];
    if (!n) {
      h.debug("fairplay eme: media key session does not exist, not updating");
      return;
    }
    const a = t["renew-after"];
    if (t.license && a) {
      h.debug("fairplay eme: got renew after value", a, s);
      const o = this._mediaKeySessionRenewals,
        l = o[i.sessionId];
      (l && clearTimeout(l), (o[i.sessionId] = setTimeout(() => this._renewMediaKeySession(n, s), a * 1e3)));
    }
    await super.handleLicenseJson(t, i, s);
  }
  _renewMediaKeySession(t, i) {
    (delete this._mediaKeySessionRenewals[t.session.sessionId],
      h.debug("fairplay eme: renewing session", t),
      t.session.update(An("renew")));
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(t) {}
  async clearSessions() {}
}
Xp([S()], ll.prototype, "startFairplayLicenseSession", 1);
const Jp = /^(?:.*)(skd:\/\/.+)$/i;
class Zp extends rr {
  constructor() {
    super(...arguments);
    c(this, "target");
    c(this, "session");
    c(this, "_isDestroyed", !1);
    c(this, "isLegacyEme", !0);
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  attachMedia(t, i) {
    return (
      (this.target = t),
      t.addEventListener("webkitneedkey", this.boundHandleSessionCreation, !1),
      t.addEventListener("webkitkeyerror", this.boundDispatchKeyError),
      t
    );
  }
  detachMedia(t) {
    t &&
      (t.removeEventListener("webkitneedkey", this.boundHandleSessionCreation, !1),
      t.removeEventListener("webkitkeyerror", this.boundDispatchKeyError));
  }
  destroy() {
    (h.debug("FPS destroy"),
      (this._isDestroyed = !0),
      this.detachMedia(this.target),
      this.session &&
        (this.session.removeEventListener("webkitkeyerror", this.boundDispatchKeyError),
        this.session.removeEventListener("webkitkeymessage", this.boundStartLicenseSession)));
  }
  createSession(t) {
    h.debug("FPS createSession", t);
    const { initData: i, target: s } = t,
      { item: n } = this;
    if (!n) return (h.error("Cannot createSession without item"), Promise.resolve());
    const a = this._extractAssetId(i);
    if ((h.debug("extURI", a), !s.webkitKeys && window.WebKitMediaKeys)) {
      const o = new window.WebKitMediaKeys(this.keySystem);
      s.webkitSetMediaKeys(o);
    }
    return this.loadCertificateBuffer().then((o) => {
      const l = this._concatInitDataIdAndCertificate(i, a, o),
        u = s.tagName === "VIDEO" ? Yt.AVC1 : Yt.MP4,
        d = s.webkitKeys.createSession(u, l);
      (this.addMediaKeySessionInfo(a, d, n),
        (this.session = d),
        (d.extURI = a),
        d.addEventListener("webkitkeyerror", this.boundDispatchKeyError),
        d.addEventListener("webkitkeymessage", this.boundStartLicenseSession));
    });
  }
  _extractAssetId(t) {
    let i = String.fromCharCode.apply(null, new Uint16Array(t.buffer || t));
    const s = i.match(Jp);
    return (s && s.length >= 2 && (i = s[1]), h.debug("Extracted assetId from EXT-X-KEY URI", i), i);
  }
  _concatInitDataIdAndCertificate(t, i, s) {
    (typeof i == "string" && (i = Sc(i)), (s = new Uint8Array(s)));
    let n = 0;
    const a = new ArrayBuffer(t.byteLength + 4 + i.byteLength + 4 + s.byteLength),
      o = new DataView(a);
    (new Uint8Array(a, n, t.byteLength).set(t), (n += t.byteLength), o.setUint32(n, i.byteLength, !0), (n += 4));
    const u = new Uint8Array(a, n, i.byteLength);
    return (
      u.set(i),
      (n += u.byteLength),
      o.setUint32(n, s.byteLength, !0),
      (n += 4),
      new Uint8Array(a, n, s.byteLength).set(s),
      new Uint8Array(a, 0, a.byteLength)
    );
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(t) {}
  async clearSessions() {}
}
class ey extends rr {
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
    const { initData: t, target: i } = e;
    if (!i.msKeys) {
      const n = new MSMediaKeys(this.keySystem);
      i.msSetMediaKeys(n);
    }
    const s = i.msKeys.createSession(Yt.MP4, t);
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
const ty =
    '<WRMHEADER xmlns="http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version="4.3.0.0"><DATA><PROTECTINFO><KIDS><KID ALGID="AESCTR" VALUE="[KEYID]"></KID></KIDS></PROTECTINFO></DATA></WRMHEADER>',
  ul = [
    0, 0, 1, 222, 112, 115, 115, 104, 0, 0, 0, 0, 154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95,
    149, 0, 0, 1, 190,
  ],
  ry = [190, 1, 0, 0, 1, 0, 1, 0, 180, 1],
  iy = (r) => {
    const e = (t, i, s) => {
      const n = t[i];
      ((t[i] = t[s]), (t[s] = n));
    };
    (e(r, 0, 3), e(r, 1, 2), e(r, 4, 5), e(r, 6, 7));
  };
function dl(r, ...e) {
  let t = 0;
  for (const n of e) t += n.length;
  const i = new r(t);
  let s = 0;
  for (const n of e) (i.set(n, s), (s += n.length));
  return i;
}
const sy = (r) => {
    (h.debug("generating Playready pssh for keyId"), iy(r));
    const e = ot(r),
      t = ty.replace("[KEYID]", e),
      i = Sc(t),
      s = new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    return dl(Uint8Array, ul, ry, s);
  },
  ny = (r) => {
    h.debug("generating Widevine pssh for keyId");
    const e = new Uint8Array([
      0, 0, 0, 52, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29,
      33, 237, 0, 0, 0, 20, 8, 1, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    for (let t = 0; t < r.length; t++) e[e.length - 16 + t] = r[t];
    return (h.debug("generatePSSH", e), e);
  },
  ay = { [J.widevine]: ny, [J.playready]: sy },
  oy = (r, e) => {
    const t = ay[e];
    if (!t) return (h.warn("No pssh generator for ", e), r);
    const i = Uint8Array.from(r);
    return t(i);
  },
  cy = (r) => dl(Uint8Array, new Uint8Array(ul), r);
class ly extends rr {
  constructor() {
    super(...arguments);
    c(this, "_keySystemAccess");
    c(this, "_mediaKeysPromise");
    c(this, "_mediaKeys");
    c(this, "_target");
    c(this, "_sessionRemovalTimeouts", {});
    c(this, "_mediaKeySessionRenewals", {});
  }
  attachMedia(t, i) {
    ((this.keySystem = i.keySystem), (this._keySystemAccess = i), (this._target = t));
  }
  detachMedia() {
    rt(this.clearSessions());
  }
  async createSession(t) {}
  async _mediaKeysSetup() {
    const t = this._keySystemAccess;
    t &&
      (this._mediaKeysPromise ||
        (this._mediaKeysPromise = new Promise(async (i, s) => {
          var a;
          const n = await t.createMediaKeys();
          try {
            (await ((a = this._target) == null ? void 0 : a.setMediaKeys(n)), (this._mediaKeys = n));
          } catch (o) {
            (this.dispatchKeyError(o), s(o));
          }
          if (this.isWidevine) {
            const o = await this.loadCertificateBuffer();
            await n.setServerCertificate(o);
          }
          i(n);
        })),
      await this._mediaKeysPromise);
  }
  async createSessionAndGenerateRequest(t, i, s) {
    var k;
    const n = !!(s != null && s.isRenewal),
      a = !!(s != null && s.delayCdmUpdate);
    if (!n && this.mediaKeySessions[t]) return;
    h.debug(`createSessionAndGenerateRequest for item ${i.title}, isRenewal ${n}`);
    const o = (k = this._mediaKeys) == null ? void 0 : k.createSession(),
      { keySystem: l } = this;
    if (!o) return;
    this.addMediaKeySessionInfo(t, o, i, a);
    const u = t.includes("base64"),
      d = u ? t.split(",")[1] : t,
      p = An(u ? atob(d) : d),
      y = (this.isWidevine && i.isSong) || p.length === 16;
    let g;
    return (
      h.debug("extracted uri", t),
      this.isPlayReady && !y
        ? (h.debug("handling Playready object"), (o.extURI = t), (g = cy(p)))
        : y
          ? (h.debug("handling keyId only initData"), (o.extURI = `data:;base64,${ot(p)}`), (g = oy(p, l)))
          : (h.debug("handling pssh initData"), (o.extURI = t), (g = p)),
      o.addEventListener("message", this.startLicenseSession),
      o.generateRequest("cenc", g).catch((w) => {
        if (w.message.match(/generateRequest.*\(75\)/)) return o.generateRequest("cenc", g);
        throw w;
      })
    );
  }
  async handleLicenseJson(t, i, s) {
    var l;
    if (!t) return;
    const n = this.mediaKeySessions[s];
    if (!n) {
      h.debug("media key session does not exist, not updating");
      return;
    }
    const a = t["renew-after"];
    if (t.license && a) {
      h.debug("Got renew after value", a, s);
      const u = this._mediaKeySessionRenewals,
        d = u[i.sessionId];
      (d && clearTimeout(d), (u[i.sessionId] = setTimeout(() => this._renewMediaKeySession(n, s), a * 1e3)));
    }
    await super.handleLicenseJson(t, i, s);
    const o = (l = this.mediaKeySessions[s]) == null ? void 0 : l.oldSession;
    o &&
      (h.debug("removing old key session after updating", s),
      await this._removeAndCloseSession(o),
      delete this.mediaKeySessions[s].oldSession,
      delete this._mediaKeySessionRenewals[o.sessionId]);
  }
  _renewMediaKeySession(t, i) {
    (delete this._mediaKeySessionRenewals[t.session.sessionId],
      rt(this.createSessionAndGenerateRequest(i, t.item, { isRenewal: !0 })));
  }
  async applyDelayedCdmUpdates() {
    h.debug("applying delayed CDM updates");
    const t = Object.entries(this.mediaKeySessions);
    for (const i of t) {
      const [s, n] = i;
      if (n.delayCdmUpdate) {
        const a = await n["license-json"];
        (h.debug("delayed update of license", a),
          (n.delayCdmUpdate = !1),
          await this.handleLicenseJson(a, n.session, s));
      }
    }
  }
  async loadKeys(t, i, s) {
    await this._mediaKeysSetup();
    const n = this.filterKeyValues(t);
    for (const a of n) {
      const { dataUri: o } = a;
      await this.createSessionAndGenerateRequest(o, i, s);
    }
    if (i != null && i.isLiveAudioStation) {
      const a = Object.keys(this.mediaKeySessions),
        o = n.reduce((l, u) => {
          const d = u.dataUri;
          return ((l[d] = !0), l);
        }, {});
      for (const l of a) o[l] || (await this._scheduleRemoveSession(l));
    }
  }
  filterKeyValues(t) {
    let i;
    if (t.length === 1) i = t;
    else {
      const s = al[this.keySystem];
      i = t.filter((n) => n.keyFormat === s);
    }
    return i;
  }
  async clearSessions(t) {
    const i = this.mediaKeySessions;
    if (t != null && t.length) {
      const s = this.filterKeyValues(t);
      for (const n of s) {
        const a = n.dataUri;
        (clearTimeout(this._sessionRemovalTimeouts[a]), await this._removeSessionImmediately(a));
      }
    } else {
      (Object.values(this._sessionRemovalTimeouts).forEach((s) => clearTimeout(s)),
        h.debug("clearing key sessions", i));
      for (const s of Object.keys(i)) await this._removeSessionImmediately(s);
    }
  }
  async _scheduleRemoveSession(t) {
    if (!this.mediaKeySessions[t]) {
      h.warn("no session for dataUri, not scheduling remove", t);
      return;
    }
    if (this._sessionRemovalTimeouts[t]) return;
    const s = setTimeout(() => {
      rt(this._removeSessionImmediately(t));
    }, 60 * 1e3);
    (h.debug("deferring removal of keysession for dataUri", t), (this._sessionRemovalTimeouts[t] = s));
  }
  async _removeSessionImmediately(t) {
    const i = this.mediaKeySessions[t];
    if (!i) {
      h.warn("no session for dataUri, not removing", t);
      return;
    }
    h.debug("removing keysession for", t);
    const { session: s, oldSession: n } = i;
    (this._clearSessionRenewal(s),
      delete this.mediaKeySessions[t],
      await this._removeAndCloseSession(s),
      n && (await this._removeAndCloseSession(n)));
  }
  async _removeAndCloseSession(t) {
    (t.removeEventListener("message", this.startLicenseSession), h.debug("tearing down session", t.sessionId));
    try {
      await t.remove();
    } catch (i) {
      h.warn("Error invoking session.remove()", i);
    } finally {
      try {
        await t.close();
      } catch (i) {
        h.warn("Error invoking session.close()", i);
      }
    }
  }
  _clearSessionRenewal(t) {
    const i = this._mediaKeySessionRenewals[t.sessionId];
    i &&
      (h.debug("clearing scheduled license renewal for session", t.sessionId),
      clearTimeout(i),
      delete this._mediaKeySessionRenewals[t.sessionId]);
  }
}
function uy(r, e) {
  var t;
  e.keyURLs &&
    ((r.developerToken = Pr.developerToken),
    (r.userToken = Pr.musicUserToken),
    (r.item = e),
    (r.adamId = (t = e.catalogId) != null ? t : "-1"),
    (r.isLibrary = e.isLibrary),
    r.setKeyURLs(e.keyURLs));
}
const dy = Se.register("mk-safari-modern-eme");
class hl extends Mt {
  constructor(t) {
    super([W.playbackLicenseError, W.playbackSessionError]);
    c(this, "_session");
    c(this, "mediaElement");
    c(this, "contentType");
    c(this, "services");
    ((this.mediaElement = t.mediaElement), (this.contentType = t.contentType), (this.services = t.services));
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
  set extURI(t) {
    this._session.extURI = t;
  }
  set initiated(t) {
    this._session.initiated = t;
  }
  get session() {
    return this._session;
  }
  async clearSessions(t) {
    var i;
    return (i = this.session) == null ? void 0 : i.clearSessions(t);
  }
  async initializeKeySystem() {
    var s, n, a;
    const { mediaElement: t, contentType: i } = this;
    if ((s = window.WebKitMediaKeys) != null && s.isTypeSupported(`${J.fairplay}.1_0`, Yt.MP4)) {
      let o;
      (dy.enabled && this.runtime.isEMESupported && (o = await hy(this.contentType)),
        o !== void 0
          ? (h.warn("media-extension: Using Fairplay modern EME"),
            (this._session = new ll()),
            this._session.attachMedia(t, o))
          : (h.warn("media-extension: Using Fairplay legacy EME"),
            (this._session = new Zp()),
            this._session.attachMedia(t, { keySystem: J.fairplay })));
    } else if ((n = window.MSMediaKeys) != null && n.isTypeSupported(J.playready, Yt.MP4))
      ((this._session = new ey()), this._session.attachMedia(t, { keySystem: J.playready }));
    else if (this.runtime.preferredKeySystem !== void 0 && t.canPlayType(i)) {
      const o = J[this.runtime.preferredKeySystem];
      if (o !== void 0) {
        this._session = new ly();
        const l = await fl(o, {
          initDataTypes: ["cenc", "keyids"],
          audioCapabilities: [{ contentType: i }],
          distinctiveIdentifier: "optional",
          persistentState: "required",
        });
        l && ((a = this._session) == null || a.attachMedia(t, l));
      }
    } else h.warn("No KeySystem available for playback!");
    this._session !== void 0 &&
      [W.playbackLicenseError, W.playbackSessionError].forEach((o) => {
        this._session.addEventListener(o, (l) => {
          this.dispatchEvent(o, l);
        });
      });
  }
  setMediaItem(t) {
    uy(this._session, t);
  }
  destroy(t) {
    var i;
    (i = this._session) == null || i.detachMedia(t);
  }
}
async function fl(r, e) {
  try {
    return navigator.requestMediaKeySystemAccess(r, [e]);
  } catch (t) {
    h.warn(`Unable to get KeySystem access to ${r}`);
  }
}
async function hy(r) {
  return fl(J.fairplay, {
    initDataTypes: ["skd"],
    audioCapabilities: [{ contentType: r, robustness: "" }],
    videoCapabilities: [{ contentType: r, robustness: "" }],
    distinctiveIdentifier: "not-allowed",
    persistentState: "not-allowed",
    sessionTypes: ["temporary"],
  });
}
const fy = Se.register("mk-force-audio-mse"),
  pl = () => fy.enabled;
class fo {
  constructor({ url: e, startByte: t, length: i, isInitSegment: s = !1 }) {
    c(this, "url");
    c(this, "range");
    c(this, "startByte");
    c(this, "endByte");
    c(this, "length");
    c(this, "startTime");
    c(this, "endTime");
    c(this, "isInitSegment");
    ((this.url = e),
      (this.isInitSegment = s),
      (this.startByte = parseInt(t, 10)),
      (this.length = parseInt(i, 10)),
      (this.endByte = this.startByte + this.length - 1),
      (this.range = `bytes=${this.startByte}-${this.endByte}`));
  }
  async load() {
    const { url: e, range: t } = this;
    if (!e) return new Uint8Array();
    const i = new Headers();
    i.append("Range", t);
    const n = await (await fetch(e, { headers: i })).arrayBuffer();
    return new Uint8Array(n);
  }
}
class py {
  constructor(e, t = !1) {
    ((this.url = e), (this.isInitSegment = t));
  }
  async load() {
    const { url: e } = this;
    if (!e) return new Uint8Array();
    const i = await (await fetch(e)).arrayBuffer();
    return new Uint8Array(i);
  }
}
const po = /^#EXT-X-BYTERANGE:([^\n]+)\n/gim,
  yo = /^#EXT-X-MAP:([^\n]+)\n/im,
  yy = /#EXTINF:\d*\.\d*\,[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  my = /#EXTINF:\d*\.\d*,\s*#EXT-X-BITRATE:\d{1,3}[\n](.+)|^#EXT-X-MAP:URI="([^"]*)"/gim,
  gy = h.createChild("hls");
function vy(r) {
  if (!r || !yo.test(r)) return;
  const [, e] = r.match(yo);
  return e.split(",").reduce((t, i) => {
    const [s, n] = i.split("=");
    return ((t[s.toLowerCase()] = n.replace(/\"/gi, "")), t);
  }, {});
}
class by {
  constructor() {
    c(this, "_segments", []);
    c(this, "_addedSegments", {});
  }
  get segments() {
    return this._segments;
  }
  addSegment(e, t) {
    this._addedSegments[t] || (gy.debug("Adding segment", t), this._segments.push(e), (this._addedSegments[t] = !0));
  }
  extractLiveRadioSegments(e, t) {
    this._extractContinuousSegments(yy, e, t);
  }
  extractHlsOffersSegments(e, t) {
    this._extractContinuousSegments(my, e, t);
  }
  _extractContinuousSegments(e, t, i) {
    if (!t || !e.test(t)) return;
    e.lastIndex = 0;
    let s;
    for (; (s = e.exec(t));) {
      const n = s[0].startsWith("#EXT-X-MAP") ? s[2] : s[1];
      let a = n;
      /^http(s)?:\/\//.test(a) || (a = _c([...bd(i).slice(0, -1), n]));
      const o = s[0].startsWith("#EXT-X-MAP");
      this.addSegment(new py(a, o), n);
    }
  }
  extractByteRangeSegments(e, t) {
    var u, d;
    if (!e || !po.test(e)) return;
    const i = vy(e),
      s = (u = t.split("/").pop()) != null ? u : "",
      n = t.replace(s, i.uri),
      [a, o] = i.byterange.split("@"),
      l = new fo({ url: n, startByte: o, length: a });
    (this.addSegment(l, l.range),
      ((d = e.match(po)) != null ? d : []).forEach((p) => {
        const [, y, g] = p.match(/^#EXT-X-BYTERANGE:(\d+)@(\d+)\n/),
          k = new fo({ url: n, startByte: g, length: y });
        this.addSegment(k, k.range);
      }));
  }
}
var Ar = ((r) => ((r.keysParsed = "keysParsed"), r))(Ar || {}),
  _y = Object.defineProperty,
  Ty = Object.getOwnPropertyDescriptor,
  Ey = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Ty(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && _y(e, t, s), s);
  };
const Sy = /^#EXT-X-TARGETDURATION:(\d+)/im,
  mo = /^#EXT-X-KEY:[^\n]+URI="([^"]+)"/im,
  Iy = /^#EXT-X-KEY:.*(.*$)/gim;
class yl extends Mt {
  constructor(t, i, s) {
    super([W.manifestParsed, Ar.keysParsed]);
    c(this, "_data");
    c(this, "_downlink", 0);
    c(this, "_extURI");
    c(this, "_url");
    c(this, "_item");
    c(this, "_segmentList", new by());
    c(this, "_manifestRefreshInterval");
    c(this, "services");
    ((this._data = t), (this._item = i), (this._url = i.assetURL), (this.services = s.services));
  }
  parse() {
    const t = this._item,
      i = this._data;
    if (this.services.runtime.preferredKeySystem !== "fairplay" || pl())
      if ((this._detectKeyTags(), t.hasOffersHlsUrl)) this._segmentList.extractHlsOffersSegments(i, t.assetURL);
      else if (t.isLiveRadioStation) {
        this._segmentList.extractLiveRadioSegments(i, t.assetURL);
        const [, n] = this._data.match(Sy);
        h.debug(`manifest: setting up manifest refresh interval at ${n} seconds`);
        const a = parseInt(n, 10) * 1e3;
        this._manifestRefreshInterval = setInterval(this.liveRadioRefresh, a);
      } else this._segmentList.extractByteRangeSegments(i, t.assetURL);
  }
  static async load(t, i) {
    var y;
    h.debug("loading manifest for item", t.title);
    const s = t.assetURL,
      n = Rn(),
      a = n ? ((y = i.cache) != null ? y : !0) : !1,
      o = i.services;
    if (a) {
      const g = n == null ? void 0 : n.getItem(s);
      if (g) return new this(g, t, { services: o });
    }
    const l = new Date().getTime(),
      u = await o.request.fetchText(s),
      d = new Date().getTime(),
      p = new this(u, t, { services: o });
    return ((p.downlink = (u.length * 8) / ((d - l) / 1e3) / 1024), a && (n == null || n.setItem(s, u)), p);
  }
  get downlink() {
    return this._downlink;
  }
  set downlink(t) {
    this._downlink = t;
  }
  get mediaItem() {
    return this._item;
  }
  async liveRadioRefresh() {
    const t = await this.services.request.fetchText(this._url);
    ((this._data = t),
      this._detectKeyTags(),
      this._segmentList.extractLiveRadioSegments(t, this._url),
      this.dispatchEvent(W.manifestParsed));
  }
  segmentsForTimeRange(t) {
    const i = Math.floor(t.start / 10) + 1,
      s = Math.floor(t.end / 10) + 1,
      { segments: n } = this;
    return [n[0], ...n.slice(i, s + 1)];
  }
  get segments() {
    return this._segmentList.segments;
  }
  get extURI() {
    if (!this._extURI) {
      const t = this._data.match(mo);
      (h.debug("manifest: EXT_X_KEY_URI matches", t), (this._extURI = (t && t[1]) || void 0));
    }
    return this._extURI;
  }
  get keyValues() {
    let t = this._modernKeys;
    return (t.length || (t = this._legacyKeys), t);
  }
  _detectKeyTags() {
    const t = this.keyValues;
    t.length && this.dispatchEvent(Ar.keysParsed, { item: this.mediaItem, keys: t });
  }
  get _legacyKeys() {
    const t = this._data.match(mo);
    h.debug("manifest: EXT_X_KEY_URI matches", t);
    const i = (t && t[1]) || void 0;
    this._extURI = i;
    const s = [];
    return (i && s.push({ keyFormat: al[J.widevine], dataUri: i }), s);
  }
  get _modernKeys() {
    var s, n, a, o;
    let t;
    const i = [];
    for (; (t = Iy.exec(this._data));) {
      const l = t[0],
        u = (n = (s = /KEYFORMAT="(.*?)"/.exec(l)) == null ? void 0 : s[1]) != null ? n : "",
        d = (o = (a = /URI="(.*?)"/.exec(l)) == null ? void 0 : a[1]) != null ? o : "";
      u && d && i.push({ keyFormat: u, dataUri: d });
    }
    return i;
  }
  stop() {
    this._manifestRefreshInterval && clearInterval(this._manifestRefreshInterval);
  }
}
Ey([S()], yl.prototype, "liveRadioRefresh", 1);
const ky = "seamlessAudioTransition",
  Py = "bufferTimedMetadataDidChange",
  Ay = "loadSegmentError",
  Ue = { seamlessAudioTransition: ky, bufferTimedMetadataDidChange: Py, loadSegmentError: Ay };
function ml(r, e = "utf-8") {
  return e === "iso-8859-1" ? String.fromCharCode(...r) : new TextDecoder(e).decode(r);
}
function go(r, e = 0, t) {
  const i = [];
  t = t != null ? t : r.length;
  for (let s = e; s < t; s++) {
    const n = r[s];
    if (String.fromCharCode(n) === "\0") break;
    i.push(String.fromCharCode(n));
  }
  return [i.join(""), i.length];
}
class qn {
  constructor(e, t, i, s) {
    ((this.id = e), (this.data = t), (this.start = i), (this.end = s));
  }
  get size() {
    return this.end - this.start;
  }
  get rawBytes() {
    return this.data.slice(this.start, this.end);
  }
}
const wy = [237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237];
class gl extends qn {
  constructor(t, i, s) {
    super("pssh", t, i, s);
    c(this, "view");
    this.view = new DataView(t.buffer, i);
  }
  get systemId() {
    const { data: t, start: i } = this,
      s = i + 12;
    return t.slice(s, s + 16);
  }
  get dataSize() {
    return this.view.getUint32(28);
  }
  get psshData() {
    const { data: t, start: i, dataSize: s } = this,
      n = i + 32;
    return t.slice(n, n + s);
  }
  get keyBytes() {
    const { psshData: t } = this;
    return t.slice(2, 18);
  }
  get isWidevine() {
    return Pn(this.systemId, wy);
  }
}
class Ry extends qn {
  constructor(e, t, i) {
    (super("tenc", e, t, i), (this.data = e), (this.start = t), (this.end = i));
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
    const { data: t, start: i } = this;
    for (let s = 0; s < e.length; s++) t[s + i + 16] = e[s];
  }
}
function $t(r, e, t = []) {
  for (let i = e; i < r.length;) {
    if (t.length === 0) return;
    const n = new DataView(r.buffer, i).getUint32(0),
      a = ml(r.subarray(i + 4, i + 8)),
      o = i + n;
    if (t.length === 1 && a === t[0]) return new qn(a, r, i, o);
    if (a === t[0]) return $t(r, i + 8, t.slice(1));
    i += n;
  }
}
function Cy(r) {
  const e = $t(r, 0, ["moov", "trak", "mdia", "minf", "stbl", "stsd"]),
    t = [];
  if (!e) return t;
  const i = e.start + 16;
  for (let s = i; s < e.end;) {
    let n = $t(r, s, ["enca"]),
      a = 36;
    if ((n || ((n = $t(r, s, ["encv"])), (a = 86)), !n)) return t;
    const o = $t(r, n.start + a, ["sinf", "schi", "tenc"]);
    o ? (t.push(new Ry(o.data, o.start, o.end)), (s = o.end)) : (s = e.end);
  }
  return t;
}
function Oy(r) {
  const e = $t(r, 0, ["moov"]),
    t = [];
  if (!e) return t;
  const i = new DataView(r.buffer, 0),
    s = e.start + 8;
  for (let n = s; n < e.size;) {
    const a = i.getUint32(n);
    (ml(r.subarray(n + 4, n + 8)) === "pssh" && t.push(new gl(r, n, n + a)), (n += a));
  }
  return t;
}
function Dy(r) {
  const e = [],
    t = new DataView(r.buffer);
  for (let i = 0; i < r.length;) {
    const s = t.getUint32(i);
    (e.push(new gl(r, i, i + s)), (i += s));
  }
  return e;
}
const vo = (r) => {
  const [e] = Cy(r);
  if (!e) return;
  const i = Oy(r).find((s) => s.isWidevine);
  i && (e.defaultKeyId = i.keyBytes);
};
class vl {
  constructor(e) {
    c(this, "version", [3, 2, 0]);
    c(this, "frames", []);
    c(this, "flags", { unsynchronized: !1, extendedHeader: !1, footer: !1, experimental: !1 });
    var t;
    ((this.version = e.version),
      (this.flags = { unsynchronized: !1, extendedHeader: !1, footer: !1, experimental: !1, ...e.flags }),
      (this.frames = (t = e.frames) != null ? t : []));
  }
  get major() {
    return this.version[0];
  }
  get minor() {
    return this.version[1];
  }
  get revision() {
    var e;
    return (e = this.version[2]) != null ? e : 0;
  }
  static parse(e) {
    return Ny(e);
  }
}
function Ny(r) {
  if (r.length === 0 || Ly(r) !== "ID3") return;
  const e = {};
  let t = 3;
  ((e.version = [3, r[t++], r[t++]]), (e.flags = My(r)), (t += 1));
  const i = t + 4 + an(r.subarray(t, t + 4));
  return (
    (t += 4),
    e.flags.extendedHeader && (t += an(r.subarray(t, t + 4))),
    e.version[1] > 2 && (e.frames = bl(r, e.version, [t, i])),
    new vl(e)
  );
}
function Ly(r, e = 0) {
  return ct(r.subarray(e, 3));
}
function My(r, e = 5) {
  const t = r[e];
  return { unsynchronized: Jr(t, 7), extendedHeader: Jr(t, 6), experimental: Jr(t, 5), footer: Jr(t, 4) };
}
const vs = { WXXX: By, TXXX: Vy, TPE1: Uy, TIT2: Fy, TALB: xy, TEXT: Ky, PRIV: $y, CHAP: Hy };
function bl(r, e, t) {
  var o, l, u;
  t = t != null ? t : [0, r.byteLength];
  const i = (o = t[1]) != null ? o : r.byteLength;
  let s = (l = t[0]) != null ? l : 0;
  const n = new DataView(r.buffer, 0, i),
    a = [];
  for (; s + 8 <= i;) {
    const d = ct(r.subarray(s, s + 4));
    s += 4;
    const p = e[1] === 4 ? an(r.subarray(s, s + 4)) : n.getUint32(s);
    if (((s += 4), r[s++] << (8 + r[s++]), s + p > i)) break;
    const y = r.slice(s, s + p),
      g = (u = vs[d]) == null ? void 0 : u.call(vs, d, y, e);
    (g && a.push(g), (s += p));
  }
  return a;
}
function Uy(r, e, t) {
  return { key: "TPE1", data: $i(ct(e.subarray(1), ir(e[0]))) };
}
function xy(r, e, t) {
  return { key: "TALB", data: $i(ct(e.subarray(1), ir(e[0]))) };
}
function Fy(r, e, t) {
  return { key: "TIT2", data: $i(ct(e.subarray(1), ir(e[0]))) };
}
function Ky(r, e, t) {
  return { key: "TEXT", data: $i(ct(e.subarray(1), ir(e[0]))) };
}
function Vy(r, e, t) {
  const i = ir(e[0]),
    [s, n] = Hi(e.subarray(1), i),
    a = n > 0 ? n + 2 : 0;
  return { key: "TXXX", data: ct(e.subarray(a), i), description: s };
}
function By(r, e, t) {
  const i = ir(e[0]),
    [s, n] = Hi(e.subarray(1), i),
    a = n > 0 ? n + 2 : 0;
  return { key: "WXXX", data: ct(e.subarray(a), i), description: s };
}
function $y(r, e, t) {
  const [i, s] = Hi(e);
  if (s !== 0) return { key: "PRIV", owner: i, data: e.slice(s + 1) };
}
function Hy(r, e, t) {
  const i = new DataView(e.buffer),
    s = { key: "CHAP", elementId: "", startTime: 0, endTime: 0, frames: [] },
    [n, a] = Hi(e);
  s.elementId = n;
  let o = a + 1;
  return (
    (s.startTime = i.getUint32(o)),
    (o += 4),
    (s.endTime = i.getUint32(o)),
    (o += 4),
    (s.startOffset = i.getUint32(o)),
    (o += 4),
    (s.endOffset = i.getUint32(o)),
    (o += 4),
    (s.frames = bl(e, t, [o, e.length])),
    s
  );
}
function ct(r, e = "utf-8") {
  return new TextDecoder(e).decode(r);
}
function Jr(r, e) {
  return (r & (1 << e)) !== 0;
}
const jy = { 0: "iso-8859-1", 1: "utf-16", 2: "utf-16be", 3: "utf-8" };
function ir(r) {
  var e;
  return (e = jy[r]) != null ? e : "iso-8859-1";
}
function $i(r) {
  return r.replace(/^\0*|\0*/g, "");
}
function Hi(r, e = "utf-8", t = 0) {
  const i = [];
  for (let s = t; s < r.byteLength; s++) {
    const n = r[s];
    if (n === 0) break;
    i.push(n);
  }
  return [ct(new Uint8Array(i), e), i.length];
}
function an(r) {
  return (r[0] & 127) * 2097152 + (r[1] & 127) * 16384 + (r[2] & 127) * 128 + (r[3] & 127);
}
function on(r, e, t) {
  return e + 4 > r.length ? !1 : r[e] === t[0] && r[e + 1] === t[1] && r[e + 2] === t[2] && r[e + 3] === t[3];
}
function qy(r) {
  return (r == null ? void 0 : r.length) >= 8 ? on(r, 4, [102, 116, 121, 112]) : !1;
}
function Wy(r) {
  const e = r.length,
    t = [];
  if (qy(r)) return t;
  for (let i = 0; i < e; i++) {
    if (on(r, i, [109, 111, 111, 102])) return t;
    if (on(r, i, [101, 109, 115, 103])) {
      const s = i - 4,
        a = new DataView(r.buffer, s).getUint32(0),
        o = r.subarray(s, s + a);
      ((i = i + a - 1), t.push(o));
    }
  }
  return t;
}
class _l {
  constructor(e) {
    c(this, "performer");
    c(this, "title");
    c(this, "album");
    c(this, "links");
    c(this, "storefrontAdamIds");
    c(this, "blob");
    var t;
    ((this.performer = e == null ? void 0 : e.performer),
      (this.title = e == null ? void 0 : e.title),
      (this.album = e == null ? void 0 : e.album),
      (this.links = e == null ? void 0 : e.links),
      (this.storefrontAdamIds = (t = e == null ? void 0 : e.storefrontAdamIds) != null ? t : {}),
      (this.blob = e == null ? void 0 : e.blob));
  }
  storefrontAdamId(e) {
    var t;
    return (t = this.storefrontAdamIds) == null ? void 0 : t[e];
  }
  equals(e) {
    return Yy(this, e);
  }
}
function Yy(r, e) {
  var t, i, s, n, a, o;
  if (r === void 0 && e === void 0) return !0;
  if (
    typeof r != typeof e ||
    ((r = r), (e = e), r.album !== e.album || r.title !== e.title || r.performer !== e.performer) ||
    ((t = r.links) == null ? void 0 : t.length) !== ((i = e.links) == null ? void 0 : i.length)
  )
    return !1;
  for (let l = 0; l < ((n = (s = r.links) == null ? void 0 : s.length) != null ? n : 0); l++)
    if (!bo((a = r.links) == null ? void 0 : a[l], (o = e.links) == null ? void 0 : o[l])) return !1;
  return !(!bo(r.storefrontAdamIds, e.storefrontAdamIds) || !ah(r.blob, e.blob));
}
function bo(r, e) {
  if (r === void 0 && e === void 0) return !0;
  if (typeof r != typeof e) return !1;
  ((r = r), (e = e));
  const t = Object.keys(r),
    i = Object.keys(e);
  if (t.length !== i.length) return !1;
  for (const s of t) if (r[s] !== e[s]) return !1;
  return !0;
}
function Gy(r) {
  var t;
  const e = {};
  for (const i of r)
    if (i.key !== void 0)
      switch (i.key) {
        case "TALB":
          e.album = i.data;
          break;
        case "TIT2":
          e.title = i.data;
          break;
        case "TPE1":
          e.performer = i.data;
          break;
        case "WXXX":
          i.description !== void 0 &&
            (e.links === void 0 && (e.links = []),
            e.links.some((s) => s.url === i.data) ||
              e.links.push({ description: (t = i.description) != null ? t : "", url: i.data }));
          break;
        case "PRIV":
          (i.owner === "com.apple.radio.adamid" && (e.storefrontAdamIds = Tl(i.data)),
            i.owner === "com.apple.radio.ping.jingle" && (e.blob = El(i.data)));
          break;
      }
  return new _l(e);
}
function zy(r) {
  var t, i;
  const e = {};
  for (const s of r) {
    if (!Rp(s) || (s == null ? void 0 : s.value) === void 0) continue;
    const n = s.value;
    switch (n.key) {
      case "TALB":
        e.album = n.data;
        break;
      case "TIT2":
        e.title = n.data;
        break;
      case "TPE1":
        e.performer = n.data;
        break;
      case "WXXX":
        ((e.links = (t = e.links) != null ? t : []),
          e.links.some(({ url: a }) => a === n.data) ||
            e.links.push({ description: (i = n.description) != null ? i : "", url: n.data }));
        break;
      case "PRIV": {
        const a = n.owner || n.info;
        (a === "com.apple.radio.ping.jingle" && (e.blob = El(n.data)),
          a === "com.apple.radio.adamid" && (e.storefrontAdamIds = Tl(n.data)));
        break;
      }
    }
  }
  return new _l(e);
}
function Tl(r) {
  let e;
  r.constructor.name === "Uint8Array" ? (e = new TextDecoder("utf-8").decode(r)) : (e = r);
  const t = e.trim().split(",");
  if (t.length === 0) return;
  const i = (n) => n === void 0 || n === "",
    s = {};
  for (const n of t) {
    const [a, o] = n.split(":", 2).map((l) => l.trim());
    !i(a) && !i(o) && o !== "0" && s[a] === void 0 && (s[a] = o);
  }
  return s;
}
function El(r) {
  return typeof r == "string" ? Uint8Array.from(atob(r), (e) => e.charCodeAt(0)) : r;
}
class Qy {
  constructor(e) {
    c(this, "schemeIdUri");
    c(this, "eventDuration");
    c(this, "presentationTime");
    c(this, "payload");
    c(this, "timeScale");
    c(this, "id3");
    c(this, "id");
    c(this, "_timedMetadata");
    this.data = e;
    const t = new DataView(e.buffer);
    let i = 8;
    if (e[i] !== 1) return;
    ((i += 4), (this.timeScale = t.getUint32(i)), (i += 4));
    const n = t.getUint32(i);
    i += 4;
    const a = t.getUint32(i);
    if (((i += 4), (this.presentationTime = 2 ** 32 * n + a), !Number.isSafeInteger(this.presentationTime)))
      throw ((this.presentationTime = Number.MAX_SAFE_INTEGER), new Error("Failed to create 64 bit integer"));
    ((this.eventDuration = t.getUint32(i)), (i += 4), (this.id = t.getUint32(i)), (i += 4));
    const [o, l] = go(e, i);
    ((i += l + 1), (this.schemeIdUri = o));
    const [u, d] = go(e, i);
    ((i += d + 1), (this.payload = e.subarray(i, e.byteLength)), (this.id3 = vl.parse(this.payload)));
  }
  get length() {
    return this.data.length;
  }
  get elementPresentationTime() {
    const { presentationTime: e, timeScale: t } = this;
    return e && t ? Math.round(e / t) : NaN;
  }
  get timedMetadata() {
    var t;
    if (this._timedMetadata) return this._timedMetadata;
    const e = (t = this.id3) == null ? void 0 : t.frames;
    if (e) return ((this._timedMetadata = Gy(e)), this._timedMetadata);
  }
}
class Xy {
  constructor(e, t) {
    c(this, "_currentEmsgInterval");
    c(this, "_emsgLookup", {});
    c(this, "_currentEmsg");
    ((this._currentTime = e), (this._onDidChange = t), (this._getCurrentEmsg = this._getCurrentEmsg.bind(this)));
  }
  processEmsgs(e) {
    const t = Wy(e);
    t.length &&
      (this._currentEmsgInterval || (this._currentEmsgInterval = setInterval(this._getCurrentEmsg, 1e3)),
      t.forEach((i) => {
        const s = new Qy(i);
        this._emsgLookup[s.elementPresentationTime] = s;
      }));
  }
  stop() {
    const { _currentEmsgInterval: e } = this;
    e && clearInterval(e);
  }
  _getCurrentEmsg() {
    const { _currentTime: e, _emsgLookup: t } = this,
      i = Math.round(e()),
      s = [],
      n = Object.keys(t);
    for (let o = 0; o < n.length; o++) {
      const l = parseInt(n[o], 10);
      if (l < i) s.push(l);
      else break;
    }
    const a = s.pop();
    if (a) {
      const o = t[a];
      if (!o) return;
      const { _currentEmsg: l, _onDidChange: u } = this,
        d = l == null ? void 0 : l.payload,
        p = o.payload;
      ((!d || !Pn(d, p)) && ((this._currentEmsg = o), u(o)), this._cleanupEmsgs(a));
    }
  }
  _cleanupEmsgs(e) {
    const { _emsgLookup: t } = this;
    Object.keys(t).forEach((s) => {
      parseInt(s, 10) < e && delete t[s];
    });
  }
}
class Jy {
  constructor(e, t, i) {
    c(this, "_timedMetadataManager");
    ((this._item = e),
      (this._timedMetadataManager = new Xy(
        () => t.currentTime,
        (s) => {
          i.publish(Ue.bufferTimedMetadataDidChange, {
            item: this._item,
            metadata: s.timedMetadata,
            position: t.currentTime,
            playingDate: void 0,
          });
        },
      )));
  }
  process(e, t) {
    const { _item: i } = this;
    try {
      i.isLiveRadioStation
        ? this._processLiveRadioSegment(e, t)
        : i.hasOffersHlsUrl && this._processHlsOffersSegment(e, t);
    } catch (s) {
      h.error("Error processing segment", s);
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
var Zy = Object.defineProperty,
  em = Object.getOwnPropertyDescriptor,
  Wn = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? em(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Zy(e, t, s), s);
  };
const I = h.createChild("mse"),
  tm = Se.get("mk-mse-buffer"),
  { manifestParsed: _o } = W;
class ji {
  constructor({ dispatcher: e, element: t, manifest: i, currentTime: s, duration: n, clip: a }) {
    c(this, "dispatcher");
    c(this, "mediaSource");
    c(this, "sourceBuffer");
    c(this, "element");
    c(this, "_currentTime");
    c(this, "currentlyLoadingSegmentIndex");
    c(this, "duration");
    c(this, "firstSegmentLoadPromise", Promise.resolve());
    c(this, "hasKickstarted", !1);
    c(this, "isOverBufferLimit");
    c(this, "seekResolver");
    c(this, "seekWhenUpdated");
    c(this, "segmentIndexToFetch", -1);
    c(this, "segmentProcessor");
    c(this, "timeToTrim", 10);
    c(this, "isAtEndOfStream", !1);
    c(this, "isFullyBuffered", !1);
    c(this, "_playableUrl");
    c(this, "clip");
    c(this, "deferredRemoves", []);
    c(this, "timestampOffsetAdjustment");
    c(this, "playbackTimeline");
    c(this, "currentTimestampOffset", 0);
    c(this, "nextSeamlessTransition");
    ((this.dispatcher = e),
      (this.clip = a),
      (this.element = t),
      (this.mediaSource = new MediaSource()),
      this.mediaSource.addEventListener("sourceopen", this.onSourceOpen),
      (this.segmentProcessor = new Jy(i.mediaItem, t, e)),
      (this.playbackTimeline = { current: { manifest: i } }),
      i.addEventListener(_o, this.onManifestParsed),
      (this._currentTime = s || 0),
      (this.duration = n),
      (window.mseBuffer = this));
  }
  onSourceOpen() {
    I.debug("mediaSource open handler");
    const { mediaSource: e } = this;
    if (e.activeSourceBuffers.length > 0) {
      I.debug("not adding new source buffer");
      return;
    }
    I.debug("adding new source buffer");
    const t = e.addSourceBuffer(Qc);
    ((this.sourceBuffer = t), t.addEventListener("updateend", this.updateEndHandler));
    const { clip: i, hasAppendWindowSupport: s } = this;
    (i &&
      (s
        ? (I.debug("appendWindowStart/End", i.start, i.end),
          (t.appendWindowStart = i.start),
          (t.appendWindowEnd = i.end))
        : (I.debug("seeking for clip", i.start), rt(this.seek(i.start)))),
      this.updateSegmentToFetch(0, !0));
  }
  setNextManifest(e) {
    (I.debug("setting next manifest for ", e.mediaItem.title),
      this.nextSeamlessTransition
        ? (I.debug(`abandoning transition scheduled for ${this.nextSeamlessTransition}`),
          this.revertSeamlessTransition(!0),
          (this.playbackTimeline.next = { manifest: e }))
        : ((this.playbackTimeline.next = { manifest: e }),
          this.isFullyBuffered &&
            (I.debug("current song is fully buffered, beginning transition to next"),
            this.transitionToNextManifest())));
  }
  isItemPlaying(e) {
    var s, n;
    const { playbackTimeline: t } = this,
      i = this.nextSeamlessTransition
        ? (s = t.previous) == null
          ? void 0
          : s.manifest.mediaItem
        : (n = t.current) == null
          ? void 0
          : n.manifest.mediaItem;
    return i ? (I.debug(`isItemPlaying ${e.title}, ${i.title}, ${e.id === i.id}`), e.id === i.id) : !1;
  }
  get currentItem() {
    return this.manifest.mediaItem;
  }
  get playableUrl() {
    let e = this._playableUrl;
    return (
      e || ((e = window.URL.createObjectURL(this.mediaSource)), I.debug("created url", e), (this._playableUrl = e), e)
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
    var a, o;
    if (((e = e + this.currentTimestampOffset), this._currentTime === e)) return;
    const { nextSeamlessTransition: t } = this;
    if (t && e >= t) {
      (I.debug("setting offset to", t),
        (this.currentTimestampOffset = t || 0),
        (this.nextSeamlessTransition = void 0),
        (this.duration = this.manifest.mediaItem.playbackDuration / 1e3),
        I.debug("buffer setting duration to", this.duration));
      const l = {
        previous:
          (o = (a = this.playbackTimeline.previous) == null ? void 0 : a.manifest) == null ? void 0 : o.mediaItem,
        current: this.manifest.mediaItem,
      };
      (I.debug("dispatching seamless audio transition", l), this.dispatcher.publish(Ue.seamlessAudioTransition, l));
    }
    this._currentTime = e;
    const { isOverBufferLimit: i, timeToTrim: s } = this,
      n = e > this.timeToTrim;
    i && n && (I.debug("buffer over limit, trimming to ", s), this.removeToTime(s), (this.timeToTrim += 10));
  }
  get hasAppendWindowSupport() {
    var e;
    return ((e = this.sourceBuffer) == null ? void 0 : e.appendWindowStart) !== void 0;
  }
  async seek(e) {
    const { duration: t, seekWhenUpdated: i, sourceBuffer: s } = this;
    if (
      (this.resolveSeekPromise(!1),
      I.debug("seek to ", e),
      (e = +e),
      e > t && (I.debug("rounding seek time to duration", e, t), (e = t)),
      !s)
    )
      return !1;
    if ((this.revertSeamlessTransition(), s.updating))
      return (
        I.debug("sourcebuffer updating, deferring seek"),
        new Promise((o) => {
          (i && i.resolve(!1), (this.seekWhenUpdated = { seek: this.seek.bind(this, e), resolve: o }));
        })
      );
    ((this.currentlyLoadingSegmentIndex = void 0),
      this.updateSegmentToFetch(0, !0),
      this.removeToTime(e),
      (this.timeToTrim = Math.floor(e / 10) * 10));
    const n = this.getSegmentForTime(e);
    (n !== 0 && (await this.firstSegmentLoadPromise),
      I.debug("seeking to", e, "segment", n),
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
    const { playbackTimeline: t, nextSeamlessTransition: i } = this;
    if (!i || !t.previous) {
      I.debug("no need to revert, no transition");
      return;
    }
    ((this.isAtEndOfStream = e),
      I.debug("reverting seamless transition with discardNextManifest", e),
      e ? this.clearBufferToEnd(i) : this.clearBuffer(),
      I.debug(`abandoning transition to ${this.manifest.mediaItem.title}`),
      (t.next = e ? void 0 : t.current),
      (t.current = t.previous),
      (t.previous = void 0));
    const s = this.manifest.mediaItem;
    (I.debug(`current item reverted to ${s.title}`),
      (this.nextSeamlessTransition = void 0),
      (this.duration = s.playbackDuration / 1e3),
      I.debug(`reverted duration to ${this.duration}`),
      e ||
        ((this.currentTimestampOffset = 0),
        (this.timestampOffsetAdjustment = 0),
        I.debug("reverted currentTimestampOffset and timestampOffsetAdjustment to 0")),
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
    var s;
    I.debug("removing sourceBuffer and mediaSource");
    const { sourceBuffer: e, mediaSource: t } = this;
    ((s = this.seekResolver) == null || s.resolve(!1), this.manifest.removeEventListener(_o, this.onManifestParsed));
    const i = this._playableUrl;
    (i && (I.debug("revoking url", i), window.URL.revokeObjectURL(i)),
      t.removeEventListener("sourceopen", this.onSourceOpen),
      e && (e.removeEventListener("updateend", this.updateEndHandler), (this.sourceBuffer = void 0)));
  }
  onManifestParsed() {
    const e = this.segmentIndexToFetch + 1;
    (I.debug("manifestParsed, loading segment", e), this.updateSegmentToFetch(e, !0));
  }
  updateEndHandler() {
    if ((this.kickstartBuffer(), this.clearDeferredRemove())) return;
    if ((I.debug("update end", this.seekWhenUpdated), this.seekWhenUpdated)) {
      I.debug("updateEndHandler resolving seekWhenUpdated");
      const { seekWhenUpdated: s } = this;
      (rt(s.seek().then(s.resolve)), (this.seekWhenUpdated = void 0));
      return;
    }
    this.checkSeekBuffered();
    const { clip: e, sourceBuffer: t, hasAppendWindowSupport: i } = this;
    if (e && t && !i) {
      const { buffered: s } = t;
      if (this.isTimeBuffered(e.end + 1)) {
        const n = s.end(s.length - 1);
        (I.debug("clipping sourcebuffer to", e.end, n), t.remove(e.end, n));
        return;
      }
    }
    if (this.isAtEndOfStream) {
      (I.debug("buffer is at end of stream"),
        this.streamHasEnding &&
          (I.debug("isAtEndOfStream, not fetching any more segments"),
          this.playbackTimeline.next || this.setEndOfStream(),
          this.transitionToNextManifest()),
        (this.isAtEndOfStream = !1));
      return;
    }
    (I.debug("updateEndHandler invoking loadSegment"), rt(this.loadSegment()));
  }
  clearDeferredRemove() {
    var t;
    if (this.deferredRemoves.length === 0) return !1;
    const e = this.deferredRemoves.shift();
    return (
      I.trace("clearDeferredRemove", e),
      e.end > e.start
        ? (t = this.sourceBuffer) == null || t.remove(e.start, e.end)
        : e.end <= e.start &&
          I.warn(
            `Trying to remove an invalid time range from SourceBuffer: |${e.start} <=> ${e.end}| (${e.end - e.start})`,
          ),
      !0
    );
  }
  transitionToNextManifest() {
    var s;
    I.debug("beginning transition to next manifest");
    const { playbackTimeline: e, sourceBuffer: t } = this;
    if (!e.next || !t) {
      I.debug("no next manifest");
      return;
    }
    const i = this.endOfBufferTime || this.currentTimestampOffset;
    (I.debug("setting seamless transition at", i),
      (this.nextSeamlessTransition = i),
      (this.timestampOffsetAdjustment = i),
      (this.playbackTimeline.current.endTime = i),
      (e.previous = e.current),
      I.debug("previous manifest set to", (s = e.previous) == null ? void 0 : s.manifest.mediaItem.title),
      (e.current = e.next),
      I.debug("current manifest set to", e.current.manifest.mediaItem.title),
      (e.next = void 0),
      this.updateSegmentToFetch(0, !0),
      this.printInfo());
  }
  updateSegmentToFetch(e, t = !1) {
    this.segments.length &&
      e < this.segments.length &&
      e !== this.segmentIndexToFetch &&
      ((this.segmentIndexToFetch = e),
      t && (I.debug("updateSegmentToFetch invoking loadSegment"), rt(this.loadSegment())));
  }
  async loadSegment() {
    const e = this.segmentIndexToFetch,
      t = this.segments[e];
    if (e === this.currentlyLoadingSegmentIndex) {
      I.debug(`segment ${e} is currently loading, not loading it again`);
      return;
    }
    if (t)
      try {
        (I.debug(`begin loadSegment ${e}`), (this.currentlyLoadingSegmentIndex = e));
        const i = t.load();
        e === 0 && (this.firstSegmentLoadPromise = i);
        const s = await i;
        if (e !== 0 && e !== this.segmentIndexToFetch) {
          I.debug("load segment index to fetch changed, not processing bytes for segment", e);
          return;
        }
        (this.segmentProcessor.process(t, s), I.debug(`loadSegment processed: ${e}`));
        const { sourceBuffer: n, timestampOffsetAdjustment: a } = this;
        if (!n) return;
        try {
          (typeof a == "number" &&
            (I.debug("adjusting timestampOffset of sourcebuffer to", a),
            (n.timestampOffset = a),
            (this.timestampOffsetAdjustment = void 0)),
            n.appendBuffer(s),
            (this.isFullyBuffered = !1),
            (this.isOverBufferLimit = !1),
            I.debug("appended to buffer", s.length),
            this.printBufferTimes(),
            e === this.segments.length - 1
              ? (this.isAtEndOfStream = !0)
              : e === this.segmentIndexToFetch &&
                (I.debug("loadSegment bumping segment index to fetch to ", e + 1), this.updateSegmentToFetch(e + 1)));
        } catch (o) {
          o.name === "QuotaExceededError"
            ? ((this.isOverBufferLimit = !0), I.debug("reached buffer limit"))
            : I.warn("Error appending to source buffer", o);
        }
      } catch (i) {
        (I.error("Error loading segment", i), this.dispatcher.publish(Ue.loadSegmentError, i));
      } finally {
        this.currentlyLoadingSegmentIndex = void 0;
      }
  }
  setEndOfStream() {
    const { sourceBuffer: e, mediaSource: t } = this;
    !e ||
      t.readyState === "ended" ||
      (!e.updating && t.readyState === "open"
        ? (I.debug("mediaSource.endOfStream"), t.endOfStream(), (this.isFullyBuffered = !0))
        : I.error("Could not end of stream (updating, readyState)", e.updating, t.readyState));
  }
  removeToTime(e) {
    (I.debug("removing to time", e),
      e > 0 && (this.isTimeBuffered(e) || this.isOverBufferLimit) && this.safeSourceBufferRemove(0, e));
  }
  safeSourceBufferRemove(e, t) {
    I.trace("safeSourceBufferRemove", e, t);
    const { sourceBuffer: i } = this;
    i &&
      (i.updating
        ? this.deferredRemoves.push({ start: e, end: t })
        : t <= e
          ? I.warn(`Trying to remove an invalid time range from SourceBuffer: |${e} <=> ${t}| (${t - e})`)
          : i.remove(e, t));
  }
  get previousOffset() {
    var e, t;
    return ((t = (e = this.playbackTimeline) == null ? void 0 : e.previous) == null ? void 0 : t.endTime) || 0;
  }
  get manifest() {
    var e;
    return (e = this.playbackTimeline.current) == null ? void 0 : e.manifest;
  }
  checkSeekBuffered() {
    const { seekResolver: e, currentTimestampOffset: t } = this;
    if (!e) return;
    const { time: i } = e,
      s = i + t,
      n = this.isTimeBuffered(s);
    (I.debug("resolving seek for time, adjustedTime, isBuffered", i, s, n),
      this.printBufferTimes(),
      n &&
        (I.debug("resolving seek to true for time:", s), (this.element.currentTime = s), this.resolveSeekPromise(!0)));
  }
  resolveSeekPromise(e) {
    this.seekResolver && (this.seekResolver.resolve(e), (this.seekResolver = void 0));
  }
  get endOfBufferTime() {
    var t;
    const e = (t = this.sourceBuffer) == null ? void 0 : t.buffered;
    return !e || !e.length ? !1 : e.end(e.length - 1);
  }
  isTimeBuffered(e) {
    var i;
    const t = (i = this.sourceBuffer) == null ? void 0 : i.buffered;
    if (!t) return !1;
    for (let s = 0; s < t.length; s++)
      if ((I.debug("isTimeBuffered", t.start(s), e, t.end(s)), e >= t.start(s) && e <= t.end(s))) return !0;
    return !1;
  }
  clearBufferToEnd(e) {
    const { sourceBuffer: t } = this;
    if (!t || !t.buffered) return;
    const i = t.buffered.end(t.buffered.length - 1);
    this.safeSourceBufferRemove(e, i);
  }
  clearBuffer() {
    const { sourceBuffer: e } = this;
    if (!e || !e.buffered) return;
    const t = e.buffered;
    for (let i = 0; i < t.length; i++) this.safeSourceBufferRemove(t.start(i), t.end(i));
  }
  get bufferTimesString() {
    var i;
    const e = (i = this.sourceBuffer) == null ? void 0 : i.buffered;
    if (!e) return "";
    const t = [];
    for (let s = 0; s < e.length; s++) t.push(`start ${e.start(s)} end: ${e.end(s)}`);
    return t.join(",");
  }
  printBufferTimes() {
    tm && I.debug("buffer times", this.bufferTimesString);
  }
  getSegmentForTime(e) {
    return Math.floor(e / 10) + 1;
  }
  kickstartBuffer() {
    const { hasKickstarted: e, element: t, clip: i } = this,
      { buffered: s } = t;
    if (!e) {
      if (this.manifest.mediaItem.isSong) {
        i && this.isTimeBuffered(i.start) && ((t.currentTime = i.start), (this.hasKickstarted = !0));
        return;
      }
      s.length && ((t.currentTime = s.start(0)), (this.hasKickstarted = !0));
    }
  }
  printInfo() {
    var t, i;
    const { playbackTimeline: e } = this;
    (I.info("---- Buffer Info ----"),
      I.info("currently buffering item", e.current.manifest.mediaItem.title),
      I.info("next item to buffer", (t = e.next) == null ? void 0 : t.manifest.mediaItem.title),
      I.info("previously buffered item", (i = e.previous) == null ? void 0 : i.manifest.mediaItem.title),
      I.info("currentTimestampOffset", this.currentTimestampOffset),
      I.info("currentTime", this.currentTime),
      I.info("duration", this.duration),
      I.info("nextSeamlessTransition", this.nextSeamlessTransition),
      I.info("timestampOffsetAdjustment", this.timestampOffsetAdjustment),
      I.info("buffered times", this.bufferTimesString),
      I.info("isAtEndOfStream", this.isAtEndOfStream),
      I.info("isFullyBuffered", this.isFullyBuffered),
      I.info("segmentIndexToFetch", this.segmentIndexToFetch),
      I.info("segments.length", this.segments.length),
      I.info("---- End Buffer Info ----"));
  }
}
Wn([S()], ji.prototype, "onSourceOpen", 1);
Wn([S()], ji.prototype, "onManifestParsed", 1);
Wn([S()], ji.prototype, "updateEndHandler", 1);
var rm = Object.defineProperty,
  im = Object.getOwnPropertyDescriptor,
  sr = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? im(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && rm(e, t, s), s);
  };
const { mediaPlaybackError: ur } = T,
  sm = 15;
class st extends Bi {
  constructor(t) {
    var s, n;
    super(t);
    c(this, "currentAudioTrack");
    c(this, "currentTextTrack");
    c(this, "textTracks", []);
    c(this, "audioTracks", []);
    c(this, "audio");
    c(this, "isSeamlessAudioTransitionsEnabled", !1);
    c(this, "delaySeamlessCdmUpdates", !1);
    c(this, "isTabHidden", !1);
    c(this, "pendingPlaybackItem");
    c(this, "extension");
    c(this, "mediaPlayerType", "audio");
    c(this, "playerName", "AudioPlayer");
    c(this, "manifest");
    c(this, "nextManifest");
    const i = (n = (s = t.bag) == null ? void 0 : s.features) != null ? n : {};
    ((this.isSeamlessAudioTransitionsEnabled = !!i["seamless-audio-transitions"]),
      (this.delaySeamlessCdmUpdates = !!i["delay-seamless-cdm-updates"]),
      (window.audioPlayer = this),
      this._dispatcher.subscribe(Ue.loadSegmentError, this.onLoadSegmentError),
      this.setupVisibilityTracking());
  }
  async destroy() {
    (super.destroy(),
      this._dispatcher.unsubscribe(Ue.loadSegmentError, this.onLoadSegmentError),
      this.tearDownVisibilityTracking());
  }
  onLoadSegmentError(t) {
    (this._dispatcher.publish(ur, new m(m.Reason.MEDIA_SESSION, t)), this.destroy());
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
    ((this.extension = new hl({
      mediaElement: this.audio,
      contentType: Qc,
      services: { runtime: this.services.runtime },
    })),
      await this.extension.initializeKeySystem(),
      this.extension.addEventListener(W.playbackLicenseError, (t) => {
        (this.resetDeferredPlay(), this._dispatcher.publish(ur, t));
      }),
      this.extension.addEventListener(W.playbackSessionError, (t) => {
        (this._dispatcher.publish(ur, new m(m.Reason.MEDIA_SESSION, t)), this.destroy());
      }));
  }
  async initializeMediaElement() {
    const t = nl();
    ((t.autoplay = !1),
      (t.id = "apple-music-player"),
      (t.controls = !1),
      (t.muted = !1),
      (t.playbackRate = 1),
      (t.preload = "metadata"),
      (t.volume = 1),
      (this.audio = t),
      document.body.appendChild(t),
      h.debug("initializedMediaElement", t));
  }
  removeEventHandlers() {
    (this._targetElement.removeEventListener("timeupdate", this.onTimeUpdate),
      this._targetElement.removeEventListener("timeupdate", this.delayedCdmUpdateCheck),
      super.removeEventHandlers());
  }
  async stopMediaElement() {
    var t;
    (await super.stopMediaElement(),
      await this.tearDownManifests(),
      (t = this._buffer) == null || t.stop(),
      (this._buffer = void 0));
  }
  async preloadItem(t) {
    const { extension: i, nextManifest: s } = this,
      n = this._buffer;
    if (t.type !== "song" || !(n && i) || !this.isSeamlessAudioTransitionsEnabled || t.playRawAssetURL) return;
    if ((s == null ? void 0 : s.mediaItem.id) === t.id) {
      h.debug("already have next manifest for ", t.title);
      return;
    }
    if (s && s.mediaItem.id !== t.id) {
      h.debug(`preventing race condition: not overwriting nextManifest for ${s.mediaItem.title} with ${t.title}`);
      return;
    }
    (this._targetElement.removeEventListener("timeupdate", this.onTimeUpdate),
      this._targetElement.addEventListener("timeupdate", this.onTimeUpdate),
      h.debug("player preparing next manifest for", t.title));
    const a = await this.loadAndParseManifest(t, !1);
    (n.setNextManifest(a), i.setMediaItem(t), (this.nextManifest = a));
  }
  async playItemFromEncryptedSource(t, i = !1, s) {
    var y, g, k;
    const n = this._paused && !i;
    h.debug("playItemFromEncryptedSource", t.title);
    const { browser: a } = this.services.runtime,
      o = a.isSafari && a.major === 26;
    if (this.isTabHidden && (y = this.extension) != null && y.isFairplay && mi(t) && o && !i)
      return (
        h.debug("Tab is hidden, suspending FairPlay song playback for", t.title),
        (this.pendingPlaybackItem = t),
        Promise.resolve()
      );
    const l = n ? void 0 : this.startPlaybackSequence();
    if (t.playRawAssetURL)
      return (
        (t.playbackType = Te.unencryptedFull),
        (this.nowPlayingItem = t),
        await this._playAssetURL(t.assetURL, n),
        this.finishPlaybackSequence()
      );
    const { extension: u } = this;
    if (
      (this.delaySeamlessCdmUpdates &&
        ((k = (g = this.extension) == null ? void 0 : g.session) == null || k.applyDelayedCdmUpdates()),
      !u)
    )
      return l;
    ((u.initiated = i),
      u.setMediaItem(t),
      (t.playbackType = Te.encryptedFull),
      (this.nowPlayingItem = t),
      (t.state = q.loading));
    const d = await this.getManifestForItem(t);
    this.manifest = d;
    const p = pl();
    if (((t.isSong || (u.isFairplay && p)) && (u.extURI = d.extURI), (t.state = q.ready), u.isFairplay && !p)) {
      let w = t.assetURL;
      (s != null && s.startTime && (w += `#t=${s.startTime}`), await this._playAssetURL(w, n));
    } else {
      const w = this._buffer;
      !w || !this.isSeamlessAudioTransitionsEnabled || !w.isItemPlaying(d.mediaItem)
        ? await this.beginNewBufferForItem(n, d, s)
        : h.debug("already have buffer, continuing playback");
    }
    return this.finishPlaybackSequence();
  }
  async getManifestForItem(t) {
    var d, p;
    h.debug("reconciling item to play against playing item");
    const { nextManifest: i, manifest: s, isSeamlessAudioTransitionsEnabled: n } = this,
      a = this._buffer;
    if (!a || !s)
      return (
        h.debug("no buffer or manifest, creating manifest [title, buffer, manifest]", t.title, !!a, !!s),
        this.loadAndParseManifest(t)
      );
    if (!n)
      return (
        h.debug("seamless transitions disabled, stopping and creating manifest for", t.title),
        await this.tearDownManifests(),
        this.loadAndParseManifest(t)
      );
    const o = !a.isItemPlaying(t);
    h.debug("itemMismatch", o);
    let l;
    const u = (i == null ? void 0 : i.mediaItem.id) === t.id;
    return (
      i && !o && u
        ? (h.debug(`replacing manifest for ${s.mediaItem.title} with next manifest ${i.mediaItem.title}`),
          (l = i),
          (this.nextManifest = void 0),
          h.debug("cease listening for keys on manifest for", s.mediaItem.title),
          await this.tearDownManifest(s))
        : o
          ? (i == null ? void 0 : i.mediaItem.id) !== t.id
            ? (h.debug(`item to play ${t.title} does not match playing or next items, tearing down all manifests`),
              await this.tearDownManifests(),
              (l = await this.loadAndParseManifest(t)))
            : (h.debug(`item to play ${t.title} matches next item, tearing down current manifest`),
              await this.tearDownManifest(s),
              (l = i))
          : (h.debug("item is already playing, returning existing manifest"), (l = s)),
      h.debug("getManifestForItem loading keys for", l.mediaItem.title),
      (p = (d = this.extension) == null ? void 0 : d.session) == null || p.loadKeys(l.keyValues, l.mediaItem),
      l
    );
  }
  async seekToTime(t) {
    const i = this._buffer;
    if (i) {
      if ((h.debug("audio-player: buffer seek to", t), !(await i.seek(t)))) return;
      this.isSeamlessAudioTransitionsEnabled && this.onTimeUpdate();
    } else (h.debug("audio-player: media element seek to", t), (this._targetElement.currentTime = t));
  }
  async tearDownManifests() {
    ((this.manifest = await this.tearDownManifest(this.manifest)),
      (this.nextManifest = await this.tearDownManifest(this.nextManifest)));
  }
  async tearDownManifest(t) {
    const { extension: i } = this;
    t &&
      (h.debug("tearing down manifest for", t.mediaItem.title),
      t.stop(),
      i && (await i.clearSessions(t.keyValues)),
      t.removeEventListener(Ar.keysParsed, this.loadKeysHandler));
  }
  async loadAndParseManifest(t, i = !0) {
    h.debug(`will load and parse manifest for ${t.title}, loadKeys ${i}`);
    let s;
    try {
      return (
        (s = await yl.load(t, {
          cache: !1,
          services: { runtime: this.services.runtime, request: this.services.request },
        })),
        i && s.addEventListener(Ar.keysParsed, this.loadKeysHandler),
        s.parse(),
        s
      );
    } catch (n) {
      this.resetDeferredPlay();
      const a = new m(m.Reason.NETWORK_ERROR, "Could not fetch manifest");
      throw ((a.data = n), this._dispatcher.publish(ur, a), a);
    }
  }
  onTimeUpdate() {
    var a, o, l, u;
    if (!this._buffer) return;
    const { currentPlaybackTimeRemaining: i, nextManifest: s, delaySeamlessCdmUpdates: n } = this;
    s &&
      i < sm &&
      (h.debug("player loading keys for", s.mediaItem.title, n),
      n
        ? ((o = (a = this.extension) == null ? void 0 : a.session) == null ||
            o.loadKeys(s.keyValues, s.mediaItem, { delayCdmUpdate: !0 }),
          this._targetElement.addEventListener("timeupdate", this.delayedCdmUpdateCheck))
        : (u = (l = this.extension) == null ? void 0 : l.session) == null || u.loadKeys(s.keyValues, s.mediaItem),
      this._targetElement.removeEventListener("timeupdate", this.onTimeUpdate));
  }
  delayedCdmUpdateCheck() {
    var a;
    const t = (a = this.nowPlayingItem) == null ? void 0 : a.playbackDuration,
      i = t ? t / 1e3 : this.currentPlaybackDuration,
      s = this._currentTime,
      n = Number((i - s).toFixed(3));
    if (n < 1) {
      const o = n * 1e3;
      (h.debug("delayed CDM update in ", o),
        setTimeout(() => {
          var l, u;
          (h.debug("applying delayed CDM update"),
            (u = (l = this.extension) == null ? void 0 : l.session) == null || u.applyDelayedCdmUpdates());
        }, o),
        this._targetElement.removeEventListener("timeupdate", this.delayedCdmUpdateCheck));
    }
  }
  loadKeysHandler(t) {
    var i, s;
    (s = (i = this.extension) == null ? void 0 : i.session) == null || s.loadKeys(t.keys, t.item);
  }
  async beginNewBufferForItem(t, i, s) {
    if (
      (h.debug("creating new MseBuffer for item", i.mediaItem.title, t),
      this._buffer && (h.debug("stopping old buffer"), this._buffer.stop()),
      (this._buffer = new ji({
        dispatcher: this._dispatcher,
        element: this._targetElement,
        duration: i.mediaItem.playbackDuration / 1e3,
        manifest: i,
      })),
      await this._playAssetURL(this._buffer.playableUrl, !0),
      !t)
    ) {
      let n = Promise.resolve();
      return (s != null && s.startTime && (n = this.seekToTime(s.startTime)), n.then(() => this._playMedia()));
    }
  }
  async setPresentationMode(t) {
    return Promise.resolve();
  }
  async loadPreviewImage(t) {}
  setupVisibilityTracking() {
    (document.addEventListener(bi, this.onVisibilityChange), (this.isTabHidden = document[rn] === "hidden"));
  }
  tearDownVisibilityTracking() {
    document.removeEventListener(bi, this.onVisibilityChange);
  }
  onVisibilityChange() {
    var i;
    const t = this.isTabHidden;
    if (
      ((this.isTabHidden = document[rn] === "hidden"),
      h.debug("Tab visibility changed:", { wasHidden: t, isTabHidden: this.isTabHidden }),
      t &&
        !this.isTabHidden &&
        this.pendingPlaybackItem &&
        (i = this.extension) != null &&
        i.isFairplay &&
        mi(this.pendingPlaybackItem))
    ) {
      h.debug("Tab became visible, resuming FairPlay song playback for", this.pendingPlaybackItem.title);
      const s = this.pendingPlaybackItem;
      ((this.pendingPlaybackItem = void 0),
        this.playItemFromEncryptedSource(s, !1).catch((n) => {
          (h.error("Failed to resume FairPlay song playback after tab visibility change:", n),
            this._dispatcher.publish(ur, new m(m.Reason.MEDIA_SESSION, n)));
        }));
    }
  }
}
sr([S()], st.prototype, "onLoadSegmentError", 1);
sr([tr(250)], st.prototype, "seekToTime", 1);
sr([S()], st.prototype, "onTimeUpdate", 1);
sr([S()], st.prototype, "delayedCdmUpdateCheck", 1);
sr([S()], st.prototype, "loadKeysHandler", 1);
sr([S()], st.prototype, "onVisibilityChange", 1);
class nm extends rr {
  constructor() {
    super(...arguments);
    c(this, "_currentSession");
    c(this, "_keySystemAccess");
    c(this, "_mediaKeysPromise");
    c(this, "_mediaKeysServerCertificate");
  }
  async attachMedia(t, i) {
    ((this.keySystem = i.keySystem),
      (this._keySystemAccess = i),
      t.addEventListener("encrypted", this.boundHandleSessionCreation, !1));
  }
  detachMedia(t) {
    t.removeEventListener("encrypted", this.boundHandleSessionCreation);
  }
  async createSession(t) {
    h.debug("Encrypted createSession", t);
    const i = this._keySystemAccess;
    if (!i) return;
    const { initData: s, initDataType: n, target: a } = t;
    if (
      (this._mediaKeysPromise ||
        (this._mediaKeysPromise = new Promise(async (o, l) => {
          const u = await i.createMediaKeys();
          try {
            await a.setMediaKeys(u);
          } catch (p) {
            (this.dispatchKeyError(p), l(p));
          }
          const d = await this.loadCertificateBuffer();
          (await u.setServerCertificate(d), (this._mediaKeysServerCertificate = d), o(u));
        })),
      await this._mediaKeysPromise,
      this._mediaKeysServerCertificate)
    )
      return this._createSession(a, s, n);
  }
  generatePSSH(t) {
    const i = new Uint8Array([
        0, 0, 0, 52, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29,
        33, 237, 0, 0, 0, 20, 8, 1, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]),
      s = qt(t);
    for (let n = 0; n < s.length; n++) i[i.length - 16 + n] = s[n];
    return (h.debug("generatePSSH", i), i);
  }
  _createSession(t, i, s) {
    const n = t.mediaKeys.createSession(),
      { item: a } = this;
    if (!a) return;
    (this._teardownCurrentSession(), h.debug("creating media key session", n));
    const o = this.isWidevine && a.isSong;
    let l;
    if (o) l = this.generatePSSH(this.extID);
    else {
      const d = Dy(new Uint8Array(i)).find((g) => g.isWidevine),
        p = d == null ? void 0 : d.rawBytes,
        y = p ? ot(p) : void 0;
      (h.debug("extracted uri", y), (n.extURI = y), (l = i));
    }
    return (
      n.addEventListener("message", this.startLicenseSession),
      (this._currentSession = n),
      n.generateRequest(s, l).catch((u) => {
        if (u.message.match(/generateRequest.*\(75\)/)) return n.generateRequest(s, l);
        throw u;
      })
    );
  }
  _teardownCurrentSession() {
    this._currentSession &&
      (h.debug("tearing down media key session", this._currentSession),
      this._currentSession.removeEventListener("message", this.startLicenseSession),
      (this._currentSession = void 0));
  }
  applyDelayedCdmUpdates() {}
  async loadKeys(t, i, s) {}
  async clearSessions() {}
}
class am extends Mt {
  constructor(t) {
    super(t);
    c(this, "audioTracks", []);
    c(this, "textTracks", []);
    c(this, "session");
    c(this, "extURI");
    c(this, "hasMediaSession");
    c(this, "initiated");
    c(this, "isFairplay");
    ((this.extURI = ""), (this.initiated = !0), (this.isFairplay = !0), (this.hasMediaSession = !0));
  }
  destroy(t) {}
  setMediaItem(t) {}
  async initializeKeySystem() {
    this.session = new nm();
  }
  async clearSessions() {}
}
class om {
  constructor(e) {
    c(this, "id", Li());
    c(this, "playerName", "PlayerStub");
    c(this, "bitrate", Ke.STANDARD);
    c(this, "audioTracks", []);
    c(this, "currentBufferedProgress", 0);
    c(this, "currentPlaybackDuration", 0);
    c(this, "currentPlaybackProgress", 0);
    c(this, "currentPlaybackTime", 0);
    c(this, "currentPlaybackTimeRemaining", 0);
    c(this, "currentPlayingDate");
    c(this, "isPlayingAtLiveEdge", !1);
    c(this, "isPlaying", !1);
    c(this, "isPrimaryPlayer", !0);
    c(this, "isReady", !1);
    c(this, "nowPlayingItem");
    c(this, "paused", !1);
    c(this, "playbackState", V.none);
    c(this, "playbackTargetAvailable", !1);
    c(this, "playbackTargetIsWireless", !1);
    c(this, "previewOnly", !1);
    c(this, "supportsPreviewImages", !1);
    c(this, "textTracks", []);
    c(this, "extension", new am([]));
    c(this, "hasAuthorization", !0);
    c(this, "windowHandlers");
    c(this, "isDestroyed", !1);
    c(this, "services");
    c(this, "_dispatcher");
    c(this, "_volume", 1);
    c(this, "_playbackRate", 1);
    c(this, "_defaultPlaybackRate", 1);
    c(this, "currentAudioTrack");
    c(this, "currentTextTrack");
    c(this, "seekableTimeRanges");
    ((this.services = e.services),
      (this._dispatcher = e.services.dispatcher),
      (this.windowHandlers = new Lr(this, e.services.runtime)));
  }
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
    ((this._playbackRate = e), this._dispatcher.publish(T.playbackRateDidChange, new Event("ratechange")));
  }
  get defaultPlaybackRate() {
    return this._defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    ((this._defaultPlaybackRate = e), this._dispatcher.publish(T.playbackRateDidChange, new Event("ratechange")));
  }
  get volume() {
    return this._volume;
  }
  set volume(e) {
    ((this._volume = e), this._dispatcher.publish(T.playbackVolumeDidChange, new Event("volumeChange")));
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
    return new Jc(this);
  }
  async pause(e) {}
  async play() {}
  async playItemFromEncryptedSource(e, t, i) {}
  async playItemFromUnencryptedSource(e, t, i) {}
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
class cm extends hl {
  destroy(e) {
    var t;
    ((t = this._session) == null || t.stopLicenseSession(), super.destroy(e));
  }
}
var lm = Object.defineProperty,
  um = Object.getOwnPropertyDescriptor,
  Yn = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? um(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && lm(e, t, s), s);
  };
const { mediaPlaybackError: dm } = T,
  { playbackLicenseError: To, playbackSessionError: Eo } = W;
class qi extends jn {
  constructor() {
    super(...arguments);
    c(this, "playerName", "NativeSafariVideoPlayer");
    c(this, "_blobUrl");
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
  async initializeExtension() {
    if (!this.video) {
      h.warn("NativeSafariVideoPlayer.initializeExtension No video element, not initializing extension");
      return;
    }
    const t = new cm({ mediaElement: this.video, contentType: Zf, services: { runtime: this.services.runtime } });
    ((this.extension = t),
      await t.initializeKeySystem(),
      t.addEventListener(To, this.onPlaybackLicenseError),
      t.addEventListener(Eo, this.onPlaybackSessionError));
  }
  destroy() {
    h.debug("native-safari-video-player.destroy");
    const { extension: t, video: i } = this;
    (this._blobUrl && (URL.revokeObjectURL(this._blobUrl), (this._blobUrl = void 0)),
      !(!t || !i) &&
        (t.removeEventListener(To, this.onPlaybackLicenseError),
        t.removeEventListener(Eo, this.onPlaybackSessionError),
        i.removeEventListener("loadedmetadata", this.onMetadataLoaded),
        super.destroy()));
  }
  async loadPreviewImage(t) {}
  async preloadItem(t, i) {}
  async playHlsStream(t, i, s = {}) {
    var u;
    h.debug("native-safari-video-player.playHlsStream", t);
    const { video: n } = this;
    if (!n) {
      const d = "NativeSafariVideoPlayer.playHlsStream(): No video element";
      throw (h.error(d), new Error(d));
    }
    this.setupTrackManagers();
    const a = this.startPlaybackSequence(),
      l = (this.services.manifest.personalizedManifests ? this.playByBlob(t, n, s) : this.playBySource(t, n, s)).then(
        () => a,
      );
    return (
      i && ((u = this.extension) == null || u.setMediaItem(i)),
      n.addEventListener("loadedmetadata", this.onMetadataLoaded),
      l
    );
  }
  onPlaybackSessionError(t) {
    this._dispatcher.publish(dm, new m(m.Reason.MEDIA_SESSION, t));
  }
  async onMetadataLoaded() {
    h.debug("native-safari-video-player.onMetadataLoaded");
    const { nowPlayingItem: t } = this;
    (t && (t.state = q.ready), await this._playMedia(), this.finishPlaybackSequence());
  }
  async seekToTime(t) {
    (h.debug("native-safari-video-player: media element seek to", t), (this._targetElement.currentTime = t));
  }
  async playByBlob(t, i, s = {}) {
    h.debug("native-safari-video-player: playing video by blob");
    const n = this.services.manifest;
    let a = await n.getManifest(t);
    if (!a && (h.debug("native-safari-video-player: fetching manifest"), (a = await n.fetchManifest(t)), !a))
      throw (h.error(`No manifest for ${t}`), new m(m.Reason.CONTENT_UNAVAILABLE, "Failed to load manifest"));
    (h.debug("native-safari-video-player: loaded manifest", !!a), await n.clearManifest(t));
    const o = a.contentType,
      l = a.content.replace(/^#EXT-X-SESSION-DATA-ITUNES:.*$/gm, ""),
      u = new Blob([l], { type: o });
    ((t = URL.createObjectURL(u)), (this._blobUrl = t));
    const d = document.createElement("source");
    (d.setAttribute("src", t),
      o && d.setAttribute("type", o),
      h.debug("native-safari-video-player: blob url", t),
      s.startTime !== void 0 && (i.currentTime = s.startTime),
      i.appendChild(d));
  }
  async playBySource(t, i, s = {}) {
    (h.debug("native-safari-video-player: playing video by source"),
      s.startTime !== void 0 && (t += `#t=${s.startTime}`),
      (i.src = t));
  }
  async stopMediaElement() {
    (h.trace("native-safari-video-player.stopMediaElement()"),
      this.hasMediaElement &&
        (h.debug(`Stopping HTMLMediaElement id=${this._targetElement.id}`, this._targetElement),
        this._targetElement.pause(),
        this.resetMediaElement()),
      this.destroy());
  }
}
Yn([S()], qi.prototype, "onPlaybackSessionError", 1);
Yn([S()], qi.prototype, "onMetadataLoaded", 1);
Yn([tr(250)], qi.prototype, "seekToTime", 1);
const Sl = "js-cdn.music.apple.com",
  Il = "/musickit/v3/",
  hm = "current",
  fm = new RegExp(`^https://([a-z0-9]+-)?${(Sl + Il.replace(/v3/, "(v2|v3)")).replace(/[\.\/]/g, "\\$&")}`, "i"),
  pm = /^https:\/\/(.*\/includes\/js-cdn)\//i,
  ym = /^([a-z]+:)?\/\//;
function Gn(r) {
  return wt() || !r ? null : document.querySelector(`script[src*="${r}"]`);
}
function kl() {
  return typeof document > "u" || !document.querySelectorAll
    ? []
    : Array.from(document.querySelectorAll("script[src]"));
}
function mm() {
  for (const r of kl()) {
    const e = fm.exec(r.src);
    if (e) return e[1] || "";
  }
  return "";
}
function gm() {
  for (const r of kl()) {
    const e = pm.exec(r.src);
    if (e) return e[1] || "";
  }
  return "";
}
function Pl() {
  return wt() ? "" : `//${mm()}${Sl}`;
}
function Al() {
  const r = gm();
  return r && "//" + r;
}
const zn = Ln.register("mk-hlsjs-log-level"),
  vm = Ln.register("mk-hlsjs-version");
function bm() {
  const r = zn.value,
    e = "hls.js";
  switch (r) {
    case "info":
    case "error":
    case "warn":
      return "hls.production.verbose.min.js";
    case "trace":
    case "debug":
      return (console.warn(`HLS log level ${r} is not supported, loading production build.`), e);
    default:
      return e;
  }
}
function wl() {
  const r = { hls: "", rtc: "" };
  if (wt()) return r;
  const e = Al() || Pl(),
    t = vm.get() || hm,
    i = bm();
  return ((r.hls = `https:${e}/hls.js/${t}/hls.js/${i}`), (r.rtc = `https:${e}/hls.js/${t}/rtc.js/rtc.min.js`), r);
}
function Rl(r, e = window) {
  var s;
  if (wt()) return "";
  const t = (s = ze()) == null ? void 0 : s.getItem("mkCDNBaseURLOverride");
  if (t) return t;
  const i = Gn(r);
  return i ? i.getAttribute("src").replace(new RegExp(`${r}$`), "") : `${Al() || Pl()}${Il}`;
}
const So = new Map();
function Wi(r, e) {
  const t = So.get(r);
  if (t) return t;
  const i = new Promise((s, n) => {
    if ((wt() && n("Dynamic script loading is unsupported in Node environments."), Gn(r))) return s();
    const o = document.createElement("script");
    (e &&
      Object.keys(e).forEach((u) => {
        o.setAttribute(u, e[u]);
      }),
      (o.onload = () => {
        s();
      }),
      (o.onerror = (u) => {
        n(u);
      }));
    let l;
    (ym.test(r) ? (l = r) : (l = `${Rl(r)}${r}`), (o.src = l), document.head.appendChild(o));
  });
  return (So.set(r, i), i);
}
function _m(r) {
  return (e, t, i) => {
    const s = i.value,
      n = Tm(s, r);
    i.value = n;
  };
}
function Tm(r, e) {
  let t = 0,
    i,
    s;
  const n = () => {
    (clearTimeout(s), (s = 0), (i = void 0));
  };
  return function (...a) {
    const o = this;
    return new Promise(function (l, u) {
      const d = Date.now();
      d - t < e
        ? (i && (i.resolve(void 0), n()),
          (i = { resolve: l, reject: u, args: a }),
          (s = setTimeout(
            () => {
              (r.apply(o, i.args).then(i.resolve).catch(i.reject), n());
            },
            e - (d - t + 1),
          )))
        : (n(), (t = d), r.apply(o, a).then(l).catch(u));
    });
  };
}
const G = h.createChild("tracks");
var Em = Object.defineProperty,
  Sm = Object.getOwnPropertyDescriptor,
  _t = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Sm(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Em(e, t, s), s);
  };
const {
    audioTracksSwitched: Zr,
    audioTracksUpdated: bs,
    inlineStylesParsed: Io,
    itemPlaying: ko,
    textTracksSwitched: ei,
    textTracksUpdated: Po,
  } = W,
  Im = Se.register("mk-hlsjs-interstitial-playback");
class lt extends Mt {
  constructor(t) {
    super([Zr, bs, Io, ko, ei, Po]);
    c(this, "_audioTracks", []);
    c(this, "_textTracks", []);
    c(this, "_localizedRenditionNames");
    c(this, "_interstitialItemIds", new Set());
    c(this, "_isDestroyed", !1);
    this.session = t;
    const {
      AUDIO_TRACK_SWITCHED: i,
      INLINE_STYLES_PARSED: s,
      ITEM_PLAYING: n,
      MANIFEST_PARSED: a,
      SESSION_DATA_COMPLETE: o,
      SUBTITLE_TRACK_SWITCH: l,
    } = window.Hls.Events;
    (this.session.on(i, this.handleAudioTrackSwitched),
      this.session.on(s, this.handleInlineStylesParsed),
      this.session.on(n, this.handleItemPlaying),
      this.session.on(a, this.handleManifestParsed),
      this.session.on(o, this.handleSessionDataComplete),
      this.session.on(l, this.handleSubtitleTrackSwitch));
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  get audioTracks() {
    return this._audioTracks;
  }
  get textTracks() {
    return this._textTracks;
  }
  get currentInterstitialId() {
    var t, i;
    return (i = (t = this.session.getCurrentIntegratedTimelineSegmentAndCurrentTime()) == null ? void 0 : t.segment) ==
      null
      ? void 0
      : i.interstitialEventIdentifier;
  }
  set audioTrack(t) {
    G.debug("set audioTrack", t);
    const { currentInterstitialId: i, session: s } = this;
    !s ||
      !t ||
      t.id === void 0 ||
      (t.interstitialId === i &&
        (i || this.setAudioAndSubtitleForItem(t),
        this.setTrackOnInterstitialItems({ track: t, setTrack: this.setAudioAndSubtitleForItem })));
  }
  set textTrack(t) {
    const { currentInterstitialId: i } = this;
    if ((G.debug("set textTrack:", t), t && t.interstitialId !== i)) return;
    if (!i) {
      const n = ms(this.subtitleMediaOptions, this.currentAudioMediaOption, t),
        a = n ? n.MediaSelectionOptionsPersistentID : -1;
      this.setSubtitleTrack(a);
    }
    G.debug("set subtitle track on all interstitial items", this._interstitialItemIds);
    const s = !t || t.label === yt;
    this.setTrackOnInterstitialItems({ track: s ? void 0 : t, setTrack: this.setSubtitleForInterstitial });
  }
  setPreferredAudioTrackForItem(t, i) {
    var o;
    const s = (o = t[0]) == null ? void 0 : o.MediaSelectionOptionsInterstitialId,
      n = no(t, i),
      a = this.session.getEnabledAudioMediaOptionForItem({ interstitialAssetId: s });
    return (
      G.debug("setPreferredAudioTrackForItem - preferred track", n, a),
      !n || n.MediaSelectionOptionsPersistentID === (a == null ? void 0 : a.MediaSelectionOptionsPersistentID)
        ? a
        : (this.setAudioTrack(n.MediaSelectionOptionsPersistentID, s), n)
    );
  }
  setPreferredSubtitleTrackForItem(t, i, s) {
    var l, u;
    const n = (l = t[0]) == null ? void 0 : l.MediaSelectionOptionsInterstitialId,
      a = ms(t, i, s),
      o = this.session.getEnabledSubtitleMediaOptionForItem({ interstitialAssetId: n });
    (G.debug("setPreferredSubtitleTrackForItem - preferred track", n, a, o),
      !(
        (!o && !a) ||
        (o && (a == null ? void 0 : a.MediaSelectionOptionsPersistentID) === o.MediaSelectionOptionsPersistentID)
      ) && this.setSubtitleTrack((u = a == null ? void 0 : a.MediaSelectionOptionsPersistentID) != null ? u : -1, n));
  }
  setAudioAndSubtitleForItem(t, i) {
    G.debug("setAudioAndSubtitleForItem", { track: t, interstitialId: i });
    const s = i ? this.session.getAudioMediaOptionsForItem({ interstitialAssetId: i }) : this.session.audioMediaOptions,
      n = this.setPreferredAudioTrackForItem(s, t);
    G.debug("determining subtitle track due to audio track change");
    const a = i
      ? this.session.getSubtitleMediaOptionsForItem({ interstitialAssetId: i })
      : this.session.subtitleMediaOptions;
    this.setPreferredSubtitleTrackForItem(a, n);
  }
  setSubtitleForInterstitial(t, i) {
    const s = this.session.getSubtitleMediaOptionsForItem({ interstitialAssetId: i }),
      n = this.session.getEnabledAudioMediaOptionForItem({ interstitialAssetId: i });
    this.setPreferredSubtitleTrackForItem(s, n, t);
  }
  pruneInterstitialItems() {
    (G.debug("pruneInterstitialItems"),
      this._interstitialItemIds.forEach((t) => {
        const i = this.session.getAudioMediaOptionsForItem({ interstitialAssetId: t });
        (!i || i.length === 0) &&
          (G.debug(`Removing '${t}' from _interstitialItemIds`), this._interstitialItemIds.delete(t));
      }));
  }
  setTrackOnInterstitialItems({ track: t, setTrack: i }) {
    (G.debug("setTrackOnInterstitialItems", t),
      this.pruneInterstitialItems(),
      G.debug("Updating interstitial items:", this._interstitialItemIds));
    let s = 0;
    this._interstitialItemIds.forEach((n) => {
      (setTimeout(() => i(t, n), s), (s += 500));
    });
  }
  setAudioTrack(t, i) {
    const { session: s } = this;
    i
      ? (G.debug("Set audio track for interstitial", i, t), s.setInterstitialAudioSelectedPersistentId(i, t))
      : (G.debug("Set audio track for primary content", t), (s.audioSelectedPersistentID = t));
  }
  setSubtitleTrack(t, i) {
    const { session: s } = this;
    if (!i) {
      (G.debug("Set subtitle track for primary content", t), (s.subtitleSelectedPersistentID = t));
      return;
    }
    try {
      (G.debug("Set subtitle track for interstitial", i, t), s.setInterstitialSubtitleSelectedPersistentId(i, t));
    } catch (n) {
      G.error("Failed to set subtitle track for interstitial", i, t, n);
    }
  }
  get audioMediaOptions() {
    const { currentInterstitialId: t, session: i } = this;
    return i ? (t ? i.getAudioMediaOptionsForItem({ interstitialAssetId: t }) : i.audioMediaOptions) : [];
  }
  get currentAudioMediaOption() {
    var s;
    const { currentInterstitialId: t, session: i } = this;
    if (i)
      return t
        ? i.getEnabledAudioMediaOptionForItem({ interstitialAssetId: t })
        : (s = this.audioMediaOptions) == null
          ? void 0
          : s.find((n) => n.MediaSelectionOptionsPersistentID === i.audioSelectedPersistentID);
  }
  get currentSubtitleMediaOption() {
    var s;
    const { currentInterstitialId: t, session: i } = this;
    if (i)
      return t
        ? i.getEnabledSubtitleMediaOptionForItem({ interstitialAssetId: t })
        : (s = this.subtitleMediaOptions) == null
          ? void 0
          : s.find((n) => n.MediaSelectionOptionsPersistentID === i.subtitleSelectedPersistentID);
  }
  get subtitleMediaOptions() {
    const { currentInterstitialId: t, session: i } = this;
    return i ? (t ? i.getSubtitleMediaOptionsForItem({ interstitialAssetId: t }) : i.subtitleMediaOptions) : [];
  }
  audioTracksUpdated(t = []) {
    const i = t.map(Ep);
    ((this._audioTracks = i), this.dispatchEvent(bs, i));
  }
  handleItemPlaying(t, i) {
    var o, l;
    G.debug("handleItemPlaying", i);
    const { itemId: s, interstitialId: n } = i;
    (this.updateAudioAndTextTracks({ itemId: s }),
      n
        ? (this.dispatchEvent(Zr, {
            selectedId: (o = this.currentAudioMediaOption) == null ? void 0 : o.MediaSelectionOptionsPersistentID,
          }),
          this.dispatchEvent(ei, {
            selectedId: (l = this.currentSubtitleMediaOption) == null ? void 0 : l.MediaSelectionOptionsPersistentID,
          }))
        : this.handlePrimaryItemPlaying());
    const a = this.currentSubtitleMediaOption;
    this.dispatchEvent(ko, {
      forcedTextTrack: a && a.MediaSelectionOptionsDisplaysNonForcedSubtitles === 0 ? ao(a) : void 0,
    });
  }
  handlePrimaryItemPlaying() {
    var l;
    const {
        audioMediaOptions: t,
        currentAudioMediaOption: i,
        currentSubtitleMediaOption: s,
        subtitleMediaOptions: n,
      } = this,
      a = no(t);
    a && (i == null ? void 0 : i.MediaSelectionOptionsPersistentID) === a.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(Zr, { selectedId: i == null ? void 0 : i.MediaSelectionOptionsPersistentID })
      : a && this.setAudioTrack(a.MediaSelectionOptionsPersistentID);
    const o = ms(n, a);
    o && (s == null ? void 0 : s.MediaSelectionOptionsPersistentID) === o.MediaSelectionOptionsPersistentID
      ? this.dispatchEvent(ei, { selectedId: s == null ? void 0 : s.MediaSelectionOptionsPersistentID })
      : this.setSubtitleTrack((l = o == null ? void 0 : o.MediaSelectionOptionsPersistentID) != null ? l : -1);
  }
  updateAudioAndTextTracks(t) {
    const i = this.session.getAudioMediaOptionsForItem(t),
      s = this.session.getSubtitleMediaOptionsForItem(t);
    (G.debug("updateAudioAndTextTracks - updating audio and text tracks with options:", i, s),
      this.audioTracksUpdated(i),
      this.subtitleTracksUpdated(s));
  }
  handleAudioTrackSwitched(t, i) {
    var n;
    if (
      (G.debug("handleAudioTrackSwitched", i, "current option: ", this.currentAudioMediaOption),
      !this.isEventForCurrentItem(i))
    )
      return;
    const s = (n = i == null ? void 0 : i.track) == null ? void 0 : n.persistentID;
    this.dispatchEvent(Zr, { selectedId: s });
  }
  handleInlineStylesParsed(t, i) {
    this.dispatchEvent(Io, i);
  }
  handleManifestParsed(t, i) {
    G.debug("handleManifestParsed", i);
    const { audioTracks: s, interstitialId: n, subtitleTracks: a } = i,
      o = s.map(so),
      l = a.map(so);
    if (n && o.length > 0) {
      this._interstitialItemIds.add(n);
      const u = this.setPreferredAudioTrackForItem(o);
      this.setPreferredSubtitleTrackForItem(l, u);
    }
    Im.enabled || this.handleItemPlaying("hlsItemPlaying", i);
  }
  handleSessionDataComplete(t, i) {
    var s;
    (s = i == null ? void 0 : i.itemList) == null ||
      s.forEach((n) => {
        if (n["DATA-ID"] === "_hls.localized-rendition-names" && n.VALUE)
          try {
            ((this._localizedRenditionNames = JSON.parse(n.VALUE)),
              this._audioTracks.forEach((a) => {
                var l;
                const o = (l = this._localizedRenditionNames) == null ? void 0 : l[a.label];
                o && (a.localizedRenditionNames = o);
              }),
              this.dispatchEvent(bs, this._audioTracks));
          } catch (a) {
            G.error("Failed to parse _hls.localized-rendition-names", a);
            return;
          }
      });
  }
  handleSubtitleTrackSwitch(t, i) {
    (G.debug("handleSubtitleTrackSwitch", i), this.isEventForCurrentItem(i) && this.dispatchEvent(ei, i));
  }
  subtitleTracksUpdated(t = []) {
    const i = [];
    (t.forEach((s) => {
      s.MediaSelectionOptionsDisplaysNonForcedSubtitles !== 0 && i.push(ao(s));
    }),
      (this._textTracks = i),
      this.dispatchEvent(Po, i));
  }
  isEventForCurrentItem(t) {
    return this.currentInterstitialId ? t.interstitialId === this.currentInterstitialId : !t.interstitialId;
  }
  destroy() {
    this._isDestroyed = !0;
    const {
      AUDIO_TRACK_SWITCHED: t,
      INLINE_STYLES_PARSED: i,
      ITEM_PLAYING: s,
      MANIFEST_PARSED: n,
      SESSION_DATA_COMPLETE: a,
      SUBTITLE_TRACK_SWITCH: o,
    } = window.Hls.Events;
    (this.session.off(t, this.handleAudioTrackSwitched),
      this.session.off(i, this.handleInlineStylesParsed),
      this.session.off(s, this.handleItemPlaying),
      this.session.off(n, this.handleManifestParsed),
      this.session.off(a, this.handleSessionDataComplete),
      this.session.off(o, this.handleSubtitleTrackSwitch));
  }
}
_t([S()], lt.prototype, "setAudioAndSubtitleForItem", 1);
_t([S()], lt.prototype, "setSubtitleForInterstitial", 1);
_t([S()], lt.prototype, "handleItemPlaying", 1);
_t([S()], lt.prototype, "handleAudioTrackSwitched", 1);
_t([S()], lt.prototype, "handleInlineStylesParsed", 1);
_t([S()], lt.prototype, "handleManifestParsed", 1);
_t([S()], lt.prototype, "handleSessionDataComplete", 1);
_t([S()], lt.prototype, "handleSubtitleTrackSwitch", 1);
class km {
  constructor(e) {
    c(this, "hls");
    c(this, "lastPosition");
    c(this, "lastPromise");
    this.hls = e;
  }
  loadPreviewImage(e) {
    return this.lastPosition === e
      ? this.lastPromise
      : ((this.lastPosition = e),
        (this.lastPromise = new Promise((t, i) => {
          this.hls.loadImageIframeData$(e).subscribe((n) => {
            const { data: a } = n,
              o = new Blob([a], { type: "image/jpeg" });
            t(o);
          });
        })),
        this.lastPromise);
  }
}
var Pm = Object.defineProperty,
  Am = Object.getOwnPropertyDescriptor,
  Je = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Am(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Pm(e, t, s), s);
  };
const cn = { bufferStalledError: "bufferStalledError", keySystemGenericError: "keySystemGenericError" },
  wm = new Set([m.Reason.DEVICE_LIMIT, m.Reason.GEO_BLOCK, m.Reason.WIDEVINE_CDM_EXPIRED]),
  ti = Se.register("mk-hlsjs-interstitial-playback"),
  Ao = Se.register("mk-hlsjs-item-preloading"),
  Rm = Fi.register("mk-hlsjs-config-overrides"),
  Cm = Se.get("mk-block-report-cdn-server"),
  Om = (r) => {
    const { Hls: e } = window;
    if (e && Cm) {
      const t = mt(e.DefaultConfig.fragLoadPolicy);
      ((t.default.reportCDNServer = !1), (t.customURL.reportCDNServer = !1), (r.fragLoadPolicy = t));
    }
  },
  Dm = (r) => {
    const e = Rm.value;
    e && typeof e == "object" && Object.assign(r, e);
  };
class Ae extends jn {
  constructor(t) {
    var i, s, n;
    super(t);
    c(this, "playerName", "HlsJsVideoPlayer");
    c(this, "_hlsSession");
    c(this, "_hlsPreviewImageLoader");
    c(this, "_hlsJsTracks");
    c(this, "_license");
    c(this, "_rtcTracker");
    c(this, "_levels");
    c(this, "_channelsByGroup", {});
    c(this, "_currentLevel");
    c(this, "_unrecoverableError");
    c(this, "_isMediaAttached", !1);
    c(this, "_integratedTimelineDuration");
    c(this, "hlsScriptURL");
    c(this, "appInfo");
    c(this, "_manifestParsed", !1);
    c(this, "playbackDataStore", {});
    ((this._rtcTracker = (i = t == null ? void 0 : t.playbackServices) == null ? void 0 : i.getRTCStreamingTracker()),
      (this._license = t.services.license),
      (this.hlsScriptURL = (s = t.bag) == null ? void 0 : s.urls.hls),
      (this.appInfo = (n = t.bag) == null ? void 0 : n.app));
  }
  get keySystem() {
    return this.services.runtime.preferredKeySystem;
  }
  get shouldDispatchErrors() {
    return !this.userInitiated || this._playbackDidStart;
  }
  get supportsPreviewImages() {
    var t, i;
    return this._manifestParsed
      ? !this.services.runtime.isMobile &&
          !!(
            (i = (t = this._hlsSession) == null ? void 0 : t.iframeVariants) != null &&
            i.some((s) => (s == null ? void 0 : s.imageCodec) === "mjpg")
          )
      : !1;
  }
  get currentPlayingDate() {
    var t;
    return (t = this._hlsSession) == null ? void 0 : t.playingDate;
  }
  get isPlayingAtLiveEdge() {
    var i;
    const t = this._hlsSession;
    return !t || !((i = this.nowPlayingItem) != null && i.isLinearStream) ? !1 : !!t.isPlayingAtLive;
  }
  get seekableTimeRanges() {
    const t = this._hlsSession;
    return t
      ? t.seekableTimeRanges
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
    var i, s;
    let t = {};
    return (
      ti.enabled &&
        (t = (i = this._hlsSession) == null ? void 0 : i.getCurrentIntegratedTimelineSegmentAndCurrentTime()),
      (s = t == null ? void 0 : t.targetTime) != null ? s : super.currentPlaybackTime
    );
  }
  async initializeExtension() {
    var t;
    try {
      if (!this.hlsScriptURL) throw new Error("HLS.js script URL is not configured");
      await Promise.all([Wi(this.hlsScriptURL), (t = this._rtcTracker) == null ? void 0 : t.loadScript()]);
    } catch (i) {
      throw (h.error(`hlsjs-video-player failed to load script ${this.hlsScriptURL}`, i), i);
    }
  }
  destroy() {
    (h.debug("hlsjs-video-player.destroy"),
      this.destroyHlsPlayer(),
      this.unloadPlaybackItem("current"),
      this.unloadPlaybackItem("next"),
      super.destroy());
  }
  destroyHlsPlayer() {
    var y;
    if (
      (h.debug("hlsjs-video-player.destroyHlsPlayer"),
      (y = this._hlsJsTracks) == null || y.destroy(),
      !this._hlsSession)
    )
      return;
    const {
        DATERANGE_UPDATED: t,
        ERROR: i,
        INTERNAL_ERROR: s,
        INTERSTITIALS_UPDATED: n,
        MANIFEST_PARSED: a,
        KEY_REQUEST_STARTED: o,
        LICENSE_CHALLENGE_CREATED: l,
        LEVEL_SWITCHED: u,
        UNRESOLVED_URI_LOADING: d,
      } = window.Hls.Events,
      p = this._hlsSession;
    (this.detachMedia(),
      p.off(i, this.handleHlsError),
      p.off(s, this.handleHlsError),
      p.off(a, this.handleManifestParsed),
      p.off(o, this.handleKeyRequestStarted),
      p.off(l, this.handleLicenseChallengeCreated),
      p.off(u, this.handleLevelSwitched),
      p.off(t, this.handleDaterangeUpdated),
      ti.enabled && p.off(n, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && p.off(d, this.handleUnresolvedUriLoading),
      p.destroy(),
      (window.hlsSession = void 0),
      (this._hlsSession = void 0));
  }
  async stopMediaAndCleanup(t = V.stopped) {
    (h.debug("hlsjs-video-player.stopMediaAndCleanup", t),
      await super.stopMediaAndCleanup(t),
      this.playbackDataStore.next ? this.unloadPlaybackItem("current") : this.destroy());
  }
  async playHlsStream(t, i, s = {}) {
    var w;
    (h.debug("hlsjs-video-player.playHlsStream", t, i),
      (this._unrecoverableError = void 0),
      (this._manifestParsed = !1),
      (this.playbackDataStore.next && this.playbackDataStore.next.id === (i == null ? void 0 : i.id)) ||
        (this.unloadNextItem(), this.destroyHlsPlayer()),
      this._hlsSession || this.createHlsPlayer(i),
      this.ensureMediaElementInDocument(),
      this.setupTrackManagers(this._hlsJsTracks));
    const a = { requiresCDMAttachOnStart: this.keySystem !== void 0 },
      o = (M, $) => {
        var me;
        return ((me = $ == null ? void 0 : $.keyURLs) == null ? void 0 : me[M]) !== void 0;
      };
    this.keySystem === "widevine" &&
      o("widevine-cert-url", i) &&
      ((a.maxSecurityLevel = "WIDEVINE_SOFTWARE"),
      (a.keySystemConfig = {
        initDataTypes: ["cenc", "keyids"],
        distinctiveIdentifier: "optional",
        persistentState: "required",
      }));
    const l = {
        itemId: i == null ? void 0 : i.id,
        subs: "accepts-css",
        platformInfo: a,
        appData: { serviceName: (w = this.appInfo) == null ? void 0 : w.name },
      },
      { _rtcTracker: u, _hlsSession: d } = this;
    let p;
    if (u) {
      p = u.reportingAgent;
      const M = u.prepareReportingAgent(i);
      M !== void 0 && (l.appData.reportingAgent = M);
    }
    (h.debug("RTC: loadSource with load options", l),
      this.services.manifest.personalizedManifests &&
        ((t = t.replace("https://", "manifest://")), h.info("Manifest already loaded, passing url to HLSJS", t)),
      i !== void 0 && this.setCurrentPlaybackItem(i));
    const { startTime: y, startTimestamp: g } = s,
      k = g ? new Date(g) : y;
    (d == null || d.loadSource(t, l, k),
      this.attachMedia(),
      i !== void 0 &&
        (this.keySystem === "fairplay" && o("hls-key-cert-url", i)
          ? d == null || d.setProtectionData({ fairplaystreaming: { serverCertUrl: i.keyURLs["hls-key-cert-url"] } })
          : o("widevine-cert-url", i) &&
            (d == null || d.setProtectionData({ widevine: { serverCertUrl: i.keyURLs["widevine-cert-url"] } })),
        (i.state = q.ready)),
      p == null || p.destroy(),
      d == null || d.setRate(1));
  }
  async preloadItem(t, i) {
    return this.preloadNextItem(t, i);
  }
  async preloadNextItem(t, i) {
    var n;
    if ((h.trace("hlsjs-video-player.preloadNextItem", t, i), Ao.value === !1)) {
      h.info("hlsjs-video-player.preloadNextItem - not preloading item; disabled by dev flag");
      return;
    }
    const s = this.playbackDataStore.next;
    if (s !== void 0 && s.id === t.id) {
      h.info(`Source already preloaded for item "${t}"`);
      return;
    }
    (h.info(`Prefetching HLS source for item "${t}"`),
      this.unloadPlaybackItem("next"),
      (this.playbackDataStore.next = { id: t.id, item: t, asset: void 0 }),
      (n = this._hlsSession) == null || n.prefetchSource(Mr(t, { ...i, drmUsed: this.keySystem }), { itemId: t.id }));
  }
  async unloadNextItem(t) {
    var i;
    (h.debug("hlsjs-video-player.unloadNextItem", t),
      (t === void 0 || t.id === ((i = this.playbackDataStore.next) == null ? void 0 : i.id)) &&
        this.unloadPlaybackItem("next"));
  }
  async unloadPlaybackItem(t) {
    var s, n;
    h.trace("unloadPlaybackItem(...)", t);
    const i = this.playbackDataStore[t];
    ((this.playbackDataStore[t] = void 0),
      h.debug(`Reset ${i !== void 0 ? "occupied" : "unoccupied"} playback slot: ${t}`),
      i !== void 0 &&
        i.licenseChallenge !== void 0 &&
        (h.debug(`Revoking license for playback slot: ${t}`),
        this._license.revokeLicense(i.item, i.licenseChallenge, {
          userInitiated: (n = (s = i.config) == null ? void 0 : s.userInitiated) != null ? n : !1,
        })));
  }
  createHlsPlayer(t) {
    const { Hls: i } = window,
      s = zn.get(),
      { os: n, browser: a } = this.services.runtime,
      o = {
        attemptErrorRecovery: !0,
        clearMediaKeysOnPromise: !1,
        customTextTrackCueRenderer: !1,
        debug: !!s,
        debugLevel: s,
        enableItemPreloading: Ao.value !== !1,
        enableIFramePreloading: !1,
        enablePerformanceLogging: !!s,
        enablePlayReadyKeySystem: !0,
        enableQueryParamsForITunes: !this.services.manifest.personalizedManifests,
        enableRtcReporting: this._rtcTracker !== void 0,
        keySystemPreference: this.keySystem === "fairplay" ? "fairplaystreaming" : this.keySystem,
        useMediaKeySystemAccessFilter: !0,
        maintainMediaKeysBetweenSessions: !1,
        nativeControlsEnabled: n.isAndroid || a.isSafari,
        enableContentSteering: !0,
        allowFastSwitchUp: !0,
        liveAllowLowLatencyPlayback: !0,
        rtcErrStackNumLines: 100,
        rtcLogHistoryNumLines: 100,
        useMediaCapabilities: !0,
        allowEagerAppendInitSegment: !1,
        forwardItemLimit: 3,
      };
    ((ti.enabled || (t != null && t.isPodcastEpisode)) &&
      Object.assign(o, { gapless: !0, enableInterstitialPlayback: !0 }),
      Om(o),
      Dm(o));
    const l = new i(o),
      {
        DATERANGE_UPDATED: u,
        ERROR: d,
        INTERNAL_ERROR: p,
        INTERSTITIALS_UPDATED: y,
        KEY_REQUEST_STARTED: g,
        LEVEL_SWITCHED: k,
        LICENSE_CHALLENGE_CREATED: w,
        MANIFEST_PARSED: M,
        UNRESOLVED_URI_LOADING: $,
      } = i.Events;
    (l.on(d, this.handleHlsError),
      l.on(p, this.handleHlsError),
      l.on(M, this.handleManifestParsed),
      l.on(g, this.handleKeyRequestStarted),
      l.on(w, this.handleLicenseChallengeCreated),
      l.on(k, this.handleLevelSwitched),
      l.on(u, this.handleDaterangeUpdated),
      ti.enabled && l.on(y, this.handleInterstitialUpdated),
      this.services.manifest.personalizedManifests && l.on($, this.handleUnresolvedUriLoading),
      (this._hlsSession = l),
      (window.hlsSession = l),
      (this._hlsJsTracks = new lt(l)),
      (this._hlsPreviewImageLoader = new km(this._hlsSession)));
  }
  setCurrentPlaybackItem(t) {
    var s;
    this.unloadPlaybackItem("current");
    let i = { id: t.id, item: t, asset: void 0, config: { userInitiated: this.userInitiated } };
    return (
      t.id === ((s = this.playbackDataStore.next) == null ? void 0 : s.id) &&
        ((i = { ...this.playbackDataStore.next, ...i }), (this.playbackDataStore.next = void 0)),
      (this.playbackDataStore.current = i),
      i
    );
  }
  async handleUnresolvedUriLoading(t, i) {
    var l;
    const s = i.uri,
      n = s.replace("manifest://", "https://");
    h.debug("handleUnresolvedUriLoading for uri ", s);
    const a = this.services.manifest,
      o = (l = await a.getManifest(n)) != null ? l : await a.fetchManifest(n);
    if (!o) {
      h.error(`No cached manifest for ${n}`);
      return;
    }
    (await a.clearManifest(n), i.resolve({ uri: n, status: 200, data: o.content }));
  }
  handleInterstitialUpdated(t, i) {
    (h.debug("handleInterstitialUpdated - ", t, i),
      i.integratedTimeline.duration && (this._integratedTimelineDuration = i.integratedTimeline.duration));
  }
  handleLevelSwitched(t, i) {
    var o, l;
    if (!i) return;
    const s = i,
      { audioCodec: n, mediaOptionId: a } = s;
    !n ||
      !a ||
      ((o = this._currentLevel) == null ? void 0 : o.mediaOptionId) === (s == null ? void 0 : s.mediaOptionId) ||
      ((this._currentLevel = s),
      this._dispatcher.publish(P.hlsLevelUpdated, {
        level: s,
        userInitiated: this.userInitiated,
        item: this.nowPlayingItem,
        position: this.currentPlaybackTime,
        playingDate: (l = this._hlsSession) == null ? void 0 : l.playingDate,
      }));
  }
  handleDaterangeUpdated(t, i) {
    (h.info("handleDaterangeUpdated", JSON.stringify(i)), this._dispatcher.publish(T.hlsDaterangeUpdated, i));
  }
  handleHlsError(t, i) {
    var l, u;
    if ((h.warn("HLS.js error", JSON.stringify(i)), this._unrecoverableError)) return;
    let s = new v("mk-193", m.Reason.UNSUPPORTED_ERROR, i.reason);
    s.data = i;
    const { bufferStalledError: n, keySystemGenericError: a } = cn;
    if (i.details === a) {
      this._dispatcher.publish(a, s);
      return;
    }
    let o = !1;
    if (
      (i.details === n &&
        i.stallType === "Seek" &&
        ((l = i.response) == null ? void 0 : l.code) === -12909 &&
        ((s = new m(m.Reason.BUFFER_STALLED_ERROR, i.stallType)),
        (s.data = { stallType: i.stallType, code: (u = i.response) == null ? void 0 : u.code }),
        (o = !0)),
      i.reason === "output-restricted" && (s = new m(m.Reason.OUTPUT_RESTRICTED, i.reason)),
      i.fatal)
    )
      if ((this.destroy(), this.shouldDispatchErrors || o)) this._dispatcher.publish(T.mediaPlaybackError, s);
      else throw s;
  }
  async handleManifestParsed(t, i) {
    var s, n;
    ((this._manifestParsed = !0),
      h.debug("handleManifestParsed", i),
      (this._levels = (s = i.levels) != null ? s : []),
      (this._channelsByGroup = ((n = i.audioTracks) != null ? n : []).reduce(
        (a, o) => ((a[o.groupId] = o.channels), a),
        {},
      )));
  }
  handleKeyRequestStarted(t, i) {
    (h.debug("hlsjs-video.handleKeyRequestStarted"), i.resolve({}));
  }
  async handleLicenseChallengeCreated(t, i) {
    var o, l;
    h.trace("handleLicenseChallengeCreated", i);
    const { userInitiated: s } = this,
      n = (o = i.appItemIds) == null ? void 0 : o[0];
    if (n === void 0)
      throw new v("mk-185", v.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const a =
      ((l = this.playbackDataStore.next) == null ? void 0 : l.id) === n
        ? this.playbackDataStore.next
        : this.playbackDataStore.current;
    if (a === void 0)
      throw new v("mk-186", v.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    try {
      const u = await this._license.requestLicense(a.item, i, { userInitiated: s }),
        d = { statusCode: u.status };
      u != null && u.license && (this.keySystem === "fairplay" ? (d.ckc = qt(u.license)) : (d.license = qt(u.license)));
      const p = u["renew-after"];
      (p && (d.renewalDate = new Date(Date.now() + p * 1e3)),
        (a.licenseChallenge = i),
        (a.licenseKey = d),
        (a.config = { stkn: u.stkn, userInitiated: s }),
        i.resolve(d));
    } catch (u) {
      if (this._unrecoverableError) return;
      const d = u.data,
        p = {};
      ((d == null ? void 0 : d.status) !== void 0 && (p.statusCode = parseInt(d.status, 10)),
        h.warn("Passing license response error to Hls.js", p),
        i.resolve(p),
        m.isMKError(u) &&
          wm.has(u.reason) &&
          ((this._unrecoverableError = u),
          this.resetDeferredPlay(),
          await this.stop({ endReasonType: R.FAILED_TO_LOAD, userInitiated: s })),
        this.onPlaybackLicenseError(u));
    }
  }
  async seekToTime(t) {
    this._hlsSession
      ? (h.debug("hlsjs-video: hls seekTo", t), (this._hlsSession.seekTo = t))
      : (h.debug("hlsjs-video: media element seek to", t), (this._targetElement.currentTime = t));
  }
  async loadPreviewImage(t) {
    var i;
    return (i = this._hlsPreviewImageLoader) == null ? void 0 : i.loadPreviewImage(t);
  }
  attachMedia() {
    var t;
    this._isMediaAttached ||
      ((t = this._hlsSession) == null || t.attachMedia(this.video), (this._isMediaAttached = !0));
  }
  detachMedia() {
    var t;
    ((t = this._hlsSession) == null || t.detachMedia(), (this._isMediaAttached = !1));
  }
}
Je([S()], Ae.prototype, "handleUnresolvedUriLoading", 1);
Je([S()], Ae.prototype, "handleInterstitialUpdated", 1);
Je([S()], Ae.prototype, "handleLevelSwitched", 1);
Je([S()], Ae.prototype, "handleDaterangeUpdated", 1);
Je([S()], Ae.prototype, "handleHlsError", 1);
Je([S()], Ae.prototype, "handleManifestParsed", 1);
Je([S()], Ae.prototype, "handleKeyRequestStarted", 1);
Je([S()], Ae.prototype, "handleLicenseChallengeCreated", 1);
Je([tr(250)], Ae.prototype, "seekToTime", 1);
Je([_m(250)], Ae.prototype, "loadPreviewImage", 1);
var Nm = Object.defineProperty,
  Lm = Object.getOwnPropertyDescriptor,
  Cl = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Lm(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Nm(e, t, s), s);
  };
class Qn {
  constructor(e) {
    c(this, "_isDestroyed", !1);
    c(this, "mediaElement");
    c(this, "metadataTrack");
    c(this, "_activeMetadata");
    c(this, "onchange");
    ((this.onchange = e == null ? void 0 : e.onchange),
      (e == null ? void 0 : e.element) !== void 0 && this.attach(e.element));
  }
  get activeMetadata() {
    return this._activeMetadata;
  }
  get activeCues() {
    var t;
    const e = (t = this.metadataTrack) == null ? void 0 : t.activeCues;
    return e != null ? Array.from(e) : [];
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  get tracks() {
    return this.metadataTrack !== void 0 ? [this.metadataTrack] : [];
  }
  get currentTrack() {
    return this.metadataTrack;
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
    var t;
    if (this.mediaElement !== void 0)
      for (let i = 0; i < this.mediaElement.textTracks.length; i++) {
        const s = this.mediaElement.textTracks[i];
        if (s.kind === "metadata") {
          this.metadataTrack === void 0
            ? ((this.metadataTrack = s), this.metadataTrack.addEventListener("cuechange", this.onCueChange))
            : G.warning(`Skipping registering metadata TextTrack with id "${(t = s.id) != null ? t : "unknown"}"`);
          break;
        }
      }
  }
  onCueChange(e) {
    var t, i;
    if ((G.debug("Processing metadata cues"), this.activeCues === void 0 || this.activeCues.length <= 0))
      (this.activeMetadata !== void 0 && ((t = this.onchange) == null || t.call(this)),
        (this._activeMetadata = void 0));
    else {
      const s = zy(this.activeCues);
      (this.activeMetadata === void 0 || !s.equals(this.activeMetadata)) &&
        (G.debug("Track TimedMetadata changed", s),
        (this._activeMetadata = s),
        (i = this.onchange) == null || i.call(this, s));
    }
  }
  saveTrack() {}
  restoreSelectedTrack() {}
  destroy() {
    ((this._isDestroyed = !0), (this.onchange = void 0), this.detach());
  }
}
Cl([S()], Qn.prototype, "registerMetadataTrack", 1);
Cl([S()], Qn.prototype, "onCueChange", 1);
var Mm = Object.defineProperty,
  Um = Object.getOwnPropertyDescriptor,
  xt = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Um(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Mm(e, t, s), s);
  };
const wo = Se.register("mk-hlsjs-item-preloading"),
  xm = { keySystemGenericError: "keySystemGenericError" },
  Fm = new Set([m.Reason.DEVICE_LIMIT, m.Reason.GEO_BLOCK]),
  U = h.createChild("hlsjs-audio"),
  Km = Fi.register("mk-hlsjs-config-overrides"),
  Vm = (r) => {
    const e = Km.value;
    e && typeof e == "object" && Object.assign(r, e);
  };
class Tt extends Bi {
  constructor(t) {
    var i, s, n;
    super(t);
    c(this, "currentAudioTrack");
    c(this, "currentTextTrack");
    c(this, "textTracks", []);
    c(this, "audioTracks", []);
    c(this, "userInitiated", !1);
    c(this, "mediaElement");
    c(this, "mediaPlayerType", "hlsjs-audio");
    c(this, "playerName", "HlsJsAudioPlayer");
    c(this, "hls");
    c(this, "supportsPreviewImages", !1);
    c(this, "extension");
    c(this, "_license");
    c(this, "_rtcTracker");
    c(this, "_currentLevel");
    c(this, "_isMediaAttached", !1);
    c(this, "_unrecoverableError");
    c(this, "hlsScriptURL");
    c(this, "appInfo");
    c(this, "id3MetadataManager");
    c(this, "playbackDataStore", {});
    ((this._rtcTracker = (i = t == null ? void 0 : t.playbackServices) == null ? void 0 : i.getRTCStreamingTracker()),
      (this._license = t.services.license),
      (this.appInfo = (s = t.bag) == null ? void 0 : s.app),
      (this.hlsScriptURL = (n = t.bag) == null ? void 0 : n.urls.hls),
      (this.id3MetadataManager = new Qn({
        onchange: (a) => {
          var l;
          const o = {
            item: this.nowPlayingItem,
            metadata: a,
            position: this.currentPlaybackTime,
            playingDate: this.currentPlayingDate,
          };
          (U.debug("Dispatching bufferTimedMetadataDidChange", o),
            (l = this._dispatcher) == null || l.publish(Ue.bufferTimedMetadataDidChange, o));
        },
      })));
  }
  async loadPreviewImage() {}
  get _targetElement() {
    return this.mediaElement;
  }
  async setPresentationMode(t) {
    return Promise.resolve();
  }
  get keySystem() {
    return this.services.runtime.preferredKeySystem;
  }
  get shouldDispatchErrors() {
    return !this.userInitiated || this._playbackDidStart;
  }
  get currentPlayingDate() {
    var t;
    return (t = this.hls) == null ? void 0 : t.playingDate;
  }
  get isPlayingAtLiveEdge() {
    var i;
    const t = this.hls;
    return !t || !((i = this.nowPlayingItem) != null && i.isLinearStream) ? !1 : !!t.isPlayingAtLive;
  }
  async playItemFromEncryptedSource(t, i = !1, s = {}) {
    if ((U.trace("HlsJsAudioPlayer.playItemFromEncryptedSource", t, s), this.playbackState === V.stopped)) {
      U.debug("hlsjsAudioPlayer.playItemFromEncryptedSource aborting playback because player is stopped");
      return;
    }
    (U.debug(`Playing Encrypted Item: ${gi(t)}`),
      (t.playbackType = Te.encryptedFull),
      (this.nowPlayingItem = t),
      (t.state = q.loading),
      (this.userInitiated = i),
      await this.playHlsStream(t.assetURL, t, s));
  }
  async initializeMediaElement() {
    const t = nl();
    ((t.autoplay = !1),
      (t.id = "apple-music-player"),
      (t.controls = !1),
      (t.muted = !1),
      (t.playbackRate = 1),
      (t.preload = "metadata"),
      (t.volume = 1),
      (this.mediaElement = t),
      document.body.appendChild(t),
      this.id3MetadataManager.attach(t),
      U.debug("initializedMediaElement", t));
  }
  get seekableTimeRanges() {
    const t = this.hls;
    return t
      ? t.seekableTimeRanges
      : this.currentPlaybackDuration
        ? [{ start: 0, end: this.currentPlaybackDuration }]
        : void 0;
  }
  async initializeExtension() {
    var t;
    try {
      if (!this.hlsScriptURL) throw new Error("HLS.js script URL is not configured");
      await Promise.all([Wi(this.hlsScriptURL), (t = this._rtcTracker) == null ? void 0 : t.loadScript()]);
    } catch (i) {
      throw (U.error(`hlsjs-audio-player failed to load script ${this.hlsScriptURL}`, i), i);
    }
  }
  async stopMediaElement() {
    (U.trace("HlsJsAudioPlayer.stopMediaElement()"), await super.stopMediaElement(), this.destroy());
  }
  async stopMediaAndCleanup(t = V.stopped) {
    (U.debug("HlsJsAudioPlayer.stopMediaAndCleanup", t),
      await super.stopMediaAndCleanup(t),
      this.unloadPlaybackItem("current"));
  }
  destroy() {
    if ((U.debug("HlsJsAudioPlayer.destroy()"), this.hls)) {
      const t = this.hls;
      this.detachMedia();
      const i = t.Events;
      (t.off(i.ERROR, this.handleHlsError),
        t.off(i.INTERNAL_ERROR, this.handleHlsError),
        t.off(i.MANIFEST_PARSED, this.handleManifestParsed),
        t.off(i.KEY_REQUEST_STARTED, this.handleKeyRequestStarted),
        t.off(i.LICENSE_CHALLENGE_CREATED, this.handleLicenseChallengeCreated),
        t.off(i.LEVEL_SWITCHED, this.handleLevelSwitched),
        t.destroy());
    }
    (this.id3MetadataManager.destroy(),
      this.unloadPlaybackItem("current"),
      this.unloadPlaybackItem("next"),
      super.destroy());
  }
  async playHlsStream(t, i, s = {}) {
    var d;
    (U.trace("HlsJsAudioPlayer.playHlsStream()", t, i, s),
      (this._unrecoverableError = void 0),
      U.debug("Initiating HLS.js player"),
      this.createHlsPlayer());
    let n, a;
    this.keySystem === "widevine" &&
      (U.debug("Setting Widevine specific HLS options"),
      (n = "WIDEVINE_SOFTWARE"),
      (a = { initDataTypes: ["cenc", "keyids"], distinctiveIdentifier: "optional", persistentState: "required" }));
    const o = {
        subs: "accepts-css",
        platformInfo: { requiresCDMAttachOnStart: this.keySystem !== void 0, maxSecurityLevel: n, keySystemConfig: a },
        appData: { serviceName: (d = this.appInfo) == null ? void 0 : d.name },
        itemId: i == null ? void 0 : i.id,
      },
      { _rtcTracker: l } = this;
    let u;
    if (l) {
      u = l.reportingAgent;
      const p = l.prepareReportingAgent(i);
      p !== void 0 && (o.appData.reportingAgent = p);
    }
    (i !== void 0 && this.setCurrentPlaybackItem(i),
      U.info(`Loading source into HLS.js: ${t}`),
      U.debug("Calling loadSource with options", o),
      this.hls.loadSource(t, o, s.startTime),
      this.attachMedia(),
      i &&
        (this.keySystem === "fairplay"
          ? (U.info(`Setting Protection Data URL for FairPlay: ${i.keyURLs["hls-key-cert-url"]}`),
            this.hls.setProtectionData({ fairplaystreaming: { serverCertUrl: i.keyURLs["hls-key-cert-url"] } }))
          : (U.info(`Setting Protection Data URL for Widevine: ${i.keyURLs["widevine-cert-url"]}`),
            this.hls.setProtectionData({ widevine: { serverCertUrl: i.keyURLs["widevine-cert-url"] } })),
        (i.state = q.ready)),
      u == null || u.destroy(),
      this.hls.setRate(1));
  }
  setCurrentPlaybackItem(t) {
    var s;
    this.unloadPlaybackItem("current");
    let i = { id: t.id, item: t, asset: void 0, config: { userInitiated: this.userInitiated } };
    return (
      t.id === ((s = this.playbackDataStore.next) == null ? void 0 : s.id) &&
        ((i = { ...this.playbackDataStore.next, ...i }), (this.playbackDataStore.next = void 0)),
      (this.playbackDataStore.current = i),
      i
    );
  }
  async preloadItem(t, i) {
    return this.preloadNextItem(t, i);
  }
  async preloadNextItem(t, i) {
    var s;
    if ((U.trace("preloadNextItem", t, i), wo.value !== !1)) {
      const n = this.playbackDataStore.next;
      if (n !== void 0 && n.id === t.id) {
        U.info(`Source already preloaded for item "${t}"`);
        return;
      }
      (U.info(`Prefetching HLS source for item "${t}"`),
        this.unloadPlaybackItem("next"),
        (this.playbackDataStore.next = { id: t.id, item: t, asset: void 0 }),
        (s = this.hls) == null || s.prefetchSource(Mr(t, { ...i, drmUsed: this.keySystem }), { itemId: t.id }));
    }
  }
  async unloadNextItem(t) {
    var i;
    (t === void 0 || t.id === ((i = this.playbackDataStore.next) == null ? void 0 : i.id)) &&
      this.unloadPlaybackItem("next");
  }
  async unloadPlaybackItem(t) {
    var s, n;
    const i = this.playbackDataStore[t];
    ((this.playbackDataStore[t] = void 0),
      i !== void 0 &&
        i.licenseChallenge !== void 0 &&
        this._license.revokeLicense(i.item, i.licenseChallenge, {
          userInitiated: (n = (s = i.config) == null ? void 0 : s.userInitiated) != null ? n : !1,
        }));
  }
  createHlsPlayer() {
    U.trace("HlsJsAudioPlayer.createHlsPlayer()");
    const { os: t } = this.services.runtime,
      { Hls: i } = window,
      s = zn.get(),
      n = {
        clearMediaKeysOnPromise: !1,
        debug: !!s,
        debugLevel: s,
        enableItemPreloading: wo.value !== !1,
        enablePerformanceLogging: !!s,
        enablePlayReadyKeySystem: !0,
        enableRtcReporting: this._rtcTracker !== void 0,
        keySystemPreference: this.keySystem === "fairplay" ? "fairplaystreaming" : this.keySystem,
        useMediaKeySystemAccessFilter: !0,
        nativeControlsEnabled: t.isAndroid,
        enableID3Cues: !0,
        rtcErrStackNumLines: 100,
        rtcLogHistoryNumLines: 100,
        useMediaCapabilities: !0,
        forwardItemLimit: 3,
      };
    (U.debug("Reading HLS.js option overrides from DevFlag"), Vm(n), U.debug("Constructing HLS instance", n));
    const a = new i(n);
    (U.debug(`Using HLS instance with ID ${a.sessionID}`, n),
      U.debug("Adding Event handlers for HLS instance"),
      a.on(i.Events.ERROR, this.handleHlsError),
      a.on(i.Events.INTERNAL_ERROR, this.handleHlsError),
      a.on(i.Events.MANIFEST_PARSED, this.handleManifestParsed),
      a.on(i.Events.KEY_REQUEST_STARTED, this.handleKeyRequestStarted),
      a.on(i.Events.LICENSE_CHALLENGE_CREATED, this.handleLicenseChallengeCreated),
      a.on(i.Events.LEVEL_SWITCHED, this.handleLevelSwitched),
      (this.hls = a));
  }
  handleLevelSwitched(t, i) {
    var o;
    if (!i) return;
    const s = i,
      { audioCodec: n, mediaOptionId: a } = s;
    !n ||
      !a ||
      ((o = this._currentLevel) == null ? void 0 : o.mediaOptionId) === (s == null ? void 0 : s.mediaOptionId) ||
      ((this._currentLevel = s), this._dispatcher.publish(P.hlsLevelUpdated, { level: s }));
  }
  handleHlsError(t, i) {
    if ((U.warn("HLS.js error", JSON.stringify(i)), this._unrecoverableError)) return;
    let s = new m(m.Reason.UNSUPPORTED_ERROR, i.reason);
    s.data = i;
    const { keySystemGenericError: n } = xm;
    if (i.details === n) {
      this._dispatcher.publish(n, s);
      return;
    }
    if ((i.reason === "output-restricted" && (s = new m(m.Reason.OUTPUT_RESTRICTED, i.reason)), i.fatal))
      if ((this.hls.destroy(), this.shouldDispatchErrors)) this._dispatcher.publish(T.mediaPlaybackError, s);
      else throw s;
  }
  async handleManifestParsed(t, i) {
    (U.debug("handleManifestParsed", i), (this.nowPlayingItem.state = q.ready));
  }
  handleKeyRequestStarted(t, i) {
    var n, a;
    U.trace("HlsJsAudioPlayer.handleKeyRequestStarted()", i);
    const s = (a = (n = i.appItemIds) == null ? void 0 : n[0]) != null ? a : "unknown";
    (U.debug(`Generating key request for item ${s} with URI ${i.keyuri}`), i.resolve({}));
  }
  async handleLicenseChallengeCreated(t, i) {
    var o, l;
    U.trace("HlsJsAudioPlayer.handleLicenseChallengeCreated()", i);
    const s = (o = i.appItemIds) == null ? void 0 : o[0];
    if (s === void 0)
      throw new v("mk-191", v.Reason.MEDIA_LICENSE, {
        description: "Unable to locate item id for license challenge request",
      });
    const n =
      ((l = this.playbackDataStore.next) == null ? void 0 : l.id) === s
        ? this.playbackDataStore.next
        : this.playbackDataStore.current;
    if (n === void 0)
      throw new v("mk-192", v.Reason.MEDIA_LICENSE, {
        description: "Unable to locate playback data for license challenge request",
      });
    U.debug(`Handling License Challenge for item ${s} with URI ${i.keyuri}`);
    const { userInitiated: a } = this;
    try {
      const u = await this._license.requestLicense(n.item, i, { userInitiated: a }),
        d = { statusCode: u.status };
      u != null && u.license && (this.keySystem === "fairplay" ? (d.ckc = qt(u.license)) : (d.license = qt(u.license)));
      const p = u["renew-after"];
      (p && (d.renewalDate = new Date(Date.now() + p * 1e3)),
        (n.licenseChallenge = i),
        (n.licenseKey = d),
        (n.config = { userInitiated: a }),
        U.debug(`Passing License Challenge Response for ${i.keyuri} to HLS`, d),
        i.resolve(d));
    } catch (u) {
      if (this._unrecoverableError) return;
      const d = u.data,
        p = {};
      ((d == null ? void 0 : d.status) !== void 0 && (p.statusCode = parseInt(d.status, 10)),
        U.warn("Passing license response error to Hls.js", p),
        i.resolve(p),
        m.isMKError(u) &&
          Fm.has(u.reason) &&
          ((this._unrecoverableError = u),
          this.resetDeferredPlay(),
          await this.stop({ endReasonType: R.FAILED_TO_LOAD, userInitiated: this.userInitiated })),
        this.onPlaybackLicenseError(u));
    }
  }
  onPlaybackLicenseError(t) {
    (this.resetDeferredPlay(), this._dispatcher.publish(W.playbackLicenseError, t));
  }
  async seekToTime(t) {
    this.hls
      ? (U.debug("hlsjs-audio: hls seekTo", t), (this.hls.seekTo = t))
      : (U.debug("hlsjs-audio: media element seek to", t), (this._targetElement.currentTime = t));
  }
  attachMedia() {
    var t;
    this._isMediaAttached || ((t = this.hls) == null || t.attachMedia(this.mediaElement), (this._isMediaAttached = !0));
  }
  detachMedia() {
    var t;
    ((t = this.hls) == null || t.detachMedia(), (this._isMediaAttached = !1));
  }
}
xt([S()], Tt.prototype, "handleLevelSwitched", 1);
xt([S()], Tt.prototype, "handleHlsError", 1);
xt([S()], Tt.prototype, "handleManifestParsed", 1);
xt([S()], Tt.prototype, "handleKeyRequestStarted", 1);
xt([S()], Tt.prototype, "handleLicenseChallengeCreated", 1);
xt([S()], Tt.prototype, "onPlaybackLicenseError", 1);
xt([tr(250)], Tt.prototype, "seekToTime", 1);
let Ol = "playback/Unknown-0.0.0";
function Bm(r) {
  return r
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
function $m(r) {
  var i, s;
  const e = (r == null ? void 0 : r.name) !== void 0 && r.name !== "" ? Bm(r.name) : "Unknown",
    t = (s = (i = r == null ? void 0 : r.build) != null ? i : r == null ? void 0 : r.version) != null ? s : "0.0.0";
  Ol = `playback/${e}-${t}`;
}
function Dl() {
  return Ol;
}
var Hm = ((r) => ((r.REPEAT = "REPEAT"), (r.SHUFFLE = "SHUFFLE"), (r.AUTOPLAY = "AUTOPLAY"), r))(Hm || {}),
  Ye = ((r) => (
    (r[(r.PREVIEW_ONLY = 0)] = "PREVIEW_ONLY"),
    (r[(r.MIXED_CONTENT = 1)] = "MIXED_CONTENT"),
    (r[(r.FULL_PLAYBACK_ONLY = 2)] = "FULL_PLAYBACK_ONLY"),
    (r[(r.SHAREPLAY_PARTICIPANT = 3)] = "SHAREPLAY_PARTICIPANT"),
    r
  ))(Ye || {});
const jm = "capabilitiesChanged",
  qm = "musickitconfigured",
  Wm = "autoplayEnabledDidChange",
  Ym = "musickitloaded",
  Gm = "mediaSkipAvailable",
  zm = "mediaRollEntered",
  Qm = "mediaUpNext",
  Xm = "needsGDPRDidChange",
  Jm = "queueIsReady",
  Zm = "queueItemsDidChange",
  eg = "queueItemForStartPosition",
  tg = "queuePositionDidChange",
  rg = "shuffleModeDidChange",
  ig = "repeatModeDidChange",
  sg = "musickitwebcomponentsloaded",
  _ = {
    configured: qm,
    loaded: Ym,
    audioTrackAdded: T.audioTrackAdded,
    audioTrackChanged: T.audioTrackChanged,
    audioTrackRemoved: T.audioTrackRemoved,
    authorizationStatusDidChange: tt.authorizationStatusDidChange,
    authorizationStatusWillChange: tt.authorizationStatusWillChange,
    bufferedProgressDidChange: T.bufferedProgressDidChange,
    capabilitiesChanged: jm,
    autoplayEnabledDidChange: Wm,
    drmUnsupported: T.drmUnsupported,
    eligibleForSubscribeView: tt.eligibleForSubscribeView,
    forcedTextTrackChanged: T.forcedTextTrackChanged,
    hlsDaterangeUpdated: T.hlsDaterangeUpdated,
    mediaCanPlay: T.mediaCanPlay,
    mediaElementCreated: T.mediaElementCreated,
    mediaItemStateDidChange: Js.mediaItemStateDidChange,
    mediaItemStateWillChange: Js.mediaItemStateWillChange,
    mediaPlaybackError: T.mediaPlaybackError,
    mediaSkipAvailable: Gm,
    mediaRollEntered: zm,
    mediaUpNext: Qm,
    metadataDidChange: T.metadataDidChange,
    authReflectionDidComplete: tt.authReflectionDidComplete,
    needsGDPRDidChange: Xm,
    nowPlayingItemDidChange: T.nowPlayingItemDidChange,
    nowPlayingItemWillChange: T.nowPlayingItemWillChange,
    playInitiated: "playInitiated",
    playbackBitrateDidChange: T.playbackBitrateDidChange,
    playbackDurationDidChange: T.playbackDurationDidChange,
    playbackProgressDidChange: T.playbackProgressDidChange,
    playbackRateDidChange: T.playbackRateDidChange,
    playbackStateDidChange: T.playbackStateDidChange,
    playbackStateWillChange: T.playbackStateWillChange,
    playbackTargetAvailableDidChange: T.playbackTargetAvailableDidChange,
    playbackTargetIsWirelessDidChange: T.playbackTargetIsWirelessDidChange,
    playbackTimeDidChange: T.playbackTimeDidChange,
    playbackVolumeDidChange: T.playbackVolumeDidChange,
    playerTypeDidChange: T.playerTypeDidChange,
    presentationModeDidChange: T.presentationModeDidChange,
    primaryPlayerDidChange: T.primaryPlayerDidChange,
    queueIsReady: Jm,
    queueItemsDidChange: Zm,
    queueItemForStartPosition: eg,
    queuePositionDidChange: tg,
    shuffleModeDidChange: rg,
    repeatModeDidChange: ig,
    storefrontCountryCodeDidChange: tt.storefrontCountryCodeDidChange,
    storefrontIdentifierDidChange: tt.storefrontIdentifierDidChange,
    textTrackAdded: T.textTrackAdded,
    textTrackChanged: T.textTrackChanged,
    textTrackRemoved: T.textTrackRemoved,
    timedMetadataDidChange: T.timedMetadataDidChange,
    userTokenDidChange: tt.userTokenDidChange,
    webComponentsLoaded: sg,
  },
  qE = {
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
function Nl(r) {
  const e = parseInt(r.hlsMetadata["skip.count"], 10),
    t = [];
  if (isNaN(e) || e === 0) return t;
  for (let i = 0; i < e; i++) {
    const s = {
      start: parseFloat(r.hlsMetadata[`skip.${i}.start`]),
      duration: parseFloat(r.hlsMetadata[`skip.${i}.duration`]),
      target: parseFloat(r.hlsMetadata[`skip.${i}.target`]),
      label: r.hlsMetadata[`skip.${i}.label`],
    };
    (r.hlsMetadata[`skip.${i}.promo.enabled`] !== void 0 &&
      (s.promo = {
        enabled: r.hlsMetadata[`skip.${i}.promo.enabled`] === "true",
        image: r.hlsMetadata[`skip.${i}.promo.image`],
        "image-height": parseInt(r.hlsMetadata[`skip.${i}.promo.image-height`], 10),
        "image-width": parseInt(r.hlsMetadata[`skip.${i}.promo.image-width`], 10),
        genre: r.hlsMetadata[`skip.${i}.promo.genre`],
        "release-year": parseInt(r.hlsMetadata[`skip.${i}.promo.release-year`], 10),
        "rating-display-name": r.hlsMetadata[`skip.${i}.promo.rating-display-name`],
        "rating-system": r.hlsMetadata[`skip.${i}.promo.rating-system`],
        "canonical-id": r.hlsMetadata[`skip.${i}.promo.canonical-id`],
        title: r.hlsMetadata[`skip.${i}.promo.title`],
        "rating-tag": r.hlsMetadata[`skip.${i}.promo.rating-tag`],
        "rating-rank": r.hlsMetadata[`skip.${i}.promo.rating-rank`],
        "up-next": {
          "is-added": r.hlsMetadata[`skip.${i}.promo.up-next.is-added`] === "true",
          "add-label": r.hlsMetadata[`skip.${i}.promo.up-next.add-label`],
          "added-label": r.hlsMetadata[`skip.${i}.promo.up-next.added-label`],
        },
        runtime: parseInt(r.hlsMetadata[`skip.${i}.promo.runtime`], 10),
      }),
      t.push(s));
  }
  return t;
}
function Ei(r, e = ["pre-roll", "mid-roll", "post-roll"]) {
  if (r.hlsMetadata === void 0) return [];
  const t = [];
  return (
    e.forEach((i) => {
      const s = parseInt(r.hlsMetadata[`${i}.count`], 10);
      if (!isNaN(s))
        for (let n = 0; n < s; n++) {
          const a = `${i}.${n}`,
            o = {
              index: n,
              type: i,
              skippable: r.hlsMetadata[`${a}.skippable`] === "true",
              "adam-id": r.hlsMetadata[`${a}.adam-id`],
              start: Math.round(parseFloat(r.hlsMetadata[`${a}.start`])),
              duration: Math.round(parseFloat(r.hlsMetadata[`${a}.duration`])),
            },
            l = `${a}.dynamic-slot.data-set-id`;
          (r.hlsMetadata[l] !== void 0 && (o["dynamic-id"] = r.hlsMetadata[l]), t.push(o));
        }
    }),
    t
  );
}
const Ro = (r, e) => r + e.duration;
function ng(r) {
  var l, u;
  const e = Ei(r, ["pre-roll"]),
    t = Ei(r, ["post-roll"]),
    i = e.reduce(Ro, 0),
    s = t.reduce(Ro, 0),
    n =
      (u = (l = r.hlsMetadata["up-next.start"]) != null ? l : r.hlsMetadata["watched.time"]) != null
        ? u
        : r.hlsMetadata["feature.duration"],
    a = parseFloat(n),
    o = a - i;
  return { mainContentStarts: i, mainContentEnds: a, mainContentLength: o, totalContentLength: a + s };
}
var ag = Object.defineProperty,
  og = Object.getOwnPropertyDescriptor,
  cg = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? og(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && ag(e, t, s), s);
  };
class Ur {
  constructor(e, t, i, s, n = !1) {
    c(this, "inWatchSpan", !1);
    ((this.dispatcher = e), (this.callback = t), (this.start = i), (this.stop = s), (this.allowMultiple = n));
  }
  startMonitor() {
    (this.dispatcher.unsubscribe(_.playbackTimeDidChange, this.handleTimeChange),
      this.dispatcher.subscribe(_.playbackTimeDidChange, this.handleTimeChange));
  }
  stopMonitor() {
    this.dispatcher.unsubscribe(_.playbackTimeDidChange, this.handleTimeChange);
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
cg([S()], Ur.prototype, "handleTimeChange", 1);
var lg = Object.defineProperty,
  ug = Object.getOwnPropertyDescriptor,
  dg = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? ug(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && lg(e, t, s), s);
  };
class xr {
  constructor(e) {
    c(this, "isActive", !1);
    c(this, "isMonitoring", !1);
    c(this, "dispatcher");
    c(this, "playbackController");
    c(this, "watchers", []);
    ((this.handlePlaybackThreshold = this.handlePlaybackThreshold.bind(this)),
      (this.playbackController = e.controller),
      (this.dispatcher = e.services.dispatcher),
      this.dispatcher.subscribe(_.nowPlayingItemDidChange, this.handleMediaItemChange));
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
dg([S()], xr.prototype, "handleMediaItemChange", 1);
class hg extends xr {
  constructor(t) {
    super(t);
    c(this, "rollMap", new Map());
  }
  async handlePlaybackThreshold(t, i) {
    if (!this.rollMap.has(i)) return;
    const s = this.rollMap.get(i);
    (this.dispatcher.publish(_.mediaRollEntered, s), this.rollMap.delete(i));
  }
  shouldMonitor() {
    return super.shouldMonitor() ? this.getRollMetadata().length > 0 : !1;
  }
  startMonitor() {
    (this.setupWatchers(this.getRollMetadata()), super.startMonitor());
  }
  getRollMetadata() {
    const t = this.playbackController.nowPlayingItem;
    return t === void 0 ? [] : Ei(t, ["pre-roll", "post-roll"]);
  }
  setupWatchers(t) {
    const i = [];
    (t.forEach((s) => {
      const { start: n, duration: a } = s,
        o = new Ur(this.dispatcher, this.handlePlaybackThreshold, n, n + a);
      (i.push(o), this.rollMap.set(o, s));
    }),
      (this.watchers = i));
  }
}
class fg extends xr {
  constructor(t) {
    super(t);
    c(this, "skipMap", new Map());
  }
  async handlePlaybackThreshold(t, i) {
    if (!this.skipMap.has(i)) return;
    const s = this.skipMap.get(i);
    this.dispatcher.publish(_.mediaSkipAvailable, s);
  }
  shouldMonitor() {
    return super.shouldMonitor() ? this.getNowPlayingMetadata().length > 0 : !1;
  }
  startMonitor() {
    (this.setupWatchers(this.getNowPlayingMetadata()), super.startMonitor());
  }
  getNowPlayingMetadata() {
    const t = this.playbackController.nowPlayingItem;
    return t === void 0 ? [] : Nl(t);
  }
  setupWatchers(t) {
    const i = [];
    (t.forEach((s) => {
      const { start: n, target: a, duration: o, promo: l } = s,
        u = new Ur(this.dispatcher, this.handlePlaybackThreshold, n, l ? a : n + o, !0);
      (i.push(u), this.skipMap.set(u, s));
    }),
      (this.watchers = i));
  }
}
const E = new Ut("services"),
  pg = (r) => Math.min(Math.round(Xn(r)), Math.round(Jn(r))),
  ln = (r) => !isNaN(Xn(r)) && !isNaN(Jn(r)),
  Xn = (r) => parseFloat(r.hlsMetadata["up-next.start"]),
  Jn = (r) => parseFloat(r.hlsMetadata["watched.time"]),
  yg = async (r, e) => {
    if (!(!r.isUTS || !r.assetURL))
      try {
        const t = Mr(r, e.playOptions),
          i = await e.manifestManager.fetchManifest(t);
        r.hlsMetadata = { ...r.hlsMetadata, ...mg(i.content) };
      } catch (t) {
        E.error(t.message, t);
      }
  };
function mg(r, e = {}) {
  const t = /^(?:#EXT-X-SESSION-DATA:?)DATA-ID="([^"]+)".+VALUE="([^"]+)".*$/,
    i = "com.apple.hls.",
    s = {};
  for (const n of r.split(`
`)) {
    const a = n.match(t);
    if (a) {
      let o = a[1];
      a[1].startsWith(i) && e.stripPrefix !== !1 && (o = a[1].slice(i.length));
      const l = a[2];
      s[o] = l;
    }
  }
  return s;
}
var gg = Object.defineProperty,
  vg = Object.getOwnPropertyDescriptor,
  bg = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? vg(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && gg(e, t, s), s);
  };
class Ll extends xr {
  constructor(e) {
    super(e);
  }
  async handlePlaybackThreshold() {
    this.dispatcher.publish(_.mediaUpNext);
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
        new Ur(
          this.dispatcher,
          this.handlePlaybackThreshold,
          Math.round(this.getStartTime(e)),
          Number.POSITIVE_INFINITY,
        ),
      ]);
  }
  getStartTime(e) {
    const t = Xn(e);
    return isNaN(t) ? Jn(e) : t;
  }
}
bg([S()], Ll.prototype, "handlePlaybackThreshold", 1);
const Ot = Se.register("mk-console-logging"),
  Gt = Ln.register("mk-logging-levels"),
  Ml = ae.ERROR;
let Si = Ml;
const x = new Ut("mk", { level: Si, handlers: { console: new of({ enabled: !1 }), external: new Mc(() => {}) } });
function Ul(r) {
  Qh(x, Xh(r));
}
function _g() {
  (x.setLevel(Si), zh(x, { includeRoot: !1 }));
}
function un(r) {
  x.handlers.console.enabled = r != null ? r : !1;
}
function Co(r) {
  var e;
  Si = (e = Ct(r)) != null ? e : Si;
}
function Tg() {
  return x.level !== Ml;
}
function Eg(r) {
  x.handlers.external = new Mc(r);
}
function Sg(r) {
  const e = {};
  r !== void 0 && (r = r.startsWith("mk/") ? r : "mk/" + r);
  const t = x.children;
  for (; t.length > 0;) {
    const i = t.shift();
    if (i === void 0) break;
    (r !== void 0 && !i.namespace.startsWith(r)) || ((e[i.namespace] = i.levelName), t.unshift(...i.children));
  }
  return e;
}
const br = {
  getLogger(r = "*") {
    return x.getByNamespace(r != null ? r : "*");
  },
  setConsoleOutput(r) {
    r === !0
      ? (Ot.enable(), un(!0), x.info("Console output is enabled with level " + x.levelName))
      : (Ot.disable(), un(!1));
  },
  setLoggingLevels(r, e) {
    r.trim() !== ""
      ? (Gt.set(r), Ul(r), br.setConsoleOutput(e != null ? e : !0))
      : br.clearLoggingLevels(e != null ? e : !1);
  },
  clearLoggingLevels(r = !1) {
    (br.setConsoleOutput(r), Gt.clear(), _g());
  },
  listLoggers(r) {
    return Sg(r);
  },
};
Ot.enabled && br.setConsoleOutput(Ot.enabled);
Gt.value !== void 0 && br.setLoggingLevels(Gt.value, Ot.enabled);
var Le = ((r) => ((r[(r.none = 0)] = "none"), (r[(r.one = 1)] = "one"), (r[(r.all = 2)] = "all"), r))(Le || {});
class Ig {
  constructor() {
    c(this, "canSetRepeatMode", !1);
  }
  get repeatMode() {
    return 0;
  }
  set repeatMode(e) {
    e !== this.repeatMode && E.warn("setting repeatMode is not supported in this playback method");
  }
}
class kg {
  constructor(e, t = 0) {
    c(this, "canSetRepeatMode", !0);
    c(this, "dispatcher");
    c(this, "_repeatMode");
    ((this.dispatcher = e), (this._repeatMode = t));
  }
  get repeatMode() {
    return this._repeatMode;
  }
  set repeatMode(e) {
    !(e in Le) ||
      e === this._repeatMode ||
      ((this._repeatMode = e), this.dispatcher.publish(_.repeatModeDidChange, this._repeatMode));
  }
}
const Oo = wl(),
  Q = {
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
      hls: Oo.hls,
      rtc: Oo.rtc,
      mediaApi: "https://amp-api.music.apple.com/v1",
      webPlayback: `https://${Dr("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
    },
  },
  Do = Fi.register("mk-offers-key-urls").get();
Do
  ? (Q.urls.hlsOffersKeyUrls = Do)
  : (Q.urls.hlsOffersKeyUrls = {
      "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
      "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
      "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
    });
let A;
function Pg(r, e) {
  return ((A = new Ag(r, e)), A);
}
class Ag {
  constructor(e, t = {}) {
    c(this, "precache");
    c(this, "storekit");
    c(this, "dispatcher");
    c(this, "_apiStorefrontId");
    c(this, "_defaultStorefrontCountryCode");
    c(this, "_hasAuthorized", !1);
    c(this, "_metricsClientId");
    c(this, "_providedRequestUserToken", !1);
    var s, n, a;
    const { dispatcher: i } = (s = t.services) != null ? s : {};
    if (!i) throw new m(m.Reason.CONFIGURATION_ERROR, "No dispatcher configured for Store Service");
    ((this.dispatcher = i),
      "precache" in t && (this.precache = t.precache),
      t.storefrontId && (this.storefrontId = t.storefrontId),
      (this._defaultStorefrontCountryCode = t.storefrontCountryCode),
      ("affiliateToken" in t || "campaignToken" in t) &&
        (t.linkParameters = { ...(t.linkParameters || {}), at: t.affiliateToken, ct: t.campaignToken }),
      (this.storekit = new Bc(e, {
        apiBase: Q.urls.mediaApi,
        authenticateMethod: Q.features["legacy-authenticate-method"] ? "POST" : "GET",
        deeplink: t.linkParameters,
        disableAuthBridge: t.disableAuthBridge,
        iconURL: Q.app.icon,
        meParameters: t.meParameters,
        persist: t.persist,
        realm: t.realm || le.MUSIC,
        fetch: (a = (n = t == null ? void 0 : t.services) == null ? void 0 : n.request) == null ? void 0 : a.fetch,
        disableLogoutURL: t.disableLogoutURL,
      })),
      this.storekit.addEventListener(_.authorizationStatusDidChange, (o) => {
        const { authorizationStatus: l } = o;
        this._hasAuthorized = [he.AUTHORIZED, he.RESTRICTED].includes(l);
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
    return this.storekit.authorizationStatus === he.RESTRICTED;
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
    E.error("needsGDPR has been deprecated. Plesae migrate to shouldDisplayPrivacyLink()");
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
    var e;
    return this.isAuthorized
      ? this.storekit.storefrontCountryCode
      : (e = this._defaultStorefrontCountryCode) != null
        ? e
        : this.storekit.storefrontCountryCode;
  }
  get storefrontId() {
    return this._apiStorefrontId || this.storekit.storefrontCountryCode;
  }
  set storefrontId(e) {
    (e && (e = e.toLowerCase()),
      e !== this._apiStorefrontId &&
        ((this._apiStorefrontId = e), this.dispatcher.publish(P.apiStorefrontChanged, { storefrontId: e })));
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
    } catch (t) {
      try {
        await this.unauthorize();
      } catch (i) {}
      throw new m(m.Reason.AUTHORIZATION_ERROR, "Unauthorized");
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
function wg(r) {
  return (r === void 0 && (r = A && A.storekit), r !== void 0 && r.hasAuthorized && r.userTokenIsValid);
}
async function Rg(r) {
  return (r === void 0 && (r = A && A.storekit), r.hasMusicSubscription());
}
function Cg(r) {
  const e = Rd(
    {
      id: "metadata.itemId",
      type: "metadata.itemType",
      "attributes.contentRating": function () {
        var t;
        if (((t = r == null ? void 0 : r.metadata) == null ? void 0 : t.isExplicit) === 1) return qc;
      },
      "attributes.playParams": function () {
        var t, i, s;
        return ((t = r == null ? void 0 : r.metadata) == null ? void 0 : t.isPlayable) === 0
          ? !1
          : {
              id: (i = r == null ? void 0 : r.metadata) == null ? void 0 : i.itemId,
              kind: (s = r == null ? void 0 : r.metadata) == null ? void 0 : s.itemType,
            };
      },
      "container.id": "metadata.containerId",
      "container.name": "metadata.containerName",
      "container.type": "metadata.containerType",
    },
    r,
  );
  return { attributes: {}, ...e };
}
const Og = { condition: () => !0, toOptions: (r, e, t) => [{ ...r, context: t }] },
  Dg = (r) => {
    var e;
    return r.type === "stations" && ((e = r.attributes) == null ? void 0 : e.isLive);
  },
  Ng = (r, e, t) => [
    {
      ...r,
      context: t,
      container: { attributes: r.attributes, id: r.id, type: r.type, name: t == null ? void 0 : t.featureName },
    },
  ],
  Lg = { condition: Dg, toOptions: Ng },
  Mg = {
    condition: function (e) {
      var t, i, s, n;
      return (
        e.type === "stations" &&
        ((t = e.attributes) == null ? void 0 : t.kind) === "streaming" &&
        ((s = (i = e.attributes) == null ? void 0 : i.streamingRadioSubType) == null ? void 0 : s.toLowerCase()) ===
          "episode" &&
        ((n = e.attributes) == null ? void 0 : n.isLive) === !1
      );
    },
    toOptions: function (e, t, i) {
      var s, n;
      return [
        {
          ...e,
          context: i,
          container: {
            attributes: e.attributes,
            id: e.id,
            type: e.type,
            name: i == null ? void 0 : i.featureName,
            stationHash: (n = (s = e.attributes) == null ? void 0 : s.playParams) == null ? void 0 : n.stationHash,
          },
        },
      ];
    },
  },
  xl = (r) => (e) => {
    var t, i;
    return !!((i = (t = e.relationships) == null ? void 0 : t[r]) != null && i.data);
  },
  Zn =
    (...r) =>
    ({ type: e }) =>
      r.includes(e),
  Fl = (r) => {
    if (r === void 0 || r === "") return;
    const { prefix: e } = Q;
    return e ? `${e}:${r}` : r;
  },
  Ug = (r, e) => {
    var t, i;
    return (i = e != null ? e : (t = r == null ? void 0 : r.container) == null ? void 0 : t.name) != null ? i : kt.SONG;
  },
  xg = (r, e, t) => {
    const i = { id: r.id, ...e, name: Fl(Ug(r, t == null ? void 0 : t.featureName)) };
    return [
      { relationships: r.relationships, attributes: r.attributes, id: r.id, type: r.type, container: i, context: t },
    ];
  },
  Fg = { toOptions: xg, condition: Zn("songs", "library-songs", "music-videos", "library-music-videos") },
  Kg = (r) => {
    if (r === void 0) return;
    const [e] = Object.keys(r);
    return r[e];
  },
  Vg = (r) => {
    if (r === void 0) return;
    const e = Object.keys(r);
    return r[e[e.length - 1]];
  },
  Bg = ({ type: r, attributes: { assetTokens: e } }) => (r.includes("udio") ? Kg(e) : Vg(e)),
  $g = {
    condition: Zn("uploaded-audios", "uploadedAudio", "uploaded-videos", "uploadedVideo"),
    toOptions: (r, e, t) => {
      var s, n;
      const i = {
        ...r,
        context: t,
        attributes: {
          ...r.attributes,
          assetUrl: Bg(r),
          playParams:
            (n = (s = r == null ? void 0 : r.attributes) == null ? void 0 : s.playParams) != null
              ? n
              : { id: r.id, kind: r.type },
        },
      };
      return (
        e !== void 0 && (i.container = e),
        (t == null ? void 0 : t.featureName) !== void 0 &&
          (i.container = { ...i.container, name: t == null ? void 0 : t.featureName }),
        [i]
      );
    },
  },
  Hg = {
    toOptions: function (r, e, t) {
      return r.relationships.episodes.data.map((i) => ({ ...i, context: t }));
    },
    condition: xl("episodes"),
    requiredRelationships: ["episodes"],
  };
function jg(r = []) {
  return r.length === 0
    ? !1
    : r.filter(({ attributes: e }) => (e ? e.workName || e.movementName || e.movementCount || e.movementNumber : !1))
        .length > 0;
}
const qg = (r, e) => {
    if (e) return e;
    const t = jg(r.relationships.tracks.data);
    if (r.type === "albums" || r.type === "library-albums") return t ? kt.ALBUM_CLASSICAL : kt.ALBUM;
    if (r.type === "playlists" || r.type === "library-playlists") return t ? kt.PLAYLIST_CLASSICAL : kt.PLAYLIST;
  },
  Wg = (r, e, t) => {
    const i = { attributes: r.attributes, id: r.id, type: r.type, name: Fl(qg(r, t == null ? void 0 : t.featureName)) };
    return r.relationships.tracks.data.map((s) => ({
      attributes: s.attributes,
      id: s.id,
      type: s.type,
      container: i,
      context: t,
    }));
  },
  Yg = { toOptions: Wg, condition: xl("tracks"), requiredRelationships: ["tracks"] },
  Gg = {
    condition: Zn("music-movies"),
    toOptions: (r, e, t) => {
      var s, n;
      const i = {
        ...r,
        context: t,
        attributes: {
          ...r.attributes,
          playParams:
            (n = (s = r == null ? void 0 : r.attributes) == null ? void 0 : s.playParams) != null
              ? n
              : { id: r.id, kind: "musicMovie" },
          offers: void 0,
        },
      };
      return (
        e !== void 0 && (i.container = e),
        (t == null ? void 0 : t.featureName) !== void 0 &&
          (i.container = { ...i.container, name: t == null ? void 0 : t.featureName }),
        [i]
      );
    },
  },
  Kl = [Yg, Hg, Fg, Lg, Mg, $g, Gg],
  dn = (r, e, t = {}) => {
    var s, n, a;
    return (
      (e = (n = (s = e == null ? void 0 : e.serialize) == null ? void 0 : s.call(e).data) != null ? n : e),
      ((a = Kl.find((o) => o.condition(r, e, t))) != null ? a : Og).toOptions(r, e, t).map((o) => new kr(o))
    );
  },
  zg = Kl.reduce((r, e) => {
    const t = e.requiredRelationships;
    return (t && r.push(...t), r);
  }, []),
  Qg = new Set(zg),
  Ii = (r, e) => Array.isArray(r) && (r.length === 0 || e(r[0])),
  No = (r) => r && r.id !== void 0 && r.type !== void 0,
  Xg = (r) => r && r.id !== void 0,
  Jg = (r) =>
    r &&
    r.contentId !== void 0 &&
    r.metadata !== void 0 &&
    r.metadata.itemId !== void 0 &&
    r.metadata.itemType !== void 0,
  Zg = (r) => r && r.items && Array.isArray(r.items),
  Lo = (r) => r && r.loaded,
  ev = x.linkChild(new Ut("queue")),
  tv = (r) => {
    if (!Zg(r) && !Lo(r)) return [];
    const e = Lo(r) ? iv(r) : rv(r);
    return (e.forEach((t) => (t.context = { ...r.context, ...t.context })), e);
  },
  rv = ({ items: r }) => (Ii(r, Jg) ? r.map((e) => new kr(Cg(e))) : Ii(r, Xg) ? r.map((e) => new kr(e)) : []),
  iv = (r) => {
    const e = [],
      { loaded: t, container: i, context: s } = r;
    return t === void 0
      ? []
      : Ii(t, Ma)
        ? (t.forEach((n) => {
            e.push(...Mo(n, i, s));
          }),
          e)
        : Ii(t, No)
          ? (t.forEach((n) => {
              e.push(...hn(n, i, s));
            }),
            e)
          : Ma(t)
            ? Mo(t, i, s)
            : No(t)
              ? hn(t, i, s)
              : [];
  },
  Mo = (r, e, t = {}) => {
    const { data: i } = r.serialize(!0, void 0, { includeRelationships: Qg, allowFullDuplicateSerializations: !0 });
    return hn(i, e, t);
  },
  hn = (r, e, t = {}) => (ev.trace("resourceToMediaItem()", r), dn(r, e, t));
x.createChild("queue");
class Vl {
  constructor(e, t) {
    c(this, "isAutoplay", !1);
    c(this, "item");
    var i;
    ((this.item = e), (this.isAutoplay = (i = t == null ? void 0 : t.isAutoplay) != null ? i : !1));
  }
  restrict() {
    return this.item.restrict();
  }
}
function Ht(r, e) {
  return r.map((t) => new Vl(t, e));
}
function je(r) {
  return r.map((e) => e.item);
}
const { queueItemsDidChange: sv, queuePositionDidChange: Uo } = _;
class Bl {
  constructor(e) {
    c(this, "repeatable");
    c(this, "hasAutoplayStation", !1);
    c(this, "playbackMode", Ye.MIXED_CONTENT);
    c(this, "_itemIDs", []);
    c(this, "_queueItems", []);
    c(this, "_isRestricted", !1);
    c(this, "_nextPlayableItemIndex", -1);
    c(this, "_position", -1);
    c(this, "_dispatcher");
    if (((this._dispatcher = e.services.dispatcher), (this.playbackMode = e.playbackMode), !e.descriptor)) return;
    const t = tv(e.descriptor).filter((i) => fn(i, this.playbackMode));
    ((this._queueItems = Ht(t)),
      this._reindex(),
      e.descriptor.startWith !== void 0 && (this.position = this._getStartItemPosition(e.descriptor.startWith)));
  }
  get isEmpty() {
    return this.length === 0;
  }
  set isRestricted(e) {
    var i;
    this._isRestricted = e;
    const t = (i = this.currentItem) == null ? void 0 : i.id;
    this._isRestricted &&
      !this.isEmpty &&
      (this.removeQueueItems((s) => s.item.isExplicitItem),
      this.isEmpty &&
        this._dispatcher.publish(_.mediaPlaybackError, new m(m.Reason.CONTENT_RESTRICTED, "Content restricted")),
      t && (this.position = this._getStartItemPosition(t)));
  }
  get isRestricted() {
    return this._isRestricted;
  }
  get appendTargetIndex() {
    let e = this.length;
    const t = this._queueItems.findIndex((i) => i.isAutoplay);
    return (t !== -1 && this.position < t && (e = t), e);
  }
  get items() {
    return je(this._queueItems);
  }
  get autoplayItems() {
    return je(this._queueItems.filter((e) => e.isAutoplay));
  }
  get unplayedAutoplayItems() {
    return je(this._unplayedQueueItems.filter((e) => e.isAutoplay));
  }
  get userAddedItems() {
    return je(this._queueItems.filter((e) => !e.isAutoplay));
  }
  get unplayedUserItems() {
    return je(this._unplayedQueueItems.filter((e) => !e.isAutoplay));
  }
  get playableItems() {
    return je(this._queueItems.filter((e) => Et(e.item, this.playbackMode)));
  }
  get unplayedPlayableItems() {
    return je(this._unplayedQueueItems.filter((e) => Et(e.item, this.playbackMode)));
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
    var t;
    return (t = this.queueItem(e)) == null ? void 0 : t.item;
  }
  get currentItem() {
    return this.item(this.position);
  }
  queueItem(e) {
    var t;
    return (t = this._queueItems) == null ? void 0 : t[e];
  }
  updateItems(e) {
    ((this._queueItems = Ht(e)), this._reindex(), this._dispatcher.publish(_.queueItemsDidChange, this.items));
  }
  get currentQueueItem() {
    return this.queueItem(this.position);
  }
  remove(e) {
    if ((Oc("remove", { message: "The queue remove function has been deprecated" }), e === this.position))
      throw new m(m.Reason.INVALID_ARGUMENTS);
    this.splice(e, 1);
  }
  append(e = []) {
    return this.appendQueueItems(Ht(e));
  }
  appendQueueItems(e = []) {
    this.spliceQueueItems(this.appendTargetIndex, 0, e);
  }
  splice(e, t, i = []) {
    return je(this.spliceQueueItems(e, t, Ht(i)));
  }
  spliceQueueItems(e, t, i = [], s = !0) {
    i = i.filter((a) => fn(a == null ? void 0 : a.item, this.playbackMode));
    const n = this._queueItems.splice(e, t, ...i);
    return (
      this._itemIDs.splice(e, t, ...i.map((a) => a.item.id)),
      s &&
        (this._dispatcher.publish(P.queueModified, { start: e, added: je(i), removed: je(n) }),
        this._dispatcher.publish(sv, this.items)),
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
    ((this._position = -1), e >= 0 && this._dispatcher.publish(Uo, { oldPosition: e, position: this.position }));
  }
  _isSameItems(e) {
    if (e.length !== this.length) return !1;
    const t = e.map((a) => a.id).sort(),
      i = [...this._itemIDs].sort();
    let s, n;
    try {
      ((s = JSON.stringify(t)), (n = JSON.stringify(i)));
    } catch (a) {
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
    const i = this.item(e);
    ((!i || !Et(i, this.playbackMode)) && (this._position = this.findPlayableIndexForward(e)),
      this._position !== t && this._dispatcher.publish(Uo, { oldPosition: t, position: this._position }));
  }
  findPlayableIndexForward(e = this.position) {
    var i;
    if (this.isEmpty || (this.isInitiated && !xo([0, this.position], e))) return -1;
    const t = (i = this.repeatable) == null ? void 0 : i.repeatMode;
    if (e < this.length)
      for (let s = e + 1; s < this.length; s++) {
        const n = this.item(s);
        if (Et(n, this.playbackMode)) return s;
      }
    if (t === Le.all)
      for (let s = 0; s <= e; s++) {
        const n = this.item(s);
        if (Et(n, this.playbackMode)) return s;
      }
    return -1;
  }
  findPlayableIndexBackward(e = this.position) {
    var i;
    if (this.isEmpty || !xo([0, this.position], e)) return -1;
    const t = (i = this.repeatable) == null ? void 0 : i.repeatMode;
    if (e > 0)
      for (let s = e - 1; s >= 0; s--) {
        const n = this.item(s);
        if (Et(n, this.playbackMode)) return s;
      }
    if (t === Le.all)
      for (let s = this.length - 1; s >= e; s--) {
        const n = this.item(s);
        if (Et(n, this.playbackMode)) return s;
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
function fn(r, e) {
  return r.isPlayable || (e !== Ye.FULL_PLAYBACK_ONLY && r.previewURL !== void 0);
}
function nv(r) {
  return r.isRestricted;
}
function av(r) {
  return r.isUnavailable;
}
function Et(r, e) {
  return fn(r, e) && !nv(r) && !av(r);
}
function xo(r, e) {
  return r[0] <= e && e <= r[1];
}
const $l = { ...Fh, ...R },
  ov = ["EditorialVideoClip", "uploaded-videos", "uploadedVideo", "musicVideo"],
  Fo = async () => {},
  cv = (r) =>
    (r != null && r.isUTS) || ov.includes(r == null ? void 0 : r.type)
      ? { FORWARD: 10, BACK: 10 }
      : r != null && r.isAOD
        ? { FORWARD: 30, BACK: 30 }
        : { FORWARD: 30, BACK: 15 };
class Hl {
  constructor(e) {
    c(this, "canSeek", !1);
    this.mediaItemPlayback = e;
  }
  getSeekSeconds(e) {
    return { BACK: 0, FORWARD: 0 };
  }
  seekBackward(e = Fo) {
    E.warn("seekBackward is not supported in this playback method");
  }
  seekForward(e = Fo) {
    E.warn("seekForward is not supported in this playback method");
  }
  async seekToTime(e, t) {
    E.warn("seekToTime is not supported in this playback method");
  }
}
class jl {
  constructor(e, t) {
    c(this, "canSeek", !0);
    ((this._dispatcher = e), (this.mediaItemPlayback = t));
  }
  getSeekSeconds(e) {
    return cv(e);
  }
  async seekBackward(e = this._seekToBeginning) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      E.warn("Cannot seekBackward when nowPlayingItem is not yet set.");
      return;
    }
    const t =
      this.mediaItemPlayback.currentPlaybackTime - this.getSeekSeconds(this.mediaItemPlayback.nowPlayingItem).BACK;
    if (t < 0) {
      await e.call(this);
      return;
    }
    await this.seekToTime(t, _e.Interval);
  }
  async seekForward(e = this._seekToEnd) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      E.warn("Cannot seekForward when nowPlayingItem is not yet set.");
      return;
    }
    const t =
      this.mediaItemPlayback.currentPlaybackTime + this.getSeekSeconds(this.mediaItemPlayback.nowPlayingItem).FORWARD;
    if (t > this.mediaItemPlayback.currentPlaybackDuration) {
      await e.call(this);
      return;
    }
    await this.seekToTime(t, _e.Interval);
  }
  async seekToTime(e, t = _e.Manual) {
    if (this.mediaItemPlayback.nowPlayingItem === void 0) {
      E.warn("Cannot seekToTime when nowPlayingItem is not yet set.");
      return;
    }
    const i = this.mediaItemPlayback.nowPlayingItem,
      s = this.mediaItemPlayback.currentPlaybackTime,
      n = this.mediaItemPlayback.currentPlayingDate,
      a = Math.min(Math.max(0, e), this.mediaItemPlayback.currentPlaybackDuration);
    let o;
    if (i.isLinearStream && n !== void 0) {
      const l = (a - s) * 1e3;
      o = new Date(n.getTime() + l);
    }
    (await this.mediaItemPlayback.seekToTime(a, t),
      this._dispatcher.publish(P.playbackSeek, {
        item: i,
        startPosition: s,
        position: a,
        playingDate: o,
        startPlayingDate: n,
        seekReasonType: t,
      }));
  }
  async _seekToBeginning() {
    await this.seekToTime(0, _e.Interval);
  }
  async _seekToEnd() {
    await this.seekToTime(this.mediaItemPlayback.currentPlaybackDuration, _e.Interval);
  }
}
const lv = (r) => {
  const e = [...r],
    { length: t } = e;
  for (let i = 0; i < t; ++i) {
    const s = i + Math.floor(Math.random() * (t - i)),
      n = e[s];
    ((e[s] = e[i]), (e[i] = n));
  }
  return e;
};
var uv = Object.defineProperty,
  dv = Object.getOwnPropertyDescriptor,
  hv = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? dv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && uv(e, t, s), s);
  },
  ea = ((r) => ((r[(r.off = 0)] = "off"), (r[(r.songs = 1)] = "songs"), r))(ea || {});
const _s = "Shuffling is not supported in this playback method.";
class fv {
  constructor() {
    c(this, "canSetShuffleMode", !1);
    c(this, "queue");
  }
  set shuffle(e) {
    E.warn(_s);
  }
  get shuffleMode() {
    return 0;
  }
  set shuffleMode(e) {
    E.warn(_s);
  }
  checkAndReshuffle(e) {
    E.warn(_s);
  }
}
class ql {
  constructor(e, { dispatcher: t }) {
    c(this, "canSetShuffleMode", !0);
    c(this, "dispatcher");
    c(this, "mode", 0);
    c(this, "_queue");
    c(this, "_unshuffledIDs", []);
    c(this, "_isSpliceFromShuffle", !1);
    ((this.controller = e),
      (this.dispatcher = t),
      this.dispatcher.subscribe(P.queueModified, this.queueModifiedHandler),
      (this._queue = e.queue));
  }
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
    const { start: i, added: s, removed: n } = t;
    if (n.length > 0) {
      const a = n.map((o) => o.id);
      this._unshuffledIDs = this._unshuffledIDs.filter((o) => !a.includes(o));
    }
    s.length > 0 && this._unshuffledIDs.splice(i, 0, ...s.map((a) => a.id));
  }
  set shuffle(e) {
    this.shuffleMode = e ? 1 : 0;
  }
  get shuffleMode() {
    return this.mode;
  }
  set shuffleMode(e) {
    e === this.shuffleMode ||
      !(e in ea) ||
      (E.debug(`mk: set shuffleMode from ${this.shuffleMode} to ${e}`),
      (this.mode = e),
      this.mode === 1 ? this.shuffleQueue() : this.unshuffleQueue(),
      this.controller.nowPlayingItem &&
        (this._queue.position = this._queue.indexForItem(this.controller.nowPlayingItem.id)),
      this.dispatcher.publish(_.shuffleModeDidChange, this.shuffleMode));
  }
  checkAndReshuffle(e = !1) {
    this.shuffleMode === 1 && this.shuffleQueue(e);
  }
  shuffleQueue(e = !0) {
    const { userAddedItems: t } = this._queue;
    if (t.length <= 1) return t;
    const i = t.slice(0),
      s = this._queue.position > -1 ? i.splice(this._queue.position, 1) : [];
    let n = [];
    do n = lv(i);
    while (i.length > 1 && Pn(n, i));
    const a = [...s, ...n];
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, a.length, Ht(a), e));
  }
  unshuffleQueue(e = !0) {
    let t = [];
    const i = this._unshuffledIDs.reduce((l, u, d) => ((l[u] = d), l), {}),
      s = [];
    let n = 0;
    const a = this._queue.item(this._queue.position);
    (this._queue.userAddedItems.forEach((l) => {
      const u = i[l.id];
      (u === void 0 && s.push(l), (t[u] = l), l.id === (a == null ? void 0 : a.id) && (n = u));
    }),
      (t = t.filter(Boolean)));
    const o = t.concat(s);
    ((this._isSpliceFromShuffle = !0), this._queue.spliceQueueItems(0, o.length, Ht(o), e), (this._queue.position = n));
  }
}
hv([S()], ql.prototype, "queueModifiedHandler", 1);
var pv = Object.defineProperty,
  yv = Object.getOwnPropertyDescriptor,
  mv = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? yv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && pv(e, t, s), s);
  },
  gt = ((r) => ((r.continuous = "continuous"), (r.serial = "serial"), r))(gt || {});
const { queueItemsDidChange: gv } = _;
class ta {
  constructor(e) {
    c(this, "_continuous");
    c(this, "_context", {});
    c(this, "_autoplayEnabled");
    c(this, "_queue");
    c(this, "_storekit");
    c(this, "_repeatable");
    c(this, "_shuffler");
    c(this, "_seekable");
    c(this, "services");
    c(this, "_rollMonitor");
    c(this, "_skipIntro");
    c(this, "_upNext");
    c(this, "_playbackMode");
    c(this, "_isActive", !1);
    c(this, "_isDestroyed", !1);
    var t;
    ((this.onPlaybackStateDidChange = this.onPlaybackStateDidChange.bind(this)),
      (this._autoplayEnabled = (t = e == null ? void 0 : e.autoplayEnabled) != null ? t : !1),
      (this._continuous = !1),
      (this.services = e.services),
      (this.storekit = this.services.store.storekit),
      (this._skipIntro = new fg({ controller: this, services: e.services })),
      (this._upNext = new Ll({ controller: this, services: e.services })),
      (this._rollMonitor = new hg({ controller: this, services: e.services })),
      (this._shuffler = new fv()),
      (this._seekable = new Hl(this._mediaItemPlayback)),
      (this._repeatable = new Ig()),
      this._dispatcher.subscribe(_.autoplayEnabledDidChange, this.updateAutoplay),
      (this._playbackMode = e.playbackMode));
  }
  get isActive() {
    return this._isActive;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  updateAutoplay(e, t) {
    this.autoplayEnabled = t;
  }
  constructContext(e, t) {
    var s;
    let i = e == null ? void 0 : e.context;
    return (
      (e == null ? void 0 : e.featureName) !== void 0 &&
        (i == null ? void 0 : i.featureName) === void 0 &&
        (E.warn("featureName is deprecated, pass it inside context"), i || (i = {}), (i.featureName = e.featureName)),
      (s = i != null ? i : t) != null ? s : {}
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
    return wg(this.storekit);
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
        tt.authorizationStatusWillChange,
        async ({ authorizationStatus: t, newAuthorizationStatus: i }) => {
          t > he.DENIED && i < he.RESTRICTED
            ? await this.stop({ endReasonType: R.PLAYBACK_SUSPENDED, userInitiated: !1 })
            : await this.stop({ userInitiated: !1 });
        },
      ),
      (this._storekit = e));
  }
  async changeToMediaAtIndex(e = 0) {
    var a, o, l, u, d;
    await this.stop();
    const t = (a = this.queue.item(e)) == null ? void 0 : a.id,
      i = (l = (o = this._mediaItemPlayback) == null ? void 0 : o.playOptions) == null ? void 0 : l.get(t);
    let s = (i == null ? void 0 : i.startTime) || 0;
    this._dispatcher.publish(_.playInitiated, {
      item: this.queue.item(e),
      timestamp:
        (d = (u = i == null ? void 0 : i.meta) == null ? void 0 : u.initiatedTimestamp) != null ? d : Date.now(),
    });
    const n = await this._changeToMediaAtIndex(e, { userInitiated: !0 });
    n &&
      (n.id !== t && (s = 0),
      this._dispatcher.publish(P.playbackPlay, {
        item: n,
        position: s,
        playingDate: this._mediaItemPlayback.currentPlayingDate,
        userInitiated: !0,
      }));
  }
  async changeToMediaItem(e) {
    const t = this.queue.indexForItem(e);
    return t === -1 ? Promise.reject(new m(m.Reason.MEDIA_DESCRIPTOR)) : this.changeToMediaAtIndex(t);
  }
  async activate() {
    (E.debug("PlaybackController.activate()"),
      (this._isActive = !0),
      this._dispatcher.unsubscribe(_.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._dispatcher.subscribe(_.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._skipIntro.activate(),
      this._upNext.activate(),
      this._rollMonitor.activate());
  }
  async deactivate() {
    (E.debug("PlaybackController.deactivate()"),
      (this._isActive = !1),
      await this.stop(),
      this._dispatcher.unsubscribe(_.playbackStateDidChange, this.onPlaybackStateDidChange),
      this._skipIntro.deactivate(),
      this._upNext.deactivate(),
      this._rollMonitor.deactivate());
  }
  async destroy() {
    ((this._isDestroyed = !0),
      await this.deactivate(),
      this._dispatcher.unsubscribe(_.autoplayEnabledDidChange, this.updateAutoplay));
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
    var s;
    (e.isUTS && (await yg(e, { manifestManager: this.services.manifest, playOptions: t })),
      this._dispatcher.publish(_.queueItemsDidChange, [e]));
    const i = await this._mediaItemPlayback.startMediaItemPlayback(e, !0);
    if (i) {
      const n = {
        item: i,
        position: (s = this._mediaItemPlayback.currentPlaybackTime) != null ? s : 0,
        playingDate: this._mediaItemPlayback.currentPlayingDate,
        userInitiated: !0,
      };
      (E.debug("playSingleMediaItem: Dispatching DispatchTypes.playbackPlay event", n),
        this._dispatcher.publish(P.playbackPlay, n));
    }
  }
  async onPlaybackStateDidChange(e, t) {
    t.state === V.ended &&
      (this.continuous || this.repeatMode === Le.one) &&
      (E.debug("controller detected track ended event, moving to next item."),
      this._dispatcher.publish(P.applicationActivityIntent, {
        endReasonType: R.TRACK_SKIPPED_FORWARDS,
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
    var i;
    if (
      (await this.extractGlobalValues(t),
      await this._mediaItemPlayback.stop(),
      (t == null ? void 0 : t.context) !== void 0 && (this._context = t.context),
      this.setQueue(
        new Bl({
          services: { dispatcher: this.services.dispatcher },
          descriptor: {
            loaded: e,
            context: this.context,
            startWith: (i = t == null ? void 0 : t.startWith) != null ? i : t == null ? void 0 : t.startPosition,
          },
          playbackMode: this.playbackMode,
        }),
      ),
      e.length === 0)
    )
      throw (
        E.warn("No items (0) are playable for new queue"),
        new m(m.Reason.CONTENT_UNAVAILABLE, "No playable items for queue")
      );
    if (
      ((t == null ? void 0 : t.shuffleMode) !== void 0 && (this.shuffleMode = t.shuffleMode),
      (t == null ? void 0 : t.repeatMode) !== void 0 && (this.repeatMode = t.repeatMode),
      Oh(t == null ? void 0 : t.startTime))
    ) {
      const s = this.queue.nextPlayableItem;
      s && this._mediaItemPlayback.playOptions.set(s.id, { startTime: t == null ? void 0 : t.startTime });
    }
    return (
      this._dispatcher.publish("queue.created", this.queue),
      this._dispatcher.publish("queue.ready", this.queue),
      this._dispatcher.publish(_.queueIsReady, this.queue.items),
      this.queue
    );
  }
  async extractGlobalValues(e) {
    ((this._context = this.constructContext(e)),
      (e == null ? void 0 : e.featureName) !== void 0 &&
        e.context &&
        (E.warn("featureName is deprecated, pass it inside context"), (e.context.featureName = e.featureName)));
  }
  async stop(e) {
    await this._mediaItemPlayback.stop(e);
  }
  async _changeToMediaAtIndex(e = 0, t = {}) {
    var n;
    if (this.queue.isEmpty) return;
    this.queue.position = e;
    const i = this.queue.item(this.queue.position);
    if (!i) return;
    const s = await this._mediaItemPlayback.startMediaItemPlayback(i, (n = t.userInitiated) != null ? n : !1);
    if (!s && i.state === q.unsupported) {
      await this.skipToNextItem();
      return;
    }
    return s;
  }
  async _next(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === Le.one && this.queue.currentItem !== void 0) {
      (await this.stop({ userInitiated: t, ...e }), await this.play());
      return;
    } else
      !t &&
        e.seamlessAudioTransition &&
        (this._dispatcher.publish(P.playbackStop, { userInitiated: t, endReasonType: R.NATURAL_END_OF_TRACK, ...e }),
        (e = { userInitiated: e.userInitiated, seamlessAudioTransition: !0 }));
    return this._nextAtIndex(this.queue.nextPlayableItemIndex, e);
  }
  async _nextAtIndex(e, t = {}) {
    var l, u;
    if (this.queue.isEmpty) return;
    const { _mediaItemPlayback: i } = this,
      s = (l = t.userInitiated) != null ? l : !1;
    if (e < 0) {
      (E.debug("controller/index._next no next item available, stopping playback"),
        await this.stop({ userInitiated: s, seamlessAudioTransition: t.seamlessAudioTransition }),
        (i.playbackState = V.completed));
      return;
    }
    const n = this.isPlaying,
      a = i.currentPlaybackTime,
      o = await this._changeToMediaAtIndex(e, { userInitiated: s });
    return (
      this._notifySkip(n, o, {
        userInitiated: s,
        seamlessAudioTransition: (u = t.seamlessAudioTransition) != null ? u : !1,
        position: a,
        direction: R.TRACK_SKIPPED_FORWARDS,
      }),
      o
    );
  }
  async _previous(e = {}) {
    if (this.queue.isEmpty) return;
    const { userInitiated: t = !1 } = e;
    if (this.repeatMode === Le.one && this.queue.currentItem !== void 0) {
      (await this.stop({ endReasonType: R.TRACK_SKIPPED_BACKWARDS, userInitiated: t }), await this.play());
      return;
    }
    const i = this.queue.previousPlayableItemIndex;
    if (t && this.repeatMode === Le.none && this.nowPlayingItem !== void 0 && i === -1) {
      (await this.stop({ endReasonType: R.TRACK_SKIPPED_BACKWARDS, userInitiated: !0 }), await this.play());
      return;
    }
    if (i === -1) return;
    const s = this.isPlaying,
      n = this._mediaItemPlayback.currentPlaybackTime,
      a = await this._changeToMediaAtIndex(i, { userInitiated: t });
    return (
      this._notifySkip(s, a, {
        userInitiated: t,
        seamlessAudioTransition: !1,
        direction: R.TRACK_SKIPPED_BACKWARDS,
        position: n,
      }),
      a
    );
  }
  _notifySkip(e, t, i) {
    const { userInitiated: s, direction: n, position: a, seamlessAudioTransition: o = !1 } = i,
      l = this._dispatcher;
    o
      ? (E.debug("seamlessAudioTransition transition, PAF play"),
        l.publish(P.playbackPlay, { item: t, position: 0, endReasonType: R.NATURAL_END_OF_TRACK }))
      : e
        ? t
          ? l.publish(P.playbackSkip, { item: t, userInitiated: s, direction: n, position: a })
          : l.publish(P.playbackStop, { item: t, userInitiated: s, position: a })
        : t &&
          l.publish(P.playbackPlay, {
            item: t,
            playingDate: this._mediaItemPlayback.currentPlayingDate,
            position: 0,
            ...(s ? { endReasonType: R.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM } : {}),
          });
  }
  setQueue(e) {
    return (
      E.trace("PlaybackController.prepareQueue()"),
      this.hasAuthorization && (e.isRestricted = this.storekit.restrictedEnabled || !1),
      (e.repeatable = this._repeatable),
      (this._queue = e),
      (this._shuffler.queue = this._queue),
      this._dispatcher.publish(gv, e.items),
      e
    );
  }
}
mv([S()], ta.prototype, "updateAutoplay", 1);
function vv(r, e, t) {
  return (
    (e = e || r.height || 100),
    (t = t || r.width || 100),
    window.devicePixelRatio >= 1.5 && ((t *= 2), (e *= 2)),
    r.url.replace("{h}", `${e}`).replace("{w}", `${t}`).replace("{f}", "jpeg")
  );
}
var bv = Object.defineProperty,
  _v = Object.getOwnPropertyDescriptor,
  Wl = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? _v(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && bv(e, t, s), s);
  };
class ra {
  constructor(e, t) {
    c(this, "controller");
    c(this, "session", navigator.mediaSession);
    ((this.capabilities = e),
      (this.dispatcher = t),
      this.session &&
        (this.dispatcher.subscribe(_.nowPlayingItemDidChange, this.onNowPlayingItemDidChange),
        this.dispatcher.subscribe(_.capabilitiesChanged, this.onCapabilitiesChanged),
        this._setMediaSessionHandlers()));
  }
  onCapabilitiesChanged() {
    (this._resetHandlers(), this._setMediaSessionHandlers());
  }
  onNowPlayingItemDidChange(e, { item: t }) {
    this._setMediaSessionMetadata(t);
  }
  _setMediaSessionMetadata(e) {
    var t, i;
    !this.session ||
      !("MediaMetadata" in window) ||
      !e ||
      (this.session.metadata = new window.MediaMetadata({
        title: e.title,
        artist: (i = e.artistName) != null ? i : (t = e.attributes) == null ? void 0 : t.showTitle,
        album: e.albumName,
        artwork: e.artwork
          ? [96, 128, 192, 256, 384, 512].map((s) => ({
              src: vv(e.artwork, s, s),
              sizes: `${s}x${s}`,
              type: "image/jpeg",
            }))
          : [],
      }));
  }
  _setMediaSessionHandlers() {
    this.session &&
      (this._resetHandlers(),
      this.session.setActionHandler("play", () => {
        var e;
        return (e = this.controller) == null ? void 0 : e.play();
      }),
      this.capabilities.canPause
        ? this.session.setActionHandler("pause", () => {
            var e;
            return (e = this.controller) == null ? void 0 : e.pause();
          })
        : this.session.setActionHandler("pause", () => {
            var e;
            return (e = this.controller) == null ? void 0 : e.stop();
          }),
      this.capabilities.canSeek &&
        (this.session.setActionHandler("seekforward", () => {
          var e;
          return (e = this.controller) == null ? void 0 : e.seekForward();
        }),
        this.session.setActionHandler("seekbackward", () => {
          var e;
          return (e = this.controller) == null ? void 0 : e.seekBackward();
        })),
      this.capabilities.canSkipToNextItem &&
        this.session.setActionHandler("nexttrack", () => {
          var e;
          return (e = this.controller) == null ? void 0 : e.skipToNextItem();
        }),
      this.capabilities.canSkipToPreviousItem &&
        this.session.setActionHandler("previoustrack", () => {
          var e;
          return (e = this.controller) == null ? void 0 : e.skipToPreviousItem();
        }));
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
Wl([S()], ra.prototype, "onCapabilitiesChanged", 1);
Wl([S()], ra.prototype, "onNowPlayingItemDidChange", 1);
var X = ((r) => (
  (r[(r.PAUSE = 0)] = "PAUSE"),
  (r[(r.EDIT_QUEUE = 1)] = "EDIT_QUEUE"),
  (r[(r.SEEK = 2)] = "SEEK"),
  (r[(r.REPEAT = 3)] = "REPEAT"),
  (r[(r.SHUFFLE = 4)] = "SHUFFLE"),
  (r[(r.SKIP_NEXT = 5)] = "SKIP_NEXT"),
  (r[(r.SKIP_PREVIOUS = 6)] = "SKIP_PREVIOUS"),
  (r[(r.SKIP_TO_ITEM = 7)] = "SKIP_TO_ITEM"),
  (r[(r.AUTOPLAY = 8)] = "AUTOPLAY"),
  (r[(r.VOLUME = 9)] = "VOLUME"),
  r
))(X || {});
class Tv {
  constructor(e) {
    c(this, "_checkCapability", (e) => e === 9);
    c(this, "_mediaSession");
    ((this._dispatcher = e), (this._mediaSession = new ra(this, e)));
  }
  set controller(e) {
    this._mediaSession.controller = e;
  }
  updateChecker(e) {
    this._checkCapability !== e && ((this._checkCapability = e), this._dispatcher.publish(_.capabilitiesChanged));
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
var Ev = Object.defineProperty,
  Sv = Object.getOwnPropertyDescriptor,
  Yl = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Sv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Ev(e, t, s), s);
  };
class ia extends ta {
  constructor(t) {
    super(t);
    c(this, "type", gt.continuous);
    c(this, "controllerName", "ContinuousPlaybackController");
    c(this, "_isLiveStation", !1);
    c(this, "_isTracksStation", !1);
    c(this, "station");
    this._continuous = !0;
  }
  get continuous() {
    return !0;
  }
  set continuous(t) {
    if (t !== !0) throw new m(m.Reason.UNSUPPORTED_ERROR, "Continuous playback cannot be disabled for station queues.");
  }
  get isLive() {
    return this._isLiveStation;
  }
  set isLive(t) {
    t !== this._isLiveStation && ((this._isLiveStation = t), this._dispatcher.publish(_.capabilitiesChanged));
  }
  get isTracksStation() {
    return this._isTracksStation;
  }
  set isTracksStation(t) {
    t !== this._isTracksStation && ((this._isTracksStation = t), this._dispatcher.publish(_.capabilitiesChanged));
  }
  async changeToMediaItem(t) {
    E.warn("changeToMediaItem is not supported for this type of playback");
  }
  hasCapabilities(t) {
    switch (t) {
      case X.VOLUME:
        return !0;
      case X.PAUSE:
      case X.SKIP_NEXT:
      case X.SKIP_PREVIOUS:
      case X.SEEK:
        return !this.isLive;
      case X.SKIP_TO_ITEM:
      case X.AUTOPLAY:
      case X.EDIT_QUEUE:
      case X.SHUFFLE:
      case X.REPEAT:
      default:
        return !1;
    }
  }
  async pause(t) {
    if (this.isLive) {
      E.warn("pause is not supported for this type of playback");
      return;
    }
    return super.pause(t);
  }
  async skipToPreviousItem() {
    if (this.isLive) {
      E.warn("skipToPreviousItem is not supported for this type of playback");
      return;
    }
    return super.skipToPreviousItem();
  }
  async replaceQueue(t, i) {
    var n;
    const s = t[0];
    if (s === void 0) throw new m(m.Reason.CONTENT_UNAVAILABLE, "No Queue item");
    if (!Nr(s)) throw new m(m.Reason.MEDIA_DESCRIPTOR, "Item is not a Radio Station");
    return (
      (this.station = s),
      (this.isLive =
        !!(s != null && s.isLiveRadioStation) || !!((n = s == null ? void 0 : s.attributes) != null && n.isLive)),
      (this.isTracksStation = jc(s)),
      (this._context = { featureName: kt.STATION, ...(i == null ? void 0 : i.context) }),
      (this._seekable = this.isLive
        ? new Hl(this._mediaItemPlayback)
        : new jl(this._dispatcher, this._mediaItemPlayback)),
      this.isTracksStation
        ? (t = await this.loadNextTracks(this.station, { context: this.context }))
        : (t.length > 1 && E.warn(`Attempting to play multiple Live Radio Station items (${t.length})`), (t = [s])),
      super.replaceQueue(t, { context: this.context })
    );
  }
  async appendToQueue(t) {
    throw new m(m.Reason.UNSUPPORTED_ERROR, "Appending to the Queue is not supported for this type of playback");
  }
  async insertInQueue(t, i) {
    throw new m(m.Reason.UNSUPPORTED_ERROR, "Inserting into the Queue is not supported for this type of playback");
  }
  async prependToQueue(t, i) {
    throw new m(m.Reason.UNSUPPORTED_ERROR, "Prepending to the Queue is not supported for this type of playback");
  }
  async clearQueue() {
    throw new m(m.Reason.UNSUPPORTED_ERROR, "Clearing the Queue is not supported for this type of playback");
  }
  getNewSeeker() {
    return this.hasCapabilities(X.SEEK) ? super.getNewSeeker() : new lp();
  }
  async skipToNextItem() {
    if (this.isLive) {
      E.warn("Method skipToNextItem is not supported for this type of playback");
      return;
    }
    return super.skipToNextItem();
  }
  async loadNextTracks(t, i) {
    var n, a;
    if ((i == null ? void 0 : i.limit) === 0) return (E.warn("Not loading next tracks, limit is set to zero (0)"), []);
    E.debug(`Loading tracks for station ${t.id}`);
    let s = await this.services.itemLoader.loadStationNextTracks(t.id, {
      container: (n = i == null ? void 0 : i.container) != null ? n : t,
      context: i == null ? void 0 : i.context,
      limit: i == null ? void 0 : i.limit,
    });
    if ((E.debug(`Loaded ${s.length} tracks for station ${t.id}`), s.length === 0))
      throw (
        E.warn("No track data is available for the current station", {
          stationId: (a = this.station) == null ? void 0 : a.id,
        }),
        new m(m.Reason.CONTENT_UNAVAILABLE, "No track data is available for the current station.")
      );
    return (typeof (i == null ? void 0 : i.limit) == "number" && i.limit > 0 && (s = s.slice(0, i.limit)), s);
  }
  async queueNextTracks() {
    if (!this.isActive) {
      E.debug("Not loading next tracks, controller is not active");
      return;
    }
    if (this.station === void 0 || !this.isTracksStation) {
      E.debug("Not loading next tracks, not a tracks radio station");
      return;
    }
    if (this.queue.isEmpty) {
      E.debug("Not loading next tracks, queue is empty");
      return;
    }
    if (this.queue.nextPlayableItemIndex !== -1) {
      E.debug("Not loading next tracks, enough playable items in queue");
      return;
    }
    const t = await this.loadNextTracks(this.station, { context: this.context, limit: 1 });
    t.length > 0 && (E.debug(`Queueing ${t.length} ${t.length === 1 ? "track" : "tracks"}`), this.queue.append(t));
  }
  async activate() {
    (await super.activate(),
      this._dispatcher.subscribe(_.queuePositionDidChange, this.queueNextTracks),
      this.queueNextTracks());
  }
  async deactivate() {
    (await super.deactivate(), this._dispatcher.unsubscribe(_.queuePositionDidChange, this.queueNextTracks));
  }
}
Yl([S()], ia.prototype, "hasCapabilities", 1);
Yl([S()], ia.prototype, "queueNextTracks", 1);
var Iv = Object.defineProperty,
  kv = Object.getOwnPropertyDescriptor,
  Gl = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? kv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Iv(e, t, s), s);
  };
class sa {
  constructor(e, t, i) {
    c(this, "threshold", -1);
    ((this.dispatcher = e), (this.callback = t), (this.percentage = i));
  }
  startMonitor() {
    (this.dispatcher.unsubscribe(_.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.unsubscribe(_.playbackTimeDidChange, this.handleTimeChange),
      this.dispatcher.subscribe(_.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.subscribe(_.playbackTimeDidChange, this.handleTimeChange));
  }
  stopMonitor() {
    (this.dispatcher.unsubscribe(_.playbackDurationDidChange, this.updateThreshold),
      this.dispatcher.unsubscribe(_.playbackTimeDidChange, this.handleTimeChange),
      (this.threshold = -1));
  }
  async handleTimeChange(e, { currentPlaybackDuration: t, currentPlaybackTime: i }) {
    (this.threshold < 0 && this.updateThreshold(e, { duration: t }),
      !(i < this.threshold) && (this.stopMonitor(), await this.callback(i, this)));
  }
  updateThreshold(e, { duration: t }) {
    this.threshold = t * this.percentage;
  }
}
Gl([S()], sa.prototype, "handleTimeChange", 1);
Gl([S()], sa.prototype, "updateThreshold", 1);
class Pv extends xr {
  constructor(t) {
    super(t);
    c(this, "isSeamlessAudioTransitionsEnabled", !1);
    ((this.watchers = [new sa(this.dispatcher, this.handlePlaybackThreshold, 0.3)]),
      (this.isSeamlessAudioTransitionsEnabled = Q.features["seamless-audio-transitions"]));
  }
  async handlePlaybackThreshold() {
    await this.playbackController.prepareToPlayNextItem();
  }
  shouldMonitor() {
    if (!super.shouldMonitor() || !this.playbackController.hasAuthorization || this.playbackController.previewOnly)
      return !1;
    const t = this.getNextPlayableItem(),
      i = t !== void 0;
    return this.isSeamlessAudioTransitionsEnabled ? i : i && !(t != null && t.isPreparedToPlay);
  }
  getNextPlayableItem() {
    return this.playbackController.queue.nextPlayableItem;
  }
}
var Av = Object.defineProperty,
  wv = Object.getOwnPropertyDescriptor,
  Fr = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? wv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Av(e, t, s), s);
  };
class nr extends ta {
  constructor(t) {
    var s, n, a, o, l, u, d, p, y, g;
    super(t);
    c(this, "type", gt.serial);
    c(this, "controllerName", "SerialPlaybackController");
    c(this, "_preloader");
    c(this, "_isSeamlessAudioTransitionsEnabled");
    c(this, "autoplayQueueSizeThreshold");
    c(this, "autoplayUpcomingTracksLimit");
    c(this, "maxTracksForAutoplayStation");
    c(this, "_autoplayStation");
    c(this, "loadingAutoplayStation", !1);
    c(this, "loadingAutoplayTracks", !1);
    ((this._queue = new Bl(t)),
      (this._repeatable = new kg(this._dispatcher)),
      (this._seekable = new jl(this._dispatcher, this._mediaItemPlayback)),
      (this._shuffler = new ql(this, { dispatcher: this._dispatcher })),
      (this._isSeamlessAudioTransitionsEnabled = !!(
        (s = t == null ? void 0 : t.bag) != null && s.features["seamless-audio-transitions"]
      )),
      (this.autoplayQueueSizeThreshold =
        (o =
          (a = (n = t == null ? void 0 : t.bag) == null ? void 0 : n.autoplay) == null
            ? void 0
            : a.maxQueueSizeForAutoplay) != null
          ? o
          : 50),
      (this.autoplayUpcomingTracksLimit =
        (d =
          (u = (l = t == null ? void 0 : t.bag) == null ? void 0 : l.autoplay) == null
            ? void 0
            : u.maxUpcomingTracksToMaintain) != null
          ? d
          : 10),
      (this.maxTracksForAutoplayStation =
        (g =
          (y = (p = t == null ? void 0 : t.bag) == null ? void 0 : p.autoplay) == null
            ? void 0
            : y.maxQueueSizeInRequest) != null
          ? g
          : 10));
    const i = { controller: this, services: t.services };
    this._preloader = new Pv(i);
  }
  get autoplayStation() {
    return this._autoplayStation;
  }
  get autoplayStarted() {
    return this._autoplayStation !== void 0;
  }
  get autoplayEnabled() {
    return this._autoplayEnabled;
  }
  set autoplayEnabled(t) {
    ((this._autoplayEnabled = t), t === !0 ? this.startAutoplay() : this.stopAutoplay());
  }
  async activate() {
    (await super.activate(),
      this._preloader.activate(),
      this._dispatcher.subscribe(_.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.subscribe(_.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.subscribe(_.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.subscribe(_.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.subscribe(Ue.seamlessAudioTransition, this.onSeamlessAudioTransition));
  }
  async deactivate() {
    (await super.deactivate(),
      this._preloader.deactivate(),
      this._dispatcher.unsubscribe(_.repeatModeDidChange, this.onRepeatModeChange),
      this._dispatcher.unsubscribe(_.queueItemsDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(_.queuePositionDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(_.nowPlayingItemDidChange, this.onQueueChange),
      this._dispatcher.unsubscribe(Ue.seamlessAudioTransition, this.onSeamlessAudioTransition),
      await this.stopAutoplay());
  }
  hasCapabilities(t) {
    var i, s, n;
    switch (t) {
      case X.EDIT_QUEUE:
      case X.SKIP_NEXT:
      case X.SKIP_TO_ITEM:
      case X.AUTOPLAY:
      case X.VOLUME:
      case X.SKIP_PREVIOUS:
        return !0;
      case X.REPEAT:
      case X.SHUFFLE:
        return !((s = (i = this.queue) == null ? void 0 : i.currentQueueItem) != null && s.isAutoplay);
      case X.PAUSE:
      case X.SEEK:
        return !((n = this.nowPlayingItem) != null && n.isAssetScrubbingDisabled);
      default:
        return !1;
    }
  }
  async onSeamlessAudioTransition(t, i) {
    (E.trace("onSeamlessAudioTransition", i),
      this._next({
        userInitiated: !1,
        seamlessAudioTransition: !0,
        endReasonType: R.NATURAL_END_OF_TRACK,
        position: i.previous.playbackDuration / 1e3,
        isPlaying: !1,
      }));
  }
  async onRepeatModeChange() {
    (this.repeatMode === Le.none
      ? (E.debug("Queueing Autoplay tracks after RepeatMode change"), await this.queueAutoplayTracks())
      : (E.debug("Removing Autoplay tracks after RepeatMode change"),
        this.queue.removeQueueItems((t, i) => i > this.queue.position && t.isAutoplay)),
      this.repeatMode !== Le.one && this.prepareToPlayNextItem());
  }
  async onQueueChange() {
    this.queue.isInitiated
      ? this.queue.isEmpty || (await this.queueAutoplayTracks(), this.prepareToPlayNextItem())
      : (this.stopAutoplay(), this.startAutoplay());
  }
  async prepareToPlayNextItem() {
    if (!this.nowPlayingItem) return;
    const t = this.queue.nextPlayableItem;
    if (!t || this.queue.currentItem === t) {
      E.debug("Not preparing next item: no next item or current item is same as next item");
      return;
    }
    if (!this.queue.currentItem.isPreparedToPlay) {
      E.debug("Not preparing next item: current item not prepared to play");
      return;
    }
    try {
      return (E.debug(`Preparing next MediaItem: ${gi(t)}`, t), this._mediaItemPlayback.preloadMediaItem(t));
    } catch (i) {
      E.debug("next item failed to prepare for playbck -", i);
    }
  }
  async appendToQueue(t) {
    return (this.queue.splice(this.queue.appendTargetIndex, 0, t), this.queue);
  }
  async insertInQueue(t, i) {
    return (this.queue.splice(i, 0, t), this.queue);
  }
  async prependToQueue(t, i) {
    return (
      (i == null ? void 0 : i.clear) === !0 && this.queue.clearAfterCurrent(),
      this.queue.splice(this.queue.position + 1, 0, t),
      this.queue
    );
  }
  async clearQueue() {
    return (this.queue.clear(), this.queue);
  }
  async replaceQueue(t, i) {
    const s = await super.replaceQueue(t, i);
    return (await this.stopAutoplay(), await this.startAutoplay(), s);
  }
  async stopAutoplay() {
    (E.trace("SerialController.stopAutoplay()"),
      (this._autoplayStation = void 0),
      (this.queue.hasAutoplayStation = !1),
      E.debug("Removing unplayed Autoplay tracks from Queue"),
      this.queue.isInitiated && this.queue.removeQueueItems((t, i) => i > this.queue.position && t.isAutoplay === !0));
  }
  async startAutoplay() {
    var a;
    if ((E.trace("SerialController.startAutoplay()"), !this.isActive)) {
      E.debug("Not starting autoplay, not active");
      return;
    }
    if (!this.autoplayEnabled) {
      E.debug("Not starting autoplay, not enabled");
      return;
    }
    if (this.repeatMode !== Le.none) {
      E.debug("Not starting autoplay, repeat mode is on");
      return;
    }
    if (this.autoplayStation !== void 0) {
      E.debug("Autoplay station already created");
      return;
    }
    if (this.loadingAutoplayStation) {
      E.debug("Autoplay station already loading");
      return;
    }
    const t = this.queue.items.slice(-this.maxTracksForAutoplayStation);
    if (t.length === 0) {
      E.debug("No items in queue to start Autoplay station");
      return;
    }
    this.loadingAutoplayStation = !0;
    const i = (a = this.queue.userAddedItems.slice(-1)) == null ? void 0 : a.pop();
    let s;
    (i == null ? void 0 : i.container) !== void 0 && (s = { id: i.container.id, type: i.container.type });
    let n;
    try {
      (E.info(`Creating Autoplay station with ${t.length} ${t.length === 1 ? "item" : "items"}`),
        (n = (
          await this.services.itemLoader.createAutoplayStation(
            this.queue.items.slice(-this.maxTracksForAutoplayStation),
            { container: s },
          )
        ).station));
    } catch (o) {
      E.warning(`Unable to create Autoplay station: ${o.message}`);
    }
    (n === void 0
      ? E.info("Unable to create Autoplay station: no server data")
      : E.info(`Created Autoplay Station ${n == null ? void 0 : n.id}`),
      (this._autoplayStation = n),
      (this.queue.hasAutoplayStation = n !== void 0),
      (this.loadingAutoplayStation = !1),
      await this.queueAutoplayTracks());
  }
  async queueAutoplayTracks(t) {
    var n, a;
    if (this._autoplayStation === void 0) {
      E.debug("Skipping loading Autoplay tracks, no autoplay station");
      return;
    }
    if ((t == null ? void 0 : t.limit) === 0) {
      E.warn("Skipping loading Autoplay tracks, track limit set to 0");
      return;
    }
    if (this.queue.unplayedUserItems.length > this.autoplayQueueSizeThreshold) {
      E.debug(
        `Skipping loading Autoplay tracks, more than ${this.autoplayQueueSizeThreshold} user added tracks in the queue `,
      );
      return;
    }
    if (this.loadingAutoplayTracks) {
      E.debug("Skipping loading Autoplay tracks, already loading");
      return;
    }
    const i =
      this.autoplayUpcomingTracksLimit -
      this.queue.unplayedAutoplayItems.length +
      ((n = this.queue.currentQueueItem) != null && n.isAutoplay ? 1 : 0);
    if (i <= 0) {
      E.debug(
        `Skipping loading Autoplay tracks, ${this.autoplayUpcomingTracksLimit} autoplay items already in the queue`,
      );
      return;
    }
    ((this.loadingAutoplayTracks = !0),
      E.debug(`Loading next tracks from Autoplay station ${this._autoplayStation.id} (amount: ${i})`));
    let s = await this.services.itemLoader.loadStationNextTracks(this._autoplayStation.id, {
      limit: i,
      container: this._autoplayStation,
      context: {
        ...this.context,
        featureName: "now_playing",
        reco_id: (a = this.context.featureName) != null && a.startsWith("listen-now") ? void 0 : this.context.reco_id,
      },
    });
    (typeof (t == null ? void 0 : t.limit) == "number" && t.limit > 0 && (s = s.slice(0, t.limit)),
      E.debug(`Queueing ${s.length} tracks from Autoplay station ${this._autoplayStation.id}`),
      this.queue.appendQueueItems(s.map((o) => new Vl(o, { isAutoplay: !0 }))),
      (this.loadingAutoplayTracks = !1));
  }
  async _changeToMediaAtIndex(t = 0, i = { userInitiated: !1 }) {
    return await super._changeToMediaAtIndex(t, i);
  }
  get shouldTransitionSeamlessly() {
    return this._isSeamlessAudioTransitionsEnabled && this.hasAuthorization && !this.previewOnly;
  }
}
Fr([S()], nr.prototype, "hasCapabilities", 1);
Fr([S()], nr.prototype, "onSeamlessAudioTransition", 1);
Fr([S()], nr.prototype, "onRepeatModeChange", 1);
Fr([S()], nr.prototype, "onQueueChange", 1);
Fr([S()], nr.prototype, "prepareToPlayNextItem", 1);
const Ko = {};
function Rv(r, e, t, i = {}) {
  const { once: s } = i,
    n = Array.isArray(e) ? e : [e],
    a = [];
  for (const o of n) {
    const l = Cv(o, t);
    (s === !0 ? r.subscribeOnce(o, l) : r.subscribe(o, l), a.push(() => zl(r, o, t)));
  }
  return () => {
    for (const o of a) o();
  };
}
function zl(r, e, t) {
  const i = Ql(e);
  let s;
  for (let n = i.length - 1; n >= 0; n--) {
    const [a, o] = i[n];
    if (a === t) {
      ((s = o), i.splice(n, 1));
      break;
    }
  }
  s && r.unsubscribe(e, s);
}
function Ql(r) {
  let e = Ko[r];
  return (e || ((e = []), (Ko[r] = e)), e);
}
function Cv(r, e) {
  const t = Ql(r),
    i = (s, n) => {
      e(n, s);
    };
  return (t.push([e, i]), i);
}
class Ov {
  constructor(e, t = Ke.STANDARD) {
    c(this, "_bitrate");
    c(this, "_dispatcher");
    c(this, "_downlinkSamples", []);
    var i, s;
    ((this._bitrate = t != null ? t : Ke.STANDARD),
      (this._dispatcher = e),
      ((s = (i = window == null ? void 0 : window.navigator) == null ? void 0 : i.connection) == null
        ? void 0
        : s.downlink) !== void 0 && this._recalculateBitrate((window.navigator.connection.downlink || 0) * 100));
  }
  get bitrate() {
    return this._bitrate;
  }
  set bitrate(e) {
    this._bitrate !== e && ((this._bitrate = e), this._dispatcher.publish(T.playbackBitrateDidChange, { bitrate: e }));
  }
  _calculateAverageDownlink() {
    return this._downlinkSamples.length === 0
      ? 0
      : this._downlinkSamples.reduce((e, t) => e + t, 0) / this._downlinkSamples.length || 0;
  }
  _recalculateBitrate(e) {
    (h.debug("_recalculateBitrate", e),
      this._downlinkSamples.push(e),
      this._calculateAverageDownlink() > Ke.STANDARD
        ? (h.debug("setting bitrate to", Ke.HIGH), (this.bitrate = Ke.HIGH))
        : (h.debug("setting bitrate to", Ke.STANDARD), (this.bitrate = Ke.STANDARD)));
  }
}
class Dv {
  constructor(e = !1) {
    c(this, "mode");
    this.mode = e ? 0 : 1;
  }
  time(e = 0) {
    return this.mode === 1 ? Math.round(e) : e;
  }
}
const Ze = E.createChild("player"),
  Nv = Se.register("mk-hlsjs-song-playback"),
  Lv = Se.register("mk-force-native-safari-video-player");
class Mv {
  constructor(e) {
    c(this, "services");
    c(this, "cachedPlayers", new Map());
    c(this, "_isDestroyed", !1);
    this.services = e.services;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  async createPlayer(e, t) {
    if ((Ze.trace("PlayerManager.createPlayer()", e, t), e.contentType === "audio"))
      return this.createAudioPlayer(e, t);
    if (e.contentType === "video") return this.createVideoPlayer(e, t);
    throw new v("mk-171", v.Reason.CONTENT_UNSUPPORTED, {
      description: `Unable to create player for asset: ${e.id}`,
      data: e,
    });
  }
  async createAudioPlayer(e, t) {
    const { playerOptions: i } = t;
    if (await Uv(e)) {
      Ze.info("Creating HlsJsAudioPlayer required for asset");
      const s = new Tt(i);
      return (await s.initialize(), s);
    } else {
      const s = this.cachedPlayers.get(st);
      if (s !== void 0 && !s.isDestroyed) return (Ze.debug("Using cached AudioPlayer instance"), s);
      Ze.info("Creating AudioPlayer as a fall through");
      const n = new st(i);
      return (await n.initialize(), Ze.debug("Caching AudioPlayer instance"), this.cachedPlayers.set(st, n), n);
    }
  }
  async createVideoPlayer(e, t) {
    Ze.debug("Creating VideoPlayer");
    const { playerOptions: i } = t;
    if (Lv.enabled) {
      Ze.info("Creating NativeSafariVideoPlayer with mkForceSafariNativeVideoPlayer enabled");
      const a = new qi(i);
      return (await a.initialize(), a);
    }
    const s = this.cachedPlayers.get(Ae);
    if (s !== void 0 && !s.isDestroyed) return (Ze.debug("Using cached HlsJsVideoPlayer instance"), s);
    Ze.info("Creating HLSjsVideoPlayer as the default");
    const n = new Ae(i);
    return (await n.initialize(), this.cachedPlayers.set(Ae, n), n);
  }
  destroy() {
    this._isDestroyed = !0;
    for (const e of this.cachedPlayers.values()) e.destroy();
    this.cachedPlayers.clear();
  }
}
async function Uv(r) {
  var e, t, i, s;
  return !!(
    r.contentType === "video" ||
    r.item === void 0 ||
    Nr((e = r.item) != null ? e : {}) ||
    Kn((t = r.item) != null ? t : {}) ||
    Hc((i = r.item) != null ? i : {}) ||
    li((s = r.item) != null ? s : {}) ||
    Nv.enabled
  );
}
const na = [
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
  aa = [
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
  Fe = E.createChild("item-loader");
function xv(r) {
  return r != null && r.item !== void 0;
}
function Fv(r) {
  return r != null && Array.isArray(r.items);
}
function Kv(r) {
  return r != null && typeof r.url == "string";
}
function Vv(r) {
  return r != null && Array.isArray(r.urls);
}
function Bv(r) {
  return r !== void 0 && typeof r.id == "string" && typeof r.type == "string" && typeof r.attributes < "u";
}
function Vo(r) {
  if (
    Object.keys(r).reduce(function (t, i) {
      return i === "item" || i === "items" || i === "url" || i === "urls" || na.includes(i) || aa.includes(i)
        ? t + 1
        : t;
    }, 0) > 1
  )
    throw new m(m.Reason.UNSUPPORTED_ERROR, "Using multiple media kinds is not supported");
  return xv(r) ? Bo([r.item]) : Fv(r) ? Bo(r.items) : Kv(r) ? [pn(r.url)] : Vv(r) ? r.urls.map((t) => pn(t)) : $v(r);
}
function Bo(r) {
  const e = [];
  for (const t of r)
    typeof t == "string"
      ? e.push(pn(t))
      : t instanceof kr
        ? e.push({ id: t.id, kind: Ir(t.type), item: t })
        : Bv(t)
          ? e.push({ id: t.id, kind: Ir(t.type), data: t })
          : e.push(t);
  return e;
}
function pn(r) {
  if (!Ch(r)) throw new m(m.Reason.INVALID_ARGUMENTS, `Invalid media URL: ${r}`);
  const { contentId: e, kind: t } = Rc(r);
  if (e === void 0) throw new m(m.Reason.CONTENT_UNAVAILABLE, `Unable to resolve URL: ${r}`);
  const i = Xl(t);
  if (i === void 0 || (!na.includes(i) && !aa.includes(i)))
    throw new m(m.Reason.CONTENT_UNSUPPORTED, `Unsupported Media Kind: ${i}`);
  return { id: e, kind: Ir(i) };
}
function $v(r) {
  let e;
  const t = [];
  for (const a of Object.keys(r)) {
    const o = Xl(a);
    Hv(a) && (e === void 0 ? (e = [o, r[a]]) : t.push(a));
  }
  const [i, s] = e != null ? e : [];
  if (i === void 0 || s === void 0) return [];
  t.length > 0 && Fe.warn(`Found redundant named options besides ${i}: ${t.join(", ")}`);
  const n = Ir(i);
  return Array.isArray(s) ? s.map((a) => ({ id: a, kind: n })) : [{ id: s, kind: n }];
}
function Xl(r) {
  const e = Ir(r);
  return e === "episode" ? "podcastEpisode" : e === "radio-station" ? "station" : r;
}
function Hv(r) {
  return na.includes(r) || aa.includes(r);
}
function jv(r, e) {
  const t = {};
  for (const i of r) {
    const s = e(i);
    (t[s] === void 0 && (t[s] = []), t[s].push(i));
  }
  return t;
}
class qv {
  constructor(e) {
    c(this, "services");
    c(this, "fetchContainerPages");
    c(this, "isConfigured", !0);
    var t;
    ((this.services = e.services), (this.fetchContainerPages = (t = e.fetchContainerPages) != null ? t : !1));
  }
  static create(e) {
    const t = new this(e);
    return (t.configure(e), t);
  }
  configure(e) {
    e.fetchContainerPages !== void 0 && (this.fetchContainerPages = e.fetchContainerPages);
  }
  convertOptionsToItemDescriptors(e) {
    return Vo(e);
  }
  buildRequest(e, t) {
    return this.services.mediaAPI.createRequest(e, t);
  }
  async loadItems(e) {
    (Fe.trace("MusicItemLoader.loadItems()", e), Fe.debug("Loading resources for options", e));
    const t = await this.loadResources({ fetchContainerPages: this.fetchContainerPages, ...e }),
      i = this.createItems(t, { container: e == null ? void 0 : e.container, context: e == null ? void 0 : e.context });
    return (Fe.debug(`Transformed ${t.length} resources into ${i.length} MediaItems`), i);
  }
  async loadStation(e) {
    Fe.debug("Loading Radio Station", e);
    const i = this.convertOptionsToItemDescriptors(e).find((n) => n.kind === "station");
    if (i === void 0) {
      Fe.debug("No station descriptor found in options, returning undefined");
      return;
    }
    return (
      await this.loadItems({
        restricted: e.restricted,
        items: [i],
        container: e == null ? void 0 : e.container,
        context: e == null ? void 0 : e.context,
        fetchContainerPages: !1,
      })
    )[0];
  }
  async loadStationNextTracks(e, t) {
    var l, u, d, p, y, g, k;
    const i = typeof e == "string" ? e : e.id,
      s = this.buildRequest(`/v1/me/stations/next-tracks/${i}`, {
        params: (t == null ? void 0 : t.limit) !== void 0 ? { limit: t.limit } : void 0,
        method: "POST",
      }),
      n = await this.fetchResources(s),
      a = {
        id: (u = (l = t == null ? void 0 : t.container) == null ? void 0 : l.id) != null ? u : i,
        type: "stations",
        href:
          (p = (d = t == null ? void 0 : t.container) == null ? void 0 : d.href) != null
            ? p
            : `/v1/catalog/${this.services.mediaAPI.storefrontId}/stations/${i}`,
        attributes: (g = (y = t == null ? void 0 : t.container) == null ? void 0 : y.attributes) != null ? g : {},
      },
      o = (k = t == null ? void 0 : t.context) != null ? k : {};
    return mr(n.map((w) => dn(w, a, o)));
  }
  async createAutoplayStation(e, t) {
    const i = [];
    for (let u = 0; u < e.length; u++) {
      const d = e[u],
        p = Cc(d instanceof kr ? d.type : d.kind);
      /(-?songs|artists?)$/.test(p) &&
        i.push({
          id: d.id,
          type: Sr(d.id) ? "library-songs" : "songs",
          meta: (t == null ? void 0 : t.container) !== void 0 ? { container: t.container } : void 0,
        });
    }
    if (i.length === 0)
      throw (
        Fe.error("Unable to create AutoplayStation: No items to seed"),
        new m(m.Reason.CONTENT_UNAVAILABLE, "Unable to create AutoplayStation: No items to seed")
      );
    const s = this.buildRequest("/v1/me/stations/continuous", {
        params: {
          "limit[results:tracks]": (t == null ? void 0 : t.limit) !== void 0 && t.limit > 1 ? t.limit : void 0,
          with: (t == null ? void 0 : t.withTracks) === !0 ? ["tracks"] : void 0,
        },
        method: "POST",
        body: { data: i },
      }),
      { errors: n, results: a } = await s.send().then((u) => u.json());
    if (n !== void 0 && n.length > 0) {
      Fe.error("Unable to create AutoplayStation: Server Error");
      const u = new m(m.Reason.CONTENT_UNSUPPORTED, "Unable to create AutoplayStation: Server Error");
      throw ((u.data = { errors: n }), u);
    }
    if ((a == null ? void 0 : a.station) === void 0)
      throw (
        Fe.error("Unable to create AutoplayStation: No station returned from server"),
        new m(m.Reason.CONTENT_UNAVAILABLE, "Unable to create AutoplayStation: No station returned from server")
      );
    const o = this.createItems(a.station, {
      container: t == null ? void 0 : t.container,
      context: t == null ? void 0 : t.context,
    })[0];
    let l = [];
    return (
      Array.isArray(a.tracks) &&
        (l = this.createItems(a.tracks, { container: o, context: t == null ? void 0 : t.context })),
      Fe.info(`Created AutoPlay station ${o.id} with ${l.length} tracks`),
      { station: o, tracks: l }
    );
  }
  async loadResources(e) {
    const t = Vo(e),
      i = Wv(e.parameters),
      s = new Map(t.map((y, g) => [y.id, { position: g, descriptor: y }])),
      n = jv(t, (y) => y.kind),
      a = Object.entries(n),
      o = [],
      l = [];
    for (const [y, g] of a) {
      const k = [],
        w = [],
        M = [];
      for (const re of g) re.item !== void 0 || re.data !== void 0 ? k.push(re) : (Sr(re.id) ? M : w).push(re);
      const $ = [];
      (/^(?:playlists?|albums?)$/i.test(y) && $.push("tracks"), /^podcasts?$/i.test(y) && $.push("episodes"));
      const me = /^(?:playlists?|library-playlists?)$/i.test(y),
        oe = e.restricted ? "explicit" : void 0;
      k.length > 0 &&
        o.push(
          ...k.map((re) => {
            var Pe;
            return (Pe = re.item) != null ? Pe : re.data;
          }),
        );
      const de = Wt(mt(i), { include: $, extend: me ? ["hasCollaboration"] : [], restrict: oe }),
        ke = 16;
      if (w.length > 0) {
        const re = $o(w, ke);
        for (const Pe of re)
          l.push(
            this.buildRequest(`/v1/catalog/${this.services.mediaAPI.storefrontId}/${gr(y)}s`, {
              params: { ...de, ids: Pe },
            }),
          );
      }
      if (M.length > 0)
        if (y === "song") {
          const re = $o(M, ke);
          for (const Pe of re) l.push(this.buildRequest(`/v1/me/library/${gr(y)}s/`, { params: { ...de, ids: Pe } }));
        } else for (const re of M) l.push(this.buildRequest(`/v1/me/library/${gr(y)}s/${re.id}`, { params: de }));
    }
    const u = await Promise.all(
        l.map((y) =>
          this.fetchResources(y, {
            fetchContainerPages: e.fetchContainerPages,
            containerItemLimit: e.containerItemLimit,
            restricted: e.restricted,
          }),
        ),
      ),
      d = Array(s.size);
    for (const y of [...o, ...mr(u)]) {
      const g = s.get(y.id);
      (g == null ? void 0 : g.position) !== void 0 && (d[g.position] = y);
    }
    const p = [];
    for (const { position: y, descriptor: g } of s.values()) d[y] === void 0 && p.push(g);
    if (p.length > 0) {
      const y = new m(
        m.Reason.NOT_FOUND,
        `One or more items could not be resolved: ${p.map(({ id: g }) => g).join(", ")}`,
      );
      throw ((y.data = p), y);
    }
    return d;
  }
  async fetchResources(e, t) {
    var u, d;
    const i = t != null && t.restricted ? "explicit" : void 0,
      s = (u = t == null ? void 0 : t.fetchContainerPages) != null ? u : !1,
      n = Math.max(0, (d = t == null ? void 0 : t.containerItemLimit) != null ? d : 1 / 0),
      o = await (await e.send()).json();
    if ((o == null ? void 0 : o.data) === void 0)
      return (Fe.error("Unable to fetch resources: empty data from server"), []);
    const l = Array.isArray(o.data) ? o.data : [o.data];
    return Promise.all(
      l.map(async (p) => {
        var w, M, $;
        const y =
          ($ = (w = p.relationships) == null ? void 0 : w.tracks) != null
            ? $
            : (M = p.relationships) == null
              ? void 0
              : M.episodes;
        if (y === void 0) return p;
        const g = [...y.data];
        let k;
        for (s && g.length < n && (k = y.next); k !== void 0;) {
          const me = Math.min(100, n - g.length),
            ke = await (await this.buildRequest(k, { params: { restrict: i, limit: me } }).send()).json();
          (g.push(...ke.data), (k = g.length < n ? ke.next : void 0));
        }
        return (y == null || delete y.next, y == null || delete y.href, (y.data = g.slice(0, n)), p);
      }),
    );
  }
  createItems(e, t) {
    return (
      (e = Array.isArray(e) ? e : [e]),
      mr(e.map((i) => dn(i, t == null ? void 0 : t.container, t == null ? void 0 : t.context)))
    );
  }
}
function Wv(r) {
  const e = { ...r };
  if (r === void 0) return e;
  for (const t of ["extend", "include", "relate", "fields"])
    if (e[t] !== void 0) {
      const i = r[t];
      typeof i == "string" && (e[t] = i.split(/(?:,{1}?\s*|\s+)/));
    }
  return e;
}
function $o(r, e) {
  return r.reduce(function (i, s, n) {
    const a = Math.floor(n / e);
    return (i[a] === void 0 && (i[a] = []), i[a].push(s.id), i);
  }, []);
}
var Yv = Object.defineProperty,
  Gv = Object.getOwnPropertyDescriptor,
  oa = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Gv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && Yv(e, t, s), s);
  };
class Yi {
  constructor(e) {
    c(this, "services");
    c(this, "config");
    c(this, "_trackers", []);
    c(this, "enabled", !0);
    c(this, "registeredEvents", new Set());
    c(this, "lastUserIntent");
    c(this, "lastApplicationIntent");
    var t;
    ((this.services = e.services),
      (this.enabled = (t = e.enabled) != null ? t : !0),
      e.trackers !== void 0 && this.registerTrackers(e.trackers));
  }
  get isEnabled() {
    return this.enabled;
  }
  get isConfigured() {
    return this.config !== void 0;
  }
  get dispatcher() {
    return this.services.dispatcher;
  }
  get trackers() {
    return this._trackers;
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
          var t;
          try {
            await ((t = e.cleanup) == null ? void 0 : t.call(e));
          } catch (i) {
            E.warn(`Tracker failed to clean up: ${e.constructor.name}`);
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
      throw new v("mk-142", v.Reason.CONFIGURATION_ERROR, { description: "PlayActivityService is not configured yet" });
    if (this.isEnabled) {
      (await Promise.all(
        this.trackers.map(async function (t) {
          var i;
          try {
            await ((i = t.cleanup) == null ? void 0 : i.call(t));
          } catch (s) {
            E.warn(`Tracker failed to clean up: ${t.constructor.name}`);
          }
        }),
      ),
        this.teardownListeners(),
        (this.registeredEvents = new Set()));
      for (const t of this._trackers) for (const i of t.requestedEvents) this.registeredEvents.add(i);
      (this.setupListeners(),
        await Promise.all(
          this.trackers.map(async function (t) {
            try {
              await t.configure(e);
            } catch (i) {
              E.warn(`Tracker failed to configure: ${t.constructor.name}`);
            }
          }),
        ));
    }
  }
  handleEvent(e, t = {}) {
    const i = this.addIntention(e, t);
    e === P.playerActivate && (i.flush = typeof t.isPlaying == "boolean" ? !t.isPlaying : void 0);
    for (const s of this._trackers) s.handleEvent(e, i, t.item);
  }
  addIntention(e, t) {
    if (![P.playbackPause, P.playbackStop].includes(e)) return t;
    const i = { ...this.lastUserIntent, ...this.lastApplicationIntent, ...t };
    return (this.clearIntention(), i);
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
      this.dispatcher.subscribe(P.userActivityIntent, this.recordUserIntent),
      this.dispatcher.subscribe(P.applicationActivityIntent, this.recordApplicationIntent));
  }
  teardownListeners() {
    (this.registeredEvents.forEach((e) => {
      this.dispatcher.unsubscribe(e, this.handleEvent);
    }),
      this.dispatcher.unsubscribe(P.userActivityIntent, this.recordUserIntent),
      this.dispatcher.unsubscribe(P.applicationActivityIntent, this.recordApplicationIntent));
  }
}
oa([S()], Yi.prototype, "handleEvent", 1);
oa([S()], Yi.prototype, "recordApplicationIntent", 1);
oa([S()], Yi.prototype, "recordUserIntent", 1);
var zv = Object.defineProperty,
  Qv = Object.getOwnPropertyDescriptor,
  ca = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Qv(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && zv(e, t, s), s);
  };
const ve = x.createChild("playback"),
  Ho = (r, e) => {
    const { os: t } = e;
    if (r.isLinearStream && (t.name === "ios" || t.name === "ipados")) {
      ve.warn("Cannot play linear stream on iOS or iPad");
      const i = new m(m.Reason.CONTENT_UNSUPPORTED, "IOS LINEAR");
      throw ((i.data = { item: r }), i);
    }
  },
  jo = async (r, e) => {
    var t, i;
    if ((i = (t = r.container) == null ? void 0 : t.attributes) != null && i.requiresSubscription && !(await e())) {
      const n = new m(m.Reason.SUBSCRIPTION_ERROR);
      throw ((n.data = r), n);
    }
  },
  qo = (r, e) => {
    const { isMSESupported: t, isMMSSupported: i } = e;
    if (r.hasOffersHlsUrl && !t && !i) {
      ve.warn("HLSjs is not supported");
      const s = new m(m.Reason.CONTENT_UNSUPPORTED, "HLSjs Unsupported on Device");
      throw ((s.data = { item: r }), s);
    }
  };
let Wo = !1;
class Gi {
  constructor(e) {
    c(this, "playerState", { defaultPlaybackRate: 1, playbackRate: 1, volume: 1 });
    c(this, "playOptions", new Map());
    c(this, "hasMusicSubscription");
    c(this, "_currentPlayer");
    c(this, "services");
    c(this, "previewOnly", !1);
    c(this, "_volumeAtMute");
    c(this, "currentPlayback");
    c(this, "_isDestroyed", !1);
    c(this, "_currentTimedMetadata");
    c(this, "playerOptions");
    ((this.services = e.services), (this.playerOptions = e.playerOptions));
    const { playbackServices: t } = e.playerOptions;
    ((this.hasMusicSubscription = t.hasMusicSubscription),
      Vp(this.playerOptions.tokens),
      (this._currentPlayer = new om(this.playerOptions)),
      this.dispatcher.subscribe(W.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.subscribe(cn.keySystemGenericError, this.onKeySystemGenericError),
      this.dispatcher.subscribe(Ue.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
  }
  get isDestroyed() {
    return this._isDestroyed;
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
  get volume() {
    return this._currentPlayer.volume;
  }
  set volume(e) {
    (this._currentPlayer.isDestroyed && this.dispatcher.publish(T.playbackVolumeDidChange, {}),
      this._updatePlayerState("volume", e));
  }
  clearNextManifest() {
    this._currentPlayer.clearNextManifest();
  }
  destroy() {
    var e;
    ((this._currentTimedMetadata = void 0),
      (this._isDestroyed = !0),
      this.dispatcher.unsubscribe(W.playbackLicenseError, this.onPlaybackLicenseError),
      this.dispatcher.unsubscribe(cn.keySystemGenericError, this.onKeySystemGenericError),
      (e = this.dispatcher) == null ||
        e.unsubscribe(Ue.bufferTimedMetadataDidChange, this.onBufferTimedMetadataDidChange));
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
    return (ve.trace("MediaItemPlayback.prepareToPlay()", e), this.preloadMediaItem(e));
  }
  async preloadMediaItem(e) {
    if ((ve.trace("MediaItemPlayback.preloadItem()", e), Vf(e)))
      return (ve.info(`Free podcast episode, not preparing item: ${e}`, e), e);
    const t = this.playOptions.get(e.id);
    ve.info(`Preparing MediaItem: ${e}`, e);
    const i = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Ke.HIGH ? 256 : 64,
      startOver: t == null ? void 0 : t.startOver,
      bingeWatching: t == null ? void 0 : t.bingeWatching,
    });
    return (
      Yo(e, i, this.previewOnly),
      ve.info(`Calling ${this._currentPlayer.constructor.name}.preloadItem for ${e}`),
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
  async seekToTime(e, t = _e.Manual) {
    await this._currentPlayer.seekToTime(e, t);
  }
  async setPresentationMode(e) {
    return this._currentPlayer.setPresentationMode(e);
  }
  async startMediaItemPlayback(e, t) {
    return (ve.trace("MediaItemPlayback.startMediaItemPlayback()", e), this.playMediaItem(e, t));
  }
  async playMediaItem(e, t = !1, i) {
    (ve.trace("MediaItemPlayback.playMediaItem()", e),
      Ho(e, this.services.runtime),
      qo(e, this.services.runtime),
      await jo(e, this.hasMusicSubscription),
      this.playOptions.has(e.id) && ((i = i != null ? i : this.playOptions.get(e.id)), this.playOptions.delete(e.id)));
    const s = await this.services.assetResolver.resolveAsset(e, {
      previewOnly: this.previewOnly,
      subscription: await this.hasMusicSubscription(),
      bitrate: this.services.bitrateCalculator.bitrate === Ke.HIGH ? 256 : 64,
      startOver: i == null ? void 0 : i.startOver,
      bingeWatching: i == null ? void 0 : i.bingeWatching,
    });
    return (await this.playAsset(s, t, i), e);
  }
  async playAsset(e, t = !1, i) {
    ve.trace("MediaItemPlayback.playAsset", e);
    const s = e.item;
    (s == null || s.resetState(),
      Ho(s, this.services.runtime),
      qo(s, this.services.runtime),
      await jo(s, this.hasMusicSubscription),
      (this._currentTimedMetadata = void 0),
      this.playOptions.has(s.id) && ((i = i != null ? i : this.playOptions.get(s.id)), this.playOptions.delete(s.id)));
    const n = await this.playerManager.createPlayer(e, { playerOptions: this.playerOptions, playOptions: i });
    if ((await this.setCurrentPlayer(n), Yo(s, e, this.previewOnly), e.encrypted))
      if (e.encrypted)
        (ve.debug(`Initializing encrypted playback for ${s}`, e),
          (s.playbackType = Te.encryptedFull),
          (n.nowPlayingItem = s),
          await n.playItemFromEncryptedSource(s, t, i));
      else
        throw new v("mk-170", v.Reason.CONTENT_UNSUPPORTED, {
          description: "Unable to play asset for MediaItem",
          data: { asset: e, item: s },
        });
    else {
      ve.debug(`Initializing unencrypted playback for ${s}`, e);
      const a = n.isPaused() && !t;
      ((s.playbackType = this.previewOnly || e.preview ? Te.preview : Te.unencryptedFull),
        (n.nowPlayingItem = s),
        await n.playItemFromUnencryptedSource(e.assetURL, a, this.previewOnly ? void 0 : i, s));
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
        (ve.debug("MediaItemPlayback: setting currentPlayer", e),
        await this._currentPlayer.stop(),
        (this._currentPlayer = e),
        ve.trace("Applying default player state", e, this.playerState),
        Object.assign(e, this.playerState),
        this.dispatcher.publish(T.playerTypeDidChange, { player: e })),
      e
    );
  }
  getCurrentPlayer() {
    return this._currentPlayer;
  }
  async onKeySystemGenericError(e, t) {
    if (Wo) this.dispatcher.publish(T.mediaPlaybackError, t);
    else if (
      ((Wo = !0),
      ve.warn("Retrying playback after keysystemGenericError"),
      await this.stop(),
      this.currentPlayback !== void 0)
    ) {
      const { asset: i, item: s, userInitiated: n } = this.currentPlayback;
      i !== void 0 ? await this.playAsset(i, n) : await this.playMediaItem(s, n);
    }
  }
  onBufferTimedMetadataDidChange(e, t) {
    this._currentTimedMetadata = t.metadata;
  }
  async onPlaybackLicenseError(e, t) {
    this.dispatcher.publish(T.mediaPlaybackError, t);
  }
  _updatePlayerState(e, t) {
    ((this.playerState[e] = t), (this._currentPlayer[e] = t));
  }
}
ca([S()], Gi.prototype, "onKeySystemGenericError", 1);
ca([S()], Gi.prototype, "onBufferTimedMetadataDidChange", 1);
ca([S()], Gi.prototype, "onPlaybackLicenseError", 1);
function Yo(r, e, t) {
  ((r.assetURL = e.assetURL),
    e.encrypted &&
      (r.keyURLs = {
        "hls-key-server-url": e.keyServerURL,
        "hls-key-cert-url": e.keyCertURL,
        "widevine-cert-url": e.keyCertURL,
      }),
    e.meta !== void 0 && (r.hlsMetadata = e.meta),
    t
      ? (r.playbackType = Te.preview)
      : e.encrypted
        ? e.encrypted
          ? (r.playbackType = Te.encryptedFull)
          : (r.playbackType = Te.none)
        : (r.playbackType = Te.unencryptedFull),
    (r.state = q.ready));
}
const ri = E.createChild("rtc");
class Jl {
  constructor(e) {
    c(this, "options");
    c(this, "reportingAgent");
    c(this, "instance");
    c(this, "currentMediaItem");
    c(this, "_storeBag");
    c(this, "requestedEvents", []);
    this.options = e;
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  async configure(e) {
    this.instance = e.instance;
  }
  handleEvent(e, t, i) {}
  async loadScript() {
    if (!Q.urls.rtc) throw new Error("bag.urls.rtc is not configured");
    await Wi(Q.urls.rtc);
  }
  prepareReportingAgent(e) {
    const {
      Sender: t,
      ClientName: i,
      ServiceName: s,
      ApplicationName: n,
      ReportingStoreBag: a,
      DeviceName: o,
    } = window.rtc.RTCReportingAgentConfigKeys;
    e = e != null ? e : this.instance.nowPlayingItem;
    const l = {
        firmwareVersion: this.generateBrowserVersion(),
        model: this.options.browserName,
        ...this.getMediaIdentifiers(e),
      },
      u = this.getServiceNameForItem(e);
    this._storeBag === void 0 && (this._storeBag = this.generateStoreBag(u));
    const d = {
      [t]: "HLSJS",
      [i]: this.options.clientName,
      [s]: u,
      [n]: this.options.applicationName,
      [a]: this._storeBag,
      [o]: this.options.osVersion,
      userInfoDict: l,
    };
    return (
      ri.debug("RTC: creating reporting agent with config", d),
      (this.reportingAgent = new window.rtc.RTCReportingAgent(d)),
      ri.debug("RTC: created reporting agent", this.reportingAgent),
      this.reportingAgent
    );
  }
  async cleanup() {
    this.clearReportingAgent();
  }
  getMediaIdentifiers(e) {
    var i;
    const t = e == null ? void 0 : e.defaultPlayable;
    if (t) {
      const s = {};
      return (
        ((i = t.mediaMetrics) == null ? void 0 : i.MediaIdentifier) !== void 0 &&
          (s.MediaIdentifier = t.mediaMetrics.MediaIdentifier),
        t.channelId !== void 0 && (s.ContentProvider = t.channelId),
        s
      );
    } else {
      if ((e == null ? void 0 : e.type) === "musicVideo" || (e == null ? void 0 : e.type) === "podcast-episodes")
        return { MediaIdentifier: `adamid=${e.id}` };
      if (e != null && e.isLiveVideoStation) return { MediaIdentifier: `raid=${e.id}` };
    }
  }
  clearReportingAgent() {
    this.reportingAgent !== void 0 &&
      (this.reportingAgent.destroy(),
      ri.debug("RTC: called destroy on reporting agent", this.reportingAgent),
      (this.reportingAgent = void 0));
  }
  generateBrowserVersion() {
    return this.options.browserMajorVersion
      ? `${this.options.browserMajorVersion}.${this.options.browserMinorVersion || 0}`
      : "unknown";
  }
  generateStoreBag(e) {
    var p;
    const { storeBagURL: t, clientName: i, applicationName: s, browserName: n } = this.options,
      a = `${Q.app.name}-${Q.app.build}`,
      o = (p = this.instance) == null ? void 0 : p.version,
      u = { iTunesAppVersion: `${a}/${o}` },
      d = new window.rtc.RTCStorebag.RTCReportingStoreBag(t, i, e, s, n, u);
    return (ri.debug("RTC: created store bag", d), d);
  }
  getServiceNameForItem(e) {
    var i, s;
    const t = this.options.serviceName;
    return e
      ? e.isLinearStream
        ? (i = e.defaultPlayable) != null && i.useSeparateQoSReportingBucket
          ? "com.apple.tv.external.indefinite.fast"
          : "com.apple.tv.external.indefinite"
        : (s = e.defaultPlayable) != null && s.useSeparateQoSReportingBucket
          ? "com.apple.tv.external.fast"
          : t
      : t;
  }
}
function Xv(r, e = 1) {
  if (typeof Array.prototype.flat == "function") return Array.prototype.flat.call(r, e);
  if (r == null) throw new TypeError("Cannot convert undefined or null to object");
  Array.isArray(r) || (r = Array.from(r));
  function t(i, s) {
    return s <= 0
      ? i.slice()
      : Array.prototype.reduce.call(
          i,
          function (n, a) {
            return Array.isArray(a) ? n.concat(t(a, s - 1)) : [...n, a];
          },
          [],
        );
  }
  return t(r, e);
}
function Jv(r) {
  return Xv(r, 1 / 0);
}
function Zv(r) {
  return !!r && typeof r == "object" && !Array.isArray(r);
}
function ki(r) {
  return typeof r == "string";
}
function zt(r, e) {
  return ki(r) ? ((e == null ? void 0 : e.trim) === !0 ? r.trim() : r).length === 0 : !1;
}
function Ts(r) {
  return typeof r == "function";
}
function eb(r) {
  return !!r && typeof r == "object" && !Array.isArray(r);
}
function tb(r, e) {
  if (((e = ki(e) && !zt(e, { trim: !0 }) ? e : ""), e.length > 1))
    throw new Error("QueryString prefix can only be a single character");
  return r.replace(new RegExp(`^[?&${e}]+`, "i"), "");
}
function rb(r, e) {
  var u, d, p, y, g, k, w, M, $, me;
  if (!r) return "";
  let t = (e == null ? void 0 : e.prefix) === !0 ? "?" : "";
  if ((ki(e == null ? void 0 : e.prefix) && (t = e.prefix), ki(r))) return t + tb(r, t);
  const i = Ts(e == null ? void 0 : e.arrayFormat)
      ? e.arrayFormat
      : (d = Xo[(u = e == null ? void 0 : e.arrayFormat) != null ? u : Go]) != null
        ? d
        : Xo[Go],
    s = Ts(e == null ? void 0 : e.objectFormat)
      ? e.objectFormat
      : (y = Qo[(p = e == null ? void 0 : e.objectFormat) != null ? p : zo]) != null
        ? y
        : Qo[zo];
  function n(oe, de) {
    return nb(oe, e) ? "" : eb(oe) ? s(oe, de) : Array.isArray(oe) ? i(oe, de) : Bt(oe, de);
  }
  const a = (g = e == null ? void 0 : e.sort) != null ? g : sb;
  let o = ib;
  Ts(e == null ? void 0 : e.encode) && (o = e.encode);
  const l = s(r, {
    path: [],
    format: n,
    encode: o,
    sort: a,
    formatting: {
      skipNull: (k = e == null ? void 0 : e.skipNull) != null ? k : !1,
      skipUndefined: (w = e == null ? void 0 : e.skipUndefined) != null ? w : !0,
      skipEmptyString: (M = e == null ? void 0 : e.skipEmptyString) != null ? M : !0,
      skipEmptyArray: ($ = e == null ? void 0 : e.skipEmptyArray) != null ? $ : !0,
      includeNullValue: (me = e == null ? void 0 : e.includeNullValue) != null ? me : !1,
    },
  });
  return zt(l) ? "" : t + l;
}
const Go = "bracket",
  zo = "bracket",
  ib = (r) => encodeURIComponent(String(r)),
  sb = (...r) => 0,
  Qo = {
    bracket: function (e, t) {
      return Object.keys(e)
        .sort(t.sort)
        .map(function (i) {
          return t.format(e[i], { ...t, path: t.path.concat(i) });
        })
        .filter((i) => !zt(i))
        .join("&");
    },
    dot: function (e, t) {
      throw new Error("Not Implemented");
    },
  },
  Xo = {
    comma: function (e, t) {
      return Bt(e.join(","), t);
    },
    repeat: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? Bt("", t)
        : e
            .map((i) => Bt(String(i), t))
            .filter((i) => i.length > 0)
            .join("&");
    },
    bracket: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? Bt("", t)
        : e
            .map(function (i) {
              return t.format(i, { ...t, path: [...t.path, ""] });
            })
            .filter((i) => !zt(i) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
    index: function (e, t) {
      return e.length === 0 && t.formatting.skipEmptyArray === !1
        ? Bt("", t)
        : e
            .map(function (i, s) {
              return t.format(i, { ...t, path: [...t.path, String(s)] });
            })
            .filter((i) => !zt(i) && t.formatting.skipEmptyArray !== !1)
            .join("&");
    },
  };
function Bt(r, e) {
  const t = e.path.map((i, s) => (s === 0 ? e.encode(i) : `[${e.encode(i)}]`)).join("");
  return r === null && e.formatting.includeNullValue !== !0 ? t : `${t}=${e.encode(r)}`;
}
function nb(r, e) {
  return !!(
    (r === void 0 && (e == null ? void 0 : e.skipUndefined) !== !1) ||
    (r === null && (e == null ? void 0 : e.skipNull) !== !1) ||
    (zt(r) && (e == null ? void 0 : e.skipEmptyString) !== !1) ||
    (Array.isArray(r) && r.length === 0 && (e == null ? void 0 : e.skipEmptyArray) !== !1)
  );
}
function ab(r) {
  const e = { method: "GET", host: r.hostname, path: r.pathname };
  if (r.searchParams.size > 0) {
    const t = {};
    for (const [i, s] of r.searchParams.entries()) t[i] = s;
    e.params = t;
  }
  return e;
}
function Zl(r, e) {
  return rb(r, { prefix: e == null ? void 0 : e.prefix, objectFormat: "bracket", arrayFormat: "comma" });
}
function eu(r, e, t) {
  let i = e != null ? e : "";
  Zv(i) && ((t = e), (i = ""));
  const s = ob(r, i);
  let n = "?";
  s.endsWith("&") || s.endsWith("?") ? (n = "") : s.includes("?") && (n = "&");
  const a = t === void 0 ? "" : Zl(t, { prefix: n });
  return s + a;
}
function ob(...r) {
  const e = Jv(r).filter((i) => typeof i == "string" && i.trim().length !== 0);
  if (e.length === 0) return "/";
  let t = e[0];
  for (let i = 1; i < e.length; i++) t = t.replace(/[/]+$/, "") + "/" + e[i].replace(/^[/]+/, "");
  return (
    /^([a-z][a-z0-9\-_+]+)?:\/\//i.test(t) || (t = "/" + t.replace(/^[/]+/, "")),
    (t = t.replace(/(:)?[/]+/g, (i, s) => (s ? i : "/"))),
    t
  );
}
function tu(r) {
  return typeof r == "string";
}
function cb(r, e) {
  return tu(r) ? ((e == null ? void 0 : e.trim) === !0 ? r.trim() : r).length === 0 : !1;
}
const lb = (r) => !cb(r);
function ub(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
class la {
  static create(e) {
    return new la(e);
  }
  withMethod(e) {
    return ((this._config.method = e), this);
  }
  withScheme(e) {
    return ((this._config.scheme = e), this);
  }
  withHost(e) {
    const t = /^(https?)?(:?:\/\/)?([^/]+)/i.exec(e);
    return (t && (lb(t[1]) && this.withScheme(t[1]), (this._config.host = t[2])), this);
  }
  withPath(e) {
    return ((this._config.path = "/" + e.replace(/^\/+/, "")), this);
  }
  withHeader(e, t) {
    return ((this._config.headers[e.toLowerCase()] = t), this);
  }
  withHeaders(e) {
    if (e instanceof Headers || e instanceof Map) for (const [t, i] of e.entries()) this.withHeader(t, i);
    else for (const [t, i] of Object.entries(e)) this.withHeader(t, i);
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
    var t;
    return (
      ((t = this._config.headers) == null ? void 0 : t["Content-Type"]) === void 0 &&
        this.withHeader("Content-Type", "application/json"),
      (this._config.body = tu(e) ? e : JSON.stringify(e)),
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
    for (const [i, s] of Object.entries(t)) {
      const n = e[i];
      n !== void 0 && s.call(this, n);
    }
    return this;
  }
  withURL(e) {
    return this.withConfig(ab(e));
  }
  async config() {
    return this._config;
  }
  async build() {
    const { MediaAPIRequest: e } = await Da(() => Promise.resolve().then(() => Zo), void 0);
    return new e(await this.config());
  }
  async send(e) {
    const { sendRequest: t } = await Da(() => Promise.resolve().then(() => Zo), void 0);
    return t(await this.build(), { fetch: e == null ? void 0 : e.fetch });
  }
  constructor(e) {
    (ub(this, "_config", { method: "GET", scheme: "https", host: "", path: "", headers: {}, params: {}, body: void 0 }),
      this.withConfig(e != null ? e : {}));
  }
}
class Pi extends Error {
  constructor(e, t, i) {
    super(t);
  }
}
function dr(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
class db {
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
    (dr(this, "__brand__", "MediaAPIResponse"),
      dr(this, "config", void 0),
      dr(this, "response", void 0),
      dr(this, "textPayload", void 0),
      dr(this, "jsonPayload", void 0),
      (this.response = e),
      (this.config = hb(t) ? t.config : t));
  }
}
function hb(r) {
  return r != null && r.__brand__ === "MediaAPIRequest";
}
function Jo(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
class ru extends Request {
  static async builder() {
    return la.create();
  }
  async send(e) {
    return ua(this, e);
  }
  constructor(e) {
    var s, n, a;
    const t = new URL(
        eu(
          `${(s = e.scheme) != null ? s : "https"}://${e.host}`,
          e.path,
          Zl((n = e.params) != null ? n : {}, { prefix: "?" }),
        ),
      ),
      i = { method: e.method, headers: new Headers((a = e.headers) != null ? a : {}), body: void 0 };
    (e.body !== void 0 &&
      (typeof e.body == "string"
        ? (i.body = e.body)
        : ((i.body = JSON.stringify(e.body)),
          i.headers.has("Content-Type") || i.headers.set("Content-Type", "application/json"))),
      super(t, i),
      Jo(this, "__brand__", "MediaAPIRequest"),
      Jo(this, "config", void 0),
      (this.config = e));
  }
}
async function ua(r, e) {
  var s;
  const t = (
    (s = e == null ? void 0 : e.fetch) != null ? s : (globalThis == null ? void 0 : globalThis.fetch) !== void 0
  )
    ? fetch.bind(globalThis)
    : void 0;
  if (t === void 0) throw new Pi("CONFIGURATION_ERROR", "Unable to find valid fetch implementation");
  let i;
  try {
    i = await t(r);
  } catch (n) {
    throw new Pi("NETWORK_ERROR", `Unable to complete request for ${r.url}`, n);
  }
  return new db(i, r);
}
const Zo = Object.freeze(
  Object.defineProperty({ __proto__: null, MediaAPIRequest: ru, sendRequest: ua }, Symbol.toStringTag, {
    value: "Module",
  }),
);
function hr(r, e, t) {
  return (
    e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[e] = t), r
  );
}
const fb = "api.music.apple.com";
class pb {
  get fetch() {
    if (this.fetchFunction === void 0) throw new Pi("CONFIGURATION_ERROR", "Could not find a fetch implementation");
    return this.fetchFunction;
  }
  resolvePath(e) {
    return new URL(eu(`${this.scheme}://${this.host}`, e));
  }
  createRequest(e, t) {
    var n;
    const i = { ...(t == null ? void 0 : t.headers), Authorization: `Bearer ${this.developerToken}` };
    this.mediaUserToken !== void 0 && (i["Media-User-Token"] = this.mediaUserToken);
    const s = { ...(t == null ? void 0 : t.params) };
    if (e instanceof URL || /^http?s/i.test(e)) {
      const a = new URL(e);
      if (a.hostname !== this.host) throw new Pi("VALUE_ERROR", "URL host does not match configured API host");
      e = a.pathname;
      for (const [o, l] of a.searchParams.entries()) s[o] = l;
    }
    return new ru({
      method: (n = t == null ? void 0 : t.method) != null ? n : "GET",
      scheme: this.scheme,
      host: this.host,
      path: e,
      headers: i,
      params: s,
      body: t == null ? void 0 : t.body,
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
  async makeRequest(e, t, i) {
    return ua(this.createRequest(t, { ...i, method: e }), { fetch: this.fetch });
  }
  constructor(e) {
    var t, i, s;
    if (
      (hr(this, "scheme", void 0),
      hr(this, "host", void 0),
      hr(this, "developerToken", void 0),
      hr(this, "mediaUserToken", void 0),
      hr(this, "fetchFunction", void 0),
      e.developerToken === void 0 || e.developerToken.trim() === "")
    )
      throw new Error("Missing or empty developer token");
    ((this.developerToken = e.developerToken.trim()),
      (this.scheme = (t = e.scheme) != null ? t : "https"),
      (this.host = (i = e.host) != null ? i : fb),
      (this.mediaUserToken = e.mediaUserToken),
      (this.fetchFunction = ((s = e.fetch) != null ? s : (globalThis == null ? void 0 : globalThis.fetch) !== void 0)
        ? globalThis.fetch.bind(globalThis)
        : void 0));
  }
}
function ec(r, e) {
  return yb(r)
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
function yb(r) {
  try {
    return yn(r);
  } catch (e) {
    throw e.message === "UNCLOSED_PARAMETER" ? new Error(`Unclosed parameter in path: "${r}"`) : e;
  }
}
function yn(r, e = []) {
  if (r.startsWith("{{")) {
    const t = r.indexOf("}}");
    if (t === -1) throw new Error("UNCLOSED_PARAMETER");
    const i = { type: 1, value: r.slice(2, t) };
    return t + 2 < r.length ? yn(r.slice(t + 2), [...e, i]) : [...e, i];
  } else {
    const t = r.indexOf("{{");
    return t === -1 ? [...e, { type: 0, value: r }] : yn(r.slice(t), [...e, { type: 0, value: r.slice(0, t) }]);
  }
}
class mb extends pb {
  constructor(t) {
    if (z(t.host)) throw new v("mk-114", v.Reason.CONFIGURATION_ERROR, "Invalid API Host for MediaAPIClient");
    if (z(t.developerToken))
      throw new v("mk-115", v.Reason.CONFIGURATION_ERROR, "Invalid developerToken for MediaAPIClient");
    super({ host: t.host, developerToken: t.developerToken, mediaUserToken: t.mediaUserToken });
    c(this, "isConfigured", !0);
    c(this, "services");
    c(this, "storefrontId", "us");
    ((this.services = t.services), t.storefrontId !== void 0 && (this.storefrontId = t.storefrontId));
    const i = ["get", "post", "put", "patch", "delete", "head"];
    for (const s of i) {
      const n = this[s].bind(this);
      this[s] = async function (a, ...o) {
        return n(typeof a == "string" ? ec(a, this.parameters) : a, ...o);
      }.bind(this);
    }
  }
  get fetch() {
    return this.services.request.fetch;
  }
  get parameters() {
    return { storefront: this.storefrontId, storefrontId: this.storefrontId, storefrontID: this.storefrontId };
  }
  configure(t) {
    (t.host !== void 0 && (this.host = t.host),
      t.developerToken !== void 0 && (this.developerToken = t.developerToken),
      t.mediaUserToken !== void 0 && (this.mediaUserToken = t.mediaUserToken),
      t.storefrontId !== void 0 && (this.storefrontId = t.storefrontId));
  }
  createRequest(t, ...i) {
    return (typeof t == "string" && (t = ec(t, this.parameters)), super.createRequest(t, ...i));
  }
}
const gb = (r, e) => {
    iu.info("converting manifest URIs to absolute paths");
    const t = new URL(r);
    let i = e.replace(/URI="([^"]*)"/g, function (s, n) {
      return `URI="${new URL(n, t).href}"`;
    });
    return (
      (i = i.replace(/^(#EXT-X-STREAM-INF:[^\n]*\n)(.*$)/gim, function (s, n, a) {
        const o = new URL(a, t);
        return `${n}${o.href}`;
      })),
      i
    );
  },
  vb = ["https://play.itunes.apple.com/", "https://linear.tv.apple.com/", "https://play-edge.itunes.apple.com"],
  iu = h.createChild("manifest"),
  tc = Se.register("mk-load-manifest-once");
class bb {
  constructor(e) {
    c(this, "cache");
    c(this, "services");
    c(this, "personalizedManifests", !1);
    c(this, "developerToken");
    c(this, "mediaUserToken");
    c(this, "isConfigured", !0);
    var t, i;
    ((this.services = e.services),
      (this.developerToken = e.developerToken),
      (this.mediaUserToken = e.mediaUserToken),
      (this.cache = (t = e.cache) != null ? t : new Map()),
      (this.personalizedManifests = (i = e.personalizedManifests) != null ? i : !1),
      tc.configured && (this.personalizedManifests = tc.enabled));
  }
  get fetch() {
    return this.services.request.fetch;
  }
  async fetchManifest(e) {
    return (iu.info("fetching manifest at", e), this.personalizedManifests ? this.fetchForCache(e) : this.fetchOnly(e));
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
    var l;
    const t = new Headers();
    vb.some((u) => e.startsWith(u)) &&
      this.mediaUserToken !== void 0 &&
      (t.set("Authorization", `Bearer ${this.developerToken}`), t.set("media-user-token", this.mediaUserToken));
    const s = await this.fetch(e, { headers: t }),
      n = gb(e, await s.text()),
      a = (l = s.headers.get("content-type")) != null ? l : void 0,
      o = { url: e, content: n, contentType: a };
    return (this.cache.set(e, o), o);
  }
  async fetchOnly(e) {
    var n;
    const t = await this.fetch(e),
      i = await t.text(),
      s = (n = t.headers.get("content-type")) != null ? n : void 0;
    return { url: e, content: i, contentType: s };
  }
  configure(e) {
    (e.developerToken !== void 0 && (this.developerToken = e.developerToken),
      Qe(e, "mediaUserToken") && (this.mediaUserToken = e.mediaUserToken),
      e.personalizedManifests !== void 0 && (this.personalizedManifests = e.personalizedManifests),
      e.cache !== void 0 && (this.cache = e.cache));
  }
}
class _b {
  constructor(e) {
    c(this, "services");
    this.services = e.services;
    const t = ["get", "post", "put", "patch", "delete", "head"];
    for (const i of t)
      this[i] = async function (s, ...n) {
        return rc(await this.client[i](s, ...n));
      }.bind(this);
  }
  get client() {
    return this.services.mediaAPI;
  }
  async request(e, t, i) {
    return rc(
      await this.client
        .createRequest(e, {
          params: t,
          headers: i == null ? void 0 : i.headers,
          method: i == null ? void 0 : i.method,
          body: i == null ? void 0 : i.body,
        })
        .send(),
    );
  }
  async music(e, t, i) {
    const s = await this.request(e, t, i);
    return ((s.data = s.json), s);
  }
}
async function rc(r) {
  const e = {
    url: r.url,
    status: r.status,
    statusText: r.statusText,
    text: await r.text(),
    json: void 0,
    data: void 0,
    errors: void 0,
  };
  return (
    e.text.trim().length > 0 && ((e.json = await r.json()), (e.data = await r.data()), (e.errors = await r.errors())), e
  );
}
async function ic(r, e) {
  var n, a, o, l;
  const { mediaAPI: t } = e,
    i = await t.get("/v1/play/assets", { params: { ...r.playParams, keyFormat: "web" } });
  if (i.status === 500) throw new v("mk-153", v.Reason.SERVER_ERROR, { data: r });
  if (i.status === 403) {
    const u = await i.json(),
      d = (u == null ? void 0 : u.code) === "40303" ? v.Reason.SUBSCRIPTION_ERROR : v.Reason.ACCESS_DENIED;
    throw new v("mk-154", d, {
      description:
        (a = (n = u == null ? void 0 : u.title) != null ? n : u == null ? void 0 : u.detail) != null ? a : "",
      data: r,
    });
  }
  if (i.status !== 200) throw new v("mk-155", v.Reason.CONTENT_UNAVAILABLE, { data: r });
  const s = await i.json();
  return (l = (o = s == null ? void 0 : s.results) == null ? void 0 : o.assets) != null ? l : [];
}
async function Tb(r, e) {
  var d, p, y;
  const t = new Headers({
      Authorization: `Bearer ${e.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Apple-Music-User-Token": `${e.mediaUserToken}`,
    }),
    i = String(r.playParams.id),
    s = r.isLibraryItem
      ? Object.fromEntries(
          [
            ["purchaseAdamId", r.playParams.purchasedId],
            ["subscriptionAdamId", Td(i) ? i.slice(2) : r.playParams.catalogId],
            ["universalLibraryId", Sr(i) ? i : void 0],
          ].filter((g, k) => k !== void 0),
        )
      : { salableAdamId: i },
    n = e.request,
    a = n.buildRequest(e.endpoint, { method: "POST", body: JSON.stringify(s), headers: t }),
    o = await n.fetchJSON(a);
  if ((o == null ? void 0 : o.songList) === void 0 || o.songList.length === 0)
    throw new v("mk-160", v.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to load assets for MediaItem",
      data: r,
    });
  const l = o.songList[0];
  let u;
  if (Eb(l))
    u = {
      url: l["hls-playlist-url"],
      playlist: !0,
      keyServerURL: l["hls-key-server-url"],
      fairplayCertURL: l["hls-key-cert-url"],
      widevineCertURL: l["widevine-cert-url"],
    };
  else if (Sb(l))
    u = {
      url: l.assets[0].URL,
      playlist: !1,
      keyServerURL: l["hls-key-server-url"],
      fairplayCertURL: l["hls-key-cert-url"],
      widevineCertURL: l["widevine-cert-url"],
    };
  else {
    const g = (d = e.bitrate) != null ? d : 64,
      k = (p = e.encoding) != null ? p : "cbcp",
      w =
        (y = l.assets.find((M) => {
          var $;
          return (($ = M.flavor) != null ? $ : "").endsWith(`${k}${g}`);
        })) == null
          ? void 0
          : y.URL;
    w !== void 0 &&
      (u = {
        url: w,
        playlist: !1,
        bitrate: g,
        encoding: k,
        keyServerURL: l["hls-key-server-url"],
        fairplayCertURL: l["hls-key-cert-url"],
        widevineCertURL: l["widevine-cert-url"],
      });
  }
  if (u === void 0)
    throw new v("mk-161", v.Reason.CONTENT_UNAVAILABLE, { description: "Unable to fetch asset from MZPlay", data: r });
  return u;
}
function Eb(r) {
  const e = r["hls-playlist-url"];
  return e !== void 0 && !z(e);
}
function Sb(r) {
  const e = r.assets[0];
  return r.assets.length === 1 && e !== void 0 && e.flavor === void 0 && !z(e.URL);
}
const Ib = /^(?:#EXT-X-SESSION-DATA:?)DATA-ID="([^"]+)".+VALUE="([^"]+)".*$/,
  kb = /^com\.apple\.hls\./i;
async function Pb(r, e) {
  if (!r.isUTS || !r.assetURL)
    throw new v("mk-167", v.Reason.INVALID_ARGUMENTS, { description: "Item is not an UTS item", data: r });
  const t = Mr(r, e.playOptions);
  let i;
  try {
    i = await e.manifestManager.fetchManifest(t);
  } catch (n) {
    throw new v("mk-168", v.Reason.CONTENT_UNAVAILABLE, {
      description: "Unable to fetch HLS Playlist",
      data: r,
      origin: n,
    });
  }
  const s = {};
  for (const n of i.content.split(`
`)) {
    const a = n.match(Ib);
    a !== null && (s[a[1].replace(kb, "")] = a[2]);
  }
  return s;
}
const Ab = Se.register("mk-broadcast-radio-playback"),
  wb = Se.register("mk-hlsjs-song-playback"),
  ie = E.createChild("asset");
class Rb {
  constructor(e) {
    c(this, "services");
    c(this, "isConfigured", !0);
    c(this, "_mzplayAssetEndpoint");
    c(this, "_staticKeyURLs");
    ((this.services = e.services),
      (this._mzplayAssetEndpoint = e.mzplayAssetEndpoint),
      (this._staticKeyURLs = e.staticKeyURLs));
  }
  get mzplayAssetEndpoint() {
    if (this._mzplayAssetEndpoint === void 0)
      throw new v("mk-147", v.Reason.CONFIGURATION_ERROR, { description: "MZPlay assets URL is not configured" });
    return this._mzplayAssetEndpoint;
  }
  get staticKeyURLs() {
    if (this._staticKeyURLs === void 0)
      throw new v("mk-143", v.Reason.CONFIGURATION_ERROR, { description: "Static Key URLs not configured" });
    return this._staticKeyURLs;
  }
  get keySystem() {
    if (this.services.runtime.preferredKeySystem === void 0)
      throw new v("mk-140", v.Reason.CONTENT_UNSUPPORTED, { description: "No DRM KeySytem available" });
    return this.services.runtime.preferredKeySystem;
  }
  async configure(e) {
    (ie.trace("MKPlayableAssetResolver.configure(...)", e),
      (e == null ? void 0 : e.mzplayAssetEndpoint) !== void 0 && (this._mzplayAssetEndpoint = e.mzplayAssetEndpoint),
      (e == null ? void 0 : e.staticKeyURLs) !== void 0 && (this._staticKeyURLs = e.staticKeyURLs));
  }
  async resolveAsset(e, t) {
    var i;
    if ((ie.info(`Resolving asset for ${e}`, e, t), await this.shouldPlayPreview(e, t))) {
      ie.debug(`Resolving preview asset for ${e}`, e, t);
      const s = await this.resolvePreviewAsset(e, t);
      return (ie.debug(`Resolved preview asset for ${e}`, s), s);
    }
    if (!z((i = e.rawAssetUrl) != null ? i : "")) {
      ie.debug(`Resolving direct asset for ${e}`, e, t);
      const s = await this.resolveDirectURLAsset(e, t);
      return (ie.debug(`Resolved direct asset for ${e}`, s), s);
    }
    if (jf(e)) {
      ie.debug(`Resolving Broadcast Radio asset for ${e}`, e, t);
      const s = await this.resolveBroadcastRadioAsset(e, t);
      return (ie.debug(`Resolved Broadcast Radio asset for ${e}`, s), s);
    }
    if (e.isUTS) {
      ie.debug(`Resolving UTS asset for ${e}`, e, t);
      const s = await this.resolveUTSAsset(e, t);
      return (ie.debug(`Resolved UTS asset for ${e}`, s), s);
    }
    if ((li(e) || Hc(e)) && e.hasOffersHlsUrl) {
      ie.debug(`Resolving HLS Offer asset for ${e}`, e, t);
      const s = await this.resolveHLSOffersAsset(e, t);
      return (ie.debug(`Resolved HLS Offer asset for ${e}`, s), s);
    }
    if (e.isLiveRadioStation || e.isRadioEpisode || e.isLiveVideoStation) {
      ie.debug(`Resolving Live Radio asset for ${e}`, e, t);
      const s = await this.resolveRadioStationAsset(e, t);
      return (ie.debug(`Resolved Live Radio asset for ${e}`, s), s);
    }
    if (e.type === "song" && wb.enabled) {
      ie.debug(`Resolving Catalog Song asset for ${e}`, e, t);
      const s = await this.resolveCatalogSongAsset(e, t);
      return (ie.debug(`Resolved Catalog Song asset for ${e}`, s), s);
    }
    if (await this.isMediaAPIContentType(e, t)) {
      ie.debug(`Resolving MZPlay asset for ${e}`, e, t);
      const s = await this.resolveMZPlayWebAsset(e, t);
      return (ie.debug(`Resolved MZPlay asset for ${e}`, s), s);
    }
    throw new v("mk-145", v.Reason.CONTENT_UNSUPPORTED, {
      description: `Could not resolve asset for content type ${e.type}`,
      data: e,
    });
  }
  async resolvePreviewAsset(e, t) {
    var i;
    if ((ie.debug(`Resolving preview asset for ${e}`, e, t), e.previewURL === void 0 || z(e.previewURL)))
      throw new v("mk-150", v.Reason.INVALID_ARGUMENTS, { description: "Missing previewURL for MediaItem", data: e });
    return {
      id: (i = e.catalogId) != null ? i : e.id,
      encrypted: !1,
      assetURL: e.previewURL,
      contentType: this.assetContentType(e),
      item: e,
      preview: !0,
    };
  }
  async resolveDirectURLAsset(e, t) {
    var i, s;
    if (z((i = e.rawAssetUrl) != null ? i : ""))
      throw new v("mk-151", v.Reason.INVALID_ARGUMENTS, { description: "Missing rawAssetURL for MediaItem", data: e });
    return {
      id: (s = e.catalogId) != null ? s : e.id,
      encrypted: !1,
      assetURL: e.rawAssetUrl,
      contentType: this.assetContentType(e),
      item: e,
      preview: !1,
    };
  }
  async resolveBroadcastRadioAsset(e, t) {
    var s;
    if (!Ab.enabled) throw new v("mk-152", v.Reason.CONTENT_UNSUPPORTED, { data: e });
    const i = await ic(e, { mediaAPI: this.services.mediaAPI });
    if (i === void 0 || i.length === 0)
      throw new v("mk-156", v.Reason.CONTENT_UNAVAILABLE, {
        description: "No Broadcast RadioStation assets returned from the server",
        data: e,
      });
    return {
      id: (s = e.catalogId) != null ? s : e.id,
      encrypted: !1,
      assetURL: i[0].url,
      contentType: this.assetContentType(e),
      item: e,
      preview: !1,
    };
  }
  async resolveHLSOffersAsset(e, t) {
    var i, s, n, a;
    await this.assertSubscription(e, t);
    try {
      return {
        id: (i = e.catalogId) != null ? i : e.id,
        encrypted: !0,
        assetURL:
          (a = (s = e.attributes) == null ? void 0 : s.assetUrl) != null
            ? a
            : (n = e.attributes.offers) == null
              ? void 0
              : n[0].hlsUrl,
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
    } catch (o) {
      throw new v("mk-144", v.Reason.CONTENT_UNSUPPORTED, {
        description: "Unable to play HLS offers",
        data: e,
        origin: o,
      });
    }
  }
  async resolveRadioStationAsset(e, t) {
    var n;
    const i = await ic(e, { mediaAPI: this.services.mediaAPI });
    if (i === void 0 || i.length === 0)
      throw new v("mk-148", v.Reason.CONTENT_UNAVAILABLE, {
        description: "No RadioStation assets returned from the server",
        data: e,
      });
    const s = i[0];
    return (
      i.length > 1 && ie.warn("Multiple RadioStation assets returned from the server"),
      {
        id: (n = e.catalogId) != null ? n : e.id,
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
    var o, l;
    await this.assertSubscription(e, t);
    const i = this.keySystem,
      s = await this.services.mediaAPI.get("/v1/play/assets", {
        params: {
          ...e.playParams,
          includeLicenseUrls: !0,
          hlsEncryption: (o = t == null ? void 0 : t.hlsEncryption) != null ? o : "CBC",
          ...(t != null && t.hlsEnhancedAsset ? { hlsProfile: "enhancedHls" } : {}),
        },
      }),
      { results: n } = await s.json();
    if ((n == null ? void 0 : n.assets) === void 0 || n.assets.length === 0)
      throw new v("mk-169", v.Reason.CONTENT_UNAVAILABLE, { data: e });
    const a = n.assets[0];
    return (
      n.assets.length > 1 && ie.warn("Multiple MediaAPI assets returned from the server"),
      {
        id: (l = e.catalogId) != null ? l : e.id,
        encrypted: !0,
        assetURL: a.url,
        contentType: this.assetContentType(e),
        keySystem: i,
        keyServerURL: a.keyServerUrl,
        keyCertURL: i === "fairplay" ? a.fairPlayKeyCertificateUrl : a.widevineKeyCertificateUrl,
        item: e,
        preview: !1,
      }
    );
  }
  async resolveMZPlayWebAsset(e, t) {
    var n;
    await this.assertSubscription(e, t);
    const i = this.keySystem,
      s = await Tb(e, {
        bitrate: t == null ? void 0 : t.bitrate,
        request: this.services.request,
        endpoint: this.mzplayAssetEndpoint,
        encoding: i === "fairplay" ? "cbcp" : "ctrp",
        developerToken: this.services.mediaAPI.developerToken,
        mediaUserToken: this.services.mediaAPI.mediaUserToken,
      });
    return {
      id: (n = e.catalogId) != null ? n : e.id,
      encrypted: !0,
      assetURL: s.url,
      contentType: this.assetContentType(e),
      keySystem: i,
      keyServerURL: s.keyServerURL,
      keyCertURL: i === "fairplay" ? s.fairplayCertURL : s.widevineCertURL,
      item: e,
      preview: !1,
    };
  }
  async resolveUTSAsset(e, t) {
    var l;
    if (!e.isUTS)
      throw new v("mk-162", v.Reason.INVALID_ARGUMENTS, { description: "MediaItem is not an UTS item", data: e });
    const i = (l = e.attributes) == null ? void 0 : l.assets;
    if (i === void 0)
      throw new v("mk-163", v.Reason.INVALID_ARGUMENTS, { description: "Missing UTS asset data", data: e });
    const s = Se.register("mk-hlsjs-interstitial-playback"),
      n = { webbrowser: !0 };
    s.enabled && (n.supportsInterstitials = !0);
    const a = Ui(e.assetURL, n);
    e.assetURL = a;
    const o = await Pb(e, { manifestManager: this.services.manifest, playOptions: {} });
    return {
      id: e.id,
      encrypted: !0,
      assetURL: a,
      contentType: this.assetContentType(e),
      keySystem: this.keySystem,
      keyServerURL: i.fpsKeyServerUrl,
      keyCertURL: this.keySystem === "fairplay" ? i.fpsCertificateUrl : i.wideVineCertificateUrl,
      item: e,
      meta: o,
      preview: !1,
    };
  }
  async isMediaAPIContentType(e, t) {
    return Wc.includes(e.type);
  }
  assetContentType(e) {
    return Kf(e) ? "audio" : "video";
  }
  async isPlayable(e, t) {
    var i, s;
    return e.isUTS
      ? !0
      : (await this.isMediaAPIContentType(e, t))
        ? e.isLiveRadioStation || e.isRadioEpisode || e.hasOffersHlsUrl
          ? !0
          : ["song", "musicVideo", "musicMovie"].includes(e.type)
            ? e.playParams !== void 0
            : !z((i = e.rawAssetUrl) != null ? i : "") || !z((s = e.previewURL) != null ? s : "")
        : !1;
  }
  async shouldPlayPreview(e, t) {
    var i, s, n;
    return e.isLiveRadioStation ||
      e.isRadioEpisode ||
      e.isLiveVideoStation ||
      e.rawAssetUrl ||
      (e.isPodcastEpisode && li(e) && e.hasOffersHlsUrl) ||
      e.isUTS ||
      e.isLibraryItem
      ? !1
      : (t == null ? void 0 : t.previewOnly) === !0 || !(await this.isPlayable(e))
        ? !0
        : z((i = e.rawAssetUrl) != null ? i : "")
          ? (t == null ? void 0 : t.subscription) !== !0
            ? !0
            : ((s = e.playParams) == null ? void 0 : s.hasDrm) === !1
              ? !1
              : !this.services.runtime.isDRMAvailable && !z((n = e.previewURL) != null ? n : "")
          : !1;
  }
  async assertSubscription(e, t) {
    if (this.services.mediaAPI.mediaUserToken === void 0)
      throw new v("mk-159", v.Reason.AUTHORIZATION_ERROR, { description: "Authorization required", data: e });
    if (!(e.isPodcastEpisode && li(e) && e.hasOffersHlsUrl) && (t == null ? void 0 : t.subscription) !== !0)
      throw new v("mk-149", v.Reason.SUBSCRIPTION_ERROR, { description: "Subscription required for content", data: e });
  }
}
const Cb = E.createChild("license");
class da {
  constructor(e) {
    c(this, "isConfigured", !0);
    c(this, "logger", Cb);
    c(this, "services");
    c(this, "_developerToken");
    c(this, "_mediaUserToken");
    ((this.services = e.services),
      (this._developerToken = e.developerToken),
      (this._mediaUserToken = e.mediaUserToken));
  }
  get developerToken() {
    return this._developerToken;
  }
  get mediaUserToken() {
    return this._mediaUserToken;
  }
  get keySystem() {
    return this.services.runtime.preferredKeySystem;
  }
  get keySystemId() {
    return J[this.keySystem];
  }
  configure(e) {
    (e.developerToken !== void 0 && (this._developerToken = e.developerToken),
      (this._mediaUserToken = e.mediaUserToken));
  }
  createChallengeHeaders(e, t, i) {
    const s = {
      Authorization: `Bearer ${this.developerToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(this.mediaUserToken ? { "X-Apple-Music-User-Token": this.mediaUserToken } : {}),
    };
    return (this.services.runtime.preferredKeySystem === "widevine" && (s["X-Apple-Renewal"] = !0), new Headers(s));
  }
  assertDeveloperToken() {
    if (this.developerToken === void 0 || z(this.developerToken))
      throw new v("mk-175", v.Reason.CONTENT_RESTRICTED, {
        description: "No developer token configured for resolving playback licenses",
      });
  }
  assertUserToken() {
    if (this.mediaUserToken === void 0 || z(this.mediaUserToken))
      throw new v("mk-176", v.Reason.CONTENT_RESTRICTED, {
        description: "No user token configured for resolving playback licenses",
      });
  }
  async makeServerRequest(e, t, i) {
    let s;
    try {
      (this.logger.debug(`Making license request to ${e} with URI ${t}`),
        (s = await this.services.request.fetch(new Request(e, i))));
    } catch (n) {
      throw (
        this.logger.error(`Failed to make license request to ${e} with URI ${t}`),
        new v("mk-174", v.Reason.MEDIA_LICENSE, { data: { url: e, keyuri: t }, origin: n })
      );
    }
    if (!s.ok)
      try {
        this.handleServerError(await s.json());
      } catch (n) {
        this.handleServerError();
      }
    return await s.json();
  }
  handleServerError(e) {
    var a, o, l, u, d;
    const t = (o = (a = e == null ? void 0 : e.status) != null ? a : e == null ? void 0 : e.errorCode) != null ? o : 0,
      i = Yd(t) || v.Reason.MEDIA_LICENSE,
      s = e == null ? void 0 : e.dialog,
      n =
        (d =
          (u = (l = e == null ? void 0 : e.message) != null ? l : e == null ? void 0 : e.customerMessage) != null
            ? u
            : e == null
              ? void 0
              : e.errorMessage) != null
          ? d
          : i;
    throw s !== void 0
      ? new Mi({ ...e, status: t, message: n, dialog: s })
      : new v("mk-183", i, { description: n, data: { status: t, message: n, context: e } });
  }
}
class Ob extends da {
  constructor() {
    super(...arguments);
    c(this, "lastKeyId", 0);
  }
  async isCompatible(t, i) {
    var n, a;
    return (
      ((a = (n = t.keyURLs) == null ? void 0 : n["hls-key-server-url"]) != null ? a : "").endsWith(
        "/podcast/hls/license/streaming/start",
      ) || t.hasOffersHlsUrl
    );
  }
  async requestLicense(t, i, s) {
    var l, u, d;
    (this.assertDeveloperToken(), this.assertUserToken());
    const n = (l = t.keyURLs) == null ? void 0 : l["hls-key-server-url"],
      a = await this.makeServerRequest(n, i.keyuri, {
        method: "POST",
        headers: this.createChallengeHeaders(t, i, s != null ? s : {}),
        body: JSON.stringify(this.createChallengeBody(t, i, s != null ? s : void 0)),
      }),
      o = (u = a["license-responses"]) == null ? void 0 : u[0];
    if (o === void 0)
      throw new v("mk-179", v.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: a },
      });
    if (o.status !== 0)
      throw new v("mk-184", v.Reason.SERVER_ERROR, {
        description: `License server responded with code '${(d = o.status) != null ? d : "unknown"}'`,
        data: { body: a },
      });
    return o;
  }
  async revokeLicense(t, i, s) {}
  createChallengeBody(t, i, s) {
    var o;
    const n = (this.lastKeyId += 1),
      a = typeof i.licenseChallenge == "string" ? i.licenseChallenge : ot(i.licenseChallenge);
    return {
      version: 1,
      "license-requests": [
        {
          id: n,
          "adam-id": (o = t.catalogId) != null ? o : t.id,
          challenge: a,
          uri: i.keyuri,
          "key-system": this.keySystemId,
        },
      ],
    };
  }
}
class Db extends da {
  constructor() {
    super(...arguments);
    c(this, "lastKeyId", 0);
  }
  async isCompatible(t, i) {
    var n, a;
    const s = (a = (n = t.keyURLs) == null ? void 0 : n["hls-key-server-url"]) != null ? a : "";
    return (
      s.endsWith("/WebObjects/MZPlay.woa/wa/fpsRequest") ||
      s.endsWith("/WebObjects/MZPlayLocal.woa/wa/fpsRequest") ||
      s.endsWith("/WebObjects/MZPlay.woa/hls/anonymous/fpsRequest") ||
      s.endsWith("/v1/hls/streaming-key-delivery") ||
      s.endsWith("/v1/hls/anonymous/streaming-key-delivery")
    );
  }
  async requestLicense(t, i, s) {
    var l, u;
    (this.assertDeveloperToken(), this.isAnonymousPlayback(t) || this.assertUserToken());
    const n = (l = t.keyURLs) == null ? void 0 : l["hls-key-server-url"],
      a = await this.makeServerRequest(n, i.keyuri, {
        method: "POST",
        headers: this.createChallengeHeaders(t, i, s),
        body: JSON.stringify(this.createChallengeBody(t, i, { ...s, "lease-action": "start" })),
      }),
      o = (u = a["streaming-response"]) == null ? void 0 : u["streaming-keys"][0];
    if (o === void 0)
      throw new v("mk-180", v.Reason.MEDIA_LICENSE, {
        description: "Server did not return any license keys",
        data: { body: a },
      });
    if (o.status !== 0)
      throw new Mi({ status: o.status, dialog: { message: "Error acquiring license" } }, v.Reason.MEDIA_LICENSE);
    return o;
  }
  async revokeLicense(t, i, s) {
    var a;
    (this.assertDeveloperToken(), this.isAnonymousPlayback(t) || this.assertUserToken());
    const n = (a = t.keyURLs) == null ? void 0 : a["hls-key-server-url"];
    try {
      await this.makeServerRequest(n, i.keyuri, {
        method: "POST",
        headers: this.createChallengeHeaders(t, i, s),
        body: JSON.stringify(this.createChallengeBody(t, i, { ...s, "lease-action": "stop" })),
      });
    } catch (o) {
      this.logger.warn("Revoke license request failed", o);
    }
  }
  createChallengeBody(t, i, s) {
    const n = (this.lastKeyId += 1),
      a = typeof i.licenseChallenge == "string" ? i.licenseChallenge : ot(i.licenseChallenge);
    return {
      "streaming-request": {
        version: 1,
        "streaming-keys": [
          {
            "lease-action": s["lease-action"],
            id: n,
            challenge: a,
            uri: i.keyuri,
            "key-system": this.keySystemId,
            stkn: s.stkn,
            ...t.keyServerQueryParameters,
          },
        ],
      },
    };
  }
  isAnonymousPlayback(t) {
    var s, n;
    const i = (n = (s = t.keyURLs) == null ? void 0 : s["hls-key-server-url"]) != null ? n : "";
    return i === "" || i.includes("/hls/anonymous");
  }
}
class Nb extends da {
  async isCompatible(e, t) {
    var s, n;
    const i = (n = (s = e.keyURLs) == null ? void 0 : s["hls-key-server-url"]) != null ? n : "";
    return (
      i.includes("/WebObjects/MZPlay.woa/wa/acquireWebPlaybackLicense") ||
      i.includes("/WebObjects/MZPlay.woa/web/radio/versions/1/license") ||
      i.includes("/v1/radio/streaming-key-delivery")
    );
  }
  async requestLicense(e, t, i) {
    var o;
    (this.assertDeveloperToken(), this.assertUserToken());
    const s = { userInitiated: (o = i == null ? void 0 : i.userInitiated) != null ? o : !1 },
      n = e.keyURLs["hls-key-server-url"];
    return await this.makeServerRequest(n, t.keyuri, {
      method: "POST",
      headers: this.createChallengeHeaders(e, t, s),
      body: JSON.stringify(this.createChallengeBody(e, t, s)),
    });
  }
  async revokeLicense(e, t, i) {}
  createChallengeBody(e, t, i) {
    var n;
    const s = typeof t.licenseChallenge == "string" ? t.licenseChallenge : ot(t.licenseChallenge);
    return {
      adamId: (n = e.catalogId) != null ? n : "-1",
      isLibrary: e.isLibrary,
      "user-initiated": i.userInitiated,
      challenge: s,
      uri: t.keyuri,
      "key-system": this.keySystemId,
    };
  }
}
class Lb {
  constructor(e) {
    c(this, "isConfigured", !0);
    c(this, "children");
    var t;
    this.children = new Set((t = e.managers) != null ? t : []);
  }
  configure(e) {
    for (const t of this.children.values()) t.configure(e);
  }
  async isCompatible(...e) {
    return (await this.findManager(...e)) !== void 0;
  }
  async requestLicense(e, t, i) {
    const s = await this.findManager(e, t, i);
    if (s === void 0)
      throw new v("mk-177", v.Reason.MEDIA_LICENSE, { description: `Unable to request license for ${e}` });
    return s.requestLicense(e, t, i);
  }
  async revokeLicense(e, t, i) {
    const s = await this.findManager(e, t, i);
    if (s === void 0)
      throw new v("mk-178", v.Reason.MEDIA_LICENSE, { description: `Unable to revoke license for ${e}` });
    return s.revokeLicense(e, t, i);
  }
  async findManager(e, t, i) {
    for (const s of this.children) if (await s.isCompatible(e, t, i)) return s;
  }
}
function Mb(r) {
  var oe, de, ke, re;
  const e = r.configurations,
    { runtime: t, request: i, dispatcher: s, store: n } = r.services,
    a = new mb({ ...e.mediaAPIClient, services: { request: i } }),
    o = new _b({ ...e.mediaAPIAccess, services: { mediaAPI: a } }),
    l = new bb({ ...e.manifestManager, services: { request: i } }),
    u = { streaming: Db, batch: Ob, web: Nb },
    d = ((oe = e.licenseManager.include) != null ? oe : ["streaming", "batch", "web"]).map(function (Pe) {
      return new u[Pe]({
        services: { runtime: t, request: i },
        developerToken: e.licenseManager.developerToken,
        mediaUserToken: e.licenseManager.mediaUserToken,
      });
    }),
    p = new Lb({
      services: { runtime: t, request: i },
      developerToken: e.licenseManager.developerToken,
      mediaUserToken: e.licenseManager.mediaUserToken,
      managers: d,
    }),
    y = new Rb({ ...e.assetResolver, services: { runtime: t, request: i, mediaAPI: a, manifest: l } }),
    g = new Dv(),
    k = new Ov(s, (de = e.bitrateCalculator) == null ? void 0 : de.bitrate),
    w = new Mv({ services: { runtime: t } }),
    M = new qv({ ...e.itemLoader, services: { mediaAPI: a } }),
    $ = new Yi({
      services: { dispatcher: s },
      trackers: (re = (ke = e.playActivity) == null ? void 0 : ke.trackers) != null ? re : [],
    }),
    me = new Gi({
      services: {
        runtime: t,
        request: i,
        dispatcher: s,
        store: n,
        player: w,
        manifest: l,
        assetResolver: y,
        bitrateCalculator: k,
        timing: g,
      },
      playerOptions: Ub({
        services: {
          runtime: t,
          request: i,
          dispatcher: s,
          manifest: l,
          license: p,
          bitrateCalculator: k,
          timing: g,
          playActivity: $,
          store: n,
        },
        ...e.mediaItemPlayback,
      }),
    });
  return {
    runtime: t,
    request: i,
    dispatcher: s,
    mediaAPIClient: a,
    mediaAPIAccess: o,
    playActivity: $,
    itemLoader: M,
    manifest: l,
    license: p,
    assetResolver: y,
    player: w,
    mediaItemPlayback: me,
    timing: g,
    bitrateCalculator: k,
  };
}
function sc(r, e) {
  return (
    e.storefrontId !== void 0 &&
      (r.mediaAPIClient.configure({ storefrontId: e.storefrontId }),
      r.itemLoader.configure({ storefrontId: e.storefrontId })),
    e.mediaUserToken !== void 0 &&
      (r.mediaAPIClient.configure({ mediaUserToken: e.mediaUserToken }),
      r.manifest.configure({ mediaUserToken: e.mediaUserToken }),
      r.license.configure({ mediaUserToken: e.mediaUserToken })),
    r
  );
}
function Ub(r) {
  var t;
  const { services: e } = r;
  return {
    tokens: r.tokens,
    bag: r.bag,
    context: (t = r.context) != null ? t : {},
    autoplayEnabled: r.autoplayEnabled,
    privateEnabled: r.privateEnabled,
    siriInitiated: r.siriInitiated,
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
      getRTCStreamingTracker: () => e.playActivity.getTrackerByType(Jl),
      hasMusicSubscription: async function () {
        var i, s, n;
        return (n = (s = (i = e.store) == null ? void 0 : i.storekit) == null ? void 0 : s.hasMusicSubscription()) !=
          null
          ? n
          : !1;
      },
    },
  };
}
var xb = Object.defineProperty,
  Fb = Object.getOwnPropertyDescriptor,
  ar = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? Fb(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && xb(e, t, s), s);
  };
const Kb = [
    m.Reason.CONTENT_EQUIVALENT,
    m.Reason.CONTENT_RESTRICTED,
    m.Reason.CONTENT_UNAVAILABLE,
    m.Reason.CONTENT_UNSUPPORTED,
    m.Reason.SERVER_ERROR,
    m.Reason.SUBSCRIPTION_ERROR,
    m.Reason.UNSUPPORTED_ERROR,
    m.Reason.USER_INTERACTION_REQUIRED,
  ],
  Vb = Fi.register("mk-bag-features-overrides");
class Ft {
  constructor(e) {
    c(this, "app");
    c(this, "capabilities");
    c(this, "context", {});
    c(this, "_playbackMode", Ye.MIXED_CONTENT);
    c(this, "_autoplayEnabled", !1);
    c(this, "id");
    c(this, "prefix");
    c(this, "privateEnabled", !1);
    c(this, "siriInitiated", !1);
    c(this, "sourceType", Gs.MUSICKIT);
    c(this, "playbackActions");
    c(this, "guid");
    c(this, "_bag", Q);
    c(this, "playbackControllers", {});
    c(this, "_playbackController");
    c(this, "_queue");
    c(this, "services");
    c(this, "_whenConfigured");
    ((this.id = Li()), $m(e.app));
    const { developerToken: t } = e;
    if (typeof t != "string" || t.trim() === "")
      throw new m(m.Reason.CONFIGURATION_ERROR, "Missing or empty developer token");
    Object.assign(Q.features, Qd(e.features));
    const i = Vb.get();
    (i && (x.warn("Overriding bag.features with", i), (Q.features = { ...Q.features, ...i })),
      Object.assign(Q.autoplay, e.autoplay),
      Object.assign(Q.app, e.app),
      Object.assign(Q.urls, e.urls),
      x.debug("Instance Configuration: ", Q));
    const s = ["playbackActions", "guid", "playbackMode", "privateEnabled", "siriInitiated", "sourceType"];
    for (const u of s) u in e && (Qe(this, `_${u}`) ? (this[`_${u}`] = e[u]) : (this[u] = e[u]));
    ("prefix" in e && /^(?:web|preview)$/.test(e.prefix || "") && (this.prefix = Q.prefix = e.prefix),
      this.configureLogger(e));
    const n = Pg(t, e);
    let a = "amp-api.music.apple.com",
      o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/acquireWebPlaybackLicense",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      };
    this.realm === le.PODCAST &&
      ((a = "amp-api.podcasts.apple.com"),
      (o = {
        "hls-key-cert-url": "https://s.mzstatic.com/skdtool_2021_certbundle.bin",
        "hls-key-server-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/podcast/hls/license/streaming/start",
        "widevine-cert-url": "https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/widevineCert",
      }));
    let l = !1;
    if (
      (this.realm === le.TV && (l = !0),
      (this.services = Mb({
        services: { ...e.services, store: n },
        configurations: {
          mediaAPIClient: {
            host: a,
            developerToken: t,
            mediaUserToken: n.musicUserToken,
            storefrontId: this.storefrontId,
          },
          itemLoader: {
            storefrontId: n == null ? void 0 : n.storefrontId,
            fetchContainerPages: this.realm === le.MUSIC,
          },
          manifestManager: { developerToken: t, mediaUserToken: n.musicUserToken, personalizedManifests: l },
          licenseManager: { developerToken: t, mediaUserToken: n.musicUserToken },
          assetResolver: {
            staticKeyURLs: o,
            mzplayAssetEndpoint: `https://${Dr("play")}/WebObjects/MZPlay.woa/wa/webPlayback`,
          },
          bitrateCalculator: { bitrate: e.bitrate },
          playActivity: { trackers: e.playActivityAPI },
          mediaItemPlayback: {
            bag: Q,
            tokens: A,
            context: this.context,
            autoplayEnabled: this.autoplayEnabled,
            privateEnabled: this.privateEnabled,
            siriInitiated: this.siriInitiated,
            playbackMode: this.playbackMode,
          },
        },
      })),
      (this.capabilities = new Tv(this.services.dispatcher)),
      this._initializeInternalEventHandling(),
      x.info(`MusicKit JS Version: ${this.version}`),
      x.info("InstanceId", this.id),
      x.debug("Link Parameters", e.linkParameters),
      Q.app && x.debug("App", Q.app),
      e.userToken)
    ) {
      const { userToken: u } = e;
      typeof u == "function" ? (A.dynamicMusicUserToken = u) : (this.musicUserToken = u);
    }
  }
  get version() {
    return Dl();
  }
  get playbackController() {
    return this._playbackController;
  }
  setOptions(e) {}
  get developerToken() {
    return A.developerToken;
  }
  get api() {
    return this.services.mediaAPIAccess;
  }
  get audioTracks() {
    return this._mediaItemPlayback.audioTracks;
  }
  get authorizationStatus() {
    return A.authorizationStatus;
  }
  get bitrate() {
    return this.services.bitrateCalculator.bitrate;
  }
  set bitrate(e) {
    this.services.bitrateCalculator.bitrate = e;
  }
  get browserSupportsPictureInPicture() {
    return Ac();
  }
  get browserSupportsVideoDrm() {
    return this.services.runtime.isDRMAvailable;
  }
  get cid() {
    return this.realm === le.TV || this.sourceType !== Gs.MUSICKIT ? A.cid : !1;
  }
  get continuous() {
    var e, t;
    return (t = (e = this._playbackController) == null ? void 0 : e.continuous) != null ? t : !1;
  }
  set continuous(e) {
    this.getPlaybackController().continuous = e;
  }
  get autoplayEnabled() {
    return this._autoplayEnabled;
  }
  set autoplayEnabled(e) {
    (this.realm !== le.MUSIC && (e = !1),
      e !== this.autoplayEnabled &&
        ((this._autoplayEnabled = e),
        this.services.dispatcher.publish(_.autoplayEnabledDidChange, this.autoplayEnabled)));
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
    return A.isAuthorized;
  }
  get isPlaying() {
    var e, t;
    return (t = (e = this._playbackController) == null ? void 0 : e.isPlaying) != null ? t : !1;
  }
  get isRestricted() {
    return A.isRestricted;
  }
  get isU13() {
    return A.isU13;
  }
  get metricsClientId() {
    return A.metricsClientId;
  }
  set metricsClientId(e) {
    A.metricsClientId = e;
  }
  get musicUserToken() {
    return A.musicUserToken;
  }
  set musicUserToken(e) {
    (e && A.musicUserToken === e) || (A.musicUserToken = e);
  }
  updateUserTokenFromStorage(e) {
    return A.updateUserTokenFromStorage(e);
  }
  get needsGDPR() {
    return A.needsGDPR;
  }
  get nowPlayingItem() {
    return this._mediaItemPlayback.nowPlayingItem;
  }
  get currentTimedMetadata() {
    return this._mediaItemPlayback.currentTimedMetadata;
  }
  get nowPlayingItemIndex() {
    var e, t;
    return (t = (e = this._playbackController) == null ? void 0 : e.nowPlayingItemIndex) != null ? t : -1;
  }
  get playbackMode() {
    return this._playbackMode;
  }
  set playbackMode(e) {
    if (Object.values(Ye).indexOf(e) === -1) return;
    const t = e === Ye.PREVIEW_ONLY,
      i = this.services.mediaItemPlayback;
    (i && (i.previewOnly = t),
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
    return this.playbackMode === Ye.PREVIEW_ONLY;
  }
  set previewOnly(e) {
    this.playbackMode = e ? Ye.PREVIEW_ONLY : Ye.MIXED_CONTENT;
  }
  get queue() {
    var e;
    return (e = this._playbackController) == null ? void 0 : e.queue;
  }
  get queueIsEmpty() {
    var e, t, i;
    return (i = (t = (e = this._playbackController) == null ? void 0 : e.queue) == null ? void 0 : t.isEmpty) != null
      ? i
      : !0;
  }
  get realm() {
    return A.realm;
  }
  get repeatMode() {
    var e, t;
    return (t = (e = this._playbackController) == null ? void 0 : e.repeatMode) != null ? t : Le.none;
  }
  set repeatMode(e) {
    this.getPlaybackController().repeatMode = e;
  }
  set requestUserToken(e) {
    A.requestUserToken = e;
  }
  get restrictedEnabled() {
    return A.restrictedEnabled;
  }
  set restrictedEnabled(e) {
    A.restrictedEnabled = e;
  }
  get supportsPreviewImages() {
    return this._mediaItemPlayback.supportsPreviewImages;
  }
  get seekSeconds() {
    var e;
    return (e = this._playbackController) == null ? void 0 : e.seekSeconds;
  }
  set shuffle(e) {
    this.getPlaybackController().shuffle = e;
  }
  get shuffleMode() {
    var e, t;
    return (t = (e = this._playbackController) == null ? void 0 : e.shuffleMode) != null ? t : ea.off;
  }
  set shuffleMode(e) {
    this.getPlaybackController().shuffleMode = e;
  }
  get storefrontCountryCode() {
    return A.storefrontCountryCode;
  }
  get subscribeURL() {
    return A.subscribeURL;
  }
  get subscribeFamilyURL() {
    return A.subscribeFamilyURL;
  }
  get subscribeIndividualURL() {
    return A.subscribeIndividualURL;
  }
  get subscribeStudentURL() {
    return A.subscribeStudentURL;
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
  get volume() {
    return this._mediaItemPlayback.volume;
  }
  set volume(e) {
    this._mediaItemPlayback.volume = e;
  }
  get storefrontId() {
    return A.storefrontId;
  }
  set storefrontId(e) {
    A.storefrontId = e;
  }
  get _mediaItemPlayback() {
    return this.services.mediaItemPlayback;
  }
  getPlaybackController() {
    if ((x.trace("MKInstance.getPlaybackController()", this._playbackController), this._playbackController === void 0))
      throw new m(m.Reason.INTERNAL_ERROR, "No PlaybackController active");
    return this._playbackController;
  }
  async setPlaybackController(e) {
    return (
      x.trace("MKInstance.setPlaybackController()", e),
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
  addEventListener(e, t, i = {}) {
    return Rv(this.services.dispatcher, e, t, i);
  }
  async authorize() {
    return (this.deferPlayback(), A.authorize());
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
    (x.debug("instance.changeToMediaItem", e),
      this._isPlaybackSupported() &&
        (await this.validateAuthorization(),
        this.signalChangeItemIntent(),
        await this.getPlaybackController().changeToMediaItem(e)));
  }
  async changeUserStorefront(e) {
    this.storefrontId = e;
  }
  async cleanup() {
    (this.services.mediaItemPlayback.destroy(), this.signalIntent({ endReasonType: R.EXITED_APPLICATION }));
    const e = Object.keys(this.playbackControllers).map((t) => this.playbackControllers[t].destroy());
    try {
      await Promise.all(e);
    } catch (t) {
      x.error("Error cleaning up controller", t);
    }
    this.services.dispatcher.unsubscribeAll();
  }
  async configure(e) {
    await this.setPlaybackController(this.getPlaybackControllerByType(gt.serial));
    const { promise: t, resolve: i } = $c();
    ((this._whenConfigured = t),
      await A.storekit.whenAuthCompleted,
      (e == null ? void 0 : e.storefrontId) !== void 0 && (this.storefrontId = e.storefrontId),
      (e == null ? void 0 : e.utsAPIClient) !== void 0 && (this.services.utsAPIClient = e.utsAPIClient),
      await this.configurePlayActivity(),
      this._initializeExternalEventPublishing(),
      i());
  }
  deferPlayback() {
    (x.debug("deferPlayback", this._playbackController), Pp());
  }
  async me() {
    try {
      return await A.storekit.me();
    } catch (e) {
      return Promise.reject(new m(m.Reason.AUTHORIZATION_ERROR, "Unauthorized"));
    }
  }
  musicSubscriptionOffers() {
    return A.storekit.musicSubscriptionOffers(this.storefrontId);
  }
  musicSubcriptionOffers() {
    return (
      Oc("musicSubcriptionOffers", {
        message: "musicSubcriptionOffers has been deprecated, use musicSubscriptionOffers instead",
      }),
      this.musicSubscriptionOffers()
    );
  }
  hasMusicSubscription() {
    return Rg(A.storekit);
  }
  mute() {
    return this._mediaItemPlayback.mute();
  }
  async pause(e) {
    if (this._isPlaybackSupported()) {
      try {
        (this.signalIntent({ endReasonType: R.PLAYBACK_MANUALLY_PAUSED }), await this.getPlaybackController().pause(e));
      } catch (t) {
        this._handlePlaybackError(t);
      }
      return Promise.resolve();
    }
  }
  async play() {
    if ((x.debug("instance.play()"), !!this._isPlaybackSupported())) {
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
    var i, s;
    if (
      (x.trace("MKInstance.playMediaItem()", e, t),
      (t != null && t.bingeWatching) || this.deferPlayback(),
      (t = { ...t }),
      e != null && e.playEvent && !Qe(t, "startTime"))
    ) {
      const { playEvent: n } = e;
      !n.isDone && n.playCursorInSeconds !== void 0 && (t.startTime = n.playCursorInSeconds);
    }
    this.services.dispatcher.publish(_.playInitiated, {
      item: e,
      timestamp: (s = (i = t.meta) == null ? void 0 : i.initiatedTimestamp) != null ? s : Date.now(),
    });
    try {
      t && this._mediaItemPlayback.playOptions.set(e.id, t);
      const n = await this.getPlaybackController().playSingleMediaItem(e, t);
      return (this.services.dispatcher.publish(_.capabilitiesChanged), n);
    } catch (n) {
      (x.error("mk:playMediaItem error", n), this._handlePlaybackError(n));
    }
  }
  removeEventListener(e, t) {
    zl(this.services.dispatcher, e, t);
  }
  async shouldDisplayPrivacyLink(e) {
    return A.shouldDisplayPrivacyLink(e);
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
  async seekToTime(e, t = _e.Manual) {
    if (this._isPlaybackSupported()) {
      await this.validateAuthorization();
      try {
        await this.getPlaybackController().seekToTime(e, t);
      } catch (i) {
        this._handlePlaybackError(i);
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
        this.signalIntent({ endReasonType: R.TRACK_SKIPPED_FORWARDS, direction: R.TRACK_SKIPPED_FORWARDS }));
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
        this.signalIntent({ endReasonType: R.TRACK_SKIPPED_BACKWARDS, direction: R.TRACK_SKIPPED_BACKWARDS }));
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
        (this.signalIntent({ endReasonType: R.TRACK_SKIPPED_FORWARDS, direction: R.TRACK_SKIPPED_FORWARDS }),
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
    var t;
    if (this._isPlaybackSupported()) {
      this.signalIntent({
        endReasonType: e == null ? void 0 : e.endReasonType,
        userInitiated: (t = e == null ? void 0 : e.userInitiated) != null ? t : !0,
      });
      try {
        await this.getPlaybackController().stop(e);
      } catch (i) {
        this._handlePlaybackError(i);
      }
    }
  }
  resetSubscribeViewEligibility() {
    A.storekit.resetSubscribeViewEligibility();
  }
  async unauthorize() {
    return A.unauthorize();
  }
  unmute() {
    return this._mediaItemPlayback.unmute();
  }
  getPlaybackControllerByType(e) {
    let t = this.playbackControllers[e];
    if (t !== void 0) return t;
    const { services: i } = this,
      s = {
        services: {
          runtime: i.runtime,
          request: i.request,
          dispatcher: i.dispatcher,
          store: A,
          itemLoader: i.itemLoader,
          manifest: i.manifest,
          mediaItemPlayback: i.mediaItemPlayback,
          playActivity: i.playActivity,
        },
        playbackMode: this.playbackMode,
      };
    switch (e) {
      case gt.serial: {
        t = new nr(s);
        break;
      }
      case gt.continuous: {
        t = new ia(s);
        break;
      }
      default:
        throw new m(m.Reason.UNSUPPORTED_ERROR, `Unsupported controller requested: ${e}`);
    }
    return ((this.playbackControllers[e] = t), t);
  }
  playbackControllerForItems(e) {
    const t = e[0];
    return t != null && t.isRadioStation && !(t != null && t.isRadioEpisode)
      ? this.getPlaybackControllerByType(gt.continuous)
      : this.getPlaybackControllerByType(gt.serial);
  }
  _handlePlaybackError(e) {
    if ((x.error("mediaPlaybackError", e), m.isMKError(e) && Kb.includes(e.reason))) throw e;
  }
  _initializeInternalEventHandling() {
    const e = this.services;
    (A.storekit.addEventListener(_.userTokenDidChange, ({ userToken: t }) => {
      (this._whenConfigured && this._whenConfigured.then(() => this.configurePlayActivity().catch()).catch(),
        x.debug(`Updating services with mediaUserToken: ${this.musicUserToken}`),
        sc(e, { mediaUserToken: t }));
    }),
      e.dispatcher.subscribe(P.apiStorefrontChanged, function (t, { storefrontId: i }) {
        (x.debug(`Updating services with storefrontId: ${i}`), sc(e, { storefrontId: i }));
      }),
      e.dispatcher.subscribe(_.mediaPlaybackError, (t, i) => this._handlePlaybackError(i)),
      e.dispatcher.subscribe(_.playbackVolumeDidChange, (t, i) => {
        const s = i == null ? void 0 : i.target;
        ((s != null && s.muted) || (s != null && s.volume)) &&
          (this.volume = s != null && s.muted ? 0 : s == null ? void 0 : s.volume);
      }),
      e.dispatcher.subscribe(_.playbackStateDidChange, (t, i) => {
        i.state === V.paused &&
          (x.debug("mk: playbackStateDidChange callback - calling storekit.presentSubscribeViewForEligibleUsers"),
          A.storekit.presentSubscribeViewForEligibleUsers({ state: i.state, item: this.nowPlayingItem }, !1));
      }),
      e.dispatcher.subscribe(
        Ue.bufferTimedMetadataDidChange,
        (t, { metadata: i, item: s, position: n, playingDate: a }) => {
          if (i.blob) {
            const o = {
              item: s != null ? s : this.nowPlayingItem,
              position: n != null ? n : this.currentPlaybackTime,
              playingDate: a != null ? a : this.currentPlayingDate,
              storefrontId: this.storefrontId.toUpperCase(),
              metadata: i,
            };
            (x.debug('Dispatching TimedMetadata "ping"', o), e.dispatcher.publish(P.timedMetadata, o));
          }
        },
      ));
  }
  _initializeExternalEventPublishing() {
    ([
      _.authorizationStatusDidChange,
      _.authReflectionDidComplete,
      _.needsGDPRDidChange,
      _.storefrontCountryCodeDidChange,
      _.storefrontIdentifierDidChange,
      _.userTokenDidChange,
      _.eligibleForSubscribeView,
    ].forEach((e) => {
      A.storekit.addEventListener(e, (t) => this.services.dispatcher.publish(e, t));
    }),
      this.services.dispatcher.subscribe(Ue.bufferTimedMetadataDidChange, (e, { metadata: t }) => {
        (x.debug("Dispatching TimedMetadata change", t), this.services.dispatcher.publish(_.timedMetadataDidChange, t));
      }));
  }
  configureLogger(e) {
    (Tg() || (e.debug === !0 ? Co(ae.DEBUG) : e.logLevel !== void 0 && Co(e.logLevel)),
      Ot.enabled && un(Ot.enabled),
      Gt.value !== void 0 && Ul(Gt.value),
      e.logHandler !== void 0 && Eg(e.logHandler));
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
      ? (x.warn("Media playback is not supported in Node environments."), !1)
      : !0;
  }
  signalChangeItemIntent() {
    this.signalIntent({ endReasonType: R.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM });
  }
  signalIntent(e) {
    this.services.dispatcher.publish(P.userActivityIntent, { userInitiated: !0, ...e });
  }
  async validateAuthorization(e = !1) {
    (!e && this.playbackMode !== Ye.FULL_PLAYBACK_ONLY) ||
      ((this._playbackController === void 0 ||
        !this._playbackController.isReady ||
        !this._playbackController.isPlaying) &&
        (await this.authorize()));
  }
}
ar([tr(250, { isImmediate: !0 })], Ft.prototype, "pause", 1);
ar([tr(250, { isImmediate: !0 })], Ft.prototype, "play", 1);
ar([Ki("skip")], Ft.prototype, "skipToNextItem", 1);
ar([Ki("skip")], Ft.prototype, "skipToPreviousItem", 1);
ar([Ki("seek")], Ft.prototype, "seekForward", 1);
ar([Ki("seek")], Ft.prototype, "seekBackward", 1);
function WE() {
  function r(a) {
    if (er()) return;
    const o = document.head.querySelector(`meta[name=${a}]`);
    return (o == null ? void 0 : o.content) || void 0;
  }
  const e = r("apple-music-developer-token") || r("JWT"),
    t = r("apple-music-app-build") || r("version"),
    i = r("apple-music-app-name"),
    s = r("apple-music-app-version");
  let n;
  return (
    (e || t || i || s) &&
      ((n = {}),
      e && (n.developerToken = e),
      (t || i || s) && ((n.app = {}), t && (n.app.build = t), i && (n.app.name = i), s && (n.app.version = s))),
    n
  );
}
function ha(r) {
  if (er()) return;
  const e = new Event(r, { bubbles: !0, cancelable: !0 });
  setTimeout(() => document.dispatchEvent(e));
}
async function Bb() {
  var n;
  if (er()) return;
  const r = Gn("musickit.js");
  if (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.webComponents) !== "") return;
  const e = "noModule" in r,
    t = `components/musickit-components/musickit-components${e ? ".esm" : ""}.js`,
    i = "https:" + Rl(t) + t,
    s = {};
  (e && (s.type = "module"),
    r.hasAttribute("async") && (s.async = ""),
    r.hasAttribute("defer") && (s.defer = ""),
    await Wi(i, s),
    ha(_.webComponentsLoaded));
}
function $b(r) {
  return r === "*";
}
function Hb(r) {
  return r === "**";
}
function jb(r) {
  return /^\{[^}]*\}$/i.test(r);
}
function Es(r) {
  return r instanceof RegExp ? r.toString() : String(r);
}
function qb(r) {
  return r instanceof RegExp || r.indexOf("*") !== -1 || (r.indexOf("{") !== -1 && r.indexOf("}") !== -1);
}
function su(r, e) {
  return function (i) {
    return r.test(i);
  };
}
function Wb(r) {
  return (
    "escape" in RegExp && typeof RegExp.escape == "function"
      ? RegExp.escape
      : (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )(r);
}
function Yb(r, e) {
  const t = Wb(e),
    s = r.split(e).reduce(function (n, a, o) {
      const l = o > 0 ? t : "";
      if ($b(a)) return n + l + `[^${t}]+`;
      if (Hb(a)) return n + ".*";
      if (jb(a)) {
        const u = a
          .slice(1, -1)
          .split(",")
          .map((d) => d.trim())
          .filter((d) => d.length > 0);
        return u.length <= 0 ? n + l + `[^${t}]+` : n + l + `(?:${u.join("|")})`;
      }
      return n + l + a;
    }, "");
  return su(new RegExp(s, ""));
}
function Gb(r, e) {
  return function (i) {
    return i === r;
  };
}
function zb(r, e) {
  return r instanceof RegExp ? su(r) : qb(r) ? Yb(r, e) : Gb(r);
}
class Qb {
  constructor(e) {
    c(this, "topicSeparator");
    c(this, "topicTransformer");
    c(this, "subscriptions");
    var t, i;
    ((this.topicSeparator = (t = e == null ? void 0 : e.topicSeparator) != null ? t : "."),
      (this.topicTransformer = (i = e == null ? void 0 : e.topicTransformer) != null ? i : (s) => s),
      (this.subscriptions = new Map()));
  }
  get subscribers() {
    const e = [];
    for (const [t, [, i]] of this.subscriptions.entries()) e.push([t, i]);
    return e;
  }
  get topics() {
    return Array.from(this.subscriptions.keys());
  }
  publish(...e) {
    const [t, i] = e,
      s = this.topicTransformer(t);
    for (const n of this.subscriptions.values()) {
      const [a, o] = n;
      if (a(s))
        for (let l = 0; l < o.length; l++)
          try {
            o[l](s, i);
          } catch (u) {
            console.error(`subscriber for ${s} at ${l} threw an error`, u);
          }
    }
    return this;
  }
  publishAll(e) {
    for (const [t, i] of e) this.publish(t, i);
    return this;
  }
  subscribe(e, t) {
    Array.isArray(e) || (e = [e]);
    for (const i of e) {
      const s = Es(i);
      if (!this.subscriptions.has(s)) {
        const a = zb(i, this.topicSeparator);
        this.subscriptions.set(s, [a, []]);
      }
      const [, n] = this.subscriptions.get(s);
      n.push(t);
    }
    return {
      patterns: e,
      handler: t,
      unsubscribe: () => {
        for (const i of e) this.unsubscribe(i, t);
      },
    };
  }
  subscribeAll(e, t) {
    return this.subscribe(e, t);
  }
  subscribeOnce(e, t) {
    const i = Array.isArray(e) ? e : [e],
      s = [];
    for (const n of i) {
      const a = (...l) => {
          (this.unsubscribe(n, a), t(...l));
        },
        o = this.subscribe(n, a);
      s.push(o.unsubscribe);
    }
    return {
      patterns: i,
      handler: t,
      unsubscribe: () => {
        for (const n of s) n();
      },
    };
  }
  unsubscribe(e, t) {
    const i = Es(e),
      s = this.subscriptions,
      n = s.get(i);
    if (n === void 0) return;
    const [, a] = n;
    if (a !== void 0) {
      const o = a.indexOf(t);
      (o >= 0 && a.splice(o, 1), a.length === 0 && s.delete(i));
    }
  }
  unsubscribeAll(e) {
    if (e === void 0) this.subscriptions.clear();
    else {
      const t = Es(e);
      this.subscriptions.delete(t);
    }
  }
}
const nu = typeof window < "u" && typeof document < "u";
let au = !1;
const it = [];
async function Xb() {
  const r = it.map((e) => e.cleanup());
  (await Promise.all(r), it.splice(0, it.length));
}
function YE() {
  au = !0;
}
async function GE(r, e = Ft, t) {
  if (!r) throw new m(m.Reason.INVALID_ARGUMENTS, "configuration required");
  const i = { ...r };
  i.mergeQueryParams &&
    nu &&
    window.location &&
    (i.linkParameters = { ...(r.linkParameters || {}), ...Sd(window.location.href) });
  const s = new e({
    ...i,
    services: { runtime: await wh.detect(), dispatcher: new Qb(), request: new Lh(), ...r.services },
  });
  return (au || (await Xb()), t && (await t(s)), it.push(s), ha(_.configured), s);
}
function zE() {
  return it;
}
function Jb(r) {
  if (it.length !== 0) return typeof r > "u" ? it[it.length - 1] : it.find((e) => e.id === r);
}
nu && (rt(Bb()), ha(_.loaded));
const Zb = [
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
function QE(r) {
  var e, t;
  return (r != null && r.isUTS) || Zb.includes(r == null ? void 0 : r.type)
    ? "video"
    : (t = (e = r == null ? void 0 : r.attributes) == null ? void 0 : e.mediaKind) != null
      ? t
      : "audio";
}
const mn = "com.apple.tv";
class ou {
  constructor(e, t, i, s, n, a, o) {
    c(this, "appBundleIds");
    c(this, "dispatcher");
    c(this, "item");
    c(this, "itemTiming");
    c(this, "instance");
    c(this, "npPlay");
    c(this, "playable");
    c(this, "pldfltcid");
    c(this, "utsClient");
    c(this, "watcher");
    c(this, "_isDestroyed", !1);
    ((this.dispatcher = e),
      (this.item = i),
      (this.instance = t),
      (this.npPlay = o),
      (this.playable = s),
      (this.pldfltcid = n),
      (this.utsClient = a),
      (this.appBundleIds = this.getAppBundleIds(s, i)),
      (this.itemTiming = ng(i)));
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  destroy() {
    var e;
    ((this._isDestroyed = !0), (e = this.watcher) == null || e.stopMonitor(), (this.watcher = void 0));
  }
  async trackActivity(e, t) {
    return Promise.resolve();
  }
  getAppBundleIds(e, t) {
    var n, a;
    const i = t == null ? void 0 : t.channels;
    if (!Array.isArray(i) || (e == null ? void 0 : e.channelId) === void 0) return;
    const s = i.find((o) => o.id === e.channelId);
    return (a = (n = s == null ? void 0 : s.appBundleIds) == null ? void 0 : n[0]) != null ? a : void 0;
  }
  determineRelativePosition(e, t) {
    return e <= t.mainContentStarts ? 0 : e >= t.mainContentEnds ? t.mainContentEnds : e - t.mainContentStarts;
  }
}
var e_ = Object.defineProperty,
  t_ = Object.getOwnPropertyDescriptor,
  cu = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? t_(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && e_(e, t, s), s);
  };
class lu extends ou {
  constructor() {
    super(...arguments);
    c(this, "playMetadataLive");
    c(this, "scheduleItems", []);
  }
  async init() {
    var s, n;
    const { playable: t } = this,
      i = await ((s = this.utsClient) == null
        ? void 0
        : s.request("getContentsPlayMetadataLive", { brandId: t.channelId, externalServiceId: t.externalServiceId }));
    ((this.playMetadataLive = (n = i == null ? void 0 : i.data) != null ? n : i), this.resetListening());
  }
  destroy() {
    this.unsubscribe();
  }
  async trackActivity(t, i) {
    (t === "scrub" || t === "seek") && this.resetListening();
  }
  handleTimeChange() {
    var s, n;
    const { scheduleItems: t } = this,
      i = (n = (s = this.instance.currentPlayingDate) == null ? void 0 : s.getTime()) != null ? n : 0;
    if (!(i === 0 || !t)) {
      for (let a = 0; a < t.length; a++) {
        const o = t[a],
          l = o.eventTime.liveBadgeTime.startTime,
          u = o.eventTime.liveBadgeTime.endTime;
        if (i >= l && i <= u) (t.splice(a, 1), (a -= 1), this.onLiveEvent(o));
        else if (i > l) (t.splice(a, 1), (a -= 1));
        else if (i < l) return;
      }
      t.length === 0 && this.unsubscribe();
    }
  }
  async onLiveEvent(t) {
    var l;
    const i = this.pldfltcid,
      { appBundleIds: s, playable: n, utsClient: a } = this;
    if (!i || !a || !n) return;
    const o = this.generateEventStartEvent(t);
    await ((l = this.npPlay) == null ? void 0 : l.send("live", o, i, s != null ? s : mn));
  }
  generateEventStartEvent(t) {
    return {
      bundleId: mn,
      millisecondsSinceEvent: 0,
      cause: "Event_Start",
      passThrough: t == null ? void 0 : t.nowPlayingPassThrough,
    };
  }
  resetListening() {
    var i;
    const t = (i = this.playMetadataLive) == null ? void 0 : i.schedule;
    t && t.length && ((this.scheduleItems = [...t]), this.unsubscribe(), this.subscribe());
  }
  subscribe() {
    this.dispatcher.subscribe(_.playbackTimeDidChange, this.handleTimeChange);
  }
  unsubscribe() {
    this.dispatcher.unsubscribe(_.playbackTimeDidChange, this.handleTimeChange);
  }
}
cu([S()], lu.prototype, "handleTimeChange", 1);
cu([S()], lu.prototype, "onLiveEvent", 1);
var r_ = Object.defineProperty,
  i_ = Object.getOwnPropertyDescriptor,
  s_ = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? i_(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && r_(e, t, s), s);
  };
const n_ = new Set(["exit", "pause", "play", "scrub", "seek", "skip", "stop"]),
  ii = E.createChild("bookmark");
class a_ extends ou {
  constructor() {
    super(...arguments);
    c(this, "metadata");
    c(this, "cachedDuration");
  }
  get currentPlaybackDuration() {
    var i;
    let t = Math.round((i = this.instance.currentPlaybackDuration) != null ? i : 0);
    return ((isNaN(t) || t === 0) && this.cachedDuration && (t = Math.round(this.cachedDuration)), t);
  }
  get hasPlaybackDuration() {
    const t = this.currentPlaybackDuration;
    return !isNaN(t) && t > 0;
  }
  get metadataPending() {
    return this.metadata === void 0;
  }
  async init() {
    const { item: t } = this;
    if (ln(t)) {
      const i = pg(t);
      this.setupVodWatcher(i, Number.POSITIVE_INFINITY);
    }
    this.metadata = void 0;
  }
  async fetchAndSetMetadata() {
    var o;
    const { playable: t, utsClient: i } = this,
      s = this.currentPlaybackDuration;
    if (!this.hasPlaybackDuration) {
      ii.info("fetchAndSetMetadata - can not fetch metadata due to missing duration");
      return;
    }
    const n = {
        externalId: t.externalId,
        brandId: t.channelId,
        hlsAssetDuration: s,
        playablePassThrough: t.playablePassThrough,
      },
      a = await (i == null ? void 0 : i.request("getContentsPlayMetadataVOD", n));
    this.metadata = (o = a == null ? void 0 : a.data) != null ? o : a;
  }
  setupVodWatcher(t, i) {
    ((this.watcher = new Ur(this.dispatcher, this.onContentCompletionThreshhold, t, i, !0)),
      this.watcher.startMonitor());
  }
  async onContentCompletionThreshhold(t) {
    (await this.trackActivity("exit", t), this.dispatcher.publish(P.mediaContentComplete, this.item));
  }
  async trackActivity(t, i) {
    var p, y;
    (ii.info(`trackActivity called - eventType: ${t}, position: ${i}`),
      this.hasPlaybackDuration && (this.cachedDuration = this.instance.currentPlaybackDuration),
      this.metadataPending && this.hasPlaybackDuration && (await this.fetchAndSetMetadata()));
    let { itemTiming: s } = this;
    const { appBundleIds: n, metadata: a, playable: o, pldfltcid: l } = this;
    if (!a || !o || !s || !n_.has(t)) {
      ii.info("trackActivity - cannot track event due to missing data");
      return;
    }
    if (t === "stop") {
      const g = s.totalContentLength;
      if (!((p = this.item) != null && p.isLinearStream) && g !== void 0 && i !== void 0) {
        const k = g - i;
        k >= 0 && k < 5 && (i = g + 0.5);
      }
    }
    const u = this.currentPlaybackDuration;
    ((isNaN(s.totalContentLength) || (u && u < s.totalContentLength)) &&
      this.hasPlaybackDuration &&
      (this.itemTiming = s = { ...s, mainContentEnds: u, mainContentLength: u, totalContentLength: u }),
      ii.info(`Bookmarking VOD progress at ${i}/${s.mainContentLength}`));
    const d = this.generateVodEvent(o, a, s, i);
    await ((y = this.npPlay) == null ? void 0 : y.send("vod", d, l, n != null ? n : mn));
  }
  generateVodEvent(t, i, s, n) {
    var o, l;
    return {
      playHeadInMilliseconds: Math.floor(n * 1e3),
      mediaLengthInMilliseconds: Math.floor(s.totalContentLength * 1e3),
      mainContentInfo: {
        isDone: n >= s.mainContentEnds ? "Done" : "Not_Done",
        playHeadInMilliseconds: Math.floor(this.determineRelativePosition(n, s) * 1e3),
        lengthInMilliseconds: Math.floor(s.mainContentLength * 1e3),
        passThrough: (l = (o = this.metadata) == null ? void 0 : o.nowPlayingPassThrough) != null ? l : "",
      },
    };
  }
}
s_([S()], a_.prototype, "onContentCompletionThreshhold", 1);
(P.playbackPlay, P.playbackPause, P.playbackScrub, P.playbackSeek, P.playbackSkip, P.playbackStop, P.playerExit);
E.createChild("bookmark");
var fa = { setDelegate: !0 };
function o_() {
  fa = { setDelegate: !0 };
}
function c_(r) {
  var e = {},
    t = yu(r),
    i,
    s;
  for (var n in r)
    ((i = null),
      (s = null),
      t && ((i = r.__lookupGetter__(n)), (s = r.__lookupSetter__(n))),
      i || s ? (i && e.__defineGetter__(n, i), s && e.__defineSetter__(n, s)) : (e[n] = r[n]));
  return e;
}
function _r(r) {
  return typeof r < "u";
}
function wr(r) {
  return _r(r) && r !== null;
}
function l_(r) {
  return wr(r) && !uu(r) && !du(r) && !hu(r);
}
function uu(r) {
  return pu(r) && r.length === 0;
}
function du(r) {
  return pa(r) && r.length === 0;
}
function hu(r) {
  return zi(r) && Object.keys(r).length === 0;
}
function ue(r) {
  return typeof r == "function";
}
function Rr(r) {
  return typeof r == "number";
}
function fu(r) {
  return Rr(r) && r % 1 === 0;
}
function pu(r) {
  return typeof r == "string" || r instanceof String;
}
function u_(r) {
  return !!r && r.nodeType == 1;
}
function pa(r) {
  return !!r && r.constructor === Array;
}
function zi(r) {
  return !!r && r.constructor === Object;
}
function d_(r) {
  var e = [];
  for (var t in r) {
    var i = r[t];
    r.hasOwnProperty(t) && !ue(i) && e.push(i);
  }
  return e;
}
function h_(r) {
  var e = [];
  for (var t in r) r.hasOwnProperty(t) && !ue(r[t]) && e.push(t);
  return e;
}
function f_(r) {
  for (var e in r) if (r.hasOwnProperty(e)) return !0;
}
function p_(r) {
  for (var e in r) if (r.hasOwnProperty(e) && r[e]) return !0;
}
function yu(r) {
  return zi(r) && ue(r.__lookupGetter__) && ue(r.__lookupSetter__) && ue(r.__defineGetter__) && ue(r.__defineSetter__);
}
function y_(r) {
  var e = [];
  for (var t in r) {
    var i = r[t];
    r.hasOwnProperty(t) && ue(i) && e.push(i);
  }
  return e;
}
function m_(r) {
  var e = {};
  for (var t in r) r.hasOwnProperty(t) && !ue(r[t]) && (e[r[t]] = t);
  return e;
}
function mu(r) {
  var e = [!0, !0, !0].concat(Array.prototype.slice.call(arguments));
  return ya.apply(null, e);
}
function ya(r, e, t, i) {
  for (var s = t ? i || {} : {}, n, a = 3; a < arguments.length; a++) {
    n = arguments[a];
    for (var o in n)
      if (Object.prototype.hasOwnProperty.call(n, o)) {
        var l = n[o];
        (r || l != null) && (e || typeof l != "function") && (s[o] = l);
      }
  }
  return s;
}
function g_(r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e];
    fa[t] = !0;
  }
}
function v_(r, e, t) {
  var i = !1;
  if (((t = t || !1), r && e && r !== e)) {
    var s = {};
    (Object.keys(e).forEach(function (n) {
      r[n] || (s[n] = !0);
    }),
      mu(s, fa),
      (i = gu(r, e, t ? r : null, s)));
  }
  return i;
}
function gu(r, e, t, i) {
  var s = !1;
  if (r && e) {
    ((i = i || {}), (t = t || e));
    var n = function (p, y, g, k, w) {
      var M = function () {
        return g[w].apply(p, arguments);
      };
      return (y && (M.origFunction = y), (M.attachedMethod = !0), M);
    };
    for (var a in e)
      if (!(a in i) && e[a] && ue(e[a])) {
        var o = r[a],
          l = o && ue(o),
          u = null;
        (l && (o.attachedMethod === !0 ? (u = o) : (u = o.bind(r))), (r[a] = n(t, u, e, r, a)), (s = !0));
      }
  }
  return s;
}
function vu(r) {
  var e = !1;
  for (var t in r)
    if (ue(r[t]) && r[t].attachedMethod === !0) {
      var i = r[t].origFunction;
      if (i) for (; r[t].origFunction;) ((r[t] = r[t].origFunction), (e = !0));
      else delete r[t];
    }
  return e;
}
function b_(r, e) {
  var t = {};
  for (var i in r)
    e[i] &&
      ue(r[i].setDelegate) &&
      (t[i] = r[i].setDelegate.apply(r[i], [e[i]].concat(Array.prototype.slice.call(arguments, 2))));
  return t;
}
var __ = function (e) {
  var t = !1;
  for (var i in e) {
    var s = e[i];
    s && typeof s == "object" && ue(s.setDelegate) && (t |= vu(s));
  }
  return !!t;
};
function T_(r, e) {
  var t = null;
  if (r && e && e.setDelegate) {
    var i = {},
      s;
    for (s in r) ue(r[s]) && r[s].origFunction && (i[s] = r[s]);
    t = e.setDelegate(i);
  }
  return t;
}
function E_(r, e) {
  var t = {};
  if (r) for (var i = 0; i < r.length; i++) t[r[i]] = 0;
  if (e) for (var s = 0; s < e.length; s++) t[e[s]] = 0;
  return Object.keys(t);
}
function ma() {
  return typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : {};
}
var f = Object.freeze({
    __proto__: null,
    _utResetNonOverridableFunctions: o_,
    shallowClone: c_,
    isDefined: _r,
    isDefinedNonNull: wr,
    isDefinedNonNullNonEmpty: l_,
    isEmptyString: uu,
    isEmptyArray: du,
    isEmptyObject: hu,
    isFunction: ue,
    isNumber: Rr,
    isInteger: fu,
    isString: pu,
    isElement: u_,
    isArray: pa,
    isObject: zi,
    values: d_,
    keys: h_,
    hasAnyKeys: f_,
    hasAnyNonNullKeys: p_,
    hasGetterAndSetterMethods: yu,
    methods: y_,
    invert: m_,
    extend: mu,
    copyKeysAndValues: ya,
    addNonOverrideableFunctions: g_,
    attachMethods: gu,
    detachMethods: vu,
    attachDelegate: v_,
    setDelegates: b_,
    resetDelegates: __,
    copyDelegatedFunctions: T_,
    dedupedArray: E_,
    globalScope: ma,
  }),
  Ss = { exponential: { maxWait: 1500, initialDelay: 100, factor: 2 } },
  bu = function (r, e, t) {
    ((this.delay = r || Ss.exponential.initialDelay),
      (this.maxWait = Rr(e) ? e : Ss.exponential.maxWait),
      (this.factor = t || Ss.exponential.factor),
      (this.timeWaited = 0));
  };
bu.prototype.nextDelay = function () {
  var e = null,
    t = this.maxWait - this.timeWaited;
  return (
    t > 0 && ((this.delay = Math.min(this.delay, t)), (this.timeWaited += this.delay)),
    (this.maxWait === 0 || t > 0) && ((e = this.delay), (this.delay = this.delay * this.factor)),
    e
  );
};
function _u(r, e, t, i) {
  var s = function () {
    var a = r.nextDelay();
    a ? setTimeout(_u.bind(null, r, e, t, i), a) : i.apply(i, arguments);
  };
  e.call(e, t, s);
}
function S_(r, e, t, i, s, n) {
  var a = new bu(i, s, n);
  _u(a, r, e, t);
}
var I_ = Object.freeze({ __proto__: null, exponentialBackoff: S_ });
function k_(r, e, t) {
  var i = void 0;
  if (_r(r))
    if ((_r(e) || (e = 1024 * 1024), _r(t) || (t = 2), Rr(r) && Rr(e) && e > 0 && fu(t) && t >= 0)) {
      var s = Math.pow(10, t),
        n = r > 0 ? "floor" : "ceil";
      i = Math[n](r / e / s) * s;
    } else i = NaN;
  return i;
}
var P_ = Object.freeze({ __proto__: null, deResNumber: k_ }),
  ga = "0123456789",
  A_ = ga + "ABCDEF",
  Tu = ga + "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Eu = Tu + "abcdefghijklmnopqrstuvwxy",
  Su = Eu + "z";
function w_(r, e, t) {
  var i = !1;
  return (
    r &&
      e &&
      ((r = r.substr(0, e.length)), t && ((r = r.toLowerCase()), (e = e.toLowerCase())), (i = r.indexOf(e) === 0)),
    i
  );
}
function R_(r, e, t) {
  var i = !1;
  if (r && e) {
    t && ((r = r.toLowerCase()), (e = e.toLowerCase()));
    var s = r.length - e.length;
    i = s >= 0 && r.lastIndexOf(e) === s;
  }
  return i;
}
function C_(r, e, t) {
  var i = null,
    s = `	
\v\f\r             　\u2028\u2029​`,
    n = new RegExp("^[" + s + "]+"),
    a = new RegExp("[" + s + "]+$");
  if (r)
    if (!t && (!e || e == s) && r.trim) i = r.trim();
    else {
      var o = null,
        l = null,
        u = null;
      e && typeof e < "u"
        ? ((e = e.replace(/([.?*+^$[\]\\(){}-])/g, "\\$1")),
          (o = "[" + e + "]"),
          (l = new RegExp("^" + o + "+")),
          (u = new RegExp(o + "+$")))
        : ((o = s), (l = n), (u = a));
      var d = r.replace(l, "");
      i = d.replace(u, "");
    }
  return i;
}
function Iu(r, e) {
  var t = "";
  if (r)
    for (var i = r.toLowerCase().split("_"), s, n = 0; n < i.length; n++)
      ((s = i[n][0]), (n !== 0 || e) && (s = s.toUpperCase()), (t += s + i[n].slice(1)));
  return t;
}
function O_(r) {
  return Iu(r, !0);
}
function D_(r) {
  var e = "",
    t = "",
    i = !0;
  for (var s in r) {
    var n = r[s];
    (n || n === 0 || n === !1) && ((e += t + s + "=" + encodeURIComponent(n)), i && ((t = "&"), (i = !1)));
  }
  return e;
}
function N_(r, e) {
  return (
    "The function " +
    r +
    "." +
    e +
    "() must be overridden with a platform-specific delegate function.If you have no data for this function, have your delegate return null or undefined (no 'return')"
  );
}
function L_(r, e) {
  var t = null;
  e = e || "\\S+";
  var i = new RegExp("\\b" + e + "/(\\S+)\\b", "i"),
    s = i.exec(r);
  return (s && s[1] && (t = s[1]), t);
}
function M_(r) {
  var e = "z",
    t = Date.now(),
    i = Math.floor(Math.random() * 1e5);
  return ((t = t.toString(36).toUpperCase()), (i = i.toString(36).toUpperCase()), r + e + t + e + i);
}
function U_(r) {
  for (var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", t = "", i, s = 0, n = e.length; s < n; s++)
    ((i = e.charAt(s)), i === "x" ? (t += Ai(r)) : i === "y" ? (t += Ai(r, "8", "b")) : (t += i));
  return t;
}
function Ai(r, e, t) {
  var i = ma(),
    s = i.crypto || i.msCrypto,
    n;
  return (
    r
      ? (n = ((r() * 16) | 0).toString(16))
      : s && s.getRandomValues
        ? (n = (s.getRandomValues(new Uint8Array(1))[0] & 15).toString(16))
        : s && s.randomBytes
          ? (n = s.randomBytes(1).toString("hex")[0])
          : (n = ((Math.random() * 16) | 0).toString(16)),
    e && t && (n < e || n > t) && (n = Ai(r, e, t)),
    n
  );
}
function x_(r, e) {
  var t = "",
    i = e.length;
  if (i <= 36) t = r.toString(i).toUpperCase();
  else {
    for (var s, n, a = []; r > 0;) ((s = r % i), (n = e.charAt(s)), a.push(n), (r = (r - s) / i));
    t = a.reverse().join("");
  }
  return (t === "" && (t = "0"), t);
}
function F_(r) {
  var e;
  if (Math.floor(4294967295 / 256) == 16777215) {
    var t = ma(),
      i = t.crypto || t.msCrypto,
      s,
      n,
      a,
      o,
      l;
    if (i && i.getRandomValues)
      ((s = i.getRandomValues(new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT))), (l = !0));
    else if (i && i.randomBytes) {
      var u = i.randomBytes(16);
      ((s = new Uint32Array(u.buffer, u.byteOffset, u.byteLength / Uint32Array.BYTES_PER_ELEMENT)), (l = !0));
    } else
      for (s = new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT), n = 0; n < s.length; n++)
        s[n] = Math.floor(Math.random() * Math.floor(4294967295));
    if (s) {
      for (e = "", n = 0; n < s.length; n++)
        for (o = s[n], a = 0; a < 6; a++) ((e += Su[o % 62]), (o = Math.floor(o / 62)));
      r && (e = "1_" + (l ? "1" : "2") + "_" + e);
    }
  }
  return e;
}
var we = Object.freeze({
  __proto__: null,
  base10Alphabet: ga,
  base16Alphabet: A_,
  base36Alphabet: Tu,
  base61Alphabet: Eu,
  base62Alphabet: Su,
  startsWith: w_,
  endsWith: R_,
  trim: C_,
  snakeCaseToCamelCase: Iu,
  snakeCaseToUpperCamelCase: O_,
  exceptionString: N_,
  paramString: D_,
  versionStringFromUserAgent: L_,
  requestId: M_,
  uuid: U_,
  randomHexCharacter: Ai,
  convertNumberToBaseAlphabet: x_,
  cryptoRandomBase62String: F_,
});
function ku(r, e, t) {
  var i = e;
  if (r && e)
    for (var s = r.split("."), n = 0; i && n < s.length; n++) {
      var a = s[n];
      (!(a in i) && t && (i[a] = {}), a in i ? (i = i[a]) : (i = null));
    }
  return i;
}
function gn(r) {
  var e = null;
  if (r && arguments.length > 1)
    for (var t = Pu(Array.prototype.slice.call(arguments, 1)), i = t.length - 1; i >= 0; i--) {
      var s = t[i];
      if (((e = ku(r, s)), wr(e))) break;
    }
  return e;
}
function K_(r, e) {
  return ku(r, e, !0);
}
function Pu(r) {
  var e = [],
    t = [];
  ((t = t.concat(r)), arguments && arguments.length > 1 && (t = t.concat(Array.prototype.slice.call(arguments, 1))));
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    e = e.concat(s);
  }
  return e;
}
var V_ = Object.freeze({ __proto__: null, valueForKeyPath: gn, createObjectAtKeyPath: K_, sourcesArray: Pu });
function vn(r) {
  for (var e = [!1, !1, !1].concat(Array.prototype.slice.call(arguments)), t = [], i = 0; i < e.length; i++) {
    var s = e[i];
    if (s && s.constructor === Array) for (var n = 0; n < s.length; n++) t.push(s[n]);
    else t.push(s);
  }
  return ya.apply(null, t);
}
function B_(r, e, t, i) {
  var s = vn(i),
    n = s;
  if (r && e) {
    var a = {};
    if (
      (t ||
        (e = e.filter(function (d) {
          return d in s;
        })),
      e.length)
    )
      for (var o = 0; o < e.length; o++) {
        var l = e[o],
          u = r[l];
        ue(u) && (a[l] = u.call(r, s));
      }
    n = vn(n, a);
  }
  return n;
}
function $_(r, e, t, i) {
  var s, n, a;
  if (r && e && t)
    if (((n = {}), (s = gn(e, t, t.custom)), s)) {
      var o, l;
      if (pa(s)) for (o = 0; o < s.length; ++o) ((l = r[s[o]]), wr(l) && (n[s[o]] = l));
      else if (zi(s)) {
        for (var u in s)
          for (o = 0; o < s[u].length; ++o)
            if (((l = gn(s[u][o], r)), wr(l))) {
              n[u] = l;
              break;
            }
      } else a = "metrics: incorrect data type provided to applyFieldsMap (only accepts objects and Arrays)";
    } else a = "metrics: unable to get " + e + " section from fieldsMap";
  else {
    var d = [];
    (r || d.push("data"),
      e || d.push("sectionName"),
      t || d.push("fieldsMap"),
      (a = "metrics: missing argument(s): " + d.join(",") + " not provided to applyFieldsMap"));
  }
  return (a && ue(i) && i(a), n);
}
var Qi = Object.freeze({ __proto__: null, mergeAndCleanEventFields: vn, processMetricsData: B_, applyFieldsMap: $_ });
function H_(r, e, t) {
  Au(r, "GET", null, e, t);
}
function Au(r, e, t, i, s, n) {
  var a = new XMLHttpRequest();
  ((t = t || void 0), (n = n || {}), (i = ue(i) ? i : function () {}), (s = ue(s) ? s : function () {}));
  var o = n.async !== !1;
  (n.timeout && o && (a.timeout = n.timeout),
    (a.onload = function () {
      a.status >= 200 && a.status < 300
        ? i(a.response)
        : s(new Error("XHR error: server responded with status " + a.status + " " + a.statusText), a.status);
    }),
    (a.onerror = function () {
      s(new Error("XHR error"));
    }),
    a.open(e, r, o),
    (a.withCredentials = typeof n.withCredentials == "boolean" ? n.withCredentials : !0),
    a.setRequestHeader("Content-type", "application/json"),
    a.send(t));
}
var wu = Object.freeze({ __proto__: null, makeAjaxGetRequest: H_, makeAjaxRequest: Au }),
  va = { STORAGE_TYPE: { LOCAL_STORAGE: "localStorage", SESSION_STORAGE: "sessionStorage" } },
  Ru = function (e) {
    var t = null,
      i = !1;
    return function () {
      return (
        e
          ? (t = e)
          : (i ||
              (console.error(
                "storageObject: storage object not found. Override this function if there is a platform-specific implementation",
              ),
              (i = !0)),
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
function ba(r) {
  var e = null,
    t = null,
    i = r === va.STORAGE_TYPE.LOCAL_STORAGE;
  try {
    ((t = i ? typeof localStorage : typeof sessionStorage),
      t !== "undefined" ? (e = i ? localStorage : sessionStorage) : (e = null));
  } catch (s) {
    ((e = null), console.error("_utils.storage._defaultStorageObject: Unable to retrieve storage object: " + s));
  }
  return e;
}
function j_(r) {
  return ba(r);
}
var q_ = Ru(ba(va.STORAGE_TYPE.LOCAL_STORAGE)),
  W_ = Ru(ba(va.STORAGE_TYPE.SESSION_STORAGE));
function Y_(r, e, t) {
  var i = null;
  if (t)
    try {
      (r.setItem(e, JSON.stringify(t)), (i = t));
    } catch (s) {}
  else i = r.removeItem(e);
  return i;
}
function G_(r, e) {
  var t = null,
    i = r.getItem(e);
  if (i)
    try {
      t = JSON.parse(i);
    } catch (s) {
      t = void 0;
    }
  return t;
}
var ee = Object.freeze({
  __proto__: null,
  _utDefaultStorageObject: j_,
  localStorageObject: q_,
  sessionStorageObject: W_,
  saveObjectToStorage: Y_,
  objectFromStorage: G_,
});
function di(r) {
  this.key = r;
}
di.prototype.toString = function () {
  return this.key;
};
var Ge = {
    flagArguments: {
      INCLUDE_CALL_STACK: new di("INCLUDE_CALL_STACK"),
      MIRROR_TO_SERVER: new di("MIRROR_TO_SERVER"),
      SUPPRESS_CLIENT_OUTPUT: new di("SUPPRESS_CLIENT_OUTPUT"),
    },
    setDelegate: function (e) {
      return f.attachDelegate(this, e);
    },
    execute: function (e, t, i) {
      var s = e.levelStringToIntMap[t];
      if (e.level() !== e.NONE && e.level() <= s) {
        var n = Array.prototype.slice.call(i),
          a = Ge.nonFlagLogArguments(n),
          o = Ge.logOptions(e, s, n),
          l = o.includeCallStack ? new Error().stack : null,
          u = l
            ? a.concat(
                `
` + l,
              )
            : a;
        if (((e[t]._lastLog = u), o.mirrorToServer, o.throwInsteadOfPrint)) throw new Error(a.toString());
        o.suppressClientOutput || (console[t] ? console[t].apply(console, u) : console.log.apply(console, u));
      }
    },
    isFlagObject: function (e) {
      return e && e === Ge.flagArguments[e.toString()];
    },
    nonFlagLogArguments: function (e) {
      return e.filter(function (t) {
        return !Ge.isFlagObject(t);
      });
    },
    logOptions: function (e, t, i) {
      var s = {},
        n;
      return (
        i.forEach(function (a) {
          Ge.isFlagObject(a) && ((n = we.snakeCaseToCamelCase(a.toString())), (s[n] = !0));
        }),
        f.isFunction(e.mirrorToServerLevel) &&
          e.mirrorToServerLevel() !== e.NONE &&
          e.mirrorToServerLevel() <= t &&
          (s.mirrorToServer = !0),
        e.throwLevel() !== e.NONE && e.throwLevel() <= t && (s.throwInsteadOfPrint = !0),
        s
      );
    },
    sendToServer: function (e, t, i, s) {},
  },
  bn = { NONE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 },
  wi = {
    MIN_LEVEL: bn.NONE,
    MAX_LEVEL: bn.ERROR,
    levelIntToStringMap: { 0: "none", 1: "debug", 2: "info", 3: "warn", 4: "error" },
    levelStringToIntMap: { none: 0, debug: 1, info: 2, warn: 3, error: 4 },
  };
f.extend(wi, bn);
var _a = { loggerName: "defaultLogger", level: wi.INFO, throwLevel: wi.NONE },
  nc = !1,
  ac = {};
function ne(r) {
  ((this._loggerName = r),
    this._level,
    this._throwLevel,
    nc || ((nc = !0), f.extend(ne.prototype, wi), f.extend(ne.prototype, Ge.flagArguments)));
}
function Kr(r) {
  r = r || _a.loggerName;
  var e = ac[r];
  return (e || ((e = new ne(r)), (ac[r] = e)), e);
}
ne.level = function () {
  return _a.level;
};
ne.throwLevel = function () {
  return _a.throwLevel;
};
ne.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
ne.prototype.loggerName = function () {
  return this._loggerName;
};
ne.prototype.levelParameterAsInt = function (e) {
  var t = null,
    i;
  return (
    f.isString(e) ? (i = this.levelStringToIntMap[e.toLowerCase()]) : f.isNumber(e) && (i = e),
    i >= this.MIN_LEVEL && i <= this.MAX_LEVEL && (t = i),
    t
  );
};
ne.prototype.setLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._level = t);
};
ne.prototype.setThrowLevel = function (e) {
  var t = this.levelParameterAsInt(e);
  t !== null && (this._throwLevel = t);
};
ne.prototype.level = function () {
  var e = this._level;
  return f.isNumber(e) ? e : ne.level();
};
ne.prototype.levelString = function () {
  return this.levelIntToStringMap[this.level()];
};
ne.prototype.throwLevel = function () {
  var e = this._throwLevel;
  return f.isNumber(e) ? e : ne.throwLevel();
};
ne.prototype.debug = function () {
  Ge.execute(this, "debug", arguments);
};
ne.prototype.info = function () {
  Ge.execute(this, "info", arguments);
};
ne.prototype.warn = function () {
  Ge.execute(this, "warn", arguments);
};
ne.prototype.error = function () {
  Ge.execute(this, "error", arguments);
};
ne.prototype.lastLog = function (e) {
  return this[e] ? this[e]._lastLog : null;
};
var Xi = function () {};
Xi.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
Xi.prototype.localStorageObject = ee.localStorageObject;
Xi.prototype.sessionStorageObject = ee.sessionStorageObject;
var Ta = function () {};
Ta.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
Ta.prototype.makeAjaxRequest = wu.makeAjaxRequest;
var Ji = "noTopicConfig",
  oc = "_",
  _n = { configBaseUrl: "https://xp.apple.com/config/1/report", disabled: !0 },
  Is,
  cc = function (e, t, i) {
    if (i) {
      e.push(i);
      var s = i[t];
      s && f.hasAnyKeys(s) && e.push(s);
    }
  },
  Y = function (e) {
    ((this.environment = new Xi()),
      (this.network = new Ta()),
      (this.logger = new ne("mt-client-config")),
      (this._topic = e || Ji),
      (this._debugSource = null),
      (this._cachedSource = null),
      (this._serviceSource = null),
      (this._initCalled = !1),
      (this._initialized = !1),
      (this._showedDebugWarning = !1),
      (this._showedNoProvidedSourceWarning = !1),
      (this._keyPathsThatSuppressWarning = { configBaseUrl: !0 }),
      (this._configFetchPromise = null),
      (this.DEBUG_SOURCE_KEY = "mtClientConfig_debugSource" + oc + this._topic),
      (this.CACHED_SOURCE_KEY = "mtClientConfig_cachedSource" + oc + this._topic));
  };
Y.defaultConfig = function () {
  return (Is || (Is = new Y(Ji)), Is);
};
Y.prototype._defaults = function () {
  return _n;
};
Y.prototype._setInitialized = function (e) {
  this._initialized = e;
};
Y.prototype._setInitCalled = function (e) {
  this._initCalled = e;
};
Y.prototype._setShowedDebugWarning = function (e) {
  this._showedDebugWarning = e;
};
Y.prototype._setShowedNoProvidedSourceWarning = function (e) {
  this._showedNoProvidedSourceWarning = e;
};
Y.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
Y.prototype.resetDelegate = function () {
  (f.detachMethods(this), f.resetDelegates(this));
};
Y.prototype.topic = function () {
  return this._topic;
};
Y.prototype.configHostname = function () {};
Y.prototype.configUrl = function () {
  var e = this.configHostname(),
    t;
  return (
    e ? (t = Promise.resolve("https://" + e + "/config/1/report")) : (t = this.value("configBaseUrl")),
    t.then(
      function (i) {
        return (
          this._topic !== Ji
            ? (i += "/" + this.topic())
            : this.logger.error("config.configUrl(): Topic must be provided"),
          i
        );
      }.bind(this),
    )
  );
};
Y.prototype.sources = function () {};
Y.prototype.value = function (e, t) {
  var i = function () {
    var n = this.cachedSource(),
      a = this.serviceSource(),
      o = this.sources(),
      l = this.debugSource(),
      u = n || a || o || l,
      d;
    return (
      !o &&
        !a &&
        !(e in this._keyPathsThatSuppressWarning) &&
        (this._showedNoProvidedSourceWarning ||
          ((this._showedNoProvidedSourceWarning = !0),
          this.logger.warn(
            "Metrics config: No config provided via delegate or fetched via init(), using cached config values.",
          ))),
      l &&
        (this._showedDebugWarning ||
          ((this._showedDebugWarning = !0),
          this.logger.warn(`"debugSource" found.
This will override any same-named client-supplied configSource fields.
This setting "sticks" across session, use "setDebugSource(null)" to clear`))),
      f.isArray(o) || (o = [o]),
      e === "disabled" ? (u ? (d = [n, a, o, l]) : (d = [_n])) : (d = [_n, n, a, o, l]),
      (d = this.configSourcesWithOverrides(d, t || this.topic())),
      V_.valueForKeyPath.apply(null, [e].concat(d))
    );
  }.bind(this);
  if (this._configFetchPromise) return this._configFetchPromise.then(i);
  var s = i();
  return Promise.resolve(s);
};
Y.prototype.configSourcesWithOverrides = function (e, t) {
  var i = e;
  if (e && e.length && t) {
    i = [];
    for (var s = 0; s < e.length; s++) {
      var n = e[s];
      if (n)
        if (f.isArray(n) && n.length) {
          for (var a = [], o = 0; o < n.length; o++) cc(a, t, n[o]);
          i.push(a);
        } else cc(i, t, n);
    }
  }
  return i;
};
Y.prototype.setDebugSource = function (e) {
  return (
    (this._debugSource = e || null),
    ee.saveObjectToStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY, this._debugSource)
  );
};
Y.prototype.debugSource = function () {
  return (
    this._debugSource ||
      (this._debugSource = ee.objectFromStorage(this.environment.localStorageObject(), this.DEBUG_SOURCE_KEY)),
    this._debugSource
  );
};
Y.prototype.setCachedSource = function (e) {
  return (
    (this._cachedSource = e || null),
    ee.saveObjectToStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY, this._cachedSource)
  );
};
Y.prototype.cachedSource = function () {
  return (
    this._cachedSource ||
      (this._cachedSource = ee.objectFromStorage(this.environment.localStorageObject(), this.CACHED_SOURCE_KEY)),
    this._cachedSource
  );
};
Y.prototype.setServiceSource = function (e) {
  return ((this._serviceSource = e), this._serviceSource);
};
Y.prototype.serviceSource = function () {
  return this._serviceSource;
};
Y.prototype.init = function (e) {
  var t = this._topic === Ji || !f.isFunction(e);
  if (
    (t &&
      this.logger.warn(
        "config.init(): Falling back to default config because configSourcesFn or a valid topic was not provided",
      ),
    this._initCalled || t)
  )
    return Promise.resolve(this);
  this._initCalled = !0;
  var i = this;
  return (
    (this._configFetchPromise = Promise.resolve(e())
      .then(function (s) {
        return (
          i.setDelegate({
            sources: function () {
              return s;
            },
          }),
          (i._initialized = !0),
          i
        );
      })
      .catch(function (s) {
        throw ((i._initCalled = !1), (i._initialized = !1), s);
      })),
    this._configFetchPromise
  );
};
Y.prototype.cleanup = function () {
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
Y.prototype.initialized = function () {
  return this._initialized;
};
var Ee = function (e) {
  Y.call(this, e);
};
Ee.prototype = Object.create(Y.prototype);
Ee.prototype.constructor = Ee;
Ee.prototype.disabled = function (e) {
  return this.value("disabled", e).then(function (t) {
    return !!t;
  });
};
Ee.prototype.blacklistedEvents = function (e) {
  return this.denylistedEvents(e);
};
Ee.prototype.denylistedEvents = function (e) {
  var t = this.value("blacklistedEvents", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      }),
    i = this.value("denylistedEvents", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      });
  return Promise.all([t, i]).then(function (s) {
    var n = s[0],
      a = s[1];
    return Cu(n, a);
  });
};
function Cu(r, e) {
  var t = {},
    i = [];
  if (r) for (var s = 0; s < r.length; s++) t[r[s]] = 0;
  if (e) for (var n = 0; n < e.length; n++) t[e[n]] = 0;
  return ((i = Object.keys(t)), i);
}
Ee.prototype.blacklistedFields = function (e) {
  return this.denylistedFields(e);
};
Ee.prototype.denylistedFields = function (e) {
  var t = this.value("blacklistedFields", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      }),
    i = this.value("denylistedFields", e)
      .then(function (s) {
        return s || [];
      })
      .catch(function () {
        return [];
      });
  return Promise.all([t, i]).then(function (s) {
    var n = s[0],
      a = s[1];
    return Cu(n, a);
  });
};
Ee.prototype.removeBlacklistedFields = function (e, t) {
  return this.removeDenylistedFields(e, t);
};
Ee.prototype.removeDenylistedFields = function (e, t) {
  return e
    ? this.denylistedFields(t).then(function (i) {
        for (var s = 0; s < i.length; s++) {
          var n = i[s];
          n && n in e && delete e[n];
        }
        return e;
      })
    : Promise.resolve(e);
};
Ee.prototype.metricsDisabledOrBlacklistedEvent = function (e, t) {
  return this.metricsDisabledOrDenylistedEvent(e, t);
};
Ee.prototype.metricsDisabledOrDenylistedEvent = function (e, t) {
  return this.disabled(t).then(
    function (i) {
      return (
        i ||
        (e
          ? this.denylistedEvents(t).then(function (s) {
              return s.indexOf(e) > -1;
            })
          : !1)
      );
    }.bind(this),
  );
};
Ee.prototype.deResFields = function (e) {
  return this.value("deResFields", e).then(function (t) {
    return t || [];
  });
};
Ee.prototype.applyDeRes = function (e, t) {
  return e
    ? this.deResFields(t).then(function (i) {
        var s;
        return (
          i.forEach(function (n) {
            ((s = n.fieldName), s in e && (e[s] = P_.deResNumber(e[s], n.magnitude, n.significantDigits)));
          }),
          e
        );
      })
    : Promise.resolve(e);
};
var Be = function (e, t) {
  if (!f.isDefinedNonNullNonEmpty(e) || !f.isString(e)) throw new Error("No valid topic was provided to Delegates.");
  ((this.config = this.getOrCreateConfig(e)),
    f.isDefinedNonNull(t) && ((this.environment = t.environment), (this.eventRecorder = t.eventRecorder)),
    (this._useOrginalContextForDelegateFunc = !1));
};
Be.prototype.init = function () {
  if (!f.isDefinedNonNull(this.environment)) throw new Error("No environment was provided to Delegate options.");
  if (!f.isDefinedNonNull(this.eventRecorder)) throw new Error("No eventRecorder was provided to Delegate options.");
  (this.config.environment.setDelegate(this.environment),
    this.config.logger.setDelegate(this.logger),
    this.config.network.setDelegate(this.network));
  var r = f.isFunction(this.configSources) ? this.configSources.bind(this) : null;
  return this.config.init(r);
};
Be.prototype.mergeDelegates = function (r) {
  var e = this;
  for (var t in r) e[t] || (e[t] = r[t]);
  this.config.setDelegate(r.config);
};
Be.prototype.cleanup = function () {
  (f.isFunction(this.eventRecorder.cleanup) && this.eventRecorder.cleanup(),
    (this.config = null),
    (this.eventRecorder = null),
    (this.environment = null));
};
Be.prototype.setEventRecorder = function (e) {
  return (
    f.isDefinedNonNull(e) &&
      (f.isDefinedNonNull(this.eventRecorder)
        ? (f.setDelegates(this.eventRecorder, e), this.eventRecorder.setDelegate(e))
        : (this.eventRecorder = e)),
    this
  );
};
Be.prototype.setEnvironment = function (e) {
  if (!f.isDefinedNonNull(this.environment)) this.environment = e;
  else {
    var t = Object.create(this.environment);
    (f.extend(t, e), (this.environment = t));
  }
  return this;
};
Be.prototype.setConfig = function (e) {
  return (this.config.setDelegate(e), this);
};
Be.prototype.getOrCreateConfig = function (e) {
  return (f.isDefinedNonNull(this.config) || (this.config = new Ee(e)), this.config);
};
Be.prototype.configSources = function () {
  throw new Error("This method should be implemented by subdelegates.");
};
function Kt() {
  this._operationPromiseChain = Promise.resolve();
}
Kt.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
Kt.prototype.recordEvent = function (e, t) {
  var i = Array.prototype.slice.call(arguments, 2),
    s = this;
  return (
    (this._operationPromiseChain = this._operationPromiseChain.then(function () {
      return Promise.resolve(t).then(function (n) {
        return s._recordEvent.apply(s, [e, n].concat(i));
      });
    })),
    this._operationPromiseChain
  );
};
Kt.prototype.flushUnreportedEvents = function () {
  var e = Array.prototype.slice.call(arguments),
    t = this;
  return this._operationPromiseChain.then(function () {
    return ((t._operationPromiseChain = Promise.resolve()), t._flushUnreportedEvents.apply(t, e));
  });
};
Kt.prototype._recordEvent = function (e, t) {};
Kt.prototype._flushUnreportedEvents = function (e) {};
var Tr = {
    setDelegate: function (e) {
      return f.attachDelegate(this, e);
    },
    globalScope: function () {
      return f.globalScope();
    },
  },
  Ri = {
    AJAX: "ajax",
    AJAX_SYNCHRONOUS: "ajaxSynchronous",
    IMAGE: "image",
    BEACON: "beacon",
    BEACON_SYNCHRONOUS: "beaconSynchronous",
  },
  z_ = ["dsId", "consumerId"];
function Q_(r, e) {
  var t = { _topic: e };
  return (Object.setPrototypeOf(t, r), t);
}
var $e = function (e) {
  (this._validateConfig(e),
    (this._config = e),
    (this._topicConfigCache = {}),
    (this._topicPropsCache = {}),
    (this.logger = Kr("mt-event-queue")));
};
$e.prototype._validateConfig = function (e) {
  var t = "please call constructor with a valid Config instance first.";
  if (e) {
    if (!e.topic || !f.isFunction(e.topic)) throw new TypeError("Unable to find config.topic function, " + t);
    if (!e.metricsDisabledOrDenylistedEvent || !f.isFunction(e.metricsDisabledOrDenylistedEvent))
      throw new TypeError("Unable to find config.metricsDisabledOrDenylistedEvent function, " + t);
    if (!e.removeDenylistedFields || !f.isFunction(e.removeDenylistedFields))
      throw new TypeError("Unable to find config.removeDenylistedFields function, " + t);
  } else throw new TypeError("Unable to find config, " + t);
};
$e.prototype._removeIdentifiableFieldsForTopic = function (e, t) {
  ((this._topicPropsCache[e] = this._topicPropsCache[e] || {}),
    this._topicPropsCache[e].anonymous &&
      z_.forEach(function (i) {
        delete t[i];
      }));
};
$e.prototype._record = function (e) {};
$e.prototype.cleanup = function () {
  ((this._config = null), (this._topicConfigCache = null), (this._topicPropsCache = {}));
};
$e.prototype.recordEvent = function (e, t) {
  if (!this._config || !t) return Promise.resolve(null);
  var i = this._config,
    s = this,
    n = arguments;
  return (
    f.isDefinedNonNullNonEmpty(e) &&
      e !== i.topic() &&
      ((i = this._topicConfigCache[e]), i || (i = this._topicConfigCache[e] = Q_(this._config, e))),
    t.anonymous === !0 &&
      ((!f.isDefinedNonNull(this._topicPropsCache[e]) || this._topicPropsCache[e].anonymous !== !0) &&
        this.setProperties(e, { anonymous: !0 }),
      delete t.anonymous),
    i
      .metricsDisabledOrDenylistedEvent(t.eventType)
      .then(function (a) {
        return a
          ? null
          : i
              .removeDenylistedFields(t)
              .then(function () {
                return (
                  s._removeIdentifiableFieldsForTopic(e, t),
                  s._record.apply(s, [i].concat(Array.prototype.slice.call(n, 1)))
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
$e.prototype.sendMethod = function () {
  return "javascript";
};
$e.prototype.setProperties = function (e, t) {
  ((this._topicPropsCache[e] = this._topicPropsCache[e] || {}), (this._topicPropsCache[e] = t));
};
var Ea = {
  setDelegate: function (e) {
    return f.attachDelegate(this, e);
  },
  makeAjaxRequest: wu.makeAjaxRequest,
};
function Ou() {
  var r = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(r) && r.indexOf("IEMobile") == -1;
}
function X_() {
  return f.isFunction(Tr.globalScope().fetch) && !/Firefox/.test(navigator.userAgent);
}
function It() {
  return Kr("mt-event-queue");
}
var L = {
    DEFAULT_REQUEST_TIMEOUT: 1e4,
    EVENTS_KEY: "events",
    EVENT_DELIVERY_VERSION: "1.0",
    MAX_PERSISTENT_QUEUE_SIZE: 100,
    RETRY_EXPONENT_BASE: 2,
    SEND_METHOD: Ri,
    URL_DELIVERY_VERSION: 2,
    PROPERTIES_KEY: "properties",
  },
  b = {
    eventQueues: {},
    postIntervalEnabled: !0,
    enqueueEvent: function (e, t) {
      if (e && t && e.topic()) {
        var i = e.topic();
        return (
          (b.eventQueues = b.eventQueues || {}),
          (b.eventQueues[i] = b.eventQueues[i] || {}),
          (b.eventQueues[i].topicConfig = e),
          (b.eventQueues[i].flushConfig = b.eventQueues[i].flushConfig || {}),
          (b.eventQueues[i][L.EVENTS_KEY] = b.eventQueues[i][L.EVENTS_KEY] || []),
          b.eventQueues[i][L.EVENTS_KEY].push(t),
          Object.keys(b.eventQueues[i].flushConfig).length === 0 &&
            Promise.all([e.value("metricsUrl"), e.value("requestTimeout"), e.value("postFrequency")]).then(
              function (s) {
                var n = b.eventQueues[i].flushConfig;
                ((n.metricsUrl = s[0]), (n.requestTimeout = s[1]), (n.postFrequency = s[2]));
              },
            ),
          e.value("maxPersistentQueueSize").then(function (s) {
            return ((s = s || L.MAX_PERSISTENT_QUEUE_SIZE), b.trimEventQueues(b.eventQueues, s), t);
          })
        );
      } else return Promise.resolve(null);
    },
    trimEventQueues: function (e, t) {
      var i = Object.keys(e);
      i.length &&
        i.forEach(function (s) {
          var n = e[s][L.EVENTS_KEY];
          n &&
            n.length &&
            n.length > t &&
            (It().warn(
              "eventQueue overflow, deleting LRU events: size is: " + n.length + " which is over max size: " + t,
            ),
            (e[s][L.EVENTS_KEY] = n.slice(-t)));
        });
    },
    resetTopicQueue: function (e) {
      b.eventQueues[e] && (b.eventQueues[e][L.EVENTS_KEY] = null);
    },
    resetTopicRetryAttempts: function (e) {
      b.eventQueues[e] && (b.eventQueues[e].retryAttempts = 0);
    },
    scheduleNextTopicRetryAttempt: function (e) {
      var t = e.topic();
      return b.eventQueues[t] && this.postIntervalEnabled
        ? e.value("postFrequency").then(function (i) {
            var s = b.eventQueues[t];
            ((s.retryAttempts = s.retryAttempts || 0), s.retryAttempts++);
            var n = Math.pow(L.RETRY_EXPONENT_BASE, s.retryAttempts) * i;
            (b.resetTopicPostInterval(t), b.setTopicPostInterval(e, n));
          })
        : Promise.resolve();
    },
    sendEvents: function (e, t) {
      var i = [];
      for (var s in b.eventQueues) {
        var n = b.eventQueues[s].topicConfig;
        if (f.isDefinedNonNull(n)) {
          var a = b.sendEventsForTopicConfig(n, e, t);
          i.push(a);
        } else
          It().warn(
            'MetricsKit: Unable to find the topic config for the topic "' +
              s +
              '". Please ensure The topic has been initialized within delegates.',
          );
      }
      return Promise.all(i);
    },
    sendEventsForTopicConfig: function (e, t, i) {
      var s = e.topic(),
        n = b.eventQueues[s];
      return Promise.all([
        e.value("testExponentialBackoff"),
        e.value("metricsUrl"),
        e.disabled(),
        e.value("postFrequency"),
      ]).then(function (a) {
        var o = a[0],
          l = a[1],
          u = a[2],
          d = a[3];
        if (n && l && !u && !o) {
          if (!(n.retryAttempts && i)) {
            (b.resetTopicPostInterval(s), b.setTopicPostInterval(e, d));
            var p;
            switch (t) {
              case L.SEND_METHOD.IMAGE:
                p = b.sendEventsViaImage(e);
                break;
              case L.SEND_METHOD.BEACON:
                p = b.sendEventsViaBeacon(e);
                break;
              case L.SEND_METHOD.AJAX_SYNCHRONOUS:
                p = b.sendEventsViaAjax(e, !1);
                break;
              case L.SEND_METHOD.AJAX:
              default:
                p = b.sendEventsViaAjax(e, !0);
                break;
            }
            return p;
          }
        } else if (o) return b.scheduleNextTopicRetryAttempt(e);
      });
    },
    sendEventsViaImage: function (e) {
      var t = e.topic(),
        i = Promise.resolve();
      return (
        b.eventQueues[t] &&
          (i = si(e, function (s) {
            var n = s.metricsUrl,
              a = n.indexOf("?") == -1 ? "?" : "&",
              o = n + a + "responseType=image",
              l = b.eventQueues[t][L.EVENTS_KEY];
            (l &&
              l.length &&
              l.forEach(function (u) {
                var d = b.createQueryParams(u);
                if (d) {
                  var p = o + "&" + d,
                    y = new Image(),
                    g = b.eventQueues[t][L.PROPERTIES_KEY];
                  (g && g.anonymous && y.setAttribute("crossOrigin", "anonymous"), (y.src = p));
                }
              }),
              b.resetTopicQueue(t));
          })),
        i
      );
    },
    createQueryParams: function (e) {
      var t,
        i,
        s = "";
      return (
        Object.keys(e).forEach(function (n, a, o) {
          ((t = e[n]),
            (i = f.isString(t) ? t : JSON.stringify(t)),
            (s += n + "=" + encodeURIComponent(i)),
            a < o.length - 1 && (s += "&"));
        }),
        s.length ? s : null
      );
    },
    sendEventsViaAjax: function (e, t) {
      var i = Promise.resolve(),
        s = e.topic();
      if (b.eventQueues[s] && b.eventQueues[s][L.EVENTS_KEY]) {
        var n = b.eventQueues[s][L.EVENTS_KEY],
          a = fi(n);
        (b.resetTopicQueue(s),
          a &&
            (i = si(e, function (o) {
              var l = o.metricsUrl,
                u = o.requestTimeout,
                d = function () {
                  b.resetTopicRetryAttempts(s);
                },
                p = function (w, M) {
                  if (M >= 400 && M < 500) d();
                  else {
                    var $ = b.eventQueues[s][L.EVENTS_KEY] || [];
                    ((b.eventQueues[s][L.EVENTS_KEY] = n.concat($)), b.scheduleNextTopicRetryAttempt(e));
                  }
                },
                y = b.eventQueues[s][L.PROPERTIES_KEY] || {},
                g = { async: t, timeout: u };
              (y.anonymous && (g.withCredentials = !1), Ea.makeAjaxRequest(l, "POST", a, d, p, g));
            })));
      }
      return i;
    },
    sendEventsViaBeacon: function (e) {
      var t = Promise.resolve();
      if (!f.isFunction(navigator.sendBeacon))
        return (It().error("navigator.sendBeacon() is not available in the environment"), t);
      var i = e.topic(),
        s = b.eventQueues[i];
      if (s) {
        var n = s[L.PROPERTIES_KEY];
        if (n && n.anonymous)
          X_()
            ? (t = b.sendEventsViaFetch(e, { keepalive: !0 }))
            : Ou()
              ? (t = b.sendEventsViaAjax(e, !1))
              : (t = b.sendEventsViaImage(e));
        else {
          var a = fi(s[L.EVENTS_KEY]);
          a &&
            (b.resetTopicQueue(i),
            (t = si(e, function (o) {
              var l = o.metricsUrl,
                u = Tr.globalScope().Blob,
                d = new u([a], { type: "application/json" }),
                p = navigator.sendBeacon(l, d);
              p || It().error("navigator.sendBeacon() was unable to queue the data for transfer");
            })));
        }
      }
      return t;
    },
    sendEventsViaFetch: function (e, t) {
      var i = Promise.resolve(),
        s = e.topic(),
        n = b.eventQueues[s],
        a = f.isDefinedNonNull(t) ? t.keepalive : null;
      if (f.isDefinedNonNull(n)) {
        var o = fi(n[L.EVENTS_KEY]);
        if (o) {
          b.resetTopicQueue(s);
          var l = n[L.PROPERTIES_KEY] || {};
          i = si(e, function (u) {
            var d = u.metricsUrl;
            f.globalScope().fetch(d, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: o,
              credentials: l.anonymous === !0 ? "omit" : "same-origin",
              keepalive: f.isDefinedNonNull(a) ? a : !0,
            });
          });
        }
      }
      return i;
    },
    setTopicPostInterval: function (e, t) {
      var i = e.topic();
      b.eventQueues[i] &&
        t &&
        this.postIntervalEnabled &&
        (this.resetTopicPostInterval(i),
        (b.eventQueues[i].postIntervalToken = Tr.globalScope().setInterval(function () {
          (It().debug("MetricsKit: triggering postIntervalTimer for " + i + " at " + new Date().toString()),
            b.sendEventsForTopicConfig(e));
        }, t)));
    },
    resetTopicPostInterval: function (e) {
      b.eventQueues[e] &&
        (Tr.globalScope().clearInterval(b.eventQueues[e].postIntervalToken),
        (b.eventQueues[e].postIntervalToken = null));
    },
    resetQueuePostIntervals: function () {
      for (var e in b.eventQueues) b.resetTopicPostInterval(e);
    },
    setQueuePostIntervals: function () {
      var e = [],
        t = function (o) {
          return function (l) {
            b.setTopicPostInterval(o, l);
          };
        };
      for (var i in b.eventQueues) {
        var s = b.eventQueues[i][L.EVENTS_KEY],
          n = b.eventQueues[i].topicConfig;
        if (s && s.length && n) {
          var a = n.value("postFrequency").then(t(n));
          e.push(a);
        }
      }
      return Promise.all(e);
    },
    objectContainsValue: function (e, t) {
      var i = !1;
      for (var s in e) {
        var n = e[s];
        if (e.hasOwnProperty(s) && !f.isFunction(n) && n === t) {
          i = !0;
          break;
        }
      }
      return i;
    },
    setProperties: function (e, t) {
      ((b.eventQueues = b.eventQueues || {}),
        (b.eventQueues[e] = b.eventQueues[e] || {}),
        (b.eventQueues[e][L.PROPERTIES_KEY] = t));
    },
  };
function hi() {
  return b;
}
function fi(r) {
  var e = null;
  if (r && r.length) {
    var t = {};
    ((t.deliveryVersion = L.EVENT_DELIVERY_VERSION), (t.postTime = Date.now()), (t[L.EVENTS_KEY] = r));
    try {
      e = JSON.stringify(t);
    } catch (i) {
      It().error("Error stringifying events as JSON: " + i);
    }
  }
  return e;
}
function J_(r) {
  return fi([r]);
}
function Du(r) {
  return r.value("metricsUrl").then(function (e) {
    var t = e + "/" + L.URL_DELIVERY_VERSION + "/";
    return t + r.topic();
  });
}
function si(r, e) {
  if (!f.isFunction(e)) {
    It().warn("No callback function is provided for resolveTopicConfigWithCallback()");
    return;
  }
  if (f.isString(r.metricsUrl) && !f.isFunction(r.value)) {
    var t = f.isFunction(r.topic) ? r.topic() : r.topic,
      i = r.metricsUrl + "/" + L.URL_DELIVERY_VERSION + "/" + t,
      s = r.requestTimeout || L.DEFAULT_REQUEST_TIMEOUT,
      n = r.postFrequency;
    return e({ requestTimeout: Math.min(s, n), metricsUrl: i });
  } else
    return Promise.all([r.value("requestTimeout"), r.value("postFrequency"), Du(r)]).then(function (a) {
      var o = a[0] || L.DEFAULT_REQUEST_TIMEOUT,
        l = a[1],
        u = a[2];
      return e({ requestTimeout: Math.min(o, l), metricsUrl: u });
    });
}
function Z_(r) {
  return Promise.all([r.value("requestTimeout"), r.value("postFrequency")]).then(function (e) {
    var t = e[0] || L.DEFAULT_REQUEST_TIMEOUT,
      i = e[1];
    return Math.min(t, i);
  });
}
function eT(r, e, t) {
  var i = r.topic();
  return r.disabled().then(function (s) {
    if (!s)
      return r
        .value("postFrequency")
        .then(function (n) {
          return (
            n === 0 && (t = !0),
            b.enqueueEvent(r, e).then(function () {
              return n;
            })
          );
        })
        .then(function (n) {
          if (t) return b.sendEvents(L.SEND_METHOD.AJAX, !0);
          !b.eventQueues[i].postIntervalToken && b.postIntervalEnabled && b.setTopicPostInterval(r, n);
        });
  });
}
function tT(r, e) {
  return r
    ? e === Ri.BEACON_SYNCHRONOUS
      ? rT()
      : f.isString(e) && b.objectContainsValue(Ri, e)
        ? b.sendEvents(e, !0)
        : f.isFunction(navigator.sendBeacon)
          ? b.sendEvents(L.SEND_METHOD.BEACON, !0)
          : Ou()
            ? b.sendEvents(L.SEND_METHOD.AJAX_SYNCHRONOUS, !0)
            : b.sendEvents(L.SEND_METHOD.IMAGE, !0)
    : b.sendEvents(L.SEND_METHOD.AJAX, !0);
}
function rT() {
  for (var r in b.eventQueues) {
    var e = b.eventQueues[r],
      t = e.flushConfig,
      i = f.extend({}, t, {
        _topic: r,
        topic: function () {
          return this._topic;
        },
      });
    b.sendEventsViaBeacon(i);
  }
}
var Re = function (e) {
  $e.apply(this, arguments);
};
Re.prototype = Object.create($e.prototype);
Re.prototype.constructor = Re;
Re.prototype._utResetQueue = function () {
  for (var e in hi().eventQueues) hi().resetTopicPostInterval(e);
  hi().eventQueues = {};
};
Re.prototype._record = function (e, t, i) {
  return eT(e, t, i);
};
Re.prototype.SEND_METHOD = Ri;
Re.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
Re.prototype.flushUnreportedEvents = function (e, t) {
  return tT.apply(null, arguments);
};
Re.prototype.setProperties = function (e, t) {
  (Object.getPrototypeOf(Re.prototype).setProperties.call(this, e, t), hi().setProperties(e, t));
};
Re.prototype.cleanup = function () {
  (Object.getPrototypeOf(Re.prototype).cleanup.call(this), this._utResetQueue());
};
var Cr = function (e) {
  $e.apply(this, arguments);
};
Cr.prototype = Object.create($e.prototype);
Cr.prototype.constructor = Cr;
Cr.prototype._record = function (e, t) {
  var i = J_(t);
  if (i)
    return Promise.all([Du(e), Z_(e)]).then(
      function (s) {
        var n = s[0],
          a = s[1],
          o = { timeout: a };
        (this._topicPropsCache[e.topic()] && this._topicPropsCache[e.topic()].anonymous && (o.withCredentials = !1),
          Ea.makeAjaxRequest(n, "POST", i, null, null, o));
      }.bind(this),
    );
};
var iT = Kr("mt-event-queue");
function N(r) {
  this._config = r;
}
N.prototype._document = function () {
  if (typeof document < "u") return document;
  throw "metricskit-delegates-html.environment HTML delegate 'document' object not found";
};
N.prototype._window = function () {
  if (typeof window < "u") return window;
  throw "metricskit-delegates-html.environment HTML delegate 'window' object not found";
};
N.prototype.browser = function () {
  var e = this._window().navigator.userAgent;
  return !f.isDefinedNonNull(this._config) || !f.isDefinedNonNullNonEmpty(e)
    ? null
    : this._config.value("browserMaps").then(function (t) {
        if (!f.isDefinedNonNull(t)) return null;
        for (var i = t.specifiedBrowsers || [], s = t.browserMap || {}, n = null, a = 0; a < i.length; a++) {
          var o = i[a];
          if (e.indexOf(o) > -1) {
            n = o;
            break;
          }
        }
        if (!f.isDefinedNonNull(n)) {
          var l = e.match(/Mozilla\/5.0 \((.*?)\)(\s|$)((.*?)\/(.*?)(\s)\(.*\))?(.*?)\/(.*?)(\s|$)/);
          f.isDefinedNonNullNonEmpty(l) && l.length >= 8 && (n = l[7]);
        }
        f.isDefinedNonNull(n) ? (n = n.trim()) : (n = "unknown");
        var u = s[n] || n;
        return u;
      });
};
N.prototype.cookie = function () {
  return this._window().document.cookie;
};
N.prototype.pageUrl = function () {
  return this._window().location.href;
};
N.prototype.parentPageUrl = function () {
  var e = this._window(),
    t = e.parent,
    i;
  if (t !== e)
    try {
      i = t.location.href;
    } catch (s) {
      i = this._document().referrer;
    }
  return i;
};
N.prototype.pixelRatio = function () {
  return this._window().devicePixelRatio;
};
N.prototype.screenHeight = function () {
  return this._window().screen.height;
};
N.prototype.screenWidth = function () {
  return this._window().screen.width;
};
N.prototype.userAgent = function () {
  return this._window().navigator.userAgent;
};
N.prototype.windowInnerHeight = function () {
  return this._window().innerHeight;
};
N.prototype.windowInnerWidth = function () {
  return this._window().innerWidth;
};
N.prototype.windowOuterHeight = function () {
  return this._window().outerHeight;
};
N.prototype.windowOuterWidth = function () {
  return this._window().outerWidth;
};
N.prototype.timeOriginOffset = function () {
  var e = null,
    t = this._window().performance;
  return (t && t.timing && (e = t.timing.navigationStart), e);
};
N.prototype.app = function () {};
N.prototype.appVersion = function () {};
N.prototype.capacityData = function () {};
N.prototype.capacityDataAvailable = function () {};
N.prototype.capacityDisk = function () {};
N.prototype.capacitySystem = function () {};
N.prototype.capacitySystemAvailable = function () {};
N.prototype.connectionType = function () {};
N.prototype.dsId = function () {};
N.prototype.hardwareBrand = function () {};
N.prototype.hardwareFamily = function () {};
N.prototype.hardwareModel = function () {};
N.prototype.hostApp = function () {};
N.prototype.hostAppVersion = function () {};
N.prototype.os = function () {};
N.prototype.osBuildNumber = function () {};
N.prototype.osLanguages = function () {};
N.prototype.osVersion = function () {};
N.prototype.resourceRevNum = function () {};
N.prototype.storeFrontCountryCode = function () {};
N.prototype.storeFrontHeader = function () {};
N.prototype.storeFrontLanguage = function () {};
N.prototype.userType = function () {};
function Ve(r) {
  (Kt.call(this), (this._proxyEventRecorder = r), (this.SEND_METHOD = r.SEND_METHOD));
}
Ve.prototype = Object.create(Kt.prototype);
Ve.prototype.constructor = Ve;
Ve.prototype._recordEvent = function (e, t) {
  return this._proxyEventRecorder.recordEvent.apply(this._proxyEventRecorder, arguments);
};
Ve.prototype.flushUnreportedEvents = function (e, t) {
  var i = this,
    s = Array.prototype.slice.call(arguments);
  return f.isDefinedNonNull(this._proxyEventRecorder.SEND_METHOD) &&
    t === this._proxyEventRecorder.SEND_METHOD.BEACON_SYNCHRONOUS
    ? this._proxyEventRecorder.flushUnreportedEvents.apply(this._proxyEventRecorder, arguments)
    : this._operationPromiseChain.then(function () {
        return (
          (i._operationPromiseChain = Promise.resolve()),
          i._proxyEventRecorder.flushUnreportedEvents.apply(i._proxyEventRecorder, s)
        );
      });
};
Ve.prototype._flushUnreportedEvents = function () {
  return this._proxyEventRecorder.flushUnreportedEvents.apply(this._proxyEventRecorder, arguments);
};
Ve.prototype.sendMethod = function () {
  return this._proxyEventRecorder.sendMethod.apply(this._proxyEventRecorder, arguments);
};
Ve.prototype.setProperties = function (e, t) {
  return this._proxyEventRecorder.setProperties.apply(this._proxyEventRecorder, arguments);
};
Ve.prototype.cleanup = function () {
  return this._proxyEventRecorder.cleanup.apply(this._proxyEventRecorder, arguments);
};
var nt = function (e, t) {
  var i = this.getOrCreateConfig(e);
  (Be.call(this, e, { environment: new N(i), eventRecorder: new Ve(new Re(i)) }),
    (this.immediateEventRecorder = new Ve(new Cr(i))),
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
nt.prototype = Object.create(Be.prototype);
nt.prototype.constructor = nt;
nt.prototype.setEnvironment = function (r) {
  return (Tr.setDelegate(r), Be.prototype.setEnvironment.call(this, r));
};
nt.prototype.setNetwork = function (r) {
  return (r && ((this.network = r), Ea.setDelegate(r)), this);
};
nt.prototype.setLogger = function (r) {
  return (r && ((this.logger = r), iT.setDelegate(r)), this);
};
nt.prototype.setImmediateEventRecorder = function (r) {
  if (r) {
    var e = Object.create(this.immediateEventRecorder);
    (Object.assign(e, r), (this.immediateEventRecorder = e));
  }
  return this;
};
nt.prototype.configSources = function () {
  var e = this;
  return new Promise(function (t, i) {
    var s = function (l) {
        try {
          var u = JSON.parse(l);
          (e.config.setCachedSource(u), e.config.setServiceSource(u), t(u));
        } catch (d) {
          n(d);
        }
      },
      n = function (l) {
        (e.config.setCachedSource(e.config.cachedSource()), i(l));
      },
      a = Promise.resolve(e.config.configUrl());
    a.then(function (o) {
      I_.exponentialBackoff(e.config.network.makeAjaxRequest.bind(e.config.network, o, "GET", null), s, n);
    }).catch(n);
  });
};
var Vr = function () {};
Vr.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
Vr.prototype.localStorageObject = ee.localStorageObject;
Vr.prototype.sessionStorageObject = ee.sessionStorageObject;
Vr.prototype.platformIdentifier = function (e, t, i) {};
var sT = function () {
  ((this.environment = new Vr()), (this.logger = Kr("mt-client-constraints")));
};
function Tn(r, e, t, i) {
  if (!f.isDefined(r) || !f.isDefinedNonNullNonEmpty(e) || !f.isFunction(i)) return r;
  var s = e.split(".");
  return En(r, s, null, [], null, t, i);
}
function En(r, e, t, i, s, n, a) {
  if (f.isFunction(r)) return s || r;
  if ((i.push(t), e.length === 0)) return (a(r, t, i.slice(1).join("."), s), s || r);
  if (!f.isDefined(r)) return s || r;
  var o = n ? r : {},
    l = e.shift();
  if (l.length > 2 && l.indexOf("[]") === l.length - 2) {
    ((l = l.slice(0, -2)), i.push(l), f.extend(o, r));
    var u = o[l];
    if (f.isDefinedNonNull(u)) {
      var d = u.map(function (y, g) {
        var k = n ? u : u.slice();
        return (En(y, e.slice(), g, i, k, n, a), i.pop(), k[g]);
      });
      o[l] = d;
    }
  } else {
    var p = r[l];
    (f.extend(o, r), (o = En(p, e, l, i, o, n, a)));
  }
  return (i.pop(), s ? ((s[t] = o), s) : o);
}
var lc = {
  all: {
    initMatchValue: !0,
    accumulateMatchResult: function (r, e) {
      return r && e;
    },
  },
  any: {
    initMatchValue: !1,
    accumulateMatchResult: function (r, e) {
      return r || e;
    },
  },
};
function nT(r) {
  var e = lc[r];
  return (f.isDefinedNonNull(e) || (e = lc.all), e);
}
function aT(r, e, t) {
  if (!f.isObject(e) || !f.isObject(t)) return !1;
  var i = t.matchType,
    s = t.matches;
  if (!f.isDefinedNonNullNonEmpty(s)) return !1;
  var n = nT(i),
    a = n.initMatchValue;
  return (
    Tn(e, r, !1, function (o, l, u, d) {
      var p = Object.keys(s).every(function (y) {
        var g = s[y];
        return f.isDefinedNonNull(Qt[y]) ? Qt[y](l, d, g) : !1;
      });
      a = n.accumulateMatchResult(a, p);
    }),
    !!a
  );
}
function oT(r, e) {
  return !!f.isObject(e) && e.hasOwnProperty(r) && f.isDefinedNonNullNonEmpty(e[r]);
}
function cT(r, e, t) {
  if (!f.isObject(e)) return !1;
  var i = e[r];
  return e.hasOwnProperty(r) && t.indexOf(i) > -1;
}
function lT(r, e, t) {
  if (!f.isObject(e) || !f.isArray(t)) return !1;
  var i = e[r];
  return e.hasOwnProperty(r) && t.indexOf(i) === -1;
}
var Qt = { nonEmpty: oT, valueMatches: cT, nonValueMatches: lT, nestedFieldMatches: aT },
  Ci = { OVERRIDE_FIELD_VALUE: "overrideFieldValue" },
  Sa = function () {};
Sa.prototype.constrainedValue = function (e, t, i) {
  var s = e && e.hasOwnProperty(i) ? e[i] : null;
  return this.applyConstraintRules(s, t);
};
Sa.prototype.applyConstraintRules = function (e, t) {
  var i = e;
  if (t) {
    var s = t.denylisted || t.blacklisted;
    s ? (i = null) : t.hasOwnProperty(Ci.OVERRIDE_FIELD_VALUE) && (i = t.overrideFieldValue);
  }
  return i;
};
var uT = we.exceptionString,
  De = function (e) {
    this._constraintsInstance = e;
  };
De.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
De.prototype.constrainedValue = function (e, t, i, s) {
  throw uT("field_actions.Base", "constrainedValue");
};
De.prototype.performAction = function (e, t, i, s) {
  return (f.isDefinedNonNull(s) && !f.isEmptyObject(s) && (e = this.constrainedValue(e, s, i, t)), e);
};
function Nu(r) {
  r = r || "";
  var e = Lu(r).split("/"),
    t,
    i,
    s;
  return (
    r.indexOf("//") === -1 ? (t = e[0]) : (t = e[2]), (i = t.substring(t.indexOf("@") + 1)), (s = i.split(":")[0]), s
  );
}
function dT(r) {
  var e = Nu(r).split("."),
    t = e[e.length - 1],
    i = e[e.length - 2],
    s = 2;
  return (t && t.length === 2 && i && (i.length === 2 || i in hT()) && (s = 3), e.slice(-1 * s).join("."));
}
function hT() {
  var r = { com: !0, org: !0, net: !0, edu: !0, gov: !0 };
  return r;
}
function Lu(r, e) {
  var t = r || "",
    i = t.split("?"),
    s = i[0],
    n = fT(i[1]).split("&"),
    a = n
      .filter(function (o) {
        var l = o.split("="),
          u = l[0],
          d = l[1];
        return f.isArray(e)
          ? e.indexOf(u) !== -1
          : f.isObject(e)
            ? f.isObject(e[u]) && f.isArray(e[u].allowedValues) && e[u].allowedValues.indexOf(d) !== -1
            : !1;
      })
      .join("&");
  return a.length > 0 ? s + "?" + a : s;
}
function fT(r) {
  var e = r || "";
  return e.split("#")[0];
}
function pT(r, e) {
  var t = r || "",
    i = e || [],
    s = i.reduce(function (n, a) {
      var o = new RegExp(a.searchPattern, a.flags),
        l = a.replaceVal;
      return n.replace(o, l);
    }, t);
  return s;
}
var Sn = "-",
  yT = "z";
function Mu(r) {
  if (!f.isDefinedNonNull(r) || !f.isInteger(r.idVersion)) return "0";
  var e = we.uuid(),
    t = r.generatedIdSeparator || yT,
    i = mT(r) + Sn + e || "",
    s = i
      .split(Sn)
      .map(function (n) {
        var a = parseInt(n, 16);
        return we.convertNumberToBaseAlphabet(a, we.base61Alphabet);
      })
      .join(t);
  return s;
}
function mT(r) {
  var e = [r.idVersion];
  return (
    r.time && e.push(r.time),
    e
      .map(function (t) {
        return t.toString(16);
      })
      .join(Sn)
  );
}
function Uu(r, e, t, i) {
  var s = this.storageKey(i, t, e),
    n = this._constraintsInstance.system.environment,
    a = ee.objectFromStorage(n.localStorageObject(), s) || {};
  return (
    (a.value = this.idString(a, e)),
    this.rulesHaveLifespan(e) &&
      (!f.isNumber(a.expirationTime) || this.timeExpired(a.expirationTime)) &&
      (a.expirationTime = this.expirationTime(e.lifespan)),
    ee.saveObjectToStorage(n.localStorageObject(), s, a),
    (r = a.value),
    r
  );
}
var uc = {};
function gT(r, e, t, i) {
  var s = this.storageKey(i, t, e),
    n = uc[s];
  return (n || ((n = Uu.apply(this, arguments)), (uc[s] = n)), n);
}
var Ia = "_",
  vT = "mtId",
  fe = function () {
    De.apply(this, arguments);
  };
fe.prototype = Object.create(De.prototype);
fe.prototype.constructor = fe;
fe.prototype.SCOPE_STRATEGIES = { ALL: "all", MAIN_DOMAIN: "mainDomain" };
fe.prototype.rulesHaveLifespan = function (e) {
  return ((e = e || {}), f.isNumber(e.lifespan));
};
fe.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
fe.prototype.storageKey = function (e, t, i) {
  var s = this.scope(t, i);
  return this.storageKeyPrefix(i, e) + (s ? Ia + s : "");
};
fe.prototype.storageKeyPrefix = function (e, t) {
  return e && f.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : vT + Ia + t;
};
fe.prototype.scope = function (e, t) {
  var i = "";
  if (t && (t.namespace && (i += t.namespace), t.scopeStrategy)) {
    var s;
    switch (t.scopeStrategy) {
      case this.SCOPE_STRATEGIES.MAIN_DOMAIN:
        var n = t.scopeFieldName;
        s = dT(e[n]) || "unknownDomain";
        break;
      case this.SCOPE_STRATEGIES.ALL:
      default:
        s = this.SCOPE_STRATEGIES.ALL;
        break;
    }
    (i.length && (i += Ia), (i += s));
  }
  return i;
};
fe.prototype.idString = function (e, t) {
  var i = e ? e.value : null,
    s = i;
  return ((!i || (f.isNumber(e.expirationTime) && this.timeExpired(e.expirationTime))) && (s = this.generateId(t)), s);
};
fe.prototype.generateId = function (e) {
  return (
    (e = e || {}),
    Mu({
      idVersion: this.generatedIdVersion(),
      time: this.expirationTime(e.lifespan),
      generatedIdSeparator: this.generatedIdSeparator(e.tokenSeparator),
    })
  );
};
fe.prototype.generatedIdVersion = function () {
  return 4;
};
fe.prototype.idTokenSeparator = function () {
  return "-";
};
fe.prototype.generatedIdSeparator = function (e) {
  return e || "z";
};
fe.prototype.timeExpired = function (e) {
  return e <= Date.now();
};
fe.prototype.constrainedValue = function (e, t, i, s) {
  return (
    i &&
      t &&
      !f.isEmptyObject(t) &&
      (t.persistIdForSession === !0 ? (e = gT.apply(this, arguments)) : (e = Uu.apply(this, arguments))),
    e
  );
};
var xu = function (e, t) {
  ((this._base = e),
    (this._idAction = new fe(t)),
    this._idAction.setDelegate({
      storageKey: function (s, n, a) {
        return this.storageKeyPrefix() + "_" + this.scope(n, a);
      }.bind(this._idAction),
      storageKeyPrefix: function () {
        return "mtClientId";
      },
    }));
};
xu.prototype.constrainedValue = function (e, t) {
  var i = t;
  t &&
    f.isNumber(t.expirationPeriod) &&
    ((i = f.extend({}, t)), (i.lifespan = i.expirationPeriod), delete i.expirationPeriod);
  var s = e ? e.clientId : null,
    n = this._idAction.performAction(s, "clientId", e, i);
  return this._base.applyConstraintRules(n, t);
};
var Dt = function () {
  De.apply(this, arguments);
};
Dt.prototype = Object.create(De.prototype);
Dt.prototype.constructor = Dt;
Dt.prototype.SCOPES = {
  HOSTNAME: "hostname",
  FULL: "full",
  FULL_WITHOUT_PARAMS: "fullWithoutParams",
  FULL_WITH_REPLACEMENTS: "fullWithReplacements",
};
Dt.prototype.constrainedValue = function (e, t) {
  if (e && t && t.scope)
    switch (t.scope) {
      case this.SCOPES.HOSTNAME:
        e = Nu(e);
        break;
      case this.SCOPES.FULL_WITHOUT_PARAMS:
        e = Lu(e, t.allowedParams);
        break;
      case this.SCOPES.FULL_WITH_REPLACEMENTS:
        e = pT(e, t.replacements);
        break;
      case this.SCOPES.FULL:
    }
  return e;
};
var Fu = function (e) {
  ((this._base = e), (this._urlAction = new Dt()));
};
Fu.prototype.constrainedValue = function (e, t) {
  var i = e ? e.parentPageUrl : null,
    s = this._urlAction.performAction(i, "parentPageUrl", e, t);
  return this._base.applyConstraintRules(s, t);
};
var bT = function (r) {
    ((this.base = new Sa()), (this.clientId = new xu(this.base, r)), (this.parentPageUrl = new Fu(this.base)));
  },
  ka = function (e) {
    this._fieldHandlers = new bT(e);
  };
ka.prototype.applyConstraints = function (e, t) {
  return (t && t.fieldConstraints && (e = this.applyFieldConstraints(e, t.fieldConstraints)), e);
};
ka.prototype.applyFieldConstraints = function (e, t) {
  if (t) {
    var i = {},
      s,
      n,
      a;
    for (a in t)
      ((n = t[a]),
        (e.hasOwnProperty(a) || n.generateValue === !0 || n.hasOwnProperty(Ci.OVERRIDE_FIELD_VALUE)) &&
          (a in this._fieldHandlers
            ? (s = this._fieldHandlers[a].constrainedValue(e, n))
            : (s = this._fieldHandlers.base.constrainedValue(e, n, a)),
          (i[a] = s)));
    for (a in i) e[a] = i[a];
    e = Qi.mergeAndCleanEventFields(e);
  }
  return e;
};
function Ku(r, e, t, i) {
  var s = r || {};
  if (
    ((i =
      i ||
      function (u, d, p) {
        return u[p] || {};
      }),
    e && e[t])
  ) {
    var n,
      a,
      o = s[t] || {};
    s[t] = o;
    for (n in e[t]) {
      var l = i(o, e[t], n);
      o[n] = l;
      for (a in e[t][n]) l[a] = e[t][n][a];
    }
  }
  return s;
}
var or = function (e) {
  this.treatment = new ka(e);
};
or.prototype.constraintsForEvent = function (e, t, i) {
  if (!t) return Promise.resolve(null);
  var s = this;
  return Promise.resolve(t.constraintProfile(i))
    .then(function (n) {
      if (!n) return null;
      var a = "constraints.profiles." + n;
      return t.value(a, i);
    })
    .then(function (n) {
      var a = null;
      return (
        n &&
          n.precedenceOrderedRules &&
          (a = n.precedenceOrderedRules.reduce(function (o, l) {
            return (s.eventMatchesRule(e, l) && (o = s.updateRules(o, l)), o);
          }, {})),
        a
      );
    });
};
or.prototype.eventMatchesRule = function (e, t) {
  var i = !1;
  return (
    e &&
      t.filters &&
      (t.filters === "any"
        ? (i = !0)
        : f.isObject(t.filters) &&
          (i =
            this.eventMatchesNonEmptyFields(e, t.filters.nonEmptyFields) &&
            this.eventMatchesFieldValues(e, t.filters.valueMatches))),
    i
  );
};
or.prototype.eventMatchesNonEmptyFields = function (e, t) {
  var i = !1;
  return (
    e &&
      (!t || !f.isArray(t)
        ? (i = !0)
        : (i = t.every(function (s) {
            return Qt.nonEmpty(s, e);
          }))),
    i
  );
};
or.prototype.eventMatchesFieldValues = function (e, t) {
  var i = !1;
  return (
    e &&
      (!t || !f.isObject(t) || f.isEmptyObject(t)
        ? (i = !0)
        : (i = Object.keys(t).every(function (s) {
            var n = t[s];
            return Qt.valueMatches(s, e, n);
          }))),
    i
  );
};
or.prototype.updateRules = function (e, t) {
  return Ku(e, t, "fieldConstraints");
};
var Vu = function () {};
Vu.prototype.performAction = function (e, t, i) {
  return i !== !0 ? e : null;
};
var Bu = function () {};
Bu.prototype.performAction = function (e, t, i) {
  return !e || !f.isArray(i) || f.isEmptyArray(i)
    ? e
    : ((e = f.extend({}, e)),
      i.forEach(function (s) {
        delete e[s];
      }),
      f.isEmptyObject(e) ? null : e);
};
var $u = function () {};
$u.prototype.performAction = function (e, t, i) {
  if (!e || !f.isArray(i) || f.isEmptyArray(i)) return e;
  var s = {};
  return (
    i.forEach(function (n) {
      f.isDefinedNonNull(e[n]) && (s[n] = e[n]);
    }),
    f.isEmptyObject(s) ? null : s
  );
};
var _T = "mtSessionization",
  Hu = "_",
  TT = "-",
  ks = "sessionId",
  Ps = "sessionStartTime",
  ut = function (e) {
    this._constraintsInstance = e;
  };
ut.prototype.performAction = function (e, t, i) {
  if (!f.isDefinedNonNull(e) || !f.isDefined(i)) return e;
  if (f.isDefinedNonNull(i.sessionResetOptions)) {
    if (!f.isDefinedNonNull(i.sessionResetOptions.filters))
      throw new SyntaxError('sessionizationFields Action: unable to find the required config "filters"');
    var s = this._resetSession(e, t, i);
    if (s !== !0) return e;
  }
  e = f.extend({}, e);
  var n = this._storageKey(e, i),
    a = this._constraintsInstance.system.environment,
    o = ee.objectFromStorage(a.localStorageObject(), n) || {};
  (this._shouldCreateNewSession(t, o, i) &&
    ((o.sessionId = this._generateSessionId(i)),
    (o.rawFirstEventTimeInSession = t.eventTime),
    (o.firstEventTimeInSession = e.eventTime),
    (o.eventCount = 0)),
    (o.rawLastEventTimeInSession = t.eventTime),
    (o.lastEventTimeInSession = e.eventTime),
    (o.eventCount += 1),
    ee.saveObjectToStorage(a.localStorageObject(), n, o));
  var l = this._getSessionFieldNames(i);
  return ((e[l.sessionId] = o.sessionId), i.sessionStartTime && (e[l.sessionStartTime] = o.firstEventTimeInSession), e);
};
ut.prototype._storageKey = function (e, t) {
  var i = this._scope(e, t);
  return this._storageKeyPrefix(t) + (f.isEmptyString(i) ? "" : Hu + i);
};
ut.prototype._storageKeyPrefix = function (e) {
  return e && f.isString(e.storageKeyPrefix) && e.storageKeyPrefix.length > 0 ? e.storageKeyPrefix : _T;
};
ut.prototype._scope = function (e, t) {
  var i = "";
  return (
    f.isDefined(t) &&
      (f.isString(t.namespace) && (i += t.namespace),
      f.isString(t.scopeFieldName) &&
        f.isDefinedNonNull(e[t.scopeFieldName]) &&
        ((i += Hu), (i += e[t.scopeFieldName].toString()))),
    i
  );
};
ut.prototype._generateSessionId = function (e) {
  return Mu({ idVersion: 1, time: Date.now(), idTokenSeparator: TT, generatedIdSeparator: e.tokenSeparator });
};
ut.prototype._shouldCreateNewSession = function (e, t, i) {
  var s = !1;
  return (
    (s |= !f.isDefinedNonNull(t.sessionId)),
    f.isDefinedNonNull(i.endSessionConditions) &&
      (f.isDefinedNonNull(i.endSessionConditions.lifespan) &&
        (s |= e.eventTime >= t.rawFirstEventTimeInSession + i.endSessionConditions.lifespan),
      f.isDefinedNonNull(i.endSessionConditions.idleSpan) &&
        (s |= e.eventTime >= t.rawLastEventTimeInSession + i.endSessionConditions.idleSpan),
      f.isDefinedNonNull(i.endSessionConditions.eventCount) &&
        (s |= t.eventCount >= i.endSessionConditions.eventCount)),
    s
  );
};
ut.prototype._resetSession = function (e, t, i) {
  var s = i.sessionResetOptions,
    n = this._constraintsInstance._constraintGenerator;
  if (f.isDefinedNonNull(n) && f.isDefinedNonNull(n.eventMatchesTreatment) && n.eventMatchesTreatment(t, s)) {
    var a = this._storageKey(e, i),
      o = this._constraintsInstance.system.environment;
    return (ee.saveObjectToStorage(o.localStorageObject(), a, void 0), s.newSessionAfterReset);
  }
  return !0;
};
ut.prototype._getSessionFieldNames = function (e) {
  var t = { sessionId: ks, sessionStartTime: Ps };
  return (
    f.isDefinedNonNull(e.sessionFields) &&
      (f.isDefinedNonNullNonEmpty(e.sessionFields[ks]) && (t.sessionId = e.sessionFields[ks]),
      f.isDefinedNonNullNonEmpty(e.sessionFields[Ps]) && (t.sessionStartTime = e.sessionFields[Ps])),
    t
  );
};
var Pa = function () {};
Pa.prototype.performAction = function (e, t, i) {
  if (!e || !i || !f.isString(i.timeReference) || !f.isNumber(i.bucketInterval) || !f.isArray(i.fields)) return e;
  var s = e[i.timeReference];
  if (!f.isNumber(s)) return e;
  var n = this._clampToBoundary(s, i.bucketInterval),
    a = n - s;
  return (
    (e[i.timeReference] = n),
    i.fields.forEach(function (o) {
      var l = e[o];
      f.isNumber(l) && (e[o] += a);
    }),
    e
  );
};
Pa.prototype._clampToBoundary = function (e, t) {
  var i = e % t,
    s = e - i,
    n = s + t;
  return i <= t / 2 ? s : n;
};
var pt = {
    blacklistedEventAction: "blacklisted",
    denylistedEventAction: "denylisted",
    blacklistedFieldsAction: "blacklistedFields",
    denylistedFieldsAction: "denylistedFields",
    whitelistedFieldsAction: "whitelistedFields",
    allowlistedFieldsAction: "allowlistedFields",
    sessionizationFieldsAction: "sessionizationFields",
    clampingEventAction: "clamping",
  },
  ju = function (e) {
    var t = new Vu(),
      i = new Bu(),
      s = new $u(),
      n = new ut(e),
      a = new Pa();
    ((this._actions = {}),
      (this._actions[pt.blacklistedEventAction] = t),
      (this._actions[pt.denylistedEventAction] = t),
      (this._actions[pt.blacklistedFieldsAction] = i),
      (this._actions[pt.denylistedFieldsAction] = i),
      (this._actions[pt.whitelistedFieldsAction] = s),
      (this._actions[pt.allowlistedFieldsAction] = s),
      (this._actions[pt.sessionizationFieldsAction] = n),
      (this._actions[pt.clampingEventAction] = a));
  };
ju.prototype.getAction = function (e) {
  return this._actions[e];
};
var Er = "start",
  ET = "value",
  ST = function (e, t) {
    var i = -1,
      s = i;
    if (!f.isDefinedNonNull(t) || e.length === 0 || (f.isDefinedNonNull(e[0]) && t < e[0][Er])) return i;
    if (e[e.length - 1][Er] < t) s = e.length - 1;
    else
      for (var n = 0; n < e.length; n++) {
        var a = e[n][Er];
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
  Or = function () {
    De.apply(this, arguments);
  };
Or.prototype = Object.create(De.prototype);
Or.prototype.constructor = Or;
Or.prototype.constrainedValue = function (e, t) {
  var i = t ? t.precision : 0,
    s = t ? t.buckets : null;
  if (f.isDefinedNonNullNonEmpty(s)) {
    s = s.slice().sort(function (o, l) {
      return o[Er] - l[Er];
    });
    var n = ST(s, e),
      a = s[n];
    f.isDefinedNonNull(a) && (e = a[ET]);
  } else f.isNumber(e) && f.isNumber(i) && i > 0 && (e = Math.floor(e / i) * i);
  return e;
};
var IT = "mt_serial_number",
  Oi = "exp",
  In = "sn",
  dt = function (e) {
    ((e = e || {}),
      (this._nextRotationTime = e.nextRotationTime || Number.POSITIVE_INFINITY),
      (this._storageKey = e.namespace || IT),
      (this._initialSerialNumber = e.initialSerialNumber || 0),
      (this._rotationPeriod = e.rotationPeriod || Number.POSITIVE_INFINITY));
  };
dt.prototype.setDelegate = function (e) {
  f.attachDelegate(this, e);
};
dt.prototype.localStorageObject = function () {
  return ee.localStorageObject();
};
dt.prototype.getNextSerialNumber = function (e) {
  var t = this._storageKey,
    i = this._getCurrentSerialNumberData(t),
    s = i[In];
  return (
    (e = f.isNumber(e) ? e : 1),
    (s = parseInt(s, 10)),
    isNaN(s) && (s = this._initialSerialNumber),
    (s = this._increaseSerialNumber(s, e)),
    (i[In] = s),
    ee.saveObjectToStorage(this.localStorageObject(), this._storageKey, i),
    s
  );
};
dt.prototype.resetSerialNumber = function () {
  var e = ee.objectFromStorage(this.localStorageObject(), this._storageKey);
  f.isDefinedNonNull(e) && this._resetSerialNumber(e[Oi]);
};
dt.prototype.getTime = function () {
  return Date.now();
};
dt.prototype._increaseSerialNumber = function (e, t) {
  return e + t;
};
dt.prototype._getCurrentSerialNumberData = function (e) {
  var t = ee.objectFromStorage(this.localStorageObject(), e),
    i,
    s;
  for (
    t
      ? ((i = t[Oi]), (i = parseInt(i, 10)), (t[Oi] = i = isNaN(i) ? this._nextRotationTime : i))
      : (i = this._nextRotationTime - this._rotationPeriod);
    !t || this.getTime() >= i;
  )
    ((i = s = i + this._rotationPeriod), (t = this._resetSerialNumber(s)));
  return t;
};
dt.prototype._resetSerialNumber = function (e) {
  var t = {};
  return (
    (t[Oi] = e),
    (t[In] = this._initialSerialNumber),
    ee.saveObjectToStorage(this.localStorageObject(), this._storageKey, t),
    t
  );
};
var dc = "_",
  kT = "mtTimestamp",
  bt = function () {
    (De.apply(this, arguments),
      (this._storage = this._constraintsInstance.system.environment.localStorageObject()),
      (this._precisionEndTimeCache = {}),
      (this._serialNumberGenerator = null));
  };
bt.prototype = Object.create(De.prototype);
bt.prototype.constructor = bt;
bt.prototype.constrainedValue = function (e, t, i, s) {
  var n = e;
  if (f.isNumber(e) && f.isObject(t) && f.isNumber(t.precision) && t.precision > 0) {
    var a = this._computePrecisionStartTime(e, t);
    ((this._serialNumberGenerator = new dt({
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
bt.prototype._computeTimestamp = function (e, t) {
  return e + t;
};
bt.prototype._persistentStorageKey = function (e, t) {
  var i = e.namespace ? dc + e.namespace : "";
  return (e.storageKeyPrefix || kT) + i + dc + t;
};
bt.prototype._computePrecisionStartTime = function (e, t) {
  var i = t.precision;
  return Math.floor(e / i) * i;
};
var As = "_",
  PT = "mtHash",
  AT = "salt",
  wT = 10,
  Xe = function () {
    De.apply(this, arguments);
  };
Xe.prototype = Object.create(De.prototype);
Xe.prototype.constructor = Xe;
function qu(r, e) {
  var t = r.namespace ? As + r.namespace : "";
  return (r.storageKeyPrefix || PT) + t + As + AT + As + e;
}
function RT() {
  for (var r = ""; r.length < wT;) r += we.randomHexCharacter();
  return r;
}
function CT(r, e) {
  return [r, e]
    .map(function (t) {
      var i = 0;
      if (f.isDefinedNonNullNonEmpty(t))
        for (var s = 0; s < t.length; s++) {
          var n = t.charCodeAt(s);
          i = (i << 5) - i + n;
        }
      var a = Math.abs(i);
      return ((a = parseInt(a, 16)), we.convertNumberToBaseAlphabet(a, we.base62Alphabet));
    })
    .join("");
}
Xe.prototype.constrainedValue = function (e, t, i, s) {
  return f.isDefinedNonNullNonEmpty(e)
    ? this._loadPlatformBasedSalt(t, s).then(function (n) {
        return CT(e, n);
      })
    : e;
};
Xe.prototype.timeExpired = function (e) {
  return e ? e <= Date.now() : !1;
};
Xe.prototype.expirationTime = function (e) {
  return e ? Date.now() + e : null;
};
Xe.prototype._loadPlatformBasedSalt = function (e, t) {
  var i = null,
    s = this,
    n = e.platformBasedSalt;
  return (
    f.isDefinedNonNull(n)
      ? ((i = this._constraintsInstance.system.environment.platformIdentifier(
          n.saltNamespace,
          "userid",
          n.crossDeviceSync || !0,
        )),
        f.isDefinedNonNull(i)
          ? (i = i.then(function (a) {
              return (
                f.isDefinedNonNull(a) ||
                  (s._constraintsInstance.system.logger.warn(
                    "Hash: platform returned an empty salt. Will use default salt generator to generate the salt.",
                  ),
                  (a = s._getSalt(e, t))),
                a
              );
            }))
          : (i = Promise.resolve(this._getSalt(e, t))))
      : (i = Promise.resolve(this._getSalt(e, t))),
    i
  );
};
Xe.prototype._getSalt = function (e, t) {
  var i = this._retrieveSaltFromStorage(e, t),
    s = e.saltLifespan;
  if (!f.isDefinedNonNull(i) || this.timeExpired(i.expirationTime)) {
    var n = this._constraintsInstance.system.environment.localStorageObject(),
      a = RT();
    ((i = { salt: a, expirationTime: this.expirationTime(s) }), ee.saveObjectToStorage(n, qu(e, t), i));
  }
  return i.salt;
};
Xe.prototype._retrieveSaltFromStorage = function (e, t) {
  var i = this._constraintsInstance.system.environment.localStorageObject(),
    s = ee.objectFromStorage(i, qu(e, t));
  return s;
};
var fr = { ID: "idGenerator", NUMBER: "numberDeres", TIME: "timeDeres", URL: "urlDeres", HASH: "hash" },
  Wu = function (e) {
    ((this.actions = {}),
      (this.actions[fr.ID] = new fe(e)),
      (this.actions[fr.NUMBER] = new Or(e)),
      (this.actions[fr.TIME] = new bt(e)),
      (this.actions[fr.URL] = new Dt(e)),
      (this.actions[fr.HASH] = new Xe(e)));
  };
Wu.prototype.getAction = function (e) {
  return this.actions[e];
};
var Yu = function (e) {
  ((this._eventActions = new ju(e)), (this._fieldActions = new Wu(e)));
};
Yu.prototype.applyConstraints = function (e, t) {
  var i = e;
  if (t && !f.isEmptyObject(t)) {
    var s = [],
      n = this;
    if (t.fieldActions && !f.isEmptyObject(t.fieldActions)) {
      var a = !1,
        o = i;
      ((o = Object.keys(t.fieldActions).reduce(function (d, p) {
        var y = t.fieldActions[p];
        if (y) {
          var g = y.denylisted || y.blacklisted,
            k = y.treatmentType,
            w = n._fieldActions.getAction(k);
          d = Tn(d, p, !1, function (M, $, me, oe) {
            if (g) (delete oe[$], (a = !0));
            else if (y.hasOwnProperty(Ci.OVERRIDE_FIELD_VALUE)) ((oe[$] = y[Ci.OVERRIDE_FIELD_VALUE]), (a = !0));
            else if (w) {
              var de = w.performAction(M, p, i, y);
              ((oe[$] = de),
                de instanceof Promise &&
                  s.push(
                    de.then(function (ke) {
                      Tn(o, p, !0, function (re, Pe, rs, is) {
                        rs === me && (is[Pe] = ke);
                      });
                    }),
                  ),
                (a = !0));
            }
          });
        }
        return d;
      }, o)),
        a &&
          (s.length > 0
            ? (i = Promise.all(s).then(function () {
                return o;
              }))
            : (i = o)));
    }
    if (t.eventActions && !f.isEmptyObject(t.eventActions)) {
      var l = Object.keys(t.eventActions),
        u = function (d) {
          return (
            l.forEach(function (p) {
              var y = n._eventActions.getAction(p);
              if (y) {
                var g = t.eventActions[p];
                d = y.performAction(d, e, g);
              }
            }),
            d
          );
        };
      i instanceof Promise
        ? (i = Promise.resolve(i).then(function (d) {
            return u(d);
          }))
        : (i = u(i));
    }
  }
  return i;
};
var OT = "filters",
  DT = "any",
  ni = "eventActions",
  ws = "fieldActions";
function NT(r, e) {
  var t = r || {};
  return (LT(t, e), MT(t, e), t);
}
function LT(r, e) {
  r[ni] || (r[ni] = {});
  var t = r[ni],
    i = e[ni];
  i &&
    Object.keys(i).reduce(function (s, n) {
      var a = s[n],
        o = i[n];
      return (
        f.isArray(a)
          ? f.isArray(o) &&
            o.forEach(function (l) {
              a.indexOf(l) === -1 && a.push(l);
            })
          : f.isArray(o)
            ? (s[n] = o.slice())
            : (f.isObject(o) || (!f.isObject(o) && !f.isFunction(o))) && (s[n] = o),
        s
      );
    }, t);
}
function MT(r, e) {
  (r[ws] || (r[ws] = {}),
    Ku(r, e, ws, function (t, i, s) {
      return t[s] && t[s].treatmentType === i[s].treatmentType ? t[s] : {};
    }));
}
var Zi = function (e) {
  ((this._constraintsInstance = e), (this.treatment = new Yu(e)));
};
Zi.prototype._combineTreatments = function (e, t, i) {
  var s,
    n = [];
  return (
    f.isArray(e)
      ? (e.forEach(function (a) {
          if (a) {
            var o = "treatmentProfiles." + a,
              l = t.value(o, i).then(function (u) {
                return u && u.treatments ? u.treatments : [];
              });
            n.push(l);
          }
        }),
        (s = Promise.all(n).then(function (a) {
          var o = [];
          return (
            a.forEach(function (l) {
              o = o.concat(l);
            }),
            o
          );
        })))
      : (s = Promise.resolve([])),
    s
  );
};
Zi.prototype.constraintsForEvent = function (e, t, i) {
  if (!t) return Promise.resolve(null);
  var s = this;
  return Promise.resolve(t.constraintProfiles(i))
    .then(function (n) {
      return f.isDefinedNonNull(n)
        ? n
        : Promise.resolve(t.constraintProfile(i)).then(function (a) {
            return f.isDefinedNonNull(a) ? [a] : null;
          });
    })
    .then(function (n) {
      if (f.isDefinedNonNull(n)) {
        if (!f.isArray(n))
          throw new TypeError('"constraintProfiles" should be an Array, but got: ' + (n && n.constructor));
        return s._combineTreatments(n, t, i).then(function (a) {
          if (a.length === 0)
            throw new SyntaxError("The constraintProfiles: " + n.join(", ") + " are not found in the topic config");
          return a;
        });
      } else return Promise.resolve([]);
    })
    .then(function (n) {
      var a = n.reduce(function (o, l) {
        return (s.eventMatchesTreatment(e, l) && (o = NT(o, l)), o);
      }, null);
      return a;
    });
};
Zi.prototype.eventMatchesTreatment = function (e, t) {
  var i = t[OT];
  if (!f.isDefinedNonNull(i)) return !0;
  if (f.isString(i)) return i === DT;
  if (Object.keys(i).length === 0)
    throw new SyntaxError(
      `Unable to find the filter in 
` + JSON.stringify(t),
    );
  return Object.keys(i).every(function (s) {
    var n = i[s];
    if (n && f.isString(n)) return !1;
    if (!n || !f.isObject(n) || f.isEmptyObject(n))
      throw new SyntaxError(
        "Invalid filter object for field (" +
          s +
          `) in 
` +
          JSON.stringify(t),
      );
    return Object.keys(n).every(function (a) {
      var o = n[a];
      if (Qt[a]) return Qt[a](s, e, o);
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
var UT = {
  constraintProfile: function (e) {
    return this.value("constraints.defaultProfile", e);
  },
  constraintProfiles: function (e) {
    return this.value("defaultTreatmentProfiles", e);
  },
};
function xT(r) {
  var e = !0;
  return (
    (e &= f.isDefinedNonNull(r)),
    e &&
      ((e &= !f.isEmptyObject(r)),
      (e &= f.isFunction(r.initialized)),
      (e &= f.isFunction(r.value)),
      (e &= f.isFunction(r.constraintProfile))),
    e
  );
}
function FT(r) {
  return ((f.isFunction(r.constraintProfile) && f.isFunction(r.constraintProfiles)) || f.attachMethods(r, UT, r), r);
}
var es = function (e, t) {
  if (!xT(e)) throw new Error('The topic config is not a valid instance of "mt-client-config".');
  ((this._isInitialized = !1),
    (this._topicConfig = e),
    (this._constraintGenerator = null),
    (this.system = new sT()),
    f.setDelegates(this.system, t || {}));
};
es.prototype._getConstraintGenerator = function () {
  var e = this;
  return this._constraintGenerator
    ? Promise.resolve(this._constraintGenerator)
    : this._topicConfig.value("treatmentProfiles").then(function (t) {
        return (
          f.isDefinedNonNull(t) ? (e._constraintGenerator = new Zi(e)) : (e._constraintGenerator = new or(e)),
          e._constraintGenerator
        );
      });
};
es.prototype.constraintsForEvent = function (e, t) {
  var i = this;
  return this._getConstraintGenerator().then(function (s) {
    return s.constraintsForEvent(e, i._topicConfig, t);
  });
};
es.prototype.applyConstraintTreatments = function (e, t) {
  var i = t ? Promise.resolve(t) : this.constraintsForEvent(e),
    s = this;
  return Promise.all([i, this._getConstraintGenerator(), this._topicConfig.value("anonymous")])
    .then(function (n) {
      var a = n[0],
        o = n[1],
        l = n[2];
      return (f.isDefinedNonNull(l) && (e.anonymous = l), o.treatment.applyConstraints(e, a));
    })
    .catch(function (n) {
      return (s.system.logger.warn("An error occurred while applying constraints: " + n.message || n), null);
    });
};
const KT = es;
var Rs, Cs;
function Gu() {
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
function zu() {
  return ["delegateApp", "hardwareBrand", "storeFrontCountryCode", "storeFrontHeader", "storeFrontLanguage"];
}
function VT() {
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
function Qu() {
  return (Cs || (Cs = Gu().concat(zu())), Cs);
}
function BT() {
  return (Rs || (Rs = Qu().concat(VT())), Rs);
}
var $T = f.attachDelegate,
  HT = we.cryptoRandomBase62String,
  ts = we.exceptionString,
  hc;
function te(r) {
  if (!f.isDefinedNonNull(r)) throw new Error("A processor instance is required for creating BaseEventHandler.");
  ((this._processor = r),
    hc ||
      ((hc = !0),
      Qu().forEach(function (e) {
        te.prototype[e] = function (t) {
          var i;
          return (t && t.hasOwnProperty(e) ? (i = t[e]) : (i = this.environment()[e]()), i);
        };
      })));
}
te._className = "eventHandlers.base";
te.prototype.setDelegate = function (e) {
  return $T(this, e);
};
te.prototype.environment = function () {
  throw ts(te._className, "environment");
};
te.prototype.eventRecorder = function () {
  throw ts(te._className, "eventRecorder");
};
te.prototype.metricsData = function () {
  throw ts(te._className, "metricsData");
};
te.prototype.processMetricsData = function () {
  throw ts(te._className, "processMetricsData");
};
te.prototype.knownFields = function () {
  return BT();
};
te.prototype.baseVersion = function () {
  return 1;
};
te.prototype.clientEventId = function (e) {
  return (e && e.clientEventId) || HT(!0);
};
te.prototype.connection = function (e) {
  return (e && e.connection) || this.environment().connectionType();
};
te.prototype.dsId = function (e) {
  return (e && e.dsId) || this.environment().dsId();
};
te.prototype.eventTime = function (e) {
  return (e && e.eventTime) || Date.now();
};
te.prototype.eventVersion = function (e) {
  return (e && e.eventVersion) || null;
};
te.prototype.timezoneOffset = function (e) {
  return (e && e.timezoneOffset) || new Date().getTimezoneOffset();
};
te.prototype.xpPostFrequency = function (e) {
  return (e && e.xpPostFrequency) || this._processor.config.value("postFrequency");
};
te.prototype.xpSendMethod = function (r) {
  return (r && r.xpSendMethod) || this.eventRecorder().sendMethod();
};
var jT = { Base: te },
  qT = f.attachDelegate,
  Xu = we.exceptionString,
  WT = ee.localStorageObject,
  YT = ee.sessionStorageObject,
  fc;
function Me() {
  fc ||
    ((fc = !0),
    Gu().forEach(function (r) {
      Me.prototype[r] = function () {
        throw Xu(Me._className, r);
      };
    }),
    zu().forEach(function (r) {
      Me.prototype[r] = function () {};
    }));
}
Me._className = "system.environment";
Me.prototype.setDelegate = function (e) {
  return qT(this, e);
};
Me.prototype.connectionType = function () {
  throw Xu(Me._className, "connectionType");
};
Me.prototype.dsId = function () {};
Me.prototype.localStorageObject = WT;
Me.prototype.sessionStorageObject = YT;
Me.prototype.platformIdentifier = function () {};
var GT = { Environment: Me };
function Ju() {
  this._eventData = {};
}
Ju.prototype.updateData = function () {
  f.extend.apply(null, [this._eventData].concat(Array.prototype.slice.call(arguments)));
};
var Zu = { MetricsData: Ju },
  ed = GT.Environment;
function at() {
  ed.apply(this, arguments);
}
at.prototype = Object.create(ed.prototype);
at.prototype.constructor = at;
at.prototype.consumerId = function () {};
at.prototype.consumerNs = function () {};
at.prototype.isOffline = function () {};
at.prototype.videoViewportHeight = function () {};
at.prototype.videoViewportWidth = function () {};
var zT = f.attachDelegate,
  td = we.exceptionString,
  rd = "PlayActivityProcessor.system.eventRecorder",
  Br = function () {};
Br.prototype.setDelegate = function (e) {
  return zT(this, e);
};
Br.prototype.recordEvent = function (e, t) {
  throw td(rd, "recordEvent");
};
Br.prototype.sendMethod = function () {
  throw td(rd, "sendMethod");
};
Br.prototype.flushUnreportedEvents = function (e) {};
var QT = Kr("mt-metricskit-processor-play-activity"),
  XT = function () {
    ((this.environment = new at()), (this.eventRecorder = new Br()), (this.logger = QT));
  },
  id = function (e) {
    this._processor = e;
  };
id.prototype.applyFieldsMap = function (e, t) {
  return this._processor.config.value("fieldsMap").then(function (i) {
    return Qi.applyFieldsMap(e, t, i);
  });
};
var JT = function (e) {
    this.eventFields = new id(e);
  },
  C = {
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
  be = {
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
  At = {
    TYPE: { MANUAL: "manual", AUTOMATIC: "automatic", UNKNOWN: C.UNKNOWN },
    ASSET_PLACEMENT: {
      PRE_ROLL: "preroll",
      POST_ROLL: "postroll",
      MID_ROLL: "midroll",
      FEATURE: "feature",
      CATCH_UP_TO_LIVE: "catchUpToLive",
    },
    PLAY_START_REASON: {
      PLAY: C.PLAY,
      PLAY_OTHER: C.PLAY_OTHER,
      UNPAUSE: "unpause",
      NEXT: C.NEXT,
      PREVIOUS: C.PREVIOUS,
      SEEK: C.SEEK,
      TRANSITION: C.TRANSITION,
      INTERRUPTION: C.INTERRUPTION,
      FOREGROUND: "foreground",
      FOCUS: "focus",
      BUFFERING: C.BUFFERING,
      UNKNOWN: C.UNKNOWN,
      SKIP_TO_LIVE: C.SKIP_TO_LIVE,
    },
    PLAY_START_REASON_TYPE: { SKIP_INTRO: C.SKIP_INTRO, SKIP_TO_LIVE: C.SKIP_TO_LIVE },
    PLAY_STOP_REASON: {
      COMPLETE: "complete",
      TRANSITION: C.TRANSITION,
      PLAY_OTHER: C.PLAY_OTHER,
      PAUSE: "pause",
      SEEK: C.SEEK,
      NEXT: C.NEXT,
      INTERRUPTION: C.INTERRUPTION,
      BACKGROUND: "background",
      EXIT: "exit",
      INACTIVITY: "inactivity",
      BUFFERING: C.BUFFERING,
      ERROR: "error",
      FAILURE: "failure",
      UNKNOWN: C.UNKNOWN,
      CLOSE_PLAYER: "closePlayer",
      SKIP_TO_LIVE: C.SKIP_TO_LIVE,
    },
    PLAY_STOP_REASON_TYPE: { SKIP_INTRO: C.SKIP_INTRO, SKIP_TO_LIVE: C.SKIP_TO_LIVE },
    SEEK_START_REASON: {
      NEXT: C.NEXT,
      PREVIOUS: C.PREVIOUS,
      LOCATION: C.LOCATION,
      INTERVAL: C.INTERVAL,
      PLAYHEAD: C.PLAYHEAD,
      SCRUB: C.SCRUB,
      UNKNOWN: C.UNKNOWN,
      SKIP_INTRO: C.SKIP_INTRO,
    },
    SEEK_STOP_REASON: {
      NEXT: C.NEXT,
      PREVIOUS: C.PREVIOUS,
      LOCATION: C.LOCATION,
      INTERVAL: C.INTERVAL,
      PLAYHEAD: C.PLAYHEAD,
      SCRUB: C.SCRUB,
      UNKNOWN: C.UNKNOWN,
      SEEK: C.SEEK,
      SKIP_INTRO: C.SKIP_INTRO,
    },
    SEEK_STOP_REASON_TYPE: { SKIP_INTRO: C.SKIP_INTRO },
  },
  sd = {
    ACTIVITY_TYPE: { PLAY: C.PLAY, SEEK: C.SEEK },
    ACTION_TYPE: { START: "start", STOP: "stop" },
    EVENT_TYPE: { PLAY_ACTIVITY: "playActivity", SEEK_ACTIVITY: "seekActivity" },
  },
  Aa = { INCLUDES_START_POSITIONS: "includesStartPositions", INCLUDES_END_POSITIONS: "includesEndPositions" },
  Z = function (e, t) {
    ((this._processor = e),
      (this._activityType = t),
      (this._startMetricsDataPromise = Promise.resolve(null)),
      (this._isStopped = !1));
  };
Z.ACTIVITY_TYPE = sd.ACTIVITY_TYPE;
Object.defineProperties(Z.prototype, {
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
        ? this._startMetricsDataPromise.then(function (r) {
            return r.overallPosition;
          })
        : Promise.resolve(null);
    },
  },
});
f.extend(Z.prototype, At);
Z.prototype.started = function (e, t, i, s) {
  var n = this._startEventHandler(),
    a = this;
  if (n) {
    if (((this._startMetricsDataPromise = n.metricsData.apply(n, arguments)), this.type != Z.ACTIVITY_TYPE.SEEK))
      return this._processor.system.eventRecorder.recordEvent(
        this._processor.config.topic(),
        this._startMetricsDataPromise,
      );
  } else
    a._processor.system.logger.error(
      'Failed to record the start event with activityType: "' +
        i +
        '" due to unexpected current type "' +
        this.type +
        '", expected "' +
        Z.ACTIVITY_TYPE.PLAY +
        '" or "' +
        Z.ACTIVITY_TYPE.SEEK +
        '"',
    );
  return Promise.resolve(null);
};
Z.prototype.stopped = function (e, t, i, s) {
  var n = Array.prototype.slice.call(arguments),
    a = this._stopEventHandler(),
    o = this;
  if (a) {
    this._isStopped = !0;
    var l = this._startMetricsDataPromise.then(function (u) {
      var d = [e, t, i, s, u].concat(Array.prototype.slice.call(n, 4));
      return a.metricsData.apply(a, d);
    });
    return o._processor.system.eventRecorder.recordEvent(o._processor.config.topic(), l);
  } else
    o._processor.system.logger.error(
      'Failed to record the stop event with activityType: "' +
        i +
        '" due to unexpected current type "' +
        this.type +
        '", expected "' +
        Z.ACTIVITY_TYPE.PLAY +
        '" or "' +
        Z.ACTIVITY_TYPE.SEEK +
        '"',
    );
  return Promise.resolve(null);
};
Z.prototype._startEventHandler = function () {
  var e;
  switch (this.type) {
    case Z.ACTIVITY_TYPE.PLAY:
      e = this._processor.eventHandlers.playStart;
      break;
    case Z.ACTIVITY_TYPE.SEEK:
      e = this._processor.eventHandlers.seekStart;
      break;
  }
  return e;
};
Z.prototype._stopEventHandler = function () {
  var e;
  switch (this.type) {
    case Z.ACTIVITY_TYPE.PLAY:
      e = this._processor.eventHandlers.playStop;
      break;
    case Z.ACTIVITY_TYPE.SEEK:
      e = this._processor.eventHandlers.seekStop;
      break;
  }
  return e;
};
var ZT = f.isInteger,
  $r = function (e, t, i) {
    ((this._date = new Date()),
      (this._position = t),
      this._validatePlaybackRate(e),
      (this._playbackRate = e),
      (this._logger = i));
  };
Object.defineProperties($r.prototype, {
  playbackRate: {
    get: function () {
      return this._playbackRate;
    },
  },
});
$r.prototype.update = function (e, t) {
  ((this._date = new Date()), (this._position = t), this._validatePlaybackRate(e), (this._playbackRate = e));
};
$r.prototype.estimatedTime = function (e) {
  var t;
  ZT(e) ? (t = e) : (this._logger.error("VPAFKit error: position should be an integer"), (t = Math.round(e)));
  var i = t - this._position,
    s = this.playbackRate == 0 ? 1 : this.playbackRate,
    n = i / s;
  return this._date.getTime() + Math.round(n);
};
$r.prototype._validatePlaybackRate = function (e) {
  e == 0 && this._logger.error("VPAFKit error: playbackRate should not be zero.");
};
var eE = f.attachDelegate,
  tE = f.extend,
  nd = f.isFunction,
  rE = f.isNumber,
  ad = Zu.MetricsData,
  od = Aa.INCLUDES_START_POSITIONS,
  iE = Aa.INCLUDES_END_POSITIONS,
  H = function (e, t) {
    (ad.apply(this, arguments),
      (this._processor = e),
      (this._playlist = t),
      (this._playActivity = null),
      (this._playStartPlaylistItem = null),
      (this._seekActivity = null),
      (this._timeTracker = null),
      (this._shouldGenerateTransitions = !0));
  };
H.prototype = Object.create(ad.prototype);
H.prototype.constructor = H;
tE(H.prototype, At);
Object.defineProperties(H.prototype, {
  shouldGenerateTransitions: {
    get: function () {
      return this._shouldGenerateTransitions;
    },
    set: function (r) {
      this._shouldGenerateTransitions = r;
    },
  },
});
H.prototype.setDelegate = function (e) {
  return eE(this, e);
};
H.prototype.playStarted = function (e, t, i) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
H.prototype.playStartedWithPlaybackRate = function (e, t, i, s) {
  var n = Promise.resolve(),
    a = this;
  if (this._hasUnstoppedActivity(this._playActivity))
    this._error("inconsistent state: did you forget to call playStopped?");
  else {
    var o = this._playlistItem(t, od);
    o
      ? (n = this._playStarted
          .apply(this, [o].concat(Array.prototype.slice.call(arguments, 1)))
          .then(function () {
            a.shouldGenerateTransitions && (a._timeTracker = new $r(e, t, a._processor.system.logger));
          })
          .catch(function (l) {
            a._error(l);
          }))
      : this._error(
          'Failed to record play start event due to no active playlist item for the overall position "' + t + '".',
        );
  }
  return n;
};
H.prototype.playStopped = function (e, t, i) {
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
H.prototype.playTransitioned = function (e) {
  var t = this,
    i = Array.prototype.slice.call(arguments, 1);
  return this.playStopped
    .apply(this, [e, this.TYPE.AUTOMATIC, this.PLAY_STOP_REASON.TRANSITION].concat(i))
    .then(function () {
      return t.playStarted.apply(t, [e, t.TYPE.AUTOMATIC, t.PLAY_START_REASON.TRANSITION].concat(i));
    })
    .catch(function (s) {
      t._error(s);
    });
};
H.prototype.seekStarted = function (e, t, i) {
  var s = Promise.resolve();
  if (this._hasUnstoppedActivity(this._seekActivity))
    this._error("inconsistent state: did you forget to call seekStopped?");
  else {
    var n = this._playlistItem(e, od);
    if (n) {
      var a = this._activityArguments.apply(this, [n].concat(Array.prototype.slice.call(arguments)));
      this._seekActivity = new Z(this._processor, Z.ACTIVITY_TYPE.SEEK);
      var o = this;
      s = this._seekActivity.started.apply(this._seekActivity, a).catch(function (l) {
        o._error(l);
      });
    } else
      this._error(
        'Failed to record seek start event due to no active playlist item for the overall position "' + e + '".',
      );
  }
  return s;
};
H.prototype.seekStopped = function (e, t, i) {
  var s = Promise.resolve(),
    n = this._playlistItem(e, iE);
  if (n && this._hasUnstoppedActivity(this._seekActivity)) {
    var a = this._activityArguments.apply(this, [n].concat(Array.prototype.slice.call(arguments))),
      o = this;
    s = this._seekActivity.stopped.apply(this._seekActivity, a).catch(function (l) {
      o._error(l);
    });
  } else this._error("inconsistent state: did you forget to call seekStarted?");
  return s;
};
H.prototype.synchronize = function (e, t) {
  if (this.shouldGenerateTransitions) {
    var i = e > 0,
      s = this._hasUnstoppedActivity(this._playActivity),
      n = Promise.resolve(),
      a = this;
    return (
      s && i
        ? (n = this._generatePlaylistTransitionsIfNecessary(t)
            .then(function () {
              a._timeTracker.update(e, t);
            })
            .catch(function (o) {
              a._error(o);
            }))
        : s && !i
          ? this._error("inconsistent state: did you forget to call playStopped?")
          : !s && i && this._error("inconsistent state: did you forget to call playStarted?"),
      n
    );
  }
};
H.prototype._playStarted = function (e, t, i, s) {
  var n = this._activityArguments.apply(this, [e].concat(Array.prototype.slice.call(arguments, 1)));
  return (
    (this._playStartPlaylistItem = e),
    (this._playActivity = new Z(this._processor, Z.ACTIVITY_TYPE.PLAY)),
    this._playActivity.started.apply(this._playActivity, n)
  );
};
H.prototype._playStopped = function (e, t, i) {
  var s = this._playStartPlaylistItem,
    n = this._activityArguments.apply(this, [s].concat(Array.prototype.slice.call(arguments)));
  return this._playActivity.stopped.apply(this._playActivity, n);
};
H.prototype._playlistItem = function (e, t) {
  var i;
  return (
    this._playlist && nd(this._playlist.getItem) && (i = this._playlist.getItem(e, t)),
    i || this._error("unable to get item from playlist"),
    i
  );
};
H.prototype._playlistItems = function (e, t) {
  var i = [];
  return (
    this._playlist && nd(this._playlist.getItems)
      ? (i = this._playlist.getItems(e, t))
      : this._error("unable to get items from playlist"),
    i
  );
};
H.prototype._relativePosition = function (e, t) {
  t = t || this._playlistItem(e);
  var i;
  return (t && rE(t.startOverallPosition) && (i = e - t.startOverallPosition + (t.startPosition || 0)), i);
};
H.prototype._combineEventData = function (e, t) {
  var i = this._playlist ? this._playlist.eventData : null,
    s = e ? e.eventData : null,
    n = [];
  return (i && n.push(i), s && n.push(s), this._eventData && n.push(this._eventData), t && (n = n.concat(t)), n);
};
H.prototype._activityArguments = function (e, t, i, s) {
  var n = this._relativePosition(t, e),
    a = this._combineEventData(e, Array.prototype.slice.call(arguments, 4)),
    o = [n, t, i, s].concat(a);
  return o;
};
H.prototype._generatePlaylistTransitionsIfNecessary = function (e) {
  var t = this,
    i = Promise.resolve();
  return (
    this.shouldGenerateTransitions &&
      this._hasUnstoppedActivity(this._playActivity) &&
      (i = this._playActivity.startOverallPosition
        .then(function (s) {
          return s || 0;
        })
        .then(function (s) {
          var n = t._playlistItems(s, e),
            a,
            o,
            l = Promise.resolve();
          t._playlist._returnsOrderedItems || n.sort(t._playlistItemComparator);
          for (var u = 0; u + 1 < n.length; u++)
            if (((o = n[u + 1]), (a = o.startOverallPosition), !(a <= s))) {
              if (a >= e) break;
              l = l.then(
                function () {
                  var d = this,
                    p = d.startOverallPosition,
                    y = { eventTime: t._timeTracker ? t._timeTracker.estimatedTime(p) : null };
                  return t._playStopped(p, t.TYPE.AUTOMATIC, t.PLAY_STOP_REASON.TRANSITION, y).then(function () {
                    return t._playStarted(d, p, t.TYPE.AUTOMATIC, t.PLAY_START_REASON.TRANSITION, y);
                  });
                }.bind(o),
              );
            }
          return l;
        })),
    i
  );
};
H.prototype._hasUnstoppedActivity = function (e) {
  return e && !e.isStopped;
};
H.prototype._error = function (e) {
  this._processor.system.logger.error(this.constructor.name + " error: " + e);
};
H.prototype._playlistItemComparator = function (e, t) {
  return e.startOverallPosition == t.startOverallPosition
    ? 0
    : e.startOverallPosition < t.startOverallPosition
      ? -1
      : 1;
};
var Ce = function (e, t) {
  H.apply(this, arguments);
};
Ce.prototype = Object.create(H.prototype);
Ce.prototype.constructor = Ce;
Object.defineProperty(Ce.prototype, "shouldGenerateTransitions", {
  get: function () {
    return !1;
  },
  set: function () {
    this._error(
      'Changing "shouldGenerateTransitions" is not allowed in HLSRollItemsMediaActivityTracker. Please use correct play activity tracker if you need to automatically generate transition play activity events ',
    );
  },
});
Ce.prototype.playStarted = function (e, t, i, s) {
  return this.playStartedWithPlaybackRate.apply(this, [1].concat(Array.prototype.slice.call(arguments)));
};
Ce.prototype.playStartedWithPlaybackRate = function (e, t, i, s, n) {
  var a = Promise.resolve(),
    o = this;
  if (t < n.start * 1e3 || t > (n.start + n.duration) * 1e3)
    return (this._error("The giving overallPosition(" + t + ") is not in the given roll item's timeframe."), a);
  if (this._hasUnstoppedActivity(this._playActivity))
    this._error("inconsistent state: did you forget to call playStopped?");
  else {
    var l = this._playlistItem(n);
    l
      ? (a = this._playStarted
          .apply(this, [l, t, i, s].concat(Array.prototype.slice.call(arguments, 5)))
          .catch(function (u) {
            o._error(u);
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
Ce.prototype.jumpFromOverallPosition = function (e, t, i) {
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
          return a.seekStopped.apply(a, [i.start * 1e3, a.TYPE.AUTOMATIC, a.SEEK_STOP_REASON.NEXT, i].concat(n));
        })
        .then(function () {
          return a.playStarted.apply(a, [i.start * 1e3, a.TYPE.AUTOMATIC, a.PLAY_START_REASON.NEXT, i].concat(n));
        })),
      s);
};
Ce.prototype.playStopped = function (e, t, i) {
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
Ce.prototype.seekStarted = function (e, t, i, s) {
  var n = Promise.resolve();
  if (e < s.start * 1e3 || e > (s.start + s.duration) * 1e3)
    return (this._error("The giving overallPosition(" + e + ") is not in the given roll item's timeframe."), n);
  if (this._hasUnstoppedActivity(this._seekActivity))
    this._error("inconsistent state: did you forget to call seekStopped?");
  else {
    var a = this._playlistItem(s);
    if (a) {
      var o = this._activityArguments.apply(this, [a, e, t, i].concat(Array.prototype.slice.call(arguments, 4)));
      this._seekActivity = new Z(this._processor, Z.ACTIVITY_TYPE.SEEK);
      var l = this;
      n = this._seekActivity.started.apply(this._seekActivity, o).catch(function (u) {
        l._error(u);
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
Ce.prototype.seekStopped = function (e, t, i, s) {
  var n = Promise.resolve(),
    a = this._playlistItem(s);
  if (a && this._hasUnstoppedActivity(this._seekActivity)) {
    var o = this._activityArguments.apply(this, [a, e, t, i].concat(Array.prototype.slice.call(arguments, 4))),
      l = this;
    n = this._seekActivity.stopped.apply(this._seekActivity, o).catch(function (u) {
      l._error(u);
    });
  } else this._error("inconsistent state: did you forget to call seekStarted?");
  return n;
};
Ce.prototype._playlistItem = function (e) {
  var t;
  return (
    this._playlist &&
      f.isFunction(this._playlist.getItemForRollItem) &&
      (t = this._playlist.getItemForRollItem(e.start * 1e3, e.duration * 1e3)),
    t || this._error("unable to get item from playlist"),
    t
  );
};
Ce.prototype._relativePosition = function (e, t) {
  var i;
  return f.isDefinedNonNull(t)
    ? (t && f.isNumber(t.startOverallPosition) && (i = e - t.startOverallPosition + (t.startPosition || 0)), i)
    : (this._error("please provide the active playlist item for calculating the relative position."), i);
};
var cd = Zu.MetricsData,
  Nt = function (e) {
    (cd.apply(this, arguments), (this._startOverallPosition = e), (this._startPosition = 0));
  };
Nt.prototype = new cd();
Nt.prototype.constructor = Nt;
Object.defineProperties(Nt.prototype, {
  startOverallPosition: {
    get: function () {
      return this._startOverallPosition;
    },
  },
  startPosition: {
    get: function () {
      return this._startPosition;
    },
    set: function (r) {
      this._startPosition = r;
    },
  },
  eventData: {
    get: function () {
      return this._eventData;
    },
  },
});
var Xt = function (e, t) {
  (Nt.apply(this, arguments), (this._duration = t));
};
Xt.prototype = new Nt();
Xt.prototype.constructor = Xt;
Object.defineProperties(Xt.prototype, {
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
Xt.prototype.containsOverallPosition = function (e) {
  return this.startOverallPosition <= e && this.endOverallPosition > e;
};
var cr = function () {};
cr.prototype.RANGE_OPTIONS = Aa;
Object.defineProperties(cr.prototype, { eventData: { get: function () {} } });
cr.prototype.getItem = function (e, t) {};
cr.prototype.getItems = function (e, t) {};
var ye = function (e) {
  (cr.apply(this, arguments),
    (this._startPosition = e),
    (this._mainFeatureMetricsData = f.copyKeysAndValues.apply(
      null,
      [!1, !1, !1, null].concat(Array.prototype.slice.call(arguments, 1)),
    )),
    (this._rollItems = []));
};
ye.prototype = new cr();
ye.prototype.constructor = ye;
ye.prototype.setDelegate = function (e) {
  return f.attachDelegate(this, e);
};
ye.prototype.addRollInfoItems = function (e) {
  e &&
    e.length &&
    e.forEach(function (t) {
      this.addRollInfoItem(t);
    }, this);
};
ye.prototype.addRollInfoItem = function (e) {
  e && this.addRollItem(e.start * 1e3, e.duration * 1e3, e.metricsData);
};
ye.prototype.addRollItem = function (e, t) {
  var i = new Xt(e, t);
  (i.updateData.apply(i, Array.prototype.slice.call(arguments, 2)), this._addRollItem(i));
};
ye.prototype.updateMainFeatureMetricsData = function () {
  f.extend.apply(null, [this._mainFeatureMetricsData].concat(Array.prototype.slice.call(arguments)));
};
ye.prototype.getItemForRollItem = function (e, t) {
  var i = this._indexOfLastRollItemWithStartBeforePosition(e),
    s = this._rollItems[i];
  return f.isDefinedNonNull(s) && s.duration === t ? s : null;
};
ye.prototype.getItem = function (e, t) {
  var i = this._indexOfLastRollItemWithStartBeforePosition(e),
    s;
  if (!f.isInteger(i)) s = this._mainFeatureItemWithStartOverallPosition(this._startPosition);
  else {
    for (; t != this.RANGE_OPTIONS.INCLUDES_START_POSITIONS && this._rollItems[i].startOverallPosition == e && i > 0;)
      i--;
    ((s = this._rollItems[i]),
      !s.containsOverallPosition(e) &&
        (t != this.RANGE_OPTIONS.INCLUDES_END_POSITIONS || s.endOverallPosition != e) &&
        (s = this._mainFeatureItemWithStartOverallPosition(s.endOverallPosition)));
  }
  return s;
};
ye.prototype.getItems = function (e, t) {
  var i = [];
  if (!this._rollItems.length) i.push(this._mainFeatureItemWithStartOverallPosition(this._startPosition));
  else {
    var s = this._indexOfLastRollItemWithStartBeforePosition(e);
    for (
      f.isInteger(s) || (i.push(this._mainFeatureItemWithStartOverallPosition(this._startPosition)), (s = 0));
      s < this._rollItems.length;
    ) {
      var n = this._rollItems[s];
      if (n.startOverallPosition > t) break;
      if ((n.endOverallPosition >= e && i.push(n), s++, n.endOverallPosition < t))
        if (s < this._rollItems.length) {
          var a = this._rollItems[s];
          a.startOverallPosition &&
            a.startOverallPosition > n.endOverallPosition &&
            i.push(this._mainFeatureItemWithStartOverallPosition(n.endOverallPosition));
        } else i.push(this._mainFeatureItemWithStartOverallPosition(n.endOverallPosition));
    }
  }
  return i;
};
ye.prototype._addRollItem = function (e) {
  if (e) {
    var t = this._insertionIndexForItemWithPosition(e.startOverallPosition);
    this._rollItems.splice(t, 0, e);
  }
};
ye.prototype._indexOfLastRollItemWithStartBeforePosition = function (e) {
  var t,
    i = this._rollItems[0];
  return (
    i && f.isInteger(e) && i.startOverallPosition <= e && (t = this._insertionIndexForItemWithPosition(e) - 1), t
  );
};
ye.prototype._insertionIndexForItemWithPosition = function (e) {
  for (var t = 0, i = this._rollItems.length; t < i;) {
    var s = Math.floor((t + i) / 2),
      n = this._rollItems[s];
    n.startOverallPosition > e ? (i = s) : (t = s + 1);
  }
  return t;
};
ye.prototype._mainFeatureItemWithStartOverallPosition = function (e) {
  var t = new Nt(e);
  return ((t.startPosition = this._featurePlayheadProgress(e)), t.updateData(this._mainFeatureMetricsData), t);
};
ye.prototype._featurePlayheadProgress = function (e) {
  e = e || 0;
  var t = this._indexOfLastRollItemWithStartBeforePosition(e),
    i = this._startPosition || 0,
    s,
    n;
  f.isInteger(t) || (t = -1);
  for (var a = t; a >= 0; a--)
    ((s = this._rollItems[a]),
      a === 0
        ? (i += s.startOverallPosition)
        : ((n = this._rollItems[a - 1]), (i += s.startOverallPosition - n.endOverallPosition)));
  return i;
};
var Hr = function (e) {
  this._processor = e;
};
Hr.prototype.createTracker = function (e) {
  var t = new H(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Hr.prototype.createHLSRollItemsMediaActivityTracker = function (e) {
  var t = new Ce(this._processor, e);
  return (t.updateData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Hr.prototype.createHLSVideoPlaylist = function (e) {
  var t = new ye(e);
  return (t.updateMainFeatureMetricsData.apply(t, Array.prototype.slice.call(arguments, 1)), t);
};
Hr.prototype.createMediaPlaylist = function (e) {
  return this.createHLSVideoPlaylist.apply(this, arguments);
};
var ld = we.exceptionString,
  jr = function (e) {
    this._processor = e;
  };
jr.prototype.knownFields = function () {
  throw ld("PlayActivityEventHandler", "knownFields");
};
jr.prototype.eventType = function (r) {
  throw ld("PlayActivityEventHandler", "eventType");
};
jr.prototype.processMetricsData = function () {
  var e = Array.prototype.slice.call(arguments),
    t = this.eventType(e),
    i = this._processor.config,
    s = this._processor._constraints,
    n = this;
  return i
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
      var l = Qi.processMetricsData(n, n.knownFields(), !0, e),
        u = {};
      return (
        Object.keys(l).forEach(function (d) {
          var p = l[d],
            y = Promise.resolve(p).then(function (g) {
              u[d] = g;
            });
          o.push(y);
        }),
        Promise.all(o).then(function () {
          return u;
        })
      );
    })
    .then(function (a) {
      return s.applyConstraintTreatments(a);
    })
    .then(function (a) {
      return i.removeBlacklistedFields(a);
    })
    .catch(function (a) {
      return (
        n._processor.system.logger.error(
          "PlayActivity Processor: Unable to generate the event (" +
            n.eventType(e) +
            ") for the topic " +
            i.topic() +
            ", due to " +
            a,
        ),
        null
      );
    });
};
var sE = f.attachDelegate,
  nE = f.extend,
  se = function (e, t, i) {
    (jr.call(this, e), (this._defaultEventType = t), (this._reasonConstants = i), this._defaultActionType);
  };
se.prototype = Object.create(jr.prototype);
se.prototype.constructor = se;
nE(se, sd);
Object.defineProperties(se.prototype, {
  TYPE: {
    get: function () {
      return At.TYPE;
    },
  },
  REASON: {
    get: function () {
      return this._reasonConstants;
    },
  },
});
se.prototype.setDelegate = function (e) {
  return sE(this, e);
};
se.prototype.knownFields = function () {
  var e = [be.ACTION_TYPE, be.EVENT_TYPE, be.EVENT_VERSION];
  return e;
};
se.prototype.eventType = function (e) {
  return this._defaultEventType;
};
se.prototype.eventVersion = function (e) {
  var t = this._processor.eventHandlers.base.eventVersion(e);
  return t !== null ? t : 1;
};
se.prototype.actionType = function (e) {
  return this._defaultActionType;
};
var Jt = function (e, t, i) {
  (se.apply(this, arguments), (this._defaultActionType = se.ACTION_TYPE.START));
};
Jt.prototype = Object.create(se.prototype);
Jt.prototype.constructor = Jt;
Jt.prototype.metricsData = function (e, t, i, s) {
  var n = { position: e, overallPosition: t, startType: i, startReason: s },
    a = Array.prototype.slice.call(arguments, 4);
  return this.processMetricsData.apply(this, [n].concat(a));
};
var Zt = function (e, t, i) {
  (se.apply(this, arguments), (this._defaultActionType = se.ACTION_TYPE.STOP));
};
Zt.prototype = Object.create(se.prototype);
Zt.prototype.constructor = Zt;
Zt.prototype.metricsData = function (e, t, i, s, n) {
  var a = this.eventType();
  n = n || {};
  var o = {
    position: e,
    overallPosition: t,
    stopType: i,
    stopReason: s,
    startPosition: n.position,
    startOverallPosition: n.overallPosition,
    startTime: n.eventTime,
    startType: n.startType,
    startReason: n.startReason,
    startReasonType: n.startReasonType,
  };
  a === se.EVENT_TYPE.SEEK_ACTIVITY && (o.startAssetId = n.assetId);
  var l = Array.prototype.slice.call(arguments, 5);
  return this.processMetricsData.apply(this, [o].concat(l));
};
var wa = jT.Base,
  Oe = function (e) {
    wa.apply(this, arguments);
  };
Oe.prototype = Object.create(wa.prototype);
Oe.prototype.constructor = Oe;
Oe.prototype.environment = function () {
  return this._processor.system.environment;
};
Oe.prototype.eventRecorder = function () {
  return this._processor.system.eventRecorder;
};
Oe.prototype.knownFields = function () {
  var e = wa.prototype
    .knownFields()
    .concat([
      be.ACTION_TYPE,
      be.CONSUMER_ID,
      be.CONSUMER_NS,
      be.DS_ID,
      be.IS_OFFLINE,
      be.VIDEO_VIEWPORT_HEIGHT,
      be.VIDEO_VIEWPORT_WIDTH,
    ]);
  return e;
};
Oe.prototype.consumerId = function (e) {
  var t = be.CONSUMER_ID;
  return e && t in e ? e[t] : this.environment().consumerId();
};
Oe.prototype.consumerNs = function (e) {
  var t = be.CONSUMER_NS;
  return e && t in e ? e[t] : this.environment().consumerNs();
};
Oe.prototype.isOffline = function (e) {
  var t = be.IS_OFFLINE;
  return e && t in e ? e[t] : this.environment().isOffline();
};
Oe.prototype.videoViewportHeight = function (e) {
  var t = be.VIDEO_VIEWPORT_HEIGHT;
  return e && t in e ? e[t] : this.environment().videoViewportHeight();
};
Oe.prototype.videoViewportWidth = function (e) {
  var t = be.VIDEO_VIEWPORT_WIDTH;
  return e && t in e ? e[t] : this.environment().videoViewportWidth();
};
Oe.prototype.metricsData = function () {
  var e = Array.prototype.slice.call(arguments),
    t = Qi.processMetricsData(this, this.knownFields(), !0, e);
  return t;
};
var aE = function (e) {
    ((this.base = new Oe(e)),
      (this.playStart = new Jt(e, se.EVENT_TYPE.PLAY_ACTIVITY, At.PLAY_START_REASON)),
      (this.playStop = new Zt(e, se.EVENT_TYPE.PLAY_ACTIVITY, At.PLAY_STOP_REASON)),
      (this.seekStart = new Jt(e, se.EVENT_TYPE.SEEK_ACTIVITY, At.SEEK_START_REASON)),
      (this.seekStop = new Zt(e, se.EVENT_TYPE.SEEK_ACTIVITY, At.SEEK_STOP_REASON)));
  },
  Ra = function (e) {
    if (!f.isDefinedNonNull(e)) throw new Error("No delegate is provided to PlayActivityProcessor");
    ((this._initCalled = !1),
      (this._delegatePackage = e),
      (this.system = new XT()),
      (this.config = this._delegatePackage.config),
      (this.eventHandlers = new aE(this)),
      (this.utils = new JT(this)),
      (this.mediaActivityTracker = new Hr(this)));
  };
Ra.prototype.init = function () {
  var e = Promise.resolve();
  return (
    this._initCalled ||
      ((this._initCalled = !0),
      this._delegatePackage &&
        (f.setDelegates(this.eventHandlers, this._delegatePackage), f.setDelegates(this.system, this._delegatePackage)),
      FT(this.config),
      (e = this._delegatePackage.init()),
      (this._constraints = new KT(this.config, { environment: this.system.environment }))),
    e
  );
};
Ra.prototype.cleanup = function () {
  (this._delegatePackage && f.isFunction(this._delegatePackage.cleanup) && this._delegatePackage.cleanup(),
    this.config.cleanup(),
    f.resetDelegates(this.eventHandlers),
    f.resetDelegates(this.system),
    f.resetDelegates(this.utils),
    (this.config = null),
    (this.system = null),
    (this.eventHandlers = null),
    (this.utils = null),
    (this._delegatePackage = null),
    (this._constraints = null),
    (this._initCalled = !1));
};
const ud = {
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
  oE = /^[0-9]+\/JOC$/,
  cE = (r) => oE.test(r),
  lE = (r, e) => !!e && ud[r] === "EC3" && cE(e),
  uE = (r, e) => {
    var i, s;
    const t = (i = r == null ? void 0 : r.toLowerCase()) != null ? i : "";
    return lE(t, e) ? "Atmos" : (s = ud[t]) != null ? s : r;
  },
  dE = ["dvh1.05.01", "dvhe.05.06"],
  hE = { PQ: "HDR", HLG: "HDR", SDH: "SDH" },
  fE = (r) => dE.indexOf(r) !== -1,
  pE = (r) => {
    var e;
    return (e = hE[r]) != null ? e : r;
  },
  yE = (r, e) => (fE(r) ? "DolbyVision" : pE(e));
var We = ((r) => (
    (r.buffering = "buffering"),
    (r.idle = "idle"),
    (r.paused = "paused"),
    (r.playing = "playing"),
    (r.hlsMetadataPending = "hlsMetadataPending"),
    (r.hlsMetadataLoaded = "hlsMetadataLoaded"),
    r
  ))(We || {}),
  pe = ((r) => (
    (r.bufferStart = "BUFFER_START"),
    (r.bufferStop = "BUFFER_STOP"),
    (r.exit = "EXIT"),
    (r.play = "PLAY"),
    (r.pause = "PAUSE"),
    (r.stop = "STOP"),
    (r.next = "NEXT"),
    (r.newItem = "NEW"),
    (r.hlsMetadataPending = "HLS_METADATA_PENDING"),
    (r.hlsMetadataLoaded = "HLS_METADATA_LOADED"),
    r
  ))(pe || {});
const dd = "~~previous~~",
  Os = {
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
            context: { reason: "BUFFERING", manual: "AUTOMATIC", fromInitialPlay: dd },
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
  Ds = { manual: "UNKNOWN", reason: "UNKNOWN", fromInitialPlay: !1 };
class mE {
  constructor() {
    c(this, "currentState", Os.initial);
    c(this, "currentContext", Ds);
  }
  isAllowedTransition(e) {
    return this.getNextState(e) !== void 0;
  }
  transition(e, t = {}) {
    const i = this.getNextState(e);
    if (!i) return;
    E.debug(`[mk/activity/vpaf] Transitioning from ${this.currentState} to ${i.target} because ${e}`);
    const s = {};
    return (
      Qe(t, "manual") &&
        (t.manual !== void 0 ? (s.manual = t.manual ? "MANUAL" : "AUTOMATIC") : (s.manual = "UNKNOWN")),
      t.reason !== void 0 && (s.reason = t.reason),
      (this.currentContext = { ...Ds, ...i.context, ...s, ...this.preservePreviousContext(i.context) }),
      (this.currentState = i.target),
      this.currentContext
    );
  }
  reset() {
    ((this.currentState = Os.initial), (this.currentContext = Ds));
  }
  getNextState(e) {
    return Os.states[this.currentState].on[e];
  }
  preservePreviousContext(e) {
    const t = {};
    return (
      ["manual", "reason", "reasonType", "fromInitialPlay"].forEach((i) => {
        e[i] === dd && (t[i] = this.currentContext[i]);
      }),
      t
    );
  }
}
const pc = new Map([
    [P.playbackPlay, "play"],
    [P.hlsLevelLoaded, "hlsMetadataLoaded"],
    [P.playbackPause, "pause"],
    [P.playbackScrub, "scrub"],
    [P.playbackSeek, "seek"],
    [P.playbackSkip, "skip"],
    [P.playbackStop, "stop"],
    [P.playerExit, "exit"],
  ]),
  gE = {
    [R.EXITED_APPLICATION]: "EXIT",
    [R.FAILED_TO_LOAD]: "FAILURE",
    [R.MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM]: "PLAY_OTHER",
    [R.NATURAL_END_OF_TRACK]: "COMPLETE",
    [R.PLAYBACK_PAUSED_DUE_TO_INACTIVITY]: "INACTIVITY",
    [R.SCRUB_BEGIN]: "SEEK",
    [R.TRACK_SKIPPED_BACKWARDS]: "SEEK",
    [R.TRACK_SKIPPED_FORWARDS]: "SEEK",
    [R.PLAYBACK_SUSPENDED]: "CLOSE_PLAYER",
    [$l.NEXT_ITEM]: "NEXT",
  },
  D = {
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
  XE = {
    TYPE: { MANUAL: "manual", AUTOMATIC: "automatic", UNKNOWN: D.UNKNOWN },
    ASSET_PLACEMENT: {
      PRE_ROLL: "preroll",
      POST_ROLL: "postroll",
      MID_ROLL: "midroll",
      FEATURE: "feature",
      CATCH_UP_TO_LIVE: "catchUpToLive",
    },
    PLAY_START_REASON: {
      PLAY: D.PLAY,
      PLAY_OTHER: D.PLAY_OTHER,
      UNPAUSE: "unpause",
      NEXT: D.NEXT,
      PREVIOUS: D.PREVIOUS,
      SEEK: D.SEEK,
      TRANSITION: D.TRANSITION,
      INTERRUPTION: D.INTERRUPTION,
      FOREGROUND: "foreground",
      FOCUS: "focus",
      BUFFERING: D.BUFFERING,
      UNKNOWN: D.UNKNOWN,
      SKIP_TO_LIVE: D.SKIP_TO_LIVE,
    },
    PLAY_START_REASON_TYPE: { SKIP_INTRO: D.SKIP_INTRO, SKIP_TO_LIVE: D.SKIP_TO_LIVE },
    PLAY_STOP_REASON: {
      COMPLETE: "complete",
      TRANSITION: D.TRANSITION,
      PLAY_OTHER: D.PLAY_OTHER,
      PAUSE: "pause",
      SEEK: D.SEEK,
      NEXT: D.NEXT,
      INTERRUPTION: D.INTERRUPTION,
      BACKGROUND: "background",
      EXIT: "exit",
      INACTIVITY: "inactivity",
      BUFFERING: D.BUFFERING,
      ERROR: "error",
      FAILURE: "failure",
      UNKNOWN: D.UNKNOWN,
      CLOSE_PLAYER: "closePlayer",
      SKIP_TO_LIVE: D.SKIP_TO_LIVE,
    },
    PLAY_STOP_REASON_TYPE: { SKIP_INTRO: D.SKIP_INTRO, SKIP_TO_LIVE: D.SKIP_TO_LIVE },
    SEEK_START_REASON: {
      NEXT: D.NEXT,
      PREVIOUS: D.PREVIOUS,
      LOCATION: D.LOCATION,
      INTERVAL: D.INTERVAL,
      PLAYHEAD: D.PLAYHEAD,
      SCRUB: D.SCRUB,
      UNKNOWN: D.UNKNOWN,
      SKIP_INTRO: D.SKIP_INTRO,
    },
    SEEK_STOP_REASON: {
      NEXT: D.NEXT,
      PREVIOUS: D.PREVIOUS,
      LOCATION: D.LOCATION,
      INTERVAL: D.INTERVAL,
      PLAYHEAD: D.PLAYHEAD,
      SCRUB: D.SCRUB,
      UNKNOWN: D.UNKNOWN,
      SEEK: D.SEEK,
      SKIP_INTRO: D.SKIP_INTRO,
    },
    SEEK_STOP_REASON_TYPE: { SKIP_INTRO: D.SKIP_INTRO },
  };
var ce = ((r) => (
  (r.SEEK_STARTED = "seekStarted"),
  (r.SEEK_STOPPED = "seekStopped"),
  (r.PLAY_STARTED = "playStarted"),
  (r.PLAY_STOPPED = "playStopped"),
  r
))(ce || {});
const kn = "xp_amp_tv_vpaf",
  vE = "daf.xp.apple.com",
  bE = "com.apple.tv",
  _E = "web-tv-player",
  TE = "1.0",
  EE = "TV",
  SE = {
    [P.playbackPause]: pe.pause,
    [P.playbackPlay]: pe.play,
    [P.hlsLevelLoaded]: pe.hlsMetadataLoaded,
    [P.playbackStop]: pe.stop,
    [P.playerExit]: pe.exit,
  },
  yc = { [Ne.pictureinpicture]: "pictureInPicture", [Ne.inline]: "foreground", _default: "foreground" };
function Di(r) {
  return Math.round(r * 1e3);
}
function IE() {
  return Array.isArray(navigator.languages)
    ? navigator.languages
    : typeof navigator.language == "string"
      ? [navigator.language]
      : [];
}
function hd(r) {
  return { delegatedPlayback: r.playbackTargetIsWireless ? "Airplay" : "None" };
}
function mc(r) {
  return r.seekReasonType === _e.Interval;
}
function Ca(r, e) {
  if (r == null) throw new Error(e);
}
function Vt(r, e) {
  Ca(r, `${e != null ? e : "PAF"} Tracker: Attempted to track event without first calling createTracker()`);
}
function Ns(r, e) {
  Ca(r, `${e != null ? e : "PAF"} Tracker: Attempted to create tracker without first calling configure()`);
}
function kE(r, e) {
  var s;
  const t = r.defaultPlayable;
  if (t.type === "EbsEvent") return;
  let i = parseFloat((s = r.hlsMetadata["feature.duration"]) != null ? s : t.duration);
  for (const n of e) i += n.duration;
  return Di(i);
}
function gc(r) {
  var t;
  const e = {
    url: r.attributes.url,
    assetId: (t = r == null ? void 0 : r.hlsMetadata) == null ? void 0 : t["feature.adam-id"],
  };
  return (
    r.isLinearStream || (e.assetPlacement = "feature"),
    r.attributes.isAdultContent === !0 && (e.sensitiveContentType = "adult"),
    e
  );
}
function PE(r) {
  return r.map((e) => {
    var i;
    const t = {
      start: e.start,
      duration: e.duration,
      metricsData: { assetPlacement: e.type.replace("-", ""), assetId: e["adam-id"], isSkippable: e.skippable },
    };
    return (
      (e["dynamic-id"] || e["dynamic-slot.data-set-id"]) &&
        (t.metricsData["data.dynamicSlot.dataSetId"] =
          (i = e["dynamic-id"]) != null ? i : e["dynamic-slot.data-set-id"]),
      t
    );
  });
}
function fd(r) {
  var a, o, l;
  const { currentAudioTrack: e, nowPlayingItem: t } = r;
  let i, s;
  (e == null ? void 0 : e.kind) === "description"
    ? ((s = e == null ? void 0 : e.language), (i = void 0))
    : ((s = void 0),
      (i =
        (l = e == null ? void 0 : e.language) != null
          ? l
          : (o = (a = t == null ? void 0 : t.defaultPlayable) == null ? void 0 : a.primaryLocale) == null
            ? void 0
            : o.locale));
  let n;
  if (t != null && t.isLinearStream && e) {
    const u = vp(e);
    el(e) ? (n = sn.Home) : tl(e) ? (n = sn.Away) : u && (n = u);
  }
  return { audioLocale: i, audioDescriptionLocale: s, audioVariantId: n };
}
function AE(r) {
  var i;
  const { language: e, kind: t } = (i = r.currentTextTrack) != null ? i : {};
  return t === "captions"
    ? { subtitleLocale: void 0, closedCaptionLocale: e }
    : t === "subtitles"
      ? { subtitleLocale: e, closedCaptionLocale: void 0 }
      : { subtitleLocale: void 0, closedCaptionLocale: void 0 };
}
function vc(r, e) {
  return { ...DE(), ...NE(e), ...CE(e), ...OE(r), ...fd(r), ...AE(r), ...hd(r) };
}
function qe(r, e) {
  if (e != null && e.isLinearStream) {
    if (r.playingDate === void 0)
      throw new Error('VPAFTracker: The property `playingDate` is required on data for "linear" content');
    return r;
  }
  if (r.position === void 0) throw new Error('VPAFTracker: The property `position` is required on data "vod" content');
  return r;
}
function xe(r, e) {
  var t;
  if (r != null && r.isLinearStream) {
    if (e.playingDate === void 0)
      throw new Error("VPAF: Can't report playback position for linear stream without playingDate value");
    return e.playingDate.getTime();
  }
  return Di((t = e.position) != null ? t : 0);
}
function ai(r) {
  return r.seekReasonType === _e.SkipIntro;
}
function wE(r) {
  return r.seekReasonType === _e.SkipToLiveManual || r.seekReasonType === _e.SkipToLiveAutomatic;
}
function RE(r) {
  if (r.endReasonType !== void 0) return gE[r.endReasonType];
}
function pr(r) {
  return { manual: r.userInitiated, reason: RE(r) };
}
function pd(r) {
  return {
    start: r.startTime,
    duration: r.endTime - r.startTime,
    metricsData: { assetId: r.id, assetPlacement: "catchUpToLive", isSkippable: !0 },
  };
}
function bc(r) {
  const e = pd(r);
  return ((e.start = e.start / 1e3), (e.duration = e.duration / 1e3), e);
}
function CE(r) {
  return r.defaultPlayable.vpafMetrics;
}
function OE(r) {
  var t;
  const e = (t = r.videoContainerElement) == null ? void 0 : t.querySelector("video");
  return {
    videoViewportHeight: e == null ? void 0 : e.clientHeight,
    videoViewportWidth: e == null ? void 0 : e.clientWidth,
  };
}
function DE() {
  return { downloadState: "streaming", playbackFocus: "foreground", topic: kn };
}
function NE(r) {
  return { programmingType: r.isLinearStream ? "live" : "videoOnDemand" };
}
var LE = Object.defineProperty,
  ME = Object.getOwnPropertyDescriptor,
  ht = (r, e, t, i) => {
    for (var s = i > 1 ? void 0 : i ? ME(e, t) : e, n = r.length - 1, a; n >= 0; n--)
      (a = r[n]) && (s = (i ? a(e, t, s) : a(s)) || s);
    return (i && s && LE(e, t, s), s);
  };
const B = E.createChild("vpaf"),
  et = "VPAF";
class ft {
  constructor() {
    c(this, "_currentItem");
    c(this, "playActivityProcessor");
    c(this, "currentKeyPlay");
    c(this, "currentSkipItems");
    c(this, "dispatcher");
    c(this, "instance");
    c(this, "isScrubbing", !1);
    c(this, "isBuffering", !1);
    c(this, "rollItemsTracker");
    c(this, "scrubStopPosition");
    c(this, "tracker");
    c(this, "synchronizeTimeout");
    c(this, "state");
    c(this, "lastTrackedEvent");
    this.state = new mE();
  }
  get requestedEvents() {
    return Array.from(pc.keys());
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  get currentItem() {
    return this._currentItem;
  }
  set currentItem(e) {
    ((this._currentItem = e), (this.currentSkipItems = e ? Nl(e) : void 0));
  }
  async configure(e) {
    if (((this.instance = e.instance), (this.dispatcher = e.services.dispatcher), !A.storekit.cid))
      try {
        await A.storekit.infoRefresh();
      } catch (a) {}
    const t = e.services.utsAPIClient,
      i = IE(),
      s = {
        config: { configHostname: () => vE },
        environment: {
          app() {
            return bE;
          },
          appVersion() {
            return TE;
          },
          consumerId() {
            return A.storekit.cid;
          },
          consumerNs() {
            return EE;
          },
          isOffline() {
            return !1;
          },
          delegateApp() {
            return _E;
          },
          osLanguages() {
            return i;
          },
          resourceRevNum() {
            return Q.app.build;
          },
          storeFrontCountryCode() {
            var a, o, l;
            return (l =
              (o = (a = t == null ? void 0 : t.configuration) == null ? void 0 : a.userProps) == null
                ? void 0
                : o.country) != null
              ? l
              : "";
          },
        },
      },
      n = new nt(kn, s);
    (n.eventRecorder.setProperties(kn, { anonymous: !A.isAuthorized }),
      (this.playActivityProcessor = new Ra(n)),
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
    const i = t.defaultPlayable;
    if (!i || !i.vpafMetrics) return !1;
    const s = SE[e];
    return s !== void 0 ? this.state.isAllowedTransition(s) : !0;
  }
  handleEvent(e, t, i) {
    if (!this.shouldTrackPlayActivity(e, i)) return;
    const s = pc.get(e);
    s !== void 0 && typeof this[s] == "function" && this[s](i, t);
  }
  async bufferStart(e, t) {
    var n;
    if ((B.debug("VPAFTracker: handling bufferStart()"), !(await this.canTrackItem(e)))) {
      B.debug("VPAFTracker: aborting bufferStart, no tracker");
      return;
    }
    if (this.state.currentState !== We.playing) {
      B.debug("VPAFTracker: aborting bufferStart, not playing");
      return;
    }
    if (((n = this.lastTrackedEvent) == null ? void 0 : n.reason) === "seek") {
      B.debug("VPAFTracker: aborting bufferStart, after a seek");
      return;
    }
    const i = this.state.currentContext.fromInitialPlay,
      s = xe(e, qe(t, e));
    (this.state.transition(pe.bufferStart),
      i
        ? B.debug("VPAFTracker: bufferStart() not tracking PLAY_STOPPED, it is from initial play")
        : await this.trackEvent(ce.PLAY_STOPPED, s));
  }
  async bufferEnd(e, t) {
    var n;
    if ((B.debug("VPAFTracker: handling bufferEnd()"), !(await this.canTrackItem(e)))) return;
    if (this.state.currentState !== We.buffering) {
      B.debug("VPAFTracker: aborting bufferEnd, not buffering");
      return;
    }
    if (((n = this.lastTrackedEvent) == null ? void 0 : n.reason) === "seek") {
      B.debug("VPAFTracker: aborting bufferEnd, after a seek");
      return;
    }
    const i = this.state.currentContext.fromInitialPlay,
      s = xe(e, qe(t, e));
    (this.state.transition(pe.bufferStop),
      i
        ? B.debug("VPAFTracker: bufferEnd() not tracking PLAY_STARTED, it is from initial play")
        : await this.trackEvent(ce.PLAY_STARTED, s));
  }
  async exit(e, t = {}) {
    (await this.canTrackItem(this.currentItem)) &&
      (B.debug("VPAFTracker.exit()"),
      this.state.transition(pe.exit),
      await this.trackEvent(ce.PLAY_STOPPED, xe(void 0, qe(t, t.item))),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async pause(e, t = {}) {
    if (!(await this.canTrackItem(e))) return;
    B.debug("VPAFTracker.pause()");
    const i = xe(e, qe(t, e)),
      s = t.endReasonType === $l.NEXT_ITEM ? pe.next : pe.pause;
    (this.state.transition(s, pr(t)), await this.trackEvent(ce.PLAY_STOPPED, i));
  }
  async play(e, t = {}) {
    if (!(await this.canTrackItem(e))) return;
    if (e.isLinearStream && !t.playingDate) {
      (B.debug("VPAFTracker.play() - going to metadata pending state"),
        this.state.transition(pe.hlsMetadataPending, pr(t)));
      return;
    }
    B.debug("VPAFTracker.play()");
    const i = xe(e, { position: 0, ...t });
    (this.state.transition(pe.play, pr(t)), await this.trackEvent(ce.PLAY_STARTED, i));
  }
  async scrub(e, t = {}) {
    if (e === void 0 || t.position === void 0) return;
    const i = xe(e, qe(t, e));
    if (this.isScrubbing && t.endReasonType === void 0) {
      this.scrubStopPosition = i;
      return;
    }
    this.isScrubbing && this.scrubEnd(e, i);
  }
  async seek(e, t = {}) {
    if (
      e !== void 0 &&
      !(e.isLinearStream && (t.playingDate === void 0 || t.startPlayingDate === void 0)) &&
      !(!e.isLinearStream && (t.position === void 0 || t.startPosition === void 0))
    ) {
      if (wE(t)) return this.trackJumpToLive(e, t);
      if (e.currentKeyPlay) return this.currentKeyPlay ? this.trackJumpToKeyPlay(e, t) : this.trackEnterKeyPlay(e);
      if (this.currentKeyPlay) return this.trackExitKeyPlay(e, t);
      ai(t) || mc(t) ? await this.trackSeek(e, t) : await this.trackScrub(e, t);
    }
  }
  async skip(e, t = {}) {}
  async stop(e, t = {}) {
    if (!(await this.canTrackItem(e))) return;
    B.debug("VPAFTracker.stop()");
    const i = xe(e, qe(t, e));
    (this.state.transition(pe.stop, pr(t)),
      await this.trackEvent(ce.PLAY_STOPPED, i),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async lyricsPlay(e, t) {}
  async lyricsStop() {}
  async trackSeek(e, t) {
    const i = {},
      s = this.getSkipActionName(t.position);
    ai(t) && typeof s == "string" && (i.actionName = s);
    const n = { ...t, position: t.startPosition, playingDate: t.startPlayingDate };
    (await this.trackSeekStart(e, n, i), await this.trackSeekStop(e, t, i));
  }
  async trackEnterKeyPlay(e) {
    if ((B.debug("VPAFTracker.trackEnterKeyPlay"), !(await this.canTrackItem(e)))) return;
    (await this.createRollItemsTracker(e),
      this.assertRollItemsTracker(this.rollItemsTracker),
      (this.currentKeyPlay = bc(e.currentKeyPlay)));
    const t = this.currentKeyPlay.start * 1e3;
    await this.rollItemsTracker.playStarted(
      t,
      this.rollItemsTracker.TYPE.MANUAL,
      this.rollItemsTracker.PLAY_START_REASON.PLAY,
      { ...this.currentKeyPlay },
    );
  }
  async trackExitKeyPlay(e, t) {
    (B.debug("VPAFTracker.trackExitKeyPlay"), this.assertRollItemsTracker(this.rollItemsTracker), Vt(this.tracker, et));
    const i = xe(e, qe(t, e));
    (await this.rollItemsTracker.playStopped(
      i,
      this.rollItemsTracker.TYPE.MANUAL,
      this.rollItemsTracker.PLAY_STOP_REASON.PLAY_OTHER,
      this.currentKeyPlay,
    ),
      await this.tracker.playStarted(
        i,
        this.rollItemsTracker.TYPE.MANUAL,
        this.rollItemsTracker.PLAY_STOP_REASON.PLAY_OTHER,
      ),
      (this.currentKeyPlay = void 0));
  }
  async trackJumpToLive(e, t) {
    (B.debug("VPAFTracker.trackJumpToLive"), this.assertRollItemsTracker(this.rollItemsTracker));
    const i = xe(e, qe(t, e)),
      s = t.startPlayingDate.getTime(),
      n =
        t.seekReasonType === _e.SkipToLiveManual
          ? this.rollItemsTracker.TYPE.MANUAL
          : this.rollItemsTracker.TYPE.AUTOMATIC;
    (await this.rollItemsTracker.playStopped(s, n, this.rollItemsTracker.PLAY_STOP_REASON.SEEK, {
      ...this.currentKeyPlay,
      stopReasonType: this.rollItemsTracker.PLAY_STOP_REASON_TYPE.SKIP_TO_LIVE,
    }),
      (this.currentKeyPlay = void 0),
      await this.trackEvent(ce.SEEK_STARTED, s, n, this.rollItemsTracker.PLAY_START_REASON.SKIP_TO_LIVE),
      await this.trackEvent(ce.SEEK_STOPPED, i, n, this.rollItemsTracker.PLAY_START_REASON.SKIP_TO_LIVE),
      await this.trackEvent(ce.PLAY_STARTED, i, n, this.rollItemsTracker.PLAY_START_REASON.SEEK, {
        startReasonType: this.rollItemsTracker.PLAY_START_REASON_TYPE.SKIP_TO_LIVE,
      }));
  }
  async trackJumpToKeyPlay(e, t) {
    (B.debug("VPAFTracker.trackJumpToKeyPlay"), this.assertRollItemsTracker(this.rollItemsTracker));
    const i =
        t.seekReasonType === _e.Automatic ? this.rollItemsTracker.TYPE.AUTOMATIC : this.rollItemsTracker.TYPE.MANUAL,
      s = (this.currentKeyPlay.start + this.currentKeyPlay.duration) * 1e3,
      n = Math.min(t.startPlayingDate.getTime(), s),
      a = bc(e.currentKeyPlay),
      o = a.start * 1e3,
      l = this.rollItemsTracker.PLAY_STOP_REASON.NEXT;
    (await this.rollItemsTracker.playStopped(n, i, l, this.currentKeyPlay),
      await this.rollItemsTracker.playStarted(o, i, l, a),
      (this.currentKeyPlay = a));
  }
  async trackSeekStart(e, t, i = {}) {
    Vt(this.tracker, et);
    const s =
        t.seekReasonType === _e.SkipIntro
          ? this.tracker.SEEK_START_REASON.SKIP_INTRO
          : this.tracker.SEEK_START_REASON.INTERVAL,
      n = xe(e, qe(t, e)),
      a = this.tracker.TYPE.MANUAL;
    if (this.state.currentState === We.playing) {
      const o = ai(t) ? { ...i, stopReasonType: this.tracker.PLAY_STOP_REASON_TYPE.SKIP_INTRO } : i;
      await this.trackEvent(ce.PLAY_STOPPED, n, a, this.tracker.PLAY_STOP_REASON.SEEK, o);
    }
    await this.trackEvent(ce.SEEK_STARTED, n, a, s, i);
  }
  async trackSeekStop(e, t, i = {}) {
    Vt(this.tracker, et);
    const s = mc(t) ? this.tracker.SEEK_STOP_REASON.INTERVAL : this.tracker.SEEK_STOP_REASON.SKIP_INTRO,
      n = xe(e, qe(t, e)),
      a = this.tracker.TYPE.AUTOMATIC;
    if ((await this.trackEvent(ce.SEEK_STOPPED, n, a, s, i), this.state.currentState === We.playing)) {
      const o = ai(t) ? { ...i, startReasonType: this.tracker.PLAY_START_REASON_TYPE.SKIP_INTRO } : i;
      await this.trackEvent(ce.PLAY_STARTED, n, a, this.tracker.PLAY_START_REASON.SEEK, o);
    }
  }
  async trackScrub(e, t) {
    const i = e.isLinearStream ? t.playingDate.getTime() : Di(t.position),
      s = e.isLinearStream ? t.startPlayingDate.getTime() : Di(t.startPosition);
    (await this.scrubStart(e, s), await this.scrubEnd(e, i));
  }
  async scrubStart(e, t) {
    (await this.canTrackItem(e)) &&
      (Vt(this.tracker, et),
      (this.isScrubbing = !0),
      (this.scrubStopPosition = t),
      this.state.currentState === We.playing &&
        (await this.trackEvent(
          ce.PLAY_STOPPED,
          this.scrubStopPosition,
          this.tracker.TYPE.AUTOMATIC,
          this.tracker.PLAY_STOP_REASON.SEEK,
        )),
      await this.trackEvent(ce.SEEK_STARTED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.SCRUB));
  }
  async scrubEnd(e, t) {
    (Vt(this.tracker, et),
      await this.trackEvent(ce.SEEK_STOPPED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_STOP_REASON.SCRUB),
      this.state.currentState === We.playing &&
        (await this.trackEvent(ce.PLAY_STARTED, t, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.SEEK)),
      (this.isScrubbing = !1),
      (this.scrubStopPosition = void 0));
  }
  async trackEvent(e, t, i, s, n) {
    (Vt(this.tracker, et),
      i === void 0 && (i = this.tracker.TYPE[this.state.currentContext.manual]),
      s === void 0 &&
        (s =
          e === ce.PLAY_STARTED
            ? this.tracker.PLAY_START_REASON[this.state.currentContext.reason]
            : this.tracker.PLAY_STOP_REASON[this.state.currentContext.reason]),
      B.debug(`VPAFTracker.trackEvent(${e}, ${t}, ${i}, ${s})`, n),
      await this.tracker[e].call(this.tracker, Math.round(t), i, s, n),
      (this.lastTrackedEvent = { eventType: e, position: t, type: i, reason: s, namedArgs: n }));
  }
  async createTracker(e) {
    Ns(this.playActivityProcessor, et);
    const { mediaActivityTracker: t } = this.playActivityProcessor,
      i = gc(e),
      s = PE(Ei(e));
    B.debug("VPAF: Creating HLS Playlist", i);
    const n = t.createHLSVideoPlaylist(0, i);
    return (
      B.debug("VPAF: adding roll items", s),
      n.addRollInfoItems(s),
      B.debug(`VPAFTracker.createTracker: creating new tracker for ${e == null ? void 0 : e.id}`),
      (this.tracker = t.createTracker(n, ...(await this.getMappedPlaybackFields(e)), vc(this.instance, e), {
        overallLength: kE(e, s),
        featureAssetId: i.assetId,
      })),
      this.startSynchronizing(),
      this.tracker
    );
  }
  async createRollItemsTracker(e) {
    var s, n;
    Ns(this.playActivityProcessor, et);
    const t = gc(e),
      i = this.playActivityProcessor.mediaActivityTracker.createHLSVideoPlaylist(0, t);
    return (
      e.keyPlayShelf.forEach((a) => {
        const o = pd(a);
        i.addRollItem(o.start, o.duration, o.metricsData);
        const l = i.getItemForRollItem(o.start, o.duration);
        l.startPosition = o.start;
      }),
      (this.rollItemsTracker =
        (n = this.playActivityProcessor) == null
          ? void 0
          : n.mediaActivityTracker.createHLSRollItemsMediaActivityTracker(
              i,
              ...(await this.getMappedPlaybackFields(e)),
              vc(this.instance, e),
              {
                extraType: "CatchUpToLive",
                featureAssetId: t.assetId,
                featureCanonicalId: (s = e.defaultPlayable) == null ? void 0 : s.canonicalId,
              },
            )),
      this.rollItemsTracker
    );
  }
  async onPlaybackStateChange(e, t) {
    var l;
    const { state: i } = t,
      s = this.currentItem,
      n = {
        position: this.instance.currentPlaybackTime,
        playingDate: this.instance.currentPlayingDate,
        userInitiated: (l = t.userInitiated) != null ? l : !1,
      },
      a = `PlaybackStates.${V[t.oldState]}`,
      o = `PlaybackStates.${V[t.state]}`;
    (B.debug(`onPlaybackStateChange: ${a} -> ${o}`, n),
      i === V.waiting
        ? ((this.isBuffering = !0),
          B.debug("VPAFTracker.onPlaybackStateChange: triggering bufferStart()", n),
          await this.bufferStart(s, n))
        : i === V.playing
          ? (this.isBuffering || this.state.currentState === We.buffering) &&
            ((this.isBuffering = !1),
            B.debug("VPAFTracker.onPlaybackStateChange: triggering bufferEnd()", n),
            await this.bufferEnd(s, n))
          : i !== V.stalled &&
            (B.debug("VPAFTracker.onPlaybackStateChange: resetting isBuffering=false"), (this.isBuffering = !1)));
  }
  async handleLevelUpdated(e, t) {
    var l, u, d;
    B.debug("VPAFTracker.handleLevelUpdated()", t);
    const { audioCodec: i, audioChannelCount: s, videoRange: n, videoCodec: a } = t.level;
    if (!i && !(n && a)) return;
    const o = {};
    (i && (o.audioFormat = uE(i, s)),
      n && a && (o.videoColorRange = yE(a, n)),
      (l = this.tracker) == null || l.updateData(o),
      (u = this.rollItemsTracker) == null || u.updateData(o),
      ((d = this.state) == null ? void 0 : d.currentState) === We.hlsMetadataPending &&
        (B.debug("VPAF: HLS metadata loaded", t),
        this.state.transition(pe.hlsMetadataLoaded, pr(t)),
        await this.play(this.currentItem, t)));
  }
  handleAudioTrackChange() {
    var t;
    if (this.tracker === void 0 || this.instance === void 0) return;
    const e = fd(this.instance);
    e &&
      (B.debug("Updating AudioData", e),
      this.tracker.updateData(e),
      (t = this.rollItemsTracker) == null || t.updateData(e));
  }
  handleForcedTextTrackChange(e, { textTrack: t }) {
    var s, n;
    const i = { forcedSubtitleLocale: t == null ? void 0 : t.language };
    ((s = this.tracker) == null || s.updateData(i), (n = this.rollItemsTracker) == null || n.updateData(i));
  }
  handlePresentationModeChange(e, { mode: t }) {
    var s, n, a;
    const i = { playbackFocus: (s = yc[t]) != null ? s : yc._default };
    ((n = this.tracker) == null || n.updateData(i), (a = this.rollItemsTracker) == null || a.updateData(i));
  }
  handleTargetWirelessChange() {
    var e, t;
    if (this.instance !== void 0) {
      const i = hd(this.instance);
      ((e = this.tracker) == null || e.updateData(i), (t = this.rollItemsTracker) == null || t.updateData(i));
    }
  }
  handleTextTrackChange() {
    var n, a;
    const { tracker: e } = this;
    if (e === void 0) return;
    const t = (n = this.instance) == null ? void 0 : n.currentTextTrack;
    if (!t || (t.kind !== "captions" && (t == null ? void 0 : t.kind) !== "subtitles")) return;
    const i = t.language === "" ? void 0 : t.language,
      s = {
        closedCaptionLocale: t.kind === "captions" ? i : void 0,
        subtitleLocale: t.kind === "subtitles" ? i : void 0,
      };
    (e.updateData(s), (a = this.rollItemsTracker) == null || a.updateData(s));
  }
  handleNowPlayingItemDidChange(e, t) {
    const { item: i } = t;
    i ||
      (B.debug("handleNowPlayingItemDidChange: calling exit and clearing currentItem"),
      this.state.transition(pe.exit),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async canTrackItem(e) {
    var t;
    return e === void 0 || e.defaultPlayable === void 0
      ? !1
      : (((t = this.currentItem) == null ? void 0 : t.id) !== e.id &&
          (this.state.transition(pe.newItem), (this.currentItem = e), await this.createTracker(e)),
        this.tracker !== void 0);
  }
  getSkipActionName(e) {
    var i;
    const t = ((i = this.currentSkipItems) != null ? i : []).find((s) => s.target === e);
    return t == null ? void 0 : t.label;
  }
  setupListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.subscribe(_.audioTrackChanged, this.handleAudioTrackChange),
      this.dispatcher.subscribe(_.textTrackChanged, this.handleTextTrackChange),
      this.dispatcher.subscribe(_.forcedTextTrackChanged, this.handleForcedTextTrackChange),
      this.dispatcher.subscribe(_.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.subscribe(_.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.subscribe(P.hlsLevelUpdated, this.handleLevelUpdated),
      this.dispatcher.subscribe(_.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange),
      this.dispatcher.subscribe(_.presentationModeDidChange, this.handlePresentationModeChange));
  }
  teardownListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.unsubscribe(_.audioTrackChanged, this.handleAudioTrackChange),
      this.dispatcher.unsubscribe(_.textTrackChanged, this.handleTextTrackChange),
      this.dispatcher.unsubscribe(_.forcedTextTrackChanged, this.handleForcedTextTrackChange),
      this.dispatcher.unsubscribe(_.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.unsubscribe(_.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.unsubscribe(P.hlsLevelUpdated, this.handleLevelUpdated),
      this.dispatcher.unsubscribe(_.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange),
      this.dispatcher.unsubscribe(_.presentationModeDidChange, this.handlePresentationModeChange));
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
    const e = this.state.currentState === We.paused,
      { playbackRate: t, currentPlaybackTime: i } = this.instance,
      s = e ? 0 : t,
      n = Math.round(i * 1e3);
    (B.debug(`VPAF: synchronize rate: ${s} and current time: ${n}`), this.tracker.synchronize(s, n));
  }
  assertRollItemsTracker(e) {
    Ca(e, "VPAFTracker: Attempted to track roll item event before `trackerEnterKeyPlay` was called");
  }
  async getMappedPlaybackFields(e) {
    Ns(this.playActivityProcessor, et);
    const { utils: t } = this.playActivityProcessor,
      i = e.defaultPlayable,
      s = await t.eventFields.applyFieldsMap(i, "utsVpafPlayable"),
      n = await t.eventFields.applyFieldsMap(e.attributes, "utsVpafContent");
    return [s, n];
  }
}
ht([S()], ft.prototype, "onPlaybackStateChange", 1);
ht([S()], ft.prototype, "handleLevelUpdated", 1);
ht([S()], ft.prototype, "handleAudioTrackChange", 1);
ht([S()], ft.prototype, "handleForcedTextTrackChange", 1);
ht([S()], ft.prototype, "handlePresentationModeChange", 1);
ht([S()], ft.prototype, "handleTargetWirelessChange", 1);
ht([S()], ft.prototype, "handleTextTrackChange", 1);
ht([S()], ft.prototype, "handleNowPlayingItemDidChange", 1);
ht([S()], ft.prototype, "synchronize", 1);
const Ie = E.createChild("ctp"),
  Oa = class {
    constructor() {
      c(this, "_isConfigured", !1);
      c(this, "tracking");
      c(this, "instance");
      c(this, "rtcTracker");
      c(this, "requestedEvents", [_.playInitiated, _.mediaCanPlay]);
    }
    get active() {
      return this.rtcTracker !== void 0;
    }
    get isConfigured() {
      return this._isConfigured;
    }
    async configure(e) {
      var t;
      ((this.instance = e.instance),
        (this.rtcTracker = (t = e.services.playActivity) == null ? void 0 : t.getTrackerByType(Jl)),
        (this._isConfigured = !0));
    }
    handleEvent(e, t, i) {
      e === _.playInitiated
        ? (Ie.debug("ClickToPlayTracker.handleEvent", e, t), this.registerPlay(t.item, t.timestamp))
        : e === _.mediaCanPlay &&
          (Ie.debug("ClickToPlayTracker.handleEvent", e, t), this.trackPlay(this.instance.nowPlayingItem, t.timestamp));
    }
    registerPlay(e, t) {
      if (!this.active || e === void 0) {
        Ie.debug("Not registring play: inactive");
        return;
      }
      if (t === void 0) {
        Ie.warn(`registerPlay timestamp value for item ${e.id} is missing, discarding`);
        return;
      }
      return (
        this.tracking !== void 0 && Ie.warn(`Replacing item ${this.tracking.item.id} with item ${e.id}`),
        Ie.debug(`Registering ${e.id} initiated at ${t}`),
        (this.tracking = { item: e, initiatedTimestamp: t }),
        this.tracking
      );
    }
    trackPlay(e, t) {
      if (!this.active || e === void 0) {
        Ie.debug("Not tracking play: inactive");
        return;
      }
      if (this.tracking === void 0) {
        Ie.warn("ClickToPlayTracker.trackPlay called without a registered tracking item");
        return;
      }
      const i = t != null ? t : Date.now(),
        s = this.tracking.initiatedTimestamp,
        n = i - s;
      if ((Ie.debug(`trackPlay: item=${e.id}, initiated=${s}, started=${i}, timestampDiff=${n}`), s > i)) {
        Ie.warn("Initiated timestamp is not before started timestamp, ignoring");
        return;
      }
      const a = this.getReportingAgent(e);
      if (a === void 0) {
        Ie.warn(`No reporting agent for ${e.id}, discarding`);
        return;
      }
      return (
        Ie.info(`Reporting playback success after ${n}ms`),
        a.issueReportingEvent(Oa.EVENT_ID, {
          event: "playbackStartup",
          playbackStartupResult: "success",
          tapToFirstFrame: n,
          PlayType: e.isLinearStream ? "LIVE" : "VOD",
        }),
        (this.tracking = void 0),
        { item: e, initiatedTimestamp: s, playbackTimestamp: i }
      );
    }
    getReportingAgent(e) {
      var n;
      if (this.rtcTracker === void 0) {
        Ie.warn("Could not get RTCReportingAgent from RTCStreamingTracker service");
        return;
      }
      const t = this.rtcTracker.getMediaIdentifiers(e),
        i = (n = this.rtcTracker.reportingAgent) == null ? void 0 : n.SessionInfo;
      if (t === void 0 || i === void 0) return;
      if (
        !Object.entries(t).every(function ([a, o]) {
          return i[a] === o;
        })
      ) {
        Ie.warn(`RTCReportingAgent is not associated with item ${e.id}`);
        return;
      }
      return this.rtcTracker.reportingAgent;
    }
  };
let Ls = Oa;
c(Ls, "EVENT_ID", 4101);
function UE() {
  var s, n, a, o, l, u, d, p, y, g, k, w, M, $, me, oe, de, ke, re, Pe;
  const r = {};
  r.version = Dl();
  const e = wl();
  ((r.hlsJSURL = e.hls),
    (r.rtcJSURL = e.rtc),
    (r.hlsJSVersion = window.Hls !== void 0 ? window.Hls.version : "not-loaded"));
  const t = Jb();
  r.instanceId = t == null ? void 0 : t.id;
  const i = t == null ? void 0 : t.services.runtime;
  return (
    (r.runtime =
      i === void 0
        ? void 0
        : {
            browser: `${i.browser.name} ${i.browser.version}`,
            engine: `${i.engine.name} ${i.engine.version}`,
            os: `${i.os.name} ${i.os.version}`,
            mobile: i.isMobile,
            keysystems: i.availableKeySystems,
          }),
    (r.controller =
      (n = (s = t == null ? void 0 : t._playbackController) == null ? void 0 : s.controllerName) != null ? n : "none"),
    (r.player =
      (l =
        (o = (a = t == null ? void 0 : t._mediaItemPlayback) == null ? void 0 : a.getCurrentPlayer()) == null
          ? void 0
          : o.playerName) != null
        ? l
        : "none"),
    (r.queue = {
      size: (d = (u = t == null ? void 0 : t.queue) == null ? void 0 : u.length) != null ? d : 0,
      position: (y = (p = t == null ? void 0 : t.queue) == null ? void 0 : p.position) != null ? y : -1,
      currentItem:
        ((g = t == null ? void 0 : t.queue) == null ? void 0 : g.currentItem) === void 0
          ? void 0
          : {
              id: (k = t == null ? void 0 : t.queue) == null ? void 0 : k.currentItem.id,
              type: (w = t == null ? void 0 : t.queue) == null ? void 0 : w.currentItem.type,
              title: (M = t == null ? void 0 : t.queue) == null ? void 0 : M.currentItem.title,
              attributes:
                (me = ($ = t == null ? void 0 : t.queue) == null ? void 0 : $.currentItem.attributes) != null ? me : {},
            },
    }),
    (r.nowPlayingItem =
      (t == null ? void 0 : t.nowPlayingItem) === void 0
        ? void 0
        : {
            id: t.nowPlayingItem.id,
            type: t.nowPlayingItem.type,
            title: t.nowPlayingItem.title,
            attributes:
              (de = (oe = t == null ? void 0 : t.queue) == null ? void 0 : oe.currentItem.attributes) != null ? de : {},
          }),
    (r.isPlaying = (ke = t == null ? void 0 : t.isPlaying) != null ? ke : !1),
    (r.playbackModes = {
      shuffle: ["off", "on"][(re = t == null ? void 0 : t.shuffleMode) != null ? re : 0],
      repeat: ["off", "one", "all"][(Pe = t == null ? void 0 : t.repeatMode) != null ? Pe : 0],
      autoplay: (t == null ? void 0 : t.autoplayEnabled) === !0 ? "on" : "off",
    }),
    (r.devFlags = Object.entries(vr).reduce(function (rs, [is, yd]) {
      return { ...rs, [is]: yd.value };
    }, {})),
    r
  );
}
const JE = {
  get info() {
    return UE();
  },
  ...vr,
};
export {
  Se as $,
  Qe as A,
  Hh as B,
  Pt as C,
  xh as D,
  _ as E,
  Sr as F,
  Ad as G,
  $h as H,
  kt as I,
  Wh as J,
  jh as K,
  Li as L,
  kr as M,
  BE as N,
  vt as O,
  gt as P,
  Bl as Q,
  wn as R,
  le as S,
  mt as T,
  Bi as U,
  $l as V,
  T as W,
  q as X,
  h as Y,
  E as Z,
  P as _,
  Ft as a,
  $E as a0,
  ah as a1,
  wg as a2,
  jE as a3,
  Q as a4,
  A as a5,
  Kh as a6,
  Vh as a7,
  Bh as a8,
  HE as a9,
  Ls as aA,
  GE as aB,
  nu as aC,
  WE as aD,
  rt as aE,
  vv as aF,
  Dh as aa,
  ae as ab,
  x as ac,
  Oc as ad,
  S as ae,
  qE as af,
  X as ag,
  Ub as ah,
  _e as ai,
  XE as aj,
  nt as ak,
  Ra as al,
  pc as am,
  ce as an,
  Vt as ao,
  hd as ap,
  Ns as aq,
  mc as ar,
  gE as as,
  gf as at,
  IE as au,
  Di as av,
  Sd as aw,
  Rd as ax,
  ge as ay,
  Jl as az,
  v as b,
  R as c,
  ea as d,
  kd as e,
  Le as f,
  Dl as g,
  Hm as h,
  Jb as i,
  zE as j,
  YE as k,
  m as l,
  Ke as m,
  V as n,
  Ye as o,
  Ne as p,
  Te as q,
  KE as r,
  QE as s,
  wl as t,
  JE as u,
  br as v,
  qh as w,
  qr as x,
  VE as y,
  Gs as z,
};
