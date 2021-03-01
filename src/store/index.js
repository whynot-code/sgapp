import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
         extra: ""
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
         extra: ""
      },
    ],
  },
  getters: {
    getCurrOrders: state => state.currOrders
  },
  mutations: {
    setCurrOrders: (state, newValue) => {state.currOrders.push(newValue);}
  },
  actions: {
    mutate({ commit }, newValue) {
      commit('setCurrOrders', newValue)
    }
  },
  modules: {
  }
})
