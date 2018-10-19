
<template>
  <div>
        <mu-container>
        <div class="download-title">
          <mu-button class="download-title-back" flat @click="changeFatherB">返回</mu-button>
          <h3 class="download-title-text">我的下载</h3>
          <h4 class="download-title-manage">编辑</h4>
        </div>
        <hr/>
        <mu-tabs :value.sync="active1" class="download-banner" center>
            <mu-tab class="download-banner-vip">会员专享</mu-tab>
            <mu-tab class="download-banner-general">下载视频</mu-tab>
        </mu-tabs>
        <hr/>
        <div class="download-text" v-if="active1 === 0">
          <div class="download-text-title">
              <h4 class="download-text-title-vip">VIP视频</h4>
              <h4 class="download-text-title-more">更多</h4>
          </div>
              <ul>
                <li v-for="(item,index) in imgs" :key=index>
                 <img v-bind:src="item.imgurl">
                  <p>vip用户专享</p>
                </li>
              </ul>
            <router-view></router-view>
        </div>
        <div class="download-text" v-if="active1 === 1">
          <div class="download-text-title">
            <h4 class="download-text-title-vip">视频</h4>
            <h4 class="download-text-title-more">更多</h4>
          </div>
              <ul>
                <li v-for="(item,index) in imgs" :key=index>
                 <img :src="item.imgurl">
                  <p>普通用户可看视频</p>
                </li>
              </ul>
            <router-view></router-view>
        </div>
        </mu-container>
    </div>
</template>

<script>
export default {
  name:"profile",
  data(){
    return{
      active1:0,
      imgs:[
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
         {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../../public/img.1/profilemydownload.jpg')
        },
      ]
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
.download-title{
  margin-top: 0.4rem;
  height: 40px;
  line-height: 40px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #05c2a9;
  &-back{
  margin-left: 0.2rem;
  }
  &-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  }
  &-manage{
   position: absolute;
   top: 6%;
   left: 80%;
  }
}
.download-banner{
  background-color:#fafafa;
  height: 40px;
  width: 100%;
  &-vip,&-general{
  color: #000000;
  margin-right: 0.4rem;
  }
}

.download-text{
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: antiquewhite;
  p{
    text-align: center;
  }
  &-title{ 
    position: relative;
    height: 40px;
    &-vip{
       color: #00000f;
       margin-left: 0.2rem;
      float: left;
    }
    &-more{

      color: #000000;
     position: absolute;
     top: 0;
     right: 0.2rem;
      }
   }
    li{
    width: 40%;
    height: 100px;
    float: left;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
    img{
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      width:100%;
      height:80%;

    }
  }

}
 
</style>

