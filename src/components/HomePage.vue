<template>
  <v-container>
    <!-- If the response is successful, create user cards -->
    <template v-if="this.users_response_status === 200">
      <template v-for="(user, id) in users">
        <!-- <p v-bind:key="id">{{ user.name }} {{ user.email }} {{ user.company.name }} {{ getFullAddress(user) }}</p> -->
        <user-card v-bind:key="id"/>
        {{ users_response_status }}
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
      // Default to Error 400, Bad Request
      users_response_status: 400
    }
  },
  methods: { 
    getFullAddress(user) {
      return user.address.street+ " " + user.address.suite;
    }
  },
  created() {
    // GET request for JSONPlaceHolder /users
    axios.get(url_users)
      .then(response => {
        // Write user data into the users array
        this.users = response.data;
        this.users_response_status = response.status;
      })
      .catch(error => {
        this.users_response_status = error.status;
      });
  }
}
</script>
