const results = {
  state: {
    currentResult: [],
    historyResults: [],
    defaultCurrentResult: [{
        ipAddress: '000.000.00.00',
        continent: '',
        country: '',
        city: '',
        timeZone: '',
        coordinates: ''
      }],
    defaultHistoryResults: [{
        ipAddress: '000.000.00.00',
        country: '',
        city: ''
      }],
  },
  getters: {
    getCurrentResult: state => state.currentResult,
    getDefaultCurrentResult: state => state.defaultCurrentResult,

    getHistoryResults: state => state.historyResults,
    getDefaultHistoryResults: state => state.defaultHistoryResults,

  },
  mutations: {
    SET_CURRENT_RESULT: (state, payload) => {
      state.currentResult = [{...payload}];
    },
    ADD_HISTORY_RESULT: (state, payload) => {
      state.historyResults = [...state.historyResults, {...payload}];
    },
    CLEAR_HISTORY: (state) => {
      state.historyResults = [];
    }
  },
  actions: {
    setResults({ commit }, payload) {
      const { ipAddress, continent, country, city, timeZone, coordinates } = payload;
      const newResult = {
        ipAddress,
        continent,
        country,
        city,
        timeZone,
        coordinates
      };
      const historyResult = {
        ipAddress,
        country,
        city
      };
      commit('SET_CURRENT_RESULT', newResult);
      commit('ADD_HISTORY_RESULT', historyResult)
    }
  }
};

export default results;
