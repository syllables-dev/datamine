import {
  M as u,
  a as P,
  e as p,
  P as f,
  Q as h,
  g as y,
  b as m,
  c as I,
  d as k,
  f as M,
  V as g,
  S as v,
  h as T,
  i as K,
  j as U,
  k as R,
  E as A,
  l as C,
  m as E,
  n as S,
  o as _,
  p as w,
  q,
  r as Q,
  s as x,
  t as G,
} from "./dev.js";
import { bj as o, bk as O, bl as L } from "./main.js";
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
class V extends P {
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
function b() {
  return {
    getInstance: K,
    getInstances: U,
    enableMultipleInstances: R,
    Events: A,
    MKError: O,
    PlaybackBitrate: C,
    PlaybackStates: E,
    PlaybackMode: S,
    PresentationMode: _,
    PlaybackType: w,
    formattedMediaURL: L,
    getPlayerType: q,
    getHlsJsCdnConfig: Q,
    __dev: x,
    __log: G,
  };
}
function B() {
  return {
    ...b(),
    get version() {
      return y();
    },
    PlayActivityEndReasonType: m,
    PlayerShuffleMode: I,
    PlayerRepeatMode: k,
    PlaybackActions: M,
    MediaItem: u,
  };
}
function F() {
  return {
    ...b(),
    get version() {
      return y();
    },
    PlayActivityEndReasonType: g,
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
