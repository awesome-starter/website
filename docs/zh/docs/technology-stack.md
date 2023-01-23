# 技术栈分类

创建项目的时候会有一个选择技术栈的步骤，可以通过技术栈的分类，方便的找到你需要的模板。

技术栈的分类依据是核心技术，而不是相关技术，比如一个用 `Vite` + `TypeScript` + `Vue 3.0` 的项目，对项目来说，核心是 `Vue 3.0` ，所以会被归类到 `vue` 分类下。

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

## 显示与隐藏

从 `v0.10.0` 版本开始，如果一项技术栈被添加进来，但是没有对应的模板可以匹配到，那么会被暂时隐藏，不会在可选择的技术栈列表里展示，直到它有对应的模板被关联。

## 增加技术栈

目前技术栈需要通过官网的 [tech.json](https://github.com/awesome-starter/website/blob/main/src/public/config/tech.json) 文件来维护。

如果你有需要添加缺少的技术栈，请按照以下格式添加到文件数组里。

```json
{
  "name": "vue",
  "color": "#42b983"
}
```

JSON 字段说明：

| 字段  |   类型    | 说明                                                 |
| :---: | :-------: | :--------------------------------------------------- |
| name  |  string   | 技术栈名称，请使用官方推荐的日常叫法                 |
| color | Color Hex | 为了有足够的辨识度和关联性，请从技术栈的 LOGO 上取色 |

请发起 PR ，合并后技术栈将会被添加列表里。

## 管理本地技术栈

请参考: [在本地配置里管理本地技术栈](local-configuration.md#manage-local-technology-stacks) 。
