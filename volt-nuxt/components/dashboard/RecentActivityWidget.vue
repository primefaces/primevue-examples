<script setup>
const activities = [
    {
        icon: "pi-shopping-cart",
        text: "New order #1123",
        time: "2 minutes ago",
        color: "text-primary",
    },
    {
        icon: "pi-user-plus",
        text: "New customer registered",
        time: "15 minutes ago",
        color: "text-green-500",
    },
    {
        icon: "pi-check-circle",
        text: "Payment processed",
        time: "25 minutes ago",
        color: "text-blue-500",
    },
    {
        icon: "pi-inbox",
        text: "Inventory updated",
        time: "40 minutes ago",
        color: "text-yellow-500",
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
                v-for="(activity, index) in activities"
                :key="index"
                class="flex items-center gap-3 p-3 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-800"
            >
                <i :class="['pi', activity.icon, activity.color, 'text-lg!']"></i>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium">{{ activity.text }}</span>
                    <span class="text-xs text-surface-600 dark:text-surface-400">{{ activity.time }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
