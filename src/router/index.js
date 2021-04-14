import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Projekty from "@/views/Projekty.vue"
import Planowanie from "@/views/Planowanie.vue"
import Kontakty from "@/views/Kontakty.vue"
import Pracownicy from "@/views/Pracownicy.vue"
import Todo from "@/views/Todo.vue"

const routes = [
  {
    path: '/',
    component: Projekty,
    name: "Projekty",
  },
  {
    path: '/Planowanie',
    component: Planowanie,
    name: "Planowanie",
  },
  {
    path: '/Kontakty',
    component: Kontakty,
    name: "Kontakty", 
  },
  {
    path: '/Pracownicy',
    component: Pracownicy,
    name: "Pracownicy",
  },
  {
    path: '/Todo',
    component: Todo,
    name: "Todo",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
