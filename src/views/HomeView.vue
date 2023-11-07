<template>
  <div class="home">
    <h1>home route</h1>
    <ClientSignup></ClientSignup>
    <ClientLogin></ClientLogin>
    <!-- <RestaurantSignup></RestaurantSignup> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ClientSignup from '@/components/ClientSignup.vue';
import ClientLogin from '@/components/ClientLogin.vue';
// import RestaurantSignup from '@/components/RestrauntSignup.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    ClientSignup,
    // RestaurantSignup,
    ClientLogin
  }

}
</script>
