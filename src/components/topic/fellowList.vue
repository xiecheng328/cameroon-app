<template>
    <!--headPortrait:头像-->
    <!--name:点赞人-->
    <!--TUT:点赞时间(time up time)-->

    <div  id="container">
        <div id="headPortrait" class="headInformation HFborder"></div>
        <span class="headInformation"> &nbsp;</span>
        <span id="name" class="headInformation HFborder">{{details.focusPeople}}{{topic.endorsed}}</span>
        <span id="dian" class="headInformation HFborder">&nbsp;·&nbsp;</span>
        <div id="TUT" class="headInformation HFborder">{{details.time}}{{topic.minutesAgo}}</div>
        <div id="articleTitle">{{details.title}}</div>
        <div id="art" class="article" v-if=details.isShowVideo>
            <video id="oVd" @click="(event)=>{event.stopPropagation();}"
            :src="details.videoSrc" preload controls>your phone different support this  video frame</video>
        </div>
        <div id="article_img">
            <div id="articleDetails"><span>{{details.author}}：</span>
                <span>{{details.article}}</span>
            </div>
            <div id="pB" v-if=details.isShowImg class="publicityPictures" :style="{'background-image':'url('+details.imgSrc+')'}"></div>
        </div>
        <div id="fellowListBottom" class="HFborder">
            <span>{{details.agreeNum}}  {{topic.endorsed}}</span><span>&nbsp;·&nbsp;</span><span>{{details.commentNum}}  {{topic.comment}}</span>
        </div>
        </div>

</template>

<script>
    export default {
        name: "fellow_list",
        props:['details'],
        data(){
            return{
                det:{},
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
        },
        created(){
            // this.det = this.props.details
            // console.log(this.det);
                // if(this.props.details.videoSrc != ""){
                //     this.isShow = true;
                // }
        }

    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        body{
            background: black;
        }
    }
    #container{
        .HFborder{
            color: #8590a6;
        }
        width: 100%;
        height: 100%;
        color: black;
        margin-top:10px;
        margin-bottom:10px;
        padding: 10px;
        background: white;
        #oBo{
            width: 100%;
            height: 10px;
            background: grey;
            clear: both;
        }
        .headInformation{
            float: left;
            height: 25px;
            line-height: 25px;
            text-align: center;
            font-size: 13px;
        }
        #headPortrait{
            background-image: url("../../assets/img/headPortrait.jpeg");
            background-repeat: no-repeat;
            background-size:cover ;
            background-position: center;
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
        #articleTitle{
            clear: both;
            font-size: 20px;
        }
        .article {
            margin-outside: 5px;
            width: 100%;
            height: 100px;
            #oVd{
                height: 100%;
                width: 100%;
            }
        }
        #article_img{
            display: flex;
            height: 100%;
            width: 100%;
            #articleDetails{
                flex: 2;

            }
            .publicityPictures {
                flex: 1;
                height: 100px;
                width: 100px;
                margin-bottom: auto;
                margin-top: auto;
                /*background: url("../../assets/img/publicityPictures0.jpg");*/
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                /*border-radius: 10%;*/
            }
        }

    }

</style>
