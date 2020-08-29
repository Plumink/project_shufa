<template>
  <v-app id="show">
    <div class="box">
      <div class="top d-flex justify-space-between align-center mb-6">
        <span style="font-size:14px" @click="goBack()">
          <span class="Calligraphy_icon_fanhui" />返回
        </span>
        <span>
          <h3>发布作品</h3>
        </span>
        <v-btn class="ma-2" outlined color="indigo">发布</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#show {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 6%;
}
</style>