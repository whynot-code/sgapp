import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log(Vuex)
export default new Vuex.Store({
  state: {
    currOrders: [
      {
         name: "Pruszcz Gałczyńskiego",
         termin: "26.02.2021",
         projekt: { needed: "+", set: "" },
         ppb: { needed: "+", set: "" },
         numeracja: { needed: "+", set: "" },
         wypis: { needed: "-", set: "" },
         zajecie: { needed: "-", set: "" },
         etapowka: { needed: "-", set: "" },
         powyk: { needed: "+", set: "" },
         faktura: { needed: "+", set: "" },
      },
      {
         name: "Tczew Ogrodowa",
         termin: "14.05.2021",
         projekt: { needed: "+", set: "" },
         ppb: { needed: "+", set: "" },
         numeracja: { needed: "+", set: "" },
         wypis: { needed: "+", set: "" },
         zajecie: { needed: "+", set: "" },
         etapowka: { needed: "+", set: "" },
         powyk: { needed: "+", set: "" },
         faktura: { needed: "+", set: "" },
      },
    ],
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
