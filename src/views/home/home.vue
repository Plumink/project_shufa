<template>
<v-app id="inspire">
  <div class="total">
    <div class="head">
      <img src="https://s1.ax1x.com/2020/07/31/alrgsK.th.png" alt="">
      <span class="font"><i style="font-size:10vw" class="iconfont  icon-menu-line"></i></span>
    </div>
    <div class="middle">
      <template>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="请输入文字"
                  outlined
                  background-color="#fff"
                  light="true"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </template>
      <div>
        <template>
        <div style="position: absolute;left: 0;width: 40vw;">
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="10" rows="6" sm="6">
                <v-select
                  :items="items"
                  label="字体"
                  outlined
                  background-color="#fff"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </div> 
      </template>
      <template>
        <div style="position: absolute;right: -7vw;width: 40vw; height: 10vh;padding-right:0;">
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="10" rows="6" sm="6">
                <v-select
                  :items="items"
                  label="次选"
                  outlined
                  background-color="#fff"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </div> 
      </template>
      <template>
        <div style="position: absolute;right: 27vw;width: 40vw; height: 10vh">
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="10" rows="6" sm="6">
                <v-select
                  :items="items"
                  label="作者"
                  outlined
                  background-color="#fff"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </div> 
      </template>
      
      </div>
    </div>
    
  </div>
  </v-app>
</template>

<script>
import Vuetify from 'vuetify'
  export default {
    vuetify: new Vuetify(),
    data(){
      return{
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    }
  }
</script>

<style scoped>
 @import "./style.css";
</style>
