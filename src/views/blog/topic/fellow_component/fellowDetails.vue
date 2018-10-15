<template>
    <!--headPortrait:头像-->
    <!--name:点赞人-->
    <!--TUT:点赞时间(time up time)-->
    <div id="container">
      <div id="headPortrait" class="headInformation"></div>
        <span class="headInformation"> &nbsp;</span>
        <span id="name" class="headInformation">guuuu赞了你的回答</span>
        <span id="dian" class="headInformation">&nbsp;·&nbsp;</span>
        <div id="TUT" class="headInformation">六分钟前</div>
        <h4 id="articleTitle">大学生如何在堕落的寝室中出淤泥而不染？</h4>
        <!--<div id="article">-->
            <!--<div id="articleDetails">用户名：文章内容文章内容文章内容文章内容文-->
                <!--章内容文章内容文章内容文章内容文章内容文章内容文章内容-->
                <!--文章内容文章内容文章内容文章内容文章内容文章内容文章内容-->
                <!--文章内容文章内容文章内容文章内容文章内容-->
            <!--</div>-->
            <!--<div id="publicityPictures"></div>-->
        <!--</div>-->
        <video id="oVd" src="../../../../assets/testmp4.mp4" autoplay preload controls>您的浏览器不支持video标签</video>
        <div id="fellowListBottom">
            <span>2121赞同</span><span>&nbsp;·&nbsp;</span><span>时间</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fellow_list",

    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    #container{
        .headInformation{
            float: left;
            height: 25px;
            line-height: 25px;
            text-align: center;
            font-size: 13px;
        }
        #headPortrait{
            background-image: url("../../../../assets/headPortrait.jpeg");
            background-repeat: no-repeat;
            background-size:cover ;
            background-position: center;
            width: 25px;
            height: 25px;
            border-radius: 50%;

        }
        #articleTitle{
            clear: both;
            /*font-size: 20px;*/
        }
        #article{
            margin-outside: 5px;
            width: 100%;
            height: 100px;
            display: flex;
            #articleDetails{
                height: 80px;
                text-align: center;
                overflow: hidden;
                margin-top: auto;
                margin-bottom:auto ;
                flex: 2;
            }
            #publicityPictures{
                flex: 1;
                width: 100%;
                height: 100%;
                background: url("../../../../assets/publicityPictures.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                /*border-radius: 10%;*/
            }
        }
        #fellowListBottom{

        }
        #oVd{
            width: 100%;
            height: 100px;
        }
    }


</style>
