<template>
    <li id="news"  @click="Chatroom">
        <div class="news-left">
            <img src="../../../../assets/img/head.jpeg" alt="">
        </div>
        <div class="news-right">
            <span class="name">{{list.name}}</span>
            <p class="time">{{list.time}}</p>
            <p class="content">{{list.content}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "UnattendadnewsList",
        props:["list"],
        methods:{
            Chatroom(){
                this.$router.push({
                    path:"/Chatroom"
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    *{
        margin:0;
        padding:0;
    }
    #news{
        display: flex;
        height: 60px;
        background-color:#fffdef;
        margin-top: 5px;
        & .news-left{
            flex: .6;
            margin-top: 10px;
        }
        & .news-right{
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