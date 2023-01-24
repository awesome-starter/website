<template>
  <div class="w-80 max-w-4/5 mx-auto my-8">
    <img src="/logo-compact.svg" alt="Create Preset Logo" />
  </div>

  <i18n-t keypath="logo.desc" tag="p" class="desc text-center text-sm">
    <a href="https://github.com/chengpeiquan" target="_blank">
      {{ $t('logo.designer') }}
    </a>
  </i18n-t>
</template>

<style scoped>
.desc {
  color: var(--vp-c-text-2);
}
</style>
