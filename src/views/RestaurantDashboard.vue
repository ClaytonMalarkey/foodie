<template>
    <div class="home">
      <h1>Restaurant Dashboard</h1>
      <RestaurantSignup></RestaurantSignup>
      <RestaurantLogin></RestaurantLogin>
      
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import RestaurantSignup from '@/components/RestaurantSignup.vue';
  import RestaurantLogin from '@/components/RestaurantLogin.vue'
  export default {
    name: 'RestaurantDashboard',
    components: {
        RestaurantSignup,
        RestaurantLogin
    }
  
  }
  </script>