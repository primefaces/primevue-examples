<script setup>
import DataTable from "@/volt/DataTable.vue";
import InputText from "@/volt/InputText.vue";
import Tag from "@/volt/Tag.vue";
import Column from "primevue/column";
import { onMounted, ref, watch } from "vue";

const products = ref([
    {
        name: "Laptop Pro",
        category: "Electronics",
        price: 2499,
        status: "In Stock",
    },
    {
        name: "Wireless Mouse",
        category: "Accessories",
        price: 49,
        status: "Low Stock",
    },
    {
        name: "Monitor 4K",
        category: "Electronics",
        price: 699,
        status: "Out of Stock",
    },
    { name: "Keyboard", category: "Accessories", price: 149, status: "In Stock" },
]);

const selectedProduct = ref(null);
const searchQuery = ref("");
const loading = ref(false);
const filteredProducts = ref([]);

const searchProducts = () => {
    loading.value = true;
    filteredProducts.value = products.value.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            product.status.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    setTimeout(() => {
        loading.value = false;
    }, 300);
};

watch(searchQuery, () => {
    searchProducts();
});

onMounted(() => {
    filteredProducts.value = [...products.value];
});
</script>

<template>
    <div
        class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-4"
    >
        <div class="flex sm:items-center justify-between mb-4 sm:flex-row flex-col gap-2">
            <span class="font-medium text-base">Products Overview</span>
            <div class="relative">
                <i class="pi pi-search absolute top-1/2 -mt-2 text-surface-400 leading-none start-3 z-1" />
                <InputText
                    v-model="searchQuery"
                    placeholder="Search products..."
                    pt:root="ps-10"
                    @keyup.enter="searchProducts"
                />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <DataTable
                :value="filteredProducts"
                v-model:selection="selectedProduct"
                selectionMode="single"
                :loading="loading"
                :rows="5"
            >
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="price" header="Price" sortable>
                    <template #body="{ data }"> ${{ data.price }} </template>
                </Column>
                <Column field="status" header="Status">
                    <template #body="{ data }">
                        <Tag
                            :severity="
                                data.status === 'In Stock' ? 'success' : data.status === 'Low Stock' ? 'warn' : 'danger'
                            "
                        >
                            {{ data.status }}
                        </Tag>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
