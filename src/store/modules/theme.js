export default {
  state: {
    themeClass: localStorage.getItem('app-theme') || null,
  },

  getters: {
    getThemeClass(state) {
      return state.themeClass;
    },
  },

  mutations: {
    updateThemeClass(state, newVal) {
      localStorage.setItem('app-theme', newVal);
      state.themeClass = newVal;
    },
  },
  
  actions: {
  }
};
