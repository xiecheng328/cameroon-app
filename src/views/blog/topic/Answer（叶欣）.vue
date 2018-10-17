<template>
    <!--叶欣-->
    <div id="title">
        <h3>中国的农业发展迅速是因为先进的生产设备吗？</h3>
        <a href="#">写回答</a>&nbsp;&nbsp;
        <span>查看全部回答&gt;</span>
    </div>
    <div id="container">
        <div class="t-name">
            <div class="circle"></div>
            <span>种植大户</span>
            <button>+关注</button>
        </div>
        <p>
            黄瓜为什么叫黄瓜而不叫绿瓜呢？明明是绿的，为什么叫黄瓜？其实黄瓜原名叫胡瓜，
            黄瓜原产于喜马拉雅山南麓的印度热带雨林地区，是汉朝张骞出使西域时带回来的，
            胡瓜更名为黄瓜，始于后赵，下面我们来看一看黄瓜为什么叫黄瓜吧！
        </p>
        <p>
            黄瓜为什么叫黄瓜而不叫绿瓜呢？明明是绿的，为什么叫黄瓜？其实黄瓜原名叫胡瓜，
            黄瓜原产于喜马拉雅山南麓的印度热带雨林地区，是汉朝张骞出使西域时带回来的，
            胡瓜更名为黄瓜，始于后赵，下面我们来看一看黄瓜为什么叫黄瓜吧！
        </p>
        <p>
            黄瓜为什么叫黄瓜而不叫绿瓜呢？明明是绿的，为什么叫黄瓜？其实黄瓜原名叫胡瓜，
            黄瓜原产于喜马拉雅山南麓的印度热带雨林地区，是汉朝张骞出使西域时带回来的，
            胡瓜更名为黄瓜，始于后赵，下面我们来看一看黄瓜为什么叫黄瓜吧！
        </p>
    </div>
    <div id="agree">
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-dianzan"></i>
        <i class="iconfont icon-pinglun"></i>
    </div>
</template>

<script>
    export default {
        name: "Answer"
    }
</script>

<style scoped>
    #title a{
        text-decoration: none;
        float: left;
    }
    #title{
        border-bottom:16px solid #c0c0c0;
        margin-bottom:5px;
    }
    .circle {
        width: 50px;
        height: 50px;
        background-color: #c0c0c0;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        float: left;
    }
    #container .t-name span{
        line-height: 35px;
        float: left;
    }
    #container .t-name{
        height: 35px;
    }
    #container .t-name button{
        float: right;
        line-height: 23px;
    }
    #container p{
        text-indent: 2em;
    }
    #agree{
        float: right;
    }
</style>