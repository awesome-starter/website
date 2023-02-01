# Proxy Download {#proxy-download}

For the slow download problem in some areas, we provide the mirror proxy to speed up the download. You can use the `proxy` (alias `p`) command to turn on/off of the proxy . This command needs to be used in conjunction with subcommands.

:::tip
Proxy downloads is mainly used by developers in mainland China. Please experience whether it works in other regions.
:::

## Turn on {#turn-on}

The proxy service can be turned on with the `on` subcommand of `proxy`.

```bash
preset proxy on
```

After it is enabled, the mirror URL will be used to request configuration files. When downloading templates, if there is a mirror service for the template, the mirror URL will also be used to download.

## Turn off {#turn-off}

The proxy service can be turned off with the `off` subcommand of `proxy`.

```bash
preset proxy off
```

After turn off, the URL of Preset official website will be used to request the configuration file, and the downloaded template will no longer go through the mirror source, but will be downloaded directly through the GitHub repo(or other source code hosting platforms).

## About mirror sources {#about-mirror-sources}

According to [Rules for adding templates](starter-template#rules-for-adding-templates), add `mirror` field in the configuration file of the template, pointing to the URL of a mirror repository, when the proxy is enabled and the configuration of the template exists` mirror` field, the mirror source will be used to download.

In mainland China, it is recommended to use [Gitee](https://gitee.com), [Jihu GitLab](https://www.jihulab.com), [CODING DevOps](https://coding.net/) And other code hosting platforms are used as mirror repository. Compared with GitHub, their access speed in mainland China will be very fast.

## Set mirror synchronization rules {#set-mirror-synchronization-rules}

Take the main repository in GitHub and the mirror repository in Gitee as an example. When maintaining the code of the GitHub repository, it is not necessary to manually push it to Gitee to ensure real-time synchronization of the code.

The following is an example of using GitHub Actions to implement automatic code push. Template maintainers Can be used for reference.

### Generate SSH Key {#generate-ssh-key}

If you have not generated an SSH Key for your Git account, you need to create it first. In the Workflow of GitHub Actions, SSH will be used for authentication.

Please open the command line tool first, enter the following command and press Enter to run:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

:::tip
Please be careful not to set a password for the SSH Key, you can press Enter three times to directly confirm the question on the command line, and directly generate an SSH Key without a password.
:::

### Get public key {#get-public-key}

Use the following command at the command line to obtain the SSH public key you just generated:

```bash
cat ~/.ssh/id_ed25519.pub
```

Open Gitee's personal account [SSH public key setting page](https://gitee.com/profile/sshkeys) in the browser, and add the public key to the account profile.

### Get private key {#get-private-key}

Obtain the SSH private key using the following command at the command line:

```bash
cat ~/.ssh/id_ed25519
```

Open the template project repository on GitHub in the browser, enter the settings page of the repository, add a Repository Secret, and configure the obtained private key into it.

![Github Repo Secrets](/assets/img/github-repo-secrets.jpg)

:::tip
Since the data provided by this function are constants, they are usually named with all capital letters and underscores. For example, the SSH private key of Gitee is named `GITEE_SSH_PRIVATE_KEY` here.
:::

### Write Workflow {#write-workflow}

Open the template project repository on GitHub in the browser, and create a file with the storage path `./.github/workflows/sync-to-mirror.yml` in the root directory of the project:

![Github Repo Workflow](/assets/img/github-repo-workflow.jpg)

Configure the following code into the YAML file:

```yaml{4-8,17-19,21-24}
name: sync-to-mirror

on:
  # Which actions can trigger Workflow
  push:
  pull_request:
    #  Which branchs can trigger Workflow
    branches: [master, main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          # Read private key data named `GITEE_SSH_PRIVATE_KEY`
          # All Repository Secret data is obtained through the `secrets` variable.
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_SSH_PRIVATE_KEY }}
        with:
          # The URL of the source code repository
          source-repo: https://github.com/awesome-starter/vue3-ts-vite-starter.git
          # The URL of the mirror repository(requires an SSH URL)
          destination-repo: git@gitee.com:awesome-starter/vue3-ts-vite-starter.git
```

After the YAML file is configured and submitted to the repository along with the code, when the specified action occurs in the subsequent specified branch, the workflow will be automatically triggered to automatically complete the synchronization of the code.

If you need to synchronize to multiple repositories, you can configure multiple mirror mappings and key distribution under `steps` according to the format configuration.
