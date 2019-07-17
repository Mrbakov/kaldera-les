import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/views/Homepage.vue";
import Products from "@/views/Products.vue";
import Contacts from "@/views/Contacts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/products/:id",
      name: "products",
      component: Products,
      props: true
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});
