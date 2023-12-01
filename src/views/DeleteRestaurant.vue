<template>
    <div>
        <h1>Delete Restauant</h1>
        <form @submit.prevent="signup">
            <input v-model="password" type="password" placeholder="Password"><br>
            <button type="submit">DELETE RESTAURANT</button>
        </form>
    </div>
</template>
<script>

    import axios from 'axios';
  
    export default {
        data() {
            return {
                password:''
            };
        },
        methods:{
            signup(){
                console.log(this.password)
                console.log(this.restaurant_token)
                const body = {
                    password:this.password
                }
                console.log(this.restaurant_token)
                console.log(body)
                const headers = {
                    "x-api-key": "XpRImBVFyl7owgj68TLt",
                    "Content-Type": "application/json",
                    "token": this.restaurant_token
                }

                 axios
                .delete("https://foodie.bymoen.codes/api/restaurant", {
                    headers,
                    data: body
                }).then(response => {
                // Handle the response, set user as authenticated, and store tokens
                    console.log('This is response fro  deleting', response)
                 })
                    .catch(error => {
                    // Handle registration error, show a message, or redirect to an error page
                    console.error('restaurant  Delete failed', error);
                });
                this.$router.push('/restaurant_login')
            },
            
        },
        created(){
                console.log("triggered")
                const restaurant_token = this.$cookies.get('restaurant_token')
                this.restaurant_token = restaurant_token
                console.log(restaurant_token)
        },
    }
    
</script>