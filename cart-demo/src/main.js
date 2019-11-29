import Vue from "vue";
import App from "./App.vue";
import "./styles/index.scss";
import router from "./routes/index";
import { store } from "./store/store";
import VueToastr from "vue-toastr";

Vue.use(VueToastr);

Vue.config.productionTip = false;

Vue.filter("saleOff", (value, price) => {
  return ((100 - value) * price) / 100;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
