var Xt = Object.defineProperty;
var Zt = (i, e, t) => (e in i ? Xt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t));
var o = (i, e, t) => (Zt(i, typeof e != "symbol" ? e + "" : e, t), t);
import {
  r as ei,
  w as yt,
  x as L,
  e as Ce,
  y as M,
  z as we,
  A as ze,
  B as h,
  C as u,
  c as m,
  D as k,
  F as q,
  G as ft,
  H as ti,
  I as mt,
  J as ii,
  K as Tt,
  L as ai,
  N as ce,
  O as ri,
  R as si,
  T as ni,
  U as oi,
  W as U,
  X as ci,
  Y as vt,
  Z as X,
  _ as p,
  $ as Pt,
  l as b,
  a0 as Ke,
  a1 as ui,
  a2 as li,
  q as Le,
  a3 as di,
  a4 as V,
  a5 as B,
  f as j,
  a6 as ae,
  d as J,
  a7 as Pe,
  a8 as re,
  h as ge,
  a9 as pi,
  aa as hi,
  ab as yi,
  a as fi,
  ac as E,
  ad as mi,
  S as gt,
  ae as H,
  n as x,
  E as At,
  af as R,
  ag as C,
  o as Ae,
  ah as Ti,
  ai as vi,
  M as Pi,
  aj as v,
  ak as gi,
  al as Ai,
  am as qe,
  an as T,
  ao as w,
  ap as He,
  aq as bi,
  ar as _i,
  as as Si,
  at as Ii,
  au as Ei,
  av as We,
  aw as bt,
  ax as ki,
  ay as wi,
  az as Ri,
  aA as Mi,
  aB as Di,
  aC as Oi,
  aD as Ci,
  j as Li,
  aE as Ni,
} from "./dev.js";
import { m as ys, p as fs, u as ms, v as Ts, k as vs, aF as Ps, t as gs, i as As, s as bs } from "./dev.js";
import "./main.js";
const je = Date.now();
function Je() {
  var i, e;
  if (typeof ((i = globalThis.process) == null ? void 0 : i.hrtime) == "function") {
    const [t, a] = process.hrtime();
    return Math.floor(1e3 * t + 1e-6 * a);
  } else
    return typeof ((e = globalThis.performance) == null ? void 0 : e.now) == "function"
      ? globalThis.performance.now() - je
      : Date.now() - je;
}
const Ui = (i) => ("0" + (i & 255).toString(16)).slice(-2),
  _t = (i, e = 8) => {
    if (!(i instanceof Uint8Array)) return "";
    const t = Array.prototype.map.call(i, Ui).join("");
    return e === 0 ? t : t.replace(new RegExp(`(.{1,${e}})`, "g"), "$1 ").trim();
  },
  Xe = /^http(?:s)?\:\/\/(?:itunes|(embed\.)?(music|podcasts|tv))\.apple\.com/i,
  xi = [
    "allow-forms",
    "allow-popups",
    "allow-same-origin",
    "allow-scripts",
    "allow-storage-access-by-user-activation",
    "allow-top-navigation-by-user-activation",
  ],
  Yi = ["autoplay *", "encrypted-media *", "fullscreen *", "clipboard-write"];
function cs(i, e = { height: "450", width: "660", isVideo: !1 }) {
  var _, G;
  if (!Xe.test(i)) throw new Error("Invalid content url");
  let t = (_ = e.height) != null ? _ : "450",
    a = (G = e.width) != null ? G : "660";
  const { kind: r, isUTS: s } = ei(i),
    n = e.isVideo || r === "post" || r === "musicVideo" || s;
  ((r === "song" || r === "episode") && (t = "175"),
    n && (t = `${Math.round(parseInt(a, 10) * 0.5625)}`),
    (t = `${t}`.replace(/(\d+)px/i, "$1")),
    (a = `${a}`.replace(/^(\d+)(?!px)%?$/i, "$1px")));
  const l = `${n ? `width:${a}` : `width:100%;${a ? `max-width:${a}` : ""}`};overflow:hidden;border-radius:10px;`;
  let y = "https://embed.music.apple.com";
  return (
    ["podcast", "episode"].includes(r != null ? r : "") && !s && (y = "https://embed.podcasts.apple.com"),
    ["movie", "episode", "season", "show"].includes(r != null ? r : "") && s && (y = "https://embed.tv.apple.com"),
    `<iframe ${[`allow="${Yi.join("; ")}"`, 'frameborder="0"', t ? `height="${t}"` : "", `style="${l}"`, `sandbox="${xi.join(" ")}"`, `src="${i.replace(Xe, y)}"`].join(" ")}></iframe>`
  );
}
function Re(i, e) {
  const t = { ...i };
  for (const a of Object.keys(i)) e.includes(a) && delete t[a];
  return t;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Ze(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var a,
    r,
    s = t.call(i),
    n = [];
  try {
    for (; (e === void 0 || e-- > 0) && !(a = s.next()).done;) n.push(a.value);
  } catch (c) {
    r = { error: c };
  } finally {
    try {
      a && !a.done && (t = s.return) && t.call(s);
    } finally {
      if (r) throw r.error;
    }
  }
  return n;
}
var z;
(function (i) {
  ((i[(i.NotStarted = 0)] = "NotStarted"), (i[(i.Running = 1)] = "Running"), (i[(i.Stopped = 2)] = "Stopped"));
})(z || (z = {}));
var St = { type: "xstate.init" };
function be(i) {
  return i === void 0 ? [] : [].concat(i);
}
function K(i) {
  return { type: "xstate.assign", assignment: i };
}
function et(i, e) {
  return typeof (i = typeof i == "string" && e && e[i] ? e[i] : i) == "string"
    ? { type: i }
    : typeof i == "function"
      ? { type: i.name, exec: i }
      : i;
}
function ue(i) {
  return function (e) {
    return i === e;
  };
}
function It(i) {
  return typeof i == "string" ? { type: i } : i;
}
function tt(i, e) {
  return { value: i, context: e, actions: [], changed: !1, matches: ue(i) };
}
function it(i, e, t) {
  var a = e,
    r = !1;
  return [
    i.filter(function (s) {
      if (s.type === "xstate.assign") {
        r = !0;
        var n = Object.assign({}, a);
        return (
          typeof s.assignment == "function"
            ? (n = s.assignment(a, t))
            : Object.keys(s.assignment).forEach(function (c) {
                n[c] = typeof s.assignment[c] == "function" ? s.assignment[c](a, t) : s.assignment[c];
              }),
          (a = n),
          !1
        );
      }
      return !0;
    }),
    a,
    r,
  ];
}
function Et(i, e) {
  e === void 0 && (e = {});
  var t = Ze(
      it(
        be(i.states[i.initial].entry).map(function (n) {
          return et(n, e.actions);
        }),
        i.context,
        St,
      ),
      2,
    ),
    a = t[0],
    r = t[1],
    s = {
      config: i,
      _options: e,
      initialState: { value: i.initial, actions: a, context: r, matches: ue(i.initial) },
      transition: function (n, c) {
        var l,
          y,
          f = typeof n == "string" ? { value: n, context: i.context } : n,
          _ = f.value,
          G = f.context,
          ye = It(c),
          fe = i.states[_];
        if (fe.on) {
          var zt = be(fe.on[ye.type]);
          try {
            for (
              var te = (function (A) {
                  var ve = typeof Symbol == "function" && Symbol.iterator,
                    Ve = ve && A[ve],
                    Qe = 0;
                  if (Ve) return Ve.call(A);
                  if (A && typeof A.length == "number")
                    return {
                      next: function () {
                        return (A && Qe >= A.length && (A = void 0), { value: A && A[Qe++], done: !A });
                      },
                    };
                  throw new TypeError(ve ? "Object is not iterable." : "Symbol.iterator is not defined.");
                })(zt),
                W = te.next();
              !W.done;
              W = te.next()
            ) {
              var ie = W.value;
              if (ie === void 0) return tt(_, G);
              var me = typeof ie == "string" ? { target: ie } : ie,
                Q = me.target,
                Ye = me.actions,
                Fe = Ye === void 0 ? [] : Ye,
                $e = me.cond,
                Kt =
                  $e === void 0
                    ? function () {
                        return !0;
                      }
                    : $e,
                qt = Q === void 0,
                Ht = Q != null ? Q : _,
                Wt = i.states[Ht];
              if (Kt(G, ye)) {
                var Te = Ze(
                    it(
                      (qt
                        ? be(Fe)
                        : [].concat(fe.exit, Fe, Wt.entry).filter(function (A) {
                            return A;
                          })
                      ).map(function (A) {
                        return et(A, s._options.actions);
                      }),
                      G,
                      ye,
                    ),
                    3,
                  ),
                  Be = Te[0],
                  jt = Te[1],
                  Jt = Te[2],
                  Ge = Q != null ? Q : _;
                return {
                  value: Ge,
                  context: jt,
                  actions: Be,
                  changed: Q !== _ || Be.length > 0 || Jt,
                  matches: ue(Ge),
                };
              }
            }
          } catch (A) {
            l = { error: A };
          } finally {
            try {
              W && !W.done && (y = te.return) && y.call(te);
            } finally {
              if (l) throw l.error;
            }
          }
        }
        return tt(_, G);
      },
    };
  return s;
}
var at = function (i, e) {
  return i.actions.forEach(function (t) {
    var a = t.exec;
    return a && a(i.context, e);
  });
};
function kt(i) {
  var e = i.initialState,
    t = z.NotStarted,
    a = new Set(),
    r = {
      _machine: i,
      send: function (s) {
        t === z.Running &&
          ((e = i.transition(e, s)),
          at(e, It(s)),
          a.forEach(function (n) {
            return n(e);
          }));
      },
      subscribe: function (s) {
        return (
          a.add(s),
          s(e),
          {
            unsubscribe: function () {
              return a.delete(s);
            },
          }
        );
      },
      start: function (s) {
        if (s) {
          var n = typeof s == "object" ? s : { context: i.config.context, value: s };
          e = { value: n.value, actions: [], context: n.context, matches: ue(n.value) };
        }
        return ((t = z.Running), at(e, St), r);
      },
      stop: function () {
        return ((t = z.Stopped), a.clear(), r);
      },
      get state() {
        return e;
      },
      get status() {
        return t;
      },
    };
  return r;
}
const oe = "amupaee",
  rt = "https://universal-activity-service.itunes.apple.com",
  Fi = "A method was called without a previous descriptor",
  $i = "The scrub() method was called with the SCRUB_END action without a previous SCRUB_START descriptor",
  Bi = "The play() method was called without a previous stop() or pause() call.",
  Gi = "A play stop() method was called without a previous play() descriptor",
  Me = /(?:st|ra)\.([0-9]+)/,
  st = /st\.([0-9]+)/,
  wt = "send() called without any data",
  Vi = ({ timestamp: i, ...e }) => ({ ...e, "milliseconds-since-play": Date.now() - i });
class Qi {
  constructor(e) {
    o(this, "mode", yt.AUTO);
    o(this, "_accessToken");
    o(this, "_musicUserToken");
    o(this, "_bundleId");
    o(this, "_clientId");
    o(this, "_eventType");
    o(this, "_fetch");
    o(this, "_fetchOptions");
    o(this, "_headersClass");
    o(this, "_isQA", !1);
    o(this, "_logInfo", !1);
    o(this, "_preferDSID", !1);
    o(this, "_sourceType");
    o(this, "_traceTag");
    var t, a, r, s;
    ((this._accessToken = e.accessToken),
      (this._bundleId = e.bundleId),
      (this._clientId = e.clientId),
      (this._eventType = e.eventType),
      (this._fetch = (t = e.fetch) != null ? t : fetch),
      (this._fetchOptions = (a = e.fetchOptions) != null ? a : {}),
      (this._headersClass = (r = e.headersClass) != null ? r : Headers),
      (this._isQA = (s = e.isQA) != null ? s : !1),
      (this._logInfo = e.logInfo || this._isQA),
      (this._musicUserToken = e.musicUserToken),
      (this._preferDSID = e.preferDSID),
      (this._sourceType = e.sourceType),
      (this._traceTag = e.traceTag));
  }
  get accessToken() {
    return L(this._accessToken);
  }
  get musicUserToken() {
    return L(this._musicUserToken);
  }
  get url() {
    return this._isQA ? `${rt}/qa/play` : `${rt}/play`;
  }
  async send(e) {
    const t = { client_id: this._clientId, event_type: this._eventType, data: Ce(e).map(Vi) };
    if (t.data.length === 0) throw new Error(wt);
    const a = this._generateFetchOptions({ method: "POST", body: JSON.stringify(t), headers: this.headers() });
    return (
      await this._fetch(this.url, a),
      this._logInfo && M.info("play activity:", this._sourceType === we.AMAZON ? JSON.stringify(t) : t),
      t
    );
  }
  baseHeaders() {
    var t, a;
    const e = (a = (t = this._fetchOptions) == null ? void 0 : t.headers) != null ? a : {};
    return e instanceof this._headersClass
      ? new this._headersClass(Array.from(e.entries()))
      : new this._headersClass(e);
  }
  headers() {
    const e = this._preferDSID ? "X-Dsid" : "media-user-token",
      t = this.baseHeaders();
    return (
      t.set("Authorization", `Bearer ${this.accessToken}`),
      t.set("Content-Type", "application/json"),
      t.set(e, `${this.musicUserToken}`),
      this._isQA && this._traceTag !== void 0 && t.set("Data-Trace-Tag", this._traceTag),
      t
    );
  }
  _generateFetchOptions(e) {
    return { ...this._fetchOptions, ...e };
  }
}
function zi(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
const Rt = (i, e) =>
    (e == null ? void 0 : e.name) === void 0
      ? "MusicKitApp/1.0"
      : i !== void 0
        ? i
        : `${zi(e.name)}/${(e == null ? void 0 : e.version) || "1.0"}`,
  Ki = (i) => {
    var n, c, l;
    const e = i.toLowerCase();
    let t = "Unidentified OS",
      a;
    const r = /mobile/.test(e);
    r && /android|adr/.test(e)
      ? ((t = "Android"), (a = e.match(/(?:android|adr)\ ((\d+[._])+\d+)/)))
      : r && /iphone|ipad|ipod/.test(e)
        ? ((t = "iOS"), (a = e.match(/os\ ((\d+[._])+\d+)\ like\ mac\ os\ x/)))
        : /tizen/.test(e)
          ? ((t = "Tizen"), (a = e.match(/tizen (.*)/)))
          : /web0s|webos/.test(e)
            ? ((t = "WebOS"), (a = e.match(/[web0s|webos] (.*)/)))
            : !r && /cros/.test(e)
              ? (t = "ChromeOS")
              : !r && /macintosh/.test(e)
                ? ((t = "macOS"), (a = e.match(/os\ x\ ((\d+[._])+\d+)\b/)))
                : !r && /linux/.test(e)
                  ? (t = "Linux")
                  : !r && /windows/.test(e) && ((t = "Windows"), (a = e.match(/windows ([^\)]*)/)));
    const s =
      (l =
        (c = (n = a == null ? void 0 : a[1]) == null ? void 0 : n.replace) == null ? void 0 : c.call(n, /_/g, ".")) !=
      null
        ? l
        : "0.0";
    return `${t}/${s}`;
  },
  qi = (i) => `model/${(i == null ? void 0 : i.platform) || "Unavailable"}`,
  Hi = (i) => {
    const e = i == null ? void 0 : i.build;
    return e === void 0 || e === "" ? "build/0.0.0" : `build/${e}`;
  },
  Wi = (i, e, t, a) => [Rt(i, e), Ki(a), qi(t), Hi(e)].join(" "),
  ji = { platform: "", userAgent: "" };
class Mt {
  constructor(e, t, a, r) {
    o(this, "privateEnabled", !1);
    o(this, "siriInitiated", !1);
    o(this, "bundleId");
    o(this, "buildVersion");
    o(this, "clientId", "JSCLIENT");
    o(this, "eventType", "JSPLAY");
    o(this, "guid");
    o(this, "internalBuild", !1);
    o(this, "metricsClientId");
    o(this, "preferDSID", !1);
    o(this, "sender");
    o(this, "sourceType", we.MUSICKIT);
    o(this, "_appId");
    o(this, "_appInfo");
    o(this, "_deviceName");
    o(this, "_navigator");
    o(this, "_utcOffset", new Date().getTimezoneOffset());
    o(this, "_utcOffsetInSeconds");
    o(this, "_userAgent");
    o(this, "_userIsSubscribed", !0);
    o(this, "_allowReportingId", !1);
    var s, n, c, l, y, f;
    ((this._accessToken = e),
      (this._musicUserToken = t),
      (this._storefrontId = a),
      r &&
        ((this._appInfo = r.app),
        (this._navigator = r.navigator),
        (this._userAgent = r.userAgent),
        ze(r, "utcOffset") && isNaN(r.utcOffset)
          ? (this._utcOffsetInSeconds = -1)
          : ze(r, "utcOffset") && (this._utcOffset = r.utcOffset),
        (this.clientId = r.clientId || "JSCLIENT"),
        (this._deviceName = r.deviceName),
        (this.guid = r.guid),
        (this.metricsClientId = r.metricsClientId),
        (this.preferDSID = (s = r.preferDSID) != null ? s : !1),
        (this.sourceType = r.sourceType !== void 0 && typeof r.sourceType == "number" ? r.sourceType : we.MUSICKIT),
        (this._userIsSubscribed = (n = r.userIsSubscribed) != null ? n : !0),
        (this._allowReportingId = (c = r.allowReportingId) != null ? c : !1),
        (l = r.app) != null && l.bundleId && (this.bundleId = (y = r.app) == null ? void 0 : y.bundleId)),
      (this.buildVersion = Wi(this._appId, this._appInfo, this.navigator, this.userAgent)),
      (this.sender = new Qi({
        bundleId: this.bundleId,
        accessToken: this._accessToken,
        clientId: this.clientId,
        eventType: this.eventType,
        fetch: r == null ? void 0 : r.fetch,
        fetchOptions: r == null ? void 0 : r.fetchOptions,
        headersClass: (f = r == null ? void 0 : r.fetch) == null ? void 0 : f.Headers,
        isQA: r == null ? void 0 : r.isQA,
        logInfo: r == null ? void 0 : r.logInfo,
        musicUserToken: this._musicUserToken,
        preferDSID: this.preferDSID,
        sourceType: this.sourceType,
        traceTag: r == null ? void 0 : r.traceTag,
      })));
  }
  get accessToken() {
    return L(this._accessToken);
  }
  get appID() {
    return (this._appId === void 0 && (this._appId = Rt(this._appId, this._appInfo)), this._appId);
  }
  get deviceName() {
    return this._deviceName;
  }
  get musicUserToken() {
    return L(this._musicUserToken);
  }
  get navigator() {
    var e;
    return (e = this._navigator) != null ? e : typeof navigator > "u" ? ji : navigator;
  }
  get storefrontId() {
    return L(this._storefrontId);
  }
  get userAgent() {
    var e;
    return (e = this._userAgent) != null ? e : this.navigator.userAgent;
  }
  get userIsSubscribed() {
    return L(this._userIsSubscribed);
  }
  get allowReportingId() {
    return L(this._allowReportingId);
  }
  get utcOffsetInSeconds() {
    if (this._utcOffsetInSeconds === void 0 && this._utcOffset !== void 0 && !isNaN(this._utcOffset)) {
      const e = this._utcOffset * 60;
      this._utcOffsetInSeconds = e <= 0 ? Math.abs(e) : -e;
    }
    return this._utcOffsetInSeconds === void 0 || isNaN(this._utcOffsetInSeconds) ? -1 : this._utcOffsetInSeconds;
  }
  async send(e) {
    return this.sender.send(e);
  }
  buildDescriptorForPlayParams(e, t, a, r, s) {
    const n = e.format === "stream" ? h.STREAM : h.ITUNES_STORE_CONTENT;
    return { ...e, container: a, duration: r != null ? r : 0, eventType: t, itemType: n, ...s };
  }
  buildForPlayParams(e, t, a, r = 0, s = {}, n = !1) {
    return this.build(this.buildDescriptorForPlayParams(e, t, a, r, s), n);
  }
}
const Ji = (i, ...e) => e.reduce((t, a) => a(t), i);
function g(i, e, t) {
  var a;
  return i.eventType === void 0
    ? u.PLAY_START
    : i.itemType === h.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? u.PLAY_END
      : (a = i.eventType) != null
        ? a
        : u.PLAY_START;
}
function le(i, e, t) {
  var r, s;
  const a = i.userPreference;
  return (
    g(i) === u.PLAY_END &&
    ((r = i.audioQuality) == null ? void 0 : r.provided) !== void 0 &&
    ((s = i.audioQuality) == null ? void 0 : s.targeted) !== void 0 &&
    (a == null ? void 0 : a.audioQuality) !== void 0 &&
    (a == null ? void 0 : a.playbackFormat) !== void 0
  );
}
function Xi(i, e, t) {
  var s, n, c;
  if (!le(i)) return;
  const a = i.audioQuality;
  if ((a == null ? void 0 : a.provided) === void 0) return;
  const { provided: r } = a;
  return {
    "audio-sample-rate-in-hz": (s = r.audioSampleRateHz) != null ? s : 0,
    "audio-bit-depth": (n = r.audioBitDepth) != null ? n : 0,
    "bit-rate-in-bps": (c = r.bitRateBps) != null ? c : 0,
    codec: r.codec,
    "audio-channel-type": r.audioChannelType,
    "playback-format": r.playbackFormat,
  };
}
function Zi(i, e, t) {
  var s, n, c;
  if (!le(i)) return;
  const a = i.audioQuality;
  if ((a == null ? void 0 : a.targeted) === void 0) return;
  const { targeted: r } = a;
  return {
    "audio-sample-rate-in-hz": (s = r.audioSampleRateHz) != null ? s : 0,
    "audio-bit-depth": (n = r.audioBitDepth) != null ? n : 0,
    "bit-rate-in-bps": (c = r.bitRateBps) != null ? c : 0,
    codec: r.codec,
    "audio-channel-type": r.audioChannelType,
    "playback-format": r.playbackFormat,
  };
}
function ea(i, e, t) {
  return t.client.bundleId;
}
function ta(i, e, t) {
  return t.client.buildVersion;
}
const ia = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function de({ kind: i }, e, t) {
  return i !== void 0 && ia.includes(i);
}
function aa({ endReasonType: i, eventType: e, itemType: t, timedMetadata: a }, r, s) {
  return a !== void 0 && (t === h.TIMED_METADATA_PING || e === u.PLAY_START || i === m.PLAYBACK_MANUALLY_PAUSED);
}
function D(i, e, t) {
  const { id: a, reporting: r } = i;
  if (a === "-1" || !r)
    switch (g(i)) {
      case u.PLAY_END:
        return h.AGGREGATE_NON_CATALOG_PLAY_TIME;
      case u.PLAY_START:
        if (a === "-1") return h.INVALID;
    }
  const { format: s, kind: n, itemType: c } = i;
  return n === "musicMovie"
    ? h.ORIGINAL_CONTENT_MOVIES
    : aa(i)
      ? c === h.TIMED_METADATA_PING
        ? c
        : h.STREAM
      : s === "stream"
        ? h.STREAM
        : de(i)
          ? h.ARTIST_UPLOADED_CONTENT
          : c != null
            ? c
            : h.ITUNES_STORE_CONTENT;
}
function Y(i, e, t) {
  var r, s, n;
  if (D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = (n = (r = i.container) == null ? void 0 : r.type) != null ? n : (s = i.container) == null ? void 0 : s.kind;
  if (typeof a == "number") return a;
  switch (a) {
    case "album":
    case "albums":
    case "library-albums":
      return k.ALBUM;
    case "artist":
    case "artists":
    case "library-artists":
      return k.ARTIST;
    case "playlist":
    case "playlists":
    case "library-playlists":
      return k.PLAYLIST;
    case "radio":
    case "radioStation":
    case "station":
    case "stations":
      return k.RADIO;
    default:
      return k.UNKNOWN;
  }
}
function ra(i, e, t) {
  if (Y(i) !== k.ALBUM) return;
  const { container: a } = i,
    r = a == null ? void 0 : a.id;
  if (r !== void 0 && !q(r)) return r;
}
function sa(i, e, t) {
  if (Y(i) !== k.ALBUM) return;
  const { container: a } = i,
    r = a == null ? void 0 : a.id;
  if (r !== void 0 && q(r)) return r;
}
function na(i, e, t) {
  var s;
  if (Y(i) !== k.PLAYLIST) return;
  const { container: a } = i,
    r = (s = a == null ? void 0 : a.catalogId) != null ? s : a == null ? void 0 : a.globalId;
  if (a != null && a.isLibrary && r) return r;
  if (!q(a == null ? void 0 : a.id)) return a == null ? void 0 : a.id;
}
function oa(i, e, t) {
  if (Y(i) !== k.PLAYLIST) return;
  const { container: a } = i,
    r = a == null ? void 0 : a.versionHash;
  if (!(r === void 0 || r === "")) return r;
}
function ca(i, e, t) {
  var r;
  if (Y(i) !== k.RADIO) return;
  const a = (r = i.container) == null ? void 0 : r.stationHash;
  return a !== void 0 && a !== "" ? a : void 0;
}
function ua(i, e, t) {
  var a;
  if (Y(i) === k.RADIO) return (a = i.container) == null ? void 0 : a.id;
}
function la(i, e, t) {
  var r;
  if (Y(i) !== k.RADIO) return;
  const a = (r = i.container) == null ? void 0 : r.id;
  if (a !== void 0 && st.test(a)) return parseInt(a.replace(st, "$1"), 10);
}
function da(i, e, t) {
  var n;
  if (Y(i) !== k.PLAYLIST) return;
  const { container: a } = i,
    r = (n = a == null ? void 0 : a.catalogId) != null ? n : a == null ? void 0 : a.globalId,
    s = a == null ? void 0 : a.id;
  if (s !== void 0) {
    if (a != null && a.isLibrary && r) {
      if (s !== "") return s;
    } else if (q(s)) return s;
  }
}
function pa(i, e, t) {
  if (D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = ra(i);
  r !== void 0 && (a["album-adam-id"] = r);
  const s = sa(i);
  s !== void 0 && (a["cloud-album-id"] = s);
  const n = na(i);
  n !== void 0 && (a["global-playlist-id"] = n);
  const c = oa(i);
  c !== void 0 && (a["playlist-version-hash"] = c);
  const l = ca(i);
  l !== void 0 && (a["station-hash"] = l);
  const y = ua(i);
  y !== void 0 && (a["station-id"] = y);
  const f = la(i);
  f !== void 0 && (a["station-personalized-id"] = f);
  const _ = da(i);
  if ((_ !== void 0 && (a["universal-library-id"] = _), !ft(a))) return a;
}
function ha(i, e, t) {
  return t.client.accessToken;
}
function ya(i, e, t) {
  return t.client.deviceName;
}
function fa(i, e, t) {
  var r;
  if (g(i) === u.LYRIC_DISPLAY) return L((r = i.lyricDescriptor) == null ? void 0 : r.displayTranslation);
}
function ma(i, e, t) {
  var r;
  if (g(i) === u.LYRIC_DISPLAY) return L((r = i.lyricDescriptor) == null ? void 0 : r.displayTransliteration);
}
function Ta(i, e, t) {
  var r;
  if (g(i) === u.LYRIC_DISPLAY) return (r = i.lyricDescriptor) == null ? void 0 : r.displayType;
}
function Dt({ position: i = 0, startPositionInMilliseconds: e }, t, a) {
  return e || Math.round(1e3 * i);
}
function va(i, e, t) {
  var a;
  switch (g(i)) {
    case u.LYRIC_DISPLAY:
      return ((a = i.lyricDescriptor) == null ? void 0 : a.duration) === void 0
        ? void 0
        : Math.round(i.lyricDescriptor.duration);
    case u.PLAY_START:
      return;
    default:
      return e && e.position === void 0 ? void 0 : i.endPositionInMilliseconds || Dt(i);
  }
}
function Z({ id: i, reporting: e }, t, a) {
  return i === "-1" || !e;
}
function Ot(i, e, t) {
  if (!(e && (e == null ? void 0 : e.position) === void 0))
    return D(i) === h.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? m.NOT_APPLICABLE
      : Z(i) && i.eventType === u.PLAY_END
        ? m.NOT_APPLICABLE
        : i.endReasonType;
}
const { CONTAINER_CHANGED: nt, NOT_SPECIFIED: _e } = ti;
function Pa(i, e, t) {
  var s;
  if (g(i) !== u.PLAY_START) return;
  const r = i.container;
  return r === void 0
    ? _e
    : e === !1
      ? t.isAlexa
        ? _e
        : nt
      : ((s = e == null ? void 0 : e.container) == null ? void 0 : s.id) !== r.id
        ? nt
        : _e;
}
function ga(i, e, t) {
  var r, s;
  return D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME
    ? void 0
    : `${(s = (r = i.container) == null ? void 0 : r.name) != null ? s : mt.MUSICKIT}`;
}
function Aa(i, e, t) {
  return t.client.guid;
}
function Ne({ id: i, container: e }, t, a) {
  return Me.test(i) || (e == null ? void 0 : e.kind) === "radioStation";
}
function ba(i, e, t) {
  if (!(Z(i) || Ne(i)) && de(i)) return i.id;
}
function Ue({ id: i, isLibrary: e }, t, a) {
  return e || q(i);
}
function Ct({ catalogId: i, container: e }, t, a) {
  return i != null ? i : e == null ? void 0 : e.catalogId;
}
function Lt(i, e, t) {
  return i.isLibrary && !!Ct(i);
}
function _a(i, e, t) {
  const { id: a } = i,
    r = a !== void 0 && a !== "";
  return Z(i) && g(i) === u.PLAY_START && r && a !== "-1"
    ? a
    : Ne(i) || de(i)
      ? i.cloudId
      : (Lt(i) && r) || Ue(i)
        ? a
        : i.cloudId;
}
function Sa(i, e, t) {
  var a;
  if (g(i) === u.LYRIC_DISPLAY) return (a = i.lyricDescriptor) == null ? void 0 : a.id;
}
function Ia(i, e, t) {
  return i.purchasedId;
}
function Ea(i, e, t) {
  if (t.client.allowReportingId === !0 && Ue(i)) return i.reportingId;
}
function ka(i, e, t) {
  if (Z(i)) return;
  const { container: a, id: r } = i;
  if (Me.test(r) || (a == null ? void 0 : a.kind) === "radioStation") return parseInt(`${r}`.replace(Me, "$1"), 10);
}
function wa(i, e, t) {
  if (!(Z(i) || Ne(i) || de(i))) {
    if (Lt(i)) return Ct(i);
    if (!Ue(i)) return i.id;
  }
}
function Ra(i, e, t) {
  if (D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = ba(i);
  r !== void 0 && (a["auc-adam-id"] = r);
  const s = _a(i);
  s !== void 0 && (a["cloud-id"] = s);
  const n = Sa(i);
  n !== void 0 && (a["lyric-id"] = n);
  const c = Ia(i);
  c !== void 0 && (a["purchased-adam-id"] = c);
  const l = Ea(i, e, t);
  l !== void 0 && (a["reporting-adam-id"] = l);
  const y = ka(i);
  y !== void 0 && (a["radio-adam-id"] = y);
  const f = wa(i);
  if ((f !== void 0 && (a["subscription-adam-id"] = f), !ft(a))) return a;
}
function Ma(i, e, t) {
  return t.client.internalBuild;
}
function Da(i, e, t) {
  var a;
  return ((a = i.container) == null ? void 0 : a.isCollaborative) === !0 ? !0 : void 0;
}
function Oa(i, e, t) {
  var r;
  if (g(i) === u.LYRIC_DISPLAY) return (r = i.lyricDescriptor) == null ? void 0 : r.language;
}
function Ca({ streamingKind: i }, e, t) {
  return i === ii.EPISODE;
}
function La(i, e, t) {
  return D(i) === h.STREAM;
}
function Nt(i, e, t) {
  return La(i) && !Ca(i);
}
function Na(i, e, t) {
  var l, y;
  const a = g(i);
  if (a === u.LYRIC_DISPLAY || Nt(i)) return 0;
  const r = Math.round(1e3 * i.duration);
  if (a === u.PLAY_START) return r;
  const s = (y = i.startPositionInMilliseconds) != null ? y : Math.round(1e3 * ((l = i.position) != null ? l : 0)),
    n = i.duration * 1e3;
  return s > n ? s : r;
}
const { AUDIO: ot, VIDEO: Ua } = Tt;
function xa(i, e, t) {
  if (g(i) === u.LYRIC_DISPLAY) return ot;
  const { kind: a, mediaType: r } = i;
  if (typeof r == "number") return r;
  const s = typeof r == "string" ? r : a;
  return s && /video|movie/i.test(s) ? Ua : ot;
}
function Ya(i, e, t) {
  return t.client.metricsClientId;
}
function Fa(i, e, t) {
  return !1;
}
function $a(i, e, t) {
  return ai();
}
function Ba(i, e, t) {
  var r, s, n;
  if (g(i) === u.LYRIC_DISPLAY || D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME)
    return { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 };
  const a = L(i.playMode);
  if (a !== void 0)
    return {
      "auto-play-mode": (r = a.autoplayMode) != null ? r : 0,
      "repeat-play-mode": (s = a.repeatPlayMode) != null ? s : 0,
      "shuffle-play-mode": (n = a.shufflePlayMode) != null ? n : 0,
    };
}
function Ga(i, e, t) {
  return t.client.privateEnabled;
}
function Va(i, e, t) {
  if (g(i) !== u.LYRIC_DISPLAY && D(i) !== h.AGGREGATE_NON_CATALOG_PLAY_TIME) return i.recoData;
}
function Qa(i, e, t) {
  return t.client.userIsSubscribed;
}
function za(i, e, t) {
  return t.client.siriInitiated;
}
function Ka(i, e, t) {
  return t.client.sourceType;
}
function qa(i, e, t) {
  var r, s;
  const a = g(i);
  return a === u.LYRIC_DISPLAY || D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME || Nt(i)
    ? 0
    : a === u.PLAY_START
      ? Dt(i)
      : (s = (r = i.startPositionInMilliseconds) != null ? r : Ha(e)) != null
        ? s
        : 0;
}
const Ha = (i) => (i && i.position !== void 0 ? Math.round(1e3 * i.position) : 0);
function Wa(i, e, t) {
  return t.client.storefrontId;
}
function ja(i, e, t) {
  const a = i.timedMetadata;
  if (a === void 0) return;
  const r = g(i);
  if (Ot(i, e) !== m.SCRUB_END && r === u.PLAY_END) return _t(a, 0);
}
function Ja(i, e, t) {
  var a;
  return (a = i.timestamp) != null ? a : Date.now();
}
function Xa(i, e, t) {
  return t.client.userAgent;
}
function Za(i, e, t) {
  var a;
  if (le(i)) return (a = i.userPreference) == null ? void 0 : a.audioQuality;
}
function er(i, e, t) {
  var a;
  if (le(i)) return (a = i.userPreference) == null ? void 0 : a.playbackFormat;
}
function tr(i, e, t) {
  if (!t.client.preferDSID) return t.client.musicUserToken;
}
function ir(i, e, t) {
  return D(i) === h.AGGREGATE_NON_CATALOG_PLAY_TIME ? 0 : t.client.utcOffsetInSeconds;
}
const ar = {
  "audio-quality-provided": Xi,
  "audio-quality-targeted": Zi,
  "bundle-id": ea,
  "build-version": ta,
  "container-ids": pa,
  "container-type": Y,
  "developer-token": ha,
  "device-name": ya,
  "display-translation": fa,
  "display-transliteration": ma,
  "display-type": Ta,
  "end-position-in-milliseconds": va,
  "end-reason-type": Ot,
  "event-reason-hint-type": Pa,
  "event-type": g,
  "feature-name": ga,
  guid: Aa,
  ids: Ra,
  "internal-build": Ma,
  "is-collaborative": Da,
  "lyric-language": Oa,
  "media-duration-in-milliseconds": Na,
  "media-type": xa,
  "metrics-client-id": Ya,
  offline: Fa,
  "persistent-id": $a,
  "play-mode": Ba,
  "private-enabled": Ga,
  "reco-data": Va,
  "sb-enabled": Qa,
  "siri-initiated": za,
  "source-type": Ka,
  "start-position-in-milliseconds": qa,
  "store-front": Wa,
  "timed-metadata": ja,
  timestamp: Ja,
  type: D,
  "user-agent": Xa,
  "user-preference-audio-quality": Za,
  "user-preference-playback-format": er,
  "user-token": tr,
  "utc-offset-in-seconds": ir,
};
let rr = 0;
const sr = (i = {}, e) => ({ id: (rr++).toFixed(0), client: e, isAlexa: !1, ...i }),
  nr = (i, ...e) => ({ ...i, ...Object.assign({}, ...e) }),
  Ut = (i, e, t, a = !1) => {
    const r = nr(typeof a == "boolean" ? sr({ isAlexa: a }, i) : { ...a, client: i }),
      s = ce(e),
      n = t && ce(t),
      c = Object.create(null);
    for (const [l, y] of Object.entries(ar)) {
      const f = y(s, n, r);
      f !== void 0 && (c[l] = f);
    }
    return c;
  },
  or = (i, e, t) => {
    if (e === void 0) throw new Error("called without a play activity descriptor");
    const a = { ...e, eventType: u.LYRIC_DISPLAY };
    return Ji(
      {
        ...Ut(i, a, t, !1),
        "media-duration-in-milliseconds": 0,
        "media-type": Tt.AUDIO,
        "start-position-in-milliseconds": 0,
        "play-mode": { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 },
      },
      (r) => Re(r, ["character-display-count", "event-reason-hint-type", "reco-data"]),
    );
  },
  cr = () =>
    Et({
      id: "lpaf",
      initial: "idle",
      context: { initialShowTime: -1, duration: -1 },
      states: {
        idle: {
          entry: K((i) => ({ ...i, initialShowTime: void 0, duration: Je() - i.initialShowTime })),
          on: { play: "playing" },
        },
        playing: { entry: K((i) => ({ ...i, initialShowTime: Je() })), on: { stop: "idle" } },
      },
    });
class ur extends Mt {
  constructor(t, a, r, s) {
    super(t, a, r, s);
    o(this, "_machine");
    o(this, "startDescriptor");
    this._machine = kt(cr()).start();
  }
  get state() {
    return this._machine.state.value;
  }
  async play(t) {
    var a;
    if (this.state === "playing") throw Error("lyrics are already being displayed. Did you forget to stop them?");
    if (t === void 0) throw Error("Missing descriptor for lyrics play");
    (M.info(
      `Staring tracking: lyricsId=${(a = t.lyricDescriptor) == null ? void 0 : a.id}, itemId=${t.id}, catalogId=${t.catalogId}`,
    ),
      (this.startDescriptor = t),
      this._machine.send({ type: "play" }));
  }
  update(t) {
    var a, r, s;
    if (this.state !== "playing") throw Error("lyrics are not being displayed. Cannot update.");
    if (this.startDescriptor === void 0) throw Error("Missing start descriptor for lyrics update");
    if (t.id !== void 0 && t.id !== ((a = this.startDescriptor.lyricDescriptor) == null ? void 0 : a.id))
      throw Error(
        `Lyrics ID mismatch: updating id=${t.id} but tracking id=${(r = this.startDescriptor.lyricDescriptor) == null ? void 0 : r.id}`,
      );
    (M.info(`Updating descriptor: lyricsId=${(s = this.startDescriptor.lyricDescriptor) == null ? void 0 : s.id}`),
      (this.startDescriptor = {
        ...this.startDescriptor,
        lyricDescriptor: { ...this.startDescriptor.lyricDescriptor, ...t },
      }));
  }
  async stop() {
    var s;
    if (this.state !== "playing") throw Error("lyrics are not being displayed. Did you forget to display them?");
    if (this.startDescriptor === void 0) throw Error("Missing start descriptor for lyrics stop");
    (M.info(
      `Stopping tracking: lyricsId=${(s = this.startDescriptor.lyricDescriptor) == null ? void 0 : s.id}, itemId=${this.startDescriptor.id}, catalogId=${this.startDescriptor.catalogId}`,
    ),
      this._machine.send({ type: "stop" }));
    const t = this._machine.state.context.duration,
      a = JSON.parse(JSON.stringify(this.startDescriptor));
    ((a.lyricDescriptor = { ...a.lyricDescriptor, duration: Math.round(t) }),
      M.debug("Clearing tracked descriptor"),
      (this.startDescriptor = void 0));
    const r = this.build(a, !1);
    try {
      (M.debug("Sending PAF request with data payload"), await this.send(r), M.debug("Done sending PAF request"));
    } catch (n) {
      (console.error(`Error sending Lyrics PAF request: ${n.message}`),
        M.error(`Error sending Lyrics PAF request: ${n.message}`));
    }
  }
  async exit() {}
  build(t, a) {
    return or(this, t, a);
  }
}
const lr = (i = {}) => ({
    get(e) {
      if (!(typeof e > "u")) return i[e];
    },
    set(e, t) {
      i[e] = t;
    },
  }),
  dr = () => ({ get: ri, set: si }),
  pr = (i) => {
    switch ((typeof i > "u" && (i = "browser"), i)) {
      case "browser":
        return dr();
      case "memory":
        return lr();
      default:
        return i;
    }
  },
  xt = (i, e) => Ft(i, e, [], "/", 0),
  Yt = (i, e) => {
    const t = i.get(e);
    if (t === void 0 || t === "") return [];
    const a = JSON.parse(atob(t));
    return Ce(a);
  },
  Ft = (i, e, t, a, r, s) => i.set(e, btoa(JSON.stringify(t)), a, r, s),
  hr = (i, e, t, a, r, s) => Ft(i, e, [...Yt(i, e), t], a, r, s),
  { AUTO: ct } = yt;
class yr {
  constructor(e, t) {
    o(this, "mode", ct);
    ((this.sender = e), (this.jar = t));
  }
  async flush() {
    const e = Yt(this.jar, oe);
    if (!(e === void 0 || e.length === 0))
      try {
        (await this.sender.send(e), xt(this.jar, oe));
      } catch (t) {
        throw new Error(`flush: ${t.message}`);
      }
  }
  async send(e) {
    if (this.mode === ct && (Array.isArray(e) || e["end-reason-type"] !== m.EXITED_APPLICATION))
      return this.sender.send(e);
    hr(this.jar, oe, e, "/");
  }
}
const fr = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "object":
        return !i.message || typeof i.message != "string" ? "" : i.message;
      default:
        return "";
    }
  },
  mr = (i) => fr(i).includes(wt),
  se = (i) => ({ type: i });
function Tr(i) {
  return i.eventType === u.PLAY_START;
}
function vr(i) {
  if (i.eventType !== u.PLAY_END) return !1;
  if (i.endReasonType === void 0) throw new Error("PLAY_END activity descriptor requires an endReasonType value");
  return !0;
}
function Pr(i) {
  if (i.itemType === h.TIMED_METADATA_PING) return !1;
  if (Tr(i)) return se("play");
  if (vr(i)) {
    const e = i.endReasonType;
    if (e === m.SCRUB_BEGIN) return se("scrubBegin");
    if (e === m.SCRUB_END) return se("scrubEnd");
    if (e === m.EXITED_APPLICATION) return !1;
  }
  return se("stop");
}
const gr = () =>
  Et(
    {
      id: "mpaf",
      initial: "idle",
      context: {},
      states: {
        error: {},
        idle: {
          on: {
            play: "playing",
            stop: "idle",
            scrubBegin: { target: "scrubbing", actions: K((i) => ({ ...i, stateBeforeScrub: "idle" })) },
            scrubEnd: { target: "error", actions: ["clearStateBeforeScrub", "setScrubEndError"] },
          },
        },
        playing: {
          on: {
            scrubBegin: { target: "scrubbing", actions: K((i) => ({ ...i, stateBeforeScrub: "playing" })) },
            stop: "idle",
            scrubEnd: { target: "error", actions: ["clearStateBeforeScrub", "setScrubEndError"] },
          },
        },
        scrubbing: {
          on: {
            scrubEnd: [
              { target: "idle", cond: ({ stateBeforeScrub: i }) => i === "idle", actions: ["clearStateBeforeScrub"] },
              { target: "playing", actions: ["clearStateBeforeScrub"] },
            ],
          },
        },
      },
    },
    {
      actions: {
        clearStateBeforeScrub: K(({ stateBeforeScrub: i, ...e }) => e),
        setScrubEndError: K((i) => ({ ...i, errorMessage: $i })),
      },
    },
  );
class Ar {
  constructor() {
    o(this, "machine");
    o(this, "machineService");
    ((this.machine = gr()), (this.machineService = kt(this.machine).start()));
  }
  get currentState() {
    return this.machineService.state;
  }
  get currentStateName() {
    return this.currentState.value;
  }
  matches(e) {
    return this.machineService.state.matches(e);
  }
  transition(e, t) {
    const a = Pr(e);
    if (a === !1) return this.currentStateName;
    if ((this.machineService.send(a), this.matches("error")))
      throw new Error(this.machineService.state.context.errorMessage);
    return this.currentStateName;
  }
}
const br = ({ id: i, reporting: e = !0, eventType: t }) => (i === "-1" || !e) && t === u.PLAY_END;
class _r extends Mt {
  constructor(e, t, a, r) {
    super(e, t, a, r);
  }
  build(e, t) {
    return Ut(this, e, t, this.clientId !== "JSCLIENT");
  }
}
class Sr {
  constructor(e, t, a, r) {
    o(this, "sender");
    o(this, "timeline", []);
    o(this, "_cookieJar");
    o(this, "_paf");
    o(this, "_machine");
    o(this, "timedMetadata");
    ((this._paf = new _r(e, t, a, r)),
      (this._cookieJar = pr(r == null ? void 0 : r.cookieJar)),
      (this.sender = new yr(this._paf.sender, this._cookieJar)),
      (this._machine = new Ar()));
  }
  get mode() {
    return this.sender.mode;
  }
  set mode(e) {
    this.sender.mode = e;
  }
  get privateEnabled() {
    return this._paf.privateEnabled;
  }
  set privateEnabled(e) {
    this._paf.privateEnabled = e;
  }
  clearTimedMetadata() {
    this.timedMetadata = void 0;
  }
  setTimedMetadata(e) {
    this.timedMetadata = e;
  }
  async activate(e = !1) {
    if (e)
      try {
        await this.flush();
      } catch (a) {
        if (!mr(a)) throw a;
      }
    const t = this.timeline[this.timeline.length - 1];
    if (t && t.endReasonType === m.EXITED_APPLICATION) return this.timeline.pop();
    this.clearTimedMetadata();
  }
  async exit(e = 0) {
    await this.stop(e, m.EXITED_APPLICATION);
  }
  async pause(e = 0) {
    await this.stop(e, m.PLAYBACK_MANUALLY_PAUSED);
  }
  async pingTimedMetadata(e, t, a = this.previousDescriptor) {
    await this._addToTimeline({ ...a, position: e, itemType: h.TIMED_METADATA_PING, timedMetadata: t });
  }
  async play(e, t = 0) {
    const a = this.timeline.length > 0;
    if (e === void 0) {
      if (!a) return;
      const r = this.previousDescriptor;
      (r.eventType === u.PLAY_END && delete r.endReasonType,
        await this._addToTimeline({ ...this.sanitizePreviousDescriptor(r), eventType: u.PLAY_START }));
      return;
    }
    if (a) {
      const r = this.previousDescriptor;
      if (this._machine.matches("playing") && !br(r)) return Promise.reject(new Error(Bi));
    }
    await this._addToTimeline({ ...e, eventType: u.PLAY_START, position: t });
  }
  async scrub(e = 0, t = m.SCRUB_BEGIN) {
    await this._addToTimeline({
      ...this.sanitizePreviousDescriptor(this.previousDescriptor),
      eventType: u.PLAY_END,
      endReasonType: t,
      position: e,
    });
  }
  async skip(e, t = m.TRACK_SKIPPED_FORWARDS, a = 0) {
    (await this.stop(a, t), await this.play(e));
  }
  async stop(e = 0, t = m.NATURAL_END_OF_TRACK) {
    let a = this.previousDescriptor;
    if (
      (a.endReasonType === m.EXITED_APPLICATION &&
        (this.timeline.pop(), xt(this._cookieJar, oe), (a = this.previousDescriptor)),
      this._machine.matches("playing"))
    ) {
      const r = {
        ...this.sanitizePreviousDescriptor(a),
        eventType: u.PLAY_END,
        endReasonType: t,
        position: e,
        timedMetadata: this.timedMetadata,
      };
      await this._addToTimeline(r);
    }
  }
  build(e, t) {
    if (
      (e === void 0 &&
        t === void 0 &&
        M.warn(
          "You are calling build() from a stateful PAF client. Please, use a stateless client or exit(), pause(), play(), scrub(), skip() or stop() instead.",
        ),
      e === void 0)
    ) {
      if (this.timeline.length === 0) throw new Error("build() called without a play activity descriptor");
      e = this.timeline[this.timeline.length - 1];
    }
    if (t === void 0) {
      const a = this.timeline.indexOf(e);
      if (((t = a > 0 ? this.timeline[a - 1] : void 0), t === void 0 && e.eventType === u.PLAY_END))
        throw new Error("Cannot build() for PLAY_END descriptors without previous descriptors");
      t = t != null ? t : !1;
    }
    return this._paf.build({ timedMetadata: this.timedMetadata, ...e }, t);
  }
  async addForPlayParams(e, t, a, r = 0, s = {}) {
    await this._addToTimeline(this.buildDescriptorForPlayParams(e, t, a, r, s));
  }
  buildDescriptorForPlayParams(e, t, a, r = 0, s = {}) {
    const n = e.format === "stream" ? h.STREAM : h.ITUNES_STORE_CONTENT;
    return ce({ ...e, container: a, duration: r, eventType: t, itemType: n, ...s });
  }
  flush() {
    return this.sender.flush();
  }
  async _addToTimeline(e) {
    e = { ...e, timestamp: Date.now() };
    const t = this.timeline.length > 0 ? this.timeline[this.timeline.length - 1] : !1;
    this.timeline.push(e);
    const a = this.build(e, t);
    await this.send(a, e);
  }
  get previousDescriptor() {
    const e = this.timeline[this.timeline.length - 1];
    if (e === void 0) throw new Error(Fi);
    return Re(e, ["timestamp"]);
  }
  buildForPlayParams(e, t, a, r = 0, s = {}, n = !1) {
    return (
      M.warn(
        "You are using buildsForPlayParams from a stateful PlayActivity. Please, use StatelessPlayActivity instead",
      ),
      this._paf.buildForPlayParams(e, t, a, r, s, n)
    );
  }
  send(e, t) {
    e = Ce(e);
    const a = ce(t);
    return (e.forEach((r) => this._machine.transition(a, r)), this.sender.send(e));
  }
  sanitizePreviousDescriptor(e) {
    let t = ni(e);
    return (t.itemType === h.TIMED_METADATA_PING && (t = Re(t, ["itemType"])), t);
  }
}
class Ir extends HTMLElement {
  constructor() {
    super();
    o(this, "muted", !1);
    o(this, "paused", !0);
    o(this, "_playbackRate", 1);
    o(this, "_volume", 1);
    o(this, "_currentTime", 0);
  }
  set volume(t) {
    t !== this._volume && ((this._volume = t), this.dispatchMediaEvent("volumechange"), (this.muted = t === 0));
  }
  get volume() {
    return this._volume;
  }
  set playbackRate(t) {
    t !== this._playbackRate && ((this._playbackRate = t), this.dispatchMediaEvent("ratechange"));
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set currentTime(t) {
    t !== this._currentTime && ((this._currentTime = t), this.dispatchMediaEvent("timeupdate"));
  }
  get currentTime() {
    return this._currentTime;
  }
  pause() {
    ((this.paused = !0), this.dispatchMediaEvent("pause"));
  }
  play() {
    ((this.paused = !1), this.dispatchMediaEvent("play"));
  }
  dispatchMediaEvent(t) {
    const a = new CustomEvent(t, { detail: { type: t } });
    this.dispatchEvent(a);
  }
}
const Se = "mk-void-media-element",
  Er = Date.parse("January 01, 2001 0:00:00 GMT");
class kr extends oi {
  constructor(t) {
    super(t);
    o(this, "currentAudioTrack");
    o(this, "currentTextTrack");
    o(this, "textTracks", []);
    o(this, "audioTracks", []);
    o(this, "timerId");
    o(this, "element");
    o(this, "extension");
    o(this, "mediaPlayerType", "void");
    o(this, "playerName", "VoidPlayer");
    customElements.get(Se) !== void 0 || customElements.define(Se, Ir);
  }
  startTimerProgress() {
    this.timerId ||
      (this.timerId = setInterval(() => {
        var l, y, f;
        const t = (l = this._nowPlayingItem) == null ? void 0 : l.attributes.elapsedTimeTimestamp,
          a = (y = this._nowPlayingItem) == null ? void 0 : y.attributes.elapsedTime,
          r = t * 1e3 + Er,
          s = (Date.now() - r) / 1e3;
        let n = 0;
        a > 0 &&
          (n = Math.ceil(
            Math.min(
              ((f = this._nowPlayingItem) == null ? void 0 : f.attributes.durationInMillis) / 1e3,
              (a + s) * this._targetElement.playbackRate,
            ),
          ));
        const c = this._targetElement.currentTime + 1;
        this.seekToTime(Math.max(n, c));
      }, 1e3));
  }
  stopTimerProgress() {
    (clearInterval(this.timerId), (this.timerId = void 0));
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
  get nowPlayingItem() {
    return this._nowPlayingItem;
  }
  set nowPlayingItem(t) {
    if (t === this.nowPlayingItem) return;
    const a = this._dispatcher;
    (a.publish(U.nowPlayingItemWillChange, { item: t }),
      (this._nowPlayingItem = t),
      t && (t.state = ci.playing),
      a.publish(U.nowPlayingItemDidChange, { item: t }),
      a.publish(U.playbackDurationDidChange, {
        currentTarget: this._targetElement,
        duration: this.currentPlaybackDuration,
        target: this._targetElement,
        type: "durationchange",
      }));
  }
  get _targetElement() {
    return this.element;
  }
  async initializeMediaElement() {
    const t = document.createElement(Se);
    ((t.id = "apple-music-player"),
      (this.element = t),
      document.body.appendChild(t),
      vt.debug("initializedMediaElement", t));
  }
  removeEventHandlers() {
    super.removeEventHandlers();
  }
  async seekToTime(t) {
    this._targetElement.currentTime = t;
  }
  async setPresentationMode(t) {
    return Promise.resolve();
  }
  async loadPreviewImage(t) {}
  async playItemFromEncryptedSource() {
    return Promise.resolve();
  }
  async initializeExtension() {}
  async preloadItem(t, a) {}
}
function $t(i) {
  return { hours: Math.floor(i / 3600), minutes: Math.floor((i % 3600) / 60) };
}
function us(i) {
  return $t(i / 1e3);
}
function ls(i, e = ":") {
  const { hours: t, minutes: a } = $t(i);
  i = Math.floor((i % 3600) % 60);
  const r = [];
  return (
    t ? (r.push(`${t}`), r.push(a < 10 ? `0${a}` : `${a}`)) : r.push(`${a}`),
    r.push(i < 10 ? `0${i}` : `${i}`),
    r.join(e)
  );
}
const P = X.createChild("mpaf"),
  Ie = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "undefined":
        return "undefined";
      default:
        return `PlayActivityEndReasonType.${m[i]}`;
    }
  },
  ut = new Map([
    [p.playbackPlay, "play"],
    [p.playbackPause, "pause"],
    [p.playbackScrub, "scrub"],
    [p.playbackSeek, "seek"],
    [p.playbackSkip, "skip"],
    [p.playbackStop, "stop"],
    [p.playerActivate, "activate"],
    [p.playerExit, "exit"],
    [p.timedMetadata, "timedMetadata"],
  ]);
class xe {
  constructor() {
    o(this, "instance");
    o(this, "services");
    o(this, "_activityTracker");
    o(this, "reportTimedMetadata", new Set());
    o(this, "musicLiveVideoStartTime", 0);
  }
  get requestedEvents() {
    return Array.from(ut.keys());
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  get activityTracker() {
    if (this._activityTracker === void 0)
      throw new b(b.Reason.CONFIGURATION_ERROR, "Play Activity service was called before configuration.");
    return this._activityTracker;
  }
  static async create(e) {
    const t = new xe();
    return (await t.configure(e), t);
  }
  async configure(e) {
    ((this.instance = e.instance),
      (this.services = e.services),
      (this._activityTracker = Rr(e.instance, { runtime: e.services.runtime, request: e.services.request })));
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = ut.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async activate(e, t = {}) {
    (P.debug("Activating MPAF tracker"),
      await this.activityTracker.activate(t.flush),
      this.reportTimedMetadata.clear());
  }
  async exit(e, t = {}) {
    (P.debug("PAF debug", `client.exit(${t.position})`), this.activityTracker.exit(t.position));
  }
  async pause(e, t = {}) {
    if (
      ((e == null ? void 0 : e.id) !== void 0 && this.reportTimedMetadata.add(e.id), typeof t.endReasonType == "number")
    )
      return (
        P.debug("PAF debug", `client.stop(${t.position}, ${t.endReasonType})`),
        this.activityTracker.stop(t.position, t.endReasonType)
      );
    (P.debug("PAF debug", `client.pause(${t.position})`), this.activityTracker.pause(t.position));
  }
  async play(e, t = {}) {
    const a = lt(p.playbackPlay, this.instance, e);
    (Ke(e, "video") && (this.musicLiveVideoStartTime = Date.now()),
      P.debug("PAF debug", `client.play(${JSON.stringify(a)}, ${t.position})`),
      this.activityTracker.play(a, t.position),
      this.reportTimedMetadata.add(e.id));
  }
  async scrub(e, t = {}) {
    (P.debug("PAF debug", `client.scrub(${t.position}, ${Ie(t.endReasonType)})`),
      this.activityTracker.scrub(t.position, t.endReasonType),
      e !== void 0 && t.endReasonType === m.SCRUB_END && this.reportTimedMetadata.delete(e.id));
  }
  async seek(e, t = {}) {
    (await this.scrub(e, { position: t.startPosition, endReasonType: m.SCRUB_BEGIN }),
      await this.scrub(e, { position: t.position, endReasonType: m.SCRUB_END }));
  }
  async skip(e, t = {}) {
    const a = lt(p.playbackSkip, this.instance, e);
    P.debug("PAF debug", `client.skip(${JSON.stringify(a)}, ${Ie(t.direction)}, ${t.position})`);
    try {
      (await this.activityTracker.skip(a, t.direction, t.position), this.reportTimedMetadata.add(e.id));
    } catch (r) {
      if (r.message === Gi) await this.play(e, t);
      else return Promise.reject(r);
    }
  }
  async stop(e, t = {}) {
    var a;
    (Ke(e, "video")
      ? ((t.position = (Date.now() - this.musicLiveVideoStartTime) / 1e3), (this.musicLiveVideoStartTime = 0))
      : e != null && e.isLiveRadioStation && t.position && (t.position = t.position - (t.startPosition || 0)),
      e != null &&
        e.isLiveRadioStation &&
        (t.endReasonType = (a = t.endReasonType) != null ? a : m.PLAYBACK_MANUALLY_PAUSED),
      P.debug("PAF debug", `client.stop(${t.position}, ${Ie(t.endReasonType)})`),
      this.activityTracker.stop(t.position, t.endReasonType),
      (e == null ? void 0 : e.id) !== void 0 && this.reportTimedMetadata.delete(e.id));
  }
  async timedMetadata(e, t) {
    var s, n;
    if (
      e === void 0 ||
      t === void 0 ||
      t.position === void 0 ||
      ((s = t.metadata) == null ? void 0 : s.blob) === void 0
    ) {
      P.warn("Missing data for TimedMetadata event", t, e);
      return;
    }
    if (e.isRadioStation) {
      if (e.isLiveRadioStation) {
        (P.debug(`Ignoring TimedMetadata at ${t.position}: Live Radio Station`),
          (this.activityTracker.timedMetadata = void 0));
        return;
      }
    } else {
      (P.debug(`Ignoring TimedMetadata at ${t.position}: Not a Radio Station`),
        (this.activityTracker.timedMetadata = void 0));
      return;
    }
    const a = (n = t.metadata) == null ? void 0 : n.blob,
      r = this.activityTracker.timedMetadata;
    if (this.reportTimedMetadata.has(e.id))
      (a === void 0 && r !== void 0) || ui(a, r)
        ? P.debug(`Skipping TimedMetadata report at ${t.position}: unchanged`, ne(a))
        : (P.debug(`Reporting current TimedMetadata at ${t.position}`, ne(r)),
          this.activityTracker.pingTimedMetadata(t.position, r));
    else {
      P.debug(`Skipping TimedMetadata report at ${t.position}: disabled for ${e.id} (${e.info})`, ne(a));
      const c = this.activityTracker.timeline.at(-1);
      c !== void 0 &&
        (c.eventType === u.PLAY_START || c.endReasonType === m.SCRUB_END) &&
        this.reportTimedMetadata.add(e.id);
    }
    (P.debug(`Storing new TimedMetadata at ${t.position}`, ne(a)), (this.activityTracker.timedMetadata = a));
  }
  shouldTrackPlayActivity(e, t) {
    const a = li(),
      r = !t || t.playbackType !== Le.preview,
      s = this.alwaysSendForActivityType(e),
      n = !t || (t && this.mediaRequiresPlayActivity(t));
    return !!(a && r && (s || n));
  }
  alwaysSendForActivityType(e) {
    return e === p.playerActivate || e === p.playerExit;
  }
  mediaRequiresPlayActivity(e) {
    return di(e) || ["musicMovie", "musicVideo", "song", "radioStation"].indexOf(e.type) !== -1;
  }
}
function lt(i, e, t) {
  const a = { ...Dr(i, t, e), ...Or(i, t), ...Cr(i, t), ...Lr(i, t), ...xr(i, t) };
  return (P.trace("PAF descriptor", a), a);
}
const wr = Pt.register("mk-use-paf-qa-endpoint");
function Rr(i, e) {
  var t, a;
  return new Sr(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: {
      build: V.app.build,
      name: (t = V.app.name) != null ? t : "",
      version: V.app.version,
      bundleId: (a = V.app) == null ? void 0 : a.bundleId,
    },
    fetch: e.request.fetch,
    isQA: wr.enabled,
    logInfo: P.enabled,
    sourceType: i.sourceType,
    guid: i.guid,
    userIsSubscribed: () => !!(i.isAuthorized && B.storekit._getIsActiveSubscription.getCachedValue()),
  });
}
function Mr(i) {
  return (
    i.hasAutoplayStation &&
    i.items.some((e) => {
      const { id: t, type: a, container: r } = e;
      if (r && r.type === "stations" && r.name === mt.RADIO) return !1;
      let s = a;
      return (q(t) && (s = s.startsWith("library-") ? s : "library-" + s), pi(hi(s)));
    })
  );
}
function Dr(i, e, t) {
  if ((t == null ? void 0 : t.playbackActions) === void 0 || e === void 0) return {};
  const a = { [j.all]: ae.REPEAT_ALL, [j.none]: ae.REPEAT_OFF, [j.one]: ae.REPEAT_ONE },
    r = { [J.off]: Pe.SHUFFLE_OFF, [J.songs]: Pe.SHUFFLE_ON };
  return {
    playMode() {
      let s = ae.REPEAT_UNKNOWN,
        n = Pe.SHUFFLE_UNKNOWN,
        c = re.AUTO_UNKNOWN;
      const { playbackActions: l } = t;
      return (
        l &&
          (l.includes(ge.REPEAT) && (s = a[t.repeatMode]),
          l.includes(ge.SHUFFLE) && (n = r[t.shuffleMode]),
          l.includes(ge.AUTOPLAY) &&
            (t.autoplayEnabled && t.queue !== void 0
              ? (c = Mr(t.queue) ? re.AUTO_ON : re.AUTO_ON_CONTENT_UNSUPPORTED)
              : (c = re.AUTO_OFF))),
        { repeatPlayMode: s, shufflePlayMode: n, autoplayMode: c }
      );
    },
  };
}
const pe = (i) => [p.playbackPlay, p.playbackSkip].includes(i),
  Bt = (i, e) => e !== void 0 && pe(i);
function Or(i, e) {
  var a;
  if (!pe(i)) return {};
  if (e === void 0) return {};
  const t = (a = e.attributes) == null ? void 0 : a.mediaKind;
  return { ...(t !== void 0 ? { mediaType: t } : {}), ...e.playParams };
}
function Cr(i, e) {
  if (!pe(i) || e === void 0) return {};
  const { context: t = {} } = e;
  return { recoData: t.reco_id };
}
function Lr(i, e) {
  if (!pe(i) || e === void 0) return {};
  const t = e.playbackDuration;
  return t ? { duration: t / 1e3 } : {};
}
function Nr(i, e) {
  var t;
  return (Bt(i, e) && ((t = e == null ? void 0 : e.container) == null ? void 0 : t.name)) || null;
}
function Ur(i) {
  const e = { ...i };
  return (delete e.attributes, e);
}
function xr(i, e) {
  var r, s, n, c;
  const t = Nr(i, e),
    a = Bt(i, e)
      ? {
          ...(e == null ? void 0 : e.container),
          ...((s = (r = e == null ? void 0 : e.container) == null ? void 0 : r.attributes) == null
            ? void 0
            : s.playParams),
          ...(((c = (n = e == null ? void 0 : e.container) == null ? void 0 : n.attributes) == null
            ? void 0
            : c.hasCollaboration) && { isCollaborative: !0 }),
        }
      : null;
  if (!(t === null && a === null)) return { container: Ur({ ...a, ...(t !== null ? { name: t } : {}) }) };
}
function ne(i, e = 12) {
  if ((i instanceof Uint8Array && (i = _t(i)), typeof i == "string")) {
    const t = Math.floor(e / 2);
    return i.length > e ? i.slice(0, t) + "..." + i.slice(-t) : i;
  }
  return "0x0000";
}
const De = X.createChild("lyrics"),
  dt = new Map([
    [p.lyricsPlay, "lyricsPlay"],
    [p.lyricsStop, "lyricsStop"],
    [p.lyricsUpdate, "lyricsUpdate"],
    [p.playerExit, "exit"],
  ]);
class Yr {
  constructor() {
    o(this, "instance");
    o(this, "services");
    o(this, "_activityTracker");
  }
  get requestedEvents() {
    return Array.from(dt.keys());
  }
  get activityTracker() {
    if (this.instance === void 0 || this.services === void 0)
      throw new b(b.Reason.CONFIGURATION_ERROR, "Lyrics Play Activity service was called before configuration.");
    return (
      this._activityTracker === void 0 &&
        (this._activityTracker = $r(this.instance, { runtime: this.services.runtime, request: this.services.request })),
      this._activityTracker
    );
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  static async configure(e) {
    const t = new this();
    return (t.configure(e), t);
  }
  async configure(e) {
    ((this.instance = e.instance), (this.services = e.services));
  }
  handleEvent(e, t, a) {
    const r = dt.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async lyricsPlay(e, t) {
    const a = t == null ? void 0 : t.lyrics;
    if (a === void 0)
      throw new b(b.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsPlay");
    if (e === void 0) throw new b(b.Reason.MEDIA_DESCRIPTOR, "Cannot display lyrics without a MediaItem");
    this.activityTracker.play(Br(p.lyricsPlay, e, a));
  }
  async lyricsStop(e, t) {
    this.activityTracker.stop();
  }
  async lyricsUpdate(e, t) {
    const a = t == null ? void 0 : t.lyrics;
    if (a === void 0)
      throw new b(b.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsUpdate");
    try {
      if (this.activityTracker.startDescriptor === void 0) {
        De.warn("lyricsUpdate called but no lyrics are being tracked");
        return;
      }
      this.activityTracker.update(a);
    } catch (r) {
      De.warn(`lyricsUpdate failed: ${r.message}`);
    }
  }
  async exit(e, t) {
    this.activityTracker.exit();
  }
}
const Fr = Pt.register("mk-use-paf-qa-endpoint");
function $r(i, e) {
  var t;
  return new ur(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: V.app.build, name: (t = V.app.name) != null ? t : "", version: V.app.version },
    fetch: e.request.fetch,
    logInfo: De.level <= yi.INFO,
    sourceType: i.sourceType,
    isQA: Fr.enabled,
    userIsSubscribed: () => i.isAuthorized && B.storekit._getIsActiveSubscription.getCachedValue(),
  });
}
function Br(i, e, t) {
  var r, s, n, c;
  return {
    id: e.id,
    duration: 0,
    eventType: u.LYRIC_DISPLAY,
    container: {
      ...e.container,
      ...((s = (r = e.container) == null ? void 0 : r.attributes) == null ? void 0 : s.playParams),
    },
    ...e.playParams,
    lyricDescriptor: { id: (n = t.id) != null ? n : e.id, displayType: t.displayType, language: t.language },
    recoData: (c = e.attributes) == null ? void 0 : c.reco_id,
  };
}
class Gt extends fi {
  get api() {
    return this.services.mediaAPIAccess;
  }
  async changeToMediaItem(e) {
    return (this.assertUserStorefront(), super.changeToMediaItem(e));
  }
  async play() {
    return (this.assertUserStorefront(), super.play());
  }
  async playMediaItem(e, t) {
    if (this._isPlaybackSupported()) return (this.assertUserStorefront(), super.playMediaItem(e, t));
  }
  async setStationQueue(e) {
    var s, n;
    if ((E.debug("instance.setStationQueue()", e), this.assertUserStorefront(), !this._isPlaybackSupported())) {
      E.warn("Playback is not supported");
      return;
    }
    const t = this.services.itemLoader.convertOptionsToItemDescriptors(e);
    if (t.length < 1) throw new b(b.Reason.CONTENT_UNAVAILABLE, "Could not parse descriptors from options");
    let a;
    const r = t[0];
    if (r.kind === "song" || r.kind === "artist")
      a = (await this.services.itemLoader.createAutoplayStation([r], { context: e.context, withTracks: !1 })).station;
    else {
      const c = await this.loadItems(e);
      if (!((s = c[0]) != null && s.isRadioStation) && !((n = c[0]) != null && n.isRadioEpisode))
        throw new b(b.Reason.CONTENT_UNSUPPORTED, `Unsupported Radio Station type: ${c[0].type}`);
      a = c[0];
    }
    return this.setQueue({
      item: a,
      shuffleMode: e.shuffleMode,
      repeatMode: e.repeatMode,
      startPlaying: e.startPlaying,
      startTime: e.startTime,
      startWith: e.startWith,
      context: e.context,
      parameters: e.parameters,
      autoplay: e.autoplay,
    });
  }
  async setQueue(e) {
    var s;
    if ((E.debug("instance.setQueue()", e), this.assertUserStorefront(), !this._isPlaybackSupported())) {
      E.warn("Playback is not supported");
      return;
    }
    (this.signalChangeItemIntent(), this.deferPlayback());
    const t = await this.loadItems(e),
      r = await (
        await this.setPlaybackController(this.playbackControllerForItems(t))
      ).replaceQueue(t, {
        context: e.context || {},
        shuffleMode: e.shuffleMode,
        repeatMode: e.repeatMode,
        startTime: e.startTime,
        startWith: e.startWith,
      });
    return (
      e.autoplay !== void 0 && mi("autoplay", { message: "autoplay has been deprecated, use startPlaying instead" }),
      ((s = e.startPlaying) != null ? s : e.autoplay) === !0 && (await this.play()),
      r
    );
  }
  assertUserStorefront() {
    const e = B.storekit.storefrontCountryCode,
      t = B.storefrontId,
      a = e !== void 0 && e !== t;
    if (this.realm === gt.MUSIC && !this.previewOnly && a === !0) throw new b(b.Reason.CONTENT_EQUIVALENT);
  }
  async playNext(e, t) {
    var a, r;
    if (!this._isPlaybackSupported()) {
      E.warn("Playback is not supported");
      return;
    }
    return (
      this.deferPlayback(),
      this.getPlaybackController().prependToQueue(await this.loadItems(e), {
        clear: (r = (a = e == null ? void 0 : e.clear) != null ? a : t) != null ? r : !1,
      })
    );
  }
  async playLater(e) {
    if (!this._isPlaybackSupported()) {
      E.warn("Playback is not supported");
      return;
    }
    return (this.deferPlayback(), this.getPlaybackController().appendToQueue(await this.loadItems(e)));
  }
  async playAt(e, t) {
    if (!this._isPlaybackSupported()) {
      E.warn("Playback is not supported");
      return;
    }
    return (this.deferPlayback(), this.getPlaybackController().insertInQueue(await this.loadItems(t), e));
  }
  async clearQueue() {
    var e;
    return (
      this._mediaItemPlayback.clearNextManifest(), (e = this.playbackController) == null ? void 0 : e.clearQueue()
    );
  }
  lyricsStart(e) {
    this.services.dispatcher.publish(p.lyricsPlay, { item: this.nowPlayingItem, lyrics: e });
  }
  lyricsStop() {
    this.services.dispatcher.publish(p.lyricsStop);
  }
  lyricsUpdate(e) {
    this.services.dispatcher.publish(p.lyricsUpdate, { lyrics: e });
  }
  async loadItems(e) {
    var t, a;
    return this.services.itemLoader.loadItems({
      ...e,
      restricted: (a = (t = B.storekit) == null ? void 0 : t.restrictedEnabled) != null ? a : !1,
    });
  }
}
var Gr = Object.defineProperty,
  Vr = Object.getOwnPropertyDescriptor,
  Qr = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? Vr(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && Gr(e, t, r), r);
  };
class Vt {
  constructor(e, t) {
    o(this, "id");
    o(this, "displayName");
    o(this, "participantCount", 0);
    o(this, "dispatcher");
    o(this, "mediaState", {
      autoPlay: !1,
      capabilities: { autoPlayControl: !0, repeatControl: !0, shuffleControl: !0, volumeControl: !0 },
      playbackState: x.none,
      volume: 1,
      queue: [],
      shuffleMode: J.off,
      repeatMode: j.none,
      currentPlayingIndex: 0,
    });
    const { id: a, displayName: r } = e;
    ((this.id = a), (this.displayName = r), (this.dispatcher = t));
  }
  updateState(e) {
    const { displayName: t, members: a, mediaState: r } = e;
    (t && (this.displayName = t),
      a && (this.participantCount = a.length),
      this.didCapabilitiesChange(r.capabilities, this.mediaState.capabilities) &&
        this.dispatcher.publish(At.capabilitiesChanged),
      (this.mediaState = { ...this.mediaState, ...r }),
      this.dispatcher.publish(R.mediaStateUpdate, this.mediaState));
  }
  shouldUpdate(e, t) {
    return this.mediaState[e] !== t;
  }
  didCapabilitiesChange(e, t) {
    for (const a in e) if (e[a] !== t[a]) return !0;
    return !1;
  }
  checkCapability(e) {
    const { capabilities: t } = this.mediaState;
    switch (e) {
      case C.AUTOPLAY:
        return t.autoPlayControl;
      case C.REPEAT:
        return t.repeatControl;
      case C.SHUFFLE:
        return t.shuffleControl;
      case C.VOLUME:
        return t.volumeControl;
      case C.SEEK:
      case C.EDIT_QUEUE:
      case C.PAUSE:
      case C.SKIP_NEXT:
      case C.SKIP_PREVIOUS:
      case C.SKIP_TO_ITEM:
        return !0;
      default:
        return !1;
    }
  }
  get lastKnownElapsedTime() {
    const { queue: e, currentPlayingIndex: t } = this.mediaState,
      a = e[t];
    return Math.round(a == null ? void 0 : a.attributes.elapsedTime) || 0;
  }
}
Qr([H()], Vt.prototype, "checkCapability", 1);
const F = (i) => (e, t, a) => {
  const r = a.value;
  return (
    (a.value = function (...s) {
      if (this.isInSharePlay) {
        i && this.services.dispatcher.publish(i);
        return;
      }
      return r.apply(this, s);
    }),
    a
  );
};
var zr = Object.defineProperty,
  Kr = Object.getOwnPropertyDescriptor,
  N = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? Kr(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && zr(e, t, r), r);
  };
class O extends Gt {
  constructor() {
    super(...arguments);
    o(this, "_sharePlay");
    o(this, "_shuffleMode", J.off);
    o(this, "_voidPlayer");
    o(this, "_previousPlaybackState", {
      playbackMode: Ae.MIXED_CONTENT,
      volume: 1,
      autoplayEnabled: !1,
      repeatMode: j.none,
      shuffleMode: J.off,
    });
  }
  get sharePlay() {
    return this._sharePlay;
  }
  get isInSharePlay() {
    return this.playbackMode === Ae.SHAREPLAY_PARTICIPANT;
  }
  async startSharePlay(t) {
    if (this.sharePlay !== void 0) return this.sharePlay;
    this.savePlaybackState();
    const a = new Vt(t, this.services.dispatcher);
    return (
      this.services.dispatcher.subscribe(R.mediaStateUpdate, this.onMediaStateUpdate),
      (this._voidPlayer = new kr(
        Ti({
          context: {},
          tokens: {},
          services: { ...this.services, store: B },
          autoplayEnabled: this.autoplayEnabled,
          privateEnabled: this.privateEnabled,
          siriInitiated: this.siriInitiated,
        }),
      )),
      (this.playbackMode = Ae.SHAREPLAY_PARTICIPANT),
      (this._sharePlay = a),
      this.capabilities.updateChecker(a.checkCapability),
      await this._voidPlayer.initialize(),
      await this._mediaItemPlayback.setCurrentPlayer(this._voidPlayer),
      this.services.playActivity.disable(),
      a
    );
  }
  async endSharePlay() {
    this.isInSharePlay &&
      (this.updateQueue([], 0),
      (this._sharePlay = void 0),
      this.services.dispatcher.unsubscribe(R.mediaStateUpdate, this.onMediaStateUpdate),
      this.capabilities.updateChecker(this.getPlaybackController().hasCapabilities),
      this.services.playActivity.enable(),
      this.restorePlaybackState());
  }
  get shuffleMode() {
    return this.isInSharePlay ? this._shuffleMode : this.getPlaybackController().shuffleMode;
  }
  set shuffleMode(t) {
    var a;
    if (!this.isInSharePlay) {
      this.getPlaybackController().shuffleMode = t;
      return;
    }
    t !== this._shuffleMode &&
      ((this._shuffleMode = t),
      this.services.dispatcher.publish(At.shuffleModeDidChange, t),
      (a = this.sharePlay) != null &&
        a.shouldUpdate("shuffleMode", t) &&
        this.services.dispatcher.publish(R.shuffleModeChanged, t));
  }
  get repeatMode() {
    return super.repeatMode;
  }
  set repeatMode(t) {
    var a;
    ((super.repeatMode = t),
      (a = this.sharePlay) != null &&
        a.shouldUpdate("repeatMode", this.repeatMode) &&
        this.services.dispatcher.publish(R.repeatModeChanged, { repeatMode: this.repeatMode }));
  }
  get autoplayEnabled() {
    return super.autoplayEnabled;
  }
  set autoplayEnabled(t) {
    var a;
    if (!this.capabilities.canAutoplay) {
      E.warn("Setting autoplay is not supported in this playback method");
      return;
    }
    ((super.autoplayEnabled = t),
      (a = this.sharePlay) != null &&
        a.shouldUpdate("autoPlay", this.autoplayEnabled) &&
        this.services.dispatcher.publish(R.autoPlayChanged, { autoPlay: this.autoplayEnabled }));
  }
  get volume() {
    return super.volume;
  }
  set volume(t) {
    var a;
    if (!this.capabilities.canSetVolume) {
      E.warn("Setting volume is not supported in this playback method");
      return;
    }
    ((super.volume = t),
      (a = this.sharePlay) != null &&
        a.shouldUpdate("volume", this.volume) &&
        this.services.dispatcher.publish(R.volumeChanged, { playbackState: this.volume }));
  }
  async play() {
    var t, a;
    (await super.play(),
      (t = this.sharePlay) != null &&
        t.shouldUpdate("playbackState", this.playbackState) &&
        this.services.dispatcher.publish(R.playbackStateChanged, { playbackState: this.playbackState }),
      (a = this._voidPlayer) == null || a.startTimerProgress());
  }
  async pause(t) {
    var a, r;
    (await super.pause(t),
      (a = this.sharePlay) != null &&
        a.shouldUpdate("playbackState", this.playbackState) &&
        this.services.dispatcher.publish(R.playbackStateChanged, { playbackState: this.playbackState }),
      (r = this._voidPlayer) == null || r.stopTimerProgress());
  }
  async seekToTime(t, a = vi.Manual) {
    var r;
    (await super.seekToTime(t, a),
      ((r = this.sharePlay) == null ? void 0 : r.lastKnownElapsedTime) !== this.currentPlaybackTime &&
        this.services.dispatcher.publish(R.progressChanged, { elapsedTime: this.currentPlaybackTime }));
  }
  async skipToNextItem() {
    return super.skipToNextItem();
  }
  async skipToPreviousItem() {
    return super.skipToPreviousItem();
  }
  async playMediaItem(t, a) {
    return super.playMediaItem(t, a);
  }
  async setStationQueue(t) {
    return super.setStationQueue(t);
  }
  async setQueue(t) {
    return super.setQueue(t);
  }
  assertUserStorefront() {
    super.assertUserStorefront();
  }
  async playNext(t, a = !1) {
    return super.playNext(t, a);
  }
  async playLater(t) {
    return super.playLater(t);
  }
  async playAt(t, a) {
    return super.playAt(t, a);
  }
  updateQueue(t, a) {
    if (this.queue === void 0) return;
    const r = t.map((n) => new Pi(n)),
      s = r[a];
    (s && (s.playbackType = Le.encryptedFull),
      this._voidPlayer && (this._voidPlayer.nowPlayingItem = s),
      this.queue.updateItems(r),
      (this.queue.position = a));
  }
  async onMediaStateUpdate(
    t,
    { autoPlay: a, currentPlayingIndex: r, queue: s, playbackState: n, shuffleMode: c, repeatMode: l, volume: y },
  ) {
    var f, _;
    (this.updateQueue(s, r || 0),
      n === x.paused ? await this.pause() : n === x.playing && (await this.play()),
      (this.autoplayEnabled = a),
      (this.repeatMode = l),
      (this.shuffleMode = c),
      (this.volume = y),
      (this.playbackRate = ((f = this.nowPlayingItem) == null ? void 0 : f.attributes.playbackRate) || 1),
      this.seekToTime(((_ = this.sharePlay) == null ? void 0 : _.lastKnownElapsedTime) || 0));
  }
  savePlaybackState() {
    const { playbackMode: t, repeatMode: a, shuffleMode: r, volume: s, autoplayEnabled: n } = this;
    this._previousPlaybackState = { autoplayEnabled: n, playbackMode: t, repeatMode: a, shuffleMode: r, volume: s };
  }
  restorePlaybackState() {
    const {
      autoplayEnabled: t,
      playbackMode: a,
      repeatMode: r,
      shuffleMode: s,
      volume: n,
    } = this._previousPlaybackState;
    ((this.autoplayEnabled = t),
      (this.playbackMode = a),
      (this.repeatMode = r),
      (this.shuffleMode = s),
      (this.volume = n));
  }
}
N([F(R.nextItem)], O.prototype, "skipToNextItem", 1);
N([F(R.previousItem)], O.prototype, "skipToPreviousItem", 1);
N([F()], O.prototype, "playMediaItem", 1);
N([F()], O.prototype, "setStationQueue", 1);
N([F()], O.prototype, "setQueue", 1);
N([F()], O.prototype, "assertUserStorefront", 1);
N([F()], O.prototype, "playNext", 1);
N([F()], O.prototype, "playLater", 1);
N([F()], O.prototype, "playAt", 1);
N([H()], O.prototype, "onMediaStateUpdate", 1);
var Oe = ((i) => ((i.MANUAL = "manual"), (i.AUTOMATIC = "automatic"), (i.UNKNOWN = "unknown"), i))(Oe || {}),
  $ = ((i) => ((i.buffering = "buffering"), (i.idle = "idle"), (i.paused = "paused"), (i.playing = "playing"), i))(
    $ || {},
  ),
  S = ((i) => (
    (i.bufferStart = "BUFFER_START"),
    (i.bufferStop = "BUFFER_STOP"),
    (i.exit = "EXIT"),
    (i.play = "PLAY"),
    (i.pause = "PAUSE"),
    (i.stop = "STOP"),
    (i.newItem = "NEW"),
    i
  ))(S || {});
const Qt = "~~previous~~",
  Ee = {
    initial: "idle",
    states: {
      idle: {
        on: {
          PLAY: {
            target: "playing",
            context: { reason: v.PLAY_START_REASON.PLAY, manual: "manual", fromInitialPlay: !0 },
          },
          NEW: { target: "playing", context: { reason: v.PLAY_START_REASON.PLAY } },
          EXIT: { target: "idle", context: { reason: v.PLAY_STOP_REASON.COMPLETE, manual: "automatic" } },
        },
      },
      playing: {
        on: {
          BUFFER_START: {
            target: "buffering",
            context: { reason: v.PLAY_STOP_REASON.BUFFERING, manual: "automatic", fromInitialPlay: Qt },
          },
          EXIT: { target: "idle", context: { reason: v.PLAY_STOP_REASON.EXIT } },
          PAUSE: { target: "paused", context: { reason: v.PLAY_STOP_REASON.PAUSE } },
          STOP: { target: "idle", context: { reason: v.PLAY_STOP_REASON.PLAY_OTHER, manual: "automatic" } },
          NEW: { target: "playing", context: { reason: v.PLAY_STOP_REASON.PLAY_OTHER } },
        },
      },
      paused: {
        on: {
          PLAY: { target: "playing", context: { reason: v.PLAY_START_REASON.UNPAUSE, manual: "manual" } },
          NEW: { target: "idle", context: { reason: v.PLAY_STOP_REASON.PLAY_OTHER, manual: "manual" } },
          EXIT: { target: "idle", context: { reason: v.PLAY_STOP_REASON.EXIT } },
        },
      },
      buffering: {
        on: {
          BUFFER_STOP: { target: "playing", context: { reason: v.PLAY_START_REASON.BUFFERING, manual: "automatic" } },
          EXIT: { target: "idle", context: { reason: v.PLAY_STOP_REASON.EXIT } },
        },
      },
    },
  },
  ke = { manual: "unknown", reason: v.PLAY_STOP_REASON.UNKNOWN, fromInitialPlay: !1 };
class qr {
  constructor() {
    o(this, "currentState", Ee.initial);
    o(this, "currentContext", ke);
    o(this, "lastTrackedEvent");
    o(this, "lastPlayStartEvent");
  }
  isAllowedTransition(e) {
    return this.getNextState(e) !== void 0;
  }
  transition(e, t = {}) {
    const a = this.getNextState(e);
    if (!a) return;
    X.debug(`[mk/activity/PodPaf] Transitioning from ${this.currentState} to ${a.target} because of ${e} event`);
    const r = {};
    return (
      t.manual !== void 0 && (r.manual = t.manual),
      t.reason !== void 0 && (r.reason = t.reason),
      t.fromInitialPlay !== void 0 && (r.fromInitialPlay = t.fromInitialPlay),
      (this.currentContext = { ...ke, ...a.context, ...r, ...this.preservePreviousContext(a.context) }),
      (this.currentState = a.target),
      this.currentContext
    );
  }
  reset() {
    ((this.currentState = Ee.initial), (this.currentContext = ke));
  }
  getNextState(e) {
    return Ee.states[this.currentState].on[e];
  }
  preservePreviousContext(e) {
    const t = {};
    return (
      ["manual", "reason", "reasonType", "fromInitialPlay"].forEach((a) => {
        e[a] === Qt && (t[a] = this.currentContext[a]);
      }),
      t
    );
  }
}
const pt = "xp_amp_podcasts_paf",
  Hr = "com.apple.podcasts",
  Wr = "web-podcasts-player",
  jr = "daf.xp.apple.com",
  Jr = "1.0",
  Xr = { [p.playbackPause]: S.pause, [p.playbackPlay]: S.play, [p.playbackStop]: S.stop, [p.playerExit]: S.exit };
var Zr = Object.defineProperty,
  es = Object.getOwnPropertyDescriptor,
  he = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? es(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && Zr(e, t, r), r);
  };
const d = X.createChild("podpaf"),
  I = "PodPAF";
class ee {
  constructor() {
    o(this, "currentItem");
    o(this, "dispatcher");
    o(this, "mkInstance");
    o(this, "services");
    o(this, "tracker");
    o(this, "playActivityProcessor");
    o(this, "synchronizeTimeout");
    o(this, "state");
    this.state = new qr();
  }
  async configure(e) {
    ((this.mkInstance = e.instance), (this.services = e.services), (this.dispatcher = e.services.dispatcher));
    const t = {
        config: { configHostname: () => jr },
        environment: {
          app() {
            return Hr;
          },
          appVersion() {
            return Jr;
          },
          delegateApp() {
            return Wr;
          },
          isOffline() {
            return !1;
          },
          storeFrontCountryCode() {
            return B.storefrontCountryCode;
          },
        },
      },
      a = new gi(pt, t);
    ((this.playActivityProcessor = new Ai(a)), await this.playActivityProcessor.init(), this.setupListeners());
  }
  get requestedEvents() {
    return Array.from(qe.keys());
  }
  get isConfigured() {
    return this.mkInstance !== void 0;
  }
  setupListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.subscribe(U.nowPlayingItemWillChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.subscribe(U.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.subscribe(U.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange));
  }
  teardownListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.unsubscribe(U.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.unsubscribe(U.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.unsubscribe(U.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange));
  }
  async cleanup() {
    (this.teardownListeners(), this.stopSynchronizing());
  }
  async handleNowPlayingItemDidChange(e, t) {
    var r, s, n;
    const { item: a } = t;
    if (!a) {
      (((r = this.state.lastTrackedEvent) == null ? void 0 : r.eventType) === T.PLAY_STARTED &&
        (w(this.tracker, I),
        d.debug("PodPAF: current item naturally ends"),
        await this.trackEvent(
          T.PLAY_STOPPED,
          (n = (s = this.mkInstance) == null ? void 0 : s.currentPlaybackDuration) != null ? n : 0,
          this.tracker.TYPE.AUTOMATIC,
          this.tracker.PLAY_STOP_REASON.COMPLETE,
        )),
        d.debug("PodPAF.handleNowPlayingItemDidChange: calling exit and clearing currentItem"),
        this.state.transition(S.exit),
        this.stopSynchronizing(),
        (this.tracker = void 0),
        (this.currentItem = void 0));
      return;
    }
  }
  async onPlaybackStateChange(e, t) {
    const { state: a } = t,
      r = this.currentItem,
      s = {
        position: this.mkInstance.currentPlaybackTime,
        playingDate: this.mkInstance.currentPlayingDate,
        userInitiated: t.userInitiated,
      },
      n = `PlaybackStates.${x[t.oldState]}`,
      c = `PlaybackStates.${x[t.state]}`;
    (d.debug(`PodPAF.onPlaybackStateChange: ${n} -> ${c}`, s),
      a === x.waiting
        ? (d.debug("PodPAFTracker.onPlaybackStateChange: triggering bufferStart()", s), await this.bufferStart(r, s))
        : a === x.playing
          ? t.oldState === x.waiting &&
            (d.debug("PodPAFTracker.onPlaybackStateChange: triggering bufferEnd()", s), await this.bufferEnd(r, s))
          : a !== x.stalled && d.debug("PodPAFTracker.onPlaybackStateChange: resetting isBuffering=false"));
  }
  handleTargetWirelessChange() {
    var e;
    this.mkInstance !== void 0 && ((e = this.tracker) == null || e.updateData(He(this.mkInstance)));
  }
  shouldTrackPlayActivity(e, t) {
    if (!t || !t.podpafMetrics || t.playbackType === Le.preview) return !1;
    const a = Xr[e];
    return a !== void 0 ? this.state.isAllowedTransition(a) : !0;
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = qe.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async canTrackItem(e, t = {}) {
    var a;
    if (e === void 0) return !1;
    if (((a = this.currentItem) == null ? void 0 : a.id) !== e.id) {
      const { manual: r, reason: s } = this.getContextForNewItem(t);
      (this.state.transition(S.newItem, { manual: r, reason: s, fromInitialPlay: !0 }),
        (this.currentItem = e),
        d.debug("PodPAF: Creating new tracker for new item"),
        await this.createTracker(e));
    }
    return this.tracker !== void 0;
  }
  async createTracker(e) {
    bi(this.playActivityProcessor, I);
    const { mediaActivityTracker: t } = this.playActivityProcessor,
      a = t.createMediaPlaylist(0);
    d.debug("PodPAF: Creating Podcast Playlist");
    const r = { ...e.podpafMetrics, ...this.getAdditionalTrackingData(this.mkInstance, this.services) };
    return (
      (this.tracker = t.createTracker(a, r)),
      d.debug(`PodPAFTracker.createTracker: creating new tracker for ${e == null ? void 0 : e.id}`),
      this.startSynchronizing(),
      this.tracker
    );
  }
  async trackEvent(e, t, a, r) {
    (w(this.tracker, I),
      a === void 0 && (a = this.state.currentContext.manual),
      r === void 0 && (r = this.state.currentContext.reason));
    const s = { eventType: e, position: t, type: a, reason: r },
      n = this.getAdditionalPlaybackData(e, t),
      c = We(t);
    (d.debug(
      `PodPAFTracker.trackEvent(${e}, ${c}, ${a}, ${r}, play duration: ${n.playDuration}, play start position: ${n.playStartPosition})`,
    ),
      (this.state.lastTrackedEvent = s),
      await this.tracker[e].call(this.tracker, c, a, r, n),
      e === T.PLAY_STARTED && (this.state.lastPlayStartEvent = s));
  }
  async bufferStart(e, t) {
    var s, n;
    if ((d.debug("PodPAFTracker: handling bufferStart()"), !(await this.canTrackItem(e)))) {
      d.debug("PodPAFTracker: aborting bufferStart, no tracker");
      return;
    }
    if ((w(this.tracker, I), this.state.currentState !== $.playing)) {
      d.debug("PodPafTracker: aborting bufferStart, not playing");
      return;
    }
    if (((s = this.state.lastTrackedEvent) == null ? void 0 : s.reason) === "seek") {
      d.debug("PodPAFTracker: aborting bufferStart, after a seek");
      return;
    }
    this.state.transition(S.bufferStart);
    const a = this.state.currentContext.fromInitialPlay,
      r = (n = t.position) != null ? n : 0;
    a
      ? d.debug("PodPafTracker: bufferStart() not tracking PLAY_STOPPED, it is from initial play")
      : await this.trackEvent(T.PLAY_STOPPED, r, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_STOP_REASON.BUFFERING);
  }
  async bufferEnd(e, t) {
    var s, n;
    if ((d.debug("PodPAFTracker: handling bufferEnd()"), !(await this.canTrackItem(e)))) return;
    if ((w(this.tracker, I), this.state.currentState !== $.buffering)) {
      d.debug("PodPafTracker: aborting bufferEnd, not buffering");
      return;
    }
    if (((s = this.state.lastTrackedEvent) == null ? void 0 : s.reason) === "seek") {
      d.debug("PodPAFTracker: aborting bufferEnd, after a seek");
      return;
    }
    this.state.transition(S.bufferStop);
    const a = this.state.currentContext.fromInitialPlay,
      r = (n = t.position) != null ? n : 0;
    a
      ? d.debug("PodPafTracker: bufferEnd() not tracking PLAY_STARTED, it is from initial play")
      : await this.trackEvent(T.PLAY_STARTED, r, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.BUFFERING);
  }
  async scrub(e, t = {}) {
    d.debug("PodPAFTracker.scrub()");
  }
  async seek(e, t = {}) {
    (d.debug("PodPAFTracker.seek()"),
      !(e === void 0 || t.position === void 0 || t.startPosition === void 0) &&
        (_i(t) ? await this.trackSeek(e, t) : await this.trackScrub(e, t)));
  }
  async trackScrub(e, t) {
    const a = t.position,
      r = t.startPosition;
    (await this.trackScrubStart(e, r), await this.trackScrubStop(e, a));
  }
  async trackScrubStart(e, t) {
    (d.debug("PodPAFTracker.trackScrubStart()"),
      (await this.canTrackItem(e)) &&
        (w(this.tracker, I),
        this.state.currentState === $.playing &&
          (await this.trackEvent(T.PLAY_STOPPED, t, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_STOP_REASON.SEEK)),
        await this.trackEvent(T.SEEK_STARTED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.SCRUB)));
  }
  async trackScrubStop(e, t) {
    (d.debug("PodPAFTracker.trackScrubStop()"),
      (await this.canTrackItem(e)) &&
        (w(this.tracker, I),
        await this.trackEvent(T.SEEK_STOPPED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_STOP_REASON.SCRUB),
        this.state.currentState === $.playing &&
          (await this.trackEvent(
            T.PLAY_STARTED,
            t,
            this.tracker.TYPE.AUTOMATIC,
            this.tracker.PLAY_START_REASON.SEEK,
          ))));
  }
  async trackSeek(e, t) {
    const a = { ...t, position: t.startPosition };
    (await this.trackSeekStart(e, a), await this.trackSeekStop(e, t));
  }
  async trackSeekStart(e, t) {
    var r;
    if ((d.debug("PodPAFTracker.seekStart()"), !(await this.canTrackItem(e)))) return;
    w(this.tracker, I);
    const a = (r = t.position) != null ? r : 0;
    (this.state.currentState === $.playing &&
      (await this.trackEvent(T.PLAY_STOPPED, a, this.tracker.TYPE.MANUAL, this.tracker.PLAY_STOP_REASON.SEEK)),
      await this.trackEvent(T.SEEK_STARTED, a, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.INTERVAL));
  }
  async trackSeekStop(e, t) {
    var r;
    if ((d.debug("PodPAFTracker.seekEnd()"), !(await this.canTrackItem(e)))) return;
    w(this.tracker, I);
    const a = (r = t.position) != null ? r : 0;
    (await this.trackEvent(T.SEEK_STOPPED, a, this.tracker.TYPE.AUTOMATIC, this.tracker.SEEK_STOP_REASON.INTERVAL),
      this.state.currentState === $.playing &&
        (await this.trackEvent(T.PLAY_STARTED, a, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.SEEK)));
  }
  async play(e, t = {}) {
    var a;
    (d.debug("PodPAFTracker.play()", e, t),
      (await this.canTrackItem(e, t)) &&
        (w(this.tracker, I),
        this.state.transition(S.play, this.getExplicitStateContext(t)),
        await this.trackEvent(T.PLAY_STARTED, (a = t.position) != null ? a : 0)));
  }
  async pause(e, t = {}) {
    var a, r;
    (d.debug("PodPAFTracker.pause()", e, t),
      (await this.canTrackItem(e, t)) &&
        (w(this.tracker, I),
        this.state.transition(S.pause, this.getExplicitStateContext(t)),
        await this.trackEvent(
          T.PLAY_STOPPED,
          (a = t.position) != null ? a : 0,
          void 0,
          (r = this.tracker) == null ? void 0 : r.PLAY_STOP_REASON.PAUSE,
        )));
  }
  async skip(e, t = {}) {
    var a, r, s;
    (d.debug("PodPAFTracker.skip()", e, t),
      (await this.canTrackItem(e, t)) &&
        (w(this.tracker, I),
        this.state.transition(S.play, this.getExplicitStateContext(t)),
        await this.trackEvent(
          T.PLAY_STARTED,
          (a = t.position) != null ? a : 0,
          (r = this.tracker) == null ? void 0 : r.TYPE.AUTOMATIC,
          (s = this.tracker) == null ? void 0 : s.PLAY_START_REASON.PLAY_OTHER,
        )));
  }
  async stop(e, t = {}) {
    var a;
    (d.debug("PodPAFTracker.stop()", e, t),
      (await this.canTrackItem(e)) &&
        (w(this.tracker, I),
        this.state.transition(S.stop, this.getExplicitStateContext(t)),
        await this.trackEvent(T.PLAY_STOPPED, (a = t.position) != null ? a : 0),
        this.stopSynchronizing(),
        (this.currentItem = void 0)));
  }
  async exit(e, t = {}) {
    var a;
    (d.debug("PodPAFTracker.exit()"),
      (await this.canTrackItem(this.currentItem)) &&
        (this.state.transition(S.exit),
        await this.trackEvent(T.PLAY_STOPPED, (a = t.position) != null ? a : 0),
        this.stopSynchronizing(),
        (this.currentItem = void 0)));
  }
  synchronize() {
    if (this.tracker === void 0 || this.mkInstance === void 0 || this.currentItem === void 0) {
      this.stopSynchronizing();
      return;
    }
    const e = this.state.currentState === $.paused,
      { playbackRate: t, currentPlaybackTime: a } = this.mkInstance,
      r = e ? 0 : t,
      s = Math.round(a * 1e3);
    (d.debug(`PodPAF: synchronize rate: ${r} and current time: ${s}`), this.tracker.synchronize(r, s));
  }
  startSynchronizing() {
    this.synchronizeTimeout === void 0 && (this.synchronizeTimeout = setInterval(this.synchronize, 6e4));
  }
  stopSynchronizing() {
    this.synchronizeTimeout !== void 0 && (clearInterval(this.synchronizeTimeout), (this.synchronizeTimeout = void 0));
  }
  getContextForNewItem(e) {
    let t;
    const a = e == null ? void 0 : e.userInitiated,
      { lastTrackedEvent: r } = this.state,
      s = r === void 0;
    a !== void 0 ? (t = this.determineManual(e)) : (t = s ? Oe.MANUAL : Oe.AUTOMATIC);
    const n = s ? v.PLAY_START_REASON.PLAY : a ? v.PLAY_START_REASON.PLAY_OTHER : v.PLAY_START_REASON.NEXT;
    return { manual: t, reason: n };
  }
  getMappedStopReason(e) {
    if (e.endReasonType !== void 0) return v.PLAY_STOP_REASON[Si[e.endReasonType]];
  }
  determineManual(e) {
    let t;
    const a = e == null ? void 0 : e.userInitiated;
    return (a !== void 0 && (t = a ? v.TYPE.MANUAL : v.TYPE.AUTOMATIC), t);
  }
  getExplicitStateContext(e) {
    return { manual: this.determineManual(e), reason: this.getMappedStopReason(e) };
  }
  getAdditionalPlaybackData(e, t) {
    const { lastPlayStartEvent: a, lastTrackedEvent: r } = this.state;
    let s,
      n = a == null ? void 0 : a.position;
    return (
      e === T.PLAY_STARTED
        ? (n = t)
        : (r == null ? void 0 : r.eventType) === T.PLAY_STARTED && (s = t - (n != null ? n : 0)),
      { playDuration: s, playStartPosition: n }
    );
  }
  getAdditionalTrackingData(e, t) {
    var s, n;
    const { delegatedPlayback: a } = He(e),
      { currentPlaybackDuration: r } = e;
    return {
      delegatedPlayback: a,
      isSignedIn: B.isAuthorized,
      language: Ii((s = Ei()) == null ? void 0 : s[0]),
      playStartTime: new Date().getTime(),
      playerHardwareFamily: a === "Airplay" ? ((n = t.runtime) == null ? void 0 : n.userAgent.ua) : void 0,
      topic: pt,
      overallLength: We(r),
      contentLength: r,
    };
  }
}
he([H()], ee.prototype, "handleNowPlayingItemDidChange", 1);
he([H()], ee.prototype, "onPlaybackStateChange", 1);
he([H()], ee.prototype, "handleTargetWirelessChange", 1);
he([H()], ee.prototype, "synchronize", 1);
const ts = () => ({
  results: {
    links: [
      {
        feature: "album-song",
        regex: "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/albums?/(?:[^/]+/)?(?<album>\\d+)$",
        requiredQueryParams: { i: "(?<identifier>\\d+)" },
        mediaAPI: { resources: ["songs"] },
      },
      {
        feature: "albums",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/albums?/(?:[^/]+/)?(?<identifier>\\d+)$",
        mediaAPI: { resources: ["albums"] },
      },
      {
        feature: "algo-stations",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/stations?/(?:[^/]+/)?(?<identifier>(?:ra|st).\\d+)",
        mediaAPI: { resources: ["stations"] },
      },
      {
        feature: "artist-default-playable-content",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/artists?/(?:[^/]+/)?(?<identifier>\\d+)$",
        mediaAPI: { resources: ["artists", "default-playable-content"] },
      },
      {
        feature: "genre-stations",
        regex: "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/genre-stations?",
        mediaAPI: {
          resources: ["stations"],
          parameterMapping: {
            genres: "filter[genres]",
            eras: "filter[eras]",
            tags: "filter[tags]",
            moods: "filter[moods]",
          },
        },
      },
      {
        feature: "library-albums",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/library/albums?/(?:[^/]+/)?(?<identifier>(?:l).[a-zA-Z0-9-]+)$",
        mediaAPI: { resources: ["albums"] },
      },
      {
        feature: "library-album-song",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/library/albums?/(?:[^/]+/)?(?<album>(?:l).[a-zA-Z0-9-]+)$",
        requiredQueryParams: { i: "(?<identifier>i\\.[a-zA-Z0-9-]+)" },
        mediaAPI: { resources: ["songs"] },
      },
      {
        feature: "library-playlists",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/library/playlists?/(?:[^/]+/)?(?<identifier>(?:p).[a-zA-Z0-9-]+)$",
        mediaAPI: { resources: ["playlists"] },
      },
      {
        feature: "music-videos",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/music-videos?/(?:[^/]+/)?(?<identifier>\\d+)$",
        mediaAPI: { resources: ["musicVideos"] },
      },
      {
        feature: "personal-general-radio",
        regex: "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/stations?/me$",
        mediaAPI: { resources: ["stations"], parameters: { "filter[identity]": "personal" } },
      },
      {
        feature: "personal-mixes",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/(?:personal-)?mix/(?:[^/]+/)?(?<identifier>mx.(?:\\d{1,2}|rp-\\d{4}))$",
        mediaAPI: { resources: ["playlists"] },
      },
      {
        feature: "playlists",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/playlists?/(?:[^/]+/)?(?<identifier>(?:pl).[a-zA-Z0-9-]+)$",
        mediaAPI: { resources: ["playlists"] },
      },
      {
        feature: "song",
        regex:
          "http(?:s)?://(?<realm>itunes|music).apple.com/(?<storefront>\\w{2})/songs?/(?:[^/]+/)?(?<identifier>\\d+)$",
        mediaAPI: { resources: ["songs"] },
      },
      {
        feature: "steering-request",
        regex: "http(?:s)?://(?<realm>itunes|music).apple.com/me/stations?/change-station/?$",
        mediaAPI: { resources: ["stations"] },
      },
    ],
  },
});
async function is() {
  const i = ts().results.links.map(
    (e) => (
      (e.regex = new RegExp(e.regex)),
      e.requiredQueryParams &&
        (e.requiredQueryParams = Object.keys(e.requiredQueryParams).reduce(
          (t, a) => ((t[a] = new RegExp(e.requiredQueryParams[a])), t),
          {},
        )),
      e
    ),
  );
  return Promise.resolve(i);
}
function as(i, e, t = {}) {
  const [a] = i.split(/\?|\#|\&/),
    r = e.regex.test(a);
  return r && e.requiredQueryParams
    ? Object.keys(e.requiredQueryParams).every((s) => {
        const n = t[s];
        return e.requiredQueryParams[s].test(n);
      })
    : r;
}
async function rs(i) {
  const e = await is(),
    t = bt(i);
  return e.reduce((a, r) => {
    if (as(i, r, t)) {
      if (a.length > 0) {
        if (r.requiredQueryParams) a = a.filter((s) => s.requiredQueryParams);
        else if (a.some((s) => s.requiredQueryParams)) return a;
      }
      (r.requiredQueryParams
        ? (r.mediaAPI.parameters = Object.keys(r.requiredQueryParams).reduce((s, n) => ((s[n] = t[n]), s), {}))
        : r.mediaAPI.parameterMapping && (r.mediaAPI.parameters = ki(r.mediaAPI.parameterMapping, t, !0)),
        a.push(r));
    }
    return a;
  }, []);
}
async function ds(i) {
  return { results: { links: await rs(i) }, meta: { originalUrl: i, originalQueryParams: bt(i) } };
}
async function ht(i) {
  (E.linkChild(X),
    E.linkChild(vt),
    E.linkChild(wi),
    E.linkChild(M),
    (i.playActivityAPI = i.realm === gt.PODCAST ? [new ee()] : [new xe(), new Yr()]));
  let e = Gt;
  return (
    i.rtcOptions !== void 0 && (i.playActivityAPI = [...i.playActivityAPI, new Ri(i.rtcOptions), new Mi()]),
    (e = O),
    await Di(i, e, async (a) => {
      var r;
      (await a.configure({ storefrontId: (r = i.apiOptions) == null ? void 0 : r.storefrontId }),
        i.declarativeMarkup &&
          typeof console < "u" &&
          console.warn &&
          console.warn("The declarativeMarkup configuration option has been removed in MusicKit JS V3"));
    })
  );
}
if (Oi) {
  const i = Ci(),
    e = /interactive|complete|loaded/.test(document.readyState);
  i &&
    i.developerToken &&
    Li().length === 0 &&
    (e ? Ni(ht(i)) : document.addEventListener("DOMContentLoaded", () => ht(i)));
}
export {
  At as Events,
  b as MKError,
  Pi as MediaItem,
  m as PlayActivityEndReasonType,
  we as PlayActivitySourceType,
  ge as PlaybackActions,
  ys as PlaybackBitrate,
  Ae as PlaybackMode,
  x as PlaybackStates,
  Le as PlaybackType,
  j as PlayerRepeatMode,
  J as PlayerShuffleMode,
  fs as PresentationMode,
  gt as SKRealm,
  ms as __dev,
  Ts as __log,
  ht as configure,
  vs as enableMultipleInstances,
  Ps as formatArtworkURL,
  ls as formatMediaTime,
  ei as formattedMediaURL,
  us as formattedMilliseconds,
  $t as formattedSeconds,
  cs as generateEmbedCode,
  gs as getHlsJsCdnConfig,
  As as getInstance,
  Li as getInstances,
  bs as getPlayerType,
  ds as resolveCanonical,
};
