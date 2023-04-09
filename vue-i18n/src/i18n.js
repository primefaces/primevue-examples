import { createI18n } from "vue-i18n";
import en from "./locale/en";
import tr from "./locale/tr";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    tr,
  },
});

export default i18n;
