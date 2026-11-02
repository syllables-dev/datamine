import {
  s as Jt,
  x as yt,
  y as C,
  e as Oe,
  z as R,
  A as ke,
  B as ze,
  C as d,
  D as c,
  c as h,
  F as I,
  G as q,
  H as ft,
  I as Xt,
  J as mt,
  K as Zt,
  L as Tt,
  N as ei,
  O as ue,
  R as ti,
  T as ii,
  U as ai,
  W as ri,
  X as N,
  Y as si,
  Z as vt,
  _ as Z,
  $ as l,
  a0 as Pt,
  m as P,
  a1 as Ke,
  a2 as ni,
  a3 as oi,
  r as Ce,
  a4 as ci,
  a5 as V,
  a6 as B,
  f as J,
  a7 as re,
  d as X,
  a8 as ve,
  a9 as se,
  h as Pe,
  aa as ui,
  ab as li,
  ac as di,
  a as pi,
  ad as S,
  ae as hi,
  i as gt,
  af as H,
  o as U,
  E as At,
  ag as w,
  ah as O,
  p as ge,
  ai as yi,
  S as fi,
  M as mi,
  aj as f,
  ak as Ti,
  al as vi,
  am as qe,
  an as y,
  ao as k,
  ap as He,
  aq as Pi,
  ar as gi,
  as as Ai,
  at as bi,
  au as _i,
  av as We,
  aw as bt,
  ax as Si,
  ay as Ii,
  az as Ei,
  aA as ki,
  aB as wi,
  aC as Ri,
  aD as Mi,
  k as Di,
  aE as Oi,
} from "./dev.js";
import { n as ls, q as ds, v as ps, w as hs, l as ys, aF as fs, u as ms, j as Ts, t as vs } from "./dev.js";
import "./main.js";
const je = Date.now();
function Je() {
  if (typeof globalThis.process?.hrtime == "function") {
    const [i, e] = process.hrtime();
    return Math.floor(1e3 * i + 1e-6 * e);
  } else return typeof globalThis.performance?.now == "function" ? globalThis.performance.now() - je : Date.now() - je;
}
const Ci = (i) => ("0" + (i & 255).toString(16)).slice(-2),
  _t = (i, e = 8) => {
    if (!(i instanceof Uint8Array)) return "";
    const t = Array.prototype.map.call(i, Ci).join("");
    return e === 0 ? t : t.replace(new RegExp(`(.{1,${e}})`, "g"), "$1 ").trim();
  },
  Xe = /^http(?:s)?\:\/\/(?:itunes|(embed\.)?(music|podcasts|tv))\.apple\.com/i,
  Li = [
    "allow-forms",
    "allow-popups",
    "allow-same-origin",
    "allow-scripts",
    "allow-storage-access-by-user-activation",
    "allow-top-navigation-by-user-activation",
  ],
  Ni = ["autoplay *", "encrypted-media *", "fullscreen *", "clipboard-write"];
function rs(i, e = { height: "450", width: "660", isVideo: !1 }) {
  if (!Xe.test(i)) throw new Error("Invalid content url");
  let t = e.height ?? "450",
    a = e.width ?? "660";
  const { kind: r, isUTS: s } = Jt(i),
    n = e.isVideo || r === "post" || r === "musicVideo" || s,
    o = ["podcast", "episode"].includes(r ?? "") && !s,
    p = o && e.size === "small",
    E = r === "podcast" && !n && e.size === "large";
  (r === "song" ? (t = "175") : (r === "episode" || p) && (t = "160"),
    n && !p && (t = `${Math.round(parseInt(a, 10) * 0.5625)}`),
    (t = `${t}`.replace(/(\d+)px/i, "$1")),
    (a = `${a}`.replace(/^(\d+)(?!px)%?$/i, "$1px")));
  const g = n && !p ? `width:${a}` : `width:100%;${a ? `max-width:${a}` : ""}`;
  let b = "https://embed.music.apple.com",
    F = "10px";
  (o && ((b = "https://embed.podcasts.apple.com"), (F = "12px")),
    ["movie", "episode", "season", "show"].includes(r ?? "") && s && (b = "https://embed.tv.apple.com"));
  let Q = `${g};overflow:hidden;border-radius:${F};`;
  E &&
    ((t = `${Math.round(parseInt(a, 10) * 0.5625)}`),
    (Q = `${g};height:auto;aspect-ratio:16/9;overflow:hidden;border-radius:${F};`));
  const W = o || n;
  return `<iframe ${[`allow="${Ni.join("; ")}"`, 'frameborder="0"', `height="${t}"`, ...(W ? [`width="${parseInt(a, 10)}"`] : []), `style="${Q}"`, `sandbox="${Li.join(" ")}"`, `src="${i.replace(Xe, b)}"`].join(" ")}></iframe>`;
}
function we(i, e) {
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
  } catch (o) {
    r = { error: o };
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
function Ae(i) {
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
function le(i) {
  return function (e) {
    return i === e;
  };
}
function It(i) {
  return typeof i == "string" ? { type: i } : i;
}
function tt(i, e) {
  return { value: i, context: e, actions: [], changed: !1, matches: le(i) };
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
            : Object.keys(s.assignment).forEach(function (o) {
                n[o] = typeof s.assignment[o] == "function" ? s.assignment[o](a, t) : s.assignment[o];
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
        Ae(i.states[i.initial].entry).map(function (n) {
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
      initialState: { value: i.initial, actions: a, context: r, matches: le(i.initial) },
      transition: function (n, o) {
        var p,
          E,
          g = typeof n == "string" ? { value: n, context: i.context } : n,
          b = g.value,
          F = g.context,
          Q = It(o),
          W = i.states[b];
        if (W.on) {
          var xe = Ae(W.on[Q.type]);
          try {
            for (
              var ie = (function (v) {
                  var Te = typeof Symbol == "function" && Symbol.iterator,
                    Qe = Te && v[Te],
                    Ge = 0;
                  if (Qe) return Qe.call(v);
                  if (v && typeof v.length == "number")
                    return {
                      next: function () {
                        return (v && Ge >= v.length && (v = void 0), { value: v && v[Ge++], done: !v });
                      },
                    };
                  throw new TypeError(Te ? "Object is not iterable." : "Symbol.iterator is not defined.");
                })(xe),
                j = ie.next();
              !j.done;
              j = ie.next()
            ) {
              var ae = j.value;
              if (ae === void 0) return tt(b, F);
              var fe = typeof ae == "string" ? { target: ae } : ae,
                G = fe.target,
                Ye = fe.actions,
                Fe = Ye === void 0 ? [] : Ye,
                $e = fe.cond,
                zt =
                  $e === void 0
                    ? function () {
                        return !0;
                      }
                    : $e,
                Kt = G === void 0,
                qt = G ?? b,
                Ht = i.states[qt];
              if (zt(F, Q)) {
                var me = Ze(
                    it(
                      (Kt
                        ? Ae(Fe)
                        : [].concat(W.exit, Fe, Ht.entry).filter(function (v) {
                            return v;
                          })
                      ).map(function (v) {
                        return et(v, s._options.actions);
                      }),
                      F,
                      Q,
                    ),
                    3,
                  ),
                  Be = me[0],
                  Wt = me[1],
                  jt = me[2],
                  Ve = G ?? b;
                return {
                  value: Ve,
                  context: Wt,
                  actions: Be,
                  changed: G !== b || Be.length > 0 || jt,
                  matches: le(Ve),
                };
              }
            }
          } catch (v) {
            p = { error: v };
          } finally {
            try {
              j && !j.done && (E = ie.return) && E.call(ie);
            } finally {
              if (p) throw p.error;
            }
          }
        }
        return tt(b, F);
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
          e = { value: n.value, actions: [], context: n.context, matches: le(n.value) };
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
const ce = "amupaee",
  rt = "https://universal-activity-service.itunes.apple.com",
  Ui = "A method was called without a previous descriptor",
  xi = "The scrub() method was called with the SCRUB_END action without a previous SCRUB_START descriptor",
  Yi = "The play() method was called without a previous stop() or pause() call.",
  Fi = "A play stop() method was called without a previous play() descriptor",
  Re = /(?:st|ra)\.([0-9]+)/,
  st = /st\.([0-9]+)/,
  wt = "send() called without any data",
  $i = ({ timestamp: i, ...e }) => ({ ...e, "milliseconds-since-play": Date.now() - i });
class Bi {
  mode = yt.AUTO;
  _accessToken;
  _musicUserToken;
  _bundleId;
  _clientId;
  _eventType;
  _fetch;
  _fetchOptions;
  _headersClass;
  _isQA = !1;
  _logInfo = !1;
  _preferDSID = !1;
  _sourceType;
  _traceTag;
  constructor(e) {
    ((this._accessToken = e.accessToken),
      (this._bundleId = e.bundleId),
      (this._clientId = e.clientId),
      (this._eventType = e.eventType),
      (this._fetch = e.fetch ?? fetch),
      (this._fetchOptions = e.fetchOptions ?? {}),
      (this._headersClass = e.headersClass ?? Headers),
      (this._isQA = e.isQA ?? !1),
      (this._logInfo = e.logInfo || this._isQA),
      (this._musicUserToken = e.musicUserToken),
      (this._preferDSID = e.preferDSID),
      (this._sourceType = e.sourceType),
      (this._traceTag = e.traceTag));
  }
  get accessToken() {
    return C(this._accessToken);
  }
  get musicUserToken() {
    return C(this._musicUserToken);
  }
  get url() {
    return this._isQA ? `${rt}/qa/play` : `${rt}/play`;
  }
  async send(e) {
    const t = { client_id: this._clientId, event_type: this._eventType, data: Oe(e).map($i) };
    if (t.data.length === 0) throw new Error(wt);
    const a = this._generateFetchOptions({ method: "POST", body: JSON.stringify(t), headers: this.headers() });
    return (
      await this._fetch(this.url, a),
      this._logInfo && R.info("play activity:", this._sourceType === ke.AMAZON ? JSON.stringify(t) : t),
      t
    );
  }
  baseHeaders() {
    const e = this._fetchOptions?.headers ?? {};
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
function Vi(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
const Rt = (i, e) =>
    e?.name === void 0 ? "MusicKitApp/1.0" : i !== void 0 ? i : `${Vi(e.name)}/${e?.version || "1.0"}`,
  Qi = (i) => {
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
    const s = a?.[1]?.replace?.(/_/g, ".") ?? "0.0";
    return `${t}/${s}`;
  },
  Gi = (i) => `model/${i?.platform || "Unavailable"}`,
  zi = (i) => {
    const e = i?.build;
    return e === void 0 || e === "" ? "build/0.0.0" : `build/${e}`;
  },
  Ki = (i, e, t, a) => [Rt(i, e), Qi(a), Gi(t), zi(e)].join(" "),
  qi = { platform: "", userAgent: "" };
class Mt {
  constructor(e, t, a, r) {
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
        (this.preferDSID = r.preferDSID ?? !1),
        (this.sourceType = r.sourceType !== void 0 && typeof r.sourceType == "number" ? r.sourceType : ke.MUSICKIT),
        (this._userIsSubscribed = r.userIsSubscribed ?? !0),
        (this._allowReportingId = r.allowReportingId ?? !1),
        r.app?.bundleId && (this.bundleId = r.app?.bundleId)),
      (this.buildVersion = Ki(this._appId, this._appInfo, this.navigator, this.userAgent)),
      (this.sender = new Bi({
        bundleId: this.bundleId,
        accessToken: this._accessToken,
        clientId: this.clientId,
        eventType: this.eventType,
        fetch: r?.fetch,
        fetchOptions: r?.fetchOptions,
        headersClass: r?.fetch?.Headers,
        isQA: r?.isQA,
        logInfo: r?.logInfo,
        musicUserToken: this._musicUserToken,
        preferDSID: this.preferDSID,
        sourceType: this.sourceType,
        traceTag: r?.traceTag,
      })));
  }
  privateEnabled = !1;
  siriInitiated = !1;
  bundleId;
  buildVersion;
  clientId = "JSCLIENT";
  eventType = "JSPLAY";
  guid;
  internalBuild = !1;
  metricsClientId;
  preferDSID = !1;
  sender;
  sourceType = ke.MUSICKIT;
  _appId;
  _appInfo;
  _deviceName;
  _navigator;
  _utcOffset = new Date().getTimezoneOffset();
  _utcOffsetInSeconds;
  _userAgent;
  _userIsSubscribed = !0;
  _allowReportingId = !1;
  get accessToken() {
    return C(this._accessToken);
  }
  get appID() {
    return (this._appId === void 0 && (this._appId = Rt(this._appId, this._appInfo)), this._appId);
  }
  get deviceName() {
    return this._deviceName;
  }
  get musicUserToken() {
    return C(this._musicUserToken);
  }
  get navigator() {
    return this._navigator ?? (typeof navigator > "u" ? qi : navigator);
  }
  get storefrontId() {
    return C(this._storefrontId);
  }
  get userAgent() {
    return this._userAgent ?? this.navigator.userAgent;
  }
  get userIsSubscribed() {
    return C(this._userIsSubscribed);
  }
  get allowReportingId() {
    return C(this._allowReportingId);
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
    const n = e.format === "stream" ? d.STREAM : d.ITUNES_STORE_CONTENT;
    return { ...e, container: a, duration: r ?? 0, eventType: t, itemType: n, ...s };
  }
  buildForPlayParams(e, t, a, r = 0, s = {}, n = !1) {
    return this.build(this.buildDescriptorForPlayParams(e, t, a, r, s), n);
  }
}
const Hi = (i, ...e) => e.reduce((t, a) => a(t), i);
function T(i, e, t) {
  return i.eventType === void 0
    ? c.PLAY_START
    : i.itemType === d.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? c.PLAY_END
      : (i.eventType ?? c.PLAY_START);
}
function de(i, e, t) {
  const a = i.userPreference;
  return (
    T(i) === c.PLAY_END &&
    i.audioQuality?.provided !== void 0 &&
    i.audioQuality?.targeted !== void 0 &&
    a?.audioQuality !== void 0 &&
    a?.playbackFormat !== void 0
  );
}
function Wi(i, e, t) {
  if (!de(i)) return;
  const a = i.audioQuality;
  if (a?.provided === void 0) return;
  const { provided: r } = a;
  return {
    "audio-sample-rate-in-hz": r.audioSampleRateHz ?? 0,
    "audio-bit-depth": r.audioBitDepth ?? 0,
    "bit-rate-in-bps": r.bitRateBps ?? 0,
    codec: r.codec,
    "audio-channel-type": r.audioChannelType,
    "playback-format": r.playbackFormat,
  };
}
function ji(i, e, t) {
  if (!de(i)) return;
  const a = i.audioQuality;
  if (a?.targeted === void 0) return;
  const { targeted: r } = a;
  return {
    "audio-sample-rate-in-hz": r.audioSampleRateHz ?? 0,
    "audio-bit-depth": r.audioBitDepth ?? 0,
    "bit-rate-in-bps": r.bitRateBps ?? 0,
    codec: r.codec,
    "audio-channel-type": r.audioChannelType,
    "playback-format": r.playbackFormat,
  };
}
function Ji(i, e, t) {
  return t.client.bundleId;
}
function Xi(i, e, t) {
  return t.client.buildVersion;
}
const Zi = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function pe({ kind: i }, e, t) {
  return i !== void 0 && Zi.includes(i);
}
function ea({ endReasonType: i, eventType: e, itemType: t, timedMetadata: a }, r, s) {
  return a !== void 0 && (t === d.TIMED_METADATA_PING || e === c.PLAY_START || i === h.PLAYBACK_MANUALLY_PAUSED);
}
function M(i, e, t) {
  const { id: a, reporting: r } = i;
  if (a === "-1" || !r)
    switch (T(i)) {
      case c.PLAY_END:
        return d.AGGREGATE_NON_CATALOG_PLAY_TIME;
      case c.PLAY_START:
        if (a === "-1") return d.INVALID;
    }
  const { format: s, kind: n, itemType: o } = i;
  return n === "musicMovie"
    ? d.ORIGINAL_CONTENT_MOVIES
    : ea(i)
      ? o === d.TIMED_METADATA_PING
        ? o
        : d.STREAM
      : s === "stream"
        ? d.STREAM
        : pe(i)
          ? d.ARTIST_UPLOADED_CONTENT
          : (o ?? d.ITUNES_STORE_CONTENT);
}
function x(i, e, t) {
  if (M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = i.container?.type ?? i.container?.kind;
  if (typeof a == "number") return a;
  switch (a) {
    case "album":
    case "albums":
    case "library-albums":
      return I.ALBUM;
    case "artist":
    case "artists":
    case "library-artists":
      return I.ARTIST;
    case "playlist":
    case "playlists":
    case "library-playlists":
      return I.PLAYLIST;
    case "radio":
    case "radioStation":
    case "station":
    case "stations":
      return I.RADIO;
    default:
      return I.UNKNOWN;
  }
}
function ta(i, e, t) {
  if (x(i) !== I.ALBUM) return;
  const { container: a } = i,
    r = a?.id;
  if (r !== void 0 && !q(r)) return r;
}
function ia(i, e, t) {
  if (x(i) !== I.ALBUM) return;
  const { container: a } = i,
    r = a?.id;
  if (r !== void 0 && q(r)) return r;
}
function aa(i, e, t) {
  if (x(i) !== I.PLAYLIST) return;
  const { container: a } = i,
    r = a?.catalogId ?? a?.globalId;
  if (a?.isLibrary && r) return r;
  if (!q(a?.id)) return a?.id;
}
function ra(i, e, t) {
  if (x(i) !== I.PLAYLIST) return;
  const { container: a } = i,
    r = a?.versionHash;
  if (!(r === void 0 || r === "")) return r;
}
function sa(i, e, t) {
  if (x(i) !== I.RADIO) return;
  const a = i.container?.stationHash;
  return a !== void 0 && a !== "" ? a : void 0;
}
function na(i, e, t) {
  if (x(i) === I.RADIO) return i.container?.id;
}
function oa(i, e, t) {
  if (x(i) !== I.RADIO) return;
  const a = i.container?.id;
  if (a !== void 0 && st.test(a)) return parseInt(a.replace(st, "$1"), 10);
}
function ca(i, e, t) {
  if (x(i) !== I.PLAYLIST) return;
  const { container: a } = i,
    r = a?.catalogId ?? a?.globalId,
    s = a?.id;
  if (s !== void 0) {
    if (a?.isLibrary && r) {
      if (s !== "") return s;
    } else if (q(s)) return s;
  }
}
function ua(i, e, t) {
  if (M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = ta(i);
  r !== void 0 && (a["album-adam-id"] = r);
  const s = ia(i);
  s !== void 0 && (a["cloud-album-id"] = s);
  const n = aa(i);
  n !== void 0 && (a["global-playlist-id"] = n);
  const o = ra(i);
  o !== void 0 && (a["playlist-version-hash"] = o);
  const p = sa(i);
  p !== void 0 && (a["station-hash"] = p);
  const E = na(i);
  E !== void 0 && (a["station-id"] = E);
  const g = oa(i);
  g !== void 0 && (a["station-personalized-id"] = g);
  const b = ca(i);
  if ((b !== void 0 && (a["universal-library-id"] = b), !ft(a))) return a;
}
function la(i, e, t) {
  return t.client.accessToken;
}
function da(i, e, t) {
  return t.client.deviceName;
}
function pa(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY) return C(i.lyricDescriptor?.displayTranslation);
}
function ha(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY) return C(i.lyricDescriptor?.displayTransliteration);
}
function ya(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY) return i.lyricDescriptor?.displayType;
}
function Dt({ position: i = 0, startPositionInMilliseconds: e }, t, a) {
  return e || Math.round(1e3 * i);
}
function fa(i, e, t) {
  switch (T(i)) {
    case c.LYRIC_DISPLAY:
      return i.lyricDescriptor?.duration === void 0 ? void 0 : Math.round(i.lyricDescriptor.duration);
    case c.PLAY_START:
      return;
    default:
      return e && e.position === void 0 ? void 0 : i.endPositionInMilliseconds || Dt(i);
  }
}
function ee({ id: i, reporting: e }, t, a) {
  return i === "-1" || !e;
}
function Ot(i, e, t) {
  if (!(e && e?.position === void 0))
    return M(i) === d.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? h.NOT_APPLICABLE
      : ee(i) && i.eventType === c.PLAY_END
        ? h.NOT_APPLICABLE
        : i.endReasonType;
}
const { CONTAINER_CHANGED: nt, NOT_SPECIFIED: be } = Xt;
function ma(i, e, t) {
  if (T(i) !== c.PLAY_START) return;
  const r = i.container;
  return r === void 0 ? be : e === !1 ? (t.isAlexa ? be : nt) : e?.container?.id !== r.id ? nt : be;
}
function Ta(i, e, t) {
  return M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME ? void 0 : `${i.container?.name ?? mt.MUSICKIT}`;
}
function va(i, e, t) {
  return t.client.guid;
}
function Le({ id: i, container: e }, t, a) {
  return Re.test(i) || e?.kind === "radioStation";
}
function Pa(i, e, t) {
  if (!(ee(i) || Le(i)) && pe(i)) return i.id;
}
function Ne({ id: i, isLibrary: e }, t, a) {
  return e || q(i);
}
function Ct({ catalogId: i, container: e }, t, a) {
  return i ?? e?.catalogId;
}
function Lt(i, e, t) {
  return i.isLibrary && !!Ct(i);
}
function ga(i, e, t) {
  const { id: a } = i,
    r = a !== void 0 && a !== "";
  return ee(i) && T(i) === c.PLAY_START && r && a !== "-1"
    ? a
    : Le(i) || pe(i)
      ? i.cloudId
      : (Lt(i) && r) || Ne(i)
        ? a
        : i.cloudId;
}
function Aa(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY) return i.lyricDescriptor?.id;
}
function ba(i, e, t) {
  return i.purchasedId;
}
function _a(i, e, t) {
  if (t.client.allowReportingId === !0 && Ne(i)) return i.reportingId;
}
function Sa(i, e, t) {
  if (ee(i)) return;
  const { container: a, id: r } = i;
  if (Re.test(r) || a?.kind === "radioStation") return parseInt(`${r}`.replace(Re, "$1"), 10);
}
function Ia(i, e, t) {
  if (!(ee(i) || Le(i) || pe(i))) {
    if (Lt(i)) return Ct(i);
    if (!Ne(i)) return i.id;
  }
}
function Ea(i, e, t) {
  if (M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = Pa(i);
  r !== void 0 && (a["auc-adam-id"] = r);
  const s = ga(i);
  s !== void 0 && (a["cloud-id"] = s);
  const n = Aa(i);
  n !== void 0 && (a["lyric-id"] = n);
  const o = ba(i);
  o !== void 0 && (a["purchased-adam-id"] = o);
  const p = _a(i, e, t);
  p !== void 0 && (a["reporting-adam-id"] = p);
  const E = Sa(i);
  E !== void 0 && (a["radio-adam-id"] = E);
  const g = Ia(i);
  if ((g !== void 0 && (a["subscription-adam-id"] = g), !ft(a))) return a;
}
function ka(i, e, t) {
  return t.client.internalBuild;
}
function wa(i, e, t) {
  return i.container?.isCollaborative === !0 ? !0 : void 0;
}
function Ra(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY) return i.lyricDescriptor?.language;
}
function Ma({ streamingKind: i }, e, t) {
  return i === Zt.EPISODE;
}
function Da(i, e, t) {
  return M(i) === d.STREAM;
}
function Nt(i, e, t) {
  return Da(i) && !Ma(i);
}
function Oa(i, e, t) {
  const a = T(i);
  if (a === c.LYRIC_DISPLAY || Nt(i)) return 0;
  const r = Math.round(1e3 * i.duration);
  if (a === c.PLAY_START) return r;
  const s = i.startPositionInMilliseconds ?? Math.round(1e3 * (i.position ?? 0)),
    n = i.duration * 1e3;
  return s > n ? s : r;
}
const { AUDIO: ot, VIDEO: Ca } = Tt;
function La(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY) return ot;
  const { kind: a, mediaType: r } = i;
  if (typeof r == "number") return r;
  const s = typeof r == "string" ? r : a;
  return s && /video|movie/i.test(s) ? Ca : ot;
}
function Na(i, e, t) {
  return t.client.metricsClientId;
}
function Ua(i, e, t) {
  return !1;
}
function xa(i, e, t) {
  return ei();
}
function Ya(i, e, t) {
  if (T(i) === c.LYRIC_DISPLAY || M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME)
    return { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 };
  const a = C(i.playMode);
  if (a !== void 0)
    return {
      "auto-play-mode": a.autoplayMode ?? 0,
      "repeat-play-mode": a.repeatPlayMode ?? 0,
      "shuffle-play-mode": a.shufflePlayMode ?? 0,
    };
}
function Fa(i, e, t) {
  return t.client.privateEnabled;
}
function $a(i, e, t) {
  if (T(i) !== c.LYRIC_DISPLAY && M(i) !== d.AGGREGATE_NON_CATALOG_PLAY_TIME) return i.recoData;
}
function Ba(i, e, t) {
  return t.client.userIsSubscribed;
}
function Va(i, e, t) {
  return t.client.siriInitiated;
}
function Qa(i, e, t) {
  return t.client.sourceType;
}
function Ga(i, e, t) {
  const a = T(i);
  return a === c.LYRIC_DISPLAY || M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME || Nt(i)
    ? 0
    : a === c.PLAY_START
      ? Dt(i)
      : (i.startPositionInMilliseconds ?? za(e) ?? 0);
}
const za = (i) => (i && i.position !== void 0 ? Math.round(1e3 * i.position) : 0);
function Ka(i, e, t) {
  return t.client.storefrontId;
}
function qa(i, e, t) {
  const a = i.timedMetadata;
  if (a === void 0) return;
  const r = T(i);
  if (Ot(i, e) !== h.SCRUB_END && r === c.PLAY_END) return _t(a, 0);
}
function Ha(i, e, t) {
  return i.timestamp ?? Date.now();
}
function Wa(i, e, t) {
  return t.client.userAgent;
}
function ja(i, e, t) {
  if (de(i)) return i.userPreference?.audioQuality;
}
function Ja(i, e, t) {
  if (de(i)) return i.userPreference?.playbackFormat;
}
function Xa(i, e, t) {
  if (!t.client.preferDSID) return t.client.musicUserToken;
}
function Za(i, e, t) {
  return M(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME ? 0 : t.client.utcOffsetInSeconds;
}
const er = {
  "audio-quality-provided": Wi,
  "audio-quality-targeted": ji,
  "bundle-id": Ji,
  "build-version": Xi,
  "container-ids": ua,
  "container-type": x,
  "developer-token": la,
  "device-name": da,
  "display-translation": pa,
  "display-transliteration": ha,
  "display-type": ya,
  "end-position-in-milliseconds": fa,
  "end-reason-type": Ot,
  "event-reason-hint-type": ma,
  "event-type": T,
  "feature-name": Ta,
  guid: va,
  ids: Ea,
  "internal-build": ka,
  "is-collaborative": wa,
  "lyric-language": Ra,
  "media-duration-in-milliseconds": Oa,
  "media-type": La,
  "metrics-client-id": Na,
  offline: Ua,
  "persistent-id": xa,
  "play-mode": Ya,
  "private-enabled": Fa,
  "reco-data": $a,
  "sb-enabled": Ba,
  "siri-initiated": Va,
  "source-type": Qa,
  "start-position-in-milliseconds": Ga,
  "store-front": Ka,
  "timed-metadata": qa,
  timestamp: Ha,
  type: M,
  "user-agent": Wa,
  "user-preference-audio-quality": ja,
  "user-preference-playback-format": Ja,
  "user-token": Xa,
  "utc-offset-in-seconds": Za,
};
let tr = 0;
const ir = (i = {}, e) => ({ id: (tr++).toFixed(0), client: e, isAlexa: !1, ...i }),
  ar = (i, ...e) => ({ ...i, ...Object.assign({}, ...e) }),
  Ut = (i, e, t, a = !1) => {
    const r = ar(typeof a == "boolean" ? ir({ isAlexa: a }, i) : { ...a, client: i }),
      s = ue(e),
      n = t && ue(t),
      o = Object.create(null);
    for (const [p, E] of Object.entries(er)) {
      const g = E(s, n, r);
      g !== void 0 && (o[p] = g);
    }
    return o;
  },
  rr = (i, e, t) => {
    if (e === void 0) throw new Error("called without a play activity descriptor");
    const a = { ...e, eventType: c.LYRIC_DISPLAY };
    return Hi(
      {
        ...Ut(i, a, t, !1),
        "media-duration-in-milliseconds": 0,
        "media-type": Tt.AUDIO,
        "start-position-in-milliseconds": 0,
        "play-mode": { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 },
      },
      (r) => we(r, ["character-display-count", "event-reason-hint-type", "reco-data"]),
    );
  },
  sr = () =>
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
class nr extends Mt {
  _machine;
  startDescriptor;
  get state() {
    return this._machine.state.value;
  }
  constructor(e, t, a, r) {
    (super(e, t, a, r), (this._machine = kt(sr()).start()));
  }
  async play(e) {
    if (this.state === "playing") throw Error("lyrics are already being displayed. Did you forget to stop them?");
    if (e === void 0) throw Error("Missing descriptor for lyrics play");
    (R.info(`Staring tracking: lyricsId=${e.lyricDescriptor?.id}, itemId=${e.id}, catalogId=${e.catalogId}`),
      (this.startDescriptor = e),
      this._machine.send({ type: "play" }));
  }
  update(e) {
    if (this.state !== "playing") throw Error("lyrics are not being displayed. Cannot update.");
    if (this.startDescriptor === void 0) throw Error("Missing start descriptor for lyrics update");
    if (e.id !== void 0 && e.id !== this.startDescriptor.lyricDescriptor?.id)
      throw Error(
        `Lyrics ID mismatch: updating id=${e.id} but tracking id=${this.startDescriptor.lyricDescriptor?.id}`,
      );
    (R.info(`Updating descriptor: lyricsId=${this.startDescriptor.lyricDescriptor?.id}`),
      (this.startDescriptor = {
        ...this.startDescriptor,
        lyricDescriptor: { ...this.startDescriptor.lyricDescriptor, ...e },
      }));
  }
  async stop() {
    if (this.state !== "playing") throw Error("lyrics are not being displayed. Did you forget to display them?");
    if (this.startDescriptor === void 0) throw Error("Missing start descriptor for lyrics stop");
    (R.info(
      `Stopping tracking: lyricsId=${this.startDescriptor.lyricDescriptor?.id}, itemId=${this.startDescriptor.id}, catalogId=${this.startDescriptor.catalogId}`,
    ),
      this._machine.send({ type: "stop" }));
    const e = this._machine.state.context.duration,
      t = JSON.parse(JSON.stringify(this.startDescriptor));
    ((t.lyricDescriptor = { ...t.lyricDescriptor, duration: Math.round(e) }),
      R.debug("Clearing tracked descriptor"),
      (this.startDescriptor = void 0));
    const a = this.build(t, !1);
    try {
      (R.debug("Sending PAF request with data payload"), await this.send(a), R.debug("Done sending PAF request"));
    } catch (r) {
      (console.error(`Error sending Lyrics PAF request: ${r.message}`),
        R.error(`Error sending Lyrics PAF request: ${r.message}`));
    }
  }
  async exit() {}
  build(e, t) {
    return rr(this, e, t);
  }
}
const or = (i = {}) => ({
    get(e) {
      if (!(typeof e > "u")) return i[e];
    },
    set(e, t) {
      i[e] = t;
    },
  }),
  cr = () => ({ get: ti, set: ii }),
  ur = (i) => {
    switch ((typeof i > "u" && (i = "browser"), i)) {
      case "browser":
        return cr();
      case "memory":
        return or();
      default:
        return i;
    }
  },
  xt = (i, e) => Ft(i, e, [], "/", 0),
  Yt = (i, e) => {
    const t = i.get(e);
    if (t === void 0 || t === "") return [];
    const a = JSON.parse(atob(t));
    return Oe(a);
  },
  Ft = (i, e, t, a, r, s) => i.set(e, btoa(JSON.stringify(t)), a, r, s),
  lr = (i, e, t, a, r, s) => Ft(i, e, [...Yt(i, e), t], a, r, s),
  { AUTO: ct } = yt;
class dr {
  constructor(e, t) {
    ((this.sender = e), (this.jar = t));
  }
  mode = ct;
  async flush() {
    const e = Yt(this.jar, ce);
    if (!(e === void 0 || e.length === 0))
      try {
        (await this.sender.send(e), xt(this.jar, ce));
      } catch (t) {
        throw new Error(`flush: ${t.message}`);
      }
  }
  async send(e) {
    if (this.mode === ct && (Array.isArray(e) || e["end-reason-type"] !== h.EXITED_APPLICATION))
      return this.sender.send(e);
    lr(this.jar, ce, e, "/");
  }
}
const pr = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "object":
        return !i.message || typeof i.message != "string" ? "" : i.message;
      default:
        return "";
    }
  },
  hr = (i) => pr(i).includes(wt),
  ne = (i) => ({ type: i });
function yr(i) {
  return i.eventType === c.PLAY_START;
}
function fr(i) {
  if (i.eventType !== c.PLAY_END) return !1;
  if (i.endReasonType === void 0) throw new Error("PLAY_END activity descriptor requires an endReasonType value");
  return !0;
}
function mr(i) {
  if (i.itemType === d.TIMED_METADATA_PING) return !1;
  if (yr(i)) return ne("play");
  if (fr(i)) {
    const e = i.endReasonType;
    if (e === h.SCRUB_BEGIN) return ne("scrubBegin");
    if (e === h.SCRUB_END) return ne("scrubEnd");
    if (e === h.EXITED_APPLICATION) return !1;
  }
  return ne("stop");
}
const Tr = () =>
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
        setScrubEndError: K((i) => ({ ...i, errorMessage: xi })),
      },
    },
  );
class vr {
  machine;
  machineService;
  constructor() {
    ((this.machine = Tr()), (this.machineService = kt(this.machine).start()));
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
    const a = mr(e);
    if (a === !1) return this.currentStateName;
    if ((this.machineService.send(a), this.matches("error")))
      throw new Error(this.machineService.state.context.errorMessage);
    return this.currentStateName;
  }
}
const Pr = ({ id: i, reporting: e = !0, eventType: t }) => (i === "-1" || !e) && t === c.PLAY_END;
class gr extends Mt {
  constructor(e, t, a, r) {
    super(e, t, a, r);
  }
  build(e, t) {
    return Ut(this, e, t, this.clientId !== "JSCLIENT");
  }
}
class Ar {
  sender;
  timeline = [];
  _cookieJar;
  _paf;
  _machine;
  timedMetadata;
  constructor(e, t, a, r) {
    ((this._paf = new gr(e, t, a, r)),
      (this._cookieJar = ur(r?.cookieJar)),
      (this.sender = new dr(this._paf.sender, this._cookieJar)),
      (this._machine = new vr()));
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
        if (!hr(a)) throw a;
      }
    const t = this.timeline[this.timeline.length - 1];
    if (t && t.endReasonType === h.EXITED_APPLICATION) return this.timeline.pop();
    this.clearTimedMetadata();
  }
  async exit(e = 0) {
    await this.stop(e, h.EXITED_APPLICATION);
  }
  async pause(e = 0) {
    await this.stop(e, h.PLAYBACK_MANUALLY_PAUSED);
  }
  async pingTimedMetadata(e, t, a = this.previousDescriptor) {
    await this._addToTimeline({ ...a, position: e, itemType: d.TIMED_METADATA_PING, timedMetadata: t });
  }
  async play(e, t = 0) {
    const a = this.timeline.length > 0;
    if (e === void 0) {
      if (!a) return;
      const r = this.previousDescriptor;
      (r.eventType === c.PLAY_END && delete r.endReasonType,
        await this._addToTimeline({ ...this.sanitizePreviousDescriptor(r), eventType: c.PLAY_START }));
      return;
    }
    if (a) {
      const r = this.previousDescriptor;
      if (this._machine.matches("playing") && !Pr(r)) return Promise.reject(new Error(Yi));
    }
    await this._addToTimeline({ ...e, eventType: c.PLAY_START, position: t });
  }
  async scrub(e = 0, t = h.SCRUB_BEGIN) {
    await this._addToTimeline({
      ...this.sanitizePreviousDescriptor(this.previousDescriptor),
      eventType: c.PLAY_END,
      endReasonType: t,
      position: e,
    });
  }
  async skip(e, t = h.TRACK_SKIPPED_FORWARDS, a = 0) {
    (await this.stop(a, t), await this.play(e));
  }
  async stop(e = 0, t = h.NATURAL_END_OF_TRACK) {
    let a = this.previousDescriptor;
    if (
      (a.endReasonType === h.EXITED_APPLICATION &&
        (this.timeline.pop(), xt(this._cookieJar, ce), (a = this.previousDescriptor)),
      this._machine.matches("playing"))
    ) {
      const r = {
        ...this.sanitizePreviousDescriptor(a),
        eventType: c.PLAY_END,
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
        R.warn(
          "You are calling build() from a stateful PAF client. Please, use a stateless client or exit(), pause(), play(), scrub(), skip() or stop() instead.",
        ),
      e === void 0)
    ) {
      if (this.timeline.length === 0) throw new Error("build() called without a play activity descriptor");
      e = this.timeline[this.timeline.length - 1];
    }
    if (t === void 0) {
      const a = this.timeline.indexOf(e);
      if (((t = a > 0 ? this.timeline[a - 1] : void 0), t === void 0 && e.eventType === c.PLAY_END))
        throw new Error("Cannot build() for PLAY_END descriptors without previous descriptors");
      t = t ?? !1;
    }
    return this._paf.build({ timedMetadata: this.timedMetadata, ...e }, t);
  }
  async addForPlayParams(e, t, a, r = 0, s = {}) {
    await this._addToTimeline(this.buildDescriptorForPlayParams(e, t, a, r, s));
  }
  buildDescriptorForPlayParams(e, t, a, r = 0, s = {}) {
    const n = e.format === "stream" ? d.STREAM : d.ITUNES_STORE_CONTENT;
    return ue({ ...e, container: a, duration: r, eventType: t, itemType: n, ...s });
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
    if (e === void 0) throw new Error(Ui);
    return we(e, ["timestamp"]);
  }
  buildForPlayParams(e, t, a, r = 0, s = {}, n = !1) {
    return (
      R.warn(
        "You are using buildsForPlayParams from a stateful PlayActivity. Please, use StatelessPlayActivity instead",
      ),
      this._paf.buildForPlayParams(e, t, a, r, s, n)
    );
  }
  send(e, t) {
    e = Oe(e);
    const a = ue(t);
    return (e.forEach((r) => this._machine.transition(a, r)), this.sender.send(e));
  }
  sanitizePreviousDescriptor(e) {
    let t = ai(e);
    return (t.itemType === d.TIMED_METADATA_PING && (t = we(t, ["itemType"])), t);
  }
}
class br extends HTMLElement {
  muted = !1;
  paused = !0;
  _playbackRate = 1;
  _volume = 1;
  _currentTime = 0;
  constructor() {
    super();
  }
  set volume(e) {
    e !== this._volume && ((this._volume = e), this.dispatchMediaEvent("volumechange"), (this.muted = e === 0));
  }
  get volume() {
    return this._volume;
  }
  set playbackRate(e) {
    e !== this._playbackRate && ((this._playbackRate = e), this.dispatchMediaEvent("ratechange"));
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set currentTime(e) {
    e !== this._currentTime && ((this._currentTime = e), this.dispatchMediaEvent("timeupdate"));
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
  dispatchMediaEvent(e) {
    const t = new CustomEvent(e, { detail: { type: e } });
    this.dispatchEvent(t);
  }
}
const _e = "mk-void-media-element",
  _r = Date.parse("January 01, 2001 0:00:00 GMT");
class Sr extends ri {
  currentAudioTrack = void 0;
  currentTextTrack = void 0;
  currentVideoTrack = void 0;
  textTracks = [];
  audioTracks = [];
  videoTracks = [];
  timerId;
  element;
  extension;
  mediaPlayerType = "void";
  playerName = "VoidPlayer";
  constructor(e) {
    (super(e), customElements.get(_e) !== void 0 || customElements.define(_e, br));
  }
  startTimerProgress() {
    this.timerId ||
      (this.timerId = setInterval(() => {
        const e = this._nowPlayingItem?.attributes.elapsedTimeTimestamp,
          t = this._nowPlayingItem?.attributes.elapsedTime,
          a = e * 1e3 + _r,
          r = (Date.now() - a) / 1e3;
        let s = 0;
        t > 0 &&
          (s = Math.ceil(
            Math.min(
              this._nowPlayingItem?.attributes.durationInMillis / 1e3,
              (t + r) * this._targetElement.playbackRate,
            ),
          ));
        const n = this._targetElement.currentTime + 1;
        this.seekToTime(Math.max(s, n));
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
  set nowPlayingItem(e) {
    if (e === this.nowPlayingItem) return;
    const t = this._dispatcher;
    (t.publish(N.nowPlayingItemWillChange, { item: e }),
      (this._nowPlayingItem = e),
      e && (e.state = si.playing),
      t.publish(N.nowPlayingItemDidChange, { item: e }),
      t.publish(N.playbackDurationDidChange, {
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
    const e = document.createElement(_e);
    ((e.id = "apple-music-player"),
      (this.element = e),
      document.body.appendChild(e),
      vt.debug("initializedMediaElement", e));
  }
  removeEventHandlers() {
    super.removeEventHandlers();
  }
  async seekToTime(e) {
    this._targetElement.currentTime = e;
  }
  async setPresentationMode(e) {
    return Promise.resolve();
  }
  async loadPreviewImage(e) {}
  async playItemFromEncryptedSource() {
    return Promise.resolve();
  }
  async initializeExtension() {}
  async preloadItem(e, t) {}
}
function $t(i) {
  return { hours: Math.floor(i / 3600), minutes: Math.floor((i % 3600) / 60) };
}
function ss(i) {
  return $t(i / 1e3);
}
function ns(i, e = ":") {
  const { hours: t, minutes: a } = $t(i);
  i = Math.floor((i % 3600) % 60);
  const r = [];
  return (
    t ? (r.push(`${t}`), r.push(a < 10 ? `0${a}` : `${a}`)) : r.push(`${a}`),
    r.push(i < 10 ? `0${i}` : `${i}`),
    r.join(e)
  );
}
const m = Z.createChild("mpaf"),
  Se = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "undefined":
        return "undefined";
      default:
        return `PlayActivityEndReasonType.${h[i]}`;
    }
  },
  ut = new Map([
    [l.playbackPlay, "play"],
    [l.playbackPause, "pause"],
    [l.playbackScrub, "scrub"],
    [l.playbackSeek, "seek"],
    [l.playbackSkip, "skip"],
    [l.playbackStop, "stop"],
    [l.playerActivate, "activate"],
    [l.playerExit, "exit"],
    [l.timedMetadata, "timedMetadata"],
  ]);
class Ue {
  instance;
  services;
  _activityTracker;
  reportTimedMetadata = new Set();
  musicLiveVideoStartTime = 0;
  get requestedEvents() {
    return Array.from(ut.keys());
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  get activityTracker() {
    if (this._activityTracker === void 0)
      throw new P(P.Reason.CONFIGURATION_ERROR, "Play Activity service was called before configuration.");
    return this._activityTracker;
  }
  static async create(e) {
    const t = new Ue();
    return (await t.configure(e), t);
  }
  async configure(e) {
    ((this.instance = e.instance),
      (this.services = e.services),
      (this._activityTracker = Er(e.instance, { runtime: e.services.runtime, request: e.services.request })));
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = ut.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async activate(e, t = {}) {
    (m.debug("Activating MPAF tracker"),
      await this.activityTracker.activate(t.flush),
      this.reportTimedMetadata.clear());
  }
  async exit(e, t = {}) {
    (m.debug("PAF debug", `client.exit(${t.position})`), this.activityTracker.exit(t.position));
  }
  async pause(e, t = {}) {
    if ((e?.id !== void 0 && this.reportTimedMetadata.add(e.id), typeof t.endReasonType == "number"))
      return (
        m.debug("PAF debug", `client.stop(${t.position}, ${t.endReasonType})`),
        this.activityTracker.stop(t.position, t.endReasonType)
      );
    (m.debug("PAF debug", `client.pause(${t.position})`), this.activityTracker.pause(t.position));
  }
  async play(e, t = {}) {
    const a = lt(l.playbackPlay, this.instance, e);
    (Ke(e, "video") && (this.musicLiveVideoStartTime = Date.now()),
      m.debug("PAF debug", `client.play(${JSON.stringify(a)}, ${t.position})`),
      this.activityTracker.play(a, t.position),
      this.reportTimedMetadata.add(e.id));
  }
  async scrub(e, t = {}) {
    (m.debug("PAF debug", `client.scrub(${t.position}, ${Se(t.endReasonType)})`),
      this.activityTracker.scrub(t.position, t.endReasonType),
      e !== void 0 && t.endReasonType === h.SCRUB_END && this.reportTimedMetadata.delete(e.id));
  }
  async seek(e, t = {}) {
    (await this.scrub(e, { position: t.startPosition, endReasonType: h.SCRUB_BEGIN }),
      await this.scrub(e, { position: t.position, endReasonType: h.SCRUB_END }));
  }
  async skip(e, t = {}) {
    const a = lt(l.playbackSkip, this.instance, e);
    m.debug("PAF debug", `client.skip(${JSON.stringify(a)}, ${Se(t.direction)}, ${t.position})`);
    try {
      (await this.activityTracker.skip(a, t.direction, t.position), this.reportTimedMetadata.add(e.id));
    } catch (r) {
      if (r.message === Fi) await this.play(e, t);
      else return Promise.reject(r);
    }
  }
  async stop(e, t = {}) {
    (Ke(e, "video")
      ? ((t.position = (Date.now() - this.musicLiveVideoStartTime) / 1e3), (this.musicLiveVideoStartTime = 0))
      : e?.isLiveRadioStation && t.position && (t.position = t.position - (t.startPosition || 0)),
      e?.isLiveRadioStation && (t.endReasonType = t.endReasonType ?? h.PLAYBACK_MANUALLY_PAUSED),
      m.debug("PAF debug", `client.stop(${t.position}, ${Se(t.endReasonType)})`),
      this.activityTracker.stop(t.position, t.endReasonType),
      e?.id !== void 0 && this.reportTimedMetadata.delete(e.id));
  }
  async timedMetadata(e, t) {
    if (e === void 0 || t === void 0 || t.position === void 0 || t.metadata?.blob === void 0) {
      m.warn("Missing data for TimedMetadata event", t, e);
      return;
    }
    if (e.isRadioStation) {
      if (e.isLiveRadioStation) {
        (m.debug(`Ignoring TimedMetadata at ${t.position}: Live Radio Station`),
          (this.activityTracker.timedMetadata = void 0));
        return;
      }
    } else {
      (m.debug(`Ignoring TimedMetadata at ${t.position}: Not a Radio Station`),
        (this.activityTracker.timedMetadata = void 0));
      return;
    }
    const a = t.metadata?.blob,
      r = this.activityTracker.timedMetadata;
    if (this.reportTimedMetadata.has(e.id))
      (a === void 0 && r !== void 0) || ni(a, r)
        ? m.debug(`Skipping TimedMetadata report at ${t.position}: unchanged`, oe(a))
        : (m.debug(`Reporting current TimedMetadata at ${t.position}`, oe(r)),
          this.activityTracker.pingTimedMetadata(t.position, r));
    else {
      m.debug(`Skipping TimedMetadata report at ${t.position}: disabled for ${e.id} (${e.info})`, oe(a));
      const s = this.activityTracker.timeline.at(-1);
      s !== void 0 &&
        (s.eventType === c.PLAY_START || s.endReasonType === h.SCRUB_END) &&
        this.reportTimedMetadata.add(e.id);
    }
    (m.debug(`Storing new TimedMetadata at ${t.position}`, oe(a)), (this.activityTracker.timedMetadata = a));
  }
  shouldTrackPlayActivity(e, t) {
    const a = oi(),
      r = !t || t.playbackType !== Ce.preview,
      s = this.alwaysSendForActivityType(e),
      n = !t || (t && this.mediaRequiresPlayActivity(t));
    return !!(a && r && (s || n));
  }
  alwaysSendForActivityType(e) {
    return e === l.playerActivate || e === l.playerExit;
  }
  mediaRequiresPlayActivity(e) {
    return ci(e) || ["musicMovie", "musicVideo", "song", "radioStation"].indexOf(e.type) !== -1;
  }
}
function lt(i, e, t) {
  const a = { ...wr(i, t, e), ...Rr(i, t), ...Mr(i, t), ...Dr(i, t), ...Lr(i, t) };
  return (m.trace("PAF descriptor", a), a);
}
const Ir = Pt.register("mk-use-paf-qa-endpoint");
function Er(i, e) {
  return new Ar(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: V.app.build, name: V.app.name ?? "", version: V.app.version, bundleId: V.app?.bundleId },
    fetch: e.request.fetch,
    isQA: Ir.enabled,
    logInfo: m.enabled,
    sourceType: i.sourceType,
    guid: i.guid,
    userIsSubscribed: () => !!(i.isAuthorized && B.storekit._getIsActiveSubscription.getCachedValue()),
  });
}
function kr(i) {
  return (
    i.hasAutoplayStation &&
    i.items.some((e) => {
      const { id: t, type: a, container: r } = e;
      if (r && r.type === "stations" && r.name === mt.RADIO) return !1;
      let s = a;
      return (q(t) && (s = s.startsWith("library-") ? s : "library-" + s), ui(li(s)));
    })
  );
}
function wr(i, e, t) {
  if (t?.playbackActions === void 0 || e === void 0) return {};
  const a = { [J.all]: re.REPEAT_ALL, [J.none]: re.REPEAT_OFF, [J.one]: re.REPEAT_ONE },
    r = { [X.off]: ve.SHUFFLE_OFF, [X.songs]: ve.SHUFFLE_ON };
  return {
    playMode() {
      let s = re.REPEAT_UNKNOWN,
        n = ve.SHUFFLE_UNKNOWN,
        o = se.AUTO_UNKNOWN;
      const { playbackActions: p } = t;
      return (
        p &&
          (p.includes(Pe.REPEAT) && (s = a[t.repeatMode]),
          p.includes(Pe.SHUFFLE) && (n = r[t.shuffleMode]),
          p.includes(Pe.AUTOPLAY) &&
            (t.autoplayEnabled && t.queue !== void 0
              ? (o = kr(t.queue) ? se.AUTO_ON : se.AUTO_ON_CONTENT_UNSUPPORTED)
              : (o = se.AUTO_OFF))),
        { repeatPlayMode: s, shufflePlayMode: n, autoplayMode: o }
      );
    },
  };
}
const he = (i) => [l.playbackPlay, l.playbackSkip].includes(i),
  Bt = (i, e) => e !== void 0 && he(i);
function Rr(i, e) {
  if (!he(i)) return {};
  if (e === void 0) return {};
  const t = e.attributes?.mediaKind;
  return { ...(t !== void 0 ? { mediaType: t } : {}), ...e.playParams };
}
function Mr(i, e) {
  if (!he(i) || e === void 0) return {};
  const { context: t = {} } = e;
  return { recoData: t.reco_id };
}
function Dr(i, e) {
  if (!he(i) || e === void 0) return {};
  const t = e.playbackDuration;
  return t ? { duration: t / 1e3 } : {};
}
function Or(i, e) {
  return (Bt(i, e) && e?.container?.name) || null;
}
function Cr(i) {
  const e = { ...i };
  return (delete e.attributes, e);
}
function Lr(i, e) {
  const t = Or(i, e),
    a = Bt(i, e)
      ? {
          ...e?.container,
          ...e?.container?.attributes?.playParams,
          ...(e?.container?.attributes?.hasCollaboration && { isCollaborative: !0 }),
        }
      : null;
  if (!(t === null && a === null)) return { container: Cr({ ...a, ...(t !== null ? { name: t } : {}) }) };
}
function oe(i, e = 12) {
  if ((i instanceof Uint8Array && (i = _t(i)), typeof i == "string")) {
    const t = Math.floor(e / 2);
    return i.length > e ? i.slice(0, t) + "..." + i.slice(-t) : i;
  }
  return "0x0000";
}
const Me = Z.createChild("lyrics"),
  dt = new Map([
    [l.lyricsPlay, "lyricsPlay"],
    [l.lyricsStop, "lyricsStop"],
    [l.lyricsUpdate, "lyricsUpdate"],
    [l.playerExit, "exit"],
  ]);
class Nr {
  get requestedEvents() {
    return Array.from(dt.keys());
  }
  instance;
  services;
  _activityTracker;
  get activityTracker() {
    if (this.instance === void 0 || this.services === void 0)
      throw new P(P.Reason.CONFIGURATION_ERROR, "Lyrics Play Activity service was called before configuration.");
    return (
      this._activityTracker === void 0 &&
        (this._activityTracker = xr(this.instance, { runtime: this.services.runtime, request: this.services.request })),
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
    const a = t?.lyrics;
    if (a === void 0)
      throw new P(P.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsPlay");
    if (e === void 0) throw new P(P.Reason.MEDIA_DESCRIPTOR, "Cannot display lyrics without a MediaItem");
    this.activityTracker.play(Yr(l.lyricsPlay, e, a));
  }
  async lyricsStop(e, t) {
    this.activityTracker.stop();
  }
  async lyricsUpdate(e, t) {
    const a = t?.lyrics;
    if (a === void 0)
      throw new P(P.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsUpdate");
    try {
      if (this.activityTracker.startDescriptor === void 0) {
        Me.warn("lyricsUpdate called but no lyrics are being tracked");
        return;
      }
      this.activityTracker.update(a);
    } catch (r) {
      Me.warn(`lyricsUpdate failed: ${r.message}`);
    }
  }
  async exit(e, t) {
    this.activityTracker.exit();
  }
}
const Ur = Pt.register("mk-use-paf-qa-endpoint");
function xr(i, e) {
  return new nr(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: V.app.build, name: V.app.name ?? "", version: V.app.version },
    fetch: e.request.fetch,
    logInfo: Me.level <= di.INFO,
    sourceType: i.sourceType,
    isQA: Ur.enabled,
    userIsSubscribed: () => i.isAuthorized && B.storekit._getIsActiveSubscription.getCachedValue(),
  });
}
function Yr(i, e, t) {
  return {
    id: e.id,
    duration: 0,
    eventType: c.LYRIC_DISPLAY,
    container: { ...e.container, ...e.container?.attributes?.playParams },
    ...e.playParams,
    lyricDescriptor: { id: t.id ?? e.id, displayType: t.displayType, language: t.language },
    recoData: e.attributes?.reco_id,
  };
}
class Vt extends pi {
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
    if ((S.debug("instance.setStationQueue()", e), this.assertUserStorefront(), !this._isPlaybackSupported())) {
      S.warn("Playback is not supported");
      return;
    }
    const t = this.services.itemLoader.convertOptionsToItemDescriptors(e);
    if (t.length < 1) throw new P(P.Reason.CONTENT_UNAVAILABLE, "Could not parse descriptors from options");
    let a;
    const r = t[0];
    if (r.kind === "song" || r.kind === "artist")
      a = (await this.services.itemLoader.createAutoplayStation([r], { context: e.context, withTracks: !1 })).station;
    else {
      const s = await this.loadItems(e);
      if (!s[0]?.isRadioStation && !s[0]?.isRadioEpisode)
        throw new P(P.Reason.CONTENT_UNSUPPORTED, `Unsupported Radio Station type: ${s[0].type}`);
      a = s[0];
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
    if ((S.debug("instance.setQueue()", e), this.assertUserStorefront(), !this._isPlaybackSupported())) {
      S.warn("Playback is not supported");
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
      e.autoplay !== void 0 && hi("autoplay", { message: "autoplay has been deprecated, use startPlaying instead" }),
      (e.startPlaying ?? e.autoplay) === !0 && (await this.play()),
      r
    );
  }
  assertUserStorefront() {
    const e = B.storekit.storefrontCountryCode,
      t = B.storefrontId,
      a = e !== void 0 && e !== t;
    if (this.realm === gt.MUSIC && !this.previewOnly && a === !0) throw new P(P.Reason.CONTENT_EQUIVALENT);
  }
  async playNext(e, t) {
    if (!this._isPlaybackSupported()) {
      S.warn("Playback is not supported");
      return;
    }
    return (
      this.deferPlayback(),
      this.getPlaybackController().prependToQueue(await this.loadItems(e), { clear: e?.clear ?? t ?? !1 })
    );
  }
  async playLater(e) {
    if (!this._isPlaybackSupported()) {
      S.warn("Playback is not supported");
      return;
    }
    return (this.deferPlayback(), this.getPlaybackController().appendToQueue(await this.loadItems(e)));
  }
  async playAt(e, t) {
    if (!this._isPlaybackSupported()) {
      S.warn("Playback is not supported");
      return;
    }
    return (this.deferPlayback(), this.getPlaybackController().insertInQueue(await this.loadItems(t), e));
  }
  async clearQueue() {
    return (this._mediaItemPlayback.clearNextManifest(), this.playbackController?.clearQueue());
  }
  lyricsStart(e) {
    this.services.dispatcher.publish(l.lyricsPlay, { item: this.nowPlayingItem, lyrics: e });
  }
  lyricsStop() {
    this.services.dispatcher.publish(l.lyricsStop);
  }
  lyricsUpdate(e) {
    this.services.dispatcher.publish(l.lyricsUpdate, { lyrics: e });
  }
  async loadItems(e) {
    return this.services.itemLoader.loadItems({ ...e, restricted: B.storekit?.restrictedEnabled ?? !1 });
  }
}
var Fr = Object.defineProperty,
  $r = Object.getOwnPropertyDescriptor,
  Br = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? $r(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && Fr(e, t, r), r);
  };
class Qt {
  id;
  displayName;
  participantCount = 0;
  dispatcher;
  mediaState = {
    autoPlay: !1,
    capabilities: { autoPlayControl: !0, repeatControl: !0, shuffleControl: !0, volumeControl: !0 },
    playbackState: U.none,
    volume: 1,
    queue: [],
    shuffleMode: X.off,
    repeatMode: J.none,
    currentPlayingIndex: 0,
  };
  constructor(e, t) {
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
      this.dispatcher.publish(w.mediaStateUpdate, this.mediaState));
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
      case O.AUTOPLAY:
        return t.autoPlayControl;
      case O.REPEAT:
        return t.repeatControl;
      case O.SHUFFLE:
        return t.shuffleControl;
      case O.VOLUME:
        return t.volumeControl;
      case O.SEEK:
      case O.EDIT_QUEUE:
      case O.PAUSE:
      case O.SKIP_NEXT:
      case O.SKIP_PREVIOUS:
      case O.SKIP_TO_ITEM:
        return !0;
      default:
        return !1;
    }
  }
  get lastKnownElapsedTime() {
    const { queue: e, currentPlayingIndex: t } = this.mediaState,
      a = e[t];
    return Math.round(a?.attributes.elapsedTime) || 0;
  }
}
Br([H()], Qt.prototype, "checkCapability", 1);
const Y = (i) => (e, t, a) => {
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
var Vr = Object.defineProperty,
  Qr = Object.getOwnPropertyDescriptor,
  L = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? Qr(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && Vr(e, t, r), r);
  };
class D extends Vt {
  _sharePlay;
  _shuffleMode = X.off;
  _voidPlayer;
  _previousPlaybackState = {
    playbackMode: ge.MIXED_CONTENT,
    volume: 1,
    autoplayEnabled: !1,
    repeatMode: J.none,
    shuffleMode: X.off,
  };
  get sharePlay() {
    return this._sharePlay;
  }
  get isInSharePlay() {
    return this.playbackMode === ge.SHAREPLAY_PARTICIPANT;
  }
  async startSharePlay(e) {
    if (this.sharePlay !== void 0) return this.sharePlay;
    this.savePlaybackState();
    const t = new Qt(e, this.services.dispatcher);
    return (
      this.services.dispatcher.subscribe(w.mediaStateUpdate, this.onMediaStateUpdate),
      (this._voidPlayer = new Sr(
        yi({
          context: {},
          tokens: {},
          services: { ...this.services, store: B },
          autoplayEnabled: this.autoplayEnabled,
          privateEnabled: this.privateEnabled,
          siriInitiated: this.siriInitiated,
        }),
      )),
      (this.playbackMode = ge.SHAREPLAY_PARTICIPANT),
      (this._sharePlay = t),
      this.capabilities.updateChecker(t.checkCapability),
      await this._voidPlayer.initialize(),
      await this._mediaItemPlayback.setCurrentPlayer(this._voidPlayer),
      this.services.playActivity.disable(),
      t
    );
  }
  async endSharePlay() {
    this.isInSharePlay &&
      (this.updateQueue([], 0),
      (this._sharePlay = void 0),
      this.services.dispatcher.unsubscribe(w.mediaStateUpdate, this.onMediaStateUpdate),
      this.capabilities.updateChecker(this.getPlaybackController().hasCapabilities),
      this.services.playActivity.enable(),
      this.restorePlaybackState());
  }
  get shuffleMode() {
    return this.isInSharePlay ? this._shuffleMode : this.getPlaybackController().shuffleMode;
  }
  set shuffleMode(e) {
    if (!this.isInSharePlay) {
      this.getPlaybackController().shuffleMode = e;
      return;
    }
    e !== this._shuffleMode &&
      ((this._shuffleMode = e),
      this.services.dispatcher.publish(At.shuffleModeDidChange, e),
      this.sharePlay?.shouldUpdate("shuffleMode", e) && this.services.dispatcher.publish(w.shuffleModeChanged, e));
  }
  get repeatMode() {
    return super.repeatMode;
  }
  set repeatMode(e) {
    ((super.repeatMode = e),
      this.sharePlay?.shouldUpdate("repeatMode", this.repeatMode) &&
        this.services.dispatcher.publish(w.repeatModeChanged, { repeatMode: this.repeatMode }));
  }
  get autoplayEnabled() {
    return super.autoplayEnabled;
  }
  set autoplayEnabled(e) {
    if (!this.capabilities.canAutoplay) {
      S.warn("Setting autoplay is not supported in this playback method");
      return;
    }
    ((super.autoplayEnabled = e),
      this.sharePlay?.shouldUpdate("autoPlay", this.autoplayEnabled) &&
        this.services.dispatcher.publish(w.autoPlayChanged, { autoPlay: this.autoplayEnabled }));
  }
  get volume() {
    return super.volume;
  }
  set volume(e) {
    if (!this.capabilities.canSetVolume) {
      S.warn("Setting volume is not supported in this playback method");
      return;
    }
    ((super.volume = e),
      this.sharePlay?.shouldUpdate("volume", this.volume) &&
        this.services.dispatcher.publish(w.volumeChanged, { playbackState: this.volume }));
  }
  async play() {
    (await super.play(),
      this.sharePlay?.shouldUpdate("playbackState", this.playbackState) &&
        this.services.dispatcher.publish(w.playbackStateChanged, { playbackState: this.playbackState }),
      this._voidPlayer?.startTimerProgress());
  }
  async pause(e) {
    (await super.pause(e),
      this.sharePlay?.shouldUpdate("playbackState", this.playbackState) &&
        this.services.dispatcher.publish(w.playbackStateChanged, { playbackState: this.playbackState }),
      this._voidPlayer?.stopTimerProgress());
  }
  async seekToTime(e, t = fi.Manual) {
    (await super.seekToTime(e, t),
      this.sharePlay?.lastKnownElapsedTime !== this.currentPlaybackTime &&
        this.services.dispatcher.publish(w.progressChanged, { elapsedTime: this.currentPlaybackTime }));
  }
  async skipToNextItem() {
    return super.skipToNextItem();
  }
  async skipToPreviousItem() {
    return super.skipToPreviousItem();
  }
  async playMediaItem(e, t) {
    return super.playMediaItem(e, t);
  }
  async setStationQueue(e) {
    return super.setStationQueue(e);
  }
  async setQueue(e) {
    return super.setQueue(e);
  }
  assertUserStorefront() {
    super.assertUserStorefront();
  }
  async playNext(e, t = !1) {
    return super.playNext(e, t);
  }
  async playLater(e) {
    return super.playLater(e);
  }
  async playAt(e, t) {
    return super.playAt(e, t);
  }
  updateQueue(e, t) {
    if (this.queue === void 0) return;
    const a = e.map((s) => new mi(s)),
      r = a[t];
    (r && (r.playbackType = Ce.encryptedFull),
      this._voidPlayer && (this._voidPlayer.nowPlayingItem = r),
      this.queue.updateItems(a),
      (this.queue.position = t));
  }
  async onMediaStateUpdate(
    e,
    { autoPlay: t, currentPlayingIndex: a, queue: r, playbackState: s, shuffleMode: n, repeatMode: o, volume: p },
  ) {
    (this.updateQueue(r, a || 0),
      s === U.paused ? await this.pause() : s === U.playing && (await this.play()),
      (this.autoplayEnabled = t),
      (this.repeatMode = o),
      (this.shuffleMode = n),
      (this.volume = p),
      (this.playbackRate = this.nowPlayingItem?.attributes.playbackRate || 1),
      this.seekToTime(this.sharePlay?.lastKnownElapsedTime || 0));
  }
  savePlaybackState() {
    const { playbackMode: e, repeatMode: t, shuffleMode: a, volume: r, autoplayEnabled: s } = this;
    this._previousPlaybackState = { autoplayEnabled: s, playbackMode: e, repeatMode: t, shuffleMode: a, volume: r };
  }
  restorePlaybackState() {
    const {
      autoplayEnabled: e,
      playbackMode: t,
      repeatMode: a,
      shuffleMode: r,
      volume: s,
    } = this._previousPlaybackState;
    ((this.autoplayEnabled = e),
      (this.playbackMode = t),
      (this.repeatMode = a),
      (this.shuffleMode = r),
      (this.volume = s));
  }
}
L([Y(w.nextItem)], D.prototype, "skipToNextItem", 1);
L([Y(w.previousItem)], D.prototype, "skipToPreviousItem", 1);
L([Y()], D.prototype, "playMediaItem", 1);
L([Y()], D.prototype, "setStationQueue", 1);
L([Y()], D.prototype, "setQueue", 1);
L([Y()], D.prototype, "assertUserStorefront", 1);
L([Y()], D.prototype, "playNext", 1);
L([Y()], D.prototype, "playLater", 1);
L([Y()], D.prototype, "playAt", 1);
L([H()], D.prototype, "onMediaStateUpdate", 1);
var De = ((i) => ((i.MANUAL = "manual"), (i.AUTOMATIC = "automatic"), (i.UNKNOWN = "unknown"), i))(De || {}),
  $ = ((i) => ((i.buffering = "buffering"), (i.idle = "idle"), (i.paused = "paused"), (i.playing = "playing"), i))(
    $ || {},
  ),
  A = ((i) => (
    (i.bufferStart = "BUFFER_START"),
    (i.bufferStop = "BUFFER_STOP"),
    (i.exit = "EXIT"),
    (i.play = "PLAY"),
    (i.pause = "PAUSE"),
    (i.stop = "STOP"),
    (i.newItem = "NEW"),
    i
  ))(A || {});
const Gt = "~~previous~~",
  Ie = {
    initial: "idle",
    states: {
      idle: {
        on: {
          PLAY: {
            target: "playing",
            context: { reason: f.PLAY_START_REASON.PLAY, manual: "manual", fromInitialPlay: !0 },
          },
          NEW: { target: "playing", context: { reason: f.PLAY_START_REASON.PLAY } },
          EXIT: { target: "idle", context: { reason: f.PLAY_STOP_REASON.COMPLETE, manual: "automatic" } },
        },
      },
      playing: {
        on: {
          BUFFER_START: {
            target: "buffering",
            context: { reason: f.PLAY_STOP_REASON.BUFFERING, manual: "automatic", fromInitialPlay: Gt },
          },
          EXIT: { target: "idle", context: { reason: f.PLAY_STOP_REASON.EXIT } },
          PAUSE: { target: "paused", context: { reason: f.PLAY_STOP_REASON.PAUSE } },
          STOP: { target: "idle", context: { reason: f.PLAY_STOP_REASON.PLAY_OTHER, manual: "automatic" } },
          NEW: { target: "playing", context: { reason: f.PLAY_STOP_REASON.PLAY_OTHER } },
        },
      },
      paused: {
        on: {
          PLAY: { target: "playing", context: { reason: f.PLAY_START_REASON.UNPAUSE, manual: "manual" } },
          NEW: { target: "idle", context: { reason: f.PLAY_STOP_REASON.PLAY_OTHER, manual: "manual" } },
          EXIT: { target: "idle", context: { reason: f.PLAY_STOP_REASON.EXIT } },
        },
      },
      buffering: {
        on: {
          BUFFER_STOP: { target: "playing", context: { reason: f.PLAY_START_REASON.BUFFERING, manual: "automatic" } },
          EXIT: { target: "idle", context: { reason: f.PLAY_STOP_REASON.EXIT } },
        },
      },
    },
  },
  Ee = { manual: "unknown", reason: f.PLAY_STOP_REASON.UNKNOWN, fromInitialPlay: !1 };
class Gr {
  currentState = Ie.initial;
  currentContext = Ee;
  lastTrackedEvent = void 0;
  lastPlayStartEvent = void 0;
  isAllowedTransition(e) {
    return this.getNextState(e) !== void 0;
  }
  transition(e, t = {}) {
    const a = this.getNextState(e);
    if (!a) return;
    Z.debug(`[mk/activity/PodPaf] Transitioning from ${this.currentState} to ${a.target} because of ${e} event`);
    const r = {};
    return (
      t.manual !== void 0 && (r.manual = t.manual),
      t.reason !== void 0 && (r.reason = t.reason),
      t.fromInitialPlay !== void 0 && (r.fromInitialPlay = t.fromInitialPlay),
      (this.currentContext = { ...Ee, ...a.context, ...r, ...this.preservePreviousContext(a.context) }),
      (this.currentState = a.target),
      this.currentContext
    );
  }
  reset() {
    ((this.currentState = Ie.initial), (this.currentContext = Ee));
  }
  getNextState(e) {
    return Ie.states[this.currentState].on[e];
  }
  preservePreviousContext(e) {
    const t = {};
    return (
      ["manual", "reason", "reasonType", "fromInitialPlay"].forEach((a) => {
        e[a] === Gt && (t[a] = this.currentContext[a]);
      }),
      t
    );
  }
}
const pt = "xp_amp_podcasts_paf",
  zr = "com.apple.podcasts",
  Kr = "web-podcasts-player",
  qr = "daf.xp.apple.com",
  Hr = "1.0",
  Wr = { [l.playbackPause]: A.pause, [l.playbackPlay]: A.play, [l.playbackStop]: A.stop, [l.playerExit]: A.exit };
var jr = Object.defineProperty,
  Jr = Object.getOwnPropertyDescriptor,
  ye = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? Jr(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && jr(e, t, r), r);
  };
const u = Z.createChild("podpaf"),
  _ = "PodPAF";
class te {
  currentItem;
  dispatcher;
  mkInstance;
  services;
  tracker;
  playActivityProcessor;
  synchronizeTimeout;
  state;
  constructor() {
    this.state = new Gr();
  }
  async configure(e) {
    ((this.mkInstance = e.instance), (this.services = e.services), (this.dispatcher = e.services.dispatcher));
    const t = {
        config: { configHostname: () => qr },
        environment: {
          app() {
            return zr;
          },
          appVersion() {
            return Hr;
          },
          delegateApp() {
            return Kr;
          },
          isOffline() {
            return !1;
          },
          storeFrontCountryCode() {
            return B.storefrontCountryCode;
          },
        },
      },
      a = new Ti(pt, t);
    ((this.playActivityProcessor = new vi(a)), await this.playActivityProcessor.init(), this.setupListeners());
  }
  get requestedEvents() {
    return Array.from(qe.keys());
  }
  get isConfigured() {
    return this.mkInstance !== void 0;
  }
  setupListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.subscribe(N.nowPlayingItemWillChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.subscribe(N.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.subscribe(N.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange));
  }
  teardownListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.unsubscribe(N.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.unsubscribe(N.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.unsubscribe(N.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange));
  }
  async cleanup() {
    (this.teardownListeners(), this.stopSynchronizing());
  }
  async handleNowPlayingItemDidChange(e, t) {
    const { item: a } = t;
    if (!a) {
      (this.state.lastTrackedEvent?.eventType === y.PLAY_STARTED &&
        (k(this.tracker, _),
        u.debug("PodPAF: current item naturally ends"),
        await this.trackEvent(
          y.PLAY_STOPPED,
          this.mkInstance?.currentPlaybackDuration ?? 0,
          this.tracker.TYPE.AUTOMATIC,
          this.tracker.PLAY_STOP_REASON.COMPLETE,
        )),
        u.debug("PodPAF.handleNowPlayingItemDidChange: calling exit and clearing currentItem"),
        this.state.transition(A.exit),
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
      n = `PlaybackStates.${U[t.oldState]}`,
      o = `PlaybackStates.${U[t.state]}`;
    (u.debug(`PodPAF.onPlaybackStateChange: ${n} -> ${o}`, s),
      a === U.waiting
        ? (u.debug("PodPAFTracker.onPlaybackStateChange: triggering bufferStart()", s), await this.bufferStart(r, s))
        : a === U.playing
          ? t.oldState === U.waiting &&
            (u.debug("PodPAFTracker.onPlaybackStateChange: triggering bufferEnd()", s), await this.bufferEnd(r, s))
          : a !== U.stalled && u.debug("PodPAFTracker.onPlaybackStateChange: resetting isBuffering=false"));
  }
  handleTargetWirelessChange() {
    this.mkInstance !== void 0 && this.tracker?.updateData(He(this.mkInstance));
  }
  shouldTrackPlayActivity(e, t) {
    if (!t || !t.podpafMetrics || t.playbackType === Ce.preview) return !1;
    const a = Wr[e];
    return a !== void 0 ? this.state.isAllowedTransition(a) : !0;
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = qe.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async canTrackItem(e, t = {}) {
    if (e === void 0) return !1;
    if (this.currentItem?.id !== e.id) {
      const { manual: a, reason: r } = this.getContextForNewItem(t);
      (this.state.transition(A.newItem, { manual: a, reason: r, fromInitialPlay: !0 }),
        (this.currentItem = e),
        u.debug("PodPAF: Creating new tracker for new item"),
        await this.createTracker(e));
    }
    return this.tracker !== void 0;
  }
  async createTracker(e) {
    Pi(this.playActivityProcessor, _);
    const { mediaActivityTracker: t } = this.playActivityProcessor,
      a = t.createMediaPlaylist(0);
    u.debug("PodPAF: Creating Podcast Playlist");
    const r = { ...e.podpafMetrics, ...this.getAdditionalTrackingData(this.mkInstance, this.services) };
    return (
      (this.tracker = t.createTracker(a, r)),
      u.debug(`PodPAFTracker.createTracker: creating new tracker for ${e?.id}`),
      this.startSynchronizing(),
      this.tracker
    );
  }
  async trackEvent(e, t, a, r) {
    (k(this.tracker, _),
      a === void 0 && (a = this.state.currentContext.manual),
      r === void 0 && (r = this.state.currentContext.reason));
    const s = { eventType: e, position: t, type: a, reason: r },
      n = this.getAdditionalPlaybackData(e, t),
      o = We(t);
    (u.debug(
      `PodPAFTracker.trackEvent(${e}, ${o}, ${a}, ${r}, play duration: ${n.playDuration}, play start position: ${n.playStartPosition})`,
    ),
      (this.state.lastTrackedEvent = s),
      await this.tracker[e].call(this.tracker, o, a, r, n),
      e === y.PLAY_STARTED && (this.state.lastPlayStartEvent = s));
  }
  async bufferStart(e, t) {
    if ((u.debug("PodPAFTracker: handling bufferStart()"), !(await this.canTrackItem(e)))) {
      u.debug("PodPAFTracker: aborting bufferStart, no tracker");
      return;
    }
    if ((k(this.tracker, _), this.state.currentState !== $.playing)) {
      u.debug("PodPafTracker: aborting bufferStart, not playing");
      return;
    }
    if (this.state.lastTrackedEvent?.reason === "seek") {
      u.debug("PodPAFTracker: aborting bufferStart, after a seek");
      return;
    }
    this.state.transition(A.bufferStart);
    const a = this.state.currentContext.fromInitialPlay,
      r = t.position ?? 0;
    a
      ? u.debug("PodPafTracker: bufferStart() not tracking PLAY_STOPPED, it is from initial play")
      : await this.trackEvent(y.PLAY_STOPPED, r, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_STOP_REASON.BUFFERING);
  }
  async bufferEnd(e, t) {
    if ((u.debug("PodPAFTracker: handling bufferEnd()"), !(await this.canTrackItem(e)))) return;
    if ((k(this.tracker, _), this.state.currentState !== $.buffering)) {
      u.debug("PodPafTracker: aborting bufferEnd, not buffering");
      return;
    }
    if (this.state.lastTrackedEvent?.reason === "seek") {
      u.debug("PodPAFTracker: aborting bufferEnd, after a seek");
      return;
    }
    this.state.transition(A.bufferStop);
    const a = this.state.currentContext.fromInitialPlay,
      r = t.position ?? 0;
    a
      ? u.debug("PodPafTracker: bufferEnd() not tracking PLAY_STARTED, it is from initial play")
      : await this.trackEvent(y.PLAY_STARTED, r, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.BUFFERING);
  }
  async scrub(e, t = {}) {
    u.debug("PodPAFTracker.scrub()");
  }
  async seek(e, t = {}) {
    (u.debug("PodPAFTracker.seek()"),
      !(e === void 0 || t.position === void 0 || t.startPosition === void 0) &&
        (gi(t) ? await this.trackSeek(e, t) : await this.trackScrub(e, t)));
  }
  async trackScrub(e, t) {
    const a = t.position,
      r = t.startPosition;
    (await this.trackScrubStart(e, r), await this.trackScrubStop(e, a));
  }
  async trackScrubStart(e, t) {
    (u.debug("PodPAFTracker.trackScrubStart()"),
      (await this.canTrackItem(e)) &&
        (k(this.tracker, _),
        this.state.currentState === $.playing &&
          (await this.trackEvent(y.PLAY_STOPPED, t, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_STOP_REASON.SEEK)),
        await this.trackEvent(y.SEEK_STARTED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.SCRUB)));
  }
  async trackScrubStop(e, t) {
    (u.debug("PodPAFTracker.trackScrubStop()"),
      (await this.canTrackItem(e)) &&
        (k(this.tracker, _),
        await this.trackEvent(y.SEEK_STOPPED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_STOP_REASON.SCRUB),
        this.state.currentState === $.playing &&
          (await this.trackEvent(
            y.PLAY_STARTED,
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
    if ((u.debug("PodPAFTracker.seekStart()"), !(await this.canTrackItem(e)))) return;
    k(this.tracker, _);
    const a = t.position ?? 0;
    (this.state.currentState === $.playing &&
      (await this.trackEvent(y.PLAY_STOPPED, a, this.tracker.TYPE.MANUAL, this.tracker.PLAY_STOP_REASON.SEEK)),
      await this.trackEvent(y.SEEK_STARTED, a, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.INTERVAL));
  }
  async trackSeekStop(e, t) {
    if ((u.debug("PodPAFTracker.seekEnd()"), !(await this.canTrackItem(e)))) return;
    k(this.tracker, _);
    const a = t.position ?? 0;
    (await this.trackEvent(y.SEEK_STOPPED, a, this.tracker.TYPE.AUTOMATIC, this.tracker.SEEK_STOP_REASON.INTERVAL),
      this.state.currentState === $.playing &&
        (await this.trackEvent(y.PLAY_STARTED, a, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.SEEK)));
  }
  async play(e, t = {}) {
    (u.debug("PodPAFTracker.play()", e, t),
      (await this.canTrackItem(e, t)) &&
        (k(this.tracker, _),
        this.state.transition(A.play, this.getExplicitStateContext(t)),
        await this.trackEvent(y.PLAY_STARTED, t.position ?? 0)));
  }
  async pause(e, t = {}) {
    (u.debug("PodPAFTracker.pause()", e, t),
      (await this.canTrackItem(e, t)) &&
        (k(this.tracker, _),
        this.state.transition(A.pause, this.getExplicitStateContext(t)),
        await this.trackEvent(y.PLAY_STOPPED, t.position ?? 0, void 0, this.tracker?.PLAY_STOP_REASON.PAUSE)));
  }
  async skip(e, t = {}) {
    (u.debug("PodPAFTracker.skip()", e, t),
      (await this.canTrackItem(e, t)) &&
        (k(this.tracker, _),
        this.state.transition(A.play, this.getExplicitStateContext(t)),
        await this.trackEvent(
          y.PLAY_STARTED,
          t.position ?? 0,
          this.tracker?.TYPE.AUTOMATIC,
          this.tracker?.PLAY_START_REASON.PLAY_OTHER,
        )));
  }
  async stop(e, t = {}) {
    (u.debug("PodPAFTracker.stop()", e, t),
      (await this.canTrackItem(e)) &&
        (k(this.tracker, _),
        this.state.transition(A.stop, this.getExplicitStateContext(t)),
        await this.trackEvent(y.PLAY_STOPPED, t.position ?? 0),
        this.stopSynchronizing(),
        (this.currentItem = void 0)));
  }
  async exit(e, t = {}) {
    (u.debug("PodPAFTracker.exit()"),
      (await this.canTrackItem(this.currentItem)) &&
        (this.state.transition(A.exit),
        await this.trackEvent(y.PLAY_STOPPED, t.position ?? 0),
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
    (u.debug(`PodPAF: synchronize rate: ${r} and current time: ${s}`), this.tracker.synchronize(r, s));
  }
  startSynchronizing() {
    this.synchronizeTimeout === void 0 && (this.synchronizeTimeout = setInterval(this.synchronize, 6e4));
  }
  stopSynchronizing() {
    this.synchronizeTimeout !== void 0 && (clearInterval(this.synchronizeTimeout), (this.synchronizeTimeout = void 0));
  }
  getContextForNewItem(e) {
    let t;
    const a = e?.userInitiated,
      { lastTrackedEvent: r } = this.state,
      s = r === void 0;
    a !== void 0 ? (t = this.determineManual(e)) : (t = s ? De.MANUAL : De.AUTOMATIC);
    const n = s ? f.PLAY_START_REASON.PLAY : a ? f.PLAY_START_REASON.PLAY_OTHER : f.PLAY_START_REASON.NEXT;
    return { manual: t, reason: n };
  }
  getMappedStopReason(e) {
    if (e.endReasonType !== void 0) return f.PLAY_STOP_REASON[Ai[e.endReasonType]];
  }
  determineManual(e) {
    let t;
    const a = e?.userInitiated;
    return (a !== void 0 && (t = a ? f.TYPE.MANUAL : f.TYPE.AUTOMATIC), t);
  }
  getExplicitStateContext(e) {
    return { manual: this.determineManual(e), reason: this.getMappedStopReason(e) };
  }
  getAdditionalPlaybackData(e, t) {
    const { lastPlayStartEvent: a, lastTrackedEvent: r } = this.state;
    let s,
      n = a?.position;
    return (
      e === y.PLAY_STARTED ? (n = t) : r?.eventType === y.PLAY_STARTED && (s = t - (n ?? 0)),
      { playDuration: s, playStartPosition: n }
    );
  }
  getAdditionalTrackingData(e, t) {
    const { delegatedPlayback: a } = He(e),
      { currentPlaybackDuration: r } = e;
    return {
      delegatedPlayback: a,
      isSignedIn: B.isAuthorized,
      language: bi(_i()?.[0]),
      playStartTime: new Date().getTime(),
      playerHardwareFamily: a === "Airplay" ? t.runtime?.userAgent.ua : void 0,
      topic: pt,
      overallLength: We(r),
      contentLength: r,
    };
  }
}
ye([H()], te.prototype, "handleNowPlayingItemDidChange", 1);
ye([H()], te.prototype, "onPlaybackStateChange", 1);
ye([H()], te.prototype, "handleTargetWirelessChange", 1);
ye([H()], te.prototype, "synchronize", 1);
const Xr = () => ({
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
async function Zr() {
  const i = Xr().results.links.map(
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
function es(i, e, t = {}) {
  const [a] = i.split(/\?|\#|\&/),
    r = e.regex.test(a);
  return r && e.requiredQueryParams
    ? Object.keys(e.requiredQueryParams).every((s) => {
        const n = t[s];
        return e.requiredQueryParams[s].test(n);
      })
    : r;
}
async function ts(i) {
  const e = await Zr(),
    t = bt(i);
  return e.reduce((a, r) => {
    if (es(i, r, t)) {
      if (a.length > 0) {
        if (r.requiredQueryParams) a = a.filter((s) => s.requiredQueryParams);
        else if (a.some((s) => s.requiredQueryParams)) return a;
      }
      (r.requiredQueryParams
        ? (r.mediaAPI.parameters = Object.keys(r.requiredQueryParams).reduce((s, n) => ((s[n] = t[n]), s), {}))
        : r.mediaAPI.parameterMapping && (r.mediaAPI.parameters = Si(r.mediaAPI.parameterMapping, t, !0)),
        a.push(r));
    }
    return a;
  }, []);
}
async function os(i) {
  return { results: { links: await ts(i) }, meta: { originalUrl: i, originalQueryParams: bt(i) } };
}
async function ht(i) {
  (S.linkChild(Z),
    S.linkChild(vt),
    S.linkChild(Ii),
    S.linkChild(R),
    (i.playActivityAPI = i.realm === gt.PODCAST ? [new te()] : [new Ue(), new Nr()]));
  let e = Vt;
  return (
    i.rtcOptions !== void 0 && (i.playActivityAPI = [...i.playActivityAPI, new Ei(i.rtcOptions), new ki()]),
    (e = D),
    await wi(i, e, async (a) => {
      (await a.configure({ storefrontId: i.apiOptions?.storefrontId }),
        i.declarativeMarkup &&
          typeof console < "u" &&
          console.warn &&
          console.warn("The declarativeMarkup configuration option has been removed in MusicKit JS V3"));
    })
  );
}
if (Ri) {
  const i = Mi(),
    e = /interactive|complete|loaded/.test(document.readyState);
  i &&
    i.developerToken &&
    Di().length === 0 &&
    (e ? Oi(ht(i)) : document.addEventListener("DOMContentLoaded", () => ht(i)));
}
export {
  At as Events,
  P as MKError,
  mi as MediaItem,
  h as PlayActivityEndReasonType,
  ke as PlayActivitySourceType,
  Pe as PlaybackActions,
  ls as PlaybackBitrate,
  ge as PlaybackMode,
  U as PlaybackStates,
  Ce as PlaybackType,
  J as PlayerRepeatMode,
  X as PlayerShuffleMode,
  ds as PresentationMode,
  gt as SKRealm,
  ps as __dev,
  hs as __log,
  ht as configure,
  ys as enableMultipleInstances,
  fs as formatArtworkURL,
  ns as formatMediaTime,
  Jt as formattedMediaURL,
  ss as formattedMilliseconds,
  $t as formattedSeconds,
  rs as generateEmbedCode,
  ms as getHlsJsCdnConfig,
  Ts as getInstance,
  Di as getInstances,
  vs as getPlayerType,
  os as resolveCanonical,
};
