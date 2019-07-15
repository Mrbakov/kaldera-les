<template>
  <div>
    <form
      id="gform"
      method="POST"
      class="gform pure-form pure-form-stacked"
      data-email="mrbakov1@gmail.com"
      action="https://script.google.com/macros/s/AKfycbxIqq5XK0Nkixnhfsk183BipnHVR7ob4RBer1O2QzLR_BvS9qg/exec"
    >
      <h1>Write us</h1>
      <span class="p-float-label">
        <InputName id="name" name="name" type="text" v-model="name" />
        <label for="name">Name</label>
      </span>
      <span class="p-float-label">
        <InputEmail
          id="email"
          name="email"
          type="email"
          value=""
          v-model="email"
          required
        />
        <label for="email">Email</label>
      </span>
      <span class="p-float-label">
        <InputPhone id="phone" name="phone" type="text" v-model="phone" />
        <label for="phone">Phone</label>
      </span>
      <InputMessage
        class="p-float-label"
        rows="5"
        cols="30"
        id="message"
        name="message"
      />
      <SubmitButton label="Submit" />
    </form>
  </div>
</template>

<script
  data-cfasync="false"
  type="text/javascript"
  src="@/assets/form-submission-handler.js"
></script>

<script>
import InputName from "primevue/inputtext";
import InputEmail from "primevue/inputtext";
import InputPhone from "primevue/inputtext";
import InputMessage from "primevue/textarea";
import SubmitButton from "primevue/button";

export default {
  components: {
    InputName,
    InputEmail,
    InputPhone,
    InputMessage,
    SubmitButton
  },
  data() {
    return {
      name: null,
      email: null,
      phone: null
    };
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 27px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.p-inputtext {
  width: 270px;
  box-shadow: none !important;
  border: none !important;
}

.p-float-label {
  margin-top: 12%;
}

.p-button {
  margin-top: 10%;
  margin-right: auto;
  background-color: #0093dc;
  font-size: 15px;
  outline: none !important;
}
</style>
