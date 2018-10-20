<template>
    <div id="content">
        <div id="head-portrait">
            <div id="head-img"></div>
            <div class="describe">
                <div class="username">昵称</div>
                <div class="content-time">1小时前</div>
            </div>

        </div>
        <div id="content-text">
            <p>            【河南夏邑借棚改之名强征千亩耕地 农业局称：土地权证发错了！】村里的一位老党员称，9月2日，乡政府组织村里开过一次村民代表大会，说的重点是棚户区改造的情况，当时乡党委书记董天成在会上明确表示，土地批文下来后才会征地。没想到会后第二天，就把耕地全部铲平了。
                <a href="">全文</a>
            </p>
        </div>
        <div id="operation">
            <div class="send">
                <div class="zf"></div>
                161
            </div>
            <div class="send">
                <div class="pl"></div>
                61
            </div>
            <div class="send">
                <div class="xh"></div>
                2350
            </div>
        </div>
    </div>
</template>
<script>

    export default {

    }
</script>
<style scoped lang="scss">
    #content{
        height:300px;
    }
    #head-portrait{
        height:26%;
        & .username{
            margin-left: 76px;
            color:rgb(0,183,225);
            font-size: 18px;
        }
        & .content-time{
            color: rgb(149,149,147);
            width: 36%;
            margin-left: 20%;
        }
    }
    #head-img {
        background: url("img/head.png");
        float: left;
        height: 68px;
        width: 66px;
        border: 1px solid #000;
        border-radius: 10px;
    }
    .describe{
        padding: 10px 0px;
    }
    #content-text{
        height:56%;
        overflow: hidden;
        span{
            color: #000000;
        }
    }
    #operation{
        height:14%;
        border-bottom: 1px solid #ccc;
        & .send{
            float: left;
            width: 33%;
            height:48px;
            line-height: 48px;
            font-size: 18px;
            color:rgb(149,149,147);;
            & .pl{
                background: url("img/pl.png") center no-repeat;
                background-size: 26px;
                float: left;
                margin-left: 16%;
                width: 46px;
                height:46px;

            }
            & .zf{
                background: url("img/zf.png") center no-repeat;
                background-size: 20px;
                float: left;
                margin-left: 16%;
                width: 46px;
                height:46px;
            }
            & .xh{
                background: url("img/xh.png") center no-repeat;
                background-size: 26px;
                float: left;
                margin-left: 16%;
                width: 46px;
                height:46px;
            }
        }
    }
</style>