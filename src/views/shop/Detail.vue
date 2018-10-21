<template>
  <div class="ItemDetail">
    <!-- 大bar -->
      <mu-appbar style="width: 100%;" color="white" textColor='black'>
        <mu-button icon slot="left"  @click="back()">
          <mu-icon value="arrow_back" ></mu-icon>
        </mu-button>
        Company
        <mu-button flat slot="right" @click="gotoHome()">
            <mu-icon value="home" ></mu-icon>
        </mu-button>
      </mu-appbar>
    <!-- 小bar -->
      <mu-appbar style="width: 100%;" color="white" textColor='black'>
       <ul class="smallBar">
        <li v-for="(title,index) in smallBar" :key="index">{{title.title}}</li>
       </ul>
    <!-- 小bar 中的menu -->
        <mu-menu slot="right" >
          <mu-button flat>更多</mu-button>
          <mu-list slot="content" >
            <mu-list-item button  @click="gotoSearch()">
              <mu-list-item-content>
                <mu-button flat>产品搜索</mu-button>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button  @click="gotoQuery()">
              <mu-list-item-content >
                <mu-button flat>补贴查询</mu-button>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button  >
              <mu-list-item-content >
                 <mu-menu >
                <mu-button flat style="width:1.5rem">浏览历史</mu-button>
                <mu-list slot="content">
                  <FootPrint/>
                </mu-list>
              </mu-menu>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-menu>  
      </mu-appbar>
    <!-- 轮播图 -->
      <mu-carousel>
          <mu-carousel-item>
            <img :src="detailCarouse1">
          </mu-carousel-item>
          <mu-carousel-item>
            <img :src="detailCarouse2">
          </mu-carousel-item>
          <mu-carousel-item>
            <img :src="detailCarouse3">
          </mu-carousel-item>
          <mu-carousel-item>
            <img :src="detailCarouse4">
          </mu-carousel-item>
      </mu-carousel>

    <!-- 数据 -->
      <mu-list v-for="(item,index) in dataL" :key="index">
        <mu-list-item button :ripple="false" class="detail-title">
          <mu-list-item-action >
            {{item.ItemName}}
          </mu-list-item-action>
          <mu-list-item-title>
            <mu-button icon color="primary">
                <mu-icon value="favorite"></mu-icon>   
            </mu-button>
           <span @click="goCollect()"> 收藏</span>
          </mu-list-item-title>
        </mu-list-item>
       
        <mu-card-text class="brefText">
           {{item.ItemBrief}}
        </mu-card-text>
        <mu-list-item button :ripple="false" class="accessConcer">
          <mu-list-item-action>
            访问量：{{item.ItemAccess}} 次
          </mu-list-item-action>
          <mu-list-item-action>
            关注度：{{item.ItemConcer}}  次
          </mu-list-item-action>
        </mu-list-item>

        <mu-list-item button :ripple="false" v-for="(sdetail,index) in item.itemDetail" :key="index">
          <mu-list-item-action >
            {{sdetail.name}}
          </mu-list-item-action>
          <mu-list-item-title>
            {{sdetail.detail}}
          </mu-list-item-title>
        </mu-list-item>


      </mu-list>

    <!-- 详情介绍 -->
    <!-- 底部bar -->
    <mu-container class="bar">
			    <mu-button @click="openFullscreenDialog"  full-width style="width:50%;font-size:16px"> 询价</mu-button>
            <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
              <mu-appbar color="primary" title="农机询问">
              <mu-button slot="left" icon @click="closeFullscreenDialog">
                <mu-icon value="close"></mu-icon>
              </mu-button>
              
              </mu-appbar>
              <div style="padding: 24px;">
              你好,请问最近农机有拖拉机吗?
              </div>
            </mu-dialog>
          <mu-button full-width style="width:50%;font-size:16px" @click="goRent()" >租赁</mu-button>
    </mu-container>
  </div>
</template>

<script>
const text = `<span>Hello World</span>`
import detailCarouse1 from './img/detailCarouse1.jpg';
import detailCarouse2 from './img/detailCarouse2.jpg';
import detailCarouse3 from './img/detailCarouse3.jpg';
import detailCarouse4 from './img/detailCarouse4.jpg';
import FootPrint from './FootPrint.vue';
 export default {
   components:{
     FootPrint,
   },
     data () {
    return {
      openFullscreen: false,
        smallBar:[{title:"产品"},{title:'详情'},{title:"参数"},{title:"推荐"}],
        open: false,
        dataL:[
            {
                ItemName:"东方红4LZ-7B自走轮式谷物联合收割机",
                ItemBrief:"高效，节能，环保，烘干质量高，烘干成本低，互联网实时监控，操作便捷有效。",
                ItemAccess:'63',
                ItemConcer:'999',
                itemDetail:[{
                                name:'生产商',
                                detail:'中国一拖集团有限公司'
                            },{
                                name:"品牌",
                                detail:"光明"
                            },{
                                name:"价格",
                                detail:"面议"
                            },{
                                name:"型号",
                                detail:"X-saDEE"
                            }]
            }
        ],
                  
        detailCarouse1,
        detailCarouse2,
        detailCarouse3,
        detailCarouse4,
    
    }
  },
  methods: {
    changeActive (index) {
      this.active = index;
    },back(){
        this.$router.go(-1);
    },gotoHome(){
        this.$router.push({
        path:'/shop/shophome'
        })
    },gotoSearch(){
        this.$router.push({
        path:'/shop/search'
        })  
    },gotoQuery(){
        this.$router.push({
        path:'/shop/xxx'
        })
    },gotoHistory(){
        this.$router.push({
          path:'/shop/footprint'
        })
    },
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    },
    goRent(){
      this.$router.push({
        path:'/shop/rent'
      })
    },
    goCollect(){
      this.$router.push({
        path:'/shop/collect'
      })
    }
    
  },created(){
    
  }
  
  };
</script>


<style lang="scss" scoped>
.smallBar{
  font-size: 15px;
  li{
    float: left;
    margin: 0rem .2rem;
    
  }
}
.bar{
  // background: #000;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 56px;
}
.mu-list {
  margin-bottom: 30px;
}
.mu-carousel{
  padding: .1rem;
  height: 300px;
  img{
    width: 100%;
    height: 300px;
  }
}
.contain{
  padding:0 16px;
}

.detail-title{
  .mu-item-action {
    width: 75%;
    font-size: 16px;
    font-weight: bolder;

  }
  .mu-item-title{
    height: 100%;
    width: 25%;
    font-size: 12px;
    position: relative;
    bottom: 30%;
    left: 10%
  }
  span{
      position:absolute;
      left: 14%;
      bottom: -10%
  }
}
.brefText{
    color: #ff8400 !important;
    font-size: 13px;
}
.accessConcer{
  div{
    width: 50%;
  }
}



</style>
