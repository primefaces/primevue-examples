<script setup>
import { ref } from 'vue';
import { getActionsInstance } from '@primeuix/styled';
import { palette } from '@primeuix/themes';
import { useIsolation } from 'primevue/config';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import SelectButton from 'primevue/selectbutton';
import ToggleSwitch from 'primevue/toggleswitch';

const isolation = useIsolation();

const stock = ref([
    { name: 'House Espresso', bags: 42, visible: true },
    { name: 'Colombia Huila', bags: 18, visible: true },
    { name: 'Ethiopia Guji', bags: 3, visible: true },
    { name: 'Guatemala Huehue', bags: 0, visible: false }
]);

const colors = [
    { label: 'Indigo', color: '#6366f1' },
    { label: 'Rose', color: '#e11d48' }
];

const panelColor = ref(colors[0]);
const soldOut = ref(null);

function confirmSoldOut(item) {
    soldOut.value = item;
}

function markSoldOut() {
    soldOut.value.bags = 0;
    soldOut.value.visible = false;
    soldOut.value = null;
}

function changePanelColor(value) {
    if (value && isolation) getActionsInstance(isolation.theme).updatePrimaryPalette(palette(value.color));
}
</script>

<template>
    <div class="staff">
        <header class="staff-header">
            <h2>Staff panel</h2>
            <SelectButton v-model="panelColor" :options="colors" optionLabel="label" :allowEmpty="false" size="small" @update:modelValue="changePanelColor" />
        </header>
        <table>
            <thead>
                <tr>
                    <th>Coffee</th>
                    <th>Bags</th>
                    <th>Listed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in stock" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td><InputNumber v-model="item.bags" :min="0" :inputStyle="{ width: '4.5rem' }" /></td>
                    <td><ToggleSwitch v-model="item.visible" /></td>
                    <td><Button label="Sold out" severity="danger" text size="small" :disabled="item.bags === 0" @click="confirmSoldOut(item)" /></td>
                </tr>
            </tbody>
        </table>
        <Dialog :visible="!!soldOut" modal header="Mark as sold out" :style="{ width: '24rem' }" @update:visible="soldOut = null">
            <p>{{ soldOut?.name }} will be hidden from the shop until you add stock again.</p>
            <template #footer>
                <Button label="Cancel" text @click="soldOut = null" />
                <Button label="Mark sold out" severity="danger" @click="markSoldOut" />
            </template>
        </Dialog>
    </div>
</template>
