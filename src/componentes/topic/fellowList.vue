<template>
    <!--headPortrait:头像-->
    <!--name:点赞人-->
    <!--TUT:点赞时间(time up time)-->
    <div id="container">
        <div id="headPortrait" class="headInformation HFborder"></div>
        <span class="headInformation"> &nbsp;</span>
        <span id="name" class="headInformation HFborder">guuuu赞了你的回答</span>
        <span id="dian" class="headInformation HFborder">&nbsp;·&nbsp;</span>
        <div id="TUT" class="headInformation HFborder">六分钟前</div>
        <div id="articleTitle">大学生如何在堕落的寝室中出淤泥而不染？</div>
        <div id="article">
                <video  id="oVd" src="../../assets/testmp4.mp4" preload controls>您的浏览器不支持video标签</video>
        </div>
        <div id="article_img">
            <div id="articleDetails"><span>用户名：</span>
                <span>文章内容文章内容文章内容文章内容文
                章内容文章内容文章内容文章内容文章内容文章内容文章内容</span>
            </div>
            <div class="publicityPictures"></div>
        </div>
        <div id="fellowListBottom" class="HFborder">
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
        body{
            background: black;
        }
    }
    #container{
        .HFborder{
            color: #8590a6;
        }
        width: 100%;
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
        #article {
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
            #articleDetails{
                flex: 2;
            }
            .publicityPictures {
                flex: 1;
                background-image: url("../../assets/img/publicityPictures.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                /*border-radius: 10%;*/
            }
        }

    }

</style>
