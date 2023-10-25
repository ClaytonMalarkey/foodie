<template>
    <div>
      <h1>Client Profile</h1>
      <!-- Display and edit client profile information here -->
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
      };
    },
    methods: {
      editProfile() {
        // Allow the user to edit their profile information
      },
    },
  }
  </script>
  