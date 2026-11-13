import {
  d as et,
  B as p,
  E as d,
  l as L,
  h as at,
  g as rt,
  S as it,
  D as u,
  a as st,
  P as M,
  b as _,
  c as b,
  e as z,
  f as nt,
  i as ot,
  A as K,
  j as ct,
  k as lt,
  m as Y,
  p as dt,
  s as v,
  W as ht,
  n as ut,
  o as l,
  V as pt,
  q as V,
  r as S,
  t as R,
  u as yt,
  v as m,
  w as Tt,
  x as Pt,
  y as gt,
  M as kt,
  z as ft,
  C as At,
  F as St,
  G as mt,
  H as bt,
  I as Et,
  J as vt,
  K as It,
  L as Ct,
  N as _t,
  O as Lt,
  Q as Dt,
  R as Rt,
  T as Ot,
  U as Nt,
  X as Mt,
  Y as wt,
} from "./dev~Csn1Sf4YHZ.js";
import "./main.js";
const w = "com.apple.tv";
class W {
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
  constructor(t, e, a, r, s, n, c) {
    ((this.dispatcher = t),
      (this.item = a),
      (this.instance = e),
      (this.npPlay = c),
      (this.playable = r),
      (this.pldfltcid = s),
      (this.utsClient = n),
      (this.appBundleIds = this.getAppBundleIds(r, a)),
      (this.itemTiming = et(a)));
  }
  destroy() {
    ((this._isDestroyed = !0), this.watcher?.stopMonitor(), (this.watcher = void 0));
  }
  async trackActivity(t, e) {
    return Promise.resolve();
  }
  getAppBundleIds(t, e) {
    const a = e?.channels;
    return !Array.isArray(a) || t?.channelId === void 0
      ? void 0
      : (a.find((s) => s.id === t.channelId)?.appBundleIds?.[0] ?? void 0);
  }
  determineRelativePosition(t, e) {
    return t <= e.mainContentStarts ? 0 : t >= e.mainContentEnds ? e.mainContentEnds : t - e.mainContentStarts;
  }
}
var xt = Object.defineProperty,
  Ft = Object.getOwnPropertyDescriptor,
  G = (i, t, e, a) => {
    for (var r = Ft(t, e), s = i.length - 1, n; s >= 0; s--) (n = i[s]) && (r = n(t, e, r) || r);
    return (r && xt(t, e, r), r);
  };
class X extends W {
  playMetadataLive;
  scheduleItems = [];
  async init() {
    const { playable: t } = this,
      e = await this.utsClient?.request("getContentsPlayMetadataLive", {
        brandId: t.channelId,
        externalServiceId: t.externalServiceId,
      });
    ((this.playMetadataLive = e?.data ?? e), this.resetListening());
  }
  destroy() {
    this.unsubscribe();
  }
  async trackActivity(t, e) {
    (t === "scrub" || t === "seek") && this.resetListening();
  }
  handleTimeChange() {
    const { scheduleItems: t } = this,
      e = this.instance.currentPlayingDate?.getTime() ?? 0;
    if (!(e === 0 || !t)) {
      for (let a = 0; a < t.length; a++) {
        const r = t[a],
          s = r.eventTime.liveBadgeTime.startTime,
          n = r.eventTime.liveBadgeTime.endTime;
        if (e >= s && e <= n) (t.splice(a, 1), (a -= 1), this.onLiveEvent(r));
        else if (e > s) (t.splice(a, 1), (a -= 1));
        else if (e < s) return;
      }
      t.length === 0 && this.unsubscribe();
    }
  }
  async onLiveEvent(t) {
    const e = this.pldfltcid,
      { appBundleIds: a, playable: r, utsClient: s } = this;
    if (!e || !s || !r) return;
    const n = this.generateEventStartEvent(t);
    await this.npPlay?.send("live", n, e, a ?? w);
  }
  generateEventStartEvent(t) {
    return { bundleId: w, millisecondsSinceEvent: 0, cause: "Event_Start", passThrough: t?.nowPlayingPassThrough };
  }
  resetListening() {
    const t = this.playMetadataLive?.schedule;
    t && t.length && ((this.scheduleItems = [...t]), this.unsubscribe(), this.subscribe());
  }
  subscribe() {
    this.dispatcher.subscribe(d.playbackTimeDidChange, this.handleTimeChange);
  }
  unsubscribe() {
    this.dispatcher.unsubscribe(d.playbackTimeDidChange, this.handleTimeChange);
  }
}
G([p()], X.prototype, "handleTimeChange");
G([p()], X.prototype, "onLiveEvent");
var Kt = Object.defineProperty,
  Yt = Object.getOwnPropertyDescriptor,
  Vt = (i, t, e, a) => {
    for (var r = Yt(t, e), s = i.length - 1, n; s >= 0; s--) (n = i[s]) && (r = n(t, e, r) || r);
    return (r && Kt(t, e, r), r);
  };
const Ut = new Set(["exit", "pause", "play", "scrub", "seek", "skip", "stop"]),
  I = L.createChild("bookmark");
class Bt extends W {
  metadata;
  cachedDuration;
  get currentPlaybackDuration() {
    let t = Math.round(this.instance.currentPlaybackDuration ?? 0);
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
    if (at(t)) {
      const e = rt(t);
      this.setupVodWatcher(e, Number.POSITIVE_INFINITY);
    }
    this.metadata = void 0;
  }
  async fetchAndSetMetadata() {
    const { playable: t, utsClient: e } = this,
      a = this.currentPlaybackDuration;
    if (!this.hasPlaybackDuration) {
      I.info("fetchAndSetMetadata - can not fetch metadata due to missing duration");
      return;
    }
    const r = {
        externalId: t.externalId,
        brandId: t.channelId,
        hlsAssetDuration: a,
        playablePassThrough: t.playablePassThrough,
      },
      s = await e?.request("getContentsPlayMetadataVOD", r);
    this.metadata = s?.data ?? s;
  }
  setupVodWatcher(t, e) {
    ((this.watcher = new it(this.dispatcher, this.onContentCompletionThreshhold, t, e, !0)),
      this.watcher.startMonitor());
  }
  async onContentCompletionThreshhold(t) {
    (await this.trackActivity("exit", t), this.dispatcher.publish(u.mediaContentComplete, this.item));
  }
  async trackActivity(t, e) {
    (I.info(`trackActivity called - eventType: ${t}, position: ${e}`),
      this.hasPlaybackDuration && (this.cachedDuration = this.instance.currentPlaybackDuration),
      this.metadataPending && this.hasPlaybackDuration && (await this.fetchAndSetMetadata()));
    let { itemTiming: a } = this;
    const { appBundleIds: r, metadata: s, playable: n, pldfltcid: c } = this;
    if (!s || !n || !a || !Ut.has(t)) {
      I.info("trackActivity - cannot track event due to missing data");
      return;
    }
    if (t === "stop") {
      const D = a.totalContentLength;
      if (!this.item?.isLinearStream && D !== void 0 && e !== void 0) {
        const F = D - e;
        F >= 0 && F < 5 && (e = D + 0.5);
      }
    }
    const A = this.currentPlaybackDuration;
    ((isNaN(a.totalContentLength) || (A && A < a.totalContentLength)) &&
      this.hasPlaybackDuration &&
      (this.itemTiming = a = { ...a, mainContentEnds: A, mainContentLength: A, totalContentLength: A }),
      I.info(`Bookmarking VOD progress at ${e}/${a.mainContentLength}`));
    const tt = this.generateVodEvent(n, s, a, e);
    await this.npPlay?.send("vod", tt, c, r ?? w);
  }
  generateVodEvent(t, e, a, r) {
    return {
      playHeadInMilliseconds: Math.floor(r * 1e3),
      mediaLengthInMilliseconds: Math.floor(a.totalContentLength * 1e3),
      mainContentInfo: {
        isDone: r >= a.mainContentEnds ? "Done" : "Not_Done",
        playHeadInMilliseconds: Math.floor(this.determineRelativePosition(r, a) * 1e3),
        lengthInMilliseconds: Math.floor(a.mainContentLength * 1e3),
        passThrough: this.metadata?.nowPlayingPassThrough ?? "",
      },
    };
  }
}
Vt([p()], Bt.prototype, "onContentCompletionThreshhold");
(u.playbackPlay, u.playbackPause, u.playbackScrub, u.playbackSeek, u.playbackSkip, u.playbackStop, u.playerExit);
L.createChild("bookmark");
const J = {
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
  Ht = /^[0-9]+\/JOC$/,
  $t = (i) => Ht.test(i),
  zt = (i, t) => !!t && J[i] === "EC3" && $t(t),
  Wt = (i, t) => {
    const e = i?.toLowerCase() ?? "";
    return zt(e, t) ? "Atmos" : (J[e] ?? i);
  },
  Gt = ["dvh1.05.01", "dvhe.05.06"],
  Xt = { PQ: "HDR", HLG: "HDR", SDH: "SDH" },
  Jt = (i) => Gt.indexOf(i) !== -1,
  qt = (i) => Xt[i] ?? i,
  jt = (i, t) => (Jt(i) ? "DolbyVision" : qt(t));
var P = ((i) => (
    (i.buffering = "buffering"),
    (i.idle = "idle"),
    (i.paused = "paused"),
    (i.playing = "playing"),
    (i.hlsMetadataPending = "hlsMetadataPending"),
    (i.hlsMetadataLoaded = "hlsMetadataLoaded"),
    i
  ))(P || {}),
  h = ((i) => (
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
  ))(h || {});
const q = "~~previous~~",
  O = {
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
            context: { reason: "BUFFERING", manual: "AUTOMATIC", fromInitialPlay: q },
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
  N = { manual: "UNKNOWN", reason: "UNKNOWN", fromInitialPlay: !1 };
class Qt {
  currentState = O.initial;
  currentContext = N;
  isAllowedTransition(t) {
    return this.getNextState(t) !== void 0;
  }
  transition(t, e = {}) {
    const a = this.getNextState(t);
    if (!a) return;
    L.debug(`[mk/activity/vpaf] Transitioning from ${this.currentState} to ${a.target} because ${t}`);
    const r = {};
    return (
      st(e, "manual") &&
        (e.manual !== void 0 ? (r.manual = e.manual ? "MANUAL" : "AUTOMATIC") : (r.manual = "UNKNOWN")),
      e.reason !== void 0 && (r.reason = e.reason),
      (this.currentContext = { ...N, ...a.context, ...r, ...this.preservePreviousContext(a.context) }),
      (this.currentState = a.target),
      this.currentContext
    );
  }
  reset() {
    ((this.currentState = O.initial), (this.currentContext = N));
  }
  getNextState(t) {
    return O.states[this.currentState].on[t];
  }
  preservePreviousContext(t) {
    const e = {};
    return (
      ["manual", "reason", "reasonType", "fromInitialPlay"].forEach((a) => {
        t[a] === q && (e[a] = this.currentContext[a]);
      }),
      e
    );
  }
}
const x = "xp_amp_tv_vpaf",
  Zt = "daf.xp.apple.com",
  te = "com.apple.tv",
  ee = "web-tv-player",
  ae = "1.0",
  re = "TV",
  ie = {
    [u.playbackPause]: h.pause,
    [u.playbackPlay]: h.play,
    [u.hlsLevelLoaded]: h.hlsMetadataLoaded,
    [u.playbackStop]: h.stop,
    [u.playerExit]: h.exit,
  },
  U = { [M.pictureinpicture]: "pictureInPicture", [M.inline]: "foreground", _default: "foreground" };
function se(i, t) {
  const e = i.defaultPlayable;
  if (e.type === "EbsEvent") return;
  let a = parseFloat(i.hlsMetadata["feature.duration"] ?? e.duration);
  for (const r of t) a += r.duration;
  return _(a);
}
function j(i) {
  return i.defaultPlayable?.vpafMetrics?.extraType === "VideoSummary";
}
function B(i) {
  const t = { url: i.attributes.url, assetId: i?.hlsMetadata?.["feature.adam-id"] };
  return (
    i.isLinearStream || (t.assetPlacement = j(i) ? "VideoSummary" : "feature"),
    i.attributes.isAdultContent === !0 && (t.sensitiveContentType = "adult"),
    t
  );
}
function ne(i) {
  return i.map((t) => {
    const e = {
      start: t.start,
      duration: t.duration,
      metricsData: { assetPlacement: t.type.replace("-", ""), assetId: t["adam-id"], isSkippable: t.skippable },
    };
    return (
      (t["dynamic-id"] || t["dynamic-slot.data-set-id"]) &&
        (e.metricsData["data.dynamicSlot.dataSetId"] = t["dynamic-id"] ?? t["dynamic-slot.data-set-id"]),
      e
    );
  });
}
function Q(i) {
  const { currentAudioTrack: t, nowPlayingItem: e } = i;
  let a, r;
  t?.kind === "description"
    ? ((r = t?.language), (a = void 0))
    : ((r = void 0), (a = t?.language ?? e?.defaultPlayable?.primaryLocale?.locale));
  let s;
  if (e?.isLinearStream && t) {
    const n = nt(t);
    ot(t) ? (s = K.Home) : ct(t) ? (s = K.Away) : n && (s = n);
  }
  return { audioLocale: a, audioDescriptionLocale: r, audioVariantId: s };
}
function oe(i) {
  const { language: t, kind: e } = i.currentTextTrack ?? {};
  return e === "captions"
    ? { subtitleLocale: void 0, closedCaptionLocale: t }
    : e === "subtitles"
      ? { subtitleLocale: t, closedCaptionLocale: void 0 }
      : { subtitleLocale: void 0, closedCaptionLocale: void 0 };
}
function H(i, t) {
  return { ...ue(), ...pe(t), ...de(t), ...he(i), ...Q(i), ...oe(i), ...z(i) };
}
function T(i, t) {
  if (t?.isLinearStream) {
    if (i.playingDate === void 0)
      throw new Error('VPAFTracker: The property `playingDate` is required on data for "linear" content');
    return i;
  }
  if (i.position === void 0) throw new Error('VPAFTracker: The property `position` is required on data "vod" content');
  return i;
}
function y(i, t) {
  if (i?.isLinearStream) {
    if (t.playingDate === void 0)
      throw new Error("VPAF: Can't report playback position for linear stream without playingDate value");
    return t.playingDate.getTime();
  }
  return _(t.position ?? 0);
}
function C(i) {
  return i.seekReasonType === b.SkipIntro;
}
function ce(i) {
  return i.seekReasonType === b.SkipToLiveManual || i.seekReasonType === b.SkipToLiveAutomatic;
}
function le(i) {
  if (i.endReasonType !== void 0) return lt[i.endReasonType];
}
function E(i) {
  return { manual: i.userInitiated, reason: le(i) };
}
function Z(i) {
  return {
    start: i.startTime,
    duration: i.endTime - i.startTime,
    metricsData: { assetId: i.id, assetPlacement: "catchUpToLive", isSkippable: !0 },
  };
}
function $(i) {
  const t = Z(i);
  return ((t.start = t.start / 1e3), (t.duration = t.duration / 1e3), t);
}
function de(i) {
  return i.defaultPlayable.vpafMetrics;
}
function he(i) {
  const t = i.videoContainerElement?.querySelector("video");
  return { videoViewportHeight: t?.clientHeight, videoViewportWidth: t?.clientWidth };
}
function ue() {
  return { downloadState: "streaming", playbackFocus: "foreground", topic: x };
}
function pe(i) {
  return { programmingType: i.isLinearStream ? "live" : "videoOnDemand" };
}
var ye = Object.defineProperty,
  Te = Object.getOwnPropertyDescriptor,
  k = (i, t, e, a) => {
    for (var r = Te(t, e), s = i.length - 1, n; s >= 0; s--) (n = i[s]) && (r = n(t, e, r) || r);
    return (r && ye(t, e, r), r);
  };
const o = L.createChild("vpaf"),
  g = "VPAF";
class f {
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
    return Array.from(Y.keys());
  }
  get isConfigured() {
    return this.instance !== void 0;
  }
  constructor() {
    this.state = new Qt();
  }
  get currentItem() {
    return this._currentItem;
  }
  set currentItem(t) {
    ((this._currentItem = t), (this.currentSkipItems = t ? dt(t) : void 0));
  }
  async configure(t) {
    if (((this.instance = t.instance), (this.dispatcher = t.services.dispatcher), !v.storekit.cid))
      try {
        await v.storekit.infoRefresh();
      } catch {}
    const e = t.services.utsAPIClient,
      a = gt(),
      r = {
        config: { configHostname: () => Zt },
        environment: {
          app() {
            return te;
          },
          appVersion() {
            return ae;
          },
          consumerId() {
            return v.storekit.cid;
          },
          consumerNs() {
            return re;
          },
          isOffline() {
            return !1;
          },
          delegateApp() {
            return ee;
          },
          osLanguages() {
            return a;
          },
          resourceRevNum() {
            return Pt.app.build;
          },
          storeFrontCountryCode() {
            return e?.configuration?.userProps?.country ?? "";
          },
        },
      },
      s = new ht(x, r);
    (s.eventRecorder.setProperties(x, { anonymous: !v.isAuthorized }),
      (this.playActivityProcessor = new ut(s)),
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
  shouldTrackPlayActivity(t, e) {
    if (!e) return !1;
    const a = e.defaultPlayable;
    if (!a || !a.vpafMetrics) return !1;
    const r = ie[t];
    return r !== void 0 ? this.state.isAllowedTransition(r) : !0;
  }
  handleEvent(t, e, a) {
    if (!this.shouldTrackPlayActivity(t, a)) return;
    const r = Y.get(t);
    r !== void 0 && typeof this[r] == "function" && this[r](a, e);
  }
  async bufferStart(t, e) {
    if ((o.debug("VPAFTracker: handling bufferStart()"), !(await this.canTrackItem(t)))) {
      o.debug("VPAFTracker: aborting bufferStart, no tracker");
      return;
    }
    if (this.state.currentState !== P.playing) {
      o.debug("VPAFTracker: aborting bufferStart, not playing");
      return;
    }
    if (this.lastTrackedEvent?.reason === "seek") {
      o.debug("VPAFTracker: aborting bufferStart, after a seek");
      return;
    }
    const a = this.state.currentContext.fromInitialPlay,
      r = y(t, T(e, t));
    (this.state.transition(h.bufferStart),
      a
        ? o.debug("VPAFTracker: bufferStart() not tracking PLAY_STOPPED, it is from initial play")
        : await this.trackEvent(l.PLAY_STOPPED, r));
  }
  async bufferEnd(t, e) {
    if ((o.debug("VPAFTracker: handling bufferEnd()"), !(await this.canTrackItem(t)))) return;
    if (this.state.currentState !== P.buffering) {
      o.debug("VPAFTracker: aborting bufferEnd, not buffering");
      return;
    }
    if (this.lastTrackedEvent?.reason === "seek") {
      o.debug("VPAFTracker: aborting bufferEnd, after a seek");
      return;
    }
    const a = this.state.currentContext.fromInitialPlay,
      r = y(t, T(e, t));
    (this.state.transition(h.bufferStop),
      a
        ? o.debug("VPAFTracker: bufferEnd() not tracking PLAY_STARTED, it is from initial play")
        : await this.trackEvent(l.PLAY_STARTED, r));
  }
  async exit(t, e = {}) {
    (await this.canTrackItem(this.currentItem)) &&
      (o.debug("VPAFTracker.exit()"),
      this.state.transition(h.exit),
      await this.trackEvent(l.PLAY_STOPPED, y(void 0, T(e, e.item))),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async pause(t, e = {}) {
    if (!(await this.canTrackItem(t))) return;
    o.debug("VPAFTracker.pause()");
    const a = y(t, T(e, t)),
      r = e.endReasonType === pt.NEXT_ITEM ? h.next : h.pause;
    (this.state.transition(r, E(e)), await this.trackEvent(l.PLAY_STOPPED, a));
  }
  async play(t, e = {}) {
    if (!(await this.canTrackItem(t))) return;
    if (t.isLinearStream && !e.playingDate) {
      (o.debug("VPAFTracker.play() - going to metadata pending state"),
        this.state.transition(h.hlsMetadataPending, E(e)));
      return;
    }
    o.debug("VPAFTracker.play()");
    const a = y(t, { position: 0, ...e });
    (this.state.transition(h.play, E(e)), await this.trackEvent(l.PLAY_STARTED, a));
  }
  async scrub(t, e = {}) {
    if (t === void 0 || e.position === void 0) return;
    const a = y(t, T(e, t));
    if (this.isScrubbing && e.endReasonType === void 0) {
      this.scrubStopPosition = a;
      return;
    }
    this.isScrubbing && this.scrubEnd(t, a);
  }
  async seek(t, e = {}) {
    if (
      t !== void 0 &&
      !(t.isLinearStream && (e.playingDate === void 0 || e.startPlayingDate === void 0)) &&
      !(!t.isLinearStream && (e.position === void 0 || e.startPosition === void 0))
    ) {
      if (ce(e)) return this.trackJumpToLive(t, e);
      if (t.currentKeyPlay) return this.currentKeyPlay ? this.trackJumpToKeyPlay(t, e) : this.trackEnterKeyPlay(t);
      if (this.currentKeyPlay) return this.trackExitKeyPlay(t, e);
      C(e) || V(e) ? await this.trackSeek(t, e) : await this.trackScrub(t, e);
    }
  }
  async skip(t, e = {}) {}
  async stop(t, e = {}) {
    if (!(await this.canTrackItem(t))) return;
    o.debug("VPAFTracker.stop()");
    const a = y(t, T(e, t));
    (this.state.transition(h.stop, E(e)),
      await this.trackEvent(l.PLAY_STOPPED, a),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async lyricsPlay(t, e) {}
  async lyricsStop() {}
  async trackSeek(t, e) {
    const a = {},
      r = this.getSkipActionName(e.position);
    C(e) && typeof r == "string" && (a.actionName = r);
    const s = { ...e, position: e.startPosition, playingDate: e.startPlayingDate };
    (await this.trackSeekStart(t, s, a), await this.trackSeekStop(t, e, a));
  }
  async trackEnterKeyPlay(t) {
    if ((o.debug("VPAFTracker.trackEnterKeyPlay"), !(await this.canTrackItem(t)))) return;
    (await this.createRollItemsTracker(t),
      this.assertRollItemsTracker(this.rollItemsTracker),
      (this.currentKeyPlay = $(t.currentKeyPlay)));
    const e = this.currentKeyPlay.start * 1e3;
    await this.rollItemsTracker.playStarted(
      e,
      this.rollItemsTracker.TYPE.MANUAL,
      this.rollItemsTracker.PLAY_START_REASON.PLAY,
      { ...this.currentKeyPlay },
    );
  }
  async trackExitKeyPlay(t, e) {
    (o.debug("VPAFTracker.trackExitKeyPlay"), this.assertRollItemsTracker(this.rollItemsTracker), S(this.tracker, g));
    const a = y(t, T(e, t));
    (await this.rollItemsTracker.playStopped(
      a,
      this.rollItemsTracker.TYPE.MANUAL,
      this.rollItemsTracker.PLAY_STOP_REASON.PLAY_OTHER,
      this.currentKeyPlay,
    ),
      await this.tracker.playStarted(
        a,
        this.rollItemsTracker.TYPE.MANUAL,
        this.rollItemsTracker.PLAY_STOP_REASON.PLAY_OTHER,
      ),
      (this.currentKeyPlay = void 0));
  }
  async trackJumpToLive(t, e) {
    (o.debug("VPAFTracker.trackJumpToLive"), this.assertRollItemsTracker(this.rollItemsTracker));
    const a = y(t, T(e, t)),
      r = e.startPlayingDate.getTime(),
      s =
        e.seekReasonType === b.SkipToLiveManual
          ? this.rollItemsTracker.TYPE.MANUAL
          : this.rollItemsTracker.TYPE.AUTOMATIC;
    (await this.rollItemsTracker.playStopped(r, s, this.rollItemsTracker.PLAY_STOP_REASON.SEEK, {
      ...this.currentKeyPlay,
      stopReasonType: this.rollItemsTracker.PLAY_STOP_REASON_TYPE.SKIP_TO_LIVE,
    }),
      (this.currentKeyPlay = void 0),
      await this.trackEvent(l.SEEK_STARTED, r, s, this.rollItemsTracker.PLAY_START_REASON.SKIP_TO_LIVE),
      await this.trackEvent(l.SEEK_STOPPED, a, s, this.rollItemsTracker.PLAY_START_REASON.SKIP_TO_LIVE),
      await this.trackEvent(l.PLAY_STARTED, a, s, this.rollItemsTracker.PLAY_START_REASON.SEEK, {
        startReasonType: this.rollItemsTracker.PLAY_START_REASON_TYPE.SKIP_TO_LIVE,
      }));
  }
  async trackJumpToKeyPlay(t, e) {
    (o.debug("VPAFTracker.trackJumpToKeyPlay"), this.assertRollItemsTracker(this.rollItemsTracker));
    const a =
        e.seekReasonType === b.Automatic ? this.rollItemsTracker.TYPE.AUTOMATIC : this.rollItemsTracker.TYPE.MANUAL,
      r = (this.currentKeyPlay.start + this.currentKeyPlay.duration) * 1e3,
      s = Math.min(e.startPlayingDate.getTime(), r),
      n = $(t.currentKeyPlay),
      c = n.start * 1e3,
      A = this.rollItemsTracker.PLAY_STOP_REASON.NEXT;
    (await this.rollItemsTracker.playStopped(s, a, A, this.currentKeyPlay),
      await this.rollItemsTracker.playStarted(c, a, A, n),
      (this.currentKeyPlay = n));
  }
  async trackSeekStart(t, e, a = {}) {
    S(this.tracker, g);
    const r =
        e.seekReasonType === b.SkipIntro
          ? this.tracker.SEEK_START_REASON.SKIP_INTRO
          : this.tracker.SEEK_START_REASON.INTERVAL,
      s = y(t, T(e, t)),
      n = this.tracker.TYPE.MANUAL;
    if (this.state.currentState === P.playing) {
      const c = C(e) ? { ...a, stopReasonType: this.tracker.PLAY_STOP_REASON_TYPE.SKIP_INTRO } : a;
      await this.trackEvent(l.PLAY_STOPPED, s, n, this.tracker.PLAY_STOP_REASON.SEEK, c);
    }
    await this.trackEvent(l.SEEK_STARTED, s, n, r, a);
  }
  async trackSeekStop(t, e, a = {}) {
    S(this.tracker, g);
    const r = V(e) ? this.tracker.SEEK_STOP_REASON.INTERVAL : this.tracker.SEEK_STOP_REASON.SKIP_INTRO,
      s = y(t, T(e, t)),
      n = this.tracker.TYPE.AUTOMATIC;
    if ((await this.trackEvent(l.SEEK_STOPPED, s, n, r, a), this.state.currentState === P.playing)) {
      const c = C(e) ? { ...a, startReasonType: this.tracker.PLAY_START_REASON_TYPE.SKIP_INTRO } : a;
      await this.trackEvent(l.PLAY_STARTED, s, n, this.tracker.PLAY_START_REASON.SEEK, c);
    }
  }
  async trackScrub(t, e) {
    const a = t.isLinearStream ? e.playingDate.getTime() : _(e.position),
      r = t.isLinearStream ? e.startPlayingDate.getTime() : _(e.startPosition);
    (await this.scrubStart(t, r), await this.scrubEnd(t, a));
  }
  async scrubStart(t, e) {
    (await this.canTrackItem(t)) &&
      (S(this.tracker, g),
      (this.isScrubbing = !0),
      (this.scrubStopPosition = e),
      this.state.currentState === P.playing &&
        (await this.trackEvent(
          l.PLAY_STOPPED,
          this.scrubStopPosition,
          this.tracker.TYPE.AUTOMATIC,
          this.tracker.PLAY_STOP_REASON.SEEK,
        )),
      await this.trackEvent(l.SEEK_STARTED, e, this.tracker.TYPE.MANUAL, this.tracker.SEEK_START_REASON.SCRUB));
  }
  async scrubEnd(t, e) {
    (S(this.tracker, g),
      await this.trackEvent(l.SEEK_STOPPED, e, this.tracker.TYPE.MANUAL, this.tracker.SEEK_STOP_REASON.SCRUB),
      this.state.currentState === P.playing &&
        (await this.trackEvent(l.PLAY_STARTED, e, this.tracker.TYPE.AUTOMATIC, this.tracker.PLAY_START_REASON.SEEK)),
      (this.isScrubbing = !1),
      (this.scrubStopPosition = void 0));
  }
  async trackEvent(t, e, a, r, s) {
    (S(this.tracker, g),
      a === void 0 && (a = this.tracker.TYPE[this.state.currentContext.manual]),
      r === void 0 &&
        (r =
          t === l.PLAY_STARTED
            ? this.tracker.PLAY_START_REASON[this.state.currentContext.reason]
            : this.tracker.PLAY_STOP_REASON[this.state.currentContext.reason]),
      o.debug(`VPAFTracker.trackEvent(${t}, ${e}, ${a}, ${r})`, s),
      await this.tracker[t].call(this.tracker, Math.round(e), a, r, s),
      (this.lastTrackedEvent = { eventType: t, position: e, type: a, reason: r, namedArgs: s }));
  }
  async createTracker(t) {
    R(this.playActivityProcessor, g);
    const { mediaActivityTracker: e } = this.playActivityProcessor,
      a = B(t),
      r = ne(yt(t)),
      s = t.defaultPlayable?.summarizedContent,
      n = j(t)
        ? {
            isSkippable: !0,
            ...(s
              ? {
                  featureAssetId: s.adamId ?? a.assetId,
                  featureCanonicalId: s.canonicalId,
                  featureReferenceId: s.contentId,
                  featureExternalId: s.externalId,
                }
              : {}),
          }
        : void 0;
    o.debug("VPAF: Creating HLS Playlist", a);
    const c = e.createHLSVideoPlaylist(0, a);
    return (
      o.debug("VPAF: adding roll items", r),
      c.addRollInfoItems(r),
      o.debug(`VPAFTracker.createTracker: creating new tracker for ${t?.id}`),
      (this.tracker = e.createTracker(c, ...(await this.getMappedPlaybackFields(t)), H(this.instance, t), {
        overallLength: se(t, r),
        featureAssetId: a.assetId,
        ...n,
      })),
      this.startSynchronizing(),
      this.tracker
    );
  }
  async createRollItemsTracker(t) {
    R(this.playActivityProcessor, g);
    const e = B(t),
      a = this.playActivityProcessor.mediaActivityTracker.createHLSVideoPlaylist(0, e);
    return (
      t.keyPlayShelf.forEach((r) => {
        const s = Z(r);
        a.addRollItem(s.start, s.duration, s.metricsData);
        const n = a.getItemForRollItem(s.start, s.duration);
        n.startPosition = s.start;
      }),
      (this.rollItemsTracker = this.playActivityProcessor?.mediaActivityTracker.createHLSRollItemsMediaActivityTracker(
        a,
        ...(await this.getMappedPlaybackFields(t)),
        H(this.instance, t),
        { extraType: "CatchUpToLive", featureAssetId: e.assetId, featureCanonicalId: t.defaultPlayable?.canonicalId },
      )),
      this.rollItemsTracker
    );
  }
  async onPlaybackStateChange(t, e) {
    const { state: a } = e,
      r = this.currentItem,
      s = {
        position: this.instance.currentPlaybackTime,
        playingDate: this.instance.currentPlayingDate,
        userInitiated: e.userInitiated ?? !1,
      },
      n = `PlaybackStates.${m[e.oldState]}`,
      c = `PlaybackStates.${m[e.state]}`;
    (o.debug(`onPlaybackStateChange: ${n} -> ${c}`, s),
      a === m.waiting
        ? ((this.isBuffering = !0),
          o.debug("VPAFTracker.onPlaybackStateChange: triggering bufferStart()", s),
          await this.bufferStart(r, s))
        : a === m.playing
          ? (this.isBuffering || this.state.currentState === P.buffering) &&
            ((this.isBuffering = !1),
            o.debug("VPAFTracker.onPlaybackStateChange: triggering bufferEnd()", s),
            await this.bufferEnd(r, s))
          : a !== m.stalled &&
            (o.debug("VPAFTracker.onPlaybackStateChange: resetting isBuffering=false"), (this.isBuffering = !1)));
  }
  async handleLevelUpdated(t, e) {
    o.debug("VPAFTracker.handleLevelUpdated()", e);
    const { audioCodec: a, audioChannelCount: r, videoRange: s, videoCodec: n } = e.level;
    if (!a && !(s && n)) return;
    const c = {};
    (a && (c.audioFormat = Wt(a, r)),
      s && n && (c.videoColorRange = jt(n, s)),
      this.tracker?.updateData(c),
      this.rollItemsTracker?.updateData(c),
      this.state?.currentState === P.hlsMetadataPending &&
        (o.debug("VPAF: HLS metadata loaded", e),
        this.state.transition(h.hlsMetadataLoaded, E(e)),
        await this.play(this.currentItem, e)));
  }
  handleAudioTrackChange() {
    if (this.tracker === void 0 || this.instance === void 0) return;
    const t = Q(this.instance);
    t && (o.debug("Updating AudioData", t), this.tracker.updateData(t), this.rollItemsTracker?.updateData(t));
  }
  handleForcedTextTrackChange(t, { textTrack: e }) {
    const a = { forcedSubtitleLocale: e?.language };
    (this.tracker?.updateData(a), this.rollItemsTracker?.updateData(a));
  }
  handlePresentationModeChange(t, { mode: e }) {
    const a = { playbackFocus: U[e] ?? U._default };
    (this.tracker?.updateData(a), this.rollItemsTracker?.updateData(a));
  }
  handleTargetWirelessChange() {
    if (this.instance !== void 0) {
      const t = z(this.instance);
      (this.tracker?.updateData(t), this.rollItemsTracker?.updateData(t));
    }
  }
  handleTextTrackChange() {
    const { tracker: t } = this;
    if (t === void 0) return;
    const e = this.instance?.currentTextTrack;
    if (!e || (e.kind !== "captions" && e?.kind !== "subtitles")) return;
    const a = e.language === "" ? void 0 : e.language,
      r = {
        closedCaptionLocale: e.kind === "captions" ? a : void 0,
        subtitleLocale: e.kind === "subtitles" ? a : void 0,
      };
    (t.updateData(r), this.rollItemsTracker?.updateData(r));
  }
  handleNowPlayingItemDidChange(t, e) {
    const { item: a } = e;
    a ||
      (o.debug("handleNowPlayingItemDidChange: calling exit and clearing currentItem"),
      this.state.transition(h.exit),
      this.stopSynchronizing(),
      (this.currentItem = void 0));
  }
  async canTrackItem(t) {
    return t === void 0 || t.defaultPlayable === void 0
      ? !1
      : (this.currentItem?.id !== t.id &&
          (this.state.transition(h.newItem), (this.currentItem = t), await this.createTracker(t)),
        this.tracker !== void 0);
  }
  getSkipActionName(t) {
    return (this.currentSkipItems ?? []).find((a) => a.target === t)?.label;
  }
  setupListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.subscribe(d.audioTrackChanged, this.handleAudioTrackChange),
      this.dispatcher.subscribe(d.textTrackChanged, this.handleTextTrackChange),
      this.dispatcher.subscribe(d.forcedTextTrackChanged, this.handleForcedTextTrackChange),
      this.dispatcher.subscribe(d.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.subscribe(d.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.subscribe(u.hlsLevelUpdated, this.handleLevelUpdated),
      this.dispatcher.subscribe(d.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange),
      this.dispatcher.subscribe(d.presentationModeDidChange, this.handlePresentationModeChange));
  }
  teardownListeners() {
    this.dispatcher !== void 0 &&
      (this.dispatcher.unsubscribe(d.audioTrackChanged, this.handleAudioTrackChange),
      this.dispatcher.unsubscribe(d.textTrackChanged, this.handleTextTrackChange),
      this.dispatcher.unsubscribe(d.forcedTextTrackChanged, this.handleForcedTextTrackChange),
      this.dispatcher.unsubscribe(d.nowPlayingItemDidChange, this.handleNowPlayingItemDidChange),
      this.dispatcher.unsubscribe(d.playbackStateDidChange, this.onPlaybackStateChange),
      this.dispatcher.unsubscribe(u.hlsLevelUpdated, this.handleLevelUpdated),
      this.dispatcher.unsubscribe(d.playbackTargetIsWirelessDidChange, this.handleTargetWirelessChange),
      this.dispatcher.unsubscribe(d.presentationModeDidChange, this.handlePresentationModeChange));
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
    const t = this.state.currentState === P.paused,
      { playbackRate: e, currentPlaybackTime: a } = this.instance,
      r = t ? 0 : e,
      s = Math.round(a * 1e3);
    (o.debug(`VPAF: synchronize rate: ${r} and current time: ${s}`), this.tracker.synchronize(r, s));
  }
  assertRollItemsTracker(t) {
    Tt(t, "VPAFTracker: Attempted to track roll item event before `trackerEnterKeyPlay` was called");
  }
  async getMappedPlaybackFields(t) {
    R(this.playActivityProcessor, g);
    const { utils: e } = this.playActivityProcessor,
      a = t.defaultPlayable,
      r = await e.eventFields.applyFieldsMap(a, "utsVpafPlayable"),
      s = await e.eventFields.applyFieldsMap(t.attributes, "utsVpafContent");
    return [r, s];
  }
}
k([p()], f.prototype, "onPlaybackStateChange");
k([p()], f.prototype, "handleLevelUpdated");
k([p()], f.prototype, "handleAudioTrackChange");
k([p()], f.prototype, "handleForcedTextTrackChange");
k([p()], f.prototype, "handlePresentationModeChange");
k([p()], f.prototype, "handleTargetWirelessChange");
k([p()], f.prototype, "handleTextTrackChange");
k([p()], f.prototype, "handleNowPlayingItemDidChange");
k([p()], f.prototype, "synchronize");
function Pe() {
  return {
    getInstance: wt,
    getInstances: Mt,
    enableMultipleInstances: Nt,
    Events: d,
    MKError: Ot,
    PlaybackBitrate: Rt,
    PlaybackStates: m,
    PlaybackMode: Dt,
    PresentationMode: M,
    PlaybackType: Lt,
    formattedMediaURL: _t,
    getPlayerType: Ct,
    getHlsJsCdnConfig: It,
    __dev: vt,
    __log: Et,
  };
}
function ge() {
  return {
    ...Pe(),
    get version() {
      return bt();
    },
    PlayActivityEndReasonType: mt,
    PlayerShuffleMode: St,
    PlayerRepeatMode: At,
    PlaybackActions: ft,
    MediaItem: kt,
  };
}
function Ae() {
  globalThis.MusicKit || (globalThis.MusicKit = ge());
}
export { Ae as setupMusicKitGlobal };
