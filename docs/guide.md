## Introduction

Welcome to Awesome Starter!

### What is Awesome Starter?

Awesome Starter is a curated list of awesome things related to starter templates.  Create some interesting and practical project startup templates through [Create Preset CLI](#what-is-create-preset), and it can also help you manage your favorite project configurations.

For a long time, there has been a lack of a tool to manage the configuration of your own public and private projects, so with the birth of Create Preset, if you find it useful, [Welcome to give it a Star](https://github.com/awesome-starter/create-preset) !

### What is Create Preset?

The CLI for Awesome Starter, Provides the ability to quickly create preset projects.

![create-preset](https://cdn.jsdelivr.net/gh/chengpeiquan/assets-storage/img/2021/11/20220110155037.gif)

### Compatibility Note

Some preset project requires [Node.js](https://nodejs.org/en/) version >=12.2.0 (e.g. Vite). However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Getting Started

We provide two ways to use this CLI.

:::tip
Since `v0.6.0`, the documentation will explain the operation instructions in the form of global installation by default. Of course, you can still quickly experience it through the package manager commands.
:::

### Usage

It is recommended to install globally for easier usage, Please install it globally first:

With NPM:

```bash
npm install -g create-preset
```

With Yarn:

```bash
yarn global add create-preset
```

With PNPM:

```bash
pnpm add -g create-preset
```

You can use the following command to check whether the installation was successful. If successful, you will get a version number.

```bash
preset -v
```

You can refer to [Upgrade](#upgrade) to learn how to upgrade in the future.

### Simply Usage

You can also simply experience it through the command of the package manager, and directly create the template you need by create preset.

With NPM:

```bash
npm init preset@latest init
```

With Yarn:

```bash
yarn create preset init
```

With PNPM:

```bash
pnpm create preset init
```

Then follow the prompts!

This usage allows you to use the latest version of the Preset CLI every time.

## More Features

### Full Documentation

Please visit [Documentation](/docs.html) to view the operation documentation.

### Template list

There are already some available templates, and the official website will open up a list of templates to provide inquiries later, so stay tuned!