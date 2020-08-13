<template>
  <div class="total_gen">
    <TopNavigation />
    <img src="" alt="">
    <p style="margin-top:100px">{{this.$route.query.a}}123</p>
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
    
  },
  created(){
    let params = this.$route.query.message
    this.$axios.post('http://127.0.0.1:9003/dictionaries/query',params,{
       headers: {
            "X-APP-ID": "1",
            "X-APP-KEY": "1",
            "X-Request-ID": "1",
          }
    }).then(response=>{
      console.log(response)
    })
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
