import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import auth from "./auth";
import cart from "./cart";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    cart,
  },
});
