<template>
<div id="withme">
 <div id='messageTitle'>
  <span style="margin-left: .1rem" @click="back" ><-</span>
  <h5>@Je</h5>
 </div>
 <div class="titlehead">
  <img class="messagehead" src="../../assets/img/messagesHead.png" alt="">
   <ul>
    <li>
     Spécialiste de riz
    </li>
    <li>
     5-22 16:40
    </li>
   </ul>
 </div>
 <p>//@Spécialiste de riz ：Le message de transfert</p>
  <div class="messagecontain">
   <img class="messageconent" src="../../assets/img/messageConent.png" alt="">
   <div class="containtext">
   <span>@Expert de maïs</span>
   <div class="containtext">Le maïs à 40 cm, pour le maïs est appliquée, de fumier, de la promotion de la croissance

   </div>
   </div>
 </div>
 <div class="titlehead">
  <img class="messagehead" src="../../assets/img/messagesHead.png" alt="">
  <ul>
   <li>
    Expert de soja
   </li>
   <li>
    5-22 16:40
   </li>
  </ul>
 </div>
 <p>Commentaires@Spécialiste de riz</p>
 <div class="messagecontain">
  <img class="messageconent" src="../../assets/img/messageConent.png" alt="">
  <div class="containtext">
   <span>@Expert de soja</span>
   <div class="containtext">
    La plantation de riz doit d'abord, puis à traiter le lit de semences de riz paddy, après traitement de stérilisation et à la désinfection de graine de nouveau, après transplantation de semis de riz, on a à faire, c'est de combler les lacunes et de consultation de l'irrigation, de suivi et d'engrais, de travail et de LIRIOMYZA de feuilles de prévention.
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
 margin-top: 0.01rem;
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
  margin-right: .1rem;
  height: 1.3rem;
  text-overflow: ellipsis;
  overflow: hidden;
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