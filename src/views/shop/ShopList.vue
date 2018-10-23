<template>
    <!-- 测试mockjs -->
    <!-- <ul>
      <li v-for="(item, key) in data">{{item}}</li>
    </ul> -->
    <mu-container>
    <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      <mu-button icon slot="left" @click="goLeft()">
      <mu-icon ></mu-icon>
      </mu-button >
      <div class="shop-title">整机产品</div>
    </mu-appbar>
    <div class="search-listN-bg">
      <div class="search-circle" :style="'display:'+(searchText.length?'none':'block')"></div>
      <input class="search" type="text" @keyup="searchInput()" v-model="searchText" placeholder="输入企业名称/品牌/型号"/>
    </div>
    
    <!-- search nav -->
    <div class="search-banner">
      <ul class="search-banner search-banner-ul clearfix">
        <li :class="{'check-style':item.active}" @click="selectStyle (item, key)" v-for="(item, key) in items" :key="key">
          <span :class="{'style-color':item.active}">{{item.select}}</span>
          <span :class="{'top-jiantou':item.active}"></span>
        </li>
      </ul>
    </div>
    <!-- list things -->
    <div class="list-sth">
      <ul class="product-list-bg clearfix">
          <li class="clearFloat clearfix" v-for="(item, key) in data" :key="key">
            <div class="product-left left">
                <a >
                  <!-- http://img.nongji360.com/n/zyd/product/2016/08/15/093915939192_180x135.jpg -->
                  <img class="product-image" :src="item.img"  @click="goToDetail()">
                </a>
            </div>
            <div class="product-right right">
              <!-- 部件名称 时风欧II发动机-->
              <div class="name-of-parts">
                <a >{{item.brandName}}</a>
              </div>
              <!-- 企业名称 山东时风-->
              <p class="product-right-tit">
                <a >{{item.machineryTypeName}}</a>
              </p>
              <!-- 关注度&&加入购物车 -->
              <div class="news-add clearfix">
                <p class="degree">
                  <a>关注度:{{item.price}}</a>
                </p>
                <button class="news-add-btn" @click="addShopCar()">加入购物车</button>
              </div>
            </div>
          </li>
        </ul>
    <!-- 遮罩层 -->
      <div class="cover" :style="'display:'+(nIndex!='-1'?'block':'none')" @click="onClick()">
        <!-- 店铺 -->
          <div class="product-store product-same" :style="'display:'+(nIndex=='0'?'block':'none')">
            <ul>
                <li><a href="" class="">全部</a></li>
                <li><a href="" class="">整机店</a></li>
                <li><a href="" class="same-color">部件店</a></li>
                <li><a href="" class="">经销店</a></li>
            </ul>
          </div>
        <!-- 类别 -->
          <div class="category-inner-cont" :style="'display:'+(nIndex=='1'?'block':'none')">
            <div class="category-cont-1" data-type="cate_id2" data-value="466">
              <div class="category-cont-1-title">动力系统</div>
              <ul class="clearfix">
                <a href="">
                <li class="left col-xs-4" data-type="cate_id3" data-value="593">
                  <div class="category-image" style="height: 100px;">
                      <img src="http://img2.nongji360.com/a/mixed/2017/0526/224731732739.png">
                  </div>
                  <div class="category-cont-2-title">单缸机</div>
                </li>
                </a>
              </ul>
            </div>
          </div>
        <!-- 品牌 -->
          <div class="product-brand-bg product-same" :style="'display:'+(nIndex=='2'?'block':'none')">
              <h2><span>热销</span>品牌:</h2>
              <ul class="product-brand clearFloat clearfix">
                <li>
                    <a href="" data-b="3">
                        <span><img src="http://img.nongji360.com/a/brand/brand_3.jpg" alt=""></span>
                        <div>东方红</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="2952">
                        <span><img src="http://img.nongji360.com/a/brand/2016/1212/152434764088.jpg" alt=""></span>
                        <div>星光</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="1095">
                        <span><img src="http://img.nongji360.com/a/brand/brand_1095.jpg" alt=""></span>
                        <div>五征</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="374">
                        <span><img src="http://img.nongji360.com/a/brand/2016/0718/104104394724.jpg" alt=""></span>
                        <div>悍沃</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="2">
                        <span><img src="http://img.nongji360.com/a/brand/brand_2.jpg" alt=""></span>
                        <div>谷神</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="1456">
                        <span><img src="http://img.nongji360.com/a/brand/2017/0205/154916752884.jpg" alt=""></span>
                        <div>耕王</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="1240">
                        <span><img src="http://img.nongji360.com/a/brand/brand_1240.jpg" alt=""></span>
                        <div>勇猛</div>
                    </a>
                </li>
                <li>
                    <a href="" data-b="1476">
                        <span><img src="http://img.nongji360.com/a/brand/brand_1476.jpg" alt=""></span>
                        <div>约翰迪尔</div>
                    </a>
                </li>
              </ul>

              <div class="brand_list clearfix">
                <div id="char_nav_A" class="letter_title"><span>A</span></div>
                <div class="brand_box clearfix">
                        <ul class="clearfix">
                          <li mid="8" data-b="1633">
                            <a href="">
                              <span class="brand_name">奥威特</span>
                            </a>
                          </li>
                          <li mid="8" data-b="1438">
                            <a href="">
                              <span class="brand_name">爱吉斯海珠牌</span>
                            </a>
                          </li>
                          <li mid="8" data-b="2241">
                            <a href="">
                                <span class="brand_name">阿波斯</span>
                            </a>
                          </li>
                          <li mid="8" data-b="2527">
                            <a href="">
                                <span class="brand_name">奥华</span>
                            </a>
                          </li>
                          <li mid="8" data-b="2528">
                            <a href="">
                                <span class="brand_name">阿尔法</span>
                            </a>
                          </li>
                          <li mid="8" data-b="2740">
                            <a href="">
                                <span class="brand_name">爱司伯</span>
                            </a>
                          </li>
                          <li mid="8" data-b="2743">
                            <a href="">
                                <span class="brand_name">艾力特</span>
                            </a>
                          </li>
                          <li mid="8" data-b="4652">
                            <a href="">
                                <span class="brand_name">澳科兴</span>
                            </a>
                          </li>
                          <li mid="8" data-b="4731">
                            <a href="=">
                                <span class="brand_name">艾特尔</span>
                            </a>
                          </li>
                          <li mid="8" data-b="5026">
                            <a href="">
                                <span class="brand_name">奥维</span>
                            </a>
                          </li>
                        </ul>
                    </div>
              </div>
          </div>
      
        <!-- 排序 -->
          <div class="product-store product-same" :style="'display:'+(nIndex=='3'?'block':'none')">
            <ul>
                <li><a href="" class="">默认排序</a></li>
                <li><a href="" class="same-color">询价量</a></li>
                <li><a href="" class="">关注度</a></li>
            </ul>
          </div>
      </div>
    </div>
  </mu-container>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
// import './mock/mock.js';
import './mock/tractors.js';
export default {
      data() {
        return {
            active:false,
            data:[],
            items:[
                {select: '店铺', id:1},
                {select: '收获机械', id:2},
                {select: '品牌',id:3},
                {select: '排序',id:4}
            ],
            nIndex:"-1",
            searchText:'',
        }
      },
      mounted:function() {
        axios.get('tractorsData').then(res => {
          this.data = res.data.machineryProuct;
        }).catch(res => {
          alert('wrong');
        })
      },
      methods:{
        
          selectStyle (i, key) {
　　　　　　　　this.items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
　　　　　　　　Vue.set(i,'active',true);
                this.nIndex = key;
                
　　　　　　},
            onClick () {
                this.nIndex = '-1';
                this.items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
                
            },
            searchInput () {
                 this.$router.push({
                    path:'/shop/list'
                })
                
            },
            goLeft(){
                this.$router.go(-1);
            },
            goToDetail(){
                this.$router.push({
                    path:'/shop/detail',
                    params:'列表'
                })
            },
            addShopCar(){
                this.$router.push({
                    path:'/shop/Shopbuy'
                })
            }
      }
}
</script>


<style lang='scss' scoped>
element.style{
    font-size: 16px !important;
}
html{
    font-size: 0% !important;
}
.clearfix {
  display: block;
  clear: both;
  content:"";
  overflow: hidden;
}
ul li {
    list-style: none;
    padding: 0px;
    margin: 0px;
}
ul {
  padding: 0px;
  margin: 0px;
}
 .shop{
    height: 100%;
  }
  .shop-title{
      text-align: center;
  }
  .mu-icon-button{
    background: url(./img/leftjiantou.png) center no-repeat;
  }
  #shop-icon{
    background: url(./../../assets/img/shop-icon.png) center no-repeat;
  }
  .shop-search{
    margin-top: 46px;
    width: 100%;
    background: #fff !important;
    height: 46px;
    input{
      border-style:none; 
      margin-top: 0.1rem;
      width: 6rem;
      height: 46px;
      border-radius: 2rem;
      background-color: #eee !important;
      background:url(./../../assets/img/search-icon.png) 1.3rem  no-repeat;
      background-size: 25px;
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
  
.check-style {
    border-bottom: none !important;
    border-top: 1px solid #ececec;
    border-right: 1px solid #ececec;
    border-left: 1px solid #ececec;
    color: #444;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 3px 3px 0px 0px;
}
.search-banner li span.top-jiantou {
    background: url("./img/topjiantou.png") 100% 100% / 100% 100% no-repeat !important;
}
.search-banner li span:nth-child(1).style-color {
    color: #ff8400;
}
/*  header style start*/
.leftjiantou {
    width: 0.6rem;
}
.header-h {
  display: inline-block;
  margin-left: 45%;
  transform: translateX(-50%);
}
/*  header style end*/

/*search style start*/
.search-listN-bg {
  margin-top: 1.1rem;
  position: relative;
}
.search {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  width: 94%;
  border-radius: 20px;
  height: 0.8rem;
  border: 0px;
  background-color:	#F0F0F0;
  outline: none;
  text-align:center;
}
.search-listN-bg .search-circle {
    position: absolute;
    left: 1.3rem;
    top: 0.4rem;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    height: 0.5rem;
    width: 0.5rem;
    background: url(./img/search-sm.png) 100% 100% / 100% 100% no-repeat;
}
/*search style end*/

/*banner style start*/ 
.search-banner {
    width: 100%; 
}
.search-banner-ul {
    padding: 0;
}
.search-banner li {
    border-left: none;
    width: 25%;
    float: left;
    padding: .2rem 0 .2rem 0;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #f0f0f0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: .2rem;
}

.search-banner li span:nth-child(1) {
    color: #888;
    position: relative;
    /* width: 1.8rem; */
    overflow: hidden;
    display: block;
}

.search-banner li span:nth-child(2) {
    height: 0.15rem;
    width: 0.2rem;
    background: url('./img/bottomjiantou.png') 100% 100% / 100% 100% no-repeat;
    position: absolute;
    right: 0.05rem;
    top: 0.3rem;
}
/*banner style end*/ 


/*banner style start*/
.product-list-bg {
    width: 100%;
}
.product-list-bg li {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    position: relative;
    height: 2rem;
}
.product-list-bg li .product-left {
    width: 30%;
    height: 2rem;
    position: relative;
}
.left {
    float: left;
    margin: 0;
    left: 0;
}

.product-list-bg li .product-left .product-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin-left: .2rem;
}
.product-list-bg li .product-right {
    width: 60%;
}
.right {
    float: right !important;
    margin: 0;
    right: 0;
}


.name-of-parts a {
    font-size: 0.3rem;
    color: #666;
    overflow: hidden;
    display: block;
    font-weight: 600;
    padding-top: 0.3rem;
}


.product-right-tit {
    margin-top: 0.2rem;
}
.news-add {
  
}
.news-add .degree {
    float: left;
    display: block;
    
}
.news-add-btn {
    float: right;
    background-color: dodgerblue;
    border-radius: 5px;
    border: 0;
    color: white;
    margin-right: 0.2rem;
}
/*banner style end*/ 



/*cover style start*/
.list-sth {
  position: relative;
}
.cover {
    position: absolute;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
}

/*store style start*/
.product-sort, .product-store {
    background: #fafafa;
    width: 100%;
    /* display: none; */
}
.product-sort ul li, .product-store ul li {
    border-bottom: 1px solid #ececec;
    height: 0.6rem;
    color: #666;
    line-height: 0.6rem;
    text-align: center;
    box-sizing: border-box;
}
.product-store ul li a {
    color: #666;
    display: block;
}
.product-store ul .same-color {
    color: #ff8400;
}
/*store style end*/ 
 
/*class style start*/
.category-inner-cont {
    padding: 0 0.2rem;
    display: block;
    background-color: #fafafa;
}
.category-cont-1-title:before {
    width: 3px;
    background: #ff8400;
    left: 0;
    top: .8rem;
    position: absolute;
    content: '';
}
.category-cont-1-title {
    font-size: .3rem;
    line-height: 0.3rem;
    padding: .2rem 0.2rem .2rem;
    color: #666;
    font-weight: bolder;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: relative;
}
.category-cont-1 ul li {
    width: 25% !important;
    float: left;
    margin-bottom: 1rem !important;
}
.category-image {
    width: 100%;
    position: relative;
}
.category-image img {
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
}
.category-cont-2-title {
    font-size: .3rem;
    color: #666;
    text-align: center;
    overflow-y: hidden;
}

 
/*class style end*/
/*pinpai style start*/
.product-brand-bg {
    background: #fafafa;
    height: 30rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    /* overflow-scrolling: touch; */
    width: 100%;
    display: none;
    -webkit-overflow-scrolling: touch;
}
.product-brand-bg h2 {
    color: #9f9f9f;
    margin: .2rem 0 .4rem .4rem;
}
.clearFloat {
    zoom: 1;
}
.product-brand {
    width: 100%;
    border-top: 1px solid #e5e5e5;
}
.product-brand li {
    width: 23%;
    float: left;
    margin: .6rem 0 0 1.6%;
}
.product-brand li div {
    width: 100%;
    text-align: center;
    color: #666;
}
.product-brand li span {
    position: relative;
    display: block;
    width: 100%;
    float: left;
    height: 1rem;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 3px;
}
.product-brand li span img {
    display: block;
    max-height: 80%;
    max-width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
}
.brand_list {
    margin: 1rem 0 0 .4rem;
    height: 100%;
}
.brand_list .letter_title {
    font-weight: bold;
    color: #666;
    border-bottom: 1px solid #ededed;
    text-align: left;
}
.brand_list .brand_box ul {
    width: 100%;
    zoom: 1;
}
.brand_list .brand_box ul li {
    width: 30%;
    border: 1px solid #f0f0f0;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 3px;
    text-align: center;
    overflow: hidden;
}
.brand_list .brand_box ul li a {
    color: #666;
    line-height: 0.5rem;
}
/*pinpai style end*/

/*cover style end*/
</style>
