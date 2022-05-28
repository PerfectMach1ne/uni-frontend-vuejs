<template>
  <v-container>
    <v-card
      class="mx-auto"
      outlined
      tile
    >
      <h3>{{ userobj.name }}</h3>
      <p>Email: {{ userobj.email }}</p>
      <p>Address: {{ getFullAddress(userobj) }}</p>
      <p>Company: {{ userobj.company.name }}</p>
    </v-card>
    <ul>
      <li v-for="todo in userTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </v-container>
</template>

<script>

export default {
  name: 'UserPage',

  props: [
    'userobj',
    'todos'
  ],

  data() {
    return {
      
    }
  },

  computed: {
    userTodos() {
      let filteredTodos = [];
      for (let todo of this.todos) {
        if (todo.userId === this.userobj.id) {
          filteredTodos.push(todo);
        }
      }
      return filteredTodos;
    }
  },

  methods: {
    getFullAddress(user) {
      return user.address.street+ " " + user.address.suite;
    }
  }
}
</script>