import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import i18n from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
import "primevue/resources/themes/nova-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

Vue.use(FlagIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
