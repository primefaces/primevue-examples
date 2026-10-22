<script setup>
import { computed, ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToggleSwitch from 'primevue/toggleswitch';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const customers = ref([
    { name: 'Little Owl Café', contact: 'Maya Chen', city: 'Portland', weekly: true, balance: 412 },
    { name: 'Second Street Bakery', contact: 'Daniel Ortiz', city: 'Beaverton', weekly: true, balance: 0 },
    { name: 'Harbor Books', contact: 'Priya Nair', city: 'Astoria', weekly: false, balance: 108 },
    { name: 'The Corner Spot', contact: 'Sam Whitfield', city: 'Portland', weekly: true, balance: 840 }
]);

const query = ref('');

const filtered = computed(() => customers.value.filter((customer) => `${customer.name} ${customer.contact} ${customer.city}`.toLowerCase().includes(query.value.toLowerCase())));

function initials(name) {
    return name
        .split(' ')
        .slice(0, 2)
        .map((word) => word[0])
        .join('');
}

function sendInvoice(customer) {
    toast.add({ group: 'customers', severity: 'info', summary: 'Invoice sent', detail: `$${customer.balance} to ${customer.contact}`, life: 3000 });
}
</script>

<template>
    <section class="customers">
        <header>
            <h1>Customers</h1>
            <IconField>
                <InputIcon>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                </InputIcon>
                <InputText v-model="query" placeholder="Search customers" />
            </IconField>
        </header>
        <ul>
            <li v-for="customer in filtered" :key="customer.name">
                <Avatar :label="initials(customer.name)" shape="circle" />
                <div class="who">
                    <strong>{{ customer.name }}</strong>
                    <span>{{ customer.contact }}, {{ customer.city }}</span>
                </div>
                <label class="weekly">
                    <ToggleSwitch v-model="customer.weekly" />
                    Weekly delivery
                </label>
                <Button label="Send invoice" severity="secondary" outlined :disabled="customer.balance === 0" @click="sendInvoice(customer)" />
            </li>
        </ul>
        <p v-if="filtered.length === 0" class="empty">No customer matches "{{ query }}".</p>
        <Toast group="customers" />
    </section>
</template>
