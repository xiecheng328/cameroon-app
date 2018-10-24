<template>
<div>
  
    <div class="help">
      <!-- 用户使用指南title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      
      <div class="help-title">{{iserGuide.userG}}</div>
      <mu-button  icon slot="right" ></mu-button>
      </mu-appbar>
      <p></p>
       
  </div>
  <div class="con">
    <div   style="color:red;margin-top:1rem">{{iserGuide.cirC}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> {{iserGuide.introd}}</span> 

             <div   style="color:red;margin-top:1.5rem">{{iserGuide.infotM}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> {{ iserGuide.infotFI }}</span> 

             <div   style="color:red;margin-top:1.5rem">{{iserGuide.mall}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> {{ iserGuide.mallF }}</span> 

             <div   style="color:red;margin-top:1.5rem">{{iserGuide.mine}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span>{{ iserGuide.myFu }}</span> 
           </div>
                
          
          
          
</div>

            
</template>
<script>
export default {
   data(){
      return{ 
            iserGuide:{
                userG:this.$t('profile.userGuide'),
                cirC:this.$t('profile.cirC'),
                infotM:this.$t('profile.infotM'),
                mall:this.$t('profile.mall'),
                mine:this.$t('profile.mine'),
                introd:this.$t('profile.introd'),
                infotFI:this.$t('profile.infotFI'),
                mallF:this.$t('profile.mallF'),
                myFu:this.$t('profile.myFu'),
            },
       
  name:"UserGuide",
      }
  }
}
</script>
<style lang="scss" scoped>
  .help{
    height: 100%;
  }
  .help-title{
      text-align: center;
  }
 
  .con{

    margin-left: 25px;
    margin-right: 25px;
  }
  
</style>



