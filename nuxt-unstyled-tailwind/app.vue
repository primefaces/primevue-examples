<script setup>
import { ref } from "vue";

const text = ref(null);
const msg = ref(null);

function greet() {
    msg.value = "Hello " + text.value;
}
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen p-10">
        <div class="flex items-center justify-center min-h-screen p-10">
            <section class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 max-w-3xl">
                <h1 class="text-4xl text-black dark:text-white font-bold text-center">Tailwind CSS + PrimeVue</h1>
                <div class="flex gap-4">
                    <InputText v-model="text" maxlength="20" fluid />
                    <Button label="Submit" @click="greet" class="min-w-20" :disabled="!text" />
                </div>
                <div class="h-8 text-center text-primary text-xl">
                    {{ msg }}
                </div>
            </section>
        </div>
    </div>
</template>
