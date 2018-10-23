<template>
    <div id="container">
        <router-link to="/topic/answer">
        <div id="asone">
            <div id="title">
                <div class="head"></div>
                <span>Des ménages agricoles</span>
            </div>
            <div id="contenta">
               <div id="iMg">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
               </div>
                <div id="article">
                    Avec la progression de l'époque, le développement agricole est directement lié à la productivité, et l'utilisation de la production agricole le plus important, c'est de la technologie des machines agricoles, de l'importance de la machine agricole, il convient tout d'abord de l'attention est à la manière de préserver la technologie des machines agricoles,
                </div>
            </div>
        </div>
        <div id="articleListBottom" class="HFborder">
            <span>2,095 start</span><span>&nbsp;·&nbsp;</span><span>3,758 comment</span>
            <span>&nbsp;·&nbsp;</span><span>三天前</span>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "articleListDetails"
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        #container{
            background-color: white;
            margin-bottom: 10px;
            #asone{
                #title{
                    padding: 10px;
                    .head{
                        background-image: url("../../assets/img/headPortrait.jpeg");
                        background-repeat: no-repeat;
                        background-size:cover ;
                        background-position: center;
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        float: left;
                        margin-right: 5px;
                        color: #000;
                    }
                    color: #000;
                }

                #contenta{
                    #article{
                        color: #000;
                    }
                    #iMg{
                        display: flex;
                        img{
                            flex: 1;
                            height: 60px;
                            overflow: hidden;
                        }
                    }
                }
            }
            #articleListBottom{
                color: #8590a6;
                font-size: 10px;
                padding: 5px;
                padding-left: 10px;
            }
        }
    }


</style>
