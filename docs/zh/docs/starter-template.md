# 项目启动模板 {#starter-template}

通过 Preset CLI 创建的模板，都是通过 Git 仓库来获取。

## 关于来源分类 {#about-classification-of-sources}

模板归类为三种来源：官方维护、开源社区、本地配置。

|   来源   | 说明                               |  颜色  |                                                  查看                                                   |
| :------: | :--------------------------------- | :----: | :-----------------------------------------------------------------------------------------------------: |
| 官方维护 | 由 Awesome Starter 官方团队维护    |  黄色  |  [official.json](https://github.com/awesome-starter/website/blob/main/src/public/config/official.json)  |
| 开源社区 | 从 GitHub 等开源社区发现的优秀模板 |  白色  | [community.json](https://github.com/awesome-starter/website/blob/main/src/public/config/community.json) |
| 本地配置 | 您存储在计算机本地的一个配置文件   | 青蓝色 |                                              [配置](#配置)                                              |

## 添加模板的规则 {#rules-for-adding-templates}

配置文件是 JSON 格式，所以请遵循正确的 JSON 语法，添加到模板文件的数组里。

每个模板目前指定的格式如下：

```json
{
  "tech": "vue",
  "name": "vue3-ts-vite",
  "desc": "A template for Vue 3.0 with TypeScript, base on Vite.",
  "repo": "https://github.com/awesome-starter/vue3-ts-vite-starter"
}
```

JSON 字段说明：

| 字段 |  类型  | 说明                                                                                                                       |
| :--: | :----: | :------------------------------------------------------------------------------------------------------------------------- |
| tech | string | 技术栈，请在 [这里](https://github.com/awesome-starter/website/blob/main/src/public/config/tech.json) 查询合法的技术栈名称 |
| name | string | 模板的名称，请省略 `template` 或者 `starter` 这样的词，只写基本名称                                                        |
| desc | string | 模板的描述，一句话了解这个模板的特色                                                                                       |
| repo | string | 模板 URL ，支持 `https` 和 `git@` 开头地址，详见下方的 [模板 URL 说明](#模板-url-说明)                                     |

:::tip 提示
由于 Awesome Starter 的宗旨是提供优秀的项目模板，所以仅接受 Starter Template 类的仓库收集，如果你打算向 [community.json](https://github.com/awesome-starter/website/blob/main/src/public/config/community.json) 发起 PR 贡献，请留意这一点。

为了列表的美观，目前模板名称最多显示 20 个字符，模板描述最多显示 80 个字符，超出字数会以 `…` 省略号结尾。
:::

## 模板 URL 说明 {#template-url-description}

模板 URL 有两种格式支持：[HTTPS](#https) 和 [SSH](#ssh) 。

### HTTPS {#https}

默认使用 HTTPS 来配置，面向公开仓库：

- 如果是用 `master` 分支，直接复制仓库在浏览器的访问地址即可
- 如果是 `main` 或者 `develop` 等非 `master` 分支，需要拼接 `#` + 分支名

```bash
# 使用 master 作为主分支
https://github.com/awesome-starter/vue3-ts-vite-starter

# 使用 main 或者其他非 master 的分支（区别在末尾的 # 号 + 分支名）
https://github.com/awesome-starter/vue3-ts-vite-starter#main
```

:::tip 提示
官方模板和社区模板都需要以这种方式配置，因为它们都必须是公开的仓库。
:::

### SSH {#ssh}

如果你正确配置了 SSH Key ，可以通过 SSH 的方式来下载模板，这将通过 `git clone` 的形式拉取代码。

```bash
# 在仓库复制 SSH 下载地址
git@github.com:awesome-starter/create-preset.git
```

可以访问 [生成 / 添加 SSH 公钥](https://gitee.com/help/articles/4181) 了解如何配置 SSH Key 。

:::tip 提示
这个方式的提供，主要用于管理本地配置里的私有仓库。
:::

## 排序的优先级 {#sort-priority}

目前会按照 “本地配置” > “官方维护” > “开源社区” 的优先级排序，“本地配置” 会置于列表的最前面，方便您的日常使用。

:::tip
从 `v0.10.0` 开始，社区模板的排序不再固定，每次会随机生成排序，这是为了让不同的模板都有足够的机会被曝光在最前面。

如果有一些社区模板是你常用的，为了方便查找，请加入到本地配置里，这样可以被固定在列表最前面。
:::

## 管理本地模板 {#manage-local-templates}

请参考: [在本地配置里管理本地模板](local-configuration.md) 。
