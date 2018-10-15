<template>
    <div class="blog">
        <div class="blog-head">
            <div class="blog-head-camera"></div>

            <div class="blog-head-middle">
                <router-link to="/blog/details" class="blog-head-attention">全部关注</router-link>
                <router-link to="/blog/topic" class="blog-head-topic">话题</router-link>
            </div>

            <div class="blog-head-add"></div>


        </div>
        <router-view></router-view>
    </div>
</template>


<style scoped lang="scss">
    .blog-head{
        display: flex;
        height: 1rem;
        border-bottom: 1px solid #ccc;
    }
    .blog-head .blog-head-camera{
        flex: 20;
        height: 100%;
     }
    .blog-head .blog-head-middle{
        display: flex;
        flex: 60;
        height: 100%;
    }
    .blog-head .blog-head-add{
        flex: 20;
        height: 100%;
    }

    .blog-head .blog-head-middle>a{
        flex: 1;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        color: black;
        font-size: .3rem;
        font-weight: 600;
    }
    .blog-head .blog-head-middle>a:hover{
        border-bottom: 1px solid blue;
    }

    .blog-head .blog-head-middle .blog-head-attention::after{
        content: '';
        border:.1rem solid transparent;
        border-top-color: black;
        position: relative;
        top:.23rem;
        left: .1rem;
    }




</style>
