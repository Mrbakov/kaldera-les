<template>
  <div>
    <Header v-on:change-locale="changeLocale" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import i18n from "@/plugins/i18n";

export default {
  components: {
    Header
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    changeActivePage(page) {
      this.activePage = page;
    }
  }
};
</script>

<style>
html {
  height: 100%;
  background-image: url(./assets/background-image.jpg);
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
