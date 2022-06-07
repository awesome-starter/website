## 介绍

欢迎来到 Awesome Starter ！

### 什么是 Awesome Starter?

Awesome Starter 是一个关于项目启动模板的精选列表，通过 [Create Preset CLI](#什么是-create-preset) 创建一些有趣实用的项目启动模板，它也可以帮助你管理你的常用项目配置。

很长时间以来都缺少一个方便管理自己公开以及私有项目配置的工具，所以有了 Create Preset 的诞生，如果你觉得它有用，[欢迎给它一个 Star](https://github.com/awesome-starter/create-preset) ！

### 什么是 Create Preset?

Awesome Starter 的 CLI 脚手架，提供快速创建预设项目的能力。

:::tip 提示
除了可以把官方和开源社区提供的优秀模板创建为您的项目之外，更鼓励您把它作为一个管理个人常用项目模板配置的工具，点击 [管理本地配置](docs.md#%E7%AE%A1%E7%90%86%E6%9C%AC%E5%9C%B0%E9%85%8D%E7%BD%AE) 了解更多。
:::

![create-preset](https://cdn.jsdelivr.net/gh/chengpeiquan/assets-storage/img/2021/11/20220110155037.gif)

### 兼容性说明

一些预设项目需要 [Node.js](https://nodejs.org/en/) 版本 >=12.2.0（例如 Vite ）。 但是，某些模板需要更高的 Node.js 版本才能工作，如果您的包管理器发出警告，请升级。

## 起步指南

我们提供了两种方式用于脚手架的使用。

:::tip 提示
从 `v0.6.0` 开始，文档会默认以全局安装的方式来讲解操作说明，当然，你依然可以通过包管理器的命令来快速体验它。
:::

### 用法

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

可以查阅 [升级](#升级) 了解后续如何升级。

### 简单体验

也可以通过包管理器的命令来简单体验，通过创建配置的方式直接创建你需要的模板。

```bash
npm create preset
```

然后按照提示进行操作！

这种用法可以让你每次都能使用最新版本的 Preset CLI 。

## 更多功能

### 操作文档

请访问 [操作文档](/zh/docs.md) 查看更多功能。

### 模板列表

目前已有一部分可用的模板，稍后官网会开辟模板列表以提供查询，敬请期待！
