<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="150" height="150" />

    <div class="wrapper">
      <HelloWorld />
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items:center;
  justify-content:center;
}

.wrapper{
  padding-left: 2rem;
}
</style>
