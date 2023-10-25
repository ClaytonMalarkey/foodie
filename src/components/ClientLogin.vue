<template>
    <div>
      <h1>Client Login</h1>
      <form @submit="login">
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClientLogin',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Send a login request to the API
        // Example using Axios:
        axios
          .post('/api/login', {
            email: this.email,
            password: this.password,
          })
          .then(response => {
            // Handle the response, set user as authenticated, and store tokens
            this.$store.commit('setUser', response.data.user);
            this.$router.push('/client/profile'); // Redirect to the profile page
          })
          .catch(error => {
            // Handle login error, show a message, or redirect to an error page
            console.error('Login failed', error);
          });
      },
    },
  }
  </script>
  