import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './index'
import productStore from '../src/stores/productStore'
import userStore from './stores/userStore'
import cartStore from './stores/cartStore'

Vue.use(Vuex)
Vue.use(VueRouter)


const store = new Vuex.Store({
  modules: {
    proStore: productStore,
    userStore,
    cartStore
  }
}
)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
