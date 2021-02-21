import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login }
]

var router = new VueRouter({
  routes
})

export default router
