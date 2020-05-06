import { getCartItem } from "./../api/cart";

export default {
  namespaced: true,
  state: {
    cart: {},
  },
  mutations: {
    setCart(state, data) {
      state.cart = data;
    },
  },
  actions: {
    async getCart({ commit }, data) {
      const res = await getCartItem();
      commit("setCart", res.data);
    },
  },
};
