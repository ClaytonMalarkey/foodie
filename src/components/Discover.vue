<template>
  <div>
    <h1>Restuarants</h1>
  <ul>
    <hr>
    <div v-for="(restaurant, index) in restaurants" :key="'ing'+index">
      <hr>
      <div>{{ restaurant.name }}</div>
      <div>{{ restaurant.address }}</div>
      <div>{{ restaurant.city }}</div>
      <div>{{ restaurant.phone_number }}</div>
      <div>{{ restaurant.bio }}</div>
      <div>{{ restaurant.profile_url }}</div>
      <div>{{ restaurant.banner_url }}</div>
      <router-link :to="'/restaurant?restaurant_id=' + restaurant.restaurant_id" ><button>choose {{ restaurant.name }}</button></router-link>
      <hr>
    </div>
  </ul>
  </div>
  
  
</template>

<script>

import axios from 'axios';


export default {
  name: 'Discover',
  data() {
    return {
      restaurants: [] // Store restaurants fetched from the API
    };
  },
  created() {
    console.log("created function triggered")
    axios.get("https://foodie.bymoen.codes/api/restaurants",{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        }
      }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          this.restaurants = response.data;
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('restaurant discover failed', error);
        });
    // Fetch the list of restaurants from the API when the component is created
    // Store fetched restaurants in this.restaurants
  },
}
</script>
