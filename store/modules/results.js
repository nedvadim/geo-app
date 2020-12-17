const results = {
  state: {
    currentResult: ['000.000.00.00', '', '', '', '', ''],
    historyResults: [],
  },
  getters: {
    getCurrentResult: state => state.currentResult,
    getHistoryResults: state => state.historyResults,
  },
  mutations: {
    SET_CURRENT_RESULT: (state, payload) => {
      state.currentResult = [...payload];
    },
    ADD_HISTORY_RESULT: (state, payload) => {
      state.historyResults = [...state.historyResults, payload];
    }
  },
  actions: {
    setResults({ commit }, payload) {
      const newResult = [
        payload.ip,
        payload.contCode,
        payload.countryCode,
        payload.city,
        payload.timeZone,
        payload.coords
      ];
      const historyResult = [
        payload.ip,
        payload.countryCode,
        payload.city
      ];
      commit('SET_CURRENT_RESULT', newResult);
      commit('ADD_HISTORY_RESULT', historyResult)
    }
  }
};

export default results;
