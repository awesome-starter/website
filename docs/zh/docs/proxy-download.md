---
outline: deep
---

# 代理下载 {#proxy-download}

针对部分地区下载慢的问题，我们提供了镜像代理的功能来加速下载，可以通过 `proxy` （别名 `p`） 命令来操作代理的开启 / 关闭，该命令需要结合子命令一起使用。

:::tip
代理下载主要面向中国大陆地区的开发者使用，其他地区请自行体验是否有效。
:::

## 开启代理 {#turn-on}

可以通过 `proxy` 的子命令 `on` 开启代理服务。

```bash
preset proxy on
```

开启后，会使用国内镜像 URL 请求配置文件，在下载模板时，如果模板存在镜像服务，也将使用镜像 URL 下载。

## 关闭代理 {#turn-off}

可以通过 `proxy` 的子命令 `off` 关闭代理服务。

```bash
preset proxy off
```

关闭后，会使用 Preset 官网的 URL 请求配置文件，下载模板也不再通过镜像源，会直接通过 GitHub 仓库下载（或者其他源码托管平台）。

## 关于镜像源 {#about-mirror-sources}

根据 [添加模板的规则](starter-template#rules-for-adding-templates) 说明，在模板的配置文件里添加 `mirror` 字段，指向一个镜像仓库的 URL ，当代理开启并且模板的配置存在 `mirror` 字段时，会使用该镜像源下载。

在中国大陆，推荐使用 [Gitee](https://gitee.com) 、 [极狐 GitLab](https://www.jihulab.com) 、 [CODING DevOps](https://coding.net/) 等代码托管平台作为镜像仓库，相对于 GitHub ，它们在中国大陆的访问速度会非常快。

## 设置镜像同步规则 {#set-mirror-synchronization-rules}

以主仓库在 GitHub ，镜像仓库在 Gitee 为例，在维护 GitHub 仓库的代码时，并不需要人工推送到 Gitee 以保证代码的实时同步。

以下是使用 GitHub Actions 实现代码自动推送的例子，模板维护者可以参考使用。

### 生成 SSH Key {#generate-ssh-key}

如果还没有为 Git 账号生成 SSH Key ，需要先创建，在 GitHub Actions 的 Workflow 里，会使用 SSH 进行身份验证。

请先打开命令行工具，输入以下命令并回车运行：

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

:::tip
请注意不要为该 SSH Key 设置密码，可回车三次直接确认命令行的问题，直接生成无密码的 SSH Key 。
:::

### 获取公钥 {#get-public-key}

在命令行使用以下命令获取刚刚生成的 SSH 公钥：

```bash
cat ~/.ssh/id_ed25519.pub
```

在浏览器打开 Gitee 的个人账户 [SSH 公钥设置页面](https://gitee.com/profile/sshkeys) ，将该公钥添加到账户资料中。

### 获取私钥 {#get-private-key}

在命令行使用以下命令获取 SSH 私钥：

```bash
cat ~/.ssh/id_ed25519
```

在浏览器打开在 GitHub 上的模板项目仓库，进入仓库的设置页面，添加一个 Repository Secret ，将获取到的私钥配置进去。

![Github Repo Secrets](/assets/img/github-repo-secrets.jpg)

:::tip
由于该功能所提供的数据都是常量，所以通常使用全大写字母加下划线风格进行命名，例如这里 Gitee 的 SSH 私钥则命名为 `GITEE_SSH_PRIVATE_KEY` 。
:::

### 编写 Workflow {#write-workflow}

在浏览器打开在 GitHub 上的模板项目仓库，在项目的根目录下，创建一个存放路径为 `./.github/workflows/sync-to-mirror.yml` 的文件：

![Github Repo Workflow](/assets/img/github-repo-workflow.jpg)

将以下代码配置到该 YAML 文件里：

```yaml{4-8,17-19,21-24}
name: sync-to-mirror

on:
  # 哪些行为可以触发 Workflow
  push:
  pull_request:
    # 哪些分支可以触发 Workflow
    branches: [master, main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          # 读取名为 `GITEE_SSH_PRIVATE_KEY` 的私钥数据
          # 所有的 Repository Secret 数据都通过 `secrets` 变量获取。
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_SSH_PRIVATE_KEY }}
        with:
          # 源代码仓库地址
          source-repo: https://github.com/awesome-starter/vue3-ts-vite-starter.git
          # 镜像仓库地址（需要使用 SSH 地址）
          destination-repo: git@gitee.com:awesome-starter/vue3-ts-vite-starter.git
```

YAML 文件配置完毕后，随着代码一起提交到仓库后，当后续指定分支出现指定行为时，会自动触发该工作流程，自动完成代码的同步。

如果需要同步到多个仓库，可以按格式配置在 `steps` 下配置多个镜像映射和密钥分配。
