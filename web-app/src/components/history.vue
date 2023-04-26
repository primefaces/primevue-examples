<script lang="ts" setup>
import { ref } from 'vue';
import type { Order } from '../data/models/command';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
import { supabase } from '../data/supabase/client';
import { useClientStore } from '../store/client.store';
import moment from 'moment';
const orders = ref<Order[]>([
    // {
    //     id: "1",
    //     dateOrder: '21 janv. 2023 16:40',
    //     state: 'Traitement'
    //     , items: [
    //         {
    //             item: {
    //                 id: "37fee742-785a-4302-bba7-5092ce6e3089",
    //                 description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
    //                 likes: 12,
    //                 name: "Ayimolou",
    //                 price: 1000,
    //                 images: []
    //             }, quantity: 1
    //         }
    //     ]
    // },
    // {
    //     id: "2",
    //     dateOrder: '22 janv. 2023 16:40',
    //     state: 'Livré'
    //     , items: [
    //         {
    //             item: {
    //                 id: "37fee742-785a-4302-bba7-5092ce6e3089",
    //                 description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
    //                 likes: 12,
    //                 name: "Ayimolou",
    //                 price: 1000,
    //                 images: []
    //             }, quantity: 1
    //         }
    //     ]
    // },
    // {
    //     id: "3",
    //     dateOrder: '20 nov. 2022 10:40',
    //     state: 'Livré'
    //     , items: [
    //         {
    //             item: {
    //                 id: "37fee742-785a-4302-bba7-5092ce6e3089",
    //                 description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
    //                 likes: 12,
    //                 name: "Ayimolou",
    //                 price: 1000,
    //                 images: []
    //             }, quantity: 1
    //         },

    //         {
    //             item: {
    //                 id: "37fee742-785a-4302-bba7-5092ce6e30800",
    //                 description: "Montre-bracelet, dite “d'Aviateur”, métal inaltérable, diam. 435ym. Mouvement de précision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",
    //                 likes: 12,
    //                 name: "Ema koumé",
    //                 price: 2000,
    //                 images: []
    //             }, quantity: 1
    //         },


    //     ]
    // },
])
const clientStore = useClientStore()
async function loadHistory() {
    const res = await supabase.functions.invoke(`client-app/history?param_id=${clientStore.client.id}`, { method: "GET" })
    console.log(res.data);
    orders.value = res.data
}

loadHistory()
function convertDate(params: string) {
    return moment(params).format("dd DD MMM. YYYY")

}
</script>

<template>
    <div class="space-y-2 px-4 pt-4">

        <div v-for="(item, index) in orders" :key="index" class="flex py-4 px-4 bg-slate-100 rounded-lg items-center">
            <AvatarGroup>
                <Avatar shape="circle" :label="menu.menu.name[0]" size="normal"
                    style="background-color: '#9c27b0', color: '#655151'" v-for="(menu, i) in item.items" :key="i" />
            </AvatarGroup>
            <div class="pl-2 grow">
                <p class="text-xs pr-4"> Commande du </p>
                <p class="text-xs">{{ convertDate(item.created_at) }}</p>
                <div class="text-xs pr-4 space-x-1">
                    <span v-for="(m, i) in item.items" :key="i">{{ m.menu.name.toUpperCase() }} ({{ m.quantity }})</span>

                </div>
                <!-- <p class="text-xs"> <span class="text-green-400"> {{ item.state }}</span></p> -->

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