<script setup>
import { ref, watch, onMounted } from "vue";
import AppTopbar from "./components/AppTopbar.vue";
import AppFooter from "./components/AppFooter.vue";
import Card from "primevue/card";
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
      product.category
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
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
    aspectRatio: 0.8,

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
  <div
    class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6"
  >
    <AppTopbar />
    <div class="flex flex-col w-full max-w-7xl mx-auto gap-6 flex-1">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
        >
          <div class="flex items-start gap-2 justify-between">
            <span class="text-xl font-light leading-tight">Total Orders</span>
            <span
              class="shrink-0 bg-primary-100 dark:bg-primary-400/20 text-primary rounded-lg w-8 h-8 flex items-center justify-center border border-primary-200 dark:border-primary-400/40"
            >
              <i class="pi pi-shopping-cart text-xl! leading-none!"></i
            ></span>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <div class="text-3xl font-medium leading-tight">1,234</div>
            <div
              class="text-surface-600 dark:text-surface-400 text-sm leading-tight"
            >
              Last 7 days
            </div>
          </div>
        </div>

        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
        >
          <div class="flex items-start gap-2 justify-between">
            <span class="text-xl font-light leading-tight">Active Users</span>
            <span
              class="shrink-0 bg-primary-100 dark:bg-primary-400/20 text-primary rounded-lg w-8 h-8 flex items-center justify-center border border-primary-200 dark:border-primary-400/40"
            >
              <i class="pi pi-users text-xl! leading-none!"></i>
            </span>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <div class="text-3xl font-medium leading-tight">2,573</div>
            <div
              class="text-surface-600 dark:text-surface-400 text-sm leading-tight"
            >
              Last 7 days
            </div>
          </div>
        </div>

        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
        >
          <div class="flex items-start gap-2 justify-between">
            <span class="text-xl font-light leading-tight">Revenue</span>
            <span
              class="shrink-0 bg-primary-100 dark:bg-primary-400/20 text-primary rounded-lg w-8 h-8 flex items-center justify-center border border-primary-200 dark:border-primary-400/40"
            >
              <i class="pi pi-dollar text-xl! leading-none!"></i>
            </span>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <div class="text-3xl font-medium leading-tight">$45,200</div>
            <div
              class="text-surface-600 dark:text-surface-400 text-sm leading-tight"
            >
              Last 7 days
            </div>
          </div>
        </div>

        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
        >
          <div class="flex items-start gap-2 justify-between">
            <span class="text-xl font-light leading-tight">Success Rate</span>
            <span
              class="shrink-0 bg-primary-100 dark:bg-primary-400/20 text-primary rounded-lg w-8 h-8 flex items-center justify-center border border-primary-200 dark:border-primary-400/40"
            >
              <i class="pi pi-chart-line text-xl! leading-none!"></i>
            </span>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <div class="text-3xl font-medium leading-tight">95%</div>
            <div
              class="text-surface-600 dark:text-surface-400 text-sm leading-tight"
            >
              Last 7 days
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-4"
        >
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <span class="font-medium text-base">Sales Trend</span>
            </div>
            <Chart
              type="bar"
              :data="chartData"
              :options="chartOptions"
              class="h-[300px]"
            />
          </div>
        </div>

        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-4"
        >
          <span class="font-medium text-base">Recent Activity</span>
          <div class="flex flex-col gap-3">
            <div
              class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
              <i class="pi pi-shopping-cart text-primary text-lg!"></i>
              <div class="flex flex-col gap-1">
                <span class="text-sm font-medium">New order #1123</span>
                <span class="text-xs text-surface-600 dark:text-surface-400"
                  >2 minutes ago</span
                >
              </div>
            </div>
            <div
              class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
              <i class="pi pi-user-plus text-green-500 text-lg!"></i>
              <div class="flex flex-col gap-1">
                <span class="text-sm font-medium">New customer registered</span>
                <span class="text-xs text-surface-600 dark:text-surface-400"
                  >15 minutes ago</span
                >
              </div>
            </div>
            <div
              class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
              <i class="pi pi-check-circle text-blue-500 text-lg!"></i>
              <div class="flex flex-col gap-1">
                <span class="text-sm font-medium">Payment processed</span>
                <span class="text-xs text-surface-600 dark:text-surface-400"
                  >25 minutes ago</span
                >
              </div>
            </div>
            <div
              class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
              <i class="pi pi-inbox text-yellow-500 text-lg!"></i>
              <div class="flex flex-col gap-1">
                <span class="text-sm font-medium">Inventory updated</span>
                <span class="text-xs text-surface-600 dark:text-surface-400"
                  >40 minutes ago</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-4"
      >
        <div
          class="flex sm:items-center justify-between mb-4 sm:flex-row flex-col gap-2"
        >
          <span class="font-medium text-base">Products Overview</span>
          <IconField class="sm:w-auto w-full">
            <InputIcon class="pi pi-search" />
            <InputText
              v-model="searchQuery"
              placeholder="Search products..."
              class="p-inputtext-sm md:w-auto! w-full!"
              @keyup.enter="searchProducts"
            />
          </IconField>
        </div>
        <div class="flex flex-col gap-2">
          <DataTable
            :value="filteredProducts"
            v-model:selection="selectedProduct"
            selectionMode="single"
            :loading="loading"
            :rows="5"
            :pt="{
              mask: {
                class:
                  'backdrop-blur-sm! bg-surface-0/20! dark:bg-surface-900/20!',
              },
              loadingIcon: {
                class: 'text-primary!',
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
                      ? 'warning'
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
