<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
html {
  height: 100vh;
  background-image: url(./assets/background-image.jpg);
}
body {
  margin: 0;
  padding: 0;
}
</style>
