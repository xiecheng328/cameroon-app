<template>
    <!--尹航-->
    <div class="Ask-items">
        <mu-appbar style="width: 100%;background: #fff;" title="提问" >
            <mu-button  flat slot="left" to="/topic/recommend">
                <mu-icon value="close" flat>返回</mu-icon>
            </mu-button>
            <div class="cameroon-title"><h4>{{topic.askQuestion}}</h4></div>
            <mu-button   flat slot="right" to="/topic/alists" >OK</mu-button>
        </mu-appbar>
        <mu-container>
            <mu-text-field v-model="value15" :placeholder="topic.title" :max-length="10"></mu-text-field><br/>
            <mu-text-field v-model="value16" :placeholder="topic.addDescription" multi-line :rows="3" :max-length="100"></mu-text-field><br/>
        </mu-container>
        <mu-appbar style="width: 100%;background: #fff;" >
             <img class="bottom-img" src="../../assets/img/Aa.png" alt="">
            <img class="bottom-img" src="../../assets/img/photo.png" alt="">
            <img class="bottom-img" src="../../assets/img/video.png" alt="">
            <img class="bottom-img" src="../../assets/img/add.png" alt="">
            <img class="bottom-img" src="../../assets/img/左箭头.png" alt="">
            <img class="bottom-img" src="../../assets/img/右箭头.png" alt="">
            <img class="bottom-img" src="../../assets/img/设置.png" alt="">
        </mu-appbar>


    </div>
</template>

<script>
    export default {
        name: "PutQuestion",
        data () {
            return {
                value15: '',
                value16: '',
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
                    title:this.$t('topic.title'),
                    addDescription:this.$t('topic.addDescription')
                }
            }
        }


    }
</script>

<style scoped lang="scss">
    .container{
        height: 611px;
        background: white;
        .cameroon-title{
            margin-left: 65px;
        }
        .mu-input{
            margin-left: 65px;
            margin-top: 40px;
        }
    }
    .mu-button {
        margin: 6px 8px;
    }
    .bottom-img{
        width: 30px;
        height: 30px;
        margin-left: 20px;

    }
</style>