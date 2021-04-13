import Vue from 'vue'
import Vuex from 'vuex'
import testContent from '@/assets/testContent.js'
import TestContacts from "@/assets/testContacts.js"
import TestEmployees from '@/assets/testEmployees.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currTime: "",
    currClick: "",

    currOrders: testContent,
    currDetails: 0, //index of current details view
    openDetails: false,
    paramEditor: "",
    quickUpdatedData: "",

    searchedData: [],

    openContactDetails: false,
    currContacts: TestContacts,
    currContactId: 0,
    newContact: false,
    paramContactEditor: "",

    calendar: false,

    currEmployees: TestEmployees,
    currEmployeeId: 0,
    employeeDetails: false,
    newEmployee: false,
    eployeeEditor: "",
    
    newPlan: false,
  },
  getters: {
    getCurrOrders: state => state.currOrders,
    paramEditor: state => state.paramEditor,
    quickUpdatedData: state => state.quickUpdatedData,
    openDetails: state => state.openDetails,
    currDetails: state => state.currDetails,

    currTime: state => state.currTime,
    currClick: state => state.currClick,
    searchedData: state => state.searchedData,

    calendar: state => state.calendar,

    newContact: state => state.newContact,
    currContacts: state => state.currContacts,
    currContactId: state => state.currContactId,
    openContactDetails: state => state.openContactDetails,
    paramContactEditor: state => state.paramContactEditor,

    currEmployees: state => state.currEmployees,
    currEmployeeId: state => state.currEmployeeId,
    employeeDetails: state => state.employeeDetails,
    newEmployee: state => state.newEmployee,
    eployeeEditor: state => state.eployeeEditor,
    
    newPlan: state => state.newPlan

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

    newContactActive: (state, newValue) => {state.newContact = newValue},
    setContactId: (state, newValue) => {state.currContactId = newValue},
    contactDetailsActive: (state, newValue) => {state.openContactDetails = newValue},
    addContact: (state, newValue) => {state.currContacts.unshift(newValue)},
    setContactEditor: (state, newValue) => {state.paramContactEditor = newValue},
    updateCurrContact: (state, updatedData) => {
      state.currContacts.forEach(contact => {
        if(contact.id === state.currContactId) {
          switch(updatedData[0]){
            case "Nazwa": contact.name = updatedData[1]; break;
            case "Firma": contact.company = updatedData[1]; break;
            case "Miejscowość": contact.location = updatedData[1]; break;
            case "Stanowisko": contact.position = updatedData[1]; break;
            case "E-mail": contact.email = updatedData[1]; break;
            case "Tel": contact.tel = updatedData[1]; break;
            case "Opis": contact.description = updatedData[1]; break;
          }
        }
      })
  },
  setEmployeeId: (state, newValue) => {state.currEmployeeId = newValue},
  employeeDetailsActive: (state, newValue) => {state.employeeDetails = newValue},
  newEmployeeActive: (state, newValue) => {state.newEmployee = newValue},
  eployeeEditorActive: (state, newValue) => {state.eployeeEditor = newValue},
  addEmployee: (state, newValue) => {state.currEmployees.unshift(newValue)},
  updateCurrEmployee: (state, updatedData) => {
    state.currEmployees.forEach(employee => {
      if(employee.id === state.currEmployeeId) {
        switch(updatedData[0]){
          case "Nazwa": employee.name = updatedData[1]; break;
          case "E-mail": employee.email = updatedData[1]; break;
          case "Tel": employee.tel = updatedData[1]; break;
        }
      }
    })
},
  deletePlan: (state, deletedValue) => {
    state.currOrders.forEach((el => {
      if(el.name == deletedValue[0]){
          el.plan.forEach(data => {
              data == deletedValue[1] ? el.plan.splice(el.plan.indexOf(data), 1) : null
          })
      }
  }))
  },
  newPlanActive: (state, newValue) => {state.newPlan = newValue}
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
    openCalendar({ commit }, newValue) { commit('openCalendar', newValue)},

    newContactActive({ commit }, newValue) { commit('newContactActive', newValue)},
    addContact({ commit }, newValue) { commit('addContact', newValue)},
    setContactId({ commit }, newValue) { commit('setContactId', newValue)},
    contactDetailsActive({ commit }, newValue) { commit('contactDetailsActive', newValue)},
    mutateContactEditor({ commit }, newValue) { commit('setContactEditor', newValue)},
    updateCurrContact({ commit }, newValue) { commit('updateCurrContact', newValue)},

    setEmployeeId({ commit }, newValue) { commit('setEmployeeId', newValue)},
    employeeDetailsActive({ commit }, newValue) { commit('employeeDetailsActive', newValue)},
    newEmployeeActive({ commit }, newValue) { commit('newEmployeeActive', newValue)},
    eployeeEditorActive({ commit }, newValue) { commit('eployeeEditorActive', newValue)},
    updateCurrEmployee({ commit }, newValue) { commit('updateCurrEmployee', newValue)},
    addEmployee({ commit }, newValue) { commit('addEmployee', newValue)},
    
    deletePlan({ commit }, value) {commit('deletePlan', value)},
    newPlanActive({ commit }, value) {commit('newPlanActive', value)},
  },
  modules: {
  }
})
