<template>
  <v-app>
    <v-main>
      <v-app-bar
        color="green"
        flat
      >
        <v-item>
          <router-link to="/" class="router-link">Home</router-link>
        </v-item>
      </v-app-bar>
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

  data() {
    return {

    }
  }
};
</script>