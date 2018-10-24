<template>
<div>
  
    <div class="help">
      <!-- 用户使用指南title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      
      <div class="help-title">{{userG}}</div>
      <mu-button  icon slot="right" ></mu-button>
      </mu-appbar>
      <p></p>
       
  </div>
  <div class="con">
    <div   style="color:red;margin-top:1rem">{{cirC}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> {{introd}}</span> 

             <div   style="color:red;margin-top:1.5rem">{{infotM}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> {{ infotFI }}</span> 

             <div   style="color:red;margin-top:1.5rem">{{mall}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> {{ mallF }}</span> 

             <div   style="color:red;margin-top:1.5rem">{{mine}}</div>
             <div  style="color:red;margin-top:20px"></div>
            <span>{{ myFu }}</span> 
           </div>
                
          
          
          
</div>

            
</template>
<script>
export default {
   data(){
      return{ 
            pageMessage1:{
                userG:this.$t('profile.userGuide'),
            },
             pageMessage2:{
                cirC:this.$t('profile.cirC'),
            },
             pageMessage3:{
                infotM:this.$t('profile.infotM'),
            },
             pageMessage4:{
                mall:this.$t('profile.mall'),
            },
             pageMessage5:{
                mine:this.$t('profile.mine'),
            },
             pageMessage6:{
                introd:this.$t('profile.introd'),
            },
             pageMessage7:{
                infotFI:this.$t('profile.infotFI'),
            },
             pageMessage8:{
                mallF:this.$t('profile.mallF'),
            },
             pageMessage9:{
                myFu:this.$t('profile.myFu'),
            },
        
     
   

   

  name:"UserGuide"

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



