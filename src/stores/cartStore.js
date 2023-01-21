const cartStore = {
    state: {
      cart: [],
      orderPlaced:[]
    },
    mutations: {
        addCart(state,data){
           state.cart.push(data)
          //  state.cart.data.total = state.cart.data.itemCount;
        },
        removeFromCart(state,data){
            state.cart.splice(data,1)
        },
        orderPlaced(state){
             state.orderPlaced = state.cart
             state.cart=[]
        },
        // setCartCountAdd(state,index){
        //  const total = state.cart[index].total
        //  let op1 =total - (((state.cart[index].itemCount)-1)-state.cart[index].count)
        //  state.cart[index].count=op1
        //  state.cart[index].itemCount-=1
        // }
  
    },
    actions: {
       setProduct({commit},addedProducts){
            commit('addCart',addedProducts)
       },
       removeCart({commit},index){

         commit('removeFromCart',index)
       },
       clearCart({commit}){
         commit('orderPlaced')
       },
      //  cartCountAdd({commit},index){
      //    commit('setCartCountAdd',index)
      //  }
  
      
    },
    getters: {
       getCart(state){
          return state.cart
       },
       getOrder(state){
         return state.orderPlaced
       }
    },
    namespaced: true
  
  }
  
  export default cartStore
  