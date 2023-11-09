<template>
  <div>
    <h1>Restuarant x</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      restuarant: {},
    };
  },
  created(){
    console.log("triggered")
    const query = this.$route.query
    console.log(query)
    const restaurant_id = query.restauraunt_id
    axios.get(`https://foodie.bymoen.codes/api/restaurant?restaurant_id=${restaurant_id}`,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        } }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          this.restaurant_id = response.data;
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('restaurant load failed', error);
        });
    // Fetch the list of restaurants from the API when the component is created
    // Store fetched restaurants in this.restaurants
  },

}
</script>
