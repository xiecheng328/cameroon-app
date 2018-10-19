<template>
    <div id="container-span">
        <span>转发1098</span>
        <span>评论8989</span>
        <span>点赞908</span>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped>
    #container-span{
        background: white;
        height: .8rem;
    }
    span{
        height :100%;
        line-height: .8rem;
        color: gray;
        font-weight: 200;
        margin: auto 10px;
    }
    span:hover{
        color:blue;
        border-bottom: 1px solid blue;
    }
</style>