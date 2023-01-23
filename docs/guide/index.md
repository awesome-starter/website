# Getting Started

We provide two ways to use this CLI.

:::tip
Since `v0.6.0`, the documentation will explain the operation instructions in the form of global installation by default. Of course, you can still quickly experience it through the package manager commands.
:::

## Simply Usage

You can also simply experience it through the command of the package manager, and directly create the template you need by create preset.

```bash
npm create preset
```

Then follow the prompts!

This usage allows you to use the latest version of the Preset CLI every time.


## Usage

It is recommended to install globally for easier usage, Please install it globally first:

```bash
npm install -g create-preset
```

:::tip
If you encounter an error of `node:internal/readline/emitKeypressEvents:71` when installing globally, please refer to the solution of [#29](https://github.com/awesome-starter/create-preset/issues/29) .
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

You can refer to [CLI Upgrade](../docs/cli-upgrade.md) to learn how to upgrade in the future.
