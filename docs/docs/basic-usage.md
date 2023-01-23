# Basic Usage {#basic-usage}

Creating templates is the core feature of Preset CLI, which provides a variety of project templates for you to use.

:::tip
The template list is under continuous improvement.
:::

## Initialization {#initialization}

You can create a starter templates to your liking by `init` (alias `i`) command.

```bash
preset init
```

## Specify a project name {#specify-a-project-name}

You can add a parameter as the project name, then you will skip the problem of entering the project name and choose the technology stack directly:

```bash
preset init hello-vue
```

## Specify a project template {#specify-a-project-template}

You can directly specify a template to create a project with the `--template` option (requires `v0.12.0` above):

```bash
# A project called `hello-vue` will be created using the `vue3-ts-vite` template
preset init hello-vue --template vue3-ts-vite
```

## Fetch latest configuration {#fetch-latest-configuration}

Preset CLI supports getting the latest technology stack list and starter template list without updating the version, because they are obtained through configuration files.

The configuration files are hosted in [config](https://github.com/awesome-starter/website/tree/main/src/public/config) folder.

Therefore, after executing the `init` command, a network request will be initiated to fetch the configuration file.
