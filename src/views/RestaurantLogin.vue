<template>
    <div>
      <h1>Restaurant Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email"><br>
        <input v-model="password" type="password" placeholder="Password"><br>
        <button type="submit">Login</button>
        <router-link to="/restaurant_signup"><button>Signup</button></router-link>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'RestaurantLogin',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        const body = {
          
          email: this.email,
          password: this.password
        };
        // Send a login request with this.email and this.password to the API
        // Handle the response and restaurant authentication
        axios.post("https://foodie.bymoen.codes/api/restaurant-login", body,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        }
      }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          // // this.$store.commit('setUser', response.data.user);
          this.$router.push('/restaurant_dashboard'); // Redirect to the profile page
          const { restaurant_id, token } = response.data
          // // Store token and client_id in cookies with email as the title
          this.$cookies.set('restaurant_token', token)
          this.$cookies.set('restaurant_id', restaurant_id)
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('restaurant registration failed', error);
        });
    },
  },
  }
  </script>
  