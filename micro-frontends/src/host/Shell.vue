<script setup>
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';

const remotes = {
    orders: { label: 'Orders', url: '/mfe/orders.js', mount: 'mountOrders' },
    customers: { label: 'Customers', url: '/mfe/customers.js', mount: 'mountCustomers' }
};

const current = ref('orders');
const dark = ref(false);
const outlet = ref();
let unmount;

async function show(name) {
    current.value = name;

    const remote = remotes[name];
    const module = await import(/* @vite-ignore */ new URL(remote.url, location.href).href);

    if (current.value !== name) return;

    unmount?.();
    unmount = module[remote.mount](outlet.value);
}

function toggleDark() {
    dark.value = document.documentElement.classList.toggle('app-dark');
}

onMounted(() => show('orders'));
</script>

<template>
    <header class="shell-header">
        <span class="brand">Northside Roasters</span>
        <nav>
            <button v-for="(remote, name) in remotes" :key="name" type="button" :aria-current="current === name ? 'page' : undefined" @click="show(name)">
                {{ remote.label }}
            </button>
        </nav>
        <Button :label="dark ? 'Light mode' : 'Dark mode'" severity="secondary" variant="outlined" size="small" @click="toggleDark" />
    </header>
    <main ref="outlet" class="outlet"></main>
</template>
