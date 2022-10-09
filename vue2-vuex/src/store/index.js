import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/shop'
// import cart from './modules/cart'
// import products from './modules/products'

Vue.use(Vuex)

// const debug = true

export default new Vuex.Store({
  // modules: {
  //   cart,
  //   products
  // },
  // strict: debug
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts(state, products) {
      // product is the payload
      state.products = products
    },
    incrementProductQuantity(state, item) {
      item.quantity++
    },
    addProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1
      })
    },
    decrementProductInventory(context, product) {
      product.inventory--
    }
  },
  actions: {
    getProduct({ commit }) {
      return new Promise(resolve => {
        api.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart(context, product) {
      if (product.inventory === 0) return
      const item = context.state.cart.find(item => item.id === product.id)
      if (item) {
        context.commit('incrementProductQuantity', item)
      } else {
        context.commit('addProductToCart', product)
      }
      context.commit(' decrementProductInventory', product)
    }
  },
  getters: {
    getProductsOnStock(state) {
      return state.products.filter(product => {
        return product.inventory > 0
      })
    }
  },
  modules: {}
})
