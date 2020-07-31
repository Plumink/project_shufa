<template>
  <v-app>
    <Register />
  </v-app>
</template>

<script>
import FootNavigation from './components/FootNavigation'
import Login from './views/login/Login'
import Register from './views/login/Register'
export default {
  name: 'App',
  components: {
    FootNavigation,
    Login,
    Register
  },

  data: () => ({
    //
  })
}
</script>
