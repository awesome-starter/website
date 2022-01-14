## 创建模板

创建模板是 Preset CLI 的核心功能，提供了丰富多彩的项目模板供您使用。

:::tip 提示
模板列表在持续完善中。
:::

### 初始化

可以通过 `init` （别名 `i`） 命令来创建一套你喜欢的模板。

```bash
preset init
```

### 请求最新配置

Preset CLI 支持在不更新版本的情况下就获取到最新的技术栈列表和启动模板列表，因为它们是通过配置文件来获取的。

配置文件托管在官网项目的 [config](https://github.com/awesome-starter/website/tree/main/docs/public/config) 文件夹下。

所以执行了 `init` 命令之后，会发起网络请求，获取配置文件。

### 技术栈分类

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

### 增加技术栈

目前技术栈需要通过官网的 [tech.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/tech.json) 文件来维护。

如果你有需要添加缺少的技术栈，请按照以下格式添加到文件数组里。

```json
{
  "name": "vue",
  "color": "#42b983"
}
```

JSON 字段说明：

字段|类型|说明
:-:|:-:|:--
name|string|技术栈名称，请使用官方推荐的日常叫法
color|Color Hex|为了有足够的辨识度和关联性，请从技术栈的 LOGO 上取色

请发起 PR ，合并后技术栈将会被添加列表里。

## 模板

通过 Preset CLI 创建的模板，都是通过 Git 仓库来获取。

### 关于来源分类

模板归类为三种来源：官方维护、开源社区、本地配置。

来源|说明|查看
:-:|:--|:-:
官方维护|由 Awesome Starter 官方团队维护|[official.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/official.json)
开源社区|从 GitHub 等开源社区发现的优秀模板，可通过 PR 合并|[community.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/community.json)
本地配置|您存储在计算机本地的一个配置文件，作为您的私有配置使用|[配置](#配置)

### 排序的优先级

目前会按照 “本地配置” > “官方维护” > “开源社区” 的优先级排序，“本地配置” 会置于列表的最前面，方便您的日常使用。

### 添加模板的规则

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

字段|类型|说明
:-:|:-:|:--
tech|string|技术栈，请在 [这里](https://github.com/awesome-starter/website/blob/main/docs/public/config/tech.json) 查询合法的技术栈名称
name|string|模板的名称，请省略 `template` 或者 `starter` 这样的词，只写基本名称
desc|string|模板的描述，一句话了解这个模板的特色
repo|string|模板 URL ，支持 `https` 和 `git@` 开头地址，详见下方的 [模板 URL 说明](#模板-url-说明)

:::tip 提示
由于 Awesome Starter 的宗旨是提供优秀的项目模板，所以仅接受 Starter Template 类的仓库收集，如果你打算向 [community.json](https://github.com/awesome-starter/website/blob/main/docs/public/config/community.json) 发起 PR 贡献，请留意这一点。
:::

### 模板 URL 说明

模板 URL 有两种格式支持：[HTTPS](#https) 和 [SSH](#ssh) 。

#### HTTPS

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

#### SSH

如果你正确配置了 SSH Key ，可以通过 SSH 的方式来下载模板，这将通过 `git clone` 的形式拉取代码。

```bash
# 在仓库复制 SSH 下载地址
git@github.com:awesome-starter/create-preset.git
```

可以访问 [生成 / 添加 SSH 公钥](https://gitee.com/help/articles/4181) 了解如何配置 SSH Key 。

:::tip 提示
这个方式的提供，主要用于管理本地配置里的私有仓库。
:::

## 配置

Preset CLI 提供了本地配置的管理功能，方便你管理常用的私人配置。

### 管理本地配置

可以通过 `config` （别名 `c`） 命令进行本地配置的管理，该命令需要结合子命令一起使用。

### 准备工作

创建一个 JSON 文件在你的计算机硬盘里，并按照以下格式写入文件内容：

例如：`F:\config\local-preset.json`

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

这样，一个本地配置文件就完成了。

### 设置配置文件

可以通过 `config` 的子命令 `set` 进行配置文件设置，设置后，Preset CLI 在读取配置时，也会一并读取你的本地配置。

```bash
preset config set <filePath>
```

例如，使用我们刚才的例子：

```
preset config set F:\config\local-preset.json
```

:::tip 提示
如果你的文件路径带有空格，请使用 `"` 双引号将路径包裹起来。
:::

### 查询配置状态

可以通过 `config` 的子命令 `get` 查询当前设置的配置文件路径。

```bash
preset config get
```

如果你忘记配置文件保存在哪里的话，这个命令非常有用！

### 移除配置设置

如果你想取消本地配置的设置，可以通过 `config` 的子命令 `remove` 来取消设置。

```bash
preset remove
```

## 升级

Preset CLI 提供了新版本检测的功能，方便你随时了解是否有新的版本。

### 检测新版本

可以通过 `upgrade` （别名 `u`） 命令进行版本检查，如果脚手架发布了新版本，将会询问您是否需要升级。

```bash
preset upgrade
```

### 升级脚手架

当检测到新版本的时候，命令行会询问您是否需要升级：

- 选择 “Y” 将进入安装新版本的流程
- 选择 “N” 则结束询问

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

### 更新记录

你可以在 [更新记录](https://github.com/awesome-starter/create-preset/releases) 了解每次版本升级带来的功能变化。




