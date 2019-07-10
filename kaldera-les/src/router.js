import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/views/Homepage.vue";
import ProductCategories from "@/views/ProductCategories.vue";
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
      path: "/product-categories",
      name: "product-categories",
      component: ProductCategories
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});
