<template>
    <div>
         <mu-container>
        <div class="download-title">
             <mu-button class="download-title-back" flat @click="changeFatherB">返回</mu-button>
             <h3 class="download-title-text">VIP视频</h3>
        </div>
        <hr/>
        <div class="vip-input">
            <input type="text" placeholder="搜索自己喜欢的视频">
            <button>搜索</button>
        </div>
        <div class="vip-handpick">
            <div class="vip-handpick-banner">
                <h5>——·精选视频·——</h5>
            </div>
                <ul>
                    <li v-for="(item,index) in vip" :key=index>
                        <img :src="item.imgurl">
                        <p>{{item.value}}</p>
                    </li>
                </ul>
        </div>
        <div class="vip-recommend">
            <h4>小编推荐</h4>
            <select v-model="selected" center>
                <option v-for="option in options">{{option.text}}</option>
            </select>
            <button>搜索</button>
        </div>
        <div class="vip-content">
            <ul>
                <li v-for="(item,index) in imgs" :key=index>
                 <img :src="item.imgurl">
                  <p>vip用户专享</p>
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
        vip:[
             {
                imgurl:require('../../../../../assets/img/profilemydownloadvip.jpg'),
                value:'好用的农机'
             },
             {
                imgurl:require('../../../../../assets/img/profilemydownloadvip.jpg'),
                value:'如何使用农机'
             },
             {
                imgurl:require('../../../../../assets/img/profilemydownloadvip.jpg'),
                value:'为什么使用农机'    
            }        
        ],
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
      ],
      options:[
          {
              text:'农机',
              value:'0',
          },
           {
              text:'土豆',
              value:'1',
          },
           {
              text:'玉米',
              value:'2',
          },
           {
              text:'农机',
              value:'3',
          },
      ],
      selected:'农机'
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
  &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
  }
}

.vip-input{
    width: 100%;
    height: 50px;
    input{
        width:52%;
        height: 30px;
        margin-top: 0.1rem;
        margin-left: 1rem;
    }
    button{
        width: 60px;
        height: 30px;
        margin-top: 0.1rem;
        margin-left: 0.3rem;
    }
}

.vip-content{
    width: 100%;
    height: 100%;
    margin-top: 0.2rem;
    li{
        width: 40%;
        float: left;
        margin-left: 0.4rem;
    }
}

.vip-handpick{
    width: 100%;
    height: 130px;
    &-banner{
        width: 100%;
        height: 20px;
        h5{
            text-align: center;
        }

    }
    li{
         width: 30%;
         height: 100px;
         float: left;
         margin: 0.1rem;
        img{
        width: 100px;
        height: 80px;
        }
     }
}

.vip-recommend{
    width: 100%;
    height: 50px;
    h4,select,button{
        float: left;
    }
    select{
        width: 60%;
        height: 30px;
        margin-left: 0.3rem;
    }
    button{
        width: 60px;
        // margin-left: 0.3rem;
    }
}
    .vip-content{
        width: 100%;
        li{
            margin-left: 0.3rem;
            float: left;
            width: 45%;
            img{
                width: 150px;
                height: 80px;
            }
        }
    }
</style>


