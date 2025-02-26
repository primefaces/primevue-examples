<script setup>
import { ref, watch, onMounted } from "vue";
import AppTopbar from "./components/AppTopbar.vue";
import AppFooter from "./components/AppFooter.vue";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import Chart from "primevue/chart";
import { useLayout } from "./composables/useLayout";

const { primary, surface, isDarkMode } = useLayout();

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

const chartData = ref(null);
const chartOptions = ref(null);

function setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
            {
                type: "bar",
                label: "Subscriptions",
                backgroundColor: documentStyle.getPropertyValue("--p-primary-400"),
                data: [4000, 10000, 15000, 4000],
                barThickness: 32,
            },
            {
                type: "bar",
                label: "Advertising",
                backgroundColor: documentStyle.getPropertyValue("--p-primary-300"),
                data: [2100, 8400, 2400, 7500],
                barThickness: 32,
            },
            {
                type: "bar",
                label: "Affiliate",
                backgroundColor: documentStyle.getPropertyValue("--p-primary-200"),
                data: [4100, 5200, 3400, 7400],
                borderRadius: {
                    topLeft: 8,
                    topRight: 8,
                },
                barThickness: 32,
            },
        ],
    };
}

function setChartOptions() {
    return {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    color: "transparent",
                    borderColor: "transparent",
                },
            },
            y: {
                stacked: true,
                grid: {
                    color: "transparent",
                    borderColor: "transparent",
                    drawTicks: false,
                },
            },
        },
    };
}

watch([primary, surface, isDarkMode], () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
</script>

<template>
    <div class="layout-container">
        <AppTopbar />
        <div class="layout-grid">
            <div class="stats">
                <div class="layout-card">
                    <div class="stats-header">
                        <span class="stats-title">Total Orders</span>
                        <span class="stats-icon-box">
                            <i class="pi pi-shopping-cart"></i>
                        </span>
                    </div>
                    <div class="stats-content">
                        <div class="stats-value">1,234</div>
                        <div class="stats-subtitle">Last 7 days</div>
                    </div>
                </div>

                <div class="layout-card">
                    <div class="stats-header">
                        <span class="stats-title">Active Users</span>
                        <span class="stats-icon-box">
                            <i class="pi pi-users"></i>
                        </span>
                    </div>
                    <div class="stats-content">
                        <div class="stats-value">2,573</div>
                        <div class="stats-subtitle">Last 7 days</div>
                    </div>
                </div>

                <div class="layout-card">
                    <div class="stats-header">
                        <span class="stats-title">Revenue</span>
                        <span class="stats-icon-box">
                            <i class="pi pi-dollar"></i>
                        </span>
                    </div>
                    <div class="stats-content">
                        <div class="stats-value">$45,200</div>
                        <div class="stats-subtitle">Last 7 days</div>
                    </div>
                </div>

                <div class="layout-card">
                    <div class="stats-header">
                        <span class="stats-title">Success Rate</span>
                        <span class="stats-icon-box">
                            <i class="pi pi-chart-line"></i>
                        </span>
                    </div>
                    <div class="stats-content">
                        <div class="stats-value">95%</div>
                        <div class="stats-subtitle">Last 7 days</div>
                    </div>
                </div>
            </div>
            <div class="layout-grid-row">
                <div class="layout-card col-item-2">
                    <div class="chart-header">
                        <span class="chart-title">Sales Trend</span>
                    </div>
                    <div class="chart-content">
                        <Chart type="bar" :data="chartData" :options="chartOptions" style="height: 300px" />
                    </div>
                </div>

                <div class="layout-card col-item-2">
                    <span class="chart-title">Recent Activity</span>
                    <div class="activity-list">
                        <div class="activity-item">
                            <i class="activity-icon pi pi-shopping-cart"></i>
                            <div class="activity-content">
                                <span class="activity-text">New order #1123</span>
                                <span class="activity-time">2 minutes ago</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <i class="activity-icon green pi pi-user-plus"></i>
                            <div class="activity-content">
                                <span class="activity-text">New customer registered</span>
                                <span class="activity-time">15 minutes ago</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <i class="activity-icon blue pi pi-check-circle"></i>
                            <div class="activity-content">
                                <span class="activity-text">Payment processed</span>
                                <span class="activity-time">25 minutes ago</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <i class="activity-icon yellow pi pi-inbox"></i>
                            <div class="activity-content">
                                <span class="activity-text">Inventory updated</span>
                                <span class="activity-time">40 minutes ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layout-card">
                <div class="products-header">
                    <span class="products-title">Products Overview</span>
                    <IconField class="search-field">
                        <InputIcon class="pi pi-search" />
                        <InputText
                            v-model="searchQuery"
                            placeholder="Search products..."
                            class="products-search"
                            @keyup.enter="searchProducts"
                        />
                    </IconField>
                </div>
                <div class="products-table-container">
                    <DataTable
                        :value="filteredProducts"
                        v-model:selection="selectedProduct"
                        selectionMode="single"
                        :loading="loading"
                        :rows="5"
                        class="products-table"
                        :pt="{
                            mask: {
                                class: 'products-table-mask',
                            },
                            loadingIcon: {
                                class: 'products-table-loading',
                            },
                        }"
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
                                        data.status === 'In Stock'
                                            ? 'success'
                                            : data.status === 'Low Stock'
                                            ? 'warn'
                                            : 'danger'
                                    "
                                >
                                    {{ data.status }}
                                </Tag>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>
        <AppFooter />
    </div>
</template>
