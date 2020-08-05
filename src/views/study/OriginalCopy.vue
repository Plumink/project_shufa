<template>
  <v-app>
    <TopNavigation />
    <div class="box">
      <span style="font-size:14px" @click="goBack()"><span class="Calligraphy_icon_fanhui"></span>返回</span>
      <div class="d-flex flex-column ">
          <div class="d-flex flex-row justify-center title">
              <h2>{{time}}</h2>
          </div>
          <div class="d-flex flex-column list" v-for='(item,index) in copybook' :key='index'>
            <h3 v-if='item.author!=""'>{{item.author}}</h3>
            <span v-for='(item,index) in item.works' :key='index'>
                {{item}}
            </span>
          </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import TopNavigation from "../../components/TopNavigation";
export default {
  components: {
    TopNavigation,
  },
  data() {
    return {
      copybook:[
          {author:'',works:['大盂鼎','毛公鼎']},
          {author:'吕峰',works:['python','c#']},          
          ],
      time: this.$route.query.time,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.box {
  margin-top: 10vh;
  width: 100%
}
.list{
    margin-left: 10%;
    width: 80%;
    border-bottom: 1px dashed #757575;
}
.title{
    margin: 20px;
}
</style>