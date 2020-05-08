import { getCartItem } from "./../api/cart";

export default {
  namespaced: true,
  state: {
    cart: {
      totalCount: 0,
      totalPrice: 0,
      items: [],
    },
  },
  mutations: {
    setCart(state, data) {
      state.cart = data;
    },
  },
  actions: {
    async getCart({ commit }) {
      const res = await getCartItem();
      commit("setCart", res.data);
    },
  },
};
