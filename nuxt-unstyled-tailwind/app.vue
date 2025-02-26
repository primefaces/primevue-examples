<template>
    <div class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6">
        <AppTopbar />
        <div class="flex flex-col w-full max-w-7xl mx-auto gap-6 flex-1">
            <DashboardStatsWidget />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DashboardSalesTrendWidget />
                <DashboardRecentActivityWidget />
            </div>
            <DashboardProductOverviewWidget />
        </div>
        <AppFooter />
    </div>
</template>
