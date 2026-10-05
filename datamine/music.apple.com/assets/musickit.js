import {
  u as pt,
  v as O,
  e as Oe,
  w as k,
  x as ke,
  y as Ge,
  z as d,
  A as o,
  b as p,
  B as b,
  C as z,
  D as ht,
  F as jt,
  G as yt,
  H as Jt,
  I as ft,
  J as Xt,
  K as oe,
  L as Zt,
  N as ei,
  O as ti,
  R as ii,
  T as N,
  U as ai,
  W as mt,
  X as j,
  Y as l,
  Z as Tt,
  _ as ze,
  $ as ri,
  a0 as si,
  p as Ce,
  a1 as ni,
  a2 as B,
  a3 as $,
  d as H,
  a4 as ie,
  c as W,
  a5 as ve,
  a6 as ae,
  f as Pe,
  a7 as oi,
  a8 as ci,
  a9 as ui,
  a as li,
  aa as _,
  ab as di,
  h as vt,
  ac as K,
  m as U,
  E as Pt,
  ad as I,
  ae as D,
  n as ge,
  af as pi,
  S as hi,
  M as yi,
  ag as y,
  ah as fi,
  ai as mi,
  aj as Ke,
  ak as h,
  al as S,
  am as qe,
  an as Ti,
  ao as vi,
  ap as Pi,
  aq as gi,
  ar as Ai,
  as as He,
  at as gt,
  au as _i,
  av as bi,
  aw as Si,
  ax as Ii,
  ay as Ei,
  az as ki,
  aA as wi,
  j as Ri,
  aB as Mi,
} from "./dev.js";
import { l as ss, o as ns, s as os, t as cs, k as us, aC as ls, r as ds, i as ps, q as hs } from "./dev.js";
import { bk as P } from "./main.js";
import { bl as fs, bm as ms } from "./main.js";
const We = Date.now();
function je() {
  if (typeof globalThis.process?.hrtime == "function") {
    const [i, e] = process.hrtime();
    return Math.floor(1e3 * i + 1e-6 * e);
  } else return typeof globalThis.performance?.now == "function" ? globalThis.performance.now() - We : Date.now() - We;
}
const Di = (i) => ("0" + (i & 255).toString(16)).slice(-2),
  At = (i, e = 8) => {
    if (!(i instanceof Uint8Array)) return "";
    const t = Array.prototype.map.call(i, Di).join("");
    return e === 0 ? t : t.replace(new RegExp(`(.{1,${e}})`, "g"), "$1 ").trim();
  };
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
***************************************************************************** */ function Je(i, e) {
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
var V;
(function (i) {
  ((i[(i.NotStarted = 0)] = "NotStarted"), (i[(i.Running = 1)] = "Running"), (i[(i.Stopped = 2)] = "Stopped"));
})(V || (V = {}));
var _t = { type: "xstate.init" };
function Ae(i) {
  return i === void 0 ? [] : [].concat(i);
}
function G(i) {
  return { type: "xstate.assign", assignment: i };
}
function Xe(i, e) {
  return typeof (i = typeof i == "string" && e && e[i] ? e[i] : i) == "string"
    ? { type: i }
    : typeof i == "function"
      ? { type: i.name, exec: i }
      : i;
}
function ce(i) {
  return function (e) {
    return i === e;
  };
}
function bt(i) {
  return typeof i == "string" ? { type: i } : i;
}
function Ze(i, e) {
  return { value: i, context: e, actions: [], changed: !1, matches: ce(i) };
}
function et(i, e, t) {
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
function St(i, e) {
  e === void 0 && (e = {});
  var t = Je(
      et(
        Ae(i.states[i.initial].entry).map(function (n) {
          return Xe(n, e.actions);
        }),
        i.context,
        _t,
      ),
      2,
    ),
    a = t[0],
    r = t[1],
    s = {
      config: i,
      _options: e,
      initialState: { value: i.initial, actions: a, context: r, matches: ce(i.initial) },
      transition: function (n, c) {
        var f,
          M,
          E = typeof n == "string" ? { value: n, context: i.context } : n,
          L = E.value,
          Z = E.context,
          he = bt(c),
          ye = i.states[L];
        if (ye.on) {
          var Vt = Ae(ye.on[he.type]);
          try {
            for (
              var ee = (function (v) {
                  var Te = typeof Symbol == "function" && Symbol.iterator,
                    Qe = Te && v[Te],
                    Ve = 0;
                  if (Qe) return Qe.call(v);
                  if (v && typeof v.length == "number")
                    return {
                      next: function () {
                        return (v && Ve >= v.length && (v = void 0), { value: v && v[Ve++], done: !v });
                      },
                    };
                  throw new TypeError(Te ? "Object is not iterable." : "Symbol.iterator is not defined.");
                })(Vt),
                q = ee.next();
              !q.done;
              q = ee.next()
            ) {
              var te = q.value;
              if (te === void 0) return Ze(L, Z);
              var fe = typeof te == "string" ? { target: te } : te,
                Q = fe.target,
                Ye = fe.actions,
                xe = Ye === void 0 ? [] : Ye,
                Fe = fe.cond,
                Gt =
                  Fe === void 0
                    ? function () {
                        return !0;
                      }
                    : Fe,
                zt = Q === void 0,
                Kt = Q ?? L,
                qt = i.states[Kt];
              if (Gt(Z, he)) {
                var me = Je(
                    et(
                      (zt
                        ? Ae(xe)
                        : [].concat(ye.exit, xe, qt.entry).filter(function (v) {
                            return v;
                          })
                      ).map(function (v) {
                        return Xe(v, s._options.actions);
                      }),
                      Z,
                      he,
                    ),
                    3,
                  ),
                  $e = me[0],
                  Ht = me[1],
                  Wt = me[2],
                  Be = Q ?? L;
                return {
                  value: Be,
                  context: Ht,
                  actions: $e,
                  changed: Q !== L || $e.length > 0 || Wt,
                  matches: ce(Be),
                };
              }
            }
          } catch (v) {
            f = { error: v };
          } finally {
            try {
              q && !q.done && (M = ee.return) && M.call(ee);
            } finally {
              if (f) throw f.error;
            }
          }
        }
        return Ze(L, Z);
      },
    };
  return s;
}
var tt = function (i, e) {
  return i.actions.forEach(function (t) {
    var a = t.exec;
    return a && a(i.context, e);
  });
};
function It(i) {
  var e = i.initialState,
    t = V.NotStarted,
    a = new Set(),
    r = {
      _machine: i,
      send: function (s) {
        t === V.Running &&
          ((e = i.transition(e, s)),
          tt(e, bt(s)),
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
          e = { value: n.value, actions: [], context: n.context, matches: ce(n.value) };
        }
        return ((t = V.Running), tt(e, _t), r);
      },
      stop: function () {
        return ((t = V.Stopped), a.clear(), r);
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
const ne = "amupaee",
  it = "https://universal-activity-service.itunes.apple.com",
  Oi = "A method was called without a previous descriptor",
  Ci = "The scrub() method was called with the SCRUB_END action without a previous SCRUB_START descriptor",
  Li = "The play() method was called without a previous stop() or pause() call.",
  Ni = "A play stop() method was called without a previous play() descriptor",
  Re = /(?:st|ra)\.([0-9]+)/,
  at = /st\.([0-9]+)/,
  Et = "send() called without any data",
  Ui = ({ timestamp: i, ...e }) => ({ ...e, "milliseconds-since-play": Date.now() - i });
class Yi {
  mode = pt.AUTO;
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
    return O(this._accessToken);
  }
  get musicUserToken() {
    return O(this._musicUserToken);
  }
  get url() {
    return this._isQA ? `${it}/qa/play` : `${it}/play`;
  }
  async send(e) {
    const t = { client_id: this._clientId, event_type: this._eventType, data: Oe(e).map(Ui) };
    if (t.data.length === 0) throw new Error(Et);
    const a = this._generateFetchOptions({ method: "POST", body: JSON.stringify(t), headers: this.headers() });
    return (
      await this._fetch(this.url, a),
      this._logInfo && k.info("play activity:", this._sourceType === ke.AMAZON ? JSON.stringify(t) : t),
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
function xi(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
const kt = (i, e) =>
    e?.name === void 0 ? "MusicKitApp/1.0" : i !== void 0 ? i : `${xi(e.name)}/${e?.version || "1.0"}`,
  Fi = (i) => {
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
  $i = (i) => `model/${i?.platform || "Unavailable"}`,
  Bi = (i) => {
    const e = i?.build;
    return e === void 0 || e === "" ? "build/0.0.0" : `build/${e}`;
  },
  Qi = (i, e, t, a) => [kt(i, e), Fi(a), $i(t), Bi(e)].join(" "),
  Vi = { platform: "", userAgent: "" };
class wt {
  constructor(e, t, a, r) {
    ((this._accessToken = e),
      (this._musicUserToken = t),
      (this._storefrontId = a),
      r &&
        ((this._appInfo = r.app),
        (this._navigator = r.navigator),
        (this._userAgent = r.userAgent),
        Ge(r, "utcOffset") && isNaN(r.utcOffset)
          ? (this._utcOffsetInSeconds = -1)
          : Ge(r, "utcOffset") && (this._utcOffset = r.utcOffset),
        (this.clientId = r.clientId || "JSCLIENT"),
        (this._deviceName = r.deviceName),
        (this.guid = r.guid),
        (this.metricsClientId = r.metricsClientId),
        (this.preferDSID = r.preferDSID ?? !1),
        (this.sourceType = r.sourceType !== void 0 && typeof r.sourceType == "number" ? r.sourceType : ke.MUSICKIT),
        (this._userIsSubscribed = r.userIsSubscribed ?? !0),
        (this._allowReportingId = r.allowReportingId ?? !1),
        r.app?.bundleId && (this.bundleId = r.app?.bundleId)),
      (this.buildVersion = Qi(this._appId, this._appInfo, this.navigator, this.userAgent)),
      (this.sender = new Yi({
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
    return O(this._accessToken);
  }
  get appID() {
    return (this._appId === void 0 && (this._appId = kt(this._appId, this._appInfo)), this._appId);
  }
  get deviceName() {
    return this._deviceName;
  }
  get musicUserToken() {
    return O(this._musicUserToken);
  }
  get navigator() {
    return this._navigator ?? (typeof navigator > "u" ? Vi : navigator);
  }
  get storefrontId() {
    return O(this._storefrontId);
  }
  get userAgent() {
    return this._userAgent ?? this.navigator.userAgent;
  }
  get userIsSubscribed() {
    return O(this._userIsSubscribed);
  }
  get allowReportingId() {
    return O(this._allowReportingId);
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
const Gi = (i, ...e) => e.reduce((t, a) => a(t), i);
function T(i, e, t) {
  return i.eventType === void 0
    ? o.PLAY_START
    : i.itemType === d.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? o.PLAY_END
      : (i.eventType ?? o.PLAY_START);
}
function ue(i, e, t) {
  const a = i.userPreference;
  return (
    T(i) === o.PLAY_END &&
    i.audioQuality?.provided !== void 0 &&
    i.audioQuality?.targeted !== void 0 &&
    a?.audioQuality !== void 0 &&
    a?.playbackFormat !== void 0
  );
}
function zi(i, e, t) {
  if (!ue(i)) return;
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
function Ki(i, e, t) {
  if (!ue(i)) return;
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
function qi(i, e, t) {
  return t.client.bundleId;
}
function Hi(i, e, t) {
  return t.client.buildVersion;
}
const Wi = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function le({ kind: i }, e, t) {
  return i !== void 0 && Wi.includes(i);
}
function ji({ endReasonType: i, eventType: e, itemType: t, timedMetadata: a }, r, s) {
  return a !== void 0 && (t === d.TIMED_METADATA_PING || e === o.PLAY_START || i === p.PLAYBACK_MANUALLY_PAUSED);
}
function w(i, e, t) {
  const { id: a, reporting: r } = i;
  if (a === "-1" || !r)
    switch (T(i)) {
      case o.PLAY_END:
        return d.AGGREGATE_NON_CATALOG_PLAY_TIME;
      case o.PLAY_START:
        if (a === "-1") return d.INVALID;
    }
  const { format: s, kind: n, itemType: c } = i;
  return n === "musicMovie"
    ? d.ORIGINAL_CONTENT_MOVIES
    : ji(i)
      ? c === d.TIMED_METADATA_PING
        ? c
        : d.STREAM
      : s === "stream"
        ? d.STREAM
        : le(i)
          ? d.ARTIST_UPLOADED_CONTENT
          : (c ?? d.ITUNES_STORE_CONTENT);
}
function Y(i, e, t) {
  if (w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = i.container?.type ?? i.container?.kind;
  if (typeof a == "number") return a;
  switch (a) {
    case "album":
    case "albums":
    case "library-albums":
      return b.ALBUM;
    case "artist":
    case "artists":
    case "library-artists":
      return b.ARTIST;
    case "playlist":
    case "playlists":
    case "library-playlists":
      return b.PLAYLIST;
    case "radio":
    case "radioStation":
    case "station":
    case "stations":
      return b.RADIO;
    default:
      return b.UNKNOWN;
  }
}
function Ji(i, e, t) {
  if (Y(i) !== b.ALBUM) return;
  const { container: a } = i,
    r = a?.id;
  if (r !== void 0 && !z(r)) return r;
}
function Xi(i, e, t) {
  if (Y(i) !== b.ALBUM) return;
  const { container: a } = i,
    r = a?.id;
  if (r !== void 0 && z(r)) return r;
}
function Zi(i, e, t) {
  if (Y(i) !== b.PLAYLIST) return;
  const { container: a } = i,
    r = a?.catalogId ?? a?.globalId;
  if (a?.isLibrary && r) return r;
  if (!z(a?.id)) return a?.id;
}
function ea(i, e, t) {
  if (Y(i) !== b.PLAYLIST) return;
  const { container: a } = i,
    r = a?.versionHash;
  if (!(r === void 0 || r === "")) return r;
}
function ta(i, e, t) {
  if (Y(i) !== b.RADIO) return;
  const a = i.container?.stationHash;
  return a !== void 0 && a !== "" ? a : void 0;
}
function ia(i, e, t) {
  if (Y(i) === b.RADIO) return i.container?.id;
}
function aa(i, e, t) {
  if (Y(i) !== b.RADIO) return;
  const a = i.container?.id;
  if (a !== void 0 && at.test(a)) return parseInt(a.replace(at, "$1"), 10);
}
function ra(i, e, t) {
  if (Y(i) !== b.PLAYLIST) return;
  const { container: a } = i,
    r = a?.catalogId ?? a?.globalId,
    s = a?.id;
  if (s !== void 0) {
    if (a?.isLibrary && r) {
      if (s !== "") return s;
    } else if (z(s)) return s;
  }
}
function sa(i, e, t) {
  if (w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = Ji(i);
  r !== void 0 && (a["album-adam-id"] = r);
  const s = Xi(i);
  s !== void 0 && (a["cloud-album-id"] = s);
  const n = Zi(i);
  n !== void 0 && (a["global-playlist-id"] = n);
  const c = ea(i);
  c !== void 0 && (a["playlist-version-hash"] = c);
  const f = ta(i);
  f !== void 0 && (a["station-hash"] = f);
  const M = ia(i);
  M !== void 0 && (a["station-id"] = M);
  const E = aa(i);
  E !== void 0 && (a["station-personalized-id"] = E);
  const L = ra(i);
  if ((L !== void 0 && (a["universal-library-id"] = L), !ht(a))) return a;
}
function na(i, e, t) {
  return t.client.accessToken;
}
function oa(i, e, t) {
  return t.client.deviceName;
}
function ca(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY) return O(i.lyricDescriptor?.displayTranslation);
}
function ua(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY) return O(i.lyricDescriptor?.displayTransliteration);
}
function la(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY) return i.lyricDescriptor?.displayType;
}
function Rt({ position: i = 0, startPositionInMilliseconds: e }, t, a) {
  return e || Math.round(1e3 * i);
}
function da(i, e, t) {
  switch (T(i)) {
    case o.LYRIC_DISPLAY:
      return i.lyricDescriptor?.duration === void 0 ? void 0 : Math.round(i.lyricDescriptor.duration);
    case o.PLAY_START:
      return;
    default:
      return e && e.position === void 0 ? void 0 : i.endPositionInMilliseconds || Rt(i);
  }
}
function J({ id: i, reporting: e }, t, a) {
  return i === "-1" || !e;
}
function Mt(i, e, t) {
  if (!(e && e?.position === void 0))
    return w(i) === d.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? p.NOT_APPLICABLE
      : J(i) && i.eventType === o.PLAY_END
        ? p.NOT_APPLICABLE
        : i.endReasonType;
}
const { CONTAINER_CHANGED: rt, NOT_SPECIFIED: _e } = jt;
function pa(i, e, t) {
  if (T(i) !== o.PLAY_START) return;
  const r = i.container;
  return r === void 0 ? _e : e === !1 ? (t.isAlexa ? _e : rt) : e?.container?.id !== r.id ? rt : _e;
}
function ha(i, e, t) {
  return w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME ? void 0 : `${i.container?.name ?? yt.MUSICKIT}`;
}
function ya(i, e, t) {
  return t.client.guid;
}
function Le({ id: i, container: e }, t, a) {
  return Re.test(i) || e?.kind === "radioStation";
}
function fa(i, e, t) {
  if (!(J(i) || Le(i)) && le(i)) return i.id;
}
function Ne({ id: i, isLibrary: e }, t, a) {
  return e || z(i);
}
function Dt({ catalogId: i, container: e }, t, a) {
  return i ?? e?.catalogId;
}
function Ot(i, e, t) {
  return i.isLibrary && !!Dt(i);
}
function ma(i, e, t) {
  const { id: a } = i,
    r = a !== void 0 && a !== "";
  return J(i) && T(i) === o.PLAY_START && r && a !== "-1"
    ? a
    : Le(i) || le(i)
      ? i.cloudId
      : (Ot(i) && r) || Ne(i)
        ? a
        : i.cloudId;
}
function Ta(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY) return i.lyricDescriptor?.id;
}
function va(i, e, t) {
  return i.purchasedId;
}
function Pa(i, e, t) {
  if (t.client.allowReportingId === !0 && Ne(i)) return i.reportingId;
}
function ga(i, e, t) {
  if (J(i)) return;
  const { container: a, id: r } = i;
  if (Re.test(r) || a?.kind === "radioStation") return parseInt(`${r}`.replace(Re, "$1"), 10);
}
function Aa(i, e, t) {
  if (!(J(i) || Le(i) || le(i))) {
    if (Ot(i)) return Dt(i);
    if (!Ne(i)) return i.id;
  }
}
function _a(i, e, t) {
  if (w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = fa(i);
  r !== void 0 && (a["auc-adam-id"] = r);
  const s = ma(i);
  s !== void 0 && (a["cloud-id"] = s);
  const n = Ta(i);
  n !== void 0 && (a["lyric-id"] = n);
  const c = va(i);
  c !== void 0 && (a["purchased-adam-id"] = c);
  const f = Pa(i, e, t);
  f !== void 0 && (a["reporting-adam-id"] = f);
  const M = ga(i);
  M !== void 0 && (a["radio-adam-id"] = M);
  const E = Aa(i);
  if ((E !== void 0 && (a["subscription-adam-id"] = E), !ht(a))) return a;
}
function ba(i, e, t) {
  return t.client.internalBuild;
}
function Sa(i, e, t) {
  return i.container?.isCollaborative === !0 ? !0 : void 0;
}
function Ia(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY) return i.lyricDescriptor?.language;
}
function Ea({ streamingKind: i }, e, t) {
  return i === Jt.EPISODE;
}
function ka(i, e, t) {
  return w(i) === d.STREAM;
}
function Ct(i, e, t) {
  return ka(i) && !Ea(i);
}
function wa(i, e, t) {
  const a = T(i);
  if (a === o.LYRIC_DISPLAY || Ct(i)) return 0;
  const r = Math.round(1e3 * i.duration);
  if (a === o.PLAY_START) return r;
  const s = i.startPositionInMilliseconds ?? Math.round(1e3 * (i.position ?? 0)),
    n = i.duration * 1e3;
  return s > n ? s : r;
}
const { AUDIO: st, VIDEO: Ra } = ft;
function Ma(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY) return st;
  const { kind: a, mediaType: r } = i;
  if (typeof r == "number") return r;
  const s = typeof r == "string" ? r : a;
  return s && /video|movie/i.test(s) ? Ra : st;
}
function Da(i, e, t) {
  return t.client.metricsClientId;
}
function Oa(i, e, t) {
  return !1;
}
function Ca(i, e, t) {
  return Xt();
}
function La(i, e, t) {
  if (T(i) === o.LYRIC_DISPLAY || w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME)
    return { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 };
  const a = O(i.playMode);
  if (a !== void 0)
    return {
      "auto-play-mode": a.autoplayMode ?? 0,
      "repeat-play-mode": a.repeatPlayMode ?? 0,
      "shuffle-play-mode": a.shufflePlayMode ?? 0,
    };
}
function Na(i, e, t) {
  return t.client.privateEnabled;
}
function Ua(i, e, t) {
  if (T(i) !== o.LYRIC_DISPLAY && w(i) !== d.AGGREGATE_NON_CATALOG_PLAY_TIME) return i.recoData;
}
function Ya(i, e, t) {
  return t.client.userIsSubscribed;
}
function xa(i, e, t) {
  return t.client.siriInitiated;
}
function Fa(i, e, t) {
  return t.client.sourceType;
}
function $a(i, e, t) {
  const a = T(i);
  return a === o.LYRIC_DISPLAY || w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME || Ct(i)
    ? 0
    : a === o.PLAY_START
      ? Rt(i)
      : (i.startPositionInMilliseconds ?? Ba(e) ?? 0);
}
const Ba = (i) => (i && i.position !== void 0 ? Math.round(1e3 * i.position) : 0);
function Qa(i, e, t) {
  return t.client.storefrontId;
}
function Va(i, e, t) {
  const a = i.timedMetadata;
  if (a === void 0) return;
  const r = T(i);
  if (Mt(i, e) !== p.SCRUB_END && r === o.PLAY_END) return At(a, 0);
}
function Ga(i, e, t) {
  return i.timestamp ?? Date.now();
}
function za(i, e, t) {
  return t.client.userAgent;
}
function Ka(i, e, t) {
  if (ue(i)) return i.userPreference?.audioQuality;
}
function qa(i, e, t) {
  if (ue(i)) return i.userPreference?.playbackFormat;
}
function Ha(i, e, t) {
  if (!t.client.preferDSID) return t.client.musicUserToken;
}
function Wa(i, e, t) {
  return w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME ? 0 : t.client.utcOffsetInSeconds;
}
const ja = {
  "audio-quality-provided": zi,
  "audio-quality-targeted": Ki,
  "bundle-id": qi,
  "build-version": Hi,
  "container-ids": sa,
  "container-type": Y,
  "developer-token": na,
  "device-name": oa,
  "display-translation": ca,
  "display-transliteration": ua,
  "display-type": la,
  "end-position-in-milliseconds": da,
  "end-reason-type": Mt,
  "event-reason-hint-type": pa,
  "event-type": T,
  "feature-name": ha,
  guid: ya,
  ids: _a,
  "internal-build": ba,
  "is-collaborative": Sa,
  "lyric-language": Ia,
  "media-duration-in-milliseconds": wa,
  "media-type": Ma,
  "metrics-client-id": Da,
  offline: Oa,
  "persistent-id": Ca,
  "play-mode": La,
  "private-enabled": Na,
  "reco-data": Ua,
  "sb-enabled": Ya,
  "siri-initiated": xa,
  "source-type": Fa,
  "start-position-in-milliseconds": $a,
  "store-front": Qa,
  "timed-metadata": Va,
  timestamp: Ga,
  type: w,
  "user-agent": za,
  "user-preference-audio-quality": Ka,
  "user-preference-playback-format": qa,
  "user-token": Ha,
  "utc-offset-in-seconds": Wa,
};
let Ja = 0;
const Xa = (i = {}, e) => ({ id: (Ja++).toFixed(0), client: e, isAlexa: !1, ...i }),
  Za = (i, ...e) => ({ ...i, ...Object.assign({}, ...e) }),
  Lt = (i, e, t, a = !1) => {
    const r = Za(typeof a == "boolean" ? Xa({ isAlexa: a }, i) : { ...a, client: i }),
      s = oe(e),
      n = t && oe(t),
      c = Object.create(null);
    for (const [f, M] of Object.entries(ja)) {
      const E = M(s, n, r);
      E !== void 0 && (c[f] = E);
    }
    return c;
  },
  er = (i, e, t) => {
    if (e === void 0) throw new Error("called without a play activity descriptor");
    const a = { ...e, eventType: o.LYRIC_DISPLAY };
    return Gi(
      {
        ...Lt(i, a, t, !1),
        "media-duration-in-milliseconds": 0,
        "media-type": ft.AUDIO,
        "start-position-in-milliseconds": 0,
        "play-mode": { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 },
      },
      (r) => we(r, ["character-display-count", "event-reason-hint-type", "reco-data"]),
    );
  },
  tr = () =>
    St({
      id: "lpaf",
      initial: "idle",
      context: { initialShowTime: -1, duration: -1 },
      states: {
        idle: {
          entry: G((i) => ({ ...i, initialShowTime: void 0, duration: je() - i.initialShowTime })),
          on: { play: "playing" },
        },
        playing: { entry: G((i) => ({ ...i, initialShowTime: je() })), on: { stop: "idle" } },
      },
    });
class ir extends wt {
  _machine;
  startDescriptor;
  get state() {
    return this._machine.state.value;
  }
  constructor(e, t, a, r) {
    (super(e, t, a, r), (this._machine = It(tr()).start()));
  }
  async play(e) {
    if (this.state === "playing") throw Error("lyrics are already being displayed. Did you forget to stop them?");
    if (e === void 0) throw Error("Missing descriptor for lyrics play");
    (k.info(`Staring tracking: lyricsId=${e.lyricDescriptor?.id}, itemId=${e.id}, catalogId=${e.catalogId}`),
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
    (k.info(`Updating descriptor: lyricsId=${this.startDescriptor.lyricDescriptor?.id}`),
      (this.startDescriptor = {
        ...this.startDescriptor,
        lyricDescriptor: { ...this.startDescriptor.lyricDescriptor, ...e },
      }));
  }
  async stop() {
    if (this.state !== "playing") throw Error("lyrics are not being displayed. Did you forget to display them?");
    if (this.startDescriptor === void 0) throw Error("Missing start descriptor for lyrics stop");
    (k.info(
      `Stopping tracking: lyricsId=${this.startDescriptor.lyricDescriptor?.id}, itemId=${this.startDescriptor.id}, catalogId=${this.startDescriptor.catalogId}`,
    ),
      this._machine.send({ type: "stop" }));
    const e = this._machine.state.context.duration,
      t = JSON.parse(JSON.stringify(this.startDescriptor));
    ((t.lyricDescriptor = { ...t.lyricDescriptor, duration: Math.round(e) }),
      k.debug("Clearing tracked descriptor"),
      (this.startDescriptor = void 0));
    const a = this.build(t, !1);
    try {
      (k.debug("Sending PAF request with data payload"), await this.send(a), k.debug("Done sending PAF request"));
    } catch (r) {
      (console.error(`Error sending Lyrics PAF request: ${r.message}`),
        k.error(`Error sending Lyrics PAF request: ${r.message}`));
    }
  }
  async exit() {}
  build(e, t) {
    return er(this, e, t);
  }
}
const ar = (i = {}) => ({
    get(e) {
      if (!(typeof e > "u")) return i[e];
    },
    set(e, t) {
      i[e] = t;
    },
  }),
  rr = () => ({ get: Zt, set: ei }),
  sr = (i) => {
    switch ((typeof i > "u" && (i = "browser"), i)) {
      case "browser":
        return rr();
      case "memory":
        return ar();
      default:
        return i;
    }
  },
  Nt = (i, e) => Yt(i, e, [], "/", 0),
  Ut = (i, e) => {
    const t = i.get(e);
    if (t === void 0 || t === "") return [];
    const a = JSON.parse(atob(t));
    return Oe(a);
  },
  Yt = (i, e, t, a, r, s) => i.set(e, btoa(JSON.stringify(t)), a, r, s),
  nr = (i, e, t, a, r, s) => Yt(i, e, [...Ut(i, e), t], a, r, s),
  { AUTO: nt } = pt;
class or {
  constructor(e, t) {
    ((this.sender = e), (this.jar = t));
  }
  mode = nt;
  async flush() {
    const e = Ut(this.jar, ne);
    if (!(e === void 0 || e.length === 0))
      try {
        (await this.sender.send(e), Nt(this.jar, ne));
      } catch (t) {
        throw new Error(`flush: ${t.message}`);
      }
  }
  async send(e) {
    if (this.mode === nt && (Array.isArray(e) || e["end-reason-type"] !== p.EXITED_APPLICATION))
      return this.sender.send(e);
    nr(this.jar, ne, e, "/");
  }
}
const cr = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "object":
        return !i.message || typeof i.message != "string" ? "" : i.message;
      default:
        return "";
    }
  },
  ur = (i) => cr(i).includes(Et),
  re = (i) => ({ type: i });
function lr(i) {
  return i.eventType === o.PLAY_START;
}
function dr(i) {
  if (i.eventType !== o.PLAY_END) return !1;
  if (i.endReasonType === void 0) throw new Error("PLAY_END activity descriptor requires an endReasonType value");
  return !0;
}
function pr(i) {
  if (i.itemType === d.TIMED_METADATA_PING) return !1;
  if (lr(i)) return re("play");
  if (dr(i)) {
    const e = i.endReasonType;
    if (e === p.SCRUB_BEGIN) return re("scrubBegin");
    if (e === p.SCRUB_END) return re("scrubEnd");
    if (e === p.EXITED_APPLICATION) return !1;
  }
  return re("stop");
}
const hr = () =>
  St(
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
            scrubBegin: { target: "scrubbing", actions: G((i) => ({ ...i, stateBeforeScrub: "idle" })) },
            scrubEnd: { target: "error", actions: ["clearStateBeforeScrub", "setScrubEndError"] },
          },
        },
        playing: {
          on: {
            scrubBegin: { target: "scrubbing", actions: G((i) => ({ ...i, stateBeforeScrub: "playing" })) },
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
        clearStateBeforeScrub: G(({ stateBeforeScrub: i, ...e }) => e),
        setScrubEndError: G((i) => ({ ...i, errorMessage: Ci })),
      },
    },
  );
class yr {
  machine;
  machineService;
  constructor() {
    ((this.machine = hr()), (this.machineService = It(this.machine).start()));
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
    const a = pr(e);
    if (a === !1) return this.currentStateName;
    if ((this.machineService.send(a), this.matches("error")))
      throw new Error(this.machineService.state.context.errorMessage);
    return this.currentStateName;
  }
}
const fr = ({ id: i, reporting: e = !0, eventType: t }) => (i === "-1" || !e) && t === o.PLAY_END;
class mr extends wt {
  constructor(e, t, a, r) {
    super(e, t, a, r);
  }
  build(e, t) {
    return Lt(this, e, t, this.clientId !== "JSCLIENT");
  }
}
class Tr {
  sender;
  timeline = [];
  _cookieJar;
  _paf;
  _machine;
  timedMetadata;
  constructor(e, t, a, r) {
    ((this._paf = new mr(e, t, a, r)),
      (this._cookieJar = sr(r?.cookieJar)),
      (this.sender = new or(this._paf.sender, this._cookieJar)),
      (this._machine = new yr()));
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
        if (!ur(a)) throw a;
      }
    const t = this.timeline[this.timeline.length - 1];
    if (t && t.endReasonType === p.EXITED_APPLICATION) return this.timeline.pop();
    this.clearTimedMetadata();
  }
  async exit(e = 0) {
    await this.stop(e, p.EXITED_APPLICATION);
  }
  async pause(e = 0) {
    await this.stop(e, p.PLAYBACK_MANUALLY_PAUSED);
  }
  async pingTimedMetadata(e, t, a = this.previousDescriptor) {
    await this._addToTimeline({ ...a, position: e, itemType: d.TIMED_METADATA_PING, timedMetadata: t });
  }
  async play(e, t = 0) {
    const a = this.timeline.length > 0;
    if (e === void 0) {
      if (!a) return;
      const r = this.previousDescriptor;
      (r.eventType === o.PLAY_END && delete r.endReasonType,
        await this._addToTimeline({ ...this.sanitizePreviousDescriptor(r), eventType: o.PLAY_START }));
      return;
    }
    if (a) {
      const r = this.previousDescriptor;
      if (this._machine.matches("playing") && !fr(r)) return Promise.reject(new Error(Li));
    }
    await this._addToTimeline({ ...e, eventType: o.PLAY_START, position: t });
  }
  async scrub(e = 0, t = p.SCRUB_BEGIN) {
    await this._addToTimeline({
      ...this.sanitizePreviousDescriptor(this.previousDescriptor),
      eventType: o.PLAY_END,
      endReasonType: t,
      position: e,
    });
  }
  async skip(e, t = p.TRACK_SKIPPED_FORWARDS, a = 0) {
    (await this.stop(a, t), await this.play(e));
  }
  async stop(e = 0, t = p.NATURAL_END_OF_TRACK) {
    let a = this.previousDescriptor;
    if (
      (a.endReasonType === p.EXITED_APPLICATION &&
        (this.timeline.pop(), Nt(this._cookieJar, ne), (a = this.previousDescriptor)),
      this._machine.matches("playing"))
    ) {
      const r = {
        ...this.sanitizePreviousDescriptor(a),
        eventType: o.PLAY_END,
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
        k.warn(
          "You are calling build() from a stateful PAF client. Please, use a stateless client or exit(), pause(), play(), scrub(), skip() or stop() instead.",
        ),
      e === void 0)
    ) {
      if (this.timeline.length === 0) throw new Error("build() called without a play activity descriptor");
      e = this.timeline[this.timeline.length - 1];
    }
    if (t === void 0) {
      const a = this.timeline.indexOf(e);
      if (((t = a > 0 ? this.timeline[a - 1] : void 0), t === void 0 && e.eventType === o.PLAY_END))
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
    return oe({ ...e, container: a, duration: r, eventType: t, itemType: n, ...s });
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
    if (e === void 0) throw new Error(Oi);
    return we(e, ["timestamp"]);
  }
  buildForPlayParams(e, t, a, r = 0, s = {}, n = !1) {
    return (
      k.warn(
        "You are using buildsForPlayParams from a stateful PlayActivity. Please, use StatelessPlayActivity instead",
      ),
      this._paf.buildForPlayParams(e, t, a, r, s, n)
    );
  }
  send(e, t) {
    e = Oe(e);
    const a = oe(t);
    return (e.forEach((r) => this._machine.transition(a, r)), this.sender.send(e));
  }
  sanitizePreviousDescriptor(e) {
    let t = ti(e);
    return (t.itemType === d.TIMED_METADATA_PING && (t = we(t, ["itemType"])), t);
  }
}
class vr extends HTMLElement {
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
const be = "mk-void-media-element",
  Pr = Date.parse("January 01, 2001 0:00:00 GMT");
class gr extends ii {
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
    (super(e), customElements.get(be) !== void 0 || customElements.define(be, vr));
  }
  startTimerProgress() {
    this.timerId ||
      (this.timerId = setInterval(() => {
        const e = this._nowPlayingItem?.attributes.elapsedTimeTimestamp,
          t = this._nowPlayingItem?.attributes.elapsedTime,
          a = e * 1e3 + Pr,
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
      e && (e.state = ai.playing),
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
    const e = document.createElement(be);
    ((e.id = "apple-music-player"),
      (this.element = e),
      document.body.appendChild(e),
      mt.debug("initializedMediaElement", e));
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
function xt(i) {
  return { hours: Math.floor(i / 3600), minutes: Math.floor((i % 3600) / 60) };
}
function es(i) {
  return xt(i / 1e3);
}
function ts(i, e = ":") {
  const { hours: t, minutes: a } = xt(i);
  i = Math.floor((i % 3600) % 60);
  const r = [];
  return (
    t ? (r.push(`${t}`), r.push(a < 10 ? `0${a}` : `${a}`)) : r.push(`${a}`),
    r.push(i < 10 ? `0${i}` : `${i}`),
    r.join(e)
  );
}
const m = j.createChild("mpaf"),
  Se = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "undefined":
        return "undefined";
      default:
        return `PlayActivityEndReasonType.${p[i]}`;
    }
  },
  ot = new Map([
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
    return Array.from(ot.keys());
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
      (this._activityTracker = _r(e.instance, { runtime: e.services.runtime, request: e.services.request })));
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = ot.get(e);
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
    const a = ct(l.playbackPlay, this.instance, e);
    (ze(e, "video") && (this.musicLiveVideoStartTime = Date.now()),
      m.debug("PAF debug", `client.play(${JSON.stringify(a)}, ${t.position})`),
      this.activityTracker.play(a, t.position),
      this.reportTimedMetadata.add(e.id));
  }
  async scrub(e, t = {}) {
    (m.debug("PAF debug", `client.scrub(${t.position}, ${Se(t.endReasonType)})`),
      this.activityTracker.scrub(t.position, t.endReasonType),
      e !== void 0 && t.endReasonType === p.SCRUB_END && this.reportTimedMetadata.delete(e.id));
  }
  async seek(e, t = {}) {
    (await this.scrub(e, { position: t.startPosition, endReasonType: p.SCRUB_BEGIN }),
      await this.scrub(e, { position: t.position, endReasonType: p.SCRUB_END }));
  }
  async skip(e, t = {}) {
    const a = ct(l.playbackSkip, this.instance, e);
    m.debug("PAF debug", `client.skip(${JSON.stringify(a)}, ${Se(t.direction)}, ${t.position})`);
    try {
      (await this.activityTracker.skip(a, t.direction, t.position), this.reportTimedMetadata.add(e.id));
    } catch (r) {
      if (r.message === Ni) await this.play(e, t);
      else return Promise.reject(r);
    }
  }
  async stop(e, t = {}) {
    (ze(e, "video")
      ? ((t.position = (Date.now() - this.musicLiveVideoStartTime) / 1e3), (this.musicLiveVideoStartTime = 0))
      : e?.isLiveRadioStation && t.position && (t.position = t.position - (t.startPosition || 0)),
      e?.isLiveRadioStation && (t.endReasonType = t.endReasonType ?? p.PLAYBACK_MANUALLY_PAUSED),
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
      (a === void 0 && r !== void 0) || ri(a, r)
        ? m.debug(`Skipping TimedMetadata report at ${t.position}: unchanged`, se(a))
        : (m.debug(`Reporting current TimedMetadata at ${t.position}`, se(r)),
          this.activityTracker.pingTimedMetadata(t.position, r));
    else {
      m.debug(`Skipping TimedMetadata report at ${t.position}: disabled for ${e.id} (${e.info})`, se(a));
      const s = this.activityTracker.timeline.at(-1);
      s !== void 0 &&
        (s.eventType === o.PLAY_START || s.endReasonType === p.SCRUB_END) &&
        this.reportTimedMetadata.add(e.id);
    }
    (m.debug(`Storing new TimedMetadata at ${t.position}`, se(a)), (this.activityTracker.timedMetadata = a));
  }
  shouldTrackPlayActivity(e, t) {
    const a = si(),
      r = !t || t.playbackType !== Ce.preview,
      s = this.alwaysSendForActivityType(e),
      n = !t || (t && this.mediaRequiresPlayActivity(t));
    return !!(a && r && (s || n));
  }
  alwaysSendForActivityType(e) {
    return e === l.playerActivate || e === l.playerExit;
  }
  mediaRequiresPlayActivity(e) {
    return ni(e) || ["musicMovie", "musicVideo", "song", "radioStation"].indexOf(e.type) !== -1;
  }
}
function ct(i, e, t) {
  const a = { ...Sr(i, t, e), ...Ir(i, t), ...Er(i, t), ...kr(i, t), ...Mr(i, t) };
  return (m.trace("PAF descriptor", a), a);
}
const Ar = Tt.register("mk-use-paf-qa-endpoint");
function _r(i, e) {
  return new Tr(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: B.app.build, name: B.app.name ?? "", version: B.app.version, bundleId: B.app?.bundleId },
    fetch: e.request.fetch,
    isQA: Ar.enabled,
    logInfo: m.enabled,
    sourceType: i.sourceType,
    guid: i.guid,
    userIsSubscribed: () => !!(i.isAuthorized && $.storekit._getIsActiveSubscription.getCachedValue()),
  });
}
function br(i) {
  return (
    i.hasAutoplayStation &&
    i.items.some((e) => {
      const { id: t, type: a, container: r } = e;
      if (r && r.type === "stations" && r.name === yt.RADIO) return !1;
      let s = a;
      return (z(t) && (s = s.startsWith("library-") ? s : "library-" + s), oi(ci(s)));
    })
  );
}
function Sr(i, e, t) {
  if (t?.playbackActions === void 0 || e === void 0) return {};
  const a = { [H.all]: ie.REPEAT_ALL, [H.none]: ie.REPEAT_OFF, [H.one]: ie.REPEAT_ONE },
    r = { [W.off]: ve.SHUFFLE_OFF, [W.songs]: ve.SHUFFLE_ON };
  return {
    playMode() {
      let s = ie.REPEAT_UNKNOWN,
        n = ve.SHUFFLE_UNKNOWN,
        c = ae.AUTO_UNKNOWN;
      const { playbackActions: f } = t;
      return (
        f &&
          (f.includes(Pe.REPEAT) && (s = a[t.repeatMode]),
          f.includes(Pe.SHUFFLE) && (n = r[t.shuffleMode]),
          f.includes(Pe.AUTOPLAY) &&
            (t.autoplayEnabled && t.queue !== void 0
              ? (c = br(t.queue) ? ae.AUTO_ON : ae.AUTO_ON_CONTENT_UNSUPPORTED)
              : (c = ae.AUTO_OFF))),
        { repeatPlayMode: s, shufflePlayMode: n, autoplayMode: c }
      );
    },
  };
}
const de = (i) => [l.playbackPlay, l.playbackSkip].includes(i),
  Ft = (i, e) => e !== void 0 && de(i);
function Ir(i, e) {
  if (!de(i)) return {};
  if (e === void 0) return {};
  const t = e.attributes?.mediaKind;
  return { ...(t !== void 0 ? { mediaType: t } : {}), ...e.playParams };
}
function Er(i, e) {
  if (!de(i) || e === void 0) return {};
  const { context: t = {} } = e;
  return { recoData: t.reco_id };
}
function kr(i, e) {
  if (!de(i) || e === void 0) return {};
  const t = e.playbackDuration;
  return t ? { duration: t / 1e3 } : {};
}
function wr(i, e) {
  return (Ft(i, e) && e?.container?.name) || null;
}
function Rr(i) {
  const e = { ...i };
  return (delete e.attributes, e);
}
function Mr(i, e) {
  const t = wr(i, e),
    a = Ft(i, e)
      ? {
          ...e?.container,
          ...e?.container?.attributes?.playParams,
          ...(e?.container?.attributes?.hasCollaboration && { isCollaborative: !0 }),
        }
      : null;
  if (!(t === null && a === null)) return { container: Rr({ ...a, ...(t !== null ? { name: t } : {}) }) };
}
function se(i, e = 12) {
  if ((i instanceof Uint8Array && (i = At(i)), typeof i == "string")) {
    const t = Math.floor(e / 2);
    return i.length > e ? i.slice(0, t) + "..." + i.slice(-t) : i;
  }
  return "0x0000";
}
const Me = j.createChild("lyrics"),
  ut = new Map([
    [l.lyricsPlay, "lyricsPlay"],
    [l.lyricsStop, "lyricsStop"],
    [l.lyricsUpdate, "lyricsUpdate"],
    [l.playerExit, "exit"],
  ]);
class Dr {
  get requestedEvents() {
    return Array.from(ut.keys());
  }
  instance;
  services;
  _activityTracker;
  get activityTracker() {
    if (this.instance === void 0 || this.services === void 0)
      throw new P(P.Reason.CONFIGURATION_ERROR, "Lyrics Play Activity service was called before configuration.");
    return (
      this._activityTracker === void 0 &&
        (this._activityTracker = Cr(this.instance, { runtime: this.services.runtime, request: this.services.request })),
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
    const r = ut.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async lyricsPlay(e, t) {
    const a = t?.lyrics;
    if (a === void 0)
      throw new P(P.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsPlay");
    if (e === void 0) throw new P(P.Reason.MEDIA_DESCRIPTOR, "Cannot display lyrics without a MediaItem");
    this.activityTracker.play(Lr(l.lyricsPlay, e, a));
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
const Or = Tt.register("mk-use-paf-qa-endpoint");
function Cr(i, e) {
  return new ir(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: B.app.build, name: B.app.name ?? "", version: B.app.version },
    fetch: e.request.fetch,
    logInfo: Me.level <= ui.INFO,
    sourceType: i.sourceType,
    isQA: Or.enabled,
    userIsSubscribed: () => i.isAuthorized && $.storekit._getIsActiveSubscription.getCachedValue(),
  });
}
function Lr(i, e, t) {
  return {
    id: e.id,
    duration: 0,
    eventType: o.LYRIC_DISPLAY,
    container: { ...e.container, ...e.container?.attributes?.playParams },
    ...e.playParams,
    lyricDescriptor: { id: t.id ?? e.id, displayType: t.displayType, language: t.language },
    recoData: e.attributes?.reco_id,
  };
}
class $t extends li {
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
    if ((_.debug("instance.setStationQueue()", e), this.assertUserStorefront(), !this._isPlaybackSupported())) {
      _.warn("Playback is not supported");
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
    if ((_.debug("instance.setQueue()", e), this.assertUserStorefront(), !this._isPlaybackSupported())) {
      _.warn("Playback is not supported");
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
      e.autoplay !== void 0 && di("autoplay", { message: "autoplay has been deprecated, use startPlaying instead" }),
      (e.startPlaying ?? e.autoplay) === !0 && (await this.play()),
      r
    );
  }
  assertUserStorefront() {
    const e = $.storekit.storefrontCountryCode,
      t = $.storefrontId,
      a = e !== void 0 && e !== t;
    if (this.realm === vt.MUSIC && !this.previewOnly && a === !0) throw new P(P.Reason.CONTENT_EQUIVALENT);
  }
  async playNext(e, t) {
    if (!this._isPlaybackSupported()) {
      _.warn("Playback is not supported");
      return;
    }
    return (
      this.deferPlayback(),
      this.getPlaybackController().prependToQueue(await this.loadItems(e), { clear: e?.clear ?? t ?? !1 })
    );
  }
  async playLater(e) {
    if (!this._isPlaybackSupported()) {
      _.warn("Playback is not supported");
      return;
    }
    return (this.deferPlayback(), this.getPlaybackController().appendToQueue(await this.loadItems(e)));
  }
  async playAt(e, t) {
    if (!this._isPlaybackSupported()) {
      _.warn("Playback is not supported");
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
    return this.services.itemLoader.loadItems({ ...e, restricted: $.storekit?.restrictedEnabled ?? !1 });
  }
}
var Nr = Object.defineProperty,
  Ur = Object.getOwnPropertyDescriptor,
  Yr = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? Ur(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && Nr(e, t, r), r);
  };
class Bt {
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
    shuffleMode: W.off,
    repeatMode: H.none,
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
        this.dispatcher.publish(Pt.capabilitiesChanged),
      (this.mediaState = { ...this.mediaState, ...r }),
      this.dispatcher.publish(I.mediaStateUpdate, this.mediaState));
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
      case D.AUTOPLAY:
        return t.autoPlayControl;
      case D.REPEAT:
        return t.repeatControl;
      case D.SHUFFLE:
        return t.shuffleControl;
      case D.VOLUME:
        return t.volumeControl;
      case D.SEEK:
      case D.EDIT_QUEUE:
      case D.PAUSE:
      case D.SKIP_NEXT:
      case D.SKIP_PREVIOUS:
      case D.SKIP_TO_ITEM:
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
Yr([K()], Bt.prototype, "checkCapability", 1);
const x = (i) => (e, t, a) => {
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
var xr = Object.defineProperty,
  Fr = Object.getOwnPropertyDescriptor,
  C = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? Fr(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && xr(e, t, r), r);
  };
class R extends $t {
  _sharePlay;
  _shuffleMode = W.off;
  _voidPlayer;
  _previousPlaybackState = {
    playbackMode: ge.MIXED_CONTENT,
    volume: 1,
    autoplayEnabled: !1,
    repeatMode: H.none,
    shuffleMode: W.off,
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
    const t = new Bt(e, this.services.dispatcher);
    return (
      this.services.dispatcher.subscribe(I.mediaStateUpdate, this.onMediaStateUpdate),
      (this._voidPlayer = new gr(
        pi({
          context: {},
          tokens: {},
          services: { ...this.services, store: $ },
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
      this.services.dispatcher.unsubscribe(I.mediaStateUpdate, this.onMediaStateUpdate),
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
      this.services.dispatcher.publish(Pt.shuffleModeDidChange, e),
      this.sharePlay?.shouldUpdate("shuffleMode", e) && this.services.dispatcher.publish(I.shuffleModeChanged, e));
  }
  get repeatMode() {
    return super.repeatMode;
  }
  set repeatMode(e) {
    ((super.repeatMode = e),
      this.sharePlay?.shouldUpdate("repeatMode", this.repeatMode) &&
        this.services.dispatcher.publish(I.repeatModeChanged, { repeatMode: this.repeatMode }));
  }
  get autoplayEnabled() {
    return super.autoplayEnabled;
  }
  set autoplayEnabled(e) {
    if (!this.capabilities.canAutoplay) {
      _.warn("Setting autoplay is not supported in this playback method");
      return;
    }
    ((super.autoplayEnabled = e),
      this.sharePlay?.shouldUpdate("autoPlay", this.autoplayEnabled) &&
        this.services.dispatcher.publish(I.autoPlayChanged, { autoPlay: this.autoplayEnabled }));
  }
  get volume() {
    return super.volume;
  }
  set volume(e) {
    if (!this.capabilities.canSetVolume) {
      _.warn("Setting volume is not supported in this playback method");
      return;
    }
    ((super.volume = e),
      this.sharePlay?.shouldUpdate("volume", this.volume) &&
        this.services.dispatcher.publish(I.volumeChanged, { playbackState: this.volume }));
  }
  async play() {
    (await super.play(),
      this.sharePlay?.shouldUpdate("playbackState", this.playbackState) &&
        this.services.dispatcher.publish(I.playbackStateChanged, { playbackState: this.playbackState }),
      this._voidPlayer?.startTimerProgress());
  }
  async pause(e) {
    (await super.pause(e),
      this.sharePlay?.shouldUpdate("playbackState", this.playbackState) &&
        this.services.dispatcher.publish(I.playbackStateChanged, { playbackState: this.playbackState }),
      this._voidPlayer?.stopTimerProgress());
  }
  async seekToTime(e, t = hi.Manual) {
    (await super.seekToTime(e, t),
      this.sharePlay?.lastKnownElapsedTime !== this.currentPlaybackTime &&
        this.services.dispatcher.publish(I.progressChanged, { elapsedTime: this.currentPlaybackTime }));
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
    const a = e.map((s) => new yi(s)),
      r = a[t];
    (r && (r.playbackType = Ce.encryptedFull),
      this._voidPlayer && (this._voidPlayer.nowPlayingItem = r),
      this.queue.updateItems(a),
      (this.queue.position = t));
  }
  async onMediaStateUpdate(
    e,
    { autoPlay: t, currentPlayingIndex: a, queue: r, playbackState: s, shuffleMode: n, repeatMode: c, volume: f },
  ) {
    (this.updateQueue(r, a || 0),
      s === U.paused ? await this.pause() : s === U.playing && (await this.play()),
      (this.autoplayEnabled = t),
      (this.repeatMode = c),
      (this.shuffleMode = n),
      (this.volume = f),
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
C([x(I.nextItem)], R.prototype, "skipToNextItem", 1);
C([x(I.previousItem)], R.prototype, "skipToPreviousItem", 1);
C([x()], R.prototype, "playMediaItem", 1);
C([x()], R.prototype, "setStationQueue", 1);
C([x()], R.prototype, "setQueue", 1);
C([x()], R.prototype, "assertUserStorefront", 1);
C([x()], R.prototype, "playNext", 1);
C([x()], R.prototype, "playLater", 1);
C([x()], R.prototype, "playAt", 1);
C([K()], R.prototype, "onMediaStateUpdate", 1);
var De = ((i) => ((i.MANUAL = "manual"), (i.AUTOMATIC = "automatic"), (i.UNKNOWN = "unknown"), i))(De || {}),
  F = ((i) => ((i.buffering = "buffering"), (i.idle = "idle"), (i.paused = "paused"), (i.playing = "playing"), i))(
    F || {},
  ),
  g = ((i) => (
    (i.bufferStart = "BUFFER_START"),
    (i.bufferStop = "BUFFER_STOP"),
    (i.exit = "EXIT"),
    (i.play = "PLAY"),
    (i.pause = "PAUSE"),
    (i.stop = "STOP"),
    (i.newItem = "NEW"),
    i
  ))(g || {});
const Qt = "~~previous~~",
  Ie = {
    initial: "idle",
    states: {
      idle: {
        on: {
          PLAY: {
            target: "playing",
            context: { reason: y.PLAY_START_REASON.PLAY, manual: "manual", fromInitialPlay: !0 },
          },
          NEW: { target: "playing", context: { reason: y.PLAY_START_REASON.PLAY } },
          EXIT: { target: "idle", context: { reason: y.PLAY_STOP_REASON.COMPLETE, manual: "automatic" } },
        },
      },
      playing: {
        on: {
          BUFFER_START: {
            target: "buffering",
            context: { reason: y.PLAY_STOP_REASON.BUFFERING, manual: "automatic", fromInitialPlay: Qt },
          },
          EXIT: { target: "idle", context: { reason: y.PLAY_STOP_REASON.EXIT } },
          PAUSE: { target: "paused", context: { reason: y.PLAY_STOP_REASON.PAUSE } },
          STOP: { target: "idle", context: { reason: y.PLAY_STOP_REASON.PLAY_OTHER, manual: "automatic" } },
          NEW: { target: "playing", context: { reason: y.PLAY_STOP_REASON.PLAY_OTHER } },
        },
      },
      paused: {
        on: {
          PLAY: { target: "playing", context: { reason: y.PLAY_START_REASON.UNPAUSE, manual: "manual" } },
          NEW: { target: "idle", context: { reason: y.PLAY_STOP_REASON.PLAY_OTHER, manual: "manual" } },
          EXIT: { target: "idle", context: { reason: y.PLAY_STOP_REASON.EXIT } },
        },
      },
      buffering: {
        on: {
          BUFFER_STOP: { target: "playing", context: { reason: y.PLAY_START_REASON.BUFFERING, manual: "automatic" } },
          EXIT: { target: "idle", context: { reason: y.PLAY_STOP_REASON.EXIT } },
        },
      },
    },
  },
  Ee = { manual: "unknown", reason: y.PLAY_STOP_REASON.UNKNOWN, fromInitialPlay: !1 };
class $r {
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
    j.debug(`[mk/activity/PodPaf] Transitioning from ${this.currentState} to ${a.target} because of ${e} event`);
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
        e[a] === Qt && (t[a] = this.currentContext[a]);
      }),
      t
    );
  }
}
const lt = "xp_amp_podcasts_paf",
  Br = "com.apple.podcasts",
  Qr = "web-podcasts-player",
  Vr = "daf.xp.apple.com",
  Gr = "1.0",
  zr = { [l.playbackPause]: g.pause, [l.playbackPlay]: g.play, [l.playbackStop]: g.stop, [l.playerExit]: g.exit };
var Kr = Object.defineProperty,
  qr = Object.getOwnPropertyDescriptor,
  pe = (i, e, t, a) => {
    for (var r = a > 1 ? void 0 : a ? qr(e, t) : e, s = i.length - 1, n; s >= 0; s--)
      (n = i[s]) && (r = (a ? n(e, t, r) : n(r)) || r);
    return (a && r && Kr(e, t, r), r);
  };
const u = j.createChild("podpaf"),
  A = "PodPAF";
class X {
  currentItem;
  dispatcher;
  mkInstance;
  services;
  tracker;
  playActivityProcessor;
  synchronizeTimeout;
  state;
  constructor() {
    this.state = new $r();
  }
  async configure(e) {
    ((this.mkInstance = e.instance), (this.services = e.services), (this.dispatcher = e.services.dispatcher));
    const t = {
        config: { configHostname: () => Vr },
        environment: {
          app() {
            return Br;
          },
          appVersion() {
            return Gr;
          },
          delegateApp() {
            return Qr;
          },
          isOffline() {
            return !1;
          },
          storeFrontCountryCode() {
            return $.storefrontCountryCode;
          },
        },
      },
      a = new fi(lt, t);
    ((this.playActivityProcessor = new mi(a)), await this.playActivityProcessor.init(), this.setupListeners());
  }
  get requestedEvents() {
    return Array.from(Ke.keys());
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
      (this.state.lastTrackedEvent?.eventType === h.PLAY_STARTED &&
        (S(this.tracker, A),
        u.debug("PodPAF: current item naturally ends"),
        await this.trackEvent(
          h.PLAY_STOPPED,
          this.mkInstance?.currentPlaybackDuration ?? 0,
          this.tracker.TYPE.AUTOMATIC,
          this.tracker.PLAY_STOP_REASON.COMPLETE,
        )),
        u.debug("PodPAF.handleNowPlayingItemDidChange: calling exit and clearing currentItem"),
        this.state.transition(g.exit),
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
      c = `PlaybackStates.${U[t.state]}`;
    (u.debug(`PodPAF.onPlaybackStateChange: ${n} -> ${c}`, s),
      a === U.waiting
        ? (u.debug("PodPAFTracker.onPlaybackStateChange: triggering bufferStart()", s), await this.bufferStart(r, s))
        : a === U.playing
          ? t.oldState === U.waiting &&
            (u.debug("PodPAFTracker.onPlaybackStateChange: triggering bufferEnd()", s), await this.bufferEnd(r, s))
          : a !== U.stalled && u.debug("PodPAFTracker.onPlaybackStateChange: resetting isBuffering=false"));
  }
  handleTargetWirelessChange() {
    this.mkInstance !== void 0 && this.tracker?.updateData(qe(this.mkInstance));
  }
  shouldTrackPlayActivity(e, t) {
    if (!t || !t.podpafMetrics || t.playbackType === Ce.preview) return !1;
    const a = zr[e];
    return a !== void 0 ? this.state.isAllowedTransition(a) : !0;
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = Ke.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async canTrackItem(e, t = {}) {
    if (e === void 0) return !1;
    if (this.currentItem?.id !== e.id) {
      const { manual: a, reason: r } = this.getContextForNewItem(t);
      (this.state.transition(g.newItem, { manual: a, reason: r, fromInitialPlay: !0 }),
        (this.currentItem = e),
        u.debug("PodPAF: Creating new tracker for new item"),
        await this.createTracker(e));
    }
    return this.tracker !== void 0;
  }
  async createTracker(e) {
    Ti(this.playActivityProcessor, A);
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
    (S(this.tracker, A),
      a === void 0 && (a = this.state.currentContext.manual),
      r === void 0 && (r = this.state.currentContext.reason));
    const s = { eventType: e, position: t, type: a, reason: r },
      n = this.getAdditionalPlaybackData(e, t),
      c = He(t);
    (u.debug(
      `PodPAFTracker.trackEvent(${e}, ${c}, ${a}, ${r}, play duration: ${n.playDuration}, play start position: ${n.playStartPosition})`,
    ),
      (this.state.lastTrackedEvent = s),
      await this.tracker[e].call(this.tracker, c, a, r, n),
      e === h.PLAY_STARTED && (this.state.lastPlayStartEvent = s));
  }
  async bufferStart(e, t) {
    if ((u.debug("PodPAFTracker: handling bufferStart()"), !(await this.canTrackItem(e)))) {
      u.debug("PodPAFTracker: aborting bufferStart, no tracker");
      return;
    }
    if ((S(this.tracker, A), this.state.currentState !== F.playing)) {
      u.debug("PodPafTracker: aborting bufferStart, not playing");
      return;
    }
    if (this.state.lastTrackedEvent?.reason === "seek") {
      u.debug("PodPAFTracker: aborting bufferStart, after a seek");
      return;
    }
    this.state.transition(g.bufferStart);
    const a = this.state.currentContext.fromInitialPlay,
      r = t.position ?? 0;
    a
      ? u.debug("PodPafTracker: bufferStart() not tracking PLAY_STOPPED, it is from initial play")
      : await this.trackEvent(h.PLAY_STOPPED, r, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_STOP_REASON.BUFFERING);
  }
  async bufferEnd(e, t) {
    if ((u.debug("PodPAFTracker: handling bufferEnd()"), !(await this.canTrackItem(e)))) return;
    if ((S(this.tracker, A), this.state.currentState !== F.buffering)) {
      u.debug("PodPafTracker: aborting bufferEnd, not buffering");
      return;
    }
    if (this.state.lastTrackedEvent?.reason === "seek") {
      u.debug("PodPAFTracker: aborting bufferEnd, after a seek");
      return;
    }
    this.state.transition(g.bufferStop);
    const a = this.state.currentContext.fromInitialPlay,
      r = t.position ?? 0;
    a
      ? u.debug("PodPafTracker: bufferEnd() not tracking PLAY_STARTED, it is from initial play")
      : await this.trackEvent(h.PLAY_STARTED, r, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.BUFFERING);
  }
  async scrub(e, t = {}) {
    u.debug("PodPAFTracker.scrub()");
  }
  async seek(e, t = {}) {
    (u.debug("PodPAFTracker.seek()"),
      !(e === void 0 || t.position === void 0 || t.startPosition === void 0) &&
        (vi(t) ? await this.trackSeek(e, t) : await this.trackScrub(e, t)));
  }
  async trackScrub(e, t) {
    const a = t.position,
      r = t.startPosition;
    (await this.trackScrubStart(e, r), await this.trackScrubStop(e, a));
  }
  async trackScrubStart(e, t) {
    (u.debug("PodPAFTracker.trackScrubStart()"),
      (await this.canTrackItem(e)) &&
        (S(this.tracker, A),
        this.state.currentState === F.playing &&
          (await this.trackEvent(h.PLAY_STOPPED, t, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_STOP_REASON.SEEK)),
        await this.trackEvent(h.SEEK_STARTED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.SCRUB)));
  }
  async trackScrubStop(e, t) {
    (u.debug("PodPAFTracker.trackScrubStop()"),
      (await this.canTrackItem(e)) &&
        (S(this.tracker, A),
        await this.trackEvent(h.SEEK_STOPPED, t, this.tracker.TYPE.MANUAL, this.tracker.SEEK_STOP_REASON.SCRUB),
        this.state.currentState === F.playing &&
          (await this.trackEvent(
            h.PLAY_STARTED,
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
    S(this.tracker, A);
    const a = t.position ?? 0;
    (this.state.currentState === F.playing &&
      (await this.trackEvent(h.PLAY_STOPPED, a, this.tracker.TYPE.MANUAL, this.tracker.PLAY_STOP_REASON.SEEK)),
      await this.trackEvent(h.SEEK_STARTED, a, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.INTERVAL));
  }
  async trackSeekStop(e, t) {
    if ((u.debug("PodPAFTracker.seekEnd()"), !(await this.canTrackItem(e)))) return;
    S(this.tracker, A);
    const a = t.position ?? 0;
    (await this.trackEvent(h.SEEK_STOPPED, a, this.tracker.TYPE.AUTOMATIC, this.tracker.SEEK_STOP_REASON.INTERVAL),
      this.state.currentState === F.playing &&
        (await this.trackEvent(h.PLAY_STARTED, a, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.SEEK)));
  }
  async play(e, t = {}) {
    (u.debug("PodPAFTracker.play()", e, t),
      (await this.canTrackItem(e, t)) &&
        (S(this.tracker, A),
        this.state.transition(g.play, this.getExplicitStateContext(t)),
        await this.trackEvent(h.PLAY_STARTED, t.position ?? 0)));
  }
  async pause(e, t = {}) {
    (u.debug("PodPAFTracker.pause()", e, t),
      (await this.canTrackItem(e, t)) &&
        (S(this.tracker, A),
        this.state.transition(g.pause, this.getExplicitStateContext(t)),
        await this.trackEvent(h.PLAY_STOPPED, t.position ?? 0, void 0, this.tracker?.PLAY_STOP_REASON.PAUSE)));
  }
  async skip(e, t = {}) {
    (u.debug("PodPAFTracker.skip()", e, t),
      (await this.canTrackItem(e, t)) &&
        (S(this.tracker, A),
        this.state.transition(g.play, this.getExplicitStateContext(t)),
        await this.trackEvent(
          h.PLAY_STARTED,
          t.position ?? 0,
          this.tracker?.TYPE.AUTOMATIC,
          this.tracker?.PLAY_START_REASON.PLAY_OTHER,
        )));
  }
  async stop(e, t = {}) {
    (u.debug("PodPAFTracker.stop()", e, t),
      (await this.canTrackItem(e)) &&
        (S(this.tracker, A),
        this.state.transition(g.stop, this.getExplicitStateContext(t)),
        await this.trackEvent(h.PLAY_STOPPED, t.position ?? 0),
        this.stopSynchronizing(),
        (this.currentItem = void 0)));
  }
  async exit(e, t = {}) {
    (u.debug("PodPAFTracker.exit()"),
      (await this.canTrackItem(this.currentItem)) &&
        (this.state.transition(g.exit),
        await this.trackEvent(h.PLAY_STOPPED, t.position ?? 0),
        this.stopSynchronizing(),
        (this.currentItem = void 0)));
  }
  synchronize() {
    if (this.tracker === void 0 || this.mkInstance === void 0 || this.currentItem === void 0) {
      this.stopSynchronizing();
      return;
    }
    const e = this.state.currentState === F.paused,
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
    const n = s ? y.PLAY_START_REASON.PLAY : a ? y.PLAY_START_REASON.PLAY_OTHER : y.PLAY_START_REASON.NEXT;
    return { manual: t, reason: n };
  }
  getMappedStopReason(e) {
    if (e.endReasonType !== void 0) return y.PLAY_STOP_REASON[Pi[e.endReasonType]];
  }
  determineManual(e) {
    let t;
    const a = e?.userInitiated;
    return (a !== void 0 && (t = a ? y.TYPE.MANUAL : y.TYPE.AUTOMATIC), t);
  }
  getExplicitStateContext(e) {
    return { manual: this.determineManual(e), reason: this.getMappedStopReason(e) };
  }
  getAdditionalPlaybackData(e, t) {
    const { lastPlayStartEvent: a, lastTrackedEvent: r } = this.state;
    let s,
      n = a?.position;
    return (
      e === h.PLAY_STARTED ? (n = t) : r?.eventType === h.PLAY_STARTED && (s = t - (n ?? 0)),
      { playDuration: s, playStartPosition: n }
    );
  }
  getAdditionalTrackingData(e, t) {
    const { delegatedPlayback: a } = qe(e),
      { currentPlaybackDuration: r } = e;
    return {
      delegatedPlayback: a,
      isSignedIn: $.isAuthorized,
      language: gi(Ai()?.[0]),
      playStartTime: new Date().getTime(),
      playerHardwareFamily: a === "Airplay" ? t.runtime?.userAgent.ua : void 0,
      topic: lt,
      overallLength: He(r),
      contentLength: r,
    };
  }
}
pe([K()], X.prototype, "handleNowPlayingItemDidChange", 1);
pe([K()], X.prototype, "onPlaybackStateChange", 1);
pe([K()], X.prototype, "handleTargetWirelessChange", 1);
pe([K()], X.prototype, "synchronize", 1);
const Hr = () => ({
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
async function Wr() {
  const i = Hr().results.links.map(
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
function jr(i, e, t = {}) {
  const [a] = i.split(/\?|\#|\&/),
    r = e.regex.test(a);
  return r && e.requiredQueryParams
    ? Object.keys(e.requiredQueryParams).every((s) => {
        const n = t[s];
        return e.requiredQueryParams[s].test(n);
      })
    : r;
}
async function Jr(i) {
  const e = await Wr(),
    t = gt(i);
  return e.reduce((a, r) => {
    if (jr(i, r, t)) {
      if (a.length > 0) {
        if (r.requiredQueryParams) a = a.filter((s) => s.requiredQueryParams);
        else if (a.some((s) => s.requiredQueryParams)) return a;
      }
      (r.requiredQueryParams
        ? (r.mediaAPI.parameters = Object.keys(r.requiredQueryParams).reduce((s, n) => ((s[n] = t[n]), s), {}))
        : r.mediaAPI.parameterMapping && (r.mediaAPI.parameters = _i(r.mediaAPI.parameterMapping, t, !0)),
        a.push(r));
    }
    return a;
  }, []);
}
async function is(i) {
  return { results: { links: await Jr(i) }, meta: { originalUrl: i, originalQueryParams: gt(i) } };
}
async function dt(i) {
  (_.linkChild(j),
    _.linkChild(mt),
    _.linkChild(bi),
    _.linkChild(k),
    (i.playActivityAPI = i.realm === vt.PODCAST ? [new X()] : [new Ue(), new Dr()]));
  let e = $t;
  return (
    i.rtcOptions !== void 0 && (i.playActivityAPI = [...i.playActivityAPI, new Si(i.rtcOptions), new Ii()]),
    (e = R),
    await Ei(i, e, async (a) => {
      (await a.configure({ storefrontId: i.apiOptions?.storefrontId }),
        i.declarativeMarkup &&
          typeof console < "u" &&
          console.warn &&
          console.warn("The declarativeMarkup configuration option has been removed in MusicKit JS V3"));
    })
  );
}
if (ki) {
  const i = wi(),
    e = /interactive|complete|loaded/.test(document.readyState);
  i &&
    i.developerToken &&
    Ri().length === 0 &&
    (e ? Mi(dt(i)) : document.addEventListener("DOMContentLoaded", () => dt(i)));
}
export {
  Pt as Events,
  P as MKError,
  yi as MediaItem,
  p as PlayActivityEndReasonType,
  ke as PlayActivitySourceType,
  Pe as PlaybackActions,
  ss as PlaybackBitrate,
  ge as PlaybackMode,
  U as PlaybackStates,
  Ce as PlaybackType,
  H as PlayerRepeatMode,
  W as PlayerShuffleMode,
  ns as PresentationMode,
  vt as SKRealm,
  os as __dev,
  cs as __log,
  dt as configure,
  us as enableMultipleInstances,
  ls as formatArtworkURL,
  ts as formatMediaTime,
  fs as formattedMediaURL,
  es as formattedMilliseconds,
  xt as formattedSeconds,
  ms as generateEmbedCode,
  ds as getHlsJsCdnConfig,
  ps as getInstance,
  Ri as getInstances,
  hs as getPlayerType,
  is as resolveCanonical,
};
