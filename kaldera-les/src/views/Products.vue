<template>
  <div>
    <h1>{{ $t(species) }}</h1>
    <ul class="products-list">
      <li v-for="product in products" :key="product.id">
        <ProductCard>
          <template slot="header">
            <span class="card-header">
              <img alt="product photo" :src="product.photo" />
            </span>
          </template>
          <template slot="title">
            <span class="card-title">
              {{ $t(product.name) }}
            </span>
          </template>
          <template slot="content">
            <table>
              <tr>
                <td>Property</td>
                <td>{{ product.property3 }}</td>
              </tr>

              <tr>
                <td>Test Property</td>
                <td>{{ product.property4 }}</td>
              </tr>
              <tr>
                <td>Another One</td>
                <td>{{ product.property5 }}</td>
              </tr>
              <tr>
                <td>Operating</td>
                <td>{{ product.property6 }}</td>
              </tr>
              <tr>
                <td>Pro Perty</td>
                <td>{{ product.property7 }}</td>
              </tr>
              <tr>
                <td>Testing</td>
                <td>{{ product.property8 }}</td>
              </tr>
            </table>
          </template>
          <template slot="footer">
            <span class="card-footer">
              <OrderDialogButton
                label="Order"
                class="p-button-raised"
                @click="openDialog(product)"
              />
            </span>
          </template>
        </ProductCard>
      </li>
    </ul>
    <OrderDialog
      header="Order"
      :visible.sync="display"
      v-click-outside="closeDialog"
      contentStyle="height: 550px"
    >
      <form
        id="gform"
        class="gform pure-form pure-form-stacked"
        data-email="mrbakov1@gmail.com"
      >
        <Name
          id="name"
          name="name"
          type="text"
          v-model="name"
          placeholder="Name"
        />
        <Email
          id="email"
          name="email"
          type="email"
          value=""
          v-model="email"
          placeholder="Email"
        />
        <Phone
          id="phone"
          name="phone"
          type="text"
          v-model="phone"
          placeholder="Phone"
        />
        <Class v-model="grade" placeholder="Grade" />
        <Volume
          id="volume"
          v-model="volume"
          name="volume"
          placeholder="Volume"
        />
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">cm</span>
          <LW placeholder="Diameter" v-model="diameter" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">m</span>
          <Diameter id="length" placeholder="Length" v-model="length" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">m</span>
          <Diameter id="width" placeholder="Width" v-model="width" />
        </div>
        <Message
          class="p-float-label"
          rows="5"
          cols="30"
          id="message"
          name="message"
          v-model="message"
          placeholder="Additional requests"
        />
        <OrderButton @click="sendOrder($event)" label="Submit" />
      </form>
    </OrderDialog>
  </div>
</template>

<script
  data-cfasync="false"
  type="text/javascript"
  src="@/assets/form-submission-handler.js"
></script>

<script>
import ProductCard from "primevue/card";
import OrderDialogButton from "primevue/button";
import OrderDialog from "primevue/dialog";
import OrderButton from "primevue/button";

import Name from "primevue/inputtext";
import Email from "primevue/inputtext";
import Phone from "primevue/inputtext";
import Message from "primevue/textarea";
import Class from "primevue/inputtext";
import Volume from "primevue/spinner";
import LW from "primevue/inputtext";
import Diameter from "primevue/inputtext";
import axios from "axios";

export default {
  props: ["species", "products"],
  components: {
    ProductCard,
    OrderDialogButton,
    OrderDialog,
    OrderButton,

    Name,
    Email,
    Phone,
    Message,
    Class,
    Volume,
    LW,
    Diameter
  },
  data() {
    return {
      display: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      grade: "",
      volume: "",
      diameter: "",
      length: "",
      width: ""
    };
  },
  methods: {
    openDialog(product) {
      this.display = true;
    },
    closeDialog(event, el) {
      this.display = false;

      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.grade = "";
      this.volume = "";
      this.diameter = "";
      this.length = "";
      this.width = "";
    },
    sendOrder(event) {
      event.preventDefault();

      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      formData.append("message", this.message);
      formData.append("grade", this.grade);
      formData.append("volume", this.volume);
      formData.append("diameter", this.message);
      formData.append("length", this.length);
      formData.append("width", this.width);

      axios
        .post(
          "https://script.google.com/macros/s/AKfycbxIqq5XK0Nkixnhfsk183BipnHVR7ob4RBer1O2QzLR_BvS9qg/exec",
          formData
        )
        .then(
          function(response) {
            console.log(response);
            this.name = "";
            this.email = "";
            this.phone = "";
            this.message = "";
            this.grade = "";
            this.volume = "";
            this.diameter = "";
            this.length = "";
            this.width = "";
            this.$toast.add({
              severity: "success",
              summary: "Success",
              detail: "Order submitted",
              life: 4000
            });
          }.bind(this)
        )
        .catch(
          function(error) {
            console.log(error);
            this.$toast.add({
              severity: "error",
              summary: "Error",
              detail: "Order failed",
              life: 4000
            });
          }.bind(this)
        );
    }
  }
};
</script>

<style scoped>
h1 {
  padding-left: 4%;

  color: white;
  font-size: 35px;
  text-shadow: 2px 2px 4px #000000;
}

.products-list {
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  align-content: space-between;
  flex-wrap: wrap;

  list-style-type: none;
}
li {
  margin: 2%;
}

.p-card {
  width: 360px !important;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  border-radius: 15px;
}

img {
  padding: 15px;
  padding-bottom: 0px;
}

.card-footer {
  display: flex;
  justify-content: center;
}

.card-title {
  font-size: 27px;
}

table {
  background-color: (0, 0, 0, 0.5);

  font-size: 15px;
  border-collapse: collapse;
  width: 100%;
}

td {
  padding-top: 4px;
  padding-bottom: 4px;
}

td:nth-child(even) {
  color: #0093dc;
}

.p-button {
  width: 100%;

  font-size: 14px;
  font-weight: bold;
}

.p-button.p-button-raised {
  box-shadow: none !important;
}

#gform {
  height: 530px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.class {
  z-index: 1000 !important;
  position: relative !important;
}
</style>
