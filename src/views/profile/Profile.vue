<template>
  <div class="profile">
    <router-view v-show="!isClick" v-on:resetFatherp="resetF" ></router-view>

     <!--  此处的子页面 v-show变量要通过各子页面的“返回按钮”的点击改变父组件的isClick的值，取反，（父子，子父组件传参）自己研究-->

    <div v-show="isClick">
   
    <h3 class="profile-header">{{pageMessage.Myprofile}}</h3>
    <div class="profile-user">
      <div class="profile-user-slideimg"><img src="@/assets/img/user.png" alt="" class="profile-user-slideimg-uersimg"></div>
      <div class="profile-user-slidetext"><h5>{{pageMessage.Nickname}}</h5> <p>{{pageMessage.PermanentR}}:{{pageMessage.Yaounde}}</p></div>
    </div>
    <div class="menuprofile">
      <div class="menuprofile-first">
        <li v-for=" item in pageMessage.profileMenu" :key="item.id" @click="routerGo(item)"><img :src="item.iconimg" alt="" ><span>{{item.text}}</span></li>
      </div>
    </div>
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
      isClick:true,
      pageMessage:{
         Myprofile:this.$t('profile.Myprofile'),
         Nickname:this.$t('profile.Nickname'),
         PermanentR:this.$t('profile.PermanentR'),
         Yaounde:this.$t('profile.Yaounde'),
        
       profileMenu: [{
         iconimg:"/img/profileicon1.png",
         text:this.$t('profile.Myfocus'),
         src:"Myinterst",
         id:1,

       },{
        iconimg:"/img/profileicon1.png",
         text:this.$t('profile.Myfans'),
         src:"Myfans",
         id:2
       },{
        iconimg:"/img/profileicon1.png",
         text:this.$t('profile.MyPRecord'),
         src:"Myshopping",
         id:3
       },{
         iconimg:"/img/profileicon1.png",
         text:this.$t('profile.CertChannel'),
         src:"Identification",
         id:4
       },{
        iconimg:"/img/profileicon1.png",
         text:this.$t('profile.Mydownload'),
         src:"Mydownload",
         id:5
       },{
        iconimg:"/img/profileicon1.png",
         text:this.$t('profile.Setting'),
         src:"Myset",
         id:6
       },{
         iconimg:"/img/profileicon1.png",
         text:this.$t('profile.HelpFeedback'),
         src:"HelpAndfeedback",
         id:7
       }],
     }
     }
   },
   created() {
   
   },
  

   
   methods:{
    routerGo(a){
      this.isClick=false;
      this.$router.push({ name:`${a.src}`, params: { userId: 123 }})
      console.log(a);
      
    },
      resetF(){
        console.log("chufal!");
        this.$router.push('/profile');
        this.isClick=!this.isClick;
     }
   }
}
</script>
<style lang="scss" scoped>
.profile{

  &-header{
    height: 40px;
    margin-top: 10px;
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

}
</style>
