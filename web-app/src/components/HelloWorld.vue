<script lang="ts" setup>
import { useRouter } from 'vue-router';


const router = useRouter()

function reachHome() {
  router.replace({name: "signup"})
}
</script>

<template>
  <div class="flex h-screen  items-center justify-center ">
    <div class="flex flex-col text-center space-y-2">

      <p class="text-xl">Bienvue chez nous</p>
      <p class="text-xs">
       Commandez votre repas sans délai
      </p>
      <div>

        <button class="bg-black text-white px-4 py-2 rounded" @click="reachHome">Valider</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.snackShadow {
  box-shadow: 0px 10px 5px #dcdcdc, 0px -10px 5px #DCDCDC69;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.green {
  margin-top: 20px;
}

button {
  margin-top: 20px;

}
</style>
