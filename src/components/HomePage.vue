<template>
  <v-container>
    <v-card
      class="mx-auto"
      elevation="7"
      outlined
      tile
    >
      <template v-for="(user, id) in users">
        <p v-bind:key="id">{{ user.name }} {{ user.email }} {{ user['company']['name'] }} {{ user['address']['street'] + " " + user['address']['suite'] }}</p>
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
      todos: [],
      users_response_status: 400,
      todos_response_status: 400
    }
  },
  methods: { 
    // getFullAddress() {
    //   if (this.users_response_status === 200) {
    //     return this.users['address']['street'] + " " + this.users['address']['suite']
    //   }
    // }
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
      })
      .catch(error => {
        this.todos_response_status = error.status;
      });
  }
}
</script>
