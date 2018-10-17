<template>
  <div class="shop">
    <!-- <mu-container> -->
      <!-- 商城title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      <mu-button icon slot="left">
      <mu-icon ></mu-icon>
      </mu-button >
      <div class="shop-title">商城</div>
      <mu-button icon slot="right" id="shop-icon"></mu-button>
      </mu-appbar>
      <!-- 商城搜索框 -->
      <div class="shop-search">
        <input type="text" value="" placeholder="大家都在搜拖拉机">
      </div>
      <!-- 商城主页轮播图 -->
      <mu-carousel>
        <mu-carousel-item interval="5000">
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg4">
        </mu-carousel-item>
      </mu-carousel>
    <!-- </mu-container> -->

    <!-- 商城主页分类 -->
      <mu-grid-list class="gridlist-demo"  cell-height="40" :cols="5">
          <div v-for="(tile, index) in list" :key="index" class="shop-list" >
            <div :style="{background:tile.color}" class="img"><img :src="tile.image" ></div>
          <div>{{tile.shopName}}</div>
          </div>
      </mu-grid-list>

    <!-- 热门商品 -->
    <div class="hot-shop">
      <div class="hot-title"><p class="title">热门商品</p>
      <mu-button flat class="all-shop">全部></mu-button>
    </div>
      <div class="hot-sop-list">
          <div v-for="(tile, index) in hotList" :key="index">
            <div class="hot-img">
              <div class="img">
                <img :src="tile.img" >
              </div>
              <div>
                <p>{{tile.brandName}}</p>
                <p>￥{{tile.price}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>

     <!-- 品牌旗舰 -->
    <div class="brand-shop">
      <div class="hot-title"><p class="title"> 品牌旗舰</p>
      <mu-button flat class="all-shop">全部></mu-button>
    </div>
      <ul class="hot-nj">
        <li v-for="item in brandName" :key="item.id">
          {{item.brandName}}
        </li>
      </ul>
      <div class="hot-nj-img">
        <ul class="hot-nj-img-left">
          <li v-for="(item, index) in brandList" :key="index">
            <span>{{item.brandName}}</span>
            <img :src="item.img" alt="">
          </li>
        </ul>
        <div class="hot-nj-img-right">
          <span>东方红</span>
          <img src="./../../assets/farm-machinery2.png" alt=""></div>
      </div>
    </div>

    <!-- 拖拉机 -->
    <div class="tractors-shop">
      <div class="tractors-title">
        <p class="title"> 拖拉机</p><mu-button flat class="all-shop">全部></mu-button>
      </div>
        <ul class="tractors-list">
          <li v-for="(item, index) in tractors" :key="index">
            <span>{{item.brandName}}</span>
            <img :src="item.img" alt="">
          </li>
        </ul>
    </div>
    
     <!-- 播种机 -->
    <div class="tractors-shop">
      <div class="tractors-title">
        <p class="title">播种机</p>
        <mu-button flat class="all-shop">全部></mu-button>
      </div>
        <ul class="tractors-list">
          <li v-for="(item, index) in tractors" :key="index">
            <span>{{item.brandName}}</span>
            <img :src="item.img" alt="">
          </li>
        </ul>
    </div>
    <!-- 小麦收割机 -->
    <div class="tractors-shop">
      <div class="tractors-title">
        <p class="title">小麦收割机</p>
        <mu-button flat class="all-shop">全部></mu-button>
      </div>
        <ul class="tractors-list">
          <li v-for="(item, index) in tractors" :key="index">
            <span>{{item.brandName}}</span>
            <img :src="item.img" alt="">
          </li>
        </ul>
    </div>
    <!--  马铃薯/经济作物 -->
    <div class="potato-shop">
      <div class="hot-title">
        <p class="title"> 马铃薯/经济作物</p>
        <mu-button flat class="all-shop">全部></mu-button>
      </div>
      <ul class="potato">
        <li v-for="(item, index) in potatoMachinery" :key="index">
          <span>{{item.brandName}}</span>
          <img :src="item.img" alt="">
        </li>
      </ul>
      <div  class="potato-shop-list">
          <div v-for="(tile, index) in hotList" :key="index">
            <div class="potato-img">
              <div class="img">
                <img :src="tile.img" >
              </div>
              <div>
                <p>{{tile.machineryBrand}}</p>
                <p>{{tile.machineryTypeName}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>

    <!--  零部件 -->
    <div class="parts-shop">
      <div class="hot-title">
        <p class="title">零部件</p>
        <mu-button flat class="all-shop">全部></mu-button>
      </div>
      <div class="hot-sop-list">
          <div v-for="(tile, index) in parts" :key="index">
            <div class="hot-img">
              <div class="img">
                <img :src="tile.img" >
              </div>
              <div>
                <p>{{tile.machineryPartsName}}</p>
                <p>{{tile.price}}</p>
              </div>
            </div>
          </div>
          <div v-for="(tile, index) in parts" :key="index">
            <div class="hot-img">
              <div class="img">
                <img :src="tile.img" >
              </div>
              <div>
                <p>{{tile.machineryPartsName}}</p>
                <p>￥{{tile.price}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="allProduct">
     <mu-button full-width textColor="#2196F3" style="font-size:16px">查看全部产品</mu-button>
    </div>
  </div>
</template>
<script>
import carouselImg1 from './../../assets/banner.png';
import carouselImg2 from './../../assets/banner.png';
import carouselImg3 from './../../assets/banner.png';
import carouselImg4 from './../../assets/banner.png';
//分类图片
import menu01 from './../../assets/menu_01.png';
import menu02 from './../../assets/menu_02.png';
import menu03 from './../../assets/menu_03.png';
import menu04 from './../../assets/menu_04.png';
import menu05 from './../../assets/menu_05.png';
import menu06 from './../../assets/menu_06.png';
import menu07 from './../../assets/menu_07.png';
import menu08 from './../../assets/menu_08.png';
import menu09 from './../../assets/menu_09.png';
import menu10 from './../../assets/menu_10.png';
//引用axios
import axios from 'axios';
//数据模拟
import './mock/shopList.js';
import './mock/brand.js';
import './mock/tractors.js';
export default {
  data () {
    return {
      list: [{
        image: menu01,
        shopName:"拖拉机",
        color:'#FCBD1D',
      }, {
        image: menu02,
        shopName:"深松机",
        color:'#FF355B',
      }, {
        image: menu03,
        shopName:"采棉机",
        color:'#05C2A9'
      }, {
        image: menu04,
        shopName:"播种机",
        color:'#3292E1'
      }, {
        image: menu05,
        shopName:"旋耕机",
        color:'#05C2A9'
      }, {
        image: menu06,
        shopName:"玉米机",
        color:'#7146FB'
      }, {
        image: menu07,
        shopName:"植保机",
        color:'#FB0D69'
      }, {
        image: menu08,
        shopName:"排灌机",
        color:'#33B7D4'
      }, {
        image: menu09,
        shopName:"配件",
        color:'#2697F3'
      }, {
        image: menu10,
        shopName:"全部",
        color:'#2697F3'
      }],
      parts:[],
      hotList:[],
      brandName:[],
      tractors:[],
      potatoMachinery:[],
      brandList:[],
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  },
  mounted:function() {
    axios.get('msg').then(res=>{
        this.parts = res.data.machineryProuct;
    });
    axios.get('brandData').then(res=>{
        this.brandName = res.data.machineryProuct;
    });
    axios.get('tractorsData').then(res=>{
        this.tractors = res.data.machineryProuct;
        this.potatoMachinery = res.data.machineryProuct.slice(1,3);
        this.brandList = res.data.machineryProuct.slice(0,4);
        this.hotList = res.data.machineryProuct.slice(1,4);
    })
  }
}
</script>
<style lang="scss" scoped>
  .shop{
    height: 100%;
  }
  .shop-title{
      text-align: center;
  }
  .mu-icon-button{
    background: url(./../../assets/search-icon1.png) center no-repeat;
  }
  #shop-icon{
    background: url(./../../assets/shop-icon.png) center no-repeat;
  }
  .shop-search{
    input{
      margin-top: 0.1rem;
      width: 5.5rem;
      height: 46px;
      border-radius: 2rem;
      background:rgba(238,238,238,1);
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      outline: none;
    }
    text-align: center;
    width:100%;
    height:54px;
    margin-top: 56px;
    background: #ffffff;
  }
  .mu-carousel{
    height: 150px;
    img{
      height: 150px;
    }
  }
  .shop-list{
    // padding-top: 0.2rem;
    width: 1.25rem;
    height: 1.6rem;
    margin: 0.1rem auto;
    .img{
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
      margin: 0.1rem auto;
      img{
        margin-top: 0.25rem;
        width: 0.6rem;
        height: 0.6rem;
    }
    }
    div{
      width: 1.25rem;
      height: 0.3rem;
      text-align: center;
    }
  }
  .gridlist-demo{
    width: 100%;
    height: 4rem;
    background: #fff;
  }
  .hot-shop{
    margin-top: 0.25rem;
    width: 100%;
    height: 3.2rem;
    background-color: #fff;
  }
    .hot-title{
      width: 100%;
      height: 1rem;
      padding-left:0.2rem; 
      font-weight: 400;
      line-height: 1rem;
      font-size: 0.4rem;
      text-align: left;
      margin-bottom: 0.1rem;
      border-bottom: 1px solid rgba(221,221,221,1);
    }
    .hot-nj{
      width: 100%;
      height: 0.5rem;
      border-bottom:1px solid #ccc;
      margin-bottom: 0.1rem;
      display:flex;
      li{
        flex-grow: 1;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        border-right:1px solid #ccc;
        float: left;
      }
    }
    .hot-nj-img{
      width: 100%;
      height: 3rem;
      display:flex;
      .hot-nj-img-left{
        flex-grow:2;
        li{
          width: 50%;
          height: 1.5rem;
          float: left;
          border-bottom:1px solid #ccc;
          border-right:1px solid #ccc;
          span{
            margin-left: 0.2rem;
          }
          img{
            height: 1rem;
            margin-left: 0.2rem;
          }
        }
      }
      .hot-nj-img-right{
        flex-grow: 1;
        float:right;
        border-bottom:1px solid #ccc;
        img{
          width: 5rem;
        }
      }
    }
   
  .hot-sop-list{
    padding-left: 0.2rem;
    .hot-img{
      float: left;
      width: 2rem;
      height: 2rem;
      .img{
        width: 2rem;
        height: 1.2rem;
        height: 1.2rem;
        float: left;
        img{
        height: 1.2rem;
        float: left;
    }
      }
      
    }
  }
  .brand-shop{
    margin-top: 0.25rem;
    height: 5rem;
    background: #fff;
  }
  .tractors-shop{
    margin-top: 0.25rem;
    width: 100%;
    height: 5.4rem;
    background-color: #fff;
    .tractors-title{
      width: 100%;
      height: 1rem;
      padding-left:0.2rem; 
      font-weight: 400;
      line-height: 1rem;
      font-size: 0.4rem;
      text-align: left;
      margin-bottom: 0.1rem;
      border-bottom: 1px solid rgba(221,221,221,1);
    }
    .title{
      margin: 0;
      padding: 0;
      color: #2196F3;
    }
    .tractors-list{
      width: 100%;
      height: 4rem;
      li{
        float: left;
        width: 50%;
        height: 2rem;
        
        border-bottom: 1px solid #ccc;
        span{
            margin-left: 0.2rem;
          }
          img{
            height: 1.5rem;
            margin-left: 0.2rem;
          }
      }
      li:nth-child(2n+1){
        border-right: 1px solid #ccc;
      }
    }
  }
  .potato-shop{
    width: 100%;
    height: 5.4rem;
    margin-top: 0.25rem;
    background: #fff;
  }
  .potato{
    width: 100%;
    height: 2rem;
    li{
      float: left;
      width: 50%;
      height: 2rem;
      border-bottom: 1px solid #ccc;
      img{
        height: 1.5rem;
        margin-left: 0.2rem;
      }
      span{
        margin-left: 0.2rem;
      }
    }
    li:nth-child(1){
      border-right: 1px solid #ccc;
    }
  }.allProduct{
    width:100%;
    height:0.5rem;
    text-align:center;
  }
  .potato-shop-list{
    .potato-img{
      float: left;
      width: 2rem;
      height: 2rem;
      .img{
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        img{
          height: 1rem
        }
      }
      p{
        margin-left: 0.2rem;
      }
    }
  }
  .parts-shop{
    width: 100%;
    height: 5.4rem;
    margin-top: 0.25rem;
    background: #fff;
  }
  .title{
      float: left;
      margin: 0;
      padding: 0;
      color: #2196F3;
  }
  .all-shop{
    margin-top: 0.2rem;
    float: right;
    font-size: 16px;
    
    letter-spacing: 3px;
  }
</style>



