<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const cafes = ['Little Owl Café', 'Second Street Bakery', 'Harbor Books', 'The Corner Spot'];
const coffees = ['House Espresso', 'Colombia Huila', 'Ethiopia Guji', 'Guatemala Huehue'];

const orders = ref([
    { id: 1048, cafe: 'Little Owl Café', coffee: 'House Espresso', bags: 12, status: 'Roasting' },
    { id: 1047, cafe: 'Harbor Books', coffee: 'Ethiopia Guji', bags: 4, status: 'Shipped' },
    { id: 1046, cafe: 'Second Street Bakery', coffee: 'Colombia Huila', bags: 8, status: 'Shipped' },
    { id: 1045, cafe: 'The Corner Spot', coffee: 'House Espresso', bags: 20, status: 'Delivered' },
    { id: 1044, cafe: 'Little Owl Café', coffee: 'Guatemala Huehue', bags: 6, status: 'Delivered' }
]);

const severities = { Roasting: 'warn', Shipped: 'info', Delivered: 'success' };

const visible = ref(false);
const draft = ref({ cafe: null, coffee: null, bags: 6 });

function openNew() {
    draft.value = { cafe: null, coffee: null, bags: 6 };
    visible.value = true;
}

function save() {
    const id = orders.value[0].id + 1;

    orders.value = [{ id, ...draft.value, status: 'Roasting' }, ...orders.value];
    visible.value = false;
    toast.add({ group: 'orders', severity: 'success', summary: `Order #${id} saved`, detail: `${draft.value.bags} bags for ${draft.value.cafe}`, life: 3000 });
}
</script>

<template>
    <section class="orders">
        <header>
            <h1>Orders</h1>
            <Button label="New order" @click="openNew" />
        </header>
        <DataTable :value="orders" dataKey="id" paginator :rows="5">
            <Column field="id" header="Order" sortable>
                <template #body="{ data }">#{{ data.id }}</template>
            </Column>
            <Column field="cafe" header="Café" sortable />
            <Column field="coffee" header="Coffee" />
            <Column field="bags" header="Bags" sortable />
            <Column field="status" header="Status">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="severities[data.status]" />
                </template>
            </Column>
        </DataTable>
        <Dialog v-model:visible="visible" modal header="New order" :style="{ width: '26rem' }">
            <div class="form">
                <label for="cafe">Café</label>
                <Select v-model="draft.cafe" inputId="cafe" :options="cafes" placeholder="Choose a café" fluid />
                <label for="coffee">Coffee</label>
                <Select v-model="draft.coffee" inputId="coffee" :options="coffees" placeholder="Choose a coffee" fluid />
                <label for="bags">Bags</label>
                <InputNumber v-model="draft.bags" inputId="bags" :min="1" showButtons fluid />
            </div>
            <template #footer>
                <Button label="Cancel" text @click="visible = false" />
                <Button label="Save order" :disabled="!draft.cafe || !draft.coffee" @click="save" />
            </template>
        </Dialog>
        <Toast group="orders" />
    </section>
</template>
