<template>
  <div>
    <form
      v-on:submit="sendEmail($event)"
      id="gform"
      class="gform pure-form pure-form-stacked"
      data-email="kalderales@gmail.com"
    >
      <h1>{{ $t("writeUs") }}</h1>
      <span class="p-float-label">
        <InputName id="name" name="name" type="text" v-model="name" />
        <label for="name">{{ $t("nameLabel") }}</label>
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
        <label for="email">{{ $t("emailLabel") }}</label>
      </span>
      <span class="p-float-label">
        <InputPhone id="phone" name="phone" type="text" v-model="phone" />
        <label for="phone">{{ $t("phoneLabel") }}</label>
      </span>
      <InputMessage
        class="p-float-label"
        rows="5"
        cols="30"
        id="message"
        name="message"
        v-model="message"
        type="text"
        :placeholder="$t('messagePlaceholder')"
      />
      <SubmitButton :label="$t('submitLabel')" />
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
import axios from "axios";

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
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  },
  methods: {
    sendEmail(event) {
      event.preventDefault();

      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      formData.append("message", this.message);
      axios
        .post(
          "https://script.google.com/macros/s/AKfycbxIqq5XK0Nkixnhfsk183BipnHVR7ob4RBer1O2QzLR_BvS9qg/exec",
          formData
        )
        .then(
          function(response) {
            this.name = "";
            this.email = "";
            this.phone = "";
            this.message = "";
            this.$toast.add({
              severity: "success",
              summary: "Success",
              detail: "Message submitted",
              life: 4000
            });
          }.bind(this)
        )
        .catch(
          function(error) {
            this.$toast.add({
              severity: "error",
              summary: "Error",
              detail: "Message was not submitted",
              life: 4000
            });
          }.bind(this)
        );
    }
  }
};
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        e.target.setCustomValidity("*");
      }
    };
    elements[i].oninput = function(e) {
      e.target.setCustomValidity("");
    };
  }
});
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
  box-shadow: none !important;
}
</style>
