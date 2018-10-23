<template>
    <!--朱琳-->
    <div class="cameroon-article">
        <mu-container>
            <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                <mu-card-header title="Myron Avatar" sub-title="sub title">
                    <mu-avatar slot="avatar">
                        <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg">
                    </mu-avatar>
                </mu-card-header>
                <mu-card-media title="Image Title" sub-title="Image Sub Title">
                    <img src="https://muse-ui.org/img/sun.a646a52d.jpg">
                </mu-card-media>
                <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
                <mu-card-text>
                    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                </mu-card-text>
                <!--<mu-card-actions>-->
                    <!--<mu-button flat>Action 1</mu-button>-->
                    <!--<mu-button flat>Action 2</mu-button>-->
                <!--</mu-card-actions>-->
            </mu-card>
        </mu-container>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return{
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
            }
        }
    }
</script>

<style scoped>

</style>