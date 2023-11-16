<template>
  <div class="home">
    <h1>home route</h1>
    <Discover></Discover>
    <router-link to="/clientdashboard"><button>Client Creation</button></router-link><br>
    <router-link to="/clientdashboard"><button>Client login</button></router-link><br>
    <router-link to="/restaurantdashboard"><button>Restaurant Creation</button></router-link><br>
    <router-link to="/restaurantdashboard"><button>Restaurant Login</button></router-link><br>
  </div>
</template>

<script>
// import RestaurantSignup from '@/components/RestrauntSignup.vue'

import Discover from '@/components/Discover.vue';

export default {
  name: 'HomeView',
  components: {
    Discover
  }

}
</script>
