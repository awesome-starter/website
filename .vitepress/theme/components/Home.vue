<template>
  <div
    class="flex flex-col justify-center items-center w-screen h-80 max-w-full bg-slate-800"
  >
    <h1 class="hero-name">{{ $t('home.name') }}</h1>

    <p class="text-2xl text-gray-400">{{ $t('home.description') }}</p>

    <div class="flex justify-center items-center mt-8">
      <!-- npm version -->
      <a href="https://www.npmjs.com/package/create-preset" target="__blank">
        <img
          src="https://img.shields.io/npm/v/create-preset?color=f97316&label=npm"
        />
      </a>
      <!-- npm version -->

      <!-- npm download analytics -->
      <a
        class="mx-2"
        href="https://www.npmjs.com/package/create-preset"
        target="__blank"
      >
        <img
          src="https://img.shields.io/npm/dm/create-preset?color=f97316&label=download"
        />
      </a>
      <!-- npm download analytics -->

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

    <div>Get Started</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-name {
  @apply md:text-8xl text-4xl text-black font-bold select-none;
  background: -webkit-linear-gradient(120deg, #7c3aed 30%, #2563eb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
