<template>
    <div>
      <h1>Restaurant {{ restaurant.name }}</h1>
      <h1 v-if="checkmenu()">no items in menu</h1>
      <div v-for="(item, index) in menu" :key="'ing'+index">
        <ul>
          <li>{{ item.name }}</li>
          <li>{{ item.price }}</li>
          <li>{{ item.image_url }}</li>
          <li>{{ item.description }}</li>
          <button v-on:click="deleteMenuItem(item.id)">delete</button>
          <!-- <button v-on:click="editMeunItem(item.id)">edit</button> -->
        </ul>
      </div>

      <button v-on:click="addMenuItem()">add menu item</button>
  
      
    </div>
  </template>
  
  <script>
  
  
  import axios from 'axios';
  
  export default {
    name:"RestauantDashboard",
    data() {
      return {
        restaurant: {},
        menu:[],
        restaurant_token:'',
        restaurant_id:''
      };
    },
  
    methods:{
      // deleteMenuItem(id){

      // },
      deleteMenuItem(id){
        // Add more properties as needed
        console.log(id)
        const body ={
          menu_id: id
        }
        console.log("RESTAURANT TOKEN", this.restaurant_token, body)
        const headers = {
            "x-api-key": "XpRImBVFyl7owgj68TLt",
            "Content-Type": "application/json",
            "token": this.restaurant_token
        }

        console.log(headers)
        axios
        .delete("https://foodie.bymoen.codes/api/menu", {
          headers,
          data: body
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
          this.$router.push('/Discover');
        })
        .catch((error) => {
          // Handle registration error, show a message, or redirect to an error page
          console.error("Client registration failed", error);
        });
      },
      addMenuItem(){
        this.$router.push('/add_menu_item');
      },
      checkmenu() {
  
        if (this.menu.length === 0){
          return true
        }
        return false
      
      }
    },
  
    created(){
      console.log("triggered")
      const restaurant_token = this.$cookies.get('restaurant_token')
      this.restaurant_token = restaurant_token
      console.log(restaurant_token);
      const restaurant_id = this.$cookies.get('restaurant_id')
      this.restaurant_id = restaurant_id
      axios.get(`https://foodie.bymoen.codes/api/restaurant?restaurant_id=${restaurant_id}`,{
          headers : {
            'x-api-key': 'XpRImBVFyl7owgj68TLt', 
            'Content-Type': 'application/json'
          } }).then(response => {
            // Handle the response, set user as authenticated, and store tokens
            console.log('This is response', response)
            this.restaurant = response.data[0];
            console.log(this.restaurant)
          })
          .catch(error => {
            // Handle registration error, show a message, or redirect to an error page
            console.error('restaurant load failed', error);
          });
  
          axios.get(`https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`,{
            headers : {
            'x-api-key': 'XpRImBVFyl7owgj68TLt', 
            'Content-Type': 'application/json',
          } }).then(response => {
            console.log(response)
            const menu = response.data
            this.menu = menu
          })
          .catch(error=> {
            console.error('menu load failed', error);
          });
  
          },
  }
  
      // Fetch the list of restaurants from the API when the component is created
      // Store fetched restaurants in this.restaurant
  </script>
  