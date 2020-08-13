<template>
  <div class="total_gen">
    <TopNavigation />
    <img src="" alt="">
  </div>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
export default {
  components: {
    FootNavigation,
    TopNavigation
  },
  data() {
    return {
      ziti: this.$route.query.word
    }
  },
  methods: {
    
  }

}
</script>

<style scoped>
  /* @import "./style.css"; */
  .total_gen {
    width: 100vw;
    height: 100vh;
    background-color: #F9F4E6;
  }

</style>
