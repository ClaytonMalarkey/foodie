<template>
    <div>
        <h1>DELETE CLIENT</h1>
        <form @submit.prevent="deleteClient">
            <input v-model="password" type="password" placeholder="Password" /><br>
            <button type="submit">DELETE CLIENT</button>
        </form>
    </div>
</template>
<script>

import axios from "axios";

export default {
  name: "ClientLogin",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    deleteClient() {
      const clientData = {
        password: this.password,
      };
      const clientToken = this.$cookies.get("Client_token")
      // Send a login request with this.email and this.password to the API
      // Handle the response and user authentication
      console.log(clientToken);
      console.log(clientData);
      // Send a registration request with clientData to the API
      axios
        .delete("https://foodie.bymoen.codes/api/client", {
          headers: {
            "x-api-key": "XpRImBVFyl7owgj68TLt",
            "Content-Type": "application/json",
            "token": clientToken
          },
          data:clientData
        })
        .then((response) => {
          // Handle the response, set user as authenticated, and store tokens
          console.log("This is response", response);
          // this.$store.commit('setUser', response.data.user);
          this.$router.push("/client"); // Redirect to the profile page
          const { client_id, token } = response.data;
          // Store token and client_id in cookies with email as the title
          this.$cookies.set("token", token);
          this.$cookies.set("client_id", client_id);
          this.$router.push('/clientsignup');
        })
        .catch((error) => {
          // Handle registration error, show a message, or redirect to an error page
          console.error("Client delete failed", error);
        });
    },
  },
};

</script>