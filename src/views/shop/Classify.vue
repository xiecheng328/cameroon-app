<template>
<div class="shop" id="classifies">
    <div class="classify">
    <!--标题-->
    <div class="classify-header">
      <img :src="ImgUrl" class="classify-header-back" v-on:click="back">
      <p class="classify-header-title">产品分类</p>    
    </div>
    <!--文字走马灯-->
    <div class="classify-marquee">
      <div class="vueBox"> 
        <div class="marquee"> 
          <div class="marquee_title"> 
            <span>为您推荐</span> 
          </div> 
          <div class="marquee_box"> 
            <ul class="marquee_list" :class="{marquee_top:animate}"> 
              <li v-for="(item, index) in marqueeList"> 
                <span>本应用提供</span> 
                <span> {{item.msg}}</span> 
              </li> 
            </ul> 
          </div> 
        </div> 
      </div>
    </div>
    <!--列表-->
    <div class="classify-list">
      <div class="classify-list-left">
      <mu-paper  class="demo-list-wrap">   
        <mu-list toggle-nested>
          <mu-list-item v-for="(item, index) in menuList" :key="index" button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
            <a :href="'#search'+index" class="classify-list-left-a">
              <p class="classify-list-left-title">{{item.title}}</p>
            </a>
            <mu-list-item v-for="(item1, index) in item.eles" :key="index" button :ripple="false" slot="nested">
              <p class="classify-list-left-eles">{{item1.ele}}</p>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </mu-paper>
      </div>
      <div class="classify-list-right">
        <div class="classify-list-right-title" v-for="(item, id) in menuList" :key="id">
          <p v-for="(item1, index) in item.eles" :key="index" >
            <span :id="'search'+id">{{item1.ele}}</span>
            <br>
            <span v-for="(items, index) in imgList" class="classify-list-right-details"> 
              <img :src="items.url" class="classify-list-right-details-img">
            </span>
            <span class="classify-list-right-details-word" v-for="(items, index) in imgList">
              {{items.name}}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  export default{
    data(){
      return{
        ImgUrl:require("../../assets/img/left.png"),
        //文字走马灯        
        animate: false,
        marqueeList: [ 
          { 
            msg:'各种农机产品',
          }, 
          { 
            msg:'农业相关博客', 
          }
        ],
        //列表
        open:'send',
        menuList:[
          {
            title:'动力机械',
            eles:[
              {ele: '拖拉机'}
            ],
            id: '1'
          },
          {
            title:'耕整地',
            eles:[
              {ele: '耕地机械'},
              {ele: '整地机械'},
            ],
            id: '2'
          },
          {
            title:'收获机械',
            eles:[
              {ele: '谷物收货'},
              {ele: '玉米收货'},
            ],
            id: '3'
          },
          {
            title:'种植施肥机械',
            eles:[
              {ele: '播种机械'},
              {ele: '栽植机械'},
              {ele: '施肥机械'},
            ],
            id: '4'
          },
          {
            title:'田间管理机械',
            eles:[
              {ele: '园林机械'},
              {ele: '植保机械'},
              {ele: '中耕机械'},
            ],
            id: '5'
          },
          {
            title:'后处理机械',
            eles:[
              {ele: '清选机械'},
              {ele: '脱粒机械'},
              {ele: '去皮机械'},
            ],
            id: '6'
          },
          {
            title:'产品加工机械',
            eles:[
              {ele: '果蔬加工'},
              {ele: '茶叶加工'},
            ],
            id: '7'
          },
          {
            title:'排灌机械',
            eles:[
              {ele: '水泵'},
              {ele: '喷洒设备'},
            ],
            id: '8'
          },
          {
            title:'养殖机械',
            eles:[
              {ele: '畜牧饲养'},
              {ele: '水产养殖'},
            ],
            id: '9'
          },
          {
            title:'农机配套件',
            eles:[
              {ele: '液压系统'},
              {ele: '传动系统'},
              {ele: '动力系统'},
            ],
            id: '10'
          },
          {
            title:'农田基本机械',
            eles:[
              {ele: '平地机械'},
              {ele: '装载机械'},
              {ele: '挖掘机械'},
            ],
            id: '11'
          },
          {
            title:'设施农业设备',
            eles:[
              {ele: '卷帘设备'},
              {ele: '加温设备'},
            ],
            id: '12'
          },
          {
            title:'农业运输机械',
            eles:[
              {ele: '运输车'},
            ],
            id: '13'
          },
          {
            title:'其他机械',
            eles:[
              {ele: '包装机械'},
            ],
            id: '14'
          }
        ],
        imgList:[
          {
            url:require('../../assets/img/tractors1.jpg'),
            name: '机械1',
            id:'1'
          },
          {
            url:require('../../assets/img/tractors2.jpg'),            
            name: '机械2',
            id: '2'
          },
          {
            url:require('../../assets/img/tractors1.jpg'),
            name: '机械3',
            id: '3'
          }
        ]
      };

    },
     created() { 
       setInterval (this.showMarquee, 2000) 
      }, 
    methods: { 
      showMarquee() { 
        this.animate = true; 
        setTimeout (() => { 
          this.marqueeList.push (this.marqueeList[ 0 ]); 
          this.marqueeList.shift (); 
          this.animate = false; 
          }, 500); 
        },
        back(){
          this.$router.push({
          path:'/shop/shophome'
        })
        }
      }
    }
</script>

<style lang="scss">
#classifies{
  overflow:-Scroll;overflow-x:hidden

}
  .classify{
    &-header{
      width: 100%;
      height: 60px;
      border-bottom: 1px #ccc solid;
      position: relative;
      &-back{
        width: 30px;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
      &-title{
        margin: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 16px;
      }
    }
  }
  li{
    list-style: none;
  }
  .marquee { 
    width: 100%; 
    height: 40px; 
    align-items: center; 
    color: #3A3A3A; 
    display: flex; 
    box-sizing: border-box; 
    border-bottom: 1px #ccc solid;
    &_title{
      padding: 0 20px; 
      height: 20px; 
      font-size: 14px; 
      color: #007fff;
      border-right: 1px solid #ccc; 
    }
    &_box{
      display: block; 
      position: relative; 
      width: 60%; 
      height: 20px;
      overflow: hidden;
      left: 60px;
      color: #999;
      &_list { 
        display: block; 
      } 
    }
    &_top{
      transition: all 0.5s; 
      margin-top: 30px; 
    }
  } 
 .demo-list-wrap {
  max-width: 360px;
  border-right: 1px #ccc solid;
}
.classify-list{
  background-color: #fff;
  display: flex;
  &-left{
    height: 680px;
    overflow:scroll;
    width: 26%;
    &-a{
      color: #000;
    }
    &-title{
      font-size: 13px;
      word-wrap: break-all;
    } 
    &-eles{
      font-size: 12.5px;
      color: #999;
    }
  } 
  &-right{
    height: 680px;
    overflow:scroll;
    width: 74%;
    background-color: rgba(255,255,204,0.1);
    &-title{
      border-bottom: 1px #000 solid;
    }
    &-title p{
      font-size: 15px;
      padding-left: 15px;
      border-bottom: 1px #ccc dashed;
    }
    &-details{
      &-img{
        width: 60px;
        border: 1px #ccc solid;
        left: 50%;
        margin-top: 5%;
        margin-left: 8%;
      }
      text-align: center;
      font-size: 13px;
      &-word{
        padding-left: 14.3%;
      }
    }
  }
}
.mu-item{
  border-bottom: 1px #ccc solid;
}
</style>