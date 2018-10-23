<template>
  <div class="Commonquestion">
    
    <router-view v-show="!isClick" v-on:resetFatherp="resetF" ></router-view>
      <div v-show="isClick">
      <div class="Commonquestion-title">
         <mu-button class="download-title-back" flat @click="changeFatherB">{{pageMessage.return}}</mu-button>
                  <h3 class="Commonquestion-title-text">{{pageMessage.commonquestion}}</h3>
                 
              </div>
               <h4>{{pageMessage.commonquestionFirst}}</h4>
     <h6>{{pageMessage.commonanswerFirst}}</h6>
     <h4>{{pageMessage. commonquestionSecond}}</h4>
    <h6>{{pageMessage.commonanswerSecond}}</h6>
     <h4>{{pageMessage.commonquestionThird}}</h4>
      <h6>{{pageMessage.commonanswerThird}}</h6>
     <h4>{{pageMessage.commonquestionForth}}</h4>
      <h6>{{pageMessage.commonanswerForth}}</h6>
    
      <h4>{{pageMessage.commonquestionFifth}}</h4>
      <h6>{{pageMessage.commonanswerFifth}}</h6>
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
        commonquestion:this.$t('profile.commonquestion'),
       commonquestionFirst:this.$t('profile.commonquestionFirst'),
       commonanswerFirst:this.$t('profile.commonanswerFirst'),
       commonquestionSecond:this.$t('profile.commonquestionSecond'),
       commonanswerSecond:this.$t('profile.commonanswerSecond'),
       commonquestionThird:this.$t('profile.commonquestionThird'),
       commonanswerThird:this.$t('profile.commonanswerThird'),
       commonquestionForth:this.$t('profile.commonquestionForth'),
      commonanswerForth:this.$t('profile.commonanswerForth'),
      commonquestionFifth:this.$t('profile.commonquestionFifth'),
       commonanswerFifth:this.$t('profile.commonanswerFifth'),
       

       
        
        
      },
      
     }
   },
   created() {
   
   },
  

   
   methods:{
     changeFatherB(){
      this.$emit('resetFatherp');
    },
   resetF(){

          this.$router.push('/mydownload');
          this.isShow=!this.isShow;
      }
   }
}
</script>
<style lang="scss" scoped>
.Commonquestion-title{
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


</style>
