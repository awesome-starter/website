# Starter Template {#starter-template}

Templates created through the Preset CLI are obtained through the Git repository.

## About classification of sources {#about-classification-of-sources}

Templates are classified into three sources: official maintenance, open source community, and local configuration.

|        Source         | Description                                                         | Color  |                                                   View                                                   |
| :-------------------: | :------------------------------------------------------------------ | :----: | :------------------------------------------------------------------------------------------------------: |
| Official Maintenance  | Maintained by the official Awesome Starter team.                    | Yellow |  [official.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/official.json)  |
| Open Source Community | Excellent templates found from open source communities like GitHub. | White  | [community.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/community.json) |
|  Local Configuration  | A config file that you store locally on your computer.              |  Cyan  |                             [Local Configuration](./local-configuration.md)                              |

## Rules for adding templates {#rules-for-adding-templates}

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

| Field  |  Type  | Description                                                                                                                                                  |
| :----: | :----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  tech  | string | Technology stack, please check [here](https://github.com/awesome-starter/website/blob/main/docs/public/config/tech.json) for legal tech stack names.         |
|  name  | string | Name of the template, please omit words like `template` or `starter`, just write the base name.                                                              |
|  desc  | string | Description of the template, one sentence to understand the characteristics of this template.                                                                |
|  repo  | string | Template repository URL, supports `https` and `git@` starting addresses, see the following [Template URL description](#template-url-description)             |
| mirror | string | Optional, the URL of the mirror warehouse, fill in the same format as the `repo` field, see the description of [Proxy Download](proxy-download.md) for usage |

:::tip
Since the purpose of Awesome Starter is to provide excellent project templates, it only accepts repository collections of the Starter Template class. If you plan to make PR contributions to [community.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/community.json), please pay attention to this.

For the beauty of the list, currently the template name can display up to 20 characters, and the template description can display up to 80 characters. Exceeding the number of characters will end with `…` ellipsis.
:::

## Template URL description {#template-url-description}

Template URLs are supported in two formats: [HTTPS](#https) and [SSH](#ssh).

### HTTPS {#https}

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

### SSH {#ssh}

If you configure your SSH Key correctly, you can download the template via SSH, which will pull the code in the form of `git clone`.

```bash
# Copy the SSH download URL in the repository
git@github.com: awesome-starter/create-preset.git
```

You can visit [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to learn how to configure SSH Key.

:::tip
The provision of this method is mainly used to manage private repositories in the local configuration.
:::

## Sort priority {#sort-priority}

Currently, it will be sorted according to the priority of "Local Configuration" > "Official Maintenance" > "Open Source Community", and "Local Configuration" will be placed at the top of the list, which is convenient for your daily use.

:::tip
Since `v0.10.0`, the order of community templates is no longer fixed, and the order will be randomly generated each time, in order to allow different templates to have enough opportunities to be exposed at the top.

If there are some community templates that you commonly use, please add them to the local configuration for easy search, so that they can be fixed at the top of the list.
:::

## Manage local templates {#manage-local-templates}

See: [Manage local templates in your local configuration](local-configuration.md) .
