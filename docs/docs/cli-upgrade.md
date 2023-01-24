# CLI Upgrade {#cli-upgrade}

Preset CLI provides the feature of new version detection, which is convenient for you to know whether there is a new version at any time.

## Detect new version {#detect-new-version}

You can with `upgrade` (alias `u`) command to detect new version, and if a new version of the Preset CLI is released, you will be asked if you need to upgrade.

## Upgrade the CLI {#upgrade-the-cli}

When a new version is detected, the command line will ask you if you need to upgrade:

- Select `Y` will proceed to the process of installing the new version
- Select `N` to exit the upgrade process

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
