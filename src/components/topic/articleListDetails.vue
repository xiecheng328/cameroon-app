<template>
    <div id="container">
        <div id="asone">
            <div id="title">
                <div class="head"></div>
                <span>农机专业户</span>
            </div>
            <div id="contenta">
               <div id="iMg">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2055644088,766142526&fm=27&gp=0.jpg" alt="">
               </div>
                <div id="article">
                    随着时代的进步，农业发展直接关乎生产力，而农业生产中最主要的就是农业机械技术的使用，
                    重视农业机械技术首先应该关注的就是如何维护农业机械技术，
                </div>
            </div>
        </div>
        <div id="articleListBottom" class="HFborder">
            <span>2,095赞同</span><span>&nbsp;·&nbsp;</span><span>3,758评论</span>
            <span>&nbsp;·&nbsp;</span><span>三天前</span>
        </div>
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
                    }
                }

                #contenta{
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
