# @syllables-dev/datamine

Tracks Apple Music web player builds and posts the changes to Discord.

| Site        | Host                      |
| ----------- | ------------------------- |
| `main`      | music.apple.com           |
| `beta`      | beta.music.apple.com      |
| `classical` | classical.music.apple.com |

Snapshots are saved to `datamine/<host>/`.

## Setup

Add the bot token as the `DISCORD_BOT_TOKEN` repo secret and the channel id as the `DISCORD_CHANNEL_ID` repo variable. The bot needs Send Messages and Embed Links in that channel.

## Usage

```sh
bun install
bun run datamine
bun run datamine --force
bun run datamine --target=beta
bun run notify
```
