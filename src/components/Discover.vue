<script>
export default {
  name: 'Discover',
  data() {
    return {
      restaurants: [], // Store restaurants fetched from the API
    };
  },
  created() {
    // Fetch the list of restaurants from the API when the component is created
    // Store fetched restaurants in this.restaurants
  },
}
</script>
