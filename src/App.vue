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
    var openid=this.getCookie('openid')
    this.$axiox.post('/CalligraphyService/user/getUserInfo',
    {
      headers:{'X-Request-ID':'1'}
    },
    {
      "openId": openid
    }
    )
    .then((response)=>{
      console.log(response)
    })
    if(this.$store.state.land==true || openid!=''){
      if(this.$route.path=='/main'){
        this.$router.push(
            {path: '/main'},
            onComplete => {},
            onAbort => {}
         )
      }
      else if(this.$route.path=='/main/follow' ){
        this.$router.push(
            {path: '/main/follow'},
            onComplete => {},
            onAbort => {}
         )
      }
      else if(this.$route.path=='/main/follower'){
        this.$router.push(
            {path: '/main/follower'},
            onComplete => {},
            onAbort => {}
         )
      }
      else{
        this.$router.push(
            {path: '/homelogin'},
            onComplete => {},
            onAbort => {}
         )
      }
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
