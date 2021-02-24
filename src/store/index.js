import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log(Vuex)
export default new Vuex.Store({
  state: {
    currOrders: [],
  },
  getters: {
    getCurrOrders: state => state.currOrders
  },
  mutations: {
    setCurrOrders: (state, newValue) => {state.currOrders.unshift('lubieplacki'); console.log(newValue)}
  },
  actions: {
    mutate({ commit }) {
      commit('setCurrOrders', "lubie placki")
    }
  },
  modules: {
  }
})
