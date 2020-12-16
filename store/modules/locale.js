const locale = {
  state: {
    lang: 'en',
    langOptions: [
      {
        label: 'EN',
        value: 'en'
      },
      {
        label: 'RU',
        value: 'ru'
      }
    ]
  },
  getters: {
    getLang: state => state.lang,
    getLangOptions: state => state.langOptions,
  },
  mutations: {
    SET_LOCALE: (state, payload) => {
      state.lang = payload;
    }
  }
};
export default locale;
