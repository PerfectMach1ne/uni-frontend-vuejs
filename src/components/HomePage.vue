<template>
  <v-container>
    <v-row class="text-left">
      <ul>
        <li v-for="(todo, id) in todos" :key="todo.id"> {{ id }}, {{ todo.title }} </li>
      </ul>
    </v-row>
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
