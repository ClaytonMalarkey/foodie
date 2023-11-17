<template>  
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="!token" to="/client_login">Client Login</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
    data(){
      return{
        token: undefined
      } 
    },
    methods: {
      triggerEvent:function(){
        const cookie = this.$cookies.get("client_id")
        const token = this.$cookies.get("token")
        console.log("this is cookie from created in" ,cookie, "and token of", token)
      this.token = token
      
  
    },
    },
    created(){

      this.triggerEvent()

    }

  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: yellow;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: red;
}
</style>
