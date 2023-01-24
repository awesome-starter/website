# 脚手架升级 {#cli-upgrade}

Preset CLI 提供了新版本检测的功能，方便你随时了解是否有新的版本。

## 检测新版本 {#detect-new-version}

可以通过 `upgrade` （别名 `u`） 命令进行版本检查，如果脚手架发布了新版本，将会询问您是否需要升级。

```bash
preset upgrade
```

## 升级脚手架 {#upgrade-the-cli}

当检测到新版本的时候，命令行会询问您是否需要升级：

- 选择 `Y` 将进入安装新版本的流程
- 选择 `N` 则结束询问

```bash
preset upgrade

⠏ Detecting upgrade information…
✔ Detected successfully.

  The current version: 0.6.8
  The latest version: 0.6.9
√ Found a new version, do you need to upgrade? ... yes

? Please select your package manager for global installation »
    npm
>   yarn
    pnpm
```
