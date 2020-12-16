import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import store from "../store";
Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  store,
  render: h => h(App)
}).$mount('#app');
