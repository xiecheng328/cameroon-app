<template>
    <div id="whole">
        <div class="comment">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">
                <span class="color">昵称</span>
                <div>
                    农机使用效果非常好
                </div>
                <span>1小时前</span>
            </div>

        </div>
        <div class="comment">
            <div class="header">
                <img src="../component/img/head.png" alt="">
            </div>
            <div class="content">
                <span class="color">昵称</span>
                <div>
                    农机使用效果非常好
                </div>
                <span>1小时前</span>
            </div>

        </div>
    </div>

</template>
<script>
    export default {
        name: "CommentWb"
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