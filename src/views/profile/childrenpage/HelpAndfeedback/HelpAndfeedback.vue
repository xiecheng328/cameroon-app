<template>
  <div class="HelpAndfeedback">
    
    <router-view v-show="!isClick" v-on:resetFatherp="resetF" ></router-view>
      <div v-show="isClick">
      <div class="HelpAndfeedback-title">
        <mu-button class="download-title-back" flat @click="changeFatherB">{{pageMessage.return}}</mu-button>
                  <h3 class="HelpAndfeedback-title-text">{{pageMessage.HelpFeedback}}</h3>
                 
              </div>
   
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
        pageMessage:{
        return:this.$t('profile.return'),
        HelpFeedback:this.$t('profile.HelpFeedback'),
       
        
        
      },
       HelpAndfeedback: [{
         iconimg:"/img/profileicon1.png",
        commonquestion:this.$t('profile.commonquestion'),
         src:"Commonquestion",
         id:1,

       },{
        iconimg:"/img/profileicon1.png",
         userGuide:this.$t('profile.userGuide'),
         src:"UserGuide",
         id:2
       },{
        iconimg:"/img/profileicon1.png",
        userFeedback:this.$t('profile.userFeedback'),
         src:"UserFeedback",
         id:3
       },],
     }
   },
   created() {
   
   },
  

   
   methods:{
     changeFatherB(){
      this.$emit('resetFatherp');
    },
    routerGo(a){
      this.isClick=false;
      this.$router.push({ name:`${a.src}`, params: { userId: 123 }})
      console.log(a);
      
    },
      resetF(){
        console.log("chufal!");
        this.$router.push('/HelpAndfeedback');
       this.isClick=!this.isClick;
     },
   
   }
}
</script>
<style lang="scss" scoped>
.HelpAndfeedback-title{
  margin-top: 0.4rem;
  height: 40px;
  line-height: 40px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  &-back{
  margin-left: 0.2rem;
  }
  &-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
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
