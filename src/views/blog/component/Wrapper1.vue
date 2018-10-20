<template>
    <div id="per-wrapper">
        <div class="per-focus" @click="change">{{col}}</div>
        <div class="per-focus jubao">举报</div>
        <div class="per-focus">复制链接</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                col:"收藏"
            }
        },
        methods:{
            change(){
                this.col='已收藏'
            }
        }
    }
</script>
<style scoped lang="scss">
    #per-wrapper{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #ffffff;
        padding: 0.2rem 0;
        & .per-focus{
            float: left;
            height: 0.35rem;
            width: 32%;
            color:rgb(149,149,147);
            font-size: 16px;
            text-align: center;
            line-height: 0.35rem;

        }
        & .jubao{
            border-right: 1px solid gray;
            border-left: 1px solid gray;
        }
    }
</style>