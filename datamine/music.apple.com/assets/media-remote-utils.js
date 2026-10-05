import { a3 as l, a4 as r, a5 as f } from "./main.js";
import { A as c, R as o, al as p } from "./group-session-proto.js";
function P(e) {
  var s, m, t, b;
  const u = e == null ? void 0 : e.userInfoData,
    i = (u == null ? void 0 : u.raSty) === 1 && u.raTy === 4,
    n = { type: "song" };
  return (
    (n.id =
      (s = e == null ? void 0 : e.iTunesStoreSubscriptionIdentifier) != null
        ? s
        : e == null
          ? void 0
          : e.iTunesStoreIdentifier),
    (n.attributes = {
      name: e == null ? void 0 : e.title,
      albumName: e == null ? void 0 : e.albumName,
      artistName: e == null ? void 0 : e.trackArtistName,
      composerName: e == null ? void 0 : e.composer,
      genreNames: [e == null ? void 0 : e.genre],
      durationInMillis: (e == null ? void 0 : e.duration) * 1e3,
      hasLyrics: e == null ? void 0 : e.lyricsAvailable,
      discNumber: e == null ? void 0 : e.discNumber,
      trackNumber: e == null ? void 0 : e.trackNumber,
      artwork: { url: S(e == null ? void 0 : e.artworkIdentifier), width: 600, height: 600 },
      playParams: { id: n.id, type: "song", format: (e != null && e.isAlwaysLive) || i ? "stream" : void 0 },
      elapsedTime: e == null ? void 0 : e.elapsedTime,
      elapsedTimeTimestamp: e == null ? void 0 : e.elapsedTimeTimestamp,
      playbackRate: e == null ? void 0 : e.playbackRate,
      isLive: e == null ? void 0 : e.isAlwaysLive,
      participantIdentifier: (m = e == null ? void 0 : e.participantIdentifier) != null ? m : null,
      participantName: (t = e == null ? void 0 : e.participantName) != null ? t : null,
      isResolvableParticipant: (b = e == null ? void 0 : e.isResolvableParticipant) != null ? b : !1,
      streamingRadioSubType: i ? "Episode" : void 0,
    }),
    n
  );
}
function k(e) {
  var i;
  return {
    queue: ((i = e.queue) == null
      ? void 0
      : i.map((n) => {
          try {
            return P(n);
          } catch (s) {
            console.error("Error in creating media item: ", s);
          }
        })
    ).filter(Boolean),
    playbackState: h(e.playbackState),
    repeatMode: M(e.repeatMode),
    shuffleMode: y(e.shuffleMode),
    autoPlay: e.autoPlay,
    volume: e.volume,
    capabilities: e.capabilities,
  };
}
function y(e) {
  switch (e) {
    case c.ShuffleModeProtobuf_Unknown:
    case c.ShuffleModeProtobuf_Off:
      return l.off;
    case c.ShuffleModeProtobuf_Songs:
      return l.songs;
    default:
      return l.off;
  }
}
function M(e) {
  switch (e) {
    case o.RepeatModeProtobuf_Unknown:
    case o.RepeatModeProtobuf_None:
      return r.none;
    case o.RepeatModeProtobuf_One:
      return r.one;
    case o.RepeatModeProtobuf_All:
      return r.all;
    default:
      return r.none;
  }
}
function g(e) {
  switch (e) {
    case r.none:
      return o.RepeatModeProtobuf_None;
    case r.one:
      return o.RepeatModeProtobuf_One;
    case r.all:
      return o.RepeatModeProtobuf_All;
    default:
      return o.RepeatModeProtobuf_Unknown;
  }
}
function h(e) {
  switch (e) {
    case p.PlaybackStateProtobuf_Playing:
      return f.playing;
    default:
      return f.paused;
  }
}
function v(e) {
  switch (e) {
    case f.playing:
      return p.PlaybackStateProtobuf_Playing;
    default:
      return p.PlaybackStateProtobuf_Paused;
  }
}
function S(e) {
  return e != null && e.includes("https://") ? e : `https://is1-ssl.mzstatic.com/image/thumb/${e}/{w}x{h}bb.jpg`;
}
export {
  h as convertPlaybackStateToInstanceValue,
  v as convertPlaybackStateToMediaRemoteValue,
  M as convertRepeatModeToInstanceValue,
  g as convertRepeatModeToMediaRemoteValue,
  y as convertShuffleModeToInstanceValue,
  k as transformMRStateToPlaybackState,
};
