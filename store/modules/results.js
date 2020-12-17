const results = {
  state: {
    currentResultHeaders: ['IP address', 'Continent/code', 'Country/code', 'City', 'Time zone', 'Coordinates'],
    historyHeaders: ['IP address', 'Country/code', 'City'],
    currentResult: [],
    historyResults: [],
    defaultCurrentResult: ['000.000.00.00', '', '', '', '', ''],
    defaultHistoryResults: [['000.000.00.00', '', '']]
  },
  getters: {
    getCurrentResultHeaders: state => state.currentResultHeaders,
    getCurrentResult: state => state.currentResult,
    getDefaultCurrentResult: state => state.defaultCurrentResult,

    getHistoryHeaders: state => state.historyHeaders,
    getHistoryResults: state => state.historyResults,
    getDefaultHistoryResults: state => state.defaultHistoryResults,

  },
  mutations: {
    SET_CURRENT_RESULT: (state, payload) => {
      state.currentResult = [...payload];
    },
    ADD_HISTORY_RESULT: (state, payload) => {
      state.historyResults = [...state.historyResults, payload];
    },
    CLEAR_HISTORY: (state) => {
      state.historyResults = [...state.defaultHistoryResults];
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
