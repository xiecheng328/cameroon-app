
<template>

  <div>
      <router-view v-show="isShow"  v-on:resetFatherp="resetF" ></router-view>
      <div v-show="!isShow" >
          <mu-container >
              <div class="download-title">
                  <mu-button class="download-title-back" flat @click="changeFatherB">返回</mu-button>
                  <h3 class="download-title-text">我的下载</h3>
                  <span class="download-title-manage" @click="ff2">编辑</span>
              </div>
              <hr/>
              <div class="download-text1">
                  <div class="download-text1-title1">
                      <h4 class="download-text1-title1-vip">VIP视频</h4>
                      <span class="download-text1-title1-more" @click="ff1">更多</span>
                  </div>
                  <ul>
                      <li v-for="(item,index) in imgs" :key=index>
                          <img :src="item.imgurl">
                              <p>vip用户专享</p>
                      </li>
                  </ul>

              </div>
              <hr/>
              <div class="download-text2">
                  <div class="download-text2-title2">
                      <h4 class="download-text2-titl2-video">视频</h4>
                      <span  class="download-text2-title2-more" @click="ff">更多</span>
                  </div>
                  <ul>
                      <li v-for="(item,index) in imgs" :key=index>
                          <img :src="item.imgurl">
                              <p>普通用户可看视频</p>
                      </li>
                  </ul>
              </div>
          </mu-container>

      </div>

  </div>
</template>

<script>

export default {
  name:"profile",
  data(){
    return{
        isShow:false,
      imgs:[
        {
          imgurl:require('./../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('./../../../../assets/img/profilemydownload.jpg')
        },
      ]
    };  
  },
  methods:{
    changeFatherB(){
      this.$emit('resetFatherp');
    },
      ff(){
          this.$router.push('/mydownload/video');
          this.isShow=!this.isShow;
      },
      ff1(){
          this.$router.push('/mydownload/vip');
          this.isShow=!this.isShow;
      },
      ff2(){
          this.$router.push('/mydownload/manage');
          this.isShow=!this.isShow;
      },
      resetF(){

          this.$router.push('/mydownload');
          this.isShow=!this.isShow;
      }
  },

}
</script>

<style lang="scss" scoped>
.download-title{
  margin-top: 0.4rem;
  height: 40px;
  line-height: 40px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
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
   left: 85%;
  }
}

.download-text1{
  width: 100%;
  height:300px;
  position: relative;
  &-title1{ 
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
      margin-top: 0.1rem;
    width: 40%;
    height: 100px;
    float: left;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
        margin-right: 0.2rem;
    img{
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      width:100%;
      height:80%;
    }
        p{
           padding-left: 1rem;

        }
  }
}
.download-text2{
  width: 100%;
  position: relative;
  &-title2{ 
    position: relative;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    height: 40px;
    &-video{
       color: #00000f;
       margin-left: 0.3rem;
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
        margin-right: 0.2rem;
    margin-bottom: 0.1rem;
    img{
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      width:100%;
      height:80%;
    }
        p{
            padding-left:1rem ;
        }
  }
}
 
</style>
