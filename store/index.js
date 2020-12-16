import Vue from 'vue';
import Vuex from 'vuex';
import locale from "./modules/locale";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    locale
  }
});

export default store;
