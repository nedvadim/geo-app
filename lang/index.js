import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from "../store";
import en from "./en/en";
import ru from "./ru/ru";
Vue.use(VueI18n);

const messages = {
  en, ru
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: store.state.locale.lang || 'en',
  messages, // set locale messages
});

export default i18n;
