<template>
    <div>
        <h1>Restaurant Add Item</h1>
            <form @submit.prevent="signup">
            <input v-model="name" type="text" placeholder="name"><br>
            <input v-model="description" type="text" placeholder="descriptioin"><br>
            <input v-model="image_url" type="text" placeholder="Profile Image URL"><br>
            <input v-model="price" type="number" placeholder="price"><br>
        <!-- Add more registration fields as needed -->
      <button type="submit">Signup</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'addMenuItem',
  data() {
    return {
      name: '',
      description: '',
      image_url: '',
      price: '',
      restaurant_token:false
      // Add more data properties for registration fields
    };
  },
  methods: {
    signup() {
     
      // Capture the form input data
      const clientData = {
        name:this.name,
        description:this.description,
        price:this.price,
        image_url:this.image_url 
        // Add more properties as needed
      };
      console.log(clientData);
      // Send a registration request with clientData to the API
      axios.post("https://foodie.bymoen.codes/api/menu", clientData,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json',
          'token':this.restaurant_token
        }
      }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          this.$router.push('/restaurant_dashboard')
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('Client registration failed', error);
        });
    },
  },
  created(){
    
    const restaurant_token = this.$cookies.get('restaurant_token')
    if(!restaurant_token) {
        this.$router.push("restaurant_dashboard")
    }
    this.restaurant_token = restaurant_token
    console.log(restaurant_token);
  }
}
</script>

