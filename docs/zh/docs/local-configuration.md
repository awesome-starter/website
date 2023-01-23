# 本地配置文件 {#local-configuration}

Preset CLI 提供了本地配置的管理功能，方便你管理常用的私人配置。

## 管理本地配置 {#manage-local-configuration}

可以通过 `config` （别名 `c`） 命令进行本地配置的管理，该命令需要结合子命令一起使用。

## 准备工作 {#prep-work}

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

## 设置配置文件 {#set-configuration-file}

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

## 查询配置状态 {#query-configuration-status}

可以通过 `config` 的子命令 `get` 查询当前设置的配置文件路径。

```bash
preset config get
```

如果你忘记配置文件保存在哪里的话，这个命令非常有用！

## 移除配置设置 {#remove-configuration-settings}

如果你想取消本地配置的设置，可以通过 `config` 的子命令 `remove` 来取消设置。

```bash
preset config remove
```

## 管理本地技术栈 {#manage-local-technology-stacks}

`config` 命令还提供了一个选项 `--tech` （缩写 `-t` ），用来管理本地技术栈，当你加上 `--tech` 选项的时候，会进入技术栈的管理模式（而不是模板配置）。

:::tip 提示
本地配置和本地技术栈的操作命令是一致的，区别只在于，技术栈需要加上 `--tech` 选项。
:::

比如你要设置你的本地技术栈列表，只需要加上 `--tech` 选项：

```
preset config set F:\config\local-tech.json --tech
```

本地技术栈的模板格式为：

```json
[
  {
    "name": "vue",
    "color": "#42b983"
  }
]
```

JSON 字段说明请查阅 [增加技术栈](technology-stack.md#add-technology-stack) 一节。
