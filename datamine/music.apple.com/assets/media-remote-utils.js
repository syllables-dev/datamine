import { a3 as i, a4 as o, a5 as s } from "./main.js";
import { A as u, R as t, al as l } from "./group-session-proto.js";
function c(e) {
  const n = e?.userInfoData,
    r = n?.raSty === 1 && n.raTy === 4,
    a = { type: "song" };
  return (
    (a.id = e?.iTunesStoreSubscriptionIdentifier ?? e?.iTunesStoreIdentifier),
    (a.attributes = {
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
      playParams: { id: a.id, type: "song", format: e?.isAlwaysLive || r ? "stream" : void 0 },
      elapsedTime: e?.elapsedTime,
      elapsedTimeTimestamp: e?.elapsedTimeTimestamp,
      playbackRate: e?.playbackRate,
      isLive: e?.isAlwaysLive,
      participantIdentifier: e?.participantIdentifier ?? null,
      participantName: e?.participantName ?? null,
      isResolvableParticipant: e?.isResolvableParticipant ?? !1,
      streamingRadioSubType: r ? "Episode" : void 0,
    }),
    a
  );
}
function y(e) {
  return {
    queue: (e.queue?.map((r) => {
      try {
        return c(r);
      } catch (a) {
        console.error("Error in creating media item: ", a);
      }
    })).filter(Boolean),
    playbackState: m(e.playbackState),
    repeatMode: p(e.repeatMode),
    shuffleMode: f(e.shuffleMode),
    autoPlay: e.autoPlay,
    volume: e.volume,
    capabilities: e.capabilities,
  };
}
function f(e) {
  switch (e) {
    case u.ShuffleModeProtobuf_Unknown:
    case u.ShuffleModeProtobuf_Off:
      return i.off;
    case u.ShuffleModeProtobuf_Songs:
      return i.songs;
    default:
      return i.off;
  }
}
function p(e) {
  switch (e) {
    case t.RepeatModeProtobuf_Unknown:
    case t.RepeatModeProtobuf_None:
      return o.none;
    case t.RepeatModeProtobuf_One:
      return o.one;
    case t.RepeatModeProtobuf_All:
      return o.all;
    default:
      return o.none;
  }
}
function M(e) {
  switch (e) {
    case o.none:
      return t.RepeatModeProtobuf_None;
    case o.one:
      return t.RepeatModeProtobuf_One;
    case o.all:
      return t.RepeatModeProtobuf_All;
    default:
      return t.RepeatModeProtobuf_Unknown;
  }
}
function m(e) {
  switch (e) {
    case l.PlaybackStateProtobuf_Playing:
      return s.playing;
    default:
      return s.paused;
  }
}
function h(e) {
  switch (e) {
    case s.playing:
      return l.PlaybackStateProtobuf_Playing;
    default:
      return l.PlaybackStateProtobuf_Paused;
  }
}
function b(e) {
  return e?.includes("https://") ? e : `https://is1-ssl.mzstatic.com/image/thumb/${e}/{w}x{h}bb.jpg`;
}
export {
  m as convertPlaybackStateToInstanceValue,
  h as convertPlaybackStateToMediaRemoteValue,
  p as convertRepeatModeToInstanceValue,
  M as convertRepeatModeToMediaRemoteValue,
  f as convertShuffleModeToInstanceValue,
  y as transformMRStateToPlaybackState,
};
