<template>
  <v-container>
    <!-- If the response from /users is successful, create user cards -->
    <template v-if="!users_loading && !users_error">
      <!-- Loop through all user objects in users array -->
      <template v-for="(user, id) in users">
        <!-- Create a user-card component for each user -->
        <template v-if="!testCondition">
        </template>
        <user-card v-bind:key="id" :userobj="user" :request_loading="users_loading" :request_error="users_error"/>
      </template>
    </template>
    <!-- Display this when fetching users fails -->
    <p v-else-if="users_error">An error occured while requesting user data.</p>
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
  computed: {
    testCondition() {
      return this.$store.getters.getUsersStatus;
    }
  },
  methods: {
    getUsers() {
      return this.$store.getters.getUsers;
    }
  },
  created() {
    // GET request for JSONPlaceHolder /users
    axios.get(url_users)
      .then(response => {
        // Write user data into the users array
        this.users = response.data;
        console.log("created()", this.users);
        this.$store.dispatch('fetchUsers');
        console.log("Vuex", this.users);
      })
      .catch(error => {
        console.log(error)
        this.users_error = true;
      })
      .finally(() => {
        console.log("GET Request from " + url_users + " successful.")
        this.users_loading = false;
    });
  }
}
</script>
