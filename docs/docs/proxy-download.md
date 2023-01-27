# Proxy Download {#proxy-download}

:::warning
Sorry, this feature is temporarily unavailable due to lack of available mirror proxy services.

If your download speed is really slow, try turning on a VPN service locally.
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
