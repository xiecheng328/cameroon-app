<template>
    <!--姚之琳-->
    <div>
        <div class="searchBar">
            <mu-button icon slot="left" id="return" to="/topic/recommend">
                <mu-icon value="close" flat></mu-icon>
            </mu-button>
            <mu-auto-complete v-model="val"></mu-auto-complete>
            <mu-button icon slot="right" @click="add" id="searchicon">
                <mu-icon value="search"></mu-icon>
            </mu-button>
            <mu-divider></mu-divider>
        </div>
        <div class="topSearch">
            <mu-list>
                <span class="subtitle"></span>
                <mu-sub-header class="subtitle">{{topic.everyoneSearching}}</mu-sub-header>
                <ul>
                    <li v-for="(val,index) in hotList" class="excel">
                        {{index + 1}} {{val.content}}
                    </li>
                </ul>
            </mu-list>
        </div>
        <mu-divider></mu-divider>
        <div class="searchHistory">
            <mu-list>
                <div id="historyHeight">
                    <span id="history" class="subtitle">{{topic.historicalResearch}}</span>
                    <mu-button icon slot="right" id="icon" @click="deleteAll()">
                        <mu-icon value="delete"></mu-icon>
                    </mu-button>
                </div>

                <ul>
                    <li v-for="(content,index) in arr" class="historyList">
                        {{content.value}}
                        <mu-button icon slot="right" @click="del(index)" class="closeButton">
                            <mu-icon value="close" size=12></mu-icon>
                        </mu-button>
                    </li>
                </ul>
            </mu-list>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Search",
        data() {
            return {
                val: '',
                arr: [],
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
                },
                hotList: [
                    {
                        content: '小麦播种机使用方法',

                    },
                    {
                        content: '农机补贴价格表',

                    },
                    {
                        content: '最新小型农业机械',

                    },
                    {
                        content: '小麦玉米两用联合收割机',

                    },
                ]
            }
        },
        methods: {
            add() {
                if (this.val != '') {
                    this.arr.push({value: this.val});
                    this.val = '';
                }

            },
            del(index) {
                this.arr.splice(index, 1);
            },
            deleteAll() {
                this.arr = []
            },
        },
    }
</script>


<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        background: white;
    }

    #icon {
        float: right;
        height: 50px;
        width: 50px;
    }

    #history {
        float: left;
    }

    #historyHeight {
        height: 50px;
    }

    .excel {
        width: 50%;
        float: left;
    }

    .closeButton {
        float: right;
    }

    li, .subtitle {
        list-style: none;
        padding-left: 20px;
        height: 50px;
        line-height: 50px;
    }

    .searchBar {
        text-align: center;

    }

    #searchicon {
        float: right
    }

</style>
