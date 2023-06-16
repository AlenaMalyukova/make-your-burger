import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './pages/MainPage.vue'
import MakeBurger from './pages/MakeBurger.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/make-burger', component: MakeBurger }
  ]
})