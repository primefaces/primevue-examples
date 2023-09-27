<template>
  <div class="container">
    <div class="card">
      <img alt="Vue logo" src="./assets/primevue-logo.png" height="90" />
      <form @submit.prevent="greet">
        <InputText type="text" v-model="text" placeholder="Name" />
        <Button type="submit" label="Submit" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref();
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--surface-ground);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-card);
  padding: 3rem;
  border-radius: 1rem;
}

form {
  display: flex;
  gap: 1rem;
}
</style>
