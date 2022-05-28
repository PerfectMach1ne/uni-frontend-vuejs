<template>
  <v-container>
    <!-- If the response from /users is successful, create user cards -->
    <template v-if="!users_loading && !users_error">
      <!-- Loop through all user objects in users array -->
      <template v-for="(user, id) in users">
        <!-- Create a user-card component for each user -->
        <user-card v-bind:key="id" :userobj="user" :request_loading="users_loading" :request_error="users_error"/>
      </template>
    </template>
  </v-container>
</template>

<script>
import UserCard from '@/components/UserCard.vue';

const axios = require('axios').default;

// JSONPlaceHolder URLs
const url_users = "https://jsonplaceholder.typicode.com/users";

export default {
  name: 'HomePage',

  components: {
    UserCard
  },

  data() {
    return {
      // Create arrays for resources
      users: [],
      users_error: false,
      users_loading: true
    }
  },
  created() {
    // GET request for JSONPlaceHolder /users
    axios.get(url_users)
      .then(response => {
        // Write user data into the users array
        this.users = response.data;
      })
      .catch(error => {
        console.log(error)
        this.users_error = true;
      })
      .finally(() => {
        console.log("GET Request successful.")
        this.users_loading = false;
      });
  }
}
</script>
