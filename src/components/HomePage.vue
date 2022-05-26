<template>
  <v-container>
    <v-card
      class="mx-auto"
      elevation="7"
      outlined
      tile
    >
      <template v-for="(user, id) in users">
        <p v-bind:key="id">{{ user.name }} {{ user.email }}</p>
      </template>
      <!-- <ul>
        <li v-for="(user, id) in users" v-bind:key="id">
          {{ user.name }} {{ user.email }}
        </li>
      </ul> -->
    </v-card>
  </v-container>
</template>

<script>
const axios = require('axios').default;

// JSONPlaceHolder URLs
const url_users = "https://jsonplaceholder.typicode.com/users";
const url_todos = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: 'HomePage',

  data() {
    return {
      // Create arrays for resources
      users: [],
      todos: []
    }
  },
  methods: {
    getTodos() {
      return this.todos;
    }
  },
  created() {
    // GET request for JSONPlaceHolder /users
    axios.get(url_users)
      .then(response => {
        // Write user data into the users array
        this.users = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    // GET request for JSONPlaceHolder /todos
    axios.get(url_todos)
      .then(response => {
        // Write todo list data into the todos array
        this.todos = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>
