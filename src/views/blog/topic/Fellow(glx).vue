<template>
    <router-link to="" id="contain">
        <fellowList v-for="(val,index) in fList" :key="index" :details="val"></fellowList>
        <div class="load" v-show="isShow">
            <img src="../../../assets/img/loading.gif" alt="">
        </div>
            <div id="oShow" v-show="true">没文章了,去推荐看看</div>
    </router-link>
</template>

<script>
    import fellowList from '../../../components/topic/fellowList'
    export default {
        name: "fellow",
        components:{
            fellowList
        },
        data(){
            return {
                isShow:false,
                isEnd:false,
                fList:[
                    {
                        focusPeople:"json",
                        time:"七分钟前",
                        title:"颓废的一天又开始了",
                        videoSrc:"./../../testmp4.mp4",
                        author:"steven",
                        article:"文章内容",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"./../../publicityPictures1.jpg",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"四分钟前",
                        title:"大学生如何在堕落寝室",
                        videoSrc:"",
                        author:"rose",
                        article:"文章内容文章内容文章内容文章内容文章内容文章内容" +
                            "文章内容文章内容文章内容文",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"./../../publicityPictures4.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"八分钟前",
                        title:"出淤泥而不染",
                        videoSrc:"",
                        author:"Micheal",
                        article:"文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false


                    }
                ]
            }
        },
        created(){
            window.onscroll = ()=>{
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var cilentHeight = document.documentElement.clientHeight;
                if(scrollHeight - scrollTop == cilentHeight && !this.isEnd)
                {
                    // this.isShow = true;
                    console.log("到底了");
                }
            }
            var val = {}
            // for (val in this.fList)
            // {
            //     if(this.fList[val].videoSrc == "")
            //     {
            //         this.fList[val].isShowVideo == false;
            //         if(this.fList[val].imgSrc == "")
            //         {
            //             this.fList[val].isShowImg == false
            //         }else {
            //             this.fList[val].isShowImg == true
            //         }
            //     }else {
            //         this.fList[val].isShowVideo == true;
            //         this.fList[val].isShowImg == false
            //     }
            //     console.log(this.fList[val])
            // }
        }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        body{
            background: #cccccc;
            #contain{
                #load{
                    text-align: center;
                }
                #oShow{
                    color: black;
                    padding: 10px;
                    width: 100%;
                    height: 200px;
                    text-align: center;
                }
            }

        }
    }
</style>
