import {
  X as dt,
  Y as C,
  Z as Ce,
  _ as k,
  $ as ke,
  a as Ke,
  a0 as d,
  a1 as P,
  a2 as c,
  G as p,
  a3 as b,
  a4 as z,
  a5 as pt,
  a6 as Qt,
  a7 as ht,
  a8 as Ht,
  a9 as qt,
  aa as Wt,
  ab as oe,
  ac as Jt,
  ad as jt,
  ae as Xt,
  af as Zt,
  ag as ei,
  ah as N,
  ai as ti,
  aj as yt,
  l as J,
  D as l,
  ak as ze,
  al as ii,
  am as ai,
  N as Oe,
  an as ri,
  ao as ft,
  x as B,
  s as $,
  C as q,
  ap as ie,
  F as W,
  aq as me,
  ar as ae,
  z as Pe,
  as as si,
  at as ni,
  au as oi,
  av as ci,
  aw as _,
  ax as ui,
  ay as Tt,
  v as U,
  E as vt,
  az as I,
  aA as D,
  B as Q,
  O as ge,
  aB as li,
  c as di,
  M as pi,
  aC as y,
  W as hi,
  n as yi,
  m as Qe,
  o as h,
  r as S,
  e as He,
  t as fi,
  b as qe,
  q as Ti,
  k as vi,
  aD as mi,
  y as Pi,
  aE as gi,
  aF as Ai,
  aG as _i,
  aH as bi,
  aI as Si,
  aJ as Ii,
  T as Ei,
  aK as ki,
} from "./dev~DnibTECcJp.js";
import { Q as Hr, P as qr, J as Wr, I as Jr, R as jr, aL as Xr, K as Zr, U as es, L as ts } from "./dev~DnibTECcJp.js";
import { aB as m } from "./main.js";
import { aA as as, aC as rs } from "./main.js";
const We = Date.now();
function Je() {
  if (typeof globalThis.process?.hrtime == "function") {
    const [i, e] = process.hrtime();
    return Math.floor(1e3 * i + 1e-6 * e);
  } else return typeof globalThis.performance?.now == "function" ? globalThis.performance.now() - We : Date.now() - We;
}
const wi = (i) => ("0" + (i & 255).toString(16)).slice(-2),
  mt = (i, e = 8) => {
    if (!(i instanceof Uint8Array)) return "";
    const t = Array.prototype.map.call(i, wi).join("");
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
***************************************************************************** */ function je(i, e) {
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
var V;
(function (i) {
  ((i[(i.NotStarted = 0)] = "NotStarted"), (i[(i.Running = 1)] = "Running"), (i[(i.Stopped = 2)] = "Stopped"));
})(V || (V = {}));
var Pt = { type: "xstate.init" };
function Ae(i) {
  return i === void 0 ? [] : [].concat(i);
}
function K(i) {
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
function gt(i) {
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
function At(i, e) {
  e === void 0 && (e = {});
  var t = je(
      et(
        Ae(i.states[i.initial].entry).map(function (n) {
          return Xe(n, e.actions);
        }),
        i.context,
        Pt,
      ),
      2,
    ),
    a = t[0],
    r = t[1],
    s = {
      config: i,
      _options: e,
      initialState: { value: i.initial, actions: a, context: r, matches: ce(i.initial) },
      transition: function (n, o) {
        var f,
          M,
          E = typeof n == "string" ? { value: n, context: i.context } : n,
          L = E.value,
          Z = E.context,
          he = gt(o),
          ye = i.states[L];
        if (ye.on) {
          var Ft = Ae(ye.on[he.type]);
          try {
            for (
              var ee = (function (v) {
                  var ve = typeof Symbol == "function" && Symbol.iterator,
                    Ge = ve && v[ve],
                    Ve = 0;
                  if (Ge) return Ge.call(v);
                  if (v && typeof v.length == "number")
                    return {
                      next: function () {
                        return (v && Ve >= v.length && (v = void 0), { value: v && v[Ve++], done: !v });
                      },
                    };
                  throw new TypeError(ve ? "Object is not iterable." : "Symbol.iterator is not defined.");
                })(Ft),
                H = ee.next();
              !H.done;
              H = ee.next()
            ) {
              var te = H.value;
              if (te === void 0) return Ze(L, Z);
              var fe = typeof te == "string" ? { target: te } : te,
                G = fe.target,
                Ye = fe.actions,
                xe = Ye === void 0 ? [] : Ye,
                Fe = fe.cond,
                $t =
                  Fe === void 0
                    ? function () {
                        return !0;
                      }
                    : Fe,
                Bt = G === void 0,
                Gt = G ?? L,
                Vt = i.states[Gt];
              if ($t(Z, he)) {
                var Te = je(
                    et(
                      (Bt
                        ? Ae(xe)
                        : [].concat(ye.exit, xe, Vt.entry).filter(function (v) {
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
                  $e = Te[0],
                  Kt = Te[1],
                  zt = Te[2],
                  Be = G ?? L;
                return {
                  value: Be,
                  context: Kt,
                  actions: $e,
                  changed: G !== L || $e.length > 0 || zt,
                  matches: ce(Be),
                };
              }
            }
          } catch (v) {
            f = { error: v };
          } finally {
            try {
              H && !H.done && (M = ee.return) && M.call(ee);
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
function _t(i) {
  var e = i.initialState,
    t = V.NotStarted,
    a = new Set(),
    r = {
      _machine: i,
      send: function (s) {
        t === V.Running &&
          ((e = i.transition(e, s)),
          tt(e, gt(s)),
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
        return ((t = V.Running), tt(e, Pt), r);
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
  Ri = "A method was called without a previous descriptor",
  Mi = "The scrub() method was called with the SCRUB_END action without a previous SCRUB_START descriptor",
  Di = "The play() method was called without a previous stop() or pause() call.",
  Ci = "A play stop() method was called without a previous play() descriptor",
  Re = /(?:st|ra)\.([0-9]+)/,
  at = /st\.([0-9]+)/,
  bt = "send() called without any data",
  Oi = ({ timestamp: i, ...e }) => ({ ...e, "milliseconds-since-play": Date.now() - i });
class Li {
  mode = dt.AUTO;
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
    return this._isQA ? `${it}/qa/play` : `${it}/play`;
  }
  async send(e) {
    const t = { client_id: this._clientId, event_type: this._eventType, data: Ce(e).map(Oi) };
    if (t.data.length === 0) throw new Error(bt);
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
function Ni(i) {
  return i
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\b./g, (e) => e.toUpperCase())
    .replace(/\s/g, "");
}
const St = (i, e) =>
    e?.name === void 0 ? "MusicKitApp/1.0" : i !== void 0 ? i : `${Ni(e.name)}/${e?.version || "1.0"}`,
  Ui = (i) => {
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
  Yi = (i) => `model/${i?.platform || "Unavailable"}`,
  xi = (i) => {
    const e = i?.build;
    return e === void 0 || e === "" ? "build/0.0.0" : `build/${e}`;
  },
  Fi = (i, e, t, a) => [St(i, e), Ui(a), Yi(t), xi(e)].join(" "),
  $i = { platform: "", userAgent: "" };
class It {
  constructor(e, t, a, r) {
    ((this._accessToken = e),
      (this._musicUserToken = t),
      (this._storefrontId = a),
      r &&
        ((this._appInfo = r.app),
        (this._navigator = r.navigator),
        (this._userAgent = r.userAgent),
        Ke(r, "utcOffset") && isNaN(r.utcOffset)
          ? (this._utcOffsetInSeconds = -1)
          : Ke(r, "utcOffset") && (this._utcOffset = r.utcOffset),
        (this.clientId = r.clientId || "JSCLIENT"),
        (this._deviceName = r.deviceName),
        (this.guid = r.guid),
        (this.metricsClientId = r.metricsClientId),
        (this.preferDSID = r.preferDSID ?? !1),
        (this.sourceType = r.sourceType !== void 0 && typeof r.sourceType == "number" ? r.sourceType : ke.MUSICKIT),
        (this._userIsSubscribed = r.userIsSubscribed ?? !0),
        (this._allowReportingId = r.allowReportingId ?? !1),
        r.app?.bundleId && (this.bundleId = r.app?.bundleId)),
      (this.buildVersion = Fi(this._appId, this._appInfo, this.navigator, this.userAgent)),
      (this.sender = new Li({
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
    return (this._appId === void 0 && (this._appId = St(this._appId, this._appInfo)), this._appId);
  }
  get deviceName() {
    return this._deviceName;
  }
  get musicUserToken() {
    return C(this._musicUserToken);
  }
  get navigator() {
    return this._navigator ?? (typeof navigator > "u" ? $i : navigator);
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
const Bi = (i, ...e) => e.reduce((t, a) => a(t), i);
function ue(i, e, t) {
  const a = i.userPreference;
  return (
    P(i) === c.PLAY_END &&
    i.audioQuality?.provided !== void 0 &&
    i.audioQuality?.targeted !== void 0 &&
    a?.audioQuality !== void 0 &&
    a?.playbackFormat !== void 0
  );
}
function Gi(i, e, t) {
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
function Vi(i, e, t) {
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
function Ki(i, e, t) {
  return t.client.bundleId;
}
function zi(i, e, t) {
  return t.client.buildVersion;
}
const Qi = ["uploadedVideo", "uploadedAudio", "uploaded-videos", "uploaded-audios"];
function le({ kind: i }, e, t) {
  return i !== void 0 && Qi.includes(i);
}
function Hi({ endReasonType: i, eventType: e, itemType: t, timedMetadata: a }, r, s) {
  return a !== void 0 && (t === d.TIMED_METADATA_PING || e === c.PLAY_START || i === p.PLAYBACK_MANUALLY_PAUSED);
}
function w(i, e, t) {
  const { id: a, reporting: r } = i;
  if (a === "-1" || !r)
    switch (P(i)) {
      case c.PLAY_END:
        return d.AGGREGATE_NON_CATALOG_PLAY_TIME;
      case c.PLAY_START:
        if (a === "-1") return d.INVALID;
    }
  const { format: s, kind: n, itemType: o } = i;
  return n === "musicMovie"
    ? d.ORIGINAL_CONTENT_MOVIES
    : Hi(i)
      ? o === d.TIMED_METADATA_PING
        ? o
        : d.STREAM
      : s === "stream"
        ? d.STREAM
        : le(i)
          ? d.ARTIST_UPLOADED_CONTENT
          : (o ?? d.ITUNES_STORE_CONTENT);
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
function qi(i, e, t) {
  if (Y(i) !== b.ALBUM) return;
  const { container: a } = i,
    r = a?.id;
  if (r !== void 0 && !z(r)) return r;
}
function Wi(i, e, t) {
  if (Y(i) !== b.ALBUM) return;
  const { container: a } = i,
    r = a?.id;
  if (r !== void 0 && z(r)) return r;
}
function Ji(i, e, t) {
  if (Y(i) !== b.PLAYLIST) return;
  const { container: a } = i,
    r = a?.catalogId ?? a?.globalId;
  if (a?.isLibrary && r) return r;
  if (!z(a?.id)) return a?.id;
}
function ji(i, e, t) {
  if (Y(i) !== b.PLAYLIST) return;
  const { container: a } = i,
    r = a?.versionHash;
  if (!(r === void 0 || r === "")) return r;
}
function Xi(i, e, t) {
  if (Y(i) !== b.RADIO) return;
  const a = i.container?.stationHash;
  return a !== void 0 && a !== "" ? a : void 0;
}
function Zi(i, e, t) {
  if (Y(i) === b.RADIO) return i.container?.id;
}
function ea(i, e, t) {
  if (Y(i) !== b.RADIO) return;
  const a = i.container?.id;
  if (a !== void 0 && at.test(a)) return parseInt(a.replace(at, "$1"), 10);
}
function ta(i, e, t) {
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
function ia(i, e, t) {
  if (w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = qi(i);
  r !== void 0 && (a["album-adam-id"] = r);
  const s = Wi(i);
  s !== void 0 && (a["cloud-album-id"] = s);
  const n = Ji(i);
  n !== void 0 && (a["global-playlist-id"] = n);
  const o = ji(i);
  o !== void 0 && (a["playlist-version-hash"] = o);
  const f = Xi(i);
  f !== void 0 && (a["station-hash"] = f);
  const M = Zi(i);
  M !== void 0 && (a["station-id"] = M);
  const E = ea(i);
  E !== void 0 && (a["station-personalized-id"] = E);
  const L = ta(i);
  if ((L !== void 0 && (a["universal-library-id"] = L), !pt(a))) return a;
}
function aa(i, e, t) {
  return t.client.accessToken;
}
function ra(i, e, t) {
  return t.client.deviceName;
}
function sa(i, e, t) {
  if (P(i) === c.LYRIC_DISPLAY) return C(i.lyricDescriptor?.displayTranslation);
}
function na(i, e, t) {
  if (P(i) === c.LYRIC_DISPLAY) return C(i.lyricDescriptor?.displayTransliteration);
}
function oa(i, e, t) {
  if (P(i) === c.LYRIC_DISPLAY) return i.lyricDescriptor?.displayType;
}
function Et({ position: i = 0, startPositionInMilliseconds: e }, t, a) {
  return e || Math.round(1e3 * i);
}
function ca(i, e, t) {
  switch (P(i)) {
    case c.LYRIC_DISPLAY:
      return i.lyricDescriptor?.duration === void 0 ? void 0 : Math.round(i.lyricDescriptor.duration);
    case c.PLAY_START:
      return;
    default:
      return e && e.position === void 0 ? void 0 : i.endPositionInMilliseconds || Et(i);
  }
}
function j({ id: i, reporting: e }, t, a) {
  return i === "-1" || !e;
}
function kt(i, e, t) {
  if (!(e && e?.position === void 0))
    return w(i) === d.TIMED_METADATA_PING && i.timedMetadata !== void 0
      ? p.NOT_APPLICABLE
      : j(i) && i.eventType === c.PLAY_END
        ? p.NOT_APPLICABLE
        : i.endReasonType;
}
const { CONTAINER_CHANGED: rt, NOT_SPECIFIED: _e } = Qt;
function ua(i, e, t) {
  if (P(i) !== c.PLAY_START) return;
  const r = i.container;
  return r === void 0 ? _e : e === !1 ? (t.isAlexa ? _e : rt) : e?.container?.id !== r.id ? rt : _e;
}
function la(i, e, t) {
  return w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME ? void 0 : `${i.container?.name ?? ht.MUSICKIT}`;
}
function da(i, e, t) {
  return t.client.guid;
}
function Le({ id: i, container: e }, t, a) {
  return Re.test(i) || e?.kind === "radioStation";
}
function pa(i, e, t) {
  if (!(j(i) || Le(i)) && le(i)) return i.id;
}
function Ne({ id: i, isLibrary: e }, t, a) {
  return e || z(i);
}
function wt({ catalogId: i, container: e }, t, a) {
  return i ?? e?.catalogId;
}
function Rt(i, e, t) {
  return i.isLibrary && !!wt(i);
}
function ha(i, e, t) {
  const { id: a } = i,
    r = a !== void 0 && a !== "";
  return j(i) && P(i) === c.PLAY_START && r && a !== "-1"
    ? a
    : Le(i) || le(i)
      ? i.cloudId
      : (Rt(i) && r) || Ne(i)
        ? a
        : i.cloudId;
}
function ya(i, e, t) {
  if (P(i) === c.LYRIC_DISPLAY) return i.lyricDescriptor?.id;
}
function fa(i, e, t) {
  return i.purchasedId;
}
function Ta(i, e, t) {
  if (t.client.allowReportingId === !0 && Ne(i)) return i.reportingId;
}
function va(i, e, t) {
  if (j(i)) return;
  const { container: a, id: r } = i;
  if (Re.test(r) || a?.kind === "radioStation") return parseInt(`${r}`.replace(Re, "$1"), 10);
}
function ma(i, e, t) {
  if (!(j(i) || Le(i) || le(i))) {
    if (Rt(i)) return wt(i);
    if (!Ne(i)) return i.id;
  }
}
function Pa(i, e, t) {
  if (w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME) return;
  const a = Object.create(null),
    r = pa(i);
  r !== void 0 && (a["auc-adam-id"] = r);
  const s = ha(i);
  s !== void 0 && (a["cloud-id"] = s);
  const n = ya(i);
  n !== void 0 && (a["lyric-id"] = n);
  const o = fa(i);
  o !== void 0 && (a["purchased-adam-id"] = o);
  const f = Ta(i, e, t);
  f !== void 0 && (a["reporting-adam-id"] = f);
  const M = va(i);
  M !== void 0 && (a["radio-adam-id"] = M);
  const E = ma(i);
  if ((E !== void 0 && (a["subscription-adam-id"] = E), !pt(a))) return a;
}
function ga(i, e, t) {
  return t.client.internalBuild;
}
function Aa(i, e, t) {
  return i.container?.isCollaborative === !0 ? !0 : void 0;
}
function _a(i, e, t) {
  if (P(i) === c.LYRIC_DISPLAY) return i.lyricDescriptor?.language;
}
function ba({ streamingKind: i }, e, t) {
  return i === Ht.EPISODE;
}
function Sa(i, e, t) {
  return w(i) === d.STREAM;
}
function Mt(i, e, t) {
  return Sa(i) && !ba(i);
}
function Ia(i, e, t) {
  const a = P(i);
  if (a === c.LYRIC_DISPLAY || Mt(i)) return 0;
  const r = Math.round(1e3 * i.duration);
  if (a === c.PLAY_START) return r;
  const s = i.startPositionInMilliseconds ?? Math.round(1e3 * (i.position ?? 0)),
    n = i.duration * 1e3;
  return s > n ? s : r;
}
function Ea(i, e, t) {
  return t.client.metricsClientId;
}
function ka(i, e, t) {
  return !1;
}
function wa(i, e, t) {
  return qt();
}
function Ra(i, e, t) {
  if (P(i) === c.LYRIC_DISPLAY || w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME)
    return { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 };
  const a = C(i.playMode);
  if (a !== void 0)
    return {
      "auto-play-mode": a.autoplayMode ?? 0,
      "repeat-play-mode": a.repeatPlayMode ?? 0,
      "shuffle-play-mode": a.shufflePlayMode ?? 0,
    };
}
function Ma(i, e, t) {
  return t.client.privateEnabled;
}
function Da(i, e, t) {
  if (P(i) !== c.LYRIC_DISPLAY && w(i) !== d.AGGREGATE_NON_CATALOG_PLAY_TIME) return i.recoData;
}
function Ca(i, e, t) {
  return t.client.userIsSubscribed;
}
function Oa(i, e, t) {
  return t.client.siriInitiated;
}
function La(i, e, t) {
  return t.client.sourceType;
}
function Na(i, e, t) {
  const a = P(i);
  return a === c.LYRIC_DISPLAY || w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME || Mt(i)
    ? 0
    : a === c.PLAY_START
      ? Et(i)
      : (i.startPositionInMilliseconds ?? Ua(e) ?? 0);
}
const Ua = (i) => (i && i.position !== void 0 ? Math.round(1e3 * i.position) : 0);
function Ya(i, e, t) {
  return t.client.storefrontId;
}
function xa(i, e, t) {
  const a = i.timedMetadata;
  if (a === void 0) return;
  const r = P(i);
  if (kt(i, e) !== p.SCRUB_END && r === c.PLAY_END) return mt(a, 0);
}
function Fa(i, e, t) {
  return i.timestamp ?? Date.now();
}
function $a(i, e, t) {
  return t.client.userAgent;
}
function Ba(i, e, t) {
  if (ue(i)) return i.userPreference?.audioQuality;
}
function Ga(i, e, t) {
  if (ue(i)) return i.userPreference?.playbackFormat;
}
function Va(i, e, t) {
  if (!t.client.preferDSID) return t.client.musicUserToken;
}
function Ka(i, e, t) {
  return w(i) === d.AGGREGATE_NON_CATALOG_PLAY_TIME ? 0 : t.client.utcOffsetInSeconds;
}
const za = {
  "audio-quality-provided": Gi,
  "audio-quality-targeted": Vi,
  "bundle-id": Ki,
  "build-version": zi,
  "container-ids": ia,
  "container-type": Y,
  "developer-token": aa,
  "device-name": ra,
  "display-translation": sa,
  "display-transliteration": na,
  "display-type": oa,
  "end-position-in-milliseconds": ca,
  "end-reason-type": kt,
  "event-reason-hint-type": ua,
  "event-type": P,
  "feature-name": la,
  guid: da,
  ids: Pa,
  "internal-build": ga,
  "is-collaborative": Aa,
  "lyric-language": _a,
  "media-duration-in-milliseconds": Ia,
  "media-type": Wt,
  "metrics-client-id": Ea,
  offline: ka,
  "persistent-id": wa,
  "play-mode": Ra,
  "private-enabled": Ma,
  "reco-data": Da,
  "sb-enabled": Ca,
  "siri-initiated": Oa,
  "source-type": La,
  "start-position-in-milliseconds": Na,
  "store-front": Ya,
  "timed-metadata": xa,
  timestamp: Fa,
  type: w,
  "user-agent": $a,
  "user-preference-audio-quality": Ba,
  "user-preference-playback-format": Ga,
  "user-token": Va,
  "utc-offset-in-seconds": Ka,
};
let Qa = 0;
const Ha = (i = {}, e) => ({ id: (Qa++).toFixed(0), client: e, isAlexa: !1, ...i }),
  qa = (i, ...e) => ({ ...i, ...Object.assign({}, ...e) }),
  Dt = (i, e, t, a = !1) => {
    const r = qa(typeof a == "boolean" ? Ha({ isAlexa: a }, i) : { ...a, client: i }),
      s = oe(e),
      n = t && oe(t),
      o = Object.create(null);
    for (const [f, M] of Object.entries(za)) {
      const E = M(s, n, r);
      E !== void 0 && (o[f] = E);
    }
    return o;
  },
  Wa = (i, e, t) => {
    if (e === void 0) throw new Error("called without a play activity descriptor");
    const a = { ...e, eventType: c.LYRIC_DISPLAY };
    return Bi(
      {
        ...Dt(i, a, t, !1),
        "media-duration-in-milliseconds": 0,
        "media-type": Jt.AUDIO,
        "start-position-in-milliseconds": 0,
        "play-mode": { "auto-play-mode": 0, "repeat-play-mode": 0, "shuffle-play-mode": 0 },
      },
      (r) => we(r, ["character-display-count", "event-reason-hint-type", "reco-data"]),
    );
  },
  Ja = () =>
    At({
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
class ja extends It {
  _machine;
  startDescriptor;
  get state() {
    return this._machine.state.value;
  }
  constructor(e, t, a, r) {
    (super(e, t, a, r), (this._machine = _t(Ja()).start()));
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
    return Wa(this, e, t);
  }
}
const Xa = (i = {}) => ({
    get(e) {
      if (!(typeof e > "u")) return i[e];
    },
    set(e, t) {
      i[e] = t;
    },
  }),
  Za = () => ({ get: Xt, set: jt }),
  er = (i) => {
    switch ((typeof i > "u" && (i = "browser"), i)) {
      case "browser":
        return Za();
      case "memory":
        return Xa();
      default:
        return i;
    }
  },
  Ct = (i, e) => Lt(i, e, [], "/", 0),
  Ot = (i, e) => {
    const t = i.get(e);
    if (t === void 0 || t === "") return [];
    const a = JSON.parse(atob(t));
    return Ce(a);
  },
  Lt = (i, e, t, a, r, s) => i.set(e, btoa(JSON.stringify(t)), a, r, s),
  tr = (i, e, t, a, r, s) => Lt(i, e, [...Ot(i, e), t], a, r, s),
  { AUTO: st } = dt;
class ir {
  constructor(e, t) {
    ((this.sender = e), (this.jar = t));
  }
  mode = st;
  async flush() {
    const e = Ot(this.jar, ne);
    if (!(e === void 0 || e.length === 0))
      try {
        (await this.sender.send(e), Ct(this.jar, ne));
      } catch (t) {
        throw new Error(`flush: ${t.message}`);
      }
  }
  async send(e) {
    if (this.mode === st && (Array.isArray(e) || e["end-reason-type"] !== p.EXITED_APPLICATION))
      return this.sender.send(e);
    tr(this.jar, ne, e, "/");
  }
}
const ar = (i) => {
    switch (typeof i) {
      case "string":
        return i;
      case "object":
        return !i.message || typeof i.message != "string" ? "" : i.message;
      default:
        return "";
    }
  },
  rr = (i) => ar(i).includes(bt),
  re = (i) => ({ type: i });
function sr(i) {
  return i.eventType === c.PLAY_START;
}
function nr(i) {
  if (i.eventType !== c.PLAY_END) return !1;
  if (i.endReasonType === void 0) throw new Error("PLAY_END activity descriptor requires an endReasonType value");
  return !0;
}
function or(i) {
  if (i.itemType === d.TIMED_METADATA_PING) return !1;
  if (sr(i)) return re("play");
  if (nr(i)) {
    const e = i.endReasonType;
    if (e === p.SCRUB_BEGIN) return re("scrubBegin");
    if (e === p.SCRUB_END) return re("scrubEnd");
    if (e === p.EXITED_APPLICATION) return !1;
  }
  return re("stop");
}
const cr = () =>
  At(
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
        setScrubEndError: K((i) => ({ ...i, errorMessage: Mi })),
      },
    },
  );
class ur {
  machine;
  machineService;
  constructor() {
    ((this.machine = cr()), (this.machineService = _t(this.machine).start()));
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
    const a = or(e);
    if (a === !1) return this.currentStateName;
    if ((this.machineService.send(a), this.matches("error")))
      throw new Error(this.machineService.state.context.errorMessage);
    return this.currentStateName;
  }
}
const lr = ({ id: i, reporting: e = !0, eventType: t }) => (i === "-1" || !e) && t === c.PLAY_END;
class dr extends It {
  constructor(e, t, a, r) {
    super(e, t, a, r);
  }
  build(e, t) {
    return Dt(this, e, t, this.clientId !== "JSCLIENT");
  }
}
class pr {
  sender;
  timeline = [];
  _cookieJar;
  _paf;
  _machine;
  timedMetadata;
  constructor(e, t, a, r) {
    ((this._paf = new dr(e, t, a, r)),
      (this._cookieJar = er(r?.cookieJar)),
      (this.sender = new ir(this._paf.sender, this._cookieJar)),
      (this._machine = new ur()));
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
        if (!rr(a)) throw a;
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
      (r.eventType === c.PLAY_END && delete r.endReasonType,
        await this._addToTimeline({ ...this.sanitizePreviousDescriptor(r), eventType: c.PLAY_START }));
      return;
    }
    if (a) {
      const r = this.previousDescriptor;
      if (this._machine.matches("playing") && !lr(r)) return Promise.reject(new Error(Di));
    }
    await this._addToTimeline({ ...e, eventType: c.PLAY_START, position: t });
  }
  async scrub(e = 0, t = p.SCRUB_BEGIN) {
    await this._addToTimeline({
      ...this.sanitizePreviousDescriptor(this.previousDescriptor),
      eventType: c.PLAY_END,
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
        (this.timeline.pop(), Ct(this._cookieJar, ne), (a = this.previousDescriptor)),
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
    if (e === void 0) throw new Error(Ri);
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
    e = Ce(e);
    const a = oe(t);
    return (e.forEach((r) => this._machine.transition(a, r)), this.sender.send(e));
  }
  sanitizePreviousDescriptor(e) {
    let t = Zt(e);
    return (t.itemType === d.TIMED_METADATA_PING && (t = we(t, ["itemType"])), t);
  }
}
class hr extends HTMLElement {
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
  yr = Date.parse("January 01, 2001 0:00:00 GMT");
class fr extends ei {
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
    (super(e), customElements.get(be) !== void 0 || customElements.define(be, hr));
  }
  startTimerProgress() {
    this.timerId ||
      (this.timerId = setInterval(() => {
        const e = this._nowPlayingItem?.attributes.elapsedTimeTimestamp,
          t = this._nowPlayingItem?.attributes.elapsedTime,
          a = e * 1e3 + yr,
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
      e && (e.state = ti.playing),
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
      yt.debug("initializedMediaElement", e));
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
const T = J.createChild("mpaf"),
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
  nt = new Map([
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
    return Array.from(nt.keys());
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  get activityTracker() {
    if (this._activityTracker === void 0)
      throw new m(m.Reason.CONFIGURATION_ERROR, "Play Activity service was called before configuration.");
    return this._activityTracker;
  }
  static async create(e) {
    const t = new Ue();
    return (await t.configure(e), t);
  }
  async configure(e) {
    ((this.instance = e.instance),
      (this.services = e.services),
      (this._activityTracker = vr(e.instance, { runtime: e.services.runtime, request: e.services.request })));
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = nt.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async activate(e, t = {}) {
    (T.debug("Activating MPAF tracker"),
      await this.activityTracker.activate(t.flush),
      this.reportTimedMetadata.clear());
  }
  async exit(e, t = {}) {
    (T.debug("PAF debug", `client.exit(${t.position})`), this.activityTracker.exit(t.position));
  }
  async pause(e, t = {}) {
    if ((e?.id !== void 0 && this.reportTimedMetadata.add(e.id), typeof t.endReasonType == "number"))
      return (
        T.debug("PAF debug", `client.stop(${t.position}, ${t.endReasonType})`),
        this.activityTracker.stop(t.position, t.endReasonType)
      );
    (T.debug("PAF debug", `client.pause(${t.position})`), this.activityTracker.pause(t.position));
  }
  async play(e, t = {}) {
    const a = ot(l.playbackPlay, this.instance, e);
    (ze(e, "video") && (this.musicLiveVideoStartTime = Date.now()),
      T.debug("PAF debug", `client.play(${JSON.stringify(a)}, ${t.position})`),
      this.activityTracker.play(a, t.position),
      this.reportTimedMetadata.add(e.id));
  }
  async scrub(e, t = {}) {
    (T.debug("PAF debug", `client.scrub(${t.position}, ${Se(t.endReasonType)})`),
      this.activityTracker.scrub(t.position, t.endReasonType),
      e !== void 0 && t.endReasonType === p.SCRUB_END && this.reportTimedMetadata.delete(e.id));
  }
  async seek(e, t = {}) {
    (await this.scrub(e, { position: t.startPosition, endReasonType: p.SCRUB_BEGIN }),
      await this.scrub(e, { position: t.position, endReasonType: p.SCRUB_END }));
  }
  async skip(e, t = {}) {
    const a = ot(l.playbackSkip, this.instance, e);
    T.debug("PAF debug", `client.skip(${JSON.stringify(a)}, ${Se(t.direction)}, ${t.position})`);
    try {
      (await this.activityTracker.skip(a, t.direction, t.position), this.reportTimedMetadata.add(e.id));
    } catch (r) {
      if (r.message === Ci) await this.play(e, t);
      else return Promise.reject(r);
    }
  }
  async stop(e, t = {}) {
    (ze(e, "video")
      ? ((t.position = (Date.now() - this.musicLiveVideoStartTime) / 1e3), (this.musicLiveVideoStartTime = 0))
      : e?.isLiveRadioStation && t.position && (t.position = t.position - (t.startPosition || 0)),
      e?.isLiveRadioStation && (t.endReasonType = t.endReasonType ?? p.PLAYBACK_MANUALLY_PAUSED),
      T.debug("PAF debug", `client.stop(${t.position}, ${Se(t.endReasonType)})`),
      this.activityTracker.stop(t.position, t.endReasonType),
      e?.id !== void 0 && this.reportTimedMetadata.delete(e.id));
  }
  async timedMetadata(e, t) {
    if (e === void 0 || t === void 0 || t.position === void 0 || t.metadata?.blob === void 0) {
      T.warn("Missing data for TimedMetadata event", t, e);
      return;
    }
    if (e.isRadioStation) {
      if (e.isLiveRadioStation) {
        (T.debug(`Ignoring TimedMetadata at ${t.position}: Live Radio Station`),
          (this.activityTracker.timedMetadata = void 0));
        return;
      }
    } else {
      (T.debug(`Ignoring TimedMetadata at ${t.position}: Not a Radio Station`),
        (this.activityTracker.timedMetadata = void 0));
      return;
    }
    const a = t.metadata?.blob,
      r = this.activityTracker.timedMetadata;
    if (this.reportTimedMetadata.has(e.id))
      (a === void 0 && r !== void 0) || ii(a, r)
        ? T.debug(`Skipping TimedMetadata report at ${t.position}: unchanged`, se(a))
        : (T.debug(`Reporting current TimedMetadata at ${t.position}`, se(r)),
          this.activityTracker.pingTimedMetadata(t.position, r));
    else {
      T.debug(`Skipping TimedMetadata report at ${t.position}: disabled for ${e.id} (${e.info})`, se(a));
      const s = this.activityTracker.timeline.at(-1);
      s !== void 0 &&
        (s.eventType === c.PLAY_START || s.endReasonType === p.SCRUB_END) &&
        this.reportTimedMetadata.add(e.id);
    }
    (T.debug(`Storing new TimedMetadata at ${t.position}`, se(a)), (this.activityTracker.timedMetadata = a));
  }
  shouldTrackPlayActivity(e, t) {
    const a = ai(),
      r = !t || t.playbackType !== Oe.preview,
      s = this.alwaysSendForActivityType(e),
      n = !t || (t && this.mediaRequiresPlayActivity(t));
    return !!(a && r && (s || n));
  }
  alwaysSendForActivityType(e) {
    return e === l.playerActivate || e === l.playerExit;
  }
  mediaRequiresPlayActivity(e) {
    return ri(e) || ["musicMovie", "musicVideo", "song", "radioStation"].indexOf(e.type) !== -1;
  }
}
function ot(i, e, t) {
  const a = { ...Pr(i, t, e), ...gr(i, t), ...Ar(i, t), ..._r(i, t), ...Ir(i, t) };
  return (T.trace("PAF descriptor", a), a);
}
const Tr = ft.register("mk-use-paf-qa-endpoint");
function vr(i, e) {
  return new pr(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: B.app.build, name: B.app.name ?? "", version: B.app.version, bundleId: B.app?.bundleId },
    fetch: e.request.fetch,
    isQA: Tr.enabled,
    logInfo: T.enabled,
    sourceType: i.sourceType,
    guid: i.guid,
    userIsSubscribed: () => !!(i.isAuthorized && $.storekit._getIsActiveSubscription.getCachedValue()),
  });
}
function mr(i) {
  return (
    i.hasAutoplayStation &&
    i.items.some((e) => {
      const { id: t, type: a, container: r } = e;
      if (r && r.type === "stations" && r.name === ht.RADIO) return !1;
      let s = a;
      return (z(t) && (s = s.startsWith("library-") ? s : "library-" + s), si(ni(s)));
    })
  );
}
function Pr(i, e, t) {
  if (t?.playbackActions === void 0 || e === void 0) return {};
  const a = { [q.all]: ie.REPEAT_ALL, [q.none]: ie.REPEAT_OFF, [q.one]: ie.REPEAT_ONE },
    r = { [W.off]: me.SHUFFLE_OFF, [W.songs]: me.SHUFFLE_ON };
  return {
    playMode() {
      let s = ie.REPEAT_UNKNOWN,
        n = me.SHUFFLE_UNKNOWN,
        o = ae.AUTO_UNKNOWN;
      const { playbackActions: f } = t;
      return (
        f &&
          (f.includes(Pe.REPEAT) && (s = a[t.repeatMode]),
          f.includes(Pe.SHUFFLE) && (n = r[t.shuffleMode]),
          f.includes(Pe.AUTOPLAY) &&
            (t.autoplayEnabled && t.queue !== void 0
              ? (o = mr(t.queue) ? ae.AUTO_ON : ae.AUTO_ON_CONTENT_UNSUPPORTED)
              : (o = ae.AUTO_OFF))),
        { repeatPlayMode: s, shufflePlayMode: n, autoplayMode: o }
      );
    },
  };
}
const de = (i) => [l.playbackPlay, l.playbackSkip].includes(i),
  Nt = (i, e) => e !== void 0 && de(i);
function gr(i, e) {
  if (!de(i)) return {};
  if (e === void 0) return {};
  const t = e.attributes?.mediaKind;
  return { ...(t !== void 0 ? { mediaType: t } : {}), ...e.playParams };
}
function Ar(i, e) {
  if (!de(i) || e === void 0) return {};
  const { context: t = {} } = e;
  return { recoData: t.reco_id };
}
function _r(i, e) {
  if (!de(i) || e === void 0) return {};
  const t = e.playbackDuration;
  return t ? { duration: t / 1e3 } : {};
}
function br(i, e) {
  return (Nt(i, e) && e?.container?.name) || null;
}
function Sr(i) {
  const e = { ...i };
  return (delete e.attributes, e);
}
function Ir(i, e) {
  const t = br(i, e),
    a = Nt(i, e)
      ? {
          ...e?.container,
          ...e?.container?.attributes?.playParams,
          ...(e?.container?.attributes?.hasCollaboration && { isCollaborative: !0 }),
        }
      : null;
  if (!(t === null && a === null)) return { container: Sr({ ...a, ...(t !== null ? { name: t } : {}) }) };
}
function se(i, e = 12) {
  if ((i instanceof Uint8Array && (i = mt(i)), typeof i == "string")) {
    const t = Math.floor(e / 2);
    return i.length > e ? i.slice(0, t) + "..." + i.slice(-t) : i;
  }
  return "0x0000";
}
const Me = J.createChild("lyrics"),
  ct = new Map([
    [l.lyricsPlay, "lyricsPlay"],
    [l.lyricsStop, "lyricsStop"],
    [l.lyricsUpdate, "lyricsUpdate"],
    [l.playerExit, "exit"],
  ]);
class Er {
  get requestedEvents() {
    return Array.from(ct.keys());
  }
  instance;
  services;
  _activityTracker;
  get activityTracker() {
    if (this.instance === void 0 || this.services === void 0)
      throw new m(m.Reason.CONFIGURATION_ERROR, "Lyrics Play Activity service was called before configuration.");
    return (
      this._activityTracker === void 0 &&
        (this._activityTracker = wr(this.instance, { runtime: this.services.runtime, request: this.services.request })),
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
    const r = ct.get(e);
    r !== void 0 && typeof this[r] == "function" && this[r](a, t);
  }
  async lyricsPlay(e, t) {
    const a = t?.lyrics;
    if (a === void 0)
      throw new m(m.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsPlay");
    if (e === void 0) throw new m(m.Reason.MEDIA_DESCRIPTOR, "Cannot display lyrics without a MediaItem");
    this.activityTracker.play(Rr(l.lyricsPlay, e, a));
  }
  async lyricsStop(e, t) {
    this.activityTracker.stop();
  }
  async lyricsUpdate(e, t) {
    const a = t?.lyrics;
    if (a === void 0)
      throw new m(m.Reason.MEDIA_DESCRIPTOR, "Key lyrics is missing from descriptor provided to lyricsUpdate");
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
const kr = ft.register("mk-use-paf-qa-endpoint");
function wr(i, e) {
  return new ja(i.developerToken, i.musicUserToken, i.storefrontCountryCode, {
    app: { build: B.app.build, name: B.app.name ?? "", version: B.app.version },
    fetch: e.request.fetch,
    logInfo: Me.level <= oi.INFO,
    sourceType: i.sourceType,
    isQA: kr.enabled,
    userIsSubscribed: () => i.isAuthorized && $.storekit._getIsActiveSubscription.getCachedValue(),
  });
}
function Rr(i, e, t) {
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
class Ut extends ci {
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
    if (t.length < 1) throw new m(m.Reason.CONTENT_UNAVAILABLE, "Could not parse descriptors from options");
    let a;
    const r = t[0];
    if (r.kind === "song" || r.kind === "artist")
      a = (await this.services.itemLoader.createAutoplayStation([r], { context: e.context, withTracks: !1 })).station;
    else {
      const s = await this.loadItems(e);
      if (!s[0]?.isRadioStation && !s[0]?.isRadioEpisode)
        throw new m(m.Reason.CONTENT_UNSUPPORTED, `Unsupported Radio Station type: ${s[0].type}`);
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
      e.autoplay !== void 0 && ui("autoplay", { message: "autoplay has been deprecated, use startPlaying instead" }),
      (e.startPlaying ?? e.autoplay) === !0 && (await this.play()),
      r
    );
  }
  assertUserStorefront() {
    const e = $.storekit.storefrontCountryCode,
      t = $.storefrontId,
      a = e !== void 0 && e !== t;
    if (this.realm === Tt.MUSIC && !this.previewOnly && a === !0) throw new m(m.Reason.CONTENT_EQUIVALENT);
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
var Mr = Object.defineProperty,
  Dr = Object.getOwnPropertyDescriptor,
  Cr = (i, e, t, a) => {
    for (var r = Dr(e, t), s = i.length - 1, n; s >= 0; s--) (n = i[s]) && (r = n(e, t, r) || r);
    return (r && Mr(e, t, r), r);
  };
class Yt {
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
    repeatMode: q.none,
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
        this.dispatcher.publish(vt.capabilitiesChanged),
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
Cr([Q()], Yt.prototype, "checkCapability");
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
var Or = Object.defineProperty,
  Lr = Object.getOwnPropertyDescriptor,
  O = (i, e, t, a) => {
    for (var r = Lr(e, t), s = i.length - 1, n; s >= 0; s--) (n = i[s]) && (r = n(e, t, r) || r);
    return (r && Or(e, t, r), r);
  };
class R extends Ut {
  _sharePlay;
  _shuffleMode = W.off;
  _voidPlayer;
  _previousPlaybackState = {
    playbackMode: ge.MIXED_CONTENT,
    volume: 1,
    autoplayEnabled: !1,
    repeatMode: q.none,
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
    const t = new Yt(e, this.services.dispatcher);
    return (
      this.services.dispatcher.subscribe(I.mediaStateUpdate, this.onMediaStateUpdate),
      (this._voidPlayer = new fr(
        li({
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
      this.services.dispatcher.publish(vt.shuffleModeDidChange, e),
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
  async seekToTime(e, t = di.Manual) {
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
    const a = e.map((s) => new pi(s)),
      r = a[t];
    (r && (r.playbackType = Oe.encryptedFull),
      this._voidPlayer && (this._voidPlayer.nowPlayingItem = r),
      this.queue.updateItems(a),
      (this.queue.position = t));
  }
  async onMediaStateUpdate(
    e,
    { autoPlay: t, currentPlayingIndex: a, queue: r, playbackState: s, shuffleMode: n, repeatMode: o, volume: f },
  ) {
    (this.updateQueue(r, a || 0),
      s === U.paused ? await this.pause() : s === U.playing && (await this.play()),
      (this.autoplayEnabled = t),
      (this.repeatMode = o),
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
O([x(I.nextItem)], R.prototype, "skipToNextItem");
O([x(I.previousItem)], R.prototype, "skipToPreviousItem");
O([x()], R.prototype, "playMediaItem");
O([x()], R.prototype, "setStationQueue");
O([x()], R.prototype, "setQueue");
O([x()], R.prototype, "assertUserStorefront");
O([x()], R.prototype, "playNext");
O([x()], R.prototype, "playLater");
O([x()], R.prototype, "playAt");
O([Q()], R.prototype, "onMediaStateUpdate");
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
const xt = "~~previous~~",
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
            context: { reason: y.PLAY_STOP_REASON.BUFFERING, manual: "automatic", fromInitialPlay: xt },
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
class Nr {
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
    J.debug(`[mk/activity/PodPaf] Transitioning from ${this.currentState} to ${a.target} because of ${e} event`);
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
        e[a] === xt && (t[a] = this.currentContext[a]);
      }),
      t
    );
  }
}
const ut = "xp_amp_podcasts_paf",
  Ur = "com.apple.podcasts",
  Yr = "web-podcasts-player",
  xr = "daf.xp.apple.com",
  Fr = "1.0",
  $r = { [l.playbackPause]: g.pause, [l.playbackPlay]: g.play, [l.playbackStop]: g.stop, [l.playerExit]: g.exit };
var Br = Object.defineProperty,
  Gr = Object.getOwnPropertyDescriptor,
  pe = (i, e, t, a) => {
    for (var r = Gr(e, t), s = i.length - 1, n; s >= 0; s--) (n = i[s]) && (r = n(e, t, r) || r);
    return (r && Br(e, t, r), r);
  };
const u = J.createChild("podpaf"),
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
    this.state = new Nr();
  }
  async configure(e) {
    ((this.mkInstance = e.instance), (this.services = e.services), (this.dispatcher = e.services.dispatcher));
    const t = {
        config: { configHostname: () => xr },
        environment: {
          app() {
            return Ur;
          },
          appVersion() {
            return Fr;
          },
          delegateApp() {
            return Yr;
          },
          isOffline() {
            return !1;
          },
          storeFrontCountryCode() {
            return $.storefrontCountryCode;
          },
        },
      },
      a = new hi(ut, t);
    ((this.playActivityProcessor = new yi(a)), await this.playActivityProcessor.init(), this.setupListeners());
  }
  get requestedEvents() {
    return Array.from(Qe.keys());
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
    if (!t || !t.podpafMetrics || t.playbackType === Oe.preview) return !1;
    const a = $r[e];
    return a !== void 0 ? this.state.isAllowedTransition(a) : !0;
  }
  handleEvent(e, t, a) {
    if (!this.shouldTrackPlayActivity(e, a)) return;
    const r = Qe.get(e);
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
    fi(this.playActivityProcessor, A);
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
      o = qe(t);
    (u.debug(
      `PodPAFTracker.trackEvent(${e}, ${o}, ${a}, ${r}, play duration: ${n.playDuration}, play start position: ${n.playStartPosition})`,
    ),
      (this.state.lastTrackedEvent = s),
      await this.tracker[e].call(this.tracker, o, a, r, n),
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
        (Ti(t) ? await this.trackSeek(e, t) : await this.trackScrub(e, t)));
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
    if (e.endReasonType !== void 0) return y.PLAY_STOP_REASON[vi[e.endReasonType]];
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
    const { delegatedPlayback: a } = He(e),
      { currentPlaybackDuration: r } = e;
    return {
      delegatedPlayback: a,
      isSignedIn: $.isAuthorized,
      language: mi(Pi()?.[0]),
      playStartTime: new Date().getTime(),
      playerHardwareFamily: a === "Airplay" ? t.runtime?.userAgent.ua : void 0,
      topic: ut,
      overallLength: qe(r),
      contentLength: r,
    };
  }
}
pe([Q()], X.prototype, "handleNowPlayingItemDidChange");
pe([Q()], X.prototype, "onPlaybackStateChange");
pe([Q()], X.prototype, "handleTargetWirelessChange");
pe([Q()], X.prototype, "synchronize");
async function lt(i) {
  (_.linkChild(J),
    _.linkChild(yt),
    _.linkChild(gi),
    _.linkChild(k),
    (i.playActivityAPI = i.realm === Tt.PODCAST ? [new X()] : [new Ue(), new Er()]));
  let e = Ut;
  return (
    i.rtcOptions !== void 0 && (i.playActivityAPI = [...i.playActivityAPI, new Ai(i.rtcOptions), new _i()]),
    (e = R),
    await bi(i, e, async (a) => {
      (await a.configure({ storefrontId: i.apiOptions?.storefrontId }),
        i.declarativeMarkup &&
          typeof console < "u" &&
          console.warn &&
          console.warn("The declarativeMarkup configuration option has been removed in MusicKit JS V3"));
    })
  );
}
if (Si) {
  const i = Ii(),
    e = /interactive|complete|loaded/.test(document.readyState);
  i &&
    i.developerToken &&
    Ei().length === 0 &&
    (e ? ki(lt(i)) : document.addEventListener("DOMContentLoaded", () => lt(i)));
}
export {
  vt as Events,
  m as MKError,
  pi as MediaItem,
  p as PlayActivityEndReasonType,
  ke as PlayActivitySourceType,
  Pe as PlaybackActions,
  Hr as PlaybackBitrate,
  ge as PlaybackMode,
  U as PlaybackStates,
  Oe as PlaybackType,
  q as PlayerRepeatMode,
  W as PlayerShuffleMode,
  qr as PresentationMode,
  Tt as SKRealm,
  Wr as __dev,
  Jr as __log,
  lt as configure,
  jr as enableMultipleInstances,
  Xr as formatArtworkURL,
  as as formattedMediaURL,
  rs as generateEmbedCode,
  Zr as getHlsJsCdnConfig,
  es as getInstance,
  Ei as getInstances,
  ts as getPlayerType,
};
