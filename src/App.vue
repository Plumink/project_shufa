<template>
  <v-app>
    <Login />
  </v-app>
</template>

<script>
import FootNavigation from './components/FootNavigation'
import Login from './views/login/Login'
export default {
  name: 'App',
  components: {
    FootNavigation,
    Login
  },

  data: () => ({
    //
  })
}
</script>
