import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ClientDashboard from '../views/ClientDashboard.vue'
import RestaurantDashboard from "../views/RestaurantDashboard.vue"
import Discover from "../components/Discover.vue"
import Restaurant from '../components/Restaurant.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shoppingcart',
    name: 'home',
    component: ShoppingCart
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: Restaurant
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/restaurantdashboard',
    name: 'Restraunt Dashboard',
    component: RestaurantDashboard
  },
  {
    path: '/clientdashboard',
    name: 'client-dashboard',
    component: ClientDashboard
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes, 
  mode:'history'
})

export default router
