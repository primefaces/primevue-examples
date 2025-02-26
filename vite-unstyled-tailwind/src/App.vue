<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppTopbar from "./components/AppTopbar.vue";
import StatsWidget from "./components/dashboard/StatsWidget.vue";
import SalesTrendWidget from "./components/dashboard/SalesTrendWidget.vue";
import RecentActivityWidget from "./components/dashboard/RecentActivityWidget.vue";
import ProductOverviewWidget from "./components/dashboard/ProductOverviewWidget.vue";
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6">
        <AppTopbar />
        <div class="flex flex-col w-full max-w-7xl mx-auto gap-6 flex-1">
            <StatsWidget />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SalesTrendWidget />
                <RecentActivityWidget />
            </div>
            <ProductOverviewWidget />
        </div>
        <AppFooter />
    </div>
</template>
