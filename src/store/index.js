import { createStore } from 'vuex';

export default createStore({
  state: {
    siteTheme: localStorage.getItem('theme') || 'black_theme',
  },
  getters: {
    getTheme(state) {
      return state.siteTheme;
    },
  },
  mutations: {
    updateTheme(state, newTheme) {
      localStorage.setItem('theme', newTheme);
    },
  },
  actions: {},
  modules: {},
});
