import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const axios = require('axios').default;

const url_users = "https://jsonplaceholder.typicode.com/users"
const url_todos = "https://jsonplaceholder.typicode.com/todos"

export default new Vuex.Store({
  state: {
    users: [],
    users_loading: true,
    users_error: false,
    todos: [],
    todos_loading: true,
    todos_error: false
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USERS_STATUS(state, status) {
      state.users_loading = status;
    },
    SET_USERS_ERROR(state, error) {
      state.users_error = error;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    SET_TODOS_STATUS(state, todos) {
      state.todos_loading = todos;
    },
    SET_TODOS_ERROR(state, error) {
      state.todos_error = error;
    }
  },
  actions: {
    fetchUsers(context) {
      // GET request for JSONPlaceHolder /users
      axios.get(url_users)
        .then(response => {
          // Write user data into the users array
          context.commit('SET_USERS', response);
        })
        .catch(error => {
          context.commit('SET_USERS_ERROR', true);
          console.log(error);
        })
        .finally(() => {
          console.log("GET Request from " + url_users + " successful.");
          context.commit('SET_USERS_STATUS', false);
      });
    },
    fetchTodos(context) {
      // GET request for JSONPlaceHolder /todos
      axios.get(url_todos)
        .then(response => {
          // Write user data into the todos array
          context.commit('SET_TODOS', response);
        })
        .catch(error => {
          context.commit('SET_TODOS_ERROR', true);
          console.log(error);
        })
        .finally(() => {
          console.log("GET Request from " + url_todos + " successful.");
          context.commit('SET_TODOS_STATUS', false);
      });
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUsersStatus(state) {
      return state.users_loading;
    },
    getTodos(state) {
      return state.todos;
    },
    getTodosStatus(state) {
      return state.todos_loading;
    }
  },
  modules: {
  }
})
