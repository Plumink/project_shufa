<template>
  <v-app id="inspire">
    <div class="total_main">
      <TopNavigation/>
      <div style="height:10vh"></div>
      <div>
<<<<<<< Updated upstream
        <p style="color:#000;font-size:4vw;text-align:center;font-weight:800;" class="mt-5">
          个人中心
        </p>
        <p style="text-align:center">用户名：</p>
        <p style="text-align:center">手机号码：</p>
        <p style="text-align:center">（赛大家注册用户已达163785位）</p>
=======
        <div class="info">
          <div style="width:50vw;float:left">
            <p class="little_word">用户名：<span style="color:blue">{{}}</span></p>
            <p class="little_word">手机号码：<span style="color:blue">{{}}</span></p>
          </div>
          <div style="width:50vw;float:left">
            <p class="little_word">注册时间</p>
            <p class="little_word">上次登陆时间</p>
          </div>
        </div>
        <!-- <p class="wenben_main">（名师书法注册用户已达<span style="color:red">88888</span>位）</p> -->
        <!-- <div style="width:100vw;text-align:center;margin-top:4vh;margin-bottom:4vh">
          <template>
            <div>
              <v-btn large color="amber darken-3">成为会员</v-btn>
            </div>
          </template>
        </div> -->
        <template>
            <div style="text-align:center" class="my-2">
              <v-btn large color="error">升级会员</v-btn>
            </div>
      </template>
        <hr/>
        <template>
          <v-app>
            <div></div>
            <div justify="space-around">
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
>>>>>>> Stashed changes
      </div>
    </div>
  </v-app>
</template> ]

<script>
import TopNavigation from '../../components/TopNavigation'
import FootNavigation from '../../components/FootNavigation'
export default {
  components: {
    TopNavigation,
    FootNavigation
  },
  data() {
    return {
      tab: null,
      items: [
        {
          tab: "我的关注",
          content: [
            "西周",
            "秦朝"
          ],
        },
        {
          tab: "我的粉丝",
          list: [
            {
              head: "两汉",
              title: ["许慎《说文解字序》", "崔瑗《草书势》", "赵壹《非草书》"],
            }
          ]
        }
      ]
    }
  },
  methods: {
    getCalligraphy(name) {
      console.log(name);
    },
  },
}
</script>

<style scoped>
  .total__main {
    width: 100vw;
    height: auto;
    background-color: #F9F4E6;
  }

  .head_main {
    width: 100vw;
    height: 20vh;
    background-color: red;
  }

  .wenben_main{
    text-align: center;
    font-size:14;
    margin:0;
  }

.content {
  width: 50%;
}
.text {
  text-align: center;
}

.info {
  width: 100vw;
  height: 10vh;
  background-color: red;
  color: aliceblue;
}

.little_word {
  font-size:3vw;
  margin:0;
  margin-top: 2vh;
}  

</style>
