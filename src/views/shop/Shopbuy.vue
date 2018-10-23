  <template>
        <div>
          <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
            <mu-button icon slot="left" @click="goLeft()">
            <mu-icon ></mu-icon>
            </mu-button >
            <div class="shop-title">购物车</div>
            <mu-button slot="right" @click="goManage()" flat large>管理</mu-button >
          </mu-appbar>
            <div class="bg">
            </div>
            <div id="header"> 
                <mu-button @click="guan()" class="use" flat>删除</mu-button> 
            </div>
            <div class="list">
                <i :class=" shoped?'dis iconfont icon-xuanze': ' iconfont icon-xuanze'" @click="xuanze1()"></i>
                <i :class=" !shoped?'nodis iconfont icon-xuanze1': ' iconfont icon-xuanze1'" @click="xuanze1()"></i>
                <img src="@/assets/img/user.png" alt="" class="list-img">
                <span class="list-name">
                    唯创
                </span>
                <span class="list-list">
                    >
                </span>
            </div>
            <ul class="body">
                <li class="body-li" v-for="(item,index) in List" :key="index"  @emptied="index">
                    <div class="thing">
                        <i :class="List[index].shoped?'dis iconfont icon-xuanze': ' iconfont icon-xuanze'" @click="xuanze(index)"></i>
                        <i :class="!List[index].shoped?'nodis iconfont icon-xuanze1': ' iconfont icon-xuanze1'" @click="xuanze(index)"></i>
                        <img class="thing-img" src="@/assets/img/wheat1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="info-info">{{List[index].info}}</p>
                        <div class="info-money">
                            <span class="info-price">{{List[index].price}}</span>
                                <button @click="noadd(index)">-</button>
                                <span class="info-m">{{item.count}}</span>
                                <button @click="add(index)">+</button> 
                            </div>
                    </div>
                </li>
            </ul>

            <p class="middle"><span>——></span><span>你可能还喜欢</span><span>——</span></p>
                    <ul class="middle-bottom">
                    <li class="bottom-list" v-for="(item,index) in Lista" :key="index">
                        <img src="@/assets/img/wheat1.jpg" alt="" class="bottom-img">
                    </li>
                </ul>
            <div class="footerup">
                <i :class=" shoped?'dis iconfont icon-xuanze': ' iconfont icon-xuanze'" @click="xuanze1()"></i>
                <i :class=" !shoped?'nodis iconfont icon-xuanze1': ' iconfont icon-xuanze1'" @click="xuanze1()"></i>
                <span @click="xuanze1()" class="footerup-all">全选</span> 
                <div class="zong">
                  <span class="footerup-he">合计:</span>
                <span class="footerup-p">{{num}}</span>  
                </div>
                <mu-button flat small @click="goAccount()">结算</mu-button>
            </div>
                
             <div class="footer"></div>   
        </div>
        
        
    </template>

    <script>

import axios from 'axios';
//数据模拟
import './mock/shopList.js';
import './mock/brand.js';
import './mock/tractors.js';
import './Shopbuy/iconfont.css';
export default {
  data() {
    return {
      large: 0,
      shoped: false,
      num: 0,
      List: [
        {
          productName: "深松机",
          shoped: false,
          info: "五征GA70小麦收获机",
          price: 1230,
          count: 1
        },
        {
          productName: "采棉机",
          shoped: false,
          info: "五征GA70小麦收获机",
          price: 45600,
          count: 1
        },
        {
          productName: "拖拉机",
          shoped: false,
          info: "五征GA70小麦收获机",
          price: 22200,
          count: 1
        },
        {
          productName: "播种机",
          shoped: false,
          info: "五征GA70小麦收获机",
          price: 222000,
          count: 1
        }
      ],
      Lista:[1,2,3,4],
      now: [],
    };
  },
  computed: {
   
  },

  methods: {
    add(index) {
      this.List[index].count++;
      if (this.List[index].shoped) {
        this.num = this.num + this.List[index].price;
      }
    },
    noadd(index) {
      if (this.List[index].count == 0) {
        this.List[index].count = 0;
      } else {
        this.List[index].count--;
        if (this.List[index].shoped) {
          this.num = this.num - this.List[index].price;
        }
      }
    },
    xuanze(index) {
      this.List[index].shoped = !this.List[index].shoped;
      if (this.List[index].shoped) {
        this.num = this.num + this.List[index].count * this.List[index].price;
      } else {
        this.num = this.num - this.List[index].count * this.List[index].price;
      }
    },
    xuanze1() {
      this.shoped = !this.shoped;
      if (this.shoped) {
        for (var i = 0; i < this.List.length; i++) {
          this.List[i].shoped = true;
          if (this.List[i].shoped) {
            this.num = this.num + this.List[i].count * this.List[i].price;
          } else {
            this.num = this.num - this.List[i].count * this.List[i].price;
          }
        }
      } else {
        for (var i = 0; i < this.List.length; i++) {
          this.List[i].shoped = false;
          if (this.List[i].shoped) {
            this.num = this.num + this.List[i].count * this.List[i].price;
          } else {
            this.num = this.num - this.List[i].count * this.List[i].price;
          }
        }
      }
    },
    guan() {
      for (let h = 0; h < 100; h++) {
        for (let j = 0; j < this.List.length; j++) {
          if (this.List[j].shoped) {
            this.List.splice(j, 1);
            break;
          }
          if (this.List.length == 0) {
            break;
          }
        }
      }
    },
     goLeft(){
        this.$router.go(-1);       
      },
      goManage(){
        this.$router.push({
          path:'/shop/shopmanage'
        })
      },
      goAccount(){
        this.$router.push({
          path:'/shop/forgood'
        })
      }
  },
  mounted:function() {
      axios.get('tractorsData').then(res=>{
        this.now = res.data.machineryProuct;
    })
    
  }
};
</script>

<style lang="scss" scoped>

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
  
.nodis {
  display: none;
}
.dis {
  display: none;
}

* {
  list-style: none;
  margin: 0;
  padding: 0;
}
#header {
  border-radius: 1.6px;
  margin-top: 16px;
  height: 12px;
  margin-top: 1rem;
}
.view {
  float: left;
  margin-left: 1.6px;
  font-size: 20px;
  margin-top: 3.2px;
}
.use {
  float: right;
  font-size: 20px;
  margin-right: 0.2rem;
  margin-top: 0.3rem;
}
.list {
  bottom: #fff;
  border-bottom: 0px;
  border-top-left-radius: 32px 32px;
  border-top-right-radius: 32px 32px;
  margin-top: 35px;
  width: 100%;
  height: 0.5rem;
}
.list-img {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 76.8px;
  left: 48px;
  border-radius: 4.8px;
}
.list i {
  position: absolute;
  width: 16px;
  top: 80px;
  left: 16px;
}
.list-name {
  position: absolute;
  top: 80px;
  left: 88px;
}
.list-list {
  position: absolute;
  top: 70.4px;
  left: 120px;
  font-size: 25.6px;
}
.body {
  // border: 0.16px solid;
  position: relative;
  padding-bottom: 10px;
}
.bg {
  width: 100%;
  height: 85%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #add8e6;
  opacity: 0.9;
  background: #fff;
}
.thing {
  width: 144px;
}
.thing i {
  margin-left: 16px;

}
.thing-img {
  margin-left:3px;
  margin-top: 10px;
  width: 106px;
  height: 80px;
  vertical-align: middle;
  border-radius: 20px;
}
.body-li {
  position: relative;
}

.info {
  position: absolute;
  height: 80px;
  left: 144px;
  top: 24px;
  font-size: 19.2px;
}
.info-info {
  border-radius: 3.2px;
  width: 192px;
  height: 32px;
  overflow: hidden;
}
.info-money {
  margin-top: 8px;
  background: #fff;
  width: 192px;
  border-style: none;
  outline: none;
}
.info-price {
  float: left;
  width: 64px;
  display: block;
}
.info-money button {
  margin-left: 16px;
  width: 25.6px;
  height: 25.6px;
  line-height: 25.6px;
}
.info-m {
  padding-left: 16px;
}
.middle {
  margin-top: 16px;
  text-align: center;
  color: #f00;
  font-size: 19.2px;
  margin-bottom: 16px;
}
.middle span {
  margin-left: 16px;
  width: 60%;
}
.bottom-list {
  width: 50%;
  float: left;
  text-align: center;
}
.bottom-img {
  width: 90%;
}
.bottom-list .p {
  height: 32px;
  line-height: 16px;
  overflow: hidden;
}
.footer {
  float: left;
  width: 100%;
  height: 120px;
}
.footerup {
  background: #fff;
  margin-bottom: 48px;
  position: fixed;
  width: 100%;
  line-height: 64px;
  font-size: 24px;
  bottom: 0;
}
.footerup i {
  padding-left: 8px;
}
.footerup-all {
  padding-left: 6.4px;
}
.footerup-he {
  font-size: 19.2px;
  padding-left: 64px;
}
.footerup-p {
  width: 32px;
  font-size: 16px;
  padding-left: 4.8px;
}
.zong {
  position: absolute;
  bottom: 0;
  right: 144px;
}
.footerup button {
  position: absolute;
  border-radius: 24px;
  font-size: 20px;
  width: 1rem;
  height: 1rem;
  right: 0.1rem;
  line-height: 1rem;
}
.footerup-pay{
  height: 1rem;
  margin-right: 1rem;
}
</style>