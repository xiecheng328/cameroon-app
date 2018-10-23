<template>
    <div id="whole">
        <div class="like">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">{{pageMessage.nickname}}</div>
        </div>
        <div class="like">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">{{pageMessage.nickname}}</div>
        </div>
        <div class="like">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">{{pageMessage.nickname}}</div>
        </div>
        <div class="like">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">{{pageMessage.nickname}}</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LikeWeibo",
        data(){
            return {
                pageMessage:{
                    nickname:this.$t('blog.nickname'),

                }
            }
        },
    }
</script>

<style scoped lang="scss">
    *{
        margin:0;
        padding:0;
    }
    #whole{
        background: #ffffff;
    }
    .like{
         display:flex;
         margin-top:10px;
     }
    .header img{
        width:1rem;
        flex:1;
        float:left;
        margin-left: 10px;
    }
    .content{
        margin-left:10px;
        flex:2;
        border-bottom: #999999 1px solid;
        color:blue;
        line-height: 1rem;
    }
</style>