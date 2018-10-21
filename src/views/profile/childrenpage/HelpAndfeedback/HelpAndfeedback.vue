<template>
  <div class="HelpAndfeedback">
    
    <router-view v-show="!isClick" v-on:resetFatherp="resetF" ></router-view>
      <div v-show="isClick">
    <h3 class="HelpAndfeedback-header">帮助与反馈</h3>
   
    <div class="menuHelpAndfeedback">
      <div class="menuHelpAndfeedback-first">
        <li v-for=" item in HelpAndfeedback" :key="item.id" @click="routerGo(item)"><img :src="item.iconimg" alt="" ><span>{{item.text}}</span></li>
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
       HelpAndfeedback: [{
         iconimg:"/img/profileicon1.png",
         text:"用户常见问题",
         src:"Commonquestion",
         id:1,

       },{
        iconimg:"/img/profileicon1.png",
         text:"用户使用指南",
         src:"UserGuide",
         id:2
       },{
        iconimg:"/img/profileicon1.png",
         text:"用户反馈窗口",
         src:"UserFeedback",
         id:3
       },],
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
        this.$router.push('/HelpAndfeedback');
       this.isClick=!this.isClick;
     }
   }
}
</script>
<style lang="scss" scoped>
.HelpAndfeedback{

  &-header{
    margin-top: 0.4rem;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    background: #ffffff;
  }
 
}
.menuHelpAndfeedback{
  
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
