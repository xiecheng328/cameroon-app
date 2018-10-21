<template>
<div>
  
    <div class="help">
      <!-- 用户反馈窗口title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      
      <div class="help-title">用户使用指南</div>
      <mu-button  icon slot="right" ></mu-button>
      </mu-appbar>
       
  </div>
  <div class="con">
    <div   style="color:red;margin-top:1rem">圈子</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> 圈子是此app功能之一，主要应用在于用户可以自由发布文字、图片、视频等交流信息众多帖子集合成一个“圈”，用户在“圈”里进行在线交流。活跃的圈子集中在农业顿、娱乐等领域。{{ message }}</span> 

             <div   style="color:red;margin-top:1.5rem">信息</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> 信息是一个为智能终端提供即时通讯服务的免费应用程序 支持跨通信运营商、跨操作系统平台通过网络快速发送免费（需消耗少量网络流量）语音短信、视频、图片和文字，同时，也可以使用通过共享流媒体内容的资料和基于位置的社交插件{{ message }}</span> 

             <div   style="color:red;margin-top:1.5rem">商城</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> 商城就是一种购买农机，等并且送货上门的购物平台。购物网是互联网、银行、现代物流业发展的产物。企业对消费者购物网站。{{ message }}</span> 

             <div   style="color:red;margin-top:1.5rem">我的</div>
             <div  style="color:red;margin-top:20px"></div>
            <span> 我的是属于自己的家，可以查找属于你自己的东西，设置你想要的样子。{{ message }}</span> 
           </div>
                
          
          
          
</div>

            
</template>
<script>
export default {
   data(){
      return{
        message:"",
        
           
     
      };

    },

  name:"UserGuide",
  methods:{
   
  
  }
}
</script>
<style lang="scss" scoped>
  .help{
    height: 100%;
  }
  .help-title{
      text-align: center;
  }
 
  .con{

    margin-left: 25px;
    margin-right: 25px;
  }
  
</style>



