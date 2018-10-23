<template>
    <div class="blog">
        <div id="background">
            <router-link to="/blog/details">
                <div id="return"></div>
            </router-link>
            <div class="bg-head-img"></div>
            <span>{{pageMessage.nickname}}</span>
            <div class="bg-attention">
                <div class="bg-fans-1">
                    {{pageMessage.attention}}：100
                </div>
                <div class="bg-fans">
                    {{pageMessage.fans}}：200
                </div>
            </div>

            <div class="introduction">{{pageMessage.introductionContent}}</div>
        </div>
        <div class="nav">
            <div class="nav-detail">
                <div><router-link to="/ownPage/weibos">{{pageMessage.blog}}</router-link></div>
            </div>
            <div class="nav-detail">
                <div><router-link to="/ownPage/photos">{{pageMessage.album}}</router-link></div>
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
        data(){
          return {
              pageMessage:{
                  nickname:this.$t('blog.nickname'),
                  attention:this.$t('blog.attention'),
                  fans:this.$t('blog.fans'),
                  album:this.$t('blog.album'),
                  introductionContent:this.$t('blog.introductionContent'),
                  blog:this.$t('blog.blog'),
              }
          }
        },
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
           width: 100%;
            position: absolute;
            top: 76%;
            left: 50%;
            clear: both;

            transform: translate(-50%,-50%);
            display: flex;

            & .bg-fans-1{
                z-index: 1;
                height: .4rem;
                flex: 1;
                border-right: 1px solid #fff;
                padding-right: .2rem;
                text-align: right;

            }
            & .bg-fans{
                z-index: 1;

                height:.4rem;
                flex: 1;
                margin-left: .2rem;

            }
        }
        & .introduction{
            position: absolute;
            top: 84%;
            left: 30%;
        }
    }
    .nav{
        display: flex;

    }
    .nav-msg{
        height: 2rem;
        width: 100%;
        border-top: 1px solid #ccc;
        line-height: 250%;

    }
    .nav-detail{
        flex: 1;
        float: left;
        width: 100%;
        height:100%;
        display: flex;
    }
    .nav-detail div{
        margin: 0 auto;
        width: 100%;
        flex: 1;
        height: 100%;
        font-size: 18px;
        text-align: center;
        line-height: 250%;
        a{
            display:block;
            width: 100%;
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