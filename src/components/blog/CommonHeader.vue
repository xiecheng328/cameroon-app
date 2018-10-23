<template>
    <mu-appbar class="head">
        <mu-button class="camera" flat to="">
            <img src="../../assets/img/cameralogo.png" alt="">
        </mu-button>
        <mu-button class="allAttention" flat to="/blog/details">全部关注</mu-button>
        <mu-button class="topic" flat to="/topic/recommend">话题</mu-button>
        <mu-button class="add" flat to="">
            <img src="../../assets/img/addlogo.png" alt="">
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

    .head .camera{
        width: 15%;
    }
    .head .allAttention{
        width: 35%;
    }
    .head .topic{
        width: 35%;
    }
    .head .add{
        width: 15%;
    }


</style>
