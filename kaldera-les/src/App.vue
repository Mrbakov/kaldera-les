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
  data() {
    return {
      number: 1
    };
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
  background-image: url(./assets/background-image.jpg);
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
