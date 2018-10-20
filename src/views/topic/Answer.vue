<!--<link rel="stylesheet" href="../../../../public/font/iconfont.css">-->
<template>
    <!--叶欣-->
    <div class="cameroon-answer">
        <div class="search">
            <i class="iconfont icon-back:before"></i>
            <input type="button" value="搜索">
            <input type="text" value="search">
        </div>
        <ul>
            <li v-for="val in answerList">
    <div id="title">
        <h3>{{val.title}}</h3>
        <a href="#">写回答</a>&nbsp;&nbsp;&nbsp;
        <span>查看全部回答&gt;</span>
    </div>
    <div id="container">
        <div class="t-name">
            <a href="#">
                <img src="/img/mood (1).19928fdc.jpg" alt="" class="head-por">
                <span>{{val.author}}</span>
            </a>
            <div class="t-right">
            <button>+关注</button>
            </div>
        </div>
        <div class="content">
        <p>{{val.p1}}</p>
        <p>{{val.p1}}</p>
        <p>{{val.p1}}</p>
        </div>
    </div>
            </li>
        </ul>
    <div id="agree">
        <span>点赞114</span>|
        <span>评论133</span>|
        <span>转发78</span>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Answer",
        data() {
            return {
                answerList: [
                    {
                        title: '中国的农业发展迅速是因为先进的生产设备吗？',
                        author: '种植大户',
                        p1: '【河南夏邑借棚改之名强征千亩耕地 农业局称：土地权证发错了！】\n' +
                        '村里的一位老党员称，9月2日，乡政府组织村里开过一次村民代表大会，\n' +
                        '说的重点是棚户区改造的情况，当时乡党委书记董天成在会上明确表示，\n' +
                        '土地批文下来后才会征地。没想到会后第二天，就把耕地全部铲平了。'
                    }
                ]
            }
        }
    }
</script>
<!--<link rel="stylesheet" href="">-->
<style scoped lang="scss">
    .cameroon-answer{
        margin:20px;
    }
    *{
        text-decoration: none;
    }
    .search{
        height: 25px;
        width: 100%;
    }
    .search i{
        margin: 20px;
    }
    .search input{
        float:right;
    }
    #title a{
        float: left;
    }
    #title{
        border-bottom:5px solid #c0c0c0;
        padding-bottom:18px;
        margin-bottom:18px;
    }
    #container .t-right{
        float:right;
    }
    #container .t-name span{
        font-size: 21px;
        line-height: 35px;
        color: #2196f3;
    }
    #container .t-name{
        height: 85px;
        width: 100%;
    }
    #container .t-name a{
        float: left;
    }
    #container .t-name button{
        float: right;
        line-height: 23px;
    }
    #container .content p{
        text-indent: 2em;
    }
    #agree span{
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
        line-height: .8rem;
        margin: 3em;
    }
</style>