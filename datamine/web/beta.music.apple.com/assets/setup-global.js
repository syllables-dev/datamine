import {
  M as u,
  a as b,
  e as p,
  P as f,
  Q as h,
  g as y,
  b as m,
  c as I,
  d as M,
  f as g,
  V as k,
  S as v,
  h as T,
  i as K,
  j as U,
  k as A,
  E as C,
  l as R,
  m as E,
  n as S,
  o as _,
  p as w,
  q,
  r as Q,
  s as x,
  t as G,
} from "./dev.js";
import { aA as o, aB as O, aC as B } from "./main.js";
var d = ((e) => ((e.MEDIA_API = "media-api"), (e.UTS_CLIENT = "uts-client"), e))(d || {});
function L(e, s) {
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
  return (L(a, e), new u(a));
}
class N extends b {
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
    enableMultipleInstances: A,
    Events: C,
    MKError: O,
    PlaybackBitrate: R,
    PlaybackStates: E,
    PlaybackMode: S,
    PresentationMode: _,
    PlaybackType: w,
    formattedMediaURL: B,
    getPlayerType: q,
    getHlsJsCdnConfig: Q,
    __dev: x,
    __log: G,
  };
}
function V() {
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
    MediaKitInstance: N,
  };
}
function H() {
  globalThis.MusicKit || (globalThis.MusicKit = V());
}
function J() {
  globalThis.MusicKit || (globalThis.MusicKit = F());
}
export { J as setupMediaKitGlobal, H as setupMusicKitGlobal };
