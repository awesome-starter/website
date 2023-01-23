# 基本用法

创建模板是 Preset CLI 的核心功能，提供了丰富多彩的项目模板供您使用。

:::tip 提示
模板列表在持续完善中。
:::

## 初始化

可以通过 `init` （别名 `i`） 命令来创建一套你喜欢的模板。

```bash
preset init
```

## 指定项目名称

你可以添加一个参数作为项目名称，接下来会跳过输入项目名称的问题，直接选择技术栈：

```bash
preset init hello-vue
```

## 指定项目模板

也可以通过 `--template` 选项直接指定一个模板创建项目（需要 `v0.12.0` 以上）：

```bash
# 将使用 `vue3-ts-vite` 模板创建一个名为 `hello-vue` 的项目
preset init hello-vue --template vue3-ts-vite
```

## 请求最新配置

Preset CLI 支持在不更新版本的情况下就获取到最新的技术栈列表和启动模板列表，因为它们是通过配置文件来获取的。

配置文件托管在官网项目的 [config](https://github.com/awesome-starter/website/tree/main/src/public/config) 文件夹下。

所以执行了 `init` 命令之后，会发起网络请求，获取配置文件。
