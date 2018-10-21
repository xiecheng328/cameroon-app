<template>
<div>
<mu-appbar style="width: 100%;" color="#FFFFFF" z-depth="0" textColor="#333333">
      <mu-button icon slot="left" @click="goLeft()">
      <mu-icon ></mu-icon>
      </mu-button >
      <div class="shop-title">租赁</div>
      
</mu-appbar>
<hr>
<div class='middle'>
<div class='middle-img'>
<img src="./img/805.jpg" alt="">

</div>
<div class='info'>
<p class='info-name'>徽拖HT-2204轮式拖拉机 </p >
<p class='info-price'>500/天</p >
</div>
<div class='infos'>
<p class='infos-a'>驱动方式：四轮驱动</p >
<p class='infos-b'>马力：200hp</p >
<p class='infos-c'>品牌：红星</p >
</div>
<hr>
<mu-paper class="demo-list-wrap">
  <mu-list>
    <mu-list-item style="margin-left: background:#fff" >
      <mu-list-item-title>租赁人:西瓦尼</mu-list-item-title>
    </mu-list-item>
    <mu-list-item  >
      <mu-list-item-title>租金:3000</mu-list-item-title>
    </mu-list-item>
    <mu-list-item  >
      <mu-list-item-title>联系电话:18898884334</mu-list-item-title>
    </mu-list-item>
  </mu-list>
</mu-paper>
  <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
    <mu-form-item prop="select" label="取货方式:" style="margin: 0 0.15rem; background:#fff">
      <mu-select v-model="form.select">
        <mu-option v-for="(option,index) in options" :key="index" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item prop="city" label="收货地址" style="margin: 0 0.15rem; background:#fff">
      <mu-select v-model="form.select">
        <mu-option v-for="(option,index) in citys" :key="index" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item prop="date" label="租赁开始日期" style="margin: 0 0.15rem; background:#fff">
        <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
    </mu-form-item>
    <mu-form-item prop="date" label="租赁结束日期" style="margin: 0 0.15rem;margin-bottom:56px; background:#fff">
      <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
    </mu-form-item>
  </mu-form>
</div>
  



  <!-- 底部bar -->
    <mu-container class="bar">
			    <mu-button @click="openFullscreenDialog"  full-width style="width:50%;font-size:16px">租赁联系</mu-button>
            <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
              <mu-appbar color="primary" title="农机询问">
              <mu-button slot="left" icon @click="closeFullscreenDialog">
                <mu-icon value="close"></mu-icon>
              </mu-button>
              </mu-appbar>
              <div style="padding: 24px;">
              你好,请问最近农机有拖拉机吗?
              </div>
              <div style="padding: 24px;">
              对不起,目前没有拖拉机啦,但是我们还类似的农机,小型拖拉机
              </div>
            </mu-dialog>
          <mu-button full-width style="width:50%;font-size:16px" @click="goRent()" >立即租赁</mu-button>
    </mu-container>
</div>
</template>

<script>
export default {
    data () {
    return {
      options: [
        '送货上门', '自取'
      ],
      citys: [
        '哈尔滨', '唯创', '喀麦隆'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      },
      value7: undefined,
      value8: undefined,
      value9: undefined,
      value10: undefined,
      value11: undefined,
      openFullscreen: false,
    };
  },
    methods:{
    goLeft(){
        this.$router.go(-1);
    },
    closeBottomSheet () {
    this.open = false;
    },
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    },
    goRent(){
      this.$router.push({
        path:'/shop/forgood'
      })
    }
  },
   
};
</script>

<style lang="scss" scoped>
.demo-list-wrap {
  margin-left: 0.1rem;
  width: 100%;
  max-width: 360px;
 
}
.bar{
  // background: #000;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 56px;
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
.a {
display: block;
float: left;
margin-left:0.2rem;
color: #666;
}
.middle-img {
position: relative;
overflow: hidden;
height: 2.6rem;
}
img {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
.title {
display: inline-block;
}
.info {
overflow: hidden;
}
.info-name {
float: left;
margin-left: 0.2rem;
font-size: 0.3rem;
}
.info-price {
float: right;
margin-right: 0.2rem;
font-size: 0.3rem;
color: red;
}
.infos {
display: flex;
flex-direction: row;
}
.infos-a {
flex-grow: 1;
margin-left: 0.2rem;
font-size: 0.25rem;
}
.infos-b {
flex-grow: 1;
font-size: 0.25rem;
}
.infos-c {
flex-grow: 1;
font-size: 0.25rem;
}
.line {
padding: 0.15rem 0.15rem;
box-sizing: border-box;
}
.line-text {
color: #666;
}
.bottom{
position:relative;
}
.nowrent{
float: left; 
width: 3.2rem; 
height: 0.6rem;
background:#2196f3;
color: white;
}
.contact{
float: right;
position: absolute; 
width: 3.2rem; 
height: 0.6rem;
}
</style>