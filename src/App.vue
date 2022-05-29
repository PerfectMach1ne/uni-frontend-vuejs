<template>
  <v-app>
    <v-main>
      <!-- Navigation bar -->
      <v-app-bar
        class="v-app-bar"
        color="green"
        flat
      >
        <router-link to="/" class="router-link">Home</router-link>
      </v-app-bar>
      <!-- Component matched by router will render here -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
.router-link {
  font-size: 20px;
  color: azure;
}
</style>

<script>

export default {
  name: 'App',

  watch: {
    $route(to, from) {
      console.log("to", to);
      console.log("from", from);
    }
  }
};
</script>