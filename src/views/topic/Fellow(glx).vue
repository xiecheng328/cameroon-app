<template>
    <div id="contain">
        <router-link to="article" v-for="(val,index) in fList" :key="index" >
            <fellowList  :details="val"></fellowList>
        </router-link>

        <div class="load" v-show="isShow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
            <div id="oShow" v-show="true">没文章了,去推荐看看</div>
    </div>
</template>

<script>
    import fellowList from '../../components/topic/fellowList'
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
                        time:"7",
                        title:"今天开始收割",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"机器不错，天气也很好，稻子很干",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"如何加强农业发展",
                        videoSrc:"",
                        author:"rose",
                        article:"现代农业发展的一个重要指标就是农业机械化的发展。农业机械化发展是发展现代农业、" +
                            "推进农业产业化、集约化，推进农村经济发展的重要条件。",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"推广机制落后",
                        videoSrc:"",
                        author:"Micheal",
                        article:"在市场经济体系不断完善的基础上，农机市场得以全面开放，" +
                            "这种开放式的农机市场使原有的农机推广方式发生了一定的变革，" +
                            "农民不再是农业机械技术推广的被动接受者，而是变被动为主动，" ,
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false


                    }, {
                        focusPeople:"json",
                        time:"7",
                        title:"推广信息内容落后",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"部分乡镇存在忽视农业经济发展的现象，由于对农业发展缺乏重视，在进行农业生产时还采用原有的技术，没有根据农业技术的发展进行技术更新，致使农业发展长时间停留在一个阶段。",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3375143504,581016811&fm=27&gp=0.jpg",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"乡镇农业机械技术推广主体配备差",
                        videoSrc:"",
                        author:"rose",
                        article:"虽然，近些年我国已经认识到农业经济发展的重要性，" +
                            "针对农业机械技术的推广工作给予了更多的支持，" ,
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=684603144,15627662&fm=200&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true
                    },{
                        focusPeople:"json",
                        time:"7",
                        title:"今天开始收割",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"机器不错，天气也很好，稻子很干",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"如何加强农业发展",
                        videoSrc:"",
                        author:"rose",
                        article:"现代农业发展的一个重要指标就是农业机械化的发展。农业机械化发展是发展现代农业、" +
                            "推进农业产业化、集约化，推进农村经济发展的重要条件。",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"推广机制落后",
                        videoSrc:"",
                        author:"Micheal",
                        article:"在市场经济体系不断完善的基础上，农机市场得以全面开放，" +
                            "这种开放式的农机市场使原有的农机推广方式发生了一定的变革，" +
                            "农民不再是农业机械技术推广的被动接受者，而是变被动为主动，" ,
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false


                    }, {
                        focusPeople:"json",
                        time:"7",
                        title:"推广信息内容落后",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"部分乡镇存在忽视农业经济发展的现象，由于对农业发展缺乏重视，在进行农业生产时还采用原有的技术，没有根据农业技术的发展进行技术更新，致使农业发展长时间停留在一个阶段。",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3375143504,581016811&fm=27&gp=0.jpg",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"乡镇农业机械技术推广主体配备差",
                        videoSrc:"",
                        author:"rose",
                        article:"虽然，近些年我国已经认识到农业经济发展的重要性，" +
                            "针对农业机械技术的推广工作给予了更多的支持，" ,
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=684603144,15627662&fm=200&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true
                    },{
                        focusPeople:"json",
                        time:"7",
                        title:"今天开始收割",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"机器不错，天气也很好，稻子很干",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"大学生如何在堕落寝室",
                        videoSrc:"",
                        author:"rose",
                        article:"现代农业发展的一个重要指标就是农业机械化的发展。农业机械化发展是发展现代农业、" +
                            "推进农业产业化、集约化，推进农村经济发展的重要条件。",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"推广机制落后",
                        videoSrc:"",
                        author:"Micheal",
                        article:"在市场经济体系不断完善的基础上，农机市场得以全面开放，" +
                            "这种开放式的农机市场使原有的农机推广方式发生了一定的变革，" +
                            "农民不再是农业机械技术推广的被动接受者，而是变被动为主动，" ,
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false


                    }, {
                        focusPeople:"json",
                        time:"7",
                        title:"推广信息内容落后",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"部分乡镇存在忽视农业经济发展的现象，由于对农业发展缺乏重视，在进行农业生产时还采用原有的技术，没有根据农业技术的发展进行技术更新，致使农业发展长时间停留在一个阶段。",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3375143504,581016811&fm=27&gp=0.jpg",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"乡镇农业机械技术推广主体配备差",
                        videoSrc:"",
                        author:"rose",
                        article:"虽然，近些年我国已经认识到农业经济发展的重要性，" +
                            "针对农业机械技术的推广工作给予了更多的支持，" ,
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=684603144,15627662&fm=200&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true
                    },{
                        focusPeople:"json",
                        time:"7",
                        title:"今天开始收割",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"机器不错，天气也很好，稻子很干",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"如何加强农业发展",
                        videoSrc:"",
                        author:"rose",
                        article:"现代农业发展的一个重要指标就是农业机械化的发展。农业机械化发展是发展现代农业、" +
                            "推进农业产业化、集约化，推进农村经济发展的重要条件。",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"推广机制落后",
                        videoSrc:"",
                        author:"Micheal",
                        article:"在市场经济体系不断完善的基础上，农机市场得以全面开放，" +
                            "这种开放式的农机市场使原有的农机推广方式发生了一定的变革，" +
                            "农民不再是农业机械技术推广的被动接受者，而是变被动为主动，" ,
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false


                    }, {
                        focusPeople:"json",
                        time:"7",
                        title:"推广信息内容落后",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"部分乡镇存在忽视农业经济发展的现象，由于对农业发展缺乏重视，在进行农业生产时还采用原有的技术，没有根据农业技术的发展进行技术更新，致使农业发展长时间停留在一个阶段。",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3375143504,581016811&fm=27&gp=0.jpg",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title:"乡镇农业机械技术推广主体配备差",
                        videoSrc:"",
                        author:"rose",
                        article:"虽然，近些年我国已经认识到农业经济发展的重要性，" +
                            "针对农业机械技术的推广工作给予了更多的支持，" ,
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=684603144,15627662&fm=200&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true
                    },
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
