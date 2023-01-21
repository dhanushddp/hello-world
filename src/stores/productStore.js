

import productService from '@/services/productService'


const proStore =
{
    state: {
        products: []
    },
    mutations: {
        setAllProducts(state, data) {
            state.products = data
        }
    },
    actions: {

        GET_ALL_PRODUCTS({ commit }, { success, fail }) {
            productService.getAllProducts({
                success: (data) => {
                    commit('setAllProducts', data)
                    success(data)
                },
                fail
            })
        }
    },
    getters: {
        products(state) {
            return state.products;
        }
    },
    namespaced: true
}


export default proStore