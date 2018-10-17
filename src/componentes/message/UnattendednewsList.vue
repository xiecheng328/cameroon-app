<template>
    <li>
        <div class="left">
            <img src="../../assets/img/1230.jpg" alt="">
        </div>
        <div class="right">
            <span class="name"> {{list.name}} </span>
            <p class="time"> {{list.time}} </p>
            <p class="content">{{list.content}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "Unattended-news",
        props:['list']

    }
</script>

<style scoped lang="scss">
    li{
        display:flex;
        margin-top:5px;
        height:70px;
        background-color: #ece1e1;
        & .left{
            flex: 0.6;
            text-align: center;
        }
        & .right{
            flex: 3;
        }
        & img{
            width:40px;
            height:40px;
            border-radius: 50%;
            margin-top: 10px;
        }
        & .name{
            font-size: 17px;
        }
        & .time{
            float:right;
            font-size: 14px;
            padding-top: 5px;
            padding-right: 10px;
        }
        & .content{
            font-size: 12px;
        }
    }
</style>