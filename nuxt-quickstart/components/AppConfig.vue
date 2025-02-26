<script setup>
const { primaryColors, surfaces, primary, surface, isDarkMode, updateColors } = useLayout();
</script>

<template>
    <div
        class="absolute top-16 right-0 w-64 p-4 bg-white dark:bg-surface-900 rounded-md shadow-lg border border-surface-200 dark:border-surface-700 origin-top z-50 hidden"
    >
        <div class="flex flex-col gap-4">
            <div>
                <span class="text-sm text-surface-600 dark:text-surface-400 font-semibold">Primary</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-between">
                    <button
                        v-for="pc of primaryColors"
                        :key="pc.name"
                        type="button"
                        :title="pc.name"
                        :class="[
                            'border-none w-5 h-5 rounded-full p-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2',
                            { 'ring-2 ring-primary ring-offset-2': primary === pc.name },
                        ]"
                        :style="{ backgroundColor: pc.palette['500'] }"
                        @click="updateColors('primary', pc.name)"
                    />
                </div>
            </div>
            <div>
                <span class="text-sm text-surface-600 dark:text-surface-400 font-semibold">Surface</span>
                <div class="pt-2 flex gap-2 flex-wrap justify-between">
                    <button
                        v-for="s of surfaces"
                        :key="s.name"
                        type="button"
                        :title="s.name"
                        :class="[
                            'border-none w-5 h-5 rounded-full p-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2',
                            {
                                'ring-2 ring-primary ring-offset-2': surface
                                    ? surface === s.name
                                    : isDarkMode
                                    ? s.name === 'zinc'
                                    : s.name === 'slate',
                            },
                        ]"
                        :style="{ backgroundColor: s.palette['500'] }"
                        @click="updateColors('surface', s.name)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
