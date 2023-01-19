import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './index'

Vue.use(Vuex)
Vue.use(VueRouter)


const store = new Vuex.Store({
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
  }
})

Vue.config.productionTip = false


// let routes = [{
//   path: '/home',
//   name: "PersonalInfo",
//   component: PersonalInfo
// },
// {
//   path: '/login',
//   name: "LoginPage",
//   component: LoginPage
// }]


// const router = new VueRouter(
//   {
//     mode: "history",
//     routes
//   }
// )
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
