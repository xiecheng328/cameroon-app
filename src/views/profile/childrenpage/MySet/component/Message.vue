<template>
  <div class="Message">
    
    <mu-button class="Message-back" flat @click="changeFatherC()">{{pageMessage.return}}</mu-button>
    <h3 class="Message-header">{{pageMessage.messageset}}</h3>
   
    <div class="Message">
      <div class="Message-first">
       <li><h5>{{pageMessage.InteractiveReminding}}</h5></li> 
       <li><h5>{{pageMessage.Allowcomments}}</h5>
       <select class="selectfirst">

  <option value="volvo"><a href="">{{pageMessage.allPerson}}</a></option>
  <option value="saab"><a href="">{{pageMessage.PeopleIcareabout}}</a></option>
  <option value="opel"><a href="">{{pageMessage. Close}}</a></option>
 
</select>
       </li> 
       <li><h5>{{pageMessage.acceptTheNews}}</h5>
       <select class="selectfirst">
  <option value="volvo"><a href="">{{pageMessage.allPerson}}</a></option>
  <option value="saab"><a href="">{{pageMessage.PeopleIcareabout}}</a></option>
  <option value="opel"><a href="">{{pageMessage.Close}}</a></option>
 
</select>
       </li> 
       <li><h5>{{pageMessage.Privateletter}}</h5></li> 
        <li><h5>{{pageMessage.Unattendednews}} </h5>

          <select class="selectsecond">
  <option value="volvo"><a href="">{{pageMessage.Receive}}</a></option>
  
  <option value="opel"><a href="">{{pageMessage.notReceive}}</a></option>
 
</select>
        </li> 

        
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
    return {
      pageMessage:{
        return:this.$t('profile.return'),
        messageset:this.$t('profile.messageset'),
        InteractiveReminding:this.$t('profile.InteractiveReminding'),
        Allowcomments:this.$t('profile.Allowcomments'),
        allPerson:this.$t('profile.allPerson'),
        PeopleIcareabout:this.$t('profile.PeopleIcareabout'),
        Close:this.$t('profile.Close'),
        acceptTheNews:this.$t('profile.acceptTheNews'),
       Privateletter:this.$t('profile.Privateletter'),
        Unattendednews:this.$t('profile.Unattendednews'),
        Receive:this.$t('profile.Receive'),
        notReceive:this.$t('profile.notReceive'),
        
      }
    }
  },
  
   methods: {
      changeFatherC() {
                 this.$emit('resetFatherp');

          },
   }
  

   
   
}
</script>
<style lang="scss" scoped>
 select{
                //清除select的边框样式
                border: none;
                //清除select聚焦时候的边框颜色
                outline: none;
               
               
            }
.Message{

  &-header{
    margin-top: 0.4rem;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    background: #ffffff;
    margin-right: 110px;
   
  }
 &-back{
   float: left;
   margin-left: 0.2rem;
   
 }
}
.Message{
  
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
    &:nth-child(1){
        background: #B0C4DE;
        
        
    } &:nth-child(4){
        background: #B0C4DE;
        
    }
    img{
      width: 24px;
      margin-left: 10px;
      margin-right: 10px;
      padding-top: 14px;
      padding-bottom: 14px;
    }
  }
    .selectfirst{
      position: relative;
      top: -50px;
      left: 200px;
      
     }
    .selectsecond{
      position: relative;
      top:-50px;
      left: 200px;
     }
}
</style>
