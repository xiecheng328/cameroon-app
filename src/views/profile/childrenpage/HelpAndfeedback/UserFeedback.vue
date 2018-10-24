<template>
<div>
  
    <div class="help">
      <!-- 用户反馈窗口title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      
      <div class="help-title">{{iserFeedback. userFeedback}}</div>
      <mu-button  icon slot="right" ></mu-button>
      </mu-appbar>
       
  </div>
  <div class="con">
    <div   style="color:red;margin-top:1rem">{{iserFeedback. pleaseSmyFu}}</div>
            <div>
                <select v-model="selected">
                    <option disabled value=""></option>
                    <option>{{iserFeedback. pleaseC}}</option>
                    <option>{{iserFeedback. cirC}}</option>
                    <option>{{iserFeedback. infotM}}</option>
                    <option>{{iserFeedback. mall}}</option>
                    <option>{{iserFeedback. mine}}</option>
                </select>
              
           </div>
                       <div  style="color:red;margin-top:20px">{{iserFeedback. feedCon}}</div>
            <textarea v-model="message" placeholder="{{iserFeedback. pleaseEditH}}~"></textarea>
            

               <div  style="color:red;margin-top:20px">{{iserFeedback. pleaseLP}}</div>
           <input v-model="msg" />

              <div  style="color:red;margin-top:20px">{{iserFeedback. pleaseLEM}}</div>
           <input v-model="msg2" />
<br>
           </div>
          
           <button class="button-help">{{iserFeedback. clickSub}}</button>
          
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
            selected: '{{iserFeedback.pleaseC}}',
            selectedMulit:['B','C'],
            selectedAutoSign: 'A',
            msg:"{{iserFeedback.pleaseEpPh}}",
            msg2:"{{iserFeedback.pleaseEMail}}",  
            iserFeedback:{
                userFeedW:this.$t('profile.userFeedback'),
                 pleaseS:this.$t('profile.pleaseS'),
                 pleaseC:this.$t('profile.pleaseC'),
                 cirC:this.$t('profile.cirC'),
                 infotM:this.$t('profile.infotM'),
                 mall:this.$t('profile.mall'),
                 mine:this.$t('profile.mine'),
                 feedCon:this.$t('profile.feedCon'),
                 pleaseLP:this.$t('profile.pleaseLP'),
                 pleaseLEM:this.$t('profile.pleaseLEM'),
                 clickSub:this.$t('profile.clickSub'),
                 pleaseEpPh:this.$t('profile.pleaseEpPh'),
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



