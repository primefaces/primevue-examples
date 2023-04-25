<script lang="ts" setup>
import { ref } from 'vue';
import type { Order } from '../data/models/command';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping

const orders = ref<Order[]>([
    {
        id: "1",
        dateOrder: '21 janv. 2023 16:40',
        state: 'Traitement'
        , items: [
            {
                item: {
                    id: "37fee742-785a-4302-bba7-5092ce6e3089",
                    description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
                    likes: 12,
                    name: "Ayimolou",
                    price: 1000,
                    images: []
                }, quantity: 1
            }
        ]
    },
    {
        id: "2",
        dateOrder: '22 janv. 2023 16:40',
        state: 'Livré'
        , items: [
            {
                item: {
                    id: "37fee742-785a-4302-bba7-5092ce6e3089",
                    description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
                    likes: 12,
                    name: "Ayimolou",
                    price: 1000,
                    images: []
                }, quantity: 1
            }
        ]
    },
    {
        id: "3",
        dateOrder: '20 nov. 2022 10:40',
        state: 'Livré'
        , items: [
            {
                item: {
                    id: "37fee742-785a-4302-bba7-5092ce6e3089",
                    description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
                    likes: 12,
                    name: "Ayimolou",
                    price: 1000,
                    images: []
                }, quantity: 1
            },

            {
                item: {
                    id: "37fee742-785a-4302-bba7-5092ce6e30800",
                    description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
                    likes: 12,
                    name: "Ema koumé",
                    price: 2000,
                    images: []
                }, quantity: 1
            },


        ]
    },
])
</script>

<template>
    <div class="space-y-2 px-4 pt-4">

        <div v-for="(item, index) in orders" :key="index" class="flex py-4 px-4 bg-slate-100 rounded-lg">
            <AvatarGroup>
                <Avatar :label="a.item.name[0]" shape="circle" size="normal"
                 style="background-color: '#9c27b0', color: '#655151'" v-for="(a, i) in item.items" :key="i" />       
            </AvatarGroup>
            <div class="pl-2 grow">
                <p class="text-xs pr-4"> Commande du {{ item.dateOrder }}</p>
                <p class="text-xs pr-4"> {{ item.items.length }} commande(s) </p>
            </div>
            <div>
                <p class="text-xs"> <span class="text-green-400"> {{ item.state }}</span></p>

            </div>


            <!-- <div class="flex">
            <div class="z-40 ...">05</div>
            <div class="z-30 ...">04</div>
            <div class="z-20 ...">03</div>
            <div class="z-10 ...">02</div>
            <div class="z-0 ...">01</div>
        </div> -->
        </div>
    </div>
</template>