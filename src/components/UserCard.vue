<template>
  <v-container>
    <v-card
      class="mx-auto"
      elevation="7"
      outlined
      tile
    >
      test
      {{ users_response_status }}
      <template v-if="this.users_response_status === 200">
         <p>{{ user.name }} {{ user.email }} {{ user.company.name }} {{ getFullAddress(user) }}</p> 
      </template>
    </v-card>
  </v-container>
</template>

<script>
const axios = require('axios').default;

// JSONPlaceHolder URLs
const url_users = "https://jsonplaceholder.typicode.com/users";
const url_todos = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: 'UserCard',

  data() {
    return {
      // Create arrays for resources
      users: [],
      todos: [],
      // Default to Error 400, Bad Request
      users_response_status: 400,
      todos_response_status: 400
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
    // GET request for JSONPlaceHolder /todos
    axios.get(url_todos)
      .then(response => {
        // Write todo list data into the todos array
        this.todos = response.data;
        this.todos_response_status = response.status;
        console.log(this.users);
      })
      .catch(error => {
        this.todos_response_status = error.status;
      });
  }
}
</script>