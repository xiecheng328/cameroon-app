<template>
    <mu-appbar class="head">
        <mu-button class="camera" flat to="">
            <img src="../../assets/img/相机.png" alt="">
        </mu-button>
        <mu-button class="allAttention" flat to="/blog/details">全部关注</mu-button>
        <mu-button class="topic" flat to="/blog/topic/recommend">话题</mu-button>
        <mu-button class="add" flat to="">
            <img src="../../assets/img/加号.png" alt="">
        </mu-button>
    </mu-appbar>
</template>

<script>
    export default {
        name: "CommonHeader",
        methods:{

        }
    }
</script>

<style scoped>

    .head .camera{

        width: 15%;
    }
    .head .allAttention{
        font-size: 16px;

        width: 35%;
    }
    .head .topic{

        font-size: 16px;

        width: 35%;
    }
    .head .add{
        width: 15%;
    }

</style>