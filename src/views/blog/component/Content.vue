<template>
  <div id="content">
        <div id="head-portrait">
          <div id="head-img"></div>
          <span class="username">昵称</span>
          <div class="content-time">1小时前</div>
        </div>
        <div id="content-text">
          <p>内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容
            <a href="">全文</a>
          </p>
      </div>
      <div id="operation">
          <div class="send">
              <div class="zf"></div>
              161
          </div>
          <div class="send">
              <div class="pl"></div>
              61
          </div>
          <div class="send">
              <div class="xh"></div>
              2350
          </div>
      </div>
  </div>
</template>
<script>
        export default {

    }
</script>
<style scoped lang="scss">
    #content{
      height:400px;
    }
    #head-portrait{
      height:18%;
      & .username{
        padding: 10px 10px;
        color:rgb(0,183,225);
        font-size: 18px;
      }
      & .content-time{
          color: rgb(149,149,147);
          width: 36%;
          margin-left: 20%;
      }
    }
    #head-img {
        background: url("img/head.png");
        float: left;
        height: 68px;
        width: 66px;
        border: 1px solid #000;
        border-radius: 10px;
    }
    #content-text{
      height:52%;
      overflow: hidden;
    }
    #operation{
      height:14%;
      border-bottom: 1px solid #ccc;
        & .send{
            float: left;
            width: 33%;
            height:48px;
            line-height: 48px;
            font-size: 18px;
            color:rgb(149,149,147);;
            & .pl{
                background: url("img/pl.png") center no-repeat;
                background-size: 26px;
                float: left;
                margin-left: 16%;
                width: 46px;
                height:46px;

            }
            & .zf{
                background: url("img/zf.png") center no-repeat;
                background-size: 20px;
                float: left;
                margin-left: 16%;
                width: 46px;
                height:46px;
            }
            & .xh{
                background: url("img/xh.png") center no-repeat;
                background-size: 26px;
                float: left;
                margin-left: 16%;
                width: 46px;
                height:46px;
            }
        }
    }
</style>