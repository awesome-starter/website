# 起步指南

我们提供了两种方式用于脚手架的使用。

:::tip 提示
从 `v0.6.0` 开始，文档会默认以全局安装的方式来讲解操作说明，当然，你依然可以通过包管理器的命令来快速体验它。
:::

## 简单体验

也可以通过包管理器的命令来简单体验，通过创建配置的方式直接创建你需要的模板。

```bash
npm create preset
```

然后按照提示进行操作！

这种用法可以让你每次都能使用最新版本的 Preset CLI 。

## 完整用法

推荐全局安装它，用起来更方便，请先全局安装：

```bash
npm install -g create-preset
```

:::tip
如果你在全局安装的时候遇到了 `node:internal/readline/emitKeypressEvents:71` 的错误，可参考 [#29](https://github.com/awesome-starter/create-preset/issues/29) 的解决方案。
:::

可以通过下面这个命令来检查安装是否成功，如果成功，将会得到一个版本号。

```bash
# 查看全局安装的版本号
preset -v
```

然后你可以通过 “选择技术栈 -> 选择模板” 的方式创建项目：

```bash
# 将进入 “选择技术栈 -> 选择模板” 的环节
preset init
```

也可以直接指定一个模板创建项目（需要 `v0.12.0` 以上）：

```bash
# 将使用 `vue3-ts-vite` 模板创建一个名为 `hello-vue` 的项目
preset init hello-vue --template vue3-ts-vite
```

可以查阅 [脚手架升级](../docs/cli-upgrade.md) 了解后续如何升级。
