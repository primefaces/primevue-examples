<script lang="ts" setup>
import { ref, watch } from 'vue';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
const showModal = ref(false)
const total = ref(0)
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/src/store/order.store';
import type { Order, OrderItem } from '@/src/data/models/command';
import { whenever } from '@vueuse/core';
import _ from 'lodash';
// import moment from 'moment'
// import { v4 as uuidv4 } from 'uuid'
const router = useRouter()
const askForDelivery = ref(false)
const toast = useToast()

const orderStore = useOrderStore()

const orderList = ref<OrderItem[]>([])
function loadOrders() {
    orderStore.currentOrder.forEach(element => {
        const data: OrderItem = {
            item: element,
            quantity: 1
        }
        const itemTotalPrice = element.price
        total.value += itemTotalPrice
        orderList.value.push(data)
    });
}

async function initProcess() {
    if (askForDelivery.value) {
        showModal.value = true
        return;
    } else {

        await validateCommand()
    }
}

async function validateCommand() {
    toast.success("Votre commande a été prise en compte",)
    showModal.value = false
}
function back() {
    router.back()
}

function addQuantity(index: number) {
    orderList.value[index].quantity++
    total.value += orderList.value[index].item.price

}
function substractQuantity(index: number) {
    if (orderList.value[index].quantity === 1) {
        return;
    }
    orderList.value[index].quantity--
    total.value -= orderList.value[index].item.price
}

function removeItem(item: OrderItem) {
    const t = item.quantity * item.item.price
    total.value -= t
    _.remove(orderList.value,{item:item.item})
    _.remove(orderStore.currentOrder,{id:item.item.id})
}

loadOrders()
</script>
<template>
    <div class="relative h-full ">
        <div class="text-lg p-4 border-b border-black" @click="back"> <v-icon name="fa-chevron-left"></v-icon>Mes commandes
        </div>
        <div class="px-4 pt-5 relative">
            <div class="flex items-center pb-4 space-x-2">
                <Checkbox v-model="askForDelivery" :binary="true" class="" />
                <p class="text-xs text-gray-500 animate-none ">Je désire être livré(e)?</p>
            </div>

            <div class="space-y-3 overflow-y-auto ">

                <div class="flex justify-start items-start px-4 py-2 bg-white border relative w-full rounded-lg overflow-clip"
                    v-for="(item, index) in orderList" :key="index">
                    <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg" alt="Image"
                        class="rounded-lg w-14 h-14" />
                    <div class="px-4">
                        <p> {{ item.item.name }} <span> {{ item.item.price }} XOF</span></p>
                        <p class="prose prose-red text-xs"> {{ item.item.description }} </p>
                        <div class="space-x-2">
                            <span class="text-xs rounded-xl px-3 py-1" @click="substractQuantity(index)"> <v-icon
                                    name="fa-minus"></v-icon></span>
                            <span> {{ item.quantity }} </span>
                            <span class="text-xs rounded-xl px-3 py-1"> <v-icon name="fa-plus"
                                    @click="addQuantity(index)"></v-icon></span>
                        </div>
                    </div>
                    <span @click="removeItem(item)">
                        <v-icon name="fa-regular-times-circle"></v-icon>
                    </span>

                </div>
                <div class="flex   w-full rounded-lg overflow-clip h-32 justify-center text-center">
                    <p class="text-xs text-gray-300 ">vous êtes à la fin de la liste </p>
                </div>
            </div>

        </div>
        <div class="bottom-0 fixed border border-black" @click="initProcess">
            <div class="flex bg-white w-screen shadow-teal-300 items-center  h-16 justify-center snackShadow">
                <div class="pr-4 pl-4"> <v-icon name="fa-dollar-sign"></v-icon> </div>
                <div class="w-full  justify-center">
                    <p>Total</p>
                    <p>{{ total }} FCFA </p>
                </div>
                <div class="pr-4 pl-4 bg-black h-full w-16 text-white items-center flex justify-center">
                    <p class="text-xs">Valider</p>
                </div>
            </div>

        </div>
        <Dialog v-model:visible="showModal" modal>
            <div class="flex flex-col space-y-2">
                <p class="text-xs">Parce que vous avez accepté d'être livré</p>

                <!-- <v-icon name="fa-location-arrow" class=""></v-icon> -->
                <input type="text" class="bg-gray-100 px-4 py-2 rounded placeholder:text-xs focus:border-none"
                    placeholder="Entrez le nom de votre quartier ou de votre localité">



                <button class="bg-black py-3 rounded text-white text-xs" @click="validateCommand"> Valider</button>
            </div>
        </Dialog>
    </div>
</template>