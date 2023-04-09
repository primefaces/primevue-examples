<template>
  <Dropdown
    v-model="$i18n.locale"
    :options="locales"
    @change="onLocaleChange"
  />
</template>

<script setup>
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";
import en from "../locale/en";
import tr from "../locale/tr";

const { config } = usePrimeVue();

const localeFiles = {
  en,
  tr,
};

const locales = ref(["en", "tr"]);

const onLocaleChange = ({ value }) => {
  config.locale = localeFiles[value].primevue;
};
</script>
