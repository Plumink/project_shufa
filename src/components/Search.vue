<template>
  <div id="search" class>
    <form class="search_from">
      <input type="text" v-model="search_main" placeholder="请输入您要搜索的内容..." class="search_input" />
      <button type="submit" class="search_button " @click="commit()">
        <span class="Calligraphy_icon_search"></span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transparency: 0,
      search_main:''
    };
  },
  methods:{
    commit(){
      console.log(this.search_main)
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#search {
  width: 100%;
  height: 130px;
  background-image: url("../../images/search.jpg");
  background-size: 100% 100%;
  position: relative;
  opacity: 0.6;
  margin-top: 10vh;
}
.search_from {
  width: 80%;
  height: 25%;
  opacity: 1;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
}
.search_input {
  width: 80%;
  height: 100%;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  background: #f9f0da;
  color: #9e9c9c;
}
.search_button {
  height: 100%;
  width: 20%;
  top: 0;
  right: 0;
  background: #7ba7ab;
  border-radius: 0 5px 5px 0;
}
</style>