<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="150" height="150" />

    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>
</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
header{
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items:center;
  justify-content:center;
}
.wrapper{
  padding-left: 30px;
}
</style>
