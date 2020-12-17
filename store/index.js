import Vue from 'vue';
import Vuex from 'vuex';
import locale from "./modules/locale";
import results from "./modules/results";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    locale,
    results
  }
});

export default store;
