<template>
  <div id="per-wrapper">
    <div class="per-focus">关注</div>
    <!--连接关注界面-->
    <div class="per-focus">私信</div>
    <!--连接私信界面-->
  </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="scss">
  #per-wrapper{
    position: fixed;
    bottom: 0;
    height: 48px;
    width: 100%;
    background: #ffffff;
    & .per-focus{
      float: left;
      height: 48px;
      width: 50%;
      color:rgb(149,149,147);
      font-size: 16px;
      text-align: center;
      line-height: 48px;
    }
  }
</style>