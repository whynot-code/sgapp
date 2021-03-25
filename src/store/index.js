import Vue from 'vue'
import Vuex from 'vuex'
import testContent from '@/assets/testContent.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currTime: "",
    currClick: "",
    currDetails: 0, //index of current details view
    openDetails: false,
    paramEditor: "",
    quickUpdatedData: "",
    searchedData: [],
    currOrders: testContent,
    calendar: false,
  },
  getters: {
    getCurrOrders: state => state.currOrders,
    currTime: state => state.currTime,
    currDetails: state => state.currDetails,
    paramEditor: state => state.paramEditor,
    quickUpdatedData: state => state.quickUpdatedData,
    currClick: state => state.currClick,
    searchedData: state => state.searchedData,
    openDetails: state => state.openDetails,
    calendar: state => state.calendar
  },
  mutations: {
    setCurrOrders: (state, newValue) => {state.currOrders.unshift(newValue)},
    updateCurrOrder: (state, updatedData) => {
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
              case "Powykonawcza": order.powyk = updatedData[1]; break;
              case "Faktura": order.faktura = updatedData[1]; break;
              case "Extra": order.extra = updatedData[1]; break;
            }
          }
        })
    },
    setCurrTime: (state, newValue) => {state.currTime = newValue},
    setCurrDetails: (state, newValue) => {state.currDetails = newValue},
    setParamEditor: (state, newValue) => {state.paramEditor = newValue},
    setQuickUpdatedData: (state, newValue) => {state.quickUpdatedData = newValue},
    setCurrClick: (state, newValue) => {state.currClick = newValue},
    setSearchedData: (state, newValue) => {state.searchedData = newValue},
    setOpenDetails: (state, newValue) => {state.openDetails = newValue},
    openCalendar: (state, newValue) => {state.calendar = newValue},
  },
  actions: {
    mutateCurrOrders({ commit }, newValue) { commit('setCurrOrders', newValue) },
    updateCurrOrder({ commit }, newValue) { commit('updateCurrOrder', newValue) },
    mutateCurrTime({ commit }, newValue) { commit('setCurrTime', newValue) },
    mutateCurrDetails({ commit }, newValue) { commit('setCurrDetails', newValue)},
    mutateParamEditor({ commit }, newValue) { commit('setParamEditor', newValue)},
    mutateQuickUpdatedData({ commit }, newValue) { commit('setQuickUpdatedData', newValue)},
    mutateCurrClick({ commit }, newValue) { commit('setCurrClick', newValue)},
    setSearchedData({ commit }, newValue) { commit('setSearchedData', newValue)},
    setOpenDetails({ commit }, newValue) { commit('setOpenDetails', newValue)},
    openCalendar({ commit }, newValue) { commit('openCalendar', newValue)}
  },
  modules: {
  }
})
