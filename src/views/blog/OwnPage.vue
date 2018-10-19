<template>
    <div class="blog">
        <div id="background">
            <router-link to="/blog/details">
                <div id="return"></div>
            </router-link>
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
        <router-view></router-view>
        <div id="component">

        </div>
        <div class="nav">

        </div>
        <Wrapper></Wrapper>
    </div>
</template>
<script>
    import Wrapper from '@/views/blog/component/Wrapper.vue';
    import Content from '@/views/blog/component/Content.vue';

    export default {
        components: {
            Wrapper,Content
        },
    }
</script>
<style scoped lang="scss">
    body{
        padding: 0;
        margin: 0;
        font-size: 100px;
    }
    .blog{

    }
    #return{
        width: .2rem;
        height: .3rem;
        background: url("component/img/return.png") center no-repeat;
        padding: .6rem .4rem;
        background-size: 0.6rem;
    }
    #background{
        background:url("component/img/bg.png") center no-repeat;
        background-size: 400px;
        height:3rem;
        width: 100%;
        color:#ffffff;
        position:relative;
        & .bg-head-img{
            background: url("component/img/head.png");
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%,-50%);
            height:1.2rem;
            width:1.2rem;
            border:1px solid #000;
            border-radius: .1rem;
        }
        span{
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: .3rem;
        }
        & .bg-attention{
            font-size: .2rem;
            height:.6rem;
            width: 3rem;
            position: absolute;
            top: 76%;
            left: 50%;
            transform: translate(-50%,-50%);

            & .bg-fans-1{
                float: left;
                height: .4rem;
                width: 1.5rem;
                border-right: 1px solid #fff;
                padding: 0 .1rem;
            }
            & .bg-fans{
                position: absolute;
                left:50%;
                height:.4rem;
                width: 1.5rem;
                padding-left: .4rem;
            }
        }
        & .introduction{
            position: absolute;
            top: 84%;
            left: 42%;
        }
    }
    .nav{

    }
    .nav-msg{
        height: 2rem;
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
        height: 7rem;
        width: 100%;
    }
</style>