# @syllables-dev/datamine

Tracks Apple Music web player builds and posts the changes to Discord.

| Site        | Host                      |
| ----------- | ------------------------- |
| `main`      | music.apple.com           |
| `beta`      | beta.music.apple.com      |
| `classical` | classical.music.apple.com |

Snapshots are saved to `datamine/<host>/`.

## Setup

Add a Discord webhook URL as the `DISCORD_WEBHOOK_URL` repo secret, and give Actions read and write permissions.

## Usage

```sh
bun install
bun run datamine
bun run datamine --force
bun run datamine --target=beta
bun run notify
```
