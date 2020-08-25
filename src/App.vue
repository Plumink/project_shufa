<template>
<div id="app">
  <router-view />
</div>
</template>

<script>

export default {
  name: "app",
  data: () => ({
    //
  }),
  created: function(){
    if(this.$store.state.land==true){
      this.$router.push(
            {path: '/homelogin'},
            onComplete => {},
            onAbort => {}
         )
    }
    else{
      if(this.$route.path=='/main' || this.$route.path=='/main/follow' || this.$route.path=='/main/follower' ){
        this.$message.error("尚未登陆");
        this.$router.push(
            {path: '/'},
            onComplete => {},
            onAbort => {}
         )
      }
    }
  }
}
</script>
