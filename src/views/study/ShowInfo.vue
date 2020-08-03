<template>
  <v-app id='show'>
    <TopNavigation />
    <div class="box">
        <span style="font-size:12px" @click="goBack()">返回免费晒</span>
        <div class="d-flex flex-column content">
            <img src="https://s1.ax1x.com/2020/07/31/alrgsK.th.png" alt="">
            <br />
            <p class='poem'>
                故人西辞黄鹤楼，
                烟花三月下扬州。
                孤帆远影碧空尽，
                不见长江滚滚来
            </p>
        </div>
        <div class="comment"></div>
    </div>
    <FootNavigation />
  </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
export default {
    data(){
        return {

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    components:{
        FootNavigation,
        TopNavigation
    }
};
</script>

<style scoped>
#show {
  width: 100%;
  height: 100%;
}
.box{
    width: 100%;
    margin-top: 10vh;
    height: 100%;
}
.content{
    width: 100%;
    padding:5% 20% 5% 20%;
    border-bottom: 1px dashed #BDBDBD;
}
.poem{
    font-size: 12px;
    font-weight: bold;
    margin:10px;
}
</style>