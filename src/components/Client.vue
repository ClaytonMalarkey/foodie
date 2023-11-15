<template>
    <div>
        <h1>Client View</h1>
        <div v-if="showClient">
          <h2>first name {{ client.first_name }}</h2>
          <h2>last name {{ client.last_name }}</h2>
          <h2>email {{ client.email }}</h2>
          <h2>username {{ client.username }}</h2>
          <h2>image ulr {{ client.image_url }}</h2>
        </div>
        
        <router-link :to='"/discover"'><button>to discover</button></router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ClientView',
  data() {
    return {
      client:{},
      showClient: false
      // Add more data properties for registration fields
    };
  },
  created(){
    console.log("triggered")
    const client_id = this.$cookies.get("client_id");
    console.log(client_id)
    
    if (!client_id) {
      console.log('Client not logged in')
      return
    }

    axios.get(`https://foodie.bymoen.codes/api/client?client_id=${client_id}`,{
        headers : {
          'x-api-key': 'XpRImBVFyl7owgj68TLt', 
          'Content-Type': 'application/json'
        } }).then(client => {
          // Handle the response, set user as authenticated, and store tokens
          console.log('This is response', client)
          this.client = client.data[0];
          console.log(this.client)
          this.showClient = true
        })
        .catch(error => {
          // Handle registration error, show a message, or redirect to an error page
          console.error('cleint view failed', error);
        });
  }

}



</script>