<template>
  <div class="contacts-page-container">
    <h1>Contacts</h1>
    <div class="contacts-container">
      <Info />
      <Location />
    </div>
  </div>
</template>

<script>
import Location from "@/components/contacts/Location.vue";
import Info from "@/components/contacts/Info.vue";

export default {
  components: {
    Location,
    Info
  }
};
</script>

<style scoped>
h1 {
  width: 80%;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  text-shadow: 3px 3px 4px #000000;

  border-bottom: 7px solid black;
  padding-bottom: 7px;
}
.contacts-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contacts-container {
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: white;
}
</style>
