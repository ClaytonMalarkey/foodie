<template>
  <div class="home">
    <h1>home route</h1>
    <Header></Header>
    <Discover></Discover>
    <router-link to="/restaurant_login"><button>Restaurant Login</button></router-link><br>
    <router-link v-if="clientLoggedIn()" to="/delete_client"><button>DELETE CLIENT</button></router-link>
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
  },
  methods:{
    clientLoggedIn(){
      const clientToken = this.$cookies.get("Client_token")
      console.log("string of client logged in being triggered", clientToken)
      if(clientToken){
        return true
      }
      return false
    }
  }

}
</script>
