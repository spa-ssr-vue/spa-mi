import { getUserInfo } from "./../api/auth";

export default {
  namespaced: true,
  state: () => ({
    token: "",
    user: { username: "" },
  }),
  mutations: {
    setUser(state, data) {
      state.token = data.token;
      state.user = data.user;
    },
  },
  actions: {
    async getUser({ commit }) {
      const res = await getUserInfo();
      commit("setUser", {
        token: res.data.token,
        user: res.data.user,
      });
    },
  },
};
