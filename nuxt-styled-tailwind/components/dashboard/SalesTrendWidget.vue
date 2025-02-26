<script setup>
import { ref, watch, onMounted } from "vue";

const { primary, surface, isDarkMode } = useLayout();

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
    <div
        class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-4"
    >
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <span class="font-medium text-base">Sales Trend</span>
            </div>
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[300px]" />
        </div>
    </div>
</template>
