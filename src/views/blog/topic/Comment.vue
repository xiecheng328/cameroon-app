<!--王静-->
<template>
    <div id="comment">
        <div class="cheader">
            <button class="return">
                取消
                <!--<i class="iconfont icon-quxiao"></i>-->
            </button>
            <span>全部评论3条</span>
        </div>
        <ul class="cbody">
            <li v-for="val in cList ">
                <img class="cimg" :src="val.idimg">
                <span class="cbody-idname">
                    {{val.idname}}
                </span>
                    <p class="cbody-deg">{{val.idcomment}}</p>
                    <div class="cbody-comment">
                        <span class="cbody-time">{{val.datatime}}</span>
                        <span>{{val.number}}</span>
                        <span>{{val.iconimg1}}</span>
                        <span class="cbody-new">{{val.iconimg2}}</span>
                    </div>
            </li>
        </ul>
        <div id="cfooter">
            <input type="text" placeholder="请输入评论">
            <button class="csent">
                发送
                <!--<i class="iconfont icon-icon_sent"></i>-->
            </button>
        </div>
    </div>
</template>
<!--<link rel="stylesheet" type="text/css" href="./topic_font/iconfont.css ">-->
<script>
     export default {
        name: "Comment",
        data(){
            return{
                cList:[
                    {
                       idimg:'./../../img/1230.jpg',
                       idname:'猫掉了',
                       idcomment:'产品非常好产品非常好产品非常好产品非常好产品非常好产品非常好产品非常好产品非常好',
                       datatime:'08-08',
                       number:'107',
                       iconimg1:'点赞',
                       iconimg2:'评论'
                    },
                    {
                        idimg:'./../../img/1230.jpg',
                        idname:'一戒',
                        idcomment:'产品非常好产品非常好产品非常好产品非常好产品非常好',
                        datatime:'08-10',
                        number:'15',
                        iconimg1:'点赞',
                        iconimg2:'评论'
                    },
                    {
                        idimg:'./../../img/1230.jpg',
                        idname:'柒',
                        idcomment:'产品非常好',
                        datatime:'08-19',
                        number:'67',
                        iconimg1:'点赞',
                        iconimg2:'评论'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .cimg{
        width: 1rem;
    }
    #comment{
        height: 12rem;
        background: white;
    }
    .cheader{
        height: 1rem;
        width: 100%;
        border-bottom: 0.001rem solid #c0c0c0;
        line-height: 1rem;
    }
    .cheader .return{
        height: 0.9rem;
        width: 1rem;
        font-size: 0.3rem;
        border:none;
    }
    .cheader span{
        font-size: 0.4rem;
        margin-left: 0.5rem;
    }
    .cbody{
        height: 11rem;
    }
    .cbody .cbody-idname{
        padding-left: 1.5rem;
        padding-top: 0.3rem;
    }
    .cbody .cbody-deg{
        display: block;
        height: 0.6rem;
        padding-left: 1.5rem;
    }
    .cbody li{
        height: 2rem;
        border-bottom: 0.001rem solid #c0c0c0;
    }
    .cbody li .cbody-comment{
        height: 1rem;
        margin-left: 1.5rem;
        margin-top: 0.2rem;
    }
    .cbody li .cbody-time{
        margin-right: 2.5rem;
    }
    .cbody li .cbody-new{
        margin-left: 0.3rem;
    }
    #cfooter{
        height: 1rem;
        border-top: 0.001rem solid #c0c0c0;
        line-height: 1rem;
        text-align: center;
    }
    #cfooter input{
        width: 5rem;
        font-size: 0.3rem;
        border: none;
        border-bottom: 0.001rem solid #000000;
    }
    #cfooter .csent{
        width: 1.2rem;
        font-size: 0.3rem;
        border: none;
        margin-top: 0.1rem;
    }
</style>