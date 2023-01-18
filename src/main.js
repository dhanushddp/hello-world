import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function checkLogin(user) {
  if (localStorage.getItem('user') === null || localStorage.getItem('user') === "{}") {
    localStorage.setItem('user', JSON.stringify(user))
  }
  return JSON.parse(localStorage.getItem('user'))

}

const store = new Vuex.Store({
  state: {
    user: checkLogin({}),
  },
  mutations: {
    setLogin(state, user) {
      state.user = checkLogin(user)
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
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
