<template>
<div>
	<mu-flex justify-content="center">
			<mu-button @click="openFullscreenDialog">Open Scroll Dialog</mu-button>
		</mu-flex>
		<mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
			<mu-appbar color="primary" title="Fullscreen Diaolog">
			<mu-button slot="left" icon @click="closeFullscreenDialog">
				<mu-icon value="close"></mu-icon>
			</mu-button>
			<mu-button slot="right" flat  @click="closeFullscreenDialog">
				Done
			</mu-button>
			</mu-appbar>
			<div style="padding: 24px;">
			this is a fullscreen dialog
			</div>
		</mu-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      openFullscreen: false
    };
  },
  methods: {
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    }
  }
};
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
