# 代理下载 {#proxy-download}

:::tip
在 `v0.13.0` 中更新了 [新的代理下载逻辑](https://github.com/awesome-starter/create-preset/commit/e4ba085bdda8d4c9d957d94e61e3b400b090159a) ，文档即将推出。
:::

针对部分地区下载慢的问题，我们提供了镜像代理的功能来加速下载，可以通过 `proxy` （别名 `p`） 命令来操作代理的开启 / 关闭，该命令需要结合子命令一起使用。

## 开启代理 {#turn-on}

可以通过 `proxy` 的子命令 `on` 开启代理服务。

```bash
preset proxy on
```

开启后，会使用 FastGit 的镜像服务来下载项目模板。

## 关闭代理 {#turn-off}

可以通过 `proxy` 的子命令 `off` 关闭代理服务。

```bash
preset proxy off
```

关闭后，会直接使用 GitHub 的地址下载，不再通过镜像源。
