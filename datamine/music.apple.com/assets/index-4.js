var q = Object.defineProperty;
var O = (r, i, e) => (i in r ? q(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[i] = e));
var c = (r, i, e) => (O(r, typeof i != "symbol" ? i + "" : i, e), e);
import { b as V } from "./binary-array.js";
import { $ as H, a0 as F, a1 as j } from "./main.js";
import {
  m as x,
  U as g,
  D as U,
  M as p,
  S as _,
  C as L,
  a as W,
  N as J,
  b as u,
  c as f,
  Q as v,
  d as B,
  G as $,
  P as h,
  e as b,
  f as K,
  g as z,
  h as S,
  i as Y,
  j as X,
  k as m,
  l,
  n as R,
  o as M,
  p as C,
  q as P,
  r as I,
  s as k,
  t as T,
} from "./group-session-proto.js";
import {
  ae as ye,
  X as fe,
  Y as me,
  z as ge,
  aA as be,
  I as Pe,
  _ as Se,
  aB as Me,
  E as Ce,
  aE as Ie,
  a8 as ve,
  a9 as Re,
  af as ke,
  ag as Te,
  ac as we,
  u as Ee,
  ak as De,
  W as Ae,
  V as Ue,
  K as _e,
  J as Le,
  L as Qe,
  aD as Ge,
  x as Ne,
  v as qe,
  Z as Oe,
  y as Ve,
  a7 as He,
  w as Fe,
  O as je,
  H as xe,
  B as We,
  a0 as Je,
  F as Be,
  al as $e,
  a1 as Ke,
  a6 as ze,
  aC as Ye,
  $ as Xe,
  at as Ze,
  au as et,
  R as tt,
  aj as at,
  a4 as st,
  a5 as it,
  a2 as ot,
  a3 as nt,
  T as rt,
  an as ct,
  ap as dt,
  ar as ut,
  as as lt,
  ao as pt,
  am as ht,
  ah as yt,
  A as ft,
  az as mt,
  av as gt,
  ay as bt,
  ax as Pt,
  aw as St,
  ab as Mt,
  aa as Ct,
  ad as It,
  ai as vt,
  aq as Rt,
} from "./group-session-proto.js";
function Q(...r) {
  const i = r.filter((t) => t !== !1 && t !== null && typeof t < "u");
  if (i.some((t) => Array.isArray(t)))
    return i.every((t) => Array.isArray(t)) ? Array.prototype.concat.apply([], i) : i[i.length - 1];
  if (!Z(i)) return i[i.length - 1];
  const e = {};
  for (let t of i) for (let [a, s] of Object.entries(t)) e.hasOwnProperty(a) ? (e[a] = Q(e[a], s)) : (e[a] = s);
  return e;
}
function Z(r) {
  return r.every((i) => typeof i == "object");
}
const ee = EventTarget;
var E = ((r) => (
  (r[(r.HEAD = 0)] = "HEAD"),
  (r[(r.TAIL = 1)] = "TAIL"),
  (r[(r.LAST = 2)] = "LAST"),
  (r[(r.SPECIFIED = 3)] = "SPECIFIED"),
  r
))(E || {});
const te = EventTarget;
class D {
  static add(i, e) {
    const t = this.buffer;
    ((this.buffer = new Uint8Array(t.length + i.length)),
      this.buffer.set(t, 0),
      this.buffer.set(i, t.length),
      this.isProcessing || ((this.isProcessing = !0), this.process(e)));
  }
  static process(i) {
    if (this.buffer.length > 0) {
      const e = x.Reader.create(this.buffer),
        t = e.uint32();
      if (t > 0) {
        const a = t + e.pos;
        if (a <= e.len) return (i(this.buffer.slice(0, a)), (this.buffer = this.buffer.slice(a)), this.process(i));
      } else ((this.buffer = new Uint8Array(0)), i(this.buffer));
    }
    this.isProcessing = !1;
  }
}
(c(D, "buffer", new Uint8Array(0)), c(D, "isProcessing", !1));
const ae = 1,
  se = 50,
  G = 7e3,
  ie = 2e3;
class ue extends ee {
  constructor(e, t, a) {
    super();
    c(this, "replyMap", new Map());
    c(this, "networkProvider");
    c(this, "client");
    c(this, "ready", !1);
    c(this, "itemCache", new H(60));
    c(this, "queue", []);
    c(this, "playback", {
      playbackState: 0,
      shuffleMode: 0,
      repeatMode: 0,
      volume: 0,
      autoPlay: !1,
      capabilities: { volumeControl: !1, autoPlayControl: !1, shuffleControl: !1, repeatControl: !1 },
    });
    c(this, "_participantIdentity");
    c(this, "participantItemMap", new Map());
    c(this, "logger");
    c(this, "_isSubscribed", !1);
    ((this.networkProvider = e), (this.client = { bundleIdentifier: t }), (this.logger = a));
  }
  get mediaState() {
    return {
      ...this.playback,
      queue: this.queue.map((e) => {
        if (this.itemCache.has(e)) {
          const t = this.itemCache.get(e);
          if (this.participantItemMap.has(t.participantIdentifier)) {
            const a = this.participantItemMap.get(t.participantIdentifier);
            ((t.participantIdentifier = a.identifier),
              (t.participantName = a.displayName),
              (t.isResolvableParticipant = a.type === g.UserIdentityType.ResolvableIdentity));
          }
          return t;
        }
        return null;
      }),
      currentPlayingIndex: 0,
    };
  }
  get connected() {
    return this.ready;
  }
  set participantIdentity(e) {
    this._participantIdentity = g.create(e);
  }
  set isSubscribed(e) {
    this._isSubscribed = e;
  }
  async connect(e, t) {
    var d;
    if (this.ready && (await this.checkConnectionHealth())) {
      ((d = this.logger) == null || d.debug("Already connected to Media Remote Host"),
        this.dispatchEvent(new Event("ready")));
      return;
    }
    const a = setTimeout(() => {
      this.dispatchEvent(new Event("end"));
    }, G);
    this.participantIdentity = t;
    const s = U.create({
      protocolVersion: ae,
      supportsSharedQueue: !0,
      lastSupportedMessageType: p.MediaRemoteMessageType_LastMessageType,
      preferredEncoding: U.PreferredEncoding.JSON,
      ...e,
    });
    await this.sendWithReply(p.MediaRemoteMessageType_DeviceInfo, { deviceInfoMessage: s });
    const o = _.create({ state: L.ConnectionStateProtobuf_Connected });
    this.send(p.MediaRemoteMessageType_SetConnectionState, { connectionState: o });
    const n = W.create({
      nowPlayingUpdates: !0,
      artworkUpdates: !0,
      volumeUpdates: !0,
      subscribedPlayerPaths: [J.create({ client: this.client })],
    });
    (await this.sendWithReply(p.MediaRemoteMessageType_ClientUpdatesConfiguration, { clientUpdatesConfigMessage: n }),
      await this.getVolume(),
      (this.ready = !0),
      clearTimeout(a),
      this.dispatchEvent(new Event("ready")));
  }
  play() {
    return this.performCommand(u.CommandProtobuf_Play);
  }
  pause() {
    return this.performCommand(u.CommandProtobuf_Pause);
  }
  skipTrack(e) {
    return e === "next"
      ? this.performCommand(u.CommandProtobuf_NextTrack)
      : this.performCommand(u.CommandProtobuf_PreviousTrack);
  }
  toggleShuffle() {
    return this.performCommand(u.CommandProtobuf_AdvanceShuffleMode);
  }
  toggleRepeat() {
    return this.performCommand(u.CommandProtobuf_AdvanceRepeatMode);
  }
  setPlaybackPosition(e) {
    if (e == null) {
      this.logger.error("Please input correct playback position");
      return;
    }
    const t = f.create({ playbackPosition: e });
    return this.performCommand(u.CommandProtobuf_SeekToPlaybackPosition, t);
  }
  toggleAutoPlay() {
    const e = f.create({ queueEndAction: this.playback.autoPlay ? v.None : v.AutoPlay });
    return this.performCommand(u.CommandProtobuf_ChangeQueueEndAction, e);
  }
  setVolume(e) {
    const t = B.create({ volume: e });
    return this.sendWithReply(p.MediaRemoteMessageType_SetVolume, { setVolumeMessage: t });
  }
  async getVolume() {
    var s, o, n, d;
    const e = await this.sendWithReply(p.MediaRemoteMessageType_GetVolumeControlCapabilities, {
        getVolumeControlCapabilitiesMessage: {},
      }),
      t = $.create({}),
      a = await this.sendWithReply(p.MediaRemoteMessageType_GetVolume, { getVolumeMessage: t });
    return (
      (this.playback.capabilities.volumeControl =
        (n =
          (o =
            (s = e == null ? void 0 : e.getVolumeControlCapabilitiesResultMessage) == null ? void 0 : s.capabilities) ==
          null
            ? void 0
            : o.volumeControlAvailable) != null
          ? n
          : !1),
      (this.playback.volume = (d = a == null ? void 0 : a.getVolumeResultMessage) == null ? void 0 : d.volume),
      a.getVolumeResultMessage.volume
    );
  }
  playQueueItem(e) {
    var a;
    const t = f.create({ contentItemID: (a = this.queue) == null ? void 0 : a[e] });
    return this.performCommand(u.CommandProtobuf_PlayItemInPlaybackQueue, t);
  }
  playNext(e, t) {
    this.insertToPlaybackQueue(e, t, E.HEAD);
  }
  playLast(e, t) {
    this.insertToPlaybackQueue(e, t, E.LAST);
  }
  playRadioStation(e, t) {
    const a = h.RadioCreationProperties.create({
        playActivityFeatureName: e,
        accountInfo: this.buildDelegateInfoWithAccountInfo(),
        ...t,
      }),
      s = h.RadioCreationProperties.encode(a).finish(),
      o = f.create({
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(
          b.SystemPlaybackCustomDataQueueProtobuf.create({
            identifier: "com.apple.music.playbackqueue.radio",
            data: s,
          }),
          { isRequestingImmediatePlayback: !0 },
        ),
        applicationUserIdentity: g.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(u.CommandProtobuf_SetPlaybackQueue, o);
  }
  async getPlaybackQueue(e, t = 0) {
    var n, d, y;
    const a = K.create({
        location: t,
        length: e,
        includeMetadata: !0,
        includeParticipants: !0,
        contentItemIdentifiers: Array.from(this.itemCache.keys()),
        playerPath: { client: this.client },
      }),
      s = await this.sendWithReply(p.MediaRemoteMessageType_PlaybackQueueRequest, { playbackQueueRequest: a }),
      o =
        (y =
          (d = (n = s == null ? void 0 : s.setStateMessage) == null ? void 0 : n.playbackQueue) == null
            ? void 0
            : d.contentItem) != null
          ? y
          : [];
    ((this.queue = o.map(this.updateContentItemCache.bind(this))), this.logger.debug(this.itemCache));
  }
  setPlaybackQueue(e, t, a) {
    const s = this.buildPlaybackTrackListData(e, t, {
        shuffleMode: a ? h.Tracklist.ShuffleMode.SONGS : h.Tracklist.ShuffleMode.NONE,
      }),
      o = f.create({
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(s, { isRequestingImmediatePlayback: !0 }),
        applicationUserIdentity: g.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(u.CommandProtobuf_SetPlaybackQueue, o);
  }
  insertToPlaybackQueue(e, t, a, s) {
    var d;
    const o = this.buildPlaybackTrackListData(e, t),
      n = f.create({
        playbackQueueInsertionPosition: a,
        insertBeforeContentItemID: (d = this.queue) == null ? void 0 : d[s],
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(o),
        applicationUserIdentity: g.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(u.CommandProtobuf_InsertIntoPlaybackQueue, n);
  }
  removeFromPlaybackQueue(e) {
    var a;
    const t = f.create({ contentItemID: (a = this.queue) == null ? void 0 : a[e] });
    return this.performCommand(u.CommandProtobuf_RemoveFromPlaybackQueue, t);
  }
  reorderPlaybackQueue(e, t) {
    var s, o;
    const a = f.create({
      contentItemID: (s = this.queue) == null ? void 0 : s[e],
      insertBeforeContentItemID: (o = this.queue) == null ? void 0 : o[t],
    });
    return this.performCommand(u.CommandProtobuf_ReorderPlaybackQueue, a);
  }
  buildPlaybackTrackListData(e, t, a) {
    const s = h.Tracklist.create({
      container: t.map((o) =>
        h.Container.create({
          containerType: o == null ? void 0 : o.containerType,
          identifierSet: h.ContainerIdentifierSet.create(o == null ? void 0 : o.identifierSet),
          item: o.items.map((n) =>
            h.Item.create({
              mediaType: n == null ? void 0 : n.mediaType,
              identifierSet: h.ItemIdentifierSet.create(n == null ? void 0 : n.identifierSet),
            }),
          ),
          playActivityFeatureName: e,
        }),
      ),
      accountInfo: [this.buildDelegateInfoWithAccountInfo()],
      ...a,
    });
    return b.SystemPlaybackCustomDataQueueProtobuf.create({
      identifier: "com.apple.music.playbackqueue.tracklist",
      data: h.Tracklist.encode(s).finish(),
    });
  }
  buildSystemPlaybackQueue(e, t) {
    return b.create({
      type: b.SystemPlaybackQueueType.SystemPlaybackQueueTypeCustom,
      replaceIntent: b.SystemPlaybackQueueReplaceIntent.SystemPlaybackQueueReplaceIntentClearUpNext,
      customData: e,
      ...t,
    });
  }
  buildDelegateInfoWithAccountInfo() {
    return h.DelegateInfo.create({
      accountCapabilities: [
        this._isSubscribed
          ? h.DelegateInfo.AccountCapabilities.CATALOG_PLAYBACK
          : h.DelegateInfo.AccountCapabilities.NONE,
      ],
    });
  }
  disconnect() {
    const e = _.create({ state: L.ConnectionStateProtobuf_Disconnected });
    (this.send(p.MediaRemoteMessageType_SetConnectionState, { connectionState: e }), (this.ready = !1));
  }
  onMessage(e) {
    D.add(e, this.decode.bind(this));
  }
  updateContentItemCache(e) {
    let t = this.processContentItem(e.metadata);
    if (this.itemCache.has(e.identifier)) {
      const a = this.itemCache.get(e.identifier);
      t = new z(Q(a, t));
    }
    return (
      e.associatedParticipantIdentifier && (t.participantIdentifier = e.associatedParticipantIdentifier),
      this.itemCache.set(e.identifier, t),
      e.identifier
    );
  }
  processContentItem(e) {
    var t;
    return (
      (t = Object.keys(e)) == null ||
        t.forEach((a) => {
          e[a] instanceof Uint8Array && (e[a] = V(e[a]));
        }),
      e
    );
  }
  async onSetStateMessage(e) {
    var t;
    (e.playbackState > 0 && (this.playback.playbackState = e.playbackState),
      e.supportedCommands &&
        (this.playback =
          (t = e.supportedCommands) == null
            ? void 0
            : t.supportedCommand.reduce((a, s) => {
                var o, n, d;
                switch (s.command) {
                  case u.CommandProtobuf_ChangeShuffleMode:
                    return {
                      ...a,
                      shuffleMode: s.shuffleMode,
                      capabilities: { ...a.capabilities, shuffleControl: (o = s.enabled) != null ? o : !1 },
                    };
                  case u.CommandProtobuf_ChangeRepeatMode:
                    return {
                      ...a,
                      repeatMode: s.repeatMode,
                      capabilities: { ...a.capabilities, repeatControl: (n = s.enabled) != null ? n : !1 },
                    };
                  case u.CommandProtobuf_ChangeQueueEndAction:
                    return {
                      ...a,
                      autoPlay: s.currentQueueEndAction === v.AutoPlay,
                      capabilities: { ...a.capabilities, autoPlayControl: (d = s.enabled) != null ? d : !1 },
                    };
                  default:
                    return a;
                }
              }, this.playback)),
      e.playbackQueue && (await this.getPlaybackQueue(se)),
      this.sendStateUpdates());
  }
  onUpdateContentItems(e) {
    (e.contentItems.forEach(this.updateContentItemCache.bind(this)), this.sendStateUpdates());
  }
  onVolumeChange(e) {
    var t;
    ((this.playback.volume = (t = e.volume) != null ? t : this.playback.volume), this.sendStateUpdates());
  }
  onPlayerClientParticipantsUpdate(e) {
    var t;
    ((t = e.participants) == null ||
      t.forEach((a) => {
        this.participantItemMap.has(a.identifier) || this.participantItemMap.set(a.identifier, a.identity);
      }),
      this.sendStateUpdates());
  }
  async checkConnectionHealth() {
    return new Promise(async (e) => {
      (setTimeout(() => {
        e(!1);
      }, ie),
        await this.onSetStateMessage({ playbackQueue: {} }),
        e(!0));
    });
  }
  async sendWithReply(e, t) {
    const a = window.crypto.randomUUID(),
      s = F();
    return (this.replyMap.set(a, s), this.send(e, { replyIdentifier: a, ...t }), s.promise);
  }
  send(e, t) {
    var n;
    const a = S.create({ ...t, uniqueIdentifier: window.crypto.randomUUID(), type: e }),
      s = S.verify(a);
    if (s) {
      (n = this.logger) == null || n.error("Not able to verify media remote message", s);
      return;
    }
    this.logger.debug("Msg Sent", a);
    const o = S.encodeDelimited(a).finish();
    return this.networkProvider.send(o, []);
  }
  sendStateUpdates() {
    this.dispatchEvent(new MessageEvent("stateUpdates", { data: this.mediaState }));
  }
  async performCommand(e, t) {
    var o, n, d, y, A;
    const a = Y.create({ command: e, options: t, playerPath: { client: this.client } }),
      s = await this.sendWithReply(p.MediaRemoteMessageType_SendCommand, { sendCommandMessage: a });
    return (
      ((y =
        (d =
          (n = (o = s == null ? void 0 : s.sendCommandResultMessage) == null ? void 0 : o.commandResult) == null
            ? void 0
            : n.statuses) == null
          ? void 0
          : d[0]) == null
        ? void 0
        : y.statusCode) !== X.CommandHandlerStatus.CommandHandlerStatus_Success &&
        ((A = this.logger) == null || A.error("Media Remote Command Failed", s.sendCommandResultMessage)),
      s.sendCommandResultMessage
    );
  }
  decode(e) {
    var a, s, o;
    let t;
    try {
      t = S.decodeDelimited(e);
    } catch (n) {
      (a = this.logger) == null || a.error("Unable to parse the message", n);
      return;
    }
    if ((this.logger.debug("Msg Received", t), this.replyMap.has(t.replyIdentifier)))
      ((s = this.replyMap.get(t.replyIdentifier)) == null || s.resolve(t), this.replyMap.delete(t.replyIdentifier));
    else
      switch (t.type) {
        case p.MediaRemoteMessageType_SetState:
          this.onSetStateMessage(t.setStateMessage);
          return;
        case p.MediaRemoteMessageType_UpdateContentItems:
          this.onUpdateContentItems(t.updateContentItemMessage);
          return;
        case p.MediaRemoteMessageType_SetDefaultSupportedCommands:
          this.onSetStateMessage(t.setDefaultSupportedCommandsMessage);
          return;
        case p.MediaRemoteMessageType_VolumeDidChange:
          this.onVolumeChange(t.volumeDidChangeMessage);
          return;
        case p.MediaRemoteMessageType_PlayerClientParticipantsUpdate:
          this.onPlayerClientParticipantsUpdate(t.playerClientParticipantsUpdateMessage);
          return;
        default:
          (o = this.logger) == null || o.debug("Message not supported", t);
          return;
      }
  }
}
class le extends te {
  constructor(e) {
    super();
    c(this, "networkProvider");
    c(this, "_inSession", !1);
    c(this, "leaderParticipantID");
    c(this, "localParticipantID");
    c(this, "leaderParticipantHandle");
    c(this, "participantMap", new Map());
    c(this, "logger");
    this.logger = e;
  }
  get leaderParticipant() {
    return this.participantMap.get(this.leaderParticipantID) || null;
  }
  get localParticipant() {
    return this.participantMap.get(this.localParticipantID) || null;
  }
  get participants() {
    return Array.from(this.participantMap.values());
  }
  get messenger() {
    return this.networkProvider;
  }
  set messenger(e) {
    ((this.networkProvider = e),
      this.networkProvider.addEventListener("message", this.onMessage.bind(this)),
      this.networkProvider.addEventListener("participantschange", (t) => {
        const { removed: a } = t;
        a != null &&
          a.includes(this.leaderParticipantHandle) &&
          ((this.leaderParticipantHandle = void 0),
          (this.inSession = !1),
          this.dispatchEvent(new Event("reconnecting")));
      }));
  }
  get inSession() {
    return this.networkProvider.connectionState === "open" && this._inSession;
  }
  set inSession(e) {
    this._inSession = e;
  }
  setLeaderParticipant(e) {
    (this.addParticipant(e), (this.leaderParticipantID = e.identifier));
  }
  setLocalParticipant(e) {
    (this.addParticipant(e), (this.localParticipantID = e.identifier));
  }
  addParticipants(e) {
    e.map((t) => {
      this.addParticipant(t);
    });
  }
  addParticipant(e) {
    this.participantMap.has(e.identifier) || this.participantMap.set(e.identifier, e);
  }
  removeParticipants(e) {
    e.map((t) => {
      this.removeParticipant(t);
    });
  }
  removeParticipant(e) {
    this.participantMap.has(e.identifier) && this.participantMap.delete(e.identifier);
  }
  updateSessionState(e) {
    (this.participantMap.clear(),
      this.addParticipants([...e.participants, ...e.pendingParticipants]),
      this.dispatchEvent(new MessageEvent("stateUpdates", { data: this.getSessionState() })));
  }
  approveParticipant(e) {
    var t;
    if (this.participantMap.has(e) && !this.participantMap.get(e).connected) {
      const a = m.create({ participantIdentifier: e, approved: !0 }),
        s = m.verify(a);
      if (s) throw ((t = this.logger) == null || t.error("Invalid Identity", s), new Error(s));
      this.send(l.GroupSessionFastSyncMessageType.RemoteJoinResponse, m.encode(a).finish());
    }
  }
  rejectParticipant(e) {
    var t;
    if (this.participantMap.has(e) && !this.participantMap.get(e).connected) {
      const a = m.create({ participantIdentifier: e, approved: !1 }),
        s = m.verify(a);
      if (s) throw ((t = this.logger) == null || t.error("Invalid Identity", s), new Error(s));
      this.send(l.GroupSessionFastSyncMessageType.RemoteJoinResponse, m.encode(a).finish());
    }
  }
  requestRemoveParticipant(e) {
    var t;
    if (this.participantMap.has(e) && this.participantMap.get(e).guest) {
      const a = R.create({ participantIdentifier: e }),
        s = R.verify(a);
      if (s) throw ((t = this.logger) == null || t.error("Invalid Identity", s), new Error(s));
      (this.send(l.GroupSessionFastSyncMessageType.RemoteRemoveRequest, R.encode(a).finish()),
        this.removeParticipant({ identifier: e }));
    }
  }
  send(e, t, a) {
    var d, y;
    const s = l.create({ messageType: e, payload: t }),
      o = l.verify(s);
    (o && ((d = this.logger) == null || d.error(`Invalid Group Session Message: ${o}`)),
      this.logger.debug("Msg sent", s));
    const n = [...(a || [])];
    (this.leaderParticipantHandle && n.push(this.leaderParticipantHandle),
      (y = this.networkProvider) == null || y.send(l.encode(s).finish(), { participantIds: n }));
  }
  onMessage(e) {
    var s, o, n;
    const t = e.data,
      a = l.decode(t);
    switch ((this.logger.debug("Msg Received", a), a.messageType)) {
      case l.GroupSessionFastSyncMessageType.LeaderDiscovery:
        ((this.leaderParticipantHandle = (s = e.source) != null ? s : null),
          this.dispatchEvent(new MessageEvent("leaderDiscovery", { data: I.decode(a.payload) })));
        break;
      case l.GroupSessionFastSyncMessageType.IdentityShare:
        this.dispatchEvent(
          new MessageEvent("identityShare", {
            data: { identifier: (o = e.source) != null ? o : null, identity: P.decode(a.payload) },
          }),
        );
        break;
      case l.GroupSessionFastSyncMessageType.IdentityShareReply:
        this.dispatchEvent(new MessageEvent("identityShareReply", { data: C.decode(a.payload) }));
        break;
      case l.GroupSessionFastSyncMessageType.MemberSync:
        this.dispatchEvent(new MessageEvent("memberSync", { data: M.decode(a.payload) }));
        break;
      case l.GroupSessionFastSyncMessageType.RemoteControl:
        this.dispatchEvent(new MessageEvent("mediaRemote", { data: a.payload }));
        break;
      case l.GroupSessionFastSyncMessageType.SessionEnd:
        (this.end(), this.dispatchEvent(new Event("sessionEnd")));
        break;
      default:
        (n = this.logger) == null || n.error("Invalid Message Type", a.messageType);
    }
  }
  end() {
    ((this.inSession = !1),
      (this.leaderParticipantID = null),
      (this.localParticipantID = null),
      this.participantMap.clear(),
      this.dispatchEvent(new MessageEvent("stateUpdates", { data: this.getSessionState() })));
  }
  getSessionState() {
    return {
      inSession: this.networkProvider.connectionState === "open" && this.inSession,
      members: [...this.participantMap].map(([e, t]) => ({
        profile: {
          identifier: t.identity.identifier,
          displayName: t.identity.displayName,
          isResolvable: t.identity.type === P.UserIdentityType.ResolvableIdentity,
        },
        connected: t.connected,
        isHost: t.identifier === this.leaderParticipantID,
        isLocal: t.identifier === this.localParticipantID,
        isGuest: t.guest,
        isPending: !t.connected,
        identifier: t.identifier,
      })),
    };
  }
}
function N(r) {
  var i;
  return P.create({
    identifier: (i = r.identifier) != null ? i : window.crypto.randomUUID(),
    displayName: r.displayName,
    type: r.isResolvable ? P.UserIdentityType.ResolvableIdentity : P.UserIdentityType.BasicIdentity,
  });
}
class w {
  static setup(i, e, t) {
    ((this.groupSession = i), (this.logger = t), (this.identity = N(e)));
    let a;
    (this.groupSession.addEventListener(
      "leaderDiscovery",
      j(() => {
        ((a = setTimeout(() => {
          this.groupSession.dispatchEvent(new Event("sessionEnd"));
        }, G)),
          this.sendIDS(this.identity));
      }, 1e3),
    ),
      this.groupSession.addEventListener("identityShareReply", (s) => {
        (clearTimeout(a),
          this.groupSession.setLeaderParticipant(s.data.leaderParticipant),
          this.groupSession.setLocalParticipant(s.data.localParticipant),
          this.groupSession.inSession ||
            ((this.groupSession.inSession = !0), this.groupSession.dispatchEvent(new Event("ready"))));
      }),
      this.groupSession.addEventListener("memberSync", (s) => {
        this.groupSession.updateSessionState(s.data);
      }));
  }
  static getJoinRequest() {
    var a;
    const i = k.create({ identity: this.identity }),
      e = k.verify(i);
    if (e) throw ((a = this.logger) == null || a.error("Invalid Request", e), new Error(e));
    return k.encode(i).finish();
  }
  static sendIDS(i) {
    var s;
    const e = T.create({ identity: i }),
      t = T.verify(e);
    if (t) throw ((s = this.logger) == null || s.error("Invalid Identity", t), new Error(t));
    const a = T.encode(e).finish();
    this.groupSession.send(l.GroupSessionFastSyncMessageType.IdentityShare, a);
  }
}
(c(w, "groupSession"), c(w, "logger"), c(w, "identity"));
class oe {
  static start(i, e) {
    this.groupSession = i;
    const t = N(e);
    (this.groupSession.setLocalParticipant(t),
      this.groupSession.setLeaderParticipant(i.localParticipant),
      (this.groupSession.inSession = !0),
      this.groupSession.messenger.addEventListener("participantschange", (a) => {
        var s, o;
        return this.sendLeaderDiscovery({
          identifier: (o = (s = a.added) == null ? void 0 : s[0]) == null ? void 0 : o.toString(),
        });
      }),
      this.groupSession.addEventListener("identityShare", (a) => {
        (this.groupSession.addParticipant(a.data), this.sendIDSReply(a.data), this.sendMemberSync());
      }));
  }
  static sendLeaderDiscovery(i) {
    const e = I.create({ signature: new Uint8Array() }),
      t = I.verify(e);
    if (t) throw new Error(t);
    const a = I.encode(e).finish();
    this.groupSession.send(l.GroupSessionFastSyncMessageType.LeaderDiscovery, a, [i.identifier]);
  }
  static sendIDSReply(i) {
    const e = C.create({ leaderParticipant: this.groupSession.leaderParticipant, localParticipant: i }),
      t = C.verify(e);
    if (t) throw new Error(t);
    const a = C.encode(e).finish();
    this.groupSession.send(l.GroupSessionFastSyncMessageType.IdentityShareReply, a, [i.identifier]);
  }
  static sendMemberSync() {
    const i = M.create({
        participants: this.groupSession.participants,
        members: this.groupSession.participants.map((a) => a.identity),
      }),
      e = M.verify(i);
    if (e) throw new Error(e);
    const t = M.encode(i).finish();
    this.groupSession.send(l.GroupSessionFastSyncMessageType.MemberSync, t);
  }
}
c(oe, "groupSession");
export {
  ye as AdjustVolumeMessageProtobuf,
  fe as AudioFormatProtobuf,
  me as AudioRouteProtobuf,
  W as ClientUpdatesConfigurationProtobuf,
  ge as ColorProtobuf,
  be as CommandInfoProtobuf,
  f as CommandOptionsProtobuf,
  u as CommandProtobuf,
  L as ConnectionStateProtobuf,
  z as ContentItemMetadataProtobuf,
  Pe as ContentItemProtobuf,
  Se as DataArtworkProtobuf,
  U as DeviceInfoMessageProtobuf,
  Me as DisabledReasonProtobuf,
  Ce as ErrorProtobuf,
  Ie as GetStateMessageProtobuf,
  ve as GetVolumeControlCapabilitiesMessageProtobuf,
  Re as GetVolumeControlCapabilitiesResultMessageProtobuf,
  $ as GetVolumeMessageProtobuf,
  ke as GetVolumeMutedMessageProtobuf,
  Te as GetVolumeMutedResultMessageProtobuf,
  we as GetVolumeResultMessageProtobuf,
  le as GroupSession,
  te as GroupSessionEventTarget,
  oe as GroupSessionHost,
  w as GroupSessionParticipant,
  Ee as GroupSessionRouteType,
  De as GroupTopologyModificationRequestProtobuf,
  Ae as LanguageOptionGroupProtobuf,
  Ue as LanguageOptionProtobuf,
  _e as LyricsEventProtobuf,
  Le as LyricsItemProtobuf,
  Qe as LyricsTokenProtobuf,
  ue as MediaRemote,
  ee as MediaRemoteEventTarget,
  S as MediaRemoteMessageProtobuf,
  p as MediaRemoteMessageType,
  E as MediaRemotePlaybackQueueInsertionPosition,
  Ge as NotificationMessageProtobuf,
  Ne as NowPlayingClientProtobuf,
  qe as NowPlayingClientVisibility,
  Oe as NowPlayingInfoProtobuf,
  J as NowPlayingPlayerPathProtobuf,
  Ve as NowPlayingPlayerProtobuf,
  He as OriginClientPropertiesMessageProtobuf,
  Fe as OriginProtobuf,
  je as OriginType,
  h as PlaybackQueue,
  xe as PlaybackQueueCapabilitiesProtobuf,
  We as PlaybackQueueContextProtobuf,
  Je as PlaybackQueueParticipantProtobuf,
  Be as PlaybackQueueProtobuf,
  K as PlaybackQueueRequestProtobuf,
  $e as PlaybackStateProtobuf,
  Ke as PlayerClientParticipantsUpdateMessageProtobuf,
  ze as PlayerClientPropertiesMessageProtobuf,
  Ye as PreloadedPlaybackSessionInfo,
  v as QueueEndActionProtobuf,
  Xe as RemoteArtworkProtobuf,
  Ze as RemoveClientMessageProtobuf,
  et as RemovePlayerMessageProtobuf,
  tt as RepeatModeProtobuf,
  at as RequestDetailsProtobuf,
  Y as SendCommandMessageProtobuf,
  st as SendCommandResultHandlerDialogActionProtobuf,
  it as SendCommandResultHandlerDialogProtobuf,
  X as SendCommandResultMessageProtobuf,
  ot as SendCommandResultProtobuf,
  nt as SendCommandResultStatusProtobuf,
  rt as SendLyricsEventMessageProtobuf,
  ct as SetArtworkMessageProtobuf,
  _ as SetConnectionStateMessageProtobuf,
  dt as SetHiliteModeMessageProtobuf,
  ut as SetNowPlayingClientMessageProtobuf,
  lt as SetNowPlayingPlayerMessageProtobuf,
  pt as SetReadyStateMessageProtobuf,
  ht as SetStateMessageProtobuf,
  B as SetVolumeMessageProtobuf,
  yt as SetVolumeMutedMessageProtobuf,
  ft as ShuffleModeProtobuf,
  mt as SupportedCommandsProtobuf,
  b as SystemPlaybackQueueProtobuf,
  gt as UpdateClientMessageProtobuf,
  bt as UpdateContentItemArtworkMessageProtobuf,
  Pt as UpdateContentItemMessageProtobuf,
  St as UpdatePlayerMessageProtobuf,
  g as UserIdentityProtobuf,
  Mt as VolumeControlAvailabilityProtobuf,
  Ct as VolumeControlCapabilitiesDidChangeMessageProtobuf,
  It as VolumeDidChangeMessageProtobuf,
  vt as VolumeMutedDidChangeMessageProtobuf,
  Rt as WakeDeviceMessageProtobuf,
};
