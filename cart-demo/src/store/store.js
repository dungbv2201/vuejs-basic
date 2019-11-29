import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [],
    products: []
  },
  getters: {
    cartTotal(state) {
      return state.items.reduce((total, item) => {
        let { price, quantity, sale_off } = item
        if (sale_off > 0) {
          price = (100 - sale_off) * price / 100
        }
        return total + price * quantity
      }, 0)
    },
    totalItem(sate) {
      return sate.items.length
    }
  },
  mutations: {
    pushProductToCart(state, payload) {
      state.items.push({
        ...payload.product,
        quantity: payload.quantity?parseInt(payload.quantity):1
      })
    },
    incrementQuantity(state, payload) {
      const product = state.items.find(item => item.id === payload.id)
      product.quantity = parseInt(payload.quantity) + parseInt( product.quantity)
    },
    removeItem(state, id) {
      for (let index in state.items) {
        if (state.items[index].id === id) {
          state.items.splice(index, 1)
          break
        }
      }
    }
  },
  actions: {
    addProductToCart({ commit, state }, payload) {
      return new Promise((resolve) => {
        const { product } = payload
        const cartItem = state.items.find(item => item.id === product.id)
        const quantity = payload.quantity ? parseInt(payload.quantity) : 1
        if (cartItem) {
          commit('incrementQuantity', { id: product.id, quantity })
        } else {
          commit('pushProductToCart', { product,quantity })
        }
        resolve('add to cart successfully!')
      })
    },
    removeCartItem({ commit }, id) {
      commit('removeItem', id)
    }
  }
})
