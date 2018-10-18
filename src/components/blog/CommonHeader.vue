<template>
    <mu-appbar style="width: 100%; height: 50px;">
        <mu-button flat to="/blog/details" slot="left">全部关注</mu-button>
        <mu-button flat to="/blog/topic/recommend"  slot="left">话题</mu-button>
        <mu-auto-complete></mu-auto-complete>
        <mu-button icon slot="right">
            <mu-icon value="search"></mu-icon>
        </mu-button>
    </mu-appbar>
</template>

<script>
    export default {
        name: "CommonHeader"
    }
</script>

<style scoped>

</style>