<template>
  <div>
    <div class="identity-title">
          <mu-button class="identity-title-back" flat @click="changeFatherB">返回</mu-button>
          <h3 class="identity-title-text">VIP认证</h3>
    </div>
    <div class="identity-content">
      <div class="identity-content-user">
        <img class="identity-content-user-userimg" src="@/assets/img/identity-userimg.png" alt="">
        <h3 class="identity-content-user-username">UserName</h3>
      </div>
      <div class="identity-content-apply1">
        <h3 class="identity-content-apply1-title">认证成为大V:</h3>
        <button class="identity-content-apply1-content1">
          <h5>请求人工审核</h5>
          <span>（注：人工审核较慢且通过率较低，如果您非业界专业人士，
            请选择其他两种方式！）</span>
        </button>
      </div>
      <div class="identity-content-apply2">
        <h3 class="identity-content-apply2-title">免费成为VIP:</h3>
        <div class="identity-content-apply2-need">
          <p>经验值达到100，您已获得0，还需要100；</p>
          <p>粉丝数量达到100，您已获得0，还需要100；</p>
          <p>积分达到100，您已获得0，还需要100；</p>
        </div>
        <button class="identity-content-apply2-content2">成为VIP</button>
      </div>
      <div class="identity-content-apply3">
        <h3 class="identity-content-apply3-title">或者:</h3>
        <button class="identity-content-apply3-content3">
          <h5>Buy It</h5>
          <span>（$25/month）</span>
        </button>
      </div>
    </div>
  </div>     
</template>

<script>
export default {
    name: "profile",
  data () {
    return {
      active1: 0
    };
  },
  methods:{
    changeFatherB(){
      this.$emit('resetFatherp');
    }
  }
}
</script>

<style lang="scss">
    .identity-title{
      margin-top: 0.4rem;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      &-back{
        margin-left: 0.1rem;
      }
      &-text{
        text-align: center;
        height: 40px;
        line-height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    }
    .identity-content{
      &-user{
        border-bottom: 1px solid;
        padding-bottom:5px;
        position:relative;
        top: 0px;
        left: 0;
        width: 100%;
        &-userimg{
          margin-top: 20px;
          margin-left: 50px;
        }
        &-username{
          text-align: center;
          height: 60px;
          line-height: 60px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-20%, -30%)
        }
      }
      &-apply1{ 
        width: 325px;
        height: 40px;
        &-title{
          margin-top: 5px;
          margin-left: 10px;
        }
        &-content1{
          margin-top: 5px;
          margin-left: 25px;
        }
      }
      &-apply2{
        margin-top: 100px;
        width: 100%;
        &-title{
          margin-left: 10px;
        }
        &-need{
          padding-top: 5px;
          margin-top: 20px;
          margin-left: 25px;
          width: 300px;
          height: 100px;
          border: 1px solid;
          text-align: center;
          line-height: 30px;
        }
        &-content2{
          margin-top: 20px;
          margin-left: 140px;
        }
      }
      &-apply3{
        margin-top: 10px;
        margin-left: 10px;
        &-content3{
          margin-left: 110px;
        }
      }
    }
</style>
