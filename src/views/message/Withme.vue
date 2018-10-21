<template>
<div id="withme">
 <div id='messageTitle'>
  <span style="margin-left: .1rem" @click="back" ><-</span>
  <h5>@我</h5>
 </div>
 <div class="titlehead">
  <img class="messagehead" src="../../assets/img/messagesHead.png" alt="">
   <ul>
    <li>
     昵称1
    </li>
    <li>
     5-22 16:40
    </li>
   </ul>
 </div>
 <p>//@昵称1 ：转发消息</p>
  <div class="messagecontain">
   <img class="messageconent" src="../../assets/img/messageConent.png" alt="">
   <div class="containtext">
   <span>@昵称2</span>
   <div class="containtext">内容内容内容内容内容内容内容内容
  内容内容内容内容内容内容内容内容
  内容
   </div>
   </div>
 </div>
 <div class="titlehead">
  <img class="messagehead" src="../../assets/img/messagesHead.png" alt="">
  <ul>
   <li>
    昵称3
   </li>
   <li>
    5-22 16:40
   </li>
  </ul>
 </div>
 <p>评论内容@昵称1</p>
 <div class="messagecontain">
  <img class="messageconent" src="../../assets/img/messageConent.png" alt="">
  <div class="containtext">
   <span>@昵称3</span>
   <div class="containtext">内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容
    内容
   </div>
  </div>
 </div>
</div>
</template>
<script>
 export default {
     methods:{
         back(){
              this.$router.push('/message');
              this.$emit('returnM')
         }
     }

 }

</script>
<style scoped>
 h5{
  float: right;
  margin-right: 3.1rem;

 }
.messagehead{
 width:.7rem!important;
 height: .7rem!important;
}
 .messageconent{
  width: 1.2rem;
  height: 1.2rem;
 }
 h6{
  display: inline;
  margin: 0 10rem;
 }
 ul{
  float: right;

 }
 .titlehead{
  display: flex;
  flex-direction: row;
 }
 .messagecontain{
  display: flex;
  flex-direction: row;
  background-color: #f2f2f5;
  padding-bottom: .3rem;
  border-bottom: .01rem solid #ccc;
  margin-bottom: .5rem;
  padding-top: .2rem;

 }
 .containtext{
  display: flex;
  flex-direction: column;
  margin-left: .2rem;
 }
 #withme{
  margin:0 .1rem;
 }
 #messageTitle{
  width: 100%;
  background-color: #0086b3;
  margin-bottom: .2rem;
 }
</style>