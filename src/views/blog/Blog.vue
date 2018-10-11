<template>
  <div class="blog">
    <h1>This is a blog page</h1>
    <router-link to="/blog/details">detail子路由</router-link>  |
    <router-link to="/blog/list">list子路由</router-link>
    <router-view></router-view>
  </div>
</template>
