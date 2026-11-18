# datamine

Tracks Apple Music web player builds and posts the changes to Discord.

| Site        | Host                      |
| ----------- | ------------------------- |
| `main`      | music.apple.com           |
| `beta`      | beta.music.apple.com      |
| `classical` | classical.music.apple.com |

## Usage

```sh
bun run datamine:web
bun run datamine:web --target=beta
bun run notify:web
```

## Development

```sh
bun install
bun run check
bun run tsc
```
