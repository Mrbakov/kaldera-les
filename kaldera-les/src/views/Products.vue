<template>
  <div>
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
              <OrderFormButon
                label="Order"
                class="p-button-raised"
                @click="open(product)"
              />
            </span>
          </template>
        </ProductCard>
      </li>
    </ul>
    <OrderDialog header="Godfather I" :visible.sync="display">
      <form
        id="gform"
        class="gform pure-form pure-form-stacked"
        data-email="mrbakov1@gmail.com"
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
          v-model="message"
        />
        <InputClassDropdown
          name="class"
          v-model="selectedClass"
          :options="classes"
          optionLabel="class"
          placeholder="Select a class"
        />
        <InputVolumeSpinner v-model="volume" name="volume" />
        <!-- TODO: Implement the other fields -->
        <OrderButton @click="sendEmail($event)" label="Submit" />
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
import OrderFormButon from "primevue/button";
import OrderDialog from "primevue/dialog";
import OrderButton from "primevue/button";

import InputName from "primevue/inputtext";
import InputEmail from "primevue/inputtext";
import InputPhone from "primevue/inputtext";
import InputMessage from "primevue/textarea";
import InputClassDropdown from "primevue/dropdown";
import InputVolumeSpinner from "primevue/spinner";

export default {
  props: ["products"],
  components: {
    ProductCard,
    OrderFormButon,
    OrderDialog,
    OrderButton,

    InputName,
    InputEmail,
    InputPhone,
    InputMessage,
    InputClassDropdown,
    InputVolumeSpinner
  },
  methods: {
    open(product) {
      if (product.boughtBy === "diameter") {
        this.boughtByDiameter = true;
      } else if (product.boughtByLengthAndWidth === "lw") {
        this.boughtByLengthAndWidth = true;
      }
      this.display = true;
    },
    close() {
      this.display = false;
      this.boughtByLengthAndWidth = false;
      this.boughtByDiameter = false;
    }
  },
  data() {
    return {
      boughtByDiameter: false,
      boughtByLengthAndWidth: false,
      display: false,
      name: null,
      email: null,
      phone: null,
      message: null,
      selectedClass: null,
      classes: ["A", "B", "C", "D", "E"],
      volume: null
    };
  }
};
</script>

<style scoped>
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
  font-size: 14px;
  font-weight: bold;
}

.p-button.p-button-raised {
  box-shadow: none !important;
}
</style>
