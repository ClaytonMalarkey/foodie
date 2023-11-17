<template>
  <div class="home">
    <h1>home route</h1>
    <Header></Header>
    <Discover></Discover>
    <router-link to="/client_dashboard"><button>Client login</button></router-link><br>
    <router-link to="/restaurant_dashboard"><button>Restaurant Login</button></router-link><br>
  </div>
</template>

<script>
// import RestaurantSignup from '@/components/RestrauntSignup.vue'

import Discover from '@/components/Discover.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'HomeView',
  components: {
    Discover,
    Header
  }

}
</script>
