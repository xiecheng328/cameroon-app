<template>
  <div class="profile">
    <h3 class="profile-header">我的</h3>
    <div class="profile-user">
      <div class="profile-user-slideimg"><img src="@/assets/img/user.png" alt="" class="profile-user-slideimg-uersimg"></div>
      <div class="profile-user-slidetext"><h5>昵称</h5> <p>常住地:雅温得</p></div>
    </div>
    <div class="menuprofile">
      <div class="menuprofile-first">
        <li v-for="(item,index) in profileMenu" :key="index" @click="routerGo"><img :src="item.iconimg" alt="" ><span>{{item.text}}</span></li>
      </div>
      <div class="menuprofile-second"></div>
      <div class="menuprofile-third"></div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

export default {
   data(){
     return{
       profileMenu: [{
         iconimg:"/img/profileicon1.png",
         text:"我的关注"
       },{
        iconimg:"/img/profileicon1.png",
         text:"我的粉丝"
       },{
        iconimg:"/img/profileicon1.png",
         text:"我的购买记录"
       },{
         iconimg:"/img/profileicon1.png",
         text:"认证通道"
       },{
        iconimg:"/img/profileicon1.png",
         text:"我的下载"
       },{
        iconimg:"/img/profileicon1.png",
         text:"设置"
       },{
         iconimg:"/img/profileicon1.png",
         text:"帮助与反馈"
       }],
     }
   },
   created() {

   },
  

   
   methods:{
    routerGo(){
      
    },
   }
}
</script>
<style lang="scss" scoped>
.profile{

  &-header{
    margin-top: 0.4rem;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    background: #ffffff;
  }
  &-user{
    background: #ffffff;
    padding-top: 10px;
    display: flex;
    margin-bottom: 10px;
    &-slideimg{
      padding: 10px 20px 10px 20px ;
      flex-grow: 1;
      text-align: center;
      width: 0;
      &-uersimg{
       width: 100%;

      }
    }
    &-slidetext{
      width: 0;
       flex-grow: 4;
       h5{
         padding-top: 10px;
         font-weight: bolder;
       }
    }
  }
}
.menuprofile{
  
  li{
    
    list-style: none;
    padding-left: 20px;
    height: 50px;
    line-height: 50px;
    background: #ffffff;
    &:nth-child(3n){
      margin-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
    &:nth-child(odd){
    border-top: 1px solid #cccccc;
    }
    &:nth-child(even){
    border-top: 1px solid #cccccc;
    }
    &:last-child{
      border-bottom: 1px solid #cccccc;
    }
    img{
      width: 24px;
      margin-left: 10px;
      margin-right: 10px;
      padding-top: 14px;
      padding-bottom: 14px;
    }
  }
  &-first{
 
  }
}
</style>
