<template>
  <div class="user-page">
    {{ $route.params.id }}
    <user-page :userobj="userobj" :todos="todos"/>
  </div>
</template>

<script>
import UserPage from '@/components/UserPage.vue';

export default {
  name: 'UserPageView',

  components: {
    UserPage
  },

  props: [
    'userobj',
    'todos'
  ]
}
</script>