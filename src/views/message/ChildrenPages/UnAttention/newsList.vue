<template>
    <li>
        <div class="left">
            <img src="../../../public/img/1230.jpg" alt="">
        </div>
        <div class="right">
            <span class="name">{{list.name}}</span>
            <p class="time">{{list.time}}</p>
            <p class="content">{{list.content}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "UnattendadnewsList",
        props:["list"]
    }
</script>

<style scoped lang="scss">
li{
    display: flex;
    height: 60px;
    background-color:#ead4d4;
    margin-top: 5px;
    & .left{
        flex:0.6;
        text-align: center;
        margin-top: 10px;
    }
    & .right{
        flex: 3;
    }
    & img{
        height: 40px;
        width:40px;
        border-radius: 50%;
    }
    & .name{
        font-size: 17px;
    }
    & .time{
        float: right;
        font-size: 13px;
        padding-right: 7px;
        padding-top: 5px;
    }
    & .content{
        font-size: 12px;
        color: #605b5b;
    }
}
</style>