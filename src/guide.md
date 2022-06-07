## Introduction

Welcome to Awesome Starter!

### What is Awesome Starter?

Awesome Starter is a curated list of awesome things related to starter templates.  Create some interesting and practical project startup templates through [Create Preset CLI](#what-is-create-preset), and it can also help you manage your favorite project configurations.

For a long time, there has been a lack of a tool to manage the configuration of your own public and private projects, so with the birth of Create Preset, if you find it useful, [Welcome to give it a Star](https://github.com/awesome-starter/create-preset) !

### What is Create Preset?

The CLI for Awesome Starter, Provides the ability to quickly create preset projects.

:::tip
In addition to creating excellent templates provided by the official and open source communities, you are encouraged to use it as a tool for managing personal common project configurations, Visit [Manage local configuration](docs.md#manage-local-configuration) to learn more.
:::

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

```bash
npm install -g create-preset
```

:::tip
If you encounter an error of  `node:internal/readline/emitKeypressEvents:71` when installing globally, please refer to the solution of [#29](https://github.com/awesome-starter/create-preset/issues/29) .
:::

You can use the following command to check whether the installation was successful. If successful, you will get a version number.

```bash
# View the version number of the global installation
preset -v
```

Then you can create a project by "Select Technology Stack -> Select Template":

```bash
# It will start "Select Technology Stack -> Select Template"
preset init
```

You can also directly specify a template to create a project (requires `v0.12.0` above):

```bash
# A project called `hello-vue` will be created using the `vue3-ts-vite` template
preset init hello-vue --template vue3-ts-vite
```

You can refer to [Upgrade](#upgrade) to learn how to upgrade in the future.

### Simply Usage

You can also simply experience it through the command of the package manager, and directly create the template you need by create preset.

```bash
npm create preset
```

Then follow the prompts!

This usage allows you to use the latest version of the Preset CLI every time.

## More Features

### Full Documentation

Please visit [Documentation](/docs.html) for more features.

### Template list

There are already some available templates, and the official website will open up a list of templates to provide inquiries later, so stay tuned!
