<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useClientStore } from '../store/client.store';
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '../data/supabase/client';
const clientStore = useClientStore()

const route = useRoute()
const router = useRouter()

console.log(route.name)

function validate() {
    if (clientStore.isFirstVist) {
        clientStore.client.id = uuidv4()
    }
    clientStore.setFirstVistToFalse()
    supabase.functions.invoke("client-app/new-client", {
        method: "POST",
        body: JSON.stringify(clientStore.client)
    })
    router.replace({ name: "menu" })
}
</script>
<template>
    <div class="flex flex-col space-y-4 px-4 w-full">
        <div>
            <p>Nom & prénoms*</p>

            <input type="text" class="bg-gray-200 placeholder:text-sm py-3 rounded px-2 w-full" name="fullName"
                v-model="clientStore.client.full_name" placeholder="Comment voulez-vous qu'on vous appelle? ">
        </div>

        <div>

            <p>Numéro de livraison*</p>

            <input type="text" class="bg-gray-200 placeholder:text-sm py-3 rounded px-2 w-full" name="phone"
                v-model="clientStore.client.phone" placeholder="Renseignez svp votre numéro">
            <p class="text-xs text-gray-400">Ceci sera utilisé pour la livraison</p>
        </div>

        <div class="w-full">
            <p>Adresse de livraison</p>
            <input type="text" class="bg-gray-200 placeholder:text-sm py-3 rounded px-2 w-full" name="addresse"
                v-model="clientStore.client.location" placeholder="Voulez-vous bien préciser votre quartier?">
            <p class="text-xs text-gray-400">Ceci sera utilisé pour la livraison</p>
        </div>
        <!-- <slot name="button"></slot> -->
        <button class="bg-black text-white px-2 py-3 rounded" @click="validate">Valider</button>
    </div>
</template>