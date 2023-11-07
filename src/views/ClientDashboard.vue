<template>
    <div class="home">
      <h1>Client Dashboard</h1>
      <ClientSignup></ClientSignup>
      <ClientLogin></ClientLogin>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import ClientSignup from '@/components/ClientSignup.vue';
  import ClientLogin from '@/components/ClientLogin.vue';
  export default {
    name: 'ClientDashboard',
    components: {
        ClientSignup,
        ClientLogin
    }
  
  }
  </script>