<template>
    <div class="home">
        <ClientSignup></ClientSignup><br>
        <h2>If You dont Have And Account Sign Up</h2>
        <router-link to="/discover"><button>Home</button></router-link><br>
    </div>
  </template>
  
  <script>
  // import RestaurantSignup from '@/components/RestrauntSignup.vue'
  
  import ClientSignup from '@/components/ClientSignup.vue';
  
  export default {
    name: 'HomeView',
    components: {
      ClientSignup
    }
  
  }
  </script>
  