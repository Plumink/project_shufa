<template>
  <div id="search" class>
    <form class="search_from" :opacity="0.2">
      <input type="text" placeholder="请输入您要搜索的内容..." class="search_input" />
      <button type="submit" class="search_button">search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transparency: 0,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#search {
  width: 100%;
  height: 180px;
  background-image: url("../../images/search_background.jpg");
  background-size: 100% 100%;
  position: relative;
  opacity: 0.6;
  margin-top: 10vh;
}
.search_from {
  width: 80%;
  height: 18%;
  opacity: 0.6;
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