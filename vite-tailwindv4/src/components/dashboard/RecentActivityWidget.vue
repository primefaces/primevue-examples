<script setup>
const activities = [
    {
        icon: "pi-shopping-cart",
        text: "New order #1123",
        time: "2 minutes ago",
        color: "pink",
    },
    {
        icon: "pi-user-plus",
        text: "New customer registered",
        time: "15 minutes ago",
        color: "green",
    },
    {
        icon: "pi-check-circle",
        text: "Payment processed",
        time: "25 minutes ago",
        color: "blue",
    },
    {
        icon: "pi-inbox",
        text: "Inventory updated",
        time: "40 minutes ago",
        color: "yellow",
    },
];
</script>

<template>
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
                    <span class="text-xs text-surface-600 dark:text-surface-400">2 minutes ago</span>
                </div>
            </div>
            <div
                class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
                <i class="pi pi-user-plus text-green-500 text-lg!"></i>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium">New customer registered</span>
                    <span class="text-xs text-surface-600 dark:text-surface-400">15 minutes ago</span>
                </div>
            </div>
            <div
                class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
                <i class="pi pi-check-circle text-blue-500 text-lg!"></i>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium">Payment processed</span>
                    <span class="text-xs text-surface-600 dark:text-surface-400">25 minutes ago</span>
                </div>
            </div>
            <div
                class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
                <i class="pi pi-inbox text-yellow-500 text-lg!"></i>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium">Inventory updated</span>
                    <span class="text-xs text-surface-600 dark:text-surface-400">40 minutes ago</span>
                </div>
            </div>
        </div>
    </div>
</template>
