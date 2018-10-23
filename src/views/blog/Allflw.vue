<template>
  <div class="detail">
    <!--<router-link to="/ownPage/weibos">个人主页</router-link>-->
    <ul>
      <li>
        <div class="detail-content">
          <router-link to="/ownPage/weibos">
            <img src="../../assets/img/mood (1).jpg" alt="" class="head-por">
          </router-link>
          <div class="con-name">
            <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
            <div class="name-time">{{pageMessage.nHoursAgo}}</div>
          </div>
        </div>
        <div class="text">
          <router-link to="/blog/passage">
            <span class="text_1">{{pageMessage.text}}</span>
          </router-link>
        </div>
        <div class="image">
          <img src="../../assets/img/mood (1).jpg" alt="">
          <img src="../../assets/img/mood (2).jpg" alt="">
          <img src="../../assets/img/mood (3).jpg" alt="">
        </div>
        <div class="bottom-details">
              <div>
                <img src="./component/img/zf.png" alt="" class="img_1">
                <router-link to="/forword" class="f-c">{{pageMessage.forward}}161</router-link>


              </div>
              <div>
                <img src="./component/img/pl.png" alt="" class="img_1">
                {{pageMessage.comment}}281
              </div>
              <div>
                <img src="./component/img/xh.png" alt="" class="img_1">
                {{pageMessage.like}}3390
              </div>
        </div>
      </li>
      <li>
        <div class="detail-content">
          <router-link to="/ownPage/weibos">
          <img src="../../assets/img/mood (2).jpg" alt="" class="head-por">
          </router-link>
          <div class="con-name">
            <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
            <div class="name-time">{{pageMessage.nHoursAgo}}</div>
          </div>
        </div>
        <div class="text">
          <span>{{pageMessage.text}}</span>
        </div>
        <div class="image">
          <img src="../../assets/img/mood (4).jpg" alt="">
          <img src="../../assets/img/mood (5).jpg" alt="">
          <img src="../../assets/img/mood (6).jpg" alt="">
        </div>
        <div class="bottom-details">
          <div>
            <img src="./component/img/zf.png" alt="" class="img_1">
            {{pageMessage.forward}}161
          </div>
          <div>
            <img src="./component/img/pl.png" alt="" class="img_1">
            {{pageMessage.comment}}281
          </div>
          <div>
            <img src="./component/img/xh.png" alt="" class="img_1">
            {{pageMessage.like}}3390
          </div>
        </div>
      </li>
      <li>
        <div class="detail-content">
          <img src="../../assets/img/mood (3).jpg" alt="" class="head-por">
          <div class="con-name">
            <div class="name-id">{{pageMessage.hybridRiceResearcher}}</div>
            <div class="name-time">{{pageMessage.nHoursAgo}}</div>
          </div>
        </div>
        <div class="text">
          <span>{{pageMessage.text}}</span>
        </div>
        <div class="image">
          <img src="../../assets/img/mood (1).jpg" alt="">
          <img src="../../assets/img/mood (2).jpg" alt="">
          <img src="../../assets/img/mood (3).jpg" alt="">
        </div>
        <div class="bottom-details">
          <div>
            <img src="./component/img/zf.png" alt="" class="img_1">
            {{pageMessage.forward}}161
          </div>
          <div>
            <img src="./component/img/pl.png" alt="" class="img_1">
            {{pageMessage.comment}}281
          </div>
          <div>
            <img src="./component/img/xh.png" alt="" class="img_1">
            {{pageMessage.like}}3390
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                pageMessage:{
                    hybridRiceResearcher:this.$t('blog.hybridRiceResearcher'),
                    nHoursAgo:this.$t('blog.nHoursAgo'),
                    forward:this.$t('blog.forward'),
                    comment:this.$t('blog.comment'),
                    like:this.$t('blog.like'),
                    text:this.$t('blog.text'),

                }
            }
        },
    }
</script>

<style lang="scss">
  .detail{
    margin-top: .2rem;
  }
  .detail-content{
    height: 78px;
    img{
      float:left;
    }
    & .con-name{
      width: 326px;
      font-size: 20px;
      color: #2196f3;
      & .name-time{
        font-size: 16px;
        color:rgb(149,149,147);
      }
    }
  }
  .detail li{
    width: 100%;
    padding-left: .4rem;
    padding-right: .4rem;
    margin-top: .2rem;
    background: white;
  }
  .head-por{
    width: 1.3rem;
    height: 1.3rem;
    margin-right: .2rem;
  }
  .name{
    display: inline-block;
  }
  .name .name-id{
    color: #2196f3;
    font-size: .5rem;
  }
  .image{
    width: 100%;
    border-bottom: 1px solid rgb(149,149,147);
    padding-bottom: .2rem;
  }
  .image img{
    width: 1.7rem;
    height: 1.7rem;
    margin-right: .16rem;
  }
  .mu-appbar-left{
    margin: 0 auto;
  }
  .bottom-details{
    height: .8rem;
    display: flex;
  }
  .bottom-details div{
    flex: 1;
    text-align: center;
    line-height: .8rem;
    display: inline;
    position: relative;
  }

  .img_1{
    /*float: left;*/
    display: inline;
    width: .4rem;
    height: .4rem;
    line-height: .8rem;
    /*top: .1rem;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    position: absolute;
    top:50%;
    left: 10%;
    transform: translate(-50%,-50%);
  }
  .text_1{
    color: #000;
  }
  .f-c{
    color:black;
  }
</style>
