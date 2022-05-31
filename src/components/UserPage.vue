<template>
  <v-container>
    <v-card
      class="mx-auto"
      outlined
      tile
    >
      <h3>{{ userobj.name }}</h3>
      <hr>
      <p>Email: {{ userobj.email }}</p>
      <p>Address: {{ getFullAddress(userobj) }}</p>
      <p>Company: {{ userobj.company.name }}</p>
    </v-card>
    <!-- Uses Vuetify spacing helper classes
         mb-n12 sets bottom margin to -48px
         mt-n5 sets top margin to -20px
         This reduces the default large distance between checkboxes
    -->
    <v-container
      mb-n12
      mt-n5
      v-for="todo in userTodos"
      :key="todo.id"
    >
      <v-row no-gutters>
        <v-checkbox :label="todo.title" color="green">{{ todo.title }}</v-checkbox>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'UserPage',

  props: [
    'userobj',
    'todos'
  ],

  computed: {
    // Filters tasks (todo objects) from todos array based on user id and returns them in a "shortened" array.
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