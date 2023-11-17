import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientDashboard from '../views/ClientDashboard.vue'
import RestaurantDashboard from "../views/RestaurantDashboard.vue"
// import Discover from "../components/Discover.vue"
import Restaurant from '../components/Restaurant.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import ClientEdit from '../components/ClientEdit.vue'
import ClientView from '../components/Client.vue'
import RestaurantEdit from '../components/RestaurantEdit.vue'
import ClientLogin from '../views/ClientLogin.vue'
import ClientSignup from '../views/ClientSignup.vue'
import RestaurantSignup from '../views/RestaurantSignup'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restaurant_signup',
    name: 'restaurant_signup',
    component: RestaurantSignup
  },
  {
    path: '/clientsignup',
    name: 'clientsignup',
    component: ClientSignup
  },
  {
    path: '/client_login',
    name: 'Client Login',
    component: ClientLogin
  },
  {
    path: '/restaurant_edit',
    name: 'restaurantedit',
    component: RestaurantEdit
  },
  {
    path: '/client',
    name: 'client',
    component: ClientView
  },
  {
    path: '/client_edit',
    name: 'ClientEdit',
    component: ClientEdit
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
    component: HomeView
  },
  {
    path: '/restaurant_dashboard',
    name: 'Restraunt Dashboard',
    component: RestaurantDashboard
  },
  {
    path: '/client_dashboard',
    name: 'client-dashboard',
    component: ClientDashboard
  },
  
]

const router = new VueRouter({
  routes, 
  mode:'history'
})

export default router
