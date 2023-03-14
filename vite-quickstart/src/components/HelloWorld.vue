<script setup>
import {ref} from 'vue'

const count = ref(0);

const increaseCount = () => {
  count.value++;
}
</script>

<template>
  <div class="helloworld">  
    <span style="font-size: 1.5rem">
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://www.primefaces.org/primevue/" target="_blank" rel="noopener">PrimeVue</a>.
    </span>
    <Button @click="increaseCount" label="Count" />
    <span style="font-size: 1.5rem">{{ count }}</span>
  </div>
</template>

<style scoped>
.helloworld {
  display: flex;
  flex-direction: column;
  gap: .75rem;
  align-items: center;
}
</style>
