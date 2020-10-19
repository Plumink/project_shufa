<template>
  <div style="display:flex;width:90vw;height:10vh;background-color:red;flex-direction:row;justify-content:space-around;">
    <div style="width:10vw;height:5vh;background-color:blue;" @click="become()">1</div>
    <div style="width:10vw;height:5vh;background-color:blue;">2</div>
    <div style="width:10vw;height:5vh;background-color:blue;">3</div>
  </div>
</template>

<script>
import {Decrypt,Encrypt} from '../../api/utils.js'
export default {
  methods: {
    become(){
      var reg = new RegExp('"',"g");  
      var s = (Encrypt({
  "beginNum": 0,
  "custId": 10,
  "endNum": 0
})).toString();//加密
      var a = JSON.parse(Decrypt("4o48P5ZlZ5s908HcvNp3Gg=="));
      var newStr = JSON.parse(Decrypt("mpbQGr1ao1DbmCVLZWnLOg=="));//解密
      console.log(newStr);
      console.log(s)
    }
  }
}
</script>