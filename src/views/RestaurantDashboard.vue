<template>
    <div class="home">
      <h1>Restaurant Dashboard</h1>
      <RestaurantLogin></RestaurantLogin>
      <router-link to="/restaurant_signup"><button>Signup</button></router-link>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  import RestaurantLogin from '@/components/RestaurantLogin.vue'

  export default {
    name: 'RestaurantDashboard',
    components: {
        RestaurantLogin
        
  
  },
}
  </script>