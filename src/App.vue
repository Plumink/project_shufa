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
  }
}
</script>
