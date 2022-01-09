## Introduction

Welcome to Awesome Starter!

### What is Awesome Starter?

Awesome Starter is a curated list of awesome things related to starter templates.

### What is Create Preset?

Provides the ability to quickly create preset projects.

![create-preset](https://cdn.jsdelivr.net/gh/chengpeiquan/assets-storage/img/2021/11/20211229183022.gif)

### Compatibility Note

Some preset project requires [Node.js](https://nodejs.org/en/) version >=12.2.0 (e.g. Vite). However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Getting Started

:::tip
It is still in the early stage of development, and the version update will be more frequent, please try to use [Usage](#usage) instead of [Global Usage](#global-usage)
:::

### Usage

You can simply create it directly through the package management command:

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

This usage allows you to use the latest version of scaffolding every time.

### Global Usage

You can also install globally for easier usage, Please install it globally first:

```bash
npm install -g create-preset

# OR
yarn global add create-preset

# OR
pnpm add -g create-preset
```

You can use this command to check whether the installation is successful:

```bash
preset -v
```

Then you can use the following command to create your preset project:

```bash
preset init
```

If you want to update the version later, you can use the following command to operate:

```bash
npm update -g create-preset

# OR
yarn global upgrade --latest create-preset

# OR
pnpm update -g --latest create-preset
```

Or reinstall it globally, haha!

## Template Starters

With [create-preset](https://github.com/awesome-starter/create-preset) scaffolding, you can currently create the following officially maintained template starters.

### Official templates

The following templates are officially provided and maintained by Awesome Starter.

Tech Stack|Name|Description
:-:|:-:|:--
vue|vue3-ts-vite|A template for Vue 3.0 with TypeScript, base on Vite.
node|node-basic|A basic Node.js project template.
node|node-server-express|A express template for Node.js project.
node|node-program-pkg|A program template for Node.js project, use pkg to packaged.
electron|electron-vue3-ts|An electron template with Vue 3.0 and TypeScript for client project.

More templates coming soon.