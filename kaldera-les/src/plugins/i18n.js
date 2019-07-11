import Vue from "vue";
import VueI18n from "vue-i18n";
import { TRANSLATIONS } from "../assets/translations.js";

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "de", // set fallback locale
  messages: TRANSLATIONS // set locale messages
});

export default i18n;
