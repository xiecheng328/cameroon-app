<template>
    <div id="box">
        <div class="timer">{{list.time}}</div>
        <h4 class="Otitle">{{list.title}}</h4>
        <div  class="container">
            <img src="../../../../assets/img/message_30a07a3203b47979cf5519981729f3d8.jpg" alt="">
            <div class="line">--------------------------</div>
            <div class="full" @click="xiangQing">{{pagemessage.read}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pagemessage: {
                    read: this.$t("message.read"),

                },
            }
        },
        name: "openSubScription_message",
        props:["list"],
        methods:{
            xiangQing(){
                this.$router.push({
                    path:'/newdetail'
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .full, .line{
        margin-left: 14px;
        padding-left:0.3rem;
    }
    .Otitle{
        padding-left:0.4rem;
    }
    .box{
        margin: 10px 0 20px 0;
    }
    .timer{
        text-align: center;
    }
    img{
        height: 2rem;
        width:6rem;
        padding-left:0.4rem;
    }
</style>