<template>
    <div>
        <div class="repost">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">
                <span class="color">昵称</span>
                <div>
                    评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                </div>
                <span>1小时前</span>
            </div>

        </div>
        <div class="repost">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="repost">
                <span class="color">昵称</span>
                <div>
                    评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                </div>
                <span>1小时前</span>
            </div>

        </div>
    </div>

</template>
<script>
    export default {
        name: "RepostWb"
    }
</script>
<style scoped lang="scss">
    *{
        margin:0;
        padding:0;
    }
    .header img{
        width:1rem;
        flex:1;
        float:left;
        margin-right: 10px;
    }
    .content{
        flex:2;
        border-bottom: #999999 1px solid;
    }
    .repost{
        display:flex;
        margin-top:10px;
    }

    .color{
        color:blue;
    }

</style>