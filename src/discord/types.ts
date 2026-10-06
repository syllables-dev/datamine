export interface Embed {
  author?: { icon_url?: string; name: string; url?: string };
  color?: number;
  description?: string;
  fields?: { inline?: boolean; name: string; value: string }[];
  footer?: { text: string };
  timestamp?: string;
  title?: string;
  url?: string;
}

export interface LinkButton {
  label: string;
  style: 5;
  type: 2;
  url: string;
}

export interface ActionRow {
  components: LinkButton[];
  type: 1;
}

export interface MessagePayload {
  allowed_mentions?: { parse: string[] };
  components?: ActionRow[];
  content?: string;
  embeds?: Embed[];
}

export interface Message {
  channel_id: string;
  id: string;
}

export interface Channel {
  id: string;
  name?: string;
}
