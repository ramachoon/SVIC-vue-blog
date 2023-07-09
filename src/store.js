import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    focusNum: 1
  },
  mutations: {
    setFocusNum(state, payload) {
      state.focusNum = payload;
    }
  }
})