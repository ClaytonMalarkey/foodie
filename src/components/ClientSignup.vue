<template>
  <div>
    <h1>Client Signup</h1>
    <form @submit.prevent="signup">
      <input v-model="email" type="email" placeholder="Email"><br>
      <input v-model="password" type="password" placeholder="Password"><br>
      <input v-model="image_url" type="text" placeholder="Profile Image URL"><br>
      <input v-model="first_name" type="text" placeholder="First Name"><br>
      <input v-model="last_name" type="text" placeholder="Last Name"><br>
      <input v-model="username" type="username" placeholder="username"><br>
      <!-- Add more registration fields as needed -->
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ClientSignup',
  data() {
    return {
      email: '',
      password: '',
      image_url: '',
      first_name: '',
      last_name: '',
      username: ''
      // Add more data properties for registration fields
    };
  },
  methods: {
    signup() {
     
      // Capture the form input data
      const clientData = {
        email: this.email,
        password: this.password,
        image_url: this.image_url,
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username
        // Add more properties as needed
      };
      console.log(clientData);
      // Send a registration request with clientData to the API
      axios.post("https://foodie.bymoen.codes/api/client", clientData,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        }
      }).then(response => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', response)
          // this.$store.commit('setUser', response.data.user);
          
          const { client_id, token } = response.data
          // Store token and client_id in cookies with email as the title
          this.$cookies.set('Client_token', token)
          this.$cookies.set('client_id', client_id)
          this.$router.push('/Discover')
      
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('Client registration failed', error);
        });
    },
  },
}
</script>
