import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    demoUrl: ''
  },
  mutations: {
    setDemoUrl(state, url: string) {
      state.demoUrl = url;
    }
  },
  actions: {}
});
