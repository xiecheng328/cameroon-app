<template>
    <div class="blog">
        <!--<h1>This is a message page</h1>-->
        <mu-appbar style="width: 100%; height: 50px;">
            <mu-button flat to="/blog/details" slot="left">全部关注</mu-button>
            <mu-button flat to="/blog/topic/recommend" @click="showSearchBtn" slot="left">话题</mu-button>
            <mu-auto-complete></mu-auto-complete>
            <mu-button icon slot="right">
                <mu-icon value="search"></mu-icon>
            </mu-button>
        </mu-appbar>
        <router-view></router-view>
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
