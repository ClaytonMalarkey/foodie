<template>
  <div>
    <h1>Client Login</h1>
    <form @submit="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClientLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const clientData = {
        email: this.email,
        password: this.password,
      };
      // Send a login request with this.email and this.password to the API
      // Handle the response and user authentication
      console.log(clientData);
      // Send a registration request with clientData to the API
      axios
        .post("https://foodie.bymoen.codes/api/client-login", clientData, {
          headers: {
            "x-api-key": "XpRImBVFyl7owgj68TLt",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // Handle the response, set user as authenticated, and store tokens
          console.log("This is response", response);
          // this.$store.commit('setUser', response.data.user);
          this.$router.push("/client"); // Redirect to the profile page
          const { client_id, token } = response.data;
          // Store token and client_id in cookies with email as the title
          this.$cookies.set("Client_token", token);
          this.$cookies.set("client_id", client_id);
          this.$router.push('/Discover')
        })
        .catch((error) => {
          // Handle registration error, show a message, or redirect to an error page
          console.error("Client registration failed", error);
        });
    },
  },
};
</script>
