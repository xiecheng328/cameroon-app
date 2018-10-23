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
                        title: "Le début de la récolte aujourd'hui",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"Machine de bien, c'est très bien, le riz est sèche",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false
                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title: "Comment renforcer le développement de l'agriculture",
                        videoSrc:"",
                        author:"rose",
                        article:"Un indicateur important pour le développement de l'agriculture moderne est la mécanisation agricole de développement.Machine agricole de développement est le développement de l'agriculture moderne, "+
                            "La promotion de l'industrie, de l'agriculture intensive, condition essentielle pour promouvoir le développement de l'économie rurale.",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true
                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"Le mécanisme d'extension vers l'arrière",
                        videoSrc:"",
                        author:"Micheal",
                        article:"Sur la base du système d'amélioration continue de l'économie de marché, le marché agricole peut être complètement ouverte, ",
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false
                    }, {
                        focusPeople:"json",
                        time:"7",
                        title: "Le début de la récolte aujourd'hui",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"Machine de bien, c'est très bien, le riz est sèche",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false
                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title: "Comment renforcer le développement de l'agriculture",
                        videoSrc:"",
                        author:"rose",
                        article:"Un indicateur important pour le développement de l'agriculture moderne est la mécanisation agricole de développement.Machine agricole de développement est le développement de l'agriculture moderne, "+
                            "La promotion de l'industrie, de l'agriculture intensive, condition essentielle pour promouvoir le développement de l'économie rurale.",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"Le mécanisme d'extension vers l'arrière",
                        videoSrc:"",
                        author:"Micheal",
                        article:"Sur la base du système d'amélioration continue de l'économie de marché, le marché agricole peut être complètement ouverte, ",
                          agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false
                    },
                    {
                        focusPeople:"json",
                        time:"7",
                        title: "Le début de la récolte aujourd'hui",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"Machine de bien, c'est très bien, le riz est sèche",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title: "Comment renforcer le développement de l'agriculture",
                        videoSrc:"",
                        author:"rose",
                        article:"Un indicateur important pour le développement de l'agriculture moderne est la mécanisation agricole de développement.Machine agricole de développement est le développement de l'agriculture moderne, "+
                            "La promotion de l'industrie, de l'agriculture intensive, condition essentielle pour promouvoir le développement de l'économie rurale.",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"Le mécanisme d'extension vers l'arrière",
                        videoSrc:"",
                        author:"Micheal",
                        article:"Sur la base du système d'amélioration continue de l'économie de marché, le marché agricole peut être complètement ouverte, ",
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false
                    }, {
                        focusPeople:"json",
                        time:"7",
                        title: "Le début de la récolte aujourd'hui",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"Machine de bien, c'est très bien, le riz est sèche",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title: "Comment renforcer le développement de l'agriculture",
                        videoSrc:"",
                        author:"rose",
                        article:"Un indicateur important pour le développement de l'agriculture moderne est la mécanisation agricole de développement.Machine agricole de développement est le développement de l'agriculture moderne, "+
                            "La promotion de l'industrie, de l'agriculture intensive, condition essentielle pour promouvoir le développement de l'économie rurale.",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true



                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"Le mécanisme d'extension vers l'arrière",
                        videoSrc:"",
                        author:"Micheal",
                        article:"Sur la base du système d'amélioration continue de l'économie de marché, le marché agricole peut être complètement ouverte, ",
                        agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false
                    },
                    {
                        focusPeople:"json",
                        time:"7",
                        title: "Le début de la récolte aujourd'hui",
                        videoSrc:"./../../test.mp4",
                        author:"steven",
                        article:"Machine de bien, c'est très bien, le riz est sèche",
                        agreeNum:2155,
                        commentNum:7588,
                        imgSrc:"",
                        isShowVideo:true,
                        isShowImg:false

                    },
                    {
                        focusPeople:"ritle",
                        time:"4",
                        title: "Comment renforcer le développement de l'agriculture",
                        videoSrc:"",
                        author:"rose",
                        article:"Un indicateur important pour le développement de l'agriculture moderne est la mécanisation agricole de développement.Machine agricole de développement est le développement de l'agriculture moderne, "+
                            "La promotion de l'industrie, de l'agriculture intensive, condition essentielle pour promouvoir le développement de l'économie rurale.",
                        agreeNum:7878,
                        commentNum:96696,
                        imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2856070669,1185745263&fm=27&gp=0.jpg",
                        isShowVideo:false,
                        isShowImg:true
                    },
                    {
                        focusPeople:"json",
                        time:"8",
                        title:"Le mécanisme d'extension vers l'arrière",
                        videoSrc:"",
                        author:"Micheal",
                        article:"Sur la base du système d'amélioration continue de l'économie de marché, le marché agricole peut être complètement ouverte, ",
                           agreeNum:366,
                        commentNum:12,
                        imgSrc:"",
                        isShowVideo:false,
                        isShowImg:false
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
