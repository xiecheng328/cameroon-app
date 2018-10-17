<template>
    <div class="blog">
        <!--<h1>This is a message page</h1>-->
        <router-link to="/blog/details">全部关注</router-link>
        |
        <router-link to="/blog/topic/recommend">话题</router-link>
        <router-view></router-view>
    </div>
</template>
