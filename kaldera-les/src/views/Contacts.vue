<template>
  <div class="contacts-box">
    <div class="contacts">
      <Info />
    </div>
    <ContactForm class="contact-form"></ContactForm>
  </div>
</template>

<script>
import Info from "@/components/contacts/Info.vue";
import ContactForm from "@/components/contacts/ContactForm.vue";

export default {
  components: {
    Info,
    ContactForm
  }
};
</script>

// TODO: Write media query for tablet and phone
<style scoped>
.contact-form {
  margin-right: 3%;
}

.contacts-box {
  height: 100%;
  width: 80%;

  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: rgb(0, 0, 0, 0.5);

  border-radius: 15px;
}

.contacts {
  display: flex;
  justify-content: space-around;
}
</style>
