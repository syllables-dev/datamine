import {
  M as u,
  a as b,
  b as o,
  e as p,
  P as f,
  Q as h,
  g as y,
  c as m,
  d as I,
  f as M,
  h as g,
  V as k,
  S as v,
  i as T,
  j as K,
  k as U,
  l as R,
  E as A,
  m as C,
  n as E,
  o as S,
  p as _,
  q as w,
  r as q,
  s as Q,
  t as x,
  u as G,
  v as O,
  w as L,
} from "./dev.js";
import "./main.js";
var d = ((e) => ((e.MEDIA_API = "media-api"), (e.UTS_CLIENT = "uts-client"), e))(d || {});
function N(e, s) {
  if (!s.assets || e.type === "Preview") {
    e.attributes.assetUrl = s.hlsUrl || s.assets?.hlsUrl;
    return;
  }
  const { assets: t } = s;
  (t.fpsKeyServerUrl &&
    ((e.keyServerQueryParameters = t.fpsKeyServerQueryParameters),
    (e.keyURLs = {
      "hls-key-cert-url": t.fpsCertificateUrl,
      "hls-key-server-url": t.fpsKeyServerUrl,
      "widevine-cert-url": t.wideVineCertificateUrl,
    })),
    (e.assetURL = t.hlsUrl));
}
function c(e) {
  const { id: s, type: t, contentType: i, ...r } = e,
    a = { id: s, type: t, contentType: i, attributes: r, playables: [e] };
  return (N(a, e), new u(a));
}
class V extends b {
  get api() {
    const s = this.services.utsAPIClient;
    if (s === void 0)
      throw new o("mk-116", o.Reason.CONFIGURATION_ERROR, { description: "No client configured for UTS API" });
    return s;
  }
  async insertInQueue(s, t) {
    const i = t ?? this.queue.length;
    return this.getPlaybackController().insertInQueue([c(s)], i);
  }
  async enqueuePlayables(s, t) {
    const i = p(s).map((a) => {
      const l = a.playEvent?.playCursorInSeconds;
      return (l !== void 0 && this._mediaItemPlayback.playOptions.set(a.id, { startTime: l }), c(a));
    });
    t?.bingeWatching || this.deferPlayback();
    const n = (await this.setPlaybackController(this.getPlaybackControllerByType(f.serial))).setQueue(
      new h({
        descriptor: { loaded: i },
        playbackMode: this.playbackMode,
        services: { dispatcher: this.services.dispatcher },
      }),
    );
    if (t) {
      const a = this._mediaItemPlayback.playOptions.get(this.queue.nextPlayableItem.id) ?? {};
      this._mediaItemPlayback.playOptions.set(this.queue.nextPlayableItem.id, { ...a, ...t });
    }
    return n;
  }
}
function P() {
  return {
    getInstance: K,
    getInstances: U,
    enableMultipleInstances: R,
    Events: A,
    MKError: C,
    PlaybackBitrate: E,
    PlaybackStates: S,
    PlaybackMode: _,
    PresentationMode: w,
    PlaybackType: q,
    formattedMediaURL: Q,
    getPlayerType: x,
    getHlsJsCdnConfig: G,
    __dev: O,
    __log: L,
  };
}
function B() {
  return {
    ...P(),
    get version() {
      return y();
    },
    PlayActivityEndReasonType: m,
    PlayerShuffleMode: I,
    PlayerRepeatMode: M,
    PlaybackActions: g,
    MediaItem: u,
  };
}
function F() {
  return {
    ...P(),
    get version() {
      return y();
    },
    PlayActivityEndReasonType: k,
    SeekReasonType: v,
    SKRealm: T,
    SupportedAPIs: d,
    MediaKitInstance: V,
  };
}
function H() {
  globalThis.MusicKit || (globalThis.MusicKit = B());
}
function J() {
  globalThis.MusicKit || (globalThis.MusicKit = F());
}
export { J as setupMediaKitGlobal, H as setupMusicKitGlobal };
