<template>
    <li>
        <div class="left">
            <img src="../../../../assets/img/message_30a07a3203b47979cf5519981729f3d8.jpg" alt="">
        </div>
        <div class="right">
            <span class="name">{{list.name}}</span>q
            <p class="content">{{list.content}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "subScription_message",
        props:["list"]
    }
</script>

<style scoped lang="scss">
    /*li{*/
        /*display: flex;*/
        /*height: 60px;*/
        /*background-color:#ead4d4;*/
        /*margin-top: 5px;*/
        /*& .left{*/
            /*flex:0.6;*/
            /*!*text-align: center;*!*/
            /*margin-top: 10px;*/
        /*}*/
        /*& .right{*/
            /*flex: 3;*/
        /*}*/
        /*& img{*/
            /*height: 40px;*/
            /*width:40px;*/
            /*border-radius: 50%;*/
        /*}*/
        /*& .scrip{*/
            /*font-size: 17px;*/
        /*}*/
        /*& .content{*/
            /*font-size: 12px;*/
            /*color: #605b5b;*/
            /*margin: 0;*/
        /*}*/
    /*}*/
</style>
