<template>
  <v-app id="inspire">
    <div class="total_main">
      <TopNavigation/>
      <div style="height:10vh"></div>
      <div>
        <p style="color:#000;font-size:4vw;text-align:center;font-weight:800;" class="mt-5">
          个人中心
        </p>
        <p style="">用户名：</p>
      </div>
      
    </div>
  </v-app>
</template>

<script>
import TopNavigation from '../../components/TopNavigation'
import FootNavigation from '../../components/FootNavigation'
export default {
  components: {
    TopNavigation,
    FootNavigation
  }
}
</script>

<style>
  .total__main {
    width: 100vw;
    height: auto;
    background-color: #F9F4E6;
  }

  .head_main {
    width: 100vw;
    height: 20vh;
    background-color: red;
  }

</style>
