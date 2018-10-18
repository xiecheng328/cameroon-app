<template>
    <mu-appbar class="head">
        <mu-button class="camera" flat to="">111</mu-button>
        <mu-button class="allAttention" flat to="/blog/details">全部关注</mu-button>
        <mu-button class="topic" flat to="/blog/topic/recommend">话题</mu-button>
        <mu-button class="add" flat to="">222</mu-button>
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
        width: 35%;
    }
    .head .topic{
        width: 35%;
    }
    .head .add{
        width: 15%;
    }


</style>