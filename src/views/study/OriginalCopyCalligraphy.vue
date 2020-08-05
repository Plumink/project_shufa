<template>
  <v-app>
    <div></div>
    <div>
      <v-card>
        <v-tabs v-model="tab" background-color="primary" dark>
          <v-tab class="content" v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat>
              <v-card-text
                class="text"
                v-for="(item,index) in items[0].content"
                :key="index"
                @click="jumpOriginalCopy(item)"
              >{{ item }}</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card>
              <v-list two-line>
                <template>
                  <div>
                    <v-alert text color="info" v-for="(item,index) in items[1].list" :key="index">
                      <h3 class="headline">{{item.head}}</h3>
                      <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
                      <v-col
                        class="grow"
                        v-for="(item,index) in item.title"
                        :key="index"
                        @click="getCalligraphy(item)"
                      >{{item}}</v-col>
                    </v-alert>
                  </div>
                </template>
              </v-list>
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
    FootNavigation
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
        {
          tab: "书论",
          list: [
            {
              head: "两汉",
              title: ["许慎《说文解字序》", "崔瑗《草书势》", "赵壹《非草书》"],
            },
            {
              head: "两汉",
              title: ["许慎《说文解字序》", "崔瑗《草书势》", "赵壹《非草书》"],
            },
            {
              head: "两汉",
              title: ["许慎《说文解字序》", "崔瑗《草书势》", "赵壹《非草书》"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    getCalligraphy(name) {
      console.log(name);
    },

    jumpOriginalCopy(time) {
      // this.$router.push({ path: `/originalcopy/${time}` });
      this.$router.push({
        path: "/originalcopy",
        query: {
          time: time,
        },
      });
    },
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