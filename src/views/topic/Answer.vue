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
            return{
                answerList: [
                    {
                        title: '中国的农业发展迅速是因为先进的生产设备吗？',
                        author: '中国农业研究专家',
                        p1: '有一定的推动作用。中国的重点，转移到社会' +
                        '主义现代化建设上来，实行以经济建设为中心的战略方针' +
                        '，从此翻开了中国历史发展的新的一页，关于发展问题，邓' +
                        '小平高瞻远瞩，为中国规划了经济三步走的战略目标。第一步，' +
                        '解决温饱问题，第二步，是20世纪末达到小康水平。第三步，21世' +
                        '纪50年代达到中等国家发达水平，三步走情况下，顺利实现了两步' +
                        '的目标，第三步目标而奋斗，在发展的理念上，也在不断的发展创新。'
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