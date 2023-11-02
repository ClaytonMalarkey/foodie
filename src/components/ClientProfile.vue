<template>
    <div>
      <h1>Client Profile</h1>
      <p>Email: {{ email }}</p>
      <p>Name: {{ name }}</p>
      <button @click="editProfile">Edit Profile</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClientProfile',
    data() {
      return {
        email: 'client@example.com',
        name: 'John Doe',
        // Add more data properties for profile fields
      };
    },
    methods: {
      editProfile() {
        // Implement logic to edit the user profile
      },
    },
  }
  </script>
  