<template>
<v-app>
    <TopNavigation />
    <Search />
    <div class="box" v-for='(item,index) in font' :key='index'>
        <h5>{{toChinese(index)}}.{{item.typeface}}</h5>
        <ol>
            <li v-for='(item,index) in item.list' :key='index'>{{item}}</li>
        </ol>
    </div>
    <FootNavigation />
</v-app>
</template>

<script>
import {Decrypt,Encrypt} from '../../api/utils'
import FootNavigation from "../../components/FootNavigation";
import TopNavigation from "../../components/TopNavigation";
import Search from "../../components/Search";
export default {
  components: {
    FootNavigation,
    TopNavigation,
    Search,
  },
  data(){
      return {
          font:[
              {typeface:'草书',list:['孙过庭·书谱','张旭·古诗四帖']},
              {typeface:'楷书',list:['孙过庭·书谱','张旭·古诗四帖']}
          ]
      }
  },
  methods:{
      toChinese : function(values){
        let chin_list=['一','二','三','四','五','六','七','八','九','十'];//所有的数值对应的汉字
        let sn = parseInt(values);
        return chin_list[sn];
      }
  },
};
</script>

<style scoped>
.box{
    width: 100%;
    padding: 10px 5% 0 5%;
}
</style>