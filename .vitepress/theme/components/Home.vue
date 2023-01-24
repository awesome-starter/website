<template>
  <!-- Banner -->
  <div
    class="flex flex-col justify-center items-center w-screen md:h-180 h-130 max-w-full bg-green-100 dark:bg-green-200"
  >
    <div class="w-80 md:min-h-58 min-h-40 max-w-3/5 mx-auto mb-4">
      <img src="/logo-compact.svg" alt="Create Preset Logo" />
    </div>

    <h1 class="hero-name">{{ $t('home.name') }}</h1>

    <p class="text-2xl text-gray-500 text-center">
      {{ $t('home.description') }}
    </p>

    <div class="flex justify-center items-center min-h-5 mt-8">
      <!-- npm version -->
      <a
        class="mr-2"
        href="https://www.npmjs.com/package/create-preset"
        target="__blank"
      >
        <img
          src="https://img.shields.io/npm/v/create-preset?color=10b981&label=npm"
        />
      </a>
      <!-- npm version -->

      <!-- GitHub stars -->
      <a
        href="https://github.com/awesome-starter/create-preset"
        target="__blank"
      >
        <img
          alt="GitHub stars"
          src="https://img.shields.io/github/stars/awesome-starter/create-preset?style=social"
        />
      </a>
      <!-- GitHub stars -->
    </div>

    <a class="btn-started" href="./guide/getting-started">
      {{ $t('home.guideButtonText') }}
    </a>
  </div>
  <!-- Banner -->

  <!-- Features -->
  <div
    class="grid md:grid-cols-3 grid-cols-1 gap-4 md:w-screen-lg w-11/12 mx-auto md:my-12 my-4"
  >
    <div
      class="bg-light-600 dark:bg-neutral-800 rounded-xl p-4"
      v-for="item in $tm('home.features')"
      :key="item.title"
    >
      <div class="flex items-center mb-2">
        <!-- Icon -->
        <div
          class="flex justify-center items-center bg-light-900 dark:bg-neutral-900 w-12 h-12 text-xl rounded-lg"
        >
          {{ item.icon }}
        </div>
        <!-- Icon -->

        <!-- Feature -->
        <h2 class="text-black dark:text-white font-bold text-lg ml-4">
          {{ item.title }}
        </h2>
        <!-- Feature -->
      </div>

      <p class="text-gray-500 dark:text-gray-400 text-sm">
        {{ item.description }}
      </p>
    </div>
  </div>
  <!-- Features -->

  <div class="md:w-screen-lg w-11/12 mx-auto vp-doc">
    <slot />

    <a class="btn-started large" href="./guide/getting-started">
      {{ $t('home.guideButtonText') }}
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-name {
  @apply md:text-8xl text-4xl text-black font-bold select-none;
  /* green-400, green-700 */
  background: -webkit-linear-gradient(120deg, #34d399 30%, #047857);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-started {
  /* bgc green-500, hover green-600, border green-400, hover green-300 */
  @apply flex justify-center items-center flex-shrink-0 w-30 h-10 mx-auto
       !text-white rounded-3xl mt-8 cursor-pointer overflow-hidden
       bg-#10b981 hover:bg-#059669
       dark:bg-#10b981 dark:hover:bg-#059669
         box-border border-2 border-solid
       border-#34d399 hover:border-#6ee7b7
       dark:border-#10b981 dark:hover:border-#34d399;
  transition: all 0.2s ease-in-out;
}
.btn-started.large {
  @apply w-60 h-12 text-xl;
}
</style>
