<script setup>
import { ref } from 'vue';
import { palette, updatePrimaryPalette } from '@primeuix/themes';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';

const coffees = [
    { name: 'House Espresso', notes: 'Chocolate, hazelnut, brown sugar', price: 21, roast: 'Medium dark' },
    { name: 'Colombia Huila', notes: 'Caramel, red apple, cocoa', price: 24, roast: 'Medium' },
    { name: 'Ethiopia Guji', notes: 'Blueberry, jasmine, lemon', price: 27, roast: 'Light' },
    { name: 'Guatemala Huehue', notes: 'Toffee, orange, almond', price: 23, roast: 'Medium' }
];

const seasons = [
    { label: 'Autumn', color: '#c2410c' },
    { label: 'Evergreen', color: '#10b981' },
    { label: 'Winter', color: '#0284c7' }
];

const season = ref(seasons[1]);
const cart = ref(0);

function changeSeason(value) {
    if (value) updatePrimaryPalette(palette(value.color));
}
</script>

<template>
    <div class="shop">
        <header class="shop-header">
            <span class="brand">Northside Roasters</span>
            <SelectButton v-model="season" :options="seasons" optionLabel="label" :allowEmpty="false" @update:modelValue="changeSeason" />
            <Button :label="`Cart (${cart})`" outlined />
        </header>
        <h1>This week's coffee</h1>
        <ul class="coffees">
            <li v-for="coffee in coffees" :key="coffee.name">
                <div>
                    <h2>{{ coffee.name }}</h2>
                    <p>{{ coffee.notes }}</p>
                </div>
                <Tag :value="coffee.roast" severity="secondary" />
                <strong>${{ coffee.price }}</strong>
                <Button label="Add to cart" @click="cart++" />
            </li>
        </ul>
    </div>
</template>
