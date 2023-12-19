<script setup></script>

<template>
  <div class="bg-surface-100 dark:bg-surface-900 flex items-center justify-center min-h-screen p-10">

    <section class="
        bg-white
        dark:bg-gray-800
        p-10
        rounded-xl
        flex flex-col
        gap-8
        max-w-3xl
      ">

      <h1 class="text-4xl text-black dark:text-white font-bold text-center">
        Tailwind CSS + PrimeVue
      </h1>
      <Panel header="Default Preset">
        <p>
          First panel component uses the global pass through preset from Lara.
        </p>
      </Panel>

      <Panel header="Custom Header" :pt="{
        header:
          'p-5 flex items-center justify-between border border-indigo-300 bg-indigo-500 text-indigo-50 rounded-tl-lg rounded-tr-lg dark:bg-indigo-900 dark:border-indigo-900/40 dark:text-white/80',
      }">
        <p>
          Second panel overrides the header section with custom a custom style.
        </p>
      </Panel>

      <Panel header="Custom Design" :ptOptions="{ mergeSections: false }" :pt="{
        header:
          'flex items-center justify-center p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-tl-2xl rounded-tr-2xl text-white',
        title: 'leading-none font-bold uppercase text-2xl',
        content:
          'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-5 pb-8 pt-3 text-white text-center rounded-bl-2xl rounded-br-2xl text-xl',
      }">
        <p>
          Third panel ignores the default preset with
          <b>mergeSections: false</b> and applies a custom style to all elements
          of the panel instead.
        </p>
      </Panel>
    </section>
  </div>
</template>

<style>
@import url("~/assets/css/base.css");
</style>