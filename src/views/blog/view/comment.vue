<template>
    <div>
        <div id="container-span">
            <span @click="jump">转发109</span>
            <span>评论8989</span>
            <span>点赞908</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        methods:{
            jump(){
                this.$router.push('/blog/passage/report');
            }
        }

    }
</script>

<style scoped>
    #container-span{
        background: white;
        height: .8rem;
        display: flex;
    }
    span{
        text-align: center;
        flex: 1;
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

