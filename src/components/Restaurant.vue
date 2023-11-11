<template>
  <div>
    <h1>Restuarant {{ restaurant.name }}</h1>
    <h1 v-if="checkmenu()">no items in menu</h1>
    <div v-for="(item, index) in menu" :key="'ing'+index">
      <ul>
        <li>{{ item.name }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.image_url }}</li>
        <li>{{ item.description }}</li>
        <button v-on:click="addToCart(item)">add to cart</button>
      </ul>
    </div>

    <button>Check Out</button>
    
  </div>
</template>

<script>


import axios from 'axios';

export default {
  data() {
    return {
      restaurant: {},
      menu:[],
      cart:[],
    };
  },

  methods:{
    checkmenu() {

      if (this.menu.length === 0){
        return true
      }
      return false
    
    },
    addToCart(menuItem) {
      this.cart.push(menuItem);
      console.log(this.cart)
    },
  },

  created(){
    console.log("triggered")
    const query = this.$route.query
    console.log(query)
    const restaurant_id = query.restaurant_id
    axios.get(`https://foodie.bymoen.codes/api/restaurant?restaurant_id=${restaurant_id}`,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        } }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          this.restaurant = response.data[0];
          console.log(this.restaurant)
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('restaurant load failed', error);
        });

        axios.get(`https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`,{
          headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json',
        } }).then(response => {
          console.log(response)
          const menu = response.data
          this.menu = menu
        })
        .catch(error=> {
          console.error('menu load failed', error);
        });

        },
}

    // Fetch the list of restaurants from the API when the component is created
    // Store fetched restaurants in this.restaurant
</script>
