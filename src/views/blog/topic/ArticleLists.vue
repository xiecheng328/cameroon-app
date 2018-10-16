<template>
    <!--郑长庆-->
    <div id="container">
        <h4 id="header">大学生如何在堕落的寝室中出淤泥而不染？</h4>
        <div id="top">
            <span>11693人关注&nbsp&nbsp&nbsp15条评论</span>
            <button id="btn">+关注问题</button>
        </div>
        <div id="select">
            <span id="selectL">
                邀请回答
            </span>
            <span id="selectR">
                添加回答
            </span>
        </div>
        <div id="remind">
            <span>1119个回答</span>
            <span id="sort">默认排序&nbsp</span>
        </div>
        <div id="asone">
            <div class="head"></div>
            <span>农机专业户</span>
            <div id="contenta">
                文章内容文章内容文章内容文章内容文
                章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文
                章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容
            </div>
        <div id="astwo">
            <div class="head"></div>
            <span>农机行业领导者</span>
            <div id="contentb">
                文章内容文章内容文章内容文章内容文
                章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文
                章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容
                文章内容文章内容文章内容文章内容文章内容
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleLists"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #header{
        text-align: center;
        height: 25px;
        line-height: 25px;
        margin-bottom: 10px;
    }
    #btn{
        float: right;
    }
    #top{
        margin-bottom: 10px;
    }
    #select{
        height: 35px;
        float: left;
        line-height: 35px;
        border: 1px solid #000;
        margin-bottom: 2px;
    }
    #selectL{
        border-right: 1.2px solid #ccc;
        width: 178px;
        display: block;
        float: left;
        text-align: center;
    }
    #selectR{
        width: 178px;
        display: block;
        float: right;
        text-align: center;
        }
    #remind{
        background: #ccc;
        height: 25px;
        clear:both;
    }
    #sort{
        float: right;
    }
    #asone{
        height: 200px;
        margin-bottom: 10px;
    }
    #contenta{
        margin-bottom: 10px;
    }
    #astwo{
        height: 200px;
        margin-bottom: 10px;
    }
    #contentb{
        margin-bottom: 10px;
    }
    .head{
        background-image: url("../../../assets/img/headPortrait.jpeg");
        background-repeat: no-repeat;
        background-size:cover ;
        background-position: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        float: left;
        margin-right: 5px;
    }
</style>
