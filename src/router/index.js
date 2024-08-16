import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import FilterView from '../views/FilterView.vue'
import AddSpeciesView from '../views/AddSpeciesView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ListView
    },
    {
      path: '/filter',
      name: 'filter',
      component: FilterView
    },
    {
      path: '/addspecies',
      name: 'addspecies',
      component: AddSpeciesView
    },
  ]
})

export default router
