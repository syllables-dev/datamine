import { a2 as n, a3 as o, a4 as u } from "./main.js";
import { u as s, R as a, v as l } from "./group-session-proto~C9BpZV7VWW.js";
function c(e) {
  const i = e?.userInfoData,
    r = i?.raSty === 1 && i.raTy === 4,
    t = { type: "song" };
  return (
    (t.id = e?.iTunesStoreSubscriptionIdentifier ?? e?.iTunesStoreIdentifier),
    (t.attributes = {
      name: e?.title,
      albumName: e?.albumName,
      artistName: e?.trackArtistName,
      composerName: e?.composer,
      genreNames: [e?.genre],
      durationInMillis: e?.duration * 1e3,
      hasLyrics: e?.lyricsAvailable,
      discNumber: e?.discNumber,
      trackNumber: e?.trackNumber,
      artwork: { url: b(e?.artworkIdentifier), width: 600, height: 600 },
      playParams: { id: t.id, type: "song", format: e?.isAlwaysLive || r ? "stream" : void 0 },
      elapsedTime: e?.elapsedTime,
      elapsedTimeTimestamp: e?.elapsedTimeTimestamp,
      playbackRate: e?.playbackRate,
      isLive: e?.isAlwaysLive,
      participantIdentifier: e?.participantIdentifier ?? null,
      participantName: e?.participantName ?? null,
      isResolvableParticipant: e?.isResolvableParticipant ?? !1,
      streamingRadioSubType: r ? "Episode" : void 0,
    }),
    t
  );
}
function d(e) {
  return {
    queue: (e.queue?.map((r) => {
      try {
        return c(r);
      } catch (t) {
        console.error("Error in creating media item: ", t);
      }
    })).filter(Boolean),
    playbackState: p(e.playbackState),
    repeatMode: m(e.repeatMode),
    shuffleMode: f(e.shuffleMode),
    autoPlay: e.autoPlay,
    volume: e.volume,
    capabilities: e.capabilities,
  };
}
function f(e) {
  switch (e) {
    case s.ShuffleModeProtobuf_Unknown:
    case s.ShuffleModeProtobuf_Off:
      return n.off;
    case s.ShuffleModeProtobuf_Songs:
      return n.songs;
    default:
      return n.off;
  }
}
function m(e) {
  switch (e) {
    case a.RepeatModeProtobuf_Unknown:
    case a.RepeatModeProtobuf_None:
      return o.none;
    case a.RepeatModeProtobuf_One:
      return o.one;
    case a.RepeatModeProtobuf_All:
      return o.all;
    default:
      return o.none;
  }
}
function p(e) {
  switch (e) {
    case l.PlaybackStateProtobuf_Playing:
      return u.playing;
    default:
      return u.paused;
  }
}
function b(e) {
  return e?.includes("https://") ? e : `https://is1-ssl.mzstatic.com/image/thumb/${e}/{w}x{h}bb.jpg`;
}
export {
  p as convertPlaybackStateToInstanceValue,
  m as convertRepeatModeToInstanceValue,
  f as convertShuffleModeToInstanceValue,
  d as transformMRStateToPlaybackState,
};
