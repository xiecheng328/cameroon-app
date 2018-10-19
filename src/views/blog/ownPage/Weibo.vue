<template>
    <div class="ownPage">
        <div class="all-weibo">全部微博（59）</div>
        <div class="com">
            <Content></Content>
        </div>
    </div>
</template>
<script>
    import Content  from '@/views/blog/component/Content.vue';

    export default {
        components: {
            Content
        },
    }
</script>
<style>
    .ownPage .all-weibo{
        color:rgb(149,149,147) ;
        padding: 10px 0px;
        border-top:1px solid #ccc;
    }
    .com{
        height: 56%;
        width: 100%;
        border-top: 1px solid #ccc;
    }
</style>
