const userStore = {
  state: {
    user: {},
  },
  mutations: {
    setLogin(state, user) {
      state.user = user;
    },
    checkLogout(state) {
      let delobj = {};
      localStorage.setItem('user', JSON.stringify(delobj))
      state.user = delobj;
    }

  },
  actions: {
    getUser: ({ commit }, user) => {
      commit('setLogin', user)
    },
    logOut({ commit }) {
      commit('checkLogout')
    }


  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  namespaced: true

}

export default userStore
