import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import store from "../store";
import i18n from "../lang";
Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
