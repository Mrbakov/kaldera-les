<template>
  <div>
    <Header v-on:change-locale="changeLocale" />
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import i18n from "@/plugins/i18n";
import Toast from "primevue/toast";

export default {
  components: {
    Header,
    Toast
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style>
html {
  height: 100%;
  background-image: url(./assets/pictures/background-image.jpg);
  font-family: "Open Sans", sans-serif;
}
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
router-view {
  display: flex;
  align-items: center;
}
</style>
