

const cartStore = {
  state: {
    cart: [],
    orderPlaced: []
  },
  mutations: {
    addCart(state, data) {
      state.cart.push(data)


    },
    removeFromCart(state, data) {
      state.cart.splice(data, 1)
    },
    orderPlaced(state) {
      state.orderPlaced = state.cart
      state.cart = []
    },
    setCartCountAdd(state, index) {
      if (state.cart[index].itemCount >= state.cart[index].quantity) {
        state.cart[index].quantity += 1
      }



    },
    setCartCountSub(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1

      }

    },


  },
  actions: {
    setProduct({ commit }, addedProducts) {
      commit('addCart', addedProducts)
    },
    removeCart({ commit }, index) {

      commit('removeFromCart', index)
    },
    clearCart({ commit }) {
      commit('orderPlaced')
    },
    cartCountAdd({ commit }, index) {
      commit('setCartCountAdd', index)
    },
    cartCountSub({ commit }, index) {
      commit('setCartCountSub', index)
    },


  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getOrder(state) {
      return state.orderPlaced
    }
  },
  namespaced: true

}

export default cartStore
