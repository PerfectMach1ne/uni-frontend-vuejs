<template>
  <v-container>
    <v-card
      class="mx-auto"
      elevation="7"
      outlined
      tile
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
      </template>
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
    test(userlist) {
      console.log(userlist);
      return userlist;
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
        this.todos_loading = false;
      });
    
  }
}
</script>