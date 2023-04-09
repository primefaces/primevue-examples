<template>
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("description") }}</p>

  <LocaleSwitcher />
  <Button
    @click="confirm1()"
    icon="pi pi-check"
    :label="`${$t('confirm.label')}`"
    class="mt-3"
  ></Button>

  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import LocaleSwitcher from "./LocaleSwitcher.vue";
import { useConfirm } from "primevue/useconfirm";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: t("confirm.message"),
    header: t("confirm.header"),
    icon: "pi pi-exclamation-triangle",
    accept: () => {},
    reject: () => {},
  });
};
</script>
