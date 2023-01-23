# Local Configuration

Preset CLI provides a local configuration management function, which is convenient for you to manage commonly used private configurations.

## Manage local configuration

Local configuration management can be done through the `config` (alias `c`) command, which needs to be used in conjunction with subcommands.

## Prep work

Create a JSON file on your computer's hard drive and write the contents of the file in the following format:

For example: `F:\config\local-preset.json`

```json
[
  {
    "tech": "vue",
    "name": "vue3-ts-vite",
    "desc": "A template for Vue 3.0 with TypeScript, base on Vite.",
    "repo": "https://github.com/awesome-starter/vue3-ts-vite-starter"
  }
]
```

In this way, a local configuration file is complete.

## Set configuration file

You can set the configuration file through the subcommand `set` of `config`. After setting, when Preset CLI reads the configuration, it will also read your local configuration.

```bash
preset config set <filePath>
```

For example, using our previous example:

```
preset config set F:\config\local-preset.json
```

:::tip
If your file path has spaces, use `"` double quotes around the path.
:::

## Query configuration status

The currently set configuration file path can be queried through the `get` subcommand of `config`.

```bash
preset config get
```

This command is very useful if you forget where the configuration file is saved!

## Remove configuration settings

If you want to cancel the settings of the local configuration, you can cancel the settings with the `remove` subcommand of `config`.

```bash
preset config remove
```

## Manage local technology stacks

The `config` command also provides an option `--tech` (abbreviated `-t`), which is used to manage the local technology stack. When you add the `--tech` option, it will enter the technology stack management mode ( instead of template configuration).

:::tip
The operation commands of the local configuration and the local technology stack are the same, the only difference is that the technology stack needs to be added with the `--tech` option.
:::

For example, if you want to set your local tech stack list, just add the `--tech` option:

```
preset config set F:\config\local-tech.json --tech
```

The template format of the local technology stack is:

```json
[
  {
    "name": "vue",
    "color": "#42b983"
  }
]
```

Please refer to the section [Add technology stack](#add-technology-stack) for the description of JSON fields.
