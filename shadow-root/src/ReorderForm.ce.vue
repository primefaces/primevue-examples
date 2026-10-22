<script setup>
import { computed, ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Message from 'primevue/message';
import Select from 'primevue/select';

const coffees = [
    { name: 'House Espresso', origin: 'Brazil and Ethiopia', price: 21 },
    { name: 'Colombia Huila', origin: 'Washed, caramel and red apple', price: 24 },
    { name: 'Ethiopia Guji', origin: 'Natural, blueberry and jasmine', price: 27 }
];

const today = new Date();
const firstDelivery = new Date(today.getFullYear(), today.getMonth(), today.getDate() + ((11 - today.getDay()) % 7 || 7));

const coffee = ref(coffees[0]);
const bags = ref(6);
const delivery = ref(firstDelivery);
const placed = ref(false);

const total = computed(() => (coffee.value ? coffee.value.price * bags.value : 0));
const deliveryText = computed(() => delivery.value?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
</script>

<template>
    <form class="reorder-form" @submit.prevent="placed = true">
        <div class="field">
            <label for="coffee">Coffee</label>
            <Select v-model="coffee" inputId="coffee" :options="coffees" optionLabel="name" appendTo="self" fluid>
                <template #option="{ option }">
                    <div class="option">
                        <span>{{ option.name }}</span>
                        <small>{{ option.origin }}</small>
                    </div>
                </template>
            </Select>
        </div>
        <div class="row">
            <div class="field">
                <label for="bags">Bags</label>
                <InputNumber v-model="bags" inputId="bags" :min="1" :max="40" showButtons fluid />
            </div>
            <div class="field">
                <label for="delivery">Delivery</label>
                <DatePicker v-model="delivery" inputId="delivery" :minDate="firstDelivery" :disabledDays="[0, 1, 2, 3, 5, 6]" appendTo="self" showIcon fluid />
            </div>
        </div>
        <div class="summary">
            <span>Total</span>
            <strong>${{ total }}</strong>
        </div>
        <Button type="submit" label="Place order" />
        <Message v-if="placed" severity="success">Order placed. {{ bags }} bags of {{ coffee?.name }} arrive on {{ deliveryText }}.</Message>
    </form>
</template>

<style>
.reorder-form {
    display: grid;
    gap: 20px;
    max-width: 480px;
    padding: 28px;
    border: 1px solid var(--p-content-border-color);
    border-radius: 12px;
    background: var(--p-content-background);
    color: var(--p-text-color);
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.field {
    display: grid;
    gap: 6px;
}

.field label {
    font-size: 14px;
    font-weight: 600;
}

.option {
    display: grid;
}

.option small {
    color: var(--p-text-muted-color);
}

.summary {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid var(--p-content-border-color);
}

.summary strong {
    font-size: 20px;
    font-variant-numeric: tabular-nums;
}
</style>
