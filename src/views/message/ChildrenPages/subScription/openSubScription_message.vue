<template>
    <div class="box">
        <div class="timer">{{list.time}}</div>
        <h4 class="Otitle">{{list.title}}</h4>
        <div  class="container">
            <img src="../assets/message_30a07a3203b47979cf5519981729f3d8.jpg" alt="">
            <div class="line">--------------------------</div>
            <div class="full">阅读全文</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "openSubScription_message",
        props:["list"]
    }
</script>

<style scoped lang="scss">
    .container{
        & img{
            height: 114px;
            width:347px;
            margin-left: 14px;
        }
        & .full,& .line{
            margin-left: 14px;
        }
    }
    .Otitle{
        padding-left: 14px;
    }
    .box{
        margin: 10px 0 20px 0;
    }
    .timer{
        text-align: center;
    }
</style>