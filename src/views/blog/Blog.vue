<template>
    <div class="blog">
        <!--<h1>This is a message page</h1>-->
        <router-view name="header"></router-view>
        <router-view></router-view>
        <!--<router-link to="/ownPage/weibos">个人主页</router-link>-->
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showSearch: false,
            }
        },
        methods: {
            showSearchBtn() {
                this.showSearch = true;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import url("//unpkg.com/muse-ui@3.0.1/dist/muse-ui.css");

    .cameroon-search {
        display: none;
    }

    .mu-elevation-4 {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .mu-appbar {
        background-color: white;
    }
</style>
