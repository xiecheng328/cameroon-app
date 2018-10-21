<template>
  <div class="Commonquestion">
     <mu-button class="Commonquestion-back" flat @click="changeFatherC()">返回</mu-button>
   
    <h3 class="Commonquestion-header">帮助与反馈</h3>
     <h4>1. 是否可以屏蔽未关注人消息？</h4>
     <h6>答：可以，在设置中的消息设置，可调整是否接受未关注人的消息</h6>
     <h4>2.账户余额退款渠道有哪些？</h4>
    <h6>目前的退款渠道是支付宝退款，请正确填写本人名下的支付宝账号，我司工作人员会在3-5个工作日内打款；银行卡退款渠道正在完善中，敬请期待。</h6>
     <h4>3.账户通过认证后有什么用？</h4>
      <h6>答：可以享受各种优惠和特权待遇，敬请期待</h6>
     <h4>4.认证账户的条件有哪些？</h4>
      <h6>答：在农业方面的权威或者是有自己独特的见解等</h6>
     <h4>5.每天可以发送多少个问题？</h4>
      <h6>答：不限次数。</h6>
      <h4>6.商品可以退吗？</h4>
      <h6>答：可以。可以联系客服或者在线取消订单。</h6>
    </div>
   
</template>


<script>
import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
export default {}
</script>
<style lang="scss" scoped>
.Commonquestion{

  &-header{
    margin-top: 0.4rem;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    background: #ffffff;
  }
 &-back{
   float: left;
   margin-left: 0.2rem;
   
 }
}

</style>
