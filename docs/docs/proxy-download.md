# Proxy Download {#proxy-download}

:::tip
Updated [new proxy download logic](https://github.com/awesome-starter/create-preset/commit/e4ba085bdda8d4c9d957d94e61e3b400b090159a) in `v0.13.0`, documentation coming soon.
:::

For the slow download problem in some areas, we provide the mirror proxy to speed up the download. You can use the `proxy` (alias `p`) command to turn on/off of the proxy . This command needs to be used in conjunction with subcommands.

## Turn On {#turn-on}

The proxy service can be turned on with the `on` subcommand of `proxy`.

```bash
preset proxy on
```

Once enabled, FastGit's mirror service will be used to download starter templates.

## Turn Off {#turn-off}

The proxy service can be turned off with the `off` subcommand of `proxy`.

```bash
preset proxy off
```

After the proxy is turned off, it will be downloaded directly from the GitHub URL, and will no longer be mirrored.
