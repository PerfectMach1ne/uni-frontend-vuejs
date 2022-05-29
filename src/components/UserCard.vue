<template>
  <v-container>
    <v-card
      class="mx-auto"
      elevation="7"
      outlined
      tile
      @click="openUserPage"
    >
      <!-- Ensure the axios request from parent component was successful -->
      <template v-if="!request_loading && !request_error">
        <!-- If the response from /todos is successful, fill the component with elements -->
        <template v-if="!todos_loading && !todos_error">
          <h3>{{ userobj.name }}</h3>
          <p>Email: {{ userobj.email }}</p>
          <p>Address: {{ getFullAddress(userobj) }}</p>
          <p>Company: {{ userobj.company.name }}</p>
        </template>
        <p v-else-if="todos_error">An error occured while requesting todo list data.</p>
      </template>
      <p v-else-if="users_error">An error occured while requesting user data.</p>
    </v-card>
  </v-container>
</template>

<script>
const axios = require('axios').default;

// JSONPlaceHolder URLs
const url_todos = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: 'UserCard',

  props: [
    'userobj',
    'request_loading',
    'request_error'
  ],

  data() {
    return {
      // Create arrays for resources
      todos: [],
      users_error: false,
      users_loading: true,
      todos_error: false,
      todos_loading: true
    }
  },
  methods: { 
    getFullAddress(user) {
      return user.address.street+ " " + user.address.suite;
    },
    openUserPage() {
      // Parse card user's URL and send it to the router
      // In params property, id is required for routing dynamic route matching to work.
      // userobj and todos properties pass the users and todos to UserPageView so that it can create a UserPage component using this data.
      var route = '/user-page/' + this.userobj.id;
      this.$router.push({
        path: route,
        name: 'user-page',
        params: {
          id: this.userobj.id,
          userobj: this.userobj,
          todos: this.todos
        }
      });
    }
  },
  created() {
    // GET request for JSONPlaceHolder /todos
    axios.get(url_todos)
      .then(response => {
        // Write user data into the users array
        this.todos = response.data;
      })
      .catch(error => {
        this.todos_error = true;
        console.log(error);
      })
      .finally(() => {
        console.log("GET Request from " + url_todos + " successful.")
        this.todos_loading = false;
      });
  }
}
</script>