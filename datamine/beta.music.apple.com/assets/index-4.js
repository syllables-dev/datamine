var L = Object.defineProperty;
var Q = (i, e, t) => (e in i ? L(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t));
var p = (i, e, t) => (Q(i, typeof e != "symbol" ? e + "" : e, t), t);
import { b as G } from "./binary-array.js";
import { $ as N, a0 as q, a1 as O } from "./main.js";
import {
  m as V,
  U as y,
  D as w,
  M as c,
  S as E,
  C as D,
  a as H,
  N as F,
  b as n,
  c as l,
  Q as M,
  d as j,
  G as x,
  P as d,
  e as m,
  f as W,
  g as J,
  h as g,
  i as B,
  j as $,
  k as h,
  l as r,
  n as C,
  o as b,
  p as P,
  q as f,
  r as S,
  s as v,
  t as I,
} from "./group-session-proto.js";
import {
  ae as le,
  X as pe,
  Y as he,
  z as ye,
  aA as me,
  I as fe,
  _ as ge,
  aB as be,
  E as Pe,
  aE as Se,
  a8 as Me,
  a9 as Ce,
  af as ve,
  ag as Ie,
  ac as Re,
  u as ke,
  ak as Te,
  W as we,
  V as Ee,
  K as De,
  J as Ae,
  L as Ue,
  aD as _e,
  x as Le,
  v as Qe,
  Z as Ge,
  y as Ne,
  a7 as qe,
  w as Oe,
  O as Ve,
  H as He,
  B as Fe,
  a0 as je,
  F as xe,
  al as We,
  a1 as Je,
  a6 as Be,
  aC as $e,
  $ as Ke,
  at as ze,
  au as Ye,
  R as Xe,
  aj as Ze,
  a4 as et,
  a5 as tt,
  a2 as at,
  a3 as st,
  T as it,
  an as ot,
  ap as nt,
  ar as rt,
  as as ct,
  ao as dt,
  am as ut,
  ah as lt,
  A as pt,
  az as ht,
  av as yt,
  ay as mt,
  ax as ft,
  aw as gt,
  ab as bt,
  aa as Pt,
  ad as St,
  ai as Mt,
  aq as Ct,
} from "./group-session-proto.js";
function A(...i) {
  const e = i.filter((a) => a !== !1 && a !== null && typeof a < "u");
  if (e.some((a) => Array.isArray(a)))
    return e.every((a) => Array.isArray(a)) ? Array.prototype.concat.apply([], e) : e[e.length - 1];
  if (!K(e)) return e[e.length - 1];
  const t = {};
  for (let a of e) for (let [s, o] of Object.entries(a)) t.hasOwnProperty(s) ? (t[s] = A(t[s], o)) : (t[s] = o);
  return t;
}
function K(i) {
  return i.every((e) => typeof e == "object");
}
const z = EventTarget;
var k = ((i) => (
  (i[(i.HEAD = 0)] = "HEAD"),
  (i[(i.TAIL = 1)] = "TAIL"),
  (i[(i.LAST = 2)] = "LAST"),
  (i[(i.SPECIFIED = 3)] = "SPECIFIED"),
  i
))(k || {});
const Y = EventTarget;
class T {
  static add(e, t) {
    const a = this.buffer;
    ((this.buffer = new Uint8Array(a.length + e.length)),
      this.buffer.set(a, 0),
      this.buffer.set(e, a.length),
      this.isProcessing || ((this.isProcessing = !0), this.process(t)));
  }
  static process(e) {
    if (this.buffer.length > 0) {
      const t = V.Reader.create(this.buffer),
        a = t.uint32();
      if (a > 0) {
        const s = a + t.pos;
        if (s <= t.len) return (e(this.buffer.slice(0, s)), (this.buffer = this.buffer.slice(s)), this.process(e));
      } else ((this.buffer = new Uint8Array(0)), e(this.buffer));
    }
    this.isProcessing = !1;
  }
}
(p(T, "buffer", new Uint8Array(0)), p(T, "isProcessing", !1));
const X = 1,
  Z = 50,
  U = 7e3,
  ee = 2e3;
class re extends z {
  replyMap = new Map();
  networkProvider;
  client;
  ready = !1;
  itemCache = new N(60);
  queue = [];
  playback = {
    playbackState: 0,
    shuffleMode: 0,
    repeatMode: 0,
    volume: 0,
    autoPlay: !1,
    capabilities: { volumeControl: !1, autoPlayControl: !1, shuffleControl: !1, repeatControl: !1 },
  };
  _participantIdentity;
  participantItemMap = new Map();
  logger;
  _isSubscribed = !1;
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
              (t.isResolvableParticipant = a.type === y.UserIdentityType.ResolvableIdentity));
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
    this._participantIdentity = y.create(e);
  }
  set isSubscribed(e) {
    this._isSubscribed = e;
  }
  constructor(e, t, a) {
    (super(), (this.networkProvider = e), (this.client = { bundleIdentifier: t }), (this.logger = a));
  }
  async connect(e, t) {
    if (this.ready && (await this.checkConnectionHealth())) {
      (this.logger?.debug("Already connected to Media Remote Host"), this.dispatchEvent(new Event("ready")));
      return;
    }
    const a = setTimeout(() => {
      this.dispatchEvent(new Event("end"));
    }, U);
    this.participantIdentity = t;
    const s = w.create({
      protocolVersion: X,
      supportsSharedQueue: !0,
      lastSupportedMessageType: c.MediaRemoteMessageType_LastMessageType,
      preferredEncoding: w.PreferredEncoding.JSON,
      ...e,
    });
    await this.sendWithReply(c.MediaRemoteMessageType_DeviceInfo, { deviceInfoMessage: s });
    const o = E.create({ state: D.ConnectionStateProtobuf_Connected });
    this.send(c.MediaRemoteMessageType_SetConnectionState, { connectionState: o });
    const u = H.create({
      nowPlayingUpdates: !0,
      artworkUpdates: !0,
      volumeUpdates: !0,
      subscribedPlayerPaths: [F.create({ client: this.client })],
    });
    (await this.sendWithReply(c.MediaRemoteMessageType_ClientUpdatesConfiguration, { clientUpdatesConfigMessage: u }),
      await this.getVolume(),
      (this.ready = !0),
      clearTimeout(a),
      this.dispatchEvent(new Event("ready")));
  }
  play() {
    return this.performCommand(n.CommandProtobuf_Play);
  }
  pause() {
    return this.performCommand(n.CommandProtobuf_Pause);
  }
  skipTrack(e) {
    return e === "next"
      ? this.performCommand(n.CommandProtobuf_NextTrack)
      : this.performCommand(n.CommandProtobuf_PreviousTrack);
  }
  toggleShuffle() {
    return this.performCommand(n.CommandProtobuf_AdvanceShuffleMode);
  }
  toggleRepeat() {
    return this.performCommand(n.CommandProtobuf_AdvanceRepeatMode);
  }
  setPlaybackPosition(e) {
    if (e == null) {
      this.logger.error("Please input correct playback position");
      return;
    }
    const t = l.create({ playbackPosition: e });
    return this.performCommand(n.CommandProtobuf_SeekToPlaybackPosition, t);
  }
  toggleAutoPlay() {
    const e = l.create({ queueEndAction: this.playback.autoPlay ? M.None : M.AutoPlay });
    return this.performCommand(n.CommandProtobuf_ChangeQueueEndAction, e);
  }
  setVolume(e) {
    const t = j.create({ volume: e });
    return this.sendWithReply(c.MediaRemoteMessageType_SetVolume, { setVolumeMessage: t });
  }
  async getVolume() {
    const e = await this.sendWithReply(c.MediaRemoteMessageType_GetVolumeControlCapabilities, {
        getVolumeControlCapabilitiesMessage: {},
      }),
      t = x.create({}),
      a = await this.sendWithReply(c.MediaRemoteMessageType_GetVolume, { getVolumeMessage: t });
    return (
      (this.playback.capabilities.volumeControl =
        e?.getVolumeControlCapabilitiesResultMessage?.capabilities?.volumeControlAvailable ?? !1),
      (this.playback.volume = a?.getVolumeResultMessage?.volume),
      a.getVolumeResultMessage.volume
    );
  }
  playQueueItem(e) {
    const t = l.create({ contentItemID: this.queue?.[e] });
    return this.performCommand(n.CommandProtobuf_PlayItemInPlaybackQueue, t);
  }
  playNext(e, t) {
    this.insertToPlaybackQueue(e, t, k.HEAD);
  }
  playLast(e, t) {
    this.insertToPlaybackQueue(e, t, k.LAST);
  }
  playRadioStation(e, t) {
    const a = d.RadioCreationProperties.create({
        playActivityFeatureName: e,
        accountInfo: this.buildDelegateInfoWithAccountInfo(),
        ...t,
      }),
      s = d.RadioCreationProperties.encode(a).finish(),
      o = l.create({
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(
          m.SystemPlaybackCustomDataQueueProtobuf.create({
            identifier: "com.apple.music.playbackqueue.radio",
            data: s,
          }),
          { isRequestingImmediatePlayback: !0 },
        ),
        applicationUserIdentity: y.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(n.CommandProtobuf_SetPlaybackQueue, o);
  }
  async getPlaybackQueue(e, t = 0) {
    const a = W.create({
        location: t,
        length: e,
        includeMetadata: !0,
        includeParticipants: !0,
        contentItemIdentifiers: Array.from(this.itemCache.keys()),
        playerPath: { client: this.client },
      }),
      o =
        (await this.sendWithReply(c.MediaRemoteMessageType_PlaybackQueueRequest, { playbackQueueRequest: a }))
          ?.setStateMessage?.playbackQueue?.contentItem ?? [];
    ((this.queue = o.map(this.updateContentItemCache.bind(this))), this.logger.debug(this.itemCache));
  }
  setPlaybackQueue(e, t, a) {
    const s = this.buildPlaybackTrackListData(e, t, {
        shuffleMode: a ? d.Tracklist.ShuffleMode.SONGS : d.Tracklist.ShuffleMode.NONE,
      }),
      o = l.create({
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(s, { isRequestingImmediatePlayback: !0 }),
        applicationUserIdentity: y.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(n.CommandProtobuf_SetPlaybackQueue, o);
  }
  insertToPlaybackQueue(e, t, a, s) {
    const o = this.buildPlaybackTrackListData(e, t),
      u = l.create({
        playbackQueueInsertionPosition: a,
        insertBeforeContentItemID: this.queue?.[s],
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(o),
        applicationUserIdentity: y.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(n.CommandProtobuf_InsertIntoPlaybackQueue, u);
  }
  removeFromPlaybackQueue(e) {
    const t = l.create({ contentItemID: this.queue?.[e] });
    return this.performCommand(n.CommandProtobuf_RemoveFromPlaybackQueue, t);
  }
  reorderPlaybackQueue(e, t) {
    const a = l.create({ contentItemID: this.queue?.[e], insertBeforeContentItemID: this.queue?.[t] });
    return this.performCommand(n.CommandProtobuf_ReorderPlaybackQueue, a);
  }
  buildPlaybackTrackListData(e, t, a) {
    const s = d.Tracklist.create({
      container: t.map((o) =>
        d.Container.create({
          containerType: o?.containerType,
          identifierSet: d.ContainerIdentifierSet.create(o?.identifierSet),
          item: o.items.map((u) =>
            d.Item.create({ mediaType: u?.mediaType, identifierSet: d.ItemIdentifierSet.create(u?.identifierSet) }),
          ),
          playActivityFeatureName: e,
        }),
      ),
      accountInfo: [this.buildDelegateInfoWithAccountInfo()],
      ...a,
    });
    return m.SystemPlaybackCustomDataQueueProtobuf.create({
      identifier: "com.apple.music.playbackqueue.tracklist",
      data: d.Tracklist.encode(s).finish(),
    });
  }
  buildSystemPlaybackQueue(e, t) {
    return m.create({
      type: m.SystemPlaybackQueueType.SystemPlaybackQueueTypeCustom,
      replaceIntent: m.SystemPlaybackQueueReplaceIntent.SystemPlaybackQueueReplaceIntentClearUpNext,
      customData: e,
      ...t,
    });
  }
  buildDelegateInfoWithAccountInfo() {
    return d.DelegateInfo.create({
      accountCapabilities: [
        this._isSubscribed
          ? d.DelegateInfo.AccountCapabilities.CATALOG_PLAYBACK
          : d.DelegateInfo.AccountCapabilities.NONE,
      ],
    });
  }
  disconnect() {
    const e = E.create({ state: D.ConnectionStateProtobuf_Disconnected });
    (this.send(c.MediaRemoteMessageType_SetConnectionState, { connectionState: e }), (this.ready = !1));
  }
  onMessage(e) {
    T.add(e, this.decode.bind(this));
  }
  updateContentItemCache(e) {
    let t = this.processContentItem(e.metadata);
    if (this.itemCache.has(e.identifier)) {
      const a = this.itemCache.get(e.identifier);
      t = new J(A(a, t));
    }
    return (
      e.associatedParticipantIdentifier && (t.participantIdentifier = e.associatedParticipantIdentifier),
      this.itemCache.set(e.identifier, t),
      e.identifier
    );
  }
  processContentItem(e) {
    return (
      Object.keys(e)?.forEach((t) => {
        e[t] instanceof Uint8Array && (e[t] = G(e[t]));
      }),
      e
    );
  }
  async onSetStateMessage(e) {
    (e.playbackState > 0 && (this.playback.playbackState = e.playbackState),
      e.supportedCommands &&
        (this.playback = e.supportedCommands?.supportedCommand.reduce((t, a) => {
          switch (a.command) {
            case n.CommandProtobuf_ChangeShuffleMode:
              return {
                ...t,
                shuffleMode: a.shuffleMode,
                capabilities: { ...t.capabilities, shuffleControl: a.enabled ?? !1 },
              };
            case n.CommandProtobuf_ChangeRepeatMode:
              return {
                ...t,
                repeatMode: a.repeatMode,
                capabilities: { ...t.capabilities, repeatControl: a.enabled ?? !1 },
              };
            case n.CommandProtobuf_ChangeQueueEndAction:
              return {
                ...t,
                autoPlay: a.currentQueueEndAction === M.AutoPlay,
                capabilities: { ...t.capabilities, autoPlayControl: a.enabled ?? !1 },
              };
            default:
              return t;
          }
        }, this.playback)),
      e.playbackQueue && (await this.getPlaybackQueue(Z)),
      this.sendStateUpdates());
  }
  onUpdateContentItems(e) {
    (e.contentItems.forEach(this.updateContentItemCache.bind(this)), this.sendStateUpdates());
  }
  onVolumeChange(e) {
    ((this.playback.volume = e.volume ?? this.playback.volume), this.sendStateUpdates());
  }
  onPlayerClientParticipantsUpdate(e) {
    (e.participants?.forEach((t) => {
      this.participantItemMap.has(t.identifier) || this.participantItemMap.set(t.identifier, t.identity);
    }),
      this.sendStateUpdates());
  }
  async checkConnectionHealth() {
    return new Promise(async (e) => {
      (setTimeout(() => {
        e(!1);
      }, ee),
        await this.onSetStateMessage({ playbackQueue: {} }),
        e(!0));
    });
  }
  async sendWithReply(e, t) {
    const a = window.crypto.randomUUID(),
      s = q();
    return (this.replyMap.set(a, s), this.send(e, { replyIdentifier: a, ...t }), s.promise);
  }
  send(e, t) {
    const a = g.create({ ...t, uniqueIdentifier: window.crypto.randomUUID(), type: e }),
      s = g.verify(a);
    if (s) {
      this.logger?.error("Not able to verify media remote message", s);
      return;
    }
    this.logger.debug("Msg Sent", a);
    const o = g.encodeDelimited(a).finish();
    return this.networkProvider.send(o, []);
  }
  sendStateUpdates() {
    this.dispatchEvent(new MessageEvent("stateUpdates", { data: this.mediaState }));
  }
  async performCommand(e, t) {
    const a = B.create({ command: e, options: t, playerPath: { client: this.client } }),
      s = await this.sendWithReply(c.MediaRemoteMessageType_SendCommand, { sendCommandMessage: a });
    return (
      s?.sendCommandResultMessage?.commandResult?.statuses?.[0]?.statusCode !==
        $.CommandHandlerStatus.CommandHandlerStatus_Success &&
        this.logger?.error("Media Remote Command Failed", s.sendCommandResultMessage),
      s.sendCommandResultMessage
    );
  }
  decode(e) {
    let t;
    try {
      t = g.decodeDelimited(e);
    } catch (a) {
      this.logger?.error("Unable to parse the message", a);
      return;
    }
    if ((this.logger.debug("Msg Received", t), this.replyMap.has(t.replyIdentifier)))
      (this.replyMap.get(t.replyIdentifier)?.resolve(t), this.replyMap.delete(t.replyIdentifier));
    else
      switch (t.type) {
        case c.MediaRemoteMessageType_SetState:
          this.onSetStateMessage(t.setStateMessage);
          return;
        case c.MediaRemoteMessageType_UpdateContentItems:
          this.onUpdateContentItems(t.updateContentItemMessage);
          return;
        case c.MediaRemoteMessageType_SetDefaultSupportedCommands:
          this.onSetStateMessage(t.setDefaultSupportedCommandsMessage);
          return;
        case c.MediaRemoteMessageType_VolumeDidChange:
          this.onVolumeChange(t.volumeDidChangeMessage);
          return;
        case c.MediaRemoteMessageType_PlayerClientParticipantsUpdate:
          this.onPlayerClientParticipantsUpdate(t.playerClientParticipantsUpdateMessage);
          return;
        default:
          this.logger?.debug("Message not supported", t);
          return;
      }
  }
}
class ce extends Y {
  networkProvider;
  _inSession = !1;
  leaderParticipantID;
  localParticipantID;
  leaderParticipantHandle;
  participantMap = new Map();
  logger;
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
        a?.includes(this.leaderParticipantHandle) &&
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
  constructor(e) {
    (super(), (this.logger = e));
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
    if (this.participantMap.has(e) && !this.participantMap.get(e).connected) {
      const t = h.create({ participantIdentifier: e, approved: !0 }),
        a = h.verify(t);
      if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
      this.send(r.GroupSessionFastSyncMessageType.RemoteJoinResponse, h.encode(t).finish());
    }
  }
  rejectParticipant(e) {
    if (this.participantMap.has(e) && !this.participantMap.get(e).connected) {
      const t = h.create({ participantIdentifier: e, approved: !1 }),
        a = h.verify(t);
      if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
      this.send(r.GroupSessionFastSyncMessageType.RemoteJoinResponse, h.encode(t).finish());
    }
  }
  requestRemoveParticipant(e) {
    if (this.participantMap.has(e) && this.participantMap.get(e).guest) {
      const t = C.create({ participantIdentifier: e }),
        a = C.verify(t);
      if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
      (this.send(r.GroupSessionFastSyncMessageType.RemoteRemoveRequest, C.encode(t).finish()),
        this.removeParticipant({ identifier: e }));
    }
  }
  send(e, t, a) {
    const s = r.create({ messageType: e, payload: t }),
      o = r.verify(s);
    (o && this.logger?.error(`Invalid Group Session Message: ${o}`), this.logger.debug("Msg sent", s));
    const u = [...(a || [])];
    (this.leaderParticipantHandle && u.push(this.leaderParticipantHandle),
      this.networkProvider?.send(r.encode(s).finish(), { participantIds: u }));
  }
  onMessage(e) {
    const t = e.data,
      a = r.decode(t);
    switch ((this.logger.debug("Msg Received", a), a.messageType)) {
      case r.GroupSessionFastSyncMessageType.LeaderDiscovery:
        ((this.leaderParticipantHandle = e.source ?? null),
          this.dispatchEvent(new MessageEvent("leaderDiscovery", { data: S.decode(a.payload) })));
        break;
      case r.GroupSessionFastSyncMessageType.IdentityShare:
        this.dispatchEvent(
          new MessageEvent("identityShare", { data: { identifier: e.source ?? null, identity: f.decode(a.payload) } }),
        );
        break;
      case r.GroupSessionFastSyncMessageType.IdentityShareReply:
        this.dispatchEvent(new MessageEvent("identityShareReply", { data: P.decode(a.payload) }));
        break;
      case r.GroupSessionFastSyncMessageType.MemberSync:
        this.dispatchEvent(new MessageEvent("memberSync", { data: b.decode(a.payload) }));
        break;
      case r.GroupSessionFastSyncMessageType.RemoteControl:
        this.dispatchEvent(new MessageEvent("mediaRemote", { data: a.payload }));
        break;
      case r.GroupSessionFastSyncMessageType.SessionEnd:
        (this.end(), this.dispatchEvent(new Event("sessionEnd")));
        break;
      default:
        this.logger?.error("Invalid Message Type", a.messageType);
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
          isResolvable: t.identity.type === f.UserIdentityType.ResolvableIdentity,
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
function _(i) {
  return f.create({
    identifier: i.identifier ?? window.crypto.randomUUID(),
    displayName: i.displayName,
    type: i.isResolvable ? f.UserIdentityType.ResolvableIdentity : f.UserIdentityType.BasicIdentity,
  });
}
class R {
  static setup(e, t, a) {
    ((this.groupSession = e), (this.logger = a), (this.identity = _(t)));
    let s;
    (this.groupSession.addEventListener(
      "leaderDiscovery",
      O(() => {
        ((s = setTimeout(() => {
          this.groupSession.dispatchEvent(new Event("sessionEnd"));
        }, U)),
          this.sendIDS(this.identity));
      }, 1e3),
    ),
      this.groupSession.addEventListener("identityShareReply", (o) => {
        (clearTimeout(s),
          this.groupSession.setLeaderParticipant(o.data.leaderParticipant),
          this.groupSession.setLocalParticipant(o.data.localParticipant),
          this.groupSession.inSession ||
            ((this.groupSession.inSession = !0), this.groupSession.dispatchEvent(new Event("ready"))));
      }),
      this.groupSession.addEventListener("memberSync", (o) => {
        this.groupSession.updateSessionState(o.data);
      }));
  }
  static getJoinRequest() {
    const e = v.create({ identity: this.identity }),
      t = v.verify(e);
    if (t) throw (this.logger?.error("Invalid Request", t), new Error(t));
    return v.encode(e).finish();
  }
  static sendIDS(e) {
    const t = I.create({ identity: e }),
      a = I.verify(t);
    if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
    const s = I.encode(t).finish();
    this.groupSession.send(r.GroupSessionFastSyncMessageType.IdentityShare, s);
  }
}
(p(R, "groupSession"), p(R, "logger"), p(R, "identity"));
class te {
  static start(e, t) {
    this.groupSession = e;
    const a = _(t);
    (this.groupSession.setLocalParticipant(a),
      this.groupSession.setLeaderParticipant(e.localParticipant),
      (this.groupSession.inSession = !0),
      this.groupSession.messenger.addEventListener("participantschange", (s) =>
        this.sendLeaderDiscovery({ identifier: s.added?.[0]?.toString() }),
      ),
      this.groupSession.addEventListener("identityShare", (s) => {
        (this.groupSession.addParticipant(s.data), this.sendIDSReply(s.data), this.sendMemberSync());
      }));
  }
  static sendLeaderDiscovery(e) {
    const t = S.create({ signature: new Uint8Array() }),
      a = S.verify(t);
    if (a) throw new Error(a);
    const s = S.encode(t).finish();
    this.groupSession.send(r.GroupSessionFastSyncMessageType.LeaderDiscovery, s, [e.identifier]);
  }
  static sendIDSReply(e) {
    const t = P.create({ leaderParticipant: this.groupSession.leaderParticipant, localParticipant: e }),
      a = P.verify(t);
    if (a) throw new Error(a);
    const s = P.encode(t).finish();
    this.groupSession.send(r.GroupSessionFastSyncMessageType.IdentityShareReply, s, [e.identifier]);
  }
  static sendMemberSync() {
    const e = b.create({
        participants: this.groupSession.participants,
        members: this.groupSession.participants.map((s) => s.identity),
      }),
      t = b.verify(e);
    if (t) throw new Error(t);
    const a = b.encode(e).finish();
    this.groupSession.send(r.GroupSessionFastSyncMessageType.MemberSync, a);
  }
}
p(te, "groupSession");
export {
  le as AdjustVolumeMessageProtobuf,
  pe as AudioFormatProtobuf,
  he as AudioRouteProtobuf,
  H as ClientUpdatesConfigurationProtobuf,
  ye as ColorProtobuf,
  me as CommandInfoProtobuf,
  l as CommandOptionsProtobuf,
  n as CommandProtobuf,
  D as ConnectionStateProtobuf,
  J as ContentItemMetadataProtobuf,
  fe as ContentItemProtobuf,
  ge as DataArtworkProtobuf,
  w as DeviceInfoMessageProtobuf,
  be as DisabledReasonProtobuf,
  Pe as ErrorProtobuf,
  Se as GetStateMessageProtobuf,
  Me as GetVolumeControlCapabilitiesMessageProtobuf,
  Ce as GetVolumeControlCapabilitiesResultMessageProtobuf,
  x as GetVolumeMessageProtobuf,
  ve as GetVolumeMutedMessageProtobuf,
  Ie as GetVolumeMutedResultMessageProtobuf,
  Re as GetVolumeResultMessageProtobuf,
  ce as GroupSession,
  Y as GroupSessionEventTarget,
  te as GroupSessionHost,
  R as GroupSessionParticipant,
  ke as GroupSessionRouteType,
  Te as GroupTopologyModificationRequestProtobuf,
  we as LanguageOptionGroupProtobuf,
  Ee as LanguageOptionProtobuf,
  De as LyricsEventProtobuf,
  Ae as LyricsItemProtobuf,
  Ue as LyricsTokenProtobuf,
  re as MediaRemote,
  z as MediaRemoteEventTarget,
  g as MediaRemoteMessageProtobuf,
  c as MediaRemoteMessageType,
  k as MediaRemotePlaybackQueueInsertionPosition,
  _e as NotificationMessageProtobuf,
  Le as NowPlayingClientProtobuf,
  Qe as NowPlayingClientVisibility,
  Ge as NowPlayingInfoProtobuf,
  F as NowPlayingPlayerPathProtobuf,
  Ne as NowPlayingPlayerProtobuf,
  qe as OriginClientPropertiesMessageProtobuf,
  Oe as OriginProtobuf,
  Ve as OriginType,
  d as PlaybackQueue,
  He as PlaybackQueueCapabilitiesProtobuf,
  Fe as PlaybackQueueContextProtobuf,
  je as PlaybackQueueParticipantProtobuf,
  xe as PlaybackQueueProtobuf,
  W as PlaybackQueueRequestProtobuf,
  We as PlaybackStateProtobuf,
  Je as PlayerClientParticipantsUpdateMessageProtobuf,
  Be as PlayerClientPropertiesMessageProtobuf,
  $e as PreloadedPlaybackSessionInfo,
  M as QueueEndActionProtobuf,
  Ke as RemoteArtworkProtobuf,
  ze as RemoveClientMessageProtobuf,
  Ye as RemovePlayerMessageProtobuf,
  Xe as RepeatModeProtobuf,
  Ze as RequestDetailsProtobuf,
  B as SendCommandMessageProtobuf,
  et as SendCommandResultHandlerDialogActionProtobuf,
  tt as SendCommandResultHandlerDialogProtobuf,
  $ as SendCommandResultMessageProtobuf,
  at as SendCommandResultProtobuf,
  st as SendCommandResultStatusProtobuf,
  it as SendLyricsEventMessageProtobuf,
  ot as SetArtworkMessageProtobuf,
  E as SetConnectionStateMessageProtobuf,
  nt as SetHiliteModeMessageProtobuf,
  rt as SetNowPlayingClientMessageProtobuf,
  ct as SetNowPlayingPlayerMessageProtobuf,
  dt as SetReadyStateMessageProtobuf,
  ut as SetStateMessageProtobuf,
  j as SetVolumeMessageProtobuf,
  lt as SetVolumeMutedMessageProtobuf,
  pt as ShuffleModeProtobuf,
  ht as SupportedCommandsProtobuf,
  m as SystemPlaybackQueueProtobuf,
  yt as UpdateClientMessageProtobuf,
  mt as UpdateContentItemArtworkMessageProtobuf,
  ft as UpdateContentItemMessageProtobuf,
  gt as UpdatePlayerMessageProtobuf,
  y as UserIdentityProtobuf,
  bt as VolumeControlAvailabilityProtobuf,
  Pt as VolumeControlCapabilitiesDidChangeMessageProtobuf,
  St as VolumeDidChangeMessageProtobuf,
  Mt as VolumeMutedDidChangeMessageProtobuf,
  Ct as WakeDeviceMessageProtobuf,
};
