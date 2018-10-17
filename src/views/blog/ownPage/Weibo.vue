<template>
    <div class="ownPage">
        <span>全部微博（59）</span>
        <div class="component">
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
    .ownPage span{
        color:rgb(149,149,147) ;
    }
    .component{
        height: 56%;
        width: 100%;
        border-top: 1px solid #ccc;
    }
</style>
