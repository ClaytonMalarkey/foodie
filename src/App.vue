<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link v-if="cookie === undefined" to="/clientlogin">Client Login</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    
    created(){
      const cookie = this.$cookies.get("client_id")
      const token = this.$cookies.get("token")
      console.log("this is cookie from created in" ,cookie, "and token of", token)
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
