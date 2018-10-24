<template>
<div>
  
    <div class="help">
      <!-- 用户反馈窗口title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      
      <div class="help-title">{{userFeedback}}</div>
      <mu-button  icon slot="right" ></mu-button>
      </mu-appbar>
       
  </div>
  <div class="con">
    <div   style="color:red;margin-top:1rem">{{pleaseSmyFu}}</div>
            <div>
                <select v-model="selected">
                    <option disabled value=""></option>
                    <option>{{pleaseC}}</option>
                    <option>{{cirC}}</option>
                    <option>{{infotM}}</option>
                    <option>{{mall}}</option>
                    <option>{{mine}}</option>
                </select>
              
           </div>
                       <div  style="color:red;margin-top:20px">{{feedCon}}</div>
            <textarea v-model="message" placeholder="{{pleaseEditH}}~"></textarea>
            

               <div  style="color:red;margin-top:20px">{{pleaseLP}}</div>
           <input v-model="msg" />

              <div  style="color:red;margin-top:20px">{{pleaseLEM}}</div>
           <input v-model="msg2" />
<br>
           </div>
          
           <button class="button-help">{{clickSub}}</button>
          
</div>

            
</template>
<script>
export default {
   data(){
      return{
        message:"",
         checked: true,
            checkedNames: ['John'],
            picked: 'One',
            selected: '{{pleaseC}}',
            selectedMulit:['B','C'],
            selectedAutoSign: 'A',
            msg:"{{pleaseEpPh}}",
            msg2:"{{pleaseEMail}}",  
            pageMessage1:{
                userFeedW:this.$t('profile.userFeedback'),
            },
             pageMessage2:{
                pleaseS:this.$t('profile.pleaseS'),
            },
             pageMessage3:{
                pleaseC:this.$t('profile.pleaseC'),
            },
             pageMessage4:{
                cirC:this.$t('profile.cirC'),
            },
             pageMessage5:{
                infotM:this.$t('profile.infotM'),
            },
             pageMessage6:{
                mall:this.$t('profile.mall'),
            },
             pageMessage7:{
                mine:this.$t('profile.mine'),
            },
             pageMessage8:{
                feedCon:this.$t('profile.feedCon'),
            },
             pageMessage9:{
                pleaseLP:this.$t('profile.pleaseLP'),
            },
             pageMessage10:{
                pleaseLEM:this.$t('profile.pleaseLEM'),
            },
             pageMessage11:{
                clickSub:this.$t('profile.clickSub'),
            },
             pageMessage12:{
                pleaseEpPh:this.$t('profile.pleaseEpPh'),
            },
             pageMessage13:{
                pleaseEMail:this.$t('profile.pleaseEMail'),
            },
        imgList:[
        
        ],
  name:"UserFeedback",
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
  .button-help{
    width: 200px;
    height: 50px;
    float: left;
    margin-top: 75px;
    margin-left: 90px;
    background-color:blue;
    color: #ccc;
  }
  .con{
    margin-left: 25px;
  }
  
</style>



