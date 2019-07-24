<template>
  <div>
    <h1>{{ $t(species.name) }}</h1>
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
              <tr v-for="(property, index) in product.properties" :key="index">
                <td class="property-name">{{ property.name }}</td>
                <td>{{ property.value }}</td>
              </tr>
            </table>
          </template>
          <template slot="footer">
            <span class="card-footer">
              <OrderDialogButton
                :label="$t('order')"
                class="p-button-raised"
                @click="openDialog(product.orderName, species.orderName)"
              />
            </span>
          </template>
        </ProductCard>
      </li>
    </ul>
    <OrderDialog
      :header="$t('order')"
      :visible.sync="display"
      v-click-outside="closeDialog"
      contentStyle="height: 550px"
    >
      <form
        v-on:submit="sendOrder($event, product, speciesName)"
        id="gform"
        class="gform pure-form pure-form-stacked"
        data-email="kalderales@gmail.com"
      >
        <Name
          id="name"
          name="name"
          type="text"
          v-model="name"
          :placeholder="$t('namePlaceholder')"
        />
        <Email
          id="email"
          name="email"
          type="email"
          value=""
          v-model="email"
          :placeholder="$t('emailLabel')"
          required
        />
        <Phone
          id="phone"
          name="phone"
          type="text"
          v-model="phone"
          :placeholder="$t('phoneLabel')"
        />
        <Class v-model="grade" :placeholder="$t('grade')" />
        <Quantity
          id="quantity"
          v-model="quantity"
          name="quantity"
          :placeholder="$t('quantity')"
        />
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">{{ $t("cm") }}</span>
          <Diameter :placeholder="$t('diameter')" v-model="diameter" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">{{ $t("m") }}</span>
          <LW id="length" :placeholder="$t('length')" v-model="length" />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">{{ $t("m") }}</span>
          <LW id="width" :placeholder="$t('width')" v-model="width" />
        </div>
        <Message
          class="p-float-label"
          rows="5"
          cols="30"
          id="message"
          name="message"
          v-model="message"
          :placeholder="$t('аdditionalRequests')"
        />
        <OrderButton :label="$t('submitLabel')" />
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
import Quantity from "primevue/spinner";
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
    Diameter,
    Quantity
  },
  data() {
    return {
      display: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      grade: "",
      quantity: "",
      diameter: "",
      length: "",
      width: "",
      product: "",
      speciesName: ""
    };
  },
  methods: {
    openDialog(product, speciesName) {
      this.product = product;
      this.speciesName = speciesName;
      this.display = true;
    },
    closeDialog(event, el) {
      this.display = false;

      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.grade = "";
      this.quantity = "";
      this.diameter = "";
      this.length = "";
      this.width = "";
    },
    sendOrder(event, product, speciesName) {
      event.preventDefault();

      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      formData.append("message", this.message);
      formData.append("grade", this.grade);
      formData.append("quantity", this.quantity);
      formData.append("diameter", this.diameter);
      formData.append("length", this.length);
      formData.append("width", this.width);
      formData.append("product", this.product);
      formData.append("species", this.speciesName);

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
            this.grade = "";
            this.quantity = "";
            this.diameter = "";
            this.length = "";
            this.width = "";
            this.product = "";
            this.species = "";
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
  height: 390px !important;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;

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
  align-items: flex-end;
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
  font-size: 17px;
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
