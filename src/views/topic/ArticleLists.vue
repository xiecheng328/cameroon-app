<template>
    <!--郑长庆-->
    <div id="container">
        <div  id="header">
            <div id="pad">
                <h3>如何将农业发展的更好？</h3>
                <div id="top">
                    <span>11693人关注&nbsp;&nbsp;&nbsp;15条评论</span>
                    <!--<input  >+关注问题</input>-->
                    <input type="button" value="+关注问题" id="btn">
                </div>
            </div>
            <div id="select">
                <mu-button>邀请回答</mu-button>
                <mu-button>添加回答</mu-button>
            </div>
        </div>
        <div id="remind">
            <span>1119个回答</span>
            <span id="sort">默认排序&nbsp</span>
        </div>

        <articleListDetails v-for="i in 4"></articleListDetails>
    </div>

</template>

<script>
    import articleListDetails from '../../components/topic/articleListDetails'
    export default {
        name: "ArticleLists",
        components:{
            articleListDetails
        },
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        body{
            background: #cccccc;
            #container{
                border-top: solid 0.25px;
                #header{
                    background-color: white;
                    #pad{
                        padding: 10px;
                        #top{
                            height: 40px;
                            line-height: 40px;
                            position: relative;
                            #btn{
                                margin-top: 5px;
                                position: absolute;
                                right: 10px;
                                width: 80px;
                                height: 30px;
                                line-height: 30px;
                                border-radius: 5px;
                                border: 0;
                                background-color: rgb(15, 136, 235);
                                color: white;
                                text-align: center;
                            }
                        }
                    }
                    #select{
                        height: 36px;
                        .mu-raised-button{
                            border-top: solid 0.5px;
                            position: relative;
                            color: #8590a6;
                            width: 50%;
                            height: 100%;
                        }
                    }
                }
                #remind{
                    padding: 5px;
                    position: relative;
                    #sort{
                        position: absolute;
                        right: 5px;
                    }
                }
             }

        }
    }



</style>
