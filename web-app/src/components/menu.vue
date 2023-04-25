<script lang="ts" setup>
import _ from "lodash"

import { useRouter } from "vue-router"
import type { Item } from "../data/models/items"
import { useOrderStore } from "../store/order.store"

const orderStore = useOrderStore()
const router = useRouter()

function reachCommands() {
  router.push({ name: "user-commands" })
}
function reachProfile() {
  router.push({ name: "user-me" })
}

const menu: Item[] = [
  {
    id: "37fee742-785a-4302-bba7-5092ce6e3089",
    description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
    likes: 12,
    name: "Ayimolou",
    price: 1000,
    images: []
  },
  {
    id: "37fee742-785a-4302-bba7-5092ce6e30800",
    description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
    likes: 12,
    name: "Ema koumé",
    price: 2000,
    images: []
  }
]

function addItemToOrder(menu: Item) {
  const index = _.findIndex(orderStore.currentOrder, { id: menu.id })
  if (index === -1) {
    orderStore.currentOrder.push(menu)
  } else {
    _.remove(orderStore.currentOrder, { id: menu.id })
  }
}
function isSelected(id: string): boolean {
  const index = _.findIndex(orderStore.currentOrder, { id: id })
  return index !== -1;
}
</script>


<template>
<div>
    <div class="px-4 pt-5 relative">
      <p class="text-xs text-gray-300 animate-none pb-2 ">Touchez pour ajouter au panier</p>
      <div class="space-y-3 overflow-y-auto ">


        <div
          class="flex justify-start items-start px-4 py-2  border w-full rounded-lg overflow-clip duration-500 transition"
          :class="{ 'bg-gray-200 shadow-xl': isSelected(item.id) }" @click="addItemToOrder(item)"
          v-for="(item, index) in menu" :key="index">
          <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg" alt="Image"
            class="rounded-lg w-14 h-14" />
          <div class="px-4">
            <p>{{ item.name }} - <span>{{ item.price }} Fcfa</span></p>
            <p class="prose prose-red text-xs">{{ item.description }} </p>
            <div class="space-x-2">
              <!-- <span class="text-xs rounded-xl px-3 py-1"> <v-icon name="fa-regular-heart"></v-icon> {{ item.likes }}</span> -->
              <span class="text-xs rounded-xl px-3 py-1"> <v-icon name="fa-regular-hand-peace"></v-icon> {{ item.likes
              }}</span>
              <!-- <span class="text-xs rounded-xl px-3 py-1"> <v-icon name="fa-regular-hand-peace"></v-icon> 10</span> -->

            </div>
          </div>
        </div>


        <div class="flex   w-full rounded-lg overflow-clip h-32 justify-center text-center">
          <p class="text-xs text-gray-300 ">vous êtes à la fin de la liste </p>
        </div>
      </div>

    </div>
    <!-- <Transition appear> -->
    <div v-if="orderStore.currentOrder.length != 0" class="bottom-0 fixed text-white bg-black transition duration-700"
      @click="reachCommands">
      <div class="flex  w-screen shadow-teal-300 items-center  h-16 justify-center snackShadow">
        <div class="pr-4 pl-4"> <v-icon name="fa-info"></v-icon> </div>
        <div class="w-full  justify-center">
          <p>Vous avez {{ orderStore.currentOrder.length }} commandes en attente </p>
          <p>Continuer </p>
        </div>
        <div class="pr-4"> <v-icon name="fa-chevron-right"></v-icon> </div>
      </div>
    </div>
</div>
</template>