var _ = Object.defineProperty;
var D = (i, e, t) => (e in i ? _(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t));
var l = (i, e, t) => D(i, typeof e != "symbol" ? e + "" : e, t);
import { b as A } from "./binary-array~C_H_MJ43iT.js";
import { _ as U, $ as Q, a0 as q } from "./main.js";
import {
  m as L,
  U as m,
  D as R,
  M as o,
  S as k,
  C as T,
  a as N,
  N as O,
  b as r,
  c as u,
  Q as b,
  d as G,
  G as H,
  P as d,
  e as y,
  f as V,
  g as F,
  h as g,
  i as j,
  j as W,
  k as h,
  l as c,
  n as P,
  o as x,
  p as J,
  q as f,
  r as B,
  s as S,
  t as M,
} from "./group-session-proto~C9BpZV7VWW.js";
import { v as pe, R as ue, u as le } from "./group-session-proto~C9BpZV7VWW.js";
function E(...i) {
  const e = i.filter((a) => a !== !1 && a !== null && typeof a < "u");
  if (e.some((a) => Array.isArray(a)))
    return e.every((a) => Array.isArray(a)) ? Array.prototype.concat.apply([], e) : e[e.length - 1];
  if (!$(e)) return e[e.length - 1];
  const t = {};
  for (let a of e) for (let [s, n] of Object.entries(a)) t.hasOwnProperty(s) ? (t[s] = E(t[s], n)) : (t[s] = n);
  return t;
}
function $(i) {
  return i.every((e) => typeof e == "object");
}
const K = EventTarget;
var C = ((i) => (
  (i[(i.HEAD = 0)] = "HEAD"),
  (i[(i.TAIL = 1)] = "TAIL"),
  (i[(i.LAST = 2)] = "LAST"),
  (i[(i.SPECIFIED = 3)] = "SPECIFIED"),
  i
))(C || {});
const Y = EventTarget;
class v {
  static add(e, t) {
    const a = this.buffer;
    ((this.buffer = new Uint8Array(a.length + e.length)),
      this.buffer.set(a, 0),
      this.buffer.set(e, a.length),
      this.isProcessing || ((this.isProcessing = !0), this.process(t)));
  }
  static process(e) {
    if (this.buffer.length > 0) {
      const t = L.Reader.create(this.buffer),
        a = t.uint32();
      if (a > 0) {
        const s = a + t.pos;
        if (s <= t.len) return (e(this.buffer.slice(0, s)), (this.buffer = this.buffer.slice(s)), this.process(e));
      } else ((this.buffer = new Uint8Array(0)), e(this.buffer));
    }
    this.isProcessing = !1;
  }
}
(l(v, "buffer", new Uint8Array(0)), l(v, "isProcessing", !1));
const z = 1,
  X = 50,
  w = 7e3,
  Z = 2e3;
class re extends K {
  replyMap = new Map();
  networkProvider;
  client;
  ready = !1;
  itemCache = new U(60);
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
              (t.isResolvableParticipant = a.type === m.UserIdentityType.ResolvableIdentity));
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
    this._participantIdentity = m.create(e);
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
    }, w);
    this.participantIdentity = t;
    const s = R.create({
      protocolVersion: z,
      supportsSharedQueue: !0,
      lastSupportedMessageType: o.MediaRemoteMessageType_LastMessageType,
      preferredEncoding: R.PreferredEncoding.JSON,
      ...e,
    });
    await this.sendWithReply(o.MediaRemoteMessageType_DeviceInfo, { deviceInfoMessage: s });
    const n = k.create({ state: T.ConnectionStateProtobuf_Connected });
    this.send(o.MediaRemoteMessageType_SetConnectionState, { connectionState: n });
    const p = N.create({
      nowPlayingUpdates: !0,
      artworkUpdates: !0,
      volumeUpdates: !0,
      subscribedPlayerPaths: [O.create({ client: this.client })],
    });
    (await this.sendWithReply(o.MediaRemoteMessageType_ClientUpdatesConfiguration, { clientUpdatesConfigMessage: p }),
      await this.getVolume(),
      (this.ready = !0),
      clearTimeout(a),
      this.dispatchEvent(new Event("ready")));
  }
  play() {
    return this.performCommand(r.CommandProtobuf_Play);
  }
  pause() {
    return this.performCommand(r.CommandProtobuf_Pause);
  }
  skipTrack(e) {
    return e === "next"
      ? this.performCommand(r.CommandProtobuf_NextTrack)
      : this.performCommand(r.CommandProtobuf_PreviousTrack);
  }
  toggleShuffle() {
    return this.performCommand(r.CommandProtobuf_AdvanceShuffleMode);
  }
  toggleRepeat() {
    return this.performCommand(r.CommandProtobuf_AdvanceRepeatMode);
  }
  setPlaybackPosition(e) {
    if (e == null) {
      this.logger.error("Please input correct playback position");
      return;
    }
    const t = u.create({ playbackPosition: e });
    return this.performCommand(r.CommandProtobuf_SeekToPlaybackPosition, t);
  }
  toggleAutoPlay() {
    const e = u.create({ queueEndAction: this.playback.autoPlay ? b.None : b.AutoPlay });
    return this.performCommand(r.CommandProtobuf_ChangeQueueEndAction, e);
  }
  setVolume(e) {
    const t = G.create({ volume: e });
    return this.sendWithReply(o.MediaRemoteMessageType_SetVolume, { setVolumeMessage: t });
  }
  async getVolume() {
    const e = await this.sendWithReply(o.MediaRemoteMessageType_GetVolumeControlCapabilities, {
        getVolumeControlCapabilitiesMessage: {},
      }),
      t = H.create({}),
      a = await this.sendWithReply(o.MediaRemoteMessageType_GetVolume, { getVolumeMessage: t });
    return (
      (this.playback.capabilities.volumeControl =
        e?.getVolumeControlCapabilitiesResultMessage?.capabilities?.volumeControlAvailable ?? !1),
      (this.playback.volume = a?.getVolumeResultMessage?.volume),
      a.getVolumeResultMessage.volume
    );
  }
  playQueueItem(e) {
    const t = u.create({ contentItemID: this.queue?.[e] });
    return this.performCommand(r.CommandProtobuf_PlayItemInPlaybackQueue, t);
  }
  playNext(e, t) {
    this.insertToPlaybackQueue(e, t, C.HEAD);
  }
  playLast(e, t) {
    this.insertToPlaybackQueue(e, t, C.LAST);
  }
  playRadioStation(e, t) {
    const a = d.RadioCreationProperties.create({
        playActivityFeatureName: e,
        accountInfo: this.buildDelegateInfoWithAccountInfo(),
        ...t,
      }),
      s = d.RadioCreationProperties.encode(a).finish(),
      n = u.create({
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(
          y.SystemPlaybackCustomDataQueueProtobuf.create({
            identifier: "com.apple.music.playbackqueue.radio",
            data: s,
          }),
          { isRequestingImmediatePlayback: !0 },
        ),
        applicationUserIdentity: m.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(r.CommandProtobuf_SetPlaybackQueue, n);
  }
  async getPlaybackQueue(e, t = 0) {
    const a = V.create({
        location: t,
        length: e,
        includeMetadata: !0,
        includeParticipants: !0,
        contentItemIdentifiers: Array.from(this.itemCache.keys()),
        playerPath: { client: this.client },
      }),
      n =
        (await this.sendWithReply(o.MediaRemoteMessageType_PlaybackQueueRequest, { playbackQueueRequest: a }))
          ?.setStateMessage?.playbackQueue?.contentItem ?? [];
    ((this.queue = n.map(this.updateContentItemCache.bind(this))), this.logger.debug(this.itemCache));
  }
  setPlaybackQueue(e, t, a) {
    const s = this.buildPlaybackTrackListData(e, t, {
        shuffleMode: a ? d.Tracklist.ShuffleMode.SONGS : d.Tracklist.ShuffleMode.NONE,
      }),
      n = u.create({
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(s, { isRequestingImmediatePlayback: !0 }),
        applicationUserIdentity: m.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(r.CommandProtobuf_SetPlaybackQueue, n);
  }
  insertToPlaybackQueue(e, t, a, s) {
    const n = this.buildPlaybackTrackListData(e, t),
      p = u.create({
        playbackQueueInsertionPosition: a,
        insertBeforeContentItemID: this.queue?.[s],
        systemAppPlaybackQueue: this.buildSystemPlaybackQueue(n),
        applicationUserIdentity: m.encode(this._participantIdentity).finish(),
      });
    return this.performCommand(r.CommandProtobuf_InsertIntoPlaybackQueue, p);
  }
  removeFromPlaybackQueue(e) {
    const t = u.create({ contentItemID: this.queue?.[e] });
    return this.performCommand(r.CommandProtobuf_RemoveFromPlaybackQueue, t);
  }
  reorderPlaybackQueue(e, t) {
    const a = u.create({ contentItemID: this.queue?.[e], insertBeforeContentItemID: this.queue?.[t] });
    return this.performCommand(r.CommandProtobuf_ReorderPlaybackQueue, a);
  }
  buildPlaybackTrackListData(e, t, a) {
    const s = d.Tracklist.create({
      container: t.map((n) =>
        d.Container.create({
          containerType: n?.containerType,
          identifierSet: d.ContainerIdentifierSet.create(n?.identifierSet),
          item: n.items.map((p) =>
            d.Item.create({ mediaType: p?.mediaType, identifierSet: d.ItemIdentifierSet.create(p?.identifierSet) }),
          ),
          playActivityFeatureName: e,
        }),
      ),
      accountInfo: [this.buildDelegateInfoWithAccountInfo()],
      ...a,
    });
    return y.SystemPlaybackCustomDataQueueProtobuf.create({
      identifier: "com.apple.music.playbackqueue.tracklist",
      data: d.Tracklist.encode(s).finish(),
    });
  }
  buildSystemPlaybackQueue(e, t) {
    return y.create({
      type: y.SystemPlaybackQueueType.SystemPlaybackQueueTypeCustom,
      replaceIntent: y.SystemPlaybackQueueReplaceIntent.SystemPlaybackQueueReplaceIntentClearUpNext,
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
    const e = k.create({ state: T.ConnectionStateProtobuf_Disconnected });
    (this.send(o.MediaRemoteMessageType_SetConnectionState, { connectionState: e }), (this.ready = !1));
  }
  onMessage(e) {
    v.add(e, this.decode.bind(this));
  }
  updateContentItemCache(e) {
    let t = this.processContentItem(e.metadata);
    if (this.itemCache.has(e.identifier)) {
      const a = this.itemCache.get(e.identifier);
      t = new F(E(a, t));
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
        e[t] instanceof Uint8Array && (e[t] = A(e[t]));
      }),
      e
    );
  }
  async onSetStateMessage(e) {
    (e.playbackState > 0 && (this.playback.playbackState = e.playbackState),
      e.supportedCommands &&
        (this.playback = e.supportedCommands?.supportedCommand.reduce((t, a) => {
          switch (a.command) {
            case r.CommandProtobuf_ChangeShuffleMode:
              return {
                ...t,
                shuffleMode: a.shuffleMode,
                capabilities: { ...t.capabilities, shuffleControl: a.enabled ?? !1 },
              };
            case r.CommandProtobuf_ChangeRepeatMode:
              return {
                ...t,
                repeatMode: a.repeatMode,
                capabilities: { ...t.capabilities, repeatControl: a.enabled ?? !1 },
              };
            case r.CommandProtobuf_ChangeQueueEndAction:
              return {
                ...t,
                autoPlay: a.currentQueueEndAction === b.AutoPlay,
                capabilities: { ...t.capabilities, autoPlayControl: a.enabled ?? !1 },
              };
            default:
              return t;
          }
        }, this.playback)),
      e.playbackQueue && (await this.getPlaybackQueue(X)),
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
      }, Z),
        await this.onSetStateMessage({ playbackQueue: {} }),
        e(!0));
    });
  }
  async sendWithReply(e, t) {
    const a = window.crypto.randomUUID(),
      s = Q();
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
    const n = g.encodeDelimited(a).finish();
    return this.networkProvider.send(n, []);
  }
  sendStateUpdates() {
    this.dispatchEvent(new MessageEvent("stateUpdates", { data: this.mediaState }));
  }
  async performCommand(e, t) {
    const a = j.create({ command: e, options: t, playerPath: { client: this.client } }),
      s = await this.sendWithReply(o.MediaRemoteMessageType_SendCommand, { sendCommandMessage: a });
    return (
      s?.sendCommandResultMessage?.commandResult?.statuses?.[0]?.statusCode !==
        W.CommandHandlerStatus.CommandHandlerStatus_Success &&
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
        case o.MediaRemoteMessageType_SetState:
          this.onSetStateMessage(t.setStateMessage);
          return;
        case o.MediaRemoteMessageType_UpdateContentItems:
          this.onUpdateContentItems(t.updateContentItemMessage);
          return;
        case o.MediaRemoteMessageType_SetDefaultSupportedCommands:
          this.onSetStateMessage(t.setDefaultSupportedCommandsMessage);
          return;
        case o.MediaRemoteMessageType_VolumeDidChange:
          this.onVolumeChange(t.volumeDidChangeMessage);
          return;
        case o.MediaRemoteMessageType_PlayerClientParticipantsUpdate:
          this.onPlayerClientParticipantsUpdate(t.playerClientParticipantsUpdateMessage);
          return;
        default:
          this.logger?.debug("Message not supported", t);
          return;
      }
  }
}
class oe extends Y {
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
      this.send(c.GroupSessionFastSyncMessageType.RemoteJoinResponse, h.encode(t).finish());
    }
  }
  rejectParticipant(e) {
    if (this.participantMap.has(e) && !this.participantMap.get(e).connected) {
      const t = h.create({ participantIdentifier: e, approved: !1 }),
        a = h.verify(t);
      if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
      this.send(c.GroupSessionFastSyncMessageType.RemoteJoinResponse, h.encode(t).finish());
    }
  }
  requestRemoveParticipant(e) {
    if (this.participantMap.has(e) && this.participantMap.get(e).guest) {
      const t = P.create({ participantIdentifier: e }),
        a = P.verify(t);
      if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
      (this.send(c.GroupSessionFastSyncMessageType.RemoteRemoveRequest, P.encode(t).finish()),
        this.removeParticipant({ identifier: e }));
    }
  }
  send(e, t, a) {
    const s = c.create({ messageType: e, payload: t }),
      n = c.verify(s);
    (n && this.logger?.error(`Invalid Group Session Message: ${n}`), this.logger.debug("Msg sent", s));
    const p = [...(a || [])];
    (this.leaderParticipantHandle && p.push(this.leaderParticipantHandle),
      this.networkProvider?.send(c.encode(s).finish(), { participantIds: p }));
  }
  onMessage(e) {
    const t = e.data,
      a = c.decode(t);
    switch ((this.logger.debug("Msg Received", a), a.messageType)) {
      case c.GroupSessionFastSyncMessageType.LeaderDiscovery:
        ((this.leaderParticipantHandle = e.source ?? null),
          this.dispatchEvent(new MessageEvent("leaderDiscovery", { data: B.decode(a.payload) })));
        break;
      case c.GroupSessionFastSyncMessageType.IdentityShare:
        this.dispatchEvent(
          new MessageEvent("identityShare", { data: { identifier: e.source ?? null, identity: f.decode(a.payload) } }),
        );
        break;
      case c.GroupSessionFastSyncMessageType.IdentityShareReply:
        this.dispatchEvent(new MessageEvent("identityShareReply", { data: J.decode(a.payload) }));
        break;
      case c.GroupSessionFastSyncMessageType.MemberSync:
        this.dispatchEvent(new MessageEvent("memberSync", { data: x.decode(a.payload) }));
        break;
      case c.GroupSessionFastSyncMessageType.RemoteControl:
        this.dispatchEvent(new MessageEvent("mediaRemote", { data: a.payload }));
        break;
      case c.GroupSessionFastSyncMessageType.SessionEnd:
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
function ee(i) {
  return f.create({
    identifier: i.identifier ?? window.crypto.randomUUID(),
    displayName: i.displayName,
    type: i.isResolvable ? f.UserIdentityType.ResolvableIdentity : f.UserIdentityType.BasicIdentity,
  });
}
class I {
  static setup(e, t, a) {
    ((this.groupSession = e), (this.logger = a), (this.identity = ee(t)));
    let s;
    (this.groupSession.addEventListener(
      "leaderDiscovery",
      q(() => {
        ((s = setTimeout(() => {
          this.groupSession.dispatchEvent(new Event("sessionEnd"));
        }, w)),
          this.sendIDS(this.identity));
      }, 1e3),
    ),
      this.groupSession.addEventListener("identityShareReply", (n) => {
        (clearTimeout(s),
          this.groupSession.setLeaderParticipant(n.data.leaderParticipant),
          this.groupSession.setLocalParticipant(n.data.localParticipant),
          this.groupSession.inSession ||
            ((this.groupSession.inSession = !0), this.groupSession.dispatchEvent(new Event("ready"))));
      }),
      this.groupSession.addEventListener("memberSync", (n) => {
        this.groupSession.updateSessionState(n.data);
      }));
  }
  static getJoinRequest() {
    const e = S.create({ identity: this.identity }),
      t = S.verify(e);
    if (t) throw (this.logger?.error("Invalid Request", t), new Error(t));
    return S.encode(e).finish();
  }
  static sendIDS(e) {
    const t = M.create({ identity: e }),
      a = M.verify(t);
    if (a) throw (this.logger?.error("Invalid Identity", a), new Error(a));
    const s = M.encode(t).finish();
    this.groupSession.send(c.GroupSessionFastSyncMessageType.IdentityShare, s);
  }
}
(l(I, "groupSession"), l(I, "logger"), l(I, "identity"));
export {
  N as ClientUpdatesConfigurationProtobuf,
  u as CommandOptionsProtobuf,
  r as CommandProtobuf,
  T as ConnectionStateProtobuf,
  F as ContentItemMetadataProtobuf,
  R as DeviceInfoMessageProtobuf,
  H as GetVolumeMessageProtobuf,
  oe as GroupSession,
  Y as GroupSessionEventTarget,
  I as GroupSessionParticipant,
  re as MediaRemote,
  K as MediaRemoteEventTarget,
  g as MediaRemoteMessageProtobuf,
  o as MediaRemoteMessageType,
  C as MediaRemotePlaybackQueueInsertionPosition,
  O as NowPlayingPlayerPathProtobuf,
  d as PlaybackQueue,
  V as PlaybackQueueRequestProtobuf,
  pe as PlaybackStateProtobuf,
  b as QueueEndActionProtobuf,
  ue as RepeatModeProtobuf,
  j as SendCommandMessageProtobuf,
  W as SendCommandResultMessageProtobuf,
  k as SetConnectionStateMessageProtobuf,
  G as SetVolumeMessageProtobuf,
  le as ShuffleModeProtobuf,
  y as SystemPlaybackQueueProtobuf,
  m as UserIdentityProtobuf,
};
