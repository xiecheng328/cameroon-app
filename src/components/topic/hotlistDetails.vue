<template>
    <div>
    <div id="topic">
        <div id="serialNumber">{{index+1}}</div>
        <div id="title">
          {{val.title}}
            <!--<div id="">1130万热度</div>-->
            <!--<div>sss</div>-->
            <div id="praise" >{{val.hot}}  {{topic.comment}}</div>
        </div>
        <div id="IMG" :style="{'background-image':'url('+val.src+')'}"></div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "hotlistDetails",
        props:['val','index'],
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

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        #topic{
            background: white;
            width: 100%;
            display: flex;
            clear: both;
            margin-bottom: 10px;
            margin-top: 10px;
            padding: 0.1rem;
            #serialNumber{
                width: 30px;
                font-size: 20px;
                color: red;
            }
            #title{
                flex: 3;
                float: left;
                text-align: center;
                line-height: 100%;
                position: relative;
                top: 0.05rem;
                color: black;
                #praise{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    font-size: 10px;
                    color: #8590a6;
                }
            }
            #IMG{
                float: left;

                width: 100px;
                margin: auto;
                height: 60px;
                /*background: black;*/
                background: url("../../../public/img/1230.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                line-height: 100%;
                flex: 1;

            }
        }
    }
    /**{*/
    /*margin:0;*/
    /*padding: 0;*/
    /*}*/
    /*#topic{*/
    /*height:85px;*/
    /*border-bottom:solid 1.5px gainsboro;*/
    /*!*position: absolute;*!*/

    /*flex:2;*/
    /*}*/
    /*#listone{*/
    /*margin-top: 10px;*/
    /*!*position: relative;*!*/
    /*}*/
    /*#listtwo{*/
    /*margin-top: 45px;*/
    /*color:gainsboro;*/
    /*}*/
    #jpg {
        background-image: url("../../../public/img/1230.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        /*width: 70px;*/
    }

    /*}*/
</style>
