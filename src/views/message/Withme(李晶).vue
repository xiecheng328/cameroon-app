<template>
<div>
 <div>
  <span><-</span>
  <h6>@我</h6>
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
  内容内容内
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
    内容内容内
   </div>
  </div>
 </div>
</div>
</template>
<script>

</script>
<style scoped>
.messagehead{
 width:3.5rem;
 height: 3.5rem;
}
 .messageconent{
  width: 6rem;
  height: 6rem;
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
  padding-bottom: 1.2rem;
  border-bottom: .1rem solid #ccc;
  margin-bottom: .5rem;

 }
 .containtext{
  display: flex;
  flex-direction: column;
  margin-left: .5rem;
 }
</style>