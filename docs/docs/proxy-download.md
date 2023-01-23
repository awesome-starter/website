# Proxy Download {#proxy-download}

For the slow download problem in some areas, we provide the mirror proxy to speed up the download. You can use the `proxy` (alias `p`) command to turn on/off of the proxy . This command needs to be used in conjunction with subcommands.

:::tip
At present, the proxy service is only for GitHub's HTTPS download source, (Using [FastGit Mirror](https://doc.fastgit.org/)), if you can't download after turn on the proxy, please turn off it.
:::

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
