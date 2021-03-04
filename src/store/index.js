import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currTime: "",
    currDetails: 0, //index of current details view
    currOrders: [
      {
         name: "Pruszcz Gałczyńskiego",
         termin: "26.02.2021",
         projekt: { needed: true, set: "sad" },
         ppb: { needed: true, set: "" },
         numeracja: { needed: true, set: "" },
         wypis: { needed: false, set: "" },
         zajecie: { needed: false, set: "" },
         etapowka: { needed: false, set: "" },
         powyk: { needed: true, set: "" },
         faktura: { needed: true, set: "" },
         extra: "",
         dziennik: [
           {data: "02.03.2021 13.28", typ: "Zlecenie", wpis: "Dodano zlecenie."},
           {data: "05.03.2021 17.28", typ: "PPB", wpis: "Przekazano plac budowy - Tomasz Freza"}
          ],
         notatki: []
      },
      {
         name: "Tczew Ogrodowa",
         termin: "14.05.2021",
         projekt: { needed: true, set: "" },
         ppb: { needed: true, set: "" },
         numeracja: { needed: true, set: "" },
         wypis: { needed: true, set: "" },
         zajecie: { needed: true, set: "" },
         etapowka: { needed: true, set: "" },
         powyk: { needed: true, set: "" },
         faktura: { needed: true, set: "" },
         extra: "",
         dziennik: [{data: "01.01.2021 12.38", typ: "Zlecenie", wpis: "Dodano zlecenie."}],
         notatki: []
      },
    ],
  },
  getters: {
    getCurrOrders: state => state.currOrders,
    currTime: state => state.currTime,
    currDetails: state => state.currDetails
  },
  mutations: {
    setCurrOrders: (state, newValue) => {state.currOrders.push(newValue)},
    setCurrTime: (state, newValue) => {state.currTime = newValue},
    setCurrDetails: (state, newValue) => {state.currDetails = newValue}
  },
  actions: {
    mutateCurrOrders({ commit }, newValue) { commit('setCurrOrders', newValue) },
    mutateCurrTime({ commit }, newValue) { commit('setCurrTime', newValue) },
    mutateCurrDetails({ commit }, newValue) { commit('setCurrDetails', newValue)}
  },
  modules: {
  }
})
