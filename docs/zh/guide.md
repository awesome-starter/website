## 介绍

欢迎来到 Awesome Starter ！

### 什么是 Awesome Starter?

Awesome Starter 是一个关于项目启动模板的精选列表。

### 什么是 Create Preset?

Awesome Starter 的 CLI 脚手架，提供快速创建预设项目的能力。

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

使用 NPM:

```bash
npm install -g create-preset
```

使用 Yarn:

```bash
yarn global add create-preset
```

使用 PNPM:

```bash
pnpm add -g create-preset
```

可以通过下面这个命令来检查安装是否成功，如果成功，将会得到一个版本号。

```bash
preset -v
```

可以查阅 [升级](#升级) 了解后续如何升级。

### 简单体验

也可以通过包管理器的命令来简单体验，通过创建配置的方式直接创建你需要的模板。

使用 NPM:

```bash
npm init preset@latest init
```

使用 Yarn:

```bash
yarn create preset init
```

使用 PNPM:

```bash
pnpm create preset init
```

然后按照提示进行操作！

这种用法可以让你每次都能使用最新版本的 Preset CLI 。

## 更多功能

### 操作文档

请访问 [文档](/zh/docs.html) 查看操作文档。

### 模板列表

目前已有一部分可用的模板，稍后官网会开辟模板列表以提供查询，敬请期待！