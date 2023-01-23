# Technology Stack {#technology-stack}

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

## Show and hide {#show-and-hide}

Since `v0.10.0`, If a technology stack is added, but no corresponding template can be matched, it will be temporarily hidden and will not be displayed in the list of selectable technology stacks until it has a corresponding template associated with it.

## Add technology stack {#add-technology-stack}

At present, the technology stack needs to be maintained through the [tech.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/tech.json) file on the official website.

If you need to add the missing stack, please add it to the file array in the following format.

```json
{
  "name": "vue",
  "color": "#42b983"
}
```

JSON field description:

| Field |   Type    | Description                                                                                                    |
| :---: | :-------: | :------------------------------------------------------------------------------------------------------------- |
| name  |  string   | The name of the technology stack, please use the official recommended daily name                               |
| color | Color Hex | In order to have enough recognition and relevance, please take the color from the LOGO of the technology stack |

Please submit a PR, the technology stack will be added to the list after the merge.

## Manage local technology stacks {#manage-local-technology-stacks}

See: [Manage local technology stacks in your local configuration](local-configuration.md#manage-local-technology-stacks) .
