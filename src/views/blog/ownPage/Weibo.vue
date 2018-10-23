<template>
    <div class="ownPage">
        <div class="all-weibo">{{pageMessage.allBlog}}（59）</div>
        <div class="com">
            <Content></Content>
        </div>
    </div>
</template>
<script>
    import Content  from '@/views/blog/component/Content.vue';

    export default {
        data() {
            return {
                pageMessage: {
                    allBlog: this.$t('blog.allBlog'),
                }
            }
        },
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
