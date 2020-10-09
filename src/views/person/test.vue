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
      var s = Encrypt('吕锋');//加密
      var a = Decrypt('hzkkZSi7quYbYJ12tVMnXUjhukOkIaBS2W4sUy0XZQ1lMn65H6ZPd9a9YwoTOB08');//解密
      console.log(s);
      console.log(a)
      
    }
  }

  
}
</script>