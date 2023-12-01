<template>
  <div class="home">
    <h1>home route</h1>
    <Header></Header>
    <Discover></Discover>
    <router-link to="/restaurant_login"><button>Restaurant Login</button></router-link><br>
    <router-link to="/delete_client"><button>DELETE CLIENT</button></router-link>
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
