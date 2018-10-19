<template>
  <div class="help">
    <!-- <mu-container> -->
      <!-- 帮助与反馈title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
     
      <mu-icon ></mu-icon>
      </mu-button >
      <div class="help-title">帮助与反馈</div>
      
      </mu-appbar>
    <div class="gridlist-demo">    
      </div>

    <!-- 用户常见问题 -->
    <div class="hot-help">
      <div class="hot-title"><p class="title">用户常见问题</p>
      <mu-button flat class="all-help">进入></mu-button>
    </div>
      
     <!-- 用户使用指南 -->
    <div class="brand-help">
      <div class="hot-title"><p class="title"> 用户使用指南</p>
      <mu-button flat class="all-help">进入></mu-button>
    </div>
  
      </div>
    </div>

    <!-- 用户反馈窗口 -->
    <div class="tractors-help">
      <div class="tractors-title">
        <p class="title"> 用户反馈窗口</p><mu-button flat class="all-help">进入></mu-button>
      </div>
    </div>
  </div>
</template>
<script>


//引用axios
import axios from 'axios';

export default {

}
</script>
<style lang="scss" scoped>
  .help{
    height: 100%;
  }
  .help-title{
      text-align: center;
  }
  .gridlist-demo{
    width: 100%;
    height: 1.5rem;
    background: #fff;
  }
  .hot-help{
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
  .brand-help{
    margin-top: 0.25rem;
    height: 5rem;
    background: #fff;
  }
  .tractors-help{
    margin-top: -0.7rem;
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
  
  }

  .title{
      float: left;
      margin: 0;
      padding: 0;
      color: #2196F3;
  }
  .all-help{
    margin-top: 0.2rem;
    float: right;
    font-size: 16px;
    letter-spacing: 3px;
  }
</style>



