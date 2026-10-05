import {
  M as d,
  a as h,
  b as u,
  e as m,
  P as I,
  Q as M,
  g as P,
  c as g,
  d as v,
  f as k,
  h as p,
  V as T,
  S as K,
  i as U,
  j as A,
  k as C,
  E as R,
  l as E,
  m as S,
  n as _,
  o as w,
  p as q,
  q as Q,
  r as x,
  s as G,
  t as L,
  u as N,
  v as V,
} from "./dev.js";
import "./main.js";
var b = ((t) => ((t.MEDIA_API = "media-api"), (t.UTS_CLIENT = "uts-client"), t))(b || {});
function B(t, s) {
  var a;
  if (!s.assets || t.type === "Preview") {
    t.attributes.assetUrl = s.hlsUrl || ((a = s.assets) == null ? void 0 : a.hlsUrl);
    return;
  }
  const { assets: e } = s;
  (e.fpsKeyServerUrl &&
    ((t.keyServerQueryParameters = e.fpsKeyServerQueryParameters),
    (t.keyURLs = {
      "hls-key-cert-url": e.fpsCertificateUrl,
      "hls-key-server-url": e.fpsKeyServerUrl,
      "widevine-cert-url": e.wideVineCertificateUrl,
    })),
    (t.assetURL = e.hlsUrl));
}
function y(t) {
  const { id: s, type: e, contentType: a, ...n } = t,
    r = { id: s, type: e, contentType: a, attributes: n, playables: [t] };
  return (B(r, t), new d(r));
}
class F extends h {
  get api() {
    const s = this.services.utsAPIClient;
    if (s === void 0)
      throw new u("mk-116", u.Reason.CONFIGURATION_ERROR, { description: "No client configured for UTS API" });
    return s;
  }
  async insertInQueue(s, e) {
    const a = e != null ? e : this.queue.length;
    return this.getPlaybackController().insertInQueue([y(s)], a);
  }
  async enqueuePlayables(s, e) {
    var r;
    const a = m(s).map((i) => {
      var o;
      const c = (o = i.playEvent) == null ? void 0 : o.playCursorInSeconds;
      return (c !== void 0 && this._mediaItemPlayback.playOptions.set(i.id, { startTime: c }), y(i));
    });
    (e != null && e.bingeWatching) || this.deferPlayback();
    const l = (await this.setPlaybackController(this.getPlaybackControllerByType(I.serial))).setQueue(
      new M({
        descriptor: { loaded: a },
        playbackMode: this.playbackMode,
        services: { dispatcher: this.services.dispatcher },
      }),
    );
    if (e) {
      const i = (r = this._mediaItemPlayback.playOptions.get(this.queue.nextPlayableItem.id)) != null ? r : {};
      this._mediaItemPlayback.playOptions.set(this.queue.nextPlayableItem.id, { ...i, ...e });
    }
    return l;
  }
}
function f() {
  return {
    getInstance: U,
    getInstances: A,
    enableMultipleInstances: C,
    Events: R,
    MKError: E,
    PlaybackBitrate: S,
    PlaybackStates: _,
    PlaybackMode: w,
    PresentationMode: q,
    PlaybackType: Q,
    formattedMediaURL: x,
    getPlayerType: G,
    getHlsJsCdnConfig: L,
    __dev: N,
    __log: V,
  };
}
function O() {
  return {
    ...f(),
    get version() {
      return P();
    },
    PlayActivityEndReasonType: g,
    PlayerShuffleMode: v,
    PlayerRepeatMode: k,
    PlaybackActions: p,
    MediaItem: d,
  };
}
function j() {
  return {
    ...f(),
    get version() {
      return P();
    },
    PlayActivityEndReasonType: T,
    SKRealm: K,
    SupportedAPIs: b,
    MediaKitInstance: F,
  };
}
function J() {
  globalThis.MusicKit || (globalThis.MusicKit = O());
}
function W() {
  globalThis.MusicKit || (globalThis.MusicKit = j());
}
export { W as setupMediaKitGlobal, J as setupMusicKitGlobal };
