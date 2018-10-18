<template>
    <div class="blog">
        <div id="background">
            <div class="bg-head-img"></div>
            <span>昵称</span>
            <div class="bg-attention">
                <div class="bg-fans-1">
                    关注：100
                </div>
                <div class="bg-fans">
                    粉丝：200
                </div>
            </div>

            <div class="introduction">简介内容</div>
        </div>
        <div class="nav">
            <div class="nav-detail">
                <div><router-link to="/ownPage/weibos">微博</router-link></div>
            </div>
            <div class="nav-detail">
                <div><router-link to="/ownPage/photos">相册</router-link></div>
            </div>
        </div>
        <div class="nav-msg">
            <router-view></router-view>
        </div>
        <div id="component">

        </div>
        <div class="nav">
            <slot>组件</slot>
        </div>
    </div>
</template>
<script>
    import Wrapper from '@/views/blog/component/Wrapper.vue';


    export default {
        components: {
            Wrapper
        },
    }
</script>
<style scoped lang="scss">
    .blog{
        width: 100%;
        height:100%;
    }
    #background{
        background:url("component/img/bg.png") center no-repeat;
        background-size: 400px;
        height:30%;
        width: 100%;
        color:#ffffff;
        position:relative;
        & .bg-head-img{
            background: url("component/img/head.png");
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%,-50%);
            height:66px;
            width:66px;
            border:1px solid #000;
            border-radius: 10px;
        }
        span{
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 16px;
        }
        & .bg-attention{
            font-size: 14px;
            height:24px;
            width: 180px;
            position: absolute;
            top: 76%;
            left: 50%;
            transform: translate(-50%,-50%);

            & .bg-fans-1{
                float: left;
                height:24px;
                width: 90px;
                border-right: 1px solid #000;
                padding: 0px 10px;
            }
            & .bg-fans{
                position: absolute;
                left:50%;
                height:24px;
                width: 90px;
                padding-left: 16px;
            }
        }
        & .introduction{
            position: absolute;
            top: 84%;
            left: 42%;
        }
    }
    .nav{
        height: 8%;
        width: 100%;
        border-top: 1px solid #ccc;
        z-index: 1;
    }
    .nav-msg{
        height: 6%;
        width: 100%;
        border-top: 1px solid #ccc;
        line-height: 250%;
    }
    .nav-detail{
        float: left;
        width: 50%;
        height:100%;
        display: flex;
    }
    .nav-detail div{
        float: left;
        flex: 0.5;
        height: 100%;
        margin-left: 28%;
        font-size: 18px;
        text-align: center;
        line-height: 250%;
        a{
            color:rgb(149,149,147);
            padding: 10px;
            &.router-link-exact-active {
                color: rgb(0,183,225);
                border-bottom: 1px solid rgb(0,183,225);
            }
        }

    }
    #component{
        height: 56%;
        width: 100%;
    }
</style>