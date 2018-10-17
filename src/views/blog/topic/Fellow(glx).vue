<template>
    <router-link to="" id="contain">
        <fellowList v-for="(val,index) in fList" :details="val"></fellowList>
        <div class="load" v-show="isShow">
            <img src="../../../assets/img/loading.gif" alt="">
        </div>
            <div id="oShow" v-show="true">没文章了,去推荐看看</div>
    </router-link>
</template>

<script>
    import fellowList from '../../../componentes/topic/fellowList'
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
                        videoSrc:"",
                        author:"steven",
                        article:"文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内" +
                            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容" +
                            "文章内容文章内容文章内容文章内容文章内容" +
                            "容",
                        agreeNum:2155,
                        commentNum:7588,
                        src:"./../../assets/img/publicityPictures0.jpg"
                    },
                    {
                        focusPeople:"ritle",
                        time:"四分钟前",
                        title:"大学生如何在堕落寝室",
                        videoSrc:"",
                        author:"rose",
                        article:"文章容",
                        agreeNum:7878,
                        commentNum:96696,
                        src:"./../../assest/img/publicityPictures1.jpg"

                    },
                    {
                        focusPeople:"json",
                        time:"八分钟前",
                        title:"出淤泥而不染",
                        videoSrc:"",
                        author:"Micheal",
                        article:"文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内" +
                            "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容" +
                            "文章内容文章内容文章内容文章内容文章内容" +
                            "容",
                        agreeNum:366,
                        commentNum:12,
                        src:"./../../assest/img/publicityPictures2.jpg"

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
