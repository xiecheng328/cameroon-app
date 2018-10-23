<template>
    <div id="whole">
        <div class="comment">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">
                <span class="color">{{pageMessage.nickname}}</span>
                <div>
                    {{pageMessage.agriculturalUseGood}}
                </div>
                <span>{{pageMessage.nHoursAgo}}</span>
            </div>

        </div>
        <div class="comment">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">
                <span class="color">{{pageMessage.nickname}}</span>
                <div>
                    {{pageMessage.agriculturalUseGood}}
                </div>
                <span>{{pageMessage.nHoursAgo}}</span>
            </div>

        </div>
    </div>

</template>
<script>
    export default {
        name: "CommentWb",
        data(){
            return {
                pageMessage:{
                    nickname:this.$t('blog.nickname'),
                    agriculturalUseGood:this.$t('blog.agriculturalUseGood'),
                    nHoursAgo:this.$t('blog.nHoursAgo'),
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
    .header img{
        width:1rem;
        flex:1;
        float:left;
        margin-left:20px;
        margin-right: 10px;
    }
    .content{
        flex:2;
        border-bottom: #999999 1px solid;
    }
    .comment{
        display:flex;
        margin-top:10px;
    }

.color{
    color:blue;
}

</style>