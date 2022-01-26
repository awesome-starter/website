## Create Preset

Creating templates is the core feature of Preset CLI, which provides a variety of project templates for you to use.

:::tip
The template list is under continuous improvement.
:::

### Initialization

You can create a starter templates to your liking by `init` (alias `i`)  command.

```bash
preset init
```

### Fetch latest configuration

Preset CLI supports getting the latest technology stack list and starter template list without updating the version, because they are obtained through configuration files.

The configuration files are hosted in [config](https://github.com/awesome-starter/website/tree/main/src/public/config) folder.

Therefore, after executing the `init` command, a network request will be initiated to fetch the configuration file.

### Technology stack classification

When creating a project, there will be a step to select the technology stack, You can easily find the template you need by classifying the technology stack.

The classification of the technology stack is based on core technologies, not related technologies. For example, a project using `Vite` + `TypeScript` + `Vue 3.0`, for the project, the core is `Vue 3.0`, so it will be classified under the `vue` category.

```bash
preset init

✔ Get the latest config successfully.

√ Project name: ... my-preset-app
? Select a tech stack: » - Use arrow-keys. Return to submit.
    vue
    react
    node
>   electron
    vite
    rollup
```

### Add technology stack

At present, the technology stack needs to be maintained through the [tech.json](https://github.com/awesome-starter/website/blob/main/src/public/config/tech.json) file on the official website.

If you need to add the missing stack, please add it to the file array in the following format.

```json
{
  "name": "vue",
  "color": "#42b983"
}
```

JSON field description:

Field|Type|Description
:-:|:-:|:--
name|string|The name of the technology stack, please use the official recommended daily name
color|Color Hex|In order to have enough recognition and relevance, please take the color from the LOGO of the technology stack

Please submit a PR, the technology stack will be added to the list after the merge.

## Template

Templates created through the Preset CLI are obtained through the Git repository.

### About classification of sources

Templates are classified into three sources: official maintenance, open source community, and local configuration.

Source|Description|View
:-:|:--|:-:
Official Maintenance|Maintained by the official Awesome Starter team.|[official.json](https://github.com/awesome-starter/website/blob/main/src/public/config/official.json)
Open Source Community|Excellent templates found from open source communities like GitHub, merged via PR.|[community.json](https://github.com/awesome-starter/website/blob/main/src/public/config/community.json)
Local Configuration|A config file that you store locally on your computer to use as your private config.|[Configure](#configure)

### Sort priority

Currently, it will be sorted according to the priority of "Local Configuration" > "Official Maintenance" > "Open Source Community", and "Local Configuration" will be placed at the top of the list, which is convenient for your daily use.

### Rules for adding templates

The configuration file is in JSON format, so please follow the correct JSON syntax and add it to the array in the template file.

Each template currently specifies the following format:

```json
{
  "tech": "vue",
  "name": "vue3-ts-vite",
  "desc": "A template for Vue 3.0 with TypeScript, base on Vite.",
  "repo": "https://github.com/awesome-starter/vue3-ts-vite-starter"
}
```

JSON field description:

Field|Type|Description
:-:|:-:|:--
tech|string|Technology stack, please check [here](https://github.com/awesome-starter/website/blob/main/src/public/config/tech.json) for legal tech stack names.
name|string|Name of the template, please omit words like `template` or `starter`, just write the base name.
desc|string|Description of the template, one sentence to understand the characteristics of this template.
repo|string|Template repository URL, supports `https` and `git@` starting addresses, see the following [Template URL description](#template-url-description)

:::tip
Since the purpose of Awesome Starter is to provide excellent project templates, it only accepts repository collections of the Starter Template class. If you plan to make PR contributions to [community.json](https://github.com/awesome-starter/website/blob/main/src/public/config/community.json), please pay attention to this.
:::

### Template URL description

Template URLs are supported in two formats: [HTTPS](#https) and [SSH](#ssh).

#### HTTPS

By default, HTTPS is used to configure for public repositories:

- If you use the `master` branch, just copy the access address of the repository in the browser directly
- If it is a non-`master` branch such as `main` or `develop`, you need to concatenate `#` + branch name

```bash
# Use `master` as the master branch
https://github.com/awesome-starter/vue3-ts-vite-starter

# Use `main` or other non-master branches
# (the difference is the # sign with branch name at the end)
https://github.com/awesome-starter/vue3-ts-vite-starter#main
```

:::tip
So, both the official template and the community template need to be configured this way, since they both have to be public repositories.
:::

#### SSH

If you configure your SSH Key correctly, you can download the template via SSH, which will pull the code in the form of `git clone`.

```bash
# Copy the SSH download URL in the repository
git@github.com: awesome-starter/create-preset.git
```

You can visit [Working with SSH key passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases) to learn how to configure SSH Key.

:::tip
The provision of this method is mainly used to manage private repositories in the local configuration.
:::

## Configure

Preset CLI provides a local configuration management function, which is convenient for you to manage commonly used private configurations.

### Manage local configuration

Local configuration management can be done through the `config` (alias `c`) command, which needs to be used in conjunction with subcommands.

### Prep work

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

### Set configuration file

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

### Query configuration status

The currently set configuration file path can be queried through the `get` subcommand of `config`.

```bash
preset config get
```

This command is very useful if you forget where the configuration file is saved!

### Remove configuration settings

If you want to cancel the settings of the local configuration, you can cancel the settings with the `remove` subcommand of `config`.

```bash
preset config remove
```

### Manage local tech stacks

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

## Proxy

For the slow download problem in some areas, we provide the mirror proxy to speed up the download. You can use the `proxy` (alias `p`) command to turn on/off of the proxy . This command needs to be used in conjunction with subcommands.

:::tip
At present, the proxy service is only for GitHub's HTTPS download source, and the service scope may only be suitable for users in China (because the [CNPM Mirror](https://github.com.cnpmjs.org/) is used), if you can't download  after turn on the proxy, please turn off it.
:::

### Turn On

The proxy service can be turned on with the `on` subcommand of `proxy`.

```bash
preset proxy on
```

Once enabled, CNPM's mirror service will be used to download starter templates.

### Turn Off

The proxy service can be turned off with the `off` subcommand of `proxy`.

```bash
preset proxy off
```

After the proxy is turned off, it will be downloaded directly from the GitHub URL, and will no longer be mirrored through CNPM.

## Upgrade

Preset CLI provides the feature of new version detection, which is convenient for you to know whether there is a new version at any time.

### Detect new version

You can with `upgrade` (alias `u`) command to detect new version, and if a new version of the Preset CLI is released, you will be asked if you need to upgrade.

### Upgrade the CLI

When a new version is detected, the command line will ask you if you need to upgrade:

- Select "Y" will proceed to the process of installing the new version
- Select "N" to exit the upgrade process

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

### Change Log

You can learn about the functional changes brought by each version upgrade at [Release Notes](https://github.com/awesome-starter/create-preset/releases).









