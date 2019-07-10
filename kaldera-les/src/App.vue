<template>
  <div>
    <div></div>
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
<<<<<<< HEAD
  background-image: url("./assets/background-image1.jpg");
  background-size: cover;
}
/* .bg-image {

  position: absolute;
  top: 0;
  bottom: 0;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  height: 100vh;
  width: 100vh;
  /* Center and scale the image nicely */
/* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
/* }  */
=======
  background-image: url(./assets/background-image.jpg);
}
body {
  margin: 0;
  padding: 0;
}
>>>>>>> c13272853e14a57ea1fb2a9d8a898e2c67b87bc9
</style>
