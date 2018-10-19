<template>
	<div>
		<div class="s_header">
			<b><img src="./images/pic.png"></b>
			订单详情
		</div>
		<div class="s_tabs ui-flex">
			<!-- 动态绑定 class -->
			<div class="item" :class="active==0?'ac':''" @click="changeTabs(0)">全部</div>
			<div class="item" :class="active==1?'ac':''" @click="changeTabs(1)">待付款</div>
			<div class="item" :class="active==2?'ac':''" @click="changeTabs(2)">代发货</div>
			<div class="item" :class="active==3?'ac':''" @click="changeTabs(3)">待收货</div>
			<div class="item" :class="active==4?'ac':''" @click="changeTabs(4)">待评价</div>
		</div>
		<div class="s_cont">
			<dl class="ui-flex">
				<dt><img src="./images/img_03.png"></dt>
				<dd class="ui-flex-1">
					<p>商品名称：</p>
					<p>订单编号：</p>
					<p>配送方：</p>
				</dd>
			</dl>
		</div>

		<div class="ui-flex ui-cont-sa s_btns">
			<span></span>
			<span>查看物流</span>
			<span>延长收货</span>
			<span>确认收货</span>
		</div>
		
	</div>
	
</template>

<script>
export default {
  data () {
    return {
      active: 0,
    };
  },

  methods:{
  	// 切换选项卡
  	changeTabs(idx){
  		this.active=idx;
  	},
  }
}
</script>
<style>
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
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid #eeeeee;
	}
	.s_header b{
		position: absolute;
		top: 0;
		left: 0.5rem;
		display: inline-block;
		width: 0.5rem;
		font-size: 16px;
		font-weight: bold;
		color: #8e8e8e;
	}
	.s_header b img{
		width: 100%;
	}
	.s_tabs{
		height: 3rem;
		line-height: 3rem;
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
		height: 8.5rem;
		border-bottom: 1px solid #eeeeee;
	}
	.s_cont>dl dt{
		width: 10rem;
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
		height: 2rem;
		line-height: 2rem;
	}
</style>
