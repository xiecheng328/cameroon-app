<template>
    <!--韩瀚-->
    <div id="cameroon-topic">
        <router-view name="header"></router-view>
        <mu-appbar style="width: 100%;height: 30px;" title="">
            <mu-container class="button-wrapper">
                <mu-button flat to="/blog/topic/fellow">关注</mu-button>
                <mu-button flat to="/blog/topic/recommend">推荐</mu-button>
                <mu-button flat to="/blog/topic/hotlist">热榜</mu-button>
                <!--<mu-button flat to="/blog/topic/alists">回答</mu-button>-->
            </mu-container>
        </mu-appbar>
        <router-view></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Topic"
    }
</script>

<style scoped lang="scss">
    .mu-elevation-4{
        -webkit-box-shadow:none;
        box-shadow:none;
    }
    .mu-appbar{
        background-color: #ffffff;
    }
    #cameroon-topic{
    background: #eeeeee;
    }
    .button-wrapper {
        text-align: center;
        .mu-button{
            display: block;
            float: left;
            /*margin: 20px;*/
            width: 103px;
            height: 30px;
        }
        .router-link-active{
            border-bottom: solid 2px black;
        }
    }
</style>