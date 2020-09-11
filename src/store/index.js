import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
  
export default new Vuex.Store({ 
  state: {
    // 手机号登陆
    id:JSON.parse(localStorage.getItem("loginMessage"))==null?'':JSON.parse(localStorage.getItem("loginMessage")).id,
    land:JSON.parse(localStorage.getItem("loginMessage"))==null?false:JSON.parse(localStorage.getItem("loginMessage")).login,
    phone: JSON.parse(localStorage.getItem("loginMessage")) == null ? '' : JSON.parse(localStorage.getItem("loginMessage")).phone,
    customerImgHead: JSON.parse(localStorage.getItem("loginMessage")) == null ? '' : JSON.parse(localStorage.getItem("loginMessage")).customerImgHead,
    userName: JSON.parse(localStorage.getItem("loginMessage")) == null ? '' : JSON.parse(localStorage.getItem("loginMessage")).userName,

    // 微信openid登陆
    openid:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).openid,
    custId:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).custId,
    custTel:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).custTel,
    custName:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).custName,
    custPass:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).custPass,
    custImgHead:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).custImgHead,
    tag:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).tag,
    custLastTime:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).custLastTime,
    vipEffDate:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).vipEffDate,
    isVip:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).isVip,
    vipExpDate:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).vipExpDate,
    invalidTime:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).invalidTime,
    ifValid:JSON.parse(localStorage.getItem("wechatLogin")) == null ? '' : JSON.parse(localStorage.getItem("wechatLogin")).ifValid,


  },
  mutations: {
    islogin(state,message){
      localStorage.setItem('loginMessage', JSON.stringify(message));
      state.land=message.login
      state.phone=message.phone
      state.id = message.id
      state.customerImgHead = message.customerImgHead
      state.userName = message.userName
    },
    wechatLogin(state,data){
      localStorage.setItem('wechatLogin', JSON.stringify(data));
      state.openid=data.openid
      state.custId=data.custId
      state.custTel-data.custTel
      state.custName=data.custName
      state.custPass=data.custPass
      state.custImgHead=data.custImgHead
      state.tag=data.tag
      state.custLastTime=data.custLastTime
      state.vipEffDate=data.vipEffDate
      state.isVip=data.isVip
      state.vipExpDate=data.vipExpDate
      state.invalidTime=data.invalidTime
      state.ifValid=data.ifValid
    },
    wechatClear(state,data){
      localStorage.setItem('wechatLogin', JSON.stringify(data));
      state.openid=data.openid
      state.custId=data.custId
      state.custTel-data.custTel
      state.custName=data.custName
      state.custPass=data.custPass
      state.custImgHead=data.custImgHead
      state.tag=data.tag
      state.custLastTime=data.custLastTime
      state.vipEffDate=data.vipEffDate
      state.isVip=data.isVip
      state.vipExpDate=data.vipExpDate
      state.invalidTime=data.invalidTime
      state.ifValid=data.ifValid
    }
  },
  actions: {
  },
  modules: {
  }
})
