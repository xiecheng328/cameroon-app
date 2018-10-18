<template>
    <mu-appbar style="width: 100%; height: 50px;">
        <mu-button flat to="/blog/details" slot="left">全部关注</mu-button>
        <mu-button flat to="/blog/topic/recommend"  slot="left">话题</mu-button>
        <!--search路由跳转--修改-->
        <mu-auto-complete @click="jumptoSearch"></mu-auto-complete>
        <mu-button icon slot="right">
            <mu-icon value="search"></mu-icon>
        </mu-button>
    </mu-appbar>
</template>

<script>
    export default {
        name: "CommonHeader",
        methods:{
            //search跳转页面路由
            jumptoSearch(){
                this.$router.push('/blog/search')
            }
            //search跳转页面路由
        }
    }
</script>

<style scoped>

</style>