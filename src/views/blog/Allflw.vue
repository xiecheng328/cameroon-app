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
            <div class="name-id">杂交水稻研究人</div>
            <div class="name-time">1小时前</div>
          </div>
        </div>
        <div class="text">
          <router-link to="/blog/passage">
            <span class="text_1">
              【河南夏邑借棚改之名强征千亩耕地 农业局称：土地权证发错了！】村里的一位老党员称，9月2日，乡政府组织村里开过一次村民代表大会，说的重点是棚户区改造的情况，当时乡党委书记董天成在会上明确表示，土地批文下来后才会征地。没想到会后第二天，就把耕地全部铲平了。
            </span>
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
                <router-link to="/forword" class="f-c">转发161</router-link>


              </div>
              <div>
                <img src="./component/img/pl.png" alt="" class="img_1">
                评论281
              </div>
              <div>
                <img src="./component/img/xh.png" alt="" class="img_1">
                点赞3390
              </div>
        </div>
      </li>
      <li>
        <div class="detail-content">
          <router-link to="/ownPage/weibos">
          <img src="../../assets/img/mood (2).jpg" alt="" class="head-por">
          </router-link>
          <div class="con-name">
            <div class="name-id">耕地人-小吴</div>
            <div class="name-time">1小时前</div>
          </div>
        </div>
        <div class="text">
          <span>
            12日，江夏区安山街农机推广服务中心在安山街普安村组织旋耕施肥播种机进行油菜机械直播演示活动，区农机办主任王永红、农机推广站站长李义平、农业推广站站长田仕本等领导参加此次活动，活动还吸引了来自不同街道的50多位农户及机手观摩学习
          </span>
        </div>
        <div class="image">
          <img src="../../assets/img/mood (4).jpg" alt="">
          <img src="../../assets/img/mood (5).jpg" alt="">
          <img src="../../assets/img/mood (6).jpg" alt="">
        </div>
        <div class="bottom-details">
          <div>
            <img src="./component/img/zf.png" alt="" class="img_1">
            转发161
          </div>
          <div>
            <img src="./component/img/pl.png" alt="" class="img_1">
            评论281
          </div>
          <div>
            <img src="./component/img/xh.png" alt="" class="img_1">
            点赞3390
          </div>
        </div>
      </li>
      <li>
        <div class="detail-content">
          <img src="../../assets/img/mood (3).jpg" alt="" class="head-por">
          <div class="con-name">
            <div class="name-id">卖农机的-weCreate</div>
            <div class="name-time">1小时前</div>
          </div>
        </div>
        <div class="text">
          <span>
            【河南夏邑借棚改之名强征千亩耕地 农业局称：土地权证发错了！】村里的一位老党员称，9月2日，乡政府组织村里开过一次村民代表大会，说的重点是棚户区改造的情况，当时乡党委书记董天成在会上明确表示，土地批文下来后才会征地。没想到会后第二天，就把耕地全部铲平了。
          </span>
        </div>
        <div class="image">
          <img src="../../assets/img/mood (1).jpg" alt="">
          <img src="../../assets/img/mood (2).jpg" alt="">
          <img src="../../assets/img/mood (3).jpg" alt="">
        </div>
        <div class="bottom-details">
          <div>
            <img src="./component/img/zf.png" alt="" class="img_1">
            转发161
          </div>
          <div>
            <img src="./component/img/pl.png" alt="" class="img_1">
            评论281
          </div>
          <div>
            <img src="./component/img/xh.png" alt="" class="img_1">
            点赞3390
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
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
