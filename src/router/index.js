import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Projekty from "@/views/Projekty.vue"
import Planowanie from "@/views/Planowanie.vue"

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
