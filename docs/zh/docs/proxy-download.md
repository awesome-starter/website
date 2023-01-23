# 代理下载

针对部分地区下载慢的问题，我们提供了镜像代理的功能来加速下载，可以通过 `proxy` （别名 `p`） 命令来操作代理的开启 / 关闭，该命令需要结合子命令一起使用。

:::tip 提示
目前代理服务只针对 GitHub 的 HTTPS 下载源（使用的是 [FastGit 镜像](https://doc.fastgit.org/zh-cn/)），如果开启了代理后反而不能下载，那就不要开。
:::

## 开启代理

可以通过 `proxy` 的子命令 `on` 开启代理服务。

```bash
preset proxy on
```

开启后，会使用 FastGit 的镜像服务来下载项目模板。

## 关闭代理

可以通过 `proxy` 的子命令 `off` 关闭代理服务。

```bash
preset proxy off
```

关闭后，会直接使用 GitHub 的地址下载，不再通过镜像源。
