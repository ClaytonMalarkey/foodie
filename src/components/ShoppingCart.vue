<template>
    <div>
      <h1>Shopping Cart</h1>
      <!-- Display the shopping cart and allow users to review and submit orders here -->
      <div v-for="(item, index) in cart" :key="'ing'+index">
        <li>{{ item.name }}</li>
        <li>{{ item.price }}</li>
        <button v-on:click="removefromcart(item)">remove from cart</button>
      </div>
      <h1>total $ {{ this.total }}</h1>
      <button>submit order</button>
      <button>add more items</button>
    </div>

  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        cart: [], // Store items in the shopping cart
        total: 0, // Calculate and display the total order cost
      };
    },
    methods: {
      submitOrder() {
        // Send the order to the API and handle the response
      },
      removefromcart() {
        this.cart.pop(this.item)
        console.log(this.cart)
      },
    },
    created(){

      console.log("triggered created in shoppoing cart vue");
      const query = this.$cookies.get('client_order')
      console.log(query);
      this.cart = JSON.parse(query);

    }
  }
  </script>
  