<script lang="ts" setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import { useClientStore } from '../store/client.store';
import { supabase } from '../data/supabase/client';

const router = useRouter()
const askForDelivery = ref(false)
const toast = useToast()
const showModal = ref(false)
const total = ref(0)
const clientStore = useClientStore()
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


</script>
<template>
    <div class="relative h-full ">
        <div class="text-lg p-4 border-b border-black"  @click="back"> <v-icon name="fa-chevron-left"></v-icon>Mes commandes</div>
        <div class="px-4 pt-5 relative">
            <div class="flex items-center pb-4 space-x-2">
                <Checkbox v-model="askForDelivery" :binary="true" class="" />
                <p class="text-xs text-gray-500 animate-none ">Je désire être livré(e)?</p>
            </div>

            <div class="space-y-3 overflow-y-auto ">

                <div class="flex justify-start items-start px-4 py-2 bg-white border    w-full rounded-lg overflow-clip"
                    v-for="(item, index) in [10, 20,]" :key="index">
                    <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg" alt="Image"
                        class="rounded-lg w-14 h-14" />
                    <div class="px-4">
                        <p>Menu 1 - <span>0 XOF</span></p>
                        <p class="prose prose-red text-xs">Do pariatur pariatur officia incididunt. In labore ex ex magna
                            qui quis et
                            id dolore aliquip commodo. </p>
                        <div class="space-x-2">
                            <span class="text-xs rounded-xl px-3 py-1"> <v-icon name="fa-minus"></v-icon></span>
                            <span>1</span>
                            <span class="text-xs rounded-xl px-3 py-1"> <v-icon name="fa-plus"></v-icon></span>

                        </div>
                    </div>
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