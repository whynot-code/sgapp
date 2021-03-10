import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    currTime: "",
    currDetails: 0, //index of current details view

    paramEditor: "",

    currOrders: [
      {
         id: 2,
         name: "Pruszcz Gałczyńskiego",
         termin: "26.02.2021",
         projekt: { needed: true, set: "sad" },
         ppb: { needed: true, set: "" },
         dz: { needed: true, set: "" },
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
         id: 1,
         name: "Tczew Ogrodowa",
         termin: "14.05.2021",
         projekt: { needed: true, set: "" },
         ppb: { needed: true, set: "" },
         dz: { needed: true, set: "" },
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
    currDetails: state => state.currDetails,
    paramEditor: state => state.paramEditor
  },
  mutations: {
    setCurrOrders: (state, newValue) => {state.currOrders.unshift(newValue)},
    updateCurrOrder: (state, updatedData) => {
      console.log(updatedData)
        state.currOrders.forEach(order => {
          if(order.id===state.currDetails) {
            switch(updatedData[0]){
              case "Termin": order.termin = updatedData[1]; break;
              case "Projekt": order.projekt = updatedData[1]; break;
              case "PPB": order.ppb = updatedData[1]; break;
              case "Dziennik": order.dz = updatedData[1]; break;
              case "Numeracja": order.numeracja = updatedData[1]; break;
              case "Wypis": order.wypis = updatedData[1]; break;
              case "Zajęcie pasa": order.zajecie = updatedData[1]; break;
              case "Etapówka": order.etapowka = updatedData[1]; break;
              case "Dokumentacja Powykonawcza": order.powyk = updatedData[1]; break;
              case "Faktura": order.faktura = updatedData[1]; break;
            }
          }
        })
    },
    setCurrTime: (state, newValue) => {state.currTime = newValue},
    setCurrDetails: (state, newValue) => {state.currDetails = newValue},
    setParamEditor: (state, newValue) => {state.paramEditor = newValue},
  },
  actions: {
    mutateCurrOrders({ commit }, newValue) { commit('setCurrOrders', newValue) },
    updateCurrOrder({ commit }, newValue) { commit('updateCurrOrder', newValue) },
    mutateCurrTime({ commit }, newValue) { commit('setCurrTime', newValue) },
    mutateCurrDetails({ commit }, newValue) { commit('setCurrDetails', newValue)},
    mutateParamEditor({ commit }, newValue) { commit('setParamEditor', newValue)},
  },
  modules: {
  }
})
