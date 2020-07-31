<template>
  <v-app>
    <div></div>
    <div>
      <v-card>
        <v-tabs v-model="tab" background-color="primary" dark>
          <v-tab class="content" v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
              <v-card-text class="text" v-for="(item,index) in item.content" :key="index">{{ item }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
    
      <FootNavigation />
    </v-app>
</template>

<script>
import FootNavigation from "../../components/FootNavigation";
export default {
  components: {
    FootNavigation: FootNavigation,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          tab: "高清原帖",
          content: [
            "西周",
            "秦朝",
            "汉代",
            "三国",
            "西晋",
            "东晋",
            "南北朝",
            "唐朝",
            "宋朝",
            "元朝",
            "明朝",
            "清朝",
            "现代",
          ],
        },
        { tab: "书论", content: "" },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  width: 50%;
}
.text {
  text-align: center;
}
</style>