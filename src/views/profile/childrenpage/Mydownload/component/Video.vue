<template>
    <div>
         <mu-container>
        <div class="download-title">
             <mu-button class="download-title-back" flat @click="changeFatherB">返回</mu-button>
             <h3 class="download-title-text">视频</h3>
        </div>
        <hr/>
        <div class="video-input">
            <input type="text" placeholder="搜索自己喜欢的视频">
            <button>搜索</button>
        </div>
        
        <div class="video-content">
            <ul>
                <li v-for="(item,index) in imgs" :key=index>
                 <img :src="item.imgurl">
                  <p>普通和VIP用户可看视频</p>
                </li>
            </ul>

        </div>
        
        </mu-container>
    </div>
</template>

<script>
export default {
  name:"profile",
  data(){
    return{
         imgs:[
        {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
         {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
         {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
         {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
         {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
         {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
        {
          imgurl:require('../../../../../assets/img/profilemydownload.jpg')
        },
      ]
    };  
  },
  methods:{
    changeFatherB(){
      this.$emit('resetFatherp');
    }
  },
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.download-title{
  margin-top: 0.4rem;
  height: 40px;
  line-height: 40px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  // background-color: #05c2a9;
  &-back{
  margin-left: 0.2rem;
  }
  &-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  }
  &-father{
   position: absolute;
   top: 6%;
   left: 85%;
  }
}

.video-input{
    width: 100%;
    height: 50px;
    input{
        width:65%;
        height: 30px;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        float: left;
    }
    button{
        width:20%;
        height: 30px;
        margin-top: 0.2rem;
        margin-left: 0.6rem;
        float: left;
    }
}

.video-content{
    width: 100%;
    height: 100%;
    margin-top: 0.1rem;
    p{
        text-align: center;
    }
    li{
        padding: 0;
        margin-top: 0.1rem;
        width: 40%;
        height: 180px;
        float: left;
        margin-left: 0.2rem;
        margin-right: 0.4rem;
        margin-bottom: 0.1rem;
    img{
      margin-left: 0.2rem;
      margin-right: 0.2rem;
      width:90%;
      height:80%;
    }
  }
}
</style>


