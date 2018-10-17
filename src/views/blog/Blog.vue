<template>
    <div class="blog">
        <!--<h1>This is a message page</h1>-->
        <mu-appbar style="width: 100%; height: 50px;" title="Title">
            <mu-container class="button-wrapper">
                <mu-button flat to="/blog/details">全部关注</mu-button>
                <mu-button flat to="/blog/topic/recommend">话题</mu-button>
            </mu-container>
        </mu-appbar>
        <router-view></router-view>
    </div>
</template>
<style scoped lang="scss">
    .mu-elevation-4{
        -webkit-box-shadow:none;
        box-shadow:none;
    }
    .mu-appbar{
        background-color: white;
    }
</style>
