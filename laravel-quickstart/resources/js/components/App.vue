<script setup>
import AppFooter from "./layout/AppFooter.vue";
import AppTopbar from "./layout/AppTopbar.vue";
import StatsWidget from "./dashboard/StatsWidget.vue";
import SalesTrendWidget from "./dashboard/SalesTrendWidget.vue";
import RecentActivityWidget from "./dashboard/RecentActivityWidget.vue";
import ProductOverviewWidget from "./dashboard/ProductOverviewWidget.vue";
</script>

<template>
    <div
        class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6"
    >
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
