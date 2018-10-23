<template>
	<div>
		<div class="s_header">
			<b><img src="./img/return.png" @click="goLeft()"></b>
			订单管理
		</div>
    <mu-container>
  <mu-tabs :value.sync="active2" color="primary" indicator-color="#fff" full-width>
    <mu-tab>全部</mu-tab>
    <mu-tab>待付款</mu-tab>
    <mu-tab>待发货</mu-tab>
    <mu-tab>待收货</mu-tab>
    <mu-tab>待评价</mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active2 === 0">
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-media title="天人" sub-title="6行玉米割机">
          <img src="./../../assets/img/parts1.jpg">
        </mu-card-media>
        <mu-card-text>
          摘穗单行性能、结构、强度、可靠性全面提升；铝合金齿轮箱，质量轻，散热效果好，润滑效果好
          护罩，分禾器选用高强度工程塑料，寿命更高；摘穗板间隙液压调节；封闭式油浴润滑
        </mu-card-text>
      </mu-card>
  </div>
    <div class="demo-text" v-if="active2 === 1">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-media title="天人" sub-title="6行玉米割机">
          <img src="./../../assets/img/parts1.jpg">
        </mu-card-media>
        <mu-card-text>
          摘穗单行性能、结构、强度、可靠性全面提升；铝合金齿轮箱，质量轻，散热效果好，润滑效果好
          护罩，分禾器选用高强度工程塑料，寿命更高；摘穗板间隙液压调节；封闭式油浴润滑
        </mu-card-text>
        <mu-button color="primary">在线支付</mu-button>
        <mu-button color="primary">货到付款</mu-button>
      </mu-card>
    </div>
    <div class="demo-text" v-if="active2 === 2">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-media title="东方红" sub-title="采油机">
          <img src="./../../assets/img/parts3.jpg">
        </mu-card-media>
        <mu-card-text>
          摘穗单行性能、结构、强度、可靠性全面提升；铝合金齿轮箱，质量轻，散热效果好，润滑效果好
          护罩，分禾器选用高强度工程塑料，寿命更高；摘穗板间隙液压调节；封闭式油浴润滑
        </mu-card-text>
        
      </mu-card>
    </div>
    <div class="demo-text" v-if="active2 === 3">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-media title="谷物及光" sub-title="TB80">
          <img src="./../../assets/img/wheat2.jpg">
        </mu-card-media>
        <mu-card-text>
          摘穗单行性能、结构、强度、可靠性全面提升；铝合金齿轮箱，质量轻，散热效果好，润滑效果好
          护罩，分禾器选用高强度工程塑料，寿命更高；摘穗板间隙液压调节；封闭式油浴润滑
        </mu-card-text>
        <mu-button color="primary">确认收货</mu-button>
      </mu-card>
    </div>
    <div class="demo-text" v-if="active2 === 4">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-media title="五证" sub-title="GA70">
          <img src="./../../assets/img/wheat1.jpg">
        </mu-card-media>
        <mu-card-text>
          摘穗单行性能、结构、强度、可靠性全面提升；铝合金齿轮箱，质量轻，散热效果好，润滑效果好
          护罩，分禾器选用高强度工程塑料，寿命更高；摘穗板间隙液压调节；封闭式油浴润滑
        </mu-card-text>
        <mu-button color="primary" to="/shop/review">立即评论</mu-button>
      </mu-card>
    </div>
  </mu-container>
    <div class="ui-flex ui-cont-sa s_btns">
			<span></span>
      <mu-button color="primary">查看物流</mu-button>
			<mu-button color="primary">延长收货</mu-button>
			<mu-button color="primary" to="/shop/receipt">确认收货</mu-button>
		</div>
		

	</div>
	
</template>

<script>

import Review from './Review.vue';
import Receipt from './Receipt.vue';
export default {
  components:{
    Review
  },
  data () {
    return {
      active: 0,
      active2: 0,
      
    };
  },

  methods:{
  	// 切换选项卡
  	goLeft(){
      this.$router.go(-1);
    },
    
  }
}
</script>
<style lang="scss" scoped>
.s_btns{
  position: fixed;
  bottom: 56px;
  right: 0;
  padding-bottom: 0 !important;
}
.demo-text {
  padding: 16px;
  background: #fff;
  p {
    margin: 8px 0;
  }
}
	.ui-flex{
		display: flex;
	}
	.ui-flex-1{
		flex:1;
	}
	.ui-cont-sa{
		justify-content: space-around;
	}
	.s_header{
		position: relative;
		text-align: center;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 1px solid #eeeeee;
	}
	.s_header b{
		position: absolute;
		top: 0;
		left: 0.1rem;
		display: inline-block;
		width: 0.5rem;
		font-size: 16px;
    margin-top: 0.25rem;
		font-weight: bold;
		color: #8e8e8e;
	}
	.s_header b img{
		width: 100%;
	}
	.s_tabs{
		height: 1rem;
		line-height: 1rem;
		border-bottom: 1px solid #eeeeee;
		justify-content:space-around;
	}
	.s_tabs .item{
		border-bottom: 2px solid #ffffff;
	}
	.s_tabs .ac{
		border-color: #2285d7;
	}
	.s_cont>dl{
		height: 4.5rem;
		border-bottom: 1px solid #eeeeee;
	}
	.s_cont>dl dt{
		width: 4rem;
	}
	.s_cont>dl dd{
		margin-inline-start: 15px;
	}
	.s_cont>dl dt img{
		width: 100%;
	}
	.s_btns{
		border-bottom: 1px solid #eeeeee;
		padding-bottom: 0.8rem;
	}
	.s_btns>span:nth-of-type(1){
		border: none;
	}
	.s_btns>span{
		text-align: center;
		width: 23%;
		border: 1px solid #eeeeee;
		border-radius: 5px;
		background-color: transparent;
		height: .5rem;
		line-height: .5rem;
	}
</style>
