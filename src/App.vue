<template>
  <div id="app">
    <div id="nav">
      <Register />
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Register from './views/login/Register'
export default {
  components: {
    Register
  }
}
</script>
<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
