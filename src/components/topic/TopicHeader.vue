<template>
    <div class="cameroon-TopicBar">
        <mu-appbar style="width: 100%; height: 50px;">
            <mu-button flat to="/blog/details" slot="left">{{topic.allConcerns}}</mu-button>
            <mu-button flat to="/topic/fellow" slot="left">{{topic.topic}}</mu-button>
            <mu-button flat to="/topic/putquestion" slot="left">{{topic.askQuestion}}</mu-button>
            <!--search路由跳转--修改-->
            <mu-button icon slot="right" to="/topic/search">
                <mu-icon value="search"></mu-icon>
            </mu-button>
        </mu-appbar>
        <mu-appbar style="width: 100%;height: 30px;" title="">
            <mu-container class="button-wrapper">
                <mu-button flat to="/topic/fellow">{{topic.watch}}</mu-button>
                <mu-button flat to="/topic/recommend">{{topic.recommend}}</mu-button>
                <mu-button flat to="/topic/hotlist">{{topic.hotList}}</mu-button>
                <!--<mu-button flat to="/blog/topic/alists">回答</mu-button>-->
            </mu-container>
        </mu-appbar>
    </div>
</template>

<script>
    import Search from '@/views/topic/Search.vue'
    export default {
        name: "CommonHeader",
        data() {
            return {
                topic: {
                    allConcerns: this.$t('topic.allConcerns'),
                    topic: this.$t('topic.topic'),
                    watch: this.$t('topic.watch'),
                    askQuestion: this.$t('topic.askQuestion'),
                    recommend: this.$t('topic.recommend'),
                    hotList: this.$t('topic.hotList'),
                    everyoneSearching: this.$t('topic.everyoneSearching'),
                    historicalResearch: this.$t('topic.historicalResearch'),
                    endorsed: this.$t('topic.endorsed'),
                    comment: this.$t('topic.comment'),
                    minutesAgo: this.$t('topic.minutesAgo'),
                    attention: this.$t('topic.attention'),
                }
            };
        },
        methods: {
            //search跳转页面路由
            jumptoSearch() {
                this.$router.push('/blog/search')
            }
            //search跳转页面路由
        },
        components: {
            Search
        }
    }
</script>

<style scoped lang="scss">
    .mu-elevation-4 {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .mu-appbar {
        background-color: #ffffff;
    }

    #cameroon-topic {
        background: #eeeeee;
    }

    .button-wrapper {
        text-align: center;
        .mu-button {
            display: block;
            float: left;
            /*margin: 20px;*/
            width: 103px;
            height: 30px;
        }
        .router-link-active {
            border-bottom: solid 2px black;
        }
    }
</style>