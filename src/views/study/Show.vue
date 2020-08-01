<template>
  <v-app>
    <FootNavigation />
    <TopNavigation />
    <Search />
    <div class="d-flex flex-row justify-space-around box">
      <div class="box-left">
          <img src="../../assets/logo.png" alt="">
      </div>
      <div class="d-flex flex-column justify-space-around box-right">
          <div class=""></div>
      </div>
    </div>
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import Search from "../../components/Search";
export default {
  components: {
    FootNavigation,
    TopNavigation,
    Search,
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 90px;
}
.box-left {
  width: 25%;
  padding: 20px;
}
.box-right {
  width: 75%;
  background-color: blue;
  padding: 10px;
}
.box-left img{
    width: 100%;
    height: 100%;
}
</style>