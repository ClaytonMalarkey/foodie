<template>
    <div class="home">
        <ClientLogin></ClientLogin><br>
        <h2>If You dont Have And Account Sign Up</h2>
        <router-link to="/clientsignup"><button>Sign Up</button></router-link><br>
    </div>
  </template>
  
  <script>
  // import RestaurantSignup from '@/components/RestrauntSignup.vue'
  
  import ClientLogin from '@/components/ClientLogin.vue';
  
  export default {
    name: 'HomeView',
    components: {
      ClientLogin
    }
  
  }
  </script>
  