<template>
    <div>
      <h1>Restaurant Signup</h1>
      <form @submit.prevent="signup">
        <input v-model="email" type="email" placeholder="Email"><br>
        <input v-model="password" type="password" placeholder="Password"><br>
        <input v-model="name" type="text" placeholder="name"><br>
        <input v-model="address" type="text" placeholder="address"><br>
        <input v-model="phone_number" type="text" placeholder="phone number"><br>
        <input v-model="bio" type="text" placeholder="bio"><br>
        <input v-model="city" type="text" placeholder="city"><br>
        <input v-model="profile_url" type="text" placeholder="profile url"><br>
        <input v-model="banner_url" type="text" placeholder="banner url"><br>
        <!-- Add more registration fields as needed (e.g., restaurant name, address) -->
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'RestaurantSignup',
    data() {
      return {
        email: '',
        password: '',
        name:'',
        phone_number:'',
        address:'',
        bio:'',
        city:'',
        profile_url:'',
        banner_url:''
        // Add more data properties for registration fields
      };
    },
    methods: {
      signup() {
        
        const RestrantData = {
          
    email: this.email,
    password: this.password,
    name: this.name,
    address: this.address,
    phone_number: this.phone_number,
    bio: this.bio,
    city: "Calgary",
    profile_url: this.profile_url,
    banner_url: this.banner_url
    // "restaurant_id": "(number)"

        // email: this.email,
        // password: this.password,
        // name: this.name,
        // address: this.address,
        // phone_number: "780-765-2670",
        // bio: this.bio,
        // city: this.city,
        // profile_url: this.profile_url,
        // banner_url: this.banner_url
        };
      
        console.log(RestrantData);

        axios.post("https://foodie.bymoen.codes/api/restaurant", RestrantData,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        }
      }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          // // this.$store.commit('setUser', response.data.user);
           // Redirect to the profile page
          const { restaurant_id, token } = response.data
          // // Store token and client_id in cookies with email as the title
          this.$cookies.set('restaurant_token', token)
          this.$cookies.set('restaurant_id', restaurant_id)
          this.$router.push('/restaurant_dashboard');
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('restaurant registration failed', error);
        });
    },
  },
  }
  </script>
  