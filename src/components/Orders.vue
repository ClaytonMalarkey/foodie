<script>
export default {
  name: 'Orders',
  data() {
    return {
      orders: [], // Store order history fetched from the API
    };
  },
  created() {
    // Fetch order history from the API when the component is created
    // Store fetched orders in this.orders
  },
}
</script>
